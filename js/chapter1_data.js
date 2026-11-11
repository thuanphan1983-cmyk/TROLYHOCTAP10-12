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
  "audioSrc": "./audio/bai2_muc1.mp3",
  "totalDuration": 215,
  "duration": 215,
  "audio_src": "./audio/bai2_muc1.mp3",
  "timestamp_src": "timestamps/bai2_muc1.json",
  "title": "Mục 1: Định nghĩa GTLN & GTNN (Phân biệt Max/Min với Cực trị)",
  "owl_tip": "Ghi nhớ: GTLN/GTNN là giá trị toàn cục trên tập D, khác với Cực trị chỉ mang tính chất địa phương cục bộ!",
  "timeline": [
    {
      "time": 0,
      "id": "part1"
    },
    {
      "time": 35,
      "id": "part2"
    },
    {
      "time": 60,
      "id": "part3"
    },
    {
      "time": 175,
      "id": "part4"
    },
    {
      "time": 195,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm & Định nghĩa chuẩn mực SGK KNTT",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Phân biệt bản chất Max/Min với Cực trị",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Ba ví dụ trực quan & Đồ thị SVG trực quan",
      "scenes": [
        3
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Cảnh báo 2 bẫy đề thi kinh điển",
      "scenes": [
        4
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Bí kíp Thầy Cú thông thái & Phân biệt câu hỏi trắc nghiệm",
      "scenes": [
        5
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "BÀI 2: GTLN VÀ GTNN CỦA HÀM SỐ",
      "subtitle": "MỤC 1 • ĐỊNH NGHĨA CHUẨN MỰC BỘ GD&ĐT",
      "startTime": 0,
      "endTime": 35,
      "duration": 35,
      "mascotMode": "pointer",
      "mascotTip": "<b>Điều kiện bắt buộc:</b> Muốn kết luận $M$ là GTLN thì bắt buộc phải chỉ ra ít nhất một điểm $x_0 \\in D$ sao cho $f(x_0) = M$!",
      "bodyHtml": "\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#fef08a; font-weight:bold; margin-bottom:6px;\">\n          1. Định nghĩa Giá trị lớn nhất (GTLN) trên tập $D$:\n        </div>\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.6; color:#e2e8f0; margin-left:14px; background:rgba(30,41,59,0.5); padding:10px 14px; border-radius:8px; border-left:3px solid #fef08a;\">\n          Cho hàm số $y = f(x)$ xác định trên tập hợp $D \\subset \\mathbb{R}$:<br>\n          Số $M$ được gọi là <b>giá trị lớn nhất</b> của $f(x)$ trên $D$ (kí hiệu $\\max_{x \\in D} f(x) = M$) nếu thỏa mãn đồng thời cả hai điều kiện:<br>\n          • $f(x) \\le M, \\quad \\forall x \\in D$<br>\n          • $\\exists x_0 \\in D$ sao cho $f(x_0) = M$.\n        </div>\n\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#38bdf8; font-weight:bold; margin:12px 0 6px 0;\">\n          2. Định nghĩa Giá trị nhỏ nhất (GTNN) trên tập $D$:\n        </div>\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.6; color:#e2e8f0; margin-left:14px; background:rgba(30,41,59,0.5); padding:10px 14px; border-radius:8px; border-left:3px solid #38bdf8;\">\n          Số $m$ được gọi là <b>giá trị nhỏ nhất</b> của $f(x)$ trên $D$ (kí hiệu $\\min_{x \\in D} f(x) = m$) nếu thỏa mãn đồng thời cả hai điều kiện:<br>\n          • $f(x) \\ge m, \\quad \\forall x \\in D$<br>\n          • $\\exists x_0 \\in D$ sao cho $f(x_0) = m$.\n        </div>\n      ",
      "narration": "Chào các em học sinh. Chúng ta tìm hiểu Bài hai Mục một: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số. Phần một: Khái niệm cốt lõi. Cho hàm số f(x) xác định trên tập D. Số M được gọi là giá trị lớn nhất của hàm số trên tập D nếu thỏa mãn hai điều kiện: f(x) luôn nhỏ hơn hoặc bằng M với mọi x thuộc tập D, và tồn tại ít nhất một phần tử x không thuộc tập D sao cho f tại x không bằng M. Ký hiệu max f(x) bằng M. Tương tự, số m là giá trị nhỏ nhất nếu f(x) luôn lớn hơn hoặc bằng m với mọi x thuộc tập D, và tồn tại x không thuộc tập D sao cho f tại x không bằng m."
    },
    {
      "sceneIndex": 2,
      "title": "PHÂN BIỆT RÕ GTLN/GTNN VỚI ĐIỂM CỰC TRỊ",
      "subtitle": "MỤC 1 • TOÀN CỤC TRÊN D vs ĐỊA PHƯƠNG CỤC BỘ",
      "startTime": 35,
      "endTime": 60,
      "duration": 25,
      "mascotMode": "magnifier",
      "mascotTip": "<b>Khắc cốt ghi tâm:</b> Điểm cực đại chỉ là đỉnh đồi trong lân cận hẹp, còn GTLN là đỉnh Everest cao nhất trên toàn cõi tập D!",
      "bodyHtml": "\n        <table class=\"bbt-table\" style=\"width:100%; border-collapse:collapse; background:rgba(15,23,42,0.85); border-top:2px solid #cbd5e1; border-bottom:2px solid #cbd5e1; margin:6px 0;\">\n          <tr style=\"border-bottom:1.5px solid #64748b; background:rgba(30,41,59,0.7);\">\n            <th style=\"padding:8px 12px; text-align:left; color:#fef08a; font-size:clamp(14px, 1.8vh, 16px); width:32%;\">Tiêu chí</th>\n            <th style=\"padding:8px 12px; text-align:left; color:#a7f3d0; font-size:clamp(14px, 1.8vh, 16px); width:34%;\">Cực trị (CĐ / CT)</th>\n            <th style=\"padding:8px 12px; text-align:left; color:#38bdf8; font-size:clamp(14px, 1.8vh, 16px); width:34%;\">GTLN & GTNN (Max / Min)</th>\n          </tr>\n          <tr style=\"border-bottom:1px solid #334155;\">\n            <td style=\"padding:8px 12px; color:#f8fafc; font-weight:bold; font-size:clamp(12.5px, 1.5vh, 14.5px);\">1. Phạm vi khảo sát</td>\n            <td style=\"padding:8px 12px; color:#cbd5e1; font-size:clamp(12px, 1.45vh, 14px);\"><b>Địa phương:</b> Chỉ so sánh trong một lân cận hẹp $(x_0-\\varepsilon; x_0+\\varepsilon)$.</td>\n            <td style=\"padding:8px 12px; color:#cbd5e1; font-size:clamp(12px, 1.45vh, 14px);\"><b>Toàn cục:</b> So sánh trên toàn bộ tập xác định hoặc đoạn $D$.</td>\n          </tr>\n          <tr style=\"border-bottom:1px solid #334155;\">\n            <td style=\"padding:8px 12px; color:#f8fafc; font-weight:bold; font-size:clamp(12.5px, 1.5vh, 14.5px);\">2. Vị trí đạt được</td>\n            <td style=\"padding:8px 12px; color:#cbd5e1; font-size:clamp(12px, 1.45vh, 14px);\">Bắt buộc chỉ đạt tại <b>điểm trong</b> của tập xác định.</td>\n            <td style=\"padding:8px 12px; color:#cbd5e1; font-size:clamp(12px, 1.45vh, 14px);\">Có thể đạt tại điểm trong hoặc ngay tại <b>đầu mút biên</b>.</td>\n          </tr>\n          <tr>\n            <td style=\"padding:8px 12px; color:#f8fafc; font-weight:bold; font-size:clamp(12.5px, 1.5vh, 14.5px);\">3. Tương quan độ lớn</td>\n            <td style=\"padding:8px 12px; color:#cbd5e1; font-size:clamp(12px, 1.45vh, 14px);\">Giá trị cực đại $y_{\\text{CĐ}}$ hoàn toàn có thể <b>nhỏ hơn</b> giá trị cực tiểu $y_{\\text{CT}}$ ở nhánh khác!</td>\n            <td style=\"padding:8px 12px; color:#cbd5e1; font-size:clamp(12px, 1.45vh, 14px);\">$\\max_D f(x)$ luôn lớn hơn hoặc bằng mọi giá trị khác trên toàn tập $D$.</td>\n          </tr>\n        </table>\n      ",
      "narration": "Phần hai: Phân biệt với cực trị. Cực đại, cực tiểu mang tính địa phương trong một lân cận. Còn giá trị lớn nhất, nhỏ nhất mang tính toàn cục trên toàn bộ tập D. Hàm số có thể có nhiều cực trị nhưng chỉ có duy nhất một giá trị lớn nhất nếu có."
    },
    {
      "sceneIndex": 3,
      "title": "BA VÍ DỤ TRỰC QUAN ĐIỂN HÌNH",
      "subtitle": "MỤC 1 • ĐỒ THỊ PARABOL, KHOẢNG MỞ & BẢNG BIẾN THIÊN",
      "startTime": 60,
      "endTime": 175,
      "duration": 115,
      "mascotMode": "pointer",
      "mascotTip": "<b>Quan sát 3 ví dụ:</b> Luôn nhớ kiểm tra xem dấu bằng $f(x_0)=M$ có tồn tại $x_0 \\in D$ hay không!",
      "bodyHtml": "\n        <div style=\"display:flex; flex-direction:column; gap:8px;\">\n          <!-- VD1 -->\n          <div style=\"background:rgba(30,41,59,0.6); padding:8px 12px; border-radius:6px; border-left:3px solid #38bdf8;\">\n            <b style=\"color:#fef08a; font-size:clamp(13px, 1.6vh, 15px);\">Ví dụ 1: Đồ thị Parabol $y = 4 - x^2$ trên đoạn $[-1; 2]$</b><br>\n            <div style=\"display:flex; gap:10px; align-items:center; flex-wrap:wrap; margin-top:4px;\">\n              <div style=\"flex:1; min-width:180px; font-size:clamp(11.5px, 1.4vh, 13.5px); color:#e2e8f0; line-height:1.5;\">\n                • Đỉnh $I(0; 4)$ có $x = 0 \\in [-1; 2] \\implies \\mathbf{\\max_{[-1; 2]} y = 4}$ tại $x = 0$.<br>\n                • Hai đầu mút: $y(-1) = 3$; $y(2) = 0$.<br>\n                • Điểm thấp nhất là $(2; 0) \\implies \\mathbf{\\min_{[-1; 2]} y = 0}$ tại $x = 2$.\n              </div>\n              <div style=\"width:160px; flex-shrink:0;\">\n                <svg viewBox=\"0 0 200 120\" style=\"width:100%; height:auto; background:rgba(15,23,42,0.8); border-radius:6px; border:1px solid #334155;\">\n                  <line x1=\"15\" y1=\"95\" x2=\"190\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/>\n                  <line x1=\"70\" y1=\"110\" x2=\"70\" y2=\"10\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/>\n                  <text x=\"180\" y=\"108\" fill=\"#94a3b8\" font-size=\"10\">x</text>\n                  <text x=\"60\" y=\"14\" fill=\"#94a3b8\" font-size=\"10\">y</text>\n                  <!-- Parabola on [-1; 2] -->\n                  <path d=\"M 40,55 C 55,25 65,25 70,25 C 95,25 135,45 165,95\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                  <circle cx=\"70\" cy=\"25\" r=\"3.5\" fill=\"#facc15\"/>\n                  <text x=\"76\" y=\"24\" fill=\"#fef08a\" font-size=\"9\" font-weight=\"bold\">Max=4 (x=0)</text>\n                  <circle cx=\"165\" cy=\"95\" r=\"3.5\" fill=\"#f43f5e\"/>\n                  <text x=\"125\" y=\"90\" fill=\"#fca5a5\" font-size=\"9\" font-weight=\"bold\">Min=0 (x=2)</text>\n                </svg>\n              </div>\n            </div>\n          </div>\n\n          <!-- VD2 -->\n          <div style=\"background:rgba(30,41,59,0.6); padding:8px 12px; border-radius:6px; border-left:3px solid #f87171;\">\n            <b style=\"color:#f87171; font-size:clamp(13px, 1.6vh, 15px);\">Ví dụ 2: Hàm số $y = 2x - 1$ trên khoảng mở $(0; 2)$</b><br>\n            <div style=\"font-size:clamp(11.5px, 1.4vh, 13.5px); color:#e2e8f0; line-height:1.5; margin-top:2px;\">\n              • Ta có $x \\in (0; 2) \\implies y \\in (-1; 3)$. Khi $x \\to 0^+$ thì $y \\to -1$, khi $x \\to 2^-$ thì $y \\to 3$.<br>\n              • Do $x = 0$ và $x = 2$ <b>không thuộc tập xác định $(0; 2)$</b> nên dấu bằng không bao giờ xảy ra.<br>\n              • <b>Kết luận:</b> Hàm số <b>không có GTLN và không có GTNN</b> trên khoảng $(0; 2)$!\n            </div>\n          </div>\n\n          <!-- VD3 -->\n          <div style=\"background:rgba(30,41,59,0.6); padding:8px 12px; border-radius:6px; border-left:3px solid #4ade80;\">\n            <b style=\"color:#4ade80; font-size:clamp(13px, 1.6vh, 15px);\">Ví dụ 3: Đọc Max / Min từ Bảng biến thiên trên đoạn $[-2; 3]$</b><br>\n            <div style=\"font-size:clamp(11.5px, 1.4vh, 13.5px); color:#e2e8f0; line-height:1.5; margin-top:2px;\">\n              • Cho hàm số liên tục trên $[-2; 3]$ có đỉnh nhô cao nhất là $5$ (tại $x = 0$), điểm trũng nhất là $-2$ (tại $x = -2$).<br>\n              • <b>Kết luận ngay:</b> $\\mathbf{\\max_{[-2; 3]} f(x) = 5}$ tại $x = 0$, $\\mathbf{\\min_{[-2; 3]} f(x) = -2}$ tại $x = -2$.\n            </div>\n          </div>\n        </div>\n      ",
      "narration": "Phần ba: Ba ví dụ trực quan. Ví dụ một: Xét hàm y bằng bốn trừ x bình phương trên đoạn trừ một đến hai. Đỉnh parabol tại x bằng không có y bằng bốn là cao nhất, vậy giá trị lớn nhất bằng bốn. Điểm thấp nhất tại x bằng hai với y bằng không, vậy giá trị nhỏ nhất bằng không. Ví dụ hai: Xét hàm y bằng hai x trừ một trên khoảng mở từ không đến hai. Mặc dù y chạy từ trừ một đến ba, nhưng do hai đầu mút không thuộc tập xác định nên không tồn tại dấu bằng. Vậy hàm số không có max và min. Ví dụ ba: Khi nhìn vào bảng biến thiên trên đoạn từ trừ hai đến ba, điểm nhô cao nhất là năm, điểm trũng nhất là trừ hai. Ta kết luận ngay max bằng năm, min bằng trừ hai."
    },
    {
      "sceneIndex": 4,
      "title": "CẢNH BÁO 2 BẪY ĐỀ THI TRẮC NGHIỆM",
      "subtitle": "MỤC 1 • TRÁNH MẤT ĐIỂM OAN UỔNG KHI LÀM BÀI",
      "startTime": 175,
      "endTime": 195,
      "duration": 20,
      "mascotMode": "magnifier",
      "mascotTip": "<b>Cú cảnh báo:</b> Luôn nhớ kiểm tra xem dấu bằng $f(x_0) = M$ có THỰC SỰ ĐẠT ĐƯỢC tại điểm nào trong tập $D$ hay không!",
      "bodyHtml": "\n        <div class=\"trap-warning-box\" style=\"padding:10px 14px; background:rgba(239,68,68,0.12); border-left:4px solid #ef4444; border-radius:6px; margin-bottom:8px; font-size:clamp(12px, 1.45vh, 14px); color:#fecdd3; line-height:1.5;\">\n          <span style=\"font-weight:bold; color:#ff6b6b;\">Bẫy 1: Tìm được chặn M nhưng không tồn tại dấu bằng!</span><br>\n          Học sinh tìm được chặn trên $M$ nhưng không chỉ ra được điểm $x_0 \\in D$ để dấu bằng xảy ra. Nếu không tồn tại $x_0$ thì $M$ không phải là GTLN.\n        </div>\n        <div class=\"trap-warning-box\" style=\"padding:10px 14px; background:rgba(239,68,68,0.12); border-left:4px solid #ef4444; border-radius:6px; font-size:clamp(12px, 1.45vh, 14px); color:#fecdd3; line-height:1.5;\">\n          <span style=\"font-weight:bold; color:#ff6b6b;\">Bẫy 2: Nhầm lẫn giữa hỏi giá trị và hỏi điểm!</span><br>\n          Nhầm lẫn giữa hỏi <b>giá trị lớn nhất</b> (tung độ $y = M$) với <b>điểm đạt giá trị lớn nhất</b> (hoành độ $x = x_0$).\n        </div>\n      ",
      "narration": "Phần tư: Bẫy đề thi. Tìm được M nhưng không chỉ ra được x không thuộc tập D để dấu bằng xảy ra. Hoặc nhầm lẫn giá trị lớn nhất với điểm đạt giá trị lớn nhất."
    },
    {
      "sceneIndex": 5,
      "title": "BÍ KÍP THẦY CÚ GHI NHỚ & MẸO ĐỌC ĐỒ THỊ",
      "subtitle": "MỤC 1 • CÔNG THỨC VÀNG ĐẠT ĐIỂM TỐI ĐA",
      "startTime": 195,
      "endTime": 215,
      "duration": 20,
      "mascotMode": "cheer",
      "mascotTip": "<b>Thầy Cú chốt hạ:</b> Điểm nhô cao nhất là Max, điểm trũng sâu nhất là Min, gióng xuống trục hoành tìm x0!",
      "bodyHtml": "\n        <div style=\"background:rgba(30,41,59,0.7); border:1.5px solid #38bdf8; border-radius:8px; padding:12px 16px;\">\n          <div style=\"font-size:clamp(14px, 1.8vh, 16px); color:#fef08a; font-weight:bold; margin-bottom:6px;\">\n            🦉 Bí Kíp Thầy Cú Ghi Nhớ Nhanh:\n          </div>\n          <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); line-height:1.6; color:#e2e8f0;\">\n            • Nhìn trên đồ thị hoặc bảng biến thiên:<br>\n            $\\quad$ Điểm <b>nhô cao nhất toàn cục</b> chính là giá trị lớn nhất $\\max f(x)$.<br>\n            $\\quad$ Điểm <b>trũng sâu nhất toàn cục</b> chính là giá trị nhỏ nhất $\\min f(x)$.<br>\n            • Hãy luôn gióng vuông góc xuống trục hoành để đọc chính xác giá trị $x_0$ tương ứng!\n          </div>\n        </div>\n      ",
      "narration": "Phần năm: Bí kíp Thầy Cú. Trên đồ thị, hãy luôn gióng điểm cao nhất và thấp nhất xuống trục hoành để tìm x không nhé."
    }
  ]
},

    bai2_muc2: {
  "lessonId": "bai2",
  "lessonTitle": "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
  "sectionId": "bai2_muc2",
  "sectionTitle": "Mục 2: Quy tắc tìm GTLN, GTNN trên đoạn [a; b]",
  "audioSrc": "./audio/bai2_muc2.mp3",
  "totalDuration": 210,
  "duration": 210,
  "audio_src": "./audio/bai2_muc2.mp3",
  "timestamp_src": "timestamps/bai2_muc2.json",
  "title": "Mục 2: Quy tắc tìm GTLN, GTNN trên đoạn [a; b] (Không cần lập BBT)",
  "owl_tip": "Trên đoạn [a; b], hàm số liên tục luôn có Max và Min. Chỉ cần so sánh f(a), f(b) và các f(x_i) có x_i thuộc khoảng (a; b)!",
  "timeline": [
    {
      "time": 0,
      "id": "part1"
    },
    {
      "time": 25,
      "id": "part2"
    },
    {
      "time": 60,
      "id": "part3"
    },
    {
      "time": 170,
      "id": "part4"
    },
    {
      "time": 190,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Định lý nền tảng Weierstrass trên đoạn [a; b]",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Quy trình giải toán chuẩn mực 3 bước",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Ba ví dụ thực hành: Đa thức, Phân thức & Chứa căn",
      "scenes": [
        3
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Cảnh báo bẫy thi trắc nghiệm",
      "scenes": [
        4
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo bấm máy tính Casio Menu 8 Thầy Cú",
      "scenes": [
        5
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "CƠ SỞ TOÁN HỌC & ĐỊNH LÝ WEIERSTRASS",
      "subtitle": "MỤC 2 • ĐIỀU KIỆN ĐỦ ĐỂ CHẮC CHẮN TỒN TẠI MAX VÀ MIN",
      "startTime": 0,
      "endTime": 25,
      "duration": 25,
      "mascotMode": "pointer",
      "mascotTip": "<b>Định lý then chốt:</b> Cứ hễ hàm số liên tục trên một <b>đoạn đóng $[a; b]$</b> thì chắc chắn $100\\%$ có cả GTLN và GTNN!",
      "bodyHtml": "\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#fef08a; font-weight:bold; margin-bottom:6px;\">\n          Định lý Weierstrass:\n        </div>\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.6; color:#e2e8f0; margin-left:14px; background:rgba(30,41,59,0.5); padding:10px 14px; border-radius:8px; border-left:3px solid #fef08a;\">\n          Mọi hàm số $y = f(x)$ <b>liên tục trên đoạn đóng $[a; b]$</b> đều luôn luôn đạt được giá trị lớn nhất và giá trị nhỏ nhất trên đoạn đó. Điều này đảm bảo chúng ta chắc chắn tìm được đáp số mà không sợ hàm số không tồn tại Max, Min.\n        </div>\n      ",
      "narration": "Chào các em. Chúng ta sang Bài hai Mục hai: Quy tắc tìm giá trị lớn nhất và giá trị nhỏ nhất trên đoạn a b. Phần một: Định lý nền tảng. Mọi hàm số liên tục trên đoạn đóng từ a đến b đều luôn đạt được giá trị lớn nhất và nhỏ nhất trên đoạn đó."
    },
    {
      "sceneIndex": 2,
      "title": "QUY TRÌNH GIẢI TOÁN CHUẨN MỰC 3 BƯỚC",
      "subtitle": "MỤC 2 • KHÔNG CẦN THIẾT PHẢI LẬP BẢNG BIẾN THIÊN",
      "startTime": 25,
      "endTime": 60,
      "duration": 35,
      "mascotMode": "pointer",
      "mascotTip": "<b>Bí quyết vàng:</b> Bước 2 chỉ nhận các nghiệm $x_i$ nằm TRONG khoảng mở $(a; b)$!",
      "bodyHtml": "\n        <div style=\"display:flex; flex-direction:column; gap:8px;\">\n          <div style=\"background:rgba(30,41,59,0.7); border-left:4px solid #fef08a; padding:8px 14px; border-radius:6px;\">\n            <b style=\"color:#fef08a; font-size:clamp(14px, 1.8vh, 16px);\">Bước 1: Tính đạo hàm $f'(x)$</b><br>\n            <span style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); color:#cbd5e1;\">Tính $f'(x)$, giải $f'(x) = 0$ và tìm các điểm đạo hàm không xác định. Chỉ chọn các nghiệm $x_i \\in (a; b)$.</span>\n          </div>\n          <div style=\"background:rgba(30,41,59,0.7); border-left:4px solid #38bdf8; padding:8px 14px; border-radius:6px;\">\n            <b style=\"color:#38bdf8; font-size:clamp(14px, 1.8vh, 16px);\">Bước 2: Tính danh sách các giá trị</b><br>\n            <span style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); color:#cbd5e1;\">Tính giá trị tại hai đầu mút $f(a), \\; f(b)$ và giá trị tại các nghiệm $f(x_i)$.</span>\n          </div>\n          <div style=\"background:rgba(30,41,59,0.7); border-left:4px solid #4ade80; padding:8px 14px; border-radius:6px;\">\n            <b style=\"color:#4ade80; font-size:clamp(14px, 1.8vh, 16px);\">Bước 3: So sánh và kết luận</b><br>\n            <span style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); color:#cbd5e1;\">Số lớn nhất là $\\max_{[a; b]} f(x)$, số nhỏ nhất là $\\min_{[a; b]} f(x)$.</span>\n          </div>\n        </div>\n      ",
      "narration": "Phần hai: Quy trình giải ba bước. Bước một: Tính đạo hàm f phẩy, tìm nghiệm, chỉ lấy các nghiệm x i thuộc khoảng mở a b. Bước hai: Tính giá trị f tại a, f tại b và f tại các nghiệm. Bước ba: So sánh các số vừa tính. Số lớn nhất là max, nhỏ nhất là min. Không cần lập bảng biến thiên."
    },
    {
      "sceneIndex": 3,
      "title": "BA VÍ DỤ THỰC HÀNH TỪNG BƯỚC",
      "subtitle": "MỤC 2 • ĐA THỨC, PHÂN THỨC VÀ HÀM CHỨA CĂN",
      "startTime": 60,
      "endTime": 170,
      "duration": 110,
      "mascotMode": "pointer",
      "mascotTip": "<b>Chú ý:</b> Với hàm phân thức bậc nhất luôn đơn điệu, Max/Min luôn rơi vào đúng 2 đầu mút!",
      "bodyHtml": "\n        <div style=\"display:flex; flex-direction:column; gap:8px;\">\n          <!-- VD1 -->\n          <div style=\"background:rgba(30,41,59,0.6); padding:8px 12px; border-radius:6px; border-left:3px solid #38bdf8;\">\n            <b style=\"color:#fef08a; font-size:clamp(13px, 1.6vh, 15px);\">Ví dụ 1: Đa thức $y = x^3 - 3x^2 + 2$ trên đoạn $[0; 3]$</b><br>\n            <div style=\"font-size:clamp(11.5px, 1.4vh, 13.5px); color:#e2e8f0; line-height:1.5; margin-top:2px;\">\n              • $y' = 3x^2 - 6x = 0 \\iff x = 2 \\in (0; 3)$ (nghiệm $x = 0$ loại vì trùng đầu mút).<br>\n              • Tính: $f(0) = 2, \\; f(2) = -2, \\; f(3) = 2$.<br>\n              • <b>Kết luận:</b> $\\mathbf{\\max_{[0; 3]} y = 2}$ (tại $x = 0, 3$), $\\mathbf{\\min_{[0; 3]} y = -2}$ (tại $x = 2$).\n            </div>\n          </div>\n\n          <!-- VD2 -->\n          <div style=\"background:rgba(30,41,59,0.6); padding:8px 12px; border-radius:6px; border-left:3px solid #f87171;\">\n            <b style=\"color:#f87171; font-size:clamp(13px, 1.6vh, 15px);\">Ví dụ 2: Phân thức $y = \\frac{x+1}{x-1}$ trên đoạn $[2; 4]$</b><br>\n            <div style=\"font-size:clamp(11.5px, 1.4vh, 13.5px); color:#e2e8f0; line-height:1.5; margin-top:2px;\">\n              • Đạo hàm $y' = \\frac{-2}{(x-1)^2} < 0, \\forall x \\in [2; 4] \\implies$ hàm số luôn nghịch biến.<br>\n              • Tính: $f(2) = \\frac{2+1}{2-1} = 3; \\quad f(4) = \\frac{4+1}{4-1} = \\frac{5}{3}$.<br>\n              • <b>Kết luận:</b> $\\mathbf{\\max_{[2; 4]} y = 3}$ (tại $x = 2$), $\\mathbf{\\min_{[2; 4]} y = \\frac{5}{3}}$ (tại $x = 4$).\n            </div>\n          </div>\n\n          <!-- VD3 -->\n          <div style=\"background:rgba(30,41,59,0.6); padding:8px 12px; border-radius:6px; border-left:3px solid #4ade80;\">\n            <b style=\"color:#4ade80; font-size:clamp(13px, 1.6vh, 15px);\">Ví dụ 3: Hàm chứa căn $y = x + \\sqrt{4 - x^2}$ trên đoạn $[-2; 2]$</b><br>\n            <div style=\"font-size:clamp(11.5px, 1.4vh, 13.5px); color:#e2e8f0; line-height:1.5; margin-top:2px;\">\n              • Đạo hàm $y' = 1 - \\frac{x}{\\sqrt{4-x^2}} = 0 \\iff \\sqrt{4-x^2} = x \\iff x = \\sqrt{2} \\in (-2; 2)$.<br>\n              • Tính: $f(-2) = -2, \\quad f(2) = 2, \\quad f(\\sqrt{2}) = \\sqrt{2} + \\sqrt{2} = 2\\sqrt{2}$.<br>\n              • <b>Kết luận:</b> $\\mathbf{\\max_{[-2; 2]} y = 2\\sqrt{2}}$ (tại $x = \\sqrt{2}$), $\\mathbf{\\min_{[-2; 2]} y = -2}$ (tại $x = -2$).\n            </div>\n          </div>\n        </div>\n      ",
      "narration": "Phần ba: Ba ví dụ thực hành. Ví dụ một: Hàm đa thức y bằng x mũ ba trừ ba x bình cộng hai trên đoạn không đến ba. Đạo hàm bằng không tại x bằng hai, nhận; và x bằng không, loại vì trùng mút. Tính f tại không bằng hai, f tại hai bằng trừ hai, f tại ba bằng hai. Vậy max bằng hai, min bằng trừ hai. Ví dụ hai: Hàm phân thức y bằng x cộng một chia x trừ một trên đoạn hai đến bốn. Đạo hàm luôn âm nên hàm nghịch biến. Tính f tại hai bằng ba, f tại bốn bằng năm phần ba. Vậy max bằng ba đạt tại x bằng hai, min bằng năm phần ba đạt tại x bằng bốn. Ví dụ ba: Hàm chứa căn y bằng x cộng căn của bốn trừ x bình trên đoạn trừ hai đến hai. Đạo hàm bằng không khi x bằng căn hai. So sánh các giá trị, ta có max bằng hai căn hai, min bằng trừ hai."
    },
    {
      "sceneIndex": 4,
      "title": "CẢNH BÁO BẪY THI TRẮC NGHIỆM",
      "subtitle": "MỤC 2 • TRÁNH LẤY THỪA NGHIỆM NGOÀI ĐOẠN",
      "startTime": 170,
      "endTime": 190,
      "duration": 20,
      "mascotMode": "magnifier",
      "mascotTip": "<b>Cú cảnh báo:</b> Luôn gạch bỏ ngay nghiệm $x_i$ nằm ngoài khoảng $(a; b)$ trước khi tính giá trị!",
      "bodyHtml": "\n        <div class=\"trap-warning-box\" style=\"padding:10px 14px; background:rgba(239,68,68,0.12); border-left:4px solid #ef4444; border-radius:6px; font-size:clamp(12.5px, 1.5vh, 14.5px); color:#fecdd3; line-height:1.55;\">\n          <span style=\"font-weight:bold; color:#ff6b6b;\">Cảnh báo bẫy trắc nghiệm:</span><br>\n          • Quên không loại nghiệm đạo hàm nằm ngoài đoạn $[a; b]$, dẫn đến tính thừa giá trị và chọn sai đáp án.<br>\n          • Đề bài hỏi tổng $M + m$ hoặc tích $M \\cdot m$, học sinh tính nhầm giữa hoành độ $x$ và tung độ $y$.\n        </div>\n      ",
      "narration": "Phần tư: Bẫy trắc nghiệm. Quên loại nghiệm đạo hàm nằm ngoài đoạn a b, dẫn đến tính thừa và chọn sai đáp án."
    },
    {
      "sceneIndex": 5,
      "title": "MẸO BẤM MÁY TÍNH THẦY CÚ (TABLE MENU 8)",
      "subtitle": "MỤC 2 • DÒ TÌM MAX / MIN TRONG 15 GIÂY",
      "startTime": 190,
      "endTime": 210,
      "duration": 20,
      "mascotMode": "cheer",
      "mascotTip": "<b>Công thức Step vàng:</b> Cài đặt $\\text{Step} = \\frac{b - a}{29}$ để dò quét 30 giá trị liên tục!",
      "bodyHtml": "\n        <div style=\"background:rgba(30,41,59,0.7); border:1.5px solid #4ade80; border-radius:8px; padding:12px 16px;\">\n          <div style=\"font-size:clamp(14px, 1.8vh, 16px); color:#4ade80; font-weight:bold; margin-bottom:6px;\">\n            📟 Quy Trình Bấm Máy Table Menu 8 Siêu Tốc:\n          </div>\n          <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); line-height:1.6; color:#e2e8f0;\">\n            1. Bấm <b>[MENU] [8]</b> trên máy tính Casio fx-580VN X / fx-880BTG.<br>\n            2. Nhập hàm số $f(x)$.<br>\n            3. Cài đặt phạm vi: <b>Start:</b> $a$ | <b>End:</b> $b$ | <b>Step:</b> $(b - a) / 29$.<br>\n            4. Dò cột $f(x)$: Giá trị to nhất hiển thị xấp xỉ chính là Max, bé nhất chính là Min!\n          </div>\n        </div>\n      ",
      "narration": "Phần năm: Mẹo Casio. Dùng chức năng Table Menu tám, nhập hàm số, Start a, End b, Step bằng b trừ a tất cả chia hai mươi chín để tìm nhanh đáp án."
    }
  ]
},

    bai2_muc3: {
  "lessonId": "bai2",
  "lessonTitle": "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
  "sectionId": "bai2_muc3",
  "sectionTitle": "Mục 3: Tìm GTLN, GTNN trên khoảng / nửa khoảng (dùng BBT)",
  "audioSrc": "./audio/bai2_muc3.mp3",
  "totalDuration": 205,
  "duration": 205,
  "audio_src": "./audio/bai2_muc3.mp3",
  "timestamp_src": "timestamps/bai2_muc3.json",
  "title": "Mục 3: Tìm GTLN, GTNN trên khoảng / nửa khoảng (Bắt buộc dùng BBT)",
  "owl_tip": "Khi tập khảo sát là khoảng (a; b) hoặc có vô cực, bắt buộc phải lập Bảng biến thiên và tính giới hạn lim tại các đầu mút!",
  "timeline": [
    {
      "time": 0,
      "id": "part1"
    },
    {
      "time": 25,
      "id": "part2"
    },
    {
      "time": 55,
      "id": "part3"
    },
    {
      "time": 165,
      "id": "part4"
    },
    {
      "time": 185,
      "id": "part5"
    }
  ],
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: Khái niệm cốt lõi & Bắt buộc dùng BBT",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: Phương pháp và Định lý Cực trị duy nhất",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: Ba ví dụ minh họa: Phân thức, Parabol & Vô cực",
      "scenes": [
        3
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: Cảnh báo bẫy giới hạn vô cực",
      "scenes": [
        4
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: Mẹo tư duy nhanh Thầy Cú & BĐT Cauchy",
      "scenes": [
        5
      ]
    }
  ],
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "PHƯƠNG PHÁP TÌM MAX / MIN TRÊN KHOẢNG",
      "subtitle": "MỤC 3 • TẠI SAO BẮT BUỘC PHẢI DÙNG BẢNG BIẾN THIÊN?",
      "startTime": 0,
      "endTime": 25,
      "duration": 25,
      "mascotMode": "pointer",
      "mascotTip": "<b>Lưu ý cốt lõi:</b> Trên khoảng mở hoặc khoảng vô cực, hàm số có thể không đạt Max hoặc Min!",
      "bodyHtml": "\n        <div style=\"font-size:clamp(15px, 2vh, 18px); color:#fef08a; font-weight:bold; margin-bottom:6px;\">\n          Khái niệm cốt lõi trên khoảng hoặc nửa khoảng:\n        </div>\n        <div style=\"font-size:clamp(13px, 1.6vh, 15px); line-height:1.6; color:#e2e8f0; margin-left:14px; background:rgba(30,41,59,0.5); padding:10px 14px; border-radius:8px; border-left:3px solid #fef08a;\">\n          Khác với đoạn đóng, trên một khoảng mở $(a; b)$ hoặc khoảng vô cực $(a; +\\infty)$, hàm số có thể không đạt giá trị lớn nhất hoặc không đạt giá trị nhỏ nhất. Do đó, quy tắc tính giá trị đầu mút không còn áp dụng được mà bắt buộc chúng ta phải khảo sát giới hạn $\\lim$ và lập bảng biến thiên đầy đủ.\n        </div>\n      ",
      "narration": "Chào các em. Bài hai Mục ba: Tìm giá trị lớn nhất và nhỏ nhất trên khoảng bằng bảng biến thiên. Phần một: Khái niệm cốt lõi. Trên khoảng mở hoặc khoảng vô cực, ta bắt buộc phải xét giới hạn lim và lập bảng biến thiên."
    },
    {
      "sceneIndex": 2,
      "title": "PHƯƠNG PHÁP VÀ ĐỊNH LÝ CỰC TRỊ DUY NHẤT",
      "subtitle": "MỤC 3 • CÔNG CỤ ĐẮC LỰC CHO BÀI TOÁN TỐI ƯU HÓA",
      "startTime": 25,
      "endTime": 55,
      "duration": 30,
      "mascotMode": "pointer",
      "mascotTip": "<b>Định lý then chốt:</b> Nếu trên khoảng chỉ có 1 cực trị duy nhất, Cực đại là Max toàn cục, Cực tiểu là Min toàn cục!",
      "bodyHtml": "\n        <div style=\"background:rgba(30,41,59,0.7); border:1.5px solid #fef08a; border-radius:8px; padding:12px 16px;\">\n          <div style=\"font-size:clamp(14px, 1.8vh, 16px); color:#fef08a; font-weight:bold; margin-bottom:6px;\">\n            ⭐ Quy Trình & Định Lý Cực Trị Duy Nhất:\n          </div>\n          <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); line-height:1.65; color:#e2e8f0;\">\n            • <b>Quy trình:</b> Tìm tập xác định, tính đạo hàm, tìm nghiệm, xét dấu đạo hàm, tính giới hạn và vẽ bảng biến thiên.<br>\n            • <b>Định lý:</b> Nếu trên khoảng đang xét, hàm số chỉ có <b>duy nhất một điểm cực trị</b>:<br>\n            $\\quad$ Cực đại đó chính là <b>giá trị lớn nhất toàn cục</b>: $\\max f(x) = f(x_0)$.<br>\n            $\\quad$ Cực tiểu đó chính là <b>giá trị nhỏ nhất toàn cục</b>: $\\min f(x) = f(x_0)$.\n          </div>\n        </div>\n      ",
      "narration": "Phần hai: Phương pháp và định lý cực trị duy nhất. Nếu trên khoảng chỉ có một cực trị duy nhất, thì cực đại đó chính là giá trị lớn nhất, hoặc cực tiểu đó chính là giá trị nhỏ nhất toàn cục."
    },
    {
      "sceneIndex": 3,
      "title": "BA VÍ DỤ MINH HỌA CHI TIẾT",
      "subtitle": "MỤC 3 • BẢNG BIẾN THIÊN SVG CHUẨN SGK & HÀM TRÊN VÔ CỰC",
      "startTime": 55,
      "endTime": 165,
      "duration": 110,
      "mascotMode": "pointer",
      "mascotTip": "<b>Nhìn bảng biến thiên:</b> Đáy thấp nhất là 4 tại x = 2 $\\implies \\text{Min} = 4$!",
      "bodyHtml": "\n        <div style=\"display:flex; flex-direction:column; gap:8px;\">\n          <!-- VD1 -->\n          <div style=\"background:rgba(30,41,59,0.6); padding:8px 12px; border-radius:6px; border-left:3px solid #38bdf8;\">\n            <b style=\"color:#fef08a; font-size:clamp(13px, 1.6vh, 15px);\">Ví dụ 1: Tìm GTNN của $y = x + \\frac{4}{x}$ trên $(0; +\\infty)$</b><br>\n            <div style=\"font-size:clamp(11.5px, 1.4vh, 13.5px); color:#e2e8f0; line-height:1.5; margin-top:2px;\">\n              • Đạo hàm $y' = 1 - \\frac{4}{x^2} = 0 \\iff x = 2$ (do $x > 0$).<br>\n              • BBT: $x$ đi từ $0$ đến $2$, đồ thị đi xuống từ $+\\infty$ về $4$; $x > 2$, đồ thị đi lên $+\\infty$.<br>\n              • <b>Kết luận:</b> $\\mathbf{\\min_{(0; +\\infty)} y = 4}$ tại $x = 2$. Hàm số không có GTLN.\n            </div>\n            <!-- SVG BBT -->\n            <div style=\"width:100%; max-width:440px; margin:4px auto;\">\n              <svg viewBox=\"0 0 460 135\" style=\"width:100%; height:auto; background:rgba(15,23,42,0.85); border-radius:6px; border:1px solid #334155;\">\n                <line x1=\"10\" y1=\"10\" x2=\"450\" y2=\"10\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n                <line x1=\"10\" y1=\"40\" x2=\"450\" y2=\"40\" stroke=\"#64748b\" stroke-width=\"1\"/>\n                <line x1=\"10\" y1=\"68\" x2=\"450\" y2=\"68\" stroke=\"#64748b\" stroke-width=\"1\"/>\n                <line x1=\"10\" y1=\"125\" x2=\"450\" y2=\"125\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n                <line x1=\"70\" y1=\"10\" x2=\"70\" y2=\"125\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n                <text x=\"40\" y=\"28\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" font-style=\"italic\">x</text>\n                <text x=\"40\" y=\"56\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" font-style=\"italic\">f '(x)</text>\n                <text x=\"40\" y=\"98\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" font-style=\"italic\">f (x)</text>\n                <text x=\"110\" y=\"28\" fill=\"#fef08a\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">0</text>\n                <text x=\"255\" y=\"28\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">2</text>\n                <text x=\"415\" y=\"28\" fill=\"#cbd5e1\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">+∞</text>\n                <line x1=\"108\" y1=\"40\" x2=\"108\" y2=\"125\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/>\n                <line x1=\"112\" y1=\"40\" x2=\"112\" y2=\"125\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/>\n                <text x=\"180\" y=\"56\" fill=\"#f87171\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">–</text>\n                <text x=\"255\" y=\"56\" fill=\"#fef08a\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">0</text>\n                <text x=\"335\" y=\"56\" fill=\"#4ade80\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n                <text x=\"130\" y=\"84\" fill=\"#cbd5e1\" font-size=\"11\" font-weight=\"bold\">+∞</text>\n                <line x1=\"150\" y1=\"88\" x2=\"235\" y2=\"112\" stroke=\"#f87171\" stroke-width=\"1.8\"/>\n                <polygon points=\"235,112 226,107 231,116\" fill=\"#f87171\"/>\n                <text x=\"255\" y=\"120\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">4</text>\n                <line x1=\"275\" y1=\"112\" x2=\"380\" y2=\"88\" stroke=\"#4ade80\" stroke-width=\"1.8\"/>\n                <polygon points=\"380,88 371,93 376,84\" fill=\"#4ade80\"/>\n                <text x=\"405\" y=\"84\" fill=\"#cbd5e1\" font-size=\"11\" font-weight=\"bold\">+∞</text>\n              </svg>\n            </div>\n          </div>\n\n          <!-- VD2 -->\n          <div style=\"background:rgba(30,41,59,0.6); padding:8px 12px; border-radius:6px; border-left:3px solid #f87171;\">\n            <b style=\"color:#f87171; font-size:clamp(13px, 1.6vh, 15px);\">Ví dụ 2: Parabol $y = -x^2 + 2x + 3$ trên $mathbb{R}$</b><br>\n            <div style=\"font-size:clamp(11.5px, 1.4vh, 13.5px); color:#e2e8f0; line-height:1.5; margin-top:2px;\">\n              • Đạo hàm $y' = -2x + 2 = 0 \\iff x = 1$.<br>\n              • Đồ thị parabol đi lên đỉnh $I(1; 4)$ rồi đi xuống $-\\infty$.<br>\n              • <b>Kết luận:</b> $\\mathbf{\\max_{\\mathbb{R}} y = 4}$ tại $x = 1$. Hàm số không có GTNN vì $\\lim_{x \\to \\pm\\infty} y = -\\infty$.\n            </div>\n          </div>\n\n          <!-- VD3 -->\n          <div style=\"background:rgba(30,41,59,0.6); padding:8px 12px; border-radius:6px; border-left:3px solid #4ade80;\">\n            <b style=\"color:#4ade80; font-size:clamp(13px, 1.6vh, 15px);\">Ví dụ 3: Phân thức $y = \\frac{x^2+1}{x}$ trên khoảng $(-\\infty; 0)$</b><br>\n            <div style=\"font-size:clamp(11.5px, 1.4vh, 13.5px); color:#e2e8f0; line-height:1.5; margin-top:2px;\">\n              • Đạo hàm $y' = 1 - \\frac{1}{x^2} = \\frac{x^2-1}{x^2} = 0 \\iff x = -1$ (do $x < 0$).<br>\n              • Bảng biến thiên đi lên cực đại $-2$ (tại $x = -1$) rồi đi xuống $-\\infty$.<br>\n              • <b>Kết luận:</b> $\\mathbf{\\max_{(-\\infty; 0)} y = -2}$ tại $x = -1$. Hàm số không có GTNN.\n            </div>\n          </div>\n        </div>\n      ",
      "narration": "Phần ba: Ba ví dụ minh họa. Ví dụ một: Tìm giá trị nhỏ nhất của y bằng x cộng bốn chia x trên khoảng không đến dương vô cực. Đạo hàm bằng không khi x bằng hai. Bảng biến thiên đi xuống tới bốn rồi đi lên. Vậy giá trị nhỏ nhất bằng bốn tại x bằng hai. Hàm số không có giá trị lớn nhất. Ví dụ hai: Xét parabol y bằng trừ x bình cộng hai x cộng ba trên R. Đạo hàm bằng không tại x bằng một. Đồ thị đi lên bốn rồi đi xuống. Vậy giá trị lớn nhất bằng bốn tại x bằng một, hàm số không có min. Ví dụ ba: Xét hàm y bằng x bình cộng một tất cả chia x trên khoảng từ trừ vô cực đến không. Đạo hàm bằng không tại x bằng trừ một. Bảng biến thiên đi lên trừ hai rồi đi xuống. Vậy max bằng trừ hai đạt tại x bằng trừ một, không có min."
    },
    {
      "sceneIndex": 4,
      "title": "CẢNH BÁO BẪY ĐỀ THI KINH ĐIỂN",
      "subtitle": "MỤC 3 • VÔ CỰC KHÔNG PHẢI LÀ MỘT SỐ THỰC",
      "startTime": 165,
      "endTime": 185,
      "duration": 20,
      "mascotMode": "magnifier",
      "mascotTip": "<b>Cú cảnh báo bẫy:</b> Dương vô cực là xu hướng tiến ra xa, KHÔNG PHẢI là một số thực cụ thể!",
      "bodyHtml": "\n        <div class=\"trap-warning-box\" style=\"padding:10px 14px; background:rgba(239,68,68,0.12); border-left:4px solid #ef4444; border-radius:6px; font-size:clamp(12.5px, 1.5vh, 14.5px); color:#fecdd3; line-height:1.55;\">\n          <span style=\"font-weight:bold; color:#ff6b6b;\">Bẫy đề thi:</span> Thấy giới hạn ra vô cực kết luận luôn Max / Min là vô cực.<br>\n          Đây là sai lầm vì vô cực không phải là một số thực cụ thể. Khi đó kết luận chuẩn mực là: Hàm số <b>không có GTLN</b> (hoặc <b>không có GTNN</b>).\n        </div>\n      ",
      "narration": "Phần tư: Bẫy đề thi. Thấy giới hạn ra vô cực kết luận luôn max min là vô cực. Đây là sai lầm vì vô cực không phải là một số thực."
    },
    {
      "sceneIndex": 5,
      "title": "MẸO TƯ DUY NHANH THẦY CÚ (BĐT CAUCHY)",
      "subtitle": "MỤC 3 • BÍ KÍP GIẢI NHANH 1 GIÂY KHÔNG CẦN ĐẠO HÀM",
      "startTime": 185,
      "endTime": 205,
      "duration": 20,
      "mascotMode": "cheer",
      "mascotTip": "<b>Cú chỉ chiêu:</b> Gặp dạng $x + \\frac{k}{x}$ trên miền dương, dùng ngay Cauchy: $\\min = 2\\sqrt{k}$!",
      "bodyHtml": "\n        <div style=\"background:rgba(30,41,59,0.7); border:1.5px solid #38bdf8; border-radius:8px; padding:12px 16px;\">\n          <div style=\"font-size:clamp(14px, 1.8vh, 16px); color:#fef08a; font-weight:bold; margin-bottom:6px;\">\n            🦉 Bí Kíp Bất Đẳng Thức Cauchy 1 Giây:\n          </div>\n          <div style=\"font-size:clamp(12.5px, 1.5vh, 14.5px); line-height:1.6; color:#e2e8f0;\">\n            • Gặp bài toán $x + \\frac{\\text{hằng số}}{x}$ trên miền dương, dùng ngay Cauchy:<br>\n            $$x + \\frac{4}{x} \\ge 2\\sqrt{x \\cdot \\frac{4}{x}} = 2\\sqrt{4} = 4$$\n            • Dấu bằng xảy ra $\\iff x = \\frac{4}{x} \\iff x = 2$.<br>\n            $\\implies$ Xong ngay đáp số $\\min = 4$ chỉ trong 1 giây!\n          </div>\n        </div>\n      ",
      "narration": "Phần năm: Mẹo tư duy. Gặp bài x cộng hằng số chia x trên miền dương, dùng ngay bất đẳng thức Cauchy để nhẩm ra đáp án trong một giây!"
    }
  ]
},

    bai3_muc1: {
      lessonId: "bai3",
      lessonTitle: "Bài 3: Đường tiệm cận của đồ thị hàm số",
      sectionId: "bai3_muc1",
      sectionTitle: "Mục 1: Đường tiệm cận ngang (lim tại ±∞)",
      audioSrc: "./audio/bai3_muc1.mp3",
      totalDuration: 285.0,
      audio_src: "./audio/bai3_muc1.mp3",
      timestamp_src: "timestamps/bai3_muc1.json",
      title: "Mục 1: Đường tiệm cận ngang (Định nghĩa & Kỹ năng tính lim tại vô cực)",
      owl_tip: "Tiệm cận ngang là đường thẳng nằm ngang y = y0 khi x dần tới +∞ hoặc -∞. Một đồ thị có tối đa 2 tiệm cận ngang!",
      parts: [
        { partNumber: 1, partTitle: "Phần 1: Định nghĩa tiệm cận ngang", scenes: [1] },
        { partNumber: 2, partTitle: "Phần 2: Phương pháp tìm TCN nhanh", scenes: [2] },
        { partNumber: 3, partTitle: "Phần 3: Các ví dụ hàm căn thức có 2 TCN", scenes: [3] },
        { partNumber: 4, partTitle: "Phần 4: Mascot Cú soi bẫy tập xác định chặn", scenes: [4] }
      ],
      scenes: [
        {
          sceneIndex: 1,
          title: "BÀI 3: ĐƯỜNG TIỆM CẬN CỦA ĐỒ THỊ HÀM SỐ",
          subtitle: "MỤC 1 • ĐỊNH NGHĨA TIỆM CẬN NGANG (TCN)",
          startTime: 0.0,
          endTime: 70.0,
          duration: 70.0,
          mascotMode: "pointer",
          mascotTip: "<b>Cú nhắc:</b> Tiệm cận ngang có phương trình dạng $y = y_0$, tuyệt đối không nhầm sang $x = x_0$!",
          bodyHtml: `
            <div style="font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:8px;">
              Định nghĩa Đường tiệm cận ngang:
            </div>
            <div style="font-size:22px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              Đường thẳng $y = y_0$ được gọi là <b>đường tiệm cận ngang</b> (hay tiệm cận ngang) của đồ thị hàm số $y = f(x)$ nếu thỏa mãn ít nhất một trong các điều kiện sau:<br>
              $$\\lim_{x \\to +\\infty} f(x) = y_0 \\quad \\text{hoặc} \\quad \\lim_{x \\to -\\infty} f(x) = y_0$$
            </div>
            <div style="font-size:21px; line-height:1.6; color:#38bdf8; margin-top:12px;">
              • <b>Ý nghĩa hình học:</b> Khi điểm $M(x; y)$ trên đồ thị di chuyển ra xa vô tận về bên trái hoặc bên phải, khoảng cách từ $M$ đến đường thẳng $y = y_0$ tiến dần về $0$.
            </div>
          `
        },
        {
          sceneIndex: 2,
          title: "QUY TẮC NHẬN DIỆN NHANH TIỆM CẬN NGANG",
          subtitle: "MỤC 1 • ÁP DỤNG CHO HÀM PHÂN THỨC HỮU TỶ",
          startTime: 70.0,
          endTime: 140.0,
          duration: 70.0,
          mascotMode: "pointer",
          mascotTip: "<b>Quy tắc so bậc:</b> Bậc tử < Bậc mẫu $\\implies y = 0$. Bậc tử = Bậc mẫu $\\implies y = \\frac{a}{b}$. Bậc tử > Bậc mẫu $\\implies$ Không có TCN!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:8px;">
              Xét hàm phân thức $f(x) = \\frac{P(x)}{Q(x)}$ với $P(x), Q(x)$ là các đa thức:
            </div>
            <div style="font-size:21px; line-height:1.7; color:#e2e8f0; margin-left:14px;">
              • <b>Trường hợp 1 (Bậc tử < Bậc mẫu):</b> Đồ thị luôn có đúng <b>1 TCN là trục hoành $y = 0$</b>.<br>
              $\\quad$ Ví dụ: $y = \\frac{2x - 1}{x^2 + 3} \\implies \\lim_{x \\to \\pm\\infty} y = 0 \\implies$ TCN: $y = 0$.<br>
              • <b>Trường hợp 2 (Bậc tử = Bậc mẫu):</b> Đồ thị có <b>1 TCN $y = \\frac{a}{c}$</b> (tỉ số 2 hệ số bậc cao nhất).<br>
              $\\quad$ Ví dụ: $y = \\frac{3x - 5}{2x + 1} \\implies$ TCN: $y = \\frac{3}{2}$.<br>
              • <b>Trường hợp 3 (Bậc tử > Bậc mẫu):</b> Đồ thị <b>không có tiệm cận ngang</b>.
            </div>
          `
        },
        {
          sceneIndex: 3,
          title: "VÍ DỤ ĐẶC BIỆT: HÀM CĂN THỨC CÓ 2 TIỆM CẬN NGANG",
          subtitle: "MỤC 1 • CỰC KỲ PHỔ BIẾN TRONG ĐỀ THI BỘ GD&ĐT",
          startTime: 140.0,
          endTime: 215.0,
          duration: 75.0,
          mascotMode: "magnifier",
          mascotTip: "<b>Lưu ý dấu căn:</b> Khi $x \\to -\\infty$ thì $\\sqrt{x^2} = |x| = -x$, tạo ra dấu trừ phía trước!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:6px;">
              <b>Đề bài:</b> Tìm các đường tiệm cận ngang của đồ thị hàm số $y = \\frac{\\sqrt{4x^2 + 1}}{x - 3}$.
            </div>
            <div style="font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              • TXĐ: $D = \\mathbb{R} \\setminus \\{3\\}$. Cả $-\\infty$ và $+\\infty$ đều thuộc tập xác định.<br>
              • Khi $x \\to +\\infty$:<br>
              $$\\lim_{x \\to +\\infty} \\frac{\\sqrt{4x^2+1}}{x-3} = \\lim_{x \\to +\\infty} \\frac{x\\sqrt{4 + \\frac{1}{x^2}}}{x(1 - \\frac{3}{x})} = \\frac{\\sqrt{4}}{1} = 2 \\implies y = 2.$$<br>
              • Khi $x \\to -\\infty$:<br>
              $$\\lim_{x \\to -\\infty} \\frac{\\sqrt{4x^2+1}}{x-3} = \\lim_{x \\to -\\infty} \\frac{-x\\sqrt{4 + \\frac{1}{x^2}}}{x(1 - \\frac{3}{x})} = \\frac{-\\sqrt{4}}{1} = -2 \\implies y = -2.$$<br>
              • <b>Kết luận:</b> Đồ thị có <b>hai tiệm cận ngang</b> là $y = 2$ và $y = -2$.
            </div>
          `
        },
        {
          sceneIndex: 4,
          title: "CÚ THÔNG THÁI CẢNH BÁO BẪY TẬP XÁC ĐỊNH CHẶN",
          subtitle: "MỤC 1 • ĐIỀU KIỆN CẦN ĐỂ TÍNH ĐƯỢC GIỚI HẠN VÔ CỰC",
          startTime: 215.0,
          endTime: 285.0,
          duration: 70.0,
          mascotMode: "cheer",
          mascotTip: "<b>Nguyên tắc vàng:</b> Tập xác định phải chứa $+\\infty$ hoặc $-\\infty$ thì mới tồn tại giới hạn vô cực để xét TCN!",
          bodyHtml: `
            <div class="trap-warning-box" style="margin-top:10px; padding:12px 18px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:22px !important; line-height:1.5; font-weight:600; color:#fecdd3;">
              <span class="trap-title" style="font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-right:4px;">Bẫy đề thi:</span> Tìm số đường tiệm cận ngang của $y = \\frac{\\sqrt{1 - x^2}}{x + 2}$.<br>
              • Rất nhiều học sinh bấm máy hoặc chia bậc ra $y = 0$ $\\implies$ <b>SAI HOÀN TOÀN</b>!<br>
              • Đúng: Điều kiện $1 - x^2 \\ge 0 \\iff -1 \\le x \\le 1 \\implies D = [-1; 1]$.<br>
              • Tập xác định không chứa $\\pm\\infty$, ta không thể tính $\\lim_{x \\to \\pm\\infty}$. Do đó hàm số <b>KHÔNG CÓ TIỆM CẬN NGANG</b>!
            </div>
          `
        }
      ]
    },

    bai3_muc2: {
      lessonId: "bai3",
      lessonTitle: "Bài 3: Đường tiệm cận của đồ thị hàm số",
      sectionId: "bai3_muc2",
      sectionTitle: "Mục 2: Đường tiệm cận đứng (lim vô cực khi x -> x0±)",
      audioSrc: "./audio/bai3_muc2.mp3",
      totalDuration: 280.0,
      audio_src: "./audio/bai3_muc2.mp3",
      timestamp_src: "timestamps/bai3_muc2.json",
      title: "Mục 2: Đường tiệm cận đứng (Định nghĩa & Kỹ thuật triệt tiêu nghiệm mẫu)",
      owl_tip: "Tiệm cận đứng có dạng x = x0 (thẳng đứng). Nghiệm của mẫu số KHÔNG bị triệt tiêu bởi nghiệm tử số mới sinh ra TCĐ!",
      parts: [
        { partNumber: 1, partTitle: "Phần 1: Định nghĩa tiệm cận đứng", scenes: [1] },
        { partNumber: 2, partTitle: "Phần 2: Phương pháp tìm TCĐ qua 2 bước", scenes: [2] },
        { partNumber: 3, partTitle: "Phần 3: Bẫy triệt tiêu nghiệm tử và mẫu", scenes: [3] },
        { partNumber: 4, partTitle: "Phần 4: Mascot Cú soi bẫy căn thức tập xác định", scenes: [4] }
      ],
      scenes: [
        {
          sceneIndex: 1,
          title: "ĐỊNH NGHĨA ĐƯỜNG TIỆM CẬN ĐỨNG (TCĐ)",
          subtitle: "MỤC 2 • KHI GIÁ TRỊ f(x) TIẾN TỚI VÔ CỰC",
          startTime: 0.0,
          endTime: 65.0,
          duration: 65.0,
          mascotMode: "pointer",
          mascotTip: "<b>Cú nhắc:</b> Tiệm cận đứng có phương trình dạng $x = x_0$, đường thẳng song song hoặc trùng với trục tung $Oy$!",
          bodyHtml: `
            <div style="font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:8px;">
              Định nghĩa Đường tiệm cận đứng:
            </div>
            <div style="font-size:22px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              Đường thẳng $x = x_0$ được gọi là <b>đường tiệm cận đứng</b> của đồ thị hàm số $y = f(x)$ nếu thỏa mãn ít nhất một trong bốn điều kiện sau:<br>
              • $\\lim_{x \\to x_0^+} f(x) = +\\infty$ $\\quad$ hoặc $\\quad$ $\\lim_{x \\to x_0^+} f(x) = -\\infty$<br>
              • $\\lim_{x \\to x_0^-} f(x) = +\\infty$ $\\quad$ hoặc $\\quad$ $\\lim_{x \\to x_0^-} f(x) = -\\infty$
            </div>
          `
        },
        {
          sceneIndex: 2,
          title: "QUY TRÌNH 2 BƯỚC TÌM TIỆM CẬN ĐỨNG",
          subtitle: "MỤC 2 • LOẠI NGHIỆM KÉP VÀ NGHIỆM TRIỆT TIÊU",
          startTime: 65.0,
          endTime: 135.0,
          duration: 70.0,
          mascotMode: "pointer",
          mascotTip: "<b>Quy tắc then chốt:</b> Điểm $x_0$ là TCĐ khi và chỉ khi $x_0$ là nghiệm của mẫu nhưng KHÔNG LÀ nghiệm của tử (hoặc bội ở mẫu > bội ở tử)!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:8px;">
              Xét hàm phân thức $y = \\frac{P(x)}{Q(x)}$:
            </div>
            <div style="font-size:21px; line-height:1.7; color:#e2e8f0; margin-left:14px;">
              <b>Bước 1:</b> Tìm tập xác định của hàm số. Giải phương trình mẫu số $Q(x) = 0$ tìm các ứng viên $x_0$.<br>
              <b>Bước 2:</b> Thay $x_0$ vào tử số $P(x)$:<br>
              • Nếu $P(x_0) \\ne 0$: Chắc chắn $x = x_0$ là <b>đường tiệm cận đứng</b>.<br>
              • Nếu $P(x_0) = 0$: Phân tích nhân tử rút gọn, nếu mẫu số vẫn còn nhân tử $(x - x_0)$ thì $x = x_0$ vẫn là tiệm cận đứng.
            </div>
          `
        },
        {
          sceneIndex: 3,
          title: "VÍ DỤ MINH HỌA: TRIỆT TIÊU NGHIỆM VÀ ĐẾM TCĐ",
          subtitle: "MỤC 2 • BÀI TOÁN KINH ĐIỂN MỨC ĐỘ THÔNG HIỂU",
          startTime: 135.0,
          endTime: 210.0,
          duration: 75.0,
          mascotMode: "magnifier",
          mascotTip: "<b>Cẩn thận:</b> Rất nhiều học sinh vội vàng thấy mẫu có 2 nghiệm kết luận ngay có 2 TCĐ mà quên rút gọn!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:6px;">
              <b>Đề bài:</b> Tìm số đường tiệm cận đứng của đồ thị hàm số $y = \\frac{x^2 - 1}{x^2 - 3x + 2}$.
            </div>
            <div style="font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              • Giải mẫu số: $x^2 - 3x + 2 = 0 \\iff x = 1$ hoặc $x = 2$.<br>
              • Phân tích cả tử và mẫu:<br>
              $$y = \\frac{(x - 1)(x + 1)}{(x - 1)(x - 2)} = \\frac{x + 1}{x - 2} \\quad (\\text{với } x \\ne 1).$$<br>
              • Tại $x = 1$: $\\lim_{x \\to 1} y = \\frac{1 + 1}{1 - 2} = -2$ (giới hạn hữu hạn $\\implies x = 1$ KHÔNG PHẢI TCĐ).<br>
              • Tại $x = 2$: $\\lim_{x \\to 2^\\pm} y = \\pm\\infty$ $\\implies x = 2$ là <b>đường tiệm cận đứng duy nhất</b>!
            </div>
          `
        },
        {
          sceneIndex: 4,
          title: "CÚ THÔNG THÁI CẢNH BÁO BẪY ĐIỀU KIỆN CĂN THỨC",
          subtitle: "MỤC 2 • NGHIỆM MẪU BỊ LOẠI DO ĐIỀU KIỆN TỬ SỐ",
          startTime: 210.0,
          endTime: 280.0,
          duration: 70.0,
          mascotMode: "cheer",
          mascotTip: "<b>Cú cảnh báo:</b> Nghiệm của mẫu số phải thuộc tập xác định của các biểu thức căn ở tử thì mới được xét giới hạn!",
          bodyHtml: `
            <div class="trap-warning-box" style="margin-top:10px; padding:12px 18px; background:rgba(239,68,68,0.15); border-left:5px solid #ef4444; border-radius:8px; font-size:22px !important; line-height:1.5; font-weight:600; color:#fecdd3;">
              <span class="trap-title" style="font-size:24px !important; font-weight:700; color:#ff6b6b; display:inline-block; margin-right:4px;">Bẫy đề thi:</span> Tìm số đường tiệm cận đứng của $y = \\frac{\\sqrt{x - 2}}{x^2 - 1}$.<br>
              • Mẫu số có 2 nghiệm: $x = 1$ và $x = -1$.<br>
              • Điều kiện tử số: $x - 2 \\ge 0 \\iff x \\ge 2 \\implies D = [2; +\\infty)$.<br>
              • Cả hai số $x = 1$ và $x = -1$ đều <b>không thuộc tập xác định</b> $D$, không thể tiến tới từ lân cận.<br>
              • <b>Kết luận:</b> Đồ thị hàm số <b>KHÔNG CÓ tiệm cận đứng nào</b>!
            </div>
          `
        }
      ]
    },

    bai3_muc3: {
      lessonId: "bai3",
      lessonTitle: "Bài 3: Đường tiệm cận của đồ thị hàm số",
      sectionId: "bai3_muc3",
      sectionTitle: "Mục 3: Đường tiệm cận xiên (lim [y - (ax+b)] = 0)",
      audioSrc: "./audio/bai3_muc3.mp3",
      totalDuration: 290.0,
      audio_src: "./audio/bai3_muc3.mp3",
      timestamp_src: "timestamps/bai3_muc3.json",
      title: "Mục 3: Đường tiệm cận xiên (Chuẩn kiến thức GDPT 2018 - Hàm phân thức bậc 2/1)",
      owl_tip: "Tiệm cận xiên y = ax + b (a ≠ 0) xuất hiện khi bậc tử lớn hơn bậc mẫu đúng 1 bậc! Dùng phép chia đa thức để tìm nhanh.",
      parts: [
        { partNumber: 1, partTitle: "Phần 1: Định nghĩa tiệm cận xiên (TCX)", scenes: [1] },
        { partNumber: 2, partTitle: "Phần 2: Phương pháp chia đa thức tìm TCX", scenes: [2] },
        { partNumber: 3, partTitle: "Phần 3: Công thức tổng quát tính a và b", scenes: [3] },
        { partNumber: 4, partTitle: "Phần 4: Mascot Cú soi bẫy nhầm lẫn giữa TCX và TCN", scenes: [4] }
      ],
      scenes: [
        {
          sceneIndex: 1,
          title: "ĐỊNH NGHĨA ĐƯỜNG TIỆM CẬN XIÊN (TCX)",
          subtitle: "MỤC 3 • KIẾN THỨC MỚI TRỌNG TÂM SGK 2018",
          startTime: 0.0,
          endTime: 70.0,
          duration: 70.0,
          mascotMode: "pointer",
          mascotTip: "<b>Cú nhắc:</b> Tiệm cận xiên có phương trình $y = ax + b$ với $a \\ne 0$. Nếu $a = 0$ thì nó trở thành tiệm cận ngang!",
          bodyHtml: `
            <div style="font-size:24px; color:#fef08a; font-weight:bold; margin-bottom:8px;">
              Định nghĩa Đường tiệm cận xiên:
            </div>
            <div style="font-size:22px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              Đường thẳng $y = ax + b$ ($a \\ne 0$) được gọi là <b>đường tiệm cận xiên</b> của đồ thị hàm số $y = f(x)$ nếu:<br>
              $$\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0 \\quad \\text{hoặc} \\quad \\lim_{x \\to -\\infty} [f(x) - (ax + b)] = 0.$$
            </div>
            <div style="font-size:21px; line-height:1.6; color:#38bdf8; margin-top:12px;">
              • Dấu hiệu thường gặp: Đồ thị hàm phân thức có bậc tử lớn hơn bậc mẫu đúng $1$ đơn vị luôn có tiệm cận xiên.
            </div>
          `
        },
        {
          sceneIndex: 2,
          title: "MẸO CHIA ĐA THỨC TÌM TIỆM CẬN XIÊN TRONG 5 GIÂY",
          subtitle: "MỤC 3 • HÀM PHÂN THỨC BẬC HAI TRÊN BẬC NHẤT",
          startTime: 70.0,
          endTime: 145.0,
          duration: 75.0,
          mascotMode: "pointer",
          mascotTip: "<b>Kỹ thuật:</b> Thực hiện phép chia đa thức: $\\frac{P(x)}{Q(x)} = (ax + b) + \\frac{R}{Q(x)}$. Khi $x \\to \\pm\\infty$, phần dư tiến về 0, thương chính là TCX!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:6px;">
              <b>Đề bài:</b> Tìm đường tiệm cận xiên của hàm số $y = \\frac{2x^2 - 3x + 4}{x - 1}$.
            </div>
            <div style="font-size:21px; line-height:1.65; color:#e2e8f0; margin-left:14px;">
              • Thực hiện phép chia đa thức tử cho mẫu:<br>
              $$2x^2 - 3x + 4 = (2x - 1)(x - 1) + 3 \\implies y = 2x - 1 + \\frac{3}{x - 1}.$$<br>
              • Xét hiệu: $\\lim_{x \\to \\pm\\infty} [y - (2x - 1)] = \\lim_{x \\to \\pm\\infty} \\frac{3}{x - 1} = 0$.<br>
              • <b>Kết luận:</b> Đường thẳng $y = 2x - 1$ là <b>đường tiệm cận xiên</b> của đồ thị hàm số.
            </div>
          `
        },
        {
          sceneIndex: 3,
          title: "CÔNG THỨC TỔNG QUÁT TÌM HỆ SỐ a VÀ b",
          subtitle: "MỤC 3 • DÀNH CHO CÁC HÀM CĂN THỨC VÀ PHỨC TẠP",
          startTime: 145.0,
          endTime: 215.0,
          duration: 70.0,
          mascotMode: "magnifier",
          mascotTip: "<b>Công thức tìm a, b:</b> $a = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x}$ và $b = \\lim_{x \\to \\pm\\infty} [f(x) - ax]$!",
          bodyHtml: `
            <div style="font-size:22px; color:#fef08a; margin-bottom:8px;">
              Công thức giới hạn xác định tiệm cận xiên $y = ax + b$:
            </div>
            <div style="font-size:21px; line-height:1.7; color:#e2e8f0; margin-left:14px;">
              $$a = \\lim_{x \\to +\\infty} \\frac{f(x)}{x} \\quad (a \\ne 0)$$
              $$b = \\lim_{x \\to +\\infty} [f(x) - ax]$$
              (Tương tự khi $x \\to -\\infty$ có thể cho một đường tiệm cận xiên khác).<br>
              • Ứng dụng: Dùng khi hàm số chứa căn bậc hai, ví dụ $y = \\sqrt{x^2 - 4x + 5} = \\sqrt{(x-2)^2 + 1} \\implies$ TCX: $y = x - 2$ khi $x \\to +\\infty$ và $y = -x + 2$ khi $x \\to -\\infty$.
            </div>
          `
        },
        {
          sceneIndex: 4,
          title: "TỔNG KẾT BÀI 3: PHÂN BIỆT 3 ĐƯỜNG TIỆM CẬN",
          subtitle: "MỤC 3 • BẢNG SO SÁNH TOÀN DIỆN CỦA THẦY CÚ",
          startTime: 215.0,
          endTime: 290.0,
          duration: 75.0,
          mascotMode: "cheer",
          mascotTip: "<b>Cú chốt:</b> Nếu đồ thị đã có Tiệm cận ngang ở một phía thì ở phía đó KHÔNG CÓ tiệm cận xiên!",
          bodyHtml: `
            <table class="bbt-table" style="width:100%; max-width:96%; margin:8px auto; border-collapse:collapse; background:rgba(15,23,42,0.85); border-top:2.5px solid #cbd5e1; border-bottom:2.5px solid #cbd5e1;">
              <tr style="border-bottom:1.5px solid #64748b; background:rgba(30,41,59,0.7);">
                <th style="padding:8px 12px; color:#fef08a; font-size:21px;">Loại tiệm cận</th>
                <th style="padding:8px 12px; color:#38bdf8; font-size:21px;">Phương trình</th>
                <th style="padding:8px 12px; color:#4ade80; font-size:21px;">Điều kiện giới hạn</th>
              </tr>
              <tr style="border-bottom:1px solid #334155;">
                <td style="padding:8px 12px; color:#f8fafc; font-weight:bold; font-size:20px;">Tiệm cận ngang (TCN)</td>
                <td style="padding:8px 12px; color:#cbd5e1; font-size:20px;">$y = y_0$</td>
                <td style="padding:8px 12px; color:#cbd5e1; font-size:20px;">$\\lim_{x \\to \\pm\\infty} f(x) = y_0$</td>
              </tr>
              <tr style="border-bottom:1px solid #334155;">
                <td style="padding:8px 12px; color:#f8fafc; font-weight:bold; font-size:20px;">Tiệm cận đứng (TCĐ)</td>
                <td style="padding:8px 12px; color:#cbd5e1; font-size:20px;">$x = x_0$</td>
                <td style="padding:8px 12px; color:#cbd5e1; font-size:20px;">$\\lim_{x \\to x_0^\\pm} f(x) = \\pm\\infty$</td>
              </tr>
              <tr>
                <td style="padding:8px 12px; color:#f8fafc; font-weight:bold; font-size:20px;">Tiệm cận xiên (TCX)</td>
                <td style="padding:8px 12px; color:#cbd5e1; font-size:20px;">$y = ax + b$ ($a \\ne 0$)</td>
                <td style="padding:8px 12px; color:#cbd5e1; font-size:20px;">$\\lim_{x \\to \\pm\\infty} [f(x) - (ax+b)] = 0$</td>
              </tr>
            </table>
          `
        }
      ]
    },

    // =========================================================================
    // BÀI 4: KHẢO SÁT SỰ BIẾN THIÊN VÀ VẼ ĐỒ THỊ CỦA HÀM SỐ (4 MỤC)
    // =========================================================================
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

})(window);
