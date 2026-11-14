/* =========================================================================
   CHƯƠNG VI: XÁC SUẤT CÓ ĐIỀU KIỆN - TOÁN 12 KNTT
   Bài 18: Xác suất có điều kiện (Mục 1, 2, 3)
   Bài 19: Công thức xác suất toàn phần và công thức Bayes (Mục 1, 2, 3)
   Bài tập cuối chương VI: Xác suất có điều kiện (Mục 1, 2, 3)
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
  "totalDuration": 357,
  "duration": 357,
  "title": "Mục 1: Khái niệm xác suất có điều kiện P(A|B)",
  "owl_tip": "P(A|B) = P(A ∩ B) / P(B): Xác suất biến cố A khi không gian mẫu thu hẹp vào B!",
  "timeline": [
    {
      "time": 0,
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
      "startTime": 0,
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
      "endTime": 357,
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
      "time": 0,
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
      "startTime": 0,
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
      "duration": 33,
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
      "time": 0,
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
      "time": 152,
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
      "startTime": 0,
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
      "endTime": 152,
      "duration": 21.46,
      "mascotMode": "question",
      "mascotTip": "Phân xưởng I chiếm 60% (0,6). Tỷ lệ phế phẩm xưởng I là 2% (0,02). Tích nhánh là bao nhiêu?",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Dây chuyền sản xuất hai phân xưởng</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Hai phân xưởng I và II cùng sản xuất linh kiện. Phân xưởng I sản xuất $60\\%$ tổng số sản phẩm, phân xưởng II sản xuất $40\\%$. Tỷ lệ phế phẩm của phân xưởng I là $2\\%$, của phân xưởng II là $3\\%$. Chọn ngẫu nhiên một sản phẩm. Tính xác suất để sản phẩm đó <b>do phân xưởng I sản xuất và là phế phẩm</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $0{,}012$</div>\n                <div><b>B.</b> $0{,}024$</div>\n                <div><b>C.</b> $0{,}018$</div>\n                <div><b>D.</b> $0{,}030$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 6,
      "title": "Ví dụ 2: Dây chuyền hai phân xưởng",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 152,
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

  window.CHAPTER6_DATA.bai19_muc1 = {
  "lessonId": "bai19",
  "lessonTitle": "Bài 19: Công thức xác suất toàn phần và công thức Bayes",
  "sectionId": "bai19_muc1",
  "sectionTitle": "Mục 1: Công thức xác suất toàn phần",
  "audio": "/audio/bai19_muc1.mp3",
  "audioSrc": "./audio/bai19_muc1.mp3",
  "audio_src": "./audio/bai19_muc1.mp3",
  "timestamp_src": "timestamps/bai19_muc1.json",
  "totalDuration": 381.46,
  "duration": 381.46,
  "title": "Mục 1: Công thức xác suất toàn phần",
  "owl_tip": "P(B) = ∑ P(Ai) · P(B|Ai): Gom tất cả các con đường dẫn đến biến cố B!",
  "timeline": [
    {
      "time": 0,
      "id": "part1"
    },
    {
      "time": 40.8,
      "id": "part2"
    },
    {
      "time": 91.94,
      "id": "part3"
    },
    {
      "time": 109.78,
      "id": "vd1_q"
    },
    {
      "time": 130.68,
      "id": "vd1_a"
    },
    {
      "time": 178.44,
      "id": "vd2_q"
    },
    {
      "time": 208.37,
      "id": "vd2_a"
    },
    {
      "time": 258.34,
      "id": "vd3_q"
    },
    {
      "time": 289.7,
      "id": "vd3_a"
    },
    {
      "time": 341.59,
      "id": "part4"
    },
    {
      "time": 362.95,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm hệ biến cố đầy đủ",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Định lý công thức xác suất toàn phần",
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
      "partTitle": "Phần 4: So sánh trực quan và cấu trúc mô hình phễu",
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
      "title": "Mục 1: Công thức xác suất toàn phần",
      "subtitle": "Phần 1: Khái niệm hệ biến cố đầy đủ",
      "startTime": 0,
      "endTime": 40.8,
      "duration": 40.8,
      "mascotMode": "explaining",
      "mascotTip": "Hệ đầy đủ A1, A2... phủ kín không gian mẫu Omega và đôi một không giao nhau. Dễ nhớ nhất là A và A ngang!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">1. Khái niệm hệ biến cố đầy đủ (Hệ phân hoạch)</h3>\n              <p style=\"font-size:16px; line-height:1.7; color:#e2e8f0;\">\n                Trong lý thuyết xác suất, việc chia không gian mẫu thành các trường hợp loại trừ lẫn nhau là chìa khóa để phân tích các bài toán phức tạp.\n              </p>\n              <div style=\"background:rgba(56,189,248,0.12); border-left:4px solid #38bdf8; padding:14px; margin:14px 0; border-radius:4px;\">\n                <b style=\"color:#38bdf8; font-size:16px;\">Định nghĩa chuẩn SGK:</b>\n                <p style=\"font-size:15px; line-height:1.7; color:#f8fafc; margin:6px 0 0 0;\">\n                  Tập hợp các biến cố $A_1, A_2, \\dots, A_n$ được gọi là một <b>hệ biến cố đầy đủ</b> nếu thỏa mãn hai điều kiện:\n                </p>\n                <ul style=\"font-size:15px; line-height:1.7; color:#cbd5e1; margin:6px 0 0 20px;\">\n                  <li><b>1. Đôi một xung khắc:</b> $A_i \\cap A_j = \\varnothing$ với mọi $i \\ne j$.</li>\n                  <li><b>2. Phủ kín không gian mẫu:</b> $A_1 \\cup A_2 \\cup \\dots \\cup A_n = \\Omega$.</li>\n                </ul>\n              </div>\n              <div style=\"background:rgba(16,185,129,0.1); border-left:4px solid #10b981; padding:12px; border-radius:4px;\">\n                <b style=\"color:#10b981; font-size:15px;\">Trường hợp đặc biệt thường gặp nhất ($n=2$):</b>\n                <p style=\"font-size:15px; color:#cbd5e1; margin:4px 0 0 0;\">\n                  Với mọi biến cố $A$, cặp biến cố $A$ và $\\overline{A}$ (biến cố đối) luôn tạo thành một hệ biến cố đầy đủ!\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 1,
      "title": "Mục 1: Công thức xác suất toàn phần",
      "subtitle": "Phần 2: Định lý công thức xác suất toàn phần",
      "startTime": 40.8,
      "endTime": 91.94,
      "duration": 51.14,
      "mascotMode": "explaining",
      "mascotTip": "P(B) = ∑ P(Ai) · P(B|Ai): Tổng xác suất tất cả các nhánh dẫn tới kết quả B!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">2. Công thức xác suất toàn phần</h3>\n              <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:16px; margin-bottom:14px;\">\n                <p style=\"font-size:16px; line-height:1.7; color:#f8fafc; margin:0;\">\n                  Cho $A_1, A_2, \\dots, A_n$ là một hệ biến cố đầy đủ với $P(A_i) > 0$. Với một biến cố $B$ bất kỳ:\n                </p>\n                <div style=\"background:rgba(56,189,248,0.15); border:1.5px dashed #38bdf8; border-radius:8px; padding:12px; margin:12px 0; text-align:center;\">\n                  <span style=\"font-size:20px; color:#38bdf8; font-weight:800;\">\n                    $$P(B) = \\sum_{i=1}^n P(A_i) \\cdot P(B \\mid A_i) = P(A_1)P(B \\mid A_1) + \\dots + P(A_n)P(B \\mid A_n)$$\n                  </span>\n                </div>\n              </div>\n              <div style=\"background:rgba(245,158,11,0.1); border-left:4px solid #f59e0b; padding:12px; border-radius:4px;\">\n                <b style=\"color:#f59e0b; font-size:15px;\">Dạng 2 nhánh (biến cố đối):</b>\n                <p style=\"font-size:15px; color:#e2e8f0; margin:4px 0 0 0;\">\n                  $$P(B) = P(A) \\cdot P(B \\mid A) + P(\\overline{A}) \\cdot P(B \\mid \\overline{A})$$\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 2,
      "title": "Mục 1: Công thức xác suất toàn phần",
      "subtitle": "Phần 3: Luyện tập ví dụ minh họa tương tác",
      "startTime": 91.94,
      "endTime": 109.77,
      "duration": 17.83,
      "mascotMode": "reading",
      "mascotTip": "3 ví dụ thực hành: Chọn hộp bi (15s), 3 dây chuyền linh kiện (15s), và 2 vòng bắn súng thể thao (30s)!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4); text-align:center;\">\n              <h3 style=\"color:#38bdf8; font-size:24px; margin-bottom:16px; font-weight:700;\">🚀 Luyện tập Công thức xác suất toàn phần</h3>\n              <p style=\"font-size:17px; line-height:1.7; color:#cbd5e1; max-width:680px; margin:0 auto 20px auto;\">\n                Áp dụng công thức để tính xác suất biến cố thông qua việc phân tích tất cả các kịch bản có thể dẫn tới nó.\n              </p>\n              <div style=\"display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; text-align:left;\">\n                <div style=\"background:rgba(16,185,129,0.15); border:1px solid #10b981; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#10b981; font-size:16px;\">Ví dụ 1 (15s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Hai hộp bi (6 trắng/4 đen và 3 trắng/7 đen). Rút ngẫu nhiên 1 bi trắng.</p>\n                </div>\n                <div style=\"background:rgba(56,189,248,0.15); border:1px solid #38bdf8; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#38bdf8; font-size:16px;\">Ví dụ 2 (15s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Ba dây chuyền 50%, 30%, 20%. Tính xác suất đạt loại A trên toàn kho.</p>\n                </div>\n                <div style=\"background:rgba(245,158,11,0.15); border:1px solid #f59e0b; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#f59e0b; font-size:16px;\">Ví dụ 3 (30s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Hai vòng bắn súng: Vòng chính và vòng vớt. Tính xác suất đạt huy chương.</p>\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 3,
      "title": "Ví dụ 1: Hai hộp bi ngẫu nhiên",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 109.78,
      "endTime": 130.68,
      "duration": 20.9,
      "mascotMode": "question",
      "mascotTip": "Hộp 1: 0,5 * (6/10) = 0,30. Hộp 2: 0,5 * (3/10) = 0,15. Cộng lại ra bao nhiêu?",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Rút bi ngẫu nhiên từ hai hộp</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Có hai hộp bi: Hộp 1 chứa $6$ bi trắng và $4$ bi đen. Hộp 2 chứa $3$ bi trắng và $7$ bi đen. Chọn ngẫu nhiên một hộp, sau đó từ hộp đó rút ngẫu nhiên một viên bi. Tính xác suất để viên bi rút ra có <b>màu trắng</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $0{,}45$</div>\n                <div><b>B.</b> $0{,}50$</div>\n                <div><b>C.</b> $0{,}35$</div>\n                <div><b>D.</b> $0{,}40$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 4,
      "title": "Ví dụ 1: Hai hộp bi ngẫu nhiên",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 130.68,
      "endTime": 178.44,
      "duration": 47.76,
      "mascotMode": "success",
      "mascotTip": "Chính xác! P(W) = 0,5 * 0,6 + 0,5 * 0,3 = 0,30 + 0,15 = 0,45. Đáp án A!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 1</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Thiết lập hệ biến cố đầy đủ:</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>$H_1$: \"Chọn được Hộp 1\" $\\implies P(H_1) = 0{,}5$.</li>\n                  <li>$H_2$: \"Chọn được Hộp 2\" $\\implies P(H_2) = 0{,}5$.</li>\n                </ul>\n                <p><b>Xác suất có điều kiện rút được bi trắng ($W$):</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>Ở Hộp 1 ($6$ trắng, $4$ đen): $P(W \\mid H_1) = \\frac{6}{10} = 0{,}6$.</li>\n                  <li>Ở Hộp 2 ($3$ trắng, $7$ đen): $P(W \\mid H_2) = \\frac{3}{10} = 0{,}3$.</li>\n                </ul>\n                <p><b>Áp dụng công thức xác suất toàn phần:</b>\n                  $$P(W) = P(H_1)P(W \\mid H_1) + P(H_2)P(W \\mid H_2) = 0{,}5 \\cdot 0{,}6 + 0{,}5 \\cdot 0{,}3 = 0{,}30 + 0{,}15 = 0{,}45$$\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 5,
      "title": "Ví dụ 2: Ba dây chuyền sản xuất",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 178.44,
      "endTime": 208.37,
      "duration": 29.93,
      "mascotMode": "question",
      "mascotTip": "3 nhánh: 0,5 * 0,90 + 0,3 * 0,80 + 0,2 * 0,70. Tính nhẩm nhanh nào!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Tỷ lệ sản phẩm loại A của ba dây chuyền</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Một nhà máy có ba dây chuyền sản xuất $1, 2, 3$ cung cấp lần lượt $50\\%$, $30\\%$ và $20\\%$ sản lượng. Tỷ lệ sản phẩm đạt loại A của từng dây chuyền lần lượt là $90\\%$, $80\\%$ và $70\\%$. Chọn ngẫu nhiên một sản phẩm từ kho chung. Tính xác suất để sản phẩm đó <b>đạt loại A</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $0{,}83$</div>\n                <div><b>B.</b> $0{,}80$</div>\n                <div><b>C.</b> $0{,}78$</div>\n                <div><b>D.</b> $0{,}85$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 6,
      "title": "Ví dụ 2: Ba dây chuyền sản xuất",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 208.37,
      "endTime": 258.34000000000003,
      "duration": 49.97,
      "mascotMode": "success",
      "mascotTip": "0,45 + 0,24 + 0,14 = 0,83. Rất chuẩn xác! 83% sản phẩm toàn kho đạt chuẩn loại A!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 2</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Hệ biến cố đầy đủ 3 dây chuyền:</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>$A_1$: Dây chuyền 1 sản xuất $\\implies P(A_1) = 0{,}50$; tỷ lệ loại A: $P(B \\mid A_1) = 0{,}90$.</li>\n                  <li>$A_2$: Dây chuyền 2 sản xuất $\\implies P(A_2) = 0{,}30$; tỷ lệ loại A: $P(B \\mid A_2) = 0{,}80$.</li>\n                  <li>$A_3$: Dây chuyền 3 sản xuất $\\implies P(A_3) = 0{,}20$; tỷ lệ loại A: $P(B \\mid A_3) = 0{,}70$.</li>\n                </ul>\n                <p><b>Theo công thức xác suất toàn phần:</b>\n                  $$P(B) = P(A_1)P(B \\mid A_1) + P(A_2)P(B \\mid A_2) + P(A_3)P(B \\mid A_3)$$\n                  $$P(B) = 0{,}50 \\cdot 0{,}90 + 0{,}30 \\cdot 0{,}80 + 0{,}20 \\cdot 0{,}70 = 0{,}45 + 0{,}24 + 0{,}14 = 0{,}83$$\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 7,
      "title": "Ví dụ 3: Cuộc thi bắn súng 2 vòng",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 258.34,
      "endTime": 289.71,
      "duration": 31.37,
      "mascotMode": "question",
      "mascotTip": "Qua vòng 1 (0,8) -> huy chương (0,75). Rớt vòng 1 (0,2) -> vớt huy chương (0,10). Tính tổng xác suất!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #f59e0b; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Xác suất đạt huy chương sau hai vòng thi</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#f59e0b;\">30 giây</b> (Vận dụng / Nâng cao)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#f59e0b; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Một cuộc thi bắn súng gồm hai vòng. Xác suất xạ thủ vượt qua vòng 1 là $0{,}8$. Nếu vượt qua vòng 1, xạ thủ vào vòng 2 và xác suất đạt huy chương là $0{,}75$. Nếu không vượt qua vòng 1, xạ thủ thi vòng vớt và xác suất đạt huy chương là $0{,}10$. Tính xác suất để xạ thủ đó <b>đạt huy chương</b> ở giải đấu.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $0{,}62$</div>\n                <div><b>B.</b> $0{,}60$</div>\n                <div><b>C.</b> $0{,}72$</div>\n                <div><b>D.</b> $0{,}68$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 8,
      "title": "Ví dụ 3: Cuộc thi bắn súng 2 vòng",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 289.7,
      "endTime": 341.59,
      "duration": 51.89,
      "mascotMode": "success",
      "mascotTip": "P(Huy chương) = 0,8 * 0,75 + 0,2 * 0,10 = 0,60 + 0,02 = 0,62. Xuất sắc!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 3</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Phân tích hệ biến cố đầy đủ ở vòng 1:</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>$V$: \"Xạ thủ vượt qua vòng 1\" $\\implies P(V) = 0{,}8$.</li>\n                  <li>$\\overline{V}$: \"Xạ thủ không qua vòng 1\" $\\implies P(\\overline{V}) = 1 - 0{,}8 = 0{,}2$.</li>\n                </ul>\n                <p><b>Biến cố $H$: \"Xạ thủ đạt huy chương\":</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>Khi vượt qua vòng 1: $P(H \\mid V) = 0{,}75$.</li>\n                  <li>Khi thi vòng vớt: $P(H \\mid \\overline{V}) = 0{,}10$.</li>\n                </ul>\n                <p><b>Công thức xác suất toàn phần:</b>\n                  $$P(H) = P(V) \\cdot P(H \\mid V) + P(\\overline{V}) \\cdot P(H \\mid \\overline{V})$$\n                  $$P(H) = 0{,}8 \\cdot 0{,}75 + 0{,}2 \\cdot 0{,}10 = 0{,}60 + 0{,}02 = 0{,}62$$\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 9,
      "title": "Mục 1: Công thức xác suất toàn phần",
      "subtitle": "Phần 4: So sánh trực quan và cấu trúc mô hình phễu",
      "startTime": 341.59,
      "endTime": 362.95,
      "duration": 21.36,
      "mascotMode": "explaining",
      "mascotTip": "Mô hình phễu: Gom tất cả các con đường Ai dẫn đến biến cố đích B. Rất dễ hình dung!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">4. Mô hình phễu gom xác suất toàn phần</h3>\n              <div style=\"background:rgba(15,23,42,0.9); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:16px; font-family:monospace; font-size:14px; line-height:1.7;\">\n                <div style=\"color:#38bdf8; font-weight:700; margin-bottom:6px;\">🌐 CẤU TRÚC PHỄU XÁC SUẤT TOÀN PHẦN P(B):</div>\n                <div style=\"color:#cbd5e1;\">\n                  • Kịch bản 1: [Nguyên nhân A1] ───(P(B|A1))───► Nhánh 1: P(A1) · P(B|A1)\n                </div>\n                <div style=\"color:#cbd5e1;\">\n                  • Kịch bản 2: [Nguyên nhân A2] ───(P(B|A2))───► Nhánh 2: P(A2) · P(B|A2)\n                </div>\n                <div style=\"color:#cbd5e1;\">\n                  • Kịch bản n: [Nguyên nhân An] ───(P(B|An))───► Nhánh n: P(An) · P(B|An)\n                </div>\n                <div style=\"border-top:1px dashed #38bdf8; margin-top:8px; padding-top:6px; color:#38bdf8; font-weight:700; font-size:15px;\">\n                  ==> P(B) = Nhánh 1 + Nhánh 2 + ... + Nhánh n = ∑ P(Ai) · P(B|Ai)\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 10,
      "title": "Mục 1: Công thức xác suất toàn phần",
      "subtitle": "Phần 5: Tổng kết Mục 1 & Lời khuyên Cú Thông Thái",
      "startTime": 362.95,
      "endTime": 381.45,
      "duration": 18.5,
      "mascotMode": "summary",
      "mascotTip": "Nắm chắc công thức xác suất toàn phần vì nó chính là mẫu số trong công thức Bayes ở Mục 2!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px; font-weight:700;\">🎯 Tổng kết Mục 1: Công thức xác suất toàn phần</h3>\n              <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:14px; border-radius:4px; margin-bottom:14px;\">\n                <ul style=\"font-size:16px; line-height:1.8; color:#f8fafc; margin:0 0 0 20px;\">\n                  <li><b>Điều kiện tiên quyết:</b> $A_1, A_2, \\dots, A_n$ phải là một <i>hệ biến cố đầy đủ</i>.</li>\n                  <li><b>Công thức vàng:</b> $P(B) = \\sum_{i=1}^n P(A_i) \\cdot P(B \\mid A_i)$.</li>\n                  <li><b>Ý nghĩa:</b> Tính xác suất của kết quả khi biết mọi khả năng của nguyên nhân!</li>\n                </ul>\n              </div>\n              <div style=\"background:rgba(245,158,11,0.1); border:1px dashed #f59e0b; border-radius:8px; padding:12px; display:flex; align-items:center; gap:12px;\">\n                <span style=\"font-size:28px;\">🦉</span>\n                <span style=\"font-size:15px; color:#fbbf24; line-height:1.5;\">\n                  <b>Cú Thông Thái:</b> \"Khi kết quả $B$ đã xảy ra trước mắt, làm thế nào để truy ngược xem nó xuất phát từ nguyên nhân $A_k$ nào? Chúng ta cùng bước sang Mục 2: <b>Công thức Bayes</b>!\"\n                </span>\n              </div>\n            </div>\n            "
    }
  ]
};

  window.CHAPTER6_DATA.bai19_muc2 = {
  "lessonId": "bai19",
  "lessonTitle": "Bài 19: Công thức xác suất toàn phần và công thức Bayes",
  "sectionId": "bai19_muc2",
  "sectionTitle": "Mục 2: Công thức Bayes và ý nghĩa chẩn đoán thực tế",
  "audio": "/audio/bai19_muc2.mp3",
  "audioSrc": "./audio/bai19_muc2.mp3",
  "audio_src": "./audio/bai19_muc2.mp3",
  "timestamp_src": "timestamps/bai19_muc2.json",
  "totalDuration": 359.71,
  "duration": 359.71,
  "title": "Mục 2: Công thức Bayes và ý nghĩa chẩn đoán thực tế",
  "owl_tip": "P(Ak|B) = [P(Ak) · P(B|Ak)] / P(B): Nhánh muốn tính chia cho tổng tất cả các nhánh!",
  "timeline": [
    {
      "time": 0,
      "id": "part1"
    },
    {
      "time": 25.27,
      "id": "part2"
    },
    {
      "time": 69.24,
      "id": "part3"
    },
    {
      "time": 86.66,
      "id": "vd1_q"
    },
    {
      "time": 111.14,
      "id": "vd1_a"
    },
    {
      "time": 158.38,
      "id": "vd2_q"
    },
    {
      "time": 183.5,
      "id": "vd2_a"
    },
    {
      "time": 233.09,
      "id": "vd3_q"
    },
    {
      "time": 259.22,
      "id": "vd3_a"
    },
    {
      "time": 319.46,
      "id": "part4"
    },
    {
      "time": 338.74,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Đặt vấn đề và bài toán truy ngược nguyên nhân",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Định lý công thức Bayes",
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
      "partTitle": "Phần 4: Ứng dụng Bayes trong AI và Khoa học dữ liệu",
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
      "title": "Mục 2: Công thức Bayes & Ý nghĩa",
      "subtitle": "Phần 1: Đặt vấn đề và bài toán truy ngược nguyên nhân",
      "startTime": 0,
      "endTime": 25.27,
      "duration": 25.27,
      "mascotMode": "explaining",
      "mascotTip": "Công thức toàn phần: Từ nguyên nhân tính kết quả. Công thức Bayes: Khi đã có kết quả, truy ngược nguyên nhân!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">1. Bài toán đảo xác suất và suy luận nguyên nhân</h3>\n              <p style=\"font-size:16px; line-height:1.7; color:#e2e8f0;\">\n                Trong chẩn đoán y tế, điều tra tội phạm hoặc bảo hiểm, ta thường quan sát thấy một <b>kết quả $B$</b> đã xảy ra (ví dụ: bệnh nhân xét nghiệm dương tính, sản phẩm bị hỏng, vụ va chạm xảy ra) và cần trả lời câu hỏi: <i>Khả năng nguyên nhân $A_k$ gây ra nó là bao nhiêu?</i>\n              </p>\n              <div style=\"background:rgba(56,189,248,0.12); border-left:4px solid #38bdf8; padding:14px; margin:14px 0; border-radius:4px;\">\n                <b style=\"color:#38bdf8; font-size:16px;\">Sự đối ngẫu giữa Toàn phần và Bayes:</b>\n                <ul style=\"font-size:15px; line-height:1.7; color:#cbd5e1; margin:6px 0 0 20px;\">\n                  <li><b>Xác suất toàn phần:</b> Đi xuôi chiều thời gian (Biết nguyên nhân $\\rightarrow$ dự đoán kết quả $P(B)$).</li>\n                  <li><b>Công thức Bayes:</b> Đi ngược chiều thời gian (Đã thấy kết quả $B \\rightarrow$ suy luận nguyên nhân $P(A_k \\mid B)$).</li>\n                </ul>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 1,
      "title": "Mục 2: Công thức Bayes & Ý nghĩa",
      "subtitle": "Phần 2: Định lý công thức Bayes",
      "startTime": 25.27,
      "endTime": 69.24,
      "duration": 43.97,
      "mascotMode": "explaining",
      "mascotTip": "P(Ak|B) = [P(Ak) · P(B|Ak)] / P(B). Tử số là nhánh k, mẫu số là tổng tất cả các nhánh!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">2. Định lý công thức Bayes (Thomas Bayes, 1763)</h3>\n              <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:16px; margin-bottom:14px;\">\n                <p style=\"font-size:16px; line-height:1.7; color:#f8fafc; margin:0;\">\n                  Cho $A_1, A_2, \\dots, A_n$ là một hệ biến cố đầy đủ và $B$ là biến cố với $P(B) > 0$. Với mỗi $k \\in \\{1, 2, \\dots, n\\}$:\n                </p>\n                <div style=\"background:rgba(56,189,248,0.15); border:1.5px dashed #38bdf8; border-radius:8px; padding:12px; margin:12px 0; text-align:center;\">\n                  <span style=\"font-size:20px; color:#38bdf8; font-weight:800;\">\n                    $$P(A_k \\mid B) = \\frac{P(A_k) \\cdot P(B \\mid A_k)}{P(B)} = \\frac{P(A_k) \\cdot P(B \\mid A_k)}{\\sum_{i=1}^n P(A_i) \\cdot P(B \\mid A_i)}$$\n                  </span>\n                </div>\n              </div>\n              <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:14px;\">\n                <div style=\"background:rgba(16,185,129,0.1); border-left:3px solid #10b981; padding:8px 12px; border-radius:4px;\">\n                  <b style=\"color:#10b981;\">Xác suất tiên nghiệm $P(A_k)$:</b> Niềm tin hoặc tỷ lệ ban đầu trước khi có thêm dữ liệu $B$.\n                </div>\n                <div style=\"background:rgba(245,158,11,0.1); border-left:3px solid #f59e0b; padding:8px 12px; border-radius:4px;\">\n                  <b style=\"color:#f59e0b;\">Xác suất hậu nghiệm $P(A_k \\mid B)$:</b> Niềm tin được cập nhật chính xác sau khi ghi nhận bằng chứng $B$.\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 2,
      "title": "Mục 2: Công thức Bayes & Ý nghĩa",
      "subtitle": "Phần 3: Luyện tập ví dụ minh họa tương tác",
      "startTime": 69.24,
      "endTime": 86.66,
      "duration": 17.42,
      "mascotMode": "reading",
      "mascotTip": "3 ví dụ kinh điển: Truy ngược Hộp bi 1 (15s), Sản phẩm lỗi từ Tổ 2 (15s), và Nghịch lý xét nghiệm y khoa (30s)!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4); text-align:center;\">\n              <h3 style=\"color:#38bdf8; font-size:24px; margin-bottom:16px; font-weight:700;\">⚡ Luyện tập Công thức Bayes</h3>\n              <p style=\"font-size:17px; line-height:1.7; color:#cbd5e1; max-width:680px; margin:0 auto 20px auto;\">\n                Áp dụng công thức Bayes để tính xác suất hậu nghiệm cho các tình huống ra quyết định.\n              </p>\n              <div style=\"display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; text-align:left;\">\n                <div style=\"background:rgba(16,185,129,0.15); border:1px solid #10b981; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#10b981; font-size:16px;\">Ví dụ 1 (15s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Biết viên bi rút ra là màu trắng, tính xác suất nó thuộc Hộp 1.</p>\n                </div>\n                <div style=\"background:rgba(56,189,248,0.15); border:1px solid #38bdf8; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#38bdf8; font-size:16px;\">Ví dụ 2 (15s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Sản phẩm lấy ra bị lỗi, tính xác suất do Tổ 2 may.</p>\n                </div>\n                <div style=\"background:rgba(245,158,11,0.15); border:1px solid #f59e0b; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#f59e0b; font-size:16px;\">Ví dụ 3 (30s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Xét nghiệm dương tính, tính xác suất thực sự mắc bệnh hiếm.</p>\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 3,
      "title": "Ví dụ 1: Truy ngược Hộp 1 khi thấy bi trắng",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 86.66,
      "endTime": 111.14,
      "duration": 24.48,
      "mascotMode": "question",
      "mascotTip": "Tử số là nhánh Hộp 1 (0,30). Mẫu số là P(W) = 0,45. Tính 0,30 / 0,45!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Xác suất bi trắng thuộc Hộp 1</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Hai hộp bi: Hộp 1 có $6$ bi trắng và $4$ bi đen; Hộp 2 có $3$ bi trắng và $7$ bi đen. Chọn ngẫu nhiên một hộp rồi rút một viên bi. Biết rằng viên bi rút ra có <b>màu trắng</b>. Tính xác suất để viên bi đó được lấy từ <b>Hộp 1</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $\\frac{2}{3}$</div>\n                <div><b>B.</b> $\\frac{1}{2}$</div>\n                <div><b>C.</b> $\\frac{3}{5}$</div>\n                <div><b>D.</b> $\\frac{4}{5}$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 4,
      "title": "Ví dụ 1: Truy ngược Hộp 1 khi thấy bi trắng",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 111.14,
      "endTime": 158.37,
      "duration": 47.23,
      "mascotMode": "success",
      "mascotTip": "P(H1|W) = 0,30 / 0,45 = 2/3 ≈ 66,7%! Nhờ thấy bi trắng, xác suất thuộc Hộp 1 tăng từ 50% lên 66,7%!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 1</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Dữ liệu đã có từ Mục 1:</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>Xác suất chọn Hộp 1 và rút được bi trắng: $P(H_1 \\cap W) = P(H_1)P(W \\mid H_1) = 0{,}5 \\cdot 0{,}6 = 0{,}30$.</li>\n                  <li>Tổng xác suất rút được bi trắng: $P(W) = 0{,}45$.</li>\n                </ul>\n                <p><b>Áp dụng công thức Bayes:</b>\n                  $$P(H_1 \\mid W) = \\frac{P(H_1)P(W \\mid H_1)}{P(W)} = \\frac{0{,}30}{0{,}45} = \\frac{30}{45} = \\frac{2}{3} \\approx 0{,}667$$\n                </p>\n                <p style=\"color:#94a3b8; font-size:14px; margin:4px 0 0 0;\">\n                  💡 <i>Nhận xét Bayes:</i> Ban đầu trước khi rút, $P(H_1) = 0{,}5$ (xác suất tiên nghiệm). Khi biết bằng chứng viên bi màu trắng, xác suất viên bi thuộc Hộp 1 cập nhật thành $\\frac{2}{3}$ (xác suất hậu nghiệm)!\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 5,
      "title": "Ví dụ 2: Sản phẩm lỗi từ Tổ 2",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 158.38,
      "endTime": 183.51,
      "duration": 25.13,
      "mascotMode": "question",
      "mascotTip": "Tổ 1 lỗi: 0,6 * 0,02 = 0,012. Tổ 2 lỗi: 0,4 * 0,05 = 0,020. Tính 0,020 / (0,012 + 0,020)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Xác định nguồn gốc sản phẩm bị lỗi</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Một xưởng may có hai tổ: Tổ 1 may $60\\%$ sản lượng với tỷ lệ lỗi $2\\%$, Tổ 2 may $40\\%$ sản lượng với tỷ lệ lỗi $5\\%$. Chọn ngẫu nhiên một sản phẩm thì thấy sản phẩm đó <b>bị lỗi</b>. Tính xác suất để sản phẩm lỗi này <b>do Tổ 2 may</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $\\frac{5}{8}$</div>\n                <div><b>B.</b> $\\frac{3}{8}$</div>\n                <div><b>C.</b> $\\frac{1}{2}$</div>\n                <div><b>D.</b> $\\frac{4}{7}$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 6,
      "title": "Ví dụ 2: Sản phẩm lỗi từ Tổ 2",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 183.5,
      "endTime": 233.07999999999998,
      "duration": 49.58,
      "mascotMode": "success",
      "mascotTip": "0,020 / 0,032 = 20/32 = 5/8 = 62,5%! Dù Tổ 2 may ít hơn nhưng tỷ lệ lỗi cao nên chiếm 62,5% tổng phế phẩm!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 2</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Gọi biến cố:</b> $T_1$: \"Do Tổ 1 may\" ($P=0{,}6$), $T_2$: \"Do Tổ 2 may\" ($P=0{,}4$), $F$: \"Sản phẩm lỗi\".</p>\n                <p><b>Tính xác suất các nhánh lỗi:</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>Nhánh Tổ 1: $P(T_1 \\cap F) = 0{,}6 \\cdot 0{,}02 = 0{,}012$.</li>\n                  <li>Nhánh Tổ 2: $P(T_2 \\cap F) = 0{,}4 \\cdot 0{,}05 = 0{,}020$.</li>\n                  <li>Tổng tỷ lệ lỗi toàn xưởng: $P(F) = 0{,}012 + 0{,}020 = 0{,}032$.</li>\n                </ul>\n                <p><b>Áp dụng công thức Bayes:</b>\n                  $$P(T_2 \\mid F) = \\frac{P(T_2 \\cap F)}{P(F)} = \\frac{0{,}020}{0{,}032} = \\frac{20}{32} = \\frac{5}{8} = 0{,}625\\text{ (tức }62{,}5\\%\\text{)}$$\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 7,
      "title": "Ví dụ 3: Nghịch lý xét nghiệm y khoa",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 233.09,
      "endTime": 259.23,
      "duration": 26.14,
      "mascotMode": "question",
      "mascotTip": "Dương tính thật: 0,01 * 0,99 = 0,0099. Dương tính giả: 0,99 * 0,02 = 0,0198. Tính 0,0099 / (0,0099 + 0,0198)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #f59e0b; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Đánh giá độ tin cậy xét nghiệm dương tính</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#f59e0b;\">30 giây</b> (Vận dụng / Nâng cao)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#f59e0b; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Tỷ lệ dân số mắc một bệnh hiếm là $1\\%$. Một bộ kit xét nghiệm có độ nhạy $99\\%$ đối với người có bệnh, nhưng có tỷ lệ <b>dương tính giả $2\\%$</b> đối với người không mắc bệnh. Một người đi xét nghiệm nhận kết quả <b>dương tính</b>. Tính xác suất để người này <b>thực sự mắc bệnh</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $\\frac{1}{3}$</div>\n                <div><b>B.</b> $\\frac{99}{100}$</div>\n                <div><b>C.</b> $\\frac{1}{2}$</div>\n                <div><b>D.</b> $\\frac{2}{3}$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 8,
      "title": "Ví dụ 3: Nghịch lý xét nghiệm y khoa",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 259.22,
      "endTime": 319.46000000000004,
      "duration": 60.24,
      "mascotMode": "success",
      "mascotTip": "0,0099 / 0,0297 = 1/3 ≈ 33,33%! Mặc dù kit chuẩn 99% nhưng người dương tính chỉ có 33,3% mắc bệnh!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 3 (Nghịch lý Bayes)</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Thiết lập biến cố:</b> $B$: \"Người đó mắc bệnh\", $\\overline{B}$: \"Không mắc bệnh\", $+$: \"Kết quả dương tính\".</p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>Xác suất tiên nghiệm: $P(B) = 0{,}01 \\implies P(\\overline{B}) = 0{,}99$.</li>\n                  <li>Dương tính thật: $P(B \\cap +) = 0{,}01 \\cdot 0{,}99 = 0{,}0099$.</li>\n                  <li>Dương tính giả: $P(\\overline{B} \\cap +) = 0{,}99 \\cdot 0{,}02 = 0{,}0198$.</li>\n                  <li>Tổng xác suất dương tính: $P(+) = 0{,}0099 + 0{,}0198 = 0{,}0297$.</li>\n                </ul>\n                <p><b>Theo công thức Bayes:</b>\n                  $$P(B \\mid +) = \\frac{P(B \\cap +)}{P(+)} = \\frac{0{,}0099}{0{,}0297} = \\frac{99}{297} = \\frac{1}{3} \\approx 33{,}33\\%$$\n                </p>\n                <p style=\"color:#fbbf24; font-size:14px; margin:4px 0 0 0;\">\n                  ⚠️ <i>Bài học y tế:</i> Khi bệnh rất hiếm ($1\\%$), số ca \"dương tính giả\" từ cộng đồng khỏe mạnh ($0{,}0198$) gấp đôi số ca \"dương tính thật\" ($0{,}0099$), dẫn đến việc phải xét nghiệm PCR lần 2 để khẳng định!\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 9,
      "title": "Mục 2: Công thức Bayes & Ý nghĩa",
      "subtitle": "Phần 4: Ứng dụng Bayes trong AI và Khoa học dữ liệu",
      "startTime": 319.46,
      "endTime": 338.72999999999996,
      "duration": 19.27,
      "mascotMode": "explaining",
      "mascotTip": "Thuật toán Naive Bayes phân loại thư rác, xe tự hành phát hiện vật cản... đều áp dụng công thức này!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">4. Ứng dụng cách mạng của định lý Bayes trong AI</h3>\n              <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:16px;\">\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(56,189,248,0.25); border-radius:8px; padding:14px;\">\n                  <b style=\"color:#38bdf8; font-size:16px;\">📧 Lọc thư rác (Spam Filter):</b>\n                  <p style=\"font-size:14px; line-height:1.7; color:#cbd5e1; margin:6px 0 0 0;\">\n                    Khi thấy một email chứa các từ khóa nghi vấn, hệ thống cập nhật $P(\\text{Spam} \\mid \\text{Từ khóa})$ bằng công thức Bayes. Nếu vượt ngưỡng $90\\%$, email tự động bị đưa vào hộp Spam.\n                  </p>\n                </div>\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(16,185,129,0.25); border-radius:8px; padding:14px;\">\n                  <b style=\"color:#10b981; font-size:16px;\">🤖 Xe tự hành & Radar:</b>\n                  <p style=\"font-size:14px; line-height:1.7; color:#cbd5e1; margin:6px 0 0 0;\">\n                    Bộ xử lý liên tục cập nhật xác suất vật cản xuất hiện dựa trên tín hiệu sóng phản xạ, giảm thiểu cảnh báo nhầm và tránh va chạm trong điều kiện thời tiết xấu.\n                  </p>\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 10,
      "title": "Mục 2: Công thức Bayes & Ý nghĩa",
      "subtitle": "Phần 5: Tổng kết Mục 2 & Lời khuyên Cú Thông Thái",
      "startTime": 338.74,
      "endTime": 359.72,
      "duration": 20.98,
      "mascotMode": "summary",
      "mascotTip": "Ghi nhớ công thức Bayes: Lấy tích của nhánh cần tìm chia cho tổng xác suất của tất cả các nhánh!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px; font-weight:700;\">🎯 Tổng kết Mục 2: Công thức Bayes</h3>\n              <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:14px; border-radius:4px; margin-bottom:14px;\">\n                <ul style=\"font-size:16px; line-height:1.8; color:#f8fafc; margin:0 0 0 20px;\">\n                  <li><b>Công thức tổng quát:</b> $P(A_k \\mid B) = \\frac{P(A_k) \\cdot P(B \\mid A_k)}{P(B)}$.</li>\n                  <li><b>Quy tắc hình học sơ đồ cây:</b> $\\frac{\\text{Nhánh muốn tính}}{\\text{Tổng các nhánh dẫn tới }B}$.</li>\n                  <li><b>Ứng dụng:</b> Chẩn đoán y tế, lọc email, nhận diện rủi ro tín dụng.</li>\n                </ul>\n              </div>\n              <div style=\"background:rgba(245,158,11,0.1); border:1px dashed #f59e0b; border-radius:8px; padding:12px; display:flex; align-items:center; gap:12px;\">\n                <span style=\"font-size:28px;\">🦉</span>\n                <span style=\"font-size:15px; color:#fbbf24; line-height:1.5;\">\n                  <b>Cú Thông Thái:</b> \"Hãy chuyển sang Mục 3 để thực chiến với các bài toán xác suất thực tế chuẩn cấu trúc đề thi tốt nghiệp THPT Quốc Gia của Bộ GD&ĐT!\"\n                </span>\n              </div>\n            </div>\n            "
    }
  ]
};

  window.CHAPTER6_DATA.bai19_muc3 = {
  "lessonId": "bai19",
  "lessonTitle": "Bài 19: Công thức xác suất toàn phần và công thức Bayes",
  "sectionId": "bai19_muc3",
  "sectionTitle": "Mục 3: Rèn luyện bài toán xác suất thực tế chuẩn Bộ GD",
  "audio": "/audio/bai19_muc3.mp3",
  "audioSrc": "./audio/bai19_muc3.mp3",
  "audio_src": "./audio/bai19_muc3.mp3",
  "timestamp_src": "timestamps/bai19_muc3.json",
  "totalDuration": 310.58,
  "duration": 310.58,
  "title": "Mục 3: Rèn luyện bài toán xác suất thực tế chuẩn Bộ GD",
  "owl_tip": "4 bước giải bài toán thực tế: Gọi hệ Ai -> Ghi xác suất nhánh -> Tính mẫu P(B) -> Tính Bayes P(Ak|B)!",
  "timeline": [
    {
      "time": 0,
      "id": "part1"
    },
    {
      "time": 16.61,
      "id": "part2"
    },
    {
      "time": 41.9,
      "id": "part3"
    },
    {
      "time": 56.3,
      "id": "vd1_q"
    },
    {
      "time": 77.9,
      "id": "vd1_a"
    },
    {
      "time": 120.36,
      "id": "vd2_q"
    },
    {
      "time": 143.62,
      "id": "vd2_a"
    },
    {
      "time": 188.9,
      "id": "vd3_q"
    },
    {
      "time": 222.65,
      "id": "vd3_a"
    },
    {
      "time": 273.89,
      "id": "part4"
    },
    {
      "time": 293.28,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Giới thiệu định dạng câu hỏi thực tế trong đề thi",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Phương pháp 4 bước giải chuẩn mực",
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
      "partTitle": "Phần 4: Mẹo tính toán siêu tốc trên Casio fx-580VNX",
      "scenes": [
        10
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Tổng kết toàn diện Bài 19 & Sẵn sàng Ôn tập Chương 6",
      "scenes": [
        11
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 0,
      "title": "Mục 3: Rèn luyện bài toán thực tế chuẩn Bộ GD",
      "subtitle": "Phần 1: Giới thiệu định dạng câu hỏi thực tế trong đề thi",
      "startTime": 0,
      "endTime": 16.61,
      "duration": 16.61,
      "mascotMode": "explaining",
      "mascotTip": "Các bài toán thực tế yêu cầu đọc hiểu giả thiết, lập hệ biến cố phân hoạch và áp dụng chuẩn xác Bayes!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">1. Định hướng bài toán thực tế trong đề thi tốt nghiệp THPT</h3>\n              <p style=\"font-size:16px; line-height:1.7; color:#e2e8f0;\">\n                Theo chương trình GDPT 2018, các câu hỏi Vận dụng và Vận dụng cao về Xác suất thường xuất hiện ở <b>Phần II (Trắc nghiệm Đúng/Sai)</b> hoặc <b>Phần III (Trả lời ngắn)</b> với các bối cảnh đời sống phong phú:\n              </p>\n              <div style=\"background:rgba(56,189,248,0.12); border-left:4px solid #38bdf8; padding:14px; margin:14px 0; border-radius:4px;\">\n                <b style=\"color:#38bdf8; font-size:16px;\">3 chủ đề thực tế trọng tâm:</b>\n                <ul style=\"font-size:15px; line-height:1.7; color:#cbd5e1; margin:6px 0 0 20px;\">\n                  <li><b>Tài chính & Ngân hàng:</b> Phân loại rủi ro tín dụng và tỷ lệ phát sinh nợ xấu.</li>\n                  <li><b>Công nghệ thông tin:</b> Tỷ lệ lọc thư rác và phát hiện phần mềm độc hại.</li>\n                  <li><b>Giao thông & Cảm biến thông minh:</b> Tỷ lệ cảnh báo nhầm của xe tự hành theo các điều kiện thời tiết.</li>\n                </ul>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 1,
      "title": "Mục 3: Rèn luyện bài toán thực tế chuẩn Bộ GD",
      "subtitle": "Phần 2: Phương pháp 4 bước giải chuẩn mực",
      "startTime": 16.61,
      "endTime": 41.91,
      "duration": 25.3,
      "mascotMode": "explaining",
      "mascotTip": "4 bước: Gọi hệ Ai -> Ghi xác suất nhánh -> Tính mẫu P(B) -> Tính Bayes P(Ak|B). Không bao giờ nhầm lẫn!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">2. Quy trình 4 bước giải quyết bài toán xác suất thực tế</h3>\n              <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:14px;\">\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:12px;\">\n                  <b style=\"color:#38bdf8;\">Bước 1: Gọi hệ biến cố</b>\n                  <p style=\"font-size:14px; color:#e2e8f0; margin:4px 0 0 0;\">Xác định hệ đầy đủ các nguyên nhân $A_1, A_2, \\dots$ và biến cố kết quả $B$.</p>\n                </div>\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(16,185,129,0.3); border-radius:8px; padding:12px;\">\n                  <b style=\"color:#10b981;\">Bước 2: Liệt kê xác suất</b>\n                  <p style=\"font-size:14px; color:#e2e8f0; margin:4px 0 0 0;\">Viết rõ $P(A_i)$ và các xác suất có điều kiện $P(B \\mid A_i)$ theo đề bài.</p>\n                </div>\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(245,158,11,0.3); border-radius:8px; padding:12px;\">\n                  <b style=\"color:#f59e0b;\">Bước 3: Xác suất toàn phần</b>\n                  <p style=\"font-size:14px; color:#e2e8f0; margin:4px 0 0 0;\">Tính mẫu số $P(B) = \\sum P(A_i)P(B \\mid A_i)$.</p>\n                </div>\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(168,85,247,0.3); border-radius:8px; padding:12px;\">\n                  <b style=\"color:#a855f7;\">Bước 4: Công thức Bayes</b>\n                  <p style=\"font-size:14px; color:#e2e8f0; margin:4px 0 0 0;\">Tính $P(A_k \\mid B) = \\frac{P(A_k \\cap B)}{P(B)}$ và kết luận.</p>\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 2,
      "title": "Mục 3: Rèn luyện bài toán thực tế chuẩn Bộ GD",
      "subtitle": "Phần 3: Luyện tập ví dụ minh họa tương tác",
      "startTime": 41.9,
      "endTime": 56.3,
      "duration": 14.4,
      "mascotMode": "reading",
      "mascotTip": "3 bài toán thực tế phân hóa cao: Rủi ro nợ xấu (15s), Lọc email Spam (15s), và Cảm biến xe tự hành (30s)!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4); text-align:center;\">\n              <h3 style=\"color:#38bdf8; font-size:24px; margin-bottom:16px; font-weight:700;\">🎯 Thực chiến bài toán thực tế phân hóa cao</h3>\n              <p style=\"font-size:17px; line-height:1.7; color:#cbd5e1; max-width:680px; margin:0 auto 20px auto;\">\n                Rèn luyện kỹ năng phân tích và tính toán nhanh chóng dưới áp lực thời gian.\n              </p>\n              <div style=\"display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; text-align:left;\">\n                <div style=\"background:rgba(16,185,129,0.15); border:1px solid #10b981; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#10b981; font-size:16px;\">Ví dụ 1 (15s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Hồ sơ nợ xấu ngân hàng: Xác suất thuộc Nhóm khách hàng rủi ro.</p>\n                </div>\n                <div style=\"background:rgba(56,189,248,0.15); border:1px solid #38bdf8; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#38bdf8; font-size:16px;\">Ví dụ 2 (15s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Email chứa từ 'Trúng thưởng': Xác suất là thư rác Spam.</p>\n                </div>\n                <div style=\"background:rgba(245,158,11,0.15); border:1px solid #f59e0b; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#f59e0b; font-size:16px;\">Ví dụ 3 (30s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Cảm biến xe tự hành cảnh báo nhầm: Xác suất thời tiết sương mù.</p>\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 3,
      "title": "Ví dụ 1: Rủi ro nợ xấu ngân hàng",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 56.3,
      "endTime": 77.9,
      "duration": 21.6,
      "mascotMode": "question",
      "mascotTip": "Nhánh rủi ro: 0,2 * 0,10 = 0,020. Nhánh uy tín: 0,8 * 0,01 = 0,008. Tính 0,020 / (0,020 + 0,008)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Quản lý rủi ro hồ sơ vay ngân hàng</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Một ngân hàng phân loại khách hàng thành hai nhóm: <b>Nhóm uy tín cao</b> chiếm $80\\%$ với tỷ lệ nợ xấu $1\\%$; <b>Nhóm rủi ro</b> chiếm $20\\%$ với tỷ lệ nợ xấu $10\\%$. Chọn ngẫu nhiên một hồ sơ phát sinh <b>nợ xấu</b>. Tính xác suất để hồ sơ đó thuộc <b>Nhóm rủi ro</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $\\frac{5}{7}$</div>\n                <div><b>B.</b> $\\frac{2}{7}$</div>\n                <div><b>C.</b> $\\frac{1}{2}$</div>\n                <div><b>D.</b> $\\frac{3}{4}$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 4,
      "title": "Ví dụ 1: Rủi ro nợ xấu ngân hàng",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 77.9,
      "endTime": 120.36000000000001,
      "duration": 42.46,
      "mascotMode": "success",
      "mascotTip": "0,020 / 0,028 = 20/28 = 5/7 ≈ 71,4%! Khách hàng nợ xấu có 71,4% khả năng đến từ nhóm rủi ro!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 1</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Thiết lập biến cố:</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>$U$: \"Thuộc nhóm uy tín\" ($P=0{,}80$), tỷ lệ nợ xấu: $P(X \\mid U) = 0{,}01$.</li>\n                  <li>$R$: \"Thuộc nhóm rủi ro\" ($P=0{,}20$), tỷ lệ nợ xấu: $P(X \\mid R) = 0{,}10$.</li>\n                  <li>$X$: \"Hồ sơ phát sinh nợ xấu\".</li>\n                </ul>\n                <p><b>Tính xác suất các nhánh:</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>Nhánh nợ xấu từ nhóm uy tín: $P(U \\cap X) = 0{,}80 \\cdot 0{,}01 = 0{,}008$.</li>\n                  <li>Nhánh nợ xấu từ nhóm rủi ro: $P(R \\cap X) = 0{,}20 \\cdot 0{,}10 = 0{,}020$.</li>\n                  <li>Tổng tỷ lệ nợ xấu: $P(X) = 0{,}008 + 0{,}020 = 0{,}028$.</li>\n                </ul>\n                <p><b>Áp dụng công thức Bayes:</b>\n                  $$P(R \\mid X) = \\frac{P(R \\cap X)}{P(X)} = \\frac{0{,}020}{0{,}028} = \\frac{20}{28} = \\frac{5}{7} \\approx 0{,}714\\text{ (tức }71{,}4\\%\\text{)}$$\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 5,
      "title": "Ví dụ 2: Bộ lọc email thư rác Spam",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 120.36,
      "endTime": 143.62,
      "duration": 23.26,
      "mascotMode": "question",
      "mascotTip": "Thư rác có từ khóa: 0,40 * 0,90 = 0,36. Thư thường có từ khóa: 0,60 * 0,05 = 0,03. Tính 0,36 / (0,36 + 0,03)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Bộ lọc email nhận diện thư rác</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Thống kê một hộp thư điện tử cho thấy thư rác (Spam) chiếm $40\\%$ tổng số email đến. Từ khóa <i>\"Trúng thưởng\"</i> xuất hiện trong $90\\%$ thư rác, nhưng chỉ xuất hiện trong $5\\%$ thư thông thường. Một email gửi đến có chứa từ khóa <i>\"Trúng thưởng\"</i>. Tính xác suất để email này <b>thực sự là thư rác</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $\\frac{12}{13}$</div>\n                <div><b>B.</b> $\\frac{9}{10}$</div>\n                <div><b>C.</b> $\\frac{1}{2}$</div>\n                <div><b>D.</b> $\\frac{5}{6}$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 6,
      "title": "Ví dụ 2: Bộ lọc email thư rác Spam",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 143.62,
      "endTime": 188.91,
      "duration": 45.29,
      "mascotMode": "success",
      "mascotTip": "0,36 / 0,39 = 36/39 = 12/13 ≈ 92,3%! Khả năng thư rác là 92,3%, bộ lọc tự động ném vào hòm Spam!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 2</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Gọi biến cố:</b> $S$: \"Thư rác\" ($P=0{,}40$), $\\overline{S}$: \"Thư thường\" ($P=0{,}60$), $K$: \"Chứa từ khóa Trúng thưởng\".</p>\n                <p><b>Tính xác suất các nhánh:</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>Nhánh thư rác có từ khóa: $P(S \\cap K) = 0{,}40 \\cdot 0{,}90 = 0{,}36$.</li>\n                  <li>Nhánh thư thường có từ khóa: $P(\\overline{S} \\cap K) = 0{,}60 \\cdot 0{,}05 = 0{,}03$.</li>\n                  <li>Tổng xác suất xuất hiện từ khóa: $P(K) = 0{,}36 + 0{,}03 = 0{,}39$.</li>\n                </ul>\n                <p><b>Áp dụng công thức Bayes:</b>\n                  $$P(S \\mid K) = \\frac{P(S \\cap K)}{P(K)} = \\frac{0{,}36}{0{,}39} = \\frac{36}{39} = \\frac{12}{13} \\approx 0{,}923\\text{ (tức }92{,}3\\%\\text{)}$$\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 7,
      "title": "Ví dụ 3: Cảm biến xe tự hành 3 thời tiết",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 188.9,
      "endTime": 222.64000000000001,
      "duration": 33.74,
      "mascotMode": "question",
      "mascotTip": "Nắng: 0,7*0,02=0,014. Mưa: 0,2*0,05=0,010. Sương mù: 0,1*0,15=0,015. Tổng = 0,039. Tính 0,015 / 0,039!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #f59e0b; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Cảm biến va chạm xe tự hành trong sương mù</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#f59e0b;\">30 giây</b> (Vận dụng / Nâng cao)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#f59e0b; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Hệ thống cảm biến xe tự hành hoạt động ở $3$ điều kiện thời tiết: <b>Trời nắng</b> chiếm $70\\%$ thời gian (xác suất cảnh báo nhầm $0{,}02$); <b>Trời mưa</b> chiếm $20\\%$ (xác suất cảnh báo nhầm $0{,}05$); <b>Sương mù</b> chiếm $10\\%$ (xác suất cảnh báo nhầm $0{,}15$). Trong một chuyến đi, hệ thống phát tín hiệu cảnh báo nhưng thực tế không có vật cản (cảnh báo nhầm). Tính xác suất lúc đó thời tiết đang là <b>sương mù</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $\\frac{5}{13}$</div>\n                <div><b>B.</b> $\\frac{1}{3}$</div>\n                <div><b>C.</b> $\\frac{2}{7}$</div>\n                <div><b>D.</b> $\\frac{4}{13}$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 8,
      "title": "Ví dụ 3: Cảm biến xe tự hành 3 thời tiết",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 222.65,
      "endTime": 273.89,
      "duration": 51.24,
      "mascotMode": "success",
      "mascotTip": "0,015 / 0,039 = 15/39 = 5/13 ≈ 38,46%! Bài toán vận dụng cao 3 nhánh kịch bản cực chuẩn đề thi!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 3</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Hệ biến cố đầy đủ 3 trạng thái thời tiết:</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>$N$: Trời nắng ($P=0{,}7$), $P(C \\mid N) = 0{,}02 \\implies P(N \\cap C) = 0{,}7 \\cdot 0{,}02 = 0{,}014$.</li>\n                  <li>$M$: Trời mưa ($P=0{,}2$), $P(C \\mid M) = 0{,}05 \\implies P(M \\cap C) = 0{,}2 \\cdot 0{,}05 = 0{,}010$.</li>\n                  <li>$S$: Sương mù ($P=0{,}1$), $P(C \\mid S) = 0{,}15 \\implies P(S \\cap C) = 0{,}1 \\cdot 0{,}15 = 0{,}015$.</li>\n                </ul>\n                <p><b>Tổng xác suất phát cảnh báo nhầm:</b>\n                  $$P(C) = 0{,}014 + 0{,}010 + 0{,}015 = 0{,}039$$\n                </p>\n                <p><b>Xác suất thời tiết sương mù khi bị cảnh báo nhầm (Bayes):</b>\n                  $$P(S \\mid C) = \\frac{P(S \\cap C)}{P(C)} = \\frac{0{,}015}{0{,}039} = \\frac{15}{39} = \\frac{5}{13} \\approx 0{,}3846\\text{ (tức }38{,}46\\%\\text{)}$$\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 9,
      "title": "Mục 3: Rèn luyện bài toán thực tế chuẩn Bộ GD",
      "subtitle": "Phần 4: Mẹo tính toán siêu tốc trên Casio fx-580VNX",
      "startTime": 273.89,
      "endTime": 293.28,
      "duration": 19.39,
      "mascotMode": "explaining",
      "mascotTip": "Gán các tích nhánh vào biến A, B, C bằng phím STO rồi bấm A / (A + B + C). Tránh hoàn toàn lỗi gõ nhầm!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">4. Kỹ thuật bấm máy Casio fx-580VNX cho công thức Bayes</h3>\n              <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:16px;\">\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(56,189,248,0.25); border-radius:8px; padding:14px;\">\n                  <b style=\"color:#38bdf8; font-size:16px;\">💡 Kỹ thuật gán biến nhớ STO:</b>\n                  <p style=\"font-size:14px; line-height:1.7; color:#cbd5e1; margin:6px 0 0 0;\">\n                    Với bài 3 nhánh phức tạp:\n                    <br>• Gán nhánh 1: <code>0.7 * 0.02 [STO] [A]</code>\n                    <br>• Gán nhánh 2: <code>0.2 * 0.05 [STO] [B]</code>\n                    <br>• Gán nhánh 3: <code>0.1 * 0.15 [STO] [C]</code>\n                    <br>• Bấm phân số: <code>[C] / ([A] + [B] + [C]) = 5/13</code>.\n                  </p>\n                </div>\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(16,185,129,0.25); border-radius:8px; padding:14px;\">\n                  <b style=\"color:#10b981; font-size:16px;\">⚡ Đổi phân số sang số thập phân:</b>\n                  <p style=\"font-size:14px; line-height:1.7; color:#cbd5e1; margin:6px 0 0 0;\">\n                    • Nhấn phím <kbd style=\"background:#0f172a; border:1px solid #64748b; padding:1px 6px; border-radius:4px;\">S<=>D</kbd> để chuyển đổi linh hoạt giữa phân số tối giản $\\frac{5}{13}$ và số thập phân $0{,}3846$ (cho câu hỏi Phần III điền đáp số).\n                  </p>\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 10,
      "title": "Mục 3: Rèn luyện bài toán thực tế chuẩn Bộ GD",
      "subtitle": "Phần 5: Tổng kết toàn diện Bài 19 & Sẵn sàng Ôn tập Chương 6",
      "startTime": 293.28,
      "endTime": 310.58,
      "duration": 17.3,
      "mascotMode": "summary",
      "mascotTip": "Chúc mừng bạn đã làm chủ hoàn toàn Bài 19! Hãy chuẩn bị cho bài Ôn tập cuối chương 6 để tổng duyệt toàn bộ chuyên đề xác suất!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px; font-weight:700;\">🎓 Tổng kết toàn diện Bài 19: Xác suất toàn phần & Bayes</h3>\n              <div style=\"display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; margin-bottom:14px;\">\n                <div style=\"background:rgba(56,189,248,0.1); border:1px solid #38bdf8; border-radius:8px; padding:12px;\">\n                  <b style=\"color:#38bdf8; font-size:15px;\">Mục 1: Toàn phần</b>\n                  <p style=\"font-size:13px; line-height:1.6; color:#cbd5e1; margin:4px 0 0 0;\">\n                    $P(B) = \\sum P(A_i)P(B \\mid A_i)$<br>\n                    Cộng tất cả các nhánh kịch bản dẫn đến kết quả $B$.\n                  </p>\n                </div>\n                <div style=\"background:rgba(16,185,129,0.1); border:1px solid #10b981; border-radius:8px; padding:12px;\">\n                  <b style=\"color:#10b981; font-size:15px;\">Mục 2: Công thức Bayes</b>\n                  <p style=\"font-size:13px; line-height:1.6; color:#cbd5e1; margin:4px 0 0 0;\">\n                    $P(A_k \\mid B) = \\frac{P(A_k \\cap B)}{P(B)}$<br>\n                    Truy ngược nguyên nhân sau khi đã biết kết quả.\n                  </p>\n                </div>\n                <div style=\"background:rgba(245,158,11,0.1); border:1px solid #f59e0b; border-radius:8px; padding:12px;\">\n                  <b style=\"color:#f59e0b; font-size:15px;\">Mục 3: Thực tế chuẩn Bộ</b>\n                  <p style=\"font-size:13px; line-height:1.6; color:#cbd5e1; margin:4px 0 0 0;\">\n                    4 bước giải chuẩn mực.<br>\n                    Bấm STO A, B, C trên Casio fx-580VNX.\n                  </p>\n                </div>\n              </div>\n              <div style=\"background:rgba(56,189,248,0.15); border:1.5px dashed #38bdf8; border-radius:8px; padding:12px; display:flex; align-items:center; gap:12px;\">\n                <span style=\"font-size:28px;\">🦉</span>\n                <span style=\"font-size:15px; color:#38bdf8; line-height:1.5;\">\n                  <b>Cú Thông Thái:</b> \"Các em đã xuất sắc chinh phục hai trụ cột toán học tinh hoa nhất của lớp 12. Hãy tiếp tục với <b>Bài tập cuối chương VI</b> để hoàn thiện bộ đề ôn tập xuất sắc!\"\n                </span>\n              </div>\n            </div>\n            "
    }
  ]
};

  window.CHAPTER6_DATA.ontap_c6_muc1 = {
  "lessonId": "ontap_c6",
  "lessonTitle": "Bài tập cuối chương VI: Xác suất có điều kiện",
  "sectionId": "ontap_c6_muc1",
  "sectionTitle": "Mục 1: Hệ thống hoá Xác suất có điều kiện, Toàn phần & Bayes",
  "audio": "/audio/ontap_c6_muc1.mp3",
  "audioSrc": "./audio/ontap_c6_muc1.mp3",
  "audio_src": "./audio/ontap_c6_muc1.mp3",
  "timestamp_src": "timestamps/ontap_c6_muc1.json",
  "totalDuration": 276.96,
  "duration": 276.96,
  "title": "Mục 1: Hệ thống hoá Xác suất có điều kiện, Toàn phần & Bayes",
  "owl_tip": "3 công thức vàng: Nhân xác suất -> Toàn phần -> Bayes!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 24.55,
      "id": "part2"
    },
    {
      "time": 66.5,
      "id": "part3"
    },
    {
      "time": 84.74,
      "id": "vd1_q"
    },
    {
      "time": 100.68,
      "id": "vd1_a"
    },
    {
      "time": 128.83,
      "id": "vd2_q"
    },
    {
      "time": 144.89,
      "id": "vd2_a"
    },
    {
      "time": 178.32,
      "id": "vd3_q"
    },
    {
      "time": 198.14,
      "id": "vd3_a"
    },
    {
      "time": 243.22,
      "id": "part4"
    },
    {
      "time": 261.36,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Giới thiệu 3 trụ cột xác suất lớp 12",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Mối quan hệ tương hỗ giữa các công thức",
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
      "partTitle": "Phần 4: Bảng tổng hợp vai trò 3 công thức",
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
      "title": "Mục 1: Hệ thống hoá công thức xác suất",
      "subtitle": "Phần 1: Giới thiệu 3 trụ cột xác suất lớp 12",
      "startTime": 0.0,
      "endTime": 24.55,
      "duration": 24.55,
      "mascotMode": "explaining",
      "mascotTip": "Chương 6 gồm 3 công thức không thể tách rời: Xác suất có điều kiện, Xác suất toàn phần và Công thức Bayes!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">1. Hệ thống kiến thức trọng tâm Chương VI</h3>\n              <p style=\"font-size:16px; line-height:1.7; color:#e2e8f0;\">\n                Chương VI - Xác suất có điều kiện là nội dung cốt lõi của môn Toán 12, được liên kết chặt chẽ bởi <b>3 công thức trụ cột</b>:\n              </p>\n              <div style=\"display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; margin:14px 0;\">\n                <div style=\"background:rgba(56,189,248,0.12); border:1px solid #38bdf8; border-radius:8px; padding:12px;\">\n                  <b style=\"color:#38bdf8;\">1. Có điều kiện $P(A \\mid B)$</b>\n                  <p style=\"font-size:13px; line-height:1.6; color:#cbd5e1; margin:4px 0 0 0;\">Thu hẹp không gian mẫu vào điều kiện $B$ đã xảy ra.</p>\n                </div>\n                <div style=\"background:rgba(16,185,129,0.12); border:1px solid #10b981; border-radius:8px; padding:12px;\">\n                  <b style=\"color:#10b981;\">2. Toàn phần $P(B)$</b>\n                  <p style=\"font-size:13px; line-height:1.6; color:#cbd5e1; margin:4px 0 0 0;\">Tổng hợp tất cả các kịch bản nguyên nhân dẫn tới kết quả $B$.</p>\n                </div>\n                <div style=\"background:rgba(245,158,11,0.12); border:1px solid #f59e0b; border-radius:8px; padding:12px;\">\n                  <b style=\"color:#f59e0b;\">3. Công thức Bayes</b>\n                  <p style=\"font-size:13px; line-height:1.6; color:#cbd5e1; margin:4px 0 0 0;\">Lật ngược điều kiện: Truy nguyên nhân $A_k$ khi đã thấy kết quả $B$.</p>\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 1,
      "title": "Mục 1: Hệ thống hoá công thức xác suất",
      "subtitle": "Phần 2: Mối quan hệ tương hỗ giữa các công thức",
      "startTime": 24.55,
      "endTime": 66.5,
      "duration": 41.95,
      "mascotMode": "explaining",
      "mascotTip": "Nhớ thứ tự: Định nghĩa -> Nhân chéo P(AB) -> Cộng toàn phần P(B) -> Chia theo tỉ số Bayes P(Ak|B)!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">2. Mối liên kết logic giữa 3 công thức vàng</h3>\n              <div style=\"background:rgba(30,41,59,0.85); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px; font-size:15px; line-height:1.8; color:#f8fafc;\">\n                <div><b>1. Công thức nhân:</b> $P(A \\cap B) = P(B) \\cdot P(A \\mid B) = P(A) \\cdot P(B \\mid A)$</div>\n                <div style=\"margin-top:6px;\"><b>2. Xác suất toàn phần:</b> $P(B) = \\sum_{i=1}^n P(A_i) \\cdot P(B \\mid A_i)$</div>\n                <div style=\"margin-top:6px; color:#38bdf8; font-weight:700;\">\n                  3. Công thức Bayes: $P(A_k \\mid B) = \\frac{P(A_k \\cap B)}{P(B)} = \\frac{P(A_k) \\cdot P(B \\mid A_k)}{\\sum_{i=1}^n P(A_i) \\cdot P(B \\mid A_i)}$\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 2,
      "title": "Mục 1: Hệ thống hoá công thức xác suất",
      "subtitle": "Phần 3: Luyện tập ví dụ minh họa tương tác",
      "startTime": 66.5,
      "endTime": 84.74,
      "duration": 18.24,
      "mascotMode": "reading",
      "mascotTip": "3 bài tập củng cố: Công thức nhân (15s), Đảo điều kiện (15s), và Bayes dạng phân số (30s)!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4); text-align:center;\">\n              <h3 style=\"color:#38bdf8; font-size:24px; margin-bottom:16px; font-weight:700;\">🚀 Luyện tập biến đổi công thức xác suất</h3>\n              <p style=\"font-size:17px; line-height:1.7; color:#cbd5e1; max-width:680px; margin:0 auto 20px auto;\">\n                Kiểm tra khả năng phân biệt và áp dụng chính xác các công thức tính xác suất.\n              </p>\n              <div style=\"display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; text-align:left;\">\n                <div style=\"background:rgba(16,185,129,0.15); border:1px solid #10b981; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#10b981; font-size:16px;\">Ví dụ 1 (15s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Tính xác suất biến cố giao $P(A \\cap B)$ khi biết $P(A)$ và $P(B|A)$.</p>\n                </div>\n                <div style=\"background:rgba(56,189,248,0.15); border:1px solid #38bdf8; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#38bdf8; font-size:16px;\">Ví dụ 2 (15s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Tính xác suất có điều kiện đảo $P(A \\mid B)$.</p>\n                </div>\n                <div style=\"background:rgba(245,158,11,0.15); border:1px solid #f59e0b; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#f59e0b; font-size:16px;\">Ví dụ 3 (30s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Áp dụng công thức Bayes phân số cho hệ hai biến cố đối.</p>\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 3,
      "title": "Ví dụ 1: Tính xác suất biến cố giao",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 84.74,
      "endTime": 100.67999999999999,
      "duration": 15.94,
      "mascotMode": "question",
      "mascotTip": "P(A ∩ B) = P(A) · P(B|A) = 0,6 * 0,4. Nhớ là P(B) = 0,5 là dữ kiện thừa thử thách sự tỉnh táo!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Tính xác suất biến cố giao P(A ∩ B)</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0{,}6$; $P(B) = 0{,}5$ và $P(B \\mid A) = 0{,}4$. Tính xác suất của biến cố giao <b>$P(A \\cap B)$</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $0{,}24$</div>\n                <div><b>B.</b> $0{,}30$</div>\n                <div><b>C.</b> $0{,}20$</div>\n                <div><b>D.</b> $0{,}10$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 4,
      "title": "Ví dụ 1: Tính xác suất biến cố giao",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 100.68,
      "endTime": 128.83,
      "duration": 28.15,
      "mascotMode": "success",
      "mascotTip": "Chính xác! P(A ∩ B) = P(A) · P(B|A) = 0,6 * 0,4 = 0,24. Đáp án A!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 1</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Áp dụng trực tiếp công thức nhân xác suất:</b></p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:10px 14px; margin:10px 0; border-radius:4px;\">\n                  $$P(A \\cap B) = P(A) \\cdot P(B \\mid A) = 0{,}6 \\cdot 0{,}4 = 0{,}24$$\n                </div>\n                <p style=\"color:#94a3b8; font-size:14px; margin:4px 0 0 0;\">\n                  ⚠️ <i>Lưu ý:</i> Dữ kiện $P(B) = 0{,}5$ là thông tin phụ của đề bài để kiểm tra tính độc lập (ở đây $P(A) \\cdot P(B) = 0{,}30 \\ne 0{,}24$ nên $A$ và $B$ không độc lập).\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 5,
      "title": "Ví dụ 2: Tính xác suất có điều kiện đảo",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 128.83,
      "endTime": 144.89000000000001,
      "duration": 16.06,
      "mascotMode": "question",
      "mascotTip": "P(A|B) = P(A ∩ B) / P(B) = 0,24 / 0,5. Tính nhanh nào!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Tính xác suất có điều kiện đảo P(A | B)</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Tiếp tục từ dữ liệu Ví dụ 1, với $P(A) = 0{,}6$; $P(B) = 0{,}5$ và $P(A \\cap B) = 0{,}24$. Hãy tính xác suất có điều kiện đảo <b>$P(A \\mid B)$</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $0{,}48$</div>\n                <div><b>B.</b> $0{,}40$</div>\n                <div><b>C.</b> $0{,}50$</div>\n                <div><b>D.</b> $0{,}36$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 6,
      "title": "Ví dụ 2: Tính xác suất có điều kiện đảo",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 144.89,
      "endTime": 178.32,
      "duration": 33.43,
      "mascotMode": "success",
      "mascotTip": "0,24 / 0,5 = 0,48! Rất chuẩn! Thấy rõ P(A|B) = 0,48 khác hẳn P(B|A) = 0,40!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 2</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Theo định nghĩa xác suất có điều kiện:</b></p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:10px 14px; margin:10px 0; border-radius:4px;\">\n                  $$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}24}{0{,}5} = 0{,}48$$\n                </div>\n                <p style=\"color:#fbbf24; font-size:14px; margin:4px 0 0 0;\">\n                  💡 <i>Cú nhắc nhở:</i> $P(A \\mid B) = 0{,}48 \\ne P(B \\mid A) = 0{,}40$. Thứ tự đứng trước hay sau dấu gạch $|$ làm thay đổi hoàn toàn giá trị xác suất!\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 7,
      "title": "Ví dụ 3: Công thức Bayes cho 2 biến cố đối",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 178.32,
      "endTime": 198.14,
      "duration": 19.82,
      "mascotMode": "question",
      "mascotTip": "Mẫu số P(B) = 0,7*0,8 + 0,3*0,3 = 0,56 + 0,09 = 0,65. Tử số là 0,56. Tính 0,56 / 0,65!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #f59e0b; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Tính xác suất hậu nghiệm P(A | B)</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#f59e0b;\">30 giây</b> (Vận dụng / Nâng cao)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#f59e0b; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0{,}7$; $P(B \\mid A) = 0{,}8$ và $P(B \\mid \\overline{A}) = 0{,}3$. Tính xác suất <b>$P(A \\mid B)$</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $\\frac{56}{65}$</div>\n                <div><b>B.</b> $\\frac{9}{65}$</div>\n                <div><b>C.</b> $\\frac{4}{5}$</div>\n                <div><b>D.</b> $\\frac{7}{10}$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 8,
      "title": "Ví dụ 3: Công thức Bayes cho 2 biến cố đối",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 198.14,
      "endTime": 243.20999999999998,
      "duration": 45.07,
      "mascotMode": "success",
      "mascotTip": "P(B) = 0,65. Tử số = 0,56. Tỉ số = 56/65 ≈ 0,8615. Tuyệt vời!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 3</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Bước 1:</b> Tìm xác suất biến cố đối: $P(\\overline{A}) = 1 - P(A) = 1 - 0{,}7 = 0{,}3$.</p>\n                <p><b>Bước 2:</b> Tính mẫu số bằng công thức xác suất toàn phần:\n                  $$P(B) = P(A)P(B \\mid A) + P(\\overline{A})P(B \\mid \\overline{A}) = 0{,}7 \\cdot 0{,}8 + 0{,}3 \\cdot 0{,}3 = 0{,}56 + 0{,}09 = 0{,}65$$\n                </p>\n                <p><b>Bước 3:</b> Áp dụng công thức Bayes:\n                  $$P(A \\mid B) = \\frac{P(A)P(B \\mid A)}{P(B)} = \\frac{0{,}56}{0{,}65} = \\frac{56}{65} \\approx 0{,}8615$$\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 9,
      "title": "Mục 1: Hệ thống hoá công thức xác suất",
      "subtitle": "Phần 4: Bảng tổng hợp vai trò 3 công thức",
      "startTime": 243.22,
      "endTime": 261.36,
      "duration": 18.14,
      "mascotMode": "explaining",
      "mascotTip": "Nhân xác suất: Tính từng nhánh. Toàn phần: Gom các nhánh. Bayes: Tỉ lệ 1 nhánh trên tổng số!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">4. Bảng tổng hợp vai trò 3 công thức vàng</h3>\n              <div style=\"background:rgba(15,23,42,0.9); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px; font-family:monospace; font-size:14px; line-height:1.7;\">\n                <div>• <b>CÔNG THỨC NHÂN:</b> $P(A \\cap B) = P(A) \\cdot P(B|A)$ ───► Tính xác suất TỪNG NHÁNH</div>\n                <div style=\"margin-top:6px;\">• <b>XÁC SUẤT TOÀN PHẦN:</b> $P(B) = \\sum P(A_i)P(B|A_i)$ ───► GOM TẤT CẢ CÁC NHÁNH</div>\n                <div style=\"margin-top:6px; color:#38bdf8;\">• <b>CÔNG THỨC BAYES:</b> $P(A_k|B) = \\frac{\\text{Nhánh } k}{\\text{Tổng các nhánh}}$ ───► TỈ LỆ 1 NHÁNH TRÊN TỔNG</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 10,
      "title": "Mục 1: Hệ thống hoá công thức xác suất",
      "subtitle": "Phần 5: Tổng kết Mục 1 & Lời khuyên Cú Thông Thái",
      "startTime": 261.36,
      "endTime": 276.96000000000004,
      "duration": 15.6,
      "mascotMode": "summary",
      "mascotTip": "Làm chủ 3 công thức này sẽ giúp các em tự tin giải quyết 100% câu hỏi xác suất trong mọi đề thi!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px; font-weight:700;\">🎯 Tổng kết Mục 1: Hệ thống hóa công thức</h3>\n              <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:14px; border-radius:4px; margin-bottom:14px;\">\n                <ul style=\"font-size:16px; line-height:1.8; color:#f8fafc; margin:0 0 0 20px;\">\n                  <li><b>Công thức nhân:</b> $P(A \\cap B) = P(A) \\cdot P(B \\mid A)$.</li>\n                  <li><b>Xác suất toàn phần:</b> $P(B) = P(A)P(B \\mid A) + P(\\overline{A})P(B \\mid \\overline{A})$.</li>\n                  <li><b>Công thức Bayes:</b> $P(A \\mid B) = \\frac{P(A)P(B \\mid A)}{P(B)}$.</li>\n                </ul>\n              </div>\n              <div style=\"background:rgba(245,158,11,0.1); border:1px dashed #f59e0b; border-radius:8px; padding:12px; display:flex; align-items:center; gap:12px;\">\n                <span style=\"font-size:28px;\">🦉</span>\n                <span style=\"font-size:15px; color:#fbbf24; line-height:1.5;\">\n                  <b>Cú Thông Thái:</b> \"Hãy chuyển sang Mục 2 để ứng dụng <b>Sơ đồ hình cây</b> vào các bài toán thực tế nông nghiệp và truyền tin kỹ thuật số!\"\n                </span>\n              </div>\n            </div>\n            "
    }
  ]
};

  window.CHAPTER6_DATA.ontap_c6_muc2 = {
  "lessonId": "ontap_c6",
  "lessonTitle": "Bài tập cuối chương VI: Xác suất có điều kiện",
  "sectionId": "ontap_c6_muc2",
  "sectionTitle": "Mục 2: Rèn luyện các dạng bài thực tế then chốt & Sơ đồ cây",
  "audio": "/audio/ontap_c6_muc2.mp3",
  "audioSrc": "./audio/ontap_c6_muc2.mp3",
  "audio_src": "./audio/ontap_c6_muc2.mp3",
  "timestamp_src": "timestamps/ontap_c6_muc2.json",
  "totalDuration": 308.66,
  "duration": 308.66,
  "title": "Mục 2: Rèn luyện các dạng bài thực tế then chốt & Sơ đồ cây",
  "owl_tip": "Sơ đồ cây 2 tầng: Tầng 1 kịch bản nguyên nhân, tầng 2 kết quả kiểm tra!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 19.92,
      "id": "part2"
    },
    {
      "time": 45.26,
      "id": "part3"
    },
    {
      "time": 64.39,
      "id": "vd1_q"
    },
    {
      "time": 89.52,
      "id": "vd1_a"
    },
    {
      "time": 142.87,
      "id": "vd2_q"
    },
    {
      "time": 157.44,
      "id": "vd2_a"
    },
    {
      "time": 201.19,
      "id": "vd3_q"
    },
    {
      "time": 231.67,
      "id": "vd3_a"
    },
    {
      "time": 277.85,
      "id": "part4"
    },
    {
      "time": 290.26,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Sức mạnh trực quan của sơ đồ cây",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Quy tắc tính toán trên các nhánh cây",
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
      "partTitle": "Phần 4: Sức mạnh đồng dạng của mô hình sơ đồ cây",
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
      "title": "Mục 2: Bài toán thực tế & Sơ đồ cây",
      "subtitle": "Phần 1: Sức mạnh trực quan của sơ đồ cây",
      "startTime": 0.0,
      "endTime": 19.92,
      "duration": 19.92,
      "mascotMode": "explaining",
      "mascotTip": "Khi gặp bài toán xác suất thực tế nhiều giai đoạn, sơ đồ hình cây giúp các em không bao giờ bị nhầm lẫn!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">1. Mô hình hóa bài toán thực tế bằng sơ đồ cây</h3>\n              <p style=\"font-size:16px; line-height:1.7; color:#e2e8f0;\">\n                Trong các đề thi chính thức, bài toán xác suất thường được đặt trong các bối cảnh đời sống cụ thể (chọn hạt giống nảy mầm, kiểm tra dây chuyền sản xuất hay truyền tín hiệu số).\n              </p>\n              <div style=\"background:rgba(56,189,248,0.12); border-left:4px solid #38bdf8; padding:14px; margin:14px 0; border-radius:4px;\">\n                <b style=\"color:#38bdf8; font-size:16px;\">3 tầng cấu trúc sơ đồ cây:</b>\n                <ul style=\"font-size:15px; line-height:1.7; color:#cbd5e1; margin:6px 0 0 20px;\">\n                  <li><b>Tầng 1 (Nút gốc):</b> Điểm bắt đầu của thí nghiệm.</li>\n                  <li><b>Tầng 2 (Kịch bản nguyên nhân):</b> Phân chia thành các nhánh với xác suất tiên nghiệm $P(A_1), P(A_2)$.</li>\n                  <li><b>Tầng 3 (Kết quả kiểm tra):</b> Nhánh con gắn xác suất có điều kiện $P(B \\mid A_1), P(B \\mid A_2)$.</li>\n                </ul>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 1,
      "title": "Mục 2: Bài toán thực tế & Sơ đồ cây",
      "subtitle": "Phần 2: Quy tắc tính toán trên các nhánh cây",
      "startTime": 19.92,
      "endTime": 45.260000000000005,
      "duration": 25.34,
      "mascotMode": "explaining",
      "mascotTip": "Nhân dọc theo nhánh để tính P(Ai ∩ B), cộng các nhánh để tính P(B), và chia nhánh trên tổng để tính Bayes!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">2. Quy tắc tính toán trên sơ đồ cây</h3>\n              <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:14px;\">\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px;\">\n                  <b style=\"color:#38bdf8; font-size:16px;\">🌿 Nhân dọc theo nhánh:</b>\n                  <p style=\"font-size:14px; line-height:1.6; color:#e2e8f0; margin:6px 0 0 0;\">\n                    $$P(A_i \\cap B) = P(A_i) \\cdot P(B \\mid A_i)$$\n                  </p>\n                </div>\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(16,185,129,0.3); border-radius:8px; padding:14px;\">\n                  <b style=\"color:#10b981; font-size:16px;\">🌱 Tỉ số Bayes:</b>\n                  <p style=\"font-size:14px; line-height:1.6; color:#e2e8f0; margin:6px 0 0 0;\">\n                    $$P(A_k \\mid B) = \\frac{\\text{Nhánh } k}{\\sum \\text{các nhánh}}$$\n                  </p>\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 2,
      "title": "Mục 2: Bài toán thực tế & Sơ đồ cây",
      "subtitle": "Phần 3: Luyện tập ví dụ minh họa tương tác",
      "startTime": 45.26,
      "endTime": 64.39,
      "duration": 19.13,
      "mascotMode": "reading",
      "mascotTip": "3 bài toán thực tế: Trộn bao hạt giống (15s), Truy ngược nguồn gốc bao giống (15s), và Kênh truyền tin nhị phân (30s)!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4); text-align:center;\">\n              <h3 style=\"color:#38bdf8; font-size:24px; margin-bottom:16px; font-weight:700;\">⚡ Luyện tập Sơ đồ hình cây & Thực tế</h3>\n              <p style=\"font-size:17px; line-height:1.7; color:#cbd5e1; max-width:680px; margin:0 auto 20px auto;\">\n                Áp dụng sơ đồ hình cây để giải nhanh các bài toán xác suất thực tế nhiều giai đoạn.\n              </p>\n              <div style=\"display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; text-align:left;\">\n                <div style=\"background:rgba(16,185,129,0.15); border:1px solid #10b981; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#10b981; font-size:16px;\">Ví dụ 1 (15s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Hai bao hạt giống: 80 hạt (80%) và 120 hạt (90%). Tính tỷ lệ nảy mầm chung.</p>\n                </div>\n                <div style=\"background:rgba(56,189,248,0.15); border:1px solid #38bdf8; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#38bdf8; font-size:16px;\">Ví dụ 2 (15s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Hạt nảy mầm: Tính xác suất hạt giống có nguồn gốc từ Bao 1.</p>\n                </div>\n                <div style=\"background:rgba(245,158,11,0.15); border:1px solid #f59e0b; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#f59e0b; font-size:16px;\">Ví dụ 3 (30s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Kênh truyền tin nhị phân phát 0 (60%) và phát 1 (40%).</p>\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 3,
      "title": "Ví dụ 1: Tỷ lệ nảy mầm hai bao hạt giống",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 64.39,
      "endTime": 89.52,
      "duration": 25.13,
      "mascotMode": "question",
      "mascotTip": "Bao 1 có 80/200 = 0,40. Bao 2 có 120/200 = 0,60. Tính 0,40*0,80 + 0,60*0,90!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Xác suất nảy mầm khi trộn 2 bao hạt giống</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Một cơ sở nông nghiệp có hai bao hạt giống: <b>Bao 1</b> có $80$ hạt với tỷ lệ nảy mầm $80\\%$; <b>Bao 2</b> có $120$ hạt với tỷ lệ nảy mầm $90\\%$. Trộn đều hai bao vào một thùng rồi gieo ngẫu nhiên một hạt. Tính xác suất để <b>hạt đó nảy mầm</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $0{,}86$</div>\n                <div><b>B.</b> $0{,}85$</div>\n                <div><b>C.</b> $0{,}88$</div>\n                <div><b>D.</b> $0{,}82$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 4,
      "title": "Ví dụ 1: Tỷ lệ nảy mầm hai bao hạt giống",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 89.52,
      "endTime": 142.87,
      "duration": 53.35,
      "mascotMode": "success",
      "mascotTip": "0,32 + 0,54 = 0,86 (86%)! Kiểm tra trực tiếp: (64 + 108)/200 = 172/200 = 0,86. Tuyệt đối chính xác!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 1</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Phân tích tỷ lệ nguồn hạt giống:</b> Tổng số hạt là $80 + 120 = 200$ hạt.</p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>Tỷ lệ hạt từ Bao 1: $P(B_1) = \\frac{80}{200} = 0{,}40$; tỷ lệ nảy mầm: $P(N \\mid B_1) = 0{,}80$.</li>\n                  <li>Tỷ lệ hạt từ Bao 2: $P(B_2) = \\frac{120}{200} = 0{,}60$; tỷ lệ nảy mầm: $P(N \\mid B_2) = 0{,}90$.</li>\n                </ul>\n                <p><b>Theo công thức xác suất toàn phần:</b>\n                  $$P(N) = P(B_1)P(N \\mid B_1) + P(B_2)P(N \\mid B_2) = 0{,}40 \\cdot 0{,}80 + 0{,}60 \\cdot 0{,}90 = 0{,}32 + 0{,}54 = 0{,}86$$\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 5,
      "title": "Ví dụ 2: Truy ngược nguồn gốc bao giống",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 142.87,
      "endTime": 157.44,
      "duration": 14.57,
      "mascotMode": "question",
      "mascotTip": "Tử số là nhánh Bao 1 nảy mầm: 0,32. Mẫu số là P(N) = 0,86. Tính 0,32 / 0,86!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Xác suất hạt nảy mầm thuộc Bao 1</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Tiếp tục từ dữ liệu Ví dụ 1: Một hạt được lấy ngẫu nhiên đem gieo thấy <b>nảy mầm</b>. Tính xác suất để hạt giống đó có <b>nguồn gốc từ Bao 1</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $\\frac{16}{43}$</div>\n                <div><b>B.</b> $\\frac{27}{43}$</div>\n                <div><b>C.</b> $\\frac{2}{5}$</div>\n                <div><b>D.</b> $\\frac{1}{3}$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 6,
      "title": "Ví dụ 2: Truy ngược nguồn gốc bao giống",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 157.44,
      "endTime": 201.19,
      "duration": 43.75,
      "mascotMode": "success",
      "mascotTip": "0,32 / 0,86 = 32/86 = 16/43 ≈ 37,21%! Kiểm tra: 64 hạt Bao 1 / 172 tổng hạt nảy mầm = 16/43!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 2</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Áp dụng công thức Bayes:</b></p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:10px 14px; margin:10px 0; border-radius:4px;\">\n                  $$P(B_1 \\mid N) = \\frac{P(B_1 \\cap N)}{P(N)} = \\frac{0{,}32}{0{,}86} = \\frac{32}{86} = \\frac{16}{43} \\approx 0{,}3721$$\n                </div>\n                <p style=\"color:#94a3b8; font-size:14px; margin:4px 0 0 0;\">\n                  💡 <i>Kiểm tra bằng số lượng phần tử:</i> Bao 1 có $80 \\cdot 0{,}8 = 64$ hạt nảy mầm. Toàn bộ thùng có $64 + 108 = 172$ hạt nảy mầm. Xác suất: $\\frac{64}{172} = \\frac{16}{43}$. Hai cách giải hoàn toàn khớp nhau!\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 7,
      "title": "Ví dụ 3: Kênh truyền tin nhị phân",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 201.19,
      "endTime": 231.67,
      "duration": 30.48,
      "mascotMode": "question",
      "mascotTip": "Phát 0 nhận 1: 0,60*0,05 = 0,030. Phát 1 nhận 1: 0,40*0,90 = 0,360. Tổng nhận 1 là 0,390. Tính 0,360 / 0,390!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #f59e0b; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Giải mã tín hiệu kênh truyền số nhị phân</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#f59e0b;\">30 giây</b> (Vận dụng / Nâng cao)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#f59e0b; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Một kênh truyền tin nhị phân phát ký hiệu 0 với xác suất $60\\%$, ký hiệu 1 với xác suất $40\\%$. Do nhiễu, khi phát 0 thì xác suất <b>nhận nhầm thành 1 là $0{,}05$</b>; khi phát 1 thì xác suất <b>nhận đúng 1 là $0{,}90$</b>. Bên nhận nhận được ký hiệu <b>1</b>. Tính xác suất để bên phát <b>thực sự đã phát ký hiệu 1</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $\\frac{12}{13}$</div>\n                <div><b>B.</b> $\\frac{9}{10}$</div>\n                <div><b>C.</b> $\\frac{1}{13}$</div>\n                <div><b>D.</b> $\\frac{4}{5}$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 8,
      "title": "Ví dụ 3: Kênh truyền tin nhị phân",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 231.67,
      "endTime": 277.84999999999997,
      "duration": 46.18,
      "mascotMode": "success",
      "mascotTip": "0,360 / 0,390 = 36/39 = 12/13 ≈ 92,31%! Dù có nhiễu đường truyền nhưng bên nhận có tới 92,3% độ tin cậy!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 3</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Thiết lập biến cố:</b> $X_0$: \"Phát 0\" ($P=0{,}60$), $X_1$: \"Phát 1\" ($P=0{,}40$), $Y_1$: \"Bên nhận nhận được 1\".</p>\n                <p><b>Tính xác suất các nhánh:</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>Phát 0 nhưng nhận nhầm thành 1: $P(X_0 \\cap Y_1) = 0{,}60 \\cdot 0{,}05 = 0{,}030$.</li>\n                  <li>Phát 1 và nhận đúng 1: $P(X_1 \\cap Y_1) = 0{,}40 \\cdot 0{,}90 = 0{,}360$.</li>\n                  <li>Tổng xác suất nhận được ký hiệu 1: $P(Y_1) = 0{,}030 + 0{,}360 = 0{,}390$.</li>\n                </ul>\n                <p><b>Áp dụng công thức Bayes:</b>\n                  $$P(X_1 \\mid Y_1) = \\frac{P(X_1 \\cap Y_1)}{P(Y_1)} = \\frac{0{,}360}{0{,}390} = \\frac{36}{39} = \\frac{12}{13} \\approx 0{,}9231$$\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 9,
      "title": "Mục 2: Bài toán thực tế & Sơ đồ cây",
      "subtitle": "Phần 4: Sức mạnh đồng dạng của mô hình sơ đồ cây",
      "startTime": 277.85,
      "endTime": 290.26000000000005,
      "duration": 12.41,
      "mascotMode": "explaining",
      "mascotTip": "Tất cả bài toán xác suất thực tế đều quy về sơ đồ cây 2 tầng: Nhân dọc rồi cộng ngang!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">4. Sức mạnh đồng dạng của mô hình sơ đồ cây</h3>\n              <p style=\"font-size:15px; color:#cbd5e1;\">Dù là nông nghiệp hay viễn thông, mọi bài toán đều tuân theo mô hình chuẩn:</p>\n              <div style=\"background:rgba(15,23,42,0.9); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px; font-family:monospace; font-size:14px; line-height:1.7;\">\n                <div>GỐC ───[Tầng 1: Kịch bản A_i]───► [Tầng 2: Kết quả B] ───► Tích nhánh = P(A_i) · P(B|A_i)</div>\n                <div style=\"color:#10b981; margin-top:4px;\">• Toàn phần: Cộng tất cả các tích nhánh cùng dẫn tới B.</div>\n                <div style=\"color:#f59e0b; margin-top:4px;\">• Bayes: Lấy tích nhánh mong muốn chia cho tổng vừa cộng.</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 10,
      "title": "Mục 2: Bài toán thực tế & Sơ đồ cây",
      "subtitle": "Phần 5: Tổng kết Mục 2 & Lời khuyên Cú Thông Thái",
      "startTime": 290.26,
      "endTime": 308.67,
      "duration": 18.41,
      "mascotMode": "summary",
      "mascotTip": "Phác thảo sơ đồ cây ra nháp giúp tiết kiệm 50% thời gian làm bài thi và triệt tiêu mọi sai sót!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px; font-weight:700;\">🎯 Tổng kết Mục 2: Sơ đồ hình cây thực tế</h3>\n              <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:14px; border-radius:4px; margin-bottom:14px;\">\n                <ul style=\"font-size:16px; line-height:1.8; color:#f8fafc; margin:0 0 0 20px;\">\n                  <li><b>Vũ khí đắc lực:</b> Vẽ sơ đồ cây 2 tầng với đầy đủ xác suất trên mỗi nhánh.</li>\n                  <li><b>Quy tắc 2 bước:</b> Tính mẫu số bằng tổng các nhánh; tính xác suất Bayes bằng tỉ số nhánh tương ứng.</li>\n                </ul>\n              </div>\n              <div style=\"background:rgba(245,158,11,0.1); border:1px dashed #f59e0b; border-radius:8px; padding:12px; display:flex; align-items:center; gap:12px;\">\n                <span style=\"font-size:28px;\">🦉</span>\n                <span style=\"font-size:15px; color:#fbbf24; line-height:1.5;\">\n                  <b>Cú Thông Thái:</b> \"Hãy chuyển sang Mục 3 để giải mã <b>3 cái bẫy đề thi kinh điển</b> và học kỹ thuật bấm máy Casio fx-580VNX đỉnh cao!\"\n                </span>\n              </div>\n            </div>\n            "
    }
  ]
};

  window.CHAPTER6_DATA.ontap_c6_muc3 = {
  "lessonId": "ontap_c6",
  "lessonTitle": "Bài tập cuối chương VI: Xác suất có điều kiện",
  "sectionId": "ontap_c6_muc3",
  "sectionTitle": "Mục 3: Bẫy đề thi xác suất, Nhận diện công thức & Kỹ thuật Casio",
  "audio": "/audio/ontap_c6_muc3.mp3",
  "audioSrc": "./audio/ontap_c6_muc3.mp3",
  "audio_src": "./audio/ontap_c6_muc3.mp3",
  "timestamp_src": "timestamps/ontap_c6_muc3.json",
  "totalDuration": 266.93,
  "duration": 266.93,
  "title": "Mục 3: Bẫy đề thi xác suất, Nhận diện công thức & Kỹ thuật Casio",
  "owl_tip": "Bẫy điều kiện: Nhận diện 'Biết rằng...' -> điều kiện nằm ở mẫu số! Bấm STO trên fx-580VNX!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 17.83,
      "id": "part2"
    },
    {
      "time": 38.28,
      "id": "part3"
    },
    {
      "time": 55.99,
      "id": "vd1_q"
    },
    {
      "time": 75.34,
      "id": "vd1_a"
    },
    {
      "time": 108.65,
      "id": "vd2_q"
    },
    {
      "time": 121.9,
      "id": "vd2_a"
    },
    {
      "time": 151.49,
      "id": "vd3_q"
    },
    {
      "time": 174.98,
      "id": "vd3_a"
    },
    {
      "time": 221.66,
      "id": "part4"
    },
    {
      "time": 247.66,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Cảnh giác trước các phương án nhiễu tinh vi",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Phương pháp hóa giải mọi bẫy đề thi",
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
      "partTitle": "Phần 4: Kỹ thuật Casio fx-580VNX tối ưu",
      "scenes": [
        10
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Chúc mừng hoàn thành toàn bộ Chương VI",
      "scenes": [
        11
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 0,
      "title": "Mục 3: Bẫy đề thi & Kỹ thuật Casio",
      "subtitle": "Phần 1: Cảnh giác trước các phương án nhiễu tinh vi",
      "startTime": 0.0,
      "endTime": 17.83,
      "duration": 17.83,
      "mascotMode": "explaining",
      "mascotTip": "Đề thi hay bẫy ở chỗ: Cho xác suất giao nhưng hỏi có điều kiện, hoặc lật ngược điều kiện P(A|B) vs P(B|A)!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">1. Các bẫy đề thi trắc nghiệm xác suất phổ biến</h3>\n              <p style=\"font-size:16px; line-height:1.7; color:#e2e8f0;\">\n                Trong các kỳ thi trắc nghiệm THPT, người ra đề thường cài cắm các phương án nhiễu bẫy học sinh không nắm vững bản chất toán học:\n              </p>\n              <div style=\"background:rgba(239,68,68,0.1); border-left:4px solid #ef4444; padding:14px; margin:14px 0; border-radius:4px;\">\n                <b style=\"color:#f87171; font-size:16px;\">3 cạm bẫy dễ mất điểm nhất:</b>\n                <ul style=\"font-size:15px; line-height:1.7; color:#cbd5e1; margin:6px 0 0 20px;\">\n                  <li><b>Bẫy 1:</b> Nhầm giữa xác suất đồng thời $P(A \\cap B)$ và xác suất có điều kiện $P(A \\mid B)$.</li>\n                  <li><b>Bẫy 2:</b> Nhầm giữa $P(A \\mid B)$ và $P(B \\mid A)$. Biến cố sau dấu gạch $|$ mới là điều kiện!</li>\n                  <li><b>Bẫy 3:</b> Nhầm tính chất biến cố đối có điều kiện: $P(\\overline{A} \\mid B) = 1 - P(A \\mid B)$, điều kiện $B$ phải giữ nguyên!</li>\n                </ul>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 1,
      "title": "Mục 3: Bẫy đề thi & Kỹ thuật Casio",
      "subtitle": "Phần 2: Phương pháp hóa giải mọi bẫy đề thi",
      "startTime": 17.83,
      "endTime": 38.28,
      "duration": 20.45,
      "mascotMode": "explaining",
      "mascotTip": "Quy tắc vàng: Đọc kỹ từ 'Biết rằng...' -> đó là biến cố điều kiện nằm ở mẫu số!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">2. Nguyên tắc vàng hóa giải cạm bẫy</h3>\n              <div style=\"background:rgba(30,41,59,0.85); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:14px; font-size:15px; line-height:1.8; color:#f8fafc;\">\n                <div>🔍 <b>Từ khóa nhận diện điều kiện:</b> Cụm từ <i>\"Biết rằng...\"</i>, <i>\"Với điều kiện...\"</i>, <i>\"Trong số những người...\"</i> chỉ ra biến cố điều kiện phải đặt sau dấu $|$ và nằm ở mẫu số!</div>\n                <div style=\"margin-top:8px;\">⚖️ <b>Kiểm tra tính logic:</b> $0 \\le P(A \\mid B) \\le 1$. Nếu kết quả tính ra lớn hơn 1 hoặc âm thì chắc chắn đã nhầm tử mẫu!</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 2,
      "title": "Mục 3: Bẫy đề thi & Kỹ thuật Casio",
      "subtitle": "Phần 3: Luyện tập ví dụ minh họa tương tác",
      "startTime": 38.28,
      "endTime": 55.99,
      "duration": 17.71,
      "mascotMode": "reading",
      "mascotTip": "3 thử thách phản xạ: Bẫy Giao vs Có điều kiện (15s), Bẫy Biến cố đối (15s), và Chuyển bóng giữa hai hộp bi (30s)!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4); text-align:center;\">\n              <h3 style=\"color:#38bdf8; font-size:24px; margin-bottom:16px; font-weight:700;\">🎯 Thực chiến giải mã bẫy đề thi</h3>\n              <p style=\"font-size:17px; line-height:1.7; color:#cbd5e1; max-width:680px; margin:0 auto 20px auto;\">\n                Luyện phản xạ nhanh trước các phương án nhiễu tinh vi thường gặp trong kỳ thi THPT.\n              </p>\n              <div style=\"display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; text-align:left;\">\n                <div style=\"background:rgba(16,185,129,0.15); border:1px solid #10b981; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#10b981; font-size:16px;\">Ví dụ 1 (15s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">100 học sinh: 70 Anh, 40 Pháp, 25 cả hai. Tính P(Pháp | Anh).</p>\n                </div>\n                <div style=\"background:rgba(56,189,248,0.15); border:1px solid #38bdf8; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#38bdf8; font-size:16px;\">Ví dụ 2 (15s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Khẳng định đúng về biến cố đối có điều kiện P(A ngang | B).</p>\n                </div>\n                <div style=\"background:rgba(245,158,11,0.15); border:1px solid #f59e0b; border-radius:8px; padding:14px;\">\n                  <b style=\"color:#f59e0b; font-size:16px;\">Ví dụ 3 (30s)</b>\n                  <p style=\"font-size:14px; color:#94a3b8; margin:6px 0 0 0;\">Chuyển 1 viên bi từ Hộp 1 sang Hộp 2 rồi rút 1 bi đỏ.</p>\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 3,
      "title": "Ví dụ 1: Phân biệt Giao và Có điều kiện",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 55.99,
      "endTime": 75.33,
      "duration": 19.34,
      "mascotMode": "question",
      "mascotTip": "Không gian mẫu thu hẹp: Có 70 bạn học tiếng Anh. Trong đó có 25 bạn học tiếng Pháp. Lấy 25 chia 70!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Nhận diện biến cố điều kiện thu hẹp</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Khảo sát $100$ học sinh có $70$ bạn học tiếng Anh, $40$ bạn học tiếng Pháp và $25$ bạn học cả hai môn. Chọn ngẫu nhiên một bạn. <b>Biết bạn đó học tiếng Anh</b>, tính xác suất để bạn đó <b>học tiếng Pháp</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $\\frac{5}{14}$</div>\n                <div><b>B.</b> $\\frac{1}{4}$</div>\n                <div><b>C.</b> $\\frac{5}{8}$</div>\n                <div><b>D.</b> $\\frac{2}{5}$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 4,
      "title": "Ví dụ 1: Phân biệt Giao và Có điều kiện",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 75.34,
      "endTime": 108.65,
      "duration": 33.31,
      "mascotMode": "success",
      "mascotTip": "25/70 = 5/14 ≈ 0,357! Bẫy 25/100 = 1/4 là xác suất giao cả 2 môn, không phải xác suất có điều kiện!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 1</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Gọi biến cố:</b> $E$: \"Học tiếng Anh\" ($n=70$), $F$: \"Học tiếng Pháp\" ($n=40$), $E \\cap F$: \"Học cả hai\" ($n=25$).</p>\n                <p><b>Phân tích cạm bẫy:</b></p>\n                <ul style=\"margin:4px 0 8px 20px;\">\n                  <li>Nếu hỏi: <i>\"Xác suất chọn bạn học cả tiếng Anh và tiếng Pháp\"</i> $\\implies P(E \\cap F) = \\frac{25}{100} = \\frac{1}{4} = 0{,}25$ (Đáp án B là bẫy!).</li>\n                  <li>Đề bài hỏi: <i>\"<b>Biết</b> bạn đó học tiếng Anh, tính xác suất học tiếng Pháp\"</i> $\\implies$ Đây là xác suất có điều kiện $P(F \\mid E)$:\n                    $$P(F \\mid E) = \\frac{n(E \\cap F)}{n(E)} = \\frac{25}{70} = \\frac{5}{14} \\approx 0{,}357$$\n                  </li>\n                </ul>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 5,
      "title": "Ví dụ 2: Bẫy biến cố đối có điều kiện",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "startTime": 108.65,
      "endTime": 121.9,
      "duration": 13.25,
      "mascotMode": "question",
      "mascotTip": "Tính chất biến cố đối có điều kiện: P(A ngang | B) = 1 - P(A | B). Điều kiện B giữ nguyên!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Tính chất biến cố đối có điều kiện</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Cho hai biến cố $A$ và $B$ với $P(B) = 0{,}4$ và $P(A \\mid B) = 0{,}7$. Khẳng định nào sau đây là <b>ĐÚNG</b>?\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $P(\\overline{A} \\mid B) = 0{,}3$</div>\n                <div><b>B.</b> $P(A \\mid \\overline{B}) = 0{,}3$</div>\n                <div><b>C.</b> $P(\\overline{A} \\mid \\overline{B}) = 0{,}3$</div>\n                <div><b>D.</b> $P(\\overline{B} \\mid A) = 0{,}6$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 6,
      "title": "Ví dụ 2: Bẫy biến cố đối có điều kiện",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 121.9,
      "endTime": 151.49,
      "duration": 29.59,
      "mascotMode": "success",
      "mascotTip": "Chính xác! P(A ngang | B) = 1 - P(A | B) = 1 - 0,7 = 0,3. Điều kiện B giữ nguyên!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 2</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Định lý về biến cố đối có điều kiện:</b></p>\n                <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:10px 14px; margin:10px 0; border-radius:4px;\">\n                  $$P(\\overline{A} \\mid B) = 1 - P(A \\mid B) = 1 - 0{,}7 = 0{,}3$$\n                </div>\n                <p style=\"color:#f87171; font-size:14px; margin:4px 0 0 0;\">\n                  ⚠️ <i>Cảnh báo bẫy B:</i> $P(A \\mid \\overline{B})$ hoàn toàn không liên quan trực tiếp đến $1 - P(A \\mid B)$. Muốn tính $P(A \\mid \\overline{B})$ phải biết $P(A \\cap \\overline{B})$ và $P(\\overline{B})$, không được lấy 1 trừ bừa bãi!\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 7,
      "title": "Ví dụ 3: Chuyển bóng giữa hai hộp bi",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 151.49,
      "endTime": 174.99,
      "duration": 23.5,
      "mascotMode": "question",
      "mascotTip": "Chuyển đỏ: (4/6)*(4/9) = 8/27. Chuyển xanh: (2/6)*(3/9) = 3/27. Cộng lại ra bao nhiêu?",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #f59e0b; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n    <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n      <div style=\"flex:1; min-width:0;\">\n        <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Bài toán chuyển bóng giữa hai hộp bi</h3>\n        <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#f59e0b;\">30 giây</b> (Vận dụng / Nâng cao)</span>\n      </div>\n      <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n          <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n        </svg>\n        <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n          <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n          <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#f59e0b; font-family:monospace; min-width:28px;\">30s</span>\n        </div>\n      </div>\n    </div>\n    \n              <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                Hộp 1 có $4$ bi đỏ và $2$ bi xanh; Hộp 2 có $3$ bi đỏ và $5$ bi xanh. Lấy ngẫu nhiên $1$ viên bi từ Hộp 1 bỏ sang Hộp 2. Sau đó từ Hộp 2 lấy ngẫu nhiên $1$ viên bi. Tính xác suất để viên bi lấy ra từ Hộp 2 có <b>màu đỏ</b>.\n              </p>\n              <div style=\"font-size:16px; line-height:1.8; margin:16px 0 0 10px; color:#cbd5e1; display:grid; grid-template-columns:1fr 1fr; gap:10px;\">\n                <div><b>A.</b> $\\frac{11}{27}$</div>\n                <div><b>B.</b> $\\frac{8}{27}$</div>\n                <div><b>C.</b> $\\frac{1}{3}$</div>\n                <div><b>D.</b> $\\frac{4}{9}$</div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 8,
      "title": "Ví dụ 3: Chuyển bóng giữa hai hộp bi",
      "subtitle": "HƯỚNG DẪN GIẢI CHI TIẾT",
      "startTime": 174.98,
      "endTime": 221.66,
      "duration": 46.68,
      "mascotMode": "success",
      "mascotTip": "8/27 + 3/27 = 11/27 ≈ 0,4074! Một bài toán kinh điển giải quyết trọn vẹn trong 30 giây!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:8px;\">\n                <h3 style=\"color:#10b981; font-size:20px; margin:0; font-weight:700;\">✅ Lời giải Ví dụ 3</h3>\n                <span style=\"background:#10b981; color:#0f172a; padding:4px 10px; border-radius:16px; font-weight:700; font-size:13px;\">Đáp án đúng: A</span>\n              </div>\n              <div style=\"font-size:15px; line-height:1.7; color:#e2e8f0;\">\n                <p><b>Giai đoạn 1:</b> Lấy 1 viên từ Hộp 1 (có 6 viên: 4 đỏ, 2 xanh):</p>\n                <ul style=\"margin:4px 0 6px 20px;\">\n                  <li>Chuyển viên bi đỏ: $P(D_1) = \\frac{4}{6} = \\frac{2}{3}$.</li>\n                  <li>Chuyển viên bi xanh: $P(X_1) = \\frac{2}{6} = \\frac{1}{3}$.</li>\n                </ul>\n                <p><b>Giai đoạn 2:</b> Rút 1 viên từ Hộp 2 (ban đầu 8 viên, sau khi nhận có 9 viên):</p>\n                <ul style=\"margin:4px 0 6px 20px;\">\n                  <li>Nếu nhận viên đỏ: Hộp 2 có $4$ đỏ, $5$ xanh $\\implies P(D_2 \\mid D_1) = \\frac{4}{9}$.</li>\n                  <li>Nếu nhận viên xanh: Hộp 2 có $3$ đỏ, $6$ xanh $\\implies P(D_2 \\mid X_1) = \\frac{3}{9}$.</li>\n                </ul>\n                <p><b>Xác suất toàn phần viên bi thứ hai màu đỏ:</b>\n                  $$P(D_2) = \\frac{2}{3} \\cdot \\frac{4}{9} + \\frac{1}{3} \\cdot \\frac{3}{9} = \\frac{8}{27} + \\frac{3}{27} = \\frac{11}{27} \\approx 0{,}4074$$\n                </p>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 9,
      "title": "Mục 3: Bẫy đề thi & Kỹ thuật Casio",
      "subtitle": "Phần 4: Kỹ thuật Casio fx-580VNX tối ưu",
      "startTime": 221.66,
      "endTime": 247.65,
      "duration": 25.99,
      "mascotMode": "explaining",
      "mascotTip": "Phím STO lưu biến nhớ và phím S<=>D chuyển đổi số thập phân: Bộ đôi hủy diệt câu hỏi Phần III!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">4. Kỹ thuật Casio fx-580VNX cho đề thi xác suất</h3>\n              <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:16px;\">\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(56,189,248,0.25); border-radius:8px; padding:14px;\">\n                  <b style=\"color:#38bdf8; font-size:16px;\">💾 Lưu biến nhớ nhánh bằng STO:</b>\n                  <p style=\"font-size:14px; line-height:1.7; color:#cbd5e1; margin:6px 0 0 0;\">\n                    • Nhập <code>(2/3)*(4/9) [STO] [A]</code><br>\n                    • Nhập <code>(1/3)*(3/9) [STO] [B]</code><br>\n                    • Bấm <code>[A] + [B] = 11/27</code> (Toàn phần)<br>\n                    • Bấm <code>[A] / ([A] + [B]) = 8/11</code> (Bayes)\n                  </p>\n                </div>\n                <div style=\"background:rgba(30,41,59,0.8); border:1px solid rgba(16,185,129,0.25); border-radius:8px; padding:14px;\">\n                  <b style=\"color:#10b981; font-size:16px;\">🎯 Làm tròn cho Phần III (Trả lời ngắn):</b>\n                  <p style=\"font-size:14px; line-height:1.7; color:#cbd5e1; margin:6px 0 0 0;\">\n                    • Nhấn <kbd style=\"background:#0f172a; border:1px solid #64748b; padding:1px 6px; border-radius:4px;\">S<=>D</kbd> chuyển $\\frac{11}{27}$ thành $0{,}4074$.<br>\n                    • Quy tròn đến hàng phần trăm: <code>0.41</code>; đến hàng phần nghìn: <code>0.407</code> theo đúng yêu cầu đề bài!\n                  </p>\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 10,
      "title": "Mục 3: Bẫy đề thi & Kỹ thuật Casio",
      "subtitle": "Phần 5: Chúc mừng hoàn thành toàn bộ Chương VI",
      "startTime": 247.66,
      "endTime": 266.93,
      "duration": 19.27,
      "mascotMode": "summary",
      "mascotTip": "Chúc mừng bạn đã xuất sắc hoàn thành trọn vẹn toàn bộ Chương VI: Xác suất có điều kiện! Chúc các bạn đạt điểm 10 môn Toán!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4); text-align:center;\">\n              <h3 style=\"color:#38bdf8; font-size:24px; margin-bottom:12px; font-weight:800;\">🎉 CHÚC MỪNG HOÀN THÀNH TOÀN BỘ CHƯƠNG VI</h3>\n              <p style=\"font-size:16px; line-height:1.7; color:#e2e8f0; max-width:640px; margin:0 auto 16px auto;\">\n                Các em đã trang bị đầy đủ kiến thức từ Khái niệm xác suất có điều kiện, Công thức nhân, Sơ đồ hình cây, Xác suất toàn phần, Công thức Bayes đến các kỹ thuật Casio fx-580VNX đỉnh cao!\n              </p>\n              <div style=\"background:rgba(16,185,129,0.15); border:1.5px dashed #10b981; border-radius:8px; padding:14px; max-width:540px; margin:0 auto; display:flex; align-items:center; gap:14px; text-align:left;\">\n                <span style=\"font-size:36px;\">🏆</span>\n                <span style=\"font-size:15px; color:#34d399; line-height:1.5;\">\n                  <b>Cú Thông Thái:</b> \"Chúc các em luôn tự tin, bình tĩnh và gặt hái điểm số cao nhất trong các kỳ thi sắp tới. Hẹn gặp lại các em trong các chuyên đề ôn thi đại học tiếp theo!\"\n                </span>\n              </div>\n            </div>\n            "
    }
  ]
};
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = (typeof window !== 'undefined' ? window.CHAPTER6_DATA : {});
}
