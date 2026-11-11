// Dữ liệu Chương 2: Véc tơ và hệ tọa độ trong không gian (KNTT)
if(typeof window.CHAPTER2_DATA === 'undefined') window.CHAPTER2_DATA = {};
Object.assign(window.CHAPTER2_DATA, {
  bai6_muc1: {
  "lessonId": "bai6",
  "lessonTitle": "Bài 6: Véc tơ trong không gian",
  "sectionId": "bai6_muc1",
  "sectionTitle": "Mục 1: Định nghĩa & Các khái niệm cơ bản",
  "audio": "/audio/bai6_muc1.mp3",
  "audioSrc": "./audio/bai6_muc1.mp3",
  "audio_src": "./audio/bai6_muc1.mp3",
  "timestamp_src": "timestamps/bai6_muc1.json",
  "totalDuration": 190.44,
  "duration": 190.44,
  "title": "Mục 1: Định nghĩa véc tơ & Các khái niệm cơ bản trong không gian",
  "owl_tip": "Véc tơ trong không gian là đoạn thẳng có hướng. Hai véc tơ bằng nhau khi cùng hướng và cùng độ dài!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 46.44,
      "id": "part2"
    },
    {
      "time": 75.26,
      "id": "part3"
    },
    {
      "time": 79.06,
      "id": "vd1_q"
    },
    {
      "time": 100.25,
      "id": "vd1_a"
    },
    {
      "time": 115.75,
      "id": "vd2_q"
    },
    {
      "time": 127.56,
      "id": "vd2_a"
    },
    {
      "time": 137.83,
      "id": "vd3_q"
    },
    {
      "time": 154.7,
      "id": "vd3_a"
    },
    {
      "time": 165.17,
      "id": "part4"
    },
    {
      "time": 177.05,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Định nghĩa véc tơ trong không gian</h3>\n        <p>• <b>Định nghĩa:</b> Véc tơ trong không gian là một đoạn thẳng có hướng (đã xác định rõ điểm đầu và điểm cuối).<br>\n        • Ký hiệu: $\\vec{a}, \\vec{b}$ hoặc $\\vec{AB}$ (với $A$ là điểm đầu, $B$ là điểm cuối).<br>\n        • <b>Độ dài của véc tơ:</b> Là khoảng cách giữa điểm đầu và điểm cuối, ký hiệu $|\\vec{AB}| = AB$.</p>\n      </div>\n      <div id=\"part2\"><h3>2. Hai véc tơ cùng phương & Hai véc tơ bằng nhau</h3>\n        <p>• <b>Cùng phương:</b> Giá của hai véc tơ song song hoặc trùng nhau.<br>\n        • <b>Cùng hướng / Ngược hướng:</b> Chỉ xét khi hai véc tơ đã cùng phương.<br>\n        • <b>Hai véc tơ bằng nhau:</b> $\\vec{a} = \\vec{b} \\iff$ Cùng hướng và cùng độ dài ($|\\vec{a}| = |\\vec{b}|$).<br>\n        • <b>Véc tơ-không:</b> Ký hiệu $\\vec{0}$, điểm đầu và điểm cuối trùng nhau ($|\\vec{0}| = 0$). $\\vec{0}$ cùng phương, cùng hướng với mọi véc tơ.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ rèn luyện</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #3b82f6; border-radius:8px; padding:12px; margin:8px 0; background:#0f172a;\">\n        <div id=\"vd1_q\">\n          <b>Ví dụ 1:</b> Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Tìm véc tơ bằng $\\vec{AB}$ có các đầu mút là đỉnh của hình chóp.<br>\n          \n    <div style=\"text-align:center; margin:12px 0;\">\n      <svg width=\"280\" height=\"180\" viewBox=\"0 0 280 180\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155; font-family:'Times New Roman', serif; font-style:italic;\">\n        <defs>\n          <marker id=\"arr_blue\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/></marker>\n          <marker id=\"arr_rose\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/></marker>\n        </defs>\n        <line x1=\"50\" y1=\"130\" x2=\"110\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" />\n        <line x1=\"110\" y1=\"95\" x2=\"230\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" />\n        <line x1=\"140\" y1=\"20\" x2=\"110\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" />\n        <line x1=\"50\" y1=\"130\" x2=\"230\" y2=\"95\" stroke=\"#64748b\" stroke-width=\"1\" stroke-dasharray=\"3\" />\n        <line x1=\"170\" y1=\"130\" x2=\"110\" y2=\"95\" stroke=\"#64748b\" stroke-width=\"1\" stroke-dasharray=\"3\" />\n        <circle cx=\"140\" cy=\"112.5\" r=\"2.5\" fill=\"#facc15\" />\n        <text x=\"145\" y=\"125\" fill=\"#facc15\" font-size=\"14\" font-weight=\"bold\">O</text>\n        <line x1=\"50\" y1=\"130\" x2=\"170\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"170\" y1=\"130\" x2=\"230\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"140\" y1=\"20\" x2=\"50\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"140\" y1=\"20\" x2=\"170\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"140\" y1=\"20\" x2=\"230\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"50\" y1=\"130\" x2=\"162\" y2=\"130\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arr_blue)\" />\n        <line x1=\"110\" y1=\"95\" x2=\"222\" y2=\"95\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"4\" marker-end=\"url(#arr_rose)\" />\n        <text x=\"136\" y=\"14\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\">S</text>\n        <text x=\"32\" y=\"140\" fill=\"#38bdf8\" font-size=\"15\" font-weight=\"bold\">A</text>\n        <text x=\"176\" y=\"140\" fill=\"#38bdf8\" font-size=\"15\" font-weight=\"bold\">B</text>\n        <text x=\"238\" y=\"100\" fill=\"#f43f5e\" font-size=\"15\" font-weight=\"bold\">C</text>\n        <text x=\"96\" y=\"92\" fill=\"#f43f5e\" font-size=\"15\" font-weight=\"bold\">D</text>\n      </svg>\n      <div style=\"font-size:13px; color:#94a3b8; margin-top:4px;\">Hình vẽ: $ABCD$ là hình bình hành $\\implies \\vec{AB} = \\vec{DC}$</div>\n    </div>\n    \n          <i>(Thời gian suy nghĩ: 20s)</i>\n        </div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          Do tứ giác $ABCD$ là hình bình hành nên cạnh $AB \\parallel DC$ và $AB = DC$.<br>\n          Hướng đi từ $A \\to B$ cùng hướng với hướng đi từ $D \\to C$.<br>\n          $\\implies$ Kết luận: <b>$\\vec{AB} = \\vec{DC}$</b> (chú ý thứ tự đỉnh: $D$ trước, $C$ sau).\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #3b82f6; border-radius:8px; padding:12px; margin:8px 0; background:#0f172a;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Cho tứ diện đều $ABCD$ cạnh $a$. Tính độ dài của $\\vec{AB}$ và $\\vec{CD}$.<br><i>(Thời gian suy nghĩ: 15s)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải:</b><br>\n          Tứ diện đều có tất cả sáu cạnh đều bằng $a$.<br>\n          $\\implies |\\vec{AB}| = AB = a$ và $|\\vec{CD}| = CD = a$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #3b82f6; border-radius:8px; padding:12px; margin:8px 0; background:#0f172a;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Trong lăng trụ tam giác $ABC.A'B'C'$, hai véc tơ $\\vec{AA'}$ và $\\vec{CC'}$ có bằng nhau không?<br><i>(Thời gian suy nghĩ: 15s)</i></div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải:</b><br>\n          Các cạnh bên của hình lăng trụ luôn song song và bằng nhau: $AA' \\parallel CC'$ và $AA' = CC'$.<br>\n          Hướng từ trên xuống dưới cùng chiều $\\implies$ <b>$\\vec{AA'} = \\vec{CC'}$</b>.\n        </div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Nhầm lẫn giữa $\\vec{AB}$ và $\\vec{BA}$. Đây là hai véc tơ đối nhau (ngược hướng), có $\\vec{AB} = -\\vec{BA}$, tuyệt đối không bằng nhau!</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Trong hình bình hành $ABCD$, luôn đọc theo chiều mũi tên: $\\vec{AB} = \\vec{DC}$, không viết ngược thành $\\vec{CD}$!</p></div>\n    ",
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
      "title": "BÀI 6: VÉC TƠ TRONG KHÔNG GIAN",
      "subtitle": "PHẦN 1: ĐỊNH NGHĨA & ĐỘ DÀI VÉC TƠ",
      "startTime": 0.0,
      "endTime": 46.44,
      "duration": 46.44,
      "mascotMode": "pointer",
      "mascotTip": "Véc tơ là đoạn thẳng có hướng: điểm đầu (gốc) và điểm cuối (ngọn). Độ dài |AB| = AB!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Định nghĩa véc tơ trong không gian</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• Véc tơ trong không gian là một đoạn thẳng có hướng.<br>• Ký hiệu: $\\vec{a}, \\vec{b}$ hoặc $\\vec{AB}$ ($A$ là điểm đầu, $B$ là điểm cuối).<br>• <b>Độ dài của véc tơ:</b> Khoảng cách giữa điểm đầu và điểm cuối: $|\\vec{AB}| = AB$.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "CÙNG PHƯƠNG & BẰNG NHAU",
      "subtitle": "PHẦN 2: ĐIỀU KIỆN HAI VÉC TƠ BẰNG NHAU",
      "startTime": 46.44,
      "endTime": 79.06,
      "duration": 32.62,
      "mascotMode": "pointer",
      "mascotTip": "Hai véc tơ bằng nhau khi và chỉ khi: Cùng hướng VÀ Cùng độ dài!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Cùng phương, cùng hướng và bằng nhau</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Cùng phương:</b> Giá của hai véc tơ song song hoặc trùng nhau.<br>• <b>Hai véc tơ bằng nhau:</b> $\\vec{a} = \\vec{b} \\iff$ Cùng hướng và cùng độ dài.<br>• <b>Véc tơ-không:</b> $\\vec{0}$ có điểm đầu và cuối trùng nhau, độ dài bằng $0$, cùng phương và cùng hướng với mọi véc tơ.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: CHÓP ĐÁY HÌNH BÌNH HÀNH",
      "subtitle": "TÌM VÉC TƠ BẰNG NHAU",
      "startTime": 79.06,
      "endTime": 100.25,
      "duration": 21.19,
      "mascotMode": "pointer",
      "mascotTip": "Quan sát hình vẽ: Đáy là hình bình hành ABCD -> AB = DC!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Tìm véc tơ bằng $\\vec{AB}$ có các đầu mút là đỉnh của hình chóp.\n    <div style=\"text-align:center; margin:12px 0;\">\n      <svg width=\"280\" height=\"180\" viewBox=\"0 0 280 180\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155; font-family:'Times New Roman', serif; font-style:italic;\">\n        <defs>\n          <marker id=\"arr_blue\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/></marker>\n          <marker id=\"arr_rose\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/></marker>\n        </defs>\n        <line x1=\"50\" y1=\"130\" x2=\"110\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" />\n        <line x1=\"110\" y1=\"95\" x2=\"230\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" />\n        <line x1=\"140\" y1=\"20\" x2=\"110\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" />\n        <line x1=\"50\" y1=\"130\" x2=\"230\" y2=\"95\" stroke=\"#64748b\" stroke-width=\"1\" stroke-dasharray=\"3\" />\n        <line x1=\"170\" y1=\"130\" x2=\"110\" y2=\"95\" stroke=\"#64748b\" stroke-width=\"1\" stroke-dasharray=\"3\" />\n        <circle cx=\"140\" cy=\"112.5\" r=\"2.5\" fill=\"#facc15\" />\n        <text x=\"145\" y=\"125\" fill=\"#facc15\" font-size=\"14\" font-weight=\"bold\">O</text>\n        <line x1=\"50\" y1=\"130\" x2=\"170\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"170\" y1=\"130\" x2=\"230\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"140\" y1=\"20\" x2=\"50\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"140\" y1=\"20\" x2=\"170\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"140\" y1=\"20\" x2=\"230\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"50\" y1=\"130\" x2=\"162\" y2=\"130\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arr_blue)\" />\n        <line x1=\"110\" y1=\"95\" x2=\"222\" y2=\"95\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"4\" marker-end=\"url(#arr_rose)\" />\n        <text x=\"136\" y=\"14\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\">S</text>\n        <text x=\"32\" y=\"140\" fill=\"#38bdf8\" font-size=\"15\" font-weight=\"bold\">A</text>\n        <text x=\"176\" y=\"140\" fill=\"#38bdf8\" font-size=\"15\" font-weight=\"bold\">B</text>\n        <text x=\"238\" y=\"100\" fill=\"#f43f5e\" font-size=\"15\" font-weight=\"bold\">C</text>\n        <text x=\"96\" y=\"92\" fill=\"#f43f5e\" font-size=\"15\" font-weight=\"bold\">D</text>\n      </svg>\n      <div style=\"font-size:13px; color:#94a3b8; margin-top:4px;\">Hình vẽ: $ABCD$ là hình bình hành $\\implies \\vec{AB} = \\vec{DC}$</div>\n    </div>\n    <div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "CHÚ Ý THỨ TỰ ĐỈNH HÌNH BÌNH HÀNH",
      "startTime": 100.25,
      "endTime": 115.75,
      "duration": 15.5,
      "mascotMode": "pointer",
      "mascotTip": "AB và DC cùng hướng A -> B và D -> C => AB = DC!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd1_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải chi tiết Ví dụ 1:</b><br>• Do tứ giác $ABCD$ là hình bình hành nên cạnh $AB \\parallel DC$ và $AB = DC$.<br>• Hướng đi từ $A \\to B$ cùng hướng với hướng đi từ $D \\to C$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$\\vec{AB} = \\vec{DC}$</b>.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: ĐỘ DÀI CẠNH TỨ DIỆN ĐỀU",
      "subtitle": "TỨ DIỆN ĐỀU CẠNH a",
      "startTime": 115.75,
      "endTime": 127.56,
      "duration": 11.81,
      "mascotMode": "pointer",
      "mascotTip": "Tất cả sáu cạnh tứ diện đều bằng nhau và bằng a!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Cho tứ diện đều $ABCD$ cạnh $a$. Tính độ dài của $\\vec{AB}$ và $\\vec{CD}$.<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian nhẩm nhanh: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI",
      "subtitle": "ĐỘ DÀI VÉC TƠ BẰNG ĐỘ DÀI ĐOẠN THẲNG",
      "startTime": 127.56,
      "endTime": 137.83,
      "duration": 10.27,
      "mascotMode": "cheer",
      "mascotTip": "|AB| = a, |CD| = a!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd2_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 2:</b><br>Tứ diện đều có tất cả sáu cạnh đều bằng $a$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$|\\vec{AB}| = a$</b> và <b>$|\\vec{CD}| = a$</b>.</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: CẠNH BÊN LĂNG TRỤ TAM GIÁC",
      "subtitle": "SO SÁNH HAI VÉC TƠ CẠNH BÊN",
      "startTime": 137.83,
      "endTime": 154.7,
      "duration": 16.87,
      "mascotMode": "pointer",
      "mascotTip": "Cạnh bên lăng trụ song song và bằng nhau -> AA' = CC'!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Cho lăng trụ tam giác $ABC.A'B'C'$. Hỏi $\\vec{AA'}$ và $\\vec{CC'}$ có bằng nhau không?<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI",
      "subtitle": "CẠNH BÊN SONG SONG & CÙNG CHIỀU",
      "startTime": 154.7,
      "endTime": 165.17,
      "duration": 10.47,
      "mascotMode": "pointer",
      "mascotTip": "AA' song song và bằng CC', cùng chiều từ trên xuống -> AA' = CC'!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd3_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 3:</b><br>Các cạnh bên lăng trụ song song và bằng nhau, hướng từ trên xuống dưới cùng chiều.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$\\vec{AA'} = \\vec{CC'}$</b>.</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI: ĐẢO CHIỀU ĐIỂM ĐẦU & CUỐI",
      "subtitle": "PHẦN 4: VÉC TƠ ĐỐI NHAU",
      "startTime": 165.17,
      "endTime": 177.05,
      "duration": 11.88,
      "mascotMode": "magnifier",
      "mascotTip": "AB và BA có cùng độ dài nhưng ngược hướng -> AB = -BA, KHÔNG bằng nhau!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi khái niệm véc tơ:</span><br>Nhầm lẫn giữa $\\vec{AB}$ và $\\vec{BA}$. Hai véc tơ này ngược hướng nên <b>$\\vec{AB} = -\\vec{BA}$</b>, tuyệt đối không được viết $\\vec{AB} = \\vec{BA}$!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: THỨ TỰ ĐỈNH TRONG HÌNH BÌNH HÀNH",
      "startTime": 177.05,
      "endTime": 190.44,
      "duration": 13.39,
      "mascotMode": "cheer",
      "mascotTip": "Trong hình bình hành ABCD: AB = DC, AD = BC. Tuyệt đối không nhầm AB = CD!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Bí kíp nhớ nhanh véc tơ bằng nhau:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">Luôn nhớ thứ tự các đỉnh:<br>Trong hình bình hành $ABCD$: <b>$\\vec{AB} = \\vec{DC}$</b> (điểm $D$ đứng trước $C$!), không được viết ngược thành $\\vec{CD}$!</div>"
    }
  ]
},
  bai6_muc2: {
  "lessonId": "bai6",
  "lessonTitle": "Bài 6: Véc tơ trong không gian",
  "sectionId": "bai6_muc2",
  "sectionTitle": "Mục 2: Các phép toán véc tơ trong không gian",
  "audio": "/audio/bai6_muc2.mp3",
  "audioSrc": "./audio/bai6_muc2.mp3",
  "audio_src": "./audio/bai6_muc2.mp3",
  "timestamp_src": "timestamps/bai6_muc2.json",
  "totalDuration": 166.99,
  "duration": 166.99,
  "title": "Mục 2: Các phép toán véc tơ trong không gian (Quy tắc hình hộp)",
  "owl_tip": "Quy tắc hình hộp: Ba cạnh cùng đỉnh cộng lại ra đường chéo không gian xuyên tâm!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 23.45,
      "id": "part2"
    },
    {
      "time": 50.64,
      "id": "part3"
    },
    {
      "time": 54.34,
      "id": "vd1_q"
    },
    {
      "time": 76.08,
      "id": "vd1_a"
    },
    {
      "time": 86.21,
      "id": "vd2_q"
    },
    {
      "time": 100.15,
      "id": "vd2_a"
    },
    {
      "time": 114.53,
      "id": "vd3_q"
    },
    {
      "time": 129.17,
      "id": "vd3_a"
    },
    {
      "time": 143.3,
      "id": "part4"
    },
    {
      "time": 154.49,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Quy tắc tam giác & Quy tắc hình bình hành</h3>\n        \n    <div style=\"display:flex; flex-wrap:wrap; justify-content:center; gap:16px; margin:12px 0;\">\n      <div style=\"text-align:center; background:#1e293b; padding:10px 14px; border-radius:8px; border:1px solid #334155; font-family:'Times New Roman', serif; font-style:italic;\">\n        <div style=\"color:#38bdf8; font-size:14px; font-weight:bold; margin-bottom:6px; font-style:normal;\">Quy tắc 3 điểm (Tam giác)</div>\n        <svg width=\"190\" height=\"115\" viewBox=\"0 0 190 115\">\n          <defs>\n            <marker id=\"arr1\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/></marker>\n            <marker id=\"arr2\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/></marker>\n          </defs>\n          <line x1=\"25\" y1=\"90\" x2=\"105\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2.2\" marker-end=\"url(#arr1)\" />\n          <line x1=\"110\" y1=\"90\" x2=\"155\" y2=\"28\" stroke=\"#38bdf8\" stroke-width=\"2.2\" marker-end=\"url(#arr1)\" />\n          <line x1=\"25\" y1=\"90\" x2=\"152\" y2=\"30\" stroke=\"#f43f5e\" stroke-width=\"2.4\" stroke-dasharray=\"3\" marker-end=\"url(#arr2)\" />\n          <text x=\"12\" y=\"95\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">A</text>\n          <text x=\"110\" y=\"105\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">B</text>\n          <text x=\"160\" y=\"26\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">C</text>\n        </svg>\n        <div style=\"color:#f8fafc; font-size:13px; margin-top:2px; font-style:normal;\">$\\vec{AB} + \\vec{BC} = \\vec{AC}$</div>\n      </div>\n      <div style=\"text-align:center; background:#1e293b; padding:10px 14px; border-radius:8px; border:1px solid #334155; font-family:'Times New Roman', serif; font-style:italic;\">\n        <div style=\"color:#38bdf8; font-size:14px; font-weight:bold; margin-bottom:6px; font-style:normal;\">Quy tắc Hình bình hành</div>\n        <svg width=\"190\" height=\"115\" viewBox=\"0 0 190 115\">\n          <defs>\n            <marker id=\"arr3\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/></marker>\n            <marker id=\"arr4\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#10b981\"/></marker>\n          </defs>\n          <line x1=\"25\" y1=\"90\" x2=\"105\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arr3)\" />\n          <line x1=\"25\" y1=\"90\" x2=\"68\" y2=\"28\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arr3)\" />\n          <line x1=\"110\" y1=\"90\" x2=\"155\" y2=\"28\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"3\" />\n          <line x1=\"70\" y1=\"28\" x2=\"155\" y2=\"28\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"3\" />\n          <line x1=\"25\" y1=\"90\" x2=\"150\" y2=\"30\" stroke=\"#10b981\" stroke-width=\"2.4\" marker-end=\"url(#arr4)\" />\n          <text x=\"12\" y=\"95\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">A</text>\n          <text x=\"112\" y=\"102\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">B</text>\n          <text x=\"160\" y=\"28\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">C</text>\n          <text x=\"58\" y=\"22\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">D</text>\n        </svg>\n        <div style=\"color:#f8fafc; font-size:13px; margin-top:2px; font-style:normal;\">$\\vec{AB} + \\vec{AD} = \\vec{AC}$</div>\n      </div>\n    </div>\n    \n        <p>• <b>Quy tắc ba điểm (Tam giác):</b> $\\vec{AB} + \\vec{BC} = \\vec{AC}$ (ngọn nối tiếp gốc).<br>\n        • <b>Quy tắc hình bình hành:</b> Nếu $ABCD$ là hình bình hành thì $\\vec{AB} + \\vec{AD} = \\vec{AC}$ (chung gốc $A$, đường chéo đáy).<br>\n        • <b>Hiệu hai véc tơ:</b> $\\vec{AB} - \\vec{AC} = \\vec{CB}$ (chung gốc đầu, ngọn đi từ sau ra trước).</p>\n      </div>\n      <div id=\"part2\"><h3>2. Quy tắc hình hộp trong không gian</h3>\n        \n    <div style=\"text-align:center; margin:14px 0;\">\n      <svg width=\"270\" height=\"190\" viewBox=\"0 0 270 190\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155; font-family:'Times New Roman', serif; font-style:italic;\">\n        <defs>\n          <marker id=\"arr_box_blue\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/></marker>\n          <marker id=\"arr_box_diag\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f59e0b\"/></marker>\n        </defs>\n        <line x1=\"45\" y1=\"125\" x2=\"105\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" />\n        <line x1=\"105\" y1=\"90\" x2=\"225\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" />\n        <line x1=\"105\" y1=\"90\" x2=\"105\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" />\n        <line x1=\"45\" y1=\"125\" x2=\"100\" y2=\"93\" stroke=\"#38bdf8\" stroke-width=\"2.2\" stroke-dasharray=\"4\" marker-end=\"url(#arr_box_blue)\" />\n        <line x1=\"45\" y1=\"125\" x2=\"165\" y2=\"125\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"165\" y1=\"125\" x2=\"225\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"45\" y1=\"125\" x2=\"45\" y2=\"65\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"165\" y1=\"125\" x2=\"165\" y2=\"65\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"225\" y1=\"90\" x2=\"225\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"45\" y1=\"65\" x2=\"165\" y2=\"65\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"165\" y1=\"65\" x2=\"225\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"225\" y1=\"30\" x2=\"105\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"105\" y1=\"30\" x2=\"45\" y2=\"65\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"45\" y1=\"125\" x2=\"157\" y2=\"125\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arr_box_blue)\" />\n        <line x1=\"45\" y1=\"125\" x2=\"45\" y2=\"72\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arr_box_blue)\" />\n        <line x1=\"45\" y1=\"125\" x2=\"219\" y2=\"33\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"5,2\" marker-end=\"url(#arr_box_diag)\" />\n        <text x=\"28\" y=\"135\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">A</text>\n        <text x=\"170\" y=\"138\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">B</text>\n        <text x=\"232\" y=\"96\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">C</text>\n        <text x=\"92\" y=\"88\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">D</text>\n        <text x=\"28\" y=\"65\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">A'</text>\n        <text x=\"170\" y=\"62\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">B'</text>\n        <text x=\"232\" y=\"28\" fill=\"#f59e0b\" font-size=\"15\" font-weight=\"bold\">C'</text>\n        <text x=\"94\" y=\"24\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">D'</text>\n      </svg>\n      <div style=\"font-size:14px; color:#fde047; font-weight:bold; margin-top:4px;\">Quy tắc hình hộp: $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$ (Đường chéo lớn)</div>\n    </div>\n    \n        <p>• Cho hình hộp $ABCD.A'B'C'D'$. Tổng ba véc tơ cùng xuất phát từ một đỉnh theo 3 cạnh bằng véc tơ đường chéo lớn:<br>\n        $$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$$<br>\n        • <b>Quy tắc trung điểm:</b> $M$ là trung điểm $CD \\implies \\vec{AM} = \\frac{1}{2}(\\vec{AC} + \\vec{AD})$.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ thực hành</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #3b82f6; border-radius:8px; padding:12px; margin:8px 0; background:#0f172a;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Rút gọn tổng ba véc tơ cạnh: $\\vec{BA} + \\vec{BC} + \\vec{BB'}$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          Áp dụng quy tắc hình hộp xuất phát từ gốc $B$: ba cạnh là $\\vec{BA}, \\vec{BC}, \\vec{BB'}$.<br>\n          Đường chéo lớn xuất phát từ $B$ nối tới đỉnh đối diện là $D'$.<br>\n          $\\implies$ <b>$\\vec{BA} + \\vec{BC} + \\vec{BB'} = \\vec{BD'}$</b>.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #3b82f6; border-radius:8px; padding:12px; margin:8px 0; background:#0f172a;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Cho tứ diện $ABCD$, $M$ là trung điểm cạnh $CD$. Biểu diễn $\\vec{AM}$ theo $\\vec{AC}$ và $\\vec{AD}$.<br><i>(Thời gian làm nháp: 15s)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          Tam giác $ACD$ có $AM$ là trung tuyến. Áp dụng quy tắc trung điểm ta có:<br>\n          $$\\vec{AM} = \\frac{1}{2}(\\vec{AC} + \\vec{AD})$$\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #3b82f6; border-radius:8px; padding:12px; margin:8px 0; background:#0f172a;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Cho chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Rút gọn: $\\vec{SA} + \\vec{SB} + \\vec{SC} + \\vec{SD}$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          Vì $O$ là tâm hình bình hành nên $O$ là trung điểm của $AC$ và $BD$.<br>\n          • $\\vec{SA} + \\vec{SC} = 2\\vec{SO}$<br>\n          • $\\vec{SB} + \\vec{SD} = 2\\vec{SO}$<br>\n          $\\implies \\vec{SA} + \\vec{SB} + \\vec{SC} + \\vec{SD} = 2\\vec{SO} + 2\\vec{SO} = <b>4\\vec{SO}</b>.\n        </div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy trắc nghiệm</h3><p>Khi dùng quy tắc hình hộp, vội vàng viết đường chéo mặt đáy $\\vec{AC}$ thay vì đường chéo không gian $\\vec{AC'}$. Hãy nhớ: hình hộp ra đường chéo không gian xuyên tâm!</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Khẩu quyết vàng: Quy tắc tam giác ngọn nối gốc; Quy tắc hình bình hành ra đường chéo đáy; Quy tắc hình hộp ra đường chéo không gian!</p></div>\n    ",
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
      "title": "CÁC PHÉP TOÁN VÉC TƠ TRONG KHÔNG GIAN",
      "subtitle": "PHẦN 1: QUY TẮC BA ĐIỂM & HÌNH BÌNH HÀNH",
      "startTime": 0.0,
      "endTime": 23.45,
      "duration": 23.45,
      "mascotMode": "pointer",
      "mascotTip": "Quy tắc 3 điểm: AB + BC = AC. Quy tắc hình bình hành: AB + AD = AC!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Quy tắc tam giác & Quy tắc hình bình hành</div>\n    <div style=\"display:flex; flex-wrap:wrap; justify-content:center; gap:16px; margin:12px 0;\">\n      <div style=\"text-align:center; background:#1e293b; padding:10px 14px; border-radius:8px; border:1px solid #334155; font-family:'Times New Roman', serif; font-style:italic;\">\n        <div style=\"color:#38bdf8; font-size:14px; font-weight:bold; margin-bottom:6px; font-style:normal;\">Quy tắc 3 điểm (Tam giác)</div>\n        <svg width=\"190\" height=\"115\" viewBox=\"0 0 190 115\">\n          <defs>\n            <marker id=\"arr1\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/></marker>\n            <marker id=\"arr2\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/></marker>\n          </defs>\n          <line x1=\"25\" y1=\"90\" x2=\"105\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2.2\" marker-end=\"url(#arr1)\" />\n          <line x1=\"110\" y1=\"90\" x2=\"155\" y2=\"28\" stroke=\"#38bdf8\" stroke-width=\"2.2\" marker-end=\"url(#arr1)\" />\n          <line x1=\"25\" y1=\"90\" x2=\"152\" y2=\"30\" stroke=\"#f43f5e\" stroke-width=\"2.4\" stroke-dasharray=\"3\" marker-end=\"url(#arr2)\" />\n          <text x=\"12\" y=\"95\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">A</text>\n          <text x=\"110\" y=\"105\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">B</text>\n          <text x=\"160\" y=\"26\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">C</text>\n        </svg>\n        <div style=\"color:#f8fafc; font-size:13px; margin-top:2px; font-style:normal;\">$\\vec{AB} + \\vec{BC} = \\vec{AC}$</div>\n      </div>\n      <div style=\"text-align:center; background:#1e293b; padding:10px 14px; border-radius:8px; border:1px solid #334155; font-family:'Times New Roman', serif; font-style:italic;\">\n        <div style=\"color:#38bdf8; font-size:14px; font-weight:bold; margin-bottom:6px; font-style:normal;\">Quy tắc Hình bình hành</div>\n        <svg width=\"190\" height=\"115\" viewBox=\"0 0 190 115\">\n          <defs>\n            <marker id=\"arr3\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/></marker>\n            <marker id=\"arr4\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#10b981\"/></marker>\n          </defs>\n          <line x1=\"25\" y1=\"90\" x2=\"105\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arr3)\" />\n          <line x1=\"25\" y1=\"90\" x2=\"68\" y2=\"28\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arr3)\" />\n          <line x1=\"110\" y1=\"90\" x2=\"155\" y2=\"28\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"3\" />\n          <line x1=\"70\" y1=\"28\" x2=\"155\" y2=\"28\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"3\" />\n          <line x1=\"25\" y1=\"90\" x2=\"150\" y2=\"30\" stroke=\"#10b981\" stroke-width=\"2.4\" marker-end=\"url(#arr4)\" />\n          <text x=\"12\" y=\"95\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">A</text>\n          <text x=\"112\" y=\"102\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">B</text>\n          <text x=\"160\" y=\"28\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">C</text>\n          <text x=\"58\" y=\"22\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">D</text>\n        </svg>\n        <div style=\"color:#f8fafc; font-size:13px; margin-top:2px; font-style:normal;\">$\\vec{AB} + \\vec{AD} = \\vec{AC}$</div>\n      </div>\n    </div>\n    <div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Quy tắc 3 điểm (Tam giác):</b> $\\vec{AB} + \\vec{BC} = \\vec{AC}$<br>• <b>Quy tắc hình bình hành:</b> $\\vec{AB} + \\vec{AD} = \\vec{AC}$<br>• <b>Hiệu hai véc tơ:</b> $\\vec{AB} - \\vec{AC} = \\vec{CB}$</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "QUY TẮC HÌNH HỘP TRONG KHÔNG GIAN",
      "subtitle": "PHẦN 2: TỔNG BA CẠNH BẰNG ĐƯỜNG CHÉO LỚN",
      "startTime": 23.45,
      "endTime": 54.34,
      "duration": 30.89,
      "mascotMode": "pointer",
      "mascotTip": "AB + AD + AA' = AC' (đường chéo không gian lớn xuất phát từ A)!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Quy tắc hình hộp trong không gian</div>\n    <div style=\"text-align:center; margin:14px 0;\">\n      <svg width=\"270\" height=\"190\" viewBox=\"0 0 270 190\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155; font-family:'Times New Roman', serif; font-style:italic;\">\n        <defs>\n          <marker id=\"arr_box_blue\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/></marker>\n          <marker id=\"arr_box_diag\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f59e0b\"/></marker>\n        </defs>\n        <line x1=\"45\" y1=\"125\" x2=\"105\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" />\n        <line x1=\"105\" y1=\"90\" x2=\"225\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" />\n        <line x1=\"105\" y1=\"90\" x2=\"105\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" />\n        <line x1=\"45\" y1=\"125\" x2=\"100\" y2=\"93\" stroke=\"#38bdf8\" stroke-width=\"2.2\" stroke-dasharray=\"4\" marker-end=\"url(#arr_box_blue)\" />\n        <line x1=\"45\" y1=\"125\" x2=\"165\" y2=\"125\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"165\" y1=\"125\" x2=\"225\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"45\" y1=\"125\" x2=\"45\" y2=\"65\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"165\" y1=\"125\" x2=\"165\" y2=\"65\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"225\" y1=\"90\" x2=\"225\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"45\" y1=\"65\" x2=\"165\" y2=\"65\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"165\" y1=\"65\" x2=\"225\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"225\" y1=\"30\" x2=\"105\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"105\" y1=\"30\" x2=\"45\" y2=\"65\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n        <line x1=\"45\" y1=\"125\" x2=\"157\" y2=\"125\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arr_box_blue)\" />\n        <line x1=\"45\" y1=\"125\" x2=\"45\" y2=\"72\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arr_box_blue)\" />\n        <line x1=\"45\" y1=\"125\" x2=\"219\" y2=\"33\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"5,2\" marker-end=\"url(#arr_box_diag)\" />\n        <text x=\"28\" y=\"135\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">A</text>\n        <text x=\"170\" y=\"138\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">B</text>\n        <text x=\"232\" y=\"96\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">C</text>\n        <text x=\"92\" y=\"88\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">D</text>\n        <text x=\"28\" y=\"65\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">A'</text>\n        <text x=\"170\" y=\"62\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">B'</text>\n        <text x=\"232\" y=\"28\" fill=\"#f59e0b\" font-size=\"15\" font-weight=\"bold\">C'</text>\n        <text x=\"94\" y=\"24\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">D'</text>\n      </svg>\n      <div style=\"font-size:14px; color:#fde047; font-weight:bold; margin-top:4px;\">Quy tắc hình hộp: $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$ (Đường chéo lớn)</div>\n    </div>\n    <div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>Cho hình hộp $ABCD.A'B'C'D'$. Tổng ba véc tơ xuất phát từ gốc $A$ theo ba cạnh bằng véc tơ đường chéo lớn:<br>&emsp;$$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$$</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: QUY TẮC HÌNH HỘP TỪ ĐỈNH B",
      "subtitle": "RÚT GỌN TỔNG BA VÉC TƠ CẠNH",
      "startTime": 54.34,
      "endTime": 76.08,
      "duration": 21.74,
      "mascotMode": "pointer",
      "mascotTip": "Ba véc tơ BA + BC + BB' cùng xuất phát từ đỉnh B -> Đường chéo là BD'!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Rút gọn tổng: $\\vec{BA} + \\vec{BC} + \\vec{BB'}$.<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "ĐƯỜNG CHÉO XUẤT PHÁT TỪ ĐỈNH B",
      "startTime": 76.08,
      "endTime": 86.21,
      "duration": 10.13,
      "mascotMode": "pointer",
      "mascotTip": "BA + BC + BB' = BD'!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd1_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 1:</b><br>Áp dụng quy tắc hình hộp xuất phát từ gốc $B$, tổng ba véc tơ theo ba cạnh bằng véc tơ đường chéo lớn:<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$\\vec{BA} + \\vec{BC} + \\vec{BB'} = \\vec{BD'}$</b>.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: VÉC TƠ ĐƯỜNG TRUNG TUYẾN",
      "subtitle": "BIỂU DIỄN QUA HAI VÉC TƠ CẠNH",
      "startTime": 86.21,
      "endTime": 100.15,
      "duration": 13.94,
      "mascotMode": "pointer",
      "mascotTip": "M là trung điểm CD -> AM = 1/2(AC + AD)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Cho tứ diện $ABCD$, $M$ là trung điểm cạnh $CD$. Biểu diễn $\\vec{AM}$ theo hai véc tơ $\\vec{AC}$ và $\\vec{AD}$.<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian làm nháp: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI",
      "subtitle": "QUY TẮC TRUNG ĐIỂM",
      "startTime": 100.15,
      "endTime": 114.53,
      "duration": 14.38,
      "mascotMode": "pointer",
      "mascotTip": "AM = 1/2 (AC + AD)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd2_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 2:</b><br>Tam giác $ACD$ có $AM$ là trung tuyến, áp dụng quy tắc trung điểm ta có:<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$\\vec{AM} = \\frac{1}{2}(\\vec{AC} + \\vec{AD})$</b>.</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: TỔNG VÉC TƠ TỪ ĐỈNH CHÓP",
      "subtitle": "ĐÁY HÌNH BÌNH HÀNH TÂM O",
      "startTime": 114.53,
      "endTime": 129.17,
      "duration": 14.64,
      "mascotMode": "pointer",
      "mascotTip": "Gom cặp đối diện: SA + SC = 2SO; SB + SD = 2SO -> Tổng = 4SO!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Rút gọn tổng bốn véc tơ: $\\vec{SA} + \\vec{SB} + \\vec{SC} + \\vec{SD}$.<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI",
      "subtitle": "SỬ DỤNG TÂM ĐỐI XỨNG O",
      "startTime": 129.17,
      "endTime": 143.3,
      "duration": 14.13,
      "mascotMode": "cheer",
      "mascotTip": "SA + SB + SC + SD = 4 SO!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd3_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 3:</b><br>Vì $O$ là tâm hình bình hành nên:<br>• $\\vec{SA} + \\vec{SC} = 2\\vec{SO}$<br>• $\\vec{SB} + \\vec{SD} = 2\\vec{SO}$<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> Tổng bốn véc tơ bằng <b>$4\\vec{SO}$</b>.</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY TRẮC NGHIỆM: ĐƯỜNG CHÉO HÌNH HỘP",
      "subtitle": "PHẦN 4: NHẦM LẪN ĐỈNH ĐỐI DIỆN",
      "startTime": 143.3,
      "endTime": 154.49,
      "duration": 11.19,
      "mascotMode": "magnifier",
      "mascotTip": "Quy tắc hình hộp ra đường chéo không gian AC', không phải đường chéo mặt đáy AC!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi quy tắc hình hộp:</span><br>Khi dùng quy tắc hình hộp, vội vàng viết đường chéo mặt đáy $\\vec{AC}$ thay vì đường chéo khối hộp $\\vec{AC'}$. Hãy nhớ: hình hộp ra đường chéo không gian xuyên tâm!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: KHẨU QUYẾT QUY TẮC HÌNH HỘP",
      "startTime": 154.49,
      "endTime": 166.99,
      "duration": 12.5,
      "mascotMode": "cheer",
      "mascotTip": "Quy tắc tam giác ngọn nối gốc; Quy tắc HBH ra đường chéo đáy; Quy tắc hình hộp ra đường chéo không gian!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Khẩu quyết vàng Thầy Cú:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">• <b>Quy tắc tam giác:</b> Ngọn nối tiếp gốc ($\\vec{AB} + \\vec{BC} = \\vec{AC}$).<br>• <b>Quy tắc hình bình hành:</b> Ra đường chéo đáy ($\\vec{AB} + \\vec{AD} = \\vec{AC}$).<br>• <b>Quy tắc hình hộp:</b> Ra đường chéo không gian ($\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$).</div>"
    }
  ]
},
  bai6_muc3: {
  "lessonId": "bai6",
  "lessonTitle": "Bài 6: Véc tơ trong không gian",
  "sectionId": "bai6_muc3",
  "sectionTitle": "Mục 3: Tích vô hướng của hai véc tơ",
  "audio": "/audio/bai6_muc3.mp3",
  "audioSrc": "./audio/bai6_muc3.mp3",
  "audio_src": "./audio/bai6_muc3.mp3",
  "timestamp_src": "timestamps/bai6_muc3.json",
  "totalDuration": 166.01,
  "duration": 166.01,
  "title": "Mục 3: Tích vô hướng của hai véc tơ trong không gian & Điều kiện vuông góc",
  "owl_tip": "u . v = |u| . |v| . cos(u, v). Hai véc tơ vuông góc khi và chỉ khi tích vô hướng bằng 0!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 27.72,
      "id": "part2"
    },
    {
      "time": 44.47,
      "id": "part3"
    },
    {
      "time": 48.34,
      "id": "vd1_q"
    },
    {
      "time": 65.23,
      "id": "vd1_a"
    },
    {
      "time": 79.49,
      "id": "vd2_q"
    },
    {
      "time": 94.87,
      "id": "vd2_a"
    },
    {
      "time": 108.7,
      "id": "vd3_q"
    },
    {
      "time": 125.06,
      "id": "vd3_a"
    },
    {
      "time": 138.96,
      "id": "part4"
    },
    {
      "time": 154.39,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\"><h3>1. Góc giữa hai véc tơ trong không gian</h3>\n        \n    <div style=\"display:flex; flex-wrap:wrap; justify-content:center; gap:16px; margin:12px 0;\">\n      <div style=\"text-align:center; background:#1e293b; padding:10px 14px; border-radius:8px; border:1px solid #334155; font-family:'Times New Roman', serif; font-style:italic;\">\n        <div style=\"color:#38bdf8; font-size:14px; font-weight:bold; margin-bottom:6px; font-style:normal;\">Góc giữa hai véc tơ $\\vec{u}$ và $\\vec{v}$</div>\n        <svg width=\"190\" height=\"115\" viewBox=\"0 0 190 115\">\n          <defs>\n            <marker id=\"arr_g1\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/></marker>\n            <marker id=\"arr_g2\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#a855f7\"/></marker>\n          </defs>\n          <line x1=\"30\" y1=\"90\" x2=\"160\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2.4\" marker-end=\"url(#arr_g1)\" />\n          <line x1=\"30\" y1=\"90\" x2=\"125\" y2=\"25\" stroke=\"#a855f7\" stroke-width=\"2.4\" marker-end=\"url(#arr_g2)\" />\n          <path d=\"M 65 90 A 35 35 0 0 0 54 68\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"1.8\" />\n          <text x=\"68\" y=\"78\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\">\\alpha</text>\n          <text x=\"14\" y=\"95\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">O</text>\n          <text x=\"165\" y=\"95\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">A (\\vec{u})</text>\n          <text x=\"128\" y=\"22\" fill=\"#a855f7\" font-size=\"14\" font-weight=\"bold\">B (\\vec{v})</text>\n        </svg>\n        <div style=\"color:#f8fafc; font-size:13px; margin-top:2px; font-style:normal;\">$0^\\circ \\le (\\vec{u}, \\vec{v}) \\le 180^\\circ$</div>\n      </div>\n      <div style=\"text-align:center; background:#1e293b; padding:10px 14px; border-radius:8px; border:1px solid #334155; font-family:'Times New Roman', serif; font-style:italic;\">\n        <div style=\"color:#10b981; font-size:14px; font-weight:bold; margin-bottom:6px; font-style:normal;\">Hai véc tơ vuông góc ($90^\\circ$)</div>\n        <svg width=\"190\" height=\"115\" viewBox=\"0 0 190 115\">\n          <defs>\n            <marker id=\"arr_v1\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#10b981\"/></marker>\n            <marker id=\"arr_v2\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#10b981\"/></marker>\n          </defs>\n          <line x1=\"35\" y1=\"90\" x2=\"155\" y2=\"90\" stroke=\"#10b981\" stroke-width=\"2.4\" marker-end=\"url(#arr_v1)\" />\n          <line x1=\"35\" y1=\"90\" x2=\"35\" y2=\"20\" stroke=\"#10b981\" stroke-width=\"2.4\" marker-end=\"url(#arr_v2)\" />\n          <rect x=\"35\" y=\"74\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"1.5\" />\n          <text x=\"18\" y=\"95\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">O</text>\n          <text x=\"160\" y=\"95\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">\\vec{u}</text>\n          <text x=\"30\" y=\"14\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">\\vec{v}</text>\n        </svg>\n        <div style=\"color:#34d399; font-size:13px; margin-top:2px; font-style:normal; font-weight:bold;\">$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$</div>\n      </div>\n    </div>\n    \n        <p>• Cho hai véc tơ $\\vec{u}, \\vec{v} \\neq \\vec{0}$. Lấy điểm $O$, vẽ $\\vec{OA} = \\vec{u}, \\vec{OB} = \\vec{v}$. Khi đó $\\widehat{AOB} = (\\vec{u}, \\vec{v})$.<br>\n        • Quy ước: $0^\\circ \\le (\\vec{u}, \\vec{v}) \\le 180^\\circ$.<br>\n        • $\\vec{u} \\perp \\vec{v} \\iff (\\vec{u}, \\vec{v}) = 90^\\circ$.</p>\n      </div>\n      <div id=\"part2\"><h3>2. Định nghĩa tích vô hướng</h3>\n        <p>• <b>Công thức:</b> $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$.<br>\n        • <b>Điều kiện vuông góc:</b> $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$.<br>\n        • <b>Công thức cosin góc:</b> $\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|}$.<br>\n        • <b>Bình phương vô hướng:</b> $\\vec{u}^2 = |\\vec{u}|^2$.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ tính toán</h3></div>\n      <div class=\"slide\" style=\"border:1px solid #3b82f6; border-radius:8px; padding:12px; margin:8px 0; background:#0f172a;\">\n        <div id=\"vd1_q\"><b>Ví dụ 1:</b> Cho tứ diện đều $ABCD$ có các cạnh bằng $a$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          Tam giác $ABC$ đều cạnh $a$ nên góc giữa $\\vec{AB}$ và $\\vec{AC}$ là $60^\\circ$.<br>\n          $$\\vec{AB} \\cdot \\vec{AC} = |\\vec{AB}| \\cdot |\\vec{AC}| \\cdot \\cos 60^\\circ = a \\cdot a \\cdot \\frac{1}{2} = \\frac{a^2}{2}$$<br>\n          <b style=\"color:#10b981;\">Kết quả:</b> $\\vec{AB} \\cdot \\vec{AC} = \\mathbf{\\frac{a^2}{2}}$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #3b82f6; border-radius:8px; padding:12px; margin:8px 0; background:#0f172a;\">\n        <div id=\"vd2_q\"><b>Ví dụ 2:</b> Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{AD'}$.<br><i>(Thời gian suy nghĩ: 20s)</i></div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          Cạnh $AB \\perp (ADD'A') \\implies AB \\perp AD'$.<br>\n          Góc giữa hai véc tơ bằng $90^\\circ \\implies$ <b>$\\vec{AB} \\cdot \\vec{AD'} = 0$</b>.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"border:1px solid #3b82f6; border-radius:8px; padding:12px; margin:8px 0; background:#0f172a;\">\n        <div id=\"vd3_q\"><b>Ví dụ 3:</b> Cho $|\\vec{u}| = 2, |\\vec{v}| = 3$, tích vô hướng $\\vec{u} \\cdot \\vec{v} = -3$. Tính góc $(\\vec{u}, \\vec{v})$.<br><i>(Thời gian suy nghĩ: 15s)</i></div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          $$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\frac{-3}{2 \\cdot 3} = -\\frac{1}{2}$$<br>\n          $\\implies$ <b>$(\\vec{u}, \\vec{v}) = 120^\\circ$</b>.\n        </div>\n      </div>\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Nhầm góc giữa hai véc tơ với góc giữa hai đường thẳng. Góc giữa hai đường thẳng luôn nhọn hoặc vuông ($\\le 90^\\circ$), còn góc giữa hai véc tơ có thể là góc tù (lên tới $180^\\circ$).</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Muốn chứng minh hai đường thẳng vuông góc trong không gian, hãy quy về tính tích vô hướng của hai véc tơ chỉ phương bằng không!</p></div>\n    ",
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
      "subtitle": "PHẦN 1: GÓC GIỮA HAI VÉC TƠ TRONG KHÔNG GIAN",
      "startTime": 0.0,
      "endTime": 27.72,
      "duration": 27.72,
      "mascotMode": "pointer",
      "mascotTip": "Góc giữa 2 véc tơ có số đo từ 0 độ đến 180 độ. Hai véc tơ vuông góc khi góc bằng 90 độ!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Góc giữa hai véc tơ trong không gian</div>\n    <div style=\"display:flex; flex-wrap:wrap; justify-content:center; gap:16px; margin:12px 0;\">\n      <div style=\"text-align:center; background:#1e293b; padding:10px 14px; border-radius:8px; border:1px solid #334155; font-family:'Times New Roman', serif; font-style:italic;\">\n        <div style=\"color:#38bdf8; font-size:14px; font-weight:bold; margin-bottom:6px; font-style:normal;\">Góc giữa hai véc tơ $\\vec{u}$ và $\\vec{v}$</div>\n        <svg width=\"190\" height=\"115\" viewBox=\"0 0 190 115\">\n          <defs>\n            <marker id=\"arr_g1\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/></marker>\n            <marker id=\"arr_g2\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#a855f7\"/></marker>\n          </defs>\n          <line x1=\"30\" y1=\"90\" x2=\"160\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2.4\" marker-end=\"url(#arr_g1)\" />\n          <line x1=\"30\" y1=\"90\" x2=\"125\" y2=\"25\" stroke=\"#a855f7\" stroke-width=\"2.4\" marker-end=\"url(#arr_g2)\" />\n          <path d=\"M 65 90 A 35 35 0 0 0 54 68\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"1.8\" />\n          <text x=\"68\" y=\"78\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\">\\alpha</text>\n          <text x=\"14\" y=\"95\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">O</text>\n          <text x=\"165\" y=\"95\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">A (\\vec{u})</text>\n          <text x=\"128\" y=\"22\" fill=\"#a855f7\" font-size=\"14\" font-weight=\"bold\">B (\\vec{v})</text>\n        </svg>\n        <div style=\"color:#f8fafc; font-size:13px; margin-top:2px; font-style:normal;\">$0^\\circ \\le (\\vec{u}, \\vec{v}) \\le 180^\\circ$</div>\n      </div>\n      <div style=\"text-align:center; background:#1e293b; padding:10px 14px; border-radius:8px; border:1px solid #334155; font-family:'Times New Roman', serif; font-style:italic;\">\n        <div style=\"color:#10b981; font-size:14px; font-weight:bold; margin-bottom:6px; font-style:normal;\">Hai véc tơ vuông góc ($90^\\circ$)</div>\n        <svg width=\"190\" height=\"115\" viewBox=\"0 0 190 115\">\n          <defs>\n            <marker id=\"arr_v1\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#10b981\"/></marker>\n            <marker id=\"arr_v2\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#10b981\"/></marker>\n          </defs>\n          <line x1=\"35\" y1=\"90\" x2=\"155\" y2=\"90\" stroke=\"#10b981\" stroke-width=\"2.4\" marker-end=\"url(#arr_v1)\" />\n          <line x1=\"35\" y1=\"90\" x2=\"35\" y2=\"20\" stroke=\"#10b981\" stroke-width=\"2.4\" marker-end=\"url(#arr_v2)\" />\n          <rect x=\"35\" y=\"74\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"1.5\" />\n          <text x=\"18\" y=\"95\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">O</text>\n          <text x=\"160\" y=\"95\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">\\vec{u}</text>\n          <text x=\"30\" y=\"14\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">\\vec{v}</text>\n        </svg>\n        <div style=\"color:#34d399; font-size:13px; margin-top:2px; font-style:normal; font-weight:bold;\">$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$</div>\n      </div>\n    </div>\n    <div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• Lấy điểm $O$, dựng $\\vec{OA} = \\vec{u}, \\vec{OB} = \\vec{v}$. Khi đó $\\widehat{AOB} = (\\vec{u}, \\vec{v})$.<br>• $0^\\circ \\le (\\vec{u}, \\vec{v}) \\le 180^\\circ$.<br>• $\\vec{u} \\perp \\vec{v} \\iff (\\vec{u}, \\vec{v}) = 90^\\circ$.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "CÔNG THỨC TÍCH VÔ HƯỚNG",
      "subtitle": "PHẦN 2: ĐIỀU KIỆN VUÔNG GÓC & TÍNH GÓC",
      "startTime": 27.72,
      "endTime": 48.34,
      "duration": 20.62,
      "mascotMode": "pointer",
      "mascotTip": "u . v = |u| . |v| . cos(u, v). Hai véc tơ vuông góc <=> u . v = 0!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Tích vô hướng của hai véc tơ</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Công thức:</b> $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$.<br>• <b>Điều kiện vuông góc:</b> $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$.<br>• <b>Công thức cosin góc:</b> $\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|}$.<br>• Bình phương vô hướng: $\\vec{u}^2 = |\\vec{u}|^2$.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: TỨ DIỆN ĐỀU CẠNH a",
      "subtitle": "TÍNH TÍCH VÔ HƯỚNG HAI CẠNH CHUNG GỐC",
      "startTime": 48.34,
      "endTime": 65.23,
      "duration": 16.89,
      "mascotMode": "pointer",
      "mascotTip": "Tam giác ABC đều -> Góc A = 60 độ. AB . AC = a . a . cos(60) = a²/2!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Cho tứ diện đều $ABCD$ có các cạnh bằng $a$. Tính tích vô hướng của $\\vec{AB}$ và $\\vec{AC}$.<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian làm nháp: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "GÓC 60 ĐỘ TRONG TAM GIÁC ĐỀU",
      "startTime": 65.23,
      "endTime": 79.49,
      "duration": 14.26,
      "mascotMode": "pointer",
      "mascotTip": "AB . AC = a² / 2!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd1_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 1:</b><br>Tam giác $ABC$ đều nên góc giữa $\\vec{AB}$ và $\\vec{AC}$ là $60^\\circ$.<br>$$\\vec{AB} \\cdot \\vec{AC} = a \\cdot a \\cdot \\cos 60^\\circ = a^2 \\cdot \\frac{1}{2} = \\frac{a^2}{2}$$<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$\\vec{AB} \\cdot \\vec{AC} = \\frac{a^2}{2}$</b>.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: HÌNH LẬP PHƯƠNG CẠNH a",
      "subtitle": "TÍCH VÔ HƯỚNG VUÔNG GÓC",
      "startTime": 79.49,
      "endTime": 94.87,
      "duration": 15.38,
      "mascotMode": "pointer",
      "mascotTip": "AB vuông góc với (ADD'A') -> AB vuông góc với AD' -> Tích vô hướng = 0!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{AD'}$.<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI",
      "subtitle": "CHỨNG MINH VUÔNG GÓC",
      "startTime": 94.87,
      "endTime": 108.7,
      "duration": 13.83,
      "mascotMode": "pointer",
      "mascotTip": "Cạnh AB vuông góc AD' -> góc = 90 độ -> tích vô hướng bằng 0!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd2_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 2:</b><br>Cạnh $AB \\perp (ADD'A') \\implies AB \\perp AD'$.<br>Góc giữa hai véc tơ bằng $90^\\circ$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$\\vec{AB} \\cdot \\vec{AD'} = 0$</b>.</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: TÌM GÓC GIỮA HAI VÉC TƠ",
      "subtitle": "BIẾT ĐỘ DÀI VÀ TÍCH VÔ HƯỚNG",
      "startTime": 108.7,
      "endTime": 125.06,
      "duration": 16.36,
      "mascotMode": "pointer",
      "mascotTip": "cos(u, v) = (u . v) / (|u| . |v|) = -3 / (2 . 3) = -1/2 -> Góc bằng 120 độ!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Cho $|\\vec{u}| = 2, |\\vec{v}| = 3$, tích vô hướng $\\vec{u} \\cdot \\vec{v} = -3$. Tính góc $(\\vec{u}, \\vec{v})$.<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI",
      "subtitle": "GÓC TÙ GIỮA HAI VÉC TƠ",
      "startTime": 125.06,
      "endTime": 138.96,
      "duration": 13.9,
      "mascotMode": "pointer",
      "mascotTip": "cos(u, v) = -1/2 -> (u, v) = 120 độ!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd3_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 3:</b><br>$$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\frac{-3}{2 \\cdot 3} = -\\frac{1}{2}$$<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$(\\vec{u}, \\vec{v}) = 120^\\circ$</b>.</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI: GÓC VÉC TƠ VS GÓC ĐƯỜNG THẲNG",
      "subtitle": "PHẦN 4: GÓC TÙ VÀ GÓC NHỌN",
      "startTime": 138.96,
      "endTime": 154.39,
      "duration": 15.43,
      "mascotMode": "magnifier",
      "mascotTip": "Góc giữa 2 đường thẳng luôn <= 90 độ. Góc giữa 2 véc tơ có thể lên tới 180 độ!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi về góc trong không gian:</span><br>• Góc giữa hai đường thẳng luôn $\\le 90^\\circ$.<br>• Góc giữa hai véc tơ có thể là <b>góc tù</b> ($0^\\circ \\le \\alpha \\le 180^\\circ$). Đừng nhầm lẫn!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: CÔNG CỤ VÀNG CHỨNG MINH VUÔNG GÓC",
      "startTime": 154.39,
      "endTime": 166.01,
      "duration": 11.62,
      "mascotMode": "cheer",
      "mascotTip": "Hai đường thẳng vuông góc khi và chỉ khi tích vô hướng hai véc tơ chỉ phương bằng 0!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Bí kíp vàng chứng minh vuông góc:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">Muốn chứng minh hai đường thẳng vuông góc trong không gian:<br>• Chỉ cần lấy hai véc tơ chỉ phương $\\vec{u}$ và $\\vec{v}$.<br>• Tính tích vô hướng $\\vec{u} \\cdot \\vec{v} = 0$.<br>$\\implies a \\perp b$ nhanh chóng và chính xác tuyệt đối!</div>"
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
