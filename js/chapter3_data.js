// Dữ liệu Chương 3: Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm (KNTT)
if (typeof window.CHAPTER3_DATA === 'undefined') window.CHAPTER3_DATA = {};

/* =========================================================================
   BÀI 9: KHOẢNG BIẾN THIÊN VÀ KHOẢNG TỨ PHÂN VỊ CỦA MẪU SỐ LIỆU GHÉP NHÓM
   ========================================================================= */
window.CHAPTER3_DATA.bai9_muc1 = {
  "lessonId": "bai9",
  "lessonTitle": "Bài 9: Khoảng biến thiên & Khoảng tứ phân vị",
  "sectionId": "bai9_muc1",
  "sectionTitle": "Mục 1: Khoảng biến thiên của mẫu số liệu ghép nhóm",
  "audio": "/audio/bai9_muc1.mp3",
  "audioSrc": "./audio/bai9_muc1.mp3",
  "audio_src": "./audio/bai9_muc1.mp3",
  "timestamp_src": "timestamps/bai9_muc1.json",
  "totalDuration": 334.06,
  "duration": 334.06,
  "title": "Mục 1: Khoảng biến thiên của mẫu số liệu ghép nhóm",
  "owl_tip": "Khoảng biến thiên R: Mút phải nhóm cuối trừ mút trái nhóm đầu!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 62.28,
      "id": "part2"
    },
    {
      "time": 91.9,
      "id": "part3"
    },
    {
      "time": 95.28,
      "id": "vd1_q"
    },
    {
      "time": 150.17,
      "id": "vd1_a"
    },
    {
      "time": 173.76,
      "id": "vd2_q"
    },
    {
      "time": 218.83,
      "id": "vd2_a"
    },
    {
      "time": 253.63,
      "id": "vd3_q"
    },
    {
      "time": 302.64,
      "id": "vd3_a"
    },
    {
      "time": 306.6,
      "id": "part4"
    },
    {
      "time": 330.31,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Định nghĩa & Ý nghĩa khoảng biến thiên R",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Ưu điểm & Nhược điểm của R",
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
  "content": "\n          <div id=\"part1\">\n            <h3>1. Định nghĩa khoảng biến thiên</h3>\n            <p>Cho mẫu số liệu ghép nhóm gồm $k$ nhóm $[a_1; a_2), [a_2; a_3), \\dots, [a_k; a_{k+1})$.<br>\n            • <b>Khoảng biến thiên</b>, ký hiệu $R$, là hiệu giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên:<br>\n            $$R = a_{k+1} - a_1$$\n            • <b>Ý nghĩa:</b> $R$ dùng để đo độ phân tán (độ dàn trải) của toàn bộ mẫu số liệu. $R$ càng lớn thì số liệu càng phân tán rộng; $R$ càng nhỏ thì số liệu càng tập trung.</p>\n          </div>\n          <div id=\"part2\">\n            <h3>2. Ưu và nhược điểm của khoảng biến thiên</h3>\n            <p>• <b>Ưu điểm:</b> Dễ tính toán, dễ hiểu, phản ánh ngay phạm vi bao phủ dữ liệu.<br>\n            • <b>Nhược điểm:</b> Chỉ phụ thuộc vào hai giá trị biên ngoài cùng, hoàn toàn không phụ thuộc vào tần số hay phân bố bên trong; cực kỳ nhạy cảm với các <b>giá trị ngoại lai</b> (bất thường).</p>\n          </div>\n          <div id=\"part3\"><h3>3. Các ví dụ rèn luyện điển hình</h3></div>\n          <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:16px; margin:10px 0; background:#0f172a;\">\n            \n        <div class=\"countdown-clock-30s\" id=\"cd_m1_vd1\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n          <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n            <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n            <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n          </svg>\n          <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n            <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n            <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n          </div>\n        </div>\n        \n            <div id=\"vd1_q\">\n              <b style=\"color:#38bdf8; font-size:18px;\">Ví dụ 1:</b> Thời gian truy cập Internet (phút/ngày) của 50 học sinh:<br>\n              $[20; 40): 8$, $[40; 60): 15$, $[60; 80): 18$, $[80; 100): 9$.<br>\n              Tính khoảng biến thiên $R$ của mẫu số liệu ghép nhóm này.<br>\n              <i style=\"color:#94a3b8;\">(Thời gian suy nghĩ: 30 giây - Quan sát đồng hồ ở góc phải màn hình)</i>\n            </div>\n            <div id=\"vd1_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n              <b style=\"color:#34d399;\">Lời giải:</b><br>\n              Nhóm đầu tiên là $[20; 40) \\implies a_1 = 20$.<br>\n              Nhóm cuối cùng là $[80; 100) \\implies a_5 = 100$.<br>\n              Khoảng biến thiên $R = 100 - 20 = 80$ (phút).\n            </div>\n          </div>\n          <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:16px; margin:10px 0; background:#0f172a;\">\n            \n        <div class=\"countdown-clock-30s\" id=\"cd_m1_vd2\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n          <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n            <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n            <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n          </svg>\n          <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n            <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n            <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n          </div>\n        </div>\n        \n            <div id=\"vd2_q\">\n              <b style=\"color:#38bdf8; font-size:18px;\">Ví dụ 2:</b> Điểm thi của hai lớp 12A và 12B đều nằm trong khoảng từ 4 đến 10 điểm. Lớp 12A điểm tập trung chủ yếu từ 6 đến 8 điểm, lớp 12B rải đều từ 4 đến 10 điểm. So sánh $R$ của hai lớp.<br>\n              <i style=\"color:#94a3b8;\">(Thời gian suy nghĩ: 30 giây - Quan sát đồng hồ ở góc phải màn hình)</i>\n            </div>\n            <div id=\"vd2_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n              <b style=\"color:#34d399;\">Lời giải:</b><br>\n              Cả hai lớp đều có $R = 10 - 4 = 6$ điểm.<br>\n              Nhận xét: Khoảng biến thiên $R$ bằng nhau dù lớp 12A điểm tập trung hơn nhiều. Điều này cho thấy hạn chế của $R$ là không phản ánh sự phân tán bên trong.\n            </div>\n          </div>\n          <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:16px; margin:10px 0; background:#0f172a;\">\n            \n        <div class=\"countdown-clock-30s\" id=\"cd_m1_vd3\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n          <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n            <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n            <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n          </svg>\n          <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n            <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n            <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n          </div>\n        </div>\n        \n            <div id=\"vd3_q\">\n              <b style=\"color:#38bdf8; font-size:18px;\">Ví dụ 3:</b> Thời gian hồi phục (ngày) của bệnh nhân:<br>\n              $[5; 10): 12$, $[10; 15): 25$, $[15; 20): 20$, $[20; 25): 10$, $[25; 30): 1$.<br>\n              Tính $R_1$. Nếu loại bỏ bệnh nhân bất thường ở nhóm $[25; 30)$, tính $R_2$ và nhận xét.<br>\n              <i style=\"color:#94a3b8;\">(Thời gian suy nghĩ: 30 giây - Quan sát đồng hồ ở góc phải màn hình)</i>\n            </div>\n            <div id=\"vd3_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n              <b style=\"color:#34d399;\">Lời giải:</b><br>\n              • Ban đầu: $R_1 = 30 - 5 = 25$ ngày.<br>\n              • Khi bỏ bệnh nhân bất thường: $R_2 = 25 - 5 = 20$ ngày.<br>\n              • Nhận xét: Chỉ 1 giá trị ngoại lai làm $R$ tăng vọt thêm 5 ngày.\n            </div>\n          </div>\n          <div id=\"part4\">\n            <h3>4. Cú Thông Thái cảnh báo bẫy</h3>\n            <p>• Nhầm lẫn với mẫu không ghép nhóm: lấy $x_{\\max} - x_{\\min}$.<br>\n            • Lấy nhầm tần số lớn nhất trừ tần số nhỏ nhất $n_{\\max} - n_{\\min}$ (sai hoàn toàn!).</p>\n          </div>\n          <div id=\"part5\">\n            <h3>5. Mẹo Thầy Cú ghi nhớ nhanh</h3>\n            <p>Khẩu quyết vàng: <i>\"Mút phải nhóm cuối trừ mút trái nhóm đầu: $R = a_{k+1} - a_1$!\"</i></p>\n          </div>\n        ",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 9: KHOẢNG BIẾN THIÊN & TỨ PHÂN VỊ",
      "subtitle": "PHẦN 1: ĐỊNH NGHĨA KHOẢNG BIẾN THIÊN R",
      "startTime": 0.0,
      "endTime": 62.28,
      "duration": 62.28,
      "mascotMode": "talking",
      "mascotTip": "R = Mút phải nhóm cuối trừ mút trái nhóm đầu!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Định nghĩa khoảng biến thiên</h3>\n                  <p>Cho mẫu số liệu ghép nhóm gồm $k$ nhóm $[a_1; a_2), [a_2; a_3), \\dots, [a_k; a_{k+1})$:</p>\n                  <div style=\"background:rgba(56,189,248,0.12); border:1.5px solid #38bdf8; border-radius:10px; padding:16px; text-align:center; margin:14px 0;\">\n                    <div style=\"font-size:24px; color:#38bdf8; font-weight:800; margin-bottom:6px;\">$$R = a_{k+1} - a_1$$</div>\n                    <div style=\"color:#94a3b8; font-size:15px;\">(Đầu mút phải nhóm cuối cùng $-$ Đầu mút trái nhóm đầu tiên)</div>\n                  </div>\n                  <div style=\"background:rgba(52,211,153,0.1); border-left:4px solid #34d399; padding:12px 16px; border-radius:6px; margin-top:12px;\">\n                    <b style=\"color:#34d399;\">Ý nghĩa thực tế:</b> Đo độ phân tán của toàn bộ dữ liệu.<br>\n                    • $R$ càng lớn $\\implies$ Số liệu càng phân tán rộng.<br>\n                    • $R$ càng nhỏ $\\implies$ Số liệu càng tập trung quanh trung tâm.\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 2,
      "title": "ƯU ĐIỂM VÀ HẠN CHẾ CỦA R",
      "subtitle": "PHẦN 2: ĐẶC TÍNH THỐNG KÊ",
      "startTime": 62.28,
      "endTime": 91.9,
      "duration": 29.62,
      "mascotMode": "thinking",
      "mascotTip": "R rất nhạy cảm với các giá trị bất thường ở hai đầu!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">2. Ưu và nhược điểm của khoảng biến thiên</h3>\n                  <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:12px; margin:14px 0;\">\n                    <div style=\"background:rgba(52,211,153,0.1); border:1px solid #34d399; border-radius:8px; padding:12px;\">\n                      <b style=\"color:#34d399; font-size:17px;\">✓ Ưu điểm:</b><br>\n                      • Dễ tính toán, dễ nhớ.<br>\n                      • Cho biết ngay phạm vi biến thiên của toàn bộ mẫu số liệu.\n                    </div>\n                    <div style=\"background:rgba(244,63,94,0.1); border:1px solid #f43f5e; border-radius:8px; padding:12px;\">\n                      <b style=\"color:#f43f5e; font-size:17px;\">✗ Nhược điểm:</b><br>\n                      • Không phản ánh phân bố dữ liệu bên trong.<br>\n                      • Rất dễ bị sai lệch bởi <b>giá trị ngoại lai</b>.\n                    </div>\n                  </div>\n                  <div style=\"text-align:center; margin:10px 0;\">\n                    <svg width=\"260\" height=\"90\" viewBox=\"0 0 260 90\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n                      <line x1=\"20\" y1=\"50\" x2=\"240\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"2\"/>\n                      <circle cx=\"35\" cy=\"50\" r=\"6\" fill=\"#f43f5e\"/>\n                      <circle cx=\"225\" cy=\"50\" r=\"6\" fill=\"#38bdf8\"/>\n                      <line x1=\"35\" y1=\"30\" x2=\"225\" y2=\"30\" stroke=\"#fbbf24\" stroke-width=\"2.5\" stroke-dasharray=\"4\"/>\n                      <text x=\"30\" y=\"70\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">a₁</text>\n                      <text x=\"218\" y=\"70\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">aₖ₊₁</text>\n                      <text x=\"110\" y=\"24\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">R = aₖ₊₁ - a₁</text>\n                    </svg>\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 3,
      "title": "LUYỆN TẬP VÍ DỤ",
      "subtitle": "PHẦN 3: CÁC VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "startTime": 91.9,
      "endTime": 95.28,
      "duration": 3.38,
      "mascotMode": "talking",
      "mascotTip": "Mỗi ví dụ đều có 30 giây suy nghĩ đếm ngược!",
      "bodyHtml": "\n                <div style=\"text-align:center; padding:40px 20px;\">\n                  <h2 style=\"color:#38bdf8; font-size:28px; margin-bottom:15px;\">Phần 3: Các ví dụ rèn luyện điển hình</h2>\n                  <p style=\"font-size:18px; color:#94a3b8; max-width:550px; margin:0 auto 20px;\">\n                    Rèn luyện 3 bài toán tính khoảng biến thiên, so sánh độ phân tán và phân tích giá trị ngoại lai cùng <b>đồng hồ đếm ngược 30 giây</b>!\n                  </p>\n                  <div style=\"display:inline-flex; align-items:center; gap:8px; background:rgba(245,158,11,0.15); border:1px solid #f59e0b; border-radius:30px; padding:8px 20px; color:#fbbf24; font-weight:700;\">\n                    <i class=\"fa-solid fa-stopwatch\"></i> Đồng hồ đếm ngược 30s sẵn sàng\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: TÍNH KHOẢNG BIẾN THIÊN",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 95.28,
      "endTime": 150.17,
      "duration": 54.89,
      "mascotMode": "thinking",
      "mascotTip": "Xác định mút trái nhóm đầu và mút phải nhóm cuối!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  \n        <div class=\"countdown-clock-30s\" id=\"cd_m1_s4\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n          <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n            <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n            <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n          </svg>\n          <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n            <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n            <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n          </div>\n        </div>\n        \n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">Ví dụ 1: Thời gian truy cập Internet</h3>\n                  <p style=\"font-size:17px; color:#f8fafc; margin-bottom:12px;\">\n                    Khảo sát thời gian sử dụng Internet mỗi ngày của 50 học sinh (phút):\n                  </p>\n                  <div style=\"overflow-x:auto; margin-bottom:12px;\">\n                    <table style=\"width:100%; border-collapse:collapse; text-align:center; font-size:16px;\">\n                      <tr style=\"background:#1e293b; color:#38bdf8;\">\n                        <th style=\"border:1px solid #475569; padding:8px;\">Thời gian (phút)</th>\n                        <th style=\"border:1px solid #475569; padding:8px;\">$[20; 40)$</th>\n                        <th style=\"border:1px solid #475569; padding:8px;\">$[40; 60)$</th>\n                        <th style=\"border:1px solid #475569; padding:8px;\">$[60; 80)$</th>\n                        <th style=\"border:1px solid #475569; padding:8px;\">$[80; 100)$</th>\n                      </tr>\n                      <tr style=\"background:rgba(30,41,59,0.6); color:#f8fafc;\">\n                        <td style=\"border:1px solid #475569; padding:8px; font-weight:bold;\">Số học sinh</td>\n                        <td style=\"border:1px solid #475569; padding:8px;\">8</td>\n                        <td style=\"border:1px solid #475569; padding:8px;\">15</td>\n                        <td style=\"border:1px solid #475569; padding:8px;\">18</td>\n                        <td style=\"border:1px solid #475569; padding:8px;\">9</td>\n                      </tr>\n                    </table>\n                  </div>\n                  <p style=\"font-size:17px; color:#fcd34d;\">Hãy tính khoảng biến thiên $R$ của mẫu số liệu ghép nhóm này.</p>\n                </div>\n                "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: R = 80 PHÚT",
      "startTime": 150.17,
      "endTime": 173.76,
      "duration": 23.59,
      "mascotMode": "talking",
      "mascotTip": "Chính xác! R = 100 - 20 = 80 phút.",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1:</h3>\n                  <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                    • Nhóm đầu tiên là $[20; 40) \\implies$ Đầu mút trái $a_1 = 20$.<br>\n                    • Nhóm cuối cùng là $[80; 100) \\implies$ Đầu mút phải $a_5 = 100$.<br>\n                    • Khoảng biến thiên $R$ của mẫu số liệu ghép nhóm là:<br>\n                    $$R = a_5 - a_1 = 100 - 20 = 80\\text{ (phút)}$$\n                    <div style=\"margin-top:12px; padding:10px 14px; background:rgba(52,211,153,0.15); border-radius:6px; color:#a7f3d0; font-weight:600;\">\n                      ✓ Kết luận: Khoảng biến thiên thời gian dùng Internet là $80$ phút.\n                    </div>\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: SO SÁNH HAI TẬP DỮ LIỆU",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 173.76,
      "endTime": 218.83,
      "duration": 45.07,
      "mascotMode": "thinking",
      "mascotTip": "Cả hai lớp cùng thang điểm [4; 10]!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  \n        <div class=\"countdown-clock-30s\" id=\"cd_m1_s6\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n          <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n            <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n            <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n          </svg>\n          <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n            <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n            <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n          </div>\n        </div>\n        \n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">Ví dụ 2: Hạn chế của khoảng biến thiên</h3>\n                  <p style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n                    Điểm thi môn Toán của hai lớp 12A và 12B đều nằm trong khoảng từ 4 đến 10 điểm.<br>\n                    • Lớp 12A: 40 học sinh đạt điểm tập trung trong khoảng $[6; 8)$, chỉ có 1 bạn 4 điểm và 1 bạn 10 điểm.<br>\n                    • Lớp 12B: Học sinh phân bố trải đều từ 4 đến 10 điểm.<br>\n                    Hãy so sánh khoảng biến thiên $R$ của hai lớp và nêu nhận xét.\n                  </p>\n                </div>\n                "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: R_A = R_B = 6 ĐIỂM",
      "startTime": 218.83,
      "endTime": 253.63,
      "duration": 34.8,
      "mascotMode": "talking",
      "mascotTip": "R không phản ánh được dữ liệu tập trung hay dàn trải bên trong!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2:</h3>\n                  <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                    • Cả hai lớp 12A và 12B đều có mút trái $a_1 = 4$ và mút phải $a_{k+1} = 10$.<br>\n                    • Khoảng biến thiên của hai lớp bằng nhau:<br>\n                    $$R_{12A} = R_{12B} = 10 - 4 = 6\\text{ (điểm)}$$\n                    <div style=\"margin-top:12px; padding:10px 14px; background:rgba(251,191,36,0.15); border-left:4px solid #fbbf24; border-radius:6px; color:#fcd34d;\">\n                      <b>Nhận xét sâu sắc:</b> Mặc dù điểm số lớp 12A tập trung đồng đều hơn rất nhiều so với lớp 12B, nhưng $R$ lại như nhau. Đây chính là <b>hạn chế của khoảng biến thiên</b>: Không phản ánh được sự phân tán của dữ liệu bên trong!\n                    </div>\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: ẢNH HƯỞNG CỦA NGOẠI LAI",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 253.63,
      "endTime": 302.64,
      "duration": 49.01,
      "mascotMode": "thinking",
      "mascotTip": "Xem xét sự thay đổi của R khi bỏ đi 1 bệnh nhân dị biệt!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  \n        <div class=\"countdown-clock-30s\" id=\"cd_m1_s8\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n          <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n            <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n            <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n          </svg>\n          <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n            <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n            <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n          </div>\n        </div>\n        \n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">Ví dụ 3: Độ nhạy cảm với giá trị ngoại lai</h3>\n                  <p style=\"font-size:17px; color:#f8fafc; margin-bottom:10px;\">\n                    Thời gian hồi phục (ngày) sau phẫu thuật của 68 bệnh nhân:\n                  </p>\n                  <table style=\"width:100%; border-collapse:collapse; text-align:center; font-size:15px; margin-bottom:10px;\">\n                    <tr style=\"background:#1e293b; color:#38bdf8;\">\n                      <th style=\"border:1px solid #475569; padding:6px;\">Thời gian (ngày)</th>\n                      <th style=\"border:1px solid #475569; padding:6px;\">$[5; 10)$</th>\n                      <th style=\"border:1px solid #475569; padding:6px;\">$[10; 15)$</th>\n                      <th style=\"border:1px solid #475569; padding:6px;\">$[15; 20)$</th>\n                      <th style=\"border:1px solid #475569; padding:6px;\">$[20; 25)$</th>\n                      <th style=\"border:1px solid #475569; padding:6px; color:#f43f5e;\">$[25; 30)$</th>\n                    </tr>\n                    <tr style=\"background:rgba(30,41,59,0.6); color:#f8fafc;\">\n                      <td style=\"border:1px solid #475569; padding:6px; font-weight:bold;\">Số bệnh nhân</td>\n                      <td style=\"border:1px solid #475569; padding:6px;\">12</td>\n                      <td style=\"border:1px solid #475569; padding:6px;\">25</td>\n                      <td style=\"border:1px solid #475569; padding:6px;\">20</td>\n                      <td style=\"border:1px solid #475569; padding:6px;\">10</td>\n                      <td style=\"border:1px solid #475569; padding:6px; color:#f43f5e; font-weight:bold;\">1</td>\n                    </tr>\n                  </table>\n                  <p style=\"font-size:16px; color:#fcd34d;\">Tính $R_1$. Nếu loại bỏ 1 bệnh nhân nhóm $[25; 30)$, tính $R_2$ và nhận xét.</p>\n                </div>\n                "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: R1 = 25 NGÀY, R2 = 20 NGÀY",
      "startTime": 302.64,
      "endTime": 306.6,
      "duration": 3.96,
      "mascotMode": "talking",
      "mascotTip": "Chỉ 1 bệnh nhân dị biệt làm R tăng vọt 5 ngày!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3:</h3>\n                  <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                    • Ban đầu: Nhóm đầu $[5; 10)$ và nhóm cuối $[25; 30)$:<br>\n                    $$R_1 = 30 - 5 = 25\\text{ (ngày)}$$\n                    • Khi loại bỏ bệnh nhân nhóm $[25; 30)$, nhóm cuối mới là $[20; 25)$:<br>\n                    $$R_2 = 25 - 5 = 20\\text{ (ngày)}$$\n                    <div style=\"margin-top:12px; padding:10px 14px; background:rgba(244,63,94,0.15); border-left:4px solid #f43f5e; border-radius:6px; color:#fca5a5;\">\n                      <b>Kết luận:</b> Khoảng biến thiên giảm mạnh từ 25 xuống 20 ngày chỉ vì loại bỏ đúng 1 bệnh nhân! Điều này chứng minh $R$ <b>rất nhạy cảm với giá trị ngoại lai</b>.\n                    </div>\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI CẢNH BÁO BẪY",
      "subtitle": "PHẦN 4: 2 BẪY SAI LẦM KHI TÍNH R",
      "startTime": 306.6,
      "endTime": 330.31,
      "duration": 23.71,
      "mascotMode": "warning",
      "mascotTip": "Luôn nhớ: Mút phải nhóm cuối trừ mút trái nhóm đầu!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:14px;\">4. Hai bẫy sai lầm kinh điển về khoảng biến thiên</h3>\n                  <div style=\"display:flex; flex-direction:column; gap:12px;\">\n                    <div style=\"background:rgba(244,63,94,0.12); border-left:4px solid #f43f5e; padding:14px 18px; border-radius:8px;\">\n                      <b style=\"color:#f43f5e; font-size:19px;\">Bẫy 1: Lấy nhầm tần số lớn nhất trừ tần số nhỏ nhất</b><br>\n                      Nhiều bạn lấy $n_{\\max} - n_{\\min}$ (ví dụ $25 - 1 = 24$). Đây là sai hoàn toàn! Khoảng biến thiên là hiệu số của <b>giá trị biến lượng</b>, không phải tần số!\n                    </div>\n                    <div style=\"background:rgba(251,191,36,0.12); border-left:4px solid #fbbf24; padding:14px 18px; border-radius:8px;\">\n                      <b style=\"color:#fbbf24; font-size:19px;\">Bẫy 2: Nhầm mút trái nhóm cuối trừ mút phải nhóm đầu</b><br>\n                      Bắt buộc phải lấy: <b>Mút phải nhóm cuối</b> ($a_{k+1}$) trừ đi <b>Mút trái nhóm đầu</b> ($a_1$).\n                    </div>\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ GHI NHỚ NHANH",
      "subtitle": "PHẦN 5: TỔNG KẾT MỤC 1",
      "startTime": 330.31,
      "endTime": 349.2,
      "duration": 18.89,
      "mascotMode": "talking",
      "mascotTip": "Đơn vị của R luôn trùng với đơn vị của số liệu ban đầu!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">5. Bí quyết Thầy Cú ghi nhớ nhanh</h3>\n                  <div style=\"background:rgba(15,23,42,0.8); border:1px solid #38bdf8; border-radius:10px; padding:16px;\">\n                    <p style=\"font-size:20px; color:#fbbf24; font-weight:700; text-align:center; margin-bottom:12px;\">\n                      \"Khoảng biến thiên mẫu ghép nhóm: Lấy mút phải nhóm cuối trừ mút trái nhóm đầu!\"\n                    </p>\n                    <ul style=\"list-style-type:none; padding-left:0; line-height:1.8;\">\n                      <li>• <b>Công thức:</b> $R = a_{k+1} - a_1$.</li>\n                      <li>• <b>Đơn vị:</b> Trùng với đơn vị của đại lượng đang nghiên cứu (phút, điểm, ngày, cm...).</li>\n                      <li>• <b>Bản chất:</b> Phản ánh độ rộng bao phủ nhưng nhạy cảm với giá trị bất thường $\\to$ Chuyển sang Mục 2: Khoảng tứ phân vị để khắc phục!</li>\n                    </ul>\n                  </div>\n                </div>\n                "
    }
  ]
};

window.CHAPTER3_DATA.bai9_muc2 = {
  "lessonId": "bai9",
  "lessonTitle": "Bài 9: Khoảng biến thiên & Khoảng tứ phân vị",
  "sectionId": "bai9_muc2",
  "sectionTitle": "Mục 2: Tứ phân vị và khoảng tứ phân vị",
  "audio": "/audio/bai9_muc2.mp3",
  "audioSrc": "./audio/bai9_muc2.mp3",
  "audio_src": "./audio/bai9_muc2.mp3",
  "timestamp_src": "timestamps/bai9_muc2.json",
  "totalDuration": 378.02,
  "duration": 378.02,
  "title": "Mục 2: Tứ phân vị và khoảng tứ phân vị của mẫu số liệu ghép nhóm",
  "owl_tip": "Khoảng tứ phân vị đo độ phân tán của 50% số liệu ở trung tâm!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 41.59,
      "id": "part2"
    },
    {
      "time": 100.85,
      "id": "part3"
    },
    {
      "time": 104.23,
      "id": "vd1_q"
    },
    {
      "time": 153.55,
      "id": "vd1_a"
    },
    {
      "time": 190.51,
      "id": "vd2_q"
    },
    {
      "time": 232.37,
      "id": "vd2_a"
    },
    {
      "time": 271.08,
      "id": "vd3_q"
    },
    {
      "time": 302.35,
      "id": "vd3_a"
    },
    {
      "time": 336.24,
      "id": "part4"
    },
    {
      "time": 357.5,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Định nghĩa & Ý nghĩa khoảng tứ phân vị",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Công thức nội suy tính Q1 và Q3",
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
      "partTitle": "Phần 5: Mẹo Thầy Cú lập dòng tích luỹ",
      "scenes": [
        11
      ]
    }
  ],
  "content": "\n          <div id=\"part1\">\n            <h3>1. Khoảng tứ phân vị của mẫu số liệu ghép nhóm</h3>\n            <p>• <b>Khoảng tứ phân vị</b>, ký hiệu $\\Delta_Q$, là hiệu giữa tứ phân vị thứ ba $Q_3$ và tứ phân vị thứ nhất $Q_1$:<br>\n            $$\\Delta_Q = Q_3 - Q_1$$\n            • <b>Ý nghĩa:</b> Đo độ phân tán của $50\\%$ số liệu ở phần chính giữa của mẫu số liệu. Không bị ảnh hưởng bởi các giá trị ngoại lai ở hai đầu mút.</p>\n          </div>\n          <div id=\"part2\">\n            <h3>2. Công thức xác định Q1 và Q3</h3>\n            <p>• Nhóm chứa $Q_1$ có tần số tích luỹ $\\ge \\frac{n}{4}$:<br>\n            $$Q_1 = u_m + \\frac{\\frac{n}{4} - C}{n_m} \\cdot (u_{m+1} - u_m)$$\n            • Nhóm chứa $Q_3$ có tần số tích luỹ $\\ge \\frac{3n}{4}$:<br>\n            $$Q_3 = u_k + \\frac{\\frac{3n}{4} - C'}{n_k} \\cdot (u_{k+1} - u_k)$$</p>\n          </div>\n          <div id=\"part3\"><h3>3. Các ví dụ rèn luyện điển hình</h3></div>\n          <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:16px; margin:10px 0; background:#0f172a;\">\n            \n        <div class=\"countdown-clock-30s\" id=\"cd_m2_vd1\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n          <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n            <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n            <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n          </svg>\n          <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n            <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n            <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n          </div>\n        </div>\n        \n            <div id=\"vd1_q\">\n              <b style=\"color:#38bdf8; font-size:18px;\">Ví dụ 1:</b> Chiều cao 40 cây non: $[10; 20): 6$, $[20; 30): 14$, $[30; 40): 12$, $[40; 50): 8$. Xác định nhóm chứa $Q_1$ và tính $Q_1$.<br>\n              <i style=\"color:#94a3b8;\">(Thời gian suy nghĩ: 30 giây - Quan sát đồng hồ ở góc phải màn hình)</i>\n            </div>\n            <div id=\"vd1_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n              <b style=\"color:#34d399;\">Lời giải:</b><br>\n              $n = 40 \\implies \\frac{n}{4} = 10$. Tích luỹ nhóm 1 là 6, nhóm 2 là 20 $\\implies$ nhóm chứa $Q_1$ là $[20; 30)$.<br>\n              $Q_1 = 20 + \\frac{10 - 6}{14} \\times 10 \\approx 22{,}86\\text{ (cm)}$.\n            </div>\n          </div>\n          <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:16px; margin:10px 0; background:#0f172a;\">\n            \n        <div class=\"countdown-clock-30s\" id=\"cd_m2_vd2\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n          <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n            <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n            <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n          </svg>\n          <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n            <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n            <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n          </div>\n        </div>\n        \n            <div id=\"vd2_q\">\n              <b style=\"color:#38bdf8; font-size:18px;\">Ví dụ 2:</b> Vẫn dùng bảng số liệu 40 cây non ở Ví dụ 1. Tìm nhóm chứa $Q_3$ và tính $Q_3$.<br>\n              <i style=\"color:#94a3b8;\">(Thời gian suy nghĩ: 30 giây - Quan sát đồng hồ ở góc phải màn hình)</i>\n            </div>\n            <div id=\"vd2_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n              <b style=\"color:#34d399;\">Lời giải:</b><br>\n              $\\frac{3n}{4} = 30$. Tích luỹ nhóm 2 là 20, nhóm 3 là 32 $\\implies$ nhóm chứa $Q_3$ là $[30; 40)$.<br>\n              $Q_3 = 30 + \\frac{30 - 20}{12} \\times 10 \\approx 38{,}33\\text{ (cm)}$.\n            </div>\n          </div>\n          <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:16px; margin:10px 0; background:#0f172a;\">\n            \n        <div class=\"countdown-clock-30s\" id=\"cd_m2_vd3\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n          <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n            <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n            <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n          </svg>\n          <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n            <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n            <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n          </div>\n        </div>\n        \n            <div id=\"vd3_q\">\n              <b style=\"color:#38bdf8; font-size:18px;\">Ví dụ 3:</b> Từ kết quả $Q_1 \\approx 22{,}86$ và $Q_3 \\approx 38{,}33$, tính khoảng tứ phân vị $\\Delta_Q$ và nêu ý nghĩa thực tế.<br>\n              <i style=\"color:#94a3b8;\">(Thời gian suy nghĩ: 30 giây - Quan sát đồng hồ ở góc phải màn hình)</i>\n            </div>\n            <div id=\"vd3_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n              <b style=\"color:#34d399;\">Lời giải:</b><br>\n              $\\Delta_Q = Q_3 - Q_1 = 38{,}33 - 22{,}86 = 15{,}47\\text{ (cm)}$.<br>\n              Ý nghĩa: $50\\%$ số cây non ở mức độ trung tâm có độ dàn trải chênh lệch tối đa $15{,}47\\text{ cm}$.\n            </div>\n          </div>\n          <div id=\"part4\">\n            <h3>4. Cú Thông Thái cảnh báo bẫy</h3>\n            <p>• Nhầm lẫn giá trị $C$: $C$ là tổng tần số của các nhóm <b>đứng trước</b>, không phải tần số của nhóm đang xét!</p>\n          </div>\n          <div id=\"part5\">\n            <h3>5. Mẹo Thầy Cú lập dòng tích luỹ</h3>\n            <p>Viết thêm 1 hàng tần số tích luỹ $cf$ ngay bên dưới bảng để xác định nhóm chứa $Q_1, Q_3$ trong 3 giây!</p>\n          </div>\n        ",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 9: KHOẢNG TỨ PHÂN VỊ",
      "subtitle": "PHẦN 1: ĐỊNH NGHĨA & Ý NGHĨA",
      "startTime": 0.0,
      "endTime": 41.59,
      "duration": 41.59,
      "mascotMode": "talking",
      "mascotTip": "Đo độ phân tán của 50% số liệu ở giữa!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Định nghĩa khoảng tứ phân vị</h3>\n                  <div style=\"background:rgba(56,189,248,0.12); border:1.5px solid #38bdf8; border-radius:10px; padding:16px; text-align:center; margin:14px 0;\">\n                    <div style=\"font-size:24px; color:#38bdf8; font-weight:800; margin-bottom:6px;\">$$\\Delta_Q = Q_3 - Q_1$$</div>\n                    <div style=\"color:#94a3b8; font-size:15px;\">($Q_3$: Tứ phân vị thứ ba, $Q_1$: Tứ phân vị thứ nhất)</div>\n                  </div>\n                  <div style=\"background:rgba(52,211,153,0.1); border-left:4px solid #34d399; padding:12px 16px; border-radius:6px; margin-top:12px;\">\n                    <b style=\"color:#34d399;\">Ý nghĩa vượt trội:</b> Đo độ phân tán của <b>$50\\%$ số liệu ở phần trung tâm</b> của mẫu số liệu.<br>\n                    • Không bị ảnh hưởng bởi các giá trị ngoại lai ở hai biên.<br>\n                    • Là số đặc trưng tin cậy nhất khi dữ liệu có biến dị lớn ở hai đầu.\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 2,
      "title": "CÔNG THỨC NỘI SUY TÍNH Q1 & Q3",
      "subtitle": "PHẦN 2: THUẬT TOÁN TÍNH TỨ PHÂN VỊ",
      "startTime": 41.59,
      "endTime": 100.85,
      "duration": 59.26,
      "mascotMode": "thinking",
      "mascotTip": "Q1 dùng n/4, Q3 dùng 3n/4!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">2. Công thức tính $Q_1$ và $Q_3$</h3>\n                  <div style=\"display:flex; flex-direction:column; gap:10px;\">\n                    <div style=\"background:rgba(56,189,248,0.1); border:1px solid #38bdf8; border-radius:8px; padding:12px;\">\n                      <b style=\"color:#38bdf8;\">Tứ phân vị thứ nhất $Q_1$:</b> Nhóm $[u_m; u_{m+1})$ có $cf \\ge \\frac{n}{4}$:<br>\n                      $$Q_1 = u_m + \\frac{\\frac{n}{4} - C}{n_m} \\cdot (u_{m+1} - u_m)$$\n                      <span style=\"font-size:14px; color:#94a3b8;\">($C$: tổng tần số các nhóm trước; $n_m$: tần số nhóm chứa $Q_1$)</span>\n                    </div>\n                    <div style=\"background:rgba(251,191,36,0.1); border:1px solid #fbbf24; border-radius:8px; padding:12px;\">\n                      <b style=\"color:#fbbf24;\">Tứ phân vị thứ ba $Q_3$:</b> Nhóm $[u_k; u_{k+1})$ có $cf \\ge \\frac{3n}{4}$:<br>\n                      $$Q_3 = u_k + \\frac{\\frac{3n}{4} - C'}{n_k} \\cdot (u_{k+1} - u_k)$$\n                      <span style=\"font-size:14px; color:#94a3b8;\">($C'$: tổng tần số các nhóm trước; $n_k$: tần số nhóm chứa $Q_3$)</span>\n                    </div>\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 3,
      "title": "LUYỆN TẬP VÍ DỤ",
      "subtitle": "PHẦN 3: CÁC VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "startTime": 100.85,
      "endTime": 104.23,
      "duration": 3.38,
      "mascotMode": "talking",
      "mascotTip": "Tính cẩn thận từng bước cùng đồng hồ 30 giây!",
      "bodyHtml": "\n                <div style=\"text-align:center; padding:40px 20px;\">\n                  <h2 style=\"color:#38bdf8; font-size:28px; margin-bottom:15px;\">Phần 3: Các ví dụ rèn luyện điển hình</h2>\n                  <p style=\"font-size:18px; color:#94a3b8; max-width:550px; margin:0 auto 20px;\">\n                    Thực hành tính $Q_1$, $Q_3$ và $\\Delta_Q$ cho mẫu số liệu thực tế cùng <b>đồng hồ 30 giây</b>!\n                  </p>\n                  <div style=\"display:inline-flex; align-items:center; gap:8px; background:rgba(245,158,11,0.15); border:1px solid #f59e0b; border-radius:30px; padding:8px 20px; color:#fbbf24; font-weight:700;\">\n                    <i class=\"fa-solid fa-stopwatch\"></i> Đồng hồ đếm ngược 30s sẵn sàng\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: TÍNH TỨ PHÂN VỊ Q1",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 104.23,
      "endTime": 153.55,
      "duration": 49.32,
      "mascotMode": "thinking",
      "mascotTip": "n = 40, tìm nhóm có tần số tích luỹ >= 10!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  \n        <div class=\"countdown-clock-30s\" id=\"cd_m2_s4\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n          <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n            <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n            <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n          </svg>\n          <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n            <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n            <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n          </div>\n        </div>\n        \n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">Ví dụ 1: Chiều cao của 40 cây non</h3>\n                  <table style=\"width:100%; border-collapse:collapse; text-align:center; font-size:16px; margin-bottom:12px;\">\n                    <tr style=\"background:#1e293b; color:#38bdf8;\">\n                      <th style=\"border:1px solid #475569; padding:8px;\">Chiều cao (cm)</th>\n                      <th style=\"border:1px solid #475569; padding:8px;\">$[10; 20)$</th>\n                      <th style=\"border:1px solid #475569; padding:8px;\">$[20; 30)$</th>\n                      <th style=\"border:1px solid #475569; padding:8px;\">$[30; 40)$</th>\n                      <th style=\"border:1px solid #475569; padding:8px;\">$[40; 50)$</th>\n                    </tr>\n                    <tr style=\"background:rgba(30,41,59,0.6); color:#f8fafc;\">\n                      <td style=\"border:1px solid #475569; padding:8px; font-weight:bold;\">Số cây</td>\n                      <td style=\"border:1px solid #475569; padding:8px;\">6</td>\n                      <td style=\"border:1px solid #475569; padding:8px;\">14</td>\n                      <td style=\"border:1px solid #475569; padding:8px;\">12</td>\n                      <td style=\"border:1px solid #475569; padding:8px;\">8</td>\n                    </tr>\n                  </table>\n                  <p style=\"font-size:17px; color:#fcd34d;\">Hãy xác định nhóm chứa $Q_1$ và tính tứ phân vị thứ nhất $Q_1$.</p>\n                </div>\n                "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: Q1 ≈ 22,86 cm",
      "startTime": 153.55,
      "endTime": 190.51,
      "duration": 36.96,
      "mascotMode": "talking",
      "mascotTip": "Q1 = 20 + (10 - 6)/14 * 10 ≈ 22,86 cm!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1:</h3>\n                  <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                    • Cỡ mẫu $n = 40 \\implies \\frac{n}{4} = 10$.<br>\n                    • Tần số tích luỹ nhóm 1 là $6$; nhóm 2 là $6 + 14 = 20$.<br>\n                    • Do $6 < 10 \\le 20 \\implies$ Nhóm chứa $Q_1$ là nhóm thứ 2: $[20; 30)$.<br>\n                    • Áp dụng công thức ($u_m = 20, C = 6, n_m = 14, h = 10$):<br>\n                    $$Q_1 = 20 + \\frac{10 - 6}{14} \\times 10 = 20 + \\frac{40}{14} \\approx 22{,}86\\text{ (cm)}$$\n                    <div style=\"margin-top:10px; padding:8px 12px; background:rgba(52,211,153,0.15); border-radius:6px; color:#a7f3d0; font-weight:600;\">\n                      ✓ Kết quả: $Q_1 \\approx 22{,}86\\text{ cm}$.\n                    </div>\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: TÍNH TỨ PHÂN VỊ Q3",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 190.51,
      "endTime": 232.37,
      "duration": 41.86,
      "mascotMode": "thinking",
      "mascotTip": "3n/4 = 30, tìm nhóm có tần số tích luỹ >= 30!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  \n        <div class=\"countdown-clock-30s\" id=\"cd_m2_s6\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n          <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n            <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n            <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n          </svg>\n          <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n            <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n            <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n          </div>\n        </div>\n        \n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">Ví dụ 2: Tính tứ phân vị thứ ba Q3</h3>\n                  <p style=\"font-size:17px; color:#f8fafc; margin-bottom:12px;\">\n                    Dùng lại bảng số liệu chiều cao 40 cây non ở Ví dụ 1:<br>\n                    $[10; 20): 6$, $[20; 30): 14$, $[30; 40): 12$, $[40; 50): 8$.\n                  </p>\n                  <p style=\"font-size:17px; color:#fcd34d;\">Hãy xác định nhóm chứa $Q_3$ và tính tứ phân vị thứ ba $Q_3$.</p>\n                </div>\n                "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: Q3 ≈ 38,33 cm",
      "startTime": 232.37,
      "endTime": 271.08,
      "duration": 38.71,
      "mascotMode": "talking",
      "mascotTip": "Q3 = 30 + (30 - 20)/12 * 10 ≈ 38,33 cm!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2:</h3>\n                  <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                    • Ta có: $\\frac{3n}{4} = \\frac{3 \\times 40}{4} = 30$.<br>\n                    • Tần số tích luỹ nhóm 2 là $20$; nhóm 3 là $20 + 12 = 32$.<br>\n                    • Do $20 < 30 \\le 32 \\implies$ Nhóm chứa $Q_3$ là nhóm thứ 3: $[30; 40)$.<br>\n                    • Áp dụng công thức ($u_k = 30, C' = 20, n_k = 12, h = 10$):<br>\n                    $$Q_3 = 30 + \\frac{30 - 20}{12} \\times 10 = 30 + \\frac{100}{12} \\approx 38{,}33\\text{ (cm)}$$\n                    <div style=\"margin-top:10px; padding:8px 12px; background:rgba(52,211,153,0.15); border-radius:6px; color:#a7f3d0; font-weight:600;\">\n                      ✓ Kết quả: $Q_3 \\approx 38{,}33\\text{ cm}$.\n                    </div>\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: TÍNH KHOẢNG TỨ PHÂN VỊ",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 271.08,
      "endTime": 302.35,
      "duration": 31.27,
      "mascotMode": "thinking",
      "mascotTip": "ΔQ = Q3 - Q1!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  \n        <div class=\"countdown-clock-30s\" id=\"cd_m2_s8\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n          <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n            <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n            <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n          </svg>\n          <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n            <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n            <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n          </div>\n        </div>\n        \n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">Ví dụ 3: Khoảng tứ phân vị & Ý nghĩa</h3>\n                  <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                    Từ kết quả $Q_1 \\approx 22{,}86\\text{ cm}$ và $Q_3 \\approx 38{,}33\\text{ cm}$ ở hai ví dụ trước:<br>\n                    Hãy tính khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu và nêu ý nghĩa thực tế của kết quả tìm được.\n                  </p>\n                </div>\n                "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: ΔQ ≈ 15,47 cm",
      "startTime": 302.35,
      "endTime": 336.24,
      "duration": 33.89,
      "mascotMode": "talking",
      "mascotTip": "Đo độ phân tán của 50% số cây có chiều cao trung bình!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3:</h3>\n                  <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                    • Khoảng tứ phân vị $\\Delta_Q$ là:<br>\n                    $$\\Delta_Q = Q_3 - Q_1 = 38{,}33 - 22{,}86 = 15{,}47\\text{ (cm)}$$\n                    <div style=\"margin-top:12px; padding:12px 16px; background:rgba(56,189,248,0.15); border-left:4px solid #38bdf8; border-radius:6px; color:#bae6fd;\">\n                      <b>Ý nghĩa thực tế:</b> Có $50\\%$ số cây non có chiều cao nằm ở mức trung tâm (từ $22{,}86\\text{ cm}$ đến $38{,}33\\text{ cm}$) với độ biến thiên tối đa là $15{,}47\\text{ cm}$. Số đo này hoàn toàn không bị ảnh hưởng bởi những cây quá còi cọc ($< 10\\text{ cm}$) hay quá cao vượt trội.\n                    </div>\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI CẢNH BÁO BẪY",
      "subtitle": "PHẦN 4: BẪY GIÁ TRỊ C TÍCH LUỸ",
      "startTime": 336.24,
      "endTime": 357.5,
      "duration": 21.26,
      "mascotMode": "warning",
      "mascotTip": "C là tổng tần số các nhóm đứng trước, không phải nhóm đang xét!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:14px;\">4. Bẫy sai lầm nghiêm trọng trong công thức nội suy</h3>\n                  <div style=\"background:rgba(244,63,94,0.12); border-left:4px solid #f43f5e; padding:14px 18px; border-radius:8px;\">\n                    <b style=\"color:#f43f5e; font-size:19px;\">Nhầm lẫn đại lượng $C$ trong công thức:</b><br>\n                    Rất nhiều học sinh lấy nhầm $C$ là tần số của chính nhóm chứa tứ phân vị.<br>\n                    <b style=\"color:#34d399;\">Quy tắc chuẩn:</b><br>\n                    • $C$ là <b>tổng tần số của TẤT CẢ các nhóm đứng trước</b> nhóm chứa tứ phân vị.<br>\n                    • $n_m$ mới là tần số của nhóm chứa tứ phân vị!\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ LẬP DÒNG TÍCH LUỸ",
      "subtitle": "PHẦN 5: TÌM NHÓM TỨ PHÂN VỊ TRONG 3 GIÂY",
      "startTime": 357.5,
      "endTime": 378.86,
      "duration": 21.36,
      "mascotMode": "talking",
      "mascotTip": "Viết dòng cf bên dưới bảng là nhìn ra ngay!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">5. Bí quyết dòng tần số tích luỹ $cf$</h3>\n                  <div style=\"background:rgba(15,23,42,0.8); border:1px solid #38bdf8; border-radius:10px; padding:16px;\">\n                    <p>• Khi làm bài thi, hãy vẽ thêm một hàng <b>$cf$ (tích luỹ)</b> cộng dồn tần số từ trái sang phải:<br>\n                    $cf_1 = n_1, \\quad cf_2 = n_1 + n_2, \\quad cf_3 = n_1 + n_2 + n_3, \\dots$<br>\n                    • <b>Tìm $Q_1$:</b> Lấy $\\frac{n}{4}$, nhìn vào dòng $cf$, số đầu tiên $\\ge \\frac{n}{4}$ chính là nhóm chứa $Q_1$.<br>\n                    • <b>Tìm $Q_3$:</b> Lấy $\\frac{3n}{4}$, số đầu tiên $\\ge \\frac{3n}{4}$ chính là nhóm chứa $Q_3$.</p>\n                    <div style=\"margin-top:10px; color:#34d399; font-weight:700;\">\n                      ⚡ Tuyệt chiêu này giúp xác định đúng $100\\%$ không bao giờ nhầm lẫn!\n                    </div>\n                  </div>\n                </div>\n                "
    }
  ]
};

window.CHAPTER3_DATA.bai9_muc3 = {
  "lessonId": "bai9",
  "lessonTitle": "Bài 9: Khoảng biến thiên & Khoảng tứ phân vị",
  "sectionId": "bai9_muc3",
  "sectionTitle": "Mục 3: Giá trị ngoại lai & So sánh độ phân tán",
  "audio": "/audio/bai9_muc3.mp3",
  "audioSrc": "./audio/bai9_muc3.mp3",
  "audio_src": "./audio/bai9_muc3.mp3",
  "timestamp_src": "timestamps/bai9_muc3.json",
  "totalDuration": 342.47,
  "duration": 342.47,
  "title": "Mục 3: Xác định giá trị ngoại lai & So sánh mức độ phân tán",
  "owl_tip": "Quy tắc rào: Dưới trừ, Trên cộng với 1,5ΔQ!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 44.14,
      "id": "part2"
    },
    {
      "time": 77.64,
      "id": "part3"
    },
    {
      "time": 81.02,
      "id": "vd1_q"
    },
    {
      "time": 119.97,
      "id": "vd1_a"
    },
    {
      "time": 157.48,
      "id": "vd2_q"
    },
    {
      "time": 195.26,
      "id": "vd2_a"
    },
    {
      "time": 228.64,
      "id": "vd3_q"
    },
    {
      "time": 270.54,
      "id": "vd3_a"
    },
    {
      "time": 304.57,
      "id": "part4"
    },
    {
      "time": 323.82,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Quy tắc rào xác định giá trị ngoại lai",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Ứng dụng so sánh độ phân tán",
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
      "partTitle": "Phần 5: Mẹo Thầy Cú & Tổng kết toàn bài",
      "scenes": [
        11
      ]
    }
  ],
  "content": "\n          <div id=\"part1\">\n            <h3>1. Xác định giá trị ngoại lai</h3>\n            <p>Giá trị $x$ được gọi là <b>giá trị ngoại lai</b> (bất thường) nếu nằm ngoài hai hàng rào:<br>\n            • <b>Rào dưới:</b> $L = Q_1 - 1{,}5\\Delta_Q$<br>\n            • <b>Rào trên:</b> $U = Q_3 + 1{,}5\\Delta_Q$<br>\n            $$x \\text{ là giá trị ngoại lai} \\iff x < Q_1 - 1{,}5\\Delta_Q \\quad \\text{hoặc} \\quad x > Q_3 + 1{,}5\\Delta_Q$$</p>\n          </div>\n          <div id=\"part2\">\n            <h3>2. So sánh độ phân tán giữa các mẫu số liệu</h3>\n            <p>• Khi so sánh mức độ phân tán của hai mẫu số liệu cùng đơn vị đo: Mẫu nào có $\\Delta_Q$ nhỏ hơn thì $50\\%$ số liệu trung tâm ít biến động hơn, tức là <b>ổn định và đồng đều hơn</b>.<br>\n            • Khi dữ liệu có giá trị ngoại lai, ta phải ưu tiên dùng $\\Delta_Q$ thay vì $R$.</p>\n          </div>\n          <div id=\"part3\"><h3>3. Các ví dụ rèn luyện điển hình</h3></div>\n          <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:16px; margin:10px 0; background:#0f172a;\">\n            \n        <div class=\"countdown-clock-30s\" id=\"cd_m3_vd1\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n          <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n            <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n            <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n          </svg>\n          <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n            <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n            <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n          </div>\n        </div>\n        \n            <div id=\"vd1_q\">\n              <b style=\"color:#38bdf8; font-size:18px;\">Ví dụ 1:</b> Mẫu số liệu có $Q_1 = 40, Q_3 = 60$. Tính $\\Delta_Q$ và xác định các rào chặn để kiểm tra giá trị ngoại lai.<br>\n              <i style=\"color:#94a3b8;\">(Thời gian suy nghĩ: 30 giây - Quan sát đồng hồ ở góc phải màn hình)</i>\n            </div>\n            <div id=\"vd1_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n              <b style=\"color:#34d399;\">Lời giải:</b><br>\n              $\\Delta_Q = 60 - 40 = 20$.<br>\n              Rào dưới: $L = 40 - 1{,}5 \\times 20 = 10$.<br>\n              Rào trên: $U = 60 + 1{,}5 \\times 20 = 90$.<br>\n              Giá trị $< 10$ hoặc $> 90$ là ngoại lai.\n            </div>\n          </div>\n          <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:16px; margin:10px 0; background:#0f172a;\">\n            \n        <div class=\"countdown-clock-30s\" id=\"cd_m3_vd2\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n          <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n            <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n            <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n          </svg>\n          <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n            <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n            <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n          </div>\n        </div>\n        \n            <div id=\"vd2_q\">\n              <b style=\"color:#38bdf8; font-size:18px;\">Ví dụ 2:</b> Tuổi thọ ắc quy ô tô có $Q_1 = 3{,}2$ năm, $Q_3 = 4{,}8$ năm. Một chiếc hoạt động $7{,}5$ năm có phải là giá trị ngoại lai?<br>\n              <i style=\"color:#94a3b8;\">(Thời gian suy nghĩ: 30 giây - Quan sát đồng hồ ở góc phải màn hình)</i>\n            </div>\n            <div id=\"vd2_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n              <b style=\"color:#34d399;\">Lời giải:</b><br>\n              $\\Delta_Q = 4{,}8 - 3{,}2 = 1{,}6$ năm.<br>\n              Rào trên: $U = 4{,}8 + 1{,}5 \\times 1{,}6 = 7{,}2$ năm.<br>\n              Vì $7{,}5 > 7{,}2$ nên $7{,}5$ năm là giá trị ngoại lai.\n            </div>\n          </div>\n          <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:16px; margin:10px 0; background:#0f172a;\">\n            \n        <div class=\"countdown-clock-30s\" id=\"cd_m3_vd3\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n          <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n            <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n            <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n          </svg>\n          <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n            <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n            <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n          </div>\n        </div>\n        \n            <div id=\"vd3_q\">\n              <b style=\"color:#38bdf8; font-size:18px;\">Ví dụ 3:</b> Hai xạ thủ cùng $R = 5$ điểm. Xạ thủ A có $\\Delta_{Q_A} = 1{,}4$ điểm, xạ thủ B có $\\Delta_{Q_B} = 2{,}8$ điểm. Xạ thủ nào ổn định hơn?<br>\n              <i style=\"color:#94a3b8;\">(Thời gian suy nghĩ: 30 giây - Quan sát đồng hồ ở góc phải màn hình)</i>\n            </div>\n            <div id=\"vd3_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n              <b style=\"color:#34d399;\">Lời giải:</b><br>\n              Vì $\\Delta_{Q_A} = 1{,}4 < \\Delta_{Q_B} = 2{,}8$ nên $50\\%$ số phát bắn trung tâm của xạ thủ A tập trung hơn nhiều so với B $\\implies$ Xạ thủ A có phong độ ổn định hơn.\n            </div>\n          </div>\n          <div id=\"part4\">\n            <h3>4. Cú Thông Thái cảnh báo bẫy</h3>\n            <p>Nhớ đúng hệ số $1{,}5\\Delta_Q$. Tuyệt đối không nhầm thành $1\\Delta_Q$ hay $2\\Delta_Q$!</p>\n          </div>\n          <div id=\"part5\">\n            <h3>5. Mẹo Thầy Cú và tổng kết toàn bài</h3>\n            <p>Khẩu quyết: <i>\"Dưới trừ, Trên cộng với 1 phẩy 5 đen-ta Q!\"</i></p>\n          </div>\n        ",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 9: GIÁ TRỊ NGOẠI LAI",
      "subtitle": "PHẦN 1: QUY TẮC RÀO NGOÀI",
      "startTime": 0.0,
      "endTime": 44.14,
      "duration": 44.14,
      "mascotMode": "talking",
      "mascotTip": "Quy tắc rào: Dưới trừ, Trên cộng với 1,5ΔQ!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Quy tắc xác định giá trị ngoại lai</h3>\n                  <p>Giá trị $x$ được coi là <b>giá trị ngoại lai</b> (bất thường) nếu:</p>\n                  <div style=\"background:rgba(244,63,94,0.12); border:1.5px solid #f43f5e; border-radius:10px; padding:14px; text-align:center; margin:12px 0;\">\n                    <div style=\"font-size:21px; color:#fca5a5; font-weight:700;\">\n                      $$x < Q_1 - 1{,}5\\Delta_Q \\quad \\text{hoặc} \\quad x > Q_3 + 1{,}5\\Delta_Q$$\n                    </div>\n                  </div>\n                  <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:10px;\">\n                    <div style=\"background:rgba(56,189,248,0.1); border:1px solid #38bdf8; border-radius:8px; padding:10px;\">\n                      <b style=\"color:#38bdf8;\">Rào dưới:</b> $L = Q_1 - 1{,}5\\Delta_Q$\n                    </div>\n                    <div style=\"background:rgba(251,191,36,0.1); border:1px solid #fbbf24; border-radius:8px; padding:10px;\">\n                      <b style=\"color:#fbbf24;\">Rào trên:</b> $U = Q_3 + 1{,}5\\Delta_Q$\n                    </div>\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 2,
      "title": "SO SÁNH ĐỘ PHÂN TÁN",
      "subtitle": "PHẦN 2: ỨNG DỤNG TRONG THỰC TIỄN",
      "startTime": 44.14,
      "endTime": 77.64,
      "duration": 33.5,
      "mascotMode": "thinking",
      "mascotTip": "ΔQ càng nhỏ thì dữ liệu càng ổn định và đồng đều!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">2. So sánh độ phân tán bằng khoảng tứ phân vị</h3>\n                  <div style=\"background:rgba(52,211,153,0.1); border-left:4px solid #34d399; padding:12px 16px; border-radius:6px; margin-bottom:12px;\">\n                    <b style=\"color:#34d399; font-size:18px;\">Nguyên tắc so sánh:</b><br>\n                    Cho hai mẫu số liệu có cùng đơn vị đo lường:<br>\n                    • Mẫu nào có $\\Delta_Q$ nhỏ hơn $\\implies$ Độ phân tán của $50\\%$ số liệu trung tâm ít hơn $\\implies$ <b>Mẫu đó ổn định, đồng đều hơn</b>.<br>\n                    • Mẫu nào có $\\Delta_Q$ lớn hơn $\\implies$ Số liệu biến động mạnh hơn.\n                  </div>\n                  <div style=\"background:rgba(251,191,36,0.1); border:1px solid #fbbf24; border-radius:8px; padding:12px;\">\n                    <b style=\"color:#fbbf24;\">Lưu ý quan trọng:</b> Khi tập dữ liệu có giá trị ngoại lai, ta <b>bắt buộc dùng $\\Delta_Q$</b> để so sánh, vì dùng khoảng biến thiên $R$ sẽ bị sai lệch hoàn toàn.\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 3,
      "title": "LUYỆN TẬP VÍ DỤ",
      "subtitle": "PHẦN 3: CÁC VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "startTime": 77.64,
      "endTime": 81.02,
      "duration": 3.38,
      "mascotMode": "talking",
      "mascotTip": "3 ví dụ thực tế cực kỳ hay của Bài 9!",
      "bodyHtml": "\n                <div style=\"text-align:center; padding:40px 20px;\">\n                  <h2 style=\"color:#38bdf8; font-size:28px; margin-bottom:15px;\">Phần 3: Các ví dụ rèn luyện điển hình</h2>\n                  <p style=\"font-size:18px; color:#94a3b8; max-width:550px; margin:0 auto 20px;\">\n                    Kiểm tra giá trị ngoại lai của ắc quy và so sánh độ ổn định của hai xạ thủ cùng <b>đồng hồ 30 giây</b>!\n                  </p>\n                  <div style=\"display:inline-flex; align-items:center; gap:8px; background:rgba(245,158,11,0.15); border:1px solid #f59e0b; border-radius:30px; padding:8px 20px; color:#fbbf24; font-weight:700;\">\n                    <i class=\"fa-solid fa-stopwatch\"></i> Đồng hồ đếm ngược 30s sẵn sàng\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: XÁC ĐỊNH RÀO NGOẠI LAI",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 81.02,
      "endTime": 119.97,
      "duration": 38.95,
      "mascotMode": "thinking",
      "mascotTip": "Tính ΔQ = Q3 - Q1 = 20!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  \n        <div class=\"countdown-clock-30s\" id=\"cd_m3_s4\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n          <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n            <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n            <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n          </svg>\n          <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n            <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n            <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n          </div>\n        </div>\n        \n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">Ví dụ 1: Tính các rào chặn ngoại lai</h3>\n                  <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                    Một mẫu số liệu khảo sát có tứ phân vị thứ nhất $Q_1 = 40$ và tứ phân vị thứ ba $Q_3 = 60$.<br>\n                    Hãy tính khoảng tứ phân vị $\\Delta_Q$ và xác định khoảng rào $[L; U]$ để kiểm tra các giá trị ngoại lai.\n                  </p>\n                </div>\n                "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: L = 10, U = 90",
      "startTime": 119.97,
      "endTime": 157.48,
      "duration": 37.51,
      "mascotMode": "talking",
      "mascotTip": "Giá trị < 10 hoặc > 90 là giá trị ngoại lai!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1:</h3>\n                  <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                    • Khoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1 = 60 - 40 = 20$.<br>\n                    • Rào dưới $L$:<br>\n                    $$L = Q_1 - 1{,}5\\Delta_Q = 40 - 1{,}5 \\times 20 = 40 - 30 = 10$$\n                    • Rào trên $U$:<br>\n                    $$U = Q_3 + 1{,}5\\Delta_Q = 60 + 1{,}5 \\times 20 = 60 + 30 = 90$$\n                    <div style=\"margin-top:10px; padding:10px 14px; background:rgba(52,211,153,0.15); border-radius:6px; color:#a7f3d0; font-weight:600;\">\n                      ✓ Kết luận: Mọi giá trị $x < 10$ hoặc $x > 90$ đều là giá trị ngoại lai.\n                    </div>\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: TUỔI THỌ ẮC QUY Ô TÔ",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 157.48,
      "endTime": 195.26,
      "duration": 37.78,
      "mascotMode": "thinking",
      "mascotTip": "So sánh 7,5 năm với rào trên U!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  \n        <div class=\"countdown-clock-30s\" id=\"cd_m3_s6\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n          <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n            <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n            <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n          </svg>\n          <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n            <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n            <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n          </div>\n        </div>\n        \n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">Ví dụ 2: Bài toán thực tế - Tuổi thọ ắc quy</h3>\n                  <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                    Nghiên cứu tuổi thọ 100 ắc quy ô tô có $Q_1 = 3{,}2$ năm và $Q_3 = 4{,}8$ năm.<br>\n                    Trong quá trình theo dõi, có một chiếc ắc quy hoạt động bền bỉ tới $7{,}5$ năm.<br>\n                    Hãy cho biết tuổi thọ của chiếc ắc quy này có phải là giá trị ngoại lai không?\n                  </p>\n                </div>\n                "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: 7,5 NĂM LÀ GIÁ TRỊ NGOẠI LAI",
      "startTime": 195.26,
      "endTime": 228.64,
      "duration": 33.38,
      "mascotMode": "talking",
      "mascotTip": "7,5 > 7,2 nên đây là giá trị ngoại lai tích cực!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2:</h3>\n                  <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                    • Khoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1 = 4{,}8 - 3{,}2 = 1{,}6\\text{ (năm)}$.<br>\n                    • Rào trên $U$ để kiểm tra giá trị ngoại lai phía trên là:<br>\n                    $$U = Q_3 + 1{,}5\\Delta_Q = 4{,}8 + 1{,}5 \\times 1{,}6 = 4{,}8 + 2{,}4 = 7{,}2\\text{ (năm)}$$\n                    • Vì $7{,}5 > 7{,}2$ nên tuổi thọ $7{,}5$ năm vượt qua rào trên.<br>\n                    <div style=\"margin-top:10px; padding:10px 14px; background:rgba(52,211,153,0.15); border-radius:6px; color:#a7f3d0; font-weight:600;\">\n                      ✓ Kết luận: Chiếc ắc quy $7{,}5$ năm tuổi chính là một <b>giá trị ngoại lai</b>.\n                    </div>\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: SO SÁNH PHONG ĐỘ HAI XẠ THỦ",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 228.64,
      "endTime": 270.54,
      "duration": 41.9,
      "mascotMode": "thinking",
      "mascotTip": "So sánh ΔQ của xạ thủ A và B!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  \n        <div class=\"countdown-clock-30s\" id=\"cd_m3_s8\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n          <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n            <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n            <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n          </svg>\n          <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n            <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n            <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n          </div>\n        </div>\n        \n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">Ví dụ 3: Đánh giá độ ổn định thi đấu</h3>\n                  <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                    Hai xạ thủ A và B cùng bắn 50 viên đạn. Thống kê điểm số cho thấy:<br>\n                    • Xạ thủ A có $R = 5$ điểm, $\\Delta_{Q_A} = 1{,}4$ điểm.<br>\n                    • Xạ thủ B có $R = 5$ điểm, $\\Delta_{Q_B} = 2{,}8$ điểm.<br>\n                    Theo em, xạ thủ nào có phong độ thi đấu ổn định hơn?\n                  </p>\n                </div>\n                "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: XẠ THỦ A ỔN ĐỊNH HƠN",
      "startTime": 270.54,
      "endTime": 304.57,
      "duration": 34.03,
      "mascotMode": "talking",
      "mascotTip": "ΔQ_A = 1,4 < ΔQ_B = 2,8 nên xạ thủ A ổn định hơn nhiều!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3:</h3>\n                  <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                    • Cả hai xạ thủ đều có cùng khoảng biến thiên $R = 5$ điểm.<br>\n                    • Tuy nhiên, khoảng tứ phân vị của xạ thủ A là $\\Delta_{Q_A} = 1{,}4$ điểm, nhỏ hơn đáng kể so với $\\Delta_{Q_B} = 2{,}8$ điểm của xạ thủ B.<br>\n                    • Điều này chứng minh rằng $50\\%$ số phát bắn ở vùng trung tâm của xạ thủ A tập trung và ít phân tán hơn hẳn xạ thủ B.<br>\n                    <div style=\"margin-top:10px; padding:10px 14px; background:rgba(52,211,153,0.15); border-radius:6px; color:#a7f3d0; font-weight:600;\">\n                      ✓ Kết luận: <b>Xạ thủ A có phong độ thi đấu ổn định hơn xạ thủ B.</b>\n                    </div>\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI CẢNH BÁO BẪY",
      "subtitle": "PHẦN 4: BẪY HỆ SỐ 1,5",
      "startTime": 304.57,
      "endTime": 323.82,
      "duration": 19.25,
      "mascotMode": "warning",
      "mascotTip": "Nhớ chính xác hệ số 1,5ΔQ theo chuẩn Bộ GD&ĐT!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:14px;\">4. Bẫy hay gặp khi xác định ngoại lai</h3>\n                  <div style=\"background:rgba(244,63,94,0.12); border-left:4px solid #f43f5e; padding:14px 18px; border-radius:8px;\">\n                    <b style=\"color:#f43f5e; font-size:19px;\">Nhầm lẫn hệ số nhân:</b><br>\n                    Học sinh thường hay nhầm thành $Q_1 - \\Delta_Q$ hoặc $Q_3 + 2\\Delta_Q$.<br>\n                    <b style=\"color:#34d399;\">Quy chuẩn Bộ GD&ĐT:</b> Hệ số chuẩn mực bắt buộc là <b>$1{,}5\\Delta_Q$</b>:\n                    $$L = Q_1 - 1{,}5\\Delta_Q \\quad \\text{và} \\quad U = Q_3 + 1{,}5\\Delta_Q$$\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ VÀ TỔNG KẾT",
      "subtitle": "PHẦN 5: TỔNG KẾT TOÀN BỘ BÀI 9",
      "startTime": 323.82,
      "endTime": 343.31,
      "duration": 19.49,
      "mascotMode": "talking",
      "mascotTip": "Chúc mừng các em đã nắm trọn vẹn kiến thức Bài 9!",
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">5. Bí quyết Thầy Cú & Tổng kết Bài 9</h3>\n                  <div style=\"background:rgba(15,23,42,0.8); border:1px solid #38bdf8; border-radius:10px; padding:16px;\">\n                    <p style=\"font-size:19px; color:#fbbf24; font-weight:700; text-align:center; margin-bottom:10px;\">\n                      \"Dưới trừ, Trên cộng với 1 phẩy 5 đen-ta Q!\"\n                    </p>\n                    <ul style=\"list-style-type:none; padding-left:0; line-height:1.8;\">\n                      <li>• <b>Khoảng biến thiên:</b> $R = a_{k+1} - a_1$ (đo toàn bộ dữ liệu).</li>\n                      <li>• <b>Khoảng tứ phân vị:</b> $\\Delta_Q = Q_3 - Q_1$ (đo $50\\%$ trung tâm, kháng ngoại lai).</li>\n                      <li>• <b>Giá trị ngoại lai:</b> $x < Q_1 - 1{,}5\\Delta_Q$ hoặc $x > Q_3 + 1{,}5\\Delta_Q$.</li>\n                    </ul>\n                    <div style=\"margin-top:10px; padding:8px 12px; background:rgba(52,211,153,0.15); border-radius:6px; color:#a7f3d0; text-align:center; font-weight:bold;\">\n                      🎉 Chúc các em luôn đạt điểm số tuyệt đối trong các bài thi Thống kê!\n                    </div>\n                  </div>\n                </div>\n                "
    }
  ]
};
