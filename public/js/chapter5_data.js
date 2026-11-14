/* =========================================================================
   CHƯƠNG V: PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN - TOÁN 12 KNTT
   Bài 14: Phương trình mặt phẳng (Mục 1, 2, 3, 4) - Rich Interactive Slides & Audio
   ========================================================================= */

if (typeof window !== 'undefined') {
  window.CHAPTER5_DATA = window.CHAPTER5_DATA || {};

  window.CHAPTER5_DATA.bai14_muc1 = {
  "lessonId": "bai14",
  "lessonTitle": "Bài 14: Phương trình mặt phẳng",
  "sectionId": "bai14_muc1",
  "sectionTitle": "Mục 1: Vectơ pháp tuyến & Cặp VTCP của mặt phẳng",
  "audio": "/audio/bai14_muc1.mp3",
  "audioSrc": "./audio/bai14_muc1.mp3",
  "audio_src": "./audio/bai14_muc1.mp3",
  "timestamp_src": "timestamps/bai14_muc1.json",
  "totalDuration": 261.02,
  "duration": 261.02,
  "title": "Mục 1: Vectơ pháp tuyến & Cặp VTCP của mặt phẳng",
  "owl_tip": "n = [u, v]: Tích có hướng của 2 VTCP chính là 1 VTPT của mặt phẳng!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 49.82,
      "id": "part2"
    },
    {
      "time": 79.87,
      "id": "part3"
    },
    {
      "time": 89.45,
      "id": "vd1_q"
    },
    {
      "time": 113.86,
      "id": "vd1_a"
    },
    {
      "time": 129.03,
      "id": "vd2_q"
    },
    {
      "time": 148.42,
      "id": "vd2_a"
    },
    {
      "time": 171.77,
      "id": "vd3_q"
    },
    {
      "time": 190.87,
      "id": "vd3_a"
    },
    {
      "time": 219.0,
      "id": "part4"
    },
    {
      "time": 239.35,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Vectơ pháp tuyến & Tính chất cùng phương",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Cặp VTCP & Tích có hướng",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 3 Ví dụ rèn luyện điển hình (Đồng hồ 15s - 30s)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Mascot Cú Thông Thái soi bẫy sai lầm",
      "scenes": [
        10
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo Thầy Cú & Casio fx-580VNX",
      "scenes": [
        11
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 14: PHƯƠNG TRÌNH MẶT PHẲNG",
      "subtitle": "MỤC 1 • VECTƠ PHÁP TUYẾN CỦA MẶT PHẲNG",
      "startTime": 0.0,
      "endTime": 49.82,
      "duration": 49.82,
      "mascotMode": "pointer",
      "mascotTip": "VTPT vuông góc với mặt phẳng. Nếu n là VTPT thì k*n (k ≠ 0) cũng là VTPT!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Vectơ pháp tuyến của mặt phẳng</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Vectơ $\\vec{n} \\ne \\vec{0}$ được gọi là <b>vectơ pháp tuyến (VTPT)</b> của mặt phẳng $(\\alpha)$ nếu giá của $\\vec{n}$ vuông góc với $(\\alpha)$.</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:12px; margin:12px 0;\">\n                    <b>Tính chất:</b> Nếu $\\vec{n}$ là một VTPT của $(\\alpha)$ thì với mọi $k \\ne 0$, vectơ $k\\vec{n}$ cũng là một VTPT của $(\\alpha)$.\n                  </div>\n                  <p>👉 Mỗi mặt phẳng có vô số vectơ pháp tuyến cùng phương với nhau.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 2,
      "title": "CẶP VTCP & TÍCH CÓ HƯỚNG",
      "subtitle": "MỤC 1 • CÔNG THỨC TÍCH CÓ HƯỚNG TÌM VTPT",
      "startTime": 49.82,
      "endTime": 79.87,
      "duration": 30.05,
      "mascotMode": "talking",
      "mascotTip": "n = [u, v]: Tích có hướng của 2 VTCP chính là 1 VTPT của mặt phẳng!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#fde047; font-size:22px; margin-bottom:12px;\">2. Cặp vectơ chỉ phương & Tích có hướng</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Hai vectơ $\\vec{u}, \\vec{v} \\ne \\vec{0}$ không cùng phương, có giá song song hoặc nằm trong $(\\alpha)$ gọi là <b>cặp vectơ chỉ phương (VTCP)</b> của $(\\alpha)$.</p>\n                  <div style=\"background:rgba(254,240,138,0.15); border:1.5px solid #fde047; border-radius:10px; padding:12px; margin:10px 0; text-align:center;\">\n                    <span style=\"font-size:20px; color:#fef08a; font-weight:700;\">$$\\vec{n} = [\\vec{u}, \\vec{v}]$$</span>\n                  </div>\n                  <p><b>Toạ độ tích có hướng:</b> Với $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$:</p>\n                  <p style=\"text-align:center; color:#38bdf8;\">$[\\vec{u}, \\vec{v}] = (y_1 z_2 - z_1 y_2; \\; z_1 x_2 - x_1 z_2; \\; x_1 y_2 - y_1 x_2)$</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "subtitle": "MỤC 1 • 3 BÀI TOÁN XÁC ĐỊNH VTPT & VTCP",
      "startTime": 79.87,
      "endTime": 89.45,
      "duration": 9.58,
      "mascotMode": "cheering",
      "mascotTip": "Cùng thầy rèn luyện 3 ví dụ nền tảng với đồng hồ đếm ngược 15s và 30s!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">3. Ba ví dụ rèn luyện điển hình Mục 1</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <ul style=\"margin-left:20px;\">\n                    <li><b>Ví dụ 1 (15s):</b> Nhận biết VTPT cùng phương $k\\vec{n}$ (Nhận biết).</li>\n                    <li><b>Ví dụ 2 (15s):</b> Tính toạ độ tích có hướng $[\\vec{u}, \\vec{v}]$ (Thông hiểu).</li>\n                    <li><b>Ví dụ 3 (30s):</b> Tìm VTPT của mặt phẳng đi qua 3 điểm $A, B, C$ (Vận dụng).</li>\n                  </ul>\n                  <p style=\"color:#38bdf8; margin-top:12px;\">👉 Đồng hồ đếm ngược thiết kế nhỏ gọn, không che chắn đề bài!</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: NHẬN BIẾT VTPT CÙNG PHƯƠNG",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 89.45,
      "endTime": 113.86,
      "duration": 24.41,
      "mascotMode": "thinking",
      "mascotTip": "u = -2 * (2; -3; 4) = (-4; 6; -8) => Chọn u1!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Nhận dạng vectơ pháp tuyến</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Trong không gian $Oxyz$, cho mặt phẳng $(\\alpha)$ nhận $\\vec{n} = (2; -3; 4)$ làm vectơ pháp tuyến. Vectơ nào sau đây cũng là một vectơ pháp tuyến của $(\\alpha)$?\n                </p>\n                <div style=\"font-size:17px; line-height:1.7; margin:10px 0 0 20px;\">\n                  <b>A.</b> $\\vec{u}_1 = (-4; 6; -8)$<br>\n                  <b>B.</b> $\\vec{u}_2 = (2; 3; 4)$\n                </div>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 113.86,
      "endTime": 129.03,
      "duration": 15.17,
      "mascotMode": "magnifier",
      "mascotTip": "u1 = -2*n nên u1 cùng phương với n. Đáp án A chuẩn xác!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1</h3>\n                <div style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                  <p>• Nhận xét: $\\vec{u}_1 = (-4; 6; -8) = -2(2; -3; 4) = -2\\vec{n}$.</p>\n                  <p>• Vì $\\vec{u}_1$ cùng phương với $\\vec{n}$ nên $\\vec{u}_1$ cũng là một VTPT của $(\\alpha)$.</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:10px 0; text-align:center;\">\n                    <b>Kết luận:</b> Đáp án đúng là <b>A</b> ($\u000bec{u}_1 = (-4; 6; -8)$).\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: TÍNH TÍCH CÓ HƯỚNG",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 129.03,
      "endTime": 148.42,
      "duration": 19.39,
      "mascotMode": "thinking",
      "mascotTip": "u = (1; 2; -1), v = (2; 0; 3) => [u, v] = (2*3 - 0; -1*2 - 3; 0 - 4) = (6; -5; -4)!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Tính toạ độ tích có hướng</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (1; 2; -1)$ và $\\vec{v} = (2; 0; 3)$. Hãy tính toạ độ vectơ tích có hướng $\\vec{n} = [\\vec{u}, \\vec{v}]$.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 148.42,
      "endTime": 171.77,
      "duration": 23.35,
      "mascotMode": "magnifier",
      "mascotTip": "n = (6; -5; -4). Cẩn thận dấu trừ ở tung độ!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <p>• Áp dụng công thức toạ độ tích có hướng $[\\vec{u}, \\vec{v}]$:</p>\n                  <p>• Hoành độ: $2 \\cdot 3 - (-1) \\cdot 0 = 6 - 0 = 6$.</p>\n                  <p>• Tung độ: $(-1) \\cdot 2 - 1 \\cdot 3 = -2 - 3 = -5$.</p>\n                  <p>• Cao độ: $1 \\cdot 0 - 2 \\cdot 2 = 0 - 4 = -4$.</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:10px 0; text-align:center;\">\n                    <b>Kết quả:</b> $\\vec{n} = [\\vec{u}, \\vec{v}] = (6; -5; -4)$.\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: VTPT MẶT PHẲNG QUA 3 ĐIỂM",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 171.77,
      "endTime": 190.87,
      "duration": 19.1,
      "mascotMode": "thinking",
      "mascotTip": "AB = (1; 1; -1), AC = (-1; 2; 1) => [AB, AC] = (3; 0; 3) => n = (1; 0; 1)!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: VTPT của mặt phẳng qua 3 điểm</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Trong không gian $Oxyz$, cho ba điểm không thẳng hàng $A(1; 0; 2)$, $B(2; 1; 1)$ và $C(0; 2; 3)$. Hãy tìm toạ độ một vectơ pháp tuyến $\\vec{n}$ của mặt phẳng $(ABC)$ sao cho toạ độ thứ nhất bằng $1$.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI TỪNG BƯỚC",
      "startTime": 190.87,
      "endTime": 219.0,
      "duration": 28.13,
      "mascotMode": "magnifier",
      "mascotTip": "[AB, AC] = (3; 0; 3) chia 3 => n = (1; 0; 1). Tuyệt vời!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Tìm toạ độ hai VTCP: $\\vec{AB} = (1; 1; -1)$ và $\\vec{AC} = (-1; 2; 1)$.</p>\n                  <p>• Tích có hướng: $[\\vec{AB}, \\vec{AC}] = (1 \\cdot 1 - (-1) \\cdot 2; \\; (-1)(-1) - 1 \\cdot 1; \\; 1 \\cdot 2 - 1(-1)) = (3; 0; 3)$.</p>\n                  <p>• Để toạ độ thứ nhất bằng $1$, ta nhân tỉ lệ với $\\frac{1}{3}$:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    $$\\vec{n} = \\frac{1}{3} [\\vec{AB}, \\vec{AC}] = (1; 0; 1)$$\n                  </div>\n                  <p><b>Kết luận:</b> $\\vec{n} = (1; 0; 1)$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI SOI BẪY SAI LẦM",
      "subtitle": "PHẦN 4: BẪY DẤU Ở TUNG ĐỘ TÍCH CÓ HƯỚNG",
      "startTime": 219.0,
      "endTime": 239.35,
      "duration": 20.35,
      "mascotMode": "magnifier",
      "mascotTip": "Tung độ tích có hướng: z1*x2 - x1*z2. Rất nhiều bạn quên đảo dấu!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:12px;\">⚠️ Cú Thông Thái cảnh báo bẫy dấu tích có hướng</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <div class=\"trap-warning-box\" style=\"background:rgba(239,68,68,0.15); border-left:4px solid #ef4444; padding:14px 18px; border-radius:0 8px 8px 0;\">\n                    <b style=\"color:#fca5a5; font-size:18px;\">Sai lầm chết người: Nhầm dấu ở tung độ!</b><br>\n                    Tung độ của $[\\vec{u}, \\vec{v}]$ là $z_1 x_2 - x_1 z_2$, tức là có dấu trừ phía trước định thức cấp hai $\\begin{vmatrix} x_1 & z_1 \\\\ x_2 & z_2 \\end{vmatrix}$.<br>\n                    <span style=\"color:#fde047;\">Nếu tính xuôi $x_1 z_2 - z_1 x_2$, tung độ sẽ bị ngược dấu và kéo theo phương trình sai hoàn toàn!</span>\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ & CASIO FX-580VNX",
      "subtitle": "PHẦN 5: TÍNH TÍCH CÓ HƯỚNG TRONG 5 GIÂY BẰNG CASIO",
      "startTime": 239.35,
      "endTime": 261.02,
      "duration": 21.67,
      "mascotMode": "lightbulb",
      "mascotTip": "Menu 5 -> Nhập VctA, VctB -> VctA x VctB (phím nhân) = Ra ngay kết quả!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">💡 Tuyệt kỹ Casio fx-580VNX tính tích có hướng</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:14px; margin:10px 0;\">\n                    • <b>Bước 1:</b> Bấm <b>MENU 5</b> (Vector) $\\to$ Chọn <b>1 (VctA)</b> $\\to$ Kích thước 3 $\\to$ Nhập toạ độ $\\vec{u}$.<br>\n                    • <b>Bước 2:</b> Bấm <b>OPTN 1 (Tạo vectơ)</b> $\\to$ Chọn <b>2 (VctB)</b> $\\to$ Kích thước 3 $\\to$ Nhập toạ độ $\\vec{v}$.<br>\n                    • <b>Bước 3:</b> Bấm <b>AC</b> $\\to$ <b>OPTN 3 (VctA) $\\times$ OPTN 4 (VctB)</b> $\\to$ Bấm <b>[=]</b>.\n                  </div>\n                  <p style=\"color:#34d399; font-weight:700;\">Máy tính trả ngay kết quả $[\\vec{u}, \\vec{v}]$ trong 5 giây, chính xác tuyệt đối 100%!</p>\n                </div>\n            \n    </div>\n    "
    }
  ]
};

  window.CHAPTER5_DATA.bai14_muc2 = {
  "lessonId": "bai14",
  "lessonTitle": "Bài 14: Phương trình mặt phẳng",
  "sectionId": "bai14_muc2",
  "sectionTitle": "Mục 2: Phương trình tổng quát của mặt phẳng",
  "audio": "/audio/bai14_muc2.mp3",
  "audioSrc": "./audio/bai14_muc2.mp3",
  "audio_src": "./audio/bai14_muc2.mp3",
  "timestamp_src": "timestamps/bai14_muc2.json",
  "totalDuration": 259.25,
  "duration": 259.25,
  "title": "Mục 2: Phương trình tổng quát của mặt phẳng",
  "owl_tip": "A(x-x0) + B(y-y0) + C(z-z0) = 0. Đoạn chắn: x/a + y/b + z/c = 1!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 43.08,
      "id": "part2"
    },
    {
      "time": 81.91,
      "id": "part3"
    },
    {
      "time": 90.21,
      "id": "vd1_q"
    },
    {
      "time": 106.63,
      "id": "vd1_a"
    },
    {
      "time": 124.15,
      "id": "vd2_q"
    },
    {
      "time": 140.69,
      "id": "vd2_a"
    },
    {
      "time": 156.91,
      "id": "vd3_q"
    },
    {
      "time": 170.78,
      "id": "vd3_a"
    },
    {
      "time": 213.74,
      "id": "part4"
    },
    {
      "time": 235.15,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Phương trình tổng quát của mặt phẳng",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Phương trình đoạn chắn & Mặt toạ độ",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 3 Ví dụ rèn luyện điển hình (Đồng hồ 15s - 30s)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Mascot Cú Thông Thái soi bẫy sai lầm",
      "scenes": [
        10
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo Thầy Cú tìm hệ số D trong 3 giây",
      "scenes": [
        11
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 14: PHƯƠNG TRÌNH MẶT PHẲNG",
      "subtitle": "MỤC 2 • PHƯƠNG TRÌNH TỔNG QUÁT CỦA MẶT PHẲNG",
      "startTime": 0.0,
      "endTime": 43.08,
      "duration": 43.08,
      "mascotMode": "pointer",
      "mascotTip": "A(x - x0) + B(y - y0) + C(z - z0) = 0 <=> Ax + By + Cz + D = 0!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Phương trình tổng quát của mặt phẳng</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Mặt phẳng $(\\alpha)$ đi qua điểm $M_0(x_0; y_0; z_0)$ và nhận $\\vec{n} = (A; B; C) \\ne \\vec{0}$ làm VTPT có phương trình:</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:12px; text-align:center; margin:10px 0;\">\n                    <span style=\"font-size:20px; color:#fef08a; font-weight:700;\">$$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$$</span>\n                  </div>\n                  <p>Khai triển và thu gọn ta được dạng <b>phương trình tổng quát</b>:</p>\n                  <p style=\"text-align:center; font-size:20px; color:#34d399; font-weight:700;\">$$Ax + By + Cz + D = 0 \\quad (A^2 + B^2 + C^2 > 0)$$</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 2,
      "title": "PHƯƠNG TRÌNH THEO ĐOẠN CHẮN",
      "subtitle": "MỤC 2 • CẮT 3 TRỤC TOẠ ĐỘ & CÁC MẶT TOẠ ĐỘ",
      "startTime": 43.08,
      "endTime": 81.91,
      "duration": 38.83,
      "mascotMode": "talking",
      "mascotTip": "x/a + y/b + z/c = 1. Nhớ vế phải là 1 (không phải 0)! Mặt phẳng (Oxy): z = 0!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#fde047; font-size:22px; margin-bottom:12px;\">2. Phương trình mặt phẳng theo đoạn chắn</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Mặt phẳng cắt $Ox, Oy, Oz$ lần lượt tại $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$ với $a, b, c \\ne 0$:</p>\n                  <div style=\"background:rgba(254,240,138,0.15); border:1.5px solid #fde047; border-radius:10px; padding:12px; text-align:center; margin:10px 0;\">\n                    <span style=\"font-size:22px; color:#fef08a; font-weight:700;\">$$\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$$</span>\n                  </div>\n                  <div style=\"display:flex; justify-content:space-around; margin-top:8px; font-size:15px; color:#cbd5e1;\">\n                    <span>📌 Mặt phẳng $(Oxy): z = 0$</span>\n                    <span>📌 Mặt phẳng $(Oyz): x = 0$</span>\n                    <span>📌 Mặt phẳng $(Ozx): y = 0$</span>\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "subtitle": "MỤC 2 • 3 BÀI TOÁN LẬP PHƯƠNG TRÌNH MẶT PHẲNG",
      "startTime": 81.91,
      "endTime": 90.21,
      "duration": 8.3,
      "mascotMode": "cheering",
      "mascotTip": "Cùng rèn luyện 3 bài toán viết phương trình mặt phẳng với đồng hồ 15s và 30s!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">3. Ba ví dụ rèn luyện điển hình Mục 2</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <ul style=\"margin-left:20px;\">\n                    <li><b>Ví dụ 1 (15s):</b> Lập phương trình qua 1 điểm và biết VTPT (Nhận biết).</li>\n                    <li><b>Ví dụ 2 (15s):</b> Phương trình mặt phẳng theo đoạn chắn (Thông hiểu).</li>\n                    <li><b>Ví dụ 3 (30s):</b> Lập phương trình mặt phẳng trung trực của đoạn thẳng $AB$ (Vận dụng).</li>\n                  </ul>\n                  <p style=\"color:#38bdf8; margin-top:12px;\">👉 Đồng hồ đếm ngược thiết kế nhỏ gọn, không che chắn đề bài!</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LẬP PHƯƠNG TRÌNH CƠ BẢN",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 90.21,
      "endTime": 106.63,
      "duration": 16.42,
      "mascotMode": "thinking",
      "mascotTip": "2(x - 1) + 1(y + 2) - 4(z - 3) = 0 => 2x + y - 4z + 12 = 0!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Viết phương trình mặt phẳng cơ bản</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Trong không gian $Oxyz$, hãy lập phương trình tổng quát của mặt phẳng $(\\alpha)$ đi qua điểm $M(1; -2; 3)$ và nhận $\\vec{n} = (2; 1; -4)$ làm vectơ pháp tuyến.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 106.63,
      "endTime": 124.15,
      "duration": 17.52,
      "mascotMode": "magnifier",
      "mascotTip": "2x + y - 4z + 12 = 0. Quá nhanh gọn!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1</h3>\n                <div style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                  <p>• Mặt phẳng $(\\alpha)$ qua $M(1; -2; 3)$ nhận $\\vec{n} = (2; 1; -4)$ làm VTPT:</p>\n                  <p>$$2(x - 1) + 1(y - (-2)) - 4(z - 3) = 0$$</p>\n                  <p>$$\\iff 2x - 2 + y + 2 - 4z + 12 = 0$$</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    <b>Kết luận:</b> $2x + y - 4z + 12 = 0$.\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: PHƯƠNG TRÌNH ĐOẠN CHẮN",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 124.15,
      "endTime": 140.69,
      "duration": 16.54,
      "mascotMode": "thinking",
      "mascotTip": "x/3 + y/(-2) + z/4 = 1. Mẫu chung 12: 4x - 6y + 3z - 12 = 0!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Phương trình mặt phẳng theo đoạn chắn</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Trong không gian $Oxyz$, mặt phẳng $(P)$ cắt ba trục toạ độ tại ba điểm $A(3; 0; 0)$, $B(0; -2; 0)$ và $C(0; 0; 4)$. Viết phương trình tổng quát của mặt phẳng $(P)$.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 140.69,
      "endTime": 156.91,
      "duration": 16.22,
      "mascotMode": "magnifier",
      "mascotTip": "4x - 6y + 3z - 12 = 0. Nhớ quy đồng mẫu số chung 12!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <p>• Áp dụng phương trình mặt phẳng theo đoạn chắn:</p>\n                  <p>$$\\frac{x}{3} + \\frac{y}{-2} + \\frac{z}{4} = 1 \\iff \\frac{x}{3} - \\frac{y}{2} + \\frac{z}{4} = 1$$</p>\n                  <p>• Quy đồng mẫu số chung là $12$:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    <b>Kết luận:</b> $4x - 6y + 3z - 12 = 0$.\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: MẶT PHẲNG TRUNG TRỰC",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 156.91,
      "endTime": 170.78,
      "duration": 13.87,
      "mascotMode": "thinking",
      "mascotTip": "Trung điểm I(3; 2; 1), VTPT AB = (2; 2; 4) cùng phương (1; 1; 2) => x + y + 2z - 7 = 0!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Mặt phẳng trung trực của đoạn thẳng</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Trong không gian $Oxyz$, cho hai điểm $A(2; 1; -1)$ và $B(4; 3; 3)$. Hãy viết phương trình mặt phẳng trung trực của đoạn thẳng $AB$.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI TỪNG BƯỚC",
      "startTime": 170.78,
      "endTime": 213.74,
      "duration": 42.96,
      "mascotMode": "magnifier",
      "mascotTip": "I(3; 2; 1), n = (1; 1; 2) => x + y + 2z - 7 = 0. Rất chuẩn xác!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Trung điểm $I$ của $AB$: $I\\left(\\frac{2+4}{2}; \\frac{1+3}{2}; \\frac{-1+3}{2}\\right) = I(3; 2; 1)$.</p>\n                  <p>• VTPT $\\vec{AB} = (2; 2; 4) = 2(1; 1; 2) \\implies$ chọn $\\vec{n} = (1; 1; 2)$.</p>\n                  <p>• Phương trình mặt phẳng qua $I(3; 2; 1)$ nhận $\\vec{n} = (1; 1; 2)$ làm VTPT:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    $$1(x - 3) + 1(y - 2) + 2(z - 1) = 0 \\iff x + y + 2z - 7 = 0$$\n                  </div>\n                  <p><b>Kết luận:</b> $x + y + 2z - 7 = 0$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI SOI BẪY SAI LẦM",
      "subtitle": "PHẦN 4: 2 BẪY LẬP PHƯƠNG TRÌNH MẶT PHẲNG",
      "startTime": 213.74,
      "endTime": 235.15,
      "duration": 21.41,
      "mascotMode": "magnifier",
      "mascotTip": "Khuyết biến nào thì toạ độ VTPT ở vị trí đó bằng 0! Đoạn chắn vế phải là 1!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:12px;\">⚠️ Cú Thông Thái cảnh báo 2 bẫy nguy hiểm</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <div class=\"trap-warning-box\" style=\"margin-bottom:12px; background:rgba(239,68,68,0.15); border-left:4px solid #ef4444; padding:12px 16px; border-radius:0 8px 8px 0;\">\n                    <b style=\"color:#fca5a5;\">Bẫy 1: Khuyết biến trong phương trình</b><br>\n                    Ví dụ mặt phẳng $2x - 3z + 5 = 0$ khuyết biến $y$. Vectơ pháp tuyến là $\\vec{n} = (2; 0; -3)$, tung độ bằng $0$. Rất nhiều bạn nhầm thành $(2; -3; 0)$!\n                  </div>\n                  <div class=\"trap-warning-box\" style=\"background:rgba(245,158,11,0.15); border-left:4px solid #f59e0b; padding:12px 16px; border-radius:0 8px 8px 0;\">\n                    <b style=\"color:#fde047;\">Bẫy 2: Nhầm vế phải phương trình đoạn chắn</b><br>\n                    Vế phải của $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$ luôn là số $1$. Đừng nhầm thành bằng $0$!\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ GHI NHỚ NHANH",
      "subtitle": "PHẦN 5: MẸO TÌM HỆ SỐ D TRONG 3 GIÂY",
      "startTime": 235.15,
      "endTime": 259.25,
      "duration": 24.1,
      "mascotMode": "lightbulb",
      "mascotTip": "Có n = (A; B; C) => Viết ngay Ax + By + Cz. Thay điểm đi qua rồi ĐỔI DẤU là ra D!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">💡 Mẹo Thầy Cú: Tìm hệ số D trong 3 giây</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Khi viết phương trình mặt phẳng qua $M(x_0; y_0; z_0)$ có $\\vec{n} = (A; B; C)$:</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:14px; margin:10px 0;\">\n                    • <b>Bước 1:</b> Viết ngay cụm đầu: $Ax + By + Cz$.<br>\n                    • <b>Bước 2:</b> Tính nhẩm giá trị thay toạ độ $M$ vào: $val = A \\cdot x_0 + B \\cdot y_0 + C \\cdot z_0$.<br>\n                    • <b>Bước 3:</b> Hệ số $D = -val$ (chỉ cần đổi dấu!).\n                  </div>\n                  <p><b>Ví dụ:</b> Qua $M(1; -2; 3)$ có $\\vec{n} = (2; 1; -4) \\implies val = 2(1) + 1(-2) - 4(3) = -12 \\implies D = +12$. Ra ngay $2x + y - 4z + 12 = 0$!</p>\n                </div>\n            \n    </div>\n    "
    }
  ]
};

  window.CHAPTER5_DATA.bai14_muc3 = {
  "lessonId": "bai14",
  "lessonTitle": "Bài 14: Phương trình mặt phẳng",
  "sectionId": "bai14_muc3",
  "sectionTitle": "Mục 3: Điều kiện song song & Vuông góc hai mặt phẳng",
  "audio": "/audio/bai14_muc3.mp3",
  "audioSrc": "./audio/bai14_muc3.mp3",
  "audio_src": "./audio/bai14_muc3.mp3",
  "timestamp_src": "timestamps/bai14_muc3.json",
  "totalDuration": 239.98,
  "duration": 239.98,
  "title": "Mục 3: Điều kiện song song & Vuông góc hai mặt phẳng",
  "owl_tip": "Vuông góc: n1.n2 = 0. Song song: n1 = k*n2 và D1 ≠ k*D2!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 23.18,
      "id": "part2"
    },
    {
      "time": 62.71,
      "id": "part3"
    },
    {
      "time": 72.45,
      "id": "vd1_q"
    },
    {
      "time": 91.19,
      "id": "vd1_a"
    },
    {
      "time": 109.14,
      "id": "vd2_q"
    },
    {
      "time": 132.8,
      "id": "vd2_a"
    },
    {
      "time": 151.66,
      "id": "vd3_q"
    },
    {
      "time": 168.22,
      "id": "vd3_a"
    },
    {
      "time": 198.39,
      "id": "part4"
    },
    {
      "time": 220.01,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Vị trí tương đối hai mặt phẳng",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Điều kiện song song & Vuông góc",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 3 Ví dụ rèn luyện điển hình (Đồng hồ 15s - 30s)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Mascot Cú Thông Thái soi bẫy sai lầm",
      "scenes": [
        10
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo Thầy Cú viết mặt phẳng song song",
      "scenes": [
        11
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 14: PHƯƠNG TRÌNH MẶT PHẲNG",
      "subtitle": "MỤC 3 • VỊ TRÍ TƯƠNG ĐỐI GIỮA HAI MẶT PHẲNG",
      "startTime": 0.0,
      "endTime": 23.18,
      "duration": 23.18,
      "mascotMode": "pointer",
      "mascotTip": "Vị trí tương đối giữa (α) và (β) được quyết định bởi 2 VTPT n1 và n2!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Vị trí tương đối giữa hai mặt phẳng</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Cho hai mặt phẳng $(\\alpha): A_1 x + B_1 y + C_1 z + D_1 = 0$ có $\\vec{n}_1 = (A_1; B_1; C_1)$</p>\n                  <p>và $(\\beta): A_2 x + B_2 y + C_2 z + D_2 = 0$ có $\\vec{n}_2 = (A_2; B_2; C_2)$.</p>\n                  <div style=\"background:rgba(56,189,248,0.12); border-left:4px solid #38bdf8; padding:12px 16px; margin:10px 0; border-radius:0 8px 8px 0;\">\n                    Góc và quan hệ song song/vuông góc giữa hai mặt phẳng hoàn toàn tương đương với quan hệ giữa hai vectơ pháp tuyến $\\vec{n}_1$ và $\\vec{n}_2$.\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 2,
      "title": "ĐIỀU KIỆN SONG SONG & VUÔNG GÓC",
      "subtitle": "MỤC 3 • CÔNG THỨC TOẠ ĐỘ & QUAN HỆ HỆ SỐ",
      "startTime": 23.18,
      "endTime": 62.71,
      "duration": 39.53,
      "mascotMode": "talking",
      "mascotTip": "Vuông góc: n1.n2 = 0. Song song: n1 = k*n2 và D1 ≠ k*D2!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#fde047; font-size:22px; margin-bottom:12px;\">2. Điều kiện song song & Vuông góc</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <div style=\"background:rgba(52,211,153,0.12); border-left:4px solid #10b981; padding:10px 14px; margin:8px 0; border-radius:0 8px 8px 0;\">\n                    <b>1. Vuông góc:</b> $(\\alpha) \\perp (\\beta) \\iff \\vec{n}_1 \\cdot \\vec{n}_2 = 0 \\iff A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$.\n                  </div>\n                  <div style=\"background:rgba(254,240,138,0.12); border-left:4px solid #fde047; padding:10px 14px; margin:8px 0; border-radius:0 8px 8px 0;\">\n                    <b>2. Song song:</b> $(\\alpha) \\parallel (\\beta) \\iff \\vec{n}_1 = k\\vec{n}_2$ và $D_1 \\ne k D_2$ (hoặc $\\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2} \\ne \\frac{D_1}{D_2}$).\n                  </div>\n                  <div style=\"background:rgba(56,189,248,0.12); border-left:4px solid #38bdf8; padding:10px 14px; margin:8px 0; border-radius:0 8px 8px 0;\">\n                    <b>3. Trùng nhau:</b> $(\\alpha) \\equiv (\\beta) \\iff \\vec{n}_1 = k\\vec{n}_2$ và $D_1 = k D_2$.\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "subtitle": "MỤC 3 • 3 BÀI TOÁN QUAN HỆ HAI MẶT PHẲNG",
      "startTime": 62.71,
      "endTime": 72.45,
      "duration": 9.74,
      "mascotMode": "cheering",
      "mascotTip": "Cùng rèn luyện 3 bài toán xác định song song, vuông góc với đồng hồ 15s và 30s!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">3. Ba ví dụ rèn luyện điển hình Mục 3</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <ul style=\"margin-left:20px;\">\n                    <li><b>Ví dụ 1 (15s):</b> Xét vị trí tương đối hai mặt phẳng cho trước (Nhận biết).</li>\n                    <li><b>Ví dụ 2 (15s):</b> Tìm tham số $m$ để hai mặt phẳng vuông góc (Thông hiểu).</li>\n                    <li><b>Ví dụ 3 (30s):</b> Viết phương trình mặt phẳng qua $M$ song song với mặt phẳng cho trước (Vận dụng).</li>\n                  </ul>\n                  <p style=\"color:#38bdf8; margin-top:12px;\">👉 Đồng hồ đếm ngược thiết kế nhỏ gọn, không che chắn đề bài!</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: XÉT VỊ TRÍ TƯƠNG ĐỐI",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 72.45,
      "endTime": 91.19,
      "duration": 18.74,
      "mascotMode": "thinking",
      "mascotTip": "2/4 = -3/-6 = 1/2 ≠ -5/7 => Hai mặt phẳng song song!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Nhận biết vị trí tương đối</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Trong không gian $Oxyz$, cho hai mặt phẳng:<br>\n                  $(P): 2x - 3y + z - 5 = 0$ và $(Q): 4x - 6y + 2z + 7 = 0$.\n                </p>\n                <p style=\"font-size:17px; line-height:1.65; color:#fde047;\">\n                  Hỏi hai mặt phẳng $(P)$ và $(Q)$ song song, vuông góc hay cắt nhau?\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 91.19,
      "endTime": 109.14,
      "duration": 17.95,
      "mascotMode": "magnifier",
      "mascotTip": "Tỉ lệ hệ số A, B, C bằng 1/2 khác D1/D2 => (P) // (Q)!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1</h3>\n                <div style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                  <p>• Vectơ pháp tuyến: $\\vec{n}_P = (2; -3; 1)$ và $\\vec{n}_Q = (4; -6; 2)$.</p>\n                  <p>• Xét tỉ lệ các hệ số:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    $$\\frac{2}{4} = \\frac{-3}{-6} = \\frac{1}{2} = \\frac{1}{2} \\ne \\frac{-5}{7}$$\n                  </div>\n                  <p><b>Kết luận:</b> Hai mặt phẳng $(P)$ và $(Q)$ song song với nhau ($(P) \\parallel (Q)$).</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: TÌM m ĐỂ HAI MP VUÔNG GÓC",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 109.14,
      "endTime": 132.8,
      "duration": 23.66,
      "mascotMode": "thinking",
      "mascotTip": "3*2 + (-1)*m + 2*(-4) = 0 => 6 - m - 8 = 0 => m = -2!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Điều kiện vuông góc hai mặt phẳng</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Trong không gian $Oxyz$, cho $(\\alpha): 3x - y + 2z - 1 = 0$ và $(\\beta): 2x + my - 4z + 5 = 0$.\n                </p>\n                <p style=\"font-size:17px; line-height:1.65; color:#fde047;\">\n                  Tìm giá trị của tham số $m$ để $(\\alpha)$ và $(\\beta)$ vuông góc với nhau.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 132.8,
      "endTime": 151.66,
      "duration": 18.86,
      "mascotMode": "magnifier",
      "mascotTip": "n1.n2 = 0 <=> 6 - m - 8 = 0 <=> m = -2. Cực kỳ nhanh gọn!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <p>• VTPT: $\\vec{n}_\\alpha = (3; -1; 2)$ và $\\vec{n}_\\beta = (2; m; -4)$.</p>\n                  <p>• $(\\alpha) \\perp (\\beta) \\iff \\vec{n}_\\alpha \\cdot \\vec{n}_\\beta = 0$:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    $$3 \\cdot 2 + (-1) \\cdot m + 2 \\cdot (-4) = 0 \\iff 6 - m - 8 = 0 \\iff m = -2$$\n                  </div>\n                  <p><b>Kết luận:</b> $m = -2$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: VIẾT MẶT PHẲNG SONG SONG",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 151.66,
      "endTime": 168.22,
      "duration": 16.56,
      "mascotMode": "thinking",
      "mascotTip": "(Q) // (P) => (Q): 2x - y + 2z + D = 0. Thay M(1; 2; -3) => D = 6!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Lập phương trình mặt phẳng song song</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Trong không gian $Oxyz$, cho điểm $M(1; 2; -3)$ và mặt phẳng $(P): 2x - y + 2z - 4 = 0$. Hãy viết phương trình mặt phẳng $(Q)$ đi qua $M$ và song song với mặt phẳng $(P)$.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI TỪNG BƯỚC",
      "startTime": 168.22,
      "endTime": 198.39,
      "duration": 30.17,
      "mascotMode": "magnifier",
      "mascotTip": "(Q): 2x - y + 2z + 6 = 0. Nhớ kiểm tra điều kiện D ≠ -4!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Vì $(Q) \\parallel (P)$ nên phương trình $(Q)$ có dạng: $2x - y + 2z + D = 0$ ($D \\ne -4$).</p>\n                  <p>• Do $M(1; 2; -3) \\in (Q)$ nên thay toạ độ $M$ vào:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    $$2(1) - (2) + 2(-3) + D = 0 \\iff -6 + D = 0 \\iff D = 6 \\text{ (nhận)}$$\n                  </div>\n                  <p><b>Kết luận:</b> Mặt phẳng $(Q)$ là $2x - y + 2z + 6 = 0$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI SOI BẪY SAI LẦM",
      "subtitle": "PHẦN 4: BẪY TRÙNG NHAU KHI TÌM ĐIỀU KIỆN SONG SONG",
      "startTime": 198.39,
      "endTime": 220.01,
      "duration": 21.62,
      "mascotMode": "magnifier",
      "mascotTip": "Song song thì D1 ≠ k*D2! Quên kiểm tra sẽ lấy nhầm nghiệm m làm hai mp trùng nhau!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:12px;\">⚠️ Cú Thông Thái cảnh báo bẫy song song</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <div class=\"trap-warning-box\" style=\"background:rgba(239,68,68,0.15); border-left:4px solid #ef4444; padding:14px 18px; border-radius:0 8px 8px 0;\">\n                    <b style=\"color:#fca5a5; font-size:18px;\">Sai lầm chết người: Quên điều kiện $D_1 \\ne k D_2$!</b><br>\n                    Khi tìm tham số $m$ để $(\\alpha) \\parallel (\\beta)$, rất nhiều bạn chỉ thiết lập $\\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2}$ mà quên đối chiếu với $\\frac{D_1}{D_2}$.<br>\n                    <span style=\"color:#fde047;\">Nếu tỉ số $D$ cũng bằng tỉ lệ $k$ thì hai mặt phẳng TRÙNG NHAU chứ không song song!</span>\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ GHI NHỚ NHANH",
      "subtitle": "PHẦN 5: MẸO VIẾT MẶT PHẲNG SONG SONG",
      "startTime": 220.01,
      "endTime": 239.98,
      "duration": 19.97,
      "mascotMode": "lightbulb",
      "mascotTip": "Giữ nguyên cụm Ax + By + Cz, chỉ thay điểm M vào đổi dấu tìm D!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">💡 Mẹo Thầy Cú viết mặt phẳng song song siêu nhanh</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Khi cần viết mặt phẳng $(Q)$ qua $M(x_0; y_0; z_0)$ và song song với $(P): Ax + By + Cz + D = 0$:</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:12px 16px; margin:10px 0;\">\n                    1. <b>Giữ nguyên 3 hệ số đầu:</b> $Ax + By + Cz$.<br>\n                    2. <b>Tính hệ số $D'$:</b> $D' = -(Ax_0 + By_0 + Cz_0)$ (thay $M$ vào và đổi dấu).<br>\n                    3. <b>Kiểm tra:</b> Nếu $D' \\ne D$ thì nhận ngay kết quả!\n                  </div>\n                  <p style=\"color:#34d399; font-weight:700;\">Giải quyết xong câu hỏi trắc nghiệm trong vòng chưa đầy 10 giây!</p>\n                </div>\n            \n    </div>\n    "
    }
  ]
};

  window.CHAPTER5_DATA.bai14_muc4 = {
  "lessonId": "bai14",
  "lessonTitle": "Bài 14: Phương trình mặt phẳng",
  "sectionId": "bai14_muc4",
  "sectionTitle": "Mục 4: Khoảng cách từ một điểm đến mặt phẳng",
  "audio": "/audio/bai14_muc4.mp3",
  "audioSrc": "./audio/bai14_muc4.mp3",
  "audio_src": "./audio/bai14_muc4.mp3",
  "timestamp_src": "timestamps/bai14_muc4.json",
  "totalDuration": 278.28,
  "duration": 278.28,
  "title": "Mục 4: Khoảng cách từ một điểm đến mặt phẳng",
  "owl_tip": "d(M0, α) = |Ax0 + By0 + Cz0 + D| / √(A² + B² + C²). Dưới mẫu là độ dài VTPT!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 44.88,
      "id": "part2"
    },
    {
      "time": 73.97,
      "id": "part3"
    },
    {
      "time": 84.22,
      "id": "vd1_q"
    },
    {
      "time": 98.38,
      "id": "vd1_a"
    },
    {
      "time": 121.76,
      "id": "vd2_q"
    },
    {
      "time": 137.62,
      "id": "vd2_a"
    },
    {
      "time": 157.95,
      "id": "vd3_q"
    },
    {
      "time": 173.67,
      "id": "vd3_a"
    },
    {
      "time": 223.76,
      "id": "part4"
    },
    {
      "time": 246.22,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Công thức khoảng cách từ điểm đến mặt phẳng",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Khoảng cách giữa hai mặt phẳng song song",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 3 Ví dụ rèn luyện điển hình (Đồng hồ 15s - 30s)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Mascot Cú Thông Thái soi bẫy sai lầm",
      "scenes": [
        10
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo Thầy Cú & Tuyệt kỹ Casio fx-580VNX",
      "scenes": [
        11
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 14: PHƯƠNG TRÌNH MẶT PHẲNG",
      "subtitle": "MỤC 4 • KHOẢNG CÁCH TỪ ĐIỂM ĐẾN MẶT PHẲNG",
      "startTime": 0.0,
      "endTime": 44.88,
      "duration": 44.88,
      "mascotMode": "pointer",
      "mascotTip": "d(M0, α) = |Ax0 + By0 + Cz0 + D| / √(A² + B² + C²). Dưới mẫu là độ dài VTPT!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Công thức khoảng cách từ điểm đến mặt phẳng</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Khoảng cách từ điểm $M_0(x_0; y_0; z_0)$ đến mặt phẳng $(\\alpha): Ax + By + Cz + D = 0$ được tính bởi:</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:14px; text-align:center; margin:12px 0;\">\n                    <span style=\"font-size:22px; color:#fef08a; font-weight:700;\">$$d(M_0, (\\alpha)) = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$$</span>\n                  </div>\n                  <p>• <b>Tử số:</b> Thay toạ độ điểm $M_0$ vào vế trái phương trình mặt phẳng rồi lấy giá trị tuyệt đối.</p>\n                  <p>• <b>Mẫu số:</b> Độ dài của vectơ pháp tuyến $\\vec{n} = (A; B; C)$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 2,
      "title": "KHOẢNG CÁCH HAI MẶT PHẲNG SONG SONG",
      "subtitle": "MỤC 4 • CÔNG THỨC RÚT GỌN SIÊU NHANH",
      "startTime": 44.88,
      "endTime": 73.97,
      "duration": 29.09,
      "mascotMode": "talking",
      "mascotTip": "Khi cùng A, B, C: d(α, β) = |D1 - D2| / √(A² + B² + C²)!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#fde047; font-size:22px; margin-bottom:12px;\">2. Khoảng cách giữa hai mặt phẳng song song</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Cho hai mặt phẳng song song $(\\alpha): Ax + By + Cz + D_1 = 0$ và $(\\beta): Ax + By + Cz + D_2 = 0$:</p>\n                  <div style=\"background:rgba(254,240,138,0.15); border:1.5px solid #fde047; border-radius:10px; padding:12px; text-align:center; margin:10px 0;\">\n                    <span style=\"font-size:22px; color:#fef08a; font-weight:700;\">$$d((\\alpha), (\\beta)) = \\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}}$$</span>\n                  </div>\n                  <p style=\"color:#94a3b8;\">📌 Lưu ý: Hai phương trình phải được đưa về dạng có cùng bộ hệ số $A, B, C$ trước khi áp dụng công thức!</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "subtitle": "MỤC 4 • 3 BÀI TOÁN KHOẢNG CÁCH TRỌNG TÂM",
      "startTime": 73.97,
      "endTime": 84.22,
      "duration": 10.25,
      "mascotMode": "cheering",
      "mascotTip": "Cùng rèn luyện 3 bài toán tính khoảng cách với đồng hồ đếm ngược 15s và 30s!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">3. Ba ví dụ rèn luyện điển hình Mục 4</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <ul style=\"margin-left:20px;\">\n                    <li><b>Ví dụ 1 (15s):</b> Khoảng cách từ điểm $M$ đến mặt phẳng (Nhận biết).</li>\n                    <li><b>Ví dụ 2 (15s):</b> Khoảng cách giữa hai mặt phẳng song song (Thông hiểu).</li>\n                    <li><b>Ví dụ 3 (30s):</b> Lập phương trình mặt phẳng song song cách một khoảng cho trước (Vận dụng).</li>\n                  </ul>\n                  <p style=\"color:#38bdf8; margin-top:12px;\">👉 Đồng hồ đếm ngược thiết kế nhỏ gọn, không che chắn đề bài!</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: TÍNH KHOẢNG CÁCH ĐIỂM ĐẾN MP",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 84.22,
      "endTime": 98.38,
      "duration": 14.16,
      "mascotMode": "thinking",
      "mascotTip": "d = |2(1) - 2(2) + 1(-1) + 12| / √(2² + (-2)² + 1²) = |9| / 3 = 3!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Khoảng cách từ một điểm đến mặt phẳng</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Trong không gian $Oxyz$, tính khoảng cách từ điểm $M(1; 2; -1)$ đến mặt phẳng $(P): 2x - 2y + z + 12 = 0$.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 98.38,
      "endTime": 121.76,
      "duration": 23.38,
      "mascotMode": "magnifier",
      "mascotTip": "d = 9 / 3 = 3 đơn vị độ dài. Chuẩn xác!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1</h3>\n                <div style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                  <p>• Áp dụng công thức khoảng cách:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:12px; margin:10px 0; text-align:center;\">\n                    $$d(M, (P)) = \\frac{|2(1) - 2(2) + 1(-1) + 12|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|2 - 4 - 1 + 12|}{\\sqrt{9}} = \\frac{9}{3} = 3$$\n                  </div>\n                  <p><b>Kết luận:</b> $d(M, (P)) = 3$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: KHOẢNG CÁCH GIỮA 2 MP SONG SONG",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 121.76,
      "endTime": 137.62,
      "duration": 15.86,
      "mascotMode": "thinking",
      "mascotTip": "d = |-5 - 4| / √(2² + (-1)² + 2²) = |-9| / 3 = 3!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Khoảng cách giữa hai mặt phẳng song song</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Trong không gian $Oxyz$, tính khoảng cách giữa hai mặt phẳng song song:<br>\n                  $(\\alpha): 2x - y + 2z - 5 = 0$ và $(\\beta): 2x - y + 2z + 4 = 0$.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 137.62,
      "endTime": 157.95,
      "duration": 20.33,
      "mascotMode": "magnifier",
      "mascotTip": "d = |-5 - 4| / 3 = 3. Công thức rút gọn cực kỳ tiện lợi!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <p>• Hai mặt phẳng cùng có $\\vec{n} = (2; -1; 2)$. Áp dụng công thức:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:12px; margin:10px 0; text-align:center;\">\n                    $$d((\\alpha), (\\beta)) = \\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}} = \\frac{|-5 - 4|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|-9|}{\\sqrt{9}} = \\frac{9}{3} = 3$$\n                  </div>\n                  <p><b>Kết luận:</b> $d((\\alpha), (\\beta)) = 3$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: MP SONG SONG CÁCH KHOẢNG H",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 157.95,
      "endTime": 173.67,
      "duration": 15.72,
      "mascotMode": "thinking",
      "mascotTip": "(Q): x + 2y - 2z + D = 0. |D + 1|/3 = 2 => |D + 1| = 6 => D = 5 hoặc D = -7!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Lập phương trình mặt phẳng cách một khoảng cho trước</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Trong không gian $Oxyz$, cho mặt phẳng $(P): x + 2y - 2z - 1 = 0$. Viết phương trình các mặt phẳng $(Q)$ song song với $(P)$ và cách $(P)$ một khoảng bằng $2$.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI TỪNG BƯỚC",
      "startTime": 173.67,
      "endTime": 223.76,
      "duration": 50.09,
      "mascotMode": "magnifier",
      "mascotTip": "Có 2 mặt phẳng: x + 2y - 2z + 5 = 0 và x + 2y - 2z - 7 = 0!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Vì $(Q) \\parallel (P)$ nên $(Q)$ có dạng: $x + 2y - 2z + D = 0$ ($D \\ne -1$).</p>\n                  <p>• Khoảng cách giữa $(P)$ và $(Q)$:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    $$d((P), (Q)) = \\frac{|D - (-1)|}{\\sqrt{1^2 + 2^2 + (-2)^2}} = \\frac{|D + 1|}{3} = 2 \\iff |D + 1| = 6$$\n                  </div>\n                  <p>• Suy ra: $D + 1 = 6 \\implies D = 5$ hoặc $D + 1 = -6 \\implies D = -7$ (cả hai đều khác $-1$).</p>\n                  <p><b>Kết luận:</b> $(Q_1): x + 2y - 2z + 5 = 0$ và $(Q_2): x + 2y - 2z - 7 = 0$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI SOI BẪY SAI LẦM",
      "subtitle": "PHẦN 4: BẪY MẪU SỐ TRONG CÔNG THỨC KHOẢNG CÁCH",
      "startTime": 223.76,
      "endTime": 246.22,
      "duration": 22.46,
      "mascotMode": "magnifier",
      "mascotTip": "Mẫu số là √(A² + B² + C²) (toạ độ VTPT), KHÔNG PHẢI toạ độ điểm M0!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:12px;\">⚠️ Cú Thông Thái cảnh báo bẫy công thức khoảng cách</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <div class=\"trap-warning-box\" style=\"background:rgba(239,68,68,0.15); border-left:4px solid #ef4444; padding:14px 18px; border-radius:0 8px 8px 0;\">\n                    <b style=\"color:#fca5a5; font-size:18px;\">Sai lầm chết người: Nhầm lẫn mẫu số!</b><br>\n                    • Mẫu số là độ dài vectơ pháp tuyến $\\sqrt{A^2 + B^2 + C^2}$.<br>\n                    • Rất nhiều bạn bấm nhầm thành toạ độ điểm $\\sqrt{x_0^2 + y_0^2 + z_0^2}$ dẫn đến sai toàn bộ kết quả bài toán khoảng cách và bán kính mặt cầu!<br>\n                    <span style=\"color:#fde047;\">Luôn ghi nhớ: Dưới mẫu số là hệ số $A, B, C$ của mặt phẳng!</span>\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ & BẤM CASIO 580",
      "subtitle": "PHẦN 5: TÍNH KHOẢNG CÁCH BẰNG PHÍM CALC CASIO",
      "startTime": 246.22,
      "endTime": 278.28,
      "duration": 32.06,
      "mascotMode": "lightbulb",
      "mascotTip": "Nhập phân số |Ax+By+Cz+D|/√(A²+B²+C²) rồi bấm CALC nhập điểm M0 trong 3 giây!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">💡 Tuyệt kỹ Casio fx-580VNX tính khoảng cách</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Để tính khoảng cách từ nhiều điểm đến một mặt phẳng mà không sợ nhầm:</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:12px 16px; margin:10px 0;\">\n                    1. Bấm phím phân số $\\frac{\\square}{\\square}$.<br>\n                    2. Trên tử bấm <b>SHIFT + [ ( ] (Abs)</b> rồi nhập $A x + B y + C z + D$ (dùng các phím $x, y, z$).<br>\n                    3. Dưới mẫu nhập căn bậc hai $\\sqrt{A^2 + B^2 + C^2}$.<br>\n                    4. Bấm <b>CALC</b>, nhập toạ độ $x, y, z$ của điểm $M_0$ rồi bấm <b>[=]</b>.\n                  </div>\n                  <p style=\"color:#34d399; font-weight:700;\">Kết quả khoảng cách hiện ra ngay lập tức, chính xác tuyệt đối!</p>\n                </div>\n            \n    </div>\n    "
    }
  ]
};

}
