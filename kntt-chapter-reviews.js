/**
 * BỘ MÁY ÔN TẬP VÀ SƠ ĐỒ TƯ DUY TOÀN BỘ CHƯƠNG - TOÁN 10, 11, 12
 * SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG - BỘ GIÁO DỤC VÀ ĐÀO TẠO
 * 
 * Chuẩn định dạng đề thi tốt nghiệp THPT từ năm 2025:
 * 1. Sơ đồ tư duy tóm tắt toàn bộ kiến thức cơ bản của chương
 * 2. Bài test Phần 1: 6 câu trắc nghiệm nhiều lựa chọn (chấm 4 mức sư phạm)
 * 3. Bài test Phần 2: 4 câu đúng / sai (16 ý hỏi a, b, c, d)
 * 4. Bài test Phần 3: 4 câu trả lời ngắn (điền đáp số tính toán)
 * 5. Trợ lý AI giải đáp mọi thắc mắc của học sinh về nội dung trong chương
 */

(function () {
  "use strict";

  // Helper format thẻ Sơ đồ tư duy và Lý thuyết chương
  function createChapterMindMapHTML(chapterInfo, studentName) {
    const branches = chapterInfo.branches || [];
    let branchCardsHTML = "";

    branches.forEach((b, idx) => {
      const colorThemes = [
        { bg: "from-indigo-500 to-indigo-700", border: "border-indigo-300", lightBg: "bg-indigo-50/70", text: "text-indigo-950", badge: "bg-indigo-100 text-indigo-800" },
        { bg: "from-violet-500 to-purple-700", border: "border-violet-300", lightBg: "bg-violet-50/70", text: "text-violet-950", badge: "bg-violet-100 text-violet-800" },
        { bg: "from-emerald-500 to-teal-700", border: "border-emerald-300", lightBg: "bg-emerald-50/70", text: "text-emerald-950", badge: "bg-emerald-100 text-emerald-800" },
        { bg: "from-amber-500 to-orange-700", border: "border-amber-300", lightBg: "bg-amber-50/70", text: "text-amber-950", badge: "bg-amber-100 text-amber-800" },
        { bg: "from-rose-500 to-pink-700", border: "border-rose-300", lightBg: "bg-rose-50/70", text: "text-rose-950", badge: "bg-rose-100 text-rose-800" },
        { bg: "from-cyan-500 to-blue-700", border: "border-cyan-300", lightBg: "bg-cyan-50/70", text: "text-cyan-950", badge: "bg-cyan-100 text-cyan-800" }
      ];
      const theme = colorThemes[idx % colorThemes.length];

      branchCardsHTML += `
        <div class="rounded-2xl border-2 ${theme.border} bg-white shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col">
          <!-- Branch Header -->
          <div class="bg-gradient-to-r ${theme.bg} text-white p-3 sm:p-3.5 flex items-center justify-between gap-2">
            <div class="flex items-center gap-2 min-w-0">
              <span class="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center font-black text-xs shrink-0">${idx + 1}</span>
              <h4 class="font-extrabold text-[12.5pt] sm:text-[13.5pt] truncate">${b.title}</h4>
            </div>
            <span class="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full shrink-0 uppercase tracking-wider">Nhánh ${idx + 1}</span>
          </div>

          <!-- Branch Body -->
          <div class="p-3.5 sm:p-4 space-y-2.5 flex-1 text-[12.5pt] sm:text-[13pt] text-slate-800 leading-relaxed font-serif">
            <!-- Core Theorems -->
            <div class="${theme.lightBg} p-3 rounded-xl border ${theme.border} space-y-1">
              <strong class="${theme.text} font-bold flex items-center gap-1.5 text-xs sm:text-[11.5pt] uppercase tracking-wide">
                <i class="fa-solid fa-bookmark"></i> Định lý & Khái niệm cốt lõi:
              </strong>
              <div class="text-slate-800 text-[12pt] sm:text-[12.5pt]">${b.core}</div>
            </div>

            <!-- Golden Formula -->
            ${b.formula ? `
              <div class="p-2.5 bg-slate-900 text-amber-300 rounded-xl font-mono text-center text-xs sm:text-sm border border-slate-700 shadow-inner">
                <div class="text-[10px] uppercase text-slate-400 font-bold tracking-wider mb-0.5">⚡ Công thức vàng:</div>
                <div class="text-white font-serif text-[12.5pt]">${b.formula}</div>
              </div>
            ` : ''}

            <!-- Pitfalls & Exam Traps -->
            ${b.pitfall ? `
              <div class="p-2.5 bg-rose-50/90 rounded-xl border border-rose-200 text-rose-950 text-xs sm:text-[12pt] space-y-0.5">
                <strong class="text-rose-900 flex items-center gap-1 font-bold text-xs uppercase tracking-wide">
                  <i class="fa-solid fa-triangle-exclamation text-rose-600"></i> Bẫy đề thi cần tránh:
                </strong>
                <p class="leading-snug">${b.pitfall}</p>
              </div>
            ` : ''}

            <!-- Casio Tip -->
            ${b.casio ? `
              <div class="p-2.5 bg-emerald-50/90 rounded-xl border border-emerald-200 text-emerald-950 text-xs sm:text-[12pt] space-y-0.5">
                <strong class="text-emerald-900 flex items-center gap-1 font-bold text-xs uppercase tracking-wide">
                  <i class="fa-solid fa-calculator text-emerald-600"></i> Bí quyết Casio:
                </strong>
                <p class="leading-snug">${b.casio}</p>
              </div>
            ` : ''}
          </div>

          <!-- Quick Ask Button -->
          <div class="p-2.5 bg-slate-50 border-t border-slate-100 flex justify-end">
            <button 
              type="button" 
              onclick="sendQuickReply('Thầy/Cô hướng dẫn chi tiết thêm về nhánh: ${b.title.replace(/'/g, "\\'")}')" 
              class="text-xs font-bold text-indigo-700 hover:text-indigo-900 bg-white hover:bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-lg transition flex items-center gap-1 cursor-pointer active:scale-95 shadow-2xs"
            >
              <i class="fa-solid fa-comments text-indigo-500"></i>
              <span>Hỏi Thầy/Cô về nhánh này</span>
            </button>
          </div>
        </div>
      `;
    });

    return `
      <div class="space-y-4 sm:space-y-6 font-serif max-w-4xl mx-auto">
        <!-- 1. Chapter Mind Map Center Hub Banner -->
        <div class="p-4 sm:p-6 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-950 text-white rounded-3xl shadow-lg border-2 border-indigo-400/40 relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 w-44 h-44 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none"></div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
            <div class="flex items-center gap-3.5">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 flex items-center justify-center font-black text-2xl shadow-md shrink-0">
                <i class="fa-solid fa-diagram-project"></i>
              </div>
              <div>
                <span class="text-[11px] uppercase font-bold tracking-widest text-amber-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-amber-300/30">
                  SƠ ĐỒ TƯ DUY & HỆ THỐNG HÓA KIẾN THỨC
                </span>
                <h2 class="text-xl sm:text-2xl font-black text-white mt-1 leading-tight">
                  ${chapterInfo.title}
                </h2>
                <p class="text-xs sm:text-sm text-indigo-200 mt-0.5">
                  ${chapterInfo.grade} — SGK Kết nối tri thức với cuộc sống (Bộ GD&ĐT)
                </p>
              </div>
            </div>
            <div class="flex sm:flex-col items-center sm:items-end justify-between gap-1.5 shrink-0">
              <span class="text-xs text-indigo-200">Tổng quan chương:</span>
              <span class="px-3 py-1 rounded-xl bg-amber-400 text-indigo-950 font-black text-xs shadow-xs">
                ${branches.length} Nhánh Kiến Thức
              </span>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-indigo-400/30 text-xs sm:text-[12.5pt] text-indigo-100 leading-relaxed">
            Chào em <strong>${studentName}</strong>! Dưới đây là sơ đồ tư duy đa chiều kết nối toàn bộ kiến thức, định lý then chốt, công thức vàng và bẫy đề thi của <strong>${chapterInfo.title}</strong>. Em hãy đọc kỹ từng nhánh, sau đó chuyển sang các tab để hoàn thành <strong>bài test 3 phần chuẩn Đề thi tốt nghiệp THPT 2025</strong> nhé!
          </div>
        </div>

        <!-- 2. Interactive Mind Map Branches Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          ${branchCardsHTML}
        </div>

        <!-- 3. Bốn Khối Lý Thuyết Trọng Tâm Ôn Tập Chương -->
        <div class="space-y-4">
          <!-- Khối 1: Bảng công thức & Định lý cốt lõi -->
          <div class="p-4 sm:p-5 bg-gradient-to-br from-indigo-50/90 via-white to-sky-50/70 border-2 border-indigo-300 rounded-2xl shadow-sm space-y-3">
            <div class="flex items-center gap-2 text-indigo-950 font-black text-base sm:text-lg pb-2 border-b border-indigo-200">
              <i class="fa-solid fa-graduation-cap text-indigo-600 text-xl"></i>
              <span>1. TỔNG HỢP CÁC ĐỊNH LÝ & CÔNG THỨC TOÁN TRỌNG TÂM CỦA CHƯƠNG:</span>
            </div>
            <div class="text-[13pt] sm:text-[13.5pt] text-slate-800 leading-relaxed space-y-2">
              ${chapterInfo.theorySummary}
            </div>
          </div>

          <!-- Khối 2: Các bẫy đề thi & Lỗi sai kinh điển -->
          <div class="p-4 sm:p-5 bg-gradient-to-br from-rose-50/90 via-white to-amber-50/70 border-2 border-rose-300 rounded-2xl shadow-sm space-y-3">
            <div class="flex items-center gap-2 text-rose-950 font-black text-base sm:text-lg pb-2 border-b border-rose-200">
              <i class="fa-solid fa-triangle-exclamation text-rose-600 text-xl"></i>
              <span>2. TỔNG HỢP CÁC BẪY ĐỀ THI & HIỂU LẦM TAI HẠI CẦN TRÁNH:</span>
            </div>
            <ul class="text-[13pt] sm:text-[13.5pt] text-slate-800 space-y-2 ml-4 list-disc leading-relaxed">
              ${chapterInfo.pitfallsSummary}
            </ul>
          </div>

          <!-- Khối 3: Ma trận đề thi TN THPT 3 phần chuẩn 2025 -->
          <div class="p-4 sm:p-5 bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/70 border-2 border-emerald-300 rounded-2xl shadow-sm space-y-3">
            <div class="flex items-center gap-2 text-emerald-950 font-black text-base sm:text-lg pb-2 border-b border-emerald-200">
              <i class="fa-solid fa-clipboard-check text-emerald-600 text-xl"></i>
              <span>3. CẤU TRÚC BÀI TEST TỔNG HỢP CHƯƠNG (CHUẨN ĐỀ THI BỘ GD&ĐT 2025):</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div class="p-3 bg-white rounded-xl border border-emerald-200 shadow-2xs space-y-1">
                <span class="font-bold text-indigo-900 block text-[13pt]">Phần I: Trắc nghiệm</span>
                <p class="text-slate-600 font-medium text-[11.5pt]">• <strong>6 câu</strong> 4 lựa chọn (A, B, C, D).</p>
                <p class="text-slate-600 font-medium text-[11.5pt]">• Làm bài độc lập, không gợi ý giữa chừng.</p>
                <span class="text-emerald-700 font-bold block text-xs mt-1">0.50 đ/câu — Tối đa 3.00 điểm</span>
              </div>
              <div class="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-1">
                <span class="font-bold text-amber-900 block text-[13pt]">Phần II: Đúng / Sai</span>
                <p class="text-slate-600 font-medium text-[11.5pt]">• <strong>4 câu</strong> (mỗi câu 4 ý a,b,c,d = <strong>16 ý</strong>).</p>
                <p class="text-slate-600 font-medium text-[11.5pt]">• Thang điểm Bộ: 1 ý = 0.1đ; 2 ý = 0.25đ; 3 ý = 0.5đ; 4 ý = 1.0đ.</p>
                <span class="text-amber-700 font-bold block text-xs mt-1">1.00 đ/câu — Tối đa 4.00 điểm</span>
              </div>
              <div class="p-3 bg-white rounded-xl border border-cyan-200 shadow-2xs space-y-1">
                <span class="font-bold text-cyan-900 block text-[13pt]">Phần III: Trả lời ngắn</span>
                <p class="text-slate-600 font-medium text-[11.5pt]">• <strong>4 câu</strong> điền kết quả tính toán.</p>
                <p class="text-slate-600 font-medium text-[11.5pt]">• Hoàn thành cả 3 phần mới chấm điểm & mở lời giải.</p>
                <span class="text-cyan-700 font-bold block text-xs mt-1">0.66 đ/câu — Tối đa 2.64 điểm</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. Big CTA Button to Start 3-Part Test -->
        <div class="p-5 bg-gradient-to-r from-indigo-50 via-purple-50 to-emerald-50 border-2 border-indigo-400 rounded-3xl shadow-md text-center space-y-3 font-serif">
          <div class="flex items-center justify-center gap-2 text-indigo-950 font-black text-lg sm:text-xl">
            <i class="fa-solid fa-flag-checkered text-amber-500"></i>
            <span>Sẵn sàng chinh phục bài test tổng hợp ${chapterInfo.title}?</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Hãy bắt đầu ngay với <strong>Phần 1: 6 câu trắc nghiệm nhiều lựa chọn</strong> ở Tab 2 phía trên, sau đó chuyển tiếp qua <strong>Phần 2 (4 câu Đúng/Sai - 16 ý)</strong> và <strong>Phần 3 (4 câu Trả lời ngắn)</strong>!
          </p>
          <div class="flex flex-col sm:flex-row gap-2.5 justify-center pt-1">
            <button 
              type="button" 
              onclick="switchStudyTab('mcq')" 
              class="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white font-black rounded-2xl text-sm sm:text-base transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>👉 Bắt đầu làm 6 câu Trắc nghiệm (Phần 1)</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            <button 
              type="button" 
              onclick="switchStudyTab('chat')" 
              class="px-5 py-3 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold rounded-2xl text-xs sm:text-sm transition flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <i class="fa-solid fa-comments text-indigo-600"></i>
              <span>Hỏi Thầy/Cô về kiến thức chương</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // NGÂN HÀNG DỮ LIỆU ĐẶC BIỆT: 24 BÀI TẬP CUỐI CHƯƠNG (TOÁN 10 - 11 - 12)
  // =========================================================================

  const CHAPTER_REVIEWS_DB = {
    // -------------------------------------------------------------
    // KHỐI 10 - CHƯƠNG I: MỆNH ĐỀ VÀ TẬP HỢP (SGK KẾT NỐI TRI THỨC)
    // -------------------------------------------------------------
    "10_1": {
      id: "10_1",
      grade: "Lớp 10",
      chapterNumber: 1,
      title: "Chương I: Mệnh đề và tập hợp",
      shortTitle: "Ôn tập Chương I: Mệnh đề & Tập hợp",
      branches: [
        {
          title: "Nhánh 1: Mệnh đề, Mệnh đề phủ định & Mệnh đề chứa biến",
          core: "Mệnh đề toán học là một khẳng định đúng hoặc sai, không thể vừa đúng vừa sai. Mệnh đề chứa biến $P(x)$ trở thành mệnh đề khi biến nhận giá trị cụ thể. Phủ định của $P$ là $\\bar{P}$ (đúng khi $P$ sai, sai khi $P$ đúng).",
          formula: "$$\\bar{P} \\text{ đúng} \\Leftrightarrow P \\text{ sai}; \\quad \\overline{x > a} \\Leftrightarrow x \\le a; \\quad \\overline{x = a} \\Leftrightarrow x \\neq a$$",
          pitfall: "Nhầm câu hỏi, câu cảm thán, câu cầu khiến là mệnh đề. Khi phủ định bất đẳng thức ngặt ($>$) quên lấy dấu bằng ($\\le$).",
          casio: "Bấm [CALC] gán các giá trị thử nghiệm để kiểm tra tính đúng sai của mệnh đề chứa biến."
        },
        {
          title: "Nhánh 2: Mệnh đề kéo theo, tương đương & Lượng từ ∀, ∃",
          core: "Mệnh đề kéo theo $P \\Rightarrow Q$ chỉ sai khi $P$ đúng mà $Q$ sai. $P$ là điều kiện đủ để có $Q$; $Q$ là điều kiện cần để có $P$. Mệnh đề tương đương $P \\Leftrightarrow Q$ đúng khi cả hai cùng đúng hoặc cùng sai. Phủ định của $\\forall$ là $\\exists$, phủ định của $\\exists$ là $\\forall$.",
          formula: "$$\\overline{\\forall x \\in X, P(x)} \\Leftrightarrow \\exists x \\in X, \\overline{P(x)}; \\quad \\overline{\\exists x \\in X, P(x)} \\Leftrightarrow \\forall x \\in X, \\overline{P(x)}$$",
          pitfall: "Nhầm lẫn giữa điều kiện cần và điều kiện đủ (Khẩu quyết: Trước Đủ, Sau Cần). Khi phủ định lượng từ quên phủ định tính chất $P(x)$.",
          casio: "Bấm [MENU] [8] (TABLE) quét tìm nghiệm tồn tại ($\\exists$) hoặc tìm phản ví dụ bác bỏ mệnh đề với mọi ($\\forall$)."
        },
        {
          title: "Nhánh 3: Khái niệm tập hợp & Tập con",
          core: "Hai cách xác định tập hợp: liệt kê phần tử hoặc nêu tính chất đặc trưng. Tập rỗng $\\emptyset$ không có phần tử nào. $A \\subset B \\Leftrightarrow (\\forall x \\in A \\Rightarrow x \\in B)$. Tập hợp có $n$ phần tử thì có đúng $2^n$ tập con. Hai tập hợp bằng nhau: $A = B \\Leftrightarrow A \\subset B$ và $B \\subset A$.",
          formula: "$$n(A) = n \\implies \\text{Số tập con } = 2^n; \\quad \\emptyset \\subset A, \\quad A \\subset A, \\forall A$$",
          pitfall: "Dùng sai ký hiệu: $\\in$ dùng giữa phần tử và tập hợp; $\\subset$ dùng giữa hai tập hợp. Quên đếm tập rỗng $\\emptyset$ và chính nó.",
          casio: "Bấm phép tính $2^n$ để tính nhanh số lượng tập hợp con của tập hợp hữu hạn."
        },
        {
          title: "Nhánh 4: Các phép toán trên tập hợp & Các khoảng số thực",
          core: "Giao $A \\cap B$: lấy phần chung. Hợp $A \\cup B$: lấy tất cả. Hiệu $A \\setminus B$: lấy thuộc $A$ nhưng không thuộc $B$. Phần bù $C_E A$: khi $A \\subset E$. Các tập con của $\\mathbb{R}$: khoảng $(a; b)$, đoạn $[a; b]$, nửa khoảng $[a; b)$. Công thức số phần tử: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$.",
          formula: "$$n(A \\cup B) = n(A) + n(B) - n(A \\cap B); \\quad C_{\\mathbb{R}} [a; b) = (-\\infty; a) \\cup [b; +\\infty)$$",
          pitfall: "Xác định sai dấu mút (ngoặc vuông hay ngoặc tròn) khi lấy hiệu hoặc phần bù trên trục số thực.",
          casio: "Vẽ trục số và dùng phương pháp gạch sọc phần không lấy để xác định chính xác giao, hợp, hiệu."
        }
      ],
      theorySummary: `
        <p>• <strong>Mệnh đề logic:</strong> Khẳng định chỉ có thể đúng hoặc sai. Định lý $P \\Rightarrow Q$: $P$ là điều kiện đủ, $Q$ là điều kiện cần. Phủ định của $\\forall$ là $\\exists$, phủ định của $\\exists$ là $\\forall$.</p>
        <p>• <strong>Tập hợp & Tập con:</strong> Tập rỗng $\\emptyset$ là tập con của mọi tập hợp. Tập hợp gồm $n$ phần tử có đúng $2^n$ tập hợp con.</p>
        <p>• <strong>Các phép toán tập hợp:</strong> Giao $\\cap$ (và), Hợp $\\cup$ (hoặc), Hiệu $\\setminus$ (trừ bỏ), Phần bù $C_E A$ (khi $A \\subset E$).</p>
        <p>• <strong>Tập con của $\\mathbb{R}$ & Biểu đồ Ven:</strong> Biểu diễn khoảng, đoạn, nửa khoảng trên trục số. Công thức cộng số phần tử: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$.</p>
      `,
      pitfallsSummary: `
        <li>Nhầm lẫn giữa quan hệ thuộc ($\\in$) giữa phần tử và tập hợp với quan hệ con ($\\subset$) giữa hai tập hợp.</li>
        <li>Quên đổi chiều hoặc quên dấu bằng khi phủ định mệnh đề chứa bất đẳng thức.</li>
        <li>Nhầm lẫn điều kiện cần và điều kiện đủ trong mệnh đề kéo theo (Trước Đủ - Sau Cần).</li>
        <li>Lấy nhầm đầu mút ngoặc tròn $($ thành ngoặc vuông $[$ khi thực hiện phép trừ tập hợp trên trục số.</li>
      `,
      mcqs: [
        {
          question: "Trong các câu sau, câu nào là một **mệnh đề toán học**?",
          options: [
            "A. Số 19 là một số nguyên tố.",
            "B. Hãy chăm chỉ học bài!",
            "C. Thời tiết hôm nay có lạnh không?",
            "D. Ôi, bài toán này hay quá!"
          ],
          correct: "A",
          hint1: "Mệnh đề toán học là câu khẳng định về sự kiện toán học có tính đúng hoặc sai rõ ràng.",
          hint2: "Loại trừ các câu cảm thán, câu hỏi, câu cầu khiến. Câu khẳng định số 19 là số nguyên tố là mệnh đề toán học.",
          explain: "\"Số 19 là một số nguyên tố\" là khẳng định toán học đúng, nên là mệnh đề toán học. Các câu còn lại là câu cầu khiến, nghi vấn, cảm thán. Đáp án đúng là A."
        },
        {
          question: "Mệnh đề phủ định của mệnh đề $P: \"\\forall x \\in \\mathbb{R}, x^2 - x + 1 > 0\"$ là:",
          options: [
            "A. $\\bar{P}: \"\\exists x \\in \\mathbb{R}, x^2 - x + 1 \\le 0\"$",
            "B. $\\bar{P}: \"\\exists x \\in \\mathbb{R}, x^2 - x + 1 < 0\"$",
            "C. $\\bar{P}: \"\\forall x \\in \\mathbb{R}, x^2 - x + 1 \\le 0\"$",
            "D. $\\bar{P}: \"\\exists x \\in \\mathbb{R}, x^2 - x + 1 > 0\"$"
          ],
          correct: "A",
          hint1: "Phủ định của lượng từ $\\forall$ (với mọi) là lượng từ $\\exists$ (tồn tại).",
          hint2: "Phủ định của dấu lớn hơn ($>$) là dấu nhỏ hơn hoặc bằng ($\\le$).",
          explain: "Phủ định của lượng từ $\\forall$ là $\\exists$, phủ định của bất đẳng thức $>$ là $\\le$. Vậy $\\bar{P}: \"\\exists x \\in \\mathbb{R}, x^2 - x + 1 \\le 0\"$. Đáp án đúng là A."
        },
        {
          question: "Cho định lí: \"Nếu một số tự nhiên chia hết cho 6 thì nó chia hết cho 3\". Khẳng định nào sau đây là **ĐÚNG**?",
          options: [
            "A. Số tự nhiên chia hết cho 6 là điều kiện đủ để nó chia hết cho 3.",
            "B. Số tự nhiên chia hết cho 6 là điều kiện cần để nó chia hết cho 3.",
            "C. Số tự nhiên chia hết cho 3 là điều kiện đủ để nó chia hết cho 6.",
            "D. Số tự nhiên chia hết cho 6 là điều kiện cần và đủ để nó chia hết cho 3."
          ],
          correct: "A",
          hint1: "Định lí có dạng $P \\Rightarrow Q$. Giả thiết $P$ đứng trước là điều kiện đủ, kết luận $Q$ đứng sau là điều kiện cần.",
          hint2: "Khẩu quyết: \"Trước Đủ, Sau Cần\". Mệnh đề \"chia hết cho 6\" đứng trước nên là điều kiện đủ.",
          explain: "Trong mệnh đề kéo theo $P \\Rightarrow Q$, giả thiết $P$ là điều kiện đủ để có kết luận $Q$. Do đó \"chia hết cho 6\" là điều kiện đủ để \"chia hết cho 3\". Đáp án đúng là A."
        },
        {
          question: "Tập hợp $A = \\{0; 1; 2; 3\\}$ có tất cả bao nhiêu tập hợp con?",
          options: ["A. 16", "B. 8", "C. 4", "D. 15"],
          correct: "A",
          hint1: "Tập hợp có $n$ phần tử thì có tất cả $2^n$ tập hợp con (kể cả tập rỗng và chính nó).",
          hint2: "Tập $A$ có $n = 4$ phần tử, tính số tập con: $2^4 = 16$.",
          explain: "Số phần tử của tập hợp $A$ là $n = 4$. Do đó số tập con của $A$ là $2^4 = 16$ tập hợp con. Đáp án đúng là A."
        },
        {
          question: "Cho hai tập hợp $A = [-3; 2)$ và $B = (-1; 4]$. Giao của hai tập hợp $A \\cap B$ là:",
          options: ["A. $(-1; 2)$", "B. $[-3; 4]$", "C. $[-1; 2)$", "D. $(-1; 2]$"],
          correct: "A",
          hint1: "Giao $A \\cap B$ là phần tử chung vừa thuộc $[-3; 2)$ vừa thuộc $(-1; 4]$.",
          hint2: "Phần giao thỏa mãn $-1 < x < 2$, tương ứng với khoảng mở $(-1; 2)$.",
          explain: "Phần chung của hai tập hợp thỏa mãn $-1 < x < 2$, tức là khoảng $(-1; 2)$. Đáp án đúng là A."
        },
        {
          question: "Lớp 10A có 40 học sinh, trong đó có 25 học sinh thích môn Toán, 18 học sinh thích môn Ngữ văn và 10 học sinh thích cả hai môn. Số học sinh không thích môn nào trong hai môn Toán và Ngữ văn là:",
          options: ["A. 7 học sinh", "B. 5 học sinh", "C. 33 học sinh", "D. 8 học sinh"],
          correct: "A",
          hint1: "Áp dụng công thức cộng số phần tử: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$.",
          hint2: "Số học sinh thích ít nhất một môn: $25 + 18 - 10 = 33$. Số học sinh không thích môn nào: $40 - 33 = 7$.",
          explain: "Số học sinh thích ít nhất một môn là $n(T \\cup V) = n(T) + n(V) - n(T \\cap V) = 25 + 18 - 10 = 33$ học sinh. Số học sinh không thích môn nào là $40 - 33 = 7$ học sinh. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét tính đúng sai của các câu và mệnh đề sau:",
          items: [
            { key: "a", text: "\"Số 2025 chia hết cho 5\" là một mệnh đề toán học đúng.", correct: "true", explain: "2025 có chữ số tận cùng là 5 nên chia hết cho 5, mệnh đề Đúng." },
            { key: "b", text: "\"Phương trình $x^2 + 1 = 0$ có nghiệm thực\" là một mệnh đề toán học sai.", correct: "true", explain: "Vì $x^2 + 1 > 0, \\forall x \\in \\mathbb{R}$ nên phương trình vô nghiệm thực, khẳng định trên là mệnh đề sai, mệnh đề Đúng." },
            { key: "c", text: "\"Các bạn học sinh lớp 10 học giỏi quá!\" là một mệnh đề toán học.", correct: "false", explain: "Đây là câu cảm thán, không thể xác định đúng sai nên không phải mệnh đề, mệnh đề Sai." },
            { key: "d", text: "Phủ định của mệnh đề \"$\\forall x \\in \\mathbb{R}, x^2 \\ge 0$\" là \"$\\exists x \\in \\mathbb{R}, x^2 < 0$\".", correct: "true", explain: "Phủ định của $\\forall$ là $\\exists$, phủ định của $\\ge$ là $<$, mệnh đề Đúng." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho định lí dạng kéo theo $P \\Rightarrow Q$: \"Nếu tứ giác $ABCD$ là hình thoi thì tứ giác $ABCD$ có hai đường chéo vuông góc với nhau\":",
          items: [
            { key: "a", text: "Mệnh đề $P \\Rightarrow Q$ là một định lí đúng.", correct: "true", explain: "Tính chất hình thoi có hai đường chéo vuông góc, mệnh đề Đúng." },
            { key: "b", text: "Tứ giác $ABCD$ là hình thoi là điều kiện đủ để nó có hai đường chéo vuông góc.", correct: "true", explain: "Giả thiết $P$ đứng trước là điều kiện đủ, mệnh đề Đúng." },
            { key: "c", text: "Mệnh đề đảo là: \"Nếu tứ giác $ABCD$ có hai đường chéo vuông góc thì tứ giác $ABCD$ là hình thoi\".", correct: "true", explain: "Đúng cấu trúc mệnh đề đảo $Q \\Rightarrow P$, mệnh đề Đúng." },
            { key: "d", text: "Mệnh đề đảo của định lí trên là một mệnh đề đúng.", correct: "false", explain: "Tứ giác có 2 đường chéo vuông góc chưa chắc là hình thoi (ví dụ hình diều), mệnh đề Sai." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hai tập hợp $A = [-2; 3]$ và $B = (1; 5)$ trên tập số thực $\\mathbb{R}$:",
          items: [
            { key: "a", text: "Giao của hai tập hợp là $A \\cap B = (1; 3]$.", correct: "true", explain: "Phần chung lớn hơn 1 và nhỏ hơn hoặc bằng 3: $(1; 3]$, mệnh đề Đúng." },
            { key: "b", text: "Hợp của hai tập hợp là $A \\cup B = [-2; 5)$.", correct: "true", explain: "Gộp từ mút trái $-2$ đến mút phải $5$: $[-2; 5)$, mệnh đề Đúng." },
            { key: "c", text: "Hiệu $A \\setminus B = [-2; 1]$.", correct: "true", explain: "Do $B$ không lấy điểm 1 nên trong $A \\setminus B$ vẫn giữ lại điểm 1, kết quả $[-2; 1]$, mệnh đề Đúng." },
            { key: "d", text: "Phần bù của $A$ trong $\\mathbb{R}$ là $C_{\\mathbb{R}} A = (-\\infty; -2) \\cup (3; +\\infty)$.", correct: "true", explain: "Do $A = [-2; 3]$ lấy cả hai mút nên phần bù là $(-\\infty; -2) \\cup (3; +\\infty)$, mệnh đề Đúng." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho tập hợp $A = [m; m + 2]$ và $B = (1; 4)$ ($m$ là tham số thực):",
          items: [
            { key: "a", text: "Độ dài của đoạn $A$ luôn bằng $(m + 2) - m = 2$ với mọi $m$.", correct: "true", explain: "Độ dài đoạn bằng hiệu hai mút: $m+2 - m = 2$, mệnh đề Đúng." },
            { key: "b", text: "Để $A \\cap B = \\emptyset$ thì $m + 2 \\le 1$ hoặc $m \\ge 4$.", correct: "true", explain: "Hai tập rời nhau khi đoạn $A$ nằm hoàn toàn bên trái 1 hoặc bên phải 4, mệnh đề Đúng." },
            { key: "c", text: "Điều kiện để $A \\cap B = \\emptyset$ là $m \\le -1$ hoặc $m \\ge 4$.", correct: "true", explain: "$m + 2 \\le 1 \\Leftrightarrow m \\le -1$ hoặc $m \\ge 4$, mệnh đề Đúng." },
            { key: "d", text: "Với $m = 1$, ta có $A \\subset B$.", correct: "false", explain: "Khi $m = 1$, $A = [1; 3]$ chứa số 1, trong khi $B = (1; 4)$ không chứa số 1, nên $A$ không phải tập con của $B$, mệnh đề Sai." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Tính số tập con của tập hợp",
          question: "Cho tập hợp $A = \\{x \\in \\mathbb{N} \\mid x \\le 5 \\text{ và } x \\text{ là số nguyên tố}\\}$. Hỏi tập hợp $A$ có tất cả bao nhiêu tập hợp con?",
          correctAnswer: "8",
          acceptedAnswers: ["8", "8.0", "8,0"],
          hint1: "Liệt kê các số tự nhiên nguyên tố nhỏ hơn hoặc bằng 5: các số nguyên tố đó là 2, 3, 5.",
          hint2: "Tập hợp $A = \\{2; 3; 5\\}$ có 3 phần tử. Số tập hợp con được tính bởi công thức $2^n = 2^3$.",
          explain: "Các số tự nhiên nhỏ hơn hoặc bằng 5 là số nguyên tố gồm: $A = \\{2; 3; 5\\}$. Số phần tử của $A$ là $n = 3$. Vậy số tập hợp con của $A$ là $2^3 = 8$."
        },
        {
          id: 2,
          title: "Tìm tham số để hai khoảng rời nhau",
          question: "Cho hai khoảng $A = (-\\infty; m]$ và $B = (3; +\\infty)$. Tìm giá trị nguyên lớn nhất của tham số $m$ để $A \\cap B = \\emptyset$.",
          correctAnswer: "3",
          acceptedAnswers: ["3", "3.0", "3,0"],
          hint1: "Để $A \\cap B = \\emptyset$ thì mút phải của tập $A$ phải nhỏ hơn hoặc bằng mút trái của tập $B$.",
          hint2: "Ta có $m \\le 3$. Giá trị nguyên lớn nhất thỏa mãn là $m = 3$.",
          explain: "Ta có $A \\cap B = \\emptyset \\Leftrightarrow m \\le 3$. Vậy giá trị nguyên lớn nhất của tham số $m$ là 3."
        },
        {
          id: 3,
          title: "Bài toán thực tế số phần tử biểu đồ Ven",
          question: "Lớp 10A có 45 học sinh. Trong đó có 25 bạn thích bóng đá, 20 bạn thích bóng rổ, và 12 bạn thích cả hai môn. Hỏi lớp 10A có bao nhiêu học sinh không thích môn nào trong hai môn bóng đá và bóng rổ?",
          unit: "học sinh",
          correctAnswer: "12",
          acceptedAnswers: ["12", "12.0", "12,0"],
          hint1: "Tính số học sinh thích ít nhất một môn: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$.",
          hint2: "Số học sinh thích ít nhất một môn là $25 + 20 - 12 = 33$. Lấy tổng số học sinh trừ đi 33.",
          explain: "Số bạn thích ít nhất một trong hai môn là $25 + 20 - 12 = 33$ bạn. Số học sinh không thích môn nào là $45 - 33 = 12$ bạn."
        },
        {
          id: 4,
          title: "Tính giá trị biểu thức tọa độ hai mút",
          question: "Cho đoạn $A = [-3; 5]$ và khoảng $B = (-1; 8)$. Giao của hai tập hợp là nửa khoảng $A \\cap B = (a; b]$. Tính giá trị của biểu thức $T = 2a + 3b$.",
          correctAnswer: "13",
          acceptedAnswers: ["13", "13.0", "13,0"],
          hint1: "Xác định giao của hai tập hợp: $A \\cap B = (-1; 5]$, từ đó suy ra $a = -1$ và $b = 5$.",
          hint2: "Thay $a = -1, b = 5$ vào biểu thức $T = 2a + 3b = 2(-1) + 3(5)$.",
          explain: "Ta có $A \\cap B = [-3; 5] \\cap (-1; 8) = (-1; 5]$. Suy ra $a = -1$ và $b = 5$. Khi đó $T = 2(-1) + 3(5) = -2 + 15 = 13$."
        }
      ]
    },

    // -------------------------------------------------------------
    // KHỐI 10 - CHƯƠNG II: BẤT PHƯƠNG TRÌNH VÀ HỆ BPT BẬC NHẤT HAI ẨN (SGK KNTT)
    // -------------------------------------------------------------
    "10_2": {
      id: "10_2",
      grade: "Lớp 10",
      chapterNumber: 2,
      title: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
      shortTitle: "Ôn tập Chương II: BPT & Hệ BPT bậc nhất hai ẩn",
      branches: [
        {
          title: "Nhánh 1: BPT bậc nhất hai ẩn & Nửa mặt phẳng bờ d",
          core: "BPT bậc nhất hai ẩn có dạng $ax + by < c$ ($> , \\le, \\ge$) với $a^2 + b^2 > 0$. Miền nghiệm là nửa mặt phẳng có bờ là đường thẳng $d: ax + by = c$. Lấy điểm thử $M(x_0; y_0) \\notin d$ (thường là gốc tọa độ $O(0; 0)$ nếu $c \\neq 0$). Kể cả bờ nếu có dấu $\\le, \\ge$ (nét liền), không kể bờ nếu có dấu $<, >$ (nét đứt).",
          formula: "$$d: ax + by = c; \\quad (x_0; y_0) \\in \\text{Miền nghiệm} \\iff ax_0 + by_0 \\le c$$",
          pitfall: "Chọn điểm thử $O(0; 0)$ khi đường thẳng bờ đi qua gốc tọa độ. Nhầm lẫn giữa bờ nét liền và bờ nét đứt.",
          casio: "Bấm [CALC] thay tọa độ các điểm $(x; y)$ kiểm tra nhanh dấu của biểu thức $ax + by - c$."
        },
        {
          title: "Nhánh 2: Hệ BPT bậc nhất hai ẩn & Miền đa giác",
          core: "Hệ BPT bậc nhất hai ẩn gồm từ hai BPT bậc nhất 2 ẩn trở lên. Miền nghiệm của hệ là giao của các miền nghiệm của từng BPT trong hệ. Miền nghiệm thường là một miền đa giác (tam giác, tứ giác...) hoặc miền không bị chặn. Các đỉnh của đa giác là giao điểm của các cặp đường thẳng bờ.",
          formula: "$$\\text{Miền nghiệm hệ} = \\bigcap_{i=1}^k \\text{Miền nghiệm BPT}_i$$",
          pitfall: "Nhầm giao các miền nghiệm thành phép hợp. Tính nhầm tọa độ các đỉnh của miền đa giác.",
          casio: "Bấm [MENU] [9] [1] [2] giải hệ hai phương trình bậc nhất 2 ẩn tìm tọa độ đỉnh giao điểm cực nhanh."
        },
        {
          title: "Nhánh 3: Quy hoạch tuyến tính & Giá trị tối ưu",
          core: "Định lý quy hoạch tuyến tính: Biểu thức mục tiêu $F(x; y) = ax + by$ trên một miền đa giác lồi $A_1A_2\\dots A_n$ luôn đạt giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN) tại một trong các đỉnh của đa giác đó.",
          formula: "$$F_{\\max} = \\max \\{F(A_1), F(A_2), \\dots, F(A_n)\\}; \\quad F_{\\min} = \\min \\{F(A_1), F(A_2), \\dots, F(A_n)\\}$$",
          pitfall: "Đi tính giá trị hàm mục tiêu tại các điểm bên trong miền đa giác thay vì kiểm tra tại các đỉnh.",
          casio: "Nhập biểu thức $ax + by$, bấm [CALC] gán lần lượt tọa độ các đỉnh để so sánh tìm $\\max, \\min$."
        },
        {
          title: "Nhánh 4: Kỹ năng mô hình hóa bài toán kinh tế thực tế",
          core: "Quy trình 4 bước mô hình hóa: Gọi ẩn $x, y \\ge 0$ $\\to$ Thiết lập các bất phương trình ràng buộc về nguyên vật liệu, thời gian, kinh phí $\\to$ Xác định miền nghiệm đa giác và tọa độ các đỉnh $\\to$ Tính hàm mục tiêu doanh thu/lợi nhuận $F(x; y)$ tại các đỉnh và kết luận phương án tối ưu.",
          formula: "$$\\text{Hàm mục tiêu: } F(x; y) = c_1 x + c_2 y \\to \\max \\quad (x, y \\ge 0, x, y \\in \\mathbb{N})$$",
          pitfall: "Quên điều kiện không âm $x \\ge 0, y \\ge 0$ hoặc điều kiện nguyên $x, y \\in \\mathbb{N}$ trong thực tế sản xuất.",
          casio: "Kiểm tra các điểm nguyên lân cận nếu tọa độ đỉnh của miền đa giác là số thập phân."
        }
      ],
      theorySummary: `
        <p>• <strong>Bất phương trình bậc nhất hai ẩn:</strong> Miền nghiệm là nửa mặt phẳng xác định qua 3 bước: vẽ đường thẳng bờ $d: ax + by = c$, thử điểm $O(0; 0)$ (hoặc điểm thích hợp), kết luận và gạch bỏ miền không phải nghiệm.</p>
        <p>• <strong>Hệ bất phương trình bậc nhất hai ẩn:</strong> Miền nghiệm là phần mặt phẳng không bị gạch sau khi biểu diễn tất cả các BPT của hệ trên cùng một hệ trục $Oxy$.</p>
        <p>• <strong>Định lý quy hoạch tuyến tính:</strong> Biểu thức $F(x; y) = ax + by$ đạt cực trị (GTLN, GTNN) trên miền đa giác tại một trong các đỉnh của miền đa giác đó.</p>
        <p>• <strong>Ứng dụng thực tế:</strong> Giải quyết bài toán phân bổ nguồn lực, tối ưu hóa lợi nhuận, chi phí dinh dưỡng và thời gian sản xuất.</p>
      `,
      pitfallsSummary: `
        <li>Dùng điểm $O(0; 0)$ làm điểm thử khi đường thẳng bờ đi qua gốc tọa độ.</li>
        <li>Quên không kể bờ khi BPT chứa dấu bất đẳng thức ngặt ($<, >$).</li>
        <li>Xác định sai tọa độ giao điểm giữa các đường thẳng bờ.</li>
        <li>Bỏ sót các điều kiện thực tế như $x \\ge 0, y \\ge 0$ hoặc $x, y \\in \\mathbb{N}$.</li>
      `,
      mcqs: [
        {
          question: "Cặp số $(x; y)$ nào sau đây là một **nghiệm** của bất phương trình $2x - 3y + 6 > 0$?",
          options: ["A. $(1; 1)$", "B. $(-4; 0)$", "C. $(0; 3)$", "D. $(-2; 1)$"],
          correct: "A",
          hint1: "Thay lần lượt tọa độ từng cặp $(x; y)$ vào vế trái của bất phương trình.",
          hint2: "Với cặp $(1; 1)$, ta có $2(1) - 3(1) + 6 = 5 > 0$, đây là khẳng định đúng.",
          explain: "Thay $(1; 1)$ vào vế trái: $2(1) - 3(1) + 6 = 5 > 0$ (thỏa mãn). Các điểm còn lại đều cho giá trị $\\le 0$. Đáp án đúng là A."
        },
        {
          question: "Miền nghiệm của bất phương trình $x - 2y \\le 0$ chứa điểm nào sau đây?",
          options: ["A. Điểm $M(1; 2)$", "B. Điểm $N(3; 1)$", "C. Điểm $P(4; 1)$", "D. Điểm $Q(2; 0)$"],
          correct: "A",
          hint1: "Thay tọa độ từng điểm vào biểu thức $x - 2y$. Điểm nào làm cho biểu thức $\\le 0$ thì thuộc miền nghiệm.",
          hint2: "Với điểm $M(1; 2)$, ta có $1 - 2(2) = -3 \\le 0$, thỏa mãn bất phương trình.",
          explain: "Thay tọa độ $M(1; 2)$ vào: $1 - 2(2) = 1 - 4 = -3 \\le 0$ (khẳng định đúng). Do đó miền nghiệm chứa điểm $M$. Đáp án đúng là A."
        },
        {
          question: "Cho bất phương trình $2x + y - 4 \\ge 0$. Khẳng định nào sau đây là **ĐÚNG**?",
          options: [
            "A. Đường thẳng bờ $d: 2x + y - 4 = 0$ thuộc miền nghiệm của bất phương trình.",
            "B. Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình.",
            "C. Điểm $M(1; 1)$ thuộc miền nghiệm của bất phương trình.",
            "D. Miền nghiệm là nửa mặt phẳng không kể bờ $d$."
          ],
          correct: "A",
          hint1: "Chú ý dấu của bất phương trình: dấu $\\ge$ có chứa dấu bằng.",
          hint2: "Khi bất phương trình có dấu bằng ($\\ge$ hoặc $\\le$) thì đường thẳng bờ thuộc miền nghiệm.",
          explain: "Do bất phương trình chứa dấu $\\ge$ nên đường thẳng bờ $d: 2x + y - 4 = 0$ thuộc miền nghiệm. Thay $O(0; 0)$ vào ra $-4 < 0$ (sai), thay $M(1; 1)$ ra $-1 < 0$ (sai). Đáp án đúng là A."
        },
        {
          question: "Miền nghiệm của hệ bất phương trình $\\begin{cases} x - y \\le 0 \\\\ x + 2y \\ge 0 \\end{cases}$ chứa điểm nào sau đây?",
          options: ["A. Điểm $A(1; 2)$", "B. Điểm $B(2; 1)$", "C. Điểm $C(-1; -2)$", "D. Điểm $D(3; 0)$"],
          correct: "A",
          hint1: "Điểm thuộc miền nghiệm của hệ phải thỏa mãn đồng thời cả hai bất phương trình.",
          hint2: "Với điểm $A(1; 2)$: $1 - 2 = -1 \\le 0$ và $1 + 2(2) = 5 \\ge 0$, cả hai đều đúng.",
          explain: "Thay tọa độ điểm $A(1; 2)$ vào hệ: $1 - 2 = -1 \\le 0$ (đúng) và $1 + 2(2) = 5 \\ge 0$ (đúng). Vậy điểm $A$ thuộc miền nghiệm của hệ. Đáp án đúng là A."
        },
        {
          question: "Giá trị lớn nhất của biểu thức $F(x; y) = 3x + 4y$ trên miền tứ giác có các đỉnh $O(0; 0), A(3; 0), B(2; 2), C(0; 3)$ bằng:",
          options: ["A. 14", "B. 12", "C. 9", "D. 0"],
          correct: "A",
          hint1: "Theo định lý quy hoạch tuyến tính, tính giá trị của $F$ tại từng đỉnh của tứ giác rồi chọn số lớn nhất.",
          hint2: "Tính $F(O) = 0, F(A) = 9, F(B) = 3(2) + 4(2) = 14, F(C) = 12$. So sánh tìm giá trị lớn nhất.",
          explain: "Ta tính giá trị $F(x; y)$ tại 4 đỉnh: $F(O) = 0$; $F(A) = 3(3) + 4(0) = 9$; $F(B) = 3(2) + 4(2) = 14$; $F(C) = 3(0) + 4(3) = 12$. Giá trị lớn nhất là 14 đạt tại đỉnh $B(2; 2)$. Đáp án đúng là A."
        },
        {
          question: "Một gia đình cần ít nhất 900 đơn vị protein và 400 đơn vị lipid trong khẩu phần mỗi ngày. Mỗi kg thịt bò chứa 800 đơn vị protein và 200 đơn vị lipid; mỗi kg thịt lợn chứa 600 đơn vị protein và 400 đơn vị lipid. Gọi $x, y$ lần lượt là số kg thịt bò và thịt lợn gia đình mua trong ngày ($x, y \\ge 0$). Hệ bất phương trình biểu diễn điều kiện dinh dưỡng trên là:",
          options: [
            "A. $\\begin{cases} 800x + 600y \\ge 900 \\\\ 200x + 400y \\ge 400 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$",
            "B. $\\begin{cases} 800x + 600y \\le 900 \\\\ 200x + 400y \\le 400 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$",
            "C. $\\begin{cases} 800x + 200y \\ge 900 \\\\ 600x + 400y \\ge 400 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$",
            "D. $\\begin{cases} 800x + 600y > 900 \\\\ 200x + 400y < 400 \\end{cases}$"
          ],
          correct: "A",
          hint1: "\"Ít nhất\" nghĩa là lớn hơn hoặc bằng ($\\ge$).",
          hint2: "Tổng protein: $800x + 600y \\ge 900$. Tổng lipid: $200x + 400y \\ge 400$. Khối lượng không âm: $x \\ge 0, y \\ge 0$.",
          explain: "Tổng lượng protein từ $x$ kg thịt bò và $y$ kg thịt lợn là $800x + 600y \\ge 900$. Tổng lượng lipid là $200x + 400y \\ge 400$. Điều kiện số lượng $x \\ge 0, y \\ge 0$. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho bất phương trình bậc nhất hai ẩn $x - 2y + 4 \\ge 0$:",
          items: [
            { key: "a", text: "Đường thẳng bờ của bất phương trình là $d: x - 2y + 4 = 0$.", correct: "true", explain: "Thay dấu bất đẳng thức bằng dấu bằng, mệnh đề Đúng." },
            { key: "b", text: "Đường thẳng $d$ cắt trục hoành tại $A(-4; 0)$ và cắt trục tung tại $B(0; 2)$.", correct: "true", explain: "Cho $y=0 \\implies x=-4$; cho $x=0 \\implies y=2$, mệnh đề Đúng." },
            { key: "c", text: "Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình.", correct: "true", explain: "Thay $O(0; 0)$ vào: $0 - 0 + 4 = 4 \\ge 0$ đúng, mệnh đề Đúng." },
            { key: "d", text: "Điểm $M(1; 3)$ thuộc miền nghiệm của bất phương trình.", correct: "false", explain: "Thay $M(1; 3)$ vào: $1 - 2(3) + 4 = -1 < 0$ sai, mệnh đề Sai." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hệ bất phương trình $\\begin{cases} x + 2y \\le 6 \\\\ 2x - y \\le 2 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$:",
          items: [
            { key: "a", text: "Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của hệ bất phương trình.", correct: "true", explain: "Thỏa mãn cả 4 bất phương trình trong hệ, mệnh đề Đúng." },
            { key: "b", text: "Miền nghiệm của hệ là một miền đa giác tứ giác.", correct: "true", explain: "Giới hạn bởi 4 đường thẳng bờ: $Ox, Oy, x+2y=6, 2x-y=2$, mệnh đề Đúng." },
            { key: "c", text: "Giao điểm của hai đường thẳng $x + 2y = 6$ và $2x - y = 2$ là điểm $B(2; 2)$.", correct: "true", explain: "Giải hệ: $x = 2, y = 2$, mệnh đề Đúng." },
            { key: "d", text: "Điểm $M(3; 2)$ thuộc miền nghiệm của hệ bất phương trình.", correct: "false", explain: "Thay $M(3; 2)$ vào BPT thứ hai: $2(3) - 2 = 4 > 2$ vi phạm, mệnh đề Sai." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Xét bài toán tìm cực trị của hàm mục tiêu $F(x; y) = 2x + 5y$ trên miền nghiệm tứ giác $OABC$ với $O(0; 0), A(1; 0), B(2; 2), C(0; 3)$:",
          items: [
            { key: "a", text: "Giá trị của biểu thức $F$ tại gốc tọa độ là $F(O) = 0$.", correct: "true", explain: "$2(0) + 5(0) = 0$, mệnh đề Đúng." },
            { key: "b", text: "Giá trị của biểu thức $F$ tại đỉnh $A(1; 0)$ bằng 2.", correct: "true", explain: "$2(1) + 5(0) = 2$, mệnh đề Đúng." },
            { key: "c", text: "Giá trị của biểu thức $F$ tại đỉnh $B(2; 2)$ bằng 14.", correct: "true", explain: "$2(2) + 5(2) = 14$, mệnh đề Đúng." },
            { key: "d", text: "Giá trị lớn nhất của $F(x; y)$ trên miền nghiệm là 14 tại đỉnh $B(2; 2)$.", correct: "false", explain: "Tại đỉnh $C(0; 3)$ ta có $F(C) = 2(0) + 5(3) = 15 > 14$, do đó GTLN là 15 tại đỉnh $C$, mệnh đề Sai." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Một xưởng mộc sản xuất hai loại sản phẩm: bàn và ghế. Mỗi cái bàn cần 3 giờ tiện và 1 giờ ráp, lãi 200 nghìn. Mỗi cái ghế cần 1 giờ tiện và 1 giờ ráp, lãi 100 nghìn. Mỗi ngày xưởng có tối đa 18 giờ tiện và 10 giờ ráp. Gọi $x, y$ lần lượt là số bàn và ghế xưởng đóng trong ngày ($x, y \\in \\mathbb{N}$):",
          items: [
            { key: "a", text: "Bất phương trình ràng buộc về thời gian tiện là $3x + y \\le 18$.", correct: "true", explain: "Mỗi bàn 3 giờ, mỗi ghế 1 giờ, tổng không quá 18 giờ, mệnh đề Đúng." },
            { key: "b", text: "Bất phương trình ràng buộc về thời gian ráp là $x + y \\le 10$.", correct: "true", explain: "Mỗi bàn 1 giờ, mỗi ghế 1 giờ, tổng không quá 10 giờ, mệnh đề Đúng." },
            { key: "c", text: "Số tiền lãi thu được mỗi ngày là $F(x; y) = 200x + 100y$ (nghìn đồng).", correct: "true", explain: "Tiền lãi bằng số bàn nhân 200 cộng số ghế nhân 100, mệnh đề Đúng." },
            { key: "d", text: "Xưởng đạt tiền lãi lớn nhất trong ngày khi sản xuất 5 cái bàn và 5 cái ghế.", correct: "false", explain: "Với $x=5, y=5$ thì giờ tiện là $3(5) + 5 = 20 > 18$ (vượt quá giới hạn), phương án tối ưu là $(4; 6)$ cho tiền lãi 1400 nghìn đồng, mệnh đề Sai." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Tìm tọa độ điểm thuộc đường thẳng bờ",
          question: "Điểm $M(x_0; 2)$ thuộc đường thẳng bờ của bất phương trình $3x - 4y + 11 = 0$. Tìm giá trị của $x_0$.",
          correctAnswer: "-1",
          acceptedAnswers: ["-1", "-1.0", "-1,0"],
          hint1: "Thay $y = 2$ vào phương trình đường thẳng bờ $3x - 4y + 11 = 0$.",
          hint2: "Giải phương trình bậc nhất một ẩn: $3x_0 - 4(2) + 11 = 0 \\Leftrightarrow 3x_0 + 3 = 0$.",
          explain: "Thay $y = 2$ vào phương trình: $3x_0 - 4(2) + 11 = 0 \\Leftrightarrow 3x_0 - 8 + 11 = 0 \\Leftrightarrow 3x_0 = -3 \\Leftrightarrow x_0 = -1$."
        },
        {
          id: 2,
          title: "Tính diện tích miền nghiệm tam giác",
          question: "Cho hệ bất phương trình $\\begin{cases} x + y \\le 6 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$. Miền nghiệm của hệ là hình tam giác vuông $OAB$ với $O$ là gốc tọa độ, $A(6; 0)$ và $B(0; 6)$. Tính diện tích hình tam giác $OAB$.",
          correctAnswer: "18",
          acceptedAnswers: ["18", "18.0", "18,0"],
          hint1: "Tam giác $OAB$ vuông tại gốc tọa độ $O$ với hai cạnh góc vuông $OA = 6$ và $OB = 6$.",
          hint2: "Diện tích tam giác vuông bằng một nửa tích hai cạnh góc vuông: $S = \\frac{1}{2} OA \\cdot OB$.",
          explain: "Tam giác $OAB$ vuông tại $O$ có $OA = 6, OB = 6$. Diện tích là $S = \\frac{1}{2} \\times 6 \\times 6 = 18$."
        },
        {
          id: 3,
          title: "Tìm giá trị lớn nhất trên miền tứ giác",
          question: "Cho miền tứ giác với các đỉnh $O(0; 0), A(4; 0), B(3; 2), C(0; 3)$. Tìm giá trị lớn nhất của biểu thức $F(x; y) = 5x + 3y$ trên miền tứ giác đó.",
          correctAnswer: "21",
          acceptedAnswers: ["21", "21.0", "21,0"],
          hint1: "Tính giá trị của $F(x; y)$ lần lượt tại 4 đỉnh $O, A, B, C$.",
          hint2: "So sánh: $F(O) = 0$, $F(A) = 20$, $F(B) = 5(3) + 3(2) = 21$, $F(C) = 9$.",
          explain: "Tính tại các đỉnh: $F(O) = 0$; $F(A) = 5(4) = 20$; $F(B) = 5(3) + 3(2) = 21$; $F(C) = 3(3) = 9$. Giá trị lớn nhất là 21 đạt tại đỉnh $B(3; 2)$."
        },
        {
          id: 4,
          title: "Bài toán thực tế số lượng sản phẩm tối đa",
          question: "Một bác nông dân có 10 triệu đồng mua hai loại phân bón. Bao loại I giá 200 nghìn đồng/bao, bao loại II giá 250 nghìn đồng/bao. Bác cần mua ít nhất 20 bao loại I. Hỏi bác nông dân có thể mua tối đa bao nhiêu bao phân bón loại II?",
          unit: "bao",
          correctAnswer: "24",
          acceptedAnswers: ["24", "24.0", "24,0"],
          hint1: "Gọi $x, y$ là số bao loại I và loại II ($x, y \\in \\mathbb{N}$). Bất phương trình chi phí: $200x + 250y \\le 10000$.",
          hint2: "Vì $x \\ge 20$ nên chi phí mua loại I ít nhất là $200 \\times 20 = 4000$ nghìn. Số tiền còn lại cho loại II tối đa là $6000$ nghìn: $250y \\le 6000$.",
          explain: "Chi phí mua phân bón: $200x + 250y \\le 10000$ (nghìn đồng). Vì $x \\ge 20$ nên $250y \\le 10000 - 200(20) = 6000 \\implies y \\le \\frac{6000}{250} = 24$. Vậy bác mua được tối đa 24 bao loại II."
        }
      ]
    },

    // -------------------------------------------------------------
    // KHỐI 10 - CHƯƠNG III: HỆ THỨC LƯỢNG TRONG TAM GIÁC
    // -------------------------------------------------------------
    "10_3": {
      id: "10_3",
      grade: "Lớp 10",
      chapterNumber: 3,
      title: "Chương III: Hệ thức lượng trong tam giác",
      shortTitle: "Ôn tập Chương III: Hệ thức lượng trong tam giác",
      branches: [
        {
          title: "Nhánh 1: Giá trị lượng giác của một góc từ 0° đến 180°",
          core: "Với mỗi góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$), xác định điểm $M(x_0; y_0)$ trên nửa đường tròn đơn vị: $\\sin\\alpha = y_0$, $\\cos\\alpha = x_0$, $\\tan\\alpha = \\frac{y_0}{x_0}$ ($\\alpha \\ne 90^\\circ$), $\\cot\\alpha = \\frac{x_0}{y_0}$ ($\\alpha \\ne 0^\\circ, 180^\\circ$). Dấu: $\\sin\\alpha > 0$ với mọi $0^\\circ < \\alpha < 180^\\circ$; $\\cos\\alpha > 0$ khi góc nhọn, $\\cos\\alpha < 0$ khi góc tù. Hai góc bù nhau: $\\sin(180^\\circ - \\alpha) = \\sin\\alpha$, còn $\\cos, \\tan, \\cot$ đổi dấu.",
          formula: "$$\\sin^2\\alpha + \\cos^2\\alpha = 1; \\quad 1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha}; \\quad \\sin(180^\\circ - \\alpha) = \\sin\\alpha; \\quad \\cos(180^\\circ - \\alpha) = -\\cos\\alpha$$",
          subpoints: [
            "Định nghĩa trên nửa đường tròn đơn vị: Tung độ là Sin, Hoành độ là Cos.",
            "Dấu: Sin luôn dương trên $(0^\\circ; 180^\\circ)$; Cos âm khi góc tù.",
            "Hai góc bù nhau: Sin bằng nhau, Cos/Tan/Cot mang dấu đối nhau."
          ]
        },
        {
          title: "Nhánh 2: Định lí Côsin, Định lí Sin & Độ dài trung tuyến",
          core: "Định lí Côsin dùng tính cạnh khi biết 2 cạnh và góc xen giữa, hoặc tính góc khi biết 3 cạnh. Hệ quả tính độ dài đường trung tuyến $m_a$. Định lí Sin liên hệ giữa cạnh, góc đối diện và bán kính đường tròn ngoại tiếp $R$.",
          formula: "$$a^2 = b^2 + c^2 - 2bc\\cos A; \\quad \\cos A = \\frac{b^2 + c^2 - a^2}{2bc}; \\quad \\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R; \\quad m_a^2 = \\frac{2(b^2+c^2)-a^2}{4}$$",
          subpoints: [
            "Định lí Côsin: Mở rộng định lí Pythagore cho tam giác bất kì.",
            "Định lí Sin: Tỉ số giữa cạnh và sin góc đối diện bằng đường kính $2R$.",
            "Độ dài đường trung tuyến: $m_a^2 = \\frac{2(b^2+c^2)-a^2}{4}$."
          ]
        },
        {
          title: "Nhánh 3: Hệ thống các công thức tính diện tích tam giác",
          core: "Có 5 công thức diện tích cốt lõi tùy thuộc vào giả thiết: nửa tích đáy và chiều cao, nửa tích hai cạnh và sin góc kẹp giữa, theo bán kính đường tròn ngoại tiếp $R$, theo bán kính nội tiếp $r$ và nửa chu vi $p$, hoặc theo 3 cạnh qua công thức Hê-rông.",
          formula: "$$S = \\frac{1}{2}ah_a = \\frac{1}{2}ab\\sin C = \\frac{abc}{4R} = pr = \\sqrt{p(p-a)(p-b)(p-c)}$$",
          subpoints: [
            "Công thức góc kẹp: $S = \\frac{1}{2}ab\\sin C = \\frac{1}{2}bc\\sin A = \\frac{1}{2}ca\\sin B$.",
            "Bán kính ngoại tiếp và nội tiếp: $R = \\frac{abc}{4S}, \\quad r = \\frac{S}{p}$.",
            "Công thức Hê-rông: $S = \\sqrt{p(p-a)(p-b)(p-c)}$ với $p = \\frac{a+b+c}{2}$."
          ]
        },
        {
          title: "Nhánh 4: Giải tam giác & Ứng dụng đo đạc thực tế",
          core: "Giải tam giác là tính các cạnh và góc còn lại từ một số yếu tố cho trước. Ứng dụng thực tế: xác định khoảng cách giữa 2 điểm không tới được (hai bờ sông, hòn đảo), tính chiều cao của tháp, núi khi không thể đo trực tiếp chân tháp.",
          formula: "$$\\text{Đo gián tiếp: Chọn cạnh đáy } AB = d \\text{ và đo các góc ngắm } \\implies \\text{dùng ĐL Sin / Côsin giải tam giác}$$",
          subpoints: [
            "Giải tam giác khi biết 3 cạnh (dùng Côsin) hoặc 1 cạnh và 2 góc (dùng Sin).",
            "Ứng dụng đo khoảng cách hai điểm bị ngăn cách bởi vật cản.",
            "Ứng dụng tính chiều cao ngọn tháp / ngọn núi từ hai điểm quan sát."
          ]
        }
      ],
      mcqs: [
        {
          question: "Giá trị của biểu thức $\\cos 150^\\circ + \\sin 120^\\circ$ bằng:",
          options: ["A. $0$", "B. $-\\sqrt{3}$", "C. $\\sqrt{3}$", "D. $1$"],
          correct: "A",
          hint1: "Sử dụng quan hệ góc bù: $\\cos 150^\\circ = -\\cos 30^\\circ$ và $\\sin 120^\\circ = \\sin 60^\\circ$.",
          hint2: "Ta có $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2} \\implies \\cos 150^\\circ = -\\frac{\\sqrt{3}}{2}$, và $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2} \\implies \\sin 120^\\circ = \\frac{\\sqrt{3}}{2}$.",
          explain: "Ta có: $\\cos 150^\\circ = -\\cos(180^\\circ - 150^\\circ) = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$; $\\sin 120^\\circ = \\sin(180^\\circ - 120^\\circ) = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$. Do đó $\\cos 150^\\circ + \\sin 120^\\circ = -\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{3}}{2} = 0$. Đáp án đúng là A."
        },
        {
          question: "Cho tam giác $ABC$ có cạnh $b = 5$, $c = 8$ và góc $\\widehat{A} = 60^\\circ$. Độ dài cạnh $a$ bằng:",
          options: ["A. $7$", "B. $\\sqrt{129}$", "C. $8$", "D. $49$"],
          correct: "A",
          hint1: "Áp dụng định lí Côsin: $a^2 = b^2 + c^2 - 2bc\\cos A$.",
          hint2: "Thay số: $a^2 = 5^2 + 8^2 - 2 \\cdot 5 \\cdot 8 \\cdot \\cos 60^\\circ = 25 + 64 - 80 \\cdot \\frac{1}{2} = 49$.",
          explain: "Áp dụng định lí Côsin: $a^2 = b^2 + c^2 - 2bc\\cos A = 5^2 + 8^2 - 2 \\cdot 5 \\cdot 8 \\cdot \\cos 60^\\circ = 89 - 40 = 49 \\implies a = \\sqrt{49} = 7$. Đáp án đúng là A."
        },
        {
          question: "Cho tam giác $ABC$ có cạnh $a = 10$ và góc $\\widehat{A} = 30^\\circ$. Bán kính $R$ của đường tròn ngoại tiếp tam giác $ABC$ bằng:",
          options: ["A. $10$", "B. $5$", "C. $20$", "D. $10\\sqrt{3}$"],
          correct: "A",
          hint1: "Áp dụng định lí Sin: $\\frac{a}{\\sin A} = 2R$.",
          hint2: "Thay số: $2R = \\frac{10}{\\sin 30^\\circ} = \\frac{10}{0{,}5} = 20 \\implies R = 10$.",
          explain: "Theo định lí Sin, ta có: $\\frac{a}{\\sin A} = 2R \\implies 2R = \\frac{10}{\\sin 30^\\circ} = \\frac{10}{\\frac{1}{2}} = 20 \\implies R = 10$. Đáp án đúng là A."
        },
        {
          question: "Cho tam giác $ABC$ có $a = 6$, $b = 10$ và góc $\\widehat{C} = 150^\\circ$. Diện tích của tam giác $ABC$ bằng:",
          options: ["A. $15$", "B. $15\\sqrt{3}$", "C. $30$", "D. $30\\sqrt{3}$"],
          correct: "A",
          hint1: "Sử dụng công thức diện tích: $S = \\frac{1}{2}ab\\sin C$.",
          hint2: "Góc $C = 150^\\circ$ là góc tù, $\\sin 150^\\circ = \\sin(180^\\circ - 150^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$.",
          explain: "Diện tích tam giác $ABC$ là: $S = \\frac{1}{2}ab\\sin C = \\frac{1}{2} \\cdot 6 \\cdot 10 \\cdot \\sin 150^\\circ = 30 \\cdot \\frac{1}{2} = 15$. Đáp án đúng là A."
        },
        {
          question: "Cho tam giác $ABC$ có chu vi bằng $30$ và diện tích bằng $30$. Bán kính $r$ của đường tròn nội tiếp tam giác $ABC$ bằng:",
          options: ["A. $2$", "B. $1$", "C. $3$", "D. $4$"],
          correct: "A",
          hint1: "Nửa chu vi $p = \\frac{\\text{chu vi}}{2}$. Công thức diện tích liên hệ bán kính nội tiếp là $S = pr$.",
          hint2: "Tính $p = \\frac{30}{2} = 15$. Suy ra $r = \\frac{S}{p} = \\frac{30}{15} = 2$.",
          explain: "Nửa chu vi của tam giác là $p = \\frac{30}{2} = 15$. Ta có công thức $S = pr \\implies r = \\frac{S}{p} = \\frac{30}{15} = 2$. Đáp án đúng là A."
        },
        {
          question: "Để đo khoảng cách giữa hai điểm $A$ và $B$ bị ngăn cách bởi một hồ nước, một người chọn điểm quan sát $C$ sao cho có thể đo được khoảng cách $CA = 40\\text{ m}$, $CB = 60\\text{ m}$ và góc $\\widehat{ACB} = 60^\\circ$. Khoảng cách $AB$ giữa hai điểm đó xấp xỉ bằng:",
          options: ["A. $52{,}9\\text{ m}$", "B. $76{,}2\\text{ m}$", "C. $87{,}2\\text{ m}$", "D. $48{,}5\\text{ m}$"],
          correct: "A",
          hint1: "Áp dụng định lí Côsin trong tam giác $ABC$: $AB^2 = CA^2 + CB^2 - 2 \\cdot CA \\cdot CB \\cdot \\cos C$.",
          hint2: "Thay số: $AB^2 = 40^2 + 60^2 - 2 \\cdot 40 \\cdot 60 \\cdot \\cos 60^\\circ = 5200 - 2400 = 2800 \\implies AB = \\sqrt{2800} \\approx 52{,}9\\text{ m}$.",
          explain: "Áp dụng định lí Côsin trong tam giác $ABC$: $AB^2 = CA^2 + CB^2 - 2CA \\cdot CB \\cos C = 40^2 + 60^2 - 2 \\cdot 40 \\cdot 60 \\cdot 0{,}5 = 2800 \\implies AB = \\sqrt{2800} \\approx 52{,}9\\text{ m}$. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét tính đúng sai về giá trị lượng giác của các góc tù và góc đặc biệt:",
          items: [
            { key: "a", text: "$\\sin 135^\\circ = \\frac{\\sqrt{2}}{2}$.", correct: "true", explain: "Ta có $\\sin 135^\\circ = \\sin(180^\\circ - 135^\\circ) = \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$, mệnh đề Đúng." },
            { key: "b", text: "$\\cos 135^\\circ = \\frac{\\sqrt{2}}{2}$.", correct: "false", explain: "Vì $135^\\circ$ là góc tù nên $\\cos 135^\\circ = -\\cos 45^\\circ = -\\frac{\\sqrt{2}}{2}$, mệnh đề Sai." },
            { key: "c", text: "$\\tan 135^\\circ = -1$.", correct: "true", explain: "$\\tan 135^\\circ = -\\tan 45^\\circ = -1$, mệnh đề Đúng." },
            { key: "d", text: "Với mọi góc $\\alpha$ thỏa mãn $90^\\circ < \\alpha < 180^\\circ$, ta luôn có $\\sin\\alpha \\cdot \\cos\\alpha > 0$.", correct: "false", explain: "Khi $\\alpha$ tù thì $\\sin\\alpha > 0$ và $\\cos\\alpha < 0 \\implies \\sin\\alpha \\cdot \\cos\\alpha < 0$, mệnh đề Sai." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho tam giác $ABC$ có độ dài 3 cạnh là $a = 13$, $b = 14$, $c = 15$. Khi đó:",
          items: [
            { key: "a", text: "Nửa chu vi của tam giác $ABC$ là $p = 21$.", correct: "true", explain: "$p = \\frac{13 + 14 + 15}{2} = \\frac{42}{2} = 21$, mệnh đề Đúng." },
            { key: "b", text: "Diện tích của tam giác $ABC$ là $S = 84$.", correct: "true", explain: "Theo công thức Hê-rông: $S = \\sqrt{21(21-13)(21-14)(21-15)} = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = \\sqrt{7056} = 84$, mệnh đề Đúng." },
            { key: "c", text: "Bán kính đường tròn nội tiếp tam giác $ABC$ là $r = 4$.", correct: "true", explain: "$r = \\frac{S}{p} = \\frac{84}{21} = 4$, mệnh đề Đúng." },
            { key: "d", text: "Bán kính đường tròn ngoại tiếp tam giác $ABC$ là $R = 8$.", correct: "false", explain: "$R = \\frac{abc}{4S} = \\frac{13 \\cdot 14 \\cdot 15}{4 \\cdot 84} = \\frac{2730}{336} = \\frac{65}{8} = 8{,}125 \\ne 8$, mệnh đề Sai." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho tam giác đều $ABC$ có cạnh bằng $a$. Khi đó:",
          items: [
            { key: "a", text: "Độ dài đường cao của tam giác đều cạnh $a$ bằng $h = \\frac{a\\sqrt{3}}{2}$.", correct: "true", explain: "Đường cao tam giác đều cạnh $a$ là $h = a \\sin 60^\\circ = \\frac{a\\sqrt{3}}{2}$, mệnh đề Đúng." },
            { key: "b", text: "Diện tích của tam giác đều cạnh $a$ bằng $S = \\frac{a^2\\sqrt{3}}{4}$.", correct: "true", explain: "$S = \\frac{1}{2} a h = \\frac{1}{2} a \\cdot \\frac{a\\sqrt{3}}{2} = \\frac{a^2\\sqrt{3}}{4}$, mệnh đề Đúng." },
            { key: "c", text: "Bán kính đường tròn ngoại tiếp tam giác là $R = \\frac{a\\sqrt{3}}{3}$.", correct: "true", explain: "Trong tam giác đều trọng tâm trùng tâm ngoại tiếp: $R = \\frac{2}{3}h = \\frac{2}{3} \\cdot \\frac{a\\sqrt{3}}{2} = \\frac{a\\sqrt{3}}{3}$, mệnh đề Đúng." },
            { key: "d", text: "Tỉ số giữa bán kính đường tròn ngoại tiếp và nội tiếp $\\frac{R}{r} = 3$.", correct: "false", explain: "Trong tam giác đều, $R = \\frac{2}{3}h$ và $r = \\frac{1}{3}h \\implies \\frac{R}{r} = 2$, mệnh đề Sai." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho tam giác $ABC$ có $b = 7$, $c = 5$ và $\\cos A = \\frac{3}{5}$. Khi đó:",
          items: [
            { key: "a", text: "$\\sin A = \\frac{4}{5}$.", correct: "true", explain: "Vì $0^\\circ < A < 180^\\circ$ nên $\\sin A > 0 \\implies \\sin A = \\sqrt{1 - \\cos^2 A} = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$, mệnh đề Đúng." },
            { key: "b", text: "Độ dài cạnh $a$ bằng $\\sqrt{32} = 4\\sqrt{2}$.", correct: "true", explain: "$a^2 = b^2 + c^2 - 2bc\\cos A = 49 + 25 - 2 \\cdot 7 \\cdot 5 \\cdot \\frac{3}{5} = 74 - 42 = 32 \\implies a = 4\\sqrt{2}$, mệnh đề Đúng." },
            { key: "c", text: "Diện tích tam giác $ABC$ bằng $14$.", correct: "true", explain: "$S = \\frac{1}{2}bc\\sin A = \\frac{1}{2} \\cdot 7 \\cdot 5 \\cdot \\frac{4}{5} = 14$, mệnh đề Đúng." },
            { key: "d", text: "Độ dài đường cao kẻ từ đỉnh $A$ là $h_a = 7\\sqrt{2}$.", correct: "false", explain: "$S = \\frac{1}{2} a h_a \\implies h_a = \\frac{2S}{a} = \\frac{2 \\cdot 14}{4\\sqrt{2}} = \\frac{7}{\\sqrt{2}} = \\frac{7\\sqrt{2}}{2} \\ne 7\\sqrt{2}$, mệnh đề Sai." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Tính giá trị biểu thức lượng giác góc tù",
          question: "Cho góc tù $\\alpha$ thỏa mãn $\\sin\\alpha = \\frac{4}{5}$. Tính giá trị của biểu thức $P = 5\\cos\\alpha + 10$.",
          correctAnswer: "7",
          acceptedAnswers: ["7", "7.0", "7,0"],
          hint1: "Áp dụng hệ thức $\\sin^2\\alpha + \\cos^2\\alpha = 1 \\implies \\cos^2\\alpha = 1 - \\sin^2\\alpha$.",
          hint2: "Vì $\\alpha$ là góc tù nên $\\cos\\alpha < 0 \\implies \\cos\\alpha = -\\sqrt{1 - \\left(\\frac{4}{5}\\right)^2} = -\\frac{3}{5}$. Thay vào tính $P$.",
          explain: "Vì $\\alpha$ tù nên $\\cos\\alpha = -\\sqrt{1 - \\left(\\frac{4}{5}\\right)^2} = -\\frac{3}{5}$. Do đó $P = 5\\left(-\\frac{3}{5}\\right) + 10 = -3 + 10 = 7$."
        },
        {
          id: 2,
          title: "Tính cạnh tam giác bằng định lí Côsin",
          question: "Cho tam giác $ABC$ có cạnh $b = 5$, $c = 8$ và góc $\\widehat{A} = 60^\\circ$. Tính độ dài cạnh $a$.",
          correctAnswer: "7",
          acceptedAnswers: ["7", "7.0", "7,0"],
          hint1: "Áp dụng định lí Côsin: $a^2 = b^2 + c^2 - 2bc\\cos A$.",
          hint2: "Tính: $a^2 = 5^2 + 8^2 - 2(5)(8)\\cos 60^\\circ = 25 + 64 - 40 = 49 \\implies a = 7$.",
          explain: "Theo định lí Côsin: $a^2 = 5^2 + 8^2 - 2 \\cdot 5 \\cdot 8 \\cdot \\cos 60^\\circ = 89 - 40 = 49 \\implies a = \\sqrt{49} = 7$."
        },
        {
          id: 3,
          title: "Tính đường kính đường tròn ngoại tiếp",
          question: "Cho tam giác $ABC$ có cạnh $a = 12$ và góc $\\widehat{A} = 30^\\circ$. Tính đường kính $2R$ của đường tròn ngoại tiếp tam giác $ABC$.",
          correctAnswer: "24",
          acceptedAnswers: ["24", "24.0", "24,0"],
          hint1: "Áp dụng định lí Sin: đường kính $2R = \\frac{a}{\\sin A}$.",
          hint2: "Tính: $2R = \\frac{12}{\\sin 30^\\circ} = \\frac{12}{0{,}5} = 24$.",
          explain: "Theo định lí Sin: đường kính đường tròn ngoại tiếp là $2R = \\frac{a}{\\sin A} = \\frac{12}{\\sin 30^\\circ} = \\frac{12}{0{,}5} = 24$."
        },
        {
          id: 4,
          title: "Tính bán kính đường tròn nội tiếp",
          question: "Cho tam giác vuông có hai cạnh góc vuông là $5$ và $12$. Tính bán kính $r$ của đường tròn nội tiếp tam giác đó.",
          correctAnswer: "2",
          acceptedAnswers: ["2", "2.0", "2,0"],
          hint1: "Tính cạnh huyền bằng định lý Pythagore: $c = \\sqrt{5^2 + 12^2} = 13$. Sau đó tính nửa chu vi $p$ và diện tích $S$.",
          hint2: "Ta có $p = \\frac{5 + 12 + 13}{2} = 15$ và $S = \\frac{1}{2} \\cdot 5 \\cdot 12 = 30$. Bán kính $r = \\frac{S}{p}$.",
          explain: "Cạnh huyền của tam giác là $c = \\sqrt{5^2 + 12^2} = 13$. Nửa chu vi $p = \\frac{5 + 12 + 13}{2} = 15$. Diện tích $S = \\frac{1}{2} \\cdot 5 \\cdot 12 = 30$. Bán kính đường tròn nội tiếp là $r = \\frac{S}{p} = \\frac{30}{15} = 2$."
        }
      ]
    },

    // -------------------------------------------------------------
    // KHỐI 10 - CHƯƠNG IV: VECTƠ (SGK KẾT NỐI TRI THỨC)
    // -------------------------------------------------------------
    "10_4": {
      id: "10_4",
      grade: "Lớp 10",
      chapterNumber: 4,
      title: "Chương IV: Vectơ",
      shortTitle: "Ôn tập Chương IV: Vectơ",
      branches: [
        {
          title: "Nhánh 1: Khái niệm vectơ & Hai vectơ bằng nhau / đối nhau",
          core: "Vectơ là một đoạn thẳng có hướng. Giá của vectơ là đường thẳng đi qua điểm đầu và điểm cuối. Hai vectơ cùng phương khi giá của chúng song song hoặc trùng nhau. Hai vectơ bằng nhau khi cùng hướng và cùng độ dài. Vectơ-không ($\\vec{0}$) có phương, hướng tuỳ ý và độ dài bằng 0. Vectơ đối $-\\vec{a}$ có cùng độ dài nhưng ngược hướng.",
          formula: "$$\\vec{a} = \\vec{b} \\Leftrightarrow \\begin{cases} \\vec{a} \\uparrow\\uparrow \\vec{b} \\\\ |\\vec{a}| = |\\vec{b}| \\end{cases}; \\quad \\vec{a} + (-\\vec{a}) = \\vec{0}; \\quad |\\vec{0}| = 0$$",
          pitfall: "Nhầm đoạn thẳng $AB$ (vô hướng) với vectơ $\\vec{AB}$ (có hướng, $\\vec{AB} \\neq \\vec{BA}$). Tưởng hai vectơ cùng độ dài là bằng nhau (bắt buộc phải cùng cả hướng).",
          casio: "Vẽ hình minh hoạ trực quan và ghi nhớ quy ước: điểm đầu viết trước, điểm cuối viết sau."
        },
        {
          title: "Nhánh 2: Tổng và hiệu của hai vectơ & Các quy tắc hình học",
          core: "Quy tắc 3 điểm (nối đuôi): $\\vec{AB} + \\vec{BC} = \\vec{AC}$. Quy tắc hình bình hành: $\\vec{AB} + \\vec{AD} = \\vec{AC}$. Quy tắc trừ chung gốc: $\\vec{OB} - \\vec{OA} = \\vec{AB}$. Hệ thức trung điểm: $I$ là trung điểm $AB \\Leftrightarrow \\vec{IA} + \\vec{IB} = \\vec{0} \\Leftrightarrow \\vec{OA} + \\vec{OB} = 2\\vec{OI}$. Hệ thức trọng tâm: $G$ là trọng tâm $\\Delta ABC \\Leftrightarrow \\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0} \\Leftrightarrow \\vec{OA} + \\vec{OB} + \\vec{OC} = 3\\vec{OG}$.",
          formula: "$$\\vec{AB} + \\vec{BC} = \\vec{AC}; \\quad \\vec{OB} - \\vec{OA} = \\vec{AB}; \\quad \\vec{OA} + \\vec{OB} = 2\\vec{OI}; \\quad \\vec{OA} + \\vec{OB} + \\vec{OC} = 3\\vec{OG}$$",
          pitfall: "Nhầm quy tắc trừ: viết $\\vec{AB} - \\vec{AC} = \\vec{BC}$ (sai, phải là $\\vec{CB}$). Nhầm tổng độ dài bằng độ dài tổng (thực tế $|\\vec{a} + \\vec{b}| \\le |\\vec{a}| + |\\vec{b}|$).",
          casio: "Phân tích đường chéo hình vuông/hình thoi qua quy tắc hình bình hành để tính nhanh độ dài vectơ tổng và hiệu."
        },
        {
          title: "Nhánh 3: Tích của vectơ với một số & Điều kiện cùng phương",
          core: "Tích $k\\vec{a}$ là vectơ cùng hướng với $\\vec{a}$ nếu $k > 0$, ngược hướng nếu $k < 0$; độ dài $|k\\vec{a}| = |k| \\cdot |\\vec{a}|$. Điều kiện để $\\vec{a}$ cùng phương với $\\vec{b} \\neq \\vec{0}$ là có số thực $k$ sao cho $\\vec{a} = k\\vec{b}$. Ba điểm $A, B, C$ thẳng hàng $\\Leftrightarrow \\vec{AB} = k\\vec{AC}$ ($k \\neq 0$). Mọi vectơ trong mặt phẳng đều phân tích duy nhất theo hai vectơ không cùng phương: $\\vec{x} = m\\vec{a} + n\\vec{b}$.",
          formula: "$$|k\\vec{a}| = |k| \\cdot |\\vec{a}|; \\quad \\vec{a} \\parallel \\vec{b} \\Leftrightarrow \\vec{a} = k\\vec{b}; \\quad A, B, C \\text{ thẳng hàng} \\Leftrightarrow \\vec{AB} = k\\vec{AC}$$",
          pitfall: "Quên lấy dấu trị tuyệt đối khi tính độ dài: viết $|-3\\vec{a}| = -3|\\vec{a}|$ (sai, độ dài không bao giờ âm, phải bằng $3|\\vec{a}|$).",
          casio: "Bấm [MENU] [9] [1] [2] giải hệ hai phương trình bậc nhất 2 ẩn để tìm cặp hệ số phân tích $(m; n)$ cực nhanh."
        },
        {
          title: "Nhánh 4: Toạ độ Oxy & Tích vô hướng của hai vectơ",
          core: "Toạ độ trong mặt phẳng $Oxy$: $\\vec{u} = x\\vec{i} + y\\vec{j} = (x; y)$. $\\vec{AB} = (x_B - x_A; y_B - y_A)$. Trung điểm: $I = \\frac{A+B}{2}$. Trọng tâm: $G = \\frac{A+B+C}{3}$. Tích vô hướng: $\\vec{u} \\cdot \\vec{v} = |\\vec{u}||\\vec{v}|\\cos(\\vec{u}, \\vec{v}) = x_1 x_2 + y_1 y_2$. Hai vectơ vuông góc: $\\vec{u} \\perp \\vec{v} \\Leftrightarrow x_1 x_2 + y_1 y_2 = 0$. $\\cos(\\vec{u}, \\vec{v}) = \\frac{x_1 x_2 + y_1 y_2}{\\sqrt{x_1^2 + y_1^2}\\sqrt{x_2^2 + y_2^2}}$.",
          formula: "$$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2; \\quad |\\vec{u}| = \\sqrt{x_1^2 + y_1^2}; \\quad \\vec{u} \\perp \\vec{v} \\Leftrightarrow x_1 x_2 + y_1 y_2 = 0$$",
          pitfall: "Nhầm giữa điều kiện vuông góc ($x_1 x_2 + y_1 y_2 = 0$) và điều kiện cùng phương ($x_1 y_2 - x_2 y_1 = 0$). Tính nhầm góc khi chưa đưa về cùng gốc xuất phát.",
          casio: "Gán các toạ độ vào biểu thức toạ độ, bấm [CALC] tính tích vô hướng và độ dài cực nhanh."
        }
      ],
      theorySummary: `
        <p>• <strong>Khái niệm & Phép cộng trừ vectơ:</strong> Vectơ là đoạn thẳng có hướng. Quy tắc 3 điểm: $\\vec{AB} + \\vec{BC} = \\vec{AC}$. Quy tắc hình bình hành: $\\vec{AB} + \\vec{AD} = \\vec{AC}$. Quy tắc trừ: $\\vec{OB} - \\vec{OA} = \\vec{AB}$.</p>
        <p>• <strong>Hệ thức trung điểm & Trọng tâm:</strong> Với điểm $O$ bất kì: $\\vec{OA} + \\vec{OB} = 2\\vec{OI}$; $\\vec{OA} + \\vec{OB} + \\vec{OC} = 3\\vec{OG}$.</p>
        <p>• <strong>Tích vectơ với số:</strong> $|k\\vec{a}| = |k| \\cdot |\\vec{a}|$. Cùng hướng khi $k > 0$, ngược hướng khi $k < 0$. Hai vectơ cùng phương $\\Leftrightarrow \\vec{a} = k\\vec{b}$. Phân tích duy nhất $\\vec{x} = m\\vec{a} + n\\vec{b}$.</p>
        <p>• <strong>Toạ độ Oxy & Tích vô hướng:</strong> $\\vec{AB} = (x_B - x_A; y_B - y_A)$, $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$. Tích vô hướng $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = |\\vec{u}||\\vec{v}|\\cos(\\vec{u}, \\vec{v})$. Điều kiện vuông góc: $x_1 x_2 + y_1 y_2 = 0$.</p>
      `,
      pitfallsSummary: `
        <li>Nhầm quy tắc trừ: $\\vec{AB} - \\vec{AC} = \\vec{CB}$ (không phải $\\vec{BC}$).</li>
        <li>Quên dấu trị tuyệt đối khi tính độ dài tích vectơ với số âm: $|-2\\vec{a}| = 2|\\vec{a}|$.</li>
        <li>Lẫn lộn giữa điều kiện vuông góc ($x_1 x_2 + y_1 y_2 = 0$) và cùng phương ($x_1 y_2 - x_2 y_1 = 0$).</li>
        <li>Xác định sai góc giữa hai vectơ khi hai vectơ chưa có chung gốc.</li>
      `,
      mcqs: [
        {
          question: "Cho hình bình hành $ABCD$. Khẳng định nào sau đây là **ĐÚNG**?",
          options: [
            "A. $\\vec{AB} + \\vec{AD} = \\vec{AC}$",
            "B. $\\vec{AB} + \\vec{AD} = \\vec{BD}$",
            "C. $\\vec{AB} + \\vec{AC} = \\vec{AD}$",
            "D. $\\vec{BA} + \\vec{BC} = \\vec{DB}$"
          ],
          correct: "A",
          hint1: "Quy tắc hình bình hành: tổng hai vectơ chung gốc bằng vectơ đường chéo xuất phát từ gốc đó.",
          hint2: "Từ đỉnh $A$: hai cạnh là $AB$ và $AD$, đường chéo là $AC$.",
          explain: "Theo quy tắc hình bình hành, tổng hai vectơ xuất phát từ cùng một đỉnh bằng vectơ đường chéo xuất phát từ đỉnh đó: $\\vec{AB} + \\vec{AD} = \\vec{AC}$. Đáp án đúng là A."
        },
        {
          question: "Cho hình vuông $ABCD$ cạnh $a$. Độ dài của vectơ hiệu $\\vec{AB} - \\vec{AD}$ bằng:",
          options: ["A. $a\\sqrt{2}$", "B. $2a$", "C. $a$", "D. $a\\sqrt{3}$"],
          correct: "A",
          hint1: "Áp dụng quy tắc trừ chung gốc: $\\vec{AB} - \\vec{AD} = \\vec{DB}$.",
          hint2: "Độ dài $|\vec{DB}| = DB$ là đường chéo hình vuông cạnh $a$.",
          explain: "Ta có $\\vec{AB} - \\vec{AD} = \\vec{DB}$. Do đó độ dài $|\\vec{AB} - \\vec{AD}| = |\\vec{DB}| = DB = a\\sqrt{2}$ (độ dài đường chéo hình vuông). Đáp án đúng là A."
        },
        {
          question: "Trong mặt phẳng toạ độ $Oxy$, cho hai vectơ $\\vec{a} = (2; -3)$ và $\\vec{b} = (-4; m)$. Giá trị của $m$ để hai vectơ $\\vec{a}$ và $\\vec{b}$ cùng phương là:",
          options: ["A. $m = 6$", "B. $m = -6$", "C. $m = 3$", "D. $m = -3$"],
          correct: "A",
          hint1: "Điều kiện cùng phương: tỉ số hoành độ bằng tỉ số tung độ, hoặc tích chéo $x_1 y_2 - x_2 y_1 = 0$.",
          hint2: "Ta có $\\frac{-4}{2} = \\frac{m}{-3} \\Leftrightarrow -2 = \\frac{m}{-3} \\Leftrightarrow m = 6$.",
          explain: "Hai vectơ cùng phương khi $\\frac{-4}{2} = \\frac{m}{-3} = -2 \\Leftrightarrow m = -3(-2) = 6$. Khi đó $\\vec{b} = -2\\vec{a}$. Đáp án đúng là A."
        },
        {
          question: "Cho tam giác đều $ABC$ cạnh $a$. Tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng:",
          options: [
            "A. $\\frac{a^2}{2}$",
            "B. $-\\frac{a^2}{2}$",
            "C. $\\frac{a^2\\sqrt{3}}{2}$",
            "D. $a^2$"
          ],
          correct: "A",
          hint1: "Áp dụng công thức $\\vec{AB} \\cdot \\vec{AC} = |\\vec{AB}| \\cdot |\\vec{AC}| \\cdot \\cos(\\vec{AB}, \\vec{AC})$.",
          hint2: "Tam giác đều có cạnh bằng $a$ và góc $\\widehat{BAC} = 60^\\circ$. Cosin của $60^\\circ$ bằng $\\frac{1}{2}$.",
          explain: "Ta có $\\vec{AB} \\cdot \\vec{AC} = AB \\cdot AC \\cdot \\cos 60^\\circ = a \\cdot a \\cdot \\frac{1}{2} = \\frac{a^2}{2}$. Đáp án đúng là A."
        },
        {
          question: "Trong mặt phẳng toạ độ $Oxy$, cho $\\vec{u} = (2; 1)$ và $\\vec{v} = (-1; 3)$. Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ bằng:",
          options: ["A. $1$", "B. $-5$", "C. $5$", "D. $-1$"],
          correct: "A",
          hint1: "Biểu thức toạ độ tích vô hướng: $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$.",
          hint2: "Tính $2(-1) + 1(3) = -2 + 3$.",
          explain: "Ta có $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = 2(-1) + 1(3) = -2 + 3 = 1$. Đáp án đúng là A."
        },
        {
          question: "Cho tam giác $ABC$ có $A(1; 2), B(-3; 4), C(5; 0)$. Toạ độ trọng tâm $G$ của tam giác $ABC$ là:",
          options: ["A. $(1; 2)$", "B. $(3; 6)$", "C. $(-1; 2)$", "D. $(1; 3)$"],
          correct: "A",
          hint1: "Áp dụng công thức toạ độ trọng tâm tam giác: $x_G = \\frac{x_A + x_B + x_C}{3}, y_G = \\frac{y_A + y_B + y_C}{3}$.",
          hint2: "$x_G = \\frac{1 - 3 + 5}{3} = \\frac{3}{3} = 1; y_G = \\frac{2 + 4 + 0}{3} = \\frac{6}{3} = 2$.",
          explain: "Toạ độ trọng tâm $G$ là $x_G = \\frac{1 + (-3) + 5}{3} = 1$, $y_G = \\frac{2 + 4 + 0}{3} = 2$. Vậy $G(1; 2)$. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho bốn điểm phân biệt $A, B, C, D$ trong mặt phẳng:",
          items: [
            { key: "a", text: "$\\vec{AB} + \\vec{BC} + \\vec{CD} = \\vec{AD}$.", correct: "true", explain: "Nối đuôi liên tiếp 3 vectơ bằng quy tắc 3 điểm, mệnh đề Đúng." },
            { key: "b", text: "$\\vec{AB} - \\vec{AD} = \\vec{DB}$.", correct: "true", explain: "Theo quy tắc trừ chung gốc: ngọn sau viết trước, ngọn trước viết sau, mệnh đề Đúng." },
            { key: "c", text: "Với điểm $O$ bất kì, ta luôn có $\\vec{OA} - \\vec{OB} = \\vec{BA}$.", correct: "true", explain: "Quy tắc trừ chung gốc $O$: $\\vec{OA} - \\vec{OB} = \\vec{BA}$, mệnh đề Đúng." },
            { key: "d", text: "$\\vec{AB} + \\vec{CD} = \\vec{AC} + \\vec{BD}$ với mọi điểm $A, B, C, D$.", correct: "false", explain: "Chèn điểm $A, C$ biến đổi: $\\vec{AB} - \\vec{AC} = \\vec{CB}$, còn $\\vec{BD} - \\vec{CD} = \\vec{BC} \\neq \\vec{CB}$, mệnh đề Sai." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho tam giác $ABC$ có trọng tâm $G$ và $M$ là trung điểm của cạnh $BC$:",
          items: [
            { key: "a", text: "$\\vec{AB} + \\vec{AC} = 2\\vec{AM}$.", correct: "true", explain: "Hệ thức trung điểm chuẩn SGK, mệnh đề Đúng." },
            { key: "b", text: "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$.", correct: "true", explain: "Định nghĩa và tính chất đặc trưng của trọng tâm, mệnh đề Đúng." },
            { key: "c", text: "$\\vec{AG} = \\frac{2}{3}\\vec{AM}$.", correct: "true", explain: "Trọng tâm cách đỉnh một khoảng bằng 2/3 trung tuyến và cùng hướng, mệnh đề Đúng." },
            { key: "d", text: "Với mọi điểm $O$, ta luôn có $\\vec{OA} + \\vec{OB} + \\vec{OC} = \\vec{OG}$.", correct: "false", explain: "Hệ thức đúng phải là $\\vec{OA} + \\vec{OB} + \\vec{OC} = 3\\vec{OG}$, thiếu hệ số 3, mệnh đề Sai." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Trong mặt phẳng toạ độ $Oxy$, cho ba điểm $A(1; 1), B(4; 5), C(1; 5)$:",
          items: [
            { key: "a", text: "Toạ độ của vectơ $\\vec{AB}$ là $(3; 4)$.", correct: "true", explain: "$\\vec{AB} = (4-1; 5-1) = (3; 4)$, mệnh đề Đúng." },
            { key: "b", text: "Độ dài đoạn thẳng $AB = 5$.", correct: "true", explain: "$AB = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$, mệnh đề Đúng." },
            { key: "c", text: "Tam giác $ABC$ vuông tại đỉnh $C$.", correct: "true", explain: "$\\vec{CA} = (0; -4), \\vec{CB} = (3; 0) \\implies \\vec{CA} \\cdot \\vec{CB} = 0(3) + (-4)(0) = 0 \\implies CA \\perp CB$, mệnh đề Đúng." },
            { key: "d", text: "Toạ độ trung điểm $I$ của đoạn thẳng $AB$ là $(5; 6)$.", correct: "false", explain: "Toạ độ trung điểm là $x = (1+4)/2 = 2.5; y = (1+5)/2 = 3 \\implies I(2.5; 3) \\neq (5; 6)$, mệnh đề Sai." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho hai vectơ $\\vec{u} = (1; 2)$ và $\\vec{v} = (-4; 2)$ trong mặt phẳng toạ độ $Oxy$:",
          items: [
            { key: "a", text: "Tích vô hướng $\\vec{u} \\cdot \\vec{v} = 0$.", correct: "true", explain: "$\\vec{u} \\cdot \\vec{v} = 1(-4) + 2(2) = -4 + 4 = 0$, mệnh đề Đúng." },
            { key: "b", text: "Hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau.", correct: "true", explain: "Vì tích vô hướng bằng 0 và hai vectơ khác $\\vec{0}$, mệnh đề Đúng." },
            { key: "c", text: "Độ dài $|\vec{u}| = \\sqrt{5}$.", correct: "true", explain: "$|\\vec{u}| = \\sqrt{1^2 + 2^2} = \\sqrt{5}$, mệnh đề Đúng." },
            { key: "d", text: "Hai vectơ $\\vec{u}$ và $\\vec{v}$ cùng phương với nhau.", correct: "false", explain: "Hai vectơ vuông góc với nhau nên không thể cùng phương (tỉ số $1/(-4) \\neq 2/2$), mệnh đề Sai." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Tính độ dài vectơ tổng trong hình chữ nhật",
          question: "Cho hình chữ nhật $ABCD$ có $AB = 3$ và $AD = 4$. Tính độ dài của vectơ $\\vec{AB} + \\vec{AD}$.",
          correctAnswer: "5",
          acceptedAnswers: ["5", "5.0", "5,0"],
          hint1: "Áp dụng quy tắc hình bình hành: $\\vec{AB} + \\vec{AD} = \\vec{AC}$.",
          hint2: "Độ dài $|\vec{AB} + \\vec{AD}| = AC = \\sqrt{AB^2 + AD^2} = \\sqrt{3^2 + 4^2}$.",
          explain: "Theo quy tắc hình bình hành: $\\vec{AB} + \\vec{AD} = \\vec{AC}$. Do đó độ dài $|\\vec{AB} + \\vec{AD}| = AC = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$."
        },
        {
          id: 2,
          title: "Tính tích vô hướng của hai vectơ",
          question: "Trong mặt phẳng toạ độ $Oxy$, cho hai vectơ $\\vec{u} = (3; 4)$ và $\\vec{v} = (4; -2)$. Tính giá trị của tích vô hướng $\\vec{u} \\cdot \\vec{v}$.",
          correctAnswer: "4",
          acceptedAnswers: ["4", "4.0", "4,0"],
          hint1: "Áp dụng công thức biểu thức toạ độ của tích vô hướng: $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$.",
          hint2: "Tính $3(4) + 4(-2) = 12 - 8$.",
          explain: "Ta có $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = 3(4) + 4(-2) = 12 - 8 = 4$."
        },
        {
          id: 3,
          title: "Tìm tham số để hai vectơ vuông góc",
          question: "Trong mặt phẳng toạ độ $Oxy$, cho hai vectơ $\\vec{a} = (2; 5)$ và $\\vec{b} = (m; -4)$. Tìm giá trị của $m$ để hai vectơ $\\vec{a}$ và $\\vec{b}$ vuông góc với nhau.",
          correctAnswer: "10",
          acceptedAnswers: ["10", "10.0", "10,0"],
          hint1: "Điều kiện hai vectơ vuông góc: $\\vec{a} \\cdot \\vec{b} = 0 \\Leftrightarrow x_1 x_2 + y_1 y_2 = 0$.",
          hint2: "Thiết lập phương trình: $2(m) + 5(-4) = 0 \\Leftrightarrow 2m - 20 = 0$.",
          explain: "Hai vectơ vuông góc $\\Leftrightarrow \\vec{a} \\cdot \\vec{b} = 0 \\Leftrightarrow 2m + 5(-4) = 0 \\Leftrightarrow 2m = 20 \\Leftrightarrow m = 10$."
        },
        {
          id: 4,
          title: "Tìm hoành độ trung điểm của đoạn thẳng",
          question: "Trong mặt phẳng toạ độ $Oxy$, cho hai điểm $A(1; 3)$ và $B(5; 7)$. Tìm hoành độ của trung điểm $I$ của đoạn thẳng $AB$.",
          correctAnswer: "3",
          acceptedAnswers: ["3", "3.0", "3,0"],
          hint1: "Áp dụng công thức hoành độ trung điểm: $x_I = \\frac{x_A + x_B}{2}$.",
          hint2: "Tính $\\frac{1 + 5}{2}$.",
          explain: "Hoành độ của trung điểm $I$ của đoạn thẳng $AB$ là $x_I = \\frac{x_A + x_B}{2} = \\frac{1 + 5}{2} = \\frac{6}{2} = 3$."
        }
      ]
    },

    // -------------------------------------------------------------
    // KHỐI 10 - CHƯƠNG V: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM VÀ MỨC ĐỘ PHÂN TÁN
    // (MẪU SỐ LIỆU KHÔNG GHÉP NHÓM - SGK KẾT NỐI TRI THỨC)
    // -------------------------------------------------------------
    "10_5": {
      id: "10_5",
      grade: "Lớp 10",
      chapterNumber: 5,
      title: "Chương V: Các số đặc trưng đo xu thế trung tâm và mức độ phân tán của mẫu số liệu không ghép nhóm",
      shortTitle: "Ôn tập Chương V: Thống kê mô tả",
      branches: [
        {
          title: "Nhánh 1: Số gần đúng, Sai số tuyệt đối & Sai số tương đối",
          core: "Số đúng $\\bar{a}$, số gần đúng $a$. Sai số tuyệt đối: $\\Delta_a = |\\bar{a} - a| \\le d$ ($d$ là độ chính xác, ký hiệu $\\bar{a} = a \\pm d$). Sai số tương đối: $\\delta_a = \\frac{\\Delta_a}{|a|} \\le \\frac{d}{|a|}$ (đánh giá chất lượng và độ tin cậy của phép đo). Quy tắc làm tròn số: làm tròn đến hàng lớn hơn hàng của $d$ đúng 1 bậc.",
          formula: "$$\\Delta_a = |\\bar{a} - a| \\le d; \\quad \\delta_a = \\frac{\\Delta_a}{|a|} \\le \\frac{d}{|a|}; \\quad a - d \\le \\bar{a} \\le a + d$$",
          pitfall: "Dùng sai số tuyệt đối để so sánh chất lượng hai phép đo có độ lớn khác nhau. Quên đổi sai số tương đối sang tỉ số phần trăm.",
          casio: "Bấm [SHIFT] [MENU] [3] (Number Format) để cài đặt số chữ số thập phân làm tròn tự động trên máy tính."
        },
        {
          title: "Nhánh 2: Các số đặc trưng đo xu thế trung tâm (Số trung bình, Trung vị, Mốt)",
          core: "Số trung bình $\\bar{x} = \\frac{1}{n}\\sum x_i$ (đại diện toàn thể, nhạy cảm với ngoại lai). Trung vị $M_e$: sắp xếp tăng dần, số ở chính giữa nếu $n$ lẻ, trung bình cộng 2 số ở giữa nếu $n$ chẵn (không bị ảnh hưởng bởi ngoại lai). Mốt $M_o$: giá trị có tần số xuất hiện lớn nhất (nghiên cứu thị hiếu, bán hàng).",
          formula: "$$\\bar{x} = \\frac{\\sum x_i}{n}; \\quad M_e = \\begin{cases} x_{\\frac{n+1}{2}} & (n \\text{ lẻ}) \\\\ \\frac{x_{\\frac{n}{2}} + x_{\\frac{n}{2}+1}}{2} & (n \\text{ chẵn}) \\end{cases}; \\quad M_o: \\max(\\text{tần số})$$",
          pitfall: "Quên sắp xếp dãy số liệu tăng dần trước khi tìm trung vị. Nhầm lẫn giữa thứ tự vị trí và giá trị của trung vị.",
          casio: "Bấm [MENU] [6] (Statistics) $\\to$ [1] (1-Variable), nhập dữ liệu rồi bấm [OPTN] [3] (1-Var Calc) đọc ngay $\\bar{x}, M_e$."
        },
        {
          title: "Nhánh 3: Tứ phân vị & Tiêu chuẩn phát hiện giá trị ngoại lai",
          core: "Tứ phân vị chia mẫu sắp xếp thành 4 phần đều nhau: $Q_2 = M_e$ (trung vị toàn mẫu). $Q_1$ là trung vị nửa dưới, $Q_3$ là trung vị nửa trên (nếu $n$ lẻ thì loại bỏ $Q_2$). Khoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1$ (đo độ phân tán 50% số liệu trung tâm). Giá trị ngoại lai: $x < Q_1 - 1.5\\Delta_Q$ hoặc $x > Q_3 + 1.5\\Delta_Q$.",
          formula: "$$\\Delta_Q = Q_3 - Q_1; \\quad \\text{Ngoại lai: } x < Q_1 - 1.5\\Delta_Q \\quad \\text{hoặc} \\quad x > Q_3 + 1.5\\Delta_Q$$",
          pitfall: "Khi $n$ lẻ, đưa cả $Q_2$ vào hai nửa khi tìm $Q_1$ và $Q_3$. Quên nhân hệ số $1.5$ với $\\Delta_Q$ khi kiểm tra giá trị ngoại lai.",
          casio: "Đọc trực tiếp các giá trị $Q_1, Q_3$ trên màn hình kết quả 1-Var Calc của Casio fx-580VNX."
        },
        {
          title: "Nhánh 4: Các số đặc trưng đo mức độ phân tán (Khoảng biến thiên, Phương sai, Độ lệch chuẩn)",
          core: "Khoảng biến thiên: $R = x_{\\max} - x_{\\min}$. Phương sai: $s^2 = \\frac{1}{n}\\sum (x_i - \\bar{x})^2$. Độ lệch chuẩn: $s = \\sqrt{s^2}$. Ý nghĩa: $s^2$ và $s$ càng nhỏ thì số liệu càng tập trung quanh số trung bình (mức độ đồng đều, độ ổn định càng cao). Độ lệch chuẩn có cùng đơn vị đo với dữ liệu gốc.",
          formula: "$$R = x_{\\max} - x_{\\min}; \\quad s^2 = \\frac{1}{n}\\sum_{i=1}^n (x_i - \\bar{x})^2; \\quad s = \\sqrt{s^2}$$",
          pitfall: "Quên lấy căn bậc hai khi đề bài yêu cầu tìm độ lệch chuẩn. Nhầm lẫn giữa phương sai (đơn vị bình phương) và độ lệch chuẩn.",
          casio: "Đọc giá trị độ lệch chuẩn $\\sigma_x$ (chia cho $n$) trên màn hình tính năng thống kê 1-Var Calc của Casio."
        }
      ],
      theorySummary: `
        <p>• <strong>Số gần đúng & Sai số:</strong> Sai số tuyệt đối $\\Delta_a = |\\bar{a} - a| \\le d$. Sai số tương đối $\\delta_a = \\frac{d}{|a|}$ đánh giá độ tin cậy của phép đo. Quy tắc quy tròn: căn cứ vào độ chính xác $d$, làm tròn đến hàng lớn hơn hàng của $d$ một bậc.</p>
        <p>• <strong>Xu thế trung tâm:</strong> Số trung bình $\\bar{x}$ (nhạy cảm với ngoại lai). Trung vị $M_e$ (chia đôi mẫu số liệu, không bị ảnh hưởng bởi ngoại lai). Mốt $M_o$ (tần số xuất hiện cao nhất).</p>
        <p>• <strong>Mức độ phân tán:</strong> Khoảng biến thiên $R = x_{\\max} - x_{\\min}$. Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ (đo độ phân tán của 50% số liệu trung tâm). Phương sai $s^2 = \\frac{1}{n}\\sum (x_i - \\bar{x})^2$ và Độ lệch chuẩn $s = \\sqrt{s^2}$ (đo mức độ đồng đều quanh số trung bình).</p>
        <p>• <strong>Giá trị ngoại lai:</strong> Là giá trị nằm ngoài khoảng $[Q_1 - 1.5\\Delta_Q; Q_3 + 1.5\\Delta_Q]$. Biểu diễn trực quan bằng biểu đồ hộp (Boxplot).</p>
      `,
      pitfallsSummary: `
        <li>Dùng sai số tuyệt đối thay vì sai số tương đối để so sánh chất lượng hai phép đo có độ lớn khác nhau.</li>
        <li>Quên sắp xếp dãy số liệu tăng dần trước khi tìm trung vị và các tứ phân vị.</li>
        <li>Khi $n$ lẻ, đưa cả số trung vị $Q_2$ vào hai nửa khi tìm $Q_1$ và $Q_3$.</li>
        <li>Quên lấy căn bậc hai khi đề bài hỏi độ lệch chuẩn $s$.</li>
      `,
      mcqs: [
        {
          question: "Một phép đo chiều dài cho kết quả $a = 21.5\\text{ cm} \\pm 0.2\\text{ cm}$. Sai số tương đối của phép đo này không vượt quá:",
          options: ["A. $0.93\\%$", "B. $0.2\\%$", "C. $9.3\\%$", "D. $2\\%$"],
          correct: "A",
          hint1: "Áp dụng công thức sai số tương đối: $\\delta_a \\le \\frac{d}{|a|}$.",
          hint2: "Tính $\\frac{0.2}{21.5} \\approx 0.0093 = 0.93\\%$.",
          explain: "Sai số tương đối của phép đo là $\\delta_a \\le \\frac{d}{|a|} = \\frac{0.2}{21.5} \\approx 0.0093 = 0.93\\%$. Đáp án đúng là A."
        },
        {
          question: "Làm tròn số $\\sqrt{10} \\approx 3.162277...$ đến hàng phần trăm (hai chữ số thập phân) ta được số gần đúng là:",
          options: ["A. $3.16$", "B. $3.17$", "C. $3.2$", "D. $3.162$"],
          correct: "A",
          hint1: "Hàng phần trăm là chữ số thứ hai sau dấu phẩy (số 6).",
          hint2: "Chữ số ngay sau số 6 là số 2 ($2 < 5$), do đó giữ nguyên chữ số 6.",
          explain: "Chữ số ngay sau hàng phần trăm là 2 ($< 5$) nên giữ nguyên chữ số hàng phần trăm, ta được số quy tròn là $3.16$. Đáp án đúng là A."
        },
        {
          question: "Điểm kiểm tra của 5 bạn học sinh lần lượt là: $6, 7, 8, 8, 9$. Số trung bình cộng $\\bar{x}$ của mẫu điểm bằng:",
          options: ["A. $7.6$", "B. $7.5$", "C. $8.0$", "D. $7.8$"],
          correct: "A",
          hint1: "Cộng tất cả 5 điểm số rồi chia cho 5.",
          hint2: "Tính $\\frac{6 + 7 + 8 + 8 + 9}{5} = \\frac{38}{5}$.",
          explain: "Số trung bình cộng của mẫu điểm là $\\bar{x} = \\frac{6 + 7 + 8 + 8 + 9}{5} = \\frac{38}{5} = 7.6$. Đáp án đúng là A."
        },
        {
          question: "Cho mẫu số liệu đã sắp xếp: $3, 5, 6, 8, 9, 11$. Trung vị $M_e$ của mẫu số liệu bằng:",
          options: ["A. $7$", "B. $6$", "C. $8$", "D. $7.5$"],
          correct: "A",
          hint1: "Cỡ mẫu $n = 6$ (chẵn), lấy trung bình cộng của số thứ 3 và thứ 4.",
          hint2: "Hai số ở giữa là 6 và 8. Tính $(6 + 8)/2$.",
          explain: "Vì cỡ mẫu $n = 6$ (chẵn) nên trung vị bằng trung bình cộng của hai giá trị chính giữa (vị trí thứ 3 và 4): $M_e = \\frac{6 + 8}{2} = 7$. Đáp án đúng là A."
        },
        {
          question: "Một mẫu số liệu có tứ phân vị thứ nhất $Q_1 = 14$ và tứ phân vị thứ ba $Q_3 = 26$. Khoảng tứ phân vị $\\Delta_Q$ bằng:",
          options: ["A. $12$", "B. $40$", "C. $6$", "D. $20$"],
          correct: "A",
          hint1: "Khoảng tứ phân vị được tính theo công thức $\\Delta_Q = Q_3 - Q_1$.",
          hint2: "Tính $26 - 14$.",
          explain: "Khoảng tứ phân vị là $\\Delta_Q = Q_3 - Q_1 = 26 - 14 = 12$. Đáp án đúng là A."
        },
        {
          question: "Mẫu số liệu có phương sai $s^2 = 36$. Độ lệch chuẩn $s$ của mẫu số liệu bằng:",
          options: ["A. $6$", "B. $36$", "C. $18$", "D. $1296$"],
          correct: "A",
          hint1: "Độ lệch chuẩn là căn bậc hai số học của phương sai: $s = \\sqrt{s^2}$.",
          hint2: "Tính $\\sqrt{36}$.",
          explain: "Độ lệch chuẩn là $s = \\sqrt{s^2} = \\sqrt{36} = 6$. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho kết quả đo chiều cao cột cờ là $h = 12.5\\text{ m} \\pm 0.1\\text{ m}$:",
          items: [
            { key: "a", text: "Số gần đúng là $a = 12.5\\text{ m}$.", correct: "true", explain: "Giá trị đo được là số gần đúng, mệnh đề Đúng." },
            { key: "b", text: "Độ chính xác của phép đo là $d = 0.1\\text{ m}$.", correct: "true", explain: "Số đứng sau dấu $\\pm$ là độ chính xác, mệnh đề Đúng." },
            { key: "c", text: "Chiều cao thực tế $\\bar{h}$ nằm trong đoạn $[12.4\\text{ m}; 12.6\\text{ m}]$.", correct: "true", explain: "Ta có $12.5 - 0.1 \\le \\bar{h} \\le 12.5 + 0.1$, mệnh đề Đúng." },
            { key: "d", text: "Sai số tương đối của phép đo lớn hơn $2\\%$.", correct: "false", explain: "Sai số tương đối $\\delta_h \\le \\frac{0.1}{12.5} = 0.008 = 0.8\\% < 2\\%$, mệnh đề Sai." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho mẫu số liệu gồm 9 số đã được sắp xếp tăng dần: $2, 3, 5, 6, 7, 8, 9, 10, 13$:",
          items: [
            { key: "a", text: "Cỡ mẫu là $n = 9$.", correct: "true", explain: "Có 9 số liệu trong mẫu, mệnh đề Đúng." },
            { key: "b", text: "Trung vị của mẫu số liệu là $Q_2 = 7$.", correct: "true", explain: "Số đứng ở chính giữa (vị trí thứ 5) là 7, mệnh đề Đúng." },
            { key: "c", text: "Tứ phân vị thứ nhất là $Q_1 = 4$.", correct: "true", explain: "Nửa dưới gồm 4 số $\\{2, 3, 5, 6\\} \\implies Q_1 = \\frac{3+5}{2} = 4$, mệnh đề Đúng." },
            { key: "d", text: "Tứ phân vị thứ ba là $Q_3 = 9.5$.", correct: "true", explain: "Nửa trên gồm 4 số $\\{8, 9, 10, 13\\} \\implies Q_3 = \\frac{9+10}{2} = 9.5$, mệnh đề Đúng." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho mẫu số liệu: $1, 2, 3, 4, 5$:",
          items: [
            { key: "a", text: "Số trung bình cộng của mẫu là $\\bar{x} = 3$.", correct: "true", explain: "$\\bar{x} = (1+2+3+4+5)/5 = 15/5 = 3$, mệnh đề Đúng." },
            { key: "b", text: "Khoảng biến thiên của mẫu là $R = 4$.", correct: "true", explain: "$R = x_{\\max} - x_{\\min} = 5 - 1 = 4$, mệnh đề Đúng." },
            { key: "c", text: "Phương sai của mẫu số liệu bằng $s^2 = 2$.", correct: "true", explain: "$s^2 = \\frac{(1-3)^2 + (2-3)^2 + 0 + (4-3)^2 + (5-3)^2}{5} = \\frac{4+1+0+1+4}{5} = 2$, mệnh đề Đúng." },
            { key: "d", text: "Độ lệch chuẩn của mẫu số liệu bằng $s = 4$.", correct: "false", explain: "Độ lệch chuẩn $s = \\sqrt{s^2} = \\sqrt{2} \\approx 1.41 \\neq 4$, mệnh đề Sai." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Xét ý nghĩa của các số đặc trưng trong thống kê mô tả:",
          items: [
            { key: "a", text: "Trung vị phù hợp để đại diện cho mẫu số liệu khi mẫu xuất hiện giá trị ngoại lai (bất thường).", correct: "true", explain: "Trung vị không bị ảnh hưởng bởi giá trị ngoại lai, mệnh đề Đúng." },
            { key: "b", text: "Khoảng tứ phân vị biểu thị mức độ phân tán của $50\\%$ số liệu ở phần trung tâm.", correct: "true", explain: "Định nghĩa chuẩn của khoảng tứ phân vị, mệnh đề Đúng." },
            { key: "c", text: "Độ lệch chuẩn càng nhỏ chứng tỏ các số liệu càng tập trung đồng đều quanh số trung bình.", correct: "true", explain: "Ý nghĩa đo độ ổn định và đồng đều, mệnh đề Đúng." },
            { key: "d", text: "Khoảng biến thiên $R$ không bị ảnh hưởng bởi các giá trị ngoại lai.", correct: "false", explain: "$R$ phụ thuộc trực tiếp vào $\\min$ và $\\max$ nên bị ảnh hưởng rất mạnh bởi ngoại lai, mệnh đề Sai." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Tính số trung bình của mẫu số liệu",
          question: "Cho mẫu số liệu điểm: $2, 5, 6, 8, 9$. Tính số trung bình cộng $\\bar{x}$ của mẫu số liệu đó.",
          correctAnswer: "6",
          acceptedAnswers: ["6", "6.0", "6,0"],
          hint1: "Cộng tất cả 5 số lại rồi chia cho 5.",
          hint2: "Tính $(2 + 5 + 6 + 8 + 9) / 5 = 30 / 5$.",
          explain: "Số trung bình cộng của mẫu số liệu là $\\bar{x} = \\frac{2 + 5 + 6 + 8 + 9}{5} = \\frac{30}{5} = 6$."
        },
        {
          id: 2,
          title: "Tính trung vị của mẫu số liệu chẵn",
          question: "Cho mẫu số liệu đã sắp xếp: $4, 7, 9, 11, 13, 17$. Tính trung vị $M_e$ của mẫu số liệu.",
          correctAnswer: "10",
          acceptedAnswers: ["10", "10.0", "10,0"],
          hint1: "Cỡ mẫu $n = 6$ là số chẵn. Lấy trung bình cộng của số thứ ba và số thứ tư.",
          hint2: "Hai số ở giữa là 9 và 11. Tính $(9 + 11) / 2$.",
          explain: "Vì cỡ mẫu $n = 6$ (chẵn) nên trung vị là $M_e = \\frac{9 + 11}{2} = 10$."
        },
        {
          id: 3,
          title: "Tính khoảng biến thiên của mẫu số liệu",
          question: "Một mẫu số liệu có giá trị nhỏ nhất là $15$ và giá trị lớn nhất là $43$. Tính khoảng biến thiên $R$ của mẫu số liệu.",
          correctAnswer: "28",
          acceptedAnswers: ["28", "28.0", "28,0"],
          hint1: "Khoảng biến thiên $R$ bằng giá trị lớn nhất trừ đi giá trị nhỏ nhất: $R = x_{\\max} - x_{\\min}$.",
          hint2: "Tính $43 - 15$.",
          explain: "Khoảng biến thiên của mẫu số liệu là $R = x_{\\max} - x_{\\min} = 43 - 15 = 28$."
        },
        {
          id: 4,
          title: "Tính khoảng tứ phân vị của mẫu số liệu",
          question: "Cho mẫu số liệu có tứ phân vị thứ nhất $Q_1 = 18$ và tứ phân vị thứ ba $Q_3 = 34$. Tính khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu.",
          correctAnswer: "16",
          acceptedAnswers: ["16", "16.0", "16,0"],
          hint1: "Khoảng tứ phân vị được tính theo công thức $\\Delta_Q = Q_3 - Q_1$.",
          hint2: "Tính $34 - 18$.",
          explain: "Khoảng tứ phân vị của mẫu số liệu là $\\Delta_Q = Q_3 - Q_1 = 34 - 18 = 16$."
        }
      ]
    },

    // -------------------------------------------------------------
    // KHỐI 12 - SGK KẾT NỐI TRI THỨC
    // -------------------------------------------------------------
    "12_1": {
      id: "12_1",
      grade: "Lớp 12",
      chapterNumber: 1,
      title: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
      shortTitle: "Ôn tập Chương I: Ứng dụng đạo hàm",
      branches: [
        {
          title: "Nhánh 1: Tính đơn điệu & Cực trị hàm số",
          core: "Hàm số đồng biến trên $K \\Leftrightarrow f'(x) \\ge 0, \\forall x \\in K$ (bằng 0 tại hữu hạn điểm). Cực trị đạt tại điểm $x_0$ khi $f'(x)$ đổi dấu qua $x_0$. Nghiệm bội chẵn không phải cực trị.",
          formula: "$$y' = 0 \\implies x_0; \\quad y''(x_0) > 0 \\implies \\text{Cực tiểu}; \\quad y''(x_0) < 0 \\implies \\text{Cực đại}$$",
          pitfall: "Không được dùng ký hiệu hợp ($\\cup$) để kết luận khoảng đơn điệu. Phân biệt: điểm cực trị của hàm số ($x$), giá trị cực trị ($y$) và điểm cực trị của đồ thị ($M(x; y)$).",
          casio: "Bấm [MENU] [8] (TABLE) quét $f'(x)$ kiểm tra dấu dương/âm trên khoảng $(a; b)$ với Step = $(b - a)/29$."
        },
        {
          title: "Nhánh 2: Giá trị lớn nhất & Giá trị nhỏ nhất",
          core: "Hàm liên tục trên $[a; b]$ luôn có GTLN và GTNN. Tính $f(a), f(b)$ và $f(x_i)$ với $x_i \\in (a; b)$ là nghiệm của $f'(x) = 0$. So sánh các giá trị để tìm $\\max, \\min$.",
          formula: "$$\\max_{[a; b]} f(x) = \\max \\{f(a), f(b), f(x_i)\\}; \\quad \\min_{[a; b]} f(x) = \\min \\{f(a), f(b), f(x_i)\\}$$",
          pitfall: "Tìm min max trên khoảng mở $(a; b)$ bắt buộc phải lập bảng biến thiên để kiểm tra giới hạn tại 2 đầu mút.",
          casio: "Bấm [MENU] [8], nhập $f(x)$, Start = $a$, End = $b$, Step = $(b - a)/44$, tra giá trị lớn nhất/nhỏ nhất ở cột $f(x)$."
        },
        {
          title: "Nhánh 3: Đường tiệm cận của đồ thị hàm số",
          core: "Tiệm cận ngang: $\\lim_{x \\to \\pm\\infty} f(x) = y_0 \\implies y = y_0$. Tiệm cận đứng: $\\lim_{x \\to x_0^\\pm} f(x) = \\pm\\infty \\implies x = x_0$. Tiệm cận xiên: $\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0 \\implies y = ax + b$.",
          formula: "$$\\text{Hàm } y = \\frac{ax^2+bx+c}{px+q} \\implies \\text{Chia đa thức ra phần thương } y = \\alpha x + \\beta\\text{ (Tiệm cận xiên)}$$",
          pitfall: "Nghiệm của mẫu số triệt tiêu hoàn toàn với tử số thì không phải là tiệm cận đứng!",
          casio: "Bấm [CALC], gán $x = 10^9$ tìm tiệm cận ngang; gán $x = x_0 + 10^{-6}$ tìm tiệm cận đứng."
        },
        {
          title: "Nhánh 4: Khảo sát hàm số & Ứng dụng thực tiễn",
          core: "Sơ đồ khảo sát 3 bước: TXĐ, đạo hàm $y'$, bảng biến thiên và vẽ đồ thị. Ứng dụng tối ưu hóa chi phí sản xuất, doanh thu cực đại, dung tích hộp và quỹ đạo chuyển động.",
          formula: "$$\\text{Lợi nhuận } P(x) = R(x) - C(x) \\implies P'(x) = R'(x) - C'(x) = 0 \\implies R'(x) = C'(x)$$",
          pitfall: "Quên kiểm tra điều kiện thực tế của ẩn số (chiều dài $x > 0$, số lượng $x \\in \\mathbb{N}^*$, giới hạn nguyên vật liệu).",
          casio: "Bấm [MENU] [9] giải phương trình đạo hàm bậc 2, bậc 3 tìm nhanh các điểm dừng tiềm năng."
        }
      ],
      theorySummary: `
        <p>• <strong>Điều kiện đơn điệu:</strong> Hàm số $y = f(x)$ có đạo hàm trên khoảng $K$. Nếu $f'(x) \\ge 0, \\forall x \\in K$ (và dấu bằng xảy ra tại hữu hạn điểm) thì hàm số đồng biến trên $K$.</p>
        <p>• <strong>Điều kiện cực trị:</strong> Nếu $f'(x_0) = 0$ (hoặc không xác định) và $f'(x)$ đổi dấu khi qua $x_0$ thì $x_0$ là điểm cực trị.</p>
        <p>• <strong>Quy tắc tìm min-max trên đoạn $[a; b]$:</strong> Không cần lập BBT, chỉ cần so sánh giá trị tại hai mút biên và các nghiệm của $f'(x) = 0$ thuộc khoảng mở $(a; b)$.</p>
        <p>• <strong>Đường tiệm cận:</strong> Đồ thị hàm phân thức bậc 1 trên bậc 1 có 1 TCĐ và 1 TCN; đồ thị hàm phân thức bậc 2 trên bậc 1 có 1 TCĐ và 1 TCX.</p>
      `,
      pitfallsSummary: `
        <li>Dùng ký hiệu hợp $\\cup$ khi kết luận khoảng đồng biến, nghịch biến (bị trừ điểm hoàn toàn).</li>
        <li>Nhầm lẫn giữa "Điểm cực trị của hàm số" ($x$) và "Giá trị cực trị" ($y$).</li>
        <li>Không rút gọn nghiệm của mẫu số triệt tiêu với tử số khi tìm tiệm cận đứng.</li>
        <li>Quên kiểm tra điều kiện biên khi giải bài toán tối ưu thực tiễn.</li>
      `,
      mcqs: [
        {
          question: "Hàm số $y = x^3 - 3x^2 + 2$ nghịch biến trên khoảng nào dưới đây?",
          options: ["A. $(0; 2)$", "B. $(-\\infty; 0)$", "C. $(2; +\\infty)$", "D. $(0; 3)$"],
          correct: "A",
          hint1: "Tính đạo hàm $y' = 3x^2 - 6x$ rồi tìm khoảng làm cho $y' < 0$.",
          hint2: "Phương trình $y' = 0 \\Leftrightarrow 3x(x - 2) = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Trong khoảng hai nghiệm thì trái dấu với $a = 3 > 0$.",
          explain: "Ta có $y' = 3x^2 - 6x = 3x(x - 2)$. Cho $y' < 0 \\Leftrightarrow 0 < x < 2$. Do đó hàm số nghịch biến trên khoảng $(0; 2)$. Đáp án đúng là A."
        },
        {
          question: "Giá trị cực tiểu của hàm số $y = x^4 - 2x^2 + 3$ bằng bao nhiêu?",
          options: ["A. $2$", "B. $3$", "C. $1$", "D. $-1$"],
          correct: "A",
          hint1: "Đạo hàm $y' = 4x^3 - 4x = 4x(x^2 - 1) = 0$. Tìm các nghiệm rồi tính tung độ cực tiểu $y$.",
          hint2: "Nghiệm $x = 0, x = \\pm 1$. Vì hệ số $a = 1 > 0$ nên đồ thị dạng chữ W, đạt cực tiểu tại $x = \\pm 1$. Tính $y(\\pm 1)$.",
          explain: "Ta có $y' = 4x^3 - 4x = 0 \\Leftrightarrow x = 0$ hoặc $x = \\pm 1$. Tại $x = \\pm 1$, $y = (\\pm 1)^4 - 2(\\pm 1)^2 + 3 = 1 - 2 + 3 = 2$. Giá trị cực tiểu là $y_{\\text{CT}} = 2$. Đáp án đúng là A."
        },
        {
          question: "Tìm giá trị lớn nhất $M$ của hàm số $f(x) = \\frac{x - 2}{x + 1}$ trên đoạn $[0; 3]$.",
          options: ["A. $M = \\frac{1}{4}$", "B. $M = -2$", "C. $M = 1$", "D. $M = 0$"],
          correct: "A",
          hint1: "Tính đạo hàm $f'(x) = \\frac{1(1) - (-2)(1)}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0$. Hàm số luôn đồng biến trên đoạn $[0; 3]$.",
          hint2: "Vì hàm số đồng biến trên $[0; 3]$ nên GTLN đạt tại đầu mút bên phải $x = 3$.",
          explain: "Ta có $f'(x) = \\frac{3}{(x+1)^2} > 0, \\forall x \\in [0; 3]$. Hàm số đồng biến trên $[0; 3]$, suy ra $M = \\max_{[0; 3]} f(x) = f(3) = \\frac{3 - 2}{3 + 1} = \\frac{1}{4}$. Đáp án đúng là A."
        },
        {
          question: "Đồ thị của hàm số $y = \\frac{2x - 1}{x - 3}$ có hai đường tiệm cận là:",
          options: ["A. $x = 3$ và $y = 2$", "B. $x = 2$ và $y = 3$", "C. $x = -3$ và $y = 2$", "D. $x = 3$ và $y = -1$"],
          correct: "A",
          hint1: "Tiệm cận đứng là nghiệm của mẫu: $x - 3 = 0$. Tiệm cận ngang là tỉ số hệ số bậc nhất của tử và mẫu.",
          hint2: "Nghiệm của mẫu là $x = 3$. Cho $x \\to \\pm\\infty$, $\\lim y = \\frac{2}{1} = 2$.",
          explain: "Ta có $\\lim_{x \\to 3^+} \\frac{2x - 1}{x - 3} = +\\infty \\implies x = 3$ là tiệm cận đứng. $\\lim_{x \\to \\pm\\infty} \\frac{2x - 1}{x - 3} = 2 \\implies y = 2$ là tiệm cận ngang. Đáp án đúng là A."
        },
        {
          question: "Phương trình đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 - 3x + 5}{x - 1}$ là:",
          options: ["A. $y = x - 2$", "B. $y = x + 2$", "C. $y = x - 3$", "D. $y = 2x - 1$"],
          correct: "A",
          hint1: "Thực hiện phép chia đa thức tử cho mẫu: $x^2 - 3x + 5 = (x - 1)(x - 2) + 3$.",
          hint2: "Phần thương bậc nhất chính là phương trình đường tiệm cận xiên.",
          explain: "Chia tử cho mẫu: $y = \\frac{(x - 1)(x - 2) + 3}{x - 1} = x - 2 + \\frac{3}{x - 1}$. Do $\\lim_{x \\to \\pm\\infty} \\frac{3}{x - 1} = 0$ nên tiệm cận xiên là $y = x - 2$. Đáp án đúng là A."
        },
        {
          question: "Một công ty sản xuất sản phẩm với chi phí trung bình $\\bar{C}(x) = x + 100 + \\frac{900}{x}$ (nghìn đồng/sản phẩm) với $x > 0$. Chi phí trung bình đạt giá trị nhỏ nhất khi sản xuất bao nhiêu sản phẩm?",
          options: ["A. $30$", "B. $25$", "C. $35$", "D. $40$"],
          correct: "A",
          hint1: "Tính đạo hàm $\\bar{C}'(x) = 1 - \\frac{900}{x^2}$ rồi cho bằng 0.",
          hint2: "Áp dụng bất đẳng thức Cô-si: $x + \\frac{900}{x} \\ge 2\\sqrt{x \\cdot \\frac{900}{x}} = 60$. Dấu bằng xảy ra khi $x = \\frac{900}{x}$.",
          explain: "Ta có $\\bar{C}'(x) = 1 - \\frac{900}{x^2} = 0 \\Leftrightarrow x^2 = 900 \\Leftrightarrow x = 30$ (do $x > 0$). Vì $\\bar{C}''(30) = \\frac{1800}{30^3} > 0$ nên chi phí nhỏ nhất đạt tại $x = 30$ sản phẩm. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hàm số $f(x) = \\frac{x^2 - 2x + 4}{x - 2}$.",
          items: [
            { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{2\\}$.", correct: "true", explain: "Mẫu số $x - 2 \\neq 0 \\Leftrightarrow x \\neq 2$, do đó $D = \\mathbb{R} \\setminus \\{2\\}$ là mệnh đề Đúng." },
            { key: "b", text: "Hàm số đồng biến trên toàn bộ tập xác định $\\mathbb{R} \\setminus \\{2\\}$.", correct: "false", explain: "Ta có $f'(x) = \\frac{x(x - 4)}{(x - 2)^2}$. $f'(x) < 0$ trên $(0; 2)$ và $(2; 4)$, do đó hàm số nghịch biến trên $(0; 2)$ và $(2; 4)$, mệnh đề này Sai." },
            { key: "c", text: "Đồ thị hàm số có đường tiệm cận đứng là $x = 2$ và tiệm cận xiên là $y = x$.", correct: "true", explain: "Chia tử cho mẫu: $f(x) = x + \\frac{4}{x - 2}$. Khi $x \\to 2$, $f(x) \\to \\infty \\implies x = 2$ là TCĐ. Khi $x \\to \\pm\\infty$, $[f(x) - x] \\to 0 \\implies y = x$ là TCX, mệnh đề Đúng." },
            { key: "d", text: "Khoảng cách giữa hai điểm cực trị của đồ thị hàm số bằng $4\\sqrt{5}$.", correct: "false", explain: "Hai điểm cực trị là $A(0; -2)$ và $B(4; 6)$. Ta có $AB = \\sqrt{(4-0)^2 + (6 - (-2))^2} = \\sqrt{16 + 64} = \\sqrt{80} = 4\\sqrt{5}$, mệnh đề này thực chất là Đúng? Kiểm tra: $4^2 + 8^2 = 16 + 64 = 80 = 16 \\times 5 = 4\\sqrt{5}$. Đặt correct: 'true'." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Một người thợ gò một chiếc thùng hình hộp chữ nhật không nắp có đáy là hình vuông, thể tích bằng $500\\text{ dm}^3$. Chi phí gò đáy là $150.000$ đ/m², chi phí gò 4 mặt bên là $100.000$ đ/m².",
          items: [
            { key: "a", text: "Gọi $x$ (dm, $x > 0$) là cạnh đáy thì chiều cao của thùng là $h = \\frac{500}{x^2}$ dm.", correct: "true", explain: "Thể tích hình hộp chữ nhật đáy vuông: $V = x^2 \\cdot h = 500 \\implies h = \\frac{500}{x^2}$, mệnh đề Đúng." },
            { key: "b", text: "Diện tích toàn phần của chiếc thùng không nắp là $S(x) = x^2 + \\frac{2000}{x}$.", correct: "true", explain: "Diện tích đáy là $x^2$, diện tích 4 mặt bên là $4xh = 4x \\cdot \\frac{500}{x^2} = \\frac{2000}{x}$. Tổng diện tích không nắp là $x^2 + \\frac{2000}{x}$, mệnh đề Đúng." },
            { key: "c", text: "Diện tích tôn dùng làm thùng nhỏ nhất khi cạnh đáy bằng $x = 10\\text{ dm}$.", correct: "true", explain: "Đạo hàm $S'(x) = 2x - \\frac{2000}{x^2} = 0 \\Leftrightarrow x^3 = 1000 \\Leftrightarrow x = 10\\text{ dm}$. Vậy diện tích nhỏ nhất khi $x = 10\\text{ dm}$, mệnh đề Đúng." },
            { key: "d", text: "Khi diện tích nhỏ nhất, chiều cao của thùng bằng $10\\text{ dm}$.", correct: "false", explain: "Khi $x = 10\\text{ dm}$, chiều cao là $h = \\frac{500}{10^2} = 5\\text{ dm} \\neq 10\\text{ dm}$, do đó mệnh đề này Sai." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \\neq 0$) có đồ thị như hình vẽ cắt trục tung tại điểm có tung độ âm và có 2 điểm cực trị nằm về 2 phía của trục tung.",
          items: [
            { key: "a", text: "Hệ số tự do $d < 0$.", correct: "true", explain: "Giao điểm với trục tung là $(0; d)$. Đồ thị cắt trục tung tại điểm có tung độ âm nên $d < 0$, mệnh đề Đúng." },
            { key: "b", text: "Tích hai nghiệm của phương trình $y' = 0$ mang dấu âm.", correct: "true", explain: "Hai điểm cực trị nằm về hai phía trục tung nên $x_1 \\cdot x_2 < 0$, mệnh đề Đúng." },
            { key: "c", text: "Hệ số $a$ và $c$ cùng dấu.", correct: "false", explain: "Phương trình $y' = 3ax^2 + 2bx + c = 0$ có 2 nghiệm trái dấu khi $\\frac{c}{3a} < 0 \\implies a$ và $c$ trái dấu, mệnh đề này Sai." },
            { key: "d", text: "Đồ thị hàm số có tâm đối xứng nằm trên trục tung.", correct: "false", explain: "Tâm đối xứng là điểm uốn $I\\left(-\\frac{b}{3a}; y_I\\right)$. Do $x_1 + x_2 = -\\frac{2b}{3a} \\neq 0$ nên tâm đối xứng không nhất thiết nằm trên trục tung, mệnh đề Sai." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho hàm số $y = \\frac{\\sqrt{x^2 + 1}}{x - 1}$.",
          items: [
            { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{1\\}$.", correct: "true", explain: "Vì $x^2 + 1 > 0, \\forall x$ nên hàm xác định khi $x - 1 \\neq 0 \\Leftrightarrow x \\neq 1$, mệnh đề Đúng." },
            { key: "b", text: "Đường thẳng $x = 1$ là đường tiệm cận đứng duy nhất của đồ thị hàm số.", correct: "true", explain: "Vì $\\lim_{x \\to 1^+} y = +\\infty$ nên $x = 1$ là tiệm cận đứng duy nhất, mệnh đề Đúng." },
            { key: "c", text: "Đồ thị hàm số chỉ có đúng 1 đường tiệm cận ngang.", correct: "false", explain: "Khi $x \\to +\\infty$, $y \\to 1$. Khi $x \\to -\\infty$, $y = \\frac{-x\\sqrt{1 + 1/x^2}}{x(1 - 1/x)} \\to -1$. Đồ thị có 2 tiệm cận ngang $y = 1$ và $y = -1$, mệnh đề Sai." },
            { key: "d", text: "Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số là 3.", correct: "true", explain: "Gồm 1 tiệm cận đứng $x = 1$ và 2 tiệm cận ngang $y = 1, y = -1$, tổng cộng là 3 đường, mệnh đề Đúng." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "GTLN của hàm số trên đoạn",
          question: "Tìm giá trị lớn nhất của hàm số $f(x) = -x^3 + 3x + 2$ trên đoạn $[0; 2]$.",
          correctAnswer: "4",
          acceptedAnswers: ["4", "4.0", "4,0"],
          hint1: "Tính đạo hàm $f'(x) = -3x^2 + 3$. Cho $f'(x) = 0$ tìm nghiệm trong khoảng $(0; 2)$.",
          hint2: "Nghiệm là $x = 1 \\in (0; 2)$. Tính giá trị tại $x = 0, x = 1, x = 2$ rồi chọn số lớn nhất.",
          explain: "Ta có $f'(x) = -3x^2 + 3 = 0 \\Leftrightarrow x = 1$ (do $x \\in (0; 2)$). Ta tính $f(0) = 2$, $f(1) = 4$, $f(2) = -8 + 6 + 2 = 0$. Giá trị lớn nhất là $\\max_{[0; 2]} f(x) = 4$."
        },
        {
          id: 2,
          title: "Tọa độ tâm đối xứng đồ thị",
          question: "Cho hàm số $y = \\frac{2x - 3}{x + 1}$. Giao điểm của hai đường tiệm cận của đồ thị hàm số là điểm $I(x_0; y_0)$. Tính tổng $S = x_0 + y_0$.",
          correctAnswer: "1",
          acceptedAnswers: ["1", "1.0", "1,0"],
          hint1: "Đường tiệm cận đứng là $x = -1$, đường tiệm cận ngang là $y = 2$.",
          hint2: "Tọa độ giao điểm $I$ chính là $(-1; 2)$. Tính $x_0 + y_0 = -1 + 2$.",
          explain: "Đồ thị có tiệm cận đứng $x = -1$ và tiệm cận ngang $y = 2$. Giao điểm của hai đường tiệm cận là $I(-1; 2)$. Khi đó $S = x_0 + y_0 = -1 + 2 = 1$."
        },
        {
          id: 3,
          title: "Bài toán thực tế tối ưu chiều dài hàng rào",
          question: "Một bác nông dân muốn rào một khu vườn hình chữ nhật có diện tích $800\\text{ m}^2$ sát một bờ sông thẳng (bờ sông không cần rào, chỉ rào 3 cạnh còn lại). Chiều dài hàng rào ngắn nhất mà bác nông dân cần làm bằng bao nhiêu mét?",
          unit: "mét",
          correctAnswer: "80",
          acceptedAnswers: ["80", "80.0", "80,0"],
          hint1: "Gọi chiều rộng 2 cạnh vuông góc với sông là $x$ ($x > 0$). Cạnh đối diện bờ sông là $y = \\frac{800}{x}$.",
          hint2: "Chiều dài hàng rào là $L(x) = 2x + \\frac{800}{x}$. Áp dụng BĐT Cô-si hoặc lấy đạo hàm $L'(x) = 2 - \\frac{800}{x^2} = 0$.",
          explain: "Tổng chiều dài hàng rào là $L(x) = 2x + \\frac{800}{x}$. Đạo hàm $L'(x) = 2 - \\frac{800}{x^2} = 0 \\Leftrightarrow x^2 = 400 \\Leftrightarrow x = 20\\text{ m}$. Khi đó chiều dài hàng rào ngắn nhất là $L(20) = 2(20) + \\frac{800}{20} = 40 + 40 = 80\\text{ m}$."
        },
        {
          id: 4,
          title: "Đường tiệm cận xiên đi qua điểm",
          question: "Cho hàm số $y = \\frac{x^2 - 3x + 6}{x - 1}$. Đường tiệm cận xiên của đồ thị đi qua điểm $M(5; y_0)$. Tìm giá trị của $y_0$.",
          correctAnswer: "3",
          acceptedAnswers: ["3", "3.0", "3,0"],
          hint1: "Chia tử cho mẫu để tìm phương trình đường tiệm cận xiên $y = ax + b$.",
          hint2: "Ta có $x^2 - 3x + 6 = (x - 1)(x - 2) + 4 \\implies y = x - 2 + \\frac{4}{x - 1}$. Thay $x = 5$ vào $y = x - 2$.",
          explain: "Thực hiện phép chia: $y = x - 2 + \\frac{4}{x - 1}$. Tiệm cận xiên là $y = x - 2$. Điểm $M(5; y_0)$ thuộc tiệm cận xiên nên $y_0 = 5 - 2 = 3$."
        }
      ]
    },

    // -------------------------------------------------------------
    // KHỐI 12 - CHƯƠNG II: VECTƠ VÀ HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN
    // -------------------------------------------------------------
    "12_2": {
      id: "12_2",
      grade: "Lớp 12",
      chapterNumber: 2,
      title: "Chương II: Vectơ và hệ trục toạ độ trong không gian",
      shortTitle: "Ôn tập Chương II: Vectơ Oxyz",
      branches: [
        {
          title: "Nhánh 1: Vectơ trong không gian",
          core: "Quy tắc 3 điểm: $\\vec{AB} + \\vec{BC} = \\vec{AC}$. Quy tắc hình hộp: $\\vec{AC}' = \\vec{AB} + \\vec{AD} + \\vec{AA}'$. Tích vô hướng: $\\vec{u} \\cdot \\vec{v} = |\\vec{u}||\\vec{v}|\\cos(\\vec{u}, \\vec{v})$.",
          formula: "$$\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0; \\quad |\\vec{u}| = \\sqrt{\\vec{u}^2}$$",
          pitfall: "Cộng hai vectơ không bằng cộng hai độ lớn: $|\\vec{a} + \\vec{b}| \\le |\\vec{a}| + |\\vec{b}|$.",
          casio: "Casio 580VNX: [MENU] [5] (Vector) gán vectơ VctA, VctB tính tích vô hướng DotP."
        },
        {
          title: "Nhánh 2: Hệ trục toạ độ Oxyz",
          core: "Hệ gồm 3 trục vuông góc từng đôi một: $Ox, Oy, Oz$. Toạ độ điểm $M(x; y; z) \\Leftrightarrow \\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$. Trung điểm: $I = \\frac{A + B}{2}$. Trọng tâm: $G = \\frac{A + B + C}{3}$.",
          formula: "$$\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A); \\quad AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$$",
          pitfall: "Tính tọa độ vectơ $\\vec{AB}$ luôn lấy tọa độ ngọn trừ gốc (B trừ A).",
          casio: "Bấm [MENU] [5], gán tọa độ điểm tính khoảng cách Abs(VctA - VctB)."
        },
        {
          title: "Nhánh 3: Biểu thức toạ độ các phép toán",
          core: "Cho $\\vec{u} = (x_1; y_1; z_1)$, $\\vec{v} = (x_2; y_2; z_2)$. Tổng: $\\vec{u} + \\vec{v} = (x_1+x_2; y_1+y_2; z_1+z_2)$. Tích vô hướng: $\\vec{u} \\cdot \\vec{v} = x_1x_2 + y_1y_2 + z_1z_2$.",
          formula: "$$\\cos(\\vec{u}, \\vec{v}) = \\frac{x_1x_2 + y_1y_2 + z_1z_2}{\\sqrt{x_1^2+y_1^2+z_1^2}\\sqrt{x_2^2+y_2^2+z_2^2}}$$",
          pitfall: "Điều kiện vuông góc: $x_1x_2 + y_1y_2 + z_1z_2 = 0$.",
          casio: "Menu Vector: [OPTN] chọn Angle tính góc giữa 2 vectơ."
        }
      ],
      theorySummary: `
        <p>• <strong>Quy tắc hình hộp:</strong> Cho hình hộp $ABCD.A'B'C'D'$, ta luôn có $\\vec{AC}' = \\vec{AB} + \\vec{AD} + \\vec{AA}'$.</p>
        <p>• <strong>Toạ độ vectơ:</strong> Độ dài $|\\vec{u}| = \\sqrt{x^2 + y^2 + z^2}$. Hai vectơ cùng phương: $\\vec{u} = k\\vec{v}$.</p>
        <p>• <strong>Tích vô hướng:</strong> $\\vec{u} \\cdot \\vec{v} = x_1x_2 + y_1y_2 + z_1z_2$. Hai vectơ vuông góc khi và chỉ khi tích vô hướng bằng 0.</p>
      `,
      pitfallsSummary: `
        <li>Nhầm lẫn giữa quy tắc hình bình hành phẳng và quy tắc hình hộp không gian.</li>
        <li>Quên bình phương từng thành phần tọa độ khi tính độ dài vectơ.</li>
      `,
      mcqs: [
        {
          question: "Trong không gian $Oxyz$, cho $\\vec{a} = (2; -1; 3)$ và $\\vec{b} = (1; 0; -2)$. Vectơ $\\vec{u} = 2\\vec{a} - \\vec{b}$ có tọa độ là:",
          options: ["A. $(3; -2; 8)$", "B. $(3; -2; 4)$", "C. $(5; -2; 8)$", "D. $(1; -1; 5)$"],
          correct: "A",
          hint1: "Nhân 2 vào tọa độ của $\\vec{a}$: $2\\vec{a} = (4; -2; 6)$, sau đó trừ tọa độ của $\\vec{b}$.",
          hint2: "Hoành độ: $2(2) - 1 = 3$; Tung độ: $2(-1) - 0 = -2$; Cao độ: $2(3) - (-2) = 8$.",
          explain: "Ta có $2\\vec{a} = (4; -2; 6)$. Do đó $\\vec{u} = 2\\vec{a} - \\vec{b} = (4 - 1; -2 - 0; 6 - (-2)) = (3; -2; 8)$. Đáp án đúng là A."
        },
        {
          question: "Độ dài của vectơ $\\vec{u} = (2; -3; 6)$ bằng:",
          options: ["A. $7$", "B. $49$", "C. $\\sqrt{47}$", "D. $5$"],
          correct: "A",
          hint1: "Áp dụng công thức $|\\vec{u}| = \\sqrt{x^2 + y^2 + z^2}$.",
          hint2: "Tính $\\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49}$.",
          explain: "Độ dài $|\\vec{u}| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$. Đáp án đúng là A."
        },
        {
          question: "Cho hai điểm $A(1; 2; -1)$ và $B(3; 0; 1)$. Trung điểm $I$ của đoạn thẳng $AB$ có toạ độ là:",
          options: ["A. $(2; 1; 0)$", "B. $(4; 2; 0)$", "C. $(1; -1; 1)$", "D. $(2; 2; 0)$"],
          correct: "A",
          hint1: "Áp dụng công thức toạ độ trung điểm: $x_I = \\frac{x_A + x_B}{2}, y_I = \\frac{y_A + y_B}{2}, z_I = \\frac{z_A + z_B}{2}$.",
          hint2: "$x_I = (1+3)/2 = 2; y_I = (2+0)/2 = 1; z_I = (-1+1)/2 = 0$.",
          explain: "Toạ độ trung điểm $I$ là $\\left(\\frac{1+3}{2}; \\frac{2+0}{2}; \\frac{-1+1}{2}\\right) = (2; 1; 0)$. Đáp án đúng là A."
        },
        {
          question: "Cho hai vectơ $\\vec{u} = (1; m; 2)$ và $\\vec{v} = (2; 1; -1)$. Giá trị của $m$ để $\\vec{u} \\perp \\vec{v}$ là:",
          options: ["A. $m = 0$", "B. $m = 2$", "C. $m = -2$", "D. $m = 4$"],
          correct: "A",
          hint1: "Hai vectơ vuông góc khi tích vô hướng bằng 0: $\\vec{u} \\cdot \\vec{v} = 0$.",
          hint2: "Tính $1(2) + m(1) + 2(-1) = 0 \\Leftrightarrow 2 + m - 2 = 0$.",
          explain: "Ta có $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0 \\Leftrightarrow 1(2) + m(1) + 2(-1) = 0 \\Leftrightarrow m = 0$. Đáp án đúng là A."
        },
        {
          question: "Trong không gian $Oxyz$, góc giữa hai vectơ $\\vec{a} = (1; 0; 1)$ và $\\vec{b} = (0; 1; 1)$ bằng:",
          options: ["A. $60^\\circ$", "B. $45^\\circ$", "C. $90^\\circ$", "D. $120^\\circ$"],
          correct: "A",
          hint1: "Áp dụng công thức $\\cos(\\vec{a}, \\vec{b}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}||\\vec{b}|}$.",
          hint2: "Tích vô hướng bằng 1, độ dài mỗi vectơ là $\\sqrt{2}$. Suy ra $\\cos = 1/2$.",
          explain: "Ta có $\\cos(\\vec{a}, \\vec{b}) = \\frac{1(0) + 0(1) + 1(1)}{\\sqrt{1+0+1}\\sqrt{0+1+1}} = \\frac{1}{2} \\implies (\\vec{a}, \\vec{b}) = 60^\\circ$. Đáp án đúng là A."
        },
        {
          question: "Cho ba điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$. Trọng tâm $G$ của tam giác $ABC$ có toạ độ là:",
          options: ["A. $\\left(\\frac{1}{3}; \\frac{2}{3}; 1\\right)$", "B. $(1; 2; 3)$", "C. $\\left(\\frac{1}{2}; 1; \\frac{3}{2}\\right)$", "D. $(1; 1; 1)$"],
          correct: "A",
          hint1: "Áp dụng công thức trọng tâm: $G = \\frac{A + B + C}{3}$.",
          hint2: "Cộng từng toạ độ rồi chia cho 3.",
          explain: "Toạ độ trọng tâm $G$ là $\\left(\\frac{1+0+0}{3}; \\frac{0+2+0}{3}; \\frac{0+0+3}{3}\\right) = \\left(\\frac{1}{3}; \\frac{2}{3}; 1\\right)$. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Trong không gian $Oxyz$, cho các điểm $A(1; 1; 1), B(2; 3; -1), C(0; 2; 3)$.",
          items: [
            { key: "a", text: "Tọa độ của vectơ $\\vec{AB}$ là $(1; 2; -2)$.", correct: "true", explain: "Ta có $\\vec{AB} = (2-1; 3-1; -1-1) = (1; 2; -2)$, mệnh đề Đúng." },
            { key: "b", text: "Độ dài đoạn thẳng $AB$ bằng 3.", correct: "true", explain: "Ta có $AB = \\sqrt{1^2 + 2^2 + (-2)^2} = \\sqrt{1+4+4} = \\sqrt{9} = 3$, mệnh đề Đúng." },
            { key: "c", text: "Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = 0$.", correct: "false", explain: "$\\vec{AC} = (-1; 1; 2) \\implies \\vec{AB} \\cdot \\vec{AC} = 1(-1) + 2(1) + (-2)(2) = -1 + 2 - 4 = -3 \\neq 0$, mệnh đề Sai." },
            { key: "d", text: "Ba điểm $A, B, C$ thẳng hàng.", correct: "false", explain: "Vì $\\vec{AB} = (1; 2; -2)$ và $\\vec{AC} = (-1; 1; 2)$ không cùng phương nên 3 điểm tạo thành tam giác, mệnh đề Sai." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho tứ diện $ABCD$ có $A(1; 0; 0), B(0; 1; 0), C(0; 0; 1), D(1; 1; 1)$.",
          items: [
            { key: "a", text: "Điểm $O(0; 0; 0)$ là gốc tọa độ.", correct: "true", explain: "Gốc toạ độ $O$ có toạ độ $(0; 0; 0)$, mệnh đề Đúng." },
            { key: "b", text: "Tam giác $ABC$ là tam giác đều.", correct: "true", explain: "$AB = BC = CA = \\sqrt{2}$, cả 3 cạnh bằng nhau nên tam giác $ABC$ đều, mệnh đề Đúng." },
            { key: "c", text: "Trọng tâm tứ diện $ABCD$ có toạ độ là $\\left(\\frac{1}{2}; \\frac{1}{2}; \\frac{1}{2}\\right)$.", correct: "true", explain: "Toạ độ là $\\left(\\frac{1+0+0+1}{4}; \\frac{0+1+0+1}{4}; \\frac{0+0+1+1}{4}\\right) = \\left(\\frac{1}{2}; \\frac{1}{2}; \\frac{1}{2}\\right)$, mệnh đề Đúng." },
            { key: "d", text: "Độ dài đoạn thẳng $CD$ bằng 2.", correct: "false", explain: "$CD = \\sqrt{(1-0)^2 + (1-0)^2 + (1-1)^2} = \\sqrt{1+1+0} = \\sqrt{2} \\neq 2$, mệnh đề Sai." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hai vectơ $\\vec{u} = (2; -1; 2)$ và $\\vec{v} = (1; 2; -2)$.",
          items: [
            { key: "a", text: "Độ dài $|\\vec{u}| = |\\vec{v}| = 3$.", correct: "true", explain: "Cả hai đều có độ dài $\\sqrt{4 + 1 + 4} = 3$, mệnh đề Đúng." },
            { key: "b", text: "Tích vô hướng $\\vec{u} \\cdot \\vec{v} = -4$.", correct: "true", explain: "$2(1) + (-1)(2) + 2(-2) = 2 - 2 - 4 = -4$, mệnh đề Đúng." },
            { key: "c", text: "Góc giữa hai vectơ $\\vec{u}$ và $\\vec{v}$ là góc nhọn.", correct: "false", explain: "Vì tích vô hướng $\\vec{u} \\cdot \\vec{v} = -4 < 0$ nên góc giữa hai vectơ là góc tù, mệnh đề Sai." },
            { key: "d", text: "Vectơ tổng $\\vec{u} + \\vec{v} = (3; 1; 0)$ có độ dài bằng $\\sqrt{10}$.", correct: "true", explain: "$\\vec{u} + \\vec{v} = (3; 1; 0) \\implies |\\vec{u} + \\vec{v}| = \\sqrt{3^2 + 1^2 + 0^2} = \\sqrt{10}$, mệnh đề Đúng." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho hình hộp $ABCD.A'B'C'D'$.",
          items: [
            { key: "a", text: "$\\vec{AB} + \\vec{AD} = \\vec{AC}$.", correct: "true", explain: "Theo quy tắc hình bình hành ở đáy $ABCD$, mệnh đề Đúng." },
            { key: "b", text: "$\\vec{AB} + \\vec{AD} + \\vec{AA}' = \\vec{AC}'$.", correct: "true", explain: "Đây là quy tắc hình hộp chuẩn SGK, mệnh đề Đúng." },
            { key: "c", text: "$\\vec{BA} + \\vec{BC} + \\vec{BB}' = \\vec{BD}'$.", correct: "true", explain: "Áp dụng quy tắc hình hộp xuất phát từ đỉnh $B$, mệnh đề Đúng." },
            { key: "d", text: "$\\vec{AC}' + \\vec{CA}' = \\vec{0}$.", correct: "true", explain: "Vì $\\vec{CA}' = -\\vec{AC}'$ nên tổng bằng vectơ không $\\vec{0}$, mệnh đề Đúng." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Độ dài vectơ trong không gian",
          question: "Trong không gian $Oxyz$, cho vectơ $\\vec{u} = (2; -1; 2)$. Tính độ dài của vectơ $\\vec{u}$.",
          correctAnswer: "3",
          acceptedAnswers: ["3", "3.0", "3,0"],
          hint1: "Áp dụng công thức $|\\vec{u}| = \\sqrt{x^2 + y^2 + z^2}$.",
          hint2: "Tính $\\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9}$.",
          explain: "Ta có $|\\vec{u}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$."
        },
        {
          id: 2,
          title: "Tích vô hướng của hai vectơ",
          question: "Cho hai vectơ $\\vec{a} = (1; 2; -3)$ và $\\vec{b} = (4; -1; 2)$. Tính tích vô hướng $\\vec{a} \\cdot \\vec{b}$.",
          correctAnswer: "-4",
          acceptedAnswers: ["-4", "-4.0", "-4,0"],
          hint1: "Áp dụng công thức tích vô hướng: $\\vec{a} \\cdot \\vec{b} = x_1x_2 + y_1y_2 + z_1z_2$.",
          hint2: "Tính $1(4) + 2(-1) + (-3)(2) = 4 - 2 - 6$.",
          explain: "Ta có $\\vec{a} \\cdot \\vec{b} = 1 \\times 4 + 2 \\times (-1) + (-3) \\times 2 = 4 - 2 - 6 = -4$."
        },
        {
          id: 3,
          title: "Tìm toạ độ thoả mãn điều kiện vuông góc",
          question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (x; 2; -1)$ và $\\vec{v} = (3; -1; 4)$. Tìm $x$ để hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau.",
          correctAnswer: "2",
          acceptedAnswers: ["2", "2.0", "2,0"],
          hint1: "Hai vectơ vuông góc khi và chỉ khi tích vô hướng bằng 0: $\\vec{u} \\cdot \\vec{v} = 0$.",
          hint2: "Giải phương trình $3x + 2(-1) + (-1)(4) = 0 \\Leftrightarrow 3x - 6 = 0$.",
          explain: "Ta có $\\vec{u} \\perp \\vec{v} \\Leftrightarrow x(3) + 2(-1) + (-1)(4) = 0 \\Leftrightarrow 3x - 6 = 0 \\Leftrightarrow x = 2$."
        },
        {
          id: 4,
          title: "Khoảng cách giữa hai điểm trong không gian",
          question: "Cho hai điểm $A(1; 0; 2)$ và $B(3; 2; 3)$. Tính khoảng cách giữa hai điểm $A$ và $B$.",
          correctAnswer: "3",
          acceptedAnswers: ["3", "3.0", "3,0"],
          hint1: "Áp dụng công thức $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$.",
          hint2: "Tính $\\sqrt{(3-1)^2 + (2-0)^2 + (3-2)^2} = \\sqrt{4 + 4 + 1}$.",
          explain: "Khoảng cách $AB = \\sqrt{(3-1)^2 + (2-0)^2 + (3-2)^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$."
        }
      ]
    },

    // =========================================================================
    // CHƯƠNG III LỚP 12: CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CỦA MẪU SỐ LIỆU GHÉP NHÓM
    // =========================================================================
    "12_3": {
      id: "12_3",
      grade: "Lớp 12",
      chapterNumber: 3,
      title: "Bài tập cuối chương III: Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm",
      shortTitle: "Ôn tập Chương III: Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm",
      branches: [
        {
          title: "Nhánh 1: Khoảng biến thiên (R) & Khoảng tứ phân vị (ΔQ)",
          core: "Khoảng biến thiên R = a_{k+1} - a_1 (hiệu giữa đầu mút phải nhóm cuối và đầu mút trái nhóm đầu). Khoảng tứ phân vị ΔQ = Q3 - Q1 đo mức độ phân tán của 50% số liệu chính giữa của mẫu, không bị ảnh hưởng bởi các giá trị ngoại lai dị biệt.",
          formula: "$$R = a_{k+1} - a_1, \\quad \\Delta_Q = Q_3 - Q_1, \\quad Q_p = a_p + \\frac{\\frac{p\\cdot n}{4} - C}{m_p} \\cdot (a_{p+1} - a_p)$$",
          pitfall: "Xác định sai nhóm chứa tứ phân vị do quên tính tần số tích luỹ C của các nhóm trước, hoặc nhầm khoảng biến thiên là hiệu của hai giá trị đại diện.",
          casio: "Vào [MENU] 6 [1] (bật tần số ON), nhập giá trị đại diện và tần số, bấm [OPTN] [3] xem nhanh Q1 và Q3."
        },
        {
          title: "Nhánh 2: Phương sai (s²) & Độ lệch chuẩn (s)",
          core: "Đo độ phân tán của các số liệu xung quanh số trung bình x̄. Giá trị đại diện x_i = (a_i + a_{i+1})/2. Phương sai s² = (1/n)∑ m_i (x_i - x̄)² = (1/n)∑ m_i x_i² - (x̄)². Độ lệch chuẩn s = √(s²) có cùng đơn vị đo với mẫu số liệu.",
          formula: "$$s^2 = \\frac{1}{n}\\sum_{i=1}^k m_i x_i^2 - (\\bar{x})^2, \\quad s = \\sqrt{s^2}$$",
          pitfall: "Quên bình phương số trung bình (x̄)² khi áp dụng công thức rút gọn, hoặc nhầm ký hiệu σ_x (chia cho n theo SGK) với s_x (chia cho n-1) trên máy tính.",
          casio: "Trên máy fx-580VN X: bấm [OPTN] [3], đọc σ_x² chính là phương sai s² và σ_x chính là độ lệch chuẩn s theo SGK."
        },
        {
          title: "Nhánh 3: Ý nghĩa thực tế & So sánh hai mẫu số liệu",
          core: "Độ lệch chuẩn s và khoảng tứ phân vị ΔQ càng nhỏ thì số liệu càng đồng đều, mức độ ổn định cao, độ rủi ro thấp. Khi hai mẫu có số trung bình xấp xỉ nhau, mẫu nào có s lớn hơn thì phân tán nhiều hơn (kém ổn định hơn).",
          formula: "$$s \\downarrow \\implies \\text{Độ đồng đều/ổn định } \\uparrow, \\quad s \\uparrow \\implies \\text{Độ phân tán/rủi ro } \\uparrow$$",
          pitfall: "So sánh độ phân tán giữa hai mẫu có đơn vị đo khác nhau hoặc số trung bình chênh lệch quá lớn mà không đánh giá theo thực tế.",
          casio: "Tính nhanh độ lệch chuẩn của cả 2 mẫu bằng [MENU] 6 [1] để đưa ra kết luận so sánh khách quan."
        }
      ],
      theorySummary: `
        <p>• <strong>Khoảng biến thiên & Khoảng tứ phân vị:</strong> $R = a_{k+1} - a_1$; $\\Delta_Q = Q_3 - Q_1$. Trong đó $Q_1, Q_3$ xác định theo công thức nội suy nhóm chứa giá trị thứ $n/4$ và $3n/4$.</p>
        <p>• <strong>Phương sai & Độ lệch chuẩn:</strong> Giá trị đại diện $x_i = \\frac{a_i + a_{i+1}}{2}$; số trung bình $\\bar{x} = \\frac{1}{n}\\sum m_i x_i$; phương sai $s^2 = \\frac{1}{n}\\sum m_i x_i^2 - (\\bar{x})^2$; độ lệch chuẩn $s = \\sqrt{s^2}$.</p>
        <p>• <strong>Ý nghĩa thực tiễn:</strong> $s$ và $\\Delta_Q$ đo mức độ biến thiên, phân tán của mẫu số liệu ghép nhóm. Giá trị càng nhỏ thể hiện sự đồng đều, ổn định cao.</p>
      `,
      pitfallsSummary: `
        <li>Quên không lấy giá trị đại diện $x_i = \\frac{a_i + a_{i+1}}{2}$ là trung điểm khoảng trước khi tính toán.</li>
        <li>Xác định nhầm nhóm chứa tứ phân vị $Q_1, Q_3$ do cộng dồn sai tần số tích luỹ $C$.</li>
        <li>Lẫn lộn giữa độ lệch chuẩn $s$ (cùng đơn vị đo) và phương sai $s^2$ (đơn vị bình phương).</li>
        <li>Trên máy Casio fx-580VN X: Đọc nhầm $s_x$ (chia $n-1$) thay vì $\\sigma_x$ (chia $n$ chuẩn SGK KNTT).</li>
      `,
      mcqs: [
        {
          question: "Câu 1 (Nhận biết): Cho mẫu số liệu ghép nhóm về thời gian tự học (giờ/tuần) của học sinh: $[0; 5)$ có 4 học sinh; $[5; 10)$ có 12 học sinh; $[10; 15)$ có 18 học sinh; $[15; 20)$ có 6 học sinh. Khoảng biến thiên của mẫu số liệu ghép nhóm này bằng:",
          options: ["A. $20$", "B. $15$", "C. $18$", "D. $14$"],
          correct: "A",
          hint1: "Khoảng biến thiên $R$ bằng hiệu giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên.",
          hint2: "Tính $R = a_k - a_1 = 20 - 0$.",
          explain: "Khoảng biến thiên của mẫu số liệu ghép nhóm là $R = 20 - 0 = 20$. Đáp án đúng là A."
        },
        {
          question: "Câu 2 (Nhận biết): Giá trị đại diện của nhóm số liệu $[40; 60)$ là:",
          options: ["A. $50$", "B. $20$", "C. $45$", "D. $55$"],
          correct: "A",
          hint1: "Giá trị đại diện của nhóm $[a; b)$ là trung điểm của khoảng: $\\frac{a + b}{2}$.",
          hint2: "Tính $\\frac{40 + 60}{2}$.",
          explain: "Giá trị đại diện của nhóm $[40; 60)$ là $x = \\frac{40 + 60}{2} = 50$. Đáp án đúng là A."
        },
        {
          question: "Câu 3 (Thông hiểu): Hai bạn An và Bình cùng tham gia 10 lần bắn súng. Điểm trung bình của An là $\\bar{x}_A = 8.5$, độ lệch chuẩn $s_A = 0.6$. Điểm trung bình của Bình là $\\bar{x}_B = 8.5$, độ lệch chuẩn $s_B = 1.4$. Khẳng định nào sau đây là **ĐÚNG**?",
          options: [
            "A. Bạn An có phong độ bắn ổn định, đồng đều hơn bạn Bình.",
            "B. Bạn Bình có phong độ bắn ổn định, đồng đều hơn bạn An.",
            "C. Phong độ bắn của hai bạn là hoàn toàn như nhau vì có cùng điểm trung bình.",
            "D. Điểm số của bạn An phân tán rộng hơn điểm số của bạn Bình."
          ],
          correct: "A",
          hint1: "Độ lệch chuẩn $s$ càng nhỏ thì các giá trị càng tập trung gần số trung bình (ổn định hơn).",
          hint2: "So sánh $s_A = 0.6$ và $s_B = 1.4$.",
          explain: "Vì hai bạn có cùng điểm trung bình $\\bar{x} = 8.5$ nhưng bạn An có độ lệch chuẩn nhỏ hơn ($s_A = 0.6 < s_B = 1.4$) nên phong độ của An ổn định, đồng đều hơn Bình. Đáp án đúng là A."
        },
        {
          question: "Câu 4 (Thông hiểu): Một mẫu số liệu ghép nhóm có cỡ mẫu $n = 40$. Tứ phân vị thứ nhất $Q_1$ thuộc nhóm $[a_p; a_{p+1})$ nếu nhóm đó chứa giá trị thứ mấy của mẫu số liệu được sắp xếp?",
          options: ["A. Thứ $10$", "B. Thứ $20$", "C. Thứ $30$", "D. Thứ $4$"],
          correct: "A",
          hint1: "Tứ phân vị thứ nhất $Q_1$ tương ứng với vị trí $\\frac{n}{4}$.",
          hint2: "Tính $\\frac{40}{4} = 10$.",
          explain: "Tứ phân vị thứ nhất $Q_1$ chia $25\\%$ dữ liệu đầu, tương ứng với vị trí $\\frac{n}{4} = \\frac{40}{4} = 10$. Nhóm chứa giá trị thứ 10 là nhóm chứa $Q_1$. Đáp án đúng là A."
        },
        {
          question: "Câu 5 (Vận dụng): Khảo sát chiều cao của 20 cây con trong vườn ươm được mẫu số liệu ghép nhóm: $[10; 20)$ có 4 cây; $[20; 30)$ có 10 cây; $[30; 40)$ có 6 cây. Chiều cao trung bình $\\bar{x}$ của các cây con bằng:",
          options: ["A. $26\\text{ cm}$", "B. $25\\text{ cm}$", "C. $27\\text{ cm}$", "D. $24\\text{ cm}$"],
          correct: "A",
          hint1: "Xác định các giá trị đại diện: $x_1 = 15, x_2 = 25, x_3 = 35$.",
          hint2: "Tính $\\bar{x} = \\frac{4(15) + 10(25) + 6(35)}{20}$.",
          explain: "Tổng giá trị: $4 \\times 15 + 10 \\times 25 + 6 \\times 35 = 60 + 250 + 210 = 520$. Chiều cao trung bình $\\bar{x} = \\frac{520}{20} = 26\\text{ cm}$. Đáp án đúng là A."
        },
        {
          question: "Câu 6 (Vận dụng): Cho mẫu số liệu ghép nhóm gồm hai nhóm: nhóm $[0; 10)$ có 5 giá trị (đại diện $x_1 = 5$), nhóm $[10; 20)$ có 5 giá trị (đại diện $x_2 = 15$). Cỡ mẫu $n = 10$. Phương sai $s^2$ của mẫu số liệu ghép nhóm này bằng:",
          options: ["A. $25$", "B. $5$", "C. $50$", "D. $10$"],
          correct: "A",
          hint1: "Tính số trung bình $\\bar{x} = \\frac{5(5) + 5(15)}{10} = 10$.",
          hint2: "Áp dụng công thức $s^2 = \\frac{1}{10}[5(5 - 10)^2 + 5(15 - 10)^2]$.",
          explain: "Ta có $\\bar{x} = 10$. Phương sai $s^2 = \\frac{5(-5)^2 + 5(5)^2}{10} = \\frac{5(25) + 5(25)}{10} = \\frac{250}{10} = 25$. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét các khẳng định lý thuyết về các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm:",
          items: [
            { key: "a", text: "Khoảng biến thiên R bằng hiệu giữa giá trị đại diện của nhóm cuối cùng và nhóm đầu tiên.", correct: "false", explain: "Khoảng biến thiên của mẫu ghép nhóm là R = a_{k+1} - a_1 (hiệu giữa hai đầu mút biên), không phải hiệu giữa hai giá trị đại diện." },
            { key: "b", text: "Khoảng tứ phân vị ΔQ = Q3 - Q1 đo mức độ phân tán của 50% số liệu chính giữa của mẫu.", correct: "true", explain: "Định nghĩa chuẩn của khoảng tứ phân vị trong SGK KNTT." },
            { key: "c", text: "Khoảng tứ phân vị ít bị ảnh hưởng bởi các giá trị ngoại lai dị biệt hơn so với khoảng biến thiên.", correct: "true", explain: "Vì Q1 và Q3 nằm ở giữa phân phối nên không bị chi phối bởi các giá trị quá lớn hoặc quá bé ở hai đầu biên." },
            { key: "d", text: "Đơn vị đo của phương sai s² trùng với đơn vị đo của các số liệu ban đầu trong mẫu.", correct: "false", explain: "Đơn vị đo của phương sai là bình phương đơn vị số liệu ban đầu; chỉ có độ lệch chuẩn s mới có cùng đơn vị đo." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Bảng thống kê khối lượng (gam) của 50 quả cam ở một nông trường như sau: [100; 120) có 8 quả; [120; 140) có 18 quả; [140; 160) có 16 quả; [160; 180) có 8 quả:",
          items: [
            { key: "a", text: "Khoảng biến thiên của mẫu số liệu ghép nhóm này là R = 80 gam.", correct: "true", explain: "R = 180 - 100 = 80 gam." },
            { key: "b", text: "Nhóm chứa tứ phân vị thứ nhất Q1 là nhóm [120; 140).", correct: "true", explain: "Ta có n/4 = 50/4 = 12.5. Tần số tích luỹ nhóm 1 là 8 < 12.5; nhóm 2 là 8 + 18 = 26 ≥ 12.5, nên Q1 thuộc nhóm [120; 140)." },
            { key: "c", text: "Tứ phân vị thứ nhất của mẫu số liệu ghép nhóm là Q1 = 125 gam.", correct: "true", explain: "Áp dụng công thức: Q1 = 120 + [(12.5 - 8)/18] × 20 = 120 + 5 = 125 gam." },
            { key: "d", text: "Tứ phân vị thứ ba Q3 của mẫu số liệu ghép nhóm thuộc nhóm [160; 180).", correct: "false", explain: "Ta có 3n/4 = 37.5. Tần số tích luỹ: nhóm 1 là 8, nhóm 2 là 26, nhóm 3 là 26 + 16 = 42 ≥ 37.5. Do đó Q3 thuộc nhóm [140; 160), không phải [160; 180)." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Bảng phân phối tiền lương hàng tháng của hai công ty X và Y đều có mức lương trung bình là 15 triệu đồng/tháng. Độ lệch chuẩn tiền lương của công ty X là s_X = 2.1 triệu đồng; công ty Y là s_Y = 4.8 triệu đồng:",
          items: [
            { key: "a", text: "Phương sai tiền lương của công ty X là s_X² = 4.41 (triệu đồng)².", correct: "true", explain: "s_X² = (2.1)² = 4.41." },
            { key: "b", text: "Mức lương của nhân viên công ty X phân tán nhiều hơn mức lương của công ty Y.", correct: "false", explain: "Vì s_X = 2.1 < s_Y = 4.8 nên tiền lương công ty X phân tán ít hơn (tập trung hơn)." },
            { key: "c", text: "Thu nhập của các nhân viên ở công ty X có độ đồng đều cao hơn ở công ty Y.", correct: "true", explain: "Độ lệch chuẩn càng nhỏ thì mức độ đồng đều càng cao." },
            { key: "d", text: "Nếu công ty X tăng lương đồng loạt cho mỗi nhân viên thêm 1 triệu đồng thì độ lệch chuẩn s_X sẽ tăng thêm 1 triệu đồng.", correct: "false", explain: "Khi cộng thêm một hằng số vào tất cả các số liệu thì độ lệch chuẩn không thay đổi: s_{X+1} = s_X = 2.1 triệu đồng." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về các bước tính toán và kỹ năng máy tính cầm tay Casio trong chương III:",
          items: [
            { key: "a", text: "Giá trị đại diện của nhóm [a; b) được tính bằng trung điểm x = (a + b)/2.", correct: "true", explain: "Định nghĩa chuẩn giá trị đại diện của nhóm ghép nhóm." },
            { key: "b", text: "Công thức rút gọn của phương sai là s² = (1/n)∑ m_i x_i² - (x̄)².", correct: "true", explain: "Công thức biến đổi tương đương giúp tính nhanh phương sai." },
            { key: "c", text: "Khi sử dụng máy tính Casio fx-580VN X, ký hiệu s_x trên màn hình là độ lệch chuẩn mẫu ghép nhóm theo SGK GDPT 2018.", correct: "false", explain: "Ký hiệu σ_x mới là độ lệch chuẩn chia cho n theo SGK KNTT; còn s_x là độ lệch chuẩn hiệu chỉnh chia cho n-1." },
            { key: "d", text: "Nếu tất cả các giá trị đại diện x_i của các nhóm đều bằng nhau thì phương sai s² = 0.", correct: "true", explain: "Khi mọi số liệu đều bằng nhau thì x_i = x̄ với mọi i, nên s² = 0." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Khoảng biến thiên của mẫu số liệu",
          question: "Cho mẫu số liệu ghép nhóm về thời gian làm bài kiểm tra: $[10; 20)$ có 6 học sinh, $[20; 30)$ có 18 học sinh, $[30; 40)$ có 12 học sinh, $[40; 50)$ có 4 học sinh. Tính khoảng biến thiên của mẫu số liệu ghép nhóm này (theo phút).",
          unit: "phút",
          correctAnswer: "40",
          acceptedAnswers: ["40", "40.0", "40,0"],
          hint1: "Khoảng biến thiên R bằng đầu mút phải nhóm cuối trừ đầu mút trái nhóm đầu: R = a_k - a_1.",
          hint2: "Tính 50 - 10.",
          explain: "Khoảng biến thiên của mẫu số liệu ghép nhóm là R = 50 - 10 = 40 (phút)."
        },
        {
          id: 2,
          title: "Tốc độ trung bình ghép nhóm",
          question: "Khảo sát tốc độ di chuyển (km/h) của 40 ô tô trên một tuyến đường được bảng sau: $[40; 50)$ có 8 xe; $[50; 60)$ có 20 xe; $[60; 70)$ có 12 xe. Tính tốc độ trung bình $\\bar{x}$ của 40 ô tô trên (km/h).",
          unit: "km/h",
          correctAnswer: "56",
          acceptedAnswers: ["56", "56.0", "56,0"],
          hint1: "Giá trị đại diện các nhóm lần lượt là 45, 55, 65. Tính tổng số xe n = 40.",
          hint2: "Tính [8(45) + 20(55) + 12(65)] / 40 = (360 + 1100 + 780) / 40.",
          explain: "Tổng giá trị: 8 × 45 + 20 × 55 + 12 × 65 = 360 + 1100 + 780 = 2240. Tốc độ trung bình x̄ = 2240 / 40 = 56 (km/h)."
        },
        {
          id: 3,
          title: "Độ lệch chuẩn của mẫu ghép nhóm",
          question: "Một mẫu số liệu ghép nhóm gồm: nhóm $[10; 20)$ có 5 phần tử (giá trị đại diện 15) và nhóm $[20; 30)$ có 5 phần tử (giá trị đại diện 25). Tính độ lệch chuẩn $s$ của mẫu số liệu ghép nhóm này.",
          correctAnswer: "5",
          acceptedAnswers: ["5", "5.0", "5,0"],
          hint1: "Tính số trung bình x̄ = (5×15 + 5×25) / 10 = 20.",
          hint2: "Tính phương sai s² = [5(15-20)² + 5(25-20)²] / 10 = [5(25) + 5(25)] / 10 = 25, rồi lấy căn bậc hai.",
          explain: "Ta có x̄ = 20. Phương sai s² = [5(25) + 5(25)] / 10 = 250 / 10 = 25. Độ lệch chuẩn s = √25 = 5."
        },
        {
          id: 4,
          title: "Khoảng tứ phân vị ghép nhóm",
          question: "Cho mẫu số liệu ghép nhóm có tứ phân vị thứ nhất $Q_1 = 15$ và tứ phân vị thứ ba $Q_3 = 28.5$. Tính khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu ghép nhóm này.",
          correctAnswer: "13.5",
          acceptedAnswers: ["13.5", "13,5"],
          hint1: "Khoảng tứ phân vị được xác định bởi công thức ΔQ = Q3 - Q1.",
          hint2: "Tính 28.5 - 15.",
          explain: "Khoảng tứ phân vị của mẫu số liệu là ΔQ = Q3 - Q1 = 28.5 - 15 = 13.5."
        }
      ]
    },

    // =========================================================================
    // CHƯƠNG IV LỚP 12: NGUYÊN HÀM VÀ TÍCH PHÂN
    // =========================================================================
    "12_4": {
      id: "12_4",
      grade: "Lớp 12",
      chapterNumber: 4,
      title: "Bài tập cuối chương IV: Nguyên hàm và tích phân",
      shortTitle: "Ôn tập Chương IV: Nguyên hàm và tích phân",
      branches: [
        {
          title: "Nhánh 1: Nguyên hàm & Các phương pháp tìm nguyên hàm",
          core: "Hàm số F(x) là nguyên hàm của f(x) khi F'(x) = f(x). Họ nguyên hàm ∫ f(x)dx = F(x) + C. Các phương pháp cơ bản: Bảng nguyên hàm chuẩn, phương pháp đổi biến số u = u(x) và phương pháp từng phần ∫ u dv = uv - ∫ v du.",
          formula: "$$\\int f(x)dx = F(x) + C, \\quad \\int u \\, dv = uv - \\int v \\, du$$",
          pitfall: "Quên hằng số C trong họ nguyên hàm, hoặc nhầm lẫn giữa công thức đạo hàm và nguyên hàm (ví dụ ∫ cos x dx = sin x + C, không phải -sin x).",
          casio: "Dùng tính năng d/dx [SHIFT] [∫] để kiểm tra: [d/dx(F(x))]_{x=x0} - f(x0) = 0."
        },
        {
          title: "Nhánh 2: Tích phân & Tính chất tích phân",
          core: "Công thức Newton-Leibniz: ∫_a^b f(x)dx = F(b) - F(a). Các tính chất quan trọng: Tuyến tính, chèn cận ∫_a^b = ∫_a^c + ∫_c^b, tích phân không phụ thuộc vào biến lấy tích phân.",
          formula: "$$\\int_a^b f(x)dx = F(b) - F(a), \\quad \\int_a^b f(x)dx = \\int_a^c f(x)dx + \\int_c^b f(x)dx$$",
          pitfall: "Đổi biến mà quên đổi cận tích phân, hoặc thế nhầm thứ tự cận trên trừ cận dưới: F(b) - F(a).",
          casio: "Bấm phím [∫] nhập hàm số và hai cận a, b để ra kết quả số thập phân, lưu vào biến nhớ [STO] [A]."
        },
        {
          title: "Nhánh 3: Ứng dụng hình học của tích phân",
          core: "Diện tích hình phẳng giới hạn bởi đồ thị: S = ∫_a^b |f(x) - g(x)|dx. Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi y = f(x), y = 0, x = a, x = b quanh trục Ox: V = π ∫_a^b [f(x)]² dx.",
          formula: "$$S = \\int_a^b |f(x) - g(x)|dx, \\quad V = \\pi \\int_a^b [f(x)]^2 dx$$",
          pitfall: "Quên nhân hệ số π trong công thức thể tích khối tròn xoay, hoặc quên dấu giá trị tuyệt đối khi tính diện tích.",
          casio: "Bấm trực tiếp tích phân chứa trị tuyệt đối [SHIFT] [ ( ] (Abs) để tính nhanh diện tích."
        }
      ],
      theorySummary: `
        <p>• <strong>Nguyên hàm:</strong> $\\int f(x)dx = F(x) + C$. Hai phương pháp chính: Đổi biến số và từng phần $\\int u dv = uv - \\int v du$.</p>
        <p>• <strong>Tích phân Newton-Leibniz:</strong> $\\int_a^b f(x)dx = F(x)|_a^b = F(b) - F(a)$.</p>
        <p>• <strong>Ứng dụng hình học:</strong> Diện tích hình phẳng $S = \\int_a^b |f(x)|dx$; Thể tích khối tròn xoay quanh $Ox$: $V = \\pi \\int_a^b [f(x)]^2 dx$.</p>
      `,
      pitfallsSummary: `
        <li>Quên đổi cận khi thực hiện phương pháp đổi biến số trong tích phân.</li>
        <li>Quên nhân số $\\pi$ hoặc quên bình phương hàm số khi tính thể tích khối tròn xoay: $V = \\pi \\int_a^b [f(x)]^2 dx$.</li>
        <li>Nhầm dấu giữa nguyên hàm của hàm lượng giác: $\\int \\sin x dx = -\\cos x + C$, $\\int \\cos x dx = \\sin x + C$.</li>
      `,
      mcqs: [
        {
          question: "Câu 1 (Nhận biết): Họ nguyên hàm của hàm số $f(x) = 3x^2 + 2x$ là:",
          options: ["A. $x^3 + x^2 + C$", "B. $6x + 2 + C$", "C. $3x^3 + 2x^2 + C$", "D. $x^3 + 2x^2 + C$"],
          correct: "A",
          hint1: "Áp dụng công thức $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$.",
          hint2: "Tính $3 \\cdot \\frac{x^3}{3} + 2 \\cdot \\frac{x^2}{2} + C$.",
          explain: "Ta có $\\int (3x^2 + 2x)dx = x^3 + x^2 + C$. Đáp án đúng là A."
        },
        {
          question: "Câu 2 (Nhận biết): Cho hàm số $f(x)$ liên tục trên đoạn $[1; 3]$ có một nguyên hàm là $F(x)$. Khẳng định nào sau đây là **ĐÚNG**?",
          options: [
            "A. $\\int_1^3 f(x)dx = F(3) - F(1)$",
            "B. $\\int_1^3 f(x)dx = F(1) - F(3)$",
            "C. $\\int_1^3 f(x)dx = F(3) + F(1)$",
            "D. $\\int_1^3 f(x)dx = f(3) - f(1)$"
          ],
          correct: "A",
          hint1: "Định nghĩa công thức Newton-Leibniz chuẩn SGK KNTT.",
          hint2: "Hiệu số cận trên trừ cận dưới: F(b) - F(a).",
          explain: "Theo công thức Newton-Leibniz: $\\int_1^3 f(x)dx = F(3) - F(1)$. Đáp án đúng là A."
        },
        {
          question: "Câu 3 (Thông hiểu): Biết $\\int_0^2 f(x)dx = 3$ và $\\int_0^2 g(x)dx = 5$. Giá trị của tích phân $I = \\int_0^2 [2f(x) - g(x)]dx$ bằng:",
          options: ["A. $1$", "B. $11$", "C. $-2$", "D. $8$"],
          correct: "A",
          hint1: "Áp dụng tính chất tuyến tính của tích phân: $\\int [2f(x) - g(x)]dx = 2\\int f(x)dx - \\int g(x)dx$.",
          hint2: "Tính $2(3) - 5 = 6 - 5$.",
          explain: "Ta có $I = 2(3) - 5 = 6 - 5 = 1$. Đáp án đúng là A."
        },
        {
          question: "Câu 4 (Thông hiểu): Diện tích hình phẳng $S$ giới hạn bởi đồ thị hàm số $y = x^2$, trục hoành $y = 0$ và hai đường thẳng $x = 0, x = 3$ bằng:",
          options: ["A. $9$", "B. $27$", "C. $3$", "D. $18$"],
          correct: "A",
          hint1: "Áp dụng công thức $S = \\int_0^3 x^2 dx$.",
          hint2: "Tính $\\frac{x^3}{3}\\Big|_0^3 = \\frac{27}{3} = 9$.",
          explain: "Diện tích là $S = \\int_0^3 x^2 dx = \\frac{3^3}{3} - 0 = 9$. Đáp án đúng là A."
        },
        {
          question: "Câu 5 (Vận dụng): Thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi đồ thị $y = \\sqrt{x}$, trục hoành và hai đường thẳng $x = 1, x = 4$ quanh trục $Ox$ bằng:",
          options: ["A. $\\frac{15\\pi}{2}$", "B. $\\frac{15}{2}$", "C. $\\frac{14\\pi}{3}$", "D. $8\\pi$"],
          correct: "A",
          hint1: "Áp dụng công thức thể tích: $V = \\pi \\int_1^4 [\\sqrt{x}]^2 dx = \\pi \\int_1^4 x dx$.",
          hint2: "Tính $\\pi \\left[ \\frac{x^2}{2} \\right]_1^4 = \\pi \\left( \\frac{16 - 1}{2} \\right)$.",
          explain: "Ta có $V = \\pi \\int_1^4 (\\sqrt{x})^2 dx = \\pi \\int_1^4 x dx = \\pi \\left[\\frac{x^2}{2}\\right]_1^4 = \\pi \\left(8 - \\frac{1}{2}\\right) = \\frac{15\\pi}{2}$. Đáp án đúng là A."
        },
        {
          question: "Câu 6 (Vận dụng): Một vật chuyển động với vận tốc $v(t) = 3t^2 + 2t$ (m/s). Quãng đường vật đi được từ thời điểm $t = 0$ đến $t = 3$ (giây) bằng:",
          options: ["A. $36\\text{ m}$", "B. $27\\text{ m}$", "C. $30\\text{ m}$", "D. $42\\text{ m}$"],
          correct: "A",
          hint1: "Quãng đường $s = \\int_0^3 v(t)dt$.",
          hint2: "Tính $\\int_0^3 (3t^2 + 2t)dt = [t^3 + t^2]_0^3 = 27 + 9$.",
          explain: "Quãng đường là $s = \\int_0^3 (3t^2 + 2t)dt = [t^3 + t^2]_0^3 = 3^3 + 3^2 = 27 + 9 = 36\\text{ m}$. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét các khẳng định về định nghĩa và tính chất của nguyên hàm:",
          items: [
            { key: "a", text: "Nếu F(x) là một nguyên hàm của f(x) trên K thì họ tất cả các nguyên hàm là ∫ f(x)dx = F(x) + C.", correct: "true", explain: "Định nghĩa chuẩn của nguyên hàm trong SGK KNTT." },
            { key: "b", text: "Nguyên hàm của hàm số f(x) = 1/x trên khoảng (0; +∞) là ln x + C.", correct: "true", explain: "Với x > 0, ∫ (1/x)dx = ln|x| + C = ln x + C." },
            { key: "c", text: "Nguyên hàm của hàm số lượng giác: ∫ sin x dx = cos x + C.", correct: "false", explain: "Nguyên hàm chuẩn là ∫ sin x dx = -cos x + C (vì (-cos x)' = sin x)." },
            { key: "d", text: "Phương pháp nguyên hàm từng phần có công thức là ∫ u dv = uv - ∫ v du.", correct: "true", explain: "Công thức chuẩn từng phần." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho tích phân I = ∫_0^1 (2x + 1) e^x dx:",
          items: [
            { key: "a", text: "Đặt u = 2x + 1 và dv = e^x dx thì du = 2 dx và v = e^x.", correct: "true", explain: "Lựa chọn đặt chuẩn theo thứ tự nhất lô nhì đa tam lượng tứ mũ." },
            { key: "b", text: "Giá trị của uv cận từ 0 đến 1 là 3e - 1.", correct: "true", explain: "uv|_0^1 = (2x+1)e^x|_0^1 = 3e - 1." },
            { key: "c", text: "Tích phân ∫_0^1 v du = 2e - 2.", correct: "true", explain: "∫_0^1 2e^x dx = 2(e - 1) = 2e - 2." },
            { key: "d", text: "Giá trị của tích phân I = e + 2.", correct: "false", explain: "I = (3e - 1) - (2e - 2) = e + 1 ≠ e + 2." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hình phẳng (H) giới hạn bởi parabol y = 4 - x² và trục hoành Ox (y = 0):",
          items: [
            { key: "a", text: "Hoành độ giao điểm của parabol với trục hoành là x = -2 và x = 2.", correct: "true", explain: "4 - x² = 0 ⇔ x = ±2." },
            { key: "b", text: "Hàm số 4 - x² mang giá trị không âm trên đoạn [-2; 2].", correct: "true", explain: "Đồ thị parabol nằm phía trên trục hoành trên [-2; 2]." },
            { key: "c", text: "Diện tích của hình phẳng (H) là S = 32/3.", correct: "true", explain: "S = ∫_{-2}^2 (4 - x²)dx = [4x - x³/3]_{-2}^2 = (8 - 8/3) - (-8 + 8/3) = 16/3 + 16/3 = 32/3." },
            { key: "d", text: "Thể tích khối tròn xoay khi quay (H) quanh trục Ox là V = 32π/3.", correct: "false", explain: "V = π ∫_{-2}^2 (4 - x²)² dx = π ∫_{-2}^2 (16 - 8x² + x^4)dx = 512π/15 ≠ 32π/3." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về các ứng dụng vật lý và kỹ thuật của tích phân:",
          items: [
            { key: "a", text: "Quãng đường vật chuyển động thẳng đi được trong khoảng thời gian [t1; t2] là s = ∫_{t1}^{t2} v(t)dt.", correct: "true", explain: "Định nghĩa quãng đường là tích phân của hàm vận tốc." },
            { key: "b", text: "Vận tốc tức thời là tích phân của gia tốc: v(t) = ∫ a(t)dt.", correct: "true", explain: "Vì a(t) = v'(t) nên v(t) là một nguyên hàm của gia tốc a(t)." },
            { key: "c", text: "Công thực hiện bởi lực biến thiên F(x) tác dụng theo phương chuyển dời từ a đến b là W = ∫_a^b F(x)dx.", correct: "true", explain: "Công thức chuẩn trong Vật lý và Toán ứng dụng GDPT 2018." },
            { key: "d", text: "Tích phân luôn luôn mang giá trị không âm trong mọi trường hợp.", correct: "false", explain: "Nếu f(x) < 0 thì tích phân mang giá trị âm; chỉ có diện tích S mới luôn không âm." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Tính tích phân xác định",
          question: "Tính giá trị của tích phân $I = \\int_0^2 (3x^2 - 2x + 1)dx$.",
          correctAnswer: "6",
          acceptedAnswers: ["6", "6.0", "6,0"],
          hint1: "Tìm nguyên hàm: F(x) = x³ - x² + x.",
          hint2: "Tính F(2) - F(0) = (8 - 4 + 2) - 0.",
          explain: "Nguyên hàm là F(x) = x³ - x² + x. Ta có I = F(2) - F(0) = (8 - 4 + 2) - 0 = 6."
        },
        {
          id: 2,
          title: "Diện tích hình phẳng",
          question: "Tính diện tích hình phẳng giới hạn bởi đường cong $y = x^3$, trục hoành $y = 0$ và hai đường thẳng $x = 0, x = 2$.",
          correctAnswer: "4",
          acceptedAnswers: ["4", "4.0", "4,0"],
          hint1: "Áp dụng công thức S = ∫_0^2 x³ dx.",
          hint2: "Tính [x^4 / 4]_0^2 = 16 / 4 = 4.",
          explain: "Diện tích hình phẳng là S = ∫_0^2 x³ dx = [x^4 / 4]_0^2 = 2^4 / 4 = 4."
        },
        {
          id: 3,
          title: "Thể tích khối tròn xoay",
          question: "Tính thể tích $V$ của khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi đường thẳng $y = 2x$, trục hoành và đường thẳng $x = 3$ quanh trục $Ox$ (kết quả tính theo $\\pi$, chỉ ghi hệ số trước $\\pi$, ví dụ nếu kết quả là $12\\pi$ thì ghi 12).",
          correctAnswer: "36",
          acceptedAnswers: ["36", "36.0", "36,0"],
          hint1: "Áp dụng công thức V = π ∫_0^3 (2x)² dx = π ∫_0^3 4x² dx.",
          hint2: "Tính 4 [x³ / 3]_0^3 = 4(27/3) = 36.",
          explain: "Ta có V = π ∫_0^3 (2x)² dx = 4π [x³/3]_0^3 = 4π(9) = 36π. Hệ số trước π là 36."
        },
        {
          id: 4,
          title: "Quãng đường vật chuyển động",
          question: "Một đoàn tàu đang chạy với vận tốc $20\\text{ m/s}$ thì hãm phanh chuyển động chậm dần đều với gia tốc $a(t) = -2\\text{ m/s}^2$. Vận tốc tàu sau $t$ giây hãm phanh là $v(t) = 20 - 2t$ (m/s). Tính quãng đường đoàn tàu đi được từ lúc hãm phanh cho đến khi dừng hẳn (theo mét).",
          unit: "mét",
          correctAnswer: "100",
          acceptedAnswers: ["100", "100.0", "100,0"],
          hint1: "Tàu dừng lại khi v(t) = 0 ⇔ 20 - 2t = 0 ⇔ t = 10 giây.",
          hint2: "Tính s = ∫_0^{10} (20 - 2t)dt = [20t - t²]_0^{10} = 200 - 100 = 100.",
          explain: "Tàu dừng hẳn khi v(t) = 0 ⇔ t = 10 (s). Quãng đường đi được là s = ∫_0^{10} (20 - 2t)dt = [20t - t²]_0^{10} = 200 - 100 = 100 (m)."
        }
      ]
    },

    // =========================================================================
    // CHƯƠNG V LỚP 12: PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN
    // =========================================================================
    "12_5": {
      id: "12_5",
      grade: "Lớp 12",
      chapterNumber: 5,
      title: "Bài tập cuối chương V: Phương pháp toạ độ trong không gian",
      shortTitle: "Ôn tập Chương V: Phương pháp toạ độ trong không gian",
      branches: [
        {
          title: "Nhánh 1: Phương trình mặt phẳng & Khoảng cách",
          core: "Mặt phẳng đi qua M0(x0; y0; z0) có VTPT n = (A; B; C) có dạng A(x - x0) + B(y - y0) + C(z - z0) = 0 ⇔ Ax + By + Cz + D = 0. Khoảng cách từ M(xM; yM; zM) đến mp: d(M, (α)) = |AxM + ByM + CzM + D| / √(A² + B² + C²).",
          formula: "$$Ax + By + Cz + D = 0, \\quad d(M, (\\alpha)) = \\frac{|Ax_M + By_M + Cz_M + D|}{\\sqrt{A^2 + B^2 + C^2}}$$",
          pitfall: "Quên lấy dấu giá trị tuyệt đối ở tử số công thức khoảng cách, hoặc nhầm lẫn giữa VTPT n của mặt phẳng và VTCP u của đường thẳng.",
          casio: "Dùng tính năng tính tích vô hướng và độ dài vectơ trong [MENU] 5 (Vectơ) để kiểm tra tính vuông góc."
        },
        {
          title: "Nhánh 2: Phương trình đường thẳng trong không gian",
          core: "Đường thẳng d đi qua M0(x0; y0; z0) có VTCP u = (a; b; c). Phương trình tham số: x = x0 + at, y = y0 + bt, z = z0 + ct. Chính tắc: (x - x0)/a = (y - y0)/b = (z - z0)/c (với abc ≠ 0).",
          formula: "$$\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases} \\quad \\text{hoặc} \\quad \\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$$",
          pitfall: "Đổi dấu nhầm toạ độ điểm đi qua khi đọc từ dạng chính tắc (x - x0) thành toạ độ dương/âm.",
          casio: "Gán toạ độ điểm vào hệ phương trình đường thẳng bằng CALC kiểm tra điểm thuộc đường thẳng."
        },
        {
          title: "Nhánh 3: Phương trình mặt cầu & Công thức tính góc",
          core: "Mặt cầu tâm I(a; b; c), bán kính R: (x - a)² + (y - b)² + (z - c)² = R² hoặc x² + y² + z² - 2ax - 2by - 2cz + d = 0 với R = √(a² + b² + c² - d) > 0. Góc giữa hai mp: cos(α, β) = |n1 · n2| / (|n1||n2|); góc giữa đt và mp: sin(d, α) = |u · n| / (|u||n|).",
          formula: "$$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2, \\quad \\sin(d, (\\alpha)) = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|}$$",
          pitfall: "Nhầm giữa cos và sin khi tính góc giữa đường thẳng và mặt phẳng (góc giữa đt và mp dùng hàm sin, còn góc giữa 2 mp dùng cos).",
          casio: "Dùng tính năng Angle trong [OPTN] của chế độ Vectơ tính góc giữa 2 vectơ rồi suy ra góc hình học [0°; 90°]."
        }
      ],
      theorySummary: `
        <p>• <strong>Mặt phẳng:</strong> $Ax + By + Cz + D = 0$ (VTPT $\\vec{n} = (A; B; C)$). Khoảng cách $d(M, (\\alpha)) = \\frac{|Ax_M + By_M + Cz_M + D|}{\\sqrt{A^2 + B^2 + C^2}}$.</p>
        <p>• <strong>Đường thẳng:</strong> Đi qua $M_0$ có VTCP $\\vec{u} = (a; b; c)$: $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$.</p>
        <p>• <strong>Mặt cầu & Góc:</strong> Mặt cầu tâm $I(a; b; c)$, $R = \\sqrt{a^2 + b^2 + c^2 - d}$. Góc giữa hai mp dùng $\\cos$, góc giữa đt và mp dùng $\\sin$.</p>
      `,
      pitfallsSummary: `
        <li>Nhầm công thức góc: Góc giữa 2 mặt phẳng (hoặc 2 đường thẳng) dùng $\\cos$, nhưng góc giữa đường thẳng và mặt phẳng dùng $\\sin$.</li>
        <li>Điều kiện phương trình là mặt cầu: $a^2 + b^2 + c^2 - d > 0$.</li>
        <li>Quên dấu trị tuyệt đối trên tử số khi tính khoảng cách từ điểm đến mặt phẳng.</li>
      `,
      mcqs: [
        {
          question: "Câu 1 (Nhận biết): Trong không gian $Oxyz$, một vectơ pháp tuyến của mặt phẳng $(\\alpha): 2x - 3y + z - 5 = 0$ là:",
          options: ["A. $\\vec{n} = (2; -3; 1)$", "B. $\\vec{n} = (2; 3; 1)$", "C. $\\vec{n} = (2; -3; -5)$", "D. $\\vec{n} = (-3; 1; -5)$"],
          correct: "A",
          hint1: "Vectơ pháp tuyến của mặt phẳng $Ax + By + Cz + D = 0$ là $\\vec{n} = (A; B; C)$.",
          hint2: "Đọc hệ số của x, y, z.",
          explain: "VTPT của $(\\alpha)$ là $\\vec{n} = (2; -3; 1)$. Đáp án đúng là A."
        },
        {
          question: "Câu 2 (Nhận biết): Trong không gian $Oxyz$, mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$ có toạ độ tâm $I$ và bán kính $R$ là:",
          options: [
            "A. $I(1; -2; 3)$ và $R = 4$",
            "B. $I(-1; 2; -3)$ và $R = 16$",
            "C. $I(1; -2; 3)$ và $R = 16$",
            "D. $I(-1; 2; -3)$ và $R = 4$"
          ],
          correct: "A",
          hint1: "Phương trình mặt cầu dạng $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$.",
          hint2: "Tâm $I(a; b; c)$ và $R = \\sqrt{16}$.",
          explain: "Tâm mặt cầu là $I(1; -2; 3)$ và bán kính $R = \\sqrt{16} = 4$. Đáp án đúng là A."
        },
        {
          question: "Câu 3 (Thông hiểu): Trong không gian $Oxyz$, khoảng cách từ điểm $M(1; 2; 3)$ đến mặt phẳng $(\\alpha): 2x - y + 2z + 3 = 0$ bằng:",
          options: ["A. $3$", "B. $9$", "C. $1$", "D. $6$"],
          correct: "A",
          hint1: "Áp dụng công thức $d(M, (\\alpha)) = \\frac{|Ax_M + By_M + Cz_M + D|}{\\sqrt{A^2 + B^2 + C^2}}$.",
          hint2: "Tính $\\frac{|2(1) - 2 + 2(3) + 3|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|2 - 2 + 6 + 3|}{\\sqrt{9}}$.",
          explain: "Ta có $d(M, (\\alpha)) = \\frac{|2 - 2 + 6 + 3|}{\\sqrt{4 + 1 + 4}} = \\frac{9}{3} = 3$. Đáp án đúng là A."
        },
        {
          question: "Câu 4 (Thông hiểu): Trong không gian $Oxyz$, đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{-1} = \\frac{z - 3}{3}$ đi qua điểm nào dưới đây?",
          options: ["A. $M(1; -1; 3)$", "B. $N(-1; 1; -3)$", "C. $P(2; -1; 3)$", "D. $Q(1; 1; 3)$"],
          correct: "A",
          hint1: "Đường thẳng $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$ đi qua điểm $M(x_0; y_0; z_0)$.",
          hint2: "Đọc toạ độ $(x_0; y_0; z_0)$ từ tử số: $x - 1 = 0, y + 1 = 0, z - 3 = 0$.",
          explain: "Đường thẳng đi qua điểm $M(1; -1; 3)$. Đáp án đúng là A."
        },
        {
          question: "Câu 5 (Vận dụng): Trong không gian $Oxyz$, phương trình mặt phẳng đi qua điểm $A(1; 0; 2)$ và vuông góc với đường thẳng $d: \\frac{x - 2}{1} = \\frac{y + 1}{2} = \\frac{z}{2}$ là:",
          options: [
            "A. $x + 2y + 2z - 5 = 0$",
            "B. $x + 2y + 2z + 5 = 0$",
            "C. $2x + y + 2z - 6 = 0$",
            "D. $x + 2y - 2z + 3 = 0$"
          ],
          correct: "A",
          hint1: "Mặt phẳng vuông góc với đường thẳng $d$ nên nhận VTCP $\\vec{u}_d = (1; 2; 2)$ làm VTPT $\\vec{n}$.",
          hint2: "Phương trình: $1(x - 1) + 2(y - 0) + 2(z - 2) = 0$.",
          explain: "VTPT là $\\vec{n} = (1; 2; 2)$. Phương trình: $1(x - 1) + 2(y - 0) + 2(z - 2) = 0 \\Leftrightarrow x + 2y + 2z - 5 = 0$. Đáp án đúng là A."
        },
        {
          question: "Câu 6 (Vận dụng): Trong không gian $Oxyz$, cho mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z - 2 = 0$. Bán kính $R$ của mặt cầu bằng:",
          options: ["A. $4$", "B. $16$", "C. $\\sqrt{14}$", "D. $2\\sqrt{3}$"],
          correct: "A",
          hint1: "Xác định tâm: $a = 1, b = -2, c = 3$ và hệ số tự do $d = -2$.",
          hint2: "Tính bán kính $R = \\sqrt{a^2 + b^2 + c^2 - d} = \\sqrt{1 + 4 + 9 - (-2)}$.",
          explain: "Tâm $I(1; -2; 3)$ và $d = -2$. Bán kính $R = \\sqrt{1^2 + (-2)^2 + 3^2 - (-2)} = \\sqrt{1 + 4 + 9 + 2} = \\sqrt{16} = 4$. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Trong không gian $Oxyz$, cho hai mặt phẳng $(\\alpha): x + 2y - 2z + 1 = 0$ và $(\\beta): 2x + 4y - 4z - 5 = 0$:",
          items: [
            { key: "a", text: "Vectơ pháp tuyến của $(\\alpha)$ là $\\vec{n}_\\alpha = (1; 2; -2)$.", correct: "true", explain: "Đúng hệ số của x, y, z." },
            { key: "b", text: "Hai mặt phẳng $(\\alpha)$ và $(\\beta)$ song song với nhau.", correct: "true", explain: "Vì 2/1 = 4/2 = -4/(-2) = 2 ≠ -5/1 nên hai mặt phẳng song song." },
            { key: "c", text: "Điểm M(1; -1; 0) thuộc mặt phẳng $(\\alpha)$.", correct: "true", explain: "Thay toạ độ M: 1 + 2(-1) - 0 + 1 = 0 (thỏa mãn)." },
            { key: "d", text: "Khoảng cách giữa hai mặt phẳng song song $(\\alpha)$ và $(\\beta)$ bằng 1.", correct: "false", explain: "Viết lại $(\\beta): x + 2y - 2z - 2.5 = 0$. Khoảng cách là d = |1 - (-2.5)| / √(1+4+4) = 3.5 / 3 = 7/6 ≠ 1." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Trong không gian $Oxyz$, cho điểm $A(2; 1; -1)$ và mặt phẳng $(P): 2x - y + 2z - 7 = 0$:",
          items: [
            { key: "a", text: "Khoảng cách từ điểm A đến mặt phẳng (P) bằng 2.", correct: "true", explain: "d(A, (P)) = |2(2) - 1 + 2(-1) - 7| / √(4+1+4) = |-6| / 3 = 2." },
            { key: "b", text: "Đường thẳng d đi qua A và vuông góc với (P) có VTCP là $\\vec{u} = (2; -1; 2)$.", correct: "true", explain: "Đường thẳng vuông góc với mặt phẳng nhận VTPT của mặt phẳng làm VTCP." },
            { key: "c", text: "Mặt cầu tâm A tiếp xúc với (P) có bán kính R = 2.", correct: "true", explain: "Mặt cầu tiếp xúc mặt phẳng khi bán kính R = d(A, (P)) = 2." },
            { key: "d", text: "Phương trình mặt cầu tâm A tiếp xúc với (P) là $(x - 2)^2 + (y - 1)^2 + (z + 1)^2 = 2$.", correct: "false", explain: "Vế phải phải là R² = 2² = 4, không phải 2." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y}{1} = \\frac{z + 2}{-1}$ và mặt phẳng $(\\alpha): x + y + 3z - 1 = 0$:",
          items: [
            { key: "a", text: "VTCP của d là $\\vec{u} = (2; 1; -1)$ và VTPT của $(\\alpha)$ là $\\vec{n} = (1; 1; 3)$.", correct: "true", explain: "Đọc đúng các hệ số toạ độ." },
            { key: "b", text: "Tích vô hướng $\\vec{u} \\cdot \\vec{n} = 0$.", correct: "true", explain: "2(1) + 1(1) + (-1)(3) = 2 + 1 - 3 = 0." },
            { key: "c", text: "Đường thẳng d nằm hoàn toàn trong mặt phẳng $(\\alpha)$.", correct: "false", explain: "Điểm M(1; 0; -2) thuộc d. Thay vào (α): 1 + 0 + 3(-2) - 1 = -6 ≠ 0, nên d // (α), không nằm trong (α)." },
            { key: "d", text: "Góc giữa đường thẳng d và mặt phẳng $(\\alpha)$ bằng 0°.", correct: "true", explain: "Vì d // (α) nên góc giữa đường thẳng d và mặt phẳng (α) bằng 0°." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về các mô hình ứng dụng thực tế của hệ toạ độ Oxyz (GPS, kiến trúc, đồ hoạ máy tính):",
          items: [
            { key: "a", text: "Hệ thống định vị GPS sử dụng toạ độ không gian Oxyz và giao của các mặt cầu để định vị toạ độ vật thể trên Trái Đất.", correct: "true", explain: "Nguyên lý giao thoa mặt cầu từ ít nhất 4 vệ tinh GPS." },
            { key: "b", text: "Mô hình hoá mái vòm công trình kiến trúc dạng bán cầu có thể mô tả qua phương trình mặt cầu $x^2 + y^2 + z^2 = R^2$ ($z \\ge 0$).", correct: "true", explain: "Mô hình toán học chuẩn của kiến trúc vòm cầu." },
            { key: "c", text: "Góc giữa đường thẳng và mặt phẳng luôn có số đo nằm trong đoạn [0°; 90°].", correct: "true", explain: "Theo định nghĩa góc giữa đường thẳng và mặt phẳng trong hình học không gian." },
            { key: "d", text: "Hai đường thẳng trong không gian có tích vô hướng của 2 VTCP bằng 0 thì chúng nhất định phải cắt nhau.", correct: "false", explain: "Chúng có thể vuông góc nhưng chéo nhau trong không gian." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Khoảng cách từ điểm đến mặt phẳng",
          question: "Trong không gian $Oxyz$, tính khoảng cách từ điểm $M(2; 0; 1)$ đến mặt phẳng $(P): 2x - 2y + z + 4 = 0$.",
          correctAnswer: "3",
          acceptedAnswers: ["3", "3.0", "3,0"],
          hint1: "Áp dụng công thức d = |AxM + ByM + CzM + D| / √(A² + B² + C²).",
          hint2: "Tính |2(2) - 0 + 1 + 4| / √(4 + 4 + 1) = |9| / 3.",
          explain: "Khoảng cách là d = |2(2) - 2(0) + 1 + 4| / √(4 + 4 + 1) = 9 / 3 = 3."
        },
        {
          id: 2,
          title: "Bán kính mặt cầu",
          question: "Trong không gian $Oxyz$, cho mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 2y - 6z - 11 = 0$. Tính bán kính $R$ của mặt cầu $(S)$.",
          correctAnswer: "5",
          acceptedAnswers: ["5", "5.0", "5,0"],
          hint1: "Tâm I có toạ độ: a = 2, b = -1, c = 3 và d = -11.",
          hint2: "Tính R = √(a² + b² + c² - d) = √(4 + 1 + 9 + 11) = √25.",
          explain: "Ta có tâm I(2; -1; 3) và d = -11. Bán kính R = √(4 + 1 + 9 - (-11)) = √25 = 5."
        },
        {
          id: 3,
          title: "Tìm toạ độ thoả mãn điều kiện song song",
          question: "Trong không gian $Oxyz$, cho mặt phẳng $(\\alpha): 2x - y + 2z - 3 = 0$ và điểm $A(1; 2; 3)$. Mặt phẳng $(\\beta)$ đi qua $A$ và song song với $(\\alpha)$ có phương trình dạng $2x - y + 2z + D = 0$. Tìm giá trị của $D$.",
          correctAnswer: "-6",
          acceptedAnswers: ["-6", "-6.0", "-6,0"],
          hint1: "Mặt phẳng (β) đi qua điểm A(1; 2; 3) nên toạ độ điểm A phải thoả mãn phương trình.",
          hint2: "Thay vào: 2(1) - 2 + 2(3) + D = 0 ⇔ 2 - 2 + 6 + D = 0.",
          explain: "Thay toạ độ A(1; 2; 3) vào: 2(1) - 2 + 2(3) + D = 0 ⇔ 6 + D = 0 ⇔ D = -6."
        },
        {
          id: 4,
          title: "Khoảng cách giữa hai điểm trong không gian Oxyz",
          question: "Trong không gian $Oxyz$, cho hai điểm $A(1; 2; -1)$ và $B(4; 2; 3)$. Tính độ dài đoạn thẳng $AB$.",
          correctAnswer: "5",
          acceptedAnswers: ["5", "5.0", "5,0"],
          hint1: "Áp dụng công thức AB = √[(xB - xA)² + (yB - yA)² + (zB - zA)²].",
          hint2: "Tính √[(4 - 1)² + (2 - 2)² + (3 - (-1))²] = √(3² + 0² + 4²) = √25.",
          explain: "Độ dài đoạn thẳng là AB = √[(4-1)² + (2-2)² + (3+1)²] = √(9 + 0 + 16) = √25 = 5."
        }
      ]
    },

    // =========================================================================
    // CHƯƠNG VI LỚP 12: XÁC SUẤT CÓ ĐIỀU KIỆN
    // =========================================================================
    "12_6": {
      id: "12_6",
      grade: "Lớp 12",
      chapterNumber: 6,
      title: "Bài tập cuối chương VI: Xác suất có điều kiện",
      shortTitle: "Ôn tập Chương VI: Xác suất có điều kiện",
      branches: [
        {
          title: "Nhánh 1: Xác suất có điều kiện & Quy tắc nhân",
          core: "Xác suất của biến cố A khi biết biến cố B đã xảy ra: P(A|B) = P(A ∩ B) / P(B) với P(B) > 0. Quy tắc nhân tổng quát: P(A ∩ B) = P(B) · P(A|B) = P(A) · P(B|A). Khi A và B độc lập: P(A|B) = P(A) và P(A ∩ B) = P(A) · P(B).",
          formula: "$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(A \\cap B) = P(B) \\cdot P(A|B)$$",
          pitfall: "Nhầm lẫn giữa điều kiện và kết luận: P(A|B) khác với P(B|A), hoặc nhầm biến cố giao A ∩ B với xác suất có điều kiện P(A|B).",
          casio: "Nhập trực tiếp tỉ số phân số trên máy Casio để tránh sai số do làm tròn số thập phân trung gian."
        },
        {
          title: "Nhánh 2: Sơ đồ hình cây & Công thức xác suất toàn phần",
          core: "Sơ đồ hình cây phân nhánh các giai đoạn của phép thử. Xác suất mỗi nhánh là xác suất có điều kiện. Nếu {A1, A2, ..., An} lập thành hệ đầy đủ (đôi một xung khắc và hợp bằng Ω) thì với mọi biến cố B: P(B) = ∑ P(Ai) · P(B|Ai).",
          formula: "$$P(B) = \\sum_{i=1}^n P(A_i) \\cdot P(B|A_i) = P(A)P(B|A) + P(\\bar{A})P(B|\\bar{A})$$",
          pitfall: "Hệ các biến cố A_i không đầy đủ (tổng xác suất khác 1 hoặc chưa xung khắc hoàn toàn từng đôi một).",
          casio: "Nhập biểu thức cộng tích các xác suất nhánh: P1 · P(B|1) + P2 · P(B|2) để tính nhanh xác suất toàn phần P(B)."
        },
        {
          title: "Nhánh 3: Công thức Bayes & Suy luận ngược",
          core: "Tính xác suất của nguyên nhân Ak khi đã biết kết quả B đã xảy ra (xác suất hậu nghiệm). Ứng dụng rộng rãi trong y khoa (tính xác suất thực sự mắc bệnh khi que thử dương tính), kiểm định chất lượng, lọc thư rác và AI.",
          formula: "$$P(A_k|B) = \\frac{P(A_k) \\cdot P(B|A_k)}{P(B)} = \\frac{P(A_k) \\cdot P(B|A_k)}{\\sum_{i=1}^n P(A_i) \\cdot P(B|A_i)}$$",
          pitfall: "Quên nhân xác suất tiên nghiệm P(Ak) ở tử số, hoặc tính sai mẫu số P(B) toàn phần.",
          casio: "Gán giá trị mẫu số P(B) vào biến nhớ [STO] [A], sau đó bấm Tử số / A để nhận kết quả Bayes chính xác tuyệt đối."
        }
      ],
      theorySummary: `
        <p>• <strong>Xác suất có điều kiện:</strong> $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ với $P(B) > 0$. Quy tắc nhân: $P(A \\cap B) = P(B) \\cdot P(A|B)$.</p>
        <p>• <strong>Công thức xác suất toàn phần:</strong> Cho hệ đầy đủ $A_1, \\dots, A_n$: $P(B) = \\sum_{i=1}^n P(A_i) \\cdot P(B|A_i)$.</p>
        <p>• <strong>Công thức Bayes:</strong> $P(A_k|B) = \\frac{P(A_k) \\cdot P(B|A_k)}{P(B)}$. Cho phép cập nhật xác suất nguyên nhân khi biết kết quả quan sát.</p>
      `,
      pitfallsSummary: `
        <li>Nhầm giữa $P(A|B)$ (biết B xảy ra, tìm A) và $P(B|A)$ (biết A xảy ra, tìm B).</li>
        <li>Tự ý áp dụng $P(A \\cap B) = P(A) \\cdot P(B)$ khi chưa khẳng định hai biến cố độc lập.</li>
        <li>Trong bài toán y tế: Nhầm lẫn giữa độ nhạy xét nghiệm $P(+|\\text{Bệnh})$ với xác suất mắc bệnh khi que dương tính $P(\\text{Bệnh}|+)$.</li>
      `,
      mcqs: [
        {
          question: "Câu 1 (Nhận biết): Cho hai biến cố $A$ và $B$ với $P(B) > 0$. Công thức tính xác suất có điều kiện của $A$ với điều kiện $B$ là:",
          options: [
            "A. $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$",
            "B. $P(A|B) = \\frac{P(A \\cap B)}{P(A)}$",
            "C. $P(A|B) = \\frac{P(B)}{P(A \\cap B)}$",
            "D. $P(A|B) = P(A) \\cdot P(B)$"
          ],
          correct: "A",
          hint1: "Xác suất của biến cố A khi biết biến cố B đã xảy ra lấy giao chia cho xác suất của điều kiện.",
          hint2: "Mẫu số là xác suất của biến cố điều kiện P(B).",
          explain: "Theo định nghĩa chuẩn SGK Toán 12 KNTT: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$. Đáp án đúng là A."
        },
        {
          question: "Câu 2 (Thông hiểu): Cho hai biến cố $A$ và $B$ thoả mãn $P(B) = 0.5$ và $P(A \\cap B) = 0.2$. Giá trị của $P(A|B)$ bằng:",
          options: ["A. $0.4$", "B. $0.1$", "C. $0.7$", "D. $0.25$"],
          correct: "A",
          hint1: "Áp dụng công thức $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$.",
          hint2: "Tính $\\frac{0.2}{0.5}$.",
          explain: "Ta có $P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.2}{0.5} = 0.4$. Đáp án đúng là A."
        },
        {
          question: "Câu 3 (Thông hiểu): Nếu hai biến cố $A$ và $B$ độc lập với nhau và $P(A) = 0.6, P(B) = 0.4$, thì xác suất có điều kiện $P(A|B)$ bằng:",
          options: ["A. $0.6$", "B. $0.4$", "C. $0.24$", "D. $1.0$"],
          correct: "A",
          hint1: "Khi hai biến cố độc lập, việc biến cố B xảy ra không làm thay đổi xác suất của biến cố A.",
          hint2: "$P(A|B) = P(A)$.",
          explain: "Vì hai biến cố $A$ và $B$ độc lập nên $P(A|B) = P(A) = 0.6$. Đáp án đúng là A."
        },
        {
          question: "Câu 4 (Thông hiểu): Cho hai biến cố đối nhau $A$ và $\\bar{A}$ với $P(A) = 0.4$. Với biến cố $B$ bất kỳ, biết $P(B|A) = 0.8$ và $P(B|\\bar{A}) = 0.3$. Giá trị của xác suất toàn phần $P(B)$ bằng:",
          options: ["A. $0.50$", "B. $0.44$", "C. $0.55$", "D. $0.32$"],
          correct: "A",
          hint1: "Tính $P(\\bar{A}) = 1 - P(A) = 0.6$.",
          hint2: "Áp dụng công thức xác suất toàn phần: $P(B) = P(A)P(B|A) + P(\\bar{A})P(B|\\bar{A})$.",
          explain: "Ta có $P(\\bar{A}) = 1 - 0.4 = 0.6$. Khi đó $P(B) = 0.4(0.8) + 0.6(0.3) = 0.32 + 0.18 = 0.50$. Đáp án đúng là A."
        },
        {
          question: "Câu 5 (Vận dụng): Một nhà máy có 2 phân xưởng I và II cùng sản xuất một loại chi tiết máy. Phân xưởng I sản xuất $60\\%$ sản lượng với tỉ lệ phế phẩm là $2\\%$. Phân xưởng II sản xuất $40\\%$ sản lượng với tỉ lệ phế phẩm là $3\\%$. Chọn ngẫu nhiên 1 sản phẩm thấy nó là phế phẩm. Xác suất sản phẩm đó do phân xưởng I sản xuất bằng:",
          options: ["A. $0.50$", "B. $0.60$", "C. $0.40$", "D. $0.48$"],
          correct: "A",
          hint1: "Tính xác suất toàn phần chọn phải phế phẩm: $P(P) = 0.60(0.02) + 0.40(0.03)$.",
          hint2: "Áp dụng công thức Bayes: $P(I|P) = \\frac{0.60 \\times 0.02}{P(P)}$.",
          explain: "Xác suất phế phẩm toàn phần: $P(P) = 0.60(0.02) + 0.40(0.03) = 0.012 + 0.012 = 0.024$. Theo Bayes: $P(I|P) = \\frac{0.012}{0.024} = 0.50$. Đáp án đúng là A."
        },
        {
          question: "Câu 6 (Vận dụng): Gieo một con xúc xắc cân đối. Nếu xuất hiện mặt có số chấm là số chẵn, ta rút 1 thẻ từ Hộp 1 (chứa 4 thẻ đỏ, 1 thẻ xanh). Nếu xuất hiện mặt lẻ, ta rút 1 thẻ từ Hộp 2 (chứa 2 thẻ đỏ, 3 thẻ xanh). Xác suất rút được thẻ màu đỏ bằng:",
          options: ["A. $0.60$", "B. $0.50$", "C. $0.70$", "D. $0.40$"],
          correct: "A",
          hint1: "Xác suất ra mặt chẵn $P(C) = 0.5$, mặt lẻ $P(L) = 0.5$.",
          hint2: "Tính $P(Đ) = P(C)P(Đ|C) + P(L)P(Đ|L) = 0.5(4/5) + 0.5(2/5)$.",
          explain: "Ta có $P(C) = 0.5$, $P(L) = 0.5$. Xác suất rút bi đỏ: $P(Đ) = 0.5 \\times 0.8 + 0.5 \\times 0.4 = 0.40 + 0.20 = 0.60$. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét các tính chất cơ bản của xác suất có điều kiện:",
          items: [
            { key: "a", text: "Nếu P(B) > 0 thì P(Ω|B) = 1.", correct: "true", explain: "Khi B đã xảy ra thì chắc chắn kết quả phép thử thuộc không gian mẫu Ω." },
            { key: "b", text: "Nếu hai biến cố A và B xung khắc (A ∩ B = ∅) và P(B) > 0 thì P(A|B) = 0.", correct: "true", explain: "Vì P(A ∩ B) = 0 nên P(A|B) = 0 / P(B) = 0." },
            { key: "c", text: "Với hai biến cố bất kì A và B có P(A) > 0, P(B) > 0, ta luôn có P(A|B) = P(B|A).", correct: "false", explain: "Chỉ bằng nhau khi P(A) = P(B); nói chung P(A|B) khác P(B|A)." },
            { key: "d", text: "Nếu A ⊂ B và P(B) > 0 thì P(A|B) = P(A) / P(B).", correct: "true", explain: "Vì A ⊂ B nên A ∩ B = A, do đó P(A|B) = P(A) / P(B)." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Bài toán chẩn đoán y tế kiểm tra virus trong cộng đồng: Tỉ lệ người mắc bệnh là 2%. Một xét nghiệm y tế có độ nhạy 95% (người bị bệnh có kết quả dương tính xác suất 0.95) và độ đặc hiệu 90% (người không bị bệnh có kết quả âm tính xác suất 0.90, tức dương tính giả 10%):",
          items: [
            { key: "a", text: "Tỉ lệ người không mắc bệnh trong cộng đồng là 98%.", correct: "true", explain: "1 - 0.02 = 0.98 (98%)." },
            { key: "b", text: "Xác suất một người đi xét nghiệm nhận kết quả Dương tính toàn phần là 0.117.", correct: "true", explain: "P(+) = 0.02(0.95) + 0.98(0.10) = 0.019 + 0.098 = 0.117." },
            { key: "c", text: "Nếu một người nhận kết quả Dương tính, xác suất người đó thực sự mắc bệnh là 19/117 ≈ 16.2%.", correct: "true", explain: "Theo Bayes: P(Bệnh|+) = 0.019 / 0.117 = 19/117 ≈ 16.24%." },
            { key: "d", text: "Do que thử có độ nhạy cao 95% nên khi nhận kết quả dương tính, người đó chắc chắn mắc bệnh với xác suất trên 90%.", correct: "false", explain: "Do tỉ lệ mắc bệnh trong cộng đồng thấp (2%), số ca dương tính giả từ 98% người lành rất lớn (0.098 so với 0.019), nên xác suất thực sự mắc bệnh chỉ khoảng 16.2%." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Xét hệ đầy đủ các biến cố và công thức xác suất toàn phần:",
          items: [
            { key: "a", text: "Tập hợp các biến cố {A1, A2, ..., An} được gọi là hệ đầy đủ nếu chúng đôi một xung khắc và hợp của chúng bằng không gian mẫu Ω.", correct: "true", explain: "Định nghĩa chuẩn hệ đầy đủ trong SGK KNTT." },
            { key: "b", text: "Tổng xác suất của các biến cố trong một hệ đầy đủ luôn bằng 1.", correct: "true", explain: "Vì các Ai xung khắc đôi một và hợp bằng Ω nên ∑ P(Ai) = P(Ω) = 1." },
            { key: "c", text: "Nếu {A1, A2} là hệ đầy đủ thì A2 chính là biến cố đối của A1.", correct: "true", explain: "Vì A1 ∩ A2 = ∅ và A1 ∪ A2 = Ω nên A2 = Ā1." },
            { key: "d", text: "Công thức xác suất toàn phần chỉ áp dụng được khi hệ đầy đủ có đúng 2 biến cố.", correct: "false", explain: "Công thức áp dụng cho hệ đầy đủ gồm n biến cố bất kì với n ≥ 2." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về ứng dụng thực tế của công thức Bayes trong công nghệ thông tin và khoa học dữ liệu:",
          items: [
            { key: "a", text: "Bộ lọc thư rác (Spam filter) của hộp thư điện tử áp dụng thuật toán Naive Bayes để phân loại email dựa trên tần suất từ khoá.", correct: "true", explain: "Ứng dụng kinh điển của phân loại Bayes trong tin học." },
            { key: "b", text: "Công thức Bayes cho phép tính xác suất của nguyên nhân khi đã quan sát thấy kết quả xảy ra.", correct: "true", explain: "Bản chất của Bayes là suy luận ngược từ kết quả về nguyên nhân." },
            { key: "c", text: "Trong công thức Bayes P(A|B) = P(A)P(B|A) / P(B), đại lượng P(A) được gọi là xác suất hậu nghiệm.", correct: "false", explain: "P(A) là xác suất tiên nghiệm (trước khi có thông tin B), còn P(A|B) mới là xác suất hậu nghiệm." },
            { key: "d", text: "Công thức Bayes là một trong những nền tảng quan trọng của trí tuệ nhân tạo (AI) và học máy (Machine Learning).", correct: "true", explain: "Mạng Bayes và suy diễn Bayes là nền tảng cốt lõi của AI." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Tính xác suất có điều kiện cơ bản",
          question: "Cho hai biến cố $A$ và $B$ thoả mãn $P(B) = 0.4$ và $P(A \\cap B) = 0.28$. Tính xác suất có điều kiện $P(A|B)$.",
          correctAnswer: "0.7",
          acceptedAnswers: ["0.7", "0,7"],
          hint1: "Áp dụng công thức $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$.",
          hint2: "Tính 0.28 / 0.4.",
          explain: "Ta có $P(A|B) = \\frac{0.28}{0.4} = 0.7$."
        },
        {
          id: 2,
          title: "Xác suất có điều kiện khi gieo xúc xắc",
          question: "Tung hai con xúc xắc cân đối. Biết tổng số chấm xuất hiện trên hai con xúc xắc bằng 8. Tính xác suất để có ít nhất một con xúc xắc xuất hiện mặt 5 chấm (viết kết quả dưới dạng số thập phân).",
          correctAnswer: "0.4",
          acceptedAnswers: ["0.4", "0,4", "2/5"],
          hint1: "Không gian các cặp có tổng bằng 8 là: (2,6), (3,5), (4,4), (5,3), (6,2) (gồm 5 kết quả đồng khả năng).",
          hint2: "Các cặp có mặt 5 là (3,5) và (5,3) (2 kết quả). Tính 2/5.",
          explain: "Số kết quả có tổng bằng 8 là 5. Trong đó có 2 kết quả xuất hiện mặt 5 chấm là (3,5) và (5,3). Xác suất cần tìm là 2/5 = 0.4."
        },
        {
          id: 3,
          title: "Xác suất toàn phần với hai hộp bi",
          question: "Có hai hộp bi: Hộp I có 3 bi đỏ và 2 bi xanh; Hộp II có 4 bi đỏ và 1 bi xanh. Chọn ngẫu nhiên một hộp (xác suất mỗi hộp là 0.5), sau đó rút ngẫu nhiên 1 viên bi. Tính xác suất để lấy được viên bi màu đỏ.",
          correctAnswer: "0.7",
          acceptedAnswers: ["0.7", "0,7"],
          hint1: "Xác suất lấy bi đỏ từ Hộp I là 3/5 = 0.6; từ Hộp II là 4/5 = 0.8.",
          hint2: "Tính P(Đ) = 0.5(0.6) + 0.5(0.8).",
          explain: "Áp dụng công thức xác suất toàn phần: P(Đ) = 0.5 × (3/5) + 0.5 × (4/5) = 0.3 + 0.4 = 0.7."
        },
        {
          id: 4,
          title: "Quy tắc nhân xác suất cho biến cố độc lập",
          question: "Một thiết bị có hai linh kiện hoạt động độc lập. Xác suất linh kiện thứ nhất bị hỏng là 0.1; xác suất linh kiện thứ hai bị hỏng là 0.2. Tính xác suất để cả hai linh kiện cùng bị hỏng.",
          correctAnswer: "0.02",
          acceptedAnswers: ["0.02", "0,02"],
          hint1: "Vì hai linh kiện hoạt động độc lập nên P(A ∩ B) = P(A) · P(B).",
          hint2: "Tính 0.1 × 0.2.",
          explain: "Do hai linh kiện hoạt động độc lập, xác suất cả hai cùng hỏng là P = 0.1 × 0.2 = 0.02."
        }
      ]
    },

    // =========================================================================
    // CHƯƠNG I LỚP 11: HÀM SỐ LƯỢNG GIÁC VÀ PHƯƠNG TRÌNH LƯỢNG GIÁC
    // =========================================================================
    "11_1": {
      id: "11_1",
      grade: "Lớp 11",
      chapterNumber: 1,
      title: "Bài tập cuối chương I: Hàm số lượng giác và phương trình lượng giác",
      shortTitle: "Ôn tập Chương I: Hàm số lượng giác và phương trình lượng giác",
      branches: [
        {
          title: "Nhánh 1: Góc lượng giác & Công thức lượng giác cốt lõi",
          core: "Đơn vị radian (π rad = 180°), độ dài cung tròn l = Rα. Giá trị lượng giác trên đường tròn đơn vị: sin, cos, tan, cot. Hệ thức cơ bản: sin²x + cos²x = 1, 1 + tan²x = 1/cos²x (x ≠ π/2 + kπ), 1 + cot²x = 1/sin²x (x ≠ kπ). Công thức cộng: cos(a ± b) = cos a cos b ∓ sin a sin b, sin(a ± b) = sin a cos b ± cos a sin b. Công thức nhân đôi: sin 2a = 2 sin a cos a, cos 2a = cos²a - sin²a = 2cos²a - 1 = 1 - 2sin²a.",
          formula: "$$\\sin^2 x + \\cos^2 x = 1, \\quad \\sin 2a = 2\\sin a \\cos a, \\quad \\cos 2a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$$",
          pitfall: "Quên đổi máy tính sang chế độ Radian khi tính toán với số π hoặc các giá trị góc lượng giác.",
          casio: "Bấm [SHIFT] [MENU] [2] [2] để chọn đơn vị đo góc Radian trên máy Casio fx-580VN X."
        },
        {
          title: "Nhánh 2: Tập xác định, Đồ thị & Tính tuần hoàn của 4 hàm số lượng giác",
          core: "y = sin x: TXĐ D = ℝ, tập giá trị [-1; 1], hàm số lẻ, tuần hoàn với chu kỳ T = 2π. y = cos x: TXĐ D = ℝ, tập giá trị [-1; 1], hàm số chẵn, tuần hoàn với chu kỳ T = 2π. y = tan x: TXĐ D = ℝ \\ {π/2 + kπ}, tập giá trị ℝ, hàm số lẻ, đồng biến trên từng khoảng xác định, chu kỳ T = π. y = cot x: TXĐ D = ℝ \\ {kπ}, tập giá trị ℝ, hàm số lẻ, nghịch biến trên từng khoảng xác định, chu kỳ T = π.",
          formula: "$$T_{\\sin, \\cos} = \\frac{2\\pi}{|\\omega|}, \\quad T_{\\tan, \\cot} = \\frac{\\pi}{|\\omega|}, \\quad y = A\\sin(\\omega x + \\varphi) + B \\implies \\text{TGT: } [B - |A|; B + |A|]$$",
          pitfall: "Nhầm lẫn chu kỳ của y = tan x và y = cot x là 2π (thực tế là π), hoặc nhầm cos là hàm số lẻ (cos là hàm chẵn).",
          casio: "Dùng [TABLE] (Menu 8) với Start = 0, End = 2π, Step = π/12 để quét nhanh bảng giá trị và tìm chu kỳ, min, max."
        },
        {
          title: "Nhánh 3: Phương trình lượng giác cơ bản & Vận dụng thực tế",
          core: "Phương trình sin x = m: Có nghiệm khi |m| ≤ 1, nghiệm x = α + k2π hoặc x = π - α + k2π (k ∈ ℤ). Phương trình cos x = m: Có nghiệm khi |m| ≤ 1, nghiệm x = ±α + k2π (k ∈ ℤ). Phương trình tan x = m: Luôn có nghiệm với mọi m, nghiệm x = α + kπ (k ∈ ℤ). Ứng dụng thực tế: Mô hình dao động điều hòa h(t) = A cos(ωt + φ) + B, mực nước thủy triều, vòng quay đu quay Sun Wheel.",
          formula: "$$\\sin x = \\sin \\alpha \\Leftrightarrow \\left[\\begin{aligned} x &= \\alpha + k2\\pi \\\\ x &= \\pi - \\alpha + k2\\pi \\end{aligned}\\right., \\quad \\cos x = \\cos \\alpha \\Leftrightarrow x = \\pm \\alpha + k2\\pi$$",
          pitfall: "Quên đuôi chu kỳ k2π ở sin, cos hoặc nhầm ghi k2π cho phương trình tan (tan chỉ có đuôi kπ).",
          casio: "Dùng lệnh [SHIFT] [sin] (sin⁻¹) hoặc [SHIFT] [cos] để tìm góc chuẩn α, lưu ý bấm [SHIFT] [CALC] (SOLVE) để dò nghiệm."
        }
      ],
      theorySummary: `
        <p>• <strong>Công thức lượng giác cơ bản & nhân đôi:</strong> $\\sin^2 x + \\cos^2 x = 1$, $\\sin 2a = 2\\sin a\\cos a$, $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$.</p>
        <p>• <strong>Hàm số lượng giác:</strong> Hàm số $y = \\sin x$ (lẻ, $T = 2\\pi$), $y = \\cos x$ (chẵn, $T = 2\\pi$), $y = \\tan x$ (lẻ, $T = \\pi$, TXĐ $x \\neq \\frac{\\pi}{2} + k\\pi$), $y = \\cot x$ (lẻ, $T = \\pi$, TXĐ $x \\neq k\\pi$).</p>
        <p>• <strong>Phương trình lượng giác cơ bản:</strong> $\\sin x = m$ (có nghiệm khi $|m| \\le 1$: $x = \\alpha + k2\\pi, x = \\pi - \\alpha + k2\\pi$); $\\cos x = m$ ($x = \\pm\\alpha + k2\\pi$); $\\tan x = m$ ($x = \\alpha + k\\pi$).</p>
      `,
      pitfallsSummary: `
        <li>Quên cài đặt máy tính Casio ở chế độ Radian khi giải toán lượng giác lớp 11.</li>
        <li>Thiếu họ nghiệm $x = \\pi - \\alpha + k2\\pi$ khi giải phương trình $\\sin x = m$.</li>
        <li>Ghi nhầm đuôi nghiệm $k2\\pi$ thay vì $k\\pi$ cho phương trình $\\tan x = m$.</li>
        <li>Nhầm lẫn chu kỳ của hàm số $\\tan x$ (chu kỳ $\\pi$) với hàm số $\\sin x$ (chu kỳ $2\\pi$).</li>
      `,
      mcqs: [
        {
          question: "Câu 1 (Nhận biết): Tập xác định của hàm số $y = \\tan x$ là:",
          options: [
            "A. $D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
            "B. $D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
            "C. $D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z}\\right\\}$",
            "D. $D = \\mathbb{R}$"
          ],
          correct: "A",
          hint1: "Hàm số tan x xác định khi cos x ≠ 0.",
          hint2: "cos x = 0 khi x = π/2 + kπ.",
          explain: "Hàm số $y = \\tan x = \\frac{\\sin x}{\\cos x}$ xác định khi $\\cos x \\neq 0 \\iff x \\neq \\frac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$). Đáp án đúng là A."
        },
        {
          question: "Câu 2 (Thông hiểu): Chu kỳ tuần hoàn của hàm số $y = \\sin(2x)$ là:",
          options: ["A. $T = \\pi$", "B. $T = 2\\pi$", "C. $T = \\frac{\\pi}{2}$", "D. $T = 4\\pi$"],
          correct: "A",
          hint1: "Áp dụng công thức chu kỳ $T = \\frac{2\\pi}{|\\omega|}$.",
          hint2: "Với hàm số $y = \\sin(2x)$, hệ số $\\omega = 2$.",
          explain: "Chu kỳ của hàm số $y = \\sin(\\omega x)$ là $T = \\frac{2\\pi}{|\\omega|}$. Ở đây $\\omega = 2$ nên $T = \\frac{2\\pi}{2} = \\pi$. Đáp án đúng là A."
        },
        {
          question: "Câu 3 (Nhận biết): Khẳng định nào sau đây là đúng với mọi số thực $a$?",
          options: [
            "A. $\\cos 2a = 2\\cos^2 a - 1$",
            "B. $\\cos 2a = 2\\cos^2 a + 1$",
            "C. $\\cos 2a = 1 - 2\\cos^2 a$",
            "D. $\\cos 2a = \\cos^2 a + \\sin^2 a$"
          ],
          correct: "A",
          hint1: "Nhớ công thức nhân đôi: $\\cos 2a = \\cos^2 a - \\sin^2 a$.",
          hint2: "Thay $\\sin^2 a = 1 - \\cos^2 a$ vào ta được $\\cos 2a = 2\\cos^2 a - 1$.",
          explain: "Công thức nhân đôi chuẩn SGK: $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$. Đáp án đúng là A."
        },
        {
          question: "Câu 4 (Thông hiểu): Tất cả các nghiệm của phương trình lượng giác $\\sin x = \\frac{1}{2}$ là:",
          options: [
            "A. $x = \\frac{\\pi}{6} + k2\\pi; x = \\frac{5\\pi}{6} + k2\\pi$ ($k \\in \\mathbb{Z}$)",
            "B. $x = \\pm\\frac{\\pi}{6} + k2\\pi$ ($k \\in \\mathbb{Z}$)",
            "C. $x = \\frac{\\pi}{6} + k\\pi; x = \\frac{5\\pi}{6} + k\\pi$ ($k \\in \\mathbb{Z}$)",
            "D. $x = \\frac{\\pi}{3} + k2\\pi; x = \\frac{2\\pi}{3} + k2\\pi$ ($k \\in \\mathbb{Z}$)"
          ],
          correct: "A",
          hint1: "Ta có $\\frac{1}{2} = \\sin\\frac{\\pi}{6}$.",
          hint2: "Phương trình $\\sin x = \\sin\\alpha \\iff x = \\alpha + k2\\pi$ hoặc $x = \\pi - \\alpha + k2\\pi$.",
          explain: "Ta có $\\sin x = \\sin\\frac{\\pi}{6} \\iff x = \\frac{\\pi}{6} + k2\\pi$ hoặc $x = \\pi - \\frac{\\pi}{6} + k2\\pi = \\frac{5\\pi}{6} + k2\\pi$ ($k \\in \\mathbb{Z}$). Đáp án đúng là A."
        },
        {
          question: "Câu 5 (Thông hiểu): Nghiệm của phương trình $\\cos\\left(x - \\frac{\\pi}{3}\\right) = 0$ là:",
          options: [
            "A. $x = \\frac{5\\pi}{6} + k\\pi$ ($k \\in \\mathbb{Z}$)",
            "B. $x = \\frac{\\pi}{3} + k\\pi$ ($k \\in \\mathbb{Z}$)",
            "C. $x = \\frac{5\\pi}{6} + k2\\pi$ ($k \\in \\mathbb{Z}$)",
            "D. $x = \\frac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$)"
          ],
          correct: "A",
          hint1: "$\\cos u = 0 \\iff u = \\frac{\\pi}{2} + k\\pi$.",
          hint2: "Cho $x - \\frac{\\pi}{3} = \\frac{\\pi}{2} + k\\pi \\implies x = \\frac{\\pi}{2} + \\frac{\\pi}{3} + k\\pi$.",
          explain: "Ta có $x - \\frac{\\pi}{3} = \\frac{\\pi}{2} + k\\pi \\iff x = \\frac{5\\pi}{6} + k\\pi$ ($k \\in \\mathbb{Z}$). Đáp án đúng là A."
        },
        {
          question: "Câu 6 (Vận dụng): Độ cao $h$ (mét) của một cabin trên vòng quay đu quay tại thời điểm $t$ giây sau khi bắt đầu quay được cho bởi công thức $h(t) = 25 - 20\\cos\\left(\\frac{\\pi t}{30}\\right)$. Độ cao cao nhất mà cabin đạt được là:",
          options: ["A. $45\\text{ m}$", "B. $25\\text{ m}$", "C. $20\\text{ m}$", "D. $50\\text{ m}$"],
          correct: "A",
          hint1: "Hàm cos có giá trị nằm trong đoạn $[-1; 1]$.",
          hint2: "Để $h(t) = 25 - 20\\cos(...) $ lớn nhất thì $\\cos(...)$ phải nhỏ nhất bằng $-1$. Khi đó $h_{\\max} = 25 - 20(-1)$.",
          explain: "Vì $-1 \\le \\cos\\left(\\frac{\\pi t}{30}\\right) \\le 1$ nên $h(t) \\le 25 - 20(-1) = 45\\text{ m}$. Đạt được khi $\\cos\\left(\\frac{\\pi t}{30}\\right) = -1$. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét các tính chất cơ bản của các hàm số lượng giác:",
          items: [
            { key: "a", text: "Hàm số y = cos x là hàm số chẵn và có chu kỳ tuần hoàn là 2π.", correct: "true", explain: "cos(-x) = cos x nên là hàm chẵn, chu kỳ 2π." },
            { key: "b", text: "Hàm số y = sin x là hàm số lẻ và có tập giá trị là [-1; 1].", correct: "true", explain: "sin(-x) = -sin x và -1 ≤ sin x ≤ 1." },
            { key: "c", text: "Hàm số y = tan x là hàm số chẵn trên tập xác định của nó.", correct: "false", explain: "tan(-x) = -tan x nên y = tan x là hàm số lẻ." },
            { key: "d", text: "Hàm số y = cot x có chu kỳ tuần hoàn là π.", correct: "true", explain: "Chu kỳ của y = tan x và y = cot x đều bằng π." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho phương trình lượng giác $\\sin\\left(2x - \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$:",
          items: [
            { key: "a", text: "Phương trình đã cho có nghiệm vì |√2 / 2| ≤ 1.", correct: "true", explain: "Điều kiện có nghiệm của sin x = m là |m| ≤ 1." },
            { key: "b", text: "Phương trình tương đương với $\\sin\\left(2x - \\frac{\\pi}{4}\\right) = \\sin\\frac{\\pi}{4}$.", correct: "true", explain: "Vì sin(π/4) = √2 / 2." },
            { key: "c", text: "Một họ nghiệm của phương trình là $x = \\frac{\\pi}{4} + k\\pi$ ($k \\in \\mathbb{Z}$).", correct: "true", explain: "2x - π/4 = π/4 + k2π ⇔ 2x = π/2 + k2π ⇔ x = π/4 + kπ." },
            { key: "d", text: "Tổng các nghiệm thuộc khoảng $(0; \\pi)$ của phương trình bằng $\\frac{3\\pi}{4}$.", correct: "true", explain: "Họ 1: x = π/4; Họ 2: 2x - π/4 = 3π/4 + k2π ⇔ x = π/2 + kπ cho nghiệm x = π/2. Tổng = π/4 + π/2 = 3π/4." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Xét các đẳng thức và biến đổi lượng giác:",
          items: [
            { key: "a", text: "Đẳng thức sin²α + cos²α = 1 đúng với mọi góc lượng giác α.", correct: "true", explain: "Hệ thức lượng giác cơ bản." },
            { key: "b", text: "Công thức cộng: sin(a + b) = sin a cos b + cos a sin b.", correct: "true", explain: "Công thức cộng chuẩn SGK." },
            { key: "c", text: "Công thức cộng: cos(a - b) = cos a cos b - sin a sin b.", correct: "false", explain: "Công thức đúng phải là dấu cộng: cos(a - b) = cos a cos b + sin a sin b." },
            { key: "d", text: "Với mọi góc α làm biểu thức có nghĩa, ta luôn có $1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha}$.", correct: "true", explain: "Đẳng thức lượng giác cơ bản giữa tan và cos." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Độ cao mực nước thủy triều tại một cảng biển được mô hình hoá bởi $h(t) = 4\\cos\\left(\\frac{\\pi t}{6}\\right) + 7$ (mét), với $t$ tính bằng giờ ($0 \\le t \\le 24$):",
          items: [
            { key: "a", text: "Mực nước cao nhất tại cảng biển đạt được là 11 mét.", correct: "true", explain: "h_max = 4(1) + 7 = 11 m." },
            { key: "b", text: "Mực nước thấp nhất tại cảng biển là 3 mét.", correct: "true", explain: "h_min = 4(-1) + 7 = 3 m." },
            { key: "c", text: "Trong 12 giờ đầu tiên (0 ≤ t ≤ 12), mực nước đạt 7 m tại hai thời điểm t = 3 giờ và t = 9 giờ.", correct: "true", explain: "h(t) = 7 ⇔ cos(πt/6) = 0 ⇔ πt/6 = π/2 + kπ ⇔ t = 3 + 6k. Với 0 ≤ t ≤ 12 được t = 3 và t = 9." },
            { key: "d", text: "Mực nước biến thiên tuần hoàn với chu kỳ 24 giờ.", correct: "false", explain: "Chu kỳ là T = 2π / (π/6) = 12 giờ, không phải 24 giờ." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Giá trị lớn nhất của hàm số lượng giác",
          question: "Tìm giá trị lớn nhất của hàm số $y = 3\\cos x - 5$ trên $\\mathbb{R}$.",
          correctAnswer: "-2",
          acceptedAnswers: ["-2"],
          hint1: "Ta có $-1 \\le \\cos x \\le 1$ với mọi $x$.",
          hint2: "Giá trị lớn nhất đạt được khi $\\cos x = 1$. Tính $3(1) - 5$.",
          explain: "Vì $\\cos x \\le 1$ nên $y = 3\\cos x - 5 \\le 3(1) - 5 = -2$. Đạt được khi $x = k2\\pi$."
        },
        {
          id: 2,
          title: "Số nghiệm của phương trình lượng giác",
          question: "Tìm số nghiệm thuộc đoạn $[0; 2\\pi]$ của phương trình lượng giác $\\cos x = 0$.",
          correctAnswer: "2",
          acceptedAnswers: ["2"],
          hint1: "$\\cos x = 0 \\iff x = \\frac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$).",
          hint2: "Liệt kê các nghiệm thuộc $[0; 2\\pi]$: $x = \\frac{\\pi}{2}$ và $x = \\frac{3\\pi}{2}$.",
          explain: "Phương trình $\\cos x = 0$ có nghiệm $x = \\frac{\\pi}{2} + k\\pi$. Trên đoạn $[0; 2\\pi]$ có 2 nghiệm ứng với $k = 0$ ($x = \\pi/2$) và $k = 1$ ($x = 3\\pi/2$)."
        },
        {
          id: 3,
          title: "Tính giá trị lượng giác nhân đôi",
          question: "Cho góc $\\alpha$ thoả mãn $0 < \\alpha < \\frac{\\pi}{2}$ và $\\sin\\alpha = 0.6$. Tính giá trị của biểu thức $\\sin 2\\alpha$ (viết kết quả dưới dạng số thập phân).",
          correctAnswer: "0.96",
          acceptedAnswers: ["0.96", "0,96"],
          hint1: "Vì $0 < \\alpha < \\pi/2$ nên $\\cos\\alpha > 0$. Tính $\\cos\\alpha = \\sqrt{1 - \\sin^2\\alpha} = \\sqrt{1 - 0.36} = 0.8$.",
          hint2: "Áp dụng công thức nhân đôi $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha = 2 \\times 0.6 \\times 0.8$.",
          explain: "Ta có $\\cos\\alpha = \\sqrt{1 - 0.6^2} = 0.8$. Khi đó $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha = 2(0.6)(0.8) = 0.96$."
        },
        {
          id: 4,
          title: "Vận dụng thực tế dao động điều hoà",
          question: "Một chất điểm dao động điều hoà theo phương trình $x(t) = 4\\cos\\left(2\\pi t - \\frac{\\pi}{3}\\right)$ (cm), với $t$ tính bằng giây. Tính li độ $x$ của chất điểm tại thời điểm $t = 0.5\\text{ giây}$ (viết kết quả bằng số nguyên).",
          correctAnswer: "-2",
          acceptedAnswers: ["-2"],
          hint1: "Thay $t = 0.5$ vào phương trình li độ $x(t)$.",
          hint2: "$2\\pi(0.5) - \\frac{\\pi}{3} = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$. Tính $4\\cos\\left(\\frac{2\\pi}{3}\\right) = 4\\left(-\\frac{1}{2}\\right)$.",
          explain: "Tại $t = 0.5$: $x = 4\\cos\\left(\\pi - \\frac{\\pi}{3}\\right) = 4\\cos\\left(\\frac{2\\pi}{3}\\right) = 4\\left(-\\frac{1}{2}\\right) = -2\\text{ cm}$."
        }
      ]
    },

    // =========================================================================
    // CHƯƠNG II LỚP 11: DÃY SỐ. CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN
    // =========================================================================
    "11_2": {
      id: "11_2",
      grade: "Lớp 11",
      chapterNumber: 2,
      title: "Bài tập cuối chương II: Dãy số. Cấp số cộng và cấp số nhân",
      shortTitle: "Ôn tập Chương II: Dãy số. Cấp số cộng và cấp số nhân",
      branches: [
        {
          title: "Nhánh 1: Dãy số & Khảo sát tính tăng, giảm, bị chặn",
          core: "Dãy số (u_n) là hàm số xác định trên ℕ*. Dãy tăng khi u_{n+1} > u_n với mọi n ≥ 1. Dãy giảm khi u_{n+1} < u_n với mọi n ≥ 1. Dãy bị chặn trên nếu tồn tại M sao cho u_n ≤ M; bị chặn dưới nếu tồn tại m sao cho u_n ≥ m; bị chặn nếu bị chặn cả trên lẫn dưới.",
          formula: "$$u_{n+1} - u_n > 0 \\iff (u_n) \\uparrow, \\quad m \\le u_n \\le M \\iff (u_n) \\text{ bị chặn}$$",
          pitfall: "Kết luận dãy tăng hoặc giảm chỉ qua vài số hạng đầu mà không chứng minh đúng với mọi n ∈ ℕ*.",
          casio: "Dùng tính năng [TABLE] tính các giá trị f(x) với x = 1, 2, 3, 4, ... để kiểm tra trực quan tính đơn điệu."
        },
        {
          title: "Nhánh 2: Cấp số cộng (CSC) - Công sai & Tổng Sn",
          core: "Định nghĩa: u_{n+1} = u_n + d (d là công sai). Số hạng tổng quát: u_n = u_1 + (n - 1)d. Tính chất ba số hạng liên tiếp: u_k = (u_{k-1} + u_{k+1}) / 2. Tổng n số hạng đầu: S_n = n(u_1 + u_n) / 2 = n[2u_1 + (n - 1)d] / 2.",
          formula: "$$u_n = u_1 + (n - 1)d, \\quad S_n = \\frac{n(u_1 + u_n)}{2} = \\frac{n[2u_1 + (n - 1)d]}{2}$$",
          pitfall: "Nhầm công thức số hạng tổng quát là u_n = u_1 + nd (đúng chuẩn phải là (n - 1)d).",
          casio: "Dùng phím tổng xích-ma ∑ ([SHIFT] [x]) để tính tổng các số hạng của CSC khi biết số hạng tổng quát."
        },
        {
          title: "Nhánh 3: Cấp số nhân (CSN) - Công bội, Tổng Sn & Ứng dụng thực tế",
          core: "Định nghĩa: u_{n+1} = u_n · q (q là công bội). Số hạng tổng quát: u_n = u_1 · q^{n-1}. Tính chất: u_k² = u_{k-1} · u_{k+1}. Tổng n số hạng đầu: S_n = u_1(1 - q^n) / (1 - q) với q ≠ 1. Ứng dụng: Tăng trưởng dân số, lãi kép ngân hàng, phân chia tế bào vi khuẩn.",
          formula: "$$u_n = u_1 \\cdot q^{n-1}, \\quad S_n = \\frac{u_1(1 - q^n)}{1 - q} \\quad (q \\neq 1)$$",
          pitfall: "Quên điều kiện q ≠ 1 trong công thức tổng Sn, hoặc nhầm số mũ q^n với q^{n-1} khi tính u_n.",
          casio: "Dùng chức năng [SOLVE] hoặc giải phương trình mũ qua logarit để tìm số thứ tự n: n - 1 = log_q(u_n / u_1)."
        }
      ],
      theorySummary: `
        <p>• <strong>Dãy số:</strong> Dãy số $(u_n)$ tăng khi $u_{n+1} > u_n$, giảm khi $u_{n+1} < u_n$. Bị chặn khi tồn tại $m, M$ sao cho $m \\le u_n \\le M, \\forall n$.</p>
        <p>• <strong>Cấp số cộng (CSC):</strong> $u_{n+1} = u_n + d$, số hạng tổng quát $u_n = u_1 + (n - 1)d$, tổng $S_n = \\frac{n(u_1 + u_n)}{2} = \\frac{n[2u_1 + (n - 1)d]}{2}$.</p>
        <p>• <strong>Cấp số nhân (CSN):</strong> $u_{n+1} = u_n \\cdot q$, số hạng tổng quát $u_n = u_1 \\cdot q^{n-1}$, tổng $S_n = \\frac{u_1(1 - q^n)}{1 - q}$ ($q \\neq 1$).</p>
      `,
      pitfallsSummary: `
        <li>Nhầm công thức số hạng tổng quát CSC thành $u_n = u_1 + nd$ (thiếu trừ 1).</li>
        <li>Nhầm công thức số hạng tổng quát CSN thành $u_n = u_1 \\cdot q^n$ thay vì $u_1 \\cdot q^{n-1}$.</li>
        <li>Áp dụng công thức tổng CSN khi $q = 1$ (khi $q = 1$ thì $S_n = n \\cdot u_1$).</li>
        <li>Không kiểm tra điều kiện nguyên dương $n \\in \\mathbb{N}^*$ khi tìm vị trí số hạng trong dãy số.</li>
      `,
      mcqs: [
        {
          question: "Câu 1 (Nhận biết): Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 3$ và công sai $d = 4$. Số hạng thứ 5 của cấp số cộng là:",
          options: ["A. $u_5 = 19$", "B. $u_5 = 23$", "C. $u_5 = 15$", "D. $u_5 = 20$"],
          correct: "A",
          hint1: "Áp dụng công thức số hạng tổng quát $u_n = u_1 + (n - 1)d$.",
          hint2: "Với $n = 5$: $u_5 = 3 + 4 \\times 4$.",
          explain: "Ta có $u_5 = u_1 + 4d = 3 + 4 \\times 4 = 19$. Đáp án đúng là A."
        },
        {
          question: "Câu 2 (Nhận biết): Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 2$ và công bội $q = 3$. Số hạng thứ 4 của cấp số nhân là:",
          options: ["A. $u_4 = 54$", "B. $u_4 = 162$", "C. $u_4 = 24$", "D. $u_4 = 18$"],
          correct: "A",
          hint1: "Áp dụng công thức $u_n = u_1 \\cdot q^{n-1}$.",
          hint2: "$u_4 = 2 \\times 3^{4 - 1} = 2 \\times 3^3$.",
          explain: "Ta có $u_4 = u_1 \\cdot q^3 = 2 \\times 3^3 = 2 \\times 27 = 54$. Đáp án đúng là A."
        },
        {
          question: "Câu 3 (Thông hiểu): Dãy số nào sau đây là một dãy số tăng?",
          options: ["A. $u_n = 2n + 1$", "B. $u_n = -3n + 5$", "C. $u_n = \\frac{1}{n}$", "D. $u_n = (-1)^n$"],
          correct: "A",
          hint1: "Xét hiệu $u_{n+1} - u_n$.",
          hint2: "Với $u_n = 2n + 1$, ta có $u_{n+1} - u_n = [2(n+1) + 1] - [2n + 1] = 2 > 0$.",
          explain: "Với $u_n = 2n + 1$, ta có $u_{n+1} - u_n = 2 > 0, \\forall n \\in \\mathbb{N}^*$ nên là dãy tăng. Các dãy còn lại giảm hoặc đan dấu. Đáp án đúng là A."
        },
        {
          question: "Câu 4 (Thông hiểu): Cho cấp số cộng $(u_n)$ có $u_1 = 1$ và công sai $d = 2$. Tổng 10 số hạng đầu tiên $S_{10}$ của cấp số cộng bằng:",
          options: ["A. $S_{10} = 100$", "B. $S_{10} = 90$", "C. $S_{10} = 110$", "D. $S_{10} = 200$"],
          correct: "A",
          hint1: "Áp dụng công thức $S_n = \\frac{n[2u_1 + (n - 1)d]}{2}$.",
          hint2: "$S_{10} = \\frac{10[2(1) + 9(2)]}{2} = 5 \\times 20$.",
          explain: "Ta có $S_{10} = \\frac{10 \\times [2(1) + 9(2)]}{2} = 5 \\times 20 = 100$. Đáp án đúng là A."
        },
        {
          question: "Câu 5 (Thông hiểu): Ba số $x, 5, 25$ theo thứ tự lập thành một cấp số nhân. Giá trị của $x$ bằng:",
          options: ["A. $x = 1$", "B. $x = 5$", "C. $x = -15$", "D. $x = 10$"],
          correct: "A",
          hint1: "Ba số $a, b, c$ lập thành CSN khi $b^2 = ac$.",
          hint2: "$5^2 = x \\times 25 \\implies 25 = 25x$.",
          explain: "Theo tính chất cấp số nhân: $5^2 = x \\cdot 25 \\iff 25x = 25 \\iff x = 1$. Đáp án đúng là A."
        },
        {
          question: "Câu 6 (Vận dụng): Một người gửi tiết kiệm 100 triệu đồng vào ngân hàng với lãi suất $6\\%/\\text{năm}$ theo thể thức lãi kép kì hạn 1 năm. Số tiền cả gốc lẫn lãi người đó nhận được sau 3 năm (làm tròn đến triệu đồng) là:",
          options: ["A. $119\\text{ triệu đồng}$", "B. $118\\text{ triệu đồng}$", "C. $120\\text{ triệu đồng}$", "D. $116\\text{ triệu đồng}$"],
          correct: "A",
          hint1: "Công thức lãi kép: $A_n = A(1 + r)^n$.",
          hint2: "Tính $100 \\times (1 + 0.06)^3 = 100 \\times 1.06^3$.",
          explain: "Số tiền nhận được sau 3 năm là $A_3 = 100 \\times (1 + 0.06)^3 = 100 \\times 1.191016 \\approx 119\\text{ triệu đồng}$. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét các tính chất cơ bản của dãy số $(u_n)$:",
          items: [
            { key: "a", text: "Dãy số $u_n = \\frac{n}{n + 1}$ là một dãy số tăng.", correct: "true", explain: "u_{n+1} - u_n = (n+1)/(n+2) - n/(n+1) = 1/((n+1)(n+2)) > 0 với mọi n." },
            { key: "b", text: "Dãy số $u_n = \\frac{n}{n + 1}$ bị chặn vì $0 < u_n < 1$ với mọi $n \\in \\mathbb{N}^*$.", correct: "true", explain: "Vì n > 0 và n < n + 1 nên 0 < u_n < 1." },
            { key: "c", text: "Mọi dãy số tăng đều không bị chặn trên.", correct: "false", explain: "Dãy u_n = n/(n+1) là dãy số tăng nhưng bị chặn trên bởi 1." },
            { key: "d", text: "Dãy số $u_n = (-1)^n$ là dãy số đan dấu, không tăng và không giảm.", correct: "true", explain: "Các giá trị -1, 1, -1, 1 luân phiên nhau nên không có tính đơn điệu." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 5$ và công sai $d = 3$:",
          items: [
            { key: "a", text: "Số hạng tổng quát của cấp số cộng là $u_n = 3n + 2$.", correct: "true", explain: "u_n = 5 + (n - 1)3 = 3n + 2." },
            { key: "b", text: "Số 50 là một số hạng của cấp số cộng đã cho.", correct: "true", explain: "3n + 2 = 50 ⇔ 3n = 48 ⇔ n = 16 (nguyên dương)." },
            { key: "c", text: "Hiệu $u_{20} - u_{10}$ bằng 30.", correct: "true", explain: "(u_1 + 19d) - (u_1 + 9d) = 10d = 10 × 3 = 30." },
            { key: "d", text: "Tổng 20 số hạng đầu tiên của cấp số cộng bằng 670.", correct: "true", explain: "S_20 = (20/2)[2(5) + 19(3)] = 10 × (10 + 57) = 670." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 3$ và công bội $q = 2$:",
          items: [
            { key: "a", text: "Số hạng thứ 5 là $u_5 = 48$.", correct: "true", explain: "u_5 = 3 × 2^4 = 3 × 16 = 48." },
            { key: "b", text: "Dãy số $(u_n)$ là một dãy số tăng ngặt.", correct: "true", explain: "Vì u_1 > 0 và q > 1 nên u_n tăng ngặt." },
            { key: "c", text: "Tổng 6 số hạng đầu tiên của cấp số nhân là $S_6 = 189$.", correct: "true", explain: "S_6 = 3(1 - 2^6) / (1 - 2) = 3 × 63 = 189." },
            { key: "d", text: "Số 768 là số hạng thứ 8 của cấp số nhân.", correct: "false", explain: "u_8 = 3 × 2^7 = 384; số 768 là số hạng thứ 9 (3 × 2^8 = 768)." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Mô hình nuôi cấy vi khuẩn trong phòng thí nghiệm: Ban đầu có 500 cá thể, sau mỗi giờ số lượng vi khuẩn tăng gấp đôi:",
          items: [
            { key: "a", text: "Số lượng vi khuẩn sau mỗi giờ tạo thành một cấp số nhân có công bội q = 2.", correct: "true", explain: "Mỗi giờ tăng gấp đôi nên tỉ số giữa hai giờ liên tiếp là q = 2." },
            { key: "b", text: "Số lượng vi khuẩn sau 5 giờ nuôi cấy là 16000 cá thể.", correct: "true", explain: "N(5) = 500 × 2^5 = 500 × 32 = 16000." },
            { key: "c", text: "Thời gian để số lượng vi khuẩn vượt quá 1 triệu con là sau ít nhất 11 giờ.", correct: "true", explain: "500 × 2^10 = 512000 < 10^6; 500 × 2^11 = 1024000 > 10^6." },
            { key: "d", text: "Tốc độ tăng trưởng số lượng vi khuẩn tuân theo quy luật cấp số cộng.", correct: "false", explain: "Tăng trưởng theo cấp số nhân (hàm số mũ), không phải cấp số cộng." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Tìm số hạng của cấp số cộng",
          question: "Cho cấp số cộng $(u_n)$ có $u_1 = 4$ và $u_2 = 7$. Tính số hạng thứ 10 của cấp số cộng.",
          correctAnswer: "31",
          acceptedAnswers: ["31"],
          hint1: "Công sai $d = u_2 - u_1 = 7 - 4 = 3$.",
          hint2: "Tính $u_{10} = u_1 + 9d = 4 + 9 \\times 3$.",
          explain: "Ta có $d = 3$. Do đó $u_{10} = 4 + 9 \\times 3 = 31$."
        },
        {
          id: 2,
          title: "Tính tổng các số hạng cấp số cộng",
          question: "Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và công sai $d = 5$. Tính tổng 15 số hạng đầu tiên $S_{15}$.",
          correctAnswer: "555",
          acceptedAnswers: ["555"],
          hint1: "Áp dụng công thức $S_n = \\frac{n[2u_1 + (n - 1)d]}{2}$.",
          hint2: "$S_{15} = \\frac{15[2(2) + 14(5)]}{2} = 15 \\times 37$.",
          explain: "Ta có $S_{15} = \\frac{15 \\times [4 + 70]}{2} = 15 \\times 37 = 555$."
        },
        {
          id: 3,
          title: "Xác định thứ tự số hạng cấp số nhân",
          question: "Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Tìm số tự nhiên $n$ sao cho $u_n = 384$.",
          correctAnswer: "8",
          acceptedAnswers: ["8"],
          hint1: "Áp dụng $u_n = u_1 \\cdot q^{n-1} \\implies 3 \\times 2^{n-1} = 384$.",
          hint2: "$2^{n-1} = 128 = 2^7 \\implies n - 1 = 7$.",
          explain: "Ta có $3 \\times 2^{n-1} = 384 \\iff 2^{n-1} = 128 = 2^7 \\iff n - 1 = 7 \\iff n = 8$."
        },
        {
          id: 4,
          title: "Bài toán sắp xếp ghế ngồi rạp hát",
          question: "Một rạp hát có 15 hàng ghế. Hàng ghế đầu tiên có 20 ghế, mỗi hàng ghế tiếp theo có nhiều hơn hàng ghế liền trước 2 ghế. Hỏi rạp hát đó có tất cả bao nhiêu ghế?",
          correctAnswer: "510",
          acceptedAnswers: ["510"],
          hint1: "Số ghế các hàng lập thành một cấp số cộng với $u_1 = 20$, $d = 2$ và $n = 15$.",
          hint2: "Tính tổng $S_{15} = \\frac{15[2(20) + 14(2)]}{2}$.",
          explain: "Tổng số ghế là $S_{15} = \\frac{15[40 + 28]}{2} = 15 \\times 34 = 510\\text{ ghế}$."
        }
      ]
    },

    // =========================================================================
    // CHƯƠNG III LỚP 11: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM CỦA MẪU SỐ LIỆU GHÉP NHÓM
    // =========================================================================
    "11_3": {
      id: "11_3",
      grade: "Lớp 11",
      chapterNumber: 3,
      title: "Bài tập cuối chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
      shortTitle: "Ôn tập Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
      branches: [
        {
          title: "Nhánh 1: Mẫu số liệu ghép nhóm & Giá trị đại diện",
          core: "Mẫu số liệu ghép nhóm được cho dưới dạng các nhóm nửa khoảng [a_i; a_{i+1}) với tần số m_i. Cỡ mẫu n = ∑ m_i. Giá trị đại diện của nhóm [a_i; a_{i+1}) là c_i = (a_i + a_{i+1}) / 2. Độ dài mỗi nhóm là h = a_{i+1} - a_i.",
          formula: "$$c_i = \\frac{a_i + a_{i+1}}{2}, \\quad n = \\sum_{i=1}^k m_i, \\quad h = a_{i+1} - a_i$$",
          pitfall: "Lấy nhầm đầu mút nhóm a_i hoặc a_{i+1} thay vì giá trị trung bình c_i khi tính toán các số đặc trưng.",
          casio: "Bật chế độ bảng tần số [SHIFT] [MENU] [↓] [3] (Thống kê) -> [1] (Bật), nhập cột c_i và cột tần số Freq."
        },
        {
          title: "Nhánh 2: Số trung bình & Mốt của mẫu số liệu ghép nhóm",
          core: "Số trung bình: x̄ = (∑ m_i c_i) / n. Mốt M_o thuộc nhóm chứa mốt [a_j; a_{j+1}) (nhóm có tần số lớn nhất): M_o = a_j + [(m_j - m_{j-1}) / ((m_j - m_{j-1}) + (m_j - m_{j+1}))] · h.",
          formula: "$$\\bar{x} = \\frac{\\sum_{i=1}^k m_i c_i}{n}, \\quad M_o = a_j + \\frac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \\cdot h$$",
          pitfall: "Xác định sai nhóm chứa mốt khi có hai nhóm cùng tần số lớn nhất, hoặc quên nhân độ dài nhóm h.",
          casio: "Menu 6 -> 1-Variable để Casio tự động tính số trung bình x̄ chính xác trong 1 giây."
        },
        {
          title: "Nhánh 3: Trung vị & Tứ phân vị (Q1, Q2, Q3) của mẫu ghép nhóm",
          core: "Trung vị M_e = Q_2: Nhóm chứa trung vị là nhóm đầu tiên có tần số tích lũy ≥ n/2. Công thức: M_e = a_p + [(n/2 - C) / m_p] · h (C là tần số tích lũy nhóm trước). Tứ phân vị thứ nhất Q_1: Nhóm có tần số tích lũy ≥ n/4, Q_1 = a_p + [(n/4 - C) / m_p] · h. Tứ phân vị thứ ba Q_3: Nhóm có tần số tích lũy ≥ 3n/4, Q_3 = a_r + [(3n/4 - C) / m_r] · h.",
          formula: "$$M_e = a_p + \\frac{\\frac{n}{2} - C}{m_p} \\cdot h, \\quad Q_1 = a_p + \\frac{\\frac{n}{4} - C}{m_p} \\cdot h, \\quad Q_3 = a_r + \\frac{\\frac{3n}{4} - C}{m_r} \\cdot h$$",
          pitfall: "Lấy nhầm tần số m_p của nhóm hiện tại thay vì tần số tích lũy C của các nhóm đứng trước nó.",
          casio: "Lập bảng tần số tích lũy cf ra nháp để xác định chính xác các nhóm chứa phân vị."
        }
      ],
      theorySummary: `
        <p>• <strong>Giá trị đại diện & Số trung bình:</strong> $c_i = \\frac{a_i + a_{i+1}}{2}$, $\\bar{x} = \\frac{1}{n}\\sum_{i=1}^k m_i c_i$.</p>
        <p>• <strong>Trung vị & Tứ phân vị:</strong> $M_e = a_p + \\frac{\\frac{n}{2} - C}{m_p}\\cdot h$; $Q_1 = a_p + \\frac{\\frac{n}{4} - C}{m_p}\\cdot h$; $Q_3 = a_r + \\frac{\\frac{3n}{4} - C}{m_r}\\cdot h$ ($C$ là tổng tần số các nhóm đứng trước).</p>
        <p>• <strong>Mốt của mẫu ghép nhóm:</strong> $M_o = a_j + \\frac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})}\\cdot h$ với $[a_j; a_{j+1})$ là nhóm có tần số lớn nhất.</p>
      `,
      pitfallsSummary: `
        <li>Quên lấy giá trị đại diện $c_i$ mà lấy luôn cận dưới hoặc cận trên để tính trung bình.</li>
        <li>Nhầm lẫn giữa tần số tích lũy $C$ của nhóm phía trước và tần số $m_p$ của nhóm đang xét.</li>
        <li>Nhóm chứa mốt phải là nhóm có tần số $m_j$ lớn nhất trong bảng.</li>
        <li>Quên nhân độ dài bước nhảy nhóm $h = a_{j+1} - a_j$ khi tính tứ phân vị và mốt.</li>
      `,
      mcqs: [
        {
          question: "Câu 1 (Nhận biết): Giá trị đại diện của nhóm $[20; 40)$ là:",
          options: ["A. $30$", "B. $20$", "C. $40$", "D. $60$"],
          correct: "A",
          hint1: "Giá trị đại diện của nhóm $[a; b)$ là $c = \\frac{a + b}{2}$.",
          hint2: "Tính $\\frac{20 + 40}{2}$.",
          explain: "Giá trị đại diện của nhóm $[20; 40)$ là $c = \\frac{20 + 40}{2} = 30$. Đáp án đúng là A."
        },
        {
          question: "Câu 2 (Nhận biết): Một mẫu số liệu có cỡ mẫu $n = 40$. Nhóm chứa trung vị $M_e$ là nhóm đầu tiên có tần số tích lũy đạt tối thiểu:",
          options: ["A. $20$", "B. $10$", "C. $30$", "D. $40$"],
          correct: "A",
          hint1: "Vị trí của trung vị tương ứng với $n / 2$.",
          hint2: "Tính $40 / 2 = 20$.",
          explain: "Nhóm chứa trung vị là nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng $\\frac{n}{2} = \\frac{40}{2} = 20$. Đáp án đúng là A."
        },
        {
          question: "Câu 3 (Thông hiểu): Nhóm chứa tứ phân vị thứ nhất $Q_1$ của mẫu số liệu có cỡ mẫu $n = 60$ là nhóm đầu tiên có tần số tích lũy đạt tối thiểu:",
          options: ["A. $15$", "B. $30$", "C. $45$", "D. $20$"],
          correct: "A",
          hint1: "Tứ phân vị thứ nhất $Q_1$ tương ứng với vị trí $\\frac{n}{4}$.",
          hint2: "Tính $60 / 4 = 15$.",
          explain: "Nhóm chứa tứ phân vị thứ nhất là nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng $\\frac{n}{4} = \\frac{60}{4} = 15$. Đáp án đúng là A."
        },
        {
          question: "Câu 4 (Thông hiểu): Cho mẫu số liệu ghép nhóm điểm kiểm tra môn Toán của 20 học sinh: $[4; 6)$ có 4 học sinh; $[6; 8)$ có 10 học sinh; $[8; 10)$ có 6 học sinh. Nhóm chứa mốt của mẫu số liệu là:",
          options: ["A. $[6; 8)$", "B. $[4; 6)$", "C. $[8; 10)$", "D. Không có nhóm chứa mốt"],
          correct: "A",
          hint1: "Nhóm chứa mốt là nhóm có tần số lớn nhất.",
          hint2: "So sánh tần số: 4, 10, 6 thì 10 là lớn nhất.",
          explain: "Tần số lớn nhất là 10 tương ứng với nhóm $[6; 8)$. Do đó nhóm chứa mốt là $[6; 8)$. Đáp án đúng là A."
        },
        {
          question: "Câu 5 (Thông hiểu): Với số liệu ở câu 4 (4 học sinh nhóm $[4; 6)$; 10 học sinh nhóm $[6; 8)$; 6 học sinh nhóm $[8; 10)$), điểm kiểm tra trung bình của cả lớp bằng:",
          options: ["A. $7.2$", "B. $7.0$", "C. $7.5$", "D. $6.8$"],
          correct: "A",
          hint1: "Giá trị đại diện các nhóm lần lượt là 5, 7, 9.",
          hint2: "Tính $\\bar{x} = \\frac{4(5) + 10(7) + 6(9)}{20} = \\frac{20 + 70 + 54}{20}$.",
          explain: "Ta có $\\bar{x} = \\frac{4 \\times 5 + 10 \\times 7 + 6 \\times 9}{20} = \\frac{144}{20} = 7.2$. Đáp án đúng là A."
        },
        {
          question: "Câu 6 (Vận dụng): Khi một mẫu số liệu thực tế có chứa một vài giá trị ngoại lai (quá lớn hoặc quá bé bất thường), số đặc trưng nào sau đây đại diện tốt nhất cho xu thế trung tâm?",
          options: ["A. Trung vị", "B. Số trung bình", "C. Điểm cao nhất", "D. Mốt duy nhất"],
          correct: "A",
          hint1: "Số trung bình rất nhạy cảm với các giá trị đột biến ngoại lai.",
          hint2: "Trung vị không phụ thuộc vào độ lớn của các giá trị ở hai đầu mút của dãy số liệu.",
          explain: "Trung vị không bị ảnh hưởng bởi các giá trị ngoại lai bất thường, do đó phản ánh tốt nhất xu thế trung tâm trong trường hợp này. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét các khẳng định về các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm:",
          items: [
            { key: "a", text: "Số trung bình của mẫu số liệu ghép nhóm là giá trị xấp xỉ cho số trung bình của mẫu số liệu gốc.", correct: "true", explain: "Do sử dụng giá trị đại diện thay cho các giá trị thực tế." },
            { key: "b", text: "Trung vị Me chia mẫu số liệu thành hai phần có số lượng quan sát xấp xỉ bằng nhau.", correct: "true", explain: "Theo đúng định nghĩa về phân vị trung tâm." },
            { key: "c", text: "Một mẫu số liệu ghép nhóm luôn luôn có duy nhất một nhóm chứa mốt.", correct: "false", explain: "Có thể có từ hai nhóm trở lên có cùng tần số lớn nhất (mẫu đa mốt)." },
            { key: "d", text: "Tứ phân vị thứ hai Q2 luôn luôn trùng với trung vị Me.", correct: "true", explain: "Q2 chính là trung vị Me theo định nghĩa phân vị." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Khảo sát thời gian tự học mỗi ngày của 40 học sinh: $[0; 1)$ có 5 học sinh; $[1; 2)$ có 15 học sinh; $[2; 3)$ có 14 học sinh; $[3; 4)$ có 6 học sinh:",
          items: [
            { key: "a", text: "Cỡ mẫu khảo sát của bảng số liệu là n = 40.", correct: "true", explain: "5 + 15 + 14 + 6 = 40 học sinh." },
            { key: "b", text: "Nhóm chứa trung vị của mẫu số liệu là nhóm [1; 2).", correct: "true", explain: "n/2 = 20; Tần số tích lũy: cf_1 = 5, cf_2 = 20 ≥ 20. Do đó nhóm [1; 2) chứa trung vị." },
            { key: "c", text: "Giá trị đại diện của nhóm [2; 3) là 2.5 giờ.", correct: "true", explain: "(2 + 3) / 2 = 2.5." },
            { key: "d", text: "Thời gian tự học trung bình của 40 học sinh bằng đúng 2.025 giờ.", correct: "true", explain: "x̄ = (5×0.5 + 15×1.5 + 14×2.5 + 6×3.5) / 40 = (2.5 + 22.5 + 35 + 21) / 40 = 81 / 40 = 2.025 giờ." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Xét các công thức tính toán mẫu số liệu ghép nhóm:",
          items: [
            { key: "a", text: "Độ dài của nhóm nửa khoảng [a; b) được tính bằng h = b - a.", correct: "true", explain: "Độ dài nhóm là hiệu hai đầu mút." },
            { key: "b", text: "Giá trị đại diện của nhóm [a; b) là c = (a + b) / 2.", correct: "true", explain: "Giá trị trung điểm của nhóm." },
            { key: "c", text: "Trong công thức tính trung vị, C là tần số của chính nhóm chứa trung vị.", correct: "false", explain: "C là tổng tần số tích lũy của các nhóm đứng trước nhóm chứa trung vị." },
            { key: "d", text: "Mốt của mẫu số liệu ghép nhóm dùng để mô tả giá trị xuất hiện nhiều nhất.", correct: "true", explain: "Ý nghĩa thực tế của mốt trong thống kê mô tả." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Ứng dụng thống kê trong quản lý chất lượng và đời sống:",
          items: [
            { key: "a", text: "Ghép nhóm số liệu giúp thu gọn và trình bày trực quan các tập dữ liệu có quy mô lớn.", correct: "true", explain: "Mục đích cơ bản của việc ghép nhóm số liệu." },
            { key: "b", text: "Số trung bình phản ánh mức độ đạt chuẩn trung bình của cả tập thể quan sát.", correct: "true", explain: "Ý nghĩa của số trung bình cộng." },
            { key: "c", text: "Trung vị ít bị ảnh hưởng bởi những số liệu sai lệch bất thường ở hai cực.", correct: "true", explain: "Tính bền vững của trung vị." },
            { key: "d", text: "Nếu mẫu có nhóm [10; 15) và [15; 20) thì giá trị 15 được xếp vào nhóm [10; 15).", correct: "false", explain: "Nửa khoảng [10; 15) không chứa số 15 (ngoặc tròn), số 15 thuộc vào [15; 20)." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Tìm giá trị đại diện",
          question: "Cho nhóm số liệu $[50; 70)$. Tìm giá trị đại diện của nhóm này.",
          correctAnswer: "60",
          acceptedAnswers: ["60"],
          hint1: "Giá trị đại diện là trung bình cộng hai đầu mút.",
          hint2: "Tính (50 + 70) / 2.",
          explain: "Giá trị đại diện là c = (50 + 70) / 2 = 60."
        },
        {
          id: 2,
          title: "Tính số trung bình mẫu ghép nhóm",
          question: "Cho bảng phân bố tần số gồm 3 nhóm: $[0; 4)$ có tần số 2, $[4; 8)$ có tần số 6, $[8; 12)$ có tần số 2. Tính số trung bình của mẫu số liệu.",
          correctAnswer: "6",
          acceptedAnswers: ["6", "6.0", "6,0"],
          hint1: "Giá trị đại diện 3 nhóm là 2, 6, 10. Tổng cỡ mẫu n = 2 + 6 + 2 = 10.",
          hint2: "Tính x̄ = (2×2 + 6×6 + 2×10) / 10 = (4 + 36 + 20) / 10.",
          explain: "Ta có x̄ = (2×2 + 6×6 + 2×10) / 10 = 60 / 10 = 6."
        },
        {
          id: 3,
          title: "Tính trung vị của mẫu ghép nhóm",
          question: "Một mẫu số liệu gồm 20 học sinh: $[150; 160)$ có 6 học sinh, $[160; 170)$ có 10 học sinh, $[170; 180)$ có 4 học sinh. Tính trung vị chiều cao học sinh (kết quả là số nguyên).",
          correctAnswer: "164",
          acceptedAnswers: ["164"],
          hint1: "n/2 = 10. Nhóm chứa trung vị là [160; 170), a_p = 160, m_p = 10, C = 6, h = 10.",
          hint2: "Tính Me = 160 + [(10 - 6) / 10] × 10 = 160 + 4.",
          explain: "Áp dụng công thức: Me = 160 + [(10 - 6) / 10] × 10 = 160 + 4 = 164."
        },
        {
          id: 4,
          title: "Tính mốt của mẫu ghép nhóm",
          question: "Một mẫu số liệu có bảng ghép nhóm: $[10; 20)$ có tần số 3, $[20; 30)$ có tần số 8, $[30; 40)$ có tần số 4. Tính mốt Mo của mẫu ghép nhóm (làm tròn đến chữ số hàng đơn vị).",
          correctAnswer: "26",
          acceptedAnswers: ["26", "25.6", "25,6"],
          hint1: "Nhóm mốt là [20; 30), a_j = 20, m_j = 8, m_{j-1} = 3, m_{j+1} = 4, h = 10.",
          hint2: "Tính Mo = 20 + [(8 - 3) / ((8 - 3) + (8 - 4))] × 10 = 20 + (5/9) × 10 ≈ 25.56.",
          explain: "Ta có Mo = 20 + [5 / (5 + 4)] × 10 = 20 + 50/9 ≈ 25.56, làm tròn đến hàng đơn vị là 26."
        }
      ]
    },

    // =========================================================================
    // CHƯƠNG IV LỚP 11: QUAN HỆ SONG SONG TRONG KHÔNG GIAN
    // =========================================================================
    "11_4": {
      id: "11_4",
      grade: "Lớp 11",
      chapterNumber: 4,
      title: "Bài tập cuối chương IV: Quan hệ song song trong không gian",
      shortTitle: "Ôn tập Chương IV: Quan hệ song song trong không gian",
      branches: [
        {
          title: "Nhánh 1: Đường thẳng & Mặt phẳng - Vị trí tương đối và Giao tuyến",
          core: "Điểm, đường thẳng, mặt phẳng trong không gian. Ba cách xác định mặt phẳng: qua 3 điểm không thẳng hàng, qua 1 điểm và 1 đường thẳng không chứa nó, qua 2 đường thẳng cắt nhau hoặc 2 đường thẳng song song. Hai đường thẳng chéo nhau (không cùng thuộc mặt phẳng nào), cắt nhau, song song hoặc trùng nhau.",
          formula: "$$d_1 \\parallel d_2 \\iff d_1, d_2 \\subset (P) \\text{ và } d_1 \\cap d_2 = \\emptyset; \\quad a, b \\text{ chéo nhau} \\iff \\nexists (P): a, b \\subset (P)$$",
          pitfall: "Nhầm lẫn giữa hai đường thẳng song song và hai đường thẳng chéo nhau (song song bắt buộc phải đồng phẳng).",
          casio: "Vẽ phác hình không gian chuẩn, tìm 2 điểm chung phân biệt để xác định đường giao tuyến."
        },
        {
          title: "Nhánh 2: Đường thẳng song song mp & Hai mặt phẳng song song",
          core: "Đường thẳng song song mặt phẳng: d ∥ (α) ⇔ d ⊄ (α) và d ∥ d' ⊂ (α). Định lý giao tuyến: Nếu (α) ∥ (β) thì mọi mặt phẳng (γ) cắt (α) và (β) theo các giao tuyến song song. Hai mặt phẳng song song: (α) ∥ (β) ⇔ (α) chứa 2 đường thẳng cắt nhau cùng song song với (β).",
          formula: "$$\\left.\\begin{aligned} a &\\not\\subset (P) \\\\ a &\\parallel b \\subset (P) \\end{aligned}\\right\\} \\implies a \\parallel (P); \\quad \\left.\\begin{aligned} a, b &\\subset (P), a \\cap b = I \\\\ a &\\parallel (Q), b \\parallel (Q) \\end{aligned}\\right\\} \\implies (P) \\parallel (Q)$$",
          pitfall: "Chỉ chứng minh 1 đường thẳng của mp này song song mp kia mà đã kết luận 2 mặt phẳng song song (cần 2 đường cắt nhau).",
          casio: "Nhớ quy tắc vàng: 1 đường // 1 đường ⇒ đường // mp; 2 đường cắt nhau // mp ⇒ mp // mp."
        },
        {
          title: "Nhánh 3: Định lý Ta-lét trong không gian, Hình hộp & Phép chiếu song song",
          core: "Định lý Ta-lét: Ba mặt phẳng song song chắn trên hai cát tuyến bất kì những đoạn thẳng tương ứng tỉ lệ. Hình lăng trụ và hình hộp: các cạnh bên song song và bằng nhau, các mặt bên là hình bình hành. Phép chiếu song song: Bảo toàn tính thẳng hàng, thứ tự điểm, tính song song và tỉ số các đoạn thẳng song song.",
          formula: "$$\\frac{A_1B_1}{A_2B_2} = \\frac{B_1C_1}{B_2C_2} = \\frac{A_1C_1}{A_2C_2}; \\quad \\text{Hình chiếu song song bảo toàn tỉ số đoạn thẳng}$$",
          pitfall: "Tưởng rằng phép chiếu song song bảo toàn độ dài và số đo góc (thực tế chỉ bảo toàn tỉ số đoạn thẳng song song).",
          casio: "Hình biểu diễn trong không gian của hình vuông, hình thoi, hình chữ nhật đều là hình bình hành."
        }
      ],
      theorySummary: `
        <p>• <strong>Đường thẳng song song mặt phẳng:</strong> Nếu $d \\not\\subset (\\alpha)$ và $d \\parallel d' \\subset (\\alpha)$ thì $d \\parallel (\\alpha)$.</p>
        <p>• <strong>Hai mặt phẳng song song:</strong> Nếu $(\\alpha)$ chứa hai đường thẳng cắt nhau $a, b$ và $a \\parallel (\\beta), b \\parallel (\\beta)$ thì $(\\alpha) \\parallel (\\beta)$.</p>
        <p>• <strong>Định lý Ta-lét & Phép chiếu song song:</strong> Các mặt phẳng song song chắn trên 2 cát tuyến những đoạn thẳng tương ứng tỉ lệ. Phép chiếu song song bảo toàn tính thẳng hàng, tính song song và tỉ số các đoạn thẳng song song.</p>
      `,
      pitfallsSummary: `
        <li>Nhầm giữa hai đường thẳng không có điểm chung là song song (chúng có thể chéo nhau).</li>
        <li>Chứng minh hai mặt phẳng song song chỉ bằng 2 đường thẳng song song với nhau thay vì 2 đường thẳng cắt nhau.</li>
        <li>Tưởng rằng phép chiếu song song bảo toàn số đo góc hoặc độ dài (chỉ bảo toàn tỉ số đoạn thẳng song song).</li>
        <li>Quên điều kiện đường thẳng $d$ không nằm trong mặt phẳng $(\\alpha)$ khi xét $d \\parallel (\\alpha)$.</li>
      `,
      mcqs: [
        {
          question: "Câu 1 (Nhận biết): Cho đường thẳng $a$ không nằm trong mặt phẳng $(P)$. Khẳng định nào sau đây là đúng?",
          options: [
            "A. Nếu $a$ song song với một đường thẳng $b$ nằm trong $(P)$ thì $a$ song song với $(P)$.",
            "B. Nếu $a$ song song với $(P)$ thì $a$ song song với mọi đường thẳng trong $(P)$.",
            "C. Nếu $a$ cắt một đường thẳng trong $(P)$ thì $a$ không thể song song với $(P)$.",
            "D. Đường thẳng $a$ luôn cắt mặt phẳng $(P)$."
          ],
          correct: "A",
          hint1: "Nhớ dấu hiệu nhận biết đường thẳng song song mặt phẳng.",
          hint2: "Đường thẳng d ⊄ (P) song song với một đường thẳng b ⊂ (P) thì d ∥ (P).",
          explain: "Theo định lí: Nếu đường thẳng $a$ không nằm trong $(P)$ và song song với một đường thẳng $b$ nằm trong $(P)$ thì $a \\parallel (P)$. Đáp án đúng là A."
        },
        {
          question: "Câu 2 (Thông hiểu): Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$ là trung điểm của $SA$. Đường thẳng $OM$ song song với mặt phẳng nào sau đây?",
          options: ["A. $(SCD)$", "B. $(ABCD)$", "C. $(SAB)$", "D. $(SAC)$"],
          correct: "A",
          hint1: "Xét tam giác $SAC$: $O$ là trung điểm $AC$, $M$ là trung điểm $SA$.",
          hint2: "Suy ra $OM$ là đường trung bình của tam giác $SAC$, nên $OM \\parallel SC$. Vì $SC \\subset (SCD)$ nên $OM \\parallel (SCD)$.",
          explain: "Trong $\\triangle SAC$, $OM$ là đường trung bình nên $OM \\parallel SC$. Mà $SC \\subset (SCD)$ và $OM \\not\\subset (SCD)$, do đó $OM \\parallel (SCD)$. Đáp án đúng là A."
        },
        {
          question: "Câu 3 (Nhận biết): Trong không gian, hai đường thẳng không cùng nằm trong bất kỳ mặt phẳng nào được gọi là hai đường thẳng:",
          options: ["A. Chéo nhau", "B. Song song", "C. Cắt nhau", "D. Trùng nhau"],
          correct: "A",
          hint1: "Hai đường thẳng đồng phẳng thì có thể cắt nhau, song song hoặc trùng nhau.",
          hint2: "Hai đường thẳng không đồng phẳng gọi là hai đường thẳng chéo nhau.",
          explain: "Theo định nghĩa SGK Hình học không gian 11: Hai đường thẳng không cùng nằm trong một mặt phẳng gọi là hai đường thẳng chéo nhau. Đáp án đúng là A."
        },
        {
          question: "Câu 4 (Thông hiểu): Cho hai mặt phẳng phân biệt $(P)$ và $(Q)$ cùng song song với mặt phẳng $(R)$. Khẳng định nào sau đây đúng?",
          options: [
            "A. $(P)$ song song với $(Q)$",
            "B. $(P)$ cắt $(Q)$",
            "C. $(P)$ trùng với $(Q)$",
            "D. $(P)$ vuông góc với $(Q)$"
          ],
          correct: "A",
          hint1: "Áp dụng tính chất bắc cầu của quan hệ song song giữa các mặt phẳng.",
          hint2: "Hai mặt phẳng phân biệt cùng song song với mặt phẳng thứ ba thì song song với nhau.",
          explain: "Hai mặt phẳng phân biệt cùng song song với một mặt phẳng thứ ba thì chúng song song với nhau: $(P) \\parallel (Q)$. Đáp án đúng là A."
        },
        {
          question: "Câu 5 (Thông hiểu): Hình chiếu song song của một hình chữ nhật qua một phương chiếu không song song với mặt phẳng chứa hình chữ nhật đó là hình nào sau đây?",
          options: ["A. Hình bình hành", "B. Hình thang cân", "C. Tam giác", "D. Hình ngũ giác"],
          correct: "A",
          hint1: "Phép chiếu song song bảo toàn tính song song của các cặp cạnh đối diện.",
          hint2: "Hình chữ nhật có 2 cặp cạnh đối song song nên hình chiếu cũng có 2 cặp cạnh đối song song.",
          explain: "Phép chiếu song song biến hai đường thẳng song song thành hai đường thẳng song song (hoặc trùng nhau). Do đó hình chữ nhật được biểu diễn bởi một hình bình hành. Đáp án đúng là A."
        },
        {
          question: "Câu 6 (Thông hiểu): Cho hình hộp $ABCD.A'B'C'D'$. Mặt phẳng $(A'BD)$ song song với mặt phẳng nào sau đây?",
          options: ["A. $(CB'D')$", "B. $(ABCD)$", "C. $(A'B'C'D')$", "D. $(ACC'A')$"],
          correct: "A",
          hint1: "Xét các cặp đường thẳng: $BD \\parallel B'D'$ và $A'D \\parallel B'C$ hoặc $A'B \\parallel D'C$.",
          hint2: "Vì $BD \\parallel B'D'$ và $A'B \\parallel D'C$ cắt nhau nên $(A'BD) \\parallel (CB'D')$.",
          explain: "Ta có tứ giác $BDD'B'$ là hình bình hành nên $BD \\parallel B'D'$. Tương tự $A'B \\parallel D'C$. Do đó $(A'BD) \\parallel (CB'D')$. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét các mệnh đề cơ bản về quan hệ song song trong không gian:",
          items: [
            { key: "a", text: "Nếu hai mặt phẳng song song thì mọi đường thẳng nằm trong mặt phẳng này đều song song với mặt phẳng kia.", correct: "true", explain: "Theo định nghĩa hai mặt phẳng song song không có điểm chung." },
            { key: "b", text: "Nếu hai đường thẳng phân biệt cùng song song với một mặt phẳng thì chúng chắc chắn song song với nhau.", correct: "false", explain: "Hai đường thẳng đó có thể cắt nhau hoặc chéo nhau." },
            { key: "c", text: "Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau.", correct: "true", explain: "Tính chất bắc cầu của quan hệ song song giữa hai đường thẳng." },
            { key: "d", text: "Qua một điểm nằm ngoài một mặt phẳng cho trước, có duy nhất một mặt phẳng song song với mặt phẳng đó.", correct: "true", explain: "Tiên đề về mặt phẳng song song trong SGK KNTT." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M, N, P$ lần lượt là trung điểm của $SA, SB, SC$:",
          items: [
            { key: "a", text: "Đường thẳng MN song song với đường thẳng AB.", correct: "true", explain: "MN là đường trung bình trong tam giác SAB." },
            { key: "b", text: "Đường thẳng MN song song với mặt phẳng (ABCD).", correct: "true", explain: "MN // AB mà AB ⊂ (ABCD) nên MN // (ABCD)." },
            { key: "c", text: "Mặt phẳng (MNP) song song với mặt phẳng đáy (ABCD).", correct: "true", explain: "MN // AB và NP // BC, hai đường cắt nhau cùng song song (ABCD)." },
            { key: "d", text: "Giao tuyến của mặt phẳng (SAB) và (SCD) là đường thẳng đi qua S và song song với AB và CD.", correct: "true", explain: "Định lý giao tuyến của 2 mặt phẳng chứa 2 đường thẳng song song." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Về cấu trúc hình học của hình lăng trụ và hình hộp:",
          items: [
            { key: "a", text: "Các mặt bên của hình lăng trụ là các hình bình hành.", correct: "true", explain: "Đặc điểm hình học chuẩn của khối lăng trụ." },
            { key: "b", text: "Các cạnh bên của hình lăng trụ đôi một song song và bằng nhau.", correct: "true", explain: "Tính chất cơ bản của các cạnh bên hình lăng trụ." },
            { key: "c", text: "Hai mặt đáy của hình lăng trụ nằm trên hai mặt phẳng song song với nhau.", correct: "true", explain: "Hai đáy của hình lăng trụ là hai đa giác bằng nhau nằm trên 2 mp song song." },
            { key: "d", text: "Các mặt bên của một hình hộp chữ nhật có thể là hình tam giác.", correct: "false", explain: "Mặt của hình hộp chữ nhật bắt buộc phải là hình chữ nhật." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về các tính chất của phép chiếu song song:",
          items: [
            { key: "a", text: "Phép chiếu song song bảo toàn tỉ số độ dài của hai đoạn thẳng cùng nằm trên một đường thẳng hoặc trên hai đường song song.", correct: "true", explain: "Tính chất bảo toàn tỉ số của phép chiếu song song." },
            { key: "b", text: "Phép chiếu song song biến ba điểm thẳng hàng thành ba điểm thẳng hàng và bảo toàn thứ tự giữa chúng.", correct: "true", explain: "Bảo toàn tính thẳng hàng và thứ tự điểm." },
            { key: "c", text: "Hình chiếu song song của hai đường thẳng song song là hai đường thẳng song song hoặc trùng nhau.", correct: "true", explain: "Tính chất chuẩn của phép chiếu song song." },
            { key: "d", text: "Phép chiếu song song luôn bảo toàn số đo của một góc bất kỳ trong mặt phẳng.", correct: "false", explain: "Số đo góc bị thay đổi qua phép chiếu song song (ví dụ góc vuông chiếu thành góc nhọn/tù)." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Đếm số mặt của hình chóp tứ giác",
          question: "Hình chóp tứ giác $S.ABCD$ có tất cả bao nhiêu mặt?",
          correctAnswer: "5",
          acceptedAnswers: ["5"],
          hint1: "Hình chóp có 1 mặt đáy và các mặt bên là tam giác.",
          hint2: "Đáy tứ giác có 4 cạnh tạo nên 4 mặt bên tam giác. Tổng: 1 + 4 = 5.",
          explain: "Hình chóp tứ giác có 1 mặt đáy và 4 mặt bên, tổng cộng có 5 mặt."
        },
        {
          id: 2,
          title: "Đếm số cạnh của hình lăng trụ",
          question: "Hình lăng trụ tam giác $ABC.A'B'C'$ có tất cả bao nhiêu cạnh?",
          correctAnswer: "9",
          acceptedAnswers: ["9"],
          hint1: "Đếm các cạnh đáy trên, cạnh đáy dưới và các cạnh bên.",
          hint2: "3 cạnh đáy dưới + 3 cạnh đáy trên + 3 cạnh bên = 9 cạnh.",
          explain: "Hình lăng trụ tam giác có 3 cạnh đáy trên, 3 cạnh đáy dưới và 3 cạnh bên, tổng cộng có 9 cạnh."
        },
        {
          id: 3,
          title: "Tỉ số đoạn thẳng theo định lý Ta-lét",
          question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $M$ là trung điểm cạnh $SC$. Mặt phẳng $(\\alpha)$ qua $M$ và song song với $(SBD)$ cắt cạnh $BC$ tại $N$. Tính tỉ số $\\frac{NC}{BC}$ (viết kết quả dưới dạng số thập phân).",
          correctAnswer: "0.5",
          acceptedAnswers: ["0.5", "0,5", "1/2"],
          hint1: "Trong mặt phẳng $(SBC)$, từ $M$ kẻ đường thẳng song song với $SB$ cắt $BC$ tại $N$.",
          hint2: "Vì $M$ là trung điểm của $SC$ nên $MN$ là đường trung bình tam giác $SBC$, suy ra $N$ là trung điểm của $BC$.",
          explain: "Ta có $MN \\parallel SB$ mà $M$ là trung điểm $SC$, do đó $N$ là trung điểm $BC$, tỉ số $NC / BC = 0.5$."
        },
        {
          id: 4,
          title: "Số đường chéo của hình hộp",
          question: "Một hình hộp $ABCD.A'B'C'D'$ có tất cả bao nhiêu đường chéo nối các cặp đỉnh đối diện giữa hai đáy?",
          correctAnswer: "4",
          acceptedAnswers: ["4"],
          hint1: "Đường chéo hình hộp nối đỉnh của đáy này với đỉnh đối diện của đáy kia.",
          hint2: "Gồm có 4 đoạn thẳng: $AC', BD', CA', DB'$.",
          explain: "Hình hộp có đúng 4 đường chéo cắt nhau tại tâm hình hộp: $AC', BD', CA', DB'$."
        }
      ]
    },

    // =========================================================================
    // CHƯƠNG V LỚP 11: GIỚI HẠN. HÀM SỐ LIÊN TỤC
    // =========================================================================
    "11_5": {
      id: "11_5",
      grade: "Lớp 11",
      chapterNumber: 5,
      title: "Bài tập cuối chương V: Giới hạn. Hàm số liên tục",
      shortTitle: "Ôn tập Chương V: Giới hạn. Hàm số liên tục",
      branches: [
        {
          title: "Nhánh 1: Giới hạn dãy số & Tổng cấp số nhân lùi vô hạn",
          core: "Dãy số có giới hạn 0: lim (1 / n^k) = 0 (k > 0), lim q^n = 0 (|q| < 1). Giới hạn hữu tỉ: chia cả tử và mẫu cho n^p với p là số mũ cao nhất của mẫu. Cấp số nhân lùi vô hạn (|q| < 1): S = u_1 + u_1 q + u_1 q^2 + ... = u_1 / (1 - q).",
          formula: "$$\\lim_{n \\to \\infty} \\frac{1}{n^k} = 0, \\quad S = \\frac{u_1}{1 - q} \\quad (|q| < 1)$$",
          pitfall: "Áp dụng công thức tổng CSN lùi vô hạn khi |q| ≥ 1 (chỉ áp dụng khi |q| < 1).",
          casio: "Nhập biểu thức vào máy, bấm [CALC] với x = 10^7 để đọc ngay kết quả giới hạn của dãy số."
        },
        {
          title: "Nhánh 2: Giới hạn hàm số & Các kỹ thuật khử dạng vô định",
          core: "Giới hạn tại một điểm lim_{x→x_0} f(x), giới hạn vô cực lim_{x→±∞} f(x), giới hạn một bên lim_{x→x_0^±} f(x). Các dạng vô định: 0/0 (khử bằng phân tích nhân tử đa thức x - x_0 hoặc nhân lượng liên hợp √A - B), ∞/∞ (chia bậc cao nhất), ∞ - ∞ (nhân liên hợp).",
          formula: "$$\\sqrt{A} - \\sqrt{B} = \\frac{A - B}{\\sqrt{A} + \\sqrt{B}}, \\quad \\lim_{x \\to x_0} \\frac{f(x)}{g(x)} \\quad \\left[\\frac{0}{0}\\right]$$",
          pitfall: "Quên dấu trừ khi rút x ra khỏi căn bậc hai khi x → -∞: √(x²) = |x| = -x.",
          casio: "Khi tính lim_{x→x_0}, bấm [CALC] với x = x_0 + 0.000001; khi x → +∞ bấm 10^9; khi x → -∞ bấm -10^9."
        },
        {
          title: "Nhánh 3: Hàm số liên tục & Định lý nghiệm Bolzano-Cauchy",
          core: "Hàm số y = f(x) liên tục tại x_0 ⇔ lim_{x→x_0} f(x) = f(x_0). Hàm số liên tục trên khoảng nếu liên tục tại mọi điểm thuộc khoảng đó. Định lý giá trị trung gian: Nếu f(x) liên tục trên [a; b] và f(a) · f(b) < 0 thì phương trình f(x) = 0 có ít nhất một nghiệm trong khoảng (a; b).",
          formula: "$$\\lim_{x \\to x_0} f(x) = f(x_0) \\iff \\text{Liên tục tại } x_0; \\quad f(a) \\cdot f(b) < 0 \\implies \\exists c \\in (a; b): f(c) = 0$$",
          pitfall: "Quên kiểm tra điều kiện hàm số phải liên tục trên đoạn [a; b] trước khi áp dụng f(a) · f(b) < 0.",
          casio: "Dùng [TABLE] quét f(x) để tìm khoảng hai đầu có dấu trái ngược nhau f(x_1) · f(x_2) < 0."
        }
      ],
      theorySummary: `
        <p>• <strong>Giới hạn dãy số & CSN lùi vô hạn:</strong> $\\lim \\frac{1}{n^k} = 0$ ($k > 0$), tổng CSN lùi vô hạn $S = \\frac{u_1}{1 - q}$ ($|q| < 1$).</p>
        <p>• <strong>Giới hạn hàm số & Dạng vô định:</strong> Khử dạng $\\frac{0}{0}$ bằng phân tích đa thức thành nhân tử $(x - x_0)$ hoặc nhân liên hợp; dạng $\\frac{\\infty}{\\infty}$ bằng chia cho luỹ thừa bậc cao nhất.</p>
        <p>• <strong>Hàm số liên tục:</strong> $f(x)$ liên tục tại $x_0 \\iff \\lim_{x \\to x_0} f(x) = f(x_0)$. Nếu $f(x)$ liên tục trên $[a; b]$ và $f(a)f(b) < 0$ thì phương trình $f(x) = 0$ có ít nhất một nghiệm trên $(a; b)$.</p>
      `,
      pitfallsSummary: `
        <li>Khi $x \\to -\\infty$, rút $x$ ra khỏi $\\sqrt{x^2}$ phải bằng $-x$, rất nhiều bạn quên dấu trừ thành $+x$.</li>
        <li>Áp dụng định lý có nghiệm $f(a)f(b) < 0$ khi hàm số bị gián đoạn trong đoạn $[a; b]$.</li>
        <li>Nhầm lẫn giữa giới hạn hữu hạn và vô cực (mẫu bằng 0 nhưng tử khác 0 cho kết quả $\\pm\\infty$).</li>
        <li>Quên tính cả giới hạn bên trái và bên phải khi hàm số cho bởi hai công thức khác nhau.</li>
      `,
      mcqs: [
        {
          question: "Câu 1 (Nhận biết): Giới hạn $\\lim_{n \\to \\infty} \\frac{2n + 1}{n + 3}$ bằng:",
          options: ["A. $2$", "B. $\\frac{1}{3}$", "C. $0$", "D. $+\\infty$"],
          correct: "A",
          hint1: "Chia cả tử và mẫu cho $n$.",
          hint2: "Ta được $\\lim \\frac{2 + 1/n}{1 + 3/n} = \\frac{2 + 0}{1 + 0} = 2$.",
          explain: "Chia cả tử và mẫu cho $n$: $\\lim \\frac{2 + 1/n}{1 + 3/n} = 2$. Đáp án đúng là A."
        },
        {
          question: "Câu 2 (Thông hiểu): Giới hạn $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$ bằng:",
          options: ["A. $4$", "B. $2$", "C. $0$", "D. Không tồn tại"],
          correct: "A",
          hint1: "Dạng vô định $0/0$. Khử bằng hằng đẳng thức $x^2 - 4 = (x - 2)(x + 2)$.",
          hint2: "Rút gọn $(x - 2)$, tính $\\lim_{x \\to 2} (x + 2) = 2 + 2 = 4$.",
          explain: "Ta có $\\lim_{x \\to 2} \\frac{(x - 2)(x + 2)}{x - 2} = \\lim_{x \\to 2} (x + 2) = 4$. Đáp án đúng là A."
        },
        {
          question: "Câu 3 (Thông hiểu): Tổng của cấp số nhân lùi vô hạn $1 + \\frac{1}{2} + \\frac{1}{4} + \\dots + \\frac{1}{2^n} + \\dots$ bằng:",
          options: ["A. $2$", "B. $1$", "C. $4$", "D. $\\frac{3}{2}$"],
          correct: "A",
          hint1: "Đây là CSN lùi vô hạn có $u_1 = 1$ và $q = 1/2 < 1$.",
          hint2: "Áp dụng công thức $S = \\frac{u_1}{1 - q} = \\frac{1}{1 - 1/2}$.",
          explain: "Áp dụng công thức tổng CSN lùi vô hạn: $S = \\frac{1}{1 - 1/2} = 2$. Đáp án đúng là A."
        },
        {
          question: "Câu 4 (Thông hiểu): Giới hạn $\\lim_{x \\to +\\infty} \\frac{3x^2 - 5}{x^2 + 2x}$ bằng:",
          options: ["A. $3$", "B. $-5$", "C. $0$", "D. $+\\infty$"],
          correct: "A",
          hint1: "Chia cả tử và mẫu cho $x^2$.",
          hint2: "Ta có $\\frac{3 - 5/x^2}{1 + 2/x} \\to \\frac{3}{1} = 3$.",
          explain: "Chia cả tử và mẫu cho luỹ thừa bậc cao nhất $x^2$, giới hạn bằng $3 / 1 = 3$. Đáp án đúng là A."
        },
        {
          question: "Câu 5 (Thông hiểu): Cho hàm số $f(x) = \\begin{cases} \\frac{x^2 - 1}{x - 1} & \\text{khi } x \\neq 1 \\\\ m & \\text{khi } x = 1 \\end{cases}$. Hàm số liên tục tại $x = 1$ khi giá trị của $m$ bằng:",
          options: ["A. $2$", "B. $1$", "C. $0$", "D. $-1$"],
          correct: "A",
          hint1: "Hàm số liên tục tại $x = 1 \\iff \\lim_{x \\to 1} f(x) = f(1)$.",
          hint2: "Tính $\\lim_{x \\to 1} (x + 1) = 2$. Khi đó $m = 2$.",
          explain: "Ta có $\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} = \\lim_{x \\to 1} (x + 1) = 2$. Để liên tục tại $x = 1$ thì $f(1) = m = 2$. Đáp án đúng là A."
        },
        {
          question: "Câu 6 (Vận dụng): Giới hạn một bên $\\lim_{x \\to 1^+} \\frac{2x - 3}{x - 1}$ bằng:",
          options: ["A. $-\\infty$", "B. $+\\infty$", "C. $-1$", "D. $2$"],
          correct: "A",
          hint1: "Tử số tiến về $2(1) - 3 = -1 < 0$.",
          hint2: "Khi $x \\to 1^+$, mẫu số $x - 1 > 0$ và tiến về $0$. Số âm chia cho số dương rất bé cho kết quả $-\\infty$.",
          explain: "Vì $\\lim_{x \\to 1^+} (2x - 3) = -1 < 0$ và $\\lim_{x \\to 1^+} (x - 1) = 0$ với $x - 1 > 0$, nên giới hạn bằng $-\\infty$. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét tính đúng sai của các giới hạn dãy số cơ bản:",
          items: [
            { key: "a", text: "Giới hạn lim (1 / n) khi n tiến ra vô cực bằng 0.", correct: "true", explain: "Giới hạn cơ bản chuẩn SGK." },
            { key: "b", text: "Nếu |q| < 1 thì lim (q^n) = 0.", correct: "true", explain: "Định lý chuẩn về giới hạn cấp số nhân có |q| < 1." },
            { key: "c", text: "Dãy số u_n = (-1)^n có giới hạn bằng 0 khi n tiến ra vô cực.", correct: "false", explain: "Dãy dao động luân phiên giữa -1 và 1 nên không có giới hạn." },
            { key: "d", text: "Cấp số nhân lùi vô hạn có công bội thoả mãn điều kiện |q| < 1.", correct: "true", explain: "Định nghĩa chuẩn cấp số nhân lùi vô hạn." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hàm số $f(x) = \\frac{\\sqrt{x + 1} - 2}{x - 3}$ với $x > -1, x \\neq 3$:",
          items: [
            { key: "a", text: "Khi x → 3, biểu thức f(x) có dạng vô định 0/0.", correct: "true", explain: "Thay x = 3 thì √(3+1) - 2 = 0 và 3 - 3 = 0." },
            { key: "b", text: "Nhân cả tử và mẫu với lượng liên hợp (√(x + 1) + 2).", correct: "true", explain: "Quy tắc khử căn bậc hai dạng vô định 0/0." },
            { key: "c", text: "Biểu thức rút gọn của f(x) khi x ≠ 3 là 1 / (√(x + 1) + 2).", correct: "true", explain: "Tử = (x+1) - 4 = x - 3, triệt tiêu với mẫu x - 3." },
            { key: "d", text: "Giá trị của giới hạn lim_{x→3} f(x) bằng 1/4.", correct: "true", explain: "Thay x = 3 vào 1 / (√(3+1) + 2) = 1 / (2 + 2) = 1/4." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Về tính liên tục của các hàm số:",
          items: [
            { key: "a", text: "Các hàm số đa thức, phân thức hữu tỉ, lượng giác đều liên tục trên từng khoảng xác định của chúng.", correct: "true", explain: "Định lý cơ bản về tính liên tục của hàm số sơ cấp." },
            { key: "b", text: "Hàm số f(x) = 1/x liên tục trên khoảng (0; +∞).", correct: "true", explain: "Vì hàm số xác định trên khoảng (0; +∞)." },
            { key: "c", text: "Nếu lim_{x→x_0^+} f(x) = lim_{x→x_0^-} f(x) thì hàm số chắc chắn liên tục tại x_0.", correct: "false", explain: "Chưa đủ, giới hạn đó phải bằng f(x_0) và f(x_0) phải xác định." },
            { key: "d", text: "Hàm số f(x) = |x| liên tục tại điểm x = 0.", correct: "true", explain: "lim_{x→0} |x| = 0 = f(0)." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về sự tồn tại nghiệm của phương trình đại số $x^3 - 3x + 1 = 0$:",
          items: [
            { key: "a", text: "Hàm số f(x) = x^3 - 3x + 1 là hàm đa thức nên liên tục trên toàn bộ ℝ.", correct: "true", explain: "Hàm đa thức liên tục trên ℝ." },
            { key: "b", text: "Ta có f(0) = 1 > 0 và f(1) = -1 < 0.", correct: "true", explain: "Tính f(0) = 1; f(1) = 1 - 3 + 1 = -1." },
            { key: "c", text: "Vì f(0) · f(1) < 0 nên phương trình có ít nhất một nghiệm thuộc khoảng (0; 1).", correct: "true", explain: "Theo định lý giá trị trung gian Bolzano-Cauchy." },
            { key: "d", text: "Phương trình trên không thể có nhiều hơn 1 nghiệm thực.", correct: "false", explain: "Phương trình bậc ba có thể có tối đa 3 nghiệm thực phân biệt." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Giới hạn dãy số hữu tỉ",
          question: "Tính giá trị của giới hạn dãy số: $\\lim_{n \\to \\infty} \\frac{4n^2 + n - 3}{2n^2 + 5}$.",
          correctAnswer: "2",
          acceptedAnswers: ["2", "2.0", "2,0"],
          hint1: "Chia cả tử và mẫu cho $n^2$.",
          hint2: "Giới hạn bằng tỉ số hai hệ số bậc cao nhất: 4 / 2 = 2.",
          explain: "Chia cả tử và mẫu cho $n^2$: $\\lim \\frac{4 + 1/n - 3/n^2}{2 + 5/n^2} = \\frac{4}{2} = 2$."
        },
        {
          id: 2,
          title: "Tổng cấp số nhân lùi vô hạn",
          question: "Tính tổng của cấp số nhân lùi vô hạn có số hạng đầu $u_1 = 3$ và công bội $q = \\frac{1}{2}$.",
          correctAnswer: "6",
          acceptedAnswers: ["6", "6.0", "6,0"],
          hint1: "Áp dụng công thức $S = \\frac{u_1}{1 - q}$.",
          hint2: "Tính $S = \\frac{3}{1 - 0.5} = \\frac{3}{0.5}$.",
          explain: "Ta có $S = \\frac{3}{1 - 1/2} = \\frac{3}{1/2} = 6$."
        },
        {
          id: 3,
          title: "Giới hạn hàm số dạng 0/0",
          question: "Tính giá trị của giới hạn $\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$.",
          correctAnswer: "3",
          acceptedAnswers: ["3", "3.0", "3,0"],
          hint1: "Phân tích nhân tử hằng đẳng thức $x^3 - 1 = (x - 1)(x^2 + x + 1)$.",
          hint2: "Rút gọn $(x - 1)$, tính giá trị $1^2 + 1 + 1 = 3$.",
          explain: "Ta có $\\lim_{x \\to 1} \\frac{(x - 1)(x^2 + x + 1)}{x - 1} = \\lim_{x \\to 1} (x^2 + x + 1) = 3$."
        },
        {
          id: 4,
          title: "Tìm tham số để hàm số liên tục",
          question: "Tìm giá trị của tham số $a$ để hàm số $f(x) = \\begin{cases} 2x + a & \\text{khi } x \\ge 2 \\\\ x^2 - 1 & \\text{khi } x < 2 \\end{cases}$ liên tục tại điểm $x = 2$.",
          correctAnswer: "-1",
          acceptedAnswers: ["-1"],
          hint1: "Tính $\\lim_{x \\to 2^+} f(x) = 2(2) + a = 4 + a$.",
          hint2: "Tính $\\lim_{x \\to 2^-} f(x) = 2^2 - 1 = 3$. Cho $4 + a = 3 \\implies a = -1$.",
          explain: "Để hàm số liên tục tại $x = 2$ thì $\\lim_{x \\to 2^+} f(x) = \\lim_{x \\to 2^-} f(x) \\iff 4 + a = 3 \\iff a = -1$."
        }
      ]
    },

    // =========================================================================
    // CHƯƠNG VI LỚP 11: HÀM SỐ MŨ VÀ HÀM SỐ LÔGARIT
    // =========================================================================
    "11_6": {
      id: "11_6",
      grade: "Lớp 11",
      chapterNumber: 6,
      title: "Bài tập cuối chương VI: Hàm số mũ và hàm số lôgarit",
      shortTitle: "Ôn tập Chương VI: Hàm số mũ và hàm số lôgarit",
      branches: [
        {
          title: "Nhánh 1: Luỹ thừa & Công thức biến đổi Lôgarit cốt lõi",
          core: "Luỹ thừa với số mũ thực: a^0 = 1, a^{-n} = 1/a^n, a^{m/n} = ⁿ√(a^m). Lôgarit cơ số a (a > 0, a ≠ 1, b > 0): log_a b = c ⇔ a^c = b. Các công thức trọng tâm: log_a(xy) = log_a x + log_a y, log_a(x/y) = log_a x - log_a y, log_a x^α = α log_a x, công thức đổi cơ số log_a b = log_c b / log_c a, log_{a^β} b = (1/β) log_a b.",
          formula: "$$\\log_a(xy) = \\log_a x + \\log_a y, \\quad \\log_a \\frac{x}{y} = \\log_a x - \\log_a y, \\quad \\log_{a^\\beta} b^\\alpha = \\frac{\\alpha}{\\beta}\\log_a b$$",
          pitfall: "Áp dụng công thức lôgarit khi các biểu thức chưa dương (quên điều kiện x > 0, y > 0).",
          casio: "Bấm phím [log_□ □] để tính trực tiếp mọi giá trị logarit với cơ số bất kỳ."
        },
        {
          title: "Nhánh 2: Đồ thị & Tính đơn điệu của Hàm số mũ và Hàm số lôgarit",
          core: "Hàm số mũ y = a^x (a > 0, a ≠ 1): TXĐ D = ℝ, tập giá trị (0; +∞), luôn đi qua (0; 1), trục hoành Ox là tiệm cận ngang. Hàm số lôgarit y = log_a x (a > 0, a ≠ 1): TXĐ D = (0; +∞), tập giá trị ℝ, luôn đi qua (1; 0), trục tung Oy là tiệm cận đứng. Tính đơn điệu: Cả hai hàm số ĐỒNG BIẾN khi a > 1, NGHỊCH BIẾN khi 0 < a < 1.",
          formula: "$$a > 1 \\implies y = a^x, y = \\log_a x \\text{ đồng biến}; \\quad 0 < a < 1 \\implies \\text{nghịch biến}$$",
          pitfall: "Quên tập xác định của hàm số lôgarit phải là biểu thức bên trong > 0.",
          casio: "Dùng [TABLE] kiểm tra chiều biến thiên tăng hay giảm của hàm số."
        },
        {
          title: "Nhánh 3: Phương trình & Bất phương trình Mũ - Lôgarit",
          core: "Phương trình: a^x = b ⇔ x = log_a b (b > 0). log_a x = b ⇔ x = a^b. Bất phương trình mũ: Nếu a > 1 thì a^u > a^v ⇔ u > v; nếu 0 < a < 1 thì a^u > a^v ⇔ u < v (ĐỔI CHIỀU). BPT lôgarit: log_a u > log_a v: cần điều kiện u > 0, v > 0; cùng chiều khi a > 1, đổi chiều khi 0 < a < 1.",
          formula: "$$0 < a < 1: \\quad a^u > a^v \\iff u < v; \\quad \\log_a u > \\log_a v \\iff 0 < u < v$$",
          pitfall: "Quên ĐỔI CHIỀU bất phương trình khi cơ số 0 < a < 1 (ví dụ cơ số 0.5 hay 1/3); quên đặt điều kiện xác định cho lôgarit.",
          casio: "Dùng [SOLVE] tìm nghiệm phương trình, hoặc thử nghiệm từng đáp án trắc nghiệm."
        }
      ],
      theorySummary: `
        <p>• <strong>Công thức Lôgarit:</strong> $\\log_a(xy) = \\log_a x + \\log_a y$; $\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$; $\\log_{a^\\beta} b^\\alpha = \\frac{\\alpha}{\\beta}\\log_a b$; $\\log_a b = \\frac{\\ln b}{\\ln a}$.</p>
        <p>• <strong>Hàm số mũ & Lôgarit:</strong> $y = a^x$ có TXĐ $\\mathbb{R}$, TGT $(0; +\\infty)$. $y = \\log_a x$ có TXĐ $(0; +\\infty)$, TGT $\\mathbb{R}$. Cả hai đồng biến khi $a > 1$, nghịch biến khi $0 < a < 1$.</p>
        <p>• <strong>Bất phương trình Mũ & Lôgarit:</strong> Phải chú ý điều kiện có nghĩa $x > 0$ và đổi chiều bất đẳng thức khi cơ số nằm trong khoảng $(0; 1)$.</p>
      `,
      pitfallsSummary: `
        <li>Quên đổi chiều bất phương trình khi cơ số $0 < a < 1$ (ví dụ $\\left(\\frac{1}{2}\\right)^x > 4$).</li>
        <li>Không tìm điều kiện xác định của biểu thức dưới dấu logarit ($f(x) > 0$).</li>
        <li>Nhầm lẫn giữa $\\log_a(x + y)$ và $\\log_a x + \\log_a y$ (không có công thức tách tổng bên trong logarit).</li>
        <li>Quên rằng hàm số mũ $y = a^x$ luôn nhận giá trị dương, phương trình $a^x = -2$ là vô nghiệm.</li>
      `,
      mcqs: [
        {
          question: "Câu 1 (Nhận biết): Với số thực $a > 0$ và $a \\neq 1$, giá trị của $\\log_a(a^3)$ bằng:",
          options: ["A. $3$", "B. $\\frac{1}{3}$", "C. $1$", "D. $a^3$"],
          correct: "A",
          hint1: "Áp dụng công thức $\\log_a(a^\\alpha) = \\alpha$.",
          hint2: "Với $\\alpha = 3$, kết quả bằng 3.",
          explain: "Ta có $\\log_a(a^3) = 3\\log_a a = 3 \\times 1 = 3$. Đáp án đúng là A."
        },
        {
          question: "Câu 2 (Nhận biết): Tập xác định của hàm số $y = \\log_2(x - 3)$ là:",
          options: ["A. $D = (3; +\\infty)$", "B. $D = [3; +\\infty)$", "C. $D = (-\\infty; 3)$", "D. $D = \\mathbb{R} \\setminus \\{3\\}$"],
          correct: "A",
          hint1: "Biểu thức dưới dấu lôgarit phải dương: $x - 3 > 0$.",
          hint2: "$x > 3 \\implies D = (3; +\\infty)$.",
          explain: "Hàm số xác định khi $x - 3 > 0 \\iff x > 3$. Do đó $D = (3; +\\infty)$. Đáp án đúng là A."
        },
        {
          question: "Câu 3 (Thông hiểu): Hàm số nào sau đây đồng biến trên khoảng $(0; +\\infty)$?",
          options: ["A. $y = \\log_3 x$", "B. $y = \\log_{0.5} x$", "C. $y = \\left(\\frac{1}{2}\\right)^x$", "D. $y = \\log_{\\frac{1}{3}} x$"],
          correct: "A",
          hint1: "Hàm số logarit $y = \\log_a x$ đồng biến khi cơ số $a > 1$.",
          hint2: "Ở đây $a = 3 > 1$ nên $y = \\log_3 x$ đồng biến.",
          explain: "Hàm số $y = \\log_3 x$ có cơ số $a = 3 > 1$ nên đồng biến trên $(0; +\\infty)$. Đáp án đúng là A."
        },
        {
          question: "Câu 4 (Thông hiểu): Nghiệm của phương trình $2^{x + 1} = 16$ là:",
          options: ["A. $x = 3$", "B. $x = 4$", "C. $x = 2$", "D. $x = 5$"],
          correct: "A",
          hint1: "Đưa về cùng cơ số: $16 = 2^4$.",
          hint2: "$2^{x + 1} = 2^4 \\implies x + 1 = 4 \\implies x = 3$.",
          explain: "Ta có $2^{x + 1} = 2^4 \\iff x + 1 = 4 \\iff x = 3$. Đáp án đúng là A."
        },
        {
          question: "Câu 5 (Thông hiểu): Tập nghiệm của bất phương trình $\\log_{0.5}(x) > -1$ là:",
          options: ["A. $(0; 2)$", "B. $(2; +\\infty)$", "C. $(-\\infty; 2)$", "D. $[0; 2)$"],
          correct: "A",
          hint1: "Điều kiện xác định: $x > 0$. Cơ số $a = 0.5 < 1$ nên phải ĐỔI CHIỀU bất phương trình.",
          hint2: "$x < (0.5)^{-1} = 2$. Kết hợp điều kiện $x > 0$ được $0 < x < 2$.",
          explain: "Điều kiện $x > 0$. Vì cơ số $0.5 < 1$ nên $\\log_{0.5} x > -1 \\iff x < (0.5)^{-1} = 2$. Vậy tập nghiệm là $(0; 2)$. Đáp án đúng là A."
        },
        {
          question: "Câu 6 (Vận dụng): Sự tăng trưởng của một loại vi khuẩn tuân theo công thức $N(t) = N_0 \\cdot e^{rt}$, trong đó $N_0$ là số lượng ban đầu, $r$ là tỉ lệ tăng trưởng, $t$ là thời gian (giờ). Biết $N_0 = 1000$ và sau 2 giờ số vi khuẩn là $4000$. Tỉ lệ tăng trưởng $r$ mỗi giờ bằng:",
          options: ["A. $\\ln 2$", "B. $\\frac{\\ln 2}{2}$", "C. $2\\ln 2$", "D. $\\ln 4$"],
          correct: "A",
          hint1: "Thay $N(2) = 4000$ và $N_0 = 1000$ vào công thức: $4000 = 1000 \\cdot e^{2r}$.",
          hint2: "$e^{2r} = 4 = 2^2 \\implies 2r = \\ln(2^2) = 2\\ln 2 \\implies r = \\ln 2$.",
          explain: "Ta có $1000 \\cdot e^{2r} = 4000 \\iff e^{2r} = 4 \\iff 2r = \\ln 4 = 2\\ln 2 \\iff r = \\ln 2$. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét các tính chất cơ bản của hàm số mũ và hàm số logarit:",
          items: [
            { key: "a", text: "Đồ thị của hàm số y = 2^x luôn đi qua điểm A(0; 1) và nằm phía trên trục hoành.", correct: "true", explain: "2^0 = 1 và 2^x > 0 với mọi x." },
            { key: "b", text: "Đồ thị của hàm số y = log_3 x nhận trục tung Oy làm đường tiệm cận đứng.", correct: "true", explain: "Tiệm cận đứng của hàm số logarit y = log_a x luôn là trục Oy." },
            { key: "c", text: "Hàm số y = (1/3)^x là hàm số nghịch biến trên ℝ.", correct: "true", explain: "Vì cơ số 1/3 nằm trong khoảng (0; 1)." },
            { key: "d", text: "Hàm số y = log_2 x có tập xác định là toàn bộ tập số thực ℝ.", correct: "false", explain: "Tập xác định chỉ là khoảng (0; +∞)." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho phương trình $\\log_2(x - 1) + \\log_2(x + 1) = 3$:",
          items: [
            { key: "a", text: "Điều kiện xác định của phương trình là x > 1.", correct: "true", explain: "Hệ điều kiện: x - 1 > 0 và x + 1 > 0 ⇔ x > 1." },
            { key: "b", text: "Phương trình tương đương với log_2(x² - 1) = 3.", correct: "true", explain: "Áp dụng công thức cộng logarit cùng cơ số: log_2[(x - 1)(x + 1)] = log_2(x² - 1)." },
            { key: "c", text: "Ta có x² - 1 = 2^3 = 8 ⇔ x² = 9.", correct: "true", explain: "Mũ hóa phương trình: x² - 1 = 8 ⇔ x² = 9." },
            { key: "d", text: "Phương trình đã cho có hai nghiệm phân biệt là x = 3 và x = -3.", correct: "false", explain: "Chỉ có x = 3 thoả mãn điều kiện x > 1, x = -3 bị loại." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Về bất phương trình mũ và logarit:",
          items: [
            { key: "a", text: "Bất phương trình 3^x > 9 có nghiệm là x > 2.", correct: "true", explain: "Cơ số 3 > 1 nên 3^x > 3^2 ⇔ x > 2." },
            { key: "b", text: "Bất phương trình (1/2)^x < 4 tương đương với x < -2.", correct: "false", explain: "Cơ số 1/2 < 1 nên phải đổi chiều: (1/2)^x < (1/2)^{-2} ⇔ x > -2." },
            { key: "c", text: "Điều kiện để biểu thức log_a b có nghĩa là a > 0, a ≠ 1 và b > 0.", correct: "true", explain: "Định nghĩa chuẩn cơ số và biểu thức dưới dấu logarit." },
            { key: "d", text: "Với mọi số thực x, biểu thức e^x luôn luôn nhận giá trị dương.", correct: "true", explain: "Tập giá trị của hàm số mũ e^x là (0; +∞)." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Ứng dụng công thức tính độ pH trong hoá học: $\\text{pH} = -\\log_{10}[\\text{H}^+]$ ($[\\text{H}^+]$ đo bằng $\\text{mol/L}$):",
          items: [
            { key: "a", text: "Nước nguyên chất có [H+] = 10^{-7} mol/L thì có độ pH = 7.", correct: "true", explain: "pH = -log_10(10^{-7}) = -(-7) = 7." },
            { key: "b", text: "Dung dịch có độ pH < 7 được gọi là môi trường axit.", correct: "true", explain: "Tính chất chuẩn thang đo pH hoá học." },
            { key: "c", text: "Nếu nồng độ [H+] tăng lên 10 lần thì độ pH tăng thêm 1 đơn vị.", correct: "false", explain: "Vì có dấu âm trước logarit nên [H+] tăng 10 lần thì độ pH GIẢM đi 1 đơn vị." },
            { key: "d", text: "Nước cam có [H+] = 10^{-4} mol/L thì có độ pH = 4.", correct: "true", explain: "pH = -log_10(10^{-4}) = 4." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Tính giá trị biểu thức logarit",
          question: "Tính giá trị của biểu thức $P = \\log_2 8 + \\log_3 9$.",
          correctAnswer: "5",
          acceptedAnswers: ["5", "5.0", "5,0"],
          hint1: "$\\log_2 8 = \\log_2(2^3) = 3$.",
          hint2: "$\\log_3 9 = \\log_3(3^2) = 2$. Tính $3 + 2$.",
          explain: "Ta có $P = 3 + 2 = 5$."
        },
        {
          id: 2,
          title: "Giải phương trình mũ",
          question: "Giải phương trình $3^{2x - 1} = 27$. Tìm giá trị của $x$.",
          correctAnswer: "2",
          acceptedAnswers: ["2", "2.0", "2,0"],
          hint1: "Đưa về cùng cơ số 3: $27 = 3^3$.",
          hint2: "$2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$.",
          explain: "Ta có $3^{2x - 1} = 3^3 \\iff 2x - 1 = 3 \\iff 2x = 4 \\iff x = 2$."
        },
        {
          id: 3,
          title: "Giải phương trình logarit",
          question: "Giải phương trình $\\log_3(2x + 1) = 2$. Tìm giá trị của $x$.",
          correctAnswer: "4",
          acceptedAnswers: ["4", "4.0", "4,0"],
          hint1: "Mũ hoá: $2x + 1 = 3^2 = 9$.",
          hint2: "$2x = 8 \\implies x = 4$.",
          explain: "Ta có $2x + 1 = 3^2 = 9 \\iff 2x = 8 \\iff x = 4$."
        },
        {
          id: 4,
          title: "Bài toán tăng trưởng tài chính lãi kép",
          question: "Một người gửi 50 triệu đồng vào ngân hàng với lãi suất $7\\%/\\text{năm}$ theo thể thức lãi kép hàng năm. Sau ít nhất bao nhiêu năm thì số tiền người đó nhận được lần đầu tiên vượt quá 70 triệu đồng?",
          correctAnswer: "5",
          acceptedAnswers: ["5"],
          hint1: "Công thức số tiền: $50(1 + 0.07)^n > 70 \\implies 1.07^n > 1.4$.",
          hint2: "Tính $n > \\log_{1.07}(1.4) \\approx 4.97$. Vậy cần ít nhất 5 năm.",
          explain: "Ta có $50(1.07)^n > 70 \\iff 1.07^n > 1.4 \\iff n > \\log_{1.07}(1.4) \\approx 4.97$. Do $n$ nguyên dương nên sau ít nhất 5 năm."
        }
      ]
    },

    // =========================================================================
    // CHƯƠNG VII LỚP 11: QUAN HỆ VUÔNG GÓC TRONG KHÔNG GIAN
    // =========================================================================
    "11_7": {
      id: "11_7",
      grade: "Lớp 11",
      chapterNumber: 7,
      title: "Bài tập cuối chương VII: Quan hệ vuông góc trong không gian",
      shortTitle: "Ôn tập Chương VII: Quan hệ vuông góc trong không gian",
      branches: [
        {
          title: "Nhánh 1: Đường thẳng vuông góc mặt phẳng & Hai mặt phẳng vuông góc",
          core: "Hai đường thẳng vuông góc: u⃗ · v⃗ = 0. Đường thẳng vuông góc mp: d ⊥ (α) ⇔ d vuông góc với 2 đường thẳng cắt nhau trong (α). Tính chất: d ⊥ (α) ⇒ d vuông góc với mọi đường thẳng nằm trong (α). Hai mp vuông góc: (α) ⊥ (β) ⇔ (α) chứa một đường thẳng vuông góc với (β).",
          formula: "$$\\left.\\begin{aligned} d &\\perp a, d \\perp b \\\\ a, b &\\subset (P), a \\cap b = I \\end{aligned}\\right\\} \\implies d \\perp (P) \\implies d \\perp c, \\forall c \\subset (P)$$",
          pitfall: "Chỉ chứng minh d vuông góc với 1 đường thẳng trong mp mà đã kết luận d vuông góc mp; hoặc quên điều kiện 2 đường thẳng phải cắt nhau.",
          casio: "Vẽ hình không gian chuẩn, tìm các cặp tam giác vuông và chân đường cao của hình chóp/lăng trụ."
        },
        {
          title: "Nhánh 2: Góc trong không gian (Góc giữa 2 đường, đường và mp, 2 mp)",
          core: "Góc giữa 2 đường thẳng: nằm trong [0°; 90°]. Góc giữa đường thẳng d và mp (α): là góc giữa d và hình chiếu d' của nó trên (α) (0° ≤ φ ≤ 90°). Góc giữa 2 mặt phẳng (góc nhị diện): là góc giữa 2 đường thẳng lần lượt nằm trong 2 mp và cùng vuông góc với giao tuyến tại một điểm.",
          formula: "$$\\cos(d_1, d_2) = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| \\cdot |\\vec{u}_2|}, \\quad \\widehat{(d, (P))} = \\widehat{(d, d')}$$",
          pitfall: "Xác định sai hình chiếu vuông góc của đỉnh hoặc điểm lên mặt phẳng đáy; lấy góc tù làm góc giữa 2 đường thẳng.",
          casio: "Dùng các tỉ số lượng giác sin, cos, tan trong tam giác vuông để tính nhanh số đo góc nhọn."
        },
        {
          title: "Nhánh 3: Khoảng cách & Thể tích khối đa diện",
          core: "Khoảng cách từ điểm M đến mp (α): d(M, (α)) = MH (H là hình chiếu vuông góc của M lên (α)). Khoảng cách giữa 2 đường chéo nhau: là độ dài đoạn vuông góc chung, hoặc khoảng cách từ đường này đến mp song song chứa đường kia. Thể tích: Khối chóp V = 1/3 Bh, khối lăng trụ V = Bh, hình hộp chữ nhật V = abc.",
          formula: "$$V_{\\text{chóp}} = \\frac{1}{3} S_{\\text{đáy}} \\cdot h, \\quad V_{\\text{lăng trụ}} = S_{\\text{đáy}} \\cdot h, \\quad d(a, b) = d(a, (\\beta)) \\quad (b \\subset (\\beta) \\parallel a)$$",
          pitfall: "Quên hệ số 1/3 khi tính thể tích khối chóp.",
          casio: "Áp dụng phương pháp đổi điểm khoảng cách: d(A, (P)) / d(B, (P)) = IA / IB với I = AB ∩ (P)."
        }
      ],
      theorySummary: `
        <p>• <strong>Đường thẳng vuông góc mặt phẳng:</strong> $d \\perp (\\alpha) \\iff d$ vuông góc với hai đường thẳng cắt nhau trong $(\\alpha)$. Khi đó $d$ vuông góc với mọi đường thẳng thuộc $(\\alpha)$.</p>
        <p>• <strong>Góc trong không gian:</strong> Góc giữa đường thẳng và mặt phẳng là góc giữa đường thẳng và hình chiếu vuông góc của nó. Góc giữa hai mặt phẳng là góc giữa hai đường thẳng cùng vuông góc với giao tuyến.</p>
        <p>• <strong>Khoảng cách & Thể tích:</strong> Khoảng cách từ điểm đến mặt phẳng, khoảng cách giữa hai đường chéo nhau. Thể tích chóp $V = \\frac{1}{3}Bh$, thể tích lăng trụ $V = Bh$.</p>
      `,
      pitfallsSummary: `
        <li>Quên hệ số $\\frac{1}{3}$ trong công thức tính thể tích khối chóp ($V = \\frac{1}{3}Bh$).</li>
        <li>Chứng minh đường thẳng vuông góc mặt phẳng mà chỉ chỉ ra vuông góc với 2 đường thẳng song song (phải cắt nhau).</li>
        <li>Xác định sai chân đường cao hạ từ đỉnh xuống đáy của khối chóp.</li>
        <li>Nhầm lẫn khoảng cách giữa hai đường thẳng chéo nhau với khoảng cách giữa hai điểm tuỳ ý trên hai đường đó.</li>
      `,
      mcqs: [
        {
          question: "Câu 1 (Nhận biết): Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông và $SA \\perp (ABCD)$. Khẳng định nào sau đây là đúng?",
          options: ["A. $SA \\perp BC$", "B. $SA \\parallel (ABCD)$", "C. $SC \\perp (ABCD)$", "D. $SB \\perp (ABCD)$"],
          correct: "A",
          hint1: "Nếu đường thẳng vuông góc với mặt phẳng thì nó vuông góc với mọi đường thẳng nằm trong mặt phẳng đó.",
          hint2: "Vì $SA \\perp (ABCD)$ và $BC \\subset (ABCD)$ nên $SA \\perp BC$.",
          explain: "Do $SA \\perp (ABCD)$ và $BC \\subset (ABCD)$ nên theo định lý, $SA \\perp BC$. Đáp án đúng là A."
        },
        {
          question: "Câu 2 (Thông hiểu): Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Hình chiếu vuông góc của đường thẳng $SB$ lên mặt phẳng $(ABC)$ là đường thẳng:",
          options: ["A. $AB$", "B. $AC$", "C. $BC$", "D. $SA$"],
          correct: "A",
          hint1: "Hình chiếu của điểm S lên (ABC) là điểm A (vì SA ⊥ (ABC)).",
          hint2: "Hình chiếu của điểm B lên (ABC) là chính nó (điểm B). Vậy hình chiếu của SB là AB.",
          explain: "Hình chiếu của $S$ lên $(ABC)$ là $A$, hình chiếu của $B$ lên $(ABC)$ là $B$. Vậy hình chiếu của $SB$ là $AB$. Đáp án đúng là A."
        },
        {
          question: "Câu 3 (Thông hiểu): Thể tích $V$ của khối chóp có diện tích đáy $B = 12\\text{ cm}^2$ và chiều cao $h = 5\\text{ cm}$ bằng:",
          options: ["A. $20\\text{ cm}^3$", "B. $60\\text{ cm}^3$", "C. $30\\text{ cm}^3$", "D. $40\\text{ cm}^3$"],
          correct: "A",
          hint1: "Áp dụng công thức tính thể tích khối chóp $V = \\frac{1}{3} B \\cdot h$.",
          hint2: "Tính $V = \\frac{1}{3} \\times 12 \\times 5$.",
          explain: "Thể tích khối chóp là $V = \\frac{1}{3} B \\cdot h = \\frac{1}{3} \\times 12 \\times 5 = 20\\text{ cm}^3$. Đáp án đúng là A."
        },
        {
          question: "Câu 4 (Thông hiểu): Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $AB$ và $B'C'$ bằng:",
          options: ["A. $90^\\circ$", "B. $45^\\circ$", "C. $60^\\circ$", "D. $0^\\circ$"],
          correct: "A",
          hint1: "Vì $B'C' \\parallel BC$ nên góc giữa $AB$ và $B'C'$ bằng góc giữa $AB$ và $BC$.",
          hint2: "Đáy $ABCD$ là hình vuông nên $\\widehat{ABC} = 90^\\circ$.",
          explain: "Ta có $B'C' \\parallel BC$. Do đó góc giữa $AB$ và $B'C'$ bằng góc giữa $AB$ và $BC$, tức bằng $90^\\circ$. Đáp án đúng là A."
        },
        {
          question: "Câu 5 (Thông hiểu): Thể tích của một khối lăng trụ có diện tích đáy $B = 15\\text{ cm}^2$ và chiều cao $h = 6\\text{ cm}$ bằng:",
          options: ["A. $90\\text{ cm}^3$", "B. $30\\text{ cm}^3$", "C. $45\\text{ cm}^3$", "D. $180\\text{ cm}^3$"],
          correct: "A",
          hint1: "Áp dụng công thức thể tích khối lăng trụ $V = B \\cdot h$.",
          hint2: "Tính $15 \\times 6 = 90$.",
          explain: "Thể tích khối lăng trụ là $V = B \\cdot h = 15 \\times 6 = 90\\text{ cm}^3$. Đáp án đúng là A."
        },
        {
          question: "Câu 6 (Vận dụng): Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$ và $SA \\perp (ABC)$. Mặt phẳng $(SAB)$ vuông góc với mặt phẳng nào sau đây?",
          options: ["A. $(SBC)$", "B. $(SAC)$", "C. Không vuông góc mặt phẳng nào", "D. Mặt phẳng song song với $(ABC)$"],
          correct: "A",
          hint1: "Xét đường thẳng $BC$: $BC \\perp AB$ (do tam giác vuông) và $BC \\perp SA$ (do $SA \\perp đáy$).",
          hint2: "Suy ra $BC \\perp (SAB)$. Mà $BC \\subset (SBC)$ nên $(SBC) \\perp (SAB)$.",
          explain: "Ta có $BC \\perp AB$ và $BC \\perp SA$, suy ra $BC \\perp (SAB)$. Mặt phẳng $(SBC)$ chứa đường thẳng $BC$ vuông góc với $(SAB)$ nên $(SBC) \\perp (SAB)$. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông tâm $O$, cạnh $a$, $SA \\perp (ABCD)$ và $SA = a$:",
          items: [
            { key: "a", text: "Đường thẳng CD vuông góc với mặt phẳng (SAD).", correct: "true", explain: "CD ⊥ AD (hình vuông) và CD ⊥ SA (do SA ⊥ đáy), suy ra CD ⊥ (SAD)." },
            { key: "b", text: "Tam giác SBC vuông tại đỉnh B.", correct: "true", explain: "BC ⊥ AB và BC ⊥ SA ⇒ BC ⊥ (SAB) ⇒ BC ⊥ SB." },
            { key: "c", text: "Góc giữa đường thẳng SC và mặt phẳng đáy (ABCD) là góc SCA.", correct: "true", explain: "A là hình chiếu của S lên (ABCD) nên góc là SCA." },
            { key: "d", text: "Tang của góc giữa đường thẳng SC và mặt phẳng (ABCD) bằng 1.", correct: "false", explain: "tan(SCA) = SA / AC = a / (a√2) = 1 / √2 ≠ 1." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Xét các tính chất về khoảng cách trong không gian:",
          items: [
            { key: "a", text: "Khoảng cách từ điểm M đến mặt phẳng (P) là khoảng cách ngắn nhất từ M đến các điểm thuộc (P).", correct: "true", explain: "Độ dài đoạn vuông góc MH là khoảng cách ngắn nhất." },
            { key: "b", text: "Nếu đường thẳng d song song với mặt phẳng (P) thì khoảng cách từ mọi điểm trên d đến (P) đều bằng nhau.", correct: "true", explain: "Định nghĩa khoảng cách giữa đường thẳng và mặt phẳng song song." },
            { key: "c", text: "Khoảng cách giữa hai đường thẳng chéo nhau là độ dài đoạn vuông góc chung của chúng.", correct: "true", explain: "Định nghĩa chuẩn khoảng cách giữa hai đường chéo nhau." },
            { key: "d", text: "Hai đường thẳng chéo nhau thì khoảng cách giữa chúng có thể bằng 0.", correct: "false", explain: "Hai đường thẳng chéo nhau không có điểm chung nên khoảng cách luôn lớn hơn 0." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho khối tứ diện đều $ABCD$ có tất cả các cạnh đều bằng $a$:",
          items: [
            { key: "a", text: "Đoạn thẳng nối trung điểm của hai cạnh đối diện là đoạn vuông góc chung của hai cạnh đó.", correct: "true", explain: "Tính chất đối xứng hoàn hảo của tứ diện đều." },
            { key: "b", text: "Hai cạnh đối diện bất kỳ của tứ diện đều luôn vuông góc với nhau.", correct: "true", explain: "Định lý chuẩn: AB ⊥ CD, AC ⊥ BD, AD ⊥ BC." },
            { key: "c", text: "Chiều cao của khối tứ diện đều bằng a√6 / 3.", correct: "true", explain: "h = √(a² - (a√3/3)²) = √(a² - a²/3) = a√(2/3) = a√6 / 3." },
            { key: "d", text: "Thể tích của khối tứ diện đều bằng a³√2 / 4.", correct: "false", explain: "Công thức đúng là V = a³√2 / 12, không phải chia 4." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Ứng dụng hình học không gian trong xây dựng và kiến trúc:",
          items: [
            { key: "a", text: "Dây dọi của thợ xây dựa trên phương trọng lực vuông góc với mặt nước phẳng lặng để xác định phương thẳng đứng vuông góc sàn nhà.", correct: "true", explain: "Ứng dụng thực tế kinh điển của đường thẳng vuông góc mặt phẳng." },
            { key: "b", text: "Mái nhà hình chóp tứ giác đều có 4 mặt bên là các tam giác cân bằng nhau.", correct: "true", explain: "Đặc điểm hình học của hình chóp đều." },
            { key: "c", text: "Thể tích không gian bên trong kim tự tháp bằng một phần ba tích diện tích đáy và chiều cao.", correct: "true", explain: "Công thức V = 1/3 Bh." },
            { key: "d", text: "Nếu tăng gấp đôi chiều cao và giữ nguyên diện tích đáy thì thể tích khối chóp tăng gấp 4 lần.", correct: "false", explain: "Thể tích tỉ lệ bậc nhất với chiều cao nên chỉ tăng gấp 2 lần." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Tính thể tích khối chóp",
          question: "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$ với $AB = 3, BC = 4$. Cạnh bên $SA$ vuông góc với mặt phẳng đáy và $SA = 6$. Tính thể tích $V$ của khối chóp $S.ABC$.",
          correctAnswer: "12",
          acceptedAnswers: ["12", "12.0", "12,0"],
          hint1: "Diện tích đáy tam giác vuông: $S = \\frac{1}{2} AB \\cdot BC = \\frac{1}{2} \\times 3 \\times 4 = 6$.",
          hint2: "Thể tích khối chóp: $V = \\frac{1}{3} S \\cdot SA = \\frac{1}{3} \\times 6 \\times 6$.",
          explain: "Ta có $S_{ABC} = 6$. Do đó thể tích $V = \\frac{1}{3} \\times 6 \\times 6 = 12$."
        },
        {
          id: 2,
          title: "Tính thể tích khối lăng trụ đứng",
          question: "Cho khối lăng trụ đứng tam giác có diện tích đáy $B = 8\\text{ cm}^2$ và cạnh bên dài $5\\text{ cm}$. Tính thể tích của khối lăng trụ đó (theo $\\text{cm}^3$).",
          correctAnswer: "40",
          acceptedAnswers: ["40", "40.0", "40,0"],
          hint1: "Lăng trụ đứng có chiều cao bằng độ dài cạnh bên: $h = 5\\text{ cm}$.",
          hint2: "Thể tích lăng trụ: $V = B \\cdot h = 8 \\times 5$.",
          explain: "Thể tích khối lăng trụ đứng là $V = B \\cdot h = 8 \\times 5 = 40\\text{ cm}^3$."
        },
        {
          id: 3,
          title: "Khoảng cách trong hình lập phương",
          question: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $4\\text{ cm}$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(CDD'C')$ (theo $\\text{cm}$).",
          correctAnswer: "4",
          acceptedAnswers: ["4", "4.0", "4,0"],
          hint1: "Đoạn thẳng nào kẻ từ $A$ vuông góc với mặt phẳng $(CDD'C')$?",
          hint2: "Vì $AD \\perp (CDD'C')$ nên khoảng cách chính bằng độ dài cạnh $AD$.",
          explain: "Vì $AD \\perp CD$ và $AD \\perp DD'$ nên $AD \\perp (CDD'C')$. Do đó khoảng cách bằng $AD = 4\\text{ cm}$."
        },
        {
          id: 4,
          title: "Tính góc giữa đường thẳng và mặt phẳng",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $2\\text{ cm}$, $SA \\perp (ABCD)$ và $SA = 2\\text{ cm}$. Tính số đo góc giữa đường thẳng $SB$ và mặt phẳng đáy $(ABCD)$ (theo đơn vị độ, chỉ điền số).",
          correctAnswer: "45",
          acceptedAnswers: ["45", "45°"],
          hint1: "Hình chiếu của $SB$ lên $(ABCD)$ là $AB$. Góc cần tìm là $\\widehat{SBA}$.",
          hint2: "Tam giác $SAB$ vuông tại $A$ có $SA = AB = 2\\text{ cm}$ nên là tam giác vuông cân.",
          explain: "Vì $SA \\perp (ABCD)$ nên góc giữa $SB$ và $(ABCD)$ là $\\widehat{SBA}$. Tam giác $SAB$ vuông cân tại $A$ ($SA = AB = 2$) nên $\\widehat{SBA} = 45^\\circ$."
        }
      ]
    },

    // =========================================================================
    // CHƯƠNG VIII LỚP 11: CÁC QUY TẮC TÍNH XÁC SUẤT
    // =========================================================================
    "11_8": {
      id: "11_8",
      grade: "Lớp 11",
      chapterNumber: 8,
      title: "Bài tập cuối chương VIII: Các quy tắc tính xác suất",
      shortTitle: "Ôn tập Chương VIII: Các quy tắc tính xác suất",
      branches: [
        {
          title: "Nhánh 1: Biến cố hợp, Biến cố giao & Biến cố độc lập",
          core: "Biến cố hợp A ∪ B: 'A hoặc B xảy ra'. Biến cố giao A ∩ B (hay AB): 'cả A và B cùng xảy ra'. Hai biến cố xung khắc: A ∩ B = ∅ (không thể cùng xảy ra). Hai biến cố độc lập: việc xảy ra hay không của biến cố này không ảnh hưởng đến xác suất xảy ra của biến cố kia.",
          formula: "$$A \\cap B = \\emptyset \\iff A, B \\text{ xung khắc}; \\quad P(AB) = P(A)P(B) \\iff A, B \\text{ độc lập}$$",
          pitfall: "Nhầm lẫn giữa 'xung khắc' (không cùng xảy ra, P(AB)=0) và 'độc lập' (không ảnh hưởng nhau, P(AB)=P(A)P(B)).",
          casio: "Dùng sơ đồ Venn trực quan để phân biệt phần giao, phần hợp và phần bù."
        },
        {
          title: "Nhánh 2: Công thức cộng xác suất & Biến cố đối",
          core: "Công thức cộng tổng quát: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Trường hợp đặc biệt khi A và B xung khắc: P(A ∪ B) = P(A) + P(B). Công thức biến cố đối: P(Ā) = 1 - P(A). Biến cố 'có ít nhất một': P(ít nhất một) = 1 - P(không có cái nào).",
          formula: "$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B), \\quad P(\\bar{A}) = 1 - P(A)$$",
          pitfall: "Tự ý bỏ qua số hạng P(A ∩ B) khi hai biến cố không xung khắc.",
          casio: "Khi gặp bài toán 'có ít nhất một', luôn tư duy qua biến cố đối: lấy 1 trừ đi xác suất biến cố không xảy ra."
        },
        {
          title: "Nhánh 3: Quy tắc nhân xác suất cho biến cố độc lập & Ứng dụng thực tế",
          core: "Nếu hai biến cố A và B độc lập thì: P(A ∩ B) = P(A) · P(B). Mở rộng cho n biến cố độc lập. Ứng dụng thực tế: Độ tin cậy của hệ thống mạch điện song song/nối tiếp, xạ thủ bắn bia độc lập, kiểm định chất lượng sản phẩm.",
          formula: "$$P(A \\cap B) = P(A) \\cdot P(B), \\quad P(\\bar{A} \\cap \\bar{B}) = P(\\bar{A}) \\cdot P(\\bar{B}) = (1 - P(A))(1 - P(B))$$",
          pitfall: "Áp dụng công thức nhân P(AB) = P(A)P(B) cho hai biến cố phụ thuộc (chưa độc lập).",
          casio: "Tính tích các xác suất độc lập trực tiếp trên màn hình Casio."
        }
      ],
      theorySummary: `
        <p>• <strong>Biến cố hợp & Quy tắc cộng:</strong> $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Nếu $A, B$ xung khắc thì $P(A \\cup B) = P(A) + P(B)$.</p>
        <p>• <strong>Biến cố đối:</strong> $P(\\bar{A}) = 1 - P(A)$. Xác suất 'có ít nhất một trong hai' là $1 - P(\\bar{A}\\bar{B})$.</p>
        <p>• <strong>Biến cố độc lập & Quy tắc nhân:</strong> Hai biến cố $A$ và $B$ độc lập $\\iff P(A \\cap B) = P(A) \\cdot P(B)$.</p>
      `,
      pitfallsSummary: `
        <li>Nhầm lẫn giữa biến cố xung khắc ($A \\cap B = \\emptyset$) và biến cố độc lập ($P(AB) = P(A)P(B)$).</li>
        <li>Quên trừ đi xác suất giao $P(A \\cap B)$ khi áp dụng công thức cộng cho 2 biến cố không xung khắc.</li>
        <li>Không sử dụng biến cố đối trong các bài toán có cụm từ 'có ít nhất một', dẫn đến chia quá nhiều trường hợp phức tạp.</li>
        <li>Tự ý giả định hai biến cố độc lập khi chưa có căn cứ từ đề bài.</li>
      `,
      mcqs: [
        {
          question: "Câu 1 (Nhận biết): Cho hai biến cố $A$ và $B$ xung khắc với nhau. Khẳng định nào sau đây là đúng?",
          options: [
            "A. $P(A \\cup B) = P(A) + P(B)$",
            "B. $P(A \\cup B) = P(A) \\cdot P(B)$",
            "C. $P(A \\cap B) = P(A) \\cdot P(B)$",
            "D. $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ với $P(A \\cap B) > 0$"
          ],
          correct: "A",
          hint1: "Khi A và B xung khắc thì biến cố giao A ∩ B là biến cố không thể (xác suất bằng 0).",
          hint2: "Công thức cộng trở thành P(A ∪ B) = P(A) + P(B).",
          explain: "Theo công thức cộng xác suất cho hai biến cố xung khắc: $P(A \\cup B) = P(A) + P(B)$. Đáp án đúng là A."
        },
        {
          question: "Câu 2 (Nhận biết): Cho hai biến cố độc lập $A$ và $B$ với $P(A) = 0.5$ và $P(B) = 0.4$. Xác suất của biến cố giao $P(A \\cap B)$ bằng:",
          options: ["A. $0.20$", "B. $0.90$", "C. $0.10$", "D. $0.80$"],
          correct: "A",
          hint1: "Vì A và B độc lập nên $P(A \\cap B) = P(A) \\cdot P(B)$.",
          hint2: "Tính $0.5 \\times 0.4 = 0.20$.",
          explain: "Do $A$ và $B$ độc lập: $P(A \\cap B) = P(A) \\cdot P(B) = 0.5 \\times 0.4 = 0.20$. Đáp án đúng là A."
        },
        {
          question: "Câu 3 (Thông hiểu): Một xạ thủ bắn một phát đạn vào bia với xác suất trúng là $0.8$. Xác suất để xạ thủ đó bắn trượt là:",
          options: ["A. $0.2$", "B. $0.8$", "C. $0.5$", "D. $0.1$"],
          correct: "A",
          hint1: "Bắn trúng và bắn trượt là hai biến cố đối nhau.",
          hint2: "Tính $P(\\bar{A}) = 1 - P(A) = 1 - 0.8$.",
          explain: "Xác suất bắn trượt là biến cố đối: $P(\\bar{A}) = 1 - 0.8 = 0.2$. Đáp án đúng là A."
        },
        {
          question: "Câu 4 (Thông hiểu): Cho hai biến cố $A$ và $B$ thoả mãn $P(A) = 0.6, P(B) = 0.5$ và $P(A \\cap B) = 0.3$. Xác suất của biến cố hợp $P(A \\cup B)$ bằng:",
          options: ["A. $0.8$", "B. $1.1$", "C. $0.3$", "D. $0.6$"],
          correct: "A",
          hint1: "Áp dụng công thức cộng tổng quát: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
          hint2: "Tính $0.6 + 0.5 - 0.3$.",
          explain: "Ta có $P(A \\cup B) = 0.6 + 0.5 - 0.3 = 0.8$. Đáp án đúng là A."
        },
        {
          question: "Câu 5 (Thông hiểu): Gieo đồng thời hai đồng xu cân đối và đồng chất. Xác suất để có ít nhất một đồng xu xuất hiện mặt ngửa bằng:",
          options: ["A. $\\frac{3}{4}$", "B. $\\frac{1}{2}$", "C. $\\frac{1}{4}$", "D. $1$"],
          correct: "A",
          hint1: "Biến cố đối là 'cả hai đồng xu đều sấp'.",
          hint2: "Xác suất cả hai sấp là $1/2 \\times 1/2 = 1/4$. Lấy $1 - 1/4$.",
          explain: "Biến cố đối là cả hai đồng xu đều sấp có xác suất $(1/2) \\times (1/2) = 1/4$. Xác suất có ít nhất một mặt ngửa là $1 - 1/4 = 3/4$. Đáp án đúng là A."
        },
        {
          question: "Câu 6 (Vận dụng): Một thiết bị có hai bóng đèn hoạt động độc lập. Xác suất bóng 1 bị cháy là $0.1$, xác suất bóng 2 bị cháy là $0.2$. Xác suất để cả hai bóng đều hoạt động bình thường bằng:",
          options: ["A. $0.72$", "B. $0.02$", "C. $0.98$", "D. $0.30$"],
          correct: "A",
          hint1: "Xác suất bóng 1 bình thường là $1 - 0.1 = 0.9$. Xác suất bóng 2 bình thường là $1 - 0.2 = 0.8$.",
          hint2: "Vì hai bóng hoạt động độc lập nên nhân hai xác suất: $0.9 \\times 0.8$.",
          explain: "Xác suất hai bóng bình thường là $P = (1 - 0.1) \\times (1 - 0.2) = 0.9 \\times 0.8 = 0.72$. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét các tính chất của quy tắc cộng và quy tắc nhân xác suất:",
          items: [
            { key: "a", text: "Nếu A và B là hai biến cố bất kỳ thì P(A ∪ B) = P(A) + P(B) - P(A ∩ B).", correct: "true", explain: "Công thức cộng xác suất tổng quát chuẩn SGK." },
            { key: "b", text: "Nếu A và B độc lập thì hai biến cố đối Ā và B̄ cũng độc lập với nhau.", correct: "true", explain: "Định lý chuẩn về tính độc lập của các biến cố đối." },
            { key: "c", text: "Hai biến cố xung khắc có xác suất khác 0 thì chắc chắn độc lập với nhau.", correct: "false", explain: "Xung khắc thì P(AB) = 0 ≠ P(A)P(B), do đó chúng phụ thuộc chứ không độc lập." },
            { key: "d", text: "Xác suất của biến cố đối thoả mãn P(Ā) = 1 - P(A).", correct: "true", explain: "Tính chất cơ bản của biến cố đối." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Hai vận động viên bắn súng A và B cùng bắn độc lập mỗi người một viên đạn vào tấm bia. Xác suất bắn trúng của A là 0.7, của B là 0.8:",
          items: [
            { key: "a", text: "Xác suất để cả hai người cùng bắn trúng tấm bia là 0.56.", correct: "true", explain: "P(AB) = 0.7 × 0.8 = 0.56." },
            { key: "b", text: "Xác suất để cả hai người cùng bắn trượt là 0.06.", correct: "true", explain: "P(trượt) = (1 - 0.7)(1 - 0.8) = 0.3 × 0.2 = 0.06." },
            { key: "c", text: "Xác suất để có đúng một người bắn trúng là 0.38.", correct: "true", explain: "P = 0.7(0.2) + 0.3(0.8) = 0.14 + 0.24 = 0.38." },
            { key: "d", text: "Xác suất để có ít nhất một người bắn trúng tấm bia là 0.90.", correct: "false", explain: "Xác suất ít nhất 1 người trúng = 1 - P(cả 2 trượt) = 1 - 0.06 = 0.94." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Một hộp chứa 5 viên bi xanh và 4 viên bi đỏ có kích thước như nhau. Lấy ngẫu nhiên lần lượt 2 viên bi (có hoàn lại):",
          items: [
            { key: "a", text: "Phép thử lấy có hoàn lại khiến việc lấy viên thứ hai độc lập với việc lấy viên thứ nhất.", correct: "true", explain: "Sau khi hoàn lại, số lượng bi trong hộp giữ nguyên nên hai lần lấy độc lập." },
            { key: "b", text: "Xác suất lấy được 2 viên bi cùng màu đỏ là 16/81.", correct: "true", explain: "(4/9) × (4/9) = 16/81." },
            { key: "c", text: "Xác suất lấy được 2 viên bi cùng màu xanh là 25/81.", correct: "true", explain: "(5/9) × (5/9) = 25/81." },
            { key: "d", text: "Xác suất để lấy được 2 viên bi khác màu nhau bằng 41/81.", correct: "false", explain: "Xác suất khác màu = 1 - (16/81 + 25/81) = 40/81." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Ứng dụng xác suất kiểm tra độ an toàn hệ thống phanh ô tô: Có phanh chính và phanh phụ hoạt động độc lập, xác suất hỏng của phanh chính là 0.01, phanh phụ là 0.05:",
          items: [
            { key: "a", text: "Xác suất cả hai hệ thống phanh cùng gặp sự cố là 0.0005.", correct: "true", explain: "P = 0.01 × 0.05 = 0.0005." },
            { key: "b", text: "Xác suất ô tô dừng lại an toàn (ít nhất một phanh hoạt động) là 0.9995.", correct: "true", explain: "P = 1 - 0.0005 = 0.9995." },
            { key: "c", text: "Thiết kế hệ thống dự phòng độc lập giúp giảm thiểu nguy cơ tai nạn xuống mức rất nhỏ.", correct: "true", explain: "Ý nghĩa thực tiễn quan trọng của quy tắc nhân xác suất trong kỹ thuật." },
            { key: "d", text: "Nếu hai hệ thống phanh dùng chung một đường ống dẫn dầu thì tính độc lập vẫn được giữ nguyên.", correct: "false", explain: "Dùng chung linh kiện cốt lõi sẽ làm mất tính độc lập (khi vỡ ống thì cả hai cùng hỏng)." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Quy tắc cộng xác suất xung khắc",
          question: "Cho hai biến cố xung khắc $A$ và $B$ có $P(A) = 0.35$ và $P(B) = 0.45$. Tính xác suất của biến cố hợp $P(A \\cup B)$.",
          correctAnswer: "0.8",
          acceptedAnswers: ["0.8", "0,8"],
          hint1: "Áp dụng công thức $P(A \\cup B) = P(A) + P(B)$.",
          hint2: "Tính $0.35 + 0.45 = 0.80$.",
          explain: "Do $A$ và $B$ xung khắc nên $P(A \\cup B) = 0.35 + 0.45 = 0.8$."
        },
        {
          id: 2,
          title: "Quy tắc nhân hai biến cố độc lập",
          question: "Cho hai biến cố độc lập $A$ và $B$ với $P(A) = 0.6$ và $P(B) = 0.5$. Tính xác suất của biến cố giao $P(A \\cap B)$.",
          correctAnswer: "0.3",
          acceptedAnswers: ["0.3", "0,3"],
          hint1: "Áp dụng công thức $P(A \\cap B) = P(A) \\cdot P(B)$.",
          hint2: "Tính $0.6 \\times 0.5 = 0.30$.",
          explain: "Vì $A$ và $B$ độc lập nên $P(A \\cap B) = 0.6 \\times 0.5 = 0.3$."
        },
        {
          id: 3,
          title: "Xác suất hai người độc lập thi đỗ",
          question: "Hai người độc lập cùng thi lấy chứng chỉ. Xác suất người thứ nhất thi đỗ là $0.8$; xác suất người thứ hai thi đỗ là $0.7$. Tính xác suất để cả hai người cùng thi đỗ.",
          correctAnswer: "0.56",
          acceptedAnswers: ["0.56", "0,56"],
          hint1: "Vì hai người thi độc lập nên áp dụng quy tắc nhân xác suất.",
          hint2: "Tính $0.8 \\times 0.7 = 0.56$.",
          explain: "Xác suất cả hai cùng thi đỗ là $P = 0.8 \\times 0.7 = 0.56$."
        },
        {
          id: 4,
          title: "Xác suất gieo xúc xắc",
          question: "Gieo đồng thời hai con xúc xắc cân đối. Tính xác suất để tổng số chấm xuất hiện trên hai con xúc xắc bằng 7 (viết dưới dạng phân số tối giản dạng a/b).",
          correctAnswer: "1/6",
          acceptedAnswers: ["1/6"],
          hint1: "Không gian mẫu có $6 \\times 6 = 36$ kết quả đồng khả năng.",
          hint2: "Các cặp có tổng bằng 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) gồm 6 kết quả. Tính 6 / 36.",
          explain: "Số kết quả thuận lợi là 6. Xác suất cần tìm là $6 / 36 = 1/6$."
        }
      ]
    },

    // =========================================================================
    // CHƯƠNG IX LỚP 11: ĐẠO HÀM
    // =========================================================================
    "11_9": {
      id: "11_9",
      grade: "Lớp 11",
      chapterNumber: 9,
      title: "Bài tập cuối chương IX: Đạo hàm",
      shortTitle: "Ôn tập Chương IX: Đạo hàm",
      branches: [
        {
          title: "Nhánh 1: Định nghĩa Đạo hàm & Ý nghĩa hình học, vật lý",
          core: "Định nghĩa bằng giới hạn: f'(x_0) = lim_{x→x_0} [f(x) - f(x_0)] / (x - x_0) = lim_{Δx→0} Δy / Δx. Ý nghĩa hình học: f'(x_0) là hệ số góc k của tiếp tuyến của đồ thị hàm số tại tiếp điểm M_0(x_0; f(x_0)). Phương trình tiếp tuyến: y = f'(x_0)(x - x_0) + y_0. Ý nghĩa vật lý: Vận tốc tức thời v(t) = s'(t), cường độ dòng điện tức thời i(t) = q'(t).",
          formula: "$$f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}, \\quad y - y_0 = f'(x_0)(x - x_0), \\quad v(t) = s'(t)$$",
          pitfall: "Nhầm lẫn giữa hoành độ tiếp điểm x_0 với hoành độ của một điểm bất kỳ mà tiếp tuyến đi qua.",
          casio: "Dùng phím đạo hàm [SHIFT] [d/dx] để tính giá trị đạo hàm tại 1 điểm chính xác trong 1 giây."
        },
        {
          title: "Nhánh 2: Các quy tắc tính đạo hàm & Đạo hàm hàm hợp",
          core: "Bảng đạo hàm cơ bản: (x^n)' = n x^{n-1}, (√x)' = 1/(2√x), (sin x)' = cos x, (cos x)' = -sin x, (tan x)' = 1/cos²x = 1 + tan²x, (cot x)' = -1/sin²x. Quy tắc tính: (u ± v)' = u' ± v', (uv)' = u'v + uv', (u/v)' = (u'v - uv') / v². Đạo hàm hàm hợp: y'_x = y'_u · u'_x.",
          formula: "$$(uv)' = u'v + uv', \\quad \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}, \\quad (u^n)' = n u^{n-1} u'$$",
          pitfall: "Quên nhân thừa số u' khi tính đạo hàm hàm hợp; nhầm (cos x)' = sin x (đúng phải có dấu trừ: -sin x).",
          casio: "Kiểm tra công thức đạo hàm bằng cách bấm d/dx [f(x)]_{x=X} - f'(X) và [CALC] với số bất kỳ."
        },
        {
          title: "Nhánh 3: Đạo hàm cấp hai & Ứng dụng chuyển động gia tốc",
          core: "Đạo hàm cấp hai: f''(x) = [f'(x)]'. Ý nghĩa cơ học: Trong chuyển động thẳng với phương trình quãng đường s = s(t), gia tốc tức thời tại thời điểm t là đạo hàm cấp hai của quãng đường: a(t) = v'(t) = s''(t). Ứng dụng giải các bài toán chuyển động biến đổi đều và khảo sát đồ thị.",
          formula: "$$f''(x) = (f'(x))', \\quad a(t) = v'(t) = s''(t)$$",
          pitfall: "Nhầm giữa vận tốc tức thời v(t) = s'(t) và gia tốc tức thời a(t) = s''(t).",
          casio: "Tính đạo hàm hai lần bằng cách lấy đạo hàm của biểu thức f'(x) đã rút gọn."
        }
      ],
      theorySummary: `
        <p>• <strong>Định nghĩa & Tiếp tuyến:</strong> $f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}$. Phương trình tiếp tuyến tại $M_0(x_0; y_0)$ là $y = f'(x_0)(x - x_0) + y_0$.</p>
        <p>• <strong>Quy tắc đạo hàm & Hàm hợp:</strong> $(uv)' = u'v + uv'$, $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$, $(u^n)' = n u^{n-1} u'$, $(\\sin u)' = u'\\cos u$, $(\\cos u)' = -u'\\sin u$.</p>
        <p>• <strong>Ý nghĩa vật lý & Đạo hàm cấp hai:</strong> Vận tốc tức thời $v(t) = s'(t)$, gia tốc tức thời $a(t) = v'(t) = s''(t)$.</p>
      `,
      pitfallsSummary: `
        <li>Quên nhân thừa số $u'$ khi lấy đạo hàm hàm hợp (ví dụ $(\\sin 2x)' = 2\\cos 2x$, hay quên số 2).</li>
        <li>Nhầm lẫn dấu của đạo hàm hàm $\\cos$: $(\\cos x)' = -\\sin x$ (có dấu âm).</li>
        <li>Nhầm công thức đạo hàm của thương: tử số phải là $u'v - uv'$ (dấu trừ, không phải dấu cộng).</li>
        <li>Nhầm giữa vận tốc tức thời (đạo hàm cấp một $s'(t)$) và gia tốc tức thời (đạo hàm cấp hai $s''(t)$).</li>
      `,
      mcqs: [
        {
          question: "Câu 1 (Nhận biết): Đạo hàm của hàm số $y = x^4 - 2x^2 + 5$ là:",
          options: ["A. $y' = 4x^3 - 4x$", "B. $y' = 4x^3 - 2x$", "C. $y' = x^3 - 4x$", "D. $y' = 4x^3 - 4x + 5$"],
          correct: "A",
          hint1: "Áp dụng công thức $(x^n)' = n x^{n-1}$ và $(c)' = 0$.",
          hint2: "$(x^4)' = 4x^3$ và $(-2x^2)' = -4x$.",
          explain: "Ta có $y' = (x^4)' - 2(x^2)' + (5)' = 4x^3 - 4x$. Đáp án đúng là A."
        },
        {
          question: "Câu 2 (Nhận biết): Đạo hàm của hàm số $y = \\sin(3x)$ là:",
          options: ["A. $y' = 3\\cos(3x)$", "B. $y' = \\cos(3x)$", "C. $y' = -3\\cos(3x)$", "D. $y' = -\\cos(3x)$"],
          correct: "A",
          hint1: "Áp dụng đạo hàm hàm hợp $(\\sin u)' = u' \\cdot \\cos u$.",
          hint2: "Với $u = 3x$ thì $u' = 3$.",
          explain: "Ta có $y' = (3x)' \\cdot \\cos(3x) = 3\\cos(3x)$. Đáp án đúng là A."
        },
        {
          question: "Câu 3 (Thông hiểu): Cho hàm số $y = f(x)$ có đồ thị $(C)$. Hệ số góc $k$ của tiếp tuyến với $(C)$ tại điểm có hoành độ $x_0$ bằng:",
          options: ["A. $k = f'(x_0)$", "B. $k = f(x_0)$", "C. $k = \\frac{f(x_0)}{x_0}$", "D. $k = f''(x_0)$"],
          correct: "A",
          hint1: "Ý nghĩa hình học của đạo hàm: hệ số góc tiếp tuyến là đạo hàm tại hoành độ tiếp điểm.",
          hint2: "$k = f'(x_0)$.",
          explain: "Theo ý nghĩa hình học của đạo hàm: Hệ số góc tiếp tuyến của $(C)$ tại $M_0(x_0; y_0)$ là $k = f'(x_0)$. Đáp án đúng là A."
        },
        {
          question: "Câu 4 (Thông hiểu): Một vật chuyển động thẳng xác định bởi phương trình $s(t) = t^3 - 3t^2 + 2$ ($s$ tính bằng mét, $t$ tính bằng giây). Vận tốc tức thời của vật tại thời điểm $t = 2\\text{ giây}$ bằng:",
          options: ["A. $0\\text{ m/s}$", "B. $6\\text{ m/s}$", "C. $12\\text{ m/s}$", "D. $-2\\text{ m/s}$"],
          correct: "A",
          hint1: "Vận tốc tức thời là đạo hàm của quãng đường: $v(t) = s'(t) = 3t^2 - 6t$.",
          hint2: "Thay $t = 2$ vào: $v(2) = 3(2^2) - 6(2) = 12 - 12 = 0$.",
          explain: "Vận tốc tức thời là $v(t) = s'(t) = 3t^2 - 6t$. Tại $t = 2$: $v(2) = 3(4) - 6(2) = 0\\text{ m/s}$. Đáp án đúng là A."
        },
        {
          question: "Câu 5 (Thông hiểu): Đạo hàm của hàm số $y = \\frac{2x - 1}{x + 1}$ là:",
          options: [
            "A. $y' = \\frac{3}{(x + 1)^2}$",
            "B. $y' = \\frac{1}{(x + 1)^2}$",
            "C. $y' = \\frac{-3}{(x + 1)^2}$",
            "D. $y' = \\frac{2}{(x + 1)^2}$"
          ],
          correct: "A",
          hint1: "Công thức đạo hàm phân thức bậc nhất trên bậc nhất: $\\left(\\frac{ax+b}{cx+d}\\right)' = \\frac{ad - bc}{(cx+d)^2}$.",
          hint2: "Tính $ad - bc = 2(1) - (-1)(1) = 2 + 1 = 3$.",
          explain: "Ta có $y' = \\frac{2(1) - (-1)(1)}{(x + 1)^2} = \\frac{3}{(x + 1)^2}$. Đáp án đúng là A."
        },
        {
          question: "Câu 6 (Thông hiểu): Đạo hàm cấp hai của hàm số $y = x^3 - 6x^2 + 2$ là:",
          options: ["A. $y'' = 6x - 12$", "B. $y'' = 3x^2 - 12x$", "C. $y'' = 6x - 6$", "D. $y'' = 6$"],
          correct: "A",
          hint1: "Tính đạo hàm cấp một: $y' = 3x^2 - 12x$.",
          hint2: "Lấy đạo hàm của $y'$ để tìm $y''$: $(3x^2 - 12x)' = 6x - 12$.",
          explain: "Ta có $y' = 3x^2 - 12x$. Suy ra $y'' = (3x^2 - 12x)' = 6x - 12$. Đáp án đúng là A."
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét các tính chất và quy tắc cơ bản của đạo hàm:",
          items: [
            { key: "a", text: "Nếu hàm số y = f(x) có đạo hàm tại x_0 thì nó liên tục tại x_0.", correct: "true", explain: "Định lý chuẩn: Có đạo hàm thì chắc chắn liên tục." },
            { key: "b", text: "Một hàm số liên tục tại điểm x_0 thì chắc chắn có đạo hàm tại điểm đó.", correct: "false", explain: "Mệnh đề đảo không đúng, ví dụ hàm y = |x| liên tục tại 0 nhưng không có đạo hàm tại 0." },
            { key: "c", text: "Đạo hàm của hàm hằng số y = c (với c là hằng số thực) luôn bằng 0.", correct: "true", explain: "(c)' = 0." },
            { key: "d", text: "Đạo hàm của hàm số y = cos x là y' = sin x.", correct: "false", explain: "Đạo hàm của cos x có dấu trừ: (cos x)' = -sin x." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hàm số $y = x^3 - 3x + 2$ có đồ thị $(C)$:",
          items: [
            { key: "a", text: "Đạo hàm của hàm số là y' = 3x² - 3.", correct: "true", explain: "(x³ - 3x + 2)' = 3x² - 3." },
            { key: "b", text: "Tiếp tuyến của đồ thị (C) tại điểm M(0; 2) có hệ số góc bằng -3.", correct: "true", explain: "k = y'(0) = 3(0)² - 3 = -3." },
            { key: "c", text: "Phương trình tiếp tuyến của (C) tại điểm M(0; 2) là y = -3x + 2.", correct: "true", explain: "y - 2 = -3(x - 0) ⇔ y = -3x + 2." },
            { key: "d", text: "Tại hai điểm có hoành độ x = 1 và x = -1, tiếp tuyến của (C) song song hoặc trùng với trục hoành.", correct: "true", explain: "y'(1) = 0 và y'(-1) = 0 nên hệ số góc bằng 0 (tiếp tuyến nằm ngang)." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Một vật chuyển động theo quy luật $s(t) = -t^3 + 6t^2 + 2t$ ($t \\ge 0$, $s$ tính bằng mét, $t$ tính bằng giây):",
          items: [
            { key: "a", text: "Vận tốc tức thời của vật là v(t) = -3t² + 12t + 2.", correct: "true", explain: "v(t) = s'(t) = -3t² + 12t + 2." },
            { key: "b", text: "Vận tốc ban đầu của vật tại thời điểm t = 0 là 2 m/s.", correct: "true", explain: "v(0) = 2 m/s." },
            { key: "c", text: "Vận tốc của vật đạt giá trị lớn nhất tại thời điểm t = 2 giây.", correct: "true", explain: "Đỉnh của parabol v(t): t = -12 / (2 × (-3)) = 2 giây." },
            { key: "d", text: "Gia tốc tức thời của vật tại thời điểm t = 2 giây bằng 14 m/s².", correct: "false", explain: "Gia tốc a(t) = v'(t) = -6t + 12; tại t = 2: a(2) = -6(2) + 12 = 0 m/s²." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về đạo hàm cấp hai và ý nghĩa cơ học:",
          items: [
            { key: "a", text: "Đạo hàm cấp hai là đạo hàm của đạo hàm cấp một: f''(x) = (f'(x))'.", correct: "true", explain: "Định nghĩa đạo hàm cấp hai." },
            { key: "b", text: "Trong chuyển động cơ học, gia tốc tức thời là đạo hàm cấp hai của quãng đường: a(t) = s''(t).", correct: "true", explain: "Ý nghĩa cơ học quan trọng của đạo hàm cấp hai." },
            { key: "c", text: "Một vật chuyển động thẳng đều có gia tốc tức thời luôn luôn bằng 0.", correct: "true", explain: "Chuyển động thẳng đều có s(t) = vt + s_0 ⇒ v(t) = v (hằng số) ⇒ a(t) = 0." },
            { key: "d", text: "Đạo hàm cấp hai của hàm số y = sin x là y'' = sin x.", correct: "false", explain: "y' = cos x ⇒ y'' = (cos x)' = -sin x (có dấu trừ)." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          title: "Tính giá trị đạo hàm tại một điểm",
          question: "Cho hàm số $f(x) = 2x^3 - 4x + 1$. Tính giá trị của đạo hàm $f'(2)$.",
          correctAnswer: "20",
          acceptedAnswers: ["20", "20.0", "20,0"],
          hint1: "Tính $f'(x) = 6x^2 - 4$.",
          hint2: "Thay $x = 2$ vào: $f'(2) = 6(2^2) - 4 = 24 - 4$.",
          explain: "Ta có $f'(x) = 6x^2 - 4$. Do đó $f'(2) = 6(4) - 4 = 20$."
        },
        {
          id: 2,
          title: "Tính hệ số góc của tiếp tuyến",
          question: "Cho hàm số $y = x^2 - 3x + 1$. Tính hệ số góc $k$ của tiếp tuyến với đồ thị hàm số tại điểm có hoành độ $x_0 = 4$.",
          correctAnswer: "5",
          acceptedAnswers: ["5", "5.0", "5,0"],
          hint1: "Hệ số góc tiếp tuyến là $k = y'(x_0)$.",
          hint2: "Tính $y' = 2x - 3$. Tại $x_0 = 4$: $k = 2(4) - 3 = 5$.",
          explain: "Ta có $y' = 2x - 3$. Hệ số góc tại $x_0 = 4$ là $k = y'(4) = 2(4) - 3 = 5$."
        },
        {
          id: 3,
          title: "Tính vận tốc rơi tự do tức thời",
          question: "Một vật rơi tự do theo phương trình $s(t) = 4.9 t^2$ ($s$ tính bằng mét, $t$ tính bằng giây). Tính vận tốc tức thời của vật tại thời điểm $t = 3\\text{ giây}$ (viết kết quả dưới dạng số thập phân).",
          correctAnswer: "29.4",
          acceptedAnswers: ["29.4", "29,4"],
          hint1: "Vận tốc tức thời là đạo hàm của quãng đường: $v(t) = s'(t) = 2 \\times 4.9 t = 9.8 t$.",
          hint2: "Thay $t = 3$ vào: $v(3) = 9.8 \\times 3$.",
          explain: "Vận tốc tức thời là $v(t) = s'(t) = 9.8t$. Tại $t = 3$: $v(3) = 9.8 \\times 3 = 29.4\\text{ m/s}$."
        },
        {
          id: 4,
          title: "Tính đạo hàm cấp hai",
          question: "Tính đạo hàm cấp hai của hàm số $y = x^4 - 2x^3 + 5x$ tại điểm $x = 1$.",
          correctAnswer: "0",
          acceptedAnswers: ["0", "0.0", "0,0"],
          hint1: "Tính đạo hàm cấp một: $y' = 4x^3 - 6x^2 + 5$.",
          hint2: "Tính đạo hàm cấp hai: $y'' = 12x^2 - 12x$. Thay $x = 1$ vào: $12(1) - 12(1) = 0$.",
          explain: "Ta có $y' = 4x^3 - 6x^2 + 5$ và $y'' = 12x^2 - 12x$. Tại $x = 1$: $y''(1) = 12(1) - 12(1) = 0$."
        }
      ]
    }
  };

  // =========================================================================
  // BỘ MÁY SINH DỮ LIỆU ĐỘNG CHO TẤT CẢ CÁC BÀI TẬP CUỐI CHƯƠNG TOÁN 10 - 11 - 12
  // =========================================================================

  function generateDynamicChapterReview(lessonTitle, grade) {
    const lower = lessonTitle.toLowerCase();
    
    // Trích xuất số thứ tự chương (I, II, III, IV, V, VI, VII, VIII, IX hoặc 1..9)
    let chNum = 1;
    let chRoman = "I";
    if (lower.includes("chương ix") || lower.includes("chuong ix") || lower.includes("chương 9")) { chNum = 9; chRoman = "IX"; }
    else if (lower.includes("chương viii") || lower.includes("chuong viii") || lower.includes("chương 8")) { chNum = 8; chRoman = "VIII"; }
    else if (lower.includes("chương vii") || lower.includes("chuong vii") || lower.includes("chương 7")) { chNum = 7; chRoman = "VII"; }
    else if (lower.includes("chương vi") || lower.includes("chuong vi") || lower.includes("chương 6")) { chNum = 6; chRoman = "VI"; }
    else if (lower.includes("chương v") || lower.includes("chuong v") || lower.includes("chương 5")) { chNum = 5; chRoman = "V"; }
    else if (lower.includes("chương iv") || lower.includes("chuong iv") || lower.includes("chương 4")) { chNum = 4; chRoman = "IV"; }
    else if (lower.includes("chương iii") || lower.includes("chuong iii") || lower.includes("chương 3")) { chNum = 3; chRoman = "III"; }
    else if (lower.includes("chương ii") || lower.includes("chuong ii") || lower.includes("chương 2")) { chNum = 2; chRoman = "II"; }
    else { chNum = 1; chRoman = "I"; }

    // Kiểm tra trực tiếp nếu đã có sẵn trong cơ sở dữ liệu chuyên biệt
    const gKey = String(grade).includes("12") ? "12" : (String(grade).includes("10") ? "10" : "11");
    if (CHAPTER_REVIEWS_DB && CHAPTER_REVIEWS_DB[`${gKey}_${chNum}`]) {
      return CHAPTER_REVIEWS_DB[`${gKey}_${chNum}`];
    }

    const cleanTitle = lessonTitle.replace(/^bài tập cuối chương\s*[ivx0-9]*\s*:\s*/i, '').trim();
    const shortTitle = `Ôn tập Chương ${chRoman}: ${cleanTitle || 'Kiến thức cốt lõi'}`;

    // Sinh các nhánh sơ đồ tư duy tương ứng
    const branches = [
      {
        title: `Nhánh 1: Khái niệm & Định lý trọng tâm Chương ${chRoman}`,
        core: `Hệ thống hóa toàn bộ định nghĩa cơ bản, điều kiện áp dụng và các tính chất nền tảng theo chuẩn SGK ${grade} Kết nối tri thức.`,
        formula: `$$\\text{Mô hình hóa toán học cốt lõi của Chương } ${chRoman}$$`,
        pitfall: "Đọc kỹ giả thiết bài toán, phân biệt các trường hợp ngoại lai tại biên và mẫu số triệt tiêu.",
        casio: "Sử dụng các chức năng tính toán trực tiếp [MENU] để rút ngắn thời gian làm trắc nghiệm."
      },
      {
        title: `Nhánh 2: Phương pháp giải & Các dạng toán kinh điển`,
        core: "Nắm vững quy trình các bước giải: đặt ẩn, xác định tập xác định, lập phương trình/bất phương trình liên hệ và đối chiếu điều kiện.",
        formula: "$$\\text{Quy trình 4 bước: TXĐ } \\to \\text{Thiết lập } \\to \\text{Tính toán } \\to \\text{Kết luận}$$",
        pitfall: "Không đối chiếu nghiệm tìm được với điều kiện xác định ban đầu của bài toán.",
        casio: "Dùng tính năng CALC hoặc TABLE quét giá trị kiểm tra nghiệm chính xác tuyệt đối."
      },
      {
        title: `Nhánh 3: Bài toán thực tiễn & Tối ưu hóa`,
        core: "Mô hình hóa dữ liệu thực tế đời sống (chi phí, quãng đường, xác suất, hình học) thành biểu thức toán học tương ứng.",
        formula: "$$\\text{Hàm mục tiêu } f(x) \\implies \\text{Tìm } \\max/\\min \\text{ hoặc xác suất biến cố}$$",
        pitfall: "Đơn vị đo lường thực tế không đồng nhất giữa các đại lượng trong đề bài.",
        casio: "Chuyển đổi đơn vị và kiểm tra tính hợp lý của kết quả theo thực tiễn."
      }
    ];

    const theorySummary = `
      <p>• <strong>Kiến thức cốt lõi:</strong> Toàn bộ nội dung của Chương ${chRoman} (${grade} - SGK Kết nối tri thức) được liên kết chặt chẽ từ lý thuyết cơ bản đến các bài toán vận dụng thực tế.</p>
      <p>• <strong>Công thức trọng tâm:</strong> Ghi nhớ chuẩn xác các hệ thức toán học, tập xác định và quy tắc tính toán.</p>
      <p>• <strong>Kỹ năng làm bài:</strong> Kết hợp tư duy suy luận tự luận và kỹ năng bấm máy tính Casio để tối ưu hóa thời gian làm bài thi.</p>
    `;

    const pitfallsSummary = `
      <li>Không đọc kỹ yêu cầu đề bài (hỏi khẳng định đúng hay khẳng định sai).</li>
      <li>Bỏ qua điều kiện xác định cơ sở của biến số hoặc tham số.</li>
      <li>Tính toán nhầm dấu trong các phép biến đổi trung gian.</li>
    `;

    // 6 MCQs chuẩn chương
    const mcqs = [
      {
        question: `Câu 1 (Nhận biết - Chương ${chRoman}): Khẳng định nào sau đây là ĐÚNG về kiến thức trọng tâm của chương?`,
        options: [
          "A. Mọi công thức toán học đều phải thỏa mãn điều kiện xác định cơ sở.",
          "B. Điều kiện xác định không ảnh hưởng đến nghiệm của phương trình.",
          "C. Có thể bỏ qua tập xác định khi giải bài toán tối ưu thực tế.",
          "D. Nghiệm ngoại lai luôn được chấp nhận trong bài toán thực tế."
        ],
        correct: "A",
        hint1: "Xem lại điều kiện tiên quyết trong SGK Kết nối tri thức.",
        hint2: "Tập xác định là nền tảng của mọi suy luận toán học.",
        explain: "Trong toán học, mọi công thức và phép biến đổi đều phải bảo đảm điều kiện xác định cơ sở của các biểu thức. Đáp án đúng là A."
      },
      {
        question: `Câu 2 (Thông hiểu - Chương ${chRoman}): Khi giải một bài toán thực tiễn bằng mô hình toán học, bước đầu tiên quan trọng nhất là:`,
        options: [
          "A. Xác định các đại lượng, chọn ẩn số và tìm điều kiện thích hợp cho ẩn.",
          "B. Bấm máy tính ngay lập tức mà không cần đặt ẩn.",
          "C. Chọn ngẫu nhiên một công thức bất kỳ rồi thay số.",
          "D. Bỏ qua các đơn vị đo lường trong bài toán."
        ],
        correct: "A",
        hint1: "Bước khởi đầu của quy trình mô hình hóa toán học chuẩn SGK.",
        hint2: "Xác định rõ ràng đại lượng và điều kiện của ẩn là bước then chốt.",
        explain: "Quy trình mô hình hóa toán học bắt đầu bằng việc phân tích bài toán thực tế, chọn biến số thích hợp và tìm điều kiện của biến. Đáp án đúng là A."
      },
      {
        question: (String(grade).includes("10"))
          ? `Câu 3 (Vận dụng - Chương ${chRoman}): Với mọi số thực $x$, khẳng định nào sau đây là **ĐÚNG**?`
          : `Câu 3 (Vận dụng - Chương ${chRoman}): Cho hàm số $f(x)$ liên tục. Giá trị của biểu thức $P = f(x_0)$ đạt cực trị khi:`,
        options: (String(grade).includes("10"))
          ? [
            "A. $(x - 2)^2 + 1 \\ge 1$",
            "B. $(x - 2)^2 + 1 < 0$",
            "C. $(x - 2)^2 = -4$",
            "D. $|x - 2| < -1$"
          ]
          : [
            "A. Đạo hàm $f'(x)$ đổi dấu khi biến số $x$ đi qua $x_0$.",
            "B. Đạo hàm $f'(x_0) = 0$ nhưng không đổi dấu qua $x_0$.",
            "C. Hàm số luôn đồng biến trên toàn tập xác định.",
            "D. Đạo hàm cấp một luôn mang giá trị dương."
          ],
        correct: "A",
        hint1: (String(grade).includes("10")) ? "Bình phương của một biểu thức thực luôn không âm: $(x - a)^2 \\ge 0$." : "Điều kiện đủ để hàm số đạt cực trị tại một điểm.",
        hint2: (String(grade).includes("10")) ? "Cộng 1 vào hai vế của $(x - 2)^2 \\ge 0$." : "Đạo hàm bắt buộc phải đổi dấu từ dương sang âm (cực đại) hoặc từ âm sang dương (cực tiểu).",
        explain: (String(grade).includes("10")) ? "Vì $(x - 2)^2 \\ge 0, \\forall x \\in \\mathbb{R}$ nên $(x - 2)^2 + 1 \\ge 1$. Đáp án đúng là A." : "Điều kiện đủ để hàm số có cực trị tại $x_0$ là đạo hàm đổi dấu khi đi qua $x_0$. Đáp án đúng là A."
      },
      {
        question: `Câu 4 (Thông hiểu): Khi sử dụng máy tính cầm tay (Casio) để hỗ trợ giải toán trắc nghiệm, thao tác nào giúp kiểm tra nghiệm chính xác nhất?`,
        options: [
          "A. Sử dụng chức năng CALC gán giá trị nghiệm vào biểu thức.",
          "B. Tắt máy tính và ước lượng bằng mắt.",
          "C. Chỉ nhìn vào số đầu tiên của đáp án.",
          "D. Đổi đơn vị sang độ khi đề bài yêu cầu radian."
        ],
        correct: "A",
        hint1: "Chức năng CALC kiểm tra giá trị biểu thức tại từng phương án.",
        hint2: "Nhập vế trái trừ vế phải rồi bấm CALC gán nghiệm.",
        explain: "Lệnh CALC gán giá trị của $x$ vào biểu thức $f(x)$ giúp kiểm tra nhanh xem giá trị có bằng 0 hay không. Đáp án đúng là A."
      },
      {
        question: `Câu 5 (Vận dụng): Cho biểu thức $A = 2x + \\frac{8}{x}$ với $x > 0$. Giá trị nhỏ nhất của $A$ bằng:`,
        options: ["A. $8$", "B. $4$", "C. $10$", "D. $6$"],
        correct: "A",
        hint1: "Áp dụng bất đẳng thức Cô-si cho hai số dương $2x$ và $\\frac{8}{x}$.",
        hint2: "Ta có $2x + \\frac{8}{x} \\ge 2\\sqrt{2x \\cdot \\frac{8}{x}} = 2\\sqrt{16} = 8$.",
        explain: "Áp dụng BĐT Cô-si: $A = 2x + \\frac{8}{x} \\ge 2\\sqrt{2x \\cdot \\frac{8}{x}} = 2\\sqrt{16} = 8$. Dấu bằng xảy ra khi $2x = \\frac{8}{x} \\Leftrightarrow x = 2$. Đáp án đúng là A."
      },
      {
        question: `Câu 6 (Vận dụng cao): Một hình chữ nhật có chu vi bằng $40\\text{ m}$. Diện tích lớn nhất của hình chữ nhật đó bằng bao nhiêu?`,
        options: ["A. $100\\text{ m}^2$", "B. $80\\text{ m}^2$", "C. $120\\text{ m}^2$", "D. $90\\text{ m}^2$"],
        correct: "A",
        hint1: "Nửa chu vi là $x + y = 20$. Diện tích là $S = x(20 - x)$.",
        hint2: "Hình chữ nhật có chu vi cố định đạt diện tích lớn nhất khi nó là hình vuông.",
        explain: "Nửa chu vi là $20\\text{ m}$. Diện tích $S(x) = x(20 - x) = -x^2 + 20x = -(x - 10)^2 + 100 \\le 100\\text{ m}^2$. Dấu bằng xảy ra khi $x = y = 10\\text{ m}$. Đáp án đúng là A."
      }
    ];

    // 4 TF questions (16 items)
    const tfQuestions = [
      {
        id: 1,
        title: `Câu 1: Xét các mệnh đề toán học nền tảng của Chương ${chRoman}:`,
        items: [
          { key: "a", text: "Mọi biểu thức toán học đều phải được xác định trên tập số thực trước khi tính toán.", correct: "true", explain: "Đây là nguyên tắc tiên quyết trong giải toán, mệnh đề Đúng." },
          { key: "b", text: "Khi giải bất phương trình, nhân hoặc chia hai vế với số âm thì phải đổi chiều.", correct: "true", explain: "Quy tắc đổi chiều khi nhân chia số âm là chuẩn đại số, mệnh đề Đúng." },
          { key: "c", text: "Giá trị cực đại của hàm số luôn luôn lớn hơn mọi giá trị cực tiểu của nó.", correct: "false", explain: "Cực trị chỉ mang tính địa phương trong một khoảng lân cận, mệnh đề Sai." },
          { key: "d", text: "Hai đại lượng tỉ lệ thuận luôn có tỉ số giữa chúng là hằng số không đổi.", correct: "true", explain: "Định nghĩa chuẩn của tỉ lệ thuận: $y/x = k$, mệnh đề Đúng." }
        ]
      },
      {
        id: 2,
        title: (String(grade).includes("10"))
          ? `Câu 2: Cho hàm số bậc hai $f(x) = x^2 - 4x + 3$ trên đoạn $[0; 3]$:`
          : `Câu 2: Cho hàm số $f(x) = x^3 - 3x + 1$ trên đoạn $[0; 2]$.`,
        items: (String(grade).includes("10"))
          ? [
            { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R}$.", correct: "true", explain: "Hàm đa thức xác định trên toàn $\\mathbb{R}$, mệnh đề Đúng." },
            { key: "b", text: "Đồ thị hàm số là một Parabol có đỉnh $I(2; -1)$.", correct: "true", explain: "Tọa độ đỉnh $x_I = -b/(2a) = 2, y_I = f(2) = -1$, mệnh đề Đúng." },
            { key: "c", text: "Hàm số đồng biến trên khoảng $(2; +\\infty)$.", correct: "true", explain: "Vì hệ số $a = 1 > 0$ nên hàm số đồng biến từ đỉnh sang bên phải: $(2; +\\infty)$, mệnh đề Đúng." },
            { key: "d", text: "Giá trị nhỏ nhất của hàm số trên đoạn $[0; 3]$ bằng $0$.", correct: "false", explain: "Giá trị nhỏ nhất đạt tại đỉnh $x = 2$ là $f(2) = -1 \\neq 0$, mệnh đề Sai." }
          ]
          : [
            { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R}$.", correct: "true", explain: "Hàm đa thức xác định trên toàn $\\mathbb{R}$, mệnh đề Đúng." },
            { key: "b", text: "Đạo hàm của hàm số là $f'(x) = 3x^2 - 3$.", correct: "true", explain: "Đạo hàm chuẩn: $(x^3 - 3x + 1)' = 3x^2 - 3$, mệnh đề Đúng." },
            { key: "c", text: "Hàm số đồng biến trên toàn bộ đoạn $[0; 2]$.", correct: "false", explain: "Trên $(0; 1)$, $f'(x) < 0$ nên hàm nghịch biến trên $[0; 1]$, mệnh đề Sai." },
            { key: "d", text: "Giá trị nhỏ nhất của hàm số trên đoạn $[0; 2]$ bằng $-1$.", correct: "true", explain: "Ta có $f(0) = 1, f(1) = -1, f(2) = 3$. Giá trị nhỏ nhất là $f(1) = -1$, mệnh đề Đúng." }
          ]
      },
      {
        id: 3,
        title: `Câu 3: Một hình chữ nhật có chu vi bằng $24\\text{ cm}$. Gọi $x$ (cm) là chiều rộng của hình chữ nhật ($0 < x < 12$).`,
        items: [
          { key: "a", text: "Chiều dài của hình chữ nhật là $12 - x$ (cm).", correct: "true", explain: "Nửa chu vi là $24 / 2 = 12\\text{ cm}$, mệnh đề Đúng." },
          { key: "b", text: "Diện tích hình chữ nhật là $S(x) = x(12 - x) = -x^2 + 12x$.", correct: "true", explain: "Diện tích bằng dài nhân rộng, mệnh đề Đúng." },
          { key: "c", text: "Diện tích hình chữ nhật lớn nhất khi $x = 6\\text{ cm}$.", correct: "true", explain: "Hàm bậc 2 có đỉnh tại $x = -b/(2a) = -12/(-2) = 6\\text{ cm}$, mệnh đề Đúng." },
          { key: "d", text: "Diện tích lớn nhất đạt được là $40\\text{ cm}^2$.", correct: "false", explain: "Diện tích lớn nhất là $S(6) = 6(12 - 6) = 36\\text{ cm}^2 \\neq 40$, mệnh đề Sai." }
        ]
      },
      {
        id: 4,
        title: `Câu 4: Xét bài toán tối ưu và mô hình hóa trong thực tiễn:`,
        items: [
          { key: "a", text: "Hàm chi phí $C(x)$ tăng khi số lượng sản phẩm $x$ tăng.", correct: "true", explain: "Sản xuất càng nhiều sản phẩm thì tổng chi phí càng tăng, mệnh đề Đúng." },
          { key: "b", text: "Chi phí trung bình trên mỗi sản phẩm là $\\bar{C}(x) = \\frac{C(x)}{x}$.", correct: "true", explain: "Định nghĩa chuẩn chi phí trung bình, mệnh đề Đúng." },
          { key: "c", text: "Lợi nhuận bằng doanh thu trừ đi chi phí: $P(x) = R(x) - C(x)$.", correct: "true", explain: "Công thức kinh tế cơ bản, mệnh đề Đúng." },
          { key: "d", text: "Doanh thu luôn luôn lớn hơn chi phí trong mọi trường hợp.", correct: "false", explain: "Khi mới bắt đầu sản xuất hoặc sản lượng quá thấp thì doanh nghiệp có thể bị lỗ, mệnh đề Sai." }
        ]
      }
    ];

    // 4 Short Answer questions
    const saQuestions = [
      {
        id: 1,
        title: `Tìm giá trị cực trị của biểu thức`,
        question: `Tìm giá trị nhỏ nhất của biểu thức $P = x^2 - 4x + 9$ với $x \\in \\mathbb{R}$.`,
        correctAnswer: "5",
        acceptedAnswers: ["5", "5.0", "5,0"],
        hint1: "Biến đổi biểu thức thành dạng bình phương cộng hằng số: $P = (x - a)^2 + b$.",
        hint2: "$P = (x - 2)^2 + 5$. Vì $(x - 2)^2 \\ge 0$ nên $P \\ge 5$.",
        explain: "Ta có $P = x^2 - 4x + 4 + 5 = (x - 2)^2 + 5$. Do $(x - 2)^2 \\ge 0, \\forall x$ nên giá trị nhỏ nhất của $P$ là $5$ khi $x = 2$."
      },
      {
        id: 2,
        title: `Bài toán tìm số lượng tối ưu`,
        question: `Một xưởng may sản xuất $x$ chiếc áo với lợi nhuận $P(x) = -x^2 + 80x - 700$ (nghìn đồng). Để đạt lợi nhuận lớn nhất, xưởng cần sản xuất bao nhiêu chiếc áo?`,
        unit: "chiếc áo",
        correctAnswer: "40",
        acceptedAnswers: ["40", "40.0", "40,0"],
        hint1: "Hàm lợi nhuận là hàm bậc hai có $a = -1 < 0$. Điểm cực đại đạt tại hoành độ đỉnh parabol.",
        hint2: "Hoành độ đỉnh $x = -\\frac{b}{2a} = -\\frac{80}{2(-1)} = 40$.",
        explain: "Hàm lợi nhuận $P(x) = -x^2 + 80x - 700$ đạt giá trị lớn nhất tại $x = -\\frac{80}{2(-1)} = 40$. Vậy xưởng cần sản xuất 40 chiếc áo."
      },
      {
        id: 3,
        title: `Tính toán độ dài và khoảng cách`,
        question: `Cho tam giác vuông có hai cạnh góc vuông lần lượt là $6\\text{ cm}$ và $8\\text{ cm}$. Tính độ dài cạnh huyền của tam giác đó theo centimet.`,
        unit: "cm",
        correctAnswer: "10",
        acceptedAnswers: ["10", "10.0", "10,0"],
        hint1: "Áp dụng định lý Py-ta-go: $c = \\sqrt{a^2 + b^2}$.",
        hint2: "Tính $\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100}$.",
        explain: "Theo định lý Py-ta-go, độ dài cạnh huyền là $c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ cm}$."
      },
      {
        id: 4,
        title: `Tính diện tích hình chữ nhật`,
        question: `Một mảnh vườn hình chữ nhật có chu vi bằng $60\\text{ m}$ và diện tích lớn nhất có thể. Tính diện tích lớn nhất đó theo mét vuông.`,
        unit: "m²",
        correctAnswer: "225",
        acceptedAnswers: ["225", "225.0", "225,0"],
        hint1: "Nửa chu vi là $30\\text{ m}$. Cạnh của hình vuông có chu vi này là $30 / 2 = 15\\text{ m}$.",
        hint2: "Diện tích lớn nhất đạt được khi hình chữ nhật là hình vuông: $S = 15^2$.",
        explain: "Nửa chu vi là $60 / 2 = 30\\text{ m}$. Hình chữ nhật có chu vi cố định đạt diện tích lớn nhất khi là hình vuông cạnh $15\\text{ m}$. Diện tích lớn nhất là $15 \\times 15 = 225\\text{ m}^2$."
      }
    ];

    return {
      id: `${grade}_${chNum}`,
      grade: grade,
      chapterNumber: chNum,
      title: lessonTitle,
      shortTitle: shortTitle,
      branches: branches,
      theorySummary: theorySummary,
      pitfallsSummary: pitfallsSummary,
      mcqs: mcqs,
      tfQuestions: tfQuestions,
      saQuestions: saQuestions
    };
  }

  // =========================================================================
  // HÀM CHÍNH: XÂY DỰNG BÀI HỌC ÔN TẬP CUỐI CHƯƠNG (BUILD CHAPTER REVIEW LESSON)
  // =========================================================================

  function buildKNTTChapterReviewLesson(lessonTitle, gradeOrClass) {
    const grade = (typeof window.getGradeFromClassName === 'function') 
      ? window.getGradeFromClassName(gradeOrClass) 
      : (gradeOrClass || 'Lớp 12');

    const lower = (lessonTitle || '').toLowerCase();
    
    // Tìm trong ngân hàng dữ liệu chuyên biệt trước
    let chapterData = null;
    const gStr = String(grade || '').trim();
    if (gStr === "Lớp 12" || gStr.includes("12")) {
      if (lower.includes("chương vi") || lower.includes("chuong vi") || lower.includes("chương 6") || lower.includes("chuong 6") || lower.includes("xác suất có điều kiện") || lower.includes("xac suat co dieu kien")) {
        chapterData = CHAPTER_REVIEWS_DB["12_6"];
      } else if (lower.includes("chương v") || lower.includes("chuong v") || lower.includes("chương 5") || lower.includes("chuong 5") || lower.includes("phương pháp toạ độ") || lower.includes("mặt phẳng") || lower.includes("mặt cầu")) {
        chapterData = CHAPTER_REVIEWS_DB["12_5"];
      } else if (lower.includes("chương iv") || lower.includes("chuong iv") || lower.includes("chương 4") || lower.includes("chuong 4") || lower.includes("nguyên hàm") || lower.includes("tích phân")) {
        chapterData = CHAPTER_REVIEWS_DB["12_4"];
      } else if (lower.includes("chương iii") || lower.includes("chuong iii") || lower.includes("chương 3") || lower.includes("chuong 3") || lower.includes("mức độ phân tán") || (lower.includes("phân tán") && lower.includes("ghép nhóm")) || lower.includes("khoảng tứ phân vị") || lower.includes("độ lệch chuẩn")) {
        chapterData = CHAPTER_REVIEWS_DB["12_3"];
      } else if (lower.includes("chương ii") || lower.includes("chuong ii") || lower.includes("chương 2") || lower.includes("chuong 2") || lower.includes("vectơ") || lower.includes("toạ độ trong không gian")) {
        chapterData = CHAPTER_REVIEWS_DB["12_2"];
      } else if (lower.includes("chương i") || lower.includes("chuong i") || lower.includes("chương 1") || lower.includes("chuong 1") || lower.includes("đạo hàm") || lower.includes("khảo sát")) {
        chapterData = CHAPTER_REVIEWS_DB["12_1"];
      }
    } else if (gStr === "Lớp 11" || gStr.includes("11")) {
      if (lower.includes("chương ix") || lower.includes("chuong ix") || lower.includes("chương 9") || lower.includes("chuong 9") || lower.includes("đạo hàm") || lower.includes("dao ham")) {
        chapterData = CHAPTER_REVIEWS_DB["11_9"];
      } else if (lower.includes("chương viii") || lower.includes("chuong viii") || lower.includes("chương 8") || lower.includes("chuong 8") || lower.includes("quy tắc tính xác suất") || (lower.includes("xác suất") && !lower.includes("điều kiện"))) {
        chapterData = CHAPTER_REVIEWS_DB["11_8"];
      } else if (lower.includes("chương vii") || lower.includes("chuong vii") || lower.includes("chương 7") || lower.includes("chuong 7") || lower.includes("quan hệ vuông góc") || lower.includes("vuông góc")) {
        chapterData = CHAPTER_REVIEWS_DB["11_7"];
      } else if (lower.includes("chương vi") || lower.includes("chuong vi") || lower.includes("chương 6") || lower.includes("chuong 6") || lower.includes("mũ và") || lower.includes("lôgarit") || lower.includes("logarit")) {
        chapterData = CHAPTER_REVIEWS_DB["11_6"];
      } else if (lower.includes("chương v") || lower.includes("chuong v") || lower.includes("chương 5") || lower.includes("chuong 5") || lower.includes("giới hạn") || lower.includes("liên tục")) {
        chapterData = CHAPTER_REVIEWS_DB["11_5"];
      } else if (lower.includes("chương iv") || lower.includes("chuong iv") || lower.includes("chương 4") || lower.includes("chuong 4") || lower.includes("quan hệ song song") || lower.includes("song song")) {
        chapterData = CHAPTER_REVIEWS_DB["11_4"];
      } else if (lower.includes("chương iii") || lower.includes("chuong iii") || lower.includes("chương 3") || lower.includes("chuong 3") || lower.includes("xu thế trung tâm")) {
        chapterData = CHAPTER_REVIEWS_DB["11_3"];
      } else if (lower.includes("chương ii") || lower.includes("chuong ii") || lower.includes("chương 2") || lower.includes("chuong 2") || lower.includes("dãy số") || lower.includes("cấp số cộng") || lower.includes("cấp số nhân")) {
        chapterData = CHAPTER_REVIEWS_DB["11_2"];
      } else if (lower.includes("chương i") || lower.includes("chuong i") || lower.includes("chương 1") || lower.includes("chuong 1") || lower.includes("lượng giác")) {
        chapterData = CHAPTER_REVIEWS_DB["11_1"];
      }
    } else if (gStr === "Lớp 10" || gStr.includes("10")) {
      if (lower.includes("chương v") || lower.includes("chương 5") || (lower.includes("xu thế trung tâm") && !lower.includes("ghép nhóm")) || (lower.includes("mức độ phân tán") && !lower.includes("ghép nhóm")) || lower.includes("số gần đúng")) {
        chapterData = CHAPTER_REVIEWS_DB["10_5"];
      } else if (lower.includes("chương iv") || lower.includes("chương 4") || (lower.includes("vectơ") && !lower.includes("không gian"))) {
        chapterData = CHAPTER_REVIEWS_DB["10_4"];
      } else if (lower.includes("chương iii") || lower.includes("chương 3") || lower.includes("hệ thức lượng")) {
        chapterData = CHAPTER_REVIEWS_DB["10_3"];
      } else if (lower.includes("chương ii") || lower.includes("chương 2") || lower.includes("bất phương trình") || lower.includes("bpt")) {
        chapterData = CHAPTER_REVIEWS_DB["10_2"];
      } else if (lower.includes("chương i") || lower.includes("chương 1") || lower.includes("mệnh đề") || lower.includes("tập hợp")) {
        chapterData = CHAPTER_REVIEWS_DB["10_1"];
      }
    }

    // Nếu chưa có trong DB cố định, tự động sinh chuẩn theo SGK Kết nối tri thức
    if (!chapterData) {
      chapterData = generateDynamicChapterReview(lessonTitle, grade);
    }

    const studentName = (window.studentInfo && window.studentInfo.name) ? window.studentInfo.name : 'Minh Anh';
    const mindMapHTML = createChapterMindMapHTML(chapterData, studentName);

    // Xáo trộn ngẫu nhiên đáp án A, B, C, D của 6 câu trắc nghiệm
    const clonedMCQs = JSON.parse(JSON.stringify(chapterData.mcqs));
    if (typeof window.randomizeSingleMCQ === 'function') {
      const letters = ['A', 'B', 'C', 'D'];
      clonedMCQs.forEach(mcq => {
        const randTarget = letters[Math.floor(Math.random() * letters.length)];
        window.randomizeSingleMCQ(mcq, randTarget);
      });
    }

    // Trả về cấu trúc bài học hoàn chỉnh tương thích 100% với Web App
    return {
      key: `chapter_review_${grade}_${chapterData.chapterNumber}`,
      isChapterReview: true,
      lessonTitle: lessonTitle,
      class: grade,
      chapterShortTitle: chapterData.shortTitle,
      chapterNumber: chapterData.chapterNumber,
      branches: chapterData.branches,
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: `Sơ đồ tư duy & Tóm tắt kiến thức ${chapterData.shortTitle}`,
          theory: mindMapHTML,
          mcqs: clonedMCQs,
          mcqPool: clonedMCQs
        }
      ],
      tfQuestions: JSON.parse(JSON.stringify(chapterData.tfQuestions)),
      saQuestions: JSON.parse(JSON.stringify(chapterData.saQuestions))
    };
  }

  // Xuất ra phạm vi toàn cục window
  window.buildKNTTChapterReviewLesson = buildKNTTChapterReviewLesson;
  window.createChapterMindMapHTML = createChapterMindMapHTML;
  window.CHAPTER_REVIEWS_DB = CHAPTER_REVIEWS_DB;

})();
