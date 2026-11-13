/* =========================================================================
   CHƯƠNG IV: NGUYÊN HÀM VÀ TÍCH PHÂN - TOÁN 12 KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
   Bài 11: Nguyên hàm (Mục 1, Mục 2, Mục 3) - Rich Interactive Slides & Audio
   ========================================================================= */

if (typeof window !== 'undefined') {
  window.CHAPTER4_DATA = window.CHAPTER4_DATA || {};

  window.CHAPTER4_DATA.bai11_muc1 = {
  "lessonId": "bai11",
  "lessonTitle": "Bài 11: Nguyên hàm",
  "sectionId": "bai11_muc1",
  "sectionTitle": "Mục 1: Khái niệm nguyên hàm",
  "audio": "/audio/bai11_muc1.mp3",
  "audioSrc": "./audio/bai11_muc1.mp3",
  "audio_src": "./audio/bai11_muc1.mp3",
  "timestamp_src": "timestamps/bai11_muc1.json",
  "totalDuration": 269.47,
  "duration": 269.47,
  "title": "Mục 1: Khái niệm nguyên hàm",
  "owl_tip": "F'(x) = f(x); Họ nguyên hàm luôn có dạng F(x) + C!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 54.17,
      "id": "part2"
    },
    {
      "time": 94.32,
      "id": "part3"
    },
    {
      "time": 105.1,
      "id": "vd1_q"
    },
    {
      "time": 116.93,
      "id": "vd1_a"
    },
    {
      "time": 131.76,
      "id": "vd2_q"
    },
    {
      "time": 145.39,
      "id": "vd2_a"
    },
    {
      "time": 159.36,
      "id": "vd3_q"
    },
    {
      "time": 184.39,
      "id": "vd3_a"
    },
    {
      "time": 230.37,
      "id": "part4"
    },
    {
      "time": 254.23,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm nguyên hàm",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Định lí về họ nguyên hàm F(x) + C",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ rèn luyện điển hình (3 Ví dụ)",
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
      "partTitle": "Phần 4: Cú Thông Thái cảnh báo bẫy",
      "scenes": [
        10
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo Thầy Cú ghi nhớ nhanh",
      "scenes": [
        11
      ]
    }
  ],
  "content": "\n      <div id=\"part1\">\n        <h3>1. Khái niệm nguyên hàm</h3>\n        <p>• <b>Định nghĩa:</b> Cho $f(x)$ xác định trên khoảng $K$. Hàm số $F(x)$ được gọi là một <b>nguyên hàm</b> của $f(x)$ trên $K$ nếu:\n        $$F'(x) = f(x), \\quad \\forall x \\in K$$</p>\n      </div>\n      <div id=\"part2\">\n        <h3>2. Định lí về họ nguyên hàm</h3>\n        <p>• Nếu $F(x)$ là một nguyên hàm của $f(x)$ thì mọi nguyên hàm đều có dạng:\n        $$\\int f(x) \\, dx = F(x) + C \\quad (C \\in \\mathbb{R})$$\n        • $\\int$ là dấu nguyên hàm; $f(x)$ là hàm số dưới dấu nguyên hàm; $f(x)dx$ là vi phân.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ rèn luyện điển hình</h3></div>\n      <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:18px; margin:10px 0; background:#0f172a;\">\n        \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Tìm nguyên hàm cơ bản</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n        <div id=\"vd1_q\"><p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Tìm một nguyên hàm $F(x)$ của hàm số $f(x) = 3x^2$ trên $\\mathbb{R}$, và viết công thức họ tất cả các nguyên hàm của $f(x)$.</p></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          • Vì $(x^3)' = 3x^2$ nên $F(x) = x^3$ là một nguyên hàm của $f(x)$.<br>\n          • Họ tất cả các nguyên hàm: $\\int 3x^2 \\, dx = x^3 + C$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:18px; margin:10px 0; background:#0f172a;\">\n        \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Tìm nguyên hàm thoả mãn F(0) = 5</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n        <div id=\"vd2_q\"><p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Cho $F(x)$ là một nguyên hàm của hàm số $f(x) = \\cos x$, biết rằng $F(0) = 5$. Hãy xác định hàm số $F(x)$.</p></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          • Ta có: $\\int \\cos x \\, dx = \\sin x + C \\implies F(x) = \\sin x + C$.<br>\n          • Vì $F(0) = 5 \\implies \\sin 0 + C = 5 \\implies C = 5$.<br>\n          • Vậy $F(x) = \\sin x + 5$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:18px; margin:10px 0; background:#0f172a;\">\n        \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Bài toán chuyển động s(t) & vận tốc v(t)</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng thực tế)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n        <div id=\"vd3_q\"><p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Một vật chuyển động thẳng với vận tốc $v(t) = 3t^2 - 2t + 4\\text{ (m/s)}$.<br>Tại thời điểm ban đầu $t = 0$, vật ở toạ độ $s(0) = 10\\text{ m}$.<br>a) Tìm phương trình toạ độ $s(t)$ của vật.<br>b) Tính quãng đường vật đi được sau 3 giây.</p></div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          • Vận tốc $v(t) = s'(t) \\implies s(t) = \\int (3t^2 - 2t + 4) \\, dt = t^3 - t^2 + 4t + C$.<br>\n          • Vì $s(0) = 10 \\implies C = 10 \\implies s(t) = t^3 - t^2 + 4t + 10\\text{ (m)}$.<br>\n          • Tại $t = 3$: $s(3) = 3^3 - 3^2 + 4(3) + 10 = 27 - 9 + 12 + 10 = 40\\text{ (m)}$.<br>\n          • Quãng đường vật đi được trong 3 giây đầu: $S = s(3) - s(0) = 40 - 10 = 30\\text{ (m)}$.\n        </div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy quên hằng số C</h3><p>Nhớ: Luôn cộng C khi tìm họ nguyên hàm!</p></div>\n      <div id=\"part5\"><h3>5. Mẹo đạo hàm ngược</h3><p>Kiểm tra: Lấy đạo hàm của F(x), nếu ra f(x) là chuẩn 100%!</p></div>\n    ",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 11: NGUYÊN HÀM (CHƯƠNG IV)",
      "subtitle": "PHẦN 1: KHÁI NIỆM NGUYÊN HÀM",
      "startTime": 0.0,
      "endTime": 54.17,
      "duration": 54.17,
      "mascotMode": "talking",
      "mascotTip": "F'(x) = f(x) trên khoảng K!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:24px; margin-bottom:12px;\">1. Định nghĩa Nguyên hàm</h3>\n                  <div style=\"background:rgba(15,23,42,0.8); border:1.5px solid #38bdf8; border-radius:10px; padding:16px; margin-bottom:14px;\">\n                    Cho hàm số $f(x)$ xác định trên khoảng $K$.<br>\n                    Hàm số $F(x)$ được gọi là một <b>nguyên hàm</b> của $f(x)$ trên $K$ nếu:\n                    <div style=\"font-size:22px; color:#fde047; font-weight:700; margin:8px 0; text-align:center;\">\n                      $$F'(x) = f(x), \\quad \\forall x \\in K$$\n                    </div>\n                  </div>\n                  <div style=\"background:rgba(16,185,129,0.12); border-left:4px solid #10b981; padding:10px 14px; border-radius:6px; color:#a7f3d0;\">\n                    <b>Bản chất:</b> Nguyên hàm là phép toán ngược lại của phép lấy đạo hàm!\n                  </div>\n                </div>\n            "
    },
    {
      "sceneIndex": 2,
      "title": "ĐỊNH LÍ VỀ HỌ NGUYÊN HÀM",
      "subtitle": "PHẦN 2: KÍ HIỆU DẤU NGUYÊN HÀM",
      "startTime": 54.17,
      "endTime": 94.32,
      "duration": 40.15,
      "mascotMode": "thinking",
      "mascotTip": "Họ nguyên hàm là vô số đường cong tịnh tiến theo trục Oy!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:24px; margin-bottom:12px;\">2. Định lí về Họ tất cả các nguyên hàm</h3>\n                  <div style=\"background:rgba(15,23,42,0.8); border:1px solid #38bdf8; border-radius:10px; padding:16px; margin-bottom:12px;\">\n                    Nếu $F(x)$ là một nguyên hàm của $f(x)$ trên $K$ thì họ nguyên hàm là:\n                    <div style=\"font-size:22px; color:#fde047; font-weight:700; margin:6px 0; text-align:center;\">\n                      $$\\int f(x) \\, dx = F(x) + C \\quad (C \\in \\mathbb{R})$$\n                    </div>\n                    • $\\int$: Dấu nguyên hàm.<br>\n                    • $f(x)$: Hàm số dưới dấu nguyên hàm.<br>\n                    • $f(x)dx$: Biểu thức vi phân của $F(x)$.\n                  </div>\n                </div>\n            "
    },
    {
      "sceneIndex": 3,
      "title": "LUYỆN TẬP VÍ DỤ NGUYÊN HÀM",
      "subtitle": "PHẦN 3: CÁC VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "startTime": 94.32,
      "endTime": 105.1,
      "duration": 10.78,
      "mascotMode": "talking",
      "mascotTip": "Rèn luyện cùng đồng hồ 15s / 30s!",
      "bodyHtml": "\n                <div style=\"text-align:center; padding:40px 20px;\">\n                  <h2 style=\"color:#38bdf8; font-size:28px; margin-bottom:15px;\">Phần 3: Các ví dụ rèn luyện điển hình</h2>\n                  <p style=\"font-size:18px; color:#94a3b8; max-width:550px; margin:0 auto 20px;\">\n                    Cùng Thầy Thuấn làm quen với 3 bài toán trọng tâm về khái niệm nguyên hàm và ứng dụng chuyển động.\n                  </p>\n                </div>\n            "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: NGUYÊN HÀM CỦA 3x²",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 105.1,
      "endTime": 116.93,
      "duration": 11.83,
      "mascotMode": "thinking",
      "mascotTip": "(x³)' = 3x² => F(x) = x³!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Tìm nguyên hàm cơ bản</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n      <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Tìm một nguyên hàm $F(x)$ của hàm số $f(x) = 3x^2$ trên $\\mathbb{R}$, và viết công thức họ tất cả các nguyên hàm của $f(x)$.</p>\n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: ∫ 3x² dx = x³ + C",
      "startTime": 116.93,
      "endTime": 131.76,
      "duration": 14.83,
      "mascotMode": "talking",
      "mascotTip": "Đạo hàm ngược lại là ra ngay!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1:</h3>\n                  <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                    • Ta nhận thấy: $(x^3)' = 3x^2$.<br>\n                    • Do đó, $F(x) = x^3$ là một nguyên hàm của $f(x) = 3x^2$ trên $\\mathbb{R}$.<br>\n                    • Họ tất cả các nguyên hàm:\n                    <div style=\"font-size:20px; color:#fde047; font-weight:700; margin:8px 0;\">\n                      $$\\int 3x^2 \\, dx = x^3 + C \\quad (C \\in \\mathbb{R})$$\n                    </div>\n                  </div>\n                </div>\n            "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: TÌM NGUYÊN HÀM F(0) = 5",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 131.76,
      "endTime": 145.39,
      "duration": 13.63,
      "mascotMode": "thinking",
      "mascotTip": "∫ cos x dx = sin x + C; sin 0 + C = 5 => C = 5!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Tìm nguyên hàm thoả mãn F(0) = 5</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n      <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Cho $F(x)$ là một nguyên hàm của hàm số $f(x) = \\cos x$, biết rằng $F(0) = 5$. Hãy xác định hàm số $F(x)$.</p>\n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: F(x) = sin x + 5",
      "startTime": 145.39,
      "endTime": 159.36,
      "duration": 13.97,
      "mascotMode": "talking",
      "mascotTip": "Thay x = 0 để xác định chính xác hằng số C!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2:</h3>\n                  <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                    • Vì $(\\sin x)' = \\cos x$ nên họ nguyên hàm của $\\cos x$ là:\n                    $$F(x) = \\int \\cos x \\, dx = \\sin x + C$$\n                    • Giả thiết cho $F(0) = 5 \\implies \\sin 0 + C = 5 \\implies 0 + C = 5 \\implies C = 5$.<br>\n                    • <b>Kết luận:</b> $F(x) = \\sin x + 5$.\n                  </div>\n                </div>\n            "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: TOẠ ĐỘ & QUÃNG ĐƯỜNG",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 159.36,
      "endTime": 184.39,
      "duration": 25.03,
      "mascotMode": "thinking",
      "mascotTip": "s(t) = ∫ v(t) dt; s(0) = 10 => C = 10!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Bài toán chuyển động s(t) & vận tốc v(t)</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng thực tế)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n      <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Một vật chuyển động thẳng với vận tốc $v(t) = 3t^2 - 2t + 4\\text{ (m/s)}$.<br>Tại thời điểm ban đầu $t = 0$, vật ở toạ độ $s(0) = 10\\text{ m}$.<br>a) Tìm phương trình toạ độ $s(t)$ của vật.<br>b) Tính quãng đường vật đi được sau 3 giây.</p>\n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: s(t) = t³ - t² + 4t + 10; S = 30m",
      "startTime": 184.39,
      "endTime": 230.37,
      "duration": 45.98,
      "mascotMode": "talking",
      "mascotTip": "Quãng đường vật đi được trong 3 giây là s(3) - s(0) = 30m!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3:</h3>\n                  <div style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    • Ta có: $s(t) = \\int v(t) \\, dt = \\int (3t^2 - 2t + 4) \\, dt = t^3 - t^2 + 4t + C$.<br>\n                    • Vì $s(0) = 10 \\implies 0 - 0 + 0 + C = 10 \\implies C = 10$.<br>\n                    $\\implies$ <b>Phương trình toạ độ:</b> $s(t) = t^3 - t^2 + 4t + 10\\text{ (m)}$.<br>\n                    • Sau 3 giây, toạ độ của vật: $s(3) = 3^3 - 3^2 + 4(3) + 10 = 40\\text{ (m)}$.<br>\n                    • <b>Quãng đường vật đi được:</b> $S = s(3) - s(0) = 40 - 10 = 30\\text{ (m)}$.\n                  </div>\n                </div>\n            "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI CẢNH BÁO BẪY",
      "subtitle": "PHẦN 4: BẪY QUÊN HẰNG SỐ C",
      "startTime": 230.37,
      "endTime": 254.23,
      "duration": 23.86,
      "mascotMode": "warning",
      "mascotTip": "Luôn nhớ cộng C khi viết họ nguyên hàm!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:14px;\">4. Cảnh báo bẫy: Quên hằng số tích hợp $C$</h3>\n                  <div style=\"background:rgba(244,63,94,0.12); border-left:4px solid #f43f5e; padding:14px 18px; border-radius:8px;\">\n                    <b style=\"color:#f43f5e; font-size:19px;\">Sai lầm chết người:</b><br>\n                    Viết $\\int 3x^2 \\, dx = x^3$ là thiếu chính xác! Mỗi nguyên hàm chỉ là một hàm cụ thể.<br>\n                    👉 <b>Quy tắc bắt buộc:</b> Họ nguyên hàm phải có $\\mathbf{+ C}$ để biểu diễn toàn bộ các đường cong đồng dạng tịnh tiến theo phương thẳng đứng.\n                  </div>\n                </div>\n            "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ GHI NHỚ",
      "subtitle": "PHẦN 5: KIỂM TRA ĐẠO HÀM NGƯỢC",
      "startTime": 254.23,
      "endTime": 269.47,
      "duration": 15.24,
      "mascotMode": "talking",
      "mascotTip": "Lấy đạo hàm của F(x) kiểm tra xem có bằng f(x) không!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">5. Bí quyết Thầy Cú: Đạo hàm ngược kiểm chứng</h3>\n                  <div style=\"background:rgba(15,23,42,0.8); border:1.5px solid #38bdf8; border-radius:10px; padding:18px;\">\n                    Khi phân vân giữa 4 phương án trắc nghiệm xem hàm nào là nguyên hàm của $f(x)$:<br>\n                    👉 <b>Lấy ngay đạo hàm</b> của từng đáp án $F(x)$.<br>\n                    Đáp án nào có $F'(x) = f(x)$ thì khoanh ngay không cần biến đổi nguyên hàm phức tạp!\n                  </div>\n                </div>\n            "
    }
  ]
};

  window.CHAPTER4_DATA.bai11_muc2 = {
  "lessonId": "bai11",
  "lessonTitle": "Bài 11: Nguyên hàm",
  "sectionId": "bai11_muc2",
  "sectionTitle": "Mục 2: Tính chất cơ bản của nguyên hàm",
  "audio": "/audio/bai11_muc2.mp3",
  "audioSrc": "./audio/bai11_muc2.mp3",
  "audio_src": "./audio/bai11_muc2.mp3",
  "timestamp_src": "timestamps/bai11_muc2.json",
  "totalDuration": 227.32,
  "duration": 227.32,
  "title": "Mục 2: Tính chất cơ bản của nguyên hàm",
  "owl_tip": "Đưa hằng số ra ngoài; Tách tổng hiệu; Tuyệt đối không tách tích thương!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 31.13,
      "id": "part2"
    },
    {
      "time": 62.64,
      "id": "part3"
    },
    {
      "time": 70.25,
      "id": "vd1_q"
    },
    {
      "time": 77.91,
      "id": "vd1_a"
    },
    {
      "time": 91.93,
      "id": "vd2_q"
    },
    {
      "time": 102.97,
      "id": "vd2_a"
    },
    {
      "time": 118.91,
      "id": "vd3_q"
    },
    {
      "time": 141.42,
      "id": "vd3_a"
    },
    {
      "time": 187.36,
      "id": "part4"
    },
    {
      "time": 208.62,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Đạo hàm của nguyên hàm",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Tính chất tuyến tính (Hằng số & Tổng hiệu)",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ rèn luyện điển hình (3 Ví dụ)",
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
      "partTitle": "Phần 4: Cú Thông Thái cảnh báo bẫy",
      "scenes": [
        10
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo Thầy Cú ghi nhớ nhanh",
      "scenes": [
        11
      ]
    }
  ],
  "content": "\n      <div id=\"part1\">\n        <h3>1. Đạo hàm của nguyên hàm</h3>\n        <p>• $(\\int f(x) \\, dx)' = f(x)$.<br>\n        • $\\int f'(x) \\, dx = f(x) + C$.</p>\n      </div>\n      <div id=\"part2\">\n        <h3>2. Tính chất hằng số và tổng hiệu</h3>\n        <p>• <b>Đưa hằng số ra ngoài:</b> $\\int k f(x) \\, dx = k \\int f(x) \\, dx \\quad (k \\ne 0)$.<br>\n        • <b>Tách tổng, hiệu:</b> $\\int [f(x) \\pm g(x)] \\, dx = \\int f(x) \\, dx \\pm \\int g(x) \\, dx$.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ rèn luyện điển hình</h3></div>\n      <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:18px; margin:10px 0; background:#0f172a;\">\n        \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Tính chất hằng số nhân</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n        <div id=\"vd1_q\"><p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Tính nguyên hàm: $I = \\int 5\\sin x \\, dx$.</p></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          • $I = 5 \\int \\sin x \\, dx = 5(-\\cos x) + C = -5\\cos x + C$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:18px; margin:10px 0; background:#0f172a;\">\n        \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Nguyên hàm đa thức tổng hiệu</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n        <div id=\"vd2_q\"><p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Tìm họ tất cả các nguyên hàm của hàm số: $f(x) = 4x^3 - 6x + 2$.</p></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          • $\\int (4x^3 - 6x + 2) \\, dx = 4 \\frac{x^4}{4} - 6 \\frac{x^2}{2} + 2x + C = x^4 - 3x^2 + 2x + C$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:18px; margin:10px 0; background:#0f172a;\">\n        \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Xác định hàm số từ đạo hàm f'(x)</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n        <div id=\"vd3_q\"><p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Cho hàm số $f(x)$ liên tục trên khoảng $(0; +\\infty)$, thoả mãn:<br>$f'(x) = 6x + \\frac{2}{x^2}$ và $f(1) = 8$.<br>Hãy tìm hàm số $f(x)$ và tính giá trị $f(2)$.</p></div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          • $f(x) = \\int \\left(6x + \\frac{2}{x^2}\\right) dx = 3x^2 - \\frac{2}{x} + C$.<br>\n          • $f(1) = 3(1) - 2 + C = 1 + C = 8 \\implies C = 7$.<br>\n          • $f(x) = 3x^2 - \\frac{2}{x} + 7 \\implies f(2) = 3(4) - 1 + 7 = 18$.\n        </div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy tách tích</h3><p>Tuyệt đối không tách nguyên hàm của tích thành tích các nguyên hàm!</p></div>\n      <div id=\"part5\"><h3>5. Mẹo khai triển đa thức</h3><p>Nhân phá ngoặc trước khi lấy nguyên hàm.</p></div>\n    ",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "TÍNH CHẤT 1: ĐẠO HÀM NGUYÊN HÀM",
      "subtitle": "PHẦN 1: QUAN HỆ HAI CHIỀU",
      "startTime": 0.0,
      "endTime": 31.13,
      "duration": 31.13,
      "mascotMode": "talking",
      "mascotTip": "(∫ f(x) dx)' = f(x)!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:24px; margin-bottom:12px;\">1. Tính chất đạo hàm và vi phân</h3>\n                  <div style=\"background:rgba(15,23,42,0.8); border:1.5px solid #38bdf8; border-radius:10px; padding:16px; margin-bottom:12px;\">\n                    • <b>Đạo hàm của nguyên hàm:</b>\n                    <div style=\"font-size:21px; color:#fde047; font-weight:700; margin:6px 0; text-align:center;\">\n                      $$\\left( \\int f(x) \\, dx \\right)' = f(x)$$\n                    </div>\n                    • <b>Nguyên hàm của đạo hàm:</b>\n                    <div style=\"font-size:21px; color:#34d399; font-weight:700; margin:6px 0; text-align:center;\">\n                      $$\\int f'(x) \\, dx = f(x) + C$$\n                    </div>\n                  </div>\n                </div>\n            "
    },
    {
      "sceneIndex": 2,
      "title": "TÍNH CHẤT TUYẾN TÍNH NGUYÊN HÀM",
      "subtitle": "PHẦN 2: HẰNG SỐ & TỔNG HIỆU",
      "startTime": 31.13,
      "endTime": 62.64,
      "duration": 31.51,
      "mascotMode": "thinking",
      "mascotTip": "Hằng số đưa ra ngoài; Tách tổng hiệu thoải mái!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:24px; margin-bottom:12px;\">2. Tính chất đưa hằng số & Tách tổng hiệu</h3>\n                  <div style=\"display:flex; flex-direction:column; gap:12px;\">\n                    <div style=\"background:rgba(56,189,248,0.12); border-left:4px solid #38bdf8; padding:12px 16px; border-radius:8px;\">\n                      <b style=\"color:#38bdf8; font-size:18px;\">Tính chất 2 (Hằng số):</b> Với $k \\ne 0$:\n                      $$\\int k f(x) \\, dx = k \\int f(x) \\, dx$$\n                    </div>\n                    <div style=\"background:rgba(16,185,129,0.12); border-left:4px solid #10b981; padding:12px 16px; border-radius:8px;\">\n                      <b style=\"color:#34d399; font-size:18px;\">Tính chất 3 (Tổng hiệu):</b>\n                      $$\\int [f(x) \\pm g(x)] \\, dx = \\int f(x) \\, dx \\pm \\int g(x) \\, dx$$\n                    </div>\n                  </div>\n                </div>\n            "
    },
    {
      "sceneIndex": 3,
      "title": "LUYỆN TẬP VÍ DỤ TÍNH CHẤT",
      "subtitle": "PHẦN 3: CÁC VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "startTime": 62.64,
      "endTime": 70.25,
      "duration": 7.61,
      "mascotMode": "talking",
      "mascotTip": "3 bài toán trọng tâm áp dụng tính chất!",
      "bodyHtml": "\n                <div style=\"text-align:center; padding:40px 20px;\">\n                  <h2 style=\"color:#38bdf8; font-size:28px; margin-bottom:15px;\">Phần 3: Các ví dụ rèn luyện điển hình</h2>\n                  <p style=\"font-size:18px; color:#94a3b8; max-width:550px; margin:0 auto 20px;\">\n                    Rèn luyện kỹ năng tách hằng số, nguyên hàm đa thức và bài toán tìm hàm từ đạo hàm $f'(x)$.\n                  </p>\n                </div>\n            "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: TÍNH ∫ 5 sin x dx",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 70.25,
      "endTime": 77.91,
      "duration": 7.66,
      "mascotMode": "thinking",
      "mascotTip": "5 ∫ sin x dx = -5 cos x + C!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Tính chất hằng số nhân</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n      <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Tính nguyên hàm: $I = \\int 5\\sin x \\, dx$.</p>\n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: -5 cos x + C",
      "startTime": 77.91,
      "endTime": 91.93,
      "duration": 14.02,
      "mascotMode": "talking",
      "mascotTip": "Đưa số 5 ra ngoài, nguyên hàm của sin là -cos!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1:</h3>\n                  <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                    • Áp dụng tính chất đưa hằng số $5$ ra ngoài:\n                    $$I = \\int 5\\sin x \\, dx = 5 \\int \\sin x \\, dx$$\n                    • Vì $(\\cos x)' = -\\sin x \\implies \\int \\sin x \\, dx = -\\cos x + C$.<br>\n                    • Vậy $I = -5\\cos x + C$.\n                  </div>\n                </div>\n            "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: NGUYÊN HÀM ĐA THỨC",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 91.93,
      "endTime": 102.97,
      "duration": 11.04,
      "mascotMode": "thinking",
      "mascotTip": "Tách từng đơn thức: 4(x⁴/4) - 6(x²/2) + 2x + C!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Nguyên hàm đa thức tổng hiệu</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n      <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Tìm họ tất cả các nguyên hàm của hàm số: $f(x) = 4x^3 - 6x + 2$.</p>\n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: x⁴ - 3x² + 2x + C",
      "startTime": 102.97,
      "endTime": 118.91,
      "duration": 15.94,
      "mascotMode": "talking",
      "mascotTip": "Rút gọn hệ số: 4/4 = 1, 6/2 = 3!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2:</h3>\n                  <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                    • Áp dụng tính chất tuyến tính của nguyên hàm:\n                    $$\\int (4x^3 - 6x + 2) \\, dx = 4\\int x^3 \\, dx - 6\\int x \\, dx + 2\\int 1 \\, dx$$\n                    $$= 4 \\cdot \\frac{x^4}{4} - 6 \\cdot \\frac{x^2}{2} + 2x + C$$\n                    • <b>Kết quả:</b> $x^4 - 3x^2 + 2x + C$.\n                  </div>\n                </div>\n            "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: TÌM HÀM SỐ f(x) TỪ f'(x)",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 118.91,
      "endTime": 141.42,
      "duration": 22.51,
      "mascotMode": "thinking",
      "mascotTip": "f(x) = 3x² - 2/x + C; f(1) = 8 => C = 7 => f(2) = 18!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Xác định hàm số từ đạo hàm f'(x)</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n      <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Cho hàm số $f(x)$ liên tục trên khoảng $(0; +\\infty)$, thoả mãn:<br>$f'(x) = 6x + \\frac{2}{x^2}$ và $f(1) = 8$.<br>Hãy tìm hàm số $f(x)$ và tính giá trị $f(2)$.</p>\n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: f(x) = 3x² - 2/x + 7 => f(2) = 18",
      "startTime": 141.42,
      "endTime": 187.36,
      "duration": 45.94,
      "mascotMode": "talking",
      "mascotTip": "Chú ý: nguyên hàm của 1/x² là -1/x!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3:</h3>\n                  <div style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    • Ta có: $f(x) = \\int f'(x) \\, dx = \\int \\left(6x + \\frac{2}{x^2}\\right) dx = 3x^2 - \\frac{2}{x} + C$.<br>\n                    • Vì $f(1) = 8 \\implies 3(1^2) - \\frac{2}{1} + C = 8 \\implies 1 + C = 8 \\implies C = 7$.<br>\n                    • Vậy hàm số là: $f(x) = 3x^2 - \\frac{2}{x} + 7$.<br>\n                    • Tính giá trị tại $x = 2$:\n                    $$f(2) = 3(2^2) - \\frac{2}{2} + 7 = 12 - 1 + 7 = 18$$\n                  </div>\n                </div>\n            "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI CẢNH BÁO BẪY",
      "subtitle": "PHẦN 4: BẪY NGUYÊN HÀM CỦA TÍCH",
      "startTime": 187.36,
      "endTime": 208.62,
      "duration": 21.26,
      "mascotMode": "warning",
      "mascotTip": "∫ f(x)g(x) dx KHÔNG BẰNG ∫ f(x)dx . ∫ g(x)dx!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:14px;\">4. Bẫy sai lầm phổ biến: Tự ý tách tích thương</h3>\n                  <div style=\"background:rgba(244,63,94,0.12); border-left:4px solid #f43f5e; padding:14px 18px; border-radius:8px;\">\n                    <b style=\"color:#f43f5e; font-size:19px;\">TUYỆT ĐỐI GHI NHỚ:</b>\n                    <div style=\"font-size:19px; color:#fde047; font-weight:700; margin:8px 0;\">\n                      $$\\int [f(x) \\cdot g(x)] \\, dx \\ne \\left( \\int f(x) \\, dx \\right) \\cdot \\left( \\int g(x) \\, dx \\right)$$\n                    </div>\n                    Nguyên hàm chỉ có tính chất tuyến tính với <b>tổng, hiệu và nhân hằng số</b>. Gặp tích hoặc thương phải biến đổi nhân chia trước khi lấy nguyên hàm!\n                  </div>\n                </div>\n            "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ GHI NHỚ",
      "subtitle": "PHẦN 5: BIẾN ĐỔI KHAI TRIỂN ĐA THỨC",
      "startTime": 208.62,
      "endTime": 227.32,
      "duration": 18.7,
      "mascotMode": "talking",
      "mascotTip": "Gặp ngoặc nhân ngoặc: Khai triển ra tổng rồi giải!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">5. Bí quyết Thầy Cú: Khai triển trước, nguyên hàm sau</h3>\n                  <div style=\"background:rgba(15,23,42,0.8); border:1.5px solid #38bdf8; border-radius:10px; padding:18px;\">\n                    Khi gặp biểu thức dạng $(2x - 1)(x + 3)$ hoặc $(x + 2)^2$:<br>\n                    👉 <b>Đừng vội lấy nguyên hàm!</b><br>\n                    Hãy nhân tung ngoặc ra: $(2x - 1)(x + 3) = 2x^2 + 5x - 3$.<br>\n                    Sau đó nguyên hàm từng đơn thức siêu dễ: $\\frac{2}{3}x^3 + \\frac{5}{2}x^2 - 3x + C$!\n                  </div>\n                </div>\n            "
    }
  ]
};

  window.CHAPTER4_DATA.bai11_muc3 = {
  "lessonId": "bai11",
  "lessonTitle": "Bài 11: Nguyên hàm",
  "sectionId": "bai11_muc3",
  "sectionTitle": "Mục 3: Bảng nguyên hàm sơ cấp & Kỹ thuật Casio 580",
  "audio": "/audio/bai11_muc3.mp3",
  "audioSrc": "./audio/bai11_muc3.mp3",
  "audio_src": "./audio/bai11_muc3.mp3",
  "timestamp_src": "timestamps/bai11_muc3.json",
  "totalDuration": 226.91,
  "duration": 226.91,
  "title": "Mục 3: Bảng nguyên hàm sơ cấp & Kỹ thuật Casio 580",
  "owl_tip": "Bảng nguyên hàm sơ cấp; Tuyệt kỹ bấm máy Casio d/dx(F) - f = 0!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 40.1,
      "id": "part2"
    },
    {
      "time": 74.25,
      "id": "part3"
    },
    {
      "time": 81.11,
      "id": "vd1_q"
    },
    {
      "time": 92.44,
      "id": "vd1_a"
    },
    {
      "time": 107.54,
      "id": "vd2_q"
    },
    {
      "time": 117.81,
      "id": "vd2_a"
    },
    {
      "time": 132.67,
      "id": "vd3_q"
    },
    {
      "time": 151.22,
      "id": "vd3_a"
    },
    {
      "time": 187.65,
      "id": "part4"
    },
    {
      "time": 213.52,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Bảng nguyên hàm luỹ thừa & phân thức",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Bảng nguyên hàm hàm số mũ & lượng giác",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ rèn luyện điển hình (3 Ví dụ)",
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
      "partTitle": "Phần 4: Tuyệt kỹ bấm máy tính Casio fx-580VNX",
      "scenes": [
        10
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Tổng kết trọn vẹn Bài 11",
      "scenes": [
        11
      ]
    }
  ],
  "content": "\n      <div id=\"part1\">\n        <h3>1. Bảng nguyên hàm luỹ thừa & logarit</h3>\n        <p>• $\\int 0 \\, dx = C$; $\\quad \\int 1 \\, dx = x + C$.<br>\n        • $\\int x^\\alpha \\, dx = \\frac{x^{\\alpha+1}}{\\alpha+1} + C \\quad (\\alpha \\ne -1)$.<br>\n        • $\\int \\frac{1}{x} \\, dx = \\ln|x| + C \\quad (x \\ne 0)$.</p>\n      </div>\n      <div id=\"part2\">\n        <h3>2. Bảng nguyên hàm mũ & lượng giác</h3>\n        <p>• $\\int e^x \\, dx = e^x + C$; $\\quad \\int a^x \\, dx = \\frac{a^x}{\\ln a} + C$.<br>\n        • $\\int \\cos x \\, dx = \\sin x + C$; $\\quad \\int \\sin x \\, dx = -\\cos x + C$.<br>\n        • $\\int \\frac{1}{\\cos^2 x} \\, dx = \\tan x + C$; $\\quad \\int \\frac{1}{\\sin^2 x} \\, dx = -\\cot x + C$.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ rèn luyện điển hình</h3></div>\n      <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:18px; margin:10px 0; background:#0f172a;\">\n        \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Nguyên hàm hàm mũ & 1/x</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n        <div id=\"vd1_q\"><p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Tìm nguyên hàm của hàm số: $f(x) = e^x + \\frac{1}{x}$ trên khoảng $(0; +\\infty)$.</p></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          • $\\int (e^x + \\frac{1}{x}) dx = e^x + \\ln|x| + C = e^x + \\ln x + C$ (vì $x > 0$).\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:18px; margin:10px 0; background:#0f172a;\">\n        \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Nguyên hàm hàm mũ a^x & lượng giác</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n        <div id=\"vd2_q\"><p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Tìm họ tất cả các nguyên hàm của hàm số: $f(x) = 2^x - \\cos x$.</p></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          • $\\int (2^x - \\cos x) dx = \\frac{2^x}{\\ln 2} - \\sin x + C$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:18px; margin:10px 0; background:#0f172a;\">\n        \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Xác định hàm số đi qua điểm M(π; 2√π + 1)</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng tổng hợp)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n        <div id=\"vd3_q\"><p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Tìm nguyên hàm $F(x)$ của hàm số $f(x) = \\frac{1}{\\sqrt{x}} + 3\\cos x$ trên $(0; +\\infty)$, biết đồ thị hàm số $F(x)$ đi qua điểm $M(\\pi; 2\\sqrt{\\pi} + 1)$.</p></div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          • $F(x) = \\int (x^{-1/2} + 3\\cos x) dx = 2\\sqrt{x} + 3\\sin x + C$.<br>\n          • $F(\\pi) = 2\\sqrt{\\pi} + 3\\sin \\pi + C = 2\\sqrt{\\pi} + C = 2\\sqrt{\\pi} + 1 \\implies C = 1$.<br>\n          • Vậy $F(x) = 2\\sqrt{x} + 3\\sin x + 1$.\n        </div>\n      </div>\n      <div id=\"part4\"><h3>4. Tuyệt kỹ Casio 580</h3><p>Bấm d/dx[F(X)] - f(X) tại X = X0 xem có bằng 0 không!</p></div>\n      <div id=\"part5\"><h3>5. Tổng kết Bài 11</h3><p>Chúc mừng các em đã nắm trọn vẹn Bài 11 Nguyên hàm!</p></div>\n    ",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BẢNG NGUYÊN HÀM SƠ CẤP",
      "subtitle": "PHẦN 1: HÀM LUỸ THỪA & 1/x",
      "startTime": 0.0,
      "endTime": 40.1,
      "duration": 40.1,
      "mascotMode": "talking",
      "mascotTip": "∫ x^α dx = x^(α+1)/(α+1) + C với α ≠ -1!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:24px; margin-bottom:12px;\">1. Bảng nguyên hàm hàm số luỹ thừa & phân thức</h3>\n                  <table style=\"width:100%; border-collapse:collapse; text-align:center; font-size:17px; margin-bottom:12px;\">\n                    <tr style=\"background:#1e293b; color:#38bdf8;\">\n                      <th style=\"border:1px solid #475569; padding:8px;\">Hàm số $f(x)$</th>\n                      <th style=\"border:1px solid #475569; padding:8px;\">Họ nguyên hàm $\\int f(x) \\, dx$</th>\n                    </tr>\n                    <tr><td style=\"border:1px solid #475569; padding:8px;\">$0$</td><td style=\"border:1px solid #475569; padding:8px; font-weight:bold; color:#fde047;\">$C$</td></tr>\n                    <tr><td style=\"border:1px solid #475569; padding:8px;\">$1$</td><td style=\"border:1px solid #475569; padding:8px; font-weight:bold; color:#fde047;\">$x + C$</td></tr>\n                    <tr><td style=\"border:1px solid #475569; padding:8px;\">$x^\\alpha \\; (\\alpha \\ne -1)$</td><td style=\"border:1px solid #475569; padding:8px; font-weight:bold; color:#fde047;\">$\\frac{x^{\\alpha+1}}{\\alpha+1} + C$</td></tr>\n                    <tr><td style=\"border:1px solid #475569; padding:8px;\">$\\frac{1}{x} \\; (x \\ne 0)$</td><td style=\"border:1px solid #475569; padding:8px; font-weight:bold; color:#34d399;\">$\\ln|x| + C$</td></tr>\n                  </table>\n                </div>\n            "
    },
    {
      "sceneIndex": 2,
      "title": "BẢNG NGUYÊN HÀM MŨ & LƯỢNG GIÁC",
      "subtitle": "PHẦN 2: HÀM SỐ MŨ & HÀM LƯỢNG GIÁC",
      "startTime": 40.1,
      "endTime": 74.25,
      "duration": 34.15,
      "mascotMode": "thinking",
      "mascotTip": "∫ a^x dx = a^x/ln a; ∫ cos = sin; ∫ sin = -cos!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:24px; margin-bottom:12px;\">2. Nguyên hàm Hàm số Mũ & Lượng giác</h3>\n                  <table style=\"width:100%; border-collapse:collapse; text-align:center; font-size:16px;\">\n                    <tr style=\"background:#1e293b; color:#38bdf8;\">\n                      <th style=\"border:1px solid #475569; padding:6px;\">$f(x)$</th>\n                      <th style=\"border:1px solid #475569; padding:6px;\">$\\int f(x)dx$</th>\n                      <th style=\"border:1px solid #475569; padding:6px;\">$f(x)$</th>\n                      <th style=\"border:1px solid #475569; padding:6px;\">$\\int f(x)dx$</th>\n                    </tr>\n                    <tr>\n                      <td style=\"border:1px solid #475569; padding:6px;\">$e^x$</td>\n                      <td style=\"border:1px solid #475569; padding:6px; color:#fde047; font-weight:bold;\">$e^x + C$</td>\n                      <td style=\"border:1px solid #475569; padding:6px;\">$\\cos x$</td>\n                      <td style=\"border:1px solid #475569; padding:6px; color:#34d399; font-weight:bold;\">$\\sin x + C$</td>\n                    </tr>\n                    <tr>\n                      <td style=\"border:1px solid #475569; padding:6px;\">$a^x$</td>\n                      <td style=\"border:1px solid #475569; padding:6px; color:#fde047; font-weight:bold;\">$\\frac{a^x}{\\ln a} + C$</td>\n                      <td style=\"border:1px solid #475569; padding:6px;\">$\\sin x$</td>\n                      <td style=\"border:1px solid #475569; padding:6px; color:#f43f5e; font-weight:bold;\">$-\\cos x + C$</td>\n                    </tr>\n                    <tr>\n                      <td style=\"border:1px solid #475569; padding:6px;\">$\\frac{1}{\\cos^2 x}$</td>\n                      <td style=\"border:1px solid #475569; padding:6px; color:#38bdf8; font-weight:bold;\">$\\tan x + C$</td>\n                      <td style=\"border:1px solid #475569; padding:6px;\">$\\frac{1}{\\sin^2 x}$</td>\n                      <td style=\"border:1px solid #475569; padding:6px; color:#fbbf24; font-weight:bold;\">$-\\cot x + C$</td>\n                    </tr>\n                  </table>\n                </div>\n            "
    },
    {
      "sceneIndex": 3,
      "title": "LUYỆN TẬP VÍ DỤ",
      "subtitle": "PHẦN 3: CÁC VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "startTime": 74.25,
      "endTime": 81.11,
      "duration": 6.86,
      "mascotMode": "talking",
      "mascotTip": "3 bài tập áp dụng bảng nguyên hàm!",
      "bodyHtml": "\n                <div style=\"text-align:center; padding:40px 20px;\">\n                  <h2 style=\"color:#38bdf8; font-size:28px; margin-bottom:15px;\">Phần 3: Các ví dụ rèn luyện điển hình</h2>\n                  <p style=\"font-size:18px; color:#94a3b8; max-width:550px; margin:0 auto 20px;\">\n                    Cùng luyện tập tìm nguyên hàm hàm mũ, lượng giác và bài toán xác định hằng số $C$.\n                  </p>\n                </div>\n            "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: TÍNH ∫ (e^x + 1/x) dx",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 81.11,
      "endTime": 92.44,
      "duration": 11.33,
      "mascotMode": "thinking",
      "mascotTip": "e^x + ln x + C!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Nguyên hàm hàm mũ & 1/x</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n      <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Tìm nguyên hàm của hàm số: $f(x) = e^x + \\frac{1}{x}$ trên khoảng $(0; +\\infty)$.</p>\n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: e^x + ln x + C",
      "startTime": 92.44,
      "endTime": 107.54,
      "duration": 15.1,
      "mascotMode": "talking",
      "mascotTip": "Do x > 0 nên |x| = x!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1:</h3>\n                  <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                    • Áp dụng bảng nguyên hàm cơ bản:\n                    $$\\int \\left( e^x + \\frac{1}{x} \\right) dx = \\int e^x \\, dx + \\int \\frac{1}{x} \\, dx = e^x + \\ln|x| + C$$\n                    • Vì khoảng xét là $(0; +\\infty) \\implies x > 0 \\implies |x| = x$.<br>\n                    • <b>Kết quả:</b> $e^x + \\ln x + C$.\n                  </div>\n                </div>\n            "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: TÍNH ∫ (2^x - cos x) dx",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 107.54,
      "endTime": 117.81,
      "duration": 10.27,
      "mascotMode": "thinking",
      "mascotTip": "2^x / ln 2 - sin x + C!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Nguyên hàm hàm mũ a^x & lượng giác</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n      <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Tìm họ tất cả các nguyên hàm của hàm số: $f(x) = 2^x - \\cos x$.</p>\n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: 2^x / ln 2 - sin x + C",
      "startTime": 117.81,
      "endTime": 132.67,
      "duration": 14.86,
      "mascotMode": "talking",
      "mascotTip": "Nguyên hàm của a^x có mẫu là ln a!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2:</h3>\n                  <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                    • Áp dụng công thức nguyên hàm hàm mũ và hàm lượng giác:\n                    $$\\int (2^x - \\cos x) \\, dx = \\int 2^x \\, dx - \\int \\cos x \\, dx$$\n                    $$= \\frac{2^x}{\\ln 2} - \\sin x + C$$\n                  </div>\n                </div>\n            "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: TÌM NGUYÊN HÀM QUA M",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 132.67,
      "endTime": 151.22,
      "duration": 18.55,
      "mascotMode": "thinking",
      "mascotTip": "F(x) = 2√x + 3 sin x + C; F(π) = 2√π + 1 => C = 1!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Xác định hàm số đi qua điểm M(π; 2√π + 1)</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng tổng hợp)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n      <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Tìm nguyên hàm $F(x)$ của hàm số $f(x) = \\frac{1}{\\sqrt{x}} + 3\\cos x$ trên $(0; +\\infty)$, biết đồ thị hàm số $F(x)$ đi qua điểm $M(\\pi; 2\\sqrt{\\pi} + 1)$.</p>\n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: F(x) = 2√x + 3 sin x + 1",
      "startTime": 151.22,
      "endTime": 187.65,
      "duration": 36.43,
      "mascotMode": "talking",
      "mascotTip": "sin π = 0 nên 2√π + C = 2√π + 1 => C = 1!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3:</h3>\n                  <div style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    • Viết lại: $\\frac{1}{\\sqrt{x}} = x^{-1/2}$.<br>\n                    • $F(x) = \\int (x^{-1/2} + 3\\cos x) \\, dx = \\frac{x^{1/2}}{1/2} + 3\\sin x + C = 2\\sqrt{x} + 3\\sin x + C$.<br>\n                    • Vì đồ thị đi qua $M(\\pi; 2\\sqrt{\\pi} + 1)$ nên:\n                    $$F(\\pi) = 2\\sqrt{\\pi} + 3\\sin \\pi + C = 2\\sqrt{\\pi} + 1$$\n                    • Vì $\\sin \\pi = 0 \\implies 2\\sqrt{\\pi} + C = 2\\sqrt{\\pi} + 1 \\implies C = 1$.<br>\n                    • <b>Vậy:</b> $F(x) = 2\\sqrt{x} + 3\\sin x + 1$.\n                  </div>\n                </div>\n            "
    },
    {
      "sceneIndex": 10,
      "title": "TUYỆT KỸ CASIO FX-580VNX",
      "subtitle": "PHẦN 4: THỬ ĐÁP ÁN NGUYÊN HÀM BẰNG d/dx",
      "startTime": 187.65,
      "endTime": 213.52,
      "duration": 25.87,
      "mascotMode": "talking",
      "mascotTip": "Shift d/dx[F(X)] - f(X) tại X = X0 = 0!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">4. Tuyệt kỹ kiểm tra nguyên hàm Casio fx-580VNX</h3>\n                  <div style=\"background:rgba(15,23,42,0.8); border:1.5px solid #38bdf8; border-radius:10px; padding:18px;\">\n                    Để kiểm tra xem $F(x)$ có phải là nguyên hàm của $f(x)$ không:\n                    <div style=\"font-size:20px; color:#fde047; font-weight:700; margin:8px 0; text-align:center;\">\n                      $$\\left. \\frac{d}{dx} [F(X)] \\right|_{X = X_0} - f(X_0) = 0$$\n                    </div>\n                    • <b>Bước 1:</b> Bấm <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">SHIFT</kbd> <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">[\\int]</kbd> để gọi lệnh $\\frac{d}{dx}$.<br>\n                    • <b>Bước 2:</b> Nhập biểu thức $F(X)$ ở phương án cần thử.<br>\n                    • <b>Bước 3:</b> Chọn $X = 1{,}5$ (hoặc một số bất kỳ thuộc TXĐ).<br>\n                    • <b>Bước 4:</b> Trừ đi hàm $f(X_0)$, bấm <kbd style=\"background:#dc2626; padding:2px 6px; border-radius:4px; color:#fff;\">=</kbd>.<br>\n                    👉 Nếu kết quả ra $0$ (hoặc xấp xỉ $10^{-12}$) $\\implies$ <b>ĐÁP ÁN ĐÚNG!</b>\n                  </div>\n                </div>\n            "
    },
    {
      "sceneIndex": 11,
      "title": "TỔNG KẾT BÀI 11: NGUYÊN HÀM",
      "subtitle": "PHẦN 5: CHINH PHỤC ĐIỂM CAO CHƯƠNG IV",
      "startTime": 213.52,
      "endTime": 226.91,
      "duration": 13.39,
      "mascotMode": "talking",
      "mascotTip": "Chúc mừng các em đã nắm vững Bài 11 Nguyên hàm!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.7; color:#f8fafc; text-align:center;\">\n                  <h3 style=\"color:#38bdf8; font-size:26px; margin-bottom:14px;\">🎉 CHÚC MỪNG HOÀN THÀNH BÀI 11: NGUYÊN HÀM!</h3>\n                  <div style=\"background:rgba(15,23,42,0.85); border:1.5px solid #38bdf8; border-radius:12px; padding:20px; max-width:650px; margin:0 auto;\">\n                    Các em đã nắm vững 3 nội dung trọng tâm:\n                    <div style=\"display:flex; justify-content:space-around; margin:16px 0; font-weight:700;\">\n                      <span style=\"color:#fde047;\">Định nghĩa & Họ $F(x) + C$</span>\n                      <span style=\"color:#38bdf8;\">Tính chất tuyến tính</span>\n                      <span style=\"color:#34d399;\">Bảng nguyên hàm sơ cấp</span>\n                    </div>\n                    Tự tin bước sang <b>Bài 12: Tích phân</b> với nền tảng giải tích vững chắc!\n                  </div>\n                </div>\n            "
    }
  ]
};
}
