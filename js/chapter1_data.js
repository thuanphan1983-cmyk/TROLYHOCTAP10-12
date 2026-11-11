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
  "totalDuration": 149,
  "duration": 149,
  "title": "Mục 1: Định nghĩa GTLN & GTNN (Phân biệt Max/Min với Cực trị)",
  "owl_tip": "Ghi nhớ: GTLN/GTNN là giá trị toàn cục trên tập D, khác với Cực trị chỉ mang tính chất địa phương cục bộ!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 37.4,
      "id": "part2"
    },
    {
      "time": 48.54,
      "id": "part3"
    },
    {
      "time": 51.79,
      "id": "vd1_q"
    },
    {
      "time": 67.56,
      "id": "vd1_a"
    },
    {
      "time": 83.29,
      "id": "vd2_q"
    },
    {
      "time": 96.15,
      "id": "vd2_a"
    },
    {
      "time": 105.54,
      "id": "vd3_q"
    },
    {
      "time": 116.76,
      "id": "vd3_a"
    },
    {
      "time": 127.58,
      "id": "part4"
    },
    {
      "time": 136.93,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Khái niệm cốt lõi</h3><p>Cho hàm số $y=f(x)$ xác định trên $D$.<br>+ $\\max_{D} f(x) = M \\iff f(x) \\le M \\, \\forall x \\in D$ và $\\exists x_0 \\in D: f(x_0)=M$.<br>+ $\\min_{D} f(x) = m \\iff f(x) \\ge m \\, \\forall x \\in D$ và $\\exists x_0 \\in D: f(x_0)=m$.</p></div>\n      <div id=\"part2\"><h3>2. Phân biệt với Cực trị</h3><p>Cực đại, cực tiểu là tính địa phương. GTLN, GTNN là tính toàn cục trên $D$.</p></div>\n      <div id=\"part3\"><h3>3. Các ví dụ điển hình</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Tìm GTLN, GTNN của $y = 4 - x^2$ trên $[-1; 2]$.<br><i>(Lấy nháp ra tính toán...)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <svg viewBox=\"0 0 200 180\" style=\"width:100%; max-width:250px; background:white; border:1px solid #ccc; display:block; margin:auto;\">\n            <line x1=\"20\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"black\"/> \n            <line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"160\" stroke=\"black\"/>\n            <polyline points=\"70,50 85,27.5 100,20 115,27.5 130,50 145,87.5 160,140\" stroke=\"blue\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"100\" cy=\"20\" r=\"4\" fill=\"red\"/>\n            <text x=\"108\" y=\"25\" font-size=\"14\" font-weight=\"bold\">4</text>\n            <circle cx=\"160\" cy=\"140\" r=\"4\" fill=\"red\"/>\n            <text x=\"70\" y=\"155\" font-size=\"12\">-1</text>\n            <text x=\"155\" y=\"155\" font-size=\"12\">2</text>\n          </svg>\n          <p><b>Giải chi tiết:</b> Đỉnh cao nhất tại $x=0 \\Rightarrow \\max y = 4$. Điểm thấp nhất tại $x=2 \\Rightarrow \\min y = 0$.</p>\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Hàm $y = 2x - 1$ trên khoảng $(0; 2)$ có Max Min không?</div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải chi tiết:</b> Đồ thị đi từ $y=-1$ đến $y=3$ KHÔNG lấy mút. Không tồn tại $x_0$ để dấu bằng xảy ra $\\Rightarrow$ KHÔNG CÓ max, min.</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Đọc Max/Min từ Bảng biến thiên sau trên $[-2; 3]$:<br>\n          <table style=\"width:100%; max-width:350px; border-collapse: collapse; text-align:center; background:white; border:1px solid black; margin:10px auto;\">\n            <tr style=\"border-bottom:1px solid black;\">\n              <td style=\"border-right:1px solid black; padding:5px;\">$x$</td>\n              <td style=\"padding:5px;\">$-2$</td> <td></td> <td>$1$</td> <td></td> <td style=\"padding:5px;\">$3$</td>\n            </tr>\n            <tr style=\"border-bottom:1px solid black;\">\n              <td style=\"border-right:1px solid black; padding:5px;\">$y'$</td>\n              <td></td> <td>$+$</td> <td>$0$</td> <td>$-$</td> <td></td>\n            </tr>\n            <tr>\n              <td style=\"border-right:1px solid black; padding:5px;\">$y$</td>\n              <td style=\"vertical-align:bottom; padding:5px;\">$-2$</td>\n              <td>$\\nearrow$</td>\n              <td style=\"vertical-align:top; padding:5px; color:red; font-weight:bold;\">$5$</td>\n              <td>$\\searrow$</td>\n              <td style=\"vertical-align:bottom; padding:5px;\">$1$</td>\n            </tr>\n          </table>\n        </div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải chi tiết:</b> Quét dọc bảng, điểm cao nhất là $5$, trũng nhất là $-2 \\Rightarrow \\max = 5, \\min = -2$.</div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Tìm được $M$ nhưng không tồn tại $x_0 \\in D$.</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Gióng điểm cao nhất/thấp nhất xuống trục $Ox$ để tìm $x_0$.</p></div>\n    ",
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
      "partTitle": "Phần 2: Phân biệt với Cực trị",
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
      "title": "BÀI 2: GIÁ TRỊ LỚN NHẤT & NHỎ NHẤT",
      "subtitle": "PHẦN 1: KHÁI NIỆM CỐT LÕI (SGK)",
      "startTime": 0.0,
      "endTime": 37.4,
      "duration": 37.4,
      "mascotMode": "pointer",
      "mascotTip": "GTLN và GTNN bắt buộc phải tồn tại dấu bằng xảy ra tại x0 thuộc D!",
      "bodyHtml": "<div style=\"font-size:22px; color:#fef08a; font-weight:bold; margin-bottom:8px;\">1. Khái niệm cốt lõi</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\">Cho hàm số $y=f(x)$ xác định trên tập $D$:<br>• Số $M$ là <b>giá trị lớn nhất</b> (GTLN) trên $D$ khi và chỉ khi:<br>&nbsp;&nbsp; $f(x) \\le M, \\; \\forall x \\in D$ và $\\exists x_0 \\in D: f(x_0) = M$. Ký hiệu: $\\max_D f(x) = M$.<br>• Số $m$ là <b>giá trị nhỏ nhất</b> (GTNN) trên $D$ khi và chỉ khi:<br>&nbsp;&nbsp; $f(x) \\ge m, \\; \\forall x \\in D$ và $\\exists x_0 \\in D: f(x_0) = m$. Ký hiệu: $\\min_D f(x) = m$.</div>"
    },
    {
      "sceneIndex": 2,
      "title": "BÀI 2: PHÂN BIỆT BẢN CHẤT VỚI CỰC TRỊ",
      "subtitle": "PHẦN 2: SO SÁNH TOÀN CỤC VÀ ĐỊA PHƯƠNG",
      "startTime": 37.4,
      "endTime": 51.79,
      "duration": 14.39,
      "mascotMode": "magnifier",
      "mascotTip": "Cực trị chỉ mang tính địa phương trong lân cận hẹp. Max/Min mang tính toàn cục trên toàn bộ tập D!",
      "bodyHtml": "<div style=\"font-size:22px; color:#38bdf8; font-weight:bold; margin-bottom:8px;\">2. Phân biệt GTLN/GTNN với Cực trị</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\">• <b>Cực trị (Cực đại, cực tiểu):</b> Mang tính chất <b>địa phương</b> trong một lân cận hẹp.<br>• <b>GTLN, GTNN:</b> Mang tính chất <b>toàn cục</b> trên toàn bộ tập xác định $D$.<br>• Hàm số có thể có nhiều điểm cực đại, nhưng chỉ có tối đa <b>một giá trị lớn nhất</b> duy nhất trên $D$!</div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: ĐỀ BÀI (THỜI GIAN NHÁP)",
      "subtitle": "Các em hãy lấy giấy nháp ra thử sức...",
      "startTime": 51.79,
      "endTime": 67.56,
      "duration": 15.77,
      "mascotMode": "pointer",
      "mascotTip": "Chú ý bề lõm của parabol và kiểm tra đỉnh x=0 có nằm trong [-1; 2] không!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Tìm GTLN, GTNN của hàm số $y = 4 - x^2$ trên đoạn $[-1; 2]$.<br><div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thử sức:</b> <i>(Lấy nháp ra tính toán...)</i></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT & ĐỒ THỊ PARABOL",
      "subtitle": "Đỉnh cao nhất tại x=0, thấp nhất tại x=2",
      "startTime": 67.56,
      "endTime": 83.29,
      "duration": 15.73,
      "mascotMode": "cheer",
      "mascotTip": "Max = 4 tại x = 0, Min = 0 tại x = 2!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:20px; color:#94a3b8; margin-bottom:6px;\"><b>Ví dụ 1:</b> Tìm GTLN, GTNN của $y = 4 - x^2$ trên $[-1; 2]$.</div><div id=\"vd1_a\" style=\"border-top:1px dashed #64748b; padding-top:10px; font-size:20px; line-height:1.6; color:#f8fafc;\"><div style=\"display:flex; justify-content:center; margin:6px 0;\"><svg viewBox=\"0 0 200 180\" style=\"width:100%; max-width:230px; background:white; border:1px solid #ccc; border-radius:8px; display:block; margin:auto;\"><line x1=\"20\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"160\" stroke=\"black\" stroke-width=\"1.5\"/><polyline points=\"70,50 85,27.5 100,20 115,27.5 130,50 145,87.5 160,140\" stroke=\"blue\" fill=\"none\" stroke-width=\"2.5\"/><circle cx=\"100\" cy=\"20\" r=\"4\" fill=\"red\"/><text x=\"108\" y=\"25\" font-size=\"14\" font-weight=\"bold\" fill=\"#000\">4</text><circle cx=\"160\" cy=\"140\" r=\"4\" fill=\"red\"/><text x=\"65\" y=\"155\" font-size=\"12\" fill=\"#000\">-1</text><text x=\"155\" y=\"155\" font-size=\"12\" fill=\"#000\">2</text></svg></div><p><b>Giải chi tiết:</b> Dựa vào đồ thị parabol, đỉnh cao nhất tại $x=0 \\implies \\max_{[-1;2]} y = 4$. Điểm thấp nhất trên đoạn đạt tại $x=2 \\implies \\min_{[-1;2]} y = 0$.</p></div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: ĐỀ BÀI (THỜI GIAN NHÁP)",
      "subtitle": "Hàm số trên khoảng mở (0; 2)",
      "startTime": 83.29,
      "endTime": 96.15,
      "duration": 12.86,
      "mascotMode": "pointer",
      "mascotTip": "Khoảng mở (0; 2) không lấy hai đầu mút 0 và 2, chú ý điều kiện tồn tại dấu bằng!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Hàm số $y = 2x - 1$ trên khoảng mở $(0; 2)$ có Max Min không?<br><div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thử sức:</b> <i>(Chú ý đây là khoảng mở không lấy mút nhé...)</i></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "Kết luận không tồn tại Max và Min",
      "startTime": 96.15,
      "endTime": 105.54,
      "duration": 9.39,
      "mascotMode": "cheer",
      "mascotTip": "Vì không lấy mút nên không tồn tại x0 thuộc (0; 2) để dấu bằng xảy ra!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:20px; color:#94a3b8; margin-bottom:6px;\"><b>Ví dụ 2:</b> Hàm số $y = 2x - 1$ trên khoảng mở $(0; 2)$.</div><div id=\"vd2_a\" style=\"border-top:1px dashed #64748b; padding-top:10px; font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Giải chi tiết:</b> Đồ thị đi từ $y=-1$ đến $y=3$ nhưng KHÔNG lấy hai đầu mút.<br>Không tồn tại $x_0 \\in (0; 2)$ để dấu bằng xảy ra.<br><b style=\"color:#ef4444;\">Đáp án:</b> Hàm số <b>KHÔNG CÓ</b> giá trị lớn nhất và nhỏ nhất!</p></div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: BẢNG BIẾN THIÊN TRÊN [-2; 3]",
      "subtitle": "Đọc Max/Min từ Bảng biến thiên KaTeX siêu nét",
      "startTime": 105.54,
      "endTime": 116.76,
      "duration": 11.22,
      "mascotMode": "pointer",
      "mascotTip": "Quan sát các mũi tên biến thiên trên màn hình: điểm cao nhất và thấp nhất là bao nhiêu?",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:20px; line-height:1.5; color:#f8fafc;\"><b>Ví dụ 3:</b> Đọc Max/Min từ Bảng biến thiên sau trên đoạn $[-2; 3]$:<table style=\"width:100%; max-width:350px; border-collapse: collapse; text-align:center; background:white; color:#000; border:1.5px solid black; margin:10px auto; border-radius:4px;\"><tr style=\"border-bottom:1px solid black;\"><td style=\"border-right:1px solid black; padding:5px; font-weight:bold;\">$x$</td><td style=\"padding:5px;\">$-2$</td> <td></td> <td>$1$</td> <td></td> <td style=\"padding:5px;\">$3$</td></tr><tr style=\"border-bottom:1px solid black;\"><td style=\"border-right:1px solid black; padding:5px; font-weight:bold;\">$y'$</td><td></td> <td>$+$</td> <td>$0$</td> <td>$-$</td> <td></td></tr><tr><td style=\"border-right:1px solid black; padding:5px; font-weight:bold;\">$y$</td><td style=\"vertical-align:bottom; padding:5px;\">$-2$</td><td>$\\nearrow$</td><td style=\"vertical-align:top; padding:5px; color:red; font-weight:bold;\">$5$</td><td>$\\searrow$</td><td style=\"vertical-align:bottom; padding:5px;\">$1$</td></tr></table></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT TỪ BBT",
      "subtitle": "Quét dọc bảng: Max = 5, Min = -2",
      "startTime": 116.76,
      "endTime": 127.58,
      "duration": 10.82,
      "mascotMode": "cheer",
      "mascotTip": "Mũi tên đi lên đỉnh 5 là Max toàn cục, trũng xuống -2 là Min!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:18px; color:#94a3b8; margin-bottom:4px;\"><b>Ví dụ 3:</b> Đọc Max/Min từ Bảng biến thiên trên đoạn $[-2; 3]$.</div><div id=\"vd3_a\" style=\"border-top:1px dashed #64748b; padding-top:10px; font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Giải chi tiết:</b> Nhìn vào bảng biến thiên:<br>• Mũi tên đi lên số $5$ là điểm cao nhất toàn cục $\\implies \\max_{[-2;3]} y = 5$ (tại $x=1$).<br>• Đi xuống $-2$ là điểm trũng sâu nhất $\\implies \\min_{[-2;3]} y = -2$ (tại $x=-2$).</p></div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BÀI 2: BẪY ĐỀ THI CẦN TRÁNH",
      "subtitle": "PHẦN 4: CẢNH BÁO BẪY SAI LẦM",
      "startTime": 127.58,
      "endTime": 136.93,
      "duration": 9.35,
      "mascotMode": "magnifier",
      "mascotTip": "Sai lầm lớn nhất là tìm được M nhưng hàm số không bao giờ đạt được do x0 không thuộc D!",
      "bodyHtml": "<div style=\"font-size:22px; color:#f43f5e; font-weight:bold; margin-bottom:8px;\">4. Bẫy đề thi</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\">• Sai lầm lớn nhất là tìm được giá trị $M$ nhưng hàm số <b>không bao giờ đạt được</b> giá trị đó do $x_0$ không thuộc tập $D$.<br>• Luôn kiểm tra kỹ xem dấu bằng $f(x_0)=M$ có tồn tại nghiệm $x_0 \\in D$ hay không!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÀI 2: MẸO THẦY CÚ THÔNG THÁI",
      "subtitle": "PHẦN 5: BÍ QUYẾT GIÓNG TRỤC HOÀNH",
      "startTime": 136.93,
      "endTime": 149,
      "duration": 12.07,
      "mascotMode": "cheer",
      "mascotTip": "Luôn gióng điểm nhô cao nhất và trũng sâu nhất trên đồ thị xuống thẳng trục hoành để đọc chính xác x0!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Mẹo Thầy Cú thông thái</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\">• Luôn gióng điểm nhô cao nhất và trũng sâu nhất trên đồ thị xuống thẳng trục hoành $Ox$ để đọc chính xác $x_0$.<br>• Ghi nhớ: Hỏi \"giá trị\" là trả lời $y$, hỏi \"tại điểm nào\" là trả lời $x$!</div>"
    }
  ]
},

    bai2_muc2: {
  "lessonId": "bai2",
  "lessonTitle": "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
  "sectionId": "bai2_muc2",
  "sectionTitle": "Mục 2: Quy tắc tìm GTLN, GTNN trên một đoạn",
  "audio": "/audio/bai2_muc2.mp3",
  "audioSrc": "./audio/bai2_muc2.mp3",
  "audio_src": "./audio/bai2_muc2.mp3",
  "totalDuration": 141,
  "duration": 141,
  "title": "Mục 2: Quy tắc tìm GTLN & GTNN trên đoạn [a; b]",
  "owl_tip": "Quy tắc 3 bước: Tính đạo hàm -> Lấy nghiệm trong (a;b) -> So sánh giá trị hai đầu mút và nghiệm.",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 17.97,
      "id": "part2"
    },
    {
      "time": 37.7,
      "id": "part3"
    },
    {
      "time": 40.87,
      "id": "vd1_q"
    },
    {
      "time": 53.31,
      "id": "vd1_a"
    },
    {
      "time": 71.08,
      "id": "vd2_q"
    },
    {
      "time": 82.67,
      "id": "vd2_a"
    },
    {
      "time": 96.44,
      "id": "vd3_q"
    },
    {
      "time": 108.26,
      "id": "vd3_a"
    },
    {
      "time": 119.79,
      "id": "part4"
    },
    {
      "time": 127.69,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Định lý</h3><p>Hàm số liên tục trên đoạn $[a;b]$ luôn có Max và Min.</p></div>\n      <div id=\"part2\"><h3>2. Quy trình BGD</h3><p>B1: Tính $y'$. Tìm nghiệm $x_i \\in (a;b)$.<br>B2: Tính $y(a), y(b), y(x_i)$.<br>B3: Số lớn nhất là Max, nhỏ nhất là Min.</p></div>\n      <div id=\"part3\"><h3>3. Các ví dụ thực hành</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Tìm Max, Min của $y = x^3 - 3x^2 + 2$ trên $[0; 3]$.</div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> $y' = 3x^2 - 6x = 0 \\Leftrightarrow x=0 \\text{ (loại)}, x=2 \\text{ (nhận)}$.<br>Ta có: $y(0)=2, y(2)=-2, y(3)=2$. Vậy $\\max = 2, \\min = -2$.</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Tìm Max, Min của $y = \\frac{x+1}{x-1}$ trên $[2; 4]$.</div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> $y' = \\frac{-2}{(x-1)^2} < 0 \\, \\forall x$. Ta có $y(2)=3, y(4)=\\frac{5}{3}$. Vậy $\\max = 3, \\min = \\frac{5}{3}$.</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> $y = x + \\sqrt{4-x^2}$ trên $[-2; 2]$.</div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> $y' = 1 - \\frac{x}{\\sqrt{4-x^2}}=0 \\Rightarrow x=\\sqrt{2}$. Ta có $\\max y = 2\\sqrt{2}, \\min y = -2$.</div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy trắc nghiệm</h3><p>Quên loại nghiệm $x_i \\notin (a;b)$.</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Casio</h3><p>Dùng TABLE [Menu 8], Start=a, End=b, Step=(b-a)/29.</p></div>\n    ",
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
      "partTitle": "Phần 2: Phân biệt với Cực trị",
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
      "title": "BÀI 2 - MỤC 2: TÌM MAX/MIN TRÊN ĐOẠN [a; b]",
      "subtitle": "PHẦN 1: ĐỊNH LÝ NỀN TẢNG",
      "startTime": 0.0,
      "endTime": 17.97,
      "duration": 17.97,
      "mascotMode": "pointer",
      "mascotTip": "Hàm số liên tục trên đoạn đóng [a; b] thì chắc chắn luôn đạt GTLN và GTNN!",
      "bodyHtml": "<div style=\"font-size:22px; color:#fef08a; font-weight:bold; margin-bottom:8px;\">1. Định lý nền tảng</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\">Theo định lý, mọi hàm số liên tục trên đoạn đóng $[a; b]$ đều chắc chắn đạt được giá trị lớn nhất và giá trị nhỏ nhất trên đoạn đó.</div>"
    },
    {
      "sceneIndex": 2,
      "title": "QUY TRÌNH GIẢI CỦA BỘ GIÁO DỤC",
      "subtitle": "PHẦN 2: 3 BƯỚC CHUẨN MỰC KHÔNG CẦN VẼ BBT",
      "startTime": 17.97,
      "endTime": 40.87,
      "duration": 22.9,
      "mascotMode": "pointer",
      "mascotTip": "Chỉ lấy các nghiệm nằm lọt trong khoảng mở (a; b)!",
      "bodyHtml": "<div style=\"font-size:22px; color:#38bdf8; font-weight:bold; margin-bottom:8px;\">2. Quy trình giải 3 bước của Bộ Giáo dục</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\">• <b>Bước 1:</b> Tính đạo hàm $y'$, tìm nghiệm, chỉ giữ lại các nghiệm nằm lọt trong khoảng mở $(a; b)$.<br>• <b>Bước 2:</b> Tính giá trị hàm số tại hai đầu mút $y(a), y(b)$ và tại các nghiệm nhận được.<br>• <b>Bước 3:</b> Số lớn nhất là Max, số bé nhất là Min.</div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: ĐA THỨC BẬC BA (THỬ SỨC)",
      "subtitle": "Các em hãy tính nhanh đạo hàm...",
      "startTime": 40.87,
      "endTime": 53.31,
      "duration": 12.44,
      "mascotMode": "pointer",
      "mascotTip": "Tính y' = 3x^2 - 6x, kiểm tra nghiệm có lọt vào (0; 3) không!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Tìm Max, Min của $y = x^3 - 3x^2 + 2$ trên đoạn $[0; 3]$.<br><div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thử sức:</b> <i>(Tính nhanh đạo hàm và kiểm tra nghiệm...)</i></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "Loại nghiệm trùng mút, Max = 2, Min = -2",
      "startTime": 53.31,
      "endTime": 71.08,
      "duration": 17.77,
      "mascotMode": "cheer",
      "mascotTip": "x = 0 bị loại do trùng mút, x = 2 nhận => Max = 2, Min = -2!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:20px; color:#94a3b8; margin-bottom:6px;\"><b>Ví dụ 1:</b> Tìm Max, Min của $y = x^3 - 3x^2 + 2$ trên $[0; 3]$.</div><div id=\"vd1_a\" style=\"border-top:1px dashed #64748b; padding-top:10px; font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải:</b><br>• Đạo hàm $y' = 3x^2 - 6x = 0 \\iff x = 0 \\text{ (loại do trùng mút)}, \\; x = 2 \\text{ (nhận)}$.<br>• Tính giá trị: $f(0) = 2, \\; f(2) = -2, \\; f(3) = 2$.<br><b style=\"color:#10b981;\">Kết luận:</b> $\\max_{[0;3]} y = 2, \\; \\min_{[0;3]} y = -2$.</p></div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: HÀM PHÂN THỨC (THỬ SỨC)",
      "subtitle": "Đạo hàm ad - bc luôn âm",
      "startTime": 71.08,
      "endTime": 82.67,
      "duration": 11.59,
      "mascotMode": "pointer",
      "mascotTip": "Các em tự tính đạo hàm: y' luôn âm đúng không?",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Tìm Max, Min của $y = \\frac{x+1}{x-1}$ trên đoạn $[2; 4]$.<br><div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thử sức:</b> <i>(Đạo hàm luôn mang một dấu...)</i></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "Tính giá trị tại hai đầu mút",
      "startTime": 82.67,
      "endTime": 96.44,
      "duration": 13.77,
      "mascotMode": "cheer",
      "mascotTip": "y(2) = 3, y(4) = 5/3 => Max = 3, Min = 5/3!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:20px; color:#94a3b8; margin-bottom:6px;\"><b>Ví dụ 2:</b> Tìm Max, Min của $y = \\frac{x+1}{x-1}$ trên đoạn $[2; 4]$.</div><div id=\"vd2_a\" style=\"border-top:1px dashed #64748b; padding-top:10px; font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải:</b><br>• $y' = \\frac{-2}{(x-1)^2} < 0, \\; \\forall x \\in [2; 4]$ (luôn âm).<br>• Tính $f(2) = 3, \\; f(4) = \\frac{5}{3}$.<br><b style=\"color:#10b981;\">Kết luận:</b> $\\max_{[2;4]} y = 3, \\; \\min_{[2;4]} y = \\frac{5}{3}$.</p></div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: HÀM CĂN THỨC (THỬ SỨC)",
      "subtitle": "Đạo hàm căn u cẩn thận",
      "startTime": 96.44,
      "endTime": 108.26,
      "duration": 11.82,
      "mascotMode": "pointer",
      "mascotTip": "Quy đồng và giải nghiệm của 1 - x / căn(4-x^2) = 0!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Tìm Max, Min của $y = x + \\sqrt{4-x^2}$ trên đoạn $[-2; 2]$.<br><div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thử sức:</b> <i>(Quy đồng giải nghiệm...)</i></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "So sánh các giá trị: Max = 2 căn 2, Min = -2",
      "startTime": 108.26,
      "endTime": 119.79,
      "duration": 11.53,
      "mascotMode": "cheer",
      "mascotTip": "x = căn 2 thuộc (-2; 2) => Max = 2 căn 2, Min = -2!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:20px; color:#94a3b8; margin-bottom:6px;\"><b>Ví dụ 3:</b> $y = x + \\sqrt{4-x^2}$ trên $[-2; 2]$.</div><div id=\"vd3_a\" style=\"border-top:1px dashed #64748b; padding-top:10px; font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải:</b><br>• $y' = 1 - \\frac{x}{\\sqrt{4-x^2}} = 0 \\iff x = \\sqrt{2} \\in (-2; 2)$.<br>• So sánh: $y(-2) = -2, \\; y(2) = 2, \\; y(\\sqrt{2}) = 2\\sqrt{2}$.<br><b style=\"color:#10b981;\">Kết luận:</b> $\\max = 2\\sqrt{2}, \\; \\min = -2$.</p></div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY TRẮC NGHIỆM",
      "subtitle": "PHẦN 4: QUÊN LOẠI NGHIỆM NGOÀI ĐOẠN",
      "startTime": 119.79,
      "endTime": 127.69,
      "duration": 7.9,
      "mascotMode": "magnifier",
      "mascotTip": "Quên loại nghiệm y' nằm ngoài đoạn a b dẫn đến chọn nhầm đáp án!",
      "bodyHtml": "<div style=\"font-size:22px; color:#f43f5e; font-weight:bold; margin-bottom:8px;\">4. Bẫy trắc nghiệm</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\">• Quên loại nghiệm $y'$ nằm ngoài đoạn $[a; b]$ dẫn đến chọn nhầm đáp án.<br>• Luôn đối chiếu điều kiện $x_i \\in (a; b)$ trước khi tính giá trị!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "MẸO CASIO",
      "subtitle": "PHẦN 5: MENU 8 TABLE",
      "startTime": 127.69,
      "endTime": 141,
      "duration": 13.31,
      "mascotMode": "cheer",
      "mascotTip": "Dùng TABLE Menu tám, Start a, End b, Step (b-a)/29 để quét cực nhanh nhé!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Mẹo Casio</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\">• Dùng <b>TABLE [Menu 8]</b>: Nhập $f(x)$, Start = $a$, End = $b$, Step = $\\frac{b-a}{29}$ để dò giá trị cực nhanh!</div>"
    }
  ]
},

    bai2_muc3: {
  "lessonId": "bai2",
  "lessonTitle": "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
  "sectionId": "bai2_muc3",
  "sectionTitle": "Mục 3: Tìm GTLN, GTNN trên khoảng bằng BBT",
  "audio": "/audio/bai2_muc3.mp3",
  "audioSrc": "./audio/bai2_muc3.mp3",
  "audio_src": "./audio/bai2_muc3.mp3",
  "totalDuration": 127,
  "duration": 127,
  "title": "Mục 3: Tìm GTLN & GTNN trên khoảng (Bảng biến thiên)",
  "owl_tip": "Trên khoảng mở hoặc vô cực, ta bắt buộc tính giới hạn và vẽ bảng biến thiên đầy đủ!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 15.95,
      "id": "part2"
    },
    {
      "time": 29.22,
      "id": "part3"
    },
    {
      "time": 32.36,
      "id": "vd1_q"
    },
    {
      "time": 43.66,
      "id": "vd1_a"
    },
    {
      "time": 57.29,
      "id": "vd2_q"
    },
    {
      "time": 64.76,
      "id": "vd2_a"
    },
    {
      "time": 76.3,
      "id": "vd3_q"
    },
    {
      "time": 87.95,
      "id": "vd3_a"
    },
    {
      "time": 101.45,
      "id": "part4"
    },
    {
      "time": 113.86,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Khái niệm</h3><p>Trên khoảng/nửa khoảng, bắt buộc xét giới hạn và vẽ BBT.</p></div>\n      <div id=\"part2\"><h3>2. Định lý cực trị duy nhất</h3><p>Nếu hàm số có ĐÚNG 1 cực trị trên miền $D$, thì CĐ chính là Max, hoặc CT chính là Min.</p></div>\n      <div id=\"part3\"><h3>3. Các ví dụ điển hình</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Tìm GTNN của $y = x + \\frac{4}{x}$ trên $(0; +\\infty)$.</div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> $y' = 1 - \\frac{4}{x^2}=0 \\Leftrightarrow x=2$. BBT đi từ $+\\infty$ xuống $4$ rồi lên $+\\infty \\Rightarrow \\min = 4$, Không có Max.</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> $y = -x^2 + 2x + 3$ trên $\\mathbb{R}$.</div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> $y'=-2x+2=0 \\Rightarrow x=1$. Đồ thị đi lên $4$ rồi đi xuống $\\Rightarrow \\max = 4$, Không có Min.</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> $y = \\frac{x^2+1}{x}$ trên $(-\\infty; 0)$.</div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> $y'=1-\\frac{1}{x^2}=0 \\Rightarrow x=-1$. BBT đi lên $-2$ rồi đi xuống $\\Rightarrow \\max = -2$, Không có Min.</div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Giới hạn ra $\\infty$ kết luận luôn là Max/Min.</p></div>\n      <div id=\"part5\"><h3>5. Mẹo tư duy</h3><p>Dùng BĐT Cauchy (AM-GM) cho miền dương để nhẩm cực nhanh.</p></div>\n    ",
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
      "partTitle": "Phần 2: Phân biệt với Cực trị",
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
      "title": "BÀI 2 - MỤC 3: TÌM MAX/MIN TRÊN KHOẢNG",
      "subtitle": "PHẦN 1: BẮT BUỘC TÍNH GIỚI HẠN VÀ VẼ BBT",
      "startTime": 0.0,
      "endTime": 15.95,
      "duration": 15.95,
      "mascotMode": "pointer",
      "mascotTip": "Trên khoảng mở hoặc vô cực, bắt buộc tính giới hạn và vẽ bảng biến thiên!",
      "bodyHtml": "<div style=\"font-size:22px; color:#fef08a; font-weight:bold; margin-bottom:8px;\">1. Khái niệm & Yêu cầu vẽ BBT</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\">Khác với đoạn đóng, trên một khoảng mở hoặc vô cực, ta bắt buộc phải tính giới hạn $\\lim$ và vẽ bảng biến thiên đầy đủ.</div>"
    },
    {
      "sceneIndex": 2,
      "title": "ĐỊNH LÝ CỰC TRỊ DUY NHẤT",
      "subtitle": "PHẦN 2: CỰC TRỊ TRỞ THÀNH MAX/MIN TOÀN CỤC",
      "startTime": 15.95,
      "endTime": 32.36,
      "duration": 16.41,
      "mascotMode": "pointer",
      "mascotTip": "Nếu chỉ có đúng 1 điểm cực trị trên khoảng, thì CĐ là Max, hoặc CT là Min!",
      "bodyHtml": "<div style=\"font-size:22px; color:#38bdf8; font-weight:bold; margin-bottom:8px;\">2. Định lý cực trị duy nhất</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\">Nếu hàm số chỉ có đúng một điểm cực trị trên khoảng đang xét, thì cực đại đó sẽ là <b>giá trị lớn nhất</b>, hoặc cực tiểu đó sẽ là <b>giá trị nhỏ nhất</b> toàn cục.</div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: ĐỀ BÀI (THỬ SỨC)",
      "subtitle": "Đạo hàm và lập bảng biến thiên",
      "startTime": 32.36,
      "endTime": 43.66,
      "duration": 11.3,
      "mascotMode": "pointer",
      "mascotTip": "Đạo hàm 1 - 4/x^2, tìm nghiệm dương x = 2!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Tìm GTNN của $y = x + \\frac{4}{x}$ trên $(0; +\\infty)$.<br><div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thử sức:</b> <i>(Các em hãy đạo hàm và xét dấu...)</i></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "Min = 4, hàm không có Max",
      "startTime": 43.66,
      "endTime": 57.29,
      "duration": 13.63,
      "mascotMode": "cheer",
      "mascotTip": "Bảng biến thiên đi xuống tới 4 rồi đi lên => Min = 4, không có Max!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:20px; color:#94a3b8; margin-bottom:6px;\"><b>Ví dụ 1:</b> Tìm GTNN của $y = x + \\frac{4}{x}$ trên $(0; +\\infty)$.</div><div id=\"vd1_a\" style=\"border-top:1px dashed #64748b; padding-top:10px; font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải:</b><br>• $y' = 1 - \\frac{4}{x^2} = 0 \\iff x = 2$ (do $x > 0$).<br>• Bảng biến thiên đi xuống tới $4$ rồi đi lên.<br><b style=\"color:#10b981;\">Kết luận:</b> $\\min = 4$, hàm số không có max.</p></div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: PARABOL TRÊN R (THỬ SỨC)",
      "subtitle": "Hàm bậc hai bề lõm quay xuống",
      "startTime": 57.29,
      "endTime": 64.76,
      "duration": 7.47,
      "mascotMode": "pointer",
      "mascotTip": "Câu này rất cơ bản: parabol có đỉnh là điểm cao nhất!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Xét parabol $y = -x^2 + 2x + 3$ trên $\\mathbb{R}$.<br><div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thử sức:</b> <i>(Xác định nhanh tọa độ đỉnh...)</i></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "Đồ thị đi lên 4 rồi đi xuống: Max = 4, không có Min",
      "startTime": 64.76,
      "endTime": 76.3,
      "duration": 11.54,
      "mascotMode": "cheer",
      "mascotTip": "y' = -2x + 2 = 0 => x = 1. Max = 4, không có Min!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:20px; color:#94a3b8; margin-bottom:6px;\"><b>Ví dụ 2:</b> $y = -x^2 + 2x + 3$ trên $\\mathbb{R}$.</div><div id=\"vd2_a\" style=\"border-top:1px dashed #64748b; padding-top:10px; font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải:</b><br>• $y' = -2x + 2 = 0 \\iff x = 1$.<br>• Đồ thị đi lên $4$ rồi đi xuống.<br><b style=\"color:#10b981;\">Kết luận:</b> $\\max = 4$, không có min.</p></div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: HÀM PHÂN THỨC TRÊN MIỀN ÂM (THỬ SỨC)",
      "subtitle": "Đạo hàm u/v trên khoảng (- vô cực; 0)",
      "startTime": 76.3,
      "endTime": 87.95,
      "duration": 11.65,
      "mascotMode": "pointer",
      "mascotTip": "Dùng quy tắc u chia v, nhớ chỉ xét trên miền âm!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Hàm số $y = \\frac{x^2+1}{x}$ trên $(-\\infty; 0)$.<br><div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thử sức:</b> <i>(Đạo hàm u/v và tìm nghiệm âm...)</i></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "Bảng biến thiên đi lên -2 rồi đi xuống",
      "startTime": 87.95,
      "endTime": 101.45,
      "duration": 13.5,
      "mascotMode": "cheer",
      "mascotTip": "Nghiệm âm x = -1 => Max = -2, hàm không có Min!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:20px; color:#94a3b8; margin-bottom:6px;\"><b>Ví dụ 3:</b> $y = \\frac{x^2+1}{x}$ trên $(-\\infty; 0)$.</div><div id=\"vd3_a\" style=\"border-top:1px dashed #64748b; padding-top:10px; font-size:20px; line-height:1.6; color:#f8fafc;\"><p><b>Lời giải:</b><br>• Đạo hàm $y' = 1 - \\frac{1}{x^2} = 0 \\iff x = -1$ (vì $x < 0$).<br>• Bảng biến thiên đi lên $-2$ rồi đi xuống.<br><b style=\"color:#10b981;\">Kết luận:</b> $\\max = -2$, hàm không có min.</p></div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI VÔ CỰC",
      "subtitle": "PHẦN 4: VÔ CỰC KHÔNG PHẢI LÀ SỐ THỰC",
      "startTime": 101.45,
      "endTime": 113.86,
      "duration": 12.41,
      "mascotMode": "magnifier",
      "mascotTip": "Khi thấy giới hạn tiến ra dương vô cực, kết luận luôn Max = vô cực là sai!",
      "bodyHtml": "<div style=\"font-size:22px; color:#f43f5e; font-weight:bold; margin-bottom:8px;\">4. Bẫy đề thi</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\">• Khi thấy giới hạn tiến ra dương vô cực, nhiều bạn kết luận luôn Max bằng vô cực.<br>• Đây là sai lầm vì vô cực không phải là số thực!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "MẸO TƯ DUY CAUCHY",
      "subtitle": "PHẦN 5: BẤT ĐẲNG THỨC AM-GM",
      "startTime": 113.86,
      "endTime": 127,
      "duration": 13.14,
      "mascotMode": "cheer",
      "mascotTip": "Dùng ngay bất đẳng thức Cauchy để nhẩm ra đáp án trong một giây!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Mẹo tư duy</div><div style=\"font-size:20px; line-height:1.6; color:#e2e8f0; margin-left:14px;\">• Nếu gặp hàm chứa $x + \\frac{a}{x}$ trên miền dương, dùng ngay bất đẳng thức Cauchy để nhẩm ra đáp án trong một giây!</div>"
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
  "content": "\n      <div id=\"part1\"><h3>1. Khái niệm cốt lõi</h3><p>Đường thẳng $y = y_0$ là Tiệm cận ngang (TCN) nếu:<br>$\\lim_{x \\to +\\infty} f(x) = y_0$ hoặc $\\lim_{x \\to -\\infty} f(x) = y_0$</p></div>\n      <div id=\"part2\"><h3>2. Phương pháp giải nhanh</h3><p>So sánh bậc của tử và mẫu:<br>+ Bậc tử &lt; Bậc mẫu: TCN $y = 0$<br>+ Bậc tử = Bậc mẫu: TCN $y = \\frac{a}{b}$ (Tỉ số hệ số cao nhất)<br>+ Bậc tử &gt; Bậc mẫu: Không có TCN.</p></div>\n      <div id=\"part3\"><h3>3. Các ví dụ điển hình</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Tìm TCN của $y = \\frac{2x-1}{x+1}$.<br><i>(Suy nghĩ nhẩm nhanh...)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> Bậc tử (1) = Bậc mẫu (1). Tỉ số hệ số cao nhất $a/b = 2/1 = 2$.<br>$\\Rightarrow$ TCN: $y = 2$.</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Tìm TCN của $y = \\frac{x}{x^2+1}$.<br><i>(So sánh bậc đa thức...)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> Bậc tử (1) &lt; Bậc mẫu (2) $\\Rightarrow \\lim_{x \\to \\infty} y = 0$.<br>$\\Rightarrow$ TCN: $y = 0$ (trục hoành).</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Đọc TCN từ BBT sau:<br>\n          <table style=\"width:100%; max-width:350px; border-collapse: collapse; text-align:center; background:white; border:1px solid black; margin:10px auto;\">\n            <tr style=\"border-bottom:1px solid black;\">\n              <td style=\"border-right:1px solid black; padding:5px;\">$x$</td>\n              <td style=\"padding:5px;\">$-\\infty$</td> <td></td> <td style=\"padding:5px;\">$+\\infty$</td>\n            </tr>\n            <tr>\n              <td style=\"border-right:1px solid black; padding:5px;\">$y$</td>\n              <td style=\"vertical-align:top; padding:5px; color:red; font-weight:bold;\">$-1$</td>\n              <td>$\\nearrow$</td>\n              <td style=\"vertical-align:top; padding:5px; color:red; font-weight:bold;\">$3$</td>\n            </tr>\n          </table>\n        </div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> $\\lim_{x \\to -\\infty} = -1$ và $\\lim_{x \\to +\\infty} = 3$.<br>$\\Rightarrow$ Hàm số có 2 TCN là $y = 3$ và $y = -1$.</div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Tính $\\lim$ ra vô cực ($\\infty$) nhưng lại vội kết luận là Tiệm cận ngang.</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Dùng Casio [CALC] tại $x = 10^9$ và $x = -10^9$ để test lim siêu tốc.</p></div>\n    ",
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
  "content": "\n      <div id=\"part1\"><h3>1. Khái niệm cốt lõi</h3><p>Đường thẳng $x = x_0$ là Tiệm cận đứng (TCĐ) nếu:<br>$\\lim_{x \\to x_0^+} f(x) = \\pm\\infty$ hoặc $\\lim_{x \\to x_0^-} f(x) = \\pm\\infty$</p></div>\n      <div id=\"part2\"><h3>2. Phương pháp giải thực chiến</h3><p>B1: Tìm nghiệm của MẪU SỐ.<br>B2: Thay nghiệm đó lên TỬ SỐ.<br>+ Nếu Tử $\\neq 0 \\Rightarrow$ Chắc chắn là TCĐ.<br>+ Nếu Tử $= 0 \\Rightarrow$ Phải rút gọn nhân tử để kiểm tra.</p></div>\n      <div id=\"part3\"><h3>3. Các ví dụ thực hành</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Tìm TCĐ của $y = \\frac{2x-1}{x-3}$.</div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> Mẫu có nghiệm $x=3$. Thay lên tử được $2(3)-1 = 5 \\neq 0$.<br>$\\Rightarrow$ TCĐ: $x = 3$.</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Tìm TCĐ của $y = \\frac{x^2-1}{x-1}$.</div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> Mẫu có nghiệm $x=1$. Thay lên tử cũng bằng $0$.<br>Rút gọn: $y = \\frac{(x-1)(x+1)}{x-1} = x+1$<br>$\\Rightarrow$ Đã bị triệt tiêu, KHÔNG CÓ TCĐ.</div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Đọc TCĐ từ BBT sau:<br>\n          <table style=\"width:100%; max-width:350px; border-collapse: collapse; text-align:center; background:white; border:1px solid black; margin:10px auto;\">\n            <tr style=\"border-bottom:1px solid black;\">\n              <td style=\"border-right:1px solid black; padding:5px;\">$x$</td>\n              <td style=\"padding:5px;\">$0$</td> <td></td> <td style=\"padding:5px; color:blue;\">$2$</td> <td></td> <td style=\"padding:5px;\">$+\\infty$</td>\n            </tr>\n            <tr>\n              <td style=\"border-right:1px solid black; padding:5px;\">$y$</td>\n              <td style=\"vertical-align:top; padding:5px;\">$0$</td> <td>$\\nearrow$</td>\n              <td style=\"vertical-align:top; padding:5px; border-left:2px double black; border-right:2px double black; color:red; font-weight:bold;\">$+\\infty \\quad \\quad -\\infty$</td>\n              <td>$\\nearrow$</td> <td style=\"vertical-align:top; padding:5px;\">$0$</td>\n            </tr>\n          </table>\n        </div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\"><b>Giải:</b> Tại $x=2$ có hai sọc ($||$), và giới hạn tiến ra vô cực.<br>$\\Rightarrow$ TCĐ: $x = 2$.</div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy trắc nghiệm</h3><p>Chỉ giải nghiệm mẫu mà không thử lại lên tử số.</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Casio</h3><p>Bấm [CALC] tại $x = x_0 + 0.0001$. Nếu kết quả ra số siêu lớn, đó là TCĐ.</p></div>\n    ",
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
      lessonId: "bai4",
      lessonTitle: "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
      sectionId: "bai4_muc1",
      sectionTitle: "Mục 1: Sơ đồ tổng quát 4 bước khảo sát hàm số",
      audioSrc: "./audio/bai4_muc1.mp3",
      totalDuration: 280.0,
      audio_src: "./audio/bai4_muc1.mp3",
      timestamp_src: "timestamps/bai4_muc1.json",
      title: "Mục 1: Sơ đồ tổng quát khảo sát hàm số chuẩn Bộ GD&ĐT",
      owl_tip: "Sơ đồ 3 phần lớn: Khảo sát biến thiên, Lập bảng biến thiên, và Vẽ đồ thị (tìm điểm đặc biệt, tâm/trục đối xứng)!",
      parts: [
        { partNumber: 1, partTitle: "Phần 1: Sơ đồ tổng quát 3 giai đoạn", scenes: [1] },
        { partNumber: 2, partTitle: "Phần 2: Tâm đối xứng & Trục đối xứng", scenes: [2] },
        { partNumber: 3, partTitle: "Phần 3: Điểm uốn và đạo hàm cấp hai", scenes: [3] },
        { partNumber: 4, partTitle: "Phần 4: Mascot Cú soi bẫy giao điểm các trục", scenes: [4] }
      ],
      scenes: [
        {
          sceneIndex: 1,
          title: "SƠ ĐỒ TỔNG QUÁT KHẢO SÁT HÀM SỐ",
          subtitle: "MỤC 1 • KHUNG SƯ PHẠM CHUẨN MỰC BỘ GD&ĐT",
          startTime: 0.0,
          endTime: 70.0,
          duration: 70.0,
          mascotMode: "pointer",
          mascotTip: "<b>Ghi nhớ 3 bước lớn:</b> 1. Tập xác định & Đạo hàm; 2. Bảng biến thiên & Tiệm cận; 3. Điểm đặc biệt & Vẽ đồ thị!",
          bodyHtml: `
            <div style="font-size:22px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              <b style="color:#fef08a; font-size:24px;">1. Khảo sát sự biến thiên:</b><br>
              • Tìm tập xác định $D$ của hàm số.<br>
              • Tính đạo hàm $y' = f'(x)$. Tìm các nghiệm của $y' = 0$ và điểm $y'$ không xác định.<br>
              • Tìm giới hạn tại vô cực và tìm các đường tiệm cận (nếu có).<br>
              • Lập bảng biến thiên: Xét dấu $y'$ và thể hiện chiều biến thiên của $y$.<br>
              <b style="color:#38bdf8; font-size:24px; display:inline-block; margin-top:8px;">2. Vẽ đồ thị hàm số:</b><br>
              • Xác định các điểm đặc biệt: Cực trị, giao với trục tung $Oy$ ($x = 0$), giao với trục hoành $Ox$ ($y = 0$).<br>
              • Xác định tâm đối xứng, trục đối xứng của đồ thị (nếu có).
            </div>
          `
        },
        {
          sceneIndex: 2,
          title: "TÂM ĐỐI XỨNG & TRỤC ĐỐI XỨNG ĐỒ THỊ",
          subtitle: "MỤC 1 • CÁC TÍNH CHẤT ĐỐI XỨNG CẦN NHỚ",
          startTime: 70.0,
          endTime: 140.0,
          duration: 70.0,
          mascotMode: "pointer",
          mascotTip: "<b>Cú nhắc:</b> Đồ thị hàm bậc 3 nhận điểm uốn làm tâm đối xứng; đồ thị hàm phân thức nhận giao điểm 2 đường tiệm cận làm tâm đối xứng!",
          bodyHtml: `
            <div style="font-size:22px; line-height:1.7; color:#e2e8f0; margin-left:14px;">
              • <b>Hàm bậc ba $y = ax^3 + bx^2 + cx + d$:</b><br>
              $\\implies$ Luôn nhận <b>điểm uốn $I(x_0; y_0)$</b> (với $x_0 = -\\frac{b}{3a}$ là nghiệm của $y'' = 0$) làm <b>tâm đối xứng</b>.<br>
              • <b>Hàm phân thức $y = \\frac{ax+b}{cx+d}$:</b><br>
              $\\implies$ Nhận giao điểm của tiệm cận đứng $x = -\\frac{d}{c}$ và tiệm cận ngang $y = \\frac{a}{c}$ là $I(-\\frac{d}{c}; \\frac{a}{c})$ làm <b>tâm đối xứng</b>.<br>
              • <b>Hàm phân thức $y = \\frac{ax^2+bx+c}{px+q}$:</b><br>
              $\\implies$ Nhận giao điểm của tiệm cận đứng và tiệm cận xiên làm <b>tâm đối xứng</b>.
            </div>
          `
        },
        {
          sceneIndex: 3,
          title: "ĐIỂM ĐẶC BIỆT KHI VẼ ĐỒ THỊ",
          subtitle: "MỤC 1 • KỸ NĂNG VẼ CHUẨN XÁC VÀ THẨM MỸ",
          startTime: 140.0,
          endTime: 210.0,
          duration: 70.0,
          mascotMode: "magnifier",
          mascotTip: "<b>Bí quyết:</b> Luôn tìm giao điểm với trục tung Oy bằng cách thay x = 0; tìm giao điểm với trục hoành Ox bằng cách giải y = 0!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:8px;">
              Quy tắc lấy thêm các điểm phụ trợ để vẽ đồ thị chính xác:
            </div>
            <div style="font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              • Giao điểm với trục tung $Oy$: Cho $x = 0 \\implies y = f(0)$. Điểm $A(0; f(0))$.<br>
              • Giao điểm với trục hoành $Ox$: Cho $y = 0 \\implies f(x) = 0$. Tìm nghiệm $x$.<br>
              • Các điểm cực trị (nếu có): $A(x_{\\text{CĐ}}; y_{\\text{CĐ}}), \\; B(x_{\\text{CT}}; y_{\\text{CT}})$.<br>
              • Uốn lượn: Nét vẽ đi từ trái sang phải khớp đúng chiều mũi tên trong Bảng biến thiên.
            </div>
          `
        },
        {
          sceneIndex: 4,
          title: "CÚ THÔNG THÁI CẢNH BÁO BẪY TIẾP XÚC TRỤC",
          subtitle: "MỤC 1 • BẪY NGHIỆM KÉP VÀ CẮT NHAU",
          startTime: 210.0,
          endTime: 280.0,
          duration: 70.0,
          mascotMode: "cheer",
          mascotTip: "<b>Lưu ý:</b> Nghiệm đơn thì đồ thị CẮT XUYÊN QUA trục Ox; nghiệm kép (bội chẵn) thì đồ thị TIẾP XÚC không xuyên qua trục Ox!",
          bodyHtml: `
            <div class="trap-warning-box" style="margin-top:10px; padding:12px 18px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:22px !important; line-height:1.5; font-weight:600; color:#fecdd3;">
              <span class="trap-title" style="font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-right:4px;">Bẫy đề thi:</span> Nhầm lẫn giữa cắt và tiếp xúc trục hoành:<br>
              • Ví dụ: Hàm số $y = (x-1)^2 (x+2)$. Điểm $x = 1$ là nghiệm kép nên đồ thị <b>tiếp xúc với trục $Ox$ tại $(1; 0)$</b> và không đổi dấu qua điểm này.<br>
              • Điểm $x = -2$ là nghiệm đơn nên đồ thị <b>cắt xuyên qua trục $Ox$ tại $(-2; 0)$</b>.
            </div>
          `
        }
      ]
    },

    bai4_muc2: {
      lessonId: "bai4",
      lessonTitle: "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
      sectionId: "bai4_muc2",
      sectionTitle: "Mục 2: Khảo sát hàm đa thức bậc ba y = ax³ + bx² + cx + d",
      audioSrc: "./audio/bai4_muc2.mp3",
      totalDuration: 295.0,
      audio_src: "./audio/bai4_muc2.mp3",
      timestamp_src: "timestamps/bai4_muc2.json",
      title: "Mục 2: Khảo sát & Nhận dạng đồ thị hàm số bậc ba (6 dạng dáng điệu)",
      owl_tip: "Hàm bậc ba có 2 cực trị khi Δ_y' > 0, không có cực trị khi Δ_y' ≤ 0. Hệ số a quyết định nhánh cuối cùng đi lên hay đi xuống!",
      parts: [
        { partNumber: 1, partTitle: "Phần 1: 6 Dạng dáng điệu đồ thị bậc ba", scenes: [1] },
        { partNumber: 2, partTitle: "Phần 2: Ví dụ khảo sát hoàn chỉnh", scenes: [2] },
        { partNumber: 3, partTitle: "Phần 3: Kỹ thuật nhận dạng hệ số a, b, c, d", scenes: [3] },
        { partNumber: 4, partTitle: "Phần 4: Mascot Cú soi bẫy điểm uốn đối xứng", scenes: [4] }
      ],
      scenes: [
        {
          sceneIndex: 1,
          title: "6 DẠNG ĐỒ THỊ CỦA HÀM SỐ BẬC BA",
          subtitle: "MỤC 2 • QUY LUẬT DẤU CỦA a VÀ BIỆT THỨC Δ",
          startTime: 0.0,
          endTime: 75.0,
          duration: 75.0,
          mascotMode: "pointer",
          mascotTip: "<b>Mẹo nhận dạng:</b> Nhìn nhánh ngoài cùng bên phải: Hướng lên $\\implies a > 0$; hướng xuống $\\implies a < 0$!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:8px;">
              Xét hàm số $y = ax^3 + bx^2 + cx + d$ ($a \\ne 0$). Đạo hàm $y' = 3ax^2 + 2bx + c$ (tam thức bậc 2 có $\\Delta' = b^2 - 3ac$):
            </div>
            <div style="font-size:21px; line-height:1.7; color:#e2e8f0; margin-left:14px;">
              • <b>Trường hợp 1 ($\\Delta' > 0$):</b> Phương trình $y'=0$ có 2 nghiệm phân biệt $\\implies$ Hàm số có <b>2 điểm cực trị</b>.<br>
              $\\quad +$ Nếu $a > 0$: Đồ thị hình chữ $N$ (nhánh cuối đi lên).<br>
              $\\quad +$ Nếu $a < 0$: Đồ thị hình chữ $N$ ngược (nhánh cuối đi xuống).<br>
              • <b>Trường hợp 2 ($\\Delta' \\le 0$):</b> Phương trình $y'=0$ có nghiệm kép hoặc vô nghiệm $\\implies$ Hàm số <b>không có cực trị</b> (luôn đơn điệu trên $\\mathbb{R}$).
            </div>
          `
        },
        {
          sceneIndex: 2,
          title: "VÍ DỤ KHẢO SÁT HOÀN CHỈNH HÀM BẬC BA",
          subtitle: "MỤC 2 • y = x³ - 3x² + 2 (KÈM BBT VÀ TÂM ĐỐI XỨNG)",
          startTime: 75.0,
          endTime: 155.0,
          duration: 80.0,
          mascotMode: "pointer",
          mascotTip: "<b>Điểm uốn I(1; 0):</b> Thay x = 1 vào y'' = 6x - 6 = 0, y(1) = 0. Đồ thị nhận I(1; 0) làm tâm đối xứng!",
          bodyHtml: `
            <div style="font-size:21px; line-height:1.6; color:#e2e8f0; margin-left:14px;">
              • TXĐ: $D = \\mathbb{R}$. Đạo hàm: $y' = 3x^2 - 6x = 3x(x - 2) = 0 \\iff x = 0$ hoặc $x = 2$.<br>
              • Cực trị: Cực đại tại $x = 0 \\implies y_{\\text{CĐ}} = 2$; Cực tiểu tại $x = 2 \\implies y_{\\text{CT}} = -2$.<br>
              • Giới hạn: $\\lim_{x \\to -\\infty} y = -\\infty; \\quad \\lim_{x \\to +\\infty} y = +\\infty$.
            </div>
            <table class="bbt-table" style="width:100%; max-width:96%; margin:8px auto; border-collapse:collapse; background:rgba(15,23,42,0.8); border-top:2.5px solid #cbd5e1; border-bottom:2.5px solid #cbd5e1;">
              <tr style="border-bottom:1.5px solid #64748b;">
                <td class="bbt-label" style="width:80px; text-align:center; font-weight:bold; font-size:22px; border-right:2.5px solid #cbd5e1; padding:5px 0; color:#f8fafc;">$x$</td>
                <td class="bbt-data" style="padding:5px 16px;">
                  <div style="display:flex; justify-content:space-between; font-size:22px; font-weight:bold;">
                    <span>$-\\infty$</span><span style="color:#fef08a;">$0$</span><span style="color:#fef08a;">$2$</span><span>$+\\infty$</span>
                  </div>
                </td>
              </tr>
              <tr style="border-bottom:1.5px solid #64748b;">
                <td class="bbt-label" style="width:80px; text-align:center; font-weight:bold; font-size:22px; border-right:2.5px solid #cbd5e1; padding:5px 0; color:#f8fafc;">$y'$</td>
                <td class="bbt-data" style="padding:5px 16px;">
                  <div style="display:flex; justify-content:space-between; font-size:22px; font-weight:bold;">
                    <span style="width:16px;"></span><span style="color:#4ade80;">$+$</span><span>$0$</span><span style="color:#f87171;">$-$</span><span>$0$</span><span style="color:#4ade80;">$+$</span><span style="width:16px;"></span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="bbt-label" style="width:80px; text-align:center; font-weight:bold; font-size:22px; border-right:2.5px solid #cbd5e1; padding:5px 0; color:#f8fafc;">$y$</td>
                <td class="bbt-data" style="padding:5px 16px;">
                  <div style="display:flex; align-items:center; height:56px; font-size:22px;">
                    <span style="align-self:flex-end; color:#cbd5e1;">$-\\infty$</span>
                    <div style="flex:1; display:flex; align-items:center; padding:0 6px;"><svg width="100%" height="32" viewBox="0 0 100 32" preserveAspectRatio="none"><line x1="10" y1="26" x2="90" y2="6" stroke="#4ade80" stroke-width="2.5"/><polygon points="90,6 80,7 84,15" fill="#4ade80"/></svg></div>
                    <span style="align-self:flex-start; color:#38bdf8; font-weight:bold;">$2$</span>
                    <div style="flex:1; display:flex; align-items:center; padding:0 6px;"><svg width="100%" height="32" viewBox="0 0 100 32" preserveAspectRatio="none"><line x1="10" y1="6" x2="90" y2="26" stroke="#f87171" stroke-width="2.5"/><polygon points="90,26 84,18 80,25" fill="#f87171"/></svg></div>
                    <span style="align-self:flex-end; color:#f43f5e; font-weight:bold;">$-2$</span>
                    <div style="flex:1; display:flex; align-items:center; padding:0 6px;"><svg width="100%" height="32" viewBox="0 0 100 32" preserveAspectRatio="none"><line x1="10" y1="26" x2="90" y2="6" stroke="#4ade80" stroke-width="2.5"/><polygon points="90,6 80,7 84,15" fill="#4ade80"/></svg></div>
                    <span style="align-self:flex-start; color:#cbd5e1;">$+\\infty$</span>
                  </div>
                </td>
              </tr>
            </table>
          `
        },
        {
          sceneIndex: 3,
          title: "BÍ QUYẾT XÁC ĐỊNH DẤU HỆ SỐ a, b, c, d",
          subtitle: "MỤC 2 • KỸ NĂNG NHẬN DẠNG NHANH CÂU HỎI TRẮC NGHIỆM",
          startTime: 155.0,
          endTime: 225.0,
          duration: 70.0,
          mascotMode: "magnifier",
          mascotTip: "<b>Thứ tự 4 bước vàng:</b> 1. Dấu của a (nhánh cuối) -> 2. Dấu của d (giao Oy) -> 3. Dấu của b (tâm đối xứng x_I) -> 4. Dấu của c (tích x1*x2)!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:8px;">
              4 Bước xác định chính xác dấu của 4 hệ số $a, b, c, d$:
            </div>
            <div style="font-size:21px; line-height:1.7; color:#e2e8f0; margin-left:14px;">
              • <b>Dấu $a$:</b> Nhánh ngoài cùng bên phải đi lên $\\implies a > 0$; đi xuống $\\implies a < 0$.<br>
              • <b>Dấu $d$:</b> Giao điểm của đồ thị với trục tung $Oy$ tại $(0; d)$. Nằm trên $Ox \\implies d > 0$; dưới $Ox \\implies d < 0$.<br>
              • <b>Dấu $b$:</b> Hoành độ điểm uốn $x_I = -\\frac{b}{3a}$. Nằm bên phải trục tung $\\implies -\\frac{b}{3a} > 0 \\implies a, b$ trái dấu.<br>
              • <b>Dấu $c$:</b> Tích 2 điểm cực trị $x_1 x_2 = \\frac{c}{3a}$. Cùng dấu $\\implies c, a$ cùng dấu; trái dấu $\\implies c, a$ trái dấu.
            </div>
          `
        },
        {
          sceneIndex: 4,
          title: "CÚ THÔNG THÁI CẢNH BÁO BẪY ĐỒ THỊ f'(x)",
          subtitle: "MỤC 2 • BẪY KINH HOÀNG NHẤT TRONG KỲ THI",
          startTime: 225.0,
          endTime: 295.0,
          duration: 70.0,
          mascotMode: "cheer",
          mascotTip: "<b>Cú hét to:</b> Hãy đọc kỹ xem đề bài cho đồ thị của HÀM SỐ y = f(x) hay đồ thị của ĐẠO HÀM y = f'(x)!",
          bodyHtml: `
            <div class="trap-warning-box" style="margin-top:10px; padding:12px 18px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:22px !important; line-height:1.5; font-weight:600; color:#fecdd3;">
              <span class="trap-title" style="font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-right:4px;">Bẫy đề thi:</span> Nhầm giữa đồ thị $f(x)$ và $f'(x)$:<br>
              • Nếu là đồ thị $f(x)$: Đỉnh núi là Cực đại, đáy thung lũng là Cực tiểu.<br>
              • Nếu là đồ thị $f'(x)$: Cực trị là <b>giao điểm cắt xuyên qua trục hoành $Ox$</b>! Điểm nằm trên $Ox$ là khoảng đồng biến, điểm nằm dưới $Ox$ là khoảng nghịch biến.
            </div>
          `
        }
      ]
    },

    bai4_muc3: {
      lessonId: "bai4",
      lessonTitle: "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
      sectionId: "bai4_muc3",
      sectionTitle: "Mục 3: Khảo sát hàm phân thức y = (ax+b)/(cx+d)",
      audioSrc: "./audio/bai4_muc3.mp3",
      totalDuration: 285.0,
      audio_src: "./audio/bai4_muc3.mp3",
      timestamp_src: "timestamps/bai4_muc3.json",
      title: "Mục 3: Khảo sát hàm phân thức hữu tỷ bậc nhất / bậc nhất (Đồ thị Hyperbol)",
      owl_tip: "Hàm nhất biến luôn đồng biến hoặc nghịch biến trên từng khoảng xác định, không có cực trị. Tâm đối xứng là giao 2 đường tiệm cận!",
      parts: [
        { partNumber: 1, partTitle: "Phần 1: Tính chất của hàm nhất biến", scenes: [1] },
        { partNumber: 2, partTitle: "Phần 2: Ví dụ khảo sát & Vẽ 2 nhánh Hyperbol", scenes: [2] },
        { partNumber: 3, partTitle: "Phần 3: Nhận dạng hệ số a, b, c, d", scenes: [3] },
        { partNumber: 4, partTitle: "Phần 4: Mascot Cú soi bẫy dấu hợp", scenes: [4] }
      ],
      scenes: [
        {
          sceneIndex: 1,
          title: "TÍNH CHẤT HÀM PHÂN THỨC BẬC NHẤT / BẬC NHẤT",
          subtitle: "MỤC 3 • y = (ax + b)/(cx + d) (ad - bc ≠ 0, c ≠ 0)",
          startTime: 0.0,
          endTime: 70.0,
          duration: 70.0,
          mascotMode: "pointer",
          mascotTip: "<b>Cú nhắc:</b> Đạo hàm y' = (ad - bc)/(cx + d)^2. Tử số là hằng số, quyết định hàm luôn tăng hoặc luôn giảm!",
          bodyHtml: `
            <div style="font-size:22px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              • <b>Tập xác định:</b> $D = \\mathbb{R} \\setminus \\{-\\frac{d}{c}\\}$.<br>
              • <b>Đạo hàm:</b> $y' = \\frac{ad - bc}{(cx + d)^2}$.<br>
              $\\quad +$ Nếu $ad - bc > 0 \\implies y' > 0$: Hàm số <b>đồng biến</b> trên từng khoảng $(-\\infty; -\\frac{d}{c})$ và $(-\\frac{d}{c}; +\\infty)$.<br>
              $\\quad +$ Nếu $ad - bc < 0 \\implies y' < 0$: Hàm số <b>nghịch biến</b> trên từng khoảng $(-\\infty; -\\frac{d}{c})$ và $(-\\frac{d}{c}; +\\infty)$.<br>
              • <b>Cực trị:</b> Hàm số <b>không có cực trị</b>.<br>
              • <b>Tiệm cận:</b> TCĐ: $x = -\\frac{d}{c}$; $\\quad$ TCN: $y = \\frac{a}{c}$. Tâm đối xứng: $I(-\\frac{d}{c}; \\frac{a}{c})$.
            </div>
          `
        },
        {
          sceneIndex: 2,
          title: "VÍ DỤ KHẢO SÁT HÀM SỐ y = (2x - 1)/(x + 1)",
          subtitle: "MỤC 3 • ĐẦY ĐỦ BẢNG BIẾN THIÊN VÀ VẠCH KÉP ||",
          startTime: 70.0,
          endTime: 145.0,
          duration: 75.0,
          mascotMode: "pointer",
          mascotTip: "<b>Vạch kép song song ||:</b> Tại x = -1 cả hàng y' và y đều không xác định, kéo dài vạch kép xuống hết bảng!",
          bodyHtml: `
            <div style="font-size:21px; line-height:1.6; color:#e2e8f0; margin-left:14px;">
              • TXĐ: $D = \\mathbb{R} \\setminus \\{-1\\}$. Đạo hàm: $y' = \\frac{2(1) - (-1)(1)}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0, \\; \\forall x \\ne -1$.<br>
              • Tiệm cận đứng: $x = -1$; $\\quad$ Tiệm cận ngang: $y = 2$.
            </div>
            <table class="bbt-table" style="width:100%; max-width:96%; margin:8px auto; border-collapse:collapse; background:rgba(15,23,42,0.8); border-top:2.5px solid #cbd5e1; border-bottom:2.5px solid #cbd5e1;">
              <tr style="border-bottom:1.5px solid #64748b;">
                <td class="bbt-label" style="width:80px; text-align:center; font-weight:bold; font-size:22px; border-right:2.5px solid #cbd5e1; padding:5px 0; color:#f8fafc;">$x$</td>
                <td class="bbt-data" style="padding:5px 16px;">
                  <div style="display:flex; justify-content:space-between; font-size:22px; font-weight:bold;">
                    <span>$-\\infty$</span><span style="color:#fef08a;">$-1$</span><span>$+\\infty$</span>
                  </div>
                </td>
              </tr>
              <tr style="border-bottom:1.5px solid #64748b;">
                <td class="bbt-label" style="width:80px; text-align:center; font-weight:bold; font-size:22px; border-right:2.5px solid #cbd5e1; padding:5px 0; color:#f8fafc;">$y'$</td>
                <td class="bbt-data" style="padding:5px 16px;">
                  <div style="display:flex; justify-content:space-between; font-size:22px; font-weight:bold;">
                    <span style="width:20px;"></span><span style="color:#4ade80;">$+$</span>
                    <span style="color:#f43f5e; font-weight:bold;">||</span>
                    <span style="color:#4ade80;">$+$</span><span style="width:20px;"></span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="bbt-label" style="width:80px; text-align:center; font-weight:bold; font-size:22px; border-right:2.5px solid #cbd5e1; padding:5px 0; color:#f8fafc;">$y$</td>
                <td class="bbt-data" style="padding:5px 16px;">
                  <div style="display:flex; align-items:center; height:56px; font-size:22px;">
                    <span style="color:#cbd5e1;">$2$</span>
                    <div style="flex:1; display:flex; align-items:center; padding:0 6px;"><svg width="100%" height="32" viewBox="0 0 100 32" preserveAspectRatio="none"><line x1="10" y1="26" x2="90" y2="6" stroke="#4ade80" stroke-width="2.5"/><polygon points="90,6 80,7 84,15" fill="#4ade80"/></svg></div>
                    <span style="color:#38bdf8; font-weight:bold;">$+\\infty$</span>
                    <span style="color:#f43f5e; font-weight:bold; margin:0 8px;">||</span>
                    <span style="color:#38bdf8; font-weight:bold;">$-\\infty$</span>
                    <div style="flex:1; display:flex; align-items:center; padding:0 6px;"><svg width="100%" height="32" viewBox="0 0 100 32" preserveAspectRatio="none"><line x1="10" y1="26" x2="90" y2="6" stroke="#4ade80" stroke-width="2.5"/><polygon points="90,6 80,7 84,15" fill="#4ade80"/></svg></div>
                    <span style="color:#cbd5e1;">$2$</span>
                  </div>
                </td>
              </tr>
            </table>
          `
        },
        {
          sceneIndex: 3,
          title: "KỸ NĂNG NHẬN DẠNG NHANH ĐỒ THỊ NHẤT BIẾN",
          subtitle: "MỤC 3 • 4 THÔNG SỐ ĐỌC ĐỒ THỊ TRONG 10 GIÂY",
          startTime: 145.0,
          endTime: 215.0,
          duration: 70.0,
          mascotMode: "magnifier",
          mascotTip: "<b>4 Điểm then chốt:</b> 1. Tiệm cận đứng -> 2. Tiệm cận ngang -> 3. Giao Oy (x = 0) -> 4. Giao Ox (y = 0)!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:8px;">
              Bảng quy tắc đọc đồ thị $y = \\frac{ax+b}{cx+d}$:
            </div>
            <div style="font-size:21px; line-height:1.7; color:#e2e8f0; margin-left:14px;">
              • <b>1. Đường thẳng đứng:</b> Đó là $x = -\\frac{d}{c}$. Xác định vị trí âm/dương so với trục tung.<br>
              • <b>2. Đường nằm ngang:</b> Đó là $y = \\frac{a}{c}$. Xác định vị trí âm/dương so với trục hoành.<br>
              • <b>3. Cắt trục tung $Oy$:</b> Tại điểm $(0; \\frac{b}{d})$.<br>
              • <b>4. Cắt trục hoành $Ox$:</b> Tại điểm $(-\\frac{b}{a}; 0)$.<br>
              • <b>5. Dáng điệu:</b> Nằm ở góc phần tư II và IV là $y' > 0$ (đồng biến); nằm ở góc I và III là $y' < 0$ (nghịch biến).
            </div>
          `
        },
        {
          sceneIndex: 4,
          title: "CÚ THÔNG THÁI CẢNH BÁO BẪY KẾT LUẬN ĐỒNG BIẾN",
          subtitle: "MỤC 3 • LỖI SAI KINH ĐIỂN VỀ TẬP HỢP",
          startTime: 215.0,
          endTime: 285.0,
          duration: 70.0,
          mascotMode: "cheer",
          mascotTip: "<b>Nhắc lại ngàn lần:</b> KHÔNG BAO GIỜ viết $y$ đồng biến trên $\\mathbb{R} \\setminus \\{-1\\}$ hay dùng dấu hợp $\\cup$!",
          bodyHtml: `
            <div class="trap-warning-box" style="margin-top:10px; padding:12px 18px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:22px !important; line-height:1.5; font-weight:600; color:#fecdd3;">
              <span class="trap-title" style="font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-right:4px;">Bẫy đề thi:</span> Khẳng định nào sau đây là SAI:<br>
              • \"Hàm số đồng biến trên $(-\\infty; -1) \\cup (-1; +\\infty)$\" $\\implies$ <b>SAI HOÀN TOÀN</b>!<br>
              • \"Hàm số đồng biến trên $\\mathbb{R} \\setminus \\{-1\\}$\" $\\implies$ <b>SAI HOÀN TOÀN</b>!<br>
              • ĐÚNG CHUẨN: \"Hàm số đồng biến trên từng khoảng $(-\\infty; -1)$ <b>và</b> $(-1; +\\infty)$\"!
            </div>
          `
        }
      ]
    },

    bai4_muc4: {
      lessonId: "bai4",
      lessonTitle: "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
      sectionId: "bai4_muc4",
      sectionTitle: "Mục 4: Khảo sát hàm phân thức y = (ax² + bx + c)/(px + q)",
      audioSrc: "./audio/bai4_muc4.mp3",
      totalDuration: 290.0,
      audio_src: "./audio/bai4_muc4.mp3",
      timestamp_src: "timestamps/bai4_muc4.json",
      title: "Mục 4: Khảo sát hàm phân thức bậc hai / bậc nhất (Có tiệm cận xiên)",
      owl_tip: "Hàm phân thức bậc 2/1 có 1 tiệm cận đứng và 1 tiệm cận xiên. Giao 2 tiệm cận là tâm đối xứng của đồ thị!",
      parts: [
        { partNumber: 1, partTitle: "Phần 1: Dạng đồ thị & Phương pháp khảo sát", scenes: [1] },
        { partNumber: 2, partTitle: "Phần 2: Ví dụ khảo sát mẫu mực", scenes: [2] },
        { partNumber: 3, partTitle: "Phần 3: Tâm đối xứng và cực trị", scenes: [3] },
        { partNumber: 4, partTitle: "Phần 4: Mascot Cú soi bẫy nghiệm triệt tiêu", scenes: [4] }
      ],
      scenes: [
        {
          sceneIndex: 1,
          title: "ĐẶC TRƯNG HÀM PHÂN THỨC BẬC HAI / BẬC NHẤT",
          subtitle: "MỤC 4 • DẠNG TOÁN MỚI TRỌNG TÂM SGK GDPT 2018",
          startTime: 0.0,
          endTime: 70.0,
          duration: 70.0,
          mascotMode: "pointer",
          mascotTip: "<b>Cú nhắc:</b> Đồ thị có 2 đường tiệm cận: 1 Tiệm cận đứng và 1 Tiệm cận xiên!",
          bodyHtml: `
            <div style="font-size:22px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              Xét hàm số $y = \\frac{ax^2 + bx + c}{px + q}$ ($a \\ne 0, \\; p \\ne 0$ và đa thức tử không chia hết cho mẫu):<br>
              • <b>Tập xác định:</b> $D = \\mathbb{R} \\setminus \\{-\\frac{q}{p}\\}$.<br>
              • <b>Tiệm cận đứng:</b> Đường thẳng $x = -\\frac{q}{p}$.<br>
              • <b>Tiệm cận xiên:</b> Chia tử cho mẫu: $y = mx + n + \\frac{r}{px + q} \\implies$ TCX: $y = mx + n$.<br>
              • <b>Tâm đối xứng:</b> Giao điểm $I$ của tiệm cận đứng và tiệm cận xiên.<br>
              • <b>Cực trị:</b> Đạo hàm $y' = 0$ có thể có 2 nghiệm phân biệt (hàm có 2 cực trị) hoặc vô nghiệm (hàm không có cực trị).
            </div>
          `
        },
        {
          sceneIndex: 2,
          title: "VÍ DỤ KHẢO SÁT: y = (x² - x + 1)/(x - 1)",
          subtitle: "MỤC 4 • PHÂN TÍCH TỪNG BƯỚC MẪU MỰC",
          startTime: 70.0,
          endTime: 145.0,
          duration: 75.0,
          mascotMode: "pointer",
          mascotTip: "<b>Phép chia:</b> (x² - x + 1)/(x - 1) = x + 1/(x - 1). Tiệm cận xiên là y = x!",
          bodyHtml: `
            <div style="font-size:21px; line-height:1.6; color:#e2e8f0; margin-left:14px;">
              • TXĐ: $D = \\mathbb{R} \\setminus \\{1\\}$. Biến đổi: $y = x + \\frac{1}{x - 1}$.<br>
              • Đạo hàm: $y' = 1 - \\frac{1}{(x-1)^2} = \\frac{(x-1)^2 - 1}{(x-1)^2} = \\frac{x(x-2)}{(x-1)^2}$.<br>
              • Cho $y' = 0 \\iff x = 0$ hoặc $x = 2$.<br>
              $\\quad +$ Cực đại: $x = 0 \\implies y = -1$.<br>
              $\\quad +$ Cực tiểu: $x = 2 \\implies y = 3$.<br>
              • Tiệm cận đứng: $x = 1$; $\\quad$ Tiệm cận xiên: $y = x$.
            </div>
          `
        },
        {
          sceneIndex: 3,
          title: "TÂM ĐỐI XỨNG & ĐẶC ĐIỂM CỰC TRỊ",
          subtitle: "MỤC 4 • GIÁ TRỊ CỰC TIỂU LỚN HƠN GIÁ TRỊ CỰC ĐẠI",
          startTime: 145.0,
          endTime: 215.0,
          duration: 70.0,
          mascotMode: "magnifier",
          mascotTip: "<b>Hiện tượng thú vị:</b> Ở ví dụ trên, y_CT = 3 LỚN HƠN y_CĐ = -1! Đây là bằng chứng Cực đại không phải là GTLN!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:8px;">
              Hai tính chất hình học cực đẹp của đồ thị:
            </div>
            <div style="font-size:21px; line-height:1.7; color:#e2e8f0; margin-left:14px;">
              • <b>1. Tâm đối xứng:</b> Là giao điểm của TCĐ $x = 1$ và TCX $y = x \\implies I(1; 1)$.<br>
              Trung điểm nối 2 điểm cực trị $A(0; -1)$ và $B(2; 3)$ chính là điểm $I(1; 1)$!<br>
              • <b>2. Vị trí hai điểm cực trị:</b> Hai điểm cực trị luôn nằm về <b>hai nhánh khác nhau</b> của đồ thị và nằm về hai phía của đường tiệm cận đứng.
            </div>
          `
        },
        {
          sceneIndex: 4,
          title: "CÚ THÔNG THÁI CẢNH BÁO BẪY RÚT GỌN THÀNH ĐƯỜNG THẲNG",
          subtitle: "MỤC 4 • BẪY ĐA THỨC TỬ CHIA HẾT CHO MẪU",
          startTime: 215.0,
          endTime: 290.0,
          duration: 75.0,
          mascotMode: "cheer",
          mascotTip: "<b>Cú cảnh báo:</b> Nếu tử số chia hết cho mẫu số, đồ thị suy biến thành đường thẳng có 1 điểm thủng!",
          bodyHtml: `
            <div class="trap-warning-box" style="margin-top:10px; padding:12px 18px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:22px !important; line-height:1.5; font-weight:600; color:#fecdd3;">
              <span class="trap-title" style="font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-right:4px;">Bẫy đề thi:</span> Khảo sát đồ thị $y = \\frac{x^2 - 1}{x - 1}$.<br>
              • Học sinh chia tử cho mẫu: $y = x + 1$ và kết luận đồ thị là đường thẳng có tiệm cận $\\implies$ <b>SAI HOÀN TOÀN</b>!<br>
              • Đúng: Hàm số có TXĐ $D = \\mathbb{R} \\setminus \\{1\\}$. Đồ thị của hàm số là <b>đường thẳng $y = x + 1$ bỏ đi điểm $(1; 2)$</b> (điểm thủng) và <b>hoàn toàn không có đường tiệm cận nào</b>!
            </div>
          `
        }
      ]
    },

    // =========================================================================
    // BÀI 5: ỨNG DỤNG ĐẠO HÀM ĐỂ GIẢI QUYẾT BÀI TOÁN THỰC TIỄN (3 MỤC)
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
