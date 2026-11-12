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
  "totalDuration": 237.06,
  "duration": 237.06,
  "title": "Mục 1: Hệ trục toạ độ Oxyz trong không gian",
  "owl_tip": "Hệ Oxyz gồm ba trục Ox, Oy, Oz đôi một vuông góc. Độ dài ba véc tơ đơn vị i, j, k đều bằng 1!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 47.21,
      "id": "part2"
    },
    {
      "time": 79.01,
      "id": "part3"
    },
    {
      "time": 82.8,
      "id": "vd1_q"
    },
    {
      "time": 107.3,
      "id": "vd1_a"
    },
    {
      "time": 131.4,
      "id": "vd2_q"
    },
    {
      "time": 148.5,
      "id": "vd2_a"
    },
    {
      "time": 170.2,
      "id": "vd3_q"
    },
    {
      "time": 193.89,
      "id": "vd3_a"
    },
    {
      "time": 207.76,
      "id": "part4"
    },
    {
      "time": 224.86,
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
      "endTime": 47.21,
      "duration": 47.21,
      "mascotMode": "pointer",
      "mascotTip": "Hệ Oxyz gồm ba trục Ox, Oy, Oz đôi một vuông góc. Độ dài ba véc tơ đơn vị i, j, k đều bằng 1!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Hệ trục toạ độ $Oxyz$ trong không gian</div>\n      <div style=\"text-align:center; margin:12px 0;\">\n        <svg width=\"260\" height=\"180\" viewBox=\"0 0 260 180\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <!-- Trục Oz thẳng đứng -->\n          <line x1=\"100\" y1=\"120\" x2=\"100\" y2=\"20\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrB)\"/>\n          <!-- Trục Oy nằm ngang -->\n          <line x1=\"100\" y1=\"120\" x2=\"230\" y2=\"120\" stroke=\"#34d399\" stroke-width=\"2\" marker-end=\"url(#arrG)\"/>\n          <!-- Trục Ox xiên chéo ra trước -->\n          <line x1=\"100\" y1=\"120\" x2=\"35\" y2=\"165\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#arrR)\"/>\n          <!-- Vector đơn vị k trên Oz -->\n          <line x1=\"100\" y1=\"120\" x2=\"100\" y2=\"70\" stroke=\"#fbbf24\" stroke-width=\"3\" marker-end=\"url(#arrY)\"/>\n          <!-- Vector đơn vị j trên Oy -->\n          <line x1=\"100\" y1=\"120\" x2=\"155\" y2=\"120\" stroke=\"#fbbf24\" stroke-width=\"3\" marker-end=\"url(#arrY)\"/>\n          <!-- Vector đơn vị i trên Ox -->\n          <line x1=\"100\" y1=\"120\" x2=\"60\" y2=\"148\" stroke=\"#fbbf24\" stroke-width=\"3\" marker-end=\"url(#arrY)\"/>\n          <!-- Ký hiệu góc vuông tại O -->\n          <rect x=\"100\" y=\"105\" width=\"12\" height=\"15\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1\"/>\n          <!-- Nhãn -->\n          <text x=\"82\" y=\"130\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">O</text>\n          <text x=\"96\" y=\"15\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">z</text>\n          <text x=\"235\" y=\"125\" fill=\"#34d399\" font-size=\"14\" font-weight=\"bold\">y</text>\n          <text x=\"22\" y=\"172\" fill=\"#f43f5e\" font-size=\"14\" font-weight=\"bold\">x</text>\n          <text x=\"105\" y=\"65\" fill=\"#fbbf24\" font-size=\"13\" font-style=\"italic\" font-weight=\"bold\">k&#x20D7;</text>\n          <text x=\"150\" y=\"112\" fill=\"#fbbf24\" font-size=\"13\" font-style=\"italic\" font-weight=\"bold\">j&#x20D7;</text>\n          <text x=\"68\" y=\"145\" fill=\"#fbbf24\" font-size=\"13\" font-style=\"italic\" font-weight=\"bold\">i&#x20D7;</text>\n        </svg>\n        <div style=\"font-size:13px; color:#94a3b8; margin-top:4px;\">Hệ trục toạ độ Đề-các vuông góc $Oxyz$ và các véc tơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$</div>\n      </div>\n    "
    },
    {
      "sceneIndex": 2,
      "title": "CÁC MẶT PHẲNG TỌA ĐỘ",
      "subtitle": "PHẦN 2: (Oxy), (Oyz), (Ozx)",
      "startTime": 47.21,
      "endTime": 82.8,
      "duration": 35.59,
      "mascotMode": "pointer",
      "mascotTip": "Quy tắc khuyết chữ: (Oxy) khuyết z -> z=0; (Oyz) khuyết x -> x=0; (Ozx) khuyết y -> y=0!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Ba mặt phẳng toạ độ</div>\n      <div style=\"text-align:center; margin:12px 0;\">\n        <svg width=\"260\" height=\"180\" viewBox=\"0 0 260 180\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <!-- Mặt phẳng (Oxy) đáy -->\n          <polygon points=\"100,120 200,120 150,155 50,155\" fill=\"rgba(56,189,248,0.2)\" stroke=\"#38bdf8\" stroke-width=\"1\"/>\n          <!-- Mặt phẳng (Oyz) bên phải -->\n          <polygon points=\"100,120 200,120 200,50 100,50\" fill=\"rgba(52,211,153,0.18)\" stroke=\"#34d399\" stroke-width=\"1\"/>\n          <!-- Mặt phẳng (Ozx) bên trái -->\n          <polygon points=\"100,120 50,155 50,85 100,50\" fill=\"rgba(244,63,94,0.18)\" stroke=\"#f43f5e\" stroke-width=\"1\"/>\n          <!-- Các trục -->\n          <line x1=\"100\" y1=\"120\" x2=\"100\" y2=\"20\" stroke=\"#f8fafc\" stroke-width=\"2\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"100\" y1=\"120\" x2=\"230\" y2=\"120\" stroke=\"#f8fafc\" stroke-width=\"2\" marker-end=\"url(#arrG)\"/>\n          <line x1=\"100\" y1=\"120\" x2=\"35\" y2=\"165\" stroke=\"#f8fafc\" stroke-width=\"2\" marker-end=\"url(#arrR)\"/>\n          <text x=\"85\" y=\"130\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">O</text>\n          <text x=\"96\" y=\"15\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">z</text>\n          <text x=\"235\" y=\"125\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">y</text>\n          <text x=\"22\" y=\"172\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">x</text>\n          <!-- Tên 3 mặt phẳng -->\n          <text x=\"125\" y=\"145\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">(Oxy): z=0</text>\n          <text x=\"155\" y=\"85\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\">(Oyz): x=0</text>\n          <text x=\"42\" y=\"115\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">(Ozx): y=0</text>\n        </svg>\n        <div style=\"font-size:13px; color:#94a3b8; margin-top:4px;\">Ba mặt phẳng tọa độ: $(Oxy)$ (khuyết $z$), $(Oyz)$ (khuyết $x$), $(Ozx)$ (khuyết $y$)</div>\n      </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: TÍCH VÔ HƯỚNG CÁC VÉC TƠ ĐƠN VỊ",
      "subtitle": "TÍNH CHẤT CỦA i, j, k",
      "startTime": 82.8,
      "endTime": 107.3,
      "duration": 24.5,
      "mascotMode": "pointer",
      "mascotTip": "Các véc tơ đơn vị đôi một vuông góc nên tích vô hướng từng cặp bằng 0. i² = |i|² = 1!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Trong không gian $Oxyz$, tính tích vô hướng $\\vec{i} \\cdot \\vec{j}, \\vec{j} \\cdot \\vec{k}, \\vec{k} \\cdot \\vec{i}$ và tính $\\vec{i}^2$.<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "TÍCH VÔ HƯỚNG BẰNG 0",
      "startTime": 107.3,
      "endTime": 131.4,
      "duration": 24.1,
      "mascotMode": "pointer",
      "mascotTip": "i . j = j . k = k . i = 0 và i² = 1!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd1_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 1:</b><br>• Do $\\vec{i}, \\vec{j}, \\vec{k}$ đôi một vuông góc nên: $\\vec{i} \\cdot \\vec{j} = 0, \\; \\vec{j} \\cdot \\vec{k} = 0, \\; \\vec{k} \\cdot \\vec{i} = 0$.<br>• Bình phương vô hướng: $\\vec{i}^2 = |\\vec{i}|^2 = 1^2 = 1$.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: ĐIỂM THUỘC TRỤC & MẶT PHẲNG TỌA ĐỘ",
      "subtitle": "TỌA ĐỘ BẰNG 0",
      "startTime": 131.4,
      "endTime": 148.5,
      "duration": 17.1,
      "mascotMode": "pointer",
      "mascotTip": "Thuộc trục Ox khuyết y, z -> y=0, z=0. Thuộc (Oxy) khuyết z -> z=0!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Điểm $A$ nằm trên trục hoành $Ox$, điểm $B$ nằm trong mặt phẳng toạ độ $(Oxy)$. Những toạ độ nào của $A$ và $B$ chắc chắn bằng $0$?<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI",
      "subtitle": "A(x; 0; 0) & B(x; y; 0)",
      "startTime": 148.5,
      "endTime": 170.2,
      "duration": 21.7,
      "mascotMode": "cheer",
      "mascotTip": "A(x; 0; 0) và B(x; y; 0)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd2_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 2:</b><br>• $A \\in Ox \\implies y = 0$ và $z = 0 \\implies \\mathbf{A(x; 0; 0)}$.<br>• $B \\in (Oxy) \\implies z = 0 \\implies \\mathbf{B(x; y; 0)}$.</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: HÌNH LẬP PHƯƠNG GỐC O",
      "subtitle": "XÁC ĐỊNH MẶT PHẲNG ĐÁY",
      "startTime": 170.2,
      "endTime": 193.89,
      "duration": 23.69,
      "mascotMode": "pointer",
      "mascotTip": "Đáy OABC chứa gốc O, tia Ox và tia Oy -> đó chính là mặt phẳng (Oxy)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Cho hình lập phương $OABC.O'A'B'C'$ có đỉnh $O$ trùng gốc tọa độ, các đỉnh $A, C, O'$ lần lượt nằm trên các tia $Ox, Oy, Oz$. Mặt phẳng chứa mặt đáy $OABC$ là mặt phẳng tọa độ nào?\n      <div style=\"text-align:center; margin:10px 0;\">\n        <svg width=\"240\" height=\"160\" viewBox=\"0 0 240 160\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <!-- Các trục tọa độ -->\n          <line x1=\"80\" y1=\"110\" x2=\"80\" y2=\"20\" stroke=\"#38bdf8\" stroke-width=\"1.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"80\" y1=\"110\" x2=\"200\" y2=\"110\" stroke=\"#34d399\" stroke-width=\"1.5\" marker-end=\"url(#arrG)\"/>\n          <line x1=\"80\" y1=\"110\" x2=\"30\" y2=\"145\" stroke=\"#f43f5e\" stroke-width=\"1.5\" marker-end=\"url(#arrR)\"/>\n          <!-- Khối lập phương OABC.O'A'B'C' -->\n          <line x1=\"80\" y1=\"110\" x2=\"50\" y2=\"130\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n          <line x1=\"80\" y1=\"110\" x2=\"150\" y2=\"110\" stroke=\"#34d399\" stroke-width=\"2.5\"/>\n          <line x1=\"80\" y1=\"110\" x2=\"80\" y2=\"45\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n          <polygon points=\"50,130 120,130 150,110\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n          <polygon points=\"80,45 150,45 120,65 50,65\" fill=\"rgba(56,189,248,0.15)\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n          <line x1=\"50\" y1=\"130\" x2=\"50\" y2=\"65\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n          <line x1=\"120\" y1=\"130\" x2=\"120\" y2=\"65\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n          <line x1=\"150\" y1=\"110\" x2=\"150\" y2=\"45\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n          <text x=\"70\" y=\"118\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">O</text>\n          <text x=\"35\" y=\"138\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">A</text>\n          <text x=\"120\" y=\"142\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n          <text x=\"155\" y=\"115\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\">C</text>\n          <text x=\"68\" y=\"42\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">O'</text>\n          <text x=\"155\" y=\"42\" fill=\"#f8fafc\" font-size=\"12\">C'</text>\n        </svg>\n      </div>\n    <div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI",
      "subtitle": "MẶT PHẲNG (Oxy)",
      "startTime": 193.89,
      "endTime": 207.76,
      "duration": 13.87,
      "mascotMode": "pointer",
      "mascotTip": "Mặt đáy OABC chính là mặt phẳng toạ độ (Oxy)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd3_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 3:</b><br>Mặt đáy $OABC$ chứa điểm $O$, cạnh $OA \\subset Ox$ và $OC \\subset Oy$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> Mặt phẳng chứa mặt đáy $OABC$ là <b>$(Oxy)$</b>.</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI: PHƯƠNG TRÌNH MẶT PHẲNG TỌA ĐỘ",
      "subtitle": "PHẦN 4: KHUYẾT CHỮ NÀO BẰNG 0 CHỮ ĐÓ",
      "startTime": 207.76,
      "endTime": 224.86,
      "duration": 17.1,
      "mascotMode": "magnifier",
      "mascotTip": "(Oxy) có z=0; (Oyz) có x=0; (Ozx) có y=0. Khuyết chữ nào chữ đó bằng 0!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi mặt phẳng toạ độ:</span><br>• Mặt phẳng $(Oxy)$ có phương trình là $z = 0$.<br>• Mặt phẳng $(Oyz)$ có phương trình là $x = 0$.<br>• Mặt phẳng $(Ozx)$ có phương trình là $y = 0$.<br>Quy tắc: <b>Khuyết chữ nào thì biến đó bằng $0$!</b></div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: KHẨU QUYẾT TỌA ĐỘ VÀNG",
      "startTime": 224.86,
      "endTime": 237.06,
      "duration": 12.2,
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
  "totalDuration": 257.18,
  "duration": 257.18,
  "title": "Mục 2: Toạ độ của điểm và toạ độ của véc tơ trong không gian",
  "owl_tip": "u = x i + y j + z k <=> u = (x; y; z). Véc tơ AB lấy ngọn B trừ gốc A!",
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
      "time": 78.0,
      "id": "part3"
    },
    {
      "time": 83.0,
      "id": "vd1_q"
    },
    {
      "time": 104.38,
      "id": "vd1_a"
    },
    {
      "time": 129.58,
      "id": "vd2_q"
    },
    {
      "time": 148.78,
      "id": "vd2_a"
    },
    {
      "time": 181.68,
      "id": "vd3_q"
    },
    {
      "time": 202.98,
      "id": "vd3_a"
    },
    {
      "time": 226.78,
      "id": "part4"
    },
    {
      "time": 247.08,
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
      "endTime": 37.4,
      "duration": 37.4,
      "mascotMode": "pointer",
      "mascotTip": "u = x i + y j + z k <=> u = (x; y; z)!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Toạ độ của véc tơ trong không gian</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• Trong không gian $Oxyz$, mỗi véc tơ $\\vec{u}$ luôn phân tích duy nhất:<br>&emsp;$$\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\iff \\mathbf{\\vec{u} = (x; y; z)}$$<br>• Hai véc tơ bằng nhau $\\iff$ Các toạ độ tương ứng bằng nhau.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "TỌA ĐỘ CỦA ĐIỂM TRONG KHÔNG GIAN",
      "subtitle": "PHẦN 2: OM = (x; y; z) <=> M(x; y; z)",
      "startTime": 37.4,
      "endTime": 83.0,
      "duration": 45.6,
      "mascotMode": "pointer",
      "mascotTip": "Véc tơ AB lấy ngọn B trừ gốc A. Trung điểm cộng đôi chia hai!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Toạ độ của điểm trong không gian</div>\n      <div style=\"text-align:center; margin:12px 0;\">\n        <svg width=\"260\" height=\"180\" viewBox=\"0 0 260 180\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <!-- Trục tọa độ -->\n          <line x1=\"90\" y1=\"120\" x2=\"90\" y2=\"20\" stroke=\"#64748b\" stroke-width=\"1.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"90\" y1=\"120\" x2=\"225\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"1.5\" marker-end=\"url(#arrG)\"/>\n          <line x1=\"90\" y1=\"120\" x2=\"30\" y2=\"165\" stroke=\"#64748b\" stroke-width=\"1.5\" marker-end=\"url(#arrR)\"/>\n          <!-- Hình hộp xác định điểm M(x, y, z) -->\n          <line x1=\"90\" y1=\"120\" x2=\"55\" y2=\"145\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n          <line x1=\"90\" y1=\"120\" x2=\"165\" y2=\"120\" stroke=\"#34d399\" stroke-width=\"2\"/>\n          <line x1=\"90\" y1=\"120\" x2=\"90\" y2=\"60\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n          <!-- Đường gióng nét đứt -->\n          <line x1=\"55\" y1=\"145\" x2=\"130\" y2=\"145\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n          <line x1=\"165\" y1=\"120\" x2=\"130\" y2=\"145\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n          <line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n          <line x1=\"90\" y1=\"60\" x2=\"130\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n          <!-- Véc tơ OM -->\n          <line x1=\"90\" y1=\"120\" x2=\"126\" y2=\"88\" stroke=\"#fbbf24\" stroke-width=\"3\" marker-end=\"url(#arrY)\"/>\n          <circle cx=\"130\" cy=\"85\" r=\"3.5\" fill=\"#fbbf24\"/>\n          <text x=\"76\" y=\"125\" fill=\"#f8fafc\" font-size=\"12\">O</text>\n          <text x=\"96\" y=\"22\" fill=\"#38bdf8\" font-size=\"12\">z</text>\n          <text x=\"228\" y=\"125\" fill=\"#34d399\" font-size=\"12\">y</text>\n          <text x=\"22\" y=\"170\" fill=\"#f43f5e\" font-size=\"12\">x</text>\n          <text x=\"135\" y=\"80\" fill=\"#fbbf24\" font-size=\"14\" font-weight=\"bold\">M(x; y; z)</text>\n          <text x=\"135\" y=\"152\" fill=\"#94a3b8\" font-size=\"11\">M'(x; y; 0)</text>\n        </svg>\n        <div style=\"font-size:13px; color:#fde047; font-weight:bold; margin-top:4px;\">$\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\iff M(x; y; z)$</div>\n      </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: XÁC ĐỊNH TỌA ĐỘ VÉC TƠ",
      "subtitle": "PHÂN TÍCH THEO i, j, k",
      "startTime": 83.0,
      "endTime": 104.38,
      "duration": 21.38,
      "mascotMode": "pointer",
      "mascotTip": "b = i - 4k khuyết j nên tung độ bằng 0 -> b = (1; 0; -4)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Cho $\\vec{a} = 2\\vec{i} - 3\\vec{j} + \\vec{k}$ và $\\vec{b} = \\vec{i} - 4\\vec{k}$. Tìm toạ độ của $\\vec{a}$ và $\\vec{b}$.<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "CHÚ Ý THÀNH PHẦN KHUYẾT",
      "startTime": 104.38,
      "endTime": 129.58,
      "duration": 25.2,
      "mascotMode": "pointer",
      "mascotTip": "a = (2; -3; 1) và b = (1; 0; -4)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd1_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 1:</b><br>• $\\vec{a} = 2\\vec{i} - 3\\vec{j} + 1\\vec{k} \\implies \\mathbf{\\vec{a} = (2; -3; 1)}.<br>• $\\vec{b} = 1\\vec{i} + 0\\vec{j} - 4\\vec{k} \\implies \\mathbf{\\vec{b} = (1; 0; -4)}$.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: VÉC TƠ AB VÀ TRUNG ĐIỂM",
      "subtitle": "NGỌN TRỪ GỐC & TRUNG BÌNH CỘNG",
      "startTime": 129.58,
      "endTime": 148.78,
      "duration": 19.2,
      "mascotMode": "pointer",
      "mascotTip": "AB lấy B trừ A. Trung điểm M lấy (A+B)/2!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Cho $A(1; -2; 3)$ và $B(3; 0; -1)$. Tìm toạ độ $\\vec{AB}$ và toạ độ trung điểm $M$ của $AB$.\n      <div style=\"text-align:center; margin:10px 0;\">\n        <svg width=\"240\" height=\"110\" viewBox=\"0 0 240 110\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <line x1=\"30\" y1=\"80\" x2=\"200\" y2=\"30\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n          <circle cx=\"30\" cy=\"80\" r=\"3.5\" fill=\"#38bdf8\"/>\n          <circle cx=\"205\" cy=\"28\" r=\"3.5\" fill=\"#38bdf8\"/>\n          <!-- Trung điểm M -->\n          <circle cx=\"118\" cy=\"54\" r=\"4\" fill=\"#f43f5e\"/>\n          <text x=\"15\" y=\"95\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A(1; -2; 3)</text>\n          <text x=\"190\" y=\"22\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">B(3; 0; -1)</text>\n          <text x=\"105\" y=\"44\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">M(2; -1; 1)</text>\n        </svg>\n        <div style=\"color:#94a3b8; font-size:12px; margin-top:2px;\">$\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A) = (2; 2; -4)$</div>\n      </div>\n    <div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI",
      "subtitle": "AB = (2; 2; -4) & M(2; -1; 1)",
      "startTime": 148.78,
      "endTime": 181.68,
      "duration": 32.9,
      "mascotMode": "cheer",
      "mascotTip": "AB = (2; 2; -4) và M(2; -1; 1)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd2_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 2:</b><br>• $\\vec{AB} = (3-1; 0 - (-2); -1 - 3) = \\mathbf{(2; 2; -4)}.<br>• $M = \\left(\\frac{1+3}{2}; \\frac{-2+0}{2}; \\frac{3+(-1)}{2}\\right) = \\mathbf{M(2; -1; 1)}$.</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: TRỌNG TÂM TAM GIÁC ABC",
      "subtitle": "CỘNG BA CHIA BA",
      "startTime": 181.68,
      "endTime": 202.98,
      "duration": 21.3,
      "mascotMode": "pointer",
      "mascotTip": "G = (A + B + C) / 3!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Cho tam giác $ABC$ với $A(1; 0; 2), B(-2; 1; 3), C(4; 2; -2)$. Tìm toạ độ trọng tâm $G$ của tam giác $ABC$.\n      <div style=\"text-align:center; margin:10px 0;\">\n        <svg width=\"220\" height=\"120\" viewBox=\"0 0 220 120\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          <polygon points=\"110,15 35,95 185,95\" fill=\"rgba(56,189,248,0.15)\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n          <!-- Đường trung tuyến -->\n          <line x1=\"110\" y1=\"15\" x2=\"110\" y2=\"95\" stroke=\"#64748b\" stroke-width=\"1\" stroke-dasharray=\"3\"/>\n          <circle cx=\"110\" cy=\"68\" r=\"4\" fill=\"#facc15\"/>\n          <text x=\"105\" y=\"12\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A</text>\n          <text x=\"18\" y=\"105\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">B</text>\n          <text x=\"190\" y=\"105\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">C</text>\n          <text x=\"120\" y=\"72\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\">G(1; 1; 1)</text>\n        </svg>\n      </div>\n    <div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI",
      "subtitle": "G(1; 1; 1)",
      "startTime": 202.98,
      "endTime": 226.78,
      "duration": 23.8,
      "mascotMode": "pointer",
      "mascotTip": "G = ((1-2+4)/3; (0+1+2)/3; (2+3-2)/3) = G(1; 1; 1)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd3_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 3:</b><br>$x_G = \\frac{1-2+4}{3} = 1; \\quad y_G = \\frac{0+1+2}{3} = 1; \\quad z_G = \\frac{2+3-2}{3} = 1$<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>G(1; 1; 1)</b>.</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI: VÉC TƠ KHUYẾT THÀNH PHẦN",
      "subtitle": "PHẦN 4: ĐỪNG NHẦM THỨ TỰ TỌA ĐỘ",
      "startTime": 226.78,
      "endTime": 247.08,
      "duration": 20.3,
      "mascotMode": "magnifier",
      "mascotTip": "Thành phần gắn với i là x, với j là y, với k là z. Khuyết véc tơ nào gán số 0 vào vị trí đó!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi tọa độ véc tơ:</span><br>Khi véc tơ khuyết $\\vec{j}$, ví dụ $\\vec{b} = \\vec{i} - 4\\vec{k}$, học sinh hay viết $(1; -4; 0)$ là <b>HOÀN TOÀN SAI</b>! Vị trí thứ 2 là tung độ $y$ đi với $\\vec{j}$, phải viết đúng là <b>$(1; 0; -4)$</b>!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: KHẨU QUYẾT TỌA ĐỘ",
      "startTime": 247.08,
      "endTime": 257.18,
      "duration": 10.1,
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
  "totalDuration": 245.61,
  "duration": 245.61,
  "title": "Mục 3: Biểu thức toạ độ của các phép toán véc tơ, tích vô hướng & khoảng cách",
  "owl_tip": "u . v = xx' + yy' + zz'. Hai véc tơ vuông góc khi và chỉ khi tích vô hướng bằng 0!",
  "timeline": [
    {
      "time": 0.0,
      "id": "part1"
    },
    {
      "time": 38.1,
      "id": "part2"
    },
    {
      "time": 83.9,
      "id": "part3"
    },
    {
      "time": 87.69,
      "id": "vd1_q"
    },
    {
      "time": 107.59,
      "id": "vd1_a"
    },
    {
      "time": 135.89,
      "id": "vd2_q"
    },
    {
      "time": 152.31,
      "id": "vd2_a"
    },
    {
      "time": 177.11,
      "id": "vd3_q"
    },
    {
      "time": 199.11,
      "id": "vd3_a"
    },
    {
      "time": 215.51,
      "id": "part4"
    },
    {
      "time": 232.31,
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
      "endTime": 38.1,
      "duration": 38.1,
      "mascotMode": "pointer",
      "mascotTip": "Cộng trừ theo từng tọa độ: x±x', y±y', z±z'. Nhân với số k: kx, ky, kz!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Phép toán véc tơ theo toạ độ</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>Cho $\\vec{u} = (x; y; z)$ và $\\vec{v} = (x'; y'; z')$:<br>• $\\vec{u} + \\vec{v} = (x+x'; y+y'; z+z')$<br>• $\\vec{u} - \\vec{v} = (x-x'; y-y'; z-z')$<br>• $k\\vec{u} = (kx; ky; kz)$<br>• Cùng phương: $\\frac{x'}{x} = \\frac{y'}{y} = \\frac{z'}{z} = k$.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "TÍCH VÔ HƯỚNG & KHOẢNG CÁCH",
      "subtitle": "PHẦN 2: CÔNG THỨC TÍNH ĐỘ DÀI VÀ GÓC",
      "startTime": 38.1,
      "endTime": 87.69,
      "duration": 49.59,
      "mascotMode": "pointer",
      "mascotTip": "u . v = xx' + yy' + zz'. Vuông góc <=> u . v = 0!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Tích vô hướng, độ dài & khoảng cách</div>\n      <div style=\"text-align:center; margin:12px 0;\">\n        <svg width=\"250\" height=\"140\" viewBox=\"0 0 250 140\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <!-- Khối hộp chữ nhật minh họa khoảng cách AB -->\n          <polygon points=\"40,95 130,95 170,120 80,120\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <polygon points=\"40,35 130,35 170,60 80,60\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"40\" y1=\"95\" x2=\"40\" y2=\"35\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"130\" y1=\"95\" x2=\"130\" y2=\"35\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"170\" y1=\"120\" x2=\"170\" y2=\"60\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"80\" y1=\"120\" x2=\"80\" y2=\"60\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <!-- Đoạn thẳng AB là đường chéo khối hộp -->\n          <line x1=\"40\" y1=\"95\" x2=\"170\" y2=\"60\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"4\" marker-end=\"url(#arrR)\"/>\n          <circle cx=\"40\" cy=\"95\" r=\"3.5\" fill=\"#38bdf8\"/>\n          <circle cx=\"170\" cy=\"60\" r=\"3.5\" fill=\"#f43f5e\"/>\n          <text x=\"24\" y=\"105\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A</text>\n          <text x=\"175\" y=\"62\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">B</text>\n          <text x=\"100\" y=\"70\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">d(A, B)</text>\n        </svg>\n        <div style=\"color:#fde047; font-size:13px; font-weight:bold; margin-top:4px;\">$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$</div>\n      </div>\n    "
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: ĐỘ DÀI & TÍCH VÔ HƯỚNG",
      "subtitle": "TÍNH TOÁN CƠ BẢN",
      "startTime": 87.69,
      "endTime": 107.59,
      "duration": 19.9,
      "mascotMode": "pointer",
      "mascotTip": "|u| = sqrt(1² + (-2)² + 2²) = 3. |v| = 5. u . v = 3 + 0 - 8 = -5!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Cho $\\vec{u} = (1; -2; 2)$ và $\\vec{v} = (3; 0; -4)$. Tính $|\\vec{u}|, |\\vec{v}|$ và tích vô hướng $\\vec{u} \\cdot \\vec{v}$.<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "|u| = 3, |v| = 5, u . v = -5",
      "startTime": 107.59,
      "endTime": 135.89,
      "duration": 28.3,
      "mascotMode": "pointer",
      "mascotTip": "|u| = 3, |v| = 5, u . v = -5!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd1_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 1:</b><br>• $|\\vec{u}| = \\sqrt{1^2 + (-2)^2 + 2^2} = \\sqrt{9} = \\mathbf{3}.<br>• $|\\vec{v}| = \\sqrt{3^2 + 0^2 + (-4)^2} = \\sqrt{25} = \\mathbf{5}.<br>• $\\vec{u} \\cdot \\vec{v} = 1 \\cdot 3 + (-2) \\cdot 0 + 2 \\cdot (-4) = 3 + 0 - 8 = \\mathbf{-5}$.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: KHOẢNG CÁCH GIỮA HAI ĐIỂM",
      "subtitle": "CÔNG THỨC PYTHAGORE 3D",
      "startTime": 135.89,
      "endTime": 152.31,
      "duration": 16.42,
      "mascotMode": "pointer",
      "mascotTip": "AB = sqrt( (4-2)² + (1+1)² + (2-3)² ) = sqrt(4+4+1) = 3!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Cho hai điểm $A(2; -1; 3)$ và $B(4; 1; 2)$. Tính khoảng cách giữa hai điểm $A$ và $B$.<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI",
      "subtitle": "AB = 3",
      "startTime": 152.31,
      "endTime": 177.11,
      "duration": 24.8,
      "mascotMode": "cheer",
      "mascotTip": "Khoảng cách AB = 3!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd2_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 2:</b><br>$$AB = \\sqrt{(4-2)^2 + (1-(-1))^2 + (2-3)^2} = \\sqrt{2^2 + 2^2 + (-1)^2} = \\sqrt{9} = \\mathbf{3}.$$</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: TÌM THAM SỐ ĐỂ HAI VÉC TƠ VUÔNG GÓC",
      "subtitle": "ĐIỀU KIỆN a . b = 0",
      "startTime": 177.11,
      "endTime": 199.11,
      "duration": 22.0,
      "mascotMode": "pointer",
      "mascotTip": "1 . 4 + 2 . (-2) + m . 1 = 0 <=> 4 - 4 + m = 0 <=> m = 0!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Cho $\\vec{a} = (1; 2; m)$ và $\\vec{b} = (4; -2; 1)$. Tìm giá trị của $m$ để $\\vec{a} \\perp \\vec{b}$.\n      <div style=\"text-align:center; margin:10px 0;\">\n        <svg width=\"200\" height=\"110\" viewBox=\"0 0 200 110\" style=\"background:#1e293b; border-radius:8px; border:1px solid #334155;\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n    \n          <line x1=\"40\" y1=\"85\" x2=\"160\" y2=\"85\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"40\" y1=\"85\" x2=\"40\" y2=\"20\" stroke=\"#34d399\" stroke-width=\"2.5\" marker-end=\"url(#arrG)\"/>\n          <rect x=\"40\" y=\"70\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n          <text x=\"22\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\">O</text>\n          <text x=\"165\" y=\"90\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">\\vec{a}</text>\n          <text x=\"35\" y=\"15\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\">\\vec{b}</text>\n        </svg>\n        <div style=\"color:#34d399; font-size:12px; font-weight:bold; margin-top:2px;\">$\\vec{a} \\perp \\vec{b} \\iff 1 \\cdot 4 + 2 \\cdot (-2) + m \\cdot 1 = 0 \\iff m = 0$</div>\n      </div>\n    <div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI",
      "subtitle": "m = 0",
      "startTime": 199.11,
      "endTime": 215.51,
      "duration": 16.4,
      "mascotMode": "pointer",
      "mascotTip": "Tích vô hướng bằng 0 -> m = 0!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd3_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 3:</b><br>$$\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0 \\iff 1 \\cdot 4 + 2 \\cdot (-2) + m \\cdot 1 = 0 \\iff 4 - 4 + m = 0 \\iff \\mathbf{m = 0}.$$</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY ĐỀ THI: TÍCH VÔ HƯỚNG RA SỐ THỰC",
      "subtitle": "PHẦN 4: ĐỪNG QUÊN DẤU CĂN BẬC HAI",
      "startTime": 215.51,
      "endTime": 232.31,
      "duration": 16.8,
      "mascotMode": "magnifier",
      "mascotTip": "Tích vô hướng là một số, không phải véc tơ! Độ dài và khoảng cách bắt buộc phải có căn bậc hai!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi tích vô hướng & độ dài:</span><br>• Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ là một <b>SỐ THỰC</b> (có thể âm, dương hoặc bằng $0$). Tuyệt đối không viết thành dạng toạ độ véc tơ!<br>• Khi tính độ dài véc tơ hoặc khoảng cách $AB$, luôn nhớ <b>lấy căn bậc hai</b>!</div>"
    },
    {
      "sceneIndex": 10,
      "title": "BÍ KÍP & MẸO THẦY CÚ",
      "subtitle": "PHẦN 5: CÔNG CỤ VÀNG CHỨNG MINH VUÔNG GÓC",
      "startTime": 232.31,
      "endTime": 245.61,
      "duration": 13.3,
      "mascotMode": "cheer",
      "mascotTip": "Hoành nhân hoành cộng tung nhân tung cộng cao nhân cao. Cứ vuông góc cho bằng 0!",
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Khẩu quyết vàng Thầy Cú:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">• <b>Tích vô hướng:</b> $x x' + y y' + z z'$.<br>• <b>Vuông góc:</b> $x x' + y y' + z z' = 0$.<br>• <b>Cùng phương:</b> $\\frac{x}{x'} = \\frac{y}{y'} = \\frac{z}{z'}$.</div>"
    }
  ]
};

// Tương thích ngược: Đồng bộ sang CHAPTER1_DATA & CHAPTER1_LECTURES
if (typeof window.CHAPTER1_DATA === 'undefined') window.CHAPTER1_DATA = {};
Object.assign(window.CHAPTER1_DATA, window.CHAPTER2_DATA);
if (typeof window.CHAPTER1_LECTURES !== 'undefined') {
  Object.assign(window.CHAPTER1_LECTURES, window.CHAPTER2_DATA);
}
