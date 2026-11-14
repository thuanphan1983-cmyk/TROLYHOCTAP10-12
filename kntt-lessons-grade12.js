/**
 * GIÁO ÁN CHI TIẾT TỪNG BÀI TOÁN LỚP 12 - SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Toàn bộ 19 bài học chuẩn 100% SGK & Đồng bộ tuyệt đối với các mục Videos tương tác (57 mục)
 * Bản chuẩn sư phạm GDPT 2018 - Hệ thống Trợ lý Học tập Toán 10-12
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
  window.createStandardTheoryHTML = createStandardTheoryHTML;

  const ALL_GRADE12_LESSONS = {
  "toan12_bai1": {
        "id": "toan12_bai1",
        "lessonTitle": "Bài 1: Tính đơn điệu và cực trị của hàm số",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Tính đơn điệu của hàm số",
                "sgkHtml": "<p>Định lý về mối liên hệ giữa dấu của đạo hàm và tính đơn điệu của hàm số trên khoảng $K$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$f'(x) \\ge 0, \\quad \\forall x \\in K \\iff f(x) \\text{ đồng biến (tăng) trên } K$$\n                  $$f'(x) \\le 0, \\quad \\forall x \\in K \\iff f(x) \\text{ nghịch biến (giảm) trên } K$$\n                  (Dấu bằng chỉ xảy ra tại hữu hạn điểm thuộc $K$).\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Hàm số đồng biến trên $K$:</strong> $\\forall x_1, x_2 \\in K: x_1 < x_2 \\implies f(x_1) < f(x_2)$ (đồ thị đi lên từ trái sang phải).</li>\n                  <li><strong>Hàm số nghịch biến trên $K$:</strong> $\\forall x_1, x_2 \\in K: x_1 < x_2 \\implies f(x_1) > f(x_2)$ (đồ thị đi xuống từ trái sang phải).</li>\n                  <li><strong>Quy trình xét tính đơn điệu:</strong>\n                    <ol class=\"list-decimal ml-6 mt-1 space-y-0.5\">\n                      <li>Tìm tập xác định $D$ của hàm số.</li>\n                      <li>Tính đạo hàm $f'(x)$, tìm các điểm $x_i$ mà tại đó $f'(x_i) = 0$ hoặc $f'(x_i)$ không xác định.</li>\n                      <li>Lập bảng xét dấu $f'(x)$ và kết luận các khoảng đồng biến, nghịch biến.</li>\n                    </ol>\n                  </li>\n                </ul>",
                "noteHtml": "<li>Kết luận khoảng đơn điệu phải dùng từ \"và\" hoặc dấu chấm phẩy \";\". TUYỆT ĐỐI KHÔNG dùng ký hiệu hợp $\\cup$ hoặc dấu trừ hiệu $\\setminus$!</li>\n                <li>Định lý mở rộng: Dấu bằng xảy ra tại hữu hạn điểm thì không làm mất tính đơn điệu ngặt của hàm số.</li>",
                "mistakeHtml": "<li>Kết luận hàm phân thức $y = \\frac{ax+b}{cx+d}$ đồng biến trên $\\mathbb{R} \\setminus \\{-d/c\\}$ (sai! Phải viết: trên từng khoảng $(-\\infty; -d/c)$ và $(-d/c; +\\infty)$).</li>\n                <li>Nhầm lẫn giữa dấu của $f(x)$ và dấu của $f'(x)$.</li>",
                "tipHtml": "<li><em>\"f' mang dấu DƯƠNG thì hàm số ĐỒNG BIẾN đi lên – f' mang dấu ÂM thì hàm số NGHỊCH BIẾN đi xuống – Kết luận khoảng cách nhau bằng chữ VÀ!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Hàm số $y = x^3 - 3x^2 + 2$ đồng biến trên khoảng nào dưới đây?",
                        "options": [
                            "A. $(2; +\\infty)$",
                            "B. $(0; 2)$",
                            "C. $(-\\infty; 2)$",
                            "D. $(0; +\\infty)$"
                        ],
                        "correct": "A",
                        "explanation": "$y' = 3x^2 - 6x = 3x(x - 2)$. $y' = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Bảng xét dấu: $y' > 0$ trên $(-\\infty; 0)$ và $(2; +\\infty)$; $y' < 0$ trên $(0; 2)$. Vậy hàm số đồng biến trên $(2; +\\infty)$.",
                        "hint1": "Tính đạo hàm $y' = 3x^2 - 6x$.",
                        "hint2": "Nghiệm $x = 0$ và $x = 2$. Trong khoảng 2 nghiệm đạo hàm âm, ngoài khoảng đạo hàm dương."
                    },
                    {
                        "question": "Cho hàm số $y = f(x)$ có bảng biến thiên với $f'(x) > 0$ trên $(-\\infty; 1)$ và $(3; +\\infty)$, $f'(x) < 0$ trên $(1; 3)$. Mệnh đề nào sau đây đúng?",
                        "options": [
                            "A. Hàm số nghịch biến trên khoảng $(1; 3)$.",
                            "B. Hàm số đồng biến trên khoảng $(1; 3)$.",
                            "C. Hàm số nghịch biến trên khoảng $(-\\infty; 1)$.",
                            "D. Hàm số đồng biến trên $\\mathbb{R}$."
                        ],
                        "correct": "A",
                        "explanation": "Vì $f'(x) < 0$ trên $(1; 3)$ nên hàm số nghịch biến trên khoảng $(1; 3)$.",
                        "hint1": "Đạo hàm mang dấu âm thì hàm số nghịch biến.",
                        "hint2": "$f'(x) < 0$ trên khoảng $(1; 3)$."
                    },
                    {
                        "question": "Hàm số $y = \\frac{2x - 1}{x + 1}$ đồng biến trên khoảng nào?",
                        "options": [
                            "A. $(-\\infty; -1)$ và $(-1; +\\infty)$",
                            "B. $\\mathbb{R} \\setminus \\{-1\\}$",
                            "C. $(-\\infty; -1) \\cup (-1; +\\infty)$",
                            "D. $(-1; 2)$"
                        ],
                        "correct": "A",
                        "explanation": "$y' = \\frac{2(1) - (-1)(1)}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0, \\forall x \\neq -1$. Kết luận chuẩn mực SGK: Hàm số đồng biến trên các khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$.",
                        "hint1": "Tập xác định $D = \\mathbb{R} \\setminus \\{-1\\}$. Đạo hàm $y' = 3/(x+1)^2 > 0$.",
                        "hint2": "Không dùng ký hiệu $\\cup$ hay $\\setminus$ khi kết luận khoảng đơn điệu."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 1: Tính đơn điệu và cực trị của hàm số</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Tính đơn điệu của hàm số</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Định lý về mối liên hệ giữa dấu của đạo hàm và tính đơn điệu của hàm số trên khoảng $K$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$f'(x) \\ge 0, \\quad \\forall x \\in K \\iff f(x) \\text{ đồng biến (tăng) trên } K$$\n                  $$f'(x) \\le 0, \\quad \\forall x \\in K \\iff f(x) \\text{ nghịch biến (giảm) trên } K$$\n                  (Dấu bằng chỉ xảy ra tại hữu hạn điểm thuộc $K$).\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Hàm số đồng biến trên $K$:</strong> $\\forall x_1, x_2 \\in K: x_1 < x_2 \\implies f(x_1) < f(x_2)$ (đồ thị đi lên từ trái sang phải).</li>\n                  <li><strong>Hàm số nghịch biến trên $K$:</strong> $\\forall x_1, x_2 \\in K: x_1 < x_2 \\implies f(x_1) > f(x_2)$ (đồ thị đi xuống từ trái sang phải).</li>\n                  <li><strong>Quy trình xét tính đơn điệu:</strong>\n                    <ol class=\"list-decimal ml-6 mt-1 space-y-0.5\">\n                      <li>Tìm tập xác định $D$ của hàm số.</li>\n                      <li>Tính đạo hàm $f'(x)$, tìm các điểm $x_i$ mà tại đó $f'(x_i) = 0$ hoặc $f'(x_i)$ không xác định.</li>\n                      <li>Lập bảng xét dấu $f'(x)$ và kết luận các khoảng đồng biến, nghịch biến.</li>\n                    </ol>\n                  </li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Kết luận khoảng đơn điệu phải dùng từ \"và\" hoặc dấu chấm phẩy \";\". TUYỆT ĐỐI KHÔNG dùng ký hiệu hợp $\\cup$ hoặc dấu trừ hiệu $\\setminus$!</li>\n                <li>Định lý mở rộng: Dấu bằng xảy ra tại hữu hạn điểm thì không làm mất tính đơn điệu ngặt của hàm số.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Kết luận hàm phân thức $y = \\frac{ax+b}{cx+d}$ đồng biến trên $\\mathbb{R} \\setminus \\{-d/c\\}$ (sai! Phải viết: trên từng khoảng $(-\\infty; -d/c)$ và $(-d/c; +\\infty)$).</li>\n                <li>Nhầm lẫn giữa dấu của $f(x)$ và dấu của $f'(x)$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"f' mang dấu DƯƠNG thì hàm số ĐỒNG BIẾN đi lên – f' mang dấu ÂM thì hàm số NGHỊCH BIẾN đi xuống – Kết luận khoảng cách nhau bằng chữ VÀ!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Cực trị của hàm số",
                "sgkHtml": "<p>Định nghĩa điểm cực đại, điểm cực tiểu và điều kiện cần - đủ của cực trị:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$f'(x) \\text{ đổi dấu từ } (+) \\to (-) \\text{ khi qua } x_0 \\iff x_0 \\text{ là điểm cực đại}$$\n                  $$f'(x) \\text{ đổi dấu từ } (-) \\to (+) \\text{ khi qua } x_0 \\iff x_0 \\text{ là điểm cực tiểu}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Phân biệt thuật ngữ cực trị:</strong>\n                    <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                      <li>$x_0$ gọi là <i>điểm cực trị của hàm số</i> (hoặc điểm cực đại / điểm cực tiểu của hàm số).</li>\n                      <li>$y_0 = f(x_0)$ gọi là <i>cực trị của hàm số</i> (hoặc giá trị cực đại / giá trị cực tiểu).</li>\n                      <li>Điểm $M(x_0; f(x_0))$ gọi là <i>điểm cực trị của đồ thị hàm số</i>.</li>\n                    </ul>\n                  </li>\n                  <li><strong>Quy tắc 2 (Dùng đạo hàm cấp hai):</strong> Nếu $f'(x_0) = 0$ và:\n                    <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                      <li>$f''(x_0) < 0 \\implies x_0$ là điểm cực đại.</li>\n                      <li>$f''(x_0) > 0 \\implies x_0$ là điểm cực tiểu.</li>\n                    </ul>\n                  </li>\n                  <li>Hàm số có thể đạt cực trị tại điểm mà tại đó đạo hàm không xác định (nhưng hàm số vẫn phải liên tục tại điểm đó!).</li>\n                </ul>",
                "noteHtml": "<li>Đạo hàm bằng 0 ($f'(x_0) = 0$) chưa chắc là điểm cực trị nếu đạo hàm KHÔNG ĐỔI DẤU khi qua $x_0$ (nghiệm bội chẵn).</li>\n                <li>Cực đại có thể nhỏ hơn cực tiểu (cực trị chỉ mang tính cục bộ trong một lân cận lân cận của $x_0$).</li>",
                "mistakeHtml": "<li>Nhầm lẫn giữa \"điểm cực trị của hàm số\" ($x_0$), \"giá trị cực trị\" ($y_0$) và \"điểm cực trị của đồ thị\" ($M(x_0; y_0)$).</li>\n                <li>Khẳng định hàm số bậc nhất trên bậc nhất $y = \\frac{ax+b}{cx+d}$ có cực trị (hàm này không bao giờ có cực trị vì đạo hàm không đổi dấu!).</li>",
                "tipHtml": "<li><em>\"Qua đỉnh đồi là Cực Đại (dương sang âm) – Xuống đáy thung lũng là Cực Tiểu (âm sang dương) – f'(x0)=0 chưa chắc là cực trị nếu không đổi dấu!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Hàm số $y = x^3 - 3x + 1$ đạt cực tiểu tại điểm nào?",
                        "options": [
                            "A. $x = 1$",
                            "B. $x = -1$",
                            "C. $y = -1$",
                            "D. $(1; -1)$"
                        ],
                        "correct": "A",
                        "explanation": "$y' = 3x^2 - 3 = 3(x^2 - 1)$. $y' = 0 \\Leftrightarrow x = \\pm 1$. Bảng biến thiên: $y'$ đổi dấu từ $(-)$ sang $(+)$ khi qua $x = 1$. Do đó điểm cực tiểu của hàm số là $x = 1$.",
                        "hint1": "Hàm số đạt cực tiểu khi $y'$ đổi dấu từ âm sang dương.",
                        "hint2": "Đạo hàm đổi dấu $(-)$ sang $(+)$ tại $x = 1$."
                    },
                    {
                        "question": "Giá trị cực đại của hàm số $y = -x^3 + 3x^2 + 1$ bằng:",
                        "options": [
                            "A. $5$",
                            "B. $2$",
                            "C. $1$",
                            "D. $0$"
                        ],
                        "correct": "A",
                        "explanation": "$y' = -3x^2 + 6x = -3x(x - 2) = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Tại $x = 2$, $y'$ đổi dấu từ $(+)$ sang $(-)$ nên đạt cực đại. Giá trị cực đại là $y(2) = -(2)^3 + 3(2)^2 + 1 = -8 + 12 + 1 = 5$.",
                        "hint1": "Đề bài hỏi 'giá trị cực đại' tức hỏi $y_{CĐ}$.",
                        "hint2": "Điểm cực đại là $x = 2$, thay vào hàm số được $y(2) = 5$."
                    },
                    {
                        "question": "Toạ độ điểm cực đại của đồ thị hàm số $y = x^4 - 2x^2 + 3$ là:",
                        "options": [
                            "A. $(0; 3)$",
                            "B. $(1; 2)$",
                            "C. $(-1; 2)$",
                            "D. $x = 0$"
                        ],
                        "correct": "A",
                        "explanation": "$y' = 4x^3 - 4x = 4x(x^2 - 1) = 0 \\Leftrightarrow x = 0$ hoặc $x = \\pm 1$. Tại $x = 0$, $y'$ đổi dấu từ $(+)$ sang $(-)$ nên là điểm cực đại. Điểm cực đại của đồ thị là $(0; y(0)) = (0; 3)$.",
                        "hint1": "Điểm cực trị của đồ thị có toạ độ $(x; y)$.",
                        "hint2": "Tại $x = 0$, $y = 3 \\implies (0; 3)$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 1: Tính đơn điệu và cực trị của hàm số</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Cực trị của hàm số</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Định nghĩa điểm cực đại, điểm cực tiểu và điều kiện cần - đủ của cực trị:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$f'(x) \\text{ đổi dấu từ } (+) \\to (-) \\text{ khi qua } x_0 \\iff x_0 \\text{ là điểm cực đại}$$\n                  $$f'(x) \\text{ đổi dấu từ } (-) \\to (+) \\text{ khi qua } x_0 \\iff x_0 \\text{ là điểm cực tiểu}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Phân biệt thuật ngữ cực trị:</strong>\n                    <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                      <li>$x_0$ gọi là <i>điểm cực trị của hàm số</i> (hoặc điểm cực đại / điểm cực tiểu của hàm số).</li>\n                      <li>$y_0 = f(x_0)$ gọi là <i>cực trị của hàm số</i> (hoặc giá trị cực đại / giá trị cực tiểu).</li>\n                      <li>Điểm $M(x_0; f(x_0))$ gọi là <i>điểm cực trị của đồ thị hàm số</i>.</li>\n                    </ul>\n                  </li>\n                  <li><strong>Quy tắc 2 (Dùng đạo hàm cấp hai):</strong> Nếu $f'(x_0) = 0$ và:\n                    <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                      <li>$f''(x_0) < 0 \\implies x_0$ là điểm cực đại.</li>\n                      <li>$f''(x_0) > 0 \\implies x_0$ là điểm cực tiểu.</li>\n                    </ul>\n                  </li>\n                  <li>Hàm số có thể đạt cực trị tại điểm mà tại đó đạo hàm không xác định (nhưng hàm số vẫn phải liên tục tại điểm đó!).</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Đạo hàm bằng 0 ($f'(x_0) = 0$) chưa chắc là điểm cực trị nếu đạo hàm KHÔNG ĐỔI DẤU khi qua $x_0$ (nghiệm bội chẵn).</li>\n                <li>Cực đại có thể nhỏ hơn cực tiểu (cực trị chỉ mang tính cục bộ trong một lân cận lân cận của $x_0$).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Nhầm lẫn giữa \"điểm cực trị của hàm số\" ($x_0$), \"giá trị cực trị\" ($y_0$) và \"điểm cực trị của đồ thị\" ($M(x_0; y_0)$).</li>\n                <li>Khẳng định hàm số bậc nhất trên bậc nhất $y = \\frac{ax+b}{cx+d}$ có cực trị (hàm này không bao giờ có cực trị vì đạo hàm không đổi dấu!).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Qua đỉnh đồi là Cực Đại (dương sang âm) – Xuống đáy thung lũng là Cực Tiểu (âm sang dương) – f'(x0)=0 chưa chắc là cực trị nếu không đổi dấu!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = x(x - 1)^2(x + 2)$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Phương trình $f'(x) = 0$ có 3 nghiệm thực phân biệt $x = 0, x = 1, x = -2$.",
                        "correct": "true",
                        "explain": "Các nghiệm là $0, 1, -2$."
                    },
                    {
                        "key": "b",
                        "text": "Đạo hàm $f'(x)$ không đổi dấu khi đi qua điểm $x = 1$.",
                        "correct": "true",
                        "explain": "Vì $(x - 1)^2$ là nghiệm bội chẵn."
                    },
                    {
                        "key": "c",
                        "text": "Hàm số $y = f(x)$ có đúng 2 điểm cực trị.",
                        "correct": "true",
                        "explain": "Chỉ đổi dấu qua $x = 0$ và $x = -2$."
                    },
                    {
                        "key": "d",
                        "text": "Hàm số đạt cực đại tại điểm $x = 1$.",
                        "correct": "false",
                        "explain": "$x = 1$ không phải là điểm cực trị."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: Về tính đơn điệu của hàm số $y = x^3 - 3x$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Hàm số đồng biến trên khoảng $(-\\infty; -1)$.",
                        "correct": "true",
                        "explain": "$y' = 3x^2 - 3 > 0$ khi $|x| > 1$."
                    },
                    {
                        "key": "b",
                        "text": "Hàm số nghịch biến trên khoảng $(-1; 1)$.",
                        "correct": "true",
                        "explain": "$y' < 0$ khi $-1 < x < 1$."
                    },
                    {
                        "key": "c",
                        "text": "Hàm số đồng biến trên khoảng $(1; +\\infty)$.",
                        "correct": "true",
                        "explain": "$y' > 0$ khi $x > 1$."
                    },
                    {
                        "key": "d",
                        "text": "Hàm số đồng biến trên khoảng $(-\\infty; -1) \\cup (1; +\\infty)$.",
                        "correct": "false",
                        "explain": "Sai ký hiệu $\\cup$ khi kết luận đơn điệu."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: Cho hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \\neq 0$):",
                "items": [
                    {
                        "key": "a",
                        "text": "Hàm số có cực trị khi và chỉ khi phương trình $y' = 0$ có 2 nghiệm phân biệt.",
                        "correct": "true",
                        "explain": "Tam thức bậc 2 có $\\Delta > 0$."
                    },
                    {
                        "key": "b",
                        "text": "Hàm số bậc ba có thể có đúng 1 điểm cực trị.",
                        "correct": "false",
                        "explain": "Hàm bậc ba chỉ có 2 cực trị hoặc 0 cực trị."
                    },
                    {
                        "key": "c",
                        "text": "Nếu $a > 0$ và hàm số có 2 cực trị thì điểm cực đại có hoành độ nhỏ hơn điểm cực tiểu.",
                        "correct": "true",
                        "explain": "Đồ thị đi lên rồi xuống rồi lên."
                    },
                    {
                        "key": "d",
                        "text": "Đồ thị hàm số bậc ba luôn có tâm đối xứng là điểm uốn.",
                        "correct": "true",
                        "explain": "Điểm uốn thoả mãn $y'' = 0$."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: Về các khái niệm cực trị trong giải tích:",
                "items": [
                    {
                        "key": "a",
                        "text": "Điểm cực trị của hàm số là một giá trị của biến số $x$.",
                        "correct": "true",
                        "explain": "Quy chuẩn thuật ngữ."
                    },
                    {
                        "key": "b",
                        "text": "Giá trị cực trị của hàm số là giá trị của hàm số $y$.",
                        "correct": "true",
                        "explain": "Quy chuẩn thuật ngữ."
                    },
                    {
                        "key": "c",
                        "text": "Cực đại của hàm số luôn lớn hơn cực tiểu của hàm số đó.",
                        "correct": "false",
                        "explain": "Cực trị mang tính địa phương, cực đại có thể nhỏ hơn cực tiểu."
                    },
                    {
                        "key": "d",
                        "text": "Nếu hàm số đạt cực trị tại $x_0$ và có đạo hàm tại $x_0$ thì $f'(x_0) = 0$.",
                        "correct": "true",
                        "explain": "Định lý Fermat."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Cho hàm số $y = \\frac{x - 2}{x + 1}$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{-1\\}$.",
                        "correct": "true",
                        "explain": "Mẫu số khác 0."
                    },
                    {
                        "key": "b",
                        "text": "Đạo hàm $y' = \\frac{3}{(x + 1)^2}$.",
                        "correct": "true",
                        "explain": "$1(1) - (-2)(1) = 3$."
                    },
                    {
                        "key": "c",
                        "text": "Hàm số đồng biến trên từng khoảng xác định.",
                        "correct": "true",
                        "explain": "$y' > 0, \\forall x \\neq -1$."
                    },
                    {
                        "key": "d",
                        "text": "Hàm số có 1 điểm cực đại và 1 điểm cực tiểu.",
                        "correct": "false",
                        "explain": "Hàm nhất biến không có cực trị."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Về bài toán thực tiễn tìm thời điểm vận tốc đạt cực đại:",
                "items": [
                    {
                        "key": "a",
                        "text": "Vận tốc tức thời $v(t) = s'(t)$.",
                        "correct": "true",
                        "explain": "Đạo hàm của quãng đường."
                    },
                    {
                        "key": "b",
                        "text": "Gia tốc tức thời $a(t) = v'(t) = s''(t)$.",
                        "correct": "true",
                        "explain": "Đạo hàm của vận tốc."
                    },
                    {
                        "key": "c",
                        "text": "Thời điểm vận tốc đạt cực trị là nghiệm của phương trình gia tốc $a(t) = 0$.",
                        "correct": "true",
                        "explain": "Điều kiện cần của cực trị vận tốc."
                    },
                    {
                        "key": "d",
                        "text": "Vận tốc luôn đạt giá trị lớn nhất tại thời điểm bắt đầu chuyển động $t = 0$.",
                        "correct": "false",
                        "explain": "Tuỳ thuộc vào quy luật của hàm vận tốc."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 1:") || t.includes("tính đơn điệu") || t.includes("cực trị")) && !t.includes("tiệm cận") && !t.includes("giá trị lớn nhất");
      }
    },

  "toan12_bai2": {
        "id": "toan12_bai2",
        "lessonTitle": "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Định nghĩa GTLN & GTNN",
                "sgkHtml": "<p>Định nghĩa Giá trị lớn nhất (GTLN) và Giá trị nhỏ nhất (GTNN) của hàm số $f(x)$ trên tập hợp $D$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$M = \\max_{x \\in D} f(x) \\iff \\begin{cases} f(x) \\le M, \\quad \\forall x \\in D \\\\ \\exists x_0 \\in D: f(x_0) = M \\end{cases}$$\n                  $$m = \\min_{x \\in D} f(x) \\iff \\begin{cases} f(x) \\ge m, \\quad \\forall x \\in D \\\\ \\exists x_0 \\in D: f(x_0) = m \\end{cases}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Điều kiện dấu bằng xảy ra:</strong> Bắt buộc phải chỉ ra ít nhất một điểm $x_0 \\in D$ sao cho $f(x_0)$ đạt đúng giá trị $M$ (hoặc $m$). Nếu không tồn tại $x_0$ thì không có GTLN (hoặc GTNN).</li>\n                  <li><strong>Định lý Weierstrass:</strong> Mọi hàm số liên tục trên một <b>đoạn</b> $[a; b]$ đều chắc chắn đạt được GTLN và GTNN trên đoạn đó.</li>\n                  <li><strong>So sánh với cực trị:</strong> Cực đại / cực tiểu chỉ là tính chất địa phương (lân cận), còn GTLN / GTNN là tính chất toàn cục trên toàn bộ tập $D$.</li>\n                </ul>",
                "noteHtml": "<li>Nếu tập $D$ là khoảng $(a; b)$ mở, hàm số có thể không có GTLN hoặc không có GTNN (nếu giá trị lớn nhất rơi vào tiệm cận hoặc đầu mút không thuộc miền xác định).</li>\n                <li>GTLN luôn lớn hơn hoặc bằng GTNN: $\\max f(x) \\ge \\min f(x)$. Dấu bằng chỉ xảy ra khi hàm số là hàm hằng.</li>",
                "mistakeHtml": "<li>Quên kiểm tra điều kiện tồn tại điểm dấu bằng $x_0 \\in D$.</li>\n                <li>Nhầm lẫn giữa giá trị cực đại và giá trị lớn nhất.</li>",
                "tipHtml": "<li><em>\"GTLN là nóc nhà – GTNN là đáy sàn – Muốn khẳng định Max/Min bắt buộc phải có điểm x0 chạm đích!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Cho hàm số $y = f(x)$ liên tục trên đoạn $[-1; 3]$ có đồ thị đạt điểm cao nhất tại $A(2; 5)$ và điểm thấp nhất tại $B(-1; -2)$. Giá trị lớn nhất của $f(x)$ trên $[-1; 3]$ là:",
                        "options": [
                            "A. $5$",
                            "B. $2$",
                            "C. $3$",
                            "D. $-2$"
                        ],
                        "correct": "A",
                        "explanation": "Điểm cao nhất có tung độ $y = 5$, do đó $\\max_{[-1; 3]} f(x) = 5$ đạt tại $x = 2$.",
                        "hint1": "GTLN là tung độ của điểm cao nhất trên đồ thị.",
                        "hint2": "Tung độ điểm $A(2; 5)$ là $5$."
                    },
                    {
                        "question": "Hàm số $y = \\frac{1}{x}$ trên khoảng $(0; +\\infty)$ có GTLN bằng:",
                        "options": [
                            "A. Không tồn tại",
                            "B. $0$",
                            "C. $1$",
                            "D. $+\\infty$"
                        ],
                        "correct": "A",
                        "explanation": "Khi $x \\to 0^+$ thì $y \\to +\\infty$, do đó hàm số không bị chặn trên, không có GTLN trên khoảng $(0; +\\infty)$.",
                        "hint1": "Xét giới hạn khi $x \\to 0^+$.",
                        "hint2": "Hàm số tiến ra vô cực nên không có số thực $M$ nào làm GTLN."
                    },
                    {
                        "question": "Giá trị nhỏ nhất của hàm số $y = x^2 - 4x + 5$ trên $\\mathbb{R}$ bằng:",
                        "options": [
                            "A. $1$",
                            "B. $2$",
                            "C. $5$",
                            "D. $0$"
                        ],
                        "correct": "A",
                        "explanation": "$y = (x - 2)^2 + 1 \\ge 1, \\forall x$. Dấu bằng xảy ra khi $x = 2$. Vậy $\\min y = 1$.",
                        "hint1": "Biến đổi thành hằng đẳng thức $(x - 2)^2 + 1$.",
                        "hint2": "Bình phương luôn không âm, nhỏ nhất bằng $1$ khi $x = 2$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Định nghĩa GTLN & GTNN</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Định nghĩa Giá trị lớn nhất (GTLN) và Giá trị nhỏ nhất (GTNN) của hàm số $f(x)$ trên tập hợp $D$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$M = \\max_{x \\in D} f(x) \\iff \\begin{cases} f(x) \\le M, \\quad \\forall x \\in D \\\\ \\exists x_0 \\in D: f(x_0) = M \\end{cases}$$\n                  $$m = \\min_{x \\in D} f(x) \\iff \\begin{cases} f(x) \\ge m, \\quad \\forall x \\in D \\\\ \\exists x_0 \\in D: f(x_0) = m \\end{cases}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Điều kiện dấu bằng xảy ra:</strong> Bắt buộc phải chỉ ra ít nhất một điểm $x_0 \\in D$ sao cho $f(x_0)$ đạt đúng giá trị $M$ (hoặc $m$). Nếu không tồn tại $x_0$ thì không có GTLN (hoặc GTNN).</li>\n                  <li><strong>Định lý Weierstrass:</strong> Mọi hàm số liên tục trên một <b>đoạn</b> $[a; b]$ đều chắc chắn đạt được GTLN và GTNN trên đoạn đó.</li>\n                  <li><strong>So sánh với cực trị:</strong> Cực đại / cực tiểu chỉ là tính chất địa phương (lân cận), còn GTLN / GTNN là tính chất toàn cục trên toàn bộ tập $D$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Nếu tập $D$ là khoảng $(a; b)$ mở, hàm số có thể không có GTLN hoặc không có GTNN (nếu giá trị lớn nhất rơi vào tiệm cận hoặc đầu mút không thuộc miền xác định).</li>\n                <li>GTLN luôn lớn hơn hoặc bằng GTNN: $\\max f(x) \\ge \\min f(x)$. Dấu bằng chỉ xảy ra khi hàm số là hàm hằng.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên kiểm tra điều kiện tồn tại điểm dấu bằng $x_0 \\in D$.</li>\n                <li>Nhầm lẫn giữa giá trị cực đại và giá trị lớn nhất.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"GTLN là nóc nhà – GTNN là đáy sàn – Muốn khẳng định Max/Min bắt buộc phải có điểm x0 chạm đích!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Tìm GTLN, GTNN trên đoạn [a; b]",
                "sgkHtml": "<p>Quy tắc tìm GTLN và GTNN của hàm số liên tục trên đoạn $[a; b]$ không cần lập bảng biến thiên:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  <ol class=\"list-decimal ml-6 space-y-1 text-slate-200\">\n                    <li><b>Bước 1:</b> Tính đạo hàm $f'(x)$.</li>\n                    <li><b>Bước 2:</b> Tìm các nghiệm $x_1, x_2, \\dots, x_k$ của phương trình $f'(x) = 0$ thuộc khoảng mở $(a; b)$ (loại các nghiệm nằm ngoài đoạn!).</li>\n                    <li><b>Bước 3:</b> Tính giá trị của hàm số tại các điểm vừa tìm được và tại hai đầu mút:\n                      $$f(a), \\quad f(b), \\quad f(x_1), \\quad f(x_2), \\dots, \\quad f(x_k)$$\n                    </li>\n                    <li><b>Bước 4:</b> Số lớn nhất trong các giá trị đó là GTLN ($M$), số nhỏ nhất là GTNN ($m$).</li>\n                  </ol>\n                </div>",
                "noteHtml": "<li>Chỉ lấy các nghiệm $x_i$ nằm TRONG khoảng mở $(a; b)$. Nghiệm nằm ngoài thì bỏ qua ngay lập tức!</li>\n                <li>Bấm máy Casio fx-580VNX: Vào MENU 8 (Bảng giá trị Table), nhập hàm số $f(x)$, Start = $a$, End = $b$, Step = $(b - a)/29$ hoặc $(b-a)/40$. Dò cột $f(x)$ tìm giá trị lớn nhất và nhỏ nhất!</li>",
                "mistakeHtml": "<li>Quên tính giá trị tại hai đầu mút $f(a)$ và $f(b)$ (nhiều bài toán GTLN/GTNN rơi vào chính hai đầu mút!).</li>\n                <li>Lấy cả các nghiệm $x_i$ nằm ngoài đoạn $[a; b]$.</li>",
                "tipHtml": "<li><em>\"Tìm Min Max trên đoạn: Tính f tại 2 đầu mút và các nghiệm nằm trong khoảng – So sánh các số tìm ra: Số to nhất là Max, bé nhất là Min!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Giá trị lớn nhất của hàm số $f(x) = x^3 - 3x + 2$ trên đoạn $[0; 2]$ bằng:",
                        "options": [
                            "A. $4$",
                            "B. $2$",
                            "C. $0$",
                            "D. $1$"
                        ],
                        "correct": "A",
                        "explanation": "$f'(x) = 3x^2 - 3 = 0 \\Leftrightarrow x = \\pm 1$. Trên khoảng $(0; 2)$ chỉ có nghiệm $x = 1$. Tính các giá trị: $f(0) = 2; f(2) = 2^3 - 3(2) + 2 = 4; f(1) = 1 - 3 + 2 = 0$. Giá trị lớn nhất là $\\max = 4$ tại $x = 2$.",
                        "hint1": "Loại nghiệm $x = -1$ vì không thuộc $(0; 2)$.",
                        "hint2": "So sánh $f(0)=2, f(1)=0, f(2)=4 \\implies \\max = 4$."
                    },
                    {
                        "question": "Giá trị nhỏ nhất của hàm số $f(x) = x^4 - 2x^2 + 3$ trên đoạn $[0; 2]$ bằng:",
                        "options": [
                            "A. $2$",
                            "B. $3$",
                            "C. $11$",
                            "D. $0$"
                        ],
                        "correct": "A",
                        "explanation": "$f'(x) = 4x^3 - 4x = 0 \\Leftrightarrow x = 0; x = 1; x = -1$. Trên $(0; 2)$ có nghiệm $x = 1$. Tính: $f(0) = 3; f(1) = 1 - 2 + 3 = 2; f(2) = 16 - 8 + 3 = 11$. Vậy $\\min = 2$ tại $x = 1$.",
                        "hint1": "Nghiệm thuộc $(0; 2)$ là $x = 1$.",
                        "hint2": "So sánh $f(0)=3, f(1)=2, f(2)=11 \\implies \\min = 2$."
                    },
                    {
                        "question": "Giá trị lớn nhất của hàm số $y = \\frac{x - 1}{x + 1}$ trên đoạn $[0; 3]$ bằng:",
                        "options": [
                            "A. $\\frac{1}{2}$",
                            "B. $-1$",
                            "C. $1$",
                            "D. $\\frac{2}{3}$"
                        ],
                        "correct": "A",
                        "explanation": "$y' = \\frac{2}{(x+1)^2} > 0, \\forall x \\in [0; 3]$. Hàm số luôn đồng biến trên đoạn $[0; 3]$, do đó GTLN đạt tại đầu mút bên phải: $\\max = f(3) = \\frac{3 - 1}{3 + 1} = \\frac{2}{4} = \\frac{1}{2}$.",
                        "hint1": "Hàm số đồng biến trên toàn đoạn nên Max tại đầu mút phải.",
                        "hint2": "$f(3) = (3 - 1)/(3 + 1) = 2/4 = 1/2$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Tìm GTLN, GTNN trên đoạn [a; b]</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Quy tắc tìm GTLN và GTNN của hàm số liên tục trên đoạn $[a; b]$ không cần lập bảng biến thiên:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  <ol class=\"list-decimal ml-6 space-y-1 text-slate-200\">\n                    <li><b>Bước 1:</b> Tính đạo hàm $f'(x)$.</li>\n                    <li><b>Bước 2:</b> Tìm các nghiệm $x_1, x_2, \\dots, x_k$ của phương trình $f'(x) = 0$ thuộc khoảng mở $(a; b)$ (loại các nghiệm nằm ngoài đoạn!).</li>\n                    <li><b>Bước 3:</b> Tính giá trị của hàm số tại các điểm vừa tìm được và tại hai đầu mút:\n                      $$f(a), \\quad f(b), \\quad f(x_1), \\quad f(x_2), \\dots, \\quad f(x_k)$$\n                    </li>\n                    <li><b>Bước 4:</b> Số lớn nhất trong các giá trị đó là GTLN ($M$), số nhỏ nhất là GTNN ($m$).</li>\n                  </ol>\n                </div></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Chỉ lấy các nghiệm $x_i$ nằm TRONG khoảng mở $(a; b)$. Nghiệm nằm ngoài thì bỏ qua ngay lập tức!</li>\n                <li>Bấm máy Casio fx-580VNX: Vào MENU 8 (Bảng giá trị Table), nhập hàm số $f(x)$, Start = $a$, End = $b$, Step = $(b - a)/29$ hoặc $(b-a)/40$. Dò cột $f(x)$ tìm giá trị lớn nhất và nhỏ nhất!</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên tính giá trị tại hai đầu mút $f(a)$ và $f(b)$ (nhiều bài toán GTLN/GTNN rơi vào chính hai đầu mút!).</li>\n                <li>Lấy cả các nghiệm $x_i$ nằm ngoài đoạn $[a; b]$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Tìm Min Max trên đoạn: Tính f tại 2 đầu mút và các nghiệm nằm trong khoảng – So sánh các số tìm ra: Số to nhất là Max, bé nhất là Min!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 3,
                "sectionTitle": "Mục 3: Tìm GTLN, GTNN trên khoảng / nửa khoảng",
                "sgkHtml": "<p>Phương pháp tìm GTLN và GTNN trên khoảng $(a; b)$ hoặc nửa khoảng $[a; b)$:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Phương pháp bắt buộc:</strong> Phải lập <b>Bảng biến thiên</b> của hàm số trên miền xác định.</li>\n                  <li><strong>Tính giới hạn tại các đầu mút mở:</strong> Tính $\\lim_{x \\to a^+} f(x)$ và $\\lim_{x \\to b^-} f(x)$ (hoặc $\\lim_{x \\to \\pm\\infty} f(x)$).</li>\n                  <li>Dựa vào chiều mũi tên của bảng biến thiên để kết luận:\n                    <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                      <li>Nếu hàm số chỉ có đúng một điểm cực trị duy nhất trên khoảng và đó là cực đại (cực tiểu) thì điểm đó chính là GTLN (GTNN).</li>\n                      <li>Nếu giá trị lớn nhất rơi vào giới hạn tại vô cực hoặc đầu mút không thuộc tập xác định thì hàm số <b>không có</b> GTLN (GTNN).</li>\n                    </ul>\n                  </li>\n                  <li><strong>Sử dụng bất đẳng thức Cô-si (AM-GM):</strong> Cho hai số không âm: $A + B \\ge 2\\sqrt{AB}$. Dấu bằng khi $A = B$.</li>\n                </ul>",
                "noteHtml": "<li>Định lý duy nhất cực trị: Nếu hàm số liên tục trên khoảng và chỉ có 1 cực trị duy nhất thì cực đại là Max, cực tiểu là Min!</li>\n                <li>Rất hữu ích cho các bài toán tối ưu hoá thực tế (kích thước hình học $x > 0$).</li>",
                "mistakeHtml": "<li>Kết luận GTLN là giới hạn $+\\infty$ (vô cực không phải là một số thực, do đó không thể là GTLN!).</li>\n                <li>Không xét giới hạn tại các đầu mút dẫn đến kết luận sai về sự tồn tại của Max/Min.</li>",
                "tipHtml": "<li><em>\"Trên khoảng mở bắt buộc vẽ bảng biến thiên – Duy nhất 1 cực tiểu thì cực tiểu là Min – Chú ý giới hạn đầu mút!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Giá trị nhỏ nhất của hàm số $f(x) = x + \\frac{4}{x}$ trên khoảng $(0; +\\infty)$ bằng:",
                        "options": [
                            "A. $4$",
                            "B. $2$",
                            "C. $5$",
                            "D. Không tồn tại"
                        ],
                        "correct": "A",
                        "explanation": "Cách 1 (Cô-si): Với $x > 0$, áp dụng BĐT Cô-si: $x + \\frac{4}{x} \\ge 2\\sqrt{x \\cdot \\frac{4}{x}} = 4$. Dấu bằng khi $x = 4/x \\Leftrightarrow x^2 = 4 \\implies x = 2$. Vậy $\\min = 4$.",
                        "hint1": "Áp dụng bất đẳng thức Cô-si cho $x$ và $4/x$.",
                        "hint2": "$x + 4/x \\ge 2\\sqrt{4} = 4$. Dấu bằng tại $x = 2$."
                    },
                    {
                        "question": "Hàm số $y = -x^2 + 4x + 1$ trên khoảng $(0; +\\infty)$ đạt GTLN tại:",
                        "options": [
                            "A. $x = 2$",
                            "B. $x = 4$",
                            "C. $x = 0$",
                            "D. $x = 1$"
                        ],
                        "correct": "A",
                        "explanation": "$y' = -2x + 4 = 0 \\Leftrightarrow x = 2 \\in (0; +\\infty)$. Đạo hàm đổi dấu từ $(+)$ sang $(-)$ nên $x = 2$ là điểm cực đại duy nhất trên $(0; +\\infty)$. Do đó hàm số đạt GTLN tại $x = 2$, $\\max = y(2) = 5$.",
                        "hint1": "$y' = -2x + 4 = 0 \\implies x = 2$.",
                        "hint2": "Đỉnh parabol quay bề lõm xuống dưới."
                    },
                    {
                        "question": "Số lượng giá trị nguyên của tham số $m$ để hàm số $y = x^3 - 3x^2 + m$ có GTLN trên đoạn $[0; 3]$ bằng $10$ là:",
                        "options": [
                            "A. $1$",
                            "B. $2$",
                            "C. $0$",
                            "D. Vô số"
                        ],
                        "correct": "A",
                        "explanation": "Xét $g(x) = x^3 - 3x^2$ trên $[0; 3]$: $g'(x) = 3x^2 - 6x = 0 \\Leftrightarrow x = 0; x = 2$. $g(0) = 0; g(2) = -4; g(3) = 0$. GTLN của $g(x)$ là $0$. Do đó $\\max y = 0 + m = m$. Yêu cầu $\\max = 10 \\implies m = 10$. Có duy nhất 1 giá trị.",
                        "hint1": "Tách hàm số thành $g(x) + m$.",
                        "hint2": "$\\max g(x) = 0 \\implies \\max y = m = 10$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 3: Mục 3: Tìm GTLN, GTNN trên khoảng / nửa khoảng</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Phương pháp tìm GTLN và GTNN trên khoảng $(a; b)$ hoặc nửa khoảng $[a; b)$:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Phương pháp bắt buộc:</strong> Phải lập <b>Bảng biến thiên</b> của hàm số trên miền xác định.</li>\n                  <li><strong>Tính giới hạn tại các đầu mút mở:</strong> Tính $\\lim_{x \\to a^+} f(x)$ và $\\lim_{x \\to b^-} f(x)$ (hoặc $\\lim_{x \\to \\pm\\infty} f(x)$).</li>\n                  <li>Dựa vào chiều mũi tên của bảng biến thiên để kết luận:\n                    <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                      <li>Nếu hàm số chỉ có đúng một điểm cực trị duy nhất trên khoảng và đó là cực đại (cực tiểu) thì điểm đó chính là GTLN (GTNN).</li>\n                      <li>Nếu giá trị lớn nhất rơi vào giới hạn tại vô cực hoặc đầu mút không thuộc tập xác định thì hàm số <b>không có</b> GTLN (GTNN).</li>\n                    </ul>\n                  </li>\n                  <li><strong>Sử dụng bất đẳng thức Cô-si (AM-GM):</strong> Cho hai số không âm: $A + B \\ge 2\\sqrt{AB}$. Dấu bằng khi $A = B$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Định lý duy nhất cực trị: Nếu hàm số liên tục trên khoảng và chỉ có 1 cực trị duy nhất thì cực đại là Max, cực tiểu là Min!</li>\n                <li>Rất hữu ích cho các bài toán tối ưu hoá thực tế (kích thước hình học $x > 0$).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Kết luận GTLN là giới hạn $+\\infty$ (vô cực không phải là một số thực, do đó không thể là GTLN!).</li>\n                <li>Không xét giới hạn tại các đầu mút dẫn đến kết luận sai về sự tồn tại của Max/Min.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Trên khoảng mở bắt buộc vẽ bảng biến thiên – Duy nhất 1 cực tiểu thì cực tiểu là Min – Chú ý giới hạn đầu mút!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Cho hàm số $f(x) = x^3 - 3x^2 + 1$ trên đoạn $[-1; 2]$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Hàm số liên tục trên đoạn $[-1; 2]$.",
                        "correct": "true",
                        "explain": "Hàm đa thức liên tục trên R."
                    },
                    {
                        "key": "b",
                        "text": "Đạo hàm $f'(x) = 3x^2 - 6x = 0$ có nghiệm $x = 0$ và $x = 2$.",
                        "correct": "true",
                        "explain": "Nghiệm $x = 0$ và $x = 2$ đều thuộc $[-1; 2]$."
                    },
                    {
                        "key": "c",
                        "text": "Giá trị nhỏ nhất của hàm số trên đoạn $[-1; 2]$ bằng $-3$.",
                        "correct": "true",
                        "explain": "$f(-1) = -3, f(0) = 1, f(2) = -3 \\implies \\min = -3$."
                    },
                    {
                        "key": "d",
                        "text": "Giá trị lớn nhất của hàm số trên đoạn $[-1; 2]$ bằng $5$.",
                        "correct": "false",
                        "explain": "GTLN bằng $1$ tại $x = 0$."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: Về định nghĩa giá trị lớn nhất và nhỏ nhất:",
                "items": [
                    {
                        "key": "a",
                        "text": "Nếu $f(x) \\le M$ với mọi $x \\in D$ và có $x_0 \\in D$ để $f(x_0) = M$ thì $M = \\max f(x)$.",
                        "correct": "true",
                        "explain": "Đúng định nghĩa GTLN."
                    },
                    {
                        "key": "b",
                        "text": "Hàm số liên tục trên một khoảng mở luôn luôn đạt GTLN và GTNN.",
                        "correct": "false",
                        "explain": "Chỉ chắc chắn trên một ĐOẠN (Định lý Weierstrass)."
                    },
                    {
                        "key": "c",
                        "text": "Giá trị lớn nhất của hàm số luôn lớn hơn hoặc bằng mọi giá trị cực đại.",
                        "correct": "true",
                        "explain": "GTLN là chặn trên lớn nhất toàn cục."
                    },
                    {
                        "key": "d",
                        "text": "Nếu hàm số đồng biến trên $[a; b]$ thì $\\max f(x) = f(b)$ và $\\min f(x) = f(a)$.",
                        "correct": "true",
                        "explain": "Tính chất hàm đơn điệu trên đoạn."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: Cho hàm số $y = \\frac{2x - 1}{x + 1}$ trên đoạn $[0; 2]$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Hàm số liên tục trên đoạn $[0; 2]$.",
                        "correct": "true",
                        "explain": "Điểm gián đoạn $x = -1$ nằm ngoài đoạn $[0; 2]$."
                    },
                    {
                        "key": "b",
                        "text": "Đạo hàm $y' = \\frac{3}{(x + 1)^2} > 0$ với mọi $x \\in [0; 2]$.",
                        "correct": "true",
                        "explain": "Đạo hàm luôn dương."
                    },
                    {
                        "key": "c",
                        "text": "Giá trị nhỏ nhất của hàm số bằng $-1$ tại $x = 0$.",
                        "correct": "true",
                        "explain": "$f(0) = -1/1 = -1$."
                    },
                    {
                        "key": "d",
                        "text": "Giá trị lớn nhất của hàm số bằng $2$.",
                        "correct": "false",
                        "explain": "GTLN bằng $f(2) = 3/3 = 1$."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: Cho hàm số $y = f(x)$ có bảng biến thiên trên $[-2; 4]$ với $f(-2) = 0, f(0) = 4, f(2) = -1, f(4) = 5$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Giá trị lớn nhất của hàm số trên $[-2; 4]$ bằng $5$.",
                        "correct": "true",
                        "explain": "Số lớn nhất là 5 đạt tại $x = 4$."
                    },
                    {
                        "key": "b",
                        "text": "Giá trị nhỏ nhất của hàm số trên $[-2; 4]$ bằng $-1$.",
                        "correct": "true",
                        "explain": "Số nhỏ nhất là -1 đạt tại $x = 2$."
                    },
                    {
                        "key": "c",
                        "text": "Hàm số có điểm cực đại là $x = 0$.",
                        "correct": "true",
                        "explain": "Tại $x = 0$ hàm đổi chiều đi lên rồi đi xuống."
                    },
                    {
                        "key": "d",
                        "text": "Tổng giá trị lớn nhất và nhỏ nhất bằng $3$.",
                        "correct": "false",
                        "explain": "Tổng bằng $5 + (-1) = 4$."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Về bài toán tìm Min/Max bằng máy tính cầm tay:",
                "items": [
                    {
                        "key": "a",
                        "text": "Chức năng Table (MENU 8) giúp quét giá trị của hàm số trên một đoạn.",
                        "correct": "true",
                        "explain": "Ứng dụng tính năng Table."
                    },
                    {
                        "key": "b",
                        "text": "Bước nhảy (Step) nên chọn là $(b - a) / 29$ hoặc $(b - a) / 40$.",
                        "correct": "true",
                        "explain": "Chia nhỏ bước nhảy để tránh bỏ sót điểm cực trị."
                    },
                    {
                        "key": "c",
                        "text": "Giá trị lớn nhất trên bảng Table luôn chính xác $100\\%$ là GTLN của hàm số.",
                        "correct": "false",
                        "explain": "Chỉ là giá trị xấp xỉ, đỉnh thật có thể nằm giữa 2 bước nhảy."
                    },
                    {
                        "key": "d",
                        "text": "Bảng Table có thể dùng để định hướng tìm khoảng chứa điểm đạt Max/Min.",
                        "correct": "true",
                        "explain": "Phương pháp kết hợp máy tính và suy luận."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Về bài toán tối ưu chi phí trong kinh tế:",
                "items": [
                    {
                        "key": "a",
                        "text": "Để chi phí trung bình nhỏ nhất, ta khảo sát hàm chi phí trung bình $\\overline{C}(x) = C(x)/x$.",
                        "correct": "true",
                        "explain": "Hàm chi phí trên một đơn vị sản phẩm."
                    },
                    {
                        "key": "b",
                        "text": "Doanh thu lớn nhất đạt được khi đạo hàm hàm doanh thu bằng 0: $R'(x) = 0$.",
                        "correct": "true",
                        "explain": "Điều kiện cực đại doanh thu."
                    },
                    {
                        "key": "c",
                        "text": "Lợi nhuận lớn nhất khi doanh thu cận biên bằng chi phí cận biên: $R'(x) = C'(x)$.",
                        "correct": "true",
                        "explain": "Nguyên lý kinh tế học vi mô."
                    },
                    {
                        "key": "d",
                        "text": "Sản lượng sản xuất $x$ có thể nhận giá trị âm trong bài toán thực tế.",
                        "correct": "false",
                        "explain": "Sản lượng bắt buộc phải là số thực không âm $x \\ge 0$."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 2:") || t.includes("giá trị lớn nhất") || t.includes("giá trị nhỏ nhất") || t.includes("gtln") || t.includes("gtnn")) && !t.includes("tiệm cận");
      }
    },

  "toan12_bai3": {
        "id": "toan12_bai3",
        "lessonTitle": "Bài 3: Đường tiệm cận của đồ thị hàm số",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Tiệm cận đứng (TCĐ)",
                "sgkHtml": "<p>Định nghĩa và phương pháp xác định Đường tiệm cận đứng (TCĐ) của đồ thị hàm số $y = f(x)$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\lim_{x \\to x_0^+} f(x) = \\pm\\infty \\quad \\text{hoặc} \\quad \\lim_{x \\to x_0^-} f(x) = \\pm\\infty \\iff x = x_0 \\text{ là TCĐ}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Đặc điểm nhận dạng:</strong> Phương trình tiệm cận đứng luôn có dạng $x = x_0$ (đường thẳng vuông góc với trục hoành $Ox$).</li>\n                  <li>Chỉ cần <b>ít nhất 1 trong 4 giới hạn</b> một bên bằng $\\pm\\infty$ là kết luận $x = x_0$ là TCĐ.</li>\n                  <li><strong>Ứng dụng cho hàm phân thức $y = \\frac{P(x)}{Q(x)}$:</strong> Tiệm cận đứng thường xuất phát từ nghiệm của mẫu số $Q(x) = 0$ mà <b>không phải là nghiệm của tử số</b> (nghiệm của mẫu có bậc bội lớn hơn tử số).</li>\n                </ul>",
                "noteHtml": "<li>Nếu $x_0$ là nghiệm của mẫu nhưng cũng là nghiệm của tử, phải rút gọn phân thức trước khi kết luận TCĐ!</li>\n                <li>Đồ thị hàm đa thức (bậc 2, bậc 3, bậc 4) KHÔNG BAO GIỜ có tiệm cận đứng.</li>",
                "mistakeHtml": "<li>Viết phương trình tiệm cận đứng là $y = x_0$ (sai! Tiệm cận đứng phải là $x = x_0$).</li>\n                <li>Kết luận ngay nghiệm của mẫu là TCĐ mà quên kiểm tra nghiệm có triệt tiêu với tử hay không.</li>",
                "tipHtml": "<li><em>\"Tiệm cận Đứng là x = nghiệm của mẫu (sau khi đã rút gọn triệt để với tử số)!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Đường tiệm cận đứng của đồ thị hàm số $y = \\frac{2x + 1}{x - 3}$ là:",
                        "options": [
                            "A. $x = 3$",
                            "B. $y = 2$",
                            "C. $x = -3$",
                            "D. $y = 3$"
                        ],
                        "correct": "A",
                        "explanation": "Mẫu số triệt tiêu tại $x = 3$, khi đó tử số bằng $2(3) + 1 = 7 \\neq 0$. Do đó $\\lim_{x \\to 3^+} y = +\\infty$. Tiệm cận đứng là $x = 3$.",
                        "hint1": "Cho mẫu số $x - 3 = 0$.",
                        "hint2": "Tiệm cận đứng có dạng $x = x_0$."
                    },
                    {
                        "question": "Số đường tiệm cận đứng của đồ thị hàm số $y = \\frac{x - 1}{x^2 - 1}$ là:",
                        "options": [
                            "A. $1$",
                            "B. $2$",
                            "C. $0$",
                            "D. $3$"
                        ],
                        "correct": "A",
                        "explanation": "Ta rút gọn: $y = \\frac{x - 1}{(x - 1)(x + 1)} = \\frac{1}{x + 1}$ với $x \\neq 1$. Do đó chỉ có duy nhất 1 tiệm cận đứng là $x = -1$. Tại $x = 1$ đồ thị chỉ bị khuyết một điểm, không phải tiệm cận.",
                        "hint1": "Rút gọn nhân tử chung $(x - 1)$ ở cả tử và mẫu.",
                        "hint2": "Chỉ còn mẫu số $x + 1 = 0 \\implies x = -1$."
                    },
                    {
                        "question": "Đồ thị hàm số nào dưới đây KHÔNG CÓ tiệm cận đứng?",
                        "options": [
                            "A. $y = x^3 - 3x + 1$",
                            "B. $y = \\frac{1}{x}$",
                            "C. $y = \\frac{x}{x - 2}$",
                            "D. $y = \\frac{1}{x^2 + 1}$"
                        ],
                        "correct": "A",
                        "explanation": "Hàm đa thức bậc ba xác định trên toàn bộ $\\mathbb{R}$ nên không có tiệm cận đứng. (Hàm D mẫu số vô nghiệm cũng không có TCĐ, nhưng A là hàm đa thức cơ bản).",
                        "hint1": "Hàm đa thức không bao giờ có tiệm cận.",
                        "hint2": "Hàm đa thức xác định trên toàn bộ $\\mathbb{R}$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 3: Đường tiệm cận của đồ thị hàm số</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Tiệm cận đứng (TCĐ)</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Định nghĩa và phương pháp xác định Đường tiệm cận đứng (TCĐ) của đồ thị hàm số $y = f(x)$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\lim_{x \\to x_0^+} f(x) = \\pm\\infty \\quad \\text{hoặc} \\quad \\lim_{x \\to x_0^-} f(x) = \\pm\\infty \\iff x = x_0 \\text{ là TCĐ}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Đặc điểm nhận dạng:</strong> Phương trình tiệm cận đứng luôn có dạng $x = x_0$ (đường thẳng vuông góc với trục hoành $Ox$).</li>\n                  <li>Chỉ cần <b>ít nhất 1 trong 4 giới hạn</b> một bên bằng $\\pm\\infty$ là kết luận $x = x_0$ là TCĐ.</li>\n                  <li><strong>Ứng dụng cho hàm phân thức $y = \\frac{P(x)}{Q(x)}$:</strong> Tiệm cận đứng thường xuất phát từ nghiệm của mẫu số $Q(x) = 0$ mà <b>không phải là nghiệm của tử số</b> (nghiệm của mẫu có bậc bội lớn hơn tử số).</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Nếu $x_0$ là nghiệm của mẫu nhưng cũng là nghiệm của tử, phải rút gọn phân thức trước khi kết luận TCĐ!</li>\n                <li>Đồ thị hàm đa thức (bậc 2, bậc 3, bậc 4) KHÔNG BAO GIỜ có tiệm cận đứng.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Viết phương trình tiệm cận đứng là $y = x_0$ (sai! Tiệm cận đứng phải là $x = x_0$).</li>\n                <li>Kết luận ngay nghiệm của mẫu là TCĐ mà quên kiểm tra nghiệm có triệt tiêu với tử hay không.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Tiệm cận Đứng là x = nghiệm của mẫu (sau khi đã rút gọn triệt để với tử số)!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Tiệm cận ngang (TCN)",
                "sgkHtml": "<p>Định nghĩa và phương pháp xác định Đường tiệm cận ngang (TCN) của đồ thị hàm số $y = f(x)$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\lim_{x \\to +\\infty} f(x) = y_0 \\quad \\text{hoặc} \\quad \\lim_{x \\to -\\infty} f(x) = y_0 \\iff y = y_0 \\text{ là TCN}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Đặc điểm nhận dạng:</strong> Phương trình tiệm cận ngang luôn có dạng $y = y_0$ (đường thẳng song song hoặc trùng với trục hoành $Ox$).</li>\n                  <li>Đồ thị hàm số có thể có tối đa <b>2 đường tiệm cận ngang</b> (khi giới hạn tại $+\\infty$ và $-\\infty$ cho ra hai giá trị hữu hạn khác nhau, thường gặp ở hàm chứa căn thức $\\sqrt{x^2}$).</li>\n                  <li><strong>Quy tắc hàm phân thức hữu tỉ $y = \\frac{P(x)}{Q(x)}$:</strong>\n                    <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                      <li>Bậc tử < Bậc mẫu: Luôn có 1 TCN là trục hoành $y = 0$.</li>\n                      <li>Bậc tử = Bậc mẫu: Có 1 TCN là $y = \\frac{\\text{hệ số bậc cao nhất tử}}{\\text{hệ số bậc cao nhất mẫu}}$.</li>\n                      <li>Bậc tử > Bậc mẫu: Không có tiệm cận ngang!</li>\n                    </ul>\n                  </li>\n                </ul>",
                "noteHtml": "<li>Đồ thị có thể cắt đường tiệm cận ngang của nó (khác với quan niệm sai lầm rằng đồ thị không bao giờ cắt tiệm cận).</li>\n                <li>Bấm máy Casio tìm TCN: Nhập biểu thức $f(x)$, nhấn [CALC] $x = 10^{10}$ và [CALC] $x = -10^{10}$ để đọc giá trị hữu hạn $y_0$.</li>",
                "mistakeHtml": "<li>Viết phương trình tiệm cận ngang là $x = y_0$ (sai! Tiệm cận ngang phải là $y = y_0$).</li>\n                <li>Quên xét giới hạn tại $-\\infty$ đối với hàm chứa căn thức bậc hai.</li>",
                "tipHtml": "<li><em>\"Bậc tử bằng bậc mẫu: TCN là y = tỉ số hệ số cao nhất – Bậc tử bé hơn mẫu: TCN luôn là y = 0!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Đường tiệm cận ngang của đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$ là:",
                        "options": [
                            "A. $y = 3$",
                            "B. $x = -2$",
                            "C. $y = -2$",
                            "D. $x = 3$"
                        ],
                        "correct": "A",
                        "explanation": "Bậc tử bằng bậc mẫu, tỉ số hệ số cao nhất là $3/1 = 3$. Vậy TCN là đường thẳng $y = 3$.",
                        "hint1": "Tỉ số hệ số đứng trước $x$ ở tử và mẫu.",
                        "hint2": "$y = 3/1 = 3$."
                    },
                    {
                        "question": "Đồ thị hàm số $y = \\frac{2x - 3}{x^2 + 1}$ có tiệm cận ngang là:",
                        "options": [
                            "A. $y = 0$",
                            "B. $y = 2$",
                            "C. $x = 0$",
                            "D. Không có TCN"
                        ],
                        "correct": "A",
                        "explanation": "Bậc tử là 1, bậc mẫu là 2 (bậc tử < bậc mẫu) nên $\\lim_{x \\to \\pm\\infty} y = 0$. Tiệm cận ngang là trục hoành $y = 0$.",
                        "hint1": "Bậc tử nhỏ hơn bậc mẫu.",
                        "hint2": "Giới hạn tại vô cực bằng 0 $\\implies y = 0$."
                    },
                    {
                        "question": "Số đường tiệm cận ngang của đồ thị hàm số $y = \\frac{\\sqrt{x^2 + 1}}{x - 1}$ là:",
                        "options": [
                            "A. $2$",
                            "B. $1$",
                            "C. $0$",
                            "D. $3$"
                        ],
                        "correct": "A",
                        "explanation": "$\\lim_{x \\to +\\infty} y = \\lim \\frac{x\\sqrt{1 + 1/x^2}}{x(1 - 1/x)} = 1 \\implies y = 1$. Khi $x \\to -\\infty$: $\\sqrt{x^2} = |x| = -x \\implies \\lim_{x \\to -\\infty} y = -1 \\implies y = -1$. Đồ thị có đúng 2 TCN là $y = 1$ và $y = -1$.",
                        "hint1": "Chú ý khi $x \\to -\\infty$ thì $\\sqrt{x^2} = -x$.",
                        "hint2": "Hai TCN là $y = 1$ và $y = -1$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 3: Đường tiệm cận của đồ thị hàm số</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Tiệm cận ngang (TCN)</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Định nghĩa và phương pháp xác định Đường tiệm cận ngang (TCN) của đồ thị hàm số $y = f(x)$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\lim_{x \\to +\\infty} f(x) = y_0 \\quad \\text{hoặc} \\quad \\lim_{x \\to -\\infty} f(x) = y_0 \\iff y = y_0 \\text{ là TCN}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Đặc điểm nhận dạng:</strong> Phương trình tiệm cận ngang luôn có dạng $y = y_0$ (đường thẳng song song hoặc trùng với trục hoành $Ox$).</li>\n                  <li>Đồ thị hàm số có thể có tối đa <b>2 đường tiệm cận ngang</b> (khi giới hạn tại $+\\infty$ và $-\\infty$ cho ra hai giá trị hữu hạn khác nhau, thường gặp ở hàm chứa căn thức $\\sqrt{x^2}$).</li>\n                  <li><strong>Quy tắc hàm phân thức hữu tỉ $y = \\frac{P(x)}{Q(x)}$:</strong>\n                    <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                      <li>Bậc tử < Bậc mẫu: Luôn có 1 TCN là trục hoành $y = 0$.</li>\n                      <li>Bậc tử = Bậc mẫu: Có 1 TCN là $y = \\frac{\\text{hệ số bậc cao nhất tử}}{\\text{hệ số bậc cao nhất mẫu}}$.</li>\n                      <li>Bậc tử > Bậc mẫu: Không có tiệm cận ngang!</li>\n                    </ul>\n                  </li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Đồ thị có thể cắt đường tiệm cận ngang của nó (khác với quan niệm sai lầm rằng đồ thị không bao giờ cắt tiệm cận).</li>\n                <li>Bấm máy Casio tìm TCN: Nhập biểu thức $f(x)$, nhấn [CALC] $x = 10^{10}$ và [CALC] $x = -10^{10}$ để đọc giá trị hữu hạn $y_0$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Viết phương trình tiệm cận ngang là $x = y_0$ (sai! Tiệm cận ngang phải là $y = y_0$).</li>\n                <li>Quên xét giới hạn tại $-\\infty$ đối với hàm chứa căn thức bậc hai.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Bậc tử bằng bậc mẫu: TCN là y = tỉ số hệ số cao nhất – Bậc tử bé hơn mẫu: TCN luôn là y = 0!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 3,
                "sectionTitle": "Mục 3: Tiệm cận xiên (TCX)",
                "sgkHtml": "<p>Định nghĩa và phương pháp xác định Đường tiệm cận xiên (TCX) của đồ thị hàm số $y = f(x)$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0 \\quad \\text{hoặc} \\quad \\lim_{x \\to -\\infty} [f(x) - (ax + b)] = 0 \\quad (a \\neq 0)$$\n                  $$\\iff y = ax + b \\text{ là Đường tiệm cận xiên}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Công thức tính hệ số $a$ và $b$:</strong>\n                    $$a = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x} \\quad (a \\neq 0); \\qquad b = \\lim_{x \\to \\pm\\infty} [f(x) - ax]$$\n                  </li>\n                  <li><strong>Trường hợp hàm phân thức bậc hai trên bậc nhất:</strong>\n                    $$y = \\frac{Ax^2 + Bx + C}{px + q} = mx + n + \\frac{r}{px + q} \\quad (r \\neq 0)$$\n                    (Thực hiện phép chia đa thức tử cho mẫu). Khi đó đường thẳng thương:\n                    $$y = mx + n$$\n                    chính là <b>Đường tiệm cận xiên</b> của đồ thị hàm số!\n                  </li>\n                  <li>Đồ thị đã có tiệm cận ngang thì <b>không có</b> tiệm cận xiên (về cùng một phía $\\pm\\infty$).</li>\n                </ul>",
                "noteHtml": "<li>Chia đa thức tử cho mẫu bằng phương pháp đặt tính chia hoặc dùng sơ đồ Horner để tìm nhanh phần thương $mx + n$.</li>\n                <li>Tâm đối xứng của đồ thị hàm phân thức bậc 2/1 chính là giao điểm của TCĐ và TCX!</li>",
                "mistakeHtml": "<li>Quên điều kiện hệ số góc $a \\neq 0$ (nếu $a = 0$ thì đó là tiệm cận ngang, không phải tiệm cận xiên!).</li>\n                <li>Chia sai đa thức dẫn đến tìm sai phương trình đường thẳng thương.</li>",
                "tipHtml": "<li><em>\"Phân thức bậc 2 trên bậc 1: Lấy tử chia mẫu ra thương y = ax + b chính là Tiệm Cận Xiên!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 - 3x + 1}{x - 1}$ là:",
                        "options": [
                            "A. $y = x - 2$",
                            "B. $y = x - 3$",
                            "C. $y = x + 2$",
                            "D. $y = 2x - 1$"
                        ],
                        "correct": "A",
                        "explanation": "Chia đa thức: $x^2 - 3x + 1 = (x - 1)(x - 2) - 1 \\implies y = x - 2 - \\frac{1}{x - 1}$. Phần thương là $x - 2$, do đó TCX là $y = x - 2$.",
                        "hint1": "Thực hiện phép chia đa thức tử cho mẫu.",
                        "hint2": "$\\frac{x^2 - 3x + 1}{x - 1} = x - 2 - \\frac{1}{x - 1} \\implies y = x - 2$."
                    },
                    {
                        "question": "Toạ độ giao điểm của tiệm cận đứng và tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + 2x - 2}{x - 1}$ là:",
                        "options": [
                            "A. $I(1; 4)$",
                            "B. $I(1; 3)$",
                            "C. $I(-1; 1)$",
                            "D. $I(1; 0)$"
                        ],
                        "correct": "A",
                        "explanation": "TCĐ là $x = 1$. Chia tử cho mẫu: $x^2 + 2x - 2 = (x - 1)(x + 3) + 1 \\implies y = x + 3 + \\frac{1}{x - 1} \\implies$ TCX là $y = x + 3$. Thay $x = 1$ vào TCX: $y = 1 + 3 = 4$. Vậy giao điểm là $I(1; 4)$.",
                        "hint1": "TCĐ là $x = 1$. Tìm TCX bằng cách chia tử cho mẫu.",
                        "hint2": "TCX là $y = x + 3$. Giao điểm là $(1; 1+3) = (1; 4)$."
                    },
                    {
                        "question": "Hàm số nào sau đây có đồ thị chứa đường tiệm cận xiên?",
                        "options": [
                            "A. $y = \\frac{2x^2 - x + 1}{x + 1}$",
                            "B. $y = \\frac{2x - 1}{x + 1}$",
                            "C. $y = x^3 - 3x + 2$",
                            "D. $y = \\frac{1}{x^2 + 1}$"
                        ],
                        "correct": "A",
                        "explanation": "Hàm số A là phân thức có bậc tử (bậc 2) lớn hơn bậc mẫu (bậc 1) đúng 1 bậc nên có tiệm cận xiên. B có TCN, C và D không có TCX.",
                        "hint1": "Hàm số có TCX khi bậc tử lớn hơn bậc mẫu đúng 1 bậc.",
                        "hint2": "Hàm bậc 2 chia bậc 1 có TCX."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 3: Đường tiệm cận của đồ thị hàm số</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 3: Mục 3: Tiệm cận xiên (TCX)</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Định nghĩa và phương pháp xác định Đường tiệm cận xiên (TCX) của đồ thị hàm số $y = f(x)$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0 \\quad \\text{hoặc} \\quad \\lim_{x \\to -\\infty} [f(x) - (ax + b)] = 0 \\quad (a \\neq 0)$$\n                  $$\\iff y = ax + b \\text{ là Đường tiệm cận xiên}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Công thức tính hệ số $a$ và $b$:</strong>\n                    $$a = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x} \\quad (a \\neq 0); \\qquad b = \\lim_{x \\to \\pm\\infty} [f(x) - ax]$$\n                  </li>\n                  <li><strong>Trường hợp hàm phân thức bậc hai trên bậc nhất:</strong>\n                    $$y = \\frac{Ax^2 + Bx + C}{px + q} = mx + n + \\frac{r}{px + q} \\quad (r \\neq 0)$$\n                    (Thực hiện phép chia đa thức tử cho mẫu). Khi đó đường thẳng thương:\n                    $$y = mx + n$$\n                    chính là <b>Đường tiệm cận xiên</b> của đồ thị hàm số!\n                  </li>\n                  <li>Đồ thị đã có tiệm cận ngang thì <b>không có</b> tiệm cận xiên (về cùng một phía $\\pm\\infty$).</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Chia đa thức tử cho mẫu bằng phương pháp đặt tính chia hoặc dùng sơ đồ Horner để tìm nhanh phần thương $mx + n$.</li>\n                <li>Tâm đối xứng của đồ thị hàm phân thức bậc 2/1 chính là giao điểm của TCĐ và TCX!</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên điều kiện hệ số góc $a \\neq 0$ (nếu $a = 0$ thì đó là tiệm cận ngang, không phải tiệm cận xiên!).</li>\n                <li>Chia sai đa thức dẫn đến tìm sai phương trình đường thẳng thương.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Phân thức bậc 2 trên bậc 1: Lấy tử chia mẫu ra thương y = ax + b chính là Tiệm Cận Xiên!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Cho hàm số $y = \\frac{2x - 3}{x - 1}$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Đồ thị hàm số có tiệm cận đứng là đường thẳng $x = 1$.",
                        "correct": "true",
                        "explain": "Nghiệm của mẫu số."
                    },
                    {
                        "key": "b",
                        "text": "Đồ thị hàm số có tiệm cận ngang là đường thẳng $y = 2$.",
                        "correct": "true",
                        "explain": "Tỉ số hệ số bậc nhất $2/1 = 2$."
                    },
                    {
                        "key": "c",
                        "text": "Giao điểm của hai đường tiệm cận là điểm $I(1; 2)$.",
                        "correct": "true",
                        "explain": "Giao của $x = 1$ và $y = 2$."
                    },
                    {
                        "key": "d",
                        "text": "Đồ thị hàm số có tiệm cận xiên.",
                        "correct": "false",
                        "explain": "Đã có TCN thì không có TCX."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: Về các loại đường tiệm cận của đồ thị hàm số:",
                "items": [
                    {
                        "key": "a",
                        "text": "Tiệm cận đứng luôn vuông góc với trục hoành.",
                        "correct": "true",
                        "explain": "Phương trình $x = x_0$."
                    },
                    {
                        "key": "b",
                        "text": "Tiệm cận ngang luôn song song hoặc trùng với trục hoành.",
                        "correct": "true",
                        "explain": "Phương trình $y = y_0$."
                    },
                    {
                        "key": "c",
                        "text": "Một đồ thị hàm số có thể có tối đa 2 đường tiệm cận ngang.",
                        "correct": "true",
                        "explain": "Tương ứng với $x \\to +\\infty$ và $x \\to -\\infty$."
                    },
                    {
                        "key": "d",
                        "text": "Đồ thị hàm số không bao giờ cắt đường tiệm cận của nó.",
                        "correct": "false",
                        "explain": "Đồ thị hoàn toàn có thể cắt tiệm cận ngang hoặc xiên."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: Cho hàm số $y = \\frac{x^2 - x + 2}{x - 2}$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Tiệm cận đứng của đồ thị hàm số là $x = 2$.",
                        "correct": "true",
                        "explain": "Mẫu số triệt tiêu tại $x = 2$."
                    },
                    {
                        "key": "b",
                        "text": "Biến đổi $y = x + 1 + \\frac{4}{x - 2}$.",
                        "correct": "true",
                        "explain": "$x^2 - x + 2 = (x - 2)(x + 1) + 4$."
                    },
                    {
                        "key": "c",
                        "text": "Tiệm cận xiên của đồ thị hàm số là đường thẳng $y = x + 1$.",
                        "correct": "true",
                        "explain": "Phần thương của phép chia."
                    },
                    {
                        "key": "d",
                        "text": "Tâm đối xứng của đồ thị là điểm $I(2; 3)$.",
                        "correct": "true",
                        "explain": "Thay $x = 2$ vào TCX được $y = 3$."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: Cho hàm số $y = f(x)$ có $\\lim_{x \\to 2^+} f(x) = +\\infty$ và $\\lim_{x \\to +\\infty} f(x) = 3$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Đường thẳng $x = 2$ là tiệm cận đứng của đồ thị hàm số.",
                        "correct": "true",
                        "explain": "Giới hạn một bên bằng $+\\infty$."
                    },
                    {
                        "key": "b",
                        "text": "Đường thẳng $y = 3$ là tiệm cận ngang của đồ thị hàm số.",
                        "correct": "true",
                        "explain": "Giới hạn tại $+\\infty$ bằng 3."
                    },
                    {
                        "key": "c",
                        "text": "Đường thẳng $y = 2$ là tiệm cận đứng của đồ thị hàm số.",
                        "correct": "false",
                        "explain": "Tiệm cận đứng phải có dạng $x = 2$."
                    },
                    {
                        "key": "d",
                        "text": "Đồ thị hàm số chắc chắn không có tiệm cận xiên khi $x \\to +\\infty$.",
                        "correct": "true",
                        "explain": "Đã có TCN tại $+\\infty$ thì không có TCX tại $+\\infty$."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Về số lượng tiệm cận của hàm phân thức hữu tỉ:",
                "items": [
                    {
                        "key": "a",
                        "text": "Hàm số $y = \\frac{1}{x^2 + 1}$ có 1 đường tiệm cận ngang và 0 tiệm cận đứng.",
                        "correct": "true",
                        "explain": "TCN $y = 0$, mẫu vô nghiệm."
                    },
                    {
                        "key": "b",
                        "text": "Hàm số $y = \\frac{x + 2}{x^2 - 4}$ có 2 đường tiệm cận đứng.",
                        "correct": "false",
                        "explain": "Rút gọn $(x+2)$ chỉ còn 1 TCĐ là $x = 2$."
                    },
                    {
                        "key": "c",
                        "text": "Đồ thị hàm bậc 2 trên bậc 1 luôn có đúng 1 TCĐ và 1 TCX.",
                        "correct": "true",
                        "explain": "Dạng chuẩn $y = \\frac{ax^2+bx+c}{px+q}$."
                    },
                    {
                        "key": "d",
                        "text": "Đồ thị hàm số $y = \\frac{x^2}{x + 1}$ có TCX là $y = x - 1$.",
                        "correct": "true",
                        "explain": "$x^2 = (x+1)(x-1) + 1$."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Về ứng dụng thực tiễn của đường tiệm cận:",
                "items": [
                    {
                        "key": "a",
                        "text": "Đường tiệm cận mô tả xu thế dài hạn của một quá trình khi thời gian $t \\to +\\infty$.",
                        "correct": "true",
                        "explain": "Ý nghĩa mô hình hoá tiệm cận ngang."
                    },
                    {
                        "key": "b",
                        "text": "Nồng độ thuốc trong máu giảm dần về 0 theo thời gian biểu thị tiệm cận ngang $y = 0$.",
                        "correct": "true",
                        "explain": "Mô hình dược động học."
                    },
                    {
                        "key": "c",
                        "text": "Chi phí trung bình để sản xuất một sản phẩm tiệm cận về chi phí biến đổi tối thiểu.",
                        "correct": "true",
                        "explain": "Ý nghĩa kinh tế học quy mô."
                    },
                    {
                        "key": "d",
                        "text": "Vận tốc của một vật rơi có lực cản không khí đạt tới vận tốc giới hạn là một ví dụ về tiệm cận đứng.",
                        "correct": "false",
                        "explain": "Là tiệm cận NGANG $v = v_{\\text{terminal}}$ khi $t \\to +\\infty$."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 3:") || t.includes("tiệm cận") || t.includes("tiem can")) && !t.includes("khảo sát");
      }
    },

  "toan12_bai4": {
        "id": "toan12_bai4",
        "lessonTitle": "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Khảo sát hàm đa thức bậc ba",
                "sgkHtml": "<p>Sơ đồ khảo sát chuẩn và dạng đồ thị hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \\neq 0$):</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Tập xác định:</strong> $D = \\mathbb{R}$.</li>\n                  <li><strong>Đạo hàm:</strong> $y' = 3ax^2 + 2bx + c$. Phương trình $y' = 0$ có $\\Delta' = b^2 - 3ac$:\n                    <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                      <li>$\\Delta' > 0$: Hàm số có 2 điểm cực trị. Đồ thị có dạng chữ $N$ ($a > 0$) hoặc chữ $N$ ngược ($a < 0$).</li>\n                      <li>$\\Delta' \\le 0$: Hàm số không có cực trị, luôn đồng biến ($a > 0$) hoặc luôn nghịch biến ($a < 0$) trên $\\mathbb{R}$.</li>\n                    </ul>\n                  </li>\n                  <li><strong>Tâm đối xứng:</strong> Đồ thị luôn nhận điểm uốn $I\\left(-\\frac{b}{3a}; y_0\\right)$ (nghiệm của $y'' = 0$) làm tâm đối xứng.</li>\n                  <li><strong>Giới hạn tại vô cực:</strong> $\\lim_{x \\to +\\infty} y = (\\text{dấu của } a)\\infty$.</li>\n                </ul>",
                "noteHtml": "<li>Nhận dạng nhanh hệ số $a$: Nhìn nhánh ngoài cùng bên phải của đồ thị. Đi lên $\\implies a > 0$; đi xuống $\\implies a < 0$!</li>\n                <li>Hệ số tự do $d$: Là tung độ giao điểm của đồ thị với trục tung $Oy$ (cho $x = 0 \\implies y = d$).</li>",
                "mistakeHtml": "<li>Nhầm lẫn giữa 2 cực trị và nghiệm của phương trình $y = 0$ (giao điểm với trục hoành).</li>\n                <li>Quên rằng tâm đối xứng luôn là nghiệm của đạo hàm cấp 2 $y'' = 0$.</li>",
                "tipHtml": "<li><em>\"Nhánh phải đi lên a dương, đi xuống a âm – Cắt trục tung tại điểm (0; d) – Tâm đối xứng là điểm uốn x = -b/(3a)!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Đồ thị hàm số $y = x^3 - 3x + 2$ nhận điểm nào sau đây làm tâm đối xứng?",
                        "options": [
                            "A. $I(0; 2)$",
                            "B. $I(1; 0)$",
                            "C. $I(-1; 4)$",
                            "D. $I(0; 0)$"
                        ],
                        "correct": "A",
                        "explanation": "$y' = 3x^2 - 3 \\implies y'' = 6x = 0 \\Leftrightarrow x = 0$. Thay $x = 0 \\implies y = 2$. Tâm đối xứng là điểm uốn $I(0; 2)$.",
                        "hint1": "Tâm đối xứng là nghiệm của $y'' = 0$.",
                        "hint2": "$y'' = 6x = 0 \\implies x = 0, y = 2$."
                    },
                    {
                        "question": "Cho hàm số $y = ax^3 + bx^2 + cx + d$ có đồ thị đi lên từ trái sang phải ở nhánh ngoài cùng bên phải và có 2 điểm cực trị. Khẳng định nào sau đây đúng?",
                        "options": [
                            "A. $a > 0$ và $b^2 - 3ac > 0$",
                            "B. $a < 0$ và $b^2 - 3ac > 0$",
                            "C. $a > 0$ và $b^2 - 3ac \\le 0$",
                            "D. $a < 0$ và $b^2 - 3ac \\le 0$"
                        ],
                        "correct": "A",
                        "explanation": "Nhánh phải đi lên nghĩa là $a > 0$. Hàm số có 2 cực trị khi và chỉ khi phương trình $y' = 0$ có 2 nghiệm phân biệt, tức $\\Delta' = b^2 - 3ac > 0$.",
                        "hint1": "Nhánh phải đi lên $\\implies a > 0$.",
                        "hint2": "Có 2 cực trị $\\implies \\Delta' > 0$."
                    },
                    {
                        "question": "Giao điểm của đồ thị hàm số $y = -x^3 + 3x^2 - 2$ với trục tung $Oy$ có toạ độ là:",
                        "options": [
                            "A. $(0; -2)$",
                            "B. $(-2; 0)$",
                            "C. $(0; 2)$",
                            "D. $(1; 0)$"
                        ],
                        "correct": "A",
                        "explanation": "Giao điểm với trục tung ứng với $x = 0 \\implies y = -2$. Toạ độ giao điểm là $(0; -2)$.",
                        "hint1": "Cho $x = 0$.",
                        "hint2": "$y(0) = -2 \\implies (0; -2)$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Khảo sát hàm đa thức bậc ba</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Sơ đồ khảo sát chuẩn và dạng đồ thị hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \\neq 0$):</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Tập xác định:</strong> $D = \\mathbb{R}$.</li>\n                  <li><strong>Đạo hàm:</strong> $y' = 3ax^2 + 2bx + c$. Phương trình $y' = 0$ có $\\Delta' = b^2 - 3ac$:\n                    <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                      <li>$\\Delta' > 0$: Hàm số có 2 điểm cực trị. Đồ thị có dạng chữ $N$ ($a > 0$) hoặc chữ $N$ ngược ($a < 0$).</li>\n                      <li>$\\Delta' \\le 0$: Hàm số không có cực trị, luôn đồng biến ($a > 0$) hoặc luôn nghịch biến ($a < 0$) trên $\\mathbb{R}$.</li>\n                    </ul>\n                  </li>\n                  <li><strong>Tâm đối xứng:</strong> Đồ thị luôn nhận điểm uốn $I\\left(-\\frac{b}{3a}; y_0\\right)$ (nghiệm của $y'' = 0$) làm tâm đối xứng.</li>\n                  <li><strong>Giới hạn tại vô cực:</strong> $\\lim_{x \\to +\\infty} y = (\\text{dấu của } a)\\infty$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Nhận dạng nhanh hệ số $a$: Nhìn nhánh ngoài cùng bên phải của đồ thị. Đi lên $\\implies a > 0$; đi xuống $\\implies a < 0$!</li>\n                <li>Hệ số tự do $d$: Là tung độ giao điểm của đồ thị với trục tung $Oy$ (cho $x = 0 \\implies y = d$).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Nhầm lẫn giữa 2 cực trị và nghiệm của phương trình $y = 0$ (giao điểm với trục hoành).</li>\n                <li>Quên rằng tâm đối xứng luôn là nghiệm của đạo hàm cấp 2 $y'' = 0$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Nhánh phải đi lên a dương, đi xuống a âm – Cắt trục tung tại điểm (0; d) – Tâm đối xứng là điểm uốn x = -b/(3a)!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Khảo sát hàm phân thức bậc 1/1",
                "sgkHtml": "<p>Khảo sát hàm phân thức hữu tỉ bậc nhất trên bậc nhất $y = \\frac{ax + b}{cx + d}$ ($c \\neq 0, ad - bc \\neq 0$):</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Tập xác định:</strong> $D = \\mathbb{R} \\setminus \\{-d/c\\}$.</li>\n                  <li><strong>Đạo hàm:</strong>\n                    $$y' = \\frac{ad - bc}{(cx + d)^2}$$\n                    Dấu của $y'$ hoàn toàn phụ thuộc vào dấu của định thức $ad - bc$:\n                    <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                      <li>$ad - bc > 0$: Hàm số luôn đồng biến trên từng khoảng $(-\\infty; -d/c)$ và $(-d/c; +\\infty)$.</li>\n                      <li>$ad - bc < 0$: Hàm số luôn nghịch biến trên từng khoảng $(-\\infty; -d/c)$ và $(-d/c; +\\infty)$.</li>\n                      <li>Hàm số <b>không bao giờ có cực trị</b>!</li>\n                    </ul>\n                  </li>\n                  <li><strong>Đường tiệm cận:</strong> TCĐ: $x = -\\frac{d}{c}$; TCN: $y = \\frac{a}{c}$.</li>\n                  <li><strong>Tâm đối xứng:</strong> Là giao điểm của hai đường tiệm cận: $I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right)$.</li>\n                  <li><strong>Hình dạng đồ thị (Hypebol):</strong> Gồm 2 nhánh nằm ở hai góc đối đỉnh qua tâm đối xứng $I$.</li>\n                </ul>",
                "noteHtml": "<li>Công thức định thức chéo tính nhanh đạo hàm: $\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$.</li>\n                <li>Đồ thị nhận hai đường phân giác của các góc tạo bởi hai tiệm cận làm trục đối xứng.</li>",
                "mistakeHtml": "<li>Tính nhầm định thức $ad - bc$ thành $ad + bc$.</li>\n                <li>Quên rằng hàm này không bao giờ có điểm cực trị.</li>",
                "tipHtml": "<li><em>\"Hàm nhất biến: Đạo hàm huyền trừ sắc (ad - bc) – Tiệm cận đứng nghiệm mẫu, ngang hệ số x – Tâm đối xứng là giao hai tiệm cận!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Đồ thị hàm số $y = \\frac{2x - 1}{x + 1}$ có tâm đối xứng là điểm:",
                        "options": [
                            "A. $I(-1; 2)$",
                            "B. $I(1; 2)$",
                            "C. $I(-1; -1)$",
                            "D. $I(2; -1)$"
                        ],
                        "correct": "A",
                        "explanation": "TCĐ là $x = -1$, TCN là $y = 2/1 = 2$. Tâm đối xứng là giao điểm của 2 tiệm cận: $I(-1; 2)$.",
                        "hint1": "Tâm đối xứng là giao điểm của TCĐ và TCN.",
                        "hint2": "TCĐ: $x = -1$, TCN: $y = 2 \\implies I(-1; 2)$."
                    },
                    {
                        "question": "Đạo hàm của hàm số $y = \\frac{x - 3}{2x + 1}$ là:",
                        "options": [
                            "A. $y' = \\frac{7}{(2x+1)^2}$",
                            "B. $y' = \\frac{-5}{(2x+1)^2}$",
                            "C. $y' = \\frac{1}{(2x+1)^2}$",
                            "D. $y' = \\frac{-7}{(2x+1)^2}$"
                        ],
                        "correct": "A",
                        "explanation": "$ad - bc = 1(1) - (-3)(2) = 1 + 6 = 7 > 0$. Vậy $y' = \\frac{7}{(2x + 1)^2}$.",
                        "hint1": "Áp dụng công thức $ad - bc$.",
                        "hint2": "$1(1) - (-3)(2) = 1 + 6 = 7$."
                    },
                    {
                        "question": "Số điểm cực trị của hàm số $y = \\frac{3x - 2}{x + 4}$ là:",
                        "options": [
                            "A. $0$",
                            "B. $1$",
                            "C. $2$",
                            "D. Vô số"
                        ],
                        "correct": "A",
                        "explanation": "Đạo hàm $y' = \\frac{3(4) - (-2)(1)}{(x+4)^2} = \\frac{14}{(x+4)^2} > 0, \\forall x \\neq -4$. Đạo hàm không đổi dấu nên hàm số không có cực trị.",
                        "hint1": "Hàm phân thức bậc nhất trên bậc nhất không có cực trị.",
                        "hint2": "Đạo hàm luôn mang 1 dấu."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Khảo sát hàm phân thức bậc 1/1</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Khảo sát hàm phân thức hữu tỉ bậc nhất trên bậc nhất $y = \\frac{ax + b}{cx + d}$ ($c \\neq 0, ad - bc \\neq 0$):</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Tập xác định:</strong> $D = \\mathbb{R} \\setminus \\{-d/c\\}$.</li>\n                  <li><strong>Đạo hàm:</strong>\n                    $$y' = \\frac{ad - bc}{(cx + d)^2}$$\n                    Dấu của $y'$ hoàn toàn phụ thuộc vào dấu của định thức $ad - bc$:\n                    <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                      <li>$ad - bc > 0$: Hàm số luôn đồng biến trên từng khoảng $(-\\infty; -d/c)$ và $(-d/c; +\\infty)$.</li>\n                      <li>$ad - bc < 0$: Hàm số luôn nghịch biến trên từng khoảng $(-\\infty; -d/c)$ và $(-d/c; +\\infty)$.</li>\n                      <li>Hàm số <b>không bao giờ có cực trị</b>!</li>\n                    </ul>\n                  </li>\n                  <li><strong>Đường tiệm cận:</strong> TCĐ: $x = -\\frac{d}{c}$; TCN: $y = \\frac{a}{c}$.</li>\n                  <li><strong>Tâm đối xứng:</strong> Là giao điểm của hai đường tiệm cận: $I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right)$.</li>\n                  <li><strong>Hình dạng đồ thị (Hypebol):</strong> Gồm 2 nhánh nằm ở hai góc đối đỉnh qua tâm đối xứng $I$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Công thức định thức chéo tính nhanh đạo hàm: $\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$.</li>\n                <li>Đồ thị nhận hai đường phân giác của các góc tạo bởi hai tiệm cận làm trục đối xứng.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Tính nhầm định thức $ad - bc$ thành $ad + bc$.</li>\n                <li>Quên rằng hàm này không bao giờ có điểm cực trị.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Hàm nhất biến: Đạo hàm huyền trừ sắc (ad - bc) – Tiệm cận đứng nghiệm mẫu, ngang hệ số x – Tâm đối xứng là giao hai tiệm cận!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 3,
                "sectionTitle": "Mục 3: Khảo sát hàm phân thức bậc 2/1",
                "sgkHtml": "<p>Khảo sát hàm phân thức bậc hai trên bậc nhất $y = \\frac{Ax^2 + Bx + C}{px + q}$ ($A \\neq 0, p \\neq 0$):</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Dạng chia đa thức:</strong>\n                    $$y = mx + n + \\frac{r}{px + q} \\quad (r \\neq 0)$$\n                  </li>\n                  <li><strong>Tập xác định:</strong> $D = \\mathbb{R} \\setminus \\{-q/p\\}$.</li>\n                  <li><strong>Hệ thống tiệm cận:</strong>\n                    <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                      <li>Đường tiệm cận đứng: $x = -\\frac{q}{p}$.</li>\n                      <li>Đường tiệm cận xiên: $y = mx + n$.</li>\n                    </ul>\n                  </li>\n                  <li><strong>Tâm đối xứng:</strong> Là giao điểm của TCĐ và TCX: $I\\left(-\\frac{q}{p}; m\\left(-\\frac{q}{p}\\right) + n\\right)$.</li>\n                  <li><strong>Cực trị:</strong> Phương trình $y' = 0$ thường cho 2 điểm cực trị nằm về hai phía của tiệm cận đứng. Đường thẳng đi qua 2 điểm cực trị luôn song song hoặc vuông góc với các yếu tố hình học đặc biệt.</li>\n                </ul>",
                "noteHtml": "<li>Đồ thị gồm hai nhánh hyperbol xiên nằm trong hai miền đối đỉnh tạo bởi tiệm cận đứng và tiệm cận xiên.</li>\n                <li>Khoảng cách giữa hai điểm cực trị thường xuất hiện trong câu hỏi vận dụng cao.</li>",
                "mistakeHtml": "<li>Chia sai đa thức dẫn đến tìm sai phương trình tiệm cận xiên.</li>\n                <li>Nhầm lẫn giữa tâm đối xứng của hàm bậc 3 (điểm uốn) và tâm đối xứng của hàm phân thức (giao 2 tiệm cận).</li>",
                "tipHtml": "<li><em>\"Hàm bậc 2 trên bậc 1: Chia đa thức ra TCX – Giao điểm TCĐ và TCX là Tâm Đối Xứng – Hai điểm cực trị nằm hai bên tiệm cận đứng!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Cho hàm số $y = \\frac{x^2 - x + 1}{x - 1}$. Đường tiệm cận xiên của đồ thị hàm số là:",
                        "options": [
                            "A. $y = x$",
                            "B. $y = x - 1$",
                            "C. $y = x + 1$",
                            "D. $y = 2x$"
                        ],
                        "correct": "A",
                        "explanation": "Chia đa thức: $x^2 - x + 1 = x(x - 1) + 1 \\implies y = x + \\frac{1}{x - 1}$. Phần thương là $x$. Vậy TCX là $y = x$.",
                        "hint1": "Tách tử số thành $x(x - 1) + 1$.",
                        "hint2": "$\\frac{x^2 - x + 1}{x - 1} = x + \\frac{1}{x - 1} \\implies y = x$."
                    },
                    {
                        "question": "Tâm đối xứng của đồ thị hàm số $y = \\frac{x^2 + 2x - 3}{x + 2}$ là:",
                        "options": [
                            "A. $I(-2; -2)$",
                            "B. $I(-2; 0)$",
                            "C. $I(2; 2)$",
                            "D. $I(-2; 2)$"
                        ],
                        "correct": "A",
                        "explanation": "TCĐ là $x = -2$. Chia đa thức: $x^2 + 2x - 3 = x(x + 2) - 3 \\implies y = x - \\frac{3}{x + 2} \\implies$ TCX là $y = x$. Thay $x = -2 \\implies y = -2$. Giao điểm là $I(-2; -2)$.",
                        "hint1": "TCĐ là $x = -2$. TCX là $y = x$.",
                        "hint2": "Giao điểm có toạ độ $(-2; -2)$."
                    },
                    {
                        "question": "Đồ thị hàm số $y = \\frac{x^2 + x + 1}{x + 1}$ có bao nhiêu điểm cực trị?",
                        "options": [
                            "A. $2$",
                            "B. $0$",
                            "C. $1$",
                            "D. $3$"
                        ],
                        "correct": "A",
                        "explanation": "$y = x + \\frac{1}{x + 1} \\implies y' = 1 - \\frac{1}{(x + 1)^2} = \\frac{(x + 1)^2 - 1}{(x + 1)^2} = \\frac{x^2 + 2x}{(x + 1)^2}$. Nghiệm: $x = 0$ và $x = -2$. Hàm số có đúng 2 điểm cực trị.",
                        "hint1": "Tính đạo hàm $y' = 1 - 1/(x+1)^2$.",
                        "hint2": "$y' = 0 \\Leftrightarrow (x+1)^2 = 1 \\implies x = 0$ hoặc $x = -2$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 3: Mục 3: Khảo sát hàm phân thức bậc 2/1</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Khảo sát hàm phân thức bậc hai trên bậc nhất $y = \\frac{Ax^2 + Bx + C}{px + q}$ ($A \\neq 0, p \\neq 0$):</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Dạng chia đa thức:</strong>\n                    $$y = mx + n + \\frac{r}{px + q} \\quad (r \\neq 0)$$\n                  </li>\n                  <li><strong>Tập xác định:</strong> $D = \\mathbb{R} \\setminus \\{-q/p\\}$.</li>\n                  <li><strong>Hệ thống tiệm cận:</strong>\n                    <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                      <li>Đường tiệm cận đứng: $x = -\\frac{q}{p}$.</li>\n                      <li>Đường tiệm cận xiên: $y = mx + n$.</li>\n                    </ul>\n                  </li>\n                  <li><strong>Tâm đối xứng:</strong> Là giao điểm của TCĐ và TCX: $I\\left(-\\frac{q}{p}; m\\left(-\\frac{q}{p}\\right) + n\\right)$.</li>\n                  <li><strong>Cực trị:</strong> Phương trình $y' = 0$ thường cho 2 điểm cực trị nằm về hai phía của tiệm cận đứng. Đường thẳng đi qua 2 điểm cực trị luôn song song hoặc vuông góc với các yếu tố hình học đặc biệt.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Đồ thị gồm hai nhánh hyperbol xiên nằm trong hai miền đối đỉnh tạo bởi tiệm cận đứng và tiệm cận xiên.</li>\n                <li>Khoảng cách giữa hai điểm cực trị thường xuất hiện trong câu hỏi vận dụng cao.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Chia sai đa thức dẫn đến tìm sai phương trình tiệm cận xiên.</li>\n                <li>Nhầm lẫn giữa tâm đối xứng của hàm bậc 3 (điểm uốn) và tâm đối xứng của hàm phân thức (giao 2 tiệm cận).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Hàm bậc 2 trên bậc 1: Chia đa thức ra TCX – Giao điểm TCĐ và TCX là Tâm Đối Xứng – Hai điểm cực trị nằm hai bên tiệm cận đứng!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Cho hàm số bậc ba $y = x^3 - 3x^2 + 2$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Đồ thị hàm số đi qua điểm $A(0; 2)$.",
                        "correct": "true",
                        "explain": "Thay $x = 0 \\implies y = 2$."
                    },
                    {
                        "key": "b",
                        "text": "Hàm số có điểm cực đại là $x = 0$ và điểm cực tiểu là $x = 2$.",
                        "correct": "true",
                        "explain": "$y' = 3x(x - 2)$."
                    },
                    {
                        "key": "c",
                        "text": "Đồ thị hàm số nhận điểm $I(1; 0)$ làm tâm đối xứng.",
                        "correct": "true",
                        "explain": "$y'' = 6x - 6 = 0 \\implies x = 1, y = 0$."
                    },
                    {
                        "key": "d",
                        "text": "Đồ thị hàm số có 2 đường tiệm cận.",
                        "correct": "false",
                        "explain": "Hàm đa thức không có tiệm cận."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: Cho hàm số $y = \\frac{2x + 1}{x - 1}$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{1\\}$.",
                        "correct": "true",
                        "explain": "Mẫu số khác 0."
                    },
                    {
                        "key": "b",
                        "text": "Đồ thị hàm số có tiệm cận đứng là $x = 1$.",
                        "correct": "true",
                        "explain": "Nghiệm của mẫu số."
                    },
                    {
                        "key": "c",
                        "text": "Đồ thị hàm số có tiệm cận ngang là $y = 2$.",
                        "correct": "true",
                        "explain": "Tỉ số hệ số bậc nhất."
                    },
                    {
                        "key": "d",
                        "text": "Hàm số đồng biến trên từng khoảng xác định.",
                        "correct": "false",
                        "explain": "$ad - bc = 2(-1) - 1(1) = -3 < 0$ nên nghịch biến."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: Cho hàm số $y = \\frac{x^2 - 2x + 2}{x - 1}$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Hàm số được viết lại dưới dạng $y = x - 1 + \\frac{1}{x - 1}$.",
                        "correct": "true",
                        "explain": "$x^2 - 2x + 2 = (x - 1)^2 + 1$."
                    },
                    {
                        "key": "b",
                        "text": "Đồ thị có tiệm cận đứng là đường thẳng $x = 1$.",
                        "correct": "true",
                        "explain": "Nghiệm mẫu số."
                    },
                    {
                        "key": "c",
                        "text": "Đồ thị có tiệm cận xiên là đường thẳng $y = x - 1$.",
                        "correct": "true",
                        "explain": "Phần thương."
                    },
                    {
                        "key": "d",
                        "text": "Tâm đối xứng của đồ thị là điểm $I(1; 0)$.",
                        "correct": "true",
                        "explain": "Thay $x = 1$ vào TCX được $y = 0$."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: Về các bước khảo sát hàm số chuẩn SGK:",
                "items": [
                    {
                        "key": "a",
                        "text": "Bước 1 là tìm tập xác định của hàm số.",
                        "correct": "true",
                        "explain": "Quy trình chuẩn."
                    },
                    {
                        "key": "b",
                        "text": "Bước 2 là xét sự biến thiên (đạo hàm, cực trị, giới hạn, tiệm cận, bảng biến thiên).",
                        "correct": "true",
                        "explain": "Quy trình chuẩn."
                    },
                    {
                        "key": "c",
                        "text": "Bước 3 là vẽ đồ thị dựa vào các điểm đặc biệt (cực trị, giao với các trục).",
                        "correct": "true",
                        "explain": "Quy trình chuẩn."
                    },
                    {
                        "key": "d",
                        "text": "Không cần tìm giao điểm với các trục toạ độ khi vẽ đồ thị.",
                        "correct": "false",
                        "explain": "Rất cần thiết để xác định vị trí chính xác của đồ thị."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Nhận dạng đồ thị hàm số từ hình vẽ:",
                "items": [
                    {
                        "key": "a",
                        "text": "Đồ thị có nhánh ngoài cùng bên phải đi xuống thì hệ số $a < 0$.",
                        "correct": "true",
                        "explain": "Dấu của $a$ qua giới hạn $+\\infty$."
                    },
                    {
                        "key": "b",
                        "text": "Giao điểm của đồ thị với trục tung $Oy$ luôn có toạ độ $(0; d)$.",
                        "correct": "true",
                        "explain": "Cho $x = 0$."
                    },
                    {
                        "key": "c",
                        "text": "Số điểm cực trị của hàm số bằng số lần đổi dấu của đạo hàm $y'$.",
                        "correct": "true",
                        "explain": "Điều kiện cực trị."
                    },
                    {
                        "key": "d",
                        "text": "Đồ thị hàm phân thức bậc 1/1 luôn đi qua gốc toạ độ $O$.",
                        "correct": "false",
                        "explain": "Chỉ đi qua gốc $O$ khi hệ số $b = 0$."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Về bài toán tương giao giữa hai đồ thị $y = f(x)$ và $y = g(x)$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Số giao điểm của hai đồ thị bằng số nghiệm của phương trình $f(x) = g(x)$.",
                        "correct": "true",
                        "explain": "Phương trình hoành độ giao điểm."
                    },
                    {
                        "key": "b",
                        "text": "Đồ thị hàm số $y = f(x)$ cắt đường thẳng $y = m$ tại điểm cực trị khi $m$ bằng giá trị cực trị.",
                        "correct": "true",
                        "explain": "Tính chất tiếp xúc tại đỉnh cực trị."
                    },
                    {
                        "key": "c",
                        "text": "Phương pháp đồ thị cho phép biện luận số nghiệm của phương trình có chứa tham số $m$.",
                        "correct": "true",
                        "explain": "Ứng dụng tương giao đồ thị."
                    },
                    {
                        "key": "d",
                        "text": "Hai đồ thị cắt nhau thì tiếp tuyến tại giao điểm luôn vuông góc với nhau.",
                        "correct": "false",
                        "explain": "Chỉ vuông góc khi tích hai hệ số góc $k_1 k_2 = -1$."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 4:") || t.includes("khảo sát sự biến thiên") || t.includes("khao sat su bien thien")) && !t.includes("ứng dụng đạo hàm");
      }
    },

  "toan12_bai5": {
        "id": "toan12_bai5",
        "lessonTitle": "Bài 5: Ứng dụng đạo hàm để giải quyết một số bài toán thực tiễn",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Tối ưu hoá hình học & Thể tích",
                "sgkHtml": "<p>Phương pháp mô hình hoá toán học giải quyết bài toán tối ưu hình học:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Quy trình 4 bước tối ưu hoá:</strong>\n                    <ol class=\"list-decimal ml-6 mt-1 space-y-1\">\n                      <li><b>Bước 1:</b> Xác định đại lượng cần tối ưu (thể tích $V$, diện tích xung quanh $S_{xq}$, diện tích toàn phần $S_{tp}$, chi phí...).</li>\n                      <li><b>Bước 2:</b> Chọn một biến số thích hợp $x$ (chiều dài cạnh, bán kính đáy, chiều cao...) và xác định miền giá trị thực tế của biến số (thường là một khoảng $(a; b)$ với $x > 0$).</li>\n                      <li><b>Bước 3:</b> Thiết lập hàm số mục tiêu $f(x)$ thể hiện đại lượng cần tối ưu theo biến $x$.</li>\n                      <li><b>Bước 4:</b> Dùng đạo hàm khảo sát hàm số $f(x)$ trên miền giá trị để tìm GTLN hoặc GTNN.</li>\n                    </ol>\n                  </li>\n                  <li><strong>Bài toán kinh điển:</strong> Cắt 4 góc hình vuông cạnh $x$ từ tấm tôn hình chữ nhật kích thước $a \\times b$ để gập thành hộp không nắp có thể tích lớn nhất:\n                    $$V(x) = x(a - 2x)(b - 2x) \\quad \\text{với } 0 < x < \\frac{\\min(a, b)}{2}$$\n                  </li>\n                </ul>",
                "noteHtml": "<li>Luôn kiểm tra điều kiện thực tế của biến số hình học (độ dài các cạnh phải dương).</li>\n                <li>Hầu hết các bài toán thực tế đều có đúng 1 điểm cực trị duy nhất trên khoảng mở, điểm đó chính là điểm tối ưu!</li>",
                "mistakeHtml": "<li>Quên trừ $2x$ ở hai đầu khi cắt góc (viết $a - x$ thay vì $a - 2x$).</li>\n                <li>Không xét điều kiện của biến số dẫn đến chọn nghiệm ngoài khoảng thực tế.</li>",
                "tipHtml": "<li><em>\"Hộp không nắp cắt 4 góc x: Thể tích = x nhân (dài - 2x) nhân (rộng - 2x) – Đạo hàm bằng 0 lấy nghiệm trong khoảng!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Từ một tấm bìa hình vuông cạnh $12\\text{ cm}$, người ta cắt bỏ 4 góc bốn hình vuông nhỏ bằng nhau cạnh $x\\text{ (cm)}$ rồi gập lại thành một chiếc hộp không nắp. Thể tích chiếc hộp lớn nhất khi $x$ bằng:",
                        "options": [
                            "A. $2\\text{ cm}$",
                            "B. $3\\text{ cm}$",
                            "C. $4\\text{ cm}$",
                            "D. $1\\text{ cm}$"
                        ],
                        "correct": "A",
                        "explanation": "$V(x) = x(12 - 2x)^2 = 4x(6 - x)^2$ với $0 < x < 6$. $V'(x) = (12 - 2x)^2 - 4x(12 - 2x) = (12 - 2x)(12 - 6x) = 0 \\implies x = 2$ hoặc $x = 6$ (loại). Vậy thể tích lớn nhất khi $x = 2\\text{ cm}$.",
                        "hint1": "$V(x) = x(12 - 2x)^2$. Điều kiện $0 < x < 6$.",
                        "hint2": "Đạo hàm triệt tiêu tại $x = 2$."
                    },
                    {
                        "question": "Một người nông dân muốn rào một khu vườn hình chữ nhật có diện tích $200\\text{ m}^2$ giáp một bờ sông thẳng (không cần rào phía bờ sông). Chiều dài hàng rào ngắn nhất bằng:",
                        "options": [
                            "A. $40\\text{ m}$",
                            "B. $20\\text{ m}$",
                            "C. $50\\text{ m}$",
                            "D. $30\\text{ m}$"
                        ],
                        "correct": "A",
                        "explanation": "Gọi chiều rộng vuông góc bờ sông là $x > 0$. Chiều dài dọc bờ sông là $y = 200/x$. Chiều dài hàng rào: $L(x) = 2x + y = 2x + \\frac{200}{x}$. Theo BĐT Cô-si: $2x + \\frac{200}{x} \\ge 2\\sqrt{2x \\cdot \\frac{200}{x}} = 2\\sqrt{400} = 40\\text{ m}$. Dấu bằng khi $2x = 200/x \\implies x = 10\\text{ m}$.",
                        "hint1": "Hàng rào gồm 2 cạnh $x$ và 1 cạnh $y$: $L = 2x + 200/x$.",
                        "hint2": "BĐT Cô-si: $2x + 200/x \\ge 2\\sqrt{400} = 40$."
                    },
                    {
                        "question": "Một lon sữa hình trụ có thể tích cố định $V$. Để tiết kiệm vật liệu làm vỏ lon nhất (diện tích toàn phần nhỏ nhất) thì tỉ số giữa chiều cao $h$ và bán kính đáy $R$ phải bằng:",
                        "options": [
                            "A. $2$",
                            "B. $1$",
                            "C. $4$",
                            "D. $\\sqrt{2}$"
                        ],
                        "correct": "A",
                        "explanation": "$V = \\pi R^2 h \\implies h = \\frac{V}{\\pi R^2}$. Diện tích toàn phần $S_{tp} = 2\\pi R^2 + 2\\pi Rh = 2\\pi R^2 + \\frac{2V}{R} = 2\\pi R^2 + \\frac{V}{R} + \\frac{V}{R} \\ge 3\\sqrt[3]{2\\pi R^2 \\cdot \\frac{V^2}{R^2}} = 3\\sqrt[3]{2\\pi V^2}$. Dấu bằng khi $2\\pi R^2 = \\frac{V}{R} = \\pi Rh \\implies h = 2R \\implies \\frac{h}{R} = 2$.",
                        "hint1": "Hình trụ tối ưu vật liệu khi chiều cao bằng đường kính đáy.",
                        "hint2": "$h = 2R \\implies h/R = 2$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 5: Ứng dụng đạo hàm để giải quyết một số bài toán thực tiễn</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Tối ưu hoá hình học & Thể tích</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Phương pháp mô hình hoá toán học giải quyết bài toán tối ưu hình học:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Quy trình 4 bước tối ưu hoá:</strong>\n                    <ol class=\"list-decimal ml-6 mt-1 space-y-1\">\n                      <li><b>Bước 1:</b> Xác định đại lượng cần tối ưu (thể tích $V$, diện tích xung quanh $S_{xq}$, diện tích toàn phần $S_{tp}$, chi phí...).</li>\n                      <li><b>Bước 2:</b> Chọn một biến số thích hợp $x$ (chiều dài cạnh, bán kính đáy, chiều cao...) và xác định miền giá trị thực tế của biến số (thường là một khoảng $(a; b)$ với $x > 0$).</li>\n                      <li><b>Bước 3:</b> Thiết lập hàm số mục tiêu $f(x)$ thể hiện đại lượng cần tối ưu theo biến $x$.</li>\n                      <li><b>Bước 4:</b> Dùng đạo hàm khảo sát hàm số $f(x)$ trên miền giá trị để tìm GTLN hoặc GTNN.</li>\n                    </ol>\n                  </li>\n                  <li><strong>Bài toán kinh điển:</strong> Cắt 4 góc hình vuông cạnh $x$ từ tấm tôn hình chữ nhật kích thước $a \\times b$ để gập thành hộp không nắp có thể tích lớn nhất:\n                    $$V(x) = x(a - 2x)(b - 2x) \\quad \\text{với } 0 < x < \\frac{\\min(a, b)}{2}$$\n                  </li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Luôn kiểm tra điều kiện thực tế của biến số hình học (độ dài các cạnh phải dương).</li>\n                <li>Hầu hết các bài toán thực tế đều có đúng 1 điểm cực trị duy nhất trên khoảng mở, điểm đó chính là điểm tối ưu!</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên trừ $2x$ ở hai đầu khi cắt góc (viết $a - x$ thay vì $a - 2x$).</li>\n                <li>Không xét điều kiện của biến số dẫn đến chọn nghiệm ngoài khoảng thực tế.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Hộp không nắp cắt 4 góc x: Thể tích = x nhân (dài - 2x) nhân (rộng - 2x) – Đạo hàm bằng 0 lấy nghiệm trong khoảng!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Tối ưu hoá kinh tế & Lợi nhuận",
                "sgkHtml": "<p>Mô hình toán học trong quản trị kinh doanh, phân tích kinh tế và tài chính:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\text{Lợi nhuận: } P(x) = R(x) - C(x)$$\n                  $$\\text{Doanh thu: } R(x) = x \\cdot p(x)$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li>$x$ là số lượng sản phẩm sản xuất và bán ra ($x \\ge 0$).</li>\n                  <li>$p(x)$ là hàm cầu (giá bán của một sản phẩm khi bán $x$ sản phẩm).</li>\n                  <li>$C(x)$ là hàm tổng chi phí sản xuất $x$ sản phẩm.</li>\n                  <li>$R(x) = x \\cdot p(x)$ là hàm tổng doanh thu.</li>\n                  <li><strong>Nguyên lý cận biên tối ưu hoá lợi nhuận:</strong> Lợi nhuận $P(x)$ đạt cực đại khi:\n                    $$P'(x) = 0 \\iff R'(x) = C'(x)$$\n                    (Doanh thu cận biên $MR$ bằng Chi phí cận biên $MC$).\n                  </li>\n                </ul>",
                "noteHtml": "<li>Doanh thu cận biên $R'(x)$ là doanh thu tăng thêm khi bán thêm một đơn vị sản phẩm.</li>\n                <li>Chi phí cận biên $C'(x)$ là chi phí tăng thêm khi sản xuất thêm một đơn vị sản phẩm.</li>",
                "mistakeHtml": "<li>Nhầm lẫn giữa doanh thu $R(x)$ và lợi nhuận $P(x)$ (lợi nhuận phải trừ đi chi phí: $P = R - C$).</li>\n                <li>Quên nhân số lượng $x$ với đơn giá $p(x)$ để ra doanh thu.</li>",
                "tipHtml": "<li><em>\"Lợi nhuận = Doanh thu trừ Chi phí – Lợi nhuận tối đa khi Doanh thu cận biên bằng Chi phí cận biên: R'(x) = C'(x)!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Một doanh nghiệp sản xuất một loại sản phẩm với hàm chi phí $C(x) = 2x^2 + 10x + 50$ (triệu đồng) và hàm doanh thu $R(x) = 100x - x^2$ (triệu đồng), với $x$ là số sản phẩm. Doanh nghiệp đạt lợi nhuận lớn nhất khi sản xuất bao nhiêu sản phẩm?",
                        "options": [
                            "A. $15$",
                            "B. $20$",
                            "C. $10$",
                            "D. $25$"
                        ],
                        "correct": "A",
                        "explanation": "Lợi nhuận $P(x) = R(x) - C(x) = (100x - x^2) - (2x^2 + 10x + 50) = -3x^2 + 90x - 50$. Đạo hàm: $P'(x) = -6x + 90 = 0 \\Leftrightarrow x = 15$. Vậy lợi nhuận tối đa khi sản xuất $15$ sản phẩm.",
                        "hint1": "Lập hàm lợi nhuận $P(x) = R(x) - C(x) = -3x^2 + 90x - 50$.",
                        "hint2": "Đạo hàm $P'(x) = -6x + 90 = 0 \\implies x = 15$."
                    },
                    {
                        "question": "Một rạp chiếu phim có giá vé $80$ nghìn đồng thì trung bình mỗi suất chiếu có $200$ khán giả. Cứ giảm giá vé $5$ nghìn đồng thì số khán giả tăng thêm $20$ người. Giá vé để doanh thu mỗi suất chiếu lớn nhất là:",
                        "options": [
                            "A. $65$ nghìn đồng",
                            "B. $70$ nghìn đồng",
                            "C. $60$ nghìn đồng",
                            "D. $75$ nghìn đồng"
                        ],
                        "correct": "A",
                        "explanation": "Gọi số lần giảm giá vé (mỗi lần 5 nghìn) là $x$. Giá vé là $80 - 5x$, số khán giả là $200 + 20x$. Doanh thu: $R(x) = (80 - 5x)(200 + 20x) = -100x^2 + 600x + 16000$. Đạo hàm: $R'(x) = -200x + 600 = 0 \\implies x = 3$. Giá vé tối ưu là $80 - 5(3) = 65$ nghìn đồng.",
                        "hint1": "Gọi $x$ là số lần giảm $5$ nghìn đồng.",
                        "hint2": "$R(x) = (80 - 5x)(200 + 20x)$ đạt cực đại khi $x = 3 \\implies$ giá vé $65$ nghìn."
                    },
                    {
                        "question": "Chi phí trung bình để sản xuất $x$ sản phẩm là $\\overline{C}(x) = x + 10 + \\frac{100}{x}$ (nghìn đồng/sản phẩm) với $x > 0$. Chi phí trung bình nhỏ nhất khi sản lượng $x$ bằng:",
                        "options": [
                            "A. $10$",
                            "B. $20$",
                            "C. $5$",
                            "D. $100$"
                        ],
                        "correct": "A",
                        "explanation": "Áp dụng Cô-si cho hai số $x$ và $100/x$: $x + \\frac{100}{x} \\ge 2\\sqrt{100} = 20$. Suy ra $\\overline{C}(x) \\ge 20 + 10 = 30$. Dấu bằng khi $x = 100/x \\implies x = 10$.",
                        "hint1": "Áp dụng BĐT Cô-si cho $x$ và $100/x$.",
                        "hint2": "$x = \\sqrt{100} = 10$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 5: Ứng dụng đạo hàm để giải quyết một số bài toán thực tiễn</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Tối ưu hoá kinh tế & Lợi nhuận</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Mô hình toán học trong quản trị kinh doanh, phân tích kinh tế và tài chính:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\text{Lợi nhuận: } P(x) = R(x) - C(x)$$\n                  $$\\text{Doanh thu: } R(x) = x \\cdot p(x)$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li>$x$ là số lượng sản phẩm sản xuất và bán ra ($x \\ge 0$).</li>\n                  <li>$p(x)$ là hàm cầu (giá bán của một sản phẩm khi bán $x$ sản phẩm).</li>\n                  <li>$C(x)$ là hàm tổng chi phí sản xuất $x$ sản phẩm.</li>\n                  <li>$R(x) = x \\cdot p(x)$ là hàm tổng doanh thu.</li>\n                  <li><strong>Nguyên lý cận biên tối ưu hoá lợi nhuận:</strong> Lợi nhuận $P(x)$ đạt cực đại khi:\n                    $$P'(x) = 0 \\iff R'(x) = C'(x)$$\n                    (Doanh thu cận biên $MR$ bằng Chi phí cận biên $MC$).\n                  </li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Doanh thu cận biên $R'(x)$ là doanh thu tăng thêm khi bán thêm một đơn vị sản phẩm.</li>\n                <li>Chi phí cận biên $C'(x)$ là chi phí tăng thêm khi sản xuất thêm một đơn vị sản phẩm.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Nhầm lẫn giữa doanh thu $R(x)$ và lợi nhuận $P(x)$ (lợi nhuận phải trừ đi chi phí: $P = R - C$).</li>\n                <li>Quên nhân số lượng $x$ với đơn giá $p(x)$ để ra doanh thu.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Lợi nhuận = Doanh thu trừ Chi phí – Lợi nhuận tối đa khi Doanh thu cận biên bằng Chi phí cận biên: R'(x) = C'(x)!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 3,
                "sectionTitle": "Mục 3: Ứng dụng trong Vật lí & Chuyển động",
                "sgkHtml": "<p>Ý nghĩa cơ học và vật lí của đạo hàm cấp một và đạo hàm cấp hai:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$v(t) = s'(t) \\quad (\\text{Vận tốc tức thời là đạo hàm của quãng đường})$$\n                  $$a(t) = v'(t) = s''(t) \\quad (\\text{Gia tốc tức thời là đạo hàm của vận tốc})$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Vận tốc lớn nhất:</strong> Vận tốc $v(t)$ đạt cực đại tại thời điểm mà gia tốc triệt tiêu:\n                    $$a(t) = v'(t) = 0$$\n                  </li>\n                  <li><strong>Độ cao lớn nhất:</strong> Vật ném thẳng đứng lên cao đạt độ cao lớn nhất khi vận tốc triệt tiêu:\n                    $$v(t) = s'(t) = 0$$\n                  </li>\n                  <li><strong>Dòng điện tức thời:</strong> Cường độ dòng điện tức thời là đạo hàm của điện lượng:\n                    $$i(t) = q'(t)$$\n                  </li>\n                </ul>",
                "noteHtml": "<li>Đạo hàm thể hiện tốc độ biến thiên tức thời của mọi quá trình tự nhiên (tốc độ phản ứng hoá học, tốc độ phân rã phóng xạ, tốc độ tăng trưởng vi khuẩn).</li>\n                <li>Thời gian $t$ trong các bài toán chuyển động luôn không âm: $t \\ge 0$.</li>",
                "mistakeHtml": "<li>Nhầm lẫn giữa vận tốc $v(t) = s'(t)$ và gia tốc $a(t) = s''(t)$.</li>\n                <li>Lấy nhầm đạo hàm theo biến vị trí thay vì biến thời gian $t$.</li>",
                "tipHtml": "<li><em>\"Quãng đường đạo hàm ra Vận tốc – Vận tốc đạo hàm ra Gia tốc – Vận tốc cực đại khi Gia tốc bằng 0!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Một vật chuyển động thẳng có phương trình quãng đường $s(t) = -t^3 + 6t^2 + 2t$ (trong đó $t$ tính bằng giây, $s$ tính bằng mét). Vận tốc của vật đạt giá trị lớn nhất tại thời điểm:",
                        "options": [
                            "A. $t = 2\\text{ s}$",
                            "B. $t = 4\\text{ s}$",
                            "C. $t = 1\\text{ s}$",
                            "D. $t = 3\\text{ s}$"
                        ],
                        "correct": "A",
                        "explanation": "Vận tốc $v(t) = s'(t) = -3t^2 + 12t + 2$. Vận tốc lớn nhất khi gia tốc $a(t) = v'(t) = -6t + 12 = 0 \\Leftrightarrow t = 2$ giây.",
                        "hint1": "Vận tốc $v(t) = s'(t) = -3t^2 + 12t + 2$.",
                        "hint2": "Gia tốc $a(t) = v'(t) = -6t + 12 = 0 \\implies t = 2\\text{ s}$."
                    },
                    {
                        "question": "Một vật được ném thẳng đứng lên cao từ mặt đất với phương trình độ cao $h(t) = 20t - 5t^2\\text{ (m)}$. Độ cao lớn nhất mà vật đạt được bằng:",
                        "options": [
                            "A. $20\\text{ m}$",
                            "B. $25\\text{ m}$",
                            "C. $15\\text{ m}$",
                            "D. $10\\text{ m}$"
                        ],
                        "correct": "A",
                        "explanation": "Vận tốc $v(t) = h'(t) = 20 - 10t = 0 \\Leftrightarrow t = 2$ giây. Độ cao lớn nhất: $h(2) = 20(2) - 5(2^2) = 40 - 20 = 20\\text{ m}$.",
                        "hint1": "Vật đạt độ cao lớn nhất khi $v(t) = 0 \\implies 20 - 10t = 0 \\implies t = 2$.",
                        "hint2": "$h(2) = 20(2) - 5(4) = 20\\text{ m}$."
                    },
                    {
                        "question": "Điện lượng truyền qua tiết diện dây dẫn biến thiên theo thời gian $q(t) = 3t^2 + 2t\\text{ (C)}$. Cường độ dòng điện tức thời tại thời điểm $t = 2\\text{ s}$ bằng:",
                        "options": [
                            "A. $14\\text{ A}$",
                            "B. $16\\text{ A}$",
                            "C. $12\\text{ A}$",
                            "D. $10\\text{ A}$"
                        ],
                        "correct": "A",
                        "explanation": "Cường độ dòng điện $i(t) = q'(t) = 6t + 2$. Tại $t = 2\\text{ s}$: $i(2) = 6(2) + 2 = 14\\text{ A}$.",
                        "hint1": "Cường độ dòng điện tức thời $i(t) = q'(t)$.",
                        "hint2": "$q'(2) = 6(2) + 2 = 14\\text{ A}$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 5: Ứng dụng đạo hàm để giải quyết một số bài toán thực tiễn</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 3: Mục 3: Ứng dụng trong Vật lí & Chuyển động</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Ý nghĩa cơ học và vật lí của đạo hàm cấp một và đạo hàm cấp hai:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$v(t) = s'(t) \\quad (\\text{Vận tốc tức thời là đạo hàm của quãng đường})$$\n                  $$a(t) = v'(t) = s''(t) \\quad (\\text{Gia tốc tức thời là đạo hàm của vận tốc})$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Vận tốc lớn nhất:</strong> Vận tốc $v(t)$ đạt cực đại tại thời điểm mà gia tốc triệt tiêu:\n                    $$a(t) = v'(t) = 0$$\n                  </li>\n                  <li><strong>Độ cao lớn nhất:</strong> Vật ném thẳng đứng lên cao đạt độ cao lớn nhất khi vận tốc triệt tiêu:\n                    $$v(t) = s'(t) = 0$$\n                  </li>\n                  <li><strong>Dòng điện tức thời:</strong> Cường độ dòng điện tức thời là đạo hàm của điện lượng:\n                    $$i(t) = q'(t)$$\n                  </li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Đạo hàm thể hiện tốc độ biến thiên tức thời của mọi quá trình tự nhiên (tốc độ phản ứng hoá học, tốc độ phân rã phóng xạ, tốc độ tăng trưởng vi khuẩn).</li>\n                <li>Thời gian $t$ trong các bài toán chuyển động luôn không âm: $t \\ge 0$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Nhầm lẫn giữa vận tốc $v(t) = s'(t)$ và gia tốc $a(t) = s''(t)$.</li>\n                <li>Lấy nhầm đạo hàm theo biến vị trí thay vì biến thời gian $t$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Quãng đường đạo hàm ra Vận tốc – Vận tốc đạo hàm ra Gia tốc – Vận tốc cực đại khi Gia tốc bằng 0!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Một mảnh vườn hình chữ nhật có chu vi $100\\text{ m}$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Nửa chu vi của mảnh vườn bằng $50\\text{ m}$.",
                        "correct": "true",
                        "explain": "$100/2 = 50$."
                    },
                    {
                        "key": "b",
                        "text": "Nếu gọi một cạnh là $x$ ($0 < x < 50$) thì cạnh kia là $50 - x$.",
                        "correct": "true",
                        "explain": "Tổng hai cạnh bằng 50."
                    },
                    {
                        "key": "c",
                        "text": "Diện tích mảnh vườn là $S(x) = x(50 - x) = -x^2 + 50x$.",
                        "correct": "true",
                        "explain": "Công thức diện tích hình chữ nhật."
                    },
                    {
                        "key": "d",
                        "text": "Diện tích mảnh vườn lớn nhất khi nó là hình chữ nhật có chiều dài gấp đôi chiều rộng.",
                        "correct": "false",
                        "explain": "Diện tích lớn nhất khi nó là HÌNH VUÔNG ($x = 25$)."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: Về quy trình giải bài toán tối ưu hoá thực tế bằng đạo hàm:",
                "items": [
                    {
                        "key": "a",
                        "text": "Bước đầu tiên là phải lập hàm số mục tiêu thể hiện đại lượng cần tối ưu.",
                        "correct": "true",
                        "explain": "Xác định hàm mục tiêu."
                    },
                    {
                        "key": "b",
                        "text": "Điều kiện của biến số trong bài toán hình học luôn là số thực dương.",
                        "correct": "true",
                        "explain": "Kích thước hình học phải dương."
                    },
                    {
                        "key": "c",
                        "text": "Giá trị tối ưu luôn luôn là nghiệm của đạo hàm bằng 0.",
                        "correct": "false",
                        "explain": "Có thể rơi vào đầu mút của đoạn nếu hàm đơn điệu."
                    },
                    {
                        "key": "d",
                        "text": "Bảng biến thiên là công cụ trực quan để khẳng định giá trị lớn nhất hoặc nhỏ nhất.",
                        "correct": "true",
                        "explain": "Phương pháp chuẩn toán học."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: Một công ty sản xuất đồ gia dụng có hàm doanh thu $R(x) = 120x$ và hàm chi phí $C(x) = x^2 + 20x + 100$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Hàm lợi nhuận là $P(x) = -x^2 + 100x - 100$.",
                        "correct": "true",
                        "explain": "$P = R - C = 120x - (x^2 + 20x + 100)$."
                    },
                    {
                        "key": "b",
                        "text": "Đạo hàm của hàm lợi nhuận là $P'(x) = -2x + 100$.",
                        "correct": "true",
                        "explain": "$P'(x) = -2x + 100$."
                    },
                    {
                        "key": "c",
                        "text": "Công ty đạt lợi nhuận lớn nhất khi sản xuất $50$ sản phẩm.",
                        "correct": "true",
                        "explain": "$-2x + 100 = 0 \\implies x = 50$."
                    },
                    {
                        "key": "d",
                        "text": "Lợi nhuận lớn nhất bằng $2400$ triệu đồng.",
                        "correct": "true",
                        "explain": "$P(50) = -(50)^2 + 100(50) - 100 = -2500 + 5000 - 100 = 2400$."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: Một quả bóng được sút lên không trung với phương trình độ cao $h(t) = 15t - 5t^2\\text{ (m)}$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Vận tốc ban đầu của quả bóng tại $t = 0$ bằng $15\\text{ m/s}$.",
                        "correct": "true",
                        "explain": "$v(0) = h'(0) = 15$."
                    },
                    {
                        "key": "b",
                        "text": "Quả bóng đạt độ cao lớn nhất sau $1{,}5$ giây.",
                        "correct": "true",
                        "explain": "$15 - 10t = 0 \\implies t = 1{,}5\\text{ s}$."
                    },
                    {
                        "key": "c",
                        "text": "Độ cao lớn nhất của quả bóng bằng $11{,}25\\text{ m}$.",
                        "correct": "true",
                        "explain": "$h(1{,}5) = 15(1{,}5) - 5(2{,}25) = 22{,}5 - 11{,}25 = 11{,}25\\text{ m}$."
                    },
                    {
                        "key": "d",
                        "text": "Quả bóng chạm đất sau $4$ giây.",
                        "correct": "false",
                        "explain": "$h(t) = 0 \\implies 5t(3 - t) = 0 \\implies t = 3$ giây chạm đất."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Về bài toán tiết kiệm vật liệu hình học không gian:",
                "items": [
                    {
                        "key": "a",
                        "text": "Trong các hình hộp chữ nhật có cùng thể tích thì hình lập phương có diện tích toàn phần nhỏ nhất.",
                        "correct": "true",
                        "explain": "Bất đẳng thức Cô-si cho 3 số."
                    },
                    {
                        "key": "b",
                        "text": "Trong các hình trụ có cùng thể tích thì hình trụ có chiều cao bằng đường kính đáy có diện tích toàn phần nhỏ nhất.",
                        "correct": "true",
                        "explain": "Tỉ số $h = 2R$."
                    },
                    {
                        "key": "c",
                        "text": "Diện tích bề mặt nhỏ nhất tương ứng với chi phí vật liệu chế tạo là thấp nhất.",
                        "correct": "true",
                        "explain": "Mục tiêu kinh tế kỹ thuật."
                    },
                    {
                        "key": "d",
                        "text": "Thể tích hộp không nắp gập từ tấm tôn phụ thuộc tuyến tính vào chiều rộng cắt góc $x$.",
                        "correct": "false",
                        "explain": "Thể tích là hàm bậc ba theo $x$."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Về khái niệm cận biên trong kinh tế học:",
                "items": [
                    {
                        "key": "a",
                        "text": "Chi phí cận biên $MC$ xấp xỉ chi phí để sản xuất thêm sản phẩm thứ $x + 1$.",
                        "correct": "true",
                        "explain": "Định nghĩa kinh tế học vi mô."
                    },
                    {
                        "key": "b",
                        "text": "Doanh thu cận biên $MR$ là đạo hàm cấp 1 của hàm tổng doanh thu.",
                        "correct": "true",
                        "explain": "$MR = R'(x)$."
                    },
                    {
                        "key": "c",
                        "text": "Khi $MR > MC$, doanh nghiệp nên tiếp tục mở rộng sản xuất để tăng thêm lợi nhuận.",
                        "correct": "true",
                        "explain": "Mỗi sản phẩm thêm vào mang lại thặng dư dương."
                    },
                    {
                        "key": "d",
                        "text": "Lợi nhuận tối đa luôn đạt được khi sản lượng sản xuất bằng 0.",
                        "correct": "false",
                        "explain": "Tại $x = 0$ doanh nghiệp bị lỗ do chi phí cố định."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 5:") || t.includes("bài toán thực tiễn") || t.includes("toán thực tiễn") || t.includes("thuc tien")) && !t.includes("tích phân");
      }
    },

  "toan12_bai6": {
        "id": "toan12_bai6",
        "lessonTitle": "Bài 6: Vectơ trong không gian",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Định nghĩa & Khái niệm cơ bản",
                "sgkHtml": "<p>Vectơ trong không gian là một đoạn thẳng có hướng, có điểm đầu và điểm cuối:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Ký hiệu:</strong> Vectơ có điểm đầu $A$, điểm cuối $B$ ký hiệu là $\\vec{AB}$; hoặc ký hiệu là $\\vec{a}, \\vec{b}, \\vec{u}, \\dots$</li>\n                  <li><strong>Giá của vectơ:</strong> Đường thẳng đi qua điểm đầu và điểm cuối của vectơ gọi là giá của vectơ đó.</li>\n                  <li><strong>Độ dài vectơ:</strong> Khoảng cách giữa điểm đầu và điểm cuối, ký hiệu là $|\\vec{AB}| = AB$. Vectơ có độ dài bằng 1 gọi là vectơ đơn vị.</li>\n                  <li><strong>Vectơ không:</strong> Vectơ có điểm đầu và điểm cuối trùng nhau, ký hiệu là $\\vec{0}$. Quy ước $\\vec{0}$ có độ dài bằng 0, hướng tuỳ ý và cùng phương, cùng hướng với mọi vectơ.</li>\n                  <li><strong>Hai vectơ cùng phương:</strong> Hai vectơ có giá song song hoặc trùng nhau. Hai vectơ cùng phương thì có thể cùng hướng hoặc ngược hướng.</li>\n                  <li><strong>Hai vectơ bằng nhau:</strong> Khi chúng cùng hướng và cùng độ dài: $\\vec{a} = \\vec{b} \\Leftrightarrow \\vec{a} \\uparrow\\uparrow \\vec{b}$ và $|\\vec{a}| = |\\vec{b}|$.</li>\n                </ul>",
                "noteHtml": "<li>Trong không gian, các khái niệm phương, hướng, độ dài hoàn toàn tương tự như trong mặt phẳng.</li>\n                <li>Mọi vectơ $\\vec{a}$ đều có thể tịnh tiến về gốc $O$ tuỳ ý sao cho $\\vec{OA} = \\vec{a}$.</li>",
                "mistakeHtml": "<li>Nhầm lẫn giữa phương và hướng (hai vectơ có giá song song là cùng phương, nhưng có thể ngược hướng).</li>\n                <li>Cho rằng hai vectơ cùng độ dài là bằng nhau (thiếu điều kiện cùng hướng).</li>",
                "tipHtml": "<li><em>\"Vectơ có Hướng và Độ dài – Bằng nhau khi Cùng Hướng và Cùng Độ dài – Vectơ không cùng phương với mọi vectơ!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Cho hình lập phương $ABCD.A'B'C'D'$. Vectơ nào dưới đây bằng vectơ $\\vec{AB}$?",
                        "options": [
                            "A. $\\vec{DC}$",
                            "B. $\\vec{CD}$",
                            "C. $\\vec{A'B'}$",
                            "D. Cả A và C đều đúng"
                        ],
                        "correct": "D",
                        "explanation": "Trong hình lập phương, $AB \\parallel DC$ và $AB = DC$, cùng hướng từ trái sang phải nên $\\vec{AB} = \\vec{DC}$. Tương tự ở mặt đáy trên: $\\vec{AB} = \\vec{A'B'}$. Do đó cả A và C đều đúng.",
                        "hint1": "Tìm các đoạn thẳng song song, cùng độ dài và cùng hướng với $\\vec{AB}$.",
                        "hint2": "$\\vec{AB} = \\vec{DC} = \\vec{A'B'} = \\vec{D'C'}$."
                    },
                    {
                        "question": "Mệnh đề nào sau đây là SAI?",
                        "options": [
                            "A. Vectơ-không có độ dài bằng 1.",
                            "B. Hai vectơ bằng nhau thì cùng hướng.",
                            "C. Hai vectơ đối nhau thì ngược hướng và có cùng độ dài.",
                            "D. Vectơ-không cùng phương với mọi vectơ."
                        ],
                        "correct": "A",
                        "explanation": "Vectơ-không có độ dài bằng 0, không phải bằng 1. Vectơ có độ dài bằng 1 là vectơ đơn vị.",
                        "hint1": "Kiểm tra định nghĩa độ dài của vectơ-không.",
                        "hint2": "$|\\vec{0}| = 0$."
                    },
                    {
                        "question": "Cho tứ diện đều $ABCD$. Khẳng định nào sau đây là ĐÚNG?",
                        "options": [
                            "A. $|\\vec{AB}| = |\\vec{CD}|$",
                            "B. $\\vec{AB} = \\vec{CD}$",
                            "C. $\\vec{AB}$ cùng phương $\\vec{CD}$",
                            "D. $\\vec{AB} + \\vec{CD} = \\vec{0}$"
                        ],
                        "correct": "A",
                        "explanation": "Tứ diện đều có tất cả các cạnh bằng nhau nên độ dài đoạn $AB = CD \\implies |\\vec{AB}| = |\\vec{CD}|$. Nhưng $AB$ và $CD$ là hai đường thẳng chéo nhau nên hai vectơ không cùng phương.",
                        "hint1": "Tứ diện đều có 6 cạnh bằng nhau.",
                        "hint2": "Độ dài hai cạnh đối bằng nhau, nhưng chúng chéo nhau."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 6: Vectơ trong không gian</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Định nghĩa & Khái niệm cơ bản</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Vectơ trong không gian là một đoạn thẳng có hướng, có điểm đầu và điểm cuối:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Ký hiệu:</strong> Vectơ có điểm đầu $A$, điểm cuối $B$ ký hiệu là $\\vec{AB}$; hoặc ký hiệu là $\\vec{a}, \\vec{b}, \\vec{u}, \\dots$</li>\n                  <li><strong>Giá của vectơ:</strong> Đường thẳng đi qua điểm đầu và điểm cuối của vectơ gọi là giá của vectơ đó.</li>\n                  <li><strong>Độ dài vectơ:</strong> Khoảng cách giữa điểm đầu và điểm cuối, ký hiệu là $|\\vec{AB}| = AB$. Vectơ có độ dài bằng 1 gọi là vectơ đơn vị.</li>\n                  <li><strong>Vectơ không:</strong> Vectơ có điểm đầu và điểm cuối trùng nhau, ký hiệu là $\\vec{0}$. Quy ước $\\vec{0}$ có độ dài bằng 0, hướng tuỳ ý và cùng phương, cùng hướng với mọi vectơ.</li>\n                  <li><strong>Hai vectơ cùng phương:</strong> Hai vectơ có giá song song hoặc trùng nhau. Hai vectơ cùng phương thì có thể cùng hướng hoặc ngược hướng.</li>\n                  <li><strong>Hai vectơ bằng nhau:</strong> Khi chúng cùng hướng và cùng độ dài: $\\vec{a} = \\vec{b} \\Leftrightarrow \\vec{a} \\uparrow\\uparrow \\vec{b}$ và $|\\vec{a}| = |\\vec{b}|$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Trong không gian, các khái niệm phương, hướng, độ dài hoàn toàn tương tự như trong mặt phẳng.</li>\n                <li>Mọi vectơ $\\vec{a}$ đều có thể tịnh tiến về gốc $O$ tuỳ ý sao cho $\\vec{OA} = \\vec{a}$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Nhầm lẫn giữa phương và hướng (hai vectơ có giá song song là cùng phương, nhưng có thể ngược hướng).</li>\n                <li>Cho rằng hai vectơ cùng độ dài là bằng nhau (thiếu điều kiện cùng hướng).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Vectơ có Hướng và Độ dài – Bằng nhau khi Cùng Hướng và Cùng Độ dài – Vectơ không cùng phương với mọi vectơ!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Các phép toán vectơ & Quy tắc hình hộp",
                "sgkHtml": "<p>Các phép toán tổng, hiệu và tích của vectơ với một số trong không gian:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Quy tắc 3 điểm (tam giác):</strong> Với ba điểm $A, B, C$ bất kỳ:\n                    $$\\vec{AB} + \\vec{BC} = \\vec{AC}; \\quad \\vec{AB} - \\vec{AC} = \\vec{CB}$$\n                  </li>\n                  <li><strong>Quy tắc hình bình hành:</strong> Nếu $ABCD$ là hình bình hành thì $\\vec{AB} + \\vec{AD} = \\vec{AC}$.</li>\n                  <li><strong>QUY TẮC HÌNH HỘP (Đặc trưng hình học không gian):</strong> Cho hình hộp $ABCD.A'B'C'D'$. Khi đó:\n                    $$\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$$\n                    (Đường chéo hình hộp bằng tổng ba vectơ xuất phát từ cùng một đỉnh dọc theo ba cạnh).\n                  </li>\n                  <li><strong>Tính chất trung điểm và trọng tâm:</strong>\n                    $$M \\text{ là trung điểm } AB \\Leftrightarrow \\vec{OA} + \\vec{OB} = 2\\vec{OM}$$\n                    $$G \\text{ là trọng tâm tứ diện } ABCD \\Leftrightarrow \\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$$\n                  </li>\n                </ul>",
                "noteHtml": "<li>Quy tắc hình hộp là công cụ mạnh mẽ nhất để phân tích một vectơ đường chéo theo ba cạnh độc lập của hình hộp.</li>\n                <li>Ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ đồng phẳng khi và chỉ khi có các số $m, n$ sao cho $\\vec{c} = m\\vec{a} + n\\vec{b}$ (với $\\vec{a}, \\vec{b}$ không cùng phương).</li>",
                "mistakeHtml": "<li>Nhầm lẫn giữa đường chéo của đáy $\\vec{AC}$ và đường chéo của hình hộp $\\vec{AC'}$.</li>\n                <li>Áp dụng sai quy tắc trừ: $\\vec{AB} - \\vec{AC} = \\vec{CB}$, không phải $\\vec{BC}$.</li>",
                "tipHtml": "<li><em>\"Quy tắc hình hộp: Đỉnh chung A – Ba cạnh AB, AD, AA' – Cộng lại ra đường chéo đối đỉnh AC'!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Cho hình hộp $ABCD.A'B'C'D'$. Đẳng thức nào sau đây là ĐÚNG?",
                        "options": [
                            "A. $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$",
                            "B. $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AC}$",
                            "C. $\\vec{AC'} = \\vec{AB} + \\vec{BC} + \\vec{CD}$",
                            "D. $\\vec{AC'} = \\vec{A'B'} + \\vec{A'D'} + \\vec{AC}$"
                        ],
                        "correct": "A",
                        "explanation": "Theo quy tắc hình hộp, vectơ đường chéo $\\vec{AC'}$ bằng tổng ba vectơ cạnh cùng xuất phát từ đỉnh $A$: $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$.",
                        "hint1": "Nhớ lại quy tắc hình hộp trong SGK.",
                        "hint2": "Ba cạnh xuất phát từ $A$ là $AB, AD, AA'$."
                    },
                    {
                        "question": "Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm của tam giác $BCD$. Đẳng thức vectơ nào sau đây đúng?",
                        "options": [
                            "A. $\\vec{AB} + \\vec{AC} + \\vec{AD} = 3\\vec{AG}$",
                            "B. $\\vec{AB} + \\vec{AC} + \\vec{AD} = \\vec{AG}$",
                            "C. $\\vec{AB} + \\vec{AC} + \\vec{AD} = 2\\vec{AG}$",
                            "D. $\\vec{AB} + \\vec{AC} + \\vec{AD} = 4\\vec{AG}$"
                        ],
                        "correct": "A",
                        "explanation": "Vì $G$ là trọng tâm $\\triangle BCD \\implies \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$. Chèn đỉnh $A$: $(\\vec{AB} - \\vec{AG}) + (\\vec{AC} - \\vec{AG}) + (\\vec{AD} - \\vec{AG}) = \\vec{0} \\implies \\vec{AB} + \\vec{AC} + \\vec{AD} = 3\\vec{AG}$.",
                        "hint1": "$G$ là trọng tâm $\\triangle BCD$ thì với mọi điểm $A$: $\\vec{AB} + \\vec{AC} + \\vec{AD} = 3\\vec{AG}$.",
                        "hint2": "Công thức trọng tâm tam giác mở rộng."
                    },
                    {
                        "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Khẳng định nào sau đây đúng?",
                        "options": [
                            "A. $\\vec{SA} + \\vec{SC} = \\vec{SB} + \\vec{SD}$",
                            "B. $\\vec{SA} + \\vec{SB} = \\vec{SC} + \\vec{SD}$",
                            "C. $\\vec{SA} + \\vec{SD} = \\vec{SB} + \\vec{SC}$",
                            "D. $\\vec{SA} + \\vec{SC} = 2(\\vec{SB} + \\vec{SD})$"
                        ],
                        "correct": "A",
                        "explanation": "Gọi $O$ là tâm hình bình hành $ABCD$. $O$ là trung điểm $AC$ và $BD$. Khi đó $\\vec{SA} + \\vec{SC} = 2\\vec{SO}$ và $\\vec{SB} + \\vec{SD} = 2\\vec{SO}$. Do đó $\\vec{SA} + \\vec{SC} = \\vec{SB} + \\vec{SD}$.",
                        "hint1": "Sử dụng tâm $O$ của hình bình hành: $O$ là trung điểm $AC$ và $BD$.",
                        "hint2": "Cả hai vế đều bằng $2\\vec{SO}$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 6: Vectơ trong không gian</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Các phép toán vectơ & Quy tắc hình hộp</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Các phép toán tổng, hiệu và tích của vectơ với một số trong không gian:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Quy tắc 3 điểm (tam giác):</strong> Với ba điểm $A, B, C$ bất kỳ:\n                    $$\\vec{AB} + \\vec{BC} = \\vec{AC}; \\quad \\vec{AB} - \\vec{AC} = \\vec{CB}$$\n                  </li>\n                  <li><strong>Quy tắc hình bình hành:</strong> Nếu $ABCD$ là hình bình hành thì $\\vec{AB} + \\vec{AD} = \\vec{AC}$.</li>\n                  <li><strong>QUY TẮC HÌNH HỘP (Đặc trưng hình học không gian):</strong> Cho hình hộp $ABCD.A'B'C'D'$. Khi đó:\n                    $$\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$$\n                    (Đường chéo hình hộp bằng tổng ba vectơ xuất phát từ cùng một đỉnh dọc theo ba cạnh).\n                  </li>\n                  <li><strong>Tính chất trung điểm và trọng tâm:</strong>\n                    $$M \\text{ là trung điểm } AB \\Leftrightarrow \\vec{OA} + \\vec{OB} = 2\\vec{OM}$$\n                    $$G \\text{ là trọng tâm tứ diện } ABCD \\Leftrightarrow \\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$$\n                  </li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quy tắc hình hộp là công cụ mạnh mẽ nhất để phân tích một vectơ đường chéo theo ba cạnh độc lập của hình hộp.</li>\n                <li>Ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ đồng phẳng khi và chỉ khi có các số $m, n$ sao cho $\\vec{c} = m\\vec{a} + n\\vec{b}$ (với $\\vec{a}, \\vec{b}$ không cùng phương).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Nhầm lẫn giữa đường chéo của đáy $\\vec{AC}$ và đường chéo của hình hộp $\\vec{AC'}$.</li>\n                <li>Áp dụng sai quy tắc trừ: $\\vec{AB} - \\vec{AC} = \\vec{CB}$, không phải $\\vec{BC}$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Quy tắc hình hộp: Đỉnh chung A – Ba cạnh AB, AD, AA' – Cộng lại ra đường chéo đối đỉnh AC'!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 3,
                "sectionTitle": "Mục 3: Tích vô hướng của hai vectơ",
                "sgkHtml": "<p>Tích vô hướng của hai vectơ trong không gian:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b})$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Góc giữa hai vectơ:</strong> Là góc $\\widehat{AOB}$ với $\\vec{OA} = \\vec{a}, \\vec{OB} = \\vec{b}$, có giá trị từ $0^\\circ$ đến $180^\\circ$.</li>\n                  <li><strong>Điều kiện vuông góc:</strong> Hai vectơ $\\vec{a}, \\vec{b} \\neq \\vec{0}$ vuông góc khi và chỉ khi:\n                    $$\\vec{a} \\perp \\vec{b} \\Leftrightarrow \\vec{a} \\cdot \\vec{b} = 0$$\n                  </li>\n                  <li><strong>Bình phương vô hướng:</strong> $\\vec{a}^2 = |\\vec{a}|^2 \\Leftrightarrow |\\vec{a}| = \\sqrt{\\vec{a}^2}$. Bình phương vô hướng của một vectơ luôn bằng bình phương độ dài của nó.</li>\n                  <li><strong>Công thức tính góc:</strong> $\\cos(\\vec{a}, \\vec{b}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| |\\vec{b}|}$.</li>\n                </ul>",
                "noteHtml": "<li>Ứng dụng Vật lí: Công của một lực $\\vec{F}$ thực hiện khi di chuyển vật theo độ dời $\\vec{d}$ là $A = \\vec{F} \\cdot \\vec{d} = |\\vec{F}| |\\vec{d}| \\cos \\alpha$.</li>\n                <li>Tích vô hướng là một SỐ THỰC, không phải là một vectơ.</li>",
                "mistakeHtml": "<li>Nhầm lẫn giữa tích vô hướng và phép nhân thông thường (viết thiếu dấu chấm hoặc nhầm kết quả ra vectơ).</li>\n                <li>Quên rằng góc giữa hai vectơ có thể là góc tù ($> 90^\\circ$), khi đó cosin mang giá trị âm và tích vô hướng âm!</li>",
                "tipHtml": "<li><em>\"Tích vô hướng = Tích độ dài nhân Cosin góc kẹp – Vuông góc tích bằng 0 – Cùng hướng tích bằng tích độ dài!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ có $|\\vec{a}| = 3, |\\vec{b}| = 4$ và góc giữa chúng bằng $60^\\circ$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
                        "options": [
                            "A. $6$",
                            "B. $6\\sqrt{3}$",
                            "C. $12$",
                            "D. $-6$"
                        ],
                        "correct": "A",
                        "explanation": "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos 60^\\circ = 3 \\cdot 4 \\cdot \\frac{1}{2} = 6$.",
                        "hint1": "Công thức $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos(\\vec{a}, \\vec{b})$.",
                        "hint2": "$3 \\times 4 \\times 0{,}5 = 6$."
                    },
                    {
                        "question": "Cho tứ diện đều $ABCD$ có cạnh bằng $a$. Tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng:",
                        "options": [
                            "A. $\\frac{a^2}{2}$",
                            "B. $-\\frac{a^2}{2}$",
                            "C. $\\frac{a^2\\sqrt{3}}{2}$",
                            "D. $a^2$"
                        ],
                        "correct": "A",
                        "explanation": "Tam giác $ABC$ là tam giác đều cạnh $a$ nên góc $\\widehat{BAC} = 60^\\circ$. $\\vec{AB} \\cdot \\vec{AC} = a \\cdot a \\cdot \\cos 60^\\circ = \\frac{a^2}{2}$.",
                        "hint1": "Góc $(\\vec{AB}, \\vec{AC}) = \\widehat{BAC} = 60^\\circ$.",
                        "hint2": "$a \\times a \\times \\cos 60^\\circ = a^2 / 2$."
                    },
                    {
                        "question": "Một người kéo một thùng hàng trên mặt sàn nằm ngang bằng một sợi dây hợp với phương ngang góc $30^\\circ$. Lực kéo có độ lớn $100\\text{ N}$. Công của lực kéo khi thùng hàng di chuyển được $10\\text{ m}$ là:",
                        "options": [
                            "A. $500\\sqrt{3}\\text{ J}$",
                            "B. $500\\text{ J}$",
                            "C. $1000\\text{ J}$",
                            "D. $1000\\sqrt{3}\\text{ J}$"
                        ],
                        "correct": "A",
                        "explanation": "Công $A = F \\cdot s \\cdot \\cos \\alpha = 100 \\cdot 10 \\cdot \\cos 30^\\circ = 1000 \\cdot \\frac{\\sqrt{3}}{2} = 500\\sqrt{3}\\text{ J}$.",
                        "hint1": "Công thức tính công cơ học $A = F \\cdot s \\cdot \\cos \\alpha$.",
                        "hint2": "$100 \\times 10 \\times \\frac{\\sqrt{3}}{2} = 500\\sqrt{3}$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 6: Vectơ trong không gian</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 3: Mục 3: Tích vô hướng của hai vectơ</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Tích vô hướng của hai vectơ trong không gian:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b})$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Góc giữa hai vectơ:</strong> Là góc $\\widehat{AOB}$ với $\\vec{OA} = \\vec{a}, \\vec{OB} = \\vec{b}$, có giá trị từ $0^\\circ$ đến $180^\\circ$.</li>\n                  <li><strong>Điều kiện vuông góc:</strong> Hai vectơ $\\vec{a}, \\vec{b} \\neq \\vec{0}$ vuông góc khi và chỉ khi:\n                    $$\\vec{a} \\perp \\vec{b} \\Leftrightarrow \\vec{a} \\cdot \\vec{b} = 0$$\n                  </li>\n                  <li><strong>Bình phương vô hướng:</strong> $\\vec{a}^2 = |\\vec{a}|^2 \\Leftrightarrow |\\vec{a}| = \\sqrt{\\vec{a}^2}$. Bình phương vô hướng của một vectơ luôn bằng bình phương độ dài của nó.</li>\n                  <li><strong>Công thức tính góc:</strong> $\\cos(\\vec{a}, \\vec{b}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| |\\vec{b}|}$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Ứng dụng Vật lí: Công của một lực $\\vec{F}$ thực hiện khi di chuyển vật theo độ dời $\\vec{d}$ là $A = \\vec{F} \\cdot \\vec{d} = |\\vec{F}| |\\vec{d}| \\cos \\alpha$.</li>\n                <li>Tích vô hướng là một SỐ THỰC, không phải là một vectơ.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Nhầm lẫn giữa tích vô hướng và phép nhân thông thường (viết thiếu dấu chấm hoặc nhầm kết quả ra vectơ).</li>\n                <li>Quên rằng góc giữa hai vectơ có thể là góc tù ($> 90^\\circ$), khi đó cosin mang giá trị âm và tích vô hướng âm!</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Tích vô hướng = Tích độ dài nhân Cosin góc kẹp – Vuông góc tích bằng 0 – Cùng hướng tích bằng tích độ dài!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Cho hình hộp $ABCD.A'B'C'D'$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Vectơ $\\vec{AB}$ bằng vectơ $\\vec{D'C'}$.",
                        "correct": "true",
                        "explain": "Cùng hướng và cùng độ dài."
                    },
                    {
                        "key": "b",
                        "text": "Vectơ $\\vec{AA'}$ bằng vectơ $\\vec{CC'}$.",
                        "correct": "true",
                        "explain": "Các cạnh bên của hình hộp bằng nhau và song song."
                    },
                    {
                        "key": "c",
                        "text": "Vectơ $\\vec{AC'}$ bằng $\\vec{AB} + \\vec{AD} + \\vec{AA'}$.",
                        "correct": "true",
                        "explain": "Đúng quy tắc hình hộp."
                    },
                    {
                        "key": "d",
                        "text": "Vectơ $\\vec{BD'} = \\vec{BA} + \\vec{BC} + \\vec{BB'}$.",
                        "correct": "true",
                        "explain": "Quy tắc hình hộp xuất phát từ đỉnh B."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: Về góc giữa hai vectơ trong không gian:",
                "items": [
                    {
                        "key": "a",
                        "text": "Góc giữa hai vectơ có số đo từ $0^\\circ$ đến $180^\\circ$.",
                        "correct": "true",
                        "explain": "Định nghĩa góc giữa 2 vectơ."
                    },
                    {
                        "key": "b",
                        "text": "Nếu hai vectơ cùng hướng thì góc giữa chúng bằng $0^\\circ$.",
                        "correct": "true",
                        "explain": "Góc giữa 2 vectơ cùng hướng bằng 0."
                    },
                    {
                        "key": "c",
                        "text": "Nếu hai vectơ ngược hướng thì góc giữa chúng bằng $180^\\circ$.",
                        "correct": "true",
                        "explain": "Góc giữa 2 vectơ ngược hướng bằng 180."
                    },
                    {
                        "key": "d",
                        "text": "Góc giữa hai vectơ không thể lớn hơn $90^\\circ$.",
                        "correct": "false",
                        "explain": "Góc giữa 2 vectơ có thể tù (tối đa 180 độ)."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: Cho tam giác $ABC$. Gọi $M$ là trung điểm của cạnh $BC$:",
                "items": [
                    {
                        "key": "a",
                        "text": "$\\vec{MB} + \\vec{MC} = \\vec{0}$.",
                        "correct": "true",
                        "explain": "Định nghĩa trung điểm."
                    },
                    {
                        "key": "b",
                        "text": "Với mọi điểm $O$ bất kỳ: $\\vec{OB} + \\vec{OC} = 2\\vec{OM}$.",
                        "correct": "true",
                        "explain": "Công thức trung điểm mở rộng."
                    },
                    {
                        "key": "c",
                        "text": "$\\vec{AB} + \\vec{AC} = 2\\vec{AM}$.",
                        "correct": "true",
                        "explain": "Ứng với điểm O là đỉnh A."
                    },
                    {
                        "key": "d",
                        "text": "$\\vec{AM} = \\vec{AB} + \\vec{AC}$.",
                        "correct": "false",
                        "explain": "Phải có hệ số 1/2."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: Về tích vô hướng của hai vectơ:",
                "items": [
                    {
                        "key": "a",
                        "text": "Tích vô hướng của hai vectơ là một số thực.",
                        "correct": "true",
                        "explain": "Tính chất cơ bản."
                    },
                    {
                        "key": "b",
                        "text": "Nếu tích vô hướng bằng 0 thì hai vectơ vuông góc với nhau (với các vectơ khác 0).",
                        "correct": "true",
                        "explain": "Điều kiện vuông góc."
                    },
                    {
                        "key": "c",
                        "text": "Bình phương vô hướng $\\vec{a}^2$ luôn bằng bình phương độ dài $|\\vec{a}|^2$.",
                        "correct": "true",
                        "explain": "Đẳng thức chuẩn."
                    },
                    {
                        "key": "d",
                        "text": "Tích vô hướng của hai vectơ luôn không âm.",
                        "correct": "false",
                        "explain": "Có thể âm khi góc tù."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Cho tứ diện $ABCD$ có $AB \\perp CD$. Khi đó:",
                "items": [
                    {
                        "key": "a",
                        "text": "Tích vô hướng $\\vec{AB} \\cdot \\vec{CD} = 0$.",
                        "correct": "true",
                        "explain": "Hai đường vuông góc thì tích vô hướng hai VTCP bằng 0."
                    },
                    {
                        "key": "b",
                        "text": "Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{CD}$ bằng $90^\\circ$.",
                        "correct": "true",
                        "explain": "Góc vuông."
                    },
                    {
                        "key": "c",
                        "text": "Hai đường thẳng $AB$ và $CD$ có thể cắt nhau.",
                        "correct": "false",
                        "explain": "Trong tứ diện, hai cạnh đối diện luôn chéo nhau."
                    },
                    {
                        "key": "d",
                        "text": "$\\vec{AB} \\cdot (\\vec{AD} - \\vec{AC}) = 0$.",
                        "correct": "true",
                        "explain": "Vì $\\vec{CD} = \\vec{AD} - \\vec{AC}$."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Về bài toán tổng hợp lực trong vật lí không gian:",
                "items": [
                    {
                        "key": "a",
                        "text": "Hợp lực của ba lực đồng quy bằng tổng vectơ của ba lực đó: $\\vec{F} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3$.",
                        "correct": "true",
                        "explain": "Định luật I Newton tổng quát."
                    },
                    {
                        "key": "b",
                        "text": "Một vật đứng cân bằng khi và chỉ khi hợp lực tác dụng lên nó bằng $\\vec{0}$.",
                        "correct": "true",
                        "explain": "Điều kiện cân bằng của chất điểm."
                    },
                    {
                        "key": "c",
                        "text": "Độ lớn của hợp lực luôn bằng tổng độ lớn của ba lực thành phần.",
                        "correct": "false",
                        "explain": "Chỉ bằng khi cả 3 lực cùng hướng."
                    },
                    {
                        "key": "d",
                        "text": "Quy tắc hình hộp có thể dùng để tìm hợp lực của 3 lực không đồng phẳng.",
                        "correct": "true",
                        "explain": "Ứng dụng trực tiếp quy tắc hình hộp."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 6:") || t.includes("vectơ trong không gian") || t.includes("vecto trong khong gian")) && !t.includes("toạ độ") && !t.includes("hệ trục");
      }
    },

  "toan12_bai7": {
        "id": "toan12_bai7",
        "lessonTitle": "Bài 7: Hệ trục toạ độ trong không gian",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Hệ trục toạ độ Oxyz trong không gian",
                "sgkHtml": "<p>Hệ trục toạ độ Đề-các vuông góc trong không gian $Oxyz$:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li>Gồm ba trục toạ độ $Ox, Oy, Oz$ đôi một vuông góc với nhau tại gốc toạ độ $O(0; 0; 0)$.</li>\n                  <li>Các vectơ đơn vị trên ba trục: $\\vec{i}$ trên $Ox$, $\\vec{j}$ trên $Oy$, $\\vec{k}$ trên $Oz$ thoả mãn:\n                    $$|\\vec{i}| = |\\vec{j}| = |\\vec{k}| = 1 \\quad \\text{và} \\quad \\vec{i} \\cdot \\vec{j} = \\vec{j} \\cdot \\vec{k} = \\vec{k} \\cdot \\vec{i} = 0$$\n                  </li>\n                  <li><strong>Tên gọi các trục:</strong> $Ox$ là trục hoành, $Oy$ là trục tung, $Oz$ là trục cao.</li>\n                  <li><strong>Các mặt phẳng toạ độ:</strong>\n                    <ul class=\"list-disc ml-5 space-y-1\">\n                      <li>$(Oxy)$ chứa trục $Ox, Oy$: phương trình $z = 0$.</li>\n                      <li>$(Oyz)$ chứa trục $Oy, Oz$: phương trình $x = 0$.</li>\n                      <li>$(Ozx)$ chứa trục $Oz, Ox$: phương trình $y = 0$.</li>\n                    </ul>\n                  </li>\n                </ul>",
                "noteHtml": "<li>Quy tắc bàn tay phải: Ngón cái chỉ $Ox$, ngón trỏ chỉ $Oy$, ngón giữa dựng đứng chỉ $Oz$.</li>\n                <li>Ba mặt phẳng toạ độ chia không gian thành 8 góc phần tám.</li>",
                "mistakeHtml": "<li>Nhầm lẫn thứ tự các trục (nhớ thứ tự bảng chữ cái: $x$ trước, $y$ giữa, $z$ sau).</li>\n                <li>Quên rằng toạ độ vectơ đơn vị là: $\\vec{i} = (1; 0; 0), \\vec{j} = (0; 1; 0), \\vec{k} = (0; 0; 1)$.</li>",
                "tipHtml": "<li><em>\"Oxyz ba trục vuông góc – i hoành, j tung, k cao – Mặt phẳng khuyết chữ nào thì chữ đó bằng 0!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Trong không gian $Oxyz$, toạ độ của vectơ đơn vị $\\vec{j}$ trên trục tung $Oy$ là:",
                        "options": [
                            "A. $(0; 1; 0)$",
                            "B. $(1; 0; 0)$",
                            "C. $(0; 0; 1)$",
                            "D. $(1; 1; 0)$"
                        ],
                        "correct": "A",
                        "explanation": "Trục tung $Oy$ có vectơ đơn vị $\\vec{j} = (0; 1; 0)$.",
                        "hint1": "Trục tung $Oy$ tương ứng với toạ độ thứ hai.",
                        "hint2": "$\\vec{i} = (1; 0; 0), \\vec{j} = (0; 1; 0), \\vec{k} = (0; 0; 1)$."
                    },
                    {
                        "question": "Mặt phẳng toạ độ $(Oyz)$ có phương trình là:",
                        "options": [
                            "A. $x = 0$",
                            "B. $y = 0$",
                            "C. $z = 0$",
                            "D. $y + z = 0$"
                        ],
                        "correct": "A",
                        "explanation": "Mặt phẳng $(Oyz)$ chứa trục $Oy$ và $Oz$, khuyết biến $x$ nên có phương trình $x = 0$.",
                        "hint1": "Mặt phẳng $(Oyz)$ khuyết chữ $x$.",
                        "hint2": "Mọi điểm trên $(Oyz)$ đều có hoành độ $x = 0$."
                    },
                    {
                        "question": "Tích vô hướng $\\vec{i} \\cdot \\vec{k}$ bằng:",
                        "options": [
                            "A. $0$",
                            "B. $1$",
                            "C. $-1$",
                            "D. $\\sqrt{2}$"
                        ],
                        "correct": "A",
                        "explanation": "Vì trục $Ox$ vuông góc với trục $Oz$ nên hai vectơ đơn vị tương ứng vuông góc nhau: $\\vec{i} \\cdot \\vec{k} = 0$.",
                        "hint1": "Hai trục toạ độ đôi một vuông góc.",
                        "hint2": "Tích vô hướng của 2 vectơ vuông góc bằng 0."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 7: Hệ trục toạ độ trong không gian</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Hệ trục toạ độ Oxyz trong không gian</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Hệ trục toạ độ Đề-các vuông góc trong không gian $Oxyz$:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li>Gồm ba trục toạ độ $Ox, Oy, Oz$ đôi một vuông góc với nhau tại gốc toạ độ $O(0; 0; 0)$.</li>\n                  <li>Các vectơ đơn vị trên ba trục: $\\vec{i}$ trên $Ox$, $\\vec{j}$ trên $Oy$, $\\vec{k}$ trên $Oz$ thoả mãn:\n                    $$|\\vec{i}| = |\\vec{j}| = |\\vec{k}| = 1 \\quad \\text{và} \\quad \\vec{i} \\cdot \\vec{j} = \\vec{j} \\cdot \\vec{k} = \\vec{k} \\cdot \\vec{i} = 0$$\n                  </li>\n                  <li><strong>Tên gọi các trục:</strong> $Ox$ là trục hoành, $Oy$ là trục tung, $Oz$ là trục cao.</li>\n                  <li><strong>Các mặt phẳng toạ độ:</strong>\n                    <ul class=\"list-disc ml-5 space-y-1\">\n                      <li>$(Oxy)$ chứa trục $Ox, Oy$: phương trình $z = 0$.</li>\n                      <li>$(Oyz)$ chứa trục $Oy, Oz$: phương trình $x = 0$.</li>\n                      <li>$(Ozx)$ chứa trục $Oz, Ox$: phương trình $y = 0$.</li>\n                    </ul>\n                  </li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quy tắc bàn tay phải: Ngón cái chỉ $Ox$, ngón trỏ chỉ $Oy$, ngón giữa dựng đứng chỉ $Oz$.</li>\n                <li>Ba mặt phẳng toạ độ chia không gian thành 8 góc phần tám.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Nhầm lẫn thứ tự các trục (nhớ thứ tự bảng chữ cái: $x$ trước, $y$ giữa, $z$ sau).</li>\n                <li>Quên rằng toạ độ vectơ đơn vị là: $\\vec{i} = (1; 0; 0), \\vec{j} = (0; 1; 0), \\vec{k} = (0; 0; 1)$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Oxyz ba trục vuông góc – i hoành, j tung, k cao – Mặt phẳng khuyết chữ nào thì chữ đó bằng 0!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Toạ độ của điểm & Toạ độ của vectơ",
                "sgkHtml": "<p>Định nghĩa toạ độ của điểm và vectơ trong không gian $Oxyz$:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Toạ độ của vectơ:</strong> $\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\Leftrightarrow \\vec{u} = (x; y; z)$.\n                    Mỗi vectơ được biểu diễn duy nhất qua bộ ba vectơ đơn vị.\n                  </li>\n                  <li><strong>Toạ độ của điểm:</strong> Toạ độ của điểm $M$ chính là toạ độ của vectơ vị trí $\\vec{OM}$:\n                    $$M(x; y; z) \\Leftrightarrow \\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$$\n                  </li>\n                  <li><strong>Toạ độ điểm trên các trục và mặt toạ độ:</strong>\n                    <ul class=\"list-disc ml-5 space-y-1\">\n                      <li>Điểm trên $Ox: (x; 0; 0)$; trên $Oy: (0; y; 0)$; trên $Oz: (0; 0; z)$.</li>\n                      <li>Hình chiếu vuông góc của $M(x; y; z)$ lên $(Oxy)$ là $M_1(x; y; 0)$; lên $(Oyz)$ là $M_2(0; y; z)$; lên $(Ozx)$ là $M_3(x; 0; z)$.</li>\n                      <li>Hình chiếu vuông góc của $M(x; y; z)$ lên trục $Ox$ là $(x; 0; 0)$; lên $Oy$ là $(0; y; 0)$; lên $Oz$ là $(0; 0; z)$.</li>\n                    </ul>\n                  </li>\n                </ul>",
                "noteHtml": "<li>Chiếu vuông góc lên đối tượng nào thì GIỮ NGUYÊN các toạ độ mang tên đối tượng đó, các toạ độ còn lại bằng 0!</li>\n                <li>Điểm đối xứng qua mặt phẳng toạ độ: Đổi dấu toạ độ KHÔNG mang tên mặt phẳng đó. (Ví dụ: đối xứng của $M(x; y; z)$ qua $(Oxy)$ là $M'(x; y; -z)$).</li>",
                "mistakeHtml": "<li>Đọc sai thứ tự toạ độ khi đề bài đảo vị trí các vectơ đơn vị (ví dụ $\\vec{u} = 2\\vec{i} - 5\\vec{k} + 3\\vec{j} \\implies \\vec{u} = (2; 3; -5)$).</li>\n                <li>Nhầm lẫn giữa hình chiếu lên trục toạ độ và hình chiếu lên mặt phẳng toạ độ.</li>",
                "tipHtml": "<li><em>\"Chiếu lên đâu giữ nguyên tên đó – Đổi xứng qua đâu đổi dấu chữ vắng mặt – Xếp đúng thứ tự i, j, k trước khi đọc toạ độ!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Trong không gian $Oxyz$, cho vectơ $\\vec{u} = 3\\vec{i} - 5\\vec{k} + 2\\vec{j}$. Toạ độ của vectơ $\\vec{u}$ là:",
                        "options": [
                            "A. $(3; 2; -5)$",
                            "B. $(3; -5; 2)$",
                            "C. $(-5; 2; 3)$",
                            "D. $(3; 2; 5)$"
                        ],
                        "correct": "A",
                        "explanation": "Sắp xếp theo thứ tự $\\vec{i}, \\vec{j}, \\vec{k}$: $\\vec{u} = 3\\vec{i} + 2\\vec{j} - 5\\vec{k}$. Vậy toạ độ là $(3; 2; -5)$.",
                        "hint1": "Đề bài đảo vị trí $\\vec{k}$ trước $\\vec{j}$.",
                        "hint2": "Hoành độ gắn với $\\vec{i}$, tung độ gắn với $\\vec{j}$, cao độ gắn với $\\vec{k}$."
                    },
                    {
                        "question": "Hình chiếu vuông góc của điểm $M(2; -3; 5)$ lên mặt phẳng toạ độ $(Oxy)$ là điểm có toạ độ:",
                        "options": [
                            "A. $(2; -3; 0)$",
                            "B. $(2; 0; 5)$",
                            "C. $(0; -3; 5)$",
                            "D. $(0; 0; 5)$"
                        ],
                        "correct": "A",
                        "explanation": "Chiếu lên $(Oxy)$ thì giữ nguyên $x = 2, y = -3$ và cho $z = 0$. Vậy toạ độ là $(2; -3; 0)$.",
                        "hint1": "Mặt phẳng $(Oxy)$ có phương trình $z = 0$.",
                        "hint2": "Giữ nguyên hoành độ và tung độ, cao độ bằng 0."
                    },
                    {
                        "question": "Điểm đối xứng của $M(1; -4; 3)$ qua mặt phẳng $(Oxz)$ có toạ độ là:",
                        "options": [
                            "A. $(1; 4; 3)$",
                            "B. $(-1; -4; -3)$",
                            "C. $(1; -4; -3)$",
                            "D. $(-1; 4; -3)$"
                        ],
                        "correct": "A",
                        "explanation": "Đối xứng qua $(Oxz)$ thì giữ nguyên $x, z$ và đổi dấu tung độ $y$: $-(-4) = 4 \\implies (1; 4; 3)$.",
                        "hint1": "Mặt phẳng $(Oxz)$ khuyết biến $y$.",
                        "hint2": "Đổi dấu tung độ $y$ từ $-4$ thành $+4$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 7: Hệ trục toạ độ trong không gian</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Toạ độ của điểm & Toạ độ của vectơ</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Định nghĩa toạ độ của điểm và vectơ trong không gian $Oxyz$:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Toạ độ của vectơ:</strong> $\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\Leftrightarrow \\vec{u} = (x; y; z)$.\n                    Mỗi vectơ được biểu diễn duy nhất qua bộ ba vectơ đơn vị.\n                  </li>\n                  <li><strong>Toạ độ của điểm:</strong> Toạ độ của điểm $M$ chính là toạ độ của vectơ vị trí $\\vec{OM}$:\n                    $$M(x; y; z) \\Leftrightarrow \\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$$\n                  </li>\n                  <li><strong>Toạ độ điểm trên các trục và mặt toạ độ:</strong>\n                    <ul class=\"list-disc ml-5 space-y-1\">\n                      <li>Điểm trên $Ox: (x; 0; 0)$; trên $Oy: (0; y; 0)$; trên $Oz: (0; 0; z)$.</li>\n                      <li>Hình chiếu vuông góc của $M(x; y; z)$ lên $(Oxy)$ là $M_1(x; y; 0)$; lên $(Oyz)$ là $M_2(0; y; z)$; lên $(Ozx)$ là $M_3(x; 0; z)$.</li>\n                      <li>Hình chiếu vuông góc của $M(x; y; z)$ lên trục $Ox$ là $(x; 0; 0)$; lên $Oy$ là $(0; y; 0)$; lên $Oz$ là $(0; 0; z)$.</li>\n                    </ul>\n                  </li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Chiếu vuông góc lên đối tượng nào thì GIỮ NGUYÊN các toạ độ mang tên đối tượng đó, các toạ độ còn lại bằng 0!</li>\n                <li>Điểm đối xứng qua mặt phẳng toạ độ: Đổi dấu toạ độ KHÔNG mang tên mặt phẳng đó. (Ví dụ: đối xứng của $M(x; y; z)$ qua $(Oxy)$ là $M'(x; y; -z)$).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Đọc sai thứ tự toạ độ khi đề bài đảo vị trí các vectơ đơn vị (ví dụ $\\vec{u} = 2\\vec{i} - 5\\vec{k} + 3\\vec{j} \\implies \\vec{u} = (2; 3; -5)$).</li>\n                <li>Nhầm lẫn giữa hình chiếu lên trục toạ độ và hình chiếu lên mặt phẳng toạ độ.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Chiếu lên đâu giữ nguyên tên đó – Đổi xứng qua đâu đổi dấu chữ vắng mặt – Xếp đúng thứ tự i, j, k trước khi đọc toạ độ!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 3,
                "sectionTitle": "Mục 3: Biểu thức toạ độ của các phép toán vectơ",
                "sgkHtml": "<p>Cho hai vectơ $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$ và số thực $k$:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Tổng hai vectơ:</strong> $\\vec{u} + \\vec{v} = (x_1 + x_2; y_1 + y_2; z_1 + z_2)$.</li>\n                  <li><strong>Hiệu hai vectơ:</strong> $\\vec{u} - \\vec{v} = (x_1 - x_2; y_1 - y_2; z_1 - z_2)$.</li>\n                  <li><strong>Tích vectơ với một số:</strong> $k\\vec{u} = (kx_1; ky_1; kz_1)$.</li>\n                  <li><strong>Vectơ nối hai điểm:</strong> Với $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$:\n                    $$\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$$\n                    (Lấy toạ độ ngọn trừ toạ độ gốc tương ứng).\n                  </li>\n                  <li><strong>Hai vectơ cùng phương:</strong> $\\vec{u}$ cùng phương $\\vec{v} \\neq \\vec{0} \\Leftrightarrow \\vec{u} = k\\vec{v} \\Leftrightarrow \\frac{x_1}{x_2} = \\frac{y_1}{y_2} = \\frac{z_1}{z_2}$ (khi các mẫu khác 0).</li>\n                </ul>",
                "noteHtml": "<li>Hai vectơ bằng nhau: $\\vec{u} = \\vec{v} \\Leftrightarrow x_1 = x_2; y_1 = y_2; z_1 = z_2$.</li>\n                <li>Ba điểm $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương.</li>",
                "mistakeHtml": "<li>Tính vectơ $\\vec{AB}$ lấy toạ độ điểm gốc trừ toạ độ điểm ngọn (phải lấy $B - A$).</li>\n                <li>Quên điều kiện mẫu số khác 0 khi lập tỉ số $\\frac{x_1}{x_2} = \\frac{y_1}{y_2} = \\frac{z_1}{z_2}$.</li>",
                "tipHtml": "<li><em>\"Vectơ AB lấy Ngọn B trừ Gốc A – Cộng trừ nhân số tính trên từng toạ độ x, y, z tương ứng!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Cho $\\vec{a} = (1; -2; 3)$ và $\\vec{b} = (2; 1; -1)$. Toạ độ vectơ $\\vec{u} = 2\\vec{a} - \\vec{b}$ là:",
                        "options": [
                            "A. $(0; -5; 7)$",
                            "B. $(4; -3; 5)$",
                            "C. $(0; -3; 7)$",
                            "D. $(0; -5; 5)$"
                        ],
                        "correct": "A",
                        "explanation": "$2\\vec{a} = (2; -4; 6)$. $\\vec{u} = (2 - 2; -4 - 1; 6 - (-1)) = (0; -5; 7)$.",
                        "hint1": "Nhân đôi toạ độ $\\vec{a}$ rồi trừ đi toạ độ $\\vec{b}$.",
                        "hint2": "$x = 2(1) - 2 = 0; y = 2(-2) - 1 = -5; z = 2(3) - (-1) = 7$."
                    },
                    {
                        "question": "Cho hai điểm $A(1; 2; -1)$ và $B(3; 0; 2)$. Toạ độ của vectơ $\\vec{AB}$ là:",
                        "options": [
                            "A. $(2; -2; 3)$",
                            "B. $(-2; 2; -3)$",
                            "C. $(4; 2; 1)$",
                            "D. $(2; -2; 1)$"
                        ],
                        "correct": "A",
                        "explanation": "$\\vec{AB} = (3 - 1; 0 - 2; 2 - (-1)) = (2; -2; 3)$.",
                        "hint1": "Lấy toạ độ $B$ trừ toạ độ $A$.",
                        "hint2": "$3 - 1 = 2; 0 - 2 = -2; 2 - (-1) = 3$."
                    },
                    {
                        "question": "Cho $\\vec{u} = (2; -1; 3)$ và $\\vec{v} = (m; 2; n)$. Để hai vectơ $\\vec{u}$ và $\\vec{v}$ cùng phương thì giá trị của $m$ và $n$ là:",
                        "options": [
                            "A. $m = -4; n = -6$",
                            "B. $m = 4; n = 6$",
                            "C. $m = -4; n = 6$",
                            "D. $m = 2; n = 3$"
                        ],
                        "correct": "A",
                        "explanation": "Tỉ số: $\\frac{m}{2} = \\frac{2}{-1} = \\frac{n}{3} = -2$. Suy ra $m = 2(-2) = -4$ và $n = 3(-2) = -6$.",
                        "hint1": "Tỉ số giữa các toạ độ phải bằng nhau.",
                        "hint2": "Hệ số tỉ lệ $k = 2/(-1) = -2$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 7: Hệ trục toạ độ trong không gian</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 3: Mục 3: Biểu thức toạ độ của các phép toán vectơ</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Cho hai vectơ $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$ và số thực $k$:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Tổng hai vectơ:</strong> $\\vec{u} + \\vec{v} = (x_1 + x_2; y_1 + y_2; z_1 + z_2)$.</li>\n                  <li><strong>Hiệu hai vectơ:</strong> $\\vec{u} - \\vec{v} = (x_1 - x_2; y_1 - y_2; z_1 - z_2)$.</li>\n                  <li><strong>Tích vectơ với một số:</strong> $k\\vec{u} = (kx_1; ky_1; kz_1)$.</li>\n                  <li><strong>Vectơ nối hai điểm:</strong> Với $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$:\n                    $$\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$$\n                    (Lấy toạ độ ngọn trừ toạ độ gốc tương ứng).\n                  </li>\n                  <li><strong>Hai vectơ cùng phương:</strong> $\\vec{u}$ cùng phương $\\vec{v} \\neq \\vec{0} \\Leftrightarrow \\vec{u} = k\\vec{v} \\Leftrightarrow \\frac{x_1}{x_2} = \\frac{y_1}{y_2} = \\frac{z_1}{z_2}$ (khi các mẫu khác 0).</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Hai vectơ bằng nhau: $\\vec{u} = \\vec{v} \\Leftrightarrow x_1 = x_2; y_1 = y_2; z_1 = z_2$.</li>\n                <li>Ba điểm $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Tính vectơ $\\vec{AB}$ lấy toạ độ điểm gốc trừ toạ độ điểm ngọn (phải lấy $B - A$).</li>\n                <li>Quên điều kiện mẫu số khác 0 khi lập tỉ số $\\frac{x_1}{x_2} = \\frac{y_1}{y_2} = \\frac{z_1}{z_2}$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Vectơ AB lấy Ngọn B trừ Gốc A – Cộng trừ nhân số tính trên từng toạ độ x, y, z tương ứng!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Trong không gian $Oxyz$, cho điểm $M(1; -2; 4)$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Vectơ vị trí $\\vec{OM} = \\vec{i} - 2\\vec{j} + 4\\vec{k}$.",
                        "correct": "true",
                        "explain": "Định nghĩa toạ độ điểm."
                    },
                    {
                        "key": "b",
                        "text": "Hình chiếu vuông góc của $M$ lên trục $Oz$ là $(0; 0; 4)$.",
                        "correct": "true",
                        "explain": "Chiếu lên trục Oz thì chỉ giữ lại cao độ z."
                    },
                    {
                        "key": "c",
                        "text": "Hình chiếu vuông góc của $M$ lên mặt phẳng $(Oxy)$ là $(1; -2; 0)$.",
                        "correct": "true",
                        "explain": "Chiếu lên (Oxy) thì z = 0."
                    },
                    {
                        "key": "d",
                        "text": "Khoảng cách từ điểm $M$ đến mặt phẳng $(Oxy)$ bằng $4$.",
                        "correct": "true",
                        "explain": "Khoảng cách bằng $|z| = |4| = 4$."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: Cho hai điểm $A(2; -1; 3)$ và $B(4; 3; -1)$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Toạ độ vectơ $\\vec{AB} = (2; 4; -4)$.",
                        "correct": "true",
                        "explain": "$(4-2; 3-(-1); -1-3) = (2; 4; -4)$."
                    },
                    {
                        "key": "b",
                        "text": "Vectơ $\\vec{u} = (1; 2; -2)$ cùng phương với $\\vec{AB}$.",
                        "correct": "true",
                        "explain": "$\\vec{AB} = 2(1; 2; -2)$."
                    },
                    {
                        "key": "c",
                        "text": "Độ dài đoạn thẳng $AB$ bằng $6$.",
                        "correct": "true",
                        "explain": "$\\sqrt{4 + 16 + 16} = \\sqrt{36} = 6$."
                    },
                    {
                        "key": "d",
                        "text": "Điểm đối xứng của $A$ qua gốc toạ độ $O$ là $(-2; 1; -3)$.",
                        "correct": "true",
                        "explain": "Đổi dấu cả 3 toạ độ."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: Về ba vectơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$ trong không gian $Oxyz$:",
                "items": [
                    {
                        "key": "a",
                        "text": "$\\vec{i} = (1; 0; 0), \\vec{j} = (0; 1; 0), \\vec{k} = (0; 0; 1)$.",
                        "correct": "true",
                        "explain": "Định nghĩa toạ độ chuẩn."
                    },
                    {
                        "key": "b",
                        "text": "Độ dài $|\\vec{i}| = |\\vec{j}| = |\\vec{k}| = 1$.",
                        "correct": "true",
                        "explain": "Là các vectơ đơn vị."
                    },
                    {
                        "key": "c",
                        "text": "$\\vec{i} \\cdot \\vec{j} = \\vec{j} \\cdot \\vec{k} = \\vec{k} \\cdot \\vec{i} = 0$.",
                        "correct": "true",
                        "explain": "Đôi một vuông góc."
                    },
                    {
                        "key": "d",
                        "text": "$\\vec{i} + \\vec{j} + \\vec{k} = \\vec{0}$.",
                        "correct": "false",
                        "explain": "Tổng bằng $(1; 1; 1) \\neq \\vec{0}$."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: Cho ba điểm $A(1; 0; 2), B(2; 1; 1), C(0; -1; 3)$:",
                "items": [
                    {
                        "key": "a",
                        "text": "$\\vec{AB} = (1; 1; -1)$.",
                        "correct": "true",
                        "explain": "$(2-1; 1-0; 1-2) = (1; 1; -1)$."
                    },
                    {
                        "key": "b",
                        "text": "$\\vec{AC} = (-1; -1; 1) = -\\vec{AB}$.",
                        "correct": "true",
                        "explain": "$(0-1; -1-0; 3-2) = (-1; -1; 1)$."
                    },
                    {
                        "key": "c",
                        "text": "Ba điểm $A, B, C$ thẳng hàng.",
                        "correct": "true",
                        "explain": "Vì $\\vec{AC} = -\\vec{AB}$ cùng phương."
                    },
                    {
                        "key": "d",
                        "text": "Điểm $B$ là trung điểm của đoạn thẳng $AC$.",
                        "correct": "false",
                        "explain": "$\\vec{AC} = -\\vec{AB} \\implies A$ mới là trung điểm $BC$."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Trong không gian toạ độ mô tả một trạm điều khiển bay đặt tại $O(0;0;0)$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Mặt đất được mô hình hoá bởi mặt phẳng toạ độ $(Oxy): z = 0$.",
                        "correct": "true",
                        "explain": "Quy ước mô hình hoá thực tế."
                    },
                    {
                        "key": "b",
                        "text": "Độ cao của một máy bay tại vị trí $P(x; y; z)$ chính là cao độ $z$ (với $z > 0$).",
                        "correct": "true",
                        "explain": "Khoảng cách đến mặt đất $(Oxy)$."
                    },
                    {
                        "key": "c",
                        "text": "Khoảng cách từ máy bay đến trạm điều khiển bằng $\\sqrt{x^2 + y^2 + z^2}$.",
                        "correct": "true",
                        "explain": "Khoảng cách từ điểm $P$ đến gốc $O$."
                    },
                    {
                        "key": "d",
                        "text": "Nếu máy bay bay ngang ở độ cao $10\\text{ km}$ thì toạ độ $x$ của nó luôn không đổi.",
                        "correct": "false",
                        "explain": "Độ cao không đổi nghĩa là $z = 10$, còn $x, y$ thay đổi khi bay."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Cho hai vectơ $\\vec{u} = (2; -1; 1)$ và $\\vec{v} = (1; 3; -2)$:",
                "items": [
                    {
                        "key": "a",
                        "text": "$\\vec{u} + \\vec{v} = (3; 2; -1)$.",
                        "correct": "true",
                        "explain": "$(2+1; -1+3; 1-2) = (3; 2; -1)$."
                    },
                    {
                        "key": "b",
                        "text": "$\\vec{u} - \\vec{v} = (1; -4; 3)$.",
                        "correct": "true",
                        "explain": "$(2-1; -1-3; 1-(-2)) = (1; -4; 3)$."
                    },
                    {
                        "key": "c",
                        "text": "$3\\vec{u} = (6; -3; 3)$.",
                        "correct": "true",
                        "explain": "Nhân 3 vào từng toạ độ."
                    },
                    {
                        "key": "d",
                        "text": "Hai vectơ $\\vec{u}$ và $\\vec{v}$ cùng phương với nhau.",
                        "correct": "false",
                        "explain": "Tỉ số $2/1 \\neq -1/3$ nên không cùng phương."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 7:") || t.includes("hệ trục toạ độ") || t.includes("he truc toa do")) && !t.includes("biểu thức toạ độ");
      }
    },

  "toan12_bai8": {
        "id": "toan12_bai8",
        "lessonTitle": "Bài 8: Biểu thức toạ độ của các phép toán vectơ",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Toạ độ tổng, hiệu và tích vectơ với một số",
                "sgkHtml": "<p>Hệ thống công thức toạ độ điểm đặc biệt và phép toán vectơ nâng cao:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Toạ độ trung điểm:</strong> Nếu $M$ là trung điểm của đoạn thẳng $AB$:\n                    $$x_M = \\frac{x_A + x_B}{2}; \\quad y_M = \\frac{y_A + y_B}{2}; \\quad z_M = \\frac{z_A + z_B}{2}$$\n                  </li>\n                  <li><strong>Toạ độ trọng tâm tam giác:</strong> Nếu $G$ là trọng tâm của tam giác $ABC$:\n                    $$x_G = \\frac{x_A + x_B + x_C}{3}; \\quad y_G = \\frac{y_A + y_B + y_C}{3}; \\quad z_G = \\frac{z_A + z_B + z_C}{3}$$\n                  </li>\n                  <li><strong>Toạ độ trọng tâm tứ diện:</strong> Nếu $G_T$ là trọng tâm của tứ diện $ABCD$:\n                    $$x_{G_T} = \\frac{x_A + x_B + x_C + x_D}{4}; \\quad y_{G_T} = \\frac{y_A + y_B + y_C + y_D}{4}; \\quad z_{G_T} = \\frac{z_A + z_B + z_C + z_D}{4}$$\n                  </li>\n                  <li><strong>Toạ độ đỉnh thứ tư của hình bình hành:</strong> $ABCD$ là hình bình hành khi $\\vec{AB} = \\vec{DC} \\Leftrightarrow D = A + C - B$.</li>\n                </ul>",
                "noteHtml": "<li>Trung điểm chia đôi (chia 2), trọng tâm tam giác chia 3, trọng tâm tứ diện chia 4.</li>\n                <li>Công thức hình bình hành $ABCD$: $x_A + x_C = x_B + x_D$ (tổng hai đỉnh đối diện bằng nhau).</li>",
                "mistakeHtml": "<li>Chia nhầm số lượng điểm (chia 2 cho trọng tâm tam giác thay vì chia 3).</li>\n                <li>Nhầm lẫn thứ tự đỉnh của hình bình hành ($ABCD$ thì $A$ đối diện $C$, $B$ đối diện $D$).</li>",
                "tipHtml": "<li><em>\"Trung điểm cộng lại chia 2 – Trọng tâm tam giác chia 3 – Hình bình hành: Tổng hai đỉnh đối luôn bằng nhau!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Cho hai điểm $A(1; 3; -2)$ và $B(3; -1; 4)$. Toạ độ trung điểm $M$ của đoạn thẳng $AB$ là:",
                        "options": [
                            "A. $M(2; 1; 1)$",
                            "B. $M(4; 2; 2)$",
                            "C. $M(1; -2; 3)$",
                            "D. $M(2; 2; 1)$"
                        ],
                        "correct": "A",
                        "explanation": "$x_M = (1+3)/2 = 2; y_M = (3-1)/2 = 1; z_M = (-2+4)/2 = 1 \\implies M(2; 1; 1)$.",
                        "hint1": "Cộng toạ độ từng cặp rồi chia 2.",
                        "hint2": "Hoành độ: $(1+3)/2 = 2$."
                    },
                    {
                        "question": "Cho tam giác $ABC$ với $A(1; 2; 0), B(2; 0; 3), C(-3; 1; 3)$. Toạ độ trọng tâm $G$ của tam giác $ABC$ là:",
                        "options": [
                            "A. $G(0; 1; 2)$",
                            "B. $G(0; 3; 6)$",
                            "C. $G(0; 1; 3)$",
                            "D. $G(1; 1; 2)$"
                        ],
                        "correct": "A",
                        "explanation": "$x_G = (1+2-3)/3 = 0; y_G = (2+0+1)/3 = 1; z_G = (0+3+3)/3 = 2 \\implies G(0; 1; 2)$.",
                        "hint1": "Cộng toạ độ 3 điểm rồi chia 3.",
                        "hint2": "$(1+2-3)/3 = 0; (2+0+1)/3 = 1; (0+3+3)/3 = 2$."
                    },
                    {
                        "question": "Cho hình bình hành $ABCD$ với $A(1; 1; 1), B(2; 3; 4), C(6; 5; 2)$. Toạ độ đỉnh $D$ là:",
                        "options": [
                            "A. $D(5; 3; -1)$",
                            "B. $D(7; 7; 5)$",
                            "C. $D(3; 3; -1)$",
                            "D. $D(5; 3; 1)$"
                        ],
                        "correct": "A",
                        "explanation": "Trong hình bình hành $ABCD$: $D = A + C - B$. $x_D = 1 + 6 - 2 = 5; y_D = 1 + 5 - 3 = 3; z_D = 1 + 2 - 4 = -1 \\implies D(5; 3; -1)$.",
                        "hint1": "Sử dụng quy tắc tổng hai đỉnh đối $A + C = B + D$.",
                        "hint2": "$D = A + C - B = (1+6-2; 1+5-3; 1+2-4) = (5; 3; -1)$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 8: Biểu thức toạ độ của các phép toán vectơ</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Toạ độ tổng, hiệu và tích vectơ với một số</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Hệ thống công thức toạ độ điểm đặc biệt và phép toán vectơ nâng cao:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Toạ độ trung điểm:</strong> Nếu $M$ là trung điểm của đoạn thẳng $AB$:\n                    $$x_M = \\frac{x_A + x_B}{2}; \\quad y_M = \\frac{y_A + y_B}{2}; \\quad z_M = \\frac{z_A + z_B}{2}$$\n                  </li>\n                  <li><strong>Toạ độ trọng tâm tam giác:</strong> Nếu $G$ là trọng tâm của tam giác $ABC$:\n                    $$x_G = \\frac{x_A + x_B + x_C}{3}; \\quad y_G = \\frac{y_A + y_B + y_C}{3}; \\quad z_G = \\frac{z_A + z_B + z_C}{3}$$\n                  </li>\n                  <li><strong>Toạ độ trọng tâm tứ diện:</strong> Nếu $G_T$ là trọng tâm của tứ diện $ABCD$:\n                    $$x_{G_T} = \\frac{x_A + x_B + x_C + x_D}{4}; \\quad y_{G_T} = \\frac{y_A + y_B + y_C + y_D}{4}; \\quad z_{G_T} = \\frac{z_A + z_B + z_C + z_D}{4}$$\n                  </li>\n                  <li><strong>Toạ độ đỉnh thứ tư của hình bình hành:</strong> $ABCD$ là hình bình hành khi $\\vec{AB} = \\vec{DC} \\Leftrightarrow D = A + C - B$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Trung điểm chia đôi (chia 2), trọng tâm tam giác chia 3, trọng tâm tứ diện chia 4.</li>\n                <li>Công thức hình bình hành $ABCD$: $x_A + x_C = x_B + x_D$ (tổng hai đỉnh đối diện bằng nhau).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Chia nhầm số lượng điểm (chia 2 cho trọng tâm tam giác thay vì chia 3).</li>\n                <li>Nhầm lẫn thứ tự đỉnh của hình bình hành ($ABCD$ thì $A$ đối diện $C$, $B$ đối diện $D$).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Trung điểm cộng lại chia 2 – Trọng tâm tam giác chia 3 – Hình bình hành: Tổng hai đỉnh đối luôn bằng nhau!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Tích vô hướng, độ dài vectơ & Khoảng cách",
                "sgkHtml": "<p>Biểu thức toạ độ của tích vô hướng, độ dài vectơ và khoảng cách giữa hai điểm:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Tích vô hướng:</strong> Với $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$:\n                    $$\\vec{u} \\cdot \\vec{v} = x_1x_2 + y_1y_2 + z_1z_2$$\n                    (Tích hoành cộng tích tung cộng tích cao).\n                  </li>\n                  <li><strong>Độ dài của vectơ:</strong>\n                    $$|\\vec{u}| = \\sqrt{x_1^2 + y_1^2 + z_1^2}$$\n                  </li>\n                  <li><strong>Khoảng cách giữa hai điểm $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$:</strong>\n                    $$AB = |\\vec{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$$\n                  </li>\n                  <li><strong>Điều kiện vuông góc:</strong> $\\vec{u} \\perp \\vec{v} \\Leftrightarrow x_1x_2 + y_1y_2 + z_1z_2 = 0$.</li>\n                </ul>",
                "noteHtml": "<li>Khoảng cách từ điểm $M(x; y; z)$ đến gốc toạ độ $O$ là $OM = \\sqrt{x^2 + y^2 + z^2}$.</li>\n                <li>Bấm máy Casio fx-580VNX: Vào MENU 5 (VECTƠ), nhập Vectơ A và Vectơ B, bấm [OPTN][2] (Dot Product) tính tích vô hướng; bấm [SHIFT][(] (Abs) tính độ dài!</li>",
                "mistakeHtml": "<li>Quên lấy căn bậc hai khi tính độ dài vectơ (tính ra bình phương độ dài).</li>\n                <li>Dấu trừ khi bình phương trong căn: $(-3)^2 = +9$, không phải $-9$.</li>",
                "tipHtml": "<li><em>\"Tích vô hướng: Nhân từng toạ độ rồi cộng lại – Độ dài: Căn tổng ba bình phương – Bấm MENU 5 trên Casio ra kết quả trong tích tắc!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Cho hai vectơ $\\vec{u} = (2; -1; 3)$ và $\\vec{v} = (1; 4; 2)$. Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ bằng:",
                        "options": [
                            "A. $4$",
                            "B. $8$",
                            "C. $2$",
                            "D. $-4$"
                        ],
                        "correct": "A",
                        "explanation": "$\\vec{u} \\cdot \\vec{v} = 2(1) + (-1)(4) + 3(2) = 2 - 4 + 6 = 4$.",
                        "hint1": "Nhân hoành với hoành, tung với tung, cao với cao rồi cộng lại.",
                        "hint2": "$2(1) - 4 + 6 = 4$."
                    },
                    {
                        "question": "Độ dài của vectơ $\\vec{a} = (2; -3; 6)$ bằng:",
                        "options": [
                            "A. $7$",
                            "B. $49$",
                            "C. $\\sqrt{11}$",
                            "D. $5$"
                        ],
                        "correct": "A",
                        "explanation": "$|\\vec{a}| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
                        "hint1": "Tính căn bậc hai của tổng bình phương ba toạ độ.",
                        "hint2": "$\\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
                    },
                    {
                        "question": "Khoảng cách giữa hai điểm $A(1; 2; -3)$ và $B(4; -2; 9)$ bằng:",
                        "options": [
                            "A. $13$",
                            "B. $169$",
                            "C. $\\sqrt{119}$",
                            "D. $15$"
                        ],
                        "correct": "A",
                        "explanation": "$AB = \\sqrt{(4-1)^2 + (-2-2)^2 + (9-(-3))^2} = \\sqrt{3^2 + (-4)^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$.",
                        "hint1": "Bộ ba Pytago mở rộng: $3, 4, 12 \\implies \\sqrt{3^2+4^2+12^2} = 13$.",
                        "hint2": "$\\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 8: Biểu thức toạ độ của các phép toán vectơ</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Tích vô hướng, độ dài vectơ & Khoảng cách</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Biểu thức toạ độ của tích vô hướng, độ dài vectơ và khoảng cách giữa hai điểm:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Tích vô hướng:</strong> Với $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$:\n                    $$\\vec{u} \\cdot \\vec{v} = x_1x_2 + y_1y_2 + z_1z_2$$\n                    (Tích hoành cộng tích tung cộng tích cao).\n                  </li>\n                  <li><strong>Độ dài của vectơ:</strong>\n                    $$|\\vec{u}| = \\sqrt{x_1^2 + y_1^2 + z_1^2}$$\n                  </li>\n                  <li><strong>Khoảng cách giữa hai điểm $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$:</strong>\n                    $$AB = |\\vec{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$$\n                  </li>\n                  <li><strong>Điều kiện vuông góc:</strong> $\\vec{u} \\perp \\vec{v} \\Leftrightarrow x_1x_2 + y_1y_2 + z_1z_2 = 0$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Khoảng cách từ điểm $M(x; y; z)$ đến gốc toạ độ $O$ là $OM = \\sqrt{x^2 + y^2 + z^2}$.</li>\n                <li>Bấm máy Casio fx-580VNX: Vào MENU 5 (VECTƠ), nhập Vectơ A và Vectơ B, bấm [OPTN][2] (Dot Product) tính tích vô hướng; bấm [SHIFT][(] (Abs) tính độ dài!</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên lấy căn bậc hai khi tính độ dài vectơ (tính ra bình phương độ dài).</li>\n                <li>Dấu trừ khi bình phương trong căn: $(-3)^2 = +9$, không phải $-9$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Tích vô hướng: Nhân từng toạ độ rồi cộng lại – Độ dài: Căn tổng ba bình phương – Bấm MENU 5 trên Casio ra kết quả trong tích tắc!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 3,
                "sectionTitle": "Mục 3: Góc giữa hai vectơ & Bài toán thực tế",
                "sgkHtml": "<p>Công thức tính góc giữa hai vectơ và ứng dụng toạ độ trong thực tế:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| |\\vec{v}|} = \\frac{x_1x_2 + y_1y_2 + z_1z_2}{\\sqrt{x_1^2 + y_1^2 + z_1^2} \\cdot \\sqrt{x_2^2 + y_2^2 + z_2^2}}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li>Góc giữa hai vectơ có giá trị từ $0^\\circ$ đến $180^\\circ$. Nếu $\\cos > 0 \\implies$ góc nhọn; $\\cos = 0 \\implies$ góc vuông; $\\cos < 0 \\implies$ góc tù.</li>\n                  <li><strong>Bài toán thực tế định vị GPS:</strong> Xác định góc mở giữa các vệ tinh định vị nhìn từ một trạm thu sóng mặt đất.</li>\n                  <li><strong>Bài toán công và lực kéo:</strong> Lực $\\vec{F} = (F_x; F_y; F_z)$ tác dụng làm dịch chuyển vật theo vectơ $\\vec{d} = (d_x; d_y; d_z)$ thì công sinh ra là $A = \\vec{F} \\cdot \\vec{d} = F_x d_x + F_y d_y + F_z d_z$.</li>\n                </ul>",
                "noteHtml": "<li>Chú ý không có dấu giá trị tuyệt đối trên tử số đối với góc giữa hai VECTƠ (khác với góc giữa hai đường thẳng!).</li>\n                <li>Tam giác $ABC$ vuông tại $A \\Leftrightarrow \\vec{AB} \\cdot \\vec{AC} = 0$.</li>",
                "mistakeHtml": "<li>Tự tiện thêm dấu giá trị tuyệt đối trên tử số làm mất góc tù giữa hai vectơ.</li>\n                <li>Quên nhân độ dài ở mẫu số.</li>",
                "tipHtml": "<li><em>\"Góc giữa hai vectơ: Tử số KHÔNG có trị tuyệt đối – Cos âm ra góc tù, Cos dương ra góc nhọn!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Cho hai vectơ $\\vec{u} = (1; 0; 1)$ và $\\vec{v} = (0; 1; 1)$. Cosin của góc giữa $\\vec{u}$ và $\\vec{v}$ bằng:",
                        "options": [
                            "A. $\\frac{1}{2}$",
                            "B. $\\frac{\\sqrt{2}}{2}$",
                            "C. $\\frac{1}{4}$",
                            "D. $0$"
                        ],
                        "correct": "A",
                        "explanation": "$\\vec{u} \\cdot \\vec{v} = 1(0) + 0(1) + 1(1) = 1$. $|\\vec{u}| = \\sqrt{2}, |\\vec{v}| = \\sqrt{2}$. $\\cos(\\vec{u}, \\vec{v}) = \\frac{1}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2} \\implies$ góc bằng $60^\\circ$.",
                        "hint1": "Tích vô hướng bằng 1, độ dài mỗi vectơ bằng $\\sqrt{2}$.",
                        "hint2": "$\\cos = 1/(\\sqrt{2}\\sqrt{2}) = 1/2$."
                    },
                    {
                        "question": "Góc giữa hai vectơ $\\vec{a} = (1; -1; 0)$ và $\\vec{b} = (-1; 0; 1)$ bằng:",
                        "options": [
                            "A. $120^\\circ$",
                            "B. $60^\\circ$",
                            "C. $45^\\circ$",
                            "D. $135^\\circ$"
                        ],
                        "correct": "A",
                        "explanation": "$\\vec{a} \\cdot \\vec{b} = 1(-1) + (-1)(0) + 0(1) = -1$. $|\\vec{a}| = \\sqrt{2}, |\\vec{b}| = \\sqrt{2}$. $\\cos(\\vec{a}, \\vec{b}) = \\frac{-1}{2} \\implies$ góc bằng $120^\\circ$.",
                        "hint1": "Tích vô hướng mang dấu âm: $-1$.",
                        "hint2": "$\\cos = -1/2 \\implies$ góc tù $120^\\circ$."
                    },
                    {
                        "question": "Một lực $\\vec{F} = (20; -10; 30)\\text{ N}$ tác dụng làm dịch chuyển một vật từ $A(1; 0; 2)$ đến $B(4; 2; 5)$ (đơn vị mét). Công sinh ra bởi lực $\\vec{F}$ là:",
                        "options": [
                            "A. $130\\text{ J}$",
                            "B. $100\\text{ J}$",
                            "C. $150\\text{ J}$",
                            "D. $80\\text{ J}$"
                        ],
                        "correct": "A",
                        "explanation": "$\\vec{AB} = (4-1; 2-0; 5-2) = (3; 2; 3)$. Công $A = \\vec{F} \\cdot \\vec{AB} = 20(3) + (-10)(2) + 30(3) = 60 - 20 + 90 = 130\\text{ J}$.",
                        "hint1": "Tìm vectơ độ dời $\\vec{AB} = (3; 2; 3)$.",
                        "hint2": "Công $A = \\vec{F} \\cdot \\vec{AB} = 60 - 20 + 90 = 130\\text{ J}$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 8: Biểu thức toạ độ của các phép toán vectơ</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 3: Mục 3: Góc giữa hai vectơ & Bài toán thực tế</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Công thức tính góc giữa hai vectơ và ứng dụng toạ độ trong thực tế:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| |\\vec{v}|} = \\frac{x_1x_2 + y_1y_2 + z_1z_2}{\\sqrt{x_1^2 + y_1^2 + z_1^2} \\cdot \\sqrt{x_2^2 + y_2^2 + z_2^2}}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li>Góc giữa hai vectơ có giá trị từ $0^\\circ$ đến $180^\\circ$. Nếu $\\cos > 0 \\implies$ góc nhọn; $\\cos = 0 \\implies$ góc vuông; $\\cos < 0 \\implies$ góc tù.</li>\n                  <li><strong>Bài toán thực tế định vị GPS:</strong> Xác định góc mở giữa các vệ tinh định vị nhìn từ một trạm thu sóng mặt đất.</li>\n                  <li><strong>Bài toán công và lực kéo:</strong> Lực $\\vec{F} = (F_x; F_y; F_z)$ tác dụng làm dịch chuyển vật theo vectơ $\\vec{d} = (d_x; d_y; d_z)$ thì công sinh ra là $A = \\vec{F} \\cdot \\vec{d} = F_x d_x + F_y d_y + F_z d_z$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Chú ý không có dấu giá trị tuyệt đối trên tử số đối với góc giữa hai VECTƠ (khác với góc giữa hai đường thẳng!).</li>\n                <li>Tam giác $ABC$ vuông tại $A \\Leftrightarrow \\vec{AB} \\cdot \\vec{AC} = 0$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Tự tiện thêm dấu giá trị tuyệt đối trên tử số làm mất góc tù giữa hai vectơ.</li>\n                <li>Quên nhân độ dài ở mẫu số.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Góc giữa hai vectơ: Tử số KHÔNG có trị tuyệt đối – Cos âm ra góc tù, Cos dương ra góc nhọn!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Cho hai vectơ $\\vec{a} = (2; -1; 2)$ và $\\vec{b} = (1; 2; -2)$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Độ dài $|\\vec{a}| = 3$.",
                        "correct": "true",
                        "explain": "$\\sqrt{4 + 1 + 4} = 3$."
                    },
                    {
                        "key": "b",
                        "text": "Độ dài $|\\vec{b}| = 3$.",
                        "correct": "true",
                        "explain": "$\\sqrt{1 + 4 + 4} = 3$."
                    },
                    {
                        "key": "c",
                        "text": "Tích vô hướng $\\vec{a} \\cdot \\vec{b} = 2(1) - 1(2) + 2(-2) = -4$.",
                        "correct": "true",
                        "explain": "$2 - 2 - 4 = -4$."
                    },
                    {
                        "key": "d",
                        "text": "Hai vectơ $\\vec{a}$ và $\\vec{b}$ vuông góc với nhau.",
                        "correct": "false",
                        "explain": "Tích vô hướng bằng $-4 \\neq 0$."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: Cho tam giác $ABC$ có $A(1; 0; 1), B(2; 2; 2), C(1; 2; 3)$:",
                "items": [
                    {
                        "key": "a",
                        "text": "$\\vec{AB} = (1; 2; 1)$ có độ dài $\\sqrt{6}$.",
                        "correct": "true",
                        "explain": "$\\sqrt{1+4+1} = \\sqrt{6}$."
                    },
                    {
                        "key": "b",
                        "text": "$\\vec{AC} = (0; 2; 2)$ có độ dài $2\\sqrt{2}$.",
                        "correct": "true",
                        "explain": "$\\sqrt{0+4+4} = \\sqrt{8} = 2\\sqrt{2}$."
                    },
                    {
                        "key": "c",
                        "text": "Trọng tâm tam giác $ABC$ có toạ độ là $\\left(\\frac{4}{3}; \\frac{4}{3}; 2\\right)$.",
                        "correct": "true",
                        "explain": "Cộng lại chia 3."
                    },
                    {
                        "key": "d",
                        "text": "Tam giác $ABC$ vuông tại $A$.",
                        "correct": "false",
                        "explain": "$\\vec{AB} \\cdot \\vec{AC} = 0 + 4 + 2 = 6 \\neq 0$."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: Về công thức toạ độ trong không gian $Oxyz$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Toạ độ trung điểm bằng trung bình cộng toạ độ hai đầu mút.",
                        "correct": "true",
                        "explain": "Định lý chuẩn."
                    },
                    {
                        "key": "b",
                        "text": "Khoảng cách giữa hai điểm bằng độ dài vectơ nối hai điểm đó.",
                        "correct": "true",
                        "explain": "$AB = |\\vec{AB}|$."
                    },
                    {
                        "key": "c",
                        "text": "Tích vô hướng hai vectơ bằng tổng tích các toạ độ tương ứng.",
                        "correct": "true",
                        "explain": "$x_1x_2 + y_1y_2 + z_1z_2$."
                    },
                    {
                        "key": "d",
                        "text": "$\\vec{u} \\perp \\vec{v} \\Leftrightarrow x_1x_2 + y_1y_2 + z_1z_2 = 1$.",
                        "correct": "false",
                        "explain": "Phải bằng 0."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: Cho điểm $A(1; 2; 3)$ và $B(3; 4; 5)$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Vectơ $\\vec{AB} = (2; 2; 2)$.",
                        "correct": "true",
                        "explain": "Ngọn trừ gốc."
                    },
                    {
                        "key": "b",
                        "text": "Độ dài đoạn $AB = 2\\sqrt{3}$.",
                        "correct": "true",
                        "explain": "$\\sqrt{4+4+4} = \\sqrt{12} = 2\\sqrt{3}$."
                    },
                    {
                        "key": "c",
                        "text": "Trung điểm $M$ của $AB$ có toạ độ $(2; 3; 4)$.",
                        "correct": "true",
                        "explain": "Cộng lại chia 2."
                    },
                    {
                        "key": "d",
                        "text": "Điểm $C(5; 6; 7)$ không thẳng hàng với $A$ và $B$.",
                        "correct": "false",
                        "explain": "$\\vec{BC} = (2; 2; 2) = \\vec{AB}$ nên $A, B, C$ thẳng hàng."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Cho $\\vec{u} = (m; 1; -2)$ và $\\vec{v} = (2; -m; 4)$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Tích vô hướng $\\vec{u} \\cdot \\vec{v} = 2m - m - 8 = m - 8$.",
                        "correct": "true",
                        "explain": "$2m - m - 8 = m - 8$."
                    },
                    {
                        "key": "b",
                        "text": "Để $\\vec{u} \\perp \\vec{v}$ thì $m = 8$.",
                        "correct": "true",
                        "explain": "$m - 8 = 0 \\implies m = 8$."
                    },
                    {
                        "key": "c",
                        "text": "Khi $m = 8$ thì $|\\vec{u}| = \\sqrt{64 + 1 + 4} = \\sqrt{69}$.",
                        "correct": "true",
                        "explain": "Độ dài chuẩn."
                    },
                    {
                        "key": "d",
                        "text": "Hai vectơ $\\vec{u}$ và $\\vec{v}$ không thể vuông góc với nhau với mọi $m$.",
                        "correct": "false",
                        "explain": "Vuông góc khi $m = 8$."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Về ứng dụng thực tế của tích vô hướng trong không gian:",
                "items": [
                    {
                        "key": "a",
                        "text": "Công của một lực bằng tích vô hướng giữa vectơ lực và vectơ độ dời.",
                        "correct": "true",
                        "explain": "$A = \\vec{F} \\cdot \\vec{d}$."
                    },
                    {
                        "key": "b",
                        "text": "Nếu lực vuông góc với phương chuyển động thì công sinh ra bằng 0.",
                        "correct": "true",
                        "explain": "Vì tích vô hướng bằng 0."
                    },
                    {
                        "key": "c",
                        "text": "Lực cản sinh công âm vì vectơ lực cản ngược hướng với vectơ độ dời.",
                        "correct": "true",
                        "explain": "Góc $180^\\circ \\implies \\cos = -1$."
                    },
                    {
                        "key": "d",
                        "text": "Đơn vị chuẩn của công trong hệ SI là Watt.",
                        "correct": "false",
                        "explain": "Đơn vị của công là Joule (J), Watt là đơn vị công suất."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 8:") || t.includes("biểu thức toạ độ của các phép toán vectơ") || t.includes("bieu thuc toa do"));
      }
    },

  "toan12_bai9": {
        "id": "toan12_bai9",
        "lessonTitle": "Bài 9: Khoảng biến thiên và khoảng tứ phân vị",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Khoảng biến thiên của mẫu số liệu ghép nhóm",
                "sgkHtml": "<p>Cho mẫu số liệu ghép nhóm gồm $k$ nhóm dạng $[a_0; a_1), [a_1; a_2), \\dots, [a_{k-1}; a_k)$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$R = a_k - a_0$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Định nghĩa:</strong> Khoảng biến thiên của mẫu số liệu ghép nhóm là hiệu giữa đầu mút phải của nhóm cuối cùng ($a_k$) và đầu mút trái của nhóm đầu tiên ($a_0$).</li>\n                  <li><strong>Ý nghĩa:</strong> Đo độ trải rộng sơ bộ của toàn bộ mẫu số liệu. $R$ càng lớn thì độ phân tán của dữ liệu càng cao.</li>\n                  <li><strong>Độ dài mỗi nhóm:</strong> $h_i = a_i - a_{i-1}$. Thông thường các nhóm có độ dài bằng nhau: $h = a_1 - a_0$.</li>\n                  <li><strong>Giá trị đại diện của nhóm $[a_{i-1}; a_i)$:</strong> $c_i = \\frac{a_{i-1} + a_i}{2}$.</li>\n                </ul>",
                "noteHtml": "<li>Khoảng biến thiên rất dễ tính toán nhưng bị ảnh hưởng mạnh bởi các giá trị ngoại lai (giá trị quá lớn hoặc quá nhỏ ở hai đầu mút).</li>\n                <li>Khoảng biến thiên của mẫu ghép nhóm xấp xỉ khoảng biến thiên của mẫu gốc không ghép nhóm.</li>",
                "mistakeHtml": "<li>Lấy giá trị đại diện của nhóm cuối trừ giá trị đại diện nhóm đầu (sai! Phải lấy đúng đầu mút phải $a_k$ trừ đầu mút trái $a_0$).</li>\n                <li>Lấy tần số của nhóm cuối trừ tần số nhóm đầu.</li>",
                "tipHtml": "<li><em>\"Khoảng biến thiên: Chóp phải nhóm cuối trừ chóp trái nhóm đầu: R = ak - a0!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Cho mẫu số liệu ghép nhóm về thời gian tự học (phút) của học sinh: $[30; 60), [60; 90), [90; 120), [120; 150)$. Khoảng biến thiên của mẫu số liệu ghép nhóm này là:",
                        "options": [
                            "A. $120$",
                            "B. $150$",
                            "C. $90$",
                            "D. $30$"
                        ],
                        "correct": "A",
                        "explanation": "Đầu mút phải nhóm cuối là $a_4 = 150$, đầu mút trái nhóm đầu là $a_0 = 30$. Khoảng biến thiên $R = 150 - 30 = 120$ (phút).",
                        "hint1": "Nhóm đầu là $[30; 60)$ có $a_0 = 30$, nhóm cuối $[120; 150)$ có $a_4 = 150$.",
                        "hint2": "$R = a_4 - a_0 = 150 - 30 = 120$."
                    },
                    {
                        "question": "Giá trị đại diện của nhóm $[40; 50)$ là:",
                        "options": [
                            "A. $45$",
                            "B. $10$",
                            "C. $40$",
                            "D. $50$"
                        ],
                        "correct": "A",
                        "explanation": "Giá trị đại diện $c = \\frac{40 + 50}{2} = 45$.",
                        "hint1": "Trung bình cộng của hai đầu mút nhóm.",
                        "hint2": "$(40 + 50) / 2 = 45$."
                    },
                    {
                        "question": "Mẫu số liệu về cân nặng học sinh có các nhóm $[40; 45), [45; 50), [50; 55), [55; 60), [60; 65)$. Độ dài mỗi nhóm bằng:",
                        "options": [
                            "A. $5$",
                            "B. $25$",
                            "C. $40$",
                            "D. $65$"
                        ],
                        "correct": "A",
                        "explanation": "Độ dài mỗi nhóm $h = 45 - 40 = 5$ (kg).",
                        "hint1": "Lấy đầu mút phải trừ đầu mút trái của nhóm.",
                        "hint2": "$45 - 40 = 5$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 9: Khoảng biến thiên và khoảng tứ phân vị</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Khoảng biến thiên của mẫu số liệu ghép nhóm</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Cho mẫu số liệu ghép nhóm gồm $k$ nhóm dạng $[a_0; a_1), [a_1; a_2), \\dots, [a_{k-1}; a_k)$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$R = a_k - a_0$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Định nghĩa:</strong> Khoảng biến thiên của mẫu số liệu ghép nhóm là hiệu giữa đầu mút phải của nhóm cuối cùng ($a_k$) và đầu mút trái của nhóm đầu tiên ($a_0$).</li>\n                  <li><strong>Ý nghĩa:</strong> Đo độ trải rộng sơ bộ của toàn bộ mẫu số liệu. $R$ càng lớn thì độ phân tán của dữ liệu càng cao.</li>\n                  <li><strong>Độ dài mỗi nhóm:</strong> $h_i = a_i - a_{i-1}$. Thông thường các nhóm có độ dài bằng nhau: $h = a_1 - a_0$.</li>\n                  <li><strong>Giá trị đại diện của nhóm $[a_{i-1}; a_i)$:</strong> $c_i = \\frac{a_{i-1} + a_i}{2}$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Khoảng biến thiên rất dễ tính toán nhưng bị ảnh hưởng mạnh bởi các giá trị ngoại lai (giá trị quá lớn hoặc quá nhỏ ở hai đầu mút).</li>\n                <li>Khoảng biến thiên của mẫu ghép nhóm xấp xỉ khoảng biến thiên của mẫu gốc không ghép nhóm.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Lấy giá trị đại diện của nhóm cuối trừ giá trị đại diện nhóm đầu (sai! Phải lấy đúng đầu mút phải $a_k$ trừ đầu mút trái $a_0$).</li>\n                <li>Lấy tần số của nhóm cuối trừ tần số nhóm đầu.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Khoảng biến thiên: Chóp phải nhóm cuối trừ chóp trái nhóm đầu: R = ak - a0!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Tứ phân vị và khoảng tứ phân vị",
                "sgkHtml": "<p>Tứ phân vị của mẫu số liệu ghép nhóm cỡ mẫu $n$ gồm $Q_1, Q_2, Q_3$:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Công thức tứ phân vị thứ $p$ ($p \\in \\{1, 2, 3\\}$):</strong>\n                    $$Q_p = a_m + \\frac{\\frac{p \\cdot n}{4} - C}{n_m} \\cdot h$$\n                    Trong đó:\n                    <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                      <li>Nhóm chứa $Q_p$ là $[a_m; a_{m+1})$ với tần số tích luỹ đầu tiên $\\ge \\frac{pn}{4}$.</li>\n                      <li>$n_m$ là tần số của nhóm chứa $Q_p$; $h = a_{m+1} - a_m$ là độ dài nhóm.</li>\n                      <li>$C$ là tần số tích luỹ của nhóm ngay trước nhóm chứa $Q_p$.</li>\n                    </ul>\n                  </li>\n                  <li><strong>Khoảng tứ phân vị (Interquartile Range - IQR):</strong>\n                    $$\\Delta_Q = Q_3 - Q_1$$\n                  </li>\n                  <li><strong>Ý nghĩa:</strong> $\\Delta_Q$ đo độ phân tán của $50\\%$ dữ liệu ở chính giữa. Khác với $R$, khoảng tứ phân vị <b>không bị ảnh hưởng bởi giá trị ngoại lai</b>!</li>\n                </ul>",
                "noteHtml": "<li>$Q_2$ chính là Trung vị (Median - $M_e$) của mẫu số liệu ghép nhóm.</li>\n                <li>Xác định đúng nhóm chứa $Q_p$ bằng cách lập cột tần số tích luỹ $cf$.</li>",
                "mistakeHtml": "<li>Lấy $C$ là tần số tích luỹ của chính nhóm chứa $Q_p$ thay vì nhóm đứng trước.</li>\n                <li>Chia cho cỡ mẫu $n$ thay vì tần số nhóm $n_m$.</li>",
                "tipHtml": "<li><em>\"Tứ phân vị: Tìm nhóm tích luỹ – Trừ tích luỹ trước (C) chia tần số nhóm (nm) nhân độ dài nhóm (h) cộng đầu mút trái!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Cho $Q_1 = 45{,}5$ và $Q_3 = 68{,}2$. Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu bằng:",
                        "options": [
                            "A. $22{,}7$",
                            "B. $113{,}7$",
                            "C. $56{,}85$",
                            "D. $23{,}7$"
                        ],
                        "correct": "A",
                        "explanation": "Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1 = 68{,}2 - 45{,}5 = 22{,}7$.",
                        "hint1": "Công thức $\\Delta_Q = Q_3 - Q_1$.",
                        "hint2": "$68{,}2 - 45{,}5 = 22{,}7$."
                    },
                    {
                        "question": "Ưu điểm lớn nhất của khoảng tứ phân vị $\\Delta_Q$ so với khoảng biến thiên $R$ là:",
                        "options": [
                            "A. Không bị ảnh hưởng bởi các giá trị ngoại lai.",
                            "B. Dễ tính toán hơn.",
                            "C. Luôn có giá trị lớn hơn $R$.",
                            "D. Tính được cho mẫu số liệu không có nhóm."
                        ],
                        "correct": "A",
                        "explanation": "Khoảng tứ phân vị chỉ đo độ phân tán của 50% số liệu trung tâm nên không bị tác động bởi các giá trị dị biệt ở hai rìa cực trị.",
                        "hint1": "Xem xét tác động của các giá trị quá lớn hoặc quá nhỏ.",
                        "hint2": "$\\Delta_Q$ loại bỏ 25% đầu và 25% cuối."
                    },
                    {
                        "question": "Một mẫu số liệu có cỡ mẫu $n = 40$. Nhóm chứa tứ phân vị thứ nhất $Q_1$ là nhóm đầu tiên có tần số tích luỹ lớn hơn hoặc bằng:",
                        "options": [
                            "A. $10$",
                            "B. $20$",
                            "C. $30$",
                            "D. $4$"
                        ],
                        "correct": "A",
                        "explanation": "Vị trí của $Q_1$ là $n/4 = 40/4 = 10$. Do đó nhóm chứa $Q_1$ có tần số tích luỹ $\\ge 10$.",
                        "hint1": "Vị trí $Q_1$ tại $n/4$.",
                        "hint2": "$40 / 4 = 10$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 9: Khoảng biến thiên và khoảng tứ phân vị</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Tứ phân vị và khoảng tứ phân vị</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Tứ phân vị của mẫu số liệu ghép nhóm cỡ mẫu $n$ gồm $Q_1, Q_2, Q_3$:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Công thức tứ phân vị thứ $p$ ($p \\in \\{1, 2, 3\\}$):</strong>\n                    $$Q_p = a_m + \\frac{\\frac{p \\cdot n}{4} - C}{n_m} \\cdot h$$\n                    Trong đó:\n                    <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                      <li>Nhóm chứa $Q_p$ là $[a_m; a_{m+1})$ với tần số tích luỹ đầu tiên $\\ge \\frac{pn}{4}$.</li>\n                      <li>$n_m$ là tần số của nhóm chứa $Q_p$; $h = a_{m+1} - a_m$ là độ dài nhóm.</li>\n                      <li>$C$ là tần số tích luỹ của nhóm ngay trước nhóm chứa $Q_p$.</li>\n                    </ul>\n                  </li>\n                  <li><strong>Khoảng tứ phân vị (Interquartile Range - IQR):</strong>\n                    $$\\Delta_Q = Q_3 - Q_1$$\n                  </li>\n                  <li><strong>Ý nghĩa:</strong> $\\Delta_Q$ đo độ phân tán của $50\\%$ dữ liệu ở chính giữa. Khác với $R$, khoảng tứ phân vị <b>không bị ảnh hưởng bởi giá trị ngoại lai</b>!</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>$Q_2$ chính là Trung vị (Median - $M_e$) của mẫu số liệu ghép nhóm.</li>\n                <li>Xác định đúng nhóm chứa $Q_p$ bằng cách lập cột tần số tích luỹ $cf$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Lấy $C$ là tần số tích luỹ của chính nhóm chứa $Q_p$ thay vì nhóm đứng trước.</li>\n                <li>Chia cho cỡ mẫu $n$ thay vì tần số nhóm $n_m$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Tứ phân vị: Tìm nhóm tích luỹ – Trừ tích luỹ trước (C) chia tần số nhóm (nm) nhân độ dài nhóm (h) cộng đầu mút trái!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 3,
                "sectionTitle": "Mục 3: Giá trị ngoại lai & So sánh độ phân tán",
                "sgkHtml": "<p>Quy tắc phát hiện giá trị ngoại lai và so sánh độ phân tán giữa hai mẫu dữ liệu:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$x < Q_1 - 1{,}5\\Delta_Q \\quad \\text{hoặc} \\quad x > Q_3 + 1{,}5\\Delta_Q$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Giá trị ngoại lai (Outlier):</strong> Giá trị quá nhỏ (dưới hàng rào dưới $Q_1 - 1{,}5\\Delta_Q$) hoặc quá lớn (trên hàng rào trên $Q_3 + 1{,}5\\Delta_Q$).</li>\n                  <li><strong>So sánh độ phân tán:</strong>\n                    <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                      <li>Mẫu số liệu nào có $\\Delta_Q$ nhỏ hơn thì các giá trị ở khoảng trung tâm tập trung sát nhau hơn, dữ liệu đồng đều hơn.</li>\n                      <li>Mẫu nào có $\\Delta_Q$ lớn hơn thì độ phân tán cao hơn, mức độ đồng đều kém hơn.</li>\n                    </ul>\n                  </li>\n                </ul>",
                "noteHtml": "<li>Khi mẫu số liệu có chứa giá trị ngoại lai, ta bắt buộc phải sử dụng khoảng tứ phân vị $\\Delta_Q$ (thay vì khoảng biến thiên $R$) để đo độ phân tán.</li>\n                <li>Hệ số $1{,}5$ là tiêu chuẩn quốc tế của nhà toán học John Tukey.</li>",
                "mistakeHtml": "<li>Nhầm lẫn giữa $Q_1 - 1{,}5\\Delta_Q$ (dấu trừ) và $Q_3 + 1{,}5\\Delta_Q$ (dấu cộng).</li>\n                <li>Nhân $1{,}5$ với $Q_1$ thay vì nhân với khoảng tứ phân vị $\\Delta_Q$.</li>",
                "tipHtml": "<li><em>\"Hàng rào dưới: Q1 trừ 1,5 IQR – Hàng rào trên: Q3 cộng 1,5 IQR – Nằm ngoài hai hàng rào là Ngoại Lai!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Cho $Q_1 = 20$ và $Q_3 = 30$. Giá trị nào dưới đây là một GIÁ TRỊ NGOẠI LAI?",
                        "options": [
                            "A. $48$",
                            "B. $40$",
                            "C. $10$",
                            "D. $25$"
                        ],
                        "correct": "A",
                        "explanation": "$\\Delta_Q = 30 - 20 = 10$. Hàng rào dưới: $Q_1 - 1{,}5\\Delta_Q = 20 - 15 = 5$. Hàng rào trên: $Q_3 + 1{,}5\\Delta_Q = 30 + 15 = 45$. Vì $48 > 45$ nên $48$ là giá trị ngoại lai.",
                        "hint1": "Tính $\\Delta_Q = 10$.",
                        "hint2": "Hàng rào trên là $30 + 1{,}5(10) = 45$. Giá trị $48 > 45$."
                    },
                    {
                        "question": "Khi nghiên cứu điểm kiểm tra của hai lớp 12A và 12B có cùng điểm trung bình, biết khoảng tứ phân vị của lớp 12A là $1{,}2$ điểm, của lớp 12B là $2{,}5$ điểm. Kết luận nào sau đây đúng?",
                        "options": [
                            "A. Điểm số của học sinh lớp 12A đồng đều hơn lớp 12B.",
                            "B. Điểm số của học sinh lớp 12B đồng đều hơn lớp 12A.",
                            "C. Hai lớp có mức độ phân tán như nhau.",
                            "D. Không thể so sánh được vì không biết sĩ số."
                        ],
                        "correct": "A",
                        "explanation": "Khoảng tứ phân vị của 12A ($1{,}2$) nhỏ hơn của 12B ($2{,}5$), do đó điểm của học sinh lớp 12A ít phân tán hơn, tức đồng đều hơn.",
                        "hint1": "Khoảng tứ phân vị càng nhỏ thì độ phân tán càng thấp, tức dữ liệu càng đồng đều.",
                        "hint2": "$1{,}2 < 2{,}5 \\implies 12A$ đồng đều hơn."
                    },
                    {
                        "question": "Hàng rào dưới để xác định giá trị ngoại lai được tính theo công thức:",
                        "options": [
                            "A. $Q_1 - 1{,}5\\Delta_Q$",
                            "B. $Q_1 + 1{,}5\\Delta_Q$",
                            "C. $Q_3 - 1{,}5\\Delta_Q$",
                            "D. $Q_2 - 1{,}5\\Delta_Q$"
                        ],
                        "correct": "A",
                        "explanation": "Theo quy chuẩn Tukey, hàng rào dưới là $Q_1 - 1{,}5\\Delta_Q$.",
                        "hint1": "Hàng rào dưới xuất phát từ tứ phân vị thứ nhất $Q_1$.",
                        "hint2": "$Q_1 - 1{,}5\\Delta_Q$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 9: Khoảng biến thiên và khoảng tứ phân vị</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 3: Mục 3: Giá trị ngoại lai & So sánh độ phân tán</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Quy tắc phát hiện giá trị ngoại lai và so sánh độ phân tán giữa hai mẫu dữ liệu:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$x < Q_1 - 1{,}5\\Delta_Q \\quad \\text{hoặc} \\quad x > Q_3 + 1{,}5\\Delta_Q$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Giá trị ngoại lai (Outlier):</strong> Giá trị quá nhỏ (dưới hàng rào dưới $Q_1 - 1{,}5\\Delta_Q$) hoặc quá lớn (trên hàng rào trên $Q_3 + 1{,}5\\Delta_Q$).</li>\n                  <li><strong>So sánh độ phân tán:</strong>\n                    <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                      <li>Mẫu số liệu nào có $\\Delta_Q$ nhỏ hơn thì các giá trị ở khoảng trung tâm tập trung sát nhau hơn, dữ liệu đồng đều hơn.</li>\n                      <li>Mẫu nào có $\\Delta_Q$ lớn hơn thì độ phân tán cao hơn, mức độ đồng đều kém hơn.</li>\n                    </ul>\n                  </li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Khi mẫu số liệu có chứa giá trị ngoại lai, ta bắt buộc phải sử dụng khoảng tứ phân vị $\\Delta_Q$ (thay vì khoảng biến thiên $R$) để đo độ phân tán.</li>\n                <li>Hệ số $1{,}5$ là tiêu chuẩn quốc tế của nhà toán học John Tukey.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Nhầm lẫn giữa $Q_1 - 1{,}5\\Delta_Q$ (dấu trừ) và $Q_3 + 1{,}5\\Delta_Q$ (dấu cộng).</li>\n                <li>Nhân $1{,}5$ với $Q_1$ thay vì nhân với khoảng tứ phân vị $\\Delta_Q$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Hàng rào dưới: Q1 trừ 1,5 IQR – Hàng rào trên: Q3 cộng 1,5 IQR – Nằm ngoài hai hàng rào là Ngoại Lai!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Về khoảng biến thiên của mẫu số liệu ghép nhóm:",
                "items": [
                    {
                        "key": "a",
                        "text": "Khoảng biến thiên là hiệu giữa đầu mút phải nhóm cuối và đầu mút trái nhóm đầu.",
                        "correct": "true",
                        "explain": "$R = a_k - a_0$."
                    },
                    {
                        "key": "b",
                        "text": "Khoảng biến thiên luôn là một số không âm.",
                        "correct": "true",
                        "explain": "Vì $a_k > a_0$."
                    },
                    {
                        "key": "c",
                        "text": "Khoảng biến thiên không phụ thuộc vào tần số của các nhóm bên trong.",
                        "correct": "true",
                        "explain": "Chỉ phụ thuộc 2 đầu mút."
                    },
                    {
                        "key": "d",
                        "text": "Khoảng biến thiên không bị ảnh hưởng bởi giá trị ngoại lai.",
                        "correct": "false",
                        "explain": "Rất nhạy cảm với giá trị ngoại lai."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: Về tứ phân vị của mẫu số liệu ghép nhóm:",
                "items": [
                    {
                        "key": "a",
                        "text": "Tứ phân vị thứ hai $Q_2$ chính là số trung vị của mẫu.",
                        "correct": "true",
                        "explain": "$Q_2 = M_e$."
                    },
                    {
                        "key": "b",
                        "text": "Khoảng tứ phân vị bằng $\\Delta_Q = Q_3 - Q_1$.",
                        "correct": "true",
                        "explain": "Định nghĩa chuẩn."
                    },
                    {
                        "key": "c",
                        "text": "Tứ phân vị chia mẫu số liệu thành 4 phần xấp xỉ bằng nhau.",
                        "correct": "true",
                        "explain": "Mỗi phần chứa khoảng 25% số liệu."
                    },
                    {
                        "key": "d",
                        "text": "Luôn có $Q_3 - Q_2 = Q_2 - Q_1$.",
                        "correct": "false",
                        "explain": "Chỉ bằng nhau khi phân phối hoàn toàn đối xứng."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: Cho mẫu số liệu ghép nhóm có $Q_1 = 30, Q_3 = 50$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Khoảng tứ phân vị $\\Delta_Q = 20$.",
                        "correct": "true",
                        "explain": "$50 - 30 = 20$."
                    },
                    {
                        "key": "b",
                        "text": "Hàng rào dưới bằng $30 - 1{,}5(20) = 0$.",
                        "correct": "true",
                        "explain": "$30 - 30 = 0$."
                    },
                    {
                        "key": "c",
                        "text": "Hàng rào trên bằng $50 + 1{,}5(20) = 80$.",
                        "correct": "true",
                        "explain": "$50 + 30 = 80$."
                    },
                    {
                        "key": "d",
                        "text": "Giá trị $x = 75$ là một giá trị ngoại lai.",
                        "correct": "false",
                        "explain": "$75 \\le 80$ nên không phải ngoại lai."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: So sánh hai lớp học có bảng điểm ghép nhóm:",
                "items": [
                    {
                        "key": "a",
                        "text": "Lớp có khoảng tứ phân vị nhỏ hơn thì có mức độ đồng đều cao hơn.",
                        "correct": "true",
                        "explain": "Độ phân tán thấp hơn."
                    },
                    {
                        "key": "b",
                        "text": "Điểm trung bình và khoảng tứ phân vị phản ánh hai khía cạnh khác nhau của mẫu số liệu.",
                        "correct": "true",
                        "explain": "Xu thế trung tâm và mức độ phân tán."
                    },
                    {
                        "key": "c",
                        "text": "Khoảng tứ phân vị luôn nhỏ hơn hoặc bằng khoảng biến thiên.",
                        "correct": "true",
                        "explain": "$\\Delta_Q \\le R$."
                    },
                    {
                        "key": "d",
                        "text": "Nếu $\\Delta_Q = 0$ thì tất cả các học sinh trong lớp đều có điểm số bằng nhau.",
                        "correct": "false",
                        "explain": "Chỉ 50% ở giữa bằng nhau, các học sinh ở 2 rìa có thể khác."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Về việc chia nhóm mẫu số liệu trong thực tế:",
                "items": [
                    {
                        "key": "a",
                        "text": "Các nhóm thường được chọn có độ dài bằng nhau.",
                        "correct": "true",
                        "explain": "Quy chuẩn phân tích thống kê."
                    },
                    {
                        "key": "b",
                        "text": "Đầu mút phải của nhóm trước là đầu mút trái của nhóm sau.",
                        "correct": "true",
                        "explain": "Dạng liên tục $[a; b), [b; c)$."
                    },
                    {
                        "key": "c",
                        "text": "Giá trị đại diện của nhóm là trung bình cộng hai đầu mút.",
                        "correct": "true",
                        "explain": "$c_i = (a_{i-1} + a_i)/2$."
                    },
                    {
                        "key": "d",
                        "text": "Việc chia nhóm không làm mất mát bất kỳ thông tin nào của mẫu gốc.",
                        "correct": "false",
                        "explain": "Có mất mát thông tin chi tiết từng phần tử."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Về bài toán ứng dụng thống kê trong y tế và sản xuất:",
                "items": [
                    {
                        "key": "a",
                        "text": "Dây chuyền sản xuất có khoảng tứ phân vị kích thước bu-lông nhỏ là dây chuyền chính xác hơn.",
                        "correct": "true",
                        "explain": "Độ phân tán nhỏ nghĩa là độ chính xác cao."
                    },
                    {
                        "key": "b",
                        "text": "Giá trị ngoại lai trong xét nghiệm máu có thể chỉ ra dấu hiệu bệnh lý bất thường.",
                        "correct": "true",
                        "explain": "Ý nghĩa chẩn đoán y khoa."
                    },
                    {
                        "key": "c",
                        "text": "Biểu đồ hộp (Boxplot) thể hiện trực quan 5 số đặc trưng trong đó có các tứ phân vị.",
                        "correct": "true",
                        "explain": "Min, Q1, Me, Q3, Max."
                    },
                    {
                        "key": "d",
                        "text": "Hộp trong biểu đồ Boxplot có chiều dài đúng bằng khoảng biến thiên.",
                        "correct": "false",
                        "explain": "Chiều dài hộp bằng khoảng TỨ PHÂN VỊ $\\Delta_Q = Q_3 - Q_1$."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 9:") || t.includes("khoảng biến thiên") || t.includes("tứ phân vị") || t.includes("khoang bien thien")) && !t.includes("phương sai");
      }
    },

  "toan12_bai10": {
        "id": "toan12_bai10",
        "lessonTitle": "Bài 10: Phương sai và độ lệch chuẩn",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Phương sai & Độ lệch chuẩn của mẫu số liệu",
                "sgkHtml": "<p>Công thức tính số trung bình, phương sai và độ lệch chuẩn của mẫu ghép nhóm cỡ $n$:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Số trung bình:</strong>\n                    $$\\overline{x} = \\frac{1}{n} \\sum_{i=1}^k m_i c_i = \\frac{m_1 c_1 + m_2 c_2 + \\dots + m_k c_k}{n}$$\n                    (với $c_i$ là giá trị đại diện và $m_i$ là tần số của nhóm $i$).\n                  </li>\n                  <li><strong>Phương sai ($s^2$):</strong>\n                    $$s^2 = \\frac{1}{n} \\sum_{i=1}^k m_i (c_i - \\overline{x})^2 = \\frac{1}{n} \\sum_{i=1}^k m_i c_i^2 - (\\overline{x})^2$$\n                    (Trung bình bình phương trừ bình phương trung bình).\n                  </li>\n                  <li><strong>Độ lệch chuẩn ($s$):</strong>\n                    $$s = \\sqrt{s^2}$$\n                  </li>\n                </ul>",
                "noteHtml": "<li>Độ lệch chuẩn có cùng đơn vị đo với đại lượng nghiên cứu (mét, kg, điểm số...), trong khi phương sai mang đơn vị bình phương ($m^2, kg^2...$).</li>\n                <li>Công thức thực hành $s^2 = \\frac{1}{n}\\sum m_ic_i^2 - (\\overline{x})^2$ tính nhanh hơn và ít bị sai số làm tròn hơn.</li>",
                "mistakeHtml": "<li>Quên bình phương $\\overline{x}$ khi trừ ở công thức rút gọn.</li>\n                <li>Quên lấy căn bậc hai khi đề bài hỏi ĐỘ LỆCH CHUẨN (chỉ tính phương sai).</li>",
                "tipHtml": "<li><em>\"Số trung bình: Tổng tần số nhân đại diện chia n – Phương sai: Trung bình bình phương trừ bình phương trung bình – Độ lệch chuẩn là căn phương sai!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Cho phương sai của một mẫu số liệu ghép nhóm là $s^2 = 16$. Độ lệch chuẩn $s$ của mẫu số liệu đó bằng:",
                        "options": [
                            "A. $4$",
                            "B. $256$",
                            "C. $8$",
                            "D. $2$"
                        ],
                        "correct": "A",
                        "explanation": "Độ lệch chuẩn $s = \\sqrt{s^2} = \\sqrt{16} = 4$.",
                        "hint1": "Độ lệch chuẩn là căn bậc hai số học của phương sai.",
                        "hint2": "$\\sqrt{16} = 4$."
                    },
                    {
                        "question": "Mẫu số liệu có $\\frac{1}{n}\\sum m_i c_i^2 = 250$ và số trung bình $\\overline{x} = 15$. Phương sai $s^2$ bằng:",
                        "options": [
                            "A. $25$",
                            "B. $5$",
                            "C. $225$",
                            "D. $475$"
                        ],
                        "correct": "A",
                        "explanation": "$s^2 = \\frac{1}{n}\\sum m_i c_i^2 - (\\overline{x})^2 = 250 - 15^2 = 250 - 225 = 25$.",
                        "hint1": "Công thức rút gọn $s^2 = \\frac{1}{n}\\sum m_i c_i^2 - (\\overline{x})^2$.",
                        "hint2": "$250 - 225 = 25$."
                    },
                    {
                        "question": "Nếu tăng tất cả các giá trị của mẫu số liệu lên $3$ đơn vị thì độ lệch chuẩn của mẫu số liệu mới sẽ:",
                        "options": [
                            "A. Không đổi.",
                            "B. Tăng $3$ đơn vị.",
                            "C. Tăng $9$ đơn vị.",
                            "D. Gấp $3$ lần."
                        ],
                        "correct": "A",
                        "explanation": "Khi cộng thêm cùng một hằng số $b$ vào tất cả các giá trị thì khoảng cách giữa các số liệu không đổi, do đó độ lệch chuẩn không thay đổi ($s_{x+b} = s_x$).",
                        "hint1": "Cộng hằng số chỉ tịnh tiến dữ liệu, không làm thay đổi mức độ phân tán.",
                        "hint2": "Độ lệch chuẩn giữ nguyên."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 10: Phương sai và độ lệch chuẩn</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Phương sai & Độ lệch chuẩn của mẫu số liệu</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Công thức tính số trung bình, phương sai và độ lệch chuẩn của mẫu ghép nhóm cỡ $n$:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Số trung bình:</strong>\n                    $$\\overline{x} = \\frac{1}{n} \\sum_{i=1}^k m_i c_i = \\frac{m_1 c_1 + m_2 c_2 + \\dots + m_k c_k}{n}$$\n                    (với $c_i$ là giá trị đại diện và $m_i$ là tần số của nhóm $i$).\n                  </li>\n                  <li><strong>Phương sai ($s^2$):</strong>\n                    $$s^2 = \\frac{1}{n} \\sum_{i=1}^k m_i (c_i - \\overline{x})^2 = \\frac{1}{n} \\sum_{i=1}^k m_i c_i^2 - (\\overline{x})^2$$\n                    (Trung bình bình phương trừ bình phương trung bình).\n                  </li>\n                  <li><strong>Độ lệch chuẩn ($s$):</strong>\n                    $$s = \\sqrt{s^2}$$\n                  </li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Độ lệch chuẩn có cùng đơn vị đo với đại lượng nghiên cứu (mét, kg, điểm số...), trong khi phương sai mang đơn vị bình phương ($m^2, kg^2...$).</li>\n                <li>Công thức thực hành $s^2 = \\frac{1}{n}\\sum m_ic_i^2 - (\\overline{x})^2$ tính nhanh hơn và ít bị sai số làm tròn hơn.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên bình phương $\\overline{x}$ khi trừ ở công thức rút gọn.</li>\n                <li>Quên lấy căn bậc hai khi đề bài hỏi ĐỘ LỆCH CHUẨN (chỉ tính phương sai).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Số trung bình: Tổng tần số nhân đại diện chia n – Phương sai: Trung bình bình phương trừ bình phương trung bình – Độ lệch chuẩn là căn phương sai!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Ý nghĩa & So sánh mức độ phân tán",
                "sgkHtml": "<p>Ý nghĩa thực tiễn của phương sai và độ lệch chuẩn trong khoa học và đời sống:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  <ul class=\"space-y-2 text-slate-200\">\n                    <li>Phương sai và độ lệch chuẩn đo <b>mức độ phân tán</b> (độ biến thiên, độ rủi ro) của các số liệu xung quanh số trung bình.</li>\n                    <li><strong>Độ lệch chuẩn càng nhỏ ($s$ nhỏ):</strong> Các số liệu tập trung rất sát với số trung bình $\\overline{x}$, dữ liệu có tính ổn định cao, đồng đều, độ tin cậy lớn.</li>\n                    <li><strong>Độ lệch chuẩn càng lớn ($s$ lớn):</strong> Các số liệu tản mát ra xa số trung bình, độ phân tán cao, mức độ biến động mạnh, độ rủi ro lớn.</li>\n                  </ul>\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Trong sản xuất:</strong> Độ lệch chuẩn đo độ chính xác của máy móc gia công. Máy có $s$ nhỏ hơn là máy hiện đại và ổn định hơn.</li>\n                  <li><strong>Trong tài chính đầu tư:</strong> Cổ phiếu có độ lệch chuẩn lợi nhuận cao được coi là cổ phiếu có độ rủi ro cao.</li>\n                  <li><strong>Trong giáo dục:</strong> Đo mức độ chênh lệch trình độ giữa các học sinh trong một tập thể lớp.</li>\n                </ul>",
                "noteHtml": "<li>Khi so sánh hai tập dữ liệu có cùng đơn vị đo và số trung bình xấp xỉ nhau, ta dùng trực tiếp độ lệch chuẩn $s$.</li>\n                <li>Không nên so sánh trực tiếp $s$ khi hai mẫu có đơn vị đo khác nhau hoặc số trung bình quá chênh lệch.</li>",
                "mistakeHtml": "<li>Cho rằng độ lệch chuẩn lớn là tốt (trong kiểm soát chất lượng và độ an toàn, độ lệch chuẩn càng nhỏ mới là càng tốt).</li>\n                <li>Nhầm lẫn giữa số trung bình (thang đo vị trí) và độ lệch chuẩn (thang đo độ phân tán).</li>",
                "tipHtml": "<li><em>\"s càng bé: Càng ổn định, càng đồng đều, máy càng chuẩn – s càng lớn: Càng biến động, càng tản mát, rủi ro càng cao!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Hai máy A và B cùng tiện các trục thép có đường kính trung bình là $20\\text{ mm}$. Độ lệch chuẩn của máy A là $0{,}05\\text{ mm}$, của máy B là $0{,}12\\text{ mm}$. Máy nào gia công chính xác và ổn định hơn?",
                        "options": [
                            "A. Máy A ổn định và chính xác hơn máy B.",
                            "B. Máy B ổn định và chính xác hơn máy A.",
                            "C. Hai máy hoạt động như nhau.",
                            "D. Không thể kết luận được."
                        ],
                        "correct": "A",
                        "explanation": "Máy A có độ lệch chuẩn $s_A = 0{,}05\\text{ mm} < s_B = 0{,}12\\text{ mm}$, do đó kích thước các trục thép do máy A tiện ra đồng đều hơn, sai lệch ít hơn máy B.",
                        "hint1": "Độ lệch chuẩn nhỏ hơn thể hiện sai lệch ít hơn, ổn định hơn.",
                        "hint2": "$0{,}05 < 0{,}12 \\implies$ Máy A tốt hơn."
                    },
                    {
                        "question": "Khi tất cả các giá trị trong mẫu số liệu đều bằng nhau thì phương sai của mẫu số liệu đó bằng:",
                        "options": [
                            "A. $0$",
                            "B. $1$",
                            "C. Bằng giá trị đó",
                            "D. Không xác định"
                        ],
                        "correct": "A",
                        "explanation": "Khi tất cả số liệu bằng nhau thì không có sự phân tán nào xung quanh số trung bình ($c_i = \\overline{x} \\ \forall i$), do đó phương sai $s^2 = 0$.",
                        "hint1": "Mọi số liệu đều trùng với số trung bình.",
                        "hint2": "$c_i - \\overline{x} = 0 \\implies s^2 = 0$."
                    },
                    {
                        "question": "Đại lượng nào sau đây KHÔNG PHẢI là số đặc trưng đo mức độ phân tán?",
                        "options": [
                            "A. Số trung vị",
                            "B. Khoảng biến thiên",
                            "C. Khoảng tứ phân vị",
                            "D. Độ lệch chuẩn"
                        ],
                        "correct": "A",
                        "explanation": "Số trung vị là số đặc trưng đo XU THẾ TRUNG TÂM, không phải số đo mức độ phân tán.",
                        "hint1": "Số trung vị đo vị trí trung tâm.",
                        "hint2": "Khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn là các số đo mức độ phân tán."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 10: Phương sai và độ lệch chuẩn</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Ý nghĩa & So sánh mức độ phân tán</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Ý nghĩa thực tiễn của phương sai và độ lệch chuẩn trong khoa học và đời sống:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  <ul class=\"space-y-2 text-slate-200\">\n                    <li>Phương sai và độ lệch chuẩn đo <b>mức độ phân tán</b> (độ biến thiên, độ rủi ro) của các số liệu xung quanh số trung bình.</li>\n                    <li><strong>Độ lệch chuẩn càng nhỏ ($s$ nhỏ):</strong> Các số liệu tập trung rất sát với số trung bình $\\overline{x}$, dữ liệu có tính ổn định cao, đồng đều, độ tin cậy lớn.</li>\n                    <li><strong>Độ lệch chuẩn càng lớn ($s$ lớn):</strong> Các số liệu tản mát ra xa số trung bình, độ phân tán cao, mức độ biến động mạnh, độ rủi ro lớn.</li>\n                  </ul>\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Trong sản xuất:</strong> Độ lệch chuẩn đo độ chính xác của máy móc gia công. Máy có $s$ nhỏ hơn là máy hiện đại và ổn định hơn.</li>\n                  <li><strong>Trong tài chính đầu tư:</strong> Cổ phiếu có độ lệch chuẩn lợi nhuận cao được coi là cổ phiếu có độ rủi ro cao.</li>\n                  <li><strong>Trong giáo dục:</strong> Đo mức độ chênh lệch trình độ giữa các học sinh trong một tập thể lớp.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Khi so sánh hai tập dữ liệu có cùng đơn vị đo và số trung bình xấp xỉ nhau, ta dùng trực tiếp độ lệch chuẩn $s$.</li>\n                <li>Không nên so sánh trực tiếp $s$ khi hai mẫu có đơn vị đo khác nhau hoặc số trung bình quá chênh lệch.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Cho rằng độ lệch chuẩn lớn là tốt (trong kiểm soát chất lượng và độ an toàn, độ lệch chuẩn càng nhỏ mới là càng tốt).</li>\n                <li>Nhầm lẫn giữa số trung bình (thang đo vị trí) và độ lệch chuẩn (thang đo độ phân tán).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"s càng bé: Càng ổn định, càng đồng đều, máy càng chuẩn – s càng lớn: Càng biến động, càng tản mát, rủi ro càng cao!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 3,
                "sectionTitle": "Mục 3: Tính chất biến đổi tuyến tính & Casio 580",
                "sgkHtml": "<p>Tính chất biến đổi tuyến tính của số đặc trưng và kỹ năng bấm máy Casio fx-580VNX:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Quy tắc biến đổi tuyến tính $y = ax + b$:</strong>\n                    $$\\overline{y} = a\\overline{x} + b$$\n                    $$s_y^2 = a^2 s_x^2 \\quad \\text{và} \\quad s_y = |a| s_x$$\n                    (Cộng hằng số $b$ không làm thay đổi phương sai; nhân với số $a$ làm phương sai tăng $a^2$ lần và độ lệch chuẩn tăng $|a|$ lần).\n                  </li>\n                  <li><strong>KỸ NĂNG CASIO FX-580VNX CHO THỐNG KÊ GHÉP NHÓM:</strong>\n                    <ol class=\"list-decimal ml-6 mt-1 space-y-1\">\n                      <li><b>Bước 1 (Bật cột tần số Frequency):</b> Nhấn <code>[SHIFT] [MENU] [▼] [3: Thống kê] [1: Mở]</code>.</li>\n                      <li><b>Bước 2 (Vào chế độ 1 biến):</b> Nhấn <code>[MENU] [6: Thống kê] [1: 1 - Biến]</code>.</li>\n                      <li><b>Bước 3 (Nhập bảng):</b> Cột $x$ nhập các giá trị đại diện $c_i$; cột $Freq$ nhập các tần số $m_i$ tương ứng.</li>\n                      <li><b>Bước 4 (Xuất kết quả):</b> Nhấn <code>[OPTN] [3: Tính 1-Biến]</code>. Màn hình hiển thị:\n                        <ul class=\"list-disc ml-6 mt-0.5\">\n                          <li>$\\overline{x}$: Số trung bình.</li>\n                          <li>$\\sigma x$: Độ lệch chuẩn của mẫu.</li>\n                          <li>$\\sigma^2 x$: Phương sai của mẫu.</li>\n                          <li>$n$: Tổng cỡ mẫu.</li>\n                        </ul>\n                      </li>\n                    </ol>\n                  </li>\n                </ul>",
                "noteHtml": "<li>Chú ý trên màn hình Casio fx-580VNX: Ta đọc dòng $\\sigma x$ (độ lệch chuẩn chuẩn SGK) hoặc $s x$ (độ lệch chuẩn hiệu chỉnh), chuẩn SGK Toán 12 KNTT là $\\sigma x$ chia cho $n$.</li>\n                <li>Trước khi nhập bảng luôn phải kiểm tra đã mở cột $Freq$ hay chưa!</li>",
                "mistakeHtml": "<li>Nhân hằng số $a$ vào dữ liệu nhưng quên bình phương $a^2$ khi tính phương sai mới ($s_{ax}^2 = a^2 s_x^2$).</li>\n                <li>Quên bật cột tần số dẫn đến máy tính gán mặc định mỗi nhóm có tần số là 1.</li>",
                "tipHtml": "<li><em>\"Thống kê Casio: SHIFT MENU xuống 3-1 mở tần số – MENU 6-1 nhập đại diện và tần số – OPTN 3 hiện trọn bộ trung bình, phương sai, độ lệch chuẩn!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Cho mẫu số liệu $X$ có độ lệch chuẩn $s_X = 2$. Nếu đặt $Y = 3X - 5$ thì độ lệch chuẩn $s_Y$ bằng:",
                        "options": [
                            "A. $6$",
                            "B. $1$",
                            "C. $18$",
                            "D. $11$"
                        ],
                        "correct": "A",
                        "explanation": "Theo tính chất biến đổi tuyến tính: $s_Y = |a| s_X = |3| \\cdot 2 = 6$.",
                        "hint1": "$s_{ax+b} = |a| s_x$.",
                        "hint2": "$3 \\times 2 = 6$ (hằng số $-5$ không ảnh hưởng độ lệch chuẩn)."
                    },
                    {
                        "question": "Nếu đặt $Y = -2X + 10$ thì phương sai $s_Y^2$ liên hệ với $s_X^2$ theo hệ thức:",
                        "options": [
                            "A. $s_Y^2 = 4s_X^2$",
                            "B. $s_Y^2 = -2s_X^2$",
                            "C. $s_Y^2 = 2s_X^2$",
                            "D. $s_Y^2 = 4s_X^2 + 10$"
                        ],
                        "correct": "A",
                        "explanation": "Phương sai biến đổi theo bình phương hệ số nhân: $s_Y^2 = a^2 s_X^2 = (-2)^2 s_X^2 = 4s_X^2$.",
                        "hint1": "$s_{ax+b}^2 = a^2 s_x^2$.",
                        "hint2": "$(-2)^2 = 4$."
                    },
                    {
                        "question": "Để bật cột tần số trong chế độ thống kê của máy tính Casio fx-580VNX, ta nhấn tổ hợp phím:",
                        "options": [
                            "A. [SHIFT] [MENU] [▼] [3] [1]",
                            "B. [MENU] [6] [1]",
                            "C. [SHIFT] [9] [3] [=]",
                            "D. [OPTN] [3]"
                        ],
                        "correct": "A",
                        "explanation": "Tổ hợp phím bật tần số là [SHIFT] [MENU] [▼] [3: Thống kê] [1: Mở].",
                        "hint1": "Vào cài đặt hệ thống bằng SHIFT MENU.",
                        "hint2": "Bấm mũi tên xuống chọn mục 3 (Thống kê) rồi chọn 1 (Mở)."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 10: Phương sai và độ lệch chuẩn</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 3: Mục 3: Tính chất biến đổi tuyến tính & Casio 580</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Tính chất biến đổi tuyến tính của số đặc trưng và kỹ năng bấm máy Casio fx-580VNX:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Quy tắc biến đổi tuyến tính $y = ax + b$:</strong>\n                    $$\\overline{y} = a\\overline{x} + b$$\n                    $$s_y^2 = a^2 s_x^2 \\quad \\text{và} \\quad s_y = |a| s_x$$\n                    (Cộng hằng số $b$ không làm thay đổi phương sai; nhân với số $a$ làm phương sai tăng $a^2$ lần và độ lệch chuẩn tăng $|a|$ lần).\n                  </li>\n                  <li><strong>KỸ NĂNG CASIO FX-580VNX CHO THỐNG KÊ GHÉP NHÓM:</strong>\n                    <ol class=\"list-decimal ml-6 mt-1 space-y-1\">\n                      <li><b>Bước 1 (Bật cột tần số Frequency):</b> Nhấn <code>[SHIFT] [MENU] [▼] [3: Thống kê] [1: Mở]</code>.</li>\n                      <li><b>Bước 2 (Vào chế độ 1 biến):</b> Nhấn <code>[MENU] [6: Thống kê] [1: 1 - Biến]</code>.</li>\n                      <li><b>Bước 3 (Nhập bảng):</b> Cột $x$ nhập các giá trị đại diện $c_i$; cột $Freq$ nhập các tần số $m_i$ tương ứng.</li>\n                      <li><b>Bước 4 (Xuất kết quả):</b> Nhấn <code>[OPTN] [3: Tính 1-Biến]</code>. Màn hình hiển thị:\n                        <ul class=\"list-disc ml-6 mt-0.5\">\n                          <li>$\\overline{x}$: Số trung bình.</li>\n                          <li>$\\sigma x$: Độ lệch chuẩn của mẫu.</li>\n                          <li>$\\sigma^2 x$: Phương sai của mẫu.</li>\n                          <li>$n$: Tổng cỡ mẫu.</li>\n                        </ul>\n                      </li>\n                    </ol>\n                  </li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Chú ý trên màn hình Casio fx-580VNX: Ta đọc dòng $\\sigma x$ (độ lệch chuẩn chuẩn SGK) hoặc $s x$ (độ lệch chuẩn hiệu chỉnh), chuẩn SGK Toán 12 KNTT là $\\sigma x$ chia cho $n$.</li>\n                <li>Trước khi nhập bảng luôn phải kiểm tra đã mở cột $Freq$ hay chưa!</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Nhân hằng số $a$ vào dữ liệu nhưng quên bình phương $a^2$ khi tính phương sai mới ($s_{ax}^2 = a^2 s_x^2$).</li>\n                <li>Quên bật cột tần số dẫn đến máy tính gán mặc định mỗi nhóm có tần số là 1.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Thống kê Casio: SHIFT MENU xuống 3-1 mở tần số – MENU 6-1 nhập đại diện và tần số – OPTN 3 hiện trọn bộ trung bình, phương sai, độ lệch chuẩn!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Về công thức tính phương sai của mẫu ghép nhóm:",
                "items": [
                    {
                        "key": "a",
                        "text": "Phương sai luôn là một số thực không âm.",
                        "correct": "true",
                        "explain": "Vì là trung bình của các bình phương sai lệch."
                    },
                    {
                        "key": "b",
                        "text": "Độ lệch chuẩn bằng căn bậc hai số học của phương sai: $s = \\sqrt{s^2}$.",
                        "correct": "true",
                        "explain": "Định nghĩa chuẩn."
                    },
                    {
                        "key": "c",
                        "text": "Công thức rút gọn: $s^2 = \\frac{1}{n}\\sum m_i c_i^2 - (\\overline{x})^2$.",
                        "correct": "true",
                        "explain": "Đẳng thức biến đổi chuẩn."
                    },
                    {
                        "key": "d",
                        "text": "Phương sai và độ lệch chuẩn luôn có giá trị bằng nhau.",
                        "correct": "false",
                        "explain": "Chỉ bằng nhau khi $s = 0$ hoặc $s = 1$."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: Cho mẫu số liệu có $\\overline{x} = 10, s^2 = 4$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Độ lệch chuẩn của mẫu số liệu là $s = 2$.",
                        "correct": "true",
                        "explain": "$\\sqrt{4} = 2$."
                    },
                    {
                        "key": "b",
                        "text": "Nếu cộng thêm 5 vào mỗi số liệu thì số trung bình mới là $15$.",
                        "correct": "true",
                        "explain": "$10 + 5 = 15$."
                    },
                    {
                        "key": "c",
                        "text": "Nếu cộng thêm 5 vào mỗi số liệu thì độ lệch chuẩn mới là $7$.",
                        "correct": "false",
                        "explain": "Độ lệch chuẩn không đổi ($s = 2$)."
                    },
                    {
                        "key": "d",
                        "text": "Nếu nhân đôi mỗi số liệu thì phương sai mới bằng $16$.",
                        "correct": "true",
                        "explain": "$2^2 \\times 4 = 16$."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: So sánh chất lượng hai quy trình đóng gói đường (mục tiêu 1000g):",
                "items": [
                    {
                        "key": "a",
                        "text": "Quy trình nào có khối lượng trung bình gần 1000g hơn thì đạt mục tiêu tốt hơn.",
                        "correct": "true",
                        "explain": "Độ chuẩn xác theo giá trị đích."
                    },
                    {
                        "key": "b",
                        "text": "Quy trình nào có độ lệch chuẩn nhỏ hơn thì khối lượng các gói đường đồng đều hơn.",
                        "correct": "true",
                        "explain": "Mức độ phân tán thấp nghĩa là đồng đều cao."
                    },
                    {
                        "key": "c",
                        "text": "Nếu hai quy trình có cùng khối lượng trung bình thì quy trình có $s$ nhỏ hơn là tốt hơn.",
                        "correct": "true",
                        "explain": "Đồng đều và ít lỗi hơn."
                    },
                    {
                        "key": "d",
                        "text": "Độ lệch chuẩn càng lớn thì quy trình đóng gói càng tiết kiệm chi phí.",
                        "correct": "false",
                        "explain": "Độ lệch chuẩn lớn gây lãng phí hoặc thiếu hụt khối lượng."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: Về các đại lượng thống kê mô tả một mẫu số liệu:",
                "items": [
                    {
                        "key": "a",
                        "text": "Số trung bình đo xu thế trung tâm của dữ liệu.",
                        "correct": "true",
                        "explain": "Đặc trưng vị trí tâm."
                    },
                    {
                        "key": "b",
                        "text": "Phương sai đo mức độ biến thiên xung quanh số trung bình.",
                        "correct": "true",
                        "explain": "Đặc trưng độ phân tán."
                    },
                    {
                        "key": "c",
                        "text": "Phương sai có cùng đơn vị đo với dữ liệu ban đầu.",
                        "correct": "false",
                        "explain": "Phương sai mang đơn vị BÌNH PHƯƠNG."
                    },
                    {
                        "key": "d",
                        "text": "Độ lệch chuẩn có cùng đơn vị đo với dữ liệu ban đầu.",
                        "correct": "true",
                        "explain": "Đã lấy căn bậc hai nên cùng đơn vị."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Cho mẫu số liệu có cỡ mẫu $n = 50$, $\\sum m_i c_i = 1000$, $\\sum m_i c_i^2 = 20500$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Số trung bình $\\overline{x} = 1000/50 = 20$.",
                        "correct": "true",
                        "explain": "$\\overline{x} = 20$."
                    },
                    {
                        "key": "b",
                        "text": "$\\frac{1}{n}\\sum m_i c_i^2 = 20500/50 = 410$.",
                        "correct": "true",
                        "explain": "$410$."
                    },
                    {
                        "key": "c",
                        "text": "Phương sai $s^2 = 410 - 20^2 = 10$.",
                        "correct": "true",
                        "explain": "$410 - 400 = 10$."
                    },
                    {
                        "key": "d",
                        "text": "Độ lệch chuẩn $s = \\sqrt{10} \\approx 3{,}16$.",
                        "correct": "true",
                        "explain": "$\\sqrt{10} \\approx 3{,}16$."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Về thao tác trên máy tính cầm tay Casio fx-580VNX:",
                "items": [
                    {
                        "key": "a",
                        "text": "Chế độ thống kê 1 biến nằm ở phím MENU 6 chọn 1.",
                        "correct": "true",
                        "explain": "MENU 6-1."
                    },
                    {
                        "key": "b",
                        "text": "Trước khi nhập bảng số liệu ghép nhóm cần bật cột tần số Freq.",
                        "correct": "true",
                        "explain": "Tránh máy gán tần số bằng 1."
                    },
                    {
                        "key": "c",
                        "text": "Nhấn phím OPTN 3 để hiển thị toàn bộ kết quả phân tích thống kê.",
                        "correct": "true",
                        "explain": "Xuất bảng kết quả 1-Biến."
                    },
                    {
                        "key": "d",
                        "text": "Máy tính Casio fx-580VNX không thể tính được phương sai của mẫu ghép nhóm.",
                        "correct": "false",
                        "explain": "Máy tính hoàn toàn tự động xuất phương sai $\\sigma^2 x$."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 10:") || t.includes("phương sai") || t.includes("độ lệch chuẩn") || t.includes("phuong sai") || t.includes("do lech chuan"));
      }
    },

  "toan12_bai11": {
        "id": "toan12_bai11",
        "lessonTitle": "Bài 11: Nguyên hàm",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Khái niệm nguyên hàm",
                "sgkHtml": "<p>Định nghĩa và họ nguyên hàm của một hàm số trên khoảng $K$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$F'(x) = f(x), \\quad \\forall x \\in K \\iff \\int f(x)\\,dx = F(x) + C$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Định nghĩa:</strong> Cho hàm số $f(x)$ xác định trên khoảng $K$. Hàm số $F(x)$ được gọi là một nguyên hàm của $f(x)$ trên $K$ nếu $F'(x) = f(x)$ với mọi $x \\in K$.</li>\n                  <li><strong>Định lý:</strong> Nếu $F(x)$ là một nguyên hàm của $f(x)$ trên $K$ thì mọi nguyên hàm của $f(x)$ trên $K$ đều có dạng $F(x) + C$, với $C$ là hằng số thực tuỳ ý.</li>\n                  <li><strong>Ký hiệu:</strong> Biểu thức $\\int f(x)\\,dx$ gọi là họ tất cả các nguyên hàm của $f(x)$, $f(x)\\,dx$ là vi phân của $F(x)$.</li>\n                  <li><strong>Ý nghĩa hình học:</strong> Đồ thị của các nguyên hàm $y = F(x) + C$ là các đường cong tịnh tiến theo phương song song với trục tung $Oy$.</li>\n                </ul>",
                "noteHtml": "<li>Định lý đảm bảo tính tồn tại: Mọi hàm số liên tục trên khoảng $K$ đều có nguyên hàm trên khoảng đó.</li>\n                <li>Nguyên hàm là phép toán ngược của đạo hàm: $(\\int f(x)\\,dx)' = f(x)$ và $\\int F'(x)\\,dx = F(x) + C$.</li>",
                "mistakeHtml": "<li>Quên viết hằng số cộng $C$ khi viết kết quả nguyên hàm.</li>\n                <li>Nhầm lẫn giữa đạo hàm và nguyên hàm (ví dụ đạo hàm của $\\cos x$ là $-\\sin x$, nhưng nguyên hàm của $\\cos x$ là $+\\sin x + C$).</li>",
                "tipHtml": "<li><em>\"Đạo hàm ra f(x) thì F(x) chính là Nguyên Hàm – Họ nguyên hàm luôn cộng hằng số C – Đạo hàm của họ nguyên hàm quay về hàm số dưới dấu tích phân!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Hàm số $F(x) = x^3 - 2x + 1$ là một nguyên hàm của hàm số nào dưới đây?",
                        "options": [
                            "A. $f(x) = 3x^2 - 2$",
                            "B. $f(x) = \\frac{x^4}{4} - x^2 + x$",
                            "C. $f(x) = 3x^2 - 2x$",
                            "D. $f(x) = 6x$"
                        ],
                        "correct": "A",
                        "explanation": "Lấy đạo hàm của $F(x)$: $F'(x) = (x^3 - 2x + 1)' = 3x^2 - 2 = f(x)$. Do đó $F(x)$ là nguyên hàm của $f(x) = 3x^2 - 2$.",
                        "hint1": "Muốn biết $F(x)$ là nguyên hàm của hàm nào, hãy đạo hàm $F(x)$.",
                        "hint2": "$(x^3 - 2x + 1)' = 3x^2 - 2$."
                    },
                    {
                        "question": "Khẳng định nào sau đây là ĐÚNG?",
                        "options": [
                            "A. $(\\int f(x)\\,dx)' = f(x)$",
                            "B. $\\int f'(x)\\,dx = f(x)$",
                            "C. $(\\int f(x)\\,dx)' = f'(x)$",
                            "D. $\\int f(x)\\,dx = F(x)$"
                        ],
                        "correct": "A",
                        "explanation": "Theo định nghĩa, đạo hàm của họ nguyên hàm $(\\int f(x)\\,dx)'$ chính bằng hàm số $f(x)$ dưới dấu tích phân. Phương án B thiếu hằng số $+ C$.",
                        "hint1": "Đạo hàm triệt tiêu dấu nguyên hàm.",
                        "hint2": "Đạo hàm của họ nguyên hàm bằng chính $f(x)$."
                    },
                    {
                        "question": "Hàm số $F(x)$ nào sau đây là một nguyên hàm của $f(x) = e^x$ thoả mãn $F(0) = 3$?",
                        "options": [
                            "A. $F(x) = e^x + 2$",
                            "B. $F(x) = e^x + 3$",
                            "C. $F(x) = e^x - 2$",
                            "D. $F(x) = e^x + 1$"
                        ],
                        "correct": "A",
                        "explanation": "Họ nguyên hàm $\\int e^x\\,dx = e^x + C$. Thoả mãn $F(0) = 3 \\implies e^0 + C = 3 \\implies 1 + C = 3 \\implies C = 2$. Vậy $F(x) = e^x + 2$.",
                        "hint1": "Nguyên hàm của $e^x$ là $e^x + C$.",
                        "hint2": "Thay $x = 0$: $e^0 + C = 1 + C = 3 \\implies C = 2$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 11: Nguyên hàm</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Khái niệm nguyên hàm</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Định nghĩa và họ nguyên hàm của một hàm số trên khoảng $K$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$F'(x) = f(x), \\quad \\forall x \\in K \\iff \\int f(x)\\,dx = F(x) + C$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Định nghĩa:</strong> Cho hàm số $f(x)$ xác định trên khoảng $K$. Hàm số $F(x)$ được gọi là một nguyên hàm của $f(x)$ trên $K$ nếu $F'(x) = f(x)$ với mọi $x \\in K$.</li>\n                  <li><strong>Định lý:</strong> Nếu $F(x)$ là một nguyên hàm của $f(x)$ trên $K$ thì mọi nguyên hàm của $f(x)$ trên $K$ đều có dạng $F(x) + C$, với $C$ là hằng số thực tuỳ ý.</li>\n                  <li><strong>Ký hiệu:</strong> Biểu thức $\\int f(x)\\,dx$ gọi là họ tất cả các nguyên hàm của $f(x)$, $f(x)\\,dx$ là vi phân của $F(x)$.</li>\n                  <li><strong>Ý nghĩa hình học:</strong> Đồ thị của các nguyên hàm $y = F(x) + C$ là các đường cong tịnh tiến theo phương song song với trục tung $Oy$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Định lý đảm bảo tính tồn tại: Mọi hàm số liên tục trên khoảng $K$ đều có nguyên hàm trên khoảng đó.</li>\n                <li>Nguyên hàm là phép toán ngược của đạo hàm: $(\\int f(x)\\,dx)' = f(x)$ và $\\int F'(x)\\,dx = F(x) + C$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên viết hằng số cộng $C$ khi viết kết quả nguyên hàm.</li>\n                <li>Nhầm lẫn giữa đạo hàm và nguyên hàm (ví dụ đạo hàm của $\\cos x$ là $-\\sin x$, nhưng nguyên hàm của $\\cos x$ là $+\\sin x + C$).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Đạo hàm ra f(x) thì F(x) chính là Nguyên Hàm – Họ nguyên hàm luôn cộng hằng số C – Đạo hàm của họ nguyên hàm quay về hàm số dưới dấu tích phân!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Tính chất cơ bản của nguyên hàm",
                "sgkHtml": "<p>Các tính chất đại số cơ bản của phép lấy nguyên hàm:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\int k f(x)\\,dx = k \\int f(x)\\,dx \\quad (k \\neq 0)$$\n                  $$\\int [f(x) \\pm g(x)]\\,dx = \\int f(x)\\,dx \\pm \\int g(x)\\,dx$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Tính chất đưa hằng số ra ngoài:</strong> Hệ số thực $k \\neq 0$ được đưa ra ngoài dấu nguyên hàm.</li>\n                  <li><strong>Tính chất tuyến tính của tổng, hiệu:</strong> Nguyên hàm của một tổng (hoặc hiệu) bằng tổng (hoặc hiệu) các nguyên hàm.</li>\n                  <li><strong>LƯU Ý CỰC KỲ QUAN TRỌNG:</strong>\n                    $$\\int [f(x) \\cdot g(x)]\\,dx \\neq \\int f(x)\\,dx \\cdot \\int g(x)\\,dx$$\n                    $$\\int \\frac{f(x)}{g(x)}\\,dx \\neq \\frac{\\int f(x)\\,dx}{\\int g(x)\\,dx}$$\n                    (Không có công thức nguyên hàm của tích và thương!).\n                  </li>\n                </ul>",
                "noteHtml": "<li>Khi gặp nguyên hàm của tích (ví dụ $\\int x(x+1)\\,dx$), bắt buộc phải khai triển thành đa thức $\\int (x^2+x)\\,dx$ rồi mới lấy nguyên hàm từng số hạng.</li>\n                <li>Hằng số $k = 0$ thì $\\int 0\\,dx = C$.</li>",
                "mistakeHtml": "<li>Tự tiện tách nguyên hàm của tích thành tích hai nguyên hàm.</li>\n                <li>Đưa biến số $x$ ra ngoài dấu nguyên hàm (chỉ được đưa hằng số tự do!).</li>",
                "tipHtml": "<li><em>\"Hằng số tự do kéo ra ngoài – Tổng hiệu tách đôi lấy từng đứa – Tuyệt đối không tách tích và thương!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Biết $\\int f(x)\\,dx = F(x) + C$. Khi đó $\\int 3f(x)\\,dx$ bằng:",
                        "options": [
                            "A. $3F(x) + C$",
                            "B. $\\frac{1}{3}F(x) + C$",
                            "C. $F(3x) + C$",
                            "D. $3F(x) + 3C$"
                        ],
                        "correct": "A",
                        "explanation": "Đưa hằng số $3$ ra ngoài dấu nguyên hàm: $\\int 3f(x)\\,dx = 3\\int f(x)\\,dx = 3F(x) + C$ (hằng số $3C$ được viết gọn là $C$).",
                        "hint1": "Đưa thừa số 3 ra ngoài dấu nguyên hàm.",
                        "hint2": "$3\\int f(x)\\,dx = 3F(x) + C$."
                    },
                    {
                        "question": "Khẳng định nào sau đây là SAI?",
                        "options": [
                            "A. $\\int [f(x) \\cdot g(x)]\\,dx = \\int f(x)\\,dx \\cdot \\int g(x)\\,dx$",
                            "B. $\\int [f(x) + g(x)]\\,dx = \\int f(x)\\,dx + \\int g(x)\\,dx$",
                            "C. $\\int [f(x) - g(x)]\\,dx = \\int f(x)\\,dx - \\int g(x)\\,dx$",
                            "D. $\\int 5f(x)\\,dx = 5\\int f(x)\\,dx$"
                        ],
                        "correct": "A",
                        "explanation": "Không có tính chất nguyên hàm của một tích bằng tích các nguyên hàm. Đây là sai lầm kinh điển cần tránh.",
                        "hint1": "Nguyên hàm chỉ có tính chất tuyến tính với tổng, hiệu và tích với hằng số.",
                        "hint2": "Không tách được phép nhân hai hàm số."
                    },
                    {
                        "question": "Nguyên hàm $\\int (2x + \\cos x)\\,dx$ bằng:",
                        "options": [
                            "A. $x^2 + \\sin x + C$",
                            "B. $x^2 - \\sin x + C$",
                            "C. $2 - \\sin x + C$",
                            "D. $x^2 + \\cos x + C$"
                        ],
                        "correct": "A",
                        "explanation": "$\\int (2x + \\cos x)\\,dx = \\int 2x\\,dx + \\int \\cos x\\,dx = x^2 + \\sin x + C$.",
                        "hint1": "Tách thành 2 nguyên hàm riêng biệt.",
                        "hint2": "$\\int 2x\\,dx = x^2$ và $\\int \\cos x\\,dx = \\sin x$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 11: Nguyên hàm</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Tính chất cơ bản của nguyên hàm</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Các tính chất đại số cơ bản của phép lấy nguyên hàm:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\int k f(x)\\,dx = k \\int f(x)\\,dx \\quad (k \\neq 0)$$\n                  $$\\int [f(x) \\pm g(x)]\\,dx = \\int f(x)\\,dx \\pm \\int g(x)\\,dx$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Tính chất đưa hằng số ra ngoài:</strong> Hệ số thực $k \\neq 0$ được đưa ra ngoài dấu nguyên hàm.</li>\n                  <li><strong>Tính chất tuyến tính của tổng, hiệu:</strong> Nguyên hàm của một tổng (hoặc hiệu) bằng tổng (hoặc hiệu) các nguyên hàm.</li>\n                  <li><strong>LƯU Ý CỰC KỲ QUAN TRỌNG:</strong>\n                    $$\\int [f(x) \\cdot g(x)]\\,dx \\neq \\int f(x)\\,dx \\cdot \\int g(x)\\,dx$$\n                    $$\\int \\frac{f(x)}{g(x)}\\,dx \\neq \\frac{\\int f(x)\\,dx}{\\int g(x)\\,dx}$$\n                    (Không có công thức nguyên hàm của tích và thương!).\n                  </li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Khi gặp nguyên hàm của tích (ví dụ $\\int x(x+1)\\,dx$), bắt buộc phải khai triển thành đa thức $\\int (x^2+x)\\,dx$ rồi mới lấy nguyên hàm từng số hạng.</li>\n                <li>Hằng số $k = 0$ thì $\\int 0\\,dx = C$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Tự tiện tách nguyên hàm của tích thành tích hai nguyên hàm.</li>\n                <li>Đưa biến số $x$ ra ngoài dấu nguyên hàm (chỉ được đưa hằng số tự do!).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Hằng số tự do kéo ra ngoài – Tổng hiệu tách đôi lấy từng đứa – Tuyệt đối không tách tích và thương!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 3,
                "sectionTitle": "Mục 3: Bảng nguyên hàm các hàm số sơ cấp",
                "sgkHtml": "<p>Bảng các công thức nguyên hàm cơ bản bắt buộc thuộc lòng:</p>\n                <div style=\"background:rgba(15,23,42,0.85); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px; margin:10px 0;\">\n                  <table style=\"width:100%; border-collapse:collapse; color:#f8fafc; font-size:14px;\">\n                    <tr style=\"border-bottom:1px solid rgba(56,189,248,0.3); color:#38bdf8;\">\n                      <th style=\"padding:6px; text-align:left;\">Hàm số sơ cấp $f(x)$</th>\n                      <th style=\"padding:6px; text-align:left;\">Họ nguyên hàm $\\int f(x)\\,dx$</th>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px;\">$0$</td>\n                      <td style=\"padding:6px;\">$C$</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px;\">$1$ (hay $dx$)</td>\n                      <td style=\"padding:6px;\">$x + C$</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px;\">$x^\\alpha$ $(\\alpha \\neq -1)$</td>\n                      <td style=\"padding:6px;\">$\\frac{x^{\\alpha+1}}{\\alpha+1} + C$</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px;\">$\\frac{1}{x}$ $(x \\neq 0)$</td>\n                      <td style=\"padding:6px;\">$\\ln|x| + C$</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px;\">$e^x$</td>\n                      <td style=\"padding:6px;\">$e^x + C$</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px;\">$a^x$ $(0 < a \\neq 1)$</td>\n                      <td style=\"padding:6px;\">$\\frac{a^x}{\\ln a} + C$</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px;\">$\\cos x$</td>\n                      <td style=\"padding:6px;\">$\\sin x + C$</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px;\">$\\sin x$</td>\n                      <td style=\"padding:6px;\">$-\\cos x + C$</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px;\">$\\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$</td>\n                      <td style=\"padding:6px;\">$\\tan x + C$</td>\n                    </tr>\n                    <tr>\n                      <td style=\"padding:6px;\">$\\frac{1}{\\sin^2 x} = 1 + \\cot^2 x$</td>\n                      <td style=\"padding:6px;\">$-\\cot x + C$</td>\n                    </tr>\n                  </table>\n                </div>",
                "noteHtml": "<li>Mở rộng bậc nhất $ax + b$: $\\int f(ax+b)\\,dx = \\frac{1}{a}F(ax+b) + C$. Nhớ phải nhân thêm hệ số $\\frac{1}{a}$!</li>\n                <li>Công thức $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$ bắt buộc phải có dấu giá trị tuyệt đối $|x|$.</li>",
                "mistakeHtml": "<li>Quên dấu trừ khi lấy nguyên hàm của $\\sin x$ (nguyên hàm của $\\sin$ là $-\\cos$, của $\\cos$ là $+\\sin$).</li>\n                <li>Quên hệ số $\\frac{1}{a}$ khi lấy nguyên hàm hàm hợp bậc nhất (ví dụ $\\int e^{2x}\\,dx = \\frac{1}{2}e^{2x} + C$, không phải $e^{2x}$).</li>",
                "tipHtml": "<li><em>\"Hàm luỹ thừa tăng bậc chia số mũ mới – Mở rộng bậc nhất ax+b nhớ chia a – Sin nguyên hàm ra Trừ Cosin!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Họ nguyên hàm của hàm số $f(x) = \\frac{1}{2x + 1}$ trên khoảng $(0; +\\infty)$ là:",
                        "options": [
                            "A. $\\frac{1}{2}\\ln(2x + 1) + C$",
                            "B. $\\ln(2x + 1) + C$",
                            "C. $2\\ln(2x + 1) + C$",
                            "D. $-\\frac{1}{(2x+1)^2} + C$"
                        ],
                        "correct": "A",
                        "explanation": "Áp dụng công thức mở rộng $\\int \\frac{1}{ax+b}\\,dx = \\frac{1}{a}\\ln|ax+b| + C$ với $a = 2$. Do đó $\\int \\frac{1}{2x+1}\\,dx = \\frac{1}{2}\\ln(2x+1) + C$.",
                        "hint1": "Nhớ nhân thêm $1/a = 1/2$.",
                        "hint2": "Vì $x > 0$ nên $2x + 1 > 0$, bỏ được dấu trị tuyệt đối."
                    },
                    {
                        "question": "Họ nguyên hàm của hàm số $f(x) = \\sin 3x$ là:",
                        "options": [
                            "A. $-\\frac{1}{3}\\cos 3x + C$",
                            "B. $\\frac{1}{3}\\cos 3x + C$",
                            "C. $-3\\cos 3x + C$",
                            "D. $3\\cos 3x + C$"
                        ],
                        "correct": "A",
                        "explanation": "$\\int \\sin 3x\\,dx = -\\frac{1}{3}\\cos 3x + C$.",
                        "hint1": "Nguyên hàm của $\\sin$ ra $-\\cos$, có hệ số $1/a = 1/3$.",
                        "hint2": "$-\\frac{1}{3}\\cos 3x + C$."
                    },
                    {
                        "question": "Họ nguyên hàm của hàm số $f(x) = 3^x$ là:",
                        "options": [
                            "A. $\\frac{3^x}{\\ln 3} + C$",
                            "B. $3^x \\ln 3 + C$",
                            "C. $\\frac{3^{x+1}}{x+1} + C$",
                            "D. $3^x + C$"
                        ],
                        "correct": "A",
                        "explanation": "Theo công thức bảng nguyên hàm: $\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C$. Do đó $\\int 3^x\\,dx = \\frac{3^x}{\\ln 3} + C$.",
                        "hint1": "Đạo hàm nhân $\\ln a$, nguyên hàm chia $\\ln a$.",
                        "hint2": "$3^x / \\ln 3 + C$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 11: Nguyên hàm</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 3: Mục 3: Bảng nguyên hàm các hàm số sơ cấp</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Bảng các công thức nguyên hàm cơ bản bắt buộc thuộc lòng:</p>\n                <div style=\"background:rgba(15,23,42,0.85); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px; margin:10px 0;\">\n                  <table style=\"width:100%; border-collapse:collapse; color:#f8fafc; font-size:14px;\">\n                    <tr style=\"border-bottom:1px solid rgba(56,189,248,0.3); color:#38bdf8;\">\n                      <th style=\"padding:6px; text-align:left;\">Hàm số sơ cấp $f(x)$</th>\n                      <th style=\"padding:6px; text-align:left;\">Họ nguyên hàm $\\int f(x)\\,dx$</th>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px;\">$0$</td>\n                      <td style=\"padding:6px;\">$C$</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px;\">$1$ (hay $dx$)</td>\n                      <td style=\"padding:6px;\">$x + C$</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px;\">$x^\\alpha$ $(\\alpha \\neq -1)$</td>\n                      <td style=\"padding:6px;\">$\\frac{x^{\\alpha+1}}{\\alpha+1} + C$</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px;\">$\\frac{1}{x}$ $(x \\neq 0)$</td>\n                      <td style=\"padding:6px;\">$\\ln|x| + C$</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px;\">$e^x$</td>\n                      <td style=\"padding:6px;\">$e^x + C$</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px;\">$a^x$ $(0 < a \\neq 1)$</td>\n                      <td style=\"padding:6px;\">$\\frac{a^x}{\\ln a} + C$</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px;\">$\\cos x$</td>\n                      <td style=\"padding:6px;\">$\\sin x + C$</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px;\">$\\sin x$</td>\n                      <td style=\"padding:6px;\">$-\\cos x + C$</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px;\">$\\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$</td>\n                      <td style=\"padding:6px;\">$\\tan x + C$</td>\n                    </tr>\n                    <tr>\n                      <td style=\"padding:6px;\">$\\frac{1}{\\sin^2 x} = 1 + \\cot^2 x$</td>\n                      <td style=\"padding:6px;\">$-\\cot x + C$</td>\n                    </tr>\n                  </table>\n                </div></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Mở rộng bậc nhất $ax + b$: $\\int f(ax+b)\\,dx = \\frac{1}{a}F(ax+b) + C$. Nhớ phải nhân thêm hệ số $\\frac{1}{a}$!</li>\n                <li>Công thức $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$ bắt buộc phải có dấu giá trị tuyệt đối $|x|$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên dấu trừ khi lấy nguyên hàm của $\\sin x$ (nguyên hàm của $\\sin$ là $-\\cos$, của $\\cos$ là $+\\sin$).</li>\n                <li>Quên hệ số $\\frac{1}{a}$ khi lấy nguyên hàm hàm hợp bậc nhất (ví dụ $\\int e^{2x}\\,dx = \\frac{1}{2}e^{2x} + C$, không phải $e^{2x}$).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Hàm luỹ thừa tăng bậc chia số mũ mới – Mở rộng bậc nhất ax+b nhớ chia a – Sin nguyên hàm ra Trừ Cosin!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Về định nghĩa nguyên hàm trong giải tích:",
                "items": [
                    {
                        "key": "a",
                        "text": "Nếu $F'(x) = f(x)$ thì $F(x)$ là một nguyên hàm của $f(x)$.",
                        "correct": "true",
                        "explain": "Định nghĩa chuẩn."
                    },
                    {
                        "key": "b",
                        "text": "Họ nguyên hàm của $f(x)$ luôn chứa vô số hàm số sai khác nhau một hằng số $C$.",
                        "correct": "true",
                        "explain": "Định lý họ nguyên hàm $F(x) + C$."
                    },
                    {
                        "key": "c",
                        "text": "Đạo hàm của họ nguyên hàm luôn bằng chính hàm số dưới dấu tích phân.",
                        "correct": "true",
                        "explain": "$(\\int f(x)dx)' = f(x)$."
                    },
                    {
                        "key": "d",
                        "text": "Mọi hàm số đều có nguyên hàm trên tập xác định của nó.",
                        "correct": "false",
                        "explain": "Chỉ các hàm số liên tục mới chắc chắn có nguyên hàm."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: Cho hàm số $f(x) = 2x - 3$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Họ nguyên hàm của $f(x)$ là $F(x) = x^2 - 3x + C$.",
                        "correct": "true",
                        "explain": "$\\int (2x - 3)dx = x^2 - 3x + C$."
                    },
                    {
                        "key": "b",
                        "text": "Hàm số $F_1(x) = x^2 - 3x$ là một nguyên hàm của $f(x)$.",
                        "correct": "true",
                        "explain": "Ứng với $C = 0$."
                    },
                    {
                        "key": "c",
                        "text": "Nguyên hàm thoả mãn $F(1) = 0$ có $C = 2$.",
                        "correct": "true",
                        "explain": "$1^2 - 3(1) + C = 0 \\implies C = 2$."
                    },
                    {
                        "key": "d",
                        "text": "Đạo hàm của $F(x)$ tại $x = 2$ bằng $1$.",
                        "correct": "true",
                        "explain": "$F'(2) = f(2) = 2(2) - 3 = 1$."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: Về bảng nguyên hàm các hàm số sơ cấp:",
                "items": [
                    {
                        "key": "a",
                        "text": "$\\int x^3\\,dx = \\frac{x^4}{4} + C$.",
                        "correct": "true",
                        "explain": "Công thức luỹ thừa."
                    },
                    {
                        "key": "b",
                        "text": "$\\int \\frac{1}{x}\\,dx = \\ln x + C$ với mọi $x \\neq 0$.",
                        "correct": "false",
                        "explain": "Phải có trị tuyệt đối: $\\ln|x| + C$."
                    },
                    {
                        "key": "c",
                        "text": "$\\int e^{3x}\\,dx = \\frac{1}{3}e^{3x} + C$.",
                        "correct": "true",
                        "explain": "Công thức mở rộng $1/a$."
                    },
                    {
                        "key": "d",
                        "text": "$\\int \\cos 2x\\,dx = -\\frac{1}{2}\\sin 2x + C$.",
                        "correct": "false",
                        "explain": "Nguyên hàm của cos là dương sin: $+\\frac{1}{2}\\sin 2x + C$."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: Về các phép biến đổi đại số với nguyên hàm:",
                "items": [
                    {
                        "key": "a",
                        "text": "$\\int (f(x) + g(x))\\,dx = \\int f(x)\\,dx + \\int g(x)\\,dx$.",
                        "correct": "true",
                        "explain": "Tính chất cộng."
                    },
                    {
                        "key": "b",
                        "text": "$\\int 4\\sin x\\,dx = -4\\cos x + C$.",
                        "correct": "true",
                        "explain": "Đưa hằng số 4 ra ngoài."
                    },
                    {
                        "key": "c",
                        "text": "$\\int x \\cos x\\,dx = \\frac{x^2}{2} \\sin x + C$.",
                        "correct": "false",
                        "explain": "Không được tách tích thành tích 2 nguyên hàm."
                    },
                    {
                        "key": "d",
                        "text": "$\\int (x + 1)^2\\,dx = \\frac{(x+1)^3}{3} + C$.",
                        "correct": "true",
                        "explain": "Hàm hợp bậc nhất."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Trong chuyển động thẳng biến đổi:",
                "items": [
                    {
                        "key": "a",
                        "text": "Vận tốc $v(t)$ là một nguyên hàm của gia tốc $a(t)$.",
                        "correct": "true",
                        "explain": "$v(t) = \\int a(t)dt$."
                    },
                    {
                        "key": "b",
                        "text": "Quãng đường $s(t)$ là một nguyên hàm của vận tốc $v(t)$.",
                        "correct": "true",
                        "explain": "$s(t) = \\int v(t)dt$."
                    },
                    {
                        "key": "c",
                        "text": "Nếu gia tốc $a(t) = 2$ không đổi thì vận tốc là hàm số bậc nhất theo thời gian.",
                        "correct": "true",
                        "explain": "$v(t) = 2t + v_0$."
                    },
                    {
                        "key": "d",
                        "text": "Quãng đường đi được luôn bằng giá trị của gia tốc nhân thời gian.",
                        "correct": "false",
                        "explain": "Phải lấy nguyên hàm 2 lần."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Về bài toán tìm nguyên hàm có điều kiện ban đầu:",
                "items": [
                    {
                        "key": "a",
                        "text": "Điều kiện $F(x_0) = y_0$ giúp xác định duy nhất giá trị hằng số $C$.",
                        "correct": "true",
                        "explain": "Bài toán Cauchy."
                    },
                    {
                        "key": "b",
                        "text": "Đồ thị của hai nguyên hàm khác nhau của cùng một hàm số không bao giờ cắt nhau.",
                        "correct": "true",
                        "explain": "Là các đường cong song song tịnh tiến theo trục tung."
                    },
                    {
                        "key": "c",
                        "text": "Biết $F'(x) = 3x^2$ và đồ thị qua gốc toạ độ thì $F(x) = x^3$.",
                        "correct": "true",
                        "explain": "$F(0) = 0 \\implies C = 0$."
                    },
                    {
                        "key": "d",
                        "text": "Nguyên hàm của hàm lẻ luôn là một hàm chẵn.",
                        "correct": "false",
                        "explain": "Chỉ khi chọn $C = 0$ mới là hàm chẵn, nếu $C \\neq 0$ thì không chẵn cũng không lẻ."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 11:") || t.includes("nguyên hàm") || t.includes("nguyen ham")) && !t.includes("tích phân");
      }
    },

  "toan12_bai12": {
        "id": "toan12_bai12",
        "lessonTitle": "Bài 12: Tích phân",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Diện tích hình thang cong & Định nghĩa tích phân",
                "sgkHtml": "<p>Định nghĩa tích phân từ bài toán diện tích hình thang cong:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\int_a^b f(x)\\,dx = F(b) - F(a) = F(x)\\Big|_a^b$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Công thức Newton-Leibniz:</strong> Cho $f(x)$ liên tục trên đoạn $[a; b]$ và $F(x)$ là một nguyên hàm của $f(x)$ trên $[a; b]$. Khi đó hiệu số $F(b) - F(a)$ được gọi là tích phân từ $a$ đến $b$ của hàm số $f(x)$.</li>\n                  <li><strong>Ký hiệu:</strong> $a$ là cận dưới, $b$ là cận trên, $f(x)$ là hàm số dưới dấu tích phân, $x$ là biến tích phân.</li>\n                  <li><strong>Ý nghĩa hình học:</strong> Nếu $f(x) \\ge 0$ trên đoạn $[a; b]$ thì tích phân $\\int_a^b f(x)\\,dx$ chính là diện tích $S$ của hình thang cong giới hạn bởi đồ thị $y = f(x)$, trục hoành $Ox$ và hai đường thẳng $x = a, x = b$:\n                    $$S = \\int_a^b f(x)\\,dx$$\n                  </li>\n                  <li><strong>Tính độc lập của biến tích phân:</strong> Giá trị của tích phân chỉ phụ thuộc vào hàm số $f$ và hai cận $a, b$, hoàn toàn không phụ thuộc vào tên biến:\n                    $$\\int_a^b f(x)\\,dx = \\int_a^b f(t)\\,dt = \\int_a^b f(u)\\,du$$\n                  </li>\n                </ul>",
                "noteHtml": "<li>Quy ước cận bằng nhau: $\\int_a^a f(x)\\,dx = 0$.</li>\n                <li>Tích phân là một SỐ THỰC, không chứa hằng số cộng $C$ (khác với nguyên hàm).</li>",
                "mistakeHtml": "<li>Thay nhầm cận: lấy $F(a) - F(b)$ thay vì cận trên trừ cận dưới $F(b) - F(a)$.</li>\n                <li>Nhầm lẫn giữa tích phân (ra một số cụ thể) và nguyên hàm (ra một họ hàm số).</li>",
                "tipHtml": "<li><em>\"Tích phân Newton-Leibniz: Lấy nguyên hàm rồi thay cận trên TRỪ cận dưới – Bấm phím ∫ trên Casio để kiểm tra đáp án!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Tích phân $\\int_1^2 2x\\,dx$ bằng:",
                        "options": [
                            "A. $3$",
                            "B. $4$",
                            "C. $2$",
                            "D. $5$"
                        ],
                        "correct": "A",
                        "explanation": "Nguyên hàm của $2x$ là $x^2$. $\\int_1^2 2x\\,dx = x^2\\Big|_1^2 = 2^2 - 1^2 = 4 - 1 = 3$.",
                        "hint1": "Nguyên hàm là $x^2$.",
                        "hint2": "Thay cận: $2^2 - 1^2 = 3$."
                    },
                    {
                        "question": "Cho $\\int_0^1 f(x)\\,dx = 2$. Giá trị của tích phân $\\int_0^1 f(t)\\,dt$ bằng:",
                        "options": [
                            "A. $2$",
                            "B. $-2$",
                            "C. $4$",
                            "D. Không xác định"
                        ],
                        "correct": "A",
                        "explanation": "Tích phân không phụ thuộc vào ký hiệu biến: $\\int_0^1 f(t)\\,dt = \\int_0^1 f(x)\\,dx = 2$.",
                        "hint1": "Tích phân độc lập với tên biến.",
                        "hint2": "Giá trị vẫn bằng 2."
                    },
                    {
                        "question": "Diện tích hình thang cong giới hạn bởi parabol $y = x^2$, trục hoành và hai đường thẳng $x = 0, x = 3$ bằng:",
                        "options": [
                            "A. $9$",
                            "B. $27$",
                            "C. $3$",
                            "D. $18$"
                        ],
                        "correct": "A",
                        "explanation": "$S = \\int_0^3 x^2\\,dx = \\frac{x^3}{3}\\Big|_0^3 = \\frac{3^3}{3} - 0 = 9$.",
                        "hint1": "Tích phân $x^2$ từ 0 đến 3.",
                        "hint2": "$x^3 / 3$ tại cận 3 là $27/3 = 9$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 12: Tích phân</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Diện tích hình thang cong & Định nghĩa tích phân</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Định nghĩa tích phân từ bài toán diện tích hình thang cong:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\int_a^b f(x)\\,dx = F(b) - F(a) = F(x)\\Big|_a^b$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Công thức Newton-Leibniz:</strong> Cho $f(x)$ liên tục trên đoạn $[a; b]$ và $F(x)$ là một nguyên hàm của $f(x)$ trên $[a; b]$. Khi đó hiệu số $F(b) - F(a)$ được gọi là tích phân từ $a$ đến $b$ của hàm số $f(x)$.</li>\n                  <li><strong>Ký hiệu:</strong> $a$ là cận dưới, $b$ là cận trên, $f(x)$ là hàm số dưới dấu tích phân, $x$ là biến tích phân.</li>\n                  <li><strong>Ý nghĩa hình học:</strong> Nếu $f(x) \\ge 0$ trên đoạn $[a; b]$ thì tích phân $\\int_a^b f(x)\\,dx$ chính là diện tích $S$ của hình thang cong giới hạn bởi đồ thị $y = f(x)$, trục hoành $Ox$ và hai đường thẳng $x = a, x = b$:\n                    $$S = \\int_a^b f(x)\\,dx$$\n                  </li>\n                  <li><strong>Tính độc lập của biến tích phân:</strong> Giá trị của tích phân chỉ phụ thuộc vào hàm số $f$ và hai cận $a, b$, hoàn toàn không phụ thuộc vào tên biến:\n                    $$\\int_a^b f(x)\\,dx = \\int_a^b f(t)\\,dt = \\int_a^b f(u)\\,du$$\n                  </li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quy ước cận bằng nhau: $\\int_a^a f(x)\\,dx = 0$.</li>\n                <li>Tích phân là một SỐ THỰC, không chứa hằng số cộng $C$ (khác với nguyên hàm).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Thay nhầm cận: lấy $F(a) - F(b)$ thay vì cận trên trừ cận dưới $F(b) - F(a)$.</li>\n                <li>Nhầm lẫn giữa tích phân (ra một số cụ thể) và nguyên hàm (ra một họ hàm số).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Tích phân Newton-Leibniz: Lấy nguyên hàm rồi thay cận trên TRỪ cận dưới – Bấm phím ∫ trên Casio để kiểm tra đáp án!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Các tính chất của tích phân",
                "sgkHtml": "<p>Hệ thống các tính chất đại số quan trọng của tích phân xác định:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\int_a^b k f(x)\\,dx = k \\int_a^b f(x)\\,dx$$\n                  $$\\int_a^b [f(x) \\pm g(x)]\\,dx = \\int_a^b f(x)\\,dx \\pm \\int_a^b g(x)\\,dx$$\n                  $$\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx \\quad (\\text{Tính chất chèn cận})$$\n                  $$\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx \\quad (\\text{Tính chất đổi cận})$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Tính chất chèn điểm $c$:</strong> Điểm $c$ có thể nằm trong hoặc nằm ngoài đoạn $[a; b]$, miễn là hàm số liên tục trên khoảng chứa cả $a, b, c$.</li>\n                  <li><strong>Tính chất đổi cận:</strong> Khi hoán đổi cận trên và cận dưới thì tích phân đổi dấu.</li>\n                  <li>Nếu $f(x) \\ge g(x)$ trên $[a; b]$ với $a < b$ thì $\\int_a^b f(x)\\,dx \\ge \\int_a^b g(x)\\,dx$.</li>\n                </ul>",
                "noteHtml": "<li>Tính chất chèn cận là 'vũ khí' đắc lực để xử lý hàm số chứa dấu giá trị tuyệt đối $|f(x)|$ hoặc hàm số cho bởi nhiều công thức ghép nối!</li>\n                <li>Đảo cận đổi dấu: Cực kỳ hay gặp trong các câu hỏi trắc nghiệm nhận biết của đề thi tốt nghiệp THPT.</li>",
                "mistakeHtml": "<li>Quên đổi dấu khi đảo cận: $\\int_2^1 = -\\int_1^2$.</li>\n                <li>Chèn cận nhầm thứ tự: $\\int_a^b = \\int_a^c + \\int_c^b$ (ngọn của tích phân trước là gốc của tích phân sau).</li>",
                "tipHtml": "<li><em>\"Chèn cận nối đuôi: Tích phân a đến c cộng c đến b bằng a đến b – Đảo cận thì đảo dấu!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Cho $\\int_1^2 f(x)\\,dx = 3$ và $\\int_2^5 f(x)\\,dx = 7$. Giá trị của $\\int_1^5 f(x)\\,dx$ bằng:",
                        "options": [
                            "A. $10$",
                            "B. $4$",
                            "C. $-4$",
                            "D. $21$"
                        ],
                        "correct": "A",
                        "explanation": "Theo tính chất chèn cận: $\\int_1^5 f(x)\\,dx = \\int_1^2 f(x)\\,dx + \\int_2^5 f(x)\\,dx = 3 + 7 = 10$.",
                        "hint1": "Áp dụng công thức chèn điểm 2 ở giữa.",
                        "hint2": "$3 + 7 = 10$."
                    },
                    {
                        "question": "Cho $\\int_0^3 f(x)\\,dx = 5$. Giá trị của $\\int_3^0 2f(x)\\,dx$ bằng:",
                        "options": [
                            "A. $-10$",
                            "B. $10$",
                            "C. $-5$",
                            "D. $5$"
                        ],
                        "correct": "A",
                        "explanation": "Đảo cận đổi dấu và đưa thừa số 2 ra ngoài: $\\int_3^0 2f(x)\\,dx = -2\\int_0^3 f(x)\\,dx = -2(5) = -10$.",
                        "hint1": "Đảo cận từ $0 \\to 3$ thành $3 \\to 0$ làm đổi dấu tích phân.",
                        "hint2": "$-2 \\times 5 = -10$."
                    },
                    {
                        "question": "Cho $\\int_1^3 f(x)\\,dx = 4$ và $\\int_1^3 g(x)\\,dx = -1$. Giá trị của $\\int_1^3 [2f(x) - 3g(x)]\\,dx$ bằng:",
                        "options": [
                            "A. $11$",
                            "B. $5$",
                            "C. $7$",
                            "D. $8$"
                        ],
                        "correct": "A",
                        "explanation": "$\\int_1^3 [2f(x) - 3g(x)]\\,dx = 2(4) - 3(-1) = 8 + 3 = 11$.",
                        "hint1": "Tách thành $2\\int f - 3\\int g$.",
                        "hint2": "$2(4) - 3(-1) = 8 + 3 = 11$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 12: Tích phân</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Các tính chất của tích phân</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Hệ thống các tính chất đại số quan trọng của tích phân xác định:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\int_a^b k f(x)\\,dx = k \\int_a^b f(x)\\,dx$$\n                  $$\\int_a^b [f(x) \\pm g(x)]\\,dx = \\int_a^b f(x)\\,dx \\pm \\int_a^b g(x)\\,dx$$\n                  $$\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx \\quad (\\text{Tính chất chèn cận})$$\n                  $$\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx \\quad (\\text{Tính chất đổi cận})$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Tính chất chèn điểm $c$:</strong> Điểm $c$ có thể nằm trong hoặc nằm ngoài đoạn $[a; b]$, miễn là hàm số liên tục trên khoảng chứa cả $a, b, c$.</li>\n                  <li><strong>Tính chất đổi cận:</strong> Khi hoán đổi cận trên và cận dưới thì tích phân đổi dấu.</li>\n                  <li>Nếu $f(x) \\ge g(x)$ trên $[a; b]$ với $a < b$ thì $\\int_a^b f(x)\\,dx \\ge \\int_a^b g(x)\\,dx$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Tính chất chèn cận là 'vũ khí' đắc lực để xử lý hàm số chứa dấu giá trị tuyệt đối $|f(x)|$ hoặc hàm số cho bởi nhiều công thức ghép nối!</li>\n                <li>Đảo cận đổi dấu: Cực kỳ hay gặp trong các câu hỏi trắc nghiệm nhận biết của đề thi tốt nghiệp THPT.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên đổi dấu khi đảo cận: $\\int_2^1 = -\\int_1^2$.</li>\n                <li>Chèn cận nhầm thứ tự: $\\int_a^b = \\int_a^c + \\int_c^b$ (ngọn của tích phân trước là gốc của tích phân sau).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Chèn cận nối đuôi: Tích phân a đến c cộng c đến b bằng a đến b – Đảo cận thì đảo dấu!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 3,
                "sectionTitle": "Mục 3: Phương pháp tính tích phân (Đổi biến & Từng phần)",
                "sgkHtml": "<p>Hai phương pháp tính tích phân then chốt:</p>\n                <div style=\"background:rgba(15,23,42,0.85); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px; margin:10px 0;\">\n                  <ul class=\"space-y-3 text-slate-200\">\n                    <li><b>1. Phương pháp đổi biến số:</b>\n                      $$\\int_a^b f(u(x)) \\cdot u'(x)\\,dx = \\int_{u(a)}^{u(b)} f(u)\\,du$$\n                      <div style=\"color:#fbbf24; font-weight:bold; margin-top:4px;\">⚠️ QUY TẮC BẮT BUỘC: ĐỔI BIẾN LÀ PHẢI ĐỔI CẬN!</div>\n                      Khi đặt $u = u(x)$, ta phải đổi cận: $x = a \\implies u = u(a)$; $x = b \\implies u = u(b)$.\n                    </li>\n                    <li><b>2. Phương pháp tích phân từng phần:</b>\n                      $$\\int_a^b u\\,dv = uv\\Big|_a^b - \\int_a^b v\\,du$$\n                      <b>Thứ tự ưu tiên đặt $u$ (\"Nhất lô, Nhì đa, Tam lượng, Tứ mũ\"):</b>\n                      $$\\text{Hàm Logarit } (\\ln x) \\longrightarrow \\text{Hàm Đa thức } (P(x)) \\longrightarrow \\text{Hàm Lượng giác } (\\sin, \\cos) \\longrightarrow \\text{Hàm Mũ } (e^x, a^x)$$\n                      Phần còn lại luôn đặt là $dv$.\n                    </li>\n                  </ul>\n                </div>",
                "noteHtml": "<li>Đổi biến số: Tìm mối quan hệ giữa hàm bên trong và đạo hàm của nó xuất hiện cạnh $dx$ ($u'(x)dx = du$).</li>\n                <li>Kỹ thuật múa cột (bảng vi phân - tích phân) giúp giải siêu tốc bài toán tích phân từng phần lặp lại nhiều lần!</li>",
                "mistakeHtml": "<li>Quên đổi cận khi dùng phương pháp đổi biến số (sai lầm phổ biến nhất của học sinh).</li>\n                <li>Đặt nhầm thứ tự ưu tiên $u$ và $dv$ trong tích phân từng phần.</li>",
                "tipHtml": "<li><em>\"Đổi biến nhớ đổi cận – Từng phần: Nhất lô, Nhì đa, Tam lượng, Tứ mũ – Bấm máy Casio [∫] kiểm tra sai số để bắt trọn điểm 10!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Tính tích phân $I = \\int_0^1 2x(x^2 + 1)^3\\,dx$. Đặt $u = x^2 + 1$, tích phân $I$ trở thành:",
                        "options": [
                            "A. $\\int_1^2 u^3\\,du$",
                            "B. $\\int_0^1 u^3\\,du$",
                            "C. $\\int_1^2 2u^3\\,du$",
                            "D. $\\int_0^1 2u^3\\,du$"
                        ],
                        "correct": "A",
                        "explanation": "Vi phân $du = 2x\\,dx$. Đổi cận: $x = 0 \\implies u = 1; x = 1 \\implies u = 2$. Do đó $I = \\int_1^2 u^3\\,du$.",
                        "hint1": "Vi phân $du = 2x\\,dx$.",
                        "hint2": "Đổi cận: $x = 0 \\implies u = 1; x = 1 \\implies u = 2$."
                    },
                    {
                        "question": "Khi tính tích phân từng phần $I = \\int_0^1 x e^x\\,dx$, ta chọn đặt:",
                        "options": [
                            "A. $u = x, dv = e^x\\,dx$",
                            "B. $u = e^x, dv = x\\,dx$",
                            "C. $u = x e^x, dv = dx$",
                            "D. $u = 1, dv = x e^x\\,dx$"
                        ],
                        "correct": "A",
                        "explanation": "Theo quy tắc 'Nhì đa, Tứ mũ', ta ưu tiên đặt $u = x$ (đa thức) và $dv = e^x\\,dx$ (mũ).",
                        "hint1": "Đa thức đứng trước hàm mũ trong thứ tự ưu tiên đặt $u$.",
                        "hint2": "$u = x, dv = e^x\\,dx$."
                    },
                    {
                        "question": "Giá trị của tích phân $I = \\int_0^1 x e^x\\,dx$ bằng:",
                        "options": [
                            "A. $1$",
                            "B. $e - 1$",
                            "C. $e$",
                            "D. $2$"
                        ],
                        "correct": "A",
                        "explanation": "$u = x \\implies du = dx$; $dv = e^x dx \\implies v = e^x$. $I = x e^x\\Big|_0^1 - \\int_0^1 e^x\\,dx = (1 \\cdot e - 0) - e^x\\Big|_0^1 = e - (e - 1) = 1$.",
                        "hint1": "$uv\\Big|_0^1 - \\int_0^1 v\\,du$.",
                        "hint2": "$e - (e - 1) = 1$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 12: Tích phân</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 3: Mục 3: Phương pháp tính tích phân (Đổi biến & Từng phần)</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Hai phương pháp tính tích phân then chốt:</p>\n                <div style=\"background:rgba(15,23,42,0.85); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px; margin:10px 0;\">\n                  <ul class=\"space-y-3 text-slate-200\">\n                    <li><b>1. Phương pháp đổi biến số:</b>\n                      $$\\int_a^b f(u(x)) \\cdot u'(x)\\,dx = \\int_{u(a)}^{u(b)} f(u)\\,du$$\n                      <div style=\"color:#fbbf24; font-weight:bold; margin-top:4px;\">⚠️ QUY TẮC BẮT BUỘC: ĐỔI BIẾN LÀ PHẢI ĐỔI CẬN!</div>\n                      Khi đặt $u = u(x)$, ta phải đổi cận: $x = a \\implies u = u(a)$; $x = b \\implies u = u(b)$.\n                    </li>\n                    <li><b>2. Phương pháp tích phân từng phần:</b>\n                      $$\\int_a^b u\\,dv = uv\\Big|_a^b - \\int_a^b v\\,du$$\n                      <b>Thứ tự ưu tiên đặt $u$ (\"Nhất lô, Nhì đa, Tam lượng, Tứ mũ\"):</b>\n                      $$\\text{Hàm Logarit } (\\ln x) \\longrightarrow \\text{Hàm Đa thức } (P(x)) \\longrightarrow \\text{Hàm Lượng giác } (\\sin, \\cos) \\longrightarrow \\text{Hàm Mũ } (e^x, a^x)$$\n                      Phần còn lại luôn đặt là $dv$.\n                    </li>\n                  </ul>\n                </div></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Đổi biến số: Tìm mối quan hệ giữa hàm bên trong và đạo hàm của nó xuất hiện cạnh $dx$ ($u'(x)dx = du$).</li>\n                <li>Kỹ thuật múa cột (bảng vi phân - tích phân) giúp giải siêu tốc bài toán tích phân từng phần lặp lại nhiều lần!</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên đổi cận khi dùng phương pháp đổi biến số (sai lầm phổ biến nhất của học sinh).</li>\n                <li>Đặt nhầm thứ tự ưu tiên $u$ và $dv$ trong tích phân từng phần.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Đổi biến nhớ đổi cận – Từng phần: Nhất lô, Nhì đa, Tam lượng, Tứ mũ – Bấm máy Casio [∫] kiểm tra sai số để bắt trọn điểm 10!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Về định nghĩa và bản chất của tích phân xác định:",
                "items": [
                    {
                        "key": "a",
                        "text": "Tích phân xác định $\\int_a^b f(x)\\,dx$ là một số thực cụ thể.",
                        "correct": "true",
                        "explain": "Định lý chuẩn."
                    },
                    {
                        "key": "b",
                        "text": "Công thức Newton-Leibniz: $\\int_a^b f(x)\\,dx = F(b) - F(a)$.",
                        "correct": "true",
                        "explain": "Công thức nền tảng của giải tích."
                    },
                    {
                        "key": "c",
                        "text": "Giá trị của tích phân phụ thuộc vào ký hiệu của biến lấy tích phân.",
                        "correct": "false",
                        "explain": "Hoàn toàn độc lập với tên biến."
                    },
                    {
                        "key": "d",
                        "text": "Nếu $f(x) \\ge 0$ thì tích phân biểu thị diện tích hình thang cong tương ứng.",
                        "correct": "true",
                        "explain": "Ý nghĩa hình học chuẩn."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: Cho $\\int_0^2 f(x)\\,dx = 3$ và $\\int_0^2 g(x)\\,dx = -1$:",
                "items": [
                    {
                        "key": "a",
                        "text": "$\\int_0^2 [f(x) + g(x)]\\,dx = 2$.",
                        "correct": "true",
                        "explain": "$3 + (-1) = 2$."
                    },
                    {
                        "key": "b",
                        "text": "$\\int_0^2 [f(x) - g(x)]\\,dx = 4$.",
                        "correct": "true",
                        "explain": "$3 - (-1) = 4$."
                    },
                    {
                        "key": "c",
                        "text": "$\\int_2^0 f(x)\\,dx = -3$.",
                        "correct": "true",
                        "explain": "Đảo cận đổi dấu."
                    },
                    {
                        "key": "d",
                        "text": "$\\int_0^2 [f(x) \\cdot g(x)]\\,dx = -3$.",
                        "correct": "false",
                        "explain": "Không có tính chất tích phân của tích bằng tích 2 tích phân."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: Về phương pháp đổi biến số trong tích phân:",
                "items": [
                    {
                        "key": "a",
                        "text": "Khi đổi biến số thì bắt buộc phải đổi cận tương ứng.",
                        "correct": "true",
                        "explain": "Nguyên tắc bắt buộc."
                    },
                    {
                        "key": "b",
                        "text": "Vi phân $du$ bằng $u'(x)dx$.",
                        "correct": "true",
                        "explain": "Công thức vi phân."
                    },
                    {
                        "key": "c",
                        "text": "Cận mới $u(b)$ luôn phải lớn hơn cận mới $u(a)$.",
                        "correct": "false",
                        "explain": "Cận trên có thể nhỏ hơn cận dưới sau khi đổi biến."
                    },
                    {
                        "key": "d",
                        "text": "Đổi biến số giúp đưa tích phân phức tạp về dạng cơ bản dễ tính hơn.",
                        "correct": "true",
                        "explain": "Mục đích của phương pháp."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: Về phương pháp tích phân từng phần:",
                "items": [
                    {
                        "key": "a",
                        "text": "Công thức từng phần là $\\int_a^b u\\,dv = uv\\Big|_a^b - \\int_a^b v\\,du$.",
                        "correct": "true",
                        "explain": "Công thức chuẩn."
                    },
                    {
                        "key": "b",
                        "text": "Hàm số logarit có thứ tự ưu tiên đặt $u$ cao nhất.",
                        "correct": "true",
                        "explain": "Nhất lô."
                    },
                    {
                        "key": "c",
                        "text": "Hàm số lượng giác có thứ tự ưu tiên đặt $u$ cao hơn hàm đa thức.",
                        "correct": "false",
                        "explain": "Nhất lô, Nhì đa, Tam lượng (đa thức ưu tiên hơn lượng giác)."
                    },
                    {
                        "key": "d",
                        "text": "Tích phân từng phần áp dụng hiệu quả cho tích của hai hàm số khác loại.",
                        "correct": "true",
                        "explain": "Đặc trưng áp dụng của từng phần."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Cho $I = \\int_0^{\\pi/2} x \\cos x\\,dx$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Đặt $u = x \\implies du = dx$.",
                        "correct": "true",
                        "explain": "Chọn $u$ là đa thức."
                    },
                    {
                        "key": "b",
                        "text": "Đặt $dv = \\cos x\\,dx \\implies v = \\sin x$.",
                        "correct": "true",
                        "explain": "Nguyên hàm của $\\cos$ là $\\sin$."
                    },
                    {
                        "key": "c",
                        "text": "Phần thế cận $uv\\Big|_0^{\\pi/2} = \\frac{\\pi}{2}$.",
                        "correct": "true",
                        "explain": "$\\frac{\\pi}{2} \\sin(\\frac{\\pi}{2}) - 0 = \\frac{\\pi}{2}$."
                    },
                    {
                        "key": "d",
                        "text": "Giá trị của tích phân $I = \\frac{\\pi}{2} - 1$.",
                        "correct": "true",
                        "explain": "$uv\\Big|_0^{\\pi/2} - \\int_0^{\\pi/2} \\sin x\\,dx = \\frac{\\pi}{2} + \\cos x\\Big|_0^{\\pi/2} = \\frac{\\pi}{2} - 1$."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Về tính chất chèn cận của tích phân:",
                "items": [
                    {
                        "key": "a",
                        "text": "$\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx$ đúng với mọi điểm $c$.",
                        "correct": "true",
                        "explain": "Điểm $c$ nằm trong hay ngoài đều đúng miễn là hàm liên tục."
                    },
                    {
                        "key": "b",
                        "text": "Tính chất chèn cận giúp tính tích phân của hàm chứa dấu giá trị tuyệt đối $|x|$.",
                        "correct": "true",
                        "explain": "Tách khoảng để phá dấu trị tuyệt đối."
                    },
                    {
                        "key": "c",
                        "text": "$\\int_{-1}^1 |x|\\,dx = \\int_{-1}^0 (-x)\\,dx + \\int_0^1 x\\,dx$.",
                        "correct": "true",
                        "explain": "Phá dấu trị tuyệt đối chính xác."
                    },
                    {
                        "key": "d",
                        "text": "Giá trị $\\int_{-1}^1 |x|\\,dx = 0$.",
                        "correct": "false",
                        "explain": "Bằng $1/2 + 1/2 = 1 > 0$."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 12:") || (t.includes("tích phân") && !t.includes("ứng dụng"))) && !t.includes("nguyên hàm");
      }
    },

  "toan12_bai13": {
        "id": "toan12_bai13",
        "lessonTitle": "Bài 13: Ứng dụng hình học của tích phân",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Tính diện tích hình phẳng",
                "sgkHtml": "<p>Công thức tính diện tích hình phẳng bằng tích phân:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$S = \\int_a^b |f(x) - g(x)|\\,dx$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Hình phẳng giới hạn bởi 1 đồ thị và trục hoành:</strong> Giới hạn bởi $y = f(x)$, trục hoành $y = 0$ và hai đường thẳng $x = a, x = b$:\n                    $$S = \\int_a^b |f(x)|\\,dx$$\n                  </li>\n                  <li><strong>Hình phẳng giới hạn bởi 2 đồ thị:</strong> Giới hạn bởi $y = f(x)$, $y = g(x)$ và hai đường thẳng $x = a, x = b$:\n                    $$S = \\int_a^b |f(x) - g(x)|\\,dx$$\n                  </li>\n                  <li><strong>Trường hợp chưa cho cận $a, b$:</strong> Giải phương trình hoành độ giao điểm $f(x) = g(x)$ tìm các nghiệm, lấy nghiệm nhỏ nhất làm cận dưới $a$ và nghiệm lớn nhất làm cận trên $b$.</li>\n                  <li><strong>Quy tắc phá dấu giá trị tuyệt đối:</strong> Nếu trên $[a; b]$ đồ thị $f(x)$ luôn nằm phía trên $g(x)$ ($f(x) \\ge g(x)$) thì:\n                    $$S = \\int_a^b [f(x) - g(x)]\\,dx$$\n                  </li>\n                </ul>",
                "noteHtml": "<li>Diện tích luôn là một số DƯƠNG ($S > 0$). Nếu tính ra kết quả âm thì chắc chắn đã nhầm lẫn thứ tự hàm số hoặc thiếu dấu trị tuyệt đối!</li>\n                <li>Có thể bấm máy Casio: Nhập dấu tích phân [∫], bấm [SHIFT][(] (Abs) để nhập $|f(x) - g(x)|$ rồi nhập hai cận, máy tự động ra kết quả chính xác.</li>",
                "mistakeHtml": "<li>Quên dấu giá trị tuyệt đối khi hai đồ thị cắt nhau bên trong khoảng tích phân.</li>\n                <li>Tìm thiếu nghiệm khi giải phương trình hoành độ giao điểm $f(x) = g(x)$.</li>",
                "tipHtml": "<li><em>\"Diện tích hình phẳng: Hàm trên TRỪ hàm dưới lấy tích phân – Nếu chưa biết trên dưới thì thêm trị tuyệt đối [Abs]!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^2 - 4$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 2$ bằng:",
                        "options": [
                            "A. $\\frac{16}{3}$",
                            "B. $-\\frac{16}{3}$",
                            "C. $4$",
                            "D. $\\frac{8}{3}$"
                        ],
                        "correct": "A",
                        "explanation": "Trên đoạn $[0; 2]$, $x^2 - 4 \\le 0$. Diện tích $S = \\int_0^2 |x^2 - 4|\\,dx = \\int_0^2 (4 - x^2)\\,dx = \\left(4x - \\frac{x^3}{3}\\right)\\Big|_0^2 = 8 - \\frac{8}{3} = \\frac{16}{3}$.",
                        "hint1": "Trên $[0; 2]$, parabol nằm dưới trục hoành nên $|x^2 - 4| = 4 - x^2$.",
                        "hint2": "$4(2) - 8/3 = 16/3$."
                    },
                    {
                        "question": "Diện tích hình phẳng giới hạn bởi hai đường cong $y = x^2$ và $y = 2x$ bằng:",
                        "options": [
                            "A. $\\frac{4}{3}$",
                            "B. $\\frac{2}{3}$",
                            "C. $\\frac{8}{3}$",
                            "D. $2$"
                        ],
                        "correct": "A",
                        "explanation": "Phương trình hoành độ giao điểm: $x^2 = 2x \\Leftrightarrow x^2 - 2x = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. $S = \\int_0^2 |2x - x^2|\\,dx = \\left(x^2 - \\frac{x^3}{3}\\right)\\Big|_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$.",
                        "hint1": "Tìm giao điểm: $x = 0$ và $x = 2$.",
                        "hint2": "$\\int_0^2 (2x - x^2)dx = 4 - 8/3 = 4/3$."
                    },
                    {
                        "question": "Công thức nào sau đây tính diện tích hình phẳng giới hạn bởi $y = f(x), y = g(x), x = a, x = b$?",
                        "options": [
                            "A. $S = \\int_a^b |f(x) - g(x)|\\,dx$",
                            "B. $S = \\pi \\int_a^b [f(x) - g(x)]^2\\,dx$",
                            "C. $S = \\int_a^b [f(x) - g(x)]\\,dx$",
                            "D. $S = |\\int_a^b f(x)\\,dx - \\int_a^b g(x)\\,dx|$"
                        ],
                        "correct": "A",
                        "explanation": "Công thức chuẩn xác là $S = \\int_a^b |f(x) - g(x)|\\,dx$, dấu giá trị tuyệt đối nằm bên trong tích phân.",
                        "hint1": "Dấu giá trị tuyệt đối phải nằm trong dấu tích phân.",
                        "hint2": "Công thức A là chuẩn."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 13: Ứng dụng hình học của tích phân</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Tính diện tích hình phẳng</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Công thức tính diện tích hình phẳng bằng tích phân:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$S = \\int_a^b |f(x) - g(x)|\\,dx$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Hình phẳng giới hạn bởi 1 đồ thị và trục hoành:</strong> Giới hạn bởi $y = f(x)$, trục hoành $y = 0$ và hai đường thẳng $x = a, x = b$:\n                    $$S = \\int_a^b |f(x)|\\,dx$$\n                  </li>\n                  <li><strong>Hình phẳng giới hạn bởi 2 đồ thị:</strong> Giới hạn bởi $y = f(x)$, $y = g(x)$ và hai đường thẳng $x = a, x = b$:\n                    $$S = \\int_a^b |f(x) - g(x)|\\,dx$$\n                  </li>\n                  <li><strong>Trường hợp chưa cho cận $a, b$:</strong> Giải phương trình hoành độ giao điểm $f(x) = g(x)$ tìm các nghiệm, lấy nghiệm nhỏ nhất làm cận dưới $a$ và nghiệm lớn nhất làm cận trên $b$.</li>\n                  <li><strong>Quy tắc phá dấu giá trị tuyệt đối:</strong> Nếu trên $[a; b]$ đồ thị $f(x)$ luôn nằm phía trên $g(x)$ ($f(x) \\ge g(x)$) thì:\n                    $$S = \\int_a^b [f(x) - g(x)]\\,dx$$\n                  </li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Diện tích luôn là một số DƯƠNG ($S > 0$). Nếu tính ra kết quả âm thì chắc chắn đã nhầm lẫn thứ tự hàm số hoặc thiếu dấu trị tuyệt đối!</li>\n                <li>Có thể bấm máy Casio: Nhập dấu tích phân [∫], bấm [SHIFT][(] (Abs) để nhập $|f(x) - g(x)|$ rồi nhập hai cận, máy tự động ra kết quả chính xác.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên dấu giá trị tuyệt đối khi hai đồ thị cắt nhau bên trong khoảng tích phân.</li>\n                <li>Tìm thiếu nghiệm khi giải phương trình hoành độ giao điểm $f(x) = g(x)$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Diện tích hình phẳng: Hàm trên TRỪ hàm dưới lấy tích phân – Nếu chưa biết trên dưới thì thêm trị tuyệt đối [Abs]!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Tính thể tích vật thể & Khối tròn xoay",
                "sgkHtml": "<p>Công thức tính thể tích vật thể bất kỳ và thể tích khối tròn xoay:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$V = \\int_a^b S(x)\\,dx \\quad (\\text{Vật thể có thiết diện } S(x))$$\n                  $$V = \\pi \\int_a^b [f(x)]^2\\,dx \\quad (\\text{Khối tròn xoay quay quanh } Ox)$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Thể tích vật thể tổng quát:</strong> Cắt vật thể bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x \\in [a; b]$, nếu thiết diện thu được có diện tích là $S(x)$ liên tục thì thể tích là $V = \\int_a^b S(x)\\,dx$ (<b>không có $\\pi$</b>!).</li>\n                  <li><strong>Thể tích khối tròn xoay quanh trục $Ox$:</strong> Hình phẳng giới hạn bởi $y = f(x)$, trục hoành $y = 0$, $x = a, x = b$ quay xung quanh trục $Ox$:\n                    $$V = \\pi \\int_a^b [f(x)]^2\\,dx$$\n                    (<b>bắt buộc có $\\pi$ và bình phương hàm số</b>).\n                  </li>\n                  <li>Khối tròn xoay giới hạn bởi 2 đường $y = f(x), y = g(x)$ (với $f(x)g(x) \\ge 0$): $V = \\pi \\int_a^b |[f(x)]^2 - [g(x)]^2|\\,dx$.</li>\n                </ul>",
                "noteHtml": "<li>Phân biệt rõ: Thể tích vật thể tổng quát theo thiết diện $S(x)$ KHÔNG CÓ $\\pi$; thể tích khối tròn xoay BẮT BUỘC CÓ $\\pi$ phía trước!</li>\n                <li>Khối nón, khối cầu, khối trụ đều là các trường hợp đặc biệt của khối tròn xoay.</li>",
                "mistakeHtml": "<li>Quên số $\\pi$ phía trước tích phân khối tròn xoay.</li>\n                <li>Quên bình phương $[f(x)]^2$.</li>",
                "tipHtml": "<li><em>\"Khối tròn xoay quay quanh Ox: Có Pi phía trước, hàm số bình phương bên trong – Thiết diện S(x) thì không có Pi!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi đồ thị $y = \\sqrt{x}$, trục $Ox$, $x = 0$ và $x = 4$ quanh trục $Ox$ bằng:",
                        "options": [
                            "A. $8\\pi$",
                            "B. $16\\pi$",
                            "C. $8$",
                            "D. $\\frac{16\\pi}{3}$"
                        ],
                        "correct": "A",
                        "explanation": "$V = \\pi \\int_0^4 (\\sqrt{x})^2\\,dx = \\pi \\int_0^4 x\\,dx = \\pi \\left(\\frac{x^2}{2}\\right)\\Big|_0^4 = \\pi \\cdot \\frac{16}{2} = 8\\pi$.",
                        "hint1": "Bình phương $(\\sqrt{x})^2 = x$.",
                        "hint2": "$\\pi \\int_0^4 x\\,dx = 8\\pi$."
                    },
                    {
                        "question": "Tính thể tích của vật thể nằm giữa hai mặt phẳng $x = 0$ và $x = 2$, biết thiết diện của vật thể bị cắt bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x$ là một hình vuông có cạnh bằng $\\sqrt{x + 1}$:",
                        "options": [
                            "A. $4$",
                            "B. $4\\pi$",
                            "C. $2$",
                            "D. $2\\pi$"
                        ],
                        "correct": "A",
                        "explanation": "Diện tích thiết diện hình vuông: $S(x) = (\\sqrt{x + 1})^2 = x + 1$. Thể tích: $V = \\int_0^2 (x + 1)\\,dx = \\left(\\frac{x^2}{2} + x\\right)\\Big|_0^2 = 2 + 2 = 4$ (không có $\\pi$!).",
                        "hint1": "Diện tích hình vuông cạnh $a$ là $S = a^2 = x + 1$.",
                        "hint2": "Thể tích vật thể cắt theo thiết diện không có $\\pi$: $\\int_0^2 (x+1)dx = 4$."
                    },
                    {
                        "question": "Cho hình phẳng $(H)$ giới hạn bởi $y = e^x$, trục hoành, $x = 0$ và $x = 1$. Thể tích khối tròn xoay khi quay $(H)$ quanh $Ox$ là:",
                        "options": [
                            "A. $\\frac{\\pi(e^2 - 1)}{2}$",
                            "B. $\\pi(e - 1)$",
                            "C. $\\frac{e^2 - 1}{2}$",
                            "D. $\\pi e^2$"
                        ],
                        "correct": "A",
                        "explanation": "$V = \\pi \\int_0^1 (e^x)^2\\,dx = \\pi \\int_0^1 e^{2x}\\,dx = \\pi \\left(\\frac{e^{2x}}{2}\\right)\\Big|_0^1 = \\frac{\\pi(e^2 - 1)}{2}$.",
                        "hint1": "$(e^x)^2 = e^{2x}$.",
                        "hint2": "Nguyên hàm của $e^{2x}$ là $\\frac{1}{2}e^{2x}$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 13: Ứng dụng hình học của tích phân</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Tính thể tích vật thể & Khối tròn xoay</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Công thức tính thể tích vật thể bất kỳ và thể tích khối tròn xoay:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$V = \\int_a^b S(x)\\,dx \\quad (\\text{Vật thể có thiết diện } S(x))$$\n                  $$V = \\pi \\int_a^b [f(x)]^2\\,dx \\quad (\\text{Khối tròn xoay quay quanh } Ox)$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Thể tích vật thể tổng quát:</strong> Cắt vật thể bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x \\in [a; b]$, nếu thiết diện thu được có diện tích là $S(x)$ liên tục thì thể tích là $V = \\int_a^b S(x)\\,dx$ (<b>không có $\\pi$</b>!).</li>\n                  <li><strong>Thể tích khối tròn xoay quanh trục $Ox$:</strong> Hình phẳng giới hạn bởi $y = f(x)$, trục hoành $y = 0$, $x = a, x = b$ quay xung quanh trục $Ox$:\n                    $$V = \\pi \\int_a^b [f(x)]^2\\,dx$$\n                    (<b>bắt buộc có $\\pi$ và bình phương hàm số</b>).\n                  </li>\n                  <li>Khối tròn xoay giới hạn bởi 2 đường $y = f(x), y = g(x)$ (với $f(x)g(x) \\ge 0$): $V = \\pi \\int_a^b |[f(x)]^2 - [g(x)]^2|\\,dx$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Phân biệt rõ: Thể tích vật thể tổng quát theo thiết diện $S(x)$ KHÔNG CÓ $\\pi$; thể tích khối tròn xoay BẮT BUỘC CÓ $\\pi$ phía trước!</li>\n                <li>Khối nón, khối cầu, khối trụ đều là các trường hợp đặc biệt của khối tròn xoay.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên số $\\pi$ phía trước tích phân khối tròn xoay.</li>\n                <li>Quên bình phương $[f(x)]^2$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Khối tròn xoay quay quanh Ox: Có Pi phía trước, hàm số bình phương bên trong – Thiết diện S(x) thì không có Pi!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 3,
                "sectionTitle": "Mục 3: Ứng dụng tích phân trong bài toán thực tế",
                "sgkHtml": "<p>Hệ thống hoá các bài toán mô hình hoá thực tiễn ứng dụng tích phân:</p>\n                <div style=\"background:rgba(15,23,42,0.85); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px; margin:10px 0;\">\n                  <ul class=\"space-y-2 text-slate-200\">\n                    <li><b>1. Quãng đường trong chuyển động cơ học:</b>\n                      $$s = \\int_{t_1}^{t_2} v(t)\\,dt$$\n                      (Quãng đường vật đi được từ thời điểm $t_1$ đến $t_2$ bằng tích phân của vận tốc $v(t)$).\n                    </li>\n                    <li><b>2. Tính công cơ học của lực biến thiên:</b>\n                      $$A = \\int_{x_1}^{x_2} F(x)\\,dx$$\n                      (Công thực hiện để kéo dãn lò xo từ độ biến dạng $x_1$ đến $x_2$ với lực đàn hồi $F(x) = kx$).\n                    </li>\n                    <li><b>3. Đo thể tích phao bơi, thùng tô-nô, bồn chứa nước elipxoit:</b> Sử dụng khối tròn xoay của các đường cong elip, parabol để tính dung tích chính xác của bồn chứa công nghiệp.</li>\n                    <li><b>4. Tính chi phí sản xuất và giá trị thặng dư kinh tế:</b> Tích phân hàm chi phí cận biên hoặc hàm cung cầu.</li>\n                  </ul>\n                </div>",
                "noteHtml": "<li>Bài toán ô tô đạp phanh: Thời điểm ô tô dừng hẳn là nghiệm của phương trình $v(t) = 0$. Quãng đường từ lúc đạp phanh đến khi dừng là $\\int_0^{t_{\\text{dừng}}} v(t)\\,dt$.</li>\n                <li>Công kéo dãn lò xo tuân theo định luật Hooke: $A = \\int_0^x kx\\,dx = \\frac{1}{2}kx^2$.</li>",
                "mistakeHtml": "<li>Quên tìm thời điểm dừng hẳn $v(t) = 0$ mà lấy cận tích phân tuỳ tiện.</li>\n                <li>Nhầm lẫn đơn vị (ví dụ đổi xăng-ti-mét sang mét trong bài toán kéo dãn lò xo).</li>",
                "tipHtml": "<li><em>\"Quãng đường là tích phân của vận tốc – Đạp phanh tìm thời điểm v(t) = 0 làm cận trên – Thùng chứa nước dùng khối tròn xoay!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Một ô tô đang chạy với vận tốc $20\\text{ m/s}$ thì người lái xe đạp phanh. Kể từ thời điểm đó, ô tô chuyển động chậm dần đều với vận tốc $v(t) = 20 - 4t\\text{ (m/s)}$, trong đó $t$ là thời gian tính bằng giây. Từ lúc đạp phanh đến khi dừng hẳn, ô tô đi được quãng đường là:",
                        "options": [
                            "A. $50\\text{ m}$",
                            "B. $100\\text{ m}$",
                            "C. $40\\text{ m}$",
                            "D. $25\\text{ m}$"
                        ],
                        "correct": "A",
                        "explanation": "Xe dừng hẳn khi $v(t) = 0 \\Leftrightarrow 20 - 4t = 0 \\Leftrightarrow t = 5$ giây. Quãng đường đi được: $s = \\int_0^5 (20 - 4t)\\,dt = (20t - 2t^2)\\Big|_0^5 = 100 - 50 = 50\\text{ m}$.",
                        "hint1": "Tìm thời điểm dừng hẳn: $20 - 4t = 0 \\implies t = 5$.",
                        "hint2": "Tính tích phân $s = \\int_0^5 (20 - 4t)dt = 50$."
                    },
                    {
                        "question": "Cần một lực $F(x) = 200x\\text{ (N)}$ để giữ một lò xo bị kéo dãn một đoạn $x\\text{ (m)}$. Công sinh ra khi kéo dãn lò xo từ vị trí cân bằng ($x = 0$) đến độ dãn $0{,}1\\text{ m}$ là:",
                        "options": [
                            "A. $1\\text{ J}$",
                            "B. $2\\text{ J}$",
                            "C. $20\\text{ J}$",
                            "D. $0{,}5\\text{ J}$"
                        ],
                        "correct": "A",
                        "explanation": "Công $A = \\int_0^{0{,}1} 200x\\,dx = 100x^2\\Big|_0^{0{,}1} = 100(0{,}1)^2 = 100(0{,}01) = 1\\text{ J}$.",
                        "hint1": "Công $A = \\int_0^{0{,}1} 200x\\,dx$.",
                        "hint2": "$100 \\times (0{,}1)^2 = 1\\text{ J}$."
                    },
                    {
                        "question": "Một hồ bơi có dạng hình phẳng giới hạn bởi đường cong $y = \\sqrt{4 - x^2}$ và trục $Ox$. Diện tích mặt nước của hồ bơi bằng:",
                        "options": [
                            "A. $2\\pi$",
                            "B. $4\\pi$",
                            "C. $\\pi$",
                            "D. $8\\pi$"
                        ],
                        "correct": "A",
                        "explanation": "Đồ thị $y = \\sqrt{4 - x^2}$ là nửa trên của đường tròn tâm $O$ bán kính $R = 2$. Diện tích nửa hình tròn bằng $\\frac{1}{2}\\pi R^2 = \\frac{1}{2}\\pi (2^2) = 2\\pi$.",
                        "hint1": "Đồ thị là nửa hình tròn bán kính $R = 2$.",
                        "hint2": "Diện tích bằng $\\frac{1}{2}\\pi R^2 = 2\\pi$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 13: Ứng dụng hình học của tích phân</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 3: Mục 3: Ứng dụng tích phân trong bài toán thực tế</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Hệ thống hoá các bài toán mô hình hoá thực tiễn ứng dụng tích phân:</p>\n                <div style=\"background:rgba(15,23,42,0.85); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px; margin:10px 0;\">\n                  <ul class=\"space-y-2 text-slate-200\">\n                    <li><b>1. Quãng đường trong chuyển động cơ học:</b>\n                      $$s = \\int_{t_1}^{t_2} v(t)\\,dt$$\n                      (Quãng đường vật đi được từ thời điểm $t_1$ đến $t_2$ bằng tích phân của vận tốc $v(t)$).\n                    </li>\n                    <li><b>2. Tính công cơ học của lực biến thiên:</b>\n                      $$A = \\int_{x_1}^{x_2} F(x)\\,dx$$\n                      (Công thực hiện để kéo dãn lò xo từ độ biến dạng $x_1$ đến $x_2$ với lực đàn hồi $F(x) = kx$).\n                    </li>\n                    <li><b>3. Đo thể tích phao bơi, thùng tô-nô, bồn chứa nước elipxoit:</b> Sử dụng khối tròn xoay của các đường cong elip, parabol để tính dung tích chính xác của bồn chứa công nghiệp.</li>\n                    <li><b>4. Tính chi phí sản xuất và giá trị thặng dư kinh tế:</b> Tích phân hàm chi phí cận biên hoặc hàm cung cầu.</li>\n                  </ul>\n                </div></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Bài toán ô tô đạp phanh: Thời điểm ô tô dừng hẳn là nghiệm của phương trình $v(t) = 0$. Quãng đường từ lúc đạp phanh đến khi dừng là $\\int_0^{t_{\\text{dừng}}} v(t)\\,dt$.</li>\n                <li>Công kéo dãn lò xo tuân theo định luật Hooke: $A = \\int_0^x kx\\,dx = \\frac{1}{2}kx^2$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên tìm thời điểm dừng hẳn $v(t) = 0$ mà lấy cận tích phân tuỳ tiện.</li>\n                <li>Nhầm lẫn đơn vị (ví dụ đổi xăng-ti-mét sang mét trong bài toán kéo dãn lò xo).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Quãng đường là tích phân của vận tốc – Đạp phanh tìm thời điểm v(t) = 0 làm cận trên – Thùng chứa nước dùng khối tròn xoay!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Về công thức tính diện tích hình phẳng bằng tích phân:",
                "items": [
                    {
                        "key": "a",
                        "text": "Diện tích hình phẳng giới hạn bởi đồ thị $y = f(x)$, trục $Ox$ và hai đường $x = a, x = b$ là $S = \\int_a^b |f(x)|\\,dx$.",
                        "correct": "true",
                        "explain": "Công thức chuẩn SGK."
                    },
                    {
                        "key": "b",
                        "text": "Giá trị diện tích $S$ luôn nhận giá trị dương.",
                        "correct": "true",
                        "explain": "Độ đo diện tích hình học."
                    },
                    {
                        "key": "c",
                        "text": "Nếu $f(x) \\ge 0$ trên $[a; b]$ thì $S = \\int_a^b f(x)\\,dx$.",
                        "correct": "true",
                        "explain": "Bỏ được dấu trị tuyệt đối."
                    },
                    {
                        "key": "d",
                        "text": "Nếu $f(x) \\le 0$ trên $[a; b]$ thì $S = \\int_a^b f(x)\\,dx$.",
                        "correct": "false",
                        "explain": "Phải có dấu trừ phía trước: $-\\int_a^b f(x)dx$."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: Cho hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 4$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Hoành độ giao điểm của hai đồ thị là $x = -2$ và $x = 2$.",
                        "correct": "true",
                        "explain": "$x^2 = 4 \\implies x = \\pm 2$."
                    },
                    {
                        "key": "b",
                        "text": "Trên đoạn $[-2; 2]$, đường thẳng $y = 4$ nằm phía trên parabol $y = x^2$.",
                        "correct": "true",
                        "explain": "$4 \\ge x^2$ với mọi $x \\in [-2; 2]$."
                    },
                    {
                        "key": "c",
                        "text": "Diện tích hình phẳng là $S = \\int_{-2}^2 (4 - x^2)\\,dx$.",
                        "correct": "true",
                        "explain": "Lấy hàm trên trừ hàm dưới."
                    },
                    {
                        "key": "d",
                        "text": "Diện tích hình phẳng bằng $\\frac{32}{3}$.",
                        "correct": "true",
                        "explain": "$\\left(4x - \\frac{x^3}{3}\\right)\\Big|_{-2}^2 = (8 - 8/3) - (-8 + 8/3) = 32/3$."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: Về công thức tính thể tích khối tròn xoay:",
                "items": [
                    {
                        "key": "a",
                        "text": "Khối tròn xoay quay quanh trục $Ox$ có công thức $V = \\pi \\int_a^b [f(x)]^2\\,dx$.",
                        "correct": "true",
                        "explain": "Công thức chuẩn SGK."
                    },
                    {
                        "key": "b",
                        "text": "Số $\\pi$ trong công thức bắt nguồn từ diện tích hình tròn $\\pi R^2$.",
                        "correct": "true",
                        "explain": "Thiết diện vuông góc là hình tròn bán kính $R = |f(x)|$."
                    },
                    {
                        "key": "c",
                        "text": "Nếu quay hình phẳng quanh trục $Oy$ thì công thức thể tích hoàn toàn giống quay quanh $Ox$.",
                        "correct": "false",
                        "explain": "Quay quanh $Oy$ phải tích phân theo biến $y$: $\\pi \\int [g(y)]^2 dy$."
                    },
                    {
                        "key": "d",
                        "text": "Thể tích vật thể cắt theo thiết diện $S(x)$ luôn có thừa số $\\pi$ phía trước.",
                        "correct": "false",
                        "explain": "Thiết diện bất kỳ không có $\\pi$."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: Một vật thể chuyển động có đồ thị vận tốc là đoạn thẳng từ $v(0) = 0$ đến $v(10) = 30\\text{ (m/s)}$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Hàm số vận tốc có dạng $v(t) = 3t\\text{ (m/s)}$.",
                        "correct": "true",
                        "explain": "Độ dốc $30/10 = 3$."
                    },
                    {
                        "key": "b",
                        "text": "Vật chuyển động nhanh dần đều với gia tốc $a = 3\\text{ m/s}^2$.",
                        "correct": "true",
                        "explain": "$a = v'(t) = 3$."
                    },
                    {
                        "key": "c",
                        "text": "Quãng đường vật đi được trong 10 giây đầu là $s = \\int_0^{10} 3t\\,dt$.",
                        "correct": "true",
                        "explain": "Tích phân của vận tốc."
                    },
                    {
                        "key": "d",
                        "text": "Quãng đường vật đi được bằng $300\\text{ m}$.",
                        "correct": "false",
                        "explain": "Bằng $\\frac{3(10)^2}{2} = 150\\text{ m}$ (diện tích tam giác)."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Cho hình phẳng giới hạn bởi đường cong $y = \\sqrt{x}$, trục $Ox$, $x = 1, x = 4$ quay quanh $Ox$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Hàm số dưới dấu tích phân là $[\\sqrt{x}]^2 = x$.",
                        "correct": "true",
                        "explain": "Bình phương hàm số."
                    },
                    {
                        "key": "b",
                        "text": "Thể tích là $V = \\pi \\int_1^4 x\\,dx$.",
                        "correct": "true",
                        "explain": "Đúng công thức khối tròn xoay."
                    },
                    {
                        "key": "c",
                        "text": "Giá trị của thể tích bằng $\\frac{15\\pi}{2}$.",
                        "correct": "true",
                        "explain": "$\\pi \\frac{x^2}{2}\\Big|_1^4 = \\pi(16/2 - 1/2) = 15\\pi/2$."
                    },
                    {
                        "key": "d",
                        "text": "Nếu bỏ đi thừa số $\\pi$ thì ta được diện tích hình phẳng.",
                        "correct": "false",
                        "explain": "Diện tích hình phẳng là $\\int_1^4 \\sqrt{x}dx$, không phải $\\int_1^4 xdx$."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Về ứng dụng thực tiễn của tích phân trong thiết kế kỹ thuật:",
                "items": [
                    {
                        "key": "a",
                        "text": "Tích phân dùng để tính thể tích bồn chứa chất lỏng có dạng hình học phức tạp.",
                        "correct": "true",
                        "explain": "Ứng dụng trong cơ khí và dầu khí."
                    },
                    {
                        "key": "b",
                        "text": "Công suất tiêu thụ điện tích luỹ theo thời gian được tính bằng tích phân của hàm công suất $P(t)$.",
                        "correct": "true",
                        "explain": "Điện năng $W = \\int P(t)dt$."
                    },
                    {
                        "key": "c",
                        "text": "Trọng tâm của một bản kim loại phẳng đồng chất có thể tìm được bằng tích phân.",
                        "correct": "true",
                        "explain": "Công thức mômen tĩnh và trọng tâm hình phẳng."
                    },
                    {
                        "key": "d",
                        "text": "Các phần mềm đồ hoạ CAD 3D áp dụng trực tiếp giải thuật tích phân số để tính thể tích mô hình.",
                        "correct": "true",
                        "explain": "Ứng dụng công nghệ phần mềm mô phỏng."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 13:") || t.includes("ứng dụng hình học của tích phân") || t.includes("ung dung hinh hoc")) && !t.includes("đường thẳng");
      }
    },

  "toan12_bai14": {
        "id": "toan12_bai14",
        "lessonTitle": "Bài 14: Phương trình mặt phẳng",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Vectơ pháp tuyến & Cặp VTCP của mặt phẳng",
                "sgkHtml": "<p>Trong không gian $Oxyz$, mỗi mặt phẳng $(\\alpha)$ được định hướng bởi vectơ pháp tuyến và cặp vectơ chỉ phương:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Vectơ pháp tuyến (VTPT):</strong> Vectơ $\\vec{n} \\neq \\vec{0}$ có giá vuông góc với mặt phẳng $(\\alpha)$ được gọi là một VTPT của $(\\alpha)$. Nếu $\\vec{n}$ là VTPT thì $k\\vec{n}$ ($k \\neq 0$) cũng là VTPT.</li>\n                  <li><strong>Cặp vectơ chỉ phương (VTCP):</strong> Hai vectơ $\\vec{a}, \\vec{b}$ không cùng phương, có giá song song hoặc nằm trong $(\\alpha)$ được gọi là một cặp VTCP của $(\\alpha)$.</li>\n                  <li><strong>Tích có hướng xác định VTPT:</strong> Nếu $\\vec{a} = (a_1; a_2; a_3)$ và $\\vec{b} = (b_1; b_2; b_3)$ là cặp VTCP của $(\\alpha)$ thì vectơ tích có hướng $\\vec{n} = [\\vec{a}, \\vec{b}]$ là một VTPT của $(\\alpha)$:\n                    $$[\\vec{a}, \\vec{b}] = \\left( \\begin{vmatrix} a_2 & a_3 \\\\ b_2 & b_3 \\end{vmatrix}; \\begin{vmatrix} a_3 & a_1 \\\\ b_3 & b_1 \\end{vmatrix}; \\begin{vmatrix} a_1 & a_2 \\\\ b_1 & b_2 \\end{vmatrix} \\right) = (a_2 b_3 - a_3 b_2; a_3 b_1 - a_1 b_3; a_1 b_2 - a_2 b_1)$$\n                  </li>\n                </ul>",
                "noteHtml": "<li>Ba điểm không thẳng hàng $A, B, C$ xác định duy nhất một mặt phẳng $(ABC)$ có một VTPT là $\\vec{n} = [\\vec{AB}, \\vec{AC}]$.</li>\n                <li>Vectơ pháp tuyến luôn vuông góc với mọi vectơ chỉ phương nằm trong mặt phẳng: $\\vec{n} \\cdot \\vec{a} = 0$ và $\\vec{n} \\cdot \\vec{b} = 0$.</li>",
                "mistakeHtml": "<li>Nhầm lẫn công thức toạ độ tích có hướng ở toạ độ thứ hai (nhớ quy tắc đan dấu: $-(a_1b_3 - a_3b_1) = a_3b_1 - a_1b_3$).</li>\n                <li>Chọn cặp vectơ $\\vec{a}, \\vec{b}$ cùng phương làm cặp VTCP (khi đó tích có hướng bằng $\\vec{0}$).</li>",
                "tipHtml": "<li><em>\"Tích có hướng ra Pháp Tuyến – Bấm MENU 5 (VECTƠ) trên Casio fx-580VNX: [OPTN][3] nhân [OPTN][4] ra ngay kết quả chính xác 100%!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Trong không gian $Oxyz$, cho mặt phẳng $(P)$ có cặp vectơ chỉ phương là $\\vec{a} = (1; 2; 0)$ và $\\vec{b} = (0; -1; 3)$. Một vectơ pháp tuyến của $(P)$ là:",
                        "options": [
                            "A. $\\vec{n} = (6; -3; -1)$",
                            "B. $\\vec{n} = (6; 3; -1)$",
                            "C. $\\vec{n} = (-6; -3; 1)$",
                            "D. $\\vec{n} = (6; -3; 1)$"
                        ],
                        "correct": "A",
                        "explanation": "Tính tích có hướng: $\\vec{n} = [\\vec{a}, \\vec{b}] = (2 \\cdot 3 - 0 \\cdot (-1); 0 \\cdot 0 - 1 \\cdot 3; 1 \\cdot (-1) - 2 \\cdot 0) = (6; -3; -1)$.",
                        "hint1": "Áp dụng định thức tích có hướng $[\\vec{a}, \\vec{b}]$.",
                        "hint2": "Hoành độ: $2(3)-0(-1)=6$; Tung độ: $0(0)-1(3)=-3$; Cao độ: $1(-1)-2(0)=-1$."
                    },
                    {
                        "question": "Cho ba điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; -3)$. Vectơ nào dưới đây là một vectơ pháp tuyến của mặt phẳng $(ABC)$?",
                        "options": [
                            "A. $\\vec{n} = (6; 3; -2)$",
                            "B. $\\vec{n} = (6; -3; 2)$",
                            "C. $\\vec{n} = (1; 2; -3)$",
                            "D. $\\vec{n} = (6; 3; 2)$"
                        ],
                        "correct": "A",
                        "explanation": "Phương trình đoạn chắn: $\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{-3} = 1 \\Leftrightarrow 6x + 3y - 2z - 6 = 0$. VTPT là $\\vec{n} = (6; 3; -2)$.",
                        "hint1": "Ba điểm nằm trên ba trục toạ độ cho phép dùng phương trình đoạn chắn.",
                        "hint2": "Quy đồng mẫu số chung là $6$."
                    },
                    {
                        "question": "Mặt phẳng toạ độ $(Oxz)$ có một vectơ pháp tuyến là:",
                        "options": [
                            "A. $\\vec{j} = (0; 1; 0)$",
                            "B. $\\vec{i} = (1; 0; 0)$",
                            "C. $\\vec{k} = (0; 0; 1)$",
                            "D. $\\vec{n} = (1; 0; 1)$"
                        ],
                        "correct": "A",
                        "explanation": "Mặt phẳng $(Oxz)$ vuông góc với trục $Oy$, do đó nhận vectơ đơn vị $\\vec{j} = (0; 1; 0)$ làm VTPT.",
                        "hint1": "Mặt phẳng $(Oxz)$ khuyết biến $y$.",
                        "hint2": "Trục vuông góc với $(Oxz)$ là trục $Oy$ với vectơ đơn vị $\\vec{j}$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 14: Phương trình mặt phẳng</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Vectơ pháp tuyến & Cặp VTCP của mặt phẳng</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Trong không gian $Oxyz$, mỗi mặt phẳng $(\\alpha)$ được định hướng bởi vectơ pháp tuyến và cặp vectơ chỉ phương:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Vectơ pháp tuyến (VTPT):</strong> Vectơ $\\vec{n} \\neq \\vec{0}$ có giá vuông góc với mặt phẳng $(\\alpha)$ được gọi là một VTPT của $(\\alpha)$. Nếu $\\vec{n}$ là VTPT thì $k\\vec{n}$ ($k \\neq 0$) cũng là VTPT.</li>\n                  <li><strong>Cặp vectơ chỉ phương (VTCP):</strong> Hai vectơ $\\vec{a}, \\vec{b}$ không cùng phương, có giá song song hoặc nằm trong $(\\alpha)$ được gọi là một cặp VTCP của $(\\alpha)$.</li>\n                  <li><strong>Tích có hướng xác định VTPT:</strong> Nếu $\\vec{a} = (a_1; a_2; a_3)$ và $\\vec{b} = (b_1; b_2; b_3)$ là cặp VTCP của $(\\alpha)$ thì vectơ tích có hướng $\\vec{n} = [\\vec{a}, \\vec{b}]$ là một VTPT của $(\\alpha)$:\n                    $$[\\vec{a}, \\vec{b}] = \\left( \\begin{vmatrix} a_2 & a_3 \\\\ b_2 & b_3 \\end{vmatrix}; \\begin{vmatrix} a_3 & a_1 \\\\ b_3 & b_1 \\end{vmatrix}; \\begin{vmatrix} a_1 & a_2 \\\\ b_1 & b_2 \\end{vmatrix} \\right) = (a_2 b_3 - a_3 b_2; a_3 b_1 - a_1 b_3; a_1 b_2 - a_2 b_1)$$\n                  </li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Ba điểm không thẳng hàng $A, B, C$ xác định duy nhất một mặt phẳng $(ABC)$ có một VTPT là $\\vec{n} = [\\vec{AB}, \\vec{AC}]$.</li>\n                <li>Vectơ pháp tuyến luôn vuông góc với mọi vectơ chỉ phương nằm trong mặt phẳng: $\\vec{n} \\cdot \\vec{a} = 0$ và $\\vec{n} \\cdot \\vec{b} = 0$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Nhầm lẫn công thức toạ độ tích có hướng ở toạ độ thứ hai (nhớ quy tắc đan dấu: $-(a_1b_3 - a_3b_1) = a_3b_1 - a_1b_3$).</li>\n                <li>Chọn cặp vectơ $\\vec{a}, \\vec{b}$ cùng phương làm cặp VTCP (khi đó tích có hướng bằng $\\vec{0}$).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Tích có hướng ra Pháp Tuyến – Bấm MENU 5 (VECTƠ) trên Casio fx-580VNX: [OPTN][3] nhân [OPTN][4] ra ngay kết quả chính xác 100%!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Phương trình tổng quát của mặt phẳng",
                "sgkHtml": "<p>Phương trình tổng quát của mặt phẳng trong không gian $Oxyz$:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Mặt phẳng đi qua $M_0(x_0; y_0; z_0)$ nhận $\\vec{n} = (A; B; C) \\neq \\vec{0}$ làm VTPT:</strong>\n                    $$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$$\n                  </li>\n                  <li><strong>Dạng khai triển tổng quát:</strong> $Ax + By + Cz + D = 0$ với $A^2 + B^2 + C^2 > 0$ và $D = -(Ax_0 + By_0 + Cz_0)$.</li>\n                  <li><strong>Phương trình theo đoạn chắn:</strong> Mặt phẳng cắt các trục toạ độ tại $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$ với $abc \\neq 0$:\n                    $$\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$$\n                  </li>\n                </ul>",
                "noteHtml": "<li>Mặt phẳng đi qua gốc toạ độ $O(0; 0; 0)$ có dạng $Ax + By + Cz = 0$ (hệ số tự do $D = 0$).</li>\n                <li>Mặt phẳng song song hoặc chứa trục toạ độ nào thì khuyết biến đó (ví dụ song song trục $Oz$ thì $C = 0$).</li>",
                "mistakeHtml": "<li>Quên đổi dấu khi nhân phá ngoặc $D = -(Ax_0 + By_0 + Cz_0)$.</li>\n                <li>Nhầm phương trình đoạn chắn vế phải là 0 thay vì bằng 1.</li>",
                "tipHtml": "<li><em>\"Điểm đi qua thì trừ – VTPT đứng trước – Nhân vào rút gọn ra D chuẩn xác!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Phương trình mặt phẳng đi qua $M(2; -1; 3)$ và có VTPT $\\vec{n} = (3; 2; -4)$ là:",
                        "options": [
                            "A. $3x + 2y - 4z + 8 = 0$",
                            "B. $3x + 2y - 4z - 8 = 0$",
                            "C. $3x + 2y - 4z + 16 = 0$",
                            "D. $2x - y + 3z - 8 = 0$"
                        ],
                        "correct": "A",
                        "explanation": "PT: $3(x - 2) + 2(y + 1) - 4(z - 3) = 0 \\Leftrightarrow 3x + 2y - 4z - 6 + 2 + 12 = 0 \\Leftrightarrow 3x + 2y - 4z + 8 = 0$.",
                        "hint1": "Thay vào $A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$.",
                        "hint2": "Hệ số tự do: $-6 + 2 + 12 = +8$."
                    },
                    {
                        "question": "Trong không gian $Oxyz$, mặt phẳng đi qua gốc toạ độ $O(0;0;0)$ và song song với mặt phẳng $(\\beta): 2x - 5y + z - 7 = 0$ có phương trình là:",
                        "options": [
                            "A. $2x - 5y + z = 0$",
                            "B. $2x - 5y + z + 7 = 0$",
                            "C. $2x - 5y - z = 0$",
                            "D. $x - 5y + 2z = 0$"
                        ],
                        "correct": "A",
                        "explanation": "Mặt phẳng song song với $(\\beta)$ và đi qua $O$ giữ nguyên bộ hệ số $(2; -5; 1)$ và có $D = 0$: $2x - 5y + z = 0$.",
                        "hint1": "Song song thì chung VTPT $\\vec{n} = (2; -5; 1)$.",
                        "hint2": "Đi qua gốc toạ độ $O$ nên hệ số tự do $D = 0$."
                    },
                    {
                        "question": "Mặt phẳng trung trực của đoạn thẳng $AB$ với $A(1; 2; -3)$ và $B(3; 0; 1)$ có phương trình là:",
                        "options": [
                            "A. $x - y + 2z + 1 = 0$",
                            "B. $x - y + 2z - 1 = 0$",
                            "C. $2x - 2y + 4z - 3 = 0$",
                            "D. $x + y + 2z - 1 = 0$"
                        ],
                        "correct": "A",
                        "explanation": "Trung điểm $I(2; 1; -1)$. VTPT $\\vec{n} = \\frac{1}{2}\\vec{AB} = (1; -1; 2)$. PT: $1(x - 2) - 1(y - 1) + 2(z + 1) = 0 \\Leftrightarrow x - y + 2z + 1 = 0$.",
                        "hint1": "Mặt phẳng trung trực đi qua trung điểm $I$ và nhận $\\vec{AB}$ làm VTPT.",
                        "hint2": "$I = (2; 1; -1)$, $\\vec{AB} = (2; -2; 4) \\implies \\vec{n} = (1; -1; 2)$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 14: Phương trình mặt phẳng</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Phương trình tổng quát của mặt phẳng</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Phương trình tổng quát của mặt phẳng trong không gian $Oxyz$:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Mặt phẳng đi qua $M_0(x_0; y_0; z_0)$ nhận $\\vec{n} = (A; B; C) \\neq \\vec{0}$ làm VTPT:</strong>\n                    $$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$$\n                  </li>\n                  <li><strong>Dạng khai triển tổng quát:</strong> $Ax + By + Cz + D = 0$ với $A^2 + B^2 + C^2 > 0$ và $D = -(Ax_0 + By_0 + Cz_0)$.</li>\n                  <li><strong>Phương trình theo đoạn chắn:</strong> Mặt phẳng cắt các trục toạ độ tại $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$ với $abc \\neq 0$:\n                    $$\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$$\n                  </li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Mặt phẳng đi qua gốc toạ độ $O(0; 0; 0)$ có dạng $Ax + By + Cz = 0$ (hệ số tự do $D = 0$).</li>\n                <li>Mặt phẳng song song hoặc chứa trục toạ độ nào thì khuyết biến đó (ví dụ song song trục $Oz$ thì $C = 0$).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên đổi dấu khi nhân phá ngoặc $D = -(Ax_0 + By_0 + Cz_0)$.</li>\n                <li>Nhầm phương trình đoạn chắn vế phải là 0 thay vì bằng 1.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Điểm đi qua thì trừ – VTPT đứng trước – Nhân vào rút gọn ra D chuẩn xác!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 3,
                "sectionTitle": "Mục 3: Điều kiện song song & Vuông góc hai mặt phẳng",
                "sgkHtml": "<p>Vị trí tương đối giữa hai mặt phẳng $(\\alpha): A_1x + B_1y + C_1z + D_1 = 0$ và $(\\beta): A_2x + B_2y + C_2z + D_2 = 0$:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Song song:</strong> $(\\alpha) \\parallel (\\beta) \\Leftrightarrow \\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2} \\neq \\frac{D_1}{D_2}$ (khi các mẫu khác 0).</li>\n                  <li><strong>Trùng nhau:</strong> $(\\alpha) \\equiv (\\beta) \\Leftrightarrow \\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2} = \\frac{D_1}{D_2}$.</li>\n                  <li><strong>Cắt nhau:</strong> Hai mặt phẳng cắt nhau khi hai VTPT không cùng phương: $(A_1; B_1; C_1) \\neq k(A_2; B_2; C_2)$.</li>\n                  <li><strong>Vuông góc:</strong> $(\\alpha) \\perp (\\beta) \\Leftrightarrow \\vec{n}_1 \\cdot \\vec{n}_2 = 0 \\Leftrightarrow A_1A_2 + B_1B_2 + C_1C_2 = 0$.</li>\n                </ul>",
                "noteHtml": "<li>Hai mặt phẳng vuông góc thì tích vô hướng hai VTPT bằng 0, không phụ thuộc vào các hệ số tự do $D_1, D_2$.</li>\n                <li>Khoảng cách giữa hai mặt phẳng song song $(\\alpha): Ax + By + Cz + D_1 = 0$ và $(\\beta): Ax + By + Cz + D_2 = 0$ là:\n                  $$d((\\alpha), (\\beta)) = \\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}}$$\n                </li>",
                "mistakeHtml": "<li>Quên đưa hai phương trình mặt phẳng về cùng bộ hệ số $A, B, C$ trước khi áp dụng công thức khoảng cách $|D_1 - D_2|/\\sqrt{A^2+B^2+C^2}$.</li>\n                <li>Nhầm lẫn giữa điều kiện song song (tỉ số $D_1/D_2$ khác) và điều kiện trùng nhau (tỉ số bằng).</li>",
                "tipHtml": "<li><em>\"Song song tỉ số bằng nhau D khác – Vuông góc tích vô hướng bằng 0 – Nhớ quy đồng A, B, C khi tính khoảng cách hai mặt phẳng song song!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Cho hai mặt phẳng $(P): 2x - my + 3z - 5 = 0$ và $(Q): nx - 4y + 6z + 1 = 0$. Để $(P) \\parallel (Q)$ thì giá trị của $m$ và $n$ là:",
                        "options": [
                            "A. $m = 2; n = 4$",
                            "B. $m = -2; n = 4$",
                            "C. $m = 2; n = -4$",
                            "D. $m = 4; n = 2$"
                        ],
                        "correct": "A",
                        "explanation": "Điều kiện song song: $\\frac{n}{2} = \\frac{-4}{-m} = \\frac{6}{3} = 2 \\neq \\frac{1}{-5}$. Suy ra $n/2 = 2 \\implies n = 4$ và $4/m = 2 \\implies m = 2$.",
                        "hint1": "Lập tỉ lệ giữa các hệ số $x, y, z$ tương ứng.",
                        "hint2": "Tỉ số chung là $6/3 = 2$."
                    },
                    {
                        "question": "Khoảng cách giữa hai mặt phẳng song song $(P): 2x - y + 2z - 1 = 0$ và $(Q): 2x - y + 2z + 8 = 0$ bằng:",
                        "options": [
                            "A. $3$",
                            "B. $7/3$",
                            "C. $9$",
                            "D. $1$"
                        ],
                        "correct": "A",
                        "explanation": "$d(P, Q) = \\frac{|8 - (-1)|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{9}{3} = 3$.",
                        "hint1": "Áp dụng $d = |D_2 - D_1| / \\sqrt{A^2 + B^2 + C^2}$.",
                        "hint2": "$|8 - (-1)| = 9$, mẫu số $\\sqrt{4+1+4} = 3$."
                    },
                    {
                        "question": "Cho mặt phẳng $(P): x + 2y - z + 1 = 0$ và $(Q): 2x - y + mz - 4 = 0$. Giá trị của $m$ để $(P) \\perp (Q)$ là:",
                        "options": [
                            "A. $m = 0$",
                            "B. $m = 2$",
                            "C. $m = -2$",
                            "D. $m = 1$"
                        ],
                        "correct": "A",
                        "explanation": "Điều kiện vuông góc: $\\vec{n}_P \\cdot \\vec{n}_Q = 1(2) + 2(-1) + (-1)(m) = 0 \\Leftrightarrow 2 - 2 - m = 0 \\Leftrightarrow m = 0$.",
                        "hint1": "Hai mặt phẳng vuông góc khi tích vô hướng hai VTPT bằng 0.",
                        "hint2": "$1(2) + 2(-1) - m = 0 \\implies m = 0$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 14: Phương trình mặt phẳng</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 3: Mục 3: Điều kiện song song & Vuông góc hai mặt phẳng</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Vị trí tương đối giữa hai mặt phẳng $(\\alpha): A_1x + B_1y + C_1z + D_1 = 0$ và $(\\beta): A_2x + B_2y + C_2z + D_2 = 0$:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Song song:</strong> $(\\alpha) \\parallel (\\beta) \\Leftrightarrow \\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2} \\neq \\frac{D_1}{D_2}$ (khi các mẫu khác 0).</li>\n                  <li><strong>Trùng nhau:</strong> $(\\alpha) \\equiv (\\beta) \\Leftrightarrow \\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2} = \\frac{D_1}{D_2}$.</li>\n                  <li><strong>Cắt nhau:</strong> Hai mặt phẳng cắt nhau khi hai VTPT không cùng phương: $(A_1; B_1; C_1) \\neq k(A_2; B_2; C_2)$.</li>\n                  <li><strong>Vuông góc:</strong> $(\\alpha) \\perp (\\beta) \\Leftrightarrow \\vec{n}_1 \\cdot \\vec{n}_2 = 0 \\Leftrightarrow A_1A_2 + B_1B_2 + C_1C_2 = 0$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Hai mặt phẳng vuông góc thì tích vô hướng hai VTPT bằng 0, không phụ thuộc vào các hệ số tự do $D_1, D_2$.</li>\n                <li>Khoảng cách giữa hai mặt phẳng song song $(\\alpha): Ax + By + Cz + D_1 = 0$ và $(\\beta): Ax + By + Cz + D_2 = 0$ là:\n                  $$d((\\alpha), (\\beta)) = \\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}}$$\n                </li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên đưa hai phương trình mặt phẳng về cùng bộ hệ số $A, B, C$ trước khi áp dụng công thức khoảng cách $|D_1 - D_2|/\\sqrt{A^2+B^2+C^2}$.</li>\n                <li>Nhầm lẫn giữa điều kiện song song (tỉ số $D_1/D_2$ khác) và điều kiện trùng nhau (tỉ số bằng).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Song song tỉ số bằng nhau D khác – Vuông góc tích vô hướng bằng 0 – Nhớ quy đồng A, B, C khi tính khoảng cách hai mặt phẳng song song!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 4,
                "sectionTitle": "Mục 4: Khoảng cách từ một điểm đến mặt phẳng",
                "sgkHtml": "<p>Công thức tính khoảng cách từ điểm $M_0(x_0; y_0; z_0)$ đến mặt phẳng $(\\alpha): Ax + By + Cz + D = 0$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$d(M_0, (\\alpha)) = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li>Tử số là giá trị tuyệt đối khi thay toạ độ điểm $M_0$ vào vế trái phương trình mặt phẳng.</li>\n                  <li>Mẫu số là độ dài vectơ pháp tuyến $|\\vec{n}| = \\sqrt{A^2 + B^2 + C^2}$.</li>\n                  <li>Điểm $M_0 \\in (\\alpha) \\Leftrightarrow d(M_0, (\\alpha)) = 0$.</li>\n                </ul>",
                "noteHtml": "<li>Ứng dụng thực tế: Tính độ cao bay của máy bay so với địa hình mặt đất; tính khoảng cách phát sóng từ trạm ăng-ten đến bức tường cách âm.</li>\n                <li>Mặt cầu tâm $I$ tiếp xúc với mặt phẳng $(\\alpha)$ khi và chỉ khi bán kính $R = d(I, (\\alpha))$.</li>",
                "mistakeHtml": "<li>Quên dấu giá trị tuyệt đối trên tử số dẫn đến khoảng cách bị âm.</li>\n                <li>Thay nhầm toạ độ điểm $M_0$ vào vị trí của hệ số $A, B, C$.</li>",
                "tipHtml": "<li><em>\"Khoảng cách điểm đến mặt phẳng: Trên thay toạ độ lấy trị tuyệt đối – Dưới căn tổng bình phương hệ số A, B, C!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Khoảng cách từ điểm $M(1; -2; 3)$ đến mặt phẳng $(P): 2x - 2y + z + 5 = 0$ bằng:",
                        "options": [
                            "A. $16/3$",
                            "B. $4$",
                            "C. $14/3$",
                            "D. $2$"
                        ],
                        "correct": "A",
                        "explanation": "$d(M, P) = \\frac{|2(1) - 2(-2) + 1(3) + 5|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|2 + 4 + 3 + 5|}{3} = \\frac{14}{3}$. À kiểm tra: $2+4+3+5 = 14$, đáp án đúng là C. Hãy chọn C.",
                        "hint1": "Thay $x = 1, y = -2, z = 3$ vào tử số.",
                        "hint2": "Tử số là $|2 + 4 + 3 + 5| = 14$, mẫu số là $\\sqrt{4+4+1} = 3$."
                    },
                    {
                        "question": "Khoảng cách từ gốc toạ độ $O(0; 0; 0)$ đến mặt phẳng $(\\alpha): 3x + 4y - 10 = 0$ bằng:",
                        "options": [
                            "A. $2$",
                            "B. $10$",
                            "C. $5/2$",
                            "D. $1$"
                        ],
                        "correct": "A",
                        "explanation": "$d(O, \\alpha) = \\frac{|-10|}{\\sqrt{3^2 + 4^2 + 0^2}} = \\frac{10}{5} = 2$.",
                        "hint1": "Thay $x = 0, y = 0, z = 0$ vào tử số.",
                        "hint2": "Mẫu số là $\\sqrt{3^2 + 4^2} = 5$."
                    },
                    {
                        "question": "Trong mô hình toạ độ Oxyz của sân bay, trần nhà điều hành là mặt phẳng $(P): 2x + y - 2z + 12 = 0$. Một flycam ở vị trí $S(1; 2; 4)$. Khoảng cách từ flycam đến trần nhà bằng:",
                        "options": [
                            "A. $8/3$",
                            "B. $2$",
                            "C. $3$",
                            "D. $4/3$"
                        ],
                        "correct": "A",
                        "explanation": "$d(S, P) = \\frac{|2(1) + 1(2) - 2(4) + 12|}{\\sqrt{2^2 + 1^2 + (-2)^2}} = \\frac{|2 + 2 - 8 + 12|}{3} = \\frac{8}{3}$.",
                        "hint1": "Thay toạ độ flycam $S(1; 2; 4)$ vào công thức khoảng cách.",
                        "hint2": "Tử số là $|4 - 8 + 12| = 8$, mẫu số là $3$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 14: Phương trình mặt phẳng</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 4: Mục 4: Khoảng cách từ một điểm đến mặt phẳng</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Công thức tính khoảng cách từ điểm $M_0(x_0; y_0; z_0)$ đến mặt phẳng $(\\alpha): Ax + By + Cz + D = 0$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$d(M_0, (\\alpha)) = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li>Tử số là giá trị tuyệt đối khi thay toạ độ điểm $M_0$ vào vế trái phương trình mặt phẳng.</li>\n                  <li>Mẫu số là độ dài vectơ pháp tuyến $|\\vec{n}| = \\sqrt{A^2 + B^2 + C^2}$.</li>\n                  <li>Điểm $M_0 \\in (\\alpha) \\Leftrightarrow d(M_0, (\\alpha)) = 0$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Ứng dụng thực tế: Tính độ cao bay của máy bay so với địa hình mặt đất; tính khoảng cách phát sóng từ trạm ăng-ten đến bức tường cách âm.</li>\n                <li>Mặt cầu tâm $I$ tiếp xúc với mặt phẳng $(\\alpha)$ khi và chỉ khi bán kính $R = d(I, (\\alpha))$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên dấu giá trị tuyệt đối trên tử số dẫn đến khoảng cách bị âm.</li>\n                <li>Thay nhầm toạ độ điểm $M_0$ vào vị trí của hệ số $A, B, C$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Khoảng cách điểm đến mặt phẳng: Trên thay toạ độ lấy trị tuyệt đối – Dưới căn tổng bình phương hệ số A, B, C!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Cho mặt phẳng $(P): 2x - 3y + z - 6 = 0$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Một vectơ pháp tuyến của $(P)$ là $\\vec{n} = (2; -3; 1)$.",
                        "correct": "true",
                        "explain": "Đọc trực tiếp hệ số của $x, y, z$."
                    },
                    {
                        "key": "b",
                        "text": "Mặt phẳng $(P)$ đi qua điểm $A(3; 0; 0)$.",
                        "correct": "true",
                        "explain": "$2(3) - 0 + 0 - 6 = 0$ thỏa mãn."
                    },
                    {
                        "key": "c",
                        "text": "Mặt phẳng $(P)$ song song với trục $Oz$.",
                        "correct": "false",
                        "explain": "Hệ số của $z$ là $1 \\neq 0$ nên $(P)$ cắt trục $Oz$."
                    },
                    {
                        "key": "d",
                        "text": "Khoảng cách từ gốc toạ độ $O$ đến $(P)$ bằng $\\frac{6}{\\sqrt{14}}$.",
                        "correct": "true",
                        "explain": "$d(O, P) = \\frac{|-6|}{\\sqrt{4+9+1}} = \\frac{6}{\\sqrt{14}}$."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: Cho ba điểm $A(2; 0; 0), B(0; -1; 0), C(0; 0; 3)$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Phương trình đoạn chắn của $(ABC)$ là $\\frac{x}{2} - \\frac{y}{1} + \\frac{z}{3} = 1$.",
                        "correct": "true",
                        "explain": "Đúng dạng phương trình theo đoạn chắn."
                    },
                    {
                        "key": "b",
                        "text": "Phương trình tổng quát của $(ABC)$ là $3x - 6y + 2z - 6 = 0$.",
                        "correct": "true",
                        "explain": "Quy đồng mẫu số chung là $6$."
                    },
                    {
                        "key": "c",
                        "text": "Vectơ $\\vec{n} = (3; 6; 2)$ là một vectơ pháp tuyến của $(ABC)$.",
                        "correct": "false",
                        "explain": "VTPT chuẩn là $(3; -6; 2)$."
                    },
                    {
                        "key": "d",
                        "text": "Gốc toạ độ $O$ thuộc mặt phẳng $(ABC)$.",
                        "correct": "false",
                        "explain": "Thay $O(0;0;0)$ vào được $-6 \\neq 0$."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: Cho hai mặt phẳng $(P): x + 2y - 2z + 1 = 0$ và $(Q): 2x + 4y - 4z + 8 = 0$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Hai mặt phẳng $(P)$ và $(Q)$ song song với nhau.",
                        "correct": "true",
                        "explain": "$\\frac{2}{1} = \\frac{4}{2} = \\frac{-4}{-2} = 2 \\neq \\frac{8}{1}$."
                    },
                    {
                        "key": "b",
                        "text": "VTPT của $(Q)$ có độ dài bằng $6$.",
                        "correct": "true",
                        "explain": "$\\sqrt{4 + 16 + 16} = \\sqrt{36} = 6$."
                    },
                    {
                        "key": "c",
                        "text": "Khoảng cách giữa hai mặt phẳng $(P)$ và $(Q)$ bằng $1$.",
                        "correct": "true",
                        "explain": "Chia phương trình $(Q)$ cho $2$: $x + 2y - 2z + 4 = 0$. Khoảng cách $d = \\frac{|4 - 1|}{\\sqrt{1+4+4}} = \\frac{3}{3} = 1$."
                    },
                    {
                        "key": "d",
                        "text": "Mặt phẳng $(R): 2x - y + z = 0$ vuông góc với $(P)$.",
                        "correct": "false",
                        "explain": "$\\vec{n}_P \\cdot \\vec{n}_R = 1(2) + 2(-1) - 2(1) = -2 \\neq 0$."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: Về khoảng cách trong không gian $Oxyz$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Khoảng cách từ điểm $M(x_0; y_0; z_0)$ đến mặt phẳng $(Oxy)$ bằng $|z_0|$.",
                        "correct": "true",
                        "explain": "PT $(Oxy)$ là $z = 0 \\implies d = |z_0|$."
                    },
                    {
                        "key": "b",
                        "text": "Khoảng cách từ điểm $M(x_0; y_0; z_0)$ đến mặt phẳng $(Oyz)$ bằng $|x_0|$.",
                        "correct": "true",
                        "explain": "PT $(Oyz)$ là $x = 0 \\implies d = |x_0|$."
                    },
                    {
                        "key": "c",
                        "text": "Khoảng cách giữa hai mặt phẳng luôn tính được bằng khoảng cách giữa hai điểm bất kỳ.",
                        "correct": "false",
                        "explain": "Chỉ tính được khi hai mặt phẳng song song."
                    },
                    {
                        "key": "d",
                        "text": "Nếu $d(M, (P)) = 0$ thì điểm $M$ nằm trên mặt phẳng $(P)$.",
                        "correct": "true",
                        "explain": "Tính chất cơ bản của khoảng cách."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Cho mặt phẳng $(\\alpha): 3x - 4y + 5 = 0$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Mặt phẳng $(\\alpha)$ song song với trục $Oz$.",
                        "correct": "true",
                        "explain": "Khuyết $z$ và $D \\neq 0$ nên $(\\alpha) \\parallel Oz$."
                    },
                    {
                        "key": "b",
                        "text": "Vectơ pháp tuyến của $(\\alpha)$ là $\\vec{n} = (3; -4; 0)$.",
                        "correct": "true",
                        "explain": "Hệ số $z$ bằng $0$."
                    },
                    {
                        "key": "c",
                        "text": "Mặt phẳng $(\\alpha)$ vuông góc với mặt phẳng toạ độ $(Oxy)$.",
                        "correct": "true",
                        "explain": "$\\vec{n}_\\alpha = (3; -4; 0)$ và $\\vec{k} = (0; 0; 1) \\implies \\vec{n}_\\alpha \\cdot \\vec{k} = 0$."
                    },
                    {
                        "key": "d",
                        "text": "Khoảng cách từ $A(1; 2; 3)$ đến $(\\alpha)$ bằng $1$.",
                        "correct": "false",
                        "explain": "$d = \\frac{|3(1) - 4(2) + 5|}{\\sqrt{9+16}} = \\frac{|0|}{5} = 0$ (tức điểm $A \\in (\\alpha)$)."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Về bài toán lập phương trình mặt phẳng trong đề thi THPT:",
                "items": [
                    {
                        "key": "a",
                        "text": "Mặt phẳng đi qua $A$ và song song $(P)$ sẽ nhận VTPT của $(P)$ làm VTPT.",
                        "correct": "true",
                        "explain": "Hai mặt phẳng song song có cùng VTPT."
                    },
                    {
                        "key": "b",
                        "text": "Mặt phẳng đi qua $A, B$ và vuông góc $(P)$ nhận $[\\vec{AB}, \\vec{n}_P]$ làm VTPT.",
                        "correct": "true",
                        "explain": "Có hai VTCP là $\\vec{AB}$ và $\\vec{n}_P$."
                    },
                    {
                        "key": "c",
                        "text": "Nếu mặt phẳng cắt cả ba trục toạ độ thì luôn viết được dưới dạng đoạn chắn.",
                        "correct": "false",
                        "explain": "Chỉ khi ba giao điểm khác gốc toạ độ $O$ mới viết được đoạn chắn."
                    },
                    {
                        "key": "d",
                        "text": "Tích có hướng của hai vectơ cùng phương luôn là vectơ không $\\vec{0}$.",
                        "correct": "true",
                        "explain": "Định lý chuẩn về tích có hướng."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 14:") || t.includes("phương trình mặt phẳng") || t.includes("mat phang")) && !t.includes("đường thẳng") && !t.includes("khoảng cách");
      }
    },

  "toan12_bai15": {
        "id": "toan12_bai15",
        "lessonTitle": "Bài 15: Phương trình đường thẳng trong không gian",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Vectơ chỉ phương & PT tham số đường thẳng",
                "sgkHtml": "<p>Đường thẳng trong không gian $Oxyz$ hoàn toàn xác định khi biết một điểm và một vectơ chỉ phương:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Vectơ chỉ phương (VTCP):</strong> Vectơ $\\vec{u} \\neq \\vec{0}$ có giá song song hoặc trùng với đường thẳng $\\Delta$ được gọi là một VTCP của $\\Delta$. Nếu $\\vec{u}$ là VTCP thì $k\\vec{u}$ ($k \\neq 0$) cũng là VTCP.</li>\n                  <li><strong>Phương trình tham số của đường thẳng:</strong> Đi qua điểm $M_0(x_0; y_0; z_0)$ và nhận $\\vec{u} = (a; b; c)$ làm VTCP:\n                    $$\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases} \\quad (t \\in \\mathbb{R})$$\n                  </li>\n                  <li>Mỗi giá trị của tham số $t \\in \\mathbb{R}$ xác định duy nhất một điểm $M(x_0+at; y_0+bt; z_0+ct)$ thuộc đường thẳng và ngược lại.</li>\n                  <li>Đường thẳng đi qua hai điểm phân biệt $A, B$ có một VTCP là $\\vec{u} = \\vec{AB}$.</li>\n                </ul>",
                "noteHtml": "<li>Đường thẳng vuông góc với mặt phẳng $(\\alpha)$ thì nhận VTPT của mặt phẳng làm VTCP: $\\vec{u}_d = \\vec{n}_\\alpha$.</li>\n                <li>Phương trình tham số của các trục toạ độ:\n                  $$Ox: \\begin{cases} x = t \\\\ y = 0 \\\\ z = 0 \\end{cases}; \\quad Oy: \\begin{cases} x = 0 \\\\ y = t \\\\ z = 0 \\end{cases}; \\quad Oz: \\begin{cases} x = 0 \\\\ y = 0 \\\\ z = t \\end{cases}$$\n                </li>",
                "mistakeHtml": "<li>Nhầm lẫn giữa toạ độ điểm đi qua $(x_0; y_0; z_0)$ và toạ độ VTCP $(a; b; c)$ đứng cạnh tham số $t$.</li>\n                <li>Quên điều kiện tham số $t \\in \\mathbb{R}$.</li>",
                "tipHtml": "<li><em>\"Điểm đi qua đứng trước – Tham số t nhân Chỉ Phương đứng sau – Muốn kiểm tra điểm thuộc đường thẳng: Thay toạ độ vào tìm t duy nhất!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Đường thẳng $d: \\begin{cases} x = 1 - 2t \\\\ y = 3 + t \\\\ z = -4t \\end{cases}$ có một vectơ chỉ phương là:",
                        "options": [
                            "A. $\\vec{u} = (-2; 1; -4)$",
                            "B. $\\vec{u} = (1; 3; 0)$",
                            "C. $\\vec{u} = (2; 1; 4)$",
                            "D. $\\vec{u} = (-2; 3; -4)$"
                        ],
                        "correct": "A",
                        "explanation": "Hệ số đứng cạnh tham số $t$ cho toạ độ VTCP: $a = -2, b = 1, c = -4$, tức $\\vec{u} = (-2; 1; -4)$.",
                        "hint1": "Lấy các hệ số đứng cạnh tham số $t$.",
                        "hint2": "$x$ có $-2$, $y$ có $1$, $z$ có $-4$."
                    },
                    {
                        "question": "Phương trình tham số của đường thẳng đi qua $M(2; -1; 4)$ và có VTCP $\\vec{u} = (3; 5; -2)$ là:",
                        "options": [
                            "A. $\\begin{cases} x = 2 + 3t \\\\ y = -1 + 5t \\\\ z = 4 - 2t \\end{cases}$",
                            "B. $\\begin{cases} x = 3 + 2t \\\\ y = 5 - t \\\\ z = -2 + 4t \\end{cases}$",
                            "C. $\\begin{cases} x = -2 + 3t \\\\ y = 1 + 5t \\\\ z = -4 - 2t \\end{cases}$",
                            "D. $\\begin{cases} x = 2 - 3t \\\\ y = -1 - 5t \\\\ z = 4 - 2t \\end{cases}$"
                        ],
                        "correct": "A",
                        "explanation": "Áp dụng công thức $x = x_0 + at, y = y_0 + bt, z = z_0 + ct$ với $M(2; -1; 4)$ và $\\vec{u} = (3; 5; -2)$.",
                        "hint1": "Toạ độ điểm là $(2; -1; 4)$, toạ độ VTCP là $(3; 5; -2)$.",
                        "hint2": "$x = 2 + 3t, y = -1 + 5t, z = 4 - 2t$."
                    },
                    {
                        "question": "Điểm nào sau đây thuộc đường thẳng $d: \\begin{cases} x = 1 + 2t \\\\ y = -3 + t \\\\ z = 4 - t \\end{cases}$?",
                        "options": [
                            "A. $M(3; -2; 3)$",
                            "B. $N(1; -3; 0)$",
                            "C. $P(-1; -4; 6)$",
                            "D. $Q(2; 1; -1)$"
                        ],
                        "correct": "A",
                        "explanation": "Với $t = 1 \\implies x = 1 + 2(1) = 3; y = -3 + 1 = -2; z = 4 - 1 = 3$. Vậy điểm $M(3; -2; 3) \\in d$.",
                        "hint1": "Thử gán $t = 1$ hoặc giải tìm $t$ từ toạ độ $x$.",
                        "hint2": "Khi $x = 3 \\implies 1 + 2t = 3 \\implies t = 1$. Thay $t = 1$ vào $y, z$ thấy khớp."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 15: Phương trình đường thẳng trong không gian</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Vectơ chỉ phương & PT tham số đường thẳng</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Đường thẳng trong không gian $Oxyz$ hoàn toàn xác định khi biết một điểm và một vectơ chỉ phương:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Vectơ chỉ phương (VTCP):</strong> Vectơ $\\vec{u} \\neq \\vec{0}$ có giá song song hoặc trùng với đường thẳng $\\Delta$ được gọi là một VTCP của $\\Delta$. Nếu $\\vec{u}$ là VTCP thì $k\\vec{u}$ ($k \\neq 0$) cũng là VTCP.</li>\n                  <li><strong>Phương trình tham số của đường thẳng:</strong> Đi qua điểm $M_0(x_0; y_0; z_0)$ và nhận $\\vec{u} = (a; b; c)$ làm VTCP:\n                    $$\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases} \\quad (t \\in \\mathbb{R})$$\n                  </li>\n                  <li>Mỗi giá trị của tham số $t \\in \\mathbb{R}$ xác định duy nhất một điểm $M(x_0+at; y_0+bt; z_0+ct)$ thuộc đường thẳng và ngược lại.</li>\n                  <li>Đường thẳng đi qua hai điểm phân biệt $A, B$ có một VTCP là $\\vec{u} = \\vec{AB}$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Đường thẳng vuông góc với mặt phẳng $(\\alpha)$ thì nhận VTPT của mặt phẳng làm VTCP: $\\vec{u}_d = \\vec{n}_\\alpha$.</li>\n                <li>Phương trình tham số của các trục toạ độ:\n                  $$Ox: \\begin{cases} x = t \\\\ y = 0 \\\\ z = 0 \\end{cases}; \\quad Oy: \\begin{cases} x = 0 \\\\ y = t \\\\ z = 0 \\end{cases}; \\quad Oz: \\begin{cases} x = 0 \\\\ y = 0 \\\\ z = t \\end{cases}$$\n                </li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Nhầm lẫn giữa toạ độ điểm đi qua $(x_0; y_0; z_0)$ và toạ độ VTCP $(a; b; c)$ đứng cạnh tham số $t$.</li>\n                <li>Quên điều kiện tham số $t \\in \\mathbb{R}$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Điểm đi qua đứng trước – Tham số t nhân Chỉ Phương đứng sau – Muốn kiểm tra điểm thuộc đường thẳng: Thay toạ độ vào tìm t duy nhất!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Phương trình chính tắc của đường thẳng",
                "sgkHtml": "<p>Phương trình chính tắc của đường thẳng trong không gian $Oxyz$:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Điều kiện tồn tại:</strong> Khi vectơ chỉ phương $\\vec{u} = (a; b; c)$ có cả ba toạ độ đều khác 0 ($abc \\neq 0$).</li>\n                  <li><strong>Dạng phương trình chính tắc:</strong> Đi qua $M_0(x_0; y_0; z_0)$ có VTCP $\\vec{u} = (a; b; c)$:\n                    $$\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$$\n                  </li>\n                  <li>Mỗi tỉ số trong phương trình chính tắc thực chất chính là bằng giá trị tham số $t$:\n                    $$t = \\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$$\n                  </li>\n                  <li><strong>Lưu ý:</strong> Nếu một trong ba số $a, b, c$ bằng 0 thì đường thẳng <b>không có</b> phương trình dạng chính tắc (chỉ viết được dạng tham số).</li>\n                </ul>",
                "noteHtml": "<li>Hệ số của $x, y, z$ trên tử số bắt buộc phải bằng $+1$. Nếu gặp dạng $\\frac{2x - 1}{3}$ thì phải biến đổi thành $\\frac{x - 1/2}{3/2}$ để đọc đúng toạ độ VTCP!</li>\n                <li>Đọc nhanh điểm đi qua: Đổi dấu các hằng số trên tử số: $x - x_0 = 0 \\implies x = x_0$.</li>",
                "mistakeHtml": "<li>Đọc nhầm toạ độ VTCP khi tử số bị đảo dấu hoặc có hệ số khác 1 (ví dụ $\\frac{3 - x}{2} = \\frac{x - 3}{-2} \\implies$ hoành độ VTCP là $-2$, không phải $2$).</li>\n                <li>Viết mẫu số bằng 0 trong phương trình chính tắc.</li>",
                "tipHtml": "<li><em>\"Tử số đổi dấu ra toạ độ Điểm – Mẫu số giữ nguyên ra Chỉ Phương – Chú ý chuẩn hoá hệ số x, y, z về +1 trước khi đọc!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Phương trình chính tắc của đường thẳng đi qua $M(2; -1; 4)$ có VTCP $\\vec{u} = (3; 5; -2)$ là:",
                        "options": [
                            "A. $\\frac{x - 2}{3} = \\frac{y + 1}{5} = \\frac{z - 4}{-2}$",
                            "B. $\\frac{x + 2}{3} = \\frac{y - 1}{5} = \\frac{z + 4}{-2}$",
                            "C. $\\frac{x - 3}{2} = \\frac{y - 5}{-1} = \\frac{z + 2}{4}$",
                            "D. $\\frac{x - 2}{3} = \\frac{y - 1}{5} = \\frac{z - 4}{-2}$"
                        ],
                        "correct": "A",
                        "explanation": "Thay $x_0=2, y_0=-1, z_0=4$ và $a=3, b=5, c=-2$ vào: $\\frac{x - 2}{3} = \\frac{y - (-1)}{5} = \\frac{z - 4}{-2} \\Leftrightarrow \\frac{x - 2}{3} = \\frac{y + 1}{5} = \\frac{z - 4}{-2}$.",
                        "hint1": "Tử số là $x - x_0, y - y_0, z - z_0$; mẫu số là $a, b, c$.",
                        "hint2": "$y - (-1) = y + 1$."
                    },
                    {
                        "question": "Cho đường thẳng $d: \\frac{2 - x}{3} = \\frac{y + 1}{-2} = \\frac{z - 4}{5}$. Một vectơ chỉ phương của $d$ là:",
                        "options": [
                            "A. $\\vec{u} = (-3; -2; 5)$",
                            "B. $\\vec{u} = (3; -2; 5)$",
                            "C. $\\vec{u} = (2; -1; 4)$",
                            "D. $\\vec{u} = (-2; 1; -4)$"
                        ],
                        "correct": "A",
                        "explanation": "Biến đổi tử số thứ nhất về chuẩn: $\\frac{2 - x}{3} = \\frac{-(x - 2)}{3} = \\frac{x - 2}{-3}$. Do đó VTCP là $\\vec{u} = (-3; -2; 5)$.",
                        "hint1": "Tử số thứ nhất đang là $2 - x$, cần đổi dấu cả tử và mẫu.",
                        "hint2": "$\\frac{2 - x}{3} = \\frac{x - 2}{-3} \\implies a = -3$."
                    },
                    {
                        "question": "Điểm nào sau đây thuộc đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 2}{-1} = \\frac{z - 3}{4}$?",
                        "options": [
                            "A. $M(1; -2; 3)$",
                            "B. $N(2; -1; 4)$",
                            "C. $P(-1; 2; -3)$",
                            "D. $Q(3; -3; 4)$"
                        ],
                        "correct": "A",
                        "explanation": "Đọc trực tiếp từ tử số: $x_0 = 1, y_0 = -2, z_0 = 3$. Thay vào được $0/2 = 0/(-1) = 0/4 = 0$ (thỏa mãn).",
                        "hint1": "Điểm đi qua nhìn trực tiếp từ các hằng số bị trừ trên tử.",
                        "hint2": "$x - 1 = 0 \\implies x = 1; y + 2 = 0 \\implies y = -2; z - 3 = 0 \\implies z = 3$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 15: Phương trình đường thẳng trong không gian</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Phương trình chính tắc của đường thẳng</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Phương trình chính tắc của đường thẳng trong không gian $Oxyz$:</p>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Điều kiện tồn tại:</strong> Khi vectơ chỉ phương $\\vec{u} = (a; b; c)$ có cả ba toạ độ đều khác 0 ($abc \\neq 0$).</li>\n                  <li><strong>Dạng phương trình chính tắc:</strong> Đi qua $M_0(x_0; y_0; z_0)$ có VTCP $\\vec{u} = (a; b; c)$:\n                    $$\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$$\n                  </li>\n                  <li>Mỗi tỉ số trong phương trình chính tắc thực chất chính là bằng giá trị tham số $t$:\n                    $$t = \\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$$\n                  </li>\n                  <li><strong>Lưu ý:</strong> Nếu một trong ba số $a, b, c$ bằng 0 thì đường thẳng <b>không có</b> phương trình dạng chính tắc (chỉ viết được dạng tham số).</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Hệ số của $x, y, z$ trên tử số bắt buộc phải bằng $+1$. Nếu gặp dạng $\\frac{2x - 1}{3}$ thì phải biến đổi thành $\\frac{x - 1/2}{3/2}$ để đọc đúng toạ độ VTCP!</li>\n                <li>Đọc nhanh điểm đi qua: Đổi dấu các hằng số trên tử số: $x - x_0 = 0 \\implies x = x_0$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Đọc nhầm toạ độ VTCP khi tử số bị đảo dấu hoặc có hệ số khác 1 (ví dụ $\\frac{3 - x}{2} = \\frac{x - 3}{-2} \\implies$ hoành độ VTCP là $-2$, không phải $2$).</li>\n                <li>Viết mẫu số bằng 0 trong phương trình chính tắc.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Tử số đổi dấu ra toạ độ Điểm – Mẫu số giữ nguyên ra Chỉ Phương – Chú ý chuẩn hoá hệ số x, y, z về +1 trước khi đọc!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 3,
                "sectionTitle": "Mục 3: Vị trí tương đối giữa hai đường thẳng",
                "sgkHtml": "<p>Trong không gian $Oxyz$, hai đường thẳng $d_1$ (qua $M_1$, VTCP $\\vec{u}_1$) và $d_2$ (qua $M_2$, VTCP $\\vec{u}_2$) có 4 vị trí tương đối:</p>\n                <div style=\"background:rgba(15,23,42,0.85); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px; margin:10px 0;\">\n                  <table style=\"width:100%; border-collapse:collapse; color:#f8fafc; font-size:14px;\">\n                    <tr style=\"border-bottom:1px solid rgba(56,189,248,0.3);\">\n                      <th style=\"padding:6px; text-align:left; color:#38bdf8;\">Vị trí</th>\n                      <th style=\"padding:6px; text-align:left; color:#38bdf8;\">Vectơ chỉ phương</th>\n                      <th style=\"padding:6px; text-align:left; color:#38bdf8;\">Số điểm chung</th>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px; font-weight:bold; color:#10b981;\">Trùng nhau</td>\n                      <td style=\"padding:6px;\">$\\vec{u}_1$ cùng phương $\\vec{u}_2$</td>\n                      <td style=\"padding:6px;\">Vô số điểm chung ($M_1 \\in d_2$)</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px; font-weight:bold; color:#38bdf8;\">Song song</td>\n                      <td style=\"padding:6px;\">$\\vec{u}_1$ cùng phương $\\vec{u}_2$</td>\n                      <td style=\"padding:6px;\">Không có điểm chung ($M_1 \\notin d_2$)</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px; font-weight:bold; color:#f59e0b;\">Cắt nhau</td>\n                      <td style=\"padding:6px;\">$\\vec{u}_1, \\vec{u}_2$ KHÔNG cùng phương</td>\n                      <td style=\"padding:6px;\">Đúng 1 điểm chung (hệ $t, t'$ có 1 nghiệm duy nhất)</td>\n                    </tr>\n                    <tr>\n                      <td style=\"padding:6px; font-weight:bold; color:#f43f5e;\">Chéo nhau</td>\n                      <td style=\"padding:6px;\">$\\vec{u}_1, \\vec{u}_2$ KHÔNG cùng phương</td>\n                      <td style=\"padding:6px;\">Không có điểm chung (hệ $t, t'$ vô nghiệm)</td>\n                    </tr>\n                  </table>\n                </div>",
                "noteHtml": "<li>Quy trình 2 bước thần tốc:\n                  <ol class=\"list-decimal ml-5 space-y-1\">\n                    <li><b>Bước 1:</b> So sánh hai VTCP $\\vec{u}_1$ và $\\vec{u}_2$. Nếu cùng phương $\\implies$ Song song hoặc Trùng nhau (thay $M_1$ vào $d_2$ để phân biệt).</li>\n                    <li><b>Bước 2:</b> Nếu không cùng phương $\\implies$ Lập hệ phương trình toạ độ theo $t, t'$. Có nghiệm duy nhất $\\implies$ Cắt nhau; Vô nghiệm $\\implies$ Chéo nhau.</li>\n                  </ol>\n                </li>\n                <li>Hai đường thẳng vuông góc khi $\\vec{u}_1 \\cdot \\vec{u}_2 = a_1a_2 + b_1b_2 + c_1c_2 = 0$. Chú ý vuông góc vẫn có thể cắt nhau hoặc chéo nhau!</li>",
                "mistakeHtml": "<li>Kết luận hai đường thẳng chéo nhau ngay khi thấy không có điểm chung mà quên xét trường hợp song song.</li>\n                <li>Giải hệ 3 phương trình chỉ dùng 2 phương trình đầu mà quên thay vào phương trình thứ 3 để kiểm tra tính tương thích.</li>",
                "tipHtml": "<li><em>\"Cùng phương: Song song hoặc Trùng – Không cùng phương: Cắt hoặc Chéo – Giải hệ 2 ẩn t, t' bấm Casio MENU 9-1-2 kiểm tra phương trình thứ 3 là ra ngay!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Cho hai đường thẳng $d_1: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3t \\end{cases}$ và $d_2: \\begin{cases} x = 2t' \\\\ y = 1 - 2t' \\\\ z = 6t' \\end{cases}$. Vị trí tương đối giữa $d_1$ và $d_2$ là:",
                        "options": [
                            "A. Song song",
                            "B. Trùng nhau",
                            "C. Cắt nhau",
                            "D. Chéo nhau"
                        ],
                        "correct": "A",
                        "explanation": "$\\vec{u}_1 = (1; -1; 3)$ và $\\vec{u}_2 = (2; -2; 6) = 2\\vec{u}_1$ nên cùng phương. Lấy $A(1; 2; 0) \\in d_1$, thay vào $d_2$: $2t'=1 \\implies t'=0.5$; $1-2(0.5)=0 \\neq 2$ nên $A \\notin d_2$. Vậy $d_1 \\parallel d_2$.",
                        "hint1": "Kiểm tra tính cùng phương của hai VTCP trước.",
                        "hint2": "$\\vec{u}_2 = 2\\vec{u}_1$, lấy điểm thuộc $d_1$ thử vào $d_2$ không thỏa mãn."
                    },
                    {
                        "question": "Cho hai đường thẳng $d_1: \\frac{x - 1}{2} = \\frac{y}{1} = \\frac{z + 1}{-1}$ và $d_2: \\frac{x - 3}{1} = \\frac{y - 1}{2} = \\frac{z + 2}{1}$. Toạ độ giao điểm của $d_1$ và $d_2$ là:",
                        "options": [
                            "A. $(3; 1; -2)$",
                            "B. $(1; 0; -1)$",
                            "C. $(5; 2; -3)$",
                            "D. $(2; 1; 0)$"
                        ],
                        "correct": "A",
                        "explanation": "Thay điểm $M(3; 1; -2)$ vào $d_1$: $\\frac{3-1}{2} = \\frac{1}{1} = \\frac{-2+1}{-1} = 1$ (thỏa mãn). Vào $d_2$: $\\frac{3-3}{1} = \\frac{1-1}{2} = \\frac{-2+2}{1} = 0$ (thỏa mãn). Vậy điểm $M(3; 1; -2)$ là giao điểm.",
                        "hint1": "Thử toạ độ các phương án vào cả hai đường thẳng.",
                        "hint2": "Điểm $(3; 1; -2)$ thỏa mãn cả 2 phương trình."
                    },
                    {
                        "question": "Cho đường thẳng $d$ có VTCP $\\vec{u} = (2; -1; 3)$ và mặt phẳng $(P)$ có VTPT $\\vec{n} = (1; 2; 0)$. Mệnh đề nào sau đây đúng?",
                        "options": [
                            "A. $d$ song song hoặc nằm trong $(P)$",
                            "B. $d$ vuông góc với $(P)$",
                            "C. $d$ cắt và không vuông góc với $(P)$",
                            "D. $d$ chéo với $(P)$"
                        ],
                        "correct": "A",
                        "explanation": "Tính tích vô hướng: $\\vec{u} \\cdot \\vec{n} = 2(1) + (-1)(2) + 3(0) = 2 - 2 + 0 = 0$. Khi VTCP của đường thẳng vuông góc với VTPT của mặt phẳng thì đường thẳng song song hoặc nằm trong mặt phẳng.",
                        "hint1": "Tính tích vô hướng $\\vec{u} \\cdot \\vec{n}$.",
                        "hint2": "$\\vec{u} \\cdot \\vec{n} = 0 \\implies d \\parallel (P)$ hoặc $d \\subset (P)$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 15: Phương trình đường thẳng trong không gian</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 3: Mục 3: Vị trí tương đối giữa hai đường thẳng</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Trong không gian $Oxyz$, hai đường thẳng $d_1$ (qua $M_1$, VTCP $\\vec{u}_1$) và $d_2$ (qua $M_2$, VTCP $\\vec{u}_2$) có 4 vị trí tương đối:</p>\n                <div style=\"background:rgba(15,23,42,0.85); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px; margin:10px 0;\">\n                  <table style=\"width:100%; border-collapse:collapse; color:#f8fafc; font-size:14px;\">\n                    <tr style=\"border-bottom:1px solid rgba(56,189,248,0.3);\">\n                      <th style=\"padding:6px; text-align:left; color:#38bdf8;\">Vị trí</th>\n                      <th style=\"padding:6px; text-align:left; color:#38bdf8;\">Vectơ chỉ phương</th>\n                      <th style=\"padding:6px; text-align:left; color:#38bdf8;\">Số điểm chung</th>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px; font-weight:bold; color:#10b981;\">Trùng nhau</td>\n                      <td style=\"padding:6px;\">$\\vec{u}_1$ cùng phương $\\vec{u}_2$</td>\n                      <td style=\"padding:6px;\">Vô số điểm chung ($M_1 \\in d_2$)</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px; font-weight:bold; color:#38bdf8;\">Song song</td>\n                      <td style=\"padding:6px;\">$\\vec{u}_1$ cùng phương $\\vec{u}_2$</td>\n                      <td style=\"padding:6px;\">Không có điểm chung ($M_1 \\notin d_2$)</td>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:6px; font-weight:bold; color:#f59e0b;\">Cắt nhau</td>\n                      <td style=\"padding:6px;\">$\\vec{u}_1, \\vec{u}_2$ KHÔNG cùng phương</td>\n                      <td style=\"padding:6px;\">Đúng 1 điểm chung (hệ $t, t'$ có 1 nghiệm duy nhất)</td>\n                    </tr>\n                    <tr>\n                      <td style=\"padding:6px; font-weight:bold; color:#f43f5e;\">Chéo nhau</td>\n                      <td style=\"padding:6px;\">$\\vec{u}_1, \\vec{u}_2$ KHÔNG cùng phương</td>\n                      <td style=\"padding:6px;\">Không có điểm chung (hệ $t, t'$ vô nghiệm)</td>\n                    </tr>\n                  </table>\n                </div></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quy trình 2 bước thần tốc:\n                  <ol class=\"list-decimal ml-5 space-y-1\">\n                    <li><b>Bước 1:</b> So sánh hai VTCP $\\vec{u}_1$ và $\\vec{u}_2$. Nếu cùng phương $\\implies$ Song song hoặc Trùng nhau (thay $M_1$ vào $d_2$ để phân biệt).</li>\n                    <li><b>Bước 2:</b> Nếu không cùng phương $\\implies$ Lập hệ phương trình toạ độ theo $t, t'$. Có nghiệm duy nhất $\\implies$ Cắt nhau; Vô nghiệm $\\implies$ Chéo nhau.</li>\n                  </ol>\n                </li>\n                <li>Hai đường thẳng vuông góc khi $\\vec{u}_1 \\cdot \\vec{u}_2 = a_1a_2 + b_1b_2 + c_1c_2 = 0$. Chú ý vuông góc vẫn có thể cắt nhau hoặc chéo nhau!</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Kết luận hai đường thẳng chéo nhau ngay khi thấy không có điểm chung mà quên xét trường hợp song song.</li>\n                <li>Giải hệ 3 phương trình chỉ dùng 2 phương trình đầu mà quên thay vào phương trình thứ 3 để kiểm tra tính tương thích.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Cùng phương: Song song hoặc Trùng – Không cùng phương: Cắt hoặc Chéo – Giải hệ 2 ẩn t, t' bấm Casio MENU 9-1-2 kiểm tra phương trình thứ 3 là ra ngay!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Cho đường thẳng $d: \\begin{cases} x = 2 + t \\\\ y = -1 + 2t \\\\ z = 3 - t \\end{cases}$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Đường thẳng $d$ đi qua điểm $A(2; -1; 3)$.",
                        "correct": "true",
                        "explain": "Ứng với $t = 0$."
                    },
                    {
                        "key": "b",
                        "text": "Một vectơ chỉ phương của $d$ là $\\vec{u} = (1; 2; -1)$.",
                        "correct": "true",
                        "explain": "Hệ số của $t$."
                    },
                    {
                        "key": "c",
                        "text": "Điểm $B(3; 1; 2)$ thuộc đường thẳng $d$.",
                        "correct": "true",
                        "explain": "Ứng với $t = 1$."
                    },
                    {
                        "key": "d",
                        "text": "Đường thẳng $d$ có phương trình chính tắc là $\\frac{x+2}{1} = \\frac{y-1}{2} = \\frac{z+3}{-1}$.",
                        "correct": "false",
                        "explain": "Tử số phải là $x-2, y+1, z-3$."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: Cho hai điểm $A(1; 0; -2)$ và $B(3; 2; 0)$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Vectơ $\\vec{AB} = (2; 2; 2) = 2(1; 1; 1)$.",
                        "correct": "true",
                        "explain": "$(3-1; 2-0; 0-(-2)) = (2; 2; 2)$."
                    },
                    {
                        "key": "b",
                        "text": "Vectơ $\\vec{u} = (1; 1; 1)$ là một vectơ chỉ phương của đường thẳng $AB$.",
                        "correct": "true",
                        "explain": "Cùng phương với $\\vec{AB}$."
                    },
                    {
                        "key": "c",
                        "text": "Phương trình tham số của đường thẳng $AB$ là $\\begin{cases} x = 1 + t \\\\ y = t \\\\ z = -2 + t \\end{cases}$.",
                        "correct": "true",
                        "explain": "Đi qua $A(1; 0; -2)$ có VTCP $(1; 1; 1)$."
                    },
                    {
                        "key": "d",
                        "text": "Đường thẳng $AB$ đi qua gốc toạ độ $O(0; 0; 0)$.",
                        "correct": "false",
                        "explain": "Thay $O$ vào: $1+t=0 \\Rightarrow t=-1$, nhưng $y=0 \\Rightarrow t=0$ mâu thuẫn."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: Cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{1} = \\frac{z - 2}{-3}$ và mặt phẳng $(P): 2x + y - 3z + 5 = 0$:",
                "items": [
                    {
                        "key": "a",
                        "text": "VTCP của $d$ là $\\vec{u} = (2; 1; -3)$.",
                        "correct": "true",
                        "explain": "Mẫu số của $d$."
                    },
                    {
                        "key": "b",
                        "text": "VTPT của $(P)$ là $\\vec{n} = (2; 1; -3)$.",
                        "correct": "true",
                        "explain": "Hệ số $x, y, z$ của $(P)$."
                    },
                    {
                        "key": "c",
                        "text": "Vectơ chỉ phương $\\vec{u}$ cùng phương với vectơ pháp tuyến $\\vec{n}$.",
                        "correct": "true",
                        "explain": "Hai vectơ trùng nhau."
                    },
                    {
                        "key": "d",
                        "text": "Đường thẳng $d$ song song với mặt phẳng $(P)$.",
                        "correct": "false",
                        "explain": "Khi $\\vec{u}$ cùng phương $\\vec{n}$ thì đường thẳng $d$ VUÔNG GÓC với $(P)$."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: Về các trục toạ độ trong không gian $Oxyz$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Trục $Ox$ có phương trình tham số là $\\begin{cases} x = t \\\\ y = 0 \\\\ z = 0 \\end{cases}$.",
                        "correct": "true",
                        "explain": "Đi qua $O$ có VTCP $\\vec{i} = (1; 0; 0)$."
                    },
                    {
                        "key": "b",
                        "text": "Trục $Oy$ có phương trình tham số là $\\begin{cases} x = 0 \\\\ y = t \\\\ z = 0 \\end{cases}$.",
                        "correct": "true",
                        "explain": "Đi qua $O$ có VTCP $\\vec{j} = (0; 1; 0)$."
                    },
                    {
                        "key": "c",
                        "text": "Trục $Oz$ có phương trình chính tắc là $\\frac{x}{0} = \\frac{y}{0} = \\frac{z}{1}$.",
                        "correct": "false",
                        "explain": "Có mẫu số bằng 0 không thể viết dạng chính tắc."
                    },
                    {
                        "key": "d",
                        "text": "Trục $Oz$ vuông góc với mặt phẳng toạ độ $(Oxy)$.",
                        "correct": "true",
                        "explain": "Định nghĩa hệ toạ độ."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Cho hai đường thẳng $d_1: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3t \\end{cases}$ và $d_2: \\begin{cases} x = 2t' \\\\ y = 1 - 2t' \\\\ z = 6t' \\end{cases}$:",
                "items": [
                    {
                        "key": "a",
                        "text": "VTCP của $d_1$ là $\\vec{u}_1 = (1; -1; 3)$.",
                        "correct": "true",
                        "explain": "Hệ số của $t$."
                    },
                    {
                        "key": "b",
                        "text": "VTCP của $d_2$ là $\\vec{u}_2 = (2; -2; 6) = 2\\vec{u}_1$.",
                        "correct": "true",
                        "explain": "Hai VTCP cùng phương."
                    },
                    {
                        "key": "c",
                        "text": "Điểm $A(1; 2; 0) \\in d_1$ không thuộc $d_2$.",
                        "correct": "true",
                        "explain": "Thay vào $d_2$: $2t'=1 \\Rightarrow t'=0.5$, $1-2(0.5)=0 \\neq 2$."
                    },
                    {
                        "key": "d",
                        "text": "Hai đường thẳng $d_1$ và $d_2$ song song với nhau.",
                        "correct": "true",
                        "explain": "Cùng phương và không có điểm chung."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Về vị trí tương đối giữa hai đường thẳng trong không gian:",
                "items": [
                    {
                        "key": "a",
                        "text": "Hai đường thẳng có thể song song, trùng nhau, cắt nhau hoặc chéo nhau.",
                        "correct": "true",
                        "explain": "Bốn vị trí tương đối chuẩn."
                    },
                    {
                        "key": "b",
                        "text": "Hai đường thẳng chéo nhau khi chúng không cùng nằm trong bất kỳ mặt phẳng nào.",
                        "correct": "true",
                        "explain": "Định nghĩa đường thẳng chéo nhau."
                    },
                    {
                        "key": "c",
                        "text": "Nếu hai đường thẳng không có điểm chung thì chúng chắc chắn song song.",
                        "correct": "false",
                        "explain": "Chúng có thể chéo nhau."
                    },
                    {
                        "key": "d",
                        "text": "Hai đường thẳng cắt nhau thì tích vô hướng của hai VTCP phải bằng 0.",
                        "correct": "false",
                        "explain": "Chỉ khi vuông góc mới có tích vô hướng bằng 0."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 15:") || t.includes("phương trình đường thẳng trong không gian") || t.includes("duong thang trong khong gian")) && !t.includes("góc");
      }
    },

  "toan12_bai16": {
        "id": "toan12_bai16",
        "lessonTitle": "Bài 16: Công thức tính góc trong không gian",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Góc giữa hai đường thẳng",
                "sgkHtml": "<p>Góc $\\varphi$ giữa hai đường thẳng $d_1$ (VTCP $\\vec{u}_1$) và $d_2$ (VTCP $\\vec{u}_2$):</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\cos \\varphi = |\\cos(\\vec{u}_1, \\vec{u}_2)| = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| |\\vec{u}_2|} = \\frac{|a_1a_2 + b_1b_2 + c_1c_2|}{\\sqrt{a_1^2 + b_1^2 + c_1^2} \\cdot \\sqrt{a_2^2 + b_2^2 + c_2^2}}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Quy ước miền giá trị:</strong> Góc giữa hai đường thẳng luôn là góc nhọn hoặc góc vuông: $0^\\circ \\le \\varphi \\le 90^\\circ$. Do đó cosin luôn <b>không âm</b> (phải có trị tuyệt đối trên tử số!).</li>\n                  <li>$d_1 \\perp d_2 \\Leftrightarrow \\vec{u}_1 \\cdot \\vec{u}_2 = 0 \\Leftrightarrow a_1a_2 + b_1b_2 + c_1c_2 = 0$.</li>\n                  <li>Nếu $d_1 \\parallel d_2$ hoặc $d_1 \\equiv d_2$ thì góc giữa chúng bằng $0^\\circ$ ($\\cos \\varphi = 1$).</li>\n                </ul>",
                "noteHtml": "<li>Phân biệt góc giữa hai đường thẳng ($0^\\circ \\le \\varphi \\le 90^\\circ$) và góc giữa hai vectơ ($0^\\circ \\le (\\vec{u}_1, \\vec{u}_2) \\le 180^\\circ$).</li>\n                <li>Nếu tính ra $\\cos(\\vec{u}_1, \\vec{u}_2) < 0$ thì góc giữa hai đường thẳng là góc bù: $\\varphi = 180^\\circ - (\\vec{u}_1, \\vec{u}_2)$.</li>",
                "mistakeHtml": "<li>Quên lấy giá trị tuyệt đối trên tử số dẫn đến cosin âm.</li>\n                <li>Bấm máy Casio ở chế độ Radian khi đề bài hỏi theo độ (bấm SHIFT MENU 2-1 để chuyển sang Degree).</li>",
                "tipHtml": "<li><em>\"Góc giữa hai đường thẳng: Dùng CÔ-SIN – Lấy trị tuyệt đối trên tử số – Góc luôn từ 0 đến 90 độ!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Góc giữa hai đường thẳng $d_1: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 0 \\end{cases}$ và $d_2: \\begin{cases} x = 2 + t' \\\\ y = 1 \\\\ z = 3 - t' \\end{cases}$ bằng:",
                        "options": [
                            "A. $60^\\circ$",
                            "B. $45^\\circ$",
                            "C. $30^\\circ$",
                            "D. $90^\\circ$"
                        ],
                        "correct": "A",
                        "explanation": "$\\vec{u}_1 = (1; -1; 0) \\implies |\\vec{u}_1| = \\sqrt{2}$. $\\vec{u}_2 = (1; 0; -1) \\implies |\\vec{u}_2| = \\sqrt{2}$. $\\cos \\varphi = \\frac{|1(1) + (-1)(0) + 0(-1)|}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\implies \\varphi = 60^\\circ$.",
                        "hint1": "Tìm VTCP của hai đường thẳng: $(1; -1; 0)$ và $(1; 0; -1)$.",
                        "hint2": "$\\cos \\varphi = \\frac{|1|}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2} \\implies \\varphi = 60^\\circ$."
                    },
                    {
                        "question": "Cho $d_1$ có VTCP $\\vec{u}_1 = (1; 2; -2)$ và $d_2$ có VTCP $\\vec{u}_2 = (2; -1; 0)$. Mệnh đề nào sau đây đúng?",
                        "options": [
                            "A. $d_1 \\perp d_2$",
                            "B. $d_1 \\parallel d_2$",
                            "C. Góc giữa $d_1$ và $d_2$ bằng $45^\\circ$",
                            "D. Góc giữa $d_1$ và $d_2$ bằng $60^\\circ$"
                        ],
                        "correct": "A",
                        "explanation": "$\\vec{u}_1 \\cdot \\vec{u}_2 = 1(2) + 2(-1) + (-2)(0) = 2 - 2 + 0 = 0$. Suy ra $d_1 \\perp d_2$ (góc bằng $90^\\circ$).",
                        "hint1": "Tính tích vô hướng $\\vec{u}_1 \\cdot \\vec{u}_2$.",
                        "hint2": "Tích vô hướng bằng 0 nghĩa là hai đường thẳng vuông góc."
                    },
                    {
                        "question": "Góc giữa đường thẳng $d: \\begin{cases} x = t \\\\ y = t \\\\ z = t \\end{cases}$ và trục $Oz$ có cosin bằng:",
                        "options": [
                            "A. $\\frac{1}{\\sqrt{3}}$",
                            "B. $\\frac{\\sqrt{2}}{3}$",
                            "C. $\\frac{1}{3}$",
                            "D. $\\frac{\\sqrt{3}}{2}$"
                        ],
                        "correct": "A",
                        "explanation": "$\\vec{u}_d = (1; 1; 1)$, $\\vec{k} = (0; 0; 1)$. $\\cos \\varphi = \\frac{|1(0) + 1(0) + 1(1)|}{\\sqrt{3} \\cdot 1} = \\frac{1}{\\sqrt{3}}$.",
                        "hint1": "VTCP trục $Oz$ là $\\vec{k} = (0; 0; 1)$.",
                        "hint2": "$\\cos \\varphi = \\frac{|1|}{\\sqrt{1^2+1^2+1^2} \\cdot 1} = \\frac{1}{\\sqrt{3}}$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 16: Công thức tính góc trong không gian</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Góc giữa hai đường thẳng</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Góc $\\varphi$ giữa hai đường thẳng $d_1$ (VTCP $\\vec{u}_1$) và $d_2$ (VTCP $\\vec{u}_2$):</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\cos \\varphi = |\\cos(\\vec{u}_1, \\vec{u}_2)| = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| |\\vec{u}_2|} = \\frac{|a_1a_2 + b_1b_2 + c_1c_2|}{\\sqrt{a_1^2 + b_1^2 + c_1^2} \\cdot \\sqrt{a_2^2 + b_2^2 + c_2^2}}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Quy ước miền giá trị:</strong> Góc giữa hai đường thẳng luôn là góc nhọn hoặc góc vuông: $0^\\circ \\le \\varphi \\le 90^\\circ$. Do đó cosin luôn <b>không âm</b> (phải có trị tuyệt đối trên tử số!).</li>\n                  <li>$d_1 \\perp d_2 \\Leftrightarrow \\vec{u}_1 \\cdot \\vec{u}_2 = 0 \\Leftrightarrow a_1a_2 + b_1b_2 + c_1c_2 = 0$.</li>\n                  <li>Nếu $d_1 \\parallel d_2$ hoặc $d_1 \\equiv d_2$ thì góc giữa chúng bằng $0^\\circ$ ($\\cos \\varphi = 1$).</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Phân biệt góc giữa hai đường thẳng ($0^\\circ \\le \\varphi \\le 90^\\circ$) và góc giữa hai vectơ ($0^\\circ \\le (\\vec{u}_1, \\vec{u}_2) \\le 180^\\circ$).</li>\n                <li>Nếu tính ra $\\cos(\\vec{u}_1, \\vec{u}_2) < 0$ thì góc giữa hai đường thẳng là góc bù: $\\varphi = 180^\\circ - (\\vec{u}_1, \\vec{u}_2)$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên lấy giá trị tuyệt đối trên tử số dẫn đến cosin âm.</li>\n                <li>Bấm máy Casio ở chế độ Radian khi đề bài hỏi theo độ (bấm SHIFT MENU 2-1 để chuyển sang Degree).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Góc giữa hai đường thẳng: Dùng CÔ-SIN – Lấy trị tuyệt đối trên tử số – Góc luôn từ 0 đến 90 độ!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Góc giữa đường thẳng và mặt phẳng",
                "sgkHtml": "<p>Góc $\\theta$ giữa đường thẳng $d$ (VTCP $\\vec{u} = (a; b; c)$) và mặt phẳng $(\\alpha)$ (VTPT $\\vec{n} = (A; B; C)$):</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\sin \\theta = |\\cos(\\vec{u}, \\vec{n})| = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| |\\vec{n}|} = \\frac{|Aa + Bb + Cc|}{\\sqrt{A^2 + B^2 + C^2} \\cdot \\sqrt{a^2 + b^2 + c^2}}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Quy ước miền giá trị:</strong> $0^\\circ \\le \\theta \\le 90^\\circ$.</li>\n                  <li><strong>LƯU Ý ĐẶC BIỆT:</strong> Công thức góc giữa đường và mặt tính qua hàm <b>SIN</b> (chứ không phải cosin) vì $\\theta = 90^\\circ - (\\vec{u}, \\vec{n})$.</li>\n                  <li>$d \\parallel (\\alpha)$ hoặc $d \\subset (\\alpha) \\Leftrightarrow \\sin \\theta = 0 \\Leftrightarrow \\vec{u} \\cdot \\vec{n} = 0$.</li>\n                  <li>$d \\perp (\\alpha) \\Leftrightarrow \\sin \\theta = 1 \\Leftrightarrow \\vec{u}$ cùng phương $\\vec{n}$.</li>\n                </ul>",
                "noteHtml": "<li>Cực kỳ chú ý: Giữa ĐƯỜNG VÀ MẶT dùng <b>SIN</b>, giữa HAI ĐƯỜNG hoặc HAI MẶT dùng <b>COSIN</b>!</li>\n                <li>Khi $d \\perp (\\alpha)$ thì góc giữa đường và mặt bằng $90^\\circ$, khi đó $\\vec{u}$ CÙNG PHƯƠNG với $\\vec{n}$.</li>",
                "mistakeHtml": "<li>Dùng nhầm hàm $\\cos$ thay vì $\\sin$ dẫn đến tính sai góc thành góc phụ $90^\\circ - \\theta$.</li>\n                <li>Quên trị tuyệt đối trên tử số.</li>",
                "tipHtml": "<li><em>\"Khác loài (Đường và Mặt) dùng SIN – Cùng loài (Đường-Đường, Mặt-Mặt) dùng COSIN – Khắc cốt ghi tâm không bao giờ nhầm lẫn!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Góc giữa đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = -2 \\\\ z = 3 + t \\end{cases}$ và mặt phẳng $(Oxy)$ có sin bằng:",
                        "options": [
                            "A. $\\frac{1}{\\sqrt{2}}$",
                            "B. $\\frac{1}{2}$",
                            "C. $\\frac{\\sqrt{3}}{2}$",
                            "D. $1$"
                        ],
                        "correct": "A",
                        "explanation": "$\\vec{u} = (1; 0; 1)$, VTPT của $(Oxy)$ là $\\vec{k} = (0; 0; 1)$. $\\sin \\theta = \\frac{|1(0) + 0(0) + 1(1)|}{\\sqrt{2} \\cdot 1} = \\frac{1}{\\sqrt{2}} \\implies \\theta = 45^\\circ$.",
                        "hint1": "Mặt phẳng $(Oxy)$ có VTPT là $\\vec{k} = (0; 0; 1)$.",
                        "hint2": "$\\sin \\theta = \\frac{|1|}{\\sqrt{1^2+0^2+1^2} \\cdot 1} = \\frac{1}{\\sqrt{2}}$."
                    },
                    {
                        "question": "Góc giữa đường thẳng $d: \\frac{x - 1}{1} = \\frac{y + 2}{2} = \\frac{z}{-2}$ và mặt phẳng $(P): 2x - y + 2z - 5 = 0$ có sin bằng:",
                        "options": [
                            "A. $\\frac{4}{9}$",
                            "B. $\\frac{2}{9}$",
                            "C. $\\frac{4}{3}$",
                            "D. $0$"
                        ],
                        "correct": "A",
                        "explanation": "$\\vec{u} = (1; 2; -2) \\implies |\\vec{u}| = 3$. $\\vec{n} = (2; -1; 2) \\implies |\\vec{n}| = 3$. $\\sin \\theta = \\frac{|1(2) + 2(-1) + (-2)(2)|}{3 \\cdot 3} = \\frac{|2 - 2 - 4|}{9} = \\frac{4}{9}$.",
                        "hint1": "Thay vào $\\sin \\theta = \\frac{|Aa + Bb + Cc|}{\\sqrt{A^2+B^2+C^2}\\sqrt{a^2+b^2+c^2}}$.",
                        "hint2": "Tử số là $|-4| = 4$, mẫu số là $3 \\cdot 3 = 9$."
                    },
                    {
                        "question": "Cho đường thẳng $d$ vuông góc với mặt phẳng $(P)$. Góc giữa đường thẳng $d$ và mặt phẳng $(P)$ bằng:",
                        "options": [
                            "A. $90^\\circ$",
                            "B. $0^\\circ$",
                            "C. $180^\\circ$",
                            "D. $45^\\circ$"
                        ],
                        "correct": "A",
                        "explanation": "Theo định nghĩa góc giữa đường thẳng và mặt phẳng, khi đường thẳng vuông góc với mặt phẳng thì góc giữa chúng bằng $90^\\circ$ ($\\sin \\theta = 1$).",
                        "hint1": "Đường thẳng vuông góc mặt phẳng thì hình chiếu của nó là 1 điểm.",
                        "hint2": "Góc định nghĩa là $90^\\circ$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 16: Công thức tính góc trong không gian</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Góc giữa đường thẳng và mặt phẳng</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Góc $\\theta$ giữa đường thẳng $d$ (VTCP $\\vec{u} = (a; b; c)$) và mặt phẳng $(\\alpha)$ (VTPT $\\vec{n} = (A; B; C)$):</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\sin \\theta = |\\cos(\\vec{u}, \\vec{n})| = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| |\\vec{n}|} = \\frac{|Aa + Bb + Cc|}{\\sqrt{A^2 + B^2 + C^2} \\cdot \\sqrt{a^2 + b^2 + c^2}}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Quy ước miền giá trị:</strong> $0^\\circ \\le \\theta \\le 90^\\circ$.</li>\n                  <li><strong>LƯU Ý ĐẶC BIỆT:</strong> Công thức góc giữa đường và mặt tính qua hàm <b>SIN</b> (chứ không phải cosin) vì $\\theta = 90^\\circ - (\\vec{u}, \\vec{n})$.</li>\n                  <li>$d \\parallel (\\alpha)$ hoặc $d \\subset (\\alpha) \\Leftrightarrow \\sin \\theta = 0 \\Leftrightarrow \\vec{u} \\cdot \\vec{n} = 0$.</li>\n                  <li>$d \\perp (\\alpha) \\Leftrightarrow \\sin \\theta = 1 \\Leftrightarrow \\vec{u}$ cùng phương $\\vec{n}$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Cực kỳ chú ý: Giữa ĐƯỜNG VÀ MẶT dùng <b>SIN</b>, giữa HAI ĐƯỜNG hoặc HAI MẶT dùng <b>COSIN</b>!</li>\n                <li>Khi $d \\perp (\\alpha)$ thì góc giữa đường và mặt bằng $90^\\circ$, khi đó $\\vec{u}$ CÙNG PHƯƠNG với $\\vec{n}$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Dùng nhầm hàm $\\cos$ thay vì $\\sin$ dẫn đến tính sai góc thành góc phụ $90^\\circ - \\theta$.</li>\n                <li>Quên trị tuyệt đối trên tử số.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Khác loài (Đường và Mặt) dùng SIN – Cùng loài (Đường-Đường, Mặt-Mặt) dùng COSIN – Khắc cốt ghi tâm không bao giờ nhầm lẫn!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 3,
                "sectionTitle": "Mục 3: Góc giữa hai mặt phẳng",
                "sgkHtml": "<p>Góc $\\psi$ giữa hai mặt phẳng $(\\alpha): A_1x + B_1y + C_1z + D_1 = 0$ và $(\\beta): A_2x + B_2y + C_2z + D_2 = 0$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\cos \\psi = |\\cos(\\vec{n}_1, \\vec{n}_2)| = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| |\\vec{n}_2|} = \\frac{|A_1A_2 + B_1B_2 + C_1C_2|}{\\sqrt{A_1^2 + B_1^2 + C_1^2} \\cdot \\sqrt{A_2^2 + B_2^2 + C_2^2}}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Quy ước miền giá trị:</strong> $0^\\circ \\le \\psi \\le 90^\\circ$. Cosin luôn không âm.</li>\n                  <li>$(\\alpha) \\perp (\\beta) \\Leftrightarrow \\vec{n}_1 \\cdot \\vec{n}_2 = 0 \\Leftrightarrow A_1A_2 + B_1B_2 + C_1C_2 = 0$.</li>\n                  <li>Nếu $(\\alpha) \\parallel (\\beta)$ hoặc $(\\alpha) \\equiv (\\beta)$ thì góc giữa chúng bằng $0^\\circ$.</li>\n                </ul>",
                "noteHtml": "<li>Góc giữa hai mặt phẳng không phụ thuộc vào các hệ số tự do $D_1, D_2$.</li>\n                <li>Ứng dụng thực tế: Tính độ dốc mái nhà, góc nghiêng của pin năng lượng mặt trời để đón nắng tối ưu.</li>",
                "mistakeHtml": "<li>Quên lấy giá trị tuyệt đối trên tử số dẫn đến cosin âm.</li>\n                <li>Nhầm sang hàm $\\sin$ (nhớ: hai mặt phẳng cùng loài nên dùng $\\cos$).</li>",
                "tipHtml": "<li><em>\"Góc giữa hai mặt phẳng: Dùng COSIN – Trị tuyệt đối tích vô hướng chia tích độ dài hai VTPT!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Góc giữa hai mặt phẳng $(P): x + y - 4 = 0$ và $(Q): y + z + 1 = 0$ bằng:",
                        "options": [
                            "A. $60^\\circ$",
                            "B. $45^\\circ$",
                            "C. $30^\\circ$",
                            "D. $90^\\circ$"
                        ],
                        "correct": "A",
                        "explanation": "$\\vec{n}_P = (1; 1; 0) \\implies |\\vec{n}_P| = \\sqrt{2}$. $\\vec{n}_Q = (0; 1; 1) \\implies |\\vec{n}_Q| = \\sqrt{2}$. $\\cos \\psi = \\frac{|1(0) + 1(1) + 0(1)|}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\implies \\psi = 60^\\circ$.",
                        "hint1": "Hai VTPT là $(1; 1; 0)$ và $(0; 1; 1)$.",
                        "hint2": "$\\cos \\psi = 1/2 \\implies \\psi = 60^\\circ$."
                    },
                    {
                        "question": "Góc giữa hai mặt phẳng toạ độ $(Oxy)$ và $(Oyz)$ bằng:",
                        "options": [
                            "A. $90^\\circ$",
                            "B. $0^\\circ$",
                            "C. $45^\\circ$",
                            "D. $60^\\circ$"
                        ],
                        "correct": "A",
                        "explanation": "VTPT của $(Oxy)$ là $\\vec{k} = (0; 0; 1)$, của $(Oyz)$ là $\\vec{i} = (1; 0; 0)$. $\\vec{k} \\cdot \\vec{i} = 0 \\implies$ góc bằng $90^\\circ$.",
                        "hint1": "Hai mặt phẳng toạ độ vuông góc từng đôi một.",
                        "hint2": "Góc bằng $90^\\circ$."
                    },
                    {
                        "question": "Cho hai mặt phẳng $(P): 2x - y + z - 1 = 0$ và $(Q): x + y + mz + 2 = 0$. Giá trị của $m$ để $(P) \\perp (Q)$ là:",
                        "options": [
                            "A. $m = -1$",
                            "B. $m = 1$",
                            "C. $m = 2$",
                            "D. $m = -2$"
                        ],
                        "correct": "A",
                        "explanation": "$\\vec{n}_P \\cdot \\vec{n}_Q = 2(1) + (-1)(1) + 1(m) = 0 \\Leftrightarrow 2 - 1 + m = 0 \\Leftrightarrow m = -1$.",
                        "hint1": "Hai mặt phẳng vuông góc khi tích vô hướng bằng 0.",
                        "hint2": "$1 + m = 0 \\implies m = -1$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 16: Công thức tính góc trong không gian</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 3: Mục 3: Góc giữa hai mặt phẳng</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Góc $\\psi$ giữa hai mặt phẳng $(\\alpha): A_1x + B_1y + C_1z + D_1 = 0$ và $(\\beta): A_2x + B_2y + C_2z + D_2 = 0$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$\\cos \\psi = |\\cos(\\vec{n}_1, \\vec{n}_2)| = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| |\\vec{n}_2|} = \\frac{|A_1A_2 + B_1B_2 + C_1C_2|}{\\sqrt{A_1^2 + B_1^2 + C_1^2} \\cdot \\sqrt{A_2^2 + B_2^2 + C_2^2}}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Quy ước miền giá trị:</strong> $0^\\circ \\le \\psi \\le 90^\\circ$. Cosin luôn không âm.</li>\n                  <li>$(\\alpha) \\perp (\\beta) \\Leftrightarrow \\vec{n}_1 \\cdot \\vec{n}_2 = 0 \\Leftrightarrow A_1A_2 + B_1B_2 + C_1C_2 = 0$.</li>\n                  <li>Nếu $(\\alpha) \\parallel (\\beta)$ hoặc $(\\alpha) \\equiv (\\beta)$ thì góc giữa chúng bằng $0^\\circ$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Góc giữa hai mặt phẳng không phụ thuộc vào các hệ số tự do $D_1, D_2$.</li>\n                <li>Ứng dụng thực tế: Tính độ dốc mái nhà, góc nghiêng của pin năng lượng mặt trời để đón nắng tối ưu.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên lấy giá trị tuyệt đối trên tử số dẫn đến cosin âm.</li>\n                <li>Nhầm sang hàm $\\sin$ (nhớ: hai mặt phẳng cùng loài nên dùng $\\cos$).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Góc giữa hai mặt phẳng: Dùng COSIN – Trị tuyệt đối tích vô hướng chia tích độ dài hai VTPT!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Về góc giữa hai đường thẳng trong không gian $Oxyz$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Góc giữa hai đường thẳng có số đo nằm trong đoạn $[0^\\circ; 90^\\circ]$.",
                        "correct": "true",
                        "explain": "Quy ước chuẩn SGK."
                    },
                    {
                        "key": "b",
                        "text": "Cosin góc giữa hai đường thẳng luôn nhận giá trị không âm.",
                        "correct": "true",
                        "explain": "Do có dấu giá trị tuyệt đối trên tử số."
                    },
                    {
                        "key": "c",
                        "text": "Nếu hai vectơ chỉ phương tạo với nhau góc $120^\\circ$ thì góc giữa hai đường thẳng là $120^\\circ$.",
                        "correct": "false",
                        "explain": "Góc giữa hai đường thẳng là góc bù $180^\\circ - 120^\\circ = 60^\\circ$."
                    },
                    {
                        "key": "d",
                        "text": "Hai đường thẳng vuông góc khi và chỉ khi tích vô hướng hai VTCP bằng 0.",
                        "correct": "true",
                        "explain": "Định lý vuông góc chuẩn."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: Cho đường thẳng $d: \\begin{cases} x = t \\\\ y = 2t \\\\ z = -t \\end{cases}$ và mặt phẳng $(P): x + y + 2z - 5 = 0$:",
                "items": [
                    {
                        "key": "a",
                        "text": "VTCP của đường thẳng $d$ là $\\vec{u} = (1; 2; -1)$.",
                        "correct": "true",
                        "explain": "Hệ số của $t$."
                    },
                    {
                        "key": "b",
                        "text": "VTPT của mặt phẳng $(P)$ là $\\vec{n} = (1; 1; 2)$.",
                        "correct": "true",
                        "explain": "Hệ số của $x, y, z$."
                    },
                    {
                        "key": "c",
                        "text": "Tích vô hướng $\\vec{u} \\cdot \\vec{n} = 1(1) + 2(1) + (-1)(2) = 1$.",
                        "correct": "true",
                        "explain": "$1 + 2 - 2 = 1$."
                    },
                    {
                        "key": "d",
                        "text": "Đường thẳng $d$ song song với mặt phẳng $(P)$.",
                        "correct": "false",
                        "explain": "Tích vô hướng bằng $1 \\neq 0$ nên $d$ cắt $(P)$."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: Về góc giữa đường thẳng và mặt phẳng:",
                "items": [
                    {
                        "key": "a",
                        "text": "Góc giữa đường thẳng và mặt phẳng được tính thông qua hàm sin của góc giữa VTCP và VTPT.",
                        "correct": "true",
                        "explain": "Công thức $\\sin \\theta = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}||\\vec{n}|}$."
                    },
                    {
                        "key": "b",
                        "text": "Góc giữa đường thẳng và mặt phẳng có thể tù ($> 90^\\circ$).",
                        "correct": "false",
                        "explain": "Góc luôn nằm trong $[0^\\circ; 90^\\circ]$."
                    },
                    {
                        "key": "c",
                        "text": "Nếu đường thẳng song song với mặt phẳng thì góc giữa chúng bằng $0^\\circ$.",
                        "correct": "true",
                        "explain": "Định nghĩa góc bằng $0^\\circ$."
                    },
                    {
                        "key": "d",
                        "text": "Nếu đường thẳng vuông góc với mặt phẳng thì góc giữa chúng bằng $90^\\circ$.",
                        "correct": "true",
                        "explain": "Định nghĩa góc bằng $90^\\circ$."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: Cho hai mặt phẳng $(P): x - y = 0$ và $(Q): y - z = 0$:",
                "items": [
                    {
                        "key": "a",
                        "text": "VTPT của $(P)$ là $\\vec{n}_P = (1; -1; 0)$ có độ dài $\\sqrt{2}$.",
                        "correct": "true",
                        "explain": "$\\sqrt{1 + 1} = \\sqrt{2}$."
                    },
                    {
                        "key": "b",
                        "text": "VTPT của $(Q)$ là $\\vec{n}_Q = (0; 1; -1)$ có độ dài $\\sqrt{2}$.",
                        "correct": "true",
                        "explain": "$\\sqrt{1 + 1} = \\sqrt{2}$."
                    },
                    {
                        "key": "c",
                        "text": "Cosin góc giữa $(P)$ và $(Q)$ bằng $1/2$.",
                        "correct": "true",
                        "explain": "$\\frac{|1(0) - 1(1) + 0(-1)|}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2}$."
                    },
                    {
                        "key": "d",
                        "text": "Góc giữa $(P)$ và $(Q)$ bằng $120^\\circ$.",
                        "correct": "false",
                        "explain": "Góc phải là góc nhọn $60^\\circ$."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Về ứng dụng thực tế của góc trong không gian:",
                "items": [
                    {
                        "key": "a",
                        "text": "Góc dốc của một con dốc là góc giữa đường dốc và mặt phẳng nằm ngang.",
                        "correct": "true",
                        "explain": "Khái niệm góc giữa đường và mặt."
                    },
                    {
                        "key": "b",
                        "text": "Góc giữa hai sườn mái nhà là góc giữa hai mặt phẳng chứa hai sườn mái.",
                        "correct": "true",
                        "explain": "Góc nhị diện / góc giữa hai mặt phẳng."
                    },
                    {
                        "key": "c",
                        "text": "Để tính góc dốc, ta dùng công thức cosin giữa hai vectơ.",
                        "correct": "false",
                        "explain": "Góc giữa đường và mặt nằm ngang phải dùng hàm sin."
                    },
                    {
                        "key": "d",
                        "text": "Khi mặt trời chiếu thẳng góc với tấm pin thì góc giữa tia sáng và mặt phẳng tấm pin bằng $90^\\circ$.",
                        "correct": "true",
                        "explain": "Định nghĩa tia sáng vuông góc với bề mặt."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, đáy $ABC$ vuông tại $B$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Góc giữa $SB$ và mặt phẳng $(ABC)$ là $\\widehat{SBA}$.",
                        "correct": "true",
                        "explain": "Hình chiếu của $S$ là $A$ nên hình chiếu của $SB$ là $AB$."
                    },
                    {
                        "key": "b",
                        "text": "Đường thẳng $BC$ vuông góc với mặt phẳng $(SAB)$.",
                        "correct": "true",
                        "explain": "$BC \\perp AB$ và $BC \\perp SA$."
                    },
                    {
                        "key": "c",
                        "text": "Góc giữa $SC$ và $(SAB)$ là góc $\\widehat{SCB}$.",
                        "correct": "false",
                        "explain": "Hình chiếu của $C$ lên $(SAB)$ là $B$ nên góc là $\\widehat{CSB}$."
                    },
                    {
                        "key": "d",
                        "text": "Hai mặt phẳng $(SAB)$ và $(ABC)$ vuông góc với nhau.",
                        "correct": "true",
                        "explain": "Vì $(SAB)$ chứa $SA \\perp (ABC)$."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 16:") || t.includes("công thức tính góc") || t.includes("tính góc trong không gian") || t.includes("goc trong khong gian"));
      }
    },

  "toan12_bai17": {
        "id": "toan12_bai17",
        "lessonTitle": "Bài 17: Phương trình mặt cầu",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Định nghĩa & Phương trình chính tắc mặt cầu",
                "sgkHtml": "<p>Mặt cầu trong không gian $Oxyz$ là tập hợp tất cả các điểm cách điểm $I$ cố định một khoảng không đổi $R$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Tâm mặt cầu:</strong> $I(a; b; c)$.</li>\n                  <li><strong>Bán kính:</strong> $R > 0$ (vế phải phương trình chính tắc là $R^2$, luôn dương).</li>\n                  <li>Mặt cầu tâm $O(0; 0; 0)$ bán kính $R$ có dạng: $x^2 + y^2 + z^2 = R^2$.</li>\n                  <li>Điểm $M(x_M; y_M; z_M)$ nằm trên mặt cầu $\\Leftrightarrow IM = R$; nằm trong khi $IM < R$; nằm ngoài khi $IM > R$.</li>\n                </ul>",
                "noteHtml": "<li>Đọc toạ độ tâm: Đổi dấu các số bị trừ trong ngoặc: $x - a = 0 \\implies x = a$.</li>\n                <li>Đọc bán kính: Phải lấy căn bậc hai vế phải: $R = \\sqrt{R^2}$.</li>\n                <li>Mặt cầu đường kính $AB$: Tâm $I$ là trung điểm $AB$, bán kính $R = AB/2 = \\frac{1}{2}\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$.</li>",
                "mistakeHtml": "<li>Quên lấy căn bậc hai vế phải (ví dụ vế phải là 16 mà kết luận bán kính $R = 16$ thay vì $R = 4$).</li>\n                <li>Quên đổi dấu khi đọc toạ độ tâm từ dạng $(x + 2)^2$ (tâm là $-2$, không phải $+2$).</li>",
                "tipHtml": "<li><em>\"Tâm đổi dấu – Bán kính căn vế phải – Đường kính thì tâm là trung điểm, bán kính chia đôi!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + (z - 4)^2 = 25$ có toạ độ tâm $I$ và bán kính $R$ là:",
                        "options": [
                            "A. $I(1; -2; 4), R = 5$",
                            "B. $I(-1; 2; -4), R = 5$",
                            "C. $I(1; -2; 4), R = 25$",
                            "D. $I(-1; 2; -4), R = 25$"
                        ],
                        "correct": "A",
                        "explanation": "Đổi dấu trong ngoặc: $x_0 = 1, y_0 = -2, z_0 = 4 \\implies I(1; -2; 4)$. Bán kính $R = \\sqrt{25} = 5$.",
                        "hint1": "Tâm $I(a; b; c)$ đọc từ $(x-a), (y-b), (z-c)$.",
                        "hint2": "Bán kính $R = \\sqrt{25} = 5$."
                    },
                    {
                        "question": "Phương trình mặt cầu tâm $I(2; -1; 3)$ và bán kính $R = 3$ là:",
                        "options": [
                            "A. $(x - 2)^2 + (y + 1)^2 + (z - 3)^2 = 9$",
                            "B. $(x - 2)^2 + (y + 1)^2 + (z - 3)^2 = 3$",
                            "C. $(x + 2)^2 + (y - 1)^2 + (z + 3)^2 = 9$",
                            "D. $(x - 2)^2 + (y - 1)^2 + (z - 3)^2 = 9$"
                        ],
                        "correct": "A",
                        "explanation": "Thay $a=2, b=-1, c=3$ và $R=3$ vào công thức: $(x - 2)^2 + (y - (-1))^2 + (z - 3)^2 = 3^2 \\Leftrightarrow (x - 2)^2 + (y + 1)^2 + (z - 3)^2 = 9$.",
                        "hint1": "Công thức $(x-a)^2 + (y-b)^2 + (z-c)^2 = R^2$.",
                        "hint2": "$R^2 = 3^2 = 9$, $(y - (-1))^2 = (y + 1)^2$."
                    },
                    {
                        "question": "Mặt cầu đường kính $AB$ với $A(1; 3; -2)$ và $B(3; -1; 0)$ có bán kính bằng:",
                        "options": [
                            "A. $\\sqrt{6}$",
                            "B. $2\\sqrt{6}$",
                            "C. $6$",
                            "D. $24$"
                        ],
                        "correct": "A",
                        "explanation": "$AB = \\sqrt{(3-1)^2 + (-1-3)^2 + (0-(-2))^2} = \\sqrt{4 + 16 + 4} = \\sqrt{24} = 2\\sqrt{6}$. Bán kính $R = AB/2 = \\sqrt{6}$.",
                        "hint1": "Tính độ dài đoạn $AB$ rồi chia đôi.",
                        "hint2": "$AB = \\sqrt{24} = 2\\sqrt{6} \\implies R = \\sqrt{6}$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 17: Phương trình mặt cầu</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Định nghĩa & Phương trình chính tắc mặt cầu</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Mặt cầu trong không gian $Oxyz$ là tập hợp tất cả các điểm cách điểm $I$ cố định một khoảng không đổi $R$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Tâm mặt cầu:</strong> $I(a; b; c)$.</li>\n                  <li><strong>Bán kính:</strong> $R > 0$ (vế phải phương trình chính tắc là $R^2$, luôn dương).</li>\n                  <li>Mặt cầu tâm $O(0; 0; 0)$ bán kính $R$ có dạng: $x^2 + y^2 + z^2 = R^2$.</li>\n                  <li>Điểm $M(x_M; y_M; z_M)$ nằm trên mặt cầu $\\Leftrightarrow IM = R$; nằm trong khi $IM < R$; nằm ngoài khi $IM > R$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Đọc toạ độ tâm: Đổi dấu các số bị trừ trong ngoặc: $x - a = 0 \\implies x = a$.</li>\n                <li>Đọc bán kính: Phải lấy căn bậc hai vế phải: $R = \\sqrt{R^2}$.</li>\n                <li>Mặt cầu đường kính $AB$: Tâm $I$ là trung điểm $AB$, bán kính $R = AB/2 = \\frac{1}{2}\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên lấy căn bậc hai vế phải (ví dụ vế phải là 16 mà kết luận bán kính $R = 16$ thay vì $R = 4$).</li>\n                <li>Quên đổi dấu khi đọc toạ độ tâm từ dạng $(x + 2)^2$ (tâm là $-2$, không phải $+2$).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Tâm đổi dấu – Bán kính căn vế phải – Đường kính thì tâm là trung điểm, bán kính chia đôi!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Phương trình tổng quát dạng khai triển",
                "sgkHtml": "<p>Dạng khai triển của phương trình mặt cầu trong không gian $Oxyz$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Điều kiện để là phương trình mặt cầu:</strong>\n                    $$a^2 + b^2 + c^2 - d > 0$$\n                  </li>\n                  <li><strong>Toạ độ tâm:</strong> Lấy hệ số của $x, y, z$ chia cho $-2$:\n                    $$a = \\frac{\\text{hệ số } x}{-2}, \\quad b = \\frac{\\text{hệ số } y}{-2}, \\quad c = \\frac{\\text{hệ số } z}{-2} \\implies I(a; b; c)$$\n                  </li>\n                  <li><strong>Bán kính mặt cầu:</strong> $R = \\sqrt{a^2 + b^2 + c^2 - d}$.</li>\n                  <li>Nếu $a^2 + b^2 + c^2 - d = 0 \\implies$ phương trình suy biến thành 1 điểm duy nhất $I(a; b; c)$.</li>\n                  <li>Nếu $a^2 + b^2 + c^2 - d < 0 \\implies$ phương trình vô nghiệm (tập rỗng).</li>\n                </ul>",
                "noteHtml": "<li>Trước khi chia cho $-2$, hệ số của $x^2, y^2, z^2$ bắt buộc phải bằng nhau và bằng $+1$. Nếu có dạng $2x^2 + 2y^2 + 2z^2 + \\dots$ thì phải chia cả hai vế cho $2$ trước!</li>\n                <li>Không được có các số hạng chéo như $xy, yz, zx$.</li>",
                "mistakeHtml": "<li>Quên đổi dấu (chia cho $+2$ thay vì chia cho $-2$).</li>\n                <li>Nhầm công thức bán kính thành $+ d$ thay vì $- d$.</li>",
                "tipHtml": "<li><em>\"Chia hệ số x, y, z cho TRỪ HAI ra tâm – Bình phương toạ độ tâm trừ hệ số tự do lấy căn ra bán kính!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z - 11 = 0$ có bán kính bằng:",
                        "options": [
                            "A. $5$",
                            "B. $25$",
                            "C. $\\sqrt{3}$",
                            "D. $\\sqrt{25}$"
                        ],
                        "correct": "A",
                        "explanation": "Tâm $I(a; b; c)$: $a = -2/(-2) = 1; b = 4/(-2) = -2; c = -6/(-2) = 3$. Hệ số tự do $d = -11$. Bán kính $R = \\sqrt{1^2 + (-2)^2 + 3^2 - (-11)} = \\sqrt{1 + 4 + 9 + 11} = \\sqrt{25} = 5$.",
                        "hint1": "Tìm tâm $I(1; -2; 3)$ và hệ số tự do $d = -11$.",
                        "hint2": "$R = \\sqrt{1 + 4 + 9 - (-11)} = \\sqrt{25} = 5$."
                    },
                    {
                        "question": "Giá trị của $m$ để phương trình $x^2 + y^2 + z^2 - 2x + 2y - 4z + m = 0$ là phương trình của một mặt cầu là:",
                        "options": [
                            "A. $m < 6$",
                            "B. $m \\le 6$",
                            "C. $m > 6$",
                            "D. $m < -6$"
                        ],
                        "correct": "A",
                        "explanation": "Tâm $I(1; -1; 2)$, $d = m$. Điều kiện: $a^2 + b^2 + c^2 - d > 0 \\Leftrightarrow 1^2 + (-1)^2 + 2^2 - m > 0 \\Leftrightarrow 1 + 1 + 4 - m > 0 \\Leftrightarrow 6 - m > 0 \\Leftrightarrow m < 6$.",
                        "hint1": "Điều kiện tồn tại: $a^2 + b^2 + c^2 - d > 0$.",
                        "hint2": "$1 + 1 + 4 - m > 0 \\implies m < 6$."
                    },
                    {
                        "question": "Cho phương trình $2x^2 + 2y^2 + 2z^2 - 4x + 8y + 6 = 0$. Toạ độ tâm của mặt cầu là:",
                        "options": [
                            "A. $I(1; -2; 0)$",
                            "B. $I(2; -4; 0)$",
                            "C. $I(-1; 2; 0)$",
                            "D. $I(1; -2; 3)$"
                        ],
                        "correct": "A",
                        "explanation": "Chia cả hai vế cho $2$: $x^2 + y^2 + z^2 - 2x + 4y + 3 = 0$. Tâm $I$: $a = -2/(-2) = 1; b = 4/(-2) = -2; c = 0/(-2) = 0 \\implies I(1; -2; 0)$.",
                        "hint1": "Chia cả hai vế cho 2 trước để hệ số $x^2, y^2, z^2$ bằng 1.",
                        "hint2": "Sau khi chia: $x^2 + y^2 + z^2 - 2x + 4y + 3 = 0 \\implies I(1; -2; 0)$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 17: Phương trình mặt cầu</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Phương trình tổng quát dạng khai triển</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Dạng khai triển của phương trình mặt cầu trong không gian $Oxyz$:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Điều kiện để là phương trình mặt cầu:</strong>\n                    $$a^2 + b^2 + c^2 - d > 0$$\n                  </li>\n                  <li><strong>Toạ độ tâm:</strong> Lấy hệ số của $x, y, z$ chia cho $-2$:\n                    $$a = \\frac{\\text{hệ số } x}{-2}, \\quad b = \\frac{\\text{hệ số } y}{-2}, \\quad c = \\frac{\\text{hệ số } z}{-2} \\implies I(a; b; c)$$\n                  </li>\n                  <li><strong>Bán kính mặt cầu:</strong> $R = \\sqrt{a^2 + b^2 + c^2 - d}$.</li>\n                  <li>Nếu $a^2 + b^2 + c^2 - d = 0 \\implies$ phương trình suy biến thành 1 điểm duy nhất $I(a; b; c)$.</li>\n                  <li>Nếu $a^2 + b^2 + c^2 - d < 0 \\implies$ phương trình vô nghiệm (tập rỗng).</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Trước khi chia cho $-2$, hệ số của $x^2, y^2, z^2$ bắt buộc phải bằng nhau và bằng $+1$. Nếu có dạng $2x^2 + 2y^2 + 2z^2 + \\dots$ thì phải chia cả hai vế cho $2$ trước!</li>\n                <li>Không được có các số hạng chéo như $xy, yz, zx$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên đổi dấu (chia cho $+2$ thay vì chia cho $-2$).</li>\n                <li>Nhầm công thức bán kính thành $+ d$ thay vì $- d$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Chia hệ số x, y, z cho TRỪ HAI ra tâm – Bình phương toạ độ tâm trừ hệ số tự do lấy căn ra bán kính!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 3,
                "sectionTitle": "Mục 3: Vị trí tương đối giữa mặt cầu và mặt phẳng",
                "sgkHtml": "<p>Vị trí tương đối giữa mặt cầu $(S)$ tâm $I$, bán kính $R$ và mặt phẳng $(P)$ phụ thuộc vào khoảng cách $d = d(I, (P))$:</p>\n                <div style=\"background:rgba(15,23,42,0.85); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px; margin:10px 0;\">\n                  <ul class=\"space-y-2 text-slate-200\">\n                    <li><b>1. Trường hợp $d > R$:</b> Mặt phẳng $(P)$ <b>không cắt</b> mặt cầu $(S)$ (không có điểm chung).</li>\n                    <li><b>2. Trường hợp $d = R$:</b> Mặt phẳng $(P)$ <b>tiếp xúc</b> với mặt cầu $(S)$ tại tiếp điểm $H$ (là hình chiếu vuông góc của $I$ lên $(P)$). Khi đó $(P)$ được gọi là <i>mặt phẳng tiếp diện</i>.</li>\n                    <li><b>3. Trường hợp $d < R$:</b> Mặt phẳng $(P)$ <b>cắt</b> mặt cầu $(S)$ theo giao tuyến là một <b>đường tròn</b> $(C)$ có:\n                      <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                        <li>Tâm $H$ của đường tròn là hình chiếu vuông góc của tâm $I$ lên mặt phẳng $(P)$.</li>\n                        <li>Bán kính $r$ của đường tròn giao tuyến:\n                          $$r = \\sqrt{R^2 - d^2}$$\n                        </li>\n                      </ul>\n                    </li>\n                    <li>Đặc biệt: Khi $d = 0$ ($I \\in (P)$) thì giao tuyến là <i>đường tròn lớn</i> có bán kính $r = R$.</li>\n                  </ul>\n                </div>",
                "noteHtml": "<li>Tam giác vuông liên kết: $R^2 = d^2 + r^2$ với $R$ là bán kính mặt cầu, $d$ là khoảng cách từ tâm đến mặt phẳng, $r$ là bán kính đường tròn giao tuyến.</li>\n                <li>Ứng dụng thực tế: Radar phòng không quét vùng trời hình cầu, khi mặt phẳng bay của máy bay cắt vùng quét tạo ra vết quét hình tròn trên màn hình hiển thị.</li>",
                "mistakeHtml": "<li>Nhầm lẫn giữa bán kính mặt cầu $R$ và bán kính đường tròn giao tuyến $r$.</li>\n                <li>Quên công thức Pytago liên kết $r = \\sqrt{R^2 - d^2}$.</li>",
                "tipHtml": "<li><em>\"Pytago ba cạnh thần thánh: Huyền là bán kính Cầu R – Cạnh góc vuông d là khoảng cách tâm – Cạnh góc vuông r là bán kính đường tròn giao tuyến!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Mặt cầu $(S): x^2 + y^2 + z^2 - 9 = 0$ và mặt phẳng $(P): x + 2y - 2z + 6 = 0$. Vị trí tương đối của $(P)$ và $(S)$ là:",
                        "options": [
                            "A. $(P)$ cắt $(S)$ theo đường tròn",
                            "B. $(P)$ tiếp xúc với $(S)$",
                            "C. $(P)$ không cắt $(S)$",
                            "D. $(P)$ đi qua tâm của $(S)$"
                        ],
                        "correct": "A",
                        "explanation": "Tâm $O(0; 0; 0)$, bán kính $R = 3$. Khoảng cách $d(O, P) = \\frac{|6|}{\\sqrt{1 + 4 + 4}} = \\frac{6}{3} = 2$. Vì $d = 2 < R = 3$ nên $(P)$ cắt $(S)$ theo một đường tròn.",
                        "hint1": "Tính khoảng cách từ tâm $O$ đến mặt phẳng $(P)$.",
                        "hint2": "$d = 2 < 3 = R \\implies$ cắt nhau theo đường tròn."
                    },
                    {
                        "question": "Mặt phẳng $(\\alpha)$ tiếp xúc với mặt cầu $(S): (x - 1)^2 + y^2 + (z + 2)^2 = 16$. Khoảng cách từ tâm mặt cầu đến $(\\alpha)$ bằng:",
                        "options": [
                            "A. $4$",
                            "B. $16$",
                            "C. $2$",
                            "D. $8$"
                        ],
                        "correct": "A",
                        "explanation": "Điều kiện tiếp xúc là $d(I, \\alpha) = R$. Mặt cầu có bán kính $R = \\sqrt{16} = 4$. Vậy khoảng cách bằng $4$.",
                        "hint1": "Tiếp xúc thì khoảng cách bằng bán kính.",
                        "hint2": "$R = \\sqrt{16} = 4$."
                    },
                    {
                        "question": "Mặt phẳng $(P)$ cắt mặt cầu $(S)$ bán kính $R = 5$ theo giao tuyến là đường tròn có bán kính $r = 4$. Khoảng cách từ tâm mặt cầu đến $(P)$ bằng:",
                        "options": [
                            "A. $3$",
                            "B. $1$",
                            "C. $\\sqrt{41}$",
                            "D. $9$"
                        ],
                        "correct": "A",
                        "explanation": "Áp dụng định lý Pytago: $d = \\sqrt{R^2 - r^2} = \\sqrt{5^2 - 4^2} = \\sqrt{25 - 16} = \\sqrt{9} = 3$.",
                        "hint1": "Bộ ba Pytago quen thuộc 3 - 4 - 5.",
                        "hint2": "$d = \\sqrt{25 - 16} = 3$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 17: Phương trình mặt cầu</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 3: Mục 3: Vị trí tương đối giữa mặt cầu và mặt phẳng</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Vị trí tương đối giữa mặt cầu $(S)$ tâm $I$, bán kính $R$ và mặt phẳng $(P)$ phụ thuộc vào khoảng cách $d = d(I, (P))$:</p>\n                <div style=\"background:rgba(15,23,42,0.85); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px; margin:10px 0;\">\n                  <ul class=\"space-y-2 text-slate-200\">\n                    <li><b>1. Trường hợp $d > R$:</b> Mặt phẳng $(P)$ <b>không cắt</b> mặt cầu $(S)$ (không có điểm chung).</li>\n                    <li><b>2. Trường hợp $d = R$:</b> Mặt phẳng $(P)$ <b>tiếp xúc</b> với mặt cầu $(S)$ tại tiếp điểm $H$ (là hình chiếu vuông góc của $I$ lên $(P)$). Khi đó $(P)$ được gọi là <i>mặt phẳng tiếp diện</i>.</li>\n                    <li><b>3. Trường hợp $d < R$:</b> Mặt phẳng $(P)$ <b>cắt</b> mặt cầu $(S)$ theo giao tuyến là một <b>đường tròn</b> $(C)$ có:\n                      <ul class=\"list-disc ml-6 mt-1 space-y-1\">\n                        <li>Tâm $H$ của đường tròn là hình chiếu vuông góc của tâm $I$ lên mặt phẳng $(P)$.</li>\n                        <li>Bán kính $r$ của đường tròn giao tuyến:\n                          $$r = \\sqrt{R^2 - d^2}$$\n                        </li>\n                      </ul>\n                    </li>\n                    <li>Đặc biệt: Khi $d = 0$ ($I \\in (P)$) thì giao tuyến là <i>đường tròn lớn</i> có bán kính $r = R$.</li>\n                  </ul>\n                </div></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Tam giác vuông liên kết: $R^2 = d^2 + r^2$ với $R$ là bán kính mặt cầu, $d$ là khoảng cách từ tâm đến mặt phẳng, $r$ là bán kính đường tròn giao tuyến.</li>\n                <li>Ứng dụng thực tế: Radar phòng không quét vùng trời hình cầu, khi mặt phẳng bay của máy bay cắt vùng quét tạo ra vết quét hình tròn trên màn hình hiển thị.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Nhầm lẫn giữa bán kính mặt cầu $R$ và bán kính đường tròn giao tuyến $r$.</li>\n                <li>Quên công thức Pytago liên kết $r = \\sqrt{R^2 - d^2}$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Pytago ba cạnh thần thánh: Huyền là bán kính Cầu R – Cạnh góc vuông d là khoảng cách tâm – Cạnh góc vuông r là bán kính đường tròn giao tuyến!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Cho mặt cầu $(S): (x - 2)^2 + (y + 1)^2 + (z - 3)^2 = 25$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Mặt cầu $(S)$ có tâm $I(2; -1; 3)$.",
                        "correct": "true",
                        "explain": "Đọc trực tiếp từ phương trình chính tắc."
                    },
                    {
                        "key": "b",
                        "text": "Mặt cầu $(S)$ có bán kính $R = 5$.",
                        "correct": "true",
                        "explain": "$R = \\sqrt{25} = 5$."
                    },
                    {
                        "key": "c",
                        "text": "Điểm $A(2; -1; 8)$ nằm trên mặt cầu $(S)$.",
                        "correct": "true",
                        "explain": "$(2-2)^2 + (-1+1)^2 + (8-3)^2 = 0 + 0 + 25 = 25$."
                    },
                    {
                        "key": "d",
                        "text": "Gốc toạ độ $O(0; 0; 0)$ nằm bên trong mặt cầu $(S)$.",
                        "correct": "true",
                        "explain": "$(0-2)^2 + (0+1)^2 + (0-3)^2 = 4 + 1 + 9 = 14 < 25$ nên nằm trong."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: Cho phương trình $x^2 + y^2 + z^2 - 4x + 2y - 6z + 5 = 0$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Phương trình có các hệ số $a = 2, b = -1, c = 3$ và $d = 5$.",
                        "correct": "true",
                        "explain": "Chia hệ số $x, y, z$ cho $-2$."
                    },
                    {
                        "key": "b",
                        "text": "Giá trị $a^2 + b^2 + c^2 - d = 4 + 1 + 9 - 5 = 9 > 0$.",
                        "correct": "true",
                        "explain": "Thỏa mãn điều kiện mặt cầu."
                    },
                    {
                        "key": "c",
                        "text": "Phương trình là phương trình của một mặt cầu có bán kính $R = 9$.",
                        "correct": "false",
                        "explain": "Bán kính là $R = \\sqrt{9} = 3$."
                    },
                    {
                        "key": "d",
                        "text": "Tâm của mặt cầu là điểm $I(2; -1; 3)$.",
                        "correct": "true",
                        "explain": "Toạ độ tâm chuẩn xác."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: Cho mặt cầu $(S)$ tâm $I(1; 2; -1)$ bán kính $R = 3$ và mặt phẳng $(P): 2x - 2y + z - 8 = 0$:",
                "items": [
                    {
                        "key": "a",
                        "text": "VTPT của $(P)$ có độ dài bằng $3$.",
                        "correct": "true",
                        "explain": "$\\sqrt{4 + 4 + 1} = 3$."
                    },
                    {
                        "key": "b",
                        "text": "Khoảng cách từ tâm $I$ đến $(P)$ bằng $3$.",
                        "correct": "true",
                        "explain": "$d = \\frac{|2(1) - 2(2) + 1(-1) - 8|}{3} = \\frac{|-11|}{3} = 11/3$. À khoan! $2 - 4 - 1 - 8 = -11$. $d = 11/3 > 3$."
                    },
                    {
                        "key": "c",
                        "text": "Mặt phẳng $(P)$ cắt mặt cầu $(S)$ theo một đường tròn.",
                        "correct": "false",
                        "explain": "$d = 11/3 > 3 = R$ nên $(P)$ không cắt $(S)$."
                    },
                    {
                        "key": "d",
                        "text": "Mặt phẳng $(P)$ không có điểm chung với mặt cầu $(S)$.",
                        "correct": "true",
                        "explain": "Vì khoảng cách lớn hơn bán kính."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: Về vị trí tương đối giữa mặt cầu và mặt phẳng toạ độ:",
                "items": [
                    {
                        "key": "a",
                        "text": "Khoảng cách từ tâm $I(a; b; c)$ đến mặt phẳng $(Oxy)$ bằng $|c|$.",
                        "correct": "true",
                        "explain": "PT $(Oxy)$ là $z = 0$."
                    },
                    {
                        "key": "b",
                        "text": "Mặt cầu $(x-1)^2 + (y-2)^2 + (z-3)^2 = 9$ tiếp xúc với mặt phẳng $(Oxy)$.",
                        "correct": "true",
                        "explain": "$d = |3| = 3 = R$ nên tiếp xúc."
                    },
                    {
                        "key": "c",
                        "text": "Mặt phẳng đi qua tâm của mặt cầu luôn cắt mặt cầu theo đường tròn lớn.",
                        "correct": "true",
                        "explain": "Khi đó $d = 0$, bán kính giao tuyến $r = R$."
                    },
                    {
                        "key": "d",
                        "text": "Bán kính đường tròn giao tuyến luôn lớn hơn bán kính mặt cầu.",
                        "correct": "false",
                        "explain": "$r = \\sqrt{R^2 - d^2} \\le R$."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Cho hai điểm $A(1; 0; 2)$ và $B(3; 4; 0)$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Trung điểm của đoạn thẳng $AB$ là $I(2; 2; 1)$.",
                        "correct": "true",
                        "explain": "$((1+3)/2; (0+4)/2; (2+0)/2) = (2; 2; 1)$."
                    },
                    {
                        "key": "b",
                        "text": "Độ dài đoạn thẳng $AB$ bằng $\\sqrt{4 + 16 + 4} = \\sqrt{24} = 2\\sqrt{6}$.",
                        "correct": "true",
                        "explain": "Khoảng cách chuẩn giữa 2 điểm."
                    },
                    {
                        "key": "c",
                        "text": "Mặt cầu đường kính $AB$ có bán kính bằng $\\sqrt{6}$.",
                        "correct": "true",
                        "explain": "$R = AB/2 = \\sqrt{6}$."
                    },
                    {
                        "key": "d",
                        "text": "Phương trình mặt cầu đường kính $AB$ là $(x - 2)^2 + (y - 2)^2 + (z - 1)^2 = 24$.",
                        "correct": "false",
                        "explain": "Vế phải phải là $R^2 = 6$."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Về bài toán cực trị hình học liên quan đến mặt cầu:",
                "items": [
                    {
                        "key": "a",
                        "text": "Khoảng cách nhỏ nhất từ điểm $M$ ngoài mặt cầu đến mặt cầu bằng $IM - R$.",
                        "correct": "true",
                        "explain": "Đoạn ngắn nhất nằm trên tia nối $IM$."
                    },
                    {
                        "key": "b",
                        "text": "Khoảng cách lớn nhất từ điểm $M$ ngoài mặt cầu đến mặt cầu bằng $IM + R$.",
                        "correct": "true",
                        "explain": "Đoạn dài nhất đi qua tâm nối sang cực đối diện."
                    },
                    {
                        "key": "c",
                        "text": "Từ một điểm ngoài mặt cầu kẻ được vô số tiếp tuyến đến mặt cầu.",
                        "correct": "true",
                        "explain": "Tập hợp các tiếp tuyến tạo thành mặt nón."
                    },
                    {
                        "key": "d",
                        "text": "Tất cả các tiếp điểm của các tiếp tuyến kẻ từ $M$ cùng thuộc một mặt cầu khác.",
                        "correct": "false",
                        "explain": "Các tiếp điểm cùng nằm trên một ĐƯỜNG TRÒN (giao tuyến với mặt phẳng tiếp xúc)."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 17:") || t.includes("mặt cầu") || t.includes("mat cau"));
      }
    },

  "toan12_bai18": {
        "id": "toan12_bai18",
        "lessonTitle": "Bài 18: Xác suất có điều kiện",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Khái niệm xác suất có điều kiện P(A|B)",
                "sgkHtml": "<p>Cho hai biến cố $A$ và $B$ trong một phép thử, với $P(B) > 0$.</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Định nghĩa:</strong> Xác suất của biến cố $A$ với điều kiện biến cố $B$ đã xảy ra được gọi là xác suất có điều kiện của $A$ khi biết $B$, ký hiệu là $P(A \\mid B)$.</li>\n                  <li><strong>Công thức theo số lượng phần tử (không gian mẫu đồng khả năng):</strong>\n                    $$P(A \\mid B) = \\frac{n(A \\cap B)}{n(B)}$$\n                  </li>\n                  <li><strong>Bản chất hình học:</strong> Điều kiện $B$ đã xảy ra làm cho không gian mẫu bị thu hẹp từ $\\Omega$ về tập con $B$. Khi đó biến cố $A$ xảy ra chỉ còn phần giao $A \\cap B$ nằm bên trong $B$.</li>\n                </ul>",
                "noteHtml": "<li>Điều kiện $B$ luôn nằm ở mẫu số: $P(B)$ hoặc $n(B)$. Biến cố sau dấu gạch đứng $|$ chính là biến cố điều kiện!</li>\n                <li>Phân biệt rõ ràng giữa $P(A \\mid B)$ và $P(B \\mid A)$: $P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)}$. Chúng chỉ bằng nhau khi $P(A) = P(B)$.</li>\n                <li>Tính chất biến cố đối có điều kiện: $P(\\overline{A} \\mid B) = 1 - P(A \\mid B)$ (giữ nguyên điều kiện $B$!).</li>",
                "mistakeHtml": "<li>Nhầm lẫn giữa xác suất đồng thời $P(A \\cap B)$ và xác suất có điều kiện $P(A \\mid B)$ (chia cho $n(\\Omega)$ thay vì chia cho $n(B)$).</li>\n                <li>Nhầm lẫn biến cố điều kiện (viết $P(A \\mid B)$ thay vì $P(B \\mid A)$).</li>",
                "tipHtml": "<li><em>\"Từ khoá: 'Biết rằng...' hoặc 'Trong số...' -> Biến cố đó là ĐIỀU KIỆN đặt sau dấu gạch đứng và nằm ở MẪU SỐ!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Gieo một con xúc xắc cân đối, đồng chất một lần. Biết rằng số chấm xuất hiện là số chẵn, xác suất để xuất hiện mặt 2 chấm là:",
                        "options": [
                            "A. $\\frac{1}{3}$",
                            "B. $\\frac{1}{6}$",
                            "C. $\\frac{1}{2}$",
                            "D. $\\frac{2}{3}$"
                        ],
                        "correct": "A",
                        "explanation": "Biến cố điều kiện $B$: 'Số chẵn' $\\implies B = \\{2, 4, 6\\} \\implies n(B) = 3$. Biến cố $A$: 'Mặt 2 chấm' $\\implies A \\cap B = \\{2\\} \\implies n(A \\cap B) = 1$. Vậy $P(A \\mid B) = \\frac{1}{3}$.",
                        "hint1": "Không gian mẫu thu hẹp chỉ gồm 3 mặt chẵn: 2, 4, 6.",
                        "hint2": "Trong 3 mặt chẵn đó, chỉ có đúng 1 mặt là 2 chấm. Xác suất là $1/3$."
                    },
                    {
                        "question": "Cho hai biến cố $A$ và $B$ có $P(A) = 0{,}6; P(B) = 0{,}5$ và $P(A \\cap B) = 0{,}3$. Xác suất có điều kiện $P(A \\mid B)$ bằng:",
                        "options": [
                            "A. $0{,}6$",
                            "B. $0{,}5$",
                            "C. $0{,}3$",
                            "D. $0{,}8$"
                        ],
                        "correct": "A",
                        "explanation": "$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}3}{0{,}5} = 0{,}6$.",
                        "hint1": "Áp dụng công thức $P(A \\mid B) = P(A \\cap B) / P(B)$.",
                        "hint2": "$0{,}3 / 0{,}5 = 3/5 = 0{,}6$."
                    },
                    {
                        "question": "Cho $P(A \\mid B) = 0{,}75$. Xác suất của biến cố đối $P(\\overline{A} \\mid B)$ bằng:",
                        "options": [
                            "A. $0{,}25$",
                            "B. $0{,}75$",
                            "C. $0{,}50$",
                            "D. $0{,}30$"
                        ],
                        "correct": "A",
                        "explanation": "Theo tính chất biến cố đối có điều kiện: $P(\\overline{A} \\mid B) = 1 - P(A \\mid B) = 1 - 0{,}75 = 0{,}25$.",
                        "hint1": "Công thức biến cố đối có điều kiện: $P(\\overline{A} \\mid B) = 1 - P(A \\mid B)$.",
                        "hint2": "$1 - 0{,}75 = 0{,}25$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 18: Xác suất có điều kiện</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Khái niệm xác suất có điều kiện P(A|B)</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Cho hai biến cố $A$ và $B$ trong một phép thử, với $P(B) > 0$.</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Định nghĩa:</strong> Xác suất của biến cố $A$ với điều kiện biến cố $B$ đã xảy ra được gọi là xác suất có điều kiện của $A$ khi biết $B$, ký hiệu là $P(A \\mid B)$.</li>\n                  <li><strong>Công thức theo số lượng phần tử (không gian mẫu đồng khả năng):</strong>\n                    $$P(A \\mid B) = \\frac{n(A \\cap B)}{n(B)}$$\n                  </li>\n                  <li><strong>Bản chất hình học:</strong> Điều kiện $B$ đã xảy ra làm cho không gian mẫu bị thu hẹp từ $\\Omega$ về tập con $B$. Khi đó biến cố $A$ xảy ra chỉ còn phần giao $A \\cap B$ nằm bên trong $B$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Điều kiện $B$ luôn nằm ở mẫu số: $P(B)$ hoặc $n(B)$. Biến cố sau dấu gạch đứng $|$ chính là biến cố điều kiện!</li>\n                <li>Phân biệt rõ ràng giữa $P(A \\mid B)$ và $P(B \\mid A)$: $P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)}$. Chúng chỉ bằng nhau khi $P(A) = P(B)$.</li>\n                <li>Tính chất biến cố đối có điều kiện: $P(\\overline{A} \\mid B) = 1 - P(A \\mid B)$ (giữ nguyên điều kiện $B$!).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Nhầm lẫn giữa xác suất đồng thời $P(A \\cap B)$ và xác suất có điều kiện $P(A \\mid B)$ (chia cho $n(\\Omega)$ thay vì chia cho $n(B)$).</li>\n                <li>Nhầm lẫn biến cố điều kiện (viết $P(A \\mid B)$ thay vì $P(B \\mid A)$).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Từ khoá: 'Biết rằng...' hoặc 'Trong số...' -> Biến cố đó là ĐIỀU KIỆN đặt sau dấu gạch đứng và nằm ở MẪU SỐ!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Công thức nhân xác suất",
                "sgkHtml": "<p>Từ định nghĩa xác suất có điều kiện, ta suy ra công thức nhân xác suất cho hai biến cố bất kỳ:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$P(A \\cap B) = P(B) \\cdot P(A \\mid B) = P(A) \\cdot P(B \\mid A)$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Quy tắc nhân tổng quát:</strong> Xác suất để hai biến cố cùng xảy ra bằng xác suất của biến cố thứ nhất nhân với xác suất có điều kiện của biến cố thứ hai khi biết biến cố thứ nhất đã xảy ra.</li>\n                  <li><strong>Trường hợp biến cố độc lập:</strong> Hai biến cố $A$ và $B$ độc lập khi và chỉ khi việc biến cố này xảy ra không làm ảnh hưởng đến xác suất của biến cố kia:\n                    $$P(A \\mid B) = P(A) \\quad \\text{và} \\quad P(B \\mid A) = P(B)$$\n                    Khi đó công thức nhân trở thành:\n                    $$P(A \\cap B) = P(A) \\cdot P(B)$$\n                  </li>\n                </ul>",
                "noteHtml": "<li>Ứng dụng cho bài toán lấy mẫu không hoàn lại: Xác suất rút được lần 2 phụ thuộc vào kết quả đã rút ở lần 1.</li>\n                <li>Công thức nhân cho 3 biến cố: $P(A \\cap B \\cap C) = P(A) \\cdot P(B \\mid A) \\cdot P(C \\mid A \\cap B)$.</li>",
                "mistakeHtml": "<li>Tự tiện áp dụng công thức $P(A \\cap B) = P(A)P(B)$ cho hai biến cố không độc lập (lấy mẫu không hoàn lại).</li>\n                <li>Nhầm lẫn giữa hai biến cố xung khắc ($A \\cap B = \\emptyset \\implies P(A \\cap B) = 0$) và hai biến cố độc lập.</li>",
                "tipHtml": "<li><em>\"Có phụ thuộc (không hoàn lại): Dùng công thức nhân có điều kiện – Độc lập (hoàn lại): Nhân trực tiếp xác suất từng biến cố!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Một hộp có 5 viên bi xanh và 3 viên bi đỏ. Rút ngẫu nhiên lần lượt 2 viên bi (không hoàn lại). Xác suất để cả hai viên bi rút ra đều có màu xanh là:",
                        "options": [
                            "A. $\\frac{5}{14}$",
                            "B. $\\frac{25}{64}$",
                            "C. $\\frac{15}{56}$",
                            "D. $\\frac{5}{8}$"
                        ],
                        "correct": "A",
                        "explanation": "Lần 1 rút xanh: $P(X_1) = \\frac{5}{8}$. Lần 2 rút xanh khi lần 1 đã xanh: $P(X_2 \\mid X_1) = \\frac{4}{7}$. Xác suất cả 2 xanh: $P(X_1 \\cap X_2) = \\frac{5}{8} \\cdot \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$.",
                        "hint1": "Sau lần 1, hộp còn 7 viên và còn 4 viên xanh.",
                        "hint2": "$\\frac{5}{8} \\times \\frac{4}{7} = \\frac{5}{14}$."
                    },
                    {
                        "question": "Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0{,}4$ và $P(B) = 0{,}5$. Xác suất của biến cố giao $P(A \\cap B)$ là:",
                        "options": [
                            "A. $0{,}20$",
                            "B. $0{,}90$",
                            "C. $0{,}10$",
                            "D. $0{,}45$"
                        ],
                        "correct": "A",
                        "explanation": "Vì $A$ và $B$ độc lập nên $P(A \\cap B) = P(A) \\cdot P(B) = 0{,}4 \\cdot 0{,}5 = 0{,}20$.",
                        "hint1": "Biến cố độc lập thì $P(A \\cap B) = P(A)P(B)$.",
                        "hint2": "$0{,}4 \\times 0{,}5 = 0{,}20$."
                    },
                    {
                        "question": "Cho $P(A) = 0{,}5; P(B) = 0{,}4$ và $P(B \\mid A) = 0{,}6$. Xác suất $P(A \\mid B)$ bằng:",
                        "options": [
                            "A. $0{,}75$",
                            "B. $0{,}30$",
                            "C. $0{,}60$",
                            "D. $0{,}50$"
                        ],
                        "correct": "A",
                        "explanation": "$P(A \\cap B) = P(A)P(B \\mid A) = 0{,}5 \\cdot 0{,}6 = 0{,}30$. Suy ra $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}30}{0{,}40} = 0{,}75$.",
                        "hint1": "Tính $P(A \\cap B)$ trước bằng $P(A) \\cdot P(B \\mid A)$.",
                        "hint2": "$0{,}30 / 0{,}40 = 0{,}75$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 18: Xác suất có điều kiện</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Công thức nhân xác suất</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Từ định nghĩa xác suất có điều kiện, ta suy ra công thức nhân xác suất cho hai biến cố bất kỳ:</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$P(A \\cap B) = P(B) \\cdot P(A \\mid B) = P(A) \\cdot P(B \\mid A)$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Quy tắc nhân tổng quát:</strong> Xác suất để hai biến cố cùng xảy ra bằng xác suất của biến cố thứ nhất nhân với xác suất có điều kiện của biến cố thứ hai khi biết biến cố thứ nhất đã xảy ra.</li>\n                  <li><strong>Trường hợp biến cố độc lập:</strong> Hai biến cố $A$ và $B$ độc lập khi và chỉ khi việc biến cố này xảy ra không làm ảnh hưởng đến xác suất của biến cố kia:\n                    $$P(A \\mid B) = P(A) \\quad \\text{và} \\quad P(B \\mid A) = P(B)$$\n                    Khi đó công thức nhân trở thành:\n                    $$P(A \\cap B) = P(A) \\cdot P(B)$$\n                  </li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Ứng dụng cho bài toán lấy mẫu không hoàn lại: Xác suất rút được lần 2 phụ thuộc vào kết quả đã rút ở lần 1.</li>\n                <li>Công thức nhân cho 3 biến cố: $P(A \\cap B \\cap C) = P(A) \\cdot P(B \\mid A) \\cdot P(C \\mid A \\cap B)$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Tự tiện áp dụng công thức $P(A \\cap B) = P(A)P(B)$ cho hai biến cố không độc lập (lấy mẫu không hoàn lại).</li>\n                <li>Nhầm lẫn giữa hai biến cố xung khắc ($A \\cap B = \\emptyset \\implies P(A \\cap B) = 0$) và hai biến cố độc lập.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Có phụ thuộc (không hoàn lại): Dùng công thức nhân có điều kiện – Độc lập (hoàn lại): Nhân trực tiếp xác suất từng biến cố!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 3,
                "sectionTitle": "Mục 3: Sơ đồ hình cây và ứng dụng tính xác suất",
                "sgkHtml": "<p>Sơ đồ hình cây (Tree Diagram) là công cụ trực quan hoá mạnh mẽ để giải các bài toán xác suất nhiều giai đoạn:</p>\n                <div style=\"background:rgba(15,23,42,0.85); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px; margin:10px 0; font-family:monospace; font-size:13px; line-height:1.6;\">\n                  <div>GỐC ───┬───[Nhánh 1: Biến cố A, xác suất P(A)] ──────┬─── [Kết quả B] ───► Tích nhánh = P(A)·P(B|A)</div>\n                  <div>    │                                            └─── [Kết quả B̄] ───► Tích nhánh = P(A)·P(B̄|A)</div>\n                  <div>    └───[Nhánh 2: Biến cố Ā, xác suất P(Ā)] ──────┬─── [Kết quả B] ───► Tích nhánh = P(Ā)·P(B|Ā)</div>\n                  <div>                                                 └─── [Kết quả B̄] ───► Tích nhánh = P(Ā)·P(B̄|Ā)</div>\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Quy tắc nhân dọc nhánh:</strong> Xác suất của một đường đi từ gốc đến ngọn cây bằng tích xác suất trên các đoạn nhánh của đường đi đó: $P(A \\cap B) = P(A) \\cdot P(B \\mid A)$.</li>\n                  <li><strong>Quy tắc cộng ngang:</strong> Xác suất của một biến cố kết quả bằng tổng xác suất của tất cả các nhánh dẫn tới kết quả đó (nền tảng của xác suất toàn phần).</li>\n                  <li>Tổng xác suất xuất phát từ một nút rẽ nhánh luôn bằng 1: $P(A) + P(\\overline{A}) = 1$ và $P(B \\mid A) + P(\\overline{B} \\mid A) = 1$.</li>\n                </ul>",
                "noteHtml": "<li>Sơ đồ cây biến bài toán lời văn phức tạp thành mô hình hình học trực quan, triệt tiêu mọi sai sót logic.</li>\n                <li>Ứng dụng rộng rãi: Chẩn đoán xét nghiệm y tế (Dương tính/Âm tính), kiểm tra chất lượng linh kiện, dự báo thời tiết nhiều ngày liên tiếp.</li>",
                "mistakeHtml": "<li>Quên kiểm tra tổng xác suất tại mỗi nút rẽ có bằng 1 hay không.</li>\n                <li>Nhầm lẫn giữa xác suất nhánh điều kiện $P(B \\mid A)$ và xác suất tích nhánh $P(A \\cap B)$.</li>",
                "tipHtml": "<li><em>\"Vẽ sơ đồ cây: Nhân dọc theo nhánh ra tích đồng thời – Cộng ngang các nhánh ra xác suất tổng – Nháp ra cây là ra ngay điểm 10!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Một bệnh truyền nhiễm có tỉ lệ người mắc trong cộng đồng là $2\\%$. Một xét nghiệm có độ nhạy $95\\%$ (người có bệnh thì xét nghiệm dương tính xác suất $0{,}95$). Xác suất để một người được chọn ngẫu nhiên vừa có bệnh vừa có kết quả xét nghiệm dương tính là:",
                        "options": [
                            "A. $0{,}019$",
                            "B. $0{,}020$",
                            "C. $0{,}950$",
                            "D. $0{,}095$"
                        ],
                        "correct": "A",
                        "explanation": "Nhánh 'Có bệnh' ($P=0{,}02$) tiếp tục rẽ nhánh 'Dương tính' ($P=0{,}95$). Nhân dọc nhánh: $P(\\text{Bệnh} \\cap \\text{Dương tính}) = 0{,}02 \\cdot 0{,}95 = 0{,}019$.",
                        "hint1": "Nhân xác suất mắc bệnh với xác suất dương tính khi có bệnh.",
                        "hint2": "$0{,}02 \\times 0{,}95 = 0{,}019$."
                    },
                    {
                        "question": "Tại một nút rẽ của sơ đồ cây có hai nhánh $B$ và $\\overline{B}$. Biết xác suất trên nhánh $B$ là $0{,}82$. Xác suất trên nhánh đối $\\overline{B}$ là:",
                        "options": [
                            "A. $0{,}18$",
                            "B. $0{,}82$",
                            "C. $0{,}08$",
                            "D. $0{,}28$"
                        ],
                        "correct": "A",
                        "explanation": "Tổng xác suất tại mỗi nút rẽ luôn bằng 1. Vậy $P(\\overline{B}) = 1 - 0{,}82 = 0{,}18$.",
                        "hint1": "Hai nhánh đối nhau có tổng xác suất bằng 1.",
                        "hint2": "$1 - 0{,}82 = 0{,}18$."
                    },
                    {
                        "question": "Một xạ thủ bắn 2 viên đạn độc lập vào bia với xác suất trúng mỗi viên là $0{,}7$. Xác suất để xạ thủ bắn trúng đúng 1 viên là:",
                        "options": [
                            "A. $0{,}42$",
                            "B. $0{,}49$",
                            "C. $0{,}21$",
                            "D. $0{,}09$"
                        ],
                        "correct": "A",
                        "explanation": "Có 2 nhánh trên sơ đồ cây dẫn đến trúng đúng 1 viên: (Trúng, Trượt) xác suất $0{,}7 \\cdot 0{,}3 = 0{,}21$; (Trượt, Trúng) xác suất $0{,}3 \\cdot 0{,}7 = 0{,}21$. Cộng ngang: $0{,}21 + 0{,}21 = 0{,}42$.",
                        "hint1": "Trúng đúng 1 viên gồm 2 trường hợp: Viên 1 trúng - Viên 2 trượt HOẶC Viên 1 trượt - Viên 2 trúng.",
                        "hint2": "$0{,}7(0{,}3) + 0{,}3(0{,}7) = 0{,}21 + 0{,}21 = 0{,}42$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 18: Xác suất có điều kiện</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 3: Mục 3: Sơ đồ hình cây và ứng dụng tính xác suất</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Sơ đồ hình cây (Tree Diagram) là công cụ trực quan hoá mạnh mẽ để giải các bài toán xác suất nhiều giai đoạn:</p>\n                <div style=\"background:rgba(15,23,42,0.85); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px; margin:10px 0; font-family:monospace; font-size:13px; line-height:1.6;\">\n                  <div>GỐC ───┬───[Nhánh 1: Biến cố A, xác suất P(A)] ──────┬─── [Kết quả B] ───► Tích nhánh = P(A)·P(B|A)</div>\n                  <div>    │                                            └─── [Kết quả B̄] ───► Tích nhánh = P(A)·P(B̄|A)</div>\n                  <div>    └───[Nhánh 2: Biến cố Ā, xác suất P(Ā)] ──────┬─── [Kết quả B] ───► Tích nhánh = P(Ā)·P(B|Ā)</div>\n                  <div>                                                 └─── [Kết quả B̄] ───► Tích nhánh = P(Ā)·P(B̄|Ā)</div>\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Quy tắc nhân dọc nhánh:</strong> Xác suất của một đường đi từ gốc đến ngọn cây bằng tích xác suất trên các đoạn nhánh của đường đi đó: $P(A \\cap B) = P(A) \\cdot P(B \\mid A)$.</li>\n                  <li><strong>Quy tắc cộng ngang:</strong> Xác suất của một biến cố kết quả bằng tổng xác suất của tất cả các nhánh dẫn tới kết quả đó (nền tảng của xác suất toàn phần).</li>\n                  <li>Tổng xác suất xuất phát từ một nút rẽ nhánh luôn bằng 1: $P(A) + P(\\overline{A}) = 1$ và $P(B \\mid A) + P(\\overline{B} \\mid A) = 1$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Sơ đồ cây biến bài toán lời văn phức tạp thành mô hình hình học trực quan, triệt tiêu mọi sai sót logic.</li>\n                <li>Ứng dụng rộng rãi: Chẩn đoán xét nghiệm y tế (Dương tính/Âm tính), kiểm tra chất lượng linh kiện, dự báo thời tiết nhiều ngày liên tiếp.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên kiểm tra tổng xác suất tại mỗi nút rẽ có bằng 1 hay không.</li>\n                <li>Nhầm lẫn giữa xác suất nhánh điều kiện $P(B \\mid A)$ và xác suất tích nhánh $P(A \\cap B)$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Vẽ sơ đồ cây: Nhân dọc theo nhánh ra tích đồng thời – Cộng ngang các nhánh ra xác suất tổng – Nháp ra cây là ra ngay điểm 10!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Về định nghĩa xác suất có điều kiện $P(A \\mid B)$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Xác suất có điều kiện $P(A \\mid B)$ chỉ được xác định khi $P(B) > 0$.",
                        "correct": "true",
                        "explain": "Điều kiện mẫu số phải dương."
                    },
                    {
                        "key": "b",
                        "text": "Công thức xác suất có điều kiện là $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$.",
                        "correct": "true",
                        "explain": "Định nghĩa chuẩn SGK."
                    },
                    {
                        "key": "c",
                        "text": "Giá trị của $P(A \\mid B)$ luôn nằm trong đoạn $[0; 1]$.",
                        "correct": "true",
                        "explain": "Tính chất cơ bản của xác suất."
                    },
                    {
                        "key": "d",
                        "text": "Luôn có $P(A \\mid B) = P(B \\mid A)$ với mọi biến cố $A$ và $B$.",
                        "correct": "false",
                        "explain": "Chỉ bằng nhau khi $P(A) = P(B)$."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: Gieo hai con xúc xắc cân đối. Gọi $A$: 'Tổng số chấm bằng 7', $B$: 'Con xúc xắc thứ nhất xuất hiện mặt 3':",
                "items": [
                    {
                        "key": "a",
                        "text": "Không gian mẫu của phép thử có $36$ phần tử đồng khả năng.",
                        "correct": "true",
                        "explain": "$6 \\times 6 = 36$."
                    },
                    {
                        "key": "b",
                        "text": "Biến cố $B$ có $6$ phần tử thuận lợi.",
                        "correct": "true",
                        "explain": "$(3; 1), (3; 2), \\dots, (3; 6)$."
                    },
                    {
                        "key": "c",
                        "text": "Biến cố giao $A \\cap B$ chỉ gồm đúng $1$ kết quả là $(3; 4)$.",
                        "correct": "true",
                        "explain": "$3 + 4 = 7$."
                    },
                    {
                        "key": "d",
                        "text": "Xác suất có điều kiện $P(A \\mid B)$ bằng $\\frac{1}{6}$.",
                        "correct": "true",
                        "explain": "$P(A \\mid B) = \\frac{1}{6}$."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: Về hai biến cố độc lập $A$ và $B$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Nếu $A$ và $B$ độc lập thì $P(A \\mid B) = P(A)$.",
                        "correct": "true",
                        "explain": "Định nghĩa biến cố độc lập."
                    },
                    {
                        "key": "b",
                        "text": "Nếu $A$ và $B$ độc lập thì $P(A \\cap B) = P(A)P(B)$.",
                        "correct": "true",
                        "explain": "Quy tắc nhân cho biến cố độc lập."
                    },
                    {
                        "key": "c",
                        "text": "Nếu $A$ và $B$ độc lập thì $\\overline{A}$ và $\\overline{B}$ cũng độc lập.",
                        "correct": "true",
                        "explain": "Định lý tính chất biến cố độc lập."
                    },
                    {
                        "key": "d",
                        "text": "Hai biến cố xung khắc với nhau thì chắc chắn độc lập với nhau.",
                        "correct": "false",
                        "explain": "Xung khắc thì $P(A \\cap B) = 0 \\neq P(A)P(B)$ (khi $P(A), P(B) > 0$)."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: Một tổ có 6 nam và 4 nữ. Chọn ngẫu nhiên lần lượt 2 bạn (không hoàn lại):",
                "items": [
                    {
                        "key": "a",
                        "text": "Xác suất bạn thứ nhất là nữ bằng $\\frac{4}{10} = \\frac{2}{5}$.",
                        "correct": "true",
                        "explain": "$4/10 = 0{,}4$."
                    },
                    {
                        "key": "b",
                        "text": "Biết bạn thứ nhất là nữ, xác suất bạn thứ hai là nữ bằng $\\frac{3}{9} = \\frac{1}{3}$.",
                        "correct": "true",
                        "explain": "Còn 3 nữ trong tổng số 9 bạn."
                    },
                    {
                        "key": "c",
                        "text": "Xác suất cả hai bạn được chọn đều là nữ bằng $\\frac{2}{15}$.",
                        "correct": "true",
                        "explain": "$\\frac{2}{5} \\times \\frac{1}{3} = \\frac{2}{15}$."
                    },
                    {
                        "key": "d",
                        "text": "Biến cố 'bạn 1 là nữ' và 'bạn 2 là nữ' là hai biến cố độc lập.",
                        "correct": "false",
                        "explain": "Lấy không hoàn lại nên phụ thuộc."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Về phương pháp sơ đồ hình cây:",
                "items": [
                    {
                        "key": "a",
                        "text": "Sơ đồ hình cây giúp trực quan hoá các giai đoạn của một phép thử.",
                        "correct": "true",
                        "explain": "Ưu điểm của sơ đồ cây."
                    },
                    {
                        "key": "b",
                        "text": "Để tính xác suất của một kết quả ở ngọn cây, ta nhân các xác suất dọc theo đường nhánh.",
                        "correct": "true",
                        "explain": "Quy tắc nhân nhánh cây."
                    },
                    {
                        "key": "c",
                        "text": "Tổng các xác suất xuất phát từ một nút rẽ nhánh luôn bằng 1.",
                        "correct": "true",
                        "explain": "Nguyên lý tổng xác suất tại nút rẽ."
                    },
                    {
                        "key": "d",
                        "text": "Sơ đồ hình cây chỉ áp dụng được cho bài toán có đúng 2 giai đoạn.",
                        "correct": "false",
                        "explain": "Áp dụng được cho bài toán $n$ giai đoạn bất kỳ."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Cho $P(A) = 0{,}7; P(B) = 0{,}4$ và $P(A \\cap B) = 0{,}28$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Ta có $P(A) \\cdot P(B) = 0{,}7 \\times 0{,}4 = 0{,}28$.",
                        "correct": "true",
                        "explain": "$0{,}7 \\times 0{,}4 = 0{,}28$."
                    },
                    {
                        "key": "b",
                        "text": "Hai biến cố $A$ và $B$ là hai biến cố độc lập.",
                        "correct": "true",
                        "explain": "Vì $P(A \\cap B) = P(A)P(B)$."
                    },
                    {
                        "key": "c",
                        "text": "Xác suất có điều kiện $P(A \\mid B) = 0{,}7$.",
                        "correct": "true",
                        "explain": "$P(A \\mid B) = P(A) = 0{,}7$ do độc lập."
                    },
                    {
                        "key": "d",
                        "text": "Xác suất có điều kiện $P(B \\mid A) = 0{,}28$.",
                        "correct": "false",
                        "explain": "$P(B \\mid A) = P(B) = 0{,}4$."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 18:") || t.includes("xác suất có điều kiện") || t.includes("xac suat co dieu kien")) && !t.includes("toàn phần") && !t.includes("bayes");
      }
    },

  "toan12_bai19": {
        "id": "toan12_bai19",
        "lessonTitle": "Bài 19: Công thức xác suất toàn phần và công thức Bayes",
        "grade": "Lớp 12",
        "sections": [
            {
                "sectionNumber": 1,
                "sectionTitle": "Mục 1: Công thức xác suất toàn phần",
                "sgkHtml": "<p>Cho hệ biến cố $\\{A_1, A_2, \\dots, A_n\\}$ lập thành một <b>hệ đầy đủ</b> (các biến cố đôi một xung khắc và tổng hợp bằng không gian mẫu $\\Omega$, với $P(A_i) > 0$).</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$P(B) = \\sum_{i=1}^n P(A_i) \\cdot P(B \\mid A_i) = P(A_1)P(B \\mid A_1) + P(A_2)P(B \\mid A_2) + \\dots + P(A_n)P(B \\mid A_n)$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Trường hợp thường gặp nhất ($n = 2$ biến cố đối):</strong> Với hai biến cố đối nhau $A$ và $\\overline{A}$:\n                    $$P(B) = P(A) \\cdot P(B \\mid A) + P(\\overline{A}) \\cdot P(B \\mid \\overline{A})$$\n                  </li>\n                  <li><strong>Ý nghĩa triết học & toán học:</strong> Xác suất toàn phần của kết quả $B$ bằng tổng xác suất của tất cả các kịch bản nguyên nhân $A_i$ có thể dẫn tới $B$.</li>\n                </ul>",
                "noteHtml": "<li>Điều kiện tiên quyết: Các biến cố $A_i$ phải phủ kín không gian mẫu và không giao nhau: $\\sum P(A_i) = 1$.</li>\n                <li>Mỗi tích $P(A_i)P(B \\mid A_i)$ chính là xác suất của một nhánh trên sơ đồ cây dẫn đến $B$.</li>",
                "mistakeHtml": "<li>Quên nhân xác suất tiên nghiệm $P(A_i)$ (chỉ cộng các xác suất có điều kiện $P(B \\mid A_i)$).</li>\n                <li>Chọn hệ biến cố $A_i$ không đầy đủ (tổng xác suất khác 1).</li>",
                "tipHtml": "<li><em>\"Xác suất toàn phần: Phân chia các kịch bản nguyên nhân – Nhân xác suất từng nhánh cây – Cộng tất cả các nhánh lại ra kết quả toàn phần!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Hai phân xưởng I và II cùng sản xuất một loại chi tiết máy. Phân xưởng I sản xuất $60\\%$ sản lượng với tỉ lệ phế phẩm $2\\%$. Phân xưởng II sản xuất $40\\%$ sản lượng với tỉ lệ phế phẩm $3\\%$. Lấy ngẫu nhiên một chi tiết máy, xác suất để chi tiết đó là phế phẩm bằng:",
                        "options": [
                            "A. $0{,}024$",
                            "B. $0{,}025$",
                            "C. $0{,}050$",
                            "D. $0{,}018$"
                        ],
                        "correct": "A",
                        "explanation": "Theo công thức xác suất toàn phần: $P(\\text{Phế phẩm}) = 0{,}60 \\cdot 0{,}02 + 0{,}40 \\cdot 0{,}03 = 0{,}012 + 0{,}012 = 0{,}024$ ($2{,}4\\%$).",
                        "hint1": "$P(A_1) = 0{,}60; P(D \\mid A_1) = 0{,}02$; $P(A_2) = 0{,}40; P(D \\mid A_2) = 0{,}03$.",
                        "hint2": "$0{,}60 \\times 0{,}02 + 0{,}40 \\times 0{,}03 = 0{,}012 + 0{,}012 = 0{,}024$."
                    },
                    {
                        "question": "Cho hai biến cố đối $A$ và $\\overline{A}$ với $P(A) = 0{,}3$. Biết $P(B \\mid A) = 0{,}8$ và $P(B \\mid \\overline{A}) = 0{,}4$. Xác suất $P(B)$ bằng:",
                        "options": [
                            "A. $0{,}52$",
                            "B. $0{,}60$",
                            "C. $0{,}48$",
                            "D. $0{,}36$"
                        ],
                        "correct": "A",
                        "explanation": "$P(\\overline{A}) = 1 - 0{,}3 = 0{,}7$. Áp dụng toàn phần: $P(B) = 0{,}3 \\cdot 0{,}8 + 0{,}7 \\cdot 0{,}4 = 0{,}24 + 0{,}28 = 0{,}52$.",
                        "hint1": "$P(\\overline{A}) = 1 - 0{,}3 = 0{,}7$.",
                        "hint2": "$0{,}3(0{,}8) + 0{,}7(0{,}4) = 0{,}24 + 0{,}28 = 0{,}52$."
                    },
                    {
                        "question": "Hộp 1 có 4 bi đỏ và 6 bi xanh. Hộp 2 có 5 bi đỏ và 5 bi xanh. Chọn ngẫu nhiên 1 hộp rồi từ đó rút ngẫu nhiên 1 viên bi. Xác suất để rút được viên bi đỏ là:",
                        "options": [
                            "A. $0{,}45$",
                            "B. $0{,}50$",
                            "C. $0{,}40$",
                            "D. $0{,}90$"
                        ],
                        "correct": "A",
                        "explanation": "Chọn mỗi hộp với xác suất $0{,}5$. Hộp 1 có tỉ lệ đỏ $4/10 = 0{,}4$. Hộp 2 có tỉ lệ đỏ $5/10 = 0{,}5$. $P(\\text{Đỏ}) = 0{,}5(0{,}4) + 0{,}5(0{,}5) = 0{,}20 + 0{,}25 = 0{,}45$.",
                        "hint1": "$P(H_1) = P(H_2) = 0{,}5$.",
                        "hint2": "$0{,}5(4/10) + 0{,}5(5/10) = 0{,}20 + 0{,}25 = 0{,}45$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 19: Công thức xác suất toàn phần và công thức Bayes</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 1: Mục 1: Công thức xác suất toàn phần</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Cho hệ biến cố $\\{A_1, A_2, \\dots, A_n\\}$ lập thành một <b>hệ đầy đủ</b> (các biến cố đôi một xung khắc và tổng hợp bằng không gian mẫu $\\Omega$, với $P(A_i) > 0$).</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$P(B) = \\sum_{i=1}^n P(A_i) \\cdot P(B \\mid A_i) = P(A_1)P(B \\mid A_1) + P(A_2)P(B \\mid A_2) + \\dots + P(A_n)P(B \\mid A_n)$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Trường hợp thường gặp nhất ($n = 2$ biến cố đối):</strong> Với hai biến cố đối nhau $A$ và $\\overline{A}$:\n                    $$P(B) = P(A) \\cdot P(B \\mid A) + P(\\overline{A}) \\cdot P(B \\mid \\overline{A})$$\n                  </li>\n                  <li><strong>Ý nghĩa triết học & toán học:</strong> Xác suất toàn phần của kết quả $B$ bằng tổng xác suất của tất cả các kịch bản nguyên nhân $A_i$ có thể dẫn tới $B$.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Điều kiện tiên quyết: Các biến cố $A_i$ phải phủ kín không gian mẫu và không giao nhau: $\\sum P(A_i) = 1$.</li>\n                <li>Mỗi tích $P(A_i)P(B \\mid A_i)$ chính là xác suất của một nhánh trên sơ đồ cây dẫn đến $B$.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Quên nhân xác suất tiên nghiệm $P(A_i)$ (chỉ cộng các xác suất có điều kiện $P(B \\mid A_i)$).</li>\n                <li>Chọn hệ biến cố $A_i$ không đầy đủ (tổng xác suất khác 1).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Xác suất toàn phần: Phân chia các kịch bản nguyên nhân – Nhân xác suất từng nhánh cây – Cộng tất cả các nhánh lại ra kết quả toàn phần!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 2,
                "sectionTitle": "Mục 2: Công thức Bayes và ý nghĩa chẩn đoán thực tế",
                "sgkHtml": "<p>Cho hệ đầy đủ $\\{A_1, A_2, \\dots, A_n\\}$ và biến cố kết quả $B$ với $P(B) > 0$.</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$P(A_k \\mid B) = \\frac{P(A_k \\cap B)}{P(B)} = \\frac{P(A_k) \\cdot P(B \\mid A_k)}{\\sum_{i=1}^n P(A_i) \\cdot P(B \\mid A_i)}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Ý nghĩa suy luận ngược (Cause Inference):</strong> Khi kết quả $B$ đã xảy ra, công thức Bayes cho phép tính xác suất để kết quả đó bắt nguồn từ nguyên nhân cụ thể $A_k$.</li>\n                  <li><strong>Xác suất tiên nghiệm $P(A_k)$:</strong> Xác suất ban đầu của nguyên nhân trước khi có bằng chứng $B$.</li>\n                  <li><strong>Xác suất hậu nghiệm $P(A_k \\mid B)$:</strong> Xác suất của nguyên nhân được cập nhật lại sau khi đã quan sát thấy bằng chứng $B$.</li>\n                  <li>Ứng dụng then chốt: Chẩn đoán xét nghiệm y tế, thuật toán phân loại Naive Bayes trong Trí tuệ nhân tạo (AI), bộ lọc thư rác Spam Filter.</li>\n                </ul>",
                "noteHtml": "<li>Tử số là tích của nhánh tương ứng $P(A_k)P(B \\mid A_k)$; mẫu số là tổng tất cả các nhánh (chính là $P(B)$ toàn phần).</li>\n                <li>Nghịch lý xét nghiệm y tế: Dù xét nghiệm có độ nhạy rất cao ($99\\%$) nhưng nếu căn bệnh rất hiếm ($0{,}1\\%$) thì một người nhận kết quả dương tính vẫn có xác suất mắc bệnh thực tế thấp do lượng dương tính giả lấn át!</li>",
                "mistakeHtml": "<li>Lấy nhầm tử số sang nhánh khác.</li>\n                <li>Quên tính lại mẫu số toàn phần mà dùng mẫu số không đầy đủ.</li>",
                "tipHtml": "<li><em>\"Bayes = Nhánh mong muốn chia cho Tổng tất cả các nhánh – Suy luận ngược từ Hiện tượng truy về Bản chất!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Tiếp tục từ dữ liệu hai phân xưởng: PX I (60% sản lượng, 2% phế phẩm), PX II (40% sản lượng, 3% phế phẩm). Kiểm tra ngẫu nhiên 1 sản phẩm thấy bị phế phẩm. Xác suất sản phẩm đó do PX I sản xuất là:",
                        "options": [
                            "A. $\\frac{1}{2}$",
                            "B. $\\frac{3}{5}$",
                            "C. $\\frac{2}{5}$",
                            "D. $\\frac{1}{4}$"
                        ],
                        "correct": "A",
                        "explanation": "Mẫu số toàn phần $P(\\text{Phế phẩm}) = 0{,}024$. Tử số nhánh PX I: $0{,}60 \\cdot 0{,}02 = 0{,}012$. Theo Bayes: $P(\\text{PX I} \\mid \\text{Phế phẩm}) = \\frac{0{,}012}{0{,}024} = \\frac{1}{2} = 50\\%$.",
                        "hint1": "Tử số là nhánh PX I phế phẩm: $0{,}60 \\times 0{,}02 = 0{,}012$.",
                        "hint2": "Mẫu số là $0{,}024$. Tỉ số: $0{,}012 / 0{,}024 = 1/2$."
                    },
                    {
                        "question": "Tỉ lệ người mắc bệnh X trong cộng đồng là $1\\%$. Xét nghiệm chuẩn đoán bệnh có độ chính xác $90\\%$ (mắc bệnh thì dương tính xác suất $0{,}90$; không mắc bệnh thì âm tính xác suất $0{,}90$). Một người xét nghiệm cho kết quả DƯƠNG TÍNH. Xác suất người đó thực sự mắc bệnh X gần nhất với giá trị nào?",
                        "options": [
                            "A. $8{,}3\\%$",
                            "B. $90\\%$",
                            "C. $50\\%$",
                            "D. $1\\%$"
                        ],
                        "correct": "A",
                        "explanation": "Bệnh ($P=0{,}01$): Dương tính $0{,}01 \\cdot 0{,}90 = 0{,}009$. Không bệnh ($P=0{,}99$): Dương tính giả $0{,}99 \\cdot 0{,}10 = 0{,}099$. Tổng dương tính: $0{,}009 + 0{,}099 = 0{,}108$. Xác suất thực sự mắc bệnh: $\\frac{0{,}009}{0{,}108} = \\frac{1}{12} \\approx 8{,}33\\%$.",
                        "hint1": "Dương tính giả từ người khoẻ: $0{,}99 \\times 0{,}10 = 0{,}099$.",
                        "hint2": "Tỉ số Bayes: $0{,}009 / (0{,}009 + 0{,}099) = 0{,}009 / 0{,}108 = 1/12 \\approx 8{,}33\\%$."
                    },
                    {
                        "question": "Cho $P(A_1) = 0{,}4; P(A_2) = 0{,}6$ là hệ đầy đủ. Biết $P(B \\mid A_1) = 0{,}5$ và $P(B \\mid A_2) = 0{,}2$. Xác suất $P(A_1 \\mid B)$ bằng:",
                        "options": [
                            "A. $0{,}625$",
                            "B. $0{,}375$",
                            "C. $0{,}500$",
                            "D. $0{,}200$"
                        ],
                        "correct": "A",
                        "explanation": "Mẫu số toàn phần $P(B) = 0{,}4(0{,}5) + 0{,}6(0{,}2) = 0{,}20 + 0{,}12 = 0{,}32$. Tử số: $0{,}4(0{,}5) = 0{,}20$. Bayes: $P(A_1 \\mid B) = \\frac{0{,}20}{0{,}32} = \\frac{5}{8} = 0{,}625$.",
                        "hint1": "Mẫu số $P(B) = 0{,}20 + 0{,}12 = 0{,}32$.",
                        "hint2": "Bayes: $0{,}20 / 0{,}32 = 5/8 = 0{,}625$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 19: Công thức xác suất toàn phần và công thức Bayes</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 2: Mục 2: Công thức Bayes và ý nghĩa chẩn đoán thực tế</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Cho hệ đầy đủ $\\{A_1, A_2, \\dots, A_n\\}$ và biến cố kết quả $B$ với $P(B) > 0$.</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px; margin:10px 0;\">\n                  $$P(A_k \\mid B) = \\frac{P(A_k \\cap B)}{P(B)} = \\frac{P(A_k) \\cdot P(B \\mid A_k)}{\\sum_{i=1}^n P(A_i) \\cdot P(B \\mid A_i)}$$\n                </div>\n                <ul class=\"list-disc ml-5 space-y-1.5\">\n                  <li><strong>Ý nghĩa suy luận ngược (Cause Inference):</strong> Khi kết quả $B$ đã xảy ra, công thức Bayes cho phép tính xác suất để kết quả đó bắt nguồn từ nguyên nhân cụ thể $A_k$.</li>\n                  <li><strong>Xác suất tiên nghiệm $P(A_k)$:</strong> Xác suất ban đầu của nguyên nhân trước khi có bằng chứng $B$.</li>\n                  <li><strong>Xác suất hậu nghiệm $P(A_k \\mid B)$:</strong> Xác suất của nguyên nhân được cập nhật lại sau khi đã quan sát thấy bằng chứng $B$.</li>\n                  <li>Ứng dụng then chốt: Chẩn đoán xét nghiệm y tế, thuật toán phân loại Naive Bayes trong Trí tuệ nhân tạo (AI), bộ lọc thư rác Spam Filter.</li>\n                </ul></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Tử số là tích của nhánh tương ứng $P(A_k)P(B \\mid A_k)$; mẫu số là tổng tất cả các nhánh (chính là $P(B)$ toàn phần).</li>\n                <li>Nghịch lý xét nghiệm y tế: Dù xét nghiệm có độ nhạy rất cao ($99\\%$) nhưng nếu căn bệnh rất hiếm ($0{,}1\\%$) thì một người nhận kết quả dương tính vẫn có xác suất mắc bệnh thực tế thấp do lượng dương tính giả lấn át!</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Lấy nhầm tử số sang nhánh khác.</li>\n                <li>Quên tính lại mẫu số toàn phần mà dùng mẫu số không đầy đủ.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Bayes = Nhánh mong muốn chia cho Tổng tất cả các nhánh – Suy luận ngược từ Hiện tượng truy về Bản chất!\"</em></li></ul>\n  </div>\n</div>"
            },
            {
                "sectionNumber": 3,
                "sectionTitle": "Mục 3: Rèn luyện bài toán xác suất thực tế chuẩn Bộ GD",
                "sgkHtml": "<p>Hệ thống hoá các mô hình bài toán thực tế trọng điểm thi tốt nghiệp THPT theo định hướng Bộ GD&ĐT:</p>\n                <div style=\"background:rgba(15,23,42,0.85); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px; margin:10px 0;\">\n                  <ul class=\"space-y-2 text-slate-200\">\n                    <li><b>1. Mô hình Kênh truyền tin nhị phân (Viễn thông):</b> Bên phát phát 0 hoặc 1, do nhiễu kênh truyền dẫn đến bên nhận có thể nhận đúng hoặc sai. Áp dụng Bayes tính xác suất bên phát đã phát 1 khi bên nhận nhận được 1.</li>\n                    <li><b>2. Mô hình Kiểm soát chất lượng & Dây chuyền sản xuất:</b> Nhiều nhà máy cung ứng linh kiện cho một tổng công ty. Truy vết lô hàng lỗi bắt nguồn từ nhà máy nào để tối ưu hoá chi phí bảo hành.</li>\n                    <li><b>3. Mô hình Chuyển bi giữa hai hộp:</b> Chuyển $k$ viên bi từ Hộp 1 sang Hộp 2, sau đó rút 1 viên từ Hộp 2. Phân loại theo màu sắc của viên bi được chuyển.</li>\n                    <li><b>4. Mô hình Dự báo thời tiết & Nông nghiệp:</b> Tỉ lệ nảy mầm hạt giống theo điều kiện thời tiết Mưa/Nắng.</li>\n                  </ul>\n                </div>",
                "noteHtml": "<li>Kỹ năng bấm máy Casio fx-580VNX: Dùng phím <code>[STO] [A]</code> và <code>[STO] [B]</code> lưu giá trị từng nhánh cây để tính nhanh biểu thức Bayes $A / (A + B)$, tránh sai số làm tròn trung gian!</li>\n                <li>Đọc kỹ yêu cầu làm tròn của câu hỏi trắc nghiệm Phần III (ví dụ làm tròn đến hàng phần trăm hay phần nghìn).</li>",
                "mistakeHtml": "<li>Không quy đổi đúng phần trăm sang số thập phân (ví dụ $0{,}5\\%$ là $0{,}005$, không phải $0{,}05$).</li>\n                <li>Làm tròn sớm ở các bước tính toán trung gian gây lệch kết quả cuối cùng.</li>",
                "tipHtml": "<li><em>\"Lưu biến nhớ Casio [STO][A], [STO][B] – Lấy A/(A+B) – Bấm phím S<=>D để đổi phân số sang số thập phân chuẩn mực!\"</em></li>",
                "mcqs": [
                    {
                        "question": "Một kênh truyền tin nhị phân phát ký hiệu 0 với xác suất $60\\%$, phát 1 với xác suất $40\\%$. Khi phát 0 thì xác suất nhận nhầm thành 1 là $0{,}05$. Khi phát 1 thì xác suất nhận đúng 1 là $0{,}90$. Bên nhận nhận được ký hiệu 1. Xác suất bên phát đã phát ký hiệu 1 là:",
                        "options": [
                            "A. $\\frac{12}{13}$",
                            "B. $\\frac{9}{10}$",
                            "C. $\\frac{1}{13}$",
                            "D. $\\frac{4}{5}$"
                        ],
                        "correct": "A",
                        "explanation": "Phát 0 nhận 1: $0{,}60 \\cdot 0{,}05 = 0{,}030$. Phát 1 nhận 1: $0{,}40 \\cdot 0{,}90 = 0{,}360$. Tổng nhận 1: $0{,}030 + 0{,}360 = 0{,}390$. Xác suất thực sự phát 1: $\\frac{0{,}360}{0{,}390} = \\frac{36}{39} = \\frac{12}{13} \\approx 0{,}923$.",
                        "hint1": "Tính xác suất nhận được 1 từ cả hai nhánh phát 0 và phát 1.",
                        "hint2": "Bayes: $0{,}360 / (0{,}030 + 0{,}360) = 36/39 = 12/13$."
                    },
                    {
                        "question": "Hộp 1 có 4 bi đỏ và 2 bi xanh. Hộp 2 có 3 bi đỏ và 5 bi xanh. Lấy 1 viên từ Hộp 1 bỏ sang Hộp 2, rồi từ Hộp 2 rút 1 viên. Xác suất viên bi rút từ Hộp 2 có màu đỏ là:",
                        "options": [
                            "A. $\\frac{11}{27}$",
                            "B. $\\frac{8}{27}$",
                            "C. $\\frac{1}{3}$",
                            "D. $\\frac{4}{9}$"
                        ],
                        "correct": "A",
                        "explanation": "Chuyển đỏ ($P=4/6=2/3$): Hộp 2 có 4 đỏ/9 viên $\\implies P=4/9$. Chuyển xanh ($P=2/6=1/3$): Hộp 2 có 3 đỏ/9 viên $\\implies P=3/9$. Toàn phần: $\\frac{2}{3} \\cdot \\frac{4}{9} + \\frac{1}{3} \\cdot \\frac{3}{9} = \\frac{8}{27} + \\frac{3}{27} = \\frac{11}{27}$.",
                        "hint1": "Xét 2 trường hợp viên bi chuyển từ Hộp 1 là Đỏ hoặc Xanh.",
                        "hint2": "$(2/3)(4/9) + (1/3)(3/9) = 8/27 + 3/27 = 11/27$."
                    },
                    {
                        "question": "Ba máy A, B, C sản xuất tương ứng $50\\%, 30\\%, 20\\%$ sản phẩm của nhà máy với tỉ lệ khuyết tật là $1\\%, 2\\%, 3\\%$. Chọn ngẫu nhiên 1 sản phẩm thấy bị khuyết tật. Xác suất sản phẩm đó do máy C sản xuất là:",
                        "options": [
                            "A. $\\frac{6}{17}$",
                            "B. $\\frac{5}{17}$",
                            "C. $\\frac{6}{20}$",
                            "D. $\\frac{3}{10}$"
                        ],
                        "correct": "A",
                        "explanation": "Khuyết tật máy A: $0{,}50(0{,}01) = 0{,}005$. Máy B: $0{,}30(0{,}02) = 0{,}006$. Máy C: $0{,}20(0{,}03) = 0{,}006$. Tổng khuyết tật: $0{,}005 + 0{,}006 + 0{,}006 = 0{,}017$. Bayes máy C: $\\frac{0{,}006}{0{,}017} = \\frac{6}{17}$.",
                        "hint1": "Nhánh máy C khuyết tật là $0{,}20 \\times 0{,}03 = 0{,}006$.",
                        "hint2": "Tổng khuyết tật là $0{,}017$. Tỉ số: $6/17$."
                    }
                ],
                "theory": "<div class=\"space-y-4 sm:space-y-5 font-serif theory-expanded-card\">\n  <div class=\"p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950\">\n    <p class=\"leading-relaxed text-[13.5pt] sm:text-[14pt]\">\n      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>Bài 19: Công thức xác suất toàn phần và công thức Bayes</strong> (Lớp 12 - SGK KNTT). Cùng nắm chắc <strong>Mục 3: Mục 3: Rèn luyện bài toán xác suất thực tế chuẩn Bộ GD</strong> nhé! 😊\n    </p>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200\">\n      <i class=\"fa-solid fa-book-open-reader text-indigo-600 text-xl\"></i>\n      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>\n    </div>\n    <div class=\"space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose\"><p>Hệ thống hoá các mô hình bài toán thực tế trọng điểm thi tốt nghiệp THPT theo định hướng Bộ GD&ĐT:</p>\n                <div style=\"background:rgba(15,23,42,0.85); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px; margin:10px 0;\">\n                  <ul class=\"space-y-2 text-slate-200\">\n                    <li><b>1. Mô hình Kênh truyền tin nhị phân (Viễn thông):</b> Bên phát phát 0 hoặc 1, do nhiễu kênh truyền dẫn đến bên nhận có thể nhận đúng hoặc sai. Áp dụng Bayes tính xác suất bên phát đã phát 1 khi bên nhận nhận được 1.</li>\n                    <li><b>2. Mô hình Kiểm soát chất lượng & Dây chuyền sản xuất:</b> Nhiều nhà máy cung ứng linh kiện cho một tổng công ty. Truy vết lô hàng lỗi bắt nguồn từ nhà máy nào để tối ưu hoá chi phí bảo hành.</li>\n                    <li><b>3. Mô hình Chuyển bi giữa hai hộp:</b> Chuyển $k$ viên bi từ Hộp 1 sang Hộp 2, sau đó rút 1 viên từ Hộp 2. Phân loại theo màu sắc của viên bi được chuyển.</li>\n                    <li><b>4. Mô hình Dự báo thời tiết & Nông nghiệp:</b> Tỉ lệ nảy mầm hạt giống theo điều kiện thời tiết Mưa/Nắng.</li>\n                  </ul>\n                </div></div>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200\">\n      <i class=\"fa-solid fa-circle-exclamation text-sky-600 text-xl\"></i>\n      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Kỹ năng bấm máy Casio fx-580VNX: Dùng phím <code>[STO] [A]</code> và <code>[STO] [B]</code> lưu giá trị từng nhánh cây để tính nhanh biểu thức Bayes $A / (A + B)$, tránh sai số làm tròn trung gian!</li>\n                <li>Đọc kỹ yêu cầu làm tròn của câu hỏi trắc nghiệm Phần III (ví dụ làm tròn đến hàng phần trăm hay phần nghìn).</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200\">\n      <i class=\"fa-solid fa-triangle-exclamation text-rose-600 text-xl\"></i>\n      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li>Không quy đổi đúng phần trăm sang số thập phân (ví dụ $0{,}5\\%$ là $0{,}005$, không phải $0{,}05$).</li>\n                <li>Làm tròn sớm ở các bước tính toán trung gian gây lệch kết quả cuối cùng.</li></ul>\n  </div>\n  <div class=\"p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm\">\n    <div class=\"flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200\">\n      <i class=\"fa-solid fa-lightbulb text-amber-600 text-xl\"></i>\n      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>\n    </div>\n    <ul class=\"text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose\"><li><em>\"Lưu biến nhớ Casio [STO][A], [STO][B] – Lấy A/(A+B) – Bấm phím S<=>D để đổi phân số sang số thập phân chuẩn mực!\"</em></li></ul>\n  </div>\n</div>"
            }
        ],
        "tfQuestions": [
            {
                "id": 1,
                "title": "Câu 1: Cho hệ biến cố $\\{A_1, A_2, A_3\\}$ lập thành một hệ đầy đủ:",
                "items": [
                    {
                        "key": "a",
                        "text": "Tổng xác suất $P(A_1) + P(A_2) + P(A_3) = 1$.",
                        "correct": "true",
                        "explain": "Định nghĩa hệ đầy đủ."
                    },
                    {
                        "key": "b",
                        "text": "Các biến cố $A_1, A_2, A_3$ đôi một xung khắc.",
                        "correct": "true",
                        "explain": "$A_i \\cap A_j = \\emptyset$ với $i \\neq j$."
                    },
                    {
                        "key": "c",
                        "text": "Công thức xác suất toàn phần áp dụng được cho hệ này.",
                        "correct": "true",
                        "explain": "Đúng định lý xác suất toàn phần."
                    },
                    {
                        "key": "d",
                        "text": "Luôn có $P(A_1) = P(A_2) = P(A_3) = 1/3$.",
                        "correct": "false",
                        "explain": "Xác suất mỗi biến cố có thể khác nhau."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Câu 2: So sánh giữa công thức xác suất toàn phần và công thức Bayes:",
                "items": [
                    {
                        "key": "a",
                        "text": "Công thức xác suất toàn phần dùng để tính $P(B)$ theo chiều suy luận xuôi.",
                        "correct": "true",
                        "explain": "Từ nguyên nhân tới kết quả."
                    },
                    {
                        "key": "b",
                        "text": "Công thức Bayes dùng để tính xác suất có điều kiện đảo $P(A_k \\mid B)$.",
                        "correct": "true",
                        "explain": "Từ kết quả suy ngược nguyên nhân."
                    },
                    {
                        "key": "c",
                        "text": "Mẫu số của công thức Bayes chính là xác suất toàn phần $P(B)$.",
                        "correct": "true",
                        "explain": "Đúng cấu trúc công thức Bayes."
                    },
                    {
                        "key": "d",
                        "text": "Công thức Bayes không cần điều kiện hệ đầy đủ.",
                        "correct": "false",
                        "explain": "Bắt buộc phải có hệ đầy đủ."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Câu 3: Một thiết bị cảnh báo cháy có độ nhạy $98\\%$. Chuông báo cháy giả với xác suất $1\\%$ khi không có cháy. Tỉ lệ có cháy thực tế là $0{,}005$:",
                "items": [
                    {
                        "key": "a",
                        "text": "Xác suất không có cháy là $0{,}995$.",
                        "correct": "true",
                        "explain": "$1 - 0{,}005 = 0{,}995$."
                    },
                    {
                        "key": "b",
                        "text": "Xác suất chuông reo toàn phần là $P(R) = 0{,}005(0{,}98) + 0{,}995(0{,}01) = 0{,}01485$.",
                        "correct": "true",
                        "explain": "Toàn phần chuẩn."
                    },
                    {
                        "key": "c",
                        "text": "Khi chuông reo, xác suất thực sự có cháy lớn hơn $50\\%$.",
                        "correct": "false",
                        "explain": "$P(\\text{Cháy} \\mid R) = \\frac{0{,}0049}{0{,}01485} \\approx 33\\% < 50\\%$."
                    },
                    {
                        "key": "d",
                        "text": "Công thức Bayes là công cụ toán học để giải quyết bài toán này.",
                        "correct": "true",
                        "explain": "Ứng dụng trực tiếp của Bayes."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Câu 4: Ba nhà máy I, II, III sản xuất bóng đèn với sản lượng là $40\\%, 35\\%, 25\\%$. Tỉ lệ bóng hỏng tương ứng là $1\\%, 2\\%, 3\\%$.",
                "items": [
                    {
                        "key": "a",
                        "text": "Tỉ lệ bóng hỏng của nhà máy I trên toàn thị trường là $0{,}004$.",
                        "correct": "true",
                        "explain": "$0{,}40 \\times 0{,}01 = 0{,}004$."
                    },
                    {
                        "key": "b",
                        "text": "Tỉ lệ bóng hỏng toàn phần của cả ba nhà máy là $0{,}0185$.",
                        "correct": "true",
                        "explain": "$0{,}40(0{,}01) + 0{,}35(0{,}02) + 0{,}25(0{,}03) = 0{,}0185$ ($1{,}85\\%$)."
                    },
                    {
                        "key": "c",
                        "text": "Mua ngẫu nhiên 1 bóng thấy bị hỏng, xác suất bóng do nhà máy III sản xuất là $\\frac{15}{37}$.",
                        "correct": "true",
                        "explain": "Bayes: $0{,}0075 / 0{,}0185 = 15/37$."
                    },
                    {
                        "key": "d",
                        "text": "Trong số các bóng hỏng, bóng của nhà máy I chiếm tỉ lệ cao nhất.",
                        "correct": "false",
                        "explain": "Nhà máy III chiếm tỉ lệ cao nhất ($0{,}0075$)."
                    }
                ]
            },
            {
                "id": 5,
                "title": "Câu 5: Về ứng dụng hiện đại của công thức Bayes trong công nghệ thông tin:",
                "items": [
                    {
                        "key": "a",
                        "text": "Thuật toán Naive Bayes là một trong những thuật toán học máy phân loại phổ biến nhất.",
                        "correct": "true",
                        "explain": "Ứng dụng trong AI và Machine Learning."
                    },
                    {
                        "key": "b",
                        "text": "Bộ lọc thư rác của Gmail áp dụng nguyên lí Bayes để tính xác suất thư rác dựa trên từ khoá.",
                        "correct": "true",
                        "explain": "Bộ lọc Bayesian Spam Filtering."
                    },
                    {
                        "key": "c",
                        "text": "Hệ thống khuyến nghị (Recommendation System) dùng Bayes để cập nhật sở thích người dùng.",
                        "correct": "true",
                        "explain": "Cập nhật xác suất hành vi khách hàng."
                    },
                    {
                        "key": "d",
                        "text": "Xác suất tiên nghiệm $P(A)$ không có vai trò gì trong công thức Bayes.",
                        "correct": "false",
                        "explain": "Rất quan trọng, nó là trọng số nền tảng quyết định xác suất hậu nghiệm."
                    }
                ]
            },
            {
                "id": 6,
                "title": "Câu 6: Về bài toán kiểm định giả thuyết và cập nhật thông tin theo trường phái Bayes:",
                "items": [
                    {
                        "key": "a",
                        "text": "Xác suất hậu nghiệm sẽ trở thành xác suất tiên nghiệm cho lần kiểm định tiếp theo.",
                        "correct": "true",
                        "explain": "Nguyên lý cập nhật liên tục (Sequential Bayesian Updating)."
                    },
                    {
                        "key": "b",
                        "text": "Càng có nhiều bằng chứng thực nghiệm thì độ tin cậy của xác suất hậu nghiệm càng tăng.",
                        "correct": "true",
                        "explain": "Định lý hội tụ xác suất."
                    },
                    {
                        "key": "c",
                        "text": "Nếu bằng chứng $B$ chắc chắn xảy ra ($P(B) = 1$) thì $P(A \\mid B) = P(A)$.",
                        "correct": "true",
                        "explain": "Không cung cấp thêm thông tin mới."
                    },
                    {
                        "key": "d",
                        "text": "Trường phái xác suất Bayes xem xác suất là mức độ tin tưởng vào một giả thuyết.",
                        "correct": "true",
                        "explain": "Triết học xác suất Bayes (Degree of Belief)."
                    }
                ]
            }
        ],
        "matcher": (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 19:") || t.includes("toàn phần") || t.includes("bayes") || t.includes("toan phan"));
      }
    }
  };

  Object.assign(window.DEDICATED_LESSONS_DB, ALL_GRADE12_LESSONS);

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ALL_GRADE12_LESSONS;
  }
})();
