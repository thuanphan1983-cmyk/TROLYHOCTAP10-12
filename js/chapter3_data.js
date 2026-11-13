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
  "content": "\n          <div id=\"part1\">\n            <h3>1. Định nghĩa khoảng biến thiên</h3>\n            <p>Cho mẫu số liệu ghép nhóm gồm $k$ nhóm $[a_1; a_2), [a_2; a_3), \\dots, [a_k; a_{k+1})$.<br>\n            • <b>Khoảng biến thiên</b>, ký hiệu $R$, là hiệu giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên:<br>\n            $$R = a_{k+1} - a_1$$\n            • <b>Ý nghĩa:</b> $R$ dùng để đo độ phân tán (độ dàn trải) của toàn bộ mẫu số liệu. $R$ càng lớn thì số liệu càng phân tán rộng; $R$ càng nhỏ thì số liệu càng tập trung.</p>\n          </div>\n          <div id=\"part2\">\n            <h3>2. Ưu và nhược điểm của khoảng biến thiên</h3>\n            <p>• <b>Ưu điểm:</b> Dễ tính toán, dễ hiểu, phản ánh ngay phạm vi bao phủ dữ liệu.<br>\n            • <b>Nhược điểm:</b> Chỉ phụ thuộc vào hai giá trị biên ngoài cùng, hoàn toàn không phụ thuộc vào tần số hay phân bố bên trong; cực kỳ nhạy cảm với các <b>giá trị ngoại lai</b> (bất thường).</p>\n          </div>\n          <div id=\"part3\"><h3>3. Các ví dụ rèn luyện điển hình</h3></div>\n          <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:18px; margin:14px 0; background:#0f172a;\">\n            \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Thời gian truy cập Internet</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n            <div id=\"vd1_q\">\n              Thời gian truy cập Internet (phút/ngày) của 50 học sinh:<br>\n              $[20; 40): 8$, $[40; 60): 15$, $[60; 80): 18$, $[80; 100): 9$.<br>\n              Tính khoảng biến thiên $R$ của mẫu số liệu ghép nhóm này.\n            </div>\n            <div id=\"vd1_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n              <b style=\"color:#34d399;\">Lời giải:</b><br>\n              Nhóm đầu tiên là $[20; 40) \\implies a_1 = 20$. Nhóm cuối cùng là $[80; 100) \\implies a_5 = 100$.<br>\n              Khoảng biến thiên $R = 100 - 20 = 80$ (phút).\n            </div>\n          </div>\n          <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:18px; margin:14px 0; background:#0f172a;\">\n            \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Hạn chế của khoảng biến thiên</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n            <div id=\"vd2_q\">\n              Điểm thi của hai lớp 12A và 12B đều nằm trong khoảng từ 4 đến 10 điểm. Lớp 12A điểm tập trung chủ yếu từ 6 đến 8 điểm, lớp 12B rải đều từ 4 đến 10 điểm. So sánh $R$ của hai lớp.\n            </div>\n            <div id=\"vd2_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n              <b style=\"color:#34d399;\">Lời giải:</b><br>\n              Cả hai lớp đều có $R = 10 - 4 = 6$ điểm. $R$ bằng nhau dù lớp 12A điểm tập trung hơn nhiều. Điều này cho thấy $R$ không phản ánh sự phân tán bên trong.\n            </div>\n          </div>\n          <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:18px; margin:14px 0; background:#0f172a;\">\n            \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Độ nhạy cảm với giá trị ngoại lai</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n            <div id=\"vd3_q\">\n              Thời gian hồi phục (ngày) của 68 bệnh nhân:<br>\n              $[5; 10): 12$, $[10; 15): 25$, $[15; 20): 20$, $[20; 25): 10$, $[25; 30): 1$.<br>\n              Tính $R_1$. Nếu loại bỏ bệnh nhân bất thường ở nhóm $[25; 30)$, tính $R_2$ và nhận xét.\n            </div>\n            <div id=\"vd3_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n              <b style=\"color:#34d399;\">Lời giải:</b><br>\n              • Ban đầu: $R_1 = 30 - 5 = 25$ ngày.<br>\n              • Khi bỏ bệnh nhân bất thường: $R_2 = 25 - 5 = 20$ ngày.<br>\n              • Nhận xét: Chỉ 1 giá trị ngoại lai làm $R$ tăng vọt thêm 5 ngày.\n            </div>\n          </div>\n          <div id=\"part4\"><h3>4. Cú Thông Thái cảnh báo bẫy</h3><p>Không lấy nhầm $n_\\max - n_\\min$!</p></div>\n          <div id=\"part5\"><h3>5. Mẹo Thầy Cú ghi nhớ nhanh</h3><p>$R = a_{k+1} - a_1$!</p></div>\n        ",
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
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Định nghĩa khoảng biến thiên</h3>\n                  <p>Cho mẫu số liệu ghép nhóm gồm $k$ nhóm $[a_1; a_2), [a_2; a_3), \\dots, [a_k; a_{{k+1}})$:</p>\n                  <div style=\"background:rgba(56,189,248,0.12); border:1.5px solid #38bdf8; border-radius:10px; padding:16px; text-align:center; margin:14px 0;\">\n                    <div style=\"font-size:24px; color:#38bdf8; font-weight:800; margin-bottom:6px;\">$$R = a_{{k+1}} - a_1$$</div>\n                    <div style=\"color:#94a3b8; font-size:15px;\">(Đầu mút phải nhóm cuối cùng $-$ Đầu mút trái nhóm đầu tiên)</div>\n                  </div>\n                  <div style=\"background:rgba(52,211,153,0.1); border-left:4px solid #34d399; padding:12px 16px; border-radius:6px; margin-top:12px;\">\n                    <b style=\"color:#34d399;\">Ý nghĩa thực tế:</b> Đo độ phân tán của toàn bộ dữ liệu.<br>\n                    • $R$ càng lớn $\\implies$ Số liệu càng phân tán rộng.<br>\n                    • $R$ càng nhỏ $\\implies$ Số liệu càng tập trung quanh trung tâm.\n                  </div>\n                </div>\n                "
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
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">2. Ưu và nhược điểm của khoảng biến thiên</h3>\n                  <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:12px; margin:14px 0;\">\n                    <div style=\"background:rgba(52,211,153,0.1); border:1px solid #34d399; border-radius:8px; padding:12px;\">\n                      <b style=\"color:#34d399; font-size:17px;\">✓ Ưu điểm:</b><br>\n                      • Dễ tính toán, dễ nhớ.<br>\n                      • Cho biết ngay phạm vi biến thiên của toàn bộ mẫu số liệu.\n                    </div>\n                    <div style=\"background:rgba(244,63,94,0.1); border:1px solid #f43f5e; border-radius:8px; padding:12px;\">\n                      <b style=\"color:#f43f5e; font-size:17px;\">✗ Nhược điểm:</b><br>\n                      • Không phản ánh phân bố dữ liệu bên trong.<br>\n                      • Rất dễ bị sai lệch bởi <b>giá trị ngoại lai</b>.\n                    </div>\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 3,
      "title": "LUYỆN TẬP VÍ DỤ",
      "subtitle": "PHẦN 3: CÁC VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "startTime": 91.9,
      "endTime": 95.28,
      "duration": 3.38,
      "mascotMode": "talking",
      "mascotTip": "Ví dụ dễ 15s, ví dụ nâng cao 30s!",
      "bodyHtml": "\n                <div style=\"text-align:center; padding:40px 20px;\">\n                  <h2 style=\"color:#38bdf8; font-size:28px; margin-bottom:15px;\">Phần 3: Các ví dụ rèn luyện điển hình</h2>\n                  <p style=\"font-size:18px; color:#94a3b8; max-width:550px; margin:0 auto 20px;\">\n                    Rèn luyện 3 bài toán tính khoảng biến thiên, so sánh độ phân tán và phân tích giá trị ngoại lai cùng đồng hồ đếm ngược thông minh!\n                  </p>\n                </div>\n                "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: TÍNH KHOẢNG BIẾN THIÊN",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 95.28,
      "endTime": 150.17,
      "duration": 54.89,
      "mascotMode": "thinking",
      "mascotTip": "Chỉ 15 giây vì phép tính cực kỳ đơn giản: 100 - 20 = 80!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Thời gian truy cập Internet</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                  <p style=\"font-size:17px; color:#f8fafc; margin-bottom:12px;\">\n                    Khảo sát thời gian sử dụng Internet mỗi ngày của 50 học sinh (phút):\n                  </p>\n                  <table style=\"width:100%; border-collapse:collapse; text-align:center; font-size:16px; margin-bottom:12px;\">\n                    <tr style=\"background:#1e293b; color:#38bdf8;\">\n                      <th style=\"border:1px solid #475569; padding:8px;\">Thời gian (phút)</th>\n                      <th style=\"border:1px solid #475569; padding:8px;\">$[20; 40)$</th>\n                      <th style=\"border:1px solid #475569; padding:8px;\">$[40; 60)$</th>\n                      <th style=\"border:1px solid #475569; padding:8px;\">$[60; 80)$</th>\n                      <th style=\"border:1px solid #475569; padding:8px;\">$[80; 100)$</th>\n                    </tr>\n                    <tr style=\"background:rgba(30,41,59,0.6); color:#f8fafc;\">\n                      <td style=\"border:1px solid #475569; padding:8px; font-weight:bold;\">Số học sinh</td>\n                      <td style=\"border:1px solid #475569; padding:8px;\">8</td>\n                      <td style=\"border:1px solid #475569; padding:8px;\">15</td>\n                      <td style=\"border:1px solid #475569; padding:8px;\">18</td>\n                      <td style=\"border:1px solid #475569; padding:8px;\">9</td>\n                    </tr>\n                  </table>\n                  <p style=\"font-size:17px; color:#fcd34d;\">Hãy tính khoảng biến thiên $R$ của mẫu số liệu ghép nhóm này.</p>\n                </div>\n                "
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
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 173.76,
      "endTime": 218.83,
      "duration": 45.07,
      "mascotMode": "thinking",
      "mascotTip": "Ví dụ 2 so sánh trực quan trong 15 giây!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Hạn chế của khoảng biến thiên</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n                  <p style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n                    Điểm thi môn Toán của hai lớp 12A và 12B đều nằm trong khoảng từ 4 đến 10 điểm.<br>\n                    • Lớp 12A: 40 học sinh đạt điểm tập trung trong khoảng $[6; 8)$, chỉ có 1 bạn 4 điểm và 1 bạn 10 điểm.<br>\n                    • Lớp 12B: Học sinh phân bố trải đều từ 4 đến 10 điểm.<br>\n                    Hãy so sánh khoảng biến thiên $R$ của hai lớp và nêu nhận xét.\n                  </p>\n                </div>\n                "
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
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2:</h3>\n                  <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                    • Cả hai lớp 12A và 12B đều có mút trái $a_1 = 4$ và mút phải $a_{{k+1}} = 10$.<br>\n                    • Khoảng biến thiên của hai lớp bằng nhau:<br>\n                    $$R_{12A} = R_{12B} = 10 - 4 = 6\\text{ (điểm)}$$\n                    <div style=\"margin-top:12px; padding:10px 14px; background:rgba(251,191,36,0.15); border-left:4px solid #fbbf24; border-radius:6px; color:#fcd34d;\">\n                      <b>Nhận xét sâu sắc:</b> Mặc dù điểm số lớp 12A tập trung đồng đều hơn rất nhiều so với lớp 12B, nhưng $R$ lại như nhau. Đây chính là <b>hạn chế của khoảng biến thiên</b>!\n                    </div>\n                  </div>\n                </div>\n                "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: ẢNH HƯỞNG CỦA NGOẠI LAI",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 253.63,
      "endTime": 302.64,
      "duration": 49.01,
      "mascotMode": "thinking",
      "mascotTip": "Bài này 2 bước tính nên dành 30 giây!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Độ nhạy cảm với giá trị ngoại lai</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n                  <p style=\"font-size:17px; color:#f8fafc; margin-bottom:10px;\">\n                    Thời gian hồi phục (ngày) sau phẫu thuật của 68 bệnh nhân:\n                  </p>\n                  <table style=\"width:100%; border-collapse:collapse; text-align:center; font-size:15px; margin-bottom:10px;\">\n                    <tr style=\"background:#1e293b; color:#38bdf8;\">\n                      <th style=\"border:1px solid #475569; padding:6px;\">Thời gian (ngày)</th>\n                      <th style=\"border:1px solid #475569; padding:6px;\">$[5; 10)$</th>\n                      <th style=\"border:1px solid #475569; padding:6px;\">$[10; 15)$</th>\n                      <th style=\"border:1px solid #475569; padding:6px;\">$[15; 20)$</th>\n                      <th style=\"border:1px solid #475569; padding:6px;\">$[20; 25)$</th>\n                      <th style=\"border:1px solid #475569; padding:6px; color:#f43f5e;\">$[25; 30)$</th>\n                    </tr>\n                    <tr style=\"background:rgba(30,41,59,0.6); color:#f8fafc;\">\n                      <td style=\"border:1px solid #475569; padding:6px; font-weight:bold;\">Số bệnh nhân</td>\n                      <td style=\"border:1px solid #475569; padding:6px;\">12</td>\n                      <td style=\"border:1px solid #475569; padding:6px;\">25</td>\n                      <td style=\"border:1px solid #475569; padding:6px;\">20</td>\n                      <td style=\"border:1px solid #475569; padding:6px;\">10</td>\n                      <td style=\"border:1px solid #475569; padding:6px; color:#f43f5e; font-weight:bold;\">1</td>\n                    </tr>\n                  </table>\n                  <p style=\"font-size:16px; color:#fcd34d;\">Tính $R_1$. Nếu loại bỏ 1 bệnh nhân nhóm $[25; 30)$, tính $R_2$ và nhận xét.</p>\n                </div>\n                "
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
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3:</h3>\n                  <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                    • Ban đầu: Nhóm đầu $[5; 10)$ và nhóm cuối $[25; 30)$:<br>\n                    $$R_1 = 30 - 5 = 25\\text{ (ngày)}$$\n                    • Khi loại bỏ bệnh nhân nhóm $[25; 30)$, nhóm cuối mới là $[20; 25)$:<br>\n                    $$R_2 = 25 - 5 = 20\\text{ (ngày)}$$\n                    <div style=\"margin-top:12px; padding:10px 14px; background:rgba(244,63,94,0.15); border-left:4px solid #f43f5e; border-radius:6px; color:#fca5a5;\">\n                      <b>Kết luận:</b> Khoảng biến thiên giảm mạnh từ 25 xuống 20 ngày chỉ vì loại bỏ 1 bệnh nhân! Điều này chứng minh $R$ <b>rất nhạy cảm với giá trị ngoại lai</b>.\n                    </div>\n                  </div>\n                </div>\n                "
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
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:14px;\">4. Hai bẫy sai lầm kinh điển về khoảng biến thiên</h3>\n                  <div style=\"display:flex; flex-direction:column; gap:12px;\">\n                    <div style=\"background:rgba(244,63,94,0.12); border-left:4px solid #f43f5e; padding:14px 18px; border-radius:8px;\">\n                      <b style=\"color:#f43f5e; font-size:19px;\">Bẫy 1: Lấy nhầm tần số lớn nhất trừ tần số nhỏ nhất</b><br>\n                      Nhiều bạn lấy $n_{\\max} - n_{\\min}$. Đây là sai hoàn toàn! Khoảng biến thiên là hiệu số của <b>giá trị biến lượng</b>, không phải tần số!\n                    </div>\n                  </div>\n                </div>\n                "
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
      "bodyHtml": "\n                <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">5. Bí quyết Thầy Cú ghi nhớ nhanh</h3>\n                  <div style=\"background:rgba(15,23,42,0.8); border:1px solid #38bdf8; border-radius:10px; padding:16px;\">\n                    <p style=\"font-size:20px; color:#fbbf24; font-weight:700; text-align:center; margin-bottom:12px;\">\n                      \"Khoảng biến thiên mẫu ghép nhóm: Lấy mút phải nhóm cuối trừ mút trái nhóm đầu!\"\n                    </p>\n                  </div>\n                </div>\n                "
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
  "content": "\n          <div id=\"part1\"><h3>1. Khoảng tứ phân vị</h3><p>$\\Delta_Q = Q_3 - Q_1$. Đo độ phân tán 50% trung tâm.</p></div>\n          <div id=\"part2\"><h3>2. Công thức Q1, Q3</h3><p>Tìm nhóm có tần số tích luỹ >= n/4 và >= 3n/4.</p></div>\n          <div id=\"part3\"><h3>3. Các ví dụ rèn luyện điển hình</h3></div>\n          <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:18px; margin:14px 0; background:#0f172a;\">\n            \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Chiều cao cây non (Tính Q1)</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n            <div id=\"vd1_q\">Chiều cao 40 cây non: $[10; 20): 6, [20; 30): 14, [30; 40): 12, [40; 50): 8$. Xác định nhóm chứa $Q_1$ và tính $Q_1$.</div>\n            <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\"><b>Lời giải:</b> $Q_1 \\approx 22{,}86$ cm.</div>\n          </div>\n          <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:18px; margin:14px 0; background:#0f172a;\">\n            \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Tính tứ phân vị thứ ba Q3</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n            <div id=\"vd2_q\">Dùng lại bảng 40 cây non. Xác định nhóm chứa $Q_3$ và tính $Q_3$.</div>\n            <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\"><b>Lời giải:</b> $Q_3 \\approx 38{,}33$ cm.</div>\n          </div>\n          <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:18px; margin:14px 0; background:#0f172a;\">\n            \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Khoảng tứ phân vị & Ý nghĩa</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n            <div id=\"vd3_q\">Từ $Q_1 \\approx 22{,}86$ và $Q_3 \\approx 38{,}33$, tính $\\Delta_Q$ và nêu ý nghĩa thực tế.</div>\n            <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\"><b>Lời giải:</b> $\\Delta_Q = 15{,}47$ cm.</div>\n          </div>\n          <div id=\"part4\"><h3>4. Bẫy sai lầm</h3><p>Nhầm lẫn C với tần số nhóm!</p></div>\n          <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Vẽ hàng tích luỹ cf!</p></div>\n        ",
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
      "bodyHtml": "\n            <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Định nghĩa khoảng tứ phân vị</h3>\n              <div style=\"background:rgba(56,189,248,0.12); border:1.5px solid #38bdf8; border-radius:10px; padding:16px; text-align:center; margin:14px 0;\">\n                <div style=\"font-size:24px; color:#38bdf8; font-weight:800; margin-bottom:6px;\">$$\\Delta_Q = Q_3 - Q_1$$</div>\n              </div>\n              <div style=\"background:rgba(52,211,153,0.1); border-left:4px solid #34d399; padding:12px 16px; border-radius:6px; margin-top:12px;\">\n                <b style=\"color:#34d399;\">Ý nghĩa vượt trội:</b> Đo độ phân tán của <b>$50\\%$ số liệu ở phần trung tâm</b> của mẫu số liệu.<br>\n                • Không bị ảnh hưởng bởi các giá trị ngoại lai ở hai biên.\n              </div>\n            </div>"
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
      "bodyHtml": "\n            <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">2. Công thức tính $Q_1$ và $Q_3$</h3>\n              <div style=\"display:flex; flex-direction:column; gap:10px;\">\n                <div style=\"background:rgba(56,189,248,0.1); border:1px solid #38bdf8; border-radius:8px; padding:12px;\">\n                  <b style=\"color:#38bdf8;\">Tứ phân vị thứ nhất $Q_1$:</b> $$Q_1 = u_m + \\frac{\\frac{n}{4} - C}{n_m} \\cdot (u_{m+1} - u_m)$$\n                </div>\n                <div style=\"background:rgba(251,191,36,0.1); border:1px solid #fbbf24; border-radius:8px; padding:12px;\">\n                  <b style=\"color:#fbbf24;\">Tứ phân vị thứ ba $Q_3$:</b> $$Q_3 = u_k + \\frac{\\frac{3n}{4} - C'}{n_k} \\cdot (u_{{k+1}} - u_k)$$\n                </div>\n              </div>\n            </div>"
    },
    {
      "sceneIndex": 3,
      "title": "LUYỆN TẬP VÍ DỤ",
      "subtitle": "PHẦN 3: CÁC VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "startTime": 100.85,
      "endTime": 104.23,
      "duration": 3.38,
      "mascotMode": "talking",
      "mascotTip": "Tính cẩn thận từng bước cùng đồng hồ 15 giây!",
      "bodyHtml": "\n            <div style=\"text-align:center; padding:40px 20px;\">\n              <h2 style=\"color:#38bdf8; font-size:28px; margin-bottom:15px;\">Phần 3: Các ví dụ rèn luyện điển hình</h2>\n              <p style=\"font-size:18px; color:#94a3b8; max-width:550px; margin:0 auto 20px;\">\n                Thực hành tính $Q_1$, $Q_3$ và $\\Delta_Q$ cho mẫu số liệu thực tế cùng đồng hồ đếm ngược 15 giây nhỏ gọn!\n              </p>\n            </div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: TÍNH TỨ PHÂN VỊ Q1",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 104.23,
      "endTime": 153.55,
      "duration": 49.32,
      "mascotMode": "thinking",
      "mascotTip": "n = 40, tìm nhóm có tần số tích luỹ >= 10!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Chiều cao của 40 cây non</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <table style=\"width:100%; border-collapse:collapse; text-align:center; font-size:16px; margin-bottom:12px;\">\n                <tr style=\"background:#1e293b; color:#38bdf8;\">\n                  <th style=\"border:1px solid #475569; padding:8px;\">Chiều cao (cm)</th>\n                  <th style=\"border:1px solid #475569; padding:8px;\">$[10; 20)$</th>\n                  <th style=\"border:1px solid #475569; padding:8px;\">$[20; 30)$</th>\n                  <th style=\"border:1px solid #475569; padding:8px;\">$[30; 40)$</th>\n                  <th style=\"border:1px solid #475569; padding:8px;\">$[40; 50)$</th>\n                </tr>\n                <tr style=\"background:rgba(30,41,59,0.6); color:#f8fafc;\">\n                  <td style=\"border:1px solid #475569; padding:8px; font-weight:bold;\">Số cây</td>\n                  <td style=\"border:1px solid #475569; padding:8px;\">6</td>\n                  <td style=\"border:1px solid #475569; padding:8px;\">14</td>\n                  <td style=\"border:1px solid #475569; padding:8px;\">12</td>\n                  <td style=\"border:1px solid #475569; padding:8px;\">8</td>\n                </tr>\n              </table>\n              <p style=\"font-size:17px; color:#fcd34d;\">Hãy xác định nhóm chứa $Q_1$ và tính tứ phân vị thứ nhất $Q_1$.</p>\n            </div>"
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
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n              <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1:</h3>\n              <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                • Cỡ mẫu $n = 40 \\implies \\frac{n}{4} = 10$. Tần số tích luỹ nhóm 1 là $6$; nhóm 2 là $20 \\implies$ Nhóm chứa $Q_1$ là $[20; 30)$.<br>\n                $$Q_1 = 20 + \\frac{10 - 6}{14} \\times 10 = 20 + \\frac{40}{14} \\approx 22{{,}}86\\text{ (cm)}$$\n              </div>\n            </div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: TÍNH TỨ PHÂN VỊ Q3",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 190.51,
      "endTime": 232.37,
      "duration": 41.86,
      "mascotMode": "thinking",
      "mascotTip": "3n/4 = 30, tìm nhóm có tích luỹ >= 30!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Tính tứ phân vị thứ ba Q3</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; color:#f8fafc; margin-bottom:12px;\">\n                Dùng lại bảng 40 cây non: $[10; 20): 6, [20; 30): 14, [30; 40): 12, [40; 50): 8$.\n              </p>\n              <p style=\"font-size:17px; color:#fcd34d;\">Hãy xác định nhóm chứa $Q_3$ và tính tứ phân vị thứ ba $Q_3$.</p>\n            </div>"
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
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n              <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2:</h3>\n              <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                • $\\frac{3n}{4} = 30$. Tích luỹ nhóm 2 là $20$; nhóm 3 là $32 \\implies$ Nhóm chứa $Q_3$ là $[30; 40)$.<br>\n                $$Q_3 = 30 + \\frac{30 - 20}{12} \\times 10 = 30 + \\frac{100}{12} \\approx 38{{,}}33\\text{ (cm)}$$\n              </div>\n            </div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: TÍNH KHOẢNG TỨ PHÂN VỊ",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 271.08,
      "endTime": 302.35,
      "duration": 31.27,
      "mascotMode": "thinking",
      "mascotTip": "ΔQ = Q3 - Q1!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Khoảng tứ phân vị & Ý nghĩa</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                Từ kết quả $Q_1 \\approx 22{,}86\\text{ cm}$ và $Q_3 \\approx 38{,}33\\text{ cm}$ ở hai ví dụ trước:<br>\n                Hãy tính khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu và nêu ý nghĩa thực tế.\n              </p>\n            </div>"
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: ΔQ ≈ 15,47 cm",
      "startTime": 302.35,
      "endTime": 336.24,
      "duration": 33.89,
      "mascotMode": "talking",
      "mascotTip": "Đo độ phân tán của 50% số cây trung tâm!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n              <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3:</h3>\n              <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                $$\\Delta_Q = Q_3 - Q_1 = 38{{,}}33 - 22{{,}}86 = 15{{,}}47\\text{ (cm)}$$\n                <div style=\"margin-top:10px; color:#bae6fd;\">50% số cây non ở trung tâm có độ biến thiên chênh lệch tối đa 15,47 cm.</div>\n              </div>\n            </div>"
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI CẢNH BÁO BẪY",
      "subtitle": "PHẦN 4: BẪY GIÁ TRỊ C TÍCH LUỸ",
      "startTime": 336.24,
      "endTime": 357.5,
      "duration": 21.26,
      "mascotMode": "warning",
      "mascotTip": "C là tổng tần số các nhóm đứng trước!",
      "bodyHtml": "<div style=\"font-size:18px; color:#f8fafc;\"><p>Nhớ: C là tổng tần số của các nhóm đứng trước nhóm chứa tứ phân vị.</p></div>"
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ LẬP DÒNG TÍCH LUỸ",
      "subtitle": "PHẦN 5: TÌM NHÓM TRONG 3 GIÂY",
      "startTime": 357.5,
      "endTime": 378.86,
      "duration": 21.36,
      "mascotMode": "talking",
      "mascotTip": "Lập dòng cf là nhìn ra ngay!",
      "bodyHtml": "<div style=\"font-size:18px; color:#f8fafc;\"><p>Vẽ thêm dòng cf để tìm nhóm tứ phân vị cực nhanh!</p></div>"
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
  "content": "\n          <div id=\"part1\"><h3>1. Giá trị ngoại lai</h3><p>$x < Q_1 - 1{,}5\\Delta_Q$ hoặc $x > Q_3 + 1{,}5\\Delta_Q$.</p></div>\n          <div id=\"part2\"><h3>2. So sánh độ phân tán</h3><p>Mẫu có $\\Delta_Q$ nhỏ hơn thì ổn định hơn.</p></div>\n          <div id=\"part3\"><h3>3. Các ví dụ rèn luyện điển hình</h3></div>\n          <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:18px; margin:14px 0; background:#0f172a;\">\n            \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Tính các rào chặn ngoại lai</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n            <div id=\"vd1_q\">$Q_1 = 40, Q_3 = 60$. Tính $\\Delta_Q$ và khoảng rào $[L; U]$.</div>\n            <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\"><b>Lời giải:</b> $L = 10, U = 90$.</div>\n          </div>\n          <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:18px; margin:14px 0; background:#0f172a;\">\n            \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Tuổi thọ ắc quy ô tô</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng thực tế)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n            <div id=\"vd2_q\">$Q_1 = 3{,}2; Q_3 = 4{,}8$. Kiểm tra ắc quy 7,5 năm.</div>\n            <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\"><b>Lời giải:</b> $7{,}5 > 7{,}2 \\implies$ là ngoại lai.</div>\n          </div>\n          <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:18px; margin:14px 0; background:#0f172a;\">\n            \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Đánh giá phong độ xạ thủ</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n            <div id=\"vd3_q\">Xạ thủ A có $\\Delta_Q = 1{,}4$; xạ thủ B có $\\Delta_Q = 2{,}8$. Ai ổn định hơn?</div>\n            <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\"><b>Lời giải:</b> Xạ thủ A ổn định hơn.</div>\n          </div>\n          <div id=\"part4\"><h3>4. Bẫy ngoại lai</h3><p>Nhớ đúng 1,5!</p></div>\n          <div id=\"part5\"><h3>5. Tổng kết</h3><p>Dưới trừ, Trên cộng với 1,5ΔQ!</p></div>\n        ",
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
      "bodyHtml": "\n            <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Quy tắc xác định giá trị ngoại lai</h3>\n              <div style=\"background:rgba(244,63,94,0.12); border:1.5px solid #f43f5e; border-radius:10px; padding:14px; text-align:center; margin:12px 0;\">\n                <div style=\"font-size:21px; color:#fca5a5; font-weight:700;\">$$x < Q_1 - 1{{,}}5\\Delta_Q \\quad \\text{hoặc} \\quad x > Q_3 + 1{{,}}5\\Delta_Q$$</div>\n              </div>\n            </div>"
    },
    {
      "sceneIndex": 2,
      "title": "SO SÁNH ĐỘ PHÂN TÁN",
      "subtitle": "PHẦN 2: ỨNG DỤNG TRONG THỰC TIỄN",
      "startTime": 44.14,
      "endTime": 77.64,
      "duration": 33.5,
      "mascotMode": "thinking",
      "mascotTip": "ΔQ càng nhỏ thì dữ liệu càng ổn định!",
      "bodyHtml": "\n            <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">2. So sánh độ phân tán bằng khoảng tứ phân vị</h3>\n              <div style=\"background:rgba(52,211,153,0.1); border-left:4px solid #34d399; padding:12px 16px; border-radius:6px;\">\n                Mẫu nào có $\\Delta_Q$ nhỏ hơn $\\implies$ <b>Mẫu đó ổn định, đồng đều hơn</b>.\n              </div>\n            </div>"
    },
    {
      "sceneIndex": 3,
      "title": "LUYỆN TẬP VÍ DỤ",
      "subtitle": "PHẦN 3: CÁC VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "startTime": 77.64,
      "endTime": 81.02,
      "duration": 3.38,
      "mascotMode": "talking",
      "mascotTip": "3 ví dụ thực tế hay của Bài 9!",
      "bodyHtml": "\n            <div style=\"text-align:center; padding:40px 20px;\"><h2 style=\"color:#38bdf8; font-size:28px;\">Phần 3: Các ví dụ rèn luyện điển hình</h2></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: XÁC ĐỊNH RÀO NGOẠI LAI",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 81.02,
      "endTime": 119.97,
      "duration": 38.95,
      "mascotMode": "thinking",
      "mascotTip": "Tính ΔQ = Q3 - Q1 = 20!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Tính các rào chặn ngoại lai</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                Một mẫu số liệu khảo sát có tứ phân vị thứ nhất $Q_1 = 40$ và tứ phân vị thứ ba $Q_3 = 60$.<br>\n                Hãy tính khoảng tứ phân vị $\\Delta_Q$ và xác định khoảng rào $[L; U]$ để kiểm tra các giá trị ngoại lai.\n              </p>\n            </div>"
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
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n              <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1:</h3>\n              <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                • $\\Delta_Q = Q_3 - Q_1 = 60 - 40 = 20$.<br>\n                • Rào dưới $L = 40 - 1{{,}}5 \\times 20 = 10$.<br>\n                • Rào trên $U = 60 + 1{{,}}5 \\times 20 = 90$.<br>\n                <div style=\"margin-top:10px; color:#a7f3d0; font-weight:bold;\">Mọi giá trị $x < 10$ hoặc $x > 90$ đều là giá trị ngoại lai.</div>\n              </div>\n            </div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: TUỔI THỌ ẮC QUY Ô TÔ",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 157.48,
      "endTime": 195.26,
      "duration": 37.78,
      "mascotMode": "thinking",
      "mascotTip": "So sánh 7,5 năm với rào trên U = 7,2!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Bài toán thực tế - Tuổi thọ ắc quy</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#fbbf24;\">30 giây</b> (Vận dụng thực tế)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                Nghiên cứu tuổi thọ 100 ắc quy ô tô có $Q_1 = 3{,}2$ năm và $Q_3 = 4{,}8$ năm.<br>\n                Trong quá trình theo dõi, có một chiếc ắc quy hoạt động bền bỉ tới $7{,}5$ năm.<br>\n                Hãy cho biết tuổi thọ của chiếc ắc quy này có phải là giá trị ngoại lai không?\n              </p>\n            </div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: 7,5 NĂM LÀ GIÁ TRỊ NGOẠI LAI",
      "startTime": 195.26,
      "endTime": 228.64,
      "duration": 33.38,
      "mascotMode": "talking",
      "mascotTip": "7,5 > 7,2 nên đây là giá trị ngoại lai!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n              <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2:</h3>\n              <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                • $\\Delta_Q = 4{{,}}8 - 3{{,}}2 = 1{{,}}6$ năm.<br>\n                • Rào trên $U = 4{{,}}8 + 1{{,}}5 \\times 1{{,}}6 = 7{{,}}2$ năm.<br>\n                • Vì $7{{,}}5 > 7{{,}}2$ nên chiếc ắc quy $7{{,}}5$ năm chính là <b>giá trị ngoại lai</b>.\n              </div>\n            </div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: SO SÁNH PHONG ĐỘ HAI XẠ THỦ",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 228.64,
      "endTime": 270.54,
      "duration": 41.9,
      "mascotMode": "thinking",
      "mascotTip": "Ví dụ 3 so sánh trực quan trong 15 giây!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              \n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Đánh giá độ ổn định thi đấu</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#34d399;\">15 giây</b> (Thông hiểu / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#34d399; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n                Hai xạ thủ A và B cùng bắn 50 viên đạn. Thống kê điểm số cho thấy:<br>\n                • Xạ thủ A có $R = 5$ điểm, $\\Delta_{Q_A} = 1{,}4$ điểm.<br>\n                • Xạ thủ B có $R = 5$ điểm, $\\Delta_{Q_B} = 2{,}8$ điểm.<br>\n                Theo em, xạ thủ nào có phong độ thi đấu ổn định hơn?\n              </p>\n            </div>"
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
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n              <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3:</h3>\n              <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                • $\\Delta_{{Q_A}} = 1{{,}}4 < \\Delta_{{Q_B}} = 2{{,}}8 \\implies$ <b>Xạ thủ A có phong độ thi đấu ổn định hơn xạ thủ B.</b>\n              </div>\n            </div>"
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI CẢNH BÁO BẪY",
      "subtitle": "PHẦN 4: BẪY HỆ SỐ 1,5",
      "startTime": 304.57,
      "endTime": 323.82,
      "duration": 19.25,
      "mascotMode": "warning",
      "mascotTip": "Nhớ đúng hệ số 1,5ΔQ!",
      "bodyHtml": "<div style=\"font-size:18px; color:#f8fafc;\"><p>Hệ số chuẩn bắt buộc là 1,5ΔQ!</p></div>"
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ VÀ TỔNG KẾT",
      "subtitle": "PHẦN 5: TỔNG KẾT TOÀN BỘ BÀI 9",
      "startTime": 323.82,
      "endTime": 343.31,
      "duration": 19.49,
      "mascotMode": "talking",
      "mascotTip": "Chúc các em nắm trọn vẹn Bài 9!",
      "bodyHtml": "<div style=\"font-size:18px; color:#f8fafc;\"><p>Dưới trừ, Trên cộng với 1,5ΔQ!</p></div>"
    }
  ]
};
