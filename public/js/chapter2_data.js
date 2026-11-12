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
  "content": "\n    <div id=\"part1\">\n      <h3>1. Định nghĩa véc tơ trong không gian</h3>\n      <p>• Véc tơ trong không gian là một đoạn thẳng có hướng (đã xác định rõ điểm đầu và điểm cuối).<br>\n      • Ký hiệu: <span class=\"v-vec\">a</span>, <span class=\"v-vec\">b</span> hoặc <span class=\"v-vec\">AB</span> ($A$ là điểm đầu / gốc, $B$ là điểm cuối / ngọn).<br>\n      • <b>Độ dài của véc tơ:</b> là khoảng cách giữa điểm đầu và điểm cuối, ký hiệu: $|<span class=\"v-vec\">AB</span>| = AB$.</p>\n    </div>\n    <div id=\"part2\">\n      <h3>2. Véc tơ cùng phương, cùng hướng & Bằng nhau</h3>\n      <p>• Giá của véc tơ là đường thẳng đi qua điểm đầu và điểm cuối của véc tơ đó.<br>\n      • Hai véc tơ <b>cùng phương</b> $\\Leftrightarrow$ Giá của chúng song song hoặc trùng nhau.<br>\n      • Hai véc tơ <b>bằng nhau</b> $\\Leftrightarrow$ Chúng cùng hướng và cùng độ dài: <span class=\"v-vec\">a</span> = <span class=\"v-vec\">b</span>.<br>\n      • Véc tơ-không <span class=\"v-vec\">0</span>: có điểm đầu trùng điểm cuối, độ dài bằng $0$, cùng phương và cùng hướng với mọi véc tơ.</p>\n    </div>\n    <div id=\"part3\"><h3>3. Các ví dụ rèn luyện</h3></div>\n\n    <!-- Ví dụ 1 -->\n    <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n      <div id=\"vd1_q\">\n        <b style=\"color:#38bdf8;\">Ví dụ 1:</b> Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Tìm véc tơ bằng véc tơ <span class=\"v-vec\">AB</span> có điểm đầu và điểm cuối là các đỉnh của hình chóp.<br>\n        <div style=\"text-align:center; margin:12px 0;\">\n          <svg width=\"260\" height=\"160\" viewBox=\"0 0 260 160\" style=\"background:#1e293b; border-radius:8px;\">\n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n            </defs>\n            <polygon points=\"130,15 45,115 155,115\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <polygon points=\"130,15 155,115 215,80\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"45\" y1=\"115\" x2=\"105\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <line x1=\"105\" y1=\"80\" x2=\"215\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <line x1=\"130\" y1=\"15\" x2=\"105\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <line x1=\"45\" y1=\"115\" x2=\"150\" y2=\"115\" stroke=\"#38bdf8\" stroke-width=\"3\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"105\" y1=\"80\" x2=\"210\" y2=\"80\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"3\" marker-end=\"url(#arrR)\"/>\n            <text x=\"127\" y=\"12\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">S</text>\n            <text x=\"28\" y=\"122\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">A</text>\n            <text x=\"160\" y=\"122\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">B</text>\n            <text x=\"220\" y=\"82\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">C</text>\n            <text x=\"90\" y=\"78\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">D</text>\n          </svg>\n        </div>\n        <i>(Thời gian suy nghĩ: 20 giây)</i>\n      </div>\n      <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n        <b>Lời giải chi tiết:</b><br>\n        Tứ giác $ABCD$ là hình bình hành nên cạnh $AB \\parallel DC$ và $AB = DC$.<br>\n        Hai véc tơ <span class=\"v-vec\">AB</span> và <span class=\"v-vec-red\">DC</span> có cùng hướng và cùng độ dài: <b><span class=\"v-vec\">AB</span> = <span class=\"v-vec-red\">DC</span></b>.\n      </div>\n    </div>\n\n    <!-- Ví dụ 2 -->\n    <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n      <div id=\"vd2_q\">\n        <b style=\"color:#38bdf8;\">Ví dụ 2:</b> Cho tứ diện đều $ABCD$ có tất cả các cạnh bằng $a$. Tính $|<span class=\"v-vec\">AB</span>|$ và $|<span class=\"v-vec\">CD</span>|$.<br>\n        <div style=\"text-align:center; margin:12px 0;\">\n          <svg width=\"240\" height=\"150\" viewBox=\"0 0 240 150\" style=\"background:#1e293b; border-radius:8px;\">\n            <polygon points=\"120,15 40,115 150,125\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <polygon points=\"120,15 150,125 200,95\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"40\" y1=\"115\" x2=\"200\" y2=\"95\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <line x1=\"120\" y1=\"15\" x2=\"43\" y2=\"110\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"150\" y1=\"125\" x2=\"197\" y2=\"98\" stroke=\"#fbbf24\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <text x=\"120\" y=\"12\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">A</text>\n            <text x=\"24\" y=\"122\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">B</text>\n            <text x=\"145\" y=\"140\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">C</text>\n            <text x=\"206\" y=\"98\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">D</text>\n          </svg>\n        </div>\n        <i>(Thời gian suy nghĩ: 15 giây)</i>\n      </div>\n      <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n        <b>Lời giải:</b><br>\n        Vì $ABCD$ là tứ diện đều cạnh $a$ nên tất cả sáu cạnh đều có độ dài bằng $a$.<br>\n        Suy ra: <b>|<span class=\"v-vec\">AB</span>| = $AB = a$</b> và <b>|<span class=\"v-vec\">CD</span>| = $CD = a$</b>.\n      </div>\n    </div>\n\n    <!-- Ví dụ 3 -->\n    <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n      <div id=\"vd3_q\">\n        <b style=\"color:#38bdf8;\">Ví dụ 3:</b> Cho lăng trụ tam giác $ABC.A'B'C'$. Hai véc tơ <span class=\"v-vec\">AA'</span> và <span class=\"v-vec\">CC'</span> có bằng nhau không?<br>\n        <div style=\"text-align:center; margin:12px 0;\">\n          <svg width=\"220\" height=\"150\" viewBox=\"0 0 220 150\" style=\"background:#1e293b; border-radius:8px;\">\n            <polygon points=\"50,25 120,15 160,35\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <polygon points=\"50,110 120,100 160,120\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"50\" y1=\"25\" x2=\"50\" y2=\"105\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"15\" x2=\"120\" y2=\"95\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"160\" y1=\"35\" x2=\"160\" y2=\"115\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <text x=\"35\" y=\"25\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"120\" y=\"10\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n            <text x=\"168\" y=\"35\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">C</text>\n            <text x=\"35\" y=\"120\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A'</text>\n            <text x=\"120\" y=\"115\" fill=\"#f8fafc\" font-size=\"12\">B'</text>\n            <text x=\"168\" y=\"125\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">C'</text>\n          </svg>\n        </div>\n        <i>(Thời gian suy nghĩ: 15 giây)</i>\n      </div>\n      <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n        <b>Lời giải:</b><br>\n        Các cạnh bên của lăng trụ song song và bằng nhau ($AA' \\parallel CC'$ và $AA' = CC'$).<br>\n        Do đó hai véc tơ cùng hướng và cùng độ dài: <b><span class=\"v-vec\">AA'</span> = <span class=\"v-vec\">CC'</span></b>.\n      </div>\n    </div>\n\n    <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Nhầm lẫn giữa <span class=\"v-vec\">AB</span> và <span class=\"v-vec\">BA</span>. Chúng có cùng độ dài nhưng ngược hướng nên là hai véc tơ đối nhau: <span class=\"v-vec\">AB</span> = -<span class=\"v-vec\">BA</span>.</p></div>\n    <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Trong hình bình hành $ABCD$, đọc đúng thứ tự vòng: <span class=\"v-vec\">AB</span> = <span class=\"v-vec-red\">DC</span>, không viết ngược thành <span class=\"v-vec\">CD</span>!</p></div>\n",
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
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Định nghĩa véc tơ trong không gian</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• Véc tơ trong không gian là một đoạn thẳng có hướng (đã xác định rõ điểm đầu và điểm cuối).<br>• Ký hiệu: <span class=\"v-vec\">a</span>, <span class=\"v-vec\">b</span> hoặc <span class=\"v-vec\">AB</span> ($A$ là điểm đầu / gốc, $B$ là điểm cuối / ngọn).<br>• <b>Độ dài của véc tơ:</b> Khoảng cách giữa điểm đầu và điểm cuối: $|<span class=\"v-vec\">AB</span>| = AB$.</p></div>"
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
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Cùng phương, cùng hướng và bằng nhau</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Cùng phương:</b> Giá của hai véc tơ song song hoặc trùng nhau.<br>• <b>Hai véc tơ bằng nhau:</b> <span class=\"v-vec\">a</span> = <span class=\"v-vec\">b</span> $\\iff$ Cùng hướng và cùng độ dài.<br>• <b>Véc tơ-không:</b> <span class=\"v-vec\">0</span> có điểm đầu và điểm cuối trùng nhau, độ dài bằng $0$, cùng phương và cùng hướng với mọi véc tơ.</p></div>"
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
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Tìm véc tơ bằng véc tơ <span class=\"v-vec\">AB</span> có điểm đầu và điểm cuối là các đỉnh của hình chóp.<br>\n        <div style=\"text-align:center; margin:12px 0;\">\n          <svg width=\"260\" height=\"160\" viewBox=\"0 0 260 160\" style=\"background:#1e293b; border-radius:8px;\">\n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n            </defs>\n            <polygon points=\"130,15 45,115 155,115\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <polygon points=\"130,15 155,115 215,80\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"45\" y1=\"115\" x2=\"105\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <line x1=\"105\" y1=\"80\" x2=\"215\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <line x1=\"130\" y1=\"15\" x2=\"105\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <line x1=\"45\" y1=\"115\" x2=\"150\" y2=\"115\" stroke=\"#38bdf8\" stroke-width=\"3\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"105\" y1=\"80\" x2=\"210\" y2=\"80\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"3\" marker-end=\"url(#arrR)\"/>\n            <text x=\"127\" y=\"12\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">S</text>\n            <text x=\"28\" y=\"122\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">A</text>\n            <text x=\"160\" y=\"122\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">B</text>\n            <text x=\"220\" y=\"82\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">C</text>\n            <text x=\"90\" y=\"78\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">D</text>\n          </svg>\n        </div>\n<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
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
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd1_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải chi tiết Ví dụ 1:</b><br>• Tứ giác $ABCD$ là hình bình hành nên cạnh $AB \\parallel DC$ và $AB = DC$.<br>• Hai véc tơ <span class=\"v-vec\">AB</span> và <span class=\"v-vec-red\">DC</span> có cùng hướng và cùng độ dài.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b><span class=\"v-vec\">AB</span> = <span class=\"v-vec-red\">DC</span></b>.</div></div>"
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
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Cho tứ diện đều $ABCD$ có tất cả các cạnh bằng $a$. Tính $|<span class=\"v-vec\">AB</span>|$ và $|<span class=\"v-vec\">CD</span>|$.<br>\n        <div style=\"text-align:center; margin:12px 0;\">\n          <svg width=\"240\" height=\"150\" viewBox=\"0 0 240 150\" style=\"background:#1e293b; border-radius:8px;\">\n            <polygon points=\"120,15 40,115 150,125\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <polygon points=\"120,15 150,125 200,95\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"40\" y1=\"115\" x2=\"200\" y2=\"95\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <line x1=\"120\" y1=\"15\" x2=\"43\" y2=\"110\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"150\" y1=\"125\" x2=\"197\" y2=\"98\" stroke=\"#fbbf24\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <text x=\"120\" y=\"12\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">A</text>\n            <text x=\"24\" y=\"122\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">B</text>\n            <text x=\"145\" y=\"140\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">C</text>\n            <text x=\"206\" y=\"98\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">D</text>\n          </svg>\n        </div>\n<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
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
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd2_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 2:</b><br>Vì $ABCD$ là tứ diện đều cạnh $a$ nên tất cả sáu cạnh đều có độ dài bằng $a$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>|<span class=\"v-vec\">AB</span>| = $AB = a$</b> và <b>|<span class=\"v-vec\">CD</span>| = $CD = a$</b>.</div></div>"
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
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Cho lăng trụ tam giác $ABC.A'B'C'$. Hai véc tơ <span class=\"v-vec\">AA'</span> và <span class=\"v-vec\">CC'</span> có bằng nhau không?<br>\n        <div style=\"text-align:center; margin:12px 0;\">\n          <svg width=\"220\" height=\"150\" viewBox=\"0 0 220 150\" style=\"background:#1e293b; border-radius:8px;\">\n            <polygon points=\"50,25 120,15 160,35\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <polygon points=\"50,110 120,100 160,120\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"50\" y1=\"25\" x2=\"50\" y2=\"105\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"15\" x2=\"120\" y2=\"95\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"160\" y1=\"35\" x2=\"160\" y2=\"115\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <text x=\"35\" y=\"25\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"120\" y=\"10\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n            <text x=\"168\" y=\"35\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">C</text>\n            <text x=\"35\" y=\"120\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A'</text>\n            <text x=\"120\" y=\"115\" fill=\"#f8fafc\" font-size=\"12\">B'</text>\n            <text x=\"168\" y=\"125\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">C'</text>\n          </svg>\n        </div>\n<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
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
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd3_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 3:</b><br>Các cạnh bên của lăng trụ song song và bằng nhau ($AA' \\parallel CC'$ và $AA' = CC'$).<br>Do đó hai véc tơ cùng hướng và cùng độ dài.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b><span class=\"v-vec\">AA'</span> = <span class=\"v-vec\">CC'</span></b>.</div></div>"
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
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi khái niệm véc tơ:</span><br>Nhầm lẫn giữa <span class=\"v-vec\">AB</span> và <span class=\"v-vec\">BA</span>. Hai véc tơ này ngược hướng nên <b><span class=\"v-vec\">AB</span> = -<span class=\"v-vec\">BA</span></b>, tuyệt đối không được viết <span class=\"v-vec\">AB</span> = <span class=\"v-vec\">BA</span>!</div>"
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
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Bí kíp nhớ nhanh véc tơ bằng nhau:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">Luôn nhớ thứ tự các đỉnh:<br>Trong hình bình hành $ABCD$: <b><span class=\"v-vec\">AB</span> = <span class=\"v-vec-red\">DC</span></b> (điểm $D$ đứng trước $C$!), không được viết ngược thành <span class=\"v-vec\">CD</span>!</div>"
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
  "content": "\n    <div id=\"part1\">\n      <h3>1. Quy tắc tam giác & Quy tắc hình bình hành</h3>\n      \n      <div style=\"display:flex; flex-wrap:wrap; justify-content:space-around; margin:12px 0; gap:12px;\">\n        <div style=\"text-align:center; background:#1e293b; padding:10px; border-radius:8px; min-width:210px; border:1px solid #334155;\">\n          <b style=\"color:#38bdf8; font-size:13px;\">Quy tắc tam giác (3 điểm)</b><br>\n          <svg width=\"200\" height=\"110\" viewBox=\"0 0 200 110\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <line x1=\"25\" y1=\"85\" x2=\"115\" y2=\"85\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"85\" x2=\"160\" y2=\"25\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"25\" y1=\"85\" x2=\"157\" y2=\"28\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"3\" marker-end=\"url(#arrR)\"/>\n            <text x=\"12\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"120\" y=\"100\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">B</text>\n            <text x=\"165\" y=\"25\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">C</text>\n          </svg>\n          <div style=\"color:#f8fafc; font-size:13px; font-weight:bold; margin-top:4px;\"><span class=\"v-vec\">AB</span> + <span class=\"v-vec\">BC</span> = <span class=\"v-vec-red\">AC</span></div>\n        </div>\n        <div style=\"text-align:center; background:#1e293b; padding:10px; border-radius:8px; min-width:210px; border:1px solid #334155;\">\n          <b style=\"color:#38bdf8; font-size:13px;\">Quy tắc Hình bình hành</b><br>\n          <svg width=\"200\" height=\"110\" viewBox=\"0 0 200 110\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <line x1=\"25\" y1=\"85\" x2=\"115\" y2=\"85\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"25\" y1=\"85\" x2=\"68\" y2=\"25\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"85\" x2=\"165\" y2=\"25\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"70\" y1=\"25\" x2=\"165\" y2=\"25\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"25\" y1=\"85\" x2=\"160\" y2=\"28\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <text x=\"12\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"122\" y=\"95\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">B</text>\n            <text x=\"170\" y=\"25\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">C</text>\n            <text x=\"60\" y=\"20\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">D</text>\n          </svg>\n          <div style=\"color:#f8fafc; font-size:13px; font-weight:bold; margin-top:4px;\"><span class=\"v-vec\">AB</span> + <span class=\"v-vec\">AD</span> = <span class=\"v-vec-red\">AC</span></div>\n        </div>\n      </div>\n\n    </div>\n    <div id=\"part2\">\n      <h3>2. Quy tắc hình hộp trong không gian</h3>\n      <p>Cho hình hộp $ABCD.A'B'C'D'$. Tổng 3 véc tơ xuất phát từ một đỉnh bằng véc tơ đường chéo không gian:</p>\n      \n      <div style=\"text-align:center; margin:12px auto; background:#1e293b; padding:12px; border-radius:8px; max-width:340px; border:1px solid #334155;\">\n        <svg width=\"240\" height=\"150\" viewBox=\"0 0 240 150\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n          <polygon points=\"50,25 140,25 185,60 95,60\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <polygon points=\"50,85 140,85 185,120 95,120\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"50\" y1=\"25\" x2=\"50\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"140\" y1=\"25\" x2=\"140\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"185\" y1=\"60\" x2=\"185\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"95\" y1=\"60\" x2=\"95\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"50\" y1=\"85\" x2=\"135\" y2=\"85\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"50\" y1=\"85\" x2=\"92\" y2=\"118\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"50\" y1=\"85\" x2=\"50\" y2=\"30\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"50\" y1=\"85\" x2=\"182\" y2=\"62\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"3\" marker-end=\"url(#arrR)\"/>\n          <text x=\"32\" y=\"90\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">A</text>\n          <text x=\"145\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n          <text x=\"96\" y=\"135\" fill=\"#f8fafc\" font-size=\"12\">D</text>\n          <text x=\"32\" y=\"25\" fill=\"#f8fafc\" font-size=\"12\">A'</text>\n          <text x=\"190\" y=\"60\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">C'</text>\n        </svg>\n        <div style=\"color:#f43f5e; font-size:14px; font-weight:bold; margin-top:6px;\">\n          $<span class=\"v-vec\">AB</span> + <span class=\"v-vec\">AD</span> + <span class=\"v-vec\">AA'</span> = <span class=\"v-vec\">AC'</span>$\n        </div>\n      </div>\n\n    </div>\n    <div id=\"part3\"><h3>3. Các ví dụ áp dụng</h3></div>\n\n    <!-- Ví dụ 1 -->\n    <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n      <div id=\"vd1_q\">\n        <b style=\"color:#38bdf8;\">Ví dụ 1:</b> Cho hình hộp $ABCD.A'B'C'D'$. Rút gọn tổng ba véc tơ: $<span class=\"v-vec\">BA</span> + <span class=\"v-vec\">BC</span> + <span class=\"v-vec\">BB'</span>$.<br>\n        \n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"220\" height=\"140\" viewBox=\"0 0 220 140\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"40,20 120,20 160,50 80,50\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <polygon points=\"40,75 120,75 160,105 80,105\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"120\" y1=\"20\" x2=\"120\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"160\" y1=\"50\" x2=\"160\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"80\" y1=\"50\" x2=\"80\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"120\" y1=\"75\" x2=\"45\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"75\" x2=\"157\" y2=\"102\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"75\" x2=\"120\" y2=\"25\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"75\" x2=\"83\" y2=\"52\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"3\" marker-end=\"url(#arrR)\"/>\n            <text x=\"125\" y=\"80\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">B</text>\n            <text x=\"25\" y=\"80\" fill=\"#f8fafc\" font-size=\"12\">A</text>\n            <text x=\"165\" y=\"110\" fill=\"#f8fafc\" font-size=\"12\">C</text>\n            <text x=\"125\" y=\"20\" fill=\"#f8fafc\" font-size=\"12\">B'</text>\n            <text x=\"70\" y=\"48\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">D'</text>\n          </svg>\n        </div>\n\n        <i>(Thời gian suy nghĩ: 20 giây)</i>\n      </div>\n      <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n        <b>Lời giải:</b> Áp dụng quy tắc hình hộp xuất phát từ đỉnh $B$:<br>\n        $\\mathbf{<span class=\"v-vec\">BA</span> + <span class=\"v-vec\">BC</span> + <span class=\"v-vec\">BB'</span> = <span class=\"v-vec\">BD'</span>}$ (véc tơ đường chéo lớn nối từ $B$).\n      </div>\n    </div>\n\n    <!-- Ví dụ 2 -->\n    <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n      <div id=\"vd2_q\">\n        <b style=\"color:#38bdf8;\">Ví dụ 2:</b> Cho tứ diện $ABCD$, $M$ là trung điểm cạnh $CD$. Biểu diễn <span class=\"v-vec\">AM</span> theo hai véc tơ <span class=\"v-vec\">AC</span> và <span class=\"v-vec\">AD</span>.<br>\n        \n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"220\" height=\"130\" viewBox=\"0 0 220 130\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"110,15 35,105 135,115\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <polygon points=\"110,15 135,115 185,85\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"35\" y1=\"105\" x2=\"185\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"110\" y1=\"15\" x2=\"160\" y2=\"98\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <circle cx=\"160\" cy=\"100\" r=\"3\" fill=\"#f43f5e\"/>\n            <text x=\"110\" y=\"12\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"22\" y=\"110\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n            <text x=\"130\" y=\"128\" fill=\"#f8fafc\" font-size=\"12\">C</text>\n            <text x=\"190\" y=\"88\" fill=\"#f8fafc\" font-size=\"12\">D</text>\n            <text x=\"165\" y=\"112\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">M</text>\n          </svg>\n        </div>\n\n        <i>(Thời gian làm nháp: 15 giây)</i>\n      </div>\n      <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n        <b>Lời giải:</b> Trong tam giác $ACD$, đoạn $AM$ là đường trung tuyến kẻ từ đỉnh $A$:<br>\n        $\\mathbf{<span class=\"v-vec\">AM</span> = \\frac{1}{2}(<span class=\"v-vec\">AC</span> + <span class=\"v-vec\">AD</span>)}$.\n      </div>\n    </div>\n\n    <!-- Ví dụ 3 -->\n    <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n      <div id=\"vd3_q\">\n        <b style=\"color:#38bdf8;\">Ví dụ 3:</b> Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Rút gọn tổng bốn véc tơ: <span class=\"v-vec\">SA</span> + <span class=\"v-vec\">SB</span> + <span class=\"v-vec\">SC</span> + <span class=\"v-vec\">SD</span>.<br>\n        \n        <div style=\"text-align:center; margin:12px 0;\">\n          <svg width=\"260\" height=\"165\" viewBox=\"0 0 260 165\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"130,15 45,115 155,115\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <polygon points=\"130,15 155,115 215,80\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"45\" y1=\"115\" x2=\"105\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"105\" y1=\"80\" x2=\"215\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"130\" y1=\"15\" x2=\"105\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"45\" y1=\"115\" x2=\"215\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1\" stroke-dasharray=\"3\"/>\n            <line x1=\"105\" y1=\"80\" x2=\"155\" y2=\"115\" stroke=\"#64748b\" stroke-width=\"1\" stroke-dasharray=\"3\"/>\n            <line x1=\"130\" y1=\"15\" x2=\"130\" y2=\"92\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"4\" marker-end=\"url(#arrR)\"/>\n            <circle cx=\"130\" cy=\"97.5\" r=\"3\" fill=\"#fbbf24\"/>\n            <text x=\"128\" y=\"12\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">S</text>\n            <text x=\"30\" y=\"120\" fill=\"#f8fafc\" font-size=\"12\">A</text>\n            <text x=\"160\" y=\"122\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n            <text x=\"220\" y=\"82\" fill=\"#f8fafc\" font-size=\"12\">C</text>\n            <text x=\"92\" y=\"78\" fill=\"#f8fafc\" font-size=\"12\">D</text>\n            <text x=\"135\" y=\"105\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">O</text>\n          </svg>\n        </div>\n\n        <i>(Thời gian suy nghĩ: 20 giây)</i>\n      </div>\n      <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n        <b>Lời giải chi tiết:</b><br>\n        Vì $O$ là trung điểm của hai đường chéo $AC$ và $BD$ nên:<br>\n        <span class=\"v-vec\">SA</span> + <span class=\"v-vec\">SC</span> = 2<span class=\"v-vec\">SO</span> và <span class=\"v-vec\">SB</span> + <span class=\"v-vec\">SD</span> = 2<span class=\"v-vec\">SO</span>.<br>\n        Cộng hai đẳng thức lại, ta được:<br>\n        $\\mathbf{<span class=\"v-vec\">SA</span> + <span class=\"v-vec\">SB</span> + <span class=\"v-vec\">SC</span> + <span class=\"v-vec\">SD</span> = 2<span class=\"v-vec\">SO</span> + 2<span class=\"v-vec\">SO</span> = 4<span class=\"v-vec\">SO</span>}$.\n      </div>\n    </div>\n\n    <div id=\"part4\"><h3>4. Bẫy trắc nghiệm</h3><p>Quy tắc hình hộp cộng ra véc tơ đường chéo không gian <span class=\"v-vec\">AC'</span>, không phải đường chéo mặt đáy <span class=\"v-vec\">AC</span>.</p></div>\n    <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Gom các cặp đỉnh đối diện qua tâm: $<span class=\"v-vec\">SA</span> + <span class=\"v-vec\">SC</span> = 2<span class=\"v-vec\">SO</span>; <span class=\"v-vec\">SB</span> + <span class=\"v-vec\">SD</span> = 2<span class=\"v-vec\">SO</span> \\Rightarrow$ Tổng bằng 4<span class=\"v-vec-red\">SO</span>!</p></div>\n",
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
      "mascotTip": "Quy tắc 3 điểm: <span class=\"v-vec\">AB</span> + <span class=\"v-vec\">BC</span> = <span class=\"v-vec\"><span class=\"v-vec\">AC</span></span>. Quy tắc hình bình hành: <span class=\"v-vec\">AB</span> + <span class=\"v-vec\">AD</span> = <span class=\"v-vec\"><span class=\"v-vec\">AC</span></span>!",
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Quy tắc tam giác & Quy tắc hình bình hành</div>\n      <div style=\"display:flex; flex-wrap:wrap; justify-content:space-around; margin:12px 0; gap:12px;\">\n        <div style=\"text-align:center; background:#1e293b; padding:10px; border-radius:8px; min-width:210px; border:1px solid #334155;\">\n          <b style=\"color:#38bdf8; font-size:13px;\">Quy tắc tam giác (3 điểm)</b><br>\n          <svg width=\"200\" height=\"110\" viewBox=\"0 0 200 110\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <line x1=\"25\" y1=\"85\" x2=\"115\" y2=\"85\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"85\" x2=\"160\" y2=\"25\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"25\" y1=\"85\" x2=\"157\" y2=\"28\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"3\" marker-end=\"url(#arrR)\"/>\n            <text x=\"12\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"120\" y=\"100\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">B</text>\n            <text x=\"165\" y=\"25\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">C</text>\n          </svg>\n          <div style=\"color:#f8fafc; font-size:13px; font-weight:bold; margin-top:4px;\"><span class=\"v-vec\">AB</span> + <span class=\"v-vec\">BC</span> = <span class=\"v-vec-red\">AC</span></div>\n        </div>\n        <div style=\"text-align:center; background:#1e293b; padding:10px; border-radius:8px; min-width:210px; border:1px solid #334155;\">\n          <b style=\"color:#38bdf8; font-size:13px;\">Quy tắc Hình bình hành</b><br>\n          <svg width=\"200\" height=\"110\" viewBox=\"0 0 200 110\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <line x1=\"25\" y1=\"85\" x2=\"115\" y2=\"85\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"25\" y1=\"85\" x2=\"68\" y2=\"25\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"85\" x2=\"165\" y2=\"25\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"70\" y1=\"25\" x2=\"165\" y2=\"25\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"25\" y1=\"85\" x2=\"160\" y2=\"28\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <text x=\"12\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"122\" y=\"95\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">B</text>\n            <text x=\"170\" y=\"25\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">C</text>\n            <text x=\"60\" y=\"20\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">D</text>\n          </svg>\n          <div style=\"color:#f8fafc; font-size:13px; font-weight:bold; margin-top:4px;\"><span class=\"v-vec\">AB</span> + <span class=\"v-vec\">AD</span> = <span class=\"v-vec-red\">AC</span></div>\n        </div>\n      </div>\n<div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Quy tắc 3 điểm (Tam giác):</b> <span class=\"v-vec\">AB</span> + <span class=\"v-vec\">BC</span> = <span class=\"v-vec-red\">AC</span><br>• <b>Quy tắc hình bình hành:</b> <span class=\"v-vec\">AB</span> + <span class=\"v-vec\">AD</span> = <span class=\"v-vec-red\">AC</span><br>• <b>Hiệu hai véc tơ:</b> <span class=\"v-vec\">AB</span> - <span class=\"v-vec\">AC</span> = <span class=\"v-vec\">CB</span></p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "QUY TẮC HÌNH HỘP TRONG KHÔNG GIAN",
      "subtitle": "PHẦN 2: TỔNG BA CẠNH BẰNG ĐƯỜNG CHÉO LỚN",
      "startTime": 23.45,
      "endTime": 54.34,
      "duration": 30.89,
      "mascotMode": "pointer",
      "mascotTip": "<span class=\"v-vec\">AB</span> + <span class=\"v-vec\">AD</span> + <span class=\"v-vec\">AA'</span> = <span class=\"v-vec-red\"><span class=\"v-vec\"><span class=\"v-vec\">AC</span>'</span></span> (đường chéo không gian lớn xuất phát từ A)!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Quy tắc hình hộp trong không gian</div>\n      <div style=\"text-align:center; margin:12px auto; background:#1e293b; padding:12px; border-radius:8px; max-width:340px; border:1px solid #334155;\">\n        <svg width=\"240\" height=\"150\" viewBox=\"0 0 240 150\">\n          \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n          <polygon points=\"50,25 140,25 185,60 95,60\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <polygon points=\"50,85 140,85 185,120 95,120\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"50\" y1=\"25\" x2=\"50\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"140\" y1=\"25\" x2=\"140\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"185\" y1=\"60\" x2=\"185\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"95\" y1=\"60\" x2=\"95\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n          <line x1=\"50\" y1=\"85\" x2=\"135\" y2=\"85\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"50\" y1=\"85\" x2=\"92\" y2=\"118\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"50\" y1=\"85\" x2=\"50\" y2=\"30\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n          <line x1=\"50\" y1=\"85\" x2=\"182\" y2=\"62\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"3\" marker-end=\"url(#arrR)\"/>\n          <text x=\"32\" y=\"90\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">A</text>\n          <text x=\"145\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n          <text x=\"96\" y=\"135\" fill=\"#f8fafc\" font-size=\"12\">D</text>\n          <text x=\"32\" y=\"25\" fill=\"#f8fafc\" font-size=\"12\">A'</text>\n          <text x=\"190\" y=\"60\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">C'</text>\n        </svg>\n        <div style=\"color:#f43f5e; font-size:14px; font-weight:bold; margin-top:6px;\">\n          $<span class=\"v-vec\">AB</span> + <span class=\"v-vec\">AD</span> + <span class=\"v-vec\">AA'</span> = <span class=\"v-vec\">AC'</span>$\n        </div>\n      </div>\n<div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>Cho hình hộp $ABCD.A'B'C'D'$. Tổng ba véc tơ xuất phát từ gốc $A$ theo ba cạnh bằng véc tơ đường chéo lớn:<br>&emsp;$$<span class=\"v-vec\">AB</span> + <span class=\"v-vec\">AD</span> + <span class=\"v-vec\">AA'</span> = <span class=\"v-vec\">AC'</span>$$</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: QUY TẮC HÌNH HỘP TỪ ĐỈNH B",
      "subtitle": "RÚT GỌN TỔNG BA VÉC TƠ CẠNH",
      "startTime": 54.34,
      "endTime": 76.08,
      "duration": 21.74,
      "mascotMode": "pointer",
      "mascotTip": "Ba véc tơ <span class=\"v-vec\">BA</span> + <span class=\"v-vec\">BC</span> + <span class=\"v-vec\">BB'</span> cùng xuất phát từ đỉnh B -> Đường chéo là <span class=\"v-vec\">BD'</span>!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Rút gọn tổng: $<span class=\"v-vec\">BA</span> + <span class=\"v-vec\">BC</span> + <span class=\"v-vec\">BB'</span>$.\n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"220\" height=\"140\" viewBox=\"0 0 220 140\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"40,20 120,20 160,50 80,50\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <polygon points=\"40,75 120,75 160,105 80,105\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"120\" y1=\"20\" x2=\"120\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"160\" y1=\"50\" x2=\"160\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"80\" y1=\"50\" x2=\"80\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"120\" y1=\"75\" x2=\"45\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"75\" x2=\"157\" y2=\"102\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"75\" x2=\"120\" y2=\"25\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"120\" y1=\"75\" x2=\"83\" y2=\"52\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"3\" marker-end=\"url(#arrR)\"/>\n            <text x=\"125\" y=\"80\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">B</text>\n            <text x=\"25\" y=\"80\" fill=\"#f8fafc\" font-size=\"12\">A</text>\n            <text x=\"165\" y=\"110\" fill=\"#f8fafc\" font-size=\"12\">C</text>\n            <text x=\"125\" y=\"20\" fill=\"#f8fafc\" font-size=\"12\">B'</text>\n            <text x=\"70\" y=\"48\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">D'</text>\n          </svg>\n        </div>\n<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "ĐƯỜNG CHÉO XUẤT PHÁT TỪ ĐỈNH B",
      "startTime": 76.08,
      "endTime": 86.21,
      "duration": 10.13,
      "mascotMode": "pointer",
      "mascotTip": "<span class=\"v-vec\">BA</span> + <span class=\"v-vec\">BC</span> + <span class=\"v-vec\">BB'</span> = <span class=\"v-vec-red\"><span class=\"v-vec\">BD'</span></span>!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd1_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 1:</b><br>Áp dụng quy tắc hình hộp xuất phát từ gốc $B$, tổng ba véc tơ theo ba cạnh bằng véc tơ đường chéo lớn:<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$<span class=\"v-vec\">BA</span> + <span class=\"v-vec\">BC</span> + <span class=\"v-vec\">BB'</span> = <span class=\"v-vec\">BD'</span>$</b>.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: VÉC TƠ ĐƯỜNG TRUNG TUYẾN",
      "subtitle": "BIỂU DIỄN QUA HAI VÉC TƠ CẠNH",
      "startTime": 86.21,
      "endTime": 100.15,
      "duration": 13.94,
      "mascotMode": "pointer",
      "mascotTip": "M là trung điểm CD -> <span class=\"v-vec\">AM</span> = 1/2(<span class=\"v-vec\"><span class=\"v-vec\">AC</span></span> + <span class=\"v-vec\">AD</span>)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Cho tứ diện $ABCD$, $M$ là trung điểm cạnh $CD$. Biểu diễn <span class=\"v-vec\">AM</span> theo hai véc tơ <span class=\"v-vec\">AC</span> và <span class=\"v-vec\">AD</span>.\n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"220\" height=\"130\" viewBox=\"0 0 220 130\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"110,15 35,105 135,115\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <polygon points=\"110,15 135,115 185,85\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"35\" y1=\"105\" x2=\"185\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"110\" y1=\"15\" x2=\"160\" y2=\"98\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <circle cx=\"160\" cy=\"100\" r=\"3\" fill=\"#f43f5e\"/>\n            <text x=\"110\" y=\"12\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"22\" y=\"110\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n            <text x=\"130\" y=\"128\" fill=\"#f8fafc\" font-size=\"12\">C</text>\n            <text x=\"190\" y=\"88\" fill=\"#f8fafc\" font-size=\"12\">D</text>\n            <text x=\"165\" y=\"112\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">M</text>\n          </svg>\n        </div>\n<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian làm nháp: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI",
      "subtitle": "QUY TẮC TRUNG ĐIỂM",
      "startTime": 100.15,
      "endTime": 114.53,
      "duration": 14.38,
      "mascotMode": "pointer",
      "mascotTip": "<span class=\"v-vec\">AM</span> = 1/2(<span class=\"v-vec\"><span class=\"v-vec\">AC</span></span> + <span class=\"v-vec\">AD</span>)!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd2_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 2:</b><br>Tam giác $ACD$ có $AM$ là trung tuyến, áp dụng quy tắc trung điểm ta có:<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b><span class=\"v-vec\">AM</span> = $\\frac{1}{2}$(<span class=\"v-vec\">AC</span> + <span class=\"v-vec\">AD</span>)</b>.</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: TỔNG VÉC TƠ TỪ ĐỈNH CHÓP",
      "subtitle": "ĐÁY HÌNH BÌNH HÀNH TÂM O",
      "startTime": 114.53,
      "endTime": 129.17,
      "duration": 14.64,
      "mascotMode": "pointer",
      "mascotTip": "Gom cặp đối diện: <span class=\"v-vec\">SA</span> + <span class=\"v-vec\">SC</span> = 2<span class=\"v-vec\">SO</span>; <span class=\"v-vec\">SB</span> + <span class=\"v-vec\">SD</span> = 2<span class=\"v-vec\">SO</span> -> Tổng = 4<span class=\"v-vec\">SO</span>!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:18px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:22px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Rút gọn tổng bốn véc tơ: <span class=\"v-vec\">SA</span> + <span class=\"v-vec\">SB</span> + <span class=\"v-vec\">SC</span> + <span class=\"v-vec\">SD</span>.\n        <div style=\"text-align:center; margin:12px 0;\">\n          <svg width=\"260\" height=\"165\" viewBox=\"0 0 260 165\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"130,15 45,115 155,115\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <polygon points=\"130,15 155,115 215,80\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"45\" y1=\"115\" x2=\"105\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"105\" y1=\"80\" x2=\"215\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"130\" y1=\"15\" x2=\"105\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3\"/>\n            <line x1=\"45\" y1=\"115\" x2=\"215\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1\" stroke-dasharray=\"3\"/>\n            <line x1=\"105\" y1=\"80\" x2=\"155\" y2=\"115\" stroke=\"#64748b\" stroke-width=\"1\" stroke-dasharray=\"3\"/>\n            <line x1=\"130\" y1=\"15\" x2=\"130\" y2=\"92\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-dasharray=\"4\" marker-end=\"url(#arrR)\"/>\n            <circle cx=\"130\" cy=\"97.5\" r=\"3\" fill=\"#fbbf24\"/>\n            <text x=\"128\" y=\"12\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">S</text>\n            <text x=\"30\" y=\"120\" fill=\"#f8fafc\" font-size=\"12\">A</text>\n            <text x=\"160\" y=\"122\" fill=\"#f8fafc\" font-size=\"12\">B</text>\n            <text x=\"220\" y=\"82\" fill=\"#f8fafc\" font-size=\"12\">C</text>\n            <text x=\"92\" y=\"78\" fill=\"#f8fafc\" font-size=\"12\">D</text>\n            <text x=\"135\" y=\"105\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">O</text>\n          </svg>\n        </div>\n<div style=\"margin-top:14px; padding:10px 16px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:20px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI",
      "subtitle": "SỬ DỤNG TÂM ĐỐI XỨNG O",
      "startTime": 129.17,
      "endTime": 143.3,
      "duration": 14.13,
      "mascotMode": "cheer",
      "mascotTip": "<span class=\"v-vec\">SA</span> + <span class=\"v-vec\">SB</span> + <span class=\"v-vec\">SC</span> + <span class=\"v-vec\">SD</span> = 4<span class=\"v-vec\">SO</span>!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd3_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 3:</b><br>Vì $O$ là tâm hình bình hành nên:<br>• <span class=\"v-vec\">SA</span> + <span class=\"v-vec\">SC</span> = 2<span class=\"v-vec\">SO</span><br>• <span class=\"v-vec\">SB</span> + <span class=\"v-vec\">SD</span> = 2<span class=\"v-vec\">SO</span><br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> Tổng bốn véc tơ bằng <b>4<span class=\"v-vec-red\">SO</span></b>.</div></div>"
    },
    {
      "sceneIndex": 9,
      "title": "BẪY TRẮC NGHIỆM: ĐƯỜNG CHÉO HÌNH HỘP",
      "subtitle": "PHẦN 4: NHẦM LẪN ĐỈNH ĐỐI DIỆN",
      "startTime": 143.3,
      "endTime": 154.49,
      "duration": 11.19,
      "mascotMode": "magnifier",
      "mascotTip": "Quy tắc hình hộp ra đường chéo không gian <span class=\"v-vec\"><span class=\"v-vec\">AC</span>'</span>, không phải đường chéo mặt đáy <span class=\"v-vec\">AC</span>!",
      "bodyHtml": "<div class=\"trap-warning-box\" style=\"margin-top:10px; padding:16px 20px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:21px !important; line-height:1.6; font-weight:600; color:#fecdd3;\"><span class=\"trap-title\" style=\"font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-bottom:6px;\">Bẫy đề thi quy tắc hình hộp:</span><br>Khi dùng quy tắc hình hộp, vội vàng viết đường chéo mặt đáy <span class=\"v-vec\">AC</span> thay vì đường chéo khối hộp <span class=\"v-vec\">AC'</span>. Hãy nhớ: hình hộp ra đường chéo không gian xuyên tâm!</div>"
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
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Khẩu quyết vàng Thầy Cú:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">• <b>Quy tắc tam giác:</b> Ngọn nối tiếp gốc (<span class=\"v-vec\">AB</span> + <span class=\"v-vec\">BC</span> = <span class=\"v-vec-red\">AC</span>).<br>• <b>Quy tắc hình bình hành:</b> Ra đường chéo đáy (<span class=\"v-vec\">AB</span> + <span class=\"v-vec\">AD</span> = <span class=\"v-vec-red\">AC</span>).<br>• <b>Quy tắc hình hộp:</b> Ra đường chéo không gian ($<span class=\"v-vec\">AB</span> + <span class=\"v-vec\">AD</span> + <span class=\"v-vec\">AA'</span> = <span class=\"v-vec\">AC'</span>$).</div>"
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
  "content": "\n    <div id=\"part1\">\n      <h3>1. Góc giữa hai véc tơ trong không gian</h3>\n      <p>• Cho hai véc tơ $<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span> \\ne <span class=\"v-vec\">0</span>$. Lấy điểm $O$, dựng $<span class=\"v-vec\">OA</span> = <span class=\"v-vec\">u</span>$ và $<span class=\"v-vec\">OB</span> = <span class=\"v-vec\">v</span>$. Khi đó: $(<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>) = \\widehat{AOB}$.<br>\n      • Khoảng giá trị: $0^\\circ \\le (<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>) \\le 180^\\circ$.<br>\n      • Hai véc tơ vuông góc: $<span class=\"v-vec\">u</span> \\perp <span class=\"v-vec\">v</span> \\Leftrightarrow (<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>) = 90^\\circ$.</p>\n      \n      <div style=\"display:flex; flex-wrap:wrap; justify-content:center; gap:16px; margin:12px 0;\">\n        <div style=\"text-align:center; background:#1e293b; padding:12px; border-radius:8px; border:1px solid #334155; min-width:220px;\">\n          <b style=\"color:#38bdf8; font-size:13px;\">Góc giữa hai véc tơ <span class=\"v-vec\">u</span> và <span class=\"v-vec\">v</span></b>\n          <div style=\"margin:8px 0;\">\n            <svg width=\"200\" height=\"95\" viewBox=\"0 0 200 95\">\n              \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n              <line x1=\"30\" y1=\"75\" x2=\"160\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n              <line x1=\"30\" y1=\"75\" x2=\"125\" y2=\"20\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n              <path d=\"M 65 75 A 35 35 0 0 0 57 58\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n              <text x=\"68\" y=\"65\" fill=\"#fbbf24\" font-size=\"14\" font-weight=\"bold\">φ</text>\n              <text x=\"14\" y=\"80\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">O</text>\n              <text x=\"165\" y=\"80\" fill=\"#38bdf8\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">u⃗</text>\n              <text x=\"130\" y=\"20\" fill=\"#f43f5e\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">v⃗</text>\n            </svg>\n          </div>\n          <span style=\"color:#94a3b8; font-size:12px;\">$0^\\circ \\le (<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>) \\le 180^\\circ$</span>\n        </div>\n        <div style=\"text-align:center; background:#1e293b; padding:12px; border-radius:8px; border:1px solid #334155; min-width:220px;\">\n          <b style=\"color:#38bdf8; font-size:13px;\">Hai véc tơ vuông góc ($90^\\circ$)</b>\n          <div style=\"margin:8px 0;\">\n            <svg width=\"180\" height=\"95\" viewBox=\"0 0 180 95\">\n              \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n              <line x1=\"30\" y1=\"75\" x2=\"150\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n              <line x1=\"30\" y1=\"75\" x2=\"30\" y2=\"15\" stroke=\"#34d399\" stroke-width=\"2.5\" marker-end=\"url(#arrG)\"/>\n              <rect x=\"30\" y=\"60\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n              <text x=\"14\" y=\"80\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">O</text>\n              <text x=\"155\" y=\"80\" fill=\"#38bdf8\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">u⃗</text>\n              <text x=\"35\" y=\"18\" fill=\"#34d399\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">v⃗</text>\n            </svg>\n          </div>\n          <span style=\"color:#34d399; font-size:12px; font-weight:bold;\"><span class=\"v-vec\">u</span> ⊥ <span class=\"v-vec\">v</span> $\\Leftrightarrow$ <span class=\"v-vec\">u</span> · <span class=\"v-vec\">v</span> = 0</span>\n        </div>\n      </div>\n\n    </div>\n\n    <div id=\"part2\">\n      <h3>2. Tích vô hướng của hai véc tơ</h3>\n      <p>• Định nghĩa: $\\mathbf{<span class=\"v-vec\">u</span> \\cdot <span class=\"v-vec\">v</span> = |<span class=\"v-vec\">u</span>| \\cdot |<span class=\"v-vec\">v</span>| \\cdot \\cos(<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>)}$.<br>\n      • <b>Điều kiện vuông góc:</b> $\\mathbf{<span class=\"v-vec\">u</span> \\perp <span class=\"v-vec\">v</span> \\Leftrightarrow <span class=\"v-vec\">u</span> \\cdot <span class=\"v-vec\">v</span> = 0}$.<br>\n      • Công thức tính góc: $\\mathbf{\\cos(<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>) = \\frac{<span class=\"v-vec\">u</span> \\cdot <span class=\"v-vec\">v</span>}{|<span class=\"v-vec\">u</span>| \\cdot |<span class=\"v-vec\">v</span>|}}$.</p>\n    </div>\n\n    <div id=\"part3\"><h3>3. Các ví dụ tính toán</h3></div>\n\n    <!-- Ví dụ 1 -->\n    <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n      <div id=\"vd1_q\">\n        <b style=\"color:#38bdf8;\">Ví dụ 1:</b> Cho tứ diện đều $ABCD$ cạnh $a$. Tính tích vô hướng <span class=\"v-vec\">AB</span> · <span class=\"v-vec\">AC</span>.<br>\n        \n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"180\" height=\"110\" viewBox=\"0 0 180 110\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"90,15 25,95 155,95\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"90\" y1=\"15\" x2=\"30\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"90\" y1=\"15\" x2=\"150\" y2=\"90\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <path d=\"M 75 35 A 25 25 0 0 0 105 35\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n            <text x=\"80\" y=\"48\" fill=\"#fbbf24\" font-size=\"11\">60°</text>\n            <text x=\"90\" y=\"10\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"12\" y=\"102\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">B</text>\n            <text x=\"160\" y=\"102\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">C</text>\n          </svg>\n        </div>\n\n        <i>(Thời gian suy nghĩ: 20 giây)</i>\n      </div>\n      <div id=\"vd1_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n        <b>Lời giải:</b><br>\n        Tam giác $ABC$ đều nên góc giữa hai véc tơ <span class=\"v-vec\">AB</span> và <span class=\"v-vec\">AC</span> là $60^\\circ$.<br>\n        $<span class=\"v-vec\">AB</span> \\cdot <span class=\"v-vec\">AC</span> = |<span class=\"v-vec\">AB</span>| \\cdot |<span class=\"v-vec\">AC</span>| \\cdot \\cos 60^\\circ = a \\cdot a \\cdot \\frac{1}{2} = \\mathbf{\\frac{a^2}{2}}$.\n      </div>\n    </div>\n\n    <!-- Ví dụ 2 -->\n    <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n      <div id=\"vd2_q\">\n        <b style=\"color:#38bdf8;\">Ví dụ 2:</b> Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính tích vô hướng $<span class=\"v-vec\">AB</span> \\cdot <span class=\"v-vec\">AD'</span>$.<br>\n        \n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"220\" height=\"150\" viewBox=\"0 0 220 150\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"45,25 125,25 165,55 85,55\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <polygon points=\"45,75 125,75 165,105 85,105\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"45\" y1=\"25\" x2=\"45\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"125\" y1=\"25\" x2=\"125\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"165\" y1=\"55\" x2=\"165\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"85\" y1=\"55\" x2=\"85\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"45\" y1=\"75\" x2=\"120\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"45\" y1=\"75\" x2=\"83\" y2=\"57\" stroke=\"#34d399\" stroke-width=\"2.5\" marker-end=\"url(#arrG)\"/>\n            <text x=\"30\" y=\"80\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"130\" y=\"80\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">B</text>\n            <text x=\"80\" y=\"50\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\">D'</text>\n          </svg>\n        </div>\n\n        <i>(Thời gian suy nghĩ: 20 giây)</i>\n      </div>\n      <div id=\"vd2_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n        <b>Lời giải:</b><br>\n        Cạnh $AB \\perp (ADD'A') \\implies AB \\perp AD'$.<br>\n        Do đó góc giữa hai véc tơ bằng $90^\\circ \\implies$ $\\mathbf{<span class=\"v-vec\">AB</span> \\cdot <span class=\"v-vec\">AD'</span> = 0}$.\n      </div>\n    </div>\n\n    <!-- Ví dụ 3 -->\n    <div class=\"slide\" style=\"border:1px solid #38bdf8; border-radius:8px; padding:12px; margin:10px 0; background:#0f172a;\">\n      <div id=\"vd3_q\">\n        <b style=\"color:#38bdf8;\">Ví dụ 3:</b> Cho $|<span class=\"v-vec\">u</span>| = 2, |<span class=\"v-vec\">v</span>| = 3$, tích vô hướng <span class=\"v-vec\">u</span> · <span class=\"v-vec\">v</span> = -3. Tính góc $(<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>)$.<br>\n        \n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"200\" height=\"95\" viewBox=\"0 0 200 95\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <line x1=\"100\" y1=\"75\" x2=\"180\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"100\" y1=\"75\" x2=\"50\" y2=\"25\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <path d=\"M 130 75 A 30 30 0 0 0 78 53\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n            <text x=\"96\" y=\"52\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">120°</text>\n            <text x=\"92\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\">O</text>\n            <text x=\"185\" y=\"80\" fill=\"#38bdf8\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">u⃗</text>\n            <text x=\"40\" y=\"25\" fill=\"#f43f5e\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">v⃗</text>\n          </svg>\n        </div>\n\n        <i>(Thời gian suy nghĩ: 15 giây)</i>\n      </div>\n      <div id=\"vd3_a\" style=\"margin-top:10px; border-top:1px dashed #475569; padding-top:10px;\">\n        <b>Lời giải:</b><br>\n        $$\\cos(<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>) = \\frac{<span class=\"v-vec\">u</span> \\cdot <span class=\"v-vec\">v</span>}{|<span class=\"v-vec\">u</span>| \\cdot |<span class=\"v-vec\">v</span>|} = \\frac{-3}{2 \\cdot 3} = -\\frac{1}{2}$$<br>\n        Suy ra: $\\mathbf{(<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>) = 120^\\circ}$.\n      </div>\n    </div>\n\n    <div id=\"part4\"><h3>4. Bẫy đề thi</h3><p>Nhầm góc giữa hai véc tơ với góc giữa hai đường thẳng. Góc giữa hai đường thẳng luôn nhọn hoặc vuông ($\\le 90^\\circ$), còn góc giữa hai véc tơ có thể là góc tù (lên tới $180^\\circ$).</p></div>\n    <div id=\"part5\"><h3>5. Mẹo Thầy Cú</h3><p>Muốn chứng minh hai đường thẳng vuông góc trong không gian, hãy quy về tính tích vô hướng của hai véc tơ chỉ phương bằng không!</p></div>\n",
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
      "bodyHtml": "<div style=\"font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:10px;\">1. Góc giữa hai véc tơ trong không gian</div>\n      <div style=\"display:flex; flex-wrap:wrap; justify-content:center; gap:16px; margin:12px 0;\">\n        <div style=\"text-align:center; background:#1e293b; padding:12px; border-radius:8px; border:1px solid #334155; min-width:220px;\">\n          <b style=\"color:#38bdf8; font-size:13px;\">Góc giữa hai véc tơ <span class=\"v-vec\">u</span> và <span class=\"v-vec\">v</span></b>\n          <div style=\"margin:8px 0;\">\n            <svg width=\"200\" height=\"95\" viewBox=\"0 0 200 95\">\n              \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n              <line x1=\"30\" y1=\"75\" x2=\"160\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n              <line x1=\"30\" y1=\"75\" x2=\"125\" y2=\"20\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n              <path d=\"M 65 75 A 35 35 0 0 0 57 58\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n              <text x=\"68\" y=\"65\" fill=\"#fbbf24\" font-size=\"14\" font-weight=\"bold\">φ</text>\n              <text x=\"14\" y=\"80\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">O</text>\n              <text x=\"165\" y=\"80\" fill=\"#38bdf8\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">u⃗</text>\n              <text x=\"130\" y=\"20\" fill=\"#f43f5e\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">v⃗</text>\n            </svg>\n          </div>\n          <span style=\"color:#94a3b8; font-size:12px;\">$0^\\circ \\le (<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>) \\le 180^\\circ$</span>\n        </div>\n        <div style=\"text-align:center; background:#1e293b; padding:12px; border-radius:8px; border:1px solid #334155; min-width:220px;\">\n          <b style=\"color:#38bdf8; font-size:13px;\">Hai véc tơ vuông góc ($90^\\circ$)</b>\n          <div style=\"margin:8px 0;\">\n            <svg width=\"180\" height=\"95\" viewBox=\"0 0 180 95\">\n              \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n              <line x1=\"30\" y1=\"75\" x2=\"150\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n              <line x1=\"30\" y1=\"75\" x2=\"30\" y2=\"15\" stroke=\"#34d399\" stroke-width=\"2.5\" marker-end=\"url(#arrG)\"/>\n              <rect x=\"30\" y=\"60\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n              <text x=\"14\" y=\"80\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">O</text>\n              <text x=\"155\" y=\"80\" fill=\"#38bdf8\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">u⃗</text>\n              <text x=\"35\" y=\"18\" fill=\"#34d399\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">v⃗</text>\n            </svg>\n          </div>\n          <span style=\"color:#34d399; font-size:12px; font-weight:bold;\"><span class=\"v-vec\">u</span> ⊥ <span class=\"v-vec\">v</span> $\\Leftrightarrow$ <span class=\"v-vec\">u</span> · <span class=\"v-vec\">v</span> = 0</span>\n        </div>\n      </div>\n<div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• Cho hai véc tơ $<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span> \\ne <span class=\"v-vec\">0</span>$. Lấy điểm $O$, dựng $<span class=\"v-vec\">OA</span> = <span class=\"v-vec\">u</span>$ và $<span class=\"v-vec\">OB</span> = <span class=\"v-vec\">v</span>$. Khi đó: $(<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>) = \\widehat{AOB}$.<br>• Khoảng giá trị: $0^\\circ \\le (<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>) \\le 180^\\circ$.<br>• Hai véc tơ vuông góc: $<span class=\"v-vec\">u</span> \\perp <span class=\"v-vec\">v</span> \\Leftrightarrow (<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>) = 90^\\circ$.</p></div>"
    },
    {
      "sceneIndex": 2,
      "title": "CÔNG THỨC TÍCH VÔ HƯỚNG",
      "subtitle": "PHẦN 2: ĐIỀU KIỆN VUÔNG GÓC & TÍNH GÓC",
      "startTime": 27.72,
      "endTime": 48.34,
      "duration": 20.62,
      "mascotMode": "pointer",
      "mascotTip": "<span class=\"v-vec\">u</span> · <span class=\"v-vec\">v</span> = |<span class=\"v-vec\">u</span>| . |<span class=\"v-vec\">v</span>| . cos(<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>). Hai véc tơ vuông góc <=> <span class=\"v-vec\">u</span> · <span class=\"v-vec\">v</span> = 0!",
      "bodyHtml": "<div style=\"font-size:24px; color:#38bdf8; font-weight:bold; margin-bottom:10px;\">2. Tích vô hướng của hai véc tơ</div><div style=\"font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;\"><p>• <b>Công thức:</b> <span class=\"v-vec\">u</span> · <span class=\"v-vec\">v</span> = |<span class=\"v-vec\">u</span>| · |<span class=\"v-vec\">v</span>| · cos(<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>).<br>• <b>Điều kiện vuông góc:</b> $<span class=\"v-vec\">u</span> \\perp <span class=\"v-vec\">v</span> \\iff <span class=\"v-vec\">u</span> \\cdot <span class=\"v-vec\">v</span> = 0$.<br>• <b>Công thức cosin góc:</b> $\\cos(<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>) = \\frac{<span class=\"v-vec\">u</span> \\cdot <span class=\"v-vec\">v</span>}{|<span class=\"v-vec\">u</span>| \\cdot |<span class=\"v-vec\">v</span>|}$.<br>• Bình phương vô hướng: $<span class=\"v-vec\">u</span>^2 = |<span class=\"v-vec\">u</span>|^2$.</p></div>"
    },
    {
      "sceneIndex": 3,
      "title": "VÍ DỤ 1: TỨ DIỆN ĐỀU CẠNH a",
      "subtitle": "TÍNH TÍCH VÔ HƯỚNG HAI CẠNH CHUNG GỐC",
      "startTime": 48.34,
      "endTime": 65.23,
      "duration": 16.89,
      "mascotMode": "pointer",
      "mascotTip": "Tam giác ABC đều -> Góc A = 60 độ. AB . <span class=\"v-vec\">AC</span> = a . a . cos(60) = a²/2!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd1_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 1:</b> Cho tứ diện đều $ABCD$ cạnh $a$. Tính tích vô hướng <span class=\"v-vec\">AB</span> · <span class=\"v-vec\">AC</span>.\n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"180\" height=\"110\" viewBox=\"0 0 180 110\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"90,15 25,95 155,95\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n            <line x1=\"90\" y1=\"15\" x2=\"30\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"90\" y1=\"15\" x2=\"150\" y2=\"90\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <path d=\"M 75 35 A 25 25 0 0 0 105 35\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n            <text x=\"80\" y=\"48\" fill=\"#fbbf24\" font-size=\"11\">60°</text>\n            <text x=\"90\" y=\"10\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"12\" y=\"102\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">B</text>\n            <text x=\"160\" y=\"102\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">C</text>\n          </svg>\n        </div>\n<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian làm nháp: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 4,
      "title": "VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
      "subtitle": "GÓC 60 ĐỘ TRONG TAM GIÁC ĐỀU",
      "startTime": 65.23,
      "endTime": 79.49,
      "duration": 14.26,
      "mascotMode": "pointer",
      "mascotTip": "AB . <span class=\"v-vec\">AC</span> = a² / 2!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd1_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 1:</b><br>Tam giác $ABC$ đều nên góc giữa hai véc tơ <span class=\"v-vec\">AB</span> và <span class=\"v-vec\">AC</span> là $60^\\circ$.<br>$$<span class=\"v-vec\">AB</span> \\cdot <span class=\"v-vec\">AC</span> = a \\cdot a \\cdot \\cos 60^\\circ = a^2 \\cdot \\frac{1}{2} = \\frac{a^2}{2}$$<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$<span class=\"v-vec\">AB</span> \\cdot <span class=\"v-vec\">AC</span> = \\frac{a^2}{2}$</b>.</div></div>"
    },
    {
      "sceneIndex": 5,
      "title": "VÍ DỤ 2: HÌNH LẬP PHƯƠNG CẠNH a",
      "subtitle": "TÍCH VÔ HƯỚNG VUÔNG GÓC",
      "startTime": 79.49,
      "endTime": 94.87,
      "duration": 15.38,
      "mascotMode": "pointer",
      "mascotTip": "AB vuông góc với (ADD'A') -> AB vuông góc với <span class=\"v-vec\">AD'</span> -> Tích vô hướng = 0!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd2_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 2:</b> Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính tích vô hướng $<span class=\"v-vec\">AB</span> \\cdot <span class=\"v-vec\">AD'</span>$.\n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"220\" height=\"150\" viewBox=\"0 0 220 150\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <polygon points=\"45,25 125,25 165,55 85,55\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <polygon points=\"45,75 125,75 165,105 85,105\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"45\" y1=\"25\" x2=\"45\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"125\" y1=\"25\" x2=\"125\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"165\" y1=\"55\" x2=\"165\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"85\" y1=\"55\" x2=\"85\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n            <line x1=\"45\" y1=\"75\" x2=\"120\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"45\" y1=\"75\" x2=\"83\" y2=\"57\" stroke=\"#34d399\" stroke-width=\"2.5\" marker-end=\"url(#arrG)\"/>\n            <text x=\"30\" y=\"80\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A</text>\n            <text x=\"130\" y=\"80\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">B</text>\n            <text x=\"80\" y=\"50\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\">D'</text>\n          </svg>\n        </div>\n<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 20 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 6,
      "title": "VÍ DỤ 2: LỜI GIẢI",
      "subtitle": "CHỨNG MINH VUÔNG GÓC",
      "startTime": 94.87,
      "endTime": 108.7,
      "duration": 13.83,
      "mascotMode": "pointer",
      "mascotTip": "Cạnh AB vuông góc <span class=\"v-vec\">AD'</span> -> góc = 90 độ -> tích vô hướng bằng 0!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd2_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 2:</b><br>Cạnh $AB \\perp (ADD'A') \\implies AB \\perp AD'$.<br>Góc giữa hai véc tơ bằng $90^\\circ$.<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$<span class=\"v-vec\">AB</span> \\cdot <span class=\"v-vec\">AD'</span> = 0$</b>.</div></div>"
    },
    {
      "sceneIndex": 7,
      "title": "VÍ DỤ 3: TÌM GÓC GIỮA HAI VÉC TƠ",
      "subtitle": "BIẾT ĐỘ DÀI VÀ TÍCH VÔ HƯỚNG",
      "startTime": 108.7,
      "endTime": 125.06,
      "duration": 16.36,
      "mascotMode": "pointer",
      "mascotTip": "cos(<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>) = (<span class=\"v-vec\">u</span> · <span class=\"v-vec\">v</span>) / (|<span class=\"v-vec\">u</span>| . |<span class=\"v-vec\">v</span>|) = -3 / (2 . 3) = -1/2 -> Góc bằng 120 độ!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #38bdf8; padding:16px; border-radius:12px; background:rgba(30,41,59,0.7);\"><div id=\"vd3_q\" style=\"font-size:21px; line-height:1.6; color:#f8fafc;\"><b>Ví dụ 3:</b> Cho $|<span class=\"v-vec\">u</span>| = 2, |<span class=\"v-vec\">v</span>| = 3$, tích vô hướng <span class=\"v-vec\">u</span> · <span class=\"v-vec\">v</span> = -3. Tính góc $(<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>)$.\n        <div style=\"text-align:center; margin:10px 0;\">\n          <svg width=\"200\" height=\"95\" viewBox=\"0 0 200 95\" style=\"background:#1e293b; border-radius:8px;\">\n            \n            <defs>\n              <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#38bdf8\"/></marker>\n              <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#f43f5e\"/></marker>\n              <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#34d399\"/></marker>\n              <marker id=\"arrY\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 1 L10 5 L0 9 z\" fill=\"#fbbf24\"/></marker>\n            </defs>\n\n            <line x1=\"100\" y1=\"75\" x2=\"180\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arrB)\"/>\n            <line x1=\"100\" y1=\"75\" x2=\"50\" y2=\"25\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n            <path d=\"M 130 75 A 30 30 0 0 0 78 53\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n            <text x=\"96\" y=\"52\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">120°</text>\n            <text x=\"92\" y=\"90\" fill=\"#f8fafc\" font-size=\"12\">O</text>\n            <text x=\"185\" y=\"80\" fill=\"#38bdf8\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">u⃗</text>\n            <text x=\"40\" y=\"25\" fill=\"#f43f5e\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">v⃗</text>\n          </svg>\n        </div>\n<div style=\"margin-top:10px; padding:8px 14px; background:rgba(234,179,8,0.15); border:1.5px solid #eab308; border-radius:8px; color:#fef08a; font-size:19px;\">⏱️ <b>Thời gian suy nghĩ: 15 giây</b></div></div></div>"
    },
    {
      "sceneIndex": 8,
      "title": "VÍ DỤ 3: LỜI GIẢI",
      "subtitle": "GÓC TÙ GIỮA HAI VÉC TƠ",
      "startTime": 125.06,
      "endTime": 138.96,
      "duration": 13.9,
      "mascotMode": "pointer",
      "mascotTip": "cos(<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>) = -1/2 -> (<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>) = 120 độ!",
      "bodyHtml": "<div class=\"slide\" style=\"border:2px solid #10b981; padding:18px; border-radius:12px; background:rgba(16,185,129,0.1);\"><div id=\"vd3_a\" style=\"font-size:21px; line-height:1.65; color:#f8fafc;\"><b style=\"color:#34d399; font-size:23px;\">Lời giải Ví dụ 3:</b><br>$$\\cos(<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>) = \\frac{<span class=\"v-vec\">u</span> \\cdot <span class=\"v-vec\">v</span>}{|<span class=\"v-vec\">u</span>| \\cdot |<span class=\"v-vec\">v</span>|} = \\frac{-3}{2 \\cdot 3} = -\\frac{1}{2}$$<br><b style=\"color:#10b981; font-size:22px;\">Kết luận:</b> <b>$(<span class=\"v-vec\">u</span>, <span class=\"v-vec\">v</span>) = 120^\\circ$</b>.</div></div>"
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
      "bodyHtml": "<div style=\"font-size:22px; color:#4ade80; font-weight:bold; margin-bottom:8px;\">5. Bí kíp vàng chứng minh vuông góc:</div><div style=\"font-size:20px; line-height:1.65; color:#e2e8f0; margin-left:14px;\">Muốn chứng minh hai đường thẳng vuông góc trong không gian:<br>• Chỉ cần lấy hai véc tơ chỉ phương <span class=\"v-vec\">u</span> và <span class=\"v-vec\">v</span>.<br>• Tính tích vô hướng <span class=\"v-vec\">u</span> · <span class=\"v-vec\">v</span> = 0.<br>$\\implies a \\perp b$ nhanh chóng và chính xác tuyệt đối!</div>"
    }
  ]
};

// Tương thích ngược: Đồng bộ sang CHAPTER1_DATA & CHAPTER1_LECTURES
if (typeof window.CHAPTER1_DATA === 'undefined') window.CHAPTER1_DATA = {};
Object.assign(window.CHAPTER1_DATA, window.CHAPTER2_DATA);
if (typeof window.CHAPTER1_LECTURES !== 'undefined') {
  Object.assign(window.CHAPTER1_LECTURES, window.CHAPTER2_DATA);
}
