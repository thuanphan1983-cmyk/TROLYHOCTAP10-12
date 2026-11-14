/* =========================================================================
   CHƯƠNG V: PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN - TOÁN 12 KNTT
   Bài 14: Phương trình mặt phẳng (Mục 1, 2, 3, 4)
   Bài 15: Phương trình đường thẳng trong không gian (Mục 1, 2, 3)
   Bài 16: Công thức tính góc trong không gian (Mục 1, 2, 3)
   Rich Interactive Slides & Audio chuẩn SGK Kết Nối Tri Thức
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
      "time": 0,
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
      "time": 219,
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
      "startTime": 0,
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
      "endTime": 219,
      "duration": 28.13,
      "mascotMode": "magnifier",
      "mascotTip": "[AB, AC] = (3; 0; 3) chia 3 => n = (1; 0; 1). Tuyệt vời!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Tìm toạ độ hai VTCP: $\\vec{AB} = (1; 1; -1)$ và $\\vec{AC} = (-1; 2; 1)$.</p>\n                  <p>• Tích có hướng: $[\\vec{AB}, \\vec{AC}] = (1 \\cdot 1 - (-1) \\cdot 2; \\; (-1)(-1) - 1 \\cdot 1; \\; 1 \\cdot 2 - 1(-1)) = (3; 0; 3)$.</p>\n                  <p>• Để toạ độ thứ nhất bằng $1$, ta nhân tỉ lệ với $\\frac{1}{3}$:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    $$\\vec{n} = \\frac{1}{3} [\\vec{AB}, \\vec{AC}] = (1; 0; 1)$$\n                  </div>\n                  <p><b>Kết luận:</b> $\\vec{n} = (1; 0; 1)$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI SOI BẪY SAI LẦM",
      "subtitle": "PHẦN 4: BẪY DẤU Ở TUNG ĐỘ TÍCH CÓ HƯỚNG",
      "startTime": 219,
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
      "time": 0,
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
      "startTime": 0,
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
      "time": 0,
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
      "startTime": 0,
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
      "time": 0,
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
      "startTime": 0,
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

  window.CHAPTER5_DATA.bai15_muc1 = {
  "lessonId": "bai15",
  "lessonTitle": "Bài 15: Phương trình đường thẳng trong không gian",
  "sectionId": "bai15_muc1",
  "sectionTitle": "Mục 1: Vectơ chỉ phương & Phương trình tham số của đường thẳng",
  "audio": "/audio/bai15_muc1.mp3",
  "audioSrc": "./audio/bai15_muc1.mp3",
  "audio_src": "./audio/bai15_muc1.mp3",
  "timestamp_src": "timestamps/bai15_muc1.json",
  "totalDuration": 324.15,
  "duration": 324.15,
  "title": "Mục 1: Vectơ chỉ phương & Phương trình tham số của đường thẳng",
  "owl_tip": "VTCP song song hoặc trùng đường thẳng. PT tham số: x = x0 + at, y = y0 + bt, z = z0 + ct.",
  "timeline": [
    {
      "time": 0,
      "id": "part1"
    },
    {
      "time": 55.97,
      "id": "part2"
    },
    {
      "time": 92.02,
      "id": "part3"
    },
    {
      "time": 101.67,
      "id": "vd1_q"
    },
    {
      "time": 117.8,
      "id": "vd1_a"
    },
    {
      "time": 145.11,
      "id": "vd2_q"
    },
    {
      "time": 161.41,
      "id": "vd2_a"
    },
    {
      "time": 191.79,
      "id": "vd3_q"
    },
    {
      "time": 210.77,
      "id": "vd3_a"
    },
    {
      "time": 271.35,
      "id": "part4"
    },
    {
      "time": 296.41,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm Vectơ chỉ phương của đường thẳng",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Phương trình tham số của đường thẳng",
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
      "partTitle": "Phần 5: Mẹo Thầy Cú & Tuyệt kỹ kiểm tra điểm",
      "scenes": [
        11
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 15: PHƯƠNG TRÌNH ĐƯỜNG THẲNG",
      "subtitle": "MỤC 1 • VECTƠ CHỈ PHƯƠNG CỦA ĐƯỜNG THẲNG",
      "startTime": 0,
      "endTime": 55.97,
      "duration": 55.97,
      "mascotMode": "pointer",
      "mascotTip": "VTCP song song hoặc trùng với đường thẳng. k*u (k ≠ 0) cũng là VTCP!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Vectơ chỉ phương của đường thẳng</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Vectơ $\\vec{u} \\ne \\vec{0}$ được gọi là <b>vectơ chỉ phương (VTCP)</b> của đường thẳng $\\Delta$ nếu giá của nó song song hoặc trùng với $\\Delta$.</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:12px; margin:12px 0;\">\n                    <b>Tính chất:</b> Nếu $\\vec{u}$ là một VTCP của $\\Delta$ thì với mọi $k \\ne 0$, vectơ $k\\vec{u}$ cũng là một VTCP của $\\Delta$.\n                  </div>\n                  <p>👉 Ba trục toạ độ $Ox, Oy, Oz$ lần lượt nhận $\\vec{i}=(1;0;0)$, $\\vec{j}=(0;1;0)$, $\\vec{k}=(0;0;1)$ làm VTCP.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 2,
      "title": "PHƯƠNG TRÌNH THAM SỐ CỦA ĐƯỜNG THẲNG",
      "subtitle": "MỤC 1 • CÔNG THỨC THAM SỐ CHUẨN SGK",
      "startTime": 55.97,
      "endTime": 92.02,
      "duration": 36.05,
      "mascotMode": "talking",
      "mascotTip": "Mỗi giá trị tham số t xác định duy nhất 1 điểm trên đường thẳng!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">2. Phương trình tham số của đường thẳng</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Trong không gian $Oxyz$, đường thẳng $\\Delta$ đi qua điểm $M_0(x_0; y_0; z_0)$ và nhận $\\vec{u}=(a; b; c)$ làm VTCP có phương trình tham số:</p>\n                  <div style=\"background:rgba(52,211,153,0.15); border:1.5px solid #34d399; border-radius:10px; padding:14px; margin:12px 0; text-align:center; font-size:18px;\">\n                    $$\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases} \\quad (t \\in \\mathbb{R})$$\n                  </div>\n                  <p>👉 Điểm $M(x; y; z) \\in \\Delta \\iff \\exists t \\in \\mathbb{R}: M(x_0 + at; y_0 + bt; z_0 + ct)$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "subtitle": "MỤC 1 • 3 BÀI TOÁN XÁC ĐỊNH VTCP & PT THAM SỐ",
      "startTime": 92.02,
      "endTime": 101.67,
      "duration": 9.65,
      "mascotMode": "thinking",
      "mascotTip": "Cùng bấm đồng hồ 15s và 30s để rèn phản xạ nhận biết và tính toán!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#fbbf24; font-size:22px; margin-bottom:12px;\">Khám phá 3 dạng toán then chốt</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <ul style=\"list-style-type:none; padding-left:0; space-y:8px;\">\n                    <li>📌 <b>Ví dụ 1 (15s):</b> Nhận dạng VTCP và tìm điểm thuộc đường thẳng từ PT tham số.</li>\n                    <li>📌 <b>Ví dụ 2 (15s):</b> Viết phương trình tham số của đường thẳng đi qua 2 điểm $A, B$.</li>\n                    <li>📌 <b>Ví dụ 3 (30s):</b> Viết PT tham số đường thẳng vuông góc mặt phẳng & Tìm giao điểm.</li>\n                  </ul>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: ĐỌC VTCP VÀ ĐIỂM THUỘC ĐƯỜNG THẲNG",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 101.67,
      "endTime": 117.8,
      "duration": 16.13,
      "mascotMode": "thinking",
      "mascotTip": "Hệ số của t là toạ độ VTCP; hệ số tự do là toạ độ điểm đi qua!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">VÍ DỤ 1: ĐỌC VTCP & ĐIỂM THUỘC ĐƯỜNG THẲNG</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <div style=\"font-size:16.5px; line-height:1.7; color:#f8fafc;\">\n                  <b>Đề bài:</b> Trong không gian $Oxyz$, cho đường thẳng $d$ có phương trình tham số:\n                  $$\\begin{cases} x = 1 - 2t \\\\ y = 3 + 4t \\\\ z = -2 + t \\end{cases}$$\n                  Tìm toạ độ một vectơ chỉ phương của $d$ và toạ độ một điểm $M_0$ thuộc $d$.\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 117.8,
      "endTime": 145.11,
      "duration": 27.31,
      "mascotMode": "talking",
      "mascotTip": "Lấy hệ số gắn với t làm VTCP. Cho t = 0 tìm ngay được 1 điểm!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#10b981; font-size:21px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Hệ số của $t$ trong ba phương trình lần lượt là $-2; 4; 1$.</p>\n                  <p>👉 Một vectơ chỉ phương của $d$ là: $\\vec{u} = (-2; 4; 1)$ hoặc $\\vec{u}' = (2; -4; -1)$.</p>\n                  <p>• Thay $t = 0$ vào phương trình, ta được toạ độ điểm thuộc $d$ là:</p>\n                  <div style=\"background:rgba(16,185,129,0.15); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0;\">\n                    $$M_0(1; 3; -2) \\in d$$\n                  </div>\n                  <p>✨ <i>Ghi chú: Mỗi giá trị thực của $t$ cho một điểm thuộc $d$ (Ví dụ: $t=1 \\implies M_1(-1; 7; -1) \\in d$).</i></p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: PT THAM SỐ QUA HAI ĐIỂM",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 145.11,
      "endTime": 161.41,
      "duration": 16.3,
      "mascotMode": "thinking",
      "mascotTip": "VTCP chính là vectơ AB! Tính toạ độ vectơ: lấy toạ độ B trừ toạ độ A.",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">VÍ DỤ 2: PT THAM SỐ QUA HAI ĐIỂM</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <div style=\"font-size:16.5px; line-height:1.7; color:#f8fafc;\">\n                  <b>Đề bài:</b> Trong không gian $Oxyz$, viết phương trình tham số của đường thẳng $\\Delta$ đi qua hai điểm $A(1; 2; -1)$ và $B(3; 0; 2)$.\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 161.41,
      "endTime": 191.79,
      "duration": 30.38,
      "mascotMode": "talking",
      "mascotTip": "Chọn điểm đi qua là A hoặc B đều đúng. Đề thi thường chọn điểm A!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#10b981; font-size:21px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Vectơ chỉ phương của đường thẳng $\\Delta$ là:</p>\n                  <p>$$\\vec{u} = \\vec{AB} = (3-1; 0-2; 2-(-1)) = (2; -2; 3)$$</p>\n                  <p>• Đường thẳng $\\Delta$ đi qua điểm $A(1; 2; -1)$ nhận $\\vec{u}=(2; -2; 3)$ làm VTCP có PT tham số:</p>\n                  <div style=\"background:rgba(16,185,129,0.15); border:1.5px solid #10b981; border-radius:10px; padding:12px; margin:10px 0; text-align:center;\">\n                    $$\\begin{cases} x = 1 + 2t \\\\ y = 2 - 2t \\\\ z = -1 + 3t \\end{cases} \\quad (t \\in \\mathbb{R})$$\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: ĐƯỜNG THẲNG VUÔNG GÓC MẶT PHẲNG",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 191.79,
      "endTime": 210.77,
      "duration": 18.98,
      "mascotMode": "thinking",
      "mascotTip": "Δ ⊥ (P) thì VTCP của Δ chính là VTPT của (P)! Tham số hoá toạ độ giao điểm H.",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">VÍ DỤ 3: PT ĐƯỜNG THẲNG VUÔNG GÓC MẶT PHẲNG</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n                <div style=\"font-size:16.5px; line-height:1.7; color:#f8fafc;\">\n                  <b>Đề bài:</b> Trong không gian $Oxyz$, viết phương trình tham số của đường thẳng $\\Delta$ đi qua điểm $M(1; 0; -2)$ và vuông góc với mặt phẳng $(P): 2x - y + 2z - 7 = 0$. Tìm toạ độ giao điểm $H$ của $\\Delta$ và $(P)$.\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI TỪNG BƯỚC",
      "startTime": 210.77,
      "endTime": 271.35,
      "duration": 60.58,
      "mascotMode": "talking",
      "mascotTip": "Thay toạ độ H(t) vào phương trình mặt phẳng giải tìm t = 1, suy ra H(3; -1; 0)!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#f59e0b; font-size:21px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Vì $\\Delta \\perp (P)$ nên VTCP của $\\Delta$ là VTPT của $(P)$: $\\vec{u} = \\vec{n}_P = (2; -1; 2)$.</p>\n                  <p>• Phương trình tham số của $\\Delta$: $\\begin{cases} x = 1 + 2t \\\\ y = -t \\\\ z = -2 + 2t \\end{cases} \\; (t \\in \\mathbb{R})$.</p>\n                  <p>• Vì $H = \\Delta \\cap (P) \\implies H(1+2t; -t; -2+2t)$. Thay vào $(P)$:</p>\n                  <p>$$2(1+2t) - (-t) + 2(-2+2t) - 7 = 0 \\iff 9t - 9 = 0 \\iff t = 1$$</p>\n                  <div style=\"background:rgba(245,158,11,0.15); border:1.5px solid #f59e0b; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    <b>Toạ độ giao điểm:</b> $H(3; -1; 0)$\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI SOI BẪY SAI LẦM",
      "subtitle": "PHẦN 4: BẪY KHUYẾT THAM SỐ & ĐỔI DẤU",
      "startTime": 271.35,
      "endTime": 296.41,
      "duration": 25.06,
      "mascotMode": "magnifier",
      "mascotTip": "Khi khuyết biến t, toạ độ VTCP bằng 0 chứ không phải hệ số tự do!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <div class=\"trap-warning-box\" style=\"margin-bottom:14px;\">\n                  <div class=\"trap-title\">⚠️ BẪY 1: KHUYẾT THAM SỐ t TRONG PHƯƠNG TRÌNH</div>\n                  <p style=\"margin:6px 0 0 0; font-size:16.5px; color:#fecaca;\">\n                    Cho đường thẳng: $\\begin{cases} x = 2 - t \\\\ y = 3 \\\\ z = 1 + 2t \\end{cases}$. Rất nhiều bạn đọc VTCP là $(-1; 3; 2)$ ❌ SAI LẦM!<br>\n                    <b>Chuẩn xác:</b> $y = 3 = 3 + 0\\cdot t \\implies$ VTCP phải là $\\vec{u} = (-1; 0; 2)$ ✅.\n                  </p>\n                </div>\n                <div style=\"background:rgba(244,63,94,0.15); border:1.5px solid #f43f5e; border-radius:10px; padding:12px;\">\n                  <b style=\"color:#fda4af;\">⚠️ BẪY 2: NHẦM DẤU ĐIỂM ĐI QUA</b>\n                  <p style=\"margin:4px 0 0 0; font-size:15px; color:#f8fafc;\">\n                    Trong phương trình tham số: $x = x_0 + at$, dấu của $x_0$ giữ nguyên, không đổi dấu!\n                  </p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ & KIỂM TRA ĐIỂM NHANH",
      "subtitle": "PHẦN 5: KIỂM TRA ĐIỂM THUỘC ĐƯỜNG THẲNG TRONG 5 GIÂY",
      "startTime": 296.41,
      "endTime": 324.15,
      "duration": 27.74,
      "mascotMode": "talking",
      "mascotTip": "Tính nhẩm 3 giá trị t. Cả 3 giá trị bằng nhau thì điểm thuộc đường thẳng!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">🦉 Tuyệt kỹ nhẩm nhanh điểm thuộc đường thẳng</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <p>• Để kiểm tra điểm $M(x_M; y_M; z_M)$ có thuộc đường thẳng $\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases}$ hay không:</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:12px; margin:10px 0;\">\n                    <b>Quy tắc 3 giá trị $t$:</b> Tính $t_1 = \\frac{x_M - x_0}{a}$, $t_2 = \\frac{y_M - y_0}{b}$, $t_3 = \\frac{z_M - z_0}{c}$.<br>\n                    • Nếu $t_1 = t_2 = t_3 = t_0 \\implies M \\in \\Delta$.<br>\n                    • Nếu có bất kỳ hai giá trị nào khác nhau $\\implies M \\notin \\Delta$.\n                  </div>\n                  <p>👉 Giúp em loại trừ ngay các phương án trắc nghiệm trong 5 giây!</p>\n                </div>\n            \n    </div>\n    "
    }
  ]
};

  window.CHAPTER5_DATA.bai15_muc2 = {
  "lessonId": "bai15",
  "lessonTitle": "Bài 15: Phương trình đường thẳng trong không gian",
  "sectionId": "bai15_muc2",
  "sectionTitle": "Mục 2: Phương trình chính tắc của đường thẳng",
  "audio": "/audio/bai15_muc2.mp3",
  "audioSrc": "./audio/bai15_muc2.mp3",
  "audio_src": "./audio/bai15_muc2.mp3",
  "timestamp_src": "timestamps/bai15_muc2.json",
  "totalDuration": 291.41,
  "duration": 291.41,
  "title": "Mục 2: Phương trình chính tắc của đường thẳng",
  "owl_tip": "(x - x0)/a = (y - y0)/b = (z - z0)/c với abc ≠ 0. Hệ số x, y, z trên tử bắt buộc bằng +1!",
  "timeline": [
    {
      "time": 0,
      "id": "part1"
    },
    {
      "time": 46.27,
      "id": "part2"
    },
    {
      "time": 74.66,
      "id": "part3"
    },
    {
      "time": 83.18,
      "id": "vd1_q"
    },
    {
      "time": 99.43,
      "id": "vd1_a"
    },
    {
      "time": 125.54,
      "id": "vd2_q"
    },
    {
      "time": 146.37,
      "id": "vd2_a"
    },
    {
      "time": 167.95,
      "id": "vd3_q"
    },
    {
      "time": 186.02,
      "id": "vd3_a"
    },
    {
      "time": 245.73,
      "id": "part4"
    },
    {
      "time": 268.51,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Định nghĩa & Điều kiện phương trình chính tắc",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Kỹ năng đọc toạ độ chuẩn xác",
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
      "title": "BÀI 15: PHƯƠNG TRÌNH ĐƯỜNG THẲNG",
      "subtitle": "MỤC 2 • PHƯƠNG TRÌNH CHÍNH TẮC CỦA ĐƯỜNG THẲNG",
      "startTime": 0,
      "endTime": 46.27,
      "duration": 46.27,
      "mascotMode": "pointer",
      "mascotTip": "ĐK cần và đủ để có PT chính tắc là cả 3 toạ độ của VTCP phải khác 0!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Phương trình chính tắc của đường thẳng</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Trong không gian $Oxyz$, đường thẳng $\\Delta$ đi qua điểm $M_0(x_0; y_0; z_0)$ và nhận $\\vec{u}=(a; b; c)$ làm VTCP với <b>$a \\ne 0, b \\ne 0, c \\ne 0$</b> có phương trình chính tắc:</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:14px; margin:12px 0; text-align:center; font-size:19px;\">\n                    $$\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$$\n                  </div>\n                  <p>⚠️ <b>Lưu ý cực quan trọng:</b> Nếu ít nhất một trong ba toạ độ $a, b, c$ bằng 0 thì đường thẳng <b>không có</b> phương trình chính tắc (chỉ có PT tham số).</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 2,
      "title": "KỸ NĂNG ĐỌC TOẠ ĐỘ CHUẨN XÁC",
      "subtitle": "MỤC 2 • ĐỔI HỆ SỐ TỬ SỐ VỀ DƯƠNG 1",
      "startTime": 46.27,
      "endTime": 74.66,
      "duration": 28.39,
      "mascotMode": "talking",
      "mascotTip": "Hệ số x, y, z trên tử bắt buộc phải là +1! Nếu có dấu trừ phải đổi cả tử và mẫu.",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">2. Kỹ năng đọc toạ độ từ phương trình chính tắc</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Dạng chuẩn bắt buộc: hệ số trước $x, y, z$ ở tử số phải là <b>$+1$</b>:</p>\n                  <p>$$\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$$</p>\n                  <div style=\"background:rgba(52,211,153,0.15); border:1.5px solid #34d399; border-radius:10px; padding:12px; margin:12px 0;\">\n                    <b>Quy tắc đổi dấu:</b> Nếu gặp $\\frac{x_0 - x}{a}$, bắt buộc nhân cả tử và mẫu với $-1$ thành:\n                    $$\\frac{x - x_0}{-a}$$\n                  </div>\n                  <p>👉 Khi đó mẫu số mới chính là toạ độ thực của VTCP!</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "subtitle": "MỤC 2 • 3 BÀI TOÁN PHƯƠNG TRÌNH CHÍNH TẮC TRỌNG TÂM",
      "startTime": 74.66,
      "endTime": 83.18,
      "duration": 8.52,
      "mascotMode": "thinking",
      "mascotTip": "Cùng thầy rèn luyện nhận dạng, bẫy đổi dấu và viết PT qua tích có hướng!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#fbbf24; font-size:22px; margin-bottom:12px;\">Khám phá 3 bài toán trọng tâm</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <ul style=\"list-style-type:none; padding-left:0; space-y:8px;\">\n                    <li>📌 <b>Ví dụ 1 (15s):</b> Xác định toạ độ VTCP và điểm thuộc đường thẳng chính tắc.</li>\n                    <li>📌 <b>Ví dụ 2 (15s):</b> Xử lý bẫy đổi dấu tử số và đưa về dạng chuẩn.</li>\n                    <li>📌 <b>Ví dụ 3 (30s):</b> Lập phương trình chính tắc đường thẳng song song 2 mặt phẳng.</li>\n                  </ul>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: ĐỌC TOẠ ĐỘ TỪ PT CHÍNH TẮC",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 83.18,
      "endTime": 99.43,
      "duration": 16.25,
      "mascotMode": "thinking",
      "mascotTip": "Mẫu số cho VTCP; tử số cho toạ độ điểm đi qua (nhớ đổi dấu!).",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">VÍ DỤ 1: ĐỌC TOẠ ĐỘ TỪ PT CHÍNH TẮC</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <div style=\"font-size:16.5px; line-height:1.7; color:#f8fafc;\">\n                  <b>Đề bài:</b> Trong không gian $Oxyz$, cho đường thẳng $d$ có phương trình chính tắc:\n                  $$\\frac{x - 3}{2} = \\frac{y + 1}{-4} = \\frac{z - 5}{3}$$\n                  Xác định toạ độ một điểm $M_0$ thuộc $d$ và toạ độ một vectơ chỉ phương của $d$.\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 99.43,
      "endTime": 125.54,
      "duration": 26.11,
      "mascotMode": "talking",
      "mascotTip": "Mẫu số là (2; -4; 3). Tử số đổi dấu: x-3=0 -> 3; y+1=0 -> -1; z-5=0 -> 5.",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#10b981; font-size:21px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Nhìn vào mẫu số của ba phân thức, ta có một vectơ chỉ phương của $d$ là:</p>\n                  <p>$$\\vec{u} = (2; -4; 3)$$</p>\n                  <p>• Nhìn vào tử số, giải $x - 3 = 0, y + 1 = 0, z - 5 = 0$, ta được điểm đi qua:</p>\n                  <div style=\"background:rgba(16,185,129,0.15); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    $$M_0(3; -1; 5) \\in d$$\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: BẪY ĐỔI DẤU TỬ THỨC",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 125.54,
      "endTime": 146.37,
      "duration": 20.83,
      "mascotMode": "thinking",
      "mascotTip": "Tử số là 2 - x, chưa phải dạng x - x0! Bắt buộc đổi dấu tử và mẫu.",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">VÍ DỤ 2: BẪY ĐỔI DẤU TỬ THỨC</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <div style=\"font-size:16.5px; line-height:1.7; color:#f8fafc;\">\n                  <b>Đề bài:</b> Trong không gian $Oxyz$, cho đường thẳng $d$ có phương trình:\n                  $$\\frac{2 - x}{3} = \\frac{y + 4}{1} = \\frac{z - 1}{-2}$$\n                  Hãy viết lại phương trình chính tắc chuẩn của $d$ và tìm một vectơ chỉ phương của $d$.\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 146.37,
      "endTime": 167.95,
      "duration": 21.58,
      "mascotMode": "talking",
      "mascotTip": "(2 - x)/3 = (x - 2)/(-3). Mẫu số VTCP phải là -3 chứ không phải +3!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#10b981; font-size:21px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Ta có $\\frac{2 - x}{3} = \\frac{-(x - 2)}{3} = \\frac{x - 2}{-3}$.</p>\n                  <p>• Viết lại phương trình chính tắc chuẩn của $d$:</p>\n                  <div style=\"background:rgba(16,185,129,0.15); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    $$\\frac{x - 2}{-3} = \\frac{y + 4}{1} = \\frac{z - 1}{-2}$$\n                  </div>\n                  <p>👉 Một vectơ chỉ phương của $d$ là: $\\vec{u} = (-3; 1; -2)$ hoặc $\\vec{u}' = (3; -1; 2)$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: PT CHÍNH TẮC SONG SONG HAI MẶT PHẲNG",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 167.95,
      "endTime": 186.02,
      "duration": 18.07,
      "mascotMode": "thinking",
      "mascotTip": "Δ song song với cả (P) và (Q) thì VTCP u = [nP, nQ]!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">VÍ DỤ 3: PT CHÍNH TẮC SONG SONG HAI MP</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n                <div style=\"font-size:16.5px; line-height:1.7; color:#f8fafc;\">\n                  <b>Đề bài:</b> Trong không gian $Oxyz$, viết phương trình chính tắc của đường thẳng $\\Delta$ đi qua điểm $A(1; -2; 3)$ và song song với hai mặt phẳng $(P): x + 2y - z + 1 = 0$ và $(Q): 2x - y + z - 4 = 0$.\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI TỪNG BƯỚC",
      "startTime": 186.02,
      "endTime": 245.73,
      "duration": 59.71,
      "mascotMode": "talking",
      "mascotTip": "Tích có hướng [nP, nQ] = (1; -3; -5). Lập PT chính tắc đi qua A(1; -2; 3).",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#f59e0b; font-size:21px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• $(P)$ có VTPT $\\vec{n}_1 = (1; 2; -1)$; $(Q)$ có VTPT $\\vec{n}_2 = (2; -1; 1)$.</p>\n                  <p>• Vì $\\Delta \\parallel (P)$ và $\\Delta \\parallel (Q)$ nên VTCP của $\\Delta$ là:</p>\n                  <p>$$\\vec{u} = [\\vec{n}_1, \\vec{n}_2] = (2\\cdot 1 - (-1)(-1); (-1)\\cdot 2 - 1\\cdot 1; 1(-1) - 2\\cdot 2) = (1; -3; -5)$$</p>\n                  <p>• Phương trình chính tắc của $\\Delta$ đi qua $A(1; -2; 3)$ là:</p>\n                  <div style=\"background:rgba(245,158,11,0.15); border:1.5px solid #f59e0b; border-radius:10px; padding:12px; margin:8px 0; text-align:center; font-size:17px;\">\n                    $$\\frac{x - 1}{1} = \\frac{y + 2}{-3} = \\frac{z - 3}{-5}$$\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI SOI BẪY SAI LẦM",
      "subtitle": "PHẦN 4: BẪY TOẠ ĐỘ VTCP BẰNG 0",
      "startTime": 245.73,
      "endTime": 268.51,
      "duration": 22.78,
      "mascotMode": "magnifier",
      "mascotTip": "Nếu VTCP có toạ độ bằng 0 thì KHÔNG CÓ phương trình chính tắc!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <div class=\"trap-warning-box\" style=\"margin-bottom:14px;\">\n                  <div class=\"trap-title\">⚠️ BẪY: ĐƯỜNG THẲNG CÓ VTCP CHỨA SỐ 0</div>\n                  <p style=\"margin:6px 0 0 0; font-size:16.5px; color:#fecaca;\">\n                    Cho đường thẳng đi qua $A(1; 2; 3)$ có VTCP $\\vec{u} = (2; 0; -1)$.<br>\n                    Rất nhiều bạn viết: $\\frac{x - 1}{2} = \\frac{y - 2}{0} = \\frac{z - 3}{-1}$ ❌ HOÀN TOÀN SAI BẢN CHẤT TOÁN HỌC!<br>\n                    <b>Chuẩn xác:</b> Phép chia cho 0 không xác định. Trong trường hợp này, đường thẳng <b>chỉ có phương trình tham số</b>, không có phương trình chính tắc!\n                  </p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ & BẤM CASIO 580",
      "subtitle": "PHẦN 5: TÍNH TÍCH CÓ HƯỚNG TÌM VTCP TRÊN CASIO",
      "startTime": 268.51,
      "endTime": 291.41,
      "duration": 22.9,
      "mascotMode": "talking",
      "mascotTip": "Menu 5 -> Nhập VctA, VctB -> Option 3 * Option 4!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">🦉 Tuyệt kỹ Casio fx-580VNX tìm VTCP</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <p>• <b>Bước 1:</b> Bấm <code>MENU 5 1 3</code> nhập VTPT $\\vec{n}_1 = (1; 2; -1)$.</p>\n                  <p>• <b>Bước 2:</b> Bấm <code>OPTN 1 2 3</code> nhập VTPT $\\vec{n}_2 = (2; -1; 1)$.</p>\n                  <p>• <b>Bước 3:</b> Bấm <code>AC</code> $\\rightarrow$ bấm <code>OPTN 3 \\times OPTN 4 =</code>.</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:12px; margin:10px 0;\">\n                    <b>Kết quả màn hình:</b> $(1; -3; -5)$ chính là VTCP cần tìm! Cực kỳ nhanh và chính xác 100%.\n                  </div>\n                </div>\n            \n    </div>\n    "
    }
  ]
};

  window.CHAPTER5_DATA.bai15_muc3 = {
  "lessonId": "bai15",
  "lessonTitle": "Bài 15: Phương trình đường thẳng trong không gian",
  "sectionId": "bai15_muc3",
  "sectionTitle": "Mục 3: Vị trí tương đối giữa hai đường thẳng",
  "audio": "/audio/bai15_muc3.mp3",
  "audioSrc": "./audio/bai15_muc3.mp3",
  "audio_src": "./audio/bai15_muc3.mp3",
  "timestamp_src": "timestamps/bai15_muc3.json",
  "totalDuration": 330.06,
  "duration": 330.06,
  "title": "Mục 3: Vị trí tương đối giữa hai đường thẳng",
  "owl_tip": "Kiểm tra cùng phương trước. Nếu không cùng phương, giải hệ t, t' để phân biệt Cắt nhau hay Chéo nhau!",
  "timeline": [
    {
      "time": 0,
      "id": "part1"
    },
    {
      "time": 39.82,
      "id": "part2"
    },
    {
      "time": 73.85,
      "id": "part3"
    },
    {
      "time": 86.09,
      "id": "vd1_q"
    },
    {
      "time": 107.04,
      "id": "vd1_a"
    },
    {
      "time": 141.58,
      "id": "vd2_q"
    },
    {
      "time": 170.24,
      "id": "vd2_a"
    },
    {
      "time": 199.76,
      "id": "vd3_q"
    },
    {
      "time": 222.32,
      "id": "vd3_a"
    },
    {
      "time": 271.5,
      "id": "part4"
    },
    {
      "time": 297.52,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Phân loại 4 vị trí tương đối giữa hai đường thẳng",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Phân biệt Cắt nhau, Chéo nhau & Điều kiện vuông góc",
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
      "partTitle": "Phần 5: Mẹo Thầy Cú & Bấm Casio 580 kiểm tra chéo nhau",
      "scenes": [
        11
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 15: PHƯƠNG TRÌNH ĐƯỜNG THẲNG",
      "subtitle": "MỤC 3 • VỊ TRÍ TƯƠNG ĐỐI GIỮA HAI ĐƯỜNG THẲNG",
      "startTime": 0,
      "endTime": 39.82,
      "duration": 39.82,
      "mascotMode": "pointer",
      "mascotTip": "Có 4 vị trí: Trùng nhau, Song song, Cắt nhau và Chéo nhau!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Phân loại 4 vị trí tương đối</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Cho $d_1$ qua $M_1$ có VTCP $\\vec{u}_1$ và $d_2$ qua $M_2$ có VTCP $\\vec{u}_2$:</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:12px; margin:12px 0;\">\n                    <b>Trường hợp 1: $\\vec{u}_1$ và $\\vec{u}_2$ cùng phương:</b><br>\n                    • Nếu $M_1 \\in d_2 \\implies d_1 \\equiv d_2$ (Trùng nhau).<br>\n                    • Nếu $M_1 \\notin d_2 \\implies d_1 \\parallel d_2$ (Song song).\n                  </div>\n                  <div style=\"background:rgba(52,211,153,0.15); border:1.5px solid #34d399; border-radius:10px; padding:12px; margin:12px 0;\">\n                    <b>Trường hợp 2: $\\vec{u}_1$ và $\\vec{u}_2$ không cùng phương:</b><br>\n                    • Xét hệ phương trình tìm giao điểm giữa $d_1$ và $d_2$.\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 2,
      "title": "PHÂN BIỆT CẮT NHAU VÀ CHÉO NHAU",
      "subtitle": "MỤC 3 • HỆ GIAO ĐIỂM & ĐIỀU KIỆN VUÔNG GÓC",
      "startTime": 39.82,
      "endTime": 73.85,
      "duration": 34.03,
      "mascotMode": "talking",
      "mascotTip": "Hệ có nghiệm duy nhất -> Cắt nhau. Hệ vô nghiệm -> Chéo nhau!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">2. Cắt nhau, Chéo nhau và Vuông góc</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Khi $\\vec{u}_1, \\vec{u}_2$ không cùng phương, lập hệ PT với 2 tham số $t$ và $t'$:</p>\n                  <div style=\"background:rgba(52,211,153,0.15); border:1.5px solid #34d399; border-radius:10px; padding:12px; margin:10px 0;\">\n                    • <b>Hệ có nghiệm duy nhất $(t; t')$:</b> $d_1$ và $d_2$ <b>CẮT NHAU</b> tại 1 điểm.<br>\n                    • <b>Hệ vô nghiệm:</b> $d_1$ và $d_2$ <b>CHÉO NHAU</b> trong không gian.\n                  </div>\n                  <div style=\"background:rgba(251,191,36,0.15); border:1.5px solid #fbbf24; border-radius:10px; padding:10px; margin:10px 0;\">\n                    <b>Điều kiện vuông góc:</b> $d_1 \\perp d_2 \\iff \\vec{u}_1 \\cdot \\vec{u}_2 = 0 \\iff a_1a_2 + b_1b_2 + c_1c_2 = 0$.\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "subtitle": "MỤC 3 • 3 BÀI TOÁN VỊ TRÍ TƯƠNG ĐỐI TRỌNG TÂM",
      "startTime": 73.85,
      "endTime": 86.09,
      "duration": 12.24,
      "mascotMode": "thinking",
      "mascotTip": "Luyện tập xét song song, tìm tham số m vuông góc và phân biệt chéo nhau!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#fbbf24; font-size:22px; margin-bottom:12px;\">Khám phá 3 bài toán trọng tâm</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <ul style=\"list-style-type:none; padding-left:0; space-y:8px;\">\n                    <li>📌 <b>Ví dụ 1 (15s):</b> Xét vị trí tương đối giữa hai đường thẳng song song.</li>\n                    <li>📌 <b>Ví dụ 2 (15s):</b> Tìm tham số $m$ để hai đường thẳng vuông góc với nhau.</li>\n                    <li>📌 <b>Ví dụ 3 (30s):</b> Giải hệ tham số kiểm tra hai đường thẳng chéo nhau.</li>\n                  </ul>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: XÉT VỊ TRÍ TƯƠNG ĐỐI",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 86.09,
      "endTime": 107.04,
      "duration": 20.95,
      "mascotMode": "thinking",
      "mascotTip": "So sánh tỉ lệ VTCP trước: u1 và u2 có cùng phương hay không?",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">VÍ DỤ 1: XÉT VỊ TRÍ TƯƠNG ĐỐI HAI ĐƯỜNG THẲNG</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <div style=\"font-size:16.5px; line-height:1.7; color:#f8fafc;\">\n                  <b>Đề bài:</b> Trong không gian $Oxyz$, cho hai đường thẳng:\n                  $$d_1: \\frac{x-1}{2} = \\frac{y-2}{-1} = \\frac{z}{3} \\quad \\text{và} \\quad d_2: \\frac{x+2}{-4} = \\frac{y}{2} = \\frac{z-1}{-6}$$\n                  Hỏi $d_1$ và $d_2$ song song, trùng nhau, cắt nhau hay chéo nhau?\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 107.04,
      "endTime": 141.58,
      "duration": 34.54,
      "mascotMode": "talking",
      "mascotTip": "u2 = -2*u1 nên cùng phương. Lấy M1(1; 2; 0) thay vào d2 thấy không thoả -> song song!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#10b981; font-size:21px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• $d_1$ có $\\vec{u}_1 = (2; -1; 3)$ và đi qua $M_1(1; 2; 0)$.</p>\n                  <p>• $d_2$ có $\\vec{u}_2 = (-4; 2; -6) = -2\\vec{u}_1 \\implies \\vec{u}_1$ cùng phương với $\\vec{u}_2$.</p>\n                  <p>• Thay toạ độ $M_1(1; 2; 0)$ vào phương trình $d_2$:</p>\n                  <p>$$\\frac{1+2}{-4} = -\\frac{3}{4}; \\quad \\frac{2}{2} = 1 \\ne -\\frac{3}{4} \\implies M_1 \\notin d_2$$</p>\n                  <div style=\"background:rgba(16,185,129,0.15); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    <b>Kết luận:</b> $d_1 \\parallel d_2$ (Song song).\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: TÌM m ĐỂ HAI ĐƯỜNG THẲNG VUÔNG GÓC",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 141.58,
      "endTime": 170.24,
      "duration": 28.66,
      "mascotMode": "thinking",
      "mascotTip": "d1 vuông góc d2 khi và chỉ khi tích vô hướng u1 * u2 = 0!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">VÍ DỤ 2: TÌM m ĐỂ HAI ĐƯỜNG THẲNG VUÔNG GÓC</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <div style=\"font-size:16.5px; line-height:1.7; color:#f8fafc;\">\n                  <b>Đề bài:</b> Trong không gian $Oxyz$, cho hai đường thẳng:\n                  $$d_1: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3 + 2t \\end{cases} \\quad \\text{và} \\quad d_2: \\begin{cases} x = 2 - 2t' \\\\ y = 1 + mt' \\\\ z = 4 + t' \\end{cases}$$\n                  Tìm giá trị của tham số $m$ để $d_1 \\perp d_2$.\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 170.24,
      "endTime": 199.76,
      "duration": 29.52,
      "mascotMode": "talking",
      "mascotTip": "1*(-2) + (-1)*m + 2*1 = 0 -> -2 - m + 2 = 0 -> m = 0. Cực nhanh!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#10b981; font-size:21px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Vectơ chỉ phương của $d_1$ là $\\vec{u}_1 = (1; -1; 2)$.</p>\n                  <p>• Vectơ chỉ phương của $d_2$ là $\\vec{u}_2 = (-2; m; 1)$.</p>\n                  <p>• Hai đường thẳng $d_1 \\perp d_2 \\iff \\vec{u}_1 \\cdot \\vec{u}_2 = 0$:</p>\n                  <p>$$1(-2) + (-1)(m) + 2(1) = 0 \\iff -2 - m + 2 = 0 \\iff m = 0$$</p>\n                  <div style=\"background:rgba(16,185,129,0.15); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    <b>Giá trị cần tìm:</b> $m = 0$\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: HAI ĐƯỜNG THẲNG CHÉO NHAU",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 199.76,
      "endTime": 222.32,
      "duration": 22.56,
      "mascotMode": "thinking",
      "mascotTip": "Đổi sang tham số t và t'. Lập hệ 3 phương trình 2 ẩn và kiểm tra nghiệm!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">VÍ DỤ 3: XÉT VỊ TRÍ TƯƠNG ĐỐI QUA HỆ PHƯƠNG TRÌNH</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n                <div style=\"font-size:16.5px; line-height:1.7; color:#f8fafc;\">\n                  <b>Đề bài:</b> Trong không gian $Oxyz$, xét vị trí tương đối giữa hai đường thẳng:\n                  $$d_1: \\frac{x-1}{1} = \\frac{y-2}{2} = \\frac{z-3}{3} \\quad \\text{và} \\quad d_2: \\frac{x-2}{2} = \\frac{y-4}{1} = \\frac{z-5}{1}$$\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI TỪNG BƯỚC",
      "startTime": 222.32,
      "endTime": 271.5,
      "duration": 49.18,
      "mascotMode": "talking",
      "mascotTip": "Giải 2 phương trình sau ra t = 0, t' = -2. Thay vào PT đầu thấy mâu thuẫn 1 ≠ -2 -> Chéo nhau!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#f59e0b; font-size:21px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• $\\vec{u}_1 = (1; 2; 3)$ và $\\vec{u}_2 = (2; 1; 1)$ không cùng phương vì $\\frac{1}{2} \\ne \\frac{2}{1}$.</p>\n                  <p>• Chuyển sang dạng tham số: $d_1$ theo $t$ và $d_2$ theo $t'$. Xét hệ:</p>\n                  <p>$$\\begin{cases} 1 + t = 2 + 2t' \\\\ 2 + 2t = 4 + t' \\\\ 3 + 3t = 5 + t' \\end{cases} \\iff \\begin{cases} t - 2t' = 1 \\\\ 2t - t' = 2 \\\\ 3t - t' = 2 \\end{cases}$$</p>\n                  <p>• Lấy PT(3) trừ PT(2) được $t = 0 \\implies t' = -2$. Thay vào PT(1): $0 - 2(-2) = 4 \\ne 1$ (Vô nghiệm)!</p>\n                  <div style=\"background:rgba(245,158,11,0.15); border:1.5px solid #f59e0b; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    <b>Kết luận:</b> Hai đường thẳng $d_1$ và $d_2$ <b>CHÉO NHAU</b> trong không gian.\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI SOI BẪY SAI LẦM",
      "subtitle": "PHẦN 4: BẪY DÙNG CHUNG THAM SỐ t KHI GIẢI HỆ",
      "startTime": 271.5,
      "endTime": 297.52,
      "duration": 26.02,
      "mascotMode": "magnifier",
      "mascotTip": "Hai đường thẳng có tham số độc lập! Phải đặt t và t' (hoặc s).",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <div class=\"trap-warning-box\" style=\"margin-bottom:14px;\">\n                  <div class=\"trap-title\">⚠️ BẪY CHẾT NGƯỜI: DÙNG CHUNG THAM SỐ t</div>\n                  <p style=\"margin:6px 0 0 0; font-size:16.5px; color:#fecaca;\">\n                    Khi lập hệ phương trình giao điểm, rất nhiều bạn viết:<br>\n                    $1 + t = 2 + 2t$ và $2 + 2t = 4 + t$ ❌ SAI HOÀN TOÀN!<br>\n                    <b>Chuẩn xác:</b> Hai điểm trên hai đường thẳng di chuyển với tốc độ tham số khác nhau, bắt buộc phải dùng 2 ẩn số độc lập: $t$ và $t'$!\n                  </p>\n                </div>\n                <div style=\"background:rgba(244,63,94,0.15); border:1.5px solid #f43f5e; border-radius:10px; padding:12px;\">\n                  <b style=\"color:#fda4af;\">⚠️ BẪY 2: QUÊN THỬ LẠI PHƯƠNG TRÌNH THỨ BA</b>\n                  <p style=\"margin:4px 0 0 0; font-size:15px; color:#f8fafc;\">\n                    Hệ có 3 phương trình 2 ẩn. Giải $t, t'$ từ 2 phương trình đầu bắt buộc phải thay vào phương trình thứ 3 để kiểm tra!\n                  </p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ & BẤM CASIO 580",
      "subtitle": "PHẦN 5: TUYỆT KỸ TÍCH HỖN TẠP KIỂM TRA CHÉO NHAU",
      "startTime": 297.52,
      "endTime": 330.06,
      "duration": 32.54,
      "mascotMode": "talking",
      "mascotTip": "Tính [u1, u2] * M1M2 trên Casio 580. = 0 thì cắt nhau, khác 0 thì chéo nhau!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">🦉 Tuyệt kỹ Casio fx-580VNX kiểm tra Chéo nhau</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <p>• Khi $\\vec{u}_1$ và $\\vec{u}_2$ không cùng phương:</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:12px; margin:10px 0;\">\n                    <b>Quy tắc Tích hỗn tạp:</b> Nhập $\\vec{u}_1$ (VctA), $\\vec{u}_2$ (VctB) và $\\vec{M_1M_2}$ (VctC).<br>\n                    Bấm: <code>(OPTN 3 \\times OPTN 4) \\cdot OPTN 5</code><br>\n                    • Nếu kết quả <b>bằng 0</b> $\\implies$ Hai đường thẳng <b>CẮT NHAU</b>.<br>\n                    • Nếu kết quả <b>khác 0</b> $\\implies$ Hai đường thẳng <b>CHÉO NHAU</b>.\n                  </div>\n                  <p>👉 Chỉ mất đúng 10 giây trên máy tính cầm tay, giải quyết triệt để câu hỏi trắc nghiệm!</p>\n                </div>\n            \n    </div>\n    "
    }
  ]
};

  window.CHAPTER5_DATA.bai16_muc1 = {
  "lessonId": "bai16",
  "lessonTitle": "Bài 16: Công thức tính góc trong không gian",
  "sectionId": "bai16_muc1",
  "sectionTitle": "Mục 1: Góc giữa hai đường thẳng",
  "audio": "/audio/bai16_muc1.mp3",
  "audioSrc": "./audio/bai16_muc1.mp3",
  "audio_src": "./audio/bai16_muc1.mp3",
  "timestamp_src": "timestamps/bai16_muc1.json",
  "totalDuration": 352.41,
  "duration": 352.41,
  "title": "Mục 1: Góc giữa hai đường thẳng",
  "owl_tip": "cos φ = |u1 * u2| / (|u1| * |u2|). Luôn có dấu giá trị tuyệt đối trên tử!",
  "timeline": [
    {
      "time": 0,
      "id": "part1"
    },
    {
      "time": 64.42,
      "id": "part2"
    },
    {
      "time": 102.75,
      "id": "part3"
    },
    {
      "time": 115.06,
      "id": "vd1_q"
    },
    {
      "time": 131.93,
      "id": "vd1_a"
    },
    {
      "time": 170.21,
      "id": "vd2_q"
    },
    {
      "time": 188.52,
      "id": "vd2_a"
    },
    {
      "time": 218.11,
      "id": "vd3_q"
    },
    {
      "time": 244.25,
      "id": "vd3_a"
    },
    {
      "time": 290.4,
      "id": "part4"
    },
    {
      "time": 321.86,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Định nghĩa & Công thức góc giữa hai đường thẳng",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Điều kiện vuông góc & Bản chất dấu GTTĐ",
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
      "partTitle": "Phần 5: Mẹo Thầy Cú & Bấm Casio 580 tính góc",
      "scenes": [
        11
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 16: CÔNG THỨC TÍNH GÓC TRONG KHÔNG GIAN",
      "subtitle": "MỤC 1 • GÓC GIỮA HAI ĐƯỜNG THẲNG",
      "startTime": 0,
      "endTime": 64.42,
      "duration": 64.42,
      "mascotMode": "pointer",
      "mascotTip": "Góc giữa 2 đường thẳng luôn thoả mãn 0° ≤ φ ≤ 90°!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Định nghĩa và công thức tính góc</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Trong không gian $Oxyz$, cho $d_1$ có VTCP $\\vec{u}_1=(a_1; b_1; c_1)$ và $d_2$ có VTCP $\\vec{u}_2=(a_2; b_2; c_2)$.</p>\n                  <p>• Góc $\\varphi = (d_1, d_2)$ thỏa mãn $0^\\circ \\le \\varphi \\le 90^\\circ$.</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:14px; margin:12px 0; text-align:center; font-size:18px;\">\n                    $$\\cos \\varphi = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| \\cdot |\\vec{u}_2|} = \\frac{|a_1a_2 + b_1b_2 + c_1c_2|}{\\sqrt{a_1^2+b_1^2+c_1^2} \\cdot \\sqrt{a_2^2+b_2^2+c_2^2}}$$\n                  </div>\n                  <p>👉 Trên tử số <b>bắt buộc có dấu giá trị tuyệt đối</b> để đảm bảo $\\cos \\varphi \\ge 0$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 2,
      "title": "ĐIỀU KIỆN VUÔNG GÓC & BẢN CHẤT DẤU GTTĐ",
      "subtitle": "MỤC 1 • PHÂN BIỆT GÓC GIỮA HAI ĐƯỜNG THẲNG VÀ GÓC HAI VECTƠ",
      "startTime": 64.42,
      "endTime": 102.75,
      "duration": 38.33,
      "mascotMode": "talking",
      "mascotTip": "d1 ⊥ d2 khi và chỉ khi tích vô hướng u1 * u2 = 0!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">2. Điều kiện vuông góc & Bản chất hình học</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <div style=\"background:rgba(52,211,153,0.15); border:1.5px solid #34d399; border-radius:10px; padding:12px; margin:10px 0;\">\n                    <b>Điều kiện vuông góc:</b>\n                    $$d_1 \\perp d_2 \\iff \\vec{u}_1 \\cdot \\vec{u}_2 = 0 \\iff a_1a_2 + b_1b_2 + c_1c_2 = 0$$\n                  </div>\n                  <div style=\"background:rgba(251,191,36,0.15); border:1.5px solid #fbbf24; border-radius:10px; padding:12px; margin:10px 0;\">\n                    ⚠️ <b>So sánh then chốt:</b><br>\n                    • Góc giữa hai vectơ $(\\vec{u}_1, \\vec{u}_2) \\in [0^\\circ; 180^\\circ]$ (có thể tù, $\\cos$ không có GTTĐ).<br>\n                    • Góc giữa hai đường thẳng $(d_1, d_2) \\in [0^\\circ; 90^\\circ]$ (luôn là góc nhọn hoặc vuông, $\\cos$ bắt buộc có GTTĐ).\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "subtitle": "MỤC 1 • 3 BÀI TOÁN TÍNH GÓC VÀ TÌM THAM SỐ",
      "startTime": 102.75,
      "endTime": 115.06,
      "duration": 12.31,
      "mascotMode": "thinking",
      "mascotTip": "Cùng bấm đồng hồ 15s và 30s rèn luyện phản xạ tính góc chính xác!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#fbbf24; font-size:22px; margin-bottom:12px;\">Khám phá 3 dạng toán trọng tâm</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <ul style=\"list-style-type:none; padding-left:0; space-y:8px;\">\n                    <li>📌 <b>Ví dụ 1 (15s):</b> Tính côsin và số đo góc giữa hai đường thẳng chính tắc.</li>\n                    <li>📌 <b>Ví dụ 2 (15s):</b> Tính góc giữa trục toạ độ $Oz$ và đường thẳng tham số.</li>\n                    <li>📌 <b>Ví dụ 3 (30s):</b> Tìm tham số $m$ để góc giữa hai đường thẳng bằng $60^\\circ$.</li>\n                  </ul>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: TÍNH CÔSIN GÓC GIỮA HAI ĐƯỜNG THẲNG",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 115.06,
      "endTime": 131.93,
      "duration": 16.87,
      "mascotMode": "thinking",
      "mascotTip": "Đọc VTCP từ mẫu số: u1 = (1; -1; 2) và u2 = (2; 1; 1). Tính tích vô hướng!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">VÍ DỤ 1: TÍNH CÔSIN GÓC GIỮA HAI ĐƯỜNG THẲNG</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <div style=\"font-size:16.5px; line-height:1.7; color:#f8fafc;\">\n                  <b>Đề bài:</b> Trong không gian $Oxyz$, tính côsin của góc giữa hai đường thẳng:\n                  $$d_1: \\frac{x-1}{1} = \\frac{y+2}{-1} = \\frac{z}{2} \\quad \\text{và} \\quad d_2: \\frac{x+1}{2} = \\frac{y-3}{1} = \\frac{z-1}{1}$$\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 131.93,
      "endTime": 170.21,
      "duration": 38.28,
      "mascotMode": "talking",
      "mascotTip": "Tích vô hướng bằng 3, độ dài mỗi vectơ là căn 6. cos = 3/6 = 1/2!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#10b981; font-size:21px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• $d_1$ có $\\vec{u}_1 = (1; -1; 2) \\implies |\\vec{u}_1| = \\sqrt{1^2+(-1)^2+2^2} = \\sqrt{6}$.</p>\n                  <p>• $d_2$ có $\\vec{u}_2 = (2; 1; 1) \\implies |\\vec{u}_2| = \\sqrt{2^2+1^2+1^2} = \\sqrt{6}$.</p>\n                  <p>• Tích vô hướng: $\\vec{u}_1 \\cdot \\vec{u}_2 = 1(2) + (-1)(1) + 2(1) = 2 - 1 + 2 = 3$.</p>\n                  <div style=\"background:rgba(16,185,129,0.15); border:1.5px solid #10b981; border-radius:10px; padding:12px; margin:8px 0; text-align:center; font-size:17px;\">\n                    $$\\cos(d_1, d_2) = \\frac{|3|}{\\sqrt{6} \\cdot \\sqrt{6}} = \\frac{3}{6} = \\frac{1}{2} \\implies (d_1, d_2) = 60^\\circ$$\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: GÓC GIỮA TRỤC Oz VÀ ĐƯỜNG THẲNG",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 170.21,
      "endTime": 188.52,
      "duration": 18.31,
      "mascotMode": "thinking",
      "mascotTip": "Trục Oz có VTCP là k(0; 0; 1)! Đường thẳng d có u(1; -1; 0).",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">VÍ DỤ 2: GÓC GIỮA TRỤC Oz VÀ ĐƯỜNG THẲNG</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <div style=\"font-size:16.5px; line-height:1.7; color:#f8fafc;\">\n                  <b>Đề bài:</b> Trong không gian $Oxyz$, tính góc giữa trục $Oz$ và đường thẳng $d$ có phương trình tham số:\n                  $$\\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3 \\end{cases}$$\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 188.52,
      "endTime": 218.11,
      "duration": 29.59,
      "mascotMode": "talking",
      "mascotTip": "Tích vô hướng k * u = 0, suy ra d vuông góc Oz, góc bằng 90°!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#10b981; font-size:21px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Trục $Oz$ nhận $\\vec{k} = (0; 0; 1)$ làm VTCP ($|\\vec{k}| = 1$).</p>\n                  <p>• Đường thẳng $d$ có VTCP $\\vec{u} = (1; -1; 0)$ ($|\\vec{u}| = \\sqrt{1^2+(-1)^2+0^2} = \\sqrt{2}$).</p>\n                  <p>• Tích vô hướng: $\\vec{k} \\cdot \\vec{u} = 0\\cdot 1 + 0(-1) + 1\\cdot 0 = 0$.</p>\n                  <div style=\"background:rgba(16,185,129,0.15); border:1.5px solid #10b981; border-radius:10px; padding:12px; margin:8px 0; text-align:center;\">\n                    Vì $\\vec{k} \\cdot \\vec{u} = 0 \\implies d \\perp Oz \\implies (d, Oz) = 90^\\circ$.\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: TÌM THAM SỐ m ĐỂ GÓC BẰNG 60°",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 218.11,
      "endTime": 244.25,
      "duration": 26.14,
      "mascotMode": "thinking",
      "mascotTip": "u1 = (1; m; 1), u2 = (2; 1; -1). cos 60° = 1/2. Bình phương giải PT bậc 2!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">VÍ DỤ 3: TÌM m ĐỂ GÓC BẰNG 60°</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n                <div style=\"font-size:16.5px; line-height:1.7; color:#f8fafc;\">\n                  <b>Đề bài:</b> Trong không gian $Oxyz$, cho hai đường thẳng:\n                  $$d_1: \\frac{x}{1} = \\frac{y-1}{m} = \\frac{z+2}{1} \\quad \\text{và} \\quad d_2: \\frac{x+1}{2} = \\frac{y}{1} = \\frac{z-3}{-1}$$\n                  Tìm tất cả các giá trị của tham số $m$ để góc giữa $d_1$ và $d_2$ bằng $60^\\circ$.\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI TỪNG BƯỚC",
      "startTime": 244.25,
      "endTime": 290.4,
      "duration": 46.15,
      "mascotMode": "talking",
      "mascotTip": "2|m+1| = sqrt(6(m^2+2)) -> 2(m-2)^2 = 0 -> m = 2!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#f59e0b; font-size:21px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• $\\vec{u}_1 = (1; m; 1) \\implies |\\vec{u}_1| = \\sqrt{m^2+2}$; $\\vec{u}_2 = (2; 1; -1) \\implies |\\vec{u}_2| = \\sqrt{6}$.</p>\n                  <p>• $\\vec{u}_1 \\cdot \\vec{u}_2 = 1(2) + m(1) + 1(-1) = m + 1$.</p>\n                  <p>• Vì $(d_1, d_2) = 60^\\circ \\implies \\cos 60^\\circ = \\frac{1}{2}$:</p>\n                  <p>$$\\frac{|m+1|}{\\sqrt{m^2+2}\\cdot \\sqrt{6}} = \\frac{1}{2} \\iff 2|m+1| = \\sqrt{6(m^2+2)}$$</p>\n                  <p>• Bình phương hai vế: $4(m^2+2m+1) = 6(m^2+2) \\iff 2m^2 - 8m + 8 = 0 \\iff 2(m-2)^2 = 0 \\iff m = 2$.</p>\n                  <div style=\"background:rgba(245,158,11,0.15); border:1.5px solid #f59e0b; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    <b>Giá trị cần tìm:</b> $m = 2$\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI SOI BẪY SAI LẦM",
      "subtitle": "PHẦN 4: BẪY QUÊN DẤU GIÁ TRỊ TUYỆT ĐỐI",
      "startTime": 290.4,
      "endTime": 321.86,
      "duration": 31.46,
      "mascotMode": "magnifier",
      "mascotTip": "Góc giữa hai đường thẳng luôn ≤ 90°! Không bao giờ được ra cos âm.",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <div class=\"trap-warning-box\" style=\"margin-bottom:14px;\">\n                  <div class=\"trap-title\">⚠️ BẪY: QUÊN DẤU GIÁ TRỊ TUYỆT ĐỐI TRÊN TỬ SỐ</div>\n                  <p style=\"margin:6px 0 0 0; font-size:16.5px; color:#fecaca;\">\n                    Giả sử tính ra tích vô hướng $\\vec{u}_1 \\cdot \\vec{u}_2 = -3$.<br>\n                    Nhiều bạn viết: $\\cos(d_1, d_2) = \\frac{-3}{6} = -\\frac{1}{2} \\implies (d_1, d_2) = 120^\\circ$ ❌ SAI HOÀN TOÀN!<br>\n                    <b>Chuẩn xác:</b> Góc giữa hai đường thẳng luôn là góc nhọn hoặc vuông ($0^\\circ \\le \\varphi \\le 90^\\circ$), nên bắt buộc phải có giá trị tuyệt đối: $\\cos \\varphi = \\frac{|-3|}{6} = \\frac{1}{2} \\implies \\varphi = 60^\\circ$ ✅!\n                  </p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ & BẤM CASIO 580",
      "subtitle": "PHẦN 5: TÍNH GÓC TRỰC TIẾP BẰNG LỆNH ANGLE",
      "startTime": 321.86,
      "endTime": 352.41,
      "duration": 30.55,
      "mascotMode": "talking",
      "mascotTip": "Menu 5 nhập VctA, VctB -> OPTN mũi tên xuống 3 Angle(VctA, VctB)!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">🦉 Tuyệt kỹ Casio fx-580VNX tính góc trong 5 giây</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <p>• <b>Bước 1:</b> <code>MENU 5</code> $\\rightarrow$ Nhập $\\vec{u}_1$ vào <b>VctA</b>, nhập $\\vec{u}_2$ vào <b>VctB</b>.</p>\n                  <p>• <b>Bước 2:</b> Bấm <code>AC</code> $\\rightarrow$ <code>OPTN</code> $\\rightarrow$ Bấm mũi tên xuống $\\rightarrow$ Chọn <code>3: Angle</code>.</p>\n                  <p>• <b>Bước 3:</b> Bấm <code>OPTN 3</code> (VctA) $\\rightarrow$ phím phẩy <code>Shift )</code> $\\rightarrow$ <code>OPTN 4</code> (VctB) $\\rightarrow$ <code>=</code>.</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:12px; margin:10px 0;\">\n                    <b>Quy tắc góc nhọn:</b> Màn hình hiện số đo góc $\\theta$.<br>\n                    • Nếu $\\theta \\le 90^\\circ \\implies$ Kết quả chính là $\\theta$.<br>\n                    • Nếu $\\theta > 90^\\circ \\implies$ Lấy $180^\\circ - \\theta$ là ra ngay góc giữa hai đường thẳng!\n                  </div>\n                </div>\n            \n    </div>\n    "
    }
  ]
};

  window.CHAPTER5_DATA.bai16_muc2 = {
  "lessonId": "bai16",
  "lessonTitle": "Bài 16: Công thức tính góc trong không gian",
  "sectionId": "bai16_muc2",
  "sectionTitle": "Mục 2: Góc giữa đường thẳng và mặt phẳng",
  "audio": "/audio/bai16_muc2.mp3",
  "audioSrc": "./audio/bai16_muc2.mp3",
  "audio_src": "./audio/bai16_muc2.mp3",
  "timestamp_src": "timestamps/bai16_muc2.json",
  "totalDuration": 306.88,
  "duration": 306.88,
  "title": "Mục 2: Góc giữa đường thẳng và mặt phẳng",
  "owl_tip": "KHÁC LOẠI DÙNG SIN: sin α = |u * n| / (|u| * |n|). Không được nhầm với cos!",
  "timeline": [
    {
      "time": 0,
      "id": "part1"
    },
    {
      "time": 28.63,
      "id": "part2"
    },
    {
      "time": 68.33,
      "id": "part3"
    },
    {
      "time": 79.87,
      "id": "vd1_q"
    },
    {
      "time": 95.61,
      "id": "vd1_a"
    },
    {
      "time": 133.46,
      "id": "vd2_q"
    },
    {
      "time": 147.57,
      "id": "vd2_a"
    },
    {
      "time": 183.35,
      "id": "vd3_q"
    },
    {
      "time": 202.89,
      "id": "vd3_a"
    },
    {
      "time": 255.4,
      "id": "part4"
    },
    {
      "time": 279.95,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Định nghĩa góc giữa đường thẳng và mặt phẳng",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Công thức sin & Bản chất hình học",
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
      "title": "BÀI 16: CÔNG THỨC TÍNH GÓC TRONG KHÔNG GIAN",
      "subtitle": "MỤC 2 • GÓC GIỮA ĐƯỜNG THẲNG VÀ MẶT PHẲNG",
      "startTime": 0,
      "endTime": 28.63,
      "duration": 28.63,
      "mascotMode": "pointer",
      "mascotTip": "Góc giữa d và (P) là góc giữa d và hình chiếu vuông góc d' của nó trên (P)!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Định nghĩa góc giữa đường thẳng và mặt phẳng</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Góc giữa đường thẳng $d$ và mặt phẳng $(P)$ là góc giữa $d$ và hình chiếu vuông góc $d'$ của nó trên $(P)$.</p>\n                  <p>• Ký hiệu: $\\alpha = (d, (P))$, thỏa mãn $0^\\circ \\le \\alpha \\le 90^\\circ$.</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:12px; margin:12px 0;\">\n                    <b>Các trường hợp đặc biệt:</b><br>\n                    • Nếu $d \\perp (P) \\implies (d, (P)) = 90^\\circ$.<br>\n                    • Nếu $d \\parallel (P)$ hoặc $d \\subset (P) \\implies (d, (P)) = 0^\\circ$.\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 2,
      "title": "CÔNG THỨC SIN & BẢN CHẤT HÌNH HỌC",
      "subtitle": "MỤC 2 • CỰC KỲ QUAN TRỌNG: DÙNG HÀM SIN THAY VÌ COS",
      "startTime": 28.63,
      "endTime": 68.33,
      "duration": 39.7,
      "mascotMode": "talking",
      "mascotTip": "Khác loại (Đường thẳng và Mặt phẳng) bắt buộc phải dùng hàm SIN!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">2. Công thức tính sin của góc giữa $d$ và $(P)$</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Cho đường thẳng $d$ có VTCP $\\vec{u}=(a; b; c)$ và mặt phẳng $(P)$ có VTPT $\\vec{n}=(A; B; C)$:</p>\n                  <div style=\"background:rgba(52,211,153,0.15); border:1.5px solid #34d399; border-radius:10px; padding:14px; margin:12px 0; text-align:center; font-size:18px;\">\n                    $$\\sin \\alpha = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|} = \\frac{|aA + bB + cC|}{\\sqrt{a^2+b^2+c^2} \\cdot \\sqrt{A^2+B^2+C^2}}$$\n                  </div>\n                  <p>💡 <b>Tại sao lại là hàm $\\sin$ mà không phải $\\cos$?</b><br>\n                  Vì $\\vec{n} \\perp (P)$, nên góc giữa $\\vec{u}$ và $\\vec{n}$ phụ nhau với góc giữa $d$ và $(P)$ ($\\cos(90^\\circ - \\alpha) = \\sin \\alpha$).</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "subtitle": "MỤC 2 • 3 BÀI TOÁN TÍNH SIN VÀ TÌM THAM SỐ GÓC",
      "startTime": 68.33,
      "endTime": 79.87,
      "duration": 11.54,
      "mascotMode": "thinking",
      "mascotTip": "Cùng rèn luyện kỹ năng đọc VTCP, VTPT và ráp công thức sin chuẩn xác!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#fbbf24; font-size:22px; margin-bottom:12px;\">Khám phá 3 bài toán trọng tâm</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <ul style=\"list-style-type:none; padding-left:0; space-y:8px;\">\n                    <li>📌 <b>Ví dụ 1 (15s):</b> Tính $\\sin$ và số đo góc giữa đường thẳng và mặt phẳng tổng quát.</li>\n                    <li>📌 <b>Ví dụ 2 (15s):</b> Tính góc giữa đường thẳng tham số và mặt phẳng toạ độ $(Oxy)$.</li>\n                    <li>📌 <b>Ví dụ 3 (30s):</b> Tìm tham số $m$ để góc giữa đường thẳng và mặt phẳng bằng $30^\\circ$.</li>\n                  </ul>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: TÍNH SIN GÓC GIỮA d VÀ MẶT PHẲNG (P)",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 79.87,
      "endTime": 95.61,
      "duration": 15.74,
      "mascotMode": "thinking",
      "mascotTip": "u = (2; -1; 1) và n = (1; 1; 2). Áp dụng công thức sin = |u*n| / (|u|*|n|)!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">VÍ DỤ 1: TÍNH SIN GÓC GIỮA d VÀ (P)</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <div style=\"font-size:16.5px; line-height:1.7; color:#f8fafc;\">\n                  <b>Đề bài:</b> Trong không gian $Oxyz$, tính $\\sin$ của góc giữa đường thẳng $d$ và mặt phẳng $(P)$:\n                  $$d: \\frac{x-1}{2} = \\frac{y+1}{-1} = \\frac{z-2}{1} \\quad \\text{và} \\quad (P): x + y + 2z - 5 = 0$$\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 95.61,
      "endTime": 133.46,
      "duration": 37.85,
      "mascotMode": "talking",
      "mascotTip": "|u| = căn 6, |n| = căn 6. u*n = 3. sin = 3/6 = 1/2 -> góc bằng 30°!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#10b981; font-size:21px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• $d$ có VTCP $\\vec{u} = (2; -1; 1) \\implies |\\vec{u}| = \\sqrt{2^2+(-1)^2+1^2} = \\sqrt{6}$.</p>\n                  <p>• $(P)$ có VTPT $\\vec{n} = (1; 1; 2) \\implies |\\vec{n}| = \\sqrt{1^2+1^2+2^2} = \\sqrt{6}$.</p>\n                  <p>• Tích vô hướng: $\\vec{u} \\cdot \\vec{n} = 2(1) + (-1)(1) + 1(2) = 2 - 1 + 2 = 3$.</p>\n                  <div style=\"background:rgba(16,185,129,0.15); border:1.5px solid #10b981; border-radius:10px; padding:12px; margin:8px 0; text-align:center; font-size:17px;\">\n                    $$\\sin(d, (P)) = \\frac{|3|}{\\sqrt{6} \\cdot \\sqrt{6}} = \\frac{3}{6} = \\frac{1}{2} \\implies (d, (P)) = 30^\\circ$$\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: GÓC GIỮA ĐƯỜNG THẲNG VÀ MẶT PHẲNG (Oxy)",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 133.46,
      "endTime": 147.57,
      "duration": 14.11,
      "mascotMode": "thinking",
      "mascotTip": "Mặt phẳng (Oxy) có VTPT k(0; 0; 1)! Tính tích vô hướng u * k.",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">VÍ DỤ 2: GÓC GIỮA ĐƯỜNG THẲNG VÀ MP (Oxy)</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <div style=\"font-size:16.5px; line-height:1.7; color:#f8fafc;\">\n                  <b>Đề bài:</b> Trong không gian $Oxyz$, tính góc giữa đường thẳng $\\Delta$ và mặt phẳng toạ độ $(Oxy)$:\n                  $$\\Delta: \\begin{cases} x = 1 + \\sqrt{2}t \\\\ y = 2 - \\sqrt{2}t \\\\ z = 3 \\end{cases}$$\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 147.57,
      "endTime": 183.35,
      "duration": 35.78,
      "mascotMode": "talking",
      "mascotTip": "Tích vô hướng u * k = 0 -> sin = 0 -> góc bằng 0°. Delta song song với (Oxy)!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#10b981; font-size:21px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Đường thẳng $\\Delta$ có VTCP $\\vec{u} = (\\sqrt{2}; -\\sqrt{2}; 0) \\implies |\\vec{u}| = \\sqrt{2+2+0} = 2$.</p>\n                  <p>• Mặt phẳng toạ độ $(Oxy)$ có phương trình $z = 0$, VTPT $\\vec{k} = (0; 0; 1)$ ($|\\vec{k}| = 1$).</p>\n                  <p>• Tích vô hướng: $\\vec{u} \\cdot \\vec{k} = \\sqrt{2}\\cdot 0 + (-\\sqrt{2})\\cdot 0 + 0\\cdot 1 = 0$.</p>\n                  <div style=\"background:rgba(16,185,129,0.15); border:1.5px solid #10b981; border-radius:10px; padding:12px; margin:8px 0; text-align:center;\">\n                    $$\\sin(\\Delta, (Oxy)) = \\frac{|0|}{2 \\cdot 1} = 0 \\implies (\\Delta, (Oxy)) = 0^\\circ$$\n                    <i>(Do $\\Delta$ song song với mặt phẳng $(Oxy)$ vì cao độ $z = 3 \\ne 0$).</i>\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: TÌM THAM SỐ m ĐỂ GÓC BẰNG 30°",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 183.35,
      "endTime": 202.89,
      "duration": 19.54,
      "mascotMode": "thinking",
      "mascotTip": "u = (1; 0; 1), n = (1; m; 0). sin 30° = 1/2. Lập phương trình tìm m!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">VÍ DỤ 3: TÌM m ĐỂ GÓC BẰNG 30°</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n                <div style=\"font-size:16.5px; line-height:1.7; color:#f8fafc;\">\n                  <b>Đề bài:</b> Trong không gian $Oxyz$, cho đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 \\\\ z = t \\end{cases}$ và mặt phẳng $(P): x + my - 3 = 0$. Tìm tất cả các giá trị của tham số $m$ để góc giữa đường thẳng $d$ và mặt phẳng $(P)$ bằng $30^\\circ$.\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI TỪNG BƯỚC",
      "startTime": 202.89,
      "endTime": 255.4,
      "duration": 52.51,
      "mascotMode": "talking",
      "mascotTip": "1 / (sqrt(2)*sqrt(m^2+1)) = 1/2 -> m^2+1 = 2 -> m = ±1!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#f59e0b; font-size:21px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• $d$ có VTCP $\\vec{u} = (1; 0; 1) \\implies |\\vec{u}| = \\sqrt{1^2+0^2+1^2} = \\sqrt{2}$.</p>\n                  <p>• $(P)$ có VTPT $\\vec{n} = (1; m; 0) \\implies |\\vec{n}| = \\sqrt{1^2+m^2+0^2} = \\sqrt{m^2+1}$.</p>\n                  <p>• $\\vec{u} \\cdot \\vec{n} = 1\\cdot 1 + 0\\cdot m + 1\\cdot 0 = 1$.</p>\n                  <p>• Vì $(d, (P)) = 30^\\circ \\implies \\sin 30^\\circ = \\frac{1}{2}$:</p>\n                  <p>$$\\frac{1}{\\sqrt{2}\\cdot \\sqrt{m^2+1}} = \\frac{1}{2} \\iff \\sqrt{2(m^2+1)} = 2 \\iff 2(m^2+1) = 4 \\iff m^2 = 1 \\iff m = \\pm 1$$</p>\n                  <div style=\"background:rgba(245,158,11,0.15); border:1.5px solid #f59e0b; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    <b>Giá trị cần tìm:</b> $m = 1$ hoặc $m = -1$\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI SOI BẪY SAI LẦM",
      "subtitle": "PHẦN 4: BẪY KINH ĐIỂN DÙNG NHẦM HÀM COS",
      "startTime": 255.4,
      "endTime": 279.95,
      "duration": 24.55,
      "mascotMode": "magnifier",
      "mascotTip": "Đường thẳng và Mặt phẳng là KHÁC LOẠI -> Bắt buộc dùng hàm SIN!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <div class=\"trap-warning-box\" style=\"margin-bottom:14px;\">\n                  <div class=\"trap-title\">⚠️ BẪY: ÁP DỤNG NHẦM HÀM COS THAY VÌ SIN</div>\n                  <p style=\"margin:6px 0 0 0; font-size:16.5px; color:#fecaca;\">\n                    Rất nhiều bạn có thói quen: Cứ tính góc trong không gian là bấm $\\cos$!<br>\n                    Ví dụ khi tính ra phân số $\\frac{1}{2}$, nếu bấm $\\arccos(1/2) = 60^\\circ$ ❌ SAI HOÀN TOÀN!<br>\n                    <b>Chuẩn xác:</b> Giữa đường thẳng và mặt phẳng là hàm $\\sin$! Phải lấy $\\arcsin(1/2) = 30^\\circ$ ✅!\n                  </p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ & BẤM CASIO 580",
      "subtitle": "PHẦN 5: BẤM GÓC ĐƯỜNG THẲNG VÀ MẶT PHẲNG",
      "startTime": 279.95,
      "endTime": 306.88,
      "duration": 26.93,
      "mascotMode": "talking",
      "mascotTip": "Bấm Angle(u, n) được θ -> Góc cần tìm = |90° - θ|!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">🦉 Tuyệt kỹ Casio fx-580VNX tính góc với mặt phẳng</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <p>• Khi tính góc giữa $\\vec{u}$ (VctA) và $\\vec{n}$ (VctB) bằng lệnh <code>Angle(VctA, VctB)</code>:</p>\n                  <p>• Máy tính sẽ trả về góc $\\theta$ giữa hai vectơ.</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:12px; margin:10px 0;\">\n                    <b>Quy tắc góc phụ nhau:</b><br>\n                    Góc $\\alpha$ giữa đường thẳng và mặt phẳng chính là:\n                    $$\\alpha = |90^\\circ - \\theta|$$\n                    <i>(Ví dụ máy ra $\\theta = 60^\\circ \\implies \\alpha = 90^\\circ - 60^\\circ = 30^\\circ$).</i>\n                  </div>\n                  <p>👉 Nhanh như chớp, không bao giờ nhầm lẫn giữa sin và cos!</p>\n                </div>\n            \n    </div>\n    "
    }
  ]
};

  window.CHAPTER5_DATA.bai16_muc3 = {
  "lessonId": "bai16",
  "lessonTitle": "Bài 16: Công thức tính góc trong không gian",
  "sectionId": "bai16_muc3",
  "sectionTitle": "Mục 3: Góc giữa hai mặt phẳng",
  "audio": "/audio/bai16_muc3.mp3",
  "audioSrc": "./audio/bai16_muc3.mp3",
  "audio_src": "./audio/bai16_muc3.mp3",
  "timestamp_src": "timestamps/bai16_muc3.json",
  "totalDuration": 352.14,
  "duration": 352.14,
  "title": "Mục 3: Góc giữa hai mặt phẳng",
  "owl_tip": "CÙNG LOẠI DÙNG COS: cos β = |n1 * n2| / (|n1| * |n2|). Thần chú: CÙNG COS - KHÁC SIN!",
  "timeline": [
    {
      "time": 0,
      "id": "part1"
    },
    {
      "time": 29.23,
      "id": "part2"
    },
    {
      "time": 84.89,
      "id": "part3"
    },
    {
      "time": 96.87,
      "id": "vd1_q"
    },
    {
      "time": 115.66,
      "id": "vd1_a"
    },
    {
      "time": 154.42,
      "id": "vd2_q"
    },
    {
      "time": 165.32,
      "id": "vd2_a"
    },
    {
      "time": 205.76,
      "id": "vd3_q"
    },
    {
      "time": 229.71,
      "id": "vd3_a"
    },
    {
      "time": 287.72,
      "id": "part4"
    },
    {
      "time": 316.76,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Định nghĩa góc giữa hai mặt phẳng",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Công thức cos & Điều kiện vuông góc",
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
      "title": "BÀI 16: CÔNG THỨC TÍNH GÓC TRONG KHÔNG GIAN",
      "subtitle": "MỤC 3 • GÓC GIỮA HAI MẶT PHẲNG",
      "startTime": 0,
      "endTime": 29.23,
      "duration": 29.23,
      "mascotMode": "pointer",
      "mascotTip": "Góc giữa 2 mặt phẳng là góc giữa 2 đường thẳng vuông góc với chúng!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Định nghĩa góc giữa hai mặt phẳng</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Góc giữa hai mặt phẳng $(P)$ và $(Q)$ là góc giữa hai đường thẳng lần lượt vuông góc với $(P)$ và $(Q)$.</p>\n                  <p>• Ký hiệu: $\\beta = ((P), (Q))$, thỏa mãn $0^\\circ \\le \\beta \\le 90^\\circ$.</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:12px; margin:12px 0;\">\n                    <b>Các trường hợp đặc biệt:</b><br>\n                    • Nếu $(P) \\parallel (Q)$ hoặc $(P) \\equiv (Q) \\implies ((P), (Q)) = 0^\\circ$.<br>\n                    • Nếu $(P) \\perp (Q) \\implies ((P), (Q)) = 90^\\circ$.\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 2,
      "title": "CÔNG THỨC COS GÓC GIỮA HAI MẶT PHẲNG",
      "subtitle": "MỤC 3 • ĐIỀU KIỆN HAI MẶT PHẲNG VUÔNG GÓC",
      "startTime": 29.23,
      "endTime": 84.89,
      "duration": 55.66,
      "mascotMode": "talking",
      "mascotTip": "Hai mặt phẳng là CÙNG LOẠI -> Dùng hàm COS!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">2. Công thức cos góc giữa hai mặt phẳng</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Cho $(P)$ có VTPT $\\vec{n}_1=(A_1; B_1; C_1)$ và $(Q)$ có VTPT $\\vec{n}_2=(A_2; B_2; C_2)$:</p>\n                  <div style=\"background:rgba(52,211,153,0.15); border:1.5px solid #34d399; border-radius:10px; padding:14px; margin:12px 0; text-align:center; font-size:18px;\">\n                    $$\\cos \\beta = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| \\cdot |\\vec{n}_2|} = \\frac{|A_1A_2 + B_1B_2 + C_1C_2|}{\\sqrt{A_1^2+B_1^2+C_1^2} \\cdot \\sqrt{A_2^2+B_2^2+C_2^2}}$$\n                  </div>\n                  <div style=\"background:rgba(251,191,36,0.15); border:1.5px solid #fbbf24; border-radius:10px; padding:10px; margin:10px 0;\">\n                    <b>Điều kiện vuông góc:</b> $(P) \\perp (Q) \\iff \\vec{n}_1 \\cdot \\vec{n}_2 = 0 \\iff A_1A_2 + B_1B_2 + C_1C_2 = 0$.\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "subtitle": "MỤC 3 • 3 BÀI TOÁN TÍNH GÓC GIỮA HAI MẶT PHẲNG",
      "startTime": 84.89,
      "endTime": 96.87,
      "duration": 11.98,
      "mascotMode": "thinking",
      "mascotTip": "Cùng rèn luyện tính côsin, góc với mặt phẳng toạ độ và tìm m góc 45°!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#fbbf24; font-size:22px; margin-bottom:12px;\">Khám phá 3 bài toán trọng tâm</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <ul style=\"list-style-type:none; padding-left:0; space-y:8px;\">\n                    <li>📌 <b>Ví dụ 1 (15s):</b> Tính côsin của góc giữa hai mặt phẳng có dạng tổng quát.</li>\n                    <li>📌 <b>Ví dụ 2 (15s):</b> Tính góc giữa mặt phẳng bất kỳ và mặt phẳng toạ độ $(Oxy)$.</li>\n                    <li>📌 <b>Ví dụ 3 (30s):</b> Tìm tham số $m$ để góc giữa hai mặt phẳng bằng $45^\\circ$.</li>\n                  </ul>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: TÍNH CÔSIN GÓC GIỮA (P) VÀ (Q)",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 96.87,
      "endTime": 115.66,
      "duration": 18.79,
      "mascotMode": "thinking",
      "mascotTip": "n1 = (1; 2; -2) và n2 = (2; -2; 1). Tính độ dài mỗi vectơ và tích vô hướng!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">VÍ DỤ 1: TÍNH CÔSIN GÓC GIỮA (P) VÀ (Q)</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <div style=\"font-size:16.5px; line-height:1.7; color:#f8fafc;\">\n                  <b>Đề bài:</b> Trong không gian $Oxyz$, tính côsin của góc giữa hai mặt phẳng:\n                  $$(P): x + 2y - 2z + 1 = 0 \\quad \\text{và} \\quad (Q): 2x - 2y + z - 3 = 0$$\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 115.66,
      "endTime": 154.42,
      "duration": 38.76,
      "mascotMode": "talking",
      "mascotTip": "|n1| = 3, |n2| = 3. n1*n2 = -4. Nhớ lấy giá trị tuyệt đối |-4| = 4 -> cos = 4/9!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#10b981; font-size:21px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• $(P)$ có VTPT $\\vec{n}_1 = (1; 2; -2) \\implies |\\vec{n}_1| = \\sqrt{1^2+2^2+(-2)^2} = \\sqrt{9} = 3$.</p>\n                  <p>• $(Q)$ có VTPT $\\vec{n}_2 = (2; -2; 1) \\implies |\\vec{n}_2| = \\sqrt{2^2+(-2)^2+1^2} = \\sqrt{9} = 3$.</p>\n                  <p>• Tích vô hướng: $\\vec{n}_1 \\cdot \\vec{n}_2 = 1(2) + 2(-2) + (-2)(1) = 2 - 4 - 2 = -4$.</p>\n                  <div style=\"background:rgba(16,185,129,0.15); border:1.5px solid #10b981; border-radius:10px; padding:12px; margin:8px 0; text-align:center; font-size:17px;\">\n                    $$\\cos((P), (Q)) = \\frac{|-4|}{3 \\cdot 3} = \\frac{4}{9}$$\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: GÓC GIỮA (P) VÀ MẶT PHẲNG TOẠ ĐỘ (Oxy)",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 154.42,
      "endTime": 165.32,
      "duration": 10.9,
      "mascotMode": "thinking",
      "mascotTip": "(P) có n1 = (1; 0; -1). Mặt phẳng (Oxy) có k = (0; 0; 1)!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">VÍ DỤ 2: GÓC GIỮA (P) VÀ MẶT PHẲNG (Oxy)</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <div style=\"font-size:16.5px; line-height:1.7; color:#f8fafc;\">\n                  <b>Đề bài:</b> Trong không gian $Oxyz$, tính góc giữa mặt phẳng $(P): x - z + 2 = 0$ và mặt phẳng toạ độ $(Oxy)$.\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 165.32,
      "endTime": 205.76,
      "duration": 40.44,
      "mascotMode": "talking",
      "mascotTip": "n1*k = -1 -> cos = |-1| / (căn 2 * 1) = căn 2 / 2 -> góc bằng 45°!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#10b981; font-size:21px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• $(P)$ có VTPT $\\vec{n}_1 = (1; 0; -1) \\implies |\\vec{n}_1| = \\sqrt{1^2+0^2+(-1)^2} = \\sqrt{2}$.</p>\n                  <p>• Mặt phẳng toạ độ $(Oxy)$ có phương trình $z = 0$, VTPT $\\vec{k} = (0; 0; 1)$ ($|\\vec{k}| = 1$).</p>\n                  <p>• Tích vô hướng: $\\vec{n}_1 \\cdot \\vec{k} = 1\\cdot 0 + 0\\cdot 0 + (-1)\\cdot 1 = -1$.</p>\n                  <div style=\"background:rgba(16,185,129,0.15); border:1.5px solid #10b981; border-radius:10px; padding:12px; margin:8px 0; text-align:center; font-size:17px;\">\n                    $$\\cos((P), (Oxy)) = \\frac{|-1|}{\\sqrt{2} \\cdot 1} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\implies ((P), (Oxy)) = 45^\\circ$$\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: TÌM THAM SỐ m ĐỂ GÓC BẰNG 45°",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 205.76,
      "endTime": 229.71,
      "duration": 23.95,
      "mascotMode": "thinking",
      "mascotTip": "n1 = (2; -1; 2), n2 = (1; 1; m). cos 45° = 1/căn 2. Bình phương giải PT!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">VÍ DỤ 3: TÌM m ĐỂ GÓC BẰNG 45°</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n                <div style=\"font-size:16.5px; line-height:1.7; color:#f8fafc;\">\n                  <b>Đề bài:</b> Trong không gian $Oxyz$, cho hai mặt phẳng:\n                  $$(P): 2x - y + 2z - 1 = 0 \\quad \\text{và} \\quad (Q): x + y + mz + 5 = 0$$\n                  Tìm tất cả các giá trị của tham số $m$ để góc giữa hai mặt phẳng $(P)$ và $(Q)$ bằng $45^\\circ$.\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI TỪNG BƯỚC",
      "startTime": 229.71,
      "endTime": 287.72,
      "duration": 58.01,
      "mascotMode": "talking",
      "mascotTip": "căn 2 * |2m+1| = 3 * sqrt(m^2+2) -> (m-4)^2 = 0 -> m = 4!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#f59e0b; font-size:21px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• $\\vec{n}_1 = (2; -1; 2) \\implies |\\vec{n}_1| = 3$; $\\vec{n}_2 = (1; 1; m) \\implies |\\vec{n}_2| = \\sqrt{m^2+2}$.</p>\n                  <p>• $\\vec{n}_1 \\cdot \\vec{n}_2 = 2(1) + (-1)(1) + 2(m) = 2m + 1$.</p>\n                  <p>• Vì $((P), (Q)) = 45^\\circ \\implies \\cos 45^\\circ = \\frac{1}{\\sqrt{2}}$:</p>\n                  <p>$$\\frac{|2m+1|}{3\\sqrt{m^2+2}} = \\frac{1}{\\sqrt{2}} \\iff \\sqrt{2}|2m+1| = 3\\sqrt{m^2+2}$$</p>\n                  <p>• Bình phương hai vế: $2(4m^2+4m+1) = 9(m^2+2) \\iff m^2 - 8m + 16 = 0 \\iff (m-4)^2 = 0 \\iff m = 4$.</p>\n                  <div style=\"background:rgba(245,158,11,0.15); border:1.5px solid #f59e0b; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    <b>Giá trị cần tìm:</b> $m = 4$\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI SOI BẪY SAI LẦM",
      "subtitle": "PHẦN 4: THẦN CHÚ 'CÙNG COS - KHÁC SIN'",
      "startTime": 287.72,
      "endTime": 316.76,
      "duration": 29.04,
      "mascotMode": "magnifier",
      "mascotTip": "Cùng loại (Đường-Đường, Mặt-Mặt) dùng COS. Khác loại (Đường-Mặt) dùng SIN!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <div class=\"trap-warning-box\" style=\"margin-bottom:14px;\">\n                  <div class=\"trap-title\">🦉 THẦN CHÚ BẤT HỦ: CÙNG COS - KHÁC SIN</div>\n                  <div style=\"margin:8px 0 0 0; font-size:16px; color:#f8fafc; line-height:1.7;\">\n                    <p>• <b>Đường thẳng & Đường thẳng:</b> Cùng loại $\\implies \\cos \\varphi = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| \\cdot |\\vec{u}_2|}$</p>\n                    <p>• <b>Mặt phẳng & Mặt phẳng:</b> Cùng loại $\\implies \\cos \\beta = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| \\cdot |\\vec{n}_2|}$</p>\n                    <p>• <b>Đường thẳng & Mặt phẳng:</b> Khác loại $\\implies \\sin \\alpha = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|}$</p>\n                    <p style=\"color:#fecaca;\"><b>Quy ước chung:</b> Cả ba công thức trên tử số LUÔN CÓ dấu giá trị tuyệt đối!</p>\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ & BẤM CASIO 580",
      "subtitle": "PHẦN 5: BẤM GÓC GIỮA HAI MẶT PHẲNG TRONG 5 GIÂY",
      "startTime": 316.76,
      "endTime": 352.14,
      "duration": 35.38,
      "mascotMode": "talking",
      "mascotTip": "Nhập n1 vào VctA, n2 vào VctB -> Angle(VctA, VctB) -> Nhọn lấy luôn, Tù lấy 180° - Ans!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">🦉 Tuyệt kỹ Casio fx-580VNX tính góc 2 mặt phẳng</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <p>• <b>Bước 1:</b> <code>MENU 5</code> $\\rightarrow$ Nhập $\\vec{n}_1$ vào <b>VctA</b>, nhập $\\vec{n}_2$ vào <b>VctB</b>.</p>\n                  <p>• <b>Bước 2:</b> Bấm <code>AC</code> $\\rightarrow$ <code>OPTN</code> $\\rightarrow$ Mũi tên xuống $\\rightarrow$ Chọn <code>3: Angle</code>.</p>\n                  <p>• <b>Bước 3:</b> Bấm <code>OPTN 3</code> (VctA) $\\rightarrow$ <code>Shift )</code> $\\rightarrow$ <code>OPTN 4</code> (VctB) $\\rightarrow$ <code>=</code>.</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:12px; margin:10px 0;\">\n                    • Nếu màn hình hiển thị góc $\\le 90^\\circ \\implies$ Đó chính là số đo góc giữa hai mặt phẳng.<br>\n                    • Nếu góc $> 90^\\circ \\implies$ Bấm tiếp <code>180 - Ans =</code> là ra ngay kết quả chính xác 100%!\n                  </div>\n                </div>\n            \n    </div>\n    "
    }
  ]
};
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.CHAPTER5_DATA;
}
