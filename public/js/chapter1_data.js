/**
 * CHAPTER 1 DATA MODULE: TOÁN 12 - SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Toàn bộ 16 Mục bài giảng tương tác cho Chương 1 (Bài 2, 3, 4, 5 & Ôn tập)
 * Thầy Phan Đình Thuấn EdTech
 */

(function(window) {
  'use strict';

  const CHAPTER1_LECTURES = {
    // =========================================================================
    // BÀI 2: GIÁ TRỊ LỚN NHẤT VÀ GIÁ TRỊ NHỎ NHẤT CỦA HÀM SỐ (3 MỤC)
    // =========================================================================
                            bai2_muc1: {
  "lessonId": "bai2",
  "lessonTitle": "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
  "sectionId": "bai2_muc1",
  "sectionTitle": "Mục 1: Định nghĩa GTLN & GTNN của hàm số",
  "audio": "/audio/bai2_muc1.mp3",
  "audioSrc": "./audio/bai2_muc1.mp3",
  "audio_src": "./audio/bai2_muc1.mp3",
  "totalDuration": 180,
  "duration": 180,
  "title": "Mục 1: Định nghĩa GTLN & GTNN (Phân biệt Max/Min với Cực trị)",
  "owl_tip": "Ghi nhớ: GTLN/GTNN là giá trị toàn cục trên tập D, khác với Cực trị chỉ mang tính chất địa phương cục bộ!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 39.35,
      "id": "part2"
    },
    {
      "time": 52.17,
      "id": "part3"
    },
    {
      "time": 55.82,
      "id": "vd1_q"
    },
    {
      "time": 83.57,
      "id": "vd1_a"
    },
    {
      "time": 97.03,
      "id": "vd2_q"
    },
    {
      "time": 116.67,
      "id": "vd2_a"
    },
    {
      "time": 130.35,
      "id": "vd3_q"
    },
    {
      "time": 148.86,
      "id": "vd3_a"
    },
    {
      "time": 161.47,
      "id": "part4"
    },
    {
      "time": 168.46,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Khái niệm cốt lõi</h3><p>Cho hàm số $y=f(x)$ xác định trên $D$.<br>+ $\\max_{D} f(x) = M \\Leftrightarrow f(x) \\le M \\, \\forall x \\in D$ và $\\exists x_0 \\in D: f(x_0)=M$.<br>+ $\\min_{D} f(x) = m \\Leftrightarrow f(x) \\ge m \\, \\forall x \\in D$ và $\\exists x_0 \\in D: f(x_0)=m$.</p></div>\n      <div id=\"part2\"><h3>2. Phân biệt với Cực trị</h3><p>Cực đại, cực tiểu là tính địa phương. GTLN, GTNN là tính toàn cục trên $D$.</p></div>\n      <div id=\"part3\"><h3>3. Các ví dụ điển hình</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Tìm GTLN, GTNN của $y = 4 - x^2$ trên $[-1; 2]$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <svg viewBox=\"0 0 200 180\" style=\"width:100%; max-width:250px; background:white; border:1px solid #ccc; display:block; margin:auto;\">\n            <line x1=\"20\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"black\"/> <line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"160\" stroke=\"black\"/>\n            <polyline points=\"70,50 85,27.5 100,20 115,27.5 130,50 145,87.5 160,140\" stroke=\"blue\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"100\" cy=\"20\" r=\"4\" fill=\"red\"/>\n            <text x=\"108\" y=\"25\" font-size=\"14\" font-weight=\"bold\">4</text>\n            <circle cx=\"160\" cy=\"140\" r=\"4\" fill=\"red\"/>\n            <text x=\"70\" y=\"155\" font-size=\"12\">-1</text>\n            <text x=\"155\" y=\"155\" font-size=\"12\">2</text>\n          </svg>\n          <p><b>Giải chi tiết:</b> Đỉnh cao nhất tại $x=0 \\Rightarrow \\max y = 4$. Điểm thấp nhất tại $x=2 \\Rightarrow \\min y = 0$.</p>\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Hàm $y = 2x - 1$ trên khoảng $(0; 2)$ có Max Min không?<br><i>(Thời gian suy nghĩ: 15s)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải chi tiết:</b> Đồ thị đi từ $y=-1$ đến $y=3$ KHÔNG lấy mút. Không tồn tại $x_0$ để dấu bằng xảy ra $\\Rightarrow$ KHÔNG CÓ max, min.</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Đọc Max/Min từ Bảng biến thiên sau trên $[-2; 3]$:<br>\n          <table style=\"width:100%; max-width:380px; border-collapse:collapse; text-align:center; background:#ffffff !important; color:#111827 !important; border:2px solid #374151; margin:12px auto; font-size:15px; font-weight:600;\">\n            <tr style=\"border-bottom:1.5px solid #374151;\">\n              <td style=\"width:45px; border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$x$</td>\n              <td style=\"padding:6px; color:#111827 !important;\">$-2$</td>\n              <td></td>\n              <td style=\"padding:6px; color:#111827 !important;\">$1$</td>\n              <td></td>\n              <td style=\"padding:6px; color:#111827 !important;\">$3$</td>\n            </tr>\n            <tr style=\"border-bottom:1.5px solid #374151;\">\n              <td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y'$</td>\n              <td></td>\n              <td style=\"padding:6px; color:#2563eb !important; font-size:16px;\">$+$</td>\n              <td style=\"padding:6px; color:#111827 !important;\">$0$</td>\n              <td style=\"padding:6px; color:#dc2626 !important; font-size:16px;\">$-$</td>\n              <td></td>\n            </tr>\n            <tr style=\"height:70px;\">\n              <td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y$</td>\n              <td style=\"vertical-align:bottom; padding:6px; color:#111827 !important;\">$-2$</td>\n              <td style=\"vertical-align:middle; color:#2563eb !important; font-size:20px;\">$\\nearrow$</td>\n              <td style=\"vertical-align:top; padding:6px; color:#dc2626 !important; font-weight:bold; font-size:18px;\">$5$</td>\n              <td style=\"vertical-align:middle; color:#dc2626 !important; font-size:20px;\">$\\searrow$</td>\n              <td style=\"vertical-align:bottom; padding:6px; color:#111827 !important;\">$1$</td>\n            </tr>\n          </table>\n          <i>(Thời gian suy nghĩ: 20s)</i>\n        </div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải chi tiết:</b> Quét dọc bảng, điểm cao nhất là $5$, trũng nhất là $-2 \\Rightarrow \\max = 5, \\min = -2$.</div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Tìm được $M$ nhưng không tồn tại $x_0 \\in D$.</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Gióng điểm cao nhất/thấp nhất xuống trục $Ox$ để tìm $x_0$.</p></div>\n    ",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm cốt lõi",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Phương pháp giải nhanh",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ điển hình (3 Ví dụ)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Bẫy đề thi",
      "scenes": [
        9
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo tư duy & Casio",
      "scenes": [
        10
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 2: GIÁ TRỊ LỚN NHẤT VÀ GIÁ TRỊ NHỎ NHẤT CỦA HÀM SỐ",
      "subtitle": "PHẦN 1: KHÁI NIỆM CỐT LÕI",
      "startTime": 0.0,
      "endTime": 39.35,
      "duration": 39.35,
      "mascotMode": "pointer",
      "mascotTip": "Ghi nhớ: GTLN/GTNN là giá trị toàn cục trên tập D, khác với Cực trị chỉ mang tính chất địa phương cục bộ!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Khái niệm cốt lõi</div><div style=\"font-size:22px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">\n      <h3>1. Khái niệm cốt lõi</h3><p>Cho hàm số $y=f(x)$ xác định trên $D$.<br>+ $\\max_{D} f(x) = M \\Leftrightarrow f(x) \\le M \\, \\forall x \\in D$ và $\\exists x_0 \\in D: f(x_0)=M$.<br>+ $\\min_{D} f(x) = m \\Leftrightarrow f(x) \\ge m \\, \\forall x \\in D$ và $\\exists x_0 \\in D: f(x_0)=m$.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "PHƯƠNG PHÁP GIẢI & QUY TRÌNH CHUẨN",
      "subtitle": "PHẦN 2: BẢN CHẤT VÀ NGUYÊN TẮC GIẢI TOÁN",
      "startTime": 39.35,
      "endTime": 55.82,
      "duration": 16.47,
      "mascotMode": "pointer",
      "mascotTip": "Nắm vững lý thuyết để không bị nhầm lẫn khi làm bài!",
      "bodyHtml": "<div style=\"font-size:22px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Phương pháp giải</div><div style=\"font-size:21px; line-height:1.7; color:#e2e8f0; margin-left:14px;\"><h3>2. Phân biệt với Cực trị</h3><p>Cực đại, cực tiểu là tính địa phương. GTLN, GTNN là tính toàn cục trên $D$.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: ĐỀ BÀI VÀ THỜI GIAN NHÁP",
      "subtitle": "Ví dụ điển hình 1",
      "startTime": 55.82,
      "endTime": 83.57,
      "duration": 27.75,
      "mascotMode": "pointer",
      "mascotTip": "Lấy nháp ra tính toán thử sức trước khi xem lời giải nhé!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Tìm GTLN, GTNN của $y = 4 - x^2$ trên $[-1; 2]$.<br><i>(Thời gian suy nghĩ: 20s)</i></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "Đối chiếu kết quả",
      "startTime": 83.57,
      "endTime": 97.03,
      "duration": 13.46,
      "mascotMode": "cheer",
      "mascotTip": "Đối chiếu xem em tính đúng chưa nào!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div style=\"font-size:20px; line-height:1.6; color:#f8fafc;\">\n          <svg viewBox=\"0 0 200 180\" style=\"width:100%; max-width:250px; background:white; border:1px solid #ccc; display:block; margin:auto;\">\n            <line x1=\"20\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"black\"/> <line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"160\" stroke=\"black\"/>\n            <polyline points=\"70,50 85,27.5 100,20 115,27.5 130,50 145,87.5 160,140\" stroke=\"blue\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"100\" cy=\"20\" r=\"4\" fill=\"red\"/>\n            <text x=\"108\" y=\"25\" font-size=\"14\" font-weight=\"bold\">4</text>\n            <circle cx=\"160\" cy=\"140\" r=\"4\" fill=\"red\"/>\n            <text x=\"70\" y=\"155\" font-size=\"12\">-1</text>\n            <text x=\"155\" y=\"155\" font-size=\"12\">2</text>\n          </svg>\n          <p><b>Giải chi tiết:</b> Đỉnh cao nhất tại $x=0 \\Rightarrow \\max y = 4$. Điểm thấp nhất tại $x=2 \\Rightarrow \\min y = 0$.</p>\n        </div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: ĐỀ BÀI VÀ THỜI GIAN NHÁP",
      "subtitle": "Ví dụ điển hình 2",
      "startTime": 97.03,
      "endTime": 116.67,
      "duration": 19.64,
      "mascotMode": "pointer",
      "mascotTip": "Chú ý các điều kiện giả thiết và tập xác định!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Hàm $y = 2x - 1$ trên khoảng $(0; 2)$ có Max Min không?<br><i>(Thời gian suy nghĩ: 15s)</i></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "Đối chiếu kết quả",
      "startTime": 116.67,
      "endTime": 130.35,
      "duration": 13.68,
      "mascotMode": "cheer",
      "mascotTip": "Tuyệt vời! Nắm chắc bước biến đổi quan trọng này!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><b>Giải chi tiết:</b> Đồ thị đi từ $y=-1$ đến $y=3$ KHÔNG lấy mút. Không tồn tại $x_0$ để dấu bằng xảy ra $\\Rightarrow$ KHÔNG CÓ max, min.</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: ĐỀ BÀI VÀ THỜI GIAN NHÁP",
      "subtitle": "Ví dụ điển hình 3 (Đồ thị / Bảng biến thiên)",
      "startTime": 130.35,
      "endTime": 148.86,
      "duration": 18.51,
      "mascotMode": "pointer",
      "mascotTip": "Quan sát kỹ bảng biến thiên hoặc đồ thị trực quan!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div style=\"font-size:20px; line-height:1.5; color:#f8fafc;\"><b>Ví dụ 3:</b> Đọc Max/Min từ Bảng biến thiên sau trên $[-2; 3]$:<br>\n          <table style=\"width:100%; max-width:380px; border-collapse:collapse; text-align:center; background:#ffffff !important; color:#111827 !important; border:2px solid #374151; margin:12px auto; font-size:15px; font-weight:600;\">\n            <tr style=\"border-bottom:1.5px solid #374151;\">\n              <td style=\"width:45px; border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$x$</td>\n              <td style=\"padding:6px; color:#111827 !important;\">$-2$</td>\n              <td></td>\n              <td style=\"padding:6px; color:#111827 !important;\">$1$</td>\n              <td></td>\n              <td style=\"padding:6px; color:#111827 !important;\">$3$</td>\n            </tr>\n            <tr style=\"border-bottom:1.5px solid #374151;\">\n              <td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y'$</td>\n              <td></td>\n              <td style=\"padding:6px; color:#2563eb !important; font-size:16px;\">$+$</td>\n              <td style=\"padding:6px; color:#111827 !important;\">$0$</td>\n              <td style=\"padding:6px; color:#dc2626 !important; font-size:16px;\">$-$</td>\n              <td></td>\n            </tr>\n            <tr style=\"height:70px;\">\n              <td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y$</td>\n              <td style=\"vertical-align:bottom; padding:6px; color:#111827 !important;\">$-2$</td>\n              <td style=\"vertical-align:middle; color:#2563eb !important; font-size:20px;\">$\\nearrow$</td>\n              <td style=\"vertical-align:top; padding:6px; color:#dc2626 !important; font-weight:bold; font-size:18px;\">$5$</td>\n              <td style=\"vertical-align:middle; color:#dc2626 !important; font-size:20px;\">$\\searrow$</td>\n              <td style=\"vertical-align:bottom; padding:6px; color:#111827 !important;\">$1$</td>\n            </tr>\n          </table>\n          <i>(Thời gian suy nghĩ: 20s)</i>\n        </div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "Đối chiếu kết quả",
      "startTime": 148.86,
      "endTime": 161.47,
      "duration": 12.61,
      "mascotMode": "cheer",
      "mascotTip": "Hoàn thành xuất sắc 3 ví dụ thực hành!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><b>Giải chi tiết:</b> Quét dọc bảng, điểm cao nhất là $5$, trũng nhất là $-2 \\Rightarrow \\max = 5, \\min = -2$.</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI CẦN TRÁNH",
      "subtitle": "PHẦN 4: CẢNH BÁO BẪY SAI LẦM",
      "startTime": 161.47,
      "endTime": 168.46,
      "duration": 6.99,
      "mascotMode": "magnifier",
      "mascotTip": "Ghi nhớ bẫy này để không bị mất điểm oan uổng!",
      "bodyHtml": "<div style=\"font-size:22px; color:#f43f5e; font-weight:bold; margin-bottom:8px;\">4. Bẫy đề thi</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\"><h3>4. Bẫy đề thi</h3><p>Tìm được $M$ nhưng không tồn tại $x_0 \\in D$.</p></div>"
    },
    {
      "sceneIndex": 10,
      "title": "MẸO THẦY CÚ & CASIO BẤM MÁY",
      "subtitle": "PHẦN 5: BÍ QUYẾT TƯ DUY TỐC ĐỘ",
      "startTime": 168.46,
      "endTime": 180,
      "duration": 11.54,
      "mascotMode": "cheer",
      "mascotTip": "Áp dụng mẹo này để giải nhanh câu trắc nghiệm chỉ trong vài giây!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Mẹo Thầy Cú thông thái</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\"><h3>5. Mẹo Thầy Cú</h3><p>Gióng điểm cao nhất/thấp nhất xuống trục $Ox$ để tìm $x_0$.</p></div>"
    }
  ]
},

    bai2_muc2: {
  "lessonId": "bai2",
  "lessonTitle": "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
  "sectionId": "bai2_muc2",
  "sectionTitle": "Mục 2: Tìm GTLN & GTNN trên một đoạn",
  "audio": "/audio/bai2_muc2.mp3",
  "audioSrc": "./audio/bai2_muc2.mp3",
  "audio_src": "./audio/bai2_muc2.mp3",
  "totalDuration": 182,
  "duration": 182,
  "title": "Mục 2: Quy tắc tìm Max/Min trên đoạn [a; b] (Quy trình chuẩn BGD)",
  "owl_tip": "Ghi nhớ: Hàm liên tục trên [a;b] luôn có Max và Min. Tính y' -> lấy nghiệm trong khoảng -> so sánh giá trị!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 16.38,
      "id": "part2"
    },
    {
      "time": 38.05,
      "id": "part3"
    },
    {
      "time": 41.61,
      "id": "vd1_q"
    },
    {
      "time": 65.83,
      "id": "vd1_a"
    },
    {
      "time": 86.32,
      "id": "vd2_q"
    },
    {
      "time": 106.88,
      "id": "vd2_a"
    },
    {
      "time": 122.21,
      "id": "vd3_q"
    },
    {
      "time": 145.74,
      "id": "vd3_a"
    },
    {
      "time": 160.8,
      "id": "part4"
    },
    {
      "time": 169.61,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Định lý</h3><p>Hàm số liên tục trên đoạn $[a;b]$ luôn có Max và Min.</p></div>\n      <div id=\"part2\"><h3>2. Quy trình BGD</h3><p>B1: Tính $y'$. Tìm nghiệm $x_i \\in (a;b)$.<br>B2: Tính $y(a), y(b), y(x_i)$.<br>B3: Số lớn nhất là Max, nhỏ nhất là Min.</p></div>\n      <div id=\"part3\"><h3>3. Các ví dụ thực hành</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Tìm Max, Min của $y = x^3 - 3x^2 + 2$ trên $[0; 3]$.<br><i>(Thời gian nháp: 25s)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải chi tiết:</b> $y' = 3x^2 - 6x = 0 \\Leftrightarrow x=0 \\text{ (loại)}, x=2 \\text{ (nhận)}$.<br>Ta có: $y(0)=2, y(2)=-2, y(3)=2$. Vậy $\\max = 2, \\min = -2$.</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Tìm Max, Min của $y = \\frac{x+1}{x-1}$ trên $[2; 4]$.<br><i>(Thời gian nháp: 20s)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải chi tiết:</b> $y' = \\frac{-2}{(x-1)^2} < 0 \\, \\forall x$. Ta có $y(2)=3, y(4)=\\frac{5}{3}$. Vậy $\\max = 3, \\min = \\frac{5}{3}$.</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> $y = x + \\sqrt{4-x^2}$ trên $[-2; 2]$.<br><i>(Thời gian nháp: 30s)</i></div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải chi tiết:</b> $y' = 1 - \\frac{x}{\\sqrt{4-x^2}}=0 \\Rightarrow x=\\sqrt{2}$. Ta có $\\max y = 2\\sqrt{2}, \\min y = -2$.</div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy trắc nghiệm</h3><p>Quên loại nghiệm $x_i \\notin (a;b)$.</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Casio</h3><p>Dùng TABLE [Menu 8], Start=a, End=b, Step=(b-a)/29.</p></div>\n    ",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm cốt lõi",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Phương pháp giải nhanh",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ điển hình (3 Ví dụ)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Bẫy đề thi",
      "scenes": [
        9
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo tư duy & Casio",
      "scenes": [
        10
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 2: GIÁ TRỊ LỚN NHẤT VÀ GIÁ TRỊ NHỎ NHẤT CỦA HÀM SỐ",
      "subtitle": "PHẦN 1: KHÁI NIỆM CỐT LÕI",
      "startTime": 0.0,
      "endTime": 16.38,
      "duration": 16.38,
      "mascotMode": "pointer",
      "mascotTip": "Ghi nhớ: Hàm liên tục trên [a;b] luôn có Max và Min. Tính y' -> lấy nghiệm trong khoảng -> so sánh giá trị!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Khái niệm cốt lõi</div><div style=\"font-size:22px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">\n      <h3>1. Định lý</h3><p>Hàm số liên tục trên đoạn $[a;b]$ luôn có Max và Min.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "PHƯƠNG PHÁP GIẢI & QUY TRÌNH CHUẨN",
      "subtitle": "PHẦN 2: BẢN CHẤT VÀ NGUYÊN TẮC GIẢI TOÁN",
      "startTime": 16.38,
      "endTime": 41.61,
      "duration": 25.23,
      "mascotMode": "pointer",
      "mascotTip": "Nắm vững lý thuyết để không bị nhầm lẫn khi làm bài!",
      "bodyHtml": "<div style=\"font-size:22px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Phương pháp giải</div><div style=\"font-size:21px; line-height:1.7; color:#e2e8f0; margin-left:14px;\"><h3>2. Quy trình BGD</h3><p>B1: Tính $y'$. Tìm nghiệm $x_i \\in (a;b)$.<br>B2: Tính $y(a), y(b), y(x_i)$.<br>B3: Số lớn nhất là Max, nhỏ nhất là Min.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: ĐỀ BÀI VÀ THỜI GIAN NHÁP",
      "subtitle": "Ví dụ điển hình 1",
      "startTime": 41.61,
      "endTime": 65.83,
      "duration": 24.22,
      "mascotMode": "pointer",
      "mascotTip": "Lấy nháp ra tính toán thử sức trước khi xem lời giải nhé!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Tìm Max, Min của $y = x^3 - 3x^2 + 2$ trên $[0; 3]$.<br><i>(Thời gian nháp: 25s)</i></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "Đối chiếu kết quả",
      "startTime": 65.83,
      "endTime": 86.32,
      "duration": 20.49,
      "mascotMode": "cheer",
      "mascotTip": "Đối chiếu xem em tính đúng chưa nào!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><b>Giải chi tiết:</b> $y' = 3x^2 - 6x = 0 \\Leftrightarrow x=0 \\text{ (loại)}, x=2 \\text{ (nhận)}$.<br>Ta có: $y(0)=2, y(2)=-2, y(3)=2$. Vậy $\\max = 2, \\min = -2$.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: ĐỀ BÀI VÀ THỜI GIAN NHÁP",
      "subtitle": "Ví dụ điển hình 2",
      "startTime": 86.32,
      "endTime": 106.88,
      "duration": 20.56,
      "mascotMode": "pointer",
      "mascotTip": "Chú ý các điều kiện giả thiết và tập xác định!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Tìm Max, Min của $y = \\frac{x+1}{x-1}$ trên $[2; 4]$.<br><i>(Thời gian nháp: 20s)</i></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "Đối chiếu kết quả",
      "startTime": 106.88,
      "endTime": 122.21,
      "duration": 15.33,
      "mascotMode": "cheer",
      "mascotTip": "Tuyệt vời! Nắm chắc bước biến đổi quan trọng này!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><b>Giải chi tiết:</b> $y' = \\frac{-2}{(x-1)^2} < 0 \\, \\forall x$. Ta có $y(2)=3, y(4)=\\frac{5}{3}$. Vậy $\\max = 3, \\min = \\frac{5}{3}$.</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: ĐỀ BÀI VÀ THỜI GIAN NHÁP",
      "subtitle": "Ví dụ điển hình 3 (Đồ thị / Bảng biến thiên)",
      "startTime": 122.21,
      "endTime": 145.74,
      "duration": 23.53,
      "mascotMode": "pointer",
      "mascotTip": "Quan sát kỹ bảng biến thiên hoặc đồ thị trực quan!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div style=\"font-size:20px; line-height:1.5; color:#f8fafc;\"><b>Ví dụ 3:</b> $y = x + \\sqrt{4-x^2}$ trên $[-2; 2]$.<br><i>(Thời gian nháp: 30s)</i></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "Đối chiếu kết quả",
      "startTime": 145.74,
      "endTime": 160.8,
      "duration": 15.06,
      "mascotMode": "cheer",
      "mascotTip": "Hoàn thành xuất sắc 3 ví dụ thực hành!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><b>Giải chi tiết:</b> $y' = 1 - \\frac{x}{\\sqrt{4-x^2}}=0 \\Rightarrow x=\\sqrt{2}$. Ta có $\\max y = 2\\sqrt{2}, \\min y = -2$.</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI CẦN TRÁNH",
      "subtitle": "PHẦN 4: CẢNH BÁO BẪY SAI LẦM",
      "startTime": 160.8,
      "endTime": 169.61,
      "duration": 8.81,
      "mascotMode": "magnifier",
      "mascotTip": "Ghi nhớ bẫy này để không bị mất điểm oan uổng!",
      "bodyHtml": "<div style=\"font-size:22px; color:#f43f5e; font-weight:bold; margin-bottom:8px;\">4. Bẫy đề thi</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\"><h3>4. Bẫy trắc nghiệm</h3><p>Quên loại nghiệm $x_i \\notin (a;b)$.</p></div>"
    },
    {
      "sceneIndex": 10,
      "title": "MẸO THẦY CÚ & CASIO BẤM MÁY",
      "subtitle": "PHẦN 5: BÍ QUYẾT TƯ DUY TỐC ĐỘ",
      "startTime": 169.61,
      "endTime": 182,
      "duration": 12.39,
      "mascotMode": "cheer",
      "mascotTip": "Áp dụng mẹo này để giải nhanh câu trắc nghiệm chỉ trong vài giây!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Mẹo Thầy Cú thông thái</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\"><h3>5. Mẹo Casio</h3><p>Dùng TABLE [Menu 8], Start=a, End=b, Step=(b-a)/29.</p></div>"
    }
  ]
},

    bai2_muc3: {
  "lessonId": "bai2",
  "lessonTitle": "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
  "sectionId": "bai2_muc3",
  "sectionTitle": "Mục 3: Tìm GTLN & GTNN trên khoảng, nửa khoảng",
  "audio": "/audio/bai2_muc3.mp3",
  "audioSrc": "./audio/bai2_muc3.mp3",
  "audio_src": "./audio/bai2_muc3.mp3",
  "totalDuration": 162,
  "duration": 162,
  "title": "Mục 3: Tìm Max/Min trên khoảng, nửa khoảng (Dùng BBT & Cực trị duy nhất)",
  "owl_tip": "Ghi nhớ: Trên khoảng bắt buộc phải vẽ BBT và tính lim ở các đầu mút vô cực!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 15.39,
      "id": "part2"
    },
    {
      "time": 27.64,
      "id": "part3"
    },
    {
      "time": 31.18,
      "id": "vd1_q"
    },
    {
      "time": 54.33,
      "id": "vd1_a"
    },
    {
      "time": 70.75,
      "id": "vd2_q"
    },
    {
      "time": 88.86,
      "id": "vd2_a"
    },
    {
      "time": 102.32,
      "id": "vd3_q"
    },
    {
      "time": 122.5,
      "id": "vd3_a"
    },
    {
      "time": 137.69,
      "id": "part4"
    },
    {
      "time": 149.68,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Khái niệm</h3><p>Trên khoảng/nửa khoảng, bắt buộc xét giới hạn và vẽ BBT.</p></div>\n      <div id=\"part2\"><h3>2. Định lý cực trị duy nhất</h3><p>Nếu hàm số có ĐÚNG 1 cực trị trên miền $D$, thì CĐ chính là Max, hoặc CT chính là Min.</p></div>\n      <div id=\"part3\"><h3>3. Các ví dụ điển hình</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Tìm GTNN của $y = x + \\frac{4}{x}$ trên $(0; +\\infty)$.<br><i>(Thời gian suy nghĩ: 25s)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải chi tiết:</b> $y' = 1 - \\frac{4}{x^2}=0 \\Leftrightarrow x=2$. BBT đi từ $+\\infty$ xuống $4$ rồi lên $+\\infty \\Rightarrow \\min = 4$, Không có Max.</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> $y = -x^2 + 2x + 3$ trên $\\mathbb{R}$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải chi tiết:</b> $y'=-2x+2=0 \\Rightarrow x=1$. Đồ thị đi lên $4$ rồi đi xuống $\\Rightarrow \\max = 4$, Không có Min.</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> $y = \\frac{x^2+1}{x}$ trên $(-\\infty; 0)$.<br><i>(Thời gian suy nghĩ: 25s)</i></div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải chi tiết:</b> $y'=1-\\frac{1}{x^2}=0 \\Rightarrow x=-1$. BBT đi lên $-2$ rồi đi xuống $\\Rightarrow \\max = -2$, Không có Min.</div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Giới hạn ra $\\infty$ kết luận luôn là Max/Min.</p></div>\n      <div id=\"part5\"><h3>5. Mẹo tư duy</h3><p>Dùng BĐT Cauchy (AM-GM) cho miền dương để nhẩm cực nhanh.</p></div>\n    ",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm cốt lõi",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Phương pháp giải nhanh",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ điển hình (3 Ví dụ)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Bẫy đề thi",
      "scenes": [
        9
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo tư duy & Casio",
      "scenes": [
        10
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 2: GIÁ TRỊ LỚN NHẤT VÀ GIÁ TRỊ NHỎ NHẤT CỦA HÀM SỐ",
      "subtitle": "PHẦN 1: KHÁI NIỆM CỐT LÕI",
      "startTime": 0.0,
      "endTime": 15.39,
      "duration": 15.39,
      "mascotMode": "pointer",
      "mascotTip": "Ghi nhớ: Trên khoảng bắt buộc phải vẽ BBT và tính lim ở các đầu mút vô cực!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Khái niệm cốt lõi</div><div style=\"font-size:22px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">\n      <h3>1. Khái niệm</h3><p>Trên khoảng/nửa khoảng, bắt buộc xét giới hạn và vẽ BBT.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "PHƯƠNG PHÁP GIẢI & QUY TRÌNH CHUẨN",
      "subtitle": "PHẦN 2: BẢN CHẤT VÀ NGUYÊN TẮC GIẢI TOÁN",
      "startTime": 15.39,
      "endTime": 31.18,
      "duration": 15.79,
      "mascotMode": "pointer",
      "mascotTip": "Nắm vững lý thuyết để không bị nhầm lẫn khi làm bài!",
      "bodyHtml": "<div style=\"font-size:22px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Phương pháp giải</div><div style=\"font-size:21px; line-height:1.7; color:#e2e8f0; margin-left:14px;\"><h3>2. Định lý cực trị duy nhất</h3><p>Nếu hàm số có ĐÚNG 1 cực trị trên miền $D$, thì CĐ chính là Max, hoặc CT chính là Min.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: ĐỀ BÀI VÀ THỜI GIAN NHÁP",
      "subtitle": "Ví dụ điển hình 1",
      "startTime": 31.18,
      "endTime": 54.33,
      "duration": 23.15,
      "mascotMode": "pointer",
      "mascotTip": "Lấy nháp ra tính toán thử sức trước khi xem lời giải nhé!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Tìm GTNN của $y = x + \\frac{4}{x}$ trên $(0; +\\infty)$.<br><i>(Thời gian suy nghĩ: 25s)</i></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "Đối chiếu kết quả",
      "startTime": 54.33,
      "endTime": 70.75,
      "duration": 16.42,
      "mascotMode": "cheer",
      "mascotTip": "Đối chiếu xem em tính đúng chưa nào!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><b>Giải chi tiết:</b> $y' = 1 - \\frac{4}{x^2}=0 \\Leftrightarrow x=2$. BBT đi từ $+\\infty$ xuống $4$ rồi lên $+\\infty \\Rightarrow \\min = 4$, Không có Max.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: ĐỀ BÀI VÀ THỜI GIAN NHÁP",
      "subtitle": "Ví dụ điển hình 2",
      "startTime": 70.75,
      "endTime": 88.86,
      "duration": 18.11,
      "mascotMode": "pointer",
      "mascotTip": "Chú ý các điều kiện giả thiết và tập xác định!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> $y = -x^2 + 2x + 3$ trên $\\mathbb{R}$.<br><i>(Thời gian suy nghĩ: 20s)</i></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "Đối chiếu kết quả",
      "startTime": 88.86,
      "endTime": 102.32,
      "duration": 13.46,
      "mascotMode": "cheer",
      "mascotTip": "Tuyệt vời! Nắm chắc bước biến đổi quan trọng này!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><b>Giải chi tiết:</b> $y'=-2x+2=0 \\Rightarrow x=1$. Đồ thị đi lên $4$ rồi đi xuống $\\Rightarrow \\max = 4$, Không có Min.</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: ĐỀ BÀI VÀ THỜI GIAN NHÁP",
      "subtitle": "Ví dụ điển hình 3 (Đồ thị / Bảng biến thiên)",
      "startTime": 102.32,
      "endTime": 122.5,
      "duration": 20.18,
      "mascotMode": "pointer",
      "mascotTip": "Quan sát kỹ bảng biến thiên hoặc đồ thị trực quan!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div style=\"font-size:20px; line-height:1.5; color:#f8fafc;\"><b>Ví dụ 3:</b> $y = \\frac{x^2+1}{x}$ trên $(-\\infty; 0)$.<br><i>(Thời gian suy nghĩ: 25s)</i></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "Đối chiếu kết quả",
      "startTime": 122.5,
      "endTime": 137.69,
      "duration": 15.19,
      "mascotMode": "cheer",
      "mascotTip": "Hoàn thành xuất sắc 3 ví dụ thực hành!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><b>Giải chi tiết:</b> $y'=1-\\frac{1}{x^2}=0 \\Rightarrow x=-1$. BBT đi lên $-2$ rồi đi xuống $\\Rightarrow \\max = -2$, Không có Min.</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI CẦN TRÁNH",
      "subtitle": "PHẦN 4: CẢNH BÁO BẪY SAI LẦM",
      "startTime": 137.69,
      "endTime": 149.68,
      "duration": 11.99,
      "mascotMode": "magnifier",
      "mascotTip": "Ghi nhớ bẫy này để không bị mất điểm oan uổng!",
      "bodyHtml": "<div style=\"font-size:22px; color:#f43f5e; font-weight:bold; margin-bottom:8px;\">4. Bẫy đề thi</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\"><h3>4. Bẫy đề thi</h3><p>Giới hạn ra $\\infty$ kết luận luôn là Max/Min.</p></div>"
    },
    {
      "sceneIndex": 10,
      "title": "MẸO THẦY CÚ & CASIO BẤM MÁY",
      "subtitle": "PHẦN 5: BÍ QUYẾT TƯ DUY TỐC ĐỘ",
      "startTime": 149.68,
      "endTime": 162,
      "duration": 12.32,
      "mascotMode": "cheer",
      "mascotTip": "Áp dụng mẹo này để giải nhanh câu trắc nghiệm chỉ trong vài giây!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Mẹo Thầy Cú thông thái</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\"><h3>5. Mẹo tư duy</h3><p>Dùng BĐT Cauchy (AM-GM) cho miền dương để nhẩm cực nhanh.</p></div>"
    }
  ]
},

    bai3_muc1: {
  "lessonId": "bai3",
  "lessonTitle": "Bài 3: Đường tiệm cận của đồ thị hàm số",
  "sectionId": "bai3_muc1",
  "sectionTitle": "Mục 1: Tiệm cận ngang (lim tại ±∞)",
  "audio": "/audio/bai3_muc1.mp3",
  "audioSrc": "./audio/bai3_muc1.mp3",
  "audio_src": "./audio/bai3_muc1.mp3",
  "totalDuration": 142,
  "duration": 142,
  "title": "Mục 1: Tiệm cận ngang (Định nghĩa & So sánh bậc đa thức)",
  "owl_tip": "Ghi nhớ: Tiệm cận ngang là đường nằm ngang y = y0 khi x dần tới +∞ hoặc -∞. Tối đa có 2 tiệm cận ngang!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 26.15,
      "id": "part2"
    },
    {
      "time": 48.12,
      "id": "part3"
    },
    {
      "time": 51.29,
      "id": "vd1_q"
    },
    {
      "time": 62.41,
      "id": "vd1_a"
    },
    {
      "time": 74.81,
      "id": "vd2_q"
    },
    {
      "time": 83.63,
      "id": "vd2_a"
    },
    {
      "time": 94.58,
      "id": "vd3_q"
    },
    {
      "time": 104.31,
      "id": "vd3_a"
    },
    {
      "time": 116.99,
      "id": "part4"
    },
    {
      "time": 129.93,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Khái niệm cốt lõi</h3><p>Đường thẳng $y = y_0$ là Tiệm cận ngang (TCN) nếu:<br>$\\lim_{x \\to +\\infty} f(x) = y_0$ hoặc $\\lim_{x \\to -\\infty} f(x) = y_0$</p></div>\n      <div id=\"part2\"><h3>2. Phương pháp giải nhanh</h3><p>So sánh bậc của tử và mẫu:<br>+ Bậc tử &lt; Bậc mẫu: TCN $y = 0$<br>+ Bậc tử = Bậc mẫu: TCN $y = \\frac{a}{b}$ (Tỉ số hệ số cao nhất)<br>+ Bậc tử &gt; Bậc mẫu: Không có TCN.</p></div>\n      <div id=\"part3\"><h3>3. Các ví dụ điển hình</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Tìm TCN của $y = \\frac{2x-1}{x+1}$.<br><i>(Suy nghĩ nhẩm nhanh...)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> Bậc tử (1) = Bậc mẫu (1). Tỉ số hệ số cao nhất $a/b = 2/1 = 2$.<br>$\\Rightarrow$ TCN: $y = 2$.</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Tìm TCN của $y = \\frac{x}{x^2+1}$.<br><i>(So sánh bậc đa thức...)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> Bậc tử (1) &lt; Bậc mẫu (2) $\\Rightarrow \\lim_{x \\to \\infty} y = 0$.<br>$\\Rightarrow$ TCN: $y = 0$ (trục hoành).</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Đọc TCN từ BBT sau:<br>\n          <table style=\"width:100%; max-width:380px; border-collapse:collapse; text-align:center; background:#ffffff !important; color:#111827 !important; border:2px solid #374151; margin:12px auto; font-size:15px; font-weight:600;\">\n            <tr style=\"border-bottom:1.5px solid #374151;\">\n              <td style=\"width:45px; border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$x$</td>\n              <td style=\"padding:6px; color:#111827 !important;\">$-\\infty$</td>\n              <td></td>\n              <td style=\"padding:6px; color:#111827 !important;\">$+\\infty$</td>\n            </tr>\n            <tr style=\"height:60px;\">\n              <td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y$</td>\n              <td style=\"vertical-align:bottom; padding:6px; color:#dc2626 !important; font-weight:bold; font-size:18px;\">$-1$</td>\n              <td style=\"vertical-align:middle; color:#2563eb !important; font-size:20px;\">$\\nearrow$</td>\n              <td style=\"vertical-align:top; padding:6px; color:#dc2626 !important; font-weight:bold; font-size:18px;\">$3$</td>\n            </tr>\n          </table>\n        </div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> $\\lim_{x \\to -\\infty} = -1$ và $\\lim_{x \\to +\\infty} = 3$.<br>$\\Rightarrow$ Hàm số có 2 TCN là $y = 3$ và $y = -1$.</div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Tính $\\lim$ ra vô cực ($\\infty$) nhưng lại vội kết luận là Tiệm cận ngang.</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Dùng Casio [CALC] tại $x = 10^9$ và $x = -10^9$ để test lim siêu tốc.</p></div>\n    ",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm cốt lõi",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Phương pháp giải nhanh",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ điển hình (3 Ví dụ)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Bẫy đề thi",
      "scenes": [
        9
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo Thầy Cú & Casio",
      "scenes": [
        10
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 3: ĐƯỜNG TIỆM CẬN CỦA ĐỒ THỊ HÀM SỐ",
      "subtitle": "MỤC 1 • ĐỊNH NGHĨA TIỆM CẬN NGANG (TCN)",
      "startTime": 0.0,
      "endTime": 26.15,
      "duration": 26.15,
      "mascotMode": "pointer",
      "mascotTip": "<b>Cú nhắc:</b> Tiệm cận ngang có dạng y = y0 khi x dần tới +∞ hoặc -∞. Tối đa có 2 TCN!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Khái niệm cốt lõi</div><div style=\"font-size:22px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">Đường thẳng $y = y_0$ được gọi là <b>đường tiệm cận ngang</b> (TCN) của đồ thị hàm số $y = f(x)$ nếu thỏa mãn ít nhất một trong các điều kiện:<br>$$\\lim_{x \\to +\\infty} f(x) = y_0 \\quad \\text{hoặc} \\quad \\lim_{x \\to -\\infty} f(x) = y_0$$</div><div style=\"font-size:20px; line-height:1.6; color:#38bdf8; margin-top:14px; margin-left:14px;\">• <b>Ghi nhớ:</b> $x$ phải tiến ra vô cực ($\\pm\\infty$) và kết quả $y_0$ phải là một <b>hằng số thực hữu hạn</b>.</div>"
    },
    {
      "sceneIndex": 2,
      "title": "PHƯƠNG PHÁP XÁC ĐỊNH TCN SIÊU NHANH",
      "subtitle": "So sánh bậc của Tử số và Mẫu số",
      "startTime": 26.15,
      "endTime": 51.29,
      "duration": 25.14,
      "mascotMode": "pointer",
      "mascotTip": "Bậc tử nhỏ hơn bậc mẫu thì y = 0 luôn là TCN!",
      "bodyHtml": "<div style=\"font-size:22px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Phương pháp giải nhanh (Phân thức đa thức)</div><div style=\"font-size:21px; line-height:1.7; color:#e2e8f0; margin-left:14px;\">• <b>Bậc tử &lt; Bậc mẫu:</b> Luôn có đúng 1 TCN là trục hoành: $y = 0$.<br>• <b>Bậc tử = Bậc mẫu:</b> Có đúng 1 TCN là tỉ số hai hệ số bậc cao nhất: $y = \\frac{a}{b}$.<br>• <b>Bậc tử &gt; Bậc mẫu:</b> Đồ thị <b>không có</b> tiệm cận ngang.</div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: TÌM TIỆM CẬN NGANG",
      "subtitle": "Hàm phân thức bậc nhất trên bậc nhất",
      "startTime": 51.29,
      "endTime": 62.41,
      "duration": 11.12,
      "mascotMode": "pointer",
      "mascotTip": "Bậc tử là 1, bậc mẫu là 1. Nhẩm nhanh tỉ số hệ số cao nhất!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Tìm tiệm cận ngang của hàm số $y = \\frac{2x - 1}{x + 1}$.<br><div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thử sức:</b> <i>(Các em có 15 giây để nhẩm bậc tử và bậc mẫu...)</i></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "Tỉ số hệ số bậc cao nhất: a / b = 2 / 1 = 2",
      "startTime": 62.41,
      "endTime": 74.81,
      "duration": 12.4,
      "mascotMode": "cheer",
      "mascotTip": "y = 2 là tiệm cận ngang!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:18px; color:#94a3b8; margin-bottom:6px;\"><b>Ví dụ 1:</b> Tìm TCN của $y = \\frac{2x-1}{x+1}$.</div><div id=\"vd1_a\" style=\"border-top:1px dashed #64748b; padding-top:10px; font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Bậc của tử: $1$; Bậc của mẫu: $1$ (Bậc tử bằng bậc mẫu).<br>• Hệ số cao nhất của tử là $2$, của mẫu là $1$.<br>• Tỉ số hệ số cao nhất: $\\lim_{x \\to \\pm\\infty} \\frac{2x-1}{x+1} = \\frac{2}{1} = 2$.<br><b style=\"color:#10b981;\">Kết luận:</b> Đồ thị hàm số có đúng 1 tiệm cận ngang là đường thẳng <b>$y = 2$</b>.</p></div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: BẬC TỬ NHỎ HƠN BẬC MẪU",
      "subtitle": "y = x / (x^2 + 1)",
      "startTime": 74.81,
      "endTime": 83.63,
      "duration": 8.82,
      "mascotMode": "pointer",
      "mascotTip": "Bậc tử là 1, bậc mẫu là 2. Chú ý so sánh bậc nhé!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Tìm tiệm cận ngang của hàm số $y = \\frac{x}{x^2 + 1}$.<br><div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thử sức:</b> <i>(So sánh bậc tử và bậc mẫu...)</i></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "Bậc tử < Bậc mẫu: TCN y = 0",
      "startTime": 83.63,
      "endTime": 94.58,
      "duration": 10.95,
      "mascotMode": "cheer",
      "mascotTip": "Trục hoành y = 0 chính là đường tiệm cận ngang!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:18px; color:#94a3b8; margin-bottom:6px;\"><b>Ví dụ 2:</b> Tìm TCN của $y = \\frac{x}{x^2+1}$.</div><div id=\"vd2_a\" style=\"border-top:1px dashed #64748b; padding-top:10px; font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Bậc tử bằng $1$, bậc mẫu bằng $2$ (Bậc tử &lt; Bậc mẫu).<br>• Giới hạn ở vô cực: $\\lim_{x \\to \\pm\\infty} \\frac{x}{x^2+1} = \\lim_{x \\to \\pm\\infty} \\frac{1/x}{1 + 1/x^2} = 0$.<br><b style=\"color:#10b981;\">Kết luận:</b> Đồ thị có đúng 1 tiệm cận ngang là đường thẳng <b>$y = 0$</b> (trục hoành $Ox$).</p></div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: ĐỌC TCN TỪ BẢNG BIẾN THIÊN",
      "subtitle": "Quan sát hai đầu mút âm vô cực và dương vô cực",
      "startTime": 94.58,
      "endTime": 104.31,
      "duration": 9.73,
      "mascotMode": "pointer",
      "mascotTip": "Gióng từ x ra -∞ và +∞ xem y tiến về giá trị nào!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:20px; line-height:1.5; color:#f8fafc;\"><b>Ví dụ 3:</b> Đọc tiệm cận ngang từ Bảng biến thiên sau:<table style=\"width:100%; max-width:380px; border-collapse: collapse; text-align:center; background:white; color:#000; border:1.5px solid black; margin:12px auto; border-radius:4px;\"><tr style=\"border-bottom:1px solid black;\"><td style=\"border-right:1px solid black; padding:6px; font-weight:bold;\">$x$</td><td style=\"padding:6px;\">$-\\infty$</td> <td></td> <td style=\"padding:6px;\">$+\\infty$</td></tr><tr><td style=\"border-right:1px solid black; padding:6px; font-weight:bold;\">$y$</td><td style=\"vertical-align:middle; padding:6px; color:#ef4444; font-weight:bold; font-size:18px;\">$-1$</td><td>$\\nearrow$</td><td style=\"vertical-align:middle; padding:6px; color:#ef4444; font-weight:bold; font-size:18px;\">$3$</td></tr></table></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "Hai tiệm cận ngang: y = 3 và y = -1",
      "startTime": 104.31,
      "endTime": 116.99,
      "duration": 12.68,
      "mascotMode": "cheer",
      "mascotTip": "Đồ thị có 2 TCN khác nhau ở hai phía âm và dương vô cực!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:18px; color:#94a3b8; margin-bottom:6px;\"><b>Ví dụ 3:</b> Đọc TCN từ BBT.</div><div id=\"vd3_a\" style=\"border-top:1px dashed #64748b; padding-top:10px; font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Khi $x \\to -\\infty$, giá trị $y \\to -1 \\implies \\lim_{x \\to -\\infty} y = -1 \\implies y = -1$ là TCN.<br>• Khi $x \\to +\\infty$, giá trị $y \\to 3 \\implies \\lim_{x \\to +\\infty} y = 3 \\implies y = 3$ là TCN.<br><b style=\"color:#10b981;\">Kết luận:</b> Đồ thị hàm số có <b>2 đường tiệm cận ngang</b> là <b>$y = 3$</b> và <b>$y = -1$</b>.</p></div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI VỀ TIỆM CẬN NGANG",
      "subtitle": "PHẦN 4: VÔ CỰC KHÔNG PHẢI LÀ TIỆM CẬN NGANG",
      "startTime": 116.99,
      "endTime": 129.93,
      "duration": 12.94,
      "mascotMode": "magnifier",
      "mascotTip": "Kết quả giới hạn phải là một số thực cụ thể, không được là vô cực!",
      "bodyHtml": "<div style=\"font-size:22px; color:#f43f5e; font-weight:bold; margin-bottom:8px;\">4. Bẫy đề thi thường gặp</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\">• <b>Bẫy 1:</b> Nhiều bạn tính giới hạn khi $x \\to +\\infty$ ra kết quả là $+\\infty$ rồi vội kết luận $y = +\\infty$ là tiệm cận ngang. Đây là sai lầm nghiêm trọng vì $+\\infty$ không phải là số thực!<br>• <b>Bẫy 2:</b> Quên kiểm tra tập xác định của hàm số xem có chứa vô cực hay không (ví dụ hàm $y = \\sqrt{1-x^2}$ chỉ xác định trên $[-1; 1]$, không thể tiến ra $\\pm\\infty$ nên không có TCN).</div>"
    },
    {
      "sceneIndex": 10,
      "title": "MẸO CASIO CALC SIÊU TỐC",
      "subtitle": "PHẦN 5: BẤM MÁY TÍNH TÌM TCN TRONG 3 GIÂY",
      "startTime": 129.93,
      "endTime": 142,
      "duration": 12.07,
      "mascotMode": "cheer",
      "mascotTip": "CALC x = 10^9 để tìm TCN bên phải, CALC x = -10^9 để tìm TCN bên trái!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Mẹo Thầy Cú & Casio bấm máy</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\">• <b>Bước 1:</b> Nhập biểu thức hàm số $f(x)$ vào máy tính Casio.<br>• <b>Bước 2:</b> Bấm phím [CALC], nhập $x = 10^9$ (đại diện cho $+\\infty$). Nếu màn hình ra số xấp xỉ một số thực $y_0$, thì $y = y_0$ là TCN.<br>• <b>Bước 3:</b> Bấm [CALC], nhập $x = -10^9$ (đại diện cho $-\\infty$) để kiểm tra tiệm cận ngang thứ 2!</div>"
    }
  ]
},

    bai3_muc2: {
  "lessonId": "bai3",
  "lessonTitle": "Bài 3: Đường tiệm cận của đồ thị hàm số",
  "sectionId": "bai3_muc2",
  "sectionTitle": "Mục 2: Tiệm cận đứng (lim một bên vô cực)",
  "audio": "/audio/bai3_muc2.mp3",
  "audioSrc": "./audio/bai3_muc2.mp3",
  "audio_src": "./audio/bai3_muc2.mp3",
  "totalDuration": 131,
  "duration": 131,
  "title": "Mục 2: Tiệm cận đứng (Quy trình 2 bước & Soi bẫy nghiệm triệt tiêu)",
  "owl_tip": "Ghi nhớ: Tiệm cận đứng có dạng x = x0 (đường thẳng đứng). Mẫu bằng 0 nhưng tử phải khác 0 thì mới là TCĐ!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 18.56,
      "id": "part2"
    },
    {
      "time": 39.73,
      "id": "part3"
    },
    {
      "time": 42.9,
      "id": "vd1_q"
    },
    {
      "time": 52.55,
      "id": "vd1_a"
    },
    {
      "time": 63.48,
      "id": "vd2_q"
    },
    {
      "time": 74.3,
      "id": "vd2_a"
    },
    {
      "time": 90.33,
      "id": "vd3_q"
    },
    {
      "time": 98.88,
      "id": "vd3_a"
    },
    {
      "time": 109.26,
      "id": "part4"
    },
    {
      "time": 118.77,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Khái niệm cốt lõi</h3><p>Đường thẳng $x = x_0$ là Tiệm cận đứng (TCĐ) nếu:<br>$\\lim_{x \\to x_0^+} f(x) = \\pm\\infty$ hoặc $\\lim_{x \\to x_0^-} f(x) = \\pm\\infty$</p></div>\n      <div id=\"part2\"><h3>2. Phương pháp giải thực chiến</h3><p>B1: Tìm nghiệm của MẪU SỐ.<br>B2: Thay nghiệm đó lên TỬ SỐ.<br>+ Nếu Tử $\\neq 0 \\Rightarrow$ Chắc chắn là TCĐ.<br>+ Nếu Tử $= 0 \\Rightarrow$ Phải rút gọn nhân tử để kiểm tra.</p></div>\n      <div id=\"part3\"><h3>3. Các ví dụ thực hành</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Tìm TCĐ của $y = \\frac{2x-1}{x-3}$.</div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> Mẫu có nghiệm $x=3$. Thay lên tử được $2(3)-1 = 5 \\neq 0$.<br>$\\Rightarrow$ TCĐ: $x = 3$.</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Tìm TCĐ của $y = \\frac{x^2-1}{x-1}$.</div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> Mẫu có nghiệm $x=1$. Thay lên tử cũng bằng $0$.<br>Rút gọn: $y = \\frac{(x-1)(x+1)}{x-1} = x+1$<br>$\\Rightarrow$ Đã bị triệt tiêu, KHÔNG CÓ TCĐ.</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Đọc TCĐ từ BBT sau:<br>\n          <table style=\"width:100%; max-width:380px; border-collapse:collapse; text-align:center; background:#ffffff !important; color:#111827 !important; border:2px solid #374151; margin:12px auto; font-size:15px; font-weight:600;\">\n            <tr style=\"border-bottom:1.5px solid #374151;\">\n              <td style=\"width:45px; border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$x$</td>\n              <td style=\"padding:6px; color:#111827 !important;\">$0$</td>\n              <td></td>\n              <td style=\"padding:6px; color:#2563eb !important; font-weight:bold; font-size:16px;\">$2$</td>\n              <td></td>\n              <td style=\"padding:6px; color:#111827 !important;\">$+\\infty$</td>\n            </tr>\n            <tr style=\"height:60px;\">\n              <td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y$</td>\n              <td style=\"vertical-align:bottom; padding:6px; color:#111827 !important;\">$0$</td>\n              <td style=\"vertical-align:middle; color:#2563eb !important; font-size:20px;\">$\\nearrow$</td>\n              <td style=\"vertical-align:middle; padding:6px; border-left:2px double #374151; border-right:2px double #374151; color:#dc2626 !important; font-weight:bold; font-size:16px;\">$+\\infty \\quad \\quad -\\infty$</td>\n              <td style=\"vertical-align:middle; color:#2563eb !important; font-size:20px;\">$\\nearrow$</td>\n              <td style=\"vertical-align:bottom; padding:6px; color:#111827 !important;\">$0$</td>\n            </tr>\n          </table>\n        </div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> Tại $x=2$ có hai sọc ($||$), và giới hạn tiến ra vô cực.<br>$\\Rightarrow$ TCĐ: $x = 2$.</div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy trắc nghiệm</h3><p>Chỉ giải nghiệm mẫu mà không thử lại lên tử số.</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Casio</h3><p>Bấm [CALC] tại $x = x_0 + 0.0001$. Nếu kết quả ra số siêu lớn, đó là TCĐ.</p></div>\n    ",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm cốt lõi",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Phương pháp giải thực chiến",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ thực hành (3 Ví dụ)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Bẫy trắc nghiệm",
      "scenes": [
        9
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo Casio bấm máy",
      "scenes": [
        10
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 3: ĐƯỜNG TIỆM CẬN CỦA ĐỒ THỊ HÀM SỐ",
      "subtitle": "MỤC 2 • ĐỊNH NGHĨA TIỆM CẬN ĐỨNG (TCĐ)",
      "startTime": 0.0,
      "endTime": 18.56,
      "duration": 18.56,
      "mascotMode": "pointer",
      "mascotTip": "Tiệm cận đứng có dạng x = x0 (đường thẳng đứng), tuyệt đối không nhầm sang y = y0!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Khái niệm cốt lõi</div><div style=\"font-size:22px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">Đường thẳng $x = x_0$ được gọi là <b>đường tiệm cận đứng</b> (TCĐ) của đồ thị hàm số $y = f(x)$ nếu thỏa mãn ít nhất một trong bốn điều kiện sau:<br>$$\\lim_{x \\to x_0^+} f(x) = +\\infty, \\quad \\lim_{x \\to x_0^+} f(x) = -\\infty, \\quad \\lim_{x \\to x_0^-} f(x) = +\\infty, \\quad \\lim_{x \\to x_0^-} f(x) = -\\infty$$</div><div style=\"font-size:20px; line-height:1.6; color:#38bdf8; margin-top:14px; margin-left:14px;\">• <b>Ý nghĩa:</b> Khi $x$ tiến dần sát về giá trị $x_0$, tung độ $y$ bùng nổ vọt lên cao vô tận ($+\\infty$) hoặc tụt xuống sâu vô tận ($-\\infty$).</div>"
    },
    {
      "sceneIndex": 2,
      "title": "QUY TRÌNH 2 BƯỚC TÌM TCĐ THỰC CHIẾN",
      "subtitle": "Tìm nghiệm của Mẫu và thử lại lên Tử",
      "startTime": 18.56,
      "endTime": 42.9,
      "duration": 24.34,
      "mascotMode": "pointer",
      "mascotTip": "Mẫu bằng 0 nhưng Tử phải khác 0 thì mới chắc chắn là TCĐ!",
      "bodyHtml": "<div style=\"font-size:22px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Phương pháp giải thực chiến</div><div style=\"font-size:21px; line-height:1.7; color:#e2e8f0; margin-left:14px;\">• <b>Bước 1:</b> Giải phương trình cho <b>MẪU SỐ BẰNG 0</b> để tìm các điểm nghi vấn $x = x_0$.<br>• <b>Bước 2:</b> Thay $x_0$ lên <b>TỬ SỐ</b>:<br>&nbsp;&nbsp;+ Nếu <b>Tử $\\neq 0$</b>: Kết luận ngay $x = x_0$ là tiệm cận đứng.<br>&nbsp;&nbsp;+ Nếu <b>Tử $= 0$</b>: Phải phân tích đa thức thành nhân tử để triệt tiêu thừa số $(x - x_0)$ rồi xét lại bậc của nghiệm.</div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: TÌM TIỆM CẬN ĐỨNG",
      "subtitle": "Hàm phân thức y = (2x - 1) / (x - 3)",
      "startTime": 42.9,
      "endTime": 52.55,
      "duration": 9.65,
      "mascotMode": "pointer",
      "mascotTip": "Nhẩm nhanh nghiệm của mẫu: x - 3 = 0 => x = 3!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Tìm tiệm cận đứng của đồ thị hàm số $y = \\frac{2x - 1}{x - 3}$.<br><div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thử sức:</b> <i>(Các em hãy nhẩm nhanh nghiệm của mẫu...)</i></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "Nghiệm mẫu x = 3 làm tử khác 0 => x = 3 là TCĐ",
      "startTime": 52.55,
      "endTime": 63.48,
      "duration": 10.93,
      "mascotMode": "cheer",
      "mascotTip": "Thay x = 3 vào tử được 5 khác 0. TCĐ: x = 3!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:18px; color:#94a3b8; margin-bottom:6px;\"><b>Ví dụ 1:</b> Tìm TCĐ của $y = \\frac{2x-1}{x-3}$.</div><div id=\"vd1_a\" style=\"border-top:1px dashed #64748b; padding-top:10px; font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Mẫu số có nghiệm: $x - 3 = 0 \\iff x = 3$.<br>• Thay $x = 3$ lên tử số: $2(3) - 1 = 5 \\neq 0$.<br>• Do đó: $\\lim_{x \\to 3^+} \\frac{2x-1}{x-3} = +\\infty$ và $\\lim_{x \\to 3^-} \\frac{2x-1}{x-3} = -\\infty$.<br><b style=\"color:#10b981;\">Kết luận:</b> Đồ thị hàm số có đúng 1 tiệm cận đứng là đường thẳng <b>$x = 3$</b>.</p></div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: BẪY NGHIỆM CỦA TỬ VÀ MẪU",
      "subtitle": "y = (x^2 - 1) / (x - 1)",
      "startTime": 63.48,
      "endTime": 74.3,
      "duration": 10.82,
      "mascotMode": "pointer",
      "mascotTip": "Chú ý nghiệm của mẫu có làm tử bằng 0 không nhé!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Tìm tiệm cận đứng của hàm số $y = \\frac{x^2 - 1}{x - 1}$.<br><div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thử sức:</b> <i>(Chú ý nghiệm của mẫu có làm tử bằng 0 không nhé...)</i></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "Nhân tử (x - 1) bị triệt tiêu => KHÔNG CÓ TCĐ",
      "startTime": 74.3,
      "endTime": 90.33,
      "duration": 16.03,
      "mascotMode": "cheer",
      "mascotTip": "Hàm số rút gọn thành y = x + 1, đường x = 1 đã bị triệt tiêu!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:18px; color:#94a3b8; margin-bottom:6px;\"><b>Ví dụ 2:</b> Tìm TCĐ của $y = \\frac{x^2-1}{x-1}$.</div><div id=\"vd2_a\" style=\"border-top:1px dashed #64748b; padding-top:10px; font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Mẫu có nghiệm: $x = 1$. Thay lên tử: $1^2 - 1 = 0$.<br>• Phân tích rút gọn: $y = \\frac{(x-1)(x+1)}{x-1} = x + 1$ (với $x \\neq 1$).<br>• Giới hạn khi $x \\to 1$: $\\lim_{x \\to 1} y = 1 + 1 = 2$ (là số hữu hạn, không ra vô cực).<br><b style=\"color:#ef4444;\">Kết luận:</b> Đồ thị hàm số <b>KHÔNG CÓ TIỆM CẬN ĐỨNG</b>.</p></div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: ĐỌC TCĐ TỪ BẢNG BIẾN THIÊN",
      "subtitle": "Quan sát vị trí có hai dấu gạch sọc không xác định",
      "startTime": 90.33,
      "endTime": 98.88,
      "duration": 8.55,
      "mascotMode": "pointer",
      "mascotTip": "Tìm cột x có dấu vạch kép || và y tiến ra vô cực!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:20px; line-height:1.5; color:#f8fafc;\"><b>Ví dụ 3:</b> Đọc tiệm cận đứng từ Bảng biến thiên sau:<table style=\"width:100%; max-width:380px; border-collapse: collapse; text-align:center; background:white; color:#000; border:1.5px solid black; margin:12px auto; border-radius:4px;\"><tr style=\"border-bottom:1px solid black;\"><td style=\"border-right:1px solid black; padding:6px; font-weight:bold;\">$x$</td><td style=\"padding:6px;\">$0$</td> <td></td> <td style=\"padding:6px; color:#2563eb; font-weight:bold; font-size:18px;\">$2$</td> <td></td> <td style=\"padding:6px;\">$+\\infty$</td></tr><tr><td style=\"border-right:1px solid black; padding:6px; font-weight:bold;\">$y$</td><td style=\"vertical-align:bottom; padding:6px;\">$0$</td> <td>$\\nearrow$</td><td style=\"padding:6px; border-left:2px double black; border-right:2px double black; color:#ef4444; font-weight:bold; font-size:18px;\">$+\\infty \\quad -\\infty$</td><td>$\\nearrow$</td> <td style=\"vertical-align:bottom; padding:6px;\">$0$</td></tr></table></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "Vạch kép tại x = 2 với lim ra vô cực => TCĐ: x = 2",
      "startTime": 98.88,
      "endTime": 109.26,
      "duration": 10.38,
      "mascotMode": "cheer",
      "mascotTip": "Chỉ cần một phía tiến ra vô cực là đủ điều kiện kết luận TCĐ!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:18px; color:#94a3b8; margin-bottom:6px;\"><b>Ví dụ 3:</b> Đọc TCĐ từ BBT.</div><div id=\"vd3_a\" style=\"border-top:1px dashed #64748b; padding-top:10px; font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Tại điểm $x = 2$, hàm số không xác định (ký hiệu vạch kép $||$).<br>• Giới hạn bên trái: $\\lim_{x \\to 2^-} y = +\\infty$.<br>• Giới hạn bên phải: $\\lim_{x \\to 2^+} y = -\\infty$.<br><b style=\"color:#10b981;\">Kết luận:</b> Đường thẳng <b>$x = 2$</b> chính là <b>tiệm cận đứng</b> của đồ thị hàm số.</p></div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY TRẮC NGHIỆM TIỆM CẬN ĐỨNG",
      "subtitle": "PHẦN 4: THÓI QUEN XẤU CHỈ CHO MẪU BẰNG 0",
      "startTime": 109.26,
      "endTime": 118.77,
      "duration": 9.51,
      "mascotMode": "magnifier",
      "mascotTip": "Bắt buộc phải thử lại nghiệm của mẫu lên tử số hoặc kiểm tra bậc nghiệm!",
      "bodyHtml": "<div style=\"font-size:22px; color:#f43f5e; font-weight:bold; margin-bottom:8px;\">4. Bẫy trắc nghiệm cần tránh</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\">• <b>Bẫy thường gặp:</b> Học sinh thường có thói quen bấm máy giải nghiệm mẫu rồi đếm số nghiệm và kết luận số tiệm cận đứng.<br>• <b>Cảnh báo:</b> Nếu nghiệm của mẫu trùng với nghiệm của tử, nghiệm đó có thể bị triệt tiêu hoàn toàn (nếu bậc nghiệm tử $\\ge$ bậc nghiệm mẫu). Hãy luôn phân tích thành nhân tử hoặc thử lại lên tử số!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "MẸO CASIO CALC BẮT TCĐ",
      "subtitle": "PHẦN 5: BẤM MÁY TÍNH KIỂM TRA MỘT BÊN",
      "startTime": 118.77,
      "endTime": 131,
      "duration": 12.23,
      "mascotMode": "cheer",
      "mascotTip": "CALC tại x0 + 0.0001, nếu kết quả ra số siêu to (mũ dương) thì đó là TCĐ!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Mẹo Casio kiểm tra nhanh</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\">• <b>Bước 1:</b> Nhập biểu thức $f(x)$ vào máy tính.<br>• <b>Bước 2:</b> Bấm [CALC] tại $x = x_0 + 0.0001$ (để tính $\\lim_{x \\to x_0^+}$).<br>• <b>Bước 3:</b> Quan sát màn hình hiển thị: Nếu ra một số rất lớn (như $10^6, 10^7...$) thì đó là $+\\infty$; nếu ra âm rất lớn thì là $-\\infty \\implies x = x_0$ chắc chắn là TCĐ!</div>"
    }
  ]
},

    bai3_muc3: {
  "lessonId": "bai3",
  "lessonTitle": "Bài 3: Đường tiệm cận của đồ thị hàm số",
  "sectionId": "bai3_muc3",
  "sectionTitle": "Mục 3: Tiệm cận xiên (Bậc tử = Bậc mẫu + 1)",
  "audio": "/audio/bai3_muc3.mp3",
  "audioSrc": "./audio/bai3_muc3.mp3",
  "audio_src": "./audio/bai3_muc3.mp3",
  "totalDuration": 127,
  "duration": 127,
  "title": "Mục 3: Tiệm cận xiên (Phép chia đa thức & Nhận diện trên đồ thị)",
  "owl_tip": "Ghi nhớ: Tiệm cận xiên có dạng y = ax + b (với a ≠ 0). Chỉ xuất hiện khi Bậc tử lớn hơn Bậc mẫu đúng 1 bậc!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 18.88,
      "id": "part2"
    },
    {
      "time": 34.77,
      "id": "part3"
    },
    {
      "time": 37.94,
      "id": "vd1_q"
    },
    {
      "time": 48.34,
      "id": "vd1_a"
    },
    {
      "time": 63.04,
      "id": "vd2_q"
    },
    {
      "time": 73.48,
      "id": "vd2_a"
    },
    {
      "time": 86.41,
      "id": "vd3_q"
    },
    {
      "time": 96.66,
      "id": "vd3_a"
    },
    {
      "time": 106.45,
      "id": "part4"
    },
    {
      "time": 114.98,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Khái niệm cốt lõi</h3><p>Đường thẳng $y = ax + b \\, (a \\neq 0)$ là Tiệm cận xiên (TCX) nếu:<br>$\\lim_{x \\to \\pm\\infty} [f(x) - (ax+b)] = 0$</p></div>\n      <div id=\"part2\"><h3>2. Phương pháp giải nhanh</h3><p>Dấu hiệu: Bậc tử = Bậc mẫu + 1.<br>Cách tìm: Lấy Tử chia cho Mẫu đa thức.<br>$y = (ax+b) + \\frac{r(x)}{mẫu} \\Rightarrow$ Thương $y = ax + b$ chính là TCX.</p></div>\n      <div id=\"part3\"><h3>3. Các ví dụ điển hình</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Tìm TCX của $y = \\frac{x^2+2x+2}{x+1}$.</div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> Thực hiện chia đa thức:<br>$y = x + 1 + \\frac{1}{x+1}$<br>$\\Rightarrow$ Thương số là $x+1$, vậy TCX: $y = x + 1$.</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Tìm TCX của $y = \\frac{-2x^2+x}{x-2}$.</div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> Lấy tử chia mẫu:<br>$y = -2x - 3 - \\frac{6}{x-2}$<br>$\\Rightarrow$ Tiệm cận xiên: $y = -2x - 3$.</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Nhận diện TCX trên đồ thị:<br>\n          <svg viewBox=\"-3 -3 6 6\" style=\"width:100%; max-width:200px; background:white; border:1px solid #ccc; display:block; margin:auto;\">\n            <line x1=\"-3\" y1=\"0\" x2=\"3\" y2=\"0\" stroke=\"black\"/> <!-- Ox -->\n            <line x1=\"0\" y1=\"-3\" x2=\"0\" y2=\"3\" stroke=\"black\"/> <!-- Oy -->\n            <line x1=\"-3\" y1=\"3\" x2=\"3\" y2=\"-3\" stroke=\"red\" stroke-dasharray=\"0.3\" stroke-width=\"0.15\"/> <!-- y = x trong SVG -->\n            <!-- Đồ thị hyperbol -->\n            <path d=\"M 0.5 -3 Q 1 -1 3 -2.5\" stroke=\"blue\" fill=\"none\" stroke-width=\"0.15\"/>\n            <path d=\"M -0.5 3 Q -1 1 -3 2.5\" stroke=\"blue\" fill=\"none\" stroke-width=\"0.15\"/>\n          </svg>\n        </div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> Đồ thị tiến sát về đường thẳng chéo đi qua gốc tọa độ nghiêng.<br>$\\Rightarrow$ TCX là đường phân giác: $y = x$.</div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Tính sai hệ số $a$ và $b$ bằng giới hạn lim, hoặc chia đa thức sai dấu.</p></div>\n      <div id=\"part5\"><h3>5. Mẹo tư duy</h3><p>Dùng công thức đạo hàm L'Hôpital để tìm lim hệ số nhanh khi gặp bài chứa tham số.</p></div>\n    ",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm cốt lõi",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Phương pháp giải nhanh",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ điển hình (3 Ví dụ)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Bẫy đề thi",
      "scenes": [
        9
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo tư duy & L'Hôpital",
      "scenes": [
        10
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 3: ĐƯỜNG TIỆM CẬN CỦA ĐỒ THỊ HÀM SỐ",
      "subtitle": "MỤC 3 • ĐỊNH NGHĨA TIỆM CẬN XIÊN (TCX)",
      "startTime": 0.0,
      "endTime": 18.88,
      "duration": 18.88,
      "mascotMode": "pointer",
      "mascotTip": "Tiệm cận xiên có dạng y = ax + b (với a khác 0), đường chéo nghiêng góc!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Khái niệm cốt lõi</div><div style=\"font-size:22px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">Đường thẳng $y = ax + b$ (với $a \\neq 0$) được gọi là <b>đường tiệm cận xiên</b> (TCX) của đồ thị hàm số $y = f(x)$ nếu:<br>$$\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0 \\quad \\text{hoặc} \\quad \\lim_{x \\to -\\infty} [f(x) - (ax + b)] = 0$$</div><div style=\"font-size:20px; line-height:1.6; color:#38bdf8; margin-top:14px; margin-left:14px;\">• <b>Ý nghĩa hình học:</b> Khi $x \\to \\pm\\infty$, đồ thị hàm số ngày càng tiến sát lại gần đường thẳng xiên $y = ax + b$.</div>"
    },
    {
      "sceneIndex": 2,
      "title": "PHƯƠNG PHÁP TÌM TCX BẰNG PHÉP CHIA ĐA THỨC",
      "subtitle": "Bậc tử lớn hơn bậc mẫu đúng 1 bậc: y = Thương + Dư / Mẫu",
      "startTime": 18.88,
      "endTime": 37.94,
      "duration": 19.06,
      "mascotMode": "pointer",
      "mascotTip": "Lấy tử chia cho mẫu, phần thương y = ax + b chính là TCX!",
      "bodyHtml": "<div style=\"font-size:22px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Phương pháp giải nhanh (Phép chia đa thức)</div><div style=\"font-size:21px; line-height:1.7; color:#e2e8f0; margin-left:14px;\">• <b>Dấu hiệu nhận biết:</b> Đồ thị có tiệm cận xiên khi bậc của tử số lớn hơn bậc của mẫu số <b>đúng 1 bậc</b> (ví dụ bậc 2 trên bậc 1).<br>• <b>Quy trình thực hiện:</b> Thực hiện phép chia đa thức tử cho mẫu:<br>$$y = f(x) = (ax + b) + \\frac{r}{mẫu}$$<br>Khi $x \\to \\pm\\infty$, phần dư $\\frac{r}{mẫu} \\to 0$, do đó phần thương <b>$y = ax + b$</b> chính là tiệm cận xiên.</div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: TÌM TIỆM CẬN XIÊN",
      "subtitle": "y = (x^2 + 2x + 2) / (x + 1)",
      "startTime": 37.94,
      "endTime": 48.34,
      "duration": 10.4,
      "mascotMode": "pointer",
      "mascotTip": "Chia tử cho mẫu: x^2 + 2x + 2 chia cho x + 1!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Tìm tiệm cận xiên của hàm số $y = \\frac{x^2 + 2x + 2}{x + 1}$.<br><div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thử sức:</b> <i>(Các em dùng phép chia đa thức nhé...)</i></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "Thương là x + 1, dư 1 => TCX: y = x + 1",
      "startTime": 48.34,
      "endTime": 63.04,
      "duration": 14.7,
      "mascotMode": "cheer",
      "mascotTip": "Tiệm cận xiên là y = x + 1!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:18px; color:#94a3b8; margin-bottom:6px;\"><b>Ví dụ 1:</b> Tìm TCX của $y = \\frac{x^2+2x+2}{x+1}$.</div><div id=\"vd1_a\" style=\"border-top:1px dashed #64748b; padding-top:10px; font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Thực hiện phép chia đa thức: $(x^2 + 2x + 2) : (x + 1)$ được thương $(x + 1)$ dư $1$.<br>• Ta viết lại: $y = x + 1 + \\frac{1}{x + 1}$.<br>• Vì $\\lim_{x \\to \\pm\\infty} \\frac{1}{x+1} = 0$ nên $\\lim_{x \\to \\pm\\infty} [y - (x+1)] = 0$.<br><b style=\"color:#10b981;\">Kết luận:</b> Đồ thị hàm số có tiệm cận xiên là đường thẳng <b>$y = x + 1$</b>.</p></div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: HỆ SỐ BẬC CAO ÂM",
      "subtitle": "y = (-2x^2 + x) / (x - 2)",
      "startTime": 63.04,
      "endTime": 73.48,
      "duration": 10.44,
      "mascotMode": "pointer",
      "mascotTip": "Các em có 15 giây nháp phép chia tử cho mẫu!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Tìm tiệm cận xiên của hàm số $y = \\frac{-2x^2 + x}{x - 2}$.<br><div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thử sức:</b> <i>(Các em có 15 giây nháp phép chia...)</i></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "Thương là -2x - 3, dư -6 => TCX: y = -2x - 3",
      "startTime": 73.48,
      "endTime": 86.41,
      "duration": 12.93,
      "mascotMode": "cheer",
      "mascotTip": "Cẩn thận dấu trừ khi chia đa thức!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:18px; color:#94a3b8; margin-bottom:6px;\"><b>Ví dụ 2:</b> Tìm TCX của $y = \\frac{-2x^2+x}{x-2}$.</div><div id=\"vd2_a\" style=\"border-top:1px dashed #64748b; padding-top:10px; font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Chia tử cho mẫu: $(-2x^2 + x) : (x - 2)$ được thương là $(-2x - 3)$, dư $-6$.<br>• Biến đổi: $y = -2x - 3 - \\frac{6}{x - 2}$.<br>• Vì $\\lim_{x \\to \\pm\\infty} \\frac{-6}{x-2} = 0$, ta có $\\lim_{x \\to \\pm\\infty} [y - (-2x - 3)] = 0$.<br><b style=\"color:#10b981;\">Kết luận:</b> Tiệm cận xiên của đồ thị là đường thẳng <b>$y = -2x - 3$</b>.</p></div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: NHẬN DIỆN TCX TRÊN ĐỒ THỊ",
      "subtitle": "Tìm đường thẳng mà đồ thị tiến sát vào khi x ra vô cực",
      "startTime": 86.41,
      "endTime": 96.66,
      "duration": 10.25,
      "mascotMode": "pointer",
      "mascotTip": "Đường tiệm cận xiên đi qua gốc tọa độ O và điểm (1; 1)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:20px; line-height:1.5; color:#f8fafc;\"><b>Ví dụ 3:</b> Nhận diện tiệm cận xiên trên đồ thị sau:<br><svg viewBox=\"-3.5 -3.5 7 7\" style=\"width:100%; max-width:260px; background:white; border:1px solid #ccc; display:block; margin:12px auto; border-radius:8px;\"><line x1=\"-3.2\" y1=\"0\" x2=\"3.2\" y2=\"0\" stroke=\"#333\" stroke-width=\"0.08\"/><line x1=\"0\" y1=\"-3.2\" x2=\"0\" y2=\"3.2\" stroke=\"#333\" stroke-width=\"0.08\"/><line x1=\"-3\" y1=\"3\" x2=\"3\" y2=\"-3\" stroke=\"#ef4444\" stroke-width=\"0.08\" stroke-dasharray=\"0.2\"/><path d=\"M 0.4 -3 Q 0.8 -1.2 3 -2.8\" stroke=\"#2563eb\" fill=\"none\" stroke-width=\"0.12\"/><path d=\"M -0.4 3 Q -0.8 1.2 -3 2.8\" stroke=\"#2563eb\" fill=\"none\" stroke-width=\"0.12\"/><circle cx=\"0\" cy=\"0\" r=\"0.1\" fill=\"#333\"/><text x=\"0.2\" y=\"0.4\" font-size=\"0.4\" font-style=\"italic\">O</text><text x=\"1.8\" y=\"-2\" font-size=\"0.4\" fill=\"#ef4444\" font-weight=\"bold\">y = x</text></svg></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "Đồ thị đi dọc đường phân giác góc phần tư I và III: y = x",
      "startTime": 96.66,
      "endTime": 106.45,
      "duration": 9.79,
      "mascotMode": "cheer",
      "mascotTip": "Tiệm cận xiên là đường phân giác y = x!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:18px; color:#94a3b8; margin-bottom:6px;\"><b>Ví dụ 3:</b> Nhận diện TCX trên đồ thị.</div><div id=\"vd3_a\" style=\"border-top:1px dashed #64748b; padding-top:10px; font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Quan sát hình vẽ, hai nhánh đồ thị hàm số khi $x \\to \\pm\\infty$ tiến sát vào đường nét đứt màu đỏ.<br>• Đường thẳng chéo này đi qua gốc tọa độ $O(0; 0)$ và điểm $(1; 1)$, nghiêng góc $45^\\circ$.<br><b style=\"color:#10b981;\">Kết luận:</b> Tiệm cận xiên của đồ thị là đường phân giác <b>$y = x$</b>.</p></div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI TIỆM CẬN XIÊN",
      "subtitle": "PHẦN 4: NHỚ SAI CÔNG THỨC HỆ SỐ a VÀ b",
      "startTime": 106.45,
      "endTime": 114.98,
      "duration": 8.53,
      "mascotMode": "magnifier",
      "mascotTip": "a = lim(f(x)/x), còn b = lim(f(x) - ax). Đừng quên trừ ax nhé!",
      "bodyHtml": "<div style=\"font-size:22px; color:#f43f5e; font-weight:bold; margin-bottom:8px;\">4. Bẫy đề thi thường gặp</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\">• <b>Bẫy 1:</b> Nhớ sai công thức định nghĩa của $a$ và $b$ khi tính bằng giới hạn lim:<br>$$a = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x}, \\quad b = \\lim_{x \\to \\pm\\infty} [f(x) - ax]$$<br>Nhiều bạn quên trừ $ax$ khi tính $b$, dẫn đến kết quả sai hoàn toàn!<br>• <b>Bẫy 2:</b> Chia đa thức sai dấu ở phần dư hoặc bỏ sót dấu của hệ số âm.</div>"
    },
    {
      "sceneIndex": 10,
      "title": "MẸO TƯ DUY & L'HÔPITAL",
      "subtitle": "PHẦN 5: TÌM HỆ SỐ a VÀ b NHANH CHÓNG KHI CÓ THAM SỐ",
      "startTime": 114.98,
      "endTime": 127,
      "duration": 12.02,
      "mascotMode": "cheer",
      "mascotTip": "Dùng đạo hàm L'Hôpital để tìm lim tỉ số nhanh khi gặp bài chứa tham số m!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Mẹo tư duy & Đạo hàm L'Hôpital</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\">• Nếu bài toán tiệm cận xiên có chứa tham số $m$, việc chia đa thức có thể cồng kềnh.<br>• Ta có thể tính ngay hệ số góc $a$ bằng công thức đạo hàm giới hạn:<br>$$a = \\lim_{x \\to \\pm\\infty} f'(x)$$<br>(với các hàm phân thức hữu tỉ thông thường). Giúp tìm nhanh hệ số $a$ trong tích tắc!</div>"
    }
  ]
},
    bai4_muc1: {
  "lessonId": "bai4",
  "lessonTitle": "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
  "sectionId": "bai4_muc1",
  "sectionTitle": "Mục 1: Hàm số bậc ba y = ax³ + bx² + cx + d (a ≠ 0)",
  "audio": "/audio/bai4_muc1.mp3",
  "audioSrc": "./audio/bai4_muc1.mp3",
  "audio_src": "./audio/bai4_muc1.mp3",
  "timestamp_src": "timestamps/bai4_muc1.json",
  "totalDuration": 207.58,
  "duration": 207.58,
  "title": "Mục 1: Hàm số bậc ba y = ax³ + bx² + cx + d (a ≠ 0)",
  "owl_tip": "Ghi nhớ: Hàm bậc ba luôn có tâm đối xứng là điểm uốn U(-b/(3a); y_U). Đồ thị có 2 cực trị khi y' = 0 có 2 nghiệm phân biệt!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 47.42,
      "id": "part2"
    },
    {
      "time": 68.67,
      "id": "part3"
    },
    {
      "time": 72.22,
      "id": "vd1_q"
    },
    {
      "time": 90.03,
      "id": "vd1_a"
    },
    {
      "time": 119.92,
      "id": "vd2_q"
    },
    {
      "time": 135.43,
      "id": "vd2_a"
    },
    {
      "time": 150.47,
      "id": "vd3_q"
    },
    {
      "time": 163.85,
      "id": "vd3_a"
    },
    {
      "time": 180.96,
      "id": "part4"
    },
    {
      "time": 193.07,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Khái niệm & Sơ đồ khảo sát</h3>\n        <p>Hàm số bậc ba: $y = ax^3 + bx^2 + cx + d \\, (a \\neq 0)$<br>\n        <b>Bước 1:</b> $D = \\mathbb{R}$.<br>\n        <b>Bước 2:</b> Đạo hàm $y' = 3ax^2 + 2bx + c$. Xét dấu $y'$, tìm cực trị, khoảng đơn điệu. Tính $\\lim_{x \\to \\pm\\infty} y$ và lập BBT.<br>\n        <b>Bước 3:</b> Vẽ đồ thị: Xác định giao điểm $Ox, Oy$ và <b>Điểm uốn</b> (tâm đối xứng) $U\\left(-\\frac{b}{3a}; y_U\\right)$.</p>\n      </div>\n      <div id=\"part2\"><h3>2. Các dạng đồ thị hàm bậc ba</h3>\n        <p>+ $y' = 0$ có 2 nghiệm phân biệt $\\Rightarrow$ Đồ thị có 2 cực trị (chữ N nếu $a>0$, chữ N ngược nếu $a<0$).<br>\n        + $y' = 0$ vô nghiệm hoặc có nghiệm kép $\\Rightarrow$ Hàm số không có cực trị, luôn đơn điệu trên $\\mathbb{R}$.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ điển hình</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Khảo sát và vẽ đồ thị $y = x^3 - 3x + 1$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          + $D = \\mathbb{R}$. $y' = 3x^2 - 3 = 0 \\Leftrightarrow x = \\pm 1$.<br>\n          + Cực đại tại $(-1; 3)$, Cực tiểu tại $(1; -1)$. Điểm uốn $U(0; 1)$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Tìm tâm đối xứng của $y = -x^3 + 3x^2 - 2$.<br><i>(Thời gian suy nghĩ: 15s)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> $x_U = -\\frac{b}{3a} = 1 \\Rightarrow y_U = 0$. Tâm đối xứng là <b>$U(1; 0)$</b>.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Nhận diện đồ thị hàm bậc ba từ BBT sau:<br>\n          <table style=\"width:100%; max-width:380px; border-collapse:collapse; text-align:center; background:#ffffff !important; color:#111827 !important; border:2px solid #374151; margin:12px auto; font-size:15px; font-weight:600;\">\n            <tr style=\"border-bottom:1.5px solid #374151;\">\n              <td style=\"width:45px; border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$x$</td>\n              <td style=\"padding:6px; color:#111827 !important;\">$-\\infty$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$0$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$2$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$+\\infty$</td>\n            </tr>\n            <tr style=\"border-bottom:1.5px solid #374151;\">\n              <td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y'$</td>\n              <td></td><td style=\"color:#2563eb !important; font-size:16px;\">$+$</td><td>$0$</td><td style=\"color:#dc2626 !important; font-size:16px;\">$-$</td><td>$0$</td><td style=\"color:#2563eb !important; font-size:16px;\">$+$</td><td></td>\n            </tr>\n            <tr style=\"height:65px;\">\n              <td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y$</td>\n              <td style=\"vertical-align:bottom; padding:6px; color:#111827 !important;\">$-\\infty$</td><td>$\\nearrow$</td><td style=\"vertical-align:top; color:#dc2626 !important; font-weight:bold;\">$2$</td><td>$\\searrow$</td><td style=\"vertical-align:bottom; color:#2563eb !important; font-weight:bold;\">$-2$</td><td>$\\nearrow$</td><td style=\"vertical-align:top; padding:6px; color:#111827 !important;\">$+\\infty$</td>\n            </tr>\n          </table>\n          <i>(Thời gian suy nghĩ: 20s)</i>\n        </div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Giải chi tiết:</b> Nhánh ngoài cùng đi lên $\\Rightarrow a > 0$. Đạt CĐ tại $(0; 2)$ và CT tại $(2; -2) \\Rightarrow$ Hàm số: <b>$y = x^3 - 3x^2 + 2$</b>.\n        </div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Nhầm giữa điểm cực trị hàm số ($x$), giá trị cực trị ($y$) và điểm cực trị đồ thị ($(x; y)$).</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Giao điểm với trục tung $Oy$ cho biết ngay hệ số $d$.</p></div>\n    ",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm & Sơ đồ khảo sát",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Các dạng đồ thị",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ điển hình (3 Ví dụ)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Bẫy đề thi",
      "scenes": [
        9
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo Thầy Cú",
      "scenes": [
        10
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 4: KHẢO SÁT HÀM SỐ BẬC BA",
      "subtitle": "PHẦN 1: SƠ ĐỒ KHẢO SÁT TỔNG QUÁT 3 BƯỚC",
      "startTime": 0.0,
      "endTime": 47.42,
      "duration": 47.42,
      "mascotMode": "pointer",
      "mascotTip": "Ghi nhớ 3 bước chuẩn: TXĐ -> Biến thiên (y', nghiệm, BBT, lim) -> Đồ thị (Điểm uốn U, giao Ox, Oy)!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Sơ đồ khảo sát tổng quát hàm số bậc ba</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>Xét hàm số bậc ba: $y = ax^3 + bx^2 + cx + d \\quad (a \\neq 0)$<br>• <b>Bước 1:</b> Tập xác định $D = \\mathbb{R}$.<br>• <b>Bước 2:</b> Khảo sát sự biến thiên:<br>&emsp;+ Tính đạo hàm: $y' = 3ax^2 + 2bx + c$. Giải phương trình $y' = 0$.<br>&emsp;+ Xét dấu $y'$ để tìm các khoảng đồng biến, nghịch biến và điểm cực trị.<br>&emsp;+ Tìm giới hạn vô cực: $\\lim_{x \\to +\\infty} y$ và $\\lim_{x \\to -\\infty} y$. Lập bảng biến thiên.<br>• <b>Bước 3:</b> Vẽ đồ thị hàm số:<br>&emsp;+ Giao điểm với trục tung $Oy$: Cho $x = 0 \\implies y = d$.<br>&emsp;+ Giao điểm với trục hoành $Ox$: Cho $y = 0 \\implies ax^3+bx^2+cx+d=0$.<br>&emsp;+ <b>Điểm uốn $U\\left(-\\frac{b}{3a}; y_U\\right)$</b> là <b>Tâm đối xứng</b> của đồ thị bậc ba.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "CÁC DẠNG ĐỒ THỊ HÀM BẬC BA",
      "subtitle": "PHẦN 2: DỰA VÀO DẤU CỦA a VÀ SỐ NGHIỆM ĐẠO HÀM",
      "startTime": 47.42,
      "endTime": 72.22,
      "duration": 24.8,
      "mascotMode": "pointer",
      "mascotTip": "y' = 0 có 2 nghiệm: đồ thị có 2 cực trị (hình chữ N). y' vô nghiệm hoặc nghiệm kép: hàm số đơn điệu trên R!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Các dạng đồ thị của hàm bậc ba</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Trường hợp 1:</b> Phương trình $y' = 0$ có 2 nghiệm phân biệt ($\\Delta_{y'} > 0$):<br>&emsp;$\\Rightarrow$ Hàm số có 2 điểm cực trị.<br>&emsp;+ Nếu $a > 0$: Đồ thị có hình chữ <b>N</b> (đi lên &rarr; đi xuống &rarr; đi lên).<br>&emsp;+ Nếu $a < 0$: Đồ thị có hình chữ <b>N ngược</b> (đi xuống &rarr; đi lên &rarr; đi xuống).<br>• <b>Trường hợp 2:</b> Phương trình $y' = 0$ vô nghiệm hoặc có nghiệm kép ($\\Delta_{y'} \\le 0$):<br>&emsp;$\\Rightarrow$ Hàm số không có cực trị, luôn đơn điệu trên $\\mathbb{R}$.<br>&emsp;+ Nếu $a > 0$: Đồ thị luôn đi lên từ trái sang phải.<br>&emsp;+ Nếu $a < 0$: Đồ thị luôn đi xuống từ trái sang phải.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: KHẢO SÁT & VẼ ĐỒ THỊ",
      "subtitle": "y = x^3 - 3x + 1",
      "startTime": 72.22,
      "endTime": 90.03,
      "duration": 17.81,
      "mascotMode": "pointer",
      "mascotTip": "Tính nhanh: y' = 3x^2 - 3. Cho y' = 0 tìm nghiệm x và tọa độ điểm uốn nhé!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Khảo sát sự biến thiên và vẽ đồ thị hàm số: $$y = x^3 - 3x + 1$$<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian làm nháp: 20 giây</b><br><i>(Tính y', tìm cực trị và hoành độ điểm uốn x_U...)</i></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT & BẢNG BIẾN THIÊN",
      "subtitle": "HÀM SỐ ĐỒNG BIẾN, NGHỊCH BIẾN VÀ CỰC TRỊ",
      "startTime": 90.03,
      "endTime": 119.92,
      "duration": 29.89,
      "mascotMode": "cheer",
      "mascotTip": "Hàm số đồng biến trên (-∞; -1) và (1; +∞); nghịch biến trên (-1; 1)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Tập xác định: $D = \\mathbb{R}$.<br>• Đạo hàm: $y' = 3x^2 - 3 = 0 \\iff x = \\pm 1$.<br>• Cực đại tại $(-1; 3)$, Cực tiểu tại $(1; -1)$. Điểm uốn: $U(0; 1)$ là tâm đối xứng.</p></div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: TÌM TÂM ĐỐI XỨNG CỦA ĐỒ THỊ",
      "subtitle": "y = -x^3 + 3x^2 - 2",
      "startTime": 119.92,
      "endTime": 135.43,
      "duration": 15.51,
      "mascotMode": "pointer",
      "mascotTip": "Công thức hoành độ điểm uốn: x_U = -b / (3a). Nhẩm nhanh trong 15s nhé!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Tìm tọa độ tâm đối xứng của đồ thị hàm số: $$y = -x^3 + 3x^2 - 2$$<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b><br><i>(Áp dụng công thức hoành độ điểm uốn x_U = -b / (3a)...)</i></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "TÂM ĐỐI XỨNG U(1; 0)",
      "startTime": 135.43,
      "endTime": 150.47,
      "duration": 15.04,
      "mascotMode": "cheer",
      "mascotTip": "x_U = -3 / (3*(-1)) = 1 -> y_U = -(1)^3 + 3(1)^2 - 2 = 0 -> U(1; 0)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Ta có các hệ số: $a = -1, \\; b = 3, \\; c = 0, \\; d = -2$.<br>• Hoành độ điểm uốn (tâm đối xứng): $$x_U = -\\frac{b}{3a} = -\\frac{3}{3(-1)} = 1$$<br>• Thay $x = 1$ vào hàm số: $y_U = -(1)^3 + 3(1)^2 - 2 = 0$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> Tâm đối xứng của đồ thị là điểm <b>$U(1; 0)$</b>.</p></div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: NHẬN DIỆN HÀM BẬC BA TỪ BBT",
      "subtitle": "ĐỌC DẤU HỆ SỐ a VÀ CÁC ĐIỂM CỰC TRỊ",
      "startTime": 150.47,
      "endTime": 163.85,
      "duration": 13.38,
      "mascotMode": "magnifier",
      "mascotTip": "Nhánh ngoài cùng bên phải đi lên +∞ -> a > 0! Cực đại (0; 2), Cực tiểu (2; -2)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:20px; line-height:1.5; color:#f8fafc;\"><b>Ví dụ 3:</b> Nhận diện hàm số bậc ba từ Bảng biến thiên sau:<table style=\"width:100%; max-width:400px; border-collapse:collapse; text-align:center; background:#ffffff !important; color:#111827 !important; border:2px solid #374151; margin:12px auto; font-size:15px; font-weight:600;\"><tr style=\"border-bottom:1.5px solid #374151;\"><td style=\"width:45px; border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$x$</td><td style=\"padding:6px; color:#111827 !important;\">$-\\infty$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$0$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$2$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$+\\infty$</td></tr><tr style=\"border-bottom:1.5px solid #374151;\"><td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y'$</td><td></td><td style=\"color:#2563eb !important; font-size:16px;\">$+$</td><td>$0$</td><td style=\"color:#dc2626 !important; font-size:16px;\">$-$</td><td>$0$</td><td style=\"color:#2563eb !important; font-size:16px;\">$+$</td><td></td></tr><tr style=\"height:65px;\"><td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y$</td><td style=\"vertical-align:bottom; padding:6px; color:#111827 !important;\">$-\\infty$</td><td>$\\nearrow$</td><td style=\"vertical-align:top; color:#dc2626 !important; font-weight:bold; font-size:17px;\">$2$</td><td>$\\searrow$</td><td style=\"vertical-align:bottom; color:#2563eb !important; font-weight:bold; font-size:17px;\">$-2$</td><td>$\\nearrow$</td><td style=\"vertical-align:top; padding:6px; color:#111827 !important;\">$+\\infty$</td></tr></table><div style=\"margin-top:10px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "y = x^3 - 3x^2 + 2",
      "startTime": 163.85,
      "endTime": 180.96,
      "duration": 17.11,
      "mascotMode": "cheer",
      "mascotTip": "Nhánh phải đi lên -> a > 0. Cực đại (0; 2) -> d = 2. Cực tiểu (2; -2) -> y = x^3 - 3x^2 + 2!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Nhánh ngoài cùng bên phải đi lên: $\\lim_{x \\to +\\infty} y = +\\infty \\implies a > 0$.<br>• Đồ thị đạt cực đại tại điểm $(0; 2) \\implies y(0) = d = 2$.<br>• Đạt cực tiểu tại điểm $(2; -2)$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> Đây chính là bảng biến thiên của hàm số <b>$y = x^3 - 3x^2 + 2$</b>.</p></div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI VỀ CỰC TRỊ",
      "subtitle": "PHẦN 4: PHÂN BIỆT ĐIỂM VÀ GIÁ TRỊ",
      "startTime": 180.96,
      "endTime": 193.07,
      "duration": 12.11,
      "mascotMode": "magnifier",
      "mascotTip": "Điểm cực trị hàm số: x. Giá trị cực trị: y. Điểm cực trị đồ thị: (x; y)!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi: Nhầm lẫn giữa 3 khái niệm cực trị:</span><br>1. <b>Điểm cực trị của hàm số:</b> Là các giá trị của biến số $x$ (ví dụ: $x = 0, \\; x = 2$).<br>2. <b>Giá trị cực trị của hàm số:</b> Là các giá trị của hàm số $y$ (ví dụ: $y_{CĐ} = 2, \\; y_{CT} = -2$).<br>3. <b>Điểm cực trị của đồ thị hàm số:</b> Là cặp tọa độ $(x; y)$ trên mặt phẳng toạ độ (ví dụ: $(0; 2), \\; (2; -2)$).</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: ĐỌC DẤU a VÀ HỆ SỐ d",
      "startTime": 193.07,
      "endTime": 207.58,
      "duration": 14.51,
      "mascotMode": "cheer",
      "mascotTip": "Nhánh phải đi lên -> a > 0! Cắt Oy tại điểm nào thì d bằng tung độ điểm đó!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Mẹo nhận diện nhanh hàm số bậc ba:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">• <b>Mẹo 1: Dấu của hệ số $a$:</b> Nhìn nhánh ngoài cùng bên phải, nếu vươn lên thì $a > 0$, nếu cắm xuống thì $a < 0$.<br>• <b>Mẹo 2: Hệ số tự do $d$:</b> Giao điểm của đồ thị với trục tung $Oy$ chính là điểm $(0; d)$.<br>• <b>Mẹo 3: Tâm đối xứng:</b> Là trung điểm của đoạn thẳng nối hai điểm cực trị!</div>"
    }
  ]
},

    bai4_muc2: {
  "lessonId": "bai4",
  "lessonTitle": "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
  "sectionId": "bai4_muc2",
  "sectionTitle": "Mục 2: Hàm phân thức bậc nhất / bậc nhất y = (ax+b)/(cx+d)",
  "audio": "/audio/bai4_muc2.mp3",
  "audioSrc": "./audio/bai4_muc2.mp3",
  "audio_src": "./audio/bai4_muc2.mp3",
  "timestamp_src": "timestamps/bai4_muc2.json",
  "totalDuration": 169.61,
  "duration": 169.61,
  "title": "Mục 2: Hàm phân thức bậc nhất / bậc nhất y = (ax+b)/(cx+d)",
  "owl_tip": "Ghi nhớ: y' = (ad - bc)/(cx+d)^2 cùng dấu với ad - bc. Đồ thị KHÔNG CÓ CỰC TRỊ, tâm đối xứng I(-d/c; a/c)!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 44.1,
      "id": "part2"
    },
    {
      "time": 51.6,
      "id": "part3"
    },
    {
      "time": 55.22,
      "id": "vd1_q"
    },
    {
      "time": 69.39,
      "id": "vd1_a"
    },
    {
      "time": 95.67,
      "id": "vd2_q"
    },
    {
      "time": 109.46,
      "id": "vd2_a"
    },
    {
      "time": 124.67,
      "id": "vd3_q"
    },
    {
      "time": 139.43,
      "id": "vd3_a"
    },
    {
      "time": 148.94,
      "id": "part4"
    },
    {
      "time": 158.71,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Khái niệm & Sơ đồ khảo sát</h3>\n        <p>Hàm số: $y = \\frac{ax+b}{cx+d} \\, (c \\neq 0, ad-bc \\neq 0)$<br>\n        <b>Bước 1:</b> $D = \\mathbb{R} \\setminus \\left\\{-\\frac{d}{c}\\right\\}$.<br>\n        <b>Bước 2:</b> Đạo hàm $y' = \\frac{ad-bc}{(cx+d)^2}$. Hàm số luôn đồng biến nếu $ad-bc>0$; nghịch biến nếu $ad-bc<0$. Không có cực trị.<br>\n        + TCĐ: $x = -\\frac{d}{c}$, TCN: $y = \\frac{a}{c}$. Tâm đối xứng: $I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right)$.<br>\n        <b>Bước 3:</b> Vẽ đồ thị 2 nhánh hypebol.</p>\n      </div>\n      <div id=\"part2\"><h3>2. Hình dạng đồ thị</h3>\n        <p>Đồ thị là đường hypebol nhận giao điểm hai tiệm cận $I$ làm tâm đối xứng.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ thực hành</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Khảo sát hàm số $y = \\frac{2x+1}{x-1}$.<br><i>(Thời gian nháp: 20s)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> $D = \\mathbb{R} \\setminus \\{1\\}$. $y' = \\frac{-3}{(x-1)^2} < 0$. Nghịch biến trên từng khoảng xác định. TCĐ: $x = 1$, TCN: $y = 2$, Tâm đối xứng $I(1; 2)$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Tìm tâm đối xứng của $y = \\frac{3-x}{x+2}$.<br><i>(Thời gian suy nghĩ: 15s)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> TCĐ: $x = -2$, TCN: $y = -1$. Tâm đối xứng là <b>$I(-2; -1)$</b>.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Xác định hàm số có TCĐ $x = 1$, TCN $y = 2$ và cắt $Oy$ tại $(0; -1)$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> Hàm số cần tìm là <b>$y = \\frac{2x+1}{x-1}$</b>.\n        </div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy trắc nghiệm</h3><p>Dùng dấu hợp $\\cup$ khi kết luận đồng biến, nghịch biến là sai.</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Casio</h3><p>Bấm [CALC] tại $x=0$ để tìm giao điểm trục tung $Oy$ nhằm loại phương án sai.</p></div>\n    ",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm & Sơ đồ khảo sát",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Các dạng đồ thị",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ điển hình (3 Ví dụ)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Bẫy đề thi",
      "scenes": [
        9
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo Thầy Cú",
      "scenes": [
        10
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 4: HÀM PHÂN THỨC BẬC NHẤT / BẬC NHẤT",
      "subtitle": "PHẦN 1: SƠ ĐỒ KHẢO SÁT & TIỆM CẬN",
      "startTime": 0.0,
      "endTime": 44.1,
      "duration": 44.1,
      "mascotMode": "pointer",
      "mascotTip": "Hàm bậc nhất / bậc nhất: y' = (ad-bc)/(cx+d)^2 không bao giờ bằng 0. Đồ thị KHÔNG CÓ CỰC TRỊ!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Sơ đồ khảo sát hàm phân thức $y = \\frac{ax+b}{cx+d}$</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>Điều kiện: $c \\neq 0$ và $ad - bc \\neq 0$.<br>• <b>Bước 1:</b> Tập xác định: $D = \\mathbb{R} \\setminus \\left\\{-\\frac{d}{c}\\right\\}$.<br>• <b>Bước 2:</b> Đạo hàm: $y' = \\frac{ad - bc}{(cx+d)^2}$.<br>&emsp;+ Nếu $ad - bc > 0 \\implies y' > 0$: Hàm số luôn đồng biến trên từng khoảng xác định.<br>&emsp;+ Nếu $ad - bc < 0 \\implies y' < 0$: Hàm số luôn nghịch biến trên từng khoảng xác định.<br>&emsp;+ <b>Cực trị:</b> Hàm số <b>không bao giờ có cực trị</b>.<br>&emsp;+ <b>Đường tiệm cận:</b> Tiệm cận đứng $x = -\\frac{d}{c}$; Tiệm cận ngang $y = \\frac{a}{c}$.<br>&emsp;+ <b>Tâm đối xứng:</b> Giao điểm hai tiệm cận $I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right)$.<br>• <b>Bước 3:</b> Vẽ đồ thị 2 nhánh hypebol đối xứng qua điểm $I$.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "CÁC DẠNG ĐỒ THỊ PHÂN THỨC BẬC 1/1",
      "subtitle": "PHẦN 2: HAI NHÁNH HYPEBOL ĐỐI XỨNG QUA GIAO ĐIỂM TIỆM CẬN",
      "startTime": 44.1,
      "endTime": 55.22,
      "duration": 11.12,
      "mascotMode": "pointer",
      "mascotTip": "ad-bc > 0: đồ thị ở góc phần tư II và IV; ad-bc < 0: đồ thị ở góc phần tư I và III!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Các dạng đồ thị phân thức bậc nhất / bậc nhất</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>Đồ thị là đường hypebol gồm hai nhánh rời nhau, nhận giao điểm hai đường tiệm cận $I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right)$ làm tâm đối xứng:<br>• <b>Nếu $ad - bc > 0$ (Đồng biến):</b><br>&emsp;Hai nhánh hypebol nằm ở góc phần tư thứ <b>II và IV</b> so với hai đường tiệm cận.<br>• <b>Nếu $ad - bc < 0$ (Nghịch biến):</b><br>&emsp;Hai nhánh hypebol nằm ở góc phần tư thứ <b>I và III</b> so với hai đường tiệm cận.<br>• Đồ thị không bao giờ cắt hai đường tiệm cận.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: KHẢO SÁT & VẼ ĐỒ THỊ",
      "subtitle": "y = (2x + 1) / (x - 1)",
      "startTime": 55.22,
      "endTime": 69.39,
      "duration": 14.17,
      "mascotMode": "pointer",
      "mascotTip": "Tích chéo: 2*(-1) - 1*1 = -3 < 0 -> Hàm luôn nghịch biến trên từng khoảng!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Khảo sát sự biến thiên và vẽ đồ thị hàm số: $$y = \\frac{2x+1}{x-1}$$<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian làm nháp: 20 giây</b><br><i>(Tính y', tìm TCĐ, TCN và tọa độ tâm đối xứng I...)</i></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT & BẢNG BIẾN THIÊN",
      "subtitle": "TCĐ x = 1, TCN y = 2, TÂM ĐỐI XỨNG I(1; 2)",
      "startTime": 69.39,
      "endTime": 95.67,
      "duration": 26.28,
      "mascotMode": "cheer",
      "mascotTip": "Hàm số nghịch biến trên (-∞; 1) và (1; +∞). Không bao giờ dùng dấu hợp ∪!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Tập xác định: $D = \\mathbb{R} \\setminus \\{1\\}$.<br>• Đạo hàm: $y' = \\frac{2(-1) - 1(1)}{(x-1)^2} = \\frac{-3}{(x-1)^2} < 0, \\; \\forall x \\neq 1$.<br>• BBT: Hàm số nghịch biến trên $(-\\infty; 1)$ và $(1; +\\infty)$.<br>• Tiệm cận đứng: $x = 1$; Tiệm cận ngang: $y = 2$.<br>• Tâm đối xứng: $I(1; 2)$. Giao trục tung: $(0; -1)$; Giao trục hoành: $\\left(-\\frac{1}{2}; 0\\right)$.</p></div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: TÌM TÂM ĐỐI XỨNG CỦA ĐỒ THỊ",
      "subtitle": "y = (3 - x) / (x + 2)",
      "startTime": 95.67,
      "endTime": 109.46,
      "duration": 13.79,
      "mascotMode": "pointer",
      "mascotTip": "Chú ý đổi thứ tự tử số: y = (-x + 3)/(x + 2). TCN y = -1/1 = -1!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Tìm tâm đối xứng của đồ thị hàm số: $$y = \\frac{3-x}{x+2}$$<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b><br><i>(Viết lại tử số theo đúng chuẩn -x + 3 trước khi tìm TCN...)</i></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "TÂM ĐỐI XỨNG I(-2; -1)",
      "startTime": 109.46,
      "endTime": 124.67,
      "duration": 15.21,
      "mascotMode": "cheer",
      "mascotTip": "TCĐ x = -2, TCN y = -1 -> I(-2; -1)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Viết lại hàm số: $y = \\frac{-x+3}{x+2}$.<br>• Tiệm cận đứng: $x = -2$.<br>• Tiệm cận ngang: $y = \\frac{-1}{1} = -1$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> Tâm đối xứng của đồ thị là <b>$I(-2; -1)$</b>.</p></div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: XÁC ĐỊNH HÀM SỐ TỪ ĐỒ THỊ",
      "subtitle": "DỰA VÀO TIỆM CẬN VÀ GIAO ĐIỂM TRỤC TUNG",
      "startTime": 124.67,
      "endTime": 139.43,
      "duration": 14.76,
      "mascotMode": "magnifier",
      "mascotTip": "TCĐ x = 1, TCN y = 2 -> y = (2x+b)/(x-1). Cắt Oy tại (0; -1) -> b = 1!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:20px; line-height:1.5; color:#f8fafc;\"><b>Ví dụ 3:</b> Xác định hàm số có đồ thị hypebol nhận đường thẳng $x = 1$ làm tiệm cận đứng, đường thẳng $y = 2$ làm tiệm cận ngang và cắt trục tung tại điểm $(0; -1)$.<div style=\"margin-top:10px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "y = (2x + 1) / (x - 1)",
      "startTime": 139.43,
      "endTime": 148.94,
      "duration": 9.51,
      "mascotMode": "cheer",
      "mascotTip": "Giao Oy: x = 0 -> y = b / (-1) = -1 -> b = 1!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Dạng hàm số: $y = \\frac{2x+b}{x-1}$.<br>• Đồ thị cắt trục tung tại $(0; -1) \\implies \\frac{2(0)+b}{0-1} = -1 \\implies b = 1$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> Hàm số cần tìm là <b>$y = \\frac{2x+1}{x-1}$</b>.</p></div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY TRẮC NGHIỆM VỀ KẾT LUẬN ĐỒNG BIẾN",
      "subtitle": "PHẦN 4: DÙNG KÝ HIỆU HỢP LÀ SAI HOÀN TOÀN",
      "startTime": 148.94,
      "endTime": 158.71,
      "duration": 9.77,
      "mascotMode": "magnifier",
      "mascotTip": "Tuyệt đối không dùng dấu hợp ∪ hoặc R \\ {x_0}. Phải kết luận trên TỪNG KHOẢNG XÁC ĐỊNH!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy trắc nghiệm: Sai lầm khi kết luận khoảng đơn điệu:</span><br>• <b>SAI:</b> Hàm số đồng biến (hoặc nghịch biến) trên $\\mathbb{R} \\setminus \\{1\\}$.<br>• <b>SAI:</b> Hàm số đồng biến trên $(-\\infty; 1) \\cup (1; +\\infty)$.<br>• <b>ĐÚNG CHUẨN BỘ GD&ĐT:</b> Hàm số nghịch biến trên từng khoảng $(-\\infty; 1)$ và $(1; +\\infty)$ (hoặc dùng dấu chấm phẩy ;).</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: TÍCH CHÉO VÀ GIAO ĐIỂM TRỤC TUNG",
      "startTime": 158.71,
      "endTime": 169.61,
      "duration": 10.9,
      "mascotMode": "cheer",
      "mascotTip": "Bấm [CALC] x = 0 ra ngay giao điểm Oy = b/d, loại trừ phương án sai cực nhanh!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Mẹo Casio giải nhanh hàm phân thức bậc nhất / bậc nhất:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">• <b>Mẹo 1 (Đạo hàm nhanh):</b> Nhẩm $y' = \\frac{ad - bc}{(cx+d)^2}$ trong 1 giây.<br>• <b>Mẹo 2 (CALC giao điểm $Oy$):</b> Bấm CALC tại $x = 0$ để tìm ngay giao điểm với trục tung $y = \\frac{b}{d}$.<br>• <b>Mẹo 3 (Tâm đối xứng):</b> $I = \\text{Giao}(TCĐ, TCN) = \\left(-\\frac{d}{c}; \\frac{a}{c}\\right)$.</div>"
    }
  ]
},

    bai4_muc3: {
  "lessonId": "bai4",
  "lessonTitle": "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
  "sectionId": "bai4_muc3",
  "sectionTitle": "Mục 3: Hàm phân thức bậc hai / bậc nhất y = (ax²+bx+c)/(px+q)",
  "audio": "/audio/bai4_muc3.mp3",
  "audioSrc": "./audio/bai4_muc3.mp3",
  "audio_src": "./audio/bai4_muc3.mp3",
  "timestamp_src": "timestamps/bai4_muc3.json",
  "totalDuration": 170.57,
  "duration": 170.57,
  "title": "Mục 3: Hàm phân thức bậc hai / bậc nhất y = (ax²+bx+c)/(px+q)",
  "owl_tip": "Dạng mới GDPT 2018: Chia tử cho mẫu y = a_1 x + b_1 + r/(px+q). Tiệm cận xiên là y = a_1 x + b_1!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 35.28,
      "id": "part2"
    },
    {
      "time": 51.39,
      "id": "part3"
    },
    {
      "time": 54.96,
      "id": "vd1_q"
    },
    {
      "time": 69.64,
      "id": "vd1_a"
    },
    {
      "time": 94.47,
      "id": "vd2_q"
    },
    {
      "time": 106.91,
      "id": "vd2_a"
    },
    {
      "time": 125.57,
      "id": "vd3_q"
    },
    {
      "time": 140.77,
      "id": "vd3_a"
    },
    {
      "time": 152.27,
      "id": "part4"
    },
    {
      "time": 161.61,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Khái niệm & Sơ đồ khảo sát</h3>\n        <p>Hàm số: $y = \\frac{ax^2+bx+c}{px+q} \\, (p \\neq 0)$<br>\n        <b>Bước 1:</b> $D = \\mathbb{R} \\setminus \\left\\{-\\frac{q}{p}\\right\\}$.<br>\n        <b>Bước 2:</b> Chia đa thức: $y = a_1 x + b_1 + \\frac{r}{px+q}$.<br>\n        + TCĐ: $x = -\\frac{q}{p}$; TCX: $y = a_1 x + b_1$. Tâm đối xứng $I$ là giao điểm 2 tiệm cận.<br>\n        <b>Bước 3:</b> Tính $y'$, lập BBT và vẽ đồ thị.</p>\n      </div>\n      <div id=\"part2\"><h3>2. Các dạng đồ thị</h3>\n        <p>Đồ thị có 2 điểm cực trị nằm về 2 phía tiệm cận đứng. Giá trị $y_{CĐ}$ có thể nhỏ hơn $y_{CT}$.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ điển hình</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Khảo sát hàm số $y = \\frac{x^2-x+1}{x-1}$.<br><i>(Thời gian làm nháp: 30s)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> Chia đa thức: $y = x + \\frac{1}{x-1}$. TCĐ: $x = 1$, TCX: $y = x$, $I(1; 1)$. CĐ $(0; -1)$, CT $(2; 3)$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Tìm tâm đối xứng $I$ của $y = \\frac{2x^2+x-3}{x+1}$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> TCĐ: $x = -1$, TCX: $y = 2x - 1$. Thay $x = -1 \\Rightarrow y = -3$. Tâm đối xứng <b>$I(-1; -3)$</b>.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Đọc BBT hàm phân thức bậc 2 trên bậc 1 có TCĐ $x = 1$, CĐ $(0; 1)$ và CT $(2; 5)$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> TCĐ là $x = 1$. Cực đại có tung độ $y = 1$ nhỏ hơn cực tiểu $y = 5$.\n        </div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Hoang mang khi thấy giá trị cực đại nhỏ hơn cực tiểu.</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Tâm đối xứng $I$ luôn là giao điểm của tiệm cận đứng và tiệm cận xiên.</p></div>\n    ",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm & Sơ đồ khảo sát",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Các dạng đồ thị",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ điển hình (3 Ví dụ)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Bẫy đề thi",
      "scenes": [
        9
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo Thầy Cú",
      "scenes": [
        10
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 4: HÀM PHÂN THỨC BẬC HAI / BẬC NHẤT",
      "subtitle": "PHẦN 1: SƠ ĐỒ KHẢO SÁT & TIỆM CẬN XIÊN",
      "startTime": 0.0,
      "endTime": 35.28,
      "duration": 35.28,
      "mascotMode": "pointer",
      "mascotTip": "Dạng mới GDPT 2018: Chia tử cho mẫu y = a_1 x + b_1 + r/(px+q). Tiệm cận xiên là y = a_1 x + b_1!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Sơ đồ khảo sát hàm $y = \\frac{ax^2+bx+c}{px+q} \\quad (p \\neq 0)$</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Bước 1:</b> Tập xác định: $D = \\mathbb{R} \\setminus \\left\\{-\\frac{q}{p}\\right\\}$.<br>• <b>Bước 2:</b> Chia đa thức tử cho mẫu:<br>$$y = a_1 x + b_1 + \\frac{r}{px+q}$$<br>&emsp;+ <b>Tiệm cận đứng:</b> $x = -\\frac{q}{p}$.<br>&emsp;+ <b>Tiệm cận xiên:</b> $y = a_1 x + b_1$.<br>&emsp;+ <b>Tâm đối xứng $I$:</b> Là giao điểm của tiệm cận xiên và tiệm cận đứng.<br>• <b>Bước 3:</b> Tính $y'$, lập bảng biến thiên và vẽ đồ thị hypebol xiên.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "CÁC DẠNG ĐỒ THỊ BẬC HAI / BẬC NHẤT",
      "subtitle": "PHẦN 2: ĐẶC ĐIỂM CỰC TRỊ VÀ HAI NHÁNH ĐỒ THỊ",
      "startTime": 35.28,
      "endTime": 54.96,
      "duration": 19.68,
      "mascotMode": "pointer",
      "mascotTip": "Đồ thị có 2 cực trị nằm về 2 phía của tiệm cận đứng. Giá trị Cực đại CÓ THỂ NHỎ HƠN Cực tiểu!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Các dạng đồ thị phân thức bậc hai / bậc nhất</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Trường hợp 1:</b> Phương trình $y' = 0$ có 2 nghiệm phân biệt:<br>&emsp;+ Đồ thị có 2 điểm cực trị nằm về hai phía của đường tiệm cận đứng.<br>&emsp;+ Tâm đối xứng $I$ chính là trung điểm của đoạn thẳng nối 2 điểm cực trị!<br>&emsp;+ <b>Hiện tượng đặc biệt:</b> Giá trị cực đại $y_{CĐ}$ có thể <b>nhỏ hơn</b> giá trị cực tiểu $y_{CT}$.<br>• <b>Trường hợp 2:</b> Phương trình $y' = 0$ vô nghiệm:<br>&emsp;+ Hàm số luôn đơn điệu trên từng khoảng xác định và không có cực trị.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: KHẢO SÁT & VẼ ĐỒ THỊ",
      "subtitle": "y = (x^2 - x + 1) / (x - 1)",
      "startTime": 54.96,
      "endTime": 69.64,
      "duration": 14.68,
      "mascotMode": "pointer",
      "mascotTip": "Chia đa thức: (x^2 - x + 1)/(x - 1) = x + 1/(x - 1). TCĐ x = 1, TCX y = x!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Khảo sát sự biến thiên và vẽ đồ thị hàm số: $$y = \\frac{x^2 - x + 1}{x - 1}$$<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian làm nháp: 30 giây</b><br><i>(Chia tử cho mẫu, tìm TCĐ, TCX và giải y' = 0...)</i></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT & BẢNG BIẾN THIÊN",
      "subtitle": "CỰC ĐẠI (0; -1), CỰC TIỂU (2; 3), TÂM ĐỐI XỨNG I(1; 1)",
      "startTime": 69.64,
      "endTime": 94.47,
      "duration": 24.83,
      "mascotMode": "cheer",
      "mascotTip": "y_CĐ = -1 nhỏ hơn y_CT = 3! Đây là bản chất hoàn toàn tự nhiên vì cực trị mang tính địa phương!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• $D = \\mathbb{R} \\setminus \\{1\\}$. Chia đa thức: $y = x + \\frac{1}{x - 1}$.<br>• TCĐ: $x = 1$; Tiệm cận xiên: $y = x$. Tâm đối xứng $I(1; 1)$.<br>• $y' = 1 - \\frac{1}{(x-1)^2} = \\frac{x(x-2)}{(x-1)^2} = 0 \\iff x = 0$ hoặc $x = 2$.<br>• Cực đại tại $(0; -1)$, Cực tiểu tại $(2; 3)$. Trung điểm của 2 cực trị chính là $I(1; 1)$.</p></div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: TÌM TÂM ĐỐI XỨNG CỦA ĐỒ THỊ",
      "subtitle": "y = (2x^2 + x - 3) / (x + 1)",
      "startTime": 94.47,
      "endTime": 106.91,
      "duration": 12.44,
      "mascotMode": "pointer",
      "mascotTip": "Chia tử cho mẫu: thương là 2x - 1. Thay x = -1 vào TCX tìm tung độ y = -3!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Tìm tọa độ tâm đối xứng $I$ của đồ thị hàm số: $$y = \\frac{2x^2+x-3}{x+1}$$<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b><br><i>(Tìm giao điểm của Tiệm cận đứng và Tiệm cận xiên...)</i></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "TÂM ĐỐI XỨNG I(-1; -3)",
      "startTime": 106.91,
      "endTime": 125.57,
      "duration": 18.66,
      "mascotMode": "cheer",
      "mascotTip": "TCĐ x = -1, TCX y = 2x - 1 -> Giao điểm là I(-1; -3)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Nghiệm của mẫu số: $x + 1 = 0 \\implies$ Tiệm cận đứng là $x = -1$.<br>• Thực hiện phép chia đa thức tử cho mẫu:<br>$$2x^2 + x - 3 = (x + 1)(2x - 1) - 2 \\implies y = 2x - 1 - \\frac{2}{x+1}$$<br>$\\implies$ Đường tiệm cận xiên là <b>$y = 2x - 1$</b>.<br>• Thay hoành độ $x = -1$ vào phương trình TCX: $y = 2(-1) - 1 = -3$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> Tâm đối xứng của đồ thị là <b>$I(-1; -3)$</b>.</p></div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: ĐỌC BBT HÀM BẬC HAI / BẬC NHẤT",
      "subtitle": "TCĐ x = 1, CỰC ĐẠI (0; 1), CỰC TIỂU (2; 5)",
      "startTime": 125.57,
      "endTime": 140.77,
      "duration": 15.2,
      "mascotMode": "magnifier",
      "mascotTip": "Quan sát kỹ BBT: y_CĐ = 1 nhỏ hơn y_CT = 5 vì 2 nhánh nằm về 2 phía TCĐ!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:20px; line-height:1.5; color:#f8fafc;\"><b>Ví dụ 3:</b> Đọc bảng biến thiên của hàm phân thức bậc 2 trên bậc 1 sau:<table style=\"width:100%; max-width:440px; border-collapse:collapse; text-align:center; background:#ffffff !important; color:#111827 !important; border:2px solid #374151; margin:12px auto; font-size:15px; font-weight:600;\"><tr style=\"border-bottom:1.5px solid #374151;\"><td style=\"width:45px; border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$x$</td><td style=\"padding:6px; color:#111827 !important;\">$-\\infty$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$0$</td><td></td><td style=\"padding:6px; color:#111827 !important; background:#fee2e2;\">$1$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$2$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$+\\infty$</td></tr><tr style=\"border-bottom:1.5px solid #374151;\"><td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y'$</td><td></td><td style=\"color:#2563eb !important; font-size:16px;\">$+$</td><td>$0$</td><td style=\"color:#dc2626 !important; font-size:16px;\">$-$</td><td style=\"color:#dc2626 !important; font-weight:bold;\">$||$</td><td style=\"color:#dc2626 !important; font-size:16px;\">$-$</td><td>$0$</td><td style=\"color:#2563eb !important; font-size:16px;\">$+$</td><td></td></tr><tr style=\"height:65px;\"><td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y$</td><td style=\"vertical-align:bottom; padding:6px; color:#111827 !important;\">$-\\infty$</td><td>$\\nearrow$</td><td style=\"vertical-align:top; color:#dc2626 !important; font-weight:bold; font-size:17px;\">$1$</td><td>$\\searrow$</td><td style=\"color:#dc2626 !important; font-weight:bold;\">$||$</td><td style=\"vertical-align:top; color:#111827 !important;\">$+\\infty$</td><td>$\\searrow$</td><td style=\"vertical-align:bottom; color:#2563eb !important; font-weight:bold; font-size:17px;\">$5$</td><td>$\\nearrow$</td></tr></table><div style=\"margin-top:10px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "GIÁ TRỊ CỰC ĐẠI NHỎ HƠN CỰC TIỂU LÀ BÌNH THƯỜNG",
      "startTime": 140.77,
      "endTime": 152.27,
      "duration": 11.5,
      "mascotMode": "cheer",
      "mascotTip": "Cực đại y_CĐ = 1 là điểm cao nhất trên nhánh trái, cực tiểu y_CT = 5 là điểm thấp nhất trên nhánh phải!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Đồ thị có tiệm cận đứng là $x = 1$ (tại đây có vạch kép $||$).<br>• Điểm cực đại là $A(0; 1)$, điểm cực tiểu là $B(2; 5)$.<br>• Giá trị cực đại $y_{CĐ} = 1$ nhỏ hơn giá trị cực tiểu $y_{CT} = 5$.<br>• Điều này hoàn toàn chính xác vì cực trị chỉ mang tính địa phương trong một khoảng lân cận, không phải là Giá trị lớn nhất hay Giá trị nhỏ nhất toàn cục.</p></div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI VỀ CỰC ĐẠI & CỰC TIỂU",
      "subtitle": "PHẦN 4: HOANG MANG KHI y_CĐ < y_CT",
      "startTime": 152.27,
      "endTime": 161.61,
      "duration": 9.34,
      "mascotMode": "magnifier",
      "mascotTip": "Đừng vội vàng sửa dấu đạo hàm khi thấy y_CĐ < y_CT! Với hàm bậc 2/1, điều này hoàn toàn tự nhiên!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi: Hoang mang khi thấy giá trị Cực đại nhỏ hơn Cực tiểu:</span><br>• Học sinh tính ra $y_{CĐ} = -1$ và $y_{CT} = 3$ rồi vội cho rằng mình tính sai và sửa lại bảng biến thiên $\\implies$ <b>SAI LẦM</b>!<br>• Nhớ rằng: Cực đại chỉ là đỉnh cao nhất trong <b>lân cận nhánh bên trái</b> của tiệm cận đứng. Nhánh bên phải tiệm cận đứng có thể vươn lên rất cao nên điểm cực tiểu của nó hoàn toàn có thể lớn hơn điểm cực đại của nhánh bên kia!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: TÂM ĐỐI XỨNG LÀ GIAO CỦA TCĐ VÀ TCX",
      "startTime": 161.61,
      "endTime": 170.57,
      "duration": 8.96,
      "mascotMode": "cheer",
      "mascotTip": "Tâm đối xứng I = Giao(TCĐ, TCX). Đồng thời I là trung điểm của 2 điểm cực trị!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Mẹo giải nhanh hàm phân thức bậc hai / bậc nhất:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">• <b>Mẹo 1:</b> Tâm đối xứng $I$ luôn là giao điểm của đường tiệm cận đứng và đường tiệm cận xiên.<br>• <b>Mẹo 2:</b> Nếu hàm số có 2 điểm cực trị $A(x_1; y_1)$ và $B(x_2; y_2)$ thì tâm đối xứng $I$ chính là trung điểm của đoạn thẳng $AB$: $$x_I = \\frac{x_1 + x_2}{2}, \\quad y_I = \\frac{y_1 + y_2}{2}$$Giúp tìm cực trị hoặc tâm đối xứng chỉ trong 2 giây!</div>"
    }
  ]
},

    bai4_muc4: {
  "lessonId": "bai4",
  "lessonTitle": "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
  "sectionId": "bai4_muc3",
  "sectionTitle": "Mục 3: Hàm phân thức bậc hai / bậc nhất y = (ax²+bx+c)/(px+q)",
  "audio": "/audio/bai4_muc3.mp3",
  "audioSrc": "./audio/bai4_muc3.mp3",
  "audio_src": "./audio/bai4_muc3.mp3",
  "timestamp_src": "timestamps/bai4_muc3.json",
  "totalDuration": 170.57,
  "duration": 170.57,
  "title": "Mục 3: Hàm phân thức bậc hai / bậc nhất y = (ax²+bx+c)/(px+q)",
  "owl_tip": "Dạng mới GDPT 2018: Chia tử cho mẫu y = a_1 x + b_1 + r/(px+q). Tiệm cận xiên là y = a_1 x + b_1!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 35.28,
      "id": "part2"
    },
    {
      "time": 51.39,
      "id": "part3"
    },
    {
      "time": 54.96,
      "id": "vd1_q"
    },
    {
      "time": 69.64,
      "id": "vd1_a"
    },
    {
      "time": 94.47,
      "id": "vd2_q"
    },
    {
      "time": 106.91,
      "id": "vd2_a"
    },
    {
      "time": 125.57,
      "id": "vd3_q"
    },
    {
      "time": 140.77,
      "id": "vd3_a"
    },
    {
      "time": 152.27,
      "id": "part4"
    },
    {
      "time": 161.61,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Khái niệm & Sơ đồ khảo sát</h3>\n        <p>Hàm số: $y = \\frac{ax^2+bx+c}{px+q} \\, (p \\neq 0)$<br>\n        <b>Bước 1:</b> $D = \\mathbb{R} \\setminus \\left\\{-\\frac{q}{p}\\right\\}$.<br>\n        <b>Bước 2:</b> Chia đa thức: $y = a_1 x + b_1 + \\frac{r}{px+q}$.<br>\n        + TCĐ: $x = -\\frac{q}{p}$; TCX: $y = a_1 x + b_1$. Tâm đối xứng $I$ là giao điểm 2 tiệm cận.<br>\n        <b>Bước 3:</b> Tính $y'$, lập BBT và vẽ đồ thị.</p>\n      </div>\n      <div id=\"part2\"><h3>2. Các dạng đồ thị</h3>\n        <p>Đồ thị có 2 điểm cực trị nằm về 2 phía tiệm cận đứng. Giá trị $y_{CĐ}$ có thể nhỏ hơn $y_{CT}$.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ điển hình</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Khảo sát hàm số $y = \\frac{x^2-x+1}{x-1}$.<br><i>(Thời gian làm nháp: 30s)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> Chia đa thức: $y = x + \\frac{1}{x-1}$. TCĐ: $x = 1$, TCX: $y = x$, $I(1; 1)$. CĐ $(0; -1)$, CT $(2; 3)$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Tìm tâm đối xứng $I$ của $y = \\frac{2x^2+x-3}{x+1}$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> TCĐ: $x = -1$, TCX: $y = 2x - 1$. Thay $x = -1 \\Rightarrow y = -3$. Tâm đối xứng <b>$I(-1; -3)$</b>.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Đọc BBT hàm phân thức bậc 2 trên bậc 1 có TCĐ $x = 1$, CĐ $(0; 1)$ và CT $(2; 5)$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> TCĐ là $x = 1$. Cực đại có tung độ $y = 1$ nhỏ hơn cực tiểu $y = 5$.\n        </div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Hoang mang khi thấy giá trị cực đại nhỏ hơn cực tiểu.</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Tâm đối xứng $I$ luôn là giao điểm của tiệm cận đứng và tiệm cận xiên.</p></div>\n    ",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm & Sơ đồ khảo sát",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Các dạng đồ thị",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ điển hình (3 Ví dụ)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Bẫy đề thi",
      "scenes": [
        9
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo Thầy Cú",
      "scenes": [
        10
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 4: HÀM PHÂN THỨC BẬC HAI / BẬC NHẤT",
      "subtitle": "PHẦN 1: SƠ ĐỒ KHẢO SÁT & TIỆM CẬN XIÊN",
      "startTime": 0.0,
      "endTime": 35.28,
      "duration": 35.28,
      "mascotMode": "pointer",
      "mascotTip": "Dạng mới GDPT 2018: Chia tử cho mẫu y = a_1 x + b_1 + r/(px+q). Tiệm cận xiên là y = a_1 x + b_1!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Sơ đồ khảo sát hàm $y = \\frac{ax^2+bx+c}{px+q} \\quad (p \\neq 0)$</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Bước 1:</b> Tập xác định: $D = \\mathbb{R} \\setminus \\left\\{-\\frac{q}{p}\\right\\}$.<br>• <b>Bước 2:</b> Chia đa thức tử cho mẫu:<br>$$y = a_1 x + b_1 + \\frac{r}{px+q}$$<br>&emsp;+ <b>Tiệm cận đứng:</b> $x = -\\frac{q}{p}$.<br>&emsp;+ <b>Tiệm cận xiên:</b> $y = a_1 x + b_1$.<br>&emsp;+ <b>Tâm đối xứng $I$:</b> Là giao điểm của tiệm cận xiên và tiệm cận đứng.<br>• <b>Bước 3:</b> Tính $y'$, lập bảng biến thiên và vẽ đồ thị hypebol xiên.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "CÁC DẠNG ĐỒ THỊ BẬC HAI / BẬC NHẤT",
      "subtitle": "PHẦN 2: ĐẶC ĐIỂM CỰC TRỊ VÀ HAI NHÁNH ĐỒ THỊ",
      "startTime": 35.28,
      "endTime": 54.96,
      "duration": 19.68,
      "mascotMode": "pointer",
      "mascotTip": "Đồ thị có 2 cực trị nằm về 2 phía của tiệm cận đứng. Giá trị Cực đại CÓ THỂ NHỎ HƠN Cực tiểu!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Các dạng đồ thị phân thức bậc hai / bậc nhất</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Trường hợp 1:</b> Phương trình $y' = 0$ có 2 nghiệm phân biệt:<br>&emsp;+ Đồ thị có 2 điểm cực trị nằm về hai phía của đường tiệm cận đứng.<br>&emsp;+ Tâm đối xứng $I$ chính là trung điểm của đoạn thẳng nối 2 điểm cực trị!<br>&emsp;+ <b>Hiện tượng đặc biệt:</b> Giá trị cực đại $y_{CĐ}$ có thể <b>nhỏ hơn</b> giá trị cực tiểu $y_{CT}$.<br>• <b>Trường hợp 2:</b> Phương trình $y' = 0$ vô nghiệm:<br>&emsp;+ Hàm số luôn đơn điệu trên từng khoảng xác định và không có cực trị.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: KHẢO SÁT & VẼ ĐỒ THỊ",
      "subtitle": "y = (x^2 - x + 1) / (x - 1)",
      "startTime": 54.96,
      "endTime": 69.64,
      "duration": 14.68,
      "mascotMode": "pointer",
      "mascotTip": "Chia đa thức: (x^2 - x + 1)/(x - 1) = x + 1/(x - 1). TCĐ x = 1, TCX y = x!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Khảo sát sự biến thiên và vẽ đồ thị hàm số: $$y = \\frac{x^2 - x + 1}{x - 1}$$<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian làm nháp: 30 giây</b><br><i>(Chia tử cho mẫu, tìm TCĐ, TCX và giải y' = 0...)</i></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT & BẢNG BIẾN THIÊN",
      "subtitle": "CỰC ĐẠI (0; -1), CỰC TIỂU (2; 3), TÂM ĐỐI XỨNG I(1; 1)",
      "startTime": 69.64,
      "endTime": 94.47,
      "duration": 24.83,
      "mascotMode": "cheer",
      "mascotTip": "y_CĐ = -1 nhỏ hơn y_CT = 3! Đây là bản chất hoàn toàn tự nhiên vì cực trị mang tính địa phương!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• $D = \\mathbb{R} \\setminus \\{1\\}$. Chia đa thức: $y = x + \\frac{1}{x - 1}$.<br>• TCĐ: $x = 1$; Tiệm cận xiên: $y = x$. Tâm đối xứng $I(1; 1)$.<br>• $y' = 1 - \\frac{1}{(x-1)^2} = \\frac{x(x-2)}{(x-1)^2} = 0 \\iff x = 0$ hoặc $x = 2$.<br>• Cực đại tại $(0; -1)$, Cực tiểu tại $(2; 3)$. Trung điểm của 2 cực trị chính là $I(1; 1)$.</p></div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: TÌM TÂM ĐỐI XỨNG CỦA ĐỒ THỊ",
      "subtitle": "y = (2x^2 + x - 3) / (x + 1)",
      "startTime": 94.47,
      "endTime": 106.91,
      "duration": 12.44,
      "mascotMode": "pointer",
      "mascotTip": "Chia tử cho mẫu: thương là 2x - 1. Thay x = -1 vào TCX tìm tung độ y = -3!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Tìm tọa độ tâm đối xứng $I$ của đồ thị hàm số: $$y = \\frac{2x^2+x-3}{x+1}$$<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b><br><i>(Tìm giao điểm của Tiệm cận đứng và Tiệm cận xiên...)</i></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "TÂM ĐỐI XỨNG I(-1; -3)",
      "startTime": 106.91,
      "endTime": 125.57,
      "duration": 18.66,
      "mascotMode": "cheer",
      "mascotTip": "TCĐ x = -1, TCX y = 2x - 1 -> Giao điểm là I(-1; -3)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Nghiệm của mẫu số: $x + 1 = 0 \\implies$ Tiệm cận đứng là $x = -1$.<br>• Thực hiện phép chia đa thức tử cho mẫu:<br>$$2x^2 + x - 3 = (x + 1)(2x - 1) - 2 \\implies y = 2x - 1 - \\frac{2}{x+1}$$<br>$\\implies$ Đường tiệm cận xiên là <b>$y = 2x - 1$</b>.<br>• Thay hoành độ $x = -1$ vào phương trình TCX: $y = 2(-1) - 1 = -3$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> Tâm đối xứng của đồ thị là <b>$I(-1; -3)$</b>.</p></div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: ĐỌC BBT HÀM BẬC HAI / BẬC NHẤT",
      "subtitle": "TCĐ x = 1, CỰC ĐẠI (0; 1), CỰC TIỂU (2; 5)",
      "startTime": 125.57,
      "endTime": 140.77,
      "duration": 15.2,
      "mascotMode": "magnifier",
      "mascotTip": "Quan sát kỹ BBT: y_CĐ = 1 nhỏ hơn y_CT = 5 vì 2 nhánh nằm về 2 phía TCĐ!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:20px; line-height:1.5; color:#f8fafc;\"><b>Ví dụ 3:</b> Đọc bảng biến thiên của hàm phân thức bậc 2 trên bậc 1 sau:<table style=\"width:100%; max-width:440px; border-collapse:collapse; text-align:center; background:#ffffff !important; color:#111827 !important; border:2px solid #374151; margin:12px auto; font-size:15px; font-weight:600;\"><tr style=\"border-bottom:1.5px solid #374151;\"><td style=\"width:45px; border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$x$</td><td style=\"padding:6px; color:#111827 !important;\">$-\\infty$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$0$</td><td></td><td style=\"padding:6px; color:#111827 !important; background:#fee2e2;\">$1$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$2$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$+\\infty$</td></tr><tr style=\"border-bottom:1.5px solid #374151;\"><td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y'$</td><td></td><td style=\"color:#2563eb !important; font-size:16px;\">$+$</td><td>$0$</td><td style=\"color:#dc2626 !important; font-size:16px;\">$-$</td><td style=\"color:#dc2626 !important; font-weight:bold;\">$||$</td><td style=\"color:#dc2626 !important; font-size:16px;\">$-$</td><td>$0$</td><td style=\"color:#2563eb !important; font-size:16px;\">$+$</td><td></td></tr><tr style=\"height:65px;\"><td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y$</td><td style=\"vertical-align:bottom; padding:6px; color:#111827 !important;\">$-\\infty$</td><td>$\\nearrow$</td><td style=\"vertical-align:top; color:#dc2626 !important; font-weight:bold; font-size:17px;\">$1$</td><td>$\\searrow$</td><td style=\"color:#dc2626 !important; font-weight:bold;\">$||$</td><td style=\"vertical-align:top; color:#111827 !important;\">$+\\infty$</td><td>$\\searrow$</td><td style=\"vertical-align:bottom; color:#2563eb !important; font-weight:bold; font-size:17px;\">$5$</td><td>$\\nearrow$</td></tr></table><div style=\"margin-top:10px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "GIÁ TRỊ CỰC ĐẠI NHỎ HƠN CỰC TIỂU LÀ BÌNH THƯỜNG",
      "startTime": 140.77,
      "endTime": 152.27,
      "duration": 11.5,
      "mascotMode": "cheer",
      "mascotTip": "Cực đại y_CĐ = 1 là điểm cao nhất trên nhánh trái, cực tiểu y_CT = 5 là điểm thấp nhất trên nhánh phải!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Đồ thị có tiệm cận đứng là $x = 1$ (tại đây có vạch kép $||$).<br>• Điểm cực đại là $A(0; 1)$, điểm cực tiểu là $B(2; 5)$.<br>• Giá trị cực đại $y_{CĐ} = 1$ nhỏ hơn giá trị cực tiểu $y_{CT} = 5$.<br>• Điều này hoàn toàn chính xác vì cực trị chỉ mang tính địa phương trong một khoảng lân cận, không phải là Giá trị lớn nhất hay Giá trị nhỏ nhất toàn cục.</p></div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI VỀ CỰC ĐẠI & CỰC TIỂU",
      "subtitle": "PHẦN 4: HOANG MANG KHI y_CĐ < y_CT",
      "startTime": 152.27,
      "endTime": 161.61,
      "duration": 9.34,
      "mascotMode": "magnifier",
      "mascotTip": "Đừng vội vàng sửa dấu đạo hàm khi thấy y_CĐ < y_CT! Với hàm bậc 2/1, điều này hoàn toàn tự nhiên!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi: Hoang mang khi thấy giá trị Cực đại nhỏ hơn Cực tiểu:</span><br>• Học sinh tính ra $y_{CĐ} = -1$ và $y_{CT} = 3$ rồi vội cho rằng mình tính sai và sửa lại bảng biến thiên $\\implies$ <b>SAI LẦM</b>!<br>• Nhớ rằng: Cực đại chỉ là đỉnh cao nhất trong <b>lân cận nhánh bên trái</b> của tiệm cận đứng. Nhánh bên phải tiệm cận đứng có thể vươn lên rất cao nên điểm cực tiểu của nó hoàn toàn có thể lớn hơn điểm cực đại của nhánh bên kia!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: TÂM ĐỐI XỨNG LÀ GIAO CỦA TCĐ VÀ TCX",
      "startTime": 161.61,
      "endTime": 170.57,
      "duration": 8.96,
      "mascotMode": "cheer",
      "mascotTip": "Tâm đối xứng I = Giao(TCĐ, TCX). Đồng thời I là trung điểm của 2 điểm cực trị!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Mẹo giải nhanh hàm phân thức bậc hai / bậc nhất:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">• <b>Mẹo 1:</b> Tâm đối xứng $I$ luôn là giao điểm của đường tiệm cận đứng và đường tiệm cận xiên.<br>• <b>Mẹo 2:</b> Nếu hàm số có 2 điểm cực trị $A(x_1; y_1)$ và $B(x_2; y_2)$ thì tâm đối xứng $I$ chính là trung điểm của đoạn thẳng $AB$: $$x_I = \\frac{x_1 + x_2}{2}, \\quad y_I = \\frac{y_1 + y_2}{2}$$Giúp tìm cực trị hoặc tâm đối xứng chỉ trong 2 giây!</div>"
    }
  ]
},

    // =========================================================================
    bai5_muc1: {
      lessonId: "bai5",
      lessonTitle: "Bài 5: Ứng dụng đạo hàm giải quyết bài toán thực tiễn",
      sectionId: "bai5_muc1",
      sectionTitle: "Mục 1: Tối ưu hóa hình học & đời sống (hộp, diện tích, chi phí)",
      audioSrc: "./audio/bai5_muc1.mp3",
      totalDuration: 295.0,
      audio_src: "./audio/bai5_muc1.mp3",
      timestamp_src: "timestamps/bai5_muc1.json",
      title: "Mục 1: Tối ưu hóa hình học (Gấp hộp thể tích cực đại & Tiết kiệm vật liệu)",
      owl_tip: "3 Bước mô hình hóa: 1. Đặt ẩn phụ x (chú ý điều kiện hình học) -> 2. Thiết lập hàm f(x) -> 3. Tìm Max/Min bằng đạo hàm!",
      parts: [
        { partNumber: 1, partTitle: "Phần 1: Quy trình mô hình hóa toán học", scenes: [1] },
        { partNumber: 2, partTitle: "Phần 2: Bài toán gấp hộp thể tích cực đại", scenes: [2] },
        { partNumber: 3, partTitle: "Phần 3: Bài toán tối ưu chi phí làm bể nước", scenes: [3] },
        { partNumber: 4, partTitle: "Phần 4: Mascot Cú soi bẫy điều kiện cạnh", scenes: [4] }
      ],
      scenes: [
        {
          sceneIndex: 1,
          title: "QUY TRÌNH 3 BƯỚC GIẢI BÀI TOÁN TỐI ƯU THỰC TẾ",
          subtitle: "MỤC 1 • MÔ HÌNH HÓA TOÁN HỌC CHUẨN MỰC",
          startTime: 0.0,
          endTime: 70.0,
          duration: 70.0,
          mascotMode: "pointer",
          mascotTip: "<b>Cú nhắc:</b> Bước đặt ẩn x bắt buộc phải tìm điều kiện thực tế (ví dụ: x phải nhỏ hơn nửa cạnh của tấm tôn)!",
          bodyHtml: `
            <div style="font-size:22px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              <b>Bước 1: Thiết lập mô hình toán học:</b><br>
              • Chọn một đại lượng biến thiên làm biến số $x$. Tìm điều kiện thực tế của $x$ ($x \\in (a; b)$).<br>
              • Biểu diễn đại lượng cần tối ưu (thể tích, diện tích, chi phí...) thành hàm số $y = f(x)$.<br>
              <b>Bước 2: Tìm giá trị lớn nhất / nhỏ nhất:</b><br>
              • Sử dụng công cụ đạo hàm để khảo sát hàm số $f(x)$ trên khoảng điều kiện.<br>
              • Tìm nghiệm của $f'(x) = 0$ và lập bảng biến thiên.<br>
              <b>Bước 3: Trả lời yêu cầu thực tế:</b> Đối chiếu nghiệm và kết luận bài toán.
            </div>
          `
        },
        {
          sceneIndex: 2,
          title: "BÀI TOÁN KINH ĐIỂN: GẤP HỘP KHÔNG NẮP THỂ TÍCH MAX",
          subtitle: "MỤC 1 • TỪ TẤM TÔN VUÔNG CẠNH a = 60cm",
          startTime: 70.0,
          endTime: 150.0,
          duration: 80.0,
          mascotMode: "pointer",
          mascotTip: "<b>Bí quyết:</b> Cắt 4 góc vuông cạnh x. Đáy là hình vuông cạnh (60 - 2x), chiều cao là x!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:6px;">
              <b>Đề bài:</b> Một người muốn làm hộp không nắp từ tấm tôn vuông cạnh $60\\text{cm}$ bằng cách cắt 4 hình vuông cạnh $x$ ở 4 góc rồi gập lên. Tìm $x$ để thể tích hộp lớn nhất.
            </div>
            <div style="font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              • Điều kiện: $0 < x < 30$.<br>
              • Kích thước đáy: Cạnh $60 - 2x$; Chiều cao hộp: $x$.<br>
              • Thể tích: $V(x) = x(60 - 2x)^2 = 4x(30 - x)^2 = 4(x^3 - 60x^2 + 900x)$.<br>
              • Đạo hàm: $V'(x) = 4(3x^2 - 120x + 900) = 12(x^2 - 40x + 300) = 0 \\iff x = 10$ hoặc $x = 30$ (loại).<br>
              • <b>Kết luận:</b> Cắt ở mỗi góc một hình vuông cạnh $x = 10\\text{cm}$ thì thể tích đạt cực đại $V_{\\max} = 16000\\text{cm}^3 = 16\\text{ lít}$.
            </div>
          `
        },
        {
          sceneIndex: 3,
          title: "BÀI TOÁN TỐI ƯU CHI PHÍ LÀM BỂ NƯỚC",
          subtitle: "MỤC 1 • KẾT HỢP GIÁ VẬT LIỆU ĐÁY VÀ THÀNH BỂ",
          startTime: 150.0,
          endTime: 220.0,
          duration: 70.0,
          mascotMode: "magnifier",
          mascotTip: "<b>Mẹo giải:</b> Chi phí = (Diện tích đáy × Giá đáy) + (Diện tích xung quanh × Giá thành)!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:6px;">
              <b>Mô hình bài toán chi phí:</b> Xây bể hình hộp chữ nhật thể tích $V_0$ cố định:
            </div>
            <div style="font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              • Đáy hình vuông cạnh $x$, chiều cao $h = \\frac{V_0}{x^2}$.<br>
              • Diện tích đáy: $S_{\\text{đáy}} = x^2$. Diện tích xung quanh: $S_{xq} = 4xh = 4x \\cdot \\frac{V_0}{x^2} = \\frac{4V_0}{x}$.<br>
              • Tổng chi phí: $C(x) = c_1 x^2 + c_2 \\frac{4V_0}{x}$.<br>
              • Lấy đạo hàm $C'(x) = 2c_1 x - \\frac{4c_2 V_0}{x^2} = 0 \\iff x = \\sqrt[3]{\\frac{2c_2 V_0}{c_1}}$.<br>
              • Đây chính là kích thước đáy để tiết kiệm ngân sách nhất.
            </div>
          `
        },
        {
          sceneIndex: 4,
          title: "CÚ THÔNG THÁI CẢNH BÁO BẪY ĐƠN VỊ ĐO LƯỜNG",
          subtitle: "MỤC 1 • ĐỔI ĐỒNG NHẤT GIỮA CM, M VÀ LÍT",
          startTime: 220.0,
          endTime: 295.0,
          duration: 75.0,
          mascotMode: "cheer",
          mascotTip: "<b>Cú nhắc:</b> $1\\text{m}^3 = 1000\\text{ lít} = 1000\\text{dm}^3 = 1000000\\text{cm}^3$. Rất nhiều bạn quên đổi đơn vị dẫn đến đáp số sai hàng triệu lần!",
          bodyHtml: `
            <div class="trap-warning-box" style="margin-top:10px; padding:12px 18px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:22px !important; line-height:1.5; font-weight:600; color:#fecdd3;">
              <span class="trap-title" style="font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-right:4px;">Bẫy đề thi:</span> Nhầm lẫn đơn vị giữa mét và lít:<br>
              • Khi đề cho thể tích bể $V = 10\\text{m}^3$ mà chi phí xây tính theo $\\text{nghìn đồng/m}^2$, nếu bài hỏi ra lít thì phải nhớ nhân với $1000$.<br>
              • Luôn thống nhất đưa về cùng một đơn vị chuẩn trước khi thiết lập hàm số!
            </div>
          `
        }
      ]
    },

    bai5_muc2: {
      lessonId: "bai5",
      lessonTitle: "Bài 5: Ứng dụng đạo hàm giải quyết bài toán thực tiễn",
      sectionId: "bai5_muc2",
      sectionTitle: "Mục 2: Tối ưu hóa kinh tế (doanh thu, lợi nhuận, chi phí)",
      audioSrc: "./audio/bai5_muc2.mp3",
      totalDuration: 285.0,
      audio_src: "./audio/bai5_muc2.mp3",
      timestamp_src: "timestamps/bai5_muc2.json",
      title: "Mục 2: Tối ưu hóa kinh tế (Hàm doanh thu, chi phí, lợi nhuận cực đại)",
      owl_tip: "Quy tắc kinh tế vi mô: Lợi nhuận P(x) = Doanh thu R(x) - Chi phí C(x). Điểm tối ưu lợi nhuận khi Doanh thu biên = Chi phí biên (R'=C')!",
      parts: [
        { partNumber: 1, partTitle: "Phần 1: Các khái niệm kinh tế cơ bản", scenes: [1] },
        { partNumber: 2, partTitle: "Phần 2: Bài toán tối đa hóa lợi nhuận", scenes: [2] },
        { partNumber: 3, partTitle: "Phần 3: Bài toán định giá vé máy bay/xe khách", scenes: [3] },
        { partNumber: 4, partTitle: "Phần 4: Mascot Cú soi bẫy nghiệm không nguyên", scenes: [4] }
      ],
      scenes: [
        {
          sceneIndex: 1,
          title: "CÁC HÀM SỐ KINH TẾ CƠ BẢN",
          subtitle: "MỤC 2 • DOANH THU, CHI PHÍ VÀ LỢI NHUẬN",
          startTime: 0.0,
          endTime: 70.0,
          duration: 70.0,
          mascotMode: "pointer",
          mascotTip: "<b>Khái niệm biên (Marginal):</b> Đạo hàm của hàm tổng được gọi là đại lượng 'biên' trong kinh tế học!",
          bodyHtml: `
            <div style="font-size:22px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              Gọi $x$ là số lượng sản phẩm sản xuất và bán ra ($x \\ge 0$):<br>
              • <b>Hàm cầu (Giá bán):</b> $p = p(x)$ là đơn giá của mỗi sản phẩm.<br>
              • <b>Hàm Doanh thu:</b> $R(x) = x \\cdot p(x)$ (Số lượng nhân đơn giá).<br>
              • <b>Hàm Chi phí:</b> $C(x)$ là tổng chi phí để sản xuất $x$ sản phẩm.<br>
              • <b>Hàm Lợi nhuận:</b> $P(x) = R(x) - C(x)$ (Doanh thu trừ Chi phí).<br>
              • <b>Nguyên lý tối ưu:</b> Lợi nhuận tối đa khi $P'(x) = 0 \\iff R'(x) = C'(x)$ (Doanh thu biên bằng Chi phí biên).
            </div>
          `
        },
        {
          sceneIndex: 2,
          title: "VÍ DỤ TÌM SỐ SẢN PHẨM ĐỂ LỢI NHUẬN TỐI ĐA",
          subtitle: "MỤC 2 • BÀI TOÁN DOANH NGHIỆP ĐIỂN HÌNH",
          startTime: 70.0,
          endTime: 145.0,
          duration: 75.0,
          mascotMode: "pointer",
          mascotTip: "<b>Cú nhắc:</b> x phải là số nguyên dương (sản phẩm nguyên chiếc)!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:6px;">
              <b>Đề bài:</b> Một xưởng sản xuất $x$ chiếc xe đạp mỗi ngày với giá bán $p(x) = 500 - 2x$ (nghìn đồng) và chi phí sản xuất $C(x) = x^2 + 80x + 1200$ (nghìn đồng). Tìm $x$ để lợi nhuận cao nhất.
            </div>
            <div style="font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              • Doanh thu: $R(x) = x(500 - 2x) = -2x^2 + 500x$.<br>
              • Lợi nhuận: $P(x) = R(x) - C(x) = (-2x^2 + 500x) - (x^2 + 80x + 1200) = -3x^2 + 420x - 1200$.<br>
              • Đạo hàm: $P'(x) = -6x + 420 = 0 \\iff x = 70$.<br>
              • Vì $P(x)$ là tam thức bậc hai có $a = -3 < 0$, đồ thị là parabol bề lõm quay xuống.<br>
              • <b>Kết luận:</b> Mỗi ngày sản xuất $70$ chiếc xe đạp thì lợi nhuận lớn nhất đạt $13500\\text{ nghìn đồng} = 13,5\\text{ triệu đồng}$.
            </div>
          `
        },
        {
          sceneIndex: 3,
          title: "BÀI TOÁN GIẢM GIÁ VÉ ĐỂ TĂNG KHÁCH",
          subtitle: "MỤC 2 • QUY LUẬT CUNG CẦU THỰC TẾ",
          startTime: 145.0,
          endTime: 215.0,
          duration: 70.0,
          mascotMode: "magnifier",
          mascotTip: "<b>Mô hình:</b> Cứ giảm giá x nghìn đồng thì số khách tăng thêm k người. Doanh thu = (Giá mới) × (Số khách mới)!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:6px;">
              <b>Mô hình giảm giá:</b> Giá vé hiện tại $p_0$, số khách $n_0$.
            </div>
            <div style="font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              • Cứ giảm $10$ nghìn đồng giá vé thì lượng khách tăng thêm $20$ người.<br>
              • Gọi $x$ là số lần giảm $10$ nghìn đồng ($x > 0$):<br>
              $\\quad +$ Giá vé mới: $p(x) = p_0 - 10x$.<br>
              $\\quad +$ Số khách mới: $n(x) = n_0 + 20x$.<br>
              • Doanh thu: $R(x) = (p_0 - 10x)(n_0 + 20x) = -200x^2 + (20p_0 - 10n_0)x + p_0 n_0$.<br>
              • Đây là hàm bậc hai, đỉnh parabol cho ta số lần giảm giá tối ưu nhất.
            </div>
          `
        },
        {
          sceneIndex: 4,
          title: "CÚ THÔNG THÁI CẢNH BÁO BẪY SỐ NGUYÊN",
          subtitle: "MỤC 2 • KHI ĐỈNH PARABOL LÀ SỐ THẬP PHÂN",
          startTime: 215.0,
          endTime: 285.0,
          duration: 70.0,
          mascotMode: "cheer",
          mascotTip: "<b>Mẹo làm tròn:</b> Nếu x_0 = 12,4 chiếc máy, phải so sánh lợi nhuận tại 2 số nguyên liền kề x = 12 và x = 13!",
          bodyHtml: `
            <div class="trap-warning-box" style="margin-top:10px; padding:12px 18px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:22px !important; line-height:1.5; font-weight:600; color:#fecdd3;">
              <span class="trap-title" style="font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-right:4px;">Bẫy đề thi:</span> Sản phẩm thực tế bắt buộc phải là số tự nhiên $x \\in \\mathbb{N}^*$:<br>
              • Khi giải đạo hàm ra nghiệm lẻ như $x = 15,35$ sản phẩm, không được vội vàng làm tròn theo thói quen học đường.<br>
              • Bắt buộc tính thử $P(15)$ và $P(16)$, số nào cho lợi nhuận lớn hơn thì chọn số đó!
            </div>
          `
        }
      ]
    },

    bai5_muc3: {
      lessonId: "bai5",
      lessonTitle: "Bài 5: Ứng dụng đạo hàm giải quyết bài toán thực tiễn",
      sectionId: "bai5_muc3",
      sectionTitle: "Mục 3: Ứng dụng trong vật lý (vận tốc v(t)=s', gia tốc a(t)=v'')",
      audioSrc: "./audio/bai5_muc3.mp3",
      totalDuration: 280.0,
      audio_src: "./audio/bai5_muc3.mp3",
      timestamp_src: "timestamps/bai5_muc3.json",
      title: "Mục 3: Ứng dụng đạo hàm trong chuyển động vật lý (Vận tốc & Gia tốc)",
      owl_tip: "Ghi nhớ hệ thống đạo hàm 2 cấp: v(t) = s'(t) (vận tốc là đạo hàm quãng đường); a(t) = v'(t) = s''(t) (gia tốc là đạo hàm vận tốc)!",
      parts: [
        { partNumber: 1, partTitle: "Phần 1: Ý nghĩa vật lý của đạo hàm", scenes: [1] },
        { partNumber: 2, partTitle: "Phần 2: Bài toán tìm vận tốc lớn nhất", scenes: [2] },
        { partNumber: 3, partTitle: "Phần 3: Thời điểm vật dừng lại hoặc đổi chiều", scenes: [3] },
        { partNumber: 4, partTitle: "Phần 4: Mascot Cú soi bẫy thời điểm t ≥ 0", scenes: [4] }
      ],
      scenes: [
        {
          sceneIndex: 1,
          title: "Ý NGHĨA VẬT LÝ CỦA ĐẠO HÀM CẤP 1 VÀ CẤP 2",
          subtitle: "MỤC 3 • CHUYỂN ĐỘNG THẲNG BIẾN ĐỔI",
          startTime: 0.0,
          endTime: 70.0,
          duration: 70.0,
          mascotMode: "pointer",
          mascotTip: "<b>Cú nhắc:</b> Vận tốc tức thời là đạo hàm bậc nhất của quãng đường; Gia tốc tức thời là đạo hàm bậc nhất của vận tốc!",
          bodyHtml: `
            <div style="font-size:22px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              Xét chất điểm chuyển động với phương trình quãng đường $s = s(t)$ (với $t \\ge 0$ là thời gian):<br>
              • <b>Vận tốc tức thời tại thời điểm $t$:</b><br>
              $$v(t) = s'(t) = \\lim_{\\Delta t \\to 0} \\frac{s(t + \\Delta t) - s(t)}{\\Delta t}.$$<br>
              • <b>Gia tốc tức thời tại thời điểm $t$:</b><br>
              $$a(t) = v'(t) = s''(t).$$<br>
              • <b>Vật dừng lại hoặc chuyển hướng:</b> Khi vận tốc triệt tiêu $v(t) = 0$.
            </div>
          `
        },
        {
          sceneIndex: 2,
          title: "VÍ DỤ TÌM VẬN TỐC LỚN NHẤT CỦA VẬT",
          subtitle: "MỤC 3 • CHUYỂN ĐỘNG VỚI QUÃNG ĐƯỜNG BẬC BA",
          startTime: 70.0,
          endTime: 140.0,
          duration: 70.0,
          mascotMode: "pointer",
          mascotTip: "<b>Quy trình:</b> Muốn tìm Max của v(t), phải lấy đạo hàm của v(t) chính là gia tốc a(t) = 0!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:6px;">
              <b>Đề bài:</b> Một vật chuyển động theo quy luật $s(t) = -t^3 + 9t^2 + t$ ($s$ tính bằng mét, $t$ tính bằng giây). Tìm vận tốc lớn nhất của vật.
            </div>
            <div style="font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              • Hàm vận tốc: $v(t) = s'(t) = -3t^2 + 18t + 1$.<br>
              • Đây là tam thức bậc hai của $t$. Lấy đạo hàm tìm cực đại vận tốc:<br>
              $$v'(t) = a(t) = -6t + 18 = 0 \\iff t = 3\\text{ giây}.$$<br>
              • Tại thời điểm $t = 3\\text{s}$:<br>
              $$v_{\\max} = v(3) = -3(3^2) + 18(3) + 1 = -27 + 54 + 1 = 28\\text{ m/s}.$$<br>
              • <b>Kết luận:</b> Sau 3 giây kể từ lúc bắt đầu chuyển động, vật đạt vận tốc lớn nhất là $28\\text{ m/s}$.
            </div>
          `
        },
        {
          sceneIndex: 3,
          title: "BÀI TOÁN XÁC ĐỊNH THỜI ĐIỂM CHẠM ĐẤT",
          subtitle: "MỤC 3 • CHUYỂN ĐỘNG RƠI CỦA VẬT THỂ",
          startTime: 140.0,
          endTime: 210.0,
          duration: 70.0,
          mascotMode: "magnifier",
          mascotTip: "<b>Phân biệt:</b> 'Chạm đất' nghĩa là độ cao h(t) = 0; 'Đạt độ cao cực đại' nghĩa là vận tốc v(t) = 0!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:6px;">
              <b>Phân biệt 2 câu hỏi học sinh hay nhầm lẫn:</b>
            </div>
            <div style="font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              Một quả bóng được ném lên cao với độ cao $h(t) = -4,9t^2 + 20t + 1$ (mét):<br>
              • <b>Câu hỏi 1: Độ cao lớn nhất quả bóng đạt được?</b><br>
              $\\implies$ Giải $v(t) = h'(t) = -9,8t + 20 = 0 \\iff t \\approx 2,04\\text{s}$. Thay vào $h(2,04)$ ra độ cao cực đại.<br>
              • <b>Câu hỏi 2: Sau bao lâu quả bóng chạm đất?</b><br>
              $\\implies$ Cho $h(t) = 0 \\iff -4,9t^2 + 20t + 1 = 0 \\implies t \\approx 4,13\\text{s}$ (loại nghiệm âm).
            </div>
          `
        },
        {
          sceneIndex: 4,
          title: "CÚ THÔNG THÁI CẢNH BÁO BẪY THỜI GIAN ÂM",
          subtitle: "MỤC 3 • ĐIỀU KIỆN VẬT LÝ t ≥ 0",
          startTime: 210.0,
          endTime: 280.0,
          duration: 70.0,
          mascotMode: "cheer",
          mascotTip: "<b>Quy ước vật lý:</b> Thời gian t tính từ mốc t = 0 không bao giờ mang giá trị âm!",
          bodyHtml: `
            <div class="trap-warning-box" style="margin-top:10px; padding:12px 18px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:22px !important; line-height:1.5; font-weight:600; color:#fecdd3;">
              <span class="trap-title" style="font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-right:4px;">Bẫy đề thi:</span> Nghiệm của phương trình vận tốc hoặc quãng đường ra số âm:<br>
              • Phương trình giải ra $t_1 = -2$ và $t_2 = 4$.<br>
              • Tuyệt đối phải loại ngay nghiệm âm $t_1 = -2$ vì trong mô hình chuyển động thực tế, thời gian bắt đầu từ $t = 0$.<br>
              • Chỉ nhận các giá trị $t \\ge 0$.
            </div>
          `
        }
      ]
    },

    // =========================================================================
    // ÔN TẬP CHƯƠNG 1: ỨNG DỤNG ĐẠO HÀM (3 MỤC)
    // =========================================================================
    ontap_muc1: {
      lessonId: "ontap",
      lessonTitle: "Ôn tập Chương 1: Ứng dụng đạo hàm khảo sát hàm số",
      sectionId: "ontap_muc1",
      sectionTitle: "Mục 1: Sơ đồ tư duy liên kết công cụ đạo hàm",
      audioSrc: "./audio/ontap_muc1.mp3",
      totalDuration: 300.0,
      audio_src: "./audio/ontap_muc1.mp3",
      timestamp_src: "timestamps/ontap_muc1.json",
      title: "Mục 1: Sơ đồ tư duy tổng hợp toàn bộ 5 bài học Chương 1",
      owl_tip: "Đạo hàm là sợi chỉ đỏ xuyên suốt: Dấu đạo hàm cho Đơn điệu & Cực trị; Giới hạn cho Tiệm cận; Khảo sát kết hợp toàn bộ!",
      parts: [
        { partNumber: 1, partTitle: "Phần 1: Trục liên kết 5 bài học", scenes: [1] },
        { partNumber: 2, partTitle: "Phần 2: Ma trận câu hỏi thi tốt nghiệp", scenes: [2] },
        { partNumber: 3, partTitle: "Phần 3: Bảng tra cứu công thức vàng", scenes: [3] },
        { partNumber: 4, partTitle: "Phần 4: Mascot Cú đồng hành khen ngợi", scenes: [4] }
      ],
      scenes: [
        {
          sceneIndex: 1,
          title: "SƠ ĐỒ TƯ DUY TỔNG QUAN CHƯƠNG 1",
          subtitle: "MỤC 1 • MỐI QUAN HỆ HỮU CƠ GIỮA CÁC ĐƠN VỊ KIẾN THỨC",
          startTime: 0.0,
          endTime: 75.0,
          duration: 75.0,
          mascotMode: "pointer",
          mascotTip: "<b>Cú kết nối:</b> Đạo hàm f'(x) giải quyết Đơn điệu (Bài 1), Cực trị (Bài 1), GTLN/GTNN (Bài 2), Vẽ đồ thị (Bài 4) và Tối ưu (Bài 5)!",
          bodyHtml: `
            <div style="font-size:22px; line-height:1.7; color:#e2e8f0; margin-left:14px;">
              • <b>Bài 1 (Đơn điệu & Cực trị):</b> $f'(x) \\ge 0 \\implies$ Đồng biến; $f'(x) \\le 0 \\implies$ Nghịch biến; Đổi dấu $\\implies$ Cực trị.<br>
              • <b>Bài 2 (Giá trị lớn nhất, nhỏ nhất):</b> Tìm Max/Min trên đoạn $[a; b]$ hoặc trên khoảng $(a; b)$ thông qua BBT.<br>
              • <b>Bài 3 (Đường tiệm cận):</b> Tiệm cận đứng ($x \\to x_0$), Tiệm cận ngang ($x \\to \\pm\\infty$), Tiệm cận xiên ($x \\to \\pm\\infty$).<br>
              • <b>Bài 4 (Khảo sát & Đồ thị):</b> Tổng hợp tính chất thành bức tranh hình học hoàn chỉnh (Hàm bậc 3, phân thức 1/1, phân thức 2/1).<br>
              • <b>Bài 5 (Ứng dụng thực tiễn):</b> Mô hình hóa bài toán kinh tế, đời sống, chuyển động thành bài toán tìm Max/Min.
            </div>
          `
        },
        {
          sceneIndex: 2,
          title: "MA TRẬN CÂU HỎI THI TỐT NGHIỆP THPT CHƯƠNG 1",
          subtitle: "MỤC 1 • PHÂN BỐ CÂU HỎI THEO ĐỀ BỘ GD&ĐT",
          startTime: 75.0,
          endTime: 150.0,
          duration: 75.0,
          mascotMode: "pointer",
          mascotTip: "<b>Chiến lược:</b> Chương 1 chiếm khoảng 10 - 12 câu trong đề thi (khoảng 2.5 - 3.0 điểm). Bắt buộc phải ăn trọn điểm nhận biết và thông hiểu!",
          bodyHtml: `
            <table class="bbt-table" style="width:100%; max-width:96%; margin:8px auto; border-collapse:collapse; background:rgba(15,23,42,0.85); border-top:2.5px solid #cbd5e1; border-bottom:2.5px solid #cbd5e1;">
              <tr style="border-bottom:1.5px solid #64748b; background:rgba(30,41,59,0.7);">
                <th style="padding:8px; color:#fef08a; font-size:21px;">Chủ đề</th>
                <th style="padding:8px; color:#38bdf8; font-size:21px;">Nhận biết / Thông hiểu</th>
                <th style="padding:8px; color:#f43f5e; font-size:21px;">Vận dụng / VDC</th>
              </tr>
              <tr style="border-bottom:1px solid #334155;">
                <td style="padding:8px; color:#f8fafc; font-size:20px;">1. Đơn điệu & Cực trị</td>
                <td style="padding:8px; color:#cbd5e1; font-size:20px;">Đọc BBT, nhận diện điểm cực đại/tiểu</td>
                <td style="padding:8px; color:#cbd5e1; font-size:20px;">Bài toán chứa tham số $m$, hàm ẩn $f(u)$</td>
              </tr>
              <tr style="border-bottom:1px solid #334155;">
                <td style="padding:8px; color:#f8fafc; font-size:20px;">2. Max / Min & Tiệm cận</td>
                <td style="padding:8px; color:#cbd5e1; font-size:20px;">Tính Max/Min trên đoạn, đếm số tiệm cận</td>
                <td style="padding:8px; color:#cbd5e1; font-size:20px;">Tiệm cận đồ thị chứa căn phức tạp</td>
              </tr>
              <tr>
                <td style="padding:8px; color:#f8fafc; font-size:20px;">3. Đồ thị & Thực tế</td>
                <td style="padding:8px; color:#cbd5e1; font-size:20px;">Nhận dạng hình dáng đồ thị hàm số</td>
                <td style="padding:8px; color:#cbd5e1; font-size:20px;">Bài toán tối ưu chi phí, thể tích thực tế</td>
              </tr>
            </table>
          `
        },
        {
          sceneIndex: 3,
          title: "BẢNG TRA CỨU CÔNG THỨC GIẢI NHANH CHƯƠNG 1",
          subtitle: "MỤC 1 • CÔNG CỤ TỐI TÂN CỦA HỌC SINH THẦY THUẤN",
          startTime: 150.0,
          endTime: 225.0,
          duration: 75.0,
          mascotMode: "magnifier",
          mascotTip: "<b>Học thuộc nằm lòng:</b> Đạo hàm nhanh phân thức 1/1: ad - bc; phân thức 2/1: (ap)x^2 + 2(aq)x + (bq - cp)!",
          bodyHtml: `
            <div style="font-size:21px; line-height:1.7; color:#e2e8f0; margin-left:14px;">
              • Đạo hàm phân thức $y = \\frac{ax+b}{cx+d} \\implies y' = \\frac{ad - bc}{(cx+d)^2}$.<br>
              • Đạo hàm phân thức $y = \\frac{ax^2+bx+c}{px+q} \\implies y' = \\frac{ap \\cdot x^2 + 2aq \\cdot x + (bq - cp)}{(px+q)^2}$.<br>
              • Tọa độ tâm đối xứng đồ thị bậc 3: $x_0 = -\\frac{b}{3a}, \\; y_0 = f(x_0)$.<br>
              • Tiệm cận xiên của $y = \\frac{ax^2+bx+c}{px+q}$: $y = \\frac{a}{p}x + \\frac{bp - aq}{p^2}$.
            </div>
          `
        },
        {
          sceneIndex: 4,
          title: "CÚ THÔNG THÁI ĐỒNG HÀNH & TIẾP NĂNG LƯỢNG",
          subtitle: "MỤC 1 • TỰ TIN BƯỚC VÀO PHẦN LUYỆN TẬP PHÂN LOẠI",
          startTime: 225.0,
          endTime: 300.0,
          duration: 75.0,
          mascotMode: "cheer",
          mascotTip: "<b>Lời dặn dò:</b> Hãy bình tĩnh, đọc kỹ từng chữ trong đề, quan sát trục tọa độ và dấu ngoặc tròn/vuông để không bị mất điểm!",
          bodyHtml: `
            <div style="font-size:24px; color:#4ade80; font-weight:bold; margin-bottom:8px;">
              🎉 Chúc mừng các em đã nắm vững toàn bộ khung lý thuyết Chương 1!
            </div>
            <div style="font-size:22px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              • Các em đã làm chủ 5 bài học nền tảng quan trọng nhất trong học kỳ 1 Toán 12.<br>
              • Hãy tiếp tục theo dõi 2 mục ôn tập tiếp theo để luyện kỹ năng nhận dạng đồ thị chớp nhoáng và triệt tiêu toàn bộ bẫy đề thi!
            </div>
          `
        }
      ]
    },

    ontap_muc2: {
      lessonId: "ontap",
      lessonTitle: "Ôn tập Chương 1: Ứng dụng đạo hàm khảo sát hàm số",
      sectionId: "ontap_muc2",
      sectionTitle: "Mục 2: Kỹ năng nhận dạng đồ thị và bảng biến thiên",
      audioSrc: "./audio/ontap_muc2.mp3",
      totalDuration: 290.0,
      audio_src: "./audio/ontap_muc2.mp3",
      timestamp_src: "timestamps/ontap_muc2.json",
      title: "Mục 2: Kỹ năng nhận dạng đồ thị và BBT nhanh trong đề thi trắc nghiệm",
      owl_tip: "Thứ tự nhận diện: 1. Hình dáng tổng thể -> 2. Tiệm cận -> 3. Giao điểm với các trục tọa độ -> 4. Tọa độ điểm cực trị!",
      parts: [
        { partNumber: 1, partTitle: "Phần 1: Cây quyết định nhận dạng 3 loại hàm", scenes: [1] },
        { partNumber: 2, partTitle: "Phần 2: Bài tập thực hành nhận dạng nhanh", scenes: [2] },
        { partNumber: 3, partTitle: "Phần 3: Phân biệt đồ thị f(x), f'(x) và f''(x)", scenes: [3] },
        { partNumber: 4, partTitle: "Phần 4: Mascot Cú soi bẫy trục tọa độ", scenes: [4] }
      ],
      scenes: [
        {
          sceneIndex: 1,
          title: "CÂY QUYẾT ĐỊNH NHẬN DẠNG 3 LOẠI HÀM SỐ",
          subtitle: "MỤC 2 • LOẠI TRỪ PHƯƠNG ÁN TRONG 15 GIÂY",
          startTime: 0.0,
          endTime: 70.0,
          duration: 70.0,
          mascotMode: "pointer",
          mascotTip: "<b>Cây quyết định:</b> Có đường đứt nét tiệm cận không? Nếu không có -> Hàm bậc 3. Nếu có 2 đường vuông góc -> Hàm phân thức 1/1. Nếu có đường xiên -> Hàm phân thức 2/1!",
          bodyHtml: `
            <div style="font-size:22px; line-height:1.7; color:#e2e8f0; margin-left:14px;">
              • <b>Bước 1: Quan sát đường tiệm cận:</b><br>
              $\\quad +$ Đồ thị liền mạch, không có tiệm cận $\\implies$ Loại ngay các hàm phân thức, chọn <b>hàm bậc ba</b>.<br>
              $\\quad +$ Đồ thị có 1 đứng + 1 ngang $\\implies$ <b>Hàm phân thức $y = \\frac{ax+b}{cx+d}$</b>.<br>
              $\\quad +$ Đồ thị có 1 đứng + 1 xiên $\\implies$ <b>Hàm phân thức $y = \\frac{ax^2+bx+c}{px+q}$</b>.<br>
              • <b>Bước 2: Quan sát nhánh ngoài cùng bên phải:</b> Xác định dấu của hệ số $a$.<br>
              • <b>Bước 3: Giao điểm với trục tung $Oy$ ($x = 0$):</b> Đọc giá trị $y(0)$ để loại các đáp án sai hệ số tự do.
            </div>
          `
        },
        {
          sceneIndex: 2,
          title: "VÍ DỤ THỰC HÀNH LOẠI TRỪ ĐÁP ÁN",
          subtitle: "MỤC 2 • KỸ NĂNG XỬ LÝ 4 PHƯƠNG ÁN A, B, C, D",
          startTime: 70.0,
          endTime: 145.0,
          duration: 75.0,
          mascotMode: "pointer",
          mascotTip: "<b>Kỹ năng:</b> Đừng giải từ đầu đến cuối! Hãy tìm 1 đặc điểm mâu thuẫn để gạch bỏ từng phương án sai!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:6px;">
              <b>Ví dụ:</b> Đồ thị có hình chữ N, đi qua $(0; 1)$, có cực đại tại $(-1; 3)$ và cực tiểu tại $(1; -1)$:
            </div>
            <div style="font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              • Dáng chữ N $\\implies a > 0$. Gạch phương án có $a < 0$.<br>
              • Cắt $Oy$ tại $(0; 1) \\implies d = 1$. Gạch phương án có hệ số tự do khác 1.<br>
              • Có 2 điểm cực trị đối xứng qua $Oy$ $\\implies x_1 + x_2 = 0 \\implies b = 0$. Gạch phương án có $x^2$.<br>
              • Chỉ trong 10 giây ta khoanh ngay được hàm số chính xác là $y = x^3 - 3x + 1$!
            </div>
          `
        },
        {
          sceneIndex: 3,
          title: "PHÂN BIỆT ĐỒ THỊ f(x) VÀ ĐỒ THỊ f'(x)",
          subtitle: "MỤC 2 • BẢNG ĐỐI CHIẾU 2 BỨC TRANH HÌNH HỌC",
          startTime: 145.0,
          endTime: 215.0,
          duration: 70.0,
          mascotMode: "magnifier",
          mascotTip: "<b>Chìa khóa:</b> Cực trị của f(x) là GIAO ĐIỂM của f'(x) với trục Ox!",
          bodyHtml: `
            <table class="bbt-table" style="width:100%; max-width:96%; margin:8px auto; border-collapse:collapse; background:rgba(15,23,42,0.85); border-top:2.5px solid #cbd5e1; border-bottom:2.5px solid #cbd5e1;">
              <tr style="border-bottom:1.5px solid #64748b; background:rgba(30,41,59,0.7);">
                <th style="padding:8px; color:#fef08a; font-size:21px;">Thuộc tính</th>
                <th style="padding:8px; color:#38bdf8; font-size:21px;">Nếu là đồ thị $y = f(x)$</th>
                <th style="padding:8px; color:#4ade80; font-size:21px;">Nếu là đồ thị $y = f'(x)$</th>
              </tr>
              <tr style="border-bottom:1px solid #334155;">
                <td style="padding:8px; color:#f8fafc; font-size:20px;">Đồng biến</td>
                <td style="padding:8px; color:#cbd5e1; font-size:20px;">Đồ thị có nét <b>đi lên</b></td>
                <td style="padding:8px; color:#cbd5e1; font-size:20px;">Đồ thị nằm <b>phía trên trục $Ox$</b></td>
              </tr>
              <tr style="border-bottom:1px solid #334155;">
                <td style="padding:8px; color:#f8fafc; font-size:20px;">Nghịch biến</td>
                <td style="padding:8px; color:#cbd5e1; font-size:20px;">Đồ thị có nét <b>đi xuống</b></td>
                <td style="padding:8px; color:#cbd5e1; font-size:20px;">Đồ thị nằm <b>phía dưới trục $Ox$</b></td>
              </tr>
              <tr>
                <td style="padding:8px; color:#f8fafc; font-size:20px;">Điểm cực trị</td>
                <td style="padding:8px; color:#cbd5e1; font-size:20px;">Các đỉnh uốn lượn lồi / lõm</td>
                <td style="padding:8px; color:#cbd5e1; font-size:20px;">Điểm cắt xuyên qua trục $Ox$</td>
              </tr>
            </table>
          `
        },
        {
          sceneIndex: 4,
          title: "CÚ THÔNG THÁI CẢNH BÁO BẪY GỐC TỌA ĐỘ BỊ GIẤU",
          subtitle: "MỤC 2 • BẪY ĐỀ THI KHÔNG GHI RÕ SỐ TRÊN TRỤC",
          startTime: 215.0,
          endTime: 290.0,
          duration: 75.0,
          mascotMode: "cheer",
          mascotTip: "<b>Cú cảnh báo:</b> Luôn tìm gốc O(0; 0) trước tiên để xác định miền âm miền dương, tránh nhầm tiệm cận với trục tọa độ!",
          bodyHtml: `
            <div class="trap-warning-box" style="margin-top:10px; padding:12px 18px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:22px !important; line-height:1.5; font-weight:600; color:#fecdd3;">
              <span class="trap-title" style="font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-right:4px;">Bẫy đề thi:</span> Nhầm đường tiệm cận với trục tọa độ $Oxy$:<br>
              • Đề thi thường vẽ trục $Ox, Oy$ nét liền có mũi tên, còn đường tiệm cận nét đứt (hoặc nét mảnh).<br>
              • Nhiều bạn nhìn nhầm khoảng cách đến tiệm cận thành khoảng cách đến trục tọa độ, dẫn đến đọc sai dấu nghiệm!
            </div>
          `
        }
      ]
    },

    ontap_muc3: {
      lessonId: "ontap",
      lessonTitle: "Ôn tập Chương 1: Ứng dụng đạo hàm khảo sát hàm số",
      sectionId: "ontap_muc3",
      sectionTitle: "Mục 3: Các bẫy đề thi và lỗi sai kinh điển",
      audioSrc: "./audio/ontap_muc3.mp3",
      totalDuration: 300.0,
      audio_src: "./audio/ontap_muc3.mp3",
      timestamp_src: "timestamps/ontap_muc3.json",
      title: "Mục 3: Cẩm nang 10 Bẫy đề thi kinh điển - Bảo toàn điểm số tuyệt đối",
      owl_tip: "Khắc phục triệt để 10 sai lầm: Dấu hợp ∪, nghiệm bội chẵn, tiệm cận triệt tiêu, Max/Min ngoặc tròn, điều kiện căn thức!",
      parts: [
        { partNumber: 1, partTitle: "Phần 1: Top 5 bẫy Đại số & Đạo hàm", scenes: [1] },
        { partNumber: 2, partTitle: "Phần 2: Top 5 bẫy Giới hạn & Tiệm cận", scenes: [2] },
        { partNumber: 3, partTitle: "Phần 3: Check-list kiểm tra trước khi tô đáp án", scenes: [3] },
        { partNumber: 4, partTitle: "Phần 4: Mascot Cú trao huân chương hoàn thành", scenes: [4] }
      ],
      scenes: [
        {
          sceneIndex: 1,
          title: "TOP 5 BẪY ĐẠI SỐ & ĐẠO HÀM HAY GẶP NHẤT",
          subtitle: "MỤC 3 • RÀ SOÁT TỔNG THỂ ĐỂ ZERO LỖI SAI",
          startTime: 0.0,
          endTime: 75.0,
          duration: 75.0,
          mascotMode: "magnifier",
          mascotTip: "<b>Cú rà soát:</b> Hãy kiểm tra xem mình có từng phạm phải 5 sai lầm này không nhé!",
          bodyHtml: `
            <div style="font-size:21px; line-height:1.7; color:#e2e8f0; margin-left:14px;">
              • <b>1. Bẫy dấu hợp $\\cup$:</b> Viết khoảng đồng biến/nghịch biến nối bằng dấu $\\cup$ hoặc $\\setminus$ $\\implies$ SAI.<br>
              • <b>2. Bẫy nghiệm bội chẵn:</b> Nghĩ rằng cứ $f'(x) = 0$ là có cực trị mà quên quy tắc nghiệm bội chẵn không đổi dấu $\\implies$ SAI.<br>
              • <b>3. Bẫy hỏi điểm cực trị:</b> Đề hỏi \"Điểm cực trị của hàm số\" lại đi trả lời giá trị $y$ (hoặc tọa độ $M(x; y)$) $\\implies$ SAI.<br>
              • <b>4. Bẫy đạo hàm bằng 0:</b> Hàm số đồng biến trên $K$ thì $f'(x) \\ge 0$ và bằng $0$ tại <b>hữu hạn điểm</b>.<br>
              • <b>5. Bẫy hàm hằng:</b> Nếu $f'(x) = 0, \\forall x \\in K$ thì hàm số là hàm hằng (không đồng biến, không nghịch biến).
            </div>
          `
        },
        {
          sceneIndex: 2,
          title: "TOP 5 BẪY GIỚI HẠN & TIỆM CẬN",
          subtitle: "MỤC 3 • CHỐỐNG MẤT ĐIỂM OAN Ở CÁC CÂU THÔNG HIỂU",
          startTime: 75.0,
          endTime: 150.0,
          duration: 75.0,
          mascotMode: "magnifier",
          mascotTip: "<b>Chú ý:</b> Luôn bấm máy thử giới hạn 2 bên x_0 + 0.0001 và x_0 - 0.0001 để khẳng định tiệm cận đứng!",
          bodyHtml: `
            <div style="font-size:21px; line-height:1.7; color:#e2e8f0; margin-left:14px;">
              • <b>6. Bẫy nghiệm mẫu bị triệt tiêu:</b> Nghiệm mẫu cũng là nghiệm tử bậc cao hơn $\\implies$ Không có TCĐ.<br>
              • <b>7. Bẫy tập xác định chặn:</b> $D = [1; 3]$ không chứa vô cực $\\implies$ Không bao giờ có Tiệm cận ngang!<br>
              • <b>8. Bẫy dấu trừ khi $x \\to -\\infty$:</b> Căn bậc hai $\\sqrt{x^2} = |x| = -x$ khi $x < 0$ $\\implies$ Sinh ra 2 TCN đối dấu.<br>
              • <b>9. Bẫy tiệm cận xiên:</b> Nhầm giữa tiệm cận xiên ($a \\ne 0$) và tiệm cận ngang ($a = 0$).<br>
              • <b>10. Bẫy nhầm trục:</b> Nhầm phương trình TCĐ $x = x_0$ với TCN $y = y_0$.
            </div>
          `
        },
        {
          sceneIndex: 3,
          title: "CHECK-LIST 4 BƯỚC KIỂM TRA TRƯỚC KHI TÔ ĐÁP ÁN",
          subtitle: "MỤC 3 • KỸ THUẬT LÀM BÀI ĐẠT ĐIỂM 10 TUYỆT ĐỐI",
          startTime: 150.0,
          endTime: 225.0,
          duration: 75.0,
          mascotMode: "pointer",
          mascotTip: "<b>Cú khuyên:</b> Dành đúng 5 giây đọc lại từ khóa trong đề trước khi đặt bút tô đáp án!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:8px;">
              4 Câu hỏi tự vấn trước khi chọn đáp án cuối cùng:
            </div>
            <div style="font-size:21px; line-height:1.7; color:#e2e8f0; margin-left:14px;">
              <b>1.</b> Đề bài đang hỏi $x$ (hoành độ) hay hỏi $y$ (giá trị) hay hỏi tọa độ điểm $(x; y)$?<br>
              <b>2.</b> Đề bài cho đồ thị của hàm số $f(x)$ hay đồ thị của đạo hàm $f'(x)$?<br>
              <b>3.</b> Khoảng khảo sát là đoạn vuông $[a; b]$ hay khoảng tròn $(a; b)$?<br>
              <b>4.</b> Đề bài hỏi khẳng định ĐÚNG hay khẳng định SAI? (Nhiều bạn nhìn thấy câu đúng đầu tiên đã vội tô mà quên đề hỏi câu sai).
            </div>
          `
        },
        {
          sceneIndex: 4,
          title: "HOÀN THÀNH XUẤT SẮC TOÀN BỘ CHƯƠNG 1",
          subtitle: "MỤC 3 • CHÚC MỪNG CÁC EM ĐÃ CHINH PHỤC ĐỈNH CAO!",
          startTime: 225.0,
          endTime: 300.0,
          duration: 75.0,
          mascotMode: "cheer",
          mascotTip: "<b>Thầy Thuấn & Cú Thông Thái chúc mừng:</b> Em đã nắm trọn vẹn toàn bộ 5 bài học và 18 mục kiến thức chuẩn mực của Chương 1 Toán 12!",
          bodyHtml: `
            <div style="text-align:center; padding:15px; background:rgba(30,41,59,0.8); border:2px solid #fbbf24; border-radius:14px;">
              <div style="font-size:48px; margin-bottom:8px;">🏆</div>
              <div style="font-size:26px; color:#fbbf24; font-weight:bold; margin-bottom:6px;">
                HUÂN CHƯƠNG CHIẾN THẮNG CHƯƠNG 1 TOÁN 12
              </div>
              <div style="font-size:22px; color:#f8fafc; line-height:1.6;">
                Em đã hoàn thành trọn vẹn 18 Mục bài giảng tương tác (KaTeX + SVG Vector + Âm thanh).<br>
                Chúc các em đạt kết quả cao nhất trong các bài kiểm tra định kỳ và kỳ thi Tốt nghiệp THPT Quốc gia!
              </div>
            </div>
          `
        }
      ]
    }
  };

  // Export to window
  window.CHAPTER1_LECTURES = CHAPTER1_LECTURES;
  window.CHAPTER1_DATA = CHAPTER1_LECTURES;

})(window);

if(typeof window.CHAPTER1_DATA === 'undefined') window.CHAPTER1_DATA = {};
Object.assign(window.CHAPTER1_DATA, {
  bai4_muc1: {
  "lessonId": "bai4",
  "lessonTitle": "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
  "sectionId": "bai4_muc1",
  "sectionTitle": "Mục 1: Hàm số bậc ba y = ax³ + bx² + cx + d (a ≠ 0)",
  "audio": "/audio/bai4_muc1.mp3",
  "audioSrc": "./audio/bai4_muc1.mp3",
  "audio_src": "./audio/bai4_muc1.mp3",
  "timestamp_src": "timestamps/bai4_muc1.json",
  "totalDuration": 207.58,
  "duration": 207.58,
  "title": "Mục 1: Hàm số bậc ba y = ax³ + bx² + cx + d (a ≠ 0)",
  "owl_tip": "Ghi nhớ: Hàm bậc ba luôn có tâm đối xứng là điểm uốn U(-b/(3a); y_U). Đồ thị có 2 cực trị khi y' = 0 có 2 nghiệm phân biệt!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 47.42,
      "id": "part2"
    },
    {
      "time": 68.67,
      "id": "part3"
    },
    {
      "time": 72.22,
      "id": "vd1_q"
    },
    {
      "time": 90.03,
      "id": "vd1_a"
    },
    {
      "time": 119.92,
      "id": "vd2_q"
    },
    {
      "time": 135.43,
      "id": "vd2_a"
    },
    {
      "time": 150.47,
      "id": "vd3_q"
    },
    {
      "time": 163.85,
      "id": "vd3_a"
    },
    {
      "time": 180.96,
      "id": "part4"
    },
    {
      "time": 193.07,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Khái niệm & Sơ đồ khảo sát</h3>\n        <p>Hàm số bậc ba: $y = ax^3 + bx^2 + cx + d \\, (a \\neq 0)$<br>\n        <b>Bước 1:</b> $D = \\mathbb{R}$.<br>\n        <b>Bước 2:</b> Đạo hàm $y' = 3ax^2 + 2bx + c$. Xét dấu $y'$, tìm cực trị, khoảng đơn điệu. Tính $\\lim_{x \\to \\pm\\infty} y$ và lập BBT.<br>\n        <b>Bước 3:</b> Vẽ đồ thị: Xác định giao điểm $Ox, Oy$ và <b>Điểm uốn</b> (tâm đối xứng) $U\\left(-\\frac{b}{3a}; y_U\\right)$.</p>\n      </div>\n      <div id=\"part2\"><h3>2. Các dạng đồ thị hàm bậc ba</h3>\n        <p>+ $y' = 0$ có 2 nghiệm phân biệt $\\Rightarrow$ Đồ thị có 2 cực trị (chữ N nếu $a>0$, chữ N ngược nếu $a<0$).<br>\n        + $y' = 0$ vô nghiệm hoặc có nghiệm kép $\\Rightarrow$ Hàm số không có cực trị, luôn đơn điệu trên $\\mathbb{R}$.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ điển hình</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Khảo sát và vẽ đồ thị $y = x^3 - 3x + 1$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          + $D = \\mathbb{R}$. $y' = 3x^2 - 3 = 0 \\Leftrightarrow x = \\pm 1$.<br>\n          + Cực đại tại $(-1; 3)$, Cực tiểu tại $(1; -1)$. Điểm uốn $U(0; 1)$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Tìm tâm đối xứng của $y = -x^3 + 3x^2 - 2$.<br><i>(Thời gian suy nghĩ: 15s)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> $x_U = -\\frac{b}{3a} = 1 \\Rightarrow y_U = 0$. Tâm đối xứng là <b>$U(1; 0)$</b>.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Nhận diện đồ thị hàm bậc ba từ BBT sau:<br>\n          <table style=\"width:100%; max-width:380px; border-collapse:collapse; text-align:center; background:#ffffff !important; color:#111827 !important; border:2px solid #374151; margin:12px auto; font-size:15px; font-weight:600;\">\n            <tr style=\"border-bottom:1.5px solid #374151;\">\n              <td style=\"width:45px; border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$x$</td>\n              <td style=\"padding:6px; color:#111827 !important;\">$-\\infty$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$0$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$2$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$+\\infty$</td>\n            </tr>\n            <tr style=\"border-bottom:1.5px solid #374151;\">\n              <td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y'$</td>\n              <td></td><td style=\"color:#2563eb !important; font-size:16px;\">$+$</td><td>$0$</td><td style=\"color:#dc2626 !important; font-size:16px;\">$-$</td><td>$0$</td><td style=\"color:#2563eb !important; font-size:16px;\">$+$</td><td></td>\n            </tr>\n            <tr style=\"height:65px;\">\n              <td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y$</td>\n              <td style=\"vertical-align:bottom; padding:6px; color:#111827 !important;\">$-\\infty$</td><td>$\\nearrow$</td><td style=\"vertical-align:top; color:#dc2626 !important; font-weight:bold;\">$2$</td><td>$\\searrow$</td><td style=\"vertical-align:bottom; color:#2563eb !important; font-weight:bold;\">$-2$</td><td>$\\nearrow$</td><td style=\"vertical-align:top; padding:6px; color:#111827 !important;\">$+\\infty$</td>\n            </tr>\n          </table>\n          <i>(Thời gian suy nghĩ: 20s)</i>\n        </div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Giải chi tiết:</b> Nhánh ngoài cùng đi lên $\\Rightarrow a > 0$. Đạt CĐ tại $(0; 2)$ và CT tại $(2; -2) \\Rightarrow$ Hàm số: <b>$y = x^3 - 3x^2 + 2$</b>.\n        </div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Nhầm giữa điểm cực trị hàm số ($x$), giá trị cực trị ($y$) và điểm cực trị đồ thị ($(x; y)$).</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Giao điểm với trục tung $Oy$ cho biết ngay hệ số $d$.</p></div>\n    ",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm & Sơ đồ khảo sát",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Các dạng đồ thị",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ điển hình (3 Ví dụ)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Bẫy đề thi",
      "scenes": [
        9
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo Thầy Cú",
      "scenes": [
        10
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 4: KHẢO SÁT HÀM SỐ BẬC BA",
      "subtitle": "PHẦN 1: SƠ ĐỒ KHẢO SÁT TỔNG QUÁT 3 BƯỚC",
      "startTime": 0.0,
      "endTime": 47.42,
      "duration": 47.42,
      "mascotMode": "pointer",
      "mascotTip": "Ghi nhớ 3 bước chuẩn: TXĐ -> Biến thiên (y', nghiệm, BBT, lim) -> Đồ thị (Điểm uốn U, giao Ox, Oy)!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Sơ đồ khảo sát tổng quát hàm số bậc ba</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>Xét hàm số bậc ba: $y = ax^3 + bx^2 + cx + d \\quad (a \\neq 0)$<br>• <b>Bước 1:</b> Tập xác định $D = \\mathbb{R}$.<br>• <b>Bước 2:</b> Khảo sát sự biến thiên:<br>&emsp;+ Tính đạo hàm: $y' = 3ax^2 + 2bx + c$. Giải phương trình $y' = 0$.<br>&emsp;+ Xét dấu $y'$ để tìm các khoảng đồng biến, nghịch biến và điểm cực trị.<br>&emsp;+ Tìm giới hạn vô cực: $\\lim_{x \\to +\\infty} y$ và $\\lim_{x \\to -\\infty} y$. Lập bảng biến thiên.<br>• <b>Bước 3:</b> Vẽ đồ thị hàm số:<br>&emsp;+ Giao điểm với trục tung $Oy$: Cho $x = 0 \\implies y = d$.<br>&emsp;+ Giao điểm với trục hoành $Ox$: Cho $y = 0 \\implies ax^3+bx^2+cx+d=0$.<br>&emsp;+ <b>Điểm uốn $U\\left(-\\frac{b}{3a}; y_U\\right)$</b> là <b>Tâm đối xứng</b> của đồ thị bậc ba.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "CÁC DẠNG ĐỒ THỊ HÀM BẬC BA",
      "subtitle": "PHẦN 2: DỰA VÀO DẤU CỦA a VÀ SỐ NGHIỆM ĐẠO HÀM",
      "startTime": 47.42,
      "endTime": 72.22,
      "duration": 24.8,
      "mascotMode": "pointer",
      "mascotTip": "y' = 0 có 2 nghiệm: đồ thị có 2 cực trị (hình chữ N). y' vô nghiệm hoặc nghiệm kép: hàm số đơn điệu trên R!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Các dạng đồ thị của hàm bậc ba</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Trường hợp 1:</b> Phương trình $y' = 0$ có 2 nghiệm phân biệt ($\\Delta_{y'} > 0$):<br>&emsp;$\\Rightarrow$ Hàm số có 2 điểm cực trị.<br>&emsp;+ Nếu $a > 0$: Đồ thị có hình chữ <b>N</b> (đi lên &rarr; đi xuống &rarr; đi lên).<br>&emsp;+ Nếu $a < 0$: Đồ thị có hình chữ <b>N ngược</b> (đi xuống &rarr; đi lên &rarr; đi xuống).<br>• <b>Trường hợp 2:</b> Phương trình $y' = 0$ vô nghiệm hoặc có nghiệm kép ($\\Delta_{y'} \\le 0$):<br>&emsp;$\\Rightarrow$ Hàm số không có cực trị, luôn đơn điệu trên $\\mathbb{R}$.<br>&emsp;+ Nếu $a > 0$: Đồ thị luôn đi lên từ trái sang phải.<br>&emsp;+ Nếu $a < 0$: Đồ thị luôn đi xuống từ trái sang phải.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: KHẢO SÁT & VẼ ĐỒ THỊ",
      "subtitle": "y = x^3 - 3x + 1",
      "startTime": 72.22,
      "endTime": 90.03,
      "duration": 17.81,
      "mascotMode": "pointer",
      "mascotTip": "Tính nhanh: y' = 3x^2 - 3. Cho y' = 0 tìm nghiệm x và tọa độ điểm uốn nhé!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Khảo sát sự biến thiên và vẽ đồ thị hàm số: $$y = x^3 - 3x + 1$$<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian làm nháp: 20 giây</b><br><i>(Tính y', tìm cực trị và hoành độ điểm uốn x_U...)</i></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT & BẢNG BIẾN THIÊN",
      "subtitle": "HÀM SỐ ĐỒNG BIẾN, NGHỊCH BIẾN VÀ CỰC TRỊ",
      "startTime": 90.03,
      "endTime": 119.92,
      "duration": 29.89,
      "mascotMode": "cheer",
      "mascotTip": "Hàm số đồng biến trên (-∞; -1) và (1; +∞); nghịch biến trên (-1; 1)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Tập xác định: $D = \\mathbb{R}$.<br>• Đạo hàm: $y' = 3x^2 - 3 = 0 \\iff x = \\pm 1$.<br>• Cực đại tại $(-1; 3)$, Cực tiểu tại $(1; -1)$. Điểm uốn: $U(0; 1)$ là tâm đối xứng.</p></div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: TÌM TÂM ĐỐI XỨNG CỦA ĐỒ THỊ",
      "subtitle": "y = -x^3 + 3x^2 - 2",
      "startTime": 119.92,
      "endTime": 135.43,
      "duration": 15.51,
      "mascotMode": "pointer",
      "mascotTip": "Công thức hoành độ điểm uốn: x_U = -b / (3a). Nhẩm nhanh trong 15s nhé!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Tìm tọa độ tâm đối xứng của đồ thị hàm số: $$y = -x^3 + 3x^2 - 2$$<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b><br><i>(Áp dụng công thức hoành độ điểm uốn x_U = -b / (3a)...)</i></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "TÂM ĐỐI XỨNG U(1; 0)",
      "startTime": 135.43,
      "endTime": 150.47,
      "duration": 15.04,
      "mascotMode": "cheer",
      "mascotTip": "x_U = -3 / (3*(-1)) = 1 -> y_U = -(1)^3 + 3(1)^2 - 2 = 0 -> U(1; 0)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Ta có các hệ số: $a = -1, \\; b = 3, \\; c = 0, \\; d = -2$.<br>• Hoành độ điểm uốn (tâm đối xứng): $$x_U = -\\frac{b}{3a} = -\\frac{3}{3(-1)} = 1$$<br>• Thay $x = 1$ vào hàm số: $y_U = -(1)^3 + 3(1)^2 - 2 = 0$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> Tâm đối xứng của đồ thị là điểm <b>$U(1; 0)$</b>.</p></div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: NHẬN DIỆN HÀM BẬC BA TỪ BBT",
      "subtitle": "ĐỌC DẤU HỆ SỐ a VÀ CÁC ĐIỂM CỰC TRỊ",
      "startTime": 150.47,
      "endTime": 163.85,
      "duration": 13.38,
      "mascotMode": "magnifier",
      "mascotTip": "Nhánh ngoài cùng bên phải đi lên +∞ -> a > 0! Cực đại (0; 2), Cực tiểu (2; -2)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:20px; line-height:1.5; color:#f8fafc;\"><b>Ví dụ 3:</b> Nhận diện hàm số bậc ba từ Bảng biến thiên sau:<table style=\"width:100%; max-width:400px; border-collapse:collapse; text-align:center; background:#ffffff !important; color:#111827 !important; border:2px solid #374151; margin:12px auto; font-size:15px; font-weight:600;\"><tr style=\"border-bottom:1.5px solid #374151;\"><td style=\"width:45px; border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$x$</td><td style=\"padding:6px; color:#111827 !important;\">$-\\infty$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$0$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$2$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$+\\infty$</td></tr><tr style=\"border-bottom:1.5px solid #374151;\"><td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y'$</td><td></td><td style=\"color:#2563eb !important; font-size:16px;\">$+$</td><td>$0$</td><td style=\"color:#dc2626 !important; font-size:16px;\">$-$</td><td>$0$</td><td style=\"color:#2563eb !important; font-size:16px;\">$+$</td><td></td></tr><tr style=\"height:65px;\"><td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y$</td><td style=\"vertical-align:bottom; padding:6px; color:#111827 !important;\">$-\\infty$</td><td>$\\nearrow$</td><td style=\"vertical-align:top; color:#dc2626 !important; font-weight:bold; font-size:17px;\">$2$</td><td>$\\searrow$</td><td style=\"vertical-align:bottom; color:#2563eb !important; font-weight:bold; font-size:17px;\">$-2$</td><td>$\\nearrow$</td><td style=\"vertical-align:top; padding:6px; color:#111827 !important;\">$+\\infty$</td></tr></table><div style=\"margin-top:10px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "y = x^3 - 3x^2 + 2",
      "startTime": 163.85,
      "endTime": 180.96,
      "duration": 17.11,
      "mascotMode": "cheer",
      "mascotTip": "Nhánh phải đi lên -> a > 0. Cực đại (0; 2) -> d = 2. Cực tiểu (2; -2) -> y = x^3 - 3x^2 + 2!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Nhánh ngoài cùng bên phải đi lên: $\\lim_{x \\to +\\infty} y = +\\infty \\implies a > 0$.<br>• Đồ thị đạt cực đại tại điểm $(0; 2) \\implies y(0) = d = 2$.<br>• Đạt cực tiểu tại điểm $(2; -2)$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> Đây chính là bảng biến thiên của hàm số <b>$y = x^3 - 3x^2 + 2$</b>.</p></div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI VỀ CỰC TRỊ",
      "subtitle": "PHẦN 4: PHÂN BIỆT ĐIỂM VÀ GIÁ TRỊ",
      "startTime": 180.96,
      "endTime": 193.07,
      "duration": 12.11,
      "mascotMode": "magnifier",
      "mascotTip": "Điểm cực trị hàm số: x. Giá trị cực trị: y. Điểm cực trị đồ thị: (x; y)!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi: Nhầm lẫn giữa 3 khái niệm cực trị:</span><br>1. <b>Điểm cực trị của hàm số:</b> Là các giá trị của biến số $x$ (ví dụ: $x = 0, \\; x = 2$).<br>2. <b>Giá trị cực trị của hàm số:</b> Là các giá trị của hàm số $y$ (ví dụ: $y_{CĐ} = 2, \\; y_{CT} = -2$).<br>3. <b>Điểm cực trị của đồ thị hàm số:</b> Là cặp tọa độ $(x; y)$ trên mặt phẳng toạ độ (ví dụ: $(0; 2), \\; (2; -2)$).</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: ĐỌC DẤU a VÀ HỆ SỐ d",
      "startTime": 193.07,
      "endTime": 207.58,
      "duration": 14.51,
      "mascotMode": "cheer",
      "mascotTip": "Nhánh phải đi lên -> a > 0! Cắt Oy tại điểm nào thì d bằng tung độ điểm đó!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Mẹo nhận diện nhanh hàm số bậc ba:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">• <b>Mẹo 1: Dấu của hệ số $a$:</b> Nhìn nhánh ngoài cùng bên phải, nếu vươn lên thì $a > 0$, nếu cắm xuống thì $a < 0$.<br>• <b>Mẹo 2: Hệ số tự do $d$:</b> Giao điểm của đồ thị với trục tung $Oy$ chính là điểm $(0; d)$.<br>• <b>Mẹo 3: Tâm đối xứng:</b> Là trung điểm của đoạn thẳng nối hai điểm cực trị!</div>"
    }
  ]
},
  bai4_muc2: {
  "lessonId": "bai4",
  "lessonTitle": "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
  "sectionId": "bai4_muc2",
  "sectionTitle": "Mục 2: Hàm phân thức bậc nhất / bậc nhất y = (ax+b)/(cx+d)",
  "audio": "/audio/bai4_muc2.mp3",
  "audioSrc": "./audio/bai4_muc2.mp3",
  "audio_src": "./audio/bai4_muc2.mp3",
  "timestamp_src": "timestamps/bai4_muc2.json",
  "totalDuration": 169.61,
  "duration": 169.61,
  "title": "Mục 2: Hàm phân thức bậc nhất / bậc nhất y = (ax+b)/(cx+d)",
  "owl_tip": "Ghi nhớ: y' = (ad - bc)/(cx+d)^2 cùng dấu với ad - bc. Đồ thị KHÔNG CÓ CỰC TRỊ, tâm đối xứng I(-d/c; a/c)!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 44.1,
      "id": "part2"
    },
    {
      "time": 51.6,
      "id": "part3"
    },
    {
      "time": 55.22,
      "id": "vd1_q"
    },
    {
      "time": 69.39,
      "id": "vd1_a"
    },
    {
      "time": 95.67,
      "id": "vd2_q"
    },
    {
      "time": 109.46,
      "id": "vd2_a"
    },
    {
      "time": 124.67,
      "id": "vd3_q"
    },
    {
      "time": 139.43,
      "id": "vd3_a"
    },
    {
      "time": 148.94,
      "id": "part4"
    },
    {
      "time": 158.71,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Khái niệm & Sơ đồ khảo sát</h3>\n        <p>Hàm số: $y = \\frac{ax+b}{cx+d} \\, (c \\neq 0, ad-bc \\neq 0)$<br>\n        <b>Bước 1:</b> $D = \\mathbb{R} \\setminus \\left\\{-\\frac{d}{c}\\right\\}$.<br>\n        <b>Bước 2:</b> Đạo hàm $y' = \\frac{ad-bc}{(cx+d)^2}$. Hàm số luôn đồng biến nếu $ad-bc>0$; nghịch biến nếu $ad-bc<0$. Không có cực trị.<br>\n        + TCĐ: $x = -\\frac{d}{c}$, TCN: $y = \\frac{a}{c}$. Tâm đối xứng: $I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right)$.<br>\n        <b>Bước 3:</b> Vẽ đồ thị 2 nhánh hypebol.</p>\n      </div>\n      <div id=\"part2\"><h3>2. Hình dạng đồ thị</h3>\n        <p>Đồ thị là đường hypebol nhận giao điểm hai tiệm cận $I$ làm tâm đối xứng.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ thực hành</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Khảo sát hàm số $y = \\frac{2x+1}{x-1}$.<br><i>(Thời gian nháp: 20s)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> $D = \\mathbb{R} \\setminus \\{1\\}$. $y' = \\frac{-3}{(x-1)^2} < 0$. Nghịch biến trên từng khoảng xác định. TCĐ: $x = 1$, TCN: $y = 2$, Tâm đối xứng $I(1; 2)$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Tìm tâm đối xứng của $y = \\frac{3-x}{x+2}$.<br><i>(Thời gian suy nghĩ: 15s)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> TCĐ: $x = -2$, TCN: $y = -1$. Tâm đối xứng là <b>$I(-2; -1)$</b>.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Xác định hàm số có TCĐ $x = 1$, TCN $y = 2$ và cắt $Oy$ tại $(0; -1)$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> Hàm số cần tìm là <b>$y = \\frac{2x+1}{x-1}$</b>.\n        </div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy trắc nghiệm</h3><p>Dùng dấu hợp $\\cup$ khi kết luận đồng biến, nghịch biến là sai.</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Casio</h3><p>Bấm [CALC] tại $x=0$ để tìm giao điểm trục tung $Oy$ nhằm loại phương án sai.</p></div>\n    ",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm & Sơ đồ khảo sát",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Các dạng đồ thị",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ điển hình (3 Ví dụ)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Bẫy đề thi",
      "scenes": [
        9
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo Thầy Cú",
      "scenes": [
        10
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 4: HÀM PHÂN THỨC BẬC NHẤT / BẬC NHẤT",
      "subtitle": "PHẦN 1: SƠ ĐỒ KHẢO SÁT & TIỆM CẬN",
      "startTime": 0.0,
      "endTime": 44.1,
      "duration": 44.1,
      "mascotMode": "pointer",
      "mascotTip": "Hàm bậc nhất / bậc nhất: y' = (ad-bc)/(cx+d)^2 không bao giờ bằng 0. Đồ thị KHÔNG CÓ CỰC TRỊ!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Sơ đồ khảo sát hàm phân thức $y = \\frac{ax+b}{cx+d}$</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>Điều kiện: $c \\neq 0$ và $ad - bc \\neq 0$.<br>• <b>Bước 1:</b> Tập xác định: $D = \\mathbb{R} \\setminus \\left\\{-\\frac{d}{c}\\right\\}$.<br>• <b>Bước 2:</b> Đạo hàm: $y' = \\frac{ad - bc}{(cx+d)^2}$.<br>&emsp;+ Nếu $ad - bc > 0 \\implies y' > 0$: Hàm số luôn đồng biến trên từng khoảng xác định.<br>&emsp;+ Nếu $ad - bc < 0 \\implies y' < 0$: Hàm số luôn nghịch biến trên từng khoảng xác định.<br>&emsp;+ <b>Cực trị:</b> Hàm số <b>không bao giờ có cực trị</b>.<br>&emsp;+ <b>Đường tiệm cận:</b> Tiệm cận đứng $x = -\\frac{d}{c}$; Tiệm cận ngang $y = \\frac{a}{c}$.<br>&emsp;+ <b>Tâm đối xứng:</b> Giao điểm hai tiệm cận $I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right)$.<br>• <b>Bước 3:</b> Vẽ đồ thị 2 nhánh hypebol đối xứng qua điểm $I$.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "CÁC DẠNG ĐỒ THỊ PHÂN THỨC BẬC 1/1",
      "subtitle": "PHẦN 2: HAI NHÁNH HYPEBOL ĐỐI XỨNG QUA GIAO ĐIỂM TIỆM CẬN",
      "startTime": 44.1,
      "endTime": 55.22,
      "duration": 11.12,
      "mascotMode": "pointer",
      "mascotTip": "ad-bc > 0: đồ thị ở góc phần tư II và IV; ad-bc < 0: đồ thị ở góc phần tư I và III!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Các dạng đồ thị phân thức bậc nhất / bậc nhất</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>Đồ thị là đường hypebol gồm hai nhánh rời nhau, nhận giao điểm hai đường tiệm cận $I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right)$ làm tâm đối xứng:<br>• <b>Nếu $ad - bc > 0$ (Đồng biến):</b><br>&emsp;Hai nhánh hypebol nằm ở góc phần tư thứ <b>II và IV</b> so với hai đường tiệm cận.<br>• <b>Nếu $ad - bc < 0$ (Nghịch biến):</b><br>&emsp;Hai nhánh hypebol nằm ở góc phần tư thứ <b>I và III</b> so với hai đường tiệm cận.<br>• Đồ thị không bao giờ cắt hai đường tiệm cận.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: KHẢO SÁT & VẼ ĐỒ THỊ",
      "subtitle": "y = (2x + 1) / (x - 1)",
      "startTime": 55.22,
      "endTime": 69.39,
      "duration": 14.17,
      "mascotMode": "pointer",
      "mascotTip": "Tích chéo: 2*(-1) - 1*1 = -3 < 0 -> Hàm luôn nghịch biến trên từng khoảng!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Khảo sát sự biến thiên và vẽ đồ thị hàm số: $$y = \\frac{2x+1}{x-1}$$<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian làm nháp: 20 giây</b><br><i>(Tính y', tìm TCĐ, TCN và tọa độ tâm đối xứng I...)</i></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT & BẢNG BIẾN THIÊN",
      "subtitle": "TCĐ x = 1, TCN y = 2, TÂM ĐỐI XỨNG I(1; 2)",
      "startTime": 69.39,
      "endTime": 95.67,
      "duration": 26.28,
      "mascotMode": "cheer",
      "mascotTip": "Hàm số nghịch biến trên (-∞; 1) và (1; +∞). Không bao giờ dùng dấu hợp ∪!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Tập xác định: $D = \\mathbb{R} \\setminus \\{1\\}$.<br>• Đạo hàm: $y' = \\frac{2(-1) - 1(1)}{(x-1)^2} = \\frac{-3}{(x-1)^2} < 0, \\; \\forall x \\neq 1$.<br>• BBT: Hàm số nghịch biến trên $(-\\infty; 1)$ và $(1; +\\infty)$.<br>• Tiệm cận đứng: $x = 1$; Tiệm cận ngang: $y = 2$.<br>• Tâm đối xứng: $I(1; 2)$. Giao trục tung: $(0; -1)$; Giao trục hoành: $\\left(-\\frac{1}{2}; 0\\right)$.</p></div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: TÌM TÂM ĐỐI XỨNG CỦA ĐỒ THỊ",
      "subtitle": "y = (3 - x) / (x + 2)",
      "startTime": 95.67,
      "endTime": 109.46,
      "duration": 13.79,
      "mascotMode": "pointer",
      "mascotTip": "Chú ý đổi thứ tự tử số: y = (-x + 3)/(x + 2). TCN y = -1/1 = -1!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Tìm tâm đối xứng của đồ thị hàm số: $$y = \\frac{3-x}{x+2}$$<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b><br><i>(Viết lại tử số theo đúng chuẩn -x + 3 trước khi tìm TCN...)</i></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "TÂM ĐỐI XỨNG I(-2; -1)",
      "startTime": 109.46,
      "endTime": 124.67,
      "duration": 15.21,
      "mascotMode": "cheer",
      "mascotTip": "TCĐ x = -2, TCN y = -1 -> I(-2; -1)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Viết lại hàm số: $y = \\frac{-x+3}{x+2}$.<br>• Tiệm cận đứng: $x = -2$.<br>• Tiệm cận ngang: $y = \\frac{-1}{1} = -1$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> Tâm đối xứng của đồ thị là <b>$I(-2; -1)$</b>.</p></div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: XÁC ĐỊNH HÀM SỐ TỪ ĐỒ THỊ",
      "subtitle": "DỰA VÀO TIỆM CẬN VÀ GIAO ĐIỂM TRỤC TUNG",
      "startTime": 124.67,
      "endTime": 139.43,
      "duration": 14.76,
      "mascotMode": "magnifier",
      "mascotTip": "TCĐ x = 1, TCN y = 2 -> y = (2x+b)/(x-1). Cắt Oy tại (0; -1) -> b = 1!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:20px; line-height:1.5; color:#f8fafc;\"><b>Ví dụ 3:</b> Xác định hàm số có đồ thị hypebol nhận đường thẳng $x = 1$ làm tiệm cận đứng, đường thẳng $y = 2$ làm tiệm cận ngang và cắt trục tung tại điểm $(0; -1)$.<div style=\"margin-top:10px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "y = (2x + 1) / (x - 1)",
      "startTime": 139.43,
      "endTime": 148.94,
      "duration": 9.51,
      "mascotMode": "cheer",
      "mascotTip": "Giao Oy: x = 0 -> y = b / (-1) = -1 -> b = 1!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Dạng hàm số: $y = \\frac{2x+b}{x-1}$.<br>• Đồ thị cắt trục tung tại $(0; -1) \\implies \\frac{2(0)+b}{0-1} = -1 \\implies b = 1$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> Hàm số cần tìm là <b>$y = \\frac{2x+1}{x-1}$</b>.</p></div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY TRẮC NGHIỆM VỀ KẾT LUẬN ĐỒNG BIẾN",
      "subtitle": "PHẦN 4: DÙNG KÝ HIỆU HỢP LÀ SAI HOÀN TOÀN",
      "startTime": 148.94,
      "endTime": 158.71,
      "duration": 9.77,
      "mascotMode": "magnifier",
      "mascotTip": "Tuyệt đối không dùng dấu hợp ∪ hoặc R \\ {x_0}. Phải kết luận trên TỪNG KHOẢNG XÁC ĐỊNH!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy trắc nghiệm: Sai lầm khi kết luận khoảng đơn điệu:</span><br>• <b>SAI:</b> Hàm số đồng biến (hoặc nghịch biến) trên $\\mathbb{R} \\setminus \\{1\\}$.<br>• <b>SAI:</b> Hàm số đồng biến trên $(-\\infty; 1) \\cup (1; +\\infty)$.<br>• <b>ĐÚNG CHUẨN BỘ GD&ĐT:</b> Hàm số nghịch biến trên từng khoảng $(-\\infty; 1)$ và $(1; +\\infty)$ (hoặc dùng dấu chấm phẩy ;).</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: TÍCH CHÉO VÀ GIAO ĐIỂM TRỤC TUNG",
      "startTime": 158.71,
      "endTime": 169.61,
      "duration": 10.9,
      "mascotMode": "cheer",
      "mascotTip": "Bấm [CALC] x = 0 ra ngay giao điểm Oy = b/d, loại trừ phương án sai cực nhanh!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Mẹo Casio giải nhanh hàm phân thức bậc nhất / bậc nhất:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">• <b>Mẹo 1 (Đạo hàm nhanh):</b> Nhẩm $y' = \\frac{ad - bc}{(cx+d)^2}$ trong 1 giây.<br>• <b>Mẹo 2 (CALC giao điểm $Oy$):</b> Bấm CALC tại $x = 0$ để tìm ngay giao điểm với trục tung $y = \\frac{b}{d}$.<br>• <b>Mẹo 3 (Tâm đối xứng):</b> $I = \\text{Giao}(TCĐ, TCN) = \\left(-\\frac{d}{c}; \\frac{a}{c}\\right)$.</div>"
    }
  ]
},
  bai4_muc3: {
  "lessonId": "bai4",
  "lessonTitle": "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
  "sectionId": "bai4_muc3",
  "sectionTitle": "Mục 3: Hàm phân thức bậc hai / bậc nhất y = (ax²+bx+c)/(px+q)",
  "audio": "/audio/bai4_muc3.mp3",
  "audioSrc": "./audio/bai4_muc3.mp3",
  "audio_src": "./audio/bai4_muc3.mp3",
  "timestamp_src": "timestamps/bai4_muc3.json",
  "totalDuration": 170.57,
  "duration": 170.57,
  "title": "Mục 3: Hàm phân thức bậc hai / bậc nhất y = (ax²+bx+c)/(px+q)",
  "owl_tip": "Dạng mới GDPT 2018: Chia tử cho mẫu y = a_1 x + b_1 + r/(px+q). Tiệm cận xiên là y = a_1 x + b_1!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 35.28,
      "id": "part2"
    },
    {
      "time": 51.39,
      "id": "part3"
    },
    {
      "time": 54.96,
      "id": "vd1_q"
    },
    {
      "time": 69.64,
      "id": "vd1_a"
    },
    {
      "time": 94.47,
      "id": "vd2_q"
    },
    {
      "time": 106.91,
      "id": "vd2_a"
    },
    {
      "time": 125.57,
      "id": "vd3_q"
    },
    {
      "time": 140.77,
      "id": "vd3_a"
    },
    {
      "time": 152.27,
      "id": "part4"
    },
    {
      "time": 161.61,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Khái niệm & Sơ đồ khảo sát</h3>\n        <p>Hàm số: $y = \\frac{ax^2+bx+c}{px+q} \\, (p \\neq 0)$<br>\n        <b>Bước 1:</b> $D = \\mathbb{R} \\setminus \\left\\{-\\frac{q}{p}\\right\\}$.<br>\n        <b>Bước 2:</b> Chia đa thức: $y = a_1 x + b_1 + \\frac{r}{px+q}$.<br>\n        + TCĐ: $x = -\\frac{q}{p}$; TCX: $y = a_1 x + b_1$. Tâm đối xứng $I$ là giao điểm 2 tiệm cận.<br>\n        <b>Bước 3:</b> Tính $y'$, lập BBT và vẽ đồ thị.</p>\n      </div>\n      <div id=\"part2\"><h3>2. Các dạng đồ thị</h3>\n        <p>Đồ thị có 2 điểm cực trị nằm về 2 phía tiệm cận đứng. Giá trị $y_{CĐ}$ có thể nhỏ hơn $y_{CT}$.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ điển hình</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Khảo sát hàm số $y = \\frac{x^2-x+1}{x-1}$.<br><i>(Thời gian làm nháp: 30s)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> Chia đa thức: $y = x + \\frac{1}{x-1}$. TCĐ: $x = 1$, TCX: $y = x$, $I(1; 1)$. CĐ $(0; -1)$, CT $(2; 3)$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Tìm tâm đối xứng $I$ của $y = \\frac{2x^2+x-3}{x+1}$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> TCĐ: $x = -1$, TCX: $y = 2x - 1$. Thay $x = -1 \\Rightarrow y = -3$. Tâm đối xứng <b>$I(-1; -3)$</b>.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Đọc BBT hàm phân thức bậc 2 trên bậc 1 có TCĐ $x = 1$, CĐ $(0; 1)$ và CT $(2; 5)$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> TCĐ là $x = 1$. Cực đại có tung độ $y = 1$ nhỏ hơn cực tiểu $y = 5$.\n        </div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Hoang mang khi thấy giá trị cực đại nhỏ hơn cực tiểu.</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Tâm đối xứng $I$ luôn là giao điểm của tiệm cận đứng và tiệm cận xiên.</p></div>\n    ",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm & Sơ đồ khảo sát",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Các dạng đồ thị",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ điển hình (3 Ví dụ)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Bẫy đề thi",
      "scenes": [
        9
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo Thầy Cú",
      "scenes": [
        10
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 4: HÀM PHÂN THỨC BẬC HAI / BẬC NHẤT",
      "subtitle": "PHẦN 1: SƠ ĐỒ KHẢO SÁT & TIỆM CẬN XIÊN",
      "startTime": 0.0,
      "endTime": 35.28,
      "duration": 35.28,
      "mascotMode": "pointer",
      "mascotTip": "Dạng mới GDPT 2018: Chia tử cho mẫu y = a_1 x + b_1 + r/(px+q). Tiệm cận xiên là y = a_1 x + b_1!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Sơ đồ khảo sát hàm $y = \\frac{ax^2+bx+c}{px+q} \\quad (p \\neq 0)$</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Bước 1:</b> Tập xác định: $D = \\mathbb{R} \\setminus \\left\\{-\\frac{q}{p}\\right\\}$.<br>• <b>Bước 2:</b> Chia đa thức tử cho mẫu:<br>$$y = a_1 x + b_1 + \\frac{r}{px+q}$$<br>&emsp;+ <b>Tiệm cận đứng:</b> $x = -\\frac{q}{p}$.<br>&emsp;+ <b>Tiệm cận xiên:</b> $y = a_1 x + b_1$.<br>&emsp;+ <b>Tâm đối xứng $I$:</b> Là giao điểm của tiệm cận xiên và tiệm cận đứng.<br>• <b>Bước 3:</b> Tính $y'$, lập bảng biến thiên và vẽ đồ thị hypebol xiên.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "CÁC DẠNG ĐỒ THỊ BẬC HAI / BẬC NHẤT",
      "subtitle": "PHẦN 2: ĐẶC ĐIỂM CỰC TRỊ VÀ HAI NHÁNH ĐỒ THỊ",
      "startTime": 35.28,
      "endTime": 54.96,
      "duration": 19.68,
      "mascotMode": "pointer",
      "mascotTip": "Đồ thị có 2 cực trị nằm về 2 phía của tiệm cận đứng. Giá trị Cực đại CÓ THỂ NHỎ HƠN Cực tiểu!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Các dạng đồ thị phân thức bậc hai / bậc nhất</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Trường hợp 1:</b> Phương trình $y' = 0$ có 2 nghiệm phân biệt:<br>&emsp;+ Đồ thị có 2 điểm cực trị nằm về hai phía của đường tiệm cận đứng.<br>&emsp;+ Tâm đối xứng $I$ chính là trung điểm của đoạn thẳng nối 2 điểm cực trị!<br>&emsp;+ <b>Hiện tượng đặc biệt:</b> Giá trị cực đại $y_{CĐ}$ có thể <b>nhỏ hơn</b> giá trị cực tiểu $y_{CT}$.<br>• <b>Trường hợp 2:</b> Phương trình $y' = 0$ vô nghiệm:<br>&emsp;+ Hàm số luôn đơn điệu trên từng khoảng xác định và không có cực trị.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: KHẢO SÁT & VẼ ĐỒ THỊ",
      "subtitle": "y = (x^2 - x + 1) / (x - 1)",
      "startTime": 54.96,
      "endTime": 69.64,
      "duration": 14.68,
      "mascotMode": "pointer",
      "mascotTip": "Chia đa thức: (x^2 - x + 1)/(x - 1) = x + 1/(x - 1). TCĐ x = 1, TCX y = x!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Khảo sát sự biến thiên và vẽ đồ thị hàm số: $$y = \\frac{x^2 - x + 1}{x - 1}$$<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian làm nháp: 30 giây</b><br><i>(Chia tử cho mẫu, tìm TCĐ, TCX và giải y' = 0...)</i></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT & BẢNG BIẾN THIÊN",
      "subtitle": "CỰC ĐẠI (0; -1), CỰC TIỂU (2; 3), TÂM ĐỐI XỨNG I(1; 1)",
      "startTime": 69.64,
      "endTime": 94.47,
      "duration": 24.83,
      "mascotMode": "cheer",
      "mascotTip": "y_CĐ = -1 nhỏ hơn y_CT = 3! Đây là bản chất hoàn toàn tự nhiên vì cực trị mang tính địa phương!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• $D = \\mathbb{R} \\setminus \\{1\\}$. Chia đa thức: $y = x + \\frac{1}{x - 1}$.<br>• TCĐ: $x = 1$; Tiệm cận xiên: $y = x$. Tâm đối xứng $I(1; 1)$.<br>• $y' = 1 - \\frac{1}{(x-1)^2} = \\frac{x(x-2)}{(x-1)^2} = 0 \\iff x = 0$ hoặc $x = 2$.<br>• Cực đại tại $(0; -1)$, Cực tiểu tại $(2; 3)$. Trung điểm của 2 cực trị chính là $I(1; 1)$.</p></div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: TÌM TÂM ĐỐI XỨNG CỦA ĐỒ THỊ",
      "subtitle": "y = (2x^2 + x - 3) / (x + 1)",
      "startTime": 94.47,
      "endTime": 106.91,
      "duration": 12.44,
      "mascotMode": "pointer",
      "mascotTip": "Chia tử cho mẫu: thương là 2x - 1. Thay x = -1 vào TCX tìm tung độ y = -3!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Tìm tọa độ tâm đối xứng $I$ của đồ thị hàm số: $$y = \\frac{2x^2+x-3}{x+1}$$<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b><br><i>(Tìm giao điểm của Tiệm cận đứng và Tiệm cận xiên...)</i></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "TÂM ĐỐI XỨNG I(-1; -3)",
      "startTime": 106.91,
      "endTime": 125.57,
      "duration": 18.66,
      "mascotMode": "cheer",
      "mascotTip": "TCĐ x = -1, TCX y = 2x - 1 -> Giao điểm là I(-1; -3)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Nghiệm của mẫu số: $x + 1 = 0 \\implies$ Tiệm cận đứng là $x = -1$.<br>• Thực hiện phép chia đa thức tử cho mẫu:<br>$$2x^2 + x - 3 = (x + 1)(2x - 1) - 2 \\implies y = 2x - 1 - \\frac{2}{x+1}$$<br>$\\implies$ Đường tiệm cận xiên là <b>$y = 2x - 1$</b>.<br>• Thay hoành độ $x = -1$ vào phương trình TCX: $y = 2(-1) - 1 = -3$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> Tâm đối xứng của đồ thị là <b>$I(-1; -3)$</b>.</p></div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: ĐỌC BBT HÀM BẬC HAI / BẬC NHẤT",
      "subtitle": "TCĐ x = 1, CỰC ĐẠI (0; 1), CỰC TIỂU (2; 5)",
      "startTime": 125.57,
      "endTime": 140.77,
      "duration": 15.2,
      "mascotMode": "magnifier",
      "mascotTip": "Quan sát kỹ BBT: y_CĐ = 1 nhỏ hơn y_CT = 5 vì 2 nhánh nằm về 2 phía TCĐ!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:20px; line-height:1.5; color:#f8fafc;\"><b>Ví dụ 3:</b> Đọc bảng biến thiên của hàm phân thức bậc 2 trên bậc 1 sau:<table style=\"width:100%; max-width:440px; border-collapse:collapse; text-align:center; background:#ffffff !important; color:#111827 !important; border:2px solid #374151; margin:12px auto; font-size:15px; font-weight:600;\"><tr style=\"border-bottom:1.5px solid #374151;\"><td style=\"width:45px; border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$x$</td><td style=\"padding:6px; color:#111827 !important;\">$-\\infty$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$0$</td><td></td><td style=\"padding:6px; color:#111827 !important; background:#fee2e2;\">$1$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$2$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$+\\infty$</td></tr><tr style=\"border-bottom:1.5px solid #374151;\"><td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y'$</td><td></td><td style=\"color:#2563eb !important; font-size:16px;\">$+$</td><td>$0$</td><td style=\"color:#dc2626 !important; font-size:16px;\">$-$</td><td style=\"color:#dc2626 !important; font-weight:bold;\">$||$</td><td style=\"color:#dc2626 !important; font-size:16px;\">$-$</td><td>$0$</td><td style=\"color:#2563eb !important; font-size:16px;\">$+$</td><td></td></tr><tr style=\"height:65px;\"><td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y$</td><td style=\"vertical-align:bottom; padding:6px; color:#111827 !important;\">$-\\infty$</td><td>$\\nearrow$</td><td style=\"vertical-align:top; color:#dc2626 !important; font-weight:bold; font-size:17px;\">$1$</td><td>$\\searrow$</td><td style=\"color:#dc2626 !important; font-weight:bold;\">$||$</td><td style=\"vertical-align:top; color:#111827 !important;\">$+\\infty$</td><td>$\\searrow$</td><td style=\"vertical-align:bottom; color:#2563eb !important; font-weight:bold; font-size:17px;\">$5$</td><td>$\\nearrow$</td></tr></table><div style=\"margin-top:10px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "GIÁ TRỊ CỰC ĐẠI NHỎ HƠN CỰC TIỂU LÀ BÌNH THƯỜNG",
      "startTime": 140.77,
      "endTime": 152.27,
      "duration": 11.5,
      "mascotMode": "cheer",
      "mascotTip": "Cực đại y_CĐ = 1 là điểm cao nhất trên nhánh trái, cực tiểu y_CT = 5 là điểm thấp nhất trên nhánh phải!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Đồ thị có tiệm cận đứng là $x = 1$ (tại đây có vạch kép $||$).<br>• Điểm cực đại là $A(0; 1)$, điểm cực tiểu là $B(2; 5)$.<br>• Giá trị cực đại $y_{CĐ} = 1$ nhỏ hơn giá trị cực tiểu $y_{CT} = 5$.<br>• Điều này hoàn toàn chính xác vì cực trị chỉ mang tính địa phương trong một khoảng lân cận, không phải là Giá trị lớn nhất hay Giá trị nhỏ nhất toàn cục.</p></div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI VỀ CỰC ĐẠI & CỰC TIỂU",
      "subtitle": "PHẦN 4: HOANG MANG KHI y_CĐ < y_CT",
      "startTime": 152.27,
      "endTime": 161.61,
      "duration": 9.34,
      "mascotMode": "magnifier",
      "mascotTip": "Đừng vội vàng sửa dấu đạo hàm khi thấy y_CĐ < y_CT! Với hàm bậc 2/1, điều này hoàn toàn tự nhiên!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi: Hoang mang khi thấy giá trị Cực đại nhỏ hơn Cực tiểu:</span><br>• Học sinh tính ra $y_{CĐ} = -1$ và $y_{CT} = 3$ rồi vội cho rằng mình tính sai và sửa lại bảng biến thiên $\\implies$ <b>SAI LẦM</b>!<br>• Nhớ rằng: Cực đại chỉ là đỉnh cao nhất trong <b>lân cận nhánh bên trái</b> của tiệm cận đứng. Nhánh bên phải tiệm cận đứng có thể vươn lên rất cao nên điểm cực tiểu của nó hoàn toàn có thể lớn hơn điểm cực đại của nhánh bên kia!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: TÂM ĐỐI XỨNG LÀ GIAO CỦA TCĐ VÀ TCX",
      "startTime": 161.61,
      "endTime": 170.57,
      "duration": 8.96,
      "mascotMode": "cheer",
      "mascotTip": "Tâm đối xứng I = Giao(TCĐ, TCX). Đồng thời I là trung điểm của 2 điểm cực trị!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Mẹo giải nhanh hàm phân thức bậc hai / bậc nhất:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">• <b>Mẹo 1:</b> Tâm đối xứng $I$ luôn là giao điểm của đường tiệm cận đứng và đường tiệm cận xiên.<br>• <b>Mẹo 2:</b> Nếu hàm số có 2 điểm cực trị $A(x_1; y_1)$ và $B(x_2; y_2)$ thì tâm đối xứng $I$ chính là trung điểm của đoạn thẳng $AB$: $$x_I = \\frac{x_1 + x_2}{2}, \\quad y_I = \\frac{y_1 + y_2}{2}$$Giúp tìm cực trị hoặc tâm đối xứng chỉ trong 2 giây!</div>"
    }
  ]
},
  bai4_muc4: {
  "lessonId": "bai4",
  "lessonTitle": "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
  "sectionId": "bai4_muc3",
  "sectionTitle": "Mục 3: Hàm phân thức bậc hai / bậc nhất y = (ax²+bx+c)/(px+q)",
  "audio": "/audio/bai4_muc3.mp3",
  "audioSrc": "./audio/bai4_muc3.mp3",
  "audio_src": "./audio/bai4_muc3.mp3",
  "timestamp_src": "timestamps/bai4_muc3.json",
  "totalDuration": 170.57,
  "duration": 170.57,
  "title": "Mục 3: Hàm phân thức bậc hai / bậc nhất y = (ax²+bx+c)/(px+q)",
  "owl_tip": "Dạng mới GDPT 2018: Chia tử cho mẫu y = a_1 x + b_1 + r/(px+q). Tiệm cận xiên là y = a_1 x + b_1!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 35.28,
      "id": "part2"
    },
    {
      "time": 51.39,
      "id": "part3"
    },
    {
      "time": 54.96,
      "id": "vd1_q"
    },
    {
      "time": 69.64,
      "id": "vd1_a"
    },
    {
      "time": 94.47,
      "id": "vd2_q"
    },
    {
      "time": 106.91,
      "id": "vd2_a"
    },
    {
      "time": 125.57,
      "id": "vd3_q"
    },
    {
      "time": 140.77,
      "id": "vd3_a"
    },
    {
      "time": 152.27,
      "id": "part4"
    },
    {
      "time": 161.61,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Khái niệm & Sơ đồ khảo sát</h3>\n        <p>Hàm số: $y = \\frac{ax^2+bx+c}{px+q} \\, (p \\neq 0)$<br>\n        <b>Bước 1:</b> $D = \\mathbb{R} \\setminus \\left\\{-\\frac{q}{p}\\right\\}$.<br>\n        <b>Bước 2:</b> Chia đa thức: $y = a_1 x + b_1 + \\frac{r}{px+q}$.<br>\n        + TCĐ: $x = -\\frac{q}{p}$; TCX: $y = a_1 x + b_1$. Tâm đối xứng $I$ là giao điểm 2 tiệm cận.<br>\n        <b>Bước 3:</b> Tính $y'$, lập BBT và vẽ đồ thị.</p>\n      </div>\n      <div id=\"part2\"><h3>2. Các dạng đồ thị</h3>\n        <p>Đồ thị có 2 điểm cực trị nằm về 2 phía tiệm cận đứng. Giá trị $y_{CĐ}$ có thể nhỏ hơn $y_{CT}$.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ điển hình</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Khảo sát hàm số $y = \\frac{x^2-x+1}{x-1}$.<br><i>(Thời gian làm nháp: 30s)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> Chia đa thức: $y = x + \\frac{1}{x-1}$. TCĐ: $x = 1$, TCX: $y = x$, $I(1; 1)$. CĐ $(0; -1)$, CT $(2; 3)$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Tìm tâm đối xứng $I$ của $y = \\frac{2x^2+x-3}{x+1}$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> TCĐ: $x = -1$, TCX: $y = 2x - 1$. Thay $x = -1 \\Rightarrow y = -3$. Tâm đối xứng <b>$I(-1; -3)$</b>.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Đọc BBT hàm phân thức bậc 2 trên bậc 1 có TCĐ $x = 1$, CĐ $(0; 1)$ và CT $(2; 5)$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải:</b> TCĐ là $x = 1$. Cực đại có tung độ $y = 1$ nhỏ hơn cực tiểu $y = 5$.\n        </div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Hoang mang khi thấy giá trị cực đại nhỏ hơn cực tiểu.</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Tâm đối xứng $I$ luôn là giao điểm của tiệm cận đứng và tiệm cận xiên.</p></div>\n    ",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm & Sơ đồ khảo sát",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Các dạng đồ thị",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ điển hình (3 Ví dụ)",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Bẫy đề thi",
      "scenes": [
        9
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo Thầy Cú",
      "scenes": [
        10
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 4: HÀM PHÂN THỨC BẬC HAI / BẬC NHẤT",
      "subtitle": "PHẦN 1: SƠ ĐỒ KHẢO SÁT & TIỆM CẬN XIÊN",
      "startTime": 0.0,
      "endTime": 35.28,
      "duration": 35.28,
      "mascotMode": "pointer",
      "mascotTip": "Dạng mới GDPT 2018: Chia tử cho mẫu y = a_1 x + b_1 + r/(px+q). Tiệm cận xiên là y = a_1 x + b_1!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Sơ đồ khảo sát hàm $y = \\frac{ax^2+bx+c}{px+q} \\quad (p \\neq 0)$</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Bước 1:</b> Tập xác định: $D = \\mathbb{R} \\setminus \\left\\{-\\frac{q}{p}\\right\\}$.<br>• <b>Bước 2:</b> Chia đa thức tử cho mẫu:<br>$$y = a_1 x + b_1 + \\frac{r}{px+q}$$<br>&emsp;+ <b>Tiệm cận đứng:</b> $x = -\\frac{q}{p}$.<br>&emsp;+ <b>Tiệm cận xiên:</b> $y = a_1 x + b_1$.<br>&emsp;+ <b>Tâm đối xứng $I$:</b> Là giao điểm của tiệm cận xiên và tiệm cận đứng.<br>• <b>Bước 3:</b> Tính $y'$, lập bảng biến thiên và vẽ đồ thị hypebol xiên.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "CÁC DẠNG ĐỒ THỊ BẬC HAI / BẬC NHẤT",
      "subtitle": "PHẦN 2: ĐẶC ĐIỂM CỰC TRỊ VÀ HAI NHÁNH ĐỒ THỊ",
      "startTime": 35.28,
      "endTime": 54.96,
      "duration": 19.68,
      "mascotMode": "pointer",
      "mascotTip": "Đồ thị có 2 cực trị nằm về 2 phía của tiệm cận đứng. Giá trị Cực đại CÓ THỂ NHỎ HƠN Cực tiểu!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Các dạng đồ thị phân thức bậc hai / bậc nhất</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Trường hợp 1:</b> Phương trình $y' = 0$ có 2 nghiệm phân biệt:<br>&emsp;+ Đồ thị có 2 điểm cực trị nằm về hai phía của đường tiệm cận đứng.<br>&emsp;+ Tâm đối xứng $I$ chính là trung điểm của đoạn thẳng nối 2 điểm cực trị!<br>&emsp;+ <b>Hiện tượng đặc biệt:</b> Giá trị cực đại $y_{CĐ}$ có thể <b>nhỏ hơn</b> giá trị cực tiểu $y_{CT}$.<br>• <b>Trường hợp 2:</b> Phương trình $y' = 0$ vô nghiệm:<br>&emsp;+ Hàm số luôn đơn điệu trên từng khoảng xác định và không có cực trị.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: KHẢO SÁT & VẼ ĐỒ THỊ",
      "subtitle": "y = (x^2 - x + 1) / (x - 1)",
      "startTime": 54.96,
      "endTime": 69.64,
      "duration": 14.68,
      "mascotMode": "pointer",
      "mascotTip": "Chia đa thức: (x^2 - x + 1)/(x - 1) = x + 1/(x - 1). TCĐ x = 1, TCX y = x!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Khảo sát sự biến thiên và vẽ đồ thị hàm số: $$y = \\frac{x^2 - x + 1}{x - 1}$$<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian làm nháp: 30 giây</b><br><i>(Chia tử cho mẫu, tìm TCĐ, TCX và giải y' = 0...)</i></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT & BẢNG BIẾN THIÊN",
      "subtitle": "CỰC ĐẠI (0; -1), CỰC TIỂU (2; 3), TÂM ĐỐI XỨNG I(1; 1)",
      "startTime": 69.64,
      "endTime": 94.47,
      "duration": 24.83,
      "mascotMode": "cheer",
      "mascotTip": "y_CĐ = -1 nhỏ hơn y_CT = 3! Đây là bản chất hoàn toàn tự nhiên vì cực trị mang tính địa phương!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• $D = \\mathbb{R} \\setminus \\{1\\}$. Chia đa thức: $y = x + \\frac{1}{x - 1}$.<br>• TCĐ: $x = 1$; Tiệm cận xiên: $y = x$. Tâm đối xứng $I(1; 1)$.<br>• $y' = 1 - \\frac{1}{(x-1)^2} = \\frac{x(x-2)}{(x-1)^2} = 0 \\iff x = 0$ hoặc $x = 2$.<br>• Cực đại tại $(0; -1)$, Cực tiểu tại $(2; 3)$. Trung điểm của 2 cực trị chính là $I(1; 1)$.</p></div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: TÌM TÂM ĐỐI XỨNG CỦA ĐỒ THỊ",
      "subtitle": "y = (2x^2 + x - 3) / (x + 1)",
      "startTime": 94.47,
      "endTime": 106.91,
      "duration": 12.44,
      "mascotMode": "pointer",
      "mascotTip": "Chia tử cho mẫu: thương là 2x - 1. Thay x = -1 vào TCX tìm tung độ y = -3!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Tìm tọa độ tâm đối xứng $I$ của đồ thị hàm số: $$y = \\frac{2x^2+x-3}{x+1}$$<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b><br><i>(Tìm giao điểm của Tiệm cận đứng và Tiệm cận xiên...)</i></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "TÂM ĐỐI XỨNG I(-1; -3)",
      "startTime": 106.91,
      "endTime": 125.57,
      "duration": 18.66,
      "mascotMode": "cheer",
      "mascotTip": "TCĐ x = -1, TCX y = 2x - 1 -> Giao điểm là I(-1; -3)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Nghiệm của mẫu số: $x + 1 = 0 \\implies$ Tiệm cận đứng là $x = -1$.<br>• Thực hiện phép chia đa thức tử cho mẫu:<br>$$2x^2 + x - 3 = (x + 1)(2x - 1) - 2 \\implies y = 2x - 1 - \\frac{2}{x+1}$$<br>$\\implies$ Đường tiệm cận xiên là <b>$y = 2x - 1$</b>.<br>• Thay hoành độ $x = -1$ vào phương trình TCX: $y = 2(-1) - 1 = -3$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> Tâm đối xứng của đồ thị là <b>$I(-1; -3)$</b>.</p></div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: ĐỌC BBT HÀM BẬC HAI / BẬC NHẤT",
      "subtitle": "TCĐ x = 1, CỰC ĐẠI (0; 1), CỰC TIỂU (2; 5)",
      "startTime": 125.57,
      "endTime": 140.77,
      "duration": 15.2,
      "mascotMode": "magnifier",
      "mascotTip": "Quan sát kỹ BBT: y_CĐ = 1 nhỏ hơn y_CT = 5 vì 2 nhánh nằm về 2 phía TCĐ!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:20px; line-height:1.5; color:#f8fafc;\"><b>Ví dụ 3:</b> Đọc bảng biến thiên của hàm phân thức bậc 2 trên bậc 1 sau:<table style=\"width:100%; max-width:440px; border-collapse:collapse; text-align:center; background:#ffffff !important; color:#111827 !important; border:2px solid #374151; margin:12px auto; font-size:15px; font-weight:600;\"><tr style=\"border-bottom:1.5px solid #374151;\"><td style=\"width:45px; border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$x$</td><td style=\"padding:6px; color:#111827 !important;\">$-\\infty$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$0$</td><td></td><td style=\"padding:6px; color:#111827 !important; background:#fee2e2;\">$1$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$2$</td><td></td><td style=\"padding:6px; color:#111827 !important;\">$+\\infty$</td></tr><tr style=\"border-bottom:1.5px solid #374151;\"><td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y'$</td><td></td><td style=\"color:#2563eb !important; font-size:16px;\">$+$</td><td>$0$</td><td style=\"color:#dc2626 !important; font-size:16px;\">$-$</td><td style=\"color:#dc2626 !important; font-weight:bold;\">$||$</td><td style=\"color:#dc2626 !important; font-size:16px;\">$-$</td><td>$0$</td><td style=\"color:#2563eb !important; font-size:16px;\">$+$</td><td></td></tr><tr style=\"height:65px;\"><td style=\"border-right:1.5px solid #374151; padding:6px; background:#f3f4f6; color:#111827 !important;\">$y$</td><td style=\"vertical-align:bottom; padding:6px; color:#111827 !important;\">$-\\infty$</td><td>$\\nearrow$</td><td style=\"vertical-align:top; color:#dc2626 !important; font-weight:bold; font-size:17px;\">$1$</td><td>$\\searrow$</td><td style=\"color:#dc2626 !important; font-weight:bold;\">$||$</td><td style=\"vertical-align:top; color:#111827 !important;\">$+\\infty$</td><td>$\\searrow$</td><td style=\"vertical-align:bottom; color:#2563eb !important; font-weight:bold; font-size:17px;\">$5$</td><td>$\\nearrow$</td></tr></table><div style=\"margin-top:10px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "GIÁ TRỊ CỰC ĐẠI NHỎ HƠN CỰC TIỂU LÀ BÌNH THƯỜNG",
      "startTime": 140.77,
      "endTime": 152.27,
      "duration": 11.5,
      "mascotMode": "cheer",
      "mascotTip": "Cực đại y_CĐ = 1 là điểm cao nhất trên nhánh trái, cực tiểu y_CT = 5 là điểm thấp nhất trên nhánh phải!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_a\" style=\"font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải chi tiết:</b><br>• Đồ thị có tiệm cận đứng là $x = 1$ (tại đây có vạch kép $||$).<br>• Điểm cực đại là $A(0; 1)$, điểm cực tiểu là $B(2; 5)$.<br>• Giá trị cực đại $y_{CĐ} = 1$ nhỏ hơn giá trị cực tiểu $y_{CT} = 5$.<br>• Điều này hoàn toàn chính xác vì cực trị chỉ mang tính địa phương trong một khoảng lân cận, không phải là Giá trị lớn nhất hay Giá trị nhỏ nhất toàn cục.</p></div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI VỀ CỰC ĐẠI & CỰC TIỂU",
      "subtitle": "PHẦN 4: HOANG MANG KHI y_CĐ < y_CT",
      "startTime": 152.27,
      "endTime": 161.61,
      "duration": 9.34,
      "mascotMode": "magnifier",
      "mascotTip": "Đừng vội vàng sửa dấu đạo hàm khi thấy y_CĐ < y_CT! Với hàm bậc 2/1, điều này hoàn toàn tự nhiên!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi: Hoang mang khi thấy giá trị Cực đại nhỏ hơn Cực tiểu:</span><br>• Học sinh tính ra $y_{CĐ} = -1$ và $y_{CT} = 3$ rồi vội cho rằng mình tính sai và sửa lại bảng biến thiên $\\implies$ <b>SAI LẦM</b>!<br>• Nhớ rằng: Cực đại chỉ là đỉnh cao nhất trong <b>lân cận nhánh bên trái</b> của tiệm cận đứng. Nhánh bên phải tiệm cận đứng có thể vươn lên rất cao nên điểm cực tiểu của nó hoàn toàn có thể lớn hơn điểm cực đại của nhánh bên kia!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: TÂM ĐỐI XỨNG LÀ GIAO CỦA TCĐ VÀ TCX",
      "startTime": 161.61,
      "endTime": 170.57,
      "duration": 8.96,
      "mascotMode": "cheer",
      "mascotTip": "Tâm đối xứng I = Giao(TCĐ, TCX). Đồng thời I là trung điểm của 2 điểm cực trị!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Mẹo giải nhanh hàm phân thức bậc hai / bậc nhất:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">• <b>Mẹo 1:</b> Tâm đối xứng $I$ luôn là giao điểm của đường tiệm cận đứng và đường tiệm cận xiên.<br>• <b>Mẹo 2:</b> Nếu hàm số có 2 điểm cực trị $A(x_1; y_1)$ và $B(x_2; y_2)$ thì tâm đối xứng $I$ chính là trung điểm của đoạn thẳng $AB$: $$x_I = \\frac{x_1 + x_2}{2}, \\quad y_I = \\frac{y_1 + y_2}{2}$$Giúp tìm cực trị hoặc tâm đối xứng chỉ trong 2 giây!</div>"
    }
  ]
}
});
if(typeof window.CHAPTER1_LECTURES !== 'undefined') {
  Object.assign(window.CHAPTER1_LECTURES, {
    bai4_muc1: window.CHAPTER1_DATA.bai4_muc1,
    bai4_muc2: window.CHAPTER1_DATA.bai4_muc2,
    bai4_muc3: window.CHAPTER1_DATA.bai4_muc3,
    bai4_muc4: window.CHAPTER1_DATA.bai4_muc4
  });
}
