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


  window.CHAPTER4_DATA.bai12_muc1 = {
  "lessonId": "bai12",
  "lessonTitle": "Bài 12: Tích phân",
  "sectionId": "bai12_muc1",
  "sectionTitle": "Mục 1: Diện tích hình thang cong & Định nghĩa tích phân",
  "audio": "/audio/bai12_muc1.mp3",
  "audioSrc": "./audio/bai12_muc1.mp3",
  "audio_src": "./audio/bai12_muc1.mp3",
  "timestamp_src": "timestamps/bai12_muc1.json",
  "totalDuration": 273.89,
  "duration": 273.89,
  "title": "Mục 1: Diện tích hình thang cong & Định nghĩa tích phân",
  "owl_tip": "∫_a^b f(x)dx = F(b) - F(a): Luôn lấy F(cận trên) trừ F(cận dưới)!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 41.76,
      "id": "part2"
    },
    {
      "time": 90.65,
      "id": "part3"
    },
    {
      "time": 103.27,
      "id": "vd1_q"
    },
    {
      "time": 111.57,
      "id": "vd1_a"
    },
    {
      "time": 130.46,
      "id": "vd2_q"
    },
    {
      "time": 138.91,
      "id": "vd2_a"
    },
    {
      "time": 151.77,
      "id": "vd3_q"
    },
    {
      "time": 178.94,
      "id": "vd3_a"
    },
    {
      "time": 223.03,
      "id": "part4"
    },
    {
      "time": 250.56,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Bài toán diện tích hình thang cong",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Định nghĩa tích phân & Công thức Newton - Leibniz",
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
      "partTitle": "Phần 5: Mẹo Thầy Cú ghi nhớ nhanh & Casio",
      "scenes": [
        11
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 12: TÍCH PHÂN",
      "subtitle": "MỤC 1 • DIỆN TÍCH HÌNH THANG CONG",
      "startTime": 0.0,
      "endTime": 41.76,
      "duration": 41.76,
      "mascotMode": "pointer",
      "mascotTip": "Hình thang cong được giới hạn bởi đồ thị y = f(x) ≥ 0, trục Ox và x = a, x = b!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Bài toán diện tích hình thang cong</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Cho hàm số $y = f(x)$ liên tục, không âm trên đoạn $[a; b]$ ($a < b$).</p>\n                  <p>• Hình phẳng giới hạn bởi đồ thị hàm số $y = f(x)$, trục hoành $Ox$ và hai đường thẳng $x = a$, $x = b$ được gọi là <b>hình thang cong</b>.</p>\n                  <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px 16px; margin:14px 0; border-radius:0 8px 8px 0;\">\n                    <b>Ý tưởng tích phân:</b> Chia nhỏ đoạn $[a; b]$ thành $n$ đoạn con, xấp xỉ diện tích hình thang cong bằng tổng diện tích các hình chữ nhật nhỏ. Khi $n \\to +\\infty$, giới hạn tổng đó chính là <b>diện tích chính xác $S$</b>.\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 2,
      "title": "ĐỊNH NGHĨA TÍCH PHÂN",
      "subtitle": "MỤC 1 • CÔNG THỨC NEWTON - LEIBNIZ",
      "startTime": 41.76,
      "endTime": 90.65,
      "duration": 48.89,
      "mascotMode": "talking",
      "mascotTip": "∫_a^b f(x)dx = F(b) - F(a): Luôn lấy F(cận trên) trừ F(cận dưới)!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#fde047; font-size:22px; margin-bottom:12px;\">2. Định nghĩa tích phân (Công thức Newton - Leibniz)</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Cho $f(x)$ liên tục trên đoạn $[a; b]$. Giả sử $F(x)$ là một nguyên hàm của $f(x)$ trên $[a; b]$.</p>\n                  <div style=\"background:rgba(254,240,138,0.15); border:1.5px solid #fde047; border-radius:10px; padding:14px; text-align:center; margin:12px 0;\">\n                    <span style=\"font-size:22px; color:#fef08a; font-weight:700;\">$$\\int_a^b f(x) dx = \\left. F(x) \\right|_a^b = F(b) - F(a)$$</span>\n                  </div>\n                  <p>• $a$: Cận dưới, $b$: Cận trên, $f(x)dx$: Biểu thức dưới dấu tích phân.</p>\n                  <div style=\"display:flex; justify-content:space-between; margin-top:10px; font-size:15px; color:#94a3b8;\">\n                    <span>📌 $\\int_a^a f(x)dx = 0$</span>\n                    <span>📌 $\\int_a^b f(x)dx = -\\int_b^a f(x)dx$</span>\n                    <span>📌 Không phụ thuộc biến: $\\int_a^b f(x)dx = \\int_a^b f(t)dt$</span>\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "subtitle": "MỤC 1 • RÈN LUYỆN KỸ NĂNG VÀ ĐỒNG HỒ ĐẾM NGƯỢC",
      "startTime": 90.65,
      "endTime": 103.27,
      "duration": 12.62,
      "mascotMode": "cheering",
      "mascotTip": "Cùng bắt đầu rèn luyện 3 ví dụ nền tảng với đồng hồ đếm ngược 15s và 30s!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">3. Hệ thống ví dụ rèn luyện điển hình Mục 1</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <p>Cùng thầy chinh phục 3 dạng toán cốt lõi:</p>\n                  <ul style=\"margin-left:20px;\">\n                    <li><b>Ví dụ 1 (15s):</b> Tính tích phân đa thức cơ bản (Nhận biết).</li>\n                    <li><b>Ví dụ 2 (15s):</b> Tính tích phân lượng giác cơ bản (Thông hiểu).</li>\n                    <li><b>Ví dụ 3 (30s):</b> Bài toán chuyển động thực tế: Quãng đường phanh ô tô (Vận dụng).</li>\n                  </ul>\n                  <p style=\"color:#38bdf8; margin-top:12px;\">👉 Đồng hồ đếm ngược nằm gọn ở góc trên phải, không che chắn đề bài!</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: TÍNH TÍCH PHÂN ĐA THỨC",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 103.27,
      "endTime": 111.57,
      "duration": 8.3,
      "mascotMode": "thinking",
      "mascotTip": "Nguyên hàm của 3x² là x³, sau đó thế cận 2 và 1!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Tính tích phân cơ bản</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Tính tích phân sau:</p>\n                <div style=\"text-align:center; font-size:24px; color:#fef08a; margin:16px 0;\">\n                  $$I = \\int_1^2 3x^2 dx$$\n                </div>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 111.57,
      "endTime": 130.46,
      "duration": 18.89,
      "mascotMode": "magnifier",
      "mascotTip": "F(2) - F(1) = 2³ - 1³ = 8 - 1 = 7. Chuẩn xác!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1</h3>\n                <div style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                  <p>• Một nguyên hàm của $f(x) = 3x^2$ là $F(x) = x^3$.</p>\n                  <p>• Áp dụng công thức Newton - Leibniz thế cận từ $1$ đến $2$:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:12px; margin:12px 0; text-align:center;\">\n                    $$I = \\int_1^2 3x^2 dx = \\left. x^3 \\right|_1^2 = 2^3 - 1^3 = 8 - 1 = 7$$\n                  </div>\n                  <p><b>Kết luận:</b> $I = 7$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: TÍCH PHÂN LƯỢNG GIÁC",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 130.46,
      "endTime": 138.91,
      "duration": 8.45,
      "mascotMode": "thinking",
      "mascotTip": "Nguyên hàm của cos x là sin x. Chú ý sin(π/2) = 1, sin(0) = 0!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Tích phân hàm lượng giác</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Tính tích phân sau:</p>\n                <div style=\"text-align:center; font-size:24px; color:#fef08a; margin:16px 0;\">\n                  $$J = \\int_0^{\\frac{\\pi}{2}} \\cos x dx$$\n                </div>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 138.91,
      "endTime": 151.77,
      "duration": 12.86,
      "mascotMode": "magnifier",
      "mascotTip": "sin(π/2) - sin(0) = 1 - 0 = 1. Quá nhanh gọn!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2</h3>\n                <div style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                  <p>• Một nguyên hàm của hàm số $\\cos x$ là $\\sin x$.</p>\n                  <p>• Áp dụng công thức Newton - Leibniz:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:12px; margin:12px 0; text-align:center;\">\n                    $$J = \\int_0^{\\frac{\\pi}{2}} \\cos x dx = \\left. \\sin x \\right|_0^{\\frac{\\pi}{2}} = \\sin\\left(\\frac{\\pi}{2}\\right) - \\sin 0 = 1 - 0 = 1$$\n                  </div>\n                  <p><b>Kết luận:</b> $J = 1$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: BÀI TOÁN PHANH XE Ô TÔ",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 151.77,
      "endTime": 178.94,
      "duration": 27.17,
      "mascotMode": "thinking",
      "mascotTip": "Bước 1: Tìm thời điểm dừng khi v(t) = 0. Bước 2: Quãng đường s = ∫ v(t)dt!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Quãng đường chuyển động phanh xe</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng thực tế)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Một ô tô đang chạy với vận tốc $20\\text{ m/s}$ thì người lái đạp phanh. Kể từ thời điểm đó, ô tô chuyển động chậm dần đều với vận tốc $v(t) = 20 - 4t\\text{ (m/s)}$, trong đó $t$ tính bằng giây kể từ lúc đạp phanh.\n                </p>\n                <p style=\"font-size:17px; line-height:1.65; color:#fde047;\">\n                  a) Sau bao lâu kể từ lúc đạp phanh thì ô tô dừng hẳn?<br>\n                  b) Tính quãng đường ô tô đi được từ lúc đạp phanh đến khi dừng hẳn.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI TỪNG BƯỚC",
      "startTime": 178.94,
      "endTime": 223.03,
      "duration": 44.09,
      "mascotMode": "magnifier",
      "mascotTip": "t = 5s và s = ∫_0^5 (20 - 4t)dt = 50m. Tuyệt đối chính xác!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p><b>a) Thời điểm ô tô dừng hẳn:</b></p>\n                  <p>Ô tô dừng hẳn khi vận tốc triệt tiêu: $v(t) = 0 \\iff 20 - 4t = 0 \\iff t = 5\\text{ (giây)}$.</p>\n                  <p><b>b) Quãng đường ô tô đi được:</b></p>\n                  <p>Áp dụng ý nghĩa vật lý của tích phân, quãng đường từ $t = 0$ đến $t = 5$ là:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:12px; margin:10px 0; text-align:center;\">\n                    $$s = \\int_0^5 (20 - 4t) dt = \\left. \\left(20t - 2t^2\\right) \\right|_0^5 = (20 \\cdot 5 - 2 \\cdot 5^2) - 0 = 100 - 50 = 50\\text{ (m)}$$\n                  </div>\n                  <p><b>Kết luận:</b> Ô tô dừng hẳn sau $5$ giây và đi được quãng đường $50\\text{ m}$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI SOI BẪY SAI LẦM",
      "subtitle": "PHẦN 4: 2 BẪY TÍCH PHÂN THƯỜNG GẶP",
      "startTime": 223.03,
      "endTime": 250.56,
      "duration": 27.53,
      "mascotMode": "magnifier",
      "mascotTip": "Nhớ: Luôn lấy F(cận trên) trừ F(cận dưới), không cần cộng C!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:12px;\">⚠️ Cú Thông Thái cảnh báo 2 bẫy nguy hiểm</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <div class=\"trap-warning-box\" style=\"margin-bottom:14px; background:rgba(239,68,68,0.15); border-left:4px solid #ef4444; padding:12px 16px; border-radius:0 8px 8px 0;\">\n                    <b style=\"color:#fca5a5;\">Bẫy 1: Ngược cận (Thế cận dưới trừ cận trên)</b><br>\n                    Công thức chuẩn là $\\left. F(x) \\right|_a^b = F(b) - F(a)$ (Cận trên $b$ trừ cận dưới $a$). Nếu lấy $F(a) - F(b)$ kết quả sẽ bị ngược dấu!\n                  </div>\n                  <div class=\"trap-warning-box\" style=\"background:rgba(245,158,11,0.15); border-left:4px solid #f59e0b; padding:12px 16px; border-radius:0 8px 8px 0;\">\n                    <b style=\"color:#fde047;\">Bẫy 2: Viết thừa hằng số C</b><br>\n                    Trong tích phân xác định, hằng số $C$ bị triệt tiêu: $[F(b) + C] - [F(a) + C] = F(b) - F(a)$. Vì vậy không ghi $+ C$ khi thế cận.\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ GHI NHỚ NHANH",
      "subtitle": "PHẦN 5: BÀI TOÁN CHUYỂN ĐỘNG & BẤM CASIO",
      "startTime": 250.56,
      "endTime": 273.89,
      "duration": 23.33,
      "mascotMode": "lightbulb",
      "mascotTip": "Bấm phím ∫ trên Casio fx-580VNX để kiểm tra kết quả trong 3 giây!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">💡 Mẹo Thầy Cú ghi nhớ nhanh</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p><b>1. Ý nghĩa chuyển động:</b></p>\n                  <p>• Quãng đường $s = \\int_{t_1}^{t_2} v(t) dt$.</p>\n                  <p>• Vận tốc $v(t) = \\int a(t) dt$.</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:14px; margin-top:14px;\">\n                    <b style=\"color:#7dd3fc;\">2. Tuyệt kỹ kiểm tra Casio fx-580VNX:</b><br>\n                    Nhấn trực tiếp phím $\\int_{\\square}^{\\square}$ (ngay dưới phím ALPHA), nhập hàm số và cận dưới, cận trên rồi bấm dấu bằng [=]. Kết quả sẽ hiện ra ngay lập tức!\n                  </div>\n                </div>\n            \n    </div>\n    "
    }
  ]
};

  window.CHAPTER4_DATA.bai12_muc2 = {
  "lessonId": "bai12",
  "lessonTitle": "Bài 12: Tích phân",
  "sectionId": "bai12_muc2",
  "sectionTitle": "Mục 2: Các tính chất của tích phân",
  "audio": "/audio/bai12_muc2.mp3",
  "audioSrc": "./audio/bai12_muc2.mp3",
  "audio_src": "./audio/bai12_muc2.mp3",
  "timestamp_src": "timestamps/bai12_muc2.json",
  "totalDuration": 256.95,
  "duration": 256.95,
  "title": "Mục 2: Các tính chất của tích phân",
  "owl_tip": "Chèn cận c: ∫_a^b = ∫_a^c + ∫_c^b. Đảo cận đổi dấu: ∫_b^a = -∫_a^b!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 35.11,
      "id": "part2"
    },
    {
      "time": 72.77,
      "id": "part3"
    },
    {
      "time": 79.85,
      "id": "vd1_q"
    },
    {
      "time": 97.99,
      "id": "vd1_a"
    },
    {
      "time": 113.85,
      "id": "vd2_q"
    },
    {
      "time": 137.63,
      "id": "vd2_a"
    },
    {
      "time": 155.65,
      "id": "vd3_q"
    },
    {
      "time": 164.46,
      "id": "vd3_a"
    },
    {
      "time": 216.56,
      "id": "part4"
    },
    {
      "time": 236.12,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Đưa thừa số ra ngoài & Tích phân đạo hàm",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Tách tổng hiệu & Tính chất chèn cận / nối cận",
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
      "partTitle": "Phần 5: Mẹo Thầy Cú & Quy tắc trục số định hướng",
      "scenes": [
        11
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 12: TÍCH PHÂN",
      "subtitle": "MỤC 2 • CÁC TÍNH CHẤT CƠ BẢN",
      "startTime": 0.0,
      "endTime": 35.11,
      "duration": 35.11,
      "mascotMode": "pointer",
      "mascotTip": "Đưa hằng số k ra ngoài, và tích phân của f'(x) chính là f(b) - f(a)!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Tính chất cơ bản của tích phân</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Cho các hàm số $f(x), g(x)$ liên tục trên đoạn $[a; b]$ và $k \\in \\mathbb{R}$:</p>\n                  <div style=\"background:rgba(56,189,248,0.12); border-left:4px solid #38bdf8; padding:12px 16px; margin:10px 0; border-radius:0 8px 8px 0;\">\n                    <b>Tính chất 1:</b> $$\\int_a^b f'(x) dx = \\left. f(x) \\right|_a^b = f(b) - f(a)$$\n                  </div>\n                  <div style=\"background:rgba(56,189,248,0.12); border-left:4px solid #38bdf8; padding:12px 16px; margin:10px 0; border-radius:0 8px 8px 0;\">\n                    <b>Tính chất 2 (Đưa hằng số ra ngoài):</b> $$\\int_a^b k f(x) dx = k \\int_a^b f(x) dx$$\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 2,
      "title": "TÁCH TỔNG HIỆU & NỐI CẬN",
      "subtitle": "MỤC 2 • TÍNH CHẤT TUYẾN TÍNH & CHÈN CẬN",
      "startTime": 35.11,
      "endTime": 72.77,
      "duration": 37.66,
      "mascotMode": "talking",
      "mascotTip": "Chèn cận c: ∫_a^b = ∫_a^c + ∫_c^b. Đảo cận đổi dấu: ∫_b^a = -∫_a^b!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#fde047; font-size:22px; margin-bottom:12px;\">2. Tính chất tách tổng hiệu & chèn cận</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <div style=\"background:rgba(254,240,138,0.12); border-left:4px solid #fde047; padding:12px 16px; margin:10px 0; border-radius:0 8px 8px 0;\">\n                    <b>Tính chất 3 (Tách tổng, hiệu):</b>\n                    $$\\int_a^b [f(x) \\pm g(x)] dx = \\int_a^b f(x) dx \\pm \\int_a^b g(x) dx$$\n                  </div>\n                  <div style=\"background:rgba(254,240,138,0.12); border-left:4px solid #fde047; padding:12px 16px; margin:10px 0; border-radius:0 8px 8px 0;\">\n                    <b>Tính chất 4 (Chèn điểm / Nối cận):</b> Với mọi số thực $c$:\n                    $$\\int_a^b f(x) dx = \\int_a^c f(x) dx + \\int_c^b f(x) dx$$\n                  </div>\n                  <p style=\"color:#94a3b8; font-size:14px; margin-top:6px;\">⚠️ Đặc biệt: $\\int_b^a f(x)dx = -\\int_a^b f(x)dx$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "subtitle": "MỤC 2 • 3 BÀI TOÁN TRỌNG TÂM TÍNH CHẤT",
      "startTime": 72.77,
      "endTime": 79.85,
      "duration": 7.08,
      "mascotMode": "cheering",
      "mascotTip": "Áp dụng tính chất tuyến tính và chèn cận giải quyết 3 bài toán sau!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">3. Ba ví dụ rèn luyện điển hình Mục 2</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <ul style=\"margin-left:20px;\">\n                    <li><b>Ví dụ 1 (15s):</b> Tuyến tính hằng số và tổng hiệu $\\int [2f(x) - 3g(x)]dx$ (Nhận biết).</li>\n                    <li><b>Ví dụ 2 (15s):</b> Nối cận và đảo cận (Thông hiểu).</li>\n                    <li><b>Ví dụ 3 (30s):</b> Tích phân hàm chứa dấu giá trị tuyệt đối $|x - 1|$ (Vận dụng).</li>\n                  </ul>\n                  <p style=\"color:#38bdf8; margin-top:12px;\">👉 Đồng hồ đếm ngược thiết kế nhỏ gọn, không che chắn đề bài!</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: TUYẾN TÍNH HẰNG SỐ & HIỆU",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 79.85,
      "endTime": 97.99,
      "duration": 18.14,
      "mascotMode": "thinking",
      "mascotTip": "I = 2(3) - 3(-2) = 6 + 6 = 12!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Tính chất tuyến tính</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Cho $\\int_1^4 f(x) dx = 3$ và $\\int_1^4 g(x) dx = -2$. Tính tích phân:\n                </p>\n                <div style=\"text-align:center; font-size:24px; color:#fef08a; margin:16px 0;\">\n                  $$I = \\int_1^4 [2f(x) - 3g(x)] dx$$\n                </div>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 97.99,
      "endTime": 113.85,
      "duration": 15.86,
      "mascotMode": "magnifier",
      "mascotTip": "2*(3) - 3*(-2) = 6 + 6 = 12. Rất chuẩn!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1</h3>\n                <div style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                  <p>• Áp dụng tính chất tách hiệu và đưa thừa số ra ngoài:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:12px; margin:12px 0; text-align:center;\">\n                    $$I = 2 \\int_1^4 f(x) dx - 3 \\int_1^4 g(x) dx$$\n                  </div>\n                  <p>• Thay giá trị giả thiết đã cho vào biểu thức:</p>\n                  <p>$$I = 2 \\cdot (3) - 3 \\cdot (-2) = 6 + 6 = 12$$</p>\n                  <p><b>Kết luận:</b> $I = 12$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: CHÈN CẬN VÀ ĐẢO CẬN",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 113.85,
      "endTime": 137.63,
      "duration": 23.78,
      "mascotMode": "thinking",
      "mascotTip": "∫_0^5 = ∫_0^2 + ∫_2^5 = 5 + 3 = 8; Đảo cận: ∫_5^2 = -∫_2^5 = -3!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Chèn cận và đảo cận</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Cho $\\int_0^2 f(x) dx = 5$ và $\\int_2^5 f(x) dx = 3$. Hãy tính:\n                </p>\n                <div style=\"text-align:center; font-size:22px; color:#fef08a; margin:14px 0;\">\n                  $$I = \\int_0^5 f(x) dx \\quad \\text{và} \\quad J = \\int_5^2 f(x) dx$$\n                </div>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 137.63,
      "endTime": 155.65,
      "duration": 18.02,
      "mascotMode": "magnifier",
      "mascotTip": "Nối cận ra 8, đảo cận ra -3. Nhớ quy tắc đảo cận đổi dấu!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2</h3>\n                <div style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                  <p><b>1. Tính $I = \\int_0^5 f(x) dx$:</b></p>\n                  <p>Chèn điểm $c = 2$: $I = \\int_0^2 f(x) dx + \\int_2^5 f(x) dx = 5 + 3 = 8$.</p>\n                  <p><b>2. Tính $J = \\int_5^2 f(x) dx$:</b></p>\n                  <p>Áp dụng quy tắc đảo cận: $J = -\\int_2^5 f(x) dx = -3$.</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin-top:10px; text-align:center;\">\n                    <b>Đáp số:</b> $I = 8$ và $J = -3$.\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: TÍCH PHÂN CHỨA TRỊ TUYỆT ĐỐI",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 155.65,
      "endTime": 164.46,
      "duration": 8.81,
      "mascotMode": "thinking",
      "mascotTip": "Nghiệm x = 1 chia đoạn [0; 3] thành [0; 1] và [1; 3] để phá dấu trị tuyệt đối!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Tích phân chứa giá trị tuyệt đối</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Tính tích phân sau:</p>\n                <div style=\"text-align:center; font-size:24px; color:#fef08a; margin:16px 0;\">\n                  $$I = \\int_0^3 |x - 1| dx$$\n                </div>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI TỪNG BƯỚC",
      "startTime": 164.46,
      "endTime": 216.56,
      "duration": 52.1,
      "mascotMode": "magnifier",
      "mascotTip": "∫_0^1 (1-x)dx = 1/2; ∫_1^3 (x-1)dx = 2 => I = 1/2 + 2 = 5/2 = 2.5!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Phá trị tuyệt đối: $|x - 1| = 1 - x$ khi $x \\in [0; 1]$ và $|x - 1| = x - 1$ khi $x \\in [1; 3]$.</p>\n                  <p>• Chèn điểm $x = 1$ để tách tích phân:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    $$I = \\int_0^1 (1 - x) dx + \\int_1^3 (x - 1) dx$$\n                  </div>\n                  <p>• $\\int_0^1 (1 - x) dx = \\left. \\left(x - \\frac{x^2}{2}\\right) \\right|_0^1 = 1 - \\frac{1}{2} = \\frac{1}{2}$.</p>\n                  <p>• $\\int_1^3 (x - 1) dx = \\left. \\left(\\frac{x^2}{2} - x\\right) \\right|_1^3 = \\left(\\frac{9}{2} - 3\\right) - \\left(\\frac{1}{2} - 1\\right) = \\frac{3}{2} + \\frac{1}{2} = 2$.</p>\n                  <p><b>Kết luận:</b> $I = \\frac{1}{2} + 2 = \\frac{5}{2} = 2{,}5$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI SOI BẪY SAI LẦM",
      "subtitle": "PHẦN 4: BẪY TÁCH TÍCH THƯƠNG",
      "startTime": 216.56,
      "endTime": 236.12,
      "duration": 19.56,
      "mascotMode": "magnifier",
      "mascotTip": "Tuyệt đối không có tính chất ∫ f(x)g(x)dx = ∫ f(x)dx * ∫ g(x)dx!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:12px;\">⚠️ Cú Thông Thái cảnh báo bẫy tách tích thương</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <div class=\"trap-warning-box\" style=\"background:rgba(239,68,68,0.15); border-left:4px solid #ef4444; padding:14px 18px; border-radius:0 8px 8px 0;\">\n                    <b style=\"color:#fca5a5; font-size:18px;\">Sai lầm chết người: Tự ý tách tích thương!</b><br>\n                    <span style=\"color:#fecdd3; font-size:17px;\">$$\\int_a^b f(x)g(x) dx \\ne \\left(\\int_a^b f(x)dx\\right) \\cdot \\left(\\int_a^b g(x)dx\\right)$$</span>\n                    Muốn tính tích phân của một tích, ta <b>bắt buộc phải sử dụng phương pháp đổi biến số hoặc tích phân từng phần</b>!\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ GHI NHỚ NHANH",
      "subtitle": "PHẦN 5: QUY TẮC TRỤC SỐ ĐỊNH HƯỚNG",
      "startTime": 236.12,
      "endTime": 256.95,
      "duration": 20.83,
      "mascotMode": "lightbulb",
      "mascotTip": "Vẽ trục số: đi từ trái sang phải (+) mang dấu cộng, đi ngược lại (-) mang dấu trừ!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">💡 Mẹo Thầy Cú: Quy tắc trục số định hướng</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Khi gặp bài toán trắc nghiệm cho nhiều tích phân với các cận đan xen (ví dụ cận $0, 2, 5, 7$):</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:14px; margin:12px 0;\">\n                    • <b>Bước 1:</b> Vẽ trục số và sắp xếp các cận theo thứ tự tăng dần.<br>\n                    • <b>Bước 2:</b> Đi xuôi từ trái sang phải mang dấu cộng $(+)$.<br>\n                    • <b>Bước 3:</b> Đi ngược từ phải sang trái mang dấu trừ $(-)$.\n                  </div>\n                  <p>Quy tắc này giúp các em giải quyết bài toán chèn cận trong 5 giây mà không bao giờ nhầm lẫn!</p>\n                </div>\n            \n    </div>\n    "
    }
  ]
};

  window.CHAPTER4_DATA.bai12_muc3 = {
  "lessonId": "bai12",
  "lessonTitle": "Bài 12: Tích phân",
  "sectionId": "bai12_muc3",
  "sectionTitle": "Mục 3: Phương pháp tính tích phân (Đổi biến & Từng phần)",
  "audio": "/audio/bai12_muc3.mp3",
  "audioSrc": "./audio/bai12_muc3.mp3",
  "audio_src": "./audio/bai12_muc3.mp3",
  "timestamp_src": "timestamps/bai12_muc3.json",
  "totalDuration": 316.43,
  "duration": 316.43,
  "title": "Mục 3: Phương pháp tính tích phân (Đổi biến & Từng phần)",
  "owl_tip": "Đổi biến thì PHẢI ĐỔI CẬN! Từng phần: Nhất log, nhì đa, tam lượng, tứ mũ!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 42.82,
      "id": "part2"
    },
    {
      "time": 81.15,
      "id": "part3"
    },
    {
      "time": 91.04,
      "id": "vd1_q"
    },
    {
      "time": 104.46,
      "id": "vd1_a"
    },
    {
      "time": 137.36,
      "id": "vd2_q"
    },
    {
      "time": 149.02,
      "id": "vd2_a"
    },
    {
      "time": 188.43,
      "id": "vd3_q"
    },
    {
      "time": 205.52,
      "id": "vd3_a"
    },
    {
      "time": 257.82,
      "id": "part4"
    },
    {
      "time": 283.02,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Phương pháp đổi biến số & Quy trình 3 bước",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Phương pháp từng phần & Khẩu quyết đặt u",
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
      "title": "BÀI 12: TÍCH PHÂN",
      "subtitle": "MỤC 3 • PHƯƠNG PHÁP ĐỔI BIẾN SỐ",
      "startTime": 0.0,
      "endTime": 42.82,
      "duration": 42.82,
      "mascotMode": "pointer",
      "mascotTip": "Đặt u = u(x) => du = u'(x)dx. BẮT BUỘC PHẢI ĐỔI CẬN NGAY!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Phương pháp đổi biến số</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Giả sử cần tính tích phân $I = \\int_a^b f(u(x)) u'(x) dx$:</p>\n                  <div style=\"background:rgba(56,189,248,0.12); border-left:4px solid #38bdf8; padding:12px 16px; margin:10px 0; border-radius:0 8px 8px 0;\">\n                    <b>Công thức:</b>\n                    $$\\int_a^b f(u(x)) u'(x) dx = \\int_{u(a)}^{u(b)} f(u) du$$\n                  </div>\n                  <p><b>Quy trình 3 bước:</b></p>\n                  <p>1. Đặt ẩn phụ $u = u(x)$, lấy vi phân $du = u'(x)dx$.</p>\n                  <p>2. <b>Đổi cận:</b> $x = a \\implies u = u(a)$; $x = b \\implies u = u(b)$.</p>\n                  <p>3. Thay vào tính tích phân mới theo biến $u$ (không cần chuyển ngược về biến $x$!).</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 2,
      "title": "PHƯƠNG PHÁP TỪNG PHẦN",
      "subtitle": "MỤC 3 • CÔNG THỨC & THỨ TỰ ƯU TIÊN ĐẶT U",
      "startTime": 42.82,
      "endTime": 81.15,
      "duration": 38.33,
      "mascotMode": "talking",
      "mascotTip": "∫_a^b u dv = uv|_a^b - ∫_a^b v du. Khẩu quyết: Nhất log, nhì đa, tam lượng, tứ mũ!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#fde047; font-size:22px; margin-bottom:12px;\">2. Phương pháp tích phân từng phần</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <div style=\"background:rgba(254,240,138,0.15); border:1.5px solid #fde047; border-radius:10px; padding:12px; margin:10px 0; text-align:center;\">\n                    <span style=\"font-size:20px; color:#fef08a; font-weight:700;\">$$\\int_a^b u dv = \\left. uv \\right|_a^b - \\int_a^b v du$$</span>\n                  </div>\n                  <div style=\"background:rgba(15,23,42,0.85); border-left:4px solid #38bdf8; padding:10px 14px; margin-top:10px; border-radius:0 8px 8px 0;\">\n                    <b>Khẩu quyết chọn ẩn $u$ kinh điển:</b><br>\n                    <span style=\"color:#34d399; font-weight:700; font-size:17px;\">\"Nhất log — Nhì đa — Tam lượng — Tứ mũ\"</span><br>\n                    $\\ln x \\implies P(x) \\implies \\sin x, \\cos x \\implies e^x$\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "subtitle": "MỤC 3 • ĐỔI BIẾN & TỪNG PHẦN CHỐNG BẤM MÁY",
      "startTime": 81.15,
      "endTime": 91.04,
      "duration": 9.89,
      "mascotMode": "cheering",
      "mascotTip": "Cùng rèn luyện 3 ví dụ then chốt với đồng hồ đếm ngược 15s và 30s!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">3. Ba ví dụ rèn luyện điển hình Mục 3</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <ul style=\"margin-left:20px;\">\n                    <li><b>Ví dụ 1 (15s):</b> Đổi biến số cơ bản $u = x^2 + 1$ (Thông hiểu).</li>\n                    <li><b>Ví dụ 2 (15s):</b> Từng phần lượng giác $\\int_0^{\\pi/2} x \\cos x dx$ (Thông hiểu).</li>\n                    <li><b>Ví dụ 3 (30s):</b> Từng phần logarit dạng tham số $a, b$ chống Casio (Vận dụng).</li>\n                  </ul>\n                  <p style=\"color:#38bdf8; margin-top:12px;\">👉 Đồng hồ đếm ngược thiết kế nhỏ gọn, không che chắn nội dung!</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: ĐỔI BIẾN SỐ ĐA THỨC",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 91.04,
      "endTime": 104.46,
      "duration": 13.42,
      "mascotMode": "thinking",
      "mascotTip": "Đặt u = x² + 1 => du = 2x dx. Đổi cận: x = 0 => u = 1; x = 1 => u = 2!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Phương pháp đổi biến số</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Tính tích phân sau bằng phương pháp đổi biến số:</p>\n                <div style=\"text-align:center; font-size:24px; color:#fef08a; margin:16px 0;\">\n                  $$I = \\int_0^1 2x(x^2 + 1)^3 dx$$\n                </div>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 104.46,
      "endTime": 137.36,
      "duration": 32.9,
      "mascotMode": "magnifier",
      "mascotTip": "∫_1^2 u³ du = u⁴/4|_1^2 = (16 - 1)/4 = 15/4 = 3.75. Tuyệt vời!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Đặt $u = x^2 + 1 \\implies du = 2x dx$.</p>\n                  <p>• <b>Đổi cận:</b> Khi $x = 0 \\implies u = 1$; Khi $x = 1 \\implies u = 2$.</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:12px; margin:10px 0; text-align:center;\">\n                    $$I = \\int_1^2 u^3 du = \\left. \\frac{u^4}{4} \\right|_1^2 = \\frac{2^4}{4} - \\frac{1^4}{4} = \\frac{16 - 1}{4} = \\frac{15}{4} = 3{,}75$$\n                  </div>\n                  <p><b>Kết luận:</b> $I = \\frac{15}{4}$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: TÍCH PHÂN TỪNG PHẦN LƯỢNG GIÁC",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 137.36,
      "endTime": 149.02,
      "duration": 11.66,
      "mascotMode": "thinking",
      "mascotTip": "Nhì đa tam lượng: Đặt u = x, dv = cos x dx => du = dx, v = sin x!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Phương pháp từng phần</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">Tính tích phân sau bằng phương pháp từng phần:</p>\n                <div style=\"text-align:center; font-size:24px; color:#fef08a; margin:16px 0;\">\n                  $$J = \\int_0^{\\frac{\\pi}{2}} x \\cos x dx$$\n                </div>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 149.02,
      "endTime": 188.43,
      "duration": 39.41,
      "mascotMode": "magnifier",
      "mascotTip": "x sin x|_0^(π/2) - ∫_0^(π/2) sin x dx = π/2 - 1. Chuẩn xác!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Đặt $\\begin{cases} u = x \\\\ dv = \\cos x dx \\end{cases} \\implies \\begin{cases} du = dx \\\\ v = \\sin x \\end{cases}$</p>\n                  <p>• Theo công thức tích phân từng phần:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    $$J = \\left. (x \\sin x) \\right|_0^{\\frac{\\pi}{2}} - \\int_0^{\\frac{\\pi}{2}} \\sin x dx$$\n                  </div>\n                  <p>• $\\left. (x \\sin x) \\right|_0^{\\frac{\\pi}{2}} = \\frac{\\pi}{2} \\sin\\left(\\frac{\\pi}{2}\\right) - 0 = \\frac{\\pi}{2}$.</p>\n                  <p>• $-\\int_0^{\\frac{\\pi}{2}} \\sin x dx = \\left. \\cos x \\right|_0^{\\frac{\\pi}{2}} = \\cos\\left(\\frac{\\pi}{2}\\right) - \\cos 0 = 0 - 1 = -1$.</p>\n                  <p><b>Kết luận:</b> $J = \\frac{\\pi}{2} - 1$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: TỪNG PHẦN DẠNG THAM SỐ a, b",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 188.43,
      "endTime": 205.52,
      "duration": 17.09,
      "mascotMode": "thinking",
      "mascotTip": "Nhất log nhì đa: Đặt u = ln x, dv = x dx. Tính I để tìm a và b!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Từng phần logarit chống Casio</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng cao)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Biết tích phân $\\int_1^e x \\ln x dx = \\frac{a \\cdot e^2 + b}{4}$ với $a, b$ là các số nguyên.\n                </p>\n                <p style=\"font-size:18px; line-height:1.65; color:#fde047;\">\n                  Hãy tính giá trị của biểu thức: $T = a + b$.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI TỪNG BƯỚC",
      "startTime": 205.52,
      "endTime": 257.82,
      "duration": 52.3,
      "mascotMode": "magnifier",
      "mascotTip": "I = (e² + 1)/4 => a = 1, b = 1 => T = a + b = 2!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Đặt $\\begin{cases} u = \\ln x \\\\ dv = x dx \\end{cases} \\implies \\begin{cases} du = \\frac{1}{x} dx \\\\ v = \\frac{x^2}{2} \\end{cases}$</p>\n                  <p>• Áp dụng công thức từng phần:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    $$I = \\left. \\left(\\frac{x^2}{2} \\ln x\\right) \\right|_1^e - \\int_1^e \\frac{x^2}{2} \\cdot \\frac{1}{x} dx = \\frac{e^2}{2} - \\frac{1}{2} \\int_1^e x dx$$\n                  </div>\n                  <p>• $I = \\frac{e^2}{2} - \\left. \\frac{x^2}{4} \\right|_1^e = \\frac{e^2}{2} - \\frac{e^2 - 1}{4} = \\frac{2e^2 - e^2 + 1}{4} = \\frac{e^2 + 1}{4}$.</p>\n                  <p>• Đồng nhất với $\\frac{a \\cdot e^2 + b}{4} \\implies a = 1, b = 1$.</p>\n                  <p><b>Kết luận:</b> $T = a + b = 1 + 1 = 2$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI SOI BẪY SAI LẦM",
      "subtitle": "PHẦN 4: 2 BẪY TÍNH TÍCH PHÂN SỐNG CÒN",
      "startTime": 257.82,
      "endTime": 283.02,
      "duration": 25.2,
      "mascotMode": "magnifier",
      "mascotTip": "Đổi biến thì PHẢI ĐỔI CẬN; Cẩn thận dấu trừ của công thức từng phần!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:12px;\">⚠️ Cú Thông Thái cảnh báo 2 bẫy nguy hiểm</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <div class=\"trap-warning-box\" style=\"margin-bottom:14px; background:rgba(239,68,68,0.15); border-left:4px solid #ef4444; padding:12px 16px; border-radius:0 8px 8px 0;\">\n                    <b style=\"color:#fca5a5;\">Bẫy 1: Đổi biến nhưng quên đổi cận</b><br>\n                    Trong tích phân, khi đổi sang biến $u$, cận $a, b$ phải đổi thành $u(a), u(b)$. Giữ nguyên cận của $x$ sẽ ra đáp án sai hoàn toàn!\n                  </div>\n                  <div class=\"trap-warning-box\" style=\"background:rgba(245,158,11,0.15); border-left:4px solid #f59e0b; padding:12px 16px; border-radius:0 8px 8px 0;\">\n                    <b style=\"color:#fde047;\">Bẫy 2: Dấu trừ kép trong tích phân từng phần</b><br>\n                    Công thức là $\\left. uv \\right|_a^b - \\int_a^b v du$. Khi $v$ có sẵn dấu trừ (như $\\int \\sin x dx = -\\cos x$), hai dấu trừ biến thành dấu cộng!\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ & KỸ THUẬT CASIO 580",
      "subtitle": "PHẦN 5: TÌM THAM SỐ a, b BẰNG TABLE CASIO",
      "startTime": 283.02,
      "endTime": 316.43,
      "duration": 33.41,
      "mascotMode": "lightbulb",
      "mascotTip": "Bấm tích phân lưu STO A, giải hệ hoặc Table Menu 8 tìm a, b!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">💡 Tuyệt kỹ Casio fx-580VNX chống bài toán tham số</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p><b>Quy trình bấm máy với dạng $I = \\frac{a \\cdot e^2 + b}{4}$:</b></p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:12px 16px; margin:10px 0;\">\n                    1. Bấm tích phân $\\int_1^e x \\ln x dx$ rồi bấm <b>STO $\\to$ A</b>.<br>\n                    2. Ta có phương trình: $4A = a \\cdot e^2 + b \\implies b = 4A - a \\cdot e^2$.<br>\n                    3. Vào <b>MENU 8 (Table)</b>, nhập hàm: $f(x) = 4A - x \\cdot e^2$.<br>\n                    4. Cho $x$ chạy từ $-5$ đến $5$, Step 1. Tìm cặp $(x; f(x))$ nhận giá trị nguyên đẹp $\\implies x = a = 1, b = 1$!\n                  </div>\n                  <p style=\"color:#34d399; font-weight:700;\">Tìm ra đáp số $T = a + b = 2$ chỉ trong 10 giây!</p>\n                </div>\n            \n    </div>\n    "
    }
  ]
};



  window.CHAPTER4_DATA.bai13_muc1 = {
  "lessonId": "bai13",
  "lessonTitle": "Bài 13: Ứng dụng hình học của tích phân",
  "sectionId": "bai13_muc1",
  "sectionTitle": "Mục 1: Tính diện tích hình phẳng",
  "audio": "/audio/bai13_muc1.mp3",
  "audioSrc": "./audio/bai13_muc1.mp3",
  "audio_src": "./audio/bai13_muc1.mp3",
  "timestamp_src": "timestamps/bai13_muc1.json",
  "totalDuration": 293.1,
  "duration": 293.1,
  "title": "Mục 1: Tính diện tích hình phẳng",
  "owl_tip": "S = ∫_a^b |f(x) - g(x)|dx: Luôn nhớ dấu giá trị tuyệt đối!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 43.46,
      "id": "part2"
    },
    {
      "time": 84.69,
      "id": "part3"
    },
    {
      "time": 95.3,
      "id": "vd1_q"
    },
    {
      "time": 108.67,
      "id": "vd1_a"
    },
    {
      "time": 141.89,
      "id": "vd2_q"
    },
    {
      "time": 151.51,
      "id": "vd2_a"
    },
    {
      "time": 179.25,
      "id": "vd3_q"
    },
    {
      "time": 189.4,
      "id": "vd3_a"
    },
    {
      "time": 240.88,
      "id": "part4"
    },
    {
      "time": 263.75,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Diện tích hình phẳng giới hạn bởi đồ thị và trục Ox",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Diện tích hình phẳng giới hạn bởi hai đồ thị",
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
      "title": "BÀI 13: ỨNG DỤNG HÌNH HỌC TÍCH PHÂN",
      "subtitle": "MỤC 1 • DIỆN TÍCH HÌNH PHẲNG GIỚI HẠN BỞI ĐỒ THỊ & TRỤC OX",
      "startTime": 0.0,
      "endTime": 43.46,
      "duration": 43.46,
      "mascotMode": "pointer",
      "mascotTip": "Diện tích luôn có giá trị tuyệt đối: S = ∫_a^b |f(x)|dx!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Diện tích hình phẳng giới hạn bởi đồ thị $y = f(x)$ và trục $Ox$</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Cho hàm số $y = f(x)$ liên tục trên đoạn $[a; b]$. Diện tích hình phẳng giới hạn bởi đồ thị $y = f(x)$, trục hoành $Ox$ ($y = 0$) và hai đường thẳng $x = a, x = b$ ($a < b$) được tính bởi:</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:12px; text-align:center; margin:12px 0;\">\n                    <span style=\"font-size:22px; color:#fef08a; font-weight:700;\">$$S = \\int_a^b |f(x)| dx$$</span>\n                  </div>\n                  <p><b>Quy tắc tính:</b> Tìm các nghiệm của $f(x) = 0$ trên đoạn $[a; b]$ để chia nhỏ tích phân thành các đoạn không đổi dấu, sau đó phá dấu giá trị tuyệt đối.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 2,
      "title": "DIỆN TÍCH GIỮA HAI ĐỒ THỊ",
      "subtitle": "MỤC 1 • CÔNG THỨC DIỆN TÍCH TỔNG QUÁT",
      "startTime": 43.46,
      "endTime": 84.69,
      "duration": 41.23,
      "mascotMode": "talking",
      "mascotTip": "S = ∫_a^b |f(x) - g(x)|dx. Nếu chưa có cận, giải f(x) = g(x) tìm cận a, b!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#fde047; font-size:22px; margin-bottom:12px;\">2. Diện tích hình phẳng giới hạn bởi hai đồ thị hàm số</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Cho $y = f(x)$ và $y = g(x)$ liên tục trên đoạn $[a; b]$. Diện tích hình phẳng giới hạn bởi hai đường cong và hai đường thẳng $x = a, x = b$ là:</p>\n                  <div style=\"background:rgba(254,240,138,0.15); border:1.5px solid #fde047; border-radius:10px; padding:12px; text-align:center; margin:12px 0;\">\n                    <span style=\"font-size:22px; color:#fef08a; font-weight:700;\">$$S = \\int_a^b |f(x) - g(x)| dx$$</span>\n                  </div>\n                  <div style=\"background:rgba(15,23,42,0.85); border-left:4px solid #38bdf8; padding:10px 14px; margin-top:10px; border-radius:0 8px 8px 0;\">\n                    <b>Trường hợp không cho cận $x = a, x = b$:</b><br>\n                    Giải phương trình hoành độ giao điểm $f(x) = g(x)$. Cận dưới $a$ là nghiệm nhỏ nhất, cận trên $b$ là nghiệm lớn nhất.\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "subtitle": "MỤC 1 • 3 DẠNG TOÁN TÍNH DIỆN TÍCH TRỌNG TÂM",
      "startTime": 84.69,
      "endTime": 95.3,
      "duration": 10.61,
      "mascotMode": "cheering",
      "mascotTip": "Cùng thầy rèn luyện 3 bài toán tính diện tích với đồng hồ đếm ngược 15s và 30s!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">3. Ba ví dụ rèn luyện điển hình Mục 1</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <ul style=\"margin-left:20px;\">\n                    <li><b>Ví dụ 1 (15s):</b> Diện tích giới hạn bởi parabol $y = x^2 - 4$ và trục hoành (Nhận biết).</li>\n                    <li><b>Ví dụ 2 (15s):</b> Diện tích giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2x$ (Thông hiểu).</li>\n                    <li><b>Ví dụ 3 (30s):</b> Diện tích giới hạn bởi hàm bậc ba $y = x^3 - 3x$ và trục hoành (Vận dụng đối xứng).</li>\n                  </ul>\n                  <p style=\"color:#38bdf8; margin-top:12px;\">👉 Đồng hồ đếm ngược thiết kế nhỏ gọn, không che chắn đề bài!</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: DIỆN TÍCH PARABOL & TRỤC OX",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 95.3,
      "endTime": 108.67,
      "duration": 13.37,
      "mascotMode": "thinking",
      "mascotTip": "Trên [0; 2], x² - 4 ≤ 0 nên |x² - 4| = 4 - x²!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Tính diện tích hình phẳng cơ bản</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  Tính diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^2 - 4$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 2$.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 108.67,
      "endTime": 141.89,
      "duration": 33.22,
      "mascotMode": "magnifier",
      "mascotTip": "S = ∫_0^2 (4 - x²)dx = (4x - x³/3)|_0^2 = 8 - 8/3 = 16/3!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1</h3>\n                <div style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                  <p>• Với $x \\in [0; 2]$, ta có $x^2 - 4 \\le 0 \\implies |x^2 - 4| = 4 - x^2$.</p>\n                  <p>• Áp dụng công thức tính diện tích hình phẳng:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:12px; margin:10px 0; text-align:center;\">\n                    $$S = \\int_0^2 |x^2 - 4| dx = \\int_0^2 (4 - x^2) dx = \\left. \\left(4x - \\frac{x^3}{3}\\right) \\right|_0^2 = 8 - \\frac{8}{3} = \\frac{16}{3}$$\n                  </div>\n                  <p><b>Kết luận:</b> $S = \\frac{16}{3}$ (đơn vị diện tích).</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: DIỆN TÍCH GIỮA HAI ĐƯỜNG CONG",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 141.89,
      "endTime": 151.51,
      "duration": 9.62,
      "mascotMode": "thinking",
      "mascotTip": "Giải x² = 2x => x = 0, x = 2. Trên [0; 2], đường thẳng 2x nằm trên x²!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Diện tích giới hạn bởi hai đồ thị</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2x$.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 151.51,
      "endTime": 179.25,
      "duration": 27.74,
      "mascotMode": "magnifier",
      "mascotTip": "S = ∫_0^2 (2x - x²)dx = (x² - x³/3)|_0^2 = 4 - 8/3 = 4/3!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2</h3>\n                <div style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                  <p>• Phương trình hoành độ giao điểm: $x^2 = 2x \\iff x(x - 2) = 0 \\iff x = 0$ hoặc $x = 2$.</p>\n                  <p>• Trên $[0; 2]$, ta thấy $2x \\ge x^2$, do đó:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:12px; margin:10px 0; text-align:center;\">\n                    $$S = \\int_0^2 (2x - x^2) dx = \\left. \\left(x^2 - \\frac{x^3}{3}\\right) \\right|_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$$\n                  </div>\n                  <p><b>Kết luận:</b> $S = \\frac{4}{3}$ (đơn vị diện tích).</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: HÀM BẬC BA ĐỐI XỨNG",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 179.25,
      "endTime": 189.4,
      "duration": 10.15,
      "mascotMode": "thinking",
      "mascotTip": "x³ - 3x = 0 => x = -√3, 0, √3. Đồ thị đối xứng qua O => S = 2 * S_[0; √3]!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Diện tích giới hạn bởi đồ thị hàm bậc ba</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  Tính diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^3 - 3x$ và trục hoành $Ox$.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI TỪNG BƯỚC",
      "startTime": 189.4,
      "endTime": 240.88,
      "duration": 51.48,
      "mascotMode": "magnifier",
      "mascotTip": "S = 2 * (3x²/2 - x⁴/4)|_0^√3 = 2 * (9/2 - 9/4) = 9/2 = 4.5!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Phương trình hoành độ giao điểm: $x^3 - 3x = 0 \\iff x \\in \\{-\\sqrt{3}; 0; \\sqrt{3}\\}$.</p>\n                  <p>• Vì hàm số $f(x) = x^3 - 3x$ là hàm lẻ, đồ thị đối xứng qua gốc $O$ nên diện tích hai phần bằng nhau:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    $$S = 2 \\int_0^{\\sqrt{3}} |x^3 - 3x| dx = 2 \\int_0^{\\sqrt{3}} (3x - x^3) dx = 2 \\left. \\left(\\frac{3x^2}{2} - \\frac{x^4}{4}\\right) \\right|_0^{\\sqrt{3}}$$\n                  </div>\n                  <p>• $S = 2 \\left(\\frac{3 \\cdot 3}{2} - \\frac{9}{4}\\right) = 2 \\left(\\frac{9}{2} - \\frac{9}{4}\\right) = 2 \\cdot \\frac{9}{4} = \\frac{9}{2} = 4{,}5$.</p>\n                  <p><b>Kết luận:</b> $S = \\frac{9}{2} = 4{,}5$ (đơn vị diện tích).</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI SOI BẪY SAI LẦM",
      "subtitle": "PHẦN 4: BẪY QUÊN DẤU GIÁ TRỊ TUYỆT ĐỐI",
      "startTime": 240.88,
      "endTime": 263.75,
      "duration": 22.87,
      "mascotMode": "magnifier",
      "mascotTip": "Không có giá trị tuyệt đối, tích phân từ -√3 đến √3 của x³ - 3x bằng 0!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:12px;\">⚠️ Cú Thông Thái cảnh báo bẫy diện tích</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <div class=\"trap-warning-box\" style=\"background:rgba(239,68,68,0.15); border-left:4px solid #ef4444; padding:14px 18px; border-radius:0 8px 8px 0;\">\n                    <b style=\"color:#fca5a5; font-size:18px;\">Sai lầm chết người: Bỏ quên dấu giá trị tuyệt đối!</b><br>\n                    Ví dụ ở câu 3, nếu tính $\\int_{-\\sqrt{3}}^{\\sqrt{3}} (x^3 - 3x)dx$, kết quả sẽ ra $0$ vì phần đồ thị phía dưới triệt tiêu phần phía trên!<br>\n                    <span style=\"color:#fde047;\">Khắc cốt ghi tâm: Diện tích hình phẳng luôn là số dương $S > 0$, công thức luôn chứa $|f(x) - g(x)|$!</span>\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ & BẤM CASIO 580",
      "subtitle": "PHẦN 5: BẤM SHIFT ABS TÍNH DIỆN TÍCH NHANH",
      "startTime": 263.75,
      "endTime": 293.1,
      "duration": 29.35,
      "mascotMode": "lightbulb",
      "mascotTip": "Bấm ∫ + Shift Abs [x] để Casio tự động phá trị tuyệt đối trong 3 giây!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">💡 Tuyệt kỹ bấm máy tính Casio fx-580VNX</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Khi giải các bài trắc nghiệm tính diện tích:</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:14px; margin:12px 0;\">\n                    • <b>Bước 1:</b> Bấm phím tích phân $\\int_{\\square}^{\\square}$.<br>\n                    • <b>Bước 2:</b> Bấm <b>SHIFT + [ ( ] (Abs)</b> để xuất hiện dấu $|\\square|$.<br>\n                    • <b>Bước 3:</b> Nhập hiệu hai hàm số $f(x) - g(x)$ và hai cận $a, b$.<br>\n                    • <b>Bước 4:</b> Bấm [=] để nhận ngay kết quả diện tích chính xác 100%!\n                  </div>\n                  <p style=\"color:#34d399; font-weight:700;\">Không cần mất công xét dấu hay vẽ đồ thị phân chia đoạn!</p>\n                </div>\n            \n    </div>\n    "
    }
  ]
};

  window.CHAPTER4_DATA.bai13_muc2 = {
  "lessonId": "bai13",
  "lessonTitle": "Bài 13: Ứng dụng hình học của tích phân",
  "sectionId": "bai13_muc2",
  "sectionTitle": "Mục 2: Tính thể tích vật thể & Khối tròn xoay",
  "audio": "/audio/bai13_muc2.mp3",
  "audioSrc": "./audio/bai13_muc2.mp3",
  "audio_src": "./audio/bai13_muc2.mp3",
  "timestamp_src": "timestamps/bai13_muc2.json",
  "totalDuration": 303.03,
  "duration": 303.03,
  "title": "Mục 2: Tính thể tích vật thể & Khối tròn xoay",
  "owl_tip": "Thiết diện S(x): không có π. Khối tròn xoay quanh Ox: V = π ∫ [f(x)]² dx!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 43.15,
      "id": "part2"
    },
    {
      "time": 84.5,
      "id": "part3"
    },
    {
      "time": 93.81,
      "id": "vd1_q"
    },
    {
      "time": 118.17,
      "id": "vd1_a"
    },
    {
      "time": 148.7,
      "id": "vd2_q"
    },
    {
      "time": 167.61,
      "id": "vd2_a"
    },
    {
      "time": 196.99,
      "id": "vd3_q"
    },
    {
      "time": 209.28,
      "id": "vd3_a"
    },
    {
      "time": 256.97,
      "id": "part4"
    },
    {
      "time": 281.31,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Thể tích vật thể bất kỳ theo thiết diện S(x)",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Thể tích khối tròn xoay quanh trục Ox",
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
      "partTitle": "Phần 5: Mẹo Thầy Cú phân biệt 2 công thức thể tích",
      "scenes": [
        11
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 13: ỨNG DỤNG HÌNH HỌC TÍCH PHÂN",
      "subtitle": "MỤC 2 • THỂ TÍCH VẬT THỂ BẤT KỲ CẮT THEO THIẾT DIỆN",
      "startTime": 0.0,
      "endTime": 43.15,
      "duration": 43.15,
      "mascotMode": "pointer",
      "mascotTip": "Thể tích vật thể cắt theo thiết diện S(x): V = ∫_a^b S(x)dx (KHÔNG CÓ π)!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Thể tích vật thể bất kỳ (Thiết diện vuông góc với $Ox$)</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Cắt vật thể bởi hai mặt phẳng vuông góc với trục $Ox$ tại $x = a$ và $x = b$ ($a < b$).</p>\n                  <p>Mặt phẳng vuông góc với $Ox$ tại điểm có hoành độ $x$ ($a \\le x \\le b$) cắt vật thể theo thiết diện có diện tích là $S(x)$ ($S(x)$ liên tục trên $[a; b]$):</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:12px; text-align:center; margin:12px 0;\">\n                    <span style=\"font-size:22px; color:#fef08a; font-weight:700;\">$$V = \\int_a^b S(x) dx$$</span>\n                  </div>\n                  <p style=\"color:#94a3b8;\">⚠️ Lưu ý quan trọng: Công thức thiết diện $S(x)$ <b>không có hằng số $\\pi$</b> phía trước.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 2,
      "title": "THỂ TÍCH KHỐI TRÒN XOAY",
      "subtitle": "MỤC 2 • QUAY QUANH TRỤC HOÀNH OX",
      "startTime": 43.15,
      "endTime": 84.5,
      "duration": 41.35,
      "mascotMode": "talking",
      "mascotTip": "V = π ∫_a^b [f(x)]² dx: Bắt buộc CÓ π ở trước và [f(x)]² bên trong!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#fde047; font-size:22px; margin-bottom:12px;\">2. Thể tích khối tròn xoay quay quanh trục $Ox$</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Cho hình phẳng giới hạn bởi đồ thị hàm số $y = f(x)$ liên tục trên đoạn $[a; b]$, trục hoành $Ox$ và hai đường thẳng $x = a, x = b$. Khi quay hình phẳng quanh trục $Ox$:</p>\n                  <div style=\"background:rgba(254,240,138,0.15); border:1.5px solid #fde047; border-radius:10px; padding:14px; text-align:center; margin:12px 0;\">\n                    <span style=\"font-size:22px; color:#fef08a; font-weight:700;\">$$V = \\pi \\int_a^b [f(x)]^2 dx$$</span>\n                  </div>\n                  <div style=\"background:rgba(15,23,42,0.85); border-left:4px solid #38bdf8; padding:10px 14px; margin-top:10px; border-radius:0 8px 8px 0;\">\n                    <b>Khối tròn xoay giới hạn bởi hai đồ thị $y = f(x)$ và $y = g(x)$:</b><br>\n                    $$V = \\pi \\int_a^b \\left| [f(x)]^2 - [g(x)]^2 \\right| dx$$\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "subtitle": "MỤC 2 • 3 BÀI TOÁN THỂ TÍCH TRỌNG TÂM",
      "startTime": 84.5,
      "endTime": 93.81,
      "duration": 9.31,
      "mascotMode": "cheering",
      "mascotTip": "Cùng thầy thực hành 3 bài toán thể tích với đồng hồ 15s và 30s!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">3. Ba ví dụ rèn luyện điển hình Mục 2</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <ul style=\"margin-left:20px;\">\n                    <li><b>Ví dụ 1 (15s):</b> Thể tích vật thể có diện tích thiết diện $S(x)$ (Nhận biết).</li>\n                    <li><b>Ví dụ 2 (15s):</b> Thể tích khối tròn xoay cơ bản quay quanh $Ox$ (Thông hiểu).</li>\n                    <li><b>Ví dụ 3 (30s):</b> Thể tích khối tròn xoay giới hạn bởi 2 đường cong $y = x^2$ và $y = \\sqrt{x}$ (Vận dụng).</li>\n                  </ul>\n                  <p style=\"color:#38bdf8; margin-top:12px;\">👉 Đồng hồ đếm ngược thiết kế nhỏ gọn, không che chắn đề bài!</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: THỂ TÍCH THIẾT DIỆN S(x)",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 93.81,
      "endTime": 118.17,
      "duration": 24.36,
      "mascotMode": "thinking",
      "mascotTip": "S(x) = x * 2√x = 2x^(3/2). V = ∫_0^3 S(x)dx (KHÔNG có π)!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Thể tích vật thể theo thiết diện</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Cho một vật thể nằm giữa hai mặt phẳng $x = 0$ và $x = 3$. Thiết diện của vật thể khi cắt bởi mặt phẳng vuông góc với trục $Ox$ tại hoành độ $x$ là một hình chữ nhật có kích thước $x$ và $2\\sqrt{x}$. Tính thể tích $V$ của vật thể.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 118.17,
      "endTime": 148.7,
      "duration": 30.53,
      "mascotMode": "magnifier",
      "mascotTip": "V = ∫_0^3 2x^(3/2)dx = (4/5)x²√x|_0^3 = (4/5)*9√3 = 36√3/5!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1</h3>\n                <div style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                  <p>• Diện tích thiết diện tại hoành độ $x$: $S(x) = x \\cdot 2\\sqrt{x} = 2x^{3/2}$.</p>\n                  <p>• Thể tích vật thể là:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:12px; margin:10px 0; text-align:center;\">\n                    $$V = \\int_0^3 S(x) dx = \\int_0^3 2x^{3/2} dx = \\left. \\left(2 \\cdot \\frac{x^{5/2}}{5/2}\\right) \\right|_0^3 = \\left. \\frac{4}{5} x^2\\sqrt{x} \\right|_0^3 = \\frac{4}{5} \\cdot 9\\sqrt{3} = \\frac{36\\sqrt{3}}{5}$$\n                  </div>\n                  <p><b>Kết luận:</b> $V = \\frac{36\\sqrt{3}}{5}$ (đơn vị thể tích).</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: THỂ TÍCH KHỐI TRÒN XOAY",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 148.7,
      "endTime": 167.61,
      "duration": 18.91,
      "mascotMode": "thinking",
      "mascotTip": "V = π ∫_0^4 (√x)² dx = π ∫_0^4 x dx = π * x²/2|_0^4 = 8π!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Thể tích khối tròn xoay quanh Ox</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi đồ thị $y = \\sqrt{x}$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 4$ xung quanh trục $Ox$.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 167.61,
      "endTime": 196.99,
      "duration": 29.38,
      "mascotMode": "magnifier",
      "mascotTip": "V = π * 16/2 = 8π. Nhớ phải có π và bình phương hàm số!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2</h3>\n                <div style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                  <p>• Áp dụng công thức thể tích khối tròn xoay quanh trục $Ox$:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:12px; margin:10px 0; text-align:center;\">\n                    $$V = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\int_0^4 x dx = \\left. \\pi \\cdot \\frac{x^2}{2} \\right|_0^4 = \\pi \\cdot \\frac{16}{2} = 8\\pi$$\n                  </div>\n                  <p><b>Kết luận:</b> $V = 8\\pi$ (đơn vị thể tích).</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: QUAY HÌNH PHẲNG GIỮA 2 ĐỒ THỊ",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 196.99,
      "endTime": 209.28,
      "duration": 12.29,
      "mascotMode": "thinking",
      "mascotTip": "Giao điểm x = 0, x = 1. V = π ∫_0^1 |(√x)² - (x²)²| dx = π ∫_0^1 (x - x⁴)dx!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Quay hình phẳng giới hạn bởi 2 đường cong</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  Tính thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi hai đường cong $y = x^2$ và $y = \\sqrt{x}$ xung quanh trục $Ox$.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI TỪNG BƯỚC",
      "startTime": 209.28,
      "endTime": 256.97,
      "duration": 47.69,
      "mascotMode": "magnifier",
      "mascotTip": "V = π * (1/2 - 1/5) = 3π/10. Tuyệt đối chuẩn xác!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Phương trình hoành độ giao điểm: $x^2 = \\sqrt{x} \\iff x^4 = x \\iff x = 0$ hoặc $x = 1$.</p>\n                  <p>• Trên $[0; 1]$, ta có $\\sqrt{x} \\ge x^2 \\implies (\\sqrt{x})^2 \\ge (x^2)^2$.</p>\n                  <p>• Thể tích khối tròn xoay là:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    $$V = \\pi \\int_0^1 (x - x^4) dx = \\left. \\pi \\left(\\frac{x^2}{2} - \\frac{x^5}{5}\\right) \\right|_0^1 = \\pi \\left(\\frac{1}{2} - \\frac{1}{5}\\right) = \\frac{3\\pi}{10}$$\n                  </div>\n                  <p><b>Kết luận:</b> $V = \\frac{3\\pi}{10}$ (đơn vị thể tích).</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI SOI BẪY SAI LẦM",
      "subtitle": "PHẦN 4: 2 BẪY TÍNH THỂ TÍCH THƯỜNG GẶP",
      "startTime": 256.97,
      "endTime": 281.31,
      "duration": 24.34,
      "mascotMode": "magnifier",
      "mascotTip": "Nhớ: Bắt buộc CÓ π và BÌNH PHƯƠNG hàm số khi tính khối tròn xoay!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:12px;\">⚠️ Cú Thông Thái cảnh báo 2 bẫy nguy hiểm</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <div class=\"trap-warning-box\" style=\"margin-bottom:14px; background:rgba(239,68,68,0.15); border-left:4px solid #ef4444; padding:12px 16px; border-radius:0 8px 8px 0;\">\n                    <b style=\"color:#fca5a5;\">Bẫy 1: Quên nhân $\\pi$ ở phía trước</b><br>\n                    Công thức thể tích khối tròn xoay là $V = \\pi \\int_a^b [f(x)]^2 dx$. Rất nhiều bạn quên số $\\pi$ dẫn đến chọn sai phương án trắc nghiệm!\n                  </div>\n                  <div class=\"trap-warning-box\" style=\"background:rgba(245,158,11,0.15); border-left:4px solid #f59e0b; padding:12px 16px; border-radius:0 8px 8px 0;\">\n                    <b style=\"color:#fde047;\">Bẫy 2: Quên bình phương hàm số</b><br>\n                    Nhiều bạn nhầm lẫn công thức diện tích sang thể tích, lấy $\\pi \\int f(x)dx$ thay vì $\\pi \\int [f(x)]^2 dx$.\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ PHÂN BIỆT THỂ TÍCH",
      "subtitle": "PHẦN 5: BẢNG SO SÁNH 2 DẠNG BÀI TOÁN THỂ TÍCH",
      "startTime": 281.31,
      "endTime": 303.03,
      "duration": 21.72,
      "mascotMode": "lightbulb",
      "mascotTip": "Thiết diện S(x) => KHÔNG có π. Khối tròn xoay => BẮT BUỘC có π và [f(x)]²!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">💡 Mẹo Thầy Cú phân biệt 2 công thức thể tích</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <table style=\"width:100%; border-collapse:collapse; margin-top:8px;\">\n                    <tr style=\"background:rgba(56,189,248,0.2); border-bottom:2px solid #38bdf8;\">\n                      <th style=\"padding:10px; text-align:left;\">Đặc điểm đề bài</th>\n                      <th style=\"padding:10px; text-align:left;\">Công thức chuẩn</th>\n                      <th style=\"padding:10px; text-align:left;\">Có $\\pi$ không?</th>\n                    </tr>\n                    <tr style=\"border-bottom:1px solid rgba(255,255,255,0.1);\">\n                      <td style=\"padding:10px;\">Cắt theo thiết diện diện tích $S(x)$</td>\n                      <td style=\"padding:10px; color:#fde047;\">$V = \\int_a^b S(x) dx$</td>\n                      <td style=\"padding:10px; color:#ef4444; font-weight:700;\">KHÔNG CÓ $\\pi$</td>\n                    </tr>\n                    <tr>\n                      <td style=\"padding:10px;\">Quay hình phẳng quanh trục $Ox$</td>\n                      <td style=\"padding:10px; color:#34d399;\">$V = \\pi \\int_a^b [f(x)]^2 dx$</td>\n                      <td style=\"padding:10px; color:#34d399; font-weight:700;\">BẮT BUỘC CÓ $\\pi$</td>\n                    </tr>\n                  </table>\n                </div>\n            \n    </div>\n    "
    }
  ]
};

  window.CHAPTER4_DATA.bai13_muc3 = {
  "lessonId": "bai13",
  "lessonTitle": "Bài 13: Ứng dụng hình học của tích phân",
  "sectionId": "bai13_muc3",
  "sectionTitle": "Mục 3: Ứng dụng tích phân trong bài toán thực tế",
  "audio": "/audio/bai13_muc3.mp3",
  "audioSrc": "./audio/bai13_muc3.mp3",
  "audio_src": "./audio/bai13_muc3.mp3",
  "timestamp_src": "timestamps/bai13_muc3.json",
  "totalDuration": 341.76,
  "duration": 341.76,
  "title": "Mục 3: Ứng dụng tích phân trong bài toán thực tế",
  "owl_tip": "Đặt gốc O đối xứng => y = -ax² + h. Công thức Archimedes: S = (2/3)*h*d!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 37.01,
      "id": "part2"
    },
    {
      "time": 75.63,
      "id": "part3"
    },
    {
      "time": 85.95,
      "id": "vd1_q"
    },
    {
      "time": 101.19,
      "id": "vd1_a"
    },
    {
      "time": 150.92,
      "id": "vd2_q"
    },
    {
      "time": 177.08,
      "id": "vd2_a"
    },
    {
      "time": 214.23,
      "id": "vd3_q"
    },
    {
      "time": 238.42,
      "id": "vd3_a"
    },
    {
      "time": 287.64,
      "id": "part4"
    },
    {
      "time": 307.06,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Ứng dụng thực tế của tích phân trong đời sống",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Mô hình hoá toán học & Quy trình 3 bước",
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
      "partTitle": "Phần 5: Mẹo Thầy Cú & Công thức Archimedes",
      "scenes": [
        11
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 13: ỨNG DỤNG HÌNH HỌC TÍCH PHÂN",
      "subtitle": "MỤC 3 • ỨNG DỤNG TÍCH PHÂN THỰC TẾ ĐỜI SỐNG",
      "startTime": 0.0,
      "endTime": 37.01,
      "duration": 37.01,
      "mascotMode": "pointer",
      "mascotTip": "Cổng parabol, thùng rượu gỗ, bồn hoa lát gạch - tất cả đều giải bằng tích phân!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Các bài toán ứng dụng thực tế của tích phân</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Tích phân là công cụ toán học không thể thiếu trong kỹ thuật, kiến trúc và kinh tế:</p>\n                  <ul style=\"margin-left:20px;\">\n                    <li><b>Kiến trúc & Xây dựng:</b> Tính diện tích mái vòm, cửa sổ parabol, vòm cầu, mặt bằng cảnh quan sân vườn.</li>\n                    <li><b>Sản xuất & Công nghiệp:</b> Tính thể tích và dung tích bồn chứa chất lỏng, bình hoa nghệ thuật, thùng rượu gỗ tròn xoay.</li>\n                    <li><b>Kinh tế & Dự toán:</b> Tính chi phí nhân công, vật liệu lát gạch men, phủ sơn, lắp kính cường lực theo mét vuông.</li>\n                  </ul>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 2,
      "title": "MÔ HÌNH HÓA TOÁN HỌC",
      "subtitle": "MỤC 3 • QUY TRÌNH 3 BƯỚC CHỌN HỆ TRỤC OXY",
      "startTime": 37.01,
      "endTime": 75.63,
      "duration": 38.62,
      "mascotMode": "talking",
      "mascotTip": "Đặt gốc O tại tâm đối xứng để parabol có dạng chẵn đẹp: y = -ax² + h!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#fde047; font-size:22px; margin-bottom:12px;\">2. Quy trình 3 bước giải bài toán thực tế</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <div style=\"background:rgba(254,240,138,0.12); border-left:4px solid #fde047; padding:10px 14px; margin:8px 0; border-radius:0 8px 8px 0;\">\n                    <b>Bước 1: Chọn hệ trục toạ độ $Oxy$ tối ưu:</b><br>\n                    Khéo léo chọn gốc toạ độ $O$ tại điểm đối xứng (trung điểm đáy hoặc đỉnh) để hàm số có dạng chẵn đơn giản nhất $y = -ax^2 + h$.\n                  </div>\n                  <div style=\"background:rgba(56,189,248,0.12); border-left:4px solid #38bdf8; padding:10px 14px; margin:8px 0; border-radius:0 8px 8px 0;\">\n                    <b>Bước 2: Lập phương trình các đường biên:</b><br>\n                    Xác định toạ độ các điểm đặc biệt từ giả thiết hình vẽ (chiều cao, bề rộng đáy) để tìm hệ số của hàm số.\n                  </div>\n                  <div style=\"background:rgba(52,211,153,0.12); border-left:4px solid #10b981; padding:10px 14px; margin:8px 0; border-radius:0 8px 8px 0;\">\n                    <b>Bước 3: Thiết lập tích phân & tính toán:</b><br>\n                    Áp dụng công thức $S = \\int |f - g| dx$ hoặc $V = \\pi \\int f^2 dx$, kết hợp đơn giá để tìm chi phí.\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "subtitle": "MỤC 3 • 3 BÀI TOÁN THỰC TẾ CHỌN LỌC",
      "startTime": 75.63,
      "endTime": 85.95,
      "duration": 10.32,
      "mascotMode": "cheering",
      "mascotTip": "Cùng thầy giải quyết 3 bài toán thực tế thú vị với đồng hồ 15s và 30s!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">3. Ba ví dụ rèn luyện điển hình Mục 3</h3>\n                <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                  <ul style=\"margin-left:20px;\">\n                    <li><b>Ví dụ 1 (15s):</b> Diện tích cổng trường hình parabol cao 4m, rộng 4m (Thông hiểu).</li>\n                    <li><b>Ví dụ 2 (15s):</b> Dung tích thùng rượu gỗ tròn xoay (Thông hiểu).</li>\n                    <li><b>Ví dụ 3 (30s):</b> Dự toán chi phí lát gạch men trang trí bồn hoa hình 2 parabol (Vận dụng cao).</li>\n                  </ul>\n                  <p style=\"color:#38bdf8; margin-top:12px;\">👉 Đồng hồ đếm ngược thiết kế nhỏ gọn, không che chắn đề bài!</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: DIỆN TÍCH CỔNG TRƯỜNG PARABOL",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 85.95,
      "endTime": 101.19,
      "duration": 15.24,
      "mascotMode": "thinking",
      "mascotTip": "Parabol đỉnh (0; 4), qua (2; 0) => y = 4 - x². S = ∫_(-2)^2 (4 - x²)dx!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Diện tích cánh cổng hình Parabol</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  Một cánh cổng trường học có dạng hình parabol có chiều cao $4\\text{ m}$ và bề rộng chân cổng là $4\\text{ m}$. Hãy tính diện tích mặt phẳng của cánh cổng đó.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 101.19,
      "endTime": 150.92,
      "duration": 49.73,
      "mascotMode": "magnifier",
      "mascotTip": "S = 2 * (8 - 8/3) = 32/3 m² ≈ 10.67 m²!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Chọn hệ trục $Oxy$ với gốc $O$ là trung điểm chân cổng. Đỉnh $I(0; 4)$, chân cổng là $A(-2; 0)$ và $B(2; 0)$.</p>\n                  <p>• Parabol có dạng: $y = -ax^2 + 4$. Điểm $B(2; 0) \\implies -4a + 4 = 0 \\implies a = 1 \\implies y = 4 - x^2$.</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    $$S = \\int_{-2}^2 (4 - x^2) dx = 2 \\int_0^2 (4 - x^2) dx = 2 \\left. \\left(4x - \\frac{x^3}{3}\\right) \\right|_0^2 = 2 \\left(8 - \\frac{8}{3}\\right) = \\frac{32}{3}\\text{ (m}^2)$$\n                  </div>\n                  <p><b>Kết luận:</b> Diện tích cổng là $S = \\frac{32}{3}\\text{ m}^2 \\approx 10{,}67\\text{ m}^2$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: DUNG TÍCH THÙNG RƯỢU GỖ",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 150.92,
      "endTime": 177.08,
      "duration": 26.16,
      "mascotMode": "thinking",
      "mascotTip": "V = π ∫_(-40)^40 (-x²/200 + 30)² dx. Đổi cm³ ra lít chia cho 1000!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Dung tích thùng rượu gỗ tròn xoay</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Một thùng rượu vang bằng gỗ có dạng khối tròn xoay được tạo thành khi quay cung parabol $y = -\\frac{1}{200}x^2 + 30\\text{ (cm)}$ với $x \\in [-40; 40]$ quanh trục đối xứng $Ox$. Hãy tính thể tích thùng rượu theo đơn vị lít.\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI & BÌNH LUẬN",
      "startTime": 177.08,
      "endTime": 214.23,
      "duration": 37.15,
      "mascotMode": "magnifier",
      "mascotTip": "V ≈ 189199 cm³ ≈ 189.2 lít. Rất thực tế và chuẩn xác!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Thể tích thùng rượu là thể tích khối tròn xoay quanh trục $Ox$:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    $$V = \\pi \\int_{-40}^{40} \\left(-\\frac{1}{200}x^2 + 30\\right)^2 dx = 2\\pi \\int_0^{40} \\left(\\frac{x^4}{40000} - 0{,}3x^2 + 900\\right) dx$$\n                  </div>\n                  <p>• Tính toán tích phân: $V = 2\\pi \\cdot 30112 = 60224\\pi \\approx 189199\\text{ cm}^3$.</p>\n                  <p>• Đổi sang đơn vị lít ($1\\text{ lít} = 1000\\text{ cm}^3$): $V \\approx 189{,}2\\text{ lít}$.</p>\n                  <p><b>Kết luận:</b> Thùng rượu có dung tích xấp xỉ $189{,}2\\text{ lít}$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: CHI PHÍ LÁT GẠCH BỒN HOA",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 214.23,
      "endTime": 238.42,
      "duration": 24.19,
      "mascotMode": "thinking",
      "mascotTip": "4 - x² = x² - 4 => x = ±2. S = ∫_(-2)^2 (8 - 2x²)dx. Chi phí = S * 250.000đ!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Dự toán chi phí thi công bồn hoa</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng cao)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n                <p style=\"font-size:17px; line-height:1.65; color:#f8fafc;\">\n                  Một bồn hoa có dạng hình phẳng giới hạn bởi hai parabol đối xứng nhau: $y = 4 - x^2$ và $y = x^2 - 4\\text{ (m)}$. Nhà trường muốn lát gạch men trang trí toàn bộ bồn hoa với đơn giá $250.000\\text{ đồng/m}^2$.\n                </p>\n                <p style=\"font-size:17px; line-height:1.65; color:#fde047;\">\n                  Hỏi tổng chi phí cần chi trả là bao nhiêu tiền (làm tròn đến hàng nghìn đồng)?\n                </p>\n                \n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "HƯỚNG DẪN GIẢI TỪNG BƯỚC",
      "startTime": 238.42,
      "endTime": 287.64,
      "duration": 49.22,
      "mascotMode": "magnifier",
      "mascotTip": "S = 64/3 m² => Chi phí = (64/3)*250.000 ≈ 5.333.000 đồng!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>• Phương trình giao điểm: $4 - x^2 = x^2 - 4 \\iff 2x^2 = 8 \\iff x = \\pm 2$.</p>\n                  <p>• Diện tích bồn hoa:</p>\n                  <div style=\"background:rgba(52,211,153,0.12); border:1.5px solid #10b981; border-radius:10px; padding:10px; margin:8px 0; text-align:center;\">\n                    $$S = \\int_{-2}^2 [(4 - x^2) - (x^2 - 4)] dx = \\int_{-2}^2 (8 - 2x^2) dx = \\left. \\left(8x - \\frac{2x^3}{3}\\right) \\right|_{-2}^2 = \\frac{64}{3}\\text{ (m}^2)$$\n                  </div>\n                  <p>• Tổng chi phí lát gạch men:</p>\n                  <p>$$\\text{Chi phí} = \\frac{64}{3} \\times 250.000 = \\frac{16.000.000}{3} \\approx 5.333.333\\text{ (đồng)}$$</p>\n                  <p><b>Kết luận:</b> Tổng chi phí xấp xỉ $5.333.000\\text{ đồng}$.</p>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI SOI BẪY SAI LẦM",
      "subtitle": "PHẦN 4: BẪY ĐƠN VỊ ĐO TRONG BÀI TOÁN THỰC TẾ",
      "startTime": 287.64,
      "endTime": 307.06,
      "duration": 19.42,
      "mascotMode": "magnifier",
      "mascotTip": "Luôn kiểm tra đơn vị: cm³ ra lít phải chia 1000; kích thước mét mới nhân đơn giá m²!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:12px;\">⚠️ Cú Thông Thái cảnh báo bẫy đơn vị đo lường</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <div class=\"trap-warning-box\" style=\"background:rgba(239,68,68,0.15); border-left:4px solid #ef4444; padding:14px 18px; border-radius:0 8px 8px 0;\">\n                    <b style=\"color:#fca5a5; font-size:18px;\">Sai lầm chết người: Không đồng nhất đơn vị đo lường!</b><br>\n                    • Nếu toạ độ tính bằng $\\text{cm}$ thì thể tích là $\\text{cm}^3$. Đổi ra <b>lít</b> phải chia cho $1.000$ ($1\\text{ dm}^3 = 1\\text{ lít} = 1.000\\text{ cm}^3$).<br>\n                    • Nếu toạ độ tính bằng $\\text{m}$ thì thể tích là $\\text{m}^3$. Đổi ra <b>lít</b> phải nhân với $1.000$ ($1\\text{ m}^3 = 1.000\\text{ lít}$).<br>\n                    <span style=\"color:#fde047;\">Luôn quy đổi đơn vị chuẩn xác trước khi tính chi phí hoặc trả lời đáp số!</span>\n                  </div>\n                </div>\n            \n    </div>\n    "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ & CÔNG THỨC VÀNG",
      "subtitle": "PHẦN 5: CÔNG THỨC TÍNH NHANH DIỆN TÍCH PARABOL",
      "startTime": 307.06,
      "endTime": 341.76,
      "duration": 34.7,
      "mascotMode": "lightbulb",
      "mascotTip": "Công thức Archimedes: S_parabol = (2/3) * h * d (chiều cao h, bề rộng đáy d)!",
      "bodyHtml": "\n    <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n      \n                <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">💡 Công thức vàng tính nhanh diện tích Parabol (Archimedes)</h3>\n                <div style=\"font-size:16px; line-height:1.65; color:#f8fafc;\">\n                  <p>Với hình phẳng giới hạn bởi một parabol và đường thẳng vuông góc với trục đối xứng (như cánh cổng hoặc vòm cầu):</p>\n                  <div style=\"background:rgba(56,189,248,0.15); border:1.5px solid #38bdf8; border-radius:10px; padding:14px; text-align:center; margin:12px 0;\">\n                    <span style=\"font-size:22px; color:#fde047; font-weight:700;\">$$S = \\frac{2}{3} \\cdot h \\cdot d$$</span><br>\n                    <span style=\"font-size:15px; color:#cbd5e1;\">(trong đó: $h$ là chiều cao từ đỉnh đến đáy, $d$ là bề rộng đáy)</span>\n                  </div>\n                  <p><b>Áp dụng ngay Ví dụ 1:</b> $h = 4\\text{ m}$, $d = 4\\text{ m} \\implies S = \\frac{2}{3} \\times 4 \\times 4 = \\frac{32}{3}\\text{ m}^2$ trong đúng 3 giây!</p>\n                </div>\n            \n    </div>\n    "
    }
  ]
};

}
