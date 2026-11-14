/* =========================================================================
   CHƯƠNG VI: XÁC SUẤT CÓ ĐIỀU KIỆN - TOÁN 12 KNTT
   Bài 18: Xác suất có điều kiện (Mục 1, 2, 3)
   Rich Interactive Slides & Audio chuẩn SGK Kết Nối Tri Thức
   ========================================================================= */

if (typeof window !== 'undefined') {
  window.CHAPTER6_DATA = window.CHAPTER6_DATA || {};

  window.CHAPTER6_DATA.bai18_muc1 = {
  "lessonId": "bai18",
  "lessonTitle": "Bài 18: Xác suất có điều kiện",
  "sectionId": "bai18_muc1",
  "sectionTitle": "Mục 1: Khái niệm xác suất có điều kiện P(A|B)",
  "audio": "/audio/bai18_muc1.mp3",
  "audioSrc": "./audio/bai18_muc1.mp3",
  "audio_src": "./audio/bai18_muc1.mp3",
  "timestamp_src": "timestamps/bai18_muc1.json",
  "totalDuration": 357.0,
  "duration": 357.0,
  "title": "Mục 1: Khái niệm xác suất có điều kiện P(A|B)",
  "owl_tip": "P(A|B) = P(A ∩ B) / P(B): Xác suất biến cố A khi không gian mẫu thu hẹp vào B!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 56.64,
      "id": "part2"
    },
    {
      "time": 90.5,
      "id": "part3"
    },
    {
      "time": 102.6,
      "id": "vd1_q"
    },
    {
      "time": 118.01,
      "id": "vd1_a"
    },
    {
      "time": 158.23,
      "id": "vd2_q"
    },
    {
      "time": 182.11,
      "id": "vd2_a"
    },
    {
      "time": 215.54,
      "id": "vd3_q"
    },
    {
      "time": 241.17,
      "id": "vd3_a"
    },
    {
      "time": 298.34,
      "id": "part4"
    },
    {
      "time": 330.79,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Đặt vấn đề và bài toán thực tế",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Định nghĩa và công thức chuẩn SGK",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Luyện tập ví dụ minh họa tương tác",
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
      "partTitle": "Phần 4: Các tính chất của xác suất có điều kiện",
      "scenes": [
        10
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Tổng kết Mục 1 & Lời khuyên Cú Thông Thái",
      "scenes": [
        11
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 0,
      "title": "Mục 1: Khái niệm xác suất có điều kiện",
      "subtitle": "Phần 1: Đặt vấn đề và bài toán thực tế",
      "startTime": 0.0,
      "endTime": 56.64,
      "duration": 56.64,
      "mascotMode": "explaining",
      "mascotTip": "Khi biết một biến cố B đã xảy ra, không gian mẫu thu hẹp lại thành B. Xác suất của A lúc này gọi là P(A|B)!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">1. Khái niệm xác suất có điều kiện trong thực tế</h3>\n              <p style=\"font-size:16px; line-height:1.7; color:#e2e8f0;\">\n                Trong nhiều bài toán thực tế, xác suất xuất hiện của một biến cố $A$ có thể <b>thay đổi</b> nếu ta nhận được thông tin bổ sung rằng một biến cố $B$ khác đã xảy ra.\n              </p>\n              <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:14px; margin:14px 0; border-radius:4px;\">\n                <b style=\"color:#38bdf8; font-size:16px;\">Ví dụ khảo sát trường học (100 học sinh):</b>\n                <ul style=\"font-size:15px; line-height:1.7; color:#cbd5e1; margin:8px 0 0 20px;\">\n                  <li>Khảo sát $100$ học sinh: $45$ nam và $55$ nữ. Có $20$ học sinh chơi bóng rổ (gồm $15$ nam và $5$ nữ).</li>\n                  <li>Nếu chọn ngẫu nhiên $1$ bạn trong toàn trường, xác suất bạn đó chơi bóng rổ là: $P(B) = \\frac{20}{100} = 0{,}20$.</li>\n                  <li>Nếu <b>biết trước bạn được chọn là nam</b>, thì trong số $45$ bạn nam có $15$ bạn chơi bóng rổ:\n                    <div style=\"text-align:center; margin:8px 0; font-size:17px; color:#38bdf8; font-weight:700;\">\n                      $P(\\text{Chơi bóng rổ} \\mid \\text{Nam}) = \\frac{15}{45} = \\frac{1}{3} \\approx 0{,}333 \\neq 0{,}20$\n                    </div>\n                  </li>\n                </ul>\n              </div>\n              <p style=\"font-size:15px; color:#94a3b8; font-style:italic;\">\n                👉 Giá trị $\\frac{1}{3}$ được gọi là xác suất có điều kiện của biến cố \"chơi bóng rổ\" với điều kiện \"học sinh là nam\".\n              </p>\n            </div>\n            "
    },
    {
      "sceneIndex": 1,
      "title": "Mục 1: Khái niệm xác suất có điều kiện",
      "subtitle": "Phần 2: Định nghĩa và công thức chuẩn SGK",
      "startTime": 56.64,
      "endTime": 90.5,
      "duration": 33.86,
      "mascotMode": "explaining",
      "mascotTip": "Nhớ kỹ: P(A|B) là điều kiện B (B ở mẫu số). Biến cố sau dấu gạch đứng chính là điều kiện đã xảy ra!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">2. Định nghĩa xác suất có điều kiện</h3>\n              <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:16px; margin-bottom:16px;\">\n                <p style=\"font-size:16px; line-height:1.7; color:#f8fafc; margin:0;\">\n                  Cho hai biến cố $A$ và $B$ với $P(B) > 0$. Xác suất của biến cố $A$ với điều kiện biến cố $B$ đã xảy ra được gọi là <b>xác suất có điều kiện của $A$ khi biết $B$</b>, ký hiệu là $P(A \\mid B)$.\n                </p>\n                <div style=\"background:rgba(56,189,248,0.15); border:1.5px dashed #38bdf8; border-radius:8px; padding:12px; margin-top:12px; text-align:center;\">\n                  <span style=\"font-size:20px; color:#38bdf8; font-weight:800;\">\n                    $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$\n                  </span>\n                </div>\n              </div>\n              <div style=\"background:rgba(16,185,129,0.1); border-left:4px solid #10b981; padding:12px; border-radius:4px;\">\n                <b style=\"color:#10b981; font-size:15px;\">Quy tắc đếm phần tử (đồng khả năng):</b>\n                <p style=\"font-size:15px; line-height:1.6; color:#cbd5e1; margin:6px 0 0 0;\">\n                  Nếu không gian mẫu $\\Omega$ gồm hữu hạn các kết quả đồng khả năng xuất hiện thì:\n                  $$P(A \\mid B) = \\frac{n(A \\cap B)}{n(B)}$$\n                  Trong đó $n(A \\cap B)$ là số kết quả thuận lợi cho cả $A$ và $B$, còn $n(B)$ là số kết quả thuận lợi cho biến cố điều kiện $B$.\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 2,
      "title": "Mục 1: Khái niệm xác suất có điều kiện",
      "subtitle": "Phần 3: Luyện tập ví dụ minh họa tương tác",
      "startTime": 90.5,
      "endTime": 102.6,
      "duration": 12.1,
      "mascotMode": "reading",
      "mascotTip": "Chúng ta có 3 ví dụ tăng dần độ khó: 15s (Nhận biết), 15s (Thông hiểu) và 30s (Vận dụng thực tế)!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4); text-align:center;\">\n              <h3 style=\"color:#38bdf8; font-size:24px; margin-bottom:16px; font-weight:700;\">🚀 Luyện tập thực hành xác suất có điều kiện</h3>\n              <p style=\"font-size:17px; line-height:1.7; color:#cbd5e1; max-width:680px; margin:0 auto 20px auto;\">\n                Hãy cùng thử sức với 3 bài toán tiêu biểu giúp nắm vững công thức xác suất có điều kiện và kỹ năng đọc dữ liệu từ giả thiết.\n              </p>\n              <div style=\"display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; text-align:left;\">\n                <div style=\"background:rgba(16,185,129,0.15); border:1px solid #10b981; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#10b981; font-size:16px;\">Ví dụ 1 (15s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Gieo súc sắc cân đối, tính xác suất số nguyên tố biết số chấm là lẻ.</p>\n                </div>\n                <div style=\"background:rgba(56,189,248,0.15); border:1px solid #38bdf8; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#38bdf8; font-size:16px;\">Ví dụ 2 (15s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Rút ngẫu nhiên lần lượt 2 quả cầu không hoàn lại từ hộp.</p>\n                </div>\n                <div style=\"background:rgba(245,158,11,0.15); border:1px solid #f59e0b; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#f59e0b; font-size:16px;\">Ví dụ 3 (30s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Khảo sát 2 môn học giỏi Toán và giỏi Văn của lớp 40 học sinh.</p>\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 3,
      "title": "Ví dụ 1: Gieo súc sắc cân đối",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 102.6,
      "endTime": 118.00999999999999,
      "duration": 15.41,
      "mascotMode": "question",
      "mascotTip": "Điều kiện B: 'Số chấm là số lẻ'. Có bao nhiêu số chấm lẻ? Trong đó có bao nhiêu số nguyên tố?",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Xác suất có điều kiện khi gieo xúc xắc</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Gieo một con xúc xắc cân đối và đồng chất $6$ mặt. Biết rằng số chấm xuất hiện là <b>số lẻ</b>. Tính xác suất để số chấm xuất hiện là <b>số nguyên tố</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $\\frac{1}{3}$</div>\n                <div><b>B.</b> $\\frac{2}{3}$</div>\n                <div><b>C.</b> $\\frac{1}{2}$</div>\n                <div><b>D.</b> $\\frac{3}{4}$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 4,
      "title": "Ví dụ 1: Gieo súc sắc cân đối",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 118.01,
      "endTime": 158.23000000000002,
      "duration": 40.22,
      "mascotMode": "success",
      "mascotTip": "Chính xác! B = {1, 3, 5} có 3 phần tử. Trong đó các số nguyên tố là {3, 5} (2 phần tử). P = 2/3!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 1</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: B</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Bước 1:</b> Không gian mẫu gieo xúc xắc: $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$.</p>\n                <p><b>Bước 2:</b> Xác định biến cố điều kiện $B$ (\"số chấm là số lẻ\"):\n                  $$B = \\{1, 3, 5\\} \\implies n(B) = 3$$\n                </p>\n                <p><b>Bước 3:</b> Xác định biến cố $A$ (\"số chấm là số nguyên tố\"): $A = \\{2, 3, 5\\}$.<br>\n                  Biến cố giao $A \\cap B$ là các số vừa lẻ vừa là số nguyên tố:\n                  $$A \\cap B = \\{3, 5\\} \\implies n(A \\cap B) = 2$$\n                </p>\n                <p><b>Bước 4:</b> Xác suất có điều kiện:\n                  $$P(A \\mid B) = \\frac{n(A \\cap B)}{n(B)} = \\frac{2}{3}$$\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 5,
      "title": "Ví dụ 2: Rút bóng không hoàn lại",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 158.23,
      "endTime": 182.10999999999999,
      "duration": 23.88,
      "mascotMode": "question",
      "mascotTip": "Sau khi rút 1 quả đỏ, trong hộp còn tổng cộng bao nhiêu quả? Và còn lại bao nhiêu quả đỏ?",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Rút bóng không hoàn lại từ hộp</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Một hộp chứa $10$ quả cầu gồm $6$ quả đỏ và $4$ quả xanh. Lấy ngẫu nhiên lần lượt $2$ quả cầu (không hoàn lại). Biết rằng quả cầu thứ nhất lấy ra có <b>màu đỏ</b>. Tính xác suất để quả cầu thứ hai lấy ra cũng có <b>màu đỏ</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $\\frac{6}{10}$</div>\n                <div><b>B.</b> $\\frac{5}{9}$</div>\n                <div><b>C.</b> $\\frac{1}{2}$</div>\n                <div><b>D.</b> $\\frac{4}{9}$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 6,
      "title": "Ví dụ 2: Rút bóng không hoàn lại",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 182.11,
      "endTime": 215.54000000000002,
      "duration": 33.43,
      "mascotMode": "success",
      "mascotTip": "Rất chuẩn! Đã rút 1 quả đỏ thì hộp còn 9 quả (5 đỏ, 4 xanh). Xác suất quả 2 đỏ là 5/9!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 2</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: B</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Gọi biến cố:</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>$A_1$: \"Quả cầu thứ nhất lấy ra có màu đỏ\".</li>\n                  <li>$A_2$: \"Quả cầu thứ hai lấy ra có màu đỏ\".</li>\n                </ul>\n                <p><b>Phân tích trạng thái hộp:</b></p>\n                <p>\n                  Khi biết biến cố $A_1$ đã xảy ra (quả thứ nhất là quả đỏ đã được lấy ra ngoài), trong hộp lúc này còn lại:\n                  $$10 - 1 = 9\\text{ (quả cầu)}$$\n                  Trong $9$ quả còn lại, số quả cầu đỏ là:\n                  $$6 - 1 = 5\\text{ (quả đỏ)}$$\n                </p>\n                <p><b>Kết luận xác suất có điều kiện:</b>\n                  $$P(A_2 \\mid A_1) = \\frac{5}{9}$$\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 7,
      "title": "Ví dụ 3: Học sinh giỏi Toán - Văn",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 215.54,
      "endTime": 241.17,
      "duration": 25.63,
      "mascotMode": "question",
      "mascotTip": "Tính P(V|T) = n(V và T) / n(T). Điều kiện là giỏi Toán, tức mẫu số là số học sinh giỏi Toán!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #f59e0b; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Xác suất có điều kiện từ dữ liệu khảo sát</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#f59e0b;\">30 giây</b> (Vận dụng / Nâng cao)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#f59e0b; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Một lớp học có $40$ học sinh, trong đó có $25$ học sinh giỏi Toán, $20$ học sinh giỏi Văn và $12$ học sinh giỏi cả hai môn Toán và Văn. Chọn ngẫu nhiên một học sinh. Biết rằng học sinh đó <b>giỏi Toán</b>, tính xác suất để học sinh đó cũng <b>giỏi Văn</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $\\frac{12}{25}$</div>\n                <div><b>B.</b> $\\frac{3}{5}$</div>\n                <div><b>C.</b> $\\frac{12}{20}$</div>\n                <div><b>D.</b> $\\frac{1}{2}$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 8,
      "title": "Ví dụ 3: Học sinh giỏi Toán - Văn",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 241.17,
      "endTime": 298.34,
      "duration": 57.17,
      "mascotMode": "success",
      "mascotTip": "Xuất sắc! n(T)=25 bạn, trong đó n(T giao V)=12 bạn giỏi cả hai. P(V|T) = 12/25 = 0.48!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 3</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Gọi biến cố:</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>$T$: \"Học sinh được chọn giỏi Toán\" $\\implies n(T) = 25$.</li>\n                  <li>$V$: \"Học sinh được chọn giỏi Văn\" $\\implies n(V) = 20$.</li>\n                  <li>$T \\cap V$: \"Học sinh giỏi cả Toán và Văn\" $\\implies n(T \\cap V) = 12$.</li>\n                </ul>\n                <p><b>Yêu cầu bài toán:</b> Tính xác suất học sinh giỏi Văn với điều kiện học sinh đó giỏi Toán, tức là tính $P(V \\mid T)$.</p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:10px 14px; margin:10px 0; border-radius:4px;\">\n                  $$P(V \\mid T) = \\frac{n(T \\cap V)}{n(T)} = \\frac{12}{25} = 0{,}48$$\n                </div>\n                <p style=\"color:#94a3b8; font-size:14px; margin:4px 0 0 0;\">\n                  ⚠️ Lưu ý phân biệt: Nếu đề bài hỏi \"Biết học sinh giỏi Văn, tính xác suất học sinh giỏi Toán\" thì đó là $P(T \\mid V) = \\frac{12}{20} = \\frac{3}{5} = 0{,}60$ (khác $P(V \\mid T)$)!\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 9,
      "title": "Mục 1: Khái niệm xác suất có điều kiện",
      "subtitle": "Phần 4: Các tính chất quan trọng của xác suất có điều kiện",
      "startTime": 298.34,
      "endTime": 330.78999999999996,
      "duration": 32.45,
      "mascotMode": "explaining",
      "mascotTip": "Tính chất biến cố đối: P(A ngang | B) = 1 - P(A | B). Nhớ là điều kiện B giữ nguyên nhé!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">4. Các tính chất của xác suất có điều kiện</h3>\n              <p style=\"font-size:15px; color:#cbd5e1; margin-bottom:12px;\">Với biến cố $B$ có $P(B) > 0$, ta có các tính chất tương tự như xác suất thông thường:</p>\n              <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:15px;\">\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(56,189,248,0.25); border-radius:8px; padding:12px;\">\n                  <b style=\"color:#38bdf8;\">1. Miền giá trị:</b>\n                  <p style=\"margin:4px 0 0 0; color:#e2e8f0;\">$0 \\le P(A \\mid B) \\le 1$</p>\n                  <p style=\"margin:2px 0 0 0; color:#94a3b8; font-size:13px;\">$P(\\Omega \\mid B) = 1; \\quad P(\\varnothing \\mid B) = 0$.</p>\n                </div>\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(56,189,248,0.25); border-radius:8px; padding:12px;\">\n                  <b style=\"color:#38bdf8;\">2. Biến cố đối:</b>\n                  <p style=\"margin:4px 0 0 0; color:#e2e8f0;\">$P(\\overline{A} \\mid B) = 1 - P(A \\mid B)$</p>\n                  <p style=\"margin:2px 0 0 0; color:#94a3b8; font-size:13px;\">Điều kiện $B$ được giữ nguyên.</p>\n                </div>\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(56,189,248,0.25); border-radius:8px; padding:12px;\">\n                  <b style=\"color:#38bdf8;\">3. Công thức cộng có ĐK:</b>\n                  <p style=\"margin:4px 0 0 0; color:#e2e8f0;\">Nếu $A_1 \\cap A_2 = \\varnothing$ thì:\n                    <br>$P(A_1 \\cup A_2 \\mid B) = P(A_1 \\mid B) + P(A_2 \\mid B)$\n                  </p>\n                </div>\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(56,189,248,0.25); border-radius:8px; padding:12px;\">\n                  <b style=\"color:#38bdf8;\">4. Khi $A$ và $B$ độc lập:</b>\n                  <p style=\"margin:4px 0 0 0; color:#e2e8f0;\">$P(A \\mid B) = P(A)$\n                    <br>$P(B \\mid A) = P(B)$\n                  </p>\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 10,
      "title": "Mục 1: Khái niệm xác suất có điều kiện",
      "subtitle": "Phần 5: Tổng kết Mục 1 & Lời khuyên Cú Thông Thái",
      "startTime": 330.79,
      "endTime": 357.0,
      "duration": 26.21,
      "mascotMode": "summary",
      "mascotTip": "Ghi nhớ công thức vàng: P(A|B) = P(AB)/P(B) = n(AB)/n(B). Chuẩn bị bước sang Mục 2: Công thức nhân xác suất!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px; font-weight:700;\">🎯 Tổng kết Mục 1: Khái niệm xác suất có điều kiện</h3>\n              <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:14px; border-radius:4px; margin-bottom:14px;\">\n                <ul style=\"font-size:16px; line-height:1.8; color:#f8fafc; margin:0 0 0 20px;\">\n                  <li><b>Ý nghĩa:</b> Xác suất của $A$ khi không gian mẫu bị thu hẹp vào biến cố $B$.</li>\n                  <li><b>Công thức định nghĩa:</b> $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$ (với $P(B) > 0$).</li>\n                  <li><b>Công thức đếm phần tử:</b> $P(A \\mid B) = \\frac{n(A \\cap B)}{n(B)}$.</li>\n                  <li><b>Mẹo nhớ:</b> Ký hiệu đứng sau gạch $|$ luôn là điều kiện nằm ở mẫu số!</li>\n                </ul>\n              </div>\n              <div style=\"background:rgba(245,158,11,0.1); border:1px dashed #f59e0b; border-radius:8px; padding:12px; display:flex; align-items:center; gap:12px;\">\n                <span style=\"font-size:28px;\">🦉</span>\n                <span style=\"font-size:15px; color:#fbbf24; line-height:1.5;\">\n                  <b>Cú Thông Thái:</b> \"Từ công thức $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$, nếu nhân chéo ta sẽ có công thức tính $P(A \\cap B)$. Đó chính là <b>Công thức nhân xác suất</b> ở Mục 2!\"\n                </span>\n              </div>\n            </div>\n            "
    }
  ]
};

  window.CHAPTER6_DATA.bai18_muc2 = {
  "lessonId": "bai18",
  "lessonTitle": "Bài 18: Xác suất có điều kiện",
  "sectionId": "bai18_muc2",
  "sectionTitle": "Mục 2: Công thức nhân xác suất",
  "audio": "/audio/bai18_muc2.mp3",
  "audioSrc": "./audio/bai18_muc2.mp3",
  "audio_src": "./audio/bai18_muc2.mp3",
  "timestamp_src": "timestamps/bai18_muc2.json",
  "totalDuration": 323.64,
  "duration": 323.64,
  "title": "Mục 2: Công thức nhân xác suất",
  "owl_tip": "P(A ∩ B) = P(A) · P(B|A): Công thức nhân tính xác suất đồng thời qua các giai đoạn!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 28.06,
      "id": "part2"
    },
    {
      "time": 66.65,
      "id": "part3"
    },
    {
      "time": 76.42,
      "id": "vd1_q"
    },
    {
      "time": 93.34,
      "id": "vd1_a"
    },
    {
      "time": 133.92,
      "id": "vd2_q"
    },
    {
      "time": 159.36,
      "id": "vd2_a"
    },
    {
      "time": 192.72,
      "id": "vd3_q"
    },
    {
      "time": 225.72,
      "id": "vd3_a"
    },
    {
      "time": 270.89,
      "id": "part4"
    },
    {
      "time": 297.79,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Đặt vấn đề và nguồn gốc công thức nhân",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Định lý và công thức mở rộng cho 3 biến cố",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Luyện tập ví dụ minh họa tương tác",
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
      "partTitle": "Phần 4: Mẹo tính toán và Casio fx-580VNX",
      "scenes": [
        10
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Tổng kết Mục 2 & Lời khuyên Cú Thông Thái",
      "scenes": [
        11
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 0,
      "title": "Mục 2: Công thức nhân xác suất",
      "subtitle": "Phần 1: Đặt vấn đề và nguồn gốc công thức nhân",
      "startTime": 0.0,
      "endTime": 28.06,
      "duration": 28.06,
      "mascotMode": "explaining",
      "mascotTip": "Nhân chéo từ định nghĩa P(A|B): P(A ∩ B) = P(B) · P(A|B). Cực kỳ tiện lợi khi tính xác suất đồng thời!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">1. Nguồn gốc công thức nhân xác suất</h3>\n              <p style=\"font-size:16px; line-height:1.7; color:#e2e8f0;\">\n                Ở Mục 1, ta đã biết: $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$ với điều kiện $P(B) > 0$.\n              </p>\n              <div style=\"background:rgba(56,189,248,0.12); border-left:4px solid #38bdf8; padding:14px; margin:14px 0; border-radius:4px;\">\n                <p style=\"font-size:16px; line-height:1.7; color:#f8fafc; margin:0;\">\n                  Khi thực hiện phép nhân chéo hai vế, ta tìm được một công thức trực tiếp để tính <b>xác suất đồng thời</b> của cả hai biến cố $A$ và $B$:\n                </p>\n                <div style=\"text-align:center; font-size:21px; color:#38bdf8; font-weight:800; margin:10px 0;\">\n                  $$P(A \\cap B) = P(B) \\cdot P(A \\mid B)$$\n                </div>\n                <p style=\"font-size:15px; color:#cbd5e1; margin:0;\">\n                  Hoàn toàn tương tự, nếu $P(A) > 0$, ta cũng có:\n                  $$P(A \\cap B) = P(A) \\cdot P(B \\mid A)$$\n                </p>\n              </div>\n              <p style=\"font-size:15px; color:#94a3b8; font-style:italic;\">\n                👉 Công thức này gọi là <b>Công thức nhân xác suất</b>, áp dụng cho hai biến cố bất kỳ (dù độc lập hay không độc lập).\n              </p>\n            </div>\n            "
    },
    {
      "sceneIndex": 1,
      "title": "Mục 2: Công thức nhân xác suất",
      "subtitle": "Phần 2: Định lý và công thức mở rộng cho 3 biến cố",
      "startTime": 28.06,
      "endTime": 66.65,
      "duration": 38.59,
      "mascotMode": "explaining",
      "mascotTip": "Nếu A và B độc lập: P(B|A) = P(B), ta thu lại công thức nhân lớp 11: P(AB) = P(A)·P(B)!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">2. Định lý công thức nhân xác suất</h3>\n              <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:16px; margin-bottom:14px;\">\n                <b style=\"color:#38bdf8; font-size:16px;\">Định lý chuẩn SGK:</b>\n                <p style=\"font-size:16px; line-height:1.7; color:#f8fafc; margin:6px 0 0 0;\">\n                  Với hai biến cố $A$ và $B$ bất kỳ:\n                </p>\n                <div style=\"background:rgba(56,189,248,0.15); border:1.5px dashed #38bdf8; border-radius:8px; padding:10px; margin:10px 0; text-align:center;\">\n                  <span style=\"font-size:19px; color:#38bdf8; font-weight:800;\">\n                    $P(A \\cap B) = P(A) \\cdot P(B \\mid A) = P(B) \\cdot P(A \\mid B)$\n                  </span>\n                </div>\n              </div>\n              <div style=\"background:rgba(16,185,129,0.1); border-left:4px solid #10b981; padding:12px; border-radius:4px;\">\n                <b style=\"color:#10b981; font-size:15px;\">Mở rộng cho 3 biến cố liên tiếp $A, B, C$:</b>\n                <p style=\"font-size:15px; line-height:1.6; color:#cbd5e1; margin:6px 0 0 0;\">\n                  $$P(A \\cap B \\cap C) = P(A) \\cdot P(B \\mid A) \\cdot P(C \\mid A \\cap B)$$\n                  <i>Ý nghĩa:</i> Xác suất giai đoạn 1 nhân với xác suất giai đoạn 2 khi biết giai đoạn 1, nhân tiếp xác suất giai đoạn 3 khi biết 2 giai đoạn trước!\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 2,
      "title": "Mục 2: Công thức nhân xác suất",
      "subtitle": "Phần 3: Luyện tập ví dụ minh họa tương tác",
      "startTime": 66.65,
      "endTime": 76.42,
      "duration": 9.77,
      "mascotMode": "reading",
      "mascotTip": "Cùng giải 3 ví dụ kinh điển: rút bi liên tiếp (15s), kiểm tra phế phẩm (15s), và chùm chìa khóa 3 lần (30s)!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4); text-align:center;\">\n              <h3 style=\"color:#38bdf8; font-size:24px; margin-bottom:16px; font-weight:700;\">⚡ Luyện tập Công thức nhân xác suất</h3>\n              <p style=\"font-size:17px; line-height:1.7; color:#cbd5e1; max-width:680px; margin:0 auto 20px auto;\">\n                Áp dụng công thức nhân xác suất cho các phép thử diễn ra qua nhiều bước liên tiếp không hoàn lại.\n              </p>\n              <div style=\"display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; text-align:left;\">\n                <div style=\"background:rgba(16,185,129,0.15); border:1px solid #10b981; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#10b981; font-size:16px;\">Ví dụ 1 (15s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Rút liên tiếp 2 viên bi trắng không hoàn lại từ hộp có 5 trắng, 4 đen.</p>\n                </div>\n                <div style=\"background:rgba(56,189,248,0.15); border:1px solid #38bdf8; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#38bdf8; font-size:16px;\">Ví dụ 2 (15s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Kiểm tra 20 sản phẩm (3 phế phẩm), dừng lại ở đúng lần thứ hai.</p>\n                </div>\n                <div style=\"background:rgba(245,158,11,0.15); border:1px solid #f59e0b; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#f59e0b; font-size:16px;\">Ví dụ 3 (30s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Chùm chìa khóa 6 chiếc, thử từng chìa mở được ở đúng lần thứ 3.</p>\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 3,
      "title": "Ví dụ 1: Rút 2 viên bi liên tiếp",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 76.42,
      "endTime": 93.34,
      "duration": 16.92,
      "mascotMode": "question",
      "mascotTip": "Lần 1 rút bi trắng: xác suất 5/9. Khi đã rút 1 bi trắng, lần 2 rút bi trắng xác suất bao nhiêu?",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Rút 2 viên bi liên tiếp không hoàn lại</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Một hộp có $5$ viên bi trắng và $4$ viên bi đen. Rút ngẫu nhiên liên tiếp $2$ viên bi không hoàn lại. Tính xác suất để cả $2$ viên bi rút ra đều có <b>màu trắng</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $\\frac{5}{18}$</div>\n                <div><b>B.</b> $\\frac{25}{81}$</div>\n                <div><b>C.</b> $\\frac{10}{36}$</div>\n                <div><b>D.</b> $\\frac{5}{9}$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 4,
      "title": "Ví dụ 1: Rút 2 viên bi liên tiếp",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 93.34,
      "endTime": 133.92000000000002,
      "duration": 40.58,
      "mascotMode": "success",
      "mascotTip": "P(A1) = 5/9, P(A2|A1) = 4/8 = 1/2. Nhân lại: (5/9) * (1/2) = 5/18. Rất nhanh và chính xác!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 1</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Gọi biến cố:</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>$A_1$: \"Viên thứ nhất màu trắng\". Lúc đầu có 9 viên (5 trắng) $\\implies P(A_1) = \\frac{5}{9}$.</li>\n                  <li>$A_2$: \"Viên thứ hai màu trắng\".</li>\n                </ul>\n                <p><b>Sau lần 1:</b> Hộp còn $8$ viên bi, trong đó có $4$ viên bi trắng. Do đó:\n                  $$P(A_2 \\mid A_1) = \\frac{4}{8} = \\frac{1}{2}$$\n                </p>\n                <p><b>Áp dụng công thức nhân xác suất:</b>\n                  $$P(A_1 \\cap A_2) = P(A_1) \\cdot P(A_2 \\mid A_1) = \\frac{5}{9} \\cdot \\frac{1}{2} = \\frac{5}{18}$$\n                </p>\n                <p style=\"color:#94a3b8; font-size:14px; margin:4px 0 0 0;\">\n                  💡 <i>Kiểm tra lại bằng tổ hợp:</i> $\\frac{C_5^2}{C_9^2} = \\frac{10}{36} = \\frac{5}{18}$. Hai cách giải hoàn toàn khớp nhau!\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 5,
      "title": "Ví dụ 2: Kiểm tra phế phẩm dừng lại",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 133.92,
      "endTime": 159.35999999999999,
      "duration": 25.44,
      "mascotMode": "question",
      "mascotTip": "Dừng ở lần 2 nghĩa là: Lần 1 rút chính phẩm (17/20), lần 2 rút phế phẩm (3/19)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Kiểm tra phế phẩm dừng ở lần thứ hai</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Một lô hàng gồm $20$ sản phẩm, trong đó có $3$ phế phẩm. Kiểm tra ngẫu nhiên từng sản phẩm không hoàn lại cho đến khi phát hiện ra phế phẩm thì dừng lại. Tính xác suất để việc kiểm tra dừng lại ở <b>đúng lần thứ hai</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $\\frac{51}{380}$</div>\n                <div><b>B.</b> $\\frac{3}{20}$</div>\n                <div><b>C.</b> $\\frac{17}{40}$</div>\n                <div><b>D.</b> $\\frac{1}{10}$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 6,
      "title": "Ví dụ 2: Kiểm tra phế phẩm dừng lại",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 159.36,
      "endTime": 192.72000000000003,
      "duration": 33.36,
      "mascotMode": "success",
      "mascotTip": "Chính xác! Lần 1 là chính phẩm: 17/20. Lần 2 là phế phẩm: 3/19. Tích = (17*3)/(20*19) = 51/380!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 2</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Phân tích biến cố:</b></p>\n                <p>\n                  Để quá trình kiểm tra dừng lại ở đúng lần thứ hai, biến cố xảy ra phải là:\n                  <br><i>\"Lần thứ nhất lấy được chính phẩm VÀ lần thứ hai lấy được phế phẩm\"</i>.\n                </p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>Lô hàng có $20$ sản phẩm: $17$ chính phẩm và $3$ phế phẩm.</li>\n                  <li>Xác suất lần 1 lấy được chính phẩm: $P(C_1) = \\frac{17}{20}$.</li>\n                  <li>Khi lần 1 lấy được chính phẩm, trong lô còn $19$ sản phẩm gồm $16$ chính phẩm và $3$ phế phẩm. Xác suất lần 2 lấy được phế phẩm là: $P(D_2 \\mid C_1) = \\frac{3}{19}$.</li>\n                </ul>\n                <p><b>Theo công thức nhân xác suất:</b>\n                  $$P(C_1 \\cap D_2) = P(C_1) \\cdot P(D_2 \\mid C_1) = \\frac{17}{20} \\cdot \\frac{3}{19} = \\frac{51}{380}$$\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 7,
      "title": "Ví dụ 3: Thử chùm chìa khóa",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 192.72,
      "endTime": 225.72,
      "duration": 33.0,
      "mascotMode": "question",
      "mascotTip": "3 bước: Lần 1 thử sai (5/6), lần 2 thử sai (4/5), lần 3 thử đúng (1/4). Nhân cả 3 lại nhé!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #f59e0b; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Thử chùm chìa khóa mở được ở lần thứ 3</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#f59e0b;\">30 giây</b> (Vận dụng / Nâng cao)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#f59e0b; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Một người có chùm chìa khóa gồm $6$ chiếc bề ngoài giống hệt nhau, trong đó chỉ có duy nhất $1$ chiếc mở được cửa. Người đó thử từng chìa một cách ngẫu nhiên, chìa nào không mở được thì bỏ ra ngoài. Tính xác suất để người đó mở được cửa ở <b>đúng lần thử thứ ba</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $\\frac{1}{6}$</div>\n                <div><b>B.</b> $\\frac{1}{18}$</div>\n                <div><b>C.</b> $\\frac{5}{36}$</div>\n                <div><b>D.</b> $\\frac{2}{9}$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 8,
      "title": "Ví dụ 3: Thử chùm chìa khóa",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 225.72,
      "endTime": 270.89,
      "duration": 45.17,
      "mascotMode": "success",
      "mascotTip": "(5/6) * (4/5) * (1/4) = 1/6! Triệt tiêu tử mẫu cực đẹp. Bất kỳ lần nào cũng có xác suất đúng 1/6!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 3</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Phân tích chuỗi 3 phép thử liên tiếp:</b></p>\n                <p>Mở được cửa ở đúng lần thứ ba đồng nghĩa với:</p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li><b>Lần 1:</b> Thử sai (chọn trong $5$ chiếc không mở được trên $6$ chiếc):\n                    $$P(K_1) = \\frac{5}{6}$$\n                  </li>\n                  <li><b>Lần 2:</b> Thử sai (còn lại $5$ chiếc, trong đó $4$ chiếc sai):\n                    $$P(K_2 \\mid K_1) = \\frac{4}{5}$$\n                  </li>\n                  <li><b>Lần 3:</b> Thử đúng (còn lại $4$ chiếc, trong đó $1$ chiếc đúng):\n                    $$P(M_3 \\mid K_1 \\cap K_2) = \\frac{1}{4}$$\n                  </li>\n                </ul>\n                <p><b>Công thức nhân cho 3 biến cố:</b>\n                  $$P = P(K_1) \\cdot P(K_2 \\mid K_1) \\cdot P(M_3 \\mid K_1 \\cap K_2) = \\frac{5}{6} \\cdot \\frac{4}{5} \\cdot \\frac{1}{4} = \\frac{1}{6}$$\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 9,
      "title": "Mục 2: Công thức nhân xác suất",
      "subtitle": "Phần 4: Mẹo tính toán và Casio fx-580VNX",
      "startTime": 270.89,
      "endTime": 297.78999999999996,
      "duration": 26.9,
      "mascotMode": "explaining",
      "mascotTip": "Bấm trực tiếp tích các phân số trên fx-580VNX hoặc bấm Shift chia để dùng tổ hợp C(n, k) kiểm tra chéo!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">4. Mẹo tính toán và kỹ thuật Casio fx-580VNX</h3>\n              <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:16px;\">\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(56,189,248,0.25); border-radius:8px; padding:14px;\">\n                  <b style=\"color:#38bdf8; font-size:16px;\">🔢 Rút gọn phân số triệt tiêu:</b>\n                  <p style=\"font-size:14px; line-height:1.7; color:#cbd5e1; margin:6px 0 0 0;\">\n                    Trong các bài toán thử nhiều lần (như chìa khóa, bắn bia), các phân số thường triệt tiêu chéo:\n                    $$\\frac{5}{6} \\cdot \\frac{4}{5} \\cdot \\frac{1}{4} = \\frac{1}{6}$$\n                    Nhận diện tính chất này giúp giải nhanh trắc nghiệm trong vòng chưa đầy 10 giây!\n                  </p>\n                </div>\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(16,185,129,0.25); border-radius:8px; padding:14px;\">\n                  <b style=\"color:#10b981; font-size:16px;\">📟 Bấm Casio fx-580VNX:</b>\n                  <ul style=\"font-size:14px; line-height:1.7; color:#cbd5e1; margin:6px 0 0 16px;\">\n                    <li>Phím phân số <kbd style=\"background:#0f172a; border:1px solid #64748b; padding:1px 6px; border-radius:4px;\">믐</kbd> để nhập nhanh tích xác suất.</li>\n                    <li>Tổ hợp $C_n^k$: bấm <kbd style=\"background:#0f172a; border:1px solid #64748b; padding:1px 6px; border-radius:4px;\">SHIFT</kbd> <kbd style=\"background:#0f172a; border:1px solid #64748b; padding:1px 6px; border-radius:4px;\">÷</kbd>.</li>\n                    <li>Ví dụ kiểm tra Ví dụ 1: <code>5 C 2 ÷ 9 C 2 = 5/18</code>.</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 10,
      "title": "Mục 2: Công thức nhân xác suất",
      "subtitle": "Phần 5: Tổng kết Mục 2 & Lời khuyên Cú Thông Thái",
      "startTime": 297.79,
      "endTime": 323.64000000000004,
      "duration": 25.85,
      "mascotMode": "summary",
      "mascotTip": "Ghi nhớ: P(AB) = P(A) · P(B|A). Khi có nhiều nhánh và giai đoạn phức tạp, chúng ta sẽ vẽ Sơ đồ hình cây ở Mục 3!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px; font-weight:700;\">🎯 Tổng kết Mục 2: Công thức nhân xác suất</h3>\n              <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:14px; border-radius:4px; margin-bottom:14px;\">\n                <ul style=\"font-size:16px; line-height:1.8; color:#f8fafc; margin:0 0 0 20px;\">\n                  <li><b>Công thức cơ bản:</b> $P(A \\cap B) = P(A) \\cdot P(B \\mid A) = P(B) \\cdot P(A \\mid B)$.</li>\n                  <li><b>Khi $A, B$ độc lập:</b> $P(A \\cap B) = P(A) \\cdot P(B)$.</li>\n                  <li><b>Mở rộng 3 biến cố:</b> $P(A \\cap B \\cap C) = P(A) \\cdot P(B \\mid A) \\cdot P(C \\mid A \\cap B)$.</li>\n                  <li><b>Ứng dụng cốt lõi:</b> Áp dụng cho các phép thử liên tiếp không hoàn lại!</li>\n                </ul>\n              </div>\n              <div style=\"background:rgba(245,158,11,0.1); border:1px dashed #f59e0b; border-radius:8px; padding:12px; display:flex; align-items:center; gap:12px;\">\n                <span style=\"font-size:28px;\">🦉</span>\n                <span style=\"font-size:15px; color:#fbbf24; line-height:1.5;\">\n                  <b>Cú Thông Thái:</b> \"Khi một bài toán có nhiều giai đoạn và nhiều nhánh rẽ, công thức chữ sẽ rất dễ nhầm lẫn. Hãy đón xem Mục 3 để học cách dùng <b>Sơ đồ hình cây</b> - vũ khí trực quan giải quyết mọi bài xác suất!\"\n                </span>\n              </div>\n            </div>\n            "
    }
  ]
};

  window.CHAPTER6_DATA.bai18_muc3 = {
  "lessonId": "bai18",
  "lessonTitle": "Bài 18: Xác suất có điều kiện",
  "sectionId": "bai18_muc3",
  "sectionTitle": "Mục 3: Sơ đồ hình cây và ứng dụng tính xác suất",
  "audio": "/audio/bai18_muc3.mp3",
  "audioSrc": "./audio/bai18_muc3.mp3",
  "audio_src": "./audio/bai18_muc3.mp3",
  "timestamp_src": "timestamps/bai18_muc3.json",
  "totalDuration": 322.23,
  "duration": 322.23,
  "title": "Mục 3: Sơ đồ hình cây và ứng dụng tính xác suất",
  "owl_tip": "Sơ đồ cây: Nhân xác suất dọc theo nhánh, tổng xác suất mỗi nút bằng 1!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 32.16,
      "id": "part2"
    },
    {
      "time": 62.47,
      "id": "part3"
    },
    {
      "time": 73.49,
      "id": "vd1_q"
    },
    {
      "time": 99.03,
      "id": "vd1_a"
    },
    {
      "time": 130.54,
      "id": "vd2_q"
    },
    {
      "time": 152.0,
      "id": "vd2_a"
    },
    {
      "time": 190.06,
      "id": "vd3_q"
    },
    {
      "time": 224.07,
      "id": "vd3_a"
    },
    {
      "time": 268.76,
      "id": "part4"
    },
    {
      "time": 297.7,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Giới thiệu Sơ đồ hình cây (Tree Diagram)",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Hai quy tắc vàng khi tính toán trên sơ đồ cây",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Luyện tập ví dụ minh họa tương tác",
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
      "partTitle": "Phần 4: Trực quan hóa Sơ đồ hình cây & Tổng xác suất",
      "scenes": [
        10
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Tổng kết toàn diện Bài 18 & Chuẩn bị Bài 19",
      "scenes": [
        11
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 0,
      "title": "Mục 3: Sơ đồ hình cây & Ứng dụng",
      "subtitle": "Phần 1: Giới thiệu Sơ đồ hình cây (Tree Diagram)",
      "startTime": 0.0,
      "endTime": 32.16,
      "duration": 32.16,
      "mascotMode": "explaining",
      "mascotTip": "Sơ đồ hình cây trực quan hóa các giai đoạn: nhánh đầu là xác suất tiên nghiệm, nhánh sau là xác suất có điều kiện!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">1. Sơ đồ hình cây là gì?</h3>\n              <p style=\"font-size:16px; line-height:1.7; color:#e2e8f0;\">\n                Khi một phép thử gồm nhiều giai đoạn liên tiếp, việc sử dụng <b>Sơ đồ hình cây (Tree Diagram)</b> là phương pháp trực quan và hiệu quả nhất để biểu diễn tất cả các khả năng có thể xảy ra cùng các xác suất tương ứng.\n              </p>\n              <div style=\"background:rgba(56,189,248,0.12); border-left:4px solid #38bdf8; padding:14px; margin:14px 0; border-radius:4px;\">\n                <b style=\"color:#38bdf8; font-size:16px;\">Đặc điểm của sơ đồ hình cây:</b>\n                <ul style=\"font-size:15px; line-height:1.7; color:#cbd5e1; margin:8px 0 0 20px;\">\n                  <li><b>Nút gốc:</b> Điểm xuất phát của phép thử ban đầu.</li>\n                  <li><b>Các nhánh thế hệ 1:</b> Biểu diễn các biến cố ở giai đoạn 1, trên mỗi nhánh ghi xác suất $P(A_i)$.</li>\n                  <li><b>Các nhánh thế hệ 2:</b> Xuất phát từ mỗi nút ở giai đoạn 1, biểu diễn các biến cố ở giai đoạn 2. Trên nhánh này ghi xác suất có điều kiện $P(B_j \\mid A_i)$.</li>\n                </ul>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 1,
      "title": "Mục 3: Sơ đồ hình cây & Ứng dụng",
      "subtitle": "Phần 2: Hai quy tắc vàng khi tính toán trên sơ đồ cây",
      "startTime": 32.16,
      "endTime": 62.47,
      "duration": 30.31,
      "mascotMode": "explaining",
      "mascotTip": "Quy tắc 1: Nhân dọc theo nhánh (công thức nhân). Quy tắc 2: Tổng xác suất các nhánh tại một nút luôn bằng 1!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">2. Hai quy tắc vàng khi tính trên sơ đồ cây</h3>\n              <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:16px;\">\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:16px;\">\n                  <b style=\"color:#38bdf8; font-size:16px;\">🌿 Quy tắc 1: Nhân dọc theo nhánh</b>\n                  <p style=\"font-size:15px; line-height:1.6; color:#e2e8f0; margin:8px 0 0 0;\">\n                    Xác suất của một kết quả tương ứng với một đường đi từ gốc đến ngọn bằng <b>tích</b> các xác suất ghi trên các nhánh của đường đi đó:\n                  </p>\n                  <div style=\"text-align:center; font-size:17px; color:#38bdf8; font-weight:800; margin-top:8px;\">\n                    $P(A \\cap B) = P(A) \\cdot P(B \\mid A)$\n                  </div>\n                </div>\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(16,185,129,0.3); border-radius:8px; padding:16px;\">\n                  <b style=\"color:#10b981; font-size:16px;\">🌱 Quy tắc 2: Tổng tại mỗi nút bằng 1</b>\n                  <p style=\"font-size:15px; line-height:1.6; color:#e2e8f0; margin:8px 0 0 0;\">\n                    Tại mỗi nút, tổng xác suất ghi trên tất cả các nhánh cùng xuất phát từ nút đó luôn <b>bằng 1</b>:\n                  </p>\n                  <div style=\"text-align:center; font-size:17px; color:#10b981; font-weight:800; margin-top:8px;\">\n                    $P(B \\mid A) + P(\\overline{B} \\mid A) = 1$\n                  </div>\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 2,
      "title": "Mục 3: Sơ đồ hình cây & Ứng dụng",
      "subtitle": "Phần 3: Luyện tập ví dụ minh họa tương tác",
      "startTime": 62.47,
      "endTime": 73.49,
      "duration": 11.02,
      "mascotMode": "reading",
      "mascotTip": "Cùng phân tích 3 bài toán mô hình cây: dự báo thời tiết (15s), phân xưởng linh kiện (15s), và bộ kit xét nghiệm y khoa (30s)!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4); text-align:center;\">\n              <h3 style=\"color:#38bdf8; font-size:24px; margin-bottom:16px; font-weight:700;\">🌳 Luyện tập Ứng dụng Sơ đồ hình cây</h3>\n              <p style=\"font-size:17px; line-height:1.7; color:#cbd5e1; max-width:680px; margin:0 auto 20px auto;\">\n                Sử dụng sơ đồ hình cây để giải quyết nhanh chóng các bài toán xác suất thực tế nhiều giai đoạn.\n              </p>\n              <div style=\"display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; text-align:left;\">\n                <div style=\"background:rgba(16,185,129,0.15); border:1px solid #10b981; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#10b981; font-size:16px;\">Ví dụ 1 (15s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Dự báo trời mưa (0,4), mưa thì muộn (0,2). Tính P(Mưa và Muộn).</p>\n                </div>\n                <div style=\"background:rgba(56,189,248,0.15); border:1px solid #38bdf8; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#38bdf8; font-size:16px;\">Ví dụ 2 (15s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Hai xưởng sản xuất 60% và 40%. Tính xác suất phế phẩm từ xưởng I.</p>\n                </div>\n                <div style=\"background:rgba(245,158,11,0.15); border:1px solid #f59e0b; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#f59e0b; font-size:16px;\">Ví dụ 3 (30s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Kit xét nghiệm bệnh độ nhạy 95%, tỷ lệ mắc bệnh 4%. Tính P(Bệnh và Dương tính).</p>\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 3,
      "title": "Ví dụ 1: Dự báo thời tiết & Đi làm muộn",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 73.49,
      "endTime": 99.03,
      "duration": 25.54,
      "mascotMode": "question",
      "mascotTip": "Nhánh 'Mưa' (0,4) đi tiếp đến nhánh 'Muộn' (0,2). Nhân 2 xác suất này lại!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Dự báo thời tiết và thói quen đi làm</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Theo dự báo thời tiết, xác suất ngày mai trời mưa là $0{,}4$. Nếu trời mưa, xác suất một nhân viên đi làm muộn là $0{,}2$. Nếu trời không mưa, xác suất người đó đi làm muộn là $0{,}05$. Tính xác suất để ngày mai <b>trời mưa và người đó đi làm muộn</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $0{,}08$</div>\n                <div><b>B.</b> $0{,}06$</div>\n                <div><b>C.</b> $0{,}11$</div>\n                <div><b>D.</b> $0{,}03$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 4,
      "title": "Ví dụ 1: Dự báo thời tiết & Đi làm muộn",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 99.03,
      "endTime": 130.54,
      "duration": 31.51,
      "mascotMode": "success",
      "mascotTip": "Quá chuẩn! P(Mưa và Muộn) = P(Mưa) * P(Muộn|Mưa) = 0.4 * 0.2 = 0.08!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 1</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Gọi biến cố:</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>$M$: \"Ngày mai trời mưa\" $\\implies P(M) = 0{,}4$.</li>\n                  <li>$T$: \"Nhân viên đi làm muộn\".</li>\n                </ul>\n                <p><b>Dữ liệu đề bài:</b> Xác suất đi làm muộn khi trời mưa là xác suất có điều kiện:\n                  $$P(T \\mid M) = 0{,}2$$\n                </p>\n                <p><b>Theo sơ đồ cây (nhân dọc theo nhánh Mưa $\\rightarrow$ Muộn):</b>\n                  $$P(M \\cap T) = P(M) \\cdot P(T \\mid M) = 0{,}4 \\cdot 0{,}2 = 0{,}08$$\n                </p>\n                <p style=\"color:#94a3b8; font-size:14px; margin:4px 0 0 0;\">\n                  (Ghi chú: Nếu không mưa $\\overline{M}$ thì $P(\\overline{M}) = 0{,}6$, nhánh Không mưa $\\rightarrow$ Muộn là $0{,}6 \\cdot 0{,}05 = 0{,}03$).\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 5,
      "title": "Ví dụ 2: Dây chuyền hai phân xưởng",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 130.54,
      "endTime": 152.0,
      "duration": 21.46,
      "mascotMode": "question",
      "mascotTip": "Phân xưởng I chiếm 60% (0,6). Tỷ lệ phế phẩm xưởng I là 2% (0,02). Tích nhánh là bao nhiêu?",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Dây chuyền sản xuất hai phân xưởng</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Hai phân xưởng I và II cùng sản xuất linh kiện. Phân xưởng I sản xuất $60\\%$ tổng số sản phẩm, phân xưởng II sản xuất $40\\%$. Tỷ lệ phế phẩm của phân xưởng I là $2\\%$, của phân xưởng II là $3\\%$. Chọn ngẫu nhiên một sản phẩm. Tính xác suất để sản phẩm đó <b>do phân xưởng I sản xuất và là phế phẩm</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $0{,}012$</div>\n                <div><b>B.</b> $0{,}024$</div>\n                <div><b>C.</b> $0{,}018$</div>\n                <div><b>D.</b> $0{,}030$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 6,
      "title": "Ví dụ 2: Dây chuyền hai phân xưởng",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 152.0,
      "endTime": 190.06,
      "duration": 38.06,
      "mascotMode": "success",
      "mascotTip": "Rất chính xác! P(I và Phế phẩm) = 0.60 * 0.02 = 0.012 (tức 1.2% trên toàn thị trường)!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 2</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Gọi biến cố:</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>$A_1$: \"Sản phẩm do phân xưởng I sản xuất\" $\\implies P(A_1) = 60\\% = 0{,}60$.</li>\n                  <li>$F$: \"Sản phẩm là phế phẩm\".</li>\n                </ul>\n                <p><b>Dữ liệu giả thiết:</b> Tỷ lệ phế phẩm của xưởng I là xác suất có điều kiện:\n                  $$P(F \\mid A_1) = 2\\% = 0{,}02$$\n                </p>\n                <p><b>Theo sơ đồ hình cây (nhánh $A_1 \\rightarrow F$):</b>\n                  $$P(A_1 \\cap F) = P(A_1) \\cdot P(F \\mid A_1) = 0{,}60 \\cdot 0{,}02 = 0{,}012$$\n                </p>\n                <p style=\"color:#94a3b8; font-size:14px; margin:4px 0 0 0;\">\n                  💡 <i>Mở rộng:</i> Với xưởng II: $P(A_2 \\cap F) = 0{,}40 \\cdot 0{,}03 = 0{,}012$. Tổng xác suất phế phẩm toàn thị trường là $0{,}012 + 0{,}012 = 0{,}024$ (đây chính là Công thức xác suất toàn phần trong Bài 19 sắp tới!).\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 7,
      "title": "Ví dụ 3: Kit xét nghiệm bệnh",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 190.06,
      "endTime": 224.07,
      "duration": 34.01,
      "mascotMode": "question",
      "mascotTip": "Tỷ lệ mắc bệnh B là 4% (0,04). Độ nhạy xét nghiệm dương tính khi mắc bệnh là 95% (0,95). Nhân nhánh B -> Dương tính!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #f59e0b; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Đánh giá độ chính xác kit xét nghiệm y khoa</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#f59e0b;\">30 giây</b> (Vận dụng / Nâng cao)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#f59e0b; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Một bộ kit xét nghiệm nhanh một bệnh truyền nhiễm có <b>độ nhạy $95\\%$</b> (người mắc bệnh sẽ cho kết quả dương tính với xác suất $0{,}95$) và <b>độ đặc hiệu $90\\%$</b> (người không mắc bệnh sẽ cho kết quả âm tính với xác suất $0{,}90$). Trong một cộng đồng có tỷ lệ người mắc bệnh là $4\\%$. Chọn ngẫu nhiên một người trong cộng đồng và xét nghiệm. Tính xác suất để người được chọn <b>mắc bệnh và có kết quả dương tính</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $0{,}038$</div>\n                <div><b>B.</b> $0{,}096$</div>\n                <div><b>C.</b> $0{,}134$</div>\n                <div><b>D.</b> $0{,}040$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 8,
      "title": "Ví dụ 3: Kit xét nghiệm bệnh",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 224.07,
      "endTime": 268.76,
      "duration": 44.69,
      "mascotMode": "success",
      "mascotTip": "Tuyệt vời! P(B và Dương tính) = 0.04 * 0.95 = 0.038. Một bài toán y học thực tế rất phổ biến trong đề thi!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 3</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Thiết lập biến cố:</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>$B$: \"Người được chọn mắc bệnh\" $\\implies P(B) = 4\\% = 0{,}04$.</li>\n                  <li>$\\overline{B}$: \"Người được chọn không mắc bệnh\" $\\implies P(\\overline{B}) = 1 - 0{,}04 = 0{,}96$.</li>\n                  <li>$D$: \"Kết quả xét nghiệm là dương tính\".</li>\n                </ul>\n                <p><b>Độ nhạy của kit xét nghiệm:</b> Xác suất dương tính khi có bệnh:\n                  $$P(D \\mid B) = 95\\% = 0{,}95$$\n                </p>\n                <p><b>Nhánh đường đi trên sơ đồ cây (Gốc $\\rightarrow B \\rightarrow D$):</b>\n                  $$P(B \\cap D) = P(B) \\cdot P(D \\mid B) = 0{,}04 \\cdot 0{,}95 = 0{,}038$$\n                </p>\n                <p style=\"color:#94a3b8; font-size:14px; margin:4px 0 0 0;\">\n                  🔍 Nhánh dương tính giả (không bệnh mà dương tính): $P(\\overline{B} \\cap D) = 0{,}96 \\cdot 0{,}10 = 0{,}096$.\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 9,
      "title": "Mục 3: Sơ đồ hình cây & Ứng dụng",
      "subtitle": "Phần 4: Trực quan hóa Sơ đồ hình cây & Tổng xác suất",
      "startTime": 268.76,
      "endTime": 297.7,
      "duration": 28.94,
      "mascotMode": "explaining",
      "mascotTip": "Nhìn sơ đồ 4 nhánh: 0.038 + 0.002 + 0.096 + 0.864 = 1.000. Kiểm tra hoàn hảo không bao giờ sai sót!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">4. Trực quan hóa Sơ đồ hình cây 4 nhánh</h3>\n              <div style=\"background:rgba(15,23,42,0.9); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:16px; font-family:monospace; font-size:14px; line-height:1.7;\">\n                <div style=\"color:#38bdf8; font-weight:700; margin-bottom:6px;\">📊 BẢNG CÂY XÁC SUẤT XÉT NGHIỆM Y KHOA:</div>\n                <div style=\"color:#cbd5e1;\">\n                  • <b>Nhánh 1:</b> [Mắc bệnh: 0.04] ───(Dương tính: 0.95)───► <span style=\"color:#10b981; font-weight:700;\">P = 0.038</span> (Dương tính thật)\n                </div>\n                <div style=\"color:#94a3b8;\">\n                  • <b>Nhánh 2:</b> [Mắc bệnh: 0.04] ───(Âm tính: 0.05)──────► <span style=\"color:#cbd5e1;\">P = 0.002</span> (Âm tính giả)\n                </div>\n                <div style=\"color:#f59e0b;\">\n                  • <b>Nhánh 3:</b> [Không bệnh: 0.96] ─(Dương tính: 0.10)───► <span style=\"color:#f59e0b; font-weight:700;\">P = 0.096</span> (Dương tính giả)\n                </div>\n                <div style=\"color:#94a3b8;\">\n                  • <b>Nhánh 4:</b> [Không bệnh: 0.96] ─(Âm tính: 0.90)──────► <span style=\"color:#cbd5e1;\">P = 0.864</span> (Âm tính thật)\n                </div>\n                <div style=\"border-top:1px dashed #475569; margin-top:8px; padding-top:6px; color:#38bdf8; font-weight:700;\">\n                  ∑ Tổng 4 nhánh = 0.038 + 0.002 + 0.096 + 0.864 = 1.000 (Chính xác tuyệt đối 100%)\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 10,
      "title": "Mục 3: Sơ đồ hình cây & Ứng dụng",
      "subtitle": "Phần 5: Tổng kết toàn diện Bài 18 & Chuẩn bị Bài 19",
      "startTime": 297.7,
      "endTime": 322.23,
      "duration": 24.53,
      "mascotMode": "summary",
      "mascotTip": "Chúc mừng bạn đã hoàn thành trọn vẹn Bài 18! Các bạn đã sẵn sàng tiến vào Bài 19: Công thức xác suất toàn phần và công thức Bayes!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px; font-weight:700;\">🎓 Tổng kết toàn diện Bài 18: Xác suất có điều kiện</h3>\n              <div style=\"display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; margin-bottom:14px;\">\n                <div style=\"background:rgba(56,189,248,0.1); border:1px solid #38bdf8; border-radius:8px; padding:12px;\">\n                  <b style=\"color:#38bdf8; font-size:15px;\">Mục 1: Khái niệm</b>\n                  <p style=\"font-size:13px; line-height:1.6; color:#cbd5e1; margin:4px 0 0 0;\">\n                    $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$<br>\n                    Không gian mẫu thu hẹp vào biến cố điều kiện $B$.\n                  </p>\n                </div>\n                <div style=\"background:rgba(16,185,129,0.1); border:1px solid #10b981; border-radius:8px; padding:12px;\">\n                  <b style=\"color:#10b981; font-size:15px;\">Mục 2: Công thức nhân</b>\n                  <p style=\"font-size:13px; line-height:1.6; color:#cbd5e1; margin:4px 0 0 0;\">\n                    $P(A \\cap B) = P(A) \\cdot P(B \\mid A)$<br>\n                    Tính xác suất chuỗi nhiều giai đoạn liên tiếp.\n                  </p>\n                </div>\n                <div style=\"background:rgba(245,158,11,0.1); border:1px solid #f59e0b; border-radius:8px; padding:12px;\">\n                  <b style=\"color:#f59e0b; font-size:15px;\">Mục 3: Sơ đồ hình cây</b>\n                  <p style=\"font-size:13px; line-height:1.6; color:#cbd5e1; margin:4px 0 0 0;\">\n                    Nhân dọc theo nhánh đường đi.<br>\n                    Tổng xác suất tại mỗi nút luôn bằng 1.\n                  </p>\n                </div>\n              </div>\n              <div style=\"background:rgba(56,189,248,0.15); border:1.5px dashed #38bdf8; border-radius:8px; padding:12px; display:flex; align-items:center; gap:12px;\">\n                <span style=\"font-size:28px;\">🦉</span>\n                <span style=\"font-size:15px; color:#38bdf8; line-height:1.5;\">\n                  <b>Cú Thông Thái:</b> \"Kiến thức về xác suất có điều kiện và sơ đồ hình cây trong Bài 18 là bệ phóng quyết định để chinh phục <b>Bài 19: Công thức xác suất toàn phần và công thức Bayes</b> - đỉnh cao xác suất lớp 12!\"\n                </span>\n              </div>\n            </div>\n            "
    }
  ]
};
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = (typeof window !== 'undefined' ? window.CHAPTER6_DATA : {});
}
