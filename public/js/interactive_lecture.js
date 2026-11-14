/**
 * Interactive Web Lecture Engine (KaTeX + SVG Vector + Edge-TTS Audio Sync)
 * Bài 1: Tính đơn điệu và cực trị của hàm số (Toán 12 - SGK Kết nối tri thức)
 * Thầy Thuấn Phan EdTech
 */

(function(window, document) {
  'use strict';

  if (window._INTERACTIVE_LECTURE_LOADED) return;
  window._INTERACTIVE_LECTURE_LOADED = true;

  // Auto-merge external Chapter 1 & Chapter 2 module data
  function ensureMergedData() {
    if (typeof window !== 'undefined') {
      if (window.CHAPTER1_LECTURES) Object.assign(LECTURE_DATA, window.CHAPTER1_LECTURES);
      if (window.CHAPTER1_DATA) Object.assign(LECTURE_DATA, window.CHAPTER1_DATA);
      if (window.CHAPTER2_DATA) Object.assign(LECTURE_DATA, window.CHAPTER2_DATA);
      if (window.CHAPTER3_DATA) Object.assign(LECTURE_DATA, window.CHAPTER3_DATA);
      if (window.CHAPTER4_DATA) Object.assign(LECTURE_DATA, window.CHAPTER4_DATA);
      if (window.CHAPTER5_DATA) Object.assign(LECTURE_DATA, window.CHAPTER5_DATA);
    }
  }

  // Dynamic script loader for Chapter data scaffolds
  (function tryLoadChapterData() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      if (!window.CHAPTER5_DATA) {
        const s5 = document.createElement('script');
        s5.src = (window.location.protocol === 'file:') ? 'js/chapter5_data.js' : '/js/chapter5_data.js';
        s5.onload = function() {
          if (window.CHAPTER5_DATA) Object.assign(LECTURE_DATA, window.CHAPTER5_DATA);
          if (typeof initSectionSelector === 'function') initSectionSelector();
        };
        s5.onerror = function() {
          const s5b = document.createElement('script');
          s5b.src = 'public/js/chapter5_data.js';
          s5b.onload = function() {
            if (window.CHAPTER5_DATA) Object.assign(LECTURE_DATA, window.CHAPTER5_DATA);
            if (typeof initSectionSelector === 'function') initSectionSelector();
          };
          document.head.appendChild(s5b);
        };
        document.head.appendChild(s5);
      }
      if (!window.CHAPTER4_DATA) {
        const s4 = document.createElement('script');
        s4.src = (window.location.protocol === 'file:') ? 'js/chapter4_data.js' : '/js/chapter4_data.js';
        s4.onload = function() {
          if (window.CHAPTER4_DATA) Object.assign(LECTURE_DATA, window.CHAPTER4_DATA);
          if (typeof initSectionSelector === 'function') initSectionSelector();
        };
        s4.onerror = function() {
          const s4b = document.createElement('script');
          s4b.src = 'public/js/chapter4_data.js';
          s4b.onload = function() {
            if (window.CHAPTER4_DATA) Object.assign(LECTURE_DATA, window.CHAPTER4_DATA);
            if (typeof initSectionSelector === 'function') initSectionSelector();
          };
          document.head.appendChild(s4b);
        };
        document.head.appendChild(s4);
      }
      if (!window.CHAPTER1_LECTURES) {
        const s1 = document.createElement('script');
        s1.src = (window.location.protocol === 'file:') ? 'js/chapter1_data.js' : '/js/chapter1_data.js';
        s1.onload = function() {
          if (window.CHAPTER1_LECTURES) Object.assign(LECTURE_DATA, window.CHAPTER1_LECTURES);
          if (typeof initSectionSelector === 'function') initSectionSelector();
        };
        s1.onerror = function() {
          const s1b = document.createElement('script');
          s1b.src = 'public/js/chapter1_data.js';
          s1b.onload = function() {
            if (window.CHAPTER1_LECTURES) Object.assign(LECTURE_DATA, window.CHAPTER1_LECTURES);
            if (typeof initSectionSelector === 'function') initSectionSelector();
          };
          document.head.appendChild(s1b);
        };
        document.head.appendChild(s1);
      }
            if (!window.CHAPTER3_DATA) {
        const s3 = document.createElement('script');
        s3.src = (window.location.protocol === 'file:') ? 'js/chapter3_data.js' : '/js/chapter3_data.js';
        s3.onload = function() {
          if (window.CHAPTER3_DATA) Object.assign(LECTURE_DATA, window.CHAPTER3_DATA);
          if (typeof initSectionSelector === 'function') initSectionSelector();
        };
        s3.onerror = function() {
          const s3b = document.createElement('script');
          s3b.src = 'public/js/chapter3_data.js';
          s3b.onload = function() {
            if (window.CHAPTER3_DATA) Object.assign(LECTURE_DATA, window.CHAPTER3_DATA);
            if (typeof initSectionSelector === 'function') initSectionSelector();
          };
          document.head.appendChild(s3b);
        };
        document.head.appendChild(s3);
      }
      if (!window.CHAPTER2_DATA) {
        const s2 = document.createElement('script');
        s2.src = (window.location.protocol === 'file:') ? 'js/chapter2_data.js' : '/js/chapter2_data.js';
        s2.onload = function() {
          if (window.CHAPTER2_DATA) Object.assign(LECTURE_DATA, window.CHAPTER2_DATA);
      if (window.CHAPTER3_DATA) Object.assign(LECTURE_DATA, window.CHAPTER3_DATA);
          if (typeof initSectionSelector === 'function') initSectionSelector();
        };
        s2.onerror = function() {
          const s2b = document.createElement('script');
          s2b.src = 'public/js/chapter2_data.js';
          s2b.onload = function() {
            if (window.CHAPTER2_DATA) Object.assign(LECTURE_DATA, window.CHAPTER2_DATA);
      if (window.CHAPTER3_DATA) Object.assign(LECTURE_DATA, window.CHAPTER3_DATA);
            if (typeof initSectionSelector === 'function') initSectionSelector();
          };
          document.head.appendChild(s2b);
        };
        document.head.appendChild(s2);
      }
    }
  })();

  // 1. DATA STORE
  const LECTURE_DATA = {
    muc1: {"lessonId": "bai1_muc1", "lessonTitle": "Bài 1: Tính đơn điệu và cực trị của hàm số", "sectionId": "muc1", "sectionTitle": "Mục 1: Tính đơn điệu của hàm số", "audioSrc": "./audio/bai1_muc1.mp3", "totalDuration": 341.24, "parts": [{"partNumber": 1, "partTitle": "Phần 1: Định nghĩa & Định lý điều kiện cần/đủ", "scenes": [1]}, {"partNumber": 2, "partTitle": "Phần 2: Bảng xét dấu đạo hàm, bảng biến thiên & Đồ thị SVG", "scenes": [2, 3]}, {"partNumber": 3, "partTitle": "Phần 3: 4 Ví dụ minh họa từ cơ bản đến nâng cao", "scenes": [2, 3, 4, 5]}, {"partNumber": 4, "partTitle": "Phần 4: Mascot Cú Thông Thái soi bẫy sai lầm & Quy trình 4 bước", "scenes": [6]}], "scenes": [{"sceneIndex": 1, "title": "BÀI 1: TÍNH ĐƠN ĐIỆU CỦA HÀM SỐ", "subtitle": "MỤC 1 • KHÁI NIỆM & ĐỊNH LÝ MỞ RỘNG", "startTime": 0.0, "endTime": 49.7, "duration": 49.7, "mascotMode": "pointer", "mascotTip": "<b>Ghi nhớ quy ước:</b> Dấu bằng của đạo hàm xảy ra tại hữu hạn điểm thì hàm số vẫn giữ nguyên tính đơn điệu!", "bodyHtml": "\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#fef08a; font-weight:bold; margin-bottom:4px;\">\n          1. Định nghĩa tính đơn điệu trên khoảng $K$:\n        </div>\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.55; color:#e2e8f0; margin-left:14px;\">\n          • Hàm số $f(x)$ <b>đồng biến (tăng)</b> trên $K \\iff \\forall x_1, x_2 \\in K: x_1 < x_2 \\implies f(x_1) < f(x_2)$.<br>\n          • Hàm số $f(x)$ <b>nghịch biến (giảm)</b> trên $K \\iff \\forall x_1, x_2 \\in K: x_1 < x_2 \\implies f(x_1) > f(x_2)$.\n        </div>\n\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#38bdf8; font-weight:bold; margin:10px 0 4px 0;\">\n          2. Định lý mở rộng về dấu của đạo hàm (Điều kiện đủ):\n        </div>\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.55; color:#e2e8f0; margin-left:14px;\">\n          Giả sử hàm số $f(x)$ có đạo hàm trên khoảng $K$:<br>\n          • Nếu $f'(x) \\ge 0, \\; \\forall x \\in K$ và $f'(x) = 0$ tại <b>hữu hạn điểm</b> $\\implies f(x)$ <b>đồng biến</b> trên $K$.<br>\n          • Nếu $f'(x) \\le 0, \\; \\forall x \\in K$ và $f'(x) = 0$ tại <b>hữu hạn điểm</b> $\\implies f(x)$ <b>nghịch biến</b> trên $K$.\n        </div>\n    ", "narration": "Chào các em học sinh thân mến! Hôm nay thầy sẽ hướng dẫn các em tìm hiểu Mục 1 của Bài 1: Tính đơn điệu của hàm số trong chương trình Toán lớp 12. Đầu tiên, về mặt định nghĩa: Hàm số f x đồng biến trên khoảng K nếu với mọi x 1 nhỏ hơn x 2 thì f x 1 luôn nhỏ hơn f x 2; nghĩa là khi biến số x tăng thì giá trị hàm số f x cũng tăng. Ngược lại, hàm số nghịch biến khi x tăng thì f x giảm. Về định lý mở rộng: Nếu đạo hàm f phẩy x lớn hơn hoặc bằng 0 trên khoảng K, và dấu bằng chỉ xảy ra tại một số hữu hạn điểm thì hàm số đồng biến trên khoảng K. Tương tự, nếu f phẩy x nhỏ hơn hoặc bằng 0 và bằng 0 tại hữu hạn điểm thì hàm số nghịch biến."}, {"sceneIndex": 2, "title": "VÍ DỤ 1: ĐỌC TÍNH ĐƠN ĐIỆU TỪ BẢNG XÉT DẤU ĐẠO HÀM", "subtitle": "MỤC 1 • KỸ NĂNG ĐỌC BẢNG XÉT DẤU", "startTime": 49.7, "endTime": 97.24, "duration": 47.54, "mascotMode": "magnifier", "mascotTip": "<b>Cảnh báo bẫy:</b> Tuyệt đối <b>không dùng ký hiệu hợp ∪</b> để nối các khoảng! Bắt buộc viết từ <b>'và'</b> hoặc dấu phẩy.", "bodyHtml": "\n        <div style=\"font-size:clamp(14px, 1.8vh, 17px); color:#fef08a; margin-bottom:4px;\">\n          <b>Đề bài:</b> Cho hàm số $y = f(x)$ có bảng xét dấu của đạo hàm $f'(x)$ như sau:\n        </div>\n\n        <table class=\"bbt-table\" style=\"width:100%; border-collapse:collapse; border-top:2px solid #cbd5e1; border-bottom:2px solid #cbd5e1; margin:8px 0; background:rgba(15,23,42,0.75);\">\n          <tr style=\"border-bottom:1.5px solid #64748b;\">\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(15px, 2vh, 18px); border-right:2px solid #cbd5e1; padding:6px 0; color:#f8fafc;\">$x$</td>\n            <td style=\"padding:6px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(13px, 1.7vh, 16px); color:#f8fafc; font-weight:600;\">\n                <span style=\"white-space:nowrap;\">$-\\infty$</span>\n                <span style=\"color:#fef08a;\">$-3$</span>\n                <span style=\"color:#fef08a;\">$0$</span>\n                <span style=\"color:#fef08a;\">$2$</span>\n                <span style=\"white-space:nowrap;\">$+\\infty$</span>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(15px, 2vh, 18px); border-right:2px solid #cbd5e1; padding:6px 0; color:#f8fafc;\">$f'(x)$</td>\n            <td style=\"padding:6px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(14px, 1.8vh, 18px); font-weight:bold;\">\n                <span style=\"width:18px;\"></span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"width:18px;\"></span>\n              </div>\n            </td>\n          </tr>\n        </table>\n\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.5; color:#e2e8f0;\">\n          • Hàm số <b>đồng biến</b> trên các khoảng: $(-\\infty; -3)$ và $(0; 2)$.<br>\n          • Hàm số <b>nghịch biến</b> trên các khoảng: $(-3; 0)$ và $(2; +\\infty)$.\n        </div>\n    ", "narration": "Chúng ta cùng đến với Ví dụ 1: Nhận diện tính đơn điệu từ bảng xét dấu của đạo hàm f phẩy x. Quan sát bảng xét dấu, các em hãy chú ý: Tại các khoảng mà f phẩy x mang dấu cộng, đó là khoảng hàm số đồng biến. Cụ thể ở đây, dấu cộng xuất hiện trên hai khoảng: từ âm vô cùng đến âm 3, và khoảng từ 0 đến 2. Tại các khoảng f phẩy x mang dấu trừ, đó là khoảng hàm số nghịch biến: gồm khoảng từ âm 3 đến 0, và khoảng từ 2 đến dương vô cùng. Thầy đặc biệt lưu ý các em: Khi ghi kết luận, chúng ta dùng từ và, hoặc dấu chấm phẩy để nối các khoảng riêng biệt. Tuyệt đối không dùng ký hiệu hợp chữ U, vì đây là lỗi sai kinh điển thường bị trừ điểm trong các đề thi trắc nghiệm và tự luận."}, {"sceneIndex": 3, "title": "VÍ DỤ 2: ĐỌC TÍNH ĐƠN ĐIỆU TỪ ĐỒ THỊ HÀM SỐ", "subtitle": "MỤC 1 • QUY TẮC NHÌN ĐỒ THỊ TỪ TRÁI SANG PHẢI", "startTime": 97.24, "endTime": 148.98, "duration": 51.74, "mascotMode": "pointer", "mascotTip": "<b>Mẹo chiếu tọa độ:</b> Chiếu vuông góc các đoạn đồ thị xuống <b>trục hoành Ox</b> để lấy khoảng biến $x$, không nhìn nhầm trục $Oy$!", "bodyHtml": "\n        <div style=\"display:flex; gap:20px; align-items:center; justify-content:center;\">\n          <!-- SVG Graph -->\n          <div style=\"flex:1; max-width:440px; background:rgba(15,23,42,0.6); border:1.5px solid rgba(56,189,248,0.5); border-radius:14px; padding:10px; display:flex; justify-content:center; align-items:center;\">\n            <svg viewBox=\"0 0 360 260\" style=\"width:100%; max-width:360px; height:auto; max-height:36vh; background:transparent;\">\n              <!-- Ox Axis -->\n              <line x1=\"25\" y1=\"130\" x2=\"335\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n              <polygon points=\"335,130 324,125 324,135\" fill=\"#94a3b8\"/>\n              <text x=\"338\" y=\"135\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-weight=\"bold\" font-family=\"serif\">x</text>\n              <!-- Oy Axis -->\n              <line x1=\"180\" y1=\"240\" x2=\"180\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n              <polygon points=\"180,20 175,31 185,31\" fill=\"#94a3b8\"/>\n              <text x=\"174\" y=\"16\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-weight=\"bold\" font-family=\"serif\">y</text>\n              <!-- Origin O -->\n              <text x=\"164\" y=\"146\" fill=\"#cbd5e1\" font-size=\"15\" font-style=\"italic\" font-family=\"serif\">O</text>\n              <!-- Curve y = x^3 - 3x -->\n              <path d=\"M 55,250 C 75,170 95,50 120,50 C 145,50 160,95 180,130 C 200,165 215,210 240,210 C 265,210 285,90 305,10\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n              <!-- Label Curve -->\n              <text x=\"38\" y=\"36\" fill=\"#38bdf8\" font-size=\"15\" font-weight=\"bold\" font-style=\"italic\" font-family=\"serif\">y = x³ - 3x</text>\n              <!-- Cực Đại (-1; 2) -->\n              <line x1=\"120\" y1=\"50\" x2=\"120\" y2=\"130\" stroke=\"#fef08a\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/>\n              <line x1=\"120\" y1=\"50\" x2=\"180\" y2=\"50\" stroke=\"#fef08a\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/>\n              <line x1=\"120\" y1=\"127\" x2=\"120\" y2=\"133\" stroke=\"#94a3b8\" stroke-width=\"1.6\"/>\n              <line x1=\"177\" y1=\"50\" x2=\"183\" y2=\"50\" stroke=\"#94a3b8\" stroke-width=\"1.6\"/>\n              <circle cx=\"120\" cy=\"50\" r=\"4.5\" fill=\"#fef08a\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\n              <text x=\"110\" y=\"148\" fill=\"#fef08a\" font-size=\"15\" font-weight=\"bold\" font-family=\"serif\">-1</text>\n              <text x=\"187\" y=\"55\" fill=\"#fef08a\" font-size=\"15\" font-weight=\"bold\" font-family=\"serif\">2</text>\n              <!-- Cực Tiểu (1; -2) -->\n              <line x1=\"240\" y1=\"210\" x2=\"240\" y2=\"130\" stroke=\"#f43f5e\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/>\n              <line x1=\"240\" y1=\"210\" x2=\"180\" y2=\"210\" stroke=\"#f43f5e\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/>\n              <line x1=\"240\" y1=\"127\" x2=\"240\" y2=\"133\" stroke=\"#94a3b8\" stroke-width=\"1.6\"/>\n              <line x1=\"177\" y1=\"210\" x2=\"183\" y2=\"210\" stroke=\"#94a3b8\" stroke-width=\"1.6\"/>\n              <circle cx=\"240\" cy=\"210\" r=\"4.5\" fill=\"#f43f5e\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\n              <text x=\"236\" y=\"123\" fill=\"#f43f5e\" font-size=\"15\" font-weight=\"bold\" font-family=\"serif\">1</text>\n              <text x=\"187\" y=\"215\" fill=\"#f43f5e\" font-size=\"15\" font-weight=\"bold\" font-family=\"serif\">-2</text>\n            </svg>\n          </div>\n          <!-- Notes -->\n          <div style=\"flex:1; font-size:clamp(13px, 1.6vh, 15px); line-height:1.55; color:#e2e8f0;\">\n            <div style=\"color:#fef08a; font-weight:bold; margin-bottom:4px;\">Quy tắc đọc từ Đồ thị:</div>\n            • Nhìn đồ thị từ <b>trái sang phải</b> (theo chiều tăng trục $Ox$):<br>\n            • Nét đồ thị <b>đi lên</b>: Đồng biến trên $(-\\infty; -1)$ và $(1; +\\infty)$.<br>\n            • Nét đồ thị <b>đi xuống</b>: Nghịch biến trên $(-1; 1)$.<br>\n            <div class=\"trap-warning-box\" style=\"margin-top:10px; padding:12px 18px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:22px !important; line-height:1.5; font-weight:600; color:#fecdd3;\">\n              <span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-right:4px;\">Bẫy đề thi:</span> Kết luận theo <b>biến $x$</b>, tuyệt đối không nhìn nhầm sang trục $y$!\n            </div>\n          </div>\n        </div>\n    ", "narration": "Ở Ví dụ 2, chúng ta cùng rèn luyện kỹ năng đọc khoảng đơn điệu từ đồ thị của hàm số y bằng f x. Quy tắc cơ bản là các em hãy quan sát dáng điệu đồ thị từ trái sang phải, tức là theo chiều tăng dần của biến x. Từ âm vô cùng đến x bằng âm 1, nét đồ thị đi lên từ dưới lên trên, tương ứng hàm số đồng biến. Từ x bằng âm 1 đến x bằng 2, nét đồ thị đi xuống, hàm số nghịch biến. Và từ x bằng 2 đến dương vô cùng, nét đồ thị lại đi lên, hàm số đồng biến. Điểm mấu chốt ở đây là: Các em phải gióng vuông góc các điểm uốn lượn xuống trục hoành O x để lấy khoảng giá trị của x, ví dụ khoảng âm vô cùng đến âm 1 và 2 đến dương vô cùng. Tuyệt đối không lấy nhầm giá trị trên trục tung O y."}, {"sceneIndex": 4, "title": "VÍ DỤ 3: HÀM CÓ ĐẠO HÀM DẠNG TÍCH (NGHIỆM BỘI)", "subtitle": "MỤC 1 • QUY TẮC ĐAN DẤU NGHIỆM BỘI CHẴN / LẺ", "startTime": 148.98, "endTime": 219.8, "duration": 70.82, "mascotMode": "magnifier", "mascotTip": "<b>Bí quyết vàng:</b> Qua nghiệm <b>bội chẵn</b> đạo hàm <b>KHÔNG đổi dấu</b>; chỉ đan dấu qua các nghiệm <b>bội lẻ</b>!", "bodyHtml": "\n        <div style=\"font-size:clamp(14px, 1.8vh, 17px); color:#fef08a; margin-bottom:4px;\">\n          <b>Đề bài:</b> Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = (x-1)^2 (x+2)^3 (x-4)$. Tìm khoảng đơn điệu.\n        </div>\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); color:#cbd5e1;\">\n          Nghiệm $f'(x) = 0 \\iff x = 1$ (bội 2 - chẵn), $\\; x = -2$ (bội 3 - lẻ), $\\; x = 4$ (bội 1 - lẻ).\n        </div>\n\n        <table class=\"bbt-table\" style=\"width:100%; border-collapse:collapse; border-top:2px solid #cbd5e1; border-bottom:2px solid #cbd5e1; margin:6px 0; background:rgba(15,23,42,0.75);\">\n          <tr style=\"border-bottom:1.5px solid #64748b;\">\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(15px, 2vh, 18px); border-right:2px solid #cbd5e1; padding:5px 0; color:#f8fafc;\">$x$</td>\n            <td style=\"padding:5px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(13px, 1.7vh, 16px); color:#f8fafc; font-weight:600;\">\n                <span style=\"white-space:nowrap;\">$-\\infty$</span>\n                <span style=\"color:#fef08a;\">$-2$</span>\n                <span style=\"color:#f87171;\">$1$</span>\n                <span style=\"color:#fef08a;\">$4$</span>\n                <span style=\"white-space:nowrap;\">$+\\infty$</span>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(15px, 2vh, 18px); border-right:2px solid #cbd5e1; padding:5px 0; color:#f8fafc;\">$f'(x)$</td>\n            <td style=\"padding:5px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(14px, 1.8vh, 18px); font-weight:bold;\">\n                <span style=\"width:18px;\"></span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"color:#94a3b8;\">$0$</span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"width:18px;\"></span>\n              </div>\n            </td>\n          </tr>\n        </table>\n\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); line-height:1.45; color:#a7f3d0;\">\n          • Qua nghiệm bội chẵn $x = 1$, đạo hàm <b>KHÔNG đổi dấu</b> (vẫn mang dấu $-$).<br>\n          • Hàm số đồng biến trên: $(-\\infty; -2)$ và $(4; +\\infty)$. Nghịch biến trên khoảng: $(-2; 4)$.\n        </div>\n    ", "narration": "Ví dụ 3 là một dạng toán rất phổ biến trong đề thi: Cho đạo hàm f phẩy x dưới dạng tích các lũy thừa. Cụ thể: f phẩy x bằng x trừ 1 tất cả bình phương, nhân x cộng 2 tất cả mũ 3, nhân x trừ 4. Để xét dấu biểu thức này, các em giải f phẩy x bằng 0, thu được 3 nghiệm: x bằng âm 2, x bằng 1, và x bằng 4. Bí quyết then chốt ở đây là phân biệt nghiệm bội chẵn và nghiệm bội lẻ. Nghiệm x bằng 1 có số mũ 2 là bội chẵn, vì bình phương luôn không âm nên đạo hàm sẽ không đổi dấu khi đi qua x bằng 1. Ngược lại, x bằng âm 2 có số mũ 3 là bội lẻ, và x bằng 4 có số mũ 1 là bội lẻ, nên đạo hàm sẽ đan dấu qua hai nghiệm này. Thử một giá trị x bằng 5 lớn hơn 4, ta thấy f phẩy x mang dấu dương. Do đó ta điền dấu: qua 4 đổi sang âm, qua 1 giữ nguyên dấu âm, và qua âm 2 đổi sang dương. Kết luận: hàm số đồng biến trên khoảng âm vô cùng đến âm 2 và khoảng 4 đến dương vô cùng; nghịch biến trên khoảng âm 2 đến 4."}, {"sceneIndex": 5, "title": "VÍ DỤ 4: KHẢO SÁT TÍNH ĐƠN ĐIỆU CỦA HÀM BẬC BA", "subtitle": "MỤC 1 • TRÌNH BÀY BẢNG BIẾN THIÊN MẪU MỰC", "startTime": 219.8, "endTime": 307.64, "duration": 87.84, "mascotMode": "pointer", "mascotTip": "<b>Quy tắc tam thức bậc 2:</b> 'Trong trái ngoài cùng' — trong khoảng giữa 2 nghiệm mang dấu trái với hệ số $a = 3 > 0$!", "bodyHtml": "\n        <div style=\"font-size:clamp(14px, 1.8vh, 17px); color:#fef08a; margin-bottom:4px;\">\n          <b>Khảo sát tính đơn điệu:</b> $y = -x^3 + 3x^2 + 9x - 1$\n        </div>\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); color:#cbd5e1;\">\n          TXĐ: $D = \\mathbb{R}$. $\\; y' = -3x^2 + 6x + 9 = -3(x+1)(x-3) = 0 \\iff x = -1$ hoặc $x = 3$.\n        </div>\n\n        <table class=\"bbt-table\" style=\"width:100%; border-collapse:collapse; border-top:2px solid #cbd5e1; border-bottom:2px solid #cbd5e1; margin:6px 0; background:rgba(15,23,42,0.75);\">\n          <tr style=\"border-bottom:1.5px solid #64748b;\">\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:4px 0; color:#f8fafc;\">$x$</td>\n            <td style=\"padding:4px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(13px, 1.6vh, 15px); color:#f8fafc; font-weight:600;\">\n                <span style=\"white-space:nowrap;\">$-\\infty$</span>\n                <span style=\"color:#fef08a;\">$-1$</span>\n                <span style=\"color:#fef08a;\">$3$</span>\n                <span style=\"white-space:nowrap;\">$+\\infty$</span>\n              </div>\n            </td>\n          </tr>\n          <tr style=\"border-bottom:1.5px solid #64748b;\">\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:4px 0; color:#f8fafc;\">$y'$</td>\n            <td style=\"padding:4px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(14px, 1.8vh, 17px); font-weight:bold;\">\n                <span style=\"width:18px;\"></span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"width:18px;\"></span>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:4px 0; color:#f8fafc;\">$y$</td>\n            <td style=\"padding:4px 16px;\">\n              <div style=\"display:flex; align-items:center; height:58px; font-size:clamp(13px, 1.6vh, 16px);\">\n                <span style=\"align-self:flex-start; white-space:nowrap; font-weight:bold;\">$+\\infty$</span>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"6\" x2=\"90\" y2=\"28\" stroke=\"#f87171\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,28 84,19 80,27\" fill=\"#f87171\"/></svg></div>\n                <span style=\"align-self:flex-end; color:#f43f5e; font-weight:bold; padding:0 4px;\">$-6$</span>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"28\" x2=\"90\" y2=\"6\" stroke=\"#4ade80\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,6 80,7 84,15\" fill=\"#4ade80\"/></svg></div>\n                <span style=\"align-self:flex-start; color:#38bdf8; font-weight:bold; padding:0 4px;\">$26$</span>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"6\" x2=\"90\" y2=\"28\" stroke=\"#f87171\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,28 84,19 80,27\" fill=\"#f87171\"/></svg></div>\n                <span style=\"align-self:flex-end; white-space:nowrap; font-weight:bold;\">$-\\infty$</span>\n              </div>\n            </td>\n          </tr>\n        </table>\n\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); line-height:1.45; color:#a7f3d0;\">\n          • Đồng biến trên $(-1; 3)$. Nghịch biến trên hai khoảng: $(-\\infty; -1)$ và $(3; +\\infty)$.\n        </div>\n    ", "narration": "Bây giờ chúng ta cùng thực hiện một bài toán khảo sát hoàn chỉnh ở Ví dụ 4: Xét tính đơn điệu của hàm số bậc ba y bằng x mũ 3 trừ 3 x bình phương trừ 9 x cộng 2. Quy trình gồm 4 bước chuẩn mực: Bước 1, Tập xác định D bằng R. Bước 2, tính đạo hàm: y phẩy bằng 3 x bình trừ 6 x trừ 9, đặt 3 ra ngoài ta được 3 nhân mở ngoặc x bình trừ 2 x trừ 3 đóng ngoặc. Bước 3, giải phương trình y phẩy bằng 0, bấm máy tính hoặc nhẩm nghiệm a trừ b cộng c bằng 0, ta được x bằng âm 1 và x bằng 3. Bước 4, lập bảng biến thiên. Vì y phẩy là tam thức bậc hai có hệ số a bằng 3 dương, nên theo quy tắc trong trái ngoài cùng: trong khoảng giữa hai nghiệm âm 1 và 3, y phẩy mang dấu trừ. Ngoài khoảng hai nghiệm, y phẩy mang dấu cộng. Mũi tên của y sẽ đi lên từ âm vô cùng tới 7, đi xuống từ 7 về âm 25, rồi lại đi lên tới dương vô cùng. Kết luận: hàm số đồng biến trên hai khoảng âm vô cùng đến âm 1 và 3 đến dương vô cùng; nghịch biến trên khoảng âm 1 đến 3."}, {"sceneIndex": 6, "title": "TỔNG KẾT MỤC 1 & CÚ THÔNG THÁI SOI BẪY SAI LẦM", "subtitle": "MỤC 1 • 2 BẪY KINH ĐIỂN CẦN TRÁNH", "startTime": 307.64, "endTime": 341.24, "duration": 33.6, "mascotMode": "cheer", "mascotTip": "<b>Chúc mừng các em!</b> Hãy nắm chắc 4 bước và 2 bẫy sai lầm trên trước khi bước sang Mục 2: Cực trị của hàm số.", "bodyHtml": "\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#fef08a; font-weight:bold; margin-bottom:4px;\">\n          1. Quy trình 4 bước chuẩn mực khảo sát đơn điệu:\n        </div>\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.55; color:#e2e8f0; margin-left:14px;\">\n          <b>Bước 1:</b> Tìm Tập xác định $D$.<br>\n          <b>Bước 2:</b> Tính đạo hàm $y' = f'(x)$. Tìm các nghiệm $x_i$ (hoặc điểm $y'$ không xác định).<br>\n          <b>Bước 3:</b> Lập Bảng xét dấu $f'(x)$ hoặc Bảng biến thiên.<br>\n          <b>Bước 4:</b> Đọc kết luận các khoảng đồng biến, nghịch biến.\n        </div>\n\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#f43f5e; font-weight:bold; margin:8px 0 4px 0;\">\n          2. Cú Thông Thái cảnh báo bẫy trắc nghiệm:\n        </div>\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.55; color:#e2e8f0; margin-left:14px;\">\n          • <b>Bẫy 1:</b> Dùng dấu hợp $\\cup$ hoặc dấu trừ $\\setminus$ $\\implies$ <b>SAI HOÀN TOÀN</b>! Bắt buộc dùng chữ \"và\" hoặc dấu phẩy.<br>\n          • <b>Bẫy 2:</b> Quên điều kiện $f'(x) = 0$ tại hữu hạn điểm.\n        </div>\n    ", "narration": "Để tổng kết Mục 1, thầy và Cú Thông Thái muốn nhắc các em quy trình 4 bước: tìm tập xác định, tính đạo hàm, giải phương trình đạo hàm bằng 0, và lập bảng biến thiên để kết luận. Hãy luôn khắc ghi hai cái bẫy thường gặp nhất: Thứ nhất, không bao giờ dùng ký hiệu hợp chữ U khi kết luận khoảng đồng biến nghịch biến; phải dùng từ và. Thứ hai, khi đề bài cho đồ thị, hãy đọc thật kỹ đề bài xem đó là đồ thị của f x hay đồ thị của đạo hàm f phẩy x. Với đồ thị đạo hàm, khoảng đồng biến là phần đồ thị nằm phía trên trục hoành. Xin chúc mừng các em đã làm chủ Mục 1! Bây giờ chúng ta cùng sẵn sàng bước sang Mục 2 về Cực trị của hàm số."}]},
    muc2: {"lessonId": "bai1_muc2", "lessonTitle": "Bài 1: Tính đơn điệu và cực trị của hàm số", "sectionId": "muc2", "sectionTitle": "Mục 2: Cực trị của hàm số", "audioSrc": "./audio/bai1_muc2.mp3", "totalDuration": 269.68, "parts": [{"partNumber": 1, "partTitle": "Phần 1: Định nghĩa trực quan cực trị & Điều kiện cần/đủ (Dấu hiệu 1)", "scenes": [1, 2]}, {"partNumber": 2, "partTitle": "Phần 2: Bảng biến thiên có điểm không xác định chuẩn Bộ GD&ĐT", "scenes": [3]}, {"partNumber": 3, "partTitle": "Phần 3: 4 Ví dụ minh họa tiêu biểu từ cơ bản đến nâng cao", "scenes": [3, 4, 5, 6]}, {"partNumber": 4, "partTitle": "Phần 4: Mascot Cú Thông Thái soi bẫy sai lầm & Đạo hàm cấp hai (Dấu hiệu 2)", "scenes": [6]}], "scenes": [{"sceneIndex": 1, "title": "BÀI 1: CỰC TRỊ CỦA HÀM SỐ", "subtitle": "MỤC 2 • PHÂN BIỆT 3 THUẬT NGỮ CỐT LÕI", "startTime": 0.0, "endTime": 49.03, "duration": 49.03, "mascotMode": "pointer", "mascotTip": "<b>Đọc kỹ câu hỏi:</b> Hỏi 'điểm cực trị của hàm số' là tìm <b>x</b>; hỏi 'giá trị cực trị' là tìm <b>y</b>; hỏi 'của đồ thị' là tìm cặp <b>(x; y)</b>!", "bodyHtml": "\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#fef08a; font-weight:bold; margin-bottom:4px;\">\n          1. Định nghĩa cực đại và cực tiểu của hàm số:\n        </div>\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); line-height:1.5; color:#e2e8f0; margin-left:14px;\">\n          Cho hàm số $y = f(x)$ xác định trên tập $D$ và $x_0 \\in (a; b) \\subset D$:<br>\n          • Điểm $x_0$ gọi là <b>điểm cực đại</b> của hàm số nếu:\n          <span style=\"color:#38bdf8; font-weight:bold; margin-left:6px;\">$f(x) < f(x_0), \\; \\forall x \\in (a; b) \\setminus \\{x_0\\}$</span>. Khi đó $f(x_0)$ là <b>giá trị cực đại</b> ($y_{\\text{CĐ}}$).<br>\n          • Điểm $x_0$ gọi là <b>điểm cực tiểu</b> của hàm số nếu:\n          <span style=\"color:#4ade80; font-weight:bold; margin-left:6px;\">$f(x) > f(x_0), \\; \\forall x \\in (a; b) \\setminus \\{x_0\\}$</span>. Khi đó $f(x_0)$ là <b>giá trị cực tiểu</b> ($y_{\\text{CT}}$).\n        </div>\n\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#38bdf8; font-weight:bold; margin:8px 0 4px 0;\">\n          2. Phân biệt rõ 3 thuật ngữ cốt lõi (Tránh bẫy trắc nghiệm):\n        </div>\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); line-height:1.5; color:#e2e8f0; margin-left:14px;\">\n          • <b>Điểm cực trị của HÀM SỐ:</b> Là giá trị của biến số $x$ (ví dụ: $x = -1, \\; x = 3$).<br>\n          • <b>Cực trị (hoặc Giá trị cực trị) của HÀM SỐ:</b> Là giá trị $y = f(x)$ (ví dụ: $y_{\\text{CĐ}} = 7, \\; y_{\\text{CT}} = -25$).<br>\n          • <b>Điểm cực trị của ĐỒ THỊ hàm số:</b> Là điểm $M(x; y)$ trên mặt phẳng tọa độ $Oxy$ (ví dụ: $M(-1; 7)$).\n        </div>\n    ", "narration": "Chào các em! Thầy và Cú Thông Thái xin chào mừng các em đến với Mục 2 của Bài 1: Cực trị của hàm số. Trước tiên, các em cần nắm vững định nghĩa: Điểm cực đại là điểm mà tại đó giá trị hàm số lớn hơn mọi giá trị lân cận; còn điểm cực tiểu là điểm có giá trị nhỏ hơn mọi giá trị lân cận. Đặc biệt, trong đề thi trắc nghiệm Bộ Giáo dục, học sinh rất hay nhầm lẫn giữa 3 khái niệm: Một là Điểm cực trị của hàm số - đó chính là giá trị x 0. Hai là Cực trị hay Giá trị cực trị - đó là giá trị y 0 bằng f của x 0. Ba là Điểm cực trị của đồ thị hàm số - đây là một điểm có tọa độ M gồm cả hoành độ x 0 và tung độ y 0. Hãy đọc thật kỹ từng chữ trong câu hỏi để không bị mất điểm oan."}, {"sceneIndex": 2, "title": "ĐIỀU KIỆN ĐỦ ĐỂ CÓ CỰC TRỊ (DẤU HIỆU 1)", "subtitle": "MỤC 2 • SỰ ĐỔI DẤU CỦA ĐẠO HÀM f'(x)", "startTime": 49.03, "endTime": 91.15, "duration": 42.12, "mascotMode": "magnifier", "mascotTip": "<b>Lưu ý vàng:</b> Tại $x_0$, đạo hàm có vạch kép $||$ nhưng hàm số <b>vẫn liên tục</b> thì $x_0$ <b>vẫn là điểm cực trị</b>!", "bodyHtml": "\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#fef08a; font-weight:bold; margin-bottom:4px;\">\n          Định lý (Dấu hiệu 1 - Đổi dấu đạo hàm qua $x_0$):\n        </div>\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.55; color:#e2e8f0; margin-left:14px;\">\n          Giả sử hàm số $f(x)$ liên tục trên khoảng $(a; b)$ chứa $x_0$ và có đạo hàm trên $(a; b) \\setminus \\{x_0\\}$:<br>\n          • Nếu $f'(x)$ đổi dấu từ <b>$(+)$ sang $(-)$</b> khi qua $x_0 \\implies x_0$ là <b>điểm CỰC ĐẠI</b>.<br>\n          • Nếu $f'(x)$ đổi dấu từ <b>$(-)$ sang $(+)$</b> khi qua $x_0 \\implies x_0$ là <b>điểm CỰC TIỂU</b>.<br>\n          <div style=\"margin-top:8px; padding:6px 12px; background:rgba(56,189,248,0.12); border-left:3px solid #38bdf8; border-radius:6px; font-size:clamp(12px, 1.5vh, 14px);\">\n            <b>Lưu ý vàng:</b> Tại $x_0$, đạo hàm $f'(x_0)$ <b>có thể không xác định</b> (vạch kép $||$), nhưng nếu hàm số $f(x)$ <b>liên tục tại $x_0$</b> và đạo hàm đổi dấu thì $x_0$ <b>VẪN LÀ ĐIỂM CỰC TRỊ</b>!\n          </div>\n        </div>\n    ", "narration": "Chúng ta cùng tìm hiểu Dấu hiệu 1 để tìm cực trị, đó là dựa vào sự đổi dấu của đạo hàm f phẩy x khi đi qua điểm x 0. Quy tắc rất trực quan: Nếu f phẩy đổi dấu từ dương sang âm, đồ thị đi lên rồi đi xuống như một đỉnh núi, thì x 0 là điểm cực đại. Nếu f phẩy đổi dấu từ âm sang dương, đồ thị đi xuống rồi đi lên như đáy thung lũng, thì x 0 là điểm cực tiểu. Nếu f phẩy không đổi dấu thì x 0 không phải là điểm cực trị. Và đây là điều Cú Thông Thái lưu ý đặc biệt cho các em: Tại điểm x 0, đạo hàm f phẩy có thể không tồn tại, tức là có vạch kẻ kép ở hàng đạo hàm, nhưng miễn là hàm số f x liên tục và xác định tại x 0, đồng thời đạo hàm hai bên đổi dấu, thì x 0 vẫn được công nhận là một điểm cực trị của hàm số."}, {"sceneIndex": 3, "title": "VÍ DỤ 1: ĐỌC CỰC TRỊ TỪ BẢNG BIẾN THIÊN", "subtitle": "MỤC 2 • XỬ LÝ ĐIỂM CÓ ĐẠO HÀM KHÔNG XÁC ĐỊNH", "startTime": 91.15, "endTime": 119.73, "duration": 28.58, "mascotMode": "pointer", "mascotTip": "<b>Quan sát kỹ:</b> Tại $x = 0$, hàng $f'(x)$ có vạch kép $||$ nhưng hàng $f(x)$ xác định bằng $-1$, nên $x = 0$ vẫn là điểm cực tiểu!", "bodyHtml": "\n        <div style=\"font-size:clamp(14px, 1.8vh, 17px); color:#fef08a; margin-bottom:4px;\">\n          <b>Đề bài:</b> Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ có bảng biến thiên:\n        </div>\n\n        <table class=\"bbt-table\" style=\"width:100%; border-collapse:collapse; border-top:2px solid #cbd5e1; border-bottom:2px solid #cbd5e1; margin:6px 0; background:rgba(15,23,42,0.75);\">\n          <tr style=\"border-bottom:1.5px solid #64748b;\">\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:4px 0; color:#f8fafc;\">$x$</td>\n            <td style=\"padding:4px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(13px, 1.6vh, 15px); color:#f8fafc; font-weight:600;\">\n                <span style=\"white-space:nowrap;\">$-\\infty$</span>\n                <span style=\"color:#fef08a;\">$-2$</span>\n                <span style=\"color:#38bdf8; font-weight:bold;\">$0$</span>\n                <span style=\"color:#fef08a;\">$3$</span>\n                <span style=\"white-space:nowrap;\">$+\\infty$</span>\n              </div>\n            </td>\n          </tr>\n          <tr style=\"border-bottom:1.5px solid #64748b;\">\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:4px 0; color:#f8fafc;\">$f'(x)$</td>\n            <td style=\"padding:4px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(14px, 1.8vh, 17px); font-weight:bold;\">\n                <span style=\"width:18px;\"></span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"display:inline-flex; align-items:center; justify-content:center; width:20px;\"><svg width=\"10\" height=\"22\" viewBox=\"0 0 10 22\"><line x1=\"3\" y1=\"0\" x2=\"3\" y2=\"22\" stroke=\"#f43f5e\" stroke-width=\"2\"/><line x1=\"7\" y1=\"0\" x2=\"7\" y2=\"22\" stroke=\"#f43f5e\" stroke-width=\"2\"/></svg></span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"width:18px;\"></span>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:4px 0; color:#f8fafc;\">$f(x)$</td>\n            <td style=\"padding:4px 16px;\">\n              <div style=\"display:flex; align-items:center; height:58px; font-size:clamp(13px, 1.6vh, 16px);\">\n                <span style=\"align-self:flex-end; white-space:nowrap; font-weight:bold;\">$-\\infty$</span>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"28\" x2=\"90\" y2=\"6\" stroke=\"#4ade80\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,6 80,7 84,15\" fill=\"#4ade80\"/></svg></div>\n                <span style=\"align-self:flex-start; color:#38bdf8; font-weight:bold; padding:0 4px;\">$5$</span>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"6\" x2=\"90\" y2=\"28\" stroke=\"#f87171\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,28 84,19 80,27\" fill=\"#f87171\"/></svg></div>\n                <div style=\"display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; width:20px; position:relative;\"><svg width=\"10\" height=\"55\" viewBox=\"0 0 10 55\"><line x1=\"3\" y1=\"0\" x2=\"3\" y2=\"55\" stroke=\"#f43f5e\" stroke-width=\"2\"/><line x1=\"7\" y1=\"0\" x2=\"7\" y2=\"55\" stroke=\"#f43f5e\" stroke-width=\"2\"/></svg><span style=\"font-size:13px; color:#f43f5e; font-weight:bold; position:absolute; bottom:1px; background:#0f172a; padding:0 3px; border-radius:3px;\">$-1$</span></div>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"28\" x2=\"90\" y2=\"6\" stroke=\"#4ade80\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,6 80,7 84,15\" fill=\"#4ade80\"/></svg></div>\n                <span style=\"align-self:flex-start; color:#38bdf8; font-weight:bold; padding:0 4px;\">$4$</span>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"6\" x2=\"90\" y2=\"28\" stroke=\"#f87171\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,28 84,19 80,27\" fill=\"#f87171\"/></svg></div>\n                <span style=\"align-self:flex-end; white-space:nowrap; font-weight:bold;\">$-\\infty$</span>\n              </div>\n            </td>\n          </tr>\n        </table>\n\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); line-height:1.45; color:#a7f3d0;\">\n          • Tại $x = 0$, đạo hàm $f'(x)$ có vạch kép đứng $||$ kéo dài nhưng hàm số liên tục và đổi dấu từ $(-)$ sang $(+) \\implies x = 0$ <b>vẫn là điểm CỰC TIỂU</b> ($y_{CT} = -1$).<br>\n          • Hàm số đạt <b>cực đại</b> tại hai điểm $x = -2$ ($y_{CĐ} = 5$) và $x = 3$ ($y_{CĐ} = 4$).\n        </div>\n    ", "narration": "Ở Ví dụ 1, chúng ta cùng đọc cực trị từ một bảng biến thiên có chứa điểm nhạy cảm. Hàm số f x liên tục trên R. Tại x bằng âm 2, f phẩy x đổi dấu từ dương sang âm, nên hàm số đạt cực đại tại x bằng âm 2, với giá trị cực đại y cực đại bằng 5. Tại x bằng 0, các em thấy ở hàng đạo hàm có vạch kép hai sọc, nghĩa là đạo hàm không xác định. Tuy nhiên, ở hàng f x, giá trị tại 0 vẫn tồn tại và bằng âm 1, và đạo hàm hai bên đổi dấu từ âm sang dương. Do đó, x bằng 0 vẫn là điểm cực tiểu hợp lệ, với y cực tiểu bằng âm 1. Tại x bằng 3, f phẩy đổi dấu từ dương sang âm, hàm số đạt cực đại với y cực đại bằng 4. Tổng kết lại: Hàm số này có tất cả 3 điểm cực trị, gồm 2 điểm cực đại và 1 điểm cực tiểu."}, {"sceneIndex": 4, "title": "VÍ DỤ 2: TÌM CỰC TRỊ TỪ ĐẠO HÀM DẠNG TÍCH", "subtitle": "MỤC 2 • BÍ QUYẾT GIẢI NHANH TRONG 10 GIÂY", "startTime": 119.73, "endTime": 175.53, "duration": 55.8, "mascotMode": "magnifier", "mascotTip": "<b>Mẹo bấm giây:</b> Gạch bỏ ngay tất cả các nhân tử có <b>số mũ chẵn</b>, chỉ đếm số nghiệm của các nhân tử có <b>số mũ lẻ</b>!", "bodyHtml": "\n        <div style=\"font-size:clamp(14px, 1.8vh, 17px); color:#fef08a; margin-bottom:4px;\">\n          <b>Đề bài:</b> Cho hàm số $f(x)$ có đạo hàm $f'(x) = x(x-1)^2 (x+3)^5$. Hỏi hàm số có bao nhiêu điểm cực trị?\n        </div>\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); color:#cbd5e1;\">\n          <b style=\"color:#38bdf8;\">Định lý then chốt:</b> <i>\"Số điểm cực trị bằng đúng số nghiệm bội lẻ của đạo hàm $f'(x)$.\"</i><br>\n          • $x = -3$ (bội 5 - lẻ) $\\implies$ Có cực trị. $\\;$ • $x = 0$ (bội 1 - lẻ) $\\implies$ Có cực trị.<br>\n          • $x = 1$ (bội 2 - chẵn) $\\implies$ Không đổi dấu $\\implies$ Không phải cực trị.\n        </div>\n\n        <table class=\"bbt-table\" style=\"width:100%; border-collapse:collapse; border-top:2px solid #cbd5e1; border-bottom:2px solid #cbd5e1; margin:6px 0; background:rgba(15,23,42,0.75);\">\n          <tr style=\"border-bottom:1.5px solid #64748b;\">\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:5px 0; color:#f8fafc;\">$x$</td>\n            <td style=\"padding:5px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(13px, 1.6vh, 15px); color:#f8fafc; font-weight:600;\">\n                <span style=\"white-space:nowrap;\">$-\\infty$</span>\n                <span style=\"color:#fef08a;\">$-3$</span>\n                <span style=\"color:#fef08a;\">$0$</span>\n                <span style=\"color:#94a3b8;\">$1$</span>\n                <span style=\"white-space:nowrap;\">$+\\infty$</span>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:5px 0; color:#f8fafc;\">$f'(x)$</td>\n            <td style=\"padding:5px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(14px, 1.8vh, 17px); font-weight:bold;\">\n                <span style=\"width:18px;\"></span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"color:#94a3b8;\">$0$</span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"width:18px;\"></span>\n              </div>\n            </td>\n          </tr>\n        </table>\n\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); color:#a7f3d0;\">\n          <b>Kết luận:</b> Hàm số có đúng <b>2 điểm cực trị</b> ($x = -3$ là cực đại, $x = 0$ là cực tiểu).\n        </div>\n    ", "narration": "Ví dụ 2 là một dạng câu hỏi trắc nghiệm kinh điển xuất hiện trong hầu hết các đề thi tốt nghiệp THPT: Tìm số điểm cực trị của hàm số khi biết biểu thức đạo hàm f phẩy x bằng x nhân x trừ 1 tất cả bình phương nhân x cộng 3 tất cả mũ 5. Để giải nhanh bài này trong vòng 10 giây, Cú Thông Thái chỉ cho các em một nguyên tắc vàng: Số điểm cực trị chỉ bằng số nghiệm bội lẻ của phương trình đạo hàm bằng 0, các nghiệm bội chẵn bị vô hiệu hóa vì không làm đạo hàm đổi dấu. Ta phân tích từng nhân tử: x bằng 0 có số mũ 1 là bội lẻ, nên đây là điểm cực trị. Nhân tử x trừ 1 có số mũ 2 là bội chẵn, đạo hàm không đổi dấu khi qua 1 nên ta loại bỏ ngay lập tức. Nhân tử x cộng 3 có số mũ 5 là số lẻ, nên x bằng âm 3 là điểm cực trị. Như vậy, phương trình chỉ có hai nghiệm bội lẻ là x bằng âm 3 và x bằng 0. Ta kết luận ngay: hàm số có đúng 2 điểm cực trị. Hãy nhớ kỹ: Gạch bỏ mọi nhân tử mũ chẵn!"}, {"sceneIndex": 5, "title": "VÍ DỤ 3: KHẢO SÁT CỰC TRỊ CỦA HÀM BẬC BA", "subtitle": "MỤC 2 • ĐẦY ĐỦ CÁC BƯỚC KHẢO SÁT CHUẨN MỰC", "startTime": 175.53, "endTime": 236.03, "duration": 60.5, "mascotMode": "pointer", "mascotTip": "<b>Hệ số $a = -3 < 0$:</b> Tam thức bậc 2 mang dấu âm ở ngoài khoảng hai nghiệm và mang dấu dương ở trong khoảng!", "bodyHtml": "\n        <div style=\"font-size:clamp(14px, 1.8vh, 17px); color:#fef08a; margin-bottom:4px;\">\n          <b>Khảo sát cực trị:</b> $y = -x^3 + 3x^2 + 9x - 1$\n        </div>\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); color:#cbd5e1;\">\n          TXĐ: $D = \\mathbb{R}$. $\\; y' = -3x^2 + 6x + 9 = -3(x+1)(x-3) = 0 \\iff x = -1$ hoặc $x = 3$.\n        </div>\n\n        <table class=\"bbt-table\" style=\"width:100%; border-collapse:collapse; border-top:2px solid #cbd5e1; border-bottom:2px solid #cbd5e1; margin:6px 0; background:rgba(15,23,42,0.75);\">\n          <tr style=\"border-bottom:1.5px solid #64748b;\">\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:4px 0; color:#f8fafc;\">$x$</td>\n            <td style=\"padding:4px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(13px, 1.6vh, 15px); color:#f8fafc; font-weight:600;\">\n                <span style=\"white-space:nowrap;\">$-\\infty$</span>\n                <span style=\"color:#fef08a;\">$-1$</span>\n                <span style=\"color:#fef08a;\">$3$</span>\n                <span style=\"white-space:nowrap;\">$+\\infty$</span>\n              </div>\n            </td>\n          </tr>\n          <tr style=\"border-bottom:1.5px solid #64748b;\">\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:4px 0; color:#f8fafc;\">$y'$</td>\n            <td style=\"padding:4px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(14px, 1.8vh, 17px); font-weight:bold;\">\n                <span style=\"width:18px;\"></span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"width:18px;\"></span>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:4px 0; color:#f8fafc;\">$y$</td>\n            <td style=\"padding:4px 16px;\">\n              <div style=\"display:flex; align-items:center; height:58px; font-size:clamp(13px, 1.6vh, 16px);\">\n                <span style=\"align-self:flex-start; white-space:nowrap; font-weight:bold;\">$+\\infty$</span>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"6\" x2=\"90\" y2=\"28\" stroke=\"#f87171\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,28 84,19 80,27\" fill=\"#f87171\"/></svg></div>\n                <span style=\"align-self:flex-end; color:#f43f5e; font-weight:bold; padding:0 4px;\">$-6$</span>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"28\" x2=\"90\" y2=\"6\" stroke=\"#4ade80\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,6 80,7 84,15\" fill=\"#4ade80\"/></svg></div>\n                <span style=\"align-self:flex-start; color:#38bdf8; font-weight:bold; padding:0 4px;\">$26$</span>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"6\" x2=\"90\" y2=\"28\" stroke=\"#f87171\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,28 84,19 80,27\" fill=\"#f87171\"/></svg></div>\n                <span style=\"align-self:flex-end; white-space:nowrap; font-weight:bold;\">$-\\infty$</span>\n              </div>\n            </td>\n          </tr>\n        </table>\n\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); line-height:1.45; color:#a7f3d0;\">\n          • Điểm cực tiểu: $x = -1, \\; y_{\\text{CT}} = -6$. Điểm cực đại: $x = 3, \\; y_{\\text{CĐ}} = 26$.\n        </div>\n    ", "narration": "Ở Ví dụ 3, chúng ta tiến hành tìm cực trị của hàm số bậc ba y bằng trừ x mũ 3 cộng 3 x bình phương cộng 9 x trừ 1. Bước 1, tập xác định D bằng R. Bước 2, lấy đạo hàm: y phẩy bằng trừ 3 x bình cộng 6 x cộng 9. Bước 3, giải phương trình y phẩy bằng 0, ta chia cả hai vế cho trừ 3 được x bình trừ 2 x trừ 3 bằng 0, cho ra hai nghiệm x bằng âm 1 và x bằng 3. Bước 4, ta tính giá trị tương ứng: thay âm 1 vào hàm số ban đầu được y bằng âm 6; thay 3 vào hàm số ban đầu được y bằng 26. Lập bảng biến thiên: vì hệ số a của đạo hàm bằng trừ 3 âm, nên trong khoảng hai nghiệm y phẩy mang dấu cộng, ngoài khoảng mang dấu trừ. Mũi tên của y đi xuống âm 6, đi lên 26, rồi lại đi xuống âm vô cùng. Kết luận rành mạch: Điểm cực tiểu của hàm số là x bằng âm 1, giá trị cực tiểu là âm 6. Điểm cực đại của hàm số là x bằng 3, giá trị cực đại là 26. Điểm cực đại của đồ thị là A tọa độ 3 chấm phẩy 26, điểm cực tiểu của đồ thị là B tọa độ âm 1 chấm phẩy âm 6."}, {"sceneIndex": 6, "title": "DẤU HIỆU 2 & CÚ THÔNG THÁI SOI BẪY TRẮC NGHIỆM", "subtitle": "MỤC 2 • ĐẠO HÀM CẤP 2 & 2 SAI LẦM NGUY HIỂM", "startTime": 236.03, "endTime": 269.68, "duration": 33.65, "mascotMode": "cheer", "mascotTip": "<b>Chúc các em tự tin!</b> Làm chủ vững vàng tính đơn điệu và cực trị để đạt điểm tối đa trong các kỳ thi sắp tới!", "bodyHtml": "\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#fef08a; font-weight:bold; margin-bottom:4px;\">\n          1. Dấu hiệu 2 (Sử dụng đạo hàm cấp hai $y''$):\n        </div>\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.55; color:#e2e8f0; margin-left:14px;\">\n          Giả sử $f'(x_0) = 0$ và có $f''(x_0)$:<br>\n          • Nếu $f''(x_0) < 0 \\implies x_0$ là <b>điểm CỰC ĐẠI</b>.<br>\n          • Nếu $f''(x_0) > 0 \\implies x_0$ là <b>điểm CỰC TIỂU</b>.\n        </div>\n\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#f43f5e; font-weight:bold; margin:8px 0 4px 0;\">\n          2. Cú Thông Thái cảnh báo 2 sai lầm chết người:\n        </div>\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.55; color:#e2e8f0; margin-left:14px;\">\n          • <b>Sai lầm 1:</b> Đồng nhất Cực đại là GTLN! Cực đại chỉ mang tính lân cận cục bộ, hoàn toàn có thể nhỏ hơn cực tiểu ở nhánh khác.<br>\n          • <b>Sai lầm 2:</b> $f'(x_0) = 0$ chưa chắc là cực trị nếu không đổi dấu.\n        </div>\n    ", "narration": "Để khép lại bài học hôm nay, thầy giới thiệu thêm Dấu hiệu 2 dùng đạo hàm cấp hai f hai phẩy: Nếu f phẩy tại x 0 bằng 0 và f hai phẩy nhỏ hơn 0 thì x 0 là cực đại; nếu f hai phẩy lớn hơn 0 thì x 0 là cực tiểu. Cuối cùng, Cú Thông Thái nhắc các em khắc cốt ghi tâm hai sai lầm rất nguy hiểm: Sai lầm thứ nhất là nghĩ rằng Cực đại chính là Giá trị lớn nhất. Hoàn toàn sai! Cực đại chỉ mang tính lân cận cục bộ, thậm chí có những hàm số giá trị cực đại còn nhỏ hơn giá trị cực tiểu ở nhánh khác. Sai lầm thứ hai là thấy đạo hàm bằng 0 đã vội kết luận là cực trị; nếu đạo hàm không đổi dấu thì đó không phải là cực trị. Thầy chúc các em học tập thật tốt và làm chủ hoàn toàn Bài 1 Toán 12!"}]}
  }  // State
  let currentSection = 'muc1';
  let currentSceneIndex = 1;
  let audioEl = null;
  let isPlaying = false;
  let isSeeking = false;
  let fallbackTimerId = null;
  let virtualCurrentTime = 0;
  let isFallbackRunning = false;

  // Mascot SVG generator
  function getOwlSvg(mode, tipText) {
    let badgeColor = '#38bdf8';
    let badgeTitle = 'Thầy Cú Hướng Dẫn';
    if (mode === 'magnifier') {
      badgeColor = '#f43f5e';
      badgeTitle = 'Cú Soi Bẫy Sai Lầm';
    } else if (mode === 'cheer') {
      badgeColor = '#4ade80';
      badgeTitle = 'Cú Đồng Hành & Khen Ngợi';
    }

    return `
      <div style="display:flex; align-items:center; gap:12px; width:100%; background:rgba(15,23,42,0.95); border:1.5px solid ${badgeColor}aa; border-radius:12px; padding:8px 16px; box-shadow:0 3px 12px rgba(0,0,0,0.5);">
        <div style="width:40px; height:40px; border-radius:10px; background:${badgeColor}22; border:1.5px solid ${badgeColor}66; color:${badgeColor}; display:flex; align-items:center; justify-content:center; font-size:26px; flex-shrink:0; box-shadow:0 0 12px ${badgeColor}33;">
          🦉
        </div>
        <div style="flex:1; font-size:19px !important; font-weight:500 !important; color:#f8fafc !important; line-height:1.45; font-family:serif;">
          <strong style="color:${badgeColor}; font-size:20px !important; font-weight:700 !important; margin-right:6px;">${badgeTitle}:</strong> ${tipText}
        </div>
      </div>
    `;
  }

  // Format MM:SS
  function fmtTime(sec) {
    sec = Math.max(0, sec || 0);
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  // Init Audio Element
  function getOrCreateAudio() {
    if (!audioEl) {
      audioEl = document.getElementById('interactive-lecture-audio');
      if (!audioEl) {
        audioEl = document.createElement('audio');
        audioEl.id = 'interactive-lecture-audio';
        audioEl.preload = 'auto';
        document.body.appendChild(audioEl);
      }

      audioEl.addEventListener('timeupdate', onTimeUpdate);
      audioEl.addEventListener('play', () => { isPlaying = true; updatePlayIcon(true); });
      audioEl.addEventListener('pause', () => { isPlaying = false; updatePlayIcon(false); });
      audioEl.addEventListener('ended', onAudioEnded);
      audioEl.addEventListener('error', (e) => {
        console.warn('Audio playback error / falling back to alternative source:', e);
        const data = LECTURE_DATA[currentSection] || {};
        const currentLecture = {
          ...data,
          id: data.id || data.sectionId || currentSection,
          audio_src: data.audio_src || data.audioSrc || '',
          duration: data.duration || data.totalDuration || 60
        };
        startFallbackTimer(currentLecture.duration || 60);
        updatePlayIcon(true);
      });
    }
    return audioEl;
  }

  // Render Slide Content
  
  // Dynamic Zero-Scroll Auto-Fit Engine: Scales content so it NEVER exceeds the viewport
  function autoFitLectureStage() {
    const viewport = document.getElementById('il-stage-viewport');
    const content = document.getElementById('il-stage-content-wrapper');
    if (!viewport || !content) return;

    // Reset transform to measure unscaled dimensions
    content.style.transform = 'none';

    // Available space
    const availW = viewport.clientWidth - 16;
    const availH = viewport.clientHeight - 8;

    // Measured unscaled content dimensions
    const contentW = content.scrollWidth;
    const contentH = content.scrollHeight;

    if (availW > 0 && availH > 0 && (contentH > availH || contentW > availW)) {
      const scaleX = availW / contentW;
      const scaleY = availH / contentH;
      const scaleFactor = Math.min(scaleX, scaleY, 1.0);
      content.style.transform = `scale(${scaleFactor})`;
      content.style.transformOrigin = 'center center';
    } else {
      content.style.transform = 'none';
    }
  }

  function renderSlide(sceneIdx) {
    currentSceneIndex = sceneIdx;
    const data = LECTURE_DATA[currentSection];
    if (!data || !data.scenes) return;

    const scene = data.scenes[sceneIdx - 1];
    if (!scene) return;

    // Update Stage Elements
    const titleEl = document.getElementById('il-stage-title');
    const subtitleEl = document.getElementById('il-stage-subtitle');
    const bodyEl = document.getElementById('il-stage-body');
    const mascotContainer = document.getElementById('il-stage-mascot');

    if (titleEl) titleEl.textContent = scene.title;
    if (subtitleEl) subtitleEl.textContent = scene.subtitle;
    if (bodyEl) {
      bodyEl.innerHTML = scene.bodyHtml;
      // Trigger KaTeX rendering
      if (typeof window.renderMathInElement === 'function') {
        window.renderMathInElement(bodyEl, {
          macros: {
            "\\vec": "\\overrightarrow"
          },
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      } else if (typeof window.renderMath === 'function') {
        window.renderMath(bodyEl);
      }
    }

    if (mascotContainer) {
      mascotContainer.innerHTML = getOwlSvg(scene.mascotMode, scene.mascotTip);
      if (typeof window.renderMathInElement === 'function') {
        window.renderMathInElement(mascotContainer, {
          macros: {
            "\\vec": "\\overrightarrow"
          },
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      } else if (typeof window.renderMath === 'function') {
        window.renderMath(mascotContainer);
      }
    }

    // Update Scene Nav Pills
    updateScenePills();

    // Auto-fit to viewport without scrollbar
    autoFitLectureStage();
    setTimeout(autoFitLectureStage, 50);
  }

  // Update Scene Navigation Pills
  function updateScenePills() {
    const data = LECTURE_DATA[currentSection];
    if (!data) return;

    const navContainer = document.getElementById('il-scene-pills');
    if (!navContainer) return;

    let html = '';
    data.scenes.forEach((sc, idx) => {
      const num = idx + 1;
      const isActive = (num === currentSceneIndex);
      const activeClass = isActive 
        ? 'bg-amber-400 text-slate-950 font-black shadow-md scale-105 border-amber-300' 
        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border-slate-700';

      html += `
        <button type="button" onclick="window.seekLectureToScene(${num})" 
          class="px-3 py-1.5 rounded-xl text-xs sm:text-[11pt] font-semibold transition-all border cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${activeClass}">
          <span class="w-4 h-4 rounded-full ${isActive ? 'bg-slate-950 text-amber-400' : 'bg-slate-700 text-slate-300'} flex items-center justify-center text-[10px] font-bold">${num}</span>
          <span>Cảnh ${num}</span>
        </button>
      `;
    });
    navContainer.innerHTML = html;
  }

  // Update 4-Part Pedagogical Pills (Safe & Defensive)
  function updatePartPills() {
    const container = document.getElementById('il-part-pills');
    if (!container) return;

    const data = LECTURE_DATA[currentSection];
    if (!data || !data.parts) {
      container.innerHTML = '';
      return;
    }

    let partsList = [];
    if (Array.isArray(data.parts)) {
      partsList = data.parts;
    } else if (typeof data.parts === 'object') {
      partsList = Object.keys(data.parts).map((k, idx) => ({
        partNumber: idx + 1,
        partTitle: typeof data.parts[k] === 'string' ? data.parts[k] : `Phần ${idx + 1}`,
        scenes: [idx + 1]
      }));
    }

    let html = '';
    partsList.forEach(p => {
      const scenes = Array.isArray(p.scenes) ? p.scenes : [p.partNumber || 1];
      const isPartActive = scenes.includes(currentSceneIndex);
      const activeClass = isPartActive 
        ? 'bg-indigo-600 text-white font-bold border-indigo-400 shadow-sm' 
        : 'bg-slate-900 text-indigo-300 border-slate-800 hover:bg-slate-800';

      const firstScene = scenes[0] || 1;
      html += `
        <button type="button" onclick="window.seekLectureToScene(${firstScene})"
          class="px-2.5 py-1 rounded-lg text-xs font-medium border transition cursor-pointer whitespace-nowrap ${activeClass}">
          ${p.partTitle || ('Phần ' + (p.partNumber || 1))}
        </button>
      `;
    });
    container.innerHTML = html;
  }

  function stopFallbackTimer() {
    if (fallbackTimerId) {
      clearInterval(fallbackTimerId);
      fallbackTimerId = null;
    }
    isFallbackRunning = false;
  }

  function syncTimelineWithTime(cur, dur) {
    const data = LECTURE_DATA[currentSection] || {};
    const totalDur = dur || data.duration || data.totalDuration || 60;

    // Time text
    const timeDisplay = document.getElementById('il-time-display');
    if (timeDisplay) {
      timeDisplay.textContent = `${fmtTime(cur)} / ${fmtTime(totalDur)}`;
    }

    // Progress bar
    const progBar = document.getElementById('il-progress-bar');
    if (progBar && !isSeeking) {
      const pct = Math.min(100, Math.max(0, (cur / totalDur) * 100));
      progBar.style.width = pct + '%';
    }

    // Determine current scene from timestamps
    if (!data || !data.scenes || !data.scenes.length) return;

    let activeIdx = 1;
    for (let i = 0; i < data.scenes.length; i++) {
      const sc = data.scenes[i];
      if (cur >= sc.startTime && cur < sc.endTime) {
        activeIdx = i + 1;
        break;
      }
      if (i === data.scenes.length - 1 && cur >= sc.startTime) {
        activeIdx = i + 1;
      }
    }

        // Dynamic countdown clock synchronization (supports both 15s and 30s, non-overlapping flex layout)
    const countdownEl = document.querySelector('.countdown-clock-widget') || document.querySelector('.countdown-clock-30s');
    if (countdownEl && data && data.scenes && data.scenes[activeIdx - 1]) {
      const sc = data.scenes[activeIdx - 1];
      const totalSec = parseInt(countdownEl.dataset.seconds) || (countdownEl.classList.contains('cd-15s') ? 15 : 30);
      const countdownEnd = sc.endTime - 2.5;
      const countdownStart = countdownEnd - totalSec;
      let remaining = totalSec;
      let fraction = 0;
      if (cur < countdownStart) {
        remaining = totalSec;
        fraction = 0;
      } else if (cur >= countdownStart && cur <= countdownEnd) {
        remaining = Math.max(0, Math.ceil(countdownEnd - cur));
        fraction = (cur - countdownStart) / totalSec;
      } else {
        remaining = 0;
        fraction = 1;
      }
      const numVal = countdownEl.querySelector('.countdown-number-val');
      const circleSvg = countdownEl.querySelector('.countdown-circle-svg');
      const urgentThresh = totalSec === 15 ? 3 : 5;
      const warnThresh = totalSec === 15 ? 7 : 15;

      if (numVal) {
        numVal.textContent = remaining + 's';
        if (remaining <= urgentThresh) {
          numVal.style.color = '#ef4444';
          countdownEl.style.borderColor = '#ef4444';
          countdownEl.style.boxShadow = '0 0 16px rgba(239,68,68,0.5)';
        } else if (remaining <= warnThresh) {
          numVal.style.color = '#f97316';
          countdownEl.style.borderColor = '#f97316';
          countdownEl.style.boxShadow = '0 0 14px rgba(249,115,22,0.4)';
        } else {
          numVal.style.color = totalSec === 15 ? '#34d399' : '#fbbf24';
          countdownEl.style.borderColor = totalSec === 15 ? '#10b981' : '#f59e0b';
          countdownEl.style.boxShadow = totalSec === 15 ? '0 0 12px rgba(16,185,129,0.35)' : '0 0 12px rgba(245,158,11,0.35)';
        }
      }
      if (circleSvg) {
        circleSvg.style.animation = 'none';
        circleSvg.style.strokeDashoffset = (fraction * 97.4).toFixed(1);
        if (remaining <= urgentThresh) {
          circleSvg.setAttribute('stroke', '#ef4444');
        } else if (remaining <= warnThresh) {
          circleSvg.setAttribute('stroke', '#f97316');
        } else {
          circleSvg.setAttribute('stroke', totalSec === 15 ? '#10b981' : '#f59e0b');
        }
      }
    }

    if (activeIdx !== currentSceneIndex) {
      renderSlide(activeIdx);
      updatePartPills();
    }
  }

  // Audio timeupdate handler
  function onTimeUpdate() {
    const audio = getOrCreateAudio();
    if (!audio) return;

    const data = LECTURE_DATA[currentSection] || {};
    const cur = audio.currentTime;
    const dur = audio.duration || data.duration || data.totalDuration || 300;
    virtualCurrentTime = cur;
    syncTimelineWithTime(cur, dur);
  }

  function startTimelineSync() {
    stopFallbackTimer();
    onTimeUpdate();
  }

  // Play Button state icon
  function updatePlayButtonState() {
    const btn = document.getElementById('il-btn-play');
    if (!btn) return;
    if (isPlaying) {
      btn.innerHTML = '<i class="fa-solid fa-pause text-base"></i>';
      btn.title = 'Tạm dừng bài giảng';
      btn.classList.add('ring-2', 'ring-amber-400');
    } else {
      btn.innerHTML = '<i class="fa-solid fa-play text-base ml-0.5"></i>';
      btn.title = 'Phát bài giảng';
      btn.classList.remove('ring-2', 'ring-amber-400');
    }
  }

  function updatePlayIcon(active) {
    if (active !== undefined) {
      isPlaying = !!active;
    }
    updatePlayButtonState();
  }

  // 2. XỬ LÝ LỖI FILE MP3 THIẾU (FALLBACK TIMER):
  // Viết hàm startFallbackTimer(totalSeconds): Sử dụng setInterval đếm tiến trình currentTime từ 0 -> totalSeconds, đồng bộ kích hoạt các mốc SVG/KaTeX tương ứng theo thời gian như khi có audio thật, đảm bảo học sinh luôn thấy bài giảng chuyển động mượt mà.
  function startFallbackTimer(totalSeconds) {
    stopFallbackTimer();
    isFallbackRunning = true;
    isPlaying = true;
    updatePlayIcon(true);

    const dur = Math.max(5, totalSeconds || 60);
    const step = 0.25;

    if (virtualCurrentTime >= dur) {
      virtualCurrentTime = 0;
    }

    syncTimelineWithTime(virtualCurrentTime, dur);

    fallbackTimerId = setInterval(() => {
      if (!isPlaying) return;
      virtualCurrentTime += step;
      if (virtualCurrentTime >= dur) {
        virtualCurrentTime = dur;
        syncTimelineWithTime(virtualCurrentTime, dur);
        stopFallbackTimer();
        isPlaying = false;
        updatePlayIcon(false);
        onAudioEnded();
        return;
      }
      syncTimelineWithTime(virtualCurrentTime, dur);
    }, 250);
  }

  // When Audio ends
  function onAudioEnded() {
    stopFallbackTimer();
    isPlaying = false;
    updatePlayIcon(false);

    const secNum = (currentSection === 'muc2') ? 2 : 1;
    
    // Show celebratory banner
    const banner = document.getElementById('il-celebration-banner');
    if (banner) {
      banner.classList.remove('hidden');
      setTimeout(() => {
        if (banner) banner.classList.add('hidden');
      }, 7000);
    }

    // Trigger platform gating completion handlers
    if (typeof window.markLessonVideoCompleted === 'function') {
      window.markLessonVideoCompleted(secNum);
    }
    if (typeof window.markModalVideoCompleted === 'function') {
      window.markModalVideoCompleted(secNum);
    }
  }

  // =========================================================================
  // MỤC LỤC TOÀN BỘ SÁCH GIÁO KHOA TOÁN 12 KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // Trọn bộ 6 Chương • 19 Bài học & 6 Bài tập cuối chương (75 Mục chuẩn SGK)
  // =========================================================================
  const SGK12_MENU_CONFIG = [
    // ----------------- CHƯƠNG I -----------------
    {
      chapterNumber: 1,
      chapterTitle: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
      lessonId: "bai1",
      lessonTitle: "Bài 1: Tính đơn điệu và cực trị của hàm số",
      lessonBadge: "Bài 1",
      sections: [
        { key: "muc1", title: "Mục 1: Tính đơn điệu của hàm số", time: "05:41", icon: "📈" },
        { key: "muc2", title: "Mục 2: Cực trị của hàm số", time: "04:29", icon: "⛰️" }
      ]
    },
    {
      chapterNumber: 1,
      chapterTitle: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
      lessonId: "bai2",
      lessonTitle: "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
      lessonBadge: "Bài 2",
      sections: [
        { key: "bai2_muc1", title: "Mục 1: Định nghĩa GTLN & GTNN", time: "05:00", icon: "🎯" },
        { key: "bai2_muc2", title: "Mục 2: Tìm GTLN, GTNN trên đoạn [a; b]", time: "05:00", icon: "📏" },
        { key: "bai2_muc3", title: "Mục 3: Tìm GTLN, GTNN trên khoảng / nửa khoảng", time: "05:00", icon: "📊" }
      ]
    },
    {
      chapterNumber: 1,
      chapterTitle: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
      lessonId: "bai3",
      lessonTitle: "Bài 3: Đường tiệm cận của đồ thị hàm số",
      lessonBadge: "Bài 3",
      sections: [
        { key: "bai3_muc1", title: "Mục 1: Tiệm cận đứng (TCĐ)", time: "05:00", icon: "│" },
        { key: "bai3_muc2", title: "Mục 2: Tiệm cận ngang (TCN)", time: "05:00", icon: "─" },
        { key: "bai3_muc3", title: "Mục 3: Tiệm cận xiên (TCX)", time: "05:00", icon: "╱" }
      ]
    },
    {
      chapterNumber: 1,
      chapterTitle: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
      lessonId: "bai4",
      lessonTitle: "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
      lessonBadge: "Bài 4",
      sections: [
        { key: "bai4_muc1", title: "Mục 1: Khảo sát hàm đa thức bậc ba", time: "05:00", icon: "〽️" },
        { key: "bai4_muc2", title: "Mục 2: Khảo sát hàm phân thức bậc 1/1", time: "05:00", icon: "➗" },
        { key: "bai4_muc3", title: "Mục 3: Khảo sát hàm phân thức bậc 2/1", time: "05:00", icon: "📐" }
      ]
    },
    {
      chapterNumber: 1,
      chapterTitle: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
      lessonId: "bai5",
      lessonTitle: "Bài 5: Ứng dụng đạo hàm để giải quyết một số bài toán thực tiễn",
      lessonBadge: "Bài 5",
      sections: [
        { key: "bai5_muc1", title: "Mục 1: Tối ưu hoá hình học & Thể tích", time: "05:00", icon: "📦" },
        { key: "bai5_muc2", title: "Mục 2: Tối ưu hoá kinh tế & Lợi nhuận", time: "05:00", icon: "💰" },
        { key: "bai5_muc3", title: "Mục 3: Ứng dụng trong Vật lí & Chuyển động", time: "05:00", icon: "🚀" }
      ]
    },
    {
      chapterNumber: 1,
      chapterTitle: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
      lessonId: "ontap_c1",
      lessonTitle: "Bài tập cuối chương I: Ứng dụng đạo hàm",
      lessonBadge: "Ôn tập C1",
      sections: [
        { key: "ontap_muc1", title: "Mục 1: Hệ thống hoá kiến thức trọng tâm", time: "05:00", icon: "🧠" },
        { key: "ontap_muc2", title: "Mục 2: Rèn luyện 4 bài toán then chốt", time: "05:00", icon: "📝" },
        { key: "ontap_muc3", title: "Mục 3: Bẫy đề thi, Mẹo Casio & Lời khuyên", time: "05:00", icon: "💡" }
      ]
    },

    // ----------------- CHƯƠNG II -----------------
    {
      chapterNumber: 2,
      chapterTitle: "Chương II: Vectơ và hệ trục toạ độ trong không gian",
      lessonId: "bai6",
      lessonTitle: "Bài 6: Vectơ trong không gian",
      lessonBadge: "Bài 6",
      sections: [
        { key: "bai6_muc1", title: "Mục 1: Định nghĩa & Khái niệm cơ bản", time: "05:00", icon: "➡️" },
        { key: "bai6_muc2", title: "Mục 2: Các phép toán vectơ & Quy tắc hình hộp", time: "05:00", icon: "➕" },
        { key: "bai6_muc3", title: "Mục 3: Tích vô hướng của hai vectơ", time: "05:00", icon: "📐" }
      ]
    },
    {
      chapterNumber: 2,
      chapterTitle: "Chương II: Vectơ và hệ trục toạ độ trong không gian",
      lessonId: "bai7",
      lessonTitle: "Bài 7: Hệ trục toạ độ trong không gian",
      lessonBadge: "Bài 7",
      sections: [
        { key: "bai7_muc1", title: "Mục 1: Hệ trục toạ độ Oxyz trong không gian", time: "05:00", icon: "🌐" },
        { key: "bai7_muc2", title: "Mục 2: Toạ độ của điểm & Toạ độ của vectơ", time: "05:00", icon: "📍" },
        { key: "bai7_muc3", title: "Mục 3: Biểu thức toạ độ của các phép toán vectơ", time: "05:00", icon: "🧮" }
      ]
    },
    {
      chapterNumber: 2,
      chapterTitle: "Chương II: Vectơ và hệ trục toạ độ trong không gian",
      lessonId: "bai8",
      lessonTitle: "Bài 8: Biểu thức toạ độ của các phép toán vectơ",
      lessonBadge: "Bài 8",
      sections: [
        { key: "bai8_muc1", title: "Mục 1: Toạ độ tổng, hiệu và tích vectơ với một số", time: "06:26", icon: "➕" },
        { key: "bai8_muc2", title: "Mục 2: Tích vô hướng, độ dài vectơ & Khoảng cách", time: "05:44", icon: "📐" },
        { key: "bai8_muc3", title: "Mục 3: Góc giữa hai vectơ & Bài toán thực tế", time: "05:18", icon: "🎯" }
      ]
    },
    {
      chapterNumber: 2,
      chapterTitle: "Chương II: Vectơ và hệ trục toạ độ trong không gian",
      lessonId: "ontap_c2",
      lessonTitle: "Bài tập cuối chương II: Vectơ & Hệ toạ độ Oxyz",
      lessonBadge: "Ôn tập C2",
      sections: [
        { key: "ontap_c2_muc1", title: "Mục 1: Hệ thống hoá kiến thức trọng tâm", time: "05:00", icon: "🧠" },
        { key: "ontap_c2_muc2", title: "Mục 2: Rèn luyện 4 dạng toán then chốt", time: "05:00", icon: "📝" },
        { key: "ontap_c2_muc3", title: "Mục 3: Bẫy đề thi & Kỹ thuật Casio Vectơ", time: "05:00", icon: "💡" }
      ]
    },

    // ----------------- CHƯƠNG III -----------------
    {
      chapterNumber: 3,
      chapterTitle: "Chương III: Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm",
      lessonId: "bai9",
      lessonTitle: "Bài 9: Khoảng biến thiên và khoảng tứ phân vị",
      lessonBadge: "Bài 9",
      sections: [
        { key: "bai9_muc1", title: "Mục 1: Khoảng biến thiên của mẫu số liệu ghép nhóm", time: "05:00", icon: "📊" },
        { key: "bai9_muc2", title: "Mục 2: Tứ phân vị và khoảng tứ phân vị", time: "05:00", icon: "📐" },
        { key: "bai9_muc3", title: "Mục 3: Giá trị ngoại lai & So sánh độ phân tán", time: "05:00", icon: "🎯" }
      ]
    },
    {
      chapterNumber: 3,
      chapterTitle: "Chương III: Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm",
      lessonId: "bai10",
      lessonTitle: "Bài 10: Phương sai và độ lệch chuẩn",
      lessonBadge: "Bài 10",
      sections: [
        { key: "bai10_muc1", title: "Mục 1: Phương sai & Độ lệch chuẩn của mẫu số liệu", time: "05:00", icon: "📉" },
        { key: "bai10_muc2", title: "Mục 2: Ý nghĩa & So sánh mức độ phân tán", time: "05:00", icon: "⚖️" },
        { key: "bai10_muc3", title: "Mục 3: Tính chất biến đổi tuyến tính & Casio 580", time: "05:34", icon: "🧮" }
      ]
    },
    {
      chapterNumber: 3,
      chapterTitle: "Chương III: Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm",
      lessonId: "ontap_c3",
      lessonTitle: "Bài tập cuối chương III: Mức độ phân tán mẫu số liệu",
      lessonBadge: "Ôn tập C3",
      sections: [
        { key: "ontap_c3_muc1", title: "Mục 1: Khoảng biến thiên, Tứ phân vị & Khoảng tứ phân vị", time: "05:27", icon: "📊" },
        { key: "ontap_c3_muc2", title: "Mục 2: Phương sai, Độ lệch chuẩn & So sánh mức độ phân tán", time: "05:04", icon: "⚖️" },
        { key: "ontap_c3_muc3", title: "Mục 3: Giá trị ngoại lai, Biến đổi tuyến tính & Casio 580", time: "05:21", icon: "💡" }
      ]
    },

    // ----------------- CHƯƠNG IV -----------------
    {
      chapterNumber: 4,
      chapterTitle: "Chương IV: Nguyên hàm và tích phân",
      lessonId: "bai11",
      lessonTitle: "Bài 11: Nguyên hàm",
      lessonBadge: "Bài 11",
      sections: [
        { key: "bai11_muc1", title: "Mục 1: Khái niệm nguyên hàm", time: "05:00", icon: "∫" },
        { key: "bai11_muc2", title: "Mục 2: Tính chất cơ bản của nguyên hàm", time: "05:00", icon: "⚡" },
        { key: "bai11_muc3", title: "Mục 3: Bảng nguyên hàm các hàm số sơ cấp", time: "05:00", icon: "📋" }
      ]
    },
    {
      chapterNumber: 4,
      chapterTitle: "Chương IV: Nguyên hàm và tích phân",
      lessonId: "bai12",
      lessonTitle: "Bài 12: Tích phân",
      lessonBadge: "Bài 12",
      sections: [
        { key: "bai12_muc1", title: "Mục 1: Diện tích hình thang cong & Định nghĩa tích phân", time: "05:00", icon: "📏" },
        { key: "bai12_muc2", title: "Mục 2: Các tính chất của tích phân", time: "05:00", icon: "✨" },
        { key: "bai12_muc3", title: "Mục 3: Phương pháp tính tích phân (Đổi biến & Từng phần)", time: "05:00", icon: "🔄" }
      ]
    },
    {
      chapterNumber: 4,
      chapterTitle: "Chương IV: Nguyên hàm và tích phân",
      lessonId: "bai13",
      lessonTitle: "Bài 13: Ứng dụng hình học của tích phân",
      lessonBadge: "Bài 13",
      sections: [
        { key: "bai13_muc1", title: "Mục 1: Tính diện tích hình phẳng", time: "05:00", icon: "📐" },
        { key: "bai13_muc2", title: "Mục 2: Tính thể tích vật thể & Khối tròn xoay", time: "05:00", icon: "🏺" },
        { key: "bai13_muc3", title: "Mục 3: Ứng dụng tích phân trong bài toán thực tế", time: "05:00", icon: "🌉" }
      ]
    },
    {
      chapterNumber: 4,
      chapterTitle: "Chương IV: Nguyên hàm và tích phân",
      lessonId: "ontap_c4",
      lessonTitle: "Bài tập cuối chương IV: Nguyên hàm và tích phân",
      lessonBadge: "Ôn tập C4",
      sections: [
        { key: "ontap_c4_muc1", title: "Mục 1: Hệ thống hoá Bảng nguyên hàm & Tích phân", time: "05:00", icon: "🧠" },
        { key: "ontap_c4_muc2", title: "Mục 2: Rèn luyện tính diện tích, thể tích & ứng dụng", time: "05:00", icon: "📝" },
        { key: "ontap_c4_muc3", title: "Mục 3: Bẫy đề thi, Phương pháp chọn hàm & Casio Tích phân", time: "05:00", icon: "💡" }
      ]
    },

    // ----------------- CHƯƠNG V -----------------
    {
      chapterNumber: 5,
      chapterTitle: "Chương V: Phương pháp toạ độ trong không gian",
      lessonId: "bai14",
      lessonTitle: "Bài 14: Phương trình mặt phẳng",
      lessonBadge: "Bài 14",
      sections: [
        { key: "bai14_muc1", title: "Mục 1: Vectơ pháp tuyến & Cặp VTCP của mặt phẳng", time: "05:00", icon: "🧭" },
        { key: "bai14_muc2", title: "Mục 2: Phương trình tổng quát của mặt phẳng", time: "05:00", icon: "📄" },
        { key: "bai14_muc3", title: "Mục 3: Điều kiện song song & Vuông góc hai mặt phẳng", time: "05:00", icon: "📐" },
        { key: "bai14_muc4", title: "Mục 4: Khoảng cách từ một điểm đến mặt phẳng", time: "05:00", icon: "📏" }
      ]
    },
    {
      chapterNumber: 5,
      chapterTitle: "Chương V: Phương pháp toạ độ trong không gian",
      lessonId: "bai15",
      lessonTitle: "Bài 15: Phương trình đường thẳng trong không gian",
      lessonBadge: "Bài 15",
      sections: [
        { key: "bai15_muc1", title: "Mục 1: Vectơ chỉ phương & PT tham số đường thẳng", time: "05:24", icon: "↗️" },
        { key: "bai15_muc2", title: "Mục 2: Phương trình chính tắc của đường thẳng", time: "04:51", icon: "📏" },
        { key: "bai15_muc3", title: "Mục 3: Vị trí tương đối giữa hai đường thẳng", time: "05:30", icon: "✂️" }
      ]
    },
    {
      chapterNumber: 5,
      chapterTitle: "Chương V: Phương pháp toạ độ trong không gian",
      lessonId: "bai16",
      lessonTitle: "Bài 16: Công thức tính góc trong không gian",
      lessonBadge: "Bài 16",
      sections: [
        { key: "bai16_muc1", title: "Mục 1: Góc giữa hai đường thẳng", time: "05:52", icon: "📐" },
        { key: "bai16_muc2", title: "Mục 2: Góc giữa đường thẳng và mặt phẳng", time: "05:07", icon: "📐" },
        { key: "bai16_muc3", title: "Mục 3: Góc giữa hai mặt phẳng", time: "05:52", icon: "📐" }
      ]
    },
    {
      chapterNumber: 5,
      chapterTitle: "Chương V: Phương pháp toạ độ trong không gian",
      lessonId: "bai17",
      lessonTitle: "Bài 17: Phương trình mặt cầu",
      lessonBadge: "Bài 17",
      sections: [
        { key: "bai17_muc1", title: "Mục 1: Định nghĩa & Phương trình chính tắc mặt cầu", time: "05:21", icon: "⚽" },
        { key: "bai17_muc2", title: "Mục 2: Phương trình tổng quát dạng khai triển", time: "06:08", icon: "🌐" },
        { key: "bai17_muc3", title: "Mục 3: Vị trí tương đối giữa mặt cầu và mặt phẳng", time: "06:28", icon: "🎯" }
      ]
    },
    {
      chapterNumber: 5,
      chapterTitle: "Chương V: Phương pháp toạ độ trong không gian",
      lessonId: "ontap_c5",
      lessonTitle: "Bài tập cuối chương V: Phương pháp toạ độ trong không gian",
      lessonBadge: "Ôn tập C5",
      sections: [
        { key: "ontap_c5_muc1", title: "Mục 1: Hệ thống hoá PT Mặt phẳng, Đường thẳng, Mặt cầu", time: "05:00", icon: "🧠" },
        { key: "ontap_c5_muc2", title: "Mục 2: Rèn luyện 4 dạng toán toạ độ Oxyz then chốt", time: "05:00", icon: "📝" },
        { key: "ontap_c5_muc3", title: "Mục 3: Bẫy đề thi hình toạ độ & Tuyệt chiêu Casio Oxyz", time: "05:00", icon: "💡" }
      ]
    },

    // ----------------- CHƯƠNG VI -----------------
    {
      chapterNumber: 6,
      chapterTitle: "Chương VI: Xác suất có điều kiện",
      lessonId: "bai18",
      lessonTitle: "Bài 18: Xác suất có điều kiện",
      lessonBadge: "Bài 18",
      sections: [
        { key: "bai18_muc1", title: "Mục 1: Khái niệm xác suất có điều kiện P(A|B)", time: "05:00", icon: "🎲" },
        { key: "bai18_muc2", title: "Mục 2: Công thức nhân xác suất", time: "05:00", icon: "✖️" },
        { key: "bai18_muc3", title: "Mục 3: Sơ đồ hình cây và ứng dụng tính xác suất", time: "05:00", icon: "🌳" }
      ]
    },
    {
      chapterNumber: 6,
      chapterTitle: "Chương VI: Xác suất có điều kiện",
      lessonId: "bai19",
      lessonTitle: "Bài 19: Công thức xác suất toàn phần và công thức Bayes",
      lessonBadge: "Bài 19",
      sections: [
        { key: "bai19_muc1", title: "Mục 1: Công thức xác suất toàn phần", time: "05:00", icon: "∑" },
        { key: "bai19_muc2", title: "Mục 2: Công thức Bayes và ý nghĩa chẩn đoán thực tế", time: "05:00", icon: "🧬" },
        { key: "bai19_muc3", title: "Mục 3: Rèn luyện bài toán xác suất thực tế chuẩn Bộ GD", time: "05:00", icon: "🎯" }
      ]
    },
    {
      chapterNumber: 6,
      chapterTitle: "Chương VI: Xác suất có điều kiện",
      lessonId: "ontap_c6",
      lessonTitle: "Bài tập cuối chương VI: Xác suất có điều kiện",
      lessonBadge: "Ôn tập C6",
      sections: [
        { key: "ontap_c6_muc1", title: "Mục 1: Hệ thống hoá Xác suất có điều kiện, Toàn phần & Bayes", time: "05:00", icon: "🧠" },
        { key: "ontap_c6_muc2", title: "Mục 2: Rèn luyện các dạng bài thực tế then chốt & Sơ đồ cây", time: "05:00", icon: "📝" },
        { key: "ontap_c6_muc3", title: "Mục 3: Bẫy đề thi xác suất, Nhận diện công thức & Kỹ thuật Casio", time: "05:00", icon: "💡" }
      ]
    }
  ];

  // Backwards compatibility alias
  const CHAPTER1_MENU_CONFIG = SGK12_MENU_CONFIG;
  const TOTAL_SECTIONS_COUNT = SGK12_MENU_CONFIG.reduce((acc, grp) => acc + grp.sections.length, 0);

  function buildOptionsHtml() {
    let html = '';
    let currentCh = -1;
    SGK12_MENU_CONFIG.forEach(grp => {
      if (grp.chapterNumber !== currentCh) {
        currentCh = grp.chapterNumber;
        html += `<optgroup label="━━━━━━━━ ${grp.chapterTitle.toUpperCase()} ━━━━━━━━" style="background:#090d16; color:#fbbf24; font-weight:900;"></optgroup>`;
      }
      html += `<optgroup label="${grp.lessonTitle}" style="background:#0f172a; color:#38bdf8; font-weight:bold;">`;
      grp.sections.forEach(s => {
        html += `<option value="${s.key}" style="background:#1e293b; color:#f8fafc;">${s.icon} ${grp.lessonBadge} - ${s.title} (${s.time})</option>`;
      });
      html += `</optgroup>`;
    });
    return html;
  }

  // Filter drawer cards by chapter
  function filterDrawerChapter(chNum) {
    const cards = document.querySelectorAll('.il-drawer-lesson-card');
    cards.forEach(c => {
      if (!chNum || chNum === 'all' || c.getAttribute('data-chapter') === String(chNum)) {
        c.style.display = 'flex';
      } else {
        c.style.display = 'none';
      }
    });

    const filterBtns = document.querySelectorAll('.il-drawer-filter-btn');
    filterBtns.forEach(btn => {
      const match = (String(chNum) === btn.getAttribute('data-filter-chapter'));
      if (match) {
        btn.className = 'il-drawer-filter-btn px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 border border-amber-300 shadow-sm cursor-pointer transition';
      } else {
        btn.className = 'il-drawer-filter-btn px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 cursor-pointer transition';
      }
    });
  }
  if (typeof window !== 'undefined') window.filterDrawerChapter = filterDrawerChapter;

  // Visual Drawer Modal with 25 Lesson Cards & 75 Sections (All 6 Chapters)
  function toggleLectureDrawer(show) {
    let drawer = document.getElementById('il-chapter1-drawer');
    if (!drawer) {
      drawer = document.createElement('div');
      drawer.id = 'il-chapter1-drawer';
      drawer.className = 'fixed inset-0 z-[120] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 transition-opacity';
      drawer.onclick = function(e) {
        if (e.target === drawer) toggleLectureDrawer(false);
      };

      let cardsHtml = '';
      SGK12_MENU_CONFIG.forEach(grp => {
        let secButtons = '';
        grp.sections.forEach(s => {
          secButtons += `
            <button type="button" onclick="window.openInteractiveLecture('${s.key}'); window.toggleLectureDrawer(false);" class="w-full text-left p-2.5 rounded-xl bg-slate-800/80 hover:bg-amber-400 hover:text-slate-950 text-slate-200 border border-slate-700/80 hover:border-amber-300 transition group flex items-center justify-between gap-2 shadow-xs cursor-pointer">
              <div class="flex items-center gap-2 truncate">
                <span class="text-base">${s.icon}</span>
                <span class="text-xs sm:text-sm font-semibold truncate group-hover:font-black">${s.title}</span>
              </div>
              <span class="text-[10px] px-2 py-0.5 rounded-md bg-slate-900 group-hover:bg-slate-950 text-amber-300 shrink-0 font-mono font-bold">${s.time}</span>
            </button>
          `;
        });

        cardsHtml += `
          <div class="il-drawer-lesson-card bg-slate-900/90 rounded-2xl p-4 border border-indigo-900/60 shadow-lg flex flex-col gap-2.5 transition-all" data-chapter="${grp.chapterNumber}">
            <div class="flex items-center justify-between border-b border-slate-800 pb-2">
              <div class="flex items-center gap-1.5 truncate">
                <span class="text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 shrink-0">C${grp.chapterNumber}</span>
                <span class="text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wide truncate" title="${grp.lessonTitle}">${grp.lessonTitle}</span>
              </div>
              <span class="text-[11px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full shrink-0">${grp.sections.length} mục</span>
            </div>
            <div class="flex flex-col gap-1.5">
              ${secButtons}
            </div>
          </div>
        `;
      });

      drawer.innerHTML = `
        <div class="bg-slate-950 border-2 border-indigo-800 rounded-3xl w-full max-w-6xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden font-serif">
          <div class="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-b border-indigo-900 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center text-xl font-black shadow-md">🦉</div>
              <div>
                <h2 class="text-base sm:text-xl font-black text-amber-300 tracking-wide uppercase">MỤC LỤC BÀI GIẢNG TƯƠNG TÁC TOÁN 12 KNTT</h2>
                <p class="text-xs text-slate-400">SGK Kết nối tri thức với cuộc sống • Trọn bộ 6 Chương (19 Bài học & 6 Bài tập cuối chương) • ${TOTAL_SECTIONS_COUNT} Mục</p>
              </div>
            </div>
            <button type="button" onclick="window.toggleLectureDrawer(false)" class="w-8 h-8 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center font-bold text-sm transition cursor-pointer">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <!-- Chapter Filter Tabs -->
          <div class="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center gap-2 overflow-x-auto">
            <button type="button" onclick="window.filterDrawerChapter('all')" data-filter-chapter="all" class="il-drawer-filter-btn px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 border border-amber-300 shadow-sm cursor-pointer transition">
              Tất cả (${TOTAL_SECTIONS_COUNT})
            </button>
            <button type="button" onclick="window.filterDrawerChapter(1)" data-filter-chapter="1" class="il-drawer-filter-btn px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 cursor-pointer transition">
              Chương I (17)
            </button>
            <button type="button" onclick="window.filterDrawerChapter(2)" data-filter-chapter="2" class="il-drawer-filter-btn px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 cursor-pointer transition">
              Chương II (12)
            </button>
            <button type="button" onclick="window.filterDrawerChapter(3)" data-filter-chapter="3" class="il-drawer-filter-btn px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 cursor-pointer transition">
              Chương III (9)
            </button>
            <button type="button" onclick="window.filterDrawerChapter(4)" data-filter-chapter="4" class="il-drawer-filter-btn px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 cursor-pointer transition">
              Chương IV (12)
            </button>
            <button type="button" onclick="window.filterDrawerChapter(5)" data-filter-chapter="5" class="il-drawer-filter-btn px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 cursor-pointer transition">
              Chương V (16)
            </button>
            <button type="button" onclick="window.filterDrawerChapter(6)" data-filter-chapter="6" class="il-drawer-filter-btn px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 cursor-pointer transition">
              Chương VI (9)
            </button>
          </div>

          <div class="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${cardsHtml}
          </div>
          <div class="p-3 bg-slate-900/80 border-t border-slate-800 text-center text-xs text-slate-400">
            Bấm chọn mục bất kỳ để học bài giảng trực quan cùng Thầy Thuấn Phan & Mascot Cú Thông Thái.
          </div>
        </div>
      `;
      document.body.appendChild(drawer);
    }

    if (show === false) {
      drawer.classList.add('hidden');
    } else if (show === true) {
      drawer.classList.remove('hidden');
    } else {
      drawer.classList.toggle('hidden');
    }
  }

  // Inject the pulse animation CSS into the document head
  (function ensurePulseStyle() {
    if (typeof document === 'undefined') return;
    if (document.getElementById('style-active-lecture-pulse')) return;
    const style = document.createElement('style');
    style.id = 'style-active-lecture-pulse';
    style.textContent = `
      @keyframes pulseLecture {
        0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7); }
        50% { transform: scale(1.04); box-shadow: 0 0 0 10px rgba(37, 99, 235, 0); }
      }
      .btn-lecture-pulse {
        animation: pulseLecture 2.4s infinite ease-in-out;
        transition: all 0.2s ease;
      }
      .btn-lecture-pulse:hover {
        filter: brightness(1.18);
        transform: scale(1.05);
      }
      .btn-lecture-pulse:active {
        transform: scale(0.97);
      }
      #web-chapter1-lecture-bar {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  })();

  // Helper to parse Roman numerals or Arabic numbers for Chapter
  function parseRomanOrArabic(str) {
    if (!str) return 1;
    const s = String(str).trim().toUpperCase();
    if (s === 'I' || s === '1') return 1;
    if (s === 'II' || s === '2') return 2;
    if (s === 'III' || s === '3') return 3;
    if (s === 'IV' || s === '4') return 4;
    if (s === 'V' || s === '5') return 5;
    if (s === 'VI' || s === '6') return 6;
    return parseInt(s) || 1;
  }

  // Parse lesson info from text
  function parseLessonInfoFromText(text) {
    if (!text || typeof text !== 'string') return null;
    const lower = text.toLowerCase();
    if (lower.includes('ôn tập') || lower.includes('cuối chương') || lower.includes('bài tập cuối chương')) {
      let ch = 1;
      const mCh = text.match(/chương\s*([IVX]+|\d+)/i);
      if (mCh) ch = parseRomanOrArabic(mCh[1]);
      return { isReview: true, chapter: ch, lessonNum: 'ontap' };
    }
    const mBai = text.match(/(?:bài|bai)\s*(\d+)/i);
    if (mBai) {
      return { isReview: false, lessonNum: parseInt(mBai[1]) };
    }
    const mNum = text.match(/^(\d+)[\s:\.\-]/);
    if (mNum) {
      return { isReview: false, lessonNum: parseInt(mNum[1]) };
    }
    return null;
  }

  // Determine current active Lesson & Section key dynamically across all 5 Chapters
  function getCurrentLessonAndSectionKey() {
    let lessonNum = null;
    let sectionNum = 1;
    let chapterNum = null;
    let isReview = false;

    // 1. Check window.activeLesson
    const al = (typeof window !== 'undefined' && window.activeLesson) ? window.activeLesson : null;
    if (al) {
      if (al.lessonNumber && !isNaN(parseInt(al.lessonNumber))) {
        lessonNum = parseInt(al.lessonNumber);
      } else if (typeof al.id === 'string' && al.id.match(/bai(\d+)/i)) {
        lessonNum = parseInt(al.id.match(/bai(\d+)/i)[1]);
      } else if (al.lessonTitle || al.title) {
        const res = parseLessonInfoFromText(al.lessonTitle || al.title);
        if (res) {
          if (res.isReview) { isReview = true; chapterNum = res.chapter; lessonNum = 'ontap'; }
          else { lessonNum = res.lessonNum; }
        }
      }
      if (al.isChapterReview) {
        isReview = true;
        lessonNum = 'ontap';
        if (al.chapterNumber) chapterNum = parseInt(al.chapterNumber);
        else if (al.chapterShortTitle) {
          const m = al.chapterShortTitle.match(/chương\s*([IVX]+|\d+)/i);
          if (m) chapterNum = parseRomanOrArabic(m[1]);
        }
      }
    }

    // 2. Check window.studentInfo?.lesson
    if (lessonNum === null) {
      const sLesson = (typeof window !== 'undefined' && window.studentInfo && window.studentInfo.lesson) ? window.studentInfo.lesson : null;
      const res = parseLessonInfoFromText(sLesson);
      if (res) {
        if (res.isReview) { isReview = true; chapterNum = res.chapter; lessonNum = 'ontap'; }
        else { lessonNum = res.lessonNum; }
      }
    }

    // 3. Check localStorage
    if (lessonNum === null && typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('STUDENT_LESSON') || localStorage.getItem('student_lesson');
      const res = parseLessonInfoFromText(stored);
      if (res) {
        if (res.isReview) { isReview = true; chapterNum = res.chapter; lessonNum = 'ontap'; }
        else { lessonNum = res.lessonNum; }
      }
    }

    // 4. Check DOM titles
    if (lessonNum === null && typeof document !== 'undefined') {
      const domEls = [
        document.getElementById('sgk-focus-title'),
        document.getElementById('chat-current-lesson'),
        document.getElementById('setup-kntt-select'),
        document.getElementById('badge-lesson')
      ];
      for (const el of domEls) {
        if (!el) continue;
        const txt = el.value || el.textContent;
        const res = parseLessonInfoFromText(txt);
        if (res) {
          if (res.isReview) { isReview = true; chapterNum = res.chapter; lessonNum = 'ontap'; }
          else { lessonNum = res.lessonNum; }
          break;
        }
      }
    }

    // Default fallback
    if (lessonNum === null) lessonNum = 1;

    // Detect section index
    if (typeof window !== 'undefined' && window.demoState && typeof window.demoState.sectionIndex === 'number') {
      sectionNum = window.demoState.sectionIndex + 1;
    } else if (typeof document !== 'undefined') {
      const pillsContainer = document.getElementById('sgk-focus-section-pills');
      if (pillsContainer) {
        const activePill = pillsContainer.querySelector('.bg-amber-400') || pillsContainer.querySelector('button[class*="amber"]');
        if (activePill && activePill.textContent) {
          const sm = activePill.textContent.match(/Mục\s*(\d+)/i);
          if (sm) sectionNum = parseInt(sm[1]) || 1;
        }
      }
    }

    // Map to chapter keys
    if (isReview || lessonNum === 'ontap') {
      const ch = chapterNum || 1;
      const s = Math.min(3, Math.max(1, sectionNum));
      if (ch === 1) return `ontap_muc${s}`;
      return `ontap_c${ch}_muc${s}`;
    }

    if (lessonNum === 1) {
      return sectionNum === 2 ? 'muc2' : 'muc1';
    }
    if (lessonNum >= 2 && lessonNum <= 24) {
      const maxSec = (lessonNum === 4 || lessonNum === 14) ? 4 : 3;
      const s = Math.min(maxSec, Math.max(1, sectionNum));
      return `bai${lessonNum}_muc${s}`;
    }
    return 'muc1';
  }

  // Update navbar & action buttons with the active lesson title
  function updateActiveLessonVideoUI() {
    let shortLabel = 'Bài 1';
    let fullTitle = 'Bài 1: Tính đơn điệu và cực trị của hàm số';

    const al = (typeof window !== 'undefined' && window.activeLesson) ? window.activeLesson : null;
    const sLesson = (typeof window !== 'undefined' && window.studentInfo && window.studentInfo.lesson) ? window.studentInfo.lesson : null;
    const rawTitle = (al && (al.lessonTitle || al.title))
      || sLesson
      || (typeof localStorage !== 'undefined' ? (localStorage.getItem('STUDENT_LESSON') || localStorage.getItem('student_lesson')) : null)
      || (typeof document !== 'undefined' ? document.getElementById('sgk-focus-title')?.textContent : null)
      || '';

    if (rawTitle) {
      fullTitle = rawTitle.trim();
      const mBai = fullTitle.match(/(?:bài|bai)\s*(\d+)/i);
      if (mBai) {
        shortLabel = `Bài ${mBai[1]}`;
      } else if (fullTitle.toLowerCase().includes('ôn tập') || fullTitle.toLowerCase().includes('cuối chương')) {
        const mCh = fullTitle.match(/chương\s*([IVX]+|\d+)/i);
        shortLabel = mCh ? `Ôn tập C${mCh[1]}` : 'Ôn tập';
      } else {
        shortLabel = fullTitle.split(':')[0] || 'Bài học';
      }
    }

    // 1. Update top navbar button (#btn-open-lesson1-video / #btn-open-lesson-video)
    const topBtn = document.getElementById('btn-open-lesson1-video') || document.getElementById('btn-open-lesson-video');
    if (topBtn) {
      topBtn.id = 'btn-open-lesson-video';
      topBtn.title = `Xem video bài giảng tương tác: ${fullTitle}`;
      topBtn.onclick = function(e) {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        openInteractiveLecture(getCurrentLessonAndSectionKey());
      };
      
      const labelSpan = topBtn.querySelector('span:not(.bg-white\\/20)');
      if (labelSpan) {
        labelSpan.textContent = `▶ Videos tương tác: ${shortLabel}`;
      } else {
        topBtn.innerHTML = `
          <i class="fa-solid fa-circle-play text-white animate-pulse"></i>
          <span>▶ Videos tương tác: ${shortLabel}</span>
          <span class="bg-white/20 text-white text-[10px] px-1.5 py-0.2 rounded-full font-black">HD</span>
        `;
      }
    }

    // 2. Update SGK Focus Nav button if present
    const focusBtn = document.getElementById('btn-active-lecture');
    if (focusBtn) {
      focusBtn.innerHTML = `🎬 Xem Videos: ${shortLabel}`;
      focusBtn.title = `Xem video bài giảng tương tác ${fullTitle}`;
    }

    // 3. Remove duplicate #btn-active-lecture-main if topBtn already exists
    const duplicateMain = document.getElementById('btn-active-lecture-main');
    if (duplicateMain && topBtn) {
      duplicateMain.remove();
    }
  }

  // Inject prominent "Xem Bài Giảng Tương Tác" button beside "Làm đề ôn tập"
  function injectActiveLectureButton() {
    // Hide/remove old top shared bar if present
    const sharedBar = document.getElementById('web-chapter1-lecture-bar');
    if (sharedBar) sharedBar.remove();

    // 1. In #sgk-focus-nav (beside "Làm đề ôn tập")
    const sgkNav = document.getElementById('sgk-focus-nav');
    if (sgkNav) {
      const practiceBtn = sgkNav.querySelector('button[onclick*="openLessonPracticeModal"]');
      if (practiceBtn && practiceBtn.parentElement) {
        let btn = document.getElementById('btn-active-lecture');
        if (!btn) {
          btn = document.createElement('button');
          btn.id = 'btn-active-lecture';
          btn.className = 'btn-lecture-pulse';
          btn.setAttribute('style', 'background: linear-gradient(135deg, #2563eb, #1d4ed8); color: #fff; font-weight: 600; padding: 6px 14px; border-radius: 8px; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;');
          btn.innerHTML = '🎬 Xem Bài Giảng Tương Tác';
          btn.title = 'Xem bài giảng tương tác đa phương tiện bám sát bài học hiện tại';

          btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const targetKey = getCurrentLessonAndSectionKey();
            openInteractiveLecture(targetKey);
          });

          practiceBtn.parentElement.insertBefore(btn, practiceBtn);
        }
      }
    }

    // 2. Sync navbar buttons
    updateActiveLessonVideoUI();
  }

  // Initialize the modal section switcher
  function initSectionSelector() {
    ensureMergedData();

    const tab1 = document.getElementById('il-tab-muc1');
    const tab2 = document.getElementById('il-tab-muc2');
    const tabsWrapper = tab1 ? tab1.parentElement : null;

    if (tabsWrapper && !document.getElementById('il-section-select')) {
      tab1.style.display = 'none';
      if (tab2) tab2.style.display = 'none';

      const selectBox = document.createElement('div');
      selectBox.className = 'flex items-center gap-1.5';
      selectBox.innerHTML = `
        <div class="relative flex items-center">
          <span class="absolute left-2.5 text-amber-400 text-xs pointer-events-none">📖</span>
          <select id="il-section-select" class="pl-7 pr-3 py-1 rounded-lg font-bold text-xs sm:text-sm bg-slate-900 text-amber-300 border border-amber-400/60 shadow-md cursor-pointer outline-none transition hover:bg-slate-800 hover:border-amber-300 max-w-[210px] sm:max-w-[340px] truncate" title="Chọn bài học và mục bài giảng (${TOTAL_SECTIONS_COUNT} mục chuẩn SGK Toán 12 KNTT)">
            ${buildOptionsHtml()}
          </select>
        </div>
        <button type="button" onclick="window.toggleLectureDrawer()" class="px-2.5 py-1 rounded-lg font-bold text-xs bg-indigo-700/80 hover:bg-indigo-600 text-amber-200 border border-indigo-500/50 shadow-xs cursor-pointer transition flex items-center gap-1 shrink-0" title="Mở toàn bộ mục lục SGK Toán 12 KNTT (${TOTAL_SECTIONS_COUNT} mục)">
          <i class="fa-solid fa-layer-group text-xs"></i>
          <span class="hidden sm:inline">Mục lục SGK (${TOTAL_SECTIONS_COUNT} Mục)</span>
        </button>
      `;
      tabsWrapper.appendChild(selectBox);

      const selEl = document.getElementById('il-section-select');
      if (selEl) {
        selEl.addEventListener('change', function() {
          switchSection(this.value);
        });
      }
    }

    injectActiveLectureButton();
  }

  // Switch between sections (Bài 1 Mục 1..2, Bài 2..5, Ôn tập - 18 mục)
  // Create structured interactive lecture for any SGK section pending rich media
  function createPlaceholderLecture(grp, sec) {
    const title = `${grp.lessonBadge} - ${sec.title}`;
    const owlTip = `Khám phá kiến thức cốt lõi: ${sec.title} - SGK Toán 12 Kết Nối Tri Thức.`;
    return {
      lessonId: grp.lessonId,
      lessonTitle: grp.lessonTitle,
      sectionId: sec.key,
      sectionTitle: sec.title,
      audio_src: '',
      audioSrc: '',
      duration: 60,
      totalDuration: 60,
      title: title,
      owl_tip: owlTip,
      timeline: [
        { time: 0, id: 'part1', duration: 15, startTime: 0, endTime: 15 },
        { time: 15, id: 'part2', duration: 15, startTime: 15, endTime: 30 },
        { time: 30, id: 'part3', duration: 15, startTime: 30, endTime: 45 },
        { time: 45, id: 'part4', duration: 15, startTime: 45, endTime: 60 }
      ],
      parts: [
        { partNumber: 1, partTitle: "Phần 1: Khái niệm & Định nghĩa cơ bản", scenes: [1] },
        { partNumber: 2, partTitle: "Phần 2: Công thức trọng tâm chuẩn SGK KNTT", scenes: [2] },
        { partNumber: 3, partTitle: "Phần 3: Ví dụ rèn luyện điển hình (Đồng hồ 15s/30s)", scenes: [3] },
        { partNumber: 4, partTitle: "Phần 4: Mascot Cú Thông Thái cảnh báo bẫy & Mẹo thi", scenes: [4] }
      ],
      content: `<div id="part1"><h3>1. Khái niệm & Định nghĩa</h3><p>Nội dung chuẩn mực theo SGK Toán 12 Kết Nối Tri Thức.</p></div><div id="part2"><h3>2. Công thức trọng tâm</h3><p>Hệ thống công thức và phương pháp giải toán cốt lõi.</p></div><div id="part3"><h3>3. Ví dụ rèn luyện</h3><p>Rèn luyện ví dụ điển hình cùng đồng hồ đếm ngược.</p></div><div id="part4"><h3>4. Cú Thông Thái cảnh báo bẫy</h3><p>Lưu ý tránh các sai lầm phổ biến khi làm bài thi.</p></div>`,
      scenes: [
        {
          sceneIndex: 1,
          title: grp.lessonTitle.toUpperCase(),
          subtitle: `PHẦN 1: KHÁI NIỆM & ĐỊNH NGHĨA (${sec.title.toUpperCase()})`,
          startTime: 0,
          endTime: 15,
          duration: 15,
          mascotMode: "talking",
          mascotTip: owlTip,
          bodyHtml: `
            <div style="font-size:18px; line-height:1.7; color:#f8fafc;">
              <h3 style="color:#38bdf8; font-size:24px; margin-bottom:12px;">${sec.title}</h3>
              <div style="background:rgba(15,23,42,0.85); border:1.5px solid #38bdf8; border-radius:12px; padding:18px; margin-bottom:14px;">
                <b style="color:#fde047; font-size:19px;">📖 Trọng tâm bài học SGK Toán 12 KNTT:</b><br>
                Chào mừng các em đến với <b>${grp.lessonTitle}</b>. Ở phần này, các em sẽ nắm vững bản chất khái niệm và phương pháp tư duy toán học chuẩn chương trình mới.
              </div>
              <div style="background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px 16px; border-radius:8px; color:#bae6fd;">
                💡 <i>Mẹo học tập:</i> Hãy ghi nhớ các định nghĩa và điều kiện áp dụng trước khi bắt đầu giải bài tập!
              </div>
            </div>
          `
        },
        {
          sceneIndex: 2,
          title: "HỆ THỐNG CÔNG THỨC TRỌNG TÂM",
          subtitle: "PHẦN 2: QUY TẮC & PHƯƠNG PHÁP GIẢI TOÁN",
          startTime: 15,
          endTime: 30,
          duration: 15,
          mascotMode: "thinking",
          mascotTip: "Nắm vững công thức cốt lõi và điều kiện áp dụng!",
          bodyHtml: `
            <div style="font-size:18px; line-height:1.7; color:#f8fafc;">
              <h3 style="color:#34d399; font-size:24px; margin-bottom:12px;">Hệ thống hoá công thức & Phương pháp giải</h3>
              <div style="background:rgba(16,185,129,0.12); border:1.5px solid #10b981; border-radius:12px; padding:18px; margin-bottom:14px;">
                <b style="color:#34d399; font-size:19px;">⚡ Quy tắc cốt lõi:</b><br>
                Bám sát các định lí, hệ quả và bảng công thức trong SGK Toán 12 KNTT để suy luận nhanh chóng và chính xác.
              </div>
            </div>
          `
        },
        {
          sceneIndex: 3,
          title: "VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
          subtitle: "PHẦN 3: ĐỒNG HỒ ĐẾM NGƯỢC 30S",
          startTime: 30,
          endTime: 45,
          duration: 15,
          mascotMode: "thinking",
          mascotTip: "Thử sức suy nghĩ trước khi xem lời giải chi tiết!",
          bodyHtml: `
            <div class="slide" style="border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);">
              <div style="display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);">
                <div style="flex:1; min-width:0;">
                  <h3 style="color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;">Ví dụ rèn luyện trọng tâm: ${sec.title}</h3>
                  <span style="font-size:13px; color:#94a3b8; font-weight:500;">⏱️ Thời gian suy nghĩ: <b style="color:#fbbf24;">30 giây</b> (Thông hiểu / Vận dụng)</span>
                </div>
                <div class="countdown-clock-widget cd-30s" data-seconds="30" style="flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);">
                  <svg width="24" height="24" viewBox="0 0 36 36" style="display:block;">
                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#334155" stroke-width="3"/>
                    <circle class="countdown-circle-svg" cx="18" cy="18" r="15.5" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="97.4" stroke-dashoffset="0" stroke-linecap="round" style="transform:rotate(-90deg); transform-origin:50% 50%;"/>
                  </svg>
                  <div style="display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;">
                    <span style="font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;">Suy nghĩ</span>
                    <span class="countdown-number-val" style="font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;">30s</span>
                  </div>
                </div>
              </div>
              <div style="font-size:18px; line-height:1.7; color:#f8fafc;">
                Áp dụng kiến thức của <b>${sec.title}</b> vào giải quyết bài toán điển hình theo cấu trúc định dạng đề thi mới của Bộ GD&ĐT.
              </div>
            </div>
          `
        },
        {
          sceneIndex: 4,
          title: "CÚ THÔNG THÁI CẢNH BÁO BẪY & CASIO",
          subtitle: "PHẦN 4: LỜI KHUYÊN & TUYỆT KỸ PHÒNG THI",
          startTime: 45,
          endTime: 60,
          duration: 15,
          mascotMode: "warning",
          mascotTip: "Chú ý điều kiện xác định và kiểm tra lại bằng máy tính Casio!",
          bodyHtml: `
            <div style="font-size:18px; line-height:1.7; color:#f8fafc;">
              <h3 style="color:#f43f5e; font-size:22px; margin-bottom:14px;">🦉 Lời khuyên Thầy Cú & Cảnh báo bẫy</h3>
              <div style="background:rgba(244,63,94,0.12); border-left:4px solid #f43f5e; padding:14px 18px; border-radius:8px;">
                • Luôn đọc kỹ giả thiết, xác định đúng dạng toán.<br>
                • Kết hợp máy tính Casio fx-580VNX để kiểm tra kết quả trung gian.<br>
                • Chúc các em học tốt và tự tin chinh phục chuyên đề này!
              </div>
            </div>
          `
        }
      ]
    };
  }

  function switchSection(sec) {
    ensureMergedData();

    let secKey = sec;
    if (!secKey) {
      secKey = getCurrentLessonAndSectionKey();
    } else if (typeof secKey === 'number' || (typeof secKey === 'string' && (secKey.match(/^(video)?\d+$/i) || secKey === 'video1' || secKey === 'video2' || secKey === 'video3' || secKey === 'video4'))) {
      const num = typeof secKey === 'number' ? secKey : (parseInt(secKey.replace(/\D/g, '')) || 1);
      const curKey = getCurrentLessonAndSectionKey();
      secKey = curKey.replace(/_muc\d+$/, `_muc${num}`);
    } else if (typeof secKey === 'string' && secKey.match(/^bai\d+$/i)) {
      secKey = secKey.toLowerCase() + '_muc1';
    } else if (typeof secKey === 'string' && secKey.match(/^ontap_c\d+$/i)) {
      secKey = secKey.toLowerCase() + '_muc1';
    } else if (secKey === 'ontap' || secKey === 'ontap_c1' || secKey === 'ontap_chuong1') {
      secKey = 'ontap_muc1';
    } else if (secKey === 'ontap_c2' || secKey === 'ontap_chuong2') {
      secKey = 'ontap_c2_muc1';
    } else if (secKey === 'ontap_c3' || secKey === 'ontap_chuong3') {
      secKey = 'ontap_c3_muc1';
    } else if (secKey === 'ontap_c4' || secKey === 'ontap_chuong4') {
      secKey = 'ontap_c4_muc1';
    } else if (secKey === 'ontap_c5' || secKey === 'ontap_chuong5') {
      secKey = 'ontap_c5_muc1';
    } else if (typeof secKey === 'string') {
      if (LECTURE_DATA[secKey]) {
        // secKey is valid
      } else {
        const clean = secKey.replace(/^video_?/, '');
        if (LECTURE_DATA[clean]) {
          secKey = clean;
        } else {
          const keys = Object.keys(LECTURE_DATA);
          const found = keys.find(k => k === secKey || (LECTURE_DATA[k] && (LECTURE_DATA[k].lessonId === secKey || LECTURE_DATA[k].sectionId === secKey)));
          if (found) secKey = found;
        }
      }
    }

    if (!LECTURE_DATA[secKey]) {
      let matchedSec = null;
      let matchedGrp = null;
      for (const grp of SGK12_MENU_CONFIG) {
        for (const s of grp.sections) {
          if (s.key === secKey) {
            matchedSec = s;
            matchedGrp = grp;
            break;
          }
        }
        if (matchedSec) break;
      }
      if (matchedSec && matchedGrp) {
        LECTURE_DATA[secKey] = createPlaceholderLecture(matchedGrp, matchedSec);
      } else {
        secKey = 'muc1';
      }
    }

    currentSection = secKey;
    const data = LECTURE_DATA[secKey];
    if (!data) return;

    const currentLecture = {
      ...data,
      id: data.id || data.sectionId || secKey,
      audio_src: data.audio_src || data.audioSrc || '',
      duration: data.duration || data.totalDuration || 60
    };

    console.log("Bắt đầu mở bài giảng:", currentLecture.id, currentLecture.audio_src);

    // Sync dropdown selections
    const selModal = document.getElementById('il-section-select');
    if (selModal) selModal.value = secKey;
    const selWeb = document.getElementById('web-chapter1-lecture-select');
    if (selWeb) selWeb.value = secKey;

    // Update Header Title in Modal
    const headerTitle = document.getElementById('il-header-lesson-title') 
      || document.querySelector('#modal-interactive-lecture .il-header-bar h3')
      || document.querySelector('#modal-interactive-lecture h3');
    if (headerTitle) {
      headerTitle.id = 'il-header-lesson-title';
      const secName = currentLecture.sectionTitle || currentLecture.title || '';
      headerTitle.textContent = `${currentLecture.lessonTitle || ''} • ${secName}`;
      headerTitle.title = `${currentLecture.lessonTitle || ''} • ${secName}`;
    }

    // Stop previous fallback timer & reset virtual progress
    stopFallbackTimer();
    virtualCurrentTime = 0;

    // Reset slide to 1 & pills
    renderSlide(1);
    updatePartPills();

    // Check or create audioPlayer
    let audioPlayer = audioEl;
    if (!audioPlayer) {
      audioPlayer = document.getElementById('interactive-lecture-audio');
      if (!audioPlayer) {
        audioPlayer = document.createElement('audio');
        audioPlayer.id = 'interactive-lecture-audio';
        document.body.appendChild(audioPlayer);
      }
      audioEl = audioPlayer;
      audioPlayer.addEventListener('timeupdate', onTimeUpdate);
      audioPlayer.addEventListener('play', () => { isPlaying = true; updatePlayIcon(true); });
      audioPlayer.addEventListener('pause', () => { isPlaying = false; updatePlayIcon(false); });
      audioPlayer.addEventListener('ended', onAudioEnded);
      audioPlayer.addEventListener('error', (e) => {
        console.warn('Audio playback error / falling back to alternative source:', e);
        startFallbackTimer(currentLecture.duration || 60);
        updatePlayIcon(true);
      });
    }

    audioPlayer.preload = 'auto';
    const rawAudio = currentLecture.audio_src;
    if (rawAudio) {
      const resolvedSrc = (window.location.protocol === 'file:') ? rawAudio.replace(/^\//, '') : rawAudio;
      audioPlayer.src = resolvedSrc;
    } else {
      audioPlayer.src = '';
    }
    audioPlayer._fallbackTried = false;
    try { audioPlayer.currentTime = 0; } catch(e) {}

    // Immediate Autoplay inside user click gesture with fallback
    if (!rawAudio) {
      console.warn("Lỗi phát audio (File không tồn tại hoặc lỗi Autoplay):", "Không có audio_src");
      startFallbackTimer(currentLecture.duration || 60);
      updatePlayIcon(true);
    } else {
      audioPlayer.load();
      console.log("Đang tải âm thanh từ:", audioPlayer.src);
      audioPlayer.muted = false;
      audioPlayer.volume = 1.0;
      const playPromise = audioPlayer.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log("Audio đang phát bình thường:", currentLecture.audio_src);
          startTimelineSync();
          updatePlayIcon(true);
        }).catch(err => {
          console.warn("Lỗi phát audio (File không tồn tại hoặc lỗi Autoplay):", err);
          // CƠ CHẾ DỰ PHÒNG (FALLBACK): Nếu file MP3 bị lỗi hoặc chưa có, tự động kích hoạt timer chạy dòng thời gian giả lập để bài giảng SVG/KaTeX vẫn tự động trình chiếu cho học sinh xem!
          startFallbackTimer(currentLecture.duration || 60);
          updatePlayIcon(true);
        });
      }
    }
  }

  // Seek audio to specific scene
  function seekToScene(sceneIdx) {
    const data = LECTURE_DATA[currentSection] || {};
    const currentLecture = {
      ...data,
      id: data.id || data.sectionId || currentSection,
      audio_src: data.audio_src || data.audioSrc || '',
      duration: data.duration || data.totalDuration || 60
    };
    if (!data || !data.scenes) return;
    const sc = data.scenes[sceneIdx - 1];
    if (!sc) return;

    virtualCurrentTime = sc.startTime;
    const audioPlayer = getOrCreateAudio();
    if (audioPlayer && audioPlayer.src && !isFallbackRunning) {
      try { audioPlayer.currentTime = sc.startTime; } catch(e) {}
    }

    renderSlide(sceneIdx);
    updatePartPills();
    syncTimelineWithTime(virtualCurrentTime, currentLecture.duration);

    if (!isPlaying) {
      togglePlayPause();
    }
  }

  // Seek relative (e.g. +/- 5s)
  function seekRelative(deltaSec) {
    const data = LECTURE_DATA[currentSection] || {};
    const dur = data.duration || data.totalDuration || 60;
    const audioPlayer = getOrCreateAudio();
    if (isFallbackRunning || !audioPlayer || !audioPlayer.src) {
      virtualCurrentTime = Math.max(0, Math.min(dur, virtualCurrentTime + deltaSec));
      syncTimelineWithTime(virtualCurrentTime, dur);
    } else {
      try {
        audioPlayer.currentTime = Math.max(0, Math.min(audioPlayer.duration || dur, audioPlayer.currentTime + deltaSec));
        virtualCurrentTime = audioPlayer.currentTime;
      } catch(e) {}
    }
  }

  // Click on timeline progress bar
  function scrubToEvent(e) {
    const barContainer = document.getElementById('il-progress-container');
    const audioPlayer = getOrCreateAudio();
    if (!barContainer) return;

    const rect = barContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const data = LECTURE_DATA[currentSection] || {};
    const dur = (audioPlayer && audioPlayer.duration) || data.duration || data.totalDuration || 60;
    const targetTime = ratio * dur;

    virtualCurrentTime = targetTime;
    if (!isFallbackRunning && audioPlayer && audioPlayer.src) {
      try { audioPlayer.currentTime = targetTime; } catch(e) {}
    }
    syncTimelineWithTime(targetTime, dur);
  }

  // Set Speed
  function setSpeed(rate) {
    const audioPlayer = getOrCreateAudio();
    if (!audioPlayer) return;
    audioPlayer.playbackRate = parseFloat(rate) || 1.0;
  }

  // Open the Interactive Web Lecture Modal
  function openInteractiveLecture(sec) {
    document.head.insertAdjacentHTML('beforeend', '<style>@keyframes countdownCircle15 { from { stroke-dashoffset: 0; } to { stroke-dashoffset: 97.4; } } @keyframes countdownCircle30 { from { stroke-dashoffset: 0; } to { stroke-dashoffset: 97.4; } } .countdown-clock-widget, .countdown-clock-30s { transition: border-color 0.3s ease, box-shadow 0.3s ease; } #interactive-modal .lecture-content { font-size: 24px !important; line-height: 1.6 !important; } #interactive-modal .katex { font-size: 1.3em !important; } #interactive-modal svg { width: 98% !important; max-height: 48vh !important; } #interactive-modal header, #interactive-modal footer { height: 42px !important; min-height: 42px !important; padding: 2px 10px !important; } #modal-interactive-lecture #il-stage-body, #modal-interactive-lecture #il-stage-body * { font-size: 24px !important; line-height: 1.6 !important; } #modal-interactive-lecture .katex { font-size: 1.3em !important; } #modal-interactive-lecture svg { width: 98% !important; max-height: 48vh !important; } .il-header-bar, .il-footer-bar { height: 42px !important; min-height: 42px !important; padding: 2px 10px !important; } .trap-warning-box, [class*="trap-warning"] { font-size: 22px !important; line-height: 1.5 !important; font-weight: 600 !important; border-left: 5px solid #ef4444 !important; background: rgba(239, 68, 68, 0.15) !important; padding: 12px 18px !important; border-radius: 8px !important; } .trap-title, .trap-warning-box .trap-title { font-size: 24px !important; font-weight: 700 !important; color: #ff6b6b !important; } #il-stage-mascot, #il-stage-mascot * { font-size: 19px !important; font-weight: 500 !important; color: #f8fafc !important; }</style>');
    const modal = document.getElementById('modal-interactive-lecture');
    if (!modal) return;

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    ensureMergedData();
    initSectionSelector();
    const targetSec = sec || getCurrentLessonAndSectionKey() || 'muc1';
    switchSection(targetSec);
  }

  // Close the Interactive Web Lecture Modal
  function closeInteractiveLecture() {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
      try {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      } catch(e) {}
    }
    const modal = document.getElementById('modal-interactive-lecture');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex', 'is-fullscreen');
    }
    stopFallbackTimer();
    isPlaying = false;
    updatePlayIcon(false);
    const audioPlayer = getOrCreateAudio();
    if (audioPlayer) {
      try { audioPlayer.pause(); } catch(e) {}
    }
  }

  // Toggle Play / Pause
  function togglePlayPause() {
    const data = LECTURE_DATA[currentSection] || {};
    const currentLecture = {
      ...data,
      id: data.id || data.sectionId || currentSection,
      audio_src: data.audio_src || data.audioSrc || '',
      duration: data.duration || data.totalDuration || 60
    };

    let audioPlayer = audioEl;
    if (!audioPlayer) {
      audioPlayer = getOrCreateAudio();
    }

    if (isPlaying) {
      isPlaying = false;
      stopFallbackTimer();
      try { audioPlayer.pause(); } catch(e) {}
      updatePlayIcon(false);
    } else {
      isPlaying = true;
      if (isFallbackRunning || !currentLecture.audio_src) {
        startFallbackTimer(currentLecture.duration || 60);
        updatePlayIcon(true);
      } else {
        audioPlayer.preload = 'auto';
        if (!audioPlayer.src && currentLecture.audio_src) {
          const rawAudio = currentLecture.audio_src;
          audioPlayer.src = (window.location.protocol === 'file:') ? rawAudio.replace(/^\//, '') : rawAudio;
        }
        audioPlayer.load();
        console.log("Đang tải âm thanh từ:", audioPlayer.src);
        audioPlayer.muted = false;
        audioPlayer.volume = 1.0;
        const playPromise = audioPlayer.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            console.log("Audio đang phát bình thường:", currentLecture.audio_src);
            startTimelineSync();
            updatePlayIcon(true);
          }).catch(err => {
            console.warn("Lỗi phát audio (File không tồn tại hoặc lỗi Autoplay):", err);
            // CƠ CHẾ DỰ PHÒNG (FALLBACK): Nếu file MP3 bị lỗi hoặc chưa có, tự động kích hoạt timer chạy dòng thời gian giả lập để bài giảng SVG/KaTeX vẫn tự động trình chiếu cho học sinh xem!
            startFallbackTimer(currentLecture.duration || 60);
            updatePlayIcon(true);
          });
        }
      }
    }
  }

  // Toggle Fullscreen mode for the Interactive Lecture
  function toggleFullscreen() {
    const modal = document.getElementById('modal-interactive-lecture');
    if (!modal) return;

    const isFull = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);

    if (!isFull) {
      if (modal.requestFullscreen) {
        modal.requestFullscreen().catch(err => { console.warn('Fullscreen error:', err); });
      } else if (modal.webkitRequestFullscreen) {
        modal.webkitRequestFullscreen();
      } else if (modal.msRequestFullscreen) {
        modal.msRequestFullscreen();
      } else if (modal.mozRequestFullScreen) {
        modal.mozRequestFullScreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(err => { console.warn('Exit fullscreen error:', err); });
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
    }
  }

  // Update Fullscreen Button UI icons & texts
  function updateFullscreenUI() {
    const modal = document.getElementById('modal-interactive-lecture');
    const isFull = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);

    if (modal) {
      if (isFull) {
        modal.classList.add('is-fullscreen');
      } else {
        modal.classList.remove('is-fullscreen');
      }
    }

    const btns = document.querySelectorAll('.btn-toggle-lecture-fullscreen');
    btns.forEach(b => {
      const icon = b.querySelector('.il-icon-fullscreen') || b.querySelector('i');
      const text = b.querySelector('.il-text-fullscreen') || b.querySelector('span');
      if (icon) {
        if (isFull) {
          icon.className = 'fa-solid fa-compress il-icon-fullscreen';
        } else {
          icon.className = 'fa-solid fa-expand il-icon-fullscreen';
        }
      }
      if (text) {
        text.textContent = isFull ? 'Thu nhỏ' : 'Toàn màn hình';
      }
      b.title = isFull ? 'Thu nhỏ (Thoát toàn màn hình)' : 'Phóng to toàn màn hình (Fullscreen)';
    });
  }

  document.addEventListener('fullscreenchange', function() {
    updateFullscreenUI();
    setTimeout(autoFitLectureStage, 100);
  });
  window.addEventListener('resize', autoFitLectureStage);
  document.addEventListener('webkitfullscreenchange', updateFullscreenUI);
  document.addEventListener('mozfullscreenchange', updateFullscreenUI);
  document.addEventListener('MSFullscreenChange', updateFullscreenUI);

  // Attach Public APIs
  window.openInteractiveLecture = openInteractiveLecture;
  window.closeInteractiveLecture = closeInteractiveLecture;
  window.switchLectureSection = switchSection;
  window.seekLectureToScene = seekToScene;
  window.seekLecture = seekRelative;
  window.scrubLecture = scrubToEvent;
  window.setLectureSpeed = setSpeed;
  window.toggleLecturePlay = togglePlayPause;
  window.toggleLectureFullscreen = toggleFullscreen;
  window.toggleFullscreen = toggleFullscreen;
  window.autoFitLectureStage = autoFitLectureStage;
  window.startFallbackTimer = startFallbackTimer;
  window.startTimelineSync = startTimelineSync;
  window.updatePlayIcon = updatePlayIcon;

  // Intercept old video modal openers to seamlessly open Interactive Web Lecture!
  window.openVideoModal = openInteractiveLecture;
  window.playVideo = openInteractiveLecture;
  window.playLessonVideo = openInteractiveLecture;
  window.openMicrolearningVideoModal = function() {
    openInteractiveLecture(getCurrentLessonAndSectionKey());
  };
  window.toggleModalVideo = function(id) {
    let secNum = 1;
    if (typeof id === 'number') secNum = id;
    else if (typeof id === 'string') {
      const m = id.match(/\d+/);
      if (m) secNum = parseInt(m[0]) || 1;
    }
    const currentKey = getCurrentLessonAndSectionKey();
    const targetKey = currentKey.replace(/_muc\d+$/, `_muc${secNum}`);
    openInteractiveLecture(targetKey);
  };
  window.toggleLessonVideo = window.toggleModalVideo;

  window.toggleLectureDrawer = toggleLectureDrawer;
  window.openLectureModal = openInteractiveLecture;
  window.injectActiveLectureButton = injectActiveLectureButton;
  window.updateActiveLessonVideoUI = updateActiveLessonVideoUI;
  window.getCurrentLessonAndSectionKey = getCurrentLessonAndSectionKey;

  // Auto-init
  function initApp() {
    getOrCreateAudio();
    ensureMergedData();
    initSectionSelector();
    injectActiveLectureButton();
    updateActiveLessonVideoUI();
    setInterval(function() {
      injectActiveLectureButton();
      updateActiveLessonVideoUI();
    }, 1200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})(window, document);
