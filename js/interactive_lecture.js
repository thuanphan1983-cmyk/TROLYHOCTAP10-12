/**
 * Interactive Web Lecture Engine (KaTeX + SVG Vector + Edge-TTS Audio Sync)
 * Bài 1: Tính đơn điệu và cực trị của hàm số (Toán 12 - SGK Kết nối tri thức)
 * Thầy Thuấn Phan EdTech
 */

(function(window, document) {
  'use strict';

  // 1. DATA STORE
  const LECTURE_DATA = {
    muc1: {"lessonId": "bai1_muc1", "lessonTitle": "Bài 1: Tính đơn điệu và cực trị của hàm số", "sectionId": "muc1", "sectionTitle": "Mục 1: Tính đơn điệu của hàm số", "audioSrc": "audio/bai1_muc1_don_dieu.mp3", "totalDuration": 341.24, "parts": [{"partNumber": 1, "partTitle": "Phần 1: Định nghĩa & Định lý điều kiện cần/đủ", "scenes": [1]}, {"partNumber": 2, "partTitle": "Phần 2: Bảng xét dấu đạo hàm, bảng biến thiên & Đồ thị SVG", "scenes": [2, 3]}, {"partNumber": 3, "partTitle": "Phần 3: 4 Ví dụ minh họa từ cơ bản đến nâng cao", "scenes": [2, 3, 4, 5]}, {"partNumber": 4, "partTitle": "Phần 4: Mascot Cú Thông Thái soi bẫy sai lầm & Quy trình 4 bước", "scenes": [6]}], "scenes": [{"sceneIndex": 1, "title": "BÀI 1: TÍNH ĐƠN ĐIỆU CỦA HÀM SỐ", "subtitle": "MỤC 1 • KHÁI NIỆM & ĐỊNH LÝ MỞ RỘNG", "startTime": 0.0, "endTime": 49.7, "duration": 49.7, "mascotMode": "pointer", "mascotTip": "<b>Ghi nhớ quy ước:</b> Dấu bằng của đạo hàm xảy ra tại hữu hạn điểm thì hàm số vẫn giữ nguyên tính đơn điệu!", "bodyHtml": "\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#fef08a; font-weight:bold; margin-bottom:4px;\">\n          1. Định nghĩa tính đơn điệu trên khoảng $K$:\n        </div>\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.55; color:#e2e8f0; margin-left:14px;\">\n          • Hàm số $f(x)$ <b>đồng biến (tăng)</b> trên $K \\iff \\forall x_1, x_2 \\in K: x_1 < x_2 \\implies f(x_1) < f(x_2)$.<br>\n          • Hàm số $f(x)$ <b>nghịch biến (giảm)</b> trên $K \\iff \\forall x_1, x_2 \\in K: x_1 < x_2 \\implies f(x_1) > f(x_2)$.\n        </div>\n\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#38bdf8; font-weight:bold; margin:10px 0 4px 0;\">\n          2. Định lý mở rộng về dấu của đạo hàm (Điều kiện đủ):\n        </div>\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.55; color:#e2e8f0; margin-left:14px;\">\n          Giả sử hàm số $f(x)$ có đạo hàm trên khoảng $K$:<br>\n          • Nếu $f'(x) \\ge 0, \\; \\forall x \\in K$ và $f'(x) = 0$ tại <b>hữu hạn điểm</b> $\\implies f(x)$ <b>đồng biến</b> trên $K$.<br>\n          • Nếu $f'(x) \\le 0, \\; \\forall x \\in K$ và $f'(x) = 0$ tại <b>hữu hạn điểm</b> $\\implies f(x)$ <b>nghịch biến</b> trên $K$.\n        </div>\n    ", "narration": "Chào các em học sinh thân mến! Hôm nay thầy sẽ hướng dẫn các em tìm hiểu Mục 1 của Bài 1: Tính đơn điệu của hàm số trong chương trình Toán lớp 12. Đầu tiên, về mặt định nghĩa: Hàm số f x đồng biến trên khoảng K nếu với mọi x 1 nhỏ hơn x 2 thì f x 1 luôn nhỏ hơn f x 2; nghĩa là khi biến số x tăng thì giá trị hàm số f x cũng tăng. Ngược lại, hàm số nghịch biến khi x tăng thì f x giảm. Về định lý mở rộng: Nếu đạo hàm f phẩy x lớn hơn hoặc bằng 0 trên khoảng K, và dấu bằng chỉ xảy ra tại một số hữu hạn điểm thì hàm số đồng biến trên khoảng K. Tương tự, nếu f phẩy x nhỏ hơn hoặc bằng 0 và bằng 0 tại hữu hạn điểm thì hàm số nghịch biến."}, {"sceneIndex": 2, "title": "VÍ DỤ 1: ĐỌC TÍNH ĐƠN ĐIỆU TỪ BẢNG XÉT DẤU ĐẠO HÀM", "subtitle": "MỤC 1 • KỸ NĂNG ĐỌC BẢNG XÉT DẤU", "startTime": 49.7, "endTime": 97.24, "duration": 47.54, "mascotMode": "magnifier", "mascotTip": "<b>Cảnh báo bẫy:</b> Tuyệt đối <b>không dùng ký hiệu hợp ∪</b> để nối các khoảng! Bắt buộc viết từ <b>'và'</b> hoặc dấu phẩy.", "bodyHtml": "\n        <div style=\"font-size:clamp(14px, 1.8vh, 17px); color:#fef08a; margin-bottom:4px;\">\n          <b>Đề bài:</b> Cho hàm số $y = f(x)$ có bảng xét dấu của đạo hàm $f'(x)$ như sau:\n        </div>\n\n        <table class=\"bbt-table\" style=\"width:100%; border-collapse:collapse; border-top:2px solid #cbd5e1; border-bottom:2px solid #cbd5e1; margin:8px 0; background:rgba(15,23,42,0.75);\">\n          <tr style=\"border-bottom:1.5px solid #64748b;\">\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(15px, 2vh, 18px); border-right:2px solid #cbd5e1; padding:6px 0; color:#f8fafc;\">$x$</td>\n            <td style=\"padding:6px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(13px, 1.7vh, 16px); color:#f8fafc; font-weight:600;\">\n                <span style=\"white-space:nowrap;\">$-\\infty$</span>\n                <span style=\"color:#fef08a;\">$-3$</span>\n                <span style=\"color:#fef08a;\">$0$</span>\n                <span style=\"color:#fef08a;\">$2$</span>\n                <span style=\"white-space:nowrap;\">$+\\infty$</span>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(15px, 2vh, 18px); border-right:2px solid #cbd5e1; padding:6px 0; color:#f8fafc;\">$f'(x)$</td>\n            <td style=\"padding:6px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(14px, 1.8vh, 18px); font-weight:bold;\">\n                <span style=\"width:18px;\"></span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"width:18px;\"></span>\n              </div>\n            </td>\n          </tr>\n        </table>\n\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.5; color:#e2e8f0;\">\n          • Hàm số <b>đồng biến</b> trên các khoảng: $(-\\infty; -3)$ và $(0; 2)$.<br>\n          • Hàm số <b>nghịch biến</b> trên các khoảng: $(-3; 0)$ và $(2; +\\infty)$.\n        </div>\n    ", "narration": "Chúng ta cùng đến với Ví dụ 1: Nhận diện tính đơn điệu từ bảng xét dấu của đạo hàm f phẩy x. Quan sát bảng xét dấu, các em hãy chú ý: Tại các khoảng mà f phẩy x mang dấu cộng, đó là khoảng hàm số đồng biến. Cụ thể ở đây, dấu cộng xuất hiện trên hai khoảng: từ âm vô cùng đến âm 3, và khoảng từ 0 đến 2. Tại các khoảng f phẩy x mang dấu trừ, đó là khoảng hàm số nghịch biến: gồm khoảng từ âm 3 đến 0, và khoảng từ 2 đến dương vô cùng. Thầy đặc biệt lưu ý các em: Khi ghi kết luận, chúng ta dùng từ và, hoặc dấu chấm phẩy để nối các khoảng riêng biệt. Tuyệt đối không dùng ký hiệu hợp chữ U, vì đây là lỗi sai kinh điển thường bị trừ điểm trong các đề thi trắc nghiệm và tự luận."}, {"sceneIndex": 3, "title": "VÍ DỤ 2: ĐỌC TÍNH ĐƠN ĐIỆU TỪ ĐỒ THỊ HÀM SỐ", "subtitle": "MỤC 1 • QUY TẮC NHÌN ĐỒ THỊ TỪ TRÁI SANG PHẢI", "startTime": 97.24, "endTime": 148.98, "duration": 51.74, "mascotMode": "pointer", "mascotTip": "<b>Mẹo chiếu tọa độ:</b> Chiếu vuông góc các đoạn đồ thị xuống <b>trục hoành Ox</b> để lấy khoảng biến $x$, không nhìn nhầm trục $Oy$!", "bodyHtml": "\n        <div style=\"display:flex; gap:20px; align-items:center; justify-content:center;\">\n          <!-- SVG Graph -->\n          <div style=\"flex:1; max-width:440px; background:rgba(15,23,42,0.6); border:1.5px solid rgba(56,189,248,0.5); border-radius:14px; padding:10px; display:flex; justify-content:center; align-items:center;\">\n            <svg viewBox=\"0 0 360 260\" style=\"width:100%; max-width:360px; height:auto; max-height:36vh; background:transparent;\">\n              <!-- Ox Axis -->\n              <line x1=\"25\" y1=\"130\" x2=\"335\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n              <polygon points=\"335,130 324,125 324,135\" fill=\"#94a3b8\"/>\n              <text x=\"338\" y=\"135\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-weight=\"bold\" font-family=\"serif\">x</text>\n              <!-- Oy Axis -->\n              <line x1=\"180\" y1=\"240\" x2=\"180\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n              <polygon points=\"180,20 175,31 185,31\" fill=\"#94a3b8\"/>\n              <text x=\"174\" y=\"16\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-weight=\"bold\" font-family=\"serif\">y</text>\n              <!-- Origin O -->\n              <text x=\"164\" y=\"146\" fill=\"#cbd5e1\" font-size=\"15\" font-style=\"italic\" font-family=\"serif\">O</text>\n              <!-- Curve y = x^3 - 3x -->\n              <path d=\"M 55,250 C 75,170 95,50 120,50 C 145,50 160,95 180,130 C 200,165 215,210 240,210 C 265,210 285,90 305,10\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n              <!-- Label Curve -->\n              <text x=\"38\" y=\"36\" fill=\"#38bdf8\" font-size=\"15\" font-weight=\"bold\" font-style=\"italic\" font-family=\"serif\">y = x³ - 3x</text>\n              <!-- Cực Đại (-1; 2) -->\n              <line x1=\"120\" y1=\"50\" x2=\"120\" y2=\"130\" stroke=\"#fef08a\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/>\n              <line x1=\"120\" y1=\"50\" x2=\"180\" y2=\"50\" stroke=\"#fef08a\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/>\n              <line x1=\"120\" y1=\"127\" x2=\"120\" y2=\"133\" stroke=\"#94a3b8\" stroke-width=\"1.6\"/>\n              <line x1=\"177\" y1=\"50\" x2=\"183\" y2=\"50\" stroke=\"#94a3b8\" stroke-width=\"1.6\"/>\n              <circle cx=\"120\" cy=\"50\" r=\"4.5\" fill=\"#fef08a\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\n              <text x=\"110\" y=\"148\" fill=\"#fef08a\" font-size=\"15\" font-weight=\"bold\" font-family=\"serif\">-1</text>\n              <text x=\"187\" y=\"55\" fill=\"#fef08a\" font-size=\"15\" font-weight=\"bold\" font-family=\"serif\">2</text>\n              <!-- Cực Tiểu (1; -2) -->\n              <line x1=\"240\" y1=\"210\" x2=\"240\" y2=\"130\" stroke=\"#f43f5e\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/>\n              <line x1=\"240\" y1=\"210\" x2=\"180\" y2=\"210\" stroke=\"#f43f5e\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/>\n              <line x1=\"240\" y1=\"127\" x2=\"240\" y2=\"133\" stroke=\"#94a3b8\" stroke-width=\"1.6\"/>\n              <line x1=\"177\" y1=\"210\" x2=\"183\" y2=\"210\" stroke=\"#94a3b8\" stroke-width=\"1.6\"/>\n              <circle cx=\"240\" cy=\"210\" r=\"4.5\" fill=\"#f43f5e\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\n              <text x=\"236\" y=\"123\" fill=\"#f43f5e\" font-size=\"15\" font-weight=\"bold\" font-family=\"serif\">1</text>\n              <text x=\"187\" y=\"215\" fill=\"#f43f5e\" font-size=\"15\" font-weight=\"bold\" font-family=\"serif\">-2</text>\n            </svg>\n          </div>\n          <!-- Notes -->\n          <div style=\"flex:1; font-size:clamp(13px, 1.6vh, 15px); line-height:1.55; color:#e2e8f0;\">\n            <div style=\"color:#fef08a; font-weight:bold; margin-bottom:4px;\">Quy tắc đọc từ Đồ thị:</div>\n            • Nhìn đồ thị từ <b>trái sang phải</b> (theo chiều tăng trục $Ox$):<br>\n            • Nét đồ thị <b>đi lên</b>: Đồng biến trên $(-\\infty; -1)$ và $(1; +\\infty)$.<br>\n            • Nét đồ thị <b>đi xuống</b>: Nghịch biến trên $(-1; 1)$.<br>\n            <div style=\"margin-top:6px; padding:6px 10px; background:rgba(244,63,94,0.15); border-left:3px solid #f43f5e; border-radius:6px; font-size:13px; color:#fecdd3;\">\n              <b>Bẫy đề thi:</b> Kết luận theo <b>biến $x$</b>, tuyệt đối không nhìn nhầm sang trục $y$!\n            </div>\n          </div>\n        </div>\n    ", "narration": "Ở Ví dụ 2, chúng ta cùng rèn luyện kỹ năng đọc khoảng đơn điệu từ đồ thị của hàm số y bằng f x. Quy tắc cơ bản là các em hãy quan sát dáng điệu đồ thị từ trái sang phải, tức là theo chiều tăng dần của biến x. Từ âm vô cùng đến x bằng âm 1, nét đồ thị đi lên từ dưới lên trên, tương ứng hàm số đồng biến. Từ x bằng âm 1 đến x bằng 2, nét đồ thị đi xuống, hàm số nghịch biến. Và từ x bằng 2 đến dương vô cùng, nét đồ thị lại đi lên, hàm số đồng biến. Điểm mấu chốt ở đây là: Các em phải gióng vuông góc các điểm uốn lượn xuống trục hoành O x để lấy khoảng giá trị của x, ví dụ khoảng âm vô cùng đến âm 1 và 2 đến dương vô cùng. Tuyệt đối không lấy nhầm giá trị trên trục tung O y."}, {"sceneIndex": 4, "title": "VÍ DỤ 3: HÀM CÓ ĐẠO HÀM DẠNG TÍCH (NGHIỆM BỘI)", "subtitle": "MỤC 1 • QUY TẮC ĐAN DẤU NGHIỆM BỘI CHẴN / LẺ", "startTime": 148.98, "endTime": 219.8, "duration": 70.82, "mascotMode": "magnifier", "mascotTip": "<b>Bí quyết vàng:</b> Qua nghiệm <b>bội chẵn</b> đạo hàm <b>KHÔNG đổi dấu</b>; chỉ đan dấu qua các nghiệm <b>bội lẻ</b>!", "bodyHtml": "\n        <div style=\"font-size:clamp(14px, 1.8vh, 17px); color:#fef08a; margin-bottom:4px;\">\n          <b>Đề bài:</b> Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = (x-1)^2 (x+2)^3 (x-4)$. Tìm khoảng đơn điệu.\n        </div>\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); color:#cbd5e1;\">\n          Nghiệm $f'(x) = 0 \\iff x = 1$ (bội 2 - chẵn), $\\; x = -2$ (bội 3 - lẻ), $\\; x = 4$ (bội 1 - lẻ).\n        </div>\n\n        <table class=\"bbt-table\" style=\"width:100%; border-collapse:collapse; border-top:2px solid #cbd5e1; border-bottom:2px solid #cbd5e1; margin:6px 0; background:rgba(15,23,42,0.75);\">\n          <tr style=\"border-bottom:1.5px solid #64748b;\">\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(15px, 2vh, 18px); border-right:2px solid #cbd5e1; padding:5px 0; color:#f8fafc;\">$x$</td>\n            <td style=\"padding:5px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(13px, 1.7vh, 16px); color:#f8fafc; font-weight:600;\">\n                <span style=\"white-space:nowrap;\">$-\\infty$</span>\n                <span style=\"color:#fef08a;\">$-2$</span>\n                <span style=\"color:#f87171;\">$1$</span>\n                <span style=\"color:#fef08a;\">$4$</span>\n                <span style=\"white-space:nowrap;\">$+\\infty$</span>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(15px, 2vh, 18px); border-right:2px solid #cbd5e1; padding:5px 0; color:#f8fafc;\">$f'(x)$</td>\n            <td style=\"padding:5px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(14px, 1.8vh, 18px); font-weight:bold;\">\n                <span style=\"width:18px;\"></span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"color:#94a3b8;\">$0$</span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"width:18px;\"></span>\n              </div>\n            </td>\n          </tr>\n        </table>\n\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); line-height:1.45; color:#a7f3d0;\">\n          • Qua nghiệm bội chẵn $x = 1$, đạo hàm <b>KHÔNG đổi dấu</b> (vẫn mang dấu $-$).<br>\n          • Hàm số đồng biến trên: $(-\\infty; -2)$ và $(4; +\\infty)$. Nghịch biến trên khoảng: $(-2; 4)$.\n        </div>\n    ", "narration": "Ví dụ 3 là một dạng toán rất phổ biến trong đề thi: Cho đạo hàm f phẩy x dưới dạng tích các lũy thừa. Cụ thể: f phẩy x bằng x trừ 1 tất cả bình phương, nhân x cộng 2 tất cả mũ 3, nhân x trừ 4. Để xét dấu biểu thức này, các em giải f phẩy x bằng 0, thu được 3 nghiệm: x bằng âm 2, x bằng 1, và x bằng 4. Bí quyết then chốt ở đây là phân biệt nghiệm bội chẵn và nghiệm bội lẻ. Nghiệm x bằng 1 có số mũ 2 là bội chẵn, vì bình phương luôn không âm nên đạo hàm sẽ không đổi dấu khi đi qua x bằng 1. Ngược lại, x bằng âm 2 có số mũ 3 là bội lẻ, và x bằng 4 có số mũ 1 là bội lẻ, nên đạo hàm sẽ đan dấu qua hai nghiệm này. Thử một giá trị x bằng 5 lớn hơn 4, ta thấy f phẩy x mang dấu dương. Do đó ta điền dấu: qua 4 đổi sang âm, qua 1 giữ nguyên dấu âm, và qua âm 2 đổi sang dương. Kết luận: hàm số đồng biến trên khoảng âm vô cùng đến âm 2 và khoảng 4 đến dương vô cùng; nghịch biến trên khoảng âm 2 đến 4."}, {"sceneIndex": 5, "title": "VÍ DỤ 4: KHẢO SÁT TÍNH ĐƠN ĐIỆU CỦA HÀM BẬC BA", "subtitle": "MỤC 1 • TRÌNH BÀY BẢNG BIẾN THIÊN MẪU MỰC", "startTime": 219.8, "endTime": 307.64, "duration": 87.84, "mascotMode": "pointer", "mascotTip": "<b>Quy tắc tam thức bậc 2:</b> 'Trong trái ngoài cùng' — trong khoảng giữa 2 nghiệm mang dấu trái với hệ số $a = 3 > 0$!", "bodyHtml": "\n        <div style=\"font-size:clamp(14px, 1.8vh, 17px); color:#fef08a; margin-bottom:4px;\">\n          <b>Khảo sát tính đơn điệu:</b> $y = -x^3 + 3x^2 + 9x - 1$\n        </div>\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); color:#cbd5e1;\">\n          TXĐ: $D = \\mathbb{R}$. $\\; y' = -3x^2 + 6x + 9 = -3(x+1)(x-3) = 0 \\iff x = -1$ hoặc $x = 3$.\n        </div>\n\n        <table class=\"bbt-table\" style=\"width:100%; border-collapse:collapse; border-top:2px solid #cbd5e1; border-bottom:2px solid #cbd5e1; margin:6px 0; background:rgba(15,23,42,0.75);\">\n          <tr style=\"border-bottom:1.5px solid #64748b;\">\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:4px 0; color:#f8fafc;\">$x$</td>\n            <td style=\"padding:4px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(13px, 1.6vh, 15px); color:#f8fafc; font-weight:600;\">\n                <span style=\"white-space:nowrap;\">$-\\infty$</span>\n                <span style=\"color:#fef08a;\">$-1$</span>\n                <span style=\"color:#fef08a;\">$3$</span>\n                <span style=\"white-space:nowrap;\">$+\\infty$</span>\n              </div>\n            </td>\n          </tr>\n          <tr style=\"border-bottom:1.5px solid #64748b;\">\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:4px 0; color:#f8fafc;\">$y'$</td>\n            <td style=\"padding:4px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(14px, 1.8vh, 17px); font-weight:bold;\">\n                <span style=\"width:18px;\"></span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"width:18px;\"></span>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:4px 0; color:#f8fafc;\">$y$</td>\n            <td style=\"padding:4px 16px;\">\n              <div style=\"display:flex; align-items:center; height:58px; font-size:clamp(13px, 1.6vh, 16px);\">\n                <span style=\"align-self:flex-start; white-space:nowrap; font-weight:bold;\">$+\\infty$</span>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"6\" x2=\"90\" y2=\"28\" stroke=\"#f87171\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,28 84,19 80,27\" fill=\"#f87171\"/></svg></div>\n                <span style=\"align-self:flex-end; color:#f43f5e; font-weight:bold; padding:0 4px;\">$-6$</span>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"28\" x2=\"90\" y2=\"6\" stroke=\"#4ade80\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,6 80,7 84,15\" fill=\"#4ade80\"/></svg></div>\n                <span style=\"align-self:flex-start; color:#38bdf8; font-weight:bold; padding:0 4px;\">$26$</span>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"6\" x2=\"90\" y2=\"28\" stroke=\"#f87171\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,28 84,19 80,27\" fill=\"#f87171\"/></svg></div>\n                <span style=\"align-self:flex-end; white-space:nowrap; font-weight:bold;\">$-\\infty$</span>\n              </div>\n            </td>\n          </tr>\n        </table>\n\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); line-height:1.45; color:#a7f3d0;\">\n          • Đồng biến trên $(-1; 3)$. Nghịch biến trên hai khoảng: $(-\\infty; -1)$ và $(3; +\\infty)$.\n        </div>\n    ", "narration": "Bây giờ chúng ta cùng thực hiện một bài toán khảo sát hoàn chỉnh ở Ví dụ 4: Xét tính đơn điệu của hàm số bậc ba y bằng x mũ 3 trừ 3 x bình phương trừ 9 x cộng 2. Quy trình gồm 4 bước chuẩn mực: Bước 1, Tập xác định D bằng R. Bước 2, tính đạo hàm: y phẩy bằng 3 x bình trừ 6 x trừ 9, đặt 3 ra ngoài ta được 3 nhân mở ngoặc x bình trừ 2 x trừ 3 đóng ngoặc. Bước 3, giải phương trình y phẩy bằng 0, bấm máy tính hoặc nhẩm nghiệm a trừ b cộng c bằng 0, ta được x bằng âm 1 và x bằng 3. Bước 4, lập bảng biến thiên. Vì y phẩy là tam thức bậc hai có hệ số a bằng 3 dương, nên theo quy tắc trong trái ngoài cùng: trong khoảng giữa hai nghiệm âm 1 và 3, y phẩy mang dấu trừ. Ngoài khoảng hai nghiệm, y phẩy mang dấu cộng. Mũi tên của y sẽ đi lên từ âm vô cùng tới 7, đi xuống từ 7 về âm 25, rồi lại đi lên tới dương vô cùng. Kết luận: hàm số đồng biến trên hai khoảng âm vô cùng đến âm 1 và 3 đến dương vô cùng; nghịch biến trên khoảng âm 1 đến 3."}, {"sceneIndex": 6, "title": "TỔNG KẾT MỤC 1 & CÚ THÔNG THÁI SOI BẪY SAI LẦM", "subtitle": "MỤC 1 • 2 BẪY KINH ĐIỂN CẦN TRÁNH", "startTime": 307.64, "endTime": 341.24, "duration": 33.6, "mascotMode": "cheer", "mascotTip": "<b>Chúc mừng các em!</b> Hãy nắm chắc 4 bước và 2 bẫy sai lầm trên trước khi bước sang Mục 2: Cực trị của hàm số.", "bodyHtml": "\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#fef08a; font-weight:bold; margin-bottom:4px;\">\n          1. Quy trình 4 bước chuẩn mực khảo sát đơn điệu:\n        </div>\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.55; color:#e2e8f0; margin-left:14px;\">\n          <b>Bước 1:</b> Tìm Tập xác định $D$.<br>\n          <b>Bước 2:</b> Tính đạo hàm $y' = f'(x)$. Tìm các nghiệm $x_i$ (hoặc điểm $y'$ không xác định).<br>\n          <b>Bước 3:</b> Lập Bảng xét dấu $f'(x)$ hoặc Bảng biến thiên.<br>\n          <b>Bước 4:</b> Đọc kết luận các khoảng đồng biến, nghịch biến.\n        </div>\n\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#f43f5e; font-weight:bold; margin:8px 0 4px 0;\">\n          2. Cú Thông Thái cảnh báo bẫy trắc nghiệm:\n        </div>\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.55; color:#e2e8f0; margin-left:14px;\">\n          • <b>Bẫy 1:</b> Dùng dấu hợp $\\cup$ hoặc dấu trừ $\\setminus$ $\\implies$ <b>SAI HOÀN TOÀN</b>! Bắt buộc dùng chữ \"và\" hoặc dấu phẩy.<br>\n          • <b>Bẫy 2:</b> Quên điều kiện $f'(x) = 0$ tại hữu hạn điểm.\n        </div>\n    ", "narration": "Để tổng kết Mục 1, thầy và Cú Thông Thái muốn nhắc các em quy trình 4 bước: tìm tập xác định, tính đạo hàm, giải phương trình đạo hàm bằng 0, và lập bảng biến thiên để kết luận. Hãy luôn khắc ghi hai cái bẫy thường gặp nhất: Thứ nhất, không bao giờ dùng ký hiệu hợp chữ U khi kết luận khoảng đồng biến nghịch biến; phải dùng từ và. Thứ hai, khi đề bài cho đồ thị, hãy đọc thật kỹ đề bài xem đó là đồ thị của f x hay đồ thị của đạo hàm f phẩy x. Với đồ thị đạo hàm, khoảng đồng biến là phần đồ thị nằm phía trên trục hoành. Xin chúc mừng các em đã làm chủ Mục 1! Bây giờ chúng ta cùng sẵn sàng bước sang Mục 2 về Cực trị của hàm số."}]},
    muc2: {"lessonId": "bai1_muc2", "lessonTitle": "Bài 1: Tính đơn điệu và cực trị của hàm số", "sectionId": "muc2", "sectionTitle": "Mục 2: Cực trị của hàm số", "audioSrc": "audio/bai1_muc2_cuc_tri.mp3", "totalDuration": 269.68, "parts": [{"partNumber": 1, "partTitle": "Phần 1: Định nghĩa trực quan cực trị & Điều kiện cần/đủ (Dấu hiệu 1)", "scenes": [1, 2]}, {"partNumber": 2, "partTitle": "Phần 2: Bảng biến thiên có điểm không xác định chuẩn Bộ GD&ĐT", "scenes": [3]}, {"partNumber": 3, "partTitle": "Phần 3: 4 Ví dụ minh họa tiêu biểu từ cơ bản đến nâng cao", "scenes": [3, 4, 5, 6]}, {"partNumber": 4, "partTitle": "Phần 4: Mascot Cú Thông Thái soi bẫy sai lầm & Đạo hàm cấp hai (Dấu hiệu 2)", "scenes": [6]}], "scenes": [{"sceneIndex": 1, "title": "BÀI 1: CỰC TRỊ CỦA HÀM SỐ", "subtitle": "MỤC 2 • PHÂN BIỆT 3 THUẬT NGỮ CỐT LÕI", "startTime": 0.0, "endTime": 49.03, "duration": 49.03, "mascotMode": "pointer", "mascotTip": "<b>Đọc kỹ câu hỏi:</b> Hỏi 'điểm cực trị của hàm số' là tìm <b>x</b>; hỏi 'giá trị cực trị' là tìm <b>y</b>; hỏi 'của đồ thị' là tìm cặp <b>(x; y)</b>!", "bodyHtml": "\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#fef08a; font-weight:bold; margin-bottom:4px;\">\n          1. Định nghĩa cực đại và cực tiểu của hàm số:\n        </div>\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); line-height:1.5; color:#e2e8f0; margin-left:14px;\">\n          Cho hàm số $y = f(x)$ xác định trên tập $D$ và $x_0 \\in (a; b) \\subset D$:<br>\n          • Điểm $x_0$ gọi là <b>điểm cực đại</b> của hàm số nếu:\n          <span style=\"color:#38bdf8; font-weight:bold; margin-left:6px;\">$f(x) < f(x_0), \\; \\forall x \\in (a; b) \\setminus \\{x_0\\}$</span>. Khi đó $f(x_0)$ là <b>giá trị cực đại</b> ($y_{\\text{CĐ}}$).<br>\n          • Điểm $x_0$ gọi là <b>điểm cực tiểu</b> của hàm số nếu:\n          <span style=\"color:#4ade80; font-weight:bold; margin-left:6px;\">$f(x) > f(x_0), \\; \\forall x \\in (a; b) \\setminus \\{x_0\\}$</span>. Khi đó $f(x_0)$ là <b>giá trị cực tiểu</b> ($y_{\\text{CT}}$).\n        </div>\n\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#38bdf8; font-weight:bold; margin:8px 0 4px 0;\">\n          2. Phân biệt rõ 3 thuật ngữ cốt lõi (Tránh bẫy trắc nghiệm):\n        </div>\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); line-height:1.5; color:#e2e8f0; margin-left:14px;\">\n          • <b>Điểm cực trị của HÀM SỐ:</b> Là giá trị của biến số $x$ (ví dụ: $x = -1, \\; x = 3$).<br>\n          • <b>Cực trị (hoặc Giá trị cực trị) của HÀM SỐ:</b> Là giá trị $y = f(x)$ (ví dụ: $y_{\\text{CĐ}} = 7, \\; y_{\\text{CT}} = -25$).<br>\n          • <b>Điểm cực trị của ĐỒ THỊ hàm số:</b> Là điểm $M(x; y)$ trên mặt phẳng tọa độ $Oxy$ (ví dụ: $M(-1; 7)$).\n        </div>\n    ", "narration": "Chào các em! Thầy và Cú Thông Thái xin chào mừng các em đến với Mục 2 của Bài 1: Cực trị của hàm số. Trước tiên, các em cần nắm vững định nghĩa: Điểm cực đại là điểm mà tại đó giá trị hàm số lớn hơn mọi giá trị lân cận; còn điểm cực tiểu là điểm có giá trị nhỏ hơn mọi giá trị lân cận. Đặc biệt, trong đề thi trắc nghiệm Bộ Giáo dục, học sinh rất hay nhầm lẫn giữa 3 khái niệm: Một là Điểm cực trị của hàm số - đó chính là giá trị x 0. Hai là Cực trị hay Giá trị cực trị - đó là giá trị y 0 bằng f của x 0. Ba là Điểm cực trị của đồ thị hàm số - đây là một điểm có tọa độ M gồm cả hoành độ x 0 và tung độ y 0. Hãy đọc thật kỹ từng chữ trong câu hỏi để không bị mất điểm oan."}, {"sceneIndex": 2, "title": "ĐIỀU KIỆN ĐỦ ĐỂ CÓ CỰC TRỊ (DẤU HIỆU 1)", "subtitle": "MỤC 2 • SỰ ĐỔI DẤU CỦA ĐẠO HÀM f'(x)", "startTime": 49.03, "endTime": 91.15, "duration": 42.12, "mascotMode": "magnifier", "mascotTip": "<b>Lưu ý vàng:</b> Tại $x_0$, đạo hàm có vạch kép $||$ nhưng hàm số <b>vẫn liên tục</b> thì $x_0$ <b>vẫn là điểm cực trị</b>!", "bodyHtml": "\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#fef08a; font-weight:bold; margin-bottom:4px;\">\n          Định lý (Dấu hiệu 1 - Đổi dấu đạo hàm qua $x_0$):\n        </div>\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.55; color:#e2e8f0; margin-left:14px;\">\n          Giả sử hàm số $f(x)$ liên tục trên khoảng $(a; b)$ chứa $x_0$ và có đạo hàm trên $(a; b) \\setminus \\{x_0\\}$:<br>\n          • Nếu $f'(x)$ đổi dấu từ <b>$(+)$ sang $(-)$</b> khi qua $x_0 \\implies x_0$ là <b>điểm CỰC ĐẠI</b>.<br>\n          • Nếu $f'(x)$ đổi dấu từ <b>$(-)$ sang $(+)$</b> khi qua $x_0 \\implies x_0$ là <b>điểm CỰC TIỂU</b>.<br>\n          <div style=\"margin-top:8px; padding:6px 12px; background:rgba(56,189,248,0.12); border-left:3px solid #38bdf8; border-radius:6px; font-size:clamp(12px, 1.5vh, 14px);\">\n            <b>Lưu ý vàng:</b> Tại $x_0$, đạo hàm $f'(x_0)$ <b>có thể không xác định</b> (vạch kép $||$), nhưng nếu hàm số $f(x)$ <b>liên tục tại $x_0$</b> và đạo hàm đổi dấu thì $x_0$ <b>VẪN LÀ ĐIỂM CỰC TRỊ</b>!\n          </div>\n        </div>\n    ", "narration": "Chúng ta cùng tìm hiểu Dấu hiệu 1 để tìm cực trị, đó là dựa vào sự đổi dấu của đạo hàm f phẩy x khi đi qua điểm x 0. Quy tắc rất trực quan: Nếu f phẩy đổi dấu từ dương sang âm, đồ thị đi lên rồi đi xuống như một đỉnh núi, thì x 0 là điểm cực đại. Nếu f phẩy đổi dấu từ âm sang dương, đồ thị đi xuống rồi đi lên như đáy thung lũng, thì x 0 là điểm cực tiểu. Nếu f phẩy không đổi dấu thì x 0 không phải là điểm cực trị. Và đây là điều Cú Thông Thái lưu ý đặc biệt cho các em: Tại điểm x 0, đạo hàm f phẩy có thể không tồn tại, tức là có vạch kẻ kép ở hàng đạo hàm, nhưng miễn là hàm số f x liên tục và xác định tại x 0, đồng thời đạo hàm hai bên đổi dấu, thì x 0 vẫn được công nhận là một điểm cực trị của hàm số."}, {"sceneIndex": 3, "title": "VÍ DỤ 1: ĐỌC CỰC TRỊ TỪ BẢNG BIẾN THIÊN", "subtitle": "MỤC 2 • XỬ LÝ ĐIỂM CÓ ĐẠO HÀM KHÔNG XÁC ĐỊNH", "startTime": 91.15, "endTime": 119.73, "duration": 28.58, "mascotMode": "pointer", "mascotTip": "<b>Quan sát kỹ:</b> Tại $x = 0$, hàng $f'(x)$ có vạch kép $||$ nhưng hàng $f(x)$ xác định bằng $-1$, nên $x = 0$ vẫn là điểm cực tiểu!", "bodyHtml": "\n        <div style=\"font-size:clamp(14px, 1.8vh, 17px); color:#fef08a; margin-bottom:4px;\">\n          <b>Đề bài:</b> Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ có bảng biến thiên:\n        </div>\n\n        <table class=\"bbt-table\" style=\"width:100%; border-collapse:collapse; border-top:2px solid #cbd5e1; border-bottom:2px solid #cbd5e1; margin:6px 0; background:rgba(15,23,42,0.75);\">\n          <tr style=\"border-bottom:1.5px solid #64748b;\">\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:4px 0; color:#f8fafc;\">$x$</td>\n            <td style=\"padding:4px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(13px, 1.6vh, 15px); color:#f8fafc; font-weight:600;\">\n                <span style=\"white-space:nowrap;\">$-\\infty$</span>\n                <span style=\"color:#fef08a;\">$-2$</span>\n                <span style=\"color:#38bdf8; font-weight:bold;\">$0$</span>\n                <span style=\"color:#fef08a;\">$3$</span>\n                <span style=\"white-space:nowrap;\">$+\\infty$</span>\n              </div>\n            </td>\n          </tr>\n          <tr style=\"border-bottom:1.5px solid #64748b;\">\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:4px 0; color:#f8fafc;\">$f'(x)$</td>\n            <td style=\"padding:4px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(14px, 1.8vh, 17px); font-weight:bold;\">\n                <span style=\"width:18px;\"></span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"display:inline-flex; align-items:center; justify-content:center; width:20px;\"><svg width=\"10\" height=\"22\" viewBox=\"0 0 10 22\"><line x1=\"3\" y1=\"0\" x2=\"3\" y2=\"22\" stroke=\"#f43f5e\" stroke-width=\"2\"/><line x1=\"7\" y1=\"0\" x2=\"7\" y2=\"22\" stroke=\"#f43f5e\" stroke-width=\"2\"/></svg></span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"width:18px;\"></span>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:4px 0; color:#f8fafc;\">$f(x)$</td>\n            <td style=\"padding:4px 16px;\">\n              <div style=\"display:flex; align-items:center; height:58px; font-size:clamp(13px, 1.6vh, 16px);\">\n                <span style=\"align-self:flex-end; white-space:nowrap; font-weight:bold;\">$-\\infty$</span>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"28\" x2=\"90\" y2=\"6\" stroke=\"#4ade80\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,6 80,7 84,15\" fill=\"#4ade80\"/></svg></div>\n                <span style=\"align-self:flex-start; color:#38bdf8; font-weight:bold; padding:0 4px;\">$5$</span>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"6\" x2=\"90\" y2=\"28\" stroke=\"#f87171\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,28 84,19 80,27\" fill=\"#f87171\"/></svg></div>\n                <div style=\"display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; width:20px; position:relative;\"><svg width=\"10\" height=\"55\" viewBox=\"0 0 10 55\"><line x1=\"3\" y1=\"0\" x2=\"3\" y2=\"55\" stroke=\"#f43f5e\" stroke-width=\"2\"/><line x1=\"7\" y1=\"0\" x2=\"7\" y2=\"55\" stroke=\"#f43f5e\" stroke-width=\"2\"/></svg><span style=\"font-size:13px; color:#f43f5e; font-weight:bold; position:absolute; bottom:1px; background:#0f172a; padding:0 3px; border-radius:3px;\">$-1$</span></div>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"28\" x2=\"90\" y2=\"6\" stroke=\"#4ade80\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,6 80,7 84,15\" fill=\"#4ade80\"/></svg></div>\n                <span style=\"align-self:flex-start; color:#38bdf8; font-weight:bold; padding:0 4px;\">$4$</span>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"6\" x2=\"90\" y2=\"28\" stroke=\"#f87171\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,28 84,19 80,27\" fill=\"#f87171\"/></svg></div>\n                <span style=\"align-self:flex-end; white-space:nowrap; font-weight:bold;\">$-\\infty$</span>\n              </div>\n            </td>\n          </tr>\n        </table>\n\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); line-height:1.45; color:#a7f3d0;\">\n          • Tại $x = 0$, đạo hàm $f'(x)$ có vạch kép đứng $||$ kéo dài nhưng hàm số liên tục và đổi dấu từ $(-)$ sang $(+) \\implies x = 0$ <b>vẫn là điểm CỰC TIỂU</b> ($y_{CT} = -1$).<br>\n          • Hàm số đạt <b>cực đại</b> tại hai điểm $x = -2$ ($y_{CĐ} = 5$) và $x = 3$ ($y_{CĐ} = 4$).\n        </div>\n    ", "narration": "Ở Ví dụ 1, chúng ta cùng đọc cực trị từ một bảng biến thiên có chứa điểm nhạy cảm. Hàm số f x liên tục trên R. Tại x bằng âm 2, f phẩy x đổi dấu từ dương sang âm, nên hàm số đạt cực đại tại x bằng âm 2, với giá trị cực đại y cực đại bằng 5. Tại x bằng 0, các em thấy ở hàng đạo hàm có vạch kép hai sọc, nghĩa là đạo hàm không xác định. Tuy nhiên, ở hàng f x, giá trị tại 0 vẫn tồn tại và bằng âm 1, và đạo hàm hai bên đổi dấu từ âm sang dương. Do đó, x bằng 0 vẫn là điểm cực tiểu hợp lệ, với y cực tiểu bằng âm 1. Tại x bằng 3, f phẩy đổi dấu từ dương sang âm, hàm số đạt cực đại với y cực đại bằng 4. Tổng kết lại: Hàm số này có tất cả 3 điểm cực trị, gồm 2 điểm cực đại và 1 điểm cực tiểu."}, {"sceneIndex": 4, "title": "VÍ DỤ 2: TÌM CỰC TRỊ TỪ ĐẠO HÀM DẠNG TÍCH", "subtitle": "MỤC 2 • BÍ QUYẾT GIẢI NHANH TRONG 10 GIÂY", "startTime": 119.73, "endTime": 175.53, "duration": 55.8, "mascotMode": "magnifier", "mascotTip": "<b>Mẹo bấm giây:</b> Gạch bỏ ngay tất cả các nhân tử có <b>số mũ chẵn</b>, chỉ đếm số nghiệm của các nhân tử có <b>số mũ lẻ</b>!", "bodyHtml": "\n        <div style=\"font-size:clamp(14px, 1.8vh, 17px); color:#fef08a; margin-bottom:4px;\">\n          <b>Đề bài:</b> Cho hàm số $f(x)$ có đạo hàm $f'(x) = x(x-1)^2 (x+3)^5$. Hỏi hàm số có bao nhiêu điểm cực trị?\n        </div>\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); color:#cbd5e1;\">\n          <b style=\"color:#38bdf8;\">Định lý then chốt:</b> <i>\"Số điểm cực trị bằng đúng số nghiệm bội lẻ của đạo hàm $f'(x)$.\"</i><br>\n          • $x = -3$ (bội 5 - lẻ) $\\implies$ Có cực trị. $\\;$ • $x = 0$ (bội 1 - lẻ) $\\implies$ Có cực trị.<br>\n          • $x = 1$ (bội 2 - chẵn) $\\implies$ Không đổi dấu $\\implies$ Không phải cực trị.\n        </div>\n\n        <table class=\"bbt-table\" style=\"width:100%; border-collapse:collapse; border-top:2px solid #cbd5e1; border-bottom:2px solid #cbd5e1; margin:6px 0; background:rgba(15,23,42,0.75);\">\n          <tr style=\"border-bottom:1.5px solid #64748b;\">\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:5px 0; color:#f8fafc;\">$x$</td>\n            <td style=\"padding:5px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(13px, 1.6vh, 15px); color:#f8fafc; font-weight:600;\">\n                <span style=\"white-space:nowrap;\">$-\\infty$</span>\n                <span style=\"color:#fef08a;\">$-3$</span>\n                <span style=\"color:#fef08a;\">$0$</span>\n                <span style=\"color:#94a3b8;\">$1$</span>\n                <span style=\"white-space:nowrap;\">$+\\infty$</span>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:5px 0; color:#f8fafc;\">$f'(x)$</td>\n            <td style=\"padding:5px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(14px, 1.8vh, 17px); font-weight:bold;\">\n                <span style=\"width:18px;\"></span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"color:#94a3b8;\">$0$</span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"width:18px;\"></span>\n              </div>\n            </td>\n          </tr>\n        </table>\n\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); color:#a7f3d0;\">\n          <b>Kết luận:</b> Hàm số có đúng <b>2 điểm cực trị</b> ($x = -3$ là cực đại, $x = 0$ là cực tiểu).\n        </div>\n    ", "narration": "Ví dụ 2 là một dạng câu hỏi trắc nghiệm kinh điển xuất hiện trong hầu hết các đề thi tốt nghiệp THPT: Tìm số điểm cực trị của hàm số khi biết biểu thức đạo hàm f phẩy x bằng x nhân x trừ 1 tất cả bình phương nhân x cộng 3 tất cả mũ 5. Để giải nhanh bài này trong vòng 10 giây, Cú Thông Thái chỉ cho các em một nguyên tắc vàng: Số điểm cực trị chỉ bằng số nghiệm bội lẻ của phương trình đạo hàm bằng 0, các nghiệm bội chẵn bị vô hiệu hóa vì không làm đạo hàm đổi dấu. Ta phân tích từng nhân tử: x bằng 0 có số mũ 1 là bội lẻ, nên đây là điểm cực trị. Nhân tử x trừ 1 có số mũ 2 là bội chẵn, đạo hàm không đổi dấu khi qua 1 nên ta loại bỏ ngay lập tức. Nhân tử x cộng 3 có số mũ 5 là số lẻ, nên x bằng âm 3 là điểm cực trị. Như vậy, phương trình chỉ có hai nghiệm bội lẻ là x bằng âm 3 và x bằng 0. Ta kết luận ngay: hàm số có đúng 2 điểm cực trị. Hãy nhớ kỹ: Gạch bỏ mọi nhân tử mũ chẵn!"}, {"sceneIndex": 5, "title": "VÍ DỤ 3: KHẢO SÁT CỰC TRỊ CỦA HÀM BẬC BA", "subtitle": "MỤC 2 • ĐẦY ĐỦ CÁC BƯỚC KHẢO SÁT CHUẨN MỰC", "startTime": 175.53, "endTime": 236.03, "duration": 60.5, "mascotMode": "pointer", "mascotTip": "<b>Hệ số $a = -3 < 0$:</b> Tam thức bậc 2 mang dấu âm ở ngoài khoảng hai nghiệm và mang dấu dương ở trong khoảng!", "bodyHtml": "\n        <div style=\"font-size:clamp(14px, 1.8vh, 17px); color:#fef08a; margin-bottom:4px;\">\n          <b>Khảo sát cực trị:</b> $y = -x^3 + 3x^2 + 9x - 1$\n        </div>\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); color:#cbd5e1;\">\n          TXĐ: $D = \\mathbb{R}$. $\\; y' = -3x^2 + 6x + 9 = -3(x+1)(x-3) = 0 \\iff x = -1$ hoặc $x = 3$.\n        </div>\n\n        <table class=\"bbt-table\" style=\"width:100%; border-collapse:collapse; border-top:2px solid #cbd5e1; border-bottom:2px solid #cbd5e1; margin:6px 0; background:rgba(15,23,42,0.75);\">\n          <tr style=\"border-bottom:1.5px solid #64748b;\">\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:4px 0; color:#f8fafc;\">$x$</td>\n            <td style=\"padding:4px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(13px, 1.6vh, 15px); color:#f8fafc; font-weight:600;\">\n                <span style=\"white-space:nowrap;\">$-\\infty$</span>\n                <span style=\"color:#fef08a;\">$-1$</span>\n                <span style=\"color:#fef08a;\">$3$</span>\n                <span style=\"white-space:nowrap;\">$+\\infty$</span>\n              </div>\n            </td>\n          </tr>\n          <tr style=\"border-bottom:1.5px solid #64748b;\">\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:4px 0; color:#f8fafc;\">$y'$</td>\n            <td style=\"padding:4px 16px;\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; font-size:clamp(14px, 1.8vh, 17px); font-weight:bold;\">\n                <span style=\"width:18px;\"></span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#4ade80;\">$+$</span>\n                <span style=\"color:#f8fafc;\">$0$</span>\n                <span style=\"color:#f87171;\">$-$</span>\n                <span style=\"width:18px;\"></span>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"width:70px; text-align:center; font-weight:bold; font-size:clamp(14px, 1.8vh, 17px); border-right:2px solid #cbd5e1; padding:4px 0; color:#f8fafc;\">$y$</td>\n            <td style=\"padding:4px 16px;\">\n              <div style=\"display:flex; align-items:center; height:58px; font-size:clamp(13px, 1.6vh, 16px);\">\n                <span style=\"align-self:flex-start; white-space:nowrap; font-weight:bold;\">$+\\infty$</span>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"6\" x2=\"90\" y2=\"28\" stroke=\"#f87171\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,28 84,19 80,27\" fill=\"#f87171\"/></svg></div>\n                <span style=\"align-self:flex-end; color:#f43f5e; font-weight:bold; padding:0 4px;\">$-6$</span>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"28\" x2=\"90\" y2=\"6\" stroke=\"#4ade80\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,6 80,7 84,15\" fill=\"#4ade80\"/></svg></div>\n                <span style=\"align-self:flex-start; color:#38bdf8; font-weight:bold; padding:0 4px;\">$26$</span>\n                <div style=\"flex:1; display:flex; align-items:center; justify-content:center; padding:0 4px;\"><svg width=\"100%\" height=\"34\" viewBox=\"0 0 100 34\" preserveAspectRatio=\"none\"><line x1=\"10\" y1=\"6\" x2=\"90\" y2=\"28\" stroke=\"#f87171\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"90,28 84,19 80,27\" fill=\"#f87171\"/></svg></div>\n                <span style=\"align-self:flex-end; white-space:nowrap; font-weight:bold;\">$-\\infty$</span>\n              </div>\n            </td>\n          </tr>\n        </table>\n\n        <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); line-height:1.45; color:#a7f3d0;\">\n          • Điểm cực tiểu: $x = -1, \\; y_{\\text{CT}} = -6$. Điểm cực đại: $x = 3, \\; y_{\\text{CĐ}} = 26$.\n        </div>\n    ", "narration": "Ở Ví dụ 3, chúng ta tiến hành tìm cực trị của hàm số bậc ba y bằng trừ x mũ 3 cộng 3 x bình phương cộng 9 x trừ 1. Bước 1, tập xác định D bằng R. Bước 2, lấy đạo hàm: y phẩy bằng trừ 3 x bình cộng 6 x cộng 9. Bước 3, giải phương trình y phẩy bằng 0, ta chia cả hai vế cho trừ 3 được x bình trừ 2 x trừ 3 bằng 0, cho ra hai nghiệm x bằng âm 1 và x bằng 3. Bước 4, ta tính giá trị tương ứng: thay âm 1 vào hàm số ban đầu được y bằng âm 6; thay 3 vào hàm số ban đầu được y bằng 26. Lập bảng biến thiên: vì hệ số a của đạo hàm bằng trừ 3 âm, nên trong khoảng hai nghiệm y phẩy mang dấu cộng, ngoài khoảng mang dấu trừ. Mũi tên của y đi xuống âm 6, đi lên 26, rồi lại đi xuống âm vô cùng. Kết luận rành mạch: Điểm cực tiểu của hàm số là x bằng âm 1, giá trị cực tiểu là âm 6. Điểm cực đại của hàm số là x bằng 3, giá trị cực đại là 26. Điểm cực đại của đồ thị là A tọa độ 3 chấm phẩy 26, điểm cực tiểu của đồ thị là B tọa độ âm 1 chấm phẩy âm 6."}, {"sceneIndex": 6, "title": "DẤU HIỆU 2 & CÚ THÔNG THÁI SOI BẪY TRẮC NGHIỆM", "subtitle": "MỤC 2 • ĐẠO HÀM CẤP 2 & 2 SAI LẦM NGUY HIỂM", "startTime": 236.03, "endTime": 269.68, "duration": 33.65, "mascotMode": "cheer", "mascotTip": "<b>Chúc các em tự tin!</b> Làm chủ vững vàng tính đơn điệu và cực trị để đạt điểm tối đa trong các kỳ thi sắp tới!", "bodyHtml": "\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#fef08a; font-weight:bold; margin-bottom:4px;\">\n          1. Dấu hiệu 2 (Sử dụng đạo hàm cấp hai $y''$):\n        </div>\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.55; color:#e2e8f0; margin-left:14px;\">\n          Giả sử $f'(x_0) = 0$ và có $f''(x_0)$:<br>\n          • Nếu $f''(x_0) < 0 \\implies x_0$ là <b>điểm CỰC ĐẠI</b>.<br>\n          • Nếu $f''(x_0) > 0 \\implies x_0$ là <b>điểm CỰC TIỂU</b>.\n        </div>\n\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#f43f5e; font-weight:bold; margin:8px 0 4px 0;\">\n          2. Cú Thông Thái cảnh báo 2 sai lầm chết người:\n        </div>\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.55; color:#e2e8f0; margin-left:14px;\">\n          • <b>Sai lầm 1:</b> Đồng nhất Cực đại là GTLN! Cực đại chỉ mang tính lân cận cục bộ, hoàn toàn có thể nhỏ hơn cực tiểu ở nhánh khác.<br>\n          • <b>Sai lầm 2:</b> $f'(x_0) = 0$ chưa chắc là cực trị nếu không đổi dấu.\n        </div>\n    ", "narration": "Để khép lại bài học hôm nay, thầy giới thiệu thêm Dấu hiệu 2 dùng đạo hàm cấp hai f hai phẩy: Nếu f phẩy tại x 0 bằng 0 và f hai phẩy nhỏ hơn 0 thì x 0 là cực đại; nếu f hai phẩy lớn hơn 0 thì x 0 là cực tiểu. Cuối cùng, Cú Thông Thái nhắc các em khắc cốt ghi tâm hai sai lầm rất nguy hiểm: Sai lầm thứ nhất là nghĩ rằng Cực đại chính là Giá trị lớn nhất. Hoàn toàn sai! Cực đại chỉ mang tính lân cận cục bộ, thậm chí có những hàm số giá trị cực đại còn nhỏ hơn giá trị cực tiểu ở nhánh khác. Sai lầm thứ hai là thấy đạo hàm bằng 0 đã vội kết luận là cực trị; nếu đạo hàm không đổi dấu thì đó không phải là cực trị. Thầy chúc các em học tập thật tốt và làm chủ hoàn toàn Bài 1 Toán 12!"}]}
  }  // State
  let currentSection = 'muc1';
  let currentSceneIndex = 1;
  let audioEl = null;
  let isPlaying = false;
  let isSeeking = false;

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
      <div style="display:flex; align-items:center; gap:8px; width:100%; background:rgba(15,23,42,0.9); border:1px solid ${badgeColor}88; border-radius:10px; padding:5px 12px; box-shadow:0 2px 8px rgba(0,0,0,0.4);">
        <div style="width:26px; height:26px; border-radius:6px; background:${badgeColor}22; color:${badgeColor}; display:flex; align-items:center; justify-content:center; font-size:14px; flex-shrink:0;">
          🦉
        </div>
        <div style="flex:1; font-size:clamp(11.5px, 1.4vh, 13px); color:#f1f5f9; line-height:1.35; font-family:serif;">
          <strong style="color:${badgeColor}; margin-right:4px;">${badgeTitle}:</strong> ${tipText}
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
      audioEl.addEventListener('play', () => { isPlaying = true; updatePlayButtonState(); });
      audioEl.addEventListener('pause', () => { isPlaying = false; updatePlayButtonState(); });
      audioEl.addEventListener('ended', onAudioEnded);
      audioEl.addEventListener('error', (e) => {
        console.warn('Audio playback error / falling back to alternative source:', e);
        if (!audioEl._fallbackTried) {
          audioEl._fallbackTried = true;
          const cur = audioEl.src;
          if (cur.includes('/audio/')) {
            audioEl.src = 'audio/' + cur.split('/audio/').pop();
          } else if (cur.includes('audio/')) {
            audioEl.src = '/audio/' + cur.split('audio/').pop();
          }
          try {
            const p = audioEl.play();
            if (p && p.catch) p.catch(() => {});
          } catch(err) {}
        }
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
      if (typeof window.renderMath === 'function') {
        window.renderMath(bodyEl);
      } else if (typeof window.renderMathInElement === 'function') {
        window.renderMathInElement(bodyEl, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    }

    if (mascotContainer) {
      mascotContainer.innerHTML = getOwlSvg(scene.mascotMode, scene.mascotTip);
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(mascotContainer, {
          delimiters: [{ left: '$', right: '$', display: false }],
          throwOnError: false
        });
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

  // Update 4-Part Pedagogical Pills
  function updatePartPills() {
    const container = document.getElementById('il-part-pills');
    if (!container) return;

    const data = LECTURE_DATA[currentSection];
    if (!data || !data.parts) return;

    let html = '';
    data.parts.forEach(p => {
      const isPartActive = p.scenes.includes(currentSceneIndex);
      const activeClass = isPartActive 
        ? 'bg-indigo-600 text-white font-bold border-indigo-400 shadow-sm' 
        : 'bg-slate-900 text-indigo-300 border-slate-800 hover:bg-slate-800';

      const firstScene = p.scenes[0];
      html += `
        <button type="button" onclick="window.seekLectureToScene(${firstScene})"
          class="px-2.5 py-1 rounded-lg text-xs font-medium border transition cursor-pointer whitespace-nowrap ${activeClass}">
          ${p.partTitle}
        </button>
      `;
    });
    container.innerHTML = html;
  }

  // Audio timeupdate handler
  function onTimeUpdate() {
    const audio = getOrCreateAudio();
    if (!audio) return;

    const cur = audio.currentTime;
    const dur = audio.duration || LECTURE_DATA[currentSection].totalDuration || 300;

    // Time text
    const timeDisplay = document.getElementById('il-time-display');
    if (timeDisplay) {
      timeDisplay.textContent = `${fmtTime(cur)} / ${fmtTime(dur)}`;
    }

    // Progress bar
    const progBar = document.getElementById('il-progress-bar');
    if (progBar && !isSeeking) {
      const pct = Math.min(100, Math.max(0, (cur / dur) * 100));
      progBar.style.width = pct + '%';
    }

    // Determine current scene from timestamps
    const data = LECTURE_DATA[currentSection];
    if (!data || !data.scenes) return;

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

    if (activeIdx !== currentSceneIndex) {
      renderSlide(activeIdx);
      updatePartPills();
    }
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

  // When Audio ends
  function onAudioEnded() {
    isPlaying = false;
    updatePlayButtonState();

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

  // Switch between Section 1 and Section 2
  function switchSection(sec) {
    const secKey = (sec === 2 || sec === '2' || sec === 'muc2') ? 'muc2' : 'muc1';
    currentSection = secKey;
    const data = LECTURE_DATA[secKey];

    // Update section switcher tabs
    const tab1 = document.getElementById('il-tab-muc1');
    const tab2 = document.getElementById('il-tab-muc2');
    if (tab1 && tab2) {
      if (secKey === 'muc1') {
        tab1.className = 'px-4 py-2 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-md cursor-pointer transition flex items-center gap-1.5';
        tab2.className = 'px-4 py-2 rounded-xl font-bold text-xs sm:text-sm bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 cursor-pointer transition flex items-center gap-1.5';
      } else {
        tab2.className = 'px-4 py-2 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-md cursor-pointer transition flex items-center gap-1.5';
        tab1.className = 'px-4 py-2 rounded-xl font-bold text-xs sm:text-sm bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 cursor-pointer transition flex items-center gap-1.5';
      }
    }

    // Update Audio src
    const audio = getOrCreateAudio();
    audio._fallbackTried = false;
    const resolvedSrc = (window.location.protocol === 'file:') ? data.audioSrc.replace(/^\//, '') : data.audioSrc;
    audio.src = resolvedSrc;
    audio.currentTime = 0;

    // Reset slide to 1
    renderSlide(1);
    updatePartPills();

    // Play if modal is active
    try {
      const p = audio.play();
      if (p && p.catch) p.catch(() => {});
    } catch(e) {}
  }

  // Seek audio to specific scene
  function seekToScene(sceneIdx) {
    const data = LECTURE_DATA[currentSection];
    if (!data || !data.scenes) return;
    const sc = data.scenes[sceneIdx - 1];
    if (!sc) return;

    const audio = getOrCreateAudio();
    audio.currentTime = sc.startTime;
    renderSlide(sceneIdx);
    updatePartPills();

    if (!isPlaying) {
      try {
        const p = audio.play();
        if (p && p.catch) p.catch(() => {});
      } catch(e) {}
    }
  }

  // Seek relative (e.g. +/- 5s)
  function seekRelative(deltaSec) {
    const audio = getOrCreateAudio();
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min(audio.duration || 9999, audio.currentTime + deltaSec));
  }

  // Click on timeline progress bar
  function scrubToEvent(e) {
    const barContainer = document.getElementById('il-progress-container');
    const audio = getOrCreateAudio();
    if (!barContainer || !audio) return;

    const rect = barContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const dur = audio.duration || LECTURE_DATA[currentSection].totalDuration || 300;
    audio.currentTime = ratio * dur;
  }

  // Set Speed
  function setSpeed(rate) {
    const audio = getOrCreateAudio();
    if (!audio) return;
    audio.playbackRate = parseFloat(rate) || 1.0;
  }

  // Open the Interactive Web Lecture Modal
  function openInteractiveLecture(sec) {
    document.head.insertAdjacentHTML('beforeend', '<style>#interactive-modal .lecture-content { font-size: 24px !important; line-height: 1.6 !important; } #interactive-modal .katex { font-size: 1.3em !important; } #interactive-modal svg { width: 98% !important; max-height: 48vh !important; } #interactive-modal header, #interactive-modal footer { height: 42px !important; min-height: 42px !important; padding: 2px 10px !important; } #modal-interactive-lecture #il-stage-body, #modal-interactive-lecture #il-stage-body * { font-size: 24px !important; line-height: 1.6 !important; } #modal-interactive-lecture .katex { font-size: 1.3em !important; } #modal-interactive-lecture svg { width: 98% !important; max-height: 48vh !important; } .il-header-bar, .il-footer-bar { height: 42px !important; min-height: 42px !important; padding: 2px 10px !important; }</style>');
    const modal = document.getElementById('modal-interactive-lecture');
    if (!modal) return;

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const targetSec = (sec === 2 || sec === '2' || sec === 'muc2') ? 'muc2' : 'muc1';
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
    const audio = getOrCreateAudio();
    if (audio) {
      try { audio.pause(); } catch(e) {}
    }
  }

  // Toggle Play / Pause
  function togglePlayPause() {
    const audio = getOrCreateAudio();
    if (!audio) return;
    if (audio.paused) {
      try {
        const p = audio.play();
        if (p && p.catch) p.catch(() => {});
      } catch(e) {}
    } else {
      try { audio.pause(); } catch(e) {}
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

  // Intercept old video modal openers to seamlessly open Interactive Web Lecture!
  window.openVideoModal = openInteractiveLecture;
  window.playVideo = openInteractiveLecture;
  window.playLessonVideo = openInteractiveLecture;
  window.toggleModalVideo = function(id) {
    const num = (id && id.includes('2')) ? 2 : 1;
    openInteractiveLecture(num);
  };
  window.toggleLessonVideo = function(id) {
    const num = (id === 'video2' || id === 2 || id === 'muc2') ? 2 : 1;
    openInteractiveLecture(num);
  };

  // Auto-init on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function() {
    // Pre-create audio element
    getOrCreateAudio();
  });

})(window, document);
