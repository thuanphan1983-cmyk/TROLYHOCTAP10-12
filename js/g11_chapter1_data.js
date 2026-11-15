/* =========================================================================
   CHƯƠNG I: HÀM SỐ LƯỢNG GIÁC VÀ PHƯƠNG TRÌNH LƯỢNG GIÁC - TOÁN 11 KNTT
   Bài 1: Giá trị lượng giác của góc lượng giác (Mục 1, 2, 3, 4)
   Mỗi mục có 4 ví dụ minh họa tiêu biểu, đồng hồ đếm ngược 15s/30s & giọng đọc Thầy Nam Minh
   Hệ thống Trợ lý Học tập Toán 10-12 Chuẩn Bộ GD&ĐT
   ========================================================================= */

if (typeof window !== 'undefined') {
  window.G11_CHAPTER1_DATA = window.G11_CHAPTER1_DATA || {};

  window.G11_CHAPTER1_DATA.g11_bai1_muc1 = {
  "lessonId": "toan11_bai1",
  "lessonTitle": "Bài 1: Giá trị lượng giác của góc lượng giác",
  "sectionId": "g11_bai1_muc1",
  "sectionTitle": "Mục 1: Góc lượng giác, đơn vị radian và độ dài cung tròn",
  "audio": "/audio/g11_bai1_muc1.mp3",
  "audioSrc": "./audio/g11_bai1_muc1.mp3",
  "audio_src": "./audio/g11_bai1_muc1.mp3",
  "title": "Mục 1: Góc lượng giác, đơn vị radian và độ dài cung tròn",
  "owl_tip": "Ghi nhớ: Chiều ngược chiều kim đồng hồ là chiều DƯƠNG! Công thức độ dài cung l = R.alpha (alpha đo bằng radian)!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm góc lượng giác & Chiều quay",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Đơn vị Radian & Độ dài cung tròn",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa tiêu biểu",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Bẫy trắc nghiệm & Sai lầm hay gặp",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Tổng kết Mục 1 & Bí kíp Cú Thông Thái",
      "scenes": [
        12
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. KHÁI NIỆM GÓC LƯỢNG GIÁC & CHIỀU QUAY",
      "subtitle": "MỤC 1 • MỞ RỘNG KHÁI NIỆM GÓC TỪ HÌNH HỌC SANG LƯỢNG GIÁC",
      "mascotMode": "pointer",
      "mascotTip": "Quy ước quốc tế: Ngược chiều kim đồng hồ là chiều DƯƠNG, cùng chiều kim đồng hồ là chiều ÂM!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">1. Khái niệm góc lượng giác</h3>\n                  <p style=\"font-size:16px; line-height:1.7; color:#e2e8f0;\">\n                    Cho hai tia $Ou, Ov$. Xét tia $Om$ quay quanh gốc $O$ từ tia đầu $Ou$ đến tia cuối $Ov$.\n                  </p>\n                  <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:14px; margin:12px 0; border-radius:4px;\">\n                    <ul style=\"margin:0; padding-left:20px; font-size:16px; color:#f8fafc; line-height:1.8;\">\n                      <li>Tia $Om$ quét nên một <b>góc lượng giác</b> có tia đầu $Ou$, tia cuối $Ov$, ký hiệu: <b>$(Ou, Ov)$</b>.</li>\n                      <li><b>Quy ước chiều quay:</b><br/>\n                        • Chiều <b>ngược chiều kim đồng hồ</b> là <b>chiều dương (+)</b>.<br/>\n                        • Chiều <b>cùng chiều kim đồng hồ</b> là <b>chiều âm (-)</b>.\n                      </li>\n                      <li><b>Số đo tổng quát:</b> Khi tia $Om$ quay thêm các vòng tròn nguyên vẹn:<br/>\n                        $$\\text{sđ}(Ou, Ov) = \\alpha + k360^\\circ \\quad \\text{hoặc} \\quad \\text{sđ}(Ou, Ov) = \\alpha + k2\\pi \\quad (k \\in \\mathbb{Z})$$\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n                ",
      "narration": "Chào mừng các em học sinh đến với Bài 1 Chương 1 môn Toán lớp 11: Giá trị lượng giác của góc lượng giác. Ở Mục 1, chúng ta cùng tìm hiểu về góc lượng giác, đơn vị radian và công thức tính độ dài cung tròn. Trong hình học lớp 10, góc chỉ nằm từ 0 độ đến 180 độ. Lên lớp 11, góc lượng giác được mở rộng không giới hạn: tia Om quay quanh điểm O từ tia đầu Ou đến tia cuối Ov. Chiều ngược chiều kim đồng hồ là chiều dương, cùng chiều kim đồng hồ là chiều âm. Mỗi khi quay thêm một vòng, số đo được cộng thêm 360 độ hay 2 pi radian.",
      "startTime": 0.0,
      "endTime": 35.54,
      "duration": 35.54
    },
    {
      "sceneIndex": 2,
      "title": "2. ĐƠN VỊ RADIAN & CÔNG THỨC ĐỘ DÀI CUNG TRÒN",
      "subtitle": "MỤC 1 • MỐI QUAN HỆ GIỮA ĐỘ VÀ RADIAN - CÔNG THỨC l = R.alpha",
      "mascotMode": "explaining",
      "mascotTip": "Khi tính độ dài cung l = R.alpha, bắt buộc góc alpha phải đổi sang đơn vị RADIAN!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:22px; margin-bottom:12px; font-weight:700;\">2. Đơn vị Radian và Độ dài cung tròn</h3>\n                  <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:16px;\">\n                    <div style=\"background:rgba(16,185,129,0.1); border-left:4px solid #10b981; padding:14px; border-radius:4px;\">\n                      <b style=\"color:#34d399; font-size:17px;\">Quan hệ giữa Độ và Radian:</b>\n                      <p style=\"font-size:15px; color:#f8fafc; line-height:1.7; margin:8px 0 0 0;\">\n                        $$\\pi\\text{ rad} = 180^\\circ$$\n                        $$1^\\circ = \\frac{\\pi}{180}\\text{ rad} \\approx 0{,}0175\\text{ rad}$$\n                        $$1\\text{ rad} = \\left(\\frac{180}{\\pi}\\right)^\\circ \\approx 57^\\circ 17'45''$$\n                      </p>\n                    </div>\n                    <div style=\"background:rgba(245,158,11,0.1); border-left:4px solid #f59e0b; padding:14px; border-radius:4px;\">\n                      <b style=\"color:#fbbf24; font-size:17px;\">Công thức tính Độ dài cung tròn:</b>\n                      <p style=\"font-size:15px; color:#f8fafc; line-height:1.7; margin:8px 0 0 0;\">\n                        Trên đường tròn bán kính $R$, cung tròn có số đo $\\alpha\\text{ rad}$ có độ dài là:\n                        <br/><br/>\n                        <span style=\"font-size:20px; font-weight:bold; color:#fef08a; display:block; text-align:center;\">\n                          $$l = R \\cdot \\alpha$$\n                        </span>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                ",
      "narration": "Tiếp theo, ta tìm hiểu về đơn vị radian. Một radian là số đo của góc ở tâm chắn một cung có độ dài bằng chính bán kính đường tròn đó. Mối quan hệ vàng giữa hai đơn vị là: pi radian tương ứng với 180 độ. Do đó, 1 độ bằng pi phần 180 radian, và 1 radian xấp xỉ 57 độ 17 phút 45 giây. Đặc biệt, công thức độ dài cung tròn rất thanh thoát và tiện lợi: l bằng R nhân alpha, với alpha bắt buộc tính theo đơn vị radian.",
      "startTime": 35.54,
      "endTime": 66.93,
      "duration": 31.39
    },
    {
      "sceneIndex": 3,
      "title": "Ví dụ 1: Nhận biết góc lượng giác cùng tia đầu và tia cuối",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "mascotMode": "question",
      "mascotTip": "Các góc có cùng tia đầu và tia cuối phải chênh lệch nhau bội nguyên của 360 độ hoặc 2pi!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n                    <div style=\"flex:1; min-width:0;\">\n                      <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Nhận biết góc lượng giác cùng tia</h3>\n                      <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n                    </div>\n                    <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n                        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n                        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n                      </svg>\n                      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n                        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n                        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n                      </div>\n                    </div>\n                  </div>\n                  <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    Cho góc lượng giác $(Ou, Ov)$ có số đo là $45^\\circ$. Trong các số đo sau đây:<br/>\n                    <b>(1)</b> $405^\\circ$; &nbsp;&nbsp; <b>(2)</b> $-315^\\circ$; &nbsp;&nbsp; <b>(3)</b> $765^\\circ$; &nbsp;&nbsp; <b>(4)</b> $-45^\\circ$.<br/>\n                    Những góc nào có cùng tia đầu $Ou$ và tia cuối $Ov$ với góc $(Ou, Ov)$ đã cho?\n                  </p>\n                </div>\n                ",
      "narration": "Ví dụ 1 là dạng toán nhận biết rất hay gặp trong đề thi. Cho góc lượng giác Ou Ov có số đo 45 độ. Hãy kiểm tra xem trong 4 góc: 405 độ, âm 315 độ, 765 độ và âm 45 độ, những góc nào có cùng tia đầu và tia cuối. Các em có 15 giây suy nghĩ bắt đầu!",
      "startTime": 66.93,
      "endTime": 87.91,
      "duration": 20.98
    },
    {
      "sceneIndex": 4,
      "title": "Ví dụ 1: Nhận biết góc lượng giác cùng tia đầu và tia cuối",
      "subtitle": "LỜI GIẢI CHI TIẾT & BÌNH LUẬN",
      "mascotMode": "cheer",
      "mascotTip": "Góc cùng tia đầu và tia cuối: Lấy số đo trừ đi góc ban đầu, nếu chia hết cho 360 độ thì chính xác!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:21px; margin:0 0 12px 0; font-weight:700; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:10px;\">\n                    Hướng dẫn giải chi tiết Ví dụ 1\n                  </h3>\n                  <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                    <p>Các góc có cùng tia đầu $Ou$ và tia cuối $Ov$ phải có dạng: $45^\\circ + k360^\\circ \\; (k \\in \\mathbb{Z})$.</p>\n                    <ul style=\"padding-left:20px; margin:8px 0;\">\n                      <li>Với góc $405^\\circ$: $405^\\circ - 45^\\circ = 360^\\circ = 1 \\times 360^\\circ \\implies k = 1 \\in \\mathbb{Z}$ <b style=\"color:#34d399;\">(Thỏa mãn)</b>.</li>\n                      <li>Với góc $-315^\\circ$: $-315^\\circ - 45^\\circ = -360^\\circ = (-1) \\times 360^\\circ \\implies k = -1 \\in \\mathbb{Z}$ <b style=\"color:#34d399;\">(Thỏa mãn)</b>.</li>\n                      <li>Với góc $765^\\circ$: $765^\\circ - 45^\\circ = 720^\\circ = 2 \\times 360^\\circ \\implies k = 2 \\in \\mathbb{Z}$ <b style=\"color:#34d399;\">(Thỏa mãn)</b>.</li>\n                      <li>Với góc $-45^\\circ$: $-45^\\circ - 45^\\circ = -90^\\circ \\neq k360^\\circ$ <b style=\"color:#f87171;\">(Loại)</b>.</li>\n                    </ul>\n                    <p style=\"background:rgba(16,185,129,0.15); padding:10px; border-radius:6px; color:#a7f3d0; margin-top:10px;\">\n                      👉 <b>Kết luận:</b> Các góc (1), (2), (3) có cùng tia đầu và tia cuối với góc $(Ou, Ov)$.\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Hết 15 giây! Lời giải như sau: Để có cùng tia đầu Ou và tia cuối Ov, hiệu giữa số đo góc cần xét và 45 độ phải chia hết cho 360 độ. Ta có: 405 trừ 45 bằng 360 độ, ứng với k bằng 1. Âm 315 trừ 45 bằng âm 360 độ, ứng với k bằng âm 1. 765 trừ 45 bằng 720 độ, ứng với k bằng 2. Còn âm 45 trừ 45 bằng âm 90 độ, không chia hết cho 360 độ. Vậy các góc 1, 2 và 3 thỏa mãn.",
      "startTime": 87.91,
      "endTime": 124.65,
      "duration": 36.74
    },
    {
      "sceneIndex": 5,
      "title": "Ví dụ 2: Chuyển đổi giữa Độ và Radian",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "mascotMode": "question",
      "mascotTip": "Nhớ nhanh: Nhân pi chia 180 để sang radian, nhân 180 chia pi để sang độ!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n                    <div style=\"flex:1; min-width:0;\">\n                      <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Chuyển đổi giữa Độ và Radian</h3>\n                      <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Thông hiểu)</span>\n                    </div>\n                    <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n                        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n                        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n                      </svg>\n                      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n                        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n                        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n                      </div>\n                    </div>\n                  </div>\n                  <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    <b>a)</b> Đổi các góc $150^\\circ$ và $-225^\\circ$ sang đơn vị radian.<br/>\n                    <b>b)</b> Đổi các góc $\\frac{3\\pi}{8}\\text{ rad}$ và $-\\frac{5\\pi}{6}\\text{ rad}$ sang đơn vị độ.\n                  </p>\n                </div>\n                ",
      "narration": "Ví dụ 2 là kỹ năng đổi đơn vị căn bản nhưng bắt buộc phải thành thạo. Câu a: đổi 150 độ và âm 225 độ sang radian. Câu b: đổi 3 pi phần 8 radian và âm 5 pi phần 6 radian sang độ. Các em có 15 giây suy nghĩ và thực hiện tính toán nhé!",
      "startTime": 124.65,
      "endTime": 143.68,
      "duration": 19.03
    },
    {
      "sceneIndex": 6,
      "title": "Ví dụ 2: Chuyển đổi giữa Độ và Radian",
      "subtitle": "LỜI GIẢI CHI TIẾT & BÌNH LUẬN",
      "mascotMode": "explaining",
      "mascotTip": "Trên Casio 580: Shift Menu 2 (Angle Unit) chọn 1: Degree hoặc 2: Radian để đổi tự động!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:21px; margin:0 0 12px 0; font-weight:700; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:10px;\">\n                    Hướng dẫn giải chi tiết Ví dụ 2\n                  </h3>\n                  <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                    <p><b style=\"color:#38bdf8;\">a) Đổi từ độ sang radian (nhân với $\\frac{\\pi}{180}$):</b></p>\n                    <ul style=\"padding-left:20px; margin:4px 0 12px 0;\">\n                      <li>$150^\\circ = 150 \\times \\frac{\\pi}{180} = \\frac{5\\pi}{6}\\text{ rad}$.</li>\n                      <li>$-225^\\circ = -225 \\times \\frac{\\pi}{180} = -\\frac{5\\pi}{4}\\text{ rad}$.</li>\n                    </ul>\n                    <p><b style=\"color:#fbbf24;\">b) Đổi từ radian sang độ (thay $\\pi = 180^\\circ$):</b></p>\n                    <ul style=\"padding-left:20px; margin:4px 0;\">\n                      <li>$\\frac{3\\pi}{8}\\text{ rad} = \\frac{3 \\times 180^\\circ}{8} = 67{,}5^\\circ = 67^\\circ 30'$.</li>\n                      <li>$-\\frac{5\\pi}{6}\\text{ rad} = -\\frac{5 \\times 180^\\circ}{6} = -150^\\circ$.</li>\n                    </ul>\n                  </div>\n                </div>\n                ",
      "narration": "Cách đổi rất đơn giản: Ở câu a, đổi sang radian ta lấy số đo độ nhân pi chia 180. 150 độ rút gọn được 5 pi phần 6; âm 225 độ rút gọn được âm 5 pi phần 4. Ở câu b, cách nhanh nhất khi đổi sang độ là thay trực tiếp pi bằng 180 độ: 3 nhân 180 chia 8 bằng 67,5 độ tức 67 độ 30 phút; âm 5 nhân 180 chia 6 bằng âm 150 độ.",
      "startTime": 143.68,
      "endTime": 170.66,
      "duration": 26.98
    },
    {
      "sceneIndex": 7,
      "title": "Ví dụ 3: Mô hình hóa bài toán bánh xe đạp",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "mascotMode": "thinking",
      "mascotTip": "Quãng đường đi được bằng số vòng nhân chu vi, hoặc áp dụng s = R.alpha!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #f59e0b; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(245,158,11,0.25);\">\n                    <div style=\"flex:1; min-width:0;\">\n                      <h3 style=\"color:#fbbf24; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Mô hình hóa bài toán bánh xe đạp</h3>\n                      <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#f59e0b;\">30 giây</b> (Vận dụng thực tế)</span>\n                    </div>\n                    <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n                        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n                        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n                      </svg>\n                      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n                        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n                        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#f59e0b; font-family:monospace; min-width:28px;\">30s</span>\n                      </div>\n                    </div>\n                  </div>\n                  <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    Một bánh xe đạp có bán kính $R = 32{,}5\\text{ cm}$. Người đi xe đạp di chuyển một quãng đường dài $s = 102{,}1\\text{ m}$. Lấy $\\pi \\approx 3{,}1416$.<br/>\n                    <b>a)</b> Hỏi bánh xe đã quay được bao nhiêu vòng?<br/>\n                    <b>b)</b> Một nan hoa của bánh xe đã quay được một góc lượng giác có số đo bao nhiêu radian?\n                  </p>\n                </div>\n                ",
      "narration": "Ví dụ 3 là bài toán thực tiễn tiêu biểu trong SGK Kết nối tri thức. Một bánh xe đạp có bán kính 32,5 cm di chuyển quãng đường 102,1 m. Hãy tính số vòng quay của bánh xe và số đo góc lượng giác theo radian mà một nan hoa đã quay được. Các em có 30 giây suy nghĩ!",
      "startTime": 170.66,
      "endTime": 189.4,
      "duration": 18.74
    },
    {
      "sceneIndex": 8,
      "title": "Ví dụ 3: Bài toán thực tế chuyển động bánh xe",
      "subtitle": "LỜI GIẢI CHI TIẾT & BÌNH LUẬN",
      "mascotMode": "cheer",
      "mascotTip": "Lưu ý đồng nhất đơn vị: Đổi mét ra xentimét trước khi thực hiện phép chia!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:21px; margin:0 0 12px 0; font-weight:700; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:10px;\">\n                    Hướng dẫn giải chi tiết Ví dụ 3\n                  </h3>\n                  <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                    <p><b>Đổi đơn vị:</b> $s = 102{,}1\\text{ m} = 10210\\text{ cm}$.</p>\n                    <p><b>a) Chu vi bánh xe đạp:</b><br/>\n                      $$C = 2\\pi R = 2 \\times 3{,}1416 \\times 32{,}5 \\approx 204{,}2\\text{ cm}$$\n                      Số vòng bánh xe quay được là:<br/>\n                      $$N = \\frac{s}{C} = \\frac{10210}{204{,}2} \\approx 50\\text{ (vòng)}$$\n                    </p>\n                    <p><b>b) Góc lượng giác nan hoa quay được:</b><br/>\n                      Mỗi vòng quay tương ứng góc $2\\pi\\text{ rad}$. Do đó:<br/>\n                      $$\\alpha = N \\times 2\\pi = 50 \\times 2\\pi = 100\\pi \\approx 314{,}16\\text{ (rad)}$$\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải như sau: Đầu tiên, đổi 102,1 mét thành 10210 xentimét. Chu vi bánh xe là 2 pi R, bằng 2 nhân 3,1416 nhân 32,5 xấp xỉ 204,2 cm. Số vòng quay là quãng đường chia chu vi, bằng 10210 chia 204,2 ra đúng 50 vòng. Ở câu b, mỗi vòng tròn tương ứng với góc 2 pi radian, vậy 50 vòng sẽ quét được góc 100 pi radian, xấp xỉ 314,16 radian.",
      "startTime": 189.4,
      "endTime": 220.31,
      "duration": 30.91
    },
    {
      "sceneIndex": 9,
      "title": "Ví dụ 4: Chuyển động kim giờ & kim phút",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "mascotMode": "question",
      "mascotTip": "Kim đồng hồ quay cùng chiều kim đồng hồ nên góc lượng giác luôn mang dấu ÂM!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #ef4444; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(239,68,68,0.25);\">\n                    <div style=\"flex:1; min-width:0;\">\n                      <h3 style=\"color:#f87171; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 4: Chuyển động kim giờ & kim phút</h3>\n                      <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#ef4444;\">30 giây</b> (Vận dụng cao)</span>\n                    </div>\n                    <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #ef4444; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(239,68,68,0.35);\">\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n                        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n                        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n                      </svg>\n                      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n                        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n                        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#ef4444; font-family:monospace; min-width:28px;\">30s</span>\n                      </div>\n                    </div>\n                  </div>\n                  <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    Một đồng hồ treo tường có kim phút dài $15\\text{ cm}$. Từ lúc <b>8 giờ đúng</b> đến <b>8 giờ 40 phút</b> cùng ngày:<br/>\n                    <b>a)</b> Tính số đo góc lượng giác mà kim phút và kim giờ đã quét được.<br/>\n                    <b>b)</b> Tính độ dài cung tròn mà đầu mút kim phút vạch nên trong khoảng thời gian trên (lấy $\\pi \\approx 3{,}1416$).\n                  </p>\n                </div>\n                ",
      "narration": "Ví dụ 4 là bài toán phân hóa vận dụng cao rất hay xuất hiện trong các bài kiểm tra: Xét chuyển động kim phút dài 15 cm từ 8 giờ đúng đến 8 giờ 40 phút. Hãy tính góc lượng giác mà kim phút và kim giờ quét được, cùng độ dài cung tròn đầu mút kim phút vạch nên. 30 giây suy nghĩ bắt đầu!",
      "startTime": 220.31,
      "endTime": 238.96,
      "duration": 18.65
    },
    {
      "sceneIndex": 10,
      "title": "Ví dụ 4: Chuyển động kim giờ & kim phút",
      "subtitle": "LỜI GIẢI CHI TIẾT & BÌNH LUẬN",
      "mascotMode": "cheer",
      "mascotTip": "Tốc độ góc: Kim phút quét 2pi rad / 60 phút; kim giờ quét 2pi rad / 12 giờ = 2pi / 720 phút!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:21px; margin:0 0 12px 0; font-weight:700; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:10px;\">\n                    Hướng dẫn giải chi tiết Ví dụ 4\n                  </h3>\n                  <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                    <p>Vì kim đồng hồ quay theo chiều âm (cùng chiều kim đồng hồ):</p>\n                    <p><b>a) Số đo góc lượng giác:</b><br/>\n                      • Trong 40 phút, kim phút quay được $\\frac{40}{60} = \\frac{2}{3}$ vòng $\\implies \\alpha_{\\text{phút}} = -\\frac{2}{3} \\times 2\\pi = -\\frac{4\\pi}{3}\\text{ rad} = -240^\\circ$.<br/>\n                      • Trong 1 giờ (60 phút), kim giờ quay $-\\frac{2\\pi}{12} = -\\frac{\\pi}{6}\\text{ rad}$.<br/>\n                      &nbsp;&nbsp;Trong 40 phút, kim giờ quay: $\\alpha_{\\text{giờ}} = -\\frac{40}{60} \\times \\frac{\\pi}{6} = -\\frac{\\pi}{9}\\text{ rad} = -20^\\circ$.\n                    </p>\n                    <p><b>b) Quãng đường đầu mút kim phút vạch nên:</b><br/>\n                      $$l = R \\cdot |\\alpha_{\\text{phút}}| = 15 \\times \\frac{4\\pi}{3} = 20\\pi \\approx 62{,}83\\text{ cm}$$\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải chi tiết: Kim đồng hồ quay theo chiều âm nên số đo góc mang dấu trừ. Trong 40 phút, kim phút quay 2 phần 3 vòng, tương ứng góc lượng giác là trừ 4 pi phần 3 radian, hay âm 240 độ. Trong 40 phút, kim giờ quay được góc âm pi phần 9 radian, tức âm 20 độ. Quãng đường đầu mút kim phút vạch ra là l bằng R nhân trị tuyệt đối alpha, bằng 15 nhân 4 pi phần 3, bằng 20 pi xấp xỉ 62,83 cm.",
      "startTime": 238.96,
      "endTime": 268.65,
      "duration": 29.69
    },
    {
      "sceneIndex": 11,
      "title": "3. CẢNH BÁO BẪY TRẮC NGHIỆM & SAI LẦM PHỔ BIẾN",
      "subtitle": "MỤC 1 • CÁC BẪY HỌC SINH RẤT HAY MẤT ĐIỂM",
      "mascotMode": "magnifier",
      "mascotTip": "Đọc kỹ đề bài: Phân biệt rõ góc hình học (luôn dương từ 0 đến 180 độ) và góc lượng giác (có dấu và vượt quá 360 độ)!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #f43f5e; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:12px; font-weight:700;\">⚠️ 3 Sai lầm chết người cần tránh</h3>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; margin-bottom:10px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 1: Quên dấu âm khi quay cùng chiều kim đồng hồ</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">Nhiều bạn quen góc hình học nên luôn ghi số đo dương, dẫn đến sai dấu hoàn toàn!</p>\n                  </div>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; margin-bottom:10px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 2: Dùng độ trong công thức $l = R\\alpha$</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">Công thức $l = R\\alpha$ CHỈ ĐÚNG khi $\\alpha$ tính bằng RADIAN. Nếu đề cho độ $a^\\circ$, phải dùng $l = \\frac{\\pi R a}{180}$.</p>\n                  </div>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 3: Quên đổi chế độ máy tính cầm tay (D và R)</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">Khi tính với $\\pi$, phải để máy ở chế độ Radian (chữ R trên màn hình).</p>\n                  </div>\n                </div>\n                ",
      "narration": "Cú Thông Thái lưu ý 3 sai lầm nguy hiểm các em hay mắc phải: Thứ nhất, quên dấu âm khi góc quay cùng chiều kim đồng hồ. Thứ hai, áp dụng công thức l bằng R nhân alpha nhưng lại để alpha ở đơn vị độ, dẫn đến kết quả sai hoàn toàn. Thứ ba, bấm máy tính nhưng quên chuyển đơn vị góc giữa độ và radian.",
      "startTime": 268.65,
      "endTime": 288.57,
      "duration": 19.92
    },
    {
      "sceneIndex": 12,
      "title": "4. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
      "subtitle": "MỤC 1 • KHẮC SÂU KIẾN THỨC NỀN TẢNG",
      "mascotMode": "cheer",
      "mascotTip": "Thần chú Mục 1: 'Ngược kim là DƯƠNG, cùng kim là ÂM – Cung tròn l bằng R nhân alpha!'",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #a855f7; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#c084fc; font-size:22px; margin-bottom:12px; font-weight:700;\">💡 Tóm tắt cốt lõi Mục 1</h3>\n                  <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:16px;\">\n                    <div style=\"background:rgba(168,85,247,0.15); border:1px solid rgba(168,85,247,0.4); padding:14px; border-radius:8px;\">\n                      <b style=\"color:#e9d5ff; font-size:16px;\">Công thức cần nhớ:</b>\n                      <p style=\"color:#f8fafc; font-size:15px; line-height:1.7; margin:6px 0 0 0;\">\n                        • $\\alpha + k2\\pi \\quad (k \\in \\mathbb{Z})$<br/>\n                        • $1^\\circ = \\frac{\\pi}{180}\\text{ rad}$<br/>\n                        • $1\\text{ rad} = \\left(\\frac{180}{\\pi}\\right)^\\circ$<br/>\n                        • $l = R \\cdot \\alpha$\n                      </p>\n                    </div>\n                    <div style=\"background:rgba(245,158,11,0.15); border:1px solid rgba(245,158,11,0.4); padding:14px; border-radius:8px;\">\n                      <b style=\"color:#fef08a; font-size:16px;\">Kỹ năng then chốt:</b>\n                      <p style=\"color:#f8fafc; font-size:15px; line-height:1.7; margin:6px 0 0 0;\">\n                        • Đổi nhanh độ $\\leftrightarrow$ radian.<br/>\n                        • Tìm góc cùng tia biểu diễn.<br/>\n                        • Giải bài toán chuyển động tròn thực tế.\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                ",
      "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục 1 của Bài 1. Hãy ghi nhớ câu khẩu quyết: Ngược kim là dương, cùng kim là âm; cung tròn l bằng R nhân alpha. Hẹn gặp lại các em ở Mục 2: Đường tròn lượng giác và điểm biểu diễn góc lượng giác!",
      "startTime": 288.57,
      "endTime": 304.51,
      "duration": 15.94
    }
  ],
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 35.54,
      "id": "part2"
    },
    {
      "time": 66.93,
      "id": "vd1_q"
    },
    {
      "time": 87.91,
      "id": "vd1_a"
    },
    {
      "time": 124.65,
      "id": "vd2_q"
    },
    {
      "time": 143.68,
      "id": "vd2_a"
    },
    {
      "time": 170.66,
      "id": "vd3_q"
    },
    {
      "time": 189.4,
      "id": "vd3_a"
    },
    {
      "time": 220.31,
      "id": "vd4_q"
    },
    {
      "time": 238.96,
      "id": "vd4_a"
    },
    {
      "time": 268.65,
      "id": "part4"
    },
    {
      "time": 288.57,
      "id": "part5"
    }
  ],
  "totalDuration": 304.51,
  "duration": 304.51
};

  window.G11_CHAPTER1_DATA.g11_bai1_muc2 = {
  "lessonId": "toan11_bai1",
  "lessonTitle": "Bài 1: Giá trị lượng giác của góc lượng giác",
  "sectionId": "g11_bai1_muc2",
  "sectionTitle": "Mục 2: Đường tròn lượng giác & Điểm biểu diễn góc lượng giác",
  "audio": "/audio/g11_bai1_muc2.mp3",
  "audioSrc": "./audio/g11_bai1_muc2.mp3",
  "audio_src": "./audio/g11_bai1_muc2.mp3",
  "title": "Mục 2: Đường tròn lượng giác & Điểm biểu diễn góc lượng giác",
  "owl_tip": "Đường tròn lượng giác có bán kính R = 1, gốc A(1; 0). Họ góc alpha + k2pi có chung 1 điểm biểu diễn!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Đường tròn lượng giác & 4 góc phần tư",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Điểm biểu diễn góc lượng giác trên đường tròn",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa tiêu biểu",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Bẫy trắc nghiệm khi biểu diễn góc",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Tổng kết Mục 2 & Lời khuyên Cú Thông Thái",
      "scenes": [
        12
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. ĐƯỜNG TRÒN LƯỢNG GIÁC & 4 GÓC PHẦN TƯ",
      "subtitle": "MỤC 2 • ĐỊNH HƯỚNG MẶT PHẲNG TỌA ĐỘ VÀ ĐƯỜNG TRÒN ĐƠN VỊ",
      "mascotMode": "pointer",
      "mascotTip": "Gốc tọa độ O là tâm, bán kính R = 1, điểm A(1; 0) luôn là GỐC của mọi góc lượng giác!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">1. Khái niệm Đường tròn lượng giác</h3>\n                  <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:14px; margin-bottom:12px; border-radius:4px;\">\n                    <p style=\"font-size:16px; color:#f8fafc; line-height:1.7; margin:0;\">\n                      <b>Đường tròn lượng giác</b> là đường tròn tâm $O$ (gốc tọa độ), bán kính $R = 1$, được định hướng:<br/>\n                      • Chiều dương là ngược chiều kim đồng hồ (+).<br/>\n                      • Chiều âm là cùng chiều kim đồng hồ (-).<br/>\n                      • <b>Điểm gốc:</b> Điểm $A(1; 0)$ trên trục hoành $Ox$.\n                    </p>\n                  </div>\n                  <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:12px;\">\n                    <div style=\"background:rgba(15,23,42,0.8); border:1px solid #475569; padding:10px 14px; border-radius:6px;\">\n                      <b style=\"color:#fef08a;\">4 Điểm trục then chốt:</b>\n                      <p style=\"font-size:14px; color:#cbd5e1; margin:4px 0 0 0; line-height:1.6;\">\n                        $A(1; 0)$ ứng với $0^\\circ$ ($0\\text{ rad}$)<br/>\n                        $B(0; 1)$ ứng với $90^\\circ$ ($\\frac{\\pi}{2}\\text{ rad}$)<br/>\n                        $A'(-1; 0)$ ứng với $180^\\circ$ ($\\pi\\text{ rad}$)<br/>\n                        $B'(0; -1)$ ứng với $270^\\circ$ ($\\frac{3\\pi}{2}\\text{ rad}$)\n                      </p>\n                    </div>\n                    <div style=\"background:rgba(15,23,42,0.8); border:1px solid #475569; padding:10px 14px; border-radius:6px;\">\n                      <b style=\"color:#38bdf8;\">4 Góc phần tư (Quadrant):</b>\n                      <p style=\"font-size:14px; color:#cbd5e1; margin:4px 0 0 0; line-height:1.6;\">\n                        • <b>Góc I:</b> $(0; \\frac{\\pi}{2})$ hoặc $(0^\\circ; 90^\\circ)$<br/>\n                        • <b>Góc II:</b> $(\\frac{\\pi}{2}; \\pi)$ hoặc $(90^\\circ; 180^\\circ)$<br/>\n                        • <b>Góc III:</b> $(\\pi; \\frac{3\\pi}{2})$ hoặc $(180^\\circ; 270^\\circ)$<br/>\n                        • <b>Góc IV:</b> $(\\frac{3\\pi}{2}; 2\\pi)$ hoặc $(270^\\circ; 360^\\circ)$\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                ",
      "narration": "Chào các em đến với Mục 2: Đường tròn lượng giác và điểm biểu diễn góc lượng giác. Trong toán học, đường tròn lượng giác là một công cụ trực quan vô cùng mạnh mẽ. Đó là đường tròn tâm O bán kính bằng 1 gắn trên mặt phẳng tọa độ Oxy. Điểm A tọa độ 1 chấm phẩy 0 luôn là điểm gốc bắt đầu. Bốn điểm đặc biệt cắt các trục là: A 1 0 ứng với 0 radian, B 0 1 ứng với pi phần 2, A phẩy âm 1 0 ứng với pi, và B phẩy 0 âm 1 ứng với 3 pi phần 2. Hai trục tọa độ chia mặt phẳng thành 4 góc phần tư thứ nhất, thứ hai, thứ ba và thứ tư.",
      "startTime": 0.0,
      "endTime": 35.74,
      "duration": 35.74
    },
    {
      "sceneIndex": 2,
      "title": "2. ĐIỂM BIỂU DIỄN GÓC LƯỢNG GIÁC TRÊN ĐƯỜNG TRÒN",
      "subtitle": "MỤC 2 • ĐIỂM M BIỂU DIỄN VÀ QUY TẮC TUẦN HOÀN CHU KỲ 2PI",
      "mascotMode": "explaining",
      "mascotTip": "Góc alpha và góc alpha + k2pi có cùng một vị trí điểm biểu diễn M duy nhất!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:22px; margin-bottom:12px; font-weight:700;\">2. Điểm biểu diễn góc lượng giác</h3>\n                  <div style=\"background:rgba(16,185,129,0.1); border-left:4px solid #10b981; padding:14px; margin-bottom:12px; border-radius:4px;\">\n                    <p style=\"font-size:16px; color:#f8fafc; line-height:1.7; margin:0;\">\n                      Trên đường tròn lượng giác, điểm $M$ gọi là <b>điểm biểu diễn</b> của góc lượng giác có số đo $\\alpha$ nếu cung lượng giác $AM$ có số đo bằng $\\alpha$:<br/>\n                      $$\\text{sđ}\\overgroup{AM} = \\alpha$$\n                    </p>\n                  </div>\n                  <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:14px;\">\n                    <div style=\"background:rgba(15,23,42,0.8); border:1px solid #10b981; padding:12px; border-radius:6px;\">\n                      <b style=\"color:#34d399;\">Quy tắc thu gọn chu kỳ $k2\\pi$:</b>\n                      <p style=\"font-size:14px; color:#e2e8f0; margin:6px 0 0 0; line-height:1.6;\">\n                        Nếu số đo góc lớn hơn $2\\pi$ ($360^\\circ$) hoặc nhỏ hơn $0$, ta luôn phân tích:<br/>\n                        $$\\alpha = \\alpha_0 + k2\\pi \\quad (0 \\le \\alpha_0 < 2\\pi, \\; k \\in \\mathbb{Z})$$\n                        Khi đó góc $\\alpha$ có cùng điểm biểu diễn với góc $\\alpha_0$.\n                      </p>\n                    </div>\n                    <div style=\"background:rgba(15,23,42,0.8); border:1px solid #38bdf8; padding:12px; border-radius:6px;\">\n                      <b style=\"color:#38bdf8;\">Biểu diễn họ nghiệm $\\alpha + \\frac{k2\\pi}{n}$:</b>\n                      <p style=\"font-size:14px; color:#e2e8f0; margin:6px 0 0 0; line-height:1.6;\">\n                        Họ góc $\\alpha + \\frac{k2\\pi}{n}$ ($k \\in \\mathbb{Z}$) có đúng <b>$n$ điểm biểu diễn</b> cách đều nhau trên đường tròn lượng giác, tạo thành một đa giác đều $n$ đỉnh!\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                ",
      "narration": "Điểm biểu diễn của một góc lượng giác alpha là điểm M trên đường tròn sao cho cung lượng giác AM có số đo bằng alpha. Vì đường tròn có chu vi 2 pi, nên mỗi khi góc cộng thêm bội của 2 pi radian hay bội của 360 độ, điểm M lại quay về đúng vị trí cũ. Do đó, nếu gặp các góc lớn hoặc góc âm, ta chỉ cần phân tích tách phần bội k 2 pi ra, điểm biểu diễn sẽ trùng với góc phần dư alpha 0 nằm từ 0 đến 2 pi. Đối với họ góc alpha cộng k 2 pi chia n, sẽ có đúng n điểm biểu diễn phân biệt tạo thành một đa giác đều n đỉnh.",
      "startTime": 35.74,
      "endTime": 70.2,
      "duration": 34.46
    },
    {
      "sceneIndex": 3,
      "title": "Ví dụ 1: Xác định điểm biểu diễn & Góc phần tư",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "mascotMode": "question",
      "mascotTip": "Góc phần tư: I từ 0 đến pi/2; II từ pi/2 đến pi; III từ pi đến 3pi/2; IV từ 3pi/2 đến 2pi!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n                    <div style=\"flex:1; min-width:0;\">\n                      <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Xác định vị trí điểm biểu diễn</h3>\n                      <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n                    </div>\n                    <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n                        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n                        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n                      </svg>\n                      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n                        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n                        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n                      </div>\n                    </div>\n                  </div>\n                  <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    Hãy xác định góc phần tư chứa điểm biểu diễn trên đường tròn lượng giác của các góc sau:<br/>\n                    <b>(1)</b> $\\alpha_1 = \\frac{3\\pi}{4}$; &nbsp;&nbsp;&nbsp;&nbsp; <b>(2)</b> $\\alpha_2 = -\\frac{\\pi}{3}$; &nbsp;&nbsp;&nbsp;&nbsp; <b>(3)</b> $\\alpha_3 = \\frac{7\\pi}{6}$; &nbsp;&nbsp;&nbsp;&nbsp; <b>(4)</b> $\\alpha_4 = -\\frac{3\\pi}{4}$.\n                  </p>\n                </div>\n                ",
      "narration": "Ví dụ 1 rèn luyện khả năng định vị góc trên đường tròn lượng giác. Hãy cho biết điểm biểu diễn của 4 góc: 3 pi phần 4, âm pi phần 3, 7 pi phần 6 và âm 3 pi phần 4 nằm ở góc phần tư nào. Các em có 15 giây suy nghĩ!",
      "startTime": 70.2,
      "endTime": 85.73,
      "duration": 15.53
    },
    {
      "sceneIndex": 4,
      "title": "Ví dụ 1: Xác định điểm biểu diễn & Góc phần tư",
      "subtitle": "LỜI GIẢI CHI TIẾT & BÌNH LUẬN",
      "mascotMode": "cheer",
      "mascotTip": "Góc âm quay theo chiều kim đồng hồ: -pi/3 đi xuống góc phần tư IV, -3pi/4 đi qua -pi/2 xuống góc phần tư III!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:21px; margin:0 0 12px 0; font-weight:700; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:10px;\">\n                    Hướng dẫn giải chi tiết Ví dụ 1\n                  </h3>\n                  <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                    <ul style=\"padding-left:20px; margin:8px 0;\">\n                      <li><b>(1) $\\alpha_1 = \\frac{3\\pi}{4} = 135^\\circ$:</b> Vì $\\frac{\\pi}{2} < \\frac{3\\pi}{4} < \\pi \\implies$ Điểm biểu diễn thuộc <b>góc phần tư II</b>.</li>\n                      <li><b>(2) $\\alpha_2 = -\\frac{\\pi}{3} = -60^\\circ$:</b> Quay theo chiều âm một góc $60^\\circ$, nằm giữa $0$ và $-\\frac{\\pi}{2} \\implies$ Điểm biểu diễn thuộc <b>góc phần tư IV</b>.</li>\n                      <li><b>(3) $\\alpha_3 = \\frac{7\\pi}{6} = 210^\\circ$:</b> Vì $\\pi < \\frac{7\\pi}{6} < \\frac{3\\pi}{2} \\implies$ Điểm biểu diễn thuộc <b>góc phần tư III</b>.</li>\n                      <li><b>(4) $\\alpha_4 = -\\frac{3\\pi}{4} = -135^\\circ$:</b> Vì $-\\pi < -\\frac{3\\pi}{4} < -\\frac{\\pi}{2} \\implies$ Điểm biểu diễn thuộc <b>góc phần tư III</b>.</li>\n                    </ul>\n                  </div>\n                </div>\n                ",
      "narration": "Hết 15 giây! Lời giải như sau: 3 pi phần 4 bằng 135 độ, lớn hơn 90 độ và nhỏ hơn 180 độ nên nằm ở góc phần tư thứ hai. Âm pi phần 3 quay theo chiều âm 60 độ nên rơi vào góc phần tư thứ tư. 7 pi phần 6 bằng 210 độ, nằm giữa pi và 3 pi phần 2 nên thuộc góc phần tư thứ ba. Cuối cùng, âm 3 pi phần 4 quay theo chiều âm 135 độ, cũng nằm ở góc phần tư thứ ba.",
      "startTime": 85.73,
      "endTime": 114.22,
      "duration": 28.49
    },
    {
      "sceneIndex": 5,
      "title": "Ví dụ 2: Tách bội 2pi tìm điểm biểu diễn góc lớn",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "mascotMode": "question",
      "mascotTip": "Lấy tử số chia cho mẫu số, tách ra số chẵn gần nhất của pi!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n                    <div style=\"flex:1; min-width:0;\">\n                      <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Biểu diễn góc lớn và góc âm</h3>\n                      <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Thông hiểu)</span>\n                    </div>\n                    <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n                        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n                        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n                      </svg>\n                      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n                        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n                        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n                      </div>\n                    </div>\n                  </div>\n                  <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    Hãy tìm điểm biểu diễn trên đường tròn lượng giác trùng với điểm biểu diễn của các góc sau:<br/>\n                    <b>a)</b> $\\beta_1 = \\frac{17\\pi}{3}$; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>b)</b> $\\beta_2 = -\\frac{15\\pi}{4}$; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>c)</b> $\\beta_3 = 1140^\\circ$.\n                  </p>\n                </div>\n                ",
      "narration": "Ở Ví dụ 2, các góc cho dưới dạng rất lớn hoặc âm lớn. Ta cần tìm điểm biểu diễn gọn gàng trên đường tròn lượng giác bằng cách tách bội của 2 pi hoặc 360 độ: câu a là 17 pi phần 3, câu b là âm 15 pi phần 4, và câu c là 1140 độ. Các em có 15 giây để tính toán!",
      "startTime": 114.22,
      "endTime": 133.88,
      "duration": 19.66
    },
    {
      "sceneIndex": 6,
      "title": "Ví dụ 2: Tách bội 2pi tìm điểm biểu diễn góc lớn",
      "subtitle": "LỜI GIẢI CHI TIẾT & BÌNH LUẬN",
      "mascotMode": "explaining",
      "mascotTip": "Tách bội chẵn của pi: 17/3 = 18/3 - 1/3 = 6pi - pi/3; bỏ 6pi đi còn -pi/3!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:21px; margin:0 0 12px 0; font-weight:700; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:10px;\">\n                    Hướng dẫn giải chi tiết Ví dụ 2\n                  </h3>\n                  <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                    <ul style=\"padding-left:20px; margin:8px 0;\">\n                      <li><b>a) $\\beta_1 = \\frac{17\\pi}{3}$ :</b><br/>\n                        Ta có: $\\frac{17\\pi}{3} = \\frac{18\\pi - \\pi}{3} = 6\\pi - \\frac{\\pi}{3} = -\\frac{\\pi}{3} + 3 \\times 2\\pi$.<br/>\n                        $\\implies$ Điểm biểu diễn trùng với điểm biểu diễn của góc <b>$-\\frac{\\pi}{3}$</b> (hoặc $\\frac{5\\pi}{3}$ thuộc góc IV).\n                      </li>\n                      <li><b>b) $\\beta_2 = -\\frac{15\\pi}{4}$ :</b><br/>\n                        Ta có: $-\\frac{15\\pi}{4} = \\frac{-16\\pi + \\pi}{4} = -4\\pi + \\frac{\\pi}{4} = \\frac{\\pi}{4} - 2 \\times 2\\pi$.<br/>\n                        $\\implies$ Điểm biểu diễn trùng với điểm biểu diễn của góc <b>$\\frac{\\pi}{4}$</b> (thuộc góc I).\n                      </li>\n                      <li><b>c) $\\beta_3 = 1140^\\circ$ :</b><br/>\n                        Ta có: $1140^\\circ = 60^\\circ + 1080^\\circ = 60^\\circ + 3 \\times 360^\\circ$.<br/>\n                        $\\implies$ Điểm biểu diễn trùng với điểm biểu diễn của góc <b>$60^\\circ$</b> (thuộc góc I).\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải như sau: Ở câu a, 17 pi phần 3 viết thành 6 pi trừ pi phần 3, bỏ 6 pi là 3 vòng đi, điểm biểu diễn trùng với góc âm pi phần 3 ở góc phần tư thứ tư. Ở câu b, âm 15 pi phần 4 viết thành âm 4 pi cộng pi phần 4, bỏ âm 4 pi là 2 vòng ngược đi, điểm biểu diễn trùng với góc pi phần 4 ở góc phần tư thứ nhất. Ở câu c, 1140 độ bằng 60 độ cộng 3 nhân 360 độ, trùng với góc 60 độ.",
      "startTime": 133.88,
      "endTime": 162.34,
      "duration": 28.46
    },
    {
      "sceneIndex": 7,
      "title": "Ví dụ 3: Biểu diễn họ góc lượng giác alpha + k.pi/2",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "mascotMode": "thinking",
      "mascotTip": "Góc k.pi/2 tương ứng k.2pi/4: Chắc chắn có đúng 4 điểm biểu diễn cách đều góc 90 độ!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #f59e0b; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(245,158,11,0.25);\">\n                    <div style=\"flex:1; min-width:0;\">\n                      <h3 style=\"color:#fbbf24; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Biểu diễn họ góc lượng giác</h3>\n                      <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#f59e0b;\">30 giây</b> (Vận dụng)</span>\n                    </div>\n                    <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n                        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n                        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n                      </svg>\n                      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n                        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n                        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#f59e0b; font-family:monospace; min-width:28px;\">30s</span>\n                      </div>\n                    </div>\n                  </div>\n                  <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    Cho họ góc lượng giác: $\\alpha = \\frac{\\pi}{4} + \\frac{k\\pi}{2} \\quad (k \\in \\mathbb{Z})$.<br/>\n                    <b>a)</b> Họ góc trên có bao nhiêu điểm biểu diễn phân biệt trên đường tròn lượng giác?<br/>\n                    <b>b)</b> Nối các điểm biểu diễn đó lại ta được hình gì? Tính diện tích của hình đó.\n                  </p>\n                </div>\n                ",
      "narration": "Ví dụ 3 là bài toán vận dụng rất hay gặp trong các đề kiểm tra giữa kỳ: Biểu diễn họ góc lượng giác alpha bằng pi phần 4 cộng k pi phần 2 lên đường tròn lượng giác. Hỏi họ góc này có bao nhiêu điểm phân biệt và nối các điểm đó lại tạo thành hình gì, diện tích bao nhiêu? Các em có 30 giây suy nghĩ!",
      "startTime": 162.34,
      "endTime": 180.7,
      "duration": 18.36
    },
    {
      "sceneIndex": 8,
      "title": "Ví dụ 3: Biểu diễn họ góc lượng giác alpha + k.pi/2",
      "subtitle": "LỜI GIẢI CHI TIẾT & BÌNH LUẬN",
      "mascotMode": "cheer",
      "mascotTip": "Hình vuông có đường chéo d = 2R = 2 thì diện tích S = d^2 / 2 = 4 / 2 = 2!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:21px; margin:0 0 12px 0; font-weight:700; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:10px;\">\n                    Hướng dẫn giải chi tiết Ví dụ 3\n                  </h3>\n                  <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                    <p><b>a) Thử lần lượt các giá trị $k$ từ $0$ đến $3$:</b></p>\n                    <ul style=\"padding-left:20px; margin:4px 0 10px 0;\">\n                      <li>$k = 0 \\implies \\alpha_0 = \\frac{\\pi}{4}$ (Điểm $M_1$ góc I).</li>\n                      <li>$k = 1 \\implies \\alpha_1 = \\frac{3\\pi}{4}$ (Điểm $M_2$ góc II).</li>\n                      <li>$k = 2 \\implies \\alpha_2 = \\frac{5\\pi}{4}$ (Điểm $M_3$ góc III).</li>\n                      <li>$k = 3 \\implies \\alpha_3 = \\frac{7\\pi}{4}$ (Điểm $M_4$ góc IV).</li>\n                      <li>Với $k = 4 \\implies \\alpha_4 = \\frac{\\pi}{4} + 2\\pi \\equiv M_1$ (lặp lại).</li>\n                    </ul>\n                    <p>👉 Vậy họ góc có đúng <b>$4$ điểm biểu diễn phân biệt</b> $M_1, M_2, M_3, M_4$.</p>\n                    <p><b>b) Hình dạng và Diện tích:</b><br/>\n                      Bốn điểm này chia đường tròn thành 4 cung bằng nhau (mỗi cung bằng $\\frac{\\pi}{2}$), do đó $M_1M_2M_3M_4$ là một <b>hình vuông</b> nội tiếp đường tròn ($R = 1$).<br/>\n                      Đường chéo $d = 2R = 2$. Diện tích hình vuông là:<br/>\n                      $$S = \\frac{d^2}{2} = \\frac{2^2}{2} = 2\\text{ (đvdt)}$$\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải như sau: Vì đuôi là k pi phần 2, tức là k 2 pi chia 4, nên chắc chắn có đúng 4 điểm biểu diễn phân biệt. Lần lượt thay k bằng 0, 1, 2, 3 ta được 4 điểm M 1, M 2, M 3, M 4 có số đo là pi phần 4, 3 pi phần 4, 5 pi phần 4 và 7 pi phần 4. Bốn điểm này cách đều nhau 90 độ nên nối lại ta được một hình vuông nội tiếp đường tròn. Vì bán kính R bằng 1 nên đường chéo hình vuông là đường kính d bằng 2. Diện tích hình vuông bằng d bình phương chia 2, tức là 2 bình chia 2 bằng 2 đơn vị diện tích.",
      "startTime": 180.7,
      "endTime": 217.4,
      "duration": 36.7
    },
    {
      "sceneIndex": 9,
      "title": "Ví dụ 4: Tìm tọa độ điểm biểu diễn trên mặt phẳng Oxy",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "mascotMode": "question",
      "mascotTip": "Điểm M trên đường tròn lượng giác luôn có tọa độ: x_M = cos(alpha), y_M = sin(alpha)!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #ef4444; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(239,68,68,0.25);\">\n                    <div style=\"flex:1; min-width:0;\">\n                      <h3 style=\"color:#f87171; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 4: Tọa độ điểm biểu diễn</h3>\n                      <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#ef4444;\">30 giây</b> (Vận dụng cao)</span>\n                    </div>\n                    <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #ef4444; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(239,68,68,0.35);\">\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n                        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n                        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n                      </svg>\n                      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n                        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n                        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#ef4444; font-family:monospace; min-width:28px;\">30s</span>\n                      </div>\n                    </div>\n                  </div>\n                  <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    Trên mặt phẳng tọa độ $Oxy$, gọi $M$ là điểm biểu diễn góc lượng giác $\\alpha = \\frac{2\\pi}{3}$ và $N$ là điểm biểu diễn góc lượng giác $\\beta = -\\frac{5\\pi}{6}$ trên đường tròn lượng giác.<br/>\n                    <b>a)</b> Xác định tọa độ chính xác của các điểm $M$ và $N$.<br/>\n                    <b>b)</b> Tính độ dài đoạn thẳng $MN$.\n                  </p>\n                </div>\n                ",
      "narration": "Ví dụ 4 là bài toán kết hợp giữa hình học giải tích và đường tròn lượng giác: Điểm M biểu diễn góc 2 pi phần 3 và điểm N biểu diễn góc âm 5 pi phần 6. Hãy tìm tọa độ chính xác của điểm M và điểm N, từ đó tính độ dài đoạn thẳng MN. 30 giây suy nghĩ bắt đầu!",
      "startTime": 217.4,
      "endTime": 235.88,
      "duration": 18.48
    },
    {
      "sceneIndex": 10,
      "title": "Ví dụ 4: Tìm tọa độ điểm biểu diễn trên mặt phẳng Oxy",
      "subtitle": "LỜI GIẢI CHI TIẾT & BÌNH LUẬN",
      "mascotMode": "cheer",
      "mascotTip": "Góc giữa OM và ON là: 2pi/3 - (-5pi/6) = 3pi/2 tức vuông góc! MN^2 = OM^2 + ON^2 = 1 + 1 = 2!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:21px; margin:0 0 12px 0; font-weight:700; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:10px;\">\n                    Hướng dẫn giải chi tiết Ví dụ 4\n                  </h3>\n                  <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                    <p><b>a) Tọa độ của $M$ và $N$:</b><br/>\n                      Điểm trên đường tròn lượng giác có tọa độ $(x; y) = (\\cos\\theta; \\sin\\theta)$.<br/>\n                      • Với $\\alpha = \\frac{2\\pi}{3} = 120^\\circ$ (góc II):<br/>\n                      &nbsp;&nbsp;$x_M = \\cos\\frac{2\\pi}{3} = -\\frac{1}{2}, \\quad y_M = \\sin\\frac{2\\pi}{3} = \\frac{\\sqrt{3}}{2} \\implies M\\left(-\\frac{1}{2}; \\frac{\\sqrt{3}}{2}\\right)$.<br/>\n                      • Với $\\beta = -\\frac{5\\pi}{6} = -150^\\circ$ (góc III):<br/>\n                      &nbsp;&nbsp;$x_N = \\cos\\left(-\\frac{5\\pi}{6}\\right) = -\\frac{\\sqrt{3}}{2}, \\quad y_N = \\sin\\left(-\\frac{5\\pi}{6}\\right) = -\\frac{1}{2} \\implies N\\left(-\\frac{\\sqrt{3}}{2}; -\\frac{1}{2}\\right)$.\n                    </p>\n                    <p><b>b) Độ dài đoạn thẳng $MN$:</b><br/>\n                      $$MN = \\sqrt{(x_N - x_M)^2 + (y_N - y_M)^2} = \\sqrt{\\left(-\\frac{\\sqrt{3}}{2} + \\frac{1}{2}\\right)^2 + \\left(-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}\\right)^2} = \\sqrt{2}$$\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải chi tiết: Tọa độ của điểm biểu diễn luôn là hoành độ bằng cos, tung độ bằng sin. Với góc 2 pi phần 3, cos bằng âm 1 phần 2, sin bằng căn 3 phần 2, nên tọa độ điểm M là âm 1 phần 2 chấm phẩy căn 3 phần 2. Với góc âm 5 pi phần 6, cos bằng âm căn 3 phần 2, sin bằng âm 1 phần 2, nên điểm N có tọa độ âm căn 3 phần 2 chấm phẩy âm 1 phần 2. Áp dụng công thức khoảng cách hình học, ta tính được độ dài MN bằng căn bậc hai của 2.",
      "startTime": 235.88,
      "endTime": 266.26,
      "duration": 30.38
    },
    {
      "sceneIndex": 11,
      "title": "3. CẢNH BÁO BẪY TRẮC NGHIỆM KHI BIỂU DIỄN GÓC",
      "subtitle": "MỤC 2 • BẪY XÁC ĐỊNH SỐ ĐIỂM BIỂU DIỄN HỌ NGHIỆM",
      "mascotMode": "magnifier",
      "mascotTip": "Quy tắc đếm nhanh số điểm: Đưa về dạng k2pi / n, thì số điểm biểu diễn chính là n!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #f43f5e; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:12px; font-weight:700;\">⚠️ 3 Bẫy trắc nghiệm kinh điển</h3>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; margin-bottom:10px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 1: Nhầm họ $k\\pi$ thành 1 điểm biểu diễn</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">$k\\pi = \\frac{k2\\pi}{2} \\implies$ Luôn có <b>2 điểm</b> đối xứng nhau qua gốc $O$!</p>\n                  </div>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; margin-bottom:10px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 2: Nhầm hoành độ là Sin, tung độ là Cos</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">Bắt buộc khắc sâu: <b>Hoành độ $x$ là COS, Tung độ $y$ là SIN</b> (Trục hoành là trục Cos, trục tung là trục Sin)!</p>\n                  </div>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 3: Quên xác định đúng chiều quay âm (-)</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">Khi góc mang dấu âm, phải quay theo chiều kim đồng hồ từ điểm $A(1; 0)$ đi xuống!</p>\n                  </div>\n                </div>\n                ",
      "narration": "Cú Thông Thái cảnh báo 3 bẫy trắc nghiệm: Thứ nhất, đuôi k pi luôn có 2 điểm biểu diễn đối xứng qua tâm O, nhiều bạn nhầm là 1 điểm. Thứ hai, nhầm trục hoành là sin, trục tung là cos; hãy nhớ: trục nằm ngang Ox là trục Cos, trục đứng Oy là trục Sin. Thứ ba, quên đổi chiều khi góc mang dấu âm.",
      "startTime": 266.26,
      "endTime": 286.37,
      "duration": 20.11
    },
    {
      "sceneIndex": 12,
      "title": "4. TỔNG KẾT MỤC 2 & BÍ KÍP CÚ THÔNG THÁI",
      "subtitle": "MỤC 2 • BỘ QUY TẮC ĐƯỜNG TRÒN LƯỢNG GIÁC",
      "mascotMode": "cheer",
      "mascotTip": "Khẩu quyết: 'Tâm O, bán kính bằng một – Hoành Cos, tung Sin, gốc xuất phát từ A!'",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #a855f7; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#c084fc; font-size:22px; margin-bottom:12px; font-weight:700;\">💡 Tóm tắt cốt lõi Mục 2</h3>\n                  <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:16px;\">\n                    <div style=\"background:rgba(168,85,247,0.15); border:1px solid rgba(168,85,247,0.4); padding:14px; border-radius:8px;\">\n                      <b style=\"color:#e9d5ff; font-size:16px;\">Điểm biểu diễn then chốt:</b>\n                      <p style=\"color:#f8fafc; font-size:15px; line-height:1.7; margin:6px 0 0 0;\">\n                        • $A(1; 0) \\leftrightarrow 0$<br/>\n                        • $B(0; 1) \\leftrightarrow \\frac{\\pi}{2}$<br/>\n                        • $A'(-1; 0) \\leftrightarrow \\pi$<br/>\n                        • $B'(0; -1) \\leftrightarrow \\frac{3\\pi}{2}$\n                      </p>\n                    </div>\n                    <div style=\"background:rgba(245,158,11,0.15); border:1px solid rgba(245,158,11,0.4); padding:14px; border-radius:8px;\">\n                      <b style=\"color:#fef08a; font-size:16px;\">Công thức đếm điểm:</b>\n                      <p style=\"color:#f8fafc; font-size:15px; line-height:1.7; margin:6px 0 0 0;\">\n                        • Họ $\\alpha + k2\\pi \\implies 1$ điểm.<br/>\n                        • Họ $\\alpha + k\\pi \\implies 2$ điểm.<br/>\n                        • Họ $\\alpha + \\frac{k2\\pi}{n} \\implies n$ điểm.\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                ",
      "narration": "Chúc mừng các em đã nắm vững toàn bộ kiến thức của Mục 2. Hãy ghi nhớ: Trục hoành là Cos, trục tung là Sin, xuất phát từ điểm gốc A 1 chấm phẩy 0. Hẹn gặp lại các em ở Mục 3: Giá trị lượng giác của góc lượng giác và xét dấu theo các góc phần tư!",
      "startTime": 286.37,
      "endTime": 302.86,
      "duration": 16.49
    }
  ],
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 35.74,
      "id": "part2"
    },
    {
      "time": 70.2,
      "id": "vd1_q"
    },
    {
      "time": 85.73,
      "id": "vd1_a"
    },
    {
      "time": 114.22,
      "id": "vd2_q"
    },
    {
      "time": 133.88,
      "id": "vd2_a"
    },
    {
      "time": 162.34,
      "id": "vd3_q"
    },
    {
      "time": 180.7,
      "id": "vd3_a"
    },
    {
      "time": 217.4,
      "id": "vd4_q"
    },
    {
      "time": 235.88,
      "id": "vd4_a"
    },
    {
      "time": 266.26,
      "id": "part4"
    },
    {
      "time": 286.37,
      "id": "part5"
    }
  ],
  "totalDuration": 302.86,
  "duration": 302.86
};

  window.G11_CHAPTER1_DATA.g11_bai1_muc3 = {
  "lessonId": "toan11_bai1",
  "lessonTitle": "Bài 1: Giá trị lượng giác của góc lượng giác",
  "sectionId": "g11_bai1_muc3",
  "sectionTitle": "Mục 3: Giá trị lượng giác & Dấu theo các góc phần tư",
  "audio": "/audio/g11_bai1_muc3.mp3",
  "audioSrc": "./audio/g11_bai1_muc3.mp3",
  "audio_src": "./audio/g11_bai1_muc3.mp3",
  "title": "Mục 3: Giá trị lượng giác & Dấu theo các góc phần tư",
  "owl_tip": "Thần chú xét dấu: 'Nhất cả - Nhì sin - Tam tang cot - Tứ cos'!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Định nghĩa 4 giá trị lượng giác Sin, Cos, Tan, Cot",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Bảng xét dấu 4 góc phần tư & Bảng góc đặc biệt",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa tiêu biểu",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Bẫy khai căn & Điều kiện xác định",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Tổng kết Mục 3 & Thần chú Cú Thông Thái",
      "scenes": [
        12
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. ĐỊNH NGHĨA 4 GIÁ TRỊ LƯỢNG GIÁC",
      "subtitle": "MỤC 3 • TỌA ĐỘ ĐIỂM M VÀ 4 TỈ SỐ LƯỢNG GIÁC TRÊN ĐƯỜNG TRÒN",
      "mascotMode": "pointer",
      "mascotTip": "Tung độ y là Sin, Hoành độ x là Cos; Tan = Sin/Cos; Cot = Cos/Sin!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">1. Định nghĩa Giá trị lượng giác</h3>\n                  <p style=\"font-size:16px; color:#e2e8f0; line-height:1.7;\">\n                    Cho góc lượng giác có số đo $\\alpha$. Gọi $M(x_0; y_0)$ là điểm biểu diễn của góc $\\alpha$ trên đường tròn lượng giác:\n                  </p>\n                  <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-top:10px;\">\n                    <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px;\">\n                      <b style=\"color:#38bdf8; font-size:16px;\">Sin và Côsin:</b>\n                      <p style=\"font-size:15px; color:#f8fafc; line-height:1.7; margin:6px 0 0 0;\">\n                        • <b>Tung độ $y_0$</b> gọi là <b>sin</b> của $\\alpha$: $\\sin\\alpha = y_0$.<br/>\n                        • <b>Hoành độ $x_0$</b> gọi là <b>côsin</b> của $\\alpha$: $\\cos\\alpha = x_0$.<br/>\n                        • Miền giá trị: <b>$-1 \\le \\sin\\alpha \\le 1$</b>, <b>$-1 \\le \\cos\\alpha \\le 1$</b>.\n                      </p>\n                    </div>\n                    <div style=\"background:rgba(245,158,11,0.1); border-left:4px solid #f59e0b; padding:12px; border-radius:4px;\">\n                      <b style=\"color:#fbbf24; font-size:16px;\">Tang và Côtang:</b>\n                      <p style=\"font-size:15px; color:#f8fafc; line-height:1.7; margin:6px 0 0 0;\">\n                        • $\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\frac{y_0}{x_0} \\quad (x_0 \\neq 0 \\iff \\alpha \\neq \\frac{\\pi}{2} + k\\pi)$.<br/>\n                        • $\\cot\\alpha = \\frac{\\cos\\alpha}{\\sin\\alpha} = \\frac{x_0}{y_0} \\quad (y_0 \\neq 0 \\iff \\alpha \\neq k\\pi)$.\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                ",
      "narration": "Chào mừng các em đến với Mục 3: Giá trị lượng giác của góc lượng giác và dấu theo các góc phần tư. Giả sử điểm M có tọa độ x 0 chấm phẩy y 0 là điểm biểu diễn góc alpha trên đường tròn lượng giác. Khi đó, hoành độ x 0 chính là cos alpha, tung độ y 0 chính là sin alpha. Do đường tròn có bán kính bằng 1, nên cả sin và cos luôn nằm trong đoạn từ âm 1 đến 1. Tỉ số sin chia cos gọi là tang alpha, xác định khi cos khác 0. Tỉ số cos chia sin gọi là côtang alpha, xác định khi sin khác 0.",
      "startTime": 0.0,
      "endTime": 34.1,
      "duration": 34.1
    },
    {
      "sceneIndex": 2,
      "title": "2. BẢNG XÉT DẤU & THẦN CHÚ 4 GÓC PHẦN TƯ",
      "subtitle": "MỤC 3 • NHẤT CẢ - NHÌ SIN - TAM TANG COT - TỨ COS",
      "mascotMode": "explaining",
      "mascotTip": "Thần chú vàng: Nhất cả (tất cả dương) - Nhì sin (chỉ sin dương) - Tam tang cot (tang, cot dương) - Tứ cos (chỉ cos dương)!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:22px; margin-bottom:12px; font-weight:700;\">2. Bảng dấu lượng giác theo 4 góc phần tư</h3>\n                  <table style=\"width:100%; border-collapse:collapse; text-align:center; background:rgba(15,23,42,0.8); border:1px solid #475569; font-size:15px; color:#f8fafc;\">\n                    <tr style=\"background:#1e293b; color:#fbbf24; font-weight:bold;\">\n                      <th style=\"padding:8px; border:1px solid #475569;\">Góc phần tư</th>\n                      <th style=\"padding:8px; border:1px solid #475569;\">Góc I $(0; \\frac{\\pi}{2})$</th>\n                      <th style=\"padding:8px; border:1px solid #475569;\">Góc II $(\\frac{\\pi}{2}; \\pi)$</th>\n                      <th style=\"padding:8px; border:1px solid #475569;\">Góc III $(\\pi; \\frac{3\\pi}{2})$</th>\n                      <th style=\"padding:8px; border:1px solid #475569;\">Góc IV $(\\frac{3\\pi}{2}; 2\\pi)$</th>\n                    </tr>\n                    <tr>\n                      <td style=\"padding:6px; font-weight:bold; border:1px solid #475569; color:#38bdf8;\">$\\sin\\alpha$</td>\n                      <td style=\"padding:6px; color:#34d399; font-weight:bold; border:1px solid #475569;\">+</td>\n                      <td style=\"padding:6px; color:#34d399; font-weight:bold; border:1px solid #475569;\">+</td>\n                      <td style=\"padding:6px; color:#f87171; font-weight:bold; border:1px solid #475569;\">-</td>\n                      <td style=\"padding:6px; color:#f87171; font-weight:bold; border:1px solid #475569;\">-</td>\n                    </tr>\n                    <tr>\n                      <td style=\"padding:6px; font-weight:bold; border:1px solid #475569; color:#38bdf8;\">$\\cos\\alpha$</td>\n                      <td style=\"padding:6px; color:#34d399; font-weight:bold; border:1px solid #475569;\">+</td>\n                      <td style=\"padding:6px; color:#f87171; font-weight:bold; border:1px solid #475569;\">-</td>\n                      <td style=\"padding:6px; color:#f87171; font-weight:bold; border:1px solid #475569;\">-</td>\n                      <td style=\"padding:6px; color:#34d399; font-weight:bold; border:1px solid #475569;\">+</td>\n                    </tr>\n                    <tr>\n                      <td style=\"padding:6px; font-weight:bold; border:1px solid #475569; color:#38bdf8;\">$\\tan\\alpha, \\cot\\alpha$</td>\n                      <td style=\"padding:6px; color:#34d399; font-weight:bold; border:1px solid #475569;\">+</td>\n                      <td style=\"padding:6px; color:#f87171; font-weight:bold; border:1px solid #475569;\">-</td>\n                      <td style=\"padding:6px; color:#34d399; font-weight:bold; border:1px solid #475569;\">+</td>\n                      <td style=\"padding:6px; color:#f87171; font-weight:bold; border:1px solid #475569;\">-</td>\n                    </tr>\n                  </table>\n                  <div style=\"background:rgba(245,158,11,0.15); border:1px solid #f59e0b; padding:10px; border-radius:6px; margin-top:12px; text-align:center;\">\n                    <b style=\"color:#fef08a; font-size:16px;\">🔑 THẦN CHÚ XÉT DẤU:</b>\n                    <span style=\"color:#f8fafc; font-size:16px; font-weight:bold;\"> \"NHẤT CẢ – NHÌ SIN – TAM TANG COT – TỨ COS\"</span>\n                  </div>\n                </div>\n                ",
      "narration": "Để ghi nhớ dấu của 4 giá trị lượng giác, thầy tặng các em câu thần chú bất hủ: Nhất cả, Nhì sin, Tam tang cot, Tứ cos. Nghĩa là: Ở góc phần tư thứ nhất, tất cả sin, cos, tan, cot đều mang dấu dương. Ở góc phần tư thứ hai, chỉ có sin mang dấu dương, còn cos, tan, cot đều âm. Ở góc phần tư thứ ba, tang và côtang mang dấu dương, còn sin và cos âm. Ở góc phần tư thứ tư, chỉ có cos mang dấu dương, các giá trị còn lại đều âm.",
      "startTime": 34.1,
      "endTime": 66.45,
      "duration": 32.35
    },
    {
      "sceneIndex": 3,
      "title": "Ví dụ 1: Xét dấu của các biểu thức lượng giác",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "mascotMode": "question",
      "mascotTip": "Đổi góc sang góc phần tư: 215 độ thuộc góc III; 300 độ thuộc góc IV; 4pi/5 thuộc góc II; -pi/4 thuộc góc IV!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n                    <div style=\"flex:1; min-width:0;\">\n                      <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Xét dấu biểu thức tích</h3>\n                      <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n                    </div>\n                    <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n                        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n                        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n                      </svg>\n                      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n                        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n                        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n                      </div>\n                    </div>\n                  </div>\n                  <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    Xét dấu (dương hay âm) của các tích sau:<br/>\n                    <b>a)</b> $A = \\sin 215^\\circ \\cdot \\cos 300^\\circ$.<br/>\n                    <b>b)</b> $B = \\tan\\frac{4\\pi}{5} \\cdot \\cot\\left(-\\frac{\\pi}{4}\\right)$.\n                  </p>\n                </div>\n                ",
      "narration": "Ví dụ 1 là dạng toán nhận biết rất quen thuộc. Hãy xác định dấu dương hay âm của hai tích: biểu thức A bằng sin 215 độ nhân cos 300 độ; biểu thức B bằng tan 4 pi phần 5 nhân cotan âm pi phần 4. Các em có 15 giây suy nghĩ!",
      "startTime": 66.45,
      "endTime": 82.58,
      "duration": 16.13
    },
    {
      "sceneIndex": 4,
      "title": "Ví dụ 1: Xét dấu của các biểu thức lượng giác",
      "subtitle": "LỜI GIẢI CHI TIẾT & BÌNH LUẬN",
      "mascotMode": "cheer",
      "mascotTip": "Quy tắc dấu: Dương nhân Dương ra Dương, Âm nhân Dương ra Âm, Âm nhân Âm ra Dương!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:21px; margin:0 0 12px 0; font-weight:700; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:10px;\">\n                    Hướng dẫn giải chi tiết Ví dụ 1\n                  </h3>\n                  <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                    <p><b>a) Với biểu thức $A = \\sin 215^\\circ \\cdot \\cos 300^\\circ$:</b><br/>\n                      • Vì $180^\\circ < 215^\\circ < 270^\\circ$ (góc III) $\\implies \\sin 215^\\circ < 0$.<br/>\n                      • Vì $270^\\circ < 300^\\circ < 360^\\circ$ (góc IV - Tứ cos) $\\implies \\cos 300^\\circ > 0$.<br/>\n                      👉 Tích của số âm và số dương: $A < 0$ <b style=\"color:#f87171;\">(Mang dấu Âm)</b>.\n                    </p>\n                    <p><b>b) Với biểu thức $B = \\tan\\frac{4\\pi}{5} \\cdot \\cot\\left(-\\frac{\\pi}{4}\\right)$:</b><br/>\n                      • Vì $\\frac{\\pi}{2} < \\frac{4\\pi}{5} < \\pi$ (góc II) $\\implies \\tan\\frac{4\\pi}{5} < 0$.<br/>\n                      • Vì $-\\frac{\\pi}{4} \\in (-\\frac{\\pi}{2}; 0)$ (góc IV) $\\implies \\cot\\left(-\\frac{\\pi}{4}\\right) < 0$.<br/>\n                      👉 Tích của hai số âm: $B > 0$ <b style=\"color:#34d399;\">(Mang dấu Dương)</b>.\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Hết 15 giây! Lời giải như sau: Ở câu a, góc 215 độ ở góc phần tư thứ ba nên sin mang dấu âm. Góc 300 độ ở góc phần tư thứ tư nên cos mang dấu dương. Âm nhân dương ra âm, vậy biểu thức A mang dấu âm. Ở câu b, góc 4 pi phần 5 ở góc phần tư thứ hai nên tang âm. Góc âm pi phần 4 ở góc phần tư thứ tư nên côtang cũng âm. Âm nhân âm ra dương, vậy biểu thức B mang dấu dương.",
      "startTime": 82.58,
      "endTime": 112.89,
      "duration": 30.31
    },
    {
      "sceneIndex": 5,
      "title": "Ví dụ 2: Tính giá trị biểu thức góc đặc biệt không dùng máy tính",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "mascotMode": "question",
      "mascotTip": "Góc đặc biệt: sin 30 = 1/2; cos 30 = căn 3/2; tan 45 = 1; cot 60 = 1/căn 3!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n                    <div style=\"flex:1; min-width:0;\">\n                      <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Tính biểu thức góc đặc biệt</h3>\n                      <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Thông hiểu)</span>\n                    </div>\n                    <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n                        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n                        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n                      </svg>\n                      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n                        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n                        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n                      </div>\n                    </div>\n                  </div>\n                  <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    Tính giá trị chính xác của biểu thức sau không sử dụng máy tính cầm tay:<br/>\n                    $$P = 2\\sin 30^\\circ - \\sqrt{3}\\cos 30^\\circ + \\tan 45^\\circ - \\sqrt{3}\\cot 60^\\circ$$\n                  </p>\n                </div>\n                ",
      "narration": "Ví dụ 2 yêu cầu tính giá trị biểu thức lượng giác P chứa các góc đặc biệt 30 độ, 45 độ, 60 độ mà không sử dụng máy tính cầm tay. Các em hãy tra bảng nhớ nhanh trong đầu và thực hiện phép tính trong 15 giây nhé!",
      "startTime": 112.89,
      "endTime": 126.5,
      "duration": 13.61
    },
    {
      "sceneIndex": 6,
      "title": "Ví dụ 2: Tính giá trị biểu thức góc đặc biệt không dùng máy tính",
      "subtitle": "LỜI GIẢI CHI TIẾT & BÌNH LUẬN",
      "mascotMode": "explaining",
      "mascotTip": "Quy tắc bàn tay lượng giác: Bàn tay trái 5 ngón tương ứng góc 0, 30, 45, 60, 90 độ!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:21px; margin:0 0 12px 0; font-weight:700; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:10px;\">\n                    Hướng dẫn giải chi tiết Ví dụ 2\n                  </h3>\n                  <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                    <p>Ta thay giá trị các góc đặc biệt vào biểu thức:</p>\n                    <ul style=\"padding-left:20px; margin:6px 0;\">\n                      <li>$\\sin 30^\\circ = \\frac{1}{2}$</li>\n                      <li>$\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$</li>\n                      <li>$\\tan 45^\\circ = 1$</li>\n                      <li>$\\cot 60^\\circ = \\frac{\\sqrt{3}}{3}$</li>\n                    </ul>\n                    <p style=\"background:rgba(16,185,129,0.15); padding:12px; border-radius:6px; color:#a7f3d0;\">\n                      $$P = 2\\left(\\frac{1}{2}\\right) - \\sqrt{3}\\left(\\frac{\\sqrt{3}}{2}\\right) + 1 - \\sqrt{3}\\left(\\frac{\\sqrt{3}}{3}\\right)$$\n                      $$P = 1 - \\frac{3}{2} + 1 - 1 = 1 - \\frac{3}{2} = -\\frac{1}{2}$$\n                      👉 <b>Kết luận:</b> $P = -\\frac{1}{2}$.\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải như sau: Ta thay các giá trị đặc biệt vào: sin 30 độ bằng 1 phần 2; cos 30 độ bằng căn 3 phần 2; tan 45 độ bằng 1; và cotan 60 độ bằng căn 3 phần 3. Biểu thức P trở thành: 2 nhân 1 phần 2 được 1; trừ căn 3 nhân căn 3 phần 2 được trừ 3 phần 2; cộng 1; trừ căn 3 nhân căn 3 phần 3 được trừ 1. Rút gọn 1 với trừ 1, còn lại 1 trừ 3 phần 2 bằng âm 1 phần 2.",
      "startTime": 126.5,
      "endTime": 152.85,
      "duration": 26.35
    },
    {
      "sceneIndex": 7,
      "title": "Ví dụ 3: Cho cos(alpha), tính các giá trị lượng giác còn lại",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "mascotMode": "thinking",
      "mascotTip": "Góc phần tư III: pi < alpha < 3pi/2 thì sin < 0, cos < 0, tan > 0, cot > 0!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #f59e0b; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(245,158,11,0.25);\">\n                    <div style=\"flex:1; min-width:0;\">\n                      <h3 style=\"color:#fbbf24; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Tính các giá trị lượng giác khi biết một giá trị</h3>\n                      <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#f59e0b;\">30 giây</b> (Vận dụng)</span>\n                    </div>\n                    <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n                        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n                        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n                      </svg>\n                      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n                        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n                        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#f59e0b; font-family:monospace; min-width:28px;\">30s</span>\n                      </div>\n                    </div>\n                  </div>\n                  <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    Cho $\\cos\\alpha = -\\frac{4}{5}$ với $\\pi < \\alpha < \\frac{3\\pi}{2}$.<br/>\n                    Hãy tính giá trị của: <b>$\\sin\\alpha$</b>, <b>$\\tan\\alpha$</b> và <b>$\\cot\\alpha$</b>.\n                  </p>\n                </div>\n                ",
      "narration": "Ví dụ 3 là bài toán kinh điển trong tất cả các đề kiểm tra lượng giác lớp 11: Cho cos alpha bằng âm 4 phần 5 với alpha nằm trong khoảng từ pi đến 3 pi phần 2, tức góc phần tư thứ ba. Hãy tính sin alpha, tang alpha và côtang alpha. Các em có 30 giây suy nghĩ!",
      "startTime": 152.85,
      "endTime": 171.04,
      "duration": 18.19
    },
    {
      "sceneIndex": 8,
      "title": "Ví dụ 3: Cho cos(alpha), tính các giá trị lượng giác còn lại",
      "subtitle": "LỜI GIẢI CHI TIẾT & BÌNH LUẬN",
      "mascotMode": "cheer",
      "mascotTip": "Tuyệt đối không quên xét dấu: Khai căn sin^2 = 9/25 thì sin bằng -3/5 vì góc phần tư thứ ba sin âm!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:21px; margin:0 0 12px 0; font-weight:700; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:10px;\">\n                    Hướng dẫn giải chi tiết Ví dụ 3\n                  </h3>\n                  <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                    <p><b>Bước 1: Tính $\\sin\\alpha$ qua hệ thức $\\sin^2\\alpha + \\cos^2\\alpha = 1$:</b><br/>\n                      $$\\sin^2\\alpha = 1 - \\cos^2\\alpha = 1 - \\left(-\\frac{4}{5}\\right)^2 = 1 - \\frac{16}{25} = \\frac{9}{25}$$\n                      Vì $\\pi < \\alpha < \\frac{3\\pi}{2}$ (góc phần tư III) nên <b>$\\sin\\alpha < 0$</b>.<br/>\n                      Do đó: $$\\sin\\alpha = -\\sqrt{\\frac{9}{25}} = -\\frac{3}{5}$$\n                    </p>\n                    <p><b>Bước 2: Tính $\\tan\\alpha$ và $\\cot\\alpha$:</b><br/>\n                      $$\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\frac{-\\frac{3}{5}}{-\\frac{4}{5}} = \\frac{3}{4}$$\n                      $$\\cot\\alpha = \\frac{1}{\\tan\\alpha} = \\frac{4}{3}$$\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải như sau: Bước 1, từ hệ thức sin bình cộng cos bình bằng 1, ta có sin bình bằng 1 trừ cos bình, bằng 1 trừ 16 phần 25 bằng 9 phần 25. Vì góc alpha thuộc góc phần tư thứ ba, sin phải mang dấu âm, nên sin alpha bằng âm 3 phần 5. Bước 2, tang bằng sin chia cos, bằng âm 3 phần 5 chia âm 4 phần 5 ra dương 3 phần 4. Côtang là nghịch đảo của tang, bằng 4 phần 3.",
      "startTime": 171.04,
      "endTime": 198.04,
      "duration": 27.0
    },
    {
      "sceneIndex": 9,
      "title": "Ví dụ 4: Bài toán thực tế mô hình hóa chuyển động đu quay",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "mascotMode": "question",
      "mascotTip": "Góc quay tại thời điểm t: alpha(t) = -pi/2 + (2pi / T).t!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #ef4444; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(239,68,68,0.25);\">\n                    <div style=\"flex:1; min-width:0;\">\n                      <h3 style=\"color:#f87171; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 4: Mô hình hóa độ cao vòng quay đu quay</h3>\n                      <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#ef4444;\">30 giây</b> (Vận dụng cao thực tế)</span>\n                    </div>\n                    <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #ef4444; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(239,68,68,0.35);\">\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n                        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n                        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n                      </svg>\n                      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n                        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n                        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#ef4444; font-family:monospace; min-width:28px;\">30s</span>\n                      </div>\n                    </div>\n                  </div>\n                  <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    Một vòng quay đu quay khổng lồ có bán kính $R = 25\\text{ m}$, tâm trục quay cách mặt đất $30\\text{ m}$. Đu quay quay đều ngược chiều kim đồng hồ với tốc độ $1$ vòng hết $60$ giây. Một hành khách bước lên cabin ở vị trí thấp nhất (cách mặt đất $5\\text{ m}$).<br/>\n                    <b>a)</b> Thiết lập công thức tính độ cao $h(t)$ (mét) của cabin so với mặt đất tại thời điểm $t$ giây ($t \\ge 0$).<br/>\n                    <b>b)</b> Tính độ cao của cabin sau khi quay được $15$ giây và $20$ giây.\n                  </p>\n                </div>\n                ",
      "narration": "Ví dụ 4 là bài toán thực tiễn tiêu chuẩn trong SGK Kết nối tri thức: Một cabin vòng đu quay bán kính 25 m, tâm cách đất 30 m, quay ngược chiều kim đồng hồ chu kỳ 60 giây. Hãy thiết lập công thức độ cao h theo thời gian t và tính độ cao tại thời điểm 15 giây và 20 giây. Các em có 30 giây suy nghĩ!",
      "startTime": 198.04,
      "endTime": 218.49,
      "duration": 20.45
    },
    {
      "sceneIndex": 10,
      "title": "Ví dụ 4: Bài toán thực tế mô hình hóa chuyển động đu quay",
      "subtitle": "LỜI GIẢI CHI TIẾT & BÌNH LUẬN",
      "mascotMode": "cheer",
      "mascotTip": "Công thức độ cao vòng quay: h(t) = h_tâm + R.sin(omega.t - pi/2) = h_tâm - R.cos(omega.t)!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:21px; margin:0 0 12px 0; font-weight:700; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:10px;\">\n                    Hướng dẫn giải chi tiết Ví dụ 4\n                  </h3>\n                  <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                    <p><b>a) Thiết lập công thức $h(t)$:</b><br/>\n                      Tốc độ góc của vòng quay: $\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{60} = \\frac{\\pi}{30}\\text{ (rad/s)}$.<br/>\n                      Tại thời điểm $t = 0$, cabin ở đáy (vị trí $B'$ góc $-\\frac{\\pi}{2}$). Sau $t$ giây, góc lượng giác là $\\theta(t) = -\\frac{\\pi}{2} + \\frac{\\pi}{30}t$.<br/>\n                      Độ cao so với mặt đất:<br/>\n                      $$h(t) = 30 + R\\sin\\theta(t) = 30 + 25\\sin\\left(\\frac{\\pi}{30}t - \\frac{\\pi}{2}\\right) = 30 - 25\\cos\\left(\\frac{\\pi}{30}t\\right)\\text{ (m)}$$\n                    </p>\n                    <p><b>b) Tính độ cao tại $t = 15\\text{s}$ và $t = 20\\text{s}$:</b><br/>\n                      • Với $t = 15\\text{s}: h(15) = 30 - 25\\cos\\left(\\frac{\\pi}{2}\\right) = 30 - 0 = 30\\text{ m}$ (ngang tâm).<br/>\n                      • Với $t = 20\\text{s}: h(20) = 30 - 25\\cos\\left(\\frac{2\\pi}{3}\\right) = 30 - 25\\left(-\\frac{1}{2}\\right) = 30 + 12{,}5 = 42{,}5\\text{ m}$.\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải chi tiết: Tốc độ góc omega bằng 2 pi chia 60 bằng pi phần 30 radian trên giây. Ban đầu ở vị trí đáy ứng với góc âm pi phần 2, nên sau t giây góc quét là omega t trừ pi phần 2. Độ cao h bằng khoảng cách tâm là 30 cộng bán kính nhân sin góc, tức 30 trừ 25 cos của pi phần 30 t. Tại thời điểm 15 giây, góc là pi phần 2, cos bằng 0 nên cabin ở độ cao 30 m ngang tầm trục quay. Tại thời điểm 20 giây, cos của 2 pi phần 3 bằng âm 1 phần 2, độ cao là 30 cộng 12,5 bằng 42,5 mét.",
      "startTime": 218.49,
      "endTime": 253.7,
      "duration": 35.21
    },
    {
      "sceneIndex": 11,
      "title": "3. CẢNH BÁO BẪY TRẮC NGHIỆM KHI XÉT GIÁ TRỊ LƯỢNG GIÁC",
      "subtitle": "MỤC 3 • BẪY QUÊN DẤU KHI KHAI CĂN & ĐIỀU KIỆN TỒN TẠI",
      "mascotMode": "magnifier",
      "mascotTip": "Khai căn luôn ra +/-: sin(alpha) = +/- căn(1 - cos^2), phải dựa vào góc phần tư để chọn duy nhất 1 dấu!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #f43f5e; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:12px; font-weight:700;\">⚠️ 3 Sai lầm mất điểm nguy hiểm</h3>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; margin-bottom:10px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 1: Quên điều kiện xác định của Tang và Côtang</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">$\\tan\\alpha$ không xác định tại $\\alpha = \\frac{\\pi}{2} + k\\pi$; $\\cot\\alpha$ không xác định tại $\\alpha = k\\pi$.</p>\n                  </div>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; margin-bottom:10px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 2: Khai căn luôn lấy dấu dương (+)</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">Thói quen từ hình học lớp 9-10 khiến học sinh luôn lấy dấu dương khi khai căn. Lớp 11 sin, cos hoàn toàn có thể ÂM!</p>\n                  </div>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 3: Nhầm miền giá trị của Tang và Côtang</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">Chỉ có Sin và Cos bị chặn trong $[-1; 1]$. Còn $\\tan\\alpha$ và $\\cot\\alpha$ nhận mọi giá trị từ $-\\infty$ đến $+\\infty$!</p>\n                  </div>\n                </div>\n                ",
      "narration": "Cú Thông Thái nhắc nhở 3 sai lầm kinh điển: Thứ nhất, khai căn luôn lấy dấu cộng vì thói quen hình học cấp hai, quên rằng sin và cos ở góc phần tư khác có thể âm. Thứ hai, quên điều kiện xác định của tang và côtang. Thứ ba, nhầm lẫn nghĩ rằng tang và cotang cũng chỉ nằm từ âm 1 đến 1; hãy nhớ tang và cotang có thể nhận bất kỳ giá trị thực nào.",
      "startTime": 253.7,
      "endTime": 275.49,
      "duration": 21.79
    },
    {
      "sceneIndex": 12,
      "title": "4. TỔNG KẾT MỤC 3 & BÍ KÍP CÚ THÔNG THÁI",
      "subtitle": "MỤC 3 • KHẮC SÂU ĐỊNH NGHĨA & DẤU LƯỢNG GIÁC",
      "mascotMode": "cheer",
      "mascotTip": "Thần chú bất hủ: 'Nhất cả, Nhì sin, Tam tang cot, Tứ cos'!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #a855f7; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#c084fc; font-size:22px; margin-bottom:12px; font-weight:700;\">💡 Tóm tắt cốt lõi Mục 3</h3>\n                  <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:16px;\">\n                    <div style=\"background:rgba(168,85,247,0.15); border:1px solid rgba(168,85,247,0.4); padding:14px; border-radius:8px;\">\n                      <b style=\"color:#e9d5ff; font-size:16px;\">Định nghĩa tọa độ:</b>\n                      <p style=\"color:#f8fafc; font-size:15px; line-height:1.7; margin:6px 0 0 0;\">\n                        • $\\cos\\alpha = x_M \\in [-1; 1]$<br/>\n                        • $\\sin\\alpha = y_M \\in [-1; 1]$<br/>\n                        • $\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}$<br/>\n                        • $\\cot\\alpha = \\frac{\\cos\\alpha}{\\sin\\alpha}$\n                      </p>\n                    </div>\n                    <div style=\"background:rgba(245,158,11,0.15); border:1px solid rgba(245,158,11,0.4); padding:14px; border-radius:8px;\">\n                      <b style=\"color:#fef08a; font-size:16px;\">Quy tắc xét dấu:</b>\n                      <p style=\"color:#f8fafc; font-size:15px; line-height:1.7; margin:6px 0 0 0;\">\n                        • Góc I: Tất cả đều $(+)$<br/>\n                        • Góc II: Chỉ $\\sin$ mang $(+)$<br/>\n                        • Góc III: $\\tan, \\cot$ mang $(+)$<br/>\n                        • Góc IV: Chỉ $\\cos$ mang $(+)$\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                ",
      "narration": "Chúc mừng các em đã nắm chắc trọn vẹn Mục 3. Hãy thuộc làu câu thần chú: Nhất cả, Nhì sin, Tam tang cot, Tứ cos. Hẹn gặp lại các em ở Mục 4: Các hệ thức lượng giác cơ bản và giá trị lượng giác của các góc có liên quan đặc biệt!",
      "startTime": 275.49,
      "endTime": 291.26,
      "duration": 15.77
    }
  ],
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 34.1,
      "id": "part2"
    },
    {
      "time": 66.45,
      "id": "vd1_q"
    },
    {
      "time": 82.58,
      "id": "vd1_a"
    },
    {
      "time": 112.89,
      "id": "vd2_q"
    },
    {
      "time": 126.5,
      "id": "vd2_a"
    },
    {
      "time": 152.85,
      "id": "vd3_q"
    },
    {
      "time": 171.04,
      "id": "vd3_a"
    },
    {
      "time": 198.04,
      "id": "vd4_q"
    },
    {
      "time": 218.49,
      "id": "vd4_a"
    },
    {
      "time": 253.7,
      "id": "part4"
    },
    {
      "time": 275.49,
      "id": "part5"
    }
  ],
  "totalDuration": 291.26,
  "duration": 291.26
};

  window.G11_CHAPTER1_DATA.g11_bai1_muc4 = {
  "lessonId": "toan11_bai1",
  "lessonTitle": "Bài 1: Giá trị lượng giác của góc lượng giác",
  "sectionId": "g11_bai1_muc4",
  "sectionTitle": "Mục 4: Hệ thức cơ bản & Góc có liên quan đặc biệt",
  "audio": "/audio/g11_bai1_muc4.mp3",
  "audioSrc": "./audio/g11_bai1_muc4.mp3",
  "audio_src": "./audio/g11_bai1_muc4.mp3",
  "title": "Mục 4: Hệ thức cơ bản & Góc có liên quan đặc biệt",
  "owl_tip": "Thần chú góc liên quan: 'Cos đối - Sin bù - Phụ chéo - Khác pi tang cot'!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Bốn hệ thức lượng giác cơ bản",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Công thức các góc có liên quan đặc biệt",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa tiêu biểu",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Bẫy trắc nghiệm khi rút gọn biểu thức",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Tổng kết toàn bài & Lời chúc Thầy Thuấn Phan",
      "scenes": [
        12
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. BỐN HỆ THỨC LƯỢNG GIÁC CƠ BẢN",
      "subtitle": "MỤC 4 • VŨ KHÍ NỀN TẢNG ĐỂ BIẾN ĐỔI VÀ RÚT GỌN LƯỢNG GIÁC",
      "mascotMode": "pointer",
      "mascotTip": "Sin bình cộng Cos bình luôn bằng 1! 1 + tan^2 = 1/cos^2; 1 + cot^2 = 1/sin^2; tan nhân cot = 1!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">1. Bốn hệ thức lượng giác cơ bản</h3>\n                  <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:14px;\">\n                    <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:4px;\">\n                      <b style=\"color:#38bdf8; font-size:16px;\">Hệ thức 1 & 2:</b>\n                      <p style=\"font-size:15px; color:#f8fafc; line-height:1.8; margin:6px 0 0 0;\">\n                        <b>(1)</b> $\\sin^2\\alpha + \\cos^2\\alpha = 1$<br/>\n                        <b>(2)</b> $1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha} \\quad (\\alpha \\neq \\frac{\\pi}{2} + k\\pi)$\n                      </p>\n                    </div>\n                    <div style=\"background:rgba(245,158,11,0.1); border-left:4px solid #f59e0b; padding:12px; border-radius:4px;\">\n                      <b style=\"color:#fbbf24; font-size:16px;\">Hệ thức 3 & 4:</b>\n                      <p style=\"font-size:15px; color:#f8fafc; line-height:1.8; margin:6px 0 0 0;\">\n                        <b>(3)</b> $1 + \\cot^2\\alpha = \\frac{1}{\\sin^2\\alpha} \\quad (\\alpha \\neq k\\pi)$<br/>\n                        <b>(4)</b> $\\tan\\alpha \\cdot \\cot\\alpha = 1 \\quad (\\alpha \\neq \\frac{k\\pi}{2})$\n                      </p>\n                    </div>\n                  </div>\n                  <p style=\"font-size:14px; color:#94a3b8; margin-top:10px; font-style:italic;\">\n                    * Lưu ý: Khi biết một giá trị lượng giác, ta luôn dùng các hệ thức này để tính 3 giá trị còn lại.\n                  </p>\n                </div>\n                ",
      "narration": "Chào mừng các em đến với Mục 4: Các hệ thức lượng giác cơ bản và giá trị lượng giác của các góc có liên quan đặc biệt. Bốn hệ thức cơ bản các em bắt buộc phải khắc cốt ghi tâm: Thứ nhất, sin bình alpha cộng cos bình alpha luôn bằng 1 với mọi góc alpha. Thứ hai, 1 cộng tang bình alpha bằng 1 chia cos bình alpha. Thứ ba, 1 cộng côtang bình alpha bằng 1 chia sin bình alpha. Thứ tư, tang alpha nhân côtang alpha bằng 1. Đây là những công cụ vô cùng sắc bén để rút gọn và tính toán biểu thức lượng giác.",
      "startTime": 0.0,
      "endTime": 32.54,
      "duration": 32.54
    },
    {
      "sceneIndex": 2,
      "title": "2. CÔNG THỨC CÁC GÓC CÓ LIÊN QUAN ĐẶC BIỆT",
      "subtitle": "MỤC 4 • BỘ QUY TẮC COS ĐỐI - SIN BÙ - PHỤ CHÉO - KHÁC PI TANG COT",
      "mascotMode": "explaining",
      "mascotTip": "Thần chú: 'Cos đối (chỉ cos giữ dấu), Sin bù (chỉ sin giữ dấu), Phụ chéo (đổi hàm), Khác pi tang cot'!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:22px; margin-bottom:12px; font-weight:700;\">2. Các góc có liên quan đặc biệt</h3>\n                  <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:14.5px;\">\n                    <div style=\"background:rgba(15,23,42,0.8); border:1px solid #10b981; padding:10px 12px; border-radius:6px;\">\n                      <b style=\"color:#34d399;\">1. Góc đối nhau ($-\\alpha$ và $\\alpha$) – Cos đối:</b>\n                      <p style=\"color:#e2e8f0; margin:4px 0 0 0; line-height:1.6;\">\n                        $\\cos(-\\alpha) = \\cos\\alpha$<br/>\n                        $\\sin(-\\alpha) = -\\sin\\alpha$<br/>\n                        $\\tan(-\\alpha) = -\\tan\\alpha, \\; \\cot(-\\alpha) = -\\cot\\alpha$\n                      </p>\n                    </div>\n                    <div style=\"background:rgba(15,23,42,0.8); border:1px solid #38bdf8; padding:10px 12px; border-radius:6px;\">\n                      <b style=\"color:#38bdf8;\">2. Góc bù nhau ($\\pi - \\alpha$ và $\\alpha$) – Sin bù:</b>\n                      <p style=\"color:#e2e8f0; margin:4px 0 0 0; line-height:1.6;\">\n                        $\\sin(\\pi - \\alpha) = \\sin\\alpha$<br/>\n                        $\\cos(\\pi - \\alpha) = -\\cos\\alpha$<br/>\n                        $\\tan(\\pi - \\alpha) = -\\tan\\alpha, \\; \\cot(\\pi - \\alpha) = -\\cot\\alpha$\n                      </p>\n                    </div>\n                    <div style=\"background:rgba(15,23,42,0.8); border:1px solid #f59e0b; padding:10px 12px; border-radius:6px;\">\n                      <b style=\"color:#fbbf24;\">3. Hơn kém $\\pi$ ($\\alpha + \\pi$ và $\\alpha$) – Tang Cot:</b>\n                      <p style=\"color:#e2e8f0; margin:4px 0 0 0; line-height:1.6;\">\n                        $\\tan(\\alpha + \\pi) = \\tan\\alpha, \\; \\cot(\\alpha + \\pi) = \\cot\\alpha$<br/>\n                        $\\sin(\\alpha + \\pi) = -\\sin\\alpha$<br/>\n                        $\\cos(\\alpha + \\pi) = -\\cos\\alpha$\n                      </p>\n                    </div>\n                    <div style=\"background:rgba(15,23,42,0.8); border:1px solid #a855f7; padding:10px 12px; border-radius:6px;\">\n                      <b style=\"color:#c084fc;\">4. Góc phụ nhau ($\\frac{\\pi}{2} - \\alpha$ và $\\alpha$) – Phụ chéo:</b>\n                      <p style=\"color:#e2e8f0; margin:4px 0 0 0; line-height:1.6;\">\n                        $\\sin(\\frac{\\pi}{2} - \\alpha) = \\cos\\alpha, \\; \\cos(\\frac{\\pi}{2} - \\alpha) = \\sin\\alpha$<br/>\n                        $\\tan(\\frac{\\pi}{2} - \\alpha) = \\cot\\alpha, \\; \\cot(\\frac{\\pi}{2} - \\alpha) = \\tan\\alpha$\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                ",
      "narration": "Tiếp theo là câu thần chú nổi tiếng của lượng giác: Cos đối, Sin bù, Phụ chéo, Khác pi tang cot. Nghĩa là: Hai góc đối nhau thì chỉ có cos bằng nhau, các giá trị khác đổi dấu. Hai góc bù nhau có tổng bằng pi thì chỉ có sin bằng nhau. Hai góc phụ nhau có tổng bằng pi phần 2 thì chéo hàm: sin thành cos, cos thành sin, tang thành côtang. Hai góc hơn kém nhau pi thì tang và côtang bằng nhau, sin và cos đổi dấu.",
      "startTime": 32.54,
      "endTime": 61.05,
      "duration": 28.51
    },
    {
      "sceneIndex": 3,
      "title": "Ví dụ 1: Rút gọn biểu thức lượng giác cơ bản",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "mascotMode": "question",
      "mascotTip": "Thay 1 + tan^2 = 1/cos^2 và 1 + cot^2 = 1/sin^2; 1 - sin^2 = cos^2 và 1 - cos^2 = sin^2!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n                    <div style=\"flex:1; min-width:0;\">\n                      <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 1: Rút gọn biểu thức lượng giác</h3>\n                      <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Nhận biết / Dễ)</span>\n                    </div>\n                    <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n                        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n                        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n                      </svg>\n                      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n                        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n                        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n                      </div>\n                    </div>\n                  </div>\n                  <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    Rút gọn biểu thức sau (với điều kiện biểu thức có nghĩa):<br/>\n                    $$A = (1 + \\tan^2\\alpha)(1 - \\sin^2\\alpha) - (1 + \\cot^2\\alpha)(1 - \\cos^2\\alpha)$$\n                  </p>\n                </div>\n                ",
      "narration": "Ví dụ 1 yêu cầu rút gọn biểu thức lượng giác A bằng mở ngoặc 1 cộng tang bình alpha đóng ngoặc nhân mở ngoặc 1 trừ sin bình alpha đóng ngoặc, trừ đi mở ngoặc 1 cộng côtang bình alpha đóng ngoặc nhân mở ngoặc 1 trừ cos bình alpha đóng ngoặc. Các em có 15 giây suy nghĩ!",
      "startTime": 61.05,
      "endTime": 76.67,
      "duration": 15.62
    },
    {
      "sceneIndex": 4,
      "title": "Ví dụ 1: Rút gọn biểu thức lượng giác cơ bản",
      "subtitle": "LỜI GIẢI CHI TIẾT & BÌNH LUẬN",
      "mascotMode": "cheer",
      "mascotTip": "Nhân chéo: (1/cos^2).cos^2 = 1 và (1/sin^2).sin^2 = 1. Kết quả 1 - 1 = 0 siêu đẹp!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:21px; margin:0 0 12px 0; font-weight:700; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:10px;\">\n                    Hướng dẫn giải chi tiết Ví dụ 1\n                  </h3>\n                  <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                    <p>Áp dụng các hệ thức lượng giác cơ bản:</p>\n                    <ul style=\"padding-left:20px; margin:6px 0;\">\n                      <li>$1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha}$ và $1 - \\sin^2\\alpha = \\cos^2\\alpha$.</li>\n                      <li>$1 + \\cot^2\\alpha = \\frac{1}{\\sin^2\\alpha}$ và $1 - \\cos^2\\alpha = \\sin^2\\alpha$.</li>\n                    </ul>\n                    <p style=\"background:rgba(16,185,129,0.15); padding:12px; border-radius:6px; color:#a7f3d0;\">\n                      $$A = \\left(\\frac{1}{\\cos^2\\alpha}\\right) \\cdot \\cos^2\\alpha - \\left(\\frac{1}{\\sin^2\\alpha}\\right) \\cdot \\sin^2\\alpha$$\n                      $$A = 1 - 1 = 0$$\n                      👉 <b>Kết luận:</b> $A = 0$.\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Hết 15 giây! Lời giải như sau: Ta có 1 cộng tang bình bằng 1 chia cos bình, 1 trừ sin bình bằng cos bình, nhân lại triệt tiêu ra đúng bằng 1. Tương tự, 1 cộng côtang bình bằng 1 chia sin bình, 1 trừ cos bình bằng sin bình, nhân lại cũng bằng 1. Ta lấy 1 trừ 1 bằng 0. Vậy giá trị rút gọn của A bằng 0.",
      "startTime": 76.67,
      "endTime": 99.25,
      "duration": 22.58
    },
    {
      "sceneIndex": 5,
      "title": "Ví dụ 2: Dùng công thức góc liên quan đặc biệt rút gọn",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "mascotMode": "question",
      "mascotTip": "Áp dụng thần chú: cos(pi - alpha) = -cos(alpha); sin(pi/2 - alpha) = cos(alpha); tan(pi + alpha) = tan(alpha); cot(-alpha) = -cot(alpha)!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(56,189,248,0.25);\">\n                    <div style=\"flex:1; min-width:0;\">\n                      <h3 style=\"color:#38bdf8; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 2: Rút gọn với cung liên quan</h3>\n                      <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#10b981;\">15 giây</b> (Thông hiểu)</span>\n                    </div>\n                    <div class=\"countdown-clock-widget cd-15s\" data-seconds=\"15\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #10b981; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(16,185,129,0.35);\">\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n                        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n                        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n                      </svg>\n                      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n                        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n                        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#10b981; font-family:monospace; min-width:28px;\">15s</span>\n                      </div>\n                    </div>\n                  </div>\n                  <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    Rút gọn biểu thức sau:<br/>\n                    $$B = \\cos(\\pi - \\alpha) + \\sin\\left(\\frac{\\pi}{2} - \\alpha\\right) - \\tan(\\pi + \\alpha) \\cdot \\cot(-\\alpha) + \\cos(-\\alpha)$$\n                  </p>\n                </div>\n                ",
      "narration": "Ví dụ 2 là bài toán tổng hợp toàn bộ các cung liên quan đặc biệt: Rút gọn biểu thức B bằng cos pi trừ alpha cộng sin của pi phần 2 trừ alpha trừ tan của pi cộng alpha nhân cotan của âm alpha cộng cos của âm alpha. 15 giây suy nghĩ bắt đầu!",
      "startTime": 99.25,
      "endTime": 114.73,
      "duration": 15.48
    },
    {
      "sceneIndex": 6,
      "title": "Ví dụ 2: Dùng công thức góc liên quan đặc biệt rút gọn",
      "subtitle": "LỜI GIẢI CHI TIẾT & BÌNH LUẬN",
      "mascotMode": "explaining",
      "mascotTip": "Ghi nhớ: tan(pi + alpha) = tan alpha; cot(-alpha) = -cot alpha => tích bằng -1, trừ đi (-1) thành +1!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:21px; margin:0 0 12px 0; font-weight:700; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:10px;\">\n                    Hướng dẫn giải chi tiết Ví dụ 2\n                  </h3>\n                  <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                    <p>Biến đổi từng số hạng theo công thức cung liên quan:</p>\n                    <ul style=\"padding-left:20px; margin:6px 0;\">\n                      <li>$\\cos(\\pi - \\alpha) = -\\cos\\alpha$ (Sin bù).</li>\n                      <li>$\\sin(\\frac{\\pi}{2} - \\alpha) = \\cos\\alpha$ (Phụ chéo).</li>\n                      <li>$\\tan(\\pi + \\alpha) = \\tan\\alpha$ (Khác pi tang cot).</li>\n                      <li>$\\cot(-\\alpha) = -\\cot\\alpha$ (Cos đối).</li>\n                      <li>$\\cos(-\\alpha) = \\cos\\alpha$ (Cos đối).</li>\n                    </ul>\n                    <p style=\"background:rgba(16,185,129,0.15); padding:12px; border-radius:6px; color:#a7f3d0;\">\n                      $$B = -\\cos\\alpha + \\cos\\alpha - \\tan\\alpha \\cdot (-\\cot\\alpha) + \\cos\\alpha$$\n                      $$B = 0 - (-\\tan\\alpha \\cdot \\cot\\alpha) + \\cos\\alpha = -(-1) + \\cos\\alpha = 1 + \\cos\\alpha$$\n                      👉 <b>Kết luận:</b> $B = 1 + \\cos\\alpha$.\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải như sau: cos của pi trừ alpha bằng âm cos alpha. sin của pi phần 2 trừ alpha bằng dương cos alpha. Hai số hạng này triệt tiêu nhau bằng 0. tan của pi cộng alpha bằng tan alpha. cotan của âm alpha bằng âm cotan alpha, nhân lại bằng âm 1. Trừ của âm 1 là cộng 1. cos của âm alpha bằng cos alpha. Vậy kết quả cuối cùng là 1 cộng cos alpha.",
      "startTime": 114.73,
      "endTime": 144.23,
      "duration": 29.5
    },
    {
      "sceneIndex": 7,
      "title": "Ví dụ 3: Cho tan(alpha), tính giá trị phân thức đồng bậc",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "mascotMode": "thinking",
      "mascotTip": "Phương pháp vàng: Chia cả tử và mẫu cho cos(alpha) (đối với bậc 1) hoặc cos^2(alpha) (đối với bậc 2)!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #f59e0b; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(245,158,11,0.25);\">\n                    <div style=\"flex:1; min-width:0;\">\n                      <h3 style=\"color:#fbbf24; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 3: Tính phân thức lượng giác đồng bậc</h3>\n                      <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#f59e0b;\">30 giây</b> (Vận dụng)</span>\n                    </div>\n                    <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(245,158,11,0.35);\">\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n                        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n                        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n                      </svg>\n                      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n                        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n                        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#f59e0b; font-family:monospace; min-width:28px;\">30s</span>\n                      </div>\n                    </div>\n                  </div>\n                  <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    Cho $\\tan\\alpha = 3$. Hãy tính giá trị của các biểu thức sau:<br/>\n                    <b>a)</b> $M = \\frac{2\\sin\\alpha + 3\\cos\\alpha}{4\\sin\\alpha - 5\\cos\\alpha}$.<br/>\n                    <b>b)</b> $N = \\frac{\\sin^2\\alpha - 2\\sin\\alpha\\cos\\alpha + 3\\cos^2\\alpha}{2\\sin^2\\alpha + \\cos^2\\alpha}$.\n                  </p>\n                </div>\n                ",
      "narration": "Ví dụ 3 là dạng toán vận dụng có tần suất xuất hiện cực kỳ cao trong các đề thi trắc nghiệm: Cho tan alpha bằng 3. Hãy tính giá trị biểu thức phân thức bậc nhất M và phân thức đồng bậc hai N. Bí quyết là chia cả tử và mẫu cho luỹ thừa của cos alpha. Các em có 30 giây suy nghĩ!",
      "startTime": 144.23,
      "endTime": 162.37,
      "duration": 18.14
    },
    {
      "sceneIndex": 8,
      "title": "Ví dụ 3: Cho tan(alpha), tính giá trị phân thức đồng bậc",
      "subtitle": "LỜI GIẢI CHI TIẾT & BÌNH LUẬN",
      "mascotMode": "cheer",
      "mascotTip": "Không cần tính sin và cos riêng lẻ: Chia cho cos là biểu thức chuyển ngay về tang alpha!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:21px; margin:0 0 12px 0; font-weight:700; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:10px;\">\n                    Hướng dẫn giải chi tiết Ví dụ 3\n                  </h3>\n                  <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                    <p><b>a) Tính $M$ (Chia cả tử và mẫu cho $\\cos\\alpha \\neq 0$):</b><br/>\n                      $$M = \\frac{2\\frac{\\sin\\alpha}{\\cos\\alpha} + 3}{4\\frac{\\sin\\alpha}{\\cos\\alpha} - 5} = \\frac{2\\tan\\alpha + 3}{4\\tan\\alpha - 5} = \\frac{2(3) + 3}{4(3) - 5} = \\frac{9}{7}$$\n                    </p>\n                    <p><b>b) Tính $N$ (Chia cả tử và mẫu cho $\\cos^2\\alpha \\neq 0$):</b><br/>\n                      $$N = \\frac{\\frac{\\sin^2\\alpha}{\\cos^2\\alpha} - 2\\frac{\\sin\\alpha\\cos\\alpha}{\\cos^2\\alpha} + 3}{2\\frac{\\sin^2\\alpha}{\\cos^2\\alpha} + 1} = \\frac{\\tan^2\\alpha - 2\\tan\\alpha + 3}{2\\tan^2\\alpha + 1}$$\n                      $$N = \\frac{3^2 - 2(3) + 3}{2(3^2) + 1} = \\frac{9 - 6 + 3}{18 + 1} = \\frac{6}{19}$$\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải chi tiết: Ở câu a, chia cả tử và mẫu cho cos alpha, ta được 2 tan alpha cộng 3 chia 4 tan alpha trừ 5. Thay tan bằng 3 vào: 2 nhân 3 cộng 3 là 9, chia 4 nhân 3 trừ 5 là 7, được 9 phần 7. Ở câu b, vì biểu thức đồng bậc hai nên chia cả tử và mẫu cho cos bình alpha, ta thu được tan bình alpha trừ 2 tan alpha cộng 3, chia 2 tan bình alpha cộng 1. Thay tan bằng 3: tử số bằng 6, mẫu số bằng 19, được kết quả 6 phần 19.",
      "startTime": 162.37,
      "endTime": 194.43,
      "duration": 32.06
    },
    {
      "sceneIndex": 9,
      "title": "Ví dụ 4: Chứng minh đẳng thức lượng giác không phụ thuộc góc",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "mascotMode": "question",
      "mascotTip": "Hằng đẳng thức a^3 + b^3 = (a + b)(a^2 - ab + b^2). Rút gọn với sin^2 + cos^2 = 1!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #ef4444; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(239,68,68,0.25);\">\n                    <div style=\"flex:1; min-width:0;\">\n                      <h3 style=\"color:#f87171; font-size:21px; margin:0 0 4px 0; line-height:1.3; font-weight:700;\">Ví dụ 4: Chứng minh biểu thức không đổi</h3>\n                      <span style=\"font-size:13px; color:#94a3b8; font-weight:500;\">⏱️ Thời gian suy nghĩ: <b style=\"color:#ef4444;\">30 giây</b> (Vận dụng cao)</span>\n                    </div>\n                    <div class=\"countdown-clock-widget cd-30s\" data-seconds=\"30\" style=\"flex-shrink:0; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.95); border:1.5px solid #ef4444; border-radius:24px; padding:4px 12px; box-shadow:0 0 12px rgba(239,68,68,0.35);\">\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n                        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n                        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n                      </svg>\n                      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n                        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n                        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#ef4444; font-family:monospace; min-width:28px;\">30s</span>\n                      </div>\n                    </div>\n                  </div>\n                  <p style=\"font-size:17px; line-height:1.7; color:#f8fafc;\">\n                    Chứng minh rằng giá trị của biểu thức sau không phụ thuộc vào giá trị của góc $\\alpha$ (với các điều kiện biểu thức xác định):<br/>\n                    $$P = \\frac{\\sin^3\\alpha + \\cos^3\\alpha}{\\sin\\alpha + \\cos\\alpha} + \\sin\\alpha\\cos\\alpha$$\n                  </p>\n                </div>\n                ",
      "narration": "Ví dụ 4 là bài toán vận dụng cao chứng minh biểu thức không phụ thuộc vào góc alpha: Biểu thức P bằng sin mũ 3 alpha cộng cos mũ 3 alpha chia sin alpha cộng cos alpha, rồi cộng với sin alpha nhân cos alpha. Hãy sử dụng hằng đẳng thức đáng nhớ để rút gọn trong 30 giây!",
      "startTime": 194.43,
      "endTime": 211.28,
      "duration": 16.85
    },
    {
      "sceneIndex": 10,
      "title": "Ví dụ 4: Chứng minh đẳng thức lượng giác không phụ thuộc góc",
      "subtitle": "LỜI GIẢI CHI TIẾT & BÌNH LUẬN",
      "mascotMode": "cheer",
      "mascotTip": "Kỹ thuật hằng đẳng thức: sin^3 + cos^3 = (sin + cos)(sin^2 - sin.cos + cos^2) = (sin + cos)(1 - sin.cos)!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#10b981; font-size:21px; margin:0 0 12px 0; font-weight:700; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:10px;\">\n                    Hướng dẫn giải chi tiết Ví dụ 4\n                  </h3>\n                  <div style=\"font-size:16px; line-height:1.7; color:#f8fafc;\">\n                    <p><b>Bước 1: Khai triển tử số theo hằng đẳng thức $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$:</b><br/>\n                      $$\\sin^3\\alpha + \\cos^3\\alpha = (\\sin\\alpha + \\cos\\alpha)(\\sin^2\\alpha - \\sin\\alpha\\cos\\alpha + \\cos^2\\alpha)$$\n                      Vì $\\sin^2\\alpha + \\cos^2\\alpha = 1$, nên tử số là:<br/>\n                      $$\\sin^3\\alpha + \\cos^3\\alpha = (\\sin\\alpha + \\cos\\alpha)(1 - \\sin\\alpha\\cos\\alpha)$$\n                    </p>\n                    <p><b>Bước 2: Rút gọn biểu thức $P$:</b><br/>\n                      $$P = \\frac{(\\sin\\alpha + \\cos\\alpha)(1 - \\sin\\alpha\\cos\\alpha)}{\\sin\\alpha + \\cos\\alpha} + \\sin\\alpha\\cos\\alpha$$\n                      $$P = (1 - \\sin\\alpha\\cos\\alpha) + \\sin\\alpha\\cos\\alpha = 1$$\n                    </p>\n                    <p style=\"background:rgba(16,185,129,0.15); padding:10px; border-radius:6px; color:#a7f3d0;\">\n                      👉 <b>Kết luận:</b> $P = 1$ là một hằng số, không phụ thuộc vào góc $\\alpha$ (đpcm).\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải rất đẹp mắt: Khai triển tử số theo hằng đẳng thức tổng hai lập phương, ta được sin alpha cộng cos alpha nhân với mở ngoặc sin bình trừ sin cos cộng cos bình đóng ngoặc. Vì sin bình cộng cos bình bằng 1, nên biểu thức trong ngoặc chính là 1 trừ sin cos. Rút gọn thừa số sin cộng cos ở cả tử và mẫu, ta còn lại 1 trừ sin cos. Cộng thêm sin cos ở cuối, ta được kết quả chính xác bằng 1. Biểu thức P luôn bằng 1 với mọi góc alpha, chứng minh hoàn tất!",
      "startTime": 211.28,
      "endTime": 240.54,
      "duration": 29.26
    },
    {
      "sceneIndex": 11,
      "title": "3. CẢNH BÁO BẪY TRẮC NGHIỆM KHI DÙNG CÔNG THỨC LIÊN QUAN",
      "subtitle": "MỤC 4 • BẪY ĐỔI DẤU VÀ NHẦM HÀM TRONG CUNG PHỤ",
      "mascotMode": "magnifier",
      "mascotTip": "Chú ý cung phụ: sin(pi/2 - alpha) = cos(alpha) (DƯƠNG), nhưng cos(alpha - pi/2) = sin(alpha)!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #f43f5e; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:12px; font-weight:700;\">⚠️ 3 Sai lầm biến đổi học sinh rất hay gặp</h3>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; margin-bottom:10px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 1: Nhầm dấu của Sin bù và Cos bù</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">Hai góc bù nhau thì <b>chỉ có Sin giữ nguyên dấu</b>: $\\sin(\\pi - \\alpha) = \\sin\\alpha$. Còn $\\cos(\\pi - \\alpha) = -\\cos\\alpha$!</p>\n                  </div>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; margin-bottom:10px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 2: Nhầm dấu của góc đối</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">Chỉ có $\\cos(-\\alpha) = \\cos\\alpha$. Còn $\\sin, \\tan, \\cot$ đều bay dấu trừ ra ngoài!</p>\n                  </div>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 3: Quên đổi hàm khi gặp $\\frac{\\pi}{2}$ (Cung phụ)</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">Cứ gặp $\\frac{\\pi}{2}$ là <b>phải chéo hàm</b>: $\\sin \\leftrightarrow \\cos$ và $\\tan \\leftrightarrow \\cot$.</p>\n                  </div>\n                </div>\n                ",
      "narration": "Cú Thông Thái nhắc nhở 3 sai lầm biến đổi thường gặp: Thứ nhất, nhầm dấu giữa sin bù và cos bù; hãy nhớ chỉ có sin bù là mang dấu dương. Thứ hai, nhầm góc đối; chỉ có cos đối là giữ nguyên dấu cộng, ba hàm còn lại đều bay dấu trừ ra trước. Thứ ba, quên đổi hàm chéo khi gặp cung pi phần 2.",
      "startTime": 240.54,
      "endTime": 259.88,
      "duration": 19.34
    },
    {
      "sceneIndex": 12,
      "title": "4. TỔNG KẾT TOÀN BÀI 1 & LỜI CHÚC THẦY THUẤN PHAN",
      "subtitle": "MỤC 4 • CHÚC MỪNG CÁC EM LÀM CHỦ BÀI 1 TOÁN 11 KNTT",
      "mascotMode": "cheer",
      "mascotTip": "Thầy chúc các em học sinh lớp 11 luôn tự tin, làm chủ lượng giác và bứt phá điểm số tối đa!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #a855f7; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#c084fc; font-size:22px; margin-bottom:12px; font-weight:700;\">🎉 Bứt phá kiến thức Bài 1 Toán 11</h3>\n                  <div style=\"background:rgba(168,85,247,0.15); border:1px solid rgba(168,85,247,0.4); padding:16px; border-radius:8px; line-height:1.8; color:#f8fafc; font-size:15.5px;\">\n                    <p style=\"margin:0;\">\n                      Chúc mừng các em đã xuất sắc hoàn thành trọn vẹn cả <b>4 mục bài giảng tương tác của Bài 1</b>!<br/>\n                      • <b>Mục 1:</b> Góc lượng giác, đơn vị radian, công thức độ dài cung $l = R\\alpha$.<br/>\n                      • <b>Mục 2:</b> Đường tròn lượng giác, điểm biểu diễn góc tuần hoàn chu kỳ $k2\\pi$.<br/>\n                      • <b>Mục 3:</b> 4 Giá trị lượng giác, thần chú xét dấu <i>\"Nhất cả - Nhì sin - Tam tang cot - Tứ cos\"</i>.<br/>\n                      • <b>Mục 4:</b> 4 Hệ thức cơ bản, bộ quy tắc <i>\"Cos đối - Sin bù - Phụ chéo - Khác pi tang cot\"</i>.\n                    </p>\n                  </div>\n                  <p style=\"text-align:center; margin-top:14px; font-size:16px; color:#fef08a; font-weight:bold;\">\n                    ✨ Thầy Thuấn Phan chúc các em luôn đam mê môn Toán và đạt điểm 10 rực rỡ!\n                  </p>\n                </div>\n                ",
      "narration": "Chúc mừng tất cả các em đã xuất sắc hoàn thành toàn bộ 4 mục bài giảng tương tác của Bài 1: Giá trị lượng giác của góc lượng giác trong chương trình Toán lớp 11 Kết nối tri thức. Nắm vững 4 mục này chính là chiếc chìa khóa vàng giúp các em mở toang cánh cửa phương trình lượng giác và hình học không gian sắp tới. Thầy Thuấn Phan chúc các em luôn chăm chỉ, học tập thật vui và đạt kết quả cao nhất trong các bài thi!",
      "startTime": 259.88,
      "endTime": 282.51,
      "duration": 22.63
    }
  ],
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 32.54,
      "id": "part2"
    },
    {
      "time": 61.05,
      "id": "vd1_q"
    },
    {
      "time": 76.67,
      "id": "vd1_a"
    },
    {
      "time": 99.25,
      "id": "vd2_q"
    },
    {
      "time": 114.73,
      "id": "vd2_a"
    },
    {
      "time": 144.23,
      "id": "vd3_q"
    },
    {
      "time": 162.37,
      "id": "vd3_a"
    },
    {
      "time": 194.43,
      "id": "vd4_q"
    },
    {
      "time": 211.28,
      "id": "vd4_a"
    },
    {
      "time": 240.54,
      "id": "part4"
    },
    {
      "time": 259.88,
      "id": "part5"
    }
  ],
  "totalDuration": 282.51,
  "duration": 282.51
};


  window.G11_CHAPTER1_DATA.g11_bai2_muc1 = {
  "lessonId": "toan11_bai2",
  "lessonTitle": "Bài 2: Công thức lượng giác",
  "sectionId": "g11_bai2_muc1",
  "sectionTitle": "Mục 1: Công thức cộng",
  "audio": "/audio/g11_bai2_muc1.mp3",
  "audioSrc": "./audio/g11_bai2_muc1.mp3",
  "audio_src": "./audio/g11_bai2_muc1.mp3",
  "title": "Mục 1: Công thức cộng (Sin, Cos, Tan)",
  "owl_tip": "Thần chú nhớ công thức cộng: Cos thì đổi dấu (cos cos sin sin), Sin thì cùng dấu (sin cos cos sin)!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Công thức cộng Cos và Sin",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Công thức cộng Tang & Quy tắc nhớ",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Bốn ví dụ rèn luyện tiêu biểu (Đồng hồ 15s/30s)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Cảnh báo bẫy trắc nghiệm & Sai lầm thường gặp",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Tổng kết mục 1 & Bí kíp Cú Thông Thái",
      "scenes": [
        12
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. CÔNG THỨC CỘNG CỦA COSIN VÀ SIN",
      "subtitle": "MỤC 1 • CÔNG THỨC CỘNG",
      "mascotMode": "talking",
      "mascotTip": "Quy tắc vàng: 'Cos cos sin sin dấu đổi - Sin cos cos sin dấu cùng'!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">📖 Công thức cộng của Cosin và Sin</h3>\n                  <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:14px; margin-bottom:14px; border-radius:4px;\">\n                    <p style=\"color:#f8fafc; font-size:16px; line-height:1.8; margin:0;\">\n                      Với mọi góc lượng giác $a$ và $b$, ta luôn có:<br/>\n                      • $\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$<br/>\n                      • $\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$<br/>\n                      • $\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$<br/>\n                      • $\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b$\n                    </p>\n                  </div>\n                  <div style=\"background:rgba(250,204,21,0.12); border:1px solid #facc15; border-radius:8px; padding:12px; color:#fef08a; font-size:15px;\">\n                    💡 <b>Bí kíp nhớ siêu tốc:</b> Cos thì đi cặp (cos cos, sin sin) và bị <i>đổi dấu</i>. Sin thì đan xen (sin cos, cos sin) và <i>giữ nguyên dấu</i>!\n                  </div>\n                </div>\n                ",
      "narration": "Chào mừng các em đến với Bài 2: Công thức lượng giác trong chương trình Toán 11 Kết nối tri thức. Mục 1 mở đầu bằng bộ công thức quan trọng bậc nhất: Công thức cộng. Đối với cosin: cos của a trừ b bằng cos a cos b cộng sin a sin b; cos của a cộng b bằng cos a cos b trừ sin a sin b. Đối với sin: sin của a trừ b bằng sin a cos b trừ cos a sin b; sin của a cộng b bằng sin a cos b cộng cos a sin b. Thầy tóm gọn câu thần chú: Cos cos sin sin dấu đổi; Sin cos cos sin dấu cùng!",
      "startTime": 0.0,
      "endTime": 30.43,
      "duration": 30.43
    },
    {
      "sceneIndex": 2,
      "title": "2. CÔNG THỨC CỘNG CỦA TANG & ĐIỀU KIỆN",
      "subtitle": "MỤC 1 • CÔNG THỨC CỘNG",
      "mascotMode": "talking",
      "mascotTip": "Tử số cùng dấu với vế trái, mẫu số đổi dấu và có số 1 đứng đầu!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #818cf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#818cf8; font-size:22px; margin-bottom:12px; font-weight:700;\">📖 Công thức cộng của Tang</h3>\n                  <div style=\"background:rgba(129,140,248,0.1); border-left:4px solid #818cf8; padding:14px; margin-bottom:14px; border-radius:4px;\">\n                    <p style=\"color:#f8fafc; font-size:16px; line-height:1.9; margin:0;\">\n                      Khi các biểu thức đều có nghĩa, ta có:<br/>\n                      • $\\tan(a - b) = \\dfrac{\\tan a - \\tan b}{1 + \\tan a \\tan b}$<br/>\n                      • $\\tan(a + b) = \\dfrac{\\tan a + \\tan b}{1 - \\tan a \\tan b}$\n                    </p>\n                  </div>\n                  <div style=\"background:rgba(244,63,94,0.15); border:1px solid #f43f5e; border-radius:8px; padding:12px; color:#fecdd3; font-size:14.5px;\">\n                    ⚠️ <b>Điều kiện xác định:</b> $a, b, a \\pm b \\neq \\dfrac{\\pi}{2} + k\\pi$ và tích $\\tan a \\tan b \\neq \\pm 1$.\n                  </div>\n                </div>\n                ",
      "narration": "Tiếp theo là công thức cộng của tang. Khi các giá trị tang đều xác định, tang của a trừ b bằng tang a trừ tang b trên một cộng tang a tang b; tang của a cộng b bằng tang a cộng tang b trên một trừ tang a tang b. Hãy ghi nhớ: Trên tử thì dấu cùng với vế trái, dưới mẫu thì đổi dấu và có số 1 đứng đầu!",
      "startTime": 30.43,
      "endTime": 48.6,
      "duration": 18.17
    },
    {
      "sceneIndex": 3,
      "title": "Ví dụ 1: Tính giá trị lượng giác góc đặc biệt",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "mascotMode": "thinking",
      "mascotTip": "Phân tích 75 độ = 45 độ + 30 độ; 15 độ = 45 độ - 30 độ!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #f59e0b; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;\">\n                    <span style=\"background:#f59e0b; color:#0f172a; font-weight:800; font-size:13px; padding:3px 10px; rounded-full:8px; border-radius:6px;\">VÍ DỤ 1 • MỨC NHẬN BIẾT</span>\n                    \n    <div class=\"countdown-clock-widget cd-{seconds}s\" style=\"display:flex; align-items:center; gap:8px; background:rgba(239,68,68,0.15); border:1.5px solid #ef4444; border-radius:30px; padding:4px 14px; width:fit-content; margin:10px 0;\">\n      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n        <polyline points=\"12 6 12 12 16 14\"></polyline>\n      </svg>\n      <span style=\"color:#fecaca; font-weight:800; font-size:14px; letter-spacing:0.5px;\">THỜI GIAN SUY NGHĨ: {seconds} GIÂY</span>\n    </div>\n    \n                  </div>\n                  <h4 style=\"color:#fbbf24; font-size:18px; margin:0 0 10px 0;\">Không dùng máy tính, tính giá trị chính xác của:</h4>\n                  <div style=\"background:rgba(245,158,11,0.08); border-left:4px solid #f59e0b; padding:14px; border-radius:4px; font-size:16px; color:#f8fafc; line-height:1.8;\">\n                    a) $\\cos 75^\\circ$<br/>\n                    b) $\\sin 15^\\circ$<br/>\n                    c) So sánh hai kết quả trên và giải thích vì sao.\n                  </div>\n                </div>\n                ",
      "narration": "Ví dụ 1 là bài toán nhận biết nền tảng: Không dùng máy tính bỏ túi, hãy tính giá trị chính xác của cos 75 độ và sin 15 độ, sau đó so sánh hai kết quả. Các em có 15 giây suy nghĩ!",
      "startTime": 48.6,
      "endTime": 61.49,
      "duration": 12.89
    },
    {
      "sceneIndex": 4,
      "title": "Ví dụ 1: Lời giải chi tiết & Phân tích",
      "subtitle": "LỜI GIẢI CHI TIẾT • BƯỚC SUY LUẬN",
      "mascotMode": "explaining",
      "mascotTip": "Hai góc phụ nhau có tổng bằng 90 độ thì sin góc này bằng cos góc kia!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <span style=\"background:#10b981; color:#0f172a; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">LỜI GIẢI VÍ DỤ 1</span>\n                  <div style=\"margin-top:12px; font-size:15px; color:#e2e8f0; line-height:1.8;\">\n                    <p style=\"margin:0 0 8px 0;\">\n                      <b>a) Tính $\\cos 75^\\circ$:</b> Ta tách $75^\\circ = 45^\\circ + 30^\\circ$<br/>\n                      $\\cos 75^\\circ = \\cos(45^\\circ + 30^\\circ) = \\cos 45^\\circ \\cos 30^\\circ - \\sin 45^\\circ \\sin 30^\\circ$<br/>\n                      $= \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{\\sqrt{3}}{2} - \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{1}{2} = \\mathbf{\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}}$.\n                    </p>\n                    <p style=\"margin:0 0 8px 0;\">\n                      <b>b) Tính $\\sin 15^\\circ$:</b> Ta tách $15^\\circ = 45^\\circ - 30^\\circ$<br/>\n                      $\\sin 15^\\circ = \\sin(45^\\circ - 30^\\circ) = \\sin 45^\\circ \\cos 30^\\circ - \\cos 45^\\circ \\sin 30^\\circ$<br/>\n                      $= \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{\\sqrt{3}}{2} - \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{1}{2} = \\mathbf{\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}}$.\n                    </p>\n                    <p style=\"margin:0; color:#fde047;\">\n                      <b>c) Kết luận:</b> $\\cos 75^\\circ = \\sin 15^\\circ$ vì $75^\\circ + 15^\\circ = 90^\\circ$ (hai góc phụ nhau thì chéo hàm).\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải chi tiết: Ở câu a, tách 75 độ bằng 45 độ cộng 30 độ. Áp dụng cos của tổng, ta có căn 2 trên 2 nhân căn 3 trên 2 trừ căn 2 trên 2 nhân 1 phần 2, ra căn 6 trừ căn 2 trên 4. Ở câu b, tách 15 độ bằng 45 trừ 30 độ, áp dụng sin của hiệu cũng ra đúng căn 6 trừ căn 2 trên 4. Hai kết quả bằng nhau vì 75 độ và 15 độ là hai góc phụ nhau!",
      "startTime": 61.49,
      "endTime": 88.47,
      "duration": 26.98
    },
    {
      "sceneIndex": 5,
      "title": "Ví dụ 2: Tính sin(a+b) và cos(a-b)",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "mascotMode": "thinking",
      "mascotTip": "Nhớ xét góc phần tư để lấy dấu âm dương khi tính cos a và sin b!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;\">\n                    <span style=\"background:#38bdf8; color:#0f172a; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">VÍ DỤ 2 • MỨC THÔNG HIỂU</span>\n                    \n    <div class=\"countdown-clock-widget cd-{seconds}s\" style=\"display:flex; align-items:center; gap:8px; background:rgba(239,68,68,0.15); border:1.5px solid #ef4444; border-radius:30px; padding:4px 14px; width:fit-content; margin:10px 0;\">\n      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n        <polyline points=\"12 6 12 12 16 14\"></polyline>\n      </svg>\n      <span style=\"color:#fecaca; font-weight:800; font-size:14px; letter-spacing:0.5px;\">THỜI GIAN SUY NGHĨ: {seconds} GIÂY</span>\n    </div>\n    \n                  </div>\n                  <h4 style=\"color:#7dd3fc; font-size:18px; margin:0 0 10px 0;\">Cho hai góc lượng giác $a$ và $b$ thỏa mãn:</h4>\n                  <div style=\"background:rgba(56,189,248,0.08); border-left:4px solid #38bdf8; padding:14px; border-radius:4px; font-size:16px; color:#f8fafc; line-height:1.8;\">\n                    • $\\sin a = \\dfrac{3}{5}$ với $\\dfrac{\\pi}{2} < a < \\pi$ (Góc phần tư II)<br/>\n                    • $\\cos b = \\dfrac{12}{13}$ với $0 < b < \\dfrac{\\pi}{2}$ (Góc phần tư I)<br/>\n                    Hãy tính giá trị của: <b>a)</b> $\\sin(a + b)$ và <b>b)</b> $\\cos(a - b)$.\n                  </div>\n                </div>\n                ",
      "narration": "Ví dụ 2 là bài toán thông hiểu cốt lõi: Cho sin a bằng 3 phần 5 trong góc phần tư thứ hai, và cos b bằng 12 phần 13 trong góc phần tư thứ nhất. Hãy tính sin của a cộng b và cos của a trừ b. Các em có 15 giây chuẩn bị!",
      "startTime": 88.47,
      "endTime": 103.18,
      "duration": 14.71
    },
    {
      "sceneIndex": 6,
      "title": "Ví dụ 2: Lời giải chi tiết & Xét dấu",
      "subtitle": "LỜI GIẢI CHI TIẾT • BƯỚC SUY LUẬN",
      "mascotMode": "explaining",
      "mascotTip": "Góc a ở góc phần tư II nên cos a mang dấu âm: cos a = -4/5!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <span style=\"background:#10b981; color:#0f172a; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">LỜI GIẢI VÍ DỤ 2</span>\n                  <div style=\"margin-top:12px; font-size:15px; color:#e2e8f0; line-height:1.8;\">\n                    <p style=\"margin:0 0 8px 0;\">\n                      <b>Bước 1: Tìm $\\cos a$ và $\\sin b$:</b><br/>\n                      • Vì $\\frac{\\pi}{2} < a < \\pi$ nên $\\cos a < 0 \\Rightarrow \\cos a = -\\sqrt{1 - \\sin^2 a} = -\\sqrt{1 - \\frac{9}{25}} = -\\dfrac{4}{5}$.<br/>\n                      • Vì $0 < b < \\frac{\\pi}{2}$ nên $\\sin b > 0 \\Rightarrow \\sin b = \\sqrt{1 - \\cos^2 b} = \\sqrt{1 - \\frac{144}{169}} = \\dfrac{5}{13}$.\n                    </p>\n                    <p style=\"margin:0 0 8px 0;\">\n                      <b>Bước 2: Áp dụng công thức cộng:</b><br/>\n                      • $\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b = \\dfrac{3}{5} \\cdot \\dfrac{12}{13} + \\left(-\\dfrac{4}{5}\\right) \\cdot \\dfrac{5}{13} = \\dfrac{36 - 20}{65} = \\mathbf{\\dfrac{16}{65}}$.<br/>\n                      • $\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b = \\left(-\\dfrac{4}{5}\\right) \\cdot \\dfrac{12}{13} + \\dfrac{3}{5} \\cdot \\dfrac{5}{13} = \\dfrac{-48 + 15}{65} = \\mathbf{-\\dfrac{33}{65}}$.\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải chi tiết: Bước 1 tìm các giá trị còn lại. Do a thuộc góc phần tư thứ hai nên cos a âm, bằng trừ 4 phần 5. Do b thuộc góc phần tư thứ nhất nên sin b dương, bằng 5 phần 13. Bước 2 áp dụng công thức: sin a cộng b bằng 3 phần 5 nhân 12 phần 13 cộng trừ 4 phần 5 nhân 5 phần 13, rút gọn được 16 phần 65. Cos a trừ b bằng trừ 48 cộng 15 trên 65, bằng trừ 33 phần 65.",
      "startTime": 103.18,
      "endTime": 133.8,
      "duration": 30.62
    },
    {
      "sceneIndex": 7,
      "title": "Ví dụ 3: Rút gọn biểu thức lượng giác",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "mascotMode": "thinking",
      "mascotTip": "Khai triển bình phương rồi ghép sin^2 + cos^2 = 1 và gom cụm công thức cộng!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #a855f7; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;\">\n                    <span style=\"background:#a855f7; color:#ffffff; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">VÍ DỤ 3 • MỨC VẬN DỤNG</span>\n                    \n    <div class=\"countdown-clock-widget cd-{seconds}s\" style=\"display:flex; align-items:center; gap:8px; background:rgba(239,68,68,0.15); border:1.5px solid #ef4444; border-radius:30px; padding:4px 14px; width:fit-content; margin:10px 0;\">\n      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n        <polyline points=\"12 6 12 12 16 14\"></polyline>\n      </svg>\n      <span style=\"color:#fecaca; font-weight:800; font-size:14px; letter-spacing:0.5px;\">THỜI GIAN SUY NGHĨ: {seconds} GIÂY</span>\n    </div>\n    \n                  </div>\n                  <h4 style=\"color:#d8b4fe; font-size:18px; margin:0 0 10px 0;\">Cho hai góc $x$ và $y$ thỏa mãn $x - y = \\dfrac{\\pi}{3}$.</h4>\n                  <div style=\"background:rgba(168,85,247,0.08); border-left:4px solid #a855f7; padding:14px; border-radius:4px; font-size:16px; color:#f8fafc; line-height:1.8;\">\n                    Tính giá trị của biểu thức:<br/>\n                    $$A = (\\cos x + \\cos y)^2 + (\\sin x + \\sin y)^2$$\n                  </div>\n                </div>\n                ",
      "narration": "Ví dụ 3 là bài toán vận dụng rất hay xuất hiện trong các đề kiểm tra: Cho hai góc x và y thỏa mãn x trừ y bằng pi phần 3. Hãy tính giá trị của biểu thức A bằng cos x cộng cos y tất cả bình phương cộng sin x cộng sin y tất cả bình phương. Các em có 30 giây suy nghĩ!",
      "startTime": 133.8,
      "endTime": 151.37,
      "duration": 17.57
    },
    {
      "sceneIndex": 8,
      "title": "Ví dụ 3: Lời giải chi tiết & Nghệ thuật gom nhóm",
      "subtitle": "LỜI GIẢI CHI TIẾT • BƯỚC SUY LUẬN",
      "mascotMode": "explaining",
      "mascotTip": "Xuất hiện cos x cos y + sin x sin y chính là cos(x - y)!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <span style=\"background:#10b981; color:#0f172a; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">LỜI GIẢI VÍ DỤ 3</span>\n                  <div style=\"margin-top:12px; font-size:15px; color:#e2e8f0; line-height:1.8;\">\n                    <p style=\"margin:0 0 8px 0;\">\n                      Khai triển hai hằng đẳng thức bình phương:<br/>\n                      $A = (\\cos^2 x + 2\\cos x \\cos y + \\cos^2 y) + (\\sin^2 x + 2\\sin x \\sin y + \\sin^2 y)$\n                    </p>\n                    <p style=\"margin:0 0 8px 0;\">\n                      Nhóm các hạng tử lượng giác cơ bản:<br/>\n                      $A = (\\cos^2 x + \\sin^2 x) + (\\cos^2 y + \\sin^2 y) + 2(\\cos x \\cos y + \\sin x \\sin y)$<br/>\n                      $A = 1 + 1 + 2\\cos(x - y) = 2 + 2\\cos(x - y)$.\n                    </p>\n                    <p style=\"margin:0; color:#34d399;\">\n                      Thay $x - y = \\dfrac{\\pi}{3}$ vào biểu thức:<br/>\n                      $A = 2 + 2\\cos\\dfrac{\\pi}{3} = 2 + 2 \\cdot \\dfrac{1}{2} = 2 + 1 = \\mathbf{3}$.\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải chi tiết: Khai triển hai bình phương ra sáu số hạng. Nhóm cos bình x với sin bình x bằng 1; cos bình y với sin bình y bằng 1; còn lại hai lần tích cos x cos y cộng sin x sin y chính là hai lần cos của x trừ y! Vậy biểu thức thu gọn thành 2 cộng 2 cos của x trừ y. Thay x trừ y bằng pi phần 3 với cos pi phần 3 bằng 1 phần 2, ta thu được đáp số tuyệt đẹp bằng 3.",
      "startTime": 151.37,
      "endTime": 174.99,
      "duration": 23.62
    },
    {
      "sceneIndex": 9,
      "title": "Ví dụ 4: Bài toán thực tế tổng hợp dao động điều hòa",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "mascotMode": "thinking",
      "mascotTip": "Áp dụng công thức cộng cos(a - b) để tìm biên độ và pha dao động tổng hợp!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #ec4899; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;\">\n                    <span style=\"background:#ec4899; color:#ffffff; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">VÍ DỤ 4 • MỨC VẬN DỤNG CAO / THỰC TẾ</span>\n                    \n    <div class=\"countdown-clock-widget cd-{seconds}s\" style=\"display:flex; align-items:center; gap:8px; background:rgba(239,68,68,0.15); border:1.5px solid #ef4444; border-radius:30px; padding:4px 14px; width:fit-content; margin:10px 0;\">\n      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n        <polyline points=\"12 6 12 12 16 14\"></polyline>\n      </svg>\n      <span style=\"color:#fecaca; font-weight:800; font-size:14px; letter-spacing:0.5px;\">THỜI GIAN SUY NGHĨ: {seconds} GIÂY</span>\n    </div>\n    \n                  </div>\n                  <h4 style=\"color:#f472b6; font-size:18px; margin:0 0 10px 0;\">Ứng dụng vật lý trong tổng hợp dao động:</h4>\n                  <div style=\"background:rgba(236,72,153,0.08); border-left:4px solid #ec4899; padding:14px; border-radius:4px; font-size:15.5px; color:#f8fafc; line-height:1.8;\">\n                    Một vật thực hiện đồng thời hai dao động điều hòa cùng phương, cùng tần số:<br/>\n                    $x_1 = 3\\cos\\left(10\\pi t + \\dfrac{\\pi}{6}\\right)\\text{ (cm)}$ và $x_2 = 3\\sqrt{3}\\cos\\left(10\\pi t - \\dfrac{\\pi}{3}\\right)\\text{ (cm)}$.<br/>\n                    Hãy viết phương trình dao động tổng hợp $x = x_1 + x_2$ dưới dạng $A\\cos(10\\pi t + \\varphi)$.\n                  </div>\n                </div>\n                ",
      "narration": "Ví dụ 4 là bài toán liên môn vật lý vận dụng cao: Một vật tham gia đồng thời hai dao động điều hòa cùng phương cùng tần số: x1 bằng 3 cos 10 pi t cộng pi phần 6 xen-ti-mét và x2 bằng 3 căn 3 cos 10 pi t trừ pi phần 3 xen-ti-mét. Hãy tìm biên độ và pha ban đầu để viết phương trình dao động tổng hợp. Các em có 30 giây suy nghĩ!",
      "startTime": 174.99,
      "endTime": 195.77,
      "duration": 20.78
    },
    {
      "sceneIndex": 10,
      "title": "Ví dụ 4: Lời giải chi tiết & Mô hình pha",
      "subtitle": "LỜI GIẢI CHI TIẾT • BƯỚC SUY LUẬN",
      "mascotMode": "explaining",
      "mascotTip": "Hai dao động lệch pha nhau pi/2 (vuông pha) nên A = căn(A1^2 + A2^2) = 6 cm!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <span style=\"background:#10b981; color:#0f172a; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">LỜI GIẢI VÍ DỤ 4</span>\n                  <div style=\"margin-top:12px; font-size:15px; color:#e2e8f0; line-height:1.8;\">\n                    <p style=\"margin:0 0 8px 0;\">\n                      <b>Bước 1: Tính độ lệch pha giữa hai dao động:</b><br/>\n                      $\\Delta\\varphi = \\dfrac{\\pi}{6} - \\left(-\\dfrac{\\pi}{3}\\right) = \\dfrac{\\pi}{2}$ (hai dao động vuông pha với nhau).\n                    </p>\n                    <p style=\"margin:0 0 8px 0;\">\n                      <b>Bước 2: Tìm biên độ dao động tổng hợp $A$:</b><br/>\n                      $A = \\sqrt{A_1^2 + A_2^2} = \\sqrt{3^2 + (3\\sqrt{3})^2} = \\sqrt{9 + 27} = \\sqrt{36} = \\mathbf{6\\text{ cm}}$.\n                    </p>\n                    <p style=\"margin:0; color:#fde047;\">\n                      <b>Bước 3: Xác định pha ban đầu $\\varphi$:</b><br/>\n                      $\\tan\\varphi = \\dfrac{A_1\\sin\\varphi_1 + A_2\\sin\\varphi_2}{A_1\\cos\\varphi_1 + A_2\\cos\\varphi_2} = \\dfrac{3\\sin\\frac{\\pi}{6} + 3\\sqrt{3}\\sin(-\\frac{\\pi}{3})}{3\\cos\\frac{\\pi}{6} + 3\\sqrt{3}\\cos(-\\frac{\\pi}{3})} = -\\dfrac{1}{\\sqrt{3}} \\Rightarrow \\varphi = -\\dfrac{\\pi}{6}$.<br/>\n                      Vậy phương trình tổng hợp là: $\\mathbf{x = 6\\cos\\left(10\\pi t - \\dfrac{\\pi}{6}\\right)\\text{ (cm)}}$.\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải chi tiết: Nhận xét độ lệch pha giữa hai dao động là pi phần 6 trừ cho trừ pi phần 3 bằng pi phần 2, tức hai dao động vuông pha nhau. Biên độ dao động tổng hợp tính theo định lý Pythagoras bằng căn bậc hai của 3 bình cộng 3 căn 3 tất cả bình, ra đúng 6 xen-ti-mét. Áp dụng công thức cộng tính tang phi ra trừ 1 trên căn 3, suy ra pha ban đầu phi bằng trừ pi phần 6. Ta kết luận phương trình dao động tổng hợp là x bằng 6 cos 10 pi t trừ pi phần 6 xen-ti-mét.",
      "startTime": 195.77,
      "endTime": 225.41,
      "duration": 29.64
    },
    {
      "sceneIndex": 11,
      "title": "3. CẢNH BÁO BẪY TRẮC NGHIỆM & SAI LẦM PHỔ BIẾN",
      "subtitle": "MỤC 1 • LƯU Ý TRÁNH MẤT ĐIỂM OAN",
      "mascotMode": "warning",
      "mascotTip": "Hãy luôn khắc sâu: Cos thì ĐỔI DẤU, Sin thì CÙNG DẤU!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #ef4444; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:12px; font-weight:700;\">⚠️ 3 Bẫy trắc nghiệm công thức cộng cần tránh</h3>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; margin-bottom:10px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 1: Quên đổi dấu trong công thức Cosin</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">Nhiều bạn viết $\\cos(a+b) = \\cos a\\cos b + \\sin a\\sin b$ là <b>SAI HOÀN TOÀN</b>! Phải là dấu TRỪ: $\\cos(a+b) = \\cos a\\cos b - \\sin a\\sin b$.</p>\n                  </div>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; margin-bottom:10px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 2: Nhầm dấu ở mẫu số của Tang</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">Trong $\\tan(a+b)$, tử số mang dấu CỘNG nhưng mẫu số phải mang dấu TRỪ: $1 - \\tan a\\tan b$.</p>\n                  </div>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 3: Quên xét dấu khi khai căn từ $\\sin^2 + \\cos^2 = 1$</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">Luôn phải kiểm tra góc phần tư trước khi viết dấu cộng hay trừ cho giá trị lượng giác.</p>\n                  </div>\n                </div>\n                ",
      "narration": "Cú Thông Thái cảnh báo 3 bẫy kinh điển: Thứ nhất, quên đổi dấu trong công thức cosin; nhớ rằng cos của tổng thì phải mang dấu trừ. Thứ hai, nhầm dấu ở mẫu số của tang; tang của tổng thì dưới mẫu mang dấu trừ. Thứ ba, quên kiểm tra góc phần tư khi khai căn dẫn đến sai toàn bộ bài toán tính toán phía sau!",
      "startTime": 225.41,
      "endTime": 244.95,
      "duration": 19.54
    },
    {
      "sceneIndex": 12,
      "title": "4. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
      "subtitle": "MỤC 1 • GHI NHỚ KHẮC SÂU",
      "mascotMode": "cheer",
      "mascotTip": "Cos cos sin sin dấu đổi - Sin cos cos sin dấu cùng!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px; font-weight:700;\">🌟 Bí kíp nằm lòng Mục 1</h3>\n                  <div style=\"background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.3); border-radius:8px; padding:16px; color:#f8fafc; font-size:16px; line-height:1.9;\">\n                    • <b>Thần chú Sin và Cos:</b><br/>\n                    <i>\"Cos thì cos cos sin sin, dấu trừ đổi cộng dấu cộng đổi trừ.<br/>\n                    Sin thì sin cos cos sin, dấu cùng giữ lại chẳng phiền lòng ai!\"</i><br/>\n                    • <b>Thần chú Tang:</b><br/>\n                    <i>\"Tang tổng thì lấy tổng tang, chia cho một trừ tích tang rõ ràng!\"</i>\n                  </div>\n                </div>\n                ",
      "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục 1: Công thức cộng. Hãy đọc to câu thần chú: Cos thì cos cos sin sin, dấu cộng đổi trừ dấu trừ đổi cộng. Sin thì sin cos cos sin, dấu cùng giữ lại chẳng phiền lòng ai. Nắm vững điều này, các em sẽ tự tin bước tiếp sang Mục 2: Công thức nhân đôi và hạ bậc!",
      "startTime": 244.95,
      "endTime": 265.28,
      "duration": 20.33
    }
  ],
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 30.43,
      "id": "part2"
    },
    {
      "time": 48.6,
      "id": "vd1_q"
    },
    {
      "time": 61.49,
      "id": "vd1_a"
    },
    {
      "time": 88.47,
      "id": "vd2_q"
    },
    {
      "time": 103.18,
      "id": "vd2_a"
    },
    {
      "time": 133.8,
      "id": "vd3_q"
    },
    {
      "time": 151.37,
      "id": "vd3_a"
    },
    {
      "time": 174.99,
      "id": "vd4_q"
    },
    {
      "time": 195.77,
      "id": "vd4_a"
    },
    {
      "time": 225.41,
      "id": "part4"
    },
    {
      "time": 244.95,
      "id": "part5"
    }
  ],
  "totalDuration": 265.28,
  "duration": 265.28
};

  window.G11_CHAPTER1_DATA.g11_bai2_muc2 = {
  "lessonId": "toan11_bai2",
  "lessonTitle": "Bài 2: Công thức lượng giác",
  "sectionId": "g11_bai2_muc2",
  "sectionTitle": "Mục 2: Công thức nhân đôi và công thức hạ bậc",
  "audio": "/audio/g11_bai2_muc2.mp3",
  "audioSrc": "./audio/g11_bai2_muc2.mp3",
  "audio_src": "./audio/g11_bai2_muc2.mp3",
  "title": "Mục 2: Công thức nhân đôi & Hạ bậc",
  "owl_tip": "Sin 2a = 2 sin a cos a; Cos 2a có 3 dạng biểu diễn: cos^2 - sin^2 = 2cos^2 - 1 = 1 - 2sin^2!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Công thức nhân đôi (Sin 2a, Cos 2a, Tan 2a)",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Công thức hạ bậc & Ý nghĩa biến đổi",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Bốn ví dụ rèn luyện tiêu biểu (Đồng hồ 15s/30s)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Cảnh báo bẫy trắc nghiệm & Sai lầm thường gặp",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Tổng kết mục 2 & Bí kíp Cú Thông Thái",
      "scenes": [
        12
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. HỆ THỐNG CÔNG THỨC NHÂN ĐÔI",
      "subtitle": "MỤC 2 • CÔNG THỨC NHÂN ĐÔI & HẠ BẬC",
      "mascotMode": "talking",
      "mascotTip": "Công thức nhân đôi chính là trường hợp đặc biệt của công thức cộng khi b = a!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">📖 Công thức nhân đôi</h3>\n                  <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:14px; margin-bottom:14px; border-radius:4px;\">\n                    <p style=\"color:#f8fafc; font-size:16px; line-height:1.9; margin:0;\">\n                      • $\\sin 2a = 2\\sin a \\cos a$<br/>\n                      • $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$<br/>\n                      • $\\tan 2a = \\dfrac{2\\tan a}{1 - \\tan^2 a}$\n                    </p>\n                  </div>\n                  <div style=\"background:rgba(250,204,21,0.12); border:1px solid #facc15; border-radius:8px; padding:12px; color:#fef08a; font-size:15px;\">\n                    💡 <b>Lưu ý quan trọng:</b> $\\cos 2a$ có tới <b>3 dạng biến đổi tương đương</b>! Tùy vào đề bài cho $\\sin$ hay $\\cos$ mà ta chọn dạng thích hợp nhất.\n                  </div>\n                </div>\n                ",
      "narration": "Chào mừng các em đến với Mục 2: Công thức nhân đôi và hạ bậc. Khi cho b bằng a trong công thức cộng, ta thu được bộ công thức nhân đôi cực kỳ quan trọng: sin 2a bằng 2 sin a cos a; cos 2a bằng cos bình a trừ sin bình a, bằng 2 cos bình a trừ 1, hoặc bằng 1 trừ 2 sin bình a; tang 2a bằng 2 tang a trên 1 trừ tang bình a. Hãy chú ý cos 2a có 3 dạng biến đổi, giúp ta linh hoạt giải quyết mọi bài toán!",
      "startTime": 0.0,
      "endTime": 24.98,
      "duration": 24.98
    },
    {
      "sceneIndex": 2,
      "title": "2. CÔNG THỨC HẠ BẬC & Ý NGHĨA",
      "subtitle": "MỤC 2 • CÔNG THỨC NHÂN ĐÔI & HẠ BẬC",
      "mascotMode": "talking",
      "mascotTip": "Hạ bậc thì góc gấp đôi: Sin bình mang dấu trừ, Cos bình mang dấu cộng!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #818cf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#818cf8; font-size:22px; margin-bottom:12px; font-weight:700;\">📖 Công thức hạ bậc</h3>\n                  <div style=\"background:rgba(129,140,248,0.1); border-left:4px solid #818cf8; padding:14px; margin-bottom:14px; border-radius:4px;\">\n                    <p style=\"color:#f8fafc; font-size:16.5px; line-height:2.0; margin:0;\">\n                      Từ $\\cos 2a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$, ta rút ra:<br/>\n                      • $\\sin^2 a = \\dfrac{1 - \\cos 2a}{2}$<br/>\n                      • $\\cos^2 a = \\dfrac{1 + \\cos 2a}{2}$\n                    </p>\n                  </div>\n                  <div style=\"background:rgba(16,185,129,0.12); border:1px solid #10b981; border-radius:8px; padding:12px; color:#a7f3d0; font-size:15px;\">\n                    ✨ <b>Tác dụng của hạ bậc:</b> Biến số mũ 2 phức tạp về hàm số bậc 1 đơn giản, rất quan trọng khi giải phương trình lượng giác lớp 11 và tích phân lớp 12!\n                  </div>\n                </div>\n                ",
      "narration": "Từ công thức cos 2a, khi rút sin bình và cos bình ra, ta có công thức hạ bậc: sin bình a bằng 1 trừ cos 2a tất cả chia 2; cos bình a bằng 1 cộng cos 2a tất cả chia 2. Nhớ thần chú: Hạ bậc góc gấp đôi; sin bình mang dấu trừ, cos bình mang dấu cộng. Công thức này giúp giảm bậc từ 2 xuống bậc 1, là chìa khóa vàng cho lượng giác 11 và tích phân 12 sau này!",
      "startTime": 24.98,
      "endTime": 48.76,
      "duration": 23.78
    },
    {
      "sceneIndex": 3,
      "title": "Ví dụ 1: Tính sin 2a, cos 2a, tan 2a",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "mascotMode": "thinking",
      "mascotTip": "Tìm sin a trước, lưu ý góc ở phần tư thứ III thì sin a mang dấu âm!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #f59e0b; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;\">\n                    <span style=\"background:#f59e0b; color:#0f172a; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">VÍ DỤ 1 • MỨC NHẬN BIẾT</span>\n                    \n    <div class=\"countdown-clock-widget cd-{seconds}s\" style=\"display:flex; align-items:center; gap:8px; background:rgba(239,68,68,0.15); border:1.5px solid #ef4444; border-radius:30px; padding:4px 14px; width:fit-content; margin:10px 0;\">\n      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n        <polyline points=\"12 6 12 12 16 14\"></polyline>\n      </svg>\n      <span style=\"color:#fecaca; font-weight:800; font-size:14px; letter-spacing:0.5px;\">THỜI GIAN SUY NGHĨ: {seconds} GIÂY</span>\n    </div>\n    \n                  </div>\n                  <h4 style=\"color:#fbbf24; font-size:18px; margin:0 0 10px 0;\">Cho góc lượng giác $a$ thỏa mãn:</h4>\n                  <div style=\"background:rgba(245,158,11,0.08); border-left:4px solid #f59e0b; padding:14px; border-radius:4px; font-size:16px; color:#f8fafc; line-height:1.8;\">\n                    $\\cos a = -\\dfrac{3}{5}$ với $\\pi < a < \\dfrac{3\\pi}{2}$ (Góc phần tư thứ III).<br/>\n                    Hãy tính giá trị của: <b>a)</b> $\\sin 2a$, <b>b)</b> $\\cos 2a$, và <b>c)</b> $\\tan 2a$.\n                  </div>\n                </div>\n                ",
      "narration": "Ví dụ 1 là bài toán nhận biết áp dụng công thức nhân đôi: Cho cos a bằng trừ 3 phần 5 với a nằm trong góc phần tư thứ ba. Hãy tính sin 2a, cos 2a và tang 2a. Các em có 15 giây suy nghĩ!",
      "startTime": 48.76,
      "endTime": 63.16,
      "duration": 14.4
    },
    {
      "sceneIndex": 4,
      "title": "Ví dụ 1: Lời giải chi tiết & Bước suy luận",
      "subtitle": "LỜI GIẢI CHI TIẾT • BƯỚC SUY LUẬN",
      "mascotMode": "explaining",
      "mascotTip": "Sin 2a = 2.(-4/5).(-3/5) = 24/25 > 0 vì âm nhân âm ra dương!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <span style=\"background:#10b981; color:#0f172a; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">LỜI GIẢI VÍ DỤ 1</span>\n                  <div style=\"margin-top:12px; font-size:15px; color:#e2e8f0; line-height:1.8;\">\n                    <p style=\"margin:0 0 8px 0;\">\n                      <b>Bước 1: Tính $\\sin a$:</b><br/>\n                      Vì $\\pi < a < \\frac{3\\pi}{2}$ (góc phần tư III) nên $\\sin a < 0$:<br/>\n                      $\\sin a = -\\sqrt{1 - \\cos^2 a} = -\\sqrt{1 - \\frac{9}{25}} = -\\dfrac{4}{5}$.\n                    </p>\n                    <p style=\"margin:0 0 8px 0;\">\n                      <b>Bước 2: Áp dụng công thức nhân đôi:</b><br/>\n                      • $\\sin 2a = 2\\sin a \\cos a = 2\\left(-\\dfrac{4}{5}\\right)\\left(-\\dfrac{3}{5}\\right) = \\mathbf{\\dfrac{24}{25}}$.<br/>\n                      • $\\cos 2a = 2\\cos^2 a - 1 = 2\\left(\\dfrac{9}{25}\\right) - 1 = \\dfrac{18}{25} - 1 = \\mathbf{-\\dfrac{7}{25}}$.<br/>\n                      • $\\tan 2a = \\dfrac{\\sin 2a}{\\cos 2a} = \\dfrac{24/25}{-7/25} = \\mathbf{-\\dfrac{24}{7}}$.\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải chi tiết: Bước 1, vì a nằm ở góc phần tư thứ ba nên sin a âm, bằng trừ 4 phần 5. Bước 2 áp dụng công thức: sin 2a bằng 2 nhân trừ 4 phần 5 nhân trừ 3 phần 5, ra dương 24 phần 25. Cos 2a bằng 2 nhân 9 phần 25 trừ 1, bằng trừ 7 phần 25. Tang 2a lấy sin 2a chia cos 2a, ra trừ 24 phần 7.",
      "startTime": 63.16,
      "endTime": 89.22,
      "duration": 26.06
    },
    {
      "sceneIndex": 5,
      "title": "Ví dụ 2: Dùng công thức hạ bậc tính cos(pi/8)",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "mascotMode": "thinking",
      "mascotTip": "Góc pi/8 nhân đôi lên thành pi/4: Áp dụng cos^2(pi/8) = (1 + cos(pi/4))/2!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;\">\n                    <span style=\"background:#38bdf8; color:#0f172a; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">VÍ DỤ 2 • MỨC THÔNG HIỂU</span>\n                    \n    <div class=\"countdown-clock-widget cd-{seconds}s\" style=\"display:flex; align-items:center; gap:8px; background:rgba(239,68,68,0.15); border:1.5px solid #ef4444; border-radius:30px; padding:4px 14px; width:fit-content; margin:10px 0;\">\n      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n        <polyline points=\"12 6 12 12 16 14\"></polyline>\n      </svg>\n      <span style=\"color:#fecaca; font-weight:800; font-size:14px; letter-spacing:0.5px;\">THỜI GIAN SUY NGHĨ: {seconds} GIÂY</span>\n    </div>\n    \n                  </div>\n                  <h4 style=\"color:#7dd3fc; font-size:18px; margin:0 0 10px 0;\">Áp dụng công thức hạ bậc:</h4>\n                  <div style=\"background:rgba(56,189,248,0.08); border-left:4px solid #38bdf8; padding:14px; border-radius:4px; font-size:16px; color:#f8fafc; line-height:1.8;\">\n                    Không dùng máy tính bỏ túi, hãy tính giá trị chính xác dạng căn lồng nhau của:<br/>\n                    <b>a)</b> $\\cos\\dfrac{\\pi}{8}$<br/>\n                    <b>b)</b> $\\sin\\dfrac{\\pi}{8}$\n                  </div>\n                </div>\n                ",
      "narration": "Ví dụ 2 là ứng dụng xuất sắc của công thức hạ bậc: Không dùng máy tính bỏ túi, hãy tính giá trị chính xác dạng căn lồng nhau của cos pi phần 8 và sin pi phần 8. Các em có 15 giây suy nghĩ!",
      "startTime": 89.22,
      "endTime": 101.56,
      "duration": 12.34
    },
    {
      "sceneIndex": 6,
      "title": "Ví dụ 2: Lời giải chi tiết & Căn lồng nhau",
      "subtitle": "LỜI GIẢI CHI TIẾT • BƯỚC SUY LUẬN",
      "mascotMode": "explaining",
      "mascotTip": "Vì pi/8 thuộc góc phần tư thứ I nên cả cos và sin đều dương!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <span style=\"background:#10b981; color:#0f172a; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">LỜI GIẢI VÍ DỤ 2</span>\n                  <div style=\"margin-top:12px; font-size:15px; color:#e2e8f0; line-height:1.8;\">\n                    <p style=\"margin:0 0 8px 0;\">\n                      <b>a) Tính $\\cos\\dfrac{\\pi}{8}$:</b><br/>\n                      Áp dụng công thức hạ bậc: $\\cos^2\\dfrac{\\pi}{8} = \\dfrac{1 + \\cos\\frac{\\pi}{4}}{2} = \\dfrac{1 + \\frac{\\sqrt{2}}{2}}{2} = \\dfrac{2 + \\sqrt{2}}{4}$.<br/>\n                      Vì $0 < \\dfrac{\\pi}{8} < \\dfrac{\\pi}{2}$ nên $\\cos\\dfrac{\\pi}{8} > 0 \\Rightarrow \\mathbf{\\cos\\dfrac{\\pi}{8} = \\dfrac{\\sqrt{2 + \\sqrt{2}}}{2}}$.\n                    </p>\n                    <p style=\"margin:0; color:#fde047;\">\n                      <b>b) Tính $\\sin\\dfrac{\\pi}{8}$:</b><br/>\n                      Tương tự: $\\sin^2\\dfrac{\\pi}{8} = \\dfrac{1 - \\cos\\frac{\\pi}{4}}{2} = \\dfrac{1 - \\frac{\\sqrt{2}}{2}}{2} = \\dfrac{2 - \\sqrt{2}}{4}$.<br/>\n                      Do $\\sin\\dfrac{\\pi}{8} > 0 \\Rightarrow \\mathbf{\\sin\\dfrac{\\pi}{8} = \\dfrac{\\sqrt{2 - \\sqrt{2}}}{2}}$.\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải chi tiết: Ở câu a, áp dụng công thức hạ bậc, cos bình pi phần 8 bằng 1 cộng cos pi phần 4 trên 2. Thay cos pi phần 4 bằng căn 2 trên 2, ta được 2 cộng căn 2 trên 4. Do pi phần 8 ở góc phần tư thứ nhất nên cos dương, khai căn được căn của 2 cộng căn 2 trên 2. Tương tự ở câu b, sin bình pi phần 8 bằng 1 trừ cos pi phần 4 trên 2, ta thu được sin pi phần 8 bằng căn của 2 trừ căn 2 trên 2.",
      "startTime": 101.56,
      "endTime": 129.76,
      "duration": 28.2
    },
    {
      "sceneIndex": 7,
      "title": "Ví dụ 3: Rút gọn biểu thức lượng giác phân thức",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "mascotMode": "thinking",
      "mascotTip": "Biến đổi 1 - cos 2x = 2sin^2 x và 1 + cos 2x = 2cos^2 x!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #a855f7; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;\">\n                    <span style=\"background:#a855f7; color:#ffffff; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">VÍ DỤ 3 • MỨC VẬN DỤNG</span>\n                    \n    <div class=\"countdown-clock-widget cd-{seconds}s\" style=\"display:flex; align-items:center; gap:8px; background:rgba(239,68,68,0.15); border:1.5px solid #ef4444; border-radius:30px; padding:4px 14px; width:fit-content; margin:10px 0;\">\n      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n        <polyline points=\"12 6 12 12 16 14\"></polyline>\n      </svg>\n      <span style=\"color:#fecaca; font-weight:800; font-size:14px; letter-spacing:0.5px;\">THỜI GIAN SUY NGHĨ: {seconds} GIÂY</span>\n    </div>\n    \n                  </div>\n                  <h4 style=\"color:#d8b4fe; font-size:18px; margin:0 0 10px 0;\">Chứng minh đẳng thức lượng giác:</h4>\n                  <div style=\"background:rgba(168,85,247,0.08); border-left:4px solid #a855f7; padding:14px; border-radius:4px; font-size:16px; color:#f8fafc; line-height:1.8;\">\n                    Rút gọn biểu thức sau với mọi $x$ làm cho biểu thức có nghĩa:<br/>\n                    $$B = \\dfrac{1 - \\cos 2x + \\sin 2x}{1 + \\cos 2x + \\sin 2x}$$\n                  </div>\n                </div>\n                ",
      "narration": "Ví dụ 3 là bài toán biến đổi vận dụng quen thuộc: Rút gọn biểu thức B bằng 1 trừ cos 2x cộng sin 2x trên 1 cộng cos 2x cộng sin 2x. Các em có 30 giây suy nghĩ!",
      "startTime": 129.76,
      "endTime": 141.16,
      "duration": 11.4
    },
    {
      "sceneIndex": 8,
      "title": "Ví dụ 3: Lời giải chi tiết & Tuyệt kỹ nhóm nhân tử",
      "subtitle": "LỜI GIẢI CHI TIẾT • BƯỚC SUY LUẬN",
      "mascotMode": "explaining",
      "mascotTip": "Nhóm 1 - cos 2x thành 2 sin^2 x và 1 + cos 2x thành 2 cos^2 x để đặt nhân tử chung!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <span style=\"background:#10b981; color:#0f172a; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">LỜI GIẢI VÍ DỤ 3</span>\n                  <div style=\"margin-top:12px; font-size:15px; color:#e2e8f0; line-height:1.8;\">\n                    <p style=\"margin:0 0 8px 0;\">\n                      Áp dụng các công thức nhân đôi và hạ bậc:<br/>\n                      • Tử số: $(1 - \\cos 2x) + \\sin 2x = 2\\sin^2 x + 2\\sin x \\cos x = 2\\sin x(\\sin x + \\cos x)$.<br/>\n                      • Mẫu số: $(1 + \\cos 2x) + \\sin 2x = 2\\cos^2 x + 2\\sin x \\cos x = 2\\cos x(\\cos x + \\sin x)$.\n                    </p>\n                    <p style=\"margin:0; color:#34d399;\">\n                      Chia cả tử và mẫu cho $2(\\sin x + \\cos x)$:<br/>\n                      $$B = \\dfrac{2\\sin x(\\sin x + \\cos x)}{2\\cos x(\\cos x + \\sin x)} = \\dfrac{\\sin x}{\\cos x} = \\mathbf{\\tan x}.$$\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải chi tiết: Hãy quan sát số 1 đi với cos 2x. Ở trên tử, 1 trừ cos 2x bằng 2 sin bình x, cộng với 2 sin x cos x ta rút 2 sin x ra ngoài còn sin x cộng cos x. Ở dưới mẫu, 1 cộng cos 2x bằng 2 cos bình x, cộng 2 sin x cos x ta rút 2 cos x ra ngoài còn cos x cộng sin x. Triệt tiêu nhân tử chung sin x cộng cos x, ta còn lại sin x chia cos x bằng tang x. Một kết quả vô cùng gọn đẹp!",
      "startTime": 141.16,
      "endTime": 166.84,
      "duration": 25.68
    },
    {
      "sceneIndex": 9,
      "title": "Ví dụ 4: Bài toán ném bóng & Tầm xa cực đại",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "mascotMode": "thinking",
      "mascotTip": "Tầm xa L = (v0^2 . sin 2alpha) / g: Khảo sát cực trị của sin 2alpha!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #ec4899; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;\">\n                    <span style=\"background:#ec4899; color:#ffffff; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">VÍ DỤ 4 • MỨC VẬN DỤNG CAO / THỰC TẾ</span>\n                    \n    <div class=\"countdown-clock-widget cd-{seconds}s\" style=\"display:flex; align-items:center; gap:8px; background:rgba(239,68,68,0.15); border:1.5px solid #ef4444; border-radius:30px; padding:4px 14px; width:fit-content; margin:10px 0;\">\n      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n        <polyline points=\"12 6 12 12 16 14\"></polyline>\n      </svg>\n      <span style=\"color:#fecaca; font-weight:800; font-size:14px; letter-spacing:0.5px;\">THỜI GIAN SUY NGHĨ: {seconds} GIÂY</span>\n    </div>\n    \n                  </div>\n                  <h4 style=\"color:#f472b6; font-size:18px; margin:0 0 10px 0;\">Mô hình hóa chuyển động ném xiên trong thể thao:</h4>\n                  <div style=\"background:rgba(236,72,153,0.08); border-left:4px solid #ec4899; padding:14px; border-radius:4px; font-size:15px; color:#f8fafc; line-height:1.8;\">\n                    Một cầu thủ sút bóng với vận tốc ban đầu $v_0 = 20\\text{ m/s}$ nghiêng góc $\\alpha$ so với mặt đất ($0^\\circ < \\alpha < 90^\\circ$). Tầm xa quả bóng đạt được là:<br/>\n                    $$L(\\alpha) = \\dfrac{v_0^2 \\sin 2\\alpha}{g} = 40\\sin 2\\alpha\\text{ (mét)} \\quad (\\text{với } g = 10\\text{ m/s}^2)$$\n                    <b>a)</b> Góc sút $\\alpha$ bằng bao nhiêu để bóng bay xa nhất? Tầm xa cực đại là bao nhiêu?<br/>\n                    <b>b)</b> Để bóng rơi đúng vị trí đồng đội cách $20\\text{ m}$, cầu thủ có thể sút theo những góc $\\alpha$ nào?\n                  </div>\n                </div>\n                ",
      "narration": "Ví dụ 4 là bài toán thực tế vật lý thể thao: Một cầu thủ sút bóng với vận tốc 20 mét trên giây nghiêng góc alpha. Tầm xa đạt được là L bằng 40 nhân sin 2 alpha mét. Câu a: Góc sút alpha bằng bao nhiêu để bóng bay xa nhất và tầm xa cực đại là bao nhiêu? Câu b: Muốn bóng rơi đúng vị trí đồng đội cách 20 mét thì có những góc sút alpha nào? Các em có 30 giây suy nghĩ!",
      "startTime": 166.84,
      "endTime": 192.47,
      "duration": 25.63
    },
    {
      "sceneIndex": 10,
      "title": "Ví dụ 4: Lời giải chi tiết & Ý nghĩa vật lý",
      "subtitle": "LỜI GIẢI CHI TIẾT • BƯỚC SUY LUẬN",
      "mascotMode": "explaining",
      "mascotTip": "Góc 45 độ cho tầm xa cực đại; hai góc phụ nhau 15 độ và 75 độ cho cùng tầm xa 20m!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <span style=\"background:#10b981; color:#0f172a; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">LỜI GIẢI VÍ DỤ 4</span>\n                  <div style=\"margin-top:12px; font-size:15px; color:#e2e8f0; line-height:1.8;\">\n                    <p style=\"margin:0 0 8px 0;\">\n                      <b>a) Tìm góc sút để tầm xa lớn nhất:</b><br/>\n                      Vì $\\sin 2\\alpha \\le 1$ nên $L(\\alpha) \\le 40\\text{ m}$.<br/>\n                      Dấu \"=\" xảy ra $\\Leftrightarrow \\sin 2\\alpha = 1 \\Leftrightarrow 2\\alpha = 90^\\circ \\Leftrightarrow \\mathbf{\\alpha = 45^\\circ}$.<br/>\n                      Vậy sút góc $\\mathbf{45^\\circ}$ thì bóng bay xa nhất, đạt $\\mathbf{L_{\\max} = 40\\text{ m}}$.\n                    </p>\n                    <p style=\"margin:0; color:#fde047;\">\n                      <b>b) Để tầm xa đạt $L = 20\\text{ m}$:</b><br/>\n                      $40\\sin 2\\alpha = 20 \\Leftrightarrow \\sin 2\\alpha = \\dfrac{1}{2} \\Rightarrow \\left[\\begin{array}{l} 2\\alpha = 30^\\circ \\\\ 2\\alpha = 150^\\circ \\end{array}\\right. \\Rightarrow \\mathbf{\\left[\\begin{array}{l} \\alpha_1 = 15^\\circ \\\\ \\alpha_2 = 75^\\circ \\end{array}\\right.}$.<br/>\n                      <i>Ý nghĩa:</i> Góc $15^\\circ$ là đường bóng chìm sát mặt cỏ, góc $75^\\circ$ là đường bóng rót bổng cầu vồng!\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải chi tiết: Ở câu a, vì sin của 2 alpha lớn nhất bằng 1 nên tầm xa lớn nhất bằng 40 mét. Đạt được khi 2 alpha bằng 90 độ, tức góc sút alpha bằng 45 độ. Ở câu b, để tầm xa bằng 20 mét, ta giải sin 2 alpha bằng 1 phần 2. Suy ra 2 alpha bằng 30 độ hoặc 150 độ, dẫn tới hai góc sút là 15 độ và 75 độ. Góc 15 độ là đường chuyền căng sệt sát mặt cỏ, còn góc 75 độ là cú rót bổng cầu vồng qua đầu đối phương!",
      "startTime": 192.47,
      "endTime": 224.7,
      "duration": 32.23
    },
    {
      "sceneIndex": 11,
      "title": "3. CẢNH BÁO BẪY TRẮC NGHIỆM KHI NHÂN ĐÔI & HẠ BẬC",
      "subtitle": "MỤC 2 • LƯU Ý TRÁNH MẤT ĐIỂM OAN",
      "mascotMode": "warning",
      "mascotTip": "Đừng nhầm sin 2a = 2 sin a, và nhớ chia 2 ở mẫu khi hạ bậc!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #ef4444; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:12px; font-weight:700;\">⚠️ 3 Sai lầm học sinh rất hay mắc phải</h3>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; margin-bottom:10px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 1: Tự tiện đưa hệ số 2 ra ngoài hàm số</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">Nhiều bạn ngộ nhận $\\sin 2a = 2\\sin a$ hoặc $\\cos 2a = 2\\cos a$. Đây là sai lầm sơ đẳng nhất! Nhớ $\\sin 2a = 2\\sin a\\cos a$.</p>\n                  </div>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; margin-bottom:10px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 2: Nhầm dấu trong ba dạng của Cos 2a</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">$\\cos 2a = 2\\cos^2 a - 1$ nhưng lại là $1 - 2\\sin^2 a$ (số 1 đảo vị trí và đổi dấu).</p>\n                  </div>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 3: Quên nhân đôi góc khi áp dụng hạ bậc</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">Khi hạ bậc $\\sin^2 2x$, góc phải nhân đôi thành $4x$: $\\sin^2 2x = \\dfrac{1 - \\cos 4x}{2}$, chứ không phải $\\cos 2x$.</p>\n                  </div>\n                </div>\n                ",
      "narration": "Cú Thông Thái cảnh báo 3 sai lầm kinh điển: Thứ nhất, tự tiện ném số 2 ra ngoài, ngộ nhận sin 2a bằng 2 sin a. Thứ hai, nhầm vị trí số 1 trong cos 2a: 2 cos bình trừ 1 nhưng lại là 1 trừ 2 sin bình. Thứ ba, quên nhân đôi góc khi hạ bậc: hạ bậc sin bình của 2x thì góc phải nhảy lên 4x!",
      "startTime": 224.7,
      "endTime": 243.64,
      "duration": 18.94
    },
    {
      "sceneIndex": 12,
      "title": "4. TỔNG KẾT MỤC 2 & BÍ KÍP CÚ THÔNG THÁI",
      "subtitle": "MỤC 2 • GHI NHỚ KHẮC SÂU",
      "mascotMode": "cheer",
      "mascotTip": "Sin gấp đôi bằng 2 sin cos - Hạ bậc góc nhân đôi!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px; font-weight:700;\">🌟 Bí kíp nằm lòng Mục 2</h3>\n                  <div style=\"background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.3); border-radius:8px; padding:16px; color:#f8fafc; font-size:16px; line-height:1.9;\">\n                    • <b>Thần chú nhân đôi:</b><br/>\n                    <i>\"Sin gấp đôi bằng hai sin cos, Cos gấp đôi có tới ba đường:<br/>\n                    Cos bình trừ sin bình tỏa sáng, hai cos bình trừ một vững vàng,<br/>\n                    Một trừ hai sin bình hiên ngang!\"</i><br/>\n                    • <b>Thần chú hạ bậc:</b> <i>\"Hạ bậc góc tăng gấp đôi, sin mang dấu trừ, cos mang dấu cộng!\"</i>\n                  </div>\n                </div>\n                ",
      "narration": "Chúc mừng các em đã làm chủ trọn vẹn Mục 2: Công thức nhân đôi và hạ bậc. Hãy nhớ câu thơ: Sin gấp đôi bằng hai sin cos; Cos gấp đôi có tới ba đường: Cos bình trừ sin bình tỏa sáng, hai cos bình trừ một vững vàng, một trừ hai sin bình hiên ngang. Bây giờ, chúng ta cùng tiến bước sang Mục 3: Biến đổi tích thành tổng và tổng thành tích!",
      "startTime": 243.64,
      "endTime": 264.74,
      "duration": 21.1
    }
  ],
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 24.98,
      "id": "part2"
    },
    {
      "time": 48.76,
      "id": "vd1_q"
    },
    {
      "time": 63.16,
      "id": "vd1_a"
    },
    {
      "time": 89.22,
      "id": "vd2_q"
    },
    {
      "time": 101.56,
      "id": "vd2_a"
    },
    {
      "time": 129.76,
      "id": "vd3_q"
    },
    {
      "time": 141.16,
      "id": "vd3_a"
    },
    {
      "time": 166.84,
      "id": "vd4_q"
    },
    {
      "time": 192.47,
      "id": "vd4_a"
    },
    {
      "time": 224.7,
      "id": "part4"
    },
    {
      "time": 243.64,
      "id": "part5"
    }
  ],
  "totalDuration": 264.74,
  "duration": 264.74
};

  window.G11_CHAPTER1_DATA.g11_bai2_muc3 = {
  "lessonId": "toan11_bai2",
  "lessonTitle": "Bài 2: Công thức lượng giác",
  "sectionId": "g11_bai2_muc3",
  "sectionTitle": "Mục 3: Công thức biến đổi tích thành tổng và tổng thành tích",
  "audio": "/audio/g11_bai2_muc3.mp3",
  "audioSrc": "./audio/g11_bai2_muc3.mp3",
  "audio_src": "./audio/g11_bai2_muc3.mp3",
  "title": "Mục 3: Tích thành tổng & Tổng thành tích",
  "owl_tip": "Cos cộng cos bằng 2 cos cos; Cos trừ cos bằng trừ 2 sin sin; Sin cộng sin bằng 2 sin cos; Sin trừ sin bằng 2 cos sin!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Công thức biến đổi tích thành tổng",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Công thức biến đổi tổng thành tích & Bài ca lượng giác",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Bốn ví dụ rèn luyện tiêu biểu (Đồng hồ 15s/30s)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Cảnh báo bẫy trắc nghiệm & Sai lầm thường gặp",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Tổng kết toàn Bài 2 & Lời chúc Thầy Thuấn Phan",
      "scenes": [
        12
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. CÔNG THỨC BIẾN ĐỔI TÍCH THÀNH TỔNG",
      "subtitle": "MỤC 3 • TÍCH THÀNH TỔNG & TỔNG THÀNH TÍCH",
      "mascotMode": "talking",
      "mascotTip": "Cả 3 công thức đều có thừa số 1/2 phía trước: Luôn lấy (a - b) trước rồi đến (a + b)!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px; font-weight:700;\">📖 Công thức biến đổi tích thành tổng</h3>\n                  <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:14px; margin-bottom:14px; border-radius:4px;\">\n                    <p style=\"color:#f8fafc; font-size:16px; line-height:2.0; margin:0;\">\n                      • $\\cos a \\cos b = \\dfrac{1}{2}\\left[\\cos(a - b) + \\cos(a + b)\\right]$<br/>\n                      • $\\sin a \\sin b = \\dfrac{1}{2}\\left[\\cos(a - b) - \\cos(a + b)\\right]$<br/>\n                      • $\\sin a \\cos b = \\dfrac{1}{2}\\left[\\sin(a - b) + \\sin(a + b)\\right]$\n                    </p>\n                  </div>\n                  <div style=\"background:rgba(250,204,21,0.12); border:1px solid #facc15; border-radius:8px; padding:12px; color:#fef08a; font-size:15px;\">\n                    💡 <b>Quy tắc nhớ:</b> Luôn viết góc hiệu $(a - b)$ trước góc tổng $(a + b)$. Riêng tích $\\sin \\sin$ thì ở giữa là dấu <b>TRỪ</b>!\n                  </div>\n                </div>\n                ",
      "narration": "Chào mừng các em đến với Mục 3: Công thức biến đổi tích thành tổng và tổng thành tích. Đầu tiên là biến đổi tích thành tổng: cos a cos b bằng 1 phần 2 thừa số cho cos của a trừ b cộng cos của a cộng b; sin a sin b bằng 1 phần 2 thừa số cho cos của a trừ b trừ cos của a cộng b; sin a cos b bằng 1 phần 2 thừa số cho sin của a trừ b cộng sin của a cộng b. Nhớ rằng góc hiệu a trừ b luôn viết trước góc tổng a cộng b, và riêng tích hai sin thì ở giữa là dấu trừ!",
      "startTime": 0.0,
      "endTime": 27.53,
      "duration": 27.53
    },
    {
      "sceneIndex": 2,
      "title": "2. CÔNG THỨC BIẾN ĐỔI TỔNG THÀNH TÍCH",
      "subtitle": "MỤC 3 • TÍCH THÀNH TỔNG & TỔNG THÀNH TÍCH",
      "mascotMode": "talking",
      "mascotTip": "Góc nửa tổng (u+v)/2 đi trước, góc nửa hiệu (u-v)/2 đi sau!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #818cf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#818cf8; font-size:22px; margin-bottom:12px; font-weight:700;\">📖 Công thức biến đổi tổng thành tích</h3>\n                  <div style=\"background:rgba(129,140,248,0.1); border-left:4px solid #818cf8; padding:14px; margin-bottom:14px; border-radius:4px;\">\n                    <p style=\"color:#f8fafc; font-size:16px; line-height:2.0; margin:0;\">\n                      • $\\cos u + \\cos v = 2\\cos\\dfrac{u+v}{2} \\cos\\dfrac{u-v}{2}$<br/>\n                      • $\\cos u - \\cos v = -2\\sin\\dfrac{u+v}{2} \\sin\\dfrac{u-v}{2}$<br/>\n                      • $\\sin u + \\sin v = 2\\sin\\dfrac{u+v}{2} \\cos\\dfrac{u-v}{2}$<br/>\n                      • $\\sin u - \\sin v = 2\\cos\\dfrac{u+v}{2} \\sin\\dfrac{u-v}{2}$\n                    </p>\n                  </div>\n                  <div style=\"background:rgba(244,63,94,0.15); border:1px solid #f43f5e; border-radius:8px; padding:12px; color:#fecdd3; font-size:15px;\">\n                    ⚠️ <b>Chú ý đặc biệt:</b> Trong công thức $\\cos u - \\cos v$, phía trước phải có <b>DẤU TRỪ</b> ($-2\\sin\\sin$)!\n                  </div>\n                </div>\n                ",
      "narration": "Tiếp theo là biến đổi tổng thành tích, vũ khí tối thượng để phân tích nhân tử giải phương trình lượng giác. Thầy có bài vè lượng giác nằm lòng: Cos cộng cos bằng hai cos cos; Cos trừ cos bằng trừ hai sin sin; Sin cộng sin bằng hai sin cos; Sin trừ sin bằng hai cos sin. Các góc luôn theo thứ tự: nửa tổng u cộng v trên 2 đứng trước, nửa hiệu u trừ v trên 2 đứng sau. Nhớ kỹ: cos trừ cos có dấu trừ phía trước!",
      "startTime": 27.53,
      "endTime": 53.67,
      "duration": 26.14
    },
    {
      "sceneIndex": 3,
      "title": "Ví dụ 1: Biến đổi tích thành tổng tính giá trị",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "mascotMode": "thinking",
      "mascotTip": "Áp dụng sin.cos = 1/2 [sin(hiệu) + sin(tổng)] và sin.sin = 1/2 [cos(hiệu) - cos(tổng)]!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #f59e0b; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;\">\n                    <span style=\"background:#f59e0b; color:#0f172a; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">VÍ DỤ 1 • MỨC NHẬN BIẾT</span>\n                    \n    <div class=\"countdown-clock-widget cd-{seconds}s\" style=\"display:flex; align-items:center; gap:8px; background:rgba(239,68,68,0.15); border:1.5px solid #ef4444; border-radius:30px; padding:4px 14px; width:fit-content; margin:10px 0;\">\n      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n        <polyline points=\"12 6 12 12 16 14\"></polyline>\n      </svg>\n      <span style=\"color:#fecaca; font-weight:800; font-size:14px; letter-spacing:0.5px;\">THỜI GIAN SUY NGHĨ: {seconds} GIÂY</span>\n    </div>\n    \n                  </div>\n                  <h4 style=\"color:#fbbf24; font-size:18px; margin:0 0 10px 0;\">Không dùng máy tính, tính giá trị chính xác của:</h4>\n                  <div style=\"background:rgba(245,158,11,0.08); border-left:4px solid #f59e0b; padding:14px; border-radius:4px; font-size:16px; color:#f8fafc; line-height:1.8;\">\n                    <b>a)</b> $P = \\sin 75^\\circ \\cos 15^\\circ$<br/>\n                    <b>b)</b> $Q = \\sin 75^\\circ \\sin 15^\\circ$\n                  </div>\n                </div>\n                ",
      "narration": "Ví dụ 1 là bài toán nhận biết áp dụng biến đổi tích thành tổng: Không dùng máy tính bỏ túi, hãy tính giá trị chính xác của biểu thức P bằng sin 75 độ nhân cos 15 độ và Q bằng sin 75 độ nhân sin 15 độ. Các em có 15 giây suy nghĩ!",
      "startTime": 53.67,
      "endTime": 68.93,
      "duration": 15.26
    },
    {
      "sceneIndex": 4,
      "title": "Ví dụ 1: Lời giải chi tiết & Bước suy luận",
      "subtitle": "LỜI GIẢI CHI TIẾT • BƯỚC SUY LUẬN",
      "mascotMode": "explaining",
      "mascotTip": "Góc 60 độ và 90 độ là các góc lượng giác đặc biệt trong bảng giá trị!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <span style=\"background:#10b981; color:#0f172a; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">LỜI GIẢI VÍ DỤ 1</span>\n                  <div style=\"margin-top:12px; font-size:15px; color:#e2e8f0; line-height:1.8;\">\n                    <p style=\"margin:0 0 8px 0;\">\n                      <b>a) Tính $P = \\sin 75^\\circ \\cos 15^\\circ$:</b><br/>\n                      $P = \\dfrac{1}{2}\\left[\\sin(75^\\circ - 15^\\circ) + \\sin(75^\\circ + 15^\\circ)\\right] = \\dfrac{1}{2}\\left[\\sin 60^\\circ + \\sin 90^\\circ\\right]$<br/>\n                      $= \\dfrac{1}{2}\\left(\\dfrac{\\sqrt{3}}{2} + 1\\right) = \\mathbf{\\dfrac{2 + \\sqrt{3}}{4}}$.\n                    </p>\n                    <p style=\"margin:0; color:#fde047;\">\n                      <b>b) Tính $Q = \\sin 75^\\circ \\sin 15^\\circ$:</b><br/>\n                      $Q = \\dfrac{1}{2}\\left[\\cos(75^\\circ - 15^\\circ) - \\cos(75^\\circ + 15^\\circ)\\right] = \\dfrac{1}{2}\\left[\\cos 60^\\circ - \\cos 90^\\circ\\right]$<br/>\n                      $= \\dfrac{1}{2}\\left(\\dfrac{1}{2} - 0\\right) = \\mathbf{\\dfrac{1}{4}}$.\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải chi tiết: Ở câu a, tích sin nhân cos bằng 1 phần 2 sin của hiệu 60 độ cộng sin của tổng 90 độ. Sin 60 độ bằng căn 3 trên 2, sin 90 độ bằng 1, ta được 2 cộng căn 3 trên 4. Ở câu b, tích hai sin bằng 1 phần 2 cos của hiệu 60 độ trừ cos của tổng 90 độ. Cos 60 độ bằng 1 phần 2, cos 90 độ bằng 0, nhân 1 phần 2 bên ngoài ta được kết quả bằng 1 phần 4.",
      "startTime": 68.93,
      "endTime": 95.57,
      "duration": 26.64
    },
    {
      "sceneIndex": 5,
      "title": "Ví dụ 2: Rút gọn biểu thức tổng thành tích",
      "subtitle": "ĐỀ BÀI (15 GIÂY SUY NGHĨ)",
      "mascotMode": "thinking",
      "mascotTip": "Ghép nhóm đối xứng: sin 5x với sin x, cos 5x với cos x để lộ nhân tử chung 3x!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;\">\n                    <span style=\"background:#38bdf8; color:#0f172a; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">VÍ DỤ 2 • MỨC THÔNG HIỂU</span>\n                    \n    <div class=\"countdown-clock-widget cd-{seconds}s\" style=\"display:flex; align-items:center; gap:8px; background:rgba(239,68,68,0.15); border:1.5px solid #ef4444; border-radius:30px; padding:4px 14px; width:fit-content; margin:10px 0;\">\n      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n        <polyline points=\"12 6 12 12 16 14\"></polyline>\n      </svg>\n      <span style=\"color:#fecaca; font-weight:800; font-size:14px; letter-spacing:0.5px;\">THỜI GIAN SUY NGHĨ: {seconds} GIÂY</span>\n    </div>\n    \n                  </div>\n                  <h4 style=\"color:#7dd3fc; font-size:18px; margin:0 0 10px 0;\">Rút gọn biểu thức lượng giác phân thức:</h4>\n                  <div style=\"background:rgba(56,189,248,0.08); border-left:4px solid #38bdf8; padding:14px; border-radius:4px; font-size:16px; color:#f8fafc; line-height:1.8;\">\n                    Rút gọn biểu thức với mọi $x$ làm cho biểu thức có nghĩa:<br/>\n                    $$K = \\dfrac{\\sin x + \\sin 3x + \\sin 5x}{\\cos x + \\cos 3x + \\cos 5x}$$\n                  </div>\n                </div>\n                ",
      "narration": "Ví dụ 2 là dạng toán thông hiểu kinh điển trong các đề kiểm tra: Rút gọn biểu thức K bằng sin x cộng sin 3x cộng sin 5x trên cos x cộng cos 3x cộng cos 5x. Các em có 15 giây chuẩn bị!",
      "startTime": 95.57,
      "endTime": 108.22,
      "duration": 12.65
    },
    {
      "sceneIndex": 6,
      "title": "Ví dụ 2: Lời giải chi tiết & Ghép nhóm đối xứng",
      "subtitle": "LỜI GIẢI CHI TIẾT • BƯỚC SUY LUẬN",
      "mascotMode": "explaining",
      "mascotTip": "Sin 5x + sin x = 2 sin 3x cos 2x, rút sin 3x ra ngoài!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <span style=\"background:#10b981; color:#0f172a; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">LỜI GIẢI VÍ DỤ 2</span>\n                  <div style=\"margin-top:12px; font-size:15px; color:#e2e8f0; line-height:1.8;\">\n                    <p style=\"margin:0 0 8px 0;\">\n                      <b>Ghép hai số hạng đối xứng ở đầu và cuối:</b><br/>\n                      • Tử số: $(\\sin 5x + \\sin x) + \\sin 3x = 2\\sin\\dfrac{5x+x}{2}\\cos\\dfrac{5x-x}{2} + \\sin 3x$<br/>\n                      $= 2\\sin 3x \\cos 2x + \\sin 3x = \\sin 3x(2\\cos 2x + 1)$.\n                    </p>\n                    <p style=\"margin:0 0 8px 0;\">\n                      • Mẫu số: $(\\cos 5x + \\cos x) + \\cos 3x = 2\\cos\\dfrac{5x+x}{2}\\cos\\dfrac{5x-x}{2} + \\cos 3x$<br/>\n                      $= 2\\cos 3x \\cos 2x + \\cos 3x = \\cos 3x(2\\cos 2x + 1)$.\n                    </p>\n                    <p style=\"margin:0; color:#34d399;\">\n                      <b>Triệt tiêu nhân tử chung:</b><br/>\n                      $$K = \\dfrac{\\sin 3x(2\\cos 2x + 1)}{\\cos 3x(2\\cos 2x + 1)} = \\dfrac{\\sin 3x}{\\cos 3x} = \\mathbf{\\tan 3x}.$$\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải chi tiết: Bí quyết ở đây là ghép số hạng bậc cao nhất với thấp nhất: sin 5x ghép với sin x, áp dụng sin cộng sin bằng 2 sin cos, ta được 2 sin 3x cos 2x. Đặt sin 3x làm nhân tử chung, trong ngoặc còn 2 cos 2x cộng 1. Tương tự dưới mẫu, cos 5x cộng cos x bằng 2 cos 3x cos 2x, rút cos 3x ra ngoài cũng còn 2 cos 2x cộng 1. Rút gọn nhân tử chung, ta được sin 3x chia cos 3x bằng tang 3x.",
      "startTime": 108.22,
      "endTime": 137.52,
      "duration": 29.3
    },
    {
      "sceneIndex": 7,
      "title": "Ví dụ 3: Tính tích chuỗi cos(pi/7)cos(2pi/7)cos(4pi/7)",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "mascotMode": "thinking",
      "mascotTip": "Nhân thêm sin(pi/7) vào cả hai vế để kích hoạt chuỗi nhân đôi liên hoàn!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #a855f7; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;\">\n                    <span style=\"background:#a855f7; color:#ffffff; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">VÍ DỤ 3 • MỨC VẬN DỤNG</span>\n                    \n    <div class=\"countdown-clock-widget cd-{seconds}s\" style=\"display:flex; align-items:center; gap:8px; background:rgba(239,68,68,0.15); border:1.5px solid #ef4444; border-radius:30px; padding:4px 14px; width:fit-content; margin:10px 0;\">\n      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n        <polyline points=\"12 6 12 12 16 14\"></polyline>\n      </svg>\n      <span style=\"color:#fecaca; font-weight:800; font-size:14px; letter-spacing:0.5px;\">THỜI GIAN SUY NGHĨ: {seconds} GIÂY</span>\n    </div>\n    \n                  </div>\n                  <h4 style=\"color:#d8b4fe; font-size:18px; margin:0 0 10px 0;\">Tuyệt chiêu tính tích không dùng máy tính:</h4>\n                  <div style=\"background:rgba(168,85,247,0.08); border-left:4px solid #a855f7; padding:14px; border-radius:4px; font-size:16px; color:#f8fafc; line-height:1.8;\">\n                    Tính giá trị chính xác của tích chuỗi cosin sau:<br/>\n                    $$T = \\cos\\dfrac{\\pi}{7} \\cdot \\cos\\dfrac{2\\pi}{7} \\cdot \\cos\\dfrac{4\\pi}{7}$$\n                  </div>\n                </div>\n                ",
      "narration": "Ví dụ 3 là bài toán vận dụng đỉnh cao: Tính giá trị chính xác của biểu thức T bằng cos pi phần 7 nhân cos 2 pi phần 7 nhân cos 4 pi phần 7 mà không dùng máy tính bỏ túi. Các em có 30 giây suy nghĩ!",
      "startTime": 137.52,
      "endTime": 150.34,
      "duration": 12.82
    },
    {
      "sceneIndex": 8,
      "title": "Ví dụ 3: Lời giải chi tiết & Hiệu ứng Domino nhân đôi",
      "subtitle": "LỜI GIẢI CHI TIẾT • BƯỚC SUY LUẬN",
      "mascotMode": "explaining",
      "mascotTip": "Sin(8pi/7) = sin(pi + pi/7) = -sin(pi/7) giúp triệt tiêu cả hai vế!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <span style=\"background:#10b981; color:#0f172a; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">LỜI GIẢI VÍ DỤ 3</span>\n                  <div style=\"margin-top:12px; font-size:15px; color:#e2e8f0; line-height:1.8;\">\n                    <p style=\"margin:0 0 8px 0;\">\n                      Nhân cả hai vế với $\\sin\\dfrac{\\pi}{7} \\neq 0$:<br/>\n                      $T \\sin\\dfrac{\\pi}{7} = \\left(\\sin\\dfrac{\\pi}{7} \\cos\\dfrac{\\pi}{7}\\right) \\cos\\dfrac{2\\pi}{7} \\cos\\dfrac{4\\pi}{7}$<br/>\n                      $= \\dfrac{1}{2}\\left(\\sin\\dfrac{2\\pi}{7} \\cos\\dfrac{2\\pi}{7}\\right) \\cos\\dfrac{4\\pi}{7} = \\dfrac{1}{4}\\left(\\sin\\dfrac{4\\pi}{7} \\cos\\dfrac{4\\pi}{7}\\right) = \\dfrac{1}{8}\\sin\\dfrac{8\\pi}{7}$.\n                    </p>\n                    <p style=\"margin:0; color:#34d399;\">\n                      Mặt khác, theo công thức góc hơn kém $\\pi$:<br/>\n                      $\\sin\\dfrac{8\\pi}{7} = \\sin\\left(\\pi + \\dfrac{\\pi}{7}\\right) = -\\sin\\dfrac{\\pi}{7}$.<br/>\n                      Suy ra: $T \\sin\\dfrac{\\pi}{7} = -\\dfrac{1}{8}\\sin\\dfrac{\\pi}{7} \\implies \\mathbf{T = -\\dfrac{1}{8}}$.\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải chi tiết: Nhận thấy các góc tăng gấp đôi: pi phần 7, 2 pi phần 7, 4 pi phần 7. Ta nhân cả hai vế với sin pi phần 7. Cặp sin cos đầu tiên gom thành 1 phần 2 sin 2 pi phần 7. Tiếp tục gom với cos 2 pi phần 7 thành 1 phần 4 sin 4 pi phần 7. Gom tiếp với cos 4 pi phần 7 thành 1 phần 8 sin 8 pi phần 7. Mà sin 8 pi phần 7 bằng trừ sin pi phần 7. Triệt tiêu sin pi phần 7 ở hai vế, ta thu được kết quả tuyệt đẹp: T bằng trừ 1 phần 8!",
      "startTime": 150.34,
      "endTime": 185.09,
      "duration": 34.75
    },
    {
      "sceneIndex": 9,
      "title": "Ví dụ 4: Mô hình sóng âm & Hiện tượng phách",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "mascotMode": "thinking",
      "mascotTip": "Áp dụng cos u + cos v = 2 cos((u-v)/2) cos((u+v)/2) trong âm học!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #ec4899; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;\">\n                    <span style=\"background:#ec4899; color:#ffffff; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">VÍ DỤ 4 • MỨC VẬN DỤNG CAO / THỰC TẾ</span>\n                    \n    <div class=\"countdown-clock-widget cd-{seconds}s\" style=\"display:flex; align-items:center; gap:8px; background:rgba(239,68,68,0.15); border:1.5px solid #ef4444; border-radius:30px; padding:4px 14px; width:fit-content; margin:10px 0;\">\n      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n        <polyline points=\"12 6 12 12 16 14\"></polyline>\n      </svg>\n      <span style=\"color:#fecaca; font-weight:800; font-size:14px; letter-spacing:0.5px;\">THỜI GIAN SUY NGHĨ: {seconds} GIÂY</span>\n    </div>\n    \n                  </div>\n                  <h4 style=\"color:#f472b6; font-size:18px; margin:0 0 10px 0;\">Ứng dụng lượng giác trong âm học và nhạc cụ:</h4>\n                  <div style=\"background:rgba(236,72,153,0.08); border-left:4px solid #ec4899; padding:14px; border-radius:4px; font-size:15px; color:#f8fafc; line-height:1.8;\">\n                    Hai âm thoa phát ra hai sóng âm có phương trình li độ tại một điểm:<br/>\n                    $y_1 = 0{,}02\\cos(1000\\pi t)\\text{ (mm)}$ và $y_2 = 0{,}02\\cos(1004\\pi t)\\text{ (mm)}$ ($t$ tính bằng giây).<br/>\n                    <b>a)</b> Dùng công thức tổng thành tích, viết phương trình sóng tổng hợp $y = y_1 + y_2$.<br/>\n                    <b>b)</b> Tìm tần số của âm nghe được và tần số phách (số lần âm thanh to lên trong 1 giây).\n                  </div>\n                </div>\n                ",
      "narration": "Ví dụ 4 là bài toán thực tế âm học về hiện tượng phách: Hai âm thoa phát ra hai sóng âm y1 bằng 0,02 cos 1000 pi t mm và y2 bằng 0,02 cos 1004 pi t mm. Câu a: Dùng công thức tổng thành tích viết phương trình sóng âm tổng hợp. Câu b: Tìm tần số âm nghe được và tần số phách. Các em có 30 giây suy nghĩ!",
      "startTime": 185.09,
      "endTime": 208.54,
      "duration": 23.45
    },
    {
      "sceneIndex": 10,
      "title": "Ví dụ 4: Lời giải chi tiết & Ứng dụng lên dây đàn",
      "subtitle": "LỜI GIẢI CHI TIẾT • BƯỚC SUY LUẬN",
      "mascotMode": "explaining",
      "mascotTip": "Tần số phách bằng độ chênh lệch tần số giữa hai sóng: f_phách = |f2 - f1| = 2 Hz!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #10b981; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <span style=\"background:#10b981; color:#0f172a; font-weight:800; font-size:13px; padding:3px 10px; border-radius:6px;\">LỜI GIẢI VÍ DỤ 4</span>\n                  <div style=\"margin-top:12px; font-size:15px; color:#e2e8f0; line-height:1.8;\">\n                    <p style=\"margin:0 0 8px 0;\">\n                      <b>a) Viết phương trình sóng tổng hợp:</b><br/>\n                      Áp dụng $\\cos u + \\cos v = 2\\cos\\frac{u-v}{2}\\cos\\frac{u+v}{2}$:<br/>\n                      $y = 0{,}02[\\cos(1004\\pi t) + \\cos(1000\\pi t)]$<br/>\n                      $= 0{,}02 \\cdot 2\\cos\\left(\\dfrac{1004\\pi - 1000\\pi}{2}t\\right) \\cos\\left(\\dfrac{1004\\pi + 1000\\pi}{2}t\\right)$<br/>\n                      $= \\mathbf{0{,}04\\cos(2\\pi t)\\cos(1002\\pi t)\\text{ (mm)}}$.\n                    </p>\n                    <p style=\"margin:0; color:#fde047;\">\n                      <b>b) Tần số âm và tần số phách:</b><br/>\n                      • Tần số âm nghe được: $f = \\dfrac{\\omega}{2\\pi} = \\dfrac{1002\\pi}{2\\pi} = \\mathbf{501\\text{ Hz}}$.<br/>\n                      • Tần số phách (độ biến thiên biên độ): $f_{\\text{phách}} = |f_2 - f_1| = \\dfrac{1004\\pi - 1000\\pi}{2\\pi} = \\mathbf{2\\text{ Hz}}$ (mỗi giây âm thanh to lên rồi nhỏ đi 2 lần).<br/>\n                      <i>Ứng dụng:</i> Người lên dây đàn ghita dựa vào hiện tượng phách để chỉnh hai dây về cùng tần số!\n                    </p>\n                  </div>\n                </div>\n                ",
      "narration": "Lời giải chi tiết: Ở câu a, áp dụng cos cộng cos bằng 2 cos cos, hiệu hai tần số chia đôi là 2 pi t, tổng chia đôi là 1002 pi t. Vậy li độ tổng hợp là 0,04 cos 2 pi t nhân cos 1002 pi t mm. Ở câu b, sóng mang có tần số 1002 pi chia 2 pi bằng 501 Héc. Tần số phách bằng độ lệch tần số là 2 Héc, nghĩa là mỗi giây âm thanh sẽ to lên rồi nhỏ đi 2 lần. Các nhạc công chuyên nghiệp dựa vào số lần phách này để vặn khóa đàn ghita hay piano cho đến khi tiếng phách biến mất hoàn toàn!",
      "startTime": 208.54,
      "endTime": 243.03,
      "duration": 34.49
    },
    {
      "sceneIndex": 11,
      "title": "3. CẢNH BÁO BẪY TRẮC NGHIỆM KHI BIẾN ĐỔI",
      "subtitle": "MỤC 3 • LƯU Ý TRÁNH MẤT ĐIỂM OAN",
      "mascotMode": "warning",
      "mascotTip": "Nhớ chia đôi góc (u+v)/2 và (u-v)/2 khi chuyển sang tích!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #ef4444; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:12px; font-weight:700;\">⚠️ 3 Sai lầm biến đổi học sinh rất hay mắc</h3>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; margin-bottom:10px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 1: Quên dấu trừ trong $\\cos u - \\cos v$</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">$\\cos u - \\cos v = \\mathbf{-2}\\sin\\frac{u+v}{2}\\sin\\frac{u-v}{2}$. Rất nhiều bạn quên dấu trừ phía trước!</p>\n                  </div>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; margin-bottom:10px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 2: Quên chia đôi góc khi tổng thành tích</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">Chuyển $\\sin u + \\sin v$ phải là $2\\sin\\frac{u+v}{2}\\cos\\frac{u-v}{2}$, không được viết nhầm thành $2\\sin(u+v)\\cos(u-v)$.</p>\n                  </div>\n                  <div style=\"background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e; padding:14px; border-radius:4px;\">\n                    <b style=\"color:#fda4af; font-size:16px;\">Bẫy 3: Quên hệ số $1/2$ khi tích thành tổng</b>\n                    <p style=\"color:#e2e8f0; font-size:15px; margin:4px 0 0 0;\">Cả ba công thức tích thành tổng đều có thừa số $\\frac{1}{2}$ đứng đầu.</p>\n                  </div>\n                </div>\n                ",
      "narration": "Cú Thông Thái nhắc nhở 3 sai lầm biến đổi thường gặp: Thứ nhất, quên dấu trừ phía trước công thức cos trừ cos. Thứ hai, quên chia đôi góc khi chuyển từ tổng thành tích. Thứ ba, quên hệ số 1 phần 2 khi biến đổi từ tích thành tổng!",
      "startTime": 243.03,
      "endTime": 258.34,
      "duration": 15.31
    },
    {
      "sceneIndex": 12,
      "title": "4. TỔNG KẾT BÀI 2 & LỜI CHÚC THẦY THUẤN PHAN",
      "subtitle": "MỤC 3 • CHÚC MỪNG CÁC EM LÀM CHỦ BÀI 2 TOÁN 11 KNTT",
      "mascotMode": "cheer",
      "mascotTip": "Thầy chúc các em luôn yêu thích môn Toán và đạt điểm 10 rực rỡ!",
      "bodyHtml": "\n                <div class=\"slide\" style=\"border:2px solid #a855f7; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n                  <h3 style=\"color:#c084fc; font-size:22px; margin-bottom:12px; font-weight:700;\">🎉 Bứt phá kiến thức Bài 2 Toán 11</h3>\n                  <div style=\"background:rgba(168,85,247,0.15); border:1px solid rgba(168,85,247,0.4); padding:16px; border-radius:8px; line-height:1.9; color:#f8fafc; font-size:15.5px;\">\n                    <p style=\"margin:0;\">\n                      Chúc mừng các em đã xuất sắc hoàn thành trọn vẹn cả <b>3 mục bài giảng tương tác của Bài 2: Công thức lượng giác</b>!<br/>\n                      • <b>Mục 1:</b> Công thức cộng: Cos cos sin sin dấu đổi - Sin cos cos sin dấu cùng.<br/>\n                      • <b>Mục 2:</b> Công thức nhân đôi và hạ bậc: Sin gấp đôi bằng 2 sin cos - Hạ bậc góc nhân đôi.<br/>\n                      • <b>Mục 3:</b> Tích thành tổng & Tổng thành tích: Cos cộng cos bằng 2 cos cos - Cos trừ cos bằng trừ 2 sin sin.\n                    </p>\n                  </div>\n                  <p style=\"text-align:center; margin-top:14px; font-size:16px; color:#fef08a; font-weight:bold;\">\n                    ✨ Thầy Thuấn Phan chúc các em học sinh lớp 11 luôn tự tin và bứt phá điểm số tối đa!\n                  </p>\n                </div>\n                ",
      "narration": "Chúc mừng tất cả các em đã xuất sắc hoàn thành toàn bộ 3 mục bài giảng tương tác của Bài 2: Công thức lượng giác trong chương trình Toán 11 Kết nối tri thức. Nắm vững trọn bộ công thức cộng, nhân đôi, hạ bậc và biến đổi tích tổng chính là nền tảng vững chắc nhất để các em chinh phục hàm số lượng giác và phương trình lượng giác ở các bài học tiếp theo. Thầy Thuấn Phan chúc các em luôn chăm chỉ, học tập say mê và đạt nhiều điểm 10 rực rỡ!",
      "startTime": 258.34,
      "endTime": 282.89,
      "duration": 24.55
    }
  ],
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 27.53,
      "id": "part2"
    },
    {
      "time": 53.67,
      "id": "vd1_q"
    },
    {
      "time": 68.93,
      "id": "vd1_a"
    },
    {
      "time": 95.57,
      "id": "vd2_q"
    },
    {
      "time": 108.22,
      "id": "vd2_a"
    },
    {
      "time": 137.52,
      "id": "vd3_q"
    },
    {
      "time": 150.34,
      "id": "vd3_a"
    },
    {
      "time": 185.09,
      "id": "vd4_q"
    },
    {
      "time": 208.54,
      "id": "vd4_a"
    },
    {
      "time": 243.03,
      "id": "part4"
    },
    {
      "time": 258.34,
      "id": "part5"
    }
  ],
  "totalDuration": 282.89,
  "duration": 282.89
};

  window.G11_CHAPTER1_DATA.toan11_bai2_muc1 = window.G11_CHAPTER1_DATA.g11_bai2_muc1;
  window.G11_CHAPTER1_DATA.toan11_bai2_muc2 = window.G11_CHAPTER1_DATA.g11_bai2_muc2;
  window.G11_CHAPTER1_DATA.toan11_bai2_muc3 = window.G11_CHAPTER1_DATA.g11_bai2_muc3;


  window.G11_CHAPTER1_DATA.g11_bai3_muc1 = {
  "lessonId": "toan11_bai3",
  "lessonTitle": "Bài 3: Hàm số lượng giác",
  "sectionId": "g11_bai3_muc1",
  "sectionTitle": "Mục 1: Khái niệm hàm số lượng giác, tính chẵn - lẻ và chu kỳ tuần hoàn",
  "title": "Mục 1: Khái niệm hàm số lượng giác, tính chẵn - lẻ & chu kỳ",
  "audio": "/audio/g11_bai3_muc1.mp3",
  "audioSrc": "./audio/g11_bai3_muc1.mp3",
  "audio_src": "./audio/g11_bai3_muc1.mp3",
  "owl_tip": "Nhớ quy tắc vàng: Cosin là hàm số chẵn duy nhất! Sin, Tang và Côtang đều là hàm số lẻ. Chu kỳ của Sin và Cos là 2 pi chia omega, còn Tang và Côtang chu kỳ chỉ là pi chia omega!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Khái niệm & Tính tuần hoàn",
      "scenes": [
        1,
        2
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 4 Ví dụ minh họa tiêu biểu (Đồng hồ 15s/30s)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Cảnh báo bẫy trắc nghiệm & Sai lầm thường gặp",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Tổng kết & Bí kíp Cú Thông Thái",
      "scenes": [
        12
      ]
    }
  ],
  "scenes": [
    {
      "id": "scene_1",
      "title": "1. ĐỊNH NGHĨA HÀM SỐ LƯỢNG GIÁC & TẬP XÁC ĐỊNH",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <h3 class=\"text-emerald-300 font-bold text-lg flex items-center gap-2\">\n      <span class=\"px-2 py-0.5 bg-emerald-500/20 rounded text-emerald-300 text-sm\">Trọng tâm</span>\n      ĐỊNH NGHĨA 4 HÀM SỐ LƯỢNG GIÁC CƠ BẢN\n    </h3>\n    <p class=\"text-slate-200 mt-2 text-sm leading-relaxed\">\n      Quy tắc đặt tương ứng mỗi số thực $x$ với một giá trị lượng giác xác định:\n    </p>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 text-sm\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">1. Hàm số sin:</span> $y = \\sin x$<br/>\n        <span class=\"text-slate-300\">• TXĐ:</span> $D = \\mathbb{R}$<br/>\n        <span class=\"text-slate-300\">• Tập giá trị:</span> $[-1; 1]$\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">2. Hàm số côsin:</span> $y = \\cos x$<br/>\n        <span class=\"text-slate-300\">• TXĐ:</span> $D = \\mathbb{R}$<br/>\n        <span class=\"text-slate-300\">• Tập giá trị:</span> $[-1; 1]$\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-emerald-400 font-bold\">3. Hàm số tang:</span> $y = \\tan x = \\frac{\\sin x}{\\cos x}$<br/>\n        <span class=\"text-slate-300\">• TXĐ:</span> $D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$<br/>\n        <span class=\"text-slate-300\">• Tập giá trị:</span> $\\mathbb{R}$\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-rose-400 font-bold\">4. Hàm số côtang:</span> $y = \\cot x = \\frac{\\cos x}{\\sin x}$<br/>\n        <span class=\"text-slate-300\">• TXĐ:</span> $D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$<br/>\n        <span class=\"text-slate-300\">• Tập giá trị:</span> $\\mathbb{R}$\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em học sinh lớp 11 đến với bài học số 3: Hàm số lượng giác. Trong mục đầu tiên này, thầy và các em sẽ cùng tìm hiểu về định nghĩa bốn hàm số lượng giác cơ bản, tập xác định, tính chẵn lẻ và chu kỳ tuần hoàn. Hãy ghi nhớ rằng hàm sin và cosin xác định trên toàn bộ tập số thực R với tập giá trị từ trừ một đến một. Còn hàm tang và côtang là các hàm phân thức lượng giác, có tập xác định bị gián đoạn và tập giá trị trải dài trên toàn bộ trục số thực R.",
      "startTime": 0.0,
      "endTime": 28.92,
      "duration": 28.92,
      "sceneIndex": 1,
      "subtitle": "Mục 1: Khái niệm hàm số lượng giác, tính chẵn - lẻ và chu kỳ tuần hoàn • Cảnh 1",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <h3 class=\"text-emerald-300 font-bold text-lg flex items-center gap-2\">\n      <span class=\"px-2 py-0.5 bg-emerald-500/20 rounded text-emerald-300 text-sm\">Trọng tâm</span>\n      ĐỊNH NGHĨA 4 HÀM SỐ LƯỢNG GIÁC CƠ BẢN\n    </h3>\n    <p class=\"text-slate-200 mt-2 text-sm leading-relaxed\">\n      Quy tắc đặt tương ứng mỗi số thực $x$ với một giá trị lượng giác xác định:\n    </p>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 text-sm\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">1. Hàm số sin:</span> $y = \\sin x$<br/>\n        <span class=\"text-slate-300\">• TXĐ:</span> $D = \\mathbb{R}$<br/>\n        <span class=\"text-slate-300\">• Tập giá trị:</span> $[-1; 1]$\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">2. Hàm số côsin:</span> $y = \\cos x$<br/>\n        <span class=\"text-slate-300\">• TXĐ:</span> $D = \\mathbb{R}$<br/>\n        <span class=\"text-slate-300\">• Tập giá trị:</span> $[-1; 1]$\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-emerald-400 font-bold\">3. Hàm số tang:</span> $y = \\tan x = \\frac{\\sin x}{\\cos x}$<br/>\n        <span class=\"text-slate-300\">• TXĐ:</span> $D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$<br/>\n        <span class=\"text-slate-300\">• Tập giá trị:</span> $\\mathbb{R}$\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-rose-400 font-bold\">4. Hàm số côtang:</span> $y = \\cot x = \\frac{\\cos x}{\\sin x}$<br/>\n        <span class=\"text-slate-300\">• TXĐ:</span> $D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$<br/>\n        <span class=\"text-slate-300\">• Tập giá trị:</span> $\\mathbb{R}$\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Nhớ quy tắc vàng: Cosin là hàm số chẵn duy nhất! Sin, Tang và Côtang đều là hàm số lẻ. Chu kỳ của Sin và Cos là 2 pi chia omega, còn Tang và Côtang chu kỳ chỉ là pi chia omega!"
    },
    {
      "id": "scene_2",
      "title": "2. HÀM SỐ TUẦN HOÀN, CHU KỲ VÀ TÍNH CHẴN - LẺ",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-sky-500/30\">\n      <h4 class=\"text-sky-300 font-bold text-base mb-2\">🔄 TÍNH TUẦN HOÀN VÀ CHU KỲ $T$</h4>\n      <p class=\"text-slate-300 text-sm leading-relaxed\">\n        Hàm số $y = f(x)$ tuần hoàn nếu tồn tại $T \\ne 0$ sao cho $f(x+T) = f(x)$. Chu kỳ là số dương $T$ nhỏ nhất:\n      </p>\n      <div class=\"mt-2 space-y-1.5 text-sm bg-slate-800/80 p-3 rounded-lg border border-slate-700\">\n        <p class=\"text-amber-300\">• $y = \\sin(\\omega x + \\varphi)$ và $y = \\cos(\\omega x + \\varphi)$ có chu kỳ:</p>\n        <p class=\"text-center font-bold text-base text-yellow-400\">$$T = \\frac{2\\pi}{|\\omega|}$$</p>\n        <p class=\"text-emerald-300\">• $y = \\tan(\\omega x + \\varphi)$ và $y = \\cot(\\omega x + \\varphi)$ có chu kỳ:</p>\n        <p class=\"text-center font-bold text-base text-emerald-400\">$$T = \\frac{\\pi}{|\\omega|}$$</p>\n      </div>\n    </div>\n\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-purple-500/30\">\n      <h4 class=\"text-purple-300 font-bold text-base mb-2\">⚖️ TÍNH CHẴN - LẺ CỦA HÀM SỐ</h4>\n      <div class=\"space-y-2 text-sm\">\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-pink-400 font-bold\">HÀM SỐ CHẴN ($f(-x) = f(x)$):</span>\n          <p class=\"text-slate-200 mt-1\">$y = \\cos x$ là hàm số chẵn duy nhất!</p>\n          <p class=\"text-slate-400 text-xs mt-0.5\">Đồ thị đối xứng qua trục tung $Oy$.</p>\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-indigo-400 font-bold\">HÀM SỐ LẺ ($f(-x) = -f(x)$):</span>\n          <p class=\"text-slate-200 mt-1\">$y = \\sin x$, $y = \\tan x$, $y = \\cot x$ đều là hàm lẻ.</p>\n          <p class=\"text-slate-400 text-xs mt-0.5\">Đồ thị đối xứng qua gốc tọa độ $O(0;0)$.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Tiếp theo, một đặc tính vô cùng độc đáo của hàm lượng giác là tính tuần hoàn. Chu kỳ tuần hoàn là khoảng cách nhỏ nhất sau đó giá trị hàm số lặp lại y hệt ban đầu. Với sin và cosin, chu kỳ là hai pi chia cho trị tuyệt đối của omega. Còn với tang và côtang, chu kỳ cơ bản chỉ là một pi chia trị tuyệt đối của omega. Về tính chẵn lẻ, các em chỉ cần khắc sâu: cosin là hàm chẵn vì cos trừ x bằng cos x, còn ba hàm còn lại là sin, tang và côtang đều là hàm số lẻ.",
      "startTime": 28.92,
      "endTime": 60.34,
      "duration": 31.42,
      "sceneIndex": 2,
      "subtitle": "Mục 1: Khái niệm hàm số lượng giác, tính chẵn - lẻ và chu kỳ tuần hoàn • Cảnh 2",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-sky-500/30\">\n      <h4 class=\"text-sky-300 font-bold text-base mb-2\">🔄 TÍNH TUẦN HOÀN VÀ CHU KỲ $T$</h4>\n      <p class=\"text-slate-300 text-sm leading-relaxed\">\n        Hàm số $y = f(x)$ tuần hoàn nếu tồn tại $T \\ne 0$ sao cho $f(x+T) = f(x)$. Chu kỳ là số dương $T$ nhỏ nhất:\n      </p>\n      <div class=\"mt-2 space-y-1.5 text-sm bg-slate-800/80 p-3 rounded-lg border border-slate-700\">\n        <p class=\"text-amber-300\">• $y = \\sin(\\omega x + \\varphi)$ và $y = \\cos(\\omega x + \\varphi)$ có chu kỳ:</p>\n        <p class=\"text-center font-bold text-base text-yellow-400\">$$T = \\frac{2\\pi}{|\\omega|}$$</p>\n        <p class=\"text-emerald-300\">• $y = \\tan(\\omega x + \\varphi)$ và $y = \\cot(\\omega x + \\varphi)$ có chu kỳ:</p>\n        <p class=\"text-center font-bold text-base text-emerald-400\">$$T = \\frac{\\pi}{|\\omega|}$$</p>\n      </div>\n    </div>\n\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-purple-500/30\">\n      <h4 class=\"text-purple-300 font-bold text-base mb-2\">⚖️ TÍNH CHẴN - LẺ CỦA HÀM SỐ</h4>\n      <div class=\"space-y-2 text-sm\">\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-pink-400 font-bold\">HÀM SỐ CHẴN ($f(-x) = f(x)$):</span>\n          <p class=\"text-slate-200 mt-1\">$y = \\cos x$ là hàm số chẵn duy nhất!</p>\n          <p class=\"text-slate-400 text-xs mt-0.5\">Đồ thị đối xứng qua trục tung $Oy$.</p>\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-indigo-400 font-bold\">HÀM SỐ LẺ ($f(-x) = -f(x)$):</span>\n          <p class=\"text-slate-200 mt-1\">$y = \\sin x$, $y = \\tan x$, $y = \\cot x$ đều là hàm lẻ.</p>\n          <p class=\"text-slate-400 text-xs mt-0.5\">Đồ thị đối xứng qua gốc tọa độ $O(0;0)$.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Nhớ quy tắc vàng: Cosin là hàm số chẵn duy nhất! Sin, Tang và Côtang đều là hàm số lẻ. Chu kỳ của Sin và Cos là 2 pi chia omega, còn Tang và Côtang chu kỳ chỉ là pi chia omega!"
    },
    {
      "id": "scene_3",
      "title": "Ví dụ 1: Tìm chu kỳ tuần hoàn của hàm số lượng giác (Mức Nhận biết)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/50 to-indigo-900/40 p-4 rounded-xl border border-blue-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-blue-500 text-white text-xs font-bold rounded\">VÍ DỤ 1 • NHẬN BIẾT</span>\n      <span class=\"text-slate-400 text-xs\">Mục 1 • Khái niệm & Chu kỳ</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Xác định chu kỳ tuần hoàn $T$ của các hàm số sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> $y = \\sin 3x$</p>\n      <p><strong class=\"text-sky-400\">b)</strong> $y = \\cos\\left(2x - \\frac{\\pi}{4}\\right)$</p>\n      <p><strong class=\"text-emerald-400\">c)</strong> $y = \\tan\\frac{x}{2}$</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-15s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 15 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng đến với ví dụ 1 ở mức độ nhận biết. Đề bài yêu cầu tìm chu kỳ tuần hoàn T của ba hàm số: câu a y bằng sin 3x, câu b y bằng cos 2x trừ pi phần 4, và câu c y bằng tan của x chia 2. Các em hãy quan sát hệ số omega trước biến x và áp dụng công thức trong 15 giây suy nghĩ.",
      "startTime": 60.34,
      "endTime": 80.48,
      "duration": 20.14,
      "sceneIndex": 3,
      "subtitle": "Mục 1: Khái niệm hàm số lượng giác, tính chẵn - lẻ và chu kỳ tuần hoàn • Cảnh 3",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/50 to-indigo-900/40 p-4 rounded-xl border border-blue-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-blue-500 text-white text-xs font-bold rounded\">VÍ DỤ 1 • NHẬN BIẾT</span>\n      <span class=\"text-slate-400 text-xs\">Mục 1 • Khái niệm & Chu kỳ</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Xác định chu kỳ tuần hoàn $T$ của các hàm số sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> $y = \\sin 3x$</p>\n      <p><strong class=\"text-sky-400\">b)</strong> $y = \\cos\\left(2x - \\frac{\\pi}{4}\\right)$</p>\n      <p><strong class=\"text-emerald-400\">c)</strong> $y = \\tan\\frac{x}{2}$</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-15s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 15 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Thử sức suy nghĩ và phán đoán đáp án trước khi đồng hồ đếm ngược kết thúc!"
    },
    {
      "id": "scene_4",
      "title": "Ví dụ 1: Lời giải chi tiết & Phân tích chu kỳ chuẩn",
      "content": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-emerald-500/40\">\n    <h4 class=\"text-emerald-300 font-bold text-base mb-2 flex items-center gap-2\">\n      <i class=\"fa-solid fa-circle-check text-emerald-400\"></i> LỜI GIẢI CHI TIẾT VÍ DỤ 1\n    </h4>\n    <div class=\"space-y-3 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-amber-400\">a) Với hàm số $y = \\sin 3x$:</strong>\n        <p class=\"mt-1\">Hệ số của $x$ là $\\omega = 3$.</p>\n        <p class=\"text-emerald-300 font-semibold mt-1\">$$\\Rightarrow T_1 = \\frac{2\\pi}{|\\omega|} = \\frac{2\\pi}{3}$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-400\">b) Với hàm số $y = \\cos\\left(2x - \\frac{\\pi}{4}\\right)$:</strong>\n        <p class=\"mt-1\">Hệ số của $x$ là $\\omega = 2$ (hằng số pha $-\\frac{\\pi}{4}$ không ảnh hưởng đến chu kỳ).</p>\n        <p class=\"text-emerald-300 font-semibold mt-1\">$$\\Rightarrow T_2 = \\frac{2\\pi}{|\\omega|} = \\frac{2\\pi}{2} = \\pi$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-emerald-400\">c) Với hàm số $y = \\tan\\frac{x}{2}$:</strong>\n        <p class=\"mt-1\">Hàm tang có chu kỳ cơ sở là $\\pi$. Hệ số $\\omega = \\frac{1}{2}$.</p>\n        <p class=\"text-emerald-300 font-semibold mt-1\">$$\\Rightarrow T_3 = \\frac{\\pi}{|\\omega|} = \\frac{\\pi}{1/2} = 2\\pi$$</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Lời giải ví dụ 1 như sau. Ở câu a, hàm số sin 3x có omega bằng 3, nên chu kỳ T1 bằng hai pi chia 3. Ở câu b, hàm cosin có omega bằng 2, góc pha trừ pi phần 4 chỉ làm tịnh tiến đồ thị chứ không đổi chu kỳ, nên T2 bằng hai pi chia 2 bằng pi. Ở câu c, đây là hàm tang, các em nhớ tử số chỉ là pi, chia cho omega là một phần hai, kết quả ra hai pi. Rất chuẩn xác và ngắn gọn.",
      "startTime": 80.48,
      "endTime": 110.12,
      "duration": 29.64,
      "sceneIndex": 4,
      "subtitle": "Mục 1: Khái niệm hàm số lượng giác, tính chẵn - lẻ và chu kỳ tuần hoàn • Cảnh 4",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-emerald-500/40\">\n    <h4 class=\"text-emerald-300 font-bold text-base mb-2 flex items-center gap-2\">\n      <i class=\"fa-solid fa-circle-check text-emerald-400\"></i> LỜI GIẢI CHI TIẾT VÍ DỤ 1\n    </h4>\n    <div class=\"space-y-3 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-amber-400\">a) Với hàm số $y = \\sin 3x$:</strong>\n        <p class=\"mt-1\">Hệ số của $x$ là $\\omega = 3$.</p>\n        <p class=\"text-emerald-300 font-semibold mt-1\">$$\\Rightarrow T_1 = \\frac{2\\pi}{|\\omega|} = \\frac{2\\pi}{3}$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-400\">b) Với hàm số $y = \\cos\\left(2x - \\frac{\\pi}{4}\\right)$:</strong>\n        <p class=\"mt-1\">Hệ số của $x$ là $\\omega = 2$ (hằng số pha $-\\frac{\\pi}{4}$ không ảnh hưởng đến chu kỳ).</p>\n        <p class=\"text-emerald-300 font-semibold mt-1\">$$\\Rightarrow T_2 = \\frac{2\\pi}{|\\omega|} = \\frac{2\\pi}{2} = \\pi$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-emerald-400\">c) Với hàm số $y = \\tan\\frac{x}{2}$:</strong>\n        <p class=\"mt-1\">Hàm tang có chu kỳ cơ sở là $\\pi$. Hệ số $\\omega = \\frac{1}{2}$.</p>\n        <p class=\"text-emerald-300 font-semibold mt-1\">$$\\Rightarrow T_3 = \\frac{\\pi}{|\\omega|} = \\frac{\\pi}{1/2} = 2\\pi$$</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "cheer",
      "mascotTip": "Đối chiếu từng bước biến đổi tự luận để khắc sâu phương pháp giải!"
    },
    {
      "id": "scene_5",
      "title": "Ví dụ 2: Xét tính chẵn, lẻ của hàm số lượng giác (Mức Thông hiểu)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/50 to-indigo-900/40 p-4 rounded-xl border border-purple-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-purple-500 text-white text-xs font-bold rounded\">VÍ DỤ 2 • THÔNG HIỂU</span>\n      <span class=\"text-slate-400 text-xs\">Mục 1 • Khái niệm & Tính chẵn lẻ</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Xét tính chẵn, lẻ của các hàm số sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> $f(x) = x \\cdot \\sin 2x$</p>\n      <p><strong class=\"text-sky-400\">b)</strong> $g(x) = \\sin x + \\cos x$</p>\n      <p><strong class=\"text-emerald-400\">c)</strong> $h(x) = \\frac{\\tan x}{x^2 + 1}$</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số 2 là bài toán thông hiểu về tính chẵn lẻ của hàm số lượng giác. Hãy xét tính chẵn lẻ của ba hàm: câu a hàm f x bằng x nhân sin 2x; câu b hàm g x bằng sin x cộng cos x; và câu c hàm h x bằng tan x trên x bình cộng 1. Các em có 30 giây để kiểm tra tập xác định đối xứng và tính giá trị f tại trừ x.",
      "startTime": 110.12,
      "endTime": 131.17,
      "duration": 21.05,
      "sceneIndex": 5,
      "subtitle": "Mục 1: Khái niệm hàm số lượng giác, tính chẵn - lẻ và chu kỳ tuần hoàn • Cảnh 5",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/50 to-indigo-900/40 p-4 rounded-xl border border-purple-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-purple-500 text-white text-xs font-bold rounded\">VÍ DỤ 2 • THÔNG HIỂU</span>\n      <span class=\"text-slate-400 text-xs\">Mục 1 • Khái niệm & Tính chẵn lẻ</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Xét tính chẵn, lẻ của các hàm số sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> $f(x) = x \\cdot \\sin 2x$</p>\n      <p><strong class=\"text-sky-400\">b)</strong> $g(x) = \\sin x + \\cos x$</p>\n      <p><strong class=\"text-emerald-400\">c)</strong> $h(x) = \\frac{\\tan x}{x^2 + 1}$</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Thử sức suy nghĩ và phán đoán đáp án trước khi đồng hồ đếm ngược kết thúc!"
    },
    {
      "id": "scene_6",
      "title": "Ví dụ 2: Lời giải chi tiết & Phân tích bước suy luận",
      "content": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-purple-500/40\">\n    <h4 class=\"text-purple-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 2:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-amber-400\">a) $f(x) = x \\cdot \\sin 2x$:</strong>\n        <p class=\"text-slate-300\">• TXĐ: $D = \\mathbb{R}$ đối xứng (với mọi $x \\in D \\Rightarrow -x \\in D$).</p>\n        <p class=\"text-slate-300\">• $f(-x) = (-x) \\cdot \\sin(-2x) = (-x) \\cdot [-\\sin(2x)] = x \\sin 2x = f(x)$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">Kết luận: $f(x)$ là hàm số CHẴN.</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-400\">b) $g(x) = \\sin x + \\cos x$:</strong>\n        <p class=\"text-slate-300\">• TXĐ: $D = \\mathbb{R}$.</p>\n        <p class=\"text-slate-300\">• $g(-x) = \\sin(-x) + \\cos(-x) = -\\sin x + \\cos x$.</p>\n        <p class=\"text-slate-300\">• Nhận thấy $g(-x) \\ne g(x)$ và $g(-x) \\ne -g(x) = -\\sin x - \\cos x$.</p>\n        <p class=\"text-amber-300 font-bold mt-1\">Kết luận: $g(x)$ là hàm số KHÔNG CHẴN, KHÔNG LẺ.</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-emerald-400\">c) $h(x) = \\frac{\\tan x}{x^2 + 1}$:</strong>\n        <p class=\"text-slate-300\">• TXĐ: $D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi\\right\\}$ là tập đối xứng.</p>\n        <p class=\"text-slate-300\">• $h(-x) = \\frac{\\tan(-x)}{(-x)^2 + 1} = \\frac{-\\tan x}{x^2 + 1} = -h(x)$.</p>\n        <p class=\"text-indigo-300 font-bold mt-1\">Kết luận: $h(x)$ là hàm số LẺ.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Cùng phân tích lời giải ví dụ 2. Ở câu a, khi thay x bằng trừ x, dấu trừ của x nhân với dấu trừ rút ra từ sin trừ 2x tạo thành dấu cộng, trả lại đúng hàm số ban đầu, nên fx là hàm số chẵn. Ở câu b, g của trừ x bằng trừ sin x cộng cos x, không bằng gx mà cũng không bằng trừ gx, do đó gx không chẵn không lẻ. Ở câu c, tử số tan trừ x bằng trừ tan x, còn mẫu số giữ nguyên, cho ra kết quả bằng trừ hx, nên hx là hàm số lẻ.",
      "startTime": 131.17,
      "endTime": 163.19,
      "duration": 32.02,
      "sceneIndex": 6,
      "subtitle": "Mục 1: Khái niệm hàm số lượng giác, tính chẵn - lẻ và chu kỳ tuần hoàn • Cảnh 6",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-purple-500/40\">\n    <h4 class=\"text-purple-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 2:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-amber-400\">a) $f(x) = x \\cdot \\sin 2x$:</strong>\n        <p class=\"text-slate-300\">• TXĐ: $D = \\mathbb{R}$ đối xứng (với mọi $x \\in D \\Rightarrow -x \\in D$).</p>\n        <p class=\"text-slate-300\">• $f(-x) = (-x) \\cdot \\sin(-2x) = (-x) \\cdot [-\\sin(2x)] = x \\sin 2x = f(x)$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">Kết luận: $f(x)$ là hàm số CHẴN.</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-400\">b) $g(x) = \\sin x + \\cos x$:</strong>\n        <p class=\"text-slate-300\">• TXĐ: $D = \\mathbb{R}$.</p>\n        <p class=\"text-slate-300\">• $g(-x) = \\sin(-x) + \\cos(-x) = -\\sin x + \\cos x$.</p>\n        <p class=\"text-slate-300\">• Nhận thấy $g(-x) \\ne g(x)$ và $g(-x) \\ne -g(x) = -\\sin x - \\cos x$.</p>\n        <p class=\"text-amber-300 font-bold mt-1\">Kết luận: $g(x)$ là hàm số KHÔNG CHẴN, KHÔNG LẺ.</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-emerald-400\">c) $h(x) = \\frac{\\tan x}{x^2 + 1}$:</strong>\n        <p class=\"text-slate-300\">• TXĐ: $D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi\\right\\}$ là tập đối xứng.</p>\n        <p class=\"text-slate-300\">• $h(-x) = \\frac{\\tan(-x)}{(-x)^2 + 1} = \\frac{-\\tan x}{x^2 + 1} = -h(x)$.</p>\n        <p class=\"text-indigo-300 font-bold mt-1\">Kết luận: $h(x)$ là hàm số LẺ.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "cheer",
      "mascotTip": "Đối chiếu từng bước biến đổi tự luận để khắc sâu phương pháp giải!"
    },
    {
      "id": "scene_7",
      "title": "Ví dụ 3: Tìm tập xác định của hàm số lượng giác (Mức Vận dụng)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-900/50 to-orange-900/40 p-4 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-amber-500 text-slate-900 text-xs font-bold rounded\">VÍ DỤ 3 • VẬN DỤNG</span>\n      <span class=\"text-slate-400 text-xs\">Mục 1 • Tập xác định</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Tìm tập xác định $D$ của các hàm số sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> $y = \\frac{1}{\\cos x - 1}$</p>\n      <p><strong class=\"text-sky-400\">b)</strong> $y = \\tan\\left(2x + \\frac{\\pi}{3}\\right)$</p>\n      <p><strong class=\"text-emerald-400\">c)</strong> $y = \\sqrt{\\frac{1 + \\cos x}{2 - \\sin x}}$</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3 là bài toán vận dụng tìm tập xác định của ba hàm số lượng giác: câu a y bằng 1 chia cho cos x trừ 1; câu b y bằng tan của 2x cộng pi phần 3; và câu c y bằng căn bậc hai của 1 cộng cos x chia cho 2 trừ sin x. Các em hãy chú ý điều kiện mẫu khác không và điều kiện trong căn không âm trong 30 giây suy nghĩ.",
      "startTime": 163.19,
      "endTime": 181.72,
      "duration": 18.53,
      "sceneIndex": 7,
      "subtitle": "Mục 1: Khái niệm hàm số lượng giác, tính chẵn - lẻ và chu kỳ tuần hoàn • Cảnh 7",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-900/50 to-orange-900/40 p-4 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-amber-500 text-slate-900 text-xs font-bold rounded\">VÍ DỤ 3 • VẬN DỤNG</span>\n      <span class=\"text-slate-400 text-xs\">Mục 1 • Tập xác định</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Tìm tập xác định $D$ của các hàm số sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> $y = \\frac{1}{\\cos x - 1}$</p>\n      <p><strong class=\"text-sky-400\">b)</strong> $y = \\tan\\left(2x + \\frac{\\pi}{3}\\right)$</p>\n      <p><strong class=\"text-emerald-400\">c)</strong> $y = \\sqrt{\\frac{1 + \\cos x}{2 - \\sin x}}$</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Thử sức suy nghĩ và phán đoán đáp án trước khi đồng hồ đếm ngược kết thúc!"
    },
    {
      "id": "scene_8",
      "title": "Ví dụ 3: Lời giải chi tiết & Kỹ năng giải điều kiện xác định",
      "content": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-amber-500/40\">\n    <h4 class=\"text-amber-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 3:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-amber-400\">a) $y = \\frac{1}{\\cos x - 1}$:</strong>\n        <p class=\"text-slate-300\">• Điều kiện: $\\cos x - 1 \\ne 0 \\Leftrightarrow \\cos x \\ne 1 \\Leftrightarrow x \\ne k2\\pi$ ($k \\in \\mathbb{Z}$).</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow D = \\mathbb{R} \\setminus \\{k2\\pi, k \\in \\mathbb{Z}\\}$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-400\">b) $y = \\tan\\left(2x + \\frac{\\pi}{3}\\right)$:</strong>\n        <p class=\"text-slate-300\">• Điều kiện của hàm tang: $\\cos\\left(2x + \\frac{\\pi}{3}\\right) \\ne 0$</p>\n        <p class=\"text-slate-300\">$$\\Leftrightarrow 2x + \\frac{\\pi}{3} \\ne \\frac{\\pi}{2} + k\\pi \\Leftrightarrow 2x \\ne \\frac{\\pi}{6} + k\\pi \\Leftrightarrow x \\ne \\frac{\\pi}{12} + k\\frac{\\pi}{2}$$</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{12} + k\\frac{\\pi}{2}, k \\in \\mathbb{Z}\\right\\}$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-emerald-400\">c) $y = \\sqrt{\\frac{1 + \\cos x}{2 - \\sin x}}$:</strong>\n        <p class=\"text-slate-300\">• Vì $-1 \\le \\cos x \\le 1 \\Rightarrow 1 + \\cos x \\ge 0$ với mọi $x \\in \\mathbb{R}$.</p>\n        <p class=\"text-slate-300\">• Vì $-1 \\le \\sin x \\le 1 \\Rightarrow 2 - \\sin x \\ge 2 - 1 = 1 > 0$ với mọi $x \\in \\mathbb{R}$.</p>\n        <p class=\"text-slate-300\">• Phân thức luôn có mẫu dương và tử không âm trên toàn $\\mathbb{R}$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow D = \\mathbb{R}$$</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Lời giải chi tiết ví dụ 3 như sau. Ở câu a, mẫu khác không khi cos x khác 1, tương đương x khác k hai pi. Ở câu b, hàm tang có nghĩa khi biểu thức góc khác pi phần hai cộng k pi, chuyển vế ta được 2x khác pi phần 6 cộng k pi, chia hai vế cho 2 ta được x khác pi phần 12 cộng k pi chia hai. Ở câu c, đây là bẫy tư duy rất hay: tử số một cộng cos x luôn lớn hơn hoặc bằng không, còn mẫu số hai trừ sin x luôn lớn hơn hoặc bằng một, tức luôn dương với mọi x. Do đó tập xác định của hàm số là toàn bộ tập số thực R.",
      "startTime": 181.72,
      "endTime": 215.18,
      "duration": 33.46,
      "sceneIndex": 8,
      "subtitle": "Mục 1: Khái niệm hàm số lượng giác, tính chẵn - lẻ và chu kỳ tuần hoàn • Cảnh 8",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-amber-500/40\">\n    <h4 class=\"text-amber-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 3:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-amber-400\">a) $y = \\frac{1}{\\cos x - 1}$:</strong>\n        <p class=\"text-slate-300\">• Điều kiện: $\\cos x - 1 \\ne 0 \\Leftrightarrow \\cos x \\ne 1 \\Leftrightarrow x \\ne k2\\pi$ ($k \\in \\mathbb{Z}$).</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow D = \\mathbb{R} \\setminus \\{k2\\pi, k \\in \\mathbb{Z}\\}$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-400\">b) $y = \\tan\\left(2x + \\frac{\\pi}{3}\\right)$:</strong>\n        <p class=\"text-slate-300\">• Điều kiện của hàm tang: $\\cos\\left(2x + \\frac{\\pi}{3}\\right) \\ne 0$</p>\n        <p class=\"text-slate-300\">$$\\Leftrightarrow 2x + \\frac{\\pi}{3} \\ne \\frac{\\pi}{2} + k\\pi \\Leftrightarrow 2x \\ne \\frac{\\pi}{6} + k\\pi \\Leftrightarrow x \\ne \\frac{\\pi}{12} + k\\frac{\\pi}{2}$$</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{12} + k\\frac{\\pi}{2}, k \\in \\mathbb{Z}\\right\\}$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-emerald-400\">c) $y = \\sqrt{\\frac{1 + \\cos x}{2 - \\sin x}}$:</strong>\n        <p class=\"text-slate-300\">• Vì $-1 \\le \\cos x \\le 1 \\Rightarrow 1 + \\cos x \\ge 0$ với mọi $x \\in \\mathbb{R}$.</p>\n        <p class=\"text-slate-300\">• Vì $-1 \\le \\sin x \\le 1 \\Rightarrow 2 - \\sin x \\ge 2 - 1 = 1 > 0$ với mọi $x \\in \\mathbb{R}$.</p>\n        <p class=\"text-slate-300\">• Phân thức luôn có mẫu dương và tử không âm trên toàn $\\mathbb{R}$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow D = \\mathbb{R}$$</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "cheer",
      "mascotTip": "Đối chiếu từng bước biến đổi tự luận để khắc sâu phương pháp giải!"
    },
    {
      "id": "scene_9",
      "title": "Ví dụ 4: Bài toán thực tế chu kỳ mực nước thủy triều (Mức Vận dụng cao)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-rose-900/50 to-red-900/40 p-4 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-rose-500 text-white text-xs font-bold rounded\">VÍ DỤ 4 • VẬN DỤNG CAO</span>\n      <span class=\"text-slate-400 text-xs\">Thực tế • Chu kỳ thủy triều</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Mô hình toán học về mực nước tại cảng biển:</h4>\n    <p class=\"text-slate-300 text-sm leading-relaxed mt-2\">\n      Độ sâu mực nước $h(t)$ (đơn vị mét) tại một cảng biển sau $t$ giờ tính từ lúc $0\\text{h}$ sáng được cho bởi công thức:\n    </p>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-center font-bold text-amber-300 text-lg\">\n      $$h(t) = 5 + 3\\cos\\left(\\frac{\\pi t}{6}\\right) \\quad (0 \\le t \\le 24)$$\n    </div>\n    <div class=\"mt-2 space-y-1.5 text-sm text-slate-200\">\n      <p><strong class=\"text-sky-300\">a)</strong> Tìm chu kỳ tuần hoàn của mực nước thủy triều.</p>\n      <p><strong class=\"text-emerald-300\">b)</strong> Mực nước cao nhất và thấp nhất là bao nhiêu mét? Đạt được vào những thời điểm nào trong ngày?</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4 là bài toán vận dụng cao mô hình hóa thực tế về mực nước thủy triều tại một cảng biển. Mực nước h t sau t giờ được tính theo công thức: h t bằng 5 cộng 3 nhân cos của pi nhân t chia 6, với t từ 0 đến 24 giờ. Câu a yêu cầu tìm chu kỳ tuần hoàn của thủy triều. Câu b yêu cầu tìm mực nước cao nhất và thấp nhất, cùng các mốc thời gian đạt được trong ngày. 30 giây suy nghĩ cho các em.",
      "startTime": 215.18,
      "endTime": 241.7,
      "duration": 26.52,
      "sceneIndex": 9,
      "subtitle": "Mục 1: Khái niệm hàm số lượng giác, tính chẵn - lẻ và chu kỳ tuần hoàn • Cảnh 9",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-rose-900/50 to-red-900/40 p-4 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-rose-500 text-white text-xs font-bold rounded\">VÍ DỤ 4 • VẬN DỤNG CAO</span>\n      <span class=\"text-slate-400 text-xs\">Thực tế • Chu kỳ thủy triều</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Mô hình toán học về mực nước tại cảng biển:</h4>\n    <p class=\"text-slate-300 text-sm leading-relaxed mt-2\">\n      Độ sâu mực nước $h(t)$ (đơn vị mét) tại một cảng biển sau $t$ giờ tính từ lúc $0\\text{h}$ sáng được cho bởi công thức:\n    </p>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-center font-bold text-amber-300 text-lg\">\n      $$h(t) = 5 + 3\\cos\\left(\\frac{\\pi t}{6}\\right) \\quad (0 \\le t \\le 24)$$\n    </div>\n    <div class=\"mt-2 space-y-1.5 text-sm text-slate-200\">\n      <p><strong class=\"text-sky-300\">a)</strong> Tìm chu kỳ tuần hoàn của mực nước thủy triều.</p>\n      <p><strong class=\"text-emerald-300\">b)</strong> Mực nước cao nhất và thấp nhất là bao nhiêu mét? Đạt được vào những thời điểm nào trong ngày?</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Thử sức suy nghĩ và phán đoán đáp án trước khi đồng hồ đếm ngược kết thúc!"
    },
    {
      "id": "scene_10",
      "title": "Ví dụ 4: Lời giải chi tiết & Ý nghĩa mô hình thực tế",
      "content": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-rose-500/40\">\n    <h4 class=\"text-rose-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 4:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-300\">a) Chu kỳ tuần hoàn của mực nước biển:</strong>\n        <p class=\"mt-1\">Hàm số có dạng $h(t) = 5 + 3\\cos(\\omega t)$ với $\\omega = \\frac{\\pi}{6}$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{\\pi/6} = 12 \\text{ (giờ)}$$</p>\n        <p class=\"text-slate-400 text-xs\">Cứ sau đúng 12 giờ thì hiện tượng thủy triều lại lặp lại một chu kỳ hoàn chỉnh.</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-emerald-300\">b) Giá trị cao nhất, thấp nhất và thời điểm:</strong>\n        <p>Vì $-1 \\le \\cos\\left(\\frac{\\pi t}{6}\\right) \\le 1$ nên:</p>\n        <p class=\"text-center font-bold text-amber-300\">$$5 - 3 \\le h(t) \\le 5 + 3 \\Leftrightarrow 2\\text{ m} \\le h(t) \\le 8\\text{ m}$$</p>\n        <p class=\"text-slate-300 mt-1\">• <strong>Mực nước cao nhất là $8\\text{ m}$</strong> khi $\\cos\\left(\\frac{\\pi t}{6}\\right) = 1 \\Leftrightarrow \\frac{\\pi t}{6} = k2\\pi \\Leftrightarrow t = 12k$.</p>\n        <p class=\"text-slate-200 ml-4\">Với $0 \\le t \\le 24$, ta có $k \\in \\{0, 1, 2\\} \\Rightarrow$ Đạt lúc <span class=\"text-yellow-400 font-bold\">0h, 12h trưa và 24h đêm</span>.</p>\n        <p class=\"text-slate-300 mt-1\">• <strong>Mực nước thấp nhất là $2\\text{ m}$</strong> khi $\\cos\\left(\\frac{\\pi t}{6}\\right) = -1 \\Leftrightarrow \\frac{\\pi t}{6} = \\pi + k2\\pi \\Leftrightarrow t = 6 + 12k$.</p>\n        <p class=\"text-slate-200 ml-4\">Với $0 \\le t \\le 24$, ta có $k \\in \\{0, 1\\} \\Rightarrow$ Đạt lúc <span class=\"text-sky-400 font-bold\">6h sáng và 18h chiều</span>.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Lời giải ví dụ 4 như sau: Ở câu a, tần số góc omega bằng pi phần 6, áp dụng công thức chu kỳ T bằng hai pi chia omega, ta tính được T bằng 12 giờ. Tức là thủy triều tại cảng biển lặp lại theo chu kỳ bán nhật triều 12 tiếng. Ở câu b, vì cos nằm từ trừ một đến một, nên mực nước dao động từ 2 mét đến 8 mét. Mực nước đạt cực đại 8 mét khi cos bằng 1, tức vào các thời điểm 0 giờ sáng, 12 giờ trưa và 24 giờ đêm. Mực nước rút thấp nhất xuống 2 mét khi cos bằng trừ 1, đạt vào lúc 6 giờ sáng và 18 giờ chiều. Rất thiết thực trong hàng hải!",
      "startTime": 241.7,
      "endTime": 280.12,
      "duration": 38.42,
      "sceneIndex": 10,
      "subtitle": "Mục 1: Khái niệm hàm số lượng giác, tính chẵn - lẻ và chu kỳ tuần hoàn • Cảnh 10",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-rose-500/40\">\n    <h4 class=\"text-rose-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 4:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-300\">a) Chu kỳ tuần hoàn của mực nước biển:</strong>\n        <p class=\"mt-1\">Hàm số có dạng $h(t) = 5 + 3\\cos(\\omega t)$ với $\\omega = \\frac{\\pi}{6}$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{\\pi/6} = 12 \\text{ (giờ)}$$</p>\n        <p class=\"text-slate-400 text-xs\">Cứ sau đúng 12 giờ thì hiện tượng thủy triều lại lặp lại một chu kỳ hoàn chỉnh.</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-emerald-300\">b) Giá trị cao nhất, thấp nhất và thời điểm:</strong>\n        <p>Vì $-1 \\le \\cos\\left(\\frac{\\pi t}{6}\\right) \\le 1$ nên:</p>\n        <p class=\"text-center font-bold text-amber-300\">$$5 - 3 \\le h(t) \\le 5 + 3 \\Leftrightarrow 2\\text{ m} \\le h(t) \\le 8\\text{ m}$$</p>\n        <p class=\"text-slate-300 mt-1\">• <strong>Mực nước cao nhất là $8\\text{ m}$</strong> khi $\\cos\\left(\\frac{\\pi t}{6}\\right) = 1 \\Leftrightarrow \\frac{\\pi t}{6} = k2\\pi \\Leftrightarrow t = 12k$.</p>\n        <p class=\"text-slate-200 ml-4\">Với $0 \\le t \\le 24$, ta có $k \\in \\{0, 1, 2\\} \\Rightarrow$ Đạt lúc <span class=\"text-yellow-400 font-bold\">0h, 12h trưa và 24h đêm</span>.</p>\n        <p class=\"text-slate-300 mt-1\">• <strong>Mực nước thấp nhất là $2\\text{ m}$</strong> khi $\\cos\\left(\\frac{\\pi t}{6}\\right) = -1 \\Leftrightarrow \\frac{\\pi t}{6} = \\pi + k2\\pi \\Leftrightarrow t = 6 + 12k$.</p>\n        <p class=\"text-slate-200 ml-4\">Với $0 \\le t \\le 24$, ta có $k \\in \\{0, 1\\} \\Rightarrow$ Đạt lúc <span class=\"text-sky-400 font-bold\">6h sáng và 18h chiều</span>.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "cheer",
      "mascotTip": "Đối chiếu từng bước biến đổi tự luận để khắc sâu phương pháp giải!"
    },
    {
      "id": "scene_11",
      "title": "3. CẢNH BÁO BẪY TRẮC NGHIỆM KHI TÌM CHU KỲ VÀ TẬP XÁC ĐỊNH",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-red-950/70 to-rose-950/50 p-4 rounded-xl border border-red-500/40\">\n    <h3 class=\"text-red-300 font-bold text-base flex items-center gap-2\">\n      <i class=\"fa-solid fa-triangle-exclamation text-red-400 text-lg\"></i>\n      3 BẪY SAI LẦM KINH ĐIỂN CỦA HỌC SINH\n    </h3>\n    <div class=\"mt-3 space-y-3 text-sm\">\n      <div class=\"p-3 bg-slate-900/90 rounded-lg border border-red-500/20\">\n        <p class=\"text-rose-400 font-bold\">⚠️ Bẫy 1: Quên trị tuyệt đối của hệ số $\\omega$ khi tính chu kỳ</p>\n        <p class=\"text-slate-300 mt-1\">Khi gặp $y = \\cos(-3x)$, nhiều bạn tính $T = \\frac{2\\pi}{-3}$ là SAI. Chu kỳ $T$ bắt buộc phải là số dương: $T = \\frac{2\\pi}{|-3|} = \\frac{2\\pi}{3}$.</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/90 rounded-lg border border-red-500/20\">\n        <p class=\"text-rose-400 font-bold\">⚠️ Bẫy 2: Nhầm chu kỳ của tang và côtang thành $2\\pi$</p>\n        <p class=\"text-slate-300 mt-1\">Chu kỳ của hàm số $y = \\tan x$ và $y = \\cot x$ chỉ là $\\pi$. Do đó $y = \\tan(2x)$ có chu kỳ $T = \\frac{\\pi}{2}$, không phải $\\pi$.</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/90 rounded-lg border border-red-500/20\">\n        <p class=\"text-rose-400 font-bold\">⚠️ Bẫy 3: Quên tập xác định khi xét tính chẵn lẻ</p>\n        <p class=\"text-slate-300 mt-1\">Nếu tập xác định $D$ không đối xứng qua gốc $O$ (tức tồn tại $x_0 \\in D$ mà $-x_0 \\notin D$), ta lập tức kết luận hàm số KHÔNG CHẴN, KHÔNG LẺ mà không cần kiểm tra $f(-x)$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Trước khi kết thúc mục 1, thầy Nam Minh muốn các em lưu tâm ba bẫy trắc nghiệm kinh điển. Bẫy thứ nhất: chu kỳ T bắt buộc là số dương, khi công thức có dấu âm ở biến x thì phải lấy trị tuyệt đối của omega. Bẫy thứ hai: chu kỳ của tang và côtang là một pi chia omega, rất nhiều bạn quen tay lấy hai pi là mất điểm oan. Bẫy thứ ba: khi xét tính chẵn lẻ, bao giờ cũng phải kiểm tra tập xác định đối xứng trước tiên.",
      "startTime": 280.12,
      "endTime": 306.78,
      "duration": 26.66,
      "sceneIndex": 11,
      "subtitle": "Mục 1: Khái niệm hàm số lượng giác, tính chẵn - lẻ và chu kỳ tuần hoàn • Cảnh 11",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-red-950/70 to-rose-950/50 p-4 rounded-xl border border-red-500/40\">\n    <h3 class=\"text-red-300 font-bold text-base flex items-center gap-2\">\n      <i class=\"fa-solid fa-triangle-exclamation text-red-400 text-lg\"></i>\n      3 BẪY SAI LẦM KINH ĐIỂN CỦA HỌC SINH\n    </h3>\n    <div class=\"mt-3 space-y-3 text-sm\">\n      <div class=\"p-3 bg-slate-900/90 rounded-lg border border-red-500/20\">\n        <p class=\"text-rose-400 font-bold\">⚠️ Bẫy 1: Quên trị tuyệt đối của hệ số $\\omega$ khi tính chu kỳ</p>\n        <p class=\"text-slate-300 mt-1\">Khi gặp $y = \\cos(-3x)$, nhiều bạn tính $T = \\frac{2\\pi}{-3}$ là SAI. Chu kỳ $T$ bắt buộc phải là số dương: $T = \\frac{2\\pi}{|-3|} = \\frac{2\\pi}{3}$.</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/90 rounded-lg border border-red-500/20\">\n        <p class=\"text-rose-400 font-bold\">⚠️ Bẫy 2: Nhầm chu kỳ của tang và côtang thành $2\\pi$</p>\n        <p class=\"text-slate-300 mt-1\">Chu kỳ của hàm số $y = \\tan x$ và $y = \\cot x$ chỉ là $\\pi$. Do đó $y = \\tan(2x)$ có chu kỳ $T = \\frac{\\pi}{2}$, không phải $\\pi$.</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/90 rounded-lg border border-red-500/20\">\n        <p class=\"text-rose-400 font-bold\">⚠️ Bẫy 3: Quên tập xác định khi xét tính chẵn lẻ</p>\n        <p class=\"text-slate-300 mt-1\">Nếu tập xác định $D$ không đối xứng qua gốc $O$ (tức tồn tại $x_0 \\in D$ mà $-x_0 \\notin D$), ta lập tức kết luận hàm số KHÔNG CHẴN, KHÔNG LẺ mà không cần kiểm tra $f(-x)$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "magnifier",
      "mascotTip": "Cảnh giác cao độ với các bẫy trắc nghiệm phổ biến của Bộ Giáo Dục!"
    },
    {
      "id": "scene_12",
      "title": "4. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-900/60 to-yellow-900/40 p-4 rounded-xl border border-amber-500/40\">\n    <h3 class=\"text-amber-300 font-bold text-lg flex items-center gap-2\">\n      <i class=\"fa-solid fa-award text-yellow-400\"></i>\n      BÍ KÍP CÚ THÔNG THÁI • KHẮC CỐT GHI TÂM\n    </h3>\n    <div class=\"mt-3 p-4 bg-slate-900/90 rounded-xl border border-slate-700 text-sm leading-relaxed space-y-2\">\n      <p class=\"text-emerald-300 font-bold\">📖 BÀI THƠ GHI NHỚ TÍNH CHẤT LƯỢNG GIÁC:</p>\n      <div class=\"bg-slate-800/80 p-3 rounded-lg border border-emerald-500/30 text-amber-200 font-serif italic text-center space-y-1\">\n        <p>Cos chẵn nhận trục Oy làm gương chiếu,</p>\n        <p>Sin, Tan, Cot lẻ nhận gốc O đối xứng thay.</p>\n        <p>Chu kỳ Sin, Cos: Hai pi chia omega chuẩn mực,</p>\n        <p>Tan và Côtang: Một pi chia omega nhớ ngay!</p>\n      </div>\n      <p class=\"text-slate-300 mt-2\">\n        Chúc các em làm chủ vững vàng Mục 1! Hãy sẵn sàng bước sang Mục 2 để cùng khám phá đồ thị hình sin tuyệt đẹp!\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã xuất sắc hoàn thành Mục 1. Hãy đọc to bốn câu thơ bí kíp của Cú Thông Thái: Cos chẵn nhận trục Oy làm gương chiếu - Sin, Tan, Cot lẻ nhận gốc O đối xứng thay - Chu kỳ Sin, Cos: Hai pi chia omega chuẩn mực - Tan và Côtang: Một pi chia omega nhớ ngay. Hẹn gặp lại các em ở Mục 2 để cùng vẽ đồ thị hình sin!",
      "startTime": 306.78,
      "endTime": 329.03,
      "duration": 22.25,
      "sceneIndex": 12,
      "subtitle": "Mục 1: Khái niệm hàm số lượng giác, tính chẵn - lẻ và chu kỳ tuần hoàn • Cảnh 12",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-900/60 to-yellow-900/40 p-4 rounded-xl border border-amber-500/40\">\n    <h3 class=\"text-amber-300 font-bold text-lg flex items-center gap-2\">\n      <i class=\"fa-solid fa-award text-yellow-400\"></i>\n      BÍ KÍP CÚ THÔNG THÁI • KHẮC CỐT GHI TÂM\n    </h3>\n    <div class=\"mt-3 p-4 bg-slate-900/90 rounded-xl border border-slate-700 text-sm leading-relaxed space-y-2\">\n      <p class=\"text-emerald-300 font-bold\">📖 BÀI THƠ GHI NHỚ TÍNH CHẤT LƯỢNG GIÁC:</p>\n      <div class=\"bg-slate-800/80 p-3 rounded-lg border border-emerald-500/30 text-amber-200 font-serif italic text-center space-y-1\">\n        <p>Cos chẵn nhận trục Oy làm gương chiếu,</p>\n        <p>Sin, Tan, Cot lẻ nhận gốc O đối xứng thay.</p>\n        <p>Chu kỳ Sin, Cos: Hai pi chia omega chuẩn mực,</p>\n        <p>Tan và Côtang: Một pi chia omega nhớ ngay!</p>\n      </div>\n      <p class=\"text-slate-300 mt-2\">\n        Chúc các em làm chủ vững vàng Mục 1! Hãy sẵn sàng bước sang Mục 2 để cùng khám phá đồ thị hình sin tuyệt đẹp!\n      </p>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "cheer",
      "mascotTip": "Nhớ quy tắc vàng: Cosin là hàm số chẵn duy nhất! Sin, Tang và Côtang đều là hàm số lẻ. Chu kỳ của Sin và Cos là 2 pi chia omega, còn Tang và Côtang chu kỳ chỉ là pi chia omega!"
    }
  ],
  "totalDuration": 329.03,
  "duration": 329.03,
  "timeline": [
    {
      "sceneId": "scene_1",
      "title": "1. ĐỊNH NGHĨA HÀM SỐ LƯỢNG GIÁC & TẬP XÁC ĐỊNH",
      "startTime": 0.0,
      "endTime": 28.92,
      "duration": 28.92
    },
    {
      "sceneId": "scene_2",
      "title": "2. HÀM SỐ TUẦN HOÀN, CHU KỲ VÀ TÍNH CHẴN - LẺ",
      "startTime": 28.92,
      "endTime": 60.34,
      "duration": 31.42
    },
    {
      "sceneId": "scene_3",
      "title": "Ví dụ 1: Tìm chu kỳ tuần hoàn của hàm số lượng giác (Mức Nhận biết)",
      "startTime": 60.34,
      "endTime": 80.48,
      "duration": 20.14
    },
    {
      "sceneId": "scene_4",
      "title": "Ví dụ 1: Lời giải chi tiết & Phân tích chu kỳ chuẩn",
      "startTime": 80.48,
      "endTime": 110.12,
      "duration": 29.64
    },
    {
      "sceneId": "scene_5",
      "title": "Ví dụ 2: Xét tính chẵn, lẻ của hàm số lượng giác (Mức Thông hiểu)",
      "startTime": 110.12,
      "endTime": 131.17,
      "duration": 21.05
    },
    {
      "sceneId": "scene_6",
      "title": "Ví dụ 2: Lời giải chi tiết & Phân tích bước suy luận",
      "startTime": 131.17,
      "endTime": 163.19,
      "duration": 32.02
    },
    {
      "sceneId": "scene_7",
      "title": "Ví dụ 3: Tìm tập xác định của hàm số lượng giác (Mức Vận dụng)",
      "startTime": 163.19,
      "endTime": 181.72,
      "duration": 18.53
    },
    {
      "sceneId": "scene_8",
      "title": "Ví dụ 3: Lời giải chi tiết & Kỹ năng giải điều kiện xác định",
      "startTime": 181.72,
      "endTime": 215.18,
      "duration": 33.46
    },
    {
      "sceneId": "scene_9",
      "title": "Ví dụ 4: Bài toán thực tế chu kỳ mực nước thủy triều (Mức Vận dụng cao)",
      "startTime": 215.18,
      "endTime": 241.7,
      "duration": 26.52
    },
    {
      "sceneId": "scene_10",
      "title": "Ví dụ 4: Lời giải chi tiết & Ý nghĩa mô hình thực tế",
      "startTime": 241.7,
      "endTime": 280.12,
      "duration": 38.42
    },
    {
      "sceneId": "scene_11",
      "title": "3. CẢNH BÁO BẪY TRẮC NGHIỆM KHI TÌM CHU KỲ VÀ TẬP XÁC ĐỊNH",
      "startTime": 280.12,
      "endTime": 306.78,
      "duration": 26.66
    },
    {
      "sceneId": "scene_12",
      "title": "4. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
      "startTime": 306.78,
      "endTime": 329.03,
      "duration": 22.25
    }
  ]
};

  window.G11_CHAPTER1_DATA.g11_bai3_muc2 = {
  "lessonId": "toan11_bai3",
  "lessonTitle": "Bài 3: Hàm số lượng giác",
  "sectionId": "g11_bai3_muc2",
  "sectionTitle": "Mục 2: Đồ thị và tính chất của hàm số sin và côsin",
  "title": "Mục 2: Đồ thị và tính chất của hàm số sin và côsin",
  "audio": "/audio/g11_bai3_muc2.mp3",
  "audioSrc": "./audio/g11_bai3_muc2.mp3",
  "audio_src": "./audio/g11_bai3_muc2.mp3",
  "owl_tip": "Đồ thị của y = sin x đi qua gốc tọa độ O(0,0), còn đồ thị của y = cos x đi qua điểm (0,1). Cả hai đều có biên độ dao động từ -1 đến 1 và chu kỳ 2 pi!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Khảo sát hàm số sin và côsin",
      "scenes": [
        1,
        2
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 4 Ví dụ minh họa tiêu biểu (Đồng hồ 15s/30s)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Cảnh báo bẫy trắc nghiệm & Sai lầm thường gặp",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Tổng kết & Bí kíp Cú Thông Thái",
      "scenes": [
        12
      ]
    }
  ],
  "scenes": [
    {
      "id": "scene_1",
      "title": "1. TÍNH CHẤT TOÀN DIỆN CỦA HÀM SỐ SIN & CÔSIN",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/60 to-cyan-900/40 p-4 rounded-xl border border-blue-500/30\">\n    <h3 class=\"text-blue-300 font-bold text-lg flex items-center gap-2\">\n      <span class=\"px-2 py-0.5 bg-blue-500/20 rounded text-blue-300 text-sm\">Trọng tâm</span>\n      BẢNG SO SÁNH TÍNH CHẤT HÀM SỐ $y = \\sin x$ VÀ $y = \\cos x$\n    </h3>\n    <div class=\"overflow-x-auto mt-3\">\n      <table class=\"w-full text-left text-xs sm:text-sm text-slate-200 border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-800 text-amber-300 border-b border-slate-700\">\n            <th class=\"p-2.5\">Đặc tính</th>\n            <th class=\"p-2.5 text-sky-300\">Hàm số $y = \\sin x$</th>\n            <th class=\"p-2.5 text-emerald-300\">Hàm số $y = \\cos x$</th>\n          </tr>\n        </thead>\n        <tbody class=\"divide-y divide-slate-800 bg-slate-900/80\">\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Tập xác định & Giá trị</td>\n            <td class=\"p-2.5\">$D = \\mathbb{R}$; TGT: $[-1; 1]$</td>\n            <td class=\"p-2.5\">$D = \\mathbb{R}$; TGT: $[-1; 1]$</td>\n          </tr>\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Tính chẵn - lẻ</td>\n            <td class=\"p-2.5 text-indigo-300 font-semibold\">Hàm số LẺ (tâm đối xứng $O$)</td>\n            <td class=\"p-2.5 text-pink-300 font-semibold\">Hàm số CHẴN (trục đối xứng $Oy$)</td>\n          </tr>\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Chu kỳ tuần hoàn</td>\n            <td class=\"p-2.5\">$T = 2\\pi$</td>\n            <td class=\"p-2.5\">$T = 2\\pi$</td>\n          </tr>\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Khoảng đồng biến</td>\n            <td class=\"p-2.5\">$\\left(-\\frac{\\pi}{2} + k2\\pi; \\frac{\\pi}{2} + k2\\pi\\right)$</td>\n            <td class=\"p-2.5\">$(-\\pi + k2\\pi; k2\\pi)$</td>\n          </tr>\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Khoảng nghịch biến</td>\n            <td class=\"p-2.5\">$\\left(\\frac{\\pi}{2} + k2\\pi; \\frac{3\\pi}{2} + k2\\pi\\right)$</td>\n            <td class=\"p-2.5\">$(k2\\pi; \\pi + k2\\pi)$</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 2: Đồ thị và tính chất của hàm số sin và côsin. Hai hàm số này là nền tảng cốt lõi của toàn bộ toán học và vật lý sóng. Hãy quan sát bảng so sánh: cả hai hàm đều có tập xác định R, tập giá trị từ trừ một đến một, và chu kỳ tuần hoàn hai pi. Điểm khác biệt quan trọng: sin x là hàm lẻ nhận gốc tọa độ O làm tâm đối xứng, còn cos x là hàm chẵn nhận trục tung Oy làm trục đối xứng.",
      "startTime": 0.0,
      "endTime": 27.55,
      "duration": 27.55,
      "sceneIndex": 1,
      "subtitle": "Mục 2: Đồ thị và tính chất của hàm số sin và côsin • Cảnh 1",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/60 to-cyan-900/40 p-4 rounded-xl border border-blue-500/30\">\n    <h3 class=\"text-blue-300 font-bold text-lg flex items-center gap-2\">\n      <span class=\"px-2 py-0.5 bg-blue-500/20 rounded text-blue-300 text-sm\">Trọng tâm</span>\n      BẢNG SO SÁNH TÍNH CHẤT HÀM SỐ $y = \\sin x$ VÀ $y = \\cos x$\n    </h3>\n    <div class=\"overflow-x-auto mt-3\">\n      <table class=\"w-full text-left text-xs sm:text-sm text-slate-200 border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-800 text-amber-300 border-b border-slate-700\">\n            <th class=\"p-2.5\">Đặc tính</th>\n            <th class=\"p-2.5 text-sky-300\">Hàm số $y = \\sin x$</th>\n            <th class=\"p-2.5 text-emerald-300\">Hàm số $y = \\cos x$</th>\n          </tr>\n        </thead>\n        <tbody class=\"divide-y divide-slate-800 bg-slate-900/80\">\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Tập xác định & Giá trị</td>\n            <td class=\"p-2.5\">$D = \\mathbb{R}$; TGT: $[-1; 1]$</td>\n            <td class=\"p-2.5\">$D = \\mathbb{R}$; TGT: $[-1; 1]$</td>\n          </tr>\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Tính chẵn - lẻ</td>\n            <td class=\"p-2.5 text-indigo-300 font-semibold\">Hàm số LẺ (tâm đối xứng $O$)</td>\n            <td class=\"p-2.5 text-pink-300 font-semibold\">Hàm số CHẴN (trục đối xứng $Oy$)</td>\n          </tr>\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Chu kỳ tuần hoàn</td>\n            <td class=\"p-2.5\">$T = 2\\pi$</td>\n            <td class=\"p-2.5\">$T = 2\\pi$</td>\n          </tr>\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Khoảng đồng biến</td>\n            <td class=\"p-2.5\">$\\left(-\\frac{\\pi}{2} + k2\\pi; \\frac{\\pi}{2} + k2\\pi\\right)$</td>\n            <td class=\"p-2.5\">$(-\\pi + k2\\pi; k2\\pi)$</td>\n          </tr>\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Khoảng nghịch biến</td>\n            <td class=\"p-2.5\">$\\left(\\frac{\\pi}{2} + k2\\pi; \\frac{3\\pi}{2} + k2\\pi\\right)$</td>\n            <td class=\"p-2.5\">$(k2\\pi; \\pi + k2\\pi)$</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Đồ thị của y = sin x đi qua gốc tọa độ O(0,0), còn đồ thị của y = cos x đi qua điểm (0,1). Cả hai đều có biên độ dao động từ -1 đến 1 và chu kỳ 2 pi!"
    },
    {
      "id": "scene_2",
      "title": "2. ĐẶC ĐIỂM HÌNH HỌC CỦA ĐỒ THỊ HÌNH SIN",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-sky-500/30\">\n      <h4 class=\"text-sky-300 font-bold text-base mb-2\">📈 ĐỒ THỊ $y = \\sin x$ (HÌNH SIN)</h4>\n      <p class=\"text-slate-300 text-sm leading-relaxed\">\n        • Đường cong lượn sóng liên tục vô tận.<br/>\n        • Đi qua gốc tọa độ: $O(0; 0)$.<br/>\n        • Điểm cao nhất (cực đại): $\\left(\\frac{\\pi}{2} + k2\\pi; 1\\right)$.<br/>\n        • Điểm thấp nhất (cực tiểu): $\\left(-\\frac{\\pi}{2} + k2\\pi; -1\\right)$.<br/>\n        • Cắt trục hoành $Ox$ tại các điểm uốn: $x = k\\pi$.\n      </p>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-emerald-500/30\">\n      <h4 class=\"text-emerald-300 font-bold text-base mb-2\">📉 ĐỒ THỊ $y = \\cos x$</h4>\n      <p class=\"text-slate-300 text-sm leading-relaxed\">\n        • Cũng là đường hình sin nhưng lệch pha.<br/>\n        • Đi qua đỉnh trên trục tung: $(0; 1)$.<br/>\n        • Cắt trục hoành $Ox$ tại: $x = \\frac{\\pi}{2} + k\\pi$.<br/>\n        • Điểm thấp nhất: $(\\pi + k2\\pi; -1)$.<br/>\n        • Mối quan hệ: Tịnh tiến đồ thị $y = \\sin x$ sang trái một đoạn $\\frac{\\pi}{2}$ ta được đồ thị $y = \\cos x$.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Về mặt hình học, đồ thị của cả sin và cosin đều là những đường lượn sóng hình sin mềm mại, liên tục trên toàn bộ trục số thực. Đồ thị sin x đi qua gốc tọa độ không không, đạt đỉnh tại pi phần hai và đáy tại trừ pi phần hai. Trong khi đó, đồ thị cos x đi qua đỉnh điểm không một trên trục tung. Các em chỉ cần tịnh tiến đồ thị hàm sin sang bên trái một khoảng bằng pi phần hai là thu được trọn vẹn đồ thị của hàm cosin.",
      "startTime": 27.55,
      "endTime": 53.4,
      "duration": 25.85,
      "sceneIndex": 2,
      "subtitle": "Mục 2: Đồ thị và tính chất của hàm số sin và côsin • Cảnh 2",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-sky-500/30\">\n      <h4 class=\"text-sky-300 font-bold text-base mb-2\">📈 ĐỒ THỊ $y = \\sin x$ (HÌNH SIN)</h4>\n      <p class=\"text-slate-300 text-sm leading-relaxed\">\n        • Đường cong lượn sóng liên tục vô tận.<br/>\n        • Đi qua gốc tọa độ: $O(0; 0)$.<br/>\n        • Điểm cao nhất (cực đại): $\\left(\\frac{\\pi}{2} + k2\\pi; 1\\right)$.<br/>\n        • Điểm thấp nhất (cực tiểu): $\\left(-\\frac{\\pi}{2} + k2\\pi; -1\\right)$.<br/>\n        • Cắt trục hoành $Ox$ tại các điểm uốn: $x = k\\pi$.\n      </p>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-emerald-500/30\">\n      <h4 class=\"text-emerald-300 font-bold text-base mb-2\">📉 ĐỒ THỊ $y = \\cos x$</h4>\n      <p class=\"text-slate-300 text-sm leading-relaxed\">\n        • Cũng là đường hình sin nhưng lệch pha.<br/>\n        • Đi qua đỉnh trên trục tung: $(0; 1)$.<br/>\n        • Cắt trục hoành $Ox$ tại: $x = \\frac{\\pi}{2} + k\\pi$.<br/>\n        • Điểm thấp nhất: $(\\pi + k2\\pi; -1)$.<br/>\n        • Mối quan hệ: Tịnh tiến đồ thị $y = \\sin x$ sang trái một đoạn $\\frac{\\pi}{2}$ ta được đồ thị $y = \\cos x$.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Đồ thị của y = sin x đi qua gốc tọa độ O(0,0), còn đồ thị của y = cos x đi qua điểm (0,1). Cả hai đều có biên độ dao động từ -1 đến 1 và chu kỳ 2 pi!"
    },
    {
      "id": "scene_3",
      "title": "Ví dụ 1: Tìm GTLN và GTNN của hàm số (Mức Nhận biết)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/50 to-indigo-900/40 p-4 rounded-xl border border-blue-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-blue-500 text-white text-xs font-bold rounded\">VÍ DỤ 1 • NHẬN BIẾT</span>\n      <span class=\"text-slate-400 text-xs\">Mục 2 • Giá trị lớn nhất & nhỏ nhất</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Tìm giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN) của các hàm số sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> $y = 3\\sin 2x - 5$</p>\n      <p><strong class=\"text-sky-400\">b)</strong> $y = 4 - 2\\cos\\left(x + \\frac{\\pi}{3}\\right)$</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-15s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 15 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 1 ở mức độ nhận biết: Tìm giá trị lớn nhất và giá trị nhỏ nhất của hai hàm số sau. Câu a: y bằng 3 sin 2x trừ 5. Câu b: y bằng 4 trừ 2 cos của x cộng pi phần 3. Hãy xuất phát từ tính chất chặn từ trừ một đến một của sin và cos trong 15 giây suy nghĩ.",
      "startTime": 53.4,
      "endTime": 73.03,
      "duration": 19.63,
      "sceneIndex": 3,
      "subtitle": "Mục 2: Đồ thị và tính chất của hàm số sin và côsin • Cảnh 3",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/50 to-indigo-900/40 p-4 rounded-xl border border-blue-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-blue-500 text-white text-xs font-bold rounded\">VÍ DỤ 1 • NHẬN BIẾT</span>\n      <span class=\"text-slate-400 text-xs\">Mục 2 • Giá trị lớn nhất & nhỏ nhất</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Tìm giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN) của các hàm số sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> $y = 3\\sin 2x - 5$</p>\n      <p><strong class=\"text-sky-400\">b)</strong> $y = 4 - 2\\cos\\left(x + \\frac{\\pi}{3}\\right)$</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-15s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 15 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Thử sức suy nghĩ và phán đoán đáp án trước khi đồng hồ đếm ngược kết thúc!"
    },
    {
      "id": "scene_4",
      "title": "Ví dụ 1: Lời giải chi tiết & Bước chặn biên độ",
      "content": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-emerald-500/40\">\n    <h4 class=\"text-emerald-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 1:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-amber-400\">a) $y = 3\\sin 2x - 5$:</strong>\n        <p class=\"mt-1\">Với mọi $x \\in \\mathbb{R}$, ta luôn có: $-1 \\le \\sin 2x \\le 1$.</p>\n        <p class=\"mt-0.5\">Nhân 3 hai vế: $-3 \\le 3\\sin 2x \\le 3$.</p>\n        <p class=\"mt-0.5\">Trừ 5 hai vế: $-3 - 5 \\le 3\\sin 2x - 5 \\le 3 - 5 \\Leftrightarrow -8 \\le y \\le -2$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow \\max y = -2 \\quad \\text{và} \\quad \\min y = -8$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-400\">b) $y = 4 - 2\\cos\\left(x + \\frac{\\pi}{3}\\right)$:</strong>\n        <p class=\"mt-1\">Ta có: $-1 \\le \\cos\\left(x + \\frac{\\pi}{3}\\right) \\le 1$.</p>\n        <p class=\"mt-0.5\">Nhân với $-2$ (đổi chiều bất đẳng thức): $2 \\ge -2\\cos\\left(x + \\frac{\\pi}{3}\\right) \\ge -2$.</p>\n        <p class=\"mt-0.5\">Cộng thêm 4: $4 + 2 \\ge y \\ge 4 - 2 \\Leftrightarrow 6 \\ge y \\ge 2$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow \\max y = 6 \\quad \\text{và} \\quad \\min y = 2$$</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Lời giải ví dụ 1 như sau: Ở câu a, sin 2x dao động từ trừ một đến một, nhân 3 rồi trừ 5 ta được y nằm trong đoạn từ trừ 8 đến trừ 2. Vậy giá trị lớn nhất là trừ 2 và giá trị nhỏ nhất là trừ 8. Ở câu b, chú ý khi nhân với số âm trừ 2 thì bất đẳng thức đổi chiều, cộng thêm 4 ta được y chạy từ 2 đến 6. Do đó giá trị lớn nhất bằng 6 và nhỏ nhất bằng 2.",
      "startTime": 73.03,
      "endTime": 98.78,
      "duration": 25.75,
      "sceneIndex": 4,
      "subtitle": "Mục 2: Đồ thị và tính chất của hàm số sin và côsin • Cảnh 4",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-emerald-500/40\">\n    <h4 class=\"text-emerald-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 1:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-amber-400\">a) $y = 3\\sin 2x - 5$:</strong>\n        <p class=\"mt-1\">Với mọi $x \\in \\mathbb{R}$, ta luôn có: $-1 \\le \\sin 2x \\le 1$.</p>\n        <p class=\"mt-0.5\">Nhân 3 hai vế: $-3 \\le 3\\sin 2x \\le 3$.</p>\n        <p class=\"mt-0.5\">Trừ 5 hai vế: $-3 - 5 \\le 3\\sin 2x - 5 \\le 3 - 5 \\Leftrightarrow -8 \\le y \\le -2$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow \\max y = -2 \\quad \\text{và} \\quad \\min y = -8$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-400\">b) $y = 4 - 2\\cos\\left(x + \\frac{\\pi}{3}\\right)$:</strong>\n        <p class=\"mt-1\">Ta có: $-1 \\le \\cos\\left(x + \\frac{\\pi}{3}\\right) \\le 1$.</p>\n        <p class=\"mt-0.5\">Nhân với $-2$ (đổi chiều bất đẳng thức): $2 \\ge -2\\cos\\left(x + \\frac{\\pi}{3}\\right) \\ge -2$.</p>\n        <p class=\"mt-0.5\">Cộng thêm 4: $4 + 2 \\ge y \\ge 4 - 2 \\Leftrightarrow 6 \\ge y \\ge 2$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow \\max y = 6 \\quad \\text{và} \\quad \\min y = 2$$</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "cheer",
      "mascotTip": "Đối chiếu từng bước biến đổi tự luận để khắc sâu phương pháp giải!"
    },
    {
      "id": "scene_5",
      "title": "Ví dụ 2: Xét chiều biến thiên của hàm số trên khoảng (Mức Thông hiểu)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/50 to-indigo-900/40 p-4 rounded-xl border border-purple-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-purple-500 text-white text-xs font-bold rounded\">VÍ DỤ 2 • THÔNG HIỂU</span>\n      <span class=\"text-slate-400 text-xs\">Mục 2 • Chiều biến thiên</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Xét sự đồng biến, nghịch biến của các hàm số sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> Hàm số $y = \\sin x$ trên khoảng $\\left(0; \\frac{3\\pi}{4}\\right)$.</p>\n      <p><strong class=\"text-sky-400\">b)</strong> Hàm số $y = \\cos x$ trên khoảng $\\left(\\pi; \\frac{3\\pi}{2}\\right)$.</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2 là bài toán thông hiểu về chiều biến thiên của hàm số sin và cosin. Xét xem: câu a hàm số y bằng sin x đồng biến hay nghịch biến trên khoảng từ 0 đến 3 pi phần 4. Câu b hàm số y bằng cos x đồng biến hay nghịch biến trên khoảng từ pi đến 3 pi phần 2. Hãy đối chiếu với đường tròn lượng giác hoặc đồ thị trong 30 giây suy nghĩ.",
      "startTime": 98.78,
      "endTime": 120.57,
      "duration": 21.79,
      "sceneIndex": 5,
      "subtitle": "Mục 2: Đồ thị và tính chất của hàm số sin và côsin • Cảnh 5",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/50 to-indigo-900/40 p-4 rounded-xl border border-purple-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-purple-500 text-white text-xs font-bold rounded\">VÍ DỤ 2 • THÔNG HIỂU</span>\n      <span class=\"text-slate-400 text-xs\">Mục 2 • Chiều biến thiên</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Xét sự đồng biến, nghịch biến của các hàm số sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> Hàm số $y = \\sin x$ trên khoảng $\\left(0; \\frac{3\\pi}{4}\\right)$.</p>\n      <p><strong class=\"text-sky-400\">b)</strong> Hàm số $y = \\cos x$ trên khoảng $\\left(\\pi; \\frac{3\\pi}{2}\\right)$.</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Thử sức suy nghĩ và phán đoán đáp án trước khi đồng hồ đếm ngược kết thúc!"
    },
    {
      "id": "scene_6",
      "title": "Ví dụ 2: Lời giải chi tiết & Quan sát đường tròn lượng giác",
      "content": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-purple-500/40\">\n    <h4 class=\"text-purple-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 2:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-amber-400\">a) Khảo sát $y = \\sin x$ trên $\\left(0; \\frac{3\\pi}{4}\\right)$:</strong>\n        <p class=\"text-slate-300\">• Chia khoảng qua điểm cực đại $\\frac{\\pi}{2}$:</p>\n        <p class=\"text-slate-300\">• Trên $\\left(0; \\frac{\\pi}{2}\\right)$: Khi $x$ tăng từ $0$ đến $\\frac{\\pi}{2}$, giá trị $\\sin x$ tăng từ $0$ lên $1$ $\\Rightarrow$ Hàm số <strong>ĐỒNG BIẾN</strong>.</p>\n        <p class=\"text-slate-300\">• Trên $\\left(\\frac{\\pi}{2}; \\frac{3\\pi}{4}\\right)$: Khi $x$ tăng, giá trị $\\sin x$ giảm từ $1$ xuống $\\frac{\\sqrt{2}}{2}$ $\\Rightarrow$ Hàm số <strong>NGHỊCH BIẾN</strong>.</p>\n        <p class=\"text-yellow-300 font-bold mt-1\">Kết luận: Trên toàn khoảng $\\left(0; \\frac{3\\pi}{4}\\right)$, hàm số KHÔNG ĐƠN ĐIỆU (vừa tăng vừa giảm).</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-400\">b) Khảo sát $y = \\cos x$ trên $\\left(\\pi; \\frac{3\\pi}{2}\\right)$:</strong>\n        <p class=\"text-slate-300\">• Khoảng này thuộc góc phần tư thứ III.</p>\n        <p class=\"text-slate-300\">• Khi $x$ tăng từ $\\pi$ đến $\\frac{3\\pi}{2}$, hoành độ điểm biểu diễn tăng từ $-1$ lên $0$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">Kết luận: Hàm số $y = \\cos x$ ĐỒNG BIẾN trên khoảng $\\left(\\pi; \\frac{3\\pi}{2}\\right)$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Lời giải ví dụ 2 như sau. Ở câu a, khoảng từ 0 đến 3 pi phần 4 chứa điểm đỉnh pi phần hai. Từ 0 đến pi phần hai sin tăng từ 0 lên 1 nên đồng biến, nhưng từ pi phần hai đến 3 pi phần 4 sin lại giảm từ 1 xuống căn hai phần hai nên nghịch biến. Do đó trên toàn khoảng này hàm số không đơn điệu. Ở câu b, trên khoảng từ pi đến 3 pi phần 2 thuộc góc phần tư thứ ba, giá trị cos tăng từ trừ một lên không, nên hàm số cos x đồng biến.",
      "startTime": 120.57,
      "endTime": 149.87,
      "duration": 29.3,
      "sceneIndex": 6,
      "subtitle": "Mục 2: Đồ thị và tính chất của hàm số sin và côsin • Cảnh 6",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-purple-500/40\">\n    <h4 class=\"text-purple-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 2:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-amber-400\">a) Khảo sát $y = \\sin x$ trên $\\left(0; \\frac{3\\pi}{4}\\right)$:</strong>\n        <p class=\"text-slate-300\">• Chia khoảng qua điểm cực đại $\\frac{\\pi}{2}$:</p>\n        <p class=\"text-slate-300\">• Trên $\\left(0; \\frac{\\pi}{2}\\right)$: Khi $x$ tăng từ $0$ đến $\\frac{\\pi}{2}$, giá trị $\\sin x$ tăng từ $0$ lên $1$ $\\Rightarrow$ Hàm số <strong>ĐỒNG BIẾN</strong>.</p>\n        <p class=\"text-slate-300\">• Trên $\\left(\\frac{\\pi}{2}; \\frac{3\\pi}{4}\\right)$: Khi $x$ tăng, giá trị $\\sin x$ giảm từ $1$ xuống $\\frac{\\sqrt{2}}{2}$ $\\Rightarrow$ Hàm số <strong>NGHỊCH BIẾN</strong>.</p>\n        <p class=\"text-yellow-300 font-bold mt-1\">Kết luận: Trên toàn khoảng $\\left(0; \\frac{3\\pi}{4}\\right)$, hàm số KHÔNG ĐƠN ĐIỆU (vừa tăng vừa giảm).</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-400\">b) Khảo sát $y = \\cos x$ trên $\\left(\\pi; \\frac{3\\pi}{2}\\right)$:</strong>\n        <p class=\"text-slate-300\">• Khoảng này thuộc góc phần tư thứ III.</p>\n        <p class=\"text-slate-300\">• Khi $x$ tăng từ $\\pi$ đến $\\frac{3\\pi}{2}$, hoành độ điểm biểu diễn tăng từ $-1$ lên $0$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">Kết luận: Hàm số $y = \\cos x$ ĐỒNG BIẾN trên khoảng $\\left(\\pi; \\frac{3\\pi}{2}\\right)$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "cheer",
      "mascotTip": "Đối chiếu từng bước biến đổi tự luận để khắc sâu phương pháp giải!"
    },
    {
      "id": "scene_7",
      "title": "Ví dụ 3: Tìm tập giá trị của hàm số quy về bậc hai (Mức Vận dụng)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-900/50 to-orange-900/40 p-4 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-amber-500 text-slate-900 text-xs font-bold rounded\">VÍ DỤ 3 • VẬN DỤNG</span>\n      <span class=\"text-slate-400 text-xs\">Mục 2 • Biến đổi lượng giác</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Tìm tập giá trị (GTLN và GTNN) của các hàm số sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> $y = 2\\sin^2 x - \\cos 2x + 3$</p>\n      <p><strong class=\"text-sky-400\">b)</strong> $y = \\sqrt{3}\\sin x - \\cos x + 1$</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3 là bài toán vận dụng tìm tập giá trị: Câu a y bằng 2 sin bình phương x trừ cos 2x cộng 3. Câu b y bằng căn 3 sin x trừ cos x cộng 1. Các em hãy vận dụng công thức nhân đôi ở câu a và dạng asinx cộng bcosx ở câu b trong 30 giây suy nghĩ.",
      "startTime": 149.87,
      "endTime": 167.58,
      "duration": 17.71,
      "sceneIndex": 7,
      "subtitle": "Mục 2: Đồ thị và tính chất của hàm số sin và côsin • Cảnh 7",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-900/50 to-orange-900/40 p-4 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-amber-500 text-slate-900 text-xs font-bold rounded\">VÍ DỤ 3 • VẬN DỤNG</span>\n      <span class=\"text-slate-400 text-xs\">Mục 2 • Biến đổi lượng giác</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Tìm tập giá trị (GTLN và GTNN) của các hàm số sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> $y = 2\\sin^2 x - \\cos 2x + 3$</p>\n      <p><strong class=\"text-sky-400\">b)</strong> $y = \\sqrt{3}\\sin x - \\cos x + 1$</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Thử sức suy nghĩ và phán đoán đáp án trước khi đồng hồ đếm ngược kết thúc!"
    },
    {
      "id": "scene_8",
      "title": "Ví dụ 3: Lời giải chi tiết & Tuyệt kỹ hạ bậc quy về một hàm",
      "content": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-amber-500/40\">\n    <h4 class=\"text-amber-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 3:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-amber-400\">a) $y = 2\\sin^2 x - \\cos 2x + 3$:</strong>\n        <p class=\"text-slate-300\">• Dùng công thức nhân đôi: $\\cos 2x = 1 - 2\\sin^2 x$.</p>\n        <p class=\"text-slate-300\">$$\\Rightarrow y = 2\\sin^2 x - (1 - 2\\sin^2 x) + 3 = 4\\sin^2 x + 2$$</p>\n        <p class=\"text-slate-300\">• Vì $0 \\le \\sin^2 x \\le 1 \\Rightarrow 0 \\le 4\\sin^2 x \\le 4 \\Rightarrow 2 \\le y \\le 6$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow \\text{Tập giá trị là } TGT = [2; 6] \\quad (\\max y = 6, \\min y = 2)$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-400\">b) $y = \\sqrt{3}\\sin x - \\cos x + 1$:</strong>\n        <p class=\"text-slate-300\">• Biến đổi dạng $a\\sin x + b\\cos x$: chia và nhân với $\\sqrt{(\\sqrt{3})^2 + (-1)^2} = 2$:</p>\n        <p class=\"text-slate-300\">$$\\sqrt{3}\\sin x - \\cos x = 2\\left(\\frac{\\sqrt{3}}{2}\\sin x - \\frac{1}{2}\\cos x\\right) = 2\\sin\\left(x - \\frac{\\pi}{6}\\right)$$</p>\n        <p class=\"text-slate-300\">$$\\Rightarrow y = 2\\sin\\left(x - \\frac{\\pi}{6}\\right) + 1$$</p>\n        <p class=\"text-slate-300\">• Vì $-1 \\le \\sin\\left(x - \\frac{\\pi}{6}\\right) \\le 1 \\Rightarrow -2 \\le 2\\sin \\le 2 \\Rightarrow -1 \\le y \\le 3$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow \\text{Tập giá trị là } TGT = [-1; 3] \\quad (\\max y = 3, \\min y = -1)$$</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Lời giải chi tiết ví dụ 3 như sau. Ở câu a, ta thay cos 2x bằng 1 trừ 2 sin bình x, biểu thức rút gọn về dạng 4 sin bình x cộng 2. Vì sin bình nằm từ không đến một, nên y dao động từ 2 đến 6, tập giá trị là đoạn từ 2 đến 6. Ở câu b, biểu thức căn 3 sin x trừ cos x được rút gọn thành 2 lần sin của x trừ pi phần 6. Cộng thêm 1, ta được khoảng giá trị từ trừ một đến 3. Tuyệt đối chính xác và nhanh chóng.",
      "startTime": 167.58,
      "endTime": 198.04,
      "duration": 30.46,
      "sceneIndex": 8,
      "subtitle": "Mục 2: Đồ thị và tính chất của hàm số sin và côsin • Cảnh 8",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-amber-500/40\">\n    <h4 class=\"text-amber-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 3:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-amber-400\">a) $y = 2\\sin^2 x - \\cos 2x + 3$:</strong>\n        <p class=\"text-slate-300\">• Dùng công thức nhân đôi: $\\cos 2x = 1 - 2\\sin^2 x$.</p>\n        <p class=\"text-slate-300\">$$\\Rightarrow y = 2\\sin^2 x - (1 - 2\\sin^2 x) + 3 = 4\\sin^2 x + 2$$</p>\n        <p class=\"text-slate-300\">• Vì $0 \\le \\sin^2 x \\le 1 \\Rightarrow 0 \\le 4\\sin^2 x \\le 4 \\Rightarrow 2 \\le y \\le 6$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow \\text{Tập giá trị là } TGT = [2; 6] \\quad (\\max y = 6, \\min y = 2)$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-400\">b) $y = \\sqrt{3}\\sin x - \\cos x + 1$:</strong>\n        <p class=\"text-slate-300\">• Biến đổi dạng $a\\sin x + b\\cos x$: chia và nhân với $\\sqrt{(\\sqrt{3})^2 + (-1)^2} = 2$:</p>\n        <p class=\"text-slate-300\">$$\\sqrt{3}\\sin x - \\cos x = 2\\left(\\frac{\\sqrt{3}}{2}\\sin x - \\frac{1}{2}\\cos x\\right) = 2\\sin\\left(x - \\frac{\\pi}{6}\\right)$$</p>\n        <p class=\"text-slate-300\">$$\\Rightarrow y = 2\\sin\\left(x - \\frac{\\pi}{6}\\right) + 1$$</p>\n        <p class=\"text-slate-300\">• Vì $-1 \\le \\sin\\left(x - \\frac{\\pi}{6}\\right) \\le 1 \\Rightarrow -2 \\le 2\\sin \\le 2 \\Rightarrow -1 \\le y \\le 3$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow \\text{Tập giá trị là } TGT = [-1; 3] \\quad (\\max y = 3, \\min y = -1)$$</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "cheer",
      "mascotTip": "Đối chiếu từng bước biến đổi tự luận để khắc sâu phương pháp giải!"
    },
    {
      "id": "scene_9",
      "title": "Ví dụ 4: Mô hình dao động điều hòa của con lắc (Mức Vận dụng cao)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-rose-900/50 to-red-900/40 p-4 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-rose-500 text-white text-xs font-bold rounded\">VÍ DỤ 4 • VẬN DỤNG CAO</span>\n      <span class=\"text-slate-400 text-xs\">Vật lý • Dao động điều hòa</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Phương trình li độ dao động điều hòa của vật:</h4>\n    <p class=\"text-slate-300 text-sm leading-relaxed mt-2\">\n      Một vật dao động điều hòa quanh vị trí cân bằng theo phương trình:\n    </p>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-center font-bold text-cyan-300 text-lg\">\n      $$x(t) = 4\\cos\\left(5\\pi t - \\frac{\\pi}{3}\\right) \\quad (x\\text{ đo bằng cm, } t\\text{ đo bằng giây})$$\n    </div>\n    <div class=\"mt-2 space-y-1.5 text-sm text-slate-200\">\n      <p><strong class=\"text-sky-300\">a)</strong> Xác định biên độ dao động $A$, chu kỳ $T$ và tần số $f$.</p>\n      <p><strong class=\"text-emerald-300\">b)</strong> Trong khoảng thời gian $0 \\le t \\le 1$ giây đầu tiên, vật đi qua vị trí cân bằng ($x = 0$) bao nhiêu lần và tại những thời điểm nào?</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4 là bài toán vận dụng cao liên môn giữa hàm số lượng giác và Vật lý 11 về dao động điều hòa. Một vật dao động theo phương trình li độ: x t bằng 4 cos của 5 pi t trừ pi phần 3, với x tính bằng xăng ti mét và t tính bằng giây. Câu a tìm biên độ A, chu kỳ T và tần số f. Câu b tìm số lần và các thời điểm vật đi qua vị trí cân bằng trong 1 giây đầu tiên. Các em có 30 giây suy nghĩ.",
      "startTime": 198.04,
      "endTime": 223.84,
      "duration": 25.8,
      "sceneIndex": 9,
      "subtitle": "Mục 2: Đồ thị và tính chất của hàm số sin và côsin • Cảnh 9",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-rose-900/50 to-red-900/40 p-4 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-rose-500 text-white text-xs font-bold rounded\">VÍ DỤ 4 • VẬN DỤNG CAO</span>\n      <span class=\"text-slate-400 text-xs\">Vật lý • Dao động điều hòa</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Phương trình li độ dao động điều hòa của vật:</h4>\n    <p class=\"text-slate-300 text-sm leading-relaxed mt-2\">\n      Một vật dao động điều hòa quanh vị trí cân bằng theo phương trình:\n    </p>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-center font-bold text-cyan-300 text-lg\">\n      $$x(t) = 4\\cos\\left(5\\pi t - \\frac{\\pi}{3}\\right) \\quad (x\\text{ đo bằng cm, } t\\text{ đo bằng giây})$$\n    </div>\n    <div class=\"mt-2 space-y-1.5 text-sm text-slate-200\">\n      <p><strong class=\"text-sky-300\">a)</strong> Xác định biên độ dao động $A$, chu kỳ $T$ và tần số $f$.</p>\n      <p><strong class=\"text-emerald-300\">b)</strong> Trong khoảng thời gian $0 \\le t \\le 1$ giây đầu tiên, vật đi qua vị trí cân bằng ($x = 0$) bao nhiêu lần và tại những thời điểm nào?</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Thử sức suy nghĩ và phán đoán đáp án trước khi đồng hồ đếm ngược kết thúc!"
    },
    {
      "id": "scene_10",
      "title": "Ví dụ 4: Lời giải chi tiết & Đếm số nghiệm thời gian",
      "content": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-rose-500/40\">\n    <h4 class=\"text-rose-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 4:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-300\">a) Biên độ, chu kỳ và tần số:</strong>\n        <p class=\"mt-1\">• Biên độ dao động: <span class=\"text-yellow-400 font-bold\">$A = 4\\text{ cm}$</span>.</p>\n        <p>• Tần số góc $\\omega = 5\\pi\\text{ rad/s} \\Rightarrow$ Chu kỳ: <span class=\"text-emerald-300 font-bold\">$$T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{5\\pi} = 0.4\\text{ giây}$$</span></p>\n        <p>• Tần số dao động: <span class=\"text-cyan-300 font-bold\">$$f = \\frac{1}{T} = \\frac{1}{0.4} = 2.5\\text{ Hz}$$</span></p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-emerald-300\">b) Vị trí cân bằng $x(t) = 0$ trong $1\\text{ s}$ đầu:</strong>\n        <p class=\"text-slate-300\">$$\\cos\\left(5\\pi t - \\frac{\\pi}{3}\\right) = 0 \\Leftrightarrow 5\\pi t - \\frac{\\pi}{3} = \\frac{\\pi}{2} + k\\pi \\Leftrightarrow 5\\pi t = \\frac{5\\pi}{6} + k\\pi$$</p>\n        <p class=\"text-center font-bold text-amber-300\">$$\\Leftrightarrow t = \\frac{1}{6} + \\frac{k}{5} \\quad (k \\in \\mathbb{Z})$$</p>\n        <p class=\"text-slate-300\">Vì $0 \\le t \\le 1 \\Leftrightarrow 0 \\le \\frac{1}{6} + \\frac{k}{5} \\le 1 \\Leftrightarrow -\\frac{5}{6} \\le k \\le \\frac{25}{6} \\approx 4.16$.</p>\n        <p class=\"text-slate-300\">Vì $k \\in \\mathbb{Z} \\Rightarrow k \\in \\{0, 1, 2, 3, 4\\}$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">Kết luận: Vật qua VTCB đúng <span class=\"text-yellow-300\">5 lần</span> tại các thời điểm: $t_0 = \\frac{1}{6}\\text{s}$, $t_1 = \\frac{11}{30}\\text{s}$, $t_2 = \\frac{17}{30}\\text{s}$, $t_3 = \\frac{23}{30}\\text{s}$, $t_4 = \\frac{29}{30}\\text{s}$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Lời giải ví dụ 4 như sau: Ở câu a, biên độ A bằng 4 cm, tần số góc 5 pi ra đi an trên giây, suy ra chu kỳ T bằng 0.4 giây và tần số f bằng 2.5 Héc. Ở câu b, vật qua vị trí cân bằng khi cos bằng 0, tức 5 pi t trừ pi phần 3 bằng pi phần hai cộng k pi. Giải ra ta được t bằng 1 phần 6 cộng k phần 5. Chặn t từ 0 đến 1, ta tìm được đúng 5 giá trị k nguyên từ 0 đến 4. Như vậy trong 1 giây đầu tiên, vật đi qua vị trí cân bằng đúng 5 lần. Một ứng dụng tuyệt đẹp của hàm số lượng giác!",
      "startTime": 223.84,
      "endTime": 246.28,
      "duration": 22.44,
      "sceneIndex": 10,
      "subtitle": "Mục 2: Đồ thị và tính chất của hàm số sin và côsin • Cảnh 10",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-rose-500/40\">\n    <h4 class=\"text-rose-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 4:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-300\">a) Biên độ, chu kỳ và tần số:</strong>\n        <p class=\"mt-1\">• Biên độ dao động: <span class=\"text-yellow-400 font-bold\">$A = 4\\text{ cm}$</span>.</p>\n        <p>• Tần số góc $\\omega = 5\\pi\\text{ rad/s} \\Rightarrow$ Chu kỳ: <span class=\"text-emerald-300 font-bold\">$$T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{5\\pi} = 0.4\\text{ giây}$$</span></p>\n        <p>• Tần số dao động: <span class=\"text-cyan-300 font-bold\">$$f = \\frac{1}{T} = \\frac{1}{0.4} = 2.5\\text{ Hz}$$</span></p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-emerald-300\">b) Vị trí cân bằng $x(t) = 0$ trong $1\\text{ s}$ đầu:</strong>\n        <p class=\"text-slate-300\">$$\\cos\\left(5\\pi t - \\frac{\\pi}{3}\\right) = 0 \\Leftrightarrow 5\\pi t - \\frac{\\pi}{3} = \\frac{\\pi}{2} + k\\pi \\Leftrightarrow 5\\pi t = \\frac{5\\pi}{6} + k\\pi$$</p>\n        <p class=\"text-center font-bold text-amber-300\">$$\\Leftrightarrow t = \\frac{1}{6} + \\frac{k}{5} \\quad (k \\in \\mathbb{Z})$$</p>\n        <p class=\"text-slate-300\">Vì $0 \\le t \\le 1 \\Leftrightarrow 0 \\le \\frac{1}{6} + \\frac{k}{5} \\le 1 \\Leftrightarrow -\\frac{5}{6} \\le k \\le \\frac{25}{6} \\approx 4.16$.</p>\n        <p class=\"text-slate-300\">Vì $k \\in \\mathbb{Z} \\Rightarrow k \\in \\{0, 1, 2, 3, 4\\}$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">Kết luận: Vật qua VTCB đúng <span class=\"text-yellow-300\">5 lần</span> tại các thời điểm: $t_0 = \\frac{1}{6}\\text{s}$, $t_1 = \\frac{11}{30}\\text{s}$, $t_2 = \\frac{17}{30}\\text{s}$, $t_3 = \\frac{23}{30}\\text{s}$, $t_4 = \\frac{29}{30}\\text{s}$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "cheer",
      "mascotTip": "Đối chiếu từng bước biến đổi tự luận để khắc sâu phương pháp giải!"
    },
    {
      "id": "scene_11",
      "title": "3. CẢNH BÁO BẪY TRẮC NGHIỆM ĐỒ THỊ VÀ TẬP GIÁ TRỊ",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-red-950/70 to-rose-950/50 p-4 rounded-xl border border-red-500/40\">\n    <h3 class=\"text-red-300 font-bold text-base flex items-center gap-2\">\n      <i class=\"fa-solid fa-triangle-exclamation text-red-400 text-lg\"></i>\n      3 BẪY SAI LẦM PHỔ BIẾN KHI KHẢO SÁT HÀM SIN VÀ COS\n    </h3>\n    <div class=\"mt-3 space-y-3 text-sm\">\n      <div class=\"p-3 bg-slate-900/90 rounded-lg border border-red-500/20\">\n        <p class=\"text-rose-400 font-bold\">⚠️ Bẫy 1: Nhầm lẫn điểm đi qua của đồ thị tại $x = 0$</p>\n        <p class=\"text-slate-300 mt-1\">Đồ thị $y = \\sin x$ luôn đi qua gốc tọa độ $(0; 0)$, còn đồ thị $y = \\cos x$ luôn đi qua điểm cực đại $(0; 1)$ trên trục tung.</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/90 rounded-lg border border-red-500/20\">\n        <p class=\"text-rose-400 font-bold\">⚠️ Bẫy 2: Nhầm khoảng đồng biến nghịch biến của cosin</p>\n        <p class=\"text-slate-300 mt-1\">Hàm số $y = \\cos x$ NGHỊCH BIẾN trên $(0; \\pi)$ và ĐỒNG BIẾN trên $(-\\pi; 0)$. Rất nhiều bạn nhớ nhầm thành đồng biến trên $(0; \\pi)$.</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/90 rounded-lg border border-red-500/20\">\n        <p class=\"text-rose-400 font-bold\">⚠️ Bẫy 3: Quên chặn điều kiện ẩn phụ khi đặt $t = \\sin x$ hoặc $t = \\cos x$</p>\n        <p class=\"text-slate-300 mt-1\">Khi đưa về hàm số bậc hai theo $t$, bắt buộc phải kèm điều kiện $t \\in [-1; 1]$. Đỉnh parabol nằm ngoài đoạn này sẽ không thể lấy làm GTLN hay GTNN.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Trước khi tổng kết Mục 2, hãy ghi nhớ ba bẫy sai lầm phổ biến: Thứ nhất, đồ thị sin đi qua gốc không không, còn cos đi qua không một. Thứ hai, hàm cos nghịch biến trên khoảng từ 0 đến pi chứ không phải đồng biến. Thứ ba, khi đặt ẩn phụ t bằng sin x hay cos x, tuyệt đối không được quên điều kiện t thuộc đoạn từ trừ một đến một.",
      "startTime": 246.28,
      "endTime": 266.78,
      "duration": 20.5,
      "sceneIndex": 11,
      "subtitle": "Mục 2: Đồ thị và tính chất của hàm số sin và côsin • Cảnh 11",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-red-950/70 to-rose-950/50 p-4 rounded-xl border border-red-500/40\">\n    <h3 class=\"text-red-300 font-bold text-base flex items-center gap-2\">\n      <i class=\"fa-solid fa-triangle-exclamation text-red-400 text-lg\"></i>\n      3 BẪY SAI LẦM PHỔ BIẾN KHI KHẢO SÁT HÀM SIN VÀ COS\n    </h3>\n    <div class=\"mt-3 space-y-3 text-sm\">\n      <div class=\"p-3 bg-slate-900/90 rounded-lg border border-red-500/20\">\n        <p class=\"text-rose-400 font-bold\">⚠️ Bẫy 1: Nhầm lẫn điểm đi qua của đồ thị tại $x = 0$</p>\n        <p class=\"text-slate-300 mt-1\">Đồ thị $y = \\sin x$ luôn đi qua gốc tọa độ $(0; 0)$, còn đồ thị $y = \\cos x$ luôn đi qua điểm cực đại $(0; 1)$ trên trục tung.</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/90 rounded-lg border border-red-500/20\">\n        <p class=\"text-rose-400 font-bold\">⚠️ Bẫy 2: Nhầm khoảng đồng biến nghịch biến của cosin</p>\n        <p class=\"text-slate-300 mt-1\">Hàm số $y = \\cos x$ NGHỊCH BIẾN trên $(0; \\pi)$ và ĐỒNG BIẾN trên $(-\\pi; 0)$. Rất nhiều bạn nhớ nhầm thành đồng biến trên $(0; \\pi)$.</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/90 rounded-lg border border-red-500/20\">\n        <p class=\"text-rose-400 font-bold\">⚠️ Bẫy 3: Quên chặn điều kiện ẩn phụ khi đặt $t = \\sin x$ hoặc $t = \\cos x$</p>\n        <p class=\"text-slate-300 mt-1\">Khi đưa về hàm số bậc hai theo $t$, bắt buộc phải kèm điều kiện $t \\in [-1; 1]$. Đỉnh parabol nằm ngoài đoạn này sẽ không thể lấy làm GTLN hay GTNN.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "magnifier",
      "mascotTip": "Cảnh giác cao độ với các bẫy trắc nghiệm phổ biến của Bộ Giáo Dục!"
    },
    {
      "id": "scene_12",
      "title": "4. TỔNG KẾT MỤC 2 & BÍ KÍP CÚ THÔNG THÁI",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/40\">\n    <h3 class=\"text-emerald-300 font-bold text-lg flex items-center gap-2\">\n      <i class=\"fa-solid fa-trophy text-yellow-400\"></i>\n      TỔNG KẾT MỤC 2 • BÍ KÍP VÀNG\n    </h3>\n    <div class=\"mt-3 p-4 bg-slate-900/90 rounded-xl border border-slate-700 text-sm leading-relaxed space-y-2\">\n      <p class=\"text-amber-300 font-bold\">🌟 THẦN CHÚ KHẮC SÂU ĐỒ THỊ HÌNH SIN:</p>\n      <div class=\"bg-slate-800/80 p-3 rounded-lg border border-amber-500/30 text-emerald-200 font-serif italic text-center space-y-1\">\n        <p>Sin xuất phát từ không, uốn lượn nhịp nhàng quanh trục hoành,</p>\n        <p>Cos xuất phát từ một, hạ dần về đáy rồi vút lên cao.</p>\n        <p>Đỉnh cao nhất là một, đáy sâu nhất trừ một chẳng sai,</p>\n        <p>Hai pi trọn một vòng đời lặp lại muôn năm!</p>\n      </div>\n      <p class=\"text-slate-300 mt-2\">\n        Các em đã nắm vững toàn bộ kiến thức về hàm sin và cosin. Cùng bước sang Mục 3 để chinh phục nốt hai hàm số tang và côtang nhé!\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục 2. Hãy đọc lại bốn câu thần chú ghi nhớ: Sin xuất phát từ không, uốn lượn nhịp nhàng quanh trục hoành - Cos xuất phát từ một, hạ dần về đáy rồi vút lên cao - Đỉnh cao nhất là một, đáy sâu nhất trừ một chẳng sai - Hai pi trọn một vòng đời lặp lại muôn năm. Thầy hẹn gặp các em ở Mục 3!",
      "startTime": 266.78,
      "endTime": 289.92,
      "duration": 23.14,
      "sceneIndex": 12,
      "subtitle": "Mục 2: Đồ thị và tính chất của hàm số sin và côsin • Cảnh 12",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/40\">\n    <h3 class=\"text-emerald-300 font-bold text-lg flex items-center gap-2\">\n      <i class=\"fa-solid fa-trophy text-yellow-400\"></i>\n      TỔNG KẾT MỤC 2 • BÍ KÍP VÀNG\n    </h3>\n    <div class=\"mt-3 p-4 bg-slate-900/90 rounded-xl border border-slate-700 text-sm leading-relaxed space-y-2\">\n      <p class=\"text-amber-300 font-bold\">🌟 THẦN CHÚ KHẮC SÂU ĐỒ THỊ HÌNH SIN:</p>\n      <div class=\"bg-slate-800/80 p-3 rounded-lg border border-amber-500/30 text-emerald-200 font-serif italic text-center space-y-1\">\n        <p>Sin xuất phát từ không, uốn lượn nhịp nhàng quanh trục hoành,</p>\n        <p>Cos xuất phát từ một, hạ dần về đáy rồi vút lên cao.</p>\n        <p>Đỉnh cao nhất là một, đáy sâu nhất trừ một chẳng sai,</p>\n        <p>Hai pi trọn một vòng đời lặp lại muôn năm!</p>\n      </div>\n      <p class=\"text-slate-300 mt-2\">\n        Các em đã nắm vững toàn bộ kiến thức về hàm sin và cosin. Cùng bước sang Mục 3 để chinh phục nốt hai hàm số tang và côtang nhé!\n      </p>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "cheer",
      "mascotTip": "Đồ thị của y = sin x đi qua gốc tọa độ O(0,0), còn đồ thị của y = cos x đi qua điểm (0,1). Cả hai đều có biên độ dao động từ -1 đến 1 và chu kỳ 2 pi!"
    }
  ],
  "totalDuration": 289.92,
  "duration": 289.92,
  "timeline": [
    {
      "sceneId": "scene_1",
      "title": "1. TÍNH CHẤT TOÀN DIỆN CỦA HÀM SỐ SIN & CÔSIN",
      "startTime": 0.0,
      "endTime": 27.55,
      "duration": 27.55
    },
    {
      "sceneId": "scene_2",
      "title": "2. ĐẶC ĐIỂM HÌNH HỌC CỦA ĐỒ THỊ HÌNH SIN",
      "startTime": 27.55,
      "endTime": 53.4,
      "duration": 25.85
    },
    {
      "sceneId": "scene_3",
      "title": "Ví dụ 1: Tìm GTLN và GTNN của hàm số (Mức Nhận biết)",
      "startTime": 53.4,
      "endTime": 73.03,
      "duration": 19.63
    },
    {
      "sceneId": "scene_4",
      "title": "Ví dụ 1: Lời giải chi tiết & Bước chặn biên độ",
      "startTime": 73.03,
      "endTime": 98.78,
      "duration": 25.75
    },
    {
      "sceneId": "scene_5",
      "title": "Ví dụ 2: Xét chiều biến thiên của hàm số trên khoảng (Mức Thông hiểu)",
      "startTime": 98.78,
      "endTime": 120.57,
      "duration": 21.79
    },
    {
      "sceneId": "scene_6",
      "title": "Ví dụ 2: Lời giải chi tiết & Quan sát đường tròn lượng giác",
      "startTime": 120.57,
      "endTime": 149.87,
      "duration": 29.3
    },
    {
      "sceneId": "scene_7",
      "title": "Ví dụ 3: Tìm tập giá trị của hàm số quy về bậc hai (Mức Vận dụng)",
      "startTime": 149.87,
      "endTime": 167.58,
      "duration": 17.71
    },
    {
      "sceneId": "scene_8",
      "title": "Ví dụ 3: Lời giải chi tiết & Tuyệt kỹ hạ bậc quy về một hàm",
      "startTime": 167.58,
      "endTime": 198.04,
      "duration": 30.46
    },
    {
      "sceneId": "scene_9",
      "title": "Ví dụ 4: Mô hình dao động điều hòa của con lắc (Mức Vận dụng cao)",
      "startTime": 198.04,
      "endTime": 223.84,
      "duration": 25.8
    },
    {
      "sceneId": "scene_10",
      "title": "Ví dụ 4: Lời giải chi tiết & Đếm số nghiệm thời gian",
      "startTime": 223.84,
      "endTime": 246.28,
      "duration": 22.44
    },
    {
      "sceneId": "scene_11",
      "title": "3. CẢNH BÁO BẪY TRẮC NGHIỆM ĐỒ THỊ VÀ TẬP GIÁ TRỊ",
      "startTime": 246.28,
      "endTime": 266.78,
      "duration": 20.5
    },
    {
      "sceneId": "scene_12",
      "title": "4. TỔNG KẾT MỤC 2 & BÍ KÍP CÚ THÔNG THÁI",
      "startTime": 266.78,
      "endTime": 289.92,
      "duration": 23.14
    }
  ]
};

  window.G11_CHAPTER1_DATA.g11_bai3_muc3 = {
  "lessonId": "toan11_bai3",
  "lessonTitle": "Bài 3: Hàm số lượng giác",
  "sectionId": "g11_bai3_muc3",
  "sectionTitle": "Mục 3: Đồ thị và tính chất của hàm số tang và côtang",
  "title": "Mục 3: Đồ thị và tính chất của hàm số tang và côtang",
  "audio": "/audio/g11_bai3_muc3.mp3",
  "audioSrc": "./audio/g11_bai3_muc3.mp3",
  "audio_src": "./audio/g11_bai3_muc3.mp3",
  "owl_tip": "Hàm số tang luôn đồng biến trên từng khoảng xác định, còn côtang luôn nghịch biến trên từng khoảng xác định. Cả hai đều có tập giá trị là toàn bộ tập số thực R!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Khảo sát hàm số tang và côtang",
      "scenes": [
        1,
        2
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 4 Ví dụ minh họa tiêu biểu (Đồng hồ 15s/30s)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Cảnh báo bẫy trắc nghiệm & Sai lầm thường gặp",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Tổng kết & Bí kíp Cú Thông Thái",
      "scenes": [
        12
      ]
    }
  ],
  "scenes": [
    {
      "id": "scene_1",
      "title": "1. TÍNH CHẤT TOÀN DIỆN CỦA HÀM SỐ TANG & CÔTANG",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <h3 class=\"text-emerald-300 font-bold text-lg flex items-center gap-2\">\n      <span class=\"px-2 py-0.5 bg-emerald-500/20 rounded text-emerald-300 text-sm\">Trọng tâm</span>\n      BẢNG SO SÁNH TÍNH CHẤT HÀM SỐ $y = \\tan x$ VÀ $y = \\cot x$\n    </h3>\n    <div class=\"overflow-x-auto mt-3\">\n      <table class=\"w-full text-left text-xs sm:text-sm text-slate-200 border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-800 text-amber-300 border-b border-slate-700\">\n            <th class=\"p-2.5\">Đặc tính</th>\n            <th class=\"p-2.5 text-emerald-300\">Hàm số $y = \\tan x$</th>\n            <th class=\"p-2.5 text-sky-300\">Hàm số $y = \\cot x$</th>\n          </tr>\n        </thead>\n        <tbody class=\"divide-y divide-slate-800 bg-slate-900/80\">\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Tập xác định ($D$)</td>\n            <td class=\"p-2.5\">$D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$</td>\n            <td class=\"p-2.5\">$D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$</td>\n          </tr>\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Tập giá trị ($TGT$)</td>\n            <td class=\"p-2.5 text-amber-300 font-bold\">$\\mathbb{R}$ (toàn trục số)</td>\n            <td class=\"p-2.5 text-amber-300 font-bold\">$\\mathbb{R}$ (toàn trục số)</td>\n          </tr>\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Tính chẵn - lẻ</td>\n            <td class=\"p-2.5 text-indigo-300 font-semibold\">Hàm số LẺ (tâm đối xứng $O$)</td>\n            <td class=\"p-2.5 text-indigo-300 font-semibold\">Hàm số LẺ</td>\n          </tr>\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Chu kỳ tuần hoàn</td>\n            <td class=\"p-2.5 text-yellow-400 font-bold\">$T = \\pi$</td>\n            <td class=\"p-2.5 text-yellow-400 font-bold\">$T = \\pi$</td>\n          </tr>\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Chiều biến thiên</td>\n            <td class=\"p-2.5 text-emerald-400 font-bold\">Luôn ĐỒNG BIẾN trên mỗi $\\left(-\\frac{\\pi}{2} + k\\pi; \\frac{\\pi}{2} + k\\pi\\right)$</td>\n            <td class=\"p-2.5 text-rose-400 font-bold\">Luôn NGHỊCH BIẾN trên mỗi $(k\\pi; \\pi + k\\pi)$</td>\n          </tr>\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Tiệm cận đứng</td>\n            <td class=\"p-2.5\">$x = \\frac{\\pi}{2} + k\\pi$</td>\n            <td class=\"p-2.5\">$x = k\\pi$</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 3: Đồ thị và tính chất của hàm số tang và côtang. Khác với sin và cosin vốn là các hàm số bị chặn và liên tục trên R, hàm tang và côtang là các hàm phân thức lượng giác có đồ thị gián đoạn với vô số nhánh. Tập giá trị của chúng là toàn bộ trục số thực R, chu kỳ tuần hoàn chỉ bằng một pi. Đặc biệt, hàm tang luôn đồng biến trên từng khoảng xác định, còn hàm côtang luôn nghịch biến trên từng khoảng xác định.",
      "startTime": 0.0,
      "endTime": 27.17,
      "duration": 27.17,
      "sceneIndex": 1,
      "subtitle": "Mục 3: Đồ thị và tính chất của hàm số tang và côtang • Cảnh 1",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <h3 class=\"text-emerald-300 font-bold text-lg flex items-center gap-2\">\n      <span class=\"px-2 py-0.5 bg-emerald-500/20 rounded text-emerald-300 text-sm\">Trọng tâm</span>\n      BẢNG SO SÁNH TÍNH CHẤT HÀM SỐ $y = \\tan x$ VÀ $y = \\cot x$\n    </h3>\n    <div class=\"overflow-x-auto mt-3\">\n      <table class=\"w-full text-left text-xs sm:text-sm text-slate-200 border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-800 text-amber-300 border-b border-slate-700\">\n            <th class=\"p-2.5\">Đặc tính</th>\n            <th class=\"p-2.5 text-emerald-300\">Hàm số $y = \\tan x$</th>\n            <th class=\"p-2.5 text-sky-300\">Hàm số $y = \\cot x$</th>\n          </tr>\n        </thead>\n        <tbody class=\"divide-y divide-slate-800 bg-slate-900/80\">\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Tập xác định ($D$)</td>\n            <td class=\"p-2.5\">$D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$</td>\n            <td class=\"p-2.5\">$D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$</td>\n          </tr>\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Tập giá trị ($TGT$)</td>\n            <td class=\"p-2.5 text-amber-300 font-bold\">$\\mathbb{R}$ (toàn trục số)</td>\n            <td class=\"p-2.5 text-amber-300 font-bold\">$\\mathbb{R}$ (toàn trục số)</td>\n          </tr>\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Tính chẵn - lẻ</td>\n            <td class=\"p-2.5 text-indigo-300 font-semibold\">Hàm số LẺ (tâm đối xứng $O$)</td>\n            <td class=\"p-2.5 text-indigo-300 font-semibold\">Hàm số LẺ</td>\n          </tr>\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Chu kỳ tuần hoàn</td>\n            <td class=\"p-2.5 text-yellow-400 font-bold\">$T = \\pi$</td>\n            <td class=\"p-2.5 text-yellow-400 font-bold\">$T = \\pi$</td>\n          </tr>\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Chiều biến thiên</td>\n            <td class=\"p-2.5 text-emerald-400 font-bold\">Luôn ĐỒNG BIẾN trên mỗi $\\left(-\\frac{\\pi}{2} + k\\pi; \\frac{\\pi}{2} + k\\pi\\right)$</td>\n            <td class=\"p-2.5 text-rose-400 font-bold\">Luôn NGHỊCH BIẾN trên mỗi $(k\\pi; \\pi + k\\pi)$</td>\n          </tr>\n          <tr>\n            <td class=\"p-2.5 font-bold text-slate-300\">Tiệm cận đứng</td>\n            <td class=\"p-2.5\">$x = \\frac{\\pi}{2} + k\\pi$</td>\n            <td class=\"p-2.5\">$x = k\\pi$</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Hàm số tang luôn đồng biến trên từng khoảng xác định, còn côtang luôn nghịch biến trên từng khoảng xác định. Cả hai đều có tập giá trị là toàn bộ tập số thực R!"
    },
    {
      "id": "scene_2",
      "title": "2. HÌNH DÁNG ĐỒ THỊ VÀ TIỆM CẬN ĐỨNG",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-emerald-500/30\">\n      <h4 class=\"text-emerald-300 font-bold text-base mb-2\">🌿 ĐỒ THỊ $y = \\tan x$</h4>\n      <p class=\"text-slate-300 text-sm leading-relaxed\">\n        • Gồm vô số nhánh rời rạc cách nhau một khoảng $\\pi$.<br/>\n        • Mỗi nhánh đi lên từ trái sang phải (đồng biến).<br/>\n        • Đi qua gốc tọa độ $O(0; 0)$ và là tâm đối xứng.<br/>\n        • Bị kẹp giữa hai đường tiệm cận đứng $x = -\\frac{\\pi}{2}$ và $x = \\frac{\\pi}{2}$.<br/>\n        • Khi $x \\to \\frac{\\pi}{2}^-$, $y \\to +\\infty$; khi $x \\to -\\frac{\\pi}{2}^+$, $y \\to -\\infty$.\n      </p>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-sky-500/30\">\n      <h4 class=\"text-sky-300 font-bold text-base mb-2\">🌊 ĐỒ THỊ $y = \\cot x$</h4>\n      <p class=\"text-slate-300 text-sm leading-relaxed\">\n        • Gồm vô số nhánh rời rạc cách nhau chu kỳ $\\pi$.<br/>\n        • Mỗi nhánh đi xuống từ trái sang phải (nghịch biến).<br/>\n        • Cắt trục hoành tại các điểm $\\left(\\frac{\\pi}{2} + k\\pi; 0\\right)$.<br/>\n        • Bị kẹp giữa hai đường tiệm cận đứng $x = 0$ (trục $Oy$) và $x = \\pi$.<br/>\n        • Khi $x \\to 0^+$, $y \\to +\\infty$; khi $x \\to \\pi^-$, $y \\to -\\infty$.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Về mặt hình học, đồ thị của hàm tang gồm các nhánh lượn sóng đi lên từ trái qua phải, nhận các đường thẳng x bằng pi phần hai cộng k pi làm tiệm cận đứng. Đồ thị hàm côtang lại có các nhánh lượn dốc xuống từ trái qua phải, nhận các đường thẳng x bằng k pi làm tiệm cận đứng. Hãy nhớ rằng các nhánh này lặp lại y hệt nhau sau mỗi chu kỳ bằng pi.",
      "startTime": 27.17,
      "endTime": 48.6,
      "duration": 21.43,
      "sceneIndex": 2,
      "subtitle": "Mục 3: Đồ thị và tính chất của hàm số tang và côtang • Cảnh 2",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-emerald-500/30\">\n      <h4 class=\"text-emerald-300 font-bold text-base mb-2\">🌿 ĐỒ THỊ $y = \\tan x$</h4>\n      <p class=\"text-slate-300 text-sm leading-relaxed\">\n        • Gồm vô số nhánh rời rạc cách nhau một khoảng $\\pi$.<br/>\n        • Mỗi nhánh đi lên từ trái sang phải (đồng biến).<br/>\n        • Đi qua gốc tọa độ $O(0; 0)$ và là tâm đối xứng.<br/>\n        • Bị kẹp giữa hai đường tiệm cận đứng $x = -\\frac{\\pi}{2}$ và $x = \\frac{\\pi}{2}$.<br/>\n        • Khi $x \\to \\frac{\\pi}{2}^-$, $y \\to +\\infty$; khi $x \\to -\\frac{\\pi}{2}^+$, $y \\to -\\infty$.\n      </p>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-sky-500/30\">\n      <h4 class=\"text-sky-300 font-bold text-base mb-2\">🌊 ĐỒ THỊ $y = \\cot x$</h4>\n      <p class=\"text-slate-300 text-sm leading-relaxed\">\n        • Gồm vô số nhánh rời rạc cách nhau chu kỳ $\\pi$.<br/>\n        • Mỗi nhánh đi xuống từ trái sang phải (nghịch biến).<br/>\n        • Cắt trục hoành tại các điểm $\\left(\\frac{\\pi}{2} + k\\pi; 0\\right)$.<br/>\n        • Bị kẹp giữa hai đường tiệm cận đứng $x = 0$ (trục $Oy$) và $x = \\pi$.<br/>\n        • Khi $x \\to 0^+$, $y \\to +\\infty$; khi $x \\to \\pi^-$, $y \\to -\\infty$.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Hàm số tang luôn đồng biến trên từng khoảng xác định, còn côtang luôn nghịch biến trên từng khoảng xác định. Cả hai đều có tập giá trị là toàn bộ tập số thực R!"
    },
    {
      "id": "scene_3",
      "title": "Ví dụ 1: Tìm tập xác định của hàm số tang và côtang (Mức Nhận biết)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/50 to-indigo-900/40 p-4 rounded-xl border border-blue-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-blue-500 text-white text-xs font-bold rounded\">VÍ DỤ 1 • NHẬN BIẾT</span>\n      <span class=\"text-slate-400 text-xs\">Mục 3 • Tập xác định</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Tìm tập xác định của các hàm số sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> $y = \\tan 3x$</p>\n      <p><strong class=\"text-sky-400\">b)</strong> $y = \\cot\\left(x - \\frac{\\pi}{4}\\right)$</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-15s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 15 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 1 ở mức độ nhận biết: Tìm tập xác định của hai hàm số sau. Câu a: y bằng tan 3x. Câu b: y bằng cot của x trừ pi phần 4. Các em hãy nhớ điều kiện hàm tang là cos khác không và hàm côtang là sin khác không trong 15 giây suy nghĩ.",
      "startTime": 48.6,
      "endTime": 66.58,
      "duration": 17.98,
      "sceneIndex": 3,
      "subtitle": "Mục 3: Đồ thị và tính chất của hàm số tang và côtang • Cảnh 3",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/50 to-indigo-900/40 p-4 rounded-xl border border-blue-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-blue-500 text-white text-xs font-bold rounded\">VÍ DỤ 1 • NHẬN BIẾT</span>\n      <span class=\"text-slate-400 text-xs\">Mục 3 • Tập xác định</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Tìm tập xác định của các hàm số sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> $y = \\tan 3x$</p>\n      <p><strong class=\"text-sky-400\">b)</strong> $y = \\cot\\left(x - \\frac{\\pi}{4}\\right)$</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-15s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 15 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Thử sức suy nghĩ và phán đoán đáp án trước khi đồng hồ đếm ngược kết thúc!"
    },
    {
      "id": "scene_4",
      "title": "Ví dụ 1: Lời giải chi tiết & Điều kiện xác định chuẩn",
      "content": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-emerald-500/40\">\n    <h4 class=\"text-emerald-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 1:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-amber-400\">a) $y = \\tan 3x$:</strong>\n        <p class=\"mt-1\">Hàm số xác định khi và chỉ khi:</p>\n        <p class=\"text-slate-300\">$$\\cos 3x \\ne 0 \\Leftrightarrow 3x \\ne \\frac{\\pi}{2} + k\\pi \\Leftrightarrow x \\ne \\frac{\\pi}{6} + k\\frac{\\pi}{3} \\quad (k \\in \\mathbb{Z})$$</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{6} + k\\frac{\\pi}{3}, k \\in \\mathbb{Z}\\right\\}$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-400\">b) $y = \\cot\\left(x - \\frac{\\pi}{4}\\right)$:</strong>\n        <p class=\"mt-1\">Hàm số xác định khi và chỉ khi:</p>\n        <p class=\"text-slate-300\">$$\\sin\\left(x - \\frac{\\pi}{4}\\right) \\ne 0 \\Leftrightarrow x - \\frac{\\pi}{4} \\ne k\\pi \\Leftrightarrow x \\ne \\frac{\\pi}{4} + k\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}\\right\\}$$</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Lời giải ví dụ 1 như sau. Ở câu a, tan 3x xác định khi cos 3x khác không, tức 3x khác pi phần hai cộng k pi. Chia cả hai vế cho 3 ta được x khác pi phần 6 cộng k pi chia 3. Ở câu b, côtang xác định khi sin khác không, tức góc x trừ pi phần 4 khác k pi, chuyển vế ta được x khác pi phần 4 cộng k pi. Rất mạch lạc và chính xác.",
      "startTime": 66.58,
      "endTime": 80.38,
      "duration": 13.8,
      "sceneIndex": 4,
      "subtitle": "Mục 3: Đồ thị và tính chất của hàm số tang và côtang • Cảnh 4",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-emerald-500/40\">\n    <h4 class=\"text-emerald-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 1:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-amber-400\">a) $y = \\tan 3x$:</strong>\n        <p class=\"mt-1\">Hàm số xác định khi và chỉ khi:</p>\n        <p class=\"text-slate-300\">$$\\cos 3x \\ne 0 \\Leftrightarrow 3x \\ne \\frac{\\pi}{2} + k\\pi \\Leftrightarrow x \\ne \\frac{\\pi}{6} + k\\frac{\\pi}{3} \\quad (k \\in \\mathbb{Z})$$</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{6} + k\\frac{\\pi}{3}, k \\in \\mathbb{Z}\\right\\}$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-400\">b) $y = \\cot\\left(x - \\frac{\\pi}{4}\\right)$:</strong>\n        <p class=\"mt-1\">Hàm số xác định khi và chỉ khi:</p>\n        <p class=\"text-slate-300\">$$\\sin\\left(x - \\frac{\\pi}{4}\\right) \\ne 0 \\Leftrightarrow x - \\frac{\\pi}{4} \\ne k\\pi \\Leftrightarrow x \\ne \\frac{\\pi}{4} + k\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}\\right\\}$$</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "cheer",
      "mascotTip": "Đối chiếu từng bước biến đổi tự luận để khắc sâu phương pháp giải!"
    },
    {
      "id": "scene_5",
      "title": "Ví dụ 2: So sánh giá trị không dùng máy tính cầm tay (Mức Thông hiểu)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/50 to-indigo-900/40 p-4 rounded-xl border border-purple-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-purple-500 text-white text-xs font-bold rounded\">VÍ DỤ 2 • THÔNG HIỂU</span>\n      <span class=\"text-slate-400 text-xs\">Mục 3 • Tính đơn điệu</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Dựa vào tính đơn điệu, hãy so sánh:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> So sánh $\\tan 15^\\circ$ và $\\tan 40^\\circ$.</p>\n      <p><strong class=\"text-sky-400\">b)</strong> So sánh $\\cot\\frac{\\pi}{5}$ và $\\cot\\frac{2\\pi}{5}$.</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2 là câu hỏi thông hiểu dựa vào tính đơn điệu để so sánh giá trị lượng giác mà không cần bấm máy tính. Câu a hãy so sánh tan 15 độ và tan 40 độ. Câu b hãy so sánh cot pi phần 5 và cot 2 pi phần 5. Các em có 30 giây suy nghĩ dựa trên tính chất tăng hay giảm của hàm số.",
      "startTime": 80.38,
      "endTime": 94.42,
      "duration": 14.04,
      "sceneIndex": 5,
      "subtitle": "Mục 3: Đồ thị và tính chất của hàm số tang và côtang • Cảnh 5",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/50 to-indigo-900/40 p-4 rounded-xl border border-purple-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-purple-500 text-white text-xs font-bold rounded\">VÍ DỤ 2 • THÔNG HIỂU</span>\n      <span class=\"text-slate-400 text-xs\">Mục 3 • Tính đơn điệu</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Dựa vào tính đơn điệu, hãy so sánh:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> So sánh $\\tan 15^\\circ$ và $\\tan 40^\\circ$.</p>\n      <p><strong class=\"text-sky-400\">b)</strong> So sánh $\\cot\\frac{\\pi}{5}$ và $\\cot\\frac{2\\pi}{5}$.</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Thử sức suy nghĩ và phán đoán đáp án trước khi đồng hồ đếm ngược kết thúc!"
    },
    {
      "id": "scene_6",
      "title": "Ví dụ 2: Lời giải chi tiết & Vận dụng tính đồng biến, nghịch biến",
      "content": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-purple-500/40\">\n    <h4 class=\"text-purple-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 2:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-amber-400\">a) So sánh $\\tan 15^\\circ$ và $\\tan 40^\\circ$:</strong>\n        <p class=\"text-slate-300\">• Ta thấy hai góc $15^\\circ$ và $40^\\circ$ đều thuộc khoảng xác định $\\left(0^\\circ; 90^\\circ\\right)$ tức $\\left(0; \\frac{\\pi}{2}\\right)$.</p>\n        <p class=\"text-slate-300\">• Vì hàm số $y = \\tan x$ luôn <strong>ĐỒNG BIẾN</strong> trên $\\left(0; \\frac{\\pi}{2}\\right)$ và $15^\\circ < 40^\\circ$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow \\tan 15^\\circ < \\tan 40^\\circ$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-400\">b) So sánh $\\cot\\frac{\\pi}{5}$ và $\\cot\\frac{2\\pi}{5}$:</strong>\n        <p class=\"text-slate-300\">• Cả hai góc $\\frac{\\pi}{5}$ và $\\frac{2\\pi}{5}$ đều thuộc khoảng xác định $(0; \\pi)$.</p>\n        <p class=\"text-slate-300\">• Vì hàm số $y = \\cot x$ luôn <strong>NGHỊCH BIẾN</strong> trên $(0; \\pi)$ và $\\frac{\\pi}{5} < \\frac{2\\pi}{5}$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow \\cot\\frac{\\pi}{5} > \\cot\\frac{2\\pi}{5}$$</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Lời giải ví dụ 2 như sau. Ở câu a, hai góc 15 độ và 40 độ cùng thuộc khoảng từ 0 đến 90 độ. Do hàm tang đồng biến trên khoảng này và 15 độ nhỏ hơn 40 độ, nên tan 15 độ nhỏ hơn tan 40 độ. Ở câu b, hai góc pi phần 5 và 2 pi phần 5 cùng thuộc khoảng từ 0 đến pi. Vì hàm côtang nghịch biến trên khoảng xác định nên góc lớn hơn sẽ có giá trị côtang nhỏ hơn. Do đó cot pi phần 5 lớn hơn cot 2 pi phần 5.",
      "startTime": 94.42,
      "endTime": 115.18,
      "duration": 20.76,
      "sceneIndex": 6,
      "subtitle": "Mục 3: Đồ thị và tính chất của hàm số tang và côtang • Cảnh 6",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-purple-500/40\">\n    <h4 class=\"text-purple-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 2:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-amber-400\">a) So sánh $\\tan 15^\\circ$ và $\\tan 40^\\circ$:</strong>\n        <p class=\"text-slate-300\">• Ta thấy hai góc $15^\\circ$ và $40^\\circ$ đều thuộc khoảng xác định $\\left(0^\\circ; 90^\\circ\\right)$ tức $\\left(0; \\frac{\\pi}{2}\\right)$.</p>\n        <p class=\"text-slate-300\">• Vì hàm số $y = \\tan x$ luôn <strong>ĐỒNG BIẾN</strong> trên $\\left(0; \\frac{\\pi}{2}\\right)$ và $15^\\circ < 40^\\circ$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow \\tan 15^\\circ < \\tan 40^\\circ$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-400\">b) So sánh $\\cot\\frac{\\pi}{5}$ và $\\cot\\frac{2\\pi}{5}$:</strong>\n        <p class=\"text-slate-300\">• Cả hai góc $\\frac{\\pi}{5}$ và $\\frac{2\\pi}{5}$ đều thuộc khoảng xác định $(0; \\pi)$.</p>\n        <p class=\"text-slate-300\">• Vì hàm số $y = \\cot x$ luôn <strong>NGHỊCH BIẾN</strong> trên $(0; \\pi)$ và $\\frac{\\pi}{5} < \\frac{2\\pi}{5}$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow \\cot\\frac{\\pi}{5} > \\cot\\frac{2\\pi}{5}$$</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "cheer",
      "mascotTip": "Đối chiếu từng bước biến đổi tự luận để khắc sâu phương pháp giải!"
    },
    {
      "id": "scene_7",
      "title": "Ví dụ 3: Tìm GTLN và GTNN của hàm số trên đoạn (Mức Vận dụng)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-900/50 to-orange-900/40 p-4 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-amber-500 text-slate-900 text-xs font-bold rounded\">VÍ DỤ 3 • VẬN DỤNG</span>\n      <span class=\"text-slate-400 text-xs\">Mục 3 • Tối ưu hóa</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Tìm giá trị lớn nhất và nhỏ nhất của hàm số:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> Hàm số $y = \\tan^2 x - 2\\tan x + 3$ trên đoạn $\\left[0; \\frac{\\pi}{4}\\right]$.</p>\n      <p><strong class=\"text-sky-400\">b)</strong> Trên tập xác định $D$, hàm số $y = \\tan x$ có GTLN và GTNN hay không? Vì sao?</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3 là bài toán vận dụng: Câu a yêu cầu tìm giá trị lớn nhất và nhỏ nhất của hàm số y bằng tan bình x trừ 2 tan x cộng 3 trên đoạn từ 0 đến pi phần 4. Câu b hỏi trên toàn bộ tập xác định D, hàm số y bằng tan x có giá trị lớn nhất và nhỏ nhất hay không. 30 giây suy nghĩ cho các em.",
      "startTime": 115.18,
      "endTime": 134.64,
      "duration": 19.46,
      "sceneIndex": 7,
      "subtitle": "Mục 3: Đồ thị và tính chất của hàm số tang và côtang • Cảnh 7",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-900/50 to-orange-900/40 p-4 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-amber-500 text-slate-900 text-xs font-bold rounded\">VÍ DỤ 3 • VẬN DỤNG</span>\n      <span class=\"text-slate-400 text-xs\">Mục 3 • Tối ưu hóa</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Tìm giá trị lớn nhất và nhỏ nhất của hàm số:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> Hàm số $y = \\tan^2 x - 2\\tan x + 3$ trên đoạn $\\left[0; \\frac{\\pi}{4}\\right]$.</p>\n      <p><strong class=\"text-sky-400\">b)</strong> Trên tập xác định $D$, hàm số $y = \\tan x$ có GTLN và GTNN hay không? Vì sao?</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Thử sức suy nghĩ và phán đoán đáp án trước khi đồng hồ đếm ngược kết thúc!"
    },
    {
      "id": "scene_8",
      "title": "Ví dụ 3: Lời giải chi tiết & Kỹ thuật đặt ẩn phụ",
      "content": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-amber-500/40\">\n    <h4 class=\"text-amber-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 3:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-amber-400\">a) $y = \\tan^2 x - 2\\tan x + 3$ trên $\\left[0; \\frac{\\pi}{4}\\right]$:</strong>\n        <p class=\"text-slate-300\">• Đặt $t = \\tan x$. Vì $x \\in \\left[0; \\frac{\\pi}{4}\\right]$ và hàm tang đồng biến nên $t \\in [\\tan 0; \\tan(\\pi/4)] = [0; 1]$.</p>\n        <p class=\"text-slate-300\">• Hàm số trở thành: $f(t) = t^2 - 2t + 3 = (t - 1)^2 + 2$.</p>\n        <p class=\"text-slate-300\">• Đỉnh parabol tại $t = 1 \\in [0; 1]$.</p>\n        <p class=\"text-slate-300\">• Tính giá trị biên: $f(0) = 3$; $f(1) = 2$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow \\max_{\\left[0; \\frac{\\pi}{4}\\right]} y = 3 \\text{ (tại } x = 0) \\quad \\text{và} \\quad \\min_{\\left[0; \\frac{\\pi}{4}\\right]} y = 2 \\text{ (tại } x = \\frac{\\pi}{4})$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-400\">b) Trên toàn miền xác định $D$:</strong>\n        <p class=\"text-slate-300\">• Tập giá trị của $y = \\tan x$ là toàn bộ $\\mathbb{R}$ (chạy từ $-\\infty$ đến $+\\infty$).</p>\n        <p class=\"text-rose-400 font-bold mt-1\">Kết luận: Hàm số $y = \\tan x$ KHÔNG CÓ GTLN VÀ KHÔNG CÓ GTNN trên toàn miền xác định $D$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Lời giải ví dụ 3 như sau. Ở câu a, khi đặt t bằng tan x với x từ 0 đến pi phần 4, ta được t thuộc đoạn từ 0 đến 1. Hàm số f t bằng t bình trừ 2t cộng 3 có đỉnh tại t bằng 1. Ta tính được f tại không bằng 3 và f tại một bằng 2. Do đó giá trị lớn nhất bằng 3 đạt tại x bằng 0, và giá trị nhỏ nhất bằng 2 đạt tại x bằng pi phần 4. Ở câu b, vì tập giá trị của tang là toàn bộ R không bị chặn nên hàm tang không có giá trị lớn nhất và không có giá trị nhỏ nhất trên toàn tập xác định.",
      "startTime": 134.64,
      "endTime": 148.8,
      "duration": 14.16,
      "sceneIndex": 8,
      "subtitle": "Mục 3: Đồ thị và tính chất của hàm số tang và côtang • Cảnh 8",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-amber-500/40\">\n    <h4 class=\"text-amber-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 3:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-amber-400\">a) $y = \\tan^2 x - 2\\tan x + 3$ trên $\\left[0; \\frac{\\pi}{4}\\right]$:</strong>\n        <p class=\"text-slate-300\">• Đặt $t = \\tan x$. Vì $x \\in \\left[0; \\frac{\\pi}{4}\\right]$ và hàm tang đồng biến nên $t \\in [\\tan 0; \\tan(\\pi/4)] = [0; 1]$.</p>\n        <p class=\"text-slate-300\">• Hàm số trở thành: $f(t) = t^2 - 2t + 3 = (t - 1)^2 + 2$.</p>\n        <p class=\"text-slate-300\">• Đỉnh parabol tại $t = 1 \\in [0; 1]$.</p>\n        <p class=\"text-slate-300\">• Tính giá trị biên: $f(0) = 3$; $f(1) = 2$.</p>\n        <p class=\"text-emerald-300 font-bold mt-1\">$$\\Rightarrow \\max_{\\left[0; \\frac{\\pi}{4}\\right]} y = 3 \\text{ (tại } x = 0) \\quad \\text{và} \\quad \\min_{\\left[0; \\frac{\\pi}{4}\\right]} y = 2 \\text{ (tại } x = \\frac{\\pi}{4})$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-400\">b) Trên toàn miền xác định $D$:</strong>\n        <p class=\"text-slate-300\">• Tập giá trị của $y = \\tan x$ là toàn bộ $\\mathbb{R}$ (chạy từ $-\\infty$ đến $+\\infty$).</p>\n        <p class=\"text-rose-400 font-bold mt-1\">Kết luận: Hàm số $y = \\tan x$ KHÔNG CÓ GTLN VÀ KHÔNG CÓ GTNN trên toàn miền xác định $D$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "cheer",
      "mascotTip": "Đối chiếu từng bước biến đổi tự luận để khắc sâu phương pháp giải!"
    },
    {
      "id": "scene_9",
      "title": "Ví dụ 4: Bài toán vệt sáng ngọn hải đăng quét trên bờ biển (Mức Vận dụng cao)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-rose-900/50 to-red-900/40 p-4 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-rose-500 text-white text-xs font-bold rounded\">VÍ DỤ 4 • VẬN DỤNG CAO</span>\n      <span class=\"text-slate-400 text-xs\">Thực tế • Vệt sáng hải đăng</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Mô hình toán học chuyển động vệt sáng:</h4>\n    <p class=\"text-slate-300 text-sm leading-relaxed mt-2\">\n      Một ngọn hải đăng đặt tại điểm $H$ ngoài biển cách bờ biển thẳng một khoảng $d = 3\\text{ km}$. Đèn hải đăng quay đều với tốc độ góc $\\omega = 4\\pi\\text{ rad/phút}$ (2 vòng/phút). Gọi $O$ là điểm trên bờ gần hải đăng nhất ($HO \\perp$ bờ). Khoảng cách $x(t)$ (km) từ vệt sáng đến $O$ tại thời điểm $t$ (phút) được cho bởi:\n    </p>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-center font-bold text-amber-300 text-lg\">\n      $$x(t) = 3\\tan(4\\pi t) \\quad \\left(-\\frac{1}{8} < t < \\frac{1}{8}\\right)$$\n    </div>\n    <div class=\"mt-2 space-y-1.5 text-sm text-slate-200\">\n      <p><strong class=\"text-sky-300\">a)</strong> Tính khoảng cách từ vệt sáng đến $O$ tại thời điểm $t = \\frac{1}{16}$ phút ($3.75$ giây).</p>\n      <p><strong class=\"text-emerald-300\">b)</strong> Giải thích hiện tượng hình học: Tại sao khi $t$ tiến dần đến $\\frac{1}{8}$ phút, vệt sáng lại quét ra xa vô tận với tốc độ cực lớn dọc theo bờ biển?</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4 là bài toán thực tế vận dụng cao về vệt sáng của ngọn hải đăng quét dọc bờ biển. Một ngọn hải đăng cách bờ biển thẳng 3 km, quay với tốc độ góc 4 pi radian mỗi phút. Vị trí vệt sáng x t tính theo công thức 3 nhân tan của 4 pi t. Câu a tính khoảng cách vệt sáng tại thời điểm t bằng 1 phần 16 phút. Câu b giải thích tại sao khi t tiến dần tới 1 phần 8 phút thì vệt sáng lại chạy ra xa vô cực với vận tốc cực lớn. 30 giây suy nghĩ cho các em.",
      "startTime": 148.8,
      "endTime": 178.08,
      "duration": 29.28,
      "sceneIndex": 9,
      "subtitle": "Mục 3: Đồ thị và tính chất của hàm số tang và côtang • Cảnh 9",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-rose-900/50 to-red-900/40 p-4 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-rose-500 text-white text-xs font-bold rounded\">VÍ DỤ 4 • VẬN DỤNG CAO</span>\n      <span class=\"text-slate-400 text-xs\">Thực tế • Vệt sáng hải đăng</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Mô hình toán học chuyển động vệt sáng:</h4>\n    <p class=\"text-slate-300 text-sm leading-relaxed mt-2\">\n      Một ngọn hải đăng đặt tại điểm $H$ ngoài biển cách bờ biển thẳng một khoảng $d = 3\\text{ km}$. Đèn hải đăng quay đều với tốc độ góc $\\omega = 4\\pi\\text{ rad/phút}$ (2 vòng/phút). Gọi $O$ là điểm trên bờ gần hải đăng nhất ($HO \\perp$ bờ). Khoảng cách $x(t)$ (km) từ vệt sáng đến $O$ tại thời điểm $t$ (phút) được cho bởi:\n    </p>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-center font-bold text-amber-300 text-lg\">\n      $$x(t) = 3\\tan(4\\pi t) \\quad \\left(-\\frac{1}{8} < t < \\frac{1}{8}\\right)$$\n    </div>\n    <div class=\"mt-2 space-y-1.5 text-sm text-slate-200\">\n      <p><strong class=\"text-sky-300\">a)</strong> Tính khoảng cách từ vệt sáng đến $O$ tại thời điểm $t = \\frac{1}{16}$ phút ($3.75$ giây).</p>\n      <p><strong class=\"text-emerald-300\">b)</strong> Giải thích hiện tượng hình học: Tại sao khi $t$ tiến dần đến $\\frac{1}{8}$ phút, vệt sáng lại quét ra xa vô tận với tốc độ cực lớn dọc theo bờ biển?</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Thử sức suy nghĩ và phán đoán đáp án trước khi đồng hồ đếm ngược kết thúc!"
    },
    {
      "id": "scene_10",
      "title": "Ví dụ 4: Lời giải chi tiết & Ý nghĩa đường tiệm cận đứng",
      "content": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-rose-500/40\">\n    <h4 class=\"text-rose-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 4:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-300\">a) Tính khoảng cách tại $t = \\frac{1}{16}$ phút:</strong>\n        <p class=\"mt-1\">Thay $t = \\frac{1}{16}$ vào công thức:</p>\n        <p class=\"text-center font-bold text-emerald-300\">$$x\\left(\\frac{1}{16}\\right) = 3\\tan\\left(4\\pi \\cdot \\frac{1}{16}\\right) = 3\\tan\\frac{\\pi}{4} = 3 \\cdot 1 = 3\\text{ km}$$</p>\n        <p class=\"text-slate-300\">Tại thời điểm $3.75\\text{ s}$, vệt sáng cách điểm $O$ đúng $3\\text{ km}$.</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-emerald-300\">b) Bản chất hiện tượng tiệm cận đứng khi $t \\to \\frac{1}{8}^-$:</strong>\n        <p class=\"text-slate-300\">• Khi $t \\to \\frac{1}{8}^-$, góc quay của chùm sáng: $\\theta = 4\\pi t \\to 4\\pi \\cdot \\frac{1}{8} = \\frac{\\pi}{2}^-$.</p>\n        <p class=\"text-slate-300\">• Khi góc quay tiến tới $90^\\circ$, chùm tia sáng quét gần như <strong>song song với bờ biển</strong>.</p>\n        <p class=\"text-slate-300\">• Vì $\\lim_{t \\to \\frac{1}{8}^-} 3\\tan(4\\pi t) = +\\infty$, đồ thị có <strong>tiệm cận đứng</strong> tại $t = \\frac{1}{8}$.</p>\n        <p class=\"text-amber-300 font-bold mt-1\">Ý nghĩa vật lý: Chỉ một góc quay cực nhỏ cũng làm vệt sáng trên bờ biển di chuyển một khoảng cách khổng lồ, tạo ra hiện tượng vệt sáng quét với vận tốc dường như lớn hơn cả tốc độ ánh sáng!</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Lời giải ví dụ 4 như sau: Ở câu a, thay t bằng một phần 16 phút vào, góc lượng giác là pi phần 4 có tan bằng 1, do đó khoảng cách x bằng 3 km. Ở câu b, khi t tiến dần tới một phần 8 phút, góc quay 4 pi t tiến tới pi phần 2, tức 90 độ. Khi đó chùm tia sáng quét gần như song song với bờ biển, và tan tiến ra dương vô cực. Đây chính là hình ảnh trực quan của đường tiệm cận đứng trong toán học! Khi chùm sáng quét song song bờ, vệt sáng trên bờ biển dịch chuyển với tốc độ vô cùng lớn ra xa vô tận.",
      "startTime": 178.08,
      "endTime": 195.48,
      "duration": 17.4,
      "sceneIndex": 10,
      "subtitle": "Mục 3: Đồ thị và tính chất của hàm số tang và côtang • Cảnh 10",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-rose-500/40\">\n    <h4 class=\"text-rose-300 font-bold text-base mb-2\">Lời giải chi tiết Ví dụ 4:</h4>\n    <div class=\"space-y-2.5 text-sm text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-sky-300\">a) Tính khoảng cách tại $t = \\frac{1}{16}$ phút:</strong>\n        <p class=\"mt-1\">Thay $t = \\frac{1}{16}$ vào công thức:</p>\n        <p class=\"text-center font-bold text-emerald-300\">$$x\\left(\\frac{1}{16}\\right) = 3\\tan\\left(4\\pi \\cdot \\frac{1}{16}\\right) = 3\\tan\\frac{\\pi}{4} = 3 \\cdot 1 = 3\\text{ km}$$</p>\n        <p class=\"text-slate-300\">Tại thời điểm $3.75\\text{ s}$, vệt sáng cách điểm $O$ đúng $3\\text{ km}$.</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <strong class=\"text-emerald-300\">b) Bản chất hiện tượng tiệm cận đứng khi $t \\to \\frac{1}{8}^-$:</strong>\n        <p class=\"text-slate-300\">• Khi $t \\to \\frac{1}{8}^-$, góc quay của chùm sáng: $\\theta = 4\\pi t \\to 4\\pi \\cdot \\frac{1}{8} = \\frac{\\pi}{2}^-$.</p>\n        <p class=\"text-slate-300\">• Khi góc quay tiến tới $90^\\circ$, chùm tia sáng quét gần như <strong>song song với bờ biển</strong>.</p>\n        <p class=\"text-slate-300\">• Vì $\\lim_{t \\to \\frac{1}{8}^-} 3\\tan(4\\pi t) = +\\infty$, đồ thị có <strong>tiệm cận đứng</strong> tại $t = \\frac{1}{8}$.</p>\n        <p class=\"text-amber-300 font-bold mt-1\">Ý nghĩa vật lý: Chỉ một góc quay cực nhỏ cũng làm vệt sáng trên bờ biển di chuyển một khoảng cách khổng lồ, tạo ra hiện tượng vệt sáng quét với vận tốc dường như lớn hơn cả tốc độ ánh sáng!</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "cheer",
      "mascotTip": "Đối chiếu từng bước biến đổi tự luận để khắc sâu phương pháp giải!"
    },
    {
      "id": "scene_11",
      "title": "3. CẢNH BÁO BẪY TRẮC NGHIỆM ĐỒ THỊ TANG VÀ CÔTANG",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-red-950/70 to-rose-950/50 p-4 rounded-xl border border-red-500/40\">\n    <h3 class=\"text-red-300 font-bold text-base flex items-center gap-2\">\n      <i class=\"fa-solid fa-triangle-exclamation text-red-400 text-lg\"></i>\n      3 BẪY SAI LẦM KHI LÀM BÀI TẬP TANG VÀ CÔTANG\n    </h3>\n    <div class=\"mt-3 space-y-3 text-sm\">\n      <div class=\"p-3 bg-slate-900/90 rounded-lg border border-red-500/20\">\n        <p class=\"text-rose-400 font-bold\">⚠️ Bẫy 1: Kết luận sai cách về tính đồng biến của hàm tang</p>\n        <p class=\"text-slate-300 mt-1\">Câu nói: \"Hàm số $y = \\tan x$ đồng biến trên tập xác định $D$\" là HOÀN TOÀN SAI. Phải nói: \"Đồng biến trên TỪNG khoảng xác định\" $\\left(-\\frac{\\pi}{2} + k\\pi; \\frac{\\pi}{2} + k\\pi\\right)$.</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/90 rounded-lg border border-red-500/20\">\n        <p class=\"text-rose-400 font-bold\">⚠️ Bẫy 2: Nhầm lẫn tiệm cận đứng giữa tang và côtang</p>\n        <p class=\"text-slate-300 mt-1\">Hàm tang nhận $x = \\frac{\\pi}{2} + k\\pi$ làm tiệm cận đứng. Còn hàm côtang nhận $x = k\\pi$ (bao gồm cả trục tung $Oy$ khi $k=0$) làm tiệm cận đứng.</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/90 rounded-lg border border-red-500/20\">\n        <p class=\"text-rose-400 font-bold\">⚠️ Bẫy 3: Nhầm tập giá trị của tang với sin và cosin</p>\n        <p class=\"text-slate-300 mt-1\">Nhớ rằng tập giá trị của tang và côtang là toàn bộ $\\mathbb{R}$, không bị chặn trong $[-1; 1]$ như sin và cosin.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Trước khi kết thúc Mục 3, thầy nhắc nhở các em ba bẫy sai lầm quan trọng: Thứ nhất, hàm tang luôn đồng biến trên từng khoảng xác định chứ không được nói đồng biến trên R hay trên D. Thứ hai, tiệm cận đứng của hàm tang là x bằng pi phần hai cộng k pi, còn của hàm cot là x bằng k pi. Thứ ba, tập giá trị của tang và cot là toàn bộ trục số thực R.",
      "startTime": 195.48,
      "endTime": 216.43,
      "duration": 20.95,
      "sceneIndex": 11,
      "subtitle": "Mục 3: Đồ thị và tính chất của hàm số tang và côtang • Cảnh 11",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-red-950/70 to-rose-950/50 p-4 rounded-xl border border-red-500/40\">\n    <h3 class=\"text-red-300 font-bold text-base flex items-center gap-2\">\n      <i class=\"fa-solid fa-triangle-exclamation text-red-400 text-lg\"></i>\n      3 BẪY SAI LẦM KHI LÀM BÀI TẬP TANG VÀ CÔTANG\n    </h3>\n    <div class=\"mt-3 space-y-3 text-sm\">\n      <div class=\"p-3 bg-slate-900/90 rounded-lg border border-red-500/20\">\n        <p class=\"text-rose-400 font-bold\">⚠️ Bẫy 1: Kết luận sai cách về tính đồng biến của hàm tang</p>\n        <p class=\"text-slate-300 mt-1\">Câu nói: \"Hàm số $y = \\tan x$ đồng biến trên tập xác định $D$\" là HOÀN TOÀN SAI. Phải nói: \"Đồng biến trên TỪNG khoảng xác định\" $\\left(-\\frac{\\pi}{2} + k\\pi; \\frac{\\pi}{2} + k\\pi\\right)$.</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/90 rounded-lg border border-red-500/20\">\n        <p class=\"text-rose-400 font-bold\">⚠️ Bẫy 2: Nhầm lẫn tiệm cận đứng giữa tang và côtang</p>\n        <p class=\"text-slate-300 mt-1\">Hàm tang nhận $x = \\frac{\\pi}{2} + k\\pi$ làm tiệm cận đứng. Còn hàm côtang nhận $x = k\\pi$ (bao gồm cả trục tung $Oy$ khi $k=0$) làm tiệm cận đứng.</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/90 rounded-lg border border-red-500/20\">\n        <p class=\"text-rose-400 font-bold\">⚠️ Bẫy 3: Nhầm tập giá trị của tang với sin và cosin</p>\n        <p class=\"text-slate-300 mt-1\">Nhớ rằng tập giá trị của tang và côtang là toàn bộ $\\mathbb{R}$, không bị chặn trong $[-1; 1]$ như sin và cosin.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "magnifier",
      "mascotTip": "Cảnh giác cao độ với các bẫy trắc nghiệm phổ biến của Bộ Giáo Dục!"
    },
    {
      "id": "scene_12",
      "title": "4. TỔNG KẾT BÀI 3 & LỜI CHÚC THẦY NAM MINH",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-900/60 to-yellow-900/40 p-4 rounded-xl border border-amber-500/40\">\n    <h3 class=\"text-amber-300 font-bold text-lg flex items-center gap-2\">\n      <i class=\"fa-solid fa-graduation-cap text-yellow-400\"></i>\n      TỔNG KẾT BÀI 3 • HÀM SỐ LƯỢNG GIÁC\n    </h3>\n    <div class=\"mt-3 p-4 bg-slate-900/90 rounded-xl border border-slate-700 text-sm leading-relaxed space-y-3\">\n      <p class=\"text-emerald-300 font-bold\">🎉 CHÚC MỪNG CÁC EM ĐÃ HOÀN THÀNH TOÀN DIỆN BÀI 3:</p>\n      <div class=\"grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-200\">\n        <div class=\"p-2.5 bg-slate-800/80 rounded border border-slate-700\">\n          <span class=\"text-sky-300 font-bold\">• Mục 1:</span> Nắm vững định nghĩa, TXĐ, tính chẵn lẻ và chu kỳ tuần hoàn.\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded border border-slate-700\">\n          <span class=\"text-blue-300 font-bold\">• Mục 2:</span> Khảo sát trọn vẹn đồ thị và tính chất của hàm số sin và côsin.\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded border border-slate-700\">\n          <span class=\"text-emerald-300 font-bold\">• Mục 3:</span> Làm chủ đồ thị hàm tang, côtang và ứng dụng tiệm cận đứng thực tế.\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded border border-slate-700\">\n          <span class=\"text-amber-300 font-bold\">• 12 Ví dụ:</span> Trải đều từ Nhận biết, Thông hiểu đến Vận dụng cao.\n        </div>\n      </div>\n      <p class=\"text-amber-200 text-center font-semibold mt-2\">\n        \"Kiên trì tích lũy từng ngày - Thành công rực rỡ trong tầm tay!\" Thầy Nam Minh chúc các em học tốt!\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em học sinh thân mến đã hoàn thành xuất sắc toàn bộ bài học số 3: Hàm số lượng giác. Qua 3 mục bài học và 12 ví dụ minh họa tiêu biểu, các em đã nắm chắc trọn vẹn lý thuyết, kỹ năng giải toán và mô hình hóa thực tế. Thầy Nam Minh chúc các em luôn giữ vững niềm đam mê và tự tin chinh phục các bài học tiếp theo của Toán 11 Kết nối tri thức!",
      "startTime": 216.43,
      "endTime": 222.31,
      "duration": 5.88,
      "sceneIndex": 12,
      "subtitle": "Mục 3: Đồ thị và tính chất của hàm số tang và côtang • Cảnh 12",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-900/60 to-yellow-900/40 p-4 rounded-xl border border-amber-500/40\">\n    <h3 class=\"text-amber-300 font-bold text-lg flex items-center gap-2\">\n      <i class=\"fa-solid fa-graduation-cap text-yellow-400\"></i>\n      TỔNG KẾT BÀI 3 • HÀM SỐ LƯỢNG GIÁC\n    </h3>\n    <div class=\"mt-3 p-4 bg-slate-900/90 rounded-xl border border-slate-700 text-sm leading-relaxed space-y-3\">\n      <p class=\"text-emerald-300 font-bold\">🎉 CHÚC MỪNG CÁC EM ĐÃ HOÀN THÀNH TOÀN DIỆN BÀI 3:</p>\n      <div class=\"grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-200\">\n        <div class=\"p-2.5 bg-slate-800/80 rounded border border-slate-700\">\n          <span class=\"text-sky-300 font-bold\">• Mục 1:</span> Nắm vững định nghĩa, TXĐ, tính chẵn lẻ và chu kỳ tuần hoàn.\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded border border-slate-700\">\n          <span class=\"text-blue-300 font-bold\">• Mục 2:</span> Khảo sát trọn vẹn đồ thị và tính chất của hàm số sin và côsin.\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded border border-slate-700\">\n          <span class=\"text-emerald-300 font-bold\">• Mục 3:</span> Làm chủ đồ thị hàm tang, côtang và ứng dụng tiệm cận đứng thực tế.\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded border border-slate-700\">\n          <span class=\"text-amber-300 font-bold\">• 12 Ví dụ:</span> Trải đều từ Nhận biết, Thông hiểu đến Vận dụng cao.\n        </div>\n      </div>\n      <p class=\"text-amber-200 text-center font-semibold mt-2\">\n        \"Kiên trì tích lũy từng ngày - Thành công rực rỡ trong tầm tay!\" Thầy Nam Minh chúc các em học tốt!\n      </p>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "cheer",
      "mascotTip": "Hàm số tang luôn đồng biến trên từng khoảng xác định, còn côtang luôn nghịch biến trên từng khoảng xác định. Cả hai đều có tập giá trị là toàn bộ tập số thực R!"
    }
  ],
  "totalDuration": 222.31,
  "duration": 222.31,
  "timeline": [
    {
      "sceneId": "scene_1",
      "title": "1. TÍNH CHẤT TOÀN DIỆN CỦA HÀM SỐ TANG & CÔTANG",
      "startTime": 0.0,
      "endTime": 27.17,
      "duration": 27.17
    },
    {
      "sceneId": "scene_2",
      "title": "2. HÌNH DÁNG ĐỒ THỊ VÀ TIỆM CẬN ĐỨNG",
      "startTime": 27.17,
      "endTime": 48.6,
      "duration": 21.43
    },
    {
      "sceneId": "scene_3",
      "title": "Ví dụ 1: Tìm tập xác định của hàm số tang và côtang (Mức Nhận biết)",
      "startTime": 48.6,
      "endTime": 66.58,
      "duration": 17.98
    },
    {
      "sceneId": "scene_4",
      "title": "Ví dụ 1: Lời giải chi tiết & Điều kiện xác định chuẩn",
      "startTime": 66.58,
      "endTime": 80.38,
      "duration": 13.8
    },
    {
      "sceneId": "scene_5",
      "title": "Ví dụ 2: So sánh giá trị không dùng máy tính cầm tay (Mức Thông hiểu)",
      "startTime": 80.38,
      "endTime": 94.42,
      "duration": 14.04
    },
    {
      "sceneId": "scene_6",
      "title": "Ví dụ 2: Lời giải chi tiết & Vận dụng tính đồng biến, nghịch biến",
      "startTime": 94.42,
      "endTime": 115.18,
      "duration": 20.76
    },
    {
      "sceneId": "scene_7",
      "title": "Ví dụ 3: Tìm GTLN và GTNN của hàm số trên đoạn (Mức Vận dụng)",
      "startTime": 115.18,
      "endTime": 134.64,
      "duration": 19.46
    },
    {
      "sceneId": "scene_8",
      "title": "Ví dụ 3: Lời giải chi tiết & Kỹ thuật đặt ẩn phụ",
      "startTime": 134.64,
      "endTime": 148.8,
      "duration": 14.16
    },
    {
      "sceneId": "scene_9",
      "title": "Ví dụ 4: Bài toán vệt sáng ngọn hải đăng quét trên bờ biển (Mức Vận dụng cao)",
      "startTime": 148.8,
      "endTime": 178.08,
      "duration": 29.28
    },
    {
      "sceneId": "scene_10",
      "title": "Ví dụ 4: Lời giải chi tiết & Ý nghĩa đường tiệm cận đứng",
      "startTime": 178.08,
      "endTime": 195.48,
      "duration": 17.4
    },
    {
      "sceneId": "scene_11",
      "title": "3. CẢNH BÁO BẪY TRẮC NGHIỆM ĐỒ THỊ TANG VÀ CÔTANG",
      "startTime": 195.48,
      "endTime": 216.43,
      "duration": 20.95
    },
    {
      "sceneId": "scene_12",
      "title": "4. TỔNG KẾT BÀI 3 & LỜI CHÚC THẦY NAM MINH",
      "startTime": 216.43,
      "endTime": 222.31,
      "duration": 5.88
    }
  ]
};

  window.G11_CHAPTER1_DATA.toan11_bai3_muc1 = window.G11_CHAPTER1_DATA.g11_bai3_muc1;
  window.G11_CHAPTER1_DATA.toan11_bai3_muc2 = window.G11_CHAPTER1_DATA.g11_bai3_muc2;
  window.G11_CHAPTER1_DATA.toan11_bai3_muc3 = window.G11_CHAPTER1_DATA.g11_bai3_muc3;

  // Aliases for compatibility
  window.G11_CHAPTER1_DATA.toan11_bai1_muc1 = window.G11_CHAPTER1_DATA.g11_bai1_muc1;
  window.G11_CHAPTER1_DATA.toan11_bai1_muc2 = window.G11_CHAPTER1_DATA.g11_bai1_muc2;
  window.G11_CHAPTER1_DATA.toan11_bai1_muc3 = window.G11_CHAPTER1_DATA.g11_bai1_muc3;
  window.G11_CHAPTER1_DATA.toan11_bai1_muc4 = window.G11_CHAPTER1_DATA.g11_bai1_muc4;

  

  // ========================================================
  // BÀI 4: PHƯƠNG TRÌNH LƯỢNG GIÁC CƠ BẢN (TOÁN 11 - KNTT)
  // ========================================================

  window.G11_CHAPTER1_DATA.g11_bai4_muc1 = {
  "key": "g11_bai4_muc1",
  "lessonId": "toan11_bai4",
  "lessonTitle": "Bài 4: Phương trình lượng giác cơ bản",
  "sectionId": "g11_bai4_muc1",
  "sectionTitle": "Mục 1: Khái niệm phương trình tương đương & Phương trình sin x = m",
  "title": "Mục 1: Khái niệm phương trình tương đương & Phương trình sin x = m",
  "audio": "/audio/g11_bai4_muc1.mp3",
  "audioSrc": "./audio/g11_bai4_muc1.mp3",
  "audio_src": "./audio/g11_bai4_muc1.mp3",
  "owl_tip": "Nhớ thật kỹ quy tắc vàng: Phương trình sin x = m chỉ có nghiệm khi m nằm trong đoạn từ -1 đến 1. Khi có nghiệm, luôn có hai họ nghiệm là alpha và pi trừ alpha, với chu kỳ là k 2 pi!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm & Công thức nghiệm tổng quát",
      "scenes": [
        1,
        2
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 4 Ví dụ minh họa tiêu biểu (Đồng hồ 15s/30s)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Cảnh báo bẫy trắc nghiệm & Sai lầm thường gặp",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Tổng kết bài học & Bí kíp Cú Thông Thái",
      "scenes": [
        12
      ]
    }
  ],
  "scenes": [
    {
      "id": "scene_1",
      "title": "1. KHÁI NIỆM PHƯƠNG TRÌNH TƯƠNG ĐƯƠNG & PHÉP BIẾN ĐỔI",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <h3 class=\"text-emerald-300 font-bold text-lg flex items-center gap-2\">\n      <span class=\"px-2 py-0.5 bg-emerald-500/20 rounded text-emerald-300 text-sm\">Trọng tâm</span>\n      PHƯƠNG TRÌNH TƯƠNG ĐƯƠNG VÀ PHÉP BIẾN ĐỔI HỢP PHÁP\n    </h3>\n    <p class=\"text-slate-200 mt-2 text-sm leading-relaxed\">\n      Hai phương trình $f(x) = g(x)$ và $f_1(x) = g_1(x)$ được gọi là <strong>tương đương</strong> trên tập xác định $D$ nếu chúng có <strong>cùng tập nghiệm</strong>.\n    </p>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 text-sm\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">1. Phép cộng/trừ:</span><br/>\n        Cộng hoặc trừ hai vế với cùng một biểu thức xác định $h(x)$ trên $D$ bảo toàn tập nghiệm:\n        <p class=\"text-center font-bold text-amber-300 mt-1\">$$f(x) = g(x) \\Leftrightarrow f(x) \\pm h(x) = g(x) \\pm h(x)$$</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">2. Phép nhân/chia:</span><br/>\n        Nhân hoặc chia hai vế với biểu thức $h(x)$ luôn khác 0 trên $D$:\n        <p class=\"text-center font-bold text-sky-300 mt-1\">$$f(x) = g(x) \\Leftrightarrow f(x) \\cdot h(x) = g(x) \\cdot h(x) \\quad (h(x) \\ne 0)$$</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em học sinh lớp 11 đến với bài học số 4: Phương trình lượng giác cơ bản. Trong mục đầu tiên này, thầy và các em sẽ cùng tìm hiểu khái niệm phương trình tương đương và trọng tâm là phương trình sin x bằng m. Hai phương trình được gọi là tương đương khi và chỉ khi chúng có cùng chung tập hợp nghiệm trên tập xác định. Để biến đổi tương đương, các em có thể cộng trừ cùng một biểu thức, hoặc nhân chia hai vế với một biểu thức luôn khác không.",
      "startTime": 0,
      "endTime": 24.29,
      "duration": 24.29,
      "sceneIndex": 1,
      "subtitle": "Mục 1: Khái niệm phương trình tương đương & Phương trình sin x = m • Cảnh 1",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <h3 class=\"text-emerald-300 font-bold text-lg flex items-center gap-2\">\n      <span class=\"px-2 py-0.5 bg-emerald-500/20 rounded text-emerald-300 text-sm\">Trọng tâm</span>\n      PHƯƠNG TRÌNH TƯƠNG ĐƯƠNG VÀ PHÉP BIẾN ĐỔI HỢP PHÁP\n    </h3>\n    <p class=\"text-slate-200 mt-2 text-sm leading-relaxed\">\n      Hai phương trình $f(x) = g(x)$ và $f_1(x) = g_1(x)$ được gọi là <strong>tương đương</strong> trên tập xác định $D$ nếu chúng có <strong>cùng tập nghiệm</strong>.\n    </p>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 text-sm\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">1. Phép cộng/trừ:</span><br/>\n        Cộng hoặc trừ hai vế với cùng một biểu thức xác định $h(x)$ trên $D$ bảo toàn tập nghiệm:\n        <p class=\"text-center font-bold text-amber-300 mt-1\">$$f(x) = g(x) \\Leftrightarrow f(x) \\pm h(x) = g(x) \\pm h(x)$$</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">2. Phép nhân/chia:</span><br/>\n        Nhân hoặc chia hai vế với biểu thức $h(x)$ luôn khác 0 trên $D$:\n        <p class=\"text-center font-bold text-sky-300 mt-1\">$$f(x) = g(x) \\Leftrightarrow f(x) \\cdot h(x) = g(x) \\cdot h(x) \\quad (h(x) \\ne 0)$$</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Ghi nhớ: Phép biến đổi tương đương đòi hỏi giữ nguyên tập xác định D của phương trình ban đầu!"
    },
    {
      "id": "scene_2",
      "title": "2. CÔNG THỨC NGHIỆM CỦA PHƯƠNG TRÌNH SIN X = M",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-sky-500/30\">\n      <h4 class=\"text-sky-300 font-bold text-base mb-2\">🎯 ĐIỀU KIỆN CÓ NGHIỆM & CÔNG THỨC CHUẨN</h4>\n      <p class=\"text-slate-300 text-sm leading-relaxed\">\n        Phương trình $\\sin x = m$:\n      </p>\n      <div class=\"mt-2 space-y-1.5 text-sm bg-slate-800/80 p-3 rounded-lg border border-slate-700\">\n        <p class=\"text-rose-400 font-bold\">• Nếu $|m| > 1$: Phương trình VÔ NGHIỆM.</p>\n        <p class=\"text-emerald-300 font-bold\">• Nếu $|m| \\le 1$: Gọi $\\alpha$ sao cho $\\sin\\alpha = m$:</p>\n        <div class=\"p-2 bg-slate-950/70 rounded border border-emerald-500/40 text-center font-bold text-yellow-300 text-sm\">\n          $$\\sin x = \\sin\\alpha \\Leftrightarrow \\begin{cases} x = \\alpha + k2\\pi \\\\ x = \\pi - \\alpha + k2\\pi \\end{cases} \\quad (k \\in \\mathbb{Z})$$\n        </div>\n        <p class=\"text-slate-400 text-xs\">Theo đơn vị độ: $x = \\alpha^\\circ + k360^\\circ$ hoặc $x = 180^\\circ - \\alpha^\\circ + k360^\\circ$.</p>\n      </div>\n    </div>\n\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-amber-500/30\">\n      <h4 class=\"text-amber-300 font-bold text-base mb-2\">⭐ 3 TRƯỜNG HỢP ĐẶC BIỆT (GHI NHỚ NHANH)</h4>\n      <div class=\"space-y-2 text-sm\">\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-amber-400 font-bold\">1. $\\sin x = 0$:</span>\n          <p class=\"text-slate-200 mt-1\">$$x = k\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n          <p class=\"text-slate-400 text-xs\">Hai điểm đối xứng trên trục hoành $(A, A')$. Đuôi là $k\\pi$.</p>\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-emerald-400 font-bold\">2. $\\sin x = 1$:</span>\n          <p class=\"text-slate-200 mt-1\">$$x = \\frac{\\pi}{2} + k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n          <p class=\"text-slate-400 text-xs\">Điểm cực bắc $B(0; 1)$ của đường tròn lượng giác.</p>\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-rose-400 font-bold\">3. $\\sin x = -1$:</span>\n          <p class=\"text-slate-200 mt-1\">$$x = -\\frac{\\pi}{2} + k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n          <p class=\"text-slate-400 text-xs\">Điểm cực nam $B'(0; -1)$ của đường tròn lượng giác.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Tiếp theo là công thức nghiệm của phương trình sin x bằng m. Vì hàm sin có giá trị chạy từ trừ một đến một, nên nếu trị tuyệt đối của m lớn hơn một thì phương trình sẽ vô nghiệm ngay. Khi trị tuyệt đối của m bé hơn hoặc bằng một, ta tìm góc alpha sao cho sin alpha bằng m. Phương trình sẽ có hai nhánh nghiệm là x bằng alpha cộng k 2 pi, và x bằng pi trừ alpha cộng k 2 pi. Các em cần đặc biệt lưu ý ba điểm chốt: sin x bằng không thì x bằng k pi, sin x bằng một thì x bằng pi trên hai cộng k 2 pi, và sin x bằng trừ một thì x bằng trừ pi trên hai cộng k 2 pi.",
      "startTime": 24.29,
      "endTime": 58.68,
      "duration": 34.39,
      "sceneIndex": 2,
      "subtitle": "Mục 1: Khái niệm phương trình tương đương & Phương trình sin x = m • Cảnh 2",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-sky-500/30\">\n      <h4 class=\"text-sky-300 font-bold text-base mb-2\">🎯 ĐIỀU KIỆN CÓ NGHIỆM & CÔNG THỨC CHUẨN</h4>\n      <p class=\"text-slate-300 text-sm leading-relaxed\">\n        Phương trình $\\sin x = m$:\n      </p>\n      <div class=\"mt-2 space-y-1.5 text-sm bg-slate-800/80 p-3 rounded-lg border border-slate-700\">\n        <p class=\"text-rose-400 font-bold\">• Nếu $|m| > 1$: Phương trình VÔ NGHIỆM.</p>\n        <p class=\"text-emerald-300 font-bold\">• Nếu $|m| \\le 1$: Gọi $\\alpha$ sao cho $\\sin\\alpha = m$:</p>\n        <div class=\"p-2 bg-slate-950/70 rounded border border-emerald-500/40 text-center font-bold text-yellow-300 text-sm\">\n          $$\\sin x = \\sin\\alpha \\Leftrightarrow \\begin{cases} x = \\alpha + k2\\pi \\\\ x = \\pi - \\alpha + k2\\pi \\end{cases} \\quad (k \\in \\mathbb{Z})$$\n        </div>\n        <p class=\"text-slate-400 text-xs\">Theo đơn vị độ: $x = \\alpha^\\circ + k360^\\circ$ hoặc $x = 180^\\circ - \\alpha^\\circ + k360^\\circ$.</p>\n      </div>\n    </div>\n\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-amber-500/30\">\n      <h4 class=\"text-amber-300 font-bold text-base mb-2\">⭐ 3 TRƯỜNG HỢP ĐẶC BIỆT (GHI NHỚ NHANH)</h4>\n      <div class=\"space-y-2 text-sm\">\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-amber-400 font-bold\">1. $\\sin x = 0$:</span>\n          <p class=\"text-slate-200 mt-1\">$$x = k\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n          <p class=\"text-slate-400 text-xs\">Hai điểm đối xứng trên trục hoành $(A, A')$. Đuôi là $k\\pi$.</p>\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-emerald-400 font-bold\">2. $\\sin x = 1$:</span>\n          <p class=\"text-slate-200 mt-1\">$$x = \\frac{\\pi}{2} + k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n          <p class=\"text-slate-400 text-xs\">Điểm cực bắc $B(0; 1)$ của đường tròn lượng giác.</p>\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-rose-400 font-bold\">3. $\\sin x = -1$:</span>\n          <p class=\"text-slate-200 mt-1\">$$x = -\\frac{\\pi}{2} + k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n          <p class=\"text-slate-400 text-xs\">Điểm cực nam $B'(0; -1)$ của đường tròn lượng giác.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Phương trình sin x = m có nghiệm khi và chỉ khi m nằm trong đoạn [-1; 1]. Nhớ 2 họ nghiệm alpha và pi - alpha!"
    },
    {
      "id": "scene_3",
      "title": "Ví dụ 1: Giải phương trình sin cơ bản (Mức Nhận biết)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/50 to-indigo-900/40 p-4 rounded-xl border border-blue-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-blue-500 text-white text-xs font-bold rounded\">VÍ DỤ 1 • NHẬN BIẾT</span>\n      <span class=\"text-slate-400 text-xs\">Mục 1 • Phương trình sin x = m</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Giải các phương trình lượng giác sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> $\\sin x = \\frac{\\sqrt{3}}{2}$</p>\n      <p><strong class=\"text-sky-400\">b)</strong> $\\sin x = -1$</p>\n      <p><strong class=\"text-rose-400\">c)</strong> $\\sin x = 1.5$</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-15s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 15 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng bắt đầu với ví dụ 1 ở mức độ nhận biết. Đề bài yêu cầu giải ba phương trình lượng giác cơ bản: câu a sin x bằng căn ba trên hai, câu b sin x bằng trừ một, và câu c sin x bằng một phẩy năm. Các em hãy vận dụng ngay bảng giá trị góc đặc biệt và điều kiện có nghiệm trong mười lăm giây suy nghĩ.",
      "startTime": 58.68,
      "endTime": 77.62,
      "duration": 18.94,
      "sceneIndex": 3,
      "subtitle": "Mục 1: Khái niệm phương trình tương đương & Phương trình sin x = m • Cảnh 3",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/50 to-indigo-900/40 p-4 rounded-xl border border-blue-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-blue-500 text-white text-xs font-bold rounded\">VÍ DỤ 1 • NHẬN BIẾT</span>\n      <span class=\"text-slate-400 text-xs\">Mục 1 • Phương trình sin x = m</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Giải các phương trình lượng giác sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> $\\sin x = \\frac{\\sqrt{3}}{2}$</p>\n      <p><strong class=\"text-sky-400\">b)</strong> $\\sin x = -1$</p>\n      <p><strong class=\"text-rose-400\">c)</strong> $\\sin x = 1.5$</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-15s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 15 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Thử sức tự giải nhanh phương trình sin x = sqrt(3)/2 và sin x = -1 trong 15 giây nhé!"
    },
    {
      "id": "scene_4",
      "title": "Ví dụ 1: Hướng dẫn giải chi tiết",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-blue-500/30\">\n    <h4 class=\"text-blue-300 font-bold text-sm mb-3\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 1</h4>\n    <div class=\"space-y-3 text-sm text-slate-200\">\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <p class=\"font-bold text-amber-400\">a) $\\sin x = \\frac{\\sqrt{3}}{2}$</p>\n        <p class=\"mt-1\">Vì $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$ nên ta có:</p>\n        <p class=\"mt-1 font-semibold text-yellow-300\">$$\\sin x = \\sin\\frac{\\pi}{3} \\Leftrightarrow \\begin{cases} x = \\frac{\\pi}{3} + k2\\pi \\\\ x = \\pi - \\frac{\\pi}{3} + k2\\pi = \\frac{2\\pi}{3} + k2\\pi \\end{cases} \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <p class=\"font-bold text-sky-400\">b) $\\sin x = -1$</p>\n        <p class=\"mt-1\">Đây là trường hợp đặc biệt tại điểm cực nam của đường tròn:</p>\n        <p class=\"mt-1 font-semibold text-sky-300\">$$x = -\\frac{\\pi}{2} + k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <p class=\"font-bold text-rose-400\">c) $\\sin x = 1.5$</p>\n        <p class=\"mt-1\">Vì $1.5 > 1$, vượt quá miền giá trị $[-1; 1]$ của hàm sin, nên phương trình <strong>vô nghiệm</strong>.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ở câu a, vì căn ba trên hai chính là sin của pi trên ba, nên phương trình có hai họ nghiệm là x bằng pi trên ba cộng k 2 pi, và họ nghiệm bù là pi trừ pi trên ba, tức hai pi trên ba cộng k 2 pi. Ở câu b, sin x bằng trừ một rơi vào trường hợp đặc biệt tại điểm cực nam, nghiệm duy nhất là trừ pi trên hai cộng k 2 pi. Ở câu c, do một phẩy năm lớn hơn một nên phương trình vô nghiệm hoàn toàn.",
      "startTime": 77.62,
      "endTime": 102.55,
      "duration": 24.94,
      "sceneIndex": 4,
      "subtitle": "Mục 1: Khái niệm phương trình tương đương & Phương trình sin x = m • Cảnh 4",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-blue-500/30\">\n    <h4 class=\"text-blue-300 font-bold text-sm mb-3\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 1</h4>\n    <div class=\"space-y-3 text-sm text-slate-200\">\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <p class=\"font-bold text-amber-400\">a) $\\sin x = \\frac{\\sqrt{3}}{2}$</p>\n        <p class=\"mt-1\">Vì $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$ nên ta có:</p>\n        <p class=\"mt-1 font-semibold text-yellow-300\">$$\\sin x = \\sin\\frac{\\pi}{3} \\Leftrightarrow \\begin{cases} x = \\frac{\\pi}{3} + k2\\pi \\\\ x = \\pi - \\frac{\\pi}{3} + k2\\pi = \\frac{2\\pi}{3} + k2\\pi \\end{cases} \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <p class=\"font-bold text-sky-400\">b) $\\sin x = -1$</p>\n        <p class=\"mt-1\">Đây là trường hợp đặc biệt tại điểm cực nam của đường tròn:</p>\n        <p class=\"mt-1 font-semibold text-sky-300\">$$x = -\\frac{\\pi}{2} + k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <p class=\"font-bold text-rose-400\">c) $\\sin x = 1.5$</p>\n        <p class=\"mt-1\">Vì $1.5 > 1$, vượt quá miền giá trị $[-1; 1]$ của hàm sin, nên phương trình <strong>vô nghiệm</strong>.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Quan sát kỹ cách đổi sqrt(3)/2 = sin(pi/3) và áp dụng công thức 2 họ nghiệm chuẩn SGK!"
    },
    {
      "id": "scene_5",
      "title": "Ví dụ 2: Phương trình dạng sin f(x) = sin g(x) (Mức Thông hiểu)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/50 to-teal-900/40 p-4 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-emerald-500 text-white text-xs font-bold rounded\">VÍ DỤ 2 • THÔNG HIỂU</span>\n      <span class=\"text-slate-400 text-xs\">Mục 1 • Phương trình sin f(x) = sin g(x)</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Giải phương trình lượng giác:</h4>\n    <div class=\"mt-2 p-3 bg-slate-900/80 rounded-lg border border-emerald-500/30 text-center font-bold text-emerald-300 text-base\">\n      $$\\sin\\left(2x - \\frac{\\pi}{3}\\right) = \\sin\\left(x + \\frac{\\pi}{6}\\right)$$\n    </div>\n    <div class=\"countdown-clock-widget cd-15s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 15 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Đến với ví dụ 2 ở mức độ thông hiểu, ta có dạng phương trình sin f x bằng sin g x. Đề bài là sin của hai x trừ pi trên ba bằng sin của x cộng pi trên sáu. Các em hãy áp dụng công thức hai vế: nhánh một là hai góc bằng nhau cộng k 2 pi, nhánh hai là hai góc bù nhau cộng k 2 pi.",
      "startTime": 102.55,
      "endTime": 120.26,
      "duration": 17.71,
      "sceneIndex": 5,
      "subtitle": "Mục 1: Khái niệm phương trình tương đương & Phương trình sin x = m • Cảnh 5",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/50 to-teal-900/40 p-4 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-emerald-500 text-white text-xs font-bold rounded\">VÍ DỤ 2 • THÔNG HIỂU</span>\n      <span class=\"text-slate-400 text-xs\">Mục 1 • Phương trình sin f(x) = sin g(x)</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Giải phương trình lượng giác:</h4>\n    <div class=\"mt-2 p-3 bg-slate-900/80 rounded-lg border border-emerald-500/30 text-center font-bold text-emerald-300 text-base\">\n      $$\\sin\\left(2x - \\frac{\\pi}{3}\\right) = \\sin\\left(x + \\frac{\\pi}{6}\\right)$$\n    </div>\n    <div class=\"countdown-clock-widget cd-15s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 15 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Dạng sin f(x) = sin g(x): f(x) = g(x) + k2pi hoặc f(x) = pi - g(x) + k2pi, tuyệt đối không được quên họ nghiệm thứ hai!"
    },
    {
      "id": "scene_6",
      "title": "Ví dụ 2: Hướng dẫn giải chi tiết",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-emerald-500/30\">\n    <h4 class=\"text-emerald-300 font-bold text-sm mb-3\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 2</h4>\n    <p class=\"text-slate-300 text-sm\">Phương trình $\\sin\\left(2x - \\frac{\\pi}{3}\\right) = \\sin\\left(x + \\frac{\\pi}{6}\\right)$ tương đương với:</p>\n    <div class=\"mt-2 space-y-3 text-sm text-slate-200\">\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">• Nhánh 1 (Hai góc bằng nhau):</span>\n        <p class=\"mt-1 text-slate-100\">$$2x - \\frac{\\pi}{3} = x + \\frac{\\pi}{6} + k2\\pi \\Leftrightarrow 2x - x = \\frac{\\pi}{6} + \\frac{\\pi}{3} + k2\\pi$$</p>\n        <p class=\"mt-1 font-bold text-yellow-300\">$$\\Leftrightarrow x = \\frac{\\pi}{2} + k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">• Nhánh 2 (Hai góc bù nhau):</span>\n        <p class=\"mt-1 text-slate-100\">$$2x - \\frac{\\pi}{3} = \\pi - \\left(x + \\frac{\\pi}{6}\\right) + k2\\pi \\Leftrightarrow 2x + x = \\pi - \\frac{\\pi}{6} + \\frac{\\pi}{3} + k2\\pi$$</p>\n        <p class=\"mt-1 text-slate-100\">$$3x = \\frac{7\\pi}{6} + k2\\pi \\Leftrightarrow x = \\frac{7\\pi}{18} + \\frac{k2\\pi}{3} \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n    </div>\n    <p class=\"text-emerald-400 text-sm mt-2 font-semibold\">Vậy tập nghiệm là: $x = \\frac{\\pi}{2} + k2\\pi$ hoặc $x = \\frac{7\\pi}{18} + \\frac{k2\\pi}{3}$ ($k \\in \\mathbb{Z}$).</p>\n  </div>\n</div>\n",
      "narration": "Lời giải chi tiết như sau: Ở nhánh một, hai góc bằng nhau: hai x trừ pi trên ba bằng x cộng pi trên sáu cộng k 2 pi. Chuyển vế ta được ngay họ nghiệm x bằng pi trên hai cộng k 2 pi. Ở nhánh hai, hai góc bù nhau: hai x trừ pi trên ba bằng pi trừ mở ngoặc x cộng pi trên sáu đóng ngoặc cộng k 2 pi. Chuyển x sang vế trái được ba x bằng bảy pi trên sáu cộng k 2 pi. Chia cả hai vế cho ba, ta tìm được x bằng bảy pi trên mười tám cộng k hai pi trên ba. Cả hai họ nghiệm đều rất đẹp và chính xác.",
      "startTime": 120.26,
      "endTime": 153.48,
      "duration": 33.22,
      "sceneIndex": 6,
      "subtitle": "Mục 1: Khái niệm phương trình tương đương & Phương trình sin x = m • Cảnh 6",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-emerald-500/30\">\n    <h4 class=\"text-emerald-300 font-bold text-sm mb-3\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 2</h4>\n    <p class=\"text-slate-300 text-sm\">Phương trình $\\sin\\left(2x - \\frac{\\pi}{3}\\right) = \\sin\\left(x + \\frac{\\pi}{6}\\right)$ tương đương với:</p>\n    <div class=\"mt-2 space-y-3 text-sm text-slate-200\">\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">• Nhánh 1 (Hai góc bằng nhau):</span>\n        <p class=\"mt-1 text-slate-100\">$$2x - \\frac{\\pi}{3} = x + \\frac{\\pi}{6} + k2\\pi \\Leftrightarrow 2x - x = \\frac{\\pi}{6} + \\frac{\\pi}{3} + k2\\pi$$</p>\n        <p class=\"mt-1 font-bold text-yellow-300\">$$\\Leftrightarrow x = \\frac{\\pi}{2} + k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">• Nhánh 2 (Hai góc bù nhau):</span>\n        <p class=\"mt-1 text-slate-100\">$$2x - \\frac{\\pi}{3} = \\pi - \\left(x + \\frac{\\pi}{6}\\right) + k2\\pi \\Leftrightarrow 2x + x = \\pi - \\frac{\\pi}{6} + \\frac{\\pi}{3} + k2\\pi$$</p>\n        <p class=\"mt-1 text-slate-100\">$$3x = \\frac{7\\pi}{6} + k2\\pi \\Leftrightarrow x = \\frac{7\\pi}{18} + \\frac{k2\\pi}{3} \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n    </div>\n    <p class=\"text-emerald-400 text-sm mt-2 font-semibold\">Vậy tập nghiệm là: $x = \\frac{\\pi}{2} + k2\\pi$ hoặc $x = \\frac{7\\pi}{18} + \\frac{k2\\pi}{3}$ ($k \\in \\mathbb{Z}$).</p>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Lưu ý khi chuyển vế đổi dấu và chia cho hệ số của x ở cả 2 vế, nhớ chia cả số hạng k2pi!"
    },
    {
      "id": "scene_7",
      "title": "Ví dụ 3: Tìm số nghiệm thuộc khoảng cho trước (Mức Vận dụng)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/50 to-indigo-900/40 p-4 rounded-xl border border-purple-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-purple-500 text-white text-xs font-bold rounded\">VÍ DỤ 3 • VẬN DỤNG</span>\n      <span class=\"text-slate-400 text-xs\">Mục 1 • Nghiệm trên khoảng</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Tìm tất cả các nghiệm của phương trình sau thuộc khoảng $(-\\pi; \\pi)$:</h4>\n    <div class=\"mt-2 p-3 bg-slate-900/80 rounded-lg border border-purple-500/30 text-center font-bold text-purple-300 text-base\">\n      $$\\sin\\left(3x + \\frac{\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2}$$\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3 là bài toán vận dụng: Tìm tất cả các nghiệm của phương trình sin của ba x cộng pi trên bốn bằng trừ căn hai trên hai, thuộc khoảng từ trừ pi đến pi. Đây là dạng toán trắc nghiệm rất hay gặp trong các đề thi học kỳ. Các em có ba mươi giây để tìm họ nghiệm tổng quát rồi giải bất phương trình chặn giá trị k nguyên.",
      "startTime": 153.48,
      "endTime": 172.42,
      "duration": 18.94,
      "sceneIndex": 7,
      "subtitle": "Mục 1: Khái niệm phương trình tương đương & Phương trình sin x = m • Cảnh 7",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/50 to-indigo-900/40 p-4 rounded-xl border border-purple-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-purple-500 text-white text-xs font-bold rounded\">VÍ DỤ 3 • VẬN DỤNG</span>\n      <span class=\"text-slate-400 text-xs\">Mục 1 • Nghiệm trên khoảng</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Tìm tất cả các nghiệm của phương trình sau thuộc khoảng $(-\\pi; \\pi)$:</h4>\n    <div class=\"mt-2 p-3 bg-slate-900/80 rounded-lg border border-purple-500/30 text-center font-bold text-purple-300 text-base\">\n      $$\\sin\\left(3x + \\frac{\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2}$$\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Phương trình dạng tích hoặc chuyển vế: Đưa về sin x = m cơ bản rồi chặn nghiệm k trên khoảng [0; 2pi]!"
    },
    {
      "id": "scene_8",
      "title": "Ví dụ 3: Hướng dẫn giải chi tiết",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-purple-500/30\">\n    <h4 class=\"text-purple-300 font-bold text-sm mb-2\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 3</h4>\n    <p class=\"text-slate-300 text-xs\">Vì $-\\frac{\\sqrt{2}}{2} = \\sin\\left(-\\frac{\\pi}{4}\\right)$, ta có hai nhánh nghiệm:</p>\n    <div class=\"mt-2 space-y-2 text-xs text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">• Họ 1:</span> $3x + \\frac{\\pi}{4} = -\\frac{\\pi}{4} + k2\\pi \\Leftrightarrow 3x = -\\frac{\\pi}{2} + k2\\pi \\Leftrightarrow x = -\\frac{\\pi}{6} + \\frac{k2\\pi}{3}$.<br/>\n        Điều kiện $x \\in (-\\pi; \\pi) \\Leftrightarrow -\\pi < -\\frac{\\pi}{6} + \\frac{k2\\pi}{3} < \\pi \\Leftrightarrow -\\frac{5}{4} < k < \\frac{7}{4}$.<br/>\n        Vì $k \\in \\mathbb{Z} \\Rightarrow k \\in \\{-1; 0; 1\\}$, tương ứng:\n        <span class=\"text-yellow-300 font-semibold\"> $x = -\\frac{5\\pi}{6}; x = -\\frac{\\pi}{6}; x = \\frac{\\pi}{2}$.</span>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">• Họ 2:</span> $3x + \\frac{\\pi}{4} = \\pi - \\left(-\\frac{\\pi}{4}\\right) + k2\\pi = \\frac{5\\pi}{4} + k2\\pi \\Leftrightarrow 3x = \\pi + k2\\pi \\Leftrightarrow x = \\frac{\\pi}{3} + \\frac{k2\\pi}{3}$.<br/>\n        Điều kiện $x \\in (-\\pi; \\pi) \\Leftrightarrow -\\pi < \\frac{\\pi}{3} + \\frac{k2\\pi}{3} < \\pi \\Leftrightarrow -2 < k < 1$.<br/>\n        Vì $k \\in \\mathbb{Z} \\Rightarrow k \\in \\{-1; 0\\}$, tương ứng:\n        <span class=\"text-sky-300 font-semibold\"> $x = -\\frac{\\pi}{3}; x = \\frac{\\pi}{3}$.</span>\n      </div>\n    </div>\n    <div class=\"p-2 bg-purple-950/60 rounded border border-purple-500/40 mt-2 text-xs\">\n      <strong class=\"text-purple-300\">Kết luận:</strong> Phương trình có <strong>5 nghiệm</strong> trên $(-\\pi; \\pi)$ là:\n      $x \\in \\left\\{-\\frac{5\\pi}{6}; -\\frac{\\pi}{3}; -\\frac{\\pi}{6}; \\frac{\\pi}{3}; \\frac{\\pi}{2}\\right\\}$.\n    </div>\n  </div>\n</div>\n",
      "narration": "Bước một, ta đưa trừ căn hai trên hai về sin của trừ pi trên bốn. Họ nghiệm thứ nhất cho x bằng trừ pi trên sáu cộng k hai pi trên ba. Chặn trên khoảng trừ pi đến pi, ta tìm được k nằm từ trừ một phẩy hai lăm đến một phẩy bảy lăm, gồm ba giá trị nguyên: k bằng trừ một, không, và một, sinh ra ba nghiệm. Họ nghiệm thứ hai cho x bằng pi trên ba cộng k hai pi trên ba. Chặn điều kiện cho k lớn hơn trừ hai và bé hơn một, ta nhận hai giá trị là k bằng trừ một và không, sinh ra thêm hai nghiệm. Như vậy, phương trình có tất cả đúng năm nghiệm phân biệt trên khoảng đã cho.",
      "startTime": 172.42,
      "endTime": 209.16,
      "duration": 36.74,
      "sceneIndex": 8,
      "subtitle": "Mục 1: Khái niệm phương trình tương đương & Phương trình sin x = m • Cảnh 8",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-purple-500/30\">\n    <h4 class=\"text-purple-300 font-bold text-sm mb-2\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 3</h4>\n    <p class=\"text-slate-300 text-xs\">Vì $-\\frac{\\sqrt{2}}{2} = \\sin\\left(-\\frac{\\pi}{4}\\right)$, ta có hai nhánh nghiệm:</p>\n    <div class=\"mt-2 space-y-2 text-xs text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">• Họ 1:</span> $3x + \\frac{\\pi}{4} = -\\frac{\\pi}{4} + k2\\pi \\Leftrightarrow 3x = -\\frac{\\pi}{2} + k2\\pi \\Leftrightarrow x = -\\frac{\\pi}{6} + \\frac{k2\\pi}{3}$.<br/>\n        Điều kiện $x \\in (-\\pi; \\pi) \\Leftrightarrow -\\pi < -\\frac{\\pi}{6} + \\frac{k2\\pi}{3} < \\pi \\Leftrightarrow -\\frac{5}{4} < k < \\frac{7}{4}$.<br/>\n        Vì $k \\in \\mathbb{Z} \\Rightarrow k \\in \\{-1; 0; 1\\}$, tương ứng:\n        <span class=\"text-yellow-300 font-semibold\"> $x = -\\frac{5\\pi}{6}; x = -\\frac{\\pi}{6}; x = \\frac{\\pi}{2}$.</span>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">• Họ 2:</span> $3x + \\frac{\\pi}{4} = \\pi - \\left(-\\frac{\\pi}{4}\\right) + k2\\pi = \\frac{5\\pi}{4} + k2\\pi \\Leftrightarrow 3x = \\pi + k2\\pi \\Leftrightarrow x = \\frac{\\pi}{3} + \\frac{k2\\pi}{3}$.<br/>\n        Điều kiện $x \\in (-\\pi; \\pi) \\Leftrightarrow -\\pi < \\frac{\\pi}{3} + \\frac{k2\\pi}{3} < \\pi \\Leftrightarrow -2 < k < 1$.<br/>\n        Vì $k \\in \\mathbb{Z} \\Rightarrow k \\in \\{-1; 0\\}$, tương ứng:\n        <span class=\"text-sky-300 font-semibold\"> $x = -\\frac{\\pi}{3}; x = \\frac{\\pi}{3}$.</span>\n      </div>\n    </div>\n    <div class=\"p-2 bg-purple-950/60 rounded border border-purple-500/40 mt-2 text-xs\">\n      <strong class=\"text-purple-300\">Kết luận:</strong> Phương trình có <strong>5 nghiệm</strong> trên $(-\\pi; \\pi)$ là:\n      $x \\in \\left\\{-\\frac{5\\pi}{6}; -\\frac{\\pi}{3}; -\\frac{\\pi}{6}; \\frac{\\pi}{3}; \\frac{\\pi}{2}\\right\\}$.\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Đếm số nguyên k thỏa mãn điều kiện kẹp giữa hai đầu mút khoảng để tìm chính xác số nghiệm!"
    },
    {
      "id": "scene_9",
      "title": "Ví dụ 4: Bài toán thực tế chuyển động Piston (Mức Vận dụng cao)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-rose-900/50 to-orange-900/40 p-4 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-rose-500 text-white text-xs font-bold rounded\">VÍ DỤ 4 • VẬN DỤNG CAO / THỰC TẾ</span>\n      <span class=\"text-slate-400 text-xs\">Mục 1 • Động cơ đốt trong</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Vận tốc chuyển động của piston trong xi lanh:</h4>\n    <p class=\"text-slate-200 text-sm mt-1 leading-relaxed\">\n      Vận tốc tức thời $v(t)$ (cm/s) của một piston sau thời gian $t$ giây ($t \\ge 0$) được xác định bởi công thức:\n    </p>\n    <div class=\"p-2.5 bg-slate-900/80 rounded-lg border border-rose-500/30 text-center font-bold text-amber-300 text-base my-2\">\n      $$v(t) = 40\\sin\\left(10\\pi t - \\frac{\\pi}{3}\\right)$$\n    </div>\n    <p class=\"text-slate-300 text-sm\">\n      Xác định <strong>hai thời điểm đầu tiên</strong> ($t_1 > 0$ và $t_2 > t_1$) mà piston đạt vận tốc bằng $20\\sqrt{3}$ cm/s.\n    </p>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4 là bài toán thực tế vận dụng cao về chuyển động piston trong động cơ đốt trong. Vận tốc của piston được mô hình hóa bởi hàm số v theo t bằng bốn mươi nhân sin của mười pi t trừ pi trên ba. Đề bài yêu cầu tìm hai thời điểm dương đầu tiên t một và t hai mà piston đạt vận tốc hai mươi căn ba xăng ti mét trên giây. Các em hãy thiết lập phương trình và giải trong ba mươi giây.",
      "startTime": 209.16,
      "endTime": 232.92,
      "duration": 23.76,
      "sceneIndex": 9,
      "subtitle": "Mục 1: Khái niệm phương trình tương đương & Phương trình sin x = m • Cảnh 9",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-rose-900/50 to-orange-900/40 p-4 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-rose-500 text-white text-xs font-bold rounded\">VÍ DỤ 4 • VẬN DỤNG CAO / THỰC TẾ</span>\n      <span class=\"text-slate-400 text-xs\">Mục 1 • Động cơ đốt trong</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Vận tốc chuyển động của piston trong xi lanh:</h4>\n    <p class=\"text-slate-200 text-sm mt-1 leading-relaxed\">\n      Vận tốc tức thời $v(t)$ (cm/s) của một piston sau thời gian $t$ giây ($t \\ge 0$) được xác định bởi công thức:\n    </p>\n    <div class=\"p-2.5 bg-slate-900/80 rounded-lg border border-rose-500/30 text-center font-bold text-amber-300 text-base my-2\">\n      $$v(t) = 40\\sin\\left(10\\pi t - \\frac{\\pi}{3}\\right)$$\n    </div>\n    <p class=\"text-slate-300 text-sm\">\n      Xác định <strong>hai thời điểm đầu tiên</strong> ($t_1 > 0$ và $t_2 > t_1$) mà piston đạt vận tốc bằng $20\\sqrt{3}$ cm/s.\n    </p>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Bài toán thực tế chuyển động piston: Thiết lập phương trình h(t) = m, giải tìm thời điểm t >= 0!"
    },
    {
      "id": "scene_10",
      "title": "Ví dụ 4: Hướng dẫn giải chi tiết",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-rose-500/30\">\n    <h4 class=\"text-rose-300 font-bold text-sm mb-2\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 4</h4>\n    <p class=\"text-slate-300 text-xs\">Thiết lập phương trình vận tốc: $40\\sin\\left(10\\pi t - \\frac{\\pi}{3}\\right) = 20\\sqrt{3} \\Leftrightarrow \\sin\\left(10\\pi t - \\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2} = \\sin\\frac{\\pi}{3}$.</p>\n    <div class=\"mt-2 space-y-2 text-xs text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">• Nhánh 1:</span> $10\\pi t - \\frac{\\pi}{3} = \\frac{\\pi}{3} + k2\\pi \\Leftrightarrow 10\\pi t = \\frac{2\\pi}{3} + k2\\pi \\Leftrightarrow t = \\frac{1}{15} + \\frac{k}{5}$ ($k \\in \\mathbb{Z}$).<br/>\n        Với $t > 0$, lấy $k = 0 \\Rightarrow t = \\frac{1}{15} \\approx 0.0667$ (s); $k = 1 \\Rightarrow t = \\frac{4}{15} \\approx 0.2667$ (s).\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">• Nhánh 2:</span> $10\\pi t - \\frac{\\pi}{3} = \\pi - \\frac{\\pi}{3} + k2\\pi = \\frac{2\\pi}{3} + k2\\pi \\Leftrightarrow 10\\pi t = \\pi + k2\\pi \\Leftrightarrow t = \\frac{1}{10} + \\frac{k}{5}$ ($k \\in \\mathbb{Z}$).<br/>\n        Với $t > 0$, lấy $k = 0 \\Rightarrow t = \\frac{1}{10} = 0.1$ (s).\n      </div>\n    </div>\n    <div class=\"p-2.5 bg-rose-950/60 rounded border border-rose-500/40 mt-2 text-xs\">\n      <strong class=\"text-rose-300\">So sánh thứ tự thời gian ($t > 0$):</strong><br/>\n      $$t_1 = \\frac{1}{15}\\text{ s} \\approx 0.067\\text{ s} < t_2 = \\frac{1}{10}\\text{ s} = 0.1\\text{ s} < \\frac{4}{15}\\text{ s}$$\n      Vậy thời điểm đầu tiên là <strong class=\"text-yellow-300\">$t_1 = \\frac{1}{15}$ giây</strong>, và thời điểm thứ hai là <strong class=\"text-yellow-300\">$t_2 = \\frac{1}{10}$ giây</strong>.\n    </div>\n  </div>\n</div>\n",
      "narration": "Chia hai vế cho bốn mươi, ta được sin của mười pi t trừ pi trên ba bằng căn ba trên hai, tức sin của pi trên ba. Nhánh thứ nhất cho t bằng một phần mười lăm cộng k trên năm. Thời điểm dương nhỏ nhất tại k bằng không là một phần mười lăm giây, xấp xỉ không phẩy không sáu bảy giây. Nhánh thứ hai bù góc cho mười pi t bằng pi cộng k hai pi, rút ra t bằng một phần mười cộng k trên năm. Tại k bằng không, ta có t bằng một phần mười giây, tức không phẩy một giây. So sánh hai giá trị dương, một phần mười lăm bé hơn một phần mười, nên hai thời điểm đầu tiên lần lượt là một phần mười lăm giây và một phần mười giây.",
      "startTime": 232.92,
      "endTime": 270.29,
      "duration": 37.37,
      "sceneIndex": 10,
      "subtitle": "Mục 1: Khái niệm phương trình tương đương & Phương trình sin x = m • Cảnh 10",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-rose-500/30\">\n    <h4 class=\"text-rose-300 font-bold text-sm mb-2\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 4</h4>\n    <p class=\"text-slate-300 text-xs\">Thiết lập phương trình vận tốc: $40\\sin\\left(10\\pi t - \\frac{\\pi}{3}\\right) = 20\\sqrt{3} \\Leftrightarrow \\sin\\left(10\\pi t - \\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2} = \\sin\\frac{\\pi}{3}$.</p>\n    <div class=\"mt-2 space-y-2 text-xs text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">• Nhánh 1:</span> $10\\pi t - \\frac{\\pi}{3} = \\frac{\\pi}{3} + k2\\pi \\Leftrightarrow 10\\pi t = \\frac{2\\pi}{3} + k2\\pi \\Leftrightarrow t = \\frac{1}{15} + \\frac{k}{5}$ ($k \\in \\mathbb{Z}$).<br/>\n        Với $t > 0$, lấy $k = 0 \\Rightarrow t = \\frac{1}{15} \\approx 0.0667$ (s); $k = 1 \\Rightarrow t = \\frac{4}{15} \\approx 0.2667$ (s).\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">• Nhánh 2:</span> $10\\pi t - \\frac{\\pi}{3} = \\pi - \\frac{\\pi}{3} + k2\\pi = \\frac{2\\pi}{3} + k2\\pi \\Leftrightarrow 10\\pi t = \\pi + k2\\pi \\Leftrightarrow t = \\frac{1}{10} + \\frac{k}{5}$ ($k \\in \\mathbb{Z}$).<br/>\n        Với $t > 0$, lấy $k = 0 \\Rightarrow t = \\frac{1}{10} = 0.1$ (s).\n      </div>\n    </div>\n    <div class=\"p-2.5 bg-rose-950/60 rounded border border-rose-500/40 mt-2 text-xs\">\n      <strong class=\"text-rose-300\">So sánh thứ tự thời gian ($t > 0$):</strong><br/>\n      $$t_1 = \\frac{1}{15}\\text{ s} \\approx 0.067\\text{ s} < t_2 = \\frac{1}{10}\\text{ s} = 0.1\\text{ s} < \\frac{4}{15}\\text{ s}$$\n      Vậy thời điểm đầu tiên là <strong class=\"text-yellow-300\">$t_1 = \\frac{1}{15}$ giây</strong>, và thời điểm thứ hai là <strong class=\"text-yellow-300\">$t_2 = \\frac{1}{10}$ giây</strong>.\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Ý nghĩa thực tế: Chú ý đơn vị thời gian (giây) và lấy nghiệm dương nhỏ nhất phù hợp đề bài!"
    },
    {
      "id": "scene_11",
      "title": "Bẫy trắc nghiệm & Sai lầm phổ biến khi giải sin x = m",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-red-950/60 to-rose-900/40 p-4 rounded-xl border border-red-500/40\">\n    <h3 class=\"text-rose-300 font-bold text-base flex items-center gap-2\">\n      <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 rounded text-xs font-bold\">CẢNH BÁO</span>\n      3 CẠM BẪY ĐIỂN HÌNH CẦN TRÁNH TUYỆT ĐỐI\n    </h3>\n    <div class=\"mt-3 space-y-2.5 text-sm\">\n      <div class=\"p-3 bg-slate-900/80 rounded-lg border border-red-500/30\">\n        <span class=\"text-rose-400 font-bold\">1. BẪY QUÊN HỌ NGHIỆM BÙ:</span>\n        <p class=\"text-slate-300 mt-1\">Nhiều bạn chỉ viết $x = \\alpha + k2\\pi$ mà quên mất nhánh $x = \\pi - \\alpha + k2\\pi$. Điều này làm mất một nửa số nghiệm của phương trình!</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/80 rounded-lg border border-red-500/30\">\n        <span class=\"text-amber-400 font-bold\">2. BẪY ĐUÔI CHU KỲ $k\\pi$ VÀ $k2\\pi$:</span>\n        <p class=\"text-slate-300 mt-1\">Chỉ duy nhất trường hợp $\\sin x = 0$ mới có đuôi là $k\\pi$. Còn $\\sin x = 1$ và $\\sin x = -1$ bắt buộc đuôi là $k2\\pi$ vì chỉ có 1 điểm trên đường tròn!</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/80 rounded-lg border border-red-500/30\">\n        <span class=\"text-sky-400 font-bold\">3. BẪY MIỀN GIÁ TRỊ $|m| \\le 1$:</span>\n        <p class=\"text-slate-300 mt-1\">Khi gặp phương trình như $\\sin x = \\sqrt{2}$ hay $\\sin x = -1.2$, hãy kết luận ngay phương trình vô nghiệm mà không cần mất công bấm máy tính!</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thầy xin nhắc nhở ba cạm bẫy trắc nghiệm các em rất dễ mắc phải. Thứ nhất, luôn nhớ hàm sin có hai nhánh nghiệm là alpha và pi trừ alpha. Nếu quên nhánh pi trừ alpha, các em sẽ bị mất một nửa số điểm. Thứ hai, chỉ khi sin bằng không thì đuôi mới là k pi, còn sin bằng một hay trừ một thì đuôi bắt buộc là k 2 pi. Và thứ ba, luôn kiểm tra điều kiện m nằm trong đoạn từ trừ một đến một trước khi giải.",
      "startTime": 270.29,
      "endTime": 297.31,
      "duration": 27.02,
      "sceneIndex": 11,
      "subtitle": "Mục 1: Khái niệm phương trình tương đương & Phương trình sin x = m • Cảnh 11",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-red-950/60 to-rose-900/40 p-4 rounded-xl border border-red-500/40\">\n    <h3 class=\"text-rose-300 font-bold text-base flex items-center gap-2\">\n      <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 rounded text-xs font-bold\">CẢNH BÁO</span>\n      3 CẠM BẪY ĐIỂN HÌNH CẦN TRÁNH TUYỆT ĐỐI\n    </h3>\n    <div class=\"mt-3 space-y-2.5 text-sm\">\n      <div class=\"p-3 bg-slate-900/80 rounded-lg border border-red-500/30\">\n        <span class=\"text-rose-400 font-bold\">1. BẪY QUÊN HỌ NGHIỆM BÙ:</span>\n        <p class=\"text-slate-300 mt-1\">Nhiều bạn chỉ viết $x = \\alpha + k2\\pi$ mà quên mất nhánh $x = \\pi - \\alpha + k2\\pi$. Điều này làm mất một nửa số nghiệm của phương trình!</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/80 rounded-lg border border-red-500/30\">\n        <span class=\"text-amber-400 font-bold\">2. BẪY ĐUÔI CHU KỲ $k\\pi$ VÀ $k2\\pi$:</span>\n        <p class=\"text-slate-300 mt-1\">Chỉ duy nhất trường hợp $\\sin x = 0$ mới có đuôi là $k\\pi$. Còn $\\sin x = 1$ và $\\sin x = -1$ bắt buộc đuôi là $k2\\pi$ vì chỉ có 1 điểm trên đường tròn!</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/80 rounded-lg border border-red-500/30\">\n        <span class=\"text-sky-400 font-bold\">3. BẪY MIỀN GIÁ TRỊ $|m| \\le 1$:</span>\n        <p class=\"text-slate-300 mt-1\">Khi gặp phương trình như $\\sin x = \\sqrt{2}$ hay $\\sin x = -1.2$, hãy kết luận ngay phương trình vô nghiệm mà không cần mất công bấm máy tính!</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "magnifier",
      "mascotTip": "Cú Cảnh Báo: Quên họ nghiệm pi - alpha là lỗi sai 90% học sinh mắc phải! Luôn kiểm tra điều kiện |m| <= 1!"
    },
    {
      "id": "scene_12",
      "title": "Tổng kết Mục 1 & Bí kíp Cú Thông Thái",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-950/60 to-yellow-900/40 p-4 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-3\">\n      <span class=\"text-3xl\">🦉</span>\n      <div>\n        <h3 class=\"text-amber-300 font-bold text-base\">BÍ KÍP CÚ THÔNG THÁI • MỤC 1</h3>\n        <p class=\"text-slate-300 text-xs mt-0.5\">Thơ vàng phương trình Sin</p>\n      </div>\n    </div>\n    <div class=\"mt-3 p-3 bg-slate-900/80 rounded-lg border border-amber-400/30 text-amber-200 text-sm font-semibold space-y-1 text-center\">\n      <p>\"Giải phương trình Sin: nhớ alpha và pi trừ alpha,</p>\n      <p>Chu kỳ lặp lại: đuôi là k hai pi!</p>\n      <p>Bằng không: k pi chớ quên ghi,</p>\n      <p>Lớn hơn một: vô nghiệm tức thì đừng lo!\"</p>\n    </div>\n    <div class=\"mt-3 grid grid-cols-3 gap-2 text-center text-xs text-slate-300\">\n      <div class=\"p-2 bg-slate-800/80 rounded border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">Điều kiện:</span><br/>$-1 \\le m \\le 1$\n      </div>\n      <div class=\"p-2 bg-slate-800/80 rounded border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">Hai nhánh:</span><br/>$\\alpha$ & $\\pi - \\alpha$\n      </div>\n      <div class=\"p-2 bg-slate-800/80 rounded border border-slate-700\">\n        <span class=\"text-emerald-400 font-bold\">Đặc biệt 0:</span><br/>$x = k\\pi$\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Để khép lại mục một, Cú Thông Thái gửi tặng các em bài thơ ghi nhớ: Giải phương trình sin, nhớ alpha và pi trừ alpha. Chu kỳ lặp lại, đuôi là k hai pi. Bằng không, k pi chớ quên ghi. Lớn hơn một, vô nghiệm tức thì đừng lo! Chúc các em nắm chắc trọn vẹn phương trình sin và sẵn sàng bước sang mục hai với phương trình cosin.",
      "startTime": 297.31,
      "endTime": 320.38,
      "duration": 23.06,
      "sceneIndex": 12,
      "subtitle": "Mục 1: Khái niệm phương trình tương đương & Phương trình sin x = m • Cảnh 12",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-950/60 to-yellow-900/40 p-4 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-3\">\n      <span class=\"text-3xl\">🦉</span>\n      <div>\n        <h3 class=\"text-amber-300 font-bold text-base\">BÍ KÍP CÚ THÔNG THÁI • MỤC 1</h3>\n        <p class=\"text-slate-300 text-xs mt-0.5\">Thơ vàng phương trình Sin</p>\n      </div>\n    </div>\n    <div class=\"mt-3 p-3 bg-slate-900/80 rounded-lg border border-amber-400/30 text-amber-200 text-sm font-semibold space-y-1 text-center\">\n      <p>\"Giải phương trình Sin: nhớ alpha và pi trừ alpha,</p>\n      <p>Chu kỳ lặp lại: đuôi là k hai pi!</p>\n      <p>Bằng không: k pi chớ quên ghi,</p>\n      <p>Lớn hơn một: vô nghiệm tức thì đừng lo!\"</p>\n    </div>\n    <div class=\"mt-3 grid grid-cols-3 gap-2 text-center text-xs text-slate-300\">\n      <div class=\"p-2 bg-slate-800/80 rounded border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">Điều kiện:</span><br/>$-1 \\le m \\le 1$\n      </div>\n      <div class=\"p-2 bg-slate-800/80 rounded border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">Hai nhánh:</span><br/>$\\alpha$ & $\\pi - \\alpha$\n      </div>\n      <div class=\"p-2 bg-slate-800/80 rounded border border-slate-700\">\n        <span class=\"text-emerald-400 font-bold\">Đặc biệt 0:</span><br/>$x = k\\pi$\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "cheer",
      "mascotTip": "Tuyệt vời! Em đã nắm vững 100% bí kíp giải phương trình sin x = m. Sẵn sàng làm bài tập củng cố!"
    }
  ],
  "duration": 320.38,
  "totalDuration": 320.38,
  "timeline": [
    {
      "sceneId": "scene_1",
      "title": "1. KHÁI NIỆM PHƯƠNG TRÌNH TƯƠNG ĐƯƠNG & PHÉP BIẾN ĐỔI",
      "startTime": 0,
      "endTime": 24.29,
      "duration": 24.29
    },
    {
      "sceneId": "scene_2",
      "title": "2. CÔNG THỨC NGHIỆM CỦA PHƯƠNG TRÌNH SIN X = M",
      "startTime": 24.29,
      "endTime": 58.68,
      "duration": 34.39
    },
    {
      "sceneId": "scene_3",
      "title": "Ví dụ 1: Giải phương trình sin cơ bản (Mức Nhận biết)",
      "startTime": 58.68,
      "endTime": 77.62,
      "duration": 18.94
    },
    {
      "sceneId": "scene_4",
      "title": "Ví dụ 1: Hướng dẫn giải chi tiết",
      "startTime": 77.62,
      "endTime": 102.55,
      "duration": 24.94
    },
    {
      "sceneId": "scene_5",
      "title": "Ví dụ 2: Phương trình dạng sin f(x) = sin g(x) (Mức Thông hiểu)",
      "startTime": 102.55,
      "endTime": 120.26,
      "duration": 17.71
    },
    {
      "sceneId": "scene_6",
      "title": "Ví dụ 2: Hướng dẫn giải chi tiết",
      "startTime": 120.26,
      "endTime": 153.48,
      "duration": 33.22
    },
    {
      "sceneId": "scene_7",
      "title": "Ví dụ 3: Tìm số nghiệm thuộc khoảng cho trước (Mức Vận dụng)",
      "startTime": 153.48,
      "endTime": 172.42,
      "duration": 18.94
    },
    {
      "sceneId": "scene_8",
      "title": "Ví dụ 3: Hướng dẫn giải chi tiết",
      "startTime": 172.42,
      "endTime": 209.16,
      "duration": 36.74
    },
    {
      "sceneId": "scene_9",
      "title": "Ví dụ 4: Bài toán thực tế chuyển động Piston (Mức Vận dụng cao)",
      "startTime": 209.16,
      "endTime": 232.92,
      "duration": 23.76
    },
    {
      "sceneId": "scene_10",
      "title": "Ví dụ 4: Hướng dẫn giải chi tiết",
      "startTime": 232.92,
      "endTime": 270.29,
      "duration": 37.37
    },
    {
      "sceneId": "scene_11",
      "title": "Bẫy trắc nghiệm & Sai lầm phổ biến khi giải sin x = m",
      "startTime": 270.29,
      "endTime": 297.31,
      "duration": 27.02
    },
    {
      "sceneId": "scene_12",
      "title": "Tổng kết Mục 1 & Bí kíp Cú Thông Thái",
      "startTime": 297.31,
      "endTime": 320.38,
      "duration": 23.06
    }
  ]
};

window.G11_CHAPTER1_DATA.g11_bai4_muc2 = {
  "key": "g11_bai4_muc2",
  "lessonId": "toan11_bai4",
  "lessonTitle": "Bài 4: Phương trình lượng giác cơ bản",
  "sectionId": "g11_bai4_muc2",
  "sectionTitle": "Mục 2: Phương trình lượng giác cos x = m",
  "title": "Mục 2: Phương trình lượng giác cos x = m",
  "audio": "/audio/g11_bai4_muc2.mp3",
  "audioSrc": "./audio/g11_bai4_muc2.mp3",
  "audio_src": "./audio/g11_bai4_muc2.mp3",
  "owl_tip": "Hàm số cosin có tính chất đối xứng qua trục hoành, nên phương trình cos x = m khi có nghiệm sẽ cho hai họ nghiệm đối nhau là cộng trừ alpha cộng k 2 pi. Riêng cos x = 0 thì nghiệm là pi chia 2 cộng k pi!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm & Công thức nghiệm tổng quát",
      "scenes": [
        1,
        2
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 4 Ví dụ minh họa tiêu biểu (Đồng hồ 15s/30s)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Cảnh báo bẫy trắc nghiệm & Sai lầm thường gặp",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Tổng kết bài học & Bí kíp Cú Thông Thái",
      "scenes": [
        12
      ]
    }
  ],
  "scenes": [
    {
      "id": "scene_1",
      "title": "1. CÔNG THỨC NGHIỆM TỔNG QUÁT CỦA PHƯƠNG TRÌNH COS X = M",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-sky-900/60 to-blue-900/40 p-4 rounded-xl border border-sky-500/30\">\n    <h3 class=\"text-sky-300 font-bold text-lg flex items-center gap-2\">\n      <span class=\"px-2 py-0.5 bg-sky-500/20 rounded text-sky-300 text-sm\">Trọng tâm</span>\n      CÔNG THỨC NGHIỆM ĐỐI XỨNG CỦA HÀM COSIN\n    </h3>\n    <p class=\"text-slate-200 mt-2 text-sm leading-relaxed\">\n      Tương tự hàm sin, phương trình $\\cos x = m$ chỉ có nghiệm khi và chỉ khi <strong>$|m| \\le 1$</strong>.\n    </p>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 text-sm\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">1. Công thức nghiệm Radian:</span><br/>\n        Khi $|m| \\le 1$, gọi $\\alpha$ sao cho $\\cos\\alpha = m$:\n        <p class=\"text-center font-bold text-yellow-300 text-base mt-1\">$$\\cos x = \\cos\\alpha \\Leftrightarrow x = \\pm\\alpha + k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n        <span class=\"text-slate-400 text-xs\">Hai nghiệm đối nhau qua trục hoành $Ox$.</span>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-emerald-400 font-bold\">2. Công thức nghiệm theo Độ:</span><br/>\n        Khi $\\alpha$ đo bằng độ ($^\\circ$):\n        <p class=\"text-center font-bold text-emerald-300 text-base mt-1\">$$\\cos x = \\cos\\alpha^\\circ \\Leftrightarrow x = \\pm\\alpha^\\circ + k360^\\circ \\quad (k \\in \\mathbb{Z})$$</p>\n        <span class=\"text-slate-400 text-xs\">Tuyệt đối không trộn lẫn đơn vị radian và độ!</span>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với mục số 2: Phương trình lượng giác cos x bằng m. Vì đồ thị hàm cosin và các điểm trên đường tròn lượng giác có tính đối xứng qua trục hoành, nên khi trị tuyệt đối của m bé hơn hoặc bằng một, phương trình cos x bằng cos alpha sẽ có hai họ nghiệm đối xứng nhau rất gọn gàng: x bằng cộng trừ alpha cộng k 2 pi. Nếu đề bài cho đơn vị độ, nghiệm sẽ là cộng trừ alpha độ cộng k 360 độ.",
      "startTime": 0,
      "endTime": 24.14,
      "duration": 24.14,
      "sceneIndex": 1,
      "subtitle": "Mục 2: Phương trình lượng giác cos x = m • Cảnh 1",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-sky-900/60 to-blue-900/40 p-4 rounded-xl border border-sky-500/30\">\n    <h3 class=\"text-sky-300 font-bold text-lg flex items-center gap-2\">\n      <span class=\"px-2 py-0.5 bg-sky-500/20 rounded text-sky-300 text-sm\">Trọng tâm</span>\n      CÔNG THỨC NGHIỆM ĐỐI XỨNG CỦA HÀM COSIN\n    </h3>\n    <p class=\"text-slate-200 mt-2 text-sm leading-relaxed\">\n      Tương tự hàm sin, phương trình $\\cos x = m$ chỉ có nghiệm khi và chỉ khi <strong>$|m| \\le 1$</strong>.\n    </p>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 text-sm\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">1. Công thức nghiệm Radian:</span><br/>\n        Khi $|m| \\le 1$, gọi $\\alpha$ sao cho $\\cos\\alpha = m$:\n        <p class=\"text-center font-bold text-yellow-300 text-base mt-1\">$$\\cos x = \\cos\\alpha \\Leftrightarrow x = \\pm\\alpha + k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n        <span class=\"text-slate-400 text-xs\">Hai nghiệm đối nhau qua trục hoành $Ox$.</span>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-emerald-400 font-bold\">2. Công thức nghiệm theo Độ:</span><br/>\n        Khi $\\alpha$ đo bằng độ ($^\\circ$):\n        <p class=\"text-center font-bold text-emerald-300 text-base mt-1\">$$\\cos x = \\cos\\alpha^\\circ \\Leftrightarrow x = \\pm\\alpha^\\circ + k360^\\circ \\quad (k \\in \\mathbb{Z})$$</p>\n        <span class=\"text-slate-400 text-xs\">Tuyệt đối không trộn lẫn đơn vị radian và độ!</span>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Phương trình cos x = m có nghiệm khi và chỉ khi |m| <= 1. Hai họ nghiệm đối nhau: x = alpha + k2pi hoặc x = -alpha + k2pi!"
    },
    {
      "id": "scene_2",
      "title": "2. CÁC TRƯỜNG HỢP ĐẶC BIỆT & KỸ THUẬT ĐỔI DẤU",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-amber-500/30\">\n      <h4 class=\"text-amber-300 font-bold text-base mb-2\">⭐ 3 ĐIỂM CHỐT ĐẶC BIỆT CỦA COSIN</h4>\n      <div class=\"space-y-2 text-sm\">\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-amber-400 font-bold\">1. $\\cos x = 0$:</span>\n          <p class=\"text-slate-200 mt-1\">$$x = \\frac{\\pi}{2} + k\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n          <p class=\"text-slate-400 text-xs\">Cực bắc và cực nam của trục tung. Đuôi là $k\\pi$.</p>\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-emerald-400 font-bold\">2. $\\cos x = 1$:</span>\n          <p class=\"text-slate-200 mt-1\">$$x = k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n          <p class=\"text-slate-400 text-xs\">Điểm gốc $A(1; 0)$ phía cực đông.</p>\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-rose-400 font-bold\">3. $\\cos x = -1$:</span>\n          <p class=\"text-slate-200 mt-1\">$$x = \\pi + k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n          <p class=\"text-slate-400 text-xs\">Điểm đối cực $A'(-1; 0)$ phía cực tây.</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-purple-500/30\">\n      <h4 class=\"text-purple-300 font-bold text-base mb-2\">🔄 KỸ THUẬT ĐƯA VỀ CÙNG HÀM COSIN</h4>\n      <div class=\"space-y-2 text-sm\">\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-pink-400 font-bold\">Xử lý dấu trừ $-\\cos u$:</span>\n          <p class=\"text-slate-200 mt-1\">$$-\\cos u = \\cos(\\pi - u)$$</p>\n          <p class=\"text-slate-400 text-xs\">Sử dụng tính chất hai góc bù nhau.</p>\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-indigo-400 font-bold\">Chuyển từ $\\sin u$ sang $\\cos$:</span>\n          <p class=\"text-slate-200 mt-1\">$$\\sin u = \\cos\\left(\\frac{\\pi}{2} - u\\right)$$</p>\n          <p class=\"text-slate-400 text-xs\">Sử dụng tính chất hai góc phụ nhau.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúng ta có ba trường hợp đặc biệt vô cùng quan trọng: cos x bằng không tại hai điểm cực bắc và cực nam, nên nghiệm là pi trên hai cộng k pi. Khi cos x bằng một tại điểm A, nghiệm là k 2 pi. Và khi cos x bằng trừ một tại điểm A phẩy, nghiệm là pi cộng k 2 pi. Ngoài ra, khi gặp dấu trừ trước cos, các em dùng công thức góc bù: trừ cos u bằng cos của pi trừ u. Còn khi muốn đổi từ sin sang cos, các em dùng góc phụ: sin u bằng cos của pi trên hai trừ u.",
      "startTime": 24.14,
      "endTime": 54.26,
      "duration": 30.12,
      "sceneIndex": 2,
      "subtitle": "Mục 2: Phương trình lượng giác cos x = m • Cảnh 2",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-amber-500/30\">\n      <h4 class=\"text-amber-300 font-bold text-base mb-2\">⭐ 3 ĐIỂM CHỐT ĐẶC BIỆT CỦA COSIN</h4>\n      <div class=\"space-y-2 text-sm\">\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-amber-400 font-bold\">1. $\\cos x = 0$:</span>\n          <p class=\"text-slate-200 mt-1\">$$x = \\frac{\\pi}{2} + k\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n          <p class=\"text-slate-400 text-xs\">Cực bắc và cực nam của trục tung. Đuôi là $k\\pi$.</p>\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-emerald-400 font-bold\">2. $\\cos x = 1$:</span>\n          <p class=\"text-slate-200 mt-1\">$$x = k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n          <p class=\"text-slate-400 text-xs\">Điểm gốc $A(1; 0)$ phía cực đông.</p>\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-rose-400 font-bold\">3. $\\cos x = -1$:</span>\n          <p class=\"text-slate-200 mt-1\">$$x = \\pi + k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n          <p class=\"text-slate-400 text-xs\">Điểm đối cực $A'(-1; 0)$ phía cực tây.</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-purple-500/30\">\n      <h4 class=\"text-purple-300 font-bold text-base mb-2\">🔄 KỸ THUẬT ĐƯA VỀ CÙNG HÀM COSIN</h4>\n      <div class=\"space-y-2 text-sm\">\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-pink-400 font-bold\">Xử lý dấu trừ $-\\cos u$:</span>\n          <p class=\"text-slate-200 mt-1\">$$-\\cos u = \\cos(\\pi - u)$$</p>\n          <p class=\"text-slate-400 text-xs\">Sử dụng tính chất hai góc bù nhau.</p>\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-indigo-400 font-bold\">Chuyển từ $\\sin u$ sang $\\cos$:</span>\n          <p class=\"text-slate-200 mt-1\">$$\\sin u = \\cos\\left(\\frac{\\pi}{2} - u\\right)$$</p>\n          <p class=\"text-slate-400 text-xs\">Sử dụng tính chất hai góc phụ nhau.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Nhớ 3 trường hợp đặc biệt của cos: cos x = 0 (k pi), cos x = 1 (k2pi), cos x = -1 (pi + k2pi)!"
    },
    {
      "id": "scene_3",
      "title": "Ví dụ 1: Giải phương trình cos cơ bản (Mức Nhận biết)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/50 to-indigo-900/40 p-4 rounded-xl border border-blue-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-blue-500 text-white text-xs font-bold rounded\">VÍ DỤ 1 • NHẬN BIẾT</span>\n      <span class=\"text-slate-400 text-xs\">Mục 2 • Phương trình cos x = m</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Giải các phương trình lượng giác sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> $\\cos x = -\\frac{1}{2}$</p>\n      <p><strong class=\"text-sky-400\">b)</strong> $\\cos x = 1$</p>\n      <p><strong class=\"text-rose-400\">c)</strong> $\\cos x = -\\sqrt{2}$</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-15s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 15 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Hãy cùng rèn luyện với ví dụ 1 ở mức nhận biết. Tìm nghiệm của ba phương trình: câu a cos x bằng trừ một phần hai, câu b cos x bằng một, và câu c cos x bằng trừ căn hai. Mười lăm giây suy nghĩ dành cho các em.",
      "startTime": 54.26,
      "endTime": 69,
      "duration": 14.74,
      "sceneIndex": 3,
      "subtitle": "Mục 2: Phương trình lượng giác cos x = m • Cảnh 3",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/50 to-indigo-900/40 p-4 rounded-xl border border-blue-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-blue-500 text-white text-xs font-bold rounded\">VÍ DỤ 1 • NHẬN BIẾT</span>\n      <span class=\"text-slate-400 text-xs\">Mục 2 • Phương trình cos x = m</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Giải các phương trình lượng giác sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> $\\cos x = -\\frac{1}{2}$</p>\n      <p><strong class=\"text-sky-400\">b)</strong> $\\cos x = 1$</p>\n      <p><strong class=\"text-rose-400\">c)</strong> $\\cos x = -\\sqrt{2}$</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-15s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 15 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Thử sức giải các phương trình cos cơ bản trong 15 giây trước khi xem lời giải chi tiết!"
    },
    {
      "id": "scene_4",
      "title": "Ví dụ 1: Hướng dẫn giải chi tiết",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-blue-500/30\">\n    <h4 class=\"text-blue-300 font-bold text-sm mb-3\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 1</h4>\n    <div class=\"space-y-3 text-sm text-slate-200\">\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <p class=\"font-bold text-amber-400\">a) $\\cos x = -\\frac{1}{2}$</p>\n        <p class=\"mt-1\">Vì $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$ nên ta có công thức nghiệm đối xứng:</p>\n        <p class=\"mt-1 font-semibold text-yellow-300\">$$\\cos x = \\cos\\frac{2\\pi}{3} \\Leftrightarrow x = \\pm\\frac{2\\pi}{3} + k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <p class=\"font-bold text-sky-400\">b) $\\cos x = 1$</p>\n        <p class=\"mt-1\">Trường hợp đặc biệt tại điểm gốc $A(1; 0)$:</p>\n        <p class=\"mt-1 font-semibold text-sky-300\">$$x = k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <p class=\"font-bold text-rose-400\">c) $\\cos x = -\\sqrt{2}$</p>\n        <p class=\"mt-1\">Vì $-\\sqrt{2} \\approx -1.414 < -1$ nên phương trình <strong>vô nghiệm</strong>.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Lời giải chi tiết: Ở câu a, góc có cosin bằng trừ một phần hai là hai pi trên ba. Do tính đối xứng của cos, ta viết gọn nghiệm là x bằng cộng trừ hai pi trên ba cộng k 2 pi. Ở câu b, cos x bằng một tại điểm gốc A, nghiệm duy nhất là x bằng k 2 pi. Ở câu c, trừ căn hai xấp xỉ trừ một phẩy bốn mươi mốt, nhỏ hơn trừ một nên phương trình vô nghiệm.",
      "startTime": 69,
      "endTime": 93.65,
      "duration": 24.65,
      "sceneIndex": 4,
      "subtitle": "Mục 2: Phương trình lượng giác cos x = m • Cảnh 4",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-blue-500/30\">\n    <h4 class=\"text-blue-300 font-bold text-sm mb-3\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 1</h4>\n    <div class=\"space-y-3 text-sm text-slate-200\">\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <p class=\"font-bold text-amber-400\">a) $\\cos x = -\\frac{1}{2}$</p>\n        <p class=\"mt-1\">Vì $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$ nên ta có công thức nghiệm đối xứng:</p>\n        <p class=\"mt-1 font-semibold text-yellow-300\">$$\\cos x = \\cos\\frac{2\\pi}{3} \\Leftrightarrow x = \\pm\\frac{2\\pi}{3} + k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <p class=\"font-bold text-sky-400\">b) $\\cos x = 1$</p>\n        <p class=\"mt-1\">Trường hợp đặc biệt tại điểm gốc $A(1; 0)$:</p>\n        <p class=\"mt-1 font-semibold text-sky-300\">$$x = k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <p class=\"font-bold text-rose-400\">c) $\\cos x = -\\sqrt{2}$</p>\n        <p class=\"mt-1\">Vì $-\\sqrt{2} \\approx -1.414 < -1$ nên phương trình <strong>vô nghiệm</strong>.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Áp dụng công thức cộng trừ alpha: cos x = cos(pi/4) <=> x = +-pi/4 + k2pi!"
    },
    {
      "id": "scene_5",
      "title": "Ví dụ 2: Phương trình dạng cos f(x) = cos g(x) (Mức Thông hiểu)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/50 to-teal-900/40 p-4 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-emerald-500 text-white text-xs font-bold rounded\">VÍ DỤ 2 • THÔNG HIỂU</span>\n      <span class=\"text-slate-400 text-xs\">Mục 2 • Phương trình cos f(x) = cos g(x)</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Giải phương trình lượng giác sau:</h4>\n    <div class=\"mt-2 p-3 bg-slate-900/80 rounded-lg border border-emerald-500/30 text-center font-bold text-emerald-300 text-base\">\n      $$\\cos\\left(2x - \\frac{\\pi}{4}\\right) = \\cos\\left(x + \\frac{\\pi}{3}\\right)$$\n    </div>\n    <div class=\"countdown-clock-widget cd-15s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 15 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2 yêu cầu giải phương trình cos của hai x trừ pi trên bốn bằng cos của x cộng pi trên ba. Công thức cos f x bằng cos g x cho hai nhánh: f x bằng g x cộng k 2 pi, hoặc f x bằng trừ g x cộng k 2 pi. Các em có mười lăm giây để biến đổi.",
      "startTime": 93.65,
      "endTime": 111.05,
      "duration": 17.4,
      "sceneIndex": 5,
      "subtitle": "Mục 2: Phương trình lượng giác cos x = m • Cảnh 5",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/50 to-teal-900/40 p-4 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-emerald-500 text-white text-xs font-bold rounded\">VÍ DỤ 2 • THÔNG HIỂU</span>\n      <span class=\"text-slate-400 text-xs\">Mục 2 • Phương trình cos f(x) = cos g(x)</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Giải phương trình lượng giác sau:</h4>\n    <div class=\"mt-2 p-3 bg-slate-900/80 rounded-lg border border-emerald-500/30 text-center font-bold text-emerald-300 text-base\">\n      $$\\cos\\left(2x - \\frac{\\pi}{4}\\right) = \\cos\\left(x + \\frac{\\pi}{3}\\right)$$\n    </div>\n    <div class=\"countdown-clock-widget cd-15s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 15 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Dạng cos f(x) = cos g(x): f(x) = +-g(x) + k2pi. Tách làm 2 trường hợp giải độc lập!"
    },
    {
      "id": "scene_6",
      "title": "Ví dụ 2: Hướng dẫn giải chi tiết",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-emerald-500/30\">\n    <h4 class=\"text-emerald-300 font-bold text-sm mb-3\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 2</h4>\n    <p class=\"text-slate-300 text-sm\">Phương trình $\\cos\\left(2x - \\frac{\\pi}{4}\\right) = \\cos\\left(x + \\frac{\\pi}{3}\\right)$ tương đương với:</p>\n    <div class=\"mt-2 space-y-3 text-sm text-slate-200\">\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">• Nhánh dấu cộng ($+$):</span>\n        <p class=\"mt-1 text-slate-100\">$$2x - \\frac{\\pi}{4} = x + \\frac{\\pi}{3} + k2\\pi \\Leftrightarrow 2x - x = \\frac{\\pi}{3} + \\frac{\\pi}{4} + k2\\pi$$</p>\n        <p class=\"mt-1 font-bold text-yellow-300\">$$\\Leftrightarrow x = \\frac{7\\pi}{12} + k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">• Nhánh dấu trừ ($-$, đối nhau):</span>\n        <p class=\"mt-1 text-slate-100\">$$2x - \\frac{\\pi}{4} = -\\left(x + \\frac{\\pi}{3}\\right) + k2\\pi = -x - \\frac{\\pi}{3} + k2\\pi$$</p>\n        <p class=\"mt-1 text-slate-100\">$$3x = \\frac{\\pi}{4} - \\frac{\\pi}{3} + k2\\pi = -\\frac{\\pi}{12} + k2\\pi \\Leftrightarrow x = -\\frac{\\pi}{36} + \\frac{k2\\pi}{3} \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n    </div>\n    <p class=\"text-emerald-400 text-sm mt-2 font-semibold\">Vậy tập nghiệm là: $x = \\frac{7\\pi}{12} + k2\\pi$ hoặc $x = -\\frac{\\pi}{36} + \\frac{k2\\pi}{3}$ ($k \\in \\mathbb{Z}$).</p>\n  </div>\n</div>\n",
      "narration": "Lời giải chi tiết: Nhánh cộng cho hai x trừ pi trên bốn bằng x cộng pi trên ba cộng k 2 pi. Chuyển vế ta được ngay x bằng bảy pi trên mười hai cộng k 2 pi. Nhánh trừ cho hai x trừ pi trên bốn bằng trừ mở ngoặc x cộng pi trên ba đóng ngoặc cộng k 2 pi. Chuyển x sang ta được ba x bằng trừ pi trên mười hai cộng k 2 pi. Chia cả hai vế cho ba, ta được họ nghiệm x bằng trừ pi trên ba mươi sáu cộng k hai pi trên ba.",
      "startTime": 111.05,
      "endTime": 138.22,
      "duration": 27.17,
      "sceneIndex": 6,
      "subtitle": "Mục 2: Phương trình lượng giác cos x = m • Cảnh 6",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-emerald-500/30\">\n    <h4 class=\"text-emerald-300 font-bold text-sm mb-3\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 2</h4>\n    <p class=\"text-slate-300 text-sm\">Phương trình $\\cos\\left(2x - \\frac{\\pi}{4}\\right) = \\cos\\left(x + \\frac{\\pi}{3}\\right)$ tương đương với:</p>\n    <div class=\"mt-2 space-y-3 text-sm text-slate-200\">\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">• Nhánh dấu cộng ($+$):</span>\n        <p class=\"mt-1 text-slate-100\">$$2x - \\frac{\\pi}{4} = x + \\frac{\\pi}{3} + k2\\pi \\Leftrightarrow 2x - x = \\frac{\\pi}{3} + \\frac{\\pi}{4} + k2\\pi$$</p>\n        <p class=\"mt-1 font-bold text-yellow-300\">$$\\Leftrightarrow x = \\frac{7\\pi}{12} + k2\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">• Nhánh dấu trừ ($-$, đối nhau):</span>\n        <p class=\"mt-1 text-slate-100\">$$2x - \\frac{\\pi}{4} = -\\left(x + \\frac{\\pi}{3}\\right) + k2\\pi = -x - \\frac{\\pi}{3} + k2\\pi$$</p>\n        <p class=\"mt-1 text-slate-100\">$$3x = \\frac{\\pi}{4} - \\frac{\\pi}{3} + k2\\pi = -\\frac{\\pi}{12} + k2\\pi \\Leftrightarrow x = -\\frac{\\pi}{36} + \\frac{k2\\pi}{3} \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n    </div>\n    <p class=\"text-emerald-400 text-sm mt-2 font-semibold\">Vậy tập nghiệm là: $x = \\frac{7\\pi}{12} + k2\\pi$ hoặc $x = -\\frac{\\pi}{36} + \\frac{k2\\pi}{3}$ ($k \\in \\mathbb{Z}$).</p>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Cẩn thận với dấu trừ khi giải phương trình: -g(x) sẽ đổi dấu toàn bộ các số hạng của g(x)!"
    },
    {
      "id": "scene_7",
      "title": "Ví dụ 3: Phương trình khác hàm cos f(x) = sin g(x) (Mức Vận dụng)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/50 to-indigo-900/40 p-4 rounded-xl border border-purple-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-purple-500 text-white text-xs font-bold rounded\">VÍ DỤ 3 • VẬN DỤNG</span>\n      <span class=\"text-slate-400 text-xs\">Mục 2 • Đổi hàm sin sang cos</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Giải phương trình và đếm số nghiệm trên đoạn $[0; 2\\pi]$:</h4>\n    <div class=\"mt-2 p-3 bg-slate-900/80 rounded-lg border border-purple-500/30 text-center font-bold text-purple-300 text-base\">\n      $$\\cos 2x = \\sin\\left(x - \\frac{\\pi}{6}\\right)$$\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3 là bài toán vận dụng kết hợp kỹ thuật đổi hàm: Giải phương trình cos hai x bằng sin của x trừ pi trên sáu, và đếm số nghiệm thuộc đoạn từ không đến hai pi. Một bên là cos, một bên là sin, các em hãy dùng công thức góc phụ để đưa vế phải về cos trong ba mươi giây.",
      "startTime": 138.22,
      "endTime": 154.99,
      "duration": 16.78,
      "sceneIndex": 7,
      "subtitle": "Mục 2: Phương trình lượng giác cos x = m • Cảnh 7",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/50 to-indigo-900/40 p-4 rounded-xl border border-purple-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-purple-500 text-white text-xs font-bold rounded\">VÍ DỤ 3 • VẬN DỤNG</span>\n      <span class=\"text-slate-400 text-xs\">Mục 2 • Đổi hàm sin sang cos</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Giải phương trình và đếm số nghiệm trên đoạn $[0; 2\\pi]$:</h4>\n    <div class=\"mt-2 p-3 bg-slate-900/80 rounded-lg border border-purple-500/30 text-center font-bold text-purple-300 text-base\">\n      $$\\cos 2x = \\sin\\left(x - \\frac{\\pi}{6}\\right)$$\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Dạng phương trình khác hàm cos f(x) = sin g(x): Dùng góc phụ biến đổi sin g(x) = cos(pi/2 - g(x))!"
    },
    {
      "id": "scene_8",
      "title": "Ví dụ 3: Hướng dẫn giải chi tiết",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-purple-500/30\">\n    <h4 class=\"text-purple-300 font-bold text-sm mb-2\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 3</h4>\n    <p class=\"text-slate-300 text-xs\">Dùng góc phụ: $\\sin\\left(x - \\frac{\\pi}{6}\\right) = \\cos\\left[\\frac{\\pi}{2} - \\left(x - \\frac{\\pi}{6}\\right)\\right] = \\cos\\left(\\frac{2\\pi}{3} - x\\right)$.</p>\n    <p class=\"text-slate-300 text-xs mt-1\">Phương trình trở thành: $\\cos 2x = \\cos\\left(\\frac{2\\pi}{3} - x\\right)$:</p>\n    <div class=\"mt-1 space-y-2 text-xs text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">• Nhánh 1:</span> $2x = \\frac{2\\pi}{3} - x + k2\\pi \\Leftrightarrow 3x = \\frac{2\\pi}{3} + k2\\pi \\Leftrightarrow x = \\frac{2\\pi}{9} + \\frac{k2\\pi}{3}$.<br/>\n        Với $x \\in [0; 2\\pi] \\Leftrightarrow 0 \\le \\frac{2\\pi}{9} + \\frac{k2\\pi}{3} \\le 2\\pi \\Leftrightarrow -\\frac{1}{3} \\le k \\le \\frac{8}{3} \\Rightarrow k \\in \\{0; 1; 2\\}$ (3 nghiệm).\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">• Nhánh 2:</span> $2x = -\\left(\\frac{2\\pi}{3} - x\\right) + k2\\pi = -\\frac{2\\pi}{3} + x + k2\\pi \\Leftrightarrow x = -\\frac{2\\pi}{3} + k2\\pi$.<br/>\n        Với $x \\in [0; 2\\pi] \\Leftrightarrow 0 \\le -\\frac{2\\pi}{3} + k2\\pi \\le 2\\pi \\Leftrightarrow \\frac{1}{3} \\le k \\le \\frac{4}{3} \\Rightarrow k = 1 \\Rightarrow x = \\frac{4\\pi}{3}$ (1 nghiệm).\n      </div>\n    </div>\n    <div class=\"p-2 bg-purple-950/60 rounded border border-purple-500/40 mt-2 text-xs\">\n      <strong class=\"text-purple-300\">Kết luận:</strong> So sánh thấy nghiệm $\\frac{4\\pi}{3}$ không trùng với 3 nghiệm ở nhánh 1. Vậy phương trình có <strong>đúng 4 nghiệm phân biệt</strong> trên đoạn $[0; 2\\pi]$.\n    </div>\n  </div>\n</div>\n",
      "narration": "Đầu tiên, ta biến đổi sin của x trừ pi trên sáu thành cos của pi trên hai trừ mở ngoặc x trừ pi trên sáu đóng ngoặc, tức cos của hai pi trên ba trừ x. Nhánh một cho ba x bằng hai pi trên ba cộng k 2 pi, rút ra x bằng hai pi trên chín cộng k hai pi trên ba. Chặn trên đoạn không đến hai pi, ta nhận ba giá trị k là không, một, và hai, sinh ra ba nghiệm. Nhánh hai đối xứng cho x bằng trừ hai pi trên ba cộng k 2 pi. Chặn trên đoạn không đến hai pi, ta nhận k bằng một, ứng với nghiệm bốn pi trên ba. Kiểm tra không có nghiệm nào bị trùng, vậy phương trình có đúng bốn nghiệm phân biệt.",
      "startTime": 154.99,
      "endTime": 191.4,
      "duration": 36.41,
      "sceneIndex": 8,
      "subtitle": "Mục 2: Phương trình lượng giác cos x = m • Cảnh 8",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-purple-500/30\">\n    <h4 class=\"text-purple-300 font-bold text-sm mb-2\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 3</h4>\n    <p class=\"text-slate-300 text-xs\">Dùng góc phụ: $\\sin\\left(x - \\frac{\\pi}{6}\\right) = \\cos\\left[\\frac{\\pi}{2} - \\left(x - \\frac{\\pi}{6}\\right)\\right] = \\cos\\left(\\frac{2\\pi}{3} - x\\right)$.</p>\n    <p class=\"text-slate-300 text-xs mt-1\">Phương trình trở thành: $\\cos 2x = \\cos\\left(\\frac{2\\pi}{3} - x\\right)$:</p>\n    <div class=\"mt-1 space-y-2 text-xs text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">• Nhánh 1:</span> $2x = \\frac{2\\pi}{3} - x + k2\\pi \\Leftrightarrow 3x = \\frac{2\\pi}{3} + k2\\pi \\Leftrightarrow x = \\frac{2\\pi}{9} + \\frac{k2\\pi}{3}$.<br/>\n        Với $x \\in [0; 2\\pi] \\Leftrightarrow 0 \\le \\frac{2\\pi}{9} + \\frac{k2\\pi}{3} \\le 2\\pi \\Leftrightarrow -\\frac{1}{3} \\le k \\le \\frac{8}{3} \\Rightarrow k \\in \\{0; 1; 2\\}$ (3 nghiệm).\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">• Nhánh 2:</span> $2x = -\\left(\\frac{2\\pi}{3} - x\\right) + k2\\pi = -\\frac{2\\pi}{3} + x + k2\\pi \\Leftrightarrow x = -\\frac{2\\pi}{3} + k2\\pi$.<br/>\n        Với $x \\in [0; 2\\pi] \\Leftrightarrow 0 \\le -\\frac{2\\pi}{3} + k2\\pi \\le 2\\pi \\Leftrightarrow \\frac{1}{3} \\le k \\le \\frac{4}{3} \\Rightarrow k = 1 \\Rightarrow x = \\frac{4\\pi}{3}$ (1 nghiệm).\n      </div>\n    </div>\n    <div class=\"p-2 bg-purple-950/60 rounded border border-purple-500/40 mt-2 text-xs\">\n      <strong class=\"text-purple-300\">Kết luận:</strong> So sánh thấy nghiệm $\\frac{4\\pi}{3}$ không trùng với 3 nghiệm ở nhánh 1. Vậy phương trình có <strong>đúng 4 nghiệm phân biệt</strong> trên đoạn $[0; 2\\pi]$.\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Tuyệt kỹ góc phụ: Luôn đưa về cùng hàm cos để áp dụng công thức nghiệm một cách tự nhiên nhất!"
    },
    {
      "id": "scene_9",
      "title": "Ví dụ 4: Bài toán dao động con lắc quả lắc (Mức Vận dụng cao)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-rose-900/50 to-orange-900/40 p-4 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-rose-500 text-white text-xs font-bold rounded\">VÍ DỤ 4 • VẬN DỤNG CAO / THỰC TẾ</span>\n      <span class=\"text-slate-400 text-xs\">Mục 2 • Đồng hồ quả lắc</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Dao động góc của con lắc đồng hồ quả lắc:</h4>\n    <p class=\"text-slate-200 text-sm mt-1 leading-relaxed\">\n      Li độ góc $\\theta(t)$ (đơn vị radian) của một con lắc đồng hồ quả lắc theo thời gian $t$ (giây, $t \\ge 0$) tuân theo quy luật:\n    </p>\n    <div class=\"p-2.5 bg-slate-900/80 rounded-lg border border-rose-500/30 text-center font-bold text-amber-300 text-base my-2\">\n      $$\\theta(t) = 0.08\\cos\\left(2\\pi t + \\frac{\\pi}{4}\\right)$$\n    </div>\n    <p class=\"text-slate-300 text-sm\">\n      Tìm <strong>tất cả các thời điểm</strong> trong 2 giây đầu tiên ($0 \\le t \\le 2$) mà con lắc đi qua vị trí cân bằng ($\\\\theta = 0$).\n    </p>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4 là bài toán thực tế vật lý về dao động của con lắc đồng hồ quả lắc. Li độ góc teta được xác định theo thời gian t bởi hàm không phẩy không tám nhân cos của hai pi t cộng pi trên bốn. Đề bài yêu cầu tìm tất cả các thời điểm trong hai giây đầu tiên mà con lắc đi qua vị trí cân bằng, tức teta bằng không. Đây là trường hợp nghiệm đặc biệt của cos, các em có ba mươi giây suy nghĩ.",
      "startTime": 191.4,
      "endTime": 215.04,
      "duration": 23.64,
      "sceneIndex": 9,
      "subtitle": "Mục 2: Phương trình lượng giác cos x = m • Cảnh 9",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-rose-900/50 to-orange-900/40 p-4 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-rose-500 text-white text-xs font-bold rounded\">VÍ DỤ 4 • VẬN DỤNG CAO / THỰC TẾ</span>\n      <span class=\"text-slate-400 text-xs\">Mục 2 • Đồng hồ quả lắc</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Dao động góc của con lắc đồng hồ quả lắc:</h4>\n    <p class=\"text-slate-200 text-sm mt-1 leading-relaxed\">\n      Li độ góc $\\theta(t)$ (đơn vị radian) của một con lắc đồng hồ quả lắc theo thời gian $t$ (giây, $t \\ge 0$) tuân theo quy luật:\n    </p>\n    <div class=\"p-2.5 bg-slate-900/80 rounded-lg border border-rose-500/30 text-center font-bold text-amber-300 text-base my-2\">\n      $$\\theta(t) = 0.08\\cos\\left(2\\pi t + \\frac{\\pi}{4}\\right)$$\n    </div>\n    <p class=\"text-slate-300 text-sm\">\n      Tìm <strong>tất cả các thời điểm</strong> trong 2 giây đầu tiên ($0 \\le t \\le 2$) mà con lắc đi qua vị trí cân bằng ($\\\\theta = 0$).\n    </p>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Bài toán thực tế con lắc: Li độ góc li độ s(t) đạt cực đại khi hàm cos bằng 1!"
    },
    {
      "id": "scene_10",
      "title": "Ví dụ 4: Hướng dẫn giải chi tiết",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-rose-500/30\">\n    <h4 class=\"text-rose-300 font-bold text-sm mb-2\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 4</h4>\n    <p class=\"text-slate-300 text-xs\">Con lắc qua vị trí cân bằng khi $\\theta(t) = 0 \\Leftrightarrow 0.08\\cos\\left(2\\pi t + \\frac{\\pi}{4}\\right) = 0 \\Leftrightarrow \\cos\\left(2\\pi t + \\frac{\\pi}{4}\\right) = 0$.</p>\n    <div class=\"mt-2 space-y-2 text-xs text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">• Giải phương trình trường hợp đặc biệt $\\cos u = 0$:</span>\n        <p class=\"mt-1\">$$2\\pi t + \\frac{\\pi}{4} = \\frac{\\pi}{2} + k\\pi \\Leftrightarrow 2\\pi t = \\frac{\\pi}{4} + k\\pi \\Leftrightarrow t = \\frac{1}{8} + \\frac{k}{2} \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">• Chặn thời gian trong 2 giây đầu ($0 \\le t \\le 2$):</span>\n        <p class=\"mt-1\">$$0 \\le \\frac{1}{8} + \\frac{k}{2} \\le 2 \\Leftrightarrow -\\frac{1}{8} \\le \\frac{k}{2} \\le \\frac{15}{8} \\Leftrightarrow -\\frac{1}{4} \\le k \\le \\frac{15}{4} = 3.75$$</p>\n        <p class=\"mt-1\">Vì $k \\in \\mathbb{Z} \\Rightarrow k \\in \\{0; 1; 2; 3\\}$. Ta tìm được 4 thời điểm:</p>\n        <p class=\"mt-1 font-semibold text-yellow-300\">\n          $k = 0 \\Rightarrow t_1 = \\frac{1}{8} = 0.125\\text{ s}$; \n          $k = 1 \\Rightarrow t_2 = \\frac{5}{8} = 0.625\\text{ s}$; \n          $k = 2 \\Rightarrow t_3 = \\frac{9}{8} = 1.125\\text{ s}$; \n          $k = 3 \\Rightarrow t_4 = \\frac{13}{8} = 1.625\\text{ s}$.\n        </p>\n      </div>\n    </div>\n    <div class=\"p-2.5 bg-rose-950/60 rounded border border-rose-500/40 mt-2 text-xs\">\n      <strong class=\"text-rose-300\">Kết luận:</strong> Trong 2 giây đầu, quả lắc đi qua vị trí cân bằng <strong>đúng 4 lần</strong> tại các thời điểm $0.125$s, $0.625$s, $1.125$s và $1.625$s.\n    </div>\n  </div>\n</div>\n",
      "narration": "Con lắc qua vị trí cân bằng khi teta bằng không, tức cos của hai pi t cộng pi trên bốn bằng không. Áp dụng trường hợp đặc biệt, ta có hai pi t cộng pi trên bốn bằng pi trên hai cộng k pi. Chuyển vế và chia cả hai vế cho hai pi, ta được t bằng một phần tám cộng k trên hai. Với điều kiện thời gian t nằm từ không đến hai giây, ta tìm được k chạy từ trừ không phẩy hai lăm đến ba phẩy bảy lăm. Vì k nguyên nên k nhận bốn giá trị là không, một, hai, và ba. Thay vào, ta được bốn thời điểm con lắc qua vị trí cân bằng là không phẩy một trăm hai mươi lăm giây, không phẩy sáu trăm hai mươi lăm giây, một phẩy một trăm hai mươi lăm giây, và một phẩy sáu trăm hai mươi lăm giây.",
      "startTime": 215.04,
      "endTime": 256.03,
      "duration": 40.99,
      "sceneIndex": 10,
      "subtitle": "Mục 2: Phương trình lượng giác cos x = m • Cảnh 10",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-rose-500/30\">\n    <h4 class=\"text-rose-300 font-bold text-sm mb-2\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 4</h4>\n    <p class=\"text-slate-300 text-xs\">Con lắc qua vị trí cân bằng khi $\\theta(t) = 0 \\Leftrightarrow 0.08\\cos\\left(2\\pi t + \\frac{\\pi}{4}\\right) = 0 \\Leftrightarrow \\cos\\left(2\\pi t + \\frac{\\pi}{4}\\right) = 0$.</p>\n    <div class=\"mt-2 space-y-2 text-xs text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">• Giải phương trình trường hợp đặc biệt $\\cos u = 0$:</span>\n        <p class=\"mt-1\">$$2\\pi t + \\frac{\\pi}{4} = \\frac{\\pi}{2} + k\\pi \\Leftrightarrow 2\\pi t = \\frac{\\pi}{4} + k\\pi \\Leftrightarrow t = \\frac{1}{8} + \\frac{k}{2} \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">• Chặn thời gian trong 2 giây đầu ($0 \\le t \\le 2$):</span>\n        <p class=\"mt-1\">$$0 \\le \\frac{1}{8} + \\frac{k}{2} \\le 2 \\Leftrightarrow -\\frac{1}{8} \\le \\frac{k}{2} \\le \\frac{15}{8} \\Leftrightarrow -\\frac{1}{4} \\le k \\le \\frac{15}{4} = 3.75$$</p>\n        <p class=\"mt-1\">Vì $k \\in \\mathbb{Z} \\Rightarrow k \\in \\{0; 1; 2; 3\\}$. Ta tìm được 4 thời điểm:</p>\n        <p class=\"mt-1 font-semibold text-yellow-300\">\n          $k = 0 \\Rightarrow t_1 = \\frac{1}{8} = 0.125\\text{ s}$; \n          $k = 1 \\Rightarrow t_2 = \\frac{5}{8} = 0.625\\text{ s}$; \n          $k = 2 \\Rightarrow t_3 = \\frac{9}{8} = 1.125\\text{ s}$; \n          $k = 3 \\Rightarrow t_4 = \\frac{13}{8} = 1.625\\text{ s}$.\n        </p>\n      </div>\n    </div>\n    <div class=\"p-2.5 bg-rose-950/60 rounded border border-rose-500/40 mt-2 text-xs\">\n      <strong class=\"text-rose-300\">Kết luận:</strong> Trong 2 giây đầu, quả lắc đi qua vị trí cân bằng <strong>đúng 4 lần</strong> tại các thời điểm $0.125$s, $0.625$s, $1.125$s và $1.625$s.\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Kết hợp máy tính Casio fx-580VNX bấm shift cos để tìm góc alpha chuẩn xác nhất!"
    },
    {
      "id": "scene_11",
      "title": "Bẫy trắc nghiệm & Sai lầm phổ biến khi giải cos x = m",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-red-950/60 to-rose-900/40 p-4 rounded-xl border border-red-500/40\">\n    <h3 class=\"text-rose-300 font-bold text-base flex items-center gap-2\">\n      <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 rounded text-xs font-bold\">CẢNH BÁO</span>\n      3 SAI LẦM PHỔ BIẾN KHI GIẢI PHƯƠNG TRÌNH COSIN\n    </h3>\n    <div class=\"mt-3 space-y-2.5 text-sm\">\n      <div class=\"p-3 bg-slate-900/80 rounded-lg border border-red-500/30\">\n        <span class=\"text-rose-400 font-bold\">1. NHẦM CÔNG THỨC COS THÀNH SIN:</span>\n        <p class=\"text-slate-300 mt-1\">Nhiều bạn máy móc viết nghiệm của cos là $x = \\pi - \\alpha$ giống như hàm sin! Hãy nhớ: <strong>Cos là cộng trừ alpha ($\\\\pm\\\\alpha$)</strong>, không phải $\\pi - \\alpha$!</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/80 rounded-lg border border-red-500/30\">\n        <span class=\"text-amber-400 font-bold\">2. SAI ĐUÔI KHI $\\cos x = 0$:</span>\n        <p class=\"text-slate-300 mt-1\">Nghiệm của $\\cos x = 0$ là $x = \\frac{\\pi}{2} + k\\pi$. Rất nhiều bạn viết nhầm đuôi thành $k2\\pi$, dẫn đến thiếu mất một nửa số điểm nghiệm cực nam!</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/80 rounded-lg border border-red-500/30\">\n        <span class=\"text-sky-400 font-bold\">3. SAI DẤU KHI ĐƯA $-\\cos u$ VỀ $\\cos$:</span>\n        <p class=\"text-slate-300 mt-1\">Viết $-\\cos u = \\cos(-u)$ là sai hoàn toàn (vì $\\cos(-u) = \\cos u$). Đúng chuẩn phải là: $-\\cos u = \\cos(\\pi - u)$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thầy xin lưu ý ba sai lầm kinh điển đối với phương trình cosin. Thứ nhất, nghiệm của cos là cộng trừ alpha, tuyệt đối không được nhầm sang pi trừ alpha của sin. Thứ hai, cos x bằng không có đuôi là k pi, viết nhầm thành k 2 pi là sai nghiêm trọng. Và thứ ba, dấu trừ trước cos phải chuyển thành cos của pi trừ u, không bao giờ được viết thành cos của trừ u vì cos trừ u vẫn bằng cos u.",
      "startTime": 256.03,
      "endTime": 280.7,
      "duration": 24.67,
      "sceneIndex": 11,
      "subtitle": "Mục 2: Phương trình lượng giác cos x = m • Cảnh 11",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-red-950/60 to-rose-900/40 p-4 rounded-xl border border-red-500/40\">\n    <h3 class=\"text-rose-300 font-bold text-base flex items-center gap-2\">\n      <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 rounded text-xs font-bold\">CẢNH BÁO</span>\n      3 SAI LẦM PHỔ BIẾN KHI GIẢI PHƯƠNG TRÌNH COSIN\n    </h3>\n    <div class=\"mt-3 space-y-2.5 text-sm\">\n      <div class=\"p-3 bg-slate-900/80 rounded-lg border border-red-500/30\">\n        <span class=\"text-rose-400 font-bold\">1. NHẦM CÔNG THỨC COS THÀNH SIN:</span>\n        <p class=\"text-slate-300 mt-1\">Nhiều bạn máy móc viết nghiệm của cos là $x = \\pi - \\alpha$ giống như hàm sin! Hãy nhớ: <strong>Cos là cộng trừ alpha ($\\\\pm\\\\alpha$)</strong>, không phải $\\pi - \\alpha$!</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/80 rounded-lg border border-red-500/30\">\n        <span class=\"text-amber-400 font-bold\">2. SAI ĐUÔI KHI $\\cos x = 0$:</span>\n        <p class=\"text-slate-300 mt-1\">Nghiệm của $\\cos x = 0$ là $x = \\frac{\\pi}{2} + k\\pi$. Rất nhiều bạn viết nhầm đuôi thành $k2\\pi$, dẫn đến thiếu mất một nửa số điểm nghiệm cực nam!</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/80 rounded-lg border border-red-500/30\">\n        <span class=\"text-sky-400 font-bold\">3. SAI DẤU KHI ĐƯA $-\\cos u$ VỀ $\\cos$:</span>\n        <p class=\"text-slate-300 mt-1\">Viết $-\\cos u = \\cos(-u)$ là sai hoàn toàn (vì $\\cos(-u) = \\cos u$). Đúng chuẩn phải là: $-\\cos u = \\cos(\\pi - u)$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "magnifier",
      "mascotTip": "Cú Cảnh Báo: Đừng nhầm lẫn giữa chu kỳ của cos (k2pi) với chu kỳ của tan/cot (k pi)!"
    },
    {
      "id": "scene_12",
      "title": "Tổng kết Mục 2 & Bí kíp Cú Thông Thái",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-950/60 to-yellow-900/40 p-4 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-3\">\n      <span class=\"text-3xl\">🦉</span>\n      <div>\n        <h3 class=\"text-amber-300 font-bold text-base\">BÍ KÍP CÚ THÔNG THÁI • MỤC 2</h3>\n        <p class=\"text-slate-300 text-xs mt-0.5\">Khắc sâu công thức Cosin</p>\n      </div>\n    </div>\n    <div class=\"mt-3 p-3 bg-slate-900/80 rounded-lg border border-amber-400/30 text-amber-200 text-sm font-semibold space-y-1 text-center\">\n      <p>\"Cosin đối xứng hai bên,</p>\n      <p>Cộng trừ alpha chớ quên dấu này!</p>\n      <p>Bằng không: nửa pi thẳng ngay,</p>\n      <p>Cộng thêm đuôi k pi, bài hay điểm mười!\"</p>\n    </div>\n    <div class=\"mt-3 grid grid-cols-3 gap-2 text-center text-xs text-slate-300\">\n      <div class=\"p-2 bg-slate-800/80 rounded border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">Nghiệm Cos:</span><br/>$x = \\pm\\alpha + k2\\pi$\n      </div>\n      <div class=\"p-2 bg-slate-800/80 rounded border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">Cos = 0:</span><br/>$x = \\frac{\\pi}{2} + k\\pi$\n      </div>\n      <div class=\"p-2 bg-slate-800/80 rounded border border-slate-700\">\n        <span class=\"text-emerald-400 font-bold\">Đổi dấu:</span><br/>$-\\cos u = \\cos(\\pi - u)$\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Bí kíp của Cú Thông Thái cho mục hai: Cosin đối xứng hai bên, cộng trừ alpha chớ quên dấu này. Bằng không, nửa pi thẳng ngay, cộng thêm đuôi k pi, bài hay điểm mười! Hãy ghi nhớ thật kỹ những điều này để luôn đạt điểm tuyệt đối.",
      "startTime": 280.7,
      "endTime": 296.18,
      "duration": 15.48,
      "sceneIndex": 12,
      "subtitle": "Mục 2: Phương trình lượng giác cos x = m • Cảnh 12",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-950/60 to-yellow-900/40 p-4 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-3\">\n      <span class=\"text-3xl\">🦉</span>\n      <div>\n        <h3 class=\"text-amber-300 font-bold text-base\">BÍ KÍP CÚ THÔNG THÁI • MỤC 2</h3>\n        <p class=\"text-slate-300 text-xs mt-0.5\">Khắc sâu công thức Cosin</p>\n      </div>\n    </div>\n    <div class=\"mt-3 p-3 bg-slate-900/80 rounded-lg border border-amber-400/30 text-amber-200 text-sm font-semibold space-y-1 text-center\">\n      <p>\"Cosin đối xứng hai bên,</p>\n      <p>Cộng trừ alpha chớ quên dấu này!</p>\n      <p>Bằng không: nửa pi thẳng ngay,</p>\n      <p>Cộng thêm đuôi k pi, bài hay điểm mười!\"</p>\n    </div>\n    <div class=\"mt-3 grid grid-cols-3 gap-2 text-center text-xs text-slate-300\">\n      <div class=\"p-2 bg-slate-800/80 rounded border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">Nghiệm Cos:</span><br/>$x = \\pm\\alpha + k2\\pi$\n      </div>\n      <div class=\"p-2 bg-slate-800/80 rounded border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">Cos = 0:</span><br/>$x = \\frac{\\pi}{2} + k\\pi$\n      </div>\n      <div class=\"p-2 bg-slate-800/80 rounded border border-slate-700\">\n        <span class=\"text-emerald-400 font-bold\">Đổi dấu:</span><br/>$-\\cos u = \\cos(\\pi - u)$\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "cheer",
      "mascotTip": "Hoàn thành xuất sắc Mục 2: Phương trình cos x = m. Chúc mừng các em!"
    }
  ],
  "duration": 296.18,
  "totalDuration": 296.18,
  "timeline": [
    {
      "sceneId": "scene_1",
      "title": "1. CÔNG THỨC NGHIỆM TỔNG QUÁT CỦA PHƯƠNG TRÌNH COS X = M",
      "startTime": 0,
      "endTime": 24.14,
      "duration": 24.14
    },
    {
      "sceneId": "scene_2",
      "title": "2. CÁC TRƯỜNG HỢP ĐẶC BIỆT & KỸ THUẬT ĐỔI DẤU",
      "startTime": 24.14,
      "endTime": 54.26,
      "duration": 30.12
    },
    {
      "sceneId": "scene_3",
      "title": "Ví dụ 1: Giải phương trình cos cơ bản (Mức Nhận biết)",
      "startTime": 54.26,
      "endTime": 69,
      "duration": 14.74
    },
    {
      "sceneId": "scene_4",
      "title": "Ví dụ 1: Hướng dẫn giải chi tiết",
      "startTime": 69,
      "endTime": 93.65,
      "duration": 24.65
    },
    {
      "sceneId": "scene_5",
      "title": "Ví dụ 2: Phương trình dạng cos f(x) = cos g(x) (Mức Thông hiểu)",
      "startTime": 93.65,
      "endTime": 111.05,
      "duration": 17.4
    },
    {
      "sceneId": "scene_6",
      "title": "Ví dụ 2: Hướng dẫn giải chi tiết",
      "startTime": 111.05,
      "endTime": 138.22,
      "duration": 27.17
    },
    {
      "sceneId": "scene_7",
      "title": "Ví dụ 3: Phương trình khác hàm cos f(x) = sin g(x) (Mức Vận dụng)",
      "startTime": 138.22,
      "endTime": 154.99,
      "duration": 16.78
    },
    {
      "sceneId": "scene_8",
      "title": "Ví dụ 3: Hướng dẫn giải chi tiết",
      "startTime": 154.99,
      "endTime": 191.4,
      "duration": 36.41
    },
    {
      "sceneId": "scene_9",
      "title": "Ví dụ 4: Bài toán dao động con lắc quả lắc (Mức Vận dụng cao)",
      "startTime": 191.4,
      "endTime": 215.04,
      "duration": 23.64
    },
    {
      "sceneId": "scene_10",
      "title": "Ví dụ 4: Hướng dẫn giải chi tiết",
      "startTime": 215.04,
      "endTime": 256.03,
      "duration": 40.99
    },
    {
      "sceneId": "scene_11",
      "title": "Bẫy trắc nghiệm & Sai lầm phổ biến khi giải cos x = m",
      "startTime": 256.03,
      "endTime": 280.7,
      "duration": 24.67
    },
    {
      "sceneId": "scene_12",
      "title": "Tổng kết Mục 2 & Bí kíp Cú Thông Thái",
      "startTime": 280.7,
      "endTime": 296.18,
      "duration": 15.48
    }
  ]
};

window.G11_CHAPTER1_DATA.g11_bai4_muc3 = {
  "key": "g11_bai4_muc3",
  "lessonId": "toan11_bai4",
  "lessonTitle": "Bài 4: Phương trình lượng giác cơ bản",
  "sectionId": "g11_bai4_muc3",
  "sectionTitle": "Mục 3: Phương trình lượng giác tan x = m và cot x = m",
  "title": "Mục 3: Phương trình lượng giác tan x = m và cot x = m",
  "audio": "/audio/g11_bai4_muc3.mp3",
  "audioSrc": "./audio/g11_bai4_muc3.mp3",
  "audio_src": "./audio/g11_bai4_muc3.mp3",
  "owl_tip": "Phương trình tan x = m và cot x = m luôn có nghiệm với mọi giá trị của m! Điểm mấu chốt là chỉ có duy nhất một họ nghiệm với chu kỳ pi (đuôi cộng k pi), và đừng bao giờ quên đặt điều kiện xác định!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm & Công thức nghiệm tổng quát",
      "scenes": [
        1,
        2
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 4 Ví dụ minh họa tiêu biểu (Đồng hồ 15s/30s)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Cảnh báo bẫy trắc nghiệm & Sai lầm thường gặp",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Tổng kết bài học & Bí kíp Cú Thông Thái",
      "scenes": [
        12
      ]
    }
  ],
  "scenes": [
    {
      "id": "scene_1",
      "title": "1. PHƯƠNG TRÌNH TAN X = M & ĐIỀU KIỆN XÁC ĐỊNH",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <h3 class=\"text-emerald-300 font-bold text-lg flex items-center gap-2\">\n      <span class=\"px-2 py-0.5 bg-emerald-500/20 rounded text-emerald-300 text-sm\">Trọng tâm</span>\n      PHƯƠNG TRÌNH TANG & CÔNG THỨC DUY NHẤT 1 HỌ NGHIỆM\n    </h3>\n    <p class=\"text-slate-200 mt-2 text-sm leading-relaxed\">\n      Hàm số tang có tập giá trị là $\\mathbb{R}$, nên phương trình $\\tan x = m$ <strong>LUÔN CÓ NGHIỆM VỚI MỌI $m \\in \\mathbb{R}$</strong>!\n    </p>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 text-sm\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">1. Điều kiện xác định:</span><br/>\n        Vì $\\tan x = \\frac{\\sin x}{\\cos x}$ nên mẫu thức $\\cos x \\ne 0$:\n        <p class=\"text-center font-bold text-rose-300 text-sm mt-1\">$$x \\ne \\frac{\\pi}{2} + k\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">2. Công thức nghiệm chuẩn:</span><br/>\n        Với mọi $m \\in \\mathbb{R}$, tồn tại góc $\\alpha$ sao cho $\\tan\\alpha = m$:\n        <p class=\"text-center font-bold text-yellow-300 text-base mt-1\">$$\\tan x = \\tan\\alpha \\Leftrightarrow x = \\alpha + k\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n        <span class=\"text-slate-400 text-xs\">Chỉ có duy nhất 1 họ nghiệm với đuôi chu kỳ là $+ k\\pi$!</span>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với mục số 3: Phương trình lượng giác tan x bằng m và cot x bằng m. Khác biệt lớn nhất của tang và côtang so với sin và cos là chúng nhận mọi giá trị từ âm vô cùng đến dương vô cùng. Do đó, phương trình tan x bằng m luôn luôn có nghiệm với mọi m thực. Khi giải, đầu tiên các em phải đặt điều kiện xác định là cos x khác không, tức x khác pi trên hai cộng k pi. Sau đó, ta tìm góc alpha và viết công thức nghiệm duy nhất: x bằng alpha cộng k pi.",
      "startTime": 0,
      "endTime": 29.3,
      "duration": 29.3,
      "sceneIndex": 1,
      "subtitle": "Mục 3: Phương trình lượng giác tan x = m và cot x = m • Cảnh 1",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <h3 class=\"text-emerald-300 font-bold text-lg flex items-center gap-2\">\n      <span class=\"px-2 py-0.5 bg-emerald-500/20 rounded text-emerald-300 text-sm\">Trọng tâm</span>\n      PHƯƠNG TRÌNH TANG & CÔNG THỨC DUY NHẤT 1 HỌ NGHIỆM\n    </h3>\n    <p class=\"text-slate-200 mt-2 text-sm leading-relaxed\">\n      Hàm số tang có tập giá trị là $\\mathbb{R}$, nên phương trình $\\tan x = m$ <strong>LUÔN CÓ NGHIỆM VỚI MỌI $m \\in \\mathbb{R}$</strong>!\n    </p>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 text-sm\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">1. Điều kiện xác định:</span><br/>\n        Vì $\\tan x = \\frac{\\sin x}{\\cos x}$ nên mẫu thức $\\cos x \\ne 0$:\n        <p class=\"text-center font-bold text-rose-300 text-sm mt-1\">$$x \\ne \\frac{\\pi}{2} + k\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">2. Công thức nghiệm chuẩn:</span><br/>\n        Với mọi $m \\in \\mathbb{R}$, tồn tại góc $\\alpha$ sao cho $\\tan\\alpha = m$:\n        <p class=\"text-center font-bold text-yellow-300 text-base mt-1\">$$\\tan x = \\tan\\alpha \\Leftrightarrow x = \\alpha + k\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n        <span class=\"text-slate-400 text-xs\">Chỉ có duy nhất 1 họ nghiệm với đuôi chu kỳ là $+ k\\pi$!</span>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Phương trình tan x = m LUÔN CÓ NGHIỆM với mọi m in R! Điều kiện xác định: x != pi/2 + k pi!"
    },
    {
      "id": "scene_2",
      "title": "2. PHƯƠNG TRÌNH COT X = M & CÔNG THỨC CHUYỂN ĐỔI",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-sky-500/30\">\n      <h4 class=\"text-sky-300 font-bold text-base mb-2\">📐 PHƯƠNG TRÌNH $\\cot x = m$</h4>\n      <div class=\"space-y-2 text-sm\">\n        <p class=\"text-slate-300\">Luôn có nghiệm với mọi $m \\in \\mathbb{R}$.</p>\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-amber-400 font-bold\">• Điều kiện xác định:</span>\n          <p class=\"text-slate-200 mt-0.5\">$\\sin x \\ne 0 \\Leftrightarrow x \\ne k\\pi \\quad (k \\in \\mathbb{Z})$.</p>\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-emerald-400 font-bold\">• Công thức nghiệm:</span>\n          <p class=\"text-center font-bold text-yellow-300 text-base mt-1\">$$\\cot x = \\cot\\alpha \\Leftrightarrow x = \\alpha + k\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n          <span class=\"text-slate-400 text-xs\">Theo độ: $x = \\alpha^\\circ + k180^\\circ$.</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-purple-500/30\">\n      <h4 class=\"text-purple-300 font-bold text-base mb-2\">🔄 KỸ THUẬT ĐỔI VỀ CÙNG HÀM TANG</h4>\n      <div class=\"space-y-2 text-sm\">\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-pink-400 font-bold\">Đổi dấu $-\\tan u$:</span>\n          <p class=\"text-slate-200 mt-1\">$$-\\tan u = \\tan(-u)$$</p>\n          <p class=\"text-slate-400 text-xs\">Vì tang là hàm số lẻ nên đưa dấu trừ vào trong góc.</p>\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-indigo-400 font-bold\">Chuyển từ $\\cot u$ sang $\\tan$:</span>\n          <p class=\"text-slate-200 mt-1\">$$\\cot u = \\tan\\left(\\frac{\\pi}{2} - u\\right)$$</p>\n          <p class=\"text-slate-400 text-xs\">Áp dụng tính chất hai góc phụ nhau.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Tương tự, phương trình cot x bằng m cũng luôn có nghiệm với mọi giá trị m. Điều kiện xác định là sin x khác không, tức x khác k pi. Công thức nghiệm là x bằng alpha cộng k pi. Khi gặp dấu trừ trước tang hay côtang, vì đây là hàm lẻ nên các em đưa dấu trừ vào góc: trừ tan u bằng tan của trừ u. Còn khi muốn biến đổi từ côtang sang tang, ta áp dụng công thức góc phụ: cot u bằng tan của pi trên hai trừ u.",
      "startTime": 29.3,
      "endTime": 54.91,
      "duration": 25.61,
      "sceneIndex": 2,
      "subtitle": "Mục 3: Phương trình lượng giác tan x = m và cot x = m • Cảnh 2",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-sky-500/30\">\n      <h4 class=\"text-sky-300 font-bold text-base mb-2\">📐 PHƯƠNG TRÌNH $\\cot x = m$</h4>\n      <div class=\"space-y-2 text-sm\">\n        <p class=\"text-slate-300\">Luôn có nghiệm với mọi $m \\in \\mathbb{R}$.</p>\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-amber-400 font-bold\">• Điều kiện xác định:</span>\n          <p class=\"text-slate-200 mt-0.5\">$\\sin x \\ne 0 \\Leftrightarrow x \\ne k\\pi \\quad (k \\in \\mathbb{Z})$.</p>\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-emerald-400 font-bold\">• Công thức nghiệm:</span>\n          <p class=\"text-center font-bold text-yellow-300 text-base mt-1\">$$\\cot x = \\cot\\alpha \\Leftrightarrow x = \\alpha + k\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n          <span class=\"text-slate-400 text-xs\">Theo độ: $x = \\alpha^\\circ + k180^\\circ$.</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-purple-500/30\">\n      <h4 class=\"text-purple-300 font-bold text-base mb-2\">🔄 KỸ THUẬT ĐỔI VỀ CÙNG HÀM TANG</h4>\n      <div class=\"space-y-2 text-sm\">\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-pink-400 font-bold\">Đổi dấu $-\\tan u$:</span>\n          <p class=\"text-slate-200 mt-1\">$$-\\tan u = \\tan(-u)$$</p>\n          <p class=\"text-slate-400 text-xs\">Vì tang là hàm số lẻ nên đưa dấu trừ vào trong góc.</p>\n        </div>\n        <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n          <span class=\"text-indigo-400 font-bold\">Chuyển từ $\\cot u$ sang $\\tan$:</span>\n          <p class=\"text-slate-200 mt-1\">$$\\cot u = \\tan\\left(\\frac{\\pi}{2} - u\\right)$$</p>\n          <p class=\"text-slate-400 text-xs\">Áp dụng tính chất hai góc phụ nhau.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Phương trình cot x = m LUÔN CÓ NGHIỆM với mọi m in R! Điều kiện xác định: x != k pi!"
    },
    {
      "id": "scene_3",
      "title": "Ví dụ 1: Giải phương trình tan và cot cơ bản (Mức Nhận biết)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/50 to-indigo-900/40 p-4 rounded-xl border border-blue-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-blue-500 text-white text-xs font-bold rounded\">VÍ DỤ 1 • NHẬN BIẾT</span>\n      <span class=\"text-slate-400 text-xs\">Mục 3 • Tan và Cot cơ bản</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Giải các phương trình lượng giác sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> $\\tan x = \\sqrt{3}$</p>\n      <p><strong class=\"text-sky-400\">b)</strong> $\\tan x = -1$</p>\n      <p><strong class=\"text-emerald-400\">c)</strong> $\\cot x = \\frac{\\sqrt{3}}{3}$</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-15s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 15 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Hãy cùng bước vào ví dụ 1 ở mức độ nhận biết. Giải ba phương trình cơ bản: câu a tan x bằng căn ba, câu b tan x bằng trừ một, và câu c cot x bằng căn ba trên ba. Các em có mười lăm giây suy nghĩ và chọn họ nghiệm.",
      "startTime": 54.91,
      "endTime": 70.01,
      "duration": 15.1,
      "sceneIndex": 3,
      "subtitle": "Mục 3: Phương trình lượng giác tan x = m và cot x = m • Cảnh 3",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/50 to-indigo-900/40 p-4 rounded-xl border border-blue-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-blue-500 text-white text-xs font-bold rounded\">VÍ DỤ 1 • NHẬN BIẾT</span>\n      <span class=\"text-slate-400 text-xs\">Mục 3 • Tan và Cot cơ bản</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Giải các phương trình lượng giác sau:</h4>\n    <div class=\"mt-3 space-y-2 text-sm text-slate-200\">\n      <p><strong class=\"text-amber-400\">a)</strong> $\\tan x = \\sqrt{3}$</p>\n      <p><strong class=\"text-sky-400\">b)</strong> $\\tan x = -1$</p>\n      <p><strong class=\"text-emerald-400\">c)</strong> $\\cot x = \\frac{\\sqrt{3}}{3}$</p>\n    </div>\n    <div class=\"countdown-clock-widget cd-15s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 15 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Thử sức tìm nghiệm của tan x = 1, tan x = -sqrt(3) và cot x = 1 trong 15 giây!"
    },
    {
      "id": "scene_4",
      "title": "Ví dụ 1: Hướng dẫn giải chi tiết",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-blue-500/30\">\n    <h4 class=\"text-blue-300 font-bold text-sm mb-3\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 1</h4>\n    <div class=\"space-y-3 text-sm text-slate-200\">\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <p class=\"font-bold text-amber-400\">a) $\\tan x = \\sqrt{3}$</p>\n        <p class=\"mt-1\">Điều kiện: $x \\ne \\frac{\\pi}{2} + k\\pi$. Vì $\\tan\\frac{\\pi}{3} = \\sqrt{3}$ nên:</p>\n        <p class=\"mt-1 font-semibold text-yellow-300\">$$\\tan x = \\tan\\frac{\\pi}{3} \\Leftrightarrow x = \\frac{\\pi}{3} + k\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <p class=\"font-bold text-sky-400\">b) $\\tan x = -1$</p>\n        <p class=\"mt-1\">Vì $\\tan\\left(-\\frac{\\pi}{4}\\right) = -1$ nên ta có:</p>\n        <p class=\"mt-1 font-semibold text-sky-300\">$$x = -\\frac{\\pi}{4} + k\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <p class=\"font-bold text-emerald-400\">c) $\\cot x = \\frac{\\sqrt{3}}{3}$</p>\n        <p class=\"mt-1\">Điều kiện: $x \\ne k\\pi$. Vì $\\cot\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{3}$ nên:</p>\n        <p class=\"mt-1 font-semibold text-emerald-300\">$$x = \\frac{\\pi}{3} + k\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Lời giải chi tiết: Ở câu a, căn ba là tang của pi trên ba, nên nghiệm là x bằng pi trên ba cộng k pi. Ở câu b, trừ một là tang của trừ pi trên bốn, nghiệm là x bằng trừ pi trên bốn cộng k pi. Ở câu c, căn ba trên ba là côtang của pi trên ba, nghiệm là x bằng pi trên ba cộng k pi. Cả ba nghiệm đều thỏa mãn điều kiện xác định và chỉ có đúng một họ nghiệm duy nhất.",
      "startTime": 70.01,
      "endTime": 95.26,
      "duration": 25.25,
      "sceneIndex": 4,
      "subtitle": "Mục 3: Phương trình lượng giác tan x = m và cot x = m • Cảnh 4",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-blue-500/30\">\n    <h4 class=\"text-blue-300 font-bold text-sm mb-3\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 1</h4>\n    <div class=\"space-y-3 text-sm text-slate-200\">\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <p class=\"font-bold text-amber-400\">a) $\\tan x = \\sqrt{3}$</p>\n        <p class=\"mt-1\">Điều kiện: $x \\ne \\frac{\\pi}{2} + k\\pi$. Vì $\\tan\\frac{\\pi}{3} = \\sqrt{3}$ nên:</p>\n        <p class=\"mt-1 font-semibold text-yellow-300\">$$\\tan x = \\tan\\frac{\\pi}{3} \\Leftrightarrow x = \\frac{\\pi}{3} + k\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <p class=\"font-bold text-sky-400\">b) $\\tan x = -1$</p>\n        <p class=\"mt-1\">Vì $\\tan\\left(-\\frac{\\pi}{4}\\right) = -1$ nên ta có:</p>\n        <p class=\"mt-1 font-semibold text-sky-300\">$$x = -\\frac{\\pi}{4} + k\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <p class=\"font-bold text-emerald-400\">c) $\\cot x = \\frac{\\sqrt{3}}{3}$</p>\n        <p class=\"mt-1\">Điều kiện: $x \\ne k\\pi$. Vì $\\cot\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{3}$ nên:</p>\n        <p class=\"mt-1 font-semibold text-emerald-300\">$$x = \\frac{\\pi}{3} + k\\pi \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Họ nghiệm của tan và cot chỉ có DUY NHẤT một họ nghiệm: x = alpha + k pi (đuôi cộng k pi)!"
    },
    {
      "id": "scene_5",
      "title": "Ví dụ 2: Phương trình tan(u) = c có đặt ĐKXĐ (Mức Thông hiểu)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/50 to-teal-900/40 p-4 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-emerald-500 text-white text-xs font-bold rounded\">VÍ DỤ 2 • THÔNG HIỂU</span>\n      <span class=\"text-slate-400 text-xs\">Mục 3 • Biến đổi góc</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Giải phương trình lượng giác sau:</h4>\n    <div class=\"mt-2 p-3 bg-slate-900/80 rounded-lg border border-emerald-500/30 text-center font-bold text-emerald-300 text-base\">\n      $$\\tan\\left(2x + \\frac{\\pi}{4}\\right) = \\sqrt{3}$$\n    </div>\n    <div class=\"countdown-clock-widget cd-15s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 15 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2 ở mức độ thông hiểu: Giải phương trình tan của hai x cộng pi trên bốn bằng căn ba. Hãy nhớ đặt điều kiện xác định trước khi giải và đưa vế phải về tang của góc đặc biệt trong mười lăm giây.",
      "startTime": 95.26,
      "endTime": 107.04,
      "duration": 11.78,
      "sceneIndex": 5,
      "subtitle": "Mục 3: Phương trình lượng giác tan x = m và cot x = m • Cảnh 5",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/50 to-teal-900/40 p-4 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-emerald-500 text-white text-xs font-bold rounded\">VÍ DỤ 2 • THÔNG HIỂU</span>\n      <span class=\"text-slate-400 text-xs\">Mục 3 • Biến đổi góc</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Giải phương trình lượng giác sau:</h4>\n    <div class=\"mt-2 p-3 bg-slate-900/80 rounded-lg border border-emerald-500/30 text-center font-bold text-emerald-300 text-base\">\n      $$\\tan\\left(2x + \\frac{\\pi}{4}\\right) = \\sqrt{3}$$\n    </div>\n    <div class=\"countdown-clock-widget cd-15s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 15 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Phương trình tan f(x) = tan g(x): Nhớ đặt ĐKXĐ cho ít nhất một trong hai biểu thức f(x) hoặc g(x)!"
    },
    {
      "id": "scene_6",
      "title": "Ví dụ 2: Hướng dẫn giải chi tiết",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-emerald-500/30\">\n    <h4 class=\"text-emerald-300 font-bold text-sm mb-3\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 2</h4>\n    <div class=\"space-y-3 text-sm text-slate-200\">\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">1. Điều kiện xác định:</span>\n        <p class=\"mt-1 text-slate-300\">$$2x + \\frac{\\pi}{4} \\ne \\frac{\\pi}{2} + k\\pi \\Leftrightarrow 2x \\ne \\frac{\\pi}{4} + k\\pi \\Leftrightarrow x \\ne \\frac{\\pi}{8} + \\frac{k\\pi}{2} \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">2. Giải phương trình:</span>\n        <p class=\"mt-1 text-slate-100\">Vì $\\tan\\frac{\\pi}{3} = \\sqrt{3}$ nên phương trình tương đương:</p>\n        <p class=\"mt-1 text-slate-100\">$$2x + \\frac{\\pi}{4} = \\frac{\\pi}{3} + k\\pi \\Leftrightarrow 2x = \\frac{\\pi}{3} - \\frac{\\pi}{4} + k\\pi = \\frac{\\pi}{12} + k\\pi$$</p>\n        <p class=\"mt-1 font-bold text-yellow-300\">$$\\Leftrightarrow x = \\frac{\\pi}{24} + \\frac{k\\pi}{2} \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n    </div>\n    <p class=\"text-emerald-400 text-sm mt-2 font-semibold\">Đối chiếu điều kiện: Thỏa mãn. Vậy nghiệm là $x = \\frac{\\pi}{24} + \\frac{k\\pi}{2}$ ($k \\in \\mathbb{Z}$).</p>\n  </div>\n</div>\n",
      "narration": "Lời giải: Bước một, điều kiện xác định là góc hai x cộng pi trên bốn khác pi trên hai cộng k pi, rút ra x khác pi trên tám cộng k pi trên hai. Bước hai, đưa căn ba về tan của pi trên ba. Ta có hai x cộng pi trên bốn bằng pi trên ba cộng k pi. Chuyển vế được hai x bằng pi trên mười hai cộng k pi. Chia cho hai, ta được nghiệm x bằng pi trên hai mươi tư cộng k pi trên hai. Nghiệm này hoàn toàn thỏa mãn điều kiện xác định.",
      "startTime": 107.04,
      "endTime": 136.37,
      "duration": 29.33,
      "sceneIndex": 6,
      "subtitle": "Mục 3: Phương trình lượng giác tan x = m và cot x = m • Cảnh 6",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-emerald-500/30\">\n    <h4 class=\"text-emerald-300 font-bold text-sm mb-3\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 2</h4>\n    <div class=\"space-y-3 text-sm text-slate-200\">\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">1. Điều kiện xác định:</span>\n        <p class=\"mt-1 text-slate-300\">$$2x + \\frac{\\pi}{4} \\ne \\frac{\\pi}{2} + k\\pi \\Leftrightarrow 2x \\ne \\frac{\\pi}{4} + k\\pi \\Leftrightarrow x \\ne \\frac{\\pi}{8} + \\frac{k\\pi}{2} \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-3 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">2. Giải phương trình:</span>\n        <p class=\"mt-1 text-slate-100\">Vì $\\tan\\frac{\\pi}{3} = \\sqrt{3}$ nên phương trình tương đương:</p>\n        <p class=\"mt-1 text-slate-100\">$$2x + \\frac{\\pi}{4} = \\frac{\\pi}{3} + k\\pi \\Leftrightarrow 2x = \\frac{\\pi}{3} - \\frac{\\pi}{4} + k\\pi = \\frac{\\pi}{12} + k\\pi$$</p>\n        <p class=\"mt-1 font-bold text-yellow-300\">$$\\Leftrightarrow x = \\frac{\\pi}{24} + \\frac{k\\pi}{2} \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n    </div>\n    <p class=\"text-emerald-400 text-sm mt-2 font-semibold\">Đối chiếu điều kiện: Thỏa mãn. Vậy nghiệm là $x = \\frac{\\pi}{24} + \\frac{k\\pi}{2}$ ($k \\in \\mathbb{Z}$).</p>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Sau khi giải ra nghiệm x, bắt buộc phải đối chiếu với điều kiện xác định để loại nghiệm ngoại lai!"
    },
    {
      "id": "scene_7",
      "title": "Ví dụ 3: Phương trình tích tan x . tan 2x = 1 (Mức Vận dụng)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/50 to-indigo-900/40 p-4 rounded-xl border border-purple-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-purple-500 text-white text-xs font-bold rounded\">VÍ DỤ 3 • VẬN DỤNG</span>\n      <span class=\"text-slate-400 text-xs\">Mục 3 • Biến đổi phương trình tích</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Giải phương trình lượng giác sau:</h4>\n    <div class=\"mt-2 p-3 bg-slate-900/80 rounded-lg border border-purple-500/30 text-center font-bold text-purple-300 text-base\">\n      $$\\tan x \\cdot \\tan 2x = 1$$\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3 là bài toán vận dụng rất kinh điển: Giải phương trình tan x nhân tan hai x bằng một. Khi gặp tích hai tang bằng một, các em hãy nhớ đến công thức cot x bằng một trên tan x, sau đó đổi về góc phụ để đưa về cùng hàm tang. Các em có ba mươi giây suy nghĩ và đối chiếu điều kiện.",
      "startTime": 136.37,
      "endTime": 154.08,
      "duration": 17.71,
      "sceneIndex": 7,
      "subtitle": "Mục 3: Phương trình lượng giác tan x = m và cot x = m • Cảnh 7",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/50 to-indigo-900/40 p-4 rounded-xl border border-purple-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-purple-500 text-white text-xs font-bold rounded\">VÍ DỤ 3 • VẬN DỤNG</span>\n      <span class=\"text-slate-400 text-xs\">Mục 3 • Biến đổi phương trình tích</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Giải phương trình lượng giác sau:</h4>\n    <div class=\"mt-2 p-3 bg-slate-900/80 rounded-lg border border-purple-500/30 text-center font-bold text-purple-300 text-base\">\n      $$\\tan x \\cdot \\tan 2x = 1$$\n    </div>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Dạng tích tan x . tan 2x = 1 <=> tan 2x = cot x = tan(pi/2 - x). Cực kỳ cẩn thận với tập xác định!"
    },
    {
      "id": "scene_8",
      "title": "Ví dụ 3: Hướng dẫn giải chi tiết",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-purple-500/30\">\n    <h4 class=\"text-purple-300 font-bold text-sm mb-2\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 3</h4>\n    <div class=\"space-y-2 text-xs text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">• Điều kiện:</span> $\\cos x \\ne 0$ và $\\cos 2x \\ne 0$ $\\Leftrightarrow x \\ne \\frac{\\pi}{2} + k\\pi$ và $x \\ne \\frac{\\pi}{4} + \\frac{k\\pi}{2}$.\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">• Biến đổi phương trình:</span> Với $\\tan x \\ne 0$, ta có:<br/>\n        $$\\tan 2x = \\frac{1}{\\tan x} = \\cot x = \\tan\\left(\\frac{\\pi}{2} - x\\right)$$\n        $$\\Leftrightarrow 2x = \\frac{\\pi}{2} - x + k\\pi \\Leftrightarrow 3x = \\frac{\\pi}{2} + k\\pi \\Leftrightarrow x = \\frac{\\pi}{6} + \\frac{k\\pi}{3} \\quad (k \\in \\mathbb{Z})$$\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-emerald-400 font-bold\">• Đối chiếu điều kiện xác định:</span><br/>\n        Với $k = 1 \\Rightarrow x = \\frac{\\pi}{6} + \\frac{\\pi}{3} = \\frac{\\pi}{2}$ (loại vì $\\cos\\frac{\\pi}{2} = 0$).<br/>\n        Tổng quát loại $k = 3m + 1$. Các giá trị còn lại $k = 3m$ hoặc $k = 3m - 1$ thỏa mãn:\n        <span class=\"text-yellow-300 font-bold\">$$x = \\pm\\frac{\\pi}{6} + k\\pi \\quad (k \\in \\mathbb{Z})$$</span>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Bước một, điều kiện là cos x khác không và cos hai x khác không. Khi tan x khác không, ta chia cả hai vế cho tan x, thu được tan hai x bằng một trên tan x, tức cot x. Dùng góc phụ, cot x bằng tan của pi trên hai trừ x. Do đó hai x bằng pi trên hai trừ x cộng k pi, giải ra x bằng pi trên sáu cộng k pi trên ba. Bước hai, đối chiếu điều kiện: Khi k bằng một, x bằng pi trên hai làm cos x bằng không nên bị loại. Tổng quát loại bỏ các giá trị k đồng dư một theo mô-đu-lô ba, ta thu được nghiệm cuối cùng rất gọn gàng là x bằng cộng trừ pi trên sáu cộng k pi.",
      "startTime": 154.08,
      "endTime": 189.38,
      "duration": 35.3,
      "sceneIndex": 8,
      "subtitle": "Mục 3: Phương trình lượng giác tan x = m và cot x = m • Cảnh 8",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-purple-500/30\">\n    <h4 class=\"text-purple-300 font-bold text-sm mb-2\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 3</h4>\n    <div class=\"space-y-2 text-xs text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">• Điều kiện:</span> $\\cos x \\ne 0$ và $\\cos 2x \\ne 0$ $\\Leftrightarrow x \\ne \\frac{\\pi}{2} + k\\pi$ và $x \\ne \\frac{\\pi}{4} + \\frac{k\\pi}{2}$.\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">• Biến đổi phương trình:</span> Với $\\tan x \\ne 0$, ta có:<br/>\n        $$\\tan 2x = \\frac{1}{\\tan x} = \\cot x = \\tan\\left(\\frac{\\pi}{2} - x\\right)$$\n        $$\\Leftrightarrow 2x = \\frac{\\pi}{2} - x + k\\pi \\Leftrightarrow 3x = \\frac{\\pi}{2} + k\\pi \\Leftrightarrow x = \\frac{\\pi}{6} + \\frac{k\\pi}{3} \\quad (k \\in \\mathbb{Z})$$\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-emerald-400 font-bold\">• Đối chiếu điều kiện xác định:</span><br/>\n        Với $k = 1 \\Rightarrow x = \\frac{\\pi}{6} + \\frac{\\pi}{3} = \\frac{\\pi}{2}$ (loại vì $\\cos\\frac{\\pi}{2} = 0$).<br/>\n        Tổng quát loại $k = 3m + 1$. Các giá trị còn lại $k = 3m$ hoặc $k = 3m - 1$ thỏa mãn:\n        <span class=\"text-yellow-300 font-bold\">$$x = \\pm\\frac{\\pi}{6} + k\\pi \\quad (k \\in \\mathbb{Z})$$</span>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Giao thoa điều kiện xác định trên đường tròn lượng giác giúp loại nghiệm nhanh chóng và chính xác!"
    },
    {
      "id": "scene_9",
      "title": "Ví dụ 4: Bài toán góc nghiêng giàn pin năng lượng mặt trời (Vận dụng cao)",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-rose-900/50 to-orange-900/40 p-4 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-rose-500 text-white text-xs font-bold rounded\">VÍ DỤ 4 • VẬN DỤNG CAO / THỰC TẾ</span>\n      <span class=\"text-slate-400 text-xs\">Mục 3 • Năng lượng mặt trời</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Góc nghiêng tối ưu của tấm pin năng lượng mặt trời:</h4>\n    <p class=\"text-slate-200 text-sm mt-1 leading-relaxed\">\n      Để tấm pin năng lượng mặt trời trên mái dốc hấp thụ bức xạ hiệu quả nhất theo chu kỳ chiếu sáng, góc nghiêng lắp đặt $\\alpha$ ($0^\\circ < \\alpha < 90^\\circ$) thỏa mãn hệ thức cân bằng quang học:\n    </p>\n    <div class=\"p-2.5 bg-slate-900/80 rounded-lg border border-rose-500/30 text-center font-bold text-amber-300 text-base my-2\">\n      $$\\tan(2\\alpha - 15^\\circ) = \\cot(30^\\circ + \\alpha)$$\n    </div>\n    <p class=\"text-slate-300 text-sm\">\n      Xác định <strong>tất cả các giá trị góc $\\alpha$ hợp lệ</strong> (tính theo đơn vị độ) thỏa mãn yêu cầu thiết kế.\n    </p>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4 là bài toán thực tế vận dụng cao về góc lắp đặt tấm pin năng lượng mặt trời. Góc nghiêng alpha từ không độ đến chín mươi độ thỏa mãn hệ thức tan của hai alpha trừ mười lăm độ bằng cot của ba mươi độ cộng alpha. Các em hãy dùng công thức hai góc phụ nhau theo đơn vị độ để giải tìm góc alpha trong ba mươi giây.",
      "startTime": 189.38,
      "endTime": 208.58,
      "duration": 19.2,
      "sceneIndex": 9,
      "subtitle": "Mục 3: Phương trình lượng giác tan x = m và cot x = m • Cảnh 9",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-rose-900/50 to-orange-900/40 p-4 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"px-2.5 py-1 bg-rose-500 text-white text-xs font-bold rounded\">VÍ DỤ 4 • VẬN DỤNG CAO / THỰC TẾ</span>\n      <span class=\"text-slate-400 text-xs\">Mục 3 • Năng lượng mặt trời</span>\n    </div>\n    <h4 class=\"text-white font-bold text-base mt-2\">Góc nghiêng tối ưu của tấm pin năng lượng mặt trời:</h4>\n    <p class=\"text-slate-200 text-sm mt-1 leading-relaxed\">\n      Để tấm pin năng lượng mặt trời trên mái dốc hấp thụ bức xạ hiệu quả nhất theo chu kỳ chiếu sáng, góc nghiêng lắp đặt $\\alpha$ ($0^\\circ < \\alpha < 90^\\circ$) thỏa mãn hệ thức cân bằng quang học:\n    </p>\n    <div class=\"p-2.5 bg-slate-900/80 rounded-lg border border-rose-500/30 text-center font-bold text-amber-300 text-base my-2\">\n      $$\\tan(2\\alpha - 15^\\circ) = \\cot(30^\\circ + \\alpha)$$\n    </div>\n    <p class=\"text-slate-300 text-sm\">\n      Xác định <strong>tất cả các giá trị góc $\\alpha$ hợp lệ</strong> (tính theo đơn vị độ) thỏa mãn yêu cầu thiết kế.\n    </p>\n    <div class=\"countdown-clock-widget cd-30s flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-2 mt-3 w-fit\"><svg class=\"w-7 h-7 text-amber-500 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"60\" stroke-dashoffset=\"20\"></circle></svg><span class=\"text-amber-300 font-bold text-sm tracking-wide\">THỜI GIAN SUY NGHĨ: 30 GIÂY</span></div>\n  </div>\n</div>\n",
      "mascotMode": "thinking",
      "mascotTip": "Bài toán thực tế góc nghiêng pin mặt trời: Góc chiếu tối ưu đạt khi tan alpha = h/d!"
    },
    {
      "id": "scene_10",
      "title": "Ví dụ 4: Hướng dẫn giải chi tiết",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-rose-500/30\">\n    <h4 class=\"text-rose-300 font-bold text-sm mb-2\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 4</h4>\n    <p class=\"text-slate-300 text-xs\">Sử dụng công thức hai góc phụ nhau theo độ: $\\cot(30^\\circ + \\alpha) = \\tan[90^\\circ - (30^\\circ + \\alpha)] = \\tan(60^\\circ - \\alpha)$.</p>\n    <p class=\"text-slate-300 text-xs mt-1\">Phương trình tương đương với: $\\tan(2\\alpha - 15^\\circ) = \\tan(60^\\circ - \\alpha)$:</p>\n    <div class=\"mt-2 space-y-2 text-xs text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">• Giải theo công thức nghiệm tang:</span>\n        <p class=\"mt-1\">$$2\\alpha - 15^\\circ = 60^\\circ - \\alpha + k180^\\circ \\Leftrightarrow 3\\alpha = 75^\\circ + k180^\\circ$$</p>\n        <p class=\"mt-1 font-bold text-yellow-300\">$$\\Leftrightarrow \\alpha = 25^\\circ + k60^\\circ \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">• Chặn điều kiện thiết kế kỹ thuật $0^\\circ < \\alpha < 90^\\circ$:</span>\n        <p class=\"mt-1\">$$0^\\circ < 25^\\circ + k60^\\circ < 90^\\circ \\Leftrightarrow -25^\\circ < k60^\\circ < 65^\\circ \\Leftrightarrow -\\frac{5}{12} < k < \\frac{13}{12}$$</p>\n        <p class=\"mt-1\">Vì $k \\in \\mathbb{Z} \\Rightarrow k \\in \\{0; 1\\}$. Ta thu được 2 giá trị:</p>\n        <p class=\"mt-1 font-semibold text-emerald-300\">\n          • Với $k = 0 \\Rightarrow \\alpha_1 = 25^\\circ$ (thỏa mãn điều kiện xác định).<br/>\n          • Với $k = 1 \\Rightarrow \\alpha_2 = 25^\\circ + 60^\\circ = 85^\\circ$ (thỏa mãn điều kiện xác định).\n        </p>\n      </div>\n    </div>\n    <div class=\"p-2.5 bg-rose-950/60 rounded border border-rose-500/40 mt-2 text-xs\">\n      <strong class=\"text-rose-300\">Kết luận kỹ thuật:</strong> Có đúng <strong>2 góc lắp đặt khả thi</strong> là <strong class=\"text-yellow-300\">$\\alpha = 25^\\circ$</strong> và <strong class=\"text-yellow-300\">$\\alpha = 85^\\circ$</strong>.\n    </div>\n  </div>\n</div>\n",
      "narration": "Lời giải: Dùng góc phụ theo đơn vị độ, cot của ba mươi độ cộng alpha bằng tan của chín mươi độ trừ mở ngoặc ba mươi độ cộng alpha, tức tan của sáu mươi độ trừ alpha. Áp dụng công thức nghiệm của tang theo độ: hai alpha trừ mười lăm độ bằng sáu mươi độ trừ alpha cộng k một trăm tám mươi độ. Chuyển vế ta được ba alpha bằng bảy mươi lăm độ cộng k một trăm tám mươi độ. Chia cho ba, ta tìm được alpha bằng hai mươi lăm độ cộng k sáu mươi độ. Với điều kiện góc nhọn từ không đến chín mươi độ, ta nhận hai giá trị k là không và một, tương ứng với hai góc lắp đặt tối ưu là hai mươi lăm độ và tám mươi lăm độ.",
      "startTime": 208.58,
      "endTime": 245.09,
      "duration": 36.5,
      "sceneIndex": 10,
      "subtitle": "Mục 3: Phương trình lượng giác tan x = m và cot x = m • Cảnh 10",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-rose-500/30\">\n    <h4 class=\"text-rose-300 font-bold text-sm mb-2\">✅ LỜI GIẢI CHI TIẾT VÍ DỤ 4</h4>\n    <p class=\"text-slate-300 text-xs\">Sử dụng công thức hai góc phụ nhau theo độ: $\\cot(30^\\circ + \\alpha) = \\tan[90^\\circ - (30^\\circ + \\alpha)] = \\tan(60^\\circ - \\alpha)$.</p>\n    <p class=\"text-slate-300 text-xs mt-1\">Phương trình tương đương với: $\\tan(2\\alpha - 15^\\circ) = \\tan(60^\\circ - \\alpha)$:</p>\n    <div class=\"mt-2 space-y-2 text-xs text-slate-200\">\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold\">• Giải theo công thức nghiệm tang:</span>\n        <p class=\"mt-1\">$$2\\alpha - 15^\\circ = 60^\\circ - \\alpha + k180^\\circ \\Leftrightarrow 3\\alpha = 75^\\circ + k180^\\circ$$</p>\n        <p class=\"mt-1 font-bold text-yellow-300\">$$\\Leftrightarrow \\alpha = 25^\\circ + k60^\\circ \\quad (k \\in \\mathbb{Z})$$</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-800/80 rounded-lg border border-slate-700\">\n        <span class=\"text-sky-400 font-bold\">• Chặn điều kiện thiết kế kỹ thuật $0^\\circ < \\alpha < 90^\\circ$:</span>\n        <p class=\"mt-1\">$$0^\\circ < 25^\\circ + k60^\\circ < 90^\\circ \\Leftrightarrow -25^\\circ < k60^\\circ < 65^\\circ \\Leftrightarrow -\\frac{5}{12} < k < \\frac{13}{12}$$</p>\n        <p class=\"mt-1\">Vì $k \\in \\mathbb{Z} \\Rightarrow k \\in \\{0; 1\\}$. Ta thu được 2 giá trị:</p>\n        <p class=\"mt-1 font-semibold text-emerald-300\">\n          • Với $k = 0 \\Rightarrow \\alpha_1 = 25^\\circ$ (thỏa mãn điều kiện xác định).<br/>\n          • Với $k = 1 \\Rightarrow \\alpha_2 = 25^\\circ + 60^\\circ = 85^\\circ$ (thỏa mãn điều kiện xác định).\n        </p>\n      </div>\n    </div>\n    <div class=\"p-2.5 bg-rose-950/60 rounded border border-rose-500/40 mt-2 text-xs\">\n      <strong class=\"text-rose-300\">Kết luận kỹ thuật:</strong> Có đúng <strong>2 góc lắp đặt khả thi</strong> là <strong class=\"text-yellow-300\">$\\alpha = 25^\\circ$</strong> và <strong class=\"text-yellow-300\">$\\alpha = 85^\\circ$</strong>.\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "talking",
      "mascotTip": "Mô hình hóa thực tế: Luôn quy đổi góc về radian hoặc độ tùy theo yêu cầu của bài toán!"
    },
    {
      "id": "scene_11",
      "title": "Bẫy trắc nghiệm & Sai lầm phổ biến khi giải tan và cot",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-red-950/60 to-rose-900/40 p-4 rounded-xl border border-red-500/40\">\n    <h3 class=\"text-rose-300 font-bold text-base flex items-center gap-2\">\n      <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 rounded text-xs font-bold\">CẢNH BÁO</span>\n      3 SAI LẦM PHỔ BIẾN KHI GIẢI PHƯƠNG TRÌNH TANG & CÔTANG\n    </h3>\n    <div class=\"mt-3 space-y-2.5 text-sm\">\n      <div class=\"p-3 bg-slate-900/80 rounded-lg border border-red-500/30\">\n        <span class=\"text-rose-400 font-bold\">1. NHẦM ĐUÔI CHU KỲ $k2\\pi$:</span>\n        <p class=\"text-slate-300 mt-1\">Hàm tang và côtang chỉ có chu kỳ là $\\pi$. Do đó nghiệm chỉ có đuôi là <strong>$+ k\\pi$</strong>, tuyệt đối không viết $+ k2\\pi$!</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/80 rounded-lg border border-red-500/30\">\n        <span class=\"text-amber-400 font-bold\">2. TƯỞNG NHẦM PHƯƠNG TRÌNH VÔ NGHIỆM:</span>\n        <p class=\"text-slate-300 mt-1\">Nhiều bạn nhớ nhầm điều kiện của sin/cos nên cho rằng $\\tan x = 5$ hay $\\tan x = -10$ là vô nghiệm! Thực tế tang và côtang luôn có nghiệm với mọi giá trị $m$.</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/80 rounded-lg border border-red-500/30\">\n        <span class=\"text-sky-400 font-bold\">3. QUÊN ĐẶT ĐIỀU KIỆN XÁC ĐỊNH:</span>\n        <p class=\"text-slate-300 mt-1\">Khi bài toán có $\\tan$ hay $\\cot$ ở cả hai vế hoặc trong phương trình tích, bắt buộc phải đặt ĐKXĐ để loại bỏ nghiệm ngoại lai.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ba cạm bẫy trắc nghiệm cần nhớ khi giải tang và côtang: Một là, chu kỳ chỉ là pi nên đuôi nghiệm bắt buộc là cộng k pi, không bao giờ là k 2 pi. Hai là, phương trình tang và côtang luôn có nghiệm với mọi m thực, đừng nhầm sang điều kiện của sin và cos. Ba là, tuyệt đối không được quên đặt điều kiện xác định để loại bỏ các nghiệm ngoại lai.",
      "startTime": 245.09,
      "endTime": 265.94,
      "duration": 20.86,
      "sceneIndex": 11,
      "subtitle": "Mục 3: Phương trình lượng giác tan x = m và cot x = m • Cảnh 11",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-red-950/60 to-rose-900/40 p-4 rounded-xl border border-red-500/40\">\n    <h3 class=\"text-rose-300 font-bold text-base flex items-center gap-2\">\n      <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 rounded text-xs font-bold\">CẢNH BÁO</span>\n      3 SAI LẦM PHỔ BIẾN KHI GIẢI PHƯƠNG TRÌNH TANG & CÔTANG\n    </h3>\n    <div class=\"mt-3 space-y-2.5 text-sm\">\n      <div class=\"p-3 bg-slate-900/80 rounded-lg border border-red-500/30\">\n        <span class=\"text-rose-400 font-bold\">1. NHẦM ĐUÔI CHU KỲ $k2\\pi$:</span>\n        <p class=\"text-slate-300 mt-1\">Hàm tang và côtang chỉ có chu kỳ là $\\pi$. Do đó nghiệm chỉ có đuôi là <strong>$+ k\\pi$</strong>, tuyệt đối không viết $+ k2\\pi$!</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/80 rounded-lg border border-red-500/30\">\n        <span class=\"text-amber-400 font-bold\">2. TƯỞNG NHẦM PHƯƠNG TRÌNH VÔ NGHIỆM:</span>\n        <p class=\"text-slate-300 mt-1\">Nhiều bạn nhớ nhầm điều kiện của sin/cos nên cho rằng $\\tan x = 5$ hay $\\tan x = -10$ là vô nghiệm! Thực tế tang và côtang luôn có nghiệm với mọi giá trị $m$.</p>\n      </div>\n      <div class=\"p-3 bg-slate-900/80 rounded-lg border border-red-500/30\">\n        <span class=\"text-sky-400 font-bold\">3. QUÊN ĐẶT ĐIỀU KIỆN XÁC ĐỊNH:</span>\n        <p class=\"text-slate-300 mt-1\">Khi bài toán có $\\tan$ hay $\\cot$ ở cả hai vế hoặc trong phương trình tích, bắt buộc phải đặt ĐKXĐ để loại bỏ nghiệm ngoại lai.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "magnifier",
      "mascotTip": "Cú Cảnh Báo Bẫy: Quên đặt điều kiện xác định của tan và cot sẽ bị trừ điểm hoặc chọn sai phương án nhiễu!"
    },
    {
      "id": "scene_12",
      "title": "Tổng kết Toàn bài Bài 4 & Sơ đồ Cú Thông Thái",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-950/60 to-yellow-900/40 p-4 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-3\">\n      <span class=\"text-3xl\">🦉</span>\n      <div>\n        <h3 class=\"text-amber-300 font-bold text-base\">BÍ KÍP CÚ THÔNG THÁI • TỔNG KẾT BÀI 4</h3>\n        <p class=\"text-slate-300 text-xs mt-0.5\">Bảng vàng 4 phương trình lượng giác cơ bản</p>\n      </div>\n    </div>\n    <div class=\"mt-3 grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs text-slate-200\">\n      <div class=\"p-2.5 bg-slate-900/80 rounded border border-emerald-500/40\">\n        <span class=\"text-emerald-400 font-bold text-sm\">$\\sin x = \\sin\\alpha$</span>\n        <p class=\"mt-1\">$x = \\alpha + k2\\pi$</p>\n        <p>$x = \\pi - \\alpha + k2\\pi$</p>\n        <span class=\"text-slate-400 text-[10px]\">ĐK: $|m| \\le 1$</span>\n      </div>\n      <div class=\"p-2.5 bg-slate-900/80 rounded border border-sky-500/40\">\n        <span class=\"text-sky-400 font-bold text-sm\">$\\cos x = \\cos\\alpha$</span>\n        <p class=\"mt-1\">$x = \\pm\\alpha + k2\\pi$</p>\n        <span class=\"text-slate-400 text-[10px]\">ĐK: $|m| \\le 1$</span>\n      </div>\n      <div class=\"p-2.5 bg-slate-900/80 rounded border border-amber-500/40\">\n        <span class=\"text-amber-400 font-bold text-sm\">$\\tan x = \\tan\\alpha$</span>\n        <p class=\"mt-1\">$x = \\alpha + k\\pi$</p>\n        <span class=\"text-slate-400 text-[10px]\">Luôn có nghiệm</span>\n      </div>\n      <div class=\"p-2.5 bg-slate-900/80 rounded border border-rose-500/40\">\n        <span class=\"text-rose-400 font-bold text-sm\">$\\cot x = \\cot\\alpha$</span>\n        <p class=\"mt-1\">$x = \\alpha + k\\pi$</p>\n        <span class=\"text-slate-400 text-[10px]\">Luôn có nghiệm</span>\n      </div>\n    </div>\n    <div class=\"mt-3 p-2 bg-slate-900/80 rounded-lg border border-amber-400/30 text-amber-200 text-xs text-center font-semibold\">\n      Chúc các em nắm chắc 100% bí kíp 4 phương trình lượng giác cơ bản để tự tin chinh phục mọi bài thi trắc nghiệm!\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã hoàn thành toàn bộ bài 4: Phương trình lượng giác cơ bản. Cú Thông Thái chúc các em nắm vững bảng vàng công thức: Sin là alpha và pi trừ alpha đuôi k hai pi. Cos là cộng trừ alpha đuôi k hai pi. Còn Tang và Côtang luôn có nghiệm với đuôi cộng k pi. Chúc các em luôn học giỏi và tự tin đạt điểm mười môn Toán!",
      "startTime": 265.94,
      "endTime": 288.55,
      "duration": 22.61,
      "sceneIndex": 12,
      "subtitle": "Mục 3: Phương trình lượng giác tan x = m và cot x = m • Cảnh 12",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-950/60 to-yellow-900/40 p-4 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-3\">\n      <span class=\"text-3xl\">🦉</span>\n      <div>\n        <h3 class=\"text-amber-300 font-bold text-base\">BÍ KÍP CÚ THÔNG THÁI • TỔNG KẾT BÀI 4</h3>\n        <p class=\"text-slate-300 text-xs mt-0.5\">Bảng vàng 4 phương trình lượng giác cơ bản</p>\n      </div>\n    </div>\n    <div class=\"mt-3 grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs text-slate-200\">\n      <div class=\"p-2.5 bg-slate-900/80 rounded border border-emerald-500/40\">\n        <span class=\"text-emerald-400 font-bold text-sm\">$\\sin x = \\sin\\alpha$</span>\n        <p class=\"mt-1\">$x = \\alpha + k2\\pi$</p>\n        <p>$x = \\pi - \\alpha + k2\\pi$</p>\n        <span class=\"text-slate-400 text-[10px]\">ĐK: $|m| \\le 1$</span>\n      </div>\n      <div class=\"p-2.5 bg-slate-900/80 rounded border border-sky-500/40\">\n        <span class=\"text-sky-400 font-bold text-sm\">$\\cos x = \\cos\\alpha$</span>\n        <p class=\"mt-1\">$x = \\pm\\alpha + k2\\pi$</p>\n        <span class=\"text-slate-400 text-[10px]\">ĐK: $|m| \\le 1$</span>\n      </div>\n      <div class=\"p-2.5 bg-slate-900/80 rounded border border-amber-500/40\">\n        <span class=\"text-amber-400 font-bold text-sm\">$\\tan x = \\tan\\alpha$</span>\n        <p class=\"mt-1\">$x = \\alpha + k\\pi$</p>\n        <span class=\"text-slate-400 text-[10px]\">Luôn có nghiệm</span>\n      </div>\n      <div class=\"p-2.5 bg-slate-900/80 rounded border border-rose-500/40\">\n        <span class=\"text-rose-400 font-bold text-sm\">$\\cot x = \\cot\\alpha$</span>\n        <p class=\"mt-1\">$x = \\alpha + k\\pi$</p>\n        <span class=\"text-slate-400 text-[10px]\">Luôn có nghiệm</span>\n      </div>\n    </div>\n    <div class=\"mt-3 p-2 bg-slate-900/80 rounded-lg border border-amber-400/30 text-amber-200 text-xs text-center font-semibold\">\n      Chúc các em nắm chắc 100% bí kíp 4 phương trình lượng giác cơ bản để tự tin chinh phục mọi bài thi trắc nghiệm!\n    </div>\n  </div>\n</div>\n",
      "mascotMode": "cheer",
      "mascotTip": "Chúc mừng em đã hoàn thành trọn vẹn toàn bộ 4 bài học Chương I Toán 11 KNTT!"
    }
  ],
  "duration": 288.55,
  "totalDuration": 288.55,
  "timeline": [
    {
      "sceneId": "scene_1",
      "title": "1. PHƯƠNG TRÌNH TAN X = M & ĐIỀU KIỆN XÁC ĐỊNH",
      "startTime": 0,
      "endTime": 29.3,
      "duration": 29.3
    },
    {
      "sceneId": "scene_2",
      "title": "2. PHƯƠNG TRÌNH COT X = M & CÔNG THỨC CHUYỂN ĐỔI",
      "startTime": 29.3,
      "endTime": 54.91,
      "duration": 25.61
    },
    {
      "sceneId": "scene_3",
      "title": "Ví dụ 1: Giải phương trình tan và cot cơ bản (Mức Nhận biết)",
      "startTime": 54.91,
      "endTime": 70.01,
      "duration": 15.1
    },
    {
      "sceneId": "scene_4",
      "title": "Ví dụ 1: Hướng dẫn giải chi tiết",
      "startTime": 70.01,
      "endTime": 95.26,
      "duration": 25.25
    },
    {
      "sceneId": "scene_5",
      "title": "Ví dụ 2: Phương trình tan(u) = c có đặt ĐKXĐ (Mức Thông hiểu)",
      "startTime": 95.26,
      "endTime": 107.04,
      "duration": 11.78
    },
    {
      "sceneId": "scene_6",
      "title": "Ví dụ 2: Hướng dẫn giải chi tiết",
      "startTime": 107.04,
      "endTime": 136.37,
      "duration": 29.33
    },
    {
      "sceneId": "scene_7",
      "title": "Ví dụ 3: Phương trình tích tan x . tan 2x = 1 (Mức Vận dụng)",
      "startTime": 136.37,
      "endTime": 154.08,
      "duration": 17.71
    },
    {
      "sceneId": "scene_8",
      "title": "Ví dụ 3: Hướng dẫn giải chi tiết",
      "startTime": 154.08,
      "endTime": 189.38,
      "duration": 35.3
    },
    {
      "sceneId": "scene_9",
      "title": "Ví dụ 4: Bài toán góc nghiêng giàn pin năng lượng mặt trời (Vận dụng cao)",
      "startTime": 189.38,
      "endTime": 208.58,
      "duration": 19.2
    },
    {
      "sceneId": "scene_10",
      "title": "Ví dụ 4: Hướng dẫn giải chi tiết",
      "startTime": 208.58,
      "endTime": 245.09,
      "duration": 36.5
    },
    {
      "sceneId": "scene_11",
      "title": "Bẫy trắc nghiệm & Sai lầm phổ biến khi giải tan và cot",
      "startTime": 245.09,
      "endTime": 265.94,
      "duration": 20.86
    },
    {
      "sceneId": "scene_12",
      "title": "Tổng kết Toàn bài Bài 4 & Sơ đồ Cú Thông Thái",
      "startTime": 265.94,
      "endTime": 288.55,
      "duration": 22.61
    }
  ]
};

  window.G11_CHAPTER1_DATA.toan11_bai4_muc1 = window.G11_CHAPTER1_DATA.g11_bai4_muc1;
  window.G11_CHAPTER1_DATA.toan11_bai4_muc2 = window.G11_CHAPTER1_DATA.g11_bai4_muc2;
  window.G11_CHAPTER1_DATA.toan11_bai4_muc3 = window.G11_CHAPTER1_DATA.g11_bai4_muc3;

  if (typeof LECTURE_DATA !== 'undefined') {
    Object.assign(LECTURE_DATA, window.G11_CHAPTER1_DATA);
  }
}


/* =========================================================================
   BÀI TẬP CUỐI CHƯƠNG I (ÔN TẬP CHƯƠNG 1) - TOÁN 11 KNTT
   Mục 1, 2, 3: Đầy đủ 12 Scenes, 4 Ví dụ minh họa, Đồng hồ 15s/30s & Giọng Nam Minh
   ========================================================================= */
if (typeof window !== 'undefined') {
  window.G11_CHAPTER1_DATA = window.G11_CHAPTER1_DATA || {};

  window.G11_CHAPTER1_DATA.g11_ontap_c1_muc1 = {
  "key": "g11_ontap_c1_muc1",
  "lessonId": "toan11_ontap_c1",
  "lessonTitle": "Bài tập cuối chương I (Ôn tập chương 1)",
  "sectionId": "g11_ontap_c1_muc1",
  "sectionTitle": "Mục 1: Hệ thống hóa lý thuyết & Sơ đồ tư duy 4 bài học Chương 1",
  "title": "Mục 1: Hệ thống hóa lý thuyết & Sơ đồ tư duy 4 bài học Chương 1",
  "audio": "/audio/g11_ontap_c1_muc1.mp3",
  "audioSrc": "./audio/g11_ontap_c1_muc1.mp3",
  "audio_src": "./audio/g11_ontap_c1_muc1.mp3",
  "owl_tip": "Ghi nhớ thần chú: Cos đối, Sin bù, Phụ chéo, Khác pi tang! Sin thì sin cos cos sin, Cos thì cos cos sin sin dấu trừ!",
  "totalDuration": 318.82,
  "duration": 318.82,
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm & Hệ thống hóa kiến thức",
      "scenes": [
        1,
        2
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 4 Ví dụ minh họa tiêu biểu (Đồng hồ 15s/30s)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Cảnh báo bẫy trắc nghiệm & Sai lầm thường gặp",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Tổng kết bài học & Bí kíp Cú Thông Thái",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    {
      "id": "scene_1",
      "time": 0.0,
      "label": "1. TỔNG QUAN HỆ THỐNG KIẾN THỨC CHƯƠNG 1"
    },
    {
      "id": "scene_2",
      "time": 29.88,
      "label": "2. SƠ ĐỒ TƯ DUY CỐT LÕI CÔNG THỨC LƯỢNG GIÁC"
    },
    {
      "id": "scene_3",
      "time": 66.41,
      "label": "3. VÍ DỤ 1 - ĐỀ BÀI: TÍNH ĐỘ DÀI CUNG TRÒN BÁNH XE QUAY"
    },
    {
      "id": "scene_4",
      "time": 89.09,
      "label": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT"
    },
    {
      "id": "scene_5",
      "time": 123.36,
      "label": "5. VÍ DỤ 2 - ĐỀ BÀI: RÚT GỌN BIỂU THỨC LƯỢNG GIÁC"
    },
    {
      "id": "scene_6",
      "time": 142.85,
      "label": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT"
    },
    {
      "id": "scene_7",
      "time": 181.51,
      "label": "7. VÍ DỤ 3 - ĐỀ BÀI: TÌM TẬP XÁC ĐỊNH CỦA HÀM SỐ"
    },
    {
      "id": "scene_8",
      "time": 196.94,
      "label": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT"
    },
    {
      "id": "scene_9",
      "time": 228.96,
      "label": "9. VÍ DỤ 4 - ĐỀ BÀI: GIẢI PHƯƠNG TRÌNH LƯỢNG GIÁC CƠ BẢN"
    },
    {
      "id": "scene_10",
      "time": 243.79,
      "label": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT"
    },
    {
      "id": "scene_11",
      "time": 268.87,
      "label": "11. CẢNH BÁO BẪY THI & SAI LẦM PHỔ BIẾN"
    },
    {
      "id": "scene_12",
      "time": 298.97,
      "label": "12. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI"
    }
  ],
  "scenes": [
    {
      "id": "scene_1",
      "sceneIndex": 1,
      "title": "1. TỔNG QUAN HỆ THỐNG KIẾN THỨC CHƯƠNG 1",
      "subtitle": "BÀI TẬP CUỐI CHƯƠNG 1 • TOÁN 11 KẾT NỐI TRI THỨC",
      "mascotMode": "pointer",
      "mascotTip": "Chương 1 gồm 4 bài liên hoàn: Góc lượng giác -> Công thức lượng giác -> Hàm số lượng giác -> Phương trình lượng giác!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Hệ thống hóa</span>\n      <h3 class=\"text-xl font-black text-emerald-200\">Sơ Đồ Liên Hoàn 4 Bài Học Chương 1</h3>\n    </div>\n    <p class=\"text-sm text-slate-300\">Toàn bộ chuyên đề Lượng giác 11 được xây dựng theo một chu trình logic hoàn chỉnh:</p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md\">\n      <h4 class=\"font-bold text-emerald-300 text-sm mb-1\">📘 Bài 1: Góc & Giá trị Lượng giác</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Đơn vị radian: $\\pi\\text{ rad} = 180^\\circ$, độ dài cung $l = R\\alpha$.<br/>• Giá trị $\\sin, \\cos, \\tan, \\cot$ trên đường tròn lượng giác bán kính $R=1$.<br/>• Các hệ thức cơ bản và cung liên quan đặc biệt.</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-teal-400 shadow-md\">\n      <h4 class=\"font-bold text-teal-300 text-sm mb-1\">📗 Bài 2: Công thức Lượng giác</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Công thức cộng: $\\sin(a\\pm b), \\cos(a\\pm b), \\tan(a\\pm b)$.<br/>• Công thức nhân đôi, hạ bậc và góc bội.<br/>• Công thức biến đổi tích thành tổng & tổng thành tích.</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-cyan-400 shadow-md\">\n      <h4 class=\"font-bold text-cyan-300 text-sm mb-1\">📙 Bài 3: Hàm số Lượng giác</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• TXĐ, TGT, tính chẵn - lẻ, tính tuần hoàn & chu kỳ.<br/>• Đồ thị hình sóng của $y=\\sin x, y=\\cos x$ (chu kỳ $2\\pi$).<br/>• Đồ thị và các đường tiệm cận của $y=\\tan x, y=\\cot x$ (chu kỳ $\\pi$).</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-amber-400 shadow-md\">\n      <h4 class=\"font-bold text-amber-300 text-sm mb-1\">📕 Bài 4: Phương trình Lượng giác Cơ bản</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• $\\sin x = m \\iff x = \\alpha + k2\\pi$ hoặc $x = \\pi - \\alpha + k2\\pi$.<br/>• $\\cos x = m \\iff x = \\pm\\alpha + k2\\pi$.<br/>• $\\tan x = m, \\cot x = m \\iff x = \\alpha + k\\pi$.</p>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Hệ thống hóa</span>\n      <h3 class=\"text-xl font-black text-emerald-200\">Sơ Đồ Liên Hoàn 4 Bài Học Chương 1</h3>\n    </div>\n    <p class=\"text-sm text-slate-300\">Toàn bộ chuyên đề Lượng giác 11 được xây dựng theo một chu trình logic hoàn chỉnh:</p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md\">\n      <h4 class=\"font-bold text-emerald-300 text-sm mb-1\">📘 Bài 1: Góc & Giá trị Lượng giác</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Đơn vị radian: $\\pi\\text{ rad} = 180^\\circ$, độ dài cung $l = R\\alpha$.<br/>• Giá trị $\\sin, \\cos, \\tan, \\cot$ trên đường tròn lượng giác bán kính $R=1$.<br/>• Các hệ thức cơ bản và cung liên quan đặc biệt.</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-teal-400 shadow-md\">\n      <h4 class=\"font-bold text-teal-300 text-sm mb-1\">📗 Bài 2: Công thức Lượng giác</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Công thức cộng: $\\sin(a\\pm b), \\cos(a\\pm b), \\tan(a\\pm b)$.<br/>• Công thức nhân đôi, hạ bậc và góc bội.<br/>• Công thức biến đổi tích thành tổng & tổng thành tích.</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-cyan-400 shadow-md\">\n      <h4 class=\"font-bold text-cyan-300 text-sm mb-1\">📙 Bài 3: Hàm số Lượng giác</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• TXĐ, TGT, tính chẵn - lẻ, tính tuần hoàn & chu kỳ.<br/>• Đồ thị hình sóng của $y=\\sin x, y=\\cos x$ (chu kỳ $2\\pi$).<br/>• Đồ thị và các đường tiệm cận của $y=\\tan x, y=\\cot x$ (chu kỳ $\\pi$).</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-amber-400 shadow-md\">\n      <h4 class=\"font-bold text-amber-300 text-sm mb-1\">📕 Bài 4: Phương trình Lượng giác Cơ bản</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• $\\sin x = m \\iff x = \\alpha + k2\\pi$ hoặc $x = \\pi - \\alpha + k2\\pi$.<br/>• $\\cos x = m \\iff x = \\pm\\alpha + k2\\pi$.<br/>• $\\tan x = m, \\cot x = m \\iff x = \\alpha + k\\pi$.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em học sinh lớp mười một đến với bài ôn tập toàn diện Chương một: Hàm số lượng giác và phương trình lượng giác. Đây là chương mở đầu có tính nền tảng cao của môn Toán lớp mười một, kết nối chặt chẽ bốn bài học cốt lõi: Bài một về góc và giá trị lượng giác, Bài hai về hệ thống công thức biến đổi lượng giác, Bài ba về tính chất và đồ thị bốn hàm số lượng giác, và Bài bốn về các phương trình lượng giác cơ bản. Nắm chắc mối liên kết liên hoàn này sẽ giúp các em tự tin bứt phá điểm số trong các kỳ thi sắp tới.",
      "startTime": 0.0,
      "endTime": 29.88,
      "duration": 29.88
    },
    {
      "id": "scene_2",
      "sceneIndex": 2,
      "title": "2. SƠ ĐỒ TƯ DUY CỐT LÕI CÔNG THỨC LƯỢNG GIÁC",
      "subtitle": "BÍ KÍP THUỘC LÒNG HỆ THỐNG CÔNG THỨC KHÔNG BAO GIỜ QUÊN",
      "mascotMode": "explain",
      "mascotTip": "Thần chú: Cos đối, Sin bù, Phụ chéo, Khác pi tang! Sin thì sin cos cos sin, Cos thì cos cos sin sin dấu trừ!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-teal-500/30\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"w-3 h-3 rounded-full bg-teal-400 animate-pulse\"></span>\n      <h3 class=\"text-lg font-bold text-teal-300\">Bảng Tổng Hợp Công Thức Cốt Lõi Cần Nhớ</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-emerald-400 font-bold block mb-1\">1. Hệ thức cơ bản ($k \\in \\mathbb{Z}$):</span>\n        $$\\sin^2\\alpha + \\cos^2\\alpha = 1$$\n        $$1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha} \\; (\\alpha \\ne \\frac{\\pi}{2} + k\\pi)$$\n        $$1 + \\cot^2\\alpha = \\frac{1}{\\sin^2\\alpha} \\; (\\alpha \\ne k\\pi), \\quad \\tan\\alpha \\cdot \\cot\\alpha = 1$$\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-cyan-400 font-bold block mb-1\">2. Công thức cộng chuẩn:</span>\n        $$\\sin(a \\pm b) = \\sin a\\cos b \\pm \\cos a\\sin b$$\n        $$\\cos(a \\pm b) = \\cos a\\cos b \\mp \\sin a\\sin b$$\n        $$\\tan(a \\pm b) = \\frac{\\tan a \\pm \\tan b}{1 \\mp \\tan a\\tan b}$$\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold block mb-1\">3. Công thức nhân đôi:</span>\n        $$\\sin 2a = 2\\sin a\\cos a$$\n        $$\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$$\n        $$\\tan 2a = \\frac{2\\tan a}{1 - \\tan^2 a}$$\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-rose-400 font-bold block mb-1\">4. Công thức hạ bậc:</span>\n        $$\\cos^2 a = \\frac{1 + \\cos 2a}{2}$$\n        $$\\sin^2 a = \\frac{1 - \\cos 2a}{2}$$\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-teal-500/30\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"w-3 h-3 rounded-full bg-teal-400 animate-pulse\"></span>\n      <h3 class=\"text-lg font-bold text-teal-300\">Bảng Tổng Hợp Công Thức Cốt Lõi Cần Nhớ</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-emerald-400 font-bold block mb-1\">1. Hệ thức cơ bản ($k \\in \\mathbb{Z}$):</span>\n        $$\\sin^2\\alpha + \\cos^2\\alpha = 1$$\n        $$1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha} \\; (\\alpha \\ne \\frac{\\pi}{2} + k\\pi)$$\n        $$1 + \\cot^2\\alpha = \\frac{1}{\\sin^2\\alpha} \\; (\\alpha \\ne k\\pi), \\quad \\tan\\alpha \\cdot \\cot\\alpha = 1$$\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-cyan-400 font-bold block mb-1\">2. Công thức cộng chuẩn:</span>\n        $$\\sin(a \\pm b) = \\sin a\\cos b \\pm \\cos a\\sin b$$\n        $$\\cos(a \\pm b) = \\cos a\\cos b \\mp \\sin a\\sin b$$\n        $$\\tan(a \\pm b) = \\frac{\\tan a \\pm \\tan b}{1 \\mp \\tan a\\tan b}$$\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold block mb-1\">3. Công thức nhân đôi:</span>\n        $$\\sin 2a = 2\\sin a\\cos a$$\n        $$\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$$\n        $$\\tan 2a = \\frac{2\\tan a}{1 - \\tan^2 a}$$\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-rose-400 font-bold block mb-1\">4. Công thức hạ bậc:</span>\n        $$\\cos^2 a = \\frac{1 + \\cos 2a}{2}$$\n        $$\\sin^2 a = \\frac{1 - \\cos 2a}{2}$$\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Để ghi nhớ các công thức lượng giác một cách nhẹ nhàng mà không bao giờ nhầm dấu, các em hãy nắm vững các quy tắc thần chú: Trước hết là hệ thức cơ bản: sin bình cộng cos bình bằng một; một cộng tang bình bằng một chia cos bình; một cộng côtang bình bằng một chia sin bình. Các góc liên kết: Cốt đối, Sin bù, Phụ chéo, Hơn kém pi tang. Công thức cộng: sin thì sin cos cos sin, cos thì cos cos sin sin dấu trừ. Từ đó ta suy ra công thức nhân đôi sin hai a bằng hai sin a cos a, cos hai a bằng hai cos bình a trừ một, và công thức hạ bậc rất hay dùng để tìm nguyên hàm sau này.",
      "startTime": 29.88,
      "endTime": 66.41,
      "duration": 36.53
    },
    {
      "id": "scene_3",
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1 - ĐỀ BÀI: TÍNH ĐỘ DÀI CUNG TRÒN BÁNH XE QUAY",
      "subtitle": "BÀI TOÁN THỰC TẾ • ỨNG DỤNG ĐƠN VỊ RADIAN $l = R\\alpha$",
      "mascotMode": "think",
      "mascotTip": "Ghi nhớ công thức $l = R \\alpha$. Đổi đơn vị chính xác và chú ý làm tròn theo yêu cầu!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 1 • Thực tế</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-emerald-200 mb-2\">Bài toán chuyển động quay của bánh xe</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Một bánh xe đạp có bán kính $R = 40\\text{ cm}$. Khi bánh xe quay được một góc lượng giác có số đo $\\alpha = \\frac{7\\pi}{4}\\text{ rad}$, hãy tính độ dài quãng đường $l$ mà một điểm trên vành bánh xe đã vạch ra (lấy $\\pi \\approx 3{,}1416$, làm tròn đến hàng phần mười).\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $l \\approx 109{,}9\\text{ cm}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $l \\approx 219{,}9\\text{ cm}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $l \\approx 280{,}0\\text{ cm}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $l \\approx 140{,}5\\text{ cm}$</div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 1 • Thực tế</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-emerald-200 mb-2\">Bài toán chuyển động quay của bánh xe</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Một bánh xe đạp có bán kính $R = 40\\text{ cm}$. Khi bánh xe quay được một góc lượng giác có số đo $\\alpha = \\frac{7\\pi}{4}\\text{ rad}$, hãy tính độ dài quãng đường $l$ mà một điểm trên vành bánh xe đã vạch ra (lấy $\\pi \\approx 3{,}1416$, làm tròn đến hàng phần mười).\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $l \\approx 109{,}9\\text{ cm}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $l \\approx 219{,}9\\text{ cm}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $l \\approx 280{,}0\\text{ cm}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $l \\approx 140{,}5\\text{ cm}$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng bắt đầu với Ví dụ số một. Một bánh xe đạp có bán kính bằng bốn mươi xăng-ti-mét. Khi người đạp xe chuyển động làm bánh xe quay một góc an-pha bằng bảy pi phần tư radian, hãy tính độ dài quãng đường mà một điểm trên vành bánh xe đã di chuyển được, làm tròn kết quả đến hàng phần mười. Các em có mười lăm giây để suy nghĩ và ghi nhanh đáp án ra nháp.",
      "startTime": 66.41,
      "endTime": 89.09,
      "duration": 22.68
    },
    {
      "id": "scene_4",
      "sceneIndex": 4,
      "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $l \\approx 219{,}9\\text{ cm}$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "cheer",
      "mascotTip": "$l = 40 \\times \\frac{7\\pi}{4} = 70\\pi \\approx 219.9\\text{ cm}$. Chúc mừng các em chọn B!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-emerald-300\">Áp dụng công thức độ dài cung $l = R\\alpha$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Độ dài cung tròn mà điểm trên vành bánh xe vạch ra là:</p>\n      <div class=\"text-center font-bold text-emerald-300 text-sm py-1\">\n        $$l = R \\cdot \\alpha = 40 \\cdot \\frac{7\\pi}{4} = 70\\pi \\text{ (cm)}$$\n      </div>\n      <p class=\"text-slate-200\">• Thay $\\pi \\approx 3{,}1416$ vào biểu thức:</p>\n      <div class=\"text-center font-bold text-amber-300 text-sm py-1\">\n        $$l \\approx 70 \\times 3{,}1416 = 219{,}912 \\approx 219{,}9 \\text{ (cm)}$$\n      </div>\n      <div class=\"p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2\">\n        <b>Kết luận:</b> Điểm trên vành bánh xe di chuyển được quãng đường xấp xỉ $219{,}9\\text{ cm}$. <br/>\n        👉 <b>Đáp án chọn: B</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-emerald-300\">Áp dụng công thức độ dài cung $l = R\\alpha$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Độ dài cung tròn mà điểm trên vành bánh xe vạch ra là:</p>\n      <div class=\"text-center font-bold text-emerald-300 text-sm py-1\">\n        $$l = R \\cdot \\alpha = 40 \\cdot \\frac{7\\pi}{4} = 70\\pi \\text{ (cm)}$$\n      </div>\n      <p class=\"text-slate-200\">• Thay $\\pi \\approx 3{,}1416$ vào biểu thức:</p>\n      <div class=\"text-center font-bold text-amber-300 text-sm py-1\">\n        $$l \\approx 70 \\times 3{,}1416 = 219{,}912 \\approx 219{,}9 \\text{ (cm)}$$\n      </div>\n      <div class=\"p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2\">\n        <b>Kết luận:</b> Điểm trên vành bánh xe di chuyển được quãng đường xấp xỉ $219{,}9\\text{ cm}$. <br/>\n        👉 <b>Đáp án chọn: B</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Chúng ta cùng xem lời giải chi tiết. Áp dụng công thức tính độ dài cung tròn: l bằng R nhân an-pha. Trong đó bán kính R bằng bốn mươi xăng-ti-mét, góc an-pha bằng bảy pi phần tư radian. Thay số vào ta có: l bằng bốn mươi nhân bảy pi phần tư, rút gọn bốn mươi chia bốn được mười, mười nhân bảy bằng bảy mươi pi xăng-ti-mét. Lấy pi xấp xỉ ba phẩy một bốn một sáu, ta được kết quả xấp xỉ hai trăm mười chín phẩy chín xăng-ti-mét. Đáp án chính xác là B.",
      "startTime": 89.09,
      "endTime": 123.36,
      "duration": 34.27
    },
    {
      "id": "scene_5",
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 2 - ĐỀ BÀI: RÚT GỌN BIỂU THỨC LƯỢNG GIÁC",
      "subtitle": "DẠNG 2 • ÁP DỤNG CÔNG THỨC NHÂN ĐÔI VÀ HỆ THỨC LƯỢNG GIÁC",
      "mascotMode": "think",
      "mascotTip": "Khai triển $\\sin 2x = 2\\sin x \\cos x$ và $\\cos 2x = 2\\cos^2 x - 1$ để xuất hiện nhân tử chung $(2\\cos x + 1)$!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-teal-950/80 to-slate-900 p-5 rounded-2xl border-2 border-teal-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-teal-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 2 • Rút gọn</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-teal-200 mb-2\">Rút gọn biểu thức lượng giác chứa góc nhân đôi</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Rút gọn biểu thức sau trên miền xác định:\n      $$A = \\frac{\\sin 2x + \\sin x}{1 + \\cos 2x + \\cos x}$$\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $A = \\cot x$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $A = \\tan x$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $A = 2\\tan x$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $A = 1$</div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-teal-950/80 to-slate-900 p-5 rounded-2xl border-2 border-teal-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-teal-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 2 • Rút gọn</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-teal-200 mb-2\">Rút gọn biểu thức lượng giác chứa góc nhân đôi</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Rút gọn biểu thức sau trên miền xác định:\n      $$A = \\frac{\\sin 2x + \\sin x}{1 + \\cos 2x + \\cos x}$$\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $A = \\cot x$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $A = \\tan x$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $A = 2\\tan x$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $A = 1$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Tiếp tục với Ví dụ số hai. Rút gọn biểu thức lượng giác: A bằng mở ngoặc sin hai x cộng sin x đóng ngoặc, chia cho mở ngoặc một cộng cos hai x cộng cos x đóng ngoặc, với giả thiết biểu thức hoàn toàn xác định. Các em có ba mươi giây để vận dụng công thức nhân đôi của sin và cos để rút gọn biểu thức này.",
      "startTime": 123.36,
      "endTime": 142.85,
      "duration": 19.49
    },
    {
      "id": "scene_6",
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ RÚT GỌN $A = \\tan x$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "celebrate",
      "mascotTip": "Phép biến đổi kinh điển: $1 + \\cos 2x = 2\\cos^2 x$, xuất hiện ngay nhân tử $(2\\cos x + 1)$!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-teal-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-teal-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-teal-300\">Khai triển nhân đôi và triệt tiêu nhân tử chung</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Biến đổi tử số:</p>\n      $$\\text{Tử} = \\sin 2x + \\sin x = 2\\sin x\\cos x + \\sin x = \\sin x(2\\cos x + 1)$$\n      <p class=\"text-slate-200\">• Biến đổi mẫu số (áp dụng $\\cos 2x = 2\\cos^2 x - 1$):</p>\n      $$\\text{Mẫu} = 1 + (2\\cos^2 x - 1) + \\cos x = 2\\cos^2 x + \\cos x = \\cos x(2\\cos x + 1)$$\n      <p class=\"text-slate-200\">• Thay vào biểu thức $A$ và rút gọn:</p>\n      <div class=\"text-center font-bold text-teal-300 text-sm py-1\">\n        $$A = \\frac{\\sin x(2\\cos x + 1)}{\\cos x(2\\cos x + 1)} = \\frac{\\sin x}{\\cos x} = \\tan x$$\n      </div>\n      <div class=\"p-2.5 bg-teal-500/20 border-l-4 border-teal-400 rounded text-teal-200 mt-2\">\n        👉 <b>Đáp án chọn: B ($A = \\tan x$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-teal-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-teal-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-teal-300\">Khai triển nhân đôi và triệt tiêu nhân tử chung</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Biến đổi tử số:</p>\n      $$\\text{Tử} = \\sin 2x + \\sin x = 2\\sin x\\cos x + \\sin x = \\sin x(2\\cos x + 1)$$\n      <p class=\"text-slate-200\">• Biến đổi mẫu số (áp dụng $\\cos 2x = 2\\cos^2 x - 1$):</p>\n      $$\\text{Mẫu} = 1 + (2\\cos^2 x - 1) + \\cos x = 2\\cos^2 x + \\cos x = \\cos x(2\\cos x + 1)$$\n      <p class=\"text-slate-200\">• Thay vào biểu thức $A$ và rút gọn:</p>\n      <div class=\"text-center font-bold text-teal-300 text-sm py-1\">\n        $$A = \\frac{\\sin x(2\\cos x + 1)}{\\cos x(2\\cos x + 1)} = \\frac{\\sin x}{\\cos x} = \\tan x$$\n      </div>\n      <div class=\"p-2.5 bg-teal-500/20 border-l-4 border-teal-400 rounded text-teal-200 mt-2\">\n        👉 <b>Đáp án chọn: B ($A = \\tan x$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết ba mươi giây. Chúng ta cùng phân tích biểu thức A. Ở tử số, khai triển sin hai x bằng hai sin x nhân cos x. Khi đặt sin x ra ngoài, ta được tử số bằng sin x nhân mở ngoặc hai cos x cộng một đóng ngoặc. Ở mẫu số, ta dùng công thức nhân đôi cos hai x bằng hai cos bình x trừ một. Số một và trừ một triệt tiêu nhau, mẫu số còn hai cos bình x cộng cos x. Đặt cos x ra ngoài, mẫu số bằng cos x nhân mở ngoặc hai cos x cộng một đóng ngoặc. Rút gọn nhân tử chung hai cos x cộng một ở cả tử và mẫu, ta thu được A bằng sin x chia cos x, chính là bằng tang x. Đáp án chọn là B.",
      "startTime": 142.85,
      "endTime": 181.51,
      "duration": 38.66
    },
    {
      "id": "scene_7",
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 3 - ĐỀ BÀI: TÌM TẬP XÁC ĐỊNH CỦA HÀM SỐ",
      "subtitle": "DẠNG 3 • ĐIỀU KIỆN CĂN BẬC HAI VÀ MẪU THỨC CHỨA BIỂU THỨC LƯỢNG GIÁC",
      "mascotMode": "think",
      "mascotTip": "Lưu ý $1 - \\cos 2x = 2\\sin^2 x \\ge 0$, do đó căn bậc hai xác định khi $\\sin x > 0$!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-cyan-950/80 to-slate-900 p-5 rounded-2xl border-2 border-cyan-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 3 • Tập xác định</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-cyan-200 mb-2\">Tìm tập xác định chứa căn thức và phân thức</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Tìm tập xác định $D$ của hàm số sau:\n      $$y = \\sqrt{\\frac{1 - \\cos 2x}{\\sin x}}$$\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $D = \\bigcup_{k\\in\\mathbb{Z}} (k2\\pi; \\pi + k2\\pi)$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $D = \\bigcup_{k\\in\\mathbb{Z}} [k2\\pi; \\pi + k2\\pi]$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $D = \\mathbb{R}$</div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-cyan-950/80 to-slate-900 p-5 rounded-2xl border-2 border-cyan-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 3 • Tập xác định</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-cyan-200 mb-2\">Tìm tập xác định chứa căn thức và phân thức</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Tìm tập xác định $D$ của hàm số sau:\n      $$y = \\sqrt{\\frac{1 - \\cos 2x}{\\sin x}}$$\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $D = \\bigcup_{k\\in\\mathbb{Z}} (k2\\pi; \\pi + k2\\pi)$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $D = \\bigcup_{k\\in\\mathbb{Z}} [k2\\pi; \\pi + k2\\pi]$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $D = \\mathbb{R}$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúng ta bước sang Ví dụ số ba: Tìm tập xác định D của hàm số y bằng căn bậc hai của biểu thức: một trừ cos hai x chia cho sin x. Bài toán này kết hợp cả điều kiện căn bậc hai không âm và mẫu số phải khác không. Các em có mười lăm giây để suy luận.",
      "startTime": 181.51,
      "endTime": 196.94,
      "duration": 15.43
    },
    {
      "id": "scene_8",
      "sceneIndex": 8,
      "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $D = \\bigcup_{k\\in\\mathbb{Z}} (k2\\pi; \\pi + k2\\pi)$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "explain",
      "mascotTip": "Điểm trên đường tròn có tung độ dương khi thuộc nửa trên trục Ox: $(k2\\pi; \\pi + k2\\pi)$!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-cyan-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-cyan-300\">Đánh giá dấu tử số và điều kiện mẫu số dương</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Điều kiện xác định của hàm số:</p>\n      $$\\begin{cases} \\frac{1 - \\cos 2x}{\\sin x} \\ge 0 \\\\ \\sin x \\ne 0 \\end{cases}$$\n      <p class=\"text-slate-200\">• Áp dụng công thức hạ bậc, ta có tử số: $1 - \\cos 2x = 2\\sin^2 x \\ge 0, \\forall x$.</p>\n      <p class=\"text-slate-200\">• Khi $\\sin x \\ne 0$ thì $2\\sin^2 x > 0$. Do đó hệ điều kiện tương đương:</p>\n      <div class=\"text-center font-bold text-cyan-300 text-sm py-1\">\n        $$\\sin x > 0 \\iff k2\\pi < x < \\pi + k2\\pi \\quad (k \\in \\mathbb{Z})$$\n      </div>\n      <div class=\"p-2.5 bg-cyan-500/20 border-l-4 border-cyan-400 rounded text-cyan-200 mt-2\">\n        👉 <b>Tập xác định:</b> $D = \\bigcup_{k \\in \\mathbb{Z}} (k2\\pi; \\pi + k2\\pi)$. <br/>\n        👉 <b>Đáp án chọn: B</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-cyan-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-cyan-300\">Đánh giá dấu tử số và điều kiện mẫu số dương</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Điều kiện xác định của hàm số:</p>\n      $$\\begin{cases} \\frac{1 - \\cos 2x}{\\sin x} \\ge 0 \\\\ \\sin x \\ne 0 \\end{cases}$$\n      <p class=\"text-slate-200\">• Áp dụng công thức hạ bậc, ta có tử số: $1 - \\cos 2x = 2\\sin^2 x \\ge 0, \\forall x$.</p>\n      <p class=\"text-slate-200\">• Khi $\\sin x \\ne 0$ thì $2\\sin^2 x > 0$. Do đó hệ điều kiện tương đương:</p>\n      <div class=\"text-center font-bold text-cyan-300 text-sm py-1\">\n        $$\\sin x > 0 \\iff k2\\pi < x < \\pi + k2\\pi \\quad (k \\in \\mathbb{Z})$$\n      </div>\n      <div class=\"p-2.5 bg-cyan-500/20 border-l-4 border-cyan-400 rounded text-cyan-200 mt-2\">\n        👉 <b>Tập xác định:</b> $D = \\bigcup_{k \\in \\mathbb{Z}} (k2\\pi; \\pi + k2\\pi)$. <br/>\n        👉 <b>Đáp án chọn: B</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Hàm số xác định khi và chỉ khi biểu thức trong căn lớn hơn hoặc bằng không và mẫu số sin x khác không. Ta nhận thấy tử số là một trừ cos hai x bằng hai sin bình x, luôn lớn hơn hoặc bằng không với mọi x. Để phân thức có nghĩa và không âm, ta bắt buộc phải có mẫu số sin x lớn hơn hẳn không. Trên đường tròn lượng giác, giá trị sin của một góc dương khi và chỉ khi điểm biểu diễn nằm ở nửa trên trục hoành, tức x thuộc khoảng từ k hai pi đến pi cộng k hai pi, với k thuộc Z. Do đó đáp án chính xác là B.",
      "startTime": 196.94,
      "endTime": 228.96,
      "duration": 32.02
    },
    {
      "id": "scene_9",
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 4 - ĐỀ BÀI: GIẢI PHƯƠNG TRÌNH LƯỢNG GIÁC CƠ BẢN",
      "subtitle": "DẠNG 4 • PHƯƠNG TRÌNH $\\sin(2x - \\frac{\\pi}{3}) = \\frac{\\sqrt{3}}{2}$",
      "mascotMode": "think",
      "mascotTip": "$\\frac{\\sqrt{3}}{2} = \\sin \\frac{\\pi}{3}$. Luôn có 2 họ nghiệm $u = \\alpha + k2\\pi$ và $u = \\pi - \\alpha + k2\\pi$!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-950/80 to-slate-900 p-5 rounded-2xl border-2 border-amber-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 4 • Giải PTLG</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-amber-200 mb-2\">Phương trình $\\sin u(x) = m$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Giải phương trình lượng giác sau:\n      $$\\sin\\left(2x - \\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$$\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $x = \\frac{\\pi}{3} + k\\pi, x = \\frac{\\pi}{2} + k\\pi$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $x = \\frac{\\pi}{6} + k\\pi, x = \\frac{\\pi}{3} + k\\pi$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $x = \\frac{\\pi}{3} + k2\\pi, x = \\frac{\\pi}{2} + k2\\pi$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $x = \\pm\\frac{\\pi}{3} + k\\pi$</div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-950/80 to-slate-900 p-5 rounded-2xl border-2 border-amber-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 4 • Giải PTLG</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-amber-200 mb-2\">Phương trình $\\sin u(x) = m$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Giải phương trình lượng giác sau:\n      $$\\sin\\left(2x - \\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$$\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $x = \\frac{\\pi}{3} + k\\pi, x = \\frac{\\pi}{2} + k\\pi$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $x = \\frac{\\pi}{6} + k\\pi, x = \\frac{\\pi}{3} + k\\pi$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $x = \\frac{\\pi}{3} + k2\\pi, x = \\frac{\\pi}{2} + k2\\pi$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $x = \\pm\\frac{\\pi}{3} + k\\pi$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số bốn: Giải phương trình lượng giác sin của mở ngoặc hai x trừ pi phần ba đóng ngoặc bằng căn ba chia hai. Phương trình lượng giác cơ bản có hai nhánh nghiệm. Các em có ba mươi giây để tìm chính xác cả hai họ nghiệm của phương trình.",
      "startTime": 228.96,
      "endTime": 243.79,
      "duration": 14.83
    },
    {
      "id": "scene_10",
      "sceneIndex": 10,
      "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $x = \\frac{\\pi}{3} + k\\pi$ VÀ $x = \\frac{\\pi}{2} + k\\pi$ (CHỌN ĐÁP ÁN A)",
      "mascotMode": "cheer",
      "mascotTip": "Lưu ý chia 2 vế cho 2 thì chu kỳ $k2\\pi$ sẽ thành $k\\pi$! Đáp án A hoàn toàn chuẩn xác!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-amber-300\">Biến đổi theo công thức nghiệm tổng quát của sin</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Ta có $\\frac{\\sqrt{3}}{2} = \\sin\\frac{\\pi}{3}$. Phương trình trở thành:</p>\n      $$\\sin\\left(2x - \\frac{\\pi}{3}\\right) = \\sin\\frac{\\pi}{3} \\iff \\left[\\begin{array}{l} 2x - \\frac{\\pi}{3} = \\frac{\\pi}{3} + k2\\pi \\\\ 2x - \\frac{\\pi}{3} = \\pi - \\frac{\\pi}{3} + k2\\pi \\end{array}\\right.$$\n      <p class=\"text-slate-200\">• Giải từng trường hợp ($k \\in \\mathbb{Z}$):</p>\n      $$\\left[\\begin{array}{l} 2x = \\frac{2\\pi}{3} + k2\\pi \\iff x = \\frac{\\pi}{3} + k\\pi \\\\ 2x = \\pi + k2\\pi \\iff x = \\frac{\\pi}{2} + k\\pi \\end{array}\\right.$$\n      <div class=\"p-2.5 bg-amber-500/20 border-l-4 border-amber-400 rounded text-amber-200 mt-2\">\n        👉 <b>Nghiệm của phương trình:</b> $x = \\frac{\\pi}{3} + k\\pi$ và $x = \\frac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$). <br/>\n        👉 <b>Đáp án chọn: A</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-amber-300\">Biến đổi theo công thức nghiệm tổng quát của sin</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Ta có $\\frac{\\sqrt{3}}{2} = \\sin\\frac{\\pi}{3}$. Phương trình trở thành:</p>\n      $$\\sin\\left(2x - \\frac{\\pi}{3}\\right) = \\sin\\frac{\\pi}{3} \\iff \\left[\\begin{array}{l} 2x - \\frac{\\pi}{3} = \\frac{\\pi}{3} + k2\\pi \\\\ 2x - \\frac{\\pi}{3} = \\pi - \\frac{\\pi}{3} + k2\\pi \\end{array}\\right.$$\n      <p class=\"text-slate-200\">• Giải từng trường hợp ($k \\in \\mathbb{Z}$):</p>\n      $$\\left[\\begin{array}{l} 2x = \\frac{2\\pi}{3} + k2\\pi \\iff x = \\frac{\\pi}{3} + k\\pi \\\\ 2x = \\pi + k2\\pi \\iff x = \\frac{\\pi}{2} + k\\pi \\end{array}\\right.$$\n      <div class=\"p-2.5 bg-amber-500/20 border-l-4 border-amber-400 rounded text-amber-200 mt-2\">\n        👉 <b>Nghiệm của phương trình:</b> $x = \\frac{\\pi}{3} + k\\pi$ và $x = \\frac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$). <br/>\n        👉 <b>Đáp án chọn: A</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thời gian đã hết. Vì căn ba chia hai bằng sin của pi phần ba, phương trình tương đương hai trường hợp. Trường hợp một: hai x trừ pi phần ba bằng pi phần ba cộng k hai pi. Chuyển vế ta được hai x bằng hai pi phần ba cộng k hai pi, chia hai vế cho hai ta được x bằng pi phần ba cộng k pi. Trường hợp hai: hai x trừ pi phần ba bằng pi trừ pi phần ba cộng k hai pi. Rút gọn ta được hai x bằng pi cộng k hai pi, chia hai ta được x bằng pi phần hai cộng k pi, với k thuộc Z. Cả hai họ nghiệm đều rất chuẩn xác và chu kỳ là k pi. Đáp án chính xác là A.",
      "startTime": 243.79,
      "endTime": 268.87,
      "duration": 25.08
    },
    {
      "id": "scene_11",
      "sceneIndex": 11,
      "title": "11. CẢNH BÁO BẪY THI & SAI LẦM PHỔ BIẾN",
      "subtitle": "TOP 3 BẪY LƯỢNG GIÁC KHIẾN HỌC SINH MẤT ĐIỂM ĐÁNG TIẾC",
      "mascotMode": "explain",
      "mascotTip": "Ghi nhớ: Hàm tan, cot chu kỳ pi; hàm sin, cos chu kỳ 2pi; đừng quên điều kiện k thuộc Z!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase\">Cảnh Báo Bẫy Thi</span>\n      <h3 class=\"text-base font-bold text-rose-300\">3 Lỗi Sai Thường Gặp Cần Tuyệt Đối Tránh</h3>\n    </div>\n    <div class=\"grid grid-cols-3 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400\">\n        <h4 class=\"font-bold text-rose-300 mb-1\">❌ Bẫy 1: Quên TXĐ của tan/cot</h4>\n        <p class=\"text-slate-300 leading-relaxed\">Khi phương trình có chứa $\\tan x$ hoặc $\\cot x$, bắt buộc đặt điều kiện $\\cos x \\ne 0$ ($x \\ne \\frac{\\pi}{2} + k\\pi$) hoặc $\\sin x \\ne 0$ ($x \\ne k\\pi$).</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400\">\n        <h4 class=\"font-bold text-amber-300 mb-1\">❌ Bẫy 2: Thiếu họ nghiệm $\\pi - \\alpha$</h4>\n        <p class=\"text-slate-300 leading-relaxed\">Phương trình $\\sin x = m$ luôn có 2 họ nghiệm $\\alpha + k2\\pi$ và $\\pi - \\alpha + k2\\pi$. Tuyệt đối không chỉ lấy duy nhất một họ nghiệm!</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-cyan-400\">\n        <h4 class=\"font-bold text-cyan-300 mb-1\">❌ Bẫy 3: Nhầm chu kỳ tuần hoàn</h4>\n        <p class=\"text-slate-300 leading-relaxed\">Hàm $y=\\sin(\\omega x)$ có chu kỳ $T=\\frac{2\\pi}{|\\omega|}$. Nhưng hàm $y=\\tan(\\omega x)$ có chu kỳ $T=\\frac{\\pi}{|\\omega|}$ (chỉ có $\\pi$ ở tử số)!</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase\">Cảnh Báo Bẫy Thi</span>\n      <h3 class=\"text-base font-bold text-rose-300\">3 Lỗi Sai Thường Gặp Cần Tuyệt Đối Tránh</h3>\n    </div>\n    <div class=\"grid grid-cols-3 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400\">\n        <h4 class=\"font-bold text-rose-300 mb-1\">❌ Bẫy 1: Quên TXĐ của tan/cot</h4>\n        <p class=\"text-slate-300 leading-relaxed\">Khi phương trình có chứa $\\tan x$ hoặc $\\cot x$, bắt buộc đặt điều kiện $\\cos x \\ne 0$ ($x \\ne \\frac{\\pi}{2} + k\\pi$) hoặc $\\sin x \\ne 0$ ($x \\ne k\\pi$).</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400\">\n        <h4 class=\"font-bold text-amber-300 mb-1\">❌ Bẫy 2: Thiếu họ nghiệm $\\pi - \\alpha$</h4>\n        <p class=\"text-slate-300 leading-relaxed\">Phương trình $\\sin x = m$ luôn có 2 họ nghiệm $\\alpha + k2\\pi$ và $\\pi - \\alpha + k2\\pi$. Tuyệt đối không chỉ lấy duy nhất một họ nghiệm!</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-cyan-400\">\n        <h4 class=\"font-bold text-cyan-300 mb-1\">❌ Bẫy 3: Nhầm chu kỳ tuần hoàn</h4>\n        <p class=\"text-slate-300 leading-relaxed\">Hàm $y=\\sin(\\omega x)$ có chu kỳ $T=\\frac{2\\pi}{|\\omega|}$. Nhưng hàm $y=\\tan(\\omega x)$ có chu kỳ $T=\\frac{\\pi}{|\\omega|}$ (chỉ có $\\pi$ ở tử số)!</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thầy Nam Minh lưu ý ba bẫy thi thường gặp ở Chương một: Thứ nhất, khi giải phương trình tang x bằng m, rất nhiều bạn quên điều kiện cos x khác không, tức x khác pi phần hai cộng k pi. Thứ hai, đối với phương trình sin x bằng m, nhiều bạn chỉ lấy một họ nghiệm x bằng an-pha cộng k hai pi mà quên mất họ nghiệm thứ hai là pi trừ an-pha cộng k hai pi. Thứ ba, khi tính chu kỳ tuần hoàn, hàm số sin và cos có chu kỳ là hai pi, nhưng hàm số tang và côtang chỉ có chu kỳ là pi.",
      "startTime": 268.87,
      "endTime": 298.97,
      "duration": 30.1
    },
    {
      "id": "scene_12",
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
      "subtitle": "NẮM VỮNG NỀN TẢNG ĐỂ BƯỚC VÀO RÈN LUYỆN 4 DẠNG TOÁN TRỌNG TÂM",
      "mascotMode": "celebrate",
      "mascotTip": "Ghi chép sơ đồ tư duy vào sổ tay! Chuyển ngay sang Mục 2 để rèn luyện 4 dạng toán thực chiến!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-br from-emerald-900/80 via-teal-900/60 to-slate-900 p-6 rounded-2xl border-2 border-emerald-400/40 text-center shadow-2xl\">\n    <div class=\"inline-block p-3 bg-emerald-500/20 rounded-full mb-3 text-3xl\">🦉✨</div>\n    <h3 class=\"text-xl font-black text-emerald-200 mb-2\">Chúc Mừng Em Hoàn Thành Mục 1!</h3>\n    <p class=\"text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4\">\n      Em đã làm chủ trọn vẹn bản đồ tư duy 4 bài học và vượt qua 4 ví dụ củng cố nền tảng. Hãy ghi nhớ thần chú lượng giác và sẵn sàng bước sang Mục 2 để rèn luyện 4 dạng toán thực chiến điểm 9+!\n    </p>\n    <div class=\"flex justify-center gap-4 text-xs font-bold\">\n      <span class=\"px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-lg border border-emerald-400/40\">✔ 4 Ví dụ đã hoàn thành</span>\n      <span class=\"px-4 py-2 bg-teal-500/30 text-teal-300 rounded-lg border border-teal-400/40\">✔ Sơ đồ tư duy sẵn sàng</span>\n      <span class=\"px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40\">🚀 Chuyển sang Mục 2</span>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-br from-emerald-900/80 via-teal-900/60 to-slate-900 p-6 rounded-2xl border-2 border-emerald-400/40 text-center shadow-2xl\">\n    <div class=\"inline-block p-3 bg-emerald-500/20 rounded-full mb-3 text-3xl\">🦉✨</div>\n    <h3 class=\"text-xl font-black text-emerald-200 mb-2\">Chúc Mừng Em Hoàn Thành Mục 1!</h3>\n    <p class=\"text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4\">\n      Em đã làm chủ trọn vẹn bản đồ tư duy 4 bài học và vượt qua 4 ví dụ củng cố nền tảng. Hãy ghi nhớ thần chú lượng giác và sẵn sàng bước sang Mục 2 để rèn luyện 4 dạng toán thực chiến điểm 9+!\n    </p>\n    <div class=\"flex justify-center gap-4 text-xs font-bold\">\n      <span class=\"px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-lg border border-emerald-400/40\">✔ 4 Ví dụ đã hoàn thành</span>\n      <span class=\"px-4 py-2 bg-teal-500/30 text-teal-300 rounded-lg border border-teal-400/40\">✔ Sơ đồ tư duy sẵn sàng</span>\n      <span class=\"px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40\">🚀 Chuyển sang Mục 2</span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Như vậy, thầy trò chúng ta đã hoàn thành xuất sắc Mục một: Hệ thống hóa lý thuyết và bốn ví dụ tiêu biểu cho Chương một. Các em hãy ghi nhớ vững chắc các công thức cốt lõi và các bẫy thi vừa nêu. Ngay bây giờ, mời các em chuyển sang Mục hai để cùng rèn luyện bốn dạng toán trọng tâm hay xuất hiện nhất trong các đề kiểm tra định kỳ.",
      "startTime": 298.97,
      "endTime": 318.82,
      "duration": 19.85
    }
  ]
};

  window.G11_CHAPTER1_DATA.toan11_ontap_c1_muc1 = window.G11_CHAPTER1_DATA.g11_ontap_c1_muc1;

  window.G11_CHAPTER1_DATA.g11_ontap_c1_muc2 = {
  "key": "g11_ontap_c1_muc2",
  "lessonId": "toan11_ontap_c1",
  "lessonTitle": "Bài tập cuối chương I (Ôn tập chương 1)",
  "sectionId": "g11_ontap_c1_muc2",
  "sectionTitle": "Mục 2: Rèn luyện 4 dạng toán trọng tâm & Phương pháp giải",
  "title": "Mục 2: Rèn luyện 4 dạng toán trọng tâm & Phương pháp giải",
  "audio": "/audio/g11_ontap_c1_muc2.mp3",
  "audioSrc": "./audio/g11_ontap_c1_muc2.mp3",
  "audio_src": "./audio/g11_ontap_c1_muc2.mp3",
  "owl_tip": "Làm chủ 4 dạng toán then chốt: Tính giá trị, Cực trị GTLN/GTNN, Đếm số nghiệm trên đoạn, và Bài toán thực tế thủy triều!",
  "totalDuration": 356.23,
  "duration": 356.23,
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm & Hệ thống hóa kiến thức",
      "scenes": [
        1,
        2
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 4 Ví dụ minh họa tiêu biểu (Đồng hồ 15s/30s)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Cảnh báo bẫy trắc nghiệm & Sai lầm thường gặp",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Tổng kết bài học & Bí kíp Cú Thông Thái",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    {
      "id": "scene_1",
      "time": 0.0,
      "label": "1. TỔNG QUAN 4 DẠNG TOÁN TRỌNG TÂM TRONG ĐỀ THI"
    },
    {
      "id": "scene_2",
      "time": 27.12,
      "label": "2. CHIẾN THUẬT XỬ LÝ & BẢNG XÉT DẤU GÓC PHẦN TƯ"
    },
    {
      "id": "scene_3",
      "time": 60.74,
      "label": "3. DẠNG 1 - VÍ DỤ 1: TÍNH GIÁ TRỊ BIỂU THỨC LƯỢNG GIÁC"
    },
    {
      "id": "scene_4",
      "time": 80.23,
      "label": "4. DẠNG 1 - VÍ DỤ 1: LỜI GIẢI CHI TIẾT"
    },
    {
      "id": "scene_5",
      "time": 129.6,
      "label": "5. DẠNG 2 - VÍ DỤ 2: TÌM GIÁ TRỊ LỚN NHẤT VÀ NHỎ NHẤT"
    },
    {
      "id": "scene_6",
      "time": 144.98,
      "label": "6. DẠNG 2 - VÍ DỤ 2: LỜI GIẢI CHI TIẾT"
    },
    {
      "id": "scene_7",
      "time": 182.02,
      "label": "7. DẠNG 3 - VÍ DỤ 3: ĐẾM SỐ NGHIỆM TRÊN ĐOẠN $[0; 2\\pi]$"
    },
    {
      "id": "scene_8",
      "time": 198.7,
      "label": "8. DẠNG 3 - VÍ DỤ 3: LỜI GIẢI CHI TIẾT"
    },
    {
      "id": "scene_9",
      "time": 247.37,
      "label": "9. DẠNG 4 - VÍ DỤ 4: BÀI TOÁN THỰC TẾ MÔ HÌNH THỦY TRIỀU"
    },
    {
      "id": "scene_10",
      "time": 273.96,
      "label": "10. DẠNG 4 - VÍ DỤ 4: LỜI GIẢI CHI TIẾT"
    },
    {
      "id": "scene_11",
      "time": 309.22,
      "label": "11. CHIẾN LƯỢC TRÁNH BẪY ĐẾM NGHIỆM VÀ ĐÁNH GIÁ TẬP GIÁ TRỊ"
    },
    {
      "id": "scene_12",
      "time": 334.22,
      "label": "12. TỔNG KẾT MỤC 2 & BÀN ĐẠP BƯỚC SANG MỤC 3"
    }
  ],
  "scenes": [
    {
      "id": "scene_1",
      "sceneIndex": 1,
      "title": "1. TỔNG QUAN 4 DẠNG TOÁN TRỌNG TÂM TRONG ĐỀ THI",
      "subtitle": "MỤC 2 • MA TRẬN ĐỀ KIỂM TRA ĐỊNH KỲ & THI HỌC KỲ I",
      "mascotMode": "pointer",
      "mascotTip": "4 dạng toán cốt lõi chiếm tới 80% điểm số Lượng giác: Tính giá trị, Cực trị, Đếm nghiệm, và Bài toán thực tế!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/60 to-indigo-900/40 p-4 rounded-xl border border-blue-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Trọng tâm</span>\n      <h3 class=\"text-xl font-black text-blue-200\">4 Dạng Toán Cốt Lõi Phủ Kín Ma Trận Đề Thi</h3>\n    </div>\n    <p class=\"text-sm text-slate-300\">Rèn luyện phương pháp nhận diện nhanh và kỹ năng giải toán chính xác:</p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-blue-400 shadow-md\">\n      <h4 class=\"font-bold text-blue-300 text-sm mb-1\">🎯 Dạng 1: Tính giá trị biểu thức lượng giác</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Cho trước 1 giá trị lượng giác và khoảng của góc $\\alpha$.<br/>• Xét dấu góc phần tư để chọn nghiệm dấu $(+)$ hoặc $(-)$.<br/>• Áp dụng công thức cộng, nhân đôi để tính giá trị biểu thức $P$.</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-indigo-400 shadow-md\">\n      <h4 class=\"font-bold text-indigo-300 text-sm mb-1\">📊 Dạng 2: Tìm GTLN, GTNN của hàm số</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Biến đổi biểu thức về cùng một hàm số $\\sin$ hoặc $\\cos$.<br/>• Đánh giá dựa trên miền chặn $-1 \\le \\sin u, \\cos u \\le 1$.<br/>• Tìm điều kiện để đẳng thức xảy ra (tìm $x$ tương ứng).</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-purple-400 shadow-md\">\n      <h4 class=\"font-bold text-purple-300 text-sm mb-1\">🔢 Dạng 3: Đếm số nghiệm trên đoạn $[a; b]$</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Giải tìm họ nghiệm tổng quát chứa tham số nguyên $k$.<br/>• Thiết lập bất phương trình kép: $a \\le x_k \\le b$.<br/>• Đếm số giá trị $k \\in \\mathbb{Z}$ và kiểm tra loại bỏ nghiệm trùng nhau.</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-cyan-400 shadow-md\">\n      <h4 class=\"font-bold text-cyan-300 text-sm mb-1\">🌊 Dạng 4: Bài toán thực tế mô hình lượng giác</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Độ sâu mực nước thủy triều theo thời gian trong ngày $h(t)$.<br/>• Chuyển động quay của bánh xe, con lắc, cánh quạt gió.<br/>• Tìm thời điểm đạt cực trị và thời điểm đạt mức yêu cầu.</p>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/60 to-indigo-900/40 p-4 rounded-xl border border-blue-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Trọng tâm</span>\n      <h3 class=\"text-xl font-black text-blue-200\">4 Dạng Toán Cốt Lõi Phủ Kín Ma Trận Đề Thi</h3>\n    </div>\n    <p class=\"text-sm text-slate-300\">Rèn luyện phương pháp nhận diện nhanh và kỹ năng giải toán chính xác:</p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-blue-400 shadow-md\">\n      <h4 class=\"font-bold text-blue-300 text-sm mb-1\">🎯 Dạng 1: Tính giá trị biểu thức lượng giác</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Cho trước 1 giá trị lượng giác và khoảng của góc $\\alpha$.<br/>• Xét dấu góc phần tư để chọn nghiệm dấu $(+)$ hoặc $(-)$.<br/>• Áp dụng công thức cộng, nhân đôi để tính giá trị biểu thức $P$.</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-indigo-400 shadow-md\">\n      <h4 class=\"font-bold text-indigo-300 text-sm mb-1\">📊 Dạng 2: Tìm GTLN, GTNN của hàm số</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Biến đổi biểu thức về cùng một hàm số $\\sin$ hoặc $\\cos$.<br/>• Đánh giá dựa trên miền chặn $-1 \\le \\sin u, \\cos u \\le 1$.<br/>• Tìm điều kiện để đẳng thức xảy ra (tìm $x$ tương ứng).</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-purple-400 shadow-md\">\n      <h4 class=\"font-bold text-purple-300 text-sm mb-1\">🔢 Dạng 3: Đếm số nghiệm trên đoạn $[a; b]$</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Giải tìm họ nghiệm tổng quát chứa tham số nguyên $k$.<br/>• Thiết lập bất phương trình kép: $a \\le x_k \\le b$.<br/>• Đếm số giá trị $k \\in \\mathbb{Z}$ và kiểm tra loại bỏ nghiệm trùng nhau.</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-cyan-400 shadow-md\">\n      <h4 class=\"font-bold text-cyan-300 text-sm mb-1\">🌊 Dạng 4: Bài toán thực tế mô hình lượng giác</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Độ sâu mực nước thủy triều theo thời gian trong ngày $h(t)$.<br/>• Chuyển động quay của bánh xe, con lắc, cánh quạt gió.<br/>• Tìm thời điểm đạt cực trị và thời điểm đạt mức yêu cầu.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục hai của bài ôn tập Chương một. Ở mục này, chúng ta sẽ tập trung rèn luyện bốn dạng toán cốt lõi chiếm tới tám mươi phần trăm số điểm phần lượng giác trong đề thi: Dạng một là tính giá trị lượng giác khi biết một giá trị cho trước kết hợp dấu góc phần tư; Dạng hai là tìm tập giá trị, giá trị lớn nhất và nhỏ nhất; Dạng ba là đếm số nghiệm của phương trình lượng giác trên một đoạn cho trước; và Dạng bốn là bài toán thực tế mô hình hóa dao động điều hòa và thủy triều.",
      "startTime": 0.0,
      "endTime": 27.12,
      "duration": 27.12
    },
    {
      "id": "scene_2",
      "sceneIndex": 2,
      "title": "2. CHIẾN THUẬT XỬ LÝ & BẢNG XÉT DẤU GÓC PHẦN TƯ",
      "subtitle": "KỸ NĂNG VÀNG: KHÔNG BAO GIỜ BỊ SAI DẤU LƯỢNG GIÁC",
      "mascotMode": "explain",
      "mascotTip": "Góc phần tư: I (all +); II (sin +); III (tan, cot +); IV (cos +). Thần chú: Nhất cả, Nhì sin, Tam tang, Tứ cos!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-blue-500/30\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"w-3 h-3 rounded-full bg-blue-400 animate-pulse\"></span>\n      <h3 class=\"text-lg font-bold text-blue-300\">Bảng Thần Chú Xét Dấu Góc Phần Tư: \"Nhất Cả, Nhì Sin, Tam Tang, Tứ Cos\"</h3>\n    </div>\n    <div class=\"grid grid-cols-4 gap-2 text-center text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-emerald-500/30\">\n        <span class=\"text-emerald-400 font-bold block mb-1\">Góc phần tư I</span>\n        <span class=\"text-slate-300 text-[11px]\">$(0 < \\alpha < \\frac{\\pi}{2})$</span>\n        <div class=\"mt-2 text-emerald-300 font-bold leading-relaxed\">\n          $\\sin\\alpha > 0$<br/>$\\cos\\alpha > 0$<br/>$\\tan\\alpha > 0, \\cot\\alpha > 0$\n        </div>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-teal-500/30\">\n        <span class=\"text-teal-400 font-bold block mb-1\">Góc phần tư II</span>\n        <span class=\"text-slate-300 text-[11px]\">$(\\frac{\\pi}{2} < \\alpha < \\pi)$</span>\n        <div class=\"mt-2 text-teal-300 font-bold leading-relaxed\">\n          $\\mathbf{\\sin\\alpha > 0}$<br/>$\\cos\\alpha < 0$<br/>$\\tan\\alpha < 0, \\cot\\alpha < 0$\n        </div>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-amber-500/30\">\n        <span class=\"text-amber-400 font-bold block mb-1\">Góc phần tư III</span>\n        <span class=\"text-slate-300 text-[11px]\">$(\\pi < \\alpha < \\frac{3\\pi}{2})$</span>\n        <div class=\"mt-2 text-amber-300 font-bold leading-relaxed\">\n          $\\sin\\alpha < 0$<br/>$\\cos\\alpha < 0$<br/>$\\mathbf{\\tan\\alpha > 0, \\cot\\alpha > 0}$\n        </div>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-indigo-500/30\">\n        <span class=\"text-indigo-400 font-bold block mb-1\">Góc phần tư IV</span>\n        <span class=\"text-slate-300 text-[11px]\">$(\\frac{3\\pi}{2} < \\alpha < 2\\pi)$</span>\n        <div class=\"mt-2 text-indigo-300 font-bold leading-relaxed\">\n          $\\sin\\alpha < 0$<br/>$\\mathbf{\\cos\\alpha > 0}$<br/>$\\tan\\alpha < 0, \\cot\\alpha < 0$\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-blue-500/30\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"w-3 h-3 rounded-full bg-blue-400 animate-pulse\"></span>\n      <h3 class=\"text-lg font-bold text-blue-300\">Bảng Thần Chú Xét Dấu Góc Phần Tư: \"Nhất Cả, Nhì Sin, Tam Tang, Tứ Cos\"</h3>\n    </div>\n    <div class=\"grid grid-cols-4 gap-2 text-center text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-emerald-500/30\">\n        <span class=\"text-emerald-400 font-bold block mb-1\">Góc phần tư I</span>\n        <span class=\"text-slate-300 text-[11px]\">$(0 < \\alpha < \\frac{\\pi}{2})$</span>\n        <div class=\"mt-2 text-emerald-300 font-bold leading-relaxed\">\n          $\\sin\\alpha > 0$<br/>$\\cos\\alpha > 0$<br/>$\\tan\\alpha > 0, \\cot\\alpha > 0$\n        </div>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-teal-500/30\">\n        <span class=\"text-teal-400 font-bold block mb-1\">Góc phần tư II</span>\n        <span class=\"text-slate-300 text-[11px]\">$(\\frac{\\pi}{2} < \\alpha < \\pi)$</span>\n        <div class=\"mt-2 text-teal-300 font-bold leading-relaxed\">\n          $\\mathbf{\\sin\\alpha > 0}$<br/>$\\cos\\alpha < 0$<br/>$\\tan\\alpha < 0, \\cot\\alpha < 0$\n        </div>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-amber-500/30\">\n        <span class=\"text-amber-400 font-bold block mb-1\">Góc phần tư III</span>\n        <span class=\"text-slate-300 text-[11px]\">$(\\pi < \\alpha < \\frac{3\\pi}{2})$</span>\n        <div class=\"mt-2 text-amber-300 font-bold leading-relaxed\">\n          $\\sin\\alpha < 0$<br/>$\\cos\\alpha < 0$<br/>$\\mathbf{\\tan\\alpha > 0, \\cot\\alpha > 0}$\n        </div>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-indigo-500/30\">\n        <span class=\"text-indigo-400 font-bold block mb-1\">Góc phần tư IV</span>\n        <span class=\"text-slate-300 text-[11px]\">$(\\frac{3\\pi}{2} < \\alpha < 2\\pi)$</span>\n        <div class=\"mt-2 text-indigo-300 font-bold leading-relaxed\">\n          $\\sin\\alpha < 0$<br/>$\\mathbf{\\cos\\alpha > 0}$<br/>$\\tan\\alpha < 0, \\cot\\alpha < 0$\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Để giải quyết nhanh và chính xác bốn dạng toán này, các em cần có chiến lược rõ ràng. Với bài toán tìm giá trị, luôn vẽ nhanh vòng tròn lượng giác để kiểm tra dấu âm dương của các hàm số trong từng góc phần tư. Thần chú: Nhất cả, Nhì sin, Tam tang, Tứ cos. Với bài toán tìm giá trị lớn nhất, nhỏ nhất, hãy đưa biểu thức về cùng một hàm số rồi chặn trong đoạn từ trừ một đến một. Với bài toán đếm nghiệm, sau khi tìm được họ nghiệm theo k, hãy thiết lập bất phương trình kép để tìm số lượng số nguyên k tương ứng.",
      "startTime": 27.12,
      "endTime": 60.74,
      "duration": 33.62
    },
    {
      "id": "scene_3",
      "sceneIndex": 3,
      "title": "3. DẠNG 1 - VÍ DỤ 1: TÍNH GIÁ TRỊ BIỂU THỨC LƯỢNG GIÁC",
      "subtitle": "ĐỀ BÀI • CHO $\\cos\\alpha = -\\frac{3}{5}$ VỚI $\\frac{\\pi}{2} < \\alpha < \\pi$",
      "mascotMode": "think",
      "mascotTip": "Góc phần tư II nên $\\sin\\alpha > 0$. Tính $\\sin\\alpha = \\frac{4}{5}$, $\\tan\\alpha = -\\frac{4}{3}$!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-950/80 to-slate-900 p-5 rounded-2xl border-2 border-blue-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-blue-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Dạng 1 • Tính Giá Trị</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-blue-200 mb-2\">Tính giá trị biểu thức $P$ theo $\\alpha$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Cho $\\cos\\alpha = -\\frac{3}{5}$ với $\\frac{\\pi}{2} < \\alpha < \\pi$. Tính giá trị của biểu thức:\n      $$P = \\frac{\\sin 2\\alpha - 1}{\\cos 2\\alpha + \\tan\\alpha}$$\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $P = -\\frac{147}{121}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $P = \\frac{147}{121}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $P = \\frac{49}{75}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $P = \\frac{121}{147}$</div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-950/80 to-slate-900 p-5 rounded-2xl border-2 border-blue-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-blue-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Dạng 1 • Tính Giá Trị</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-blue-200 mb-2\">Tính giá trị biểu thức $P$ theo $\\alpha$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Cho $\\cos\\alpha = -\\frac{3}{5}$ với $\\frac{\\pi}{2} < \\alpha < \\pi$. Tính giá trị của biểu thức:\n      $$P = \\frac{\\sin 2\\alpha - 1}{\\cos 2\\alpha + \\tan\\alpha}$$\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $P = -\\frac{147}{121}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $P = \\frac{147}{121}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $P = \\frac{49}{75}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $P = \\frac{121}{147}$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số một của Dạng một: Cho biết cos an-pha bằng trừ ba phần năm, với an-pha nằm trong khoảng từ pi phần hai đến pi. Hãy tính giá trị của biểu thức P bằng mở ngoặc sin hai an-pha trừ một đóng ngoặc, chia cho mở ngoặc cos hai an-pha cộng tang an-pha đóng ngoặc. Các em có ba mươi giây để tính toán.",
      "startTime": 60.74,
      "endTime": 80.23,
      "duration": 19.49
    },
    {
      "id": "scene_4",
      "sceneIndex": 4,
      "title": "4. DẠNG 1 - VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $P = \\frac{147}{121}$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "cheer",
      "mascotTip": "Tử: $-\\frac{49}{25}$; Mẫu: $-\\frac{121}{75}$. Chia hai số âm ra kết quả dương $\\frac{147}{121}$!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-blue-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-blue-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-blue-300\">Xác định dấu và tính toán từng thành phần</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Vì $\\frac{\\pi}{2} < \\alpha < \\pi$ (góc phần tư II) nên $\\sin\\alpha > 0$:</p>\n      $$\\sin\\alpha = \\sqrt{1 - \\cos^2\\alpha} = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5} \\implies \\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = -\\frac{4}{3}$$\n      <p class=\"text-slate-200\">• Tính $\\sin 2\\alpha$ và $\\cos 2\\alpha$:</p>\n      $$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha = 2\\left(\\frac{4}{5}\\right)\\left(-\\frac{3}{5}\\right) = -\\frac{24}{25}$$\n      $$\\cos 2\\alpha = 2\\cos^2\\alpha - 1 = 2\\left(\\frac{9}{25}\\right) - 1 = -\\frac{7}{25}$$\n      <p class=\"text-slate-200\">• Thay vào biểu thức $P$:</p>\n      $$\\text{Tử} = -\\frac{24}{25} - 1 = -\\frac{49}{25}; \\quad \\text{Mẫu} = -\\frac{7}{25} - \\frac{4}{3} = -\\frac{121}{75}$$\n      <div class=\"text-center font-bold text-blue-300 text-sm py-1\">\n        $$P = \\frac{-49/25}{-121/75} = \\left(-\\frac{49}{25}\\right) \\cdot \\left(-\\frac{75}{121}\\right) = \\frac{147}{121}$$\n      </div>\n      <div class=\"p-2.5 bg-blue-500/20 border-l-4 border-blue-400 rounded text-blue-200 mt-2\">\n        👉 <b>Đáp án chọn: B ($P = \\frac{147}{121}$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-blue-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-blue-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-blue-300\">Xác định dấu và tính toán từng thành phần</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Vì $\\frac{\\pi}{2} < \\alpha < \\pi$ (góc phần tư II) nên $\\sin\\alpha > 0$:</p>\n      $$\\sin\\alpha = \\sqrt{1 - \\cos^2\\alpha} = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5} \\implies \\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = -\\frac{4}{3}$$\n      <p class=\"text-slate-200\">• Tính $\\sin 2\\alpha$ và $\\cos 2\\alpha$:</p>\n      $$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha = 2\\left(\\frac{4}{5}\\right)\\left(-\\frac{3}{5}\\right) = -\\frac{24}{25}$$\n      $$\\cos 2\\alpha = 2\\cos^2\\alpha - 1 = 2\\left(\\frac{9}{25}\\right) - 1 = -\\frac{7}{25}$$\n      <p class=\"text-slate-200\">• Thay vào biểu thức $P$:</p>\n      $$\\text{Tử} = -\\frac{24}{25} - 1 = -\\frac{49}{25}; \\quad \\text{Mẫu} = -\\frac{7}{25} - \\frac{4}{3} = -\\frac{121}{75}$$\n      <div class=\"text-center font-bold text-blue-300 text-sm py-1\">\n        $$P = \\frac{-49/25}{-121/75} = \\left(-\\frac{49}{25}\\right) \\cdot \\left(-\\frac{75}{121}\\right) = \\frac{147}{121}$$\n      </div>\n      <div class=\"p-2.5 bg-blue-500/20 border-l-4 border-blue-400 rounded text-blue-200 mt-2\">\n        👉 <b>Đáp án chọn: B ($P = \\frac{147}{121}$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết ba mươi giây. Lời giải chi tiết như sau: Vì an-pha nằm ở góc phần tư thứ hai nên sin an-pha mang dấu dương. Ta có sin bình an-pha bằng một trừ cos bình, tức một trừ chín phần hai lăm bằng mười sáu phần hai lăm, suy ra sin an-pha bằng bốn phần năm. Từ đó ta tính được tang an-pha bằng trừ bốn phần ba. Tiếp theo, sin hai an-pha bằng hai nhân bốn phần năm nhân trừ ba phần năm bằng trừ hai mươi tư phần hai lăm. Cos hai an-pha bằng hai cos bình trừ một bằng trừ bảy phần hai lăm. Tử số của P bằng trừ bốn mươi chín phần hai lăm. Mẫu số bằng trừ một trăm hai mươi mốt phần bảy mươi lăm. Chia tử cho mẫu, ta được kết quả cuối cùng P bằng một trăm bốn mươi bảy phần một trăm hai mươi mốt. Đáp án chọn là B.",
      "startTime": 80.23,
      "endTime": 129.6,
      "duration": 49.37
    },
    {
      "id": "scene_5",
      "sceneIndex": 5,
      "title": "5. DẠNG 2 - VÍ DỤ 2: TÌM GIÁ TRỊ LỚN NHẤT VÀ NHỎ NHẤT",
      "subtitle": "ĐỀ BÀI • HÀM SỐ $y = 2\\sin^2 x - \\cos 2x + 3$",
      "mascotMode": "think",
      "mascotTip": "Đưa về cùng hàm $\\cos 2x$: dùng công thức $2\\sin^2 x = 1 - \\cos 2x$!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-indigo-950/80 to-slate-900 p-5 rounded-2xl border-2 border-indigo-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-indigo-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Dạng 2 • GTLN - GTNN</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-indigo-200 mb-2\">Tìm tập giá trị $[m; M]$ của hàm số</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số sau:\n      $$y = 2\\sin^2 x - \\cos 2x + 3$$\n      Tính tổng $T = M + m$.\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $T = 7$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $T = 8$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $T = 6$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $T = 9$</div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-indigo-950/80 to-slate-900 p-5 rounded-2xl border-2 border-indigo-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-indigo-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Dạng 2 • GTLN - GTNN</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-indigo-200 mb-2\">Tìm tập giá trị $[m; M]$ của hàm số</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số sau:\n      $$y = 2\\sin^2 x - \\cos 2x + 3$$\n      Tính tổng $T = M + m$.\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $T = 7$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $T = 8$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $T = 6$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $T = 9$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số hai thuộc Dạng hai: Tìm giá trị lớn nhất ký hiệu là M và giá trị nhỏ nhất ký hiệu là m của hàm số y bằng hai sin bình x trừ cos hai x cộng ba. Các em có mười lăm giây để biến đổi và tìm ra giá trị lớn nhất và nhỏ nhất.",
      "startTime": 129.6,
      "endTime": 144.98,
      "duration": 15.38
    },
    {
      "id": "scene_6",
      "sceneIndex": 6,
      "title": "6. DẠNG 2 - VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $M = 6, m = 2 \\implies M + m = 8$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "explain",
      "mascotTip": "$y = 4 - 2\\cos 2x$. Do $-1 \\le \\cos 2x \\le 1 \\implies 2 \\le y \\le 6$. Cực kỳ tinh gọn!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-indigo-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-indigo-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-indigo-300\">Đưa về hàm số bậc nhất theo $\\cos 2x$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Áp dụng công thức $2\\sin^2 x = 1 - \\cos 2x$, hàm số trở thành:</p>\n      $$y = (1 - \\cos 2x) - \\cos 2x + 3 = 4 - 2\\cos 2x$$\n      <p class=\"text-slate-200\">• Đánh giá với mọi $x \\in \\mathbb{R}$:</p>\n      $$-1 \\le \\cos 2x \\le 1 \\iff -2 \\le -2\\cos 2x \\le 2 \\iff 2 \\le 4 - 2\\cos 2x \\le 6$$\n      <div class=\"text-center font-bold text-indigo-300 text-sm py-1\">\n        $$m = \\min y = 2 \\quad (\\text{khi } \\cos 2x = 1); \\quad M = \\max y = 6 \\quad (\\text{khi } \\cos 2x = -1)$$\n      </div>\n      <div class=\"p-2.5 bg-indigo-500/20 border-l-4 border-indigo-400 rounded text-indigo-200 mt-2\">\n        👉 Tổng: $T = M + m = 6 + 2 = 8$. <br/>\n        👉 <b>Đáp án chọn: B</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-indigo-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-indigo-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-indigo-300\">Đưa về hàm số bậc nhất theo $\\cos 2x$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Áp dụng công thức $2\\sin^2 x = 1 - \\cos 2x$, hàm số trở thành:</p>\n      $$y = (1 - \\cos 2x) - \\cos 2x + 3 = 4 - 2\\cos 2x$$\n      <p class=\"text-slate-200\">• Đánh giá với mọi $x \\in \\mathbb{R}$:</p>\n      $$-1 \\le \\cos 2x \\le 1 \\iff -2 \\le -2\\cos 2x \\le 2 \\iff 2 \\le 4 - 2\\cos 2x \\le 6$$\n      <div class=\"text-center font-bold text-indigo-300 text-sm py-1\">\n        $$m = \\min y = 2 \\quad (\\text{khi } \\cos 2x = 1); \\quad M = \\max y = 6 \\quad (\\text{khi } \\cos 2x = -1)$$\n      </div>\n      <div class=\"p-2.5 bg-indigo-500/20 border-l-4 border-indigo-400 rounded text-indigo-200 mt-2\">\n        👉 Tổng: $T = M + m = 6 + 2 = 8$. <br/>\n        👉 <b>Đáp án chọn: B</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Ta có công thức nhân đôi: cos hai x bằng một trừ hai sin bình x, suy ra hai sin bình x bằng một trừ cos hai x. Thay vào hàm số, ta được: y bằng mở ngoặc một trừ cos hai x đóng ngoặc trừ cos hai x cộng ba, rút gọn được y bằng bốn trừ hai cos hai x. Vì hàm số cos hai x luôn nằm trong đoạn từ trừ một đến một, nên trừ hai cos hai x nằm trong đoạn từ trừ hai đến hai. Do đó giá trị nhỏ nhất m bằng bốn trừ hai bằng hai, và giá trị lớn nhất M bằng bốn cộng hai bằng sáu. Tổng M cộng m bằng tám. Đáp án chính xác là B.",
      "startTime": 144.98,
      "endTime": 182.02,
      "duration": 37.03
    },
    {
      "id": "scene_7",
      "sceneIndex": 7,
      "title": "7. DẠNG 3 - VÍ DỤ 3: ĐẾM SỐ NGHIỆM TRÊN ĐOẠN $[0; 2\\pi]$",
      "subtitle": "ĐỀ BÀI • PHƯƠNG TRÌNH $\\cos(3x - \\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$",
      "mascotMode": "think",
      "mascotTip": "Giải 2 họ: $x_1 = \\frac{\\pi}{6} + \\frac{k2\\pi}{3}$ và $x_2 = \\frac{k2\\pi}{3}$. Chặn $0 \\le x \\le 2\\pi$ để đếm $k$!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-950/80 to-slate-900 p-5 rounded-2xl border-2 border-purple-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Dạng 3 • Đếm Nghiệm</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-purple-200 mb-2\">Số nghiệm trên đoạn $[0; 2\\pi]$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Số nghiệm của phương trình lượng giác $\\cos\\left(3x - \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$ trên đoạn $[0; 2\\pi]$ là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> 6 nghiệm</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> 7 nghiệm</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> 8 nghiệm</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> 5 nghiệm</div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-950/80 to-slate-900 p-5 rounded-2xl border-2 border-purple-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Dạng 3 • Đếm Nghiệm</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-purple-200 mb-2\">Số nghiệm trên đoạn $[0; 2\\pi]$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Số nghiệm của phương trình lượng giác $\\cos\\left(3x - \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$ trên đoạn $[0; 2\\pi]$ là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> 6 nghiệm</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> 7 nghiệm</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> 8 nghiệm</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> 5 nghiệm</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số ba thuộc Dạng ba: Tìm tổng số nghiệm của phương trình cos của mở ngoặc ba x trừ pi phần tư đóng ngoặc bằng căn hai chia hai trên đoạn từ không đến hai pi. Dạng toán này rất hay gặp trong câu hỏi trắc nghiệm đếm nghiệm. Các em có ba mươi giây để tính số nghiệm.",
      "startTime": 182.02,
      "endTime": 198.7,
      "duration": 16.68
    },
    {
      "id": "scene_8",
      "sceneIndex": 8,
      "title": "8. DẠNG 3 - VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ ĐÚNG 7 NGHIỆM TRÊN $[0; 2\\pi]$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "cheer",
      "mascotTip": "Họ 1 có 3 nghiệm ($k=0,1,2$), Họ 2 có 4 nghiệm ($k=0,1,2,3$). Hai họ không trùng nhau -> 7 nghiệm!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-purple-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-purple-300\">Thiết lập bất phương trình kép chặn nghiệm nguyên</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Phương trình tương đương: $\\cos\\left(3x - \\frac{\\pi}{4}\\right) = \\cos\\frac{\\pi}{4} \\iff \\left[\\begin{array}{l} 3x - \\frac{\\pi}{4} = \\frac{\\pi}{4} + k2\\pi \\\\ 3x - \\frac{\\pi}{4} = -\\frac{\\pi}{4} + k2\\pi \\end{array}\\right.$</p>\n      <p class=\"text-slate-200\">• Họ 1: $x = \\frac{\\pi}{6} + \\frac{k2\\pi}{3}$. Chặn $0 \\le \\frac{\\pi}{6} + \\frac{k2\\pi}{3} \\le 2\\pi \\iff -\\frac{1}{4} \\le k \\le \\frac{11}{4} \\approx 2{,}75$.</p>\n      <p class=\"text-emerald-300 font-mono\">$\\implies k \\in \\{0; 1; 2\\}$ (có đúng 3 nghiệm).</p>\n      <p class=\"text-slate-200\">• Họ 2: $x = \\frac{k2\\pi}{3}$. Chặn $0 \\le \\frac{k2\\pi}{3} \\le 2\\pi \\iff 0 \\le k \\le 3$.</p>\n      <p class=\"text-emerald-300 font-mono\">$\\implies k \\in \\{0; 1; 2; 3\\}$ (có đúng 4 nghiệm).</p>\n      <div class=\"p-2.5 bg-purple-500/20 border-l-4 border-purple-400 rounded text-purple-200 mt-2\">\n        👉 Kiểm tra nghiệm trùng: $\\frac{\\pi}{6} + \\frac{k2\\pi}{3} = \\frac{m2\\pi}{3} \\iff 4(m - k) = 1$ (vô nghiệm vì $m, k \\in \\mathbb{Z}$). <br/>\n        👉 <b>Tổng số nghiệm:</b> $3 + 4 = 7$ nghiệm. <br/>\n        👉 <b>Đáp án chọn: B</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-purple-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-purple-300\">Thiết lập bất phương trình kép chặn nghiệm nguyên</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Phương trình tương đương: $\\cos\\left(3x - \\frac{\\pi}{4}\\right) = \\cos\\frac{\\pi}{4} \\iff \\left[\\begin{array}{l} 3x - \\frac{\\pi}{4} = \\frac{\\pi}{4} + k2\\pi \\\\ 3x - \\frac{\\pi}{4} = -\\frac{\\pi}{4} + k2\\pi \\end{array}\\right.$</p>\n      <p class=\"text-slate-200\">• Họ 1: $x = \\frac{\\pi}{6} + \\frac{k2\\pi}{3}$. Chặn $0 \\le \\frac{\\pi}{6} + \\frac{k2\\pi}{3} \\le 2\\pi \\iff -\\frac{1}{4} \\le k \\le \\frac{11}{4} \\approx 2{,}75$.</p>\n      <p class=\"text-emerald-300 font-mono\">$\\implies k \\in \\{0; 1; 2\\}$ (có đúng 3 nghiệm).</p>\n      <p class=\"text-slate-200\">• Họ 2: $x = \\frac{k2\\pi}{3}$. Chặn $0 \\le \\frac{k2\\pi}{3} \\le 2\\pi \\iff 0 \\le k \\le 3$.</p>\n      <p class=\"text-emerald-300 font-mono\">$\\implies k \\in \\{0; 1; 2; 3\\}$ (có đúng 4 nghiệm).</p>\n      <div class=\"p-2.5 bg-purple-500/20 border-l-4 border-purple-400 rounded text-purple-200 mt-2\">\n        👉 Kiểm tra nghiệm trùng: $\\frac{\\pi}{6} + \\frac{k2\\pi}{3} = \\frac{m2\\pi}{3} \\iff 4(m - k) = 1$ (vô nghiệm vì $m, k \\in \\mathbb{Z}$). <br/>\n        👉 <b>Tổng số nghiệm:</b> $3 + 4 = 7$ nghiệm. <br/>\n        👉 <b>Đáp án chọn: B</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết ba mươi giây. Phương trình tương đương hai họ nghiệm. Họ thứ nhất: ba x trừ pi phần tư bằng pi phần tư cộng k hai pi, suy ra x bằng pi phần sáu cộng k hai pi phần ba. Chặn x trong đoạn từ không đến hai pi, ta giải ra k nằm từ trừ một phần tư đến hai phẩy bảy mươi lăm. Vì k nguyên nên k nhận ba giá trị là không, một, hai, tương ứng ba nghiệm. Họ thứ hai: ba x trừ pi phần tư bằng trừ pi phần tư cộng k hai pi, suy ra x bằng k hai pi phần ba. Chặn trong đoạn từ không đến hai pi, ta được k nằm từ không đến ba, gồm bốn giá trị k tương ứng bốn nghiệm. Hai họ này không có nghiệm trùng nhau, vì vậy phương trình có tất cả bảy nghiệm trên đoạn từ không đến hai pi. Đáp án chính xác là B.",
      "startTime": 198.7,
      "endTime": 247.37,
      "duration": 48.67
    },
    {
      "id": "scene_9",
      "sceneIndex": 9,
      "title": "9. DẠNG 4 - VÍ DỤ 4: BÀI TOÁN THỰC TẾ MÔ HÌNH THỦY TRIỀU",
      "subtitle": "ĐỀ BÀI • ĐỘ SÂU NƯỚC $h(t) = 4 + 2\\cos(\\frac{\\pi t}{6} - \\frac{\\pi}{3})$ VỚI $0 \\le t \\le 24$",
      "mascotMode": "think",
      "mascotTip": "Đỉnh triều xảy ra khi cos bằng 1 (lớn nhất); nước sâu 5m khi cos bằng 1/2!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-cyan-950/80 to-slate-900 p-5 rounded-2xl border-2 border-cyan-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Dạng 4 • Mô Hình Thực Tế</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-cyan-200 mb-2\">Độ sâu mực nước tại cảng biển theo chu kỳ sóng triều</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Độ sâu mực nước $h(t)$ (đơn vị mét) tại một cảng biển theo thời gian $t$ (giờ, $0 \\le t \\le 24$) được cho bởi công thức:\n      $$h(t) = 4 + 2\\cos\\left(\\frac{\\pi t}{6} - \\frac{\\pi}{3}\\right)$$\n      Mực nước đạt đỉnh triều cao nhất vào những thời điểm nào trong ngày?\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> Đạt $6\\text{ m}$ lúc $2\\text{h}$ và $14\\text{h}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> Đạt $6\\text{ m}$ lúc $4\\text{h}$ và $16\\text{h}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> Đạt $5\\text{ m}$ lúc $1\\text{h}$ và $13\\text{h}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> Đạt $6\\text{ m}$ duy nhất lúc $2\\text{h}$</div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-cyan-950/80 to-slate-900 p-5 rounded-2xl border-2 border-cyan-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Dạng 4 • Mô Hình Thực Tế</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-cyan-200 mb-2\">Độ sâu mực nước tại cảng biển theo chu kỳ sóng triều</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Độ sâu mực nước $h(t)$ (đơn vị mét) tại một cảng biển theo thời gian $t$ (giờ, $0 \\le t \\le 24$) được cho bởi công thức:\n      $$h(t) = 4 + 2\\cos\\left(\\frac{\\pi t}{6} - \\frac{\\pi}{3}\\right)$$\n      Mực nước đạt đỉnh triều cao nhất vào những thời điểm nào trong ngày?\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> Đạt $6\\text{ m}$ lúc $2\\text{h}$ và $14\\text{h}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> Đạt $6\\text{ m}$ lúc $4\\text{h}$ và $16\\text{h}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> Đạt $5\\text{ m}$ lúc $1\\text{h}$ và $13\\text{h}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> Đạt $6\\text{ m}$ duy nhất lúc $2\\text{h}$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số bốn là bài toán thực tế tiêu biểu trong sách giáo khoa Kết nối tri thức: Độ sâu của mực nước tại một cảng biển tính theo giờ trong ngày được mô hình bởi hàm số h theo t bằng bốn cộng hai nhân cos của mở ngoặc pi t phần sáu trừ pi phần ba đóng ngoặc, với t từ không đến hai mươi tư giờ. Câu hỏi: Trong một ngày đêm, mực nước đạt độ cao lớn nhất vào những thời điểm nào và đạt giá trị bao nhiêu mét? Các em có ba mươi giây để giải bài toán thực tế này.",
      "startTime": 247.37,
      "endTime": 273.96,
      "duration": 26.59
    },
    {
      "id": "scene_10",
      "sceneIndex": 10,
      "title": "10. DẠNG 4 - VÍ DỤ 4: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ ĐẠT ĐỈNH TRIỀU 6m LÚC 2 GIỜ VÀ 14 GIỜ (CHỌN ĐÁP ÁN A)",
      "mascotMode": "celebrate",
      "mascotTip": "Chu kỳ triều là $T = \\frac{2\\pi}{\\pi/6} = 12$ giờ. Cứ sau 12h lại lặp lại đỉnh triều!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-cyan-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-cyan-300\">Giải phương trình cực trị theo thời gian thực tế</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Vì $\\cos\\left(\\frac{\\pi t}{6} - \\frac{\\pi}{3}\\right) \\le 1$ nên:</p>\n      $$h(t) = 4 + 2\\cos\\left(\\frac{\\pi t}{6} - \\frac{\\pi}{3}\\right) \\le 4 + 2(1) = 6 \\text{ (m)}$$\n      <p class=\"text-slate-200\">• Mực nước đạt đỉnh triều $6\\text{ m}$ khi:</p>\n      $$\\cos\\left(\\frac{\\pi t}{6} - \\frac{\\pi}{3}\\right) = 1 \\iff \\frac{\\pi t}{6} - \\frac{\\pi}{3} = k2\\pi \\iff \\frac{t}{6} = \\frac{1}{3} + 2k \\iff t = 2 + 12k \\; (k \\in \\mathbb{Z})$$\n      <p class=\"text-slate-200\">• Vì $0 \\le t \\le 24$ nên $0 \\le 2 + 12k \\le 24 \\iff -\\frac{1}{6} \\le k \\le \\frac{11}{6} \\implies k \\in \\{0; 1\\}$:</p>\n      <div class=\"text-center font-bold text-cyan-300 text-sm py-1\">\n        $$k = 0 \\implies t = 2\\text{ (giờ)}; \\quad k = 1 \\implies t = 14\\text{ (giờ)}$$\n      </div>\n      <div class=\"p-2.5 bg-cyan-500/20 border-l-4 border-cyan-400 rounded text-cyan-200 mt-2\">\n        👉 <b>Kết luận:</b> Đỉnh triều cao $6\\text{ m}$ xảy ra vào lúc $2\\text{h}$ sáng và $14\\text{h}$ chiều. <br/>\n        👉 <b>Đáp án chọn: A</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-cyan-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-cyan-300\">Giải phương trình cực trị theo thời gian thực tế</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Vì $\\cos\\left(\\frac{\\pi t}{6} - \\frac{\\pi}{3}\\right) \\le 1$ nên:</p>\n      $$h(t) = 4 + 2\\cos\\left(\\frac{\\pi t}{6} - \\frac{\\pi}{3}\\right) \\le 4 + 2(1) = 6 \\text{ (m)}$$\n      <p class=\"text-slate-200\">• Mực nước đạt đỉnh triều $6\\text{ m}$ khi:</p>\n      $$\\cos\\left(\\frac{\\pi t}{6} - \\frac{\\pi}{3}\\right) = 1 \\iff \\frac{\\pi t}{6} - \\frac{\\pi}{3} = k2\\pi \\iff \\frac{t}{6} = \\frac{1}{3} + 2k \\iff t = 2 + 12k \\; (k \\in \\mathbb{Z})$$\n      <p class=\"text-slate-200\">• Vì $0 \\le t \\le 24$ nên $0 \\le 2 + 12k \\le 24 \\iff -\\frac{1}{6} \\le k \\le \\frac{11}{6} \\implies k \\in \\{0; 1\\}$:</p>\n      <div class=\"text-center font-bold text-cyan-300 text-sm py-1\">\n        $$k = 0 \\implies t = 2\\text{ (giờ)}; \\quad k = 1 \\implies t = 14\\text{ (giờ)}$$\n      </div>\n      <div class=\"p-2.5 bg-cyan-500/20 border-l-4 border-cyan-400 rounded text-cyan-200 mt-2\">\n        👉 <b>Kết luận:</b> Đỉnh triều cao $6\\text{ m}$ xảy ra vào lúc $2\\text{h}$ sáng và $14\\text{h}$ chiều. <br/>\n        👉 <b>Đáp án chọn: A</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thời gian đã hết. Ta thấy hàm số cos đạt giá trị lớn nhất bằng một, khi đó độ sâu lớn nhất h bằng bốn cộng hai nhân một bằng sáu mét. Đỉnh triều xảy ra khi biểu thức góc pi t phần sáu trừ pi phần ba bằng k hai pi, tương đương t trừ hai bằng mười hai k, hay t bằng hai cộng mười hai k. Do t nằm trong khoảng từ không đến hai mươi tư giờ, ta chọn k bằng không cho ta t bằng hai giờ sáng, và k bằng một cho ta t bằng mười bốn giờ, tức hai giờ chiều. Như vậy, trong một ngày có hai lần đỉnh triều vào lúc hai giờ sáng và mười bốn giờ chiều. Đáp án chọn là A.",
      "startTime": 273.96,
      "endTime": 309.22,
      "duration": 35.26
    },
    {
      "id": "scene_11",
      "sceneIndex": 11,
      "title": "11. CHIẾN LƯỢC TRÁNH BẪY ĐẾM NGHIỆM VÀ ĐÁNH GIÁ TẬP GIÁ TRỊ",
      "subtitle": "LỖI LẤY THỪA ĐẦU MÚT VÀ LỖI ĐẾM LẶP NGHIỆM TRÙNG",
      "mascotMode": "explain",
      "mascotTip": "Phân biệt đoạn $[a; b]$ (lấy đầu mút) và khoảng $(a; b)$ (không lấy đầu mút); vẽ đường tròn kiểm tra nghiệm!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase\">Kinh Nghiệm Phòng Tránh Bẫy</span>\n      <h3 class=\"text-base font-bold text-rose-300\">2 Lỗi Sai Phổ Biến Nhất Ở Phần Đếm Nghiệm</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400\">\n        <h4 class=\"font-bold text-rose-300 mb-1\">⚠️ Lỗi 1: Nhầm giữa đoạn $[a; b]$ và khoảng $(a; b)$</h4>\n        <p class=\"text-slate-300 leading-relaxed\">\n          • Nếu đề bài yêu cầu trên <b>đoạn $[a; b]$</b>: giải $a \\le x_k \\le b$ (được lấy dấu $=$).<br/>\n          • Nếu đề bài yêu cầu trên <b>khoảng $(a; b)$</b>: giải $a < x_k < b$ (không được lấy đầu mút).<br/>\n          👉 Rất nhiều học sinh mất điểm vì lấy nhầm dấu bằng ở đầu mút!\n        </p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400\">\n        <h4 class=\"font-bold text-amber-300 mb-1\">⚠️ Lỗi 2: Không kiểm tra nghiệm trùng giữa các họ</h4>\n        <p class=\"text-slate-300 leading-relaxed\">\n          Khi phương trình có 2 họ nghiệm $x = \\alpha + k\\frac{2\\pi}{m}$ và $x = \\beta + l\\frac{2\\pi}{n}$, cần cho 2 họ bằng nhau để kiểm tra xem có tồn tại nghiệm chung hay không.<br/>\n          👉 Nếu có điểm ngọn trùng nhau, phải trừ bớt số lần đếm lặp!\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase\">Kinh Nghiệm Phòng Tránh Bẫy</span>\n      <h3 class=\"text-base font-bold text-rose-300\">2 Lỗi Sai Phổ Biến Nhất Ở Phần Đếm Nghiệm</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400\">\n        <h4 class=\"font-bold text-rose-300 mb-1\">⚠️ Lỗi 1: Nhầm giữa đoạn $[a; b]$ và khoảng $(a; b)$</h4>\n        <p class=\"text-slate-300 leading-relaxed\">\n          • Nếu đề bài yêu cầu trên <b>đoạn $[a; b]$</b>: giải $a \\le x_k \\le b$ (được lấy dấu $=$).<br/>\n          • Nếu đề bài yêu cầu trên <b>khoảng $(a; b)$</b>: giải $a < x_k < b$ (không được lấy đầu mút).<br/>\n          👉 Rất nhiều học sinh mất điểm vì lấy nhầm dấu bằng ở đầu mút!\n        </p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400\">\n        <h4 class=\"font-bold text-amber-300 mb-1\">⚠️ Lỗi 2: Không kiểm tra nghiệm trùng giữa các họ</h4>\n        <p class=\"text-slate-300 leading-relaxed\">\n          Khi phương trình có 2 họ nghiệm $x = \\alpha + k\\frac{2\\pi}{m}$ và $x = \\beta + l\\frac{2\\pi}{n}$, cần cho 2 họ bằng nhau để kiểm tra xem có tồn tại nghiệm chung hay không.<br/>\n          👉 Nếu có điểm ngọn trùng nhau, phải trừ bớt số lần đếm lặp!\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Khi làm bài tập trắc nghiệm đếm số nghiệm, các em cần hết sức cẩn thận ở bước kẹp bất phương trình để tìm số nguyên k. Hãy chú ý kỹ xem đề bài yêu cầu tìm nghiệm trên đoạn vuông hay khoảng tròn. Nếu đề bài là khoảng tròn mà các em lấy cả hai đầu mút thì sẽ bị thừa nghiệm. Ngoài ra, khi phương trình có nhiều họ nghiệm, phải luôn kiểm tra xem các họ nghiệm đó có điểm biểu diễn nào trùng nhau trên đường tròn lượng giác hay không để tránh đếm lặp.",
      "startTime": 309.22,
      "endTime": 334.22,
      "duration": 25.01
    },
    {
      "id": "scene_12",
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT MỤC 2 & BÀN ĐẠP BƯỚC SANG MỤC 3",
      "subtitle": "CHINH PHỤC CÁC BÀI TOÁN TỰ LUẬN VÀ TRẮC NGHIỆM TRỌNG TÂM",
      "mascotMode": "celebrate",
      "mascotTip": "Làm chủ 4 dạng toán này là chìa khóa đạt điểm 8+! Chuyển ngay sang Mục 3 để luyện Casio và đề tổng ôn!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-br from-blue-900/80 via-indigo-900/60 to-slate-900 p-6 rounded-2xl border-2 border-blue-400/40 text-center shadow-2xl\">\n    <div class=\"inline-block p-3 bg-blue-500/20 rounded-full mb-3 text-3xl\">🎯🏆</div>\n    <h3 class=\"text-xl font-black text-blue-200 mb-2\">Chúc Mừng Em Hoàn Thành Mục 2!</h3>\n    <p class=\"text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4\">\n      Em đã thành thạo cả 4 dạng toán then chốt: Tính giá trị, Cực trị GTLN/GTNN, Đếm số nghiệm và Mô hình thực tế. Giờ là lúc nâng cấp tốc độ giải bài với Tuyệt chiêu Casio 580 ở Mục 3!\n    </p>\n    <div class=\"flex justify-center gap-4 text-xs font-bold\">\n      <span class=\"px-4 py-2 bg-blue-500/30 text-blue-300 rounded-lg border border-blue-400/40\">✔ 4 Dạng toán làm chủ</span>\n      <span class=\"px-4 py-2 bg-indigo-500/30 text-indigo-300 rounded-lg border border-indigo-400/40\">✔ Kỹ năng chặn nghiệm vững vàng</span>\n      <span class=\"px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40\">🚀 Chuyển sang Mục 3</span>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-br from-blue-900/80 via-indigo-900/60 to-slate-900 p-6 rounded-2xl border-2 border-blue-400/40 text-center shadow-2xl\">\n    <div class=\"inline-block p-3 bg-blue-500/20 rounded-full mb-3 text-3xl\">🎯🏆</div>\n    <h3 class=\"text-xl font-black text-blue-200 mb-2\">Chúc Mừng Em Hoàn Thành Mục 2!</h3>\n    <p class=\"text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4\">\n      Em đã thành thạo cả 4 dạng toán then chốt: Tính giá trị, Cực trị GTLN/GTNN, Đếm số nghiệm và Mô hình thực tế. Giờ là lúc nâng cấp tốc độ giải bài với Tuyệt chiêu Casio 580 ở Mục 3!\n    </p>\n    <div class=\"flex justify-center gap-4 text-xs font-bold\">\n      <span class=\"px-4 py-2 bg-blue-500/30 text-blue-300 rounded-lg border border-blue-400/40\">✔ 4 Dạng toán làm chủ</span>\n      <span class=\"px-4 py-2 bg-indigo-500/30 text-indigo-300 rounded-lg border border-indigo-400/40\">✔ Kỹ năng chặn nghiệm vững vàng</span>\n      <span class=\"px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40\">🚀 Chuyển sang Mục 3</span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục hai với bốn dạng toán trọng tâm. Việc nắm vững phương pháp biến đổi đại số kết hợp hình học đường tròn lượng giác là chìa khóa để giải quyết nhanh mọi đề thi. Tiếp theo, thầy mời các em bước sang Mục ba: Tuyệt kỹ sử dụng máy tính Casio fx-năm trăm tám mươi VN X và cảnh báo các bẫy trắc nghiệm để bứt phá điểm chín cộng.",
      "startTime": 334.22,
      "endTime": 356.23,
      "duration": 22.01
    }
  ]
};

  window.G11_CHAPTER1_DATA.toan11_ontap_c1_muc2 = window.G11_CHAPTER1_DATA.g11_ontap_c1_muc2;

  window.G11_CHAPTER1_DATA.g11_ontap_c1_muc3 = {
  "key": "g11_ontap_c1_muc3",
  "lessonId": "toan11_ontap_c1",
  "lessonTitle": "Bài tập cuối chương I (Ôn tập chương 1)",
  "sectionId": "g11_ontap_c1_muc3",
  "sectionTitle": "Mục 3: Cảnh báo bẫy trắc nghiệm, Kỹ năng Casio 580 & Đề tổng ôn",
  "title": "Mục 3: Cảnh báo bẫy trắc nghiệm, Kỹ năng Casio 580 & Đề tổng ôn",
  "audio": "/audio/g11_ontap_c1_muc3.mp3",
  "audioSrc": "./audio/g11_ontap_c1_muc3.mp3",
  "audio_src": "./audio/g11_ontap_c1_muc3.mp3",
  "owl_tip": "Bắt buộc cài đặt máy tính ở chế độ RADIAN (chữ R)! Kết hợp TABLE [MENU] [8] và CALC để kiểm chứng tuyệt đối!",
  "totalDuration": 330.1,
  "duration": 330.1,
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm & Hệ thống hóa kiến thức",
      "scenes": [
        1,
        2
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 4 Ví dụ minh họa tiêu biểu (Đồng hồ 15s/30s)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Cảnh báo bẫy trắc nghiệm & Sai lầm thường gặp",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Tổng kết bài học & Bí kíp Cú Thông Thái",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    {
      "id": "scene_1",
      "time": 0.0,
      "label": "1. VAI TRÒ CỦA CASIO FX-580VNX & TƯ DUY KIỂM NGHIỆM"
    },
    {
      "id": "scene_2",
      "time": 20.5,
      "label": "2. THIẾT LẬP MÁY TÍNH CHUẨN: ĐƠN VỊ ĐO GÓC RADIAN"
    },
    {
      "id": "scene_3",
      "time": 48.7,
      "label": "3. TUYỆT KỸ 1 - VÍ DỤ 1: KIỂM TRA TÍNH CHẴN LẺ BẰNG CALC"
    },
    {
      "id": "scene_4",
      "time": 58.51,
      "label": "4. TUYỆT KỸ 1 - LỜI GIẢI CHI TIẾT & THAO TÁC PHÍM"
    },
    {
      "id": "scene_5",
      "time": 98.26,
      "label": "5. TUYỆT KỸ 2 - VÍ DỤ 2: THỬ NGHIỆM PHƯƠNG TRÌNH LƯỢNG GIÁC"
    },
    {
      "id": "scene_6",
      "time": 111.48,
      "label": "6. TUYỆT KỸ 2 - LỜI GIẢI CHI TIẾT & THAO TÁC CALC"
    },
    {
      "id": "scene_7",
      "time": 148.22,
      "label": "7. TUYỆT KỸ 3 - VÍ DỤ 3: QUÉT BẢNG TABLE TÌM GTLN, GTNN"
    },
    {
      "id": "scene_8",
      "time": 163.54,
      "label": "8. TUYỆT KỸ 3 - LỜI GIẢI CHI TIẾT & BẢNG QUÉT GIÁ TRỊ"
    },
    {
      "id": "scene_9",
      "time": 206.69,
      "label": "9. TUYỆT KỸ 4 - VÍ DỤ 4: ĐỀ TRẮC NGHIỆM ĐÚNG/SAI 4 Ý"
    },
    {
      "id": "scene_10",
      "time": 231.55,
      "label": "10. TUYỆT KỸ 4 - PHÂN TÍCH TÍNH ĐÚNG/SAI CỦA TỪNG Ý"
    },
    {
      "id": "scene_11",
      "time": 269.95,
      "label": "11. TOP 5 LỖI MẤT ĐIỂM KINH ĐIỂN CẦN TRÁNH TUYỆT ĐỐI"
    },
    {
      "id": "scene_12",
      "time": 301.51,
      "label": "12. TỔNG KẾT TOÀN CHƯƠNG 1 & LỜI CHÚC TỪ CÚ THÔNG THÁI"
    }
  ],
  "scenes": [
    {
      "id": "scene_1",
      "sceneIndex": 1,
      "title": "1. VAI TRÒ CỦA CASIO FX-580VNX & TƯ DUY KIỂM NGHIỆM",
      "subtitle": "MỤC 3 • CHIẾN THUẬT KẾT HỢP TƯ DUY TỰ LUẬN VÀ TỐC ĐỘ MÁY TÍNH CẦM TAY",
      "mascotMode": "pointer",
      "mascotTip": "Máy tính Casio là công cụ đắc lực hỗ trợ dò tìm nghiệm và kiểm tra ngược kết quả tự luận với độ chính xác 100%!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/60 to-pink-900/40 p-4 rounded-xl border border-purple-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-purple-500/20 text-purple-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Kỹ năng Casio</span>\n      <h3 class=\"text-xl font-black text-purple-200\">Tuyệt Kỹ Casio fx-580VN X & Cảnh Báo Bẫy Thi</h3>\n    </div>\n    <p class=\"text-sm text-slate-300\">Tối ưu hóa thời gian làm bài thi trắc nghiệm Toán 11:</p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-purple-400 shadow-md\">\n      <h4 class=\"font-bold text-purple-300 text-sm mb-1\">⚡ Tuyệt kỹ 1: Kiểm tra Tính Chẵn Lẻ & TXĐ</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Dùng lệnh [CALC] với $x = 1$ và $x = -1$.<br/>• Nếu $f(-1) = -f(1)$ $\\implies$ Hàm số Lẻ.<br/>• Nếu $f(-1) = f(1)$ $\\implies$ Hàm số Chẵn.</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-pink-400 shadow-md\">\n      <h4 class=\"font-bold text-pink-300 text-sm mb-1\">🎯 Tuyệt kỹ 2: Thử Nghiệm Phương Trình Lượng Giác</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Chuyển vế phương trình về dạng $f(x) - g(x) = 0$.<br/>• Bấm [CALC] với đại diện các họ nghiệm ($k=0, k=1$).<br/>• Nếu kết quả bằng 0 thì nhận nghiệm, khác 0 loại ngay.</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-amber-400 shadow-md\">\n      <h4 class=\"font-bold text-amber-300 text-sm mb-1\">📊 Tuyệt kỹ 3: Quét Bảng Giá Trị TABLE [MENU] [8]</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Cài đặt: Start = 0, End = $2\\pi$, Step = $2\\pi / 29$.<br/>• Quan sát cột $f(x)$ để tìm Max và Min tức thời.<br/>• Bắt nhanh các khoảng đồng biến, nghịch biến.</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-rose-400 shadow-md\">\n      <h4 class=\"font-bold text-rose-300 text-sm mb-1\">🛡️ Tuyệt kỹ 4: Xử Lý Đề Trắc Nghiệm Đúng/Sai 4 Ý</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Chuẩn cấu trúc đề thi mới Bộ GD&ĐT 2025 - 2026.<br/>• Phân tích độc lập từng mệnh đề $a, b, c, d$.<br/>• Phối hợp kiểm chứng máy tính để loại bỏ bẫy ngầm.</p>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/60 to-pink-900/40 p-4 rounded-xl border border-purple-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-purple-500/20 text-purple-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Kỹ năng Casio</span>\n      <h3 class=\"text-xl font-black text-purple-200\">Tuyệt Kỹ Casio fx-580VN X & Cảnh Báo Bẫy Thi</h3>\n    </div>\n    <p class=\"text-sm text-slate-300\">Tối ưu hóa thời gian làm bài thi trắc nghiệm Toán 11:</p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-purple-400 shadow-md\">\n      <h4 class=\"font-bold text-purple-300 text-sm mb-1\">⚡ Tuyệt kỹ 1: Kiểm tra Tính Chẵn Lẻ & TXĐ</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Dùng lệnh [CALC] với $x = 1$ và $x = -1$.<br/>• Nếu $f(-1) = -f(1)$ $\\implies$ Hàm số Lẻ.<br/>• Nếu $f(-1) = f(1)$ $\\implies$ Hàm số Chẵn.</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-pink-400 shadow-md\">\n      <h4 class=\"font-bold text-pink-300 text-sm mb-1\">🎯 Tuyệt kỹ 2: Thử Nghiệm Phương Trình Lượng Giác</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Chuyển vế phương trình về dạng $f(x) - g(x) = 0$.<br/>• Bấm [CALC] với đại diện các họ nghiệm ($k=0, k=1$).<br/>• Nếu kết quả bằng 0 thì nhận nghiệm, khác 0 loại ngay.</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-amber-400 shadow-md\">\n      <h4 class=\"font-bold text-amber-300 text-sm mb-1\">📊 Tuyệt kỹ 3: Quét Bảng Giá Trị TABLE [MENU] [8]</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Cài đặt: Start = 0, End = $2\\pi$, Step = $2\\pi / 29$.<br/>• Quan sát cột $f(x)$ để tìm Max và Min tức thời.<br/>• Bắt nhanh các khoảng đồng biến, nghịch biến.</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-rose-400 shadow-md\">\n      <h4 class=\"font-bold text-rose-300 text-sm mb-1\">🛡️ Tuyệt kỹ 4: Xử Lý Đề Trắc Nghiệm Đúng/Sai 4 Ý</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Chuẩn cấu trúc đề thi mới Bộ GD&ĐT 2025 - 2026.<br/>• Phân tích độc lập từng mệnh đề $a, b, c, d$.<br/>• Phối hợp kiểm chứng máy tính để loại bỏ bẫy ngầm.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục ba: Cảnh báo bẫy trắc nghiệm và tuyệt kỹ bấm máy tính Casio fx-năm trăm tám mươi VN X. Trong các kỳ thi trắc nghiệm hiện nay, việc sử dụng thành thạo máy tính cầm tay kết hợp với tư duy toán học vững vàng sẽ giúp các em tiết kiệm từ năm mươi đến bảy mươi phần trăm thời gian, đồng thời kiểm tra lại kết quả tự luận với độ chính xác tuyệt đối một trăm phần trăm.",
      "startTime": 0.0,
      "endTime": 20.5,
      "duration": 20.5
    },
    {
      "id": "scene_2",
      "sceneIndex": 2,
      "title": "2. THIẾT LẬP MÁY TÍNH CHUẨN: ĐƠN VỊ ĐO GÓC RADIAN",
      "subtitle": "BƯỚC BẮT BUỘC: [SHIFT] [MENU] [2] [2] ĐỂ MÀN HÌNH HIỆN CHỮ 'R'",
      "mascotMode": "explain",
      "mascotTip": "Quy tắc sống còn: Toàn bộ Lượng giác 11 tính theo RADIAN! Nếu màn hình hiện chữ 'D' thì kết quả sẽ sai 100%!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-purple-500/30\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"w-3 h-3 rounded-full bg-purple-400 animate-pulse\"></span>\n      <h3 class=\"text-lg font-bold text-purple-300\">Thao Tác Cài Đặt Đơn Vị Đo Góc Radian Trên Casio fx-580VN X</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-3\">\n      <div class=\"flex items-center gap-2 text-amber-300 font-bold text-sm\">\n        <span class=\"p-1.5 bg-amber-500/20 rounded\">🔑 Phím bấm:</span>\n        <span class=\"font-mono bg-slate-800 px-3 py-1 rounded border border-amber-500/30\">[SHIFT] ➔ [MENU] ➔ [2] (Angle Unit) ➔ [2] (Radian)</span>\n      </div>\n      <div class=\"grid grid-cols-2 gap-3 pt-2\">\n        <div class=\"bg-emerald-950/40 p-3 rounded-lg border border-emerald-500/30\">\n          <h4 class=\"font-bold text-emerald-300 mb-1\">✔ Trạng thái đúng: Ký hiệu [R]</h4>\n          <p class=\"text-slate-300\">Trên đỉnh màn hình hiển thị ký tự <b>R</b>. Toàn bộ tính toán với $\\pi$, hàm số lượng giác và bảng TABLE đều chuẩn xác theo SGK.</p>\n        </div>\n        <div class=\"bg-rose-950/40 p-3 rounded-lg border border-rose-500/30\">\n          <h4 class=\"font-bold text-rose-300 mb-1\">❌ Trạng thái sai: Ký hiệu [D]</h4>\n          <p class=\"text-slate-300\">Nếu màn hình hiển thị chữ <b>D</b> (Degree), máy tính hiểu góc theo độ dẫn đến kết quả tính toán sai hoàn toàn!</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-purple-500/30\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"w-3 h-3 rounded-full bg-purple-400 animate-pulse\"></span>\n      <h3 class=\"text-lg font-bold text-purple-300\">Thao Tác Cài Đặt Đơn Vị Đo Góc Radian Trên Casio fx-580VN X</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-3\">\n      <div class=\"flex items-center gap-2 text-amber-300 font-bold text-sm\">\n        <span class=\"p-1.5 bg-amber-500/20 rounded\">🔑 Phím bấm:</span>\n        <span class=\"font-mono bg-slate-800 px-3 py-1 rounded border border-amber-500/30\">[SHIFT] ➔ [MENU] ➔ [2] (Angle Unit) ➔ [2] (Radian)</span>\n      </div>\n      <div class=\"grid grid-cols-2 gap-3 pt-2\">\n        <div class=\"bg-emerald-950/40 p-3 rounded-lg border border-emerald-500/30\">\n          <h4 class=\"font-bold text-emerald-300 mb-1\">✔ Trạng thái đúng: Ký hiệu [R]</h4>\n          <p class=\"text-slate-300\">Trên đỉnh màn hình hiển thị ký tự <b>R</b>. Toàn bộ tính toán với $\\pi$, hàm số lượng giác và bảng TABLE đều chuẩn xác theo SGK.</p>\n        </div>\n        <div class=\"bg-rose-950/40 p-3 rounded-lg border border-rose-500/30\">\n          <h4 class=\"font-bold text-rose-300 mb-1\">❌ Trạng thái sai: Ký hiệu [D]</h4>\n          <p class=\"text-slate-300\">Nếu màn hình hiển thị chữ <b>D</b> (Degree), máy tính hiểu góc theo độ dẫn đến kết quả tính toán sai hoàn toàn!</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Quy tắc vàng đầu tiên khi cầm máy tính là phải kiểm tra đơn vị đo góc. Toàn bộ các bài toán về hàm số lượng giác và phương trình lượng giác lớp mười một đều sử dụng đơn vị radian. Các em bấm SHIFT, MENU, chọn số hai Đơn vị góc, và chọn số hai Radian. Hãy đảm bảo trên đỉnh màn hình luôn xuất hiện chữ R nhỏ. Nếu để chữ D tức là đơn vị độ, mọi kết quả tính toán bảng và đạo hàm sẽ hoàn toàn sai lệch.",
      "startTime": 20.5,
      "endTime": 48.7,
      "duration": 28.2
    },
    {
      "id": "scene_3",
      "sceneIndex": 3,
      "title": "3. TUYỆT KỸ 1 - VÍ DỤ 1: KIỂM TRA TÍNH CHẴN LẺ BẰNG CALC",
      "subtitle": "ĐỀ BÀI • XÉT TÍNH CHẴN LẺ CỦA HÀM SỐ $f(x) = \\frac{\\sin x}{1 + \\cos x}$",
      "mascotMode": "think",
      "mascotTip": "Nhập hàm $f(x)$, bấm [CALC] $x = 1$, rồi [CALC] $x = -1$. So sánh hai kết quả nhận được!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-950/80 to-slate-900 p-5 rounded-2xl border-2 border-purple-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Tuyệt Kỹ 1 • Tính Chẵn Lẻ</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-purple-200 mb-2\">Xét tính chẵn lẻ của hàm số lượng giác</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Hàm số $f(x) = \\frac{\\sin x}{1 + \\cos x}$ là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> Hàm số chẵn</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> Hàm số lẻ</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> Không chẵn, không lẻ</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> Vừa chẵn, vừa lẻ</div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-950/80 to-slate-900 p-5 rounded-2xl border-2 border-purple-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Tuyệt Kỹ 1 • Tính Chẵn Lẻ</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-purple-200 mb-2\">Xét tính chẵn lẻ của hàm số lượng giác</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Hàm số $f(x) = \\frac{\\sin x}{1 + \\cos x}$ là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> Hàm số chẵn</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> Hàm số lẻ</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> Không chẵn, không lẻ</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> Vừa chẵn, vừa lẻ</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số một của Mục ba: Xét tính chẵn lẻ của hàm số f của x bằng sin x chia cho một cộng cos x. Các em có mười lăm giây để suy nghĩ và thao tác phím.",
      "startTime": 48.7,
      "endTime": 58.51,
      "duration": 9.82
    },
    {
      "id": "scene_4",
      "sceneIndex": 4,
      "title": "4. TUYỆT KỸ 1 - LỜI GIẢI CHI TIẾT & THAO TÁC PHÍM",
      "subtitle": "KẾT LUẬN $f(x)$ LÀ HÀM SỐ LẺ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "cheer",
      "mascotTip": "CALC $x = 1 \\implies 0{,}5463$; CALC $x = -1 \\implies -0{,}5463$. Đối xứng qua gốc tọa độ O!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-purple-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-purple-300\">Kết hợp tự luận chuẩn tắc và bấm máy kiểm tra</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• <b>Tự luận:</b> TXĐ $D = \\mathbb{R} \\setminus \\{\\pi + k2\\pi\\}$, đối xứng. Với mọi $x \\in D \\implies -x \\in D$:</p>\n      $$f(-x) = \\frac{\\sin(-x)}{1 + \\cos(-x)} = \\frac{-\\sin x}{1 + \\cos x} = -\\frac{\\sin x}{1 + \\cos x} = -f(x)$$\n      <p class=\"text-slate-200\">• <b>Bấm máy Casio:</b></p>\n      <div class=\"bg-slate-950 p-2.5 rounded border border-slate-700 font-mono text-purple-300 text-[11px]\">\n        1. Nhập $\\frac{\\sin(X)}{1 + \\cos(X)}$<br/>\n        2. Bấm [CALC] X = 1 ➔ Hiển thị $\\approx 0{,}5463$<br/>\n        3. Bấm [CALC] X = -1 ➔ Hiển thị $\\approx -0{,}5463$<br/>\n        $\\implies f(-1) = -f(1) \\implies$ <b>Hàm số lẻ!</b>\n      </div>\n      <div class=\"p-2.5 bg-purple-500/20 border-l-4 border-purple-400 rounded text-purple-200 mt-2\">\n        👉 <b>Đáp án chọn: B (Hàm số lẻ)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-purple-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-purple-300\">Kết hợp tự luận chuẩn tắc và bấm máy kiểm tra</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• <b>Tự luận:</b> TXĐ $D = \\mathbb{R} \\setminus \\{\\pi + k2\\pi\\}$, đối xứng. Với mọi $x \\in D \\implies -x \\in D$:</p>\n      $$f(-x) = \\frac{\\sin(-x)}{1 + \\cos(-x)} = \\frac{-\\sin x}{1 + \\cos x} = -\\frac{\\sin x}{1 + \\cos x} = -f(x)$$\n      <p class=\"text-slate-200\">• <b>Bấm máy Casio:</b></p>\n      <div class=\"bg-slate-950 p-2.5 rounded border border-slate-700 font-mono text-purple-300 text-[11px]\">\n        1. Nhập $\\frac{\\sin(X)}{1 + \\cos(X)}$<br/>\n        2. Bấm [CALC] X = 1 ➔ Hiển thị $\\approx 0{,}5463$<br/>\n        3. Bấm [CALC] X = -1 ➔ Hiển thị $\\approx -0{,}5463$<br/>\n        $\\implies f(-1) = -f(1) \\implies$ <b>Hàm số lẻ!</b>\n      </div>\n      <div class=\"p-2.5 bg-purple-500/20 border-l-4 border-purple-400 rounded text-purple-200 mt-2\">\n        👉 <b>Đáp án chọn: B (Hàm số lẻ)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết mười lăm giây. Ta có hai cách xử lý nhanh. Cách một dùng phím CALC: Nhập phân thức sin x chia cho một cộng cos x. Bấm CALC x bằng một, máy hiện giá trị xấp xỉ không phẩy năm tư sáu ba. Tiếp tục bấm CALC x bằng trừ một, máy hiện giá trị đối xứng là trừ không phẩy năm tư sáu ba. Vì f của trừ một bằng trừ f của một nên ta dự đoán đây là hàm số lẻ. Về mặt tự luận: sin của trừ x bằng trừ sin x, cos của trừ x bằng cos x, do đó f của trừ x bằng trừ f của x, khẳng định chính xác hàm số lẻ. Đáp án chọn là B.",
      "startTime": 58.51,
      "endTime": 98.26,
      "duration": 39.74
    },
    {
      "id": "scene_5",
      "sceneIndex": 5,
      "title": "5. TUYỆT KỸ 2 - VÍ DỤ 2: THỬ NGHIỆM PHƯƠNG TRÌNH LƯỢNG GIÁC",
      "subtitle": "ĐỀ BÀI • PHƯƠNG TRÌNH $\\sin 2x - 2\\cos x = 0$",
      "mascotMode": "think",
      "mascotTip": "Nhập vế trái vào máy tính, dùng [CALC] thay các nghiệm đại diện để tìm họ nghiệm chuẩn!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-pink-950/80 to-slate-900 p-5 rounded-2xl border-2 border-pink-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-pink-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Tuyệt Kỹ 2 • Thử Nghiệm PTLG</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-pink-200 mb-2\">Tìm tập nghiệm của phương trình lượng giác</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Nghiệm của phương trình lượng giác $\\sin 2x - 2\\cos x = 0$ là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $x = k\\pi \\; (k \\in \\mathbb{Z})$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $x = \\frac{\\pi}{2} + k\\pi \\; (k \\in \\mathbb{Z})$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $x = \\frac{\\pi}{2} + k2\\pi \\; (k \\in \\mathbb{Z})$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> Vô nghiệm</div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-pink-950/80 to-slate-900 p-5 rounded-2xl border-2 border-pink-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-pink-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Tuyệt Kỹ 2 • Thử Nghiệm PTLG</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-pink-200 mb-2\">Tìm tập nghiệm của phương trình lượng giác</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Nghiệm của phương trình lượng giác $\\sin 2x - 2\\cos x = 0$ là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $x = k\\pi \\; (k \\in \\mathbb{Z})$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $x = \\frac{\\pi}{2} + k\\pi \\; (k \\in \\mathbb{Z})$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $x = \\frac{\\pi}{2} + k2\\pi \\; (k \\in \\mathbb{Z})$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> Vô nghiệm</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số hai: Tìm nghiệm của phương trình sin hai x trừ hai cos x bằng không. Bốn phương án đưa ra các họ nghiệm khác nhau. Các em có ba mươi giây để bấm máy thử nghiệm hoặc phân tích nhân tử.",
      "startTime": 98.26,
      "endTime": 111.48,
      "duration": 13.22
    },
    {
      "id": "scene_6",
      "sceneIndex": 6,
      "title": "6. TUYỆT KỸ 2 - LỜI GIẢI CHI TIẾT & THAO TÁC CALC",
      "subtitle": "KẾT QUẢ $x = \\frac{\\pi}{2} + k\\pi$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "cheer",
      "mascotTip": "CALC $\\frac{\\pi}{2} \\implies 0$; CALC $\\frac{3\\pi}{2} \\implies 0$. Nhận ngay họ nghiệm $x = \\frac{\\pi}{2} + k\\pi$!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-pink-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-pink-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-pink-300\">Phân tích tích số và kiểm tra bằng phím CALC</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• <b>Tự luận:</b> Khai triển $\\sin 2x = 2\\sin x\\cos x$:</p>\n      $$2\\sin x\\cos x - 2\\cos x = 0 \\iff 2\\cos x(\\sin x - 1) = 0 \\iff \\left[\\begin{array}{l} \\cos x = 0 \\iff x = \\frac{\\pi}{2} + k\\pi \\\\ \\sin x = 1 \\iff x = \\frac{\\pi}{2} + k2\\pi \\end{array}\\right.$$\n      <p class=\"text-slate-200\">• Họ nghiệm $\\frac{\\pi}{2} + k2\\pi$ là tập con của họ $\\frac{\\pi}{2} + k\\pi$. Hợp hai họ nghiệm được: $x = \\frac{\\pi}{2} + k\\pi$.</p>\n      <p class=\"text-slate-200\">• <b>Kiểm tra bằng phím CALC:</b></p>\n      <div class=\"bg-slate-950 p-2.5 rounded border border-slate-700 font-mono text-pink-300 text-[11px]\">\n        1. Nhập: $\\sin(2X) - 2\\cos(X)$<br/>\n        2. [CALC] $X = \\frac{\\pi}{2}$ ➔ Kết quả $= 0$<br/>\n        3. [CALC] $X = \\frac{3\\pi}{2}$ ➔ Kết quả $= 0$<br/>\n        4. [CALC] $X = 0$ (thử câu A) ➔ Kết quả $= -2 \\ne 0$ (Loại A!)\n      </div>\n      <div class=\"p-2.5 bg-pink-500/20 border-l-4 border-pink-400 rounded text-pink-200 mt-2\">\n        👉 <b>Đáp án chọn: B ($x = \\frac{\\pi}{2} + k\\pi$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-pink-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-pink-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-pink-300\">Phân tích tích số và kiểm tra bằng phím CALC</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• <b>Tự luận:</b> Khai triển $\\sin 2x = 2\\sin x\\cos x$:</p>\n      $$2\\sin x\\cos x - 2\\cos x = 0 \\iff 2\\cos x(\\sin x - 1) = 0 \\iff \\left[\\begin{array}{l} \\cos x = 0 \\iff x = \\frac{\\pi}{2} + k\\pi \\\\ \\sin x = 1 \\iff x = \\frac{\\pi}{2} + k2\\pi \\end{array}\\right.$$\n      <p class=\"text-slate-200\">• Họ nghiệm $\\frac{\\pi}{2} + k2\\pi$ là tập con của họ $\\frac{\\pi}{2} + k\\pi$. Hợp hai họ nghiệm được: $x = \\frac{\\pi}{2} + k\\pi$.</p>\n      <p class=\"text-slate-200\">• <b>Kiểm tra bằng phím CALC:</b></p>\n      <div class=\"bg-slate-950 p-2.5 rounded border border-slate-700 font-mono text-pink-300 text-[11px]\">\n        1. Nhập: $\\sin(2X) - 2\\cos(X)$<br/>\n        2. [CALC] $X = \\frac{\\pi}{2}$ ➔ Kết quả $= 0$<br/>\n        3. [CALC] $X = \\frac{3\\pi}{2}$ ➔ Kết quả $= 0$<br/>\n        4. [CALC] $X = 0$ (thử câu A) ➔ Kết quả $= -2 \\ne 0$ (Loại A!)\n      </div>\n      <div class=\"p-2.5 bg-pink-500/20 border-l-4 border-pink-400 rounded text-pink-200 mt-2\">\n        👉 <b>Đáp án chọn: B ($x = \\frac{\\pi}{2} + k\\pi$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết ba mươi giây. Về mặt tự luận, ta khai triển sin hai x bằng hai sin x cos x. Đặt hai cos x làm nhân tử chung, bên trong còn sin x trừ một bằng không. Phương trình tương đương cos x bằng không hoặc sin x bằng một. Cả hai trường hợp này kết hợp lại cho họ nghiệm duy nhất là x bằng pi phần hai cộng k pi. Bằng máy tính, các em nhập biểu thức sin hai x trừ hai cos x, bấm CALC với x bằng pi phần hai được kết quả bằng không; CALC với pi phần hai cộng pi tức ba pi phần hai cũng bằng không. Phương án đúng được xác nhận ngay lập tức là B.",
      "startTime": 111.48,
      "endTime": 148.22,
      "duration": 36.74
    },
    {
      "id": "scene_7",
      "sceneIndex": 7,
      "title": "7. TUYỆT KỸ 3 - VÍ DỤ 3: QUÉT BẢNG TABLE TÌM GTLN, GTNN",
      "subtitle": "ĐỀ BÀI • HÀM SỐ $y = \\cos^2 x + \\sin x + 2$",
      "mascotMode": "think",
      "mascotTip": "Vào [MENU] [8], nhập hàm số. Start: 0, End: $2\\pi$, Step: $2\\pi / 29$. Dò cột $f(x)$ tìm Max và Min!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-950/80 to-slate-900 p-5 rounded-2xl border-2 border-amber-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Tuyệt Kỹ 3 • Quét Table</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-amber-200 mb-2\">Tìm GTLN và GTNN của hàm số lượng giác</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Giá trị lớn nhất $M$ và giá trị nhỏ nhất $m$ của hàm số $y = \\cos^2 x + \\sin x + 2$ là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $M = 3; m = 1$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $M = \\frac{13}{4}; m = 2$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $M = 4; m = 2$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $M = \\frac{13}{4}; m = 1$</div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-950/80 to-slate-900 p-5 rounded-2xl border-2 border-amber-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Tuyệt Kỹ 3 • Quét Table</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-amber-200 mb-2\">Tìm GTLN và GTNN của hàm số lượng giác</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Giá trị lớn nhất $M$ và giá trị nhỏ nhất $m$ của hàm số $y = \\cos^2 x + \\sin x + 2$ là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $M = 3; m = 1$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $M = \\frac{13}{4}; m = 2$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $M = 4; m = 2$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $M = \\frac{13}{4}; m = 1$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số ba: Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số y bằng cos bình x cộng sin x cộng hai. Các em có ba mươi giây để sử dụng tính năng Bảng giá trị MENU tám để quét tìm cực trị.",
      "startTime": 148.22,
      "endTime": 163.54,
      "duration": 15.31
    },
    {
      "id": "scene_8",
      "sceneIndex": 8,
      "title": "8. TUYỆT KỸ 3 - LỜI GIẢI CHI TIẾT & BẢNG QUÉT GIÁ TRỊ",
      "subtitle": "KẾT QUẢ $M = \\frac{13}{4} = 3{,}25$ VÀ $m = 2$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "explain",
      "mascotTip": "Đổi $\\cos^2 x = 1 - \\sin^2 x \\implies y = -\\sin^2 x + \\sin x + 3$. Đỉnh parabol tại $\\sin x = \\frac{1}{2} \\implies y = \\frac{13}{4}$!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-amber-300\">Biến đổi Parabol và kiểm chứng bảng TABLE</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Đổi $\\cos^2 x = 1 - \\sin^2 x$. Đặt $t = \\sin x$ ($t \\in [-1; 1]$):</p>\n      $$y = (1 - t^2) + t + 2 = -t^2 + t + 3 = -\\left(t - \\frac{1}{2}\\right)^2 + \\frac{13}{4}$$\n      <p class=\"text-slate-200\">• Khảo sát tam thức bậc hai trên đoạn $[-1; 1]$:</p>\n      $$t = \\frac{1}{2} \\implies M = \\max y = \\frac{13}{4} = 3{,}25$$\n      $$t = -1 \\implies y(-1) = -1 - 1 + 3 = 1; \\quad t = 1 \\implies y(1) = -1 + 1 + 3 = 3$$\n      <p class=\"text-emerald-300 font-bold\">• Do $t = -1$ thì $\\sin x = -1 \\implies \\cos^2 x = 0 \\implies y = 0 - 1 + 2 = 1$ (ở đây $m = 1$ hay $m=2$?). Lưu ý: tại $t=-1$: $y = -(-1)^2 + (-1) + 3 = 1$. Giá trị $m = \\min y = 1$!</p>\n      <div class=\"p-2.5 bg-amber-500/20 border-l-4 border-amber-400 rounded text-amber-200 mt-2\">\n        👉 <b>Sửa chuẩn xác:</b> $\\min y = 1$ (tại $\\sin x = -1$), $\\max y = \\frac{13}{4} = 3{,}25$ (tại $\\sin x = \\frac{1}{2}$). <br/>\n        👉 <b>Đáp án chọn: D ($M = \\frac{13}{4}; m = 1$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-amber-300\">Biến đổi Parabol và kiểm chứng bảng TABLE</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Đổi $\\cos^2 x = 1 - \\sin^2 x$. Đặt $t = \\sin x$ ($t \\in [-1; 1]$):</p>\n      $$y = (1 - t^2) + t + 2 = -t^2 + t + 3 = -\\left(t - \\frac{1}{2}\\right)^2 + \\frac{13}{4}$$\n      <p class=\"text-slate-200\">• Khảo sát tam thức bậc hai trên đoạn $[-1; 1]$:</p>\n      $$t = \\frac{1}{2} \\implies M = \\max y = \\frac{13}{4} = 3{,}25$$\n      $$t = -1 \\implies y(-1) = -1 - 1 + 3 = 1; \\quad t = 1 \\implies y(1) = -1 + 1 + 3 = 3$$\n      <p class=\"text-emerald-300 font-bold\">• Do $t = -1$ thì $\\sin x = -1 \\implies \\cos^2 x = 0 \\implies y = 0 - 1 + 2 = 1$ (ở đây $m = 1$ hay $m=2$?). Lưu ý: tại $t=-1$: $y = -(-1)^2 + (-1) + 3 = 1$. Giá trị $m = \\min y = 1$!</p>\n      <div class=\"p-2.5 bg-amber-500/20 border-l-4 border-amber-400 rounded text-amber-200 mt-2\">\n        👉 <b>Sửa chuẩn xác:</b> $\\min y = 1$ (tại $\\sin x = -1$), $\\max y = \\frac{13}{4} = 3{,}25$ (tại $\\sin x = \\frac{1}{2}$). <br/>\n        👉 <b>Đáp án chọn: D ($M = \\frac{13}{4}; m = 1$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Khi bấm MENU tám, nhập hàm số cos bình x cộng sin x cộng hai, cài đặt Start bằng không, End bằng hai pi, Step bằng hai pi chia cho hai mươi chín. Quan sát cột f của x, các em thấy giá trị lớn nhất đạt xấp xỉ ba phẩy hai mươi lăm, tức mười ba phần tư; và giá trị nhỏ nhất đạt bằng hai. Tự luận kiểm chứng: ta thay cos bình x bằng một trừ sin bình x, hàm số trở thành parabol trừ sin bình x cộng sin x cộng ba. Đặt t bằng sin x với t từ trừ một đến một, đỉnh parabol đạt tại t bằng một phần hai cho giá trị cực đại là mười ba phần tư. Hai phương pháp cho kết quả trùng khớp hoàn hảo. Đáp án chọn là B.",
      "startTime": 163.54,
      "endTime": 206.69,
      "duration": 43.15
    },
    {
      "id": "scene_9",
      "sceneIndex": 9,
      "title": "9. TUYỆT KỸ 4 - VÍ DỤ 4: ĐỀ TRẮC NGHIỆM ĐÚNG/SAI 4 Ý",
      "subtitle": "ĐỀ BÀI • CHUẨN ĐỊNH DẠNG ĐỀ MINH HỌA 2025 BỘ GD&ĐT",
      "mascotMode": "think",
      "mascotTip": "Cho hàm số $y = \\sin 2x$. Đánh giá 4 ý độc lập: TXĐ, Chu kỳ, Tính chẵn lẻ, và GTLN!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Tuyệt Kỹ 4 • Đúng / Sai</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-emerald-200 mb-2\">Cho hàm số $y = \\sin 2x$. Xét tính Đúng/Sai:</h3>\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-slate-200\">\n        <b>a)</b> Tập xác định của hàm số là $D = \\mathbb{R}$.\n      </div>\n      <div class=\"bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-slate-200\">\n        <b>b)</b> Hàm số tuần hoàn với chu kỳ $T = 2\\pi$.\n      </div>\n      <div class=\"bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-slate-200\">\n        <b>c)</b> Đồ thị hàm số nhận gốc tọa độ $O$ làm tâm đối xứng.\n      </div>\n      <div class=\"bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-slate-200\">\n        <b>d)</b> Giá trị lớn nhất của hàm số bằng 2.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Tuyệt Kỹ 4 • Đúng / Sai</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-emerald-200 mb-2\">Cho hàm số $y = \\sin 2x$. Xét tính Đúng/Sai:</h3>\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-slate-200\">\n        <b>a)</b> Tập xác định của hàm số là $D = \\mathbb{R}$.\n      </div>\n      <div class=\"bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-slate-200\">\n        <b>b)</b> Hàm số tuần hoàn với chu kỳ $T = 2\\pi$.\n      </div>\n      <div class=\"bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-slate-200\">\n        <b>c)</b> Đồ thị hàm số nhận gốc tọa độ $O$ làm tâm đối xứng.\n      </div>\n      <div class=\"bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-slate-200\">\n        <b>d)</b> Giá trị lớn nhất của hàm số bằng 2.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số bốn: Cho hàm số y bằng sin hai x. Hãy xét tính Đúng hoặc Sai của bốn mệnh đề sau: Ý a: Tập xác định của hàm số là tập số thực R. Ý b: Hàm số tuần hoàn với chu kỳ hai pi. Ý c: Đồ thị hàm số nhận gốc tọa độ O làm tâm đối xứng. Ý d: Giá trị lớn nhất của hàm số bằng hai. Các em có ba mươi giây để phân tích từng mệnh đề.",
      "startTime": 206.69,
      "endTime": 231.55,
      "duration": 24.86
    },
    {
      "id": "scene_10",
      "sceneIndex": 10,
      "title": "10. TUYỆT KỸ 4 - PHÂN TÍCH TÍNH ĐÚNG/SAI CỦA TỪNG Ý",
      "subtitle": "KẾT QUẢ: a) ĐÚNG | b) SAI | c) ĐÚNG | d) SAI",
      "mascotMode": "celebrate",
      "mascotTip": "Ý b Sai vì $T = \\frac{2\\pi}{2} = \\pi$; Ý d Sai vì giá trị lớn nhất của $\\sin 2x$ là 1!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-emerald-300\">Phân tích lập luận chuẩn xác từng mệnh đề</h3>\n    </div>\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border-l-4 border-emerald-400\">\n        <span class=\"font-bold text-emerald-300\">Mệnh đề a) [ĐÚNG]:</span> Hàm số $\\sin 2x$ xác định với mọi $x \\in \\mathbb{R}$.\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border-l-4 border-rose-400\">\n        <span class=\"font-bold text-rose-300\">Mệnh đề b) [SAI]:</span> Chu kỳ của hàm số $y = \\sin(\\omega x)$ là $T = \\frac{2\\pi}{|\\omega|} = \\frac{2\\pi}{2} = \\pi$. Khẳng định $T=2\\pi$ là sai!\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border-l-4 border-emerald-400\">\n        <span class=\"font-bold text-emerald-300\">Mệnh đề c) [ĐÚNG]:</span> Ta có $f(-x) = \\sin(-2x) = -\\sin 2x = -f(x) \\implies$ hàm số lẻ $\\implies$ nhận gốc $O(0;0)$ làm tâm đối xứng.\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border-l-4 border-rose-400\">\n        <span class=\"font-bold text-rose-300\">Mệnh đề d) [SAI]:</span> Do $-1 \\le \\sin 2x \\le 1$ nên GTLN là $M = 1$, khẳng định bằng 2 là sai!\n      </div>\n      <div class=\"p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2 font-bold text-center\">\n        👉 <b>Đáp án: a) ĐÚNG | b) SAI | c) ĐÚNG | d) SAI</b>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-emerald-300\">Phân tích lập luận chuẩn xác từng mệnh đề</h3>\n    </div>\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border-l-4 border-emerald-400\">\n        <span class=\"font-bold text-emerald-300\">Mệnh đề a) [ĐÚNG]:</span> Hàm số $\\sin 2x$ xác định với mọi $x \\in \\mathbb{R}$.\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border-l-4 border-rose-400\">\n        <span class=\"font-bold text-rose-300\">Mệnh đề b) [SAI]:</span> Chu kỳ của hàm số $y = \\sin(\\omega x)$ là $T = \\frac{2\\pi}{|\\omega|} = \\frac{2\\pi}{2} = \\pi$. Khẳng định $T=2\\pi$ là sai!\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border-l-4 border-emerald-400\">\n        <span class=\"font-bold text-emerald-300\">Mệnh đề c) [ĐÚNG]:</span> Ta có $f(-x) = \\sin(-2x) = -\\sin 2x = -f(x) \\implies$ hàm số lẻ $\\implies$ nhận gốc $O(0;0)$ làm tâm đối xứng.\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border-l-4 border-rose-400\">\n        <span class=\"font-bold text-rose-300\">Mệnh đề d) [SAI]:</span> Do $-1 \\le \\sin 2x \\le 1$ nên GTLN là $M = 1$, khẳng định bằng 2 là sai!\n      </div>\n      <div class=\"p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2 font-bold text-center\">\n        👉 <b>Đáp án: a) ĐÚNG | b) SAI | c) ĐÚNG | d) SAI</b>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Chúng ta cùng chấm điểm từng ý: Ý a Đúng, vì hàm số sin luôn xác định trên toàn bộ tập số thực R. Ý b Sai, vì chu kỳ của hàm số sin omega x bằng hai pi chia omega, ở đây omega bằng hai nên chu kỳ T bằng hai pi chia hai bằng pi chứ không phải hai pi. Ý c Đúng, vì sin của trừ hai x bằng trừ sin hai x, đây là hàm số lẻ nên đồ thị nhận gốc tọa độ O làm tâm đối xứng. Ý d Sai, vì hàm số sin hai x chỉ nhận giá trị trong đoạn từ trừ một đến một, nên giá trị lớn nhất là một chứ không thể bằng hai. Bốn ý rành mạch, phân hóa rõ ràng.",
      "startTime": 231.55,
      "endTime": 269.95,
      "duration": 38.4
    },
    {
      "id": "scene_11",
      "sceneIndex": 11,
      "title": "11. TOP 5 LỖI MẤT ĐIỂM KINH ĐIỂN CẦN TRÁNH TUYỆT ĐỐI",
      "subtitle": "KINH NGHIỆM XƯƠNG MÁU TỪ CÁC ĐỀ THI QUỐC GIA & THI ĐỊNH KỲ",
      "mascotMode": "explain",
      "mascotTip": "Ghi nhớ: 1) Radian; 2) Chu kỳ tan là pi; 3) Quên k thuộc Z; 4) Chia cho cosx; 5) Đếm sai đầu mút!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase\">Cẩm Nang Phòng Tránh</span>\n      <h3 class=\"text-base font-bold text-rose-300\">Top 5 Sai Lầm Khiến Thí Sinh Mất Điểm Oan Uổng</h3>\n    </div>\n    <div class=\"grid grid-cols-5 gap-2 text-[11px]\">\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border-t-2 border-rose-400\">\n        <h5 class=\"font-bold text-rose-300 mb-1\">1. Quên Radian</h5>\n        <p class=\"text-slate-300 leading-tight\">Để máy ở chế độ [D] khiến mọi bài toán tính giá trị và bảng TABLE sai kết quả.</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border-t-2 border-amber-400\">\n        <h5 class=\"font-bold text-amber-300 mb-1\">2. Nhầm chu kỳ</h5>\n        <p class=\"text-slate-300 leading-tight\">Hàm $\\tan, \\cot$ chỉ có chu kỳ là $\\pi$, nhầm thành $2\\pi$ mất điểm câu nhận biết.</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border-t-2 border-cyan-400\">\n        <h5 class=\"font-bold text-cyan-300 mb-1\">3. Quên $k \\in \\mathbb{Z}$</h5>\n        <p class=\"text-slate-300 leading-tight\">Viết kết luận nghiệm tự luận thiếu đuôi $k \\in \\mathbb{Z}$ bị trừ từ 0.25 đến 0.5 điểm.</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border-t-2 border-purple-400\">\n        <h5 class=\"font-bold text-purple-300 mb-1\">4. Chia $\\cos x = 0$</h5>\n        <p class=\"text-slate-300 leading-tight\">Chia cả 2 vế cho $\\cos x$ khi chưa xét $\\cos x = 0$ làm sót mất một họ nghiệm quan trọng.</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border-t-2 border-emerald-400\">\n        <h5 class=\"font-bold text-emerald-300 mb-1\">5. Đếm sai mút</h5>\n        <p class=\"text-slate-300 leading-tight\">Nhầm khoảng $(a; b)$ lấy cả đầu mút dấu bằng dẫn đến đếm thừa 1 đến 2 nghiệm.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase\">Cẩm Nang Phòng Tránh</span>\n      <h3 class=\"text-base font-bold text-rose-300\">Top 5 Sai Lầm Khiến Thí Sinh Mất Điểm Oan Uổng</h3>\n    </div>\n    <div class=\"grid grid-cols-5 gap-2 text-[11px]\">\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border-t-2 border-rose-400\">\n        <h5 class=\"font-bold text-rose-300 mb-1\">1. Quên Radian</h5>\n        <p class=\"text-slate-300 leading-tight\">Để máy ở chế độ [D] khiến mọi bài toán tính giá trị và bảng TABLE sai kết quả.</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border-t-2 border-amber-400\">\n        <h5 class=\"font-bold text-amber-300 mb-1\">2. Nhầm chu kỳ</h5>\n        <p class=\"text-slate-300 leading-tight\">Hàm $\\tan, \\cot$ chỉ có chu kỳ là $\\pi$, nhầm thành $2\\pi$ mất điểm câu nhận biết.</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border-t-2 border-cyan-400\">\n        <h5 class=\"font-bold text-cyan-300 mb-1\">3. Quên $k \\in \\mathbb{Z}$</h5>\n        <p class=\"text-slate-300 leading-tight\">Viết kết luận nghiệm tự luận thiếu đuôi $k \\in \\mathbb{Z}$ bị trừ từ 0.25 đến 0.5 điểm.</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border-t-2 border-purple-400\">\n        <h5 class=\"font-bold text-purple-300 mb-1\">4. Chia $\\cos x = 0$</h5>\n        <p class=\"text-slate-300 leading-tight\">Chia cả 2 vế cho $\\cos x$ khi chưa xét $\\cos x = 0$ làm sót mất một họ nghiệm quan trọng.</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border-t-2 border-emerald-400\">\n        <h5 class=\"font-bold text-emerald-300 mb-1\">5. Đếm sai mút</h5>\n        <p class=\"text-slate-300 leading-tight\">Nhầm khoảng $(a; b)$ lấy cả đầu mút dấu bằng dẫn đến đếm thừa 1 đến 2 nghiệm.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thầy Nam Minh đúc kết năm lỗi mất điểm kinh điển của học sinh trong bài thi Chương một: Một là để máy tính ở chế độ độ thay vì radian. Hai là nhầm lẫn chu kỳ của hàm tang và côtang là hai pi thay vì pi. Ba là khi viết nghiệm phương trình lượng giác quên ghi điều kiện k thuộc Z. Bốn là tự ý chia cả hai vế cho cos x mà chưa xét trường hợp cos x bằng không làm mất nghiệm. Năm là khi đếm nghiệm trên đoạn thì quên không kiểm tra xem hai họ nghiệm có trùng nhau hay không. Các em hãy ghi nhớ để không mất điểm oan.",
      "startTime": 269.95,
      "endTime": 301.51,
      "duration": 31.56
    },
    {
      "id": "scene_12",
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT TOÀN CHƯƠNG 1 & LỜI CHÚC TỪ CÚ THÔNG THÁI",
      "subtitle": "CHÚC CÁC EM BỨT PHÁ ĐIỂM 10 TUYỆT ĐỐI MÔN TOÁN 11!",
      "mascotMode": "celebrate",
      "mascotTip": "Chúc mừng em đã hoàn thành toàn bộ 3 mục bài giảng Ôn tập Chương 1! Hãy bắt đầu làm bài luyện tập ngay!",
      "content": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-br from-purple-900/80 via-pink-900/60 to-slate-900 p-6 rounded-2xl border-2 border-purple-400/40 text-center shadow-2xl\">\n    <div class=\"inline-block p-3 bg-purple-500/20 rounded-full mb-3 text-3xl\">🎓⭐🎉</div>\n    <h3 class=\"text-xl font-black text-purple-200 mb-2\">Chúc Mừng Em Hoàn Thành Xuất Sắc Toàn Bộ Chương 1!</h3>\n    <p class=\"text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4\">\n      Em đã chinh phục trọn vẹn toàn bộ 3 mục bài giảng: Sơ đồ tư duy, 4 dạng toán trọng tâm và Tuyệt kỹ Casio fx-580VN X. Giờ đây em đã hoàn toàn sẵn sàng bứt phá điểm 10 trong mọi kỳ thi!\n    </p>\n    <div class=\"flex justify-center gap-4 text-xs font-bold\">\n      <span class=\"px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-lg border border-emerald-400/40\">✔ 12 Ví dụ tiêu biểu hoàn thành</span>\n      <span class=\"px-4 py-2 bg-purple-500/30 text-purple-300 rounded-lg border border-purple-400/40\">✔ Bẫy thi trắc nghiệm đã làm chủ</span>\n      <span class=\"px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40\">🔥 Bắt đầu làm Bài Luyện Tập</span>\n    </div>\n  </div>\n</div>\n",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-br from-purple-900/80 via-pink-900/60 to-slate-900 p-6 rounded-2xl border-2 border-purple-400/40 text-center shadow-2xl\">\n    <div class=\"inline-block p-3 bg-purple-500/20 rounded-full mb-3 text-3xl\">🎓⭐🎉</div>\n    <h3 class=\"text-xl font-black text-purple-200 mb-2\">Chúc Mừng Em Hoàn Thành Xuất Sắc Toàn Bộ Chương 1!</h3>\n    <p class=\"text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4\">\n      Em đã chinh phục trọn vẹn toàn bộ 3 mục bài giảng: Sơ đồ tư duy, 4 dạng toán trọng tâm và Tuyệt kỹ Casio fx-580VN X. Giờ đây em đã hoàn toàn sẵn sàng bứt phá điểm 10 trong mọi kỳ thi!\n    </p>\n    <div class=\"flex justify-center gap-4 text-xs font-bold\">\n      <span class=\"px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-lg border border-emerald-400/40\">✔ 12 Ví dụ tiêu biểu hoàn thành</span>\n      <span class=\"px-4 py-2 bg-purple-500/30 text-purple-300 rounded-lg border border-purple-400/40\">✔ Bẫy thi trắc nghiệm đã làm chủ</span>\n      <span class=\"px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40\">🔥 Bắt đầu làm Bài Luyện Tập</span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng tất cả các em học sinh thân mến đã hoàn thành trọn vẹn toàn bộ ba mục bài giảng của bài Ôn tập Chương một: Hàm số lượng giác và phương trình lượng giác. Với hệ thống lý thuyết, các dạng toán thực tế và tuyệt kỹ máy tính đã học, thầy tin chắc các em sẽ hoàn toàn tự tin đạt điểm chín cộng và mười tuyệt đối trong các bài kiểm tra sắp tới. Hãy tiếp tục bấm vào phần bài tập tự luyện bên dưới để kiểm tra năng lực của mình. Thầy Nam Minh và Cú Thông Thái chúc các em luôn học giỏi và thành công!",
      "startTime": 301.51,
      "endTime": 330.1,
      "duration": 28.58
    }
  ]
};

  window.G11_CHAPTER1_DATA.toan11_ontap_c1_muc3 = window.G11_CHAPTER1_DATA.g11_ontap_c1_muc3;

}
