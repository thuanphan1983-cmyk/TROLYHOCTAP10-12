// Dữ liệu Chương 2: Vectơ và hệ tọa độ trong không gian (KNTT)
if(typeof window.CHAPTER2_DATA === 'undefined') window.CHAPTER2_DATA = {};
Object.assign(window.CHAPTER2_DATA, {
  bai6_muc1: {
  "lessonId": "bai6",
  "lessonTitle": "Bài 6: Vectơ trong không gian",
  "sectionId": "bai6_muc1",
  "sectionTitle": "Mục 1: Định nghĩa & Các khái niệm cơ bản",
  "audio": "/audio/bai6_muc1.mp3",
  "audioSrc": "./audio/bai6_muc1.mp3",
  "audio_src": "./audio/bai6_muc1.mp3",
  "timestamp_src": "timestamps/bai6_muc1.json",
  "totalDuration": 212.81,
  "duration": 212.81,
  "title": "Mục 1: Định nghĩa vectơ & Các khái niệm cơ bản trong không gian",
  "owl_tip": "Vectơ trong không gian là đoạn thẳng có hướng. Hai vectơ bằng nhau khi cùng hướng và cùng độ dài!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 39.34,
      "id": "part2"
    },
    {
      "time": 67.22,
      "id": "part3"
    },
    {
      "time": 71.02,
      "id": "vd1_q"
    },
    {
      "time": 97.22,
      "id": "vd1_a"
    },
    {
      "time": 117.34,
      "id": "vd2_q"
    },
    {
      "time": 131.47,
      "id": "vd2_a"
    },
    {
      "time": 145.1,
      "id": "vd3_q"
    },
    {
      "time": 163.32,
      "id": "vd3_a"
    },
    {
      "time": 183.41,
      "id": "part4"
    },
    {
      "time": 194.4,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Khái niệm vectơ trong không gian</h3>\n        <p>• <b>Định nghĩa:</b> Vectơ trong không gian là một đoạn thẳng có hướng (đã xác định điểm đầu và điểm cuối).<br>\n        • Ký hiệu: $\\vec{a}, \\vec{b}$ hoặc $\\vec{AB}$ (với $A$ là điểm đầu, $B$ là điểm cuối).<br>\n        • <b>Độ dài của vectơ:</b> Là khoảng cách giữa điểm đầu và điểm cuối, ký hiệu $|\\vec{AB}| = AB$.</p>\n      </div>\n      <div id=\"part2\"><h3>2. Hai vectơ cùng phương & Hai vectơ bằng nhau</h3>\n        <p>• <b>Cùng phương:</b> Hai vectơ có giá song song hoặc trùng nhau.<br>\n        • <b>Cùng hướng / Ngược hướng:</b> Chỉ xét khi hai vectơ đã cùng phương.<br>\n        • <b>Hai vectơ bằng nhau:</b> $\\vec{a} = \\vec{b} \\iff$ cùng hướng và cùng độ dài ($|\\vec{a}| = |\\vec{b}|$).<br>\n        • <b>Vectơ-không:</b> Ký hiệu $\\vec{0}$, có điểm đầu và cuối trùng nhau ($|\\vec{0}| = 0$). $\\vec{0}$ cùng phương, cùng hướng với mọi vectơ.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ rèn luyện</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Liệt kê các vectơ có điểm đầu là $S$ và điểm cuối là các đỉnh đáy. Tìm vectơ bằng $\\vec{AB}$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          + Các vectơ gốc $S$ đến các đỉnh đáy: $\\vec{SA}, \\vec{SB}, \\vec{SC}, \\vec{SD}$.<br>\n          + Vì $ABCD$ là hình bình hành nên cạnh $AB \\parallel DC$ và $AB = DC$. Hướng từ $A \\to B$ cùng hướng $D \\to C$.<br>\n          $\\implies$ Vậy $\\vec{AB} = \\vec{DC}$ (chú ý thứ tự đỉnh!).\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Cho tứ diện đều $ABCD$ cạnh $a$. Tính độ dài của $\\vec{AB}$ và $\\vec{CD}$.<br><i>(Thời gian suy nghĩ: 15s)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          Vì tứ diện $ABCD$ đều cạnh $a$ nên tất cả 6 cạnh đều bằng $a$.<br>\n          $\\implies |\\vec{AB}| = AB = a$ và $|\\vec{CD}| = CD = a$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Cho hình lăng trụ tam giác $ABC.A'B'C'$. Hai vectơ $\\vec{AA'}$ và $\\vec{CC'}$ có bằng nhau không?<br><i>(Thời gian suy nghĩ: 15s)</i></div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          Trong hình lăng trụ, các cạnh bên song song và bằng nhau: $AA' \\parallel CC'$ và $AA' = CC'$.<br>\n          Hướng từ $A \\to A'$ cùng hướng từ $C \\to C'$ (từ trên xuống đáy dưới).<br>\n          $\\implies$ Kết luận: <b>$\\vec{AA'} = \\vec{CC'}$</b>.\n        </div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Nhầm lẫn $\\vec{AB}$ và $\\vec{BA}$. Đây là hai vectơ đối nhau (ngược hướng), có $\\vec{AB} = -\\vec{BA}$, tuyệt đối không bằng nhau!</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Trong hình bình hành $ABCD$, luôn vẽ mũi tên theo chiều đọc đỉnh: $\\vec{AB} = \\vec{DC}$, không viết nhầm thành $\\vec{CD}$!</p></div>\n    ",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm & Định nghĩa cơ bản",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Cùng phương, Cùng hướng & Bằng nhau",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ rèn luyện (3 Ví dụ)",
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
      "title": "BÀI 6: VECTƠ TRONG KHÔNG GIAN",
      "subtitle": "PHẦN 1: ĐỊNH NGHĨA & ĐỘ DÀI VECTƠ",
      "startTime": 0.0,
      "endTime": 39.34,
      "duration": 39.34,
      "mascotMode": "pointer",
      "mascotTip": "Vectơ là đoạn thẳng có hướng: điểm đầu (gốc) và điểm cuối (ngọn). Độ dài |AB| = AB!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Định nghĩa vectơ trong không gian</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• Vectơ trong không gian là một đoạn thẳng có hướng.<br>• Ký hiệu: $\\vec{a}, \\vec{b}$ hoặc $\\vec{AB}$ ($A$ là điểm đầu, $B$ là điểm cuối).<br>• <b>Độ dài của vectơ:</b> Khoảng cách giữa điểm đầu và điểm cuối: $|\\vec{AB}| = AB$.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "CÙNG PHƯƠNG & BẰNG NHAU",
      "subtitle": "PHẦN 2: ĐIỀU KIỆN HAI VECTƠ BẰNG NHAU",
      "startTime": 39.34,
      "endTime": 71.02,
      "duration": 31.68,
      "mascotMode": "pointer",
      "mascotTip": "Hai vectơ bằng nhau khi và chỉ khi: Cùng hướng VÀ Cùng độ dài!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Cùng phương, cùng hướng và bằng nhau</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Cùng phương:</b> Giá của hai vectơ song song hoặc trùng nhau.<br>• <b>Hai vectơ bằng nhau:</b> $\\vec{a} = \\vec{b} \\iff$ Cùng hướng và cùng độ dài.<br>• <b>Vectơ-không:</b> $\\vec{0}$ có điểm đầu và cuối trùng nhau, độ dài bằng $0$, cùng phương và cùng hướng với mọi vectơ.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: CHÓP ĐÁY HÌNH BÌNH HÀNH",
      "subtitle": "TÌM VECTƠ BẰNG NHAU",
      "startTime": 71.02,
      "endTime": 97.22,
      "duration": 26.2,
      "mascotMode": "pointer",
      "mascotTip": "Điểm đầu là S -> SA, SB, SC, SD. Vectơ bằng AB là DC (cùng hướng, cùng độ dài)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Chỉ ra các vectơ có điểm đầu là $S$ và điểm cuối là các đỉnh đáy. Tìm vectơ bằng $\\vec{AB}$.<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "CHÚ Ý THỨ TỰ ĐỈNH HÌNH BÌNH HÀNH",
      "startTime": 97.22,
      "endTime": 117.34,
      "duration": 20.12,
      "mascotMode": "pointer",
      "mascotTip": "AB và DC cùng hướng A -> B và D -> C => AB = DC!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd1_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải chi tiết Ví dụ 1:</b><br>• Các vectơ gốc $S$: $\\vec{SA}, \\vec{SB}, \\vec{SC}, \\vec{SD}$.<br>• Vì $ABCD$ là hình bình hành nên cạnh $AB \\parallel DC$ và $AB = DC$.<br>• Hướng từ $A \\to B$ trùng hướng $D \\to C$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$\\vec{AB} = \\vec{DC}$</b>.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: ĐỘ DÀI CẠNH TỨ DIỆN ĐỀU",
      "subtitle": "TỨ DIỆN ĐỀU CẠNH a",
      "startTime": 117.34,
      "endTime": 131.47,
      "duration": 14.13,
      "mascotMode": "pointer",
      "mascotTip": "Tất cả 6 cạnh tứ diện đều bằng nhau và bằng a!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Cho tứ diện đều $ABCD$ cạnh $a$. Tính độ dài của $\\vec{AB}$ và $\\vec{CD}$.<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian nhẩm nhanh: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI",
      "subtitle": "ĐỘ DÀI VECTƠ BẰNG ĐỘ DÀI ĐOẠN THẲNG",
      "startTime": 131.47,
      "endTime": 145.1,
      "duration": 13.63,
      "mascotMode": "cheer",
      "mascotTip": "|AB| = a, |CD| = a!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd2_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 2:</b><br>Vì tứ diện $ABCD$ đều cạnh $a$ nên tất cả các cạnh đều có độ dài bằng $a$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$|\\vec{AB}| = a$</b> và <b>$|\\vec{CD}| = a$</b>.</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: CẠNH BÊN LĂNG TRỤ TAM GIÁC",
      "subtitle": "SO SÁNH HAI VECTƠ CẠNH BÊN",
      "startTime": 145.1,
      "endTime": 163.32,
      "duration": 18.22,
      "mascotMode": "pointer",
      "mascotTip": "Cạnh bên lăng trụ song song và bằng nhau -> AA' = CC'!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Cho lăng trụ tam giác $ABC.A'B'C'$. Hỏi $\\vec{AA'}$ và $\\vec{CC'}$ có bằng nhau không? Vì sao?<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI",
      "subtitle": "CẠNH BÊN SONG SONG & CÙNG CHIỀU",
      "startTime": 163.32,
      "endTime": 183.41,
      "duration": 20.09,
      "mascotMode": "pointer",
      "mascotTip": "AA' song song và bằng CC', cùng chiều từ trên xuống -> AA' = CC'!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd3_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 3:</b><br>Trong lăng trụ, các cạnh bên song song và bằng nhau: $AA' \\parallel CC'$ và $AA' = CC'$.<br>Cùng hướng từ trên xuống dưới $\\implies$ <b>$\\vec{AA'} = \\vec{CC'}$</b>.</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI: ĐẢO CHIỀU ĐIỂM ĐẦU & CUỐI",
      "subtitle": "PHẦN 4: VECTƠ ĐỐI NHAU",
      "startTime": 183.41,
      "endTime": 194.4,
      "duration": 10.99,
      "mascotMode": "magnifier",
      "mascotTip": "AB và BA có cùng độ dài nhưng ngược hướng -> AB = -BA, KHÔNG bằng nhau!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi khái niệm vectơ:</span><br>Nhầm lẫn giữa $\\vec{AB}$ và $\\vec{BA}$. Hai vectơ này có cùng độ dài nhưng <b>ngược hướng nhau</b>: $\\vec{AB} = -\\vec{BA}$, tuyệt đối không được viết $\\vec{AB} = \\vec{BA}$!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: THỨ TỰ ĐỈNH TRONG HÌNH BÌNH HÀNH",
      "startTime": 194.4,
      "endTime": 212.81,
      "duration": 18.41,
      "mascotMode": "cheer",
      "mascotTip": "Trong hình bình hành ABCD: AB = DC, AD = BC. Tuyệt đối không nhầm AB = CD!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Bí kíp nhớ nhanh vectơ bằng nhau:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">Muốn kiểm tra $\\vec{a} = \\vec{b}$, luôn xét đủ 2 tiêu chí:<br>1. <b>Cùng hướng</b> (song song/trùng nhau và cùng chiều mũi tên).<br>2. <b>Cùng độ dài</b> ($|\\vec{a}| = |\\vec{b}|$).<br>Trong hình bình hành $ABCD$: $\\vec{AB} = \\vec{DC}$ (điểm $D$ đứng trước $C$!), không viết nhầm thành $\\vec{CD}$!</div>"
    }
  ]
},
  bai6_muc2: {
  "lessonId": "bai6",
  "lessonTitle": "Bài 6: Vectơ trong không gian",
  "sectionId": "bai6_muc2",
  "sectionTitle": "Mục 2: Các phép toán vectơ trong không gian",
  "audio": "/audio/bai6_muc2.mp3",
  "audioSrc": "./audio/bai6_muc2.mp3",
  "audio_src": "./audio/bai6_muc2.mp3",
  "timestamp_src": "timestamps/bai6_muc2.json",
  "totalDuration": 183.43,
  "duration": 183.43,
  "title": "Mục 2: Các phép toán vectơ trong không gian (Quy tắc hình hộp)",
  "owl_tip": "Quy tắc hình hộp: Ba cạnh xuất phát từ một đỉnh cộng lại bằng vectơ đường chéo lớn xuyên tâm!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 22.46,
      "id": "part2"
    },
    {
      "time": 50.57,
      "id": "part3"
    },
    {
      "time": 54.26,
      "id": "vd1_q"
    },
    {
      "time": 76.3,
      "id": "vd1_a"
    },
    {
      "time": 90.02,
      "id": "vd2_q"
    },
    {
      "time": 105.58,
      "id": "vd2_a"
    },
    {
      "time": 127.7,
      "id": "vd3_q"
    },
    {
      "time": 142.54,
      "id": "vd3_a"
    },
    {
      "time": 158.76,
      "id": "part4"
    },
    {
      "time": 171.91,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Các quy tắc phép toán vectơ</h3>\n        <p>• <b>Quy tắc ba điểm:</b> $\\vec{AB} + \\vec{BC} = \\vec{AC}$ (nối đuôi liên tiếp).<br>\n        • <b>Quy tắc hình bình hành:</b> Nếu $ABCD$ là hình bình hành thì $\\vec{AB} + \\vec{AD} = \\vec{AC}$ (chung gốc $A$).<br>\n        • <b>Quy tắc phép trừ:</b> $\\vec{AB} - \\vec{AC} = \\vec{CB}$ (chung gốc đầu, ngọn đi từ sau ra trước).</p>\n      </div>\n      <div id=\"part2\"><h3>2. Quy tắc hình hộp & Tính chất không gian</h3>\n        <p>• <b>Quy tắc hình hộp:</b> Cho hình hộp $ABCD.A'B'C'D'$. Tổng 3 vectơ xuất phát từ đỉnh $A$ bằng vectơ đường chéo lớn:<br>\n        $$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$$<br>\n        • <b>Công thức trung điểm:</b> $M$ là trung điểm $CD \\implies \\vec{AM} = \\frac{1}{2}(\\vec{AC} + \\vec{AD})$.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ áp dụng</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Rút gọn tổng 3 vectơ trong hình hộp chữ nhật $ABCD.A'B'C'D'$: $\\vec{BA} + \\vec{BC} + \\vec{BB'}$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          Áp dụng quy tắc hình hộp xuất phát từ gốc $B$: ba vectơ cạnh là $\\vec{BA}, \\vec{BC}, \\vec{BB'}$.<br>\n          Đường chéo lớn xuất phát từ $B$ là đoạn nối $B$ với đỉnh đối diện $D'$.<br>\n          $\\implies \\vec{BA} + \\vec{BC} + \\vec{BB'} = \\vec{BD'}$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Cho tứ diện $ABCD$. $M$ là trung điểm cạnh $CD$. Biểu diễn $\\vec{AM}$ theo $\\vec{AC}$ và $\\vec{AD}$.<br><i>(Thời gian làm nháp: 15s)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          Tam giác $ACD$ có $AM$ là trung tuyến. Dựng hình bình hành $ACED$ thì $\\vec{AC} + \\vec{AD} = \\vec{AE} = 2\\vec{AM}$.<br>\n          $\\implies \\vec{AM} = \\frac{1}{2}(\\vec{AC} + \\vec{AD})$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Cho chóp $S.ABCD$ đáy hình bình hành tâm $O$. Rút gọn: $\\vec{SA} + \\vec{SB} + \\vec{SC} + \\vec{SD}$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          Vì $O$ là trung điểm $AC$ và $BD$ nên:<br>\n          + $\\vec{SA} + \\vec{SC} = 2\\vec{SO}$<br>\n          + $\\vec{SB} + \\vec{SD} = 2\\vec{SO}$<br>\n          $\\implies \\vec{SA} + \\vec{SB} + \\vec{SC} + \\vec{SD} = 2\\vec{SO} + 2\\vec{SO} = 4\\vec{SO}$.\n        </div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy trắc nghiệm</h3><p>Nhầm lẫn đỉnh đối diện khi dùng quy tắc hình hộp: đường chéo lớn phải là $\\vec{AC'}$, không phải $\\vec{AC}$!</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Khẩu quyết quy tắc hình hộp: Ba cạnh xuất phát từ một đỉnh cộng lại bằng vectơ đường chéo lớn xuất phát từ chính đỉnh đó!</p></div>\n    ",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm & Định nghĩa cơ bản",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Cùng phương, Cùng hướng & Bằng nhau",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ rèn luyện (3 Ví dụ)",
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
      "title": "CÁC PHÉP TOÁN VECTƠ TRONG KHÔNG GIAN",
      "subtitle": "PHẦN 1: QUY TẮC BA ĐIỂM & HÌNH BÌNH HÀNH",
      "startTime": 0.0,
      "endTime": 22.46,
      "duration": 22.46,
      "mascotMode": "pointer",
      "mascotTip": "Quy tắc 3 điểm: AB + BC = AC. Quy tắc hình bình hành: AB + AD = AC!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Phép cộng và trừ vectơ trong không gian</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Quy tắc 3 điểm:</b> $\\vec{AB} + \\vec{BC} = \\vec{AC}$<br>• <b>Quy tắc hình bình hành:</b> $\\vec{AB} + \\vec{AD} = \\vec{AC}$ (với $ABCD$ là hình bình hành).<br>• <b>Quy tắc phép trừ:</b> $\\vec{AB} - \\vec{AC} = \\vec{CB}$.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "QUY TẮC HÌNH HỘP TRONG KHÔNG GIAN",
      "subtitle": "PHẦN 2: TỔNG BA CẠNH BẰNG ĐƯỜNG CHÉO LỚN",
      "startTime": 22.46,
      "endTime": 54.26,
      "duration": 31.8,
      "mascotMode": "pointer",
      "mascotTip": "AB + AD + AA' = AC' (đường chéo đối diện xuất phát từ A)!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Quy tắc hình hộp (Đặc trưng không gian)</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• Cho hình hộp $ABCD.A'B'C'D'$. Ba vectơ xuất phát từ cùng đỉnh $A$:<br>&emsp;$$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$$<br>• <b>Công thức trung điểm:</b> $M$ là trung điểm $CD \\implies \\vec{AM} = \\frac{1}{2}(\\vec{AC} + \\vec{AD})$.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: QUY TẮC HÌNH HỘP TỪ ĐỈNH B",
      "subtitle": "RÚT GỌN TỔNG BA VECTƠ CẠNH",
      "startTime": 54.26,
      "endTime": 76.3,
      "duration": 22.04,
      "mascotMode": "pointer",
      "mascotTip": "Ba vectơ BA + BC + BB' cùng xuất phát từ đỉnh B -> Đường chéo là BD'!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Rút gọn tổng ba vectơ: $\\vec{BA} + \\vec{BC} + \\vec{BB'}$.<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "ĐƯỜNG CHÉO XUẤT PHÁT TỪ ĐỈNH B",
      "startTime": 76.3,
      "endTime": 90.02,
      "duration": 13.72,
      "mascotMode": "pointer",
      "mascotTip": "BA + BC + BB' = BD'!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd1_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải chi tiết Ví dụ 1:</b><br>Áp dụng quy tắc hình hộp xuất phát từ đỉnh $B$:<br>&emsp;$$\\vec{BA} + \\vec{BC} + \\vec{BB'} = \\vec{BD'}$$<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> Vectơ tổng bằng <b>$\\vec{BD'}$</b>.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: VECTƠ ĐƯỜNG TRUNG TUYẾN",
      "subtitle": "BIỂU DIỄN QUA HAI VECTƠ CẠNH",
      "startTime": 90.02,
      "endTime": 105.58,
      "duration": 15.56,
      "mascotMode": "pointer",
      "mascotTip": "M là trung điểm CD -> AM = 1/2(AC + AD)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Cho tứ diện $ABCD$. Gọi $M$ là trung điểm của cạnh $CD$. Chứng minh rằng $\\vec{AM} = \\frac{1}{2}(\\vec{AC} + \\vec{AD})$.<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian làm nháp: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI",
      "subtitle": "DỰNG HÌNH BÌNH HÀNH PHỤ",
      "startTime": 105.58,
      "endTime": 127.7,
      "duration": 22.12,
      "mascotMode": "pointer",
      "mascotTip": "AC + AD = 2 AM <=> AM = 1/2 (AC + AD)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd2_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 2:</b><br>Trong tam giác $ACD$, dựng hình bình hành $ACED$ có $M$ là trung điểm $CD$ và $AE$.<br>Theo quy tắc hình bình hành: $\\vec{AC} + \\vec{AD} = \\vec{AE} = 2\\vec{AM}$.<br><b style=\"color:#10b981; font-size:22px;\">Suy ra:</b> <b>$\\vec{AM} = \\frac{1}{2}(\\vec{AC} + \\vec{AD})$</b>.</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: TỔNG VECTƠ TỪ ĐỈNH CHÓP",
      "subtitle": "ĐÁY HÌNH BÌNH HÀNH TÂM O",
      "startTime": 127.7,
      "endTime": 142.54,
      "duration": 14.84,
      "mascotMode": "pointer",
      "mascotTip": "Gom từng cặp đối diện: (SA + SC) + (SB + SD) = 2SO + 2SO = 4SO!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Cho chóp $S.ABCD$ đáy hình bình hành tâm $O$. Rút gọn biểu thức $\\vec{SA} + \\vec{SB} + \\vec{SC} + \\vec{SD}$.<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI",
      "subtitle": "SỬ DỤNG TÂM ĐỐI XỨNG O",
      "startTime": 142.54,
      "endTime": 158.76,
      "duration": 16.22,
      "mascotMode": "cheer",
      "mascotTip": "SA + SB + SC + SD = 4 SO!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd3_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 3:</b><br>Do $O$ là trung điểm $AC$ và $BD$ nên:<br>• $\\vec{SA} + \\vec{SC} = 2\\vec{SO}$<br>• $\\vec{SB} + \\vec{SD} = 2\\vec{SO}$<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> $(\\vec{SA} + \\vec{SC}) + (\\vec{SB} + \\vec{SD}) = <b>4\\vec{SO}</b>.</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY TRẮC NGHIỆM: ĐƯỜNG CHÉO HÌNH HỘP",
      "subtitle": "PHẦN 4: NHẦM LẪN ĐỈNH ĐỐI DIỆN",
      "startTime": 158.76,
      "endTime": 171.91,
      "duration": 13.15,
      "mascotMode": "magnifier",
      "mascotTip": "Quy tắc hình hộp ra đường chéo không gian AC', không phải đường chéo mặt đáy AC!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi quy tắc hình hộp:</span><br>Nhiều học sinh áp dụng quy tắc hình hộp nhưng nhầm sang đường chéo mặt đáy: viết $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC}$ là <b>HOÀN TOÀN SAI</b>. Vectơ tổng phải là đường chéo xuyên tâm <b>$\\vec{AC'}$</b>!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: KHẨU QUYẾT QUY TẮC HÌNH HỘP",
      "startTime": 171.91,
      "endTime": 183.43,
      "duration": 11.52,
      "mascotMode": "cheer",
      "mascotTip": "Ba cạnh cùng đỉnh cộng lại ra đường chéo đối diện xuyên tâm hình hộp!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Khẩu quyết vàng Thầy Cú:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">• <b>Cộng nối đuôi:</b> $\\vec{AB} + \\vec{BC} = \\vec{AC}$.<br>• <b>Cộng chung gốc (Mặt phẳng):</b> $\\vec{AB} + \\vec{AD} = \\vec{AC}$ (Đường chéo HBH).<br>• <b>Cộng chung gốc (Không gian):</b> $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$ (Đường chéo lớn xuyên tâm).<br>Nhớ khẩu quyết này, không bao giờ nhầm lẫn!</div>"
    }
  ]
},
  bai6_muc3: {
  "lessonId": "bai6",
  "lessonTitle": "Bài 6: Vectơ trong không gian",
  "sectionId": "bai6_muc3",
  "sectionTitle": "Mục 3: Tích vô hướng của hai vectơ",
  "audio": "/audio/bai6_muc3.mp3",
  "audioSrc": "./audio/bai6_muc3.mp3",
  "audio_src": "./audio/bai6_muc3.mp3",
  "timestamp_src": "timestamps/bai6_muc3.json",
  "totalDuration": 177.7,
  "duration": 177.7,
  "title": "Mục 3: Tích vô hướng của hai vectơ trong không gian & Điều kiện vuông góc",
  "owl_tip": "u . v = |u| . |v| . cos(u, v). Hai vectơ vuông góc khi và chỉ khi tích vô hướng bằng 0!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 26.45,
      "id": "part2"
    },
    {
      "time": 46.44,
      "id": "part3"
    },
    {
      "time": 50.3,
      "id": "vd1_q"
    },
    {
      "time": 68.33,
      "id": "vd1_a"
    },
    {
      "time": 86.98,
      "id": "vd2_q"
    },
    {
      "time": 102.12,
      "id": "vd2_a"
    },
    {
      "time": 118.58,
      "id": "vd3_q"
    },
    {
      "time": 134.04,
      "id": "vd3_a"
    },
    {
      "time": 150.41,
      "id": "part4"
    },
    {
      "time": 166.44,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Góc giữa hai vectơ trong không gian</h3>\n        <p>• Cho hai vectơ $\\vec{u}, \\vec{v} \\neq \\vec{0}$. Lấy điểm $O$, vẽ $\\vec{OA} = \\vec{u}, \\vec{OB} = \\vec{v}$. Khi đó $\\widehat{AOB} = (\\vec{u}, \\vec{v})$.<br>\n        • Quy ước: $0^\\circ \\le (\\vec{u}, \\vec{v}) \\le 180^\\circ$.<br>\n        • $\\vec{u} \\perp \\vec{v} \\iff (\\vec{u}, \\vec{v}) = 90^\\circ$.</p>\n      </div>\n      <div id=\"part2\"><h3>2. Tích vô hướng của hai vectơ</h3>\n        <p>• <b>Định nghĩa:</b> $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$.<br>\n        • <b>Điều kiện vuông góc:</b> $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$.<br>\n        • <b>Công thức cosin góc:</b> $\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|}$.<br>\n        • <b>Bình phương vô hướng:</b> $\\vec{u}^2 = |\\vec{u}|^2$.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ tính toán</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Tứ diện đều $ABCD$ cạnh $a$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$.<br><i>(Thời gian làm nháp: 20s)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          Tam giác $ABC$ đều nên $(\\vec{AB}, \\vec{AC}) = 60^\\circ$.<br>\n          $\\vec{AB} \\cdot \\vec{AC} = |\\vec{AB}| \\cdot |\\vec{AC}| \\cdot \\cos 60^\\circ = a \\cdot a \\cdot \\frac{1}{2} = \\frac{a^2}{2}$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{AD'}$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          Đường thẳng $AB \\perp (ADD'A') \\implies AB \\perp AD'$.<br>\n          Góc giữa hai vectơ là $90^\\circ \\implies \\vec{AB} \\cdot \\vec{AD'} = 0$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #ccc; padding:10px; margin:5px 0;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Cho $|\\vec{u}| = 2, |\\vec{v}| = 3$, tích vô hướng $\\vec{u} \\cdot \\vec{v} = -3$. Tính góc $(\\vec{u}, \\vec{v})$.<br><i>(Thời gian suy nghĩ: 15s)</i></div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          $\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\frac{-3}{2 \\cdot 3} = -\\frac{1}{2}$.<br>\n          $\\implies (\\vec{u}, \\vec{v}) = 120^\\circ$.\n        </div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Góc giữa 2 vectơ có thể là góc tù (lên tới $180^\\circ$), trong khi góc giữa 2 đường thẳng luôn $\\le 90^\\circ$. Đừng nhầm lẫn!</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Công cụ vàng chứng minh đường thẳng vuông góc trong không gian: Chứng minh tích vô hướng của hai vectơ chỉ phương bằng 0!</p></div>\n    ",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm & Định nghĩa cơ bản",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Cùng phương, Cùng hướng & Bằng nhau",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Các ví dụ rèn luyện (3 Ví dụ)",
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
      "title": "TÍCH VÔ HƯỚNG TRONG KHÔNG GIAN",
      "subtitle": "PHẦN 1: GÓC GIỮA HAI VECTƠ TRONG KHÔNG GIAN",
      "startTime": 0.0,
      "endTime": 26.45,
      "duration": 26.45,
      "mascotMode": "pointer",
      "mascotTip": "Góc giữa 2 vectơ có số đo từ 0 độ đến 180 độ. Hai vectơ vuông góc khi góc bằng 90 độ!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Góc giữa hai vectơ trong không gian</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• Cho hai vectơ $\\vec{u}, \\vec{v} \\neq \\vec{0}$. Lấy điểm $O$, vẽ $\\vec{OA} = \\vec{u}, \\vec{OB} = \\vec{v}$. Khi đó $\\widehat{AOB} = (\\vec{u}, \\vec{v})$.<br>• <b>Khoảng giá trị:</b> $0^\\circ \\le (\\vec{u}, \\vec{v}) \\le 180^\\circ$.<br>• $\\vec{u} \\perp \\vec{v} \\iff (\\vec{u}, \\vec{v}) = 90^\\circ$.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "CÔNG THỨC TÍCH VÔ HƯỚNG",
      "subtitle": "PHẦN 2: ĐIỀU KIỆN VUÔNG GÓC & TÍNH GÓC",
      "startTime": 26.45,
      "endTime": 50.3,
      "duration": 23.85,
      "mascotMode": "pointer",
      "mascotTip": "u . v = |u| . |v| . cos(u, v). Hai vectơ vuông góc <=> u . v = 0!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Tích vô hướng của hai vectơ</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Công thức:</b> $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$.<br>• <b>Điều kiện vuông góc:</b> $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$.<br>• <b>Công thức cosin góc:</b> $\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|}$.<br>• Bình phương vô hướng: $\\vec{u}^2 = |\\vec{u}|^2$.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: TỨ DIỆN ĐỀU CẠNH a",
      "subtitle": "TÍNH TÍCH VÔ HƯỚNG HAI CẠNH CHUNG GỐC",
      "startTime": 50.3,
      "endTime": 68.33,
      "duration": 18.03,
      "mascotMode": "pointer",
      "mascotTip": "Tam giác ABC đều -> Góc A = 60 độ. AB . AC = a . a . cos(60) = a²/2!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Cho tứ diện đều $ABCD$ có tất cả các cạnh bằng $a$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$.<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian làm nháp: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "GÓC 60 ĐỘ TRONG TAM GIÁC ĐỀU",
      "startTime": 68.33,
      "endTime": 86.98,
      "duration": 18.65,
      "mascotMode": "pointer",
      "mascotTip": "AB . AC = a² / 2!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd1_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 1:</b><br>Tam giác $ABC$ đều cạnh $a$ nên góc $(\\vec{AB}, \\vec{AC}) = 60^\\circ$.<br>$$\\vec{AB} \\cdot \\vec{AC} = |\\vec{AB}| \\cdot |\\vec{AC}| \\cdot \\cos 60^\\circ = a \\cdot a \\cdot \\frac{1}{2} = \\frac{a^2}{2}$$<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$\\vec{AB} \\cdot \\vec{AC} = \\frac{a^2}{2}$</b>.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: HÌNH LẬP PHƯƠNG",
      "subtitle": "TÍNH TÍCH VÔ HƯỚNG VUÔNG GÓC",
      "startTime": 86.98,
      "endTime": 102.12,
      "duration": 15.14,
      "mascotMode": "pointer",
      "mascotTip": "AB vuông góc (ADD'A') -> AB vuông góc AD' -> Tích vô hướng bằng 0!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{AD'}$.<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI",
      "subtitle": "HAI VECTƠ VUÔNG GÓC",
      "startTime": 102.12,
      "endTime": 118.58,
      "duration": 16.46,
      "mascotMode": "cheer",
      "mascotTip": "AB vuông góc AD' -> AB . AD' = 0!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd2_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 2:</b><br>Đường thẳng $AB \\perp (ADD'A') \\implies AB \\perp AD'$.<br>Do đó góc giữa hai vectơ là $90^\\circ$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$\\vec{AB} \\cdot \\vec{AD'} = 0$</b>.</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: TÌM GÓC GIỮA HAI VECTƠ",
      "subtitle": "BIẾT ĐỘ DÀI VÀ TÍCH VÔ HƯỚNG",
      "startTime": 118.58,
      "endTime": 134.04,
      "duration": 15.46,
      "mascotMode": "pointer",
      "mascotTip": "cos(u, v) = (u . v) / (|u| . |v|) = -3 / (2 . 3) = -1/2 -> Góc bằng 120 độ!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Cho hai vectơ $\\vec{u}, \\vec{v}$ có $|\\vec{u}| = 2, |\\vec{v}| = 3$, tích vô hướng $\\vec{u} \\cdot \\vec{v} = -3$. Tính góc $(\\vec{u}, \\vec{v})$.<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI",
      "subtitle": "GÓC TÙ GIỮA HAI VECTƠ",
      "startTime": 134.04,
      "endTime": 150.41,
      "duration": 16.37,
      "mascotMode": "pointer",
      "mascotTip": "cos(u, v) = -1/2 -> (u, v) = 120 độ!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd3_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 3:</b><br>$$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\frac{-3}{2 \\cdot 3} = -\\frac{1}{2}$$<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$(\\vec{u}, \\vec{v}) = 120^\\circ$</b>.</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI: GÓC VECTƠ VS GÓC ĐƯỜNG THẲNG",
      "subtitle": "PHẦN 4: GÓC TÙ VÀ GÓC NHỌN",
      "startTime": 150.41,
      "endTime": 166.44,
      "duration": 16.03,
      "mascotMode": "magnifier",
      "mascotTip": "Góc giữa 2 đường thẳng luôn <= 90 độ. Góc giữa 2 vectơ có thể lên tới 180 độ!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi về góc trong không gian:</span><br>• Góc giữa hai đường thẳng luôn là <b>góc nhọn hoặc vuông</b> ($0^\\circ \\le \\varphi \\le 90^\\circ$).<br>• Góc giữa hai vectơ có thể là <b>góc tù</b> ($0^\\circ \\le \\alpha \\le 180^\\circ$). Đừng bao giờ lấy trị tuyệt đối cos khi tính góc giữa hai vectơ!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: CÔNG CỤ VÀNG CHỨNG MINH VUÔNG GÓC",
      "startTime": 166.44,
      "endTime": 177.7,
      "duration": 11.26,
      "mascotMode": "cheer",
      "mascotTip": "Hai đường thẳng vuông góc khi và chỉ khi tích vô hướng hai vectơ chỉ phương bằng 0!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Bí kíp vàng chứng minh vuông góc:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">Để chứng minh hai đường thẳng $a$ và $b$ vuông góc trong không gian:<br>• Chỉ cần lấy hai vectơ chỉ phương $\\vec{u}$ và $\\vec{v}$.<br>• Tính tích vô hướng $\\vec{u} \\cdot \\vec{v} = 0$.<br>$\\implies a \\perp b$ ngay lập tức, nhanh hơn rất nhiều so với dựng hình học phẳng cổ điển!</div>"
    }
  ]
}
});

// Tương thích ngược: Đồng bộ sang CHAPTER1_DATA & CHAPTER1_LECTURES
if(typeof window.CHAPTER1_DATA === 'undefined') window.CHAPTER1_DATA = {};
Object.assign(window.CHAPTER1_DATA, window.CHAPTER2_DATA);
if(typeof window.CHAPTER1_LECTURES !== 'undefined') {
  Object.assign(window.CHAPTER1_LECTURES, window.CHAPTER2_DATA);
}
