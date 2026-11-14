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

  // Aliases for compatibility
  window.G11_CHAPTER1_DATA.toan11_bai1_muc1 = window.G11_CHAPTER1_DATA.g11_bai1_muc1;
  window.G11_CHAPTER1_DATA.toan11_bai1_muc2 = window.G11_CHAPTER1_DATA.g11_bai1_muc2;
  window.G11_CHAPTER1_DATA.toan11_bai1_muc3 = window.G11_CHAPTER1_DATA.g11_bai1_muc3;
  window.G11_CHAPTER1_DATA.toan11_bai1_muc4 = window.G11_CHAPTER1_DATA.g11_bai1_muc4;

  if (typeof LECTURE_DATA !== 'undefined') {
    Object.assign(LECTURE_DATA, window.G11_CHAPTER1_DATA);
  }
}
