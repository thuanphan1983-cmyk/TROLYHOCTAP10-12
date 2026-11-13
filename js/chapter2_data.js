// Dữ liệu Chương 2: Vectơ trong không gian (KNTT) - Chuẩn hóa 100% mũi tên và hình vẽ
if (typeof window.CHAPTER2_DATA === 'undefined') window.CHAPTER2_DATA = {};

window.CHAPTER2_DATA.bai6_muc1 = {
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
  "content": "\n    <div id=\"part1\">\n      <h3>1. Định nghĩa véc tơ trong không gian</h3>\n      <p>• Véc tơ trong không gian là một đoạn thẳng có hướng (đã xác định rõ điểm đầu và điểm cuối).<br>\n      • Ký hiệu: $\\overrightarrow{a}, \\overrightarrow{b}$ hoặc $\\overrightarrow{AB}$ ($A$ là điểm đầu / gốc, $B$ là điểm cuối / ngọn).<br>\n      • <b>Độ dài của véc tơ:</b> là khoảng cách giữa điểm đầu và điểm cuối, ký hiệu: $|\\overrightarrow{AB}| = AB$.</p>\n    </div>\n    <div id=\"part2\">\n      <h3>2. Véc tơ cùng phương, cùng hướng & Bằng nhau</h3>\n      <p>• Giá của véc tơ là đường thẳng đi qua điểm đầu và điểm cuối của véc tơ đó.<br>\n      • Hai véc tơ <b>cùng phương</b> $\\Leftrightarrow$ Giá của chúng song song hoặc trùng nhau.<br>\n      • Hai véc tơ <b>bằng nhau</b> $\\Leftrightarrow$ Chúng cùng hướng và cùng độ dài: $\\overrightarrow{a} = \\overrightarrow{b}$.<br>\n      • Véc tơ-không $\\overrightarrow{0}$: có điểm đầu trùng điểm cuối, độ dài bằng $0$, cùng phương và cùng hướng với mọi véc tơ.</p>\n    </div>\n    <div id=\"part3\"><h3>3. Các ví dụ rèn luyện</h3></div>\n\n    <!-- Ví dụ 1 -->\n    <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n      <div id=\"vd1_q\">\n        <b style=\"color:#38bdf8;\">Ví dụ 1:</b> Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Tìm véc tơ bằng véc tơ $\\overrightarrow{AB}$ có điểm đầu và điểm cuối là các đỉnh của hình chóp.<br>\n        \n        <div style=\"text-align:center; margin:12px 0;\">\n          <svg width=\"260\" height=\"160\" viewBox=\"0 0 260 160\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"130,15 45,115 155,115\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <polygon points=\"130,15 155,115 215,80\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"45\" y1=\"115\" x2=\"105\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <line x1=\"105\" y1=\"80\" x2=\"215\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <line x1=\"130\" y1=\"15\" x2=\"105\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <line x1=\"45\" y1=\"115\" x2=\"150\" y2=\"115\" stroke=\"#38bdf8\" stroke-width=\"3\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"105\" y1=\"80\" x2=\"210\" y2=\"80\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"3\" marker-end=\"url(#arrR)\"/>\n            <text x=\"127\" y=\"12\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">S</text>\n            <text x=\"28\" y=\"122\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">A</text>\n            <text x=\"160\" y=\"122\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">B</text>\n            <text x=\"220\" y=\"82\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">C</text>\n            <text x=\"90\" y=\"78\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">D</text>\n          </svg>\n        </div>\n\n        <i>(Thời gian suy nghĩ: 20 giây)</i>\n      </div>\n      <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n        <b>Lời giải chi tiết:</b><br>\n        Tứ giác $ABCD$ là hình bình hành nên cạnh $AB \\parallel DC$ và $AB = DC$.<br>\n        Hai véc tơ $\\overrightarrow{AB}$ và $\\overrightarrow{DC}$ có cùng hướng và cùng độ dài: $\\mathbf{\\overrightarrow{AB} = \\overrightarrow{DC}}$.\n      </div>\n    </div>\n\n    <!-- Ví dụ 2 -->\n    <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n      <div id=\"vd2_q\">\n        <b style=\"color:#38bdf8;\">Ví dụ 2:</b> Cho tứ diện đều $ABCD$ có tất cả các cạnh bằng $a$. Tính $|\\overrightarrow{AB}|$ và $|\\overrightarrow{CD}|$.<br>\n        \n        <div style=\"text-align:center; margin:12px 0;\">\n          <svg width=\"240\" height=\"150\" viewBox=\"0 0 240 150\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"120,15 40,115 150,125\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <polygon points=\"120,15 150,125 200,95\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"40\" y1=\"115\" x2=\"200\" y2=\"95\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <line x1=\"120\" y1=\"15\" x2=\"43\" y2=\"110\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"150\" y1=\"125\" x2=\"197\" y2=\"98\" stroke=\"#fbbf24\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <text x=\"120\" y=\"12\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">A</text>\n            <text x=\"24\" y=\"122\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">B</text>\n            <text x=\"145\" y=\"140\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">C</text>\n            <text x=\"206\" y=\"98\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">D</text>\n          </svg>\n        </div>\n\n        <i>(Thời gian suy nghĩ: 15 giây)</i>\n      </div>\n      <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n        <b>Lời giải:</b><br>\n        Vì $ABCD$ là tứ diện đều cạnh $a$ nên tất cả sáu cạnh đều có độ dài bằng $a$.<br>\n        Suy ra: $\\mathbf{|\\overrightarrow{AB}| = AB = a}$ và $\\mathbf{|\\overrightarrow{CD}| = CD = a}$.\n      </div>\n    </div>\n\n    <!-- Ví dụ 3 -->\n    <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n      <div id=\"vd3_q\">\n        <b style=\"color:#38bdf8;\">Ví dụ 3:</b> Cho lăng trụ tam giác $ABC.A'B'C'$. Hai véc tơ $\\overrightarrow{AA'}$ và $\\overrightarrow{CC'}$ có bằng nhau không?<br>\n        \n        <div style=\"text-align:center; margin:12px 0;\">\n          <svg width=\"220\" height=\"150\" viewBox=\"0 0 220 150\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"50,25 120,15 160,35\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <polygon points=\"50,110 120,100 160,120\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"50\" y1=\"25\" x2=\"50\" y2=\"105\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"15\" x2=\"120\" y2=\"95\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"160\" y1=\"35\" x2=\"160\" y2=\"115\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <text x=\"35\" y=\"25\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"120\" y=\"10\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n            <text x=\"168\" y=\"35\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">C</text>\n            <text x=\"35\" y=\"120\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A'</text>\n            <text x=\"120\" y=\"115\" fill=\"#f8fafc\" font-size=\"12\">B'</text>\n            <text x=\"168\" y=\"125\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">C'</text>\n          </svg>\n        </div>\n\n        <i>(Thời gian suy nghĩ: 15 giây)</i>\n      </div>\n      <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n        <b>Lời giải:</b><br>\n        Các cạnh bên của lăng trụ song song và bằng nhau ($AA' \\parallel CC'$ và $AA' = CC'$).<br>\n        Do đó hai véc tơ cùng hướng và cùng độ dài: $\\mathbf{\\overrightarrow{AA'} = \\overrightarrow{CC'}}$.\n      </div>\n    </div>\n\n    <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Nhầm lẫn giữa $\\overrightarrow{AB}$ và $\\overrightarrow{BA}$. Chúng có cùng độ dài nhưng ngược hướng nên là hai véc tơ đối nhau: $\\overrightarrow{AB} = -\\overrightarrow{BA}$.</p></div>\n    <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Trong hình bình hành $ABCD$, đọc đúng thứ tự vòng: $\\overrightarrow{AB} = \\overrightarrow{DC}$, không viết ngược thành $\\overrightarrow{CD}$!</p></div>\n",
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
      "mascotTip": "Véc tơ là đoạn thẳng có hướng: điểm đầu (gốc) và điểm cuối (ngọn). Độ dài $|\\overrightarrow{AB}| = AB$!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Định nghĩa véc tơ trong không gian</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• Véc tơ trong không gian là một đoạn thẳng có hướng.<br>• Ký hiệu: $\\overrightarrow{a}, \\overrightarrow{b}$ hoặc $\\overrightarrow{AB}$ ($A$ là điểm đầu, $B$ là điểm cuối).<br>• <b>Độ dài của véc tơ:</b> Khoảng cách giữa điểm đầu và điểm cuối: $|\\overrightarrow{AB}| = AB$.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "CÙNG PHƯƠNG & BẰNG NHAU",
      "subtitle": "PHẦN 2: ĐIỀU KIỆN HAI VÉC TƠ BẰNG NHAU",
      "startTime": 46.44,
      "endTime": 79.06,
      "duration": 32.62,
      "mascotMode": "pointer",
      "mascotTip": "Hai véc tơ bằng nhau khi và chỉ khi: Cùng hướng VÀ Cùng độ dài: $\\overrightarrow{a} = \\overrightarrow{b}$!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Cùng phương, cùng hướng và bằng nhau</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Cùng phương:</b> Giá của hai véc tơ song song hoặc trùng nhau.<br>• <b>Hai véc tơ bằng nhau:</b> $\\overrightarrow{a} = \\overrightarrow{b} \\iff$ Cùng hướng và cùng độ dài.<br>• <b>Véc tơ-không:</b> $\\overrightarrow{0}$ có điểm đầu và cuối trùng nhau, độ dài bằng $0$, cùng phương và cùng hướng với mọi véc tơ.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: CHÓP ĐÁY HÌNH BÌNH HÀNH",
      "subtitle": "TÌM VÉC TƠ BẰNG NHAU",
      "startTime": 79.06,
      "endTime": 100.25,
      "duration": 21.19,
      "mascotMode": "pointer",
      "mascotTip": "Quan sát hình vẽ: Đáy là hình bình hành $ABCD \\implies \\overrightarrow{AB} = \\overrightarrow{DC}$!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Tìm véc tơ bằng $\\overrightarrow{AB}$ có các đầu mút là đỉnh của hình chóp.\n        <div style=\"text-align:center; margin:12px 0;\">\n          <svg width=\"260\" height=\"160\" viewBox=\"0 0 260 160\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"130,15 45,115 155,115\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <polygon points=\"130,15 155,115 215,80\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"45\" y1=\"115\" x2=\"105\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <line x1=\"105\" y1=\"80\" x2=\"215\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <line x1=\"130\" y1=\"15\" x2=\"105\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <line x1=\"45\" y1=\"115\" x2=\"150\" y2=\"115\" stroke=\"#38bdf8\" stroke-width=\"3\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"105\" y1=\"80\" x2=\"210\" y2=\"80\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"3\" marker-end=\"url(#arrR)\"/>\n            <text x=\"127\" y=\"12\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">S</text>\n            <text x=\"28\" y=\"122\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">A</text>\n            <text x=\"160\" y=\"122\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">B</text>\n            <text x=\"220\" y=\"82\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">C</text>\n            <text x=\"90\" y=\"78\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">D</text>\n          </svg>\n        </div>\n<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "CHÚ Ý THỨ TỰ ĐỈNH HÌNH BÌNH HÀNH",
      "startTime": 100.25,
      "endTime": 115.75,
      "duration": 15.5,
      "mascotMode": "pointer",
      "mascotTip": "$\\overrightarrow{AB}$ và $\\overrightarrow{DC}$ cùng hướng và cùng độ dài $\\implies \\overrightarrow{AB} = \\overrightarrow{DC}$!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd1_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải chi tiết Ví dụ 1:</b><br>• Do tứ giác $ABCD$ là hình bình hành nên cạnh $AB \\parallel DC$ và $AB = DC$.<br>• Hướng đi từ $A \\to B$ cùng hướng với hướng đi từ $D \\to C$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$\\overrightarrow{AB} = \\overrightarrow{DC}$</b>.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: ĐỘ DÀI CẠNH TỨ DIỆN ĐỀU",
      "subtitle": "TỨ DIỆN ĐỀU CẠNH a",
      "startTime": 115.75,
      "endTime": 127.56,
      "duration": 11.81,
      "mascotMode": "pointer",
      "mascotTip": "Tất cả sáu cạnh tứ diện đều bằng nhau và bằng $a$!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Cho tứ diện đều $ABCD$ cạnh $a$. Tính độ dài của $\\overrightarrow{AB}$ và $\\overrightarrow{CD}$.\n        <div style=\"text-align:center; margin:12px 0;\">\n          <svg width=\"240\" height=\"150\" viewBox=\"0 0 240 150\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"120,15 40,115 150,125\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <polygon points=\"120,15 150,125 200,95\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"40\" y1=\"115\" x2=\"200\" y2=\"95\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <line x1=\"120\" y1=\"15\" x2=\"43\" y2=\"110\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"150\" y1=\"125\" x2=\"197\" y2=\"98\" stroke=\"#fbbf24\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <text x=\"120\" y=\"12\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">A</text>\n            <text x=\"24\" y=\"122\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">B</text>\n            <text x=\"145\" y=\"140\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">C</text>\n            <text x=\"206\" y=\"98\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">D</text>\n          </svg>\n        </div>\n<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian nhẩm nhanh: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI",
      "subtitle": "ĐỘ DÀI VÉC TƠ BẰNG ĐỘ DÀI ĐOẠN THẲNG",
      "startTime": 127.56,
      "endTime": 137.83,
      "duration": 10.27,
      "mascotMode": "cheer",
      "mascotTip": "$|\\overrightarrow{AB}| = a, |\\overrightarrow{CD}| = a$!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd2_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 2:</b><br>Tứ diện đều có tất cả sáu cạnh đều bằng $a$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$|\\overrightarrow{AB}| = a$</b> và <b>$|\\overrightarrow{CD}| = a$</b>.</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: CẠNH BÊN LĂNG TRỤ TAM GIÁC",
      "subtitle": "SO SÁNH HAI VÉC TƠ CẠNH BÊN",
      "startTime": 137.83,
      "endTime": 154.7,
      "duration": 16.87,
      "mascotMode": "pointer",
      "mascotTip": "Cạnh bên lăng trụ song song và bằng nhau $\\implies \\overrightarrow{AA'} = \\overrightarrow{CC'}$!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Cho lăng trụ tam giác $ABC.A'B'C'$. Hỏi $\\overrightarrow{AA'}$ và $\\overrightarrow{CC'}$ có bằng nhau không?\n        <div style=\"text-align:center; margin:12px 0;\">\n          <svg width=\"220\" height=\"150\" viewBox=\"0 0 220 150\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"50,25 120,15 160,35\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <polygon points=\"50,110 120,100 160,120\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"50\" y1=\"25\" x2=\"50\" y2=\"105\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"15\" x2=\"120\" y2=\"95\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"160\" y1=\"35\" x2=\"160\" y2=\"115\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <text x=\"35\" y=\"25\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"120\" y=\"10\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n            <text x=\"168\" y=\"35\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">C</text>\n            <text x=\"35\" y=\"120\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A'</text>\n            <text x=\"120\" y=\"115\" fill=\"#f8fafc\" font-size=\"12\">B'</text>\n            <text x=\"168\" y=\"125\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">C'</text>\n          </svg>\n        </div>\n<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI",
      "subtitle": "CẠNH BÊN SONG SONG & CÙNG CHIỀU",
      "startTime": 154.7,
      "endTime": 165.17,
      "duration": 10.47,
      "mascotMode": "pointer",
      "mascotTip": "$\\overrightarrow{AA'}$ song song và bằng $\\overrightarrow{CC'}$, cùng chiều từ trên xuống $\\implies \\overrightarrow{AA'} = \\overrightarrow{CC'}$!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd3_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 3:</b><br>Các cạnh bên lăng trụ song song và bằng nhau, hướng từ trên xuống dưới cùng chiều.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$\\overrightarrow{AA'} = \\overrightarrow{CC'}$</b>.</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI: ĐẢO CHIỀU ĐIỂM ĐẦU & CUỐI",
      "subtitle": "PHẦN 4: VÉC TƠ ĐỐI NHAU",
      "startTime": 165.17,
      "endTime": 177.05,
      "duration": 11.88,
      "mascotMode": "magnifier",
      "mascotTip": "$\\overrightarrow{AB}$ và $\\overrightarrow{BA}$ có cùng độ dài nhưng ngược hướng $\\implies \\overrightarrow{AB} = -\\overrightarrow{BA}$, KHÔNG bằng nhau!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi khái niệm véc tơ:</span><br>Nhầm lẫn giữa $\\overrightarrow{AB}$ và $\\overrightarrow{BA}$. Hai véc tơ này ngược hướng nên <b>$\\overrightarrow{AB} = -\\overrightarrow{BA}$</b>, tuyệt đối không được viết $\\overrightarrow{AB} = \\overrightarrow{BA}$!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: THỨ TỰ ĐỈNH TRONG HÌNH BÌNH HÀNH",
      "startTime": 177.05,
      "endTime": 190.44,
      "duration": 13.39,
      "mascotMode": "cheer",
      "mascotTip": "Trong hình bình hành $ABCD$: $\\overrightarrow{AB} = \\overrightarrow{DC}, \\overrightarrow{AD} = \\overrightarrow{BC}$. Tuyệt đối không nhầm $\\overrightarrow{AB} = \\overrightarrow{CD}$!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Bí kíp nhớ nhanh véc tơ bằng nhau:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">Luôn nhớ thứ tự các đỉnh:<br>Trong hình bình hành $ABCD$: <b>$\\overrightarrow{AB} = \\overrightarrow{DC}$</b> (điểm $D$ đứng trước $C$!), không được viết ngược thành $\\overrightarrow{CD}$!</div>"
    }
  ]
};

window.CHAPTER2_DATA.bai6_muc2 = {
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
  "owl_tip": "Quy tắc hình hộp: Ba cạnh cùng đỉnh cộng lại ra đường chéo không gian xuyên tâm: $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$!",
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
  "content": "\n    <div id=\"part1\">\n      <h3>1. Quy tắc tam giác & Quy tắc hình bình hành</h3>\n      \n      <div style=\"display:flex; flex-wrap:wrap; justify-content:space-around; margin:12px 0; gap:12px;\">\n        <div style=\"text-align:center; background:#1e293b; padding:10px; border-radius:8px; min-width:210px; border:1px solid #334155;\">\n          <b style=\"color:#38bdf8; font-size:13px;\">Quy tắc tam giác (3 điểm)</b><br>\n          <svg width=\"200\" height=\"110\" viewBox=\"0 0 200 110\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <line x1=\"25\" y1=\"85\" x2=\"115\" y2=\"85\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"85\" x2=\"160\" y2=\"25\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"25\" y1=\"85\" x2=\"157\" y2=\"28\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"3\" marker-end=\"url(#arrR)\"/>\n            <text x=\"12\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"120\" y=\"100\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">B</text>\n            <text x=\"165\" y=\"25\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">C</text>\n          </svg>\n          <div style=\"color:#f8fafc; font-size:13px; font-weight:bold; margin-top:4px;\">$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$</div>\n        </div>\n        <div style=\"text-align:center; background:#1e293b; padding:10px; border-radius:8px; min-width:210px; border:1px solid #334155;\">\n          <b style=\"color:#38bdf8; font-size:13px;\">Quy tắc Hình bình hành</b><br>\n          <svg width=\"200\" height=\"110\" viewBox=\"0 0 200 110\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <line x1=\"25\" y1=\"85\" x2=\"115\" y2=\"85\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"25\" y1=\"85\" x2=\"68\" y2=\"25\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"85\" x2=\"165\" y2=\"25\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"70\" y1=\"25\" x2=\"165\" y2=\"25\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"25\" y1=\"85\" x2=\"160\" y2=\"28\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <text x=\"12\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"122\" y=\"95\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">B</text>\n            <text x=\"170\" y=\"25\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">C</text>\n            <text x=\"60\" y=\"20\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">D</text>\n          </svg>\n          <div style=\"color:#f8fafc; font-size:13px; font-weight:bold; margin-top:4px;\">$\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$</div>\n        </div>\n      </div>\n\n    </div>\n    <div id=\"part2\">\n      <h3>2. Quy tắc hình hộp trong không gian</h3>\n      <p>Cho hình hộp $ABCD.A'B'C'D'$. Tổng 3 véc tơ xuất phát từ một đỉnh bằng véc tơ đường chéo không gian:</p>\n      \n      <div style=\"text-align:center; margin:12px auto; background:#1e293b; padding:12px; border-radius:8px; max-width:340px; border:1px solid #334155;\">\n        <svg width=\"240\" height=\"150\" viewBox=\"0 0 240 150\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n          <polygon points=\"50,25 140,25 185,60 95,60\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <polygon points=\"50,85 140,85 185,120 95,120\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"50\" y1=\"25\" x2=\"50\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"140\" y1=\"25\" x2=\"140\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"185\" y1=\"60\" x2=\"185\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"95\" y1=\"60\" x2=\"95\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"50\" y1=\"85\" x2=\"135\" y2=\"85\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"50\" y1=\"85\" x2=\"92\" y2=\"118\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"50\" y1=\"85\" x2=\"50\" y2=\"30\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"50\" y1=\"85\" x2=\"182\" y2=\"62\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"3\" marker-end=\"url(#arrR)\"/>\n          <text x=\"32\" y=\"90\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">A</text>\n          <text x=\"145\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n          <text x=\"96\" y=\"135\" fill=\"#f8fafc\" font-size=\"12\">D</text>\n          <text x=\"32\" y=\"25\" fill=\"#f8fafc\" font-size=\"12\">A'</text>\n          <text x=\"190\" y=\"60\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">C'</text>\n        </svg>\n        <div style=\"color:#f43f5e; font-size:14px; font-weight:bold; margin-top:6px;\">\n          $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$\n        </div>\n      </div>\n\n    </div>\n    <div id=\"part3\"><h3>3. Các ví dụ áp dụng</h3></div>\n\n    <!-- Ví dụ 1 -->\n    <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n      <div id=\"vd1_q\">\n        <b style=\"color:#38bdf8;\">Ví dụ 1:</b> Cho hình hộp $ABCD.A'B'C'D'$. Rút gọn tổng ba véc tơ: $\\overrightarrow{BA} + \\overrightarrow{BC} + \\overrightarrow{BB'}$.<br>\n        \n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"220\" height=\"140\" viewBox=\"0 0 220 140\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"40,20 120,20 160,50 80,50\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <polygon points=\"40,75 120,75 160,105 80,105\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"120\" y1=\"20\" x2=\"120\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"160\" y1=\"50\" x2=\"160\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"80\" y1=\"50\" x2=\"80\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"120\" y1=\"75\" x2=\"45\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"75\" x2=\"157\" y2=\"102\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"75\" x2=\"120\" y2=\"25\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"75\" x2=\"83\" y2=\"52\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"3\" marker-end=\"url(#arrR)\"/>\n            <text x=\"125\" y=\"80\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">B</text>\n            <text x=\"25\" y=\"80\" fill=\"#f8fafc\" font-size=\"12\">A</text>\n            <text x=\"165\" y=\"110\" fill=\"#f8fafc\" font-size=\"12\">C</text>\n            <text x=\"125\" y=\"20\" fill=\"#f8fafc\" font-size=\"12\">B'</text>\n            <text x=\"70\" y=\"48\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">D'</text>\n          </svg>\n        </div>\n\n        <i>(Thời gian suy nghĩ: 20 giây)</i>\n      </div>\n      <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n        <b>Lời giải:</b> Áp dụng quy tắc hình hộp xuất phát từ đỉnh $B$:<br>\n        $\\mathbf{\\overrightarrow{BA} + \\overrightarrow{BC} + \\overrightarrow{BB'} = \\overrightarrow{BD'}}$ (véc tơ đường chéo lớn nối từ $B$).\n      </div>\n    </div>\n\n    <!-- Ví dụ 2 -->\n    <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n      <div id=\"vd2_q\">\n        <b style=\"color:#38bdf8;\">Ví dụ 2:</b> Cho tứ diện $ABCD$, $M$ là trung điểm cạnh $CD$. Biểu diễn $\\overrightarrow{AM}$ theo hai véc tơ $\\overrightarrow{AC}$ và $\\overrightarrow{AD}$.<br>\n        \n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"220\" height=\"130\" viewBox=\"0 0 220 130\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"110,15 35,105 135,115\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <polygon points=\"110,15 135,115 185,85\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"35\" y1=\"105\" x2=\"185\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"110\" y1=\"15\" x2=\"160\" y2=\"98\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <circle cx=\"160\" cy=\"100\" r=\"3\" fill=\"#f43f5e\"/>\n            <text x=\"110\" y=\"12\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"22\" y=\"110\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n            <text x=\"130\" y=\"128\" fill=\"#f8fafc\" font-size=\"12\">C</text>\n            <text x=\"190\" y=\"88\" fill=\"#f8fafc\" font-size=\"12\">D</text>\n            <text x=\"165\" y=\"112\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">M</text>\n          </svg>\n        </div>\n\n        <i>(Thời gian làm nháp: 15 giây)</i>\n      </div>\n      <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n        <b>Lời giải:</b> Trong tam giác $ACD$, đoạn $AM$ là đường trung tuyến kẻ từ đỉnh $A$:<br>\n        $\\mathbf{\\overrightarrow{AM} = \\frac{1}{2}(\\overrightarrow{AC} + \\overrightarrow{AD})}$.\n      </div>\n    </div>\n\n    <!-- Ví dụ 3 -->\n    <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n      <div id=\"vd3_q\">\n        <b style=\"color:#38bdf8;\">Ví dụ 3:</b> Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Rút gọn tổng bốn véc tơ: $\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} + \\overrightarrow{SD}$.<br>\n        \n        <div style=\"text-align:center; margin:12px 0;\">\n          <svg width=\"260\" height=\"165\" viewBox=\"0 0 260 165\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"130,15 45,115 155,115\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <polygon points=\"130,15 155,115 215,80\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"45\" y1=\"115\" x2=\"105\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"105\" y1=\"80\" x2=\"215\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"130\" y1=\"15\" x2=\"105\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"45\" y1=\"115\" x2=\"215\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1\" stroke-dasharray=\"3\"/>\n            <line x1=\"105\" y1=\"80\" x2=\"155\" y2=\"115\" stroke=\"#64748b\" stroke-width=\"1\" stroke-dasharray=\"3\"/>\n            <line x1=\"130\" y1=\"15\" x2=\"130\" y2=\"92\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"4\" marker-end=\"url(#arrR)\"/>\n            <circle cx=\"130\" cy=\"97.5\" r=\"3\" fill=\"#fbbf24\"/>\n            <text x=\"128\" y=\"12\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">S</text>\n            <text x=\"30\" y=\"120\" fill=\"#f8fafc\" font-size=\"12\">A</text>\n            <text x=\"160\" y=\"122\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n            <text x=\"220\" y=\"82\" fill=\"#f8fafc\" font-size=\"12\">C</text>\n            <text x=\"92\" y=\"78\" fill=\"#f8fafc\" font-size=\"12\">D</text>\n            <text x=\"135\" y=\"105\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">O</text>\n          </svg>\n        </div>\n\n        <i>(Thời gian suy nghĩ: 20 giây)</i>\n      </div>\n      <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n        <b>Lời giải chi tiết:</b><br>\n        Vì $O$ là trung điểm của hai đường chéo $AC$ và $BD$ nên:<br>\n        $\\overrightarrow{SA} + \\overrightarrow{SC} = 2\\overrightarrow{SO}$ và $\\overrightarrow{SB} + \\overrightarrow{SD} = 2\\overrightarrow{SO}$.<br>\n        Cộng hai đẳng thức lại, ta được:<br>\n        $\\mathbf{\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} + \\overrightarrow{SD} = 2\\overrightarrow{SO} + 2\\overrightarrow{SO} = 4\\overrightarrow{SO}}$.\n      </div>\n    </div>\n\n    <div id=\"part4\"><h3>4. Bẫy trắc nghiệm</h3><p>Quy tắc hình hộp cộng ra véc tơ đường chéo không gian $\\overrightarrow{AC'}$, không phải đường chéo mặt đáy $\\overrightarrow{AC}$.</p></div>\n    <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Gom các cặp đỉnh đối diện qua tâm: $\\overrightarrow{SA} + \\overrightarrow{SC} = 2\\overrightarrow{SO}; \\overrightarrow{SB} + \\overrightarrow{SD} = 2\\overrightarrow{SO} \\Rightarrow$ Tổng bằng $4\\overrightarrow{SO}$!</p></div>\n",
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
      "mascotTip": "Quy tắc 3 điểm: $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$. Quy tắc hình bình hành: $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Quy tắc tam giác & Quy tắc hình bình hành</div>\n      <div style=\"display:flex; flex-wrap:wrap; justify-content:space-around; margin:12px 0; gap:12px;\">\n        <div style=\"text-align:center; background:#1e293b; padding:10px; border-radius:8px; min-width:210px; border:1px solid #334155;\">\n          <b style=\"color:#38bdf8; font-size:13px;\">Quy tắc tam giác (3 điểm)</b><br>\n          <svg width=\"200\" height=\"110\" viewBox=\"0 0 200 110\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <line x1=\"25\" y1=\"85\" x2=\"115\" y2=\"85\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"85\" x2=\"160\" y2=\"25\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"25\" y1=\"85\" x2=\"157\" y2=\"28\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"3\" marker-end=\"url(#arrR)\"/>\n            <text x=\"12\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"120\" y=\"100\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">B</text>\n            <text x=\"165\" y=\"25\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">C</text>\n          </svg>\n          <div style=\"color:#f8fafc; font-size:13px; font-weight:bold; margin-top:4px;\">$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$</div>\n        </div>\n        <div style=\"text-align:center; background:#1e293b; padding:10px; border-radius:8px; min-width:210px; border:1px solid #334155;\">\n          <b style=\"color:#38bdf8; font-size:13px;\">Quy tắc Hình bình hành</b><br>\n          <svg width=\"200\" height=\"110\" viewBox=\"0 0 200 110\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <line x1=\"25\" y1=\"85\" x2=\"115\" y2=\"85\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"25\" y1=\"85\" x2=\"68\" y2=\"25\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"85\" x2=\"165\" y2=\"25\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"70\" y1=\"25\" x2=\"165\" y2=\"25\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"25\" y1=\"85\" x2=\"160\" y2=\"28\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <text x=\"12\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"122\" y=\"95\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">B</text>\n            <text x=\"170\" y=\"25\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">C</text>\n            <text x=\"60\" y=\"20\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">D</text>\n          </svg>\n          <div style=\"color:#f8fafc; font-size:13px; font-weight:bold; margin-top:4px;\">$\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$</div>\n        </div>\n      </div>\n<div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Quy tắc 3 điểm (Tam giác):</b> $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$<br>• <b>Quy tắc hình bình hành:</b> $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$<br>• <b>Hiệu hai véc tơ:</b> $\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB}$</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "QUY TẮC HÌNH HỘP TRONG KHÔNG GIAN",
      "subtitle": "PHẦN 2: TỔNG BA CẠNH BẰNG ĐƯỜNG CHÉO LỚN",
      "startTime": 23.45,
      "endTime": 54.34,
      "duration": 30.89,
      "mascotMode": "pointer",
      "mascotTip": "$\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$ (đường chéo không gian lớn xuất phát từ $A$)!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Quy tắc hình hộp trong không gian</div>\n      <div style=\"text-align:center; margin:12px auto; background:#1e293b; padding:12px; border-radius:8px; max-width:340px; border:1px solid #334155;\">\n        <svg width=\"240\" height=\"150\" viewBox=\"0 0 240 150\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n          <polygon points=\"50,25 140,25 185,60 95,60\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <polygon points=\"50,85 140,85 185,120 95,120\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"50\" y1=\"25\" x2=\"50\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"140\" y1=\"25\" x2=\"140\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"185\" y1=\"60\" x2=\"185\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"95\" y1=\"60\" x2=\"95\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"50\" y1=\"85\" x2=\"135\" y2=\"85\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"50\" y1=\"85\" x2=\"92\" y2=\"118\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"50\" y1=\"85\" x2=\"50\" y2=\"30\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"50\" y1=\"85\" x2=\"182\" y2=\"62\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"3\" marker-end=\"url(#arrR)\"/>\n          <text x=\"32\" y=\"90\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">A</text>\n          <text x=\"145\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n          <text x=\"96\" y=\"135\" fill=\"#f8fafc\" font-size=\"12\">D</text>\n          <text x=\"32\" y=\"25\" fill=\"#f8fafc\" font-size=\"12\">A'</text>\n          <text x=\"190\" y=\"60\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">C'</text>\n        </svg>\n        <div style=\"color:#f43f5e; font-size:14px; font-weight:bold; margin-top:6px;\">\n          $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$\n        </div>\n      </div>\n<div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>Cho hình hộp $ABCD.A'B'C'D'$. Tổng ba véc tơ xuất phát từ gốc $A$ theo ba cạnh bằng véc tơ đường chéo lớn:<br>&emsp;$$\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$$</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: QUY TẮC HÌNH HỘP TỪ ĐỈNH B",
      "subtitle": "RÚT GỌN TỔNG BA VÉC TƠ CẠNH",
      "startTime": 54.34,
      "endTime": 76.08,
      "duration": 21.74,
      "mascotMode": "pointer",
      "mascotTip": "Ba véc tơ $\\overrightarrow{BA} + \\overrightarrow{BC} + \\overrightarrow{BB'}$ cùng xuất phát từ đỉnh $B \\implies$ Đường chéo là $\\overrightarrow{BD'}$!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Rút gọn tổng: $\\overrightarrow{BA} + \\overrightarrow{BC} + \\overrightarrow{BB'}$.\n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"220\" height=\"140\" viewBox=\"0 0 220 140\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"40,20 120,20 160,50 80,50\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <polygon points=\"40,75 120,75 160,105 80,105\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"120\" y1=\"20\" x2=\"120\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"160\" y1=\"50\" x2=\"160\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"80\" y1=\"50\" x2=\"80\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"120\" y1=\"75\" x2=\"45\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"75\" x2=\"157\" y2=\"102\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"75\" x2=\"120\" y2=\"25\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"75\" x2=\"83\" y2=\"52\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"3\" marker-end=\"url(#arrR)\"/>\n            <text x=\"125\" y=\"80\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">B</text>\n            <text x=\"25\" y=\"80\" fill=\"#f8fafc\" font-size=\"12\">A</text>\n            <text x=\"165\" y=\"110\" fill=\"#f8fafc\" font-size=\"12\">C</text>\n            <text x=\"125\" y=\"20\" fill=\"#f8fafc\" font-size=\"12\">B'</text>\n            <text x=\"70\" y=\"48\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">D'</text>\n          </svg>\n        </div>\n<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "ĐƯỜNG CHÉO XUẤT PHÁT TỪ ĐỈNH B",
      "startTime": 76.08,
      "endTime": 86.21,
      "duration": 10.13,
      "mascotMode": "pointer",
      "mascotTip": "$\\overrightarrow{BA} + \\overrightarrow{BC} + \\overrightarrow{BB'} = \\overrightarrow{BD'}$!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd1_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 1:</b><br>Áp dụng quy tắc hình hộp xuất phát từ gốc $B$, tổng ba véc tơ theo ba cạnh bằng véc tơ đường chéo lớn:<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$\\overrightarrow{BA} + \\overrightarrow{BC} + \\overrightarrow{BB'} = \\overrightarrow{BD'}$</b>.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: VÉC TƠ ĐƯỜNG TRUNG TUYẾN",
      "subtitle": "BIỂU DIỄN QUA HAI VÉC TƠ CẠNH",
      "startTime": 86.21,
      "endTime": 100.15,
      "duration": 13.94,
      "mascotMode": "pointer",
      "mascotTip": "$M$ là trung điểm $CD \\implies \\overrightarrow{AM} = \\frac{1}{2}(\\overrightarrow{AC} + \\overrightarrow{AD})$!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Cho tứ diện $ABCD$, $M$ là trung điểm cạnh $CD$. Biểu diễn $\\overrightarrow{AM}$ theo hai véc tơ $\\overrightarrow{AC}$ và $\\overrightarrow{AD}$.\n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"220\" height=\"130\" viewBox=\"0 0 220 130\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"110,15 35,105 135,115\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <polygon points=\"110,15 135,115 185,85\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"35\" y1=\"105\" x2=\"185\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"110\" y1=\"15\" x2=\"160\" y2=\"98\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <circle cx=\"160\" cy=\"100\" r=\"3\" fill=\"#f43f5e\"/>\n            <text x=\"110\" y=\"12\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"22\" y=\"110\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n            <text x=\"130\" y=\"128\" fill=\"#f8fafc\" font-size=\"12\">C</text>\n            <text x=\"190\" y=\"88\" fill=\"#f8fafc\" font-size=\"12\">D</text>\n            <text x=\"165\" y=\"112\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">M</text>\n          </svg>\n        </div>\n<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian làm nháp: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI",
      "subtitle": "QUY TẮC TRUNG ĐIỂM",
      "startTime": 100.15,
      "endTime": 114.53,
      "duration": 14.38,
      "mascotMode": "pointer",
      "mascotTip": "$\\overrightarrow{AM} = \\frac{1}{2}(\\overrightarrow{AC} + \\overrightarrow{AD})$!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd2_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 2:</b><br>Tam giác $ACD$ có $AM$ là trung tuyến, áp dụng quy tắc trung điểm ta có:<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$\\overrightarrow{AM} = \\frac{1}{2}(\\overrightarrow{AC} + \\overrightarrow{AD})$</b>.</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: TỔNG VÉC TƠ TỪ ĐỈNH CHÓP",
      "subtitle": "ĐÁY HÌNH BÌNH HÀNH TÂM O",
      "startTime": 114.53,
      "endTime": 129.17,
      "duration": 14.64,
      "mascotMode": "pointer",
      "mascotTip": "Gom cặp đối diện: $\\overrightarrow{SA} + \\overrightarrow{SC} = 2\\overrightarrow{SO}$; $\\overrightarrow{SB} + \\overrightarrow{SD} = 2\\overrightarrow{SO} \\implies$ Tổng $= 4\\overrightarrow{SO}$!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Rút gọn tổng bốn véc tơ: $\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} + \\overrightarrow{SD}$.\n        <div style=\"text-align:center; margin:12px 0;\">\n          <svg width=\"260\" height=\"165\" viewBox=\"0 0 260 165\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"130,15 45,115 155,115\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <polygon points=\"130,15 155,115 215,80\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"45\" y1=\"115\" x2=\"105\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"105\" y1=\"80\" x2=\"215\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"130\" y1=\"15\" x2=\"105\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"45\" y1=\"115\" x2=\"215\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1\" stroke-dasharray=\"3\"/>\n            <line x1=\"105\" y1=\"80\" x2=\"155\" y2=\"115\" stroke=\"#64748b\" stroke-width=\"1\" stroke-dasharray=\"3\"/>\n            <line x1=\"130\" y1=\"15\" x2=\"130\" y2=\"92\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"4\" marker-end=\"url(#arrR)\"/>\n            <circle cx=\"130\" cy=\"97.5\" r=\"3\" fill=\"#fbbf24\"/>\n            <text x=\"128\" y=\"12\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">S</text>\n            <text x=\"30\" y=\"120\" fill=\"#f8fafc\" font-size=\"12\">A</text>\n            <text x=\"160\" y=\"122\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n            <text x=\"220\" y=\"82\" fill=\"#f8fafc\" font-size=\"12\">C</text>\n            <text x=\"92\" y=\"78\" fill=\"#f8fafc\" font-size=\"12\">D</text>\n            <text x=\"135\" y=\"105\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">O</text>\n          </svg>\n        </div>\n<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI",
      "subtitle": "SỬ DỤNG TÂM ĐỐI XỨNG O",
      "startTime": 129.17,
      "endTime": 143.3,
      "duration": 14.13,
      "mascotMode": "cheer",
      "mascotTip": "$\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} + \\overrightarrow{SD} = 4\\overrightarrow{SO}$!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd3_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 3:</b><br>Vì $O$ là tâm hình bình hành nên:<br>• $\\overrightarrow{SA} + \\overrightarrow{SC} = 2\\overrightarrow{SO}$<br>• $\\overrightarrow{SB} + \\overrightarrow{SD} = 2\\overrightarrow{SO}$<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> Tổng bốn véc tơ bằng <b>$4\\overrightarrow{SO}$</b>.</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY TRẮC NGHIỆM: ĐƯỜNG CHÉO HÌNH HỘP",
      "subtitle": "PHẦN 4: NHẦM LẪN ĐỈNH ĐỐI DIỆN",
      "startTime": 143.3,
      "endTime": 154.49,
      "duration": 11.19,
      "mascotMode": "magnifier",
      "mascotTip": "Quy tắc hình hộp ra đường chéo không gian $\\overrightarrow{AC'}$, không phải đường chéo mặt đáy $\\overrightarrow{AC}$!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi quy tắc hình hộp:</span><br>Khi dùng quy tắc hình hộp, vội vàng viết đường chéo mặt đáy $\\overrightarrow{AC}$ thay vì đường chéo khối hộp $\\overrightarrow{AC'}$. Hãy nhớ: hình hộp ra đường chéo không gian xuyên tâm!</div>"
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
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Khẩu quyết vàng Thầy Cú:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">• <b>Quy tắc tam giác:</b> Ngọn nối tiếp gốc ($\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$).<br>• <b>Quy tắc hình bình hành:</b> Ra đường chéo đáy ($\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$).<br>• <b>Quy tắc hình hộp:</b> Ra đường chéo không gian ($\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$).</div>"
    }
  ]
};

window.CHAPTER2_DATA.bai6_muc3 = {
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
  "owl_tip": "$\\overrightarrow{u} \\cdot \\overrightarrow{v} = |\\overrightarrow{u}| \\cdot |\\overrightarrow{v}| \\cdot \\cos(\\overrightarrow{u}, \\overrightarrow{v})$. Hai véc tơ vuông góc khi và chỉ khi tích vô hướng bằng $0$!",
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
  "content": "\n    <div id=\"part1\">\n      <h3>1. Góc giữa hai véc tơ trong không gian</h3>\n      <p>• Cho hai véc tơ $\\overrightarrow{u}, \\overrightarrow{v} \\ne \\overrightarrow{0}$. Lấy điểm $O$, dựng $\\overrightarrow{OA} = \\overrightarrow{u}$ và $\\overrightarrow{OB} = \\overrightarrow{v}$. Khi đó: $(\\overrightarrow{u}, \\overrightarrow{v}) = \\widehat{AOB}$.<br>\n      • Khoảng giá trị: $0^\\circ \\le (\\overrightarrow{u}, \\overrightarrow{v}) \\le 180^\\circ$.<br>\n      • Hai véc tơ vuông góc: $\\overrightarrow{u} \\perp \\overrightarrow{v} \\Leftrightarrow (\\overrightarrow{u}, \\overrightarrow{v}) = 90^\\circ$.</p>\n      \n      <div style=\"display:flex; flex-wrap:wrap; justify-content:center; gap:16px; margin:12px 0;\">\n        <div style=\"text-align:center; background:#1e293b; padding:12px; border-radius:8px; border:1px solid #334155; min-width:220px;\">\n          <b style=\"color:#38bdf8; font-size:13px;\">Góc giữa hai véc tơ $\\overrightarrow{u}$ và $\\overrightarrow{v}$</b>\n          <div style=\"margin:8px 0;\">\n            <svg width=\"200\" height=\"95\" viewBox=\"0 0 200 95\">\n              \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n              <line x1=\"30\" y1=\"75\" x2=\"160\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n              <line x1=\"30\" y1=\"75\" x2=\"125\" y2=\"20\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n              <path d=\"M 65 75 A 35 35 0 0 0 57 58\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n              <text x=\"68\" y=\"65\" fill=\"#fbbf24\" font-size=\"14\" font-weight=\"bold\">φ</text>\n              <text x=\"14\" y=\"80\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">O</text>\n              <g><line x1=\"165\" y1=\"68\" x2=\"175\" y2=\"68\" stroke=\"#38bdf8\" stroke-width=\"1.3\"/><path d=\"M 173 66 L 176 68 L 173 70\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"165\" y=\"80\" fill=\"#38bdf8\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">u</text></g>\n              <g><line x1=\"130\" y1=\"8\" x2=\"140\" y2=\"8\" stroke=\"#f43f5e\" stroke-width=\"1.3\"/><path d=\"M 138 6 L 141 8 L 138 10\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"130\" y=\"20\" fill=\"#f43f5e\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">v</text></g>\n            </svg>\n          </div>\n          <span style=\"color:#94a3b8; font-size:12px;\">$0^\\circ \\le (\\overrightarrow{u}, \\overrightarrow{v}) \\le 180^\\circ$</span>\n        </div>\n        <div style=\"text-align:center; background:#1e293b; padding:12px; border-radius:8px; border:1px solid #334155; min-width:220px;\">\n          <b style=\"color:#38bdf8; font-size:13px;\">Hai véc tơ vuông góc ($90^\\circ$)</b>\n          <div style=\"margin:8px 0;\">\n            <svg width=\"180\" height=\"95\" viewBox=\"0 0 180 95\">\n              \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n              <line x1=\"30\" y1=\"75\" x2=\"150\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n              <line x1=\"30\" y1=\"75\" x2=\"30\" y2=\"15\" stroke=\"#34d399\" stroke-width=\"2.5\" marker-end=\"url(#arrG)\"/>\n              <rect x=\"30\" y=\"60\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n              <text x=\"14\" y=\"80\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">O</text>\n              <g><line x1=\"155\" y1=\"68\" x2=\"165\" y2=\"68\" stroke=\"#38bdf8\" stroke-width=\"1.3\"/><path d=\"M 163 66 L 166 68 L 163 70\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"155\" y=\"80\" fill=\"#38bdf8\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">u</text></g>\n              <g><line x1=\"35\" y1=\"6\" x2=\"45\" y2=\"6\" stroke=\"#34d399\" stroke-width=\"1.3\"/><path d=\"M 43 4 L 46 6 L 43 8\" fill=\"none\" stroke=\"#34d399\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"35\" y=\"18\" fill=\"#34d399\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">v</text></g>\n            </svg>\n          </div>\n          <span style=\"color:#34d399; font-size:12px; font-weight:bold;\">$\\overrightarrow{u} \\perp \\overrightarrow{v} \\Leftrightarrow \\overrightarrow{u} \\cdot \\overrightarrow{v} = 0$</span>\n        </div>\n      </div>\n\n    </div>\n\n    <div id=\"part2\">\n      <h3>2. Tích vô hướng của hai véc tơ</h3>\n      <p>• Định nghĩa: $\\mathbf{\\overrightarrow{u} \\cdot \\overrightarrow{v} = |\\overrightarrow{u}| \\cdot |\\overrightarrow{v}| \\cdot \\cos(\\overrightarrow{u}, \\overrightarrow{v})}$.<br>\n      • <b>Điều kiện vuông góc:</b> $\\mathbf{\\overrightarrow{u} \\perp \\overrightarrow{v} \\Leftrightarrow \\overrightarrow{u} \\cdot \\overrightarrow{v} = 0}$.<br>\n      • Công thức tính góc: $\\mathbf{\\cos(\\overrightarrow{u}, \\overrightarrow{v}) = \\frac{\\overrightarrow{u} \\cdot \\overrightarrow{v}}{|\\overrightarrow{u}| \\cdot |\\overrightarrow{v}|}}$.</p>\n    </div>\n\n    <div id=\"part3\"><h3>3. Các ví dụ tính toán</h3></div>\n\n    <!-- Ví dụ 1 -->\n    <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n      <div id=\"vd1_q\">\n        <b style=\"color:#38bdf8;\">Ví dụ 1:</b> Cho tứ diện đều $ABCD$ cạnh $a$. Tính tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$.<br>\n        \n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"180\" height=\"110\" viewBox=\"0 0 180 110\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"90,15 25,95 155,95\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"90\" y1=\"15\" x2=\"30\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"90\" y1=\"15\" x2=\"150\" y2=\"90\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <path d=\"M 75 35 A 25 25 0 0 0 105 35\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n            <text x=\"80\" y=\"48\" fill=\"#fbbf24\" font-size=\"11\">60°</text>\n            <text x=\"90\" y=\"10\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"12\" y=\"102\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">B</text>\n            <text x=\"160\" y=\"102\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">C</text>\n          </svg>\n        </div>\n\n        <i>(Thời gian suy nghĩ: 20 giây)</i>\n      </div>\n      <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n        <b>Lời giải:</b><br>\n        Tam giác $ABC$ đều nên góc giữa hai véc tơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ là $60^\\circ$.<br>\n        $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = |\\overrightarrow{AB}| \\cdot |\\overrightarrow{AC}| \\cdot \\cos 60^\\circ = a \\cdot a \\cdot \\frac{1}{2} = \\mathbf{\\frac{a^2}{2}}$.\n      </div>\n    </div>\n\n    <!-- Ví dụ 2 -->\n    <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n      <div id=\"vd2_q\">\n        <b style=\"color:#38bdf8;\">Ví dụ 2:</b> Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{AD'}$.<br>\n        \n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"220\" height=\"150\" viewBox=\"0 0 220 150\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"45,25 125,25 165,55 85,55\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <polygon points=\"45,75 125,75 165,105 85,105\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"45\" y1=\"25\" x2=\"45\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"125\" y1=\"25\" x2=\"125\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"165\" y1=\"55\" x2=\"165\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"85\" y1=\"55\" x2=\"85\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"45\" y1=\"75\" x2=\"120\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"45\" y1=\"75\" x2=\"83\" y2=\"57\" stroke=\"#34d399\" stroke-width=\"2.5\" marker-end=\"url(#arrG)\"/>\n            <text x=\"30\" y=\"80\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"130\" y=\"80\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">B</text>\n            <text x=\"80\" y=\"50\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\">D'</text>\n          </svg>\n        </div>\n\n        <i>(Thời gian suy nghĩ: 20 giây)</i>\n      </div>\n      <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n        <b>Lời giải:</b><br>\n        Cạnh $AB \\perp (ADD'A') \\implies AB \\perp AD'$.<br>\n        Do đó góc giữa hai véc tơ bằng $90^\\circ \\implies$ $\\mathbf{\\overrightarrow{AB} \\cdot \\overrightarrow{AD'} = 0}$.\n      </div>\n    </div>\n\n    <!-- Ví dụ 3 -->\n    <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n      <div id=\"vd3_q\">\n        <b style=\"color:#38bdf8;\">Ví dụ 3:</b> Cho $|\\overrightarrow{u}| = 2, |\\overrightarrow{v}| = 3$, tích vô hướng $\\overrightarrow{u} \\cdot \\overrightarrow{v} = -3$. Tính góc $(\\overrightarrow{u}, \\overrightarrow{v})$.<br>\n        \n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"200\" height=\"95\" viewBox=\"0 0 200 95\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <line x1=\"100\" y1=\"75\" x2=\"180\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"100\" y1=\"75\" x2=\"50\" y2=\"25\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <path d=\"M 130 75 A 30 30 0 0 0 78 53\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n            <text x=\"96\" y=\"52\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">120°</text>\n            <text x=\"92\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\">O</text>\n            <g><line x1=\"185\" y1=\"68\" x2=\"195\" y2=\"68\" stroke=\"#38bdf8\" stroke-width=\"1.3\"/><path d=\"M 193 66 L 196 68 L 193 70\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"185\" y=\"80\" fill=\"#38bdf8\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">u</text></g>\n            <g><line x1=\"40\" y1=\"13\" x2=\"50\" y2=\"13\" stroke=\"#f43f5e\" stroke-width=\"1.3\"/><path d=\"M 48 11 L 51 13 L 48 15\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"40\" y=\"25\" fill=\"#f43f5e\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">v</text></g>\n          </svg>\n        </div>\n\n        <i>(Thời gian suy nghĩ: 15 giây)</i>\n      </div>\n      <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n        <b>Lời giải:</b><br>\n        $$\\cos(\\overrightarrow{u}, \\overrightarrow{v}) = \\frac{\\overrightarrow{u} \\cdot \\overrightarrow{v}}{|\\overrightarrow{u}| \\cdot |\\overrightarrow{v}|} = \\frac{-3}{2 \\cdot 3} = -\\frac{1}{2}$$<br>\n        Suy ra: $\\mathbf{(\\overrightarrow{u}, \\overrightarrow{v}) = 120^\\circ}$.\n      </div>\n    </div>\n\n    <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Nhầm góc giữa hai véc tơ với góc giữa hai đường thẳng. Góc giữa hai đường thẳng luôn nhọn hoặc vuông ($\\le 90^\\circ$), còn góc giữa hai véc tơ có thể là góc tù (lên tới $180^\\circ$).</p></div>\n    <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Muốn chứng minh hai đường thẳng vuông góc trong không gian, hãy quy về tính tích vô hướng của hai véc tơ chỉ phương bằng không!</p></div>\n",
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
      "mascotTip": "Góc giữa 2 véc tơ có số đo từ $0^\\circ$ đến $180^\\circ$. Hai véc tơ vuông góc khi góc bằng $90^\\circ$!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Góc giữa hai véc tơ trong không gian</div>\n      <div style=\"display:flex; flex-wrap:wrap; justify-content:center; gap:16px; margin:12px 0;\">\n        <div style=\"text-align:center; background:#1e293b; padding:12px; border-radius:8px; border:1px solid #334155; min-width:220px;\">\n          <b style=\"color:#38bdf8; font-size:13px;\">Góc giữa hai véc tơ $\\overrightarrow{u}$ và $\\overrightarrow{v}$</b>\n          <div style=\"margin:8px 0;\">\n            <svg width=\"200\" height=\"95\" viewBox=\"0 0 200 95\">\n              \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n              <line x1=\"30\" y1=\"75\" x2=\"160\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n              <line x1=\"30\" y1=\"75\" x2=\"125\" y2=\"20\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n              <path d=\"M 65 75 A 35 35 0 0 0 57 58\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n              <text x=\"68\" y=\"65\" fill=\"#fbbf24\" font-size=\"14\" font-weight=\"bold\">φ</text>\n              <text x=\"14\" y=\"80\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">O</text>\n              <g><line x1=\"165\" y1=\"68\" x2=\"175\" y2=\"68\" stroke=\"#38bdf8\" stroke-width=\"1.3\"/><path d=\"M 173 66 L 176 68 L 173 70\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"165\" y=\"80\" fill=\"#38bdf8\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">u</text></g>\n              <g><line x1=\"130\" y1=\"8\" x2=\"140\" y2=\"8\" stroke=\"#f43f5e\" stroke-width=\"1.3\"/><path d=\"M 138 6 L 141 8 L 138 10\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"130\" y=\"20\" fill=\"#f43f5e\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">v</text></g>\n            </svg>\n          </div>\n          <span style=\"color:#94a3b8; font-size:12px;\">$0^\\circ \\le (\\overrightarrow{u}, \\overrightarrow{v}) \\le 180^\\circ$</span>\n        </div>\n        <div style=\"text-align:center; background:#1e293b; padding:12px; border-radius:8px; border:1px solid #334155; min-width:220px;\">\n          <b style=\"color:#38bdf8; font-size:13px;\">Hai véc tơ vuông góc ($90^\\circ$)</b>\n          <div style=\"margin:8px 0;\">\n            <svg width=\"180\" height=\"95\" viewBox=\"0 0 180 95\">\n              \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n              <line x1=\"30\" y1=\"75\" x2=\"150\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n              <line x1=\"30\" y1=\"75\" x2=\"30\" y2=\"15\" stroke=\"#34d399\" stroke-width=\"2.5\" marker-end=\"url(#arrG)\"/>\n              <rect x=\"30\" y=\"60\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n              <text x=\"14\" y=\"80\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">O</text>\n              <g><line x1=\"155\" y1=\"68\" x2=\"165\" y2=\"68\" stroke=\"#38bdf8\" stroke-width=\"1.3\"/><path d=\"M 163 66 L 166 68 L 163 70\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"155\" y=\"80\" fill=\"#38bdf8\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">u</text></g>\n              <g><line x1=\"35\" y1=\"6\" x2=\"45\" y2=\"6\" stroke=\"#34d399\" stroke-width=\"1.3\"/><path d=\"M 43 4 L 46 6 L 43 8\" fill=\"none\" stroke=\"#34d399\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"35\" y=\"18\" fill=\"#34d399\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">v</text></g>\n            </svg>\n          </div>\n          <span style=\"color:#34d399; font-size:12px; font-weight:bold;\">$\\overrightarrow{u} \\perp \\overrightarrow{v} \\Leftrightarrow \\overrightarrow{u} \\cdot \\overrightarrow{v} = 0$</span>\n        </div>\n      </div>\n<div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• Cho hai véc tơ $\\overrightarrow{u}, \\overrightarrow{v} \\ne \\overrightarrow{0}$. Lấy điểm $O$, dựng $\\overrightarrow{OA} = \\overrightarrow{u}$ và $\\overrightarrow{OB} = \\overrightarrow{v}$. Khi đó: $(\\overrightarrow{u}, \\overrightarrow{v}) = \\widehat{AOB}$.<br>• Khoảng giá trị: $0^\\circ \\le (\\overrightarrow{u}, \\overrightarrow{v}) \\le 180^\\circ$.<br>• Hai véc tơ vuông góc: $\\overrightarrow{u} \\perp \\overrightarrow{v} \\Leftrightarrow (\\overrightarrow{u}, \\overrightarrow{v}) = 90^\\circ$.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "CÔNG THỨC TÍCH VÔ HƯỚNG",
      "subtitle": "PHẦN 2: ĐIỀU KIỆN VUÔNG GÓC & TÍNH GÓC",
      "startTime": 27.72,
      "endTime": 48.34,
      "duration": 20.62,
      "mascotMode": "pointer",
      "mascotTip": "$\\overrightarrow{u} \\cdot \\overrightarrow{v} = |\\overrightarrow{u}| \\cdot |\\overrightarrow{v}| \\cdot \\cos(\\overrightarrow{u}, \\overrightarrow{v})$. Hai véc tơ vuông góc $\\Leftrightarrow \\overrightarrow{u} \\cdot \\overrightarrow{v} = 0$!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Tích vô hướng của hai véc tơ</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Công thức:</b> $\\overrightarrow{u} \\cdot \\overrightarrow{v} = |\\overrightarrow{u}| \\cdot |\\overrightarrow{v}| \\cdot \\cos(\\overrightarrow{u}, \\overrightarrow{v})$.<br>• <b>Điều kiện vuông góc:</b> $\\overrightarrow{u} \\perp \\overrightarrow{v} \\iff \\overrightarrow{u} \\cdot \\overrightarrow{v} = 0$.<br>• <b>Công thức cosin góc:</b> $\\cos(\\overrightarrow{u}, \\overrightarrow{v}) = \\frac{\\overrightarrow{u} \\cdot \\overrightarrow{v}}{|\\overrightarrow{u}| \\cdot |\\overrightarrow{v}|}$.<br>• Bình phương vô hướng: $\\overrightarrow{u}^2 = |\\overrightarrow{u}|^2$.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: TỨ DIỆN ĐỀU CẠNH a",
      "subtitle": "TÍNH TÍCH VÔ HƯỚNG HAI CẠNH CHUNG GỐC",
      "startTime": 48.34,
      "endTime": 65.23,
      "duration": 16.89,
      "mascotMode": "pointer",
      "mascotTip": "Tam giác $ABC$ đều $\\implies$ Góc $A = 60^\\circ$. $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = a \\cdot a \\cdot \\cos(60^\\circ) = \\frac{a^2}{2}$!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Cho tứ diện đều $ABCD$ cạnh $a$. Tính tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$.\n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"180\" height=\"110\" viewBox=\"0 0 180 110\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"90,15 25,95 155,95\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"90\" y1=\"15\" x2=\"30\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"90\" y1=\"15\" x2=\"150\" y2=\"90\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <path d=\"M 75 35 A 25 25 0 0 0 105 35\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n            <text x=\"80\" y=\"48\" fill=\"#fbbf24\" font-size=\"11\">60°</text>\n            <text x=\"90\" y=\"10\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"12\" y=\"102\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">B</text>\n            <text x=\"160\" y=\"102\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">C</text>\n          </svg>\n        </div>\n<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian làm nháp: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "GÓC 60 ĐỘ TRONG TAM GIÁC ĐỀU",
      "startTime": 65.23,
      "endTime": 79.49,
      "duration": 14.26,
      "mascotMode": "pointer",
      "mascotTip": "$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = \\frac{a^2}{2}$!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd1_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 1:</b><br>Tam giác $ABC$ đều nên góc giữa hai véc tơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ là $60^\\circ$.<br>$$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = a \\cdot a \\cdot \\cos 60^\\circ = a^2 \\cdot \\frac{1}{2} = \\frac{a^2}{2}$$<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = \\frac{a^2}{2}$</b>.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: HÌNH LẬP PHƯƠNG CẠNH a",
      "subtitle": "TÍCH VÔ HƯỚNG VUÔNG GÓC",
      "startTime": 79.49,
      "endTime": 94.87,
      "duration": 15.38,
      "mascotMode": "pointer",
      "mascotTip": "$AB$ vuông góc với $(ADD'A') \\implies \\overrightarrow{AB} \\perp \\overrightarrow{AD'} \\implies$ Tích vô hướng bằng $0$!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{AD'}$.\n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"220\" height=\"150\" viewBox=\"0 0 220 150\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"45,25 125,25 165,55 85,55\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <polygon points=\"45,75 125,75 165,105 85,105\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"45\" y1=\"25\" x2=\"45\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"125\" y1=\"25\" x2=\"125\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"165\" y1=\"55\" x2=\"165\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"85\" y1=\"55\" x2=\"85\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"45\" y1=\"75\" x2=\"120\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"45\" y1=\"75\" x2=\"83\" y2=\"57\" stroke=\"#34d399\" stroke-width=\"2.5\" marker-end=\"url(#arrG)\"/>\n            <text x=\"30\" y=\"80\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"130\" y=\"80\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">B</text>\n            <text x=\"80\" y=\"50\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\">D'</text>\n          </svg>\n        </div>\n<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI",
      "subtitle": "CHỨNG MINH VUÔNG GÓC",
      "startTime": 94.87,
      "endTime": 108.7,
      "duration": 13.83,
      "mascotMode": "pointer",
      "mascotTip": "Cạnh $AB \\perp AD' \\implies$ góc $= 90^\\circ \\implies$ tích vô hướng bằng $0$!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd2_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 2:</b><br>Cạnh $AB \\perp (ADD'A') \\implies AB \\perp AD'$.<br>Góc giữa hai véc tơ bằng $90^\\circ$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$\\overrightarrow{AB} \\cdot \\overrightarrow{AD'} = 0$</b>.</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: TÌM GÓC GIỮA HAI VÉC TƠ",
      "subtitle": "BIẾT ĐỘ DÀI VÀ TÍCH VÔ HƯỚNG",
      "startTime": 108.7,
      "endTime": 125.06,
      "duration": 16.36,
      "mascotMode": "pointer",
      "mascotTip": "$\\cos(\\overrightarrow{u}, \\overrightarrow{v}) = \\frac{\\overrightarrow{u} \\cdot \\overrightarrow{v}}{|\\overrightarrow{u}| \\cdot |\\overrightarrow{v}|} = \\frac{-3}{2 \\cdot 3} = -\\frac{1}{2} \\implies$ Góc bằng $120^\\circ$!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Cho $|\\overrightarrow{u}| = 2, |\\overrightarrow{v}| = 3$, tích vô hướng $\\overrightarrow{u} \\cdot \\overrightarrow{v} = -3$. Tính góc $(\\overrightarrow{u}, \\overrightarrow{v})$.\n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"200\" height=\"95\" viewBox=\"0 0 200 95\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <line x1=\"100\" y1=\"75\" x2=\"180\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"100\" y1=\"75\" x2=\"50\" y2=\"25\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <path d=\"M 130 75 A 30 30 0 0 0 78 53\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n            <text x=\"96\" y=\"52\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">120°</text>\n            <text x=\"92\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\">O</text>\n            <g><line x1=\"185\" y1=\"68\" x2=\"195\" y2=\"68\" stroke=\"#38bdf8\" stroke-width=\"1.3\"/><path d=\"M 193 66 L 196 68 L 193 70\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"185\" y=\"80\" fill=\"#38bdf8\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">u</text></g>\n            <g><line x1=\"40\" y1=\"13\" x2=\"50\" y2=\"13\" stroke=\"#f43f5e\" stroke-width=\"1.3\"/><path d=\"M 48 11 L 51 13 L 48 15\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"40\" y=\"25\" fill=\"#f43f5e\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">v</text></g>\n          </svg>\n        </div>\n<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI",
      "subtitle": "GÓC TÙ GIỮA HAI VÉC TƠ",
      "startTime": 125.06,
      "endTime": 138.96,
      "duration": 13.9,
      "mascotMode": "pointer",
      "mascotTip": "$\\cos(\\overrightarrow{u}, \\overrightarrow{v}) = -\\frac{1}{2} \\implies (\\overrightarrow{u}, \\overrightarrow{v}) = 120^\\circ$!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd3_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 3:</b><br>$$\\cos(\\overrightarrow{u}, \\overrightarrow{v}) = \\frac{\\overrightarrow{u} \\cdot \\overrightarrow{v}}{|\\overrightarrow{u}| \\cdot |\\overrightarrow{v}|} = \\frac{-3}{2 \\cdot 3} = -\\frac{1}{2}$$<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$(\\overrightarrow{u}, \\overrightarrow{v}) = 120^\\circ$</b>.</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI: GÓC VÉC TƠ VS GÓC ĐƯỜNG THẲNG",
      "subtitle": "PHẦN 4: GÓC TÙ VÀ GÓC NHỌN",
      "startTime": 138.96,
      "endTime": 154.39,
      "duration": 15.43,
      "mascotMode": "magnifier",
      "mascotTip": "Góc giữa 2 đường thẳng luôn $\\le 90^\\circ$. Góc giữa 2 véc tơ có thể lên tới $180^\\circ$!",
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
      "mascotTip": "Hai đường thẳng vuông góc khi và chỉ khi tích vô hướng hai véc tơ chỉ phương bằng $0$!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Bí kíp vàng chứng minh vuông góc:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">Muốn chứng minh hai đường thẳng vuông góc trong không gian:<br>• Chỉ cần lấy hai véc tơ chỉ phương $\\overrightarrow{u}$ và $\\overrightarrow{v}$.<br>• Tính tích vô hướng $\\overrightarrow{u} \\cdot \\overrightarrow{v} = 0$.<br>$\\implies a \\perp b$ nhanh chóng và chính xác tuyệt đối!</div>"
    }
  ]
};


window.CHAPTER2_DATA.bai7_muc1 = {
  "lessonId": "bai7",
  "lessonTitle": "Bài 7: Hệ trục toạ độ trong không gian",
  "sectionId": "bai7_muc1",
  "sectionTitle": "Mục 1: Hệ trục toạ độ Oxyz",
  "audio": "/audio/bai7_muc1.mp3",
  "audioSrc": "./audio/bai7_muc1.mp3",
  "audio_src": "./audio/bai7_muc1.mp3",
  "timestamp_src": "timestamps/bai7_muc1.json",
  "totalDuration": 245.09,
  "duration": 245.09,
  "title": "Mục 1: Hệ trục toạ độ Oxyz trong không gian",
  "owl_tip": "Hệ Oxyz gồm ba trục Ox, Oy, Oz đôi một vuông góc. Độ dài ba véc tơ đơn vị i, j, k đều bằng 1!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 50.42,
      "id": "part2"
    },
    {
      "time": 82.8,
      "id": "part3"
    },
    {
      "time": 85.61,
      "id": "vd1_q"
    },
    {
      "time": 110.09,
      "id": "vd1_a"
    },
    {
      "time": 134.16,
      "id": "vd2_q"
    },
    {
      "time": 151.49,
      "id": "vd2_a"
    },
    {
      "time": 172.99,
      "id": "vd3_q"
    },
    {
      "time": 197.69,
      "id": "vd3_a"
    },
    {
      "time": 213.02,
      "id": "part4"
    },
    {
      "time": 231.12,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\">\n        <h3>1. Hệ trục toạ độ trong không gian $Oxyz$</h3>\n        <p>• <b>Hệ trục toạ độ $Oxyz$</b> gồm ba trục số $Ox, Oy, Oz$ đôi một vuông góc với nhau tại gốc $O$.<br>\n        • $Ox$: trục hoành; $Oy$: trục tung; $Oz$: trục cao.<br>\n        • Các véc tơ đơn vị tương ứng: $\\vec{i}$ trên $Ox$, $\\vec{j}$ trên $Oy$, $\\vec{k}$ trên $Oz$.<br>\n        • Tính chất véc tơ đơn vị: $|\u000bec{i}| = |\u000bec{j}| = |\u000bec{k}| = 1$ và $\\vec{i} \\cdot \\vec{j} = \\vec{j} \\cdot \\vec{k} = \\vec{k} \\cdot \\vec{i} = 0$.</p>\n        \n      <div style=\"text-align:center; margin:12px 0;\">\n        <svg width=\"260\" height=\"180\" viewBox=\"0 0 260 180\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <!-- Trục Oz thẳng đứng -->\n          <line x1=\"100\" y1=\"120\" x2=\"100\" y2=\"20\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrB)\"/>\n          <!-- Trục Oy nằm ngang -->\n          <line x1=\"100\" y1=\"120\" x2=\"230\" y2=\"120\" stroke=\"#34d399\" stroke-width=\"2\" marker-end=\"url(#arrG)\"/>\n          <!-- Trục Ox xiên chéo ra trước -->\n          <line x1=\"100\" y1=\"120\" x2=\"35\" y2=\"165\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#arrR)\"/>\n          <!-- Vector đơn vị k trên Oz -->\n          <line x1=\"100\" y1=\"120\" x2=\"100\" y2=\"70\" stroke=\"#fbbf24\" stroke-width=\"3\" marker-end=\"url(#arrY)\"/>\n          <!-- Vector đơn vị j trên Oy -->\n          <line x1=\"100\" y1=\"120\" x2=\"155\" y2=\"120\" stroke=\"#fbbf24\" stroke-width=\"3\" marker-end=\"url(#arrY)\"/>\n          <!-- Vector đơn vị i trên Ox -->\n          <line x1=\"100\" y1=\"120\" x2=\"60\" y2=\"148\" stroke=\"#fbbf24\" stroke-width=\"3\" marker-end=\"url(#arrY)\"/>\n          <!-- Ký hiệu góc vuông tại O -->\n          <rect x=\"100\" y=\"105\" width=\"12\" height=\"15\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1\"/>\n          <!-- Nhãn -->\n          <text x=\"82\" y=\"130\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">O</text>\n          <text x=\"96\" y=\"15\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">z</text>\n          <text x=\"235\" y=\"125\" fill=\"#34d399\" font-size=\"14\" font-weight=\"bold\">y</text>\n          <text x=\"22\" y=\"172\" fill=\"#f43f5e\" font-size=\"14\" font-weight=\"bold\">x</text>\n          <text x=\"105\" y=\"65\" fill=\"#fbbf24\" font-size=\"13\" font-style=\"italic\" font-weight=\"bold\">k&#x20D7;</text>\n          <text x=\"150\" y=\"112\" fill=\"#fbbf24\" font-size=\"13\" font-style=\"italic\" font-weight=\"bold\">j&#x20D7;</text>\n          <text x=\"68\" y=\"145\" fill=\"#fbbf24\" font-size=\"13\" font-style=\"italic\" font-weight=\"bold\">i&#x20D7;</text>\n        </svg>\n        <div style=\"font-size:13px; color:#94a3b8; margin-top:4px;\">Hệ trục toạ độ Đề-các vuông góc $Oxyz$ và các véc tơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$</div>\n      </div>\n    \n      </div>\n      <div id=\"part2\">\n        <h3>2. Các mặt phẳng toạ độ</h3>\n        <p>• <b>Mặt phẳng $(Oxy)$</b>: chứa $Ox$ và $Oy$, vuông góc với $Oz$. Phương trình: $z = 0$.<br>\n        • <b>Mặt phẳng $(Oyz)$</b>: chứa $Oy$ và $Oz$, vuông góc với $Ox$. Phương trình: $x = 0$.<br>\n        • <b>Mặt phẳng $(Ozx)$</b>: chứa $Oz$ và $Ox$, vuông góc với $Oy$. Phương trình: $y = 0$.<br>\n        • Ba mặt phẳng tọa độ chia không gian thành 8 góc phần tám.</p>\n        \n      <div style=\"text-align:center; margin:12px 0;\">\n        <svg width=\"260\" height=\"180\" viewBox=\"0 0 260 180\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <!-- Mặt phẳng (Oxy) đáy -->\n          <polygon points=\"100,120 200,120 150,155 50,155\" fill=\"rgba(56,189,248,0.2)\" stroke=\"#38bdf8\" stroke-width=\"1\"/>\n          <!-- Mặt phẳng (Oyz) bên phải -->\n          <polygon points=\"100,120 200,120 200,50 100,50\" fill=\"rgba(52,211,153,0.18)\" stroke=\"#34d399\" stroke-width=\"1\"/>\n          <!-- Mặt phẳng (Ozx) bên trái -->\n          <polygon points=\"100,120 50,155 50,85 100,50\" fill=\"rgba(244,63,94,0.18)\" stroke=\"#f43f5e\" stroke-width=\"1\"/>\n          <!-- Các trục -->\n          <line x1=\"100\" y1=\"120\" x2=\"100\" y2=\"20\" stroke=\"#f8fafc\" stroke-width=\"2\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"100\" y1=\"120\" x2=\"230\" y2=\"120\" stroke=\"#f8fafc\" stroke-width=\"2\" marker-end=\"url(#arrG)\"/>\n          <line x1=\"100\" y1=\"120\" x2=\"35\" y2=\"165\" stroke=\"#f8fafc\" stroke-width=\"2\" marker-end=\"url(#arrR)\"/>\n          <text x=\"85\" y=\"130\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">O</text>\n          <text x=\"96\" y=\"15\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">z</text>\n          <text x=\"235\" y=\"125\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">y</text>\n          <text x=\"22\" y=\"172\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">x</text>\n          <!-- Tên 3 mặt phẳng -->\n          <text x=\"125\" y=\"145\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">(Oxy): z=0</text>\n          <text x=\"155\" y=\"85\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\">(Oyz): x=0</text>\n          <text x=\"42\" y=\"115\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">(Ozx): y=0</text>\n        </svg>\n        <div style=\"font-size:13px; color:#94a3b8; margin-top:4px;\">Ba mặt phẳng tọa độ: $(Oxy)$ (khuyết $z$), $(Oyz)$ (khuyết $x$), $(Ozx)$ (khuyết $y$)</div>\n      </div>\n    \n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ rèn luyện</h3></div>\n\n      <!-- Ví dụ 1 -->\n      <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n        <div id=\"vd1_q\">\n          <b style=\"color:#38bdf8;\">Ví dụ 1:</b> Trong không gian $Oxyz$, tính tích vô hướng $\\vec{i} \\cdot \\vec{j}, \\vec{j} \\cdot \\vec{k}, \\vec{k} \\cdot \\vec{i}$ và tính $\\vec{i}^2$.<br>\n          <i>(Thời gian suy nghĩ: 15 giây)</i>\n        </div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          Do ba véc tơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$ đôi một vuông góc nên:<br>\n          $$\\vec{i} \\cdot \\vec{j} = 0, \\quad \\vec{j} \\cdot \\vec{k} = 0, \\quad \\vec{k} \\cdot \\vec{i} = 0$$<br>\n          Vì $|\u000bec{i}| = 1$ nên bình phương vô hướng: $\\vec{i}^2 = |\\vec{i}|^2 = 1^2 = 1$.\n        </div>\n      </div>\n\n      <!-- Ví dụ 2 -->\n      <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n        <div id=\"vd2_q\">\n          <b style=\"color:#38bdf8;\">Ví dụ 2:</b> Điểm $A$ nằm trên trục hoành $Ox$, điểm $B$ nằm trong mặt phẳng toạ độ $(Oxy)$. Những toạ độ nào của $A$ và $B$ chắc chắn bằng $0$?<br>\n          <i>(Thời gian suy nghĩ: 15 giây)</i>\n        </div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải:</b><br>\n          • Điểm $A \\in Ox$ thì tung độ $y = 0$ và cao độ $z = 0 \\implies A(x; 0; 0)$.<br>\n          • Điểm $B \\in (Oxy)$ thì cao độ $z = 0 \\implies B(x; y; 0)$.\n        </div>\n      </div>\n\n      <!-- Ví dụ 3 -->\n      <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n        <div id=\"vd3_q\">\n          <b style=\"color:#38bdf8;\">Ví dụ 3:</b> Cho hình lập phương $OABC.O'A'B'C'$ có gốc $O$, các đỉnh $A, C, O'$ lần lượt nằm trên các tia $Ox, Oy, Oz$. Mặt phẳng chứa đáy $OABC$ là mặt phẳng tọa độ nào?<br>\n          \n      <div style=\"text-align:center; margin:10px 0;\">\n        <svg width=\"240\" height=\"160\" viewBox=\"0 0 240 160\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <!-- Các trục tọa độ -->\n          <line x1=\"80\" y1=\"110\" x2=\"80\" y2=\"20\" stroke=\"#38bdf8\" stroke-width=\"1.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"80\" y1=\"110\" x2=\"200\" y2=\"110\" stroke=\"#34d399\" stroke-width=\"1.5\" marker-end=\"url(#arrG)\"/>\n          <line x1=\"80\" y1=\"110\" x2=\"30\" y2=\"145\" stroke=\"#f43f5e\" stroke-width=\"1.5\" marker-end=\"url(#arrR)\"/>\n          <!-- Khối lập phương OABC.O'A'B'C' -->\n          <line x1=\"80\" y1=\"110\" x2=\"50\" y2=\"130\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n          <line x1=\"80\" y1=\"110\" x2=\"150\" y2=\"110\" stroke=\"#34d399\" stroke-width=\"2.5\"/>\n          <line x1=\"80\" y1=\"110\" x2=\"80\" y2=\"45\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n          <polygon points=\"50,130 120,130 150,110\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n          <polygon points=\"80,45 150,45 120,65 50,65\" fill=\"rgba(56,189,248,0.15)\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n          <line x1=\"50\" y1=\"130\" x2=\"50\" y2=\"65\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n          <line x1=\"120\" y1=\"130\" x2=\"120\" y2=\"65\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n          <line x1=\"150\" y1=\"110\" x2=\"150\" y2=\"45\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n          <text x=\"70\" y=\"118\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">O</text>\n          <text x=\"35\" y=\"138\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">A</text>\n          <text x=\"120\" y=\"142\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n          <text x=\"155\" y=\"115\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\">C</text>\n          <text x=\"68\" y=\"42\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">O'</text>\n          <text x=\"155\" y=\"42\" fill=\"#f8fafc\" font-size=\"12\">C'</text>\n        </svg>\n      </div>\n    \n          <i>(Thời gian suy nghĩ: 15 giây)</i>\n        </div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải:</b><br>\n          Đáy $OABC$ chứa gốc $O$, điểm $A \\in Ox$ và điểm $C \\in Oy$. Do đó mặt phẳng chứa đáy $OABC$ chính là mặt phẳng toạ độ $(Oxy)$.\n        </div>\n      </div>\n\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Học sinh thường nhầm mặt phẳng toạ độ: Mặt phẳng $(Oxy)$ có $z=0$; mặt phẳng $(Oyz)$ có $x=0$; mặt phẳng $(Ozx)$ có $y=0$. Quy tắc vàng: <b>Khuyết chữ nào thì chữ đó bằng $0$!</b></p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Thuộc trục nào thì chỉ giữ biến đó, các biến khác bằng $0$. Thuộc mặt phẳng nào thì giữ hai biến đó, biến còn lại bằng $0$!</p></div>\n    ",
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
      "partTitle": "Phần 2: Công thức cốt lõi & Tọa độ",
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
      "title": "BÀI 7: HỆ TRỤC TỌA ĐỘ TRONG KHÔNG GIAN",
      "subtitle": "PHẦN 1: HỆ TRỤC TỌA ĐỘ Oxyz",
      "startTime": 0.0,
      "endTime": 50.42,
      "duration": 50.42,
      "mascotMode": "pointer",
      "mascotTip": "Hệ Oxyz gồm ba trục Ox, Oy, Oz đôi một vuông góc. Độ dài ba véc tơ đơn vị i, j, k đều bằng 1!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Hệ trục toạ độ $Oxyz$ trong không gian</div>\n      <div style=\"text-align:center; margin:12px 0;\">\n        <svg width=\"260\" height=\"180\" viewBox=\"0 0 260 180\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <!-- Trục Oz thẳng đứng -->\n          <line x1=\"100\" y1=\"120\" x2=\"100\" y2=\"20\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrB)\"/>\n          <!-- Trục Oy nằm ngang -->\n          <line x1=\"100\" y1=\"120\" x2=\"230\" y2=\"120\" stroke=\"#34d399\" stroke-width=\"2\" marker-end=\"url(#arrG)\"/>\n          <!-- Trục Ox xiên chéo ra trước -->\n          <line x1=\"100\" y1=\"120\" x2=\"35\" y2=\"165\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#arrR)\"/>\n          <!-- Vector đơn vị k trên Oz -->\n          <line x1=\"100\" y1=\"120\" x2=\"100\" y2=\"70\" stroke=\"#fbbf24\" stroke-width=\"3\" marker-end=\"url(#arrY)\"/>\n          <!-- Vector đơn vị j trên Oy -->\n          <line x1=\"100\" y1=\"120\" x2=\"155\" y2=\"120\" stroke=\"#fbbf24\" stroke-width=\"3\" marker-end=\"url(#arrY)\"/>\n          <!-- Vector đơn vị i trên Ox -->\n          <line x1=\"100\" y1=\"120\" x2=\"60\" y2=\"148\" stroke=\"#fbbf24\" stroke-width=\"3\" marker-end=\"url(#arrY)\"/>\n          <!-- Ký hiệu góc vuông tại O -->\n          <rect x=\"100\" y=\"105\" width=\"12\" height=\"15\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1\"/>\n          <!-- Nhãn -->\n          <text x=\"82\" y=\"130\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">O</text>\n          <text x=\"96\" y=\"15\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">z</text>\n          <text x=\"235\" y=\"125\" fill=\"#34d399\" font-size=\"14\" font-weight=\"bold\">y</text>\n          <text x=\"22\" y=\"172\" fill=\"#f43f5e\" font-size=\"14\" font-weight=\"bold\">x</text>\n          <text x=\"105\" y=\"65\" fill=\"#fbbf24\" font-size=\"13\" font-style=\"italic\" font-weight=\"bold\">k&#x20D7;</text>\n          <text x=\"150\" y=\"112\" fill=\"#fbbf24\" font-size=\"13\" font-style=\"italic\" font-weight=\"bold\">j&#x20D7;</text>\n          <text x=\"68\" y=\"145\" fill=\"#fbbf24\" font-size=\"13\" font-style=\"italic\" font-weight=\"bold\">i&#x20D7;</text>\n        </svg>\n        <div style=\"font-size:13px; color:#94a3b8; margin-top:4px;\">Hệ trục toạ độ Đề-các vuông góc $Oxyz$ và các véc tơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$</div>\n      </div>\n    "
    },
    {
      "sceneIndex": 2,
      "title": "CÁC MẶT PHẲNG TỌA ĐỘ",
      "subtitle": "PHẦN 2: (Oxy), (Oyz), (Ozx)",
      "startTime": 50.42,
      "endTime": 85.61,
      "duration": 35.19,
      "mascotMode": "pointer",
      "mascotTip": "Quy tắc khuyết chữ: (Oxy) khuyết z -> z=0; (Oyz) khuyết x -> x=0; (Ozx) khuyết y -> y=0!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Ba mặt phẳng toạ độ</div>\n      <div style=\"text-align:center; margin:12px 0;\">\n        <svg width=\"260\" height=\"180\" viewBox=\"0 0 260 180\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <!-- Mặt phẳng (Oxy) đáy -->\n          <polygon points=\"100,120 200,120 150,155 50,155\" fill=\"rgba(56,189,248,0.2)\" stroke=\"#38bdf8\" stroke-width=\"1\"/>\n          <!-- Mặt phẳng (Oyz) bên phải -->\n          <polygon points=\"100,120 200,120 200,50 100,50\" fill=\"rgba(52,211,153,0.18)\" stroke=\"#34d399\" stroke-width=\"1\"/>\n          <!-- Mặt phẳng (Ozx) bên trái -->\n          <polygon points=\"100,120 50,155 50,85 100,50\" fill=\"rgba(244,63,94,0.18)\" stroke=\"#f43f5e\" stroke-width=\"1\"/>\n          <!-- Các trục -->\n          <line x1=\"100\" y1=\"120\" x2=\"100\" y2=\"20\" stroke=\"#f8fafc\" stroke-width=\"2\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"100\" y1=\"120\" x2=\"230\" y2=\"120\" stroke=\"#f8fafc\" stroke-width=\"2\" marker-end=\"url(#arrG)\"/>\n          <line x1=\"100\" y1=\"120\" x2=\"35\" y2=\"165\" stroke=\"#f8fafc\" stroke-width=\"2\" marker-end=\"url(#arrR)\"/>\n          <text x=\"85\" y=\"130\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">O</text>\n          <text x=\"96\" y=\"15\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">z</text>\n          <text x=\"235\" y=\"125\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">y</text>\n          <text x=\"22\" y=\"172\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">x</text>\n          <!-- Tên 3 mặt phẳng -->\n          <text x=\"125\" y=\"145\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">(Oxy): z=0</text>\n          <text x=\"155\" y=\"85\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\">(Oyz): x=0</text>\n          <text x=\"42\" y=\"115\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">(Ozx): y=0</text>\n        </svg>\n        <div style=\"font-size:13px; color:#94a3b8; margin-top:4px;\">Ba mặt phẳng tọa độ: $(Oxy)$ (khuyết $z$), $(Oyz)$ (khuyết $x$), $(Ozx)$ (khuyết $y$)</div>\n      </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: TÍCH VÔ HƯỚNG CÁC VÉC TƠ ĐƠN VỊ",
      "subtitle": "TÍNH CHẤT CỦA i, j, k",
      "startTime": 85.61,
      "endTime": 110.09,
      "duration": 24.48,
      "mascotMode": "pointer",
      "mascotTip": "Các véc tơ đơn vị đôi một vuông góc nên tích vô hướng từng cặp bằng 0. i² = |i|² = 1!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Trong không gian $Oxyz$, tính tích vô hướng $\\vec{i} \\cdot \\vec{j}, \\vec{j} \\cdot \\vec{k}, \\vec{k} \\cdot \\vec{i}$ và tính $\\vec{i}^2$.<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "TÍCH VÔ HƯỚNG BẰNG 0",
      "startTime": 110.09,
      "endTime": 134.16,
      "duration": 24.07,
      "mascotMode": "pointer",
      "mascotTip": "i . j = j . k = k . i = 0 và i² = 1!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd1_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 1:</b><br>• Do $\\vec{i}, \\vec{j}, \\vec{k}$ đôi một vuông góc nên: $\\vec{i} \\cdot \\vec{j} = 0, \\; \\vec{j} \\cdot \\vec{k} = 0, \\; \\vec{k} \\cdot \\vec{i} = 0$.<br>• Bình phương vô hướng: $\\vec{i}^2 = |\\vec{i}|^2 = 1^2 = 1$.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: ĐIỂM THUỘC TRỤC & MẶT PHẲNG TỌA ĐỘ",
      "subtitle": "TỌA ĐỘ BẰNG 0",
      "startTime": 134.16,
      "endTime": 151.49,
      "duration": 17.33,
      "mascotMode": "pointer",
      "mascotTip": "Thuộc trục Ox khuyết y, z -> y=0, z=0. Thuộc (Oxy) khuyết z -> z=0!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Điểm $A$ nằm trên trục hoành $Ox$, điểm $B$ nằm trong mặt phẳng toạ độ $(Oxy)$. Những toạ độ nào của $A$ và $B$ chắc chắn bằng $0$?<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI",
      "subtitle": "A(x; 0; 0) & B(x; y; 0)",
      "startTime": 151.49,
      "endTime": 172.99,
      "duration": 21.5,
      "mascotMode": "cheer",
      "mascotTip": "A(x; 0; 0) và B(x; y; 0)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd2_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 2:</b><br>• $A \\in Ox \\implies y = 0$ và $z = 0 \\implies \\mathbf{A(x; 0; 0)}$.<br>• $B \\in (Oxy) \\implies z = 0 \\implies \\mathbf{B(x; y; 0)}$.</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: HÌNH LẬP PHƯƠNG GỐC O",
      "subtitle": "XÁC ĐỊNH MẶT PHẲNG ĐÁY",
      "startTime": 172.99,
      "endTime": 197.69,
      "duration": 24.7,
      "mascotMode": "pointer",
      "mascotTip": "Đáy OABC chứa gốc O, tia Ox và tia Oy -> đó chính là mặt phẳng (Oxy)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Cho hình lập phương $OABC.O'A'B'C'$ có đỉnh $O$ trùng gốc tọa độ, các đỉnh $A, C, O'$ lần lượt nằm trên các tia $Ox, Oy, Oz$. Mặt phẳng chứa mặt đáy $OABC$ là mặt phẳng tọa độ nào?\n      <div style=\"text-align:center; margin:10px 0;\">\n        <svg width=\"240\" height=\"160\" viewBox=\"0 0 240 160\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <!-- Các trục tọa độ -->\n          <line x1=\"80\" y1=\"110\" x2=\"80\" y2=\"20\" stroke=\"#38bdf8\" stroke-width=\"1.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"80\" y1=\"110\" x2=\"200\" y2=\"110\" stroke=\"#34d399\" stroke-width=\"1.5\" marker-end=\"url(#arrG)\"/>\n          <line x1=\"80\" y1=\"110\" x2=\"30\" y2=\"145\" stroke=\"#f43f5e\" stroke-width=\"1.5\" marker-end=\"url(#arrR)\"/>\n          <!-- Khối lập phương OABC.O'A'B'C' -->\n          <line x1=\"80\" y1=\"110\" x2=\"50\" y2=\"130\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n          <line x1=\"80\" y1=\"110\" x2=\"150\" y2=\"110\" stroke=\"#34d399\" stroke-width=\"2.5\"/>\n          <line x1=\"80\" y1=\"110\" x2=\"80\" y2=\"45\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n          <polygon points=\"50,130 120,130 150,110\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n          <polygon points=\"80,45 150,45 120,65 50,65\" fill=\"rgba(56,189,248,0.15)\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n          <line x1=\"50\" y1=\"130\" x2=\"50\" y2=\"65\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n          <line x1=\"120\" y1=\"130\" x2=\"120\" y2=\"65\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n          <line x1=\"150\" y1=\"110\" x2=\"150\" y2=\"45\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n          <text x=\"70\" y=\"118\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">O</text>\n          <text x=\"35\" y=\"138\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">A</text>\n          <text x=\"120\" y=\"142\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n          <text x=\"155\" y=\"115\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\">C</text>\n          <text x=\"68\" y=\"42\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">O'</text>\n          <text x=\"155\" y=\"42\" fill=\"#f8fafc\" font-size=\"12\">C'</text>\n        </svg>\n      </div>\n    <div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI",
      "subtitle": "MẶT PHẲNG (Oxy)",
      "startTime": 197.69,
      "endTime": 213.02,
      "duration": 15.33,
      "mascotMode": "pointer",
      "mascotTip": "Mặt đáy OABC chính là mặt phẳng toạ độ (Oxy)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd3_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 3:</b><br>Mặt đáy $OABC$ chứa điểm $O$, cạnh $OA \\subset Ox$ và $OC \\subset Oy$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> Mặt phẳng chứa mặt đáy $OABC$ là <b>$(Oxy)$</b>.</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI: PHƯƠNG TRÌNH MẶT PHẲNG TỌA ĐỘ",
      "subtitle": "PHẦN 4: KHUYẾT CHỮ NÀO BẰNG 0 CHỮ ĐÓ",
      "startTime": 213.02,
      "endTime": 231.12,
      "duration": 18.1,
      "mascotMode": "magnifier",
      "mascotTip": "(Oxy) có z=0; (Oyz) có x=0; (Ozx) có y=0. Khuyết chữ nào chữ đó bằng 0!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi mặt phẳng toạ độ:</span><br>• Mặt phẳng $(Oxy)$ có phương trình là $z = 0$.<br>• Mặt phẳng $(Oyz)$ có phương trình là $x = 0$.<br>• Mặt phẳng $(Ozx)$ có phương trình là $y = 0$.<br>Quy tắc: <b>Khuyết chữ nào thì biến đó bằng $0$!</b></div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: KHẨU QUYẾT TỌA ĐỘ VÀNG",
      "startTime": 231.12,
      "endTime": 245.09,
      "duration": 13.97,
      "mascotMode": "cheer",
      "mascotTip": "Thuộc trục giữ 1 biến; thuộc mặt giữ 2 biến; biến khuyết cho bằng 0!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Khẩu quyết vàng Thầy Cú:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">• <b>Thuộc trục:</b> Chỉ giữ biến của trục đó, 2 biến còn lại bằng $0$ (VD: $M \\in Oz \\implies M(0; 0; z)$).<br>• <b>Thuộc mặt:</b> Giữ 2 biến của mặt phẳng đó, biến khuyết bằng $0$ (VD: $N \\in (Oyz) \\implies N(0; y; z)$).</div>"
    }
  ]
};

window.CHAPTER2_DATA.bai7_muc2 = {
  "lessonId": "bai7",
  "lessonTitle": "Bài 7: Hệ trục toạ độ trong không gian",
  "sectionId": "bai7_muc2",
  "sectionTitle": "Mục 2: Toạ độ của điểm & Toạ độ của véc tơ",
  "audio": "/audio/bai7_muc2.mp3",
  "audioSrc": "./audio/bai7_muc2.mp3",
  "audio_src": "./audio/bai7_muc2.mp3",
  "timestamp_src": "timestamps/bai7_muc2.json",
  "totalDuration": 261.02,
  "duration": 261.02,
  "title": "Mục 2: Toạ độ của điểm và toạ độ của véc tơ trong không gian",
  "owl_tip": "u = x i + y j + z k <=> u = (x; y; z). Véc tơ AB lấy ngọn B trừ gốc A!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 39.22,
      "id": "part2"
    },
    {
      "time": 77.95,
      "id": "part3"
    },
    {
      "time": 80.74,
      "id": "vd1_q"
    },
    {
      "time": 104.09,
      "id": "vd1_a"
    },
    {
      "time": 128.3,
      "id": "vd2_q"
    },
    {
      "time": 147.67,
      "id": "vd2_a"
    },
    {
      "time": 182.18,
      "id": "vd3_q"
    },
    {
      "time": 203.86,
      "id": "vd3_a"
    },
    {
      "time": 227.62,
      "id": "part4"
    },
    {
      "time": 249.14,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\">\n        <h3>1. Toạ độ của véc tơ trong không gian</h3>\n        <p>• Trong không gian $Oxyz$, mỗi véc tơ $\\vec{u}$ đều được phân tích duy nhất:<br>\n        $$\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\iff \\vec{u} = (x; y; z)$$<br>\n        • Hai véc tơ bằng nhau: $\\vec{u}(x; y; z) = \\vec{v}(x'; y'; z') \\iff x = x', y = y', z = z'$.</p>\n      </div>\n      <div id=\"part2\">\n        <h3>2. Toạ độ của điểm trong không gian</h3>\n        \n      <div style=\"text-align:center; margin:12px 0;\">\n        <svg width=\"260\" height=\"180\" viewBox=\"0 0 260 180\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <!-- Trục tọa độ -->\n          <line x1=\"90\" y1=\"120\" x2=\"90\" y2=\"20\" stroke=\"#64748b\" stroke-width=\"1.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"90\" y1=\"120\" x2=\"225\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"1.5\" marker-end=\"url(#arrG)\"/>\n          <line x1=\"90\" y1=\"120\" x2=\"30\" y2=\"165\" stroke=\"#64748b\" stroke-width=\"1.5\" marker-end=\"url(#arrR)\"/>\n          <!-- Hình hộp xác định điểm M(x, y, z) -->\n          <line x1=\"90\" y1=\"120\" x2=\"55\" y2=\"145\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n          <line x1=\"90\" y1=\"120\" x2=\"165\" y2=\"120\" stroke=\"#34d399\" stroke-width=\"2\"/>\n          <line x1=\"90\" y1=\"120\" x2=\"90\" y2=\"60\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n          <!-- Đường gióng nét đứt -->\n          <line x1=\"55\" y1=\"145\" x2=\"130\" y2=\"145\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n          <line x1=\"165\" y1=\"120\" x2=\"130\" y2=\"145\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n          <line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n          <line x1=\"90\" y1=\"60\" x2=\"130\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n          <!-- Véc tơ OM -->\n          <line x1=\"90\" y1=\"120\" x2=\"126\" y2=\"88\" stroke=\"#fbbf24\" stroke-width=\"3\" marker-end=\"url(#arrY)\"/>\n          <circle cx=\"130\" cy=\"85\" r=\"3.5\" fill=\"#fbbf24\"/>\n          <text x=\"76\" y=\"125\" fill=\"#f8fafc\" font-size=\"12\">O</text>\n          <text x=\"96\" y=\"22\" fill=\"#38bdf8\" font-size=\"12\">z</text>\n          <text x=\"228\" y=\"125\" fill=\"#34d399\" font-size=\"12\">y</text>\n          <text x=\"22\" y=\"170\" fill=\"#f43f5e\" font-size=\"12\">x</text>\n          <text x=\"135\" y=\"80\" fill=\"#fbbf24\" font-size=\"14\" font-weight=\"bold\">M(x; y; z)</text>\n          <text x=\"135\" y=\"152\" fill=\"#94a3b8\" font-size=\"11\">M'(x; y; 0)</text>\n        </svg>\n        <div style=\"font-size:13px; color:#fde047; font-weight:bold; margin-top:4px;\">$\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\iff M(x; y; z)$</div>\n      </div>\n    \n        <p>• Toạ độ điểm $M$: $M(x; y; z) \\iff \\vec{OM} = (x; y; z)$ ($x$: hoành độ, $y$: tung độ, $z$: cao độ).<br>\n        • <b>Toạ độ véc tơ $\\vec{AB}$:</b> Lấy ngọn trừ gốc:<br>\n        $$\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$$<br>\n        • <b>Trung điểm $I$ của đoạn $AB$:</b> $x_I = \\frac{x_A+x_B}{2}, y_I = \\frac{y_A+y_B}{2}, z_I = \\frac{z_A+z_B}{2}$.<br>\n        • <b>Trọng tâm $G$ của tam giác $ABC$:</b> $x_G = \\frac{x_A+x_B+x_C}{3}, y_G = \\frac{y_A+y_B+y_C}{3}, z_G = \\frac{z_A+z_B+z_C}{3}$.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ áp dụng</h3></div>\n\n      <!-- Ví dụ 1 -->\n      <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n        <div id=\"vd1_q\">\n          <b style=\"color:#38bdf8;\">Ví dụ 1:</b> Cho $\\vec{a} = 2\\vec{i} - 3\\vec{j} + \\vec{k}$ và $\\vec{b} = \\vec{i} - 4\\vec{k}$. Tìm toạ độ của $\\vec{a}$ và $\\vec{b}$.<br>\n          <i>(Thời gian suy nghĩ: 20 giây)</i>\n        </div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          • $\\vec{a} = 2\\vec{i} - 3\\vec{j} + 1\\vec{k} \\implies \\mathbf{\\vec{a} = (2; -3; 1)}.<br>\n          • $\\vec{b} = 1\\vec{i} + 0\\vec{j} - 4\\vec{k}$ (khuyết $\\vec{j}$) $\\implies \\mathbf{\\vec{b} = (1; 0; -4)}$.\n        </div>\n      </div>\n\n      <!-- Ví dụ 2 -->\n      <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n        <div id=\"vd2_q\">\n          <b style=\"color:#38bdf8;\">Ví dụ 2:</b> Cho $A(1; -2; 3)$ và $B(3; 0; -1)$. Tìm toạ độ $\\vec{AB}$ và toạ độ trung điểm $M$ của $AB$.<br>\n          \n      <div style=\"text-align:center; margin:10px 0;\">\n        <svg width=\"240\" height=\"110\" viewBox=\"0 0 240 110\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <line x1=\"30\" y1=\"80\" x2=\"200\" y2=\"30\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n          <circle cx=\"30\" cy=\"80\" r=\"3.5\" fill=\"#38bdf8\"/>\n          <circle cx=\"205\" cy=\"28\" r=\"3.5\" fill=\"#38bdf8\"/>\n          <!-- Trung điểm M -->\n          <circle cx=\"118\" cy=\"54\" r=\"4\" fill=\"#f43f5e\"/>\n          <text x=\"15\" y=\"95\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A(1; -2; 3)</text>\n          <text x=\"190\" y=\"22\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">B(3; 0; -1)</text>\n          <text x=\"105\" y=\"44\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">M(2; -1; 1)</text>\n        </svg>\n        <div style=\"color:#94a3b8; font-size:12px; margin-top:2px;\">$\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A) = (2; 2; -4)$</div>\n      </div>\n    \n          <i>(Thời gian suy nghĩ: 20 giây)</i>\n        </div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải:</b><br>\n          • $\\vec{AB} = (3-1; 0 - (-2); -1 - 3) = \\mathbf{(2; 2; -4)}.<br>\n          • Trung điểm $M$: $x_M = \\frac{1+3}{2}=2, y_M = \\frac{-2+0}{2}=-1, z_M = \\frac{3+(-1)}{2}=1 \\implies \\mathbf{M(2; -1; 1)}$.\n        </div>\n      </div>\n\n      <!-- Ví dụ 3 -->\n      <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n        <div id=\"vd3_q\">\n          <b style=\"color:#38bdf8;\">Ví dụ 3:</b> Cho tam giác $ABC$ với $A(1; 0; 2), B(-2; 1; 3), C(4; 2; -2)$. Tìm toạ độ trọng tâm $G$ của tam giác $ABC$.<br>\n          \n      <div style=\"text-align:center; margin:10px 0;\">\n        <svg width=\"220\" height=\"120\" viewBox=\"0 0 220 120\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          <polygon points=\"110,15 35,95 185,95\" fill=\"rgba(56,189,248,0.15)\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n          <!-- Đường trung tuyến -->\n          <line x1=\"110\" y1=\"15\" x2=\"110\" y2=\"95\" stroke=\"#64748b\" stroke-width=\"1\" stroke-dasharray=\"3\"/>\n          <circle cx=\"110\" cy=\"68\" r=\"4\" fill=\"#facc15\"/>\n          <text x=\"105\" y=\"12\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A</text>\n          <text x=\"18\" y=\"105\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">B</text>\n          <text x=\"190\" y=\"105\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">C</text>\n          <text x=\"120\" y=\"72\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\">G(1; 1; 1)</text>\n        </svg>\n      </div>\n    \n          <i>(Thời gian suy nghĩ: 15 giây)</i>\n        </div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải:</b><br>\n          Tọa độ trọng tâm $G$ bằng trung bình cộng tọa độ 3 đỉnh:<br>\n          $x_G = \\frac{1 + (-2) + 4}{3} = 1; \\quad y_G = \\frac{0 + 1 + 2}{3} = 1; \\quad z_G = \\frac{2 + 3 + (-2)}{3} = 1$<br>\n          $\\implies \\mathbf{G(1; 1; 1)}$.\n        </div>\n      </div>\n\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Bẫy khuyết véc tơ đơn vị: $\\vec{b} = \\vec{i} - 4\\vec{k}$ khuyết $\\vec{j}$ nên tung độ $y=0$, viết thành $(1; 0; -4)$. Đừng nhầm thành $(1; -4; 0)$!</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Khẩu quyết: Véc tơ $\\vec{AB}$ lấy ngọn $B$ trừ gốc $A$; Trung điểm cộng đôi chia hai; Trọng tâm cộng ba chia ba!</p></div>\n    ",
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
      "partTitle": "Phần 2: Công thức cốt lõi & Tọa độ",
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
      "title": "TỌA ĐỘ CỦA VÉC TƠ TRONG KHÔNG GIAN",
      "subtitle": "PHẦN 1: ĐỊNH NGHĨA TỌA ĐỘ VÉC TƠ",
      "startTime": 0.0,
      "endTime": 39.22,
      "duration": 39.22,
      "mascotMode": "pointer",
      "mascotTip": "u = x i + y j + z k <=> u = (x; y; z)!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Toạ độ của véc tơ trong không gian</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• Trong không gian $Oxyz$, mỗi véc tơ $\\vec{u}$ luôn phân tích duy nhất:<br>&emsp;$$\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\iff \\mathbf{\\vec{u} = (x; y; z)}$$<br>• Hai véc tơ bằng nhau $\\iff$ Các toạ độ tương ứng bằng nhau.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "TỌA ĐỘ CỦA ĐIỂM TRONG KHÔNG GIAN",
      "subtitle": "PHẦN 2: OM = (x; y; z) <=> M(x; y; z)",
      "startTime": 39.22,
      "endTime": 80.74,
      "duration": 41.52,
      "mascotMode": "pointer",
      "mascotTip": "Véc tơ AB lấy ngọn B trừ gốc A. Trung điểm cộng đôi chia hai!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Toạ độ của điểm trong không gian</div>\n      <div style=\"text-align:center; margin:12px 0;\">\n        <svg width=\"260\" height=\"180\" viewBox=\"0 0 260 180\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <!-- Trục tọa độ -->\n          <line x1=\"90\" y1=\"120\" x2=\"90\" y2=\"20\" stroke=\"#64748b\" stroke-width=\"1.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"90\" y1=\"120\" x2=\"225\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"1.5\" marker-end=\"url(#arrG)\"/>\n          <line x1=\"90\" y1=\"120\" x2=\"30\" y2=\"165\" stroke=\"#64748b\" stroke-width=\"1.5\" marker-end=\"url(#arrR)\"/>\n          <!-- Hình hộp xác định điểm M(x, y, z) -->\n          <line x1=\"90\" y1=\"120\" x2=\"55\" y2=\"145\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n          <line x1=\"90\" y1=\"120\" x2=\"165\" y2=\"120\" stroke=\"#34d399\" stroke-width=\"2\"/>\n          <line x1=\"90\" y1=\"120\" x2=\"90\" y2=\"60\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n          <!-- Đường gióng nét đứt -->\n          <line x1=\"55\" y1=\"145\" x2=\"130\" y2=\"145\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n          <line x1=\"165\" y1=\"120\" x2=\"130\" y2=\"145\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n          <line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n          <line x1=\"90\" y1=\"60\" x2=\"130\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n          <!-- Véc tơ OM -->\n          <line x1=\"90\" y1=\"120\" x2=\"126\" y2=\"88\" stroke=\"#fbbf24\" stroke-width=\"3\" marker-end=\"url(#arrY)\"/>\n          <circle cx=\"130\" cy=\"85\" r=\"3.5\" fill=\"#fbbf24\"/>\n          <text x=\"76\" y=\"125\" fill=\"#f8fafc\" font-size=\"12\">O</text>\n          <text x=\"96\" y=\"22\" fill=\"#38bdf8\" font-size=\"12\">z</text>\n          <text x=\"228\" y=\"125\" fill=\"#34d399\" font-size=\"12\">y</text>\n          <text x=\"22\" y=\"170\" fill=\"#f43f5e\" font-size=\"12\">x</text>\n          <text x=\"135\" y=\"80\" fill=\"#fbbf24\" font-size=\"14\" font-weight=\"bold\">M(x; y; z)</text>\n          <text x=\"135\" y=\"152\" fill=\"#94a3b8\" font-size=\"11\">M'(x; y; 0)</text>\n        </svg>\n        <div style=\"font-size:13px; color:#fde047; font-weight:bold; margin-top:4px;\">$\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\iff M(x; y; z)$</div>\n      </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: XÁC ĐỊNH TỌA ĐỘ VÉC TƠ",
      "subtitle": "PHÂN TÍCH THEO i, j, k",
      "startTime": 80.74,
      "endTime": 104.09,
      "duration": 23.35,
      "mascotMode": "pointer",
      "mascotTip": "b = i - 4k khuyết j nên tung độ bằng 0 -> b = (1; 0; -4)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Cho $\\vec{a} = 2\\vec{i} - 3\\vec{j} + \\vec{k}$ và $\\vec{b} = \\vec{i} - 4\\vec{k}$. Tìm toạ độ của $\\vec{a}$ và $\\vec{b}$.<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "CHÚ Ý THÀNH PHẦN KHUYẾT",
      "startTime": 104.09,
      "endTime": 128.3,
      "duration": 24.21,
      "mascotMode": "pointer",
      "mascotTip": "a = (2; -3; 1) và b = (1; 0; -4)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd1_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 1:</b><br>• $\\vec{a} = 2\\vec{i} - 3\\vec{j} + 1\\vec{k} \\implies \\mathbf{\\vec{a} = (2; -3; 1)}.<br>• $\\vec{b} = 1\\vec{i} + 0\\vec{j} - 4\\vec{k} \\implies \\mathbf{\\vec{b} = (1; 0; -4)}$.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: VÉC TƠ AB VÀ TRUNG ĐIỂM",
      "subtitle": "NGỌN TRỪ GỐC & TRUNG BÌNH CỘNG",
      "startTime": 128.3,
      "endTime": 147.67,
      "duration": 19.37,
      "mascotMode": "pointer",
      "mascotTip": "AB lấy B trừ A. Trung điểm M lấy (A+B)/2!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Cho $A(1; -2; 3)$ và $B(3; 0; -1)$. Tìm toạ độ $\\vec{AB}$ và toạ độ trung điểm $M$ của $AB$.\n      <div style=\"text-align:center; margin:10px 0;\">\n        <svg width=\"240\" height=\"110\" viewBox=\"0 0 240 110\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <line x1=\"30\" y1=\"80\" x2=\"200\" y2=\"30\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n          <circle cx=\"30\" cy=\"80\" r=\"3.5\" fill=\"#38bdf8\"/>\n          <circle cx=\"205\" cy=\"28\" r=\"3.5\" fill=\"#38bdf8\"/>\n          <!-- Trung điểm M -->\n          <circle cx=\"118\" cy=\"54\" r=\"4\" fill=\"#f43f5e\"/>\n          <text x=\"15\" y=\"95\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A(1; -2; 3)</text>\n          <text x=\"190\" y=\"22\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">B(3; 0; -1)</text>\n          <text x=\"105\" y=\"44\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">M(2; -1; 1)</text>\n        </svg>\n        <div style=\"color:#94a3b8; font-size:12px; margin-top:2px;\">$\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A) = (2; 2; -4)$</div>\n      </div>\n    <div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI",
      "subtitle": "AB = (2; 2; -4) & M(2; -1; 1)",
      "startTime": 147.67,
      "endTime": 182.18,
      "duration": 34.51,
      "mascotMode": "cheer",
      "mascotTip": "AB = (2; 2; -4) và M(2; -1; 1)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd2_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 2:</b><br>• $\\vec{AB} = (3-1; 0 - (-2); -1 - 3) = \\mathbf{(2; 2; -4)}.<br>• $M = \\left(\\frac{1+3}{2}; \\frac{-2+0}{2}; \\frac{3+(-1)}{2}\\right) = \\mathbf{M(2; -1; 1)}$.</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: TRỌNG TÂM TAM GIÁC ABC",
      "subtitle": "CỘNG BA CHIA BA",
      "startTime": 182.18,
      "endTime": 203.86,
      "duration": 21.68,
      "mascotMode": "pointer",
      "mascotTip": "G = (A + B + C) / 3!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Cho tam giác $ABC$ với $A(1; 0; 2), B(-2; 1; 3), C(4; 2; -2)$. Tìm toạ độ trọng tâm $G$ của tam giác $ABC$.\n      <div style=\"text-align:center; margin:10px 0;\">\n        <svg width=\"220\" height=\"120\" viewBox=\"0 0 220 120\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          <polygon points=\"110,15 35,95 185,95\" fill=\"rgba(56,189,248,0.15)\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n          <!-- Đường trung tuyến -->\n          <line x1=\"110\" y1=\"15\" x2=\"110\" y2=\"95\" stroke=\"#64748b\" stroke-width=\"1\" stroke-dasharray=\"3\"/>\n          <circle cx=\"110\" cy=\"68\" r=\"4\" fill=\"#facc15\"/>\n          <text x=\"105\" y=\"12\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A</text>\n          <text x=\"18\" y=\"105\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">B</text>\n          <text x=\"190\" y=\"105\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">C</text>\n          <text x=\"120\" y=\"72\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\">G(1; 1; 1)</text>\n        </svg>\n      </div>\n    <div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI",
      "subtitle": "G(1; 1; 1)",
      "startTime": 203.86,
      "endTime": 227.62,
      "duration": 23.76,
      "mascotMode": "pointer",
      "mascotTip": "G = ((1-2+4)/3; (0+1+2)/3; (2+3-2)/3) = G(1; 1; 1)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd3_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 3:</b><br>$x_G = \\frac{1-2+4}{3} = 1; \\quad y_G = \\frac{0+1+2}{3} = 1; \\quad z_G = \\frac{2+3-2}{3} = 1$<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>G(1; 1; 1)</b>.</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI: VÉC TƠ KHUYẾT THÀNH PHẦN",
      "subtitle": "PHẦN 4: ĐỪNG NHẦM THỨ TỰ TỌA ĐỘ",
      "startTime": 227.62,
      "endTime": 249.14,
      "duration": 21.52,
      "mascotMode": "magnifier",
      "mascotTip": "Thành phần gắn với i là x, với j là y, với k là z. Khuyết véc tơ nào gán số 0 vào vị trí đó!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi tọa độ véc tơ:</span><br>Khi véc tơ khuyết $\\vec{j}$, ví dụ $\\vec{b} = \\vec{i} - 4\\vec{k}$, học sinh hay viết $(1; -4; 0)$ là <b>HOÀN TOÀN SAI</b>! Vị trí thứ 2 là tung độ $y$ đi với $\\vec{j}$, phải viết đúng là <b>$(1; 0; -4)$</b>!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: KHẨU QUYẾT TỌA ĐỘ",
      "startTime": 249.14,
      "endTime": 261.02,
      "duration": 11.88,
      "mascotMode": "cheer",
      "mascotTip": "Véc tơ ngọn trừ gốc; Trung điểm cộng đôi chia hai; Trọng tâm cộng ba chia ba!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Khẩu quyết vàng Thầy Cú:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">• <b>Véc tơ $\\vec{AB}$:</b> Lấy ngọn $B$ trừ gốc $A$.<br>• <b>Trung điểm:</b> Cộng đôi chia hai.<br>• <b>Trọng tâm:</b> Cộng ba chia ba!</div>"
    }
  ]
};

window.CHAPTER2_DATA.bai7_muc3 = {
  "lessonId": "bai7",
  "lessonTitle": "Bài 7: Hệ trục toạ độ trong không gian",
  "sectionId": "bai7_muc3",
  "sectionTitle": "Mục 3: Biểu thức toạ độ của các phép toán véc tơ",
  "audio": "/audio/bai7_muc3.mp3",
  "audioSrc": "./audio/bai7_muc3.mp3",
  "audio_src": "./audio/bai7_muc3.mp3",
  "timestamp_src": "timestamps/bai7_muc3.json",
  "totalDuration": 246.26,
  "duration": 246.26,
  "title": "Mục 3: Biểu thức toạ độ của các phép toán véc tơ, tích vô hướng & khoảng cách",
  "owl_tip": "u . v = xx' + yy' + zz'. Hai véc tơ vuông góc khi và chỉ khi tích vô hướng bằng 0!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 36.82,
      "id": "part2"
    },
    {
      "time": 80.4,
      "id": "part3"
    },
    {
      "time": 83.21,
      "id": "vd1_q"
    },
    {
      "time": 104.06,
      "id": "vd1_a"
    },
    {
      "time": 133.39,
      "id": "vd2_q"
    },
    {
      "time": 149.3,
      "id": "vd2_a"
    },
    {
      "time": 174.46,
      "id": "vd3_q"
    },
    {
      "time": 196.75,
      "id": "vd3_a"
    },
    {
      "time": 213.96,
      "id": "part4"
    },
    {
      "time": 231.82,
      "id": "part5"
    }
  ],
  "content": "\n      <div id=\"part1\">\n        <h3>1. Biểu thức toạ độ các phép toán véc tơ</h3>\n        <p>Cho $\\vec{u} = (x; y; z)$ và $\\vec{v} = (x'; y'; z')$:<br>\n        • $\\vec{u} + \\vec{v} = (x+x'; y+y'; z+z')$<br>\n        • $\\vec{u} - \\vec{v} = (x-x'; y-y'; z-z')$<br>\n        • $k\\vec{u} = (kx; ky; kz)$ ($k \\in \\mathbb{R}$)<br>\n        • Hai véc tơ cùng phương: $\\vec{v} = k\\vec{u} \\iff \\frac{x'}{x} = \\frac{y'}{y} = \\frac{z'}{z} = k$ (khi mẫu số khác $0$).</p>\n      </div>\n      <div id=\"part2\">\n        <h3>2. Tích vô hướng, độ dài & khoảng cách</h3>\n        \n      <div style=\"text-align:center; margin:12px 0;\">\n        <svg width=\"250\" height=\"140\" viewBox=\"0 0 250 140\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <!-- Khối hộp chữ nhật minh họa khoảng cách AB -->\n          <polygon points=\"40,95 130,95 170,120 80,120\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <polygon points=\"40,35 130,35 170,60 80,60\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"40\" y1=\"95\" x2=\"40\" y2=\"35\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"130\" y1=\"95\" x2=\"130\" y2=\"35\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"170\" y1=\"120\" x2=\"170\" y2=\"60\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"80\" y1=\"120\" x2=\"80\" y2=\"60\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <!-- Đoạn thẳng AB là đường chéo khối hộp -->\n          <line x1=\"40\" y1=\"95\" x2=\"170\" y2=\"60\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"4\" marker-end=\"url(#arrR)\"/>\n          <circle cx=\"40\" cy=\"95\" r=\"3.5\" fill=\"#38bdf8\"/>\n          <circle cx=\"170\" cy=\"60\" r=\"3.5\" fill=\"#f43f5e\"/>\n          <text x=\"24\" y=\"105\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A</text>\n          <text x=\"175\" y=\"62\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">B</text>\n          <text x=\"100\" y=\"70\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">d(A, B)</text>\n        </svg>\n        <div style=\"color:#fde047; font-size:13px; font-weight:bold; margin-top:4px;\">$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$</div>\n      </div>\n    \n        <p>• <b>Tích vô hướng:</b> $\\vec{u} \\cdot \\vec{v} = x x' + y y' + z z'$ (hoành nhân hoành + tung nhân tung + cao nhân cao).<br>\n        • <b>Độ dài véc tơ:</b> $|\\vec{u}| = \\sqrt{x^2 + y^2 + z^2}$.<br>\n        • <b>Khoảng cách giữa hai điểm:</b> $AB = |\\vec{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$.<br>\n        • <b>Góc giữa hai véc tơ:</b> $\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\frac{x x' + y y' + z z'}{\\sqrt{x^2+y^2+z^2}\\sqrt{x'^2+y'^2+z'^2}}$.<br>\n        • <b>Điều kiện vuông góc:</b> $\\vec{u} \\perp \\vec{v} \\iff x x' + y y' + z z' = 0$.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ rèn luyện</h3></div>\n\n      <!-- Ví dụ 1 -->\n      <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n        <div id=\"vd1_q\">\n          <b style=\"color:#38bdf8;\">Ví dụ 1:</b> Cho $\\vec{u} = (1; -2; 2)$ và $\\vec{v} = (3; 0; -4)$. Tính $|\\vec{u}|, |\\vec{v}|$ và tích vô hướng $\\vec{u} \\cdot \\vec{v}$.<br>\n          <i>(Thời gian suy nghĩ: 20 giây)</i>\n        </div>\n        <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải chi tiết:</b><br>\n          • $|\\vec{u}| = \\sqrt{1^2 + (-2)^2 + 2^2} = \\sqrt{9} = \\mathbf{3}.<br>\n          • $|\\vec{v}| = \\sqrt{3^2 + 0^2 + (-4)^2} = \\sqrt{25} = \\mathbf{5}.<br>\n          • $\\vec{u} \\cdot \\vec{v} = 1 \\cdot 3 + (-2) \\cdot 0 + 2 \\cdot (-4) = 3 + 0 - 8 = \\mathbf{-5}$.\n        </div>\n      </div>\n\n      <!-- Ví dụ 2 -->\n      <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n        <div id=\"vd2_q\">\n          <b style=\"color:#38bdf8;\">Ví dụ 2:</b> Cho hai điểm $A(2; -1; 3)$ và $B(4; 1; 2)$. Tính khoảng cách giữa hai điểm $A$ và $B$.<br>\n          <i>(Thời gian suy nghĩ: 15 giây)</i>\n        </div>\n        <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải:</b><br>\n          $$AB = \\sqrt{(4 - 2)^2 + (1 - (-1))^2 + (2 - 3)^2} = \\sqrt{2^2 + 2^2 + (-1)^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = \\mathbf{3}.$$\n        </div>\n      </div>\n\n      <!-- Ví dụ 3 -->\n      <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n        <div id=\"vd3_q\">\n          <b style=\"color:#38bdf8;\">Ví dụ 3:</b> Cho $\\vec{a} = (1; 2; m)$ và $\\vec{b} = (4; -2; 1)$. Tìm giá trị của $m$ để $\\vec{a} \\perp \\vec{b}$.<br>\n          \n      <div style=\"text-align:center; margin:10px 0;\">\n        <svg width=\"200\" height=\"110\" viewBox=\"0 0 200 110\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <line x1=\"40\" y1=\"85\" x2=\"160\" y2=\"85\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"40\" y1=\"85\" x2=\"40\" y2=\"20\" stroke=\"#34d399\" stroke-width=\"2.5\" marker-end=\"url(#arrG)\"/>\n          <rect x=\"40\" y=\"70\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n          <text x=\"22\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\">O</text>\n          <text x=\"165\" y=\"90\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">\\vec{a}</text>\n          <text x=\"35\" y=\"15\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\">\\vec{b}</text>\n        </svg>\n        <div style=\"color:#34d399; font-size:12px; font-weight:bold; margin-top:2px;\">$\\vec{a} \\perp \\vec{b} \\iff 1 \\cdot 4 + 2 \\cdot (-2) + m \\cdot 1 = 0 \\iff m = 0$</div>\n      </div>\n    \n          <i>(Thời gian suy nghĩ: 20 giây)</i>\n        </div>\n        <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b>Lời giải:</b><br>\n          Hai véc tơ vuông góc khi và chỉ khi tích vô hướng bằng $0$:<br>\n          $$\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0 \\iff 1 \\cdot 4 + 2 \\cdot (-2) + m \\cdot 1 = 0 \\iff 4 - 4 + m = 0 \\iff \\mathbf{m = 0}.$$\n        </div>\n      </div>\n\n      <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Tích vô hướng là một <b>số thực</b>, không phải là véc tơ! Khi tính độ dài véc tơ hoặc khoảng cách, đừng bao giờ quên dấu căn bậc hai.</p></div>\n      <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Tích vô hướng: Hoành nhân hoành cộng tung nhân tung cộng cao nhân cao. Cứ thấy vuông góc thì cho tổng bằng $0$!</p></div>\n    ",
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
      "partTitle": "Phần 2: Công thức cốt lõi & Tọa độ",
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
      "title": "CÁC PHÉP TOÁN VÉC TƠ THEO TỌA ĐỘ",
      "subtitle": "PHẦN 1: CỘNG, TRỪ VÀ NHÂN VỚI MỘT SỐ",
      "startTime": 0.0,
      "endTime": 36.82,
      "duration": 36.82,
      "mascotMode": "pointer",
      "mascotTip": "Cộng trừ theo từng tọa độ: x±x', y±y', z±z'. Nhân với số k: kx, ky, kz!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Phép toán véc tơ theo toạ độ</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>Cho $\\vec{u} = (x; y; z)$ và $\\vec{v} = (x'; y'; z')$:<br>• $\\vec{u} + \\vec{v} = (x+x'; y+y'; z+z')$<br>• $\\vec{u} - \\vec{v} = (x-x'; y-y'; z-z')$<br>• $k\\vec{u} = (kx; ky; kz)$<br>• Cùng phương: $\\frac{x'}{x} = \\frac{y'}{y} = \\frac{z'}{z} = k$.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "TÍCH VÔ HƯỚNG & KHOẢNG CÁCH",
      "subtitle": "PHẦN 2: CÔNG THỨC TÍNH ĐỘ DÀI VÀ GÓC",
      "startTime": 36.82,
      "endTime": 83.21,
      "duration": 46.39,
      "mascotMode": "pointer",
      "mascotTip": "u . v = xx' + yy' + zz'. Vuông góc <=> u . v = 0!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Tích vô hướng, độ dài & khoảng cách</div>\n      <div style=\"text-align:center; margin:12px 0;\">\n        <svg width=\"250\" height=\"140\" viewBox=\"0 0 250 140\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <!-- Khối hộp chữ nhật minh họa khoảng cách AB -->\n          <polygon points=\"40,95 130,95 170,120 80,120\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <polygon points=\"40,35 130,35 170,60 80,60\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"40\" y1=\"95\" x2=\"40\" y2=\"35\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"130\" y1=\"95\" x2=\"130\" y2=\"35\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"170\" y1=\"120\" x2=\"170\" y2=\"60\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"80\" y1=\"120\" x2=\"80\" y2=\"60\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <!-- Đoạn thẳng AB là đường chéo khối hộp -->\n          <line x1=\"40\" y1=\"95\" x2=\"170\" y2=\"60\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"4\" marker-end=\"url(#arrR)\"/>\n          <circle cx=\"40\" cy=\"95\" r=\"3.5\" fill=\"#38bdf8\"/>\n          <circle cx=\"170\" cy=\"60\" r=\"3.5\" fill=\"#f43f5e\"/>\n          <text x=\"24\" y=\"105\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A</text>\n          <text x=\"175\" y=\"62\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">B</text>\n          <text x=\"100\" y=\"70\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">d(A, B)</text>\n        </svg>\n        <div style=\"color:#fde047; font-size:13px; font-weight:bold; margin-top:4px;\">$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$</div>\n      </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: ĐỘ DÀI & TÍCH VÔ HƯỚNG",
      "subtitle": "TÍNH TOÁN CƠ BẢN",
      "startTime": 83.21,
      "endTime": 104.06,
      "duration": 20.85,
      "mascotMode": "pointer",
      "mascotTip": "|u| = sqrt(1² + (-2)² + 2²) = 3. |v| = 5. u . v = 3 + 0 - 8 = -5!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Cho $\\vec{u} = (1; -2; 2)$ và $\\vec{v} = (3; 0; -4)$. Tính $|\\vec{u}|, |\\vec{v}|$ và tích vô hướng $\\vec{u} \\cdot \\vec{v}$.<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "|u| = 3, |v| = 5, u . v = -5",
      "startTime": 104.06,
      "endTime": 133.39,
      "duration": 29.33,
      "mascotMode": "pointer",
      "mascotTip": "|u| = 3, |v| = 5, u . v = -5!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd1_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 1:</b><br>• $|\\vec{u}| = \\sqrt{1^2 + (-2)^2 + 2^2} = \\sqrt{9} = \\mathbf{3}.<br>• $|\\vec{v}| = \\sqrt{3^2 + 0^2 + (-4)^2} = \\sqrt{25} = \\mathbf{5}.<br>• $\\vec{u} \\cdot \\vec{v} = 1 \\cdot 3 + (-2) \\cdot 0 + 2 \\cdot (-4) = 3 + 0 - 8 = \\mathbf{-5}$.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: KHOẢNG CÁCH GIỮA HAI ĐIỂM",
      "subtitle": "CÔNG THỨC PYTHAGORE 3D",
      "startTime": 133.39,
      "endTime": 149.3,
      "duration": 15.91,
      "mascotMode": "pointer",
      "mascotTip": "AB = sqrt( (4-2)² + (1+1)² + (2-3)² ) = sqrt(4+4+1) = 3!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Cho hai điểm $A(2; -1; 3)$ và $B(4; 1; 2)$. Tính khoảng cách giữa hai điểm $A$ và $B$.<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI",
      "subtitle": "AB = 3",
      "startTime": 149.3,
      "endTime": 174.46,
      "duration": 25.16,
      "mascotMode": "cheer",
      "mascotTip": "Khoảng cách AB = 3!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd2_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 2:</b><br>$$AB = \\sqrt{(4-2)^2 + (1-(-1))^2 + (2-3)^2} = \\sqrt{2^2 + 2^2 + (-1)^2} = \\sqrt{9} = \\mathbf{3}.$$</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: TÌM THAM SỐ ĐỂ HAI VÉC TƠ VUÔNG GÓC",
      "subtitle": "ĐIỀU KIỆN a . b = 0",
      "startTime": 174.46,
      "endTime": 196.75,
      "duration": 22.29,
      "mascotMode": "pointer",
      "mascotTip": "1 . 4 + 2 . (-2) + m . 1 = 0 <=> 4 - 4 + m = 0 <=> m = 0!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Cho $\\vec{a} = (1; 2; m)$ và $\\vec{b} = (4; -2; 1)$. Tìm giá trị của $m$ để $\\vec{a} \\perp \\vec{b}$.\n      <div style=\"text-align:center; margin:10px 0;\">\n        <svg width=\"200\" height=\"110\" viewBox=\"0 0 200 110\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <line x1=\"40\" y1=\"85\" x2=\"160\" y2=\"85\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"40\" y1=\"85\" x2=\"40\" y2=\"20\" stroke=\"#34d399\" stroke-width=\"2.5\" marker-end=\"url(#arrG)\"/>\n          <rect x=\"40\" y=\"70\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n          <text x=\"22\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\">O</text>\n          <text x=\"165\" y=\"90\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">\\vec{a}</text>\n          <text x=\"35\" y=\"15\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\">\\vec{b}</text>\n        </svg>\n        <div style=\"color:#34d399; font-size:12px; font-weight:bold; margin-top:2px;\">$\\vec{a} \\perp \\vec{b} \\iff 1 \\cdot 4 + 2 \\cdot (-2) + m \\cdot 1 = 0 \\iff m = 0$</div>\n      </div>\n    <div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI",
      "subtitle": "m = 0",
      "startTime": 196.75,
      "endTime": 213.96,
      "duration": 17.21,
      "mascotMode": "pointer",
      "mascotTip": "Tích vô hướng bằng 0 -> m = 0!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd3_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 3:</b><br>$$\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0 \\iff 1 \\cdot 4 + 2 \\cdot (-2) + m \\cdot 1 = 0 \\iff 4 - 4 + m = 0 \\iff \\mathbf{m = 0}.$$</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI: TÍCH VÔ HƯỚNG RA SỐ THỰC",
      "subtitle": "PHẦN 4: ĐỪNG QUÊN DẤU CĂN BẬC HAI",
      "startTime": 213.96,
      "endTime": 231.82,
      "duration": 17.86,
      "mascotMode": "magnifier",
      "mascotTip": "Tích vô hướng là một số, không phải véc tơ! Độ dài và khoảng cách bắt buộc phải có căn bậc hai!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi tích vô hướng & độ dài:</span><br>• Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ là một <b>SỐ THỰC</b> (có thể âm, dương hoặc bằng $0$). Tuyệt đối không viết thành dạng toạ độ véc tơ!<br>• Khi tính độ dài véc tơ hoặc khoảng cách $AB$, luôn nhớ <b>lấy căn bậc hai</b>!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: CÔNG CỤ VÀNG CHỨNG MINH VUÔNG GÓC",
      "startTime": 231.82,
      "endTime": 246.26,
      "duration": 14.44,
      "mascotMode": "cheer",
      "mascotTip": "Hoành nhân hoành cộng tung nhân tung cộng cao nhân cao. Cứ vuông góc cho bằng 0!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Khẩu quyết vàng Thầy Cú:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">• <b>Tích vô hướng:</b> $x x' + y y' + z z'$.<br>• <b>Vuông góc:</b> $x x' + y y' + z z' = 0$.<br>• <b>Cùng phương:</b> $\\frac{x}{x'} = \\frac{y}{y'} = \\frac{z}{z'}$.</div>"
    }
  ]
};


window.CHAPTER2_DATA.ontap_c2_muc1 = {
  "lessonId": "ontap_c2",
  "lessonTitle": "Ôn tập Chương 2: Vectơ & Hệ toạ độ Oxyz",
  "sectionId": "ontap_c2_muc1",
  "sectionTitle": "Mục 1: Hệ thống hoá kiến thức trọng tâm",
  "audio": "/audio/ontap_c2_muc1.mp3",
  "audioSrc": "./audio/ontap_c2_muc1.mp3",
  "audio_src": "./audio/ontap_c2_muc1.mp3",
  "timestamp_src": "timestamps/ontap_c2_muc1.json",
  "totalDuration": 276.46,
  "duration": 276.46,
  "title": "Mục 1: Hệ thống hoá kiến thức trọng tâm Chương 2",
  "owl_tip": "Nắm vững quy tắc hình hộp, tích vô hướng và các biểu thức tọa độ cơ bản!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 37.94,
      "id": "part2"
    },
    {
      "time": 84.12,
      "id": "part3"
    },
    {
      "time": 108.89,
      "id": "vd1_q"
    },
    {
      "time": 129.67,
      "id": "vd1_a"
    },
    {
      "time": 148.99,
      "id": "vd2_q"
    },
    {
      "time": 167.86,
      "id": "vd2_a"
    },
    {
      "time": 191.59,
      "id": "vd3_q"
    },
    {
      "time": 213.5,
      "id": "vd3_a"
    },
    {
      "time": 238.8,
      "id": "part4"
    },
    {
      "time": 264.48,
      "id": "part5"
    }
  ],
  "content": "\n        <div id=\"part1\">\n          <h3>1. Khái niệm vectơ trong không gian</h3>\n          <p>• Vectơ trong không gian là đoạn thẳng có hướng: $\\vec{a}, \\vec{b}, \\vec{AB}$.<br>\n          • Hai vectơ cùng phương khi giá của chúng song song hoặc trùng nhau.<br>\n          • Hai vectơ bằng nhau khi cùng hướng và cùng độ dài.</p>\n        </div>\n        <div id=\"part2\">\n          <h3>2. Các quy tắc vectơ hình học</h3>\n          <p>• <b>Quy tắc 3 điểm:</b> $\\vec{AB} + \\vec{BC} = \\vec{AC}$<br>\n          • <b>Quy tắc Hình bình hành:</b> $\\vec{AB} + \\vec{AD} = \\vec{AC}$<br>\n          • <b>Quy tắc Hình hộp:</b> $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$</p>\n        </div>\n        <div id=\"part3\">\n          <h3>3. Ví dụ rèn luyện</h3>\n        </div>\n        <div id=\"vd1_q\">\n          <p><b>Ví dụ 1:</b> Rút gọn $\\vec{AB} + \\vec{AD} + \\vec{AA'}$ trong hình hộp $ABCD.A'B'C'D'$.</p>\n        </div>\n        <div id=\"vd1_a\">\n          <p><b>Lời giải:</b> Áp dụng quy tắc hình hộp: tổng ba cạnh chung gốc bằng đường chéo $\\vec{AC'}$.</p>\n        </div>\n        <div id=\"vd2_q\">\n          <p><b>Ví dụ 2:</b> Cho $|\\vec{u}|=3, |\\vec{v}|=4, (\\vec{u}, \\vec{v})=120^\\circ$. Tính $\\vec{u} \\cdot \\vec{v}$.</p>\n        </div>\n        <div id=\"vd2_a\">\n          <p><b>Lời giải:</b> $\\vec{u} \\cdot \\vec{v} = 3 \\cdot 4 \\cdot \\cos 120^\\circ = -6$.</p>\n        </div>\n        <div id=\"vd3_q\">\n          <p><b>Ví dụ 3:</b> Cho $\\vec{u}=(1; -2; 2), \\vec{v}=(-2; 1; m)$. Tìm $m$ để $\\vec{u} \\perp \\vec{v}$.</p>\n        </div>\n        <div id=\"vd3_a\">\n          <p><b>Lời giải:</b> $\\vec{u} \\cdot \\vec{v} = 1(-2) + (-2)(1) + 2m = 0 \\implies m = 2$.</p>\n        </div>\n        <div id=\"part4\">\n          <h3>4. Bẫy đề thi</h3>\n          <p>Góc giữa hai đường thẳng luôn $\\le 90^\\circ$. Góc giữa hai vectơ có thể lên tới $180^\\circ$!</p>\n        </div>\n        <div id=\"part5\">\n          <h3>5. Mẹo Thầy Cú</h3>\n          <p>Hình hộp ba cạnh cộng lại ra đường chéo. Tích vô hướng bằng 0 chứng minh vuông góc!</p>\n        </div>\n        ",
  "parts": [
    { "partNumber": 1, "partTitle": "Phần 1: Khái niệm & Hệ thống kiến thức", "scenes": [1] },
    { "partNumber": 2, "partTitle": "Phần 2: Nguyên lý & Các quy tắc cốt lõi", "scenes": [2] },
    { "partNumber": 3, "partTitle": "Phần 3: Rèn luyện 3 ví dụ kinh điển", "scenes": [3, 4, 5, 6, 7, 8] },
    { "partNumber": 4, "partTitle": "Phần 4: Bẫy đề thi hay gặp", "scenes": [9] },
    { "partNumber": 5, "partTitle": "Phần 5: Kỹ thuật Casio & Mẹo Thầy Cú", "scenes": [10] }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "ÔN TẬP CHƯƠNG 2: VECTƠ & HỆ TỌA ĐỘ",
      "subtitle": "PHẦN 1: HỆ THỐNG KIẾN THỨC TRỌNG TÂM",
      "startTime": 0.0,
      "endTime": 37.94,
      "duration": 37.94,
      "mascotMode": "welcome",
      "mascotTip": "Nắm chắc lý thuyết vectơ trong không gian để giải quyết bài toán hình học và tọa độ!",
      "bodyHtml": "\n        <div style=\"font-size:17px; line-height:1.65; color:#e2e8f0;\">\n          <b style=\"color:#38bdf8;\">1. Định nghĩa vectơ trong không gian:</b><br>\n          • Vectơ là một đoạn thẳng có hướng: ký hiệu $\\vec{a}, \\vec{b}$ hoặc $\\vec{AB}$ ($A$ là gốc, $B$ là ngọn).<br>\n          • Hai vectơ <b>cùng phương</b> khi giá của chúng song song hoặc trùng nhau.<br>\n          • Hai vectơ <b>bằng nhau</b> khi cùng hướng và cùng độ dài: $|\\vec{a}| = |\\vec{b}|$.\n        </div>\n        "
    },
    {
      "sceneIndex": 2,
      "title": "CÁC QUY TẮC HÌNH HỌC KINH ĐIỂN",
      "subtitle": "QUY TẮC 3 ĐIỂM, HÌNH BÌNH HÀNH & HÌNH HỘP",
      "startTime": 37.94,
      "endTime": 84.12,
      "duration": 46.18,
      "mascotMode": "think",
      "mascotTip": "Quy tắc hình hộp là mở rộng 3 chiều của quy tắc hình bình hành!",
      "bodyHtml": "\n        <div style=\"font-size:16px; line-height:1.6; color:#e2e8f0;\">\n          • <b>Quy tắc 3 điểm:</b> $\\vec{AB} + \\vec{BC} = \\vec{AC}$<br>\n          • <b>Quy tắc Hình bình hành:</b> $\\vec{AB} + \\vec{AD} = \\vec{AC}$<br>\n          • <b>Quy tắc Hình hộp:</b> $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$ (đường chéo).<br>\n          • <b>Trung điểm & Trọng tâm:</b> $M$ là trung điểm $AB \\implies \\vec{OA} + \\vec{OB} = 2\\vec{OM}$; $G$ là trọng tâm $\\triangle ABC \\implies \\vec{OA} + \\vec{OB} + \\vec{OC} = 3\\vec{OG}$.\n        </div>\n        \n    <div style=\"text-align:center; margin:12px 0;\">\n      <svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n        \n    <defs>\n      <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n      <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n      <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n      <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n    </defs>\n    \n        <line x1=\"50\" y1=\"120\" x2=\"110\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3\"/>\n        <line x1=\"50\" y1=\"120\" x2=\"80\" y2=\"85\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3\"/>\n        <line x1=\"50\" y1=\"120\" x2=\"50\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3\"/>\n        <line x1=\"110\" y1=\"120\" x2=\"140\" y2=\"85\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"80\" y1=\"85\" x2=\"140\" y2=\"85\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"110\" y1=\"120\" x2=\"110\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"80\" y1=\"85\" x2=\"80\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"140\" y1=\"85\" x2=\"140\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"50\" y1=\"60\" x2=\"110\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"110\" y1=\"60\" x2=\"140\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"140\" y1=\"25\" x2=\"80\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"80\" y1=\"25\" x2=\"50\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"50\" y1=\"120\" x2=\"105\" y2=\"120\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n        <line x1=\"50\" y1=\"120\" x2=\"76\" y2=\"90\" stroke=\"#34d399\" stroke-width=\"2.5\" marker-end=\"url(#arrG)\"/>\n        <line x1=\"50\" y1=\"120\" x2=\"50\" y2=\"65\" stroke=\"#fbbf24\" stroke-width=\"2.5\" marker-end=\"url(#arrY)\"/>\n        <line x1=\"50\" y1=\"120\" x2=\"135\" y2=\"29\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"4\" marker-end=\"url(#arrR)\"/>\n        <text x=\"36\" y=\"128\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">A</text>\n        <text x=\"114\" y=\"128\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">B</text>\n        <text x=\"144\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">C</text>\n        <text x=\"82\" y=\"80\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">D</text>\n        <text x=\"36\" y=\"58\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">A'</text>\n        <text x=\"144\" y=\"22\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">C'</text>\n      </svg>\n      <div style=\"font-size:12px; color:#cbd5e1; margin-top:4px;\">Quy tắc hình hộp: $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$</div>\n    </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "TÍCH VÔ HƯỚNG & ĐIỀU KIỆN VUÔNG GÓC",
      "subtitle": "CÔNG CỤ TÍNH GÓC VÀ ĐỘ DÀI",
      "startTime": 84.12,
      "endTime": 108.89,
      "duration": 24.77,
      "mascotMode": "magnifier",
      "mascotTip": "Tích vô hướng bằng 0 là chìa khóa chứng minh hai vectơ vuông góc!",
      "bodyHtml": "\n        <div style=\"font-size:16px; line-height:1.6; color:#e2e8f0;\">\n          • <b>Tích vô hướng:</b> $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cos(\\vec{u}, \\vec{v})$.<br>\n          • <b>Hai vectơ vuông góc:</b> $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$.<br>\n          • <b>Góc giữa hai vectơ:</b> $\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|}$ ($0^\\circ \\le (\\vec{u}, \\vec{v}) \\le 180^\\circ$).\n        </div>\n        \n    <div style=\"text-align:center; margin:12px 0;\">\n      <svg width=\"220\" height=\"130\" viewBox=\"0 0 220 130\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n        \n    <defs>\n      <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n      <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n      <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n      <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n    </defs>\n    \n        <line x1=\"70\" y1=\"95\" x2=\"180\" y2=\"95\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n        <line x1=\"70\" y1=\"95\" x2=\"20\" y2=\"35\" stroke=\"#34d399\" stroke-width=\"2.5\" marker-end=\"url(#arrG)\"/>\n        <path d=\"M 100 95 A 30 30 0 0 0 50 70\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n        <text x=\"75\" y=\"70\" fill=\"#fbbf24\" font-size=\"11\">120°</text>\n        <text x=\"185\" y=\"98\" fill=\"#38bdf8\" font-size=\"12\">v</text>\n        <text x=\"15\" y=\"30\" fill=\"#34d399\" font-size=\"12\">u</text>\n      </svg>\n      <div style=\"font-size:12px; color:#cbd5e1; margin-top:4px;\">$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cos 120^\\circ$</div>\n    </div>\n    "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: RÚT GỌN VECTƠ HÌNH HỘP",
      "subtitle": "ÁP DỤNG QUY TẮC ĐƯỜNG CHÉO",
      "startTime": 108.89,
      "endTime": 129.67,
      "duration": 20.78,
      "mascotMode": "think",
      "mascotTip": "Các vectơ xuất phát từ cùng đỉnh A gồm 2 cạnh đáy và 1 cạnh bên!",
      "bodyHtml": "\n        <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:6px; font-size:17px; color:#e2e8f0;\">\n          <b>Ví dụ 1:</b> Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Rút gọn tổng ba vectơ:<br>\n          $$\\vec{S} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$$\n        </div>\n        \n    <div style=\"text-align:center; margin:12px 0;\">\n      <svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n        \n    <defs>\n      <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n      <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n      <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n      <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n    </defs>\n    \n        <line x1=\"50\" y1=\"120\" x2=\"110\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3\"/>\n        <line x1=\"50\" y1=\"120\" x2=\"80\" y2=\"85\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3\"/>\n        <line x1=\"50\" y1=\"120\" x2=\"50\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3\"/>\n        <line x1=\"110\" y1=\"120\" x2=\"140\" y2=\"85\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"80\" y1=\"85\" x2=\"140\" y2=\"85\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"110\" y1=\"120\" x2=\"110\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"80\" y1=\"85\" x2=\"80\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"140\" y1=\"85\" x2=\"140\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"50\" y1=\"60\" x2=\"110\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"110\" y1=\"60\" x2=\"140\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"140\" y1=\"25\" x2=\"80\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"80\" y1=\"25\" x2=\"50\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"50\" y1=\"120\" x2=\"105\" y2=\"120\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n        <line x1=\"50\" y1=\"120\" x2=\"76\" y2=\"90\" stroke=\"#34d399\" stroke-width=\"2.5\" marker-end=\"url(#arrG)\"/>\n        <line x1=\"50\" y1=\"120\" x2=\"50\" y2=\"65\" stroke=\"#fbbf24\" stroke-width=\"2.5\" marker-end=\"url(#arrY)\"/>\n        <line x1=\"50\" y1=\"120\" x2=\"135\" y2=\"29\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"4\" marker-end=\"url(#arrR)\"/>\n        <text x=\"36\" y=\"128\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">A</text>\n        <text x=\"114\" y=\"128\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">B</text>\n        <text x=\"144\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">C</text>\n        <text x=\"82\" y=\"80\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">D</text>\n        <text x=\"36\" y=\"58\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">A'</text>\n        <text x=\"144\" y=\"22\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">C'</text>\n      </svg>\n      <div style=\"font-size:12px; color:#cbd5e1; margin-top:4px;\">Quy tắc hình hộp: $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$</div>\n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ ĐƯỜNG CHÉO AC'",
      "startTime": 129.67,
      "endTime": 148.99,
      "duration": 19.32,
      "mascotMode": "cheer",
      "mascotTip": "Chỉ cần 1 bước áp dụng trực tiếp quy tắc hình hộp!",
      "bodyHtml": "\n        <div style=\"font-size:17px; line-height:1.7; color:#e2e8f0;\">\n          <b style=\"color:#4ade80;\">Lời giải:</b><br>\n          • Hai vectơ đáy: $\\vec{AB} + \\vec{AD} = \\vec{AC}$ (theo quy tắc hình bình hành $ABCD$).<br>\n          • Cộng thêm cạnh bên: $\\vec{AC} + \\vec{AA'} = \\vec{AC'}$ (theo quy tắc hình bình hành $ACC'A'$).<br>\n          $$\\implies \\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$$\n        </div>\n        "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: TÍNH TÍCH VÔ HƯỚNG GÓC TÙ",
      "subtitle": "GÓC 120 ĐỘ & CÔ SIN ÂM",
      "startTime": 148.99,
      "endTime": 167.86,
      "duration": 18.87,
      "mascotMode": "think",
      "mascotTip": "Cẩn thận dấu âm khi góc giữa hai vectơ lớn hơn 90 độ!",
      "bodyHtml": "\n        <div style=\"background:rgba(251,191,36,0.1); border-left:4px solid #fbbf24; padding:12px; border-radius:6px; font-size:17px; color:#e2e8f0;\">\n          <b>Ví dụ 2:</b> Cho hai vectơ $\\vec{u}, \\vec{v}$ thỏa mãn $|\\vec{u}| = 3, |\\vec{v}| = 4$, và $(\\vec{u}, \\vec{v}) = 120^\\circ$.<br>\n          Tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$.\n        </div>\n        \n    <div style=\"text-align:center; margin:12px 0;\">\n      <svg width=\"220\" height=\"130\" viewBox=\"0 0 220 130\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n        \n    <defs>\n      <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n      <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n      <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n      <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n    </defs>\n    \n        <line x1=\"70\" y1=\"95\" x2=\"180\" y2=\"95\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n        <line x1=\"70\" y1=\"95\" x2=\"20\" y2=\"35\" stroke=\"#34d399\" stroke-width=\"2.5\" marker-end=\"url(#arrG)\"/>\n        <path d=\"M 100 95 A 30 30 0 0 0 50 70\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n        <text x=\"75\" y=\"70\" fill=\"#fbbf24\" font-size=\"11\">120°</text>\n        <text x=\"185\" y=\"98\" fill=\"#38bdf8\" font-size=\"12\">v</text>\n        <text x=\"15\" y=\"30\" fill=\"#34d399\" font-size=\"12\">u</text>\n      </svg>\n      <div style=\"font-size:12px; color:#cbd5e1; margin-top:4px;\">$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cos 120^\\circ$</div>\n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ TÍCH VÔ HƯỚNG ÂM",
      "startTime": 167.86,
      "endTime": 191.59,
      "duration": 23.73,
      "mascotMode": "cheer",
      "mascotTip": "Nhớ cos(120°) = -1/2!",
      "bodyHtml": "\n        <div style=\"font-size:17px; line-height:1.7; color:#e2e8f0;\">\n          <b style=\"color:#4ade80;\">Lời giải:</b><br>\n          $$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cos 120^\\circ = 3 \\cdot 4 \\cdot \\left(-\\frac{1}{2}\\right) = -6$$\n          <div style=\"color:#fbbf24; margin-top:8px;\">★ Lưu ý: Tích vô hướng có thể nhận giá trị âm khi góc tù!</div>\n        </div>\n        "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: TÌM THAM SỐ VUÔNG GÓC TOẠ ĐỘ",
      "subtitle": "ĐIỀU KIỆN TÍCH VÔ HƯỚNG BẰNG 0",
      "startTime": 191.59,
      "endTime": 213.5,
      "duration": 21.91,
      "mascotMode": "think",
      "mascotTip": "Hoành nhân hoành + Tung nhân tung + Cao nhân cao = 0!",
      "bodyHtml": "\n        <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:6px; font-size:17px; color:#e2e8f0;\">\n          <b>Ví dụ 3:</b> Trong không gian $Oxyz$, cho $\\vec{u} = (1; -2; 2)$ và $\\vec{v} = (-2; 1; m)$.<br>\n          Tìm $m$ để $\\vec{u} \\perp \\vec{v}$.\n        </div>\n        "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "GIẢI PHƯƠNG TRÌNH BẬC NHẤT",
      "startTime": 213.5,
      "endTime": 238.8,
      "duration": 25.3,
      "mascotMode": "cheer",
      "mascotTip": "Ra m = 2 nhanh chóng và chính xác tuyệt đối!",
      "bodyHtml": "\n        <div style=\"font-size:17px; line-height:1.7; color:#e2e8f0;\">\n          <b style=\"color:#4ade80;\">Lời giải:</b><br>\n          $$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$$\n          $$\\iff 1(-2) + (-2)(1) + 2(m) = 0$$\n          $$\\iff -2 - 2 + 2m = 0 \\iff 2m = 4 \\iff m = 2$$\n        </div>\n        "
    },
    {
      "sceneIndex": 10,
      "title": "BẪY ĐỀ THI & KHẨU QUYẾT THẦY CÚ",
      "subtitle": "PHẦN 4 & 5: KINH NGHIỆM PHÒNG THI",
      "startTime": 238.8,
      "endTime": 276.46,
      "duration": 37.66,
      "mascotMode": "alert",
      "mascotTip": "Góc 2 đường thẳng <= 90°, góc 2 vectơ có thể lên tới 180°!",
      "bodyHtml": "\n        <div style=\"background:rgba(239,68,68,0.15); border-left:4px solid #ef4444; padding:12px; border-radius:6px; font-size:16px; color:#fecdd3; margin-bottom:10px;\">\n          <b>Bẫy đề thi:</b> Đừng nhầm góc 2 đường thẳng với góc 2 vectơ!<br>\n          $$\\cos(a, b) = |\\cos(\\vec{u}, \\vec{v})| = \\frac{|\\vec{u} \\cdot \\vec{v}|}{|\\vec{u}| \\cdot |\\vec{v}|} \\ge 0$$\n        </div>\n        <div style=\"background:rgba(34,197,94,0.15); border-left:4px solid #22c55e; padding:12px; border-radius:6px; font-size:16px; color:#bbf7d0;\">\n          <b>Khẩu quyết Thầy Cú:</b><br>\n          Hình hộp ba cạnh cộng lại ra đường chéo. Tích vô hướng bằng 0 là chìa khóa vuông góc!\n        </div>\n        "
    }
  ]
};
window.CHAPTER2_DATA.ontap_c2_muc2 = {
  "lessonId": "ontap_c2",
  "lessonTitle": "Ôn tập Chương 2: Vectơ & Hệ toạ độ Oxyz",
  "sectionId": "ontap_c2_muc2",
  "sectionTitle": "Mục 2: Rèn luyện 4 dạng toán then chốt",
  "audio": "/audio/ontap_c2_muc2.mp3",
  "audioSrc": "./audio/ontap_c2_muc2.mp3",
  "audio_src": "./audio/ontap_c2_muc2.mp3",
  "timestamp_src": "timestamps/ontap_c2_muc2.json",
  "totalDuration": 297.55,
  "duration": 297.55,
  "title": "Mục 2: Rèn luyện 4 dạng toán then chốt thi THPT",
  "owl_tip": "Nhớ công thức nhẩm đỉnh hình bình hành D = A + C - B cực nhanh!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 32.45,
      "id": "part2"
    },
    {
      "time": 57.0,
      "id": "part3"
    },
    {
      "time": 86.18,
      "id": "vd1_q"
    },
    {
      "time": 106.39,
      "id": "vd1_a"
    },
    {
      "time": 130.46,
      "id": "vd2_q"
    },
    {
      "time": 157.94,
      "id": "vd2_a"
    },
    {
      "time": 198.17,
      "id": "vd3_q"
    },
    {
      "time": 226.03,
      "id": "vd3_a"
    },
    {
      "time": 257.93,
      "id": "part4"
    },
    {
      "time": 279.79,
      "id": "part5"
    }
  ],
  "content": "\n        <div id=\"part1\">\n          <h3>1. 4 dạng toán then chốt Chương 2</h3>\n          <p>• Dạng 1: Đẳng thức vectơ và phân tích vectơ.<br>\n          • Dạng 2: Tọa độ điểm, trung điểm, trọng tâm, đỉnh hình bình hành.<br>\n          • Dạng 3: Tích vô hướng, tính góc, độ dài và khoảng cách.<br>\n          • Dạng 4: Bài toán mô hình hóa thực tế gắn hệ trục $Oxyz$.</p>\n        </div>\n        <div id=\"part2\">\n          <h3>2. Nguyên lý giải toán</h3>\n          <p>Hình bình hành $ABCD \\iff \\vec{AD} = \\vec{BC} \\iff D = A + C - B$.</p>\n        </div>\n        <div id=\"part3\">\n          <h3>3. Ví dụ rèn luyện</h3>\n        </div>\n        <div id=\"vd1_q\">\n          <p><b>Ví dụ 1:</b> Tìm điểm $M$ thỏa mãn $\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = \\vec{0}$.</p>\n        </div>\n        <div id=\"vd1_a\">\n          <p><b>Lời giải:</b> Chèn trọng tâm $G$ tứ diện: $4\\vec{MG} = \\vec{0} \\iff M \\equiv G$.</p>\n        </div>\n        <div id=\"vd2_q\">\n          <p><b>Ví dụ 2:</b> Cho $A(1; 0; 2), B(2; 1; -1), C(-1; 3; 2)$. Tìm tọa độ đỉnh $D$ của hình bình hành $ABCD$.</p>\n        </div>\n        <div id=\"vd2_a\">\n          <p><b>Lời giải:</b> $\\vec{AD} = \\vec{BC} \\implies D(-2; 2; 5)$.</p>\n        </div>\n        <div id=\"vd3_q\">\n          <p><b>Ví dụ 3:</b> Drone bay từ $O(0;0;0)$ đến $A(100; 200; 50)$ (mét). Tính khoảng cách bay.</p>\n        </div>\n        <div id=\"vd3_a\">\n          <p><b>Lời giải:</b> $OA = \\sqrt{100^2+200^2+50^2} \\approx 229$ mét.</p>\n        </div>\n        <div id=\"part4\">\n          <h3>4. Bẫy đề thi</h3>\n          <p>Thứ tự đỉnh hình bình hành $ABCD$: $\\vec{AD} = \\vec{BC}$, không được nhầm $\\vec{AD} = \\vec{CB}$.</p>\n        </div>\n        <div id=\"part5\">\n          <h3>5. Mẹo Thầy Cú</h3>\n          <p>Hình bình hành $ABCD \\implies D = A + C - B$. Nhẩm tọa độ 3 giây!</p>\n        </div>\n        ",
  "parts": [
    { "partNumber": 1, "partTitle": "Phần 1: Tổng quan 4 dạng toán then chốt", "scenes": [1] },
    { "partNumber": 2, "partTitle": "Phần 2: Phương pháp giải các dạng toán", "scenes": [2] },
    { "partNumber": 3, "partTitle": "Phần 3: Rèn luyện thực chiến", "scenes": [3, 4, 5, 6, 7, 8] },
    { "partNumber": 4, "partTitle": "Phần 4: Bẫy trắc nghiệm hay gặp", "scenes": [9] },
    { "partNumber": 5, "partTitle": "Phần 5: Mascot Cú tổng kết", "scenes": [10] }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "4 DẠNG TOÁN THEN CHỐT CHƯƠNG 2",
      "subtitle": "PHẦN 1: TỔNG QUAN PHÂN LOẠI",
      "startTime": 0.0,
      "endTime": 32.45,
      "duration": 32.45,
      "mascotMode": "welcome",
      "mascotTip": "Nắm vững 4 dạng toán này là nắm trọn điểm phần Hình học Chương 2!",
      "bodyHtml": "\n        <div style=\"font-size:16px; line-height:1.65; color:#e2e8f0;\">\n          • <b>Dạng 1:</b> Đẳng thức vectơ và phân tích vectơ trong không gian.<br>\n          • <b>Dạng 2:</b> Tìm tọa độ điểm, trung điểm, trọng tâm, đỉnh hình bình hành.<br>\n          • <b>Dạng 3:</b> Tích vô hướng, tính góc, độ dài và khoảng cách.<br>\n          • <b>Dạng 4:</b> Bài toán mô hình hóa thực tế gắn hệ trục $Oxyz$.\n        </div>\n        "
    },
    {
      "sceneIndex": 2,
      "title": "PHƯƠNG PHÁP DẠNG 1 & DẠNG 2",
      "subtitle": "ĐẲNG THỨC VECTƠ & TOẠ ĐỘ ĐIỂM",
      "startTime": 32.45,
      "endTime": 57.0,
      "duration": 24.55,
      "mascotMode": "think",
      "mascotTip": "Hình bình hành ABCD thì vectơ AD bằng vectơ BC (cùng hướng)!",
      "bodyHtml": "\n        <div style=\"font-size:16px; line-height:1.6; color:#e2e8f0;\">\n          • <b>Đỉnh hình bình hành $ABCD$:</b> $\\vec{AD} = \\vec{BC} \\iff D = A + C - B$.<br>\n          • <b>Trung điểm $I$ của $AB$:</b> $x_I = \\frac{x_A+x_B}{2}, y_I = \\frac{y_A+y_B}{2}, z_I = \\frac{z_A+z_B}{2}$.<br>\n          • <b>Trọng tâm $G$ tứ diện $ABCD$:</b> $G = \\frac{A + B + C + D}{4}$.\n        </div>\n        \n    <div style=\"text-align:center; margin:12px 0;\">\n      <svg width=\"240\" height=\"130\" viewBox=\"0 0 240 130\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n        \n    <defs>\n      <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n      <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n      <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n      <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n    </defs>\n    \n        <line x1=\"40\" y1=\"95\" x2=\"140\" y2=\"95\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrB)\"/>\n        <line x1=\"80\" y1=\"35\" x2=\"180\" y2=\"35\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrB)\"/>\n        <line x1=\"40\" y1=\"95\" x2=\"80\" y2=\"35\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"140\" y1=\"95\" x2=\"180\" y2=\"35\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"40\" y1=\"95\" x2=\"76\" y2=\"40\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#arrR)\"/>\n        <line x1=\"140\" y1=\"95\" x2=\"176\" y2=\"40\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#arrR)\"/>\n        <text x=\"26\" y=\"102\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">A</text>\n        <text x=\"146\" y=\"102\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">B</text>\n        <text x=\"186\" y=\"38\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">C</text>\n        <text x=\"70\" y=\"30\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">D</text>\n      </svg>\n      <div style=\"font-size:12px; color:#cbd5e1; margin-top:4px;\">Hình bình hành $ABCD \\iff \\vec{AD} = \\vec{BC}$</div>\n    </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "PHƯƠNG PHÁP DẠNG 3 & DẠNG 4",
      "subtitle": "GÓC, ĐỘ DÀI & MÔ HÌNH THỰC TẾ",
      "startTime": 57.0,
      "endTime": 86.18,
      "duration": 29.18,
      "mascotMode": "magnifier",
      "mascotTip": "Chọn gốc O và các tia Ox, Oy, Oz vuông góc sao cho số liệu đẹp nhất!",
      "bodyHtml": "\n        <div style=\"font-size:16px; line-height:1.6; color:#e2e8f0;\">\n          • <b>Độ dài đoạn thẳng $AB$:</b> $AB = |\\vec{AB}| = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2 + (z_B-z_A)^2}$.<br>\n          • <b>Góc giữa 2 vectơ:</b> $\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|}$.<br>\n          • <b>Gắn hệ trục $Oxyz$:</b> Chuyển đổi vị trí máy bay, vệ tinh, góc nghiêng sang tọa độ số.\n        </div>\n        "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: ĐIỂM CÂN BẰNG TỨ DIỆN",
      "subtitle": "DẠNG 1: ĐẲNG THỨC VECTƠ",
      "startTime": 86.18,
      "endTime": 106.39,
      "duration": 20.21,
      "mascotMode": "think",
      "mascotTip": "Chèn điểm G vào 4 vectơ MA, MB, MC, MD!",
      "bodyHtml": "\n        <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:6px; font-size:17px; color:#e2e8f0;\">\n          <b>Ví dụ 1:</b> Cho tứ diện $ABCD$. Tìm vị trí điểm $M$ thỏa mãn:<br>\n          $$\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = \\vec{0}$$\n        </div>\n        "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "M TRÙNG TRỌNG TÂM TỨ DIỆN G",
      "startTime": 106.39,
      "endTime": 130.46,
      "duration": 24.07,
      "mascotMode": "cheer",
      "mascotTip": "M chính là trọng tâm tứ diện ABCD!",
      "bodyHtml": "\n        <div style=\"font-size:17px; line-height:1.7; color:#e2e8f0;\">\n          <b style=\"color:#4ade80;\">Lời giải:</b><br>\n          Gọi $G$ là trọng tâm tứ diện $ABCD$ (thỏa mãn $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$).<br>\n          Chèn điểm $G$ vào vế trái:<br>\n          $$(\\vec{MG}+\\vec{GA}) + (\\vec{MG}+\\vec{GB}) + (\\vec{MG}+\\vec{GC}) + (\\vec{MG}+\\vec{GD}) = 4\\vec{MG} = \\vec{0}$$\n          $$\\implies \\vec{MG} = \\vec{0} \\iff M \\equiv G$$\n        </div>\n        "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: TÌM ĐỈNH THỨ TƯ HÌNH BÌNH HÀNH",
      "subtitle": "DẠNG 2: TOẠ ĐỘ ĐIỂM VÀ VECTƠ",
      "startTime": 130.46,
      "endTime": 157.94,
      "duration": 27.48,
      "mascotMode": "think",
      "mascotTip": "Nhớ đúng thứ tự: A -> B -> C -> D, suy ra vectơ AD = vectơ BC!",
      "bodyHtml": "\n        <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:6px; font-size:17px; color:#e2e8f0;\">\n          <b>Ví dụ 2:</b> Trong $Oxyz$, cho $A(1; 0; 2), B(2; 1; -1), C(-1; 3; 2)$.<br>\n          Tìm tọa độ đỉnh $D$ để tứ giác $ABCD$ là hình bình hành.\n        </div>\n        \n    <div style=\"text-align:center; margin:12px 0;\">\n      <svg width=\"240\" height=\"130\" viewBox=\"0 0 240 130\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n        \n    <defs>\n      <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n      <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n      <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n      <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n    </defs>\n    \n        <line x1=\"40\" y1=\"95\" x2=\"140\" y2=\"95\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrB)\"/>\n        <line x1=\"80\" y1=\"35\" x2=\"180\" y2=\"35\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrB)\"/>\n        <line x1=\"40\" y1=\"95\" x2=\"80\" y2=\"35\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"140\" y1=\"95\" x2=\"180\" y2=\"35\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <line x1=\"40\" y1=\"95\" x2=\"76\" y2=\"40\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#arrR)\"/>\n        <line x1=\"140\" y1=\"95\" x2=\"176\" y2=\"40\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#arrR)\"/>\n        <text x=\"26\" y=\"102\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">A</text>\n        <text x=\"146\" y=\"102\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">B</text>\n        <text x=\"186\" y=\"38\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">C</text>\n        <text x=\"70\" y=\"30\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">D</text>\n      </svg>\n      <div style=\"font-size:12px; color:#cbd5e1; margin-top:4px;\">Hình bình hành $ABCD \\iff \\vec{AD} = \\vec{BC}$</div>\n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "D(-2; 2; 5)",
      "startTime": 157.94,
      "endTime": 198.17,
      "duration": 40.23,
      "mascotMode": "cheer",
      "mascotTip": "Áp dụng nhẩm: D = A + C - B = (1-1-2; 0+3-1; 2+2-(-1)) = (-2; 2; 5)!",
      "bodyHtml": "\n        <div style=\"font-size:17px; line-height:1.7; color:#e2e8f0;\">\n          <b style=\"color:#4ade80;\">Lời giải:</b><br>\n          • $\\vec{BC} = (x_C-x_B; y_C-y_B; z_C-z_B) = (-3; 2; 3)$<br>\n          • $\\vec{AD} = (x_D-1; y_D-0; z_D-2)$<br>\n          $$\\vec{AD} = \\vec{BC} \\iff x_D - 1 = -3; y_D = 2; z_D - 2 = 3 \\implies D(-2; 2; 5)$$\n        </div>\n        "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: BÀI TOÁN THỰC TẾ DRONE BAY",
      "subtitle": "DẠNG 4: MÔ HÌNH HÓA OXYZ",
      "startTime": 198.17,
      "endTime": 226.03,
      "duration": 27.86,
      "mascotMode": "think",
      "mascotTip": "Quãng đường bay từ O(0;0;0) đến A(100;200;50) là độ dài vectơ OA!",
      "bodyHtml": "\n        <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:6px; font-size:17px; color:#e2e8f0;\">\n          <b>Ví dụ 3 (Thực tế):</b> Drone bay từ $O(0; 0; 0)$ đến $A(100; 200; 50)$ (đơn vị: mét).<br>\n          Tính khoảng cách từ điểm xuất phát $O$ đến $A$ (làm tròn đến mét).\n        </div>\n        \n    <div style=\"text-align:center; margin:12px 0;\">\n      <svg width=\"250\" height=\"160\" viewBox=\"0 0 250 160\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n        \n    <defs>\n      <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n      <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n      <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n      <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n    </defs>\n    \n        <line x1=\"60\" y1=\"120\" x2=\"60\" y2=\"25\" stroke=\"#38bdf8\" stroke-width=\"1.5\" marker-end=\"url(#arrB)\"/>\n        <line x1=\"60\" y1=\"120\" x2=\"220\" y2=\"120\" stroke=\"#38bdf8\" stroke-width=\"1.5\" marker-end=\"url(#arrB)\"/>\n        <line x1=\"60\" y1=\"120\" x2=\"20\" y2=\"150\" stroke=\"#38bdf8\" stroke-width=\"1.5\" marker-end=\"url(#arrB)\"/>\n        <line x1=\"60\" y1=\"120\" x2=\"160\" y2=\"120\" stroke=\"#94a3b8\" stroke-dasharray=\"3\"/>\n        <line x1=\"160\" y1=\"120\" x2=\"140\" y2=\"140\" stroke=\"#94a3b8\" stroke-dasharray=\"3\"/>\n        <line x1=\"140\" y1=\"140\" x2=\"140\" y2=\"70\" stroke=\"#94a3b8\" stroke-dasharray=\"3\"/>\n        <line x1=\"60\" y1=\"120\" x2=\"136\" y2=\"74\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n        <circle cx=\"140\" cy=\"70\" r=\"4\" fill=\"#fbbf24\"/>\n        <text x=\"48\" y=\"125\" fill=\"#f8fafc\" font-size=\"12\" font-style=\"italic\">O</text>\n        <text x=\"146\" y=\"68\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">A(100; 200; 50)</text>\n      </svg>\n      <div style=\"font-size:12px; color:#cbd5e1; margin-top:4px;\">Quãng đường bay: $OA = |\\vec{OA}| = \\sqrt{x^2+y^2+z^2}$</div>\n    </div>\n    "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "KHOẢNG CÁCH BAY XẤP XỈ 229M",
      "startTime": 226.03,
      "endTime": 257.93,
      "duration": 31.9,
      "mascotMode": "cheer",
      "mascotTip": "Khoảng cách bay là 229 mét!",
      "bodyHtml": "\n        <div style=\"font-size:17px; line-height:1.7; color:#e2e8f0;\">\n          <b style=\"color:#4ade80;\">Lời giải:</b><br>\n          $$OA = |\\vec{OA}| = \\sqrt{100^2 + 200^2 + 50^2}$$\n          $$= \\sqrt{10000 + 40000 + 2500} = \\sqrt{52500} \\approx 229.13\\text{ m}$$\n          Làm tròn đến hàng đơn vị: <b>229 m</b>.\n        </div>\n        "
    },
    {
      "sceneIndex": 10,
      "title": "BẪY THỨ TỰ ĐỈNH & MẸO NHẨM 3 GIÂY",
      "subtitle": "PHẦN 4 & 5: KINH NGHIỆM ĐỀ THI",
      "startTime": 257.93,
      "endTime": 297.55,
      "duration": 39.62,
      "mascotMode": "alert",
      "mascotTip": "ABCD là hình bình hành: D = A + C - B. Đừng viết nhầm AD = CB!",
      "bodyHtml": "\n        <div style=\"background:rgba(239,68,68,0.15); border-left:4px solid #ef4444; padding:12px; border-radius:6px; font-size:16px; color:#fecdd3; margin-bottom:10px;\">\n          <b>Bẫy thứ tự đỉnh:</b> $ABCD$ là hình bình hành thì $\\vec{AD} = \\vec{BC}$ (cùng chiều). Tuyệt đối không viết $\\vec{AD} = \\vec{CB}$!\n        </div>\n        <div style=\"background:rgba(34,197,94,0.15); border-left:4px solid #22c55e; padding:12px; border-radius:6px; font-size:16px; color:#bbf7d0;\">\n          <b>Mẹo tính nhẩm Thầy Cú:</b> $A + C = B + D \\implies D = A + C - B$. Tính nhẩm cực nhanh trong 3 giây!\n        </div>\n        "
    }
  ]
};
window.CHAPTER2_DATA.ontap_c2_muc3 = {
  "lessonId": "ontap_c2",
  "lessonTitle": "Ôn tập Chương 2: Vectơ & Hệ toạ độ Oxyz",
  "sectionId": "ontap_c2_muc3",
  "sectionTitle": "Mục 3: Bẫy đề thi & Kỹ thuật Casio Vectơ",
  "audio": "/audio/ontap_c2_muc3.mp3",
  "audioSrc": "./audio/ontap_c2_muc3.mp3",
  "audio_src": "./audio/ontap_c2_muc3.mp3",
  "timestamp_src": "timestamps/ontap_c2_muc3.json",
  "totalDuration": 258.38,
  "duration": 258.38,
  "title": "Mục 3: Bẫy đề thi hay gặp & Kỹ thuật Casio Vectơ 3 chiều",
  "owl_tip": "Tận dụng Casio Menu 5 để kiểm tra vuông góc và tính góc cực nhanh!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 19.73,
      "id": "part2"
    },
    {
      "time": 50.88,
      "id": "part3"
    },
    {
      "time": 80.76,
      "id": "vd1_q"
    },
    {
      "time": 101.4,
      "id": "vd1_a"
    },
    {
      "time": 122.3,
      "id": "vd2_q"
    },
    {
      "time": 141.12,
      "id": "vd2_a"
    },
    {
      "time": 170.95,
      "id": "vd3_q"
    },
    {
      "time": 186.46,
      "id": "vd3_a"
    },
    {
      "time": 213.12,
      "id": "part4"
    },
    {
      "time": 233.81,
      "id": "part5"
    }
  ],
  "content": "\n        <div id=\"part1\">\n          <h3>1. Tổng quan bẫy đề thi & Casio</h3>\n          <p>Kỹ năng thực chiến giúp không mất điểm oan và tối ưu hóa thời gian làm bài.</p>\n        </div>\n        <div id=\"part2\">\n          <h3>2. 4 bẫy đề thi kinh điển</h3>\n          <p>• Bẫy 1: Ngọn trừ gốc, đừng lấy gốc trừ ngọn.<br>\n          • Bẫy 2: Quên căn bậc hai khi tính độ dài.<br>\n          • Bẫy 3: Chiếu lên mặt phẳng tọa độ: chiếu lên $(Oxy) \\implies z = 0$.<br>\n          • Bẫy 4: Góc giữa hai đường thẳng luôn $\\le 90^\\circ$.</p>\n        </div>\n        <div id=\"part3\">\n          <h3>3. Kỹ thuật bấm máy Casio FX-580VNX / FX-880BTG</h3>\n        </div>\n        <div id=\"vd1_q\">\n          <p><b>Ví dụ 1:</b> Tìm hình chiếu vuông góc của $A(2; -3; 4)$ lên $(Oxy)$.</p>\n        </div>\n        <div id=\"vd1_a\">\n          <p><b>Lời giải:</b> Giữ nguyên $x=2, y=-3$, cho $z=0 \\implies A'(2; -3; 0)$.</p>\n        </div>\n        <div id=\"vd2_q\">\n          <p><b>Ví dụ 2:</b> Tính góc giữa $\\vec{u}=(1; 1; 0)$ và $\\vec{v}=(0; 1; 1)$.</p>\n        </div>\n        <div id=\"vd2_a\">\n          <p><b>Lời giải:</b> $\\cos = 1/2 \\implies$ góc $= 60^\\circ$.</p>\n        </div>\n        <div id=\"vd3_q\">\n          <p><b>Ví dụ 3:</b> Cho $|\\vec{a}|=2, |\\vec{b}|=3, (\\vec{a}, \\vec{b})=60^\\circ$. Tính $|\\vec{a} + \\vec{b}|$.</p>\n        </div>\n        <div id=\"vd3_a\">\n          <p><b>Lời giải:</b> $|\\vec{a}+\\vec{b}|^2 = 2^2+3^2+2(2)(3)\\cos 60^\\circ = 19 \\implies \\sqrt{19}$.</p>\n        </div>\n        <div id=\"part4\">\n          <h3>4. Kỹ thuật Casio kiểm tra vuông góc</h3>\n          <p>Bấm VctA Dot VctB = 0 $\\implies$ vuông góc. Tính khoảng cách bằng Abs(VctB - VctA).</p>\n        </div>\n        <div id=\"part5\">\n          <h3>5. Lời khuyên & Khẩu quyết Thầy Cú</h3>\n          <p>Chiếu lên trục nào giữ biến đó. Ngọn trừ gốc ra vectơ. Vuông góc tích bằng 0. Độ dài nhớ căn bậc hai!</p>\n        </div>\n        ",
  "parts": [
    { "partNumber": 1, "partTitle": "Phần 1: Giới thiệu Bẫy & Kỹ thuật Casio", "scenes": [1] },
    { "partNumber": 2, "partTitle": "Phần 2: 3 Bẫy trắc nghiệm kinh điển", "scenes": [2] },
    { "partNumber": 3, "partTitle": "Phần 3: Thực hành Casio Vectơ & Tích vô hướng", "scenes": [3, 4, 5, 6, 7, 8] },
    { "partNumber": 4, "partTitle": "Phần 4: Bẫy góc & Khoảng cách", "scenes": [9] },
    { "partNumber": 5, "partTitle": "Phần 5: Lời khuyên ôn tập từ Thầy Cú", "scenes": [10] }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BẪY ĐỀ THI & THỦ THUẬT CASIO",
      "subtitle": "PHẦN 1: TỐI ƯU HÓA ĐIỂM SỐ",
      "startTime": 0.0,
      "endTime": 19.73,
      "duration": 19.73,
      "mascotMode": "welcome",
      "mascotTip": "Tránh bẫy và bấm Casio nhanh giúp em tự tin lấy trọn vẹn điểm số!",
      "bodyHtml": "\n        <div style=\"font-size:17px; line-height:1.65; color:#e2e8f0;\">\n          • Tổng hợp 4 bẫy đề thi kinh điển học sinh hay mắc phải.<br>\n          • Kỹ thuật bấm máy tính Casio FX-580VNX & FX-880BTG xử lý vectơ 3 chiều.<br>\n          • Tính nhanh góc, khoảng cách, kiểm tra đồng phẳng và vuông góc trong 5 giây!\n        </div>\n        "
    },
    {
      "sceneIndex": 2,
      "title": "4 BẪY ĐỀ THI KINH ĐIỂN CHƯƠNG 2",
      "subtitle": "ĐỌC KỸ TRÁNH MẤT ĐIỂM OAN",
      "startTime": 19.73,
      "endTime": 50.88,
      "duration": 31.15,
      "mascotMode": "alert",
      "mascotTip": "Nhớ đúng: Ngọn trừ gốc; Chiếu lên đâu giữ biến đó; Độ dài nhớ căn bậc hai!",
      "bodyHtml": "\n        <div style=\"font-size:16px; line-height:1.6; color:#e2e8f0;\">\n          1. <b>Bẫy ngọn trừ gốc:</b> $\\vec{AB} = (x_B-x_A; y_B-y_A; z_B-z_A)$. Đừng lấy $A - B$!<br>\n          2. <b>Bẫy quên căn bậc hai:</b> Độ dài $|\\vec{u}| = \\sqrt{x^2+y^2+z^2}$.<br>\n          3. <b>Bẫy khuyết tọa độ:</b> Thuộc $(Oxy) \\implies z = 0$; thuộc trục $Ox \\implies y=z=0$.<br>\n          4. <b>Bẫy góc đường thẳng vs góc vectơ:</b> Góc giữa 2 đường thẳng luôn $\\le 90^\\circ$.\n        </div>\n        "
    },
    {
      "sceneIndex": 3,
      "title": "HƯỚNG DẪN BẤM CASIO 580VNX / 880BTG",
      "subtitle": "CHẾ ĐỘ VECTOR 3 CHIỀU",
      "startTime": 50.88,
      "endTime": 80.76,
      "duration": 29.88,
      "mascotMode": "magnifier",
      "mascotTip": "Casio 580: Menu 5 -> Kích thước 3. Casio 880: Home -> Vector!",
      "bodyHtml": "\n        <div style=\"font-size:16px; line-height:1.6; color:#e2e8f0;\">\n          • <b>Bật chế độ Vectơ:</b> [MENU] [5] (FX-580VNX) $\\to$ Chọn [1: VctA] $\\to$ Kích thước 3.<br>\n          • <b>Nhập VctB:</b> [OPTN] [1: Tạo vectơ] $\\to$ Chọn [2: VctB] $\\to$ Kích thước 3.<br>\n          • <b>Tích vô hướng:</b> [OPTN] [3: VctA] [OPTN] [v] [2: Tích vô hướng] [OPTN] [4: VctB] [=].<br>\n          • <b>Góc 2 vectơ:</b> [OPTN] [v] [3: Góc] VctA, VctB [)] [=].\n        </div>\n        "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: NHẬN DIỆN BẪY HÌNH CHIẾU",
      "subtitle": "CHIẾU LÊN MẶT PHẲNG TỌA ĐỘ",
      "startTime": 80.76,
      "endTime": 101.4,
      "duration": 20.64,
      "mascotMode": "think",
      "mascotTip": "Chiếu lên (Oxy) thì chỉ giữ x và y, cao độ z bằng 0!",
      "bodyHtml": "\n        <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:6px; font-size:17px; color:#e2e8f0;\">\n          <b>Ví dụ 1:</b> Cho điểm $A(2; -3; 4)$. Tìm tọa độ hình chiếu vuông góc của $A$ lên mặt phẳng tọa độ $(Oxy)$.\n        </div>\n        \n    <div style=\"text-align:center; margin:12px 0;\">\n      <svg width=\"240\" height=\"150\" viewBox=\"0 0 240 150\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n        \n    <defs>\n      <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n      <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n      <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n      <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n    </defs>\n    \n        <polygon points=\"40,110 180,110 210,75 70,75\" fill=\"#334155\" opacity=\"0.6\"/>\n        <line x1=\"130\" y1=\"35\" x2=\"130\" y2=\"92\" stroke=\"#f43f5e\" stroke-width=\"2\" stroke-dasharray=\"3\" marker-end=\"url(#arrR)\"/>\n        <circle cx=\"130\" cy=\"35\" r=\"4\" fill=\"#38bdf8\"/>\n        <circle cx=\"130\" cy=\"92\" r=\"4\" fill=\"#34d399\"/>\n        <text x=\"138\" y=\"38\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A(2; -3; 4)</text>\n        <text x=\"138\" y=\"98\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\">A'(2; -3; 0)</text>\n        <text x=\"50\" y=\"95\" fill=\"#94a3b8\" font-size=\"11\">Mặt phẳng (Oxy)</text>\n      </svg>\n      <div style=\"font-size:12px; color:#cbd5e1; margin-top:4px;\">Chiếu lên $(Oxy) \\implies z = 0$</div>\n    </div>\n    "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "A'(2; -3; 0)",
      "startTime": 101.4,
      "endTime": 122.3,
      "duration": 20.9,
      "mascotMode": "cheer",
      "mascotTip": "Rất dễ: giữ x, y, cho z = 0!",
      "bodyHtml": "\n        <div style=\"font-size:17px; line-height:1.7; color:#e2e8f0;\">\n          <b style=\"color:#4ade80;\">Lời giải:</b><br>\n          Hình chiếu vuông góc của điểm $A(x_0; y_0; z_0)$ lên mặt phẳng tọa độ $(Oxy)$ có cao độ $z = 0$, giữ nguyên $x, y$.<br>\n          $$\\implies A'(2; -3; 0)$$\n          <div style=\"color:#ef4444; margin-top:8px;\">Cảnh giác: Không nhầm với hình chiếu lên trục $Oz$ là $(0; 0; 4)$!</div>\n        </div>\n        "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: BẤM CASIO TÍNH GÓC 2 VECTƠ",
      "subtitle": "u(1; 1; 0) VÀ v(0; 1; 1)",
      "startTime": 122.3,
      "endTime": 141.12,
      "duration": 18.82,
      "mascotMode": "think",
      "mascotTip": "Bấm cos(u, v) = u.v / (|u|.|v|) hoặc dùng chức năng Angle!",
      "bodyHtml": "\n        <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:6px; font-size:17px; color:#e2e8f0;\">\n          <b>Ví dụ 2:</b> Tính góc giữa hai vectơ $\\vec{u} = (1; 1; 0)$ và $\\vec{v} = (0; 1; 1)$.\n        </div>\n        \n    <div style=\"text-align:center; margin:12px 0;\">\n      <svg width=\"240\" height=\"170\" viewBox=\"0 0 240 170\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n        \n    <defs>\n      <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n      <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n      <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n      <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n    </defs>\n    \n        <line x1=\"90\" y1=\"120\" x2=\"90\" y2=\"20\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrB)\"/>\n        <line x1=\"90\" y1=\"120\" x2=\"210\" y2=\"120\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrB)\"/>\n        <line x1=\"90\" y1=\"120\" x2=\"30\" y2=\"155\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrB)\"/>\n        <line x1=\"90\" y1=\"120\" x2=\"60\" y2=\"137\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n        <line x1=\"90\" y1=\"120\" x2=\"135\" y2=\"120\" stroke=\"#34d399\" stroke-width=\"2.5\" marker-end=\"url(#arrG)\"/>\n        <line x1=\"90\" y1=\"120\" x2=\"90\" y2=\"75\" stroke=\"#fbbf24\" stroke-width=\"2.5\" marker-end=\"url(#arrY)\"/>\n        <text x=\"75\" y=\"125\" fill=\"#f8fafc\" font-size=\"13\" font-style=\"italic\">O</text>\n        <text x=\"20\" y=\"160\" fill=\"#38bdf8\" font-size=\"13\" font-style=\"italic\">x</text>\n        <text x=\"215\" y=\"125\" fill=\"#38bdf8\" font-size=\"13\" font-style=\"italic\">y</text>\n        <text x=\"95\" y=\"25\" fill=\"#38bdf8\" font-size=\"13\" font-style=\"italic\">z</text>\n        <text x=\"45\" y=\"138\" fill=\"#f43f5e\" font-size=\"11\">i</text>\n        <text x=\"120\" y=\"112\" fill=\"#34d399\" font-size=\"11\">j</text>\n        <text x=\"96\" y=\"80\" fill=\"#fbbf24\" font-size=\"11\">k</text>\n      </svg>\n      <div style=\"font-size:12px; color:#cbd5e1; margin-top:4px;\">Ba vectơ đơn vị: $|\\vec{i}| = |\\vec{j}| = |\\vec{k}| = 1$</div>\n    </div>\n    "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI & BẤM MÁY",
      "subtitle": "GÓC BẰNG 60 ĐỘ",
      "startTime": 141.12,
      "endTime": 170.95,
      "duration": 29.83,
      "mascotMode": "cheer",
      "mascotTip": "cos = 1/2 suy ra góc 60 độ!",
      "bodyHtml": "\n        <div style=\"font-size:17px; line-height:1.7; color:#e2e8f0;\">\n          <b style=\"color:#4ade80;\">Lời giải:</b><br>\n          • $\\vec{u} \\cdot \\vec{v} = 1(0) + 1(1) + 0(1) = 1$<br>\n          • $|\\vec{u}| = \\sqrt{1^2+1^2+0^2} = \\sqrt{2}$, $|\\vec{v}| = \\sqrt{0^2+1^2+1^2} = \\sqrt{2}$<br>\n          $$\\cos(\\vec{u}, \\vec{v}) = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\implies (\\vec{u}, \\vec{v}) = 60^\\circ$$\n        </div>\n        "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: TÍNH ĐỘ DÀI VECTƠ TỔNG",
      "subtitle": "KHAI TRIỂN BÌNH PHƯƠNG VÔ HƯỚNG",
      "startTime": 170.95,
      "endTime": 186.46,
      "duration": 15.51,
      "mascotMode": "think",
      "mascotTip": "|a + b|^2 = |a|^2 + |b|^2 + 2 a.b!",
      "bodyHtml": "\n        <div style=\"background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:12px; border-radius:6px; font-size:17px; color:#e2e8f0;\">\n          <b>Ví dụ 3:</b> Cho $|\\vec{a}| = 2, |\\vec{b}| = 3$, góc $(\\vec{a}, \\vec{b}) = 60^\\circ$.<br>\n          Tính độ dài của vectơ tổng $|\\vec{a} + \\vec{b}|$.\n        </div>\n        "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ CĂN 19",
      "startTime": 186.46,
      "endTime": 213.12,
      "duration": 26.66,
      "mascotMode": "cheer",
      "mascotTip": "Nhớ lấy căn bậc hai ở bước cuối cùng!",
      "bodyHtml": "\n        <div style=\"font-size:17px; line-height:1.7; color:#e2e8f0;\">\n          <b style=\"color:#4ade80;\">Lời giải:</b><br>\n          $$|\\vec{a} + \\vec{b}|^2 = |\\vec{a}|^2 + |\\vec{b}|^2 + 2|\\vec{a}||\\vec{b}| \\cos 60^\\circ$$\n          $$= 2^2 + 3^2 + 2 \\cdot 2 \\cdot 3 \\cdot \\frac{1}{2} = 4 + 9 + 6 = 19$$\n          $$\\implies |\\vec{a} + \\vec{b}| = \\sqrt{19}$$\n        </div>\n        "
    },
    {
      "sceneIndex": 10,
      "title": "BẢNG PHÍM TẮT & KHẨU QUYẾT VÀNG",
      "subtitle": "PHẦN 4 & 5: TỔNG KẾT TOÀN DIỆN",
      "startTime": 213.12,
      "endTime": 258.38,
      "duration": 45.26,
      "mascotMode": "cheer",
      "mascotTip": "Chúc các em tự tin làm bài thi tốt nghiệp đạt điểm 10 tuyệt đối!",
      "bodyHtml": "\n        <div style=\"background:rgba(56,189,248,0.15); border-left:4px solid #38bdf8; padding:12px; border-radius:6px; font-size:16px; color:#e2e8f0; margin-bottom:10px;\">\n          <b>Phím tắt Casio 580:</b><br>\n          • Khoảng cách $AB$: [SHIFT] [)] (Abs) [OPTN] [4] [-] [OPTN] [3] [)] [=].<br>\n          • Kiểm tra vuông góc: VctA Dot VctB = 0 $\\implies$ Vuông góc!\n        </div>\n        <div style=\"background:rgba(34,197,94,0.15); border-left:4px solid #22c55e; padding:12px; border-radius:6px; font-size:16px; color:#bbf7d0;\">\n          <b>Khẩu quyết vàng Thầy Cú:</b><br>\n          Chiếu lên trục nào giữ biến đó. Ngọn trừ gốc ra vectơ. Tích vô hướng hoành nhân hoành, tung nhân tung, cao nhân cao. Vuông góc tích bằng 0. Độ dài nhớ căn bậc hai!\n        </div>\n        "
    }
  ]
};

// Tương thích ngược: Đồng bộ sang CHAPTER1_DATA & CHAPTER1_LECTURES
if (typeof window.CHAPTER1_DATA === 'undefined') window.CHAPTER1_DATA = {};
Object.assign(window.CHAPTER1_DATA, window.CHAPTER2_DATA);
if (typeof window.CHAPTER1_LECTURES !== 'undefined') {
  Object.assign(window.CHAPTER1_LECTURES, window.CHAPTER2_DATA);
}


// =========================================================================
// BÀI 8: BIỂU THỨC TOẠ ĐỘ CỦA CÁC PHÉP TOÁN VECTƠ
// =========================================================================
window.CHAPTER2_DATA.bai8_muc1 = {
  "lessonId": "bai8",
  "lessonTitle": "Bài 8: Biểu thức toạ độ của các phép toán vectơ",
  "sectionId": "bai8_muc1",
  "sectionTitle": "Mục 1: Toạ độ tổng, hiệu và tích vectơ với một số",
  "audio": "/audio/bai8_muc1.mp3",
  "audioSrc": "./audio/bai8_muc1.mp3",
  "audio_src": "./audio/bai8_muc1.mp3",
  "timestamp_src": "timestamps/bai8_muc1.json",
  "totalDuration": 386.88,
  "duration": 386.88,
  "title": "Mục 1: Toạ độ của tổng, hiệu và tích vectơ với một số thực",
  "owl_tip": "Nhớ quy tắc vàng: Toạ độ ngọn trừ toạ độ gốc khi tính toạ độ vectơ!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 81.05,
      "id": "part2"
    },
    {
      "time": 117.82,
      "id": "part3"
    },
    {
      "time": 121.2,
      "id": "vd1_q"
    },
    {
      "time": 166.94,
      "id": "vd1_a"
    },
    {
      "time": 199.36,
      "id": "vd2_q"
    },
    {
      "time": 238.53,
      "id": "vd2_a"
    },
    {
      "time": 272.35,
      "id": "vd3_q"
    },
    {
      "time": 305.9,
      "id": "vd3_a"
    },
    {
      "time": 335.52,
      "id": "part4"
    },
    {
      "time": 353.86,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Lý thuyết trọng tâm & Định nghĩa",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Công thức mở rộng & Toạ độ điểm",
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
      "partTitle": "Phần 5: Mẹo Thầy Cú & Bấm máy Casio",
      "scenes": [
        11
      ]
    }
  ],
  "content": "\n      <div id=\"part1\">\n        <h3>1. Toạ độ của tổng, hiệu và tích vectơ với một số</h3>\n        <p>Cho hai véc tơ $\\vec{a} = (x_1; y_1; z_1)$, $\\vec{b} = (x_2; y_2; z_2)$ và số thực $k \\in \\mathbb{R}$:<br>\n        • <b>Tổng hai véc tơ:</b> $\\vec{a} + \\vec{b} = (x_1 + x_2; \\, y_1 + y_2; \\, z_1 + z_2)$<br>\n        • <b>Hiệu hai véc tơ:</b> $\\vec{a} - \\vec{b} = (x_1 - x_2; \\, y_1 - y_2; \\, z_1 - z_2)$<br>\n        • <b>Tích với một số:</b> $k\\vec{a} = (k x_1; \\, k y_1; \\, k z_1)$<br>\n        • <b>Toạ độ véc tơ nối hai điểm:</b> Cho $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$:<br>\n        $$\\vec{AB} = (x_B - x_A; \\, y_B - y_A; \\, z_B - z_A)$$\n        <i>(Quy tắc vàng: Lấy toạ độ điểm ngọn trừ toạ độ điểm gốc!)</i></p>\n      </div>\n      <div id=\"part2\">\n        <h3>2. Công thức trung điểm, trọng tâm & Điều kiện cùng phương</h3>\n        <p>• <b>Trung điểm $M$ của $AB$:</b> $M\\left(\\frac{x_A+x_B}{2}; \\, \\frac{y_A+y_B}{2}; \\, \\frac{z_A+z_B}{2}\\right)$<br>\n        • <b>Trọng tâm $G$ của $\\triangle ABC$:</b> $G\\left(\\frac{x_A+x_B+x_C}{3}; \\, \\frac{y_A+y_B+y_C}{3}; \\, \\frac{z_A+z_B+z_C}{3}\\right)$<br>\n        • <b>Đỉnh thứ tư hình bình hành $ABCD$:</b> $\\vec{AB} = \\vec{DC} \\iff D = A + C - B$<br>\n        • <b>Điều kiện cùng phương ($\\vec{b} \\ne \\vec{0}$):</b> $\\vec{a} = k\\vec{b} \\iff \\frac{x_1}{x_2} = \\frac{y_1}{y_2} = \\frac{z_1}{z_2}$ (khi các mẫu khác 0).</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ rèn luyện điển hình</h3></div>\n      <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:16px; margin:10px 0; background:#0f172a;\">\n        \n    <div class=\"countdown-clock-30s\" id=\"cd_muc1_vd1\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n      </svg>\n      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n      </div>\n    </div>\n    \n        <div id=\"vd1_q\">\n          <b style=\"color:#38bdf8; font-size:18px;\">Ví dụ 1:</b> Cho hai véc tơ $\\vec{a} = (2; -1; 3)$ và $\\vec{b} = (-1; 4; 2)$. Tìm toạ độ của véc tơ $\\vec{u} = 2\\vec{a} - 3\\vec{b}$.<br>\n          <i style=\"color:#94a3b8;\">(Thời gian suy nghĩ: 30 giây - Quan sát đồng hồ ở góc phải màn hình)</i>\n        </div>\n        <div id=\"vd1_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b style=\"color:#34d399;\">Lời giải:</b><br>\n          • $2\\vec{a} = 2(2; -1; 3) = (4; -2; 6)$<br>\n          • $-3\\vec{b} = -3(-1; 4; 2) = (3; -12; -6)$<br>\n          • $\\vec{u} = 2\\vec{a} - 3\\vec{b} = (4 + 3; \\, -2 - 12; \\, 6 - 6) = (7; -14; 0)$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:16px; margin:10px 0; background:#0f172a;\">\n        \n    <div class=\"countdown-clock-30s\" id=\"cd_muc1_vd2\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n      </svg>\n      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n      </div>\n    </div>\n    \n        <div id=\"vd2_q\">\n          <b style=\"color:#38bdf8; font-size:18px;\">Ví dụ 2:</b> Trong không gian $Oxyz$, cho ba điểm $A(1; -2; 3)$, $B(3; 0; -1)$, $C(-1; 4; 5)$. Tìm toạ độ đỉnh $D$ để tứ giác $ABCD$ là hình bình hành.<br>\n          <i style=\"color:#94a3b8;\">(Thời gian suy nghĩ: 30 giây - Quan sát đồng hồ ở góc phải màn hình)</i>\n        </div>\n        <div id=\"vd2_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b style=\"color:#34d399;\">Lời giải:</b><br>\n          • $ABCD$ là hình bình hành $\\iff \\vec{AB} = \\vec{DC}$<br>\n          • $\\vec{AB} = (3 - 1; \\, 0 - (-2); \\, -1 - 3) = (2; 2; -4)$<br>\n          • Gọi $D(x; y; z) \\implies \\vec{DC} = (-1 - x; \\, 4 - y; \\, 5 - z)$<br>\n          • $\\begin{cases} -1 - x = 2 \\\\ 4 - y = 2 \\\\ 5 - z = -4 \\end{cases} \\iff \\begin{cases} x = -3 \\\\ y = 2 \\\\ z = 9 \\end{cases} \\implies D(-3; 2; 9)$.<br>\n          <i>(Mẹo nhanh: $D = A + C - B = (1 - 1 - 3; \\, -2 + 4 - 0; \\, 3 + 5 - (-1)) = (-3; 2; 9)$).</i>\n        </div>\n      </div>\n      <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:16px; margin:10px 0; background:#0f172a;\">\n        \n    <div class=\"countdown-clock-30s\" id=\"cd_muc1_vd3\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n      </svg>\n      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n      </div>\n    </div>\n    \n        <div id=\"vd3_q\">\n          <b style=\"color:#38bdf8; font-size:18px;\">Ví dụ 3:</b> Cho $\\vec{u} = (m - 1; \\, 2; \\, -4)$ và $\\vec{v} = (3; \\, 1; \\, -2)$. Tìm tham số $m$ để $\\vec{u}$ và $\\vec{v}$ cùng phương.<br>\n          <i style=\"color:#94a3b8;\">(Thời gian suy nghĩ: 30 giây - Quan sát đồng hồ ở góc phải màn hình)</i>\n        </div>\n        <div id=\"vd3_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b style=\"color:#34d399;\">Lời giải:</b><br>\n          • $\\vec{u}, \\vec{v}$ cùng phương $\\iff$ tồn tại $k$ sao cho $\\vec{u} = k\\vec{v}$:<br>\n          $$\\frac{m - 1}{3} = \\frac{2}{1} = \\frac{-4}{-2} = 2 \\implies m - 1 = 6 \\iff m = 7$$.\n        </div>\n      </div>\n      <div id=\"part4\">\n        <h3>4. Cú Thông Thái cảnh báo bẫy</h3>\n        <p>• <b>Bẫy 1:</b> Toạ độ $\\vec{AB}$ phải lấy ngọn trừ gốc ($B - A$). Tuyệt đối không lấy gốc trừ ngọn!<br>\n        • <b>Bẫy 2:</b> Hình bình hành $ABCD$ thì $\\vec{AB} = \\vec{DC}$, không được viết $\\vec{AB} = \\vec{CD}$ (ngược hướng)!<br>\n        • <b>Bẫy 3:</b> Điều kiện cùng phương khi có toạ độ mẫu bằng $0$ phải dùng hệ $\\vec{u} = k\\vec{v}$, không viết phân số mẫu $0$.</p>\n      </div>\n      <div id=\"part5\">\n        <h3>5. Mẹo Thầy Cú & Casio</h3>\n        <p>• Trên Casio fx-580VN X: Nhấn <b>MENU $\\to$ 5 (Vector)</b> $\\to$ Lưu VctA, VctB.<br>\n        • Nhấn <b>OPTN</b> để thực hiện các phép tính $2\\text{VctA} - 3\\text{VctB}$ kiểm tra kết quả trong 3 giây!</p>\n      </div>\n    ",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 8: PHÉP TOÁN VÉC TƠ TRONG KHÔNG GIAN",
      "subtitle": "PHẦN 1: TỔNG, HIỆU & TÍCH VỚI MỘT SỐ",
      "startTime": 0.0,
      "endTime": 81.05,
      "duration": 81.05,
      "mascotMode": "talking",
      "mascotTip": "Quy tắc vàng: Lấy toạ độ ngọn trừ toạ độ gốc!",
      "bodyHtml": "\n            <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Toạ độ tổng, hiệu và tích vectơ với một số</h3>\n              <p>Cho $\\vec{a} = (x_1; y_1; z_1)$, $\\vec{b} = (x_2; y_2; z_2)$ và số thực $k$:</p>\n              <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:10px; margin:12px 0;\">\n                <div style=\"background:rgba(56,189,248,0.1); border:1px solid #38bdf8; border-radius:8px; padding:10px;\">\n                  <b style=\"color:#38bdf8;\">Tổng hai véc tơ:</b><br>\n                  $\\vec{a} + \\vec{b} = (x_1 + x_2; \\, y_1 + y_2; \\, z_1 + z_2)$\n                </div>\n                <div style=\"background:rgba(244,63,94,0.1); border:1px solid #f43f5e; border-radius:8px; padding:10px;\">\n                  <b style=\"color:#f43f5e;\">Hiệu hai véc tơ:</b><br>\n                  $\\vec{a} - \\vec{b} = (x_1 - x_2; \\, y_1 - y_2; \\, z_1 - z_2)$\n                </div>\n              </div>\n              <div style=\"background:rgba(251,191,36,0.1); border:1px solid #fbbf24; border-radius:8px; padding:10px; margin-bottom:12px;\">\n                <b style=\"color:#fbbf24;\">Tích véc tơ với số thực $k$:</b> $k\\vec{a} = (k x_1; \\, k y_1; \\, k z_1)$\n              </div>\n              <div style=\"background:rgba(52,211,153,0.1); border:1px solid #34d399; border-radius:8px; padding:10px;\">\n                <b style=\"color:#34d399;\">Toạ độ véc tơ $\\vec{AB}$ qua hai điểm $A, B$:</b><br>\n                $$\\vec{AB} = (x_B - x_A; \\, y_B - y_A; \\, z_B - z_A)$$\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 2,
      "title": "CÔNG THỨC MỞ RỘNG THEN CHỐT",
      "subtitle": "PHẦN 2: TRUNG ĐIỂM, TRỌNG TÂM & CÙNG PHƯƠNG",
      "startTime": 81.05,
      "endTime": 117.82,
      "duration": 36.77,
      "mascotMode": "thinking",
      "mascotTip": "Hình bình hành: D = A + C - B tính cực nhanh!",
      "bodyHtml": "\n            <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">2. Công thức mở rộng trọng tâm</h3>\n              <ul style=\"list-style-type:none; padding-left:0;\">\n                <li style=\"margin-bottom:8px;\">• <b>Trung điểm $M$ của $AB$:</b> $M\\left(\\frac{x_A+x_B}{2}; \\, \\frac{y_A+y_B}{2}; \\, \\frac{z_A+z_B}{2}\\right)$</li>\n                <li style=\"margin-bottom:8px;\">• <b>Trọng tâm $G$ của $\\triangle ABC$:</b> $G\\left(\\frac{x_A+x_B+x_C}{3}; \\, \\frac{y_A+y_B+y_C}{3}; \\, \\frac{z_A+z_B+z_C}{3}\\right)$</li>\n                <li style=\"margin-bottom:8px;\">• <b>Đỉnh thứ tư hình bình hành $ABCD$:</b> $D = A + C - B$</li>\n                <li style=\"margin-bottom:8px;\">• <b>Hai véc tơ cùng phương ($\\vec{b} \\ne \\vec{0}$):</b> $\\vec{a} = k\\vec{b} \\iff \\frac{x_1}{x_2} = \\frac{y_1}{y_2} = \\frac{z_1}{z_2}$</li>\n              </ul>\n              <div style=\"text-align:center; margin:10px 0;\">\n                <svg width=\"260\" height=\"130\" viewBox=\"0 0 260 130\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n                  \n<defs>\n  <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n  <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n  <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n  <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n  <marker id=\"arrP\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#c084fc\"/></marker>\n</defs>\n\n                  <!-- Parallelogram ABCD -->\n                  <polygon points=\"30,95 110,95 180,35 100,35\" fill=\"rgba(56,189,248,0.1)\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                  <line x1=\"30\" y1=\"95\" x2=\"110\" y2=\"95\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n                  <line x1=\"100\" y1=\"35\" x2=\"180\" y2=\"35\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n                  <text x=\"18\" y=\"105\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">A</text>\n                  <text x=\"115\" y=\"105\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">B</text>\n                  <text x=\"185\" y=\"35\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">C</text>\n                  <text x=\"88\" y=\"32\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">D</text>\n                  <text x=\"65\" y=\"115\" fill=\"#f43f5e\" font-size=\"12\" font-style=\"italic\">véc-tơ AB</text>\n                  <text x=\"135\" y=\"25\" fill=\"#f43f5e\" font-size=\"12\" font-style=\"italic\">véc-tơ DC</text>\n                </svg>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 3,
      "title": "LUYỆN TẬP VÍ DỤ",
      "subtitle": "PHẦN 3: CÁC VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "startTime": 117.82,
      "endTime": 121.2,
      "duration": 3.38,
      "mascotMode": "talking",
      "mascotTip": "Mỗi ví dụ có 30 giây suy nghĩ đếm ngược!",
      "bodyHtml": "\n            <div style=\"text-align:center; padding:40px 20px;\">\n              <h2 style=\"color:#38bdf8; font-size:28px; margin-bottom:15px;\">Phần 3: Các ví dụ rèn luyện điển hình</h2>\n              <p style=\"font-size:18px; color:#94a3b8; max-width:550px; margin:0 auto 20px;\">\n                Thầy đã chuẩn bị 3 ví dụ then chốt bám sát đề thi tốt nghiệp. Ở mỗi ví dụ, các em sẽ có <b>30 giây suy nghĩ</b> đếm ngược trực quan ở góc phải!\n              </p>\n              <div style=\"display:inline-flex; align-items:center; gap:8px; background:rgba(245,158,11,0.15); border:1px solid #f59e0b; border-radius:30px; padding:8px 20px; color:#fbbf24; font-weight:700;\">\n                <i class=\"fa-solid fa-stopwatch\"></i> Đồng hồ đếm ngược 30s sẵn sàng\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: TỔNG & HIỆU VÉC TƠ",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 121.2,
      "endTime": 166.94,
      "duration": 45.74,
      "mascotMode": "thinking",
      "mascotTip": "Nhân hệ số vào từng toạ độ rồi cộng trừ tương ứng!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              \n    <div class=\"countdown-clock-30s\" id=\"cd_m1_s4\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n      </svg>\n      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n      </div>\n    </div>\n    \n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">Ví dụ 1: Tìm toạ độ vectơ tổng hợp</h3>\n              <p style=\"font-size:19px; line-height:1.7; color:#f8fafc;\">\n                Cho hai véc tơ $\\vec{a} = (2; -1; 3)$ và $\\vec{b} = (-1; 4; 2)$.<br>\n                Tìm toạ độ của véc tơ:\n                $$\\vec{u} = 2\\vec{a} - 3\\vec{b}$$\n              </p>\n              <div style=\"margin-top:16px; padding:12px 16px; background:rgba(245,158,11,0.1); border-left:4px solid #f59e0b; border-radius:4px; color:#fcd34d; font-size:15px;\">\n                <b>Gợi ý Thầy Cú:</b> Nhân số 2 vào 3 toạ độ của $\\vec{a}$, nhân $-3$ vào 3 toạ độ của $\\vec{b}$, sau đó cộng các toạ độ tương ứng lại.\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: u = (7; -14; 0)",
      "startTime": 166.94,
      "endTime": 199.36,
      "duration": 32.42,
      "mascotMode": "talking",
      "mascotTip": "Tuyệt vời! Kết quả chính xác là (7; -14; 0).",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n              <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1:</h3>\n              <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                • Ta có: $2\\vec{a} = 2(2; -1; 3) = (4; -2; 6)$<br>\n                • $-3\\vec{b} = -3(-1; 4; 2) = (3; -12; -6)$<br>\n                • Khi đó toạ độ của $\\vec{u} = 2\\vec{a} - 3\\vec{b}$ là:<br>\n                $$\\begin{cases} x_u = 4 + 3 = 7 \\\\ y_u = -2 - 12 = -14 \\\\ z_u = 6 - 6 = 0 \\end{cases} \\implies \\vec{u} = (7; -14; 0)$$\n                <div style=\"margin-top:12px; padding:10px 14px; background:rgba(52,211,153,0.15); border-radius:6px; color:#a7f3d0; font-weight:600;\">\n                  ✓ Kết luận: $\\vec{u} = (7; -14; 0)$.\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: ĐỈNH HÌNH BÌNH HÀNH",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 199.36,
      "endTime": 238.53,
      "duration": 39.17,
      "mascotMode": "thinking",
      "mascotTip": "Quy tắc: D = A + C - B nhẩm cực nhanh!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              \n    <div class=\"countdown-clock-30s\" id=\"cd_m1_s6\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n      </svg>\n      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n      </div>\n    </div>\n    \n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">Ví dụ 2: Tìm đỉnh D của hình bình hành ABCD</h3>\n              <p style=\"font-size:19px; line-height:1.7; color:#f8fafc;\">\n                Trong không gian $Oxyz$, cho ba điểm:<br>\n                $A(1; -2; 3)$, $B(3; 0; -1)$, $C(-1; 4; 5)$.<br>\n                Tìm toạ độ đỉnh $D$ để tứ giác $ABCD$ là hình bình hành.\n              </p>\n              <div style=\"margin-top:16px; padding:12px 16px; background:rgba(245,158,11,0.1); border-left:4px solid #f59e0b; border-radius:4px; color:#fcd34d; font-size:15px;\">\n                <b>Gợi ý Thầy Cú:</b> $ABCD$ là hình bình hành $\\iff \\vec{AB} = \\vec{DC}$ hoặc dùng công thức nhanh $D = A + C - B$.\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: D(-3; 2; 9)",
      "startTime": 238.53,
      "endTime": 272.35,
      "duration": 33.82,
      "mascotMode": "talking",
      "mascotTip": "Nhớ: AB = DC, không được viết AB = CD!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n              <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2:</h3>\n              <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                • Ta có: $\\vec{AB} = (3 - 1; \\, 0 - (-2); \\, -1 - 3) = (2; 2; -4)$<br>\n                • Gọi $D(x; y; z) \\implies \\vec{DC} = (-1 - x; \\, 4 - y; \\, 5 - z)$<br>\n                • Tứ giác $ABCD$ là hình bình hành $\\iff \\vec{AB} = \\vec{DC}$:<br>\n                $$\\begin{cases} -1 - x = 2 \\\\ 4 - y = 2 \\\\ 5 - z = -4 \\end{cases} \\iff \\begin{cases} x = -3 \\\\ y = 2 \\\\ z = 9 \\end{cases} \\implies D(-3; 2; 9)$$\n                <div style=\"margin-top:12px; padding:10px 14px; background:rgba(52,211,153,0.15); border-radius:6px; color:#a7f3d0; font-weight:600;\">\n                  ✓ Cách 2 (Công thức cực nhanh): $D = A + C - B = (1 - 1 - 3; \\, -2 + 4 - 0; \\, 3 + 5 - (-1)) = (-3; 2; 9)$.\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: HAI VÉC TƠ CÙNG PHƯƠNG",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 272.35,
      "endTime": 305.9,
      "duration": 33.55,
      "mascotMode": "thinking",
      "mascotTip": "Lập tỉ số: Hoành chia hoành = Tung chia tung = Cao chia cao!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              \n    <div class=\"countdown-clock-30s\" id=\"cd_m1_s8\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n      </svg>\n      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n      </div>\n    </div>\n    \n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">Ví dụ 3: Tìm tham số m để hai vectơ cùng phương</h3>\n              <p style=\"font-size:19px; line-height:1.7; color:#f8fafc;\">\n                Cho hai véc tơ:<br>\n                $\\vec{u} = (m - 1; \\, 2; \\, -4)$ và $\\vec{v} = (3; \\, 1; \\, -2)$.<br>\n                Tìm giá trị của tham số $m$ để hai véc tơ $\\vec{u}$ và $\\vec{v}$ cùng phương.\n              </p>\n              <div style=\"margin-top:16px; padding:12px 16px; background:rgba(245,158,11,0.1); border-left:4px solid #f59e0b; border-radius:4px; color:#fcd34d; font-size:15px;\">\n                <b>Gợi ý Thầy Cú:</b> Vì các toạ độ của $\\vec{v}$ đều khác 0 nên ta lập tỉ số ba toạ độ bằng nhau: $\\frac{m-1}{3} = \\frac{2}{1} = \\frac{-4}{-2}$.\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: m = 7",
      "startTime": 305.9,
      "endTime": 335.52,
      "duration": 29.62,
      "mascotMode": "talking",
      "mascotTip": "Chính xác! m = 7.",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n              <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3:</h3>\n              <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                • Hai véc tơ $\\vec{u}$ và $\\vec{v}$ cùng phương khi và chỉ khi tồn tại số thực $k$ sao cho $\\vec{u} = k\\vec{v}$:<br>\n                $$\\begin{cases} m - 1 = 3k \\\\ 2 = 1k \\\\ -4 = -2k \\end{cases} \\iff \\begin{cases} k = 2 \\\\ m - 1 = 3 \\times 2 = 6 \\end{cases} \\iff m = 7$$\n                <div style=\"margin-top:12px; padding:10px 14px; background:rgba(52,211,153,0.15); border-radius:6px; color:#a7f3d0; font-weight:600;\">\n                  ✓ Kết luận: $m = 7$.\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI CẢNH BÁO BẪY",
      "subtitle": "PHẦN 4: 3 BẪY SAI LẦM KINH ĐIỂN",
      "startTime": 335.52,
      "endTime": 353.86,
      "duration": 18.34,
      "mascotMode": "warning",
      "mascotTip": "Cực kỳ chú ý dấu trừ khi ngọn hoặc gốc mang toạ độ âm!",
      "bodyHtml": "\n            <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n              <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:14px;\">4. Ba bẫy sai lầm học sinh hay mắc phải</h3>\n              <div style=\"display:flex; flex-direction:column; gap:12px;\">\n                <div style=\"background:rgba(244,63,94,0.12); border-left:4px solid #f43f5e; padding:12px 16px; border-radius:6px;\">\n                  <b style=\"color:#f43f5e;\">Bẫy 1: Ngược gốc và ngọn</b><br>\n                  Tính $\\vec{AB}$ mà lấy $A - B$ thay vì $B - A$. Hãy nhớ: <b>Ngọn trừ Gốc!</b>\n                </div>\n                <div style=\"background:rgba(251,191,36,0.12); border-left:4px solid #fbbf24; padding:12px 16px; border-radius:6px;\">\n                  <b style=\"color:#fbbf24;\">Bẫy 2: Thứ tự đỉnh hình bình hành</b><br>\n                  Hình bình hành $ABCD$ thì $\\vec{AB} = \\vec{DC}$ (cùng hướng sang phải). Viết $\\vec{AB} = \\vec{CD}$ là ngược hướng và sai hoàn toàn!\n                </div>\n                <div style=\"background:rgba(56,189,248,0.12); border-left:4px solid #38bdf8; padding:12px 16px; border-radius:6px;\">\n                  <b style=\"color:#38bdf8;\">Bẫy 3: Phép chia cho số 0</b><br>\n                  Khi kiểm tra cùng phương, nếu có toạ độ bằng $0$, không được lập tỉ số mà phải viết hệ $\\vec{u} = k\\vec{v}$.\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ & BẤM MÁY CASIO",
      "subtitle": "PHẦN 5: KIỂM TRA PHÉP TOÁN VECTOR TRONG 5 GIÂY",
      "startTime": 353.86,
      "endTime": 386.88,
      "duration": 33.02,
      "mascotMode": "talking",
      "mascotTip": "Casio 580: MENU 5 nhập VctA, VctB xử đẹp mọi bài toán!",
      "bodyHtml": "\n            <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">5. Bí quyết Casio fx-580VN X</h3>\n              <div style=\"background:rgba(15,23,42,0.8); border:1px solid #38bdf8; border-radius:10px; padding:16px;\">\n                <p>• <b>Bước 1:</b> Nhấn <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">MENU</kbd> $\\to$ phím <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">5</kbd> (Vector).<br>\n                • <b>Bước 2:</b> Chọn <b>1: VctA</b> $\\to$ Kích thước <b>3</b> $\\to$ Nhập toạ độ $(x; y; z)$.<br>\n                • <b>Bước 3:</b> Nhấn <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">OPTN</kbd> $\\to$ <b>1: Define Vector</b> $\\to$ Chọn <b>2: VctB</b> $\\to$ Nhập toạ độ véc tơ thứ hai.<br>\n                • <b>Bước 4:</b> Nhấn <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">AC</kbd> $\\to$ <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">OPTN</kbd> <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">3</kbd> ($VctA$) $+$ hoặc $-$ <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">OPTN</kbd> <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">4</kbd> ($VctB$).</p>\n                <div style=\"margin-top:10px; color:#34d399; font-weight:700;\">\n                  ⚡ Máy tính xuất ngay toạ độ $(x; y; z)$ chính xác $100\\%$!\n                </div>\n              </div>\n            </div>\n            "
    }
  ]
};

window.CHAPTER2_DATA.bai8_muc2 = {
  "lessonId": "bai8",
  "lessonTitle": "Bài 8: Biểu thức toạ độ của các phép toán vectơ",
  "sectionId": "bai8_muc2",
  "sectionTitle": "Mục 2: Tích vô hướng, độ dài vectơ & Khoảng cách",
  "audio": "/audio/bai8_muc2.mp3",
  "audioSrc": "./audio/bai8_muc2.mp3",
  "audio_src": "./audio/bai8_muc2.mp3",
  "timestamp_src": "timestamps/bai8_muc2.json",
  "totalDuration": 344.37,
  "duration": 344.37,
  "title": "Mục 2: Biểu thức toạ độ của tích vô hướng, độ dài & khoảng cách",
  "owl_tip": "Tích vô hướng bằng 0 khi và chỉ khi hai vectơ vuông góc!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 59.66,
      "id": "part2"
    },
    {
      "time": 86.23,
      "id": "part3"
    },
    {
      "time": 89.57,
      "id": "vd1_q"
    },
    {
      "time": 123.22,
      "id": "vd1_a"
    },
    {
      "time": 154.76,
      "id": "vd2_q"
    },
    {
      "time": 193.16,
      "id": "vd2_a"
    },
    {
      "time": 242.82,
      "id": "vd3_q"
    },
    {
      "time": 272.2,
      "id": "vd3_a"
    },
    {
      "time": 298.07,
      "id": "part4"
    },
    {
      "time": 318.69,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Tích vô hướng, Độ dài & Khoảng cách",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Điều kiện hai vectơ vuông góc",
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
      "partTitle": "Phần 5: Mẹo Thầy Cú & Casio",
      "scenes": [
        11
      ]
    }
  ],
  "content": "\n      <div id=\"part1\">\n        <h3>1. Tích vô hướng, độ dài vectơ & khoảng cách</h3>\n        <p>Cho $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$:<br>\n        • <b>Tích vô hướng:</b> $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2$<br>\n        • <b>Độ dài của véc tơ:</b> $|\\vec{u}| = \\sqrt{x_1^2 + y_1^2 + z_1^2}$<br>\n        • <b>Khoảng cách giữa hai điểm $A, B$:</b><br>\n        $$AB = |\\vec{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$$</p>\n      </div>\n      <div id=\"part2\">\n        <h3>2. Điều kiện hai vectơ vuông góc</h3>\n        <p>• Hai véc tơ vuông góc với nhau khi và chỉ khi tích vô hướng của chúng bằng 0:<br>\n        $$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0 \\iff x_1 x_2 + y_1 y_2 + z_1 z_2 = 0$$</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ rèn luyện điển hình</h3></div>\n      <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:16px; margin:10px 0; background:#0f172a;\">\n        \n    <div class=\"countdown-clock-30s\" id=\"cd_muc2_vd1\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n      </svg>\n      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n      </div>\n    </div>\n    \n        <div id=\"vd1_q\">\n          <b style=\"color:#38bdf8; font-size:18px;\">Ví dụ 1:</b> Cho $\\vec{u} = (2; -3; 1)$ và $\\vec{v} = (1; 2; 4)$. Tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$ và độ dài $|\\vec{u}|$.<br>\n          <i style=\"color:#94a3b8;\">(Thời gian suy nghĩ: 30 giây - Quan sát đồng hồ ở góc phải màn hình)</i>\n        </div>\n        <div id=\"vd1_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b style=\"color:#34d399;\">Lời giải:</b><br>\n          • $\\vec{u} \\cdot \\vec{v} = 2 \\times 1 + (-3) \\times 2 + 1 \\times 4 = 2 - 6 + 4 = 0 \\implies \\vec{u} \\perp \\vec{v}$.<br>\n          • $|\\vec{u}| = \\sqrt{2^2 + (-3)^2 + 1^2} = \\sqrt{4 + 9 + 1} = \\sqrt{14}$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:16px; margin:10px 0; background:#0f172a;\">\n        \n    <div class=\"countdown-clock-30s\" id=\"cd_muc2_vd2\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n      </svg>\n      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n      </div>\n    </div>\n    \n        <div id=\"vd2_q\">\n          <b style=\"color:#38bdf8; font-size:18px;\">Ví dụ 2:</b> Cho $A(1; 1; 0)$, $B(3; -1; 2)$, $C(-1; 2; 3)$. Chứng minh $\\triangle ABC$ vuông tại $A$ và tính diện tích tam giác.<br>\n          <i style=\"color:#94a3b8;\">(Thời gian suy nghĩ: 30 giây - Quan sát đồng hồ ở góc phải màn hình)</i>\n        </div>\n        <div id=\"vd2_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b style=\"color:#34d399;\">Lời giải:</b><br>\n          • $\\vec{AB} = (2; -2; 2)$, $\\vec{AC} = (-2; 1; 3)$<br>\n          • $\\vec{AB} \\cdot \\vec{AC} = 2(-2) + (-2)(1) + 2(3) = -4 - 2 + 6 = 0 \\implies \\vec{AB} \\perp \\vec{AC} \\implies \\triangle ABC$ vuông tại $A$.<br>\n          • $AB = \\sqrt{4+4+4} = 2\\sqrt{3}$; $AC = \\sqrt{4+1+9} = \\sqrt{14}$<br>\n          • $S_{ABC} = \\frac{1}{2} \\times 2\\sqrt{3} \\times \\sqrt{14} = \\sqrt{42}$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:16px; margin:10px 0; background:#0f172a;\">\n        \n    <div class=\"countdown-clock-30s\" id=\"cd_muc2_vd3\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n      </svg>\n      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n      </div>\n    </div>\n    \n        <div id=\"vd3_q\">\n          <b style=\"color:#38bdf8; font-size:18px;\">Ví dụ 3:</b> Cho $\\vec{a} = (x; 2; -1)$ và $\\vec{b} = (1; -3; 2)$. Tìm $x$ để $\\vec{a} \\perp \\vec{b}$.<br>\n          <i style=\"color:#94a3b8;\">(Thời gian suy nghĩ: 30 giây - Quan sát đồng hồ ở góc phải màn hình)</i>\n        </div>\n        <div id=\"vd3_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b style=\"color:#34d399;\">Lời giải:</b><br>\n          • $\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0 \\iff x(1) + 2(-3) + (-1)(2) = 0 \\iff x - 6 - 2 = 0 \\iff x = 8$.\n        </div>\n      </div>\n      <div id=\"part4\">\n        <h3>4. Cú Thông Thái cảnh báo bẫy</h3>\n        <p>• Khi bình phương toạ độ âm, bắt buộc phải có dấu ngoặc: $(-3)^2 = 9$. Không viết $-3^2 = -9$!<br>\n        • Tích vô hướng sinh ra một <b>số thực</b>, không phải một véc tơ!</p>\n      </div>\n      <div id=\"part5\">\n        <h3>5. Mẹo Casio Tích Vô Hướng</h3>\n        <p>• Trên Casio 580: Menu 5 $\\to$ OPTN $\\to$ Kéo xuống $\\to$ 2: Dot Product để tính tích vô hướng hai véc tơ!</p>\n      </div>\n    ",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 8: TÍCH VÔ HƯỚNG & ĐỘ DÀI",
      "subtitle": "PHẦN 1: CÔNG THỨC TOẠ ĐỘ CỐT LÕI",
      "startTime": 0.0,
      "endTime": 59.66,
      "duration": 59.66,
      "mascotMode": "talking",
      "mascotTip": "Tích vô hướng cho ra một số thực (vô hướng)!",
      "bodyHtml": "\n            <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Biểu thức toạ độ tích vô hướng & độ dài</h3>\n              <p>Cho $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$:</p>\n              <div style=\"background:rgba(56,189,248,0.1); border:1px solid #38bdf8; border-radius:8px; padding:12px; margin-bottom:10px;\">\n                <b style=\"color:#38bdf8;\">Tích vô hướng:</b> $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2$\n              </div>\n              <div style=\"background:rgba(52,211,153,0.1); border:1px solid #34d399; border-radius:8px; padding:12px; margin-bottom:10px;\">\n                <b style=\"color:#34d399;\">Độ dài của véc tơ:</b> $|\\vec{u}| = \\sqrt{x_1^2 + y_1^2 + z_1^2}$\n              </div>\n              <div style=\"background:rgba(251,191,36,0.1); border:1px solid #fbbf24; border-radius:8px; padding:12px;\">\n                <b style=\"color:#fbbf24;\">Khoảng cách giữa hai điểm $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$:</b><br>\n                $$AB = |\\vec{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$$\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 2,
      "title": "ĐIỀU KIỆN HAI VÉC TƠ VUÔNG GÓC",
      "subtitle": "PHẦN 2: u ⊥ v ⇔ u · v = 0",
      "startTime": 59.66,
      "endTime": 86.23,
      "duration": 26.57,
      "mascotMode": "thinking",
      "mascotTip": "Ứng dụng rất lớn để chứng minh tam giác vuông, mặt vuông!",
      "bodyHtml": "\n            <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">2. Điều kiện hai vectơ vuông góc</h3>\n              <p>Hai véc tơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau khi và chỉ khi tích vô hướng bằng 0:</p>\n              <div style=\"background:rgba(244,63,94,0.12); border:1.5px solid #f43f5e; border-radius:10px; padding:14px; text-align:center; font-size:20px; color:#fca5a5; margin-bottom:12px;\">\n                $$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0 \\iff x_1 x_2 + y_1 y_2 + z_1 z_2 = 0$$\n              </div>\n              <div style=\"text-align:center; margin:10px 0;\">\n                <svg width=\"240\" height=\"120\" viewBox=\"0 0 240 120\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n                  \n<defs>\n  <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n  <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n  <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n  <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n  <marker id=\"arrP\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#c084fc\"/></marker>\n</defs>\n\n                  <!-- Right angle vectors -->\n                  <line x1=\"40\" y1=\"90\" x2=\"180\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n                  <line x1=\"40\" y1=\"90\" x2=\"40\" y2=\"20\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n                  <rect x=\"40\" y=\"75\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n                  <text x=\"185\" y=\"95\" fill=\"#38bdf8\" font-size=\"13\" font-style=\"italic\">véc-tơ v</text>\n                  <text x=\"45\" y=\"25\" fill=\"#f43f5e\" font-size=\"13\" font-style=\"italic\">véc-tơ u</text>\n                  <text x=\"60\" y=\"75\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">90°</text>\n                </svg>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 3,
      "title": "LUYỆN TẬP VÍ DỤ",
      "subtitle": "PHẦN 3: CÁC VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "startTime": 86.23,
      "endTime": 89.57,
      "duration": 3.34,
      "mascotMode": "talking",
      "mascotTip": "Tập trung nháp nhanh trong 30 giây nhé các em!",
      "bodyHtml": "\n            <div style=\"text-align:center; padding:40px 20px;\">\n              <h2 style=\"color:#38bdf8; font-size:28px; margin-bottom:15px;\">Phần 3: Các ví dụ rèn luyện điển hình</h2>\n              <p style=\"font-size:18px; color:#94a3b8; max-width:550px; margin:0 auto 20px;\">\n                Luyện tập 3 ví dụ tính tích vô hướng, chứng minh tam giác vuông và tìm tham số vuông góc cùng <b>đồng hồ đếm ngược 30 giây</b>!\n              </p>\n              <div style=\"display:inline-flex; align-items:center; gap:8px; background:rgba(245,158,11,0.15); border:1px solid #f59e0b; border-radius:30px; padding:8px 20px; color:#fbbf24; font-weight:700;\">\n                <i class=\"fa-solid fa-stopwatch\"></i> Đồng hồ đếm ngược 30s sẵn sàng\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: TÍCH VÔ HƯỚNG & ĐỘ DÀI",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 89.57,
      "endTime": 123.22,
      "duration": 33.65,
      "mascotMode": "thinking",
      "mascotTip": "Lấy hoành nhân hoành + tung nhân tung + cao nhân cao!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              \n    <div class=\"countdown-clock-30s\" id=\"cd_m2_s4\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n      </svg>\n      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n      </div>\n    </div>\n    \n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">Ví dụ 1: Tính tích vô hướng và độ dài vectơ</h3>\n              <p style=\"font-size:19px; line-height:1.7; color:#f8fafc;\">\n                Cho hai véc tơ $\\vec{u} = (2; -3; 1)$ và $\\vec{v} = (1; 2; 4)$.<br>\n                Tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$, đồng thời tính độ dài của véc tơ $\\vec{u}$.\n              </p>\n              <div style=\"margin-top:16px; padding:12px 16px; background:rgba(245,158,11,0.1); border-left:4px solid #f59e0b; border-radius:4px; color:#fcd34d; font-size:15px;\">\n                <b>Gợi ý Thầy Cú:</b> Nhân các toạ độ tương ứng rồi cộng lại. Nhớ $(-3)^2 = 9$ khi tính căn bậc hai.\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: u · v = 0 & |u| = √14",
      "startTime": 123.22,
      "endTime": 154.76,
      "duration": 31.54,
      "mascotMode": "talking",
      "mascotTip": "u · v = 0 nghĩa là hai vectơ vuông góc đấy các em!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n              <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1:</h3>\n              <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                • Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ là:<br>\n                $$\\vec{u} \\cdot \\vec{v} = 2 \\times 1 + (-3) \\times 2 + 1 \\times 4 = 2 - 6 + 4 = 0$$\n                • Do $\\vec{u} \\cdot \\vec{v} = 0$ nên hai véc tơ $\\vec{u} \\perp \\vec{v}$.<br>\n                • Độ dài của véc tơ $\\vec{u}$ là:<br>\n                $$|\\vec{u}| = \\sqrt{2^2 + (-3)^2 + 1^2} = \\sqrt{4 + 9 + 1} = \\sqrt{14}$$\n                <div style=\"margin-top:12px; padding:10px 14px; background:rgba(52,211,153,0.15); border-radius:6px; color:#a7f3d0; font-weight:600;\">\n                  ✓ Đáp số: $\\vec{u} \\cdot \\vec{v} = 0$ và $|\\vec{u}| = \\sqrt{14}$.\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: CHỨNG MINH TAM GIÁC VUÔNG",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 154.76,
      "endTime": 193.16,
      "duration": 38.4,
      "mascotMode": "thinking",
      "mascotTip": "Tính vectơ AB, AC rồi kiểm tra tích vô hướng bằng 0!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              \n    <div class=\"countdown-clock-30s\" id=\"cd_m2_s6\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n      </svg>\n      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n      </div>\n    </div>\n    \n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">Ví dụ 2: Tam giác vuông & Diện tích</h3>\n              <p style=\"font-size:19px; line-height:1.7; color:#f8fafc;\">\n                Trong không gian $Oxyz$, cho ba điểm:<br>\n                $A(1; 1; 0)$, $B(3; -1; 2)$, $C(-1; 2; 3)$.<br>\n                Chứng minh tam giác $ABC$ vuông tại $A$ và tính diện tích tam giác $ABC$.\n              </p>\n              <div style=\"margin-top:16px; padding:12px 16px; background:rgba(245,158,11,0.1); border-left:4px solid #f59e0b; border-radius:4px; color:#fcd34d; font-size:15px;\">\n                <b>Gợi ý Thầy Cú:</b> Tính $\\vec{AB}$ và $\\vec{AC}$, chứng minh tích vô hướng bằng 0. Khi đó $S = \\frac{1}{2} AB \\times AC$.\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: S = √42",
      "startTime": 193.16,
      "endTime": 242.82,
      "duration": 49.66,
      "mascotMode": "talking",
      "mascotTip": "Diện tích tam giác vuông bằng nửa tích hai cạnh góc vuông!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n              <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2:</h3>\n              <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                • $\\vec{AB} = (3-1; \\, -1-1; \\, 2-0) = (2; -2; 2)$<br>\n                • $\\vec{AC} = (-1-1; \\, 2-1; \\, 3-0) = (-2; 1; 3)$<br>\n                • $\\vec{AB} \\cdot \\vec{AC} = 2(-2) + (-2)(1) + 2(3) = -4 - 2 + 6 = 0 \\implies \\vec{AB} \\perp \\vec{AC}$<br>\n                $\\implies \\triangle ABC$ vuông tại đỉnh $A$.<br>\n                • Độ dài hai cạnh góc vuông:<br>\n                $$AB = \\sqrt{2^2 + (-2)^2 + 2^2} = \\sqrt{12} = 2\\sqrt{3}$$\n                $$AC = \\sqrt{(-2)^2 + 1^2 + 3^2} = \\sqrt{4 + 1 + 9} = \\sqrt{14}$$\n                • Diện tích: $S_{ABC} = \\frac{1}{2} \\times AB \\times AC = \\frac{1}{2} \\times 2\\sqrt{3} \\times \\sqrt{14} = \\sqrt{42}$.\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: TÌM THAM SỐ VUÔNG GÓC",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 242.82,
      "endTime": 272.2,
      "duration": 29.38,
      "mascotMode": "thinking",
      "mascotTip": "Phương trình bậc nhất 1 ẩn cực kỳ đơn giản!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              \n    <div class=\"countdown-clock-30s\" id=\"cd_m2_s8\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n      </svg>\n      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n      </div>\n    </div>\n    \n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">Ví dụ 3: Tìm toạ độ để hai vectơ vuông góc</h3>\n              <p style=\"font-size:19px; line-height:1.7; color:#f8fafc;\">\n                Cho hai véc tơ:<br>\n                $\\vec{a} = (x; 2; -1)$ và $\\vec{b} = (1; -3; 2)$.<br>\n                Tìm giá trị của $x$ để véc tơ $\\vec{a}$ vuông góc với véc tơ $\\vec{b}$.\n              </p>\n              <div style=\"margin-top:16px; padding:12px 16px; background:rgba(245,158,11,0.1); border-left:4px solid #f59e0b; border-radius:4px; color:#fcd34d; font-size:15px;\">\n                <b>Gợi ý Thầy Cú:</b> Thiết lập phương trình $\\vec{a} \\cdot \\vec{b} = 0$ và giải tìm $x$.\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: x = 8",
      "startTime": 272.2,
      "endTime": 298.07,
      "duration": 25.87,
      "mascotMode": "talking",
      "mascotTip": "Chính xác! x = 8.",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n              <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3:</h3>\n              <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                • Ta có: $\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0$<br>\n                $$\\iff x \\times 1 + 2 \\times (-3) + (-1) \\times 2 = 0$$\n                $$\\iff x - 6 - 2 = 0 \\iff x - 8 = 0 \\iff x = 8$$\n                <div style=\"margin-top:12px; padding:10px 14px; background:rgba(52,211,153,0.15); border-radius:6px; color:#a7f3d0; font-weight:600;\">\n                  ✓ Kết luận: $x = 8$.\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI CẢNH BÁO BẪY",
      "subtitle": "PHẦN 4: BẪY BÌNH PHƯƠNG SỐ ÂM",
      "startTime": 298.07,
      "endTime": 318.69,
      "duration": 20.62,
      "mascotMode": "warning",
      "mascotTip": "Đóng ngoặc số âm khi bình phương: (-3)^2 = 9!",
      "bodyHtml": "\n            <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n              <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:14px;\">4. Bẫy sai lầm nghiêm trọng</h3>\n              <div style=\"background:rgba(244,63,94,0.12); border-left:4px solid #f43f5e; padding:14px 18px; border-radius:8px; margin-bottom:12px;\">\n                <b style=\"color:#f43f5e; font-size:19px;\">Bẫy bấm máy Casio số âm:</b><br>\n                Khi tính độ dài $|\\vec{u}| = \\sqrt{x^2 + y^2 + z^2}$, nếu $y = -3$, nhiều bạn bấm:\n                $$\\sqrt{2^2 - 3^2 + 1^2} = \\sqrt{4 - 9 + 1} = \\text{Math ERROR!}$$\n                <b style=\"color:#34d399;\">Quy tắc chuẩn:</b> Bắt buộc phải bấm $(-3)^2$ hoặc bỏ dấu âm nhẩm luôn $3^2 = 9$.\n              </div>\n              <div style=\"background:rgba(251,191,36,0.12); border-left:4px solid #fbbf24; padding:14px 18px; border-radius:8px;\">\n                <b style=\"color:#fbbf24; font-size:19px;\">Nhầm lẫn giữa tích vô hướng và có hướng:</b><br>\n                Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ cho kết quả là <b>MỘT CON SỐ</b>, không còn toạ độ ngoặc đơn $(x; y; z)$ nữa!\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 11,
      "title": "MẸO THẦY CÚ & BẤM MÁY CASIO",
      "subtitle": "PHẦN 5: TÍNH TÍCH VÔ HƯỚNG TRÊN CASIO 580",
      "startTime": 318.69,
      "endTime": 344.37,
      "duration": 25.68,
      "mascotMode": "talking",
      "mascotTip": "Dùng Dot Product trên Casio 580 tính tích vô hướng!",
      "bodyHtml": "\n            <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">5. Kỹ thuật Casio Dot Product</h3>\n              <div style=\"background:rgba(15,23,42,0.8); border:1px solid #38bdf8; border-radius:10px; padding:16px;\">\n                <p>• <b>Bước 1:</b> Nhấn <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">MENU</kbd> <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">5</kbd> (Vector) $\\to$ Nhập VctA, VctB.<br>\n                • <b>Bước 2:</b> Ra màn hình tính toán, gọi <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">OPTN</kbd> <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">3</kbd> ($VctA$).<br>\n                • <b>Bước 3:</b> Nhấn <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">OPTN</kbd> $\\to$ bấm mũi tên <b>xuống [▼]</b> $\\to$ chọn <b>2: Dot Product</b> (dấu chấm tích vô hướng $\\bullet$).<br>\n                • <b>Bước 4:</b> Gọi tiếp <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">OPTN</kbd> <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">4</kbd> ($VctB$) $\\to$ bấm <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">=</kbd>.</p>\n                <div style=\"margin-top:10px; color:#34d399; font-weight:700;\">\n                  ⚡ Màn hình hiển thị: VctA • VctB = số thực tích vô hướng ngay lập tức!\n                </div>\n              </div>\n            </div>\n            "
    }
  ]
};

window.CHAPTER2_DATA.bai8_muc3 = {
  "lessonId": "bai8",
  "lessonTitle": "Bài 8: Biểu thức toạ độ của các phép toán vectơ",
  "sectionId": "bai8_muc3",
  "sectionTitle": "Mục 3: Góc giữa hai vectơ & Bài toán thực tế",
  "audio": "/audio/bai8_muc3.mp3",
  "audioSrc": "./audio/bai8_muc3.mp3",
  "audio_src": "./audio/bai8_muc3.mp3",
  "timestamp_src": "timestamps/bai8_muc3.json",
  "totalDuration": 318.01,
  "duration": 318.01,
  "title": "Mục 3: Cosin góc giữa hai vectơ & Mô hình hoá thực tế",
  "owl_tip": "Góc giữa hai vectơ có thể tù (từ 0 đến 180 độ)!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 53.35,
      "id": "part2"
    },
    {
      "time": 90.05,
      "id": "part3"
    },
    {
      "time": 93.43,
      "id": "vd1_q"
    },
    {
      "time": 119.97,
      "id": "vd1_a"
    },
    {
      "time": 144.69,
      "id": "vd2_q"
    },
    {
      "time": 179.51,
      "id": "vd2_a"
    },
    {
      "time": 198.61,
      "id": "vd3_q"
    },
    {
      "time": 240.03,
      "id": "vd3_a"
    },
    {
      "time": 278.55,
      "id": "part4"
    },
    {
      "time": 295.83,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Công thức Cosin góc giữa hai vectơ",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Ứng dụng mô hình hoá thực tế (Vật lý, Radar)",
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
  "content": "\n      <div id=\"part1\">\n        <h3>1. Góc giữa hai vectơ</h3>\n        <p>Cho hai véc tơ khác $\\vec{0}$: $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$:<br>\n        $$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\\sqrt{x_1^2 + y_1^2 + z_1^2} \\cdot \\sqrt{x_2^2 + y_2^2 + z_2^2}}$$\n        • $0^\\circ \\le (\\vec{u}, \\vec{v}) \\le 180^\\circ$.</p>\n      </div>\n      <div id=\"part2\">\n        <h3>2. Ứng dụng mô hình hoá thực tế</h3>\n        <p>• <b>Công cơ học trong Vật lý:</b> $A = \\vec{F} \\cdot \\vec{d} = F_x d_x + F_y d_y + F_z d_z$ (Joules).<br>\n        • <b>Không lưu & Radar:</b> Vị trí máy bay $A(x_A; y_A; z_A) \\to B(x_B; y_B; z_B)$:<br>\n        - Quãng đường bay: $AB = |\\vec{AB}|$.<br>\n        - Độ cao tăng giảm: $\\Delta h = z_B - z_A$.</p>\n      </div>\n      <div id=\"part3\"><h3>3. Các ví dụ rèn luyện điển hình</h3></div>\n      <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:16px; margin:10px 0; background:#0f172a;\">\n        \n    <div class=\"countdown-clock-30s\" id=\"cd_muc3_vd1\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n      </svg>\n      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n      </div>\n    </div>\n    \n        <div id=\"vd1_q\">\n          <b style=\"color:#38bdf8; font-size:18px;\">Ví dụ 1:</b> Cho $\\vec{u} = (1; 0; 1)$ và $\\vec{v} = (0; 1; 1)$. Tính góc giữa $\\vec{u}$ và $\\vec{v}$.<br>\n          <i style=\"color:#94a3b8;\">(Thời gian suy nghĩ: 30 giây - Quan sát đồng hồ ở góc phải màn hình)</i>\n        </div>\n        <div id=\"vd1_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b style=\"color:#34d399;\">Lời giải:</b><br>\n          • $\\vec{u} \\cdot \\vec{v} = 1(0) + 0(1) + 1(1) = 1$<br>\n          • $|\\vec{u}| = \\sqrt{2}$, $|\\vec{v}| = \\sqrt{2}$<br>\n          • $\\cos(\\vec{u}, \\vec{v}) = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\implies (\\vec{u}, \\vec{v}) = 60^\\circ$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:16px; margin:10px 0; background:#0f172a;\">\n        \n    <div class=\"countdown-clock-30s\" id=\"cd_muc3_vd2\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n      </svg>\n      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n      </div>\n    </div>\n    \n        <div id=\"vd2_q\">\n          <b style=\"color:#38bdf8; font-size:18px;\">Ví dụ 2:</b> Lực $\\vec{F} = (30; -20; 50)$ (N) làm dịch chuyển vật theo $\\vec{d} = (4; 6; 2)$ (m). Tính công sinh ra.<br>\n          <i style=\"color:#94a3b8;\">(Thời gian suy nghĩ: 30 giây - Quan sát đồng hồ ở góc phải màn hình)</i>\n        </div>\n        <div id=\"vd2_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b style=\"color:#34d399;\">Lời giải:</b><br>\n          • $A = \\vec{F} \\cdot \\vec{d} = 30(4) + (-20)(6) + 50(2) = 120 - 120 + 100 = 100\\text{ J}$.\n        </div>\n      </div>\n      <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:16px; margin:10px 0; background:#0f172a;\">\n        \n    <div class=\"countdown-clock-30s\" id=\"cd_muc3_vd3\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n      </svg>\n      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n      </div>\n    </div>\n    \n        <div id=\"vd3_q\">\n          <b style=\"color:#38bdf8; font-size:18px;\">Ví dụ 3:</b> Radar phát hiện máy bay bay từ $A(10; 20; 8)$ đến $B(40; 60; 12)$ (km). Tính quãng đường và độ cao tăng.<br>\n          <i style=\"color:#94a3b8;\">(Thời gian suy nghĩ: 30 giây - Quan sát đồng hồ ở góc phải màn hình)</i>\n        </div>\n        <div id=\"vd3_a\" style=\"margin-top:12px; border-top:1px dashed #475569; padding-top:10px;\">\n          <b style=\"color:#34d399;\">Lời giải:</b><br>\n          • $\\vec{AB} = (30; 40; 4)$<br>\n          • Quãng đường: $AB = \\sqrt{30^2 + 40^2 + 4^2} = \\sqrt{2516} \\approx 50{,}16\\text{ km}$<br>\n          • Độ cao tăng thêm: $\\Delta h = 12 - 8 = 4\\text{ km}$.\n        </div>\n      </div>\n      <div id=\"part4\">\n        <h3>4. Cú Thông Thái cảnh báo bẫy</h3>\n        <p>• Góc giữa hai véc tơ có thể là góc tù ($0^\\circ \\le \\theta \\le 180^\\circ$, $\\cos$ âm). Không tự ý lấy trị tuyệt đối!</p>\n      </div>\n      <div id=\"part5\">\n        <h3>5. Kỹ thuật Casio & Tổng kết</h3>\n        <p>• Bấm góc trên Casio 580: OPTN $\\to$ [▼] $\\to$ 3: Angle $\\to$ Angle(VctA, VctB) = số đo góc!</p>\n      </div>\n    ",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 8: GÓC GIỮA HAI VÉC TƠ",
      "subtitle": "PHẦN 1: CÔNG THỨC COSIN TOẠ ĐỘ",
      "startTime": 0.0,
      "endTime": 53.35,
      "duration": 53.35,
      "mascotMode": "talking",
      "mascotTip": "Góc giữa hai vectơ có thể nhọn, vuông hoặc tù!",
      "bodyHtml": "\n            <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">1. Công thức Cosin góc giữa hai vectơ</h3>\n              <p>Cho $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$ khác $\\vec{0}$:</p>\n              <div style=\"background:rgba(56,189,248,0.12); border:1.5px solid #38bdf8; border-radius:10px; padding:14px; text-align:center; font-size:21px; color:#bae6fd; margin-bottom:14px;\">\n                $$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\\sqrt{x_1^2 + y_1^2 + z_1^2} \\cdot \\sqrt{x_2^2 + y_2^2 + z_2^2}}$$\n              </div>\n              <div style=\"display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px; text-align:center; font-size:15px;\">\n                <div style=\"background:rgba(52,211,153,0.1); border:1px solid #34d399; border-radius:6px; padding:8px;\">\n                  <b style=\"color:#34d399;\">$\\cos > 0$</b><br>Góc nhọn ($< 90^\\circ$)\n                </div>\n                <div style=\"background:rgba(251,191,36,0.1); border:1px solid #fbbf24; border-radius:6px; padding:8px;\">\n                  <b style=\"color:#fbbf24;\">$\\cos = 0$</b><br>Góc vuông ($= 90^\\circ$)\n                </div>\n                <div style=\"background:rgba(244,63,94,0.1); border:1px solid #f43f5e; border-radius:6px; padding:8px;\">\n                  <b style=\"color:#f43f5e;\">$\\cos < 0$</b><br>Góc tù ($> 90^\\circ$)\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 2,
      "title": "ỨNG DỤNG MÔ HÌNH HOÁ THỰC TẾ",
      "subtitle": "PHẦN 2: CÔNG CƠ HỌC & ĐƯỜNG BAY RADAR",
      "startTime": 53.35,
      "endTime": 90.05,
      "duration": 36.7,
      "mascotMode": "thinking",
      "mascotTip": "Toán học gắn liền với Vật lý và Đời sống hàng ngày!",
      "bodyHtml": "\n            <div style=\"font-size:18px; line-height:1.65; color:#f8fafc;\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:12px;\">2. Mô hình hoá thực tế trong không gian</h3>\n              <div style=\"background:rgba(251,191,36,0.1); border:1px solid #fbbf24; border-radius:8px; padding:12px; margin-bottom:12px;\">\n                <b style=\"color:#fbbf24;\">Ứng dụng 1 (Vật lý - Công của lực kéo):</b><br>\n                Khi lực $\\vec{F} = (F_x; F_y; F_z)$ làm vật dịch chuyển vectơ độ dời $\\vec{d} = (d_x; d_y; d_z)$ thì công sinh ra là:\n                $$A = \\vec{F} \\cdot \\vec{d} = F_x d_x + F_y d_y + F_z d_z \\quad (\\text{Joules})$$\n              </div>\n              <div style=\"background:rgba(56,189,248,0.1); border:1px solid #38bdf8; border-radius:8px; padding:12px;\">\n                <b style=\"color:#38bdf8;\">Ứng dụng 2 (Hàng không & Kiểm soát không lưu Oxyz):</b><br>\n                • Quãng đường bay: $AB = |\\vec{AB}| = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2 + (z_B-z_A)^2}$<br>\n                • Độ cao tăng thêm của máy bay: $\\Delta h = z_B - z_A$.\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 3,
      "title": "LUYỆN TẬP VÍ DỤ",
      "subtitle": "PHẦN 3: CÁC VÍ DỤ RÈN LUYỆN ĐIỂN HÌNH",
      "startTime": 90.05,
      "endTime": 93.43,
      "duration": 3.38,
      "mascotMode": "talking",
      "mascotTip": "3 ví dụ đỉnh cao kết thúc trọn vẹn Chương 2!",
      "bodyHtml": "\n            <div style=\"text-align:center; padding:40px 20px;\">\n              <h2 style=\"color:#38bdf8; font-size:28px; margin-bottom:15px;\">Phần 3: Các ví dụ rèn luyện điển hình</h2>\n              <p style=\"font-size:18px; color:#94a3b8; max-width:550px; margin:0 auto 20px;\">\n                Rèn luyện tính góc vectơ, tính công cơ học và bài toán không lưu thực tế cùng <b>đồng hồ 30 giây</b>!\n              </p>\n              <div style=\"display:inline-flex; align-items:center; gap:8px; background:rgba(245,158,11,0.15); border:1px solid #f59e0b; border-radius:30px; padding:8px 20px; color:#fbbf24; font-weight:700;\">\n                <i class=\"fa-solid fa-stopwatch\"></i> Đồng hồ đếm ngược 30s sẵn sàng\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: GÓC GIỮA HAI VÉC TƠ",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 93.43,
      "endTime": 119.97,
      "duration": 26.54,
      "mascotMode": "thinking",
      "mascotTip": "Tính tích vô hướng chia tích độ dài!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              \n    <div class=\"countdown-clock-30s\" id=\"cd_m3_s4\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n      </svg>\n      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n      </div>\n    </div>\n    \n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">Ví dụ 1: Tính góc giữa hai vectơ</h3>\n              <p style=\"font-size:19px; line-height:1.7; color:#f8fafc;\">\n                Cho hai véc tơ:<br>\n                $\\vec{u} = (1; 0; 1)$ và $\\vec{v} = (0; 1; 1)$.<br>\n                Tính góc giữa hai véc tơ $\\vec{u}$ và $\\vec{v}$.\n              </p>\n              <div style=\"margin-top:16px; padding:12px 16px; background:rgba(245,158,11,0.1); border-left:4px solid #f59e0b; border-radius:4px; color:#fcd34d; font-size:15px;\">\n                <b>Gợi ý Thầy Cú:</b> Tính $\\vec{u} \\cdot \\vec{v}$, tính $|\\vec{u}|$, $|\\vec{v}|$ rồi tính $\\cos$ suy ra góc.\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: (u, v) = 60°",
      "startTime": 119.97,
      "endTime": 144.69,
      "duration": 24.72,
      "mascotMode": "talking",
      "mascotTip": "cos = 1/2 suy ra góc đúng bằng 60 độ!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n              <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 1:</h3>\n              <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                • $\\vec{u} \\cdot \\vec{v} = 1 \\times 0 + 0 \\times 1 + 1 \\times 1 = 1$<br>\n                • Độ dài: $|\\vec{u}| = \\sqrt{1^2 + 0^2 + 1^2} = \\sqrt{2}$; $|\\vec{v}| = \\sqrt{0^2 + 1^2 + 1^2} = \\sqrt{2}$<br>\n                • Ta có:\n                $$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\frac{1}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{1}{2}$$\n                • Suy ra: $(\\vec{u}, \\vec{v}) = 60^\\circ$.\n                <div style=\"margin-top:12px; padding:10px 14px; background:rgba(52,211,153,0.15); border-radius:6px; color:#a7f3d0; font-weight:600;\">\n                  ✓ Kết luận: Góc giữa hai véc tơ bằng $60^\\circ$.\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: CÔNG CƠ HỌC TRONG VẬT LÝ",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 144.69,
      "endTime": 179.51,
      "duration": 34.82,
      "mascotMode": "thinking",
      "mascotTip": "Công A = F · d!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              \n    <div class=\"countdown-clock-30s\" id=\"cd_m3_s6\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n      </svg>\n      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n      </div>\n    </div>\n    \n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">Ví dụ 2: Bài toán thực tế - Công của lực F</h3>\n              <p style=\"font-size:19px; line-height:1.7; color:#f8fafc;\">\n                Một chất điểm chịu tác dụng của lực $\\vec{F} = (30; -20; 50)$ (N)<br>\n                làm dịch chuyển vật theo véc tơ độ dời $\\vec{d} = (4; 6; 2)$ (m).<br>\n                Tính công cơ học sinh ra bởi lực $\\vec{F}$.\n              </p>\n              <div style=\"margin-top:16px; padding:12px 16px; background:rgba(245,158,11,0.1); border-left:4px solid #f59e0b; border-radius:4px; color:#fcd34d; font-size:15px;\">\n                <b>Gợi ý Thầy Cú:</b> Công cơ học $A = \\vec{F} \\cdot \\vec{d}$, áp dụng trực tiếp tích vô hướng của hai vectơ.\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: A = 100 Joules",
      "startTime": 179.51,
      "endTime": 198.61,
      "duration": 19.1,
      "mascotMode": "talking",
      "mascotTip": "100 Joules! Bài toán thực tế cực kỳ trực quan.",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n              <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 2:</h3>\n              <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                • Công sinh ra bởi lực $\\vec{F}$ khi làm vật dịch chuyển vectơ độ dời $\\vec{d}$ là:<br>\n                $$A = \\vec{F} \\cdot \\vec{d} = F_x d_x + F_y d_y + F_z d_z$$\n                $$A = 30 \\times 4 + (-20) \\times 6 + 50 \\times 2 = 120 - 120 + 100 = 100\\text{ (J)}$$\n                <div style=\"margin-top:12px; padding:10px 14px; background:rgba(52,211,153,0.15); border-radius:6px; color:#a7f3d0; font-weight:600;\">\n                  ✓ Kết luận: Công cơ học sinh ra là $100\\text{ Joules}$.\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: QUỸ ĐẠO BAY TRÊN RADAR",
      "subtitle": "ĐỀ BÀI (30 GIÂY SUY NGHĨ)",
      "startTime": 198.61,
      "endTime": 240.03,
      "duration": 41.42,
      "mascotMode": "thinking",
      "mascotTip": "Quãng đường là độ dài AB, độ cao là zB - zA!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"position:relative; border:2px solid #38bdf8; border-radius:12px; padding:20px; background:linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)); box-shadow:0 6px 20px rgba(0,0,0,0.4);\">\n              \n    <div class=\"countdown-clock-30s\" id=\"cd_m3_s8\" style=\"position:absolute; top:12px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(15,23,42,0.92); border:1.5px solid #f59e0b; border-radius:24px; padding:4px 12px; box-shadow:0 0 14px rgba(245,158,11,0.35); z-index:20;\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 36 36\" style=\"display:block;\">\n        <circle cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n        <circle class=\"countdown-circle-svg\" cx=\"18\" cy=\"18\" r=\"15.5\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"97.4\" stroke-dashoffset=\"0\" stroke-linecap=\"round\" style=\"transform:rotate(-90deg); transform-origin:50% 50%;\"/>\n      </svg>\n      <div style=\"display:flex; flex-direction:column; align-items:flex-start; line-height:1.1;\">\n        <span style=\"font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;\">Suy nghĩ</span>\n        <span class=\"countdown-number-val\" style=\"font-size:15px; font-weight:800; color:#fbbf24; font-family:monospace; min-width:28px;\">30s</span>\n      </div>\n    </div>\n    \n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">Ví dụ 3: Mô hình radar kiểm soát không lưu Oxyz</h3>\n              <p style=\"font-size:19px; line-height:1.7; color:#f8fafc;\">\n                Trạm radar $O(0;0;0)$ phát hiện máy bay bay từ vị trí $A(10; 20; 8)$ đến vị trí $B(40; 60; 12)$ (đơn vị: km).<br>\n                Tính quãng đường máy bay đã di chuyển và độ cao máy bay tăng thêm.\n              </p>\n              <div style=\"margin-top:16px; padding:12px 16px; background:rgba(245,158,11,0.1); border-left:4px solid #f59e0b; border-radius:4px; color:#fcd34d; font-size:15px;\">\n                <b>Gợi ý Thầy Cú:</b> Quãng đường chính là độ dài đoạn thẳng $AB = |\\vec{AB}|$. Độ cao máy bay tăng thêm chính là hiệu số cao độ $\\Delta h = z_B - z_A$.\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 9,
      "title": "VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: AB ≈ 50,16 km & Δh = 4 km",
      "startTime": 240.03,
      "endTime": 278.55,
      "duration": 38.52,
      "mascotMode": "talking",
      "mascotTip": "Đúng chuẩn cấu trúc bài toán thực tế đề thi tốt nghiệp!",
      "bodyHtml": "\n            <div class=\"slide\" style=\"border:2px solid #10b981; padding:20px; border-radius:12px; background:rgba(16,185,129,0.08);\">\n              <h3 style=\"color:#34d399; font-size:22px; margin-bottom:12px;\">Lời giải chi tiết Ví dụ 3:</h3>\n              <div style=\"font-size:18px; line-height:1.75; color:#f8fafc;\">\n                • Véc tơ dịch chuyển của máy bay:<br>\n                $$\\vec{AB} = (40 - 10; \\, 60 - 20; \\, 12 - 8) = (30; 40; 4)$$\n                • Quãng đường máy bay đã di chuyển là độ dài đoạn thẳng $AB$:<br>\n                $$AB = |\\vec{AB}| = \\sqrt{30^2 + 40^2 + 4^2} = \\sqrt{900 + 1600 + 16} = \\sqrt{2516} \\approx 50{,}16\\text{ (km)}$$\n                • Độ cao máy bay tăng thêm là:<br>\n                $$\\Delta h = z_B - z_A = 12 - 8 = 4\\text{ (km)}$$\n                <div style=\"margin-top:12px; padding:10px 14px; background:rgba(52,211,153,0.15); border-radius:6px; color:#a7f3d0; font-weight:600;\">\n                  ✓ Kết luận: Quãng đường $\\approx 50{,}16\\text{ km}$ và độ cao tăng $4\\text{ km}$.\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 10,
      "title": "CÚ THÔNG THÁI CẢNH BÁO BẪY",
      "subtitle": "PHẦN 4: GÓC GIỮA VÉC TƠ KHÁC GÓC GIỮA HAI ĐƯỜNG THẲNG",
      "startTime": 278.55,
      "endTime": 295.83,
      "duration": 17.28,
      "mascotMode": "warning",
      "mascotTip": "Góc giữa 2 vectơ: 0° đến 180°. Góc giữa 2 đường thẳng: 0° đến 90°!",
      "bodyHtml": "\n            <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n              <h3 style=\"color:#f43f5e; font-size:22px; margin-bottom:14px;\">4. Bẫy sai lầm về góc</h3>\n              <div style=\"display:flex; flex-direction:column; gap:12px;\">\n                <div style=\"background:rgba(244,63,94,0.12); border-left:4px solid #f43f5e; padding:14px 18px; border-radius:8px;\">\n                  <b style=\"color:#f43f5e; font-size:19px;\">Góc giữa hai véc tơ $(\\vec{u}, \\vec{v})$:</b><br>\n                  Có thể là góc tù ($0^\\circ \\le \\theta \\le 180^\\circ$). Khi $\\cos(\\vec{u}, \\vec{v}) = -\\frac{1}{2}$ thì góc là $120^\\circ$. <b>Tuyệt đối không lấy trị tuyệt đối!</b>\n                </div>\n                <div style=\"background:rgba(56,189,248,0.12); border-left:4px solid #38bdf8; padding:14px 18px; border-radius:8px;\">\n                  <b style=\"color:#38bdf8; font-size:19px;\">Góc giữa hai đường thẳng $(\\Delta_1, \\Delta_2)$:</b><br>\n                  Luôn là góc nhọn hoặc vuông ($0^\\circ \\le \\varphi \\le 90^\\circ$), nên phải lấy trị tuyệt đối: $\\cos \\varphi = \\frac{|\\vec{u_1} \\cdot \\vec{u_2}|}{|\\vec{u_1}| \\cdot |\\vec{u_2}|}$.\n                </div>\n              </div>\n            </div>\n            "
    },
    {
      "sceneIndex": 11,
      "title": "KỸ THUẬT CASIO & TỔNG KẾT",
      "subtitle": "PHẦN 5: TÍNH GÓC TRÊN CASIO 580 & TỔNG KẾT BÀI 8",
      "startTime": 295.83,
      "endTime": 318.01,
      "duration": 22.18,
      "mascotMode": "talking",
      "mascotTip": "Chúc các em nắm chắc 100% kiến thức Bài 8!",
      "bodyHtml": "\n            <div style=\"font-size:18px; line-height:1.7; color:#f8fafc;\">\n              <h3 style=\"color:#38bdf8; font-size:22px; margin-bottom:14px;\">5. Kỹ thuật Casio Angle & Tổng kết</h3>\n              <div style=\"background:rgba(15,23,42,0.8); border:1px solid #38bdf8; border-radius:10px; padding:16px; margin-bottom:12px;\">\n                <b style=\"color:#fbbf24;\">Tính góc giữa hai vectơ trên Casio 580:</b><br>\n                • Nhấn <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">OPTN</kbd> $\\to$ bấm mũi tên <b>xuống [▼]</b> $\\to$ chọn <b>3: Angle</b>.<br>\n                • Nhập <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">OPTN</kbd> <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">3</kbd> ($VctA$), nhấn dấu phẩy <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">SHIFT</kbd> <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">)</kbd>, rồi nhập <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">OPTN</kbd> <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">4</kbd> ($VctB$).<br>\n                • Biểu thức: <code>Angle(VctA, VctB)</code> $\\to$ Nhấn <kbd style=\"background:#334155; padding:2px 6px; border-radius:4px;\">=</kbd> $\\to$ Máy hiển thị chính xác số đo góc theo độ!\n              </div>\n              <div style=\"background:rgba(52,211,153,0.15); border:1px solid #34d399; border-radius:8px; padding:12px; color:#a7f3d0; text-align:center; font-weight:700;\">\n                🎉 Chúc mừng các em đã hoàn thành xuất sắc toàn bộ Chương 2: Vectơ & Hệ toạ độ Oxyz!\n              </div>\n            </div>\n            "
    }
  ]
};
