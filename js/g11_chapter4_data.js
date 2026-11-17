/* =========================================================================
   CHƯƠNG IV: QUAN HỆ SONG SONG TRONG KHÔNG GIAN (HOÀN CHỈNH TOÀN CHƯƠNG)
   MÔN TOÁN LỚP 11 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
   Bài 10: Đường thẳng và mặt phẳng trong không gian (Mục 1, 2, 3)
   Bài 11: Hai đường thẳng song song trong không gian (Mục 1, 2, 3)
   Bài 12: Đường thẳng và mặt phẳng song song (Mục 1, 2, 3)
   Bài 13: Hai mặt phẳng song song (Mục 1, 2, 3)
   Bài 14: Phép chiếu song song (Mục 1, 2, 3)
   Bài tập cuối chương IV: Ôn tập chương IV (Mục 1, 2, 3)
   Tổng cộng: 6 bài/chuyên đề × 3 mục = 18 mục (216 scenes chuẩn SGK)
   Mỗi mục gồm 12 scenes, 4 ví dụ minh họa kèm đồng hồ đếm ngược 15s/30s
   Hệ thống Trợ lý Học tập Toán 10-12 Chuẩn Bộ GD&ĐT
   ========================================================================= */

(function() {
  const root = (typeof window !== 'undefined') ? window : ((typeof global !== 'undefined') ? global : {});
  root.G11_CHAPTER4_DATA = root.G11_CHAPTER4_DATA || {};

  root.G11_CHAPTER4_DATA.g11_bai10_muc1 = {
  "lessonId": "toan11_bai10",
  "lessonTitle": "Bài 10: Đường thẳng và mặt phẳng trong không gian",
  "sectionId": "g11_bai10_muc1",
  "sectionTitle": "Mục 1: Khái niệm mở đầu, 6 tính chất thừa nhận & 3 cách xác định mặt phẳng",
  "audio": "/audio/g11_bai10_muc1.mp3",
  "audioSrc": "./audio/g11_bai10_muc1.mp3",
  "audio_src": "./audio/g11_bai10_muc1.mp3",
  "title": "Mục 1: Khái niệm mở đầu, 6 tính chất thừa nhận & 3 cách xác định mặt phẳng",
  "owl_tip": "Nắm vững 6 tính chất thừa nhận và 3 cách xác định mặt phẳng: 3 điểm không thẳng hàng, 1 đường thẳng và 1 điểm ngoài, hoặc 2 đường thẳng cắt nhau!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. MỞ ĐẦU HÌNH HỌC KHÔNG GIAN & KHÁI NIỆM MẶT PHẲNG",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. CÁC TÍNH CHẤT THỪA NHẬN CỐT LÕI (TIÊN ĐỀ)",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: BÀI TOÁN CÁI KÊ CHÂN 3 CHÂN VÀ 4 CHÂN",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 1",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 436.1,
  "formattedDuration": "07:16",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. MỞ ĐẦU HÌNH HỌC KHÔNG GIAN & KHÁI NIỆM MẶT PHẲNG",
      "subtitle": "BÀI 10 • MỤC 1 • BƯỚC VÀO THẾ GIỚI KHÔNG GIAN 3 CHIỀU",
      "mascotMode": "pointer",
      "mascotTip": "Mặt phẳng không có bề dày và mở rộng vô hạn về mọi phía, ký hiệu là $(\\alpha), (\\beta), (P), (Q)$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/60 to-indigo-900/40 p-4 rounded-xl border border-blue-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Khái niệm nền tảng</span>\n      <h3 class=\"text-xl font-black text-blue-200\">Mặt Phẳng Trong Không Gian</h3>\n    </div>\n    <p class=\"text-sm text-slate-300 leading-relaxed\">\n      • Mặt phẳng là một đối tượng cơ bản của hình học không gian, không có bề dày và trải rộng vô cực về mọi phía.<br/>\n      • Kí hiệu: Dùng chữ cái Hy Lạp hoặc chữ cái in hoa đặt trong dấu ngoặc đơn: $(\\alpha), (\\beta), (P), (Q), (ABC)$.<br/>\n      • Biểu diễn trên giấy: Vẽ bằng một hình bình hành hoặc một miền có đường viền gợn sóng.\n    </p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-blue-400 shadow-md\">\n      <h4 class=\"font-bold text-blue-300 text-sm mb-1\">📍 Điểm thuộc mặt phẳng</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • $A \\in (\\alpha)$: Điểm $A$ thuộc mặt phẳng $(\\alpha)$ hay $(\\alpha)$ đi qua $A$.<br/>\n        • $B \\notin (\\alpha)$: Điểm $B$ không thuộc mặt phẳng $(\\alpha)$.\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-indigo-400 shadow-md\">\n      <h4 class=\"font-bold text-indigo-300 text-sm mb-1\">📏 Đường thẳng nằm trong mp</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • $d \\subset (\\alpha)$: Mọi điểm của đường thẳng $d$ đều thuộc $(\\alpha)$.<br/>\n        • Nếu $A \\in d$ và $B \\in d$ với $A \\ne B$, thì đường thẳng $AB \\subset (\\alpha)$.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em học sinh đến với Chương 4 môn Toán lớp 11: Quan hệ song song trong không gian. Nếu như ở lớp dưới chúng ta chỉ làm việc trên mặt phẳng hai chiều, thì từ bài học hôm nay, chúng ta chính thức bước vào không gian ba chiều sống động. Khái niệm nền tảng đầu tiên là mặt phẳng. Mặt phẳng như mặt bàn phẳng, mặt hồ nước phẳng lặng, nhưng trong toán học nó không có độ dày và mở rộng vô tận về mọi phía.",
      "startTime": 0.0,
      "endTime": 26.06,
      "duration": 26.06
    },
    {
      "sceneIndex": 2,
      "title": "2. CÁC TÍNH CHẤT THỪA NHẬN CỐT LÕI (TIÊN ĐỀ)",
      "subtitle": "BÀI 10 • MỤC 1 • 6 TÍNH CHẤT VÀNG XÂY DỰNG HÌNH HỌC KHÔNG GIAN",
      "mascotMode": "explaining",
      "mascotTip": "Có một và chỉ một mặt phẳng đi qua 3 điểm không thẳng hàng!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-3 gap-2.5 text-xs\">\n    <div class=\"bg-slate-800/90 p-3 rounded-lg border-t-2 border-emerald-400\">\n      <b class=\"text-emerald-300\">Tính chất 1 & 2</b>\n      <p class=\"text-slate-300 mt-1\">\n        • Qua 2 điểm phân biệt có duy nhất 1 đường thẳng.<br/>\n        • Qua 3 điểm <b>không thẳng hàng</b> có duy nhất 1 mặt phẳng $(ABC)$.\n      </p>\n    </div>\n    <div class=\"bg-slate-800/90 p-3 rounded-lg border-t-2 border-cyan-400\">\n      <b class=\"text-cyan-300\">Tính chất 3 & 4</b>\n      <p class=\"text-slate-300 mt-1\">\n        • Nếu $A, B \\in (\\alpha)$ thì toàn bộ đường thẳng $AB \\subset (\\alpha)$.<br/>\n        • Tồn tại 4 điểm không đồng phẳng (tạo tứ diện).\n      </p>\n    </div>\n    <div class=\"bg-slate-800/90 p-3 rounded-lg border-t-2 border-amber-400\">\n      <b class=\"text-amber-300\">Tính chất 5 & 6</b>\n      <p class=\"text-slate-300 mt-1\">\n        • Hai mp phân biệt có điểm chung thì có chung duy nhất 1 <b>giao tuyến</b> $d$.<br/>\n        • Hình học phẳng nghiệm đúng trên mọi mp.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"bg-slate-900/90 p-3 rounded-xl border border-indigo-500/30 text-xs\">\n    <b class=\"text-indigo-300\">💡 3 Cách Xác Định Một Mặt Phẳng Duy Nhất:</b>\n    <div class=\"grid grid-cols-3 gap-2 mt-2 text-center font-mono\">\n      <div class=\"bg-slate-800 p-2 rounded text-cyan-200\">1. Qua 3 điểm không thẳng hàng: $(ABC)$</div>\n      <div class=\"bg-slate-800 p-2 rounded text-emerald-200\">2. Qua 1 điểm và 1 đt không qua điểm: $(A, d)$</div>\n      <div class=\"bg-slate-800 p-2 rounded text-amber-200\">3. Qua 2 đt cắt nhau: $(a, b)$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hình học không gian được xây dựng dựa trên 6 tính chất thừa nhận cơ bản. Tính chất 1: Có một và chỉ một đường thẳng đi qua hai điểm phân biệt. Tính chất 2: Có một và chỉ một mặt phẳng đi qua ba điểm không thẳng hàng. Tính chất 3: Nếu một đường thẳng có hai điểm phân biệt cùng thuộc một mặt phẳng thì mọi điểm của đường thẳng đều thuộc mặt phẳng đó. Tính chất 4: Tồn tại bốn điểm không cùng thuộc một mặt phẳng. Tính chất 5: Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có một đường thẳng chung duy nhất đi qua điểm đó, đường thẳng đó gọi là giao tuyến. Tính chất 6: Trên mỗi mặt phẳng, các kết quả đã biết trong hình học phẳng đều đúng.",
      "startTime": 26.06,
      "endTime": 74.28,
      "duration": 48.22
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: ĐIỀU KIỆN ĐỒNG PHẲNG CỦA CÁC ĐIỂM",
      "subtitle": "BÀI 10 • MỤC 1 • CÂU HỎI TRẮC NGHIỆM ĐỊNH TÍNH 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Ba điểm bất kì luôn đồng phẳng vì luôn có ít nhất một mặt phẳng đi qua chúng!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Nhận biết</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-3\">\n      <b>Câu 1:</b> Trong các khẳng định sau về sự xác định của mặt phẳng trong không gian, khẳng định nào sau đây là <b>đúng</b>?\n    </p>\n\n    <div class=\"space-y-1.5 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Qua ba điểm phân biệt bất kì luôn có duy nhất một mặt phẳng.</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> Qua bốn điểm phân biệt bất kì luôn có duy nhất một mặt phẳng.</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>C.</b> Qua ba điểm không thẳng hàng có một và chỉ một mặt phẳng.</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Qua hai đường thẳng bất kì luôn xác định duy nhất một mặt phẳng.</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian chọn đáp án:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng làm Ví dụ 1: Trong các khẳng định sau, khẳng định nào đúng? Khẳng định A: Qua 3 điểm phân biệt bất kì luôn xác định duy nhất một mặt phẳng. Khẳng định B: Qua 4 điểm phân biệt bất kì luôn xác định duy nhất một mặt phẳng. Khẳng định C: Qua 3 điểm không thẳng hàng luôn xác định duy nhất một mặt phẳng. Khẳng định D: Qua 2 đường thẳng bất kì luôn xác định duy nhất một mặt phẳng. Các em có 15 giây chọn đáp án.",
      "startTime": 74.28,
      "endTime": 108.62,
      "duration": 34.34
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN C CHÍNH XÁC",
      "subtitle": "BÀI 10 • MỤC 1 • PHÂN TÍCH TỪNG PHƯƠNG ÁN NÉ BẪY",
      "mascotMode": "celebrating",
      "mascotTip": "Nếu 3 điểm thẳng hàng thì có VÔ SỐ mặt phẳng đi qua đường thẳng chứa chúng!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Lời giải chi tiết Ví dụ 1:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• <b>Phương án A sai:</b> Nếu 3 điểm phân biệt thẳng hàng thì có vô số mặt phẳng đi qua chúng (chùm mặt phẳng quanh trục).</p>\n      <p>• <b>Phương án B sai:</b> 4 đỉnh của một tứ diện không bao giờ đồng phẳng.</p>\n      <p>• <b>Phương án C đúng:</b> Theo tính chất thừa nhận 2, qua 3 điểm <b>không thẳng hàng</b> xác định duy nhất 1 mặt phẳng $(ABC)$.</p>\n      <p>• <b>Phương án D sai:</b> Hai đường thẳng chéo nhau không cùng nằm trong bất kì mặt phẳng nào.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án C.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là C: Qua ba điểm không thẳng hàng có một và chỉ một mặt phẳng. Tại sao phương án A sai? Vì nếu ba điểm thẳng hàng, chúng sẽ nằm trên cùng một đường thẳng d, và khi đó có vô số mặt phẳng chứa đường thẳng d như các trang của một cuốn sách mở. Phương án B sai vì bốn điểm có thể tạo thành một tứ diện không cùng thuộc một mặt phẳng. Phương án D sai vì hai đường thẳng chéo nhau sẽ không cùng thuộc bất kì mặt phẳng nào.",
      "startTime": 108.62,
      "endTime": 143.14,
      "duration": 34.51
    },
    {
      "sceneIndex": 5,
      "title": "5. QUY TẮC VẼ HÌNH KHÔNG GIAN CHUẨN BỘ GD&ĐT",
      "subtitle": "BÀI 10 • MỤC 1 • NÉT LIỀN - NÉT ĐỨT VÀ QUAN HỆ SONG SONG",
      "mascotMode": "explaining",
      "mascotTip": "Cạnh nhìn thấy vẽ nét liền (solid), cạnh bị che khuất bắt buộc vẽ nét đứt (dashed)!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-teal-900/60 to-emerald-900/40 p-4 rounded-xl border border-teal-500/30 text-xs\">\n    <div class=\"font-bold text-teal-300 text-sm mb-2\">4 Quy Tắc Biểu Diễn Hình Không Gian Chuẩn Mực</div>\n    <div class=\"grid grid-cols-2 gap-3\">\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">1. Nét liền & Nét đứt</b>\n        <p class=\"text-slate-300 mt-1\">• Đường nhìn thấy: Vẽ bằng <b>nét liền</b> (solid).<br/>• Đường bị che khuất: Vẽ bằng <b>nét đứt</b> (dashed).</p>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">2. Bảo toàn tính song song & Tỉ số</b>\n        <p class=\"text-slate-300 mt-1\">• Song song vẽ thành song song.<br/>• Trung điểm của đoạn thẳng vẽ thành trung điểm.</p>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-l-4 border-purple-400\">\n        <b class=\"text-purple-300\">3. Không bảo toàn độ lớn góc</b>\n        <p class=\"text-slate-300 mt-1\">• Góc vuông trong không gian thường vẽ thành góc nhọn hoặc góc tù.</p>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-l-4 border-amber-400\">\n        <b class=\"text-amber-300\">4. Đáy đa giác</b>\n        <p class=\"text-slate-300 mt-1\">• Hình vuông, hình chữ nhật, hình thoi đều biểu diễn bằng <b>hình bình hành</b>.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Để học tốt hình học không gian, kỹ năng vẽ hình đúng chuẩn là điều kiện tiên quyết. Các em cần tuân thủ nghiêm ngặt 4 nguyên tắc vẽ hình sau. Nguyên tắc 1: Cạnh nhìn thấy được vẽ bằng nét liền; cạnh bị che khuất bắt buộc vẽ bằng nét đứt đoạn. Nguyên tắc 2: Hình biểu diễn của đường thẳng là đường thẳng, đoạn thẳng là đoạn thẳng. Nguyên tắc 3: Hai đường thẳng song song trong thực tế thì trên hình biểu diễn bắt buộc phải song song. Tỉ số của hai đoạn thẳng cùng nằm trên một đường thẳng hoặc hai đường thẳng song song phải được bảo toàn. Nguyên tắc 4: Hình biểu diễn của tam giác, hình bình hành, hình vuông hay hình chữ nhật nói chung đều được vẽ bằng hình bình hành hoặc tam giác tương ứng.",
      "startTime": 143.14,
      "endTime": 194.14,
      "duration": 51.0
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: SỐ MẶT PHẲNG TẠO BỞI 4 ĐIỂM KHÔNG ĐỒNG PHẲNG",
      "subtitle": "BÀI 10 • MỤC 1 • BÀI TOÁN ĐẾM MẶT PHẲNG 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Cứ 3 điểm không thẳng hàng tạo thành 1 mặt phẳng: $C_4^3 = 4$ mặt phẳng!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-3\">\n      <b>Câu 2:</b> Cho bốn điểm $A, B, C, D$ không cùng nằm trong một mặt phẳng. Có bao nhiêu mặt phẳng phân biệt được tạo thành từ bốn điểm đó?\n    </p>\n\n    <div class=\"grid grid-cols-4 gap-2 text-xs font-mono text-center\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> 1 mặt phẳng</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> 3 mặt phẳng</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>C.</b> 4 mặt phẳng</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> 6 mặt phẳng</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-cyan-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2: Cho 4 điểm A, B, C, D không đồng phẳng. Hỏi có thể tạo ra bao nhiêu mặt phẳng phân biệt đi qua ít nhất 3 trong 4 điểm đã cho? Phương án A: 1 mặt phẳng; Phương án B: 3 mặt phẳng; Phương án C: 4 mặt phẳng; Phương án D: 6 mặt phẳng. Các em có 15 giây suy nghĩ.",
      "startTime": 194.14,
      "endTime": 220.82,
      "duration": 26.69
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: 4 MẶT CỦA TỨ DIỆN $ABCD$",
      "subtitle": "BÀI 10 • MỤC 1 • CÔNG THỨC TỔ HỢP $C_n^3$ XÁC ĐỊNH MẶT PHẲNG",
      "mascotMode": "celebrating",
      "mascotTip": "4 mặt phẳng là $(ABC), (ABD), (ACD), (BCD)$ chính là 4 mặt của hình tứ diện!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-cyan-300 uppercase mb-2\">Lời giải chi tiết Ví dụ 2:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• Do bốn điểm $A, B, C, D$ không đồng phẳng nên không có ba điểm nào thẳng hàng.</p>\n      <p>• Cứ 3 điểm không thẳng hàng xác định duy nhất 1 mặt phẳng.</p>\n      <p>• Số mặt phẳng tạo thành: $C_4^3 = \\frac{4!}{3! \\cdot 1!} = 4$ (mặt phẳng).</p>\n      <div class=\"p-2 bg-slate-900 rounded font-mono text-center text-emerald-300 font-bold my-1\">\n        Bốn mặt phẳng: $(ABC), (ABD), (ACD), (BCD)$\n      </div>\n      <p class=\"text-emerald-300 font-bold font-mono\">➔ Chọn đáp án C: 4 mặt phẳng.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là C: 4 mặt phẳng. Vì 4 điểm A, B, C, D không đồng phẳng nên không có 3 điểm nào thẳng hàng. Cứ chọn ra 3 điểm trong 4 điểm ta sẽ xác định được duy nhất một mặt phẳng. Số mặt phẳng được tạo thành chính bằng số tổ hợp chập 3 của 4 phần tử: C 4 chập 3 bằng 4. Đó chính là 4 mặt: mp ABC, mp ABD, mp ACD và mp BCD của hình tứ diện ABCD.",
      "startTime": 220.82,
      "endTime": 258.96,
      "duration": 38.14
    },
    {
      "sceneIndex": 8,
      "title": "8. KỸ NĂNG CHỨNG MINH 3 ĐIỂM THẲNG HÀNG TRONG KHÔNG GIAN",
      "subtitle": "BÀI 10 • MỤC 1 • PHƯƠNG PHÁP ĐƯỜNG THẲNG GIAO TUYẾN KINH ĐIỂN",
      "mascotMode": "explaining",
      "mascotTip": "Muốn chứng minh 3 điểm thẳng hàng: chứng minh chúng cùng thuộc 2 mặt phẳng phân biệt!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-indigo-900/60 to-purple-900/40 p-4 rounded-xl border border-indigo-500/30 text-xs\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded uppercase\">Phương pháp kinh điển</span>\n      <h3 class=\"text-base font-bold text-indigo-200\">Chứng Minh Ba Điểm Thẳng Hàng Trong Không Gian</h3>\n    </div>\n    <div class=\"bg-slate-800/80 p-3 rounded-lg border-l-4 border-indigo-400 mt-2 space-y-1 text-slate-300\">\n      <p>Để chứng minh ba điểm $M, N, P$ thẳng hàng:</p>\n      <p>• <b>Bước 1:</b> Tìm hai mặt phẳng phân biệt $(\\alpha)$ và $(\\beta)$ sao cho $(\\alpha) \\cap (\\beta) = d$.</p>\n      <p>• <b>Bước 2:</b> Chứng minh $M \\in (\\alpha) \\cap (\\beta)$, $N \\in (\\alpha) \\cap (\\beta)$ và $P \\in (\\alpha) \\cap (\\beta)$.</p>\n      <p>• <b>Bước 3:</b> Kết luận $M, N, P$ cùng thuộc giao tuyến $d \\implies M, N, P$ thẳng hàng.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Một trong những bài toán suy luận hình học không gian kinh điển là chứng minh 3 điểm thẳng hàng. Phương pháp chuẩn mực nhất: Ta chỉ ra rằng 3 điểm đó đều đồng thời thuộc về hai mặt phẳng phân biệt (P) và (Q). Theo tính chất thừa nhận số 5, giao của hai mặt phẳng phân biệt là một đường thẳng giao tuyến duy nhất d. Vì cả 3 điểm cùng thuộc cả (P) và (Q) nên chúng bắt buộc phải cùng nằm trên đường thẳng giao tuyến d, suy ra 3 điểm thẳng hàng.",
      "startTime": 258.96,
      "endTime": 294.5,
      "duration": 35.54
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: CHỨNG MINH 3 ĐIỂM THẲNG HÀNG TRONG HÌNH CHÓP",
      "subtitle": "BÀI 10 • MỤC 1 • ÁP DỤNG TÍNH CHẤT GIAO TUYẾN 30 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "$I = AB \\cap CD, J = AD \\cap BC, K = AC \\cap BD$. Điểm nào thuộc giao tuyến?",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là tứ giác lồi sao cho các cạnh đối $AB$ và $CD$ cắt nhau tại $E$; $AD$ và $BC$ cắt nhau tại $F$.\n    </p>\n\n    <div class=\"bg-slate-900 p-2.5 rounded text-xs text-slate-300 space-y-1\">\n      <p>• Giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng nào?</p>\n      <p>• Giao tuyến của $(SAD)$ và $(SBC)$ là đường thẳng nào?</p>\n    </div>\n\n    <p class=\"text-xs text-indigo-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Xác định hai giao tuyến trên và giải thích vì sao $S, E$ thuộc giao tuyến thứ nhất.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3: Cho hình chóp S.ABCD có đáy ABCD là một hình thang với hai đáy AB và CD không song song. Gọi I là giao điểm của hai đường thẳng AD và BC; gọi S là đỉnh chóp. Hỏi ba điểm S, I và giao điểm của hai mặt phẳng SAB và SCD có quan hệ gì? Các em có 30 giây suy nghĩ.",
      "startTime": 294.5,
      "endTime": 316.49,
      "duration": 21.98
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: GIAO TUYẾN $SE$ VÀ $SF$",
      "subtitle": "BÀI 10 • MỤC 1 • TÌM 2 ĐIỂM CHUNG CỦA HAI MẶT PHẲNG",
      "mascotMode": "celebrating",
      "mascotTip": "$S$ là điểm chung 1; $E = AB \\cap CD$ là điểm chung 2 $\\Rightarrow (SAB) \\cap (SCD) = SE$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-indigo-300 uppercase mb-2\">Lời giải chi tiết Ví dụ 3:</div>\n    <div class=\"space-y-2 text-slate-300\">\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500/30\">\n        <b class=\"text-emerald-300\">1. Giao tuyến $(SAB) \\cap (SCD) = SE$:</b>\n        <p class=\"font-mono mt-1 text-slate-200\">\n          • $S \\in (SAB) \\cap (SCD)$ (điểm chung thứ nhất).<br/>\n          • $E = AB \\cap CD \\implies \\begin{cases} E \\in AB \\subset (SAB) \\\\ E \\in CD \\subset (SCD) \\end{cases} \\implies E \\in (SAB) \\cap (SCD)$.<br/>\n          ➔ Giao tuyến là đường thẳng <b>$SE$</b>.\n        </p>\n      </div>\n\n      <div class=\"p-2 bg-slate-900 rounded border border-cyan-500/30\">\n        <b class=\"text-cyan-300\">2. Giao tuyến $(SAD) \\cap (SBC) = SF$:</b>\n        <p class=\"font-mono mt-1 text-slate-200\">\n          • $S$ là điểm chung thứ nhất.<br/>\n          • $F = AD \\cap BC \\implies F$ là điểm chung thứ hai.<br/>\n          ➔ Giao tuyến là đường thẳng <b>$SF$</b>.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Xét hai mặt phẳng SAB và SCD: Điểm thứ nhất là đỉnh S hiển nhiên là điểm chung. Điểm thứ hai là E: vì E là giao điểm của AB và CD trong mặt phẳng đáy, mà AB thuộc SAB và CD thuộc SCD, nên E vừa thuộc SAB vừa thuộc SCD. Vậy E là điểm chung thứ hai. Nối S với E, ta được đường thẳng SE chính là giao tuyến của SAB và SCD. Hoàn toàn tương tự, F là giao điểm của AD và BC nên F là điểm chung của SAD và SBC. Do đó giao tuyến của SAD và SBC chính là đường thẳng SF.",
      "startTime": 316.49,
      "endTime": 362.28,
      "duration": 45.79
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: BÀI TOÁN CÁI KÊ CHÂN 3 CHÂN VÀ 4 CHÂN",
      "subtitle": "BÀI 10 • MỤC 1 • ỨNG DỤNG THỰC TẾ CỦA TIÊN ĐỀ MẶT PHẲNG",
      "mascotMode": "thinking",
      "mascotTip": "Vì sao ghế 3 chân luôn đứng vững trên mọi mặt đất mấp mô nhưng bàn 4 chân lại bị khập khiễng?",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 4 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Ứng dụng thực tiễn</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      <b>Câu hỏi thực tế:</b> Tại sao chân máy ảnh (tripod) và kiềng bếp than luôn được chế tạo có <b>3 chân</b> thay vì 4 chân?\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-900 p-2.5 rounded border border-emerald-500/30\">\n        <b class=\"text-emerald-300\">Ghế / Kiềng 3 chân:</b>\n        <p class=\"text-slate-300 mt-1\">Đầu mút 3 chân tạo thành 3 điểm trong không gian.</p>\n      </div>\n      <div class=\"bg-slate-900 p-2.5 rounded border border-rose-500/30\">\n        <b class=\"text-rose-300\">Bàn / Ghế 4 chân:</b>\n        <p class=\"text-slate-300 mt-1\">Đầu mút 4 chân tạo thành 4 điểm trong không gian.</p>\n      </div>\n    </div>\n\n    <p class=\"text-xs text-amber-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Dùng tính chất xác định mặt phẳng để giải thích tính vững chắc của kiềng 3 chân.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4 là câu hỏi giải thích hiện tượng thực tế đời sống. Trong đời sống, các em thấy chân máy ảnh thường có 3 chân, ghế đẩu 3 chân luôn đứng vững chãi trên mọi bề mặt gồ ghề không bao giờ bị khập khiễng, trong khi bàn hoặc ghế 4 chân đặt trên sân gạch gồ ghề lại rất dễ bị bấp bênh. Dựa vào các tính chất thừa nhận của hình học không gian, em hãy giải thích hiện tượng thú vị này. Các em có 30 giây suy nghĩ.",
      "startTime": 362.28,
      "endTime": 393.19,
      "duration": 30.91
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 1",
      "subtitle": "BÀI 10 • MỤC 1 • TOÁN HỌC TRONG ĐỜI SỐNG HÀNG NGÀY",
      "mascotMode": "celebrating",
      "mascotTip": "3 điểm bất kì luôn cùng thuộc một mặt phẳng, còn 4 điểm chưa chắc đồng phẳng!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-1\">Giải thích khoa học toán học:</div>\n    <ul class=\"text-slate-300 space-y-1\">\n      <li>• <b>Ba điểm không thẳng hàng luôn xác định 1 mặt phẳng duy nhất:</b> Do đó 3 đầu mút chân kiềng luôn luôn cùng nằm trên 1 mặt phẳng tiếp xúc mặt đất ➔ <b>Không bao giờ bị khập khiễng!</b></li>\n      <li>• <b>Bốn điểm nói chung không đồng phẳng:</b> Khi mặt đất gồ ghề, điểm thứ tư không nằm trên mặt phẳng qua 3 điểm kia ➔ <b>Bị bấp bênh.</b></li>\n    </ul>\n\n    <div class=\"mt-2.5 bg-gradient-to-r from-blue-950 to-indigo-950 p-2.5 rounded-lg border border-blue-500/30\">\n      <b class=\"text-blue-200\">⭐ TỔNG KẾT MỤC 1:</b>\n      <p class=\"text-slate-300 mt-1\">\n        Nắm chắc 6 tính chất thừa nhận, 3 cách xác định mặt phẳng, nguyên tắc vẽ nét liền nét đứt và kỹ năng tìm giao tuyến bằng 2 điểm chung!\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã tìm ra câu trả lời. Theo Tính chất thừa nhận số 2: Ba điểm không thẳng hàng luôn luôn cùng thuộc một mặt phẳng duy nhất. Do đó, ba đầu mút chân của kiềng hoặc chân máy ảnh luôn luôn nằm trọn vẹn trong cùng một mặt phẳng tiếp xúc với mặt đất, dù mặt đất có mấp mô nghiêng ngả thế nào đi nữa, kiềng vẫn tiếp đất đồng thời cả 3 điểm và đứng vững chãi không bị kênh. Ngược lại, 4 điểm bất kì nói chung không đồng phẳng, nên khi mặt sàn không tuyệt đối phẳng, chân thứ 4 sẽ bị hẫng gây ra hiện tượng khập khiễng bấp bênh. Như vậy chúng ta đã kết thúc Mục 1.",
      "startTime": 393.19,
      "endTime": 436.1,
      "duration": 42.91
    }
  ]
};
  root.G11_CHAPTER4_DATA.toan11_bai10_muc1 = root.G11_CHAPTER4_DATA.g11_bai10_muc1;

  root.G11_CHAPTER4_DATA.g11_bai10_muc2 = {
  "lessonId": "toan11_bai10",
  "lessonTitle": "Bài 10: Đường thẳng và mặt phẳng trong không gian",
  "sectionId": "g11_bai10_muc2",
  "sectionTitle": "Mục 2: Hình chóp, hình tứ diện & Kỹ thuật tìm giao tuyến của hai mặt phẳng",
  "audio": "/audio/g11_bai10_muc2.mp3",
  "audioSrc": "./audio/g11_bai10_muc2.mp3",
  "audio_src": "./audio/g11_bai10_muc2.mp3",
  "title": "Mục 2: Hình chóp, hình tứ diện & Kỹ thuật tìm giao tuyến của hai mặt phẳng",
  "owl_tip": "Muốn tìm giao tuyến của hai mặt phẳng, hãy tìm 2 điểm chung phân biệt rồi nối chúng lại!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. ĐỊNH NGHĨA HÌNH CHÓP VÀ HÌNH TỨ DIỆN",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. PHƯƠNG PHÁP TÌM GIAO TUYẾN CỦA HAI MẶT PHẲNG",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: THIẾT DIỆN CẮT BỞI MẶT PHẲNG QUA 3 ĐIỂM",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 2",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 322.25,
  "formattedDuration": "05:22",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. ĐỊNH NGHĨA HÌNH CHÓP VÀ HÌNH TỨ DIỆN",
      "subtitle": "BÀI 10 • MỤC 2 • HAI KHỐI HÌNH ĐA DIỆN CƠ BẢN NHẤT",
      "mascotMode": "pointer",
      "mascotTip": "Hình chóp tam giác có 4 mặt và 4 đỉnh chính là hình tứ diện!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-indigo-900/60 to-purple-900/40 p-4 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Cấu trúc đa diện</span>\n      <h3 class=\"text-xl font-black text-indigo-200\">Hình Chóp & Hình Tứ Diện</h3>\n    </div>\n    <p class=\"text-sm text-slate-300 leading-relaxed\">\n      • <b>Hình chóp $S.A_1A_2\\dots A_n$:</b> Đỉnh $S$, đáy là đa giác $A_1A_2\\dots A_n$. Các mặt bên $(SA_1A_2), (SA_2A_3)\\dots$ là tam giác.<br/>\n      • <b>Hình tứ diện $ABCD$:</b> Hình gồm 4 đỉnh không đồng phẳng và 4 mặt tam giác $(ABC), (ABD), (ACD), (BCD)$.\n    </p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3 rounded-lg border-l-4 border-indigo-400\">\n      <b class=\"text-indigo-300\">Đặc điểm hình chóp $S.ABCD$</b>\n      <p class=\"text-slate-300 mt-1\">\n        • Đỉnh: $S$. Đáy: Tứ giác $ABCD$.<br/>\n        • Cạnh bên: $SA, SB, SC, SD$.<br/>\n        • Cạnh đáy: $AB, BC, CD, DA$.\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3 rounded-lg border-l-4 border-purple-400\">\n      <b class=\"text-purple-300\">Đặc điểm hình tứ diện $ABCD$</b>\n      <p class=\"text-slate-300 mt-1\">\n        • Bất kì đỉnh nào cũng có thể coi là đỉnh chóp.<br/>\n        • Hai cạnh không có điểm chung gọi là <b>hai cạnh đối diện</b> (VD: $AB$ và $CD$).\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào các em đến với Mục 2: Hình chóp, hình tứ diện và phương pháp tìm giao tuyến của hai mặt phẳng. Trong không gian, hình chóp được tạo thành từ một đa giác đáy nằm trong một mặt phẳng và một đỉnh S nằm ngoài mặt phẳng đáy đó. Nối đỉnh S với các đỉnh của đa giác đáy, ta được các mặt bên là những tam giác. Trường hợp đặc biệt khi đáy là tam giác, ta có hình chóp tam giác, còn gọi là hình tứ diện, gồm đúng 4 mặt tam giác và 4 đỉnh.",
      "startTime": 0.0,
      "endTime": 34.3,
      "duration": 34.3
    },
    {
      "sceneIndex": 2,
      "title": "2. PHƯƠNG PHÁP TÌM GIAO TUYẾN CỦA HAI MẶT PHẲNG",
      "subtitle": "BÀI 10 • MỤC 2 • BÍ QUYẾT TÌM 2 ĐIỂM CHUNG PHÂN BIỆT",
      "mascotMode": "explaining",
      "mascotTip": "Muốn tìm giao tuyến của $(\\alpha)$ và $(\\beta)$: Chỉ ra 2 điểm chung phân biệt $A, B \\implies (\\alpha) \\cap (\\beta) = AB$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-3.5 rounded-xl border border-cyan-500/40 text-xs\">\n    <div class=\"font-bold text-cyan-300 text-sm mb-2\">Quy Trình 3 Bước Tìm Giao Tuyến Chuẩn Mực</div>\n    <div class=\"grid grid-cols-3 gap-2.5 text-center\">\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-400\">\n        <b class=\"text-emerald-300\">Bước 1: Điểm chung thứ 1</b>\n        <p class=\"text-slate-300 mt-1\">Tìm điểm chung dễ thấy (thường là đỉnh chóp $S$).</p>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-cyan-400\">\n        <b class=\"text-cyan-300\">Bước 2: Điểm chung thứ 2</b>\n        <p class=\"text-slate-300 mt-1\">Tìm 2 đt $a \\subset (\\alpha)$ và $b \\subset (\\beta)$ cùng thuộc 1 mp thứ 3 sao cho $a \\cap b = M$.</p>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-purple-400\">\n        <b class=\"text-purple-300\">Bước 3: Kết luận giao tuyến</b>\n        <p class=\"text-slate-300 mt-1\">Nối 2 điểm chung lại: $(\\alpha) \\cap (\\beta) = SM$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Giao tuyến của hai mặt phẳng phân biệt là bài toán cơ sở và xuyên suốt toàn bộ chương trình hình học không gian. Để tìm giao tuyến của mặt phẳng alpha và mặt phẳng beta, phương pháp gốc rễ là tìm hai điểm chung phân biệt A và B của hai mặt phẳng đó. Đường thẳng đi qua hai điểm A và B chính là giao tuyến cần tìm. Điểm chung thứ nhất thường rất dễ nhìn thấy, chính là đỉnh chung đã cho. Điểm chung thứ hai thường là giao điểm của hai đường thẳng không song song cùng nằm trong một mặt phẳng thứ ba.",
      "startTime": 34.3,
      "endTime": 71.4,
      "duration": 37.1
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: TÌM GIAO TUYẾN TRONG HÌNH CHÓP ĐÁY TỨ GIÁC",
      "subtitle": "BÀI 10 • MỤC 2 • BÀI TOÁN TÌM GIAO TUYẾN 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "$O = AC \\cap BD$. Điểm chung thứ nhất là $S$, điểm chung thứ hai là $O$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Nhận biết</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-3\">\n      <b>Câu 1:</b> Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$ là:\n    </p>\n\n    <div class=\"grid grid-cols-4 gap-2 text-xs font-mono text-center\">\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300 cursor-pointer\"><b>A.</b> $SO$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 cursor-pointer\"><b>B.</b> $SA$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 cursor-pointer\"><b>C.</b> $SB$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 cursor-pointer\"><b>D.</b> $SC$</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian chọn đáp án:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 1: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O. Giao tuyến của hai mặt phẳng SAC và SBD là đường thẳng nào sau đây? Phương án A: SO; Phương án B: SA; Phương án C: SB; Phương án D: SC. Các em có 15 giây suy nghĩ.",
      "startTime": 71.4,
      "endTime": 96.53,
      "duration": 25.13
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: GIAO TUYẾN $SO$ CHÍNH XÁC",
      "subtitle": "BÀI 10 • MỤC 2 • ĐIỂM CHUNG THỨ HAI LÀ TÂM ĐÁY $O$",
      "mascotMode": "celebrating",
      "mascotTip": "$S$ thuộc cả 2 mp; $O = AC \\cap BD$ thuộc cả 2 mp $\\implies (SAC) \\cap (SBD) = SO$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Lời giải chi tiết Ví dụ 1:</div>\n    <div class=\"space-y-1.5 text-slate-300 font-mono\">\n      <p>• Điểm chung thứ nhất: $S \\in (SAC) \\cap (SBD)$.</p>\n      <p>• Trong mp đáy $(ABCD)$: Gọi $O = AC \\cap BD$.</p>\n      <p>  Ta có: $\\begin{cases} O \\in AC \\subset (SAC) \\implies O \\in (SAC) \\\\ O \\in BD \\subset (SBD) \\implies O \\in (SBD) \\end{cases} \\implies O \\in (SAC) \\cap (SBD)$.</p>\n      <p>• Do đó: $(SAC) \\cap (SBD) = SO$.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-sans\">➔ Chọn đáp án A: Đường thẳng $SO$.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án chính xác là A: đường thẳng SO. Lời giải cực kì ngắn gọn và mẫu mực: Đỉnh S là điểm chung hiển nhiên của hai mặt phẳng SAC và SBD. Trong mặt phẳng đáy ABCD, hai đường chéo AC và BD cắt nhau tại tâm O. Vì O thuộc AC nên O thuộc mặt phẳng SAC; vì O thuộc BD nên O thuộc mặt phẳng SBD. Do đó O chính là điểm chung thứ hai. Kết luận giao tuyến của SAC và SBD là đường thẳng SO.",
      "startTime": 96.53,
      "endTime": 133.85,
      "duration": 37.32
    },
    {
      "sceneIndex": 5,
      "title": "5. PHƯƠNG PHÁP TÌM GIAO ĐIỂM ĐƯỜNG THẲNG VÀ MẶT PHẲNG",
      "subtitle": "BÀI 10 • MỤC 2 • KỸ THUẬT MẶT PHẲNG PHỤ CHỨA ĐƯỜNG THẲNG",
      "mascotMode": "explaining",
      "mascotTip": "Muốn tìm $d \\cap (\\alpha)$: Chọn mp phụ $(\\beta) \\supset d$, tìm $a = (\\alpha) \\cap (\\beta)$, rồi lấy $M = d \\cap a$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/60 to-indigo-900/40 p-4 rounded-xl border border-purple-500/30 text-xs\">\n    <div class=\"font-bold text-purple-300 text-sm mb-2\">Quy Trình 3 Bước Tìm Giao Điểm $d \\cap (\\alpha)$</div>\n    <div class=\"grid grid-cols-3 gap-2.5 text-center\">\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-cyan-400\">\n        <b class=\"text-cyan-300\">1. Chọn mp phụ $(\\beta)$</b>\n        <p class=\"text-slate-300 mt-1\">Tìm một mặt phẳng $(\\beta)$ thuận lợi chứa đường thẳng $d$.</p>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-400\">\n        <b class=\"text-emerald-300\">2. Tìm giao tuyến $a$</b>\n        <p class=\"text-slate-300 mt-1\">Xác định giao tuyến $a = (\\alpha) \\cap (\\beta)$.</p>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-amber-400\">\n        <b class=\"text-amber-300\">3. Cắt trong $(\\beta)$</b>\n        <p class=\"text-slate-300 mt-1\">Trong $(\\beta)$, lấy $M = d \\cap a \\implies M = d \\cap (\\alpha)$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Để tìm giao điểm của đường thẳng d với mặt phẳng alpha, nếu không nhìn thấy sẵn đường thẳng nào trong alpha cắt d thì ta dùng phương pháp mặt phẳng phụ gồm 3 bước thần thánh. Bước 1: Chọn một mặt phẳng phụ beta chứa đường thẳng d. Bước 2: Tìm giao tuyến a của mặt phẳng phụ beta với mặt phẳng alpha đã cho. Bước 3: Trong mặt phẳng beta, lấy giao điểm M của đường thẳng d và giao tuyến a. Điểm M vừa tìm được chính là giao điểm của d với mặt phẳng alpha.",
      "startTime": 133.85,
      "endTime": 170.81,
      "duration": 36.96
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: TÌM GIAO ĐIỂM TRONG HÌNH TỨ DIỆN",
      "subtitle": "BÀI 10 • MỤC 2 • THỰC CHIẾN TÌM GIAO ĐIỂM $d \\cap (\\alpha)$",
      "mascotMode": "thinking",
      "mascotTip": "Mặt phẳng phụ chứa $MN$ là $(SBD)$ hoặc $(ABD)$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-3\">\n      <b>Câu 2:</b> Cho tứ diện $ABCD$. Lấy điểm $M$ trên $AB$, $N$ trên $AC$ sao cho $MN$ không song song với $BC$. Giao điểm của đường thẳng $MN$ với mặt phẳng $(BCD)$ là:\n    </p>\n\n    <div class=\"space-y-1.5 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>A.</b> Giao điểm của $MN$ và $BC$ trong mặt phẳng $(ABC)$.</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> Giao điểm của $MN$ và $CD$ trong mặt phẳng $(ACD)$.</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> Giao điểm của $MN$ và $BD$ trong mặt phẳng $(ABD)$.</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Điểm $M$.</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian chọn đáp án:</span>\n    </div>\n    <span class=\"text-base font-black text-cyan-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2: Cho tứ diện ABCD. Gọi M và N lần lượt là trung điểm của AC và BC. Trên đoạn BD lấy điểm P sao cho P không phải là trung điểm của BD. Giao điểm của đường thẳng CD với mặt phẳng MNP là điểm nào? Các em có 15 giây suy nghĩ.",
      "startTime": 170.81,
      "endTime": 192.05,
      "duration": 21.24
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: ĐÁP ÁN A CHÍNH XÁC",
      "subtitle": "BÀI 10 • MỤC 2 • HAI ĐƯỜNG THẲNG CÙNG NẰM TRONG MẶT ĐÁY $(ABC)$",
      "mascotMode": "celebrating",
      "mascotTip": "$MN$ và $BC$ cùng thuộc $(ABC)$ và không song song nên cắt nhau tại $I \\in (BCD)$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-cyan-300 uppercase mb-2\">Lời giải chi tiết Ví dụ 2:</div>\n    <div class=\"space-y-1.5 text-slate-300 font-mono\">\n      <p>• Xét trong mặt phẳng $(ABC)$: $M \\in AB, N \\in AC \\implies MN \\subset (ABC)$.</p>\n      <p>• Vì $MN$ không song song với $BC$ nên gọi $I = MN \\cap BC$.</p>\n      <p>• Khi đó: $\\begin{cases} I \\in MN \\\\ I \\in BC \\subset (BCD) \\implies I \\in (BCD) \\end{cases}$.</p>\n      <p>• Vậy: $MN \\cap (BCD) = I$.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-sans\">➔ Chọn đáp án A.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là A. Ta thấy cả MN và BC đều cùng nằm trong mặt phẳng ABC. Vì MN không song song với BC nên trong mặt phẳng ABC, đường thẳng MN chắc chắn cắt đường thẳng BC tại một điểm I. Điểm I thuộc BC mà BC lại nằm trong mặt phẳng BCD, nên I thuộc mặt phẳng BCD. Do đó I chính là giao điểm của đường thẳng MN với mặt phẳng BCD.",
      "startTime": 192.05,
      "endTime": 225.58,
      "duration": 33.53
    },
    {
      "sceneIndex": 8,
      "title": "8. KHÁI NIỆM THIẾT DIỆN CỦA HÌNH CHÓP",
      "subtitle": "BÀI 10 • MỤC 2 • MẶT CẮT ĐA GIÁC KHI MẶT PHẲNG CẮT HÌNH KHỐI",
      "mascotMode": "explaining",
      "mascotTip": "Thiết diện là đa giác tạo bởi các đoạn giao tuyến của mặt phẳng $(\\alpha)$ với các mặt của hình chóp!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-3.5 rounded-xl border border-amber-500/40 text-xs\">\n    <div class=\"font-bold text-amber-300 text-sm mb-2 flex items-center gap-2\">\n      <span>📐</span> <span>Khái Niệm & Bản Chất Của Thiết Diện</span>\n    </div>\n    <p class=\"text-slate-300 leading-relaxed\">\n      • <b>Thiết diện (mặt cắt):</b> Là đa giác giới hạn bởi các đoạn giao tuyến của mặt phẳng $(\\alpha)$ với các mặt của hình chóp (hoặc tứ diện).<br/>\n      • <b>Nguyên tắc:</b> Tìm lần lượt các đoạn giao tuyến nằm trên từng mặt, kéo dài để tìm điểm cắt mới cho đến khi tạo thành một <b>chu trình đa giác khép kín</b>.\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 mt-2\">\n      <div class=\"bg-slate-800 p-2 rounded border border-slate-700\">\n        <b class=\"text-cyan-300\">Thiết diện tứ diện:</b> Chỉ có thể là <b>tam giác</b> hoặc <b>tứ giác</b>.\n      </div>\n      <div class=\"bg-slate-800 p-2 rounded border border-slate-700\">\n        <b class=\"text-emerald-300\">Thiết diện chóp tứ giác:</b> Có thể là <b>tam giác, tứ giác hoặc ngũ giác</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Khái niệm quan trọng tiếp theo là Thiết diện. Khi một mặt phẳng alpha cắt các mặt của một hình chóp, nó sẽ cắt các mặt bên và mặt đáy theo các đoạn thẳng giao tuyến. Các đoạn giao tuyến này khép kín lại tạo thành một đa giác phẳng, đa giác đó được gọi là thiết diện của hình chóp cắt bởi mặt phẳng alpha. Để tìm thiết diện, ta lần lượt tìm giao tuyến của alpha với từng mặt của hình chóp cho đến khi các đoạn giao tuyến khép kín thành một đa giác kín.",
      "startTime": 225.58,
      "endTime": 228.22,
      "duration": 2.64
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: TÌM THIẾT DIỆN CỦA TỨ DIỆN $ABCD$",
      "subtitle": "BÀI 10 • MỤC 2 • BÀI TOÁN XÁC ĐỊNH MẶT CẮT ĐA GIÁC 30 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Mặt phẳng $(MNP)$ cắt $(ABC)$ theo $MN$, cắt $(ABD)$ theo $MP$, cắt $(BCD)$ theo $NP$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Cho tứ diện $ABCD$. Điểm $M \\in AB$, $N \\in AC$, $P \\in BD$ sao cho $MN$ cắt $BC$ tại $E$, $MP$ cắt $AD$ tại $F$.\n    </p>\n\n    <div class=\"bg-slate-900 p-2.5 rounded text-xs text-slate-300 space-y-1\">\n      <p>• Xác định giao tuyến của $(MNP)$ với các mặt của tứ diện $ABCD$.</p>\n      <p>• Cho biết thiết diện của tứ diện cắt bởi mặt phẳng $(MNP)$ là hình gì?</p>\n    </div>\n\n    <p class=\"text-xs text-indigo-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Xác định đa giác thiết diện (tam giác hay tứ giác).\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3: Cho tứ diện ABCD. Lấy điểm M thuộc đoạn AB, điểm N thuộc đoạn AC và điểm P thuộc đoạn BD sao cho MP không song song với AD. Hãy xác định hình dạng thiết diện của tứ diện ABCD cắt bởi mặt phẳng MNP. Các em có 30 giây suy nghĩ.",
      "startTime": 228.22,
      "endTime": 251.11,
      "duration": 22.9
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: THIẾT DIỆN LÀ TỨ GIÁC $MNQP$",
      "subtitle": "BÀI 10 • MỤC 2 • KỸ THUẬT TÌM ĐIỂM CẮT TRÊN CẠNH $CD$",
      "mascotMode": "celebrating",
      "mascotTip": "$E = MN \\cap BC \\implies EP \\cap CD = Q \\implies$ Thiết diện là tứ giác $MNQP$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-indigo-300 uppercase mb-2\">Lời giải chi tiết Ví dụ 3:</div>\n    <div class=\"space-y-1.5 text-slate-300 font-mono\">\n      <p>• $(MNP) \\cap (ABC) = MN$.</p>\n      <p>• $(MNP) \\cap (ABD) = MP$.</p>\n      <p>• Trong $(ABC)$: Gọi $E = MN \\cap BC \\implies E \\in (MNP) \\cap (BCD)$.</p>\n      <p>• Trong $(BCD)$: Nối $EP$ cắt cạnh $CD$ tại $Q \\implies Q \\in (MNP)$.</p>\n      <p>• Khi đó: $(MNP) \\cap (BCD) = PQ$; $(MNP) \\cap (ACD) = QN$.</p>\n      <div class=\"p-2 bg-slate-900 rounded text-center text-emerald-300 font-bold my-1\">\n        Bốn đoạn giao tuyến khép kín: $MN, NQ, QP, PM$.\n      </div>\n      <p class=\"text-emerald-300 font-bold font-sans\">➔ Kết luận: Thiết diện là <b>tứ giác $MNQP$</b>.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Ta tìm các đoạn giao tuyến như sau: Trên mặt ABC, giao tuyến là đoạn MN. Trên mặt ABD, giao tuyến là đoạn MP. Để tìm giao tuyến với mặt BCD, ta kéo dài MN cắt BC tại E. Trong mặt phẳng BCD, nối E với P, đường thẳng EP cắt cạnh CD tại điểm Q. Khi đó đoạn giao tuyến trên mặt BCD là PQ; và đoạn giao tuyến trên mặt ACD là QN. Các đoạn giao tuyến khép kín lại thành tứ giác MNQP. Vậy thiết diện cần tìm là tứ giác MNQP.",
      "startTime": 251.11,
      "endTime": 253.75,
      "duration": 2.64
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: THIẾT DIỆN CẮT BỞI MẶT PHẲNG QUA 3 ĐIỂM",
      "subtitle": "BÀI 10 • MỤC 2 • BÀI TOÁN HÌNH CHÓP TỨ GIÁC $S.ABCD$",
      "mascotMode": "thinking",
      "mascotTip": "Mặt phẳng đi qua điểm trên cạnh bên và đường chéo đáy!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 4 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng cao</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là tứ giác lồi ($AB$ không song song $CD$). Điểm $M$ nằm trong $\\triangle SCD$.\n    </p>\n\n    <div class=\"bg-slate-900 p-2.5 rounded text-xs text-slate-300 space-y-1\">\n      <p>• Trong $(SCD)$, kéo dài $SM$ cắt $CD$ tại $N$.</p>\n      <p>• Khi đó $(SBM)$ chính là mặt phẳng $(SBN)$.</p>\n    </div>\n\n    <p class=\"text-xs text-amber-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Tìm giao tuyến của $(SBM)$ và $(SAC)$.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4: Cho hình chóp S.ABCD có đáy là tứ giác lồi. Lấy điểm M là một điểm nằm trong tam giác SCD. Hãy xác định giao tuyến của mặt phẳng SBM với mặt phẳng SAC. Các em có 30 giây suy nghĩ.",
      "startTime": 253.75,
      "endTime": 272.3,
      "duration": 18.55
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 2",
      "subtitle": "BÀI 10 • MỤC 2 • KỸ THUẬT MỞ RỘNG MẶT PHẲNG ĐỈNH CAO",
      "mascotMode": "celebrating",
      "mascotTip": "Mở rộng $(SBM)$ thành $(SBN)$. Giao tuyến với $(SAC)$ là $SK$ với $K = BN \\cap AC$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-1\">Lời giải chi tiết:</div>\n    <div class=\"space-y-1 text-slate-300 font-mono\">\n      <p>• Trong $(SCD)$: Kéo dài $SM$ cắt $CD$ tại $N \\implies (SBM) \\equiv (SBN)$.</p>\n      <p>• Điểm chung thứ nhất: $S \\in (SBN) \\cap (SAC)$.</p>\n      <p>• Trong mp đáy $(ABCD)$: Gọi $K = BN \\cap AC$.</p>\n      <p>  $\\implies K \\in BN \\subset (SBN)$ và $K \\in AC \\subset (SAC)$.</p>\n      <div class=\"p-1.5 bg-slate-900 rounded text-center text-emerald-300 font-bold my-1\">\n        $$(SBM) \\cap (SAC) = SK$$\n      </div>\n    </div>\n\n    <div class=\"mt-2.5 bg-gradient-to-r from-indigo-950 to-purple-950 p-2.5 rounded-lg border border-indigo-500/30\">\n      <b class=\"text-indigo-200\">⭐ BÀI HỌC CỐT LÕI MỤC 2:</b>\n      <p class=\"text-slate-300 mt-1\">\n        Luôn chủ động <b>mở rộng mặt phẳng</b> bằng cách kéo dài các đường thẳng cắt các cạnh đáy để tạo ra các điểm chung mới!\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em. Kỹ thuật mấu chốt ở bài toán này là mở rộng mặt phẳng SBM. Trong mặt phẳng SCD, tia SM cắt cạnh đáy CD tại điểm N, khi đó mặt phẳng SBM được mở rộng thành mặt phẳng SBN. Bây giờ bài toán quy về tìm giao tuyến của SBN và SAC: Điểm chung thứ nhất hiển nhiên là đỉnh S. Trong mặt phẳng đáy ABCD, đường thẳng BN cắt đường chéo AC tại điểm K. Điểm K thuộc BN nên thuộc SBN; K thuộc AC nên thuộc SAC. Do đó K là điểm chung thứ hai. Vậy giao tuyến cần tìm chính là đường thẳng SK. Chúng ta đã hoàn thành trọn vẹn Mục 2.",
      "startTime": 272.3,
      "endTime": 322.25,
      "duration": 49.94
    }
  ]
};
  root.G11_CHAPTER4_DATA.toan11_bai10_muc2 = root.G11_CHAPTER4_DATA.g11_bai10_muc2;

  root.G11_CHAPTER4_DATA.g11_bai10_muc3 = {
  "lessonId": "toan11_bai10",
  "lessonTitle": "Bài 10: Đường thẳng và mặt phẳng trong không gian",
  "sectionId": "g11_bai10_muc3",
  "sectionTitle": "Mục 3: Giao điểm đường thẳng và mặt phẳng & Thiết diện của hình chóp",
  "audio": "/audio/g11_bai10_muc3.mp3",
  "audioSrc": "./audio/g11_bai10_muc3.mp3",
  "audio_src": "./audio/g11_bai10_muc3.mp3",
  "title": "Mục 3: Giao điểm đường thẳng và mặt phẳng & Thiết diện của hình chóp",
  "owl_tip": "Để tìm giao điểm d cắt (P), tìm mặt phẳng phụ (Q) chứa d, tìm giao tuyến a = (P) cắt (Q), khi đó giao điểm là d cắt a!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. CHIẾN THUẬT TÌM THIẾT DIỆN NÂNG CAO",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. CÁC DẠNG THIẾT DIỆN THƯỜNG GẶP",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: ĐỀ TỔNG ÔN TRẮC NGHIỆM ĐÚNG/SAI BÀI 10",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT BÀI 10",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 467.76,
  "formattedDuration": "07:47",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. CHIẾN THUẬT TÌM THIẾT DIỆN NÂNG CAO",
      "subtitle": "BÀI 10 • MỤC 3 • CHINH PHỤC CÁC BÀI TOÁN PHÂN HÓA HÌNH KHÔNG GIAN",
      "mascotMode": "pointer",
      "mascotTip": "Tìm thiết diện thực chất là giải chuỗi bài toán: Tìm giao tuyến và Tìm giao điểm liên hoàn!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Chiến thuật nâng cao</span>\n      <h3 class=\"text-xl font-black text-emerald-200\">Thuật Toán Tìm Thiết Diện Liên Hoàn</h3>\n    </div>\n    <p class=\"text-sm text-slate-300 leading-relaxed\">\n      Để tìm thiết diện của hình chóp cắt bởi mặt phẳng $(\\alpha)$:<br/>\n      1. Bắt đầu từ <b>đoạn giao tuyến có sẵn</b> (qua 2 điểm đã cho cùng thuộc 1 mặt).<br/>\n      2. <b>Kéo dài giao tuyến</b> đó cắt các cạnh khác của đa giác mặt để tạo ra điểm chung mới.<br/>\n      3. Từ điểm mới, kẻ các giao tuyến tiếp theo cho đến khi <b>khép kín thành đa giác</b>.\n    </p>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 3: Kỹ năng tìm giao điểm và thiết diện nâng cao của Bài 10. Ở các câu hỏi vận dụng và vận dụng cao trong đề thi, mặt phẳng cắt thường đi qua các điểm lơ lửng trên các cạnh hoặc trong các mặt của hình chóp. Để vẽ được trọn vẹn thiết diện, chúng ta phải kết hợp nhịp nhàng giữa hai bài toán cơ bản: Tìm giao tuyến của hai mặt phẳng và tìm giao điểm của đường thẳng với mặt phẳng.",
      "startTime": 0.0,
      "endTime": 29.71,
      "duration": 29.71
    },
    {
      "sceneIndex": 2,
      "title": "2. CÁC DẠNG THIẾT DIỆN THƯỜNG GẶP",
      "subtitle": "BÀI 10 • MỤC 3 • TAM GIÁC, TỨ GIÁC, NGŨ GIÁC",
      "mascotMode": "explaining",
      "mascotTip": "Số cạnh của thiết diện không vượt quá số mặt của hình chóp!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40\">\n      <div class=\"font-bold text-cyan-300 text-sm mb-1\">Tứ diện $ABCD$ (4 mặt)</div>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • Mặt phẳng cắt 3 mặt: Thiết diện là <b>tam giác</b>.<br/>\n        • Mặt phẳng cắt 4 mặt: Thiết diện là <b>tứ giác</b>.<br/>\n        • <b class=\"text-rose-400\">Không bao giờ</b> có thiết diện là ngũ giác hay đa giác $> 4$ cạnh!\n      </p>\n    </div>\n\n    <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/40\">\n      <div class=\"font-bold text-purple-300 text-sm mb-1\">Chóp tứ giác $S.ABCD$ (5 mặt)</div>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • Cắt 3 mặt: Thiết diện là <b>tam giác</b>.<br/>\n        • Cắt 4 mặt: Thiết diện là <b>tứ giác</b>.<br/>\n        • Cắt 5 mặt: Thiết diện là <b>ngũ giác</b>.<br/>\n        • Không bao giờ có thiết diện là lục giác!\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Một quy tắc toán học quan trọng mà các em cần nhớ: Số cạnh của thiết diện không bao giờ vượt quá tổng số mặt của hình chóp đó. Đối với hình tứ diện có 4 mặt, thiết diện chỉ có thể là tam giác nếu mặt phẳng cắt 3 mặt, hoặc là tứ giác nếu mặt phẳng cắt cả 4 mặt. Đối với hình chóp tứ giác có 5 mặt, thiết diện có thể là tam giác, tứ giác hoặc ngũ giác. Nhớ được quy tắc này sẽ giúp các em loại trừ phương án sai cực nhanh khi làm bài trắc nghiệm.",
      "startTime": 29.71,
      "endTime": 64.01,
      "duration": 34.3
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: ĐIỀU KIỆN ĐỂ THIẾT DIỆN LÀ HÌNH BÌNH HÀNH",
      "subtitle": "BÀI 10 • MỤC 3 • BÀI TOÁN ĐỐI CẠNH TỨ DIỆN 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Mặt phẳng đi qua trung điểm 4 cạnh đối của tứ diện sẽ tạo ra thiết diện hình bình hành!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-3\">\n      <b>Câu 1:</b> Cho tứ diện $ABCD$. Gọi $M, N, P, Q$ lần lượt là trung điểm của các cạnh $AB, BC, CD, DA$. Tứ giác $MNPQ$ là hình gì?\n    </p>\n\n    <div class=\"grid grid-cols-4 gap-2 text-xs font-mono text-center\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Tam giác</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>B.</b> Hình bình hành</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> Ngũ giác</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Hình thang vuông</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian chọn đáp án:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 1: Cho tứ diện ABCD. Gọi M, N, P, Q lần lượt là trung điểm của các cạnh AB, BC, CD và DA. Thiết diện tạo bởi mặt phẳng MNPQ cắt tứ diện ABCD là hình gì? Phương án A: Hình tam giác; Phương án B: Hình bình hành; Phương án C: Hình ngũ giác; Phương án D: Hình thang có hai đáy không song song. Các em có 15 giây chọn đáp án.",
      "startTime": 64.01,
      "endTime": 98.83,
      "duration": 34.82
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN B HÌNH BÌNH HÀNH",
      "subtitle": "BÀI 10 • MỤC 3 • CHỨNG MINH DỰA TRÊN ĐƯỜNG TRUNG BÌNH TAM GIÁC",
      "mascotMode": "celebrating",
      "mascotTip": "$MN \\parallel AC$ và $PQ \\parallel AC \\implies MN \\parallel PQ$ và bằng nhau!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Lời giải chi tiết Ví dụ 1:</div>\n    <div class=\"space-y-1.5 text-slate-300 font-mono\">\n      <p>• Trong $\\triangle ABC$: $MN$ là đường trung bình $\\implies MN \\parallel AC$ và $MN = \\frac{1}{2}AC$.</p>\n      <p>• Trong $\\triangle ADC$: $PQ$ là đường trung bình $\\implies PQ \\parallel AC$ và $PQ = \\frac{1}{2}AC$.</p>\n      <p>• Suy ra: $\\begin{cases} MN \\parallel PQ \\\\ MN = PQ \\end{cases} \\implies MNPQ$ là <b>hình bình hành</b>.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-sans\">➔ Chọn đáp án B: Hình bình hành.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là B: Hình bình hành. Trong tam giác ABC, M là trung điểm AB và N là trung điểm BC nên MN là đường trung bình của tam giác ABC, suy ra MN song song với AC và độ dài MN bằng một nửa AC. Tương tự, trong tam giác ADC, P là trung điểm CD và Q là trung điểm DA nên PQ cũng là đường trung bình, suy ra PQ song song với AC và độ dài PQ bằng một nửa AC. Từ đó, MN vừa song song vừa bằng PQ. Tứ giác có một cặp cạnh đối song song và bằng nhau thì tứ giác đó là hình bình hành.",
      "startTime": 98.83,
      "endTime": 146.35,
      "duration": 47.52
    },
    {
      "sceneIndex": 5,
      "title": "5. PHƯƠNG PHÁP XÁC ĐỊNH THIẾT DIỆN NGŨ GIÁC",
      "subtitle": "BÀI 10 • MỤC 3 • MẶT CẮT CỰC ĐẠI CỦA HÌNH CHÓP TỨ GIÁC",
      "mascotMode": "explaining",
      "mascotTip": "Mặt phẳng cắt cả 4 mặt bên và mặt đáy của hình chóp $S.ABCD$ tạo thành ngũ giác!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-3.5 rounded-xl border border-purple-500/40 text-xs\">\n    <div class=\"font-bold text-purple-300 text-sm mb-2 flex items-center gap-2\">\n      <span>⭐</span> <span>Điều Kiện Để Thiết Diện Của $S.ABCD$ Là Ngũ Giác</span>\n    </div>\n    <p class=\"text-slate-300 leading-relaxed\">\n      • Mặt phẳng $(\\alpha)$ phải cắt <b>toàn bộ 5 mặt</b> của hình chóp:<br/>\n      • Cắt 4 cạnh bên tại 4 điểm hoặc cắt các cạnh bên và các cạnh đáy sao cho có đúng <b>5 đoạn giao tuyến</b> khép kín.<br/>\n      • Đây là đa giác có số cạnh tối đa mà một mặt phẳng có thể tạo ra khi cắt hình chóp tứ giác!\n    </p>\n  </div>\n</div>\n",
      "narration": "Một câu hỏi phân hóa rất hay xuất hiện trong các đề thi học sinh giỏi và thi thử tốt nghiệp là: Khi nào thiết diện của hình chóp tứ giác S.ABCD là một ngũ giác? Thiết diện là ngũ giác khi và chỉ khi mặt phẳng cắt đồng thời cả 4 mặt bên và mặt phẳng đáy. Khi đó, mặt phẳng cắt lần lượt 5 mặt theo 5 đoạn giao tuyến khép kín, tạo thành một hình ngũ giác.",
      "startTime": 146.35,
      "endTime": 174.24,
      "duration": 27.89
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: TÌM THIẾT DIỆN QUA 3 ĐIỂM TRÊN 3 CẠNH",
      "subtitle": "BÀI 10 • MỤC 3 • BÀI TOÁN XÁC ĐỊNH MẶT CẮT HÌNH CHÓP 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Chọn mặt phẳng phụ để kéo dài giao tuyến cắt cạnh bên còn lại!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-3\">\n      <b>Câu 2:</b> Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB \\parallel CD$, $AB = 2CD$). Gọi $M, N$ là trung điểm của $SA, SB$. Thiết diện của hình chóp cắt bởi mặt phẳng $(MNC)$ là:\n    </p>\n\n    <div class=\"grid grid-cols-4 gap-2 text-xs font-mono text-center\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Tam giác</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>B.</b> Tứ giác $MNCD$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> Ngũ giác</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Tam giác cân</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian chọn đáp án:</span>\n    </div>\n    <span class=\"text-base font-black text-cyan-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2: Cho hình chóp S.ABCD có đáy ABCD là hình thang với đáy lớn AB gấp đôi đáy nhỏ CD. Gọi M là trung điểm của SA; N là trung điểm của SB. Thiết diện của hình chóp S.ABCD cắt bởi mặt phẳng đi qua M, N và C là: Phương án A: Tam giác MNC; Phương án B: Tứ giác MNCD; Phương án C: Ngũ giác; Phương án D: Hình bình hành. Các em có 15 giây suy nghĩ.",
      "startTime": 174.24,
      "endTime": 212.02,
      "duration": 37.78
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: THIẾT DIỆN TỨ GIÁC $MNCD$",
      "subtitle": "BÀI 10 • MỤC 3 • QUAN HỆ SONG SONG $MN \\parallel CD$",
      "mascotMode": "celebrating",
      "mascotTip": "$MN \\parallel AB \\parallel CD \\implies CD \\subset (MNC) \\implies$ Thiết diện là hình thang $MNCD$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-cyan-300 uppercase mb-2\">Lời giải chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300 font-mono\">\n      <p>• Trong $\\triangle SAB$: $MN$ là đường trung bình $\\implies MN \\parallel AB$.</p>\n      <p>• Do $AB \\parallel CD$ (hình thang) $\\implies MN \\parallel CD$.</p>\n      <p>• Điểm $C \\in (MNC)$ và $MN \\parallel CD \\implies$ đường thẳng $CD \\subset (MNC)$.</p>\n      <p>• Điểm $D \\in CD \\implies D \\in (MNC)$.</p>\n      <p>• Các đoạn giao tuyến: $MN$ (trên $SAB$), $NC$ (trên $SBC$), $CD$ (trên đáy), $DM$ (trên $SAD$).</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-sans\">➔ Kết luận: Thiết diện là <b>hình thang $MNCD$</b> (chọn B).</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là B: Tứ giác MNCD. Ta có M là trung điểm SA, N là trung điểm SB nên MN là đường trung bình của tam giác SAB, suy ra MN song song với AB. Mặt khác, đáy ABCD là hình thang có AB song song với CD, nên MN song song với CD. Do MN song song với CD và mặt phẳng MNC chứa đường thẳng MN và điểm C, nên mặt phẳng MNC chứa trọn vẹn cả đường thẳng CD. Vì vậy, mặt phẳng MNC cắt mặt SCD theo đoạn CD, cắt SAD theo MD, cắt SBC theo NC và cắt SAB theo MN. Thiết diện chính là tứ giác hình thang MNCD.",
      "startTime": 212.02,
      "endTime": 266.42,
      "duration": 54.41
    },
    {
      "sceneIndex": 8,
      "title": "8. CẢNH BÁO BẪY KHI TÌM GIAO ĐIỂM HAI ĐƯỜNG THẲNG",
      "subtitle": "BÀI 10 • MỤC 3 • HAI ĐƯỜNG CÙNG THUỘC MỘT MẶT PHẲNG MỚI ĐƯỢC CẮT NHAU",
      "mascotMode": "explaining",
      "mascotTip": "Lỗi chết người: Tự ý cho 2 đường thẳng chéo nhau cắt nhau trong không gian!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-rose-950/70 to-slate-900/90 p-3.5 rounded-xl border border-rose-500/40 text-xs\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold text-xs rounded uppercase\">Cảnh báo nghiêm ngặt</span>\n      <h3 class=\"text-base font-bold text-rose-200\">Bẫy Ngộ Nhận Hai Đường Thẳng Cắt Nhau</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 mt-2\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border-l-4 border-rose-500\">\n        <b class=\"text-rose-400\">❌ Lỗi sai phổ biến</b>\n        <p class=\"text-slate-300 mt-1\">\n          Thấy đường thẳng $SA$ và $BD$ vẽ đè qua nhau trên giấy liền gọi $I = SA \\cap BD$.<br/>\n          <b class=\"text-rose-300\">Sai nghiêm trọng vì $SA$ và $BD$ là 2 đường chéo nhau!</b>\n        </p>\n      </div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border-l-4 border-emerald-500\">\n        <b class=\"text-emerald-400\">✅ Quy tắc đúng</b>\n        <p class=\"text-slate-300 mt-1\">\n          Chỉ được lấy giao điểm khi <b>chỉ rõ mặt phẳng chung</b> chứa cả hai đường thẳng:<br/>\n          \"Trong mặt phẳng $(ABCD)$, gọi $O = AC \\cap BD$\".\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thầy cảnh báo một lỗi sai chết người mà rất nhiều học sinh lớp 11 mắc phải: Đó là tự tiện cho hai đường thẳng bất kì cắt nhau khi nhìn thấy chúng đè lên nhau trên hình vẽ. Các em phải luôn khắc sâu trong đầu: Trong không gian, hai đường thẳng chỉ có thể cắt nhau nếu và chỉ nếu chúng cùng thuộc một mặt phẳng và không song song. Nếu hai đường thẳng nằm ở hai mặt phẳng khác nhau và không đồng phẳng thì chúng chéo nhau, tuyệt đối không bao giờ được lấy giao điểm.",
      "startTime": 266.42,
      "endTime": 298.75,
      "duration": 32.33
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: TÌM GIAO ĐIỂM ĐƯỜNG THẲNG VÀ MẶT PHẲNG",
      "subtitle": "BÀI 10 • MỤC 3 • ÁP DỤNG MẶT PHẲNG PHỤ CHUẨN XÁC 30 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Mặt phẳng phụ chứa $SD$ là $(SBD)$. Giao tuyến $(SBD) \\cap (AMN)$ chứa điểm cần tìm!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng cao</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Cho hình chóp $S.ABCD$ có đáy là hình bình hành. $M$ là trung điểm $SC$, $N$ là trung điểm $BC$.\n    </p>\n\n    <div class=\"bg-slate-900 p-2 rounded text-xs text-slate-300 space-y-1\">\n      <p>• Chọn mặt phẳng phụ $(\\beta) = (SBD)$ chứa đường thẳng $SD$.</p>\n      <p>• Tìm giao tuyến của $(SBD)$ với $(AMN)$.</p>\n    </div>\n\n    <p class=\"text-xs text-indigo-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Xác định giao điểm $K = SD \\cap (AMN)$.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Gọi M là trung điểm của SC, N là trung điểm của BC. Tìm giao điểm của đường thẳng SD với mặt phẳng AMN. Các em có 30 giây suy nghĩ.",
      "startTime": 298.75,
      "endTime": 318.5,
      "duration": 19.75
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: GIAO ĐIỂM $K = SD \\cap (AMN)$",
      "subtitle": "BÀI 10 • MỤC 3 • TRÌNH BÀY LỜI GIẢI CHUẨN MỰC BỘ GD&ĐT",
      "mascotMode": "celebrating",
      "mascotTip": "$I = AN \\cap BD, J = SO \\cap AM \\implies IJ$ là giao tuyến $\\implies K = SD \\cap IJ$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-indigo-300 uppercase mb-2\">Các bước giải chi tiết Ví dụ 3:</div>\n    <div class=\"space-y-1.5 text-slate-300 font-mono\">\n      <p>• <b>Bước 1:</b> Chọn mp phụ $(SBD) \\supset SD$.</p>\n      <p>• <b>Bước 2: Tìm giao tuyến $(AMN) \\cap (SBD)$:</b></p>\n      <p>  - Trong đáy $(ABCD)$: Gọi $I = AN \\cap BD \\implies I \\in (AMN) \\cap (SBD)$.</p>\n      <p>  - Trong $(SAC)$: Gọi $J = AM \\cap SO$ (với $O = AC \\cap BD$) $\\implies J \\in (AMN) \\cap (SBD)$.</p>\n      <p>  - Do đó: $(AMN) \\cap (SBD) = IJ$.</p>\n      <p>• <b>Bước 3:</b> Trong $(SBD)$, gọi $K = SD \\cap IJ$.</p>\n      <div class=\"mt-2 p-1.5 bg-slate-900 rounded text-center text-emerald-300 font-bold font-sans\">\n        ➔ Kết luận: $K = SD \\cap (AMN)$.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Đã hết thời gian. Lời giải chuẩn mực như sau: Chọn mặt phẳng phụ SBD chứa SD. Trong mặt phẳng đáy ABCD, gọi I là giao điểm của AN và BD. Trong mặt phẳng SAC, gọi J là giao điểm của đường chéo SO với AM. Khi đó I thuộc AN nên thuộc AMN, I thuộc BD nên thuộc SBD. Điểm J thuộc AM nên thuộc AMN, J thuộc SO nên thuộc SBD. Vậy đường thẳng IJ chính là giao tuyến của mặt phẳng AMN với mặt phẳng phụ SBD. Trong mặt phẳng SBD, đường thẳng IJ cắt cạnh SD tại điểm K. Điểm K chính là giao điểm của SD với mặt phẳng AMN.",
      "startTime": 318.5,
      "endTime": 369.1,
      "duration": 50.59
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: ĐỀ TỔNG ÔN TRẮC NGHIỆM ĐÚNG/SAI BÀI 10",
      "subtitle": "BÀI 10 • MỤC 3 • ĐỊNH DẠNG ĐỀ THI MỚI 4 Ý a, b, c, d",
      "mascotMode": "thinking",
      "mascotTip": "Xét 4 mệnh đề độc lập: a) Vị trí điểm; b) Giao tuyến; c) Giao điểm; d) Thiết diện!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 4 (Đúng/Sai - 30s)</span>\n      <span class=\"text-xs text-slate-400\">Chuẩn Bộ GD&ĐT</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Xét tính Đúng/Sai:\n    </p>\n\n    <div class=\"space-y-1 text-xs text-slate-200\">\n      <p><b>a)</b> Giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng qua $S$ và song song với $AB$.</p>\n      <p><b>b)</b> Đường thẳng $SO$ nằm trong mặt phẳng $(SBD)$.</p>\n      <p><b>c)</b> Ba điểm $S, A, C$ cùng thuộc một đường thẳng.</p>\n      <p><b>d)</b> Thiết diện của hình chóp cắt bởi mặt phẳng $(SAC)$ là tam giác $SAC$.</p>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4 là câu hỏi Trắc nghiệm Đúng/Sai 4 ý chuẩn cấu trúc đề thi của Bộ GD&ĐT. Cho hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O. Xét tính Đúng hoặc Sai của 4 khẳng định sau: Ý a: Giao tuyến của hai mặt phẳng SAB và SCD là đường thẳng đi qua S và song song với AB; Ý b: Đường thẳng SO nằm trong mặt phẳng SBD; Ý c: Ba điểm S, A, C thẳng hàng; Ý d: Thiết diện của hình chóp cắt bởi mặt phẳng SAC là tam giác SAC. Các em có 30 giây suy nghĩ.",
      "startTime": 369.1,
      "endTime": 412.22,
      "duration": 43.13
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT BÀI 10",
      "subtitle": "BÀI 10 • MỤC 3 • KẾT QUẢ: a-ĐÚNG, b-ĐÚNG, c-SAI, d-ĐÚNG",
      "mascotMode": "celebrating",
      "mascotTip": "Chúc mừng các em đã làm chủ trọn vẹn Bài 10: Nền tảng hình học không gian 3 chiều!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"space-y-1.5 text-slate-300\">\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>a)</b> $(SAB) \\cap (SCD) = d$ qua $S$ và $d \\parallel AB \\parallel CD$.</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>b)</b> $S \\in (SBD)$ và $O \\in BD \\subset (SBD) \\implies SO \\subset (SBD)$.</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>c)</b> $S$ không thuộc đáy $(ABCD)$ nên $S, A, C$ tạo thành tam giác.</span>\n        <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold rounded\">SAI</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>d)</b> Mặt phẳng $(SAC)$ cắt hình chóp tạo thiết diện là tam giác $SAC$.</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n    </div>\n\n    <div class=\"mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30 text-xs\">\n      <div class=\"font-bold text-emerald-200 mb-1 flex items-center gap-1.5\">\n        <span>🎉</span> <span>HOÀN THÀNH XUẤT SẮC TOÀN BỘ BÀI 10!</span>\n      </div>\n      <p class=\"text-slate-300\">\n        Các em đã thành thạo: 6 tính chất thừa nhận, 3 cách xác định mặt phẳng, phương pháp tìm giao tuyến, giao điểm $d \\cap (\\alpha)$ và thiết diện hình chóp!\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em. Thầy cùng các em thẩm định: Mệnh đề a: Hai mặt phẳng SAB và SCD lần lượt chứa hai đường thẳng song song AB và CD, điểm chung là S, nên giao tuyến là đường thẳng qua S và song song với AB. Đúng. Mệnh đề b: S thuộc SBD, O thuộc BD nên SO nằm trong SBD. Đúng. Mệnh đề c: S nằm ngoài mặt đáy ABCD nên ba điểm S, A, C tạo thành tam giác SAC, không thể thẳng hàng. Mệnh đề c Sai. Mệnh đề d: Mặt phẳng SAC cắt các mặt SAB theo SA, SBC theo SC và đáy theo AC, tạo thành tam giác SAC. Đúng. Như vậy chúng ta đã hoàn thành xuất sắc toàn bộ Bài 10.",
      "startTime": 412.22,
      "endTime": 467.76,
      "duration": 55.54
    }
  ]
};
  root.G11_CHAPTER4_DATA.toan11_bai10_muc3 = root.G11_CHAPTER4_DATA.g11_bai10_muc3;

  root.G11_CHAPTER4_DATA.g11_bai11_muc1 = {
  "lessonId": "toan11_bai11",
  "lessonTitle": "Bài 11: Hai đường thẳng song song trong không gian",
  "sectionId": "g11_bai11_muc1",
  "sectionTitle": "Mục 1: Vị trí tương đối của hai đường thẳng (chéo nhau, cắt nhau, song song, trùng nhau)",
  "audio": "/audio/g11_bai11_muc1.mp3",
  "audioSrc": "./audio/g11_bai11_muc1.mp3",
  "audio_src": "./audio/g11_bai11_muc1.mp3",
  "title": "Mục 1: Vị trí tương đối của hai đường thẳng (chéo nhau, cắt nhau, song song, trùng nhau)",
  "owl_tip": "Hai đường thẳng đồng phẳng thì cắt nhau, song song hoặc trùng nhau. Không đồng phẳng thì chéo nhau!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. VỊ TRÍ TƯƠNG ĐỐI CỦA HAI ĐƯỜNG THẲNG",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. ĐỊNH NGHĨA HAI ĐƯỜNG THẲNG SONG SONG",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: ĐẾM SỐ CẶP CẠNH CHÉO NHAU CỦA TỨ DIỆN",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 1",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 377.42,
  "formattedDuration": "06:17",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. VỊ TRÍ TƯƠNG ĐỐI CỦA HAI ĐƯỜNG THẲNG",
      "subtitle": "BÀI 11 • MỤC 1 • PHÂN BIỆT ĐỒNG PHẲNG VÀ CHÉO NHAU",
      "mascotMode": "pointer",
      "mascotTip": "Trong không gian, 2 đường thẳng có thể: Cắt nhau, Song song, Trùng nhau hoặc Chéo nhau!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/60 to-indigo-900/40 p-4 rounded-xl border border-blue-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Khái niệm cốt lõi</span>\n      <h3 class=\"text-xl font-black text-blue-200\">4 Vị Trí Tương Đối Của Hai Đường Thẳng $a$ và $b$</h3>\n    </div>\n    <p class=\"text-sm text-slate-300 leading-relaxed\">\n      Dựa vào tính đồng phẳng và số điểm chung, ta chia thành 2 trường hợp lớn:\n    </p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md\">\n      <h4 class=\"font-bold text-emerald-300 text-sm mb-1\">Trường hợp 1: Đồng phẳng (cùng thuộc 1 mp)</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • <b>Cắt nhau:</b> Có duy nhất 1 điểm chung ($a \\cap b = \\{M\\}$).<br/>\n        • <b>Song song:</b> Cùng thuộc một mặt phẳng và không có điểm chung ($a \\parallel b$).<br/>\n        • <b>Trùng nhau:</b> Có vô số điểm chung ($a \\equiv b$).\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-amber-400 shadow-md\">\n      <h4 class=\"font-bold text-amber-300 text-sm mb-1\">Trường hợp 2: Không đồng phẳng</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • <b>Chéo nhau:</b> Không cùng thuộc bất kì mặt phẳng nào.<br/>\n        • Hai đường thẳng chéo nhau thì <b>không có điểm chung</b>.<br/>\n        • <b class=\"text-rose-400\">Lưu ý:</b> Không có điểm chung chưa chắc song song! Có thể chéo nhau!\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Bài 11: Hai đường thẳng song song trong không gian. Ở hình học phẳng lớp dưới, hai đường thẳng phân biệt chỉ có thể cắt nhau hoặc song song. Nhưng trong không gian ba chiều, có một trường hợp hoàn toàn mới và vô cùng thú vị, đó là hai đường thẳng chéo nhau, tức là chúng không cùng nằm trong bất kì một mặt phẳng nào và không bao giờ cắt nhau.",
      "startTime": 0.0,
      "endTime": 27.74,
      "duration": 27.74
    },
    {
      "sceneIndex": 2,
      "title": "2. ĐỊNH NGHĨA HAI ĐƯỜNG THẲNG SONG SONG",
      "subtitle": "BÀI 11 • MỤC 1 • HAI ĐIỀU KIỆN BẮT BUỘC: ĐỒNG PHẲNG VÀ KHÔNG ĐIỂM CHUNG",
      "mascotMode": "explaining",
      "mascotTip": "$a \\parallel b \\iff$ Tồn tại mặt phẳng $(\\alpha)$ chứa cả $a, b$ và $a \\cap b = \\emptyset$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-cyan-500/40 text-center shadow-lg\">\n    <div class=\"text-xs uppercase tracking-widest text-cyan-400 font-bold mb-1\">Định nghĩa toán học chính thức</div>\n    <div class=\"text-xl font-black text-cyan-200 py-1 font-mono\">\n      $$a \\parallel b \\iff \\begin{cases} a, b \\subset (\\alpha) \\\\ a \\cap b = \\emptyset \\end{cases}$$\n    </div>\n    <div class=\"text-xs text-slate-300 mt-2\">\n      Hai đường thẳng song song là hai đường thẳng <b>cùng nằm trong một mặt phẳng</b> và <b>không có điểm chung</b>.\n    </div>\n  </div>\n\n  <div class=\"bg-amber-950/40 p-3 rounded-lg border border-amber-500/30 text-xs text-amber-200\">\n    ⚠️ <b>Cảnh báo bẫy trắc nghiệm:</b> Câu nói: \"Hai đường thẳng không có điểm chung thì song song\" là <b>SAI HOÀN TOÀN</b>! Vì chúng có thể <b>chéo nhau</b>!\n  </div>\n</div>\n",
      "narration": "Định nghĩa chính xác: Hai đường thẳng được gọi là song song nếu chúng cùng nằm trong một mặt phẳng và không có điểm chung. Kí hiệu là a song song b. Các em hãy chú ý: Trong không gian, điều kiện không có điểm chung là chưa đủ để khẳng định song song, mà bắt buộc phải có điều kiện đồng phẳng đi kèm. Nếu thiếu điều kiện đồng phẳng, chúng có thể chéo nhau.",
      "startTime": 27.74,
      "endTime": 54.1,
      "duration": 26.35
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: VỊ TRÍ TƯƠNG ĐỐI TRONG HÌNH TỨ DIỆN",
      "subtitle": "BÀI 11 • MỤC 1 • NHẬN DIỆN ĐƯỜNG THẲNG CHÉO NHAU 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Hai cạnh đối diện của hình tứ diện như $AB$ và $CD$ luôn luôn chéo nhau!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Nhận biết</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-3\">\n      <b>Câu 1:</b> Cho hình tứ diện $ABCD$. Cặp đường thẳng $AB$ và $CD$ có vị trí tương đối là:\n    </p>\n\n    <div class=\"grid grid-cols-4 gap-2 text-xs font-mono text-center\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Song song</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> Cắt nhau</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>C.</b> Chéo nhau</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Trùng nhau</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian chọn đáp án:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 1: Cho tứ diện ABCD. Vị trí tương đối của hai đường thẳng AB và CD là: Phương án A: Song song; Phương án B: Cắt nhau; Phương án C: Chéo nhau; Phương án D: Trùng nhau. Các em có 15 giây chọn đáp án.",
      "startTime": 54.1,
      "endTime": 75.55,
      "duration": 21.46
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN C CHÉO NHAU",
      "subtitle": "BÀI 11 • MỤC 1 • CHỨNG MINH BẰNG PHẢN CHỨNG KHÔNG ĐỒNG PHẲNG",
      "mascotMode": "celebrating",
      "mascotTip": "Nếu $AB$ và $CD$ đồng phẳng thì 4 điểm $A, B, C, D$ đồng phẳng (mâu thuẫn với giả thiết tứ diện)!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Chứng minh phản chứng mẫu mực:</div>\n    <div class=\"space-y-1.5 text-slate-300 font-mono\">\n      <p>• Giả sử $AB$ và $CD$ đồng phẳng, tức là cùng thuộc mặt phẳng $(P)$.</p>\n      <p>• Khi đó: $A, B \\in AB \\subset (P) \\implies A, B \\in (P)$.</p>\n      <p>  Và: $C, D \\in CD \\subset (P) \\implies C, D \\in (P)$.</p>\n      <p>• Suy ra bốn điểm $A, B, C, D$ cùng thuộc mặt phẳng $(P)$ (mâu thuẫn với giả thiết $ABCD$ là tứ diện).</p>\n      <p>• Vậy: $AB$ và $CD$ <b>chéo nhau</b>.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-sans\">➔ Chọn đáp án C: Chéo nhau.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là C: Chéo nhau. Chứng minh cực kì chặt chẽ bằng phản chứng: Giả sử AB và CD không chéo nhau, tức là chúng cùng thuộc một mặt phẳng (P). Khi đó cả 4 điểm A, B, C, D đều thuộc mặt phẳng (P). Điều này mâu thuẫn với định nghĩa tứ diện ABCD có 4 đỉnh không đồng phẳng. Vậy điều giả sử là sai, suy ra AB và CD chéo nhau.",
      "startTime": 75.55,
      "endTime": 108.7,
      "duration": 33.14
    },
    {
      "sceneIndex": 5,
      "title": "5. BẢNG PHÂN LOẠI VỊ TRÍ TƯƠNG ĐỐI TRONG HÌNH CHÓP",
      "subtitle": "BÀI 11 • MỤC 1 • HỆ THỐNG CÁC CẶP CẠNH CỦA HÌNH CHÓP $S.ABCD$",
      "mascotMode": "explaining",
      "mascotTip": "Cạnh bên và cạnh đáy không đi qua cùng 1 đỉnh thì CHÉO NHAU (ví dụ $SA$ và $BC$)!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"overflow-x-auto\">\n    <table class=\"w-full text-xs text-left border-collapse\">\n      <thead>\n        <tr class=\"bg-slate-700 text-slate-200\">\n          <th class=\"p-2 border border-slate-600\">Cặp đường thẳng</th>\n          <th class=\"p-2 border border-slate-600\">Vị trí tương đối</th>\n          <th class=\"p-2 border border-slate-600\">Giải thích bản chất</th>\n        </tr>\n      </thead>\n      <tbody class=\"text-slate-300\">\n        <tr class=\"bg-slate-800/80\">\n          <td class=\"p-2 border border-slate-600 font-bold text-emerald-300\">$AB$ và $CD$</td>\n          <td class=\"p-2 border border-slate-600 font-semibold text-emerald-400\">Song song</td>\n          <td class=\"p-2 border border-slate-600\">Cùng thuộc mp đáy $(ABCD)$ và là 2 cạnh đối hình bình hành.</td>\n        </tr>\n        <tr class=\"bg-slate-800/50\">\n          <td class=\"p-2 border border-slate-600 font-bold text-cyan-300\">$AC$ và $BD$</td>\n          <td class=\"p-2 border border-slate-600 font-semibold text-cyan-400\">Cắt nhau</td>\n          <td class=\"p-2 border border-slate-600\">Cùng thuộc mp đáy $(ABCD)$, cắt nhau tại tâm $O$.</td>\n        </tr>\n        <tr class=\"bg-slate-800/80\">\n          <td class=\"p-2 border border-slate-600 font-bold text-purple-300\">$SA$ và $AB$</td>\n          <td class=\"p-2 border border-slate-600 font-semibold text-purple-400\">Cắt nhau</td>\n          <td class=\"p-2 border border-slate-600\">Cùng thuộc mp bên $(SAB)$, cắt nhau tại đỉnh $A$.</td>\n        </tr>\n        <tr class=\"bg-slate-800/50\">\n          <td class=\"p-2 border border-slate-600 font-bold text-amber-300\">$SA$ và $BC$</td>\n          <td class=\"p-2 border border-slate-600 font-semibold text-amber-400\">Chéo nhau</td>\n          <td class=\"p-2 border border-slate-600\">Không cùng thuộc bất kì mặt phẳng nào.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n",
      "narration": "Trong hình chóp S.ABCD có đáy là hình bình hành, việc nhận diện nhanh các cặp cạnh có vị trí tương đối nào là một kỹ năng phản xạ quan trọng. Cặp cạnh đối đáy AB và CD là song song. Cặp đường chéo đáy AC và BD là cắt nhau tại tâm O. Cạnh bên SA và cạnh đáy AB là cắt nhau tại A. Còn cạnh bên SA và cạnh đáy BC không có điểm chung và không đồng phẳng nên chúng chéo nhau.",
      "startTime": 108.7,
      "endTime": 140.57,
      "duration": 31.87
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: XÁC ĐỊNH CẶP ĐƯỜNG THẲNG CHÉO NHAU",
      "subtitle": "BÀI 11 • MỤC 1 • LUYỆN PHẢN XẠ NHANH 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Tìm cặp đường thẳng không có đỉnh chung và không nằm trên cùng một mặt tam giác hay mặt đáy!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-3\">\n      <b>Câu 2:</b> Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB \\parallel CD$, $AB > CD$). Cặp đường thẳng nào sau đây <b>chéo nhau</b>?\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs font-mono\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> $AB$ và $CD$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> $SA$ và $SC$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>C.</b> $SB$ và $CD$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> $AD$ và $BC$</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian chọn đáp án:</span>\n    </div>\n    <span class=\"text-base font-black text-cyan-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2: Cho hình chóp S.ABCD có đáy ABCD là hình thang với đáy lớn AB song song đáy nhỏ CD. Trong các cặp đường thẳng sau, cặp đường thẳng nào chéo nhau? Phương án A: AB và CD; Phương án B: SA và SC; Phương án C: SB và CD; Phương án D: AD và BC. Các em có 15 giây chọn đáp án.",
      "startTime": 140.57,
      "endTime": 171.67,
      "duration": 31.1
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: ĐÁP ÁN C: $SB$ VÀ $CD$",
      "subtitle": "BÀI 11 • MỤC 1 • LOẠI TRỪ CHUẨN XÁC CÁC PHƯƠNG ÁN ĐỒNG PHẲNG",
      "mascotMode": "celebrating",
      "mascotTip": "$AB \\parallel CD$ (song song); $SA, SC$ cắt nhau tại $S$; $AD, BC$ cắt nhau tại $E \\implies SB$ và $CD$ chéo nhau!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-cyan-300 uppercase mb-2\">Lời giải chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• <b>Phương án A:</b> $AB \\parallel CD$ (hai đáy hình thang, song song).</p>\n      <p>• <b>Phương án B:</b> $SA$ và $SC$ cùng nằm trong mp $(SAC)$ và cắt nhau tại $S$.</p>\n      <p>• <b>Phương án D:</b> $AD$ và $BC$ cùng nằm trong đáy $(ABCD)$, cắt nhau tại giao điểm của 2 cạnh bên.</p>\n      <p>• <b>Phương án C:</b> $SB$ và $CD$ không đồng phẳng $\\implies$ <b>chéo nhau</b>.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án C.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là C: SB và CD là hai đường thẳng chéo nhau. Phương án A: AB và CD là hai cạnh đáy hình thang nên song song. Phương án B: SA và SC cùng thuộc mặt phẳng chéo SAC và cắt nhau tại đỉnh S. Phương án D: AD và BC là hai cạnh bên của hình thang không song song nên cắt nhau trong mặt phẳng đáy. Chỉ có cặp SB và CD là không cùng nằm trong bất kì mặt phẳng nào, do đó chúng chéo nhau.",
      "startTime": 171.67,
      "endTime": 208.46,
      "duration": 36.79
    },
    {
      "sceneIndex": 8,
      "title": "8. HIỆN TƯỢNG ĐƯỜNG THẲNG CHÉO NHAU TRONG THỰC TẾ",
      "subtitle": "BÀI 11 • MỤC 1 • CẦU VƯỢT GIAO THÔNG VÀ DÂY ĐIỆN KHÔNG GIAN",
      "mascotMode": "explaining",
      "mascotTip": "Cầu vượt cho xe chạy bên trên và đường bộ bên dưới chính là mô hình 2 đường thẳng chéo nhau!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-indigo-900/60 to-purple-900/40 p-4 rounded-xl border border-indigo-500/30 text-xs\">\n    <div class=\"font-bold text-indigo-300 text-sm mb-2 flex items-center gap-2\">\n      <span>🌉</span> <span>Hình Ảnh Thực Tế Của Hai Đường Thẳng Chéo Nhau</span>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3\">\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-l-4 border-indigo-400\">\n        <b class=\"text-indigo-300\">Cầu vượt giao thông</b>\n        <p class=\"text-slate-300 mt-1\">Đường trên cầu và đường dưới gầm cầu chéo nhau: nhìn hình chiếu thì giao nhau nhưng thực tế cách nhau một khoảng an toàn, không có điểm chạm!</p>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-l-4 border-purple-400\">\n        <b class=\"text-purple-300\">Đường bay máy bay</b>\n        <p class=\"text-slate-300 mt-1\">Hai máy bay bay theo hai hướng chéo nhau ở độ cao 8.000m và 10.000m không hề va chạm vì không cùng nằm trên một mặt phẳng bay.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Trong đời sống thực tế, các em thường xuyên bắt gặp mô hình của hai đường thẳng chéo nhau. Điển hình nhất là hệ thống cầu vượt giao thông: Con đường trên cầu vượt và con đường dưới mặt đất bắt chéo qua nhau khi nhìn từ trên vệ tinh xuống, nhưng xe cộ lưu thông ở hai tầng hoàn toàn độc lập và không bao giờ xảy ra va chạm hay cắt nhau. Tương tự là đường bay của hai chiếc máy bay ở hai tầng độ cao khác nhau hay các đường dây điện chéo nhau trên không trung.",
      "startTime": 208.46,
      "endTime": 240.43,
      "duration": 31.97
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: TÌM VỊ TRÍ ĐOẠN NỐI TRUNG ĐIỂM",
      "subtitle": "BÀI 11 • MỤC 1 • VẬN DỤNG TRONG HÌNH TỨ DIỆN 30 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Gọi $M$ là trung điểm $AB$, $N$ là trung điểm $CD$. $MN$ gọi là đoạn nối trung điểm hai cạnh đối diện!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-3\">\n      <b>Câu 3:</b> Cho tứ diện $ABCD$. Gọi $M$ là trung điểm của $AB$, $N$ là trung điểm của $CD$. Vị trí tương đối của hai đường thẳng $MN$ và $BC$ là:\n    </p>\n\n    <div class=\"grid grid-cols-4 gap-2 text-xs font-mono text-center\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Song song</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> Cắt nhau</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>C.</b> Chéo nhau</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Trùng nhau</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3: Cho tứ diện ABCD. Gọi M và N lần lượt là trung điểm của các cạnh AB và CD. Vị trí tương đối của đường thẳng MN với đường thẳng BC là gì? Phương án A: Song song; Phương án B: Cắt nhau; Phương án C: Chéo nhau; Phương án D: Trùng nhau. Các em có 30 giây suy nghĩ.",
      "startTime": 240.43,
      "endTime": 267.72,
      "duration": 27.29
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: $MN$ VÀ $BC$ CHÉO NHAU",
      "subtitle": "BÀI 11 • MỤC 1 • CHỨNG MINH KHÔNG THỂ CÙNG NẰM TRONG MỘT MẶT PHẲNG",
      "mascotMode": "celebrating",
      "mascotTip": "Nếu $MN$ và $BC$ đồng phẳng thì $A \\in (BCD)$ (vô lý)!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-indigo-300 uppercase mb-2\">Chứng minh phản chứng chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300 font-mono\">\n      <p>• Giả sử $MN$ và $BC$ đồng phẳng, cùng thuộc mặt phẳng $(P)$.</p>\n      <p>• Ta có: $B, C \\in (P)$ và $N \\in (P)$. Vì $N \\in CD \\implies D \\in (P)$.</p>\n      <p>  Do đó $(P) \\equiv (BCD)$.</p>\n      <p>• Lại có $M \\in (P) \\equiv (BCD)$. Mà $M \\in AB \\implies A \\in (BCD)$.</p>\n      <p>• Khi đó cả 4 điểm $A, B, C, D$ cùng thuộc $(BCD)$ $\\implies$ Mâu thuẫn với định nghĩa tứ diện!</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-sans\">➔ Kết luận: $MN$ và $BC$ <b>chéo nhau</b> (chọn C).</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là C: MN và BC chéo nhau. Chứng minh phản chứng: Giả sử MN và BC cùng nằm trong một mặt phẳng (P). Khi đó điểm B, C, N đều thuộc (P). Vì N là trung điểm của CD nên điểm D cũng phải thuộc (P), do đó mặt phẳng (P) chính là mặt phẳng BCD. Mặt khác, điểm M thuộc (P), tức M thuộc BCD. Vì M là trung điểm AB nên điểm A cũng phải thuộc mặt phẳng BCD. Điều này dẫn đến 4 điểm A, B, C, D đồng phẳng, mâu thuẫn với giả thiết ABCD là tứ diện. Vậy MN và BC chéo nhau.",
      "startTime": 267.72,
      "endTime": 320.16,
      "duration": 52.44
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: ĐẾM SỐ CẶP CẠNH CHÉO NHAU CỦA TỨ DIỆN",
      "subtitle": "BÀI 11 • MỤC 1 • BÀI TOÁN TỔ HỢP ĐẾM HÌNH HỌC 30 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Tứ diện có 6 cạnh: $(AB, CD); (AC, BD); (AD, BC) \\implies$ đúng 3 cặp cạnh chéo nhau!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 4 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Tư duy tổ hợp hình học</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-3\">\n      <b>Câu 4:</b> Trong hình tứ diện $ABCD$, có tất cả bao nhiêu cặp cạnh <b>chéo nhau</b>?\n    </p>\n\n    <div class=\"grid grid-cols-4 gap-2 text-xs font-mono text-center\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> 2 cặp</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>B.</b> 3 cặp</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> 4 cặp</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> 6 cặp</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4: Một hình tứ diện có tất cả bao nhiêu cặp cạnh đối diện chéo nhau? Phương án A: 2 cặp; Phương án B: 3 cặp; Phương án C: 4 cặp; Phương án D: 6 cặp. Các em có 30 giây suy nghĩ.",
      "startTime": 320.16,
      "endTime": 338.78,
      "duration": 18.62
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 1",
      "subtitle": "BÀI 11 • MỤC 1 • KẾT QUẢ ĐẸP: ĐÚNG 3 CẶP CẠNH ĐỐI DIỆN",
      "mascotMode": "celebrating",
      "mascotTip": "Tứ diện $ABCD$ có đúng 3 cặp cạnh chéo nhau: $(AB, CD)$, $(AC, BD)$, $(AD, BC)$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-1\">Tổng hợp 3 cặp cạnh chéo nhau của tứ diện:</div>\n    <div class=\"grid grid-cols-3 gap-2 my-2 text-center font-mono font-bold\">\n      <div class=\"bg-slate-900 p-2 rounded text-cyan-200\">1. $(AB, CD)$</div>\n      <div class=\"bg-slate-900 p-2 rounded text-emerald-200\">2. $(AC, BD)$</div>\n      <div class=\"bg-slate-900 p-2 rounded text-amber-200\">3. $(AD, BC)$</div>\n    </div>\n\n    <div class=\"mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30\">\n      <b class=\"text-emerald-200\">⭐ TỔNG KẾT MỤC 1 CẦN NHỚ:</b>\n      <p class=\"text-slate-300 mt-1\">\n        • Hai đường thẳng trong không gian có 4 vị trí: Cắt nhau, Song song, Trùng nhau, Chéo nhau.<br/>\n        • Hai đường thẳng song song: Vừa đồng phẳng vừa không có điểm chung.<br/>\n        • Hai đường thẳng chéo nhau: Không đồng phẳng và không có điểm chung.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em. Tứ diện ABCD có 4 đỉnh và 6 cạnh. Cứ mỗi cạnh sẽ có đúng một cạnh đối diện không có điểm chung với nó: Cạnh AB đối diện với CD; Cạnh AC đối diện với BD; Cạnh AD đối diện với BC. Ba cặp cạnh đối diện này đều không đồng phẳng nên chúng chéo nhau từng đôi một. Vậy có đúng 3 cặp cạnh chéo nhau. Như vậy, chúng ta đã làm chủ trọn vẹn Mục 1. Hãy cùng bước sang Mục 2 để tìm hiểu về tính chất hai đường thẳng song song và định lí ba giao tuyến.",
      "startTime": 338.78,
      "endTime": 377.42,
      "duration": 38.64
    }
  ]
};
  root.G11_CHAPTER4_DATA.toan11_bai11_muc1 = root.G11_CHAPTER4_DATA.g11_bai11_muc1;

  root.G11_CHAPTER4_DATA.g11_bai11_muc2 = {
  "lessonId": "toan11_bai11",
  "lessonTitle": "Bài 11: Hai đường thẳng song song trong không gian",
  "sectionId": "g11_bai11_muc2",
  "sectionTitle": "Mục 2: Tính chất hai đường thẳng song song & Định lí ba giao tuyến",
  "audio": "/audio/g11_bai11_muc2.mp3",
  "audioSrc": "./audio/g11_bai11_muc2.mp3",
  "audio_src": "./audio/g11_bai11_muc2.mp3",
  "title": "Mục 2: Tính chất hai đường thẳng song song & Định lí ba giao tuyến",
  "owl_tip": "Ba mặt phẳng cắt nhau từng đôi một theo ba giao tuyến phân biệt thì ba giao tuyến đó hoặc song song hoặc đồng quy!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. HAI TÍNH CHẤT CƠ BẢN CỦA ĐƯỜNG THẲNG SONG SONG",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. ĐỊNH LÍ BA GIAO TUYẾN KINH ĐIỂN",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: ĐỀ TỔNG ÔN TRẮC NGHIỆM ĐÚNG/SAI BÀI 11",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT BÀI 11",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 437.74,
  "formattedDuration": "07:17",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. HAI TÍNH CHẤT CƠ BẢN CỦA ĐƯỜNG THẲNG SONG SONG",
      "subtitle": "BÀI 11 • MỤC 2 • TIÊN ĐỀ Ơ-CLÍT TRONG KHÔNG GIAN VÀ TÍNH BẮC CẦU",
      "mascotMode": "pointer",
      "mascotTip": "Trong không gian: Qua 1 điểm ngoài đường thẳng, có duy nhất 1 đường thẳng song song!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40\">\n      <div class=\"font-bold text-cyan-300 text-sm mb-1\">Tính chất 1 (Tiên đề Ơ-clít)</div>\n      <p class=\"text-slate-300 leading-relaxed\">\n        Trong không gian, qua một điểm $M$ không thuộc đường thẳng $d$, có <b>một và chỉ một</b> đường thẳng $d'$ song song với $d$.\n      </p>\n      <div class=\"mt-2 bg-slate-900 p-2 rounded text-cyan-200 font-mono text-center\">\n        $M \\notin d \\implies \\exists! d': M \\in d'$ và $d' \\parallel d$\n      </div>\n    </div>\n\n    <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40\">\n      <div class=\"font-bold text-emerald-300 text-sm mb-1\">Tính chất 2 (Tính bắc cầu)</div>\n      <p class=\"text-slate-300 leading-relaxed\">\n        Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau.\n      </p>\n      <div class=\"mt-2 bg-slate-900 p-2 rounded text-emerald-200 font-mono text-center\">\n        $\\begin{cases} a \\parallel c \\\\ b \\parallel c \\\\ a \\ne b \\end{cases} \\implies a \\parallel b$\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 2: Tính chất của hai đường thẳng song song và định lí ba giao tuyến. Tính chất thứ nhất là sự mở rộng của tiên đề Ơ-clít vào không gian: Trong không gian, qua một điểm không thuộc đường thẳng d cho trước, có một và chỉ một đường thẳng song song với d. Tính chất thứ hai là tính bắc cầu: Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau.",
      "startTime": 0.0,
      "endTime": 29.47,
      "duration": 29.47
    },
    {
      "sceneIndex": 2,
      "title": "2. ĐỊNH LÍ BA GIAO TUYẾN KINH ĐIỂN",
      "subtitle": "BÀI 11 • MỤC 2 • ĐỒNG QUY HOẶC ĐÔI MỘT SONG SONG",
      "mascotMode": "explaining",
      "mascotTip": "Ba mặt phẳng đôi một cắt nhau theo 3 giao tuyến thì 3 giao tuyến đó hoặc ĐỒNG QUY hoặc ĐÔI MỘT SONG SONG!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-indigo-500/40 text-xs\">\n    <div class=\"font-bold text-indigo-300 text-sm mb-2 text-center uppercase tracking-wider\">\n      Định Lí Ba Giao Tuyến & Hệ Quả Trọng Tâm\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 mt-2\">\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-cyan-400\">\n        <b class=\"text-cyan-300\">Định lí gốc:</b>\n        <p class=\"text-slate-300 mt-1 font-mono\">\n          $(\\alpha) \\cap (\\beta) = a$<br/>\n          $(\\beta) \\cap (\\gamma) = b$<br/>\n          $(\\gamma) \\cap (\\alpha) = c$<br/>\n          $\\implies$ Hoặc $a, b, c$ <b>đồng quy</b>, hoặc $a \\parallel b \\parallel c$.\n        </p>\n      </div>\n\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-400\">\n        <b class=\"text-emerald-300\">Hệ quả giao tuyến song song:</b>\n        <p class=\"text-slate-300 mt-1 font-mono\">\n          $\\begin{cases} d_1 \\subset (\\alpha), d_2 \\subset (\\beta) \\\\ d_1 \\parallel d_2 \\\\ (\\alpha) \\cap (\\beta) = d \\end{cases} \\implies d \\parallel d_1 \\parallel d_2$\n        </p>\n        <span class=\"text-emerald-400 text-xs\">Ứng dụng tìm giao tuyến cực nhanh!</span>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Định lí ba giao tuyến là một trong những định lí đẹp nhất và quyền năng nhất của hình học không gian. Nội dung định lí phát biểu như sau: Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt, thì ba giao tuyến đó hoặc đồng quy tại một điểm, hoặc đôi một song song với nhau. Từ định lí này, ta rút ra một hệ quả cực kì quan trọng: Nếu hai mặt phẳng phân biệt lần lượt chứa hai đường thẳng song song thì giao tuyến của chúng nếu có bắt buộc phải song song với hai đường thẳng đó.",
      "startTime": 29.47,
      "endTime": 64.44,
      "duration": 34.97
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: TÌM GIAO TUYẾN CHỨA HAI ĐƯỜNG SONG SONG",
      "subtitle": "BÀI 11 • MỤC 2 • ÁP DỤNG HỆ QUẢ GIAO TUYẾN SONG SONG 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Mặt $(SAB)$ chứa $AB$, mặt $(SCD)$ chứa $CD$ mà $AB \\parallel CD \\implies$ Giao tuyến qua $S$ và song song $AB$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-3\">\n      <b>Câu 1:</b> Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là:\n    </p>\n\n    <div class=\"space-y-1.5 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>A.</b> Đường thẳng $d$ đi qua $S$ và song song với $AB, CD$.</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> Đường thẳng $SO$ với $O$ là giao điểm của $AC$ và $BD$.</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> Đường thẳng đi qua $S$ và cắt $AB$.</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Không có giao tuyến vì $AB \\parallel CD$.</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian chọn đáp án:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 1: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Giao tuyến của hai mặt phẳng SAB và SCD là: Phương án A: Đường thẳng đi qua S và song song với AB; Phương án B: Đường thẳng SO với O là tâm hình bình hành; Phương án C: Đường thẳng AC; Phương án D: Đường thẳng BD. Các em có 15 giây chọn đáp án.",
      "startTime": 64.44,
      "endTime": 94.73,
      "duration": 30.29
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN A CHÍNH XÁC",
      "subtitle": "BÀI 11 • MỤC 2 • KỸ THUẬT VẼ GIAO TUYẾN SONG SONG",
      "mascotMode": "celebrating",
      "mascotTip": "Điểm chung $S$; chứa $AB \\parallel CD \\implies$ Giao tuyến là đường thẳng $d$ qua $S$ và $d \\parallel AB \\parallel CD$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Lời giải chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300 font-mono\">\n      <p>• $S$ là điểm chung của $(SAB)$ và $(SCD)$.</p>\n      <p>• $\\begin{cases} AB \\subset (SAB) \\\\ CD \\subset (SCD) \\\\ AB \\parallel CD \\text{ (do } ABCD \\text{ là hình bình hành)} \\end{cases}$.</p>\n      <p>• Theo hệ quả định lí ba giao tuyến: Giao tuyến $(SAB) \\cap (SCD) = d$ là đường thẳng qua $S$ và $d \\parallel AB \\parallel CD$.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-sans\">➔ Chọn đáp án A.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là A. Xét hai mặt phẳng SAB và SCD: Điểm chung thứ nhất là đỉnh S. Mặt phẳng SAB chứa đường thẳng AB; mặt phẳng SCD chứa đường thẳng CD; mà AB song song với CD do đáy là hình bình hành. Áp dụng hệ quả của định lí ba giao tuyến, giao tuyến của hai mặt phẳng SAB và SCD là đường thẳng d đi qua điểm chung S và song song với cả AB và CD.",
      "startTime": 94.73,
      "endTime": 128.02,
      "duration": 33.29
    },
    {
      "sceneIndex": 5,
      "title": "5. PHƯƠNG PHÁP CHỨNG MINH HAI ĐƯỜNG THẲNG SONG SONG",
      "subtitle": "BÀI 11 • MỤC 2 • 3 CON ĐƯỜNG GIẢI TOÁN HIỆU QUẢ NHẤT",
      "mascotMode": "explaining",
      "mascotTip": "Ưu tiên 1: Đường trung bình tam giác. Ưu tiên 2: Định lí Ta-lét đảo. Ưu tiên 3: Định lí ba giao tuyến!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-teal-900/60 to-emerald-900/40 p-4 rounded-xl border border-teal-500/30 text-xs\">\n    <div class=\"font-bold text-teal-300 text-sm mb-2\">3 Con Đường Chứng Minh $a \\parallel b$ Trong Không Gian</div>\n    <div class=\"grid grid-cols-3 gap-2.5\">\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-400\">\n        <b class=\"text-emerald-300\">Cách 1: Hình học phẳng</b>\n        <p class=\"text-slate-300 mt-1\">Chứng minh $a, b$ cùng thuộc một mp và là đường trung bình, Ta-lét đảo, hình bình hành.</p>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-cyan-400\">\n        <b class=\"text-cyan-300\">Cách 2: Tính bắc cầu</b>\n        <p class=\"text-slate-300 mt-1\">Tìm đường thẳng $c$ trung gian sao cho: $\\begin{cases} a \\parallel c \\\\ b \\parallel c \\end{cases} \\implies a \\parallel b$.</p>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-purple-400\">\n        <b class=\"text-purple-300\">Cách 3: Giao tuyến //</b>\n        <p class=\"text-slate-300 mt-1\">Sử dụng định lí ba giao tuyến hoặc giao tuyến của 2 mp chứa 2 đường thẳng song song.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Để chứng minh hai đường thẳng a và b song song trong không gian, chúng ta có ba con đường chính. Con đường 1: Vận dụng các kiến thức hình học phẳng trong mặt phẳng chứa cả a và b: chứng minh a và b là đường trung bình của tam giác, hình thang, hoặc dùng định lí Ta-lét đảo, hoặc là các cạnh đối của hình bình hành. Con đường 2: Vận dụng tính chất bắc cầu: chứng minh a và b cùng song song với một đường thẳng thứ ba c. Con đường 3: Vận dụng định lí ba giao tuyến hoặc hệ quả giao tuyến song song.",
      "startTime": 128.02,
      "endTime": 166.73,
      "duration": 38.71
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: CHỨNG MINH SONG SONG BẰNG ĐƯỜNG TRUNG BÌNH",
      "subtitle": "BÀI 11 • MỤC 2 • THỰC CHIẾN TÍNH CHẤT TRONG HÌNH CHÓP 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "$M, N$ là trung điểm $SA, SB \\implies MN$ là đường trung bình $\\triangle SAB \\implies MN \\parallel AB$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-3\">\n      <b>Câu 2:</b> Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $M, N, P, Q$ lần lượt là trung điểm của $SA, SB, SC, SD$. Khẳng định nào sau đây <b>sai</b>?\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs font-mono\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> $MN \\parallel AB$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> $PQ \\parallel CD$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> $MN \\parallel PQ$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-rose-500 font-bold text-rose-300\"><b>D.</b> $MP \\parallel NQ$</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian chọn đáp án:</span>\n    </div>\n    <span class=\"text-base font-black text-cyan-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Gọi M, N, P, Q lần lượt là trung điểm của các cạnh bên SA, SB, SC, SD. Khẳng định nào sau đây là sai? Phương án A: MN song song AB; Phương án B: PQ song song CD; Phương án C: MN song song PQ; Phương án D: MP song song NQ. Các em có 15 giây suy nghĩ.",
      "startTime": 166.73,
      "endTime": 203.83,
      "duration": 37.1
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: ĐÁP ÁN D LÀ KHẲNG ĐỊNH SAI",
      "subtitle": "BÀI 11 • MỤC 2 • HAI ĐƯỜNG CHÉO CỦA HÌNH BÌNH HÀNH CẮT NHAU",
      "mascotMode": "celebrating",
      "mascotTip": "$MNPQ$ là hình bình hành nên 2 đường chéo $MP$ và $NQ$ CẮT NHAU chứ không song song!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-cyan-300 uppercase mb-2\">Lời giải chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300 font-mono\">\n      <p>• $MN \\parallel AB$ (đường trung bình $\\triangle SAB$) $\\implies$ A đúng.</p>\n      <p>• $PQ \\parallel CD$ (đường trung bình $\\triangle SCD$) $\\implies$ B đúng.</p>\n      <p>• Vì $AB \\parallel CD \\implies MN \\parallel PQ \\implies$ C đúng.</p>\n      <p>• Tương tự $MQ \\parallel NP \\implies MNPQ$ là <b>hình bình hành</b>.</p>\n      <p>• Trong hình bình hành $MNPQ$, hai đường chéo $MP$ và $NQ$ <b>cắt nhau</b> tại tâm hình bình hành, không thể song song!</p>\n      <div class=\"mt-2 text-rose-300 font-bold font-sans\">➔ Khẳng định sai là D (chọn D).</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án sai cần chọn là D: MP song song NQ. Tại sao? Ta có MN là đường trung bình tam giác SAB nên MN song song AB. PQ là đường trung bình tam giác SCD nên PQ song song CD. Vì AB song song CD nên theo tính chất bắc cầu, MN song song PQ. Hoàn toàn tương tự, MQ song song NP. Do đó tứ giác MNPQ là hình bình hành. Vì MNPQ là hình bình hành nên hai đường chéo MP và NQ cắt nhau tại trung điểm của mỗi đường, chứ không thể song song với nhau. Do đó khẳng định D là sai.",
      "startTime": 203.83,
      "endTime": 251.11,
      "duration": 47.28
    },
    {
      "sceneIndex": 8,
      "title": "8. KỸ NĂNG VẬN DỤNG ĐỊNH LÍ TA-LÉT ĐẢO TRONG KHÔNG GIAN",
      "subtitle": "BÀI 11 • MỤC 2 • CHỨNG MINH SONG SONG KHI ĐIỂM KHÔNG PHẢI TRUNG ĐIỂM",
      "mascotMode": "explaining",
      "mascotTip": "Lập tỉ số: $\\frac{SM}{SA} = \\frac{SN}{SB} \\implies MN \\parallel AB$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/60 to-indigo-900/40 p-4 rounded-xl border border-purple-500/30 text-xs\">\n    <div class=\"font-bold text-purple-300 text-sm mb-2\">Định Lí Ta-lét Đảo Trong Tam Giác Không Gian</div>\n    <div class=\"bg-slate-800 p-3 rounded-lg border-l-4 border-purple-400 space-y-1 text-slate-300\">\n      <p>Xét trong mặt phẳng $(SAB)$:</p>\n      <div class=\"p-2 bg-slate-900 rounded font-mono text-center text-purple-200 font-bold my-1\">\n        $$\\frac{SM}{SA} = \\frac{SN}{SB} \\implies MN \\parallel AB$$\n      </div>\n      <p>• Tương tự với tỉ lệ: $\\frac{MA}{SA} = \\frac{NB}{SB}$ hoặc $\\frac{SM}{MA} = \\frac{SN}{NB}$.</p>\n      <p>• Kết hợp với $AB \\parallel CD \\implies MN \\parallel CD$ theo tính chất bắc cầu.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Khi các điểm trên cạnh bên không phải là trung điểm mà chia các cạnh theo các tỉ số bất kì, vũ khí mạnh nhất là định lí Ta-lét đảo. Nếu trên hai cạnh SA và SB của tam giác SAB, ta có tỉ số SM chia SA bằng SN chia SB thì đường thẳng MN song song với AB. Kỹ thuật này cực kì phổ biến trong các bài toán biến thiên tỉ số thiết diện.",
      "startTime": 251.11,
      "endTime": 278.18,
      "duration": 27.07
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: GIAO TUYẾN SONG SONG QUA ĐIỂM TRONG TAM GIÁC",
      "subtitle": "BÀI 11 • MỤC 2 • BÀI TOÁN XÁC ĐỊNH GIAO TUYẾN 30 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Giao tuyến đi qua điểm chung và song song với 2 đường thẳng song song có sẵn!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Mặt phẳng $(\\alpha)$ đi qua điểm $M \\in SC$ và song song với $BD$.\n    </p>\n\n    <div class=\"bg-slate-900 p-2.5 rounded text-xs text-slate-300 space-y-1\">\n      <p>• Trong $(SAC)$, gọi $I = AM \\cap SO$.</p>\n      <p>• Xác định giao tuyến của $(\\alpha)$ với mặt phẳng $(SBD)$.</p>\n    </div>\n\n    <p class=\"text-xs text-indigo-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Mô tả đường thẳng giao tuyến $(\\alpha) \\cap (SBD)$.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Gọi M là một điểm nằm trên đoạn SC sao cho SM bằng 2 lần MC. Mặt phẳng alpha đi qua M và song song với đường thẳng BD. Tìm giao tuyến của mặt phẳng alpha với mặt phẳng SBD. Các em có 30 giây suy nghĩ.",
      "startTime": 278.18,
      "endTime": 303.82,
      "duration": 25.63
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: GIAO TUYẾN QUA $I$ VÀ SONG SONG $BD$",
      "subtitle": "BÀI 11 • MỤC 2 • KỸ THUẬT DỰNG ĐƯỜNG THẲNG SONG SONG",
      "mascotMode": "celebrating",
      "mascotTip": "Điểm chung là $I$; song song với $BD \\implies$ Giao tuyến là đường thẳng qua $I$ song song $BD$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-indigo-300 uppercase mb-2\">Lời giải chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300 font-mono\">\n      <p>• Điểm chung: $I = AM \\cap SO \\implies I \\in (\\alpha) \\cap (SBD)$.</p>\n      <p>• Ta có: $BD \\subset (SBD)$ và theo giả thiết $(\\alpha) \\parallel BD$.</p>\n      <p>• Do đó: Giao tuyến của $(\\alpha)$ và $(SBD)$ là đường thẳng $d$ đi qua $I$ và <b>song song với $BD$</b>.</p>\n      <p>• Trong $(SBD)$, đường thẳng $d$ cắt $SB$ tại $E$ và cắt $SD$ tại $F$.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-sans\">➔ Giao tuyến là đường thẳng $EF \\parallel BD$.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Ta có điểm I là giao điểm của đường thẳng AM với SO trong mặt phẳng SAC. Vì I thuộc SO nên I thuộc mặt phẳng SBD; và I thuộc AM nên I thuộc mặt phẳng alpha. Vậy I là điểm chung của mặt phẳng alpha và mặt phẳng SBD. Mặt phẳng SBD chứa đường thẳng BD, mà mặt phẳng alpha lại song song với BD. Do đó, theo hệ quả định lí giao tuyến song song, giao tuyến của mặt phẳng alpha với mặt phẳng SBD là đường thẳng d đi qua điểm I và song song với BD.",
      "startTime": 303.82,
      "endTime": 344.04,
      "duration": 40.22
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: ĐỀ TỔNG ÔN TRẮC NGHIỆM ĐÚNG/SAI BÀI 11",
      "subtitle": "BÀI 11 • MỤC 2 • THẨM ĐỊNH TÍNH ĐÚNG SAI 4 MỆNH ĐỀ",
      "mascotMode": "thinking",
      "mascotTip": "Đọc kĩ từng mệnh đề về quan hệ song song và định lí ba giao tuyến!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 4 (Đúng/Sai - 30s)</span>\n      <span class=\"text-xs text-slate-400\">Tư duy không gian trừu tượng</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Cho hai đường thẳng phân biệt $a$ và $b$ cùng song song với một mặt phẳng $(\\alpha)$. Xét tính Đúng/Sai:\n    </p>\n\n    <div class=\"space-y-1 text-xs text-slate-200\">\n      <p><b>a)</b> $a$ và $b$ có thể song song với nhau.</p>\n      <p><b>b)</b> $a$ và $b$ có thể cắt nhau tại một điểm.</p>\n      <p><b>c)</b> $a$ và $b$ có thể chéo nhau trong không gian.</p>\n      <p><b>d)</b> $a$ và $b$ nhất thiết phải song song với nhau.</p>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian thẩm định:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4 là câu hỏi Trắc nghiệm Đúng/Sai 4 ý chuẩn cấu trúc đề thi của Bộ GD&ĐT. Cho hai đường thẳng phân biệt a và b cùng song song với mặt phẳng alpha. Xét tính Đúng hoặc Sai của 4 mệnh đề sau: Ý a: Hai đường thẳng a và b có thể song song với nhau; Ý b: Hai đường thẳng a và b có thể cắt nhau; Ý c: Hai đường thẳng a và b có thể chéo nhau; Ý d: Hai đường thẳng a và b bắt buộc phải song song với nhau. Các em có 30 giây suy nghĩ.",
      "startTime": 344.04,
      "endTime": 382.49,
      "duration": 38.45
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT BÀI 11",
      "subtitle": "BÀI 11 • MỤC 2 • KẾT QUẢ: a-ĐÚNG, b-ĐÚNG, c-ĐÚNG, d-SAI",
      "mascotMode": "celebrating",
      "mascotTip": "Hai đường thẳng cùng song song một mp có thể: Song song, Cắt nhau hoặc Chéo nhau!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"space-y-1.5 text-slate-300\">\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>a)</b> $a$ và $b$ có thể song song (VD: 2 mép đối diện của trần nhà).</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>b)</b> $a$ và $b$ có thể cắt nhau (VD: 2 đường chéo của trần nhà).</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>c)</b> $a$ và $b$ có thể chéo nhau ở hai độ cao khác nhau so với sàn.</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>d)</b> Khẳng định $a \\parallel b$ nhất thiết xảy ra là sai.</span>\n        <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold rounded\">SAI</span>\n      </div>\n    </div>\n\n    <div class=\"mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30 text-xs\">\n      <div class=\"font-bold text-emerald-200 mb-1 flex items-center gap-1.5\">\n        <span>🎉</span> <span>HOÀN THÀNH XUẤT SẮC TOÀN BỘ BÀI 11!</span>\n      </div>\n      <p class=\"text-slate-300\">\n        Các em đã thành thạo: 4 vị trí tương đối, định nghĩa 2 đường thẳng song song, tính chất bắc cầu và định lí ba giao tuyến!\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em. Thầy cùng các em thẩm định: Lấy ví dụ mặt phẳng alpha là mặt sàn nhà. Trên trần nhà ta vẽ hai đường thẳng song song a và b thì a và b cùng song song với sàn nhà, vậy mệnh đề a Đúng. Nếu trên trần nhà ta vẽ hai đường thẳng cắt nhau a và b thì chúng vẫn cùng song song với sàn nhà, vậy mệnh đề b Đúng. Nếu ta lấy một đường a trên trần nhà và một đường b nằm ở tầng lửng sao cho chúng không song song thì a và b chéo nhau và vẫn cùng song song với sàn nhà, vậy mệnh đề c Đúng. Mệnh đề d khẳng định a và b nhất thiết phải song song là Sai hoàn toàn. Như vậy kết quả là: a Đúng, b Đúng, c Đúng, d Sai. Chúng ta đã hoàn thành xuất sắc toàn bộ Bài 11.",
      "startTime": 382.49,
      "endTime": 437.74,
      "duration": 55.25
    }
  ]
};
  root.G11_CHAPTER4_DATA.toan11_bai11_muc2 = root.G11_CHAPTER4_DATA.g11_bai11_muc2;

  root.G11_CHAPTER4_DATA.g11_bai11_muc3 = {
  "lessonId": "toan11_bai11",
  "lessonTitle": "Bài 11: Hai đường thẳng song song trong không gian",
  "sectionId": "g11_bai11_muc3",
  "sectionTitle": "Mục 3: Kỹ thuật chứng minh hai đường thẳng song song & Thiết diện song song",
  "audio": "/audio/g11_bai11_muc3.mp3",
  "audioSrc": "./audio/g11_bai11_muc3.mp3",
  "audio_src": "./audio/g11_bai11_muc3.mp3",
  "title": "Mục 3: Kỹ thuật chứng minh hai đường thẳng song song & Thiết diện song song",
  "owl_tip": "Phương pháp vàng: Đường trung bình, định lí Ta-lét đảo, hình bình hành hoặc định lí ba giao tuyến!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. CHIẾN THUẬT CHỨNG MINH HAI ĐƯỜNG THẲNG SONG SONG",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. THIẾT DIỆN SONG SONG VỚI MỘT ĐƯỜNG THẲNG",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: ĐỀ TỔNG ÔN TRẮC NGHIỆM ĐÚNG/SAI BÀI 11",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & BẾ MẠC TOÀN KHÓA BÀI 11",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 501.82,
  "formattedDuration": "08:21",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. CHIẾN THUẬT CHỨNG MINH HAI ĐƯỜNG THẲNG SONG SONG",
      "subtitle": "BÀI 11 • MỤC 3 • CÁC KỸ THUẬT GIẢI TOÁN TỔNG HỢP NÂNG CAO",
      "mascotMode": "pointer",
      "mascotTip": "Chứng minh 2 đường thẳng song song: Tìm mặt phẳng chứa cả 2 đường hoặc dùng đường thứ 3 trung gian!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Hệ thống phương pháp</span>\n      <h3 class=\"text-xl font-black text-emerald-200\">Bản Đồ Kỹ Thuật Chứng Minh $a \\parallel b$</h3>\n    </div>\n    <p class=\"text-sm text-slate-300 leading-relaxed\">\n      • <b>Hướng 1 (Đồng phẳng):</b> Chỉ ra $a, b \\subset (\\alpha)$ và áp dụng đường trung bình, định lí Ta-lét đảo, hình bình hành.<br/>\n      • <b>Hướng 2 (Trung gian):</b> Tìm $c$ sao cho $a \\parallel c$ và $b \\parallel c \\implies a \\parallel b$.<br/>\n      • <b>Hướng 3 (Giao tuyến):</b> Chứng minh $a, b$ là các giao tuyến của các mặt phẳng cắt nhau theo định lí ba giao tuyến.\n    </p>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 3: Phương pháp chứng minh hai đường thẳng song song và bài toán tìm thiết diện song song với một đường thẳng. Để giải quyết các bài toán chứng minh song song ở mức độ vận dụng, bí quyết là tìm ra một mặt phẳng chung chứa cả hai đường thẳng, sau đó sử dụng các định lí hình học phẳng quen thuộc. Nếu không tìm được mặt phẳng chung, ta tìm một đường thẳng thứ ba làm cầu nối trung gian.",
      "startTime": 0.0,
      "endTime": 30.5,
      "duration": 30.5
    },
    {
      "sceneIndex": 2,
      "title": "2. THIẾT DIỆN SONG SONG VỚI MỘT ĐƯỜNG THẲNG",
      "subtitle": "BÀI 11 • MỤC 2 • NGUYÊN TẮC DỰNG ĐƯỜNG GIAO TUYẾN SONG SONG",
      "mascotMode": "explaining",
      "mascotTip": "Nếu mặt phẳng $(\\alpha)$ song song với đường thẳng $d$ thì $(\\alpha)$ cắt các mặt chứa $d$ theo các giao tuyến song song với $d$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-3.5 rounded-xl border border-cyan-500/40 text-xs\">\n    <div class=\"font-bold text-cyan-300 text-sm mb-2 flex items-center gap-2\">\n      <span>📐</span> <span>Nguyên Tắc Dựng Thiết Diện Song Song Với $d$</span>\n    </div>\n    <div class=\"bg-slate-800 p-3 rounded-lg border-l-4 border-cyan-400 space-y-1 text-slate-300\">\n      <p>• Nếu mặt phẳng $(\\alpha) \\parallel d$ và $(\\alpha)$ cắt mặt phẳng $(\\beta) \\supset d$ theo giao tuyến $d_x$:</p>\n      <div class=\"p-2 bg-slate-900 rounded font-mono text-center text-cyan-200 font-bold my-1\">\n        $$d_x \\parallel d$$\n      </div>\n      <p>• <b>Thao tác:</b> Qua điểm chung $M \\in (\\alpha) \\cap (\\beta)$, kẻ đường thẳng song song với $d$, cắt các cạnh của $(\\beta)$ tại các đỉnh mới của thiết diện.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Một dạng toán trọng tâm của Mục 3 là tìm thiết diện của hình chóp cắt bởi mặt phẳng alpha song song với một đường thẳng d cho trước. Nguyên tắc vàng: Khi mặt phẳng alpha cắt một mặt phẳng beta chứa đường thẳng d, thì đoạn giao tuyến thu được bắt buộc phải song song với đường thẳng d. Từ đó, cứ mặt nào chứa d thì ta chỉ cần kẻ đường thẳng song song với d qua các điểm đã biết.",
      "startTime": 30.5,
      "endTime": 58.94,
      "duration": 28.44
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: THIẾT DIỆN CẮT BỞI MP SONG SONG CẠNH ĐÁY",
      "subtitle": "BÀI 11 • MỤC 3 • HÌNH BÌNH HÀNH VÀ HÌNH THANG 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Mặt phẳng qua điểm $M$ trên $SA$ song song $AB$ và $BC$ sẽ tạo ra thiết diện là hình bình hành!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-3\">\n      <b>Câu 1:</b> Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Mặt phẳng $(\\alpha)$ đi qua điểm $M \\in SA$ và song song với cả $AB$ và $AD$. Thiết diện của hình chóp cắt bởi $(\\alpha)$ là:\n    </p>\n\n    <div class=\"grid grid-cols-4 gap-2 text-xs font-mono text-center\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Tam giác</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>B.</b> Hình bình hành</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> Ngũ giác</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Hình thang</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian chọn đáp án:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 1: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Gọi M là một điểm nằm trên cạnh bên SA. Mặt phẳng alpha đi qua M và song song với cả hai đường thẳng AB và AD. Thiết diện của hình chóp cắt bởi mặt phẳng alpha là hình gì? Phương án A: Tam giác; Phương án B: Hình bình hành; Phương án C: Ngũ giác; Phương án D: Hình thang có hai cạnh bên cắt nhau. Các em có 15 giây suy nghĩ.",
      "startTime": 58.94,
      "endTime": 95.16,
      "duration": 36.22
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN B HÌNH BÌNH HÀNH",
      "subtitle": "BÀI 11 • MỤC 3 • TẤT CẢ CÁC CẶP CẠNH ĐỐI DIỆN ĐỀU SONG SONG",
      "mascotMode": "celebrating",
      "mascotTip": "Mặt phẳng $(\\alpha)$ song song với đáy $(ABCD) \\implies$ Thiết diện là hình bình hành $MNPQ$ đồng dạng với đáy!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Lời giải chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300 font-mono\">\n      <p>• Trong $(SAB)$: Qua $M$ kẻ $MN \\parallel AB$ ($N \\in SB$).</p>\n      <p>• Trong $(SAD)$: Qua $M$ kẻ $MQ \\parallel AD$ ($Q \\in SD$).</p>\n      <p>• Trong $(SBC)$: Qua $N$ kẻ $NP \\parallel BC$ ($P \\in SC$).</p>\n      <p>• Khi đó: $PQ \\parallel CD \\parallel AB \\parallel MN$ và $NP \\parallel MQ \\parallel AD$.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-sans\">➔ Thiết diện là <b>hình bình hành $MNPQ$</b> (chọn B).</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là B: Hình bình hành. Trong mặt phẳng SAB, qua M kẻ MN song song AB với N thuộc SB. Trong mặt phẳng SAD, qua M kẻ MQ song song AD với Q thuộc SD. Trong mặt phẳng SBC, qua N kẻ NP song song BC với P thuộc SC. Nối P với Q, ta có PQ song song CD. Do AB song song CD và AD song song BC, nên tứ giác MNPQ có các cặp cạnh đối song song với nhau. Vậy thiết diện thu được chính là hình bình hành MNPQ.",
      "startTime": 95.16,
      "endTime": 140.04,
      "duration": 44.88
    },
    {
      "sceneIndex": 5,
      "title": "5. BÀI TOÁN TÍNH CHU VI VÀ DIỆN TÍCH THIẾT DIỆN",
      "subtitle": "BÀI 11 • MỤC 3 • KẾT HỢP ĐẠI SỐ VÀ HÌNH HỌC KHÔNG GIAN",
      "mascotMode": "explaining",
      "mascotTip": "Dùng tỉ số Ta-lét: Nếu $\\frac{SM}{SA} = k$ thì độ dài cạnh thiết diện bằng $k$ lần cạnh đáy!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-3.5 rounded-xl border border-purple-500/40 text-xs\">\n    <div class=\"font-bold text-purple-300 text-sm mb-2 flex items-center gap-2\">\n      <span>📐</span> <span>Công Thức Tính Nhanh Chu Vi & Diện Tích Thiết Diện Song Song Đáy</span>\n    </div>\n    <p class=\"text-slate-300 leading-relaxed\">\n      Cho hình chóp $S.ABCD$ có đáy diện tích $S_đ$, chu vi $P_đ$. Mặt phẳng $(\\alpha) \\parallel (ABCD)$ cắt $SA$ tại $M$ với $\\frac{SM}{SA} = k$ ($0 < k < 1$):\n    </p>\n    <div class=\"grid grid-cols-2 gap-3 mt-2 text-center font-mono\">\n      <div class=\"bg-slate-800 p-2.5 rounded border border-emerald-500/30\">\n        <b class=\"text-emerald-300\">Chu vi thiết diện:</b>\n        <div class=\"text-emerald-200 font-bold text-sm my-1\">$$P_{TD} = k \\cdot P_đ$$</div>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded border border-cyan-500/30\">\n        <b class=\"text-cyan-300\">Diện tích thiết diện:</b>\n        <div class=\"text-cyan-200 font-bold text-sm my-1\">$$S_{TD} = k^2 \\cdot S_đ$$</div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ở mức độ vận dụng cao, đề bài thường yêu cầu tính chu vi hoặc diện tích của thiết diện theo tỉ số vị trí k. Giả sử tỉ số SM chia SA bằng k. Khi đó theo định lí Ta-lét, độ dài các cạnh của thiết diện MNPQ sẽ bằng k lần độ dài các cạnh đáy tương ứng. Chu vi của thiết diện sẽ bằng k lần chu vi đáy, và diện tích của thiết diện sẽ bằng k bình phương lần diện tích đáy. Nhớ công thức đồng dạng này sẽ giúp các em giải quyết các bài toán tối ưu cực trị diện tích thiết diện cực kì nhanh chóng.",
      "startTime": 140.04,
      "endTime": 179.5,
      "duration": 39.46
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: TÍNH DIỆN TÍCH THIẾT DIỆN QUA TRỌNG TÂM",
      "subtitle": "BÀI 11 • MỤC 3 • VẬN DỤNG CÔNG THỨC $S = K^2 S_0$ TRONG 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Trọng tâm tam giác chia đường trung tuyến theo tỉ lệ 2/3 $\\implies k = 2/3 \\implies k^2 = 4/9$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-3\">\n      <b>Câu 2:</b> Cho hình chóp $S.ABC$ có diện tích đáy $S_{\\triangle ABC} = 90\\text{ cm}^2$. Gọi $G$ là trọng tâm $\\triangle SAB$. Mặt phẳng $(\\alpha)$ qua $G$ và song song với $(ABC)$ cắt hình chóp theo một thiết diện tam giác. Diện tích thiết diện đó là:\n    </p>\n\n    <div class=\"grid grid-cols-4 gap-2 text-xs font-mono text-center\">\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>A.</b> $40\\text{ cm}^2$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> $30\\text{ cm}^2$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> $45\\text{ cm}^2$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> $60\\text{ cm}^2$</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-cyan-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2: Cho hình chóp tam giác S.ABC có diện tích đáy ABC bằng 90 cm vuông. Gọi G là trọng tâm của tam giác SAB. Mặt phẳng alpha đi qua G và song song với mặt phẳng đáy ABC, cắt hình chóp theo một thiết diện tam giác. Diện tích của thiết diện tam giác đó bằng bao nhiêu? Phương án A: 40 cm vuông; Phương án B: 30 cm vuông; Phương án C: 45 cm vuông; Phương án D: 60 cm vuông. Các em có 15 giây tính toán.",
      "startTime": 179.5,
      "endTime": 220.97,
      "duration": 41.47
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: ĐÁP ÁN A: $40\\text{ CM}^2$",
      "subtitle": "BÀI 11 • MỤC 3 • TÍNH TOÁN NHANH CHUẨN XÁC ZERO ERROR",
      "mascotMode": "celebrating",
      "mascotTip": "$k = 2/3 \\implies S_{TD} = (2/3)^2 \\cdot 90 = \\frac{4}{9} \\cdot 90 = 40\\text{ cm}^2$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-cyan-300 uppercase mb-2\">Lời giải chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300 font-mono\">\n      <p>• Gọi $I$ là trung điểm $AB \\implies \\frac{SG}{SI} = \\frac{2}{3}$ (tính chất trọng tâm).</p>\n      <p>• Mặt phẳng $(\\alpha) \\parallel (ABC) \\implies$ Thiết diện là tam giác đồng dạng với $\\triangle ABC$ với tỉ số $k = \\frac{2}{3}$.</p>\n      <p>• Tỉ số diện tích: $\\frac{S_{TD}}{S_{\\triangle ABC}} = k^2 = \\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$.</p>\n      <div class=\"p-2 bg-slate-900 rounded text-center text-emerald-300 font-bold my-1\">\n        $$S_{TD} = \\frac{4}{9} \\cdot 90 = 40\\text{ (cm}^2\\text{)}$$\n      </div>\n      <div class=\"mt-2 text-emerald-300 font-bold font-sans\">➔ Chọn đáp án A: $40\\text{ cm}^2$.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là A: 40 cm vuông. Gọi I là trung điểm của AB. Vì G là trọng tâm của tam giác SAB nên theo tính chất trọng tâm, ta có tỉ số SG chia SI bằng 2 phần 3. Mặt phẳng alpha qua G song song với đáy ABC nên nó cắt các cạnh SA, SB, SC theo tỉ số đồng dạng k bằng 2 phần 3. Thiết diện thu được là một tam giác đồng dạng với tam giác đáy ABC với tỉ số đồng dạng k bằng 2 phần 3. Tỉ số diện tích bằng k bình phương, tức là 4 phần 9. Lấy 4 phần 9 nhân với 90, ta được diện tích thiết diện bằng đúng 40 cm vuông.",
      "startTime": 220.97,
      "endTime": 271.46,
      "duration": 50.5
    },
    {
      "sceneIndex": 8,
      "title": "8. KỸ NĂNG CHỨNG MINH 3 ĐƯỜNG THẲNG ĐỒNG QUY",
      "subtitle": "BÀI 11 • MỤC 3 • VẬN DỤNG ĐỊNH LÍ BA GIAO TUYẾN NGƯỢC",
      "mascotMode": "explaining",
      "mascotTip": "Chứng minh $a, b, c$ là 3 giao tuyến của 3 mặt phẳng. Vì $a$ cắt $b$ nên $a, b, c$ phải ĐỒNG QUY!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-indigo-900/60 to-purple-900/40 p-4 rounded-xl border border-indigo-500/30 text-xs\">\n    <div class=\"font-bold text-indigo-300 text-sm mb-2 flex items-center gap-2\">\n      <span>🎯</span> <span>Thuật Toán Chứng Minh 3 Đường Thẳng Đồng Quy</span>\n    </div>\n    <div class=\"bg-slate-800 p-3 rounded-lg border-l-4 border-indigo-400 space-y-1.5 text-slate-300\">\n      <p><b>Bước 1:</b> Tìm 3 mặt phẳng $(\\alpha), (\\beta), (\\gamma)$ sao cho:</p>\n      <p class=\"font-mono text-cyan-200\">$(\\alpha) \\cap (\\beta) = a$, $(\\beta) \\cap (\\gamma) = b$, $(\\gamma) \\cap (\\alpha) = c$.</p>\n      <p><b>Bước 2:</b> Chỉ ra rằng $a$ và $b$ cắt nhau tại điểm $O$: $a \\cap b = \\{O\\}$.</p>\n      <p><b>Bước 3:</b> Áp dụng định lí ba giao tuyến $\\implies$ Đường thẳng thứ ba $c$ cũng phải đi qua $O$.</p>\n      <p class=\"text-emerald-300 font-bold\">➔ Kết luận: Ba đường thẳng $a, b, c$ đồng quy tại $O$.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Định lí ba giao tuyến cho ta một phương pháp cực kì thanh thoát để chứng minh ba đường thẳng đồng quy trong không gian. Muốn chứng minh ba đường thẳng a, b, c đồng quy: Bước 1: Chứng minh a, b, c lần lượt là ba giao tuyến của ba mặt phẳng đôi một cắt nhau. Bước 2: Chỉ ra rằng hai đường thẳng a và b cắt nhau tại một điểm S. Bước 3: Theo định lí ba giao tuyến, vì chúng không thể đôi một song song nên ba đường thẳng đó bắt buộc phải đồng quy tại điểm S.",
      "startTime": 271.46,
      "endTime": 308.18,
      "duration": 36.72
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: CHỨNG MINH 3 ĐƯỜNG THẲNG ĐỒNG QUY",
      "subtitle": "BÀI 11 • MỤC 3 • BÀI TOÁN HÌNH CHÓP ĐÁY HÌNH THANG 30 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Ba đường thẳng là $AD, BC$ và $SE$. Chúng là giao tuyến của 3 mặt phẳng nào?",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng cao</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB \\parallel CD$, $AD$ cắt $BC$ tại $E$).\n    </p>\n\n    <div class=\"bg-slate-900 p-2.5 rounded text-xs text-slate-300 space-y-1\">\n      <p>• Ba mặt phẳng: $(SAD)$, $(SBC)$ và $(ABCD)$.</p>\n      <p>• Hãy chỉ ra 3 giao tuyến của từng cặp mặt phẳng trên.</p>\n    </div>\n\n    <p class=\"text-xs text-indigo-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Dùng định lí ba giao tuyến chứng minh $SE, AD, BC$ đồng quy tại $E$.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3: Cho hình chóp S.ABCD có đáy ABCD là hình thang với hai cạnh bên AD và BC cắt nhau tại điểm E. Gọi alpha là mặt phẳng đi qua đỉnh S và hai điểm M thuộc SA, N thuộc SB sao cho MN cắt AB tại K. Chứng minh rằng ba đường thẳng SK, AD và BC đồng quy. Các em có 30 giây suy nghĩ.",
      "startTime": 308.18,
      "endTime": 337.61,
      "duration": 29.42
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: BA GIAO TUYẾN ĐỒNG QUY TẠI $E$",
      "subtitle": "BÀI 11 • MỤC 3 • VẬN DỤNG ĐỊNH LÍ BA GIAO TUYẾN ĐỈNH CAO",
      "mascotMode": "celebrating",
      "mascotTip": "$(SAD) \\cap (SBC) = SE$; $(SAD) \\cap (ABCD) = AD$; $(SBC) \\cap (ABCD) = BC \\implies$ Đồng quy tại $E$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-indigo-300 uppercase mb-2\">Lời giải chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300 font-mono\">\n      <p>• Xét ba mặt phẳng: $(SAD)$, $(SBC)$ và $(ABCD)$.</p>\n      <p>  - $(SAD) \\cap (ABCD) = AD$.</p>\n      <p>  - $(SBC) \\cap (ABCD) = BC$.</p>\n      <p>  - $(SAD) \\cap (SBC) = SE$.</p>\n      <p>• Do $AD$ và $BC$ cắt nhau tại $E$ trong mặt phẳng đáy.</p>\n      <p>• Theo định lí ba giao tuyến: Ba giao tuyến $AD, BC, SE$ không thể song song $\\implies$ <b>phải đồng quy tại $E$</b>.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-sans\">➔ Kết luận: Ba đường thẳng $AD, BC, SE$ đồng quy tại $E$.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Đã hết thời gian. Lời giải cực kì sắc bén: Xét ba mặt phẳng phân biệt: mặt phẳng SAD, mặt phẳng SBC và mặt phẳng đáy ABCD. Giao tuyến của SAD và ABCD là đường thẳng AD. Giao tuyến của SBC và ABCD là đường thẳng BC. Giao tuyến của SAD và SBC là đường thẳng SE. Theo giả thiết, trong mặt phẳng đáy, AD và BC cắt nhau tại điểm E. Theo định lí ba giao tuyến, vì hai giao tuyến AD và BC cắt nhau tại E, nên giao tuyến thứ ba là đường thẳng SE cũng bắt buộc phải đi qua điểm E. Vậy ba đường thẳng SE, AD và BC đồng quy tại điểm E.",
      "startTime": 337.61,
      "endTime": 388.27,
      "duration": 50.66
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: ĐỀ TỔNG ÔN TRẮC NGHIỆM ĐÚNG/SAI BÀI 11",
      "subtitle": "BÀI 11 • MỤC 3 • TỔNG ÔN TOÀN DIỆN HAI ĐƯỜNG THẲNG SONG SONG",
      "mascotMode": "thinking",
      "mascotTip": "Thẩm định từng mệnh đề cẩn thận, chú ý từ khóa 'duy nhất' và 'chéo nhau'!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 4 (Đúng/Sai - 30s)</span>\n      <span class=\"text-xs text-slate-400\">Chuẩn Bộ GD&ĐT</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Cho hình chóp $S.ABCD$ có đáy là hình bình hành. $I, J$ là trung điểm của $SA, SC$. Xét tính Đúng/Sai:\n    </p>\n\n    <div class=\"space-y-1 text-xs text-slate-200\">\n      <p><b>a)</b> Đường thẳng $IJ$ song song với đường thẳng $AC$.</p>\n      <p><b>b)</b> Hai đường thẳng $IJ$ và $BD$ chéo nhau.</p>\n      <p><b>c)</b> Giao tuyến của $(SAB)$ và $(SCD)$ cắt đường thẳng $IJ$.</p>\n      <p><b>d)</b> Độ dài đoạn thẳng $IJ = \\frac{1}{2}AC$.</p>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4 là câu hỏi Trắc nghiệm Đúng/Sai 4 ý chuẩn cấu trúc đề thi của Bộ GD&ĐT. Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Gọi I, J lần lượt là trung điểm của SA và SC. Xét tính Đúng hoặc Sai của 4 khẳng định sau: Ý a: Đường thẳng IJ song song với đường thẳng AC; Ý b: Đường thẳng IJ chéo nhau với đường thẳng BD; Ý c: Giao tuyến của hai mặt phẳng SAB và SCD cắt đường thẳng IJ; Ý d: Độ dài đoạn IJ bằng một nửa độ dài đoạn AC. Các em có 30 giây suy nghĩ.",
      "startTime": 388.27,
      "endTime": 433.7,
      "duration": 45.43
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & BẾ MẠC TOÀN KHÓA BÀI 11",
      "subtitle": "BÀI 11 • MỤC 3 • KẾT QUẢ: a-ĐÚNG, b-ĐÚNG, c-SAI, d-ĐÚNG",
      "mascotMode": "celebrating",
      "mascotTip": "Chúc mừng các em đã làm chủ trọn vẹn Bài 11: Hai đường thẳng song song trong không gian!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"space-y-1.5 text-slate-300\">\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>a)</b> $IJ$ là đường trung bình $\\triangle SAC \\implies IJ \\parallel AC$.</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>b)</b> $IJ \\subset (SAC), BD \\subset (ABCD)$, không đồng phẳng $\\implies IJ, BD$ chéo nhau.</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>c)</b> Giao tuyến $d \\parallel AB$, mà $IJ \\parallel AC$ (cắt $AB$) $\\implies d$ và $IJ$ chéo nhau.</span>\n        <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold rounded\">SAI</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>d)</b> $IJ = \\frac{1}{2}AC$ theo tính chất đường trung bình.</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n    </div>\n\n    <div class=\"mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30 text-xs\">\n      <div class=\"font-bold text-emerald-200 mb-1 flex items-center gap-1.5\">\n        <span>🎉</span> <span>HOÀN THÀNH XUẤT SẮC TOÀN BỘ BÀI 11!</span>\n      </div>\n      <p class=\"text-slate-300\">\n        Các em đã thành thạo toàn bộ: Vị trí tương đối, định lí ba giao tuyến, kỹ thuật chứng minh song song và tính toán thiết diện!\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em. Thầy cùng các em thẩm định: Mệnh đề a: Trong tam giác SAC, I là trung điểm SA, J là trung điểm SC nên IJ là đường trung bình, suy ra IJ song song AC. Đúng. Mệnh đề b: IJ nằm trong mặt phẳng SAC chứa AC; BD nằm trong đáy và AC cắt BD tại O. Điểm O không thuộc IJ nên IJ và BD không đồng phẳng, do đó IJ và BD chéo nhau. Đúng. Mệnh đề c: Giao tuyến của SAB và SCD là đường thẳng d qua S và song song với AB. Đường thẳng IJ song song với AC mà AC cắt AB, nên IJ và d là hai đường thẳng chéo nhau, không thể cắt nhau. Mệnh đề c Sai. Mệnh đề d: IJ là đường trung bình nên độ dài IJ bằng một nửa AC. Đúng. Như vậy chúng ta đã hoàn thành xuất sắc toàn bộ Bài 11.",
      "startTime": 433.7,
      "endTime": 501.82,
      "duration": 68.11
    }
  ]
};
  root.G11_CHAPTER4_DATA.toan11_bai11_muc3 = root.G11_CHAPTER4_DATA.g11_bai11_muc3;

  root.G11_CHAPTER4_DATA.g11_bai12_muc1 = {
  "lessonId": "toan11_bai12",
  "lessonTitle": "Bài 12: Đường thẳng và mặt phẳng song song",
  "sectionId": "g11_bai12_muc1",
  "sectionTitle": "Mục 1: Vị trí tương đối của đường thẳng và mặt phẳng & Điều kiện d // (P)",
  "audio": "/audio/g11_bai12_muc1.mp3",
  "audioSrc": "./audio/g11_bai12_muc1.mp3",
  "audio_src": "./audio/g11_bai12_muc1.mp3",
  "title": "Mục 1: Vị trí tương đối của đường thẳng và mặt phẳng & Điều kiện d // (P)",
  "owl_tip": "Định lí 1: Nếu d không nằm trong (P) và d song song với một đường thẳng b trong (P) thì d // (P)!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. VỊ TRÍ TƯƠNG ĐỐI CỦA ĐƯỜNG THẲNG VÀ MẶT PHẲNG",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. BA VỊ TRÍ TƯƠNG ĐỐI TRONG KHÔNG GIAN",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: ĐÚNG / SAI TỔNG HỢP MỤC 1",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. TỔNG KẾT MỤC 1 & ĐÁP ÁN VÍ DỤ 4",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 373.51,
  "formattedDuration": "06:13",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. VỊ TRÍ TƯƠNG ĐỐI CỦA ĐƯỜNG THẲNG VÀ MẶT PHẲNG",
      "subtitle": "BÀI 12 • MỤC 1 • KHỞI ĐỘNG VÀ ĐẶT VẤN ĐỀ",
      "mascotMode": "pointer",
      "mascotTip": "Trong không gian, đường thẳng d và mặt phẳng (P) có bao nhiêu vị trí tương đối?",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/60 to-indigo-900/40 p-4 rounded-xl border border-blue-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-3 py-1 bg-blue-500/30 text-blue-300 font-bold text-xs rounded-full border border-blue-400/40\">KHỞI ĐỘNG BÀI HỌC</span>\n      <h3 class=\"text-base font-bold text-white\">ĐƯỜNG THẲNG VÀ MẶT PHẲNG SONG SONG</h3>\n    </div>\n    <p class=\"text-slate-300 text-sm leading-relaxed\">\n      Cho đường thẳng $d$ và mặt phẳng $(\\alpha)$ trong không gian. Số điểm chung của $d$ và $(\\alpha)$ quyết định vị trí tương đối giữa chúng.\n    </p>\n  </div>\n\n  <div class=\"grid grid-cols-3 gap-3 text-center\">\n    <div class=\"p-3 bg-slate-800/80 rounded-xl border border-blue-500/20 shadow-md\">\n      <div class=\"text-blue-400 text-xl font-bold mb-1\">Vô số điểm</div>\n      <div class=\"text-xs text-slate-400 font-medium\">$d$ nằm trong $(\\alpha)$</div>\n      <div class=\"text-xs text-blue-300 mt-1 font-mono font-bold\">$d \\subset (\\alpha)$</div>\n    </div>\n    <div class=\"p-3 bg-slate-800/80 rounded-xl border border-amber-500/20 shadow-md\">\n      <div class=\"text-amber-400 text-xl font-bold mb-1\">Duy nhất 1 điểm</div>\n      <div class=\"text-xs text-slate-400 font-medium\">$d$ cắt $(\\alpha)$</div>\n      <div class=\"text-xs text-amber-300 mt-1 font-mono font-bold\">$d \\cap (\\alpha) = \\{M\\}$</div>\n    </div>\n    <div class=\"p-3 bg-slate-800/80 rounded-xl border border-emerald-500/20 shadow-md\">\n      <div class=\"text-emerald-400 text-xl font-bold mb-1\">0 điểm chung</div>\n      <div class=\"text-xs text-slate-400 font-medium\">$d$ song song $(\\alpha)$</div>\n      <div class=\"text-xs text-emerald-300 mt-1 font-mono font-bold\">$d \\parallel (\\alpha)$</div>\n    </div>\n  </div>\n\n  <div class=\"p-3 bg-slate-900/90 rounded-xl border border-slate-700/60 text-xs text-slate-300\">\n    <span class=\"font-bold text-amber-400\">💡 Ứng dụng thực tế:</span> Các thanh dầm cầu song song với mặt nước, lan can cầu thang song song với mặt dốc cầu thang giúp bảo đảm tính cân bằng và an toàn kết cấu xây dựng.\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Bài 12: Đường thẳng và mặt phẳng song song trong không gian. Trong thực tế đời sống, chúng ta thường xuyên bắt gặp hình ảnh đường thẳng song song với mặt phẳng: chẳng hạn như mép trần nhà song song với mặt sàn, hay dây điện kéo dài song song với mặt đất. Hôm nay, chúng ta sẽ cùng tìm hiểu các vị trí tương đối giữa đường thẳng và mặt phẳng, cùng điều kiện để một đường thẳng song song với một mặt phẳng.",
      "startTime": 0.0,
      "endTime": 31.46,
      "duration": 31.46
    },
    {
      "sceneIndex": 2,
      "title": "2. BA VỊ TRÍ TƯƠNG ĐỐI TRONG KHÔNG GIAN",
      "subtitle": "BÀI 12 • MỤC 1 • ĐỊNH NGHĨA HÌNH HỌC VÀ KÝ HIỆU TẬP HỢP",
      "mascotMode": "think",
      "mascotTip": "Đường thẳng d song song mặt phẳng (P) khi và chỉ khi chúng không có điểm chung nào!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3 rounded-xl border border-blue-500/20\">\n    <h4 class=\"text-sm font-bold text-blue-300 mb-2\">BẢNG PHÂN LOẠI BA VỊ TRÍ TƯƠNG ĐỐI</h4>\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2.5 bg-slate-900/70 rounded-lg border border-slate-700/50 flex items-start gap-2\">\n        <span class=\"px-2 py-0.5 bg-blue-500/20 text-blue-300 font-bold rounded\">1</span>\n        <div>\n          <span class=\"font-bold text-white\">$d$ nằm trong mặt phẳng $(P)$</span>: ký hiệu là $d \\subset (P)$.\n          <div class=\"text-slate-400 mt-0.5\">Số điểm chung: vô số. Tập hợp điểm chung: $d \\cap (P) = d$.</div>\n        </div>\n      </div>\n      <div class=\"p-2.5 bg-slate-900/70 rounded-lg border border-slate-700/50 flex items-start gap-2\">\n        <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 font-bold rounded\">2</span>\n        <div>\n          <span class=\"font-bold text-white\">$d$ cắt mặt phẳng $(P)$</span> tại một điểm $M$: ký hiệu là $d \\cap (P) = \\{M\\}$.\n          <div class=\"text-slate-400 mt-0.5\">Số điểm chung: đúng 1 điểm duy nhất $M$.</div>\n        </div>\n      </div>\n      <div class=\"p-2.5 bg-slate-900/70 rounded-lg border border-slate-700/50 flex items-start gap-2\">\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">3</span>\n        <div>\n          <span class=\"font-bold text-white\">$d$ song song với mặt phẳng $(P)$</span>: ký hiệu là $d \\parallel (P)$ hoặc $(P) \\parallel d$.\n          <div class=\"text-slate-400 mt-0.5\">Số điểm chung: không có điểm chung nào. $d \\cap (P) = \\emptyset$.</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"p-2.5 bg-indigo-950/40 rounded-lg border border-indigo-500/30 text-xs text-indigo-200\">\n    <span class=\"font-bold\">Định nghĩa:</span> Đường thẳng $d$ được gọi là song song với mặt phẳng $(P)$ nếu chúng không có điểm chung.\n    $$\\mathbf{d \\parallel (P) \\iff d \\cap (P) = \\emptyset}$$\n  </div>\n</div>\n",
      "narration": "Đường thẳng d và mặt phẳng P có đúng ba vị trí tương đối. Thứ nhất, d nằm trong P: mọi điểm của d đều thuộc P, khi đó d và P có vô số điểm chung. Thứ hai, d cắt P tại điểm M: d và P có duy nhất một điểm chung M. Thứ ba, d song song với P: d và P không có bất kì điểm chung nào.",
      "startTime": 31.46,
      "endTime": 58.32,
      "duration": 26.86
    },
    {
      "sceneIndex": 3,
      "title": "3. ĐIỀU KIỆN ĐỂ ĐƯỜNG THẲNG SONG SONG VỚI MẶT PHẲNG",
      "subtitle": "BÀI 12 • MỤC 1 • ĐỊNH LÍ 1 - CÔNG CỤ CHỨNG MINH CỐT LÕI",
      "mascotMode": "pointer",
      "mascotTip": "Muốn chứng minh a // (P): hãy tìm trong (P) một đường thẳng b sao cho a // b và a không nằm trong (P)!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-gradient-to-r from-emerald-950/70 to-teal-950/60 p-3.5 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full\">ĐỊNH LÍ 1</span>\n      <h4 class=\"text-sm font-bold text-emerald-200\">ĐIỀU KIỆN ĐƯỜNG THẲNG SONG SONG MẶT PHẲNG</h4>\n    </div>\n    <div class=\"p-3 bg-slate-900/90 rounded-lg border border-emerald-500/30 text-xs text-slate-200 leading-relaxed\">\n      Nếu đường thẳng $a$ không nằm trong mặt phẳng $(P)$ và song song với một đường thẳng $b$ nằm trong $(P)$ thì đường thẳng $a$ song song với mặt phẳng $(P)$.\n    </div>\n    <div class=\"mt-3 p-2 bg-emerald-900/30 rounded border border-emerald-400/40 text-center font-mono text-emerald-300 font-bold text-xs\">\n      $$\\begin{cases} a \\not\\subset (P) \\\\ b \\subset (P) \\\\ a \\parallel b \\end{cases} \\implies a \\parallel (P)$$\n    </div>\n  </div>\n\n  <div class=\"p-3 bg-slate-800/90 rounded-xl border border-amber-500/30 text-xs space-y-1.5\">\n    <div class=\"font-bold text-amber-300 flex items-center gap-1.5\">\n      <span>⚠️</span> <span>LƯU Ý QUAN TRỌNG VỀ ĐIỀU KIỆN $a \\not\\subset (P)$</span>\n    </div>\n    <p class=\"text-slate-300\">\n      Nếu quên kiểm tra điều kiện $a \\not\\subset (P)$, lỡ như $a$ đã nằm sẵn trong $(P)$ mà $a \\parallel b$ (với $b \\subset (P)$) thì kết luận $a \\parallel (P)$ là hoàn toàn sai lầm!\n    </p>\n  </div>\n</div>\n",
      "narration": "Để chứng minh đường thẳng a song song với mặt phẳng P, chúng ta không thể đi tìm tất cả các điểm để kiểm tra xem có điểm chung hay không. Thay vào đó, ta sử dụng Định lí 1: Nếu đường thẳng a không nằm trong mặt phẳng P và song song với một đường thẳng b nằm trong P thì a song song với mặt phẳng P.",
      "startTime": 58.32,
      "endTime": 81.53,
      "duration": 23.21
    },
    {
      "sceneIndex": 4,
      "title": "4. PHƯƠNG PHÁP 3 BƯỚC CHỨNG MINH $a \\parallel (P)$",
      "subtitle": "BÀI 12 • MỤC 1 • QUY TRÌNH CHUẨN MỰC BỘ GD&ĐT",
      "mascotMode": "cheer",
      "mascotTip": "Quy trình 3 bước: 1. Tìm đường b; 2. Chứng minh a // b; 3. Kiểm tra điều kiện không thuộc!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-blue-500/30\">\n    <h4 class=\"text-sm font-bold text-blue-300 mb-2\">QUY TRÌNH 3 BƯỚC CHỨNG MINH $a \\parallel (P)$</h4>\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2.5 bg-slate-900 rounded-lg border border-slate-700/60 flex items-start gap-2.5\">\n        <span class=\"w-6 h-6 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center shrink-0\">1</span>\n        <div>\n          <b class=\"text-white\">Bước 1: Chọn đường thẳng quy chiếu</b>\n          <p class=\"text-slate-300 mt-0.5\">Quan sát và tìm trong mặt phẳng $(P)$ một đường thẳng $b$ có phương song song với $a$.</p>\n        </div>\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded-lg border border-slate-700/60 flex items-start gap-2.5\">\n        <span class=\"w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0\">2</span>\n        <div>\n          <b class=\"text-white\">Bước 2: Chứng minh hai đường thẳng song song</b>\n          <p class=\"text-slate-300 mt-0.5\">Sử dụng: Đường trung bình tam giác, tỉ số Ta-lét đảo $\\frac{AM}{AB} = \\frac{AN}{AC}$, hoặc cạnh đối hình bình hành để chỉ ra $a \\parallel b$.</p>\n        </div>\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded-lg border border-slate-700/60 flex items-start gap-2.5\">\n        <span class=\"w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center shrink-0\">3</span>\n        <div>\n          <b class=\"text-white\">Bước 3: Hoàn thiện lập luận chặt chẽ</b>\n          <p class=\"text-slate-300 mt-0.5\">Chỉ ra $a \\not\\subset (P)$, $b \\subset (P)$ và $a \\parallel b \\implies a \\parallel (P)$.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"p-2.5 bg-slate-900/80 rounded-lg border border-slate-700/70 text-xs text-slate-300 flex items-center gap-2\">\n    <span class=\"text-emerald-400 font-bold\">💡 Mẹo tìm đường thẳng b:</span> Đường thẳng $b$ thường là giao tuyến của mặt phẳng $(P)$ với một mặt phẳng phụ $(\\beta)$ chứa $a$.\n  </div>\n</div>\n",
      "narration": "Để trình bày một bài toán chứng minh đường thẳng a song song với mặt phẳng P đạt điểm tối đa, các em hãy áp dụng chuẩn mực quy trình 3 bước sau đây. Bước 1: Tìm một đường thẳng b thích hợp nằm trong mặt phẳng P. Bước 2: Chứng minh a song song với b bằng các tính chất hình học phẳng như đường trung bình, định lí Ta-lét hay hình bình hành. Bước 3: Nêu rõ điều kiện a không nằm trong P và kết luận.",
      "startTime": 81.53,
      "endTime": 112.49,
      "duration": 30.96
    },
    {
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 1: NHẬN BIẾT VỊ TRÍ TƯƠNG ĐỐI",
      "subtitle": "BÀI 12 • MỤC 1 • VÍ DỤ MINH HỌA CƠ BẢN",
      "mascotMode": "think",
      "mascotTip": "Quan sát đáy hình bình hành ABCD và các mặt bên của hình chóp S.ABCD!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded border border-indigo-400/30\">VÍ DỤ 1 (15 GIÂY)</span>\n      <span class=\"text-xs text-slate-400\">Nhận biết vị trí tương đối</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed\">\n      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Trong các khẳng định sau, khẳng định nào <b>SAI</b>?\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 mt-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700/60\">\n        <b>A.</b> $AB \\parallel (SCD)$\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700/60\">\n        <b>B.</b> $SA \\parallel (ABCD)$\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700/60\">\n        <b>C.</b> $SO \\cap (ABCD) = \\{O\\}$\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700/60\">\n        <b>D.</b> $CD \\parallel (SAB)$\n      </div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-xl border border-indigo-500/40\">\n    <div class=\"flex items-center gap-2\">\n      <div class=\"w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400 flex items-center justify-center font-bold text-indigo-300 text-sm\">⏱️</div>\n      <div>\n        <div class=\"text-xs font-bold text-white\">ĐỒNG HỒ TƯ DUY 15 GIÂY</div>\n        <div class=\"text-[10px] text-slate-400\">Kiểm tra xem SA có nằm trong hay cắt (ABCD) không?</div>\n      </div>\n    </div>\n    <div class=\"text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30\">15s</div>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng đến với Ví dụ 1. Cho hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O. Xét các khẳng định sau: A: AB song song với mặt phẳng SCD; B: SA song song với mặt phẳng ABCD; C: SO cắt mặt phẳng ABCD tại O; D: CD song song với mặt phẳng SAB. Các em có 15 giây suy nghĩ để tìm khẳng định sai trong các mệnh đề.",
      "startTime": 112.49,
      "endTime": 145.18,
      "duration": 32.69
    },
    {
      "sceneIndex": 6,
      "title": "6. GIẢI CHI TIẾT VÍ DỤ 1",
      "subtitle": "BÀI 12 • MỤC 1 • PHÂN TÍCH VÀ KẾT LUẬN",
      "mascotMode": "cheer",
      "mascotTip": "Khẳng định B sai vì SA cắt mặt phẳng (ABCD) tại điểm A!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full\">LỜI GIẢI VÍ DỤ 1</span>\n      <span class=\"text-xs font-bold text-emerald-300\">ĐÁP ÁN: B</span>\n    </div>\n\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-rose-500/30 text-slate-300\">\n        <span class=\"text-rose-400 font-bold\">Khẳng định B SAI vì:</span> Điểm $A \\in SA$ và $A \\in (ABCD)$, mà $S \\notin (ABCD)$. Do đó đường thẳng $SA$ cắt $(ABCD)$ tại duy nhất điểm $A$, ký hiệu:\n        $$SA \\cap (ABCD) = \\{A\\}$$\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <span class=\"text-emerald-400 font-bold\">Khẳng định A ĐÚNG vì:</span> Tứ giác $ABCD$ là hình bình hành nên $AB \\parallel CD$.\n        Mặt khác $CD \\subset (SCD)$ và $AB \\not\\subset (SCD)$. Theo Định lí 1 suy ra $AB \\parallel (SCD)$.\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <span class=\"text-emerald-400 font-bold\">Khẳng định C, D ĐÚNG:</span> Tương tự $CD \\parallel AB \\subset (SAB) \\implies CD \\parallel (SAB)$ và $SO$ cắt đáy tại tâm $O$.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết giờ rồi! Đáp án chính xác là phương án B. Điểm A vừa thuộc đường thẳng SA vừa thuộc mặt phẳng ABCD, do đó SA cắt mặt phẳng ABCD tại A, không thể song song. Ngược lại, AB không thuộc SCD và AB song song với CD nằm trong SCD nên AB song song với SCD. Tương tự CD song song với SAB là đúng.",
      "startTime": 145.18,
      "endTime": 173.57,
      "duration": 28.39
    },
    {
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 2: ĐƯỜNG TRUNG BÌNH TAM GIÁC",
      "subtitle": "BÀI 12 • MỤC 1 • CHỨNG MINH ĐƯỜNG THẲNG SONG SONG MẶT PHẲNG",
      "mascotMode": "pointer",
      "mascotTip": "Đoạn nối hai trung điểm trong một tam giác là đường trung bình, song song với cạnh thứ ba!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-blue-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-blue-500/20 text-blue-300 font-bold text-xs rounded border border-blue-400/30\">VÍ DỤ 2 (15 GIÂY)</span>\n      <span class=\"text-xs text-slate-400\">Đường trung bình & hình bình hành</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed\">\n      Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của các cạnh $AB$ và $AC$.\n    </p>\n    <ul class=\"list-disc list-inside text-xs text-slate-300 mt-1 space-y-1\">\n      <li><b>a)</b> Chứng minh rằng $MN \\parallel (BCD)$.</li>\n      <li><b>b)</b> Gọi $P, Q$ lần lượt là trung điểm của $BD$ và $CD$. Chứng minh tứ giác $MNPQ$ là hình bình hành.</li>\n    </ul>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-blue-950 rounded-xl border border-blue-500/40\">\n    <div class=\"flex items-center gap-2\">\n      <div class=\"w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center font-bold text-blue-300 text-sm\">⏱️</div>\n      <div>\n        <div class=\"text-xs font-bold text-white\">ĐỒNG HỒ TƯ DUY 15 GIÂY</div>\n        <div class=\"text-[10px] text-slate-400\">Xem xét tam giác ABC và tam giác BCD có cạnh chung nào!</div>\n      </div>\n    </div>\n    <div class=\"text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30\">15s</div>\n  </div>\n</div>\n",
      "narration": "Bây giờ chúng ta cùng đến với Ví dụ 2. Cho tứ diện ABCD. Gọi M, N lần lượt là trung điểm của AB và AC. Chứng minh rằng đường thẳng MN song song với mặt phẳng BCD. Tiếp theo, gọi P, Q lần lượt là trung điểm của BD và CD. Tứ giác MNPQ là hình gì? Các em có 15 giây để suy nghĩ.",
      "startTime": 173.57,
      "endTime": 202.06,
      "duration": 28.49
    },
    {
      "sceneIndex": 8,
      "title": "8. GIẢI CHI TIẾT VÍ DỤ 2",
      "subtitle": "BÀI 12 • MỤC 1 • TRÌNH BÀY CHUẨN MỰC BỘ GD&ĐT",
      "mascotMode": "cheer",
      "mascotTip": "MN // BC và PQ // BC với độ dài bằng một nửa BC, suy ra MNPQ là hình bình hành!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full\">LỜI GIẢI VÍ DỤ 2</span>\n      <span class=\"text-xs font-bold text-emerald-300\">ĐÁP ÁN CHI TIẾT</span>\n    </div>\n\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b class=\"text-blue-300\">a) Chứng minh $MN \\parallel (BCD)$:</b>\n        <p class=\"mt-1\">\n          Trong tam giác $ABC$, vì $M, N$ lần lượt là trung điểm của $AB, AC$ nên $MN$ là đường trung bình của $\\triangle ABC \\implies MN \\parallel BC$.\n        </p>\n        <p class=\"mt-1 font-mono text-emerald-300\">\n          Ta có: $\\begin{cases} MN \\not\\subset (BCD) \\\\ BC \\subset (BCD) \\\\ MN \\parallel BC \\end{cases} \\implies MN \\parallel (BCD)$ (đpcm).\n        </p>\n      </div>\n\n      <div class=\"p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b class=\"text-amber-300\">b) Chứng minh $MNPQ$ là hình bình hành:</b>\n        <p class=\"mt-1\">\n          Trong tam giác $BCD$, $P$ và $Q$ lần lượt là trung điểm của $BD$ và $CD$ nên $PQ$ là đường trung bình của $\\triangle BCD \\implies PQ \\parallel BC$ và $PQ = \\frac{1}{2}BC$.\n        </p>\n        <p class=\"mt-1\">\n          Mà $MN \\parallel BC$ và $MN = \\frac{1}{2}BC$. Do đó:\n          $$\\begin{cases} MN \\parallel PQ \\\\ MN = PQ = \\frac{1}{2}BC \\end{cases} \\implies MNPQ \\text{ là hình bình hành}.$$\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thời gian đã hết! Chúng ta giải chi tiết như sau: Trong tam giác ABC, M và N là trung điểm của AB và AC nên MN là đường trung bình, suy ra MN song song với BC. Mặt khác BC nằm trong mặt phẳng BCD và MN không nằm trong BCD. Do đó MN song song với mặt phẳng BCD. Đối với câu b, trong tam giác BCD, PQ cũng là đường trung bình nên PQ song song và bằng một nửa BC. Do đó MN song song và bằng PQ, kết luận MNPQ là hình bình hành.",
      "startTime": 202.06,
      "endTime": 244.94,
      "duration": 42.89
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: HÌNH BÌNH HÀNH VÀ ĐƯỜNG TRUNG BÌNH",
      "subtitle": "BÀI 12 • MỤC 1 • BÀI TOÁN THIẾT YẾU TRONG HÌNH CHÓP",
      "mascotMode": "pointer",
      "mascotTip": "Tâm O của hình bình hành là trung điểm của cả hai đường chéo AC và BD!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded border border-indigo-400/30\">VÍ DỤ 3 (30 GIÂY)</span>\n      <span class=\"text-xs text-slate-400\">Ứng dụng tâm hình bình hành</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed\">\n      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$ là trung điểm của đoạn thẳng $SC$.\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 mt-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b>a)</b> Chứng minh $OM \\parallel (SAB)$.\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b>b)</b> Chứng minh $OM \\parallel (SAD)$.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-xl border border-indigo-500/40\">\n    <div class=\"flex items-center gap-2\">\n      <div class=\"w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400 flex items-center justify-center font-bold text-indigo-300 text-sm\">⏱️</div>\n      <div>\n        <div class=\"text-xs font-bold text-white\">ĐỒNG HỒ TƯ DUY 30 GIÂY</div>\n        <div class=\"text-[10px] text-slate-400\">Gợi ý: Xét tam giác SAC, O là trung điểm của AC!</div>\n      </div>\n    </div>\n    <div class=\"text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30\">30s</div>\n  </div>\n</div>\n",
      "narration": "Tiếp theo là Ví dụ 3, một dạng toán xuất hiện liên tục trong các đề kiểm tra. Cho hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O. Gọi M là trung điểm của cạnh SC. Câu a: Chứng minh OM song song với mặt phẳng SAB. Câu b: Chứng minh OM song song với mặt phẳng SAD. Các em có 30 giây suy nghĩ.",
      "startTime": 244.94,
      "endTime": 272.18,
      "duration": 27.24
    },
    {
      "sceneIndex": 10,
      "title": "10. GIẢI CHI TIẾT VÍ DỤ 3",
      "subtitle": "BÀI 12 • MỤC 1 • PHÂN TÍCH ĐƯỜNG TRUNG BÌNH TRONG TAM GIÁC SAC",
      "mascotMode": "cheer",
      "mascotTip": "Trong tam giác SAC, OM là đường trung bình nên OM // SA!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full\">LỜI GIẢI VÍ DỤ 3</span>\n      <span class=\"text-xs font-bold text-emerald-300\">ĐÁP ÁN CHI TIẾT</span>\n    </div>\n\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <p class=\"font-bold text-amber-300\">Nhận xét mấu chốt:</p>\n        <p class=\"mt-0.5\">\n          Vì đáy $ABCD$ là hình bình hành có $O$ là giao điểm hai đường chéo $AC$ và $BD$ nên $O$ là trung điểm của $AC$.\n        </p>\n        <p class=\"mt-1\">\n          Xét tam giác $SAC$: $O$ là trung điểm $AC$, $M$ là trung điểm $SC \\implies OM$ là đường trung bình của $\\triangle SAC$.\n          Suy ra $\\mathbf{OM \\parallel SA}$.\n        </p>\n      </div>\n\n      <div class=\"grid grid-cols-2 gap-2 text-xs\">\n        <div class=\"p-2 bg-slate-900 rounded border border-blue-500/30 text-slate-300\">\n          <b class=\"text-blue-300\">a) Chứng minh $OM \\parallel (SAB)$:</b>\n          <p class=\"mt-1 font-mono text-emerald-300\">\n            $\\begin{cases} OM \\not\\subset (SAB) \\\\ SA \\subset (SAB) \\\\ OM \\parallel SA \\end{cases} \\implies OM \\parallel (SAB)$\n          </p>\n        </div>\n        <div class=\"p-2 bg-slate-900 rounded border border-indigo-500/30 text-slate-300\">\n          <b class=\"text-indigo-300\">b) Chứng minh $OM \\parallel (SAD)$:</b>\n          <p class=\"mt-1 font-mono text-emerald-300\">\n            $\\begin{cases} OM \\not\\subset (SAD) \\\\ SA \\subset (SAD) \\\\ OM \\parallel SA \\end{cases} \\implies OM \\parallel (SAD)$\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "30 giây đã trôi qua! Hãy cùng đối chiếu lời giải: Vì ABCD là hình bình hành tâm O nên O là trung điểm của đường chéo AC. Trong tam giác SAC, O là trung điểm AC và M là trung điểm SC, nên OM là đường trung bình của tam giác SAC, suy ra OM song song với SA. Vì SA nằm trong mặt phẳng SAB và OM không nằm trong SAB nên OM song song với mặt phẳng SAB. Tương tự, vì SA cũng nằm trong mặt phẳng SAD nên OM song song với mặt phẳng SAD.",
      "startTime": 272.18,
      "endTime": 309.58,
      "duration": 37.39
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: ĐÚNG / SAI TỔNG HỢP MỤC 1",
      "subtitle": "BÀI 12 • MỤC 1 • CÂU HỎI TRẮC NGHIỆM ĐÚNG SAI CHUẨN ĐỀ THI",
      "mascotMode": "think",
      "mascotTip": "Hãy đọc kĩ từng ý a, b, c, d trước khi chọn Đúng hay Sai nhé!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded border border-amber-400/30\">VÍ DỤ 4 (15 GIÂY)</span>\n      <span class=\"text-xs text-slate-400\">Trắc nghiệm Đúng / Sai</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed\">\n      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $I, K$ lần lượt là trung điểm của $SA$ và $SB$.\n    </p>\n\n    <div class=\"space-y-1.5 mt-2 text-xs\">\n      <div class=\"p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b>a)</b> $IK$ là đường trung bình của tam giác $SAB$ nên $IK \\parallel AB$.\n      </div>\n      <div class=\"p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b>b)</b> Đường thẳng $IK$ song song với mặt phẳng $(ABCD)$.\n      </div>\n      <div class=\"p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b>c)</b> Đường thẳng $IK$ song song với mặt phẳng $(SCD)$.\n      </div>\n      <div class=\"p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b>d)</b> Mặt phẳng $(OIK)$ cắt mặt phẳng $(SCD)$ theo giao tuyến đi qua trung điểm của $SC$.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-amber-950 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-2\">\n      <div class=\"w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center font-bold text-amber-300 text-sm\">⏱️</div>\n      <div>\n        <div class=\"text-xs font-bold text-white\">ĐỒNG HỒ TƯ DUY 15 GIÂY</div>\n        <div class=\"text-[10px] text-slate-400\">Xét quan hệ giữa IK với AB và CD!</div>\n      </div>\n    </div>\n    <div class=\"text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30\">15s</div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4 là dạng câu hỏi trắc nghiệm Đúng Sai chuẩn cấu trúc đề thi mới của Bộ Giáo dục. Cho hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O. Gọi I, K lần lượt là trung điểm của SA và SB. Các em có 15 giây để xác định tính đúng sai của 4 khẳng định trên màn hình.",
      "startTime": 309.58,
      "endTime": 332.88,
      "duration": 23.3
    },
    {
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT MỤC 1 & ĐÁP ÁN VÍ DỤ 4",
      "subtitle": "BÀI 12 • MỤC 1 • GHI NHỚ TRỌNG TÂM ĐIỀU KIỆN SONG SONG",
      "mascotMode": "cheer",
      "mascotTip": "Cả 4 mệnh đề a, b, c, d đều ĐÚNG! Chúc mừng các em đã hoàn thành xuất sắc Mục 1!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full\">ĐÁP ÁN VÍ DỤ 4</span>\n      <span class=\"text-xs font-bold text-emerald-300\">KẾT QUẢ: CẢ 4 Ý ĐỀU ĐÚNG</span>\n    </div>\n\n    <div class=\"space-y-1.5 text-xs\">\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>a)</b> $IK$ là đường trung bình $\\triangle SAB \\implies IK \\parallel AB$.</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>b)</b> $IK \\not\\subset (ABCD), AB \\subset (ABCD), IK \\parallel AB \\implies IK \\parallel (ABCD)$.</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>c)</b> Vì $AB \\parallel CD \\implies IK \\parallel CD \\subset (SCD) \\implies IK \\parallel (SCD)$.</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>d)</b> Mặt phẳng $(OIK)$ chứa $IK \\parallel CD$, cắt $(SCD)$ qua trung điểm của $SC$.</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n    </div>\n\n    <div class=\"mt-2.5 bg-gradient-to-r from-blue-950 to-indigo-950 p-2.5 rounded-lg border border-blue-500/30 text-xs\">\n      <b class=\"text-blue-300 font-bold\">TỔNG KẾT MỤC 1:</b>\n      <p class=\"text-slate-300 mt-0.5\">\n        Muốn chứng minh $a \\parallel (P)$, tìm một đường thẳng $b \\subset (P)$ sao cho $a \\parallel b$ và $a \\not\\subset (P)$.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em! Cả bốn khẳng định của Ví dụ 4 đều ĐÚNG. Đoạn IK là đường trung bình nên song song với AB. Vì AB nằm trong ABCD nên IK song song với ABCD. Lại có AB song song CD mà CD nằm trong SCD nên IK cũng song song với SCD. Giao tuyến của mặt phẳng OIK và SCD đi qua trung điểm của SC và SD song song với CD. Như vậy chúng ta đã nắm vững điều kiện để đường thẳng song song với mặt phẳng. Hãy sẵn sàng bước sang Mục 2 với các tính chất giao tuyến kỳ thú!",
      "startTime": 332.88,
      "endTime": 373.51,
      "duration": 40.63
    }
  ]
};
  root.G11_CHAPTER4_DATA.toan11_bai12_muc1 = root.G11_CHAPTER4_DATA.g11_bai12_muc1;

  root.G11_CHAPTER4_DATA.g11_bai12_muc2 = {
  "lessonId": "toan11_bai12",
  "lessonTitle": "Bài 12: Đường thẳng và mặt phẳng song song",
  "sectionId": "g11_bai12_muc2",
  "sectionTitle": "Mục 2: Tính chất của đường thẳng song song mặt phẳng & Định lí giao tuyến song song",
  "audio": "/audio/g11_bai12_muc2.mp3",
  "audioSrc": "./audio/g11_bai12_muc2.mp3",
  "audio_src": "./audio/g11_bai12_muc2.mp3",
  "title": "Mục 2: Tính chất của đường thẳng song song mặt phẳng & Định lí giao tuyến song song",
  "owl_tip": "Định lí 2: Mặt phẳng chứa đường thẳng d // (P) cắt (P) theo giao tuyến song song với d!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. ĐẶT VẤN ĐỀ VỀ TÍNH CHẤT GIAO TUYẾN",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. ĐỊNH LÍ 2: ĐỊNH LÍ GIAO TUYẾN SONG SONG",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: ĐÚNG / SAI TỔNG HỢP MỤC 2",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. TỔNG KẾT MỤC 2 & ĐÁP ÁN VÍ DỤ 4",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 244.2,
  "formattedDuration": "04:04",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. ĐẶT VẤN ĐỀ VỀ TÍNH CHẤT GIAO TUYẾN",
      "subtitle": "BÀI 12 • MỤC 2 • MỐI QUAN HỆ GIỮA SONG SONG VÀ GIAO TUYẾN",
      "mascotMode": "pointer",
      "mascotTip": "Nếu a // (P), một mặt phẳng (Q) chứa a cắt (P) theo giao tuyến b thì b có quan hệ gì với a?",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/60 to-indigo-900/40 p-4 rounded-xl border border-purple-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-3 py-1 bg-purple-500/30 text-purple-300 font-bold text-xs rounded-full border border-purple-400/40\">MỤC 2</span>\n      <h3 class=\"text-base font-bold text-white\">TÍNH CHẤT GIAO TUYẾN SONG SONG</h3>\n    </div>\n    <p class=\"text-slate-300 text-sm leading-relaxed\">\n      Từ giả thiết đường thẳng song song với mặt phẳng, làm thế nào để xác định phương của các đường giao tuyến? Đây là chìa khóa then chốt để giải quyết các bài toán dựng thiết diện không gian.\n    </p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"p-3 bg-slate-800/80 rounded-xl border border-blue-500/30\">\n      <div class=\"font-bold text-blue-300 mb-1\">CHIỀU THUẬN (ĐỊNH LÍ 1):</div>\n      <p class=\"text-slate-300\">\n        Biết $a \\parallel b$ (với $b \\subset (P)$) $\\implies a \\parallel (P)$.\n      </p>\n      <div class=\"mt-2 text-slate-400 text-[11px]\">→ Dùng để chứng minh song song.</div>\n    </div>\n    <div class=\"p-3 bg-slate-800/80 rounded-xl border border-amber-500/30\">\n      <div class=\"font-bold text-amber-300 mb-1\">CHIỀU ĐẢO / HỆ QUẢ (ĐỊNH LÍ 2):</div>\n      <p class=\"text-slate-300\">\n        Biết $a \\parallel (P)$, mặt phẳng $(Q) \\supset a$ cắt $(P)$ theo $b \\implies b \\parallel a$.\n      </p>\n      <div class=\"mt-2 text-slate-400 text-[11px]\">→ Dùng để dựng giao tuyến và thiết diện.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 2 của Bài 12: Tính chất của đường thẳng song song với mặt phẳng. Ở Mục 1, chúng ta đã biết cách đi từ hai đường thẳng song song để suy ra đường thẳng song song với mặt phẳng. Bây giờ, theo chiều ngược lại, nếu đã có sẵn một đường thẳng a song song với mặt phẳng P, thì khi một mặt phẳng Q chứa a cắt P, giao tuyến của chúng sẽ có tính chất gì đặc biệt?",
      "startTime": 0.0,
      "endTime": 29.78,
      "duration": 29.78
    },
    {
      "sceneIndex": 2,
      "title": "2. ĐỊNH LÍ 2: ĐỊNH LÍ GIAO TUYẾN SONG SONG",
      "subtitle": "BÀI 12 • MỤC 2 • NỀN TẢNG CỦA CÁC BÀI TOÁN DỰNG HÌNH",
      "mascotMode": "think",
      "mascotTip": "Mặt phẳng chứa một đường thẳng song song với mặt phẳng thứ hai sẽ cắt mặt phẳng đó theo giao tuyến song song với đường thẳng ban đầu!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-gradient-to-r from-blue-950 to-indigo-950 p-3.5 rounded-xl border border-blue-500/30\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-blue-500 text-slate-950 font-bold text-xs rounded-full\">ĐỊNH LÍ 2</span>\n      <h4 class=\"text-sm font-bold text-blue-200\">ĐỊNH LÍ GIAO TUYẾN SONG SONG</h4>\n    </div>\n    <div class=\"p-3 bg-slate-900/90 rounded-lg border border-blue-500/30 text-xs text-slate-200 leading-relaxed\">\n      Cho đường thẳng $a$ song song với mặt phẳng $(P)$. Nếu mặt phẳng $(Q)$ chứa $a$ và cắt $(P)$ theo giao tuyến $b$ thì $b$ song song với $a$.\n    </div>\n    <div class=\"mt-3 p-2 bg-blue-900/30 rounded border border-blue-400/40 text-center font-mono text-blue-300 font-bold text-xs\">\n      $$\\begin{cases} a \\parallel (P) \\\\ a \\subset (Q) \\\\ (P) \\cap (Q) = b \\end{cases} \\implies b \\parallel a$$\n    </div>\n  </div>\n\n  <div class=\"p-3 bg-slate-800/90 rounded-xl border border-slate-700/60 text-xs space-y-1\">\n    <b class=\"text-amber-400\">Chứng minh nhanh:</b>\n    <p class=\"text-slate-300\">\n      Do $b = (P) \\cap (Q)$ nên $b \\subset (P)$ và $b \\subset (Q)$. Vì $a \\subset (Q)$ nên $a$ và $b$ cùng nằm trong mặt phẳng $(Q)$.\n      Nếu $a$ cắt $b$ tại điểm $M$, thì $M \\in b \\subset (P) \\implies M \\in (P)$. Khi đó $a$ và $(P)$ có điểm chung $M$, mâu thuẫn với $a \\parallel (P)$.\n      Vậy $a$ và $b$ không thể cắt nhau, suy ra $b \\parallel a$.\n    </p>\n  </div>\n</div>\n",
      "narration": "Định lí 2 phát biểu như sau: Cho đường thẳng a song song với mặt phẳng P. Nếu mặt phẳng Q chứa a và cắt P theo giao tuyến b thì b song song với a. Các em hãy chú ý công thức tóm tắt trên màn hình: a song song P, a chứa trong Q, P giao Q bằng b, suy ra b song song với a.",
      "startTime": 29.78,
      "endTime": 54.24,
      "duration": 24.46
    },
    {
      "sceneIndex": 3,
      "title": "3. HỆ QUẢ: HAI MẶT PHẲNG CÙNG SONG SONG VỚI MỘT ĐƯỜNG THẲNG",
      "subtitle": "BÀI 12 • MỤC 2 • GIAO TUYẾN CỦA HAI MẶT PHẲNG",
      "mascotMode": "pointer",
      "mascotTip": "Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng song song với đường thẳng đó!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-gradient-to-r from-amber-950/70 to-slate-900 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-full\">HỆ QUẢ</span>\n      <h4 class=\"text-sm font-bold text-amber-200\">GIAO TUYẾN CỦA HAI MẶT PHẲNG CÙNG SONG SONG VỚI MỘT ĐƯỜNG</h4>\n    </div>\n    <div class=\"p-3 bg-slate-900/90 rounded-lg border border-amber-500/30 text-xs text-slate-200 leading-relaxed\">\n      Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng (nếu có) song song với đường thẳng đó.\n    </div>\n    <div class=\"mt-3 p-2 bg-amber-900/30 rounded border border-amber-400/40 text-center font-mono text-amber-300 font-bold text-xs\">\n      $$\\begin{cases} (P) \\parallel a \\\\ (Q) \\parallel a \\\\ (P) \\cap (Q) = d \\end{cases} \\implies d \\parallel a$$\n    </div>\n  </div>\n\n  <div class=\"p-3 bg-slate-800/90 rounded-xl border border-indigo-500/30 text-xs text-slate-300\">\n    <span class=\"text-indigo-400 font-bold\">Ý nghĩa hình học:</span> Khi hai mái nhà cùng dốc và mép dưới của cả hai mái đều song song với mặt đất, thì đường nóc nhà chính là giao tuyến của hai mái nhà, và nó luôn chạy song song với mặt đất.\n  </div>\n</div>\n",
      "narration": "Từ Định lí 2, chúng ta có một hệ quả cực kì quan trọng: Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng, nếu có, cũng song song với đường thẳng đó. Hệ quả này giúp các em nhanh chóng xác định phương của giao tuyến mà không cần tìm hai điểm chung.",
      "startTime": 54.24,
      "endTime": 75.5,
      "duration": 21.26
    },
    {
      "sceneIndex": 4,
      "title": "4. TÍNH CHẤT QUA ĐƯỜNG THẲNG VÀ SONG SONG ĐƯỜNG THẲNG KHÁC",
      "subtitle": "BÀI 12 • MỤC 2 • ĐỊNH LÍ DUY NHẤT MẶT PHẲNG",
      "mascotMode": "think",
      "mascotTip": "Cho hai đường thẳng chéo nhau, luôn có duy nhất một mặt phẳng chứa đường này và song song đường kia!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-purple-500 text-white font-bold text-xs rounded-full\">TÍNH CHẤT 2</span>\n      <h4 class=\"text-sm font-bold text-purple-200\">MẶT PHẲNG QUA MỘT ĐƯỜNG VÀ SONG SONG ĐƯỜNG KIA</h4>\n    </div>\n    <div class=\"p-3 bg-slate-900 rounded-lg border border-purple-500/30 text-xs text-slate-200 leading-relaxed\">\n      Cho hai đường thẳng chéo nhau $a$ và $b$. Có <b>duy nhất</b> một mặt phẳng chứa đường thẳng $a$ và song song với đường thẳng $b$.\n    </div>\n\n    <div class=\"mt-2 p-2.5 bg-slate-950 rounded border border-slate-700/60 text-xs space-y-1\">\n      <b class=\"text-emerald-400\">Cách dựng thực hành:</b>\n      <ol class=\"list-decimal list-inside text-slate-300 space-y-0.5\">\n        <li>Lấy một điểm $A \\in a$.</li>\n        <li>Qua điểm $A$, kẻ đường thẳng $b' \\parallel b$.</li>\n        <li>Mặt phẳng $(P) = (a, b')$ là mặt phẳng chứa $a$ và song song với $b$.</li>\n      </ol>\n    </div>\n  </div>\n\n  <div class=\"p-2.5 bg-indigo-950/40 rounded-lg border border-indigo-500/30 text-xs text-indigo-300\">\n    <span class=\"font-bold\">Ứng dụng:</span> Giúp quy bài toán khoảng cách giữa hai đường thẳng chéo nhau về khoảng cách từ một điểm đến một mặt phẳng song song!\n  </div>\n</div>\n",
      "narration": "Một tính chất không thể thiếu trong các bài toán khoảng cách và góc sau này: Cho hai đường thẳng chéo nhau a và b. Có duy nhất một mặt phẳng chứa đường thẳng a và song song với đường thẳng b. Cách dựng rất trực quan: Lấy một điểm A bất kì trên đường thẳng a, qua điểm A dựng đường thẳng b phẩy song song với b. Khi đó mặt phẳng tạo bởi hai đường thẳng cắt nhau a và b phẩy chính là mặt phẳng duy nhất cần tìm.",
      "startTime": 75.5,
      "endTime": 106.75,
      "duration": 31.25
    },
    {
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 1: DỰNG GIAO TUYẾN SONG SONG VỚI MỘT ĐƯỜNG THẲNG",
      "subtitle": "BÀI 12 • MỤC 2 • BÀI TOÁN XÁC ĐỊNH GIAO TUYẾN KINH ĐIỂN",
      "mascotMode": "pointer",
      "mascotTip": "Giao tuyến của mặt phẳng (α) với (ABCD) đi qua điểm chung và song song với AB!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded border border-indigo-400/30\">VÍ DỤ 1 (15 GIÂY)</span>\n      <span class=\"text-xs text-slate-400\">Dựng giao tuyến qua một điểm</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed\">\n      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M$ là một điểm thuộc miền trong đoạn thẳng $SB$. Mặt phẳng $(\\alpha)$ đi qua $M$ và song song với $AB$.\n    </p>\n    <div class=\"space-y-1 mt-2 text-xs text-slate-300\">\n      <div><b>a)</b> Tìm giao tuyến của $(\\alpha)$ với mặt phẳng $(SAB)$.</div>\n      <div><b>b)</b> Giả sử $(\\alpha)$ cắt $AD$ tại $N$. Tìm giao tuyến của $(\\alpha)$ với mặt phẳng $(ABCD)$.</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-xl border border-indigo-500/40\">\n    <div class=\"flex items-center gap-2\">\n      <div class=\"w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400 flex items-center justify-center font-bold text-indigo-300 text-sm\">⏱️</div>\n      <div>\n        <div class=\"text-xs font-bold text-white\">ĐỒNG HỒ TƯ DUY 15 GIÂY</div>\n        <div class=\"text-[10px] text-slate-400\">Mặt phẳng (SAB) chứa AB mà (α) // AB!</div>\n      </div>\n    </div>\n    <div class=\"text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30\">15s</div>\n  </div>\n</div>\n",
      "narration": "Bây giờ chúng ta cùng luyện tập Ví dụ 1. Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Gọi M là một điểm nằm trên cạnh SB. Mặt phẳng alpha đi qua M và song song với đường thẳng AB. Hãy xác định giao tuyến của mặt phẳng alpha với các mặt phẳng SAB và ABCD. Các em có 15 giây để suy nghĩ.",
      "startTime": 106.75,
      "endTime": 133.51,
      "duration": 26.76
    },
    {
      "sceneIndex": 6,
      "title": "6. GIẢI CHI TIẾT VÍ DỤ 1",
      "subtitle": "BÀI 12 • MỤC 2 • ÁP DỤNG ĐỊNH LÍ GIAO TUYẾN SONG SONG",
      "mascotMode": "cheer",
      "mascotTip": "Giao tuyến với (SAB) là đường thẳng d1 qua M song song AB; giao tuyến với đáy là d2 qua N song song AB!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full\">LỜI GIẢI VÍ DỤ 1</span>\n      <span class=\"text-xs font-bold text-emerald-300\">ĐÁP ÁN CHI TIẾT</span>\n    </div>\n\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b class=\"text-blue-300\">a) Giao tuyến của $(\\alpha)$ với $(SAB)$:</b>\n        <p class=\"mt-1\">\n          Ta có: $M \\in (\\alpha) \\cap (SAB)$. Lại có $(\\alpha) \\parallel AB$ và $AB \\subset (SAB)$.\n        </p>\n        <p class=\"mt-1 font-mono text-emerald-300\">\n          $\\implies (\\alpha) \\cap (SAB) = d_1$ đi qua $M$ và $d_1 \\parallel AB$.\n        </p>\n        <p class=\"mt-0.5 text-slate-400\">Trong mặt phẳng $(SAB)$, kẻ đường thẳng qua $M$ song song $AB$ cắt $SA$ tại $P$.</p>\n      </div>\n\n      <div class=\"p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b class=\"text-amber-300\">b) Giao tuyến của $(\\alpha)$ với $(ABCD)$:</b>\n        <p class=\"mt-1\">\n          Ta có: $N \\in (\\alpha) \\cap (ABCD)$, mặt khác $(\\alpha) \\parallel AB$ mà $AB \\subset (ABCD)$.\n        </p>\n        <p class=\"mt-1 font-mono text-emerald-300\">\n          $\\implies (\\alpha) \\cap (ABCD) = d_2$ đi qua $N$ và $d_2 \\parallel AB \\parallel CD$.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thời gian đã hết! Hãy cùng xem lời giải: Ở câu a, mặt phẳng alpha song song với AB và điểm M là điểm chung của alpha và SAB. Vì SAB chứa đường thẳng AB nên theo Định lí 2, giao tuyến của alpha và SAB phải là đường thẳng d1 đi qua M và song song với AB. Đường thẳng này cắt SA tại một điểm P. Ở câu b, N là điểm chung của alpha và ABCD, mà đáy ABCD chứa AB song song với alpha. Do đó giao tuyến của alpha với đáy ABCD là đường thẳng d2 đi qua N và song song với AB.",
      "startTime": 133.51,
      "endTime": 144.7,
      "duration": 11.18
    },
    {
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 2: THIẾT DIỆN CỦA TỨ DIỆN ĐỀU",
      "subtitle": "BÀI 12 • MỤC 2 • BÀI TOÁN XÁC ĐỊNH HÌNH DẠNG VÀ TÍNH CHU VI",
      "mascotMode": "pointer",
      "mascotTip": "Mặt phẳng (P) song song với cả AB và CD thì các cạnh của thiết diện sẽ song song với AB và CD!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-blue-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-blue-500/20 text-blue-300 font-bold text-xs rounded border border-blue-400/30\">VÍ DỤ 2 (15 GIÂY)</span>\n      <span class=\"text-xs text-slate-400\">Thiết diện tứ diện đều</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed\">\n      Cho tứ diện đều $ABCD$ có tất cả các cạnh bằng $a$. Mặt phẳng $(P)$ song song với $AB$ và $CD$, cắt $AC, BC, BD, AD$ lần lượt tại $M, N, P, Q$.\n    </p>\n    <div class=\"space-y-1 mt-2 text-xs text-slate-300\">\n      <div><b>a)</b> Chứng minh rằng thiết diện $MNPQ$ là hình chữ nhật.</div>\n      <div><b>b)</b> Đặt $AM = x$ ($0 < x < a$). Tính chu vi của tứ giác $MNPQ$.</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-blue-950 rounded-xl border border-blue-500/40\">\n    <div class=\"flex items-center gap-2\">\n      <div class=\"w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center font-bold text-blue-300 text-sm\">⏱️</div>\n      <div>\n        <div class=\"text-xs font-bold text-white\">ĐỒNG HỒ TƯ DUY 15 GIÂY</div>\n        <div class=\"text-[10px] text-slate-400\">Chú ý trong tứ diện đều, hai cạnh đối diện AB và CD vuông góc với nhau!</div>\n      </div>\n    </div>\n    <div class=\"text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30\">15s</div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2 là một bài toán hình học không gian rất đặc sắc: Cho tứ diện đều ABCD có tất cả các cạnh bằng a. Mặt phẳng P song song với hai cạnh đối diện là AB và CD, cắt các cạnh AC, BC, BD, AD lần lượt tại M, N, P, Q. Chứng minh rằng tứ giác MNPQ là hình chữ nhật. Tính chu vi của thiết diện MNPQ theo a. Các em có 15 giây suy nghĩ.",
      "startTime": 144.7,
      "endTime": 159.14,
      "duration": 14.45
    },
    {
      "sceneIndex": 8,
      "title": "8. GIẢI CHI TIẾT VÍ DỤ 2",
      "subtitle": "BÀI 12 • MỤC 2 • CHỨNG MINH HÌNH CHỮ NHẬT VÀ TÍNH CHU VI",
      "mascotMode": "cheer",
      "mascotTip": "Chu vi MNPQ = 2(x + a - x) = 2a, một hằng số không phụ thuộc vào vị trí của mặt phẳng (P)!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full\">LỜI GIẢI VÍ DỤ 2</span>\n      <span class=\"text-xs font-bold text-emerald-300\">CHU VI BẰNG $2a$</span>\n    </div>\n\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b class=\"text-blue-300\">a) Chứng minh $MNPQ$ là hình chữ nhật:</b>\n        <p class=\"mt-1\">\n          $\\begin{cases} (P) \\parallel AB \\\\ AB \\subset (ABC) \\\\ (P) \\cap (ABC) = MN \\end{cases} \\implies MN \\parallel AB$. Tương tự $PQ \\parallel AB \\implies MN \\parallel PQ$.\n        </p>\n        <p class=\"mt-1\">\n          $\\begin{cases} (P) \\parallel CD \\\\ CD \\subset (ACD) \\\\ (P) \\cap (ACD) = MQ \\end{cases} \\implies MQ \\parallel CD$. Tương tự $NP \\parallel CD \\implies MQ \\parallel NP$.\n        </p>\n        <p class=\"mt-1 text-emerald-300\">\n          Vậy $MNPQ$ là hình bình hành. Mặt khác trong tứ diện đều $ABCD$ ta có $AB \\perp CD$, mà $MN \\parallel AB, MQ \\parallel CD \\implies MN \\perp MQ$. Do đó $MNPQ$ là hình chữ nhật.\n        </p>\n      </div>\n\n      <div class=\"p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b class=\"text-amber-300\">b) Tính chu vi:</b>\n        <p class=\"mt-1\">\n          Theo định lí Ta-lét trong $\\triangle ABC$: $\\frac{MN}{AB} = \\frac{CM}{CA} = \\frac{a - x}{a} \\implies MN = a - x$.\n        </p>\n        <p class=\"mt-1\">\n          Trong $\\triangle ACD$: $\\frac{MQ}{CD} = \\frac{AM}{AC} = \\frac{x}{a} \\implies MQ = x$.\n        </p>\n        <p class=\"mt-1 font-mono font-bold text-amber-300\">\n          $$\\text{Chu vi } P = 2(MN + MQ) = 2(a - x + x) = 2a \\text{ (không đổi!)}$$\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 15 giây rồi! Lời giải chi tiết như sau: Vì mặt phẳng P song song với AB nên giao tuyến MN trong tam giác ABC và giao tuyến QP trong tam giác ABD đều song song với AB. Tương tự MQ và NP cùng song song với CD. Do đó MNPQ là hình bình hành. Hơn nữa trong tứ diện đều, cặp cạnh đối AB và CD vuông góc với nhau, nên MN vuông góc với MQ, suy ra MNPQ là hình chữ nhật. Theo định lí Ta-lét, MN bằng x và MQ bằng a trừ x, do đó chu vi bằng hai lần x cộng a trừ x, kết quả bằng đúng hai a không đổi!",
      "startTime": 159.14,
      "endTime": 163.42,
      "duration": 4.27
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: TÌM DIỆN TÍCH LỚN NHẤT CỦA THIẾT DIỆN",
      "subtitle": "BÀI 12 • MỤC 2 • BÀI TOÁN TỐI ƯU CỰC TRỊ HÌNH HỌC KHÔNG GIAN",
      "mascotMode": "pointer",
      "mascotTip": "Diện tích hình chữ nhật là S = x(a - x). Áp dụng bất đẳng thức Cô-si để tìm giá trị lớn nhất!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded border border-indigo-400/30\">VÍ DỤ 3 (30 GIÂY)</span>\n      <span class=\"text-xs text-slate-400\">Cực trị diện tích thiết diện</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed\">\n      Tiếp tục dữ kiện Ví dụ 2: Tứ diện đều $ABCD$ cạnh $a$, mặt phẳng $(P) \\parallel AB$ và $(P) \\parallel CD$, $AM = x$ ($0 < x < a$).\n    </p>\n    <div class=\"p-2.5 bg-slate-900 rounded border border-slate-700/60 text-xs text-slate-300 mt-2 space-y-1\">\n      <div><b>a)</b> Lập công thức tính diện tích $S(x)$ của thiết diện $MNPQ$ theo $a$ và $x$.</div>\n      <div><b>b)</b> Tìm $x$ để diện tích thiết diện lớn nhất và xác định hình dạng thiết diện khi đó.</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-xl border border-indigo-500/40\">\n    <div class=\"flex items-center gap-2\">\n      <div class=\"w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400 flex items-center justify-center font-bold text-indigo-300 text-sm\">⏱️</div>\n      <div>\n        <div class=\"text-xs font-bold text-white\">ĐỒNG HỒ TƯ DUY 30 GIÂY</div>\n        <div class=\"text-[10px] text-slate-400\">Bất đẳng thức AM-GM: x(a - x) ≤ [(x + a - x)/2]²</div>\n      </div>\n    </div>\n    <div class=\"text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30\">30s</div>\n  </div>\n</div>\n",
      "narration": "Tiếp tục bài toán tứ diện đều ABCD ở Ví dụ 2. Câu hỏi đặt ra là: Xác định vị trí của điểm M trên cạnh AC để diện tích thiết diện MNPQ đạt giá trị lớn nhất, và tính giá trị lớn nhất đó. Khi đó hình chữ nhật MNPQ trở thành hình đặc biệt nào? Các em có 30 giây để tìm câu trả lời.",
      "startTime": 163.42,
      "endTime": 178.1,
      "duration": 14.69
    },
    {
      "sceneIndex": 10,
      "title": "10. GIẢI CHI TIẾT VÍ DỤ 3",
      "subtitle": "BÀI 12 • MỤC 2 • BẤT ĐẲNG THỨC AM-GM VÀ THIẾT DIỆN HÌNH VUÔNG",
      "mascotMode": "cheer",
      "mascotTip": "Diện tích lớn nhất bằng a²/4 khi x = a/2, tức M là trung điểm của AC, thiết diện là hình vuông!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full\">LỜI GIẢI VÍ DỤ 3</span>\n      <span class=\"text-xs font-bold text-emerald-300\">MAX $S = \\frac{a^2}{4}$</span>\n    </div>\n\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b class=\"text-blue-300\">a) Công thức diện tích:</b>\n        <p class=\"mt-1\">\n          Thiết diện $MNPQ$ là hình chữ nhật nên diện tích là:\n          $$S(x) = MN \\cdot MQ = x(a - x) = ax - x^2$$\n        </p>\n      </div>\n\n      <div class=\"p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b class=\"text-amber-300\">b) Tìm cực trị diện tích:</b>\n        <p class=\"mt-1\">\n          Áp dụng bất đẳng thức Cô-si (AM-GM) cho hai số dương $x$ và $a - x$:\n          $$x(a - x) \\le \\left(\\frac{x + a - x}{2}\\right)^2 = \\left(\\frac{a}{2}\\right)^2 = \\frac{a^2}{4}$$\n        </p>\n        <p class=\"mt-1.5 font-bold text-emerald-300\">\n          Đẳng thức xảy ra $\\iff x = a - x \\iff x = \\frac{a}{2}$.\n        </p>\n        <p class=\"mt-1 text-slate-300\">\n          Khi $x = \\frac{a}{2}$, điểm $M$ là trung điểm cạnh $AC$. Khi đó $MN = MQ = \\frac{a}{2}$, thiết diện $MNPQ$ trở thành <b>HÌNH VUÔNG</b> có diện tích cực đại là $\\frac{a^2}{4}$.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Đã hết thời gian! Hãy cùng theo dõi lời giải: Thiết diện MNPQ là hình chữ nhật có kích thước là x và a trừ x. Do đó diện tích của thiết diện là S bằng x nhân với mở ngoặc a trừ x đóng ngoặc. Áp dụng bất đẳng thức Cô si cho hai số dương x và a trừ x, ta có tích của chúng nhỏ hơn hoặc bằng một phần tư nhân a bình phương. Dấu đẳng thức xảy ra khi x bằng a trừ x, tương đương x bằng a trên 2. Khi đó M là trung điểm của AC, hai kích thước bằng nhau nên thiết diện trở thành một hình vuông có diện tích cực đại là a bình trên 4.",
      "startTime": 178.1,
      "endTime": 179.62,
      "duration": 1.51
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: ĐÚNG / SAI TỔNG HỢP MỤC 2",
      "subtitle": "BÀI 12 • MỤC 2 • BÀI TOÁN TÍNH CHẤT GIAO TUYẾN SONG SONG",
      "mascotMode": "think",
      "mascotTip": "Kiểm tra định lí 2 và hệ quả: hai mặt phẳng cùng song song với một đường thẳng!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded border border-amber-400/30\">VÍ DỤ 4 (15 GIÂY)</span>\n      <span class=\"text-xs text-slate-400\">Trắc nghiệm Đúng / Sai</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed\">\n      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB \\parallel CD$). Mặt phẳng $(P)$ cắt các cạnh $SA, SB, SC, SD$ lần lượt tại $A', B', C', D'$ và $(P) \\parallel AB$.\n    </p>\n\n    <div class=\"space-y-1.5 mt-2 text-xs\">\n      <div class=\"p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b>a)</b> Giao tuyến $A'B'$ song song với $AB$.\n      </div>\n      <div class=\"p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b>b)</b> Giao tuyến $C'D'$ song song với $CD$.\n      </div>\n      <div class=\"p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b>c)</b> Tứ giác $A'B'C'D'$ là hình bình hành.\n      </div>\n      <div class=\"p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b>d)</b> Tứ giác $A'B'C'D'$ là hình thang.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-amber-950 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-2\">\n      <div class=\"w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center font-bold text-amber-300 text-sm\">⏱️</div>\n      <div>\n        <div class=\"text-xs font-bold text-white\">ĐỒNG HỒ TƯ DUY 15 GIÂY</div>\n        <div class=\"text-[10px] text-slate-400\">A'B' // AB và C'D' // CD mà AB // CD!</div>\n      </div>\n    </div>\n    <div class=\"text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30\">15s</div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4 là câu hỏi Đúng Sai củng cố toàn bộ tính chất của Mục 2. Cho hình chóp S.ABCD có đáy là hình thang với đáy lớn AB song song đáy nhỏ CD. Một mặt phẳng P thay đổi luôn song song với AB. Xét tính đúng sai của 4 nhận định sau đây trong 15 giây.",
      "startTime": 179.62,
      "endTime": 201.74,
      "duration": 22.13
    },
    {
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT MỤC 2 & ĐÁP ÁN VÍ DỤ 4",
      "subtitle": "BÀI 12 • MỤC 2 • NẮM VỮNG ĐỊNH LÍ GIAO TUYẾN SONG SONG",
      "mascotMode": "cheer",
      "mascotTip": "Mệnh đề a, b, d ĐÚNG; mệnh đề c SAI (A'B'C'D' chỉ là hình thang, không nhất thiết là hình bình hành)!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full\">ĐÁP ÁN VÍ DỤ 4</span>\n      <span class=\"text-xs font-bold text-emerald-300\">KẾT QUẢ ĐỐI CHIẾU</span>\n    </div>\n\n    <div class=\"space-y-1.5 text-xs\">\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>a)</b> $(P) \\parallel AB \\implies A'B' \\parallel AB$ (Định lí 2).</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>b)</b> Vì $AB \\parallel CD \\implies (P) \\parallel CD \\implies C'D' \\parallel CD$.</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>c)</b> Tứ giác $A'B'C'D'$ nói chung chỉ có $A'B' \\parallel C'D'$, không phải hình bình hành.</span>\n        <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold rounded\">SAI</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>d)</b> Tứ giác $A'B'C'D'$ có $A'B' \\parallel C'D'$ nên chắc chắn là hình thang.</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n    </div>\n\n    <div class=\"mt-2.5 bg-gradient-to-r from-purple-950 to-indigo-950 p-2.5 rounded-lg border border-purple-500/30 text-xs\">\n      <b class=\"text-purple-300 font-bold\">GHI NHỚ MỤC 2:</b>\n      <p class=\"text-slate-300 mt-0.5\">\n        Mặt phẳng cắt chứa đường thẳng song song $\\implies$ giao tuyến song song với đường thẳng đó!\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em! Trong Ví dụ 4: Khẳng định a đúng vì mặt phẳng P song song với AB nên giao tuyến A phẩy B phẩy song song AB. Khẳng định b đúng vì AB song song CD nên P cũng song song với CD, do đó C phẩy D phẩy song song CD. Khẳng định d đúng vì A phẩy B phẩy và C phẩy D phẩy cùng song song với AB nên chúng song song với nhau, thiết diện là một hình thang. Khẳng định c sai vì đáy ABCD là hình thang không phải hình bình hành nên hai cạnh còn lại nói chung không song song. Chúng ta đã hoàn tất Mục 2!",
      "startTime": 201.74,
      "endTime": 244.2,
      "duration": 42.46
    }
  ]
};
  root.G11_CHAPTER4_DATA.toan11_bai12_muc2 = root.G11_CHAPTER4_DATA.g11_bai12_muc2;

  root.G11_CHAPTER4_DATA.g11_bai12_muc3 = {
  "lessonId": "toan11_bai12",
  "lessonTitle": "Bài 12: Đường thẳng và mặt phẳng song song",
  "sectionId": "g11_bai12_muc3",
  "sectionTitle": "Mục 3: Phương pháp chứng minh d // (P) & Kỹ thuật dựng thiết diện song song",
  "audio": "/audio/g11_bai12_muc3.mp3",
  "audioSrc": "./audio/g11_bai12_muc3.mp3",
  "audio_src": "./audio/g11_bai12_muc3.mp3",
  "title": "Mục 3: Phương pháp chứng minh d // (P) & Kỹ thuật dựng thiết diện song song",
  "owl_tip": "Quy trình 4 bước dựng thiết diện: Xác định điểm chung -> Kẻ giao tuyến song song -> Lan tỏa các mặt -> Khép kín đa giác!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. TỔNG QUAN PHƯƠNG PHÁP & BÀI TOÁN THIẾT DIỆN",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. QUY TRÌNH 4 BƯỚC DỰNG THIẾT DIỆN SONG SONG",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: ĐÚNG / SAI TỔNG HỢP TOÀN BÀI 12",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. TỔNG KẾT TOÀN BỘ BÀI 12 & ĐÁP ÁN VÍ DỤ 4",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 432.14,
  "formattedDuration": "07:12",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. TỔNG QUAN PHƯƠNG PHÁP & BÀI TOÁN THIẾT DIỆN",
      "subtitle": "BÀI 12 • MỤC 3 • VẬN DỤNG VÀ PHÁT TRIỂN NĂNG LỰC HÌNH HỌC",
      "mascotMode": "pointer",
      "mascotTip": "Dựng thiết diện song song với một đường thẳng là bài toán trọng tâm trong các đề thi giữa kì và cuối kì!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-teal-900/60 to-slate-900 p-4 rounded-xl border border-teal-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-3 py-1 bg-teal-500/30 text-teal-300 font-bold text-xs rounded-full border border-teal-400/40\">MỤC 3</span>\n      <h3 class=\"text-base font-bold text-white\">BÀI TOÁN THIẾT DIỆN SONG SONG ĐƯỜNG THẲNG</h3>\n    </div>\n    <p class=\"text-slate-300 text-sm leading-relaxed\">\n      Thiết diện là đa giác tạo bởi các đoạn giao tuyến giữa mặt phẳng cắt và các mặt của hình chóp hoặc tứ diện. Khi mặt phẳng cắt song song với một đường thẳng, các giao tuyến sẽ song song với đường thẳng đó.\n    </p>\n  </div>\n\n  <div class=\"grid grid-cols-3 gap-3 text-center text-xs\">\n    <div class=\"p-3 bg-slate-800/80 rounded-xl border border-blue-500/30 shadow-md\">\n      <div class=\"text-blue-400 text-sm font-bold mb-1\">DẠNG 1</div>\n      <div class=\"text-slate-300\">Đi qua 1 điểm và song song 2 đường thẳng</div>\n      <div class=\"text-blue-300 mt-1 font-mono text-[11px] font-bold\">$(\\alpha) \\parallel d_1, d_2$</div>\n    </div>\n    <div class=\"p-3 bg-slate-800/80 rounded-xl border border-amber-500/30 shadow-md\">\n      <div class=\"text-amber-400 text-sm font-bold mb-1\">DẠNG 2</div>\n      <div class=\"text-slate-300\">Chứa 1 đường thẳng và song song 1 đường thẳng</div>\n      <div class=\"text-amber-300 mt-1 font-mono text-[11px] font-bold\">$(\\alpha) \\supset d_1, \\parallel d_2$</div>\n    </div>\n    <div class=\"p-3 bg-slate-800/80 rounded-xl border border-emerald-500/30 shadow-md\">\n      <div class=\"text-emerald-400 text-sm font-bold mb-1\">DẠNG 3</div>\n      <div class=\"text-slate-300\">Đi qua 2 điểm và song song 1 đường thẳng</div>\n      <div class=\"text-emerald-300 mt-1 font-mono text-[11px] font-bold\">$(\\alpha) \\supset M, N; \\parallel d$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 3 của Bài 12: Kỹ thuật tìm thiết diện song song với một đường thẳng. Ở phần này, chúng ta sẽ kết hợp nhuần nhuyễn cả Định lí 1 và Định lí 2 để giải quyết bài toán cốt lõi của hình học không gian lớp 11: Tìm thiết diện tạo bởi một mặt phẳng cắt khối đa diện khi mặt phẳng đó song song với một hoặc hai đường thẳng cho trước.",
      "startTime": 0.0,
      "endTime": 26.86,
      "duration": 26.86
    },
    {
      "sceneIndex": 2,
      "title": "2. QUY TRÌNH 4 BƯỚC DỰNG THIẾT DIỆN SONG SONG",
      "subtitle": "BÀI 12 • MỤC 3 • BÍ QUYẾT BẢN ĐỒ CHIẾN THUẬT HÌNH KHÔNG GIAN",
      "mascotMode": "think",
      "mascotTip": "Tìm điểm chung ban đầu -> Kẻ đoạn giao tuyến song song -> Cắt các cạnh để tạo điểm chung mới -> Khép kín đa giác thiết diện!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-teal-500/30\">\n    <h4 class=\"text-sm font-bold text-teal-300 mb-2\">QUY TRÌNH 4 BƯỚC DỰNG THIẾT DIỆN CHUẨN MỰC</h4>\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2.5 bg-slate-900 rounded-lg border border-slate-700/60 flex items-start gap-2.5\">\n        <span class=\"w-6 h-6 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center shrink-0\">1</span>\n        <div>\n          <b class=\"text-white\">Bước 1: Xác định điểm chung xuất phát</b>\n          <p class=\"text-slate-300 mt-0.5\">Tìm điểm chung đã biết $M$ giữa mặt phẳng cắt $(\\alpha)$ và một mặt bất kì của hình chóp.</p>\n        </div>\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded-lg border border-slate-700/60 flex items-start gap-2.5\">\n        <span class=\"w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0\">2</span>\n        <div>\n          <b class=\"text-white\">Bước 2: Kẻ đoạn giao tuyến song song</b>\n          <p class=\"text-slate-300 mt-0.5\">Nếu mặt đó chứa đường thẳng $d$ (hoặc một đường song song với $d$), kẻ qua $M$ đường thẳng song song với $d$, cắt cạnh của mặt đó tại điểm mới.</p>\n        </div>\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded-lg border border-slate-700/60 flex items-start gap-2.5\">\n        <span class=\"w-6 h-6 rounded-full bg-purple-500 text-white font-bold flex items-center justify-center shrink-0\">3</span>\n        <div>\n          <b class=\"text-white\">Bước 3: Lan tỏa sang các mặt liền kề</b>\n          <p class=\"text-slate-300 mt-0.5\">Sử dụng điểm mới tìm được làm bàn đạp để tiếp tục dựng giao tuyến với các mặt xung quanh tiếp theo.</p>\n        </div>\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded-lg border border-slate-700/60 flex items-start gap-2.5\">\n        <span class=\"w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center shrink-0\">4</span>\n        <div>\n          <b class=\"text-white\">Bước 4: Khép kín đa giác và kết luận</b>\n          <p class=\"text-slate-300 mt-0.5\">Nối các đoạn giao tuyến tuần tự quanh các mặt thành đa giác khép kín. Kết luận hình dạng thiết diện (tam giác, hình thang, ngũ giác...).</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Để dựng thiết diện song song với một đường thẳng d đạt độ chính xác 100 phần trăm, các em thực hiện theo quy trình 4 bước chuẩn mực sau: Bước 1: Xác định điểm chung ban đầu của mặt phẳng cắt với một mặt của hình chóp. Bước 2: Qua điểm chung đó, kẻ đoạn giao tuyến song song với đường thẳng d. Đoạn thẳng này sẽ cắt các cạnh của hình chóp tại các điểm mới. Bước 3: Lặp lại thao tác kẻ song song hoặc tìm giao tuyến thông thường ở các mặt tiếp theo. Bước 4: Nối các đoạn giao tuyến lại để tạo thành một đa giác phẳng khép kín, đó chính là thiết diện.",
      "startTime": 26.86,
      "endTime": 68.59,
      "duration": 41.74
    },
    {
      "sceneIndex": 3,
      "title": "3. ĐỊNH LÍ TA-LÉT ĐẢO TRONG KHÔNG GIAN",
      "subtitle": "BÀI 12 • MỤC 3 • CÔNG CỤ CHỨNG MINH TỈ SỐ ĐOẠN THẲNG",
      "mascotMode": "pointer",
      "mascotTip": "Tỉ số bằng nhau trên hai cạnh tam giác sẽ sinh ra đường thẳng song song với cạnh thứ ba và mặt phẳng!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-indigo-500 text-white font-bold text-xs rounded-full\">ĐỊNH LÍ TA-LÉT ĐẢO</span>\n      <h4 class=\"text-sm font-bold text-indigo-200\">CÔNG THỨC VÀNG TỈ SỐ SONG SONG</h4>\n    </div>\n    <div class=\"p-3 bg-slate-900 rounded-lg border border-indigo-500/30 text-xs text-slate-200 leading-relaxed\">\n      Trong tam giác $SAB$, nếu lấy điểm $M \\in SA$ và điểm $N \\in SB$ sao cho:\n      $$\\frac{SM}{SA} = \\frac{SN}{SB} \\implies MN \\parallel AB$$\n    </div>\n\n    <div class=\"mt-2 p-2.5 bg-slate-950 rounded border border-slate-700/60 text-xs space-y-1\">\n      <b class=\"text-emerald-400\">Suy luận song song với mặt phẳng:</b>\n      <p class=\"text-slate-300\">\n        Nếu có thêm $AB \\subset (ABCD)$ và $MN \\not\\subset (ABCD)$ thì ta lập tức suy ra:\n      </p>\n      <div class=\"p-2 bg-slate-900 text-center font-mono font-bold text-emerald-300 rounded border border-emerald-500/30\">\n        $$MN \\parallel (ABCD)$$\n      </div>\n    </div>\n  </div>\n\n  <div class=\"p-2.5 bg-amber-950/40 rounded-lg border border-amber-500/30 text-xs text-amber-200\">\n    <span class=\"font-bold\">Đặc biệt với trọng tâm tam giác:</span> Nếu $G$ là trọng tâm tam giác thì tỉ số luôn bằng $\\frac{2}{3}$ hoặc $\\frac{1}{3}$, rất hay dùng để chứng minh song song!\n  </div>\n</div>\n",
      "narration": "Bên cạnh đường trung bình, định lí Ta-lét đảo là công cụ mạnh mẽ hàng đầu để chứng minh quan hệ song song khi các điểm không phải là trung điểm. Nếu trên hai cạnh SA và SB của tam giác SAB, ta có tỉ số SM trên SA bằng SN trên SB, thì đường thẳng MN song song với AB. Từ đó, MN sẽ song song với bất kì mặt phẳng nào chứa AB mà không chứa MN.",
      "startTime": 68.59,
      "endTime": 98.66,
      "duration": 30.07
    },
    {
      "sceneIndex": 4,
      "title": "4. QUY CHUẨN NÉT VẼ HÌNH HỌC KHÔNG GIAN BỘ GD&ĐT",
      "subtitle": "BÀI 12 • MỤC 3 • BẮT BUỘC TUÂN THỦ NÉT LIỀN VÀ NÉT ĐỨT",
      "mascotMode": "think",
      "mascotTip": "Cạnh nhìn thấy vẽ nét liền (solid), cạnh khuất bị che lấp bắt buộc vẽ nét đứt (dashed)!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/30\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-rose-500 text-white font-bold text-xs rounded-full\">QUY CHUẨN BẮT BUỘC</span>\n      <h4 class=\"text-sm font-bold text-rose-200\">QUY TẮC NÉT LIỀN VÀ NÉT ĐỨT TRONG HÌNH HỌC KHÔNG GIAN</h4>\n    </div>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-3 bg-slate-900 rounded-lg border border-emerald-500/30\">\n        <div class=\"font-bold text-emerald-300 mb-1 flex items-center gap-1.5\">\n          <span>✏️</span> <span>NÉT LIỀN (SOLID LINE)</span>\n        </div>\n        <p class=\"text-slate-300\">\n          Áp dụng cho tất cả các đường thẳng, cạnh, và đoạn giao tuyến <b>nhìn thấy được</b> từ góc quan sát phía trước.\n        </p>\n      </div>\n\n      <div class=\"p-3 bg-slate-900 rounded-lg border border-rose-500/30\">\n        <div class=\"font-bold text-rose-300 mb-1 flex items-center gap-1.5\">\n          <span>✂️</span> <span>NÉT ĐỨT (DASHED LINE)</span>\n        </div>\n        <p class=\"text-slate-300\">\n          Bắt buộc áp dụng cho các cạnh nằm ở <b>đáy phía sau, đường bên trong khối</b> bị các mặt phẳng phía trước che lấp.\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"p-2.5 bg-slate-900/80 rounded-lg border border-slate-700/60 text-xs text-slate-300\">\n    <b class=\"text-amber-400\">Lưu ý khi mặt phẳng cắt tạo thiết diện:</b>\n    Các đoạn thiết diện nằm trên các mặt thấy được sẽ là nét liền, các đoạn nằm trên mặt khuất phía sau hoặc đáy che lấp sẽ là nét đứt!\n  </div>\n</div>\n",
      "narration": "Một quy tắc tối quan trọng các em cần khắc sâu khi vẽ hình trong vở cũng như bài thi: Cạnh nhìn thấy bắt buộc vẽ bằng nét liền. Cạnh bị che khuất bên trong hoặc phía sau khối hình bắt buộc phải vẽ bằng nét đứt đoạn. Việc vẽ nhầm nét đứt thành nét liền sẽ làm sai lệch cấu trúc không gian và bị trừ điểm rất nặng.",
      "startTime": 98.66,
      "endTime": 121.13,
      "duration": 22.46
    },
    {
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 1: THIẾT DIỆN CỦA HÌNH CHÓP TỨ GIÁC",
      "subtitle": "BÀI 12 • MỤC 3 • DỰNG THIẾT DIỆN SONG SONG HAI ĐƯỜNG THẲNG",
      "mascotMode": "pointer",
      "mascotTip": "Mặt phẳng (α) đi qua M và song song với SA và BC: Kẻ các đoạn song song trên các mặt của hình chóp!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-teal-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-teal-500/20 text-teal-300 font-bold text-xs rounded border border-teal-400/30\">VÍ DỤ 1 (15 GIÂY)</span>\n      <span class=\"text-xs text-slate-400\">Thiết diện hình thang</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed\">\n      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M \\in SC$ sao cho $SM = 2MC$. Mặt phẳng $(\\alpha)$ đi qua $M$ và song song với $SA$ và $BC$.\n    </p>\n    <div class=\"p-2.5 bg-slate-900 rounded border border-slate-700/60 text-xs text-slate-300 mt-2\">\n      <b>Yêu cầu:</b> Dựng các đoạn giao tuyến của $(\\alpha)$ với các mặt của hình chóp và cho biết thiết diện là hình gì?\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-teal-950 rounded-xl border border-teal-500/40\">\n    <div class=\"flex items-center gap-2\">\n      <div class=\"w-8 h-8 rounded-full bg-teal-500/20 border border-teal-400 flex items-center justify-center font-bold text-teal-300 text-sm\">⏱️</div>\n      <div>\n        <div class=\"text-xs font-bold text-white\">ĐỒNG HỒ TƯ DUY 15 GIÂY</div>\n        <div class=\"text-[10px] text-slate-400\">Từ M kẻ các đường thẳng song song SA và BC!</div>\n      </div>\n    </div>\n    <div class=\"text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30\">15s</div>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng đến với Ví dụ 1. Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Điểm M thuộc cạnh SC sao cho SM bằng 2 lần MC. Mặt phẳng alpha đi qua M và song song với hai đường thẳng SA và BC. Hãy xác định hình dạng thiết diện tạo bởi mặt phẳng alpha và hình chóp S.ABCD. Các em có 15 giây để suy nghĩ.",
      "startTime": 121.13,
      "endTime": 150.36,
      "duration": 29.23
    },
    {
      "sceneIndex": 6,
      "title": "6. GIẢI CHI TIẾT VÍ DỤ 1",
      "subtitle": "BÀI 12 • MỤC 3 • THIẾT DIỆN LÀ HÌNH THANG",
      "mascotMode": "cheer",
      "mascotTip": "Thiết diện MNPQ là hình thang vì MN // PQ (cùng song song với SA)!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full\">LỜI GIẢI VÍ DỤ 1</span>\n      <span class=\"text-xs font-bold text-emerald-300\">THIẾT DIỆN LÀ HÌNH THANG</span>\n    </div>\n\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b class=\"text-blue-300\">Các bước dựng đoạn giao tuyến:</b>\n        <ol class=\"list-decimal list-inside space-y-1 mt-1\">\n          <li>Trong $(SBC)$: qua $M$ kẻ $MQ \\parallel BC$ ($Q \\in SB$). Do $(\\alpha) \\parallel BC$ nên $MQ$ là giao tuyến với $(SBC)$.</li>\n          <li>Trong $(SCD)$: qua $M$ kẻ $MN \\parallel SA$ là không đồng phẳng, ta xét $(SAC)$: qua $M$ kẻ $MI \\parallel SA$ ($I \\in AC$).</li>\n          <li>Trong $(ABCD)$: qua $I$ kẻ đường thẳng song song $BC$, cắt $AB$ tại $P$ và cắt $CD$ tại $N$.</li>\n          <li>Trong $(SAB)$: nối $P$ và $Q$, ta có $PQ \\parallel SA$ do định lí Ta-lét.</li>\n        </ol>\n      </div>\n\n      <div class=\"p-2.5 bg-slate-900 rounded border border-emerald-500/30 text-slate-300\">\n        <b class=\"text-emerald-400\">Kết luận thiết diện:</b>\n        <p class=\"mt-1\">\n          Thiết diện là tứ giác $MNPQ$. Do $MN \\parallel SA$ và $PQ \\parallel SA \\implies MN \\parallel PQ$.\n          Vậy thiết diện $MNPQ$ là <b>HÌNH THANG</b>.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thời gian đã hết! Hãy cùng xem các bước dựng thiết diện: Thứ nhất, trong mặt phẳng SBC, qua M kẻ đường thẳng song song với BC, cắt SB tại Q. Thứ hai, trong mặt phẳng SAC, qua M kẻ đường thẳng song song với SA, cắt AC tại điểm I. Thứ ba, trong mặt phẳng ABCD, qua I kẻ đường thẳng song song với BC, cắt AB tại P và cắt CD tại K. Thứ tư, trong mặt phẳng SAB, qua P kẻ đường thẳng song song SA, cắt SB đúng tại điểm Q. Như vậy thiết diện chính là tứ giác MNPQ. Vì MN và PQ cùng song song với SA nên thiết diện là một hình thang.",
      "startTime": 150.36,
      "endTime": 201.91,
      "duration": 51.55
    },
    {
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 2: TRỌNG TÂM TAM GIÁC & QUAN HỆ SONG SONG",
      "subtitle": "BÀI 12 • MỤC 3 • BÀI TOÁN TỈ SỐ VÀ CHỨNG MINH ĐƯỜNG SONG SONG MẶT",
      "mascotMode": "pointer",
      "mascotTip": "Dùng tỉ số 2/3 của trọng tâm để thiết lập định lí Ta-lét đảo!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded border border-indigo-400/30\">VÍ DỤ 2 (15 GIÂY)</span>\n      <span class=\"text-xs text-slate-400\">Trọng tâm và song song mặt đáy</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed\">\n      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB \\parallel CD, AB = 2CD$). Gọi $G_1, G_2$ lần lượt là trọng tâm của các tam giác $SAB$ và $SCD$.\n    </p>\n    <div class=\"p-2.5 bg-slate-900 rounded border border-slate-700/60 text-xs text-slate-300 mt-2\">\n      <b>Yêu cầu:</b> Chứng minh đường thẳng $G_1G_2 \\parallel (ABCD)$ và $G_1G_2 \\parallel (SAD)$.\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-xl border border-indigo-500/40\">\n    <div class=\"flex items-center gap-2\">\n      <div class=\"w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400 flex items-center justify-center font-bold text-indigo-300 text-sm\">⏱️</div>\n      <div>\n        <div class=\"text-xs font-bold text-white\">ĐỒNG HỒ TƯ DUY 15 GIÂY</div>\n        <div class=\"text-[10px] text-slate-400\">Gọi M, N là trung điểm của AB và CD, xét tam giác SMN!</div>\n      </div>\n    </div>\n    <div class=\"text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30\">15s</div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2 là một bài toán rất phổ biến trong đề thi: Cho hình chóp S.ABCD có đáy ABCD là hình thang với đáy lớn AB gấp đôi đáy nhỏ CD. Gọi G1 và G2 lần lượt là trọng tâm của tam giác SAB và tam giác SCD. Chứng minh rằng đường thẳng G1G2 song song với mặt phẳng ABCD. Các em có 15 giây suy nghĩ.",
      "startTime": 201.91,
      "endTime": 229.85,
      "duration": 27.94
    },
    {
      "sceneIndex": 8,
      "title": "8. GIẢI CHI TIẾT VÍ DỤ 2",
      "subtitle": "BÀI 12 • MỤC 3 • CHỨNG MINH QUA ĐỊNH LÍ TA-LÉT ĐẢO TRONG TAM GIÁC SMN",
      "mascotMode": "cheer",
      "mascotTip": "SG1/SM = SG2/SN = 2/3 suy ra G1G2 // MN nằm trong mặt phẳng đáy!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full\">LỜI GIẢI VÍ DỤ 2</span>\n      <span class=\"text-xs font-bold text-emerald-300\">ĐÁP ÁN CHI TIẾT</span>\n    </div>\n\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b class=\"text-blue-300\">Chứng minh $G_1G_2 \\parallel (ABCD)$:</b>\n        <p class=\"mt-1\">\n          Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$.\n          Theo tính chất trọng tâm tam giác:\n          $$\\frac{SG_1}{SM} = \\frac{2}{3} \\quad \\text{và} \\quad \\frac{SG_2}{SN} = \\frac{2}{3}$$\n        </p>\n        <p class=\"mt-1\">\n          Trong tam giác $SMN$, ta có: $\\frac{SG_1}{SM} = \\frac{SG_2}{SN} = \\frac{2}{3} \\implies \\mathbf{G_1G_2 \\parallel MN}$.\n        </p>\n        <p class=\"mt-1 font-mono text-emerald-300\">\n          $\\begin{cases} G_1G_2 \\not\\subset (ABCD) \\\\ MN \\subset (ABCD) \\\\ G_1G_2 \\parallel MN \\end{cases} \\implies \\mathbf{G_1G_2 \\parallel (ABCD)}$ (đpcm).\n        </p>\n      </div>\n\n      <div class=\"p-2.5 bg-slate-900 rounded border border-indigo-500/30 text-slate-300\">\n        <b class=\"text-indigo-300\">Mở rộng:</b>\n        Vì $MN$ cắt $AD$ và $BC$ nên qua các biến đổi tương tự, ta cũng chứng minh được $G_1G_2$ song song với nhiều mặt phẳng khác chứa các đường thẳng song song với $MN$.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "15 giây đã trôi qua! Cùng theo dõi lời giải mẫu: Gọi M và N lần lượt là trung điểm của AB và CD. Vì G1 là trọng tâm tam giác SAB nên G1 thuộc đoạn SM và tỉ số SG1 trên SM bằng 2 phần 3. Tương tự, G2 là trọng tâm tam giác SCD nên G2 thuộc đoạn SN và tỉ số SG2 trên SN bằng 2 phần 3. Trong tam giác SMN, do hai tỉ số bằng nhau nên theo định lí Ta-lét đảo, G1G2 song song với MN. Mặt khác MN nằm trong mặt phẳng đáy ABCD và G1G2 không nằm trong ABCD. Do đó G1G2 song song với mặt phẳng ABCD.",
      "startTime": 229.85,
      "endTime": 281.69,
      "duration": 51.84
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: TÍNH DIỆN TÍCH THIẾT DIỆN THEO THAM SỐ $k$",
      "subtitle": "BÀI 12 • MỤC 3 • BÀI TOÁN ĐỊNH LƯỢNG NÂNG CAO",
      "mascotMode": "pointer",
      "mascotTip": "Mặt phẳng cắt qua M trên AB (AM = k.AB) và song song với SA và BC!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded border border-indigo-400/30\">VÍ DỤ 3 (30 GIÂY)</span>\n      <span class=\"text-xs text-slate-400\">Thiết diện theo tham số $k$</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed\">\n      Cho hình chóp $S.ABCD$ có đáy là hình bình hành diện tích $S_0$. Điểm $M \\in AB$ sao cho $AM = k \\cdot AB$ ($0 < k < 1$). Mặt phẳng $(\\alpha)$ qua $M$ song song với $SA$ và $BC$.\n    </p>\n    <div class=\"p-2.5 bg-slate-900 rounded border border-slate-700/60 text-xs text-slate-300 mt-2 space-y-1\">\n      <div><b>a)</b> Xác định hình dạng của thiết diện tạo bởi $(\\alpha)$ và hình chóp.</div>\n      <div><b>b)</b> So sánh diện tích thiết diện khi $k = \\frac{1}{2}$ so với diện tích mặt bên $(SAB)$.</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-xl border border-indigo-500/40\">\n    <div class=\"flex items-center gap-2\">\n      <div class=\"w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400 flex items-center justify-center font-bold text-indigo-300 text-sm\">⏱️</div>\n      <div>\n        <div class=\"text-xs font-bold text-white\">ĐỒNG HỒ TƯ DUY 30 GIÂY</div>\n        <div class=\"text-[10px] text-slate-400\">Từ M kẻ các đoạn // SA và // BC trên các mặt!</div>\n      </div>\n    </div>\n    <div class=\"text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30\">30s</div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3 là bài toán vận dụng cao kết hợp định tính và định lượng: Cho hình chóp S.ABCD có đáy là hình bình hành diện tích S0. Điểm M thuộc cạnh AB sao cho AM bằng k lần AB với k nằm giữa 0 và 1. Mặt phẳng alpha đi qua M và song song với SA và BC, cắt hình chóp theo một thiết diện. Hỏi thiết diện là hình gì và diện tích của thiết diện thay đổi như thế nào khi k tiến dần tới 1? Các em có 30 giây để tìm câu trả lời.",
      "startTime": 281.69,
      "endTime": 317.57,
      "duration": 35.88
    },
    {
      "sceneIndex": 10,
      "title": "10. GIẢI CHI TIẾT VÍ DỤ 3",
      "subtitle": "BÀI 12 • MỤC 3 • HÌNH THANG HOẶC TAM GIÁC ĐỒNG DẠNG",
      "mascotMode": "cheer",
      "mascotTip": "Thiết diện là hình thang MNPQ với hai đáy song song với SA!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full\">LỜI GIẢI VÍ DỤ 3</span>\n      <span class=\"text-xs font-bold text-emerald-300\">THIẾT DIỆN LÀ HÌNH THANG</span>\n    </div>\n\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b class=\"text-blue-300\">a) Xác định các đỉnh của thiết diện:</b>\n        <p class=\"mt-1\">\n          - Giao tuyến với $(ABCD)$: qua $M$ kẻ $MN \\parallel BC$ ($N \\in CD$). Do $ABCD$ là hình bình hành nên $MN = BC$.\n        </p>\n        <p class=\"mt-0.5\">\n          - Giao tuyến với $(SAB)$: qua $M$ kẻ $MQ \\parallel SA$ ($Q \\in SB$).\n        </p>\n        <p class=\"mt-0.5\">\n          - Giao tuyến với $(SCD)$: qua $N$ kẻ $NP \\parallel SA$ ($P \\in SC$).\n        </p>\n        <p class=\"mt-0.5\">\n          - Giao tuyến với $(SBC)$: nối $P$ và $Q$, ta có $PQ \\parallel BC \\parallel MN$.\n        </p>\n        <p class=\"mt-1 font-bold text-emerald-300\">\n          Vì $MQ \\parallel SA$ và $NP \\parallel SA \\implies MQ \\parallel NP$. Vậy thiết diện $MNPQ$ là <b>HÌNH THANG</b>.\n        </p>\n      </div>\n\n      <div class=\"p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b class=\"text-amber-300\">b) Khi $k = \\frac{1}{2}$ (M là trung điểm $AB$):</b>\n        <p class=\"mt-1\">\n          $MQ = \\frac{1}{2}SA$, $NP = \\frac{1}{2}SA \\implies MQ = NP$. Khi đó thiết diện $MNPQ$ là <b>HÌNH BÌNH HÀNH</b> với diện tích bằng $\\frac{1}{2}$ diện tích thiết diện qua trục.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "30 giây đã trôi qua! Hãy cùng đối chiếu lời giải: Mặt phẳng alpha qua M song song BC nên cắt đáy ABCD theo đoạn MN song song BC với N thuộc CD. Trong mặt phẳng SAB, qua M kẻ MQ song song SA với Q thuộc SB. Trong mặt phẳng SCD, qua N kẻ NP song song SA với P thuộc SC. Cuối cùng, nối P với Q, đoạn PQ song song với BC. Như vậy thiết diện tạo thành là tứ giác MNPQ. Vì MQ và NP cùng song song với SA nên MNPQ là hình thang. Khi k bằng một phần hai, M là trung điểm AB nên MQ bằng một nửa SA, thiết diện có diện tích bằng một phần tư diện tích mặt bên tương ứng.",
      "startTime": 317.57,
      "endTime": 373.99,
      "duration": 56.42
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: ĐÚNG / SAI TỔNG HỢP TOÀN BÀI 12",
      "subtitle": "BÀI 12 • MỤC 3 • KIỂM TRA TOÀN DIỆN KIẾN THỨC BÀI 12",
      "mascotMode": "think",
      "mascotTip": "Đọc kĩ điều kiện không nằm trong mặt phẳng và các định lí ba giao tuyến!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded border border-amber-400/30\">VÍ DỤ 4 (15 GIÂY)</span>\n      <span class=\"text-xs text-slate-400\">Trắc nghiệm Đúng / Sai tổng hợp</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed\">\n      Xét tính <b>ĐÚNG / SAI</b> của các mệnh đề hình học không gian sau:\n    </p>\n\n    <div class=\"space-y-1.5 mt-2 text-xs\">\n      <div class=\"p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b>a)</b> Nếu đường thẳng $a$ song song với một đường thẳng nằm trong $(P)$ thì $a \\parallel (P)$.\n      </div>\n      <div class=\"p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b>b)</b> Nếu $a \\parallel (P)$ thì trong $(P)$ có vô số đường thẳng song song với $a$.\n      </div>\n      <div class=\"p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b>c)</b> Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng song song với đường thẳng đó.\n      </div>\n      <div class=\"p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300\">\n        <b>d)</b> Qua một điểm nằm ngoài mặt phẳng $(P)$, có duy nhất một đường thẳng song song với $(P)$.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-amber-950 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-2\">\n      <div class=\"w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center font-bold text-amber-300 text-sm\">⏱️</div>\n      <div>\n        <div class=\"text-xs font-bold text-white\">ĐỒNG HỒ TƯ DUY 15 GIÂY</div>\n        <div class=\"text-[10px] text-slate-400\">Cẩn thận với từ 'duy nhất' và thiếu điều kiện không nằm trong!</div>\n      </div>\n    </div>\n    <div class=\"text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30\">15s</div>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4 là bài tập Đúng Sai tổng hợp toàn bộ Bài 12. Hãy xét 4 khẳng định sau đây về quan hệ giữa đường thẳng và mặt phẳng trong không gian trong 15 giây.",
      "startTime": 373.99,
      "endTime": 386.54,
      "duration": 12.55
    },
    {
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT TOÀN BỘ BÀI 12 & ĐÁP ÁN VÍ DỤ 4",
      "subtitle": "BÀI 12 • MỤC 3 • HOÀN THÀNH XUẤT SẮC BÀI 12",
      "mascotMode": "cheer",
      "mascotTip": "Mệnh đề a SAI (thiếu điều kiện a không nằm trong P), b ĐÚNG, c ĐÚNG, d SAI (có vô số đường thẳng)! Chúc mừng các em!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full\">ĐÁP ÁN VÍ DỤ 4</span>\n      <span class=\"text-xs font-bold text-emerald-300\">KẾT QUẢ ĐỐI CHIẾU</span>\n    </div>\n\n    <div class=\"space-y-1.5 text-xs\">\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>a)</b> SAI vì thiếu điều kiện $a \\not\\subset (P)$. Nếu $a \\subset (P)$ thì không song song.</span>\n        <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold rounded\">SAI</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>b)</b> ĐÚNG: Lấy vô số điểm trong $(P)$, qua mỗi điểm kẻ đường thẳng $\\parallel a$.</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>c)</b> ĐÚNG: Chuẩn hệ quả của Định lí 2 về giao tuyến song song.</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>d)</b> SAI: Có <b>vô số</b> đường thẳng song song với $(P)$ (cùng thuộc mặt phẳng qua điểm đó $\\parallel (P)$).</span>\n        <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold rounded\">SAI</span>\n      </div>\n    </div>\n\n    <div class=\"mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30 text-xs\">\n      <div class=\"font-bold text-emerald-200 mb-1 flex items-center gap-1.5\">\n        <span>🎉</span> <span>HOÀN THÀNH XUẤT SẮC TOÀN BỘ BÀI 12!</span>\n      </div>\n      <p class=\"text-slate-300\">\n        Các em đã làm chủ toàn bộ: 3 vị trí tương đối, định lí 1 (chứng minh song song), định lí 2 (giao tuyến song song), và kỹ thuật dựng thiết diện đa diện phức tạp!\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em! Đáp án của Ví dụ 4 như sau: Khẳng định a SAI vì thiếu điều kiện đường thẳng a không nằm trong mặt phẳng P. Nếu a đã nằm sẵn trong P thì nó không thể song song với P. Khẳng định b ĐÚNG: qua mỗi điểm trong mặt phẳng P, ta đều kẻ được đúng một đường thẳng song song với a, do đó có vô số đường. Khẳng định c ĐÚNG theo hệ quả của Định lí 2. Khẳng định d SAI vì qua một điểm nằm ngoài mặt phẳng P có vô số đường thẳng song song với P, tập hợp các đường thẳng đó tạo thành một mặt phẳng song song với P. Chúc mừng các em đã hoàn thành trọn vẹn Bài 12!",
      "startTime": 386.54,
      "endTime": 432.14,
      "duration": 45.6
    }
  ]
};
  root.G11_CHAPTER4_DATA.toan11_bai12_muc3 = root.G11_CHAPTER4_DATA.g11_bai12_muc3;

  root.G11_CHAPTER4_DATA.g11_bai13_muc1 = {
  "lessonId": "toan11_bai13",
  "lessonTitle": "Bài 13: Hai mặt phẳng song song",
  "sectionId": "g11_bai13_muc1",
  "sectionTitle": "Mục 1: Khái niệm & Điều kiện để hai mặt phẳng song song",
  "audio": "/audio/g11_bai13_muc1.mp3",
  "audioSrc": "./audio/g11_bai13_muc1.mp3",
  "audio_src": "./audio/g11_bai13_muc1.mp3",
  "title": "Mục 1: Khái niệm & Điều kiện để hai mặt phẳng song song",
  "owl_tip": "Định lí 1: Nếu mặt phẳng (P) chứa hai đường thẳng cắt nhau a, b và a, b cùng song song với (Q) thì (P) // (Q)!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. ĐỊNH NGHĨA HAI MẶT PHẲNG SONG SONG",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. ĐỊNH LÍ 1: ĐIỀU KIỆN ĐỂ HAI MẶT PHẲNG SONG SONG",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI CHUẨN BỘ GD&ĐT 2025",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 1",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 205.06,
  "formattedDuration": "03:25",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. ĐỊNH NGHĨA HAI MẶT PHẲNG SONG SONG",
      "subtitle": "BÀI 13 • MỤC 1 • VỊ TRÍ TƯƠNG ĐỐI CỦA HAI MẶT PHẲNG",
      "mascotMode": "pointer",
      "mascotTip": "Hai mặt phẳng song song nếu chúng không có bất kì điểm chung nào: $(P) \\parallel (Q) \\iff (P) \\cap (Q) = \\emptyset$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-950 to-teal-900/60 p-4 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Định nghĩa cơ bản</span>\n      <h3 class=\"text-xl font-black text-emerald-200\">Hai Mặt Phẳng Song Song</h3>\n    </div>\n    <p class=\"text-sm text-slate-200 leading-relaxed\">\n      • Hai mặt phẳng được gọi là <b>song song</b> với nhau nếu chúng không có điểm chung nào.<br/>\n      • Kí hiệu: $(P) \\parallel (Q) \\iff (P) \\cap (Q) = \\emptyset$.\n    </p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md\">\n      <h4 class=\"font-bold text-emerald-300 text-sm mb-1\">📍 Vị trí tương đối của hai mặt phẳng</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        1. <b>Cắt nhau:</b> $(P) \\cap (Q) = d$ (giao tuyến chung).<br/>\n        2. <b>Song song:</b> $(P) \\cap (Q) = \\emptyset$.<br/>\n        3. <b>Trùng nhau:</b> $(P) \\equiv (Q)$.\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-amber-400 shadow-md\">\n      <h4 class=\"font-bold text-amber-300 text-sm mb-1\">💡 Hình ảnh thực tế</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • Mặt sàn và trần nhà của phòng học.<br/>\n        • Hai mặt đối diện của cuốn sách khi gấp lại.<br/>\n        • Hai mặt đối diện của thùng carton, viên gạch.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Bài 13: Hai mặt phẳng song song trong Chương 4 Toán 11 Kết Nối Tri Thức. Trong không gian, hai mặt phẳng phân biệt có thể cắt nhau theo một đường giao tuyến duy nhất, hoặc không có bất kì điểm chung nào. Ta định nghĩa: Hai mặt phẳng được gọi là song song với nhau nếu chúng không có điểm chung. Khi đó ta ký hiệu mặt phẳng P song song với mặt phẳng Q.",
      "startTime": 0.0,
      "endTime": 9.26,
      "duration": 9.26
    },
    {
      "sceneIndex": 2,
      "title": "2. ĐỊNH LÍ 1: ĐIỀU KIỆN ĐỂ HAI MẶT PHẲNG SONG SONG",
      "subtitle": "BÀI 13 • MỤC 1 • ĐỊNH LÍ TRỌNG TÂM CẦN GHI NHỚ",
      "mascotMode": "explaining",
      "mascotTip": "Bắt buộc phải là hai đường thẳng CẮT NHAU cùng song song với mặt phẳng kia!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-950 to-indigo-900/60 p-4 rounded-xl border border-blue-500/40\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Định lí 1 (Điều kiện đủ)</span>\n      <h3 class=\"text-xl font-black text-blue-200\">Dấu Hiệu Nhận Biết $(P) \\parallel (Q)$</h3>\n    </div>\n    <div class=\"p-3 bg-slate-900/90 rounded-lg border border-blue-400/30 font-serif text-sm text-amber-300\">\n      $$\\begin{cases} a \\subset (P), \\ b \\subset (P) \\\\ a \\cap b = \\{I\\} \\\\ a \\parallel (Q), \\ b \\parallel (Q) \\end{cases} \\implies (P) \\parallel (Q)$$\n    </div>\n  </div>\n\n  <div class=\"bg-rose-950/40 p-3 rounded-xl border border-rose-500/30 text-xs text-rose-200\">\n    <b class=\"text-rose-400 uppercase tracking-wide\">⚠️ Cảnh báo bẫy thi thường gặp:</b><br/>\n    Nếu mặt phẳng $(P)$ chứa hai đường thẳng $a, b$ cùng song song với $(Q)$ nhưng $a \\parallel b$, thì $(P)$ có thể vẫn cắt $(Q)$ theo một giao tuyến song song với $a$ và $b$! Do đó, giả thiết $a \\cap b = \\{I\\}$ là <b>bắt buộc</b>.\n  </div>\n</div>\n",
      "narration": "Làm thế nào để chứng minh hai mặt phẳng song song? Ta sử dụng Định lí 1: Nếu mặt phẳng P chứa hai đường thẳng cắt nhau a và b, và hai đường thẳng này cùng song song với mặt phẳng Q, thì mặt phẳng P song song với mặt phẳng Q. Chú ý từ khóa cốt lõi: hai đường thẳng a và b phải cắt nhau. Nếu a và b song song với nhau thì hai mặt phẳng vẫn có thể cắt nhau.",
      "startTime": 9.26,
      "endTime": 26.98,
      "duration": 17.71
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: NHẬN BIẾT ĐIỀU KIỆN HAI MẶT PHẲNG SONG SONG",
      "subtitle": "BÀI 13 • MỤC 1 • CÂU HỎI TRẮC NGHIỆM ĐỊNH TÍNH 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Hãy đọc thật kỹ điều kiện cắt nhau của 2 đường thẳng!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Nhận biết</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-3\">\n      <b>Câu hỏi:</b> Cho hai mặt phẳng phân biệt $(P)$ và $(Q)$. Khẳng định nào sau đây là <b>đúng</b>?\n    </p>\n\n    <div class=\"space-y-1.5 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Nếu $(P)$ và $(Q)$ cùng song song với một đường thẳng $d$ thì $(P) \\parallel (Q)$.</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> Nếu $(P)$ chứa hai đường thẳng phân biệt cùng song song với $(Q)$ thì $(P) \\parallel (Q)$.</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>C.</b> Nếu $(P)$ chứa hai đường thẳng cắt nhau cùng song song với $(Q)$ thì $(P) \\parallel (Q)$.</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Nếu hai mặt phẳng không cắt nhau thì chúng trùng nhau.</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian chọn đáp án:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Mời các em làm Ví dụ 1: Trong các mệnh đề sau, mệnh đề nào sau đây là đúng? Mệnh đề A: Nếu hai mặt phẳng cùng song song với một đường thẳng thì chúng song song với nhau. Mệnh đề B: Nếu mặt phẳng P chứa hai đường thẳng phân biệt cùng song song với mặt phẳng Q thì P song song với Q. Mệnh đề C: Nếu mặt phẳng P chứa hai đường thẳng cắt nhau cùng song song với mặt phẳng Q thì P song song với Q. Mệnh đề D: Hai mặt phẳng không cắt nhau thì trùng nhau. Các em có 15 giây chọn đáp án.",
      "startTime": 26.98,
      "endTime": 58.42,
      "duration": 31.44
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN C CHÍNH XÁC",
      "subtitle": "BÀI 13 • MỤC 1 • GIẢI MÃ BẪY THI ĐỊNH LÍ 1",
      "mascotMode": "celebrating",
      "mascotTip": "Phương án B thiếu điều kiện 'cắt nhau' nên hoàn toàn có thể sai!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Lời giải chi tiết Ví dụ 1:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• <b>Phương án A sai:</b> Hai mặt phẳng cắt nhau vẫn có thể cùng song song với đường thẳng $d$ (giao tuyến của chúng song song với $d$).</p>\n      <p>• <b>Phương án B sai:</b> Nếu hai đường thẳng phân biệt đó song song với nhau thì $(P)$ vẫn có thể cắt $(Q)$.</p>\n      <p>• <b>Phương án C đúng:</b> Đây chính là phát biểu chuẩn xác $100\\%$ của Định lí 1 SGK KNTT.</p>\n      <p>• <b>Phương án D sai:</b> Hai mặt phẳng không cắt nhau thì chúng song song với nhau (vì đề bài cho phân biệt).</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án C.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án chính xác là C. Tại sao phương án A sai? Vì hai mái nhà cùng song song với cây đòn dông nhưng chúng cắt nhau tại cây đòn dông đó. Tại sao B sai? Vì hai đường thẳng phân biệt có thể song song với nhau, khi đó P và Q vẫn có thể cắt nhau theo giao tuyến song song với chúng. Do đó, chỉ có C là đúng chuẩn theo Định lí 1.",
      "startTime": 58.42,
      "endTime": 70.82,
      "duration": 12.41
    },
    {
      "sceneIndex": 5,
      "title": "5. TÍNH CHẤT 1: SỰ DUY NHẤT CỦA MẶT PHẲNG SONG SONG",
      "subtitle": "BÀI 13 • MỤC 1 • TIÊN ĐỀ Ơ-CLÍT TRONG KHÔNG GIAN",
      "mascotMode": "explaining",
      "mascotTip": "Qua điểm $M \\notin (P)$, chỉ có DUY NHẤT 1 mặt phẳng song song với $(P)$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-950 to-slate-900 p-4 rounded-xl border border-purple-500/40 text-xs\">\n    <div class=\"font-bold text-purple-300 text-sm mb-2\">Tính Chất 1 (Sự tồn tại và duy nhất)</div>\n    <p class=\"text-slate-200 leading-relaxed text-sm\">\n      Qua một điểm $M$ ở ngoài một mặt phẳng $(\\alpha)$, có <b>một và chỉ một</b> mặt phẳng $(\\beta)$ song song với mặt phẳng $(\\alpha)$.\n    </p>\n    \n    <div class=\"mt-3 grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2.5 bg-slate-900 rounded border border-purple-400/30\">\n        <b class=\"text-purple-300\">Hệ quả 1:</b><br/>\n        Nếu $d \\parallel (\\alpha)$ thì qua $d$ có duy nhất một mặt phẳng $(\\beta) \\parallel (\\alpha)$.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border border-purple-400/30\">\n        <b class=\"text-purple-300\">Hệ quả 2:</b><br/>\n        Hai mặt phẳng phân biệt cùng song song với mặt phẳng thứ ba thì song song với nhau: $(\\alpha) \\parallel (\\gamma) \\land (\\beta) \\parallel (\\gamma) \\implies (\\alpha) \\parallel (\\beta)$.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúng ta tìm hiểu tiếp Tính chất 1. Qua một điểm nằm ngoài một mặt phẳng cho trước, có một và chỉ một mặt phẳng song song với mặt phẳng đã cho. Tính chất này tương tự như tiên đề Ơ clít trong hình học phẳng. Từ tính chất này dẫn đến hệ quả rất hữu ích: Nếu đường thẳng d song song với mặt phẳng P thì qua d có duy nhất một mặt phẳng song song với P nếu d không thuộc P.",
      "startTime": 70.82,
      "endTime": 81.53,
      "duration": 10.7
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: CHỨNG MINH HAI MẶT PHẲNG SONG SONG TRONG HÌNH CHÓP",
      "subtitle": "BÀI 13 • MỤC 1 • BÀI TOÁN ÁP DỤNG TRỌNG TÂM 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Hãy tìm 2 đường thẳng trung bình cắt nhau cùng song song mặt phẳng đối diện!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M, N$ lần lượt là trung điểm của $SA, SB$. Mặt phẳng $(OMN)$ song song với mặt phẳng nào?\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> $(SBC)$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>B.</b> $(SCD)$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> $(SAB)$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> $(SAD)$</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O. Gọi M, N lần lượt là trung điểm của SA và SB. Mặt phẳng OMN song song với mặt phẳng nào sau đây? Phương án A: Mặt phẳng SBC; Phương án B: Mặt phẳng SCD; Phương án C: Mặt phẳng SAB; Phương án D: Mặt phẳng SAD. Các em có 15 giây xác định đáp án.",
      "startTime": 81.53,
      "endTime": 101.53,
      "duration": 20.0
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: $(OMN) \\parallel (SCD)$",
      "subtitle": "BÀI 13 • MỤC 1 • KỸ THUẬT DÙNG ĐƯỜNG TRUNG BÌNH",
      "mascotMode": "celebrating",
      "mascotTip": "$MN \\parallel CD$ và $OM \\parallel SC \\implies (OMN) \\parallel (SCD)$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Chứng minh hình học chuẩn mực:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>1. Trong $\\triangle SAB$: $MN$ là đường trung bình $\\implies MN \\parallel AB$. Lại có $AB \\parallel CD \\implies MN \\parallel CD \\subset (SCD) \\implies MN \\parallel (SCD)$.</p>\n      <p>2. Trong $\\triangle SAC$: $O$ là trung điểm $AC$, $M$ là trung điểm $SA \\implies OM$ là đường trung bình $\\implies OM \\parallel SC \\subset (SCD) \\implies OM \\parallel (SCD)$.</p>\n      <p>3. Vì $MN \\cap OM = \\{M\\}$ trong $(OMN)$ nên theo Định lí 1: $(OMN) \\parallel (SCD)$.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án B.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án chính xác là B: Mặt phẳng OMN song song với mặt phẳng SCD. Chứng minh rất đơn giản: Trong tam giác SAB, MN là đường trung bình nên MN song song AB. Do ABCD là hình bình hành nên AB song song CD. Suy ra MN song song CD, mà CD nằm trong SCD nên MN song song SCD. Mặt khác, trong tam giác SAC, O là trung điểm AC, M là trung điểm SA nên OM là đường trung bình, suy ra OM song song SC. Do đó OM song song SCD. Hai đường cắt nhau MN và OM cùng song song với SCD nên mặt phẳng OMN song song SCD.",
      "startTime": 101.53,
      "endTime": 121.53,
      "duration": 20.0
    },
    {
      "sceneIndex": 8,
      "title": "8. QUY TRÌNH 3 BƯỚC CHỨNG MINH $(P) \\parallel (Q)$",
      "subtitle": "BÀI 13 • MỤC 1 • CẨM NANG PHƯƠNG PHÁP TƯ DUY",
      "mascotMode": "pointer",
      "mascotTip": "Luôn chọn mặt phẳng có sẵn 2 đường trung bình hoặc 2 đường thẳng song song cạnh đáy!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/60 to-indigo-950 p-4 rounded-xl border border-blue-500/40 text-xs\">\n    <div class=\"font-bold text-blue-300 text-sm mb-2\">Quy Trình 3 Bước Chứng Minh $(P) \\parallel (Q)$ Chuẩn Mực</div>\n    <div class=\"space-y-2\">\n      <div class=\"p-2.5 bg-slate-900/90 rounded border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">Bước 1: Tìm 2 đường thẳng cắt nhau trong $(P)$</b>\n        <p class=\"text-slate-300 mt-0.5\">Xác định $a, b \\subset (P)$ sao cho $a \\cap b = \\{I\\}$. Thường ưu tiên các đường trung bình hoặc đường song song với các cạnh đã biết.</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-900/90 rounded border-l-4 border-amber-400\">\n        <b class=\"text-amber-300\">Bước 2: Chứng minh $a \\parallel (Q)$ và $b \\parallel (Q)$</b>\n        <p class=\"text-slate-300 mt-0.5\">Chỉ ra $a \\parallel a' \\subset (Q)$ và $b \\parallel b' \\subset (Q)$.</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-900/90 rounded border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">Bước 3: Kết luận theo Định lí 1</b>\n        <p class=\"text-slate-300 mt-0.5\">Vì $a, b \\subset (P), a \\cap b = \\{I\\}$ và $a, b \\parallel (Q) \\implies (P) \\parallel (Q)$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Để giải quyết nhanh các bài toán chứng minh hai mặt phẳng song song, các em hãy ghi nhớ quy trình 3 bước chuẩn mực sau: Bước 1: Chọn trong mặt phẳng P hai đường thẳng a và b cắt nhau. Thông thường đó là các đường trung bình trong tam giác, hoặc các cạnh đáy hình bình hành. Bước 2: Chứng minh đường thẳng a song song với mặt phẳng Q và đường thẳng b song song với mặt phẳng Q. Bước 3: Kết luận mặt phẳng P song song với mặt phẳng Q theo Định lí 1.",
      "startTime": 121.53,
      "endTime": 141.53,
      "duration": 20.0
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: TÌM MẶT PHẲNG SONG SONG TRONG TỨ DIỆN",
      "subtitle": "BÀI 13 • MỤC 1 • BÀI TOÁN VẬN DỤNG VỚI TRỌNG TÂM TAM GIÁC 30S",
      "mascotMode": "thinking",
      "mascotTip": "Nhớ tính chất trọng tâm: tỉ số $\\frac{2}{3}$ tạo nên các đường song song Ta-lét!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho tứ diện $ABCD$. Gọi $G_1, G_2, G_3$ lần lượt là trọng tâm của các tam giác $ABC, ACD, ADB$. Khẳng định nào sau đây là <b>đúng</b>?\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>A.</b> $(G_1G_2G_3) \\parallel (BCD)$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> $(G_1G_2G_3) \\parallel (ABC)$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> $(G_1G_2G_3) \\parallel (ACD)$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> $(G_1G_2G_3) \\parallel (ABD)$</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-purple-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-purple-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3: Cho tứ diện ABCD. Gọi G1, G2, G3 lần lượt là trọng tâm của các tam giác ABC, ACD, ADB. Hỏi mặt phẳng G1 G2 G3 song song với mặt phẳng nào sau đây? Phương án A: Mặt phẳng BCD; Phương án B: Mặt phẳng ABC; Phương án C: Mặt phẳng ACD; Phương án D: Mặt phẳng ABD. Các em có 30 giây lập luận.",
      "startTime": 141.53,
      "endTime": 145.06,
      "duration": 3.53
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: $(G_1G_2G_3) \\parallel (BCD)$",
      "subtitle": "BÀI 13 • MỤC 1 • ÁP DỤNG ĐỊNH LÍ TA-LÉT ĐẢO",
      "mascotMode": "celebrating",
      "mascotTip": "$\\frac{AG_1}{AM} = \\frac{AG_2}{AN} = \\frac{AG_3}{AP} = \\frac{2}{3} \\implies (G_1G_2G_3) \\parallel (MNP) \\equiv (BCD)$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Chứng minh hình học chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• Gọi $M, N, P$ lần lượt là trung điểm của $BC, CD, DB$.</p>\n      <p>• Do $G_1, G_2, G_3$ là trọng tâm nên: $\\frac{AG_1}{AM} = \\frac{AG_2}{AN} = \\frac{AG_3}{AP} = \\frac{2}{3}$.</p>\n      <p>• Trong $\\triangle AMN$: $\\frac{AG_1}{AM} = \\frac{AG_2}{AN} \\implies G_1G_2 \\parallel MN \\subset (BCD) \\implies G_1G_2 \\parallel (BCD)$.</p>\n      <p>• Trong $\\triangle ANP$: $\\frac{AG_2}{AN} = \\frac{AG_3}{AP} \\implies G_2G_3 \\parallel NP \\subset (BCD) \\implies G_2G_3 \\parallel (BCD)$.</p>\n      <p>• Vì $G_1G_2 \\cap G_2G_3 = \\{G_2\\}$ nên $(G_1G_2G_3) \\parallel (BCD)$.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án A.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là A: Mặt phẳng G1 G2 G3 song song với mặt phẳng BCD. Lời giải: Gọi M, N, P lần lượt là trung điểm của BC, CD, DB. Khi đó AM, AN, AP lần lượt là các đường trung tuyến. Do tính chất trọng tâm tam giác, ta có tỉ số AG1 trên AM bằng AG2 trên AN bằng AG3 trên AP và cùng bằng hai phần ba. Theo định lí Ta-lét đảo trong tam giác AMN, G1 G2 song song với MN, mà MN nằm trong BCD nên G1 G2 song song BCD. Tương tự, G2 G3 song song NP nằm trong BCD. Do đó mặt phẳng G1 G2 G3 song song mặt phẳng BCD.",
      "startTime": 145.06,
      "endTime": 165.06,
      "duration": 20.0
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI CHUẨN BỘ GD&ĐT 2025",
      "subtitle": "BÀI 13 • MỤC 1 • 4 MỆNH ĐỀ TOÀN DIỆN 30 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Xét kỹ từng mệnh đề và cẩn thận với trường hợp trùng hoặc chéo nhau!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 4 (Đúng / Sai)</span>\n      <span class=\"text-xs text-slate-400\">Định dạng thi 2025</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho hình hộp $ABCD.A'B'C'D'$. Xét tính Đúng / Sai của các khẳng định sau:\n    </p>\n\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>a)</b> Mặt phẳng $(AB'D') \\parallel (BDC')$.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>b)</b> Mặt phẳng $(ABCD) \\parallel (A'B'C'D')$.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>c)</b> Đường thẳng $AC' \\parallel (BDC')$.</span>\n        <span class=\"font-bold text-rose-400\">[ SAI ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>d)</b> Giao tuyến của $(ACC'A')$ với hai đáy là hai đường thẳng chéo nhau.</span>\n        <span class=\"font-bold text-rose-400\">[ SAI ]</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian kiểm tra:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4: Cho hình hộp ABCD.A'B'C'D'. Xét tính Đúng hay Sai của các mệnh đề sau: Mệnh đề a: Mặt phẳng A B' D' song song với mặt phẳng B D C'. Mệnh đề b: Mặt phẳng A B C D song song với mặt phẳng A' B' C' D'. Mệnh đề c: Đường thẳng A C' song song với mặt phẳng B D C'. Mệnh đề d: Giao tuyến của mặt phẳng A C C' A' với hai đáy là hai đường thẳng chéo nhau. Các em có 30 giây suy nghĩ.",
      "startTime": 165.06,
      "endTime": 185.06,
      "duration": 20.0
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 1",
      "subtitle": "BÀI 13 • MỤC 1 • HOÀN TẤT KIẾN THỨC NỀN TẢNG",
      "mascotMode": "celebrating",
      "mascotTip": "Ghi nhớ: 2 đáy hình hộp luôn song song, và $(AB'D') \\parallel (BDC')$ là cặp mặt phẳng kinh điển!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Đáp án phân tích chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• <b>a) ĐÚNG:</b> $BD \\parallel B'D'$ và $BC' \\parallel AD' \\implies (AB'D') \\parallel (BDC')$.</p>\n      <p>• <b>b) ĐÚNG:</b> Hai mặt đáy của hình hộp luôn song song theo định nghĩa.</p>\n      <p>• <b>c) SAI:</b> Vì $C' \\in (BDC')$ nên $AC' \\cap (BDC') = \\{C'\\}$ (cắt nhau, không thể song song).</p>\n      <p>• <b>d) SAI:</b> Hai giao tuyến là $AC$ và $A'C'$ song song với nhau trong mặt chéo $(ACC'A')$.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">⭐ TỔNG KẾT MỤC 1: Nắm chắc $(P) \\parallel (Q) \\iff$ chứa 2 đường cắt nhau cùng song song mặt phẳng kia!</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã hoàn thành Mục 1. Giải thích chi tiết Ví dụ 4: Mệnh đề a ĐÚNG vì B D song song B' D' và B C' song song A D', hai cặp đường cắt nhau này làm hai mặt phẳng song song. Mệnh đề b ĐÚNG vì hai đáy của hình hộp luôn song song. Mệnh đề c SAI vì điểm C' thuộc cả hai đối tượng nên A C' cắt mặt phẳng B D C' tại C'. Mệnh đề d SAI vì hai giao tuyến là A C và A' C' cùng nằm trong mặt phẳng chéo A C C' A' và song song với nhau chứ không chéo nhau.",
      "startTime": 185.06,
      "endTime": 205.06,
      "duration": 20.0
    }
  ]
};
  root.G11_CHAPTER4_DATA.toan11_bai13_muc1 = root.G11_CHAPTER4_DATA.g11_bai13_muc1;

  root.G11_CHAPTER4_DATA.g11_bai13_muc2 = {
  "lessonId": "toan11_bai13",
  "lessonTitle": "Bài 13: Hai mặt phẳng song song",
  "sectionId": "g11_bai13_muc2",
  "sectionTitle": "Mục 2: Tính chất của hai mặt phẳng song song & Định lí Ta-lét trong không gian",
  "audio": "/audio/g11_bai13_muc2.mp3",
  "audioSrc": "./audio/g11_bai13_muc2.mp3",
  "audio_src": "./audio/g11_bai13_muc2.mp3",
  "title": "Mục 2: Tính chất của hai mặt phẳng song song & Định lí Ta-lét trong không gian",
  "owl_tip": "Qua một điểm ngoài mặt phẳng có duy nhất 1 mặt phẳng song song với nó. Định lí Ta-lét: Ba mặt phẳng song song chắn trên hai cát tuyến bất kì những đoạn thẳng tương ứng tỉ lệ!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. ĐỊNH LÍ 2: ĐỊNH LÍ GIAO TUYẾN SONG SONG",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. ĐỊNH LÍ TA-LÉT TRONG KHÔNG GIAN",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI VỀ ĐỊNH LÍ TA-LÉT VÀ TÍNH CHẤT",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 2",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 277.69,
  "formattedDuration": "04:37",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. ĐỊNH LÍ 2: ĐỊNH LÍ GIAO TUYẾN SONG SONG",
      "subtitle": "BÀI 13 • MỤC 2 • MẶT PHẲNG CẮT HAI MẶT PHẲNG SONG SONG",
      "mascotMode": "pointer",
      "mascotTip": "Nếu $(P) \\parallel (Q)$ và $(R)$ cắt cả hai thì hai giao tuyến $a, b$ bắt buộc phải song song: $a \\parallel b$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-cyan-950 to-blue-900/60 p-4 rounded-xl border border-cyan-500/40\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-cyan-500/20 text-cyan-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Định lí 2</span>\n      <h3 class=\"text-xl font-black text-cyan-200\">Định Lí Giao Tuyến Song Song</h3>\n    </div>\n    <div class=\"p-3 bg-slate-900/90 rounded-lg border border-cyan-400/30 font-serif text-sm text-amber-300\">\n      $$\\begin{cases} (P) \\parallel (Q) \\\\ (R) \\cap (P) = a \\\\ (R) \\cap (Q) = b \\end{cases} \\implies a \\parallel b$$\n    </div>\n  </div>\n\n  <div class=\"p-3 bg-slate-800/80 rounded-xl border-l-4 border-emerald-400 text-xs text-slate-300\">\n    <b class=\"text-emerald-300 text-sm\">Hệ quả: Các đoạn thẳng song song chắn giữa</b><br/>\n    Hai mặt phẳng song song chắn trên hai đường thẳng song song những đoạn thẳng bằng nhau:\n    $$d_1 \\parallel d_2, \\ (P) \\parallel (Q) \\implies A_1B_1 = A_2B_2 \\quad (A_1, A_2 \\in (P); \\ B_1, B_2 \\in (Q))$$\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 2: Tính chất của hai mặt phẳng song song và Định lí Ta-lét trong không gian. Định lí 2 phát biểu: Cho hai mặt phẳng song song. Nếu một mặt phẳng thứ ba cắt cả hai mặt phẳng đã cho thì hai giao tuyến tạo thành bắt buộc phải song song với nhau. Đây là công cụ cực kì mạnh mẽ để xác định giao tuyến song song trong các bài toán thiết diện.",
      "startTime": 0.0,
      "endTime": 27.65,
      "duration": 27.65
    },
    {
      "sceneIndex": 2,
      "title": "2. ĐỊNH LÍ TA-LÉT TRONG KHÔNG GIAN",
      "subtitle": "BÀI 13 • MỤC 2 • BẢO TOÀN TỈ SỐ TRÊN CÁC CÁT TUYẾN",
      "mascotMode": "explaining",
      "mascotTip": "Ba mặt phẳng song song chia các cát tuyến theo các đoạn thẳng tương ứng tỉ lệ!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-indigo-950 to-purple-950 p-4 rounded-xl border border-indigo-500/40 text-xs\">\n    <div class=\"font-bold text-indigo-300 text-sm mb-2\">Định Lí Ta-lét Thuận Trong Không Gian</div>\n    <p class=\"text-slate-200 leading-relaxed text-sm\">\n      Ba mặt phẳng đôi một song song $(\\alpha) \\parallel (\\beta) \\parallel (\\gamma)$ chắn trên hai cát tuyến $d_1, d_2$ các đoạn thẳng tương ứng tỉ lệ:\n    </p>\n    \n    <div class=\"p-3 my-2 bg-slate-900 rounded border border-indigo-400/30 text-center font-serif text-base text-amber-300\">\n      $$\\frac{AB}{A'B'} = \\frac{BC}{B'C'} = \\frac{CA}{C'A'} \\quad \\text{hay} \\quad \\frac{AB}{BC} = \\frac{A'B'}{B'C'}$$\n    </div>\n\n    <p class=\"text-slate-400 text-xs\">\n      • $(A, B, C$ là giao điểm của $d_1$ với $(\\alpha), (\\beta), (\\gamma)$).<br/>\n      • $(A', B', C'$ là giao điểm của $d_2$ với $(\\alpha), (\\beta), (\\gamma)$).\n    </p>\n  </div>\n</div>\n",
      "narration": "Định lí Ta-lét trong không gian mở rộng định lí Ta-lét hình học phẳng lên một tầm cao mới: Ba mặt phẳng đôi một song song chắn trên hai cát tuyến bất kì các đoạn thẳng tương ứng tỉ lệ. Cụ thể, nếu ba mặt phẳng P, Q, R song song lần lượt cắt cát tuyến a tại A, B, C và cắt cát tuyến b tại A', B', C' thì tỉ số AB trên A'B' bằng BC trên B'C' bằng AC trên A'C'.",
      "startTime": 27.65,
      "endTime": 52.75,
      "duration": 25.1
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: TÍNH CHẤT GIAO TUYẾN HAI MẶT PHẲNG SONG SONG",
      "subtitle": "BÀI 13 • MỤC 2 • NHẬN DIỆN MỐI QUAN HỆ GIAO TUYẾN 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Áp dụng trực tiếp Định lí 2: giao tuyến luôn luôn song song!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Nhận biết</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho $(P) \\parallel (Q)$. Mặt phẳng $(R)$ cắt $(P)$ và $(Q)$ theo hai giao tuyến $a$ và $b$. Khi đó:\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> $a$ và $b$ chéo nhau</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> $a$ và $b$ cắt nhau</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>C.</b> $a \\parallel b$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> $a \\equiv b$</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 1: Cho hai mặt phẳng P và Q song song với nhau. Một mặt phẳng R cắt P và Q lần lượt theo hai giao tuyến a và b. Vị trí tương đối của hai đường thẳng a và b là gì? Phương án A: a và b chéo nhau; Phương án B: a và b cắt nhau; Phương án C: a và b song song với nhau; Phương án D: a và b trùng nhau. Các em có 15 giây chọn đáp án.",
      "startTime": 52.75,
      "endTime": 69.53,
      "duration": 16.78
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN C CHÍNH XÁC",
      "subtitle": "BÀI 13 • MỤC 2 • CHỨNG MINH TÍNH SONG SONG CỦA HAI GIAO TUYẾN",
      "mascotMode": "celebrating",
      "mascotTip": "$a$ và $b$ cùng thuộc $(R)$ và không có điểm chung nên $a \\parallel b$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Chứng minh toán học:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• $a = (R) \\cap (P) \\implies a \\subset (R)$ và $a \\subset (P)$.</p>\n      <p>• $b = (R) \\cap (Q) \\implies b \\subset (R)$ và $b \\subset (Q)$.</p>\n      <p>• Vì $a, b \\subset (R)$ nên $a$ và $b$ đồng phẳng.</p>\n      <p>• Nếu $a \\cap b = \\{M\\} \\implies M \\in (P) \\cap (Q) = \\emptyset$ (vô lí vì $(P) \\parallel (Q)$).</p>\n      <p>• Vậy $a \\parallel b$.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án C.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là C: hai giao tuyến a và b song song với nhau. Chứng minh phản chứng rất đơn giản: Vì a và b cùng nằm trong mặt phẳng R, nếu a và b có điểm chung K thì K vừa thuộc P vừa thuộc Q, mâu thuẫn với giả thiết P và Q song song không có điểm chung. Do đó a và b đồng phẳng và không cắt nhau, suy ra a song song với b.",
      "startTime": 69.53,
      "endTime": 87.74,
      "duration": 18.22
    },
    {
      "sceneIndex": 5,
      "title": "5. ỨNG DỤNG TÍNH ĐỘ DÀI THEO ĐỊNH LÍ TA-LÉT",
      "subtitle": "BÀI 13 • MỤC 2 • PHƯƠNG PHÁP TÍNH TOÁN ĐOẠN THẲNG TRÊN CÁT TUYẾN",
      "mascotMode": "pointer",
      "mascotTip": "Lập tỉ số đồng dạng giống hệt Ta-lét lớp 8 nhưng áp dụng trong không gian!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-teal-950 to-slate-900 p-4 rounded-xl border border-teal-500/40 text-xs\">\n    <div class=\"font-bold text-teal-300 text-sm mb-2\">Mô Hình Tính Toán Đoạn Thẳng Ta-lét</div>\n    <p class=\"text-slate-300 leading-relaxed\">\n      Cho ba mặt phẳng song song $(\\alpha) \\parallel (\\beta) \\parallel (\\gamma)$ cắt đường thẳng $d_1$ tại $A, B, C$ và $d_2$ tại $A', B', C'$.\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-3 mt-2 text-xs\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">Công thức 1:</b><br/>\n        $$\\frac{AB}{BC} = \\frac{A'B'}{B'C'}$$\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">Công thức 2:</b><br/>\n        $$\\frac{AB}{AC} = \\frac{A'B'}{A'C'}$$\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Định lí Ta-lét trong không gian giúp chúng ta tính toán độ dài các đoạn thẳng bị chắn bởi các mặt phẳng song song một cách nhanh chóng. Khi gặp bài toán có các mặt phẳng song song cắt hai đường thẳng chéo nhau, ta lập tỉ lệ thức: đoạn ngắn trên đoạn ngắn bằng đoạn dài trên đoạn dài.",
      "startTime": 87.74,
      "endTime": 97.18,
      "duration": 9.43
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: TÍNH ĐỘ DÀI ĐOẠN THẲNG THEO TA-LÉT",
      "subtitle": "BÀI 13 • MỤC 2 • BÀI TOÁN SỐ HỌC 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Lập tỉ số: $\\frac{AB}{BC} = \\frac{A'B'}{B'C'} \\implies B'C' = \\frac{BC \\cdot A'B'}{AB}$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-teal-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-teal-500/20 text-teal-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho ba mặt phẳng song song cắt $d_1$ tại $A, B, C$ và $d_2$ tại $A', B', C'$. Biết $AB = 4\\text{ cm}, BC = 6\\text{ cm}$ và $A'B' = 6\\text{ cm}$. Độ dài đoạn thẳng $B'C'$ là:\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> $4\\text{ cm}$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> $8\\text{ cm}$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>C.</b> $9\\text{ cm}$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> $10\\text{ cm}$</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2: Ba mặt phẳng song song P, Q, R lần lượt cắt đường thẳng d1 tại A, B, C và cắt d2 tại A', B', C'. Biết AB bằng 4 cm, BC bằng 6 cm, và A'B' bằng 6 cm. Tính độ dài đoạn thẳng B'C'. Phương án A: 4 cm; Phương án B: 8 cm; Phương án C: 9 cm; Phương án D: 10 cm. Các em có 15 giây tính toán.",
      "startTime": 97.18,
      "endTime": 118.63,
      "duration": 21.46
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: $B'C' = 9\\text{ cm}$",
      "subtitle": "BÀI 13 • MỤC 2 • BƯỚC BIẾN ĐỔI TỈ SỐ CHUẨN XÁC",
      "mascotMode": "celebrating",
      "mascotTip": "$B'C' = \\frac{6 \\times 6}{4} = 9\\text{ cm}$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Lời giải số học chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>Theo Định lí Ta-lét trong không gian cho ba mặt phẳng song song:</p>\n      $$\\frac{AB}{BC} = \\frac{A'B'}{B'C'} \\iff \\frac{4}{6} = \\frac{6}{B'C'}$$\n      $$\\implies B'C' = \\frac{6 \\cdot 6}{4} = \\frac{36}{4} = 9\\text{ (cm)}$$\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án C.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là C: 9 cm. Áp dụng định lí Ta-lét trong không gian với ba mặt phẳng song song, ta có tỉ lệ thức: AB chia BC bằng A'B' chia B'C'. Thay số: 4 chia 6 bằng 6 chia B'C'. Từ đó suy ra B'C' bằng 6 nhân 6 chia 4, kết quả bằng 9 cm.",
      "startTime": 118.63,
      "endTime": 134.59,
      "duration": 15.96
    },
    {
      "sceneIndex": 8,
      "title": "8. KỸ THUẬT DỰNG THIẾT DIỆN SONG SONG VỚI MỘT MẶT PHẲNG",
      "subtitle": "BÀI 13 • MỤC 2 • DỰNG CÁC ĐOẠN GIAO TUYẾN SONG SONG",
      "mascotMode": "pointer",
      "mascotTip": "Cắt các mặt của hình chóp theo các đường thẳng song song với các cạnh của tam giác thiết diện!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-950 to-indigo-900 p-4 rounded-xl border border-blue-500/40 text-xs\">\n    <div class=\"font-bold text-blue-300 text-sm mb-2\">Thuật Toán Dựng Thiết Diện Song Song $(Q)$</div>\n    <div class=\"space-y-2\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">Quy tắc giao tuyến song song:</b>\n        <p class=\"text-slate-300 mt-1\">Nếu $(\\alpha) \\parallel (Q)$ thì $(\\alpha)$ cắt bất kì mặt nào $(F)$ theo giao tuyến $d \\parallel (F \\cap Q)$.</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-amber-400\">\n        <b class=\"text-amber-300\">Tính chất đồng dạng:</b>\n        <p class=\"text-slate-300 mt-1\">Thiết diện của hình chóp cắt bởi mặt phẳng song song với đáy luôn là một đa giác <b>đồng dạng</b> với đa giác đáy.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Một ứng dụng thực tế quan trọng của Định lí 2 là kỹ thuật dựng thiết diện song song với một mặt phẳng cho trước. Khi mặt phẳng alpha song song với mặt phẳng Q, alpha sẽ cắt tất cả các mặt của hình chóp hoặc hình hộp theo các giao tuyến song song với các giao tuyến của Q trên các mặt đó. Do đó, thiết diện thu được là một đa giác đồng dạng với đa giác của mặt phẳng Q.",
      "startTime": 134.59,
      "endTime": 153.31,
      "duration": 18.72
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: TÌM THIẾT DIỆN SONG SONG TRONG HÌNH CHÓP",
      "subtitle": "BÀI 13 • MỤC 2 • BÀI TOÁN HÌNH THANG / HÌNH BÌNH HÀNH 30S",
      "mascotMode": "thinking",
      "mascotTip": "Mặt phẳng qua trung điểm song song đáy tạo ra thiết diện đồng dạng với đáy theo tỉ số 1/2!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $M$ là trung điểm $SA$. Mặt phẳng $(P)$ qua $M$ và song song với $(ABCD)$ cắt $SB, SC, SD$ tại $N, P, Q$. Thiết diện $MNPQ$ là:\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Hình thang không cân</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>B.</b> Hình bình hành</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> Tam giác</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Hình vuông</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-purple-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-purple-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Gọi M là trung điểm của cạnh bên SA. Mặt phẳng P đi qua M và song song với đáy ABCD cắt các cạnh bên SB, SC, SD lần lượt tại N, P, Q. Thiết diện MNPQ là hình gì? Phương án A: Hình thang không cân; Phương án B: Hình bình hành; Phương án C: Tam giác; Phương án D: Hình thoi. Các em có 30 giây suy nghĩ.",
      "startTime": 153.31,
      "endTime": 173.31,
      "duration": 20.0
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: THIẾT DIỆN LÀ HÌNH BÌNH HÀNH",
      "subtitle": "BÀI 13 • MỤC 2 • ĐỒNG DẠNG VỚI ĐÁY THEO TỈ SỐ 1/2",
      "mascotMode": "celebrating",
      "mascotTip": "$MN \\parallel AB$, $PQ \\parallel CD$, $MQ \\parallel AD$, $NP \\parallel BC \\implies MNPQ$ là hình bình hành!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Chứng minh hình học:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• $(MNPQ) \\parallel (ABCD) \\implies$ các giao tuyến với các mặt bên phải song song với các cạnh đáy tương ứng:</p>\n      <p>• $(MNPQ) \\cap (SAB) = MN \\implies MN \\parallel AB$.</p>\n      <p>• $(MNPQ) \\cap (SCD) = PQ \\implies PQ \\parallel CD$.</p>\n      <p>• Vì $AB \\parallel CD \\implies MN \\parallel PQ$. Tương tự: $MQ \\parallel NP \\parallel AD$.</p>\n      <p>• Tứ giác $MNPQ$ có hai cặp cạnh đối song song nên là <b>hình bình hành</b>.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án B.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là B: Thiết diện MNPQ là hình bình hành. Giải thích: Vì mặt phẳng P song song với đáy ABCD, theo Định lí 2 về giao tuyến song song, giao tuyến của P với mặt SAB là MN song song AB. Giao tuyến với SCD là PQ song song CD. Giao tuyến với SAD là MQ song song AD, và giao tuyến với SBC là NP song song BC. Do ABCD là hình bình hành có các cặp cạnh đối song song nên tứ giác MNPQ cũng có các cặp cạnh đối song song. Vậy MNPQ là hình bình hành, hơn nữa kích thước bằng một nửa đáy ABCD.",
      "startTime": 173.31,
      "endTime": 201.22,
      "duration": 27.91
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI VỀ ĐỊNH LÍ TA-LÉT VÀ TÍNH CHẤT",
      "subtitle": "BÀI 13 • MỤC 2 • 4 MỆNH ĐỀ THI TỐT NGHIỆP 30 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Đọc kĩ từng mệnh đề, cẩn thận câu chữ về tính chất vuông góc hoặc góc!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded\">Ví dụ 4 (Đúng / Sai)</span>\n      <span class=\"text-xs text-slate-400\">Định dạng thi 2025</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho hai mặt phẳng song song $(P) \\parallel (Q)$. Xét tính Đúng / Sai của các khẳng định:\n    </p>\n\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>a)</b> Nếu $a \\subset (P)$ và $b \\subset (Q)$ thì $a \\parallel b$.</span>\n        <span class=\"font-bold text-rose-400\">[ SAI ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>b)</b> Mọi đường thẳng song song với $(P)$ đều song song với $(Q)$.</span>\n        <span class=\"font-bold text-rose-400\">[ SAI ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>c)</b> Hai mặt phẳng song song chắn trên hai cát tuyến song song những đoạn thẳng bằng nhau.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>d)</b> Mặt phẳng $(R)$ cắt $(P)$ thì bắt buộc $(R)$ cũng cắt $(Q)$.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-cyan-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-cyan-300 font-medium\">Thời gian kiểm tra:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4: Cho hai mặt phẳng song song P và Q. Xét tính Đúng hay Sai của các mệnh đề sau: Mệnh đề a: Nếu đường thẳng a nằm trong P và đường thẳng b nằm trong Q thì a và b luôn luôn song song với nhau. Mệnh đề b: Mọi đường thẳng song song với P đều song song với Q. Mệnh đề c: Hai mặt phẳng song song chắn trên hai cát tuyến song song những đoạn thẳng bằng nhau. Mệnh đề d: Nếu một mặt phẳng cắt P thì mặt phẳng đó cũng bắt buộc phải cắt Q. Các em có 30 giây suy nghĩ.",
      "startTime": 201.22,
      "endTime": 240.39,
      "duration": 39.17
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 2",
      "subtitle": "BÀI 13 • MỤC 2 • PHÂN TÍCH BẪY TÍNH CHẤT KINH ĐIỂN",
      "mascotMode": "celebrating",
      "mascotTip": "$a \\subset (P), b \\subset (Q)$ thì $a$ và $b$ có thể CHÉO NHAU chứ không nhất thiết song song!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Phân tích sai lầm kinh điển:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• <b>a) SAI:</b> $a$ và $b$ không có điểm chung nên có thể <b>chéo nhau</b> hoặc song song.</p>\n      <p>• <b>b) SAI:</b> Đường thẳng đó có thể nằm trong $(Q)$ ($d \\subset (Q)$).</p>\n      <p>• <b>c) ĐÚNG:</b> Tứ giác tạo bởi 4 đỉnh là hình bình hành nên 2 cạnh đối bằng nhau.</p>\n      <p>• <b>d) ĐÚNG:</b> Nếu $(R)$ không cắt $(Q)$ thì $(R) \\parallel (Q) \\implies (R) \\parallel (P)$ (mâu thuẫn việc $(R)$ cắt $(P)$).</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">⭐ TỔNG KẾT MỤC 2: Nhớ kỹ Định lí 2 giao tuyến song song và tỉ số Ta-lét trên cát tuyến!</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Giải thích chi tiết Ví dụ 4: Mệnh đề a SAI vì a và b hoàn toàn có thể chéo nhau, ví dụ mép bàn mặt trên và mép đối diện ở mặt dưới theo hướng vuông góc. Mệnh đề b SAI vì đường thẳng đó có thể nằm trọn vẹn trong mặt phẳng Q. Mệnh đề c ĐÚNG vì đây là hệ quả của định lí 2, tạo thành hình bình hành. Mệnh đề d ĐÚNG vì nếu R không cắt Q thì R song song hoặc trùng Q, mà P song song Q nên R phải song song P, mâu thuẫn với giả thiết R cắt P.",
      "startTime": 240.39,
      "endTime": 277.69,
      "duration": 37.3
    }
  ]
};
  root.G11_CHAPTER4_DATA.toan11_bai13_muc2 = root.G11_CHAPTER4_DATA.g11_bai13_muc2;

  root.G11_CHAPTER4_DATA.g11_bai13_muc3 = {
  "lessonId": "toan11_bai13",
  "lessonTitle": "Bài 13: Hai mặt phẳng song song",
  "sectionId": "g11_bai13_muc3",
  "sectionTitle": "Mục 3: Hình lăng trụ, hình hộp và hình chóp cụt",
  "audio": "/audio/g11_bai13_muc3.mp3",
  "audioSrc": "./audio/g11_bai13_muc3.mp3",
  "audio_src": "./audio/g11_bai13_muc3.mp3",
  "title": "Mục 3: Hình lăng trụ, hình hộp và hình chóp cụt",
  "owl_tip": "Lăng trụ có 2 đáy song song và bằng nhau, các cạnh bên song song và bằng nhau, các mặt bên là hình bình hành!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. ĐỊNH NGHĨA HÌNH LĂNG TRỤ",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. HÌNH HỘP VÀ CÁC TÍNH CHẤT ĐẶC BIỆT",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI VỀ HÌNH LĂNG TRỤ VÀ HÌNH HỘP",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & BẾ MẠC TOÀN KHÓA BÀI 13",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 213.18,
  "formattedDuration": "03:33",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. ĐỊNH NGHĨA HÌNH LĂNG TRỤ",
      "subtitle": "BÀI 13 • MỤC 3 • CẤU TRÚC ĐA DIỆN CƠ BẢN",
      "mascotMode": "pointer",
      "mascotTip": "Hai đáy là hai đa giác bằng nhau và song song, các mặt bên là các hình bình hành!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-950 to-orange-950 p-4 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Cấu trúc đa diện</span>\n      <h3 class=\"text-xl font-black text-amber-200\">Hình Lăng Trụ $A_1A_2\\dots A_n.A'_1A'_2\\dots A'_n$</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs text-slate-300\">\n      <div class=\"p-2.5 bg-slate-900 rounded border border-amber-400/30\">\n        <b class=\"text-amber-300\">1. Hai mặt đáy:</b><br/>\n        Là hai đa giác bằng nhau và nằm trên hai mặt phẳng song song: $(A_1A_2\\dots A_n) \\parallel (A'_1A'_2\\dots A'_n)$.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border border-amber-400/30\">\n        <b class=\"text-amber-300\">2. Các mặt bên:</b><br/>\n        Là các <b>hình bình hành</b> ($A_1A_2A'_2A'_1, A_2A_3A'_3A'_2\\dots$).\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border border-amber-400/30\">\n        <b class=\"text-amber-300\">3. Các cạnh bên:</b><br/>\n        Song song và bằng nhau từng đôi một ($A_1A'_1 \\parallel A_2A'_2 \\parallel \\dots$ và $A_1A'_1 = A_2A'_2 = \\dots$).\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border border-amber-400/30\">\n        <b class=\"text-amber-300\">4. Đỉnh:</b><br/>\n        Các đỉnh của hai đa giác đáy là các đỉnh của hình lăng trụ.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 3: Hình lăng trụ, hình hộp và thiết diện của đa diện. Cho hai mặt phẳng song song alpha và alpha phẩy. Trên alpha cho đa giác lồi A1 A2 An. Qua các đỉnh này vẽ các đường thẳng song song cắt alpha phẩy tại A1 phẩy, A2 phẩy, An phẩy. Hình gồm hai đa giác đáy và các tứ giác mặt bên được gọi là hình lăng trụ.",
      "startTime": 0.0,
      "endTime": 28.63,
      "duration": 28.63
    },
    {
      "sceneIndex": 2,
      "title": "2. HÌNH HỘP VÀ CÁC TÍNH CHẤT ĐẶC BIỆT",
      "subtitle": "BÀI 13 • MỤC 3 • HÌNH LĂNG TRỤ TỨ GIÁC CÓ ĐÁY LÀ HÌNH BÌNH HÀNH",
      "mascotMode": "explaining",
      "mascotTip": "Hình hộp có 6 mặt đều là hình bình hành, 4 đường chéo cắt nhau tại trung điểm mỗi đường!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-950 to-slate-900 p-4 rounded-xl border border-blue-500/40 text-xs\">\n    <div class=\"font-bold text-blue-300 text-sm mb-2\">Đặc Điểm Hình Học Của Hình Hộp $ABCD.A'B'C'D'$</div>\n    <div class=\"grid grid-cols-2 gap-2.5\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">6 Mặt bình hành:</b><br/>\n        Tất cả 6 mặt đều là hình bình hành. Có 3 cặp mặt đối diện song song và bằng nhau.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-amber-400\">\n        <b class=\"text-amber-300\">4 Đường chéo đồng quy:</b><br/>\n        $AC', BD', CA', DB'$ cắt nhau tại trung điểm $O$ của mỗi đường ($O$ là tâm hình hộp).\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-purple-400\">\n        <b class=\"text-purple-300\">12 Cạnh:</b><br/>\n        Chia thành 3 nhóm, mỗi nhóm gồm 4 cạnh song song và bằng nhau.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">8 Đỉnh:</b><br/>\n        4 đỉnh đáy dưới và 4 đỉnh đáy trên.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hình lăng trụ tứ giác có đáy là hình bình hành được gọi là hình hộp. Hình hộp có các tính chất cực kì đẹp mắt: Thứ nhất: Cả sáu mặt của hình hộp đều là các hình bình hành. Hai mặt không có đỉnh chung gọi là hai mặt đối diện, và hai mặt đối diện luôn song song và bằng nhau. Thứ hai: Bốn đường chéo của hình hộp cắt nhau tại trung điểm của mỗi đường, điểm này được gọi là tâm đối xứng của hình hộp.",
      "startTime": 28.63,
      "endTime": 58.32,
      "duration": 29.69
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: CÔNG THỨC ĐẾM SỐ ĐỈNH, CẠNH, MẶT CỦA HÌNH LĂNG TRỤ",
      "subtitle": "BÀI 13 • MỤC 3 • BÀI TOÁN TỔNG QUÁT 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Lăng trụ $n$-giác có $2n$ đỉnh, $3n$ cạnh và $n+2$ mặt!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Nhận biết</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Một hình lăng trụ có đáy là đa giác $n$ cạnh ($n \\ge 3$). Số cạnh của hình lăng trụ đó là:\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> $2n$ cạnh</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>B.</b> $3n$ cạnh</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> $n + 2$ cạnh</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> $4n$ cạnh</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian chọn đáp án:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 1: Một hình lăng trụ có đáy là đa giác n cạnh. Hỏi hình lăng trụ đó có tất cả bao nhiêu cạnh? Phương án A: 2n cạnh; Phương án B: 3n cạnh; Phương án C: n cộng 2 cạnh; Phương án D: 4n cạnh. Các em có 15 giây chọn đáp án.",
      "startTime": 58.32,
      "endTime": 82.37,
      "duration": 24.05
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN B CHÍNH XÁC",
      "subtitle": "BÀI 13 • MỤC 3 • CÔNG THỨC Ơ-LE CHO HÌNH LĂNG TRỤ",
      "mascotMode": "celebrating",
      "mascotTip": "$n$ cạnh đáy dưới $+ n$ cạnh đáy trên $+ n$ cạnh bên $= 3n$ cạnh!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Bảng tổng kết chỉ số hình lăng trụ $n$-giác:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• <b>Số đỉnh ($V$):</b> $2n$ đỉnh ($n$ đỉnh đáy dưới $+ n$ đỉnh đáy trên).</p>\n      <p>• <b>Số cạnh ($E$):</b> $3n$ cạnh ($n$ cạnh đáy dưới $+ n$ cạnh đáy trên $+ n$ cạnh bên).</p>\n      <p>• <b>Số mặt ($F$):</b> $n + 2$ mặt ($2$ mặt đáy $+ n$ mặt bên).</p>\n      <p>• <b>Kiểm tra công thức Ơ-le:</b> $V - E + F = 2n - 3n + (n + 2) = 2$ (luôn đúng!).</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án B.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là B: 3n cạnh. Giải thích: Hình lăng trụ có đáy n cạnh gồm có: n cạnh ở đáy dưới, n cạnh ở đáy trên, và n cạnh bên nối các đỉnh tương ứng. Tổng cộng có n cộng n cộng n bằng 3n cạnh. Ngoài ra, hình lăng trụ có 2n đỉnh và n cộng 2 mặt.",
      "startTime": 82.37,
      "endTime": 109.75,
      "duration": 27.38
    },
    {
      "sceneIndex": 5,
      "title": "5. HÌNH CHÓP CỤT VÀ CÁC TÍNH CHẤT",
      "subtitle": "BÀI 13 • MỤC 3 • HÌNH TẠO THÀNH KHI CẮT HÌNH CHÓP BỞI MẶT PHẲNG SONG SONG ĐÁY",
      "mascotMode": "pointer",
      "mascotTip": "Hai đáy là 2 đa giác đồng dạng, các mặt bên là các hình thang!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-950 to-indigo-950 p-4 rounded-xl border border-purple-500/40 text-xs\">\n    <div class=\"font-bold text-purple-300 text-sm mb-2\">Cấu Trúc Hình Chóp Cụt $A_1A_2\\dots A_n.B_1B_2\\dots B_n$</div>\n    <div class=\"grid grid-cols-2 gap-2.5\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-amber-400\">\n        <b class=\"text-amber-300\">1. Hai mặt đáy:</b><br/>\n        Là hai đa giác <b>đồng dạng</b> nằm trong hai mặt phẳng song song.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">2. Các mặt bên:</b><br/>\n        Tất cả các mặt bên là các <b>hình thang</b>.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">3. Cạnh bên đồng quy:</b><br/>\n        Các đường thẳng chứa cạnh bên đồng quy tại đỉnh $S$ của hình chóp ban đầu.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-rose-400\">\n        <b class=\"text-rose-300\">4. Chiều cao:</b><br/>\n        Khoảng cách giữa hai mặt phẳng đáy.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Khi cắt một hình chóp bởi một mặt phẳng song song với đáy, phần hình chóp nằm giữa mặt phẳng đáy và mặt phẳng cắt được gọi là hình chóp cụt. Các tính chất quan trọng của hình chóp cụt: Hai đáy là hai đa giác có các cạnh tương ứng song song và tỉ số các cạnh tương ứng bằng nhau, tức là hai đa giác đồng dạng. Các mặt bên của hình chóp cụt đều là các hình thang. Các đường thẳng chứa các cạnh bên đồng quy tại một điểm, chính là đỉnh của hình chóp ban đầu.",
      "startTime": 109.75,
      "endTime": 143.78,
      "duration": 34.03
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: TÍNH CHẤT MẶT BÊN CỦA HÌNH LĂNG TRỤ VÀ HÌNH CHÓP CỤT",
      "subtitle": "BÀI 13 • MỤC 3 • PHÂN BIỆT RÕ RÀNG 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Mặt bên lăng trụ là hình bình hành, mặt bên chóp cụt là hình thang!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-rose-500/20 text-rose-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Nhận biết</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Khẳng định nào sau đây là <b>SAI</b>?\n    </p>\n\n    <div class=\"space-y-1.5 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Các mặt bên của hình lăng trụ luôn là các hình bình hành.</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> Các cạnh bên của hình lăng trụ song song và bằng nhau.</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-rose-500 font-bold text-rose-300\"><b>C.</b> Các mặt bên của hình chóp cụt luôn là các hình bình hành.</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Hai đáy của hình chóp cụt là hai đa giác đồng dạng.</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2: Khẳng định nào sau đây là sai khi nói về hình lăng trụ và hình chóp cụt? Khẳng định A: Các mặt bên của hình lăng trụ là các hình bình hành. Khẳng định B: Các cạnh bên của hình lăng trụ song song và bằng nhau. Khẳng định C: Các mặt bên của hình chóp cụt là các hình bình hành. Khẳng định D: Hai đáy của hình chóp cụt là hai đa giác đồng dạng. Các em có 15 giây tìm khẳng định sai.",
      "startTime": 143.78,
      "endTime": 155.93,
      "duration": 12.14
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: ĐÁP ÁN C LÀ KHẲNG ĐỊNH SAI",
      "subtitle": "BÀI 13 • MỤC 3 • HÌNH THANG KHÔNG THỂ LÀ HÌNH BÌNH HÀNH",
      "mascotMode": "celebrating",
      "mascotTip": "Mặt bên chóp cụt chỉ là hình thang vì 2 cạnh bên cắt nhau tại đỉnh hình chóp!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Phân tích bản chất:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• <b>Khẳng định A, B:</b> ĐÚNG theo định nghĩa và tính chất của hình lăng trụ.</p>\n      <p>• <b>Khẳng định C:</b> <b>SAI</b> vì các cạnh bên của hình chóp cụt không song song mà đồng quy tại đỉnh $S$. Do đó mặt bên là <b>hình thang</b>, không thể là hình bình hành.</p>\n      <p>• <b>Khẳng định D:</b> ĐÚNG theo tính chất mặt cắt song song đáy của hình chóp.</p>\n      <div class=\"mt-2 text-rose-300 font-bold font-mono\">➔ Chọn đáp án C (khẳng định sai).</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án sai cần chọn là C. Các mặt bên của hình chóp cụt là các hình thang chứ không phải là hình bình hành, vì hai cạnh bên của mỗi mặt bên kéo dài sẽ cắt nhau tại đỉnh của hình chóp ban đầu. Do đó khẳng định C là sai.",
      "startTime": 155.93,
      "endTime": 159.91,
      "duration": 3.98
    },
    {
      "sceneIndex": 8,
      "title": "8. KỸ THUẬT DỰNG THIẾT DIỆN CỦA HÌNH HỘP",
      "subtitle": "BÀI 13 • MỤC 3 • SỬ DỤNG TÍNH CHẤT CÁC MẶT ĐỐI DIỆN SONG SONG",
      "mascotMode": "pointer",
      "mascotTip": "Mặt phẳng cắt 2 mặt đối diện của hình hộp theo 2 đoạn giao tuyến SONG SONG!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-950 to-indigo-950 p-4 rounded-xl border border-blue-500/40 text-xs\">\n    <div class=\"font-bold text-blue-300 text-sm mb-2\">Kỹ Thuật Kẻ Giao Tuyến Song Song Trên Hình Hộp</div>\n    <p class=\"text-slate-300 leading-relaxed\">\n      Hình hộp có 3 cặp mặt đối diện song song:\n      $$(ABCD) \\parallel (A'B'C'D'), \\quad (ABB'A') \\parallel (CDD'C'), \\quad (ADD'A') \\parallel (BCC'B')$$\n    </p>\n\n    <div class=\"p-3 my-2 bg-slate-900 rounded border-l-4 border-emerald-400\">\n      <b class=\"text-emerald-300\">Quy tắc vàng:</b><br/>\n      Nếu mặt phẳng $(\\alpha)$ cắt $(ABCD)$ theo đoạn $IJ$ thì $(\\alpha)$ sẽ cắt $(A'B'C'D')$ theo đoạn $I'J' \\parallel IJ$.<br/>\n      Thiết diện của hình hộp chỉ có thể là: <b>tam giác, tứ giác, ngũ giác hoặc lục giác</b> (tối đa 6 cạnh vì có 6 mặt).\n    </div>\n  </div>\n</div>\n",
      "narration": "Khi tìm thiết diện của hình hộp cắt bởi một mặt phẳng P, các em hãy áp dụng triệt để Định lí 2: Vì hình hộp có các cặp mặt đối diện song song, nên mặt phẳng P sẽ cắt hai mặt đối diện theo hai đoạn giao tuyến song song với nhau. Nhờ tính chất này, chỉ cần tìm được một giao tuyến ở mặt này, ta có thể kẻ đường thẳng song song ở mặt đối diện.",
      "startTime": 159.91,
      "endTime": 164.45,
      "duration": 4.54
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: THIẾT DIỆN HÌNH HỘP QUA TRUNG ĐIỂM CÁC CẠNH",
      "subtitle": "BÀI 13 • MỤC 3 • BÀI TOÁN XÁC ĐỊNH ĐA GIÁC THIẾT DIỆN 30S",
      "mascotMode": "thinking",
      "mascotTip": "Mặt phẳng cắt cả 6 mặt tạo thành lục giác có các cạnh đối song song!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho hình lập phương $ABCD.A'B'C'D'$. Gọi $M, N, P$ lần lượt là trung điểm của $AB, B'C', D'D$. Thiết diện cắt bởi mặt phẳng $(MNP)$ là hình gì?\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Tam giác</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> Hình bình hành</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> Ngũ giác</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>D.</b> Lục giác đều</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-purple-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-purple-300 font-medium\">Thời gian tư duy:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3: Cho hình lập phương ABCD.A'B'C'D'. Gọi M, N, P lần lượt là trung điểm của các cạnh AB, B'C' và D'D. Thiết diện của hình lập phương cắt bởi mặt phẳng MNP là hình gì? Phương án A: Tam giác; Phương án B: Tứ giác; Phương án C: Ngũ giác; Phương án D: Lục giác đều. Các em có 30 giây phân tích.",
      "startTime": 164.45,
      "endTime": 170.4,
      "duration": 5.95
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: THIẾT DIỆN LÀ LỤC GIÁC ĐỀU",
      "subtitle": "BÀI 13 • MỤC 3 • THIẾT DIỆN KINH ĐIỂN CỦA HÌNH LẬP PHƯƠNG",
      "mascotMode": "celebrating",
      "mascotTip": "Mặt phẳng đi qua tâm hình lập phương và cắt cả 6 mặt theo các cạnh bằng $\\frac{a\\sqrt{2}}{2}$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Lời giải chi tiết bài toán thiết diện:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• Dựng giao tuyến bằng quy tắc song song trên các cặp mặt đối diện:</p>\n      <p>• Mặt phẳng $(MNP)$ cắt 6 mặt của hình lập phương tại 6 trung điểm của 6 cạnh:</p>\n      <p class=\"font-mono text-amber-300 text-center\">$$M \\in AB, \\ E \\in BC, \\ F \\in CC', \\ N \\in C'D', \\ G \\in D'A', \\ P \\in A'A$$</p>\n      <p>• Độ dài 6 cạnh thiết diện đều bằng $\\frac{a\\sqrt{2}}{2}$ (đường trung bình của tam giác vuông cân cạnh $a$).</p>\n      <p>• Cả 6 góc đều bằng $120^\\circ \\implies$ Thiết diện là <b>lục giác đều</b>.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án D.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án chính xác là D: Lục giác đều. Lời giải: Bằng cách kéo dài các đoạn thẳng và dựng các giao tuyến song song trên các mặt đối diện, mặt phẳng MNP cắt 6 cạnh của hình lập phương tại 6 trung điểm: trung điểm AB, trung điểm BC, trung điểm CC', trung điểm C'D', trung điểm D'A' và trung điểm A'A. Cả 6 đoạn giao tuyến này đều bằng nhau và bằng cạnh của hình vuông nhân căn hai chia hai. Hơn nữa các góc của lục giác đều bằng 120 độ. Vậy thiết diện là một lục giác đều.",
      "startTime": 170.4,
      "endTime": 171.7,
      "duration": 1.3
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI VỀ HÌNH LĂNG TRỤ VÀ HÌNH HỘP",
      "subtitle": "BÀI 13 • MỤC 3 • 4 MỆNH ĐỀ TỔNG HỢP 30 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Đọc thật kĩ: Hình lăng trụ đứng khác hình lăng trụ tổng quát xiên!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 4 (Đúng / Sai)</span>\n      <span class=\"text-xs text-slate-400\">Định dạng thi 2025</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Xét tính Đúng / Sai của các khẳng định sau:\n    </p>\n\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>a)</b> Hình lăng trụ tam giác có $5$ mặt, $6$ đỉnh và $9$ cạnh.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>b)</b> Các mặt bên của hình lăng trụ luôn vuông góc với mặt phẳng đáy.</span>\n        <span class=\"font-bold text-rose-400\">[ SAI ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>c)</b> Bốn đường chéo của hình hộp cắt nhau tại trung điểm mỗi đường.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>d)</b> Thiết diện của hình hộp có thể là một đa giác $7$ cạnh.</span>\n        <span class=\"font-bold text-rose-400\">[ SAI ]</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian kiểm tra:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4: Xét tính Đúng hay Sai của các khẳng định sau về hình lăng trụ và hình hộp: Mệnh đề a: Một hình lăng trụ tam giác có tổng cộng 5 mặt, 6 đỉnh và 9 cạnh. Mệnh đề b: Các mặt bên của hình lăng trụ luôn vuông góc với hai mặt phẳng đáy. Mệnh đề c: Bốn đường chéo của hình hộp cắt nhau tại trung điểm của mỗi đường. Mệnh đề d: Thiết diện của hình hộp có thể là một thất giác, tức là đa giác 7 cạnh. Các em có 30 giây suy nghĩ.",
      "startTime": 171.7,
      "endTime": 191.7,
      "duration": 20.0
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & BẾ MẠC TOÀN KHÓA BÀI 13",
      "subtitle": "BÀI 13 • MỤC 3 • TỔNG KẾT TOÀN DIỆN HAI MẶT PHẲNG SONG SONG",
      "mascotMode": "celebrating",
      "mascotTip": "Hình hộp chỉ có 6 mặt nên thiết diện tối đa chỉ có 6 cạnh (lục giác)!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Đáp án và giải thích chuẩn mực:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• <b>a) ĐÚNG:</b> Với $n = 3$: $V = 2n = 6, \\ E = 3n = 9, \\ F = n + 2 = 5$.</p>\n      <p>• <b>b) SAI:</b> Lăng trụ tổng quát có thể là <b>lăng trụ xiên</b> (chỉ có lăng trụ đứng mới vuông góc đáy).</p>\n      <p>• <b>c) ĐÚNG:</b> Tâm hình hộp là trung điểm của cả 4 đường chéo.</p>\n      <p>• <b>d) SAI:</b> Hình hộp chỉ có 6 mặt $\\implies$ Số cạnh thiết diện tối đa là $6$ (lục giác).</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">🎉 CHÚC MỪNG CÁC EM ĐÃ HOÀN THÀNH TOÀN BỘ BÀI 13 TOÁN 11 KNTT!</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã xuất sắc hoàn thành trọn bộ Bài 13: Hai mặt phẳng song song. Phân tích Ví dụ 4: Mệnh đề a ĐÚNG vì lăng trụ tam giác có n bằng 3, số đỉnh là 2 nhân 3 bằng 6, số cạnh là 3 nhân 3 bằng 9, số mặt là 3 cộng 2 bằng 5. Mệnh đề b SAI vì lăng trụ tổng quát có thể là lăng trụ xiên, mặt bên không nhất thiết vuông góc đáy. Mệnh đề c ĐÚNG vì đây là tính chất hình hộp. Mệnh đề d SAI vì hình hộp chỉ có 6 mặt, mỗi mặt cắt nhiều nhất cho 1 đoạn giao tuyến, do đó thiết diện tối đa chỉ có 6 cạnh, không thể có 7 cạnh. Hẹn gặp lại các em ở Bài 14: Phép chiếu song song!",
      "startTime": 191.7,
      "endTime": 213.18,
      "duration": 21.48
    }
  ]
};
  root.G11_CHAPTER4_DATA.toan11_bai13_muc3 = root.G11_CHAPTER4_DATA.g11_bai13_muc3;

  root.G11_CHAPTER4_DATA.g11_bai14_muc1 = {
  "lessonId": "toan11_bai14",
  "lessonTitle": "Bài 14: Phép chiếu song song",
  "sectionId": "g11_bai14_muc1",
  "sectionTitle": "Mục 1: Khái niệm & Các tính chất cơ bản của phép chiếu song song",
  "audio": "/audio/g11_bai14_muc1.mp3",
  "audioSrc": "./audio/g11_bai14_muc1.mp3",
  "audio_src": "./audio/g11_bai14_muc1.mp3",
  "title": "Mục 1: Khái niệm & Các tính chất cơ bản của phép chiếu song song",
  "owl_tip": "Phép chiếu song song bảo toàn tính thẳng hàng, thứ tự các điểm, tính song song và tỉ số độ dài của hai đoạn thẳng cùng phương!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. ĐỊNH NGHĨA PHÉP CHIẾU SONG SONG",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. HÌNH CHIẾU SONG SONG CỦA MỘT HÌNH",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI VỀ ĐỊNH NGHĨA PHÉP CHIẾU SONG SONG",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 1",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 296.24,
  "formattedDuration": "04:56",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. ĐỊNH NGHĨA PHÉP CHIẾU SONG SONG",
      "subtitle": "BÀI 14 • MỤC 1 • MÔ HÌNH HÌNH HỌC TẠO ẢNH BÓNG ĐỔ",
      "mascotMode": "pointer",
      "mascotTip": "Mặt phẳng chiếu $(P)$ và phương chiếu $\\Delta$ ($\\Delta$ phải cắt $(P)$)!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-teal-950 to-emerald-950 p-4 rounded-xl border border-teal-500/40\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-teal-500/20 text-teal-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Định nghĩa chính thức</span>\n      <h3 class=\"text-xl font-black text-teal-200\">Phép Chiếu Song Song</h3>\n    </div>\n    <p class=\"text-sm text-slate-200 leading-relaxed\">\n      • Cho mặt phẳng $(P)$ gọi là <b>mặt phẳng chiếu</b>.<br/>\n      • Đường thẳng $\\Delta$ cắt $(P)$ gọi là <b>phương chiếu</b>.<br/>\n      • Phép đặt tương ứng mỗi điểm $M$ với điểm $M' = d_M \\cap (P)$ (với $d_M \\parallel \\Delta$ hoặc $d_M \\equiv \\Delta$) gọi là <b>phép chiếu song song</b> lên $(P)$ theo phương $\\Delta$.\n    </p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-cyan-400 shadow-md\">\n      <h4 class=\"font-bold text-cyan-300 text-sm mb-1\">📍 Ký hiệu & Điểm ảnh</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • Điểm $M'$ gọi là <b>hình chiếu song song</b> của $M$.<br/>\n        • Ký hiệu: $M' = \\text{pr}_{(P, \\Delta)}(M)$ hoặc đơn giản là hình chiếu của $M$.\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-amber-400 shadow-md\">\n      <h4 class=\"font-bold text-amber-300 text-sm mb-1\">💡 Hiện tượng thực tế</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • Bóng của cột cờ, cây cối trên sân trường dưới ánh nắng mặt trời (các tia sáng song song).<br/>\n        • Bản vẽ kỹ thuật trong cơ khí và xây dựng.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Bài 14: Phép chiếu song song. Trong đời sống hàng ngày, dưới ánh nắng mặt trời buổi sáng hay buổi chiều, bóng của các đồ vật in trên mặt đất chính là hình ảnh trực quan của phép chiếu song song. Trong toán học, cho mặt phẳng P và một đường thẳng delta cắt mặt phẳng P. Với mỗi điểm M trong không gian, đường thẳng đi qua M song song hoặc trùng với delta sẽ cắt mặt phẳng P tại một điểm M phẩy duy nhất. Điểm M phẩy được gọi là hình chiếu song song của điểm M lên mặt phẳng P theo phương delta.",
      "startTime": 0.0,
      "endTime": 33.43,
      "duration": 33.43
    },
    {
      "sceneIndex": 2,
      "title": "2. HÌNH CHIẾU SONG SONG CỦA MỘT HÌNH",
      "subtitle": "BÀI 14 • MỤC 1 • TẬP HỢP TẤT CẢ CÁC ĐIỂM ẢNH",
      "mascotMode": "explaining",
      "mascotTip": "Hình chiếu của hình $\\mathcal{H}$ là tập hợp hình chiếu của tất cả các điểm thuộc $\\mathcal{H}$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-950 to-indigo-950 p-4 rounded-xl border border-blue-500/40 text-xs\">\n    <div class=\"font-bold text-blue-300 text-sm mb-2\">Hình Chiếu Của Một Hình $\\mathcal{H}$</div>\n    <p class=\"text-slate-200 leading-relaxed text-sm\">\n      Tập hợp $\\mathcal{H}' = \\{M' \\mid M' = \\text{hình chiếu của } M \\in \\mathcal{H}\\}$ được gọi là <b>hình chiếu song song</b> của hình $\\mathcal{H}$ lên $(P)$ theo phương $\\Delta$.\n    </p>\n\n    <div class=\"mt-3 grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2.5 bg-slate-900 rounded border border-blue-400/30\">\n        <b class=\"text-blue-300\">Điểm bất động:</b><br/>\n        Nếu $M \\in (P)$ thì hình chiếu của $M$ là chính nó: $M' \\equiv M$.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border border-blue-400/30\">\n        <b class=\"text-blue-300\">Phương chiếu không song song $(P)$:</b><br/>\n        Điều kiện bắt buộc là phương chiếu $\\Delta$ phải cắt mặt phẳng $(P)$, không được $\\Delta \\parallel (P)$.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Tiếp theo, ta tìm hiểu về hình chiếu của một hình bất kì. Giả sử ta có một hình H trong không gian như một đoạn thẳng, một tam giác hay một hình tròn. Tập hợp tất cả các điểm M phẩy là hình chiếu của các điểm M thuộc hình H được gọi là hình chiếu song song của hình H lên mặt phẳng P theo phương delta. Nếu điểm M đã nằm sẵn trên mặt phẳng P thì hình chiếu của nó trùng với chính nó.",
      "startTime": 33.43,
      "endTime": 34.46,
      "duration": 1.03
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: ĐIỀU KIỆN CỦA PHƯƠNG CHIẾU TRONG KHÔNG GIAN",
      "subtitle": "BÀI 14 • MỤC 1 • CÂU HỎI NHẬN BIẾT 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Phương chiếu $\\Delta$ bắt buộc phải cắt mặt phẳng chiếu $(P)$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Nhận biết</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Để xác định một phép chiếu song song lên mặt phẳng $(P)$ theo phương $\\Delta$, điều kiện bắt buộc đối với $\\Delta$ là:\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> $\\Delta \\parallel (P)$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> $\\Delta \\perp (P)$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>C.</b> $\\Delta$ cắt $(P)$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> $\\Delta \\subset (P)$</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian chọn đáp án:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 1: Trong định nghĩa phép chiếu song song lên mặt phẳng P theo phương delta, điều kiện cần và đủ đối với đường thẳng delta là gì? Phương án A: delta song song với mặt phẳng P; Phương án B: delta vuông góc với mặt phẳng P; Phương án C: delta cắt mặt phẳng P; Phương án D: delta nằm trong mặt phẳng P. Các em có 15 giây chọn đáp án.",
      "startTime": 34.46,
      "endTime": 61.75,
      "duration": 27.29
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN C CHÍNH XÁC",
      "subtitle": "BÀI 14 • MỤC 1 • BẢN CHẤT HÌNH HỌC CỦA PHƯƠNG CHIẾU",
      "mascotMode": "celebrating",
      "mascotTip": "Nếu $\\Delta \\parallel (P)$ thì đường thẳng qua $M$ song song $\\Delta$ sẽ không bao giờ cắt $(P)$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Giải thích chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• Nếu $\\Delta \\parallel (P)$ hoặc $\\Delta \\subset (P)$ thì với mọi điểm $M \\notin (P)$, đường thẳng qua $M$ song song với $\\Delta$ sẽ song song với $(P)$, do đó không bao giờ cắt $(P) \\implies$ không có điểm chiếu $M'$.</p>\n      <p>• Do đó, điều kiện tiên quyết để tồn tại phép chiếu song song là <b>$\\Delta$ phải cắt $(P)$</b>.</p>\n      <p>• Khi $\\Delta \\perp (P)$, phép chiếu được gọi là <b>phép chiếu vuông góc</b> (trường hợp đặc biệt).</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án C.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là C: delta cắt mặt phẳng P. Tại sao delta không thể song song với P? Vì nếu delta song song với P thì đường thẳng đi qua điểm M song song với delta cũng sẽ song song với P, nghĩa là nó không bao giờ cắt P, do đó không thể xác định được điểm ảnh M phẩy. Vì vậy, bắt buộc delta phải cắt mặt phẳng P.",
      "startTime": 61.75,
      "endTime": 81.75,
      "duration": 20.0
    },
    {
      "sceneIndex": 5,
      "title": "5. TRƯỜNG HỢP SUY BIẾN ĐẶC BIỆT KHI CHIẾU ĐƯỜNG THẲNG",
      "subtitle": "BÀI 14 • MỤC 1 • KHI ĐƯỜNG THẲNG SONG SONG VỚI PHƯƠNG CHIẾU",
      "mascotMode": "explaining",
      "mascotTip": "Nếu đường thẳng $d \\parallel \\Delta$ hoặc $d \\equiv \\Delta$ thì hình chiếu của $d$ chỉ là MỘT ĐIỂM!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-rose-950 to-slate-900 p-4 rounded-xl border border-rose-500/40 text-xs\">\n    <div class=\"font-bold text-rose-300 text-sm mb-2\">Trường Hợp Suy Biến (Cực Kì Quan Trọng)</div>\n    <div class=\"space-y-2\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-rose-400\">\n        <b class=\"text-rose-300\">Khi $d \\parallel \\Delta$ hoặc $d \\equiv \\Delta$:</b>\n        <p class=\"text-slate-300 mt-1\">\n          Tất cả các điểm trên đường thẳng $d$ đều chiếu về giao điểm $A = d \\cap (P)$.<br/>\n          $\\implies$ Hình chiếu của đường thẳng $d$ là <b>một điểm duy nhất</b>!\n        </p>\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">Khi $d$ không song song $\\Delta$:</b>\n        <p class=\"text-slate-300 mt-1\">\n          Hình chiếu của đường thẳng $d$ luôn luôn là một <b>đường thẳng</b> $d'$.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Một tình huống đặc biệt các em cần hết sức lưu ý: Đó là khi đường thẳng d song song hoặc trùng với phương chiếu delta. Khi đó, tất cả các điểm thuộc đường thẳng d khi chiếu xuống mặt phẳng P đều rơi vào đúng một điểm duy nhất, chính là giao điểm của d với mặt phẳng P. Khi đó ta nói hình chiếu của đường thẳng d bị suy biến thành một điểm.",
      "startTime": 81.75,
      "endTime": 92.22,
      "duration": 10.46
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: HÌNH CHIẾU CỦA ĐOẠN THẲNG SONG SONG PHƯƠNG CHIẾU",
      "subtitle": "BÀI 14 • MỤC 1 • CÂU HỎI THÔNG HIỂU 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Đoạn thẳng song song phương chiếu thì mọi điểm trên đoạn thẳng chiếu về cùng 1 điểm!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho đoạn thẳng $AB$ song song với phương chiếu $\\Delta$. Hình chiếu song song của đoạn thẳng $AB$ lên $(P)$ là:\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Đoạn thẳng bằng $AB$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> Một đường thẳng</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>C.</b> Một điểm duy nhất</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Một tia</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2: Cho đoạn thẳng AB song song với phương chiếu delta. Hình chiếu song song của đoạn thẳng AB lên mặt phẳng chiếu P là gì? Phương án A: Một đoạn thẳng có độ dài bằng AB; Phương án B: Một đường thẳng; Phương án C: Một điểm duy nhất; Phương án D: Một tia. Các em có 15 giây chọn đáp án.",
      "startTime": 92.22,
      "endTime": 118.86,
      "duration": 26.64
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: ĐÁP ÁN C CHÍNH XÁC",
      "subtitle": "BÀI 14 • MỤC 1 • ĐIỂM CHIẾU SUY BIẾN",
      "mascotMode": "celebrating",
      "mascotTip": "Tia sáng đi dọc theo thân que gậy cắm thẳng đứng $\\implies$ bóng của que gậy chỉ là 1 chấm tròn!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Lời giải chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• Đường thẳng $AB \\parallel \\Delta \\implies$ đường thẳng qua bất kì điểm $M \\in AB$ song song với $\\Delta$ chính là đường thẳng $AB$.</p>\n      <p>• Đường thẳng $AB$ cắt $(P)$ tại điểm $I = AB \\cap (P)$.</p>\n      <p>• Khi đó, với mọi $M \\in AB$, hình chiếu của $M$ đều là điểm $I$.</p>\n      <p>• Vậy hình chiếu của cả đoạn thẳng $AB$ là <b>một điểm duy nhất</b> $I$.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án C.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là C: Một điểm duy nhất. Giải thích: Vì đường thẳng chứa đoạn thẳng AB song song với phương chiếu delta, nên đường thẳng chiếu đi qua mọi điểm trên đoạn thẳng AB đều trùng với đường thẳng AB. Đường thẳng này cắt mặt phẳng P tại đúng một giao điểm duy nhất. Do đó, hình chiếu của toàn bộ đoạn thẳng AB suy biến thành một điểm duy nhất.",
      "startTime": 118.86,
      "endTime": 141.58,
      "duration": 22.73
    },
    {
      "sceneIndex": 8,
      "title": "8. SO SÁNH PHÉP CHIẾU SONG SONG VÀ PHÉP CHIẾU XUYÊN TÂM",
      "subtitle": "BÀI 14 • MỤC 1 • MỞ RỘNG TƯ DUY HÌNH HỌC PHẲNG & KHÔNG GIAN",
      "mascotMode": "pointer",
      "mascotTip": "Phép chiếu song song có các tia chiếu song song, còn chiếu xuyên tâm các tia chiếu xuất phát từ một điểm!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-slate-900 to-indigo-950 p-4 rounded-xl border border-indigo-500/40 text-xs\">\n    <div class=\"font-bold text-indigo-300 text-sm mb-2\">Bảng Đối Chiếu Hai Loại Phép Chiếu</div>\n    <div class=\"grid grid-cols-2 gap-3\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300 text-sm\">1. Phép chiếu song song</b>\n        <p class=\"text-slate-300 mt-1\">\n          • Các tia chiếu <b>song song</b> với nhau.<br/>\n          • Bảo toàn tính song song của hai đường thẳng.<br/>\n          • Mô hình: Ánh sáng mặt trời, bản vẽ kỹ thuật.\n        </p>\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-amber-400\">\n        <b class=\"text-amber-300 text-sm\">2. Phép chiếu xuyên tâm</b>\n        <p class=\"text-slate-300 mt-1\">\n          • Các tia chiếu cùng đi qua <b>tâm chiếu $S$</b>.<br/>\n          • KHÔNG bảo toàn tính song song (đường ray hội tụ tại chân trời).<br/>\n          • Mô hình: Đèn pin, máy chiếu, camera, mắt nhìn.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Để hiểu sâu hơn, chúng ta hãy so sánh hai loại phép chiếu phổ biến trong cuộc sống: Phép chiếu song song có các tia chiếu song song với nhau theo phương delta, ví dụ bóng đổ dưới ánh nắng mặt trời ở xa vô cực. Còn phép chiếu xuyên tâm có các tia chiếu cùng xuất phát từ một tâm chiếu S, ví dụ bóng đổ dưới ánh đèn bàn trong phòng hoặc hình ảnh thu nhận qua võng mạc mắt người và ống kính máy ảnh.",
      "startTime": 141.58,
      "endTime": 171.92,
      "duration": 30.34
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: TÌM HÌNH CHIẾU CỦA ĐỈNH HÌNH CHÓP LÊN ĐÁY",
      "subtitle": "BÀI 14 • MỤC 1 • BÀI TOÁN HÌNH CHIẾU THEO PHƯƠNG CẠNH BÊN 30S",
      "mascotMode": "thinking",
      "mascotTip": "Phương chiếu là cạnh bên $SA \\implies$ hình chiếu của $S$ chính là điểm $A$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho hình chóp $S.ABC$. Hình chiếu song song của tam giác $SBC$ lên mặt phẳng $(ABC)$ theo phương chiếu $SA$ là:\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Đoạn thẳng $BC$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>B.</b> Tam giác $ABC$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> Điểm $A$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Tam giác $SBC$</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-purple-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-purple-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3: Cho hình chóp S.ABC. Tìm hình chiếu song song của tam giác SBC lên mặt phẳng đáy ABC theo phương chiếu của đường thẳng SA. Phương án A: Đoạn thẳng BC; Phương án B: Tam giác ABC; Phương án C: Điểm A; Phương án D: Tam giác SBC. Các em có 30 giây suy nghĩ.",
      "startTime": 171.92,
      "endTime": 199.42,
      "duration": 27.5
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: HÌNH CHIẾU LÀ TAM GIÁC $ABC$",
      "subtitle": "BÀI 14 • MỤC 1 • TÌM HÌNH CHIẾU TỪNG ĐỈNH",
      "mascotMode": "celebrating",
      "mascotTip": "$S \\to A$, $B \\to B$, $C \\to C \\implies \\triangle SBC \\to \\triangle ABC$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Quy trình tìm hình chiếu từng điểm:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• Hình chiếu của đỉnh $S$ theo phương $SA$ là giao điểm của đường thẳng $SA$ với $(ABC) \\implies S \\mapsto A$.</p>\n      <p>• Vì $B \\in (ABC) \\implies B \\mapsto B$.</p>\n      <p>• Vì $C \\in (ABC) \\implies C \\mapsto C$.</p>\n      <p>• Vậy hình chiếu của $\\triangle SBC$ gồm 3 đỉnh $S, B, C$ chính là tam giác tạo bởi $A, B, C$, tức là $\\triangle ABC$.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án B.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là B: Tam giác ABC. Cách tìm hình chiếu của một tam giác: Ta chỉ cần tìm hình chiếu của ba đỉnh S, B và C. Đỉnh S: Đường thẳng qua S song song hoặc trùng phương chiếu SA cắt mặt đáy ABC tại điểm A, vậy hình chiếu của S là A. Đỉnh B và C: Vì B và C đã nằm sẵn trên mặt đáy ABC nên hình chiếu của B là chính nó B, hình chiếu của C là chính nó C. Kết nối ba điểm ảnh A, B, C ta được hình chiếu là tam giác ABC.",
      "startTime": 199.42,
      "endTime": 224.65,
      "duration": 25.22
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI VỀ ĐỊNH NGHĨA PHÉP CHIẾU SONG SONG",
      "subtitle": "BÀI 14 • MỤC 1 • 4 MỆNH ĐỀ ĐÁNH GIÁ NĂNG LỰC 30 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Cẩn thận các trường hợp điểm thuộc mặt phẳng chiếu và đường thẳng song song phương chiếu!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 4 (Đúng / Sai)</span>\n      <span class=\"text-xs text-slate-400\">Định dạng thi 2025</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Xét tính Đúng / Sai của các khẳng định sau:\n    </p>\n\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>a)</b> Hình chiếu của một điểm $M \\in (P)$ là chính nó.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>b)</b> Hình chiếu của một đường thẳng bất kì luôn là một đường thẳng.</span>\n        <span class=\"font-bold text-rose-400\">[ SAI ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>c)</b> Khi $\\Delta \\perp (P)$, phép chiếu được gọi là phép chiếu vuông góc.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>d)</b> Phương chiếu $\\Delta$ có thể song song với $(P)$.</span>\n        <span class=\"font-bold text-rose-400\">[ SAI ]</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian kiểm tra:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4: Cho phép chiếu song song lên mặt phẳng P theo phương delta. Xét tính Đúng hay Sai của các khẳng định sau: Mệnh đề a: Hình chiếu của một điểm thuộc mặt phẳng P là chính nó. Mệnh đề b: Hình chiếu của một đường thẳng bất kì luôn luôn là một đường thẳng. Mệnh đề c: Nếu phương chiếu delta vuông góc với mặt phẳng P thì phép chiếu được gọi là phép chiếu vuông góc. Mệnh đề d: Phương chiếu delta có thể song song với mặt phẳng chiếu P. Các em có 30 giây suy nghĩ.",
      "startTime": 224.65,
      "endTime": 262.26,
      "duration": 37.61
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 1",
      "subtitle": "BÀI 14 • MỤC 1 • BÀN GIAO TOÀN DIỆN KIẾN THỨC",
      "mascotMode": "celebrating",
      "mascotTip": "Mệnh đề b SAI vì nếu $d \\parallel \\Delta$ thì hình chiếu suy biến thành 1 điểm!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Đáp án phân tích:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• <b>a) ĐÚNG:</b> Mọi điểm thuộc $(P)$ đều có hình chiếu là chính nó.</p>\n      <p>• <b>b) SAI:</b> Khi $d \\parallel \\Delta$, hình chiếu là <b>một điểm</b>.</p>\n      <p>• <b>c) ĐÚNG:</b> Khi $\\Delta \\perp (P)$ ta có phép chiếu vuông góc.</p>\n      <p>• <b>d) SAI:</b> $\\Delta$ bắt buộc phải cắt $(P)$ (không được song song).</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">⭐ TỔNG KẾT MỤC 1: Hiểu sâu mô hình phép chiếu song song và trường hợp suy biến thành điểm!</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã hoàn thành Mục 1. Giải thích chi tiết Ví dụ 4: Mệnh đề a ĐÚNG vì điểm nằm trên mặt phẳng chiếu là điểm bất động. Mệnh đề b SAI vì nếu đường thẳng song song với phương chiếu delta thì hình chiếu của nó suy biến thành một điểm. Mệnh đề c ĐÚNG vì đây là định nghĩa phép chiếu vuông góc. Mệnh đề d SAI vì phương chiếu delta bắt buộc phải cắt mặt phẳng P. Hẹn gặp lại các em ở Mục 2: Các tính chất của phép chiếu song song.",
      "startTime": 262.26,
      "endTime": 296.24,
      "duration": 33.98
    }
  ]
};
  root.G11_CHAPTER4_DATA.toan11_bai14_muc1 = root.G11_CHAPTER4_DATA.g11_bai14_muc1;

  root.G11_CHAPTER4_DATA.g11_bai14_muc2 = {
  "lessonId": "toan11_bai14",
  "lessonTitle": "Bài 14: Phép chiếu song song",
  "sectionId": "g11_bai14_muc2",
  "sectionTitle": "Mục 2: Hình biểu diễn của một hình không gian trên mặt phẳng",
  "audio": "/audio/g11_bai14_muc2.mp3",
  "audioSrc": "./audio/g11_bai14_muc2.mp3",
  "audio_src": "./audio/g11_bai14_muc2.mp3",
  "title": "Mục 2: Hình biểu diễn của một hình không gian trên mặt phẳng",
  "owl_tip": "Hình biểu diễn của đường tròn là elip hoặc hình tròn (đặc biệt đoạn thẳng nếu mặt phẳng chứa đường tròn song song phương chiếu)!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. TÍNH CHẤT BIẾN ĐƯỜNG THẲNG, TIA VÀ ĐOẠN THẲNG",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. TÍNH CHẤT BẢO TOÀN QUAN HỆ SONG SONG",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI VỀ TÍNH CHẤT PHÉP CHIẾU SONG SONG",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 2",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 318.25,
  "formattedDuration": "05:18",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. TÍNH CHẤT BIẾN ĐƯỜNG THẲNG, TIA VÀ ĐOẠN THẲNG",
      "subtitle": "BÀI 14 • MỤC 2 • CÁC TÍNH CHẤT NỀN TẢNG",
      "mascotMode": "pointer",
      "mascotTip": "Đường thẳng $\\to$ Đường thẳng, Tia $\\to$ Tia, Đoạn thẳng $\\to$ Đoạn thẳng!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-950 to-indigo-950 p-4 rounded-xl border border-blue-500/40\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Tính chất 1 & 2</span>\n      <h3 class=\"text-xl font-black text-blue-200\">Bảo Toàn Tính Thẳng Hàng & Đoạn Thẳng</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs text-slate-300\">\n      <div class=\"p-2.5 bg-slate-900 rounded border border-blue-400/30\">\n        <b class=\"text-blue-300\">Tính chất 1:</b><br/>\n        • $A, B, C$ thẳng hàng $\\implies A', B', C'$ thẳng hàng.<br/>\n        • Nếu $B$ nằm giữa $A$ và $C$ thì $B'$ nằm giữa $A'$ và $C'$.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border border-blue-400/30\">\n        <b class=\"text-blue-300\">Tính chất 2:</b><br/>\n        • Đường thẳng $d \\not\\parallel \\Delta \\implies$ Đường thẳng $d'$.<br/>\n        • Tia $Ax \\implies$ Tia $A'x'$.<br/>\n        • Đoạn thẳng $AB \\implies$ Đoạn thẳng $A'B'$.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 2: Các tính chất của phép chiếu song song và bảo toàn tỉ số. Phép chiếu song song có 3 tính chất hình học nền tảng sau: Tính chất 1: Phép chiếu song song biến ba điểm thẳng hàng thành ba điểm thẳng hàng và bảo toàn thứ tự giữa các điểm đó. Tính chất 2: Phép chiếu song song biến đường thẳng không song song với phương chiếu thành đường thẳng; biến tia thành tia; biến đoạn thẳng thành đoạn thẳng.",
      "startTime": 0.0,
      "endTime": 32.35,
      "duration": 32.35
    },
    {
      "sceneIndex": 2,
      "title": "2. TÍNH CHẤT BẢO TOÀN QUAN HỆ SONG SONG",
      "subtitle": "BÀI 14 • MỤC 2 • BẢO TOÀN SONG SONG VÀ BẢO TOÀN TỈ SỐ ĐỘ DÀI",
      "mascotMode": "explaining",
      "mascotTip": "Hai đường thẳng song song chiếu thành 2 đường thẳng song song hoặc trùng nhau!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-950 to-teal-950 p-4 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"font-bold text-emerald-300 text-sm mb-2\">Tính Chất 3 & 4 (Tính Chất Cốt Lõi)</div>\n    <div class=\"space-y-2\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">Bảo toàn tính song song:</b><br/>\n        $$a \\parallel b \\implies a' \\parallel b' \\quad \\text{hoặc} \\quad a' \\equiv b'$$\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-amber-400\">\n        <b class=\"text-amber-300\">Bảo toàn tỉ số độ dài song song:</b><br/>\n        Nếu $AB \\parallel CD$ (hoặc $A, B, C, D$ thẳng hàng) thì:\n        $$\\frac{A'B'}{C'D'} = \\frac{AB}{CD}$$\n        Đặc biệt: Nếu $M$ là <b>trung điểm</b> $AB$ thì $M'$ là <b>trung điểm</b> $A'B'$!\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Tính chất 3 là tính chất đặc sắc nhất của phép chiếu song song: Phép chiếu song song biến hai đường thẳng song song thành hai đường thẳng song song hoặc trùng nhau. Tính chất 4: Phép chiếu song song giữ nguyên tỉ số độ dài của hai đoạn thẳng cùng nằm trên một đường thẳng hoặc nằm trên hai đường thẳng song song. Hệ quả tuyệt vời là: hình chiếu của trung điểm đoạn thẳng chính là trung điểm của đoạn thẳng hình chiếu.",
      "startTime": 32.35,
      "endTime": 61.78,
      "duration": 29.42
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: HÌNH CHIẾU CỦA HAI ĐƯỜNG THẲNG SONG SONG",
      "subtitle": "BÀI 14 • MỤC 2 • CÂU HỎI TRẮC NGHIỆM ĐỊNH TÍNH 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Hai đường thẳng song song chiếu xuống có thể TRÙNG NHAU nếu cùng nằm trong mặt phẳng chứa phương chiếu!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Nhận biết</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Hình chiếu song song của hai đường thẳng song song $a$ và $b$ lên $(P)$ là:\n    </p>\n\n    <div class=\"space-y-1.5 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Hai đường thẳng cắt nhau</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> Hai đường thẳng chéo nhau</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>C.</b> Hai đường thẳng song song hoặc trùng nhau</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Hai đường thẳng vuông góc</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 1: Cho hai đường thẳng song song a và b không song song với phương chiếu delta. Hình chiếu song song của a và b lên mặt phẳng P có thể là: Phương án A: Hai đường thẳng cắt nhau; Phương án B: Hai đường thẳng chéo nhau; Phương án C: Hai đường thẳng song song hoặc trùng nhau; Phương án D: Hai đoạn thẳng vuông góc. Các em có 15 giây chọn đáp án.",
      "startTime": 61.78,
      "endTime": 91.68,
      "duration": 29.9
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN C CHÍNH XÁC",
      "subtitle": "BÀI 14 • MỤC 2 • PHÂN TÍCH TÍNH CHẤT 3",
      "mascotMode": "celebrating",
      "mascotTip": "Khi mặt phẳng $(a, b) \\parallel \\Delta$ thì hình chiếu $a'$ và $b'$ TRÙNG NHAU!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Giải thích chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• Theo Tính chất 3 của phép chiếu song song: $a \\parallel b \\implies a' \\parallel b'$ hoặc $a' \\equiv b'$.</p>\n      <p>• <b>Trường hợp $a' \\equiv b'$:</b> Xảy ra khi mặt phẳng chứa $a$ và $b$ song song với phương chiếu $\\Delta$.</p>\n      <p>• <b>Trường hợp $a' \\parallel b'$:</b> Xảy ra khi mặt phẳng chứa $a$ và $b$ không song song với $\\Delta$.</p>\n      <p>• Hình chiếu không bao giờ cắt nhau hay chéo nhau.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án C.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là C: Hai đường thẳng song song hoặc trùng nhau. Theo tính chất 3 của phép chiếu song song: Hình chiếu của hai đường thẳng song song là hai đường thẳng song song hoặc trùng nhau. Trường hợp trùng nhau xảy ra khi mặt phẳng chứa hai đường thẳng a và b song song với phương chiếu delta, khi đó cả hai đường thẳng cùng chiếu lên một giao tuyến duy nhất trên mặt phẳng P.",
      "startTime": 91.68,
      "endTime": 121.18,
      "duration": 29.5
    },
    {
      "sceneIndex": 5,
      "title": "5. CÁC ĐẠI LƯỢNG KHÔNG ĐƯỢC BẢO TOÀN",
      "subtitle": "BÀI 14 • MỤC 2 • BẪY THI CỰC KÌ PHỔ BIẾN",
      "mascotMode": "explaining",
      "mascotTip": "Độ lớn góc, độ dài đoạn thẳng và tính vuông góc KHÔNG được bảo toàn!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-rose-950 to-slate-900 p-4 rounded-xl border border-rose-500/40 text-xs\">\n    <div class=\"font-bold text-rose-300 text-sm mb-2\">⚠️ Các Đại Lượng KHÔNG Được Bảo Toàn (Bẫy Thi)</div>\n    <div class=\"grid grid-cols-3 gap-2\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-rose-400\">\n        <b class=\"text-rose-300\">1. Độ lớn góc:</b><br/>\n        Góc vuông, nhọn, tù đều có thể biến đổi thành góc bất kì.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-rose-400\">\n        <b class=\"text-rose-300\">2. Tính vuông góc:</b><br/>\n        $a \\perp b \\not\\implies a' \\perp b'$.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-rose-400\">\n        <b class=\"text-rose-300\">3. Độ dài:</b><br/>\n        $AB$ và $A'B'$ nói chung không bằng nhau.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Các em hãy đặc biệt lưu ý: Phép chiếu song song bảo toàn tính thẳng hàng, tính song song và tỉ số đoạn thẳng song song. Nhưng nó KHÔNG bảo toàn các đại lượng sau: Thứ nhất: Độ lớn của góc nói chung không được bảo toàn. Góc vuông có thể chiếu thành góc nhọn hoặc góc tù. Thứ hai: Độ dài của đoạn thẳng nói chung không được bảo toàn. Thứ ba: Tính vuông góc không được bảo toàn. Hai đường thẳng vuông góc có thể chiếu thành hai đường thẳng không vuông góc.",
      "startTime": 121.18,
      "endTime": 149.78,
      "duration": 28.61
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: HÌNH CHIẾU CỦA TAM GIÁC ĐỀU LÀ HÌNH GÌ?",
      "subtitle": "BÀI 14 • MỤC 2 • CÂU HỎI THÔNG HIỂU 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Tam giác đều, cân, vuông đều chiếu thành một tam giác bất kì!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-teal-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-teal-500/20 text-teal-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Hình chiếu song song của một tam giác đều $ABC$ lên một mặt phẳng chiếu $(P)$ nói chung là:\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Luôn là tam giác đều</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> Luôn là tam giác cân</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>C.</b> Một tam giác bất kì</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Luôn là tam giác vuông</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2: Cho tam giác đều ABC. Hình chiếu song song của tam giác ABC lên một mặt phẳng bất kì không song song với các cạnh của nó là hình gì? Phương án A: Bắt buộc là tam giác đều; Phương án B: Bắt buộc là tam giác vuông; Phương án C: Một tam giác bất kì; Phương án D: Một đoạn thẳng. Các em có 15 giây suy nghĩ.",
      "startTime": 149.78,
      "endTime": 166.15,
      "duration": 16.37
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: ĐÁP ÁN C CHÍNH XÁC",
      "subtitle": "BÀI 14 • MỤC 2 • KHÔNG BẢO TOÀN ĐỘ DÀI CẠNH VÀ GÓC",
      "mascotMode": "celebrating",
      "mascotTip": "Góc $60^\\circ$ và ba cạnh bằng nhau bị biến dạng tùy thuộc góc nghiêng của phương chiếu!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Phân tích tính chất:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• Phép chiếu song song biến 3 điểm không thẳng hàng $A, B, C$ thành 3 điểm không thẳng hàng $A', B', C'$.</p>\n      <p>• Do không bảo toàn độ dài và góc nên $A'B', B'C', C'A'$ nói chung không bằng nhau, và các góc không bằng $60^\\circ$.</p>\n      <p>• Vậy hình chiếu của một tam giác đều là một <b>tam giác bất kì</b>.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án C.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là C: Một tam giác bất kì. Vì phép chiếu song song không bảo toàn độ lớn của góc và độ dài các cạnh, nên ba góc 60 độ của tam giác đều và ba cạnh bằng nhau sẽ bị biến dạng. Do đó, hình chiếu của tam giác đều có thể là một tam giác nhọn, tam giác vuông hoặc tam giác tù tùy theo góc chiếu.",
      "startTime": 166.15,
      "endTime": 183.77,
      "duration": 17.62
    },
    {
      "sceneIndex": 8,
      "title": "8. BẢO TOÀN TRỌNG TÂM VÀ TRUNG ĐIỂM",
      "subtitle": "BÀI 14 • MỤC 2 • ỨNG DỤNG BẢO TOÀN TỈ SỐ ĐOẠN THẲNG",
      "mascotMode": "pointer",
      "mascotTip": "Trung điểm chiếu thành trung điểm, trọng tâm chiếu thành trọng tâm!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-950 to-indigo-950 p-4 rounded-xl border border-purple-500/40 text-xs\">\n    <div class=\"font-bold text-purple-300 text-sm mb-2\">Các Bất Biến Về Tỉ Số Của Phép Chiếu Song Song</div>\n    <div class=\"space-y-2\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">1. Trung điểm:</b>\n        <p class=\"text-slate-300 mt-1\">$M$ là trung điểm $AB \\implies M'$ là trung điểm $A'B'$.</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-amber-400\">\n        <b class=\"text-amber-300\">2. Trọng tâm tam giác:</b>\n        <p class=\"text-slate-300 mt-1\">$G$ là trọng tâm $\\triangle ABC \\implies G'$ là trọng tâm $\\triangle A'B'C'$.</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">3. Tỉ số điểm chia:</b>\n        <p class=\"text-slate-300 mt-1\">$\\vec{MA} = k \\vec{MB} \\implies \\vec{M'A'} = k \\vec{M'B'}$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Mặc dù không bảo toàn góc và độ dài, nhưng vì phép chiếu song song bảo toàn tỉ số của các đoạn thẳng thẳng hàng, nên nó bảo toàn các điểm đặc biệt sau: Trung điểm của đoạn thẳng chiếu thành trung điểm của đoạn thẳng hình chiếu. Trọng tâm của tam giác chiếu thành trọng tâm của tam giác hình chiếu. Tỉ số chia đoạn thẳng k luôn được giữ nguyên.",
      "startTime": 183.77,
      "endTime": 203.77,
      "duration": 20.0
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: HÌNH CHIẾU CỦA TRỌNG TÂM TAM GIÁC",
      "subtitle": "BÀI 14 • MỤC 2 • BÀI TOÁN TỈ SỐ ĐOẠN THẲNG 30S",
      "mascotMode": "thinking",
      "mascotTip": "Tỉ số $\\frac{AG}{AM} = \\frac{2}{3} \\implies \\frac{A'G'}{A'M'} = \\frac{2}{3}$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho $\\triangle ABC$ có trọng tâm $G$, trung tuyến $AM$. Gọi $A', B', C', G', M'$ là hình chiếu song song lên $(P)$. Khẳng định nào <b>SAI</b>?\n    </p>\n\n    <div class=\"space-y-1.5 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> $M'$ là trung điểm của đoạn thẳng $B'C'$.</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> $G'$ là trọng tâm của tam giác $A'B'C'$.</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> $\\frac{A'G'}{A'M'} = \\frac{2}{3}$.</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-rose-500 font-bold text-rose-300\"><b>D.</b> $G'$ là trực tâm của tam giác $A'B'C'$.</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-purple-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-purple-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3: Cho tam giác ABC có trọng tâm G và trung tuyến AM. Qua phép chiếu song song lên mặt phẳng P, tam giác ABC biến thành tam giác A'B'C'. Khẳng định nào sau đây là sai? Khẳng định A: Hình chiếu của M là trung điểm M' của B'C'. Khẳng định B: Hình chiếu của G là trọng tâm G' của tam giác A'B'C'. Khẳng định C: Tỉ số A'G' trên A'M' bằng hai phần ba. Khẳng định D: G' là trực tâm của tam giác A'B'C'. Các em có 30 giây tìm khẳng định sai.",
      "startTime": 203.77,
      "endTime": 233.74,
      "duration": 29.98
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: ĐÁP ÁN D LÀ KHẲNG ĐỊNH SAI",
      "subtitle": "BÀI 14 • MỤC 2 • BẢO TOÀN TRỌNG TÂM NHƯNG KHÔNG BẢO TOÀN TRỰC TÂM",
      "mascotMode": "celebrating",
      "mascotTip": "Trực tâm liên quan đến góc vuông, mà góc vuông không được bảo toàn nên $G'$ không thể là trực tâm!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Phân tích bản chất:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• <b>Khẳng định A, B, C:</b> ĐÚNG do tính chất bảo toàn trung điểm và tỉ số chia đoạn thẳng $\\frac{2}{3}$.</p>\n      <p>• <b>Khẳng định D:</b> <b>SAI</b> vì trực tâm là giao điểm 3 đường cao (vuông góc). Phép chiếu song song không bảo toàn tính vuông góc nên trực tâm không được bảo toàn.</p>\n      <div class=\"mt-2 text-rose-300 font-bold font-mono\">➔ Chọn đáp án D (khẳng định sai).</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Khẳng định sai là D. Tại sao? Trực tâm là giao điểm của ba đường cao, tức là liên quan chặt chẽ đến tính vuông góc. Vì phép chiếu song song không bảo toàn tính vuông góc nên đường cao không chiếu thành đường cao, và trực tâm không bảo toàn. Ngược lại, trọng tâm và trung điểm chỉ phụ thuộc vào tỉ số đoạn thẳng nên được bảo toàn nguyên vẹn.",
      "startTime": 233.74,
      "endTime": 253.16,
      "duration": 19.42
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI VỀ TÍNH CHẤT PHÉP CHIẾU SONG SONG",
      "subtitle": "BÀI 14 • MỤC 2 • 4 MỆNH ĐỀ CHUẨN ĐỊNH DẠNG 2025",
      "mascotMode": "thinking",
      "mascotTip": "Đọc kĩ từng mệnh đề: Song song có bảo toàn không? Vuông góc có bảo toàn không?",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 4 (Đúng / Sai)</span>\n      <span class=\"text-xs text-slate-400\">Định dạng thi 2025</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Xét tính Đúng / Sai của các khẳng định:\n    </p>\n\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>a)</b> Phép chiếu song song biến 2 đường thẳng song song thành 2 đường song song hoặc trùng nhau.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>b)</b> Hình chiếu của hình bình hành là hình bình hành hoặc đoạn thẳng.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>c)</b> Phép chiếu song song luôn bảo toàn diện tích của tam giác.</span>\n        <span class=\"font-bold text-rose-400\">[ SAI ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>d)</b> Phép chiếu song song biến 2 đường thẳng vuông góc thành 2 đường vuông góc.</span>\n        <span class=\"font-bold text-rose-400\">[ SAI ]</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian kiểm tra:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4: Xét tính Đúng hay Sai của các khẳng định sau về phép chiếu song song: Mệnh đề a: Phép chiếu song song luôn bảo toàn tính song song của hai đường thẳng. Mệnh đề b: Phép chiếu song song biến hình bình hành thành hình bình hành hoặc một đoạn thẳng. Mệnh đề c: Phép chiếu song song luôn giữ nguyên diện tích của tam giác. Mệnh đề d: Phép chiếu song song biến hai đường thẳng vuông góc thành hai đường thẳng vuông góc. Các em có 30 giây kiểm tra.",
      "startTime": 253.16,
      "endTime": 288.06,
      "duration": 34.9
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 2",
      "subtitle": "BÀI 14 • MỤC 2 • BẢNG TỔNG KẾT ĐẠI LƯỢNG BẢO TOÀN",
      "mascotMode": "celebrating",
      "mascotTip": "Ghi nhớ: Bảo toàn song song, thẳng hàng, tỉ số. KHÔNG bảo toàn góc, vuông góc, diện tích!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Bảng tổng kết bảo toàn của phép chiếu song song:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• ✅ <b>ĐƯỢC BẢO TOÀN:</b> Tính thẳng hàng, thứ tự điểm, tính song song, tỉ số độ dài của các đoạn thẳng song song (trung điểm, trọng tâm).</p>\n      <p>• ❌ <b>KHÔNG ĐƯỢC BẢO TOÀN:</b> Độ lớn góc, tính vuông góc, độ dài đoạn thẳng bất kì, diện tích hình phẳng.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">⭐ TỔNG KẾT MỤC 2: Nắm vững các bất biến để vẽ hình biểu diễn chính xác ở Mục 3!</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Giải thích chi tiết Ví dụ 4: Mệnh đề a ĐÚNG theo tính chất 3. Mệnh đề b ĐÚNG vì các cặp cạnh đối song song chiếu thành các cặp cạnh đối song song (hình bình hành) hoặc suy biến thành đoạn thẳng nếu mặt phẳng hình bình hành song song với phương chiếu. Mệnh đề c SAI vì diện tích bị co giãn $S' = S \\cdot \\cos \u000barphi$. Mệnh đề d SAI vì tính vuông góc không được bảo toàn.",
      "startTime": 288.06,
      "endTime": 318.25,
      "duration": 30.19
    }
  ]
};
  root.G11_CHAPTER4_DATA.toan11_bai14_muc2 = root.G11_CHAPTER4_DATA.g11_bai14_muc2;

  root.G11_CHAPTER4_DATA.g11_bai14_muc3 = {
  "lessonId": "toan11_bai14",
  "lessonTitle": "Bài 14: Phép chiếu song song",
  "sectionId": "g11_bai14_muc3",
  "sectionTitle": "Mục 3: Kỹ năng vẽ hình không gian chuẩn xác & Giải toán bằng phép chiếu",
  "audio": "/audio/g11_bai14_muc3.mp3",
  "audioSrc": "./audio/g11_bai14_muc3.mp3",
  "audio_src": "./audio/g11_bai14_muc3.mp3",
  "title": "Mục 3: Kỹ năng vẽ hình không gian chuẩn xác & Giải toán bằng phép chiếu",
  "owl_tip": "Quy ước vẽ hình không gian: Nhìn thấy vẽ nét liền, bị che khuất bắt buộc vẽ nét đứt đoạn!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. KHÁI NIỆM HÌNH BIỂU DIỄN CỦA MỘT HÌNH KHÔNG GIAN",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. QUY CHUẨN BIỂU DIỄN CÁC HÌNH PHẲNG CƠ BẢN",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI VỀ HÌNH BIỂU DIỄN HÌNH HỌC",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & BẾ MẠC TOÀN KHÓA BÀI 14",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 372.82,
  "formattedDuration": "06:12",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. KHÁI NIỆM HÌNH BIỂU DIỄN CỦA MỘT HÌNH KHÔNG GIAN",
      "subtitle": "BÀI 14 • MỤC 3 • CẦU NỐI GIỮA KHÔNG GIAN VÀ TRANG GIẤY PHẲNG",
      "mascotMode": "pointer",
      "mascotTip": "Hình biểu diễn là hình chiếu song song của hình không gian lên trang giấy!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-teal-950 to-blue-950 p-4 rounded-xl border border-teal-500/40\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-teal-500/20 text-teal-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Khái niệm cốt lõi</span>\n      <h3 class=\"text-xl font-black text-teal-200\">Hình Biểu Diễn</h3>\n    </div>\n    <p class=\"text-sm text-slate-200 leading-relaxed\">\n      • <b>Hình biểu diễn</b> của một hình $\\mathcal{H}$ trong không gian là hình chiếu song song của hình $\\mathcal{H}$ trên một mặt phẳng, hoặc hình đồng dạng với hình chiếu đó.<br/>\n      • Mọi quy tắc vẽ hình trong SGK đều bắt nguồn trực tiếp từ <b>tính chất của phép chiếu song song</b>!\n    </p>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 3: Hình biểu diễn của các hình không gian. Một vật thể ba chiều trong không gian khi ta vẽ lên mặt phẳng trang giấy hai chiều hay bảng đen thì hình vẽ đó được gọi là hình biểu diễn. Định nghĩa: Hình biểu diễn của một hình H trong không gian là hình chiếu song song của hình H lên một mặt phẳng chiếu, hoặc là hình đồng dạng với hình chiếu đó.",
      "startTime": 0.0,
      "endTime": 27.12,
      "duration": 27.12
    },
    {
      "sceneIndex": 2,
      "title": "2. QUY CHUẨN BIỂU DIỄN CÁC HÌNH PHẲNG CƠ BẢN",
      "subtitle": "BÀI 14 • MỤC 3 • BẢNG QUY ĐỔI CHUẨN MỰC BỘ GD&ĐT",
      "mascotMode": "explaining",
      "mascotTip": "Hình tròn vẽ thành Elip! Vuông, chữ nhật, thoi vẽ thành hình bình hành!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-indigo-950 to-slate-900 p-4 rounded-xl border border-indigo-500/40 text-xs\">\n    <div class=\"font-bold text-indigo-300 text-sm mb-2\">Bảng Quy Chuẩn Hình Biểu Diễn SGK KNTT</div>\n    <div class=\"grid grid-cols-2 gap-2.5\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">1. Tam giác bất kì (đều, cân, vuông):</b><br/>\n        Biểu diễn bằng một <b>tam giác</b>.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-amber-400\">\n        <b class=\"text-amber-300\">2. Hình vuông, chữ nhật, thoi:</b><br/>\n        Đều biểu diễn bằng một <b>hình bình hành</b>.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">3. Hình thang:</b><br/>\n        Biểu diễn bằng <b>hình thang</b> (phải giữ nguyên tỉ số hai đáy $\\frac{a}{b}$).\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-purple-400\">\n        <b class=\"text-purple-300\">4. Hình tròn:</b><br/>\n        Biểu diễn bằng một <b>hình elip</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Dựa trên tính chất bảo toàn tính song song và tỉ số, ta có bảng quy chuẩn vẽ hình biểu diễn cho các hình phẳng cơ bản như sau: Thứ nhất: Tam giác đều, tam giác cân, tam giác vuông đều được biểu diễn bằng một tam giác bất kì. Thứ hai: Hình vuông, hình chữ nhật, hình thoi, hình bình hành đều được biểu diễn bằng một hình bình hành. Thứ ba: Hình thang có hai đáy song song được biểu diễn bằng một hình thang và bắt buộc phải bảo toàn tỉ số độ dài hai đáy. Thứ tư: Hình tròn được biểu diễn bằng một hình elip.",
      "startTime": 27.12,
      "endTime": 63.19,
      "duration": 36.07
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: HÌNH BIỂU DIỄN CỦA HÌNH CHỮ NHẬT LÀ HÌNH GÌ?",
      "subtitle": "BÀI 14 • MỤC 3 • CÂU HỎI NHẬN BIẾT 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Hình chữ nhật có 2 cặp cạnh đối song song nên biểu diễn bằng hình bình hành!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Nhận biết</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Hình biểu diễn của một hình chữ nhật trên mặt phẳng chiếu nói chung là:\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Hình chữ nhật</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> Hình thoi</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>C.</b> Hình bình hành</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Hình thang vuông</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 1: Hình biểu diễn của một hình chữ nhật trong không gian lên mặt phẳng trang giấy là hình gì? Phương án A: Hình chữ nhật; Phương án B: Hình thoi; Phương án C: Hình bình hành; Phương án D: Hình thang vuông. Các em có 15 giây chọn đáp án.",
      "startTime": 63.19,
      "endTime": 84.12,
      "duration": 20.93
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN C CHÍNH XÁC",
      "subtitle": "BÀI 14 • MỤC 3 • NGUYÊN TẮC BẢO TOÀN SONG SONG",
      "mascotMode": "celebrating",
      "mascotTip": "Vì góc vuông bị biến dạng thành góc nhọn hoặc tù nên hình chữ nhật trở thành hình bình hành!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Lời giải chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• Hình chữ nhật $ABCD$ có $AB \\parallel CD$ và $AD \\parallel BC$.</p>\n      <p>• Phép chiếu song song bảo toàn tính song song $\\implies A'B' \\parallel C'D'$ và $A'D' \\parallel B'C'$.</p>\n      <p>• Góc vuông $\\widehat{A} = 90^\\circ$ không được bảo toàn $\\implies \\widehat{A'}$ có thể là góc nhọn hoặc góc tù.</p>\n      <p>• Do đó, hình biểu diễn của hình chữ nhật là <b>hình bình hành</b>.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án C.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là C: Hình bình hành. Giải thích: Hình chữ nhật có hai cặp cạnh đối song song. Phép chiếu song song bảo toàn tính song song nên hình biểu diễn phải có hai cặp cạnh đối song song, tức là một hình bình hành. Góc vuông 90 độ của hình chữ nhật không được bảo toàn nên trên hình vẽ biểu diễn nó trở thành góc nhọn hoặc góc tù.",
      "startTime": 84.12,
      "endTime": 110.66,
      "duration": 26.54
    },
    {
      "sceneIndex": 5,
      "title": "5. QUY TẮC BIỂU DIỄN TÂM ĐỐI XỨNG VÀ TRỌNG TÂM",
      "subtitle": "BÀI 14 • MỤC 3 • XÁC ĐỊNH CHÍNH XÁC CÁC ĐIỂM ĐẶC BIỆT",
      "mascotMode": "pointer",
      "mascotTip": "Tâm hình vuông là giao điểm 2 đường chéo của hình bình hành biểu diễn!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-950 to-indigo-950 p-4 rounded-xl border border-blue-500/40 text-xs\">\n    <div class=\"font-bold text-blue-300 text-sm mb-2\">Cách Xác Định Điểm Đặc Biệt Trên Hình Biểu Diễn</div>\n    <div class=\"space-y-2\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">Tâm hình vuông / chữ nhật / hình thoi:</b><br/>\n        Giao điểm hai đường chéo của <b>hình bình hành</b> biểu diễn.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-amber-400\">\n        <b class=\"text-amber-300\">Trọng tâm tam giác:</b><br/>\n        Giao điểm hai đường trung tuyến của tam giác biểu diễn (lấy tỉ số $\\frac{2}{3}$).\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">Tâm đường tròn ngoại tiếp / nội tiếp:</b><br/>\n        Phải dựng qua các đường trung tuyến hoặc tỉ số, không được dùng tính vuông góc thông thường.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Khi vẽ các bài toán hình chóp có đáy là hình vuông tâm O, hay hình bình hành tâm O: Điểm O trên hình biểu diễn được xác định chính xác bằng giao điểm của hai đường chéo hình bình hành biểu diễn, vì phép chiếu song song bảo toàn tính trung điểm. Tương tự, trọng tâm G của tam giác đáy được xác định bằng giao điểm của hai đường trung tuyến trên hình biểu diễn.",
      "startTime": 110.66,
      "endTime": 137.69,
      "duration": 27.02
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: HÌNH BIỂU DIỄN CỦA HÌNH THANG CÂN",
      "subtitle": "BÀI 14 • MỤC 3 • BÀI TOÁN BẢO TOÀN TỈ SỐ ĐÁY 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Đáy lớn gấp đôi đáy nhỏ thì trên hình vẽ đáy lớn cũng BẮT BUỘC gấp đôi đáy nhỏ!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho hình thang $ABCD$ có đáy $AB = 2 CD$. Trên hình biểu diễn $A'B'C'D'$, khẳng định nào <b>bắt buộc đúng</b>?\n    </p>\n\n    <div class=\"space-y-1.5 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Hai cạnh bên $A'D' = B'C'$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>B.</b> Đoạn $A'B' = 2 C'D'$ và $A'B' \\parallel C'D'$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> $\\widehat{A'} = \\widehat{B'}$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> $A'C' \\perp B'D'$</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2: Cho hình thang ABCD có đáy lớn AB gấp đôi đáy nhỏ CD. Trên hình biểu diễn của hình thang ABCD, khẳng định nào sau đây bắt buộc phải đúng? Phương án A: Hai cạnh bên bằng nhau; Phương án B: Đoạn đáy lớn A'B' gấp đôi đoạn đáy nhỏ C'D'; Phương án C: Góc A' bằng góc B'; Phương án D: Hai đường chéo vuông góc với nhau. Các em có 15 giây chọn đáp án.",
      "startTime": 137.69,
      "endTime": 164.23,
      "duration": 26.54
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: ĐÁP ÁN B CHÍNH XÁC",
      "subtitle": "BÀI 14 • MỤC 3 • BẢO TOÀN TỈ SỐ HAI ĐÁY SONG SONG",
      "mascotMode": "celebrating",
      "mascotTip": "Vì $AB \\parallel CD$ nên tỉ số $\\frac{A'B'}{C'D'} = \\frac{AB}{CD} = 2$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Giải thích chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• Vì $AB \\parallel CD$ nên theo Tính chất 4: $\\frac{A'B'}{C'D'} = \\frac{AB}{CD} = 2$.</p>\n      <p>• Hai đáy $A'B'$ và $C'D'$ vẫn song song với nhau.</p>\n      <p>• Các phương án A, C, D sai vì phép chiếu song song không bảo toàn độ lớn góc và độ dài cạnh không song song.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án B.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là B: Đoạn đáy lớn A'B' gấp đôi đoạn đáy nhỏ C'D' và A'B' song song C'D'. Giải thích: Hai đáy AB và CD là hai đoạn thẳng nằm trên hai đường thẳng song song. Theo Tính chất 4 của phép chiếu song song, tỉ số độ dài của hai đoạn thẳng song song phải được bảo toàn nguyên vẹn. Do đó tỉ số A'B' chia C'D' bắt buộc phải bằng hai. Còn góc và độ dài cạnh bên không được bảo toàn.",
      "startTime": 164.23,
      "endTime": 198.31,
      "duration": 34.08
    },
    {
      "sceneIndex": 8,
      "title": "8. KỸ THUẬT VẼ HÌNH KHÔNG GIAN BẰNG NÉT LIỀN VÀ NÉT ĐỨT",
      "subtitle": "BÀI 14 • MỤC 3 • NGUYÊN TẮC BẮT BUỘC CỦA BỘ GIÁO DỤC",
      "mascotMode": "pointer",
      "mascotTip": "Cạnh nhìn thấy: Nét liền (Solid). Cạnh bị khuất: Nét đứt (Dashed)!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-teal-950 to-slate-900 p-4 rounded-xl border border-teal-500/40 text-xs\">\n    <div class=\"font-bold text-teal-300 text-sm mb-2\">Quy Ước Vẽ Hình Không Gian Chuẩn Bộ GD&ĐT</div>\n    <div class=\"grid grid-cols-2 gap-2.5\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">Nét liền (Solid):</b><br/>\n        Vẽ các đường biên và các cạnh nhìn thấy được trực tiếp từ hướng nhìn.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-rose-400\">\n        <b class=\"text-rose-300\">Nét đứt (Dashed):</b><br/>\n        Vẽ các cạnh nằm phía sau, bị các mặt phía trước che khuất.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-amber-400\">\n        <b class=\"text-amber-300\">Đường cao:</b><br/>\n        Đỉnh nào vuông góc mặt phẳng đáy thì dựng thẳng đứng góc $90^\\circ$.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">Nhãn đỉnh:</b><br/>\n        Chữ in hoa $S, A, B, C, D$, đặt phía ngoài hình, không để nét vẽ đè lên chữ.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Khi vẽ một hình không gian như hình chóp, hình lăng trụ, hình hộp: Các cạnh nhìn thấy từ góc quan sát phải vẽ bằng nét liền. Các cạnh bị các mặt khác che khuất bắt buộc phải vẽ bằng nét đứt đoạn. Đường cao vuông góc với đáy nếu có phải dựng thẳng đứng chuẩn xác. Tên các đỉnh ghi bằng chữ in hoa, in nghiêng, đặt cách đỉnh từ sáu đến mười pixel.",
      "startTime": 198.31,
      "endTime": 225.65,
      "duration": 27.34
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: HÌNH BIỂU DIỄN CỦA HÌNH TRÒN VÀ CẶP ĐƯỜNG KÍNH VUÔNG GÓC",
      "subtitle": "BÀI 14 • MỤC 3 • BÀI TOÁN HÌNH ELIP NÂNG CAO 30S",
      "mascotMode": "thinking",
      "mascotTip": "Hình tròn biến thành Elip, hai đường kính vuông góc biến thành hai dây cung liên hợp!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho hình tròn tâm $O$ có $AB \\perp CD$ tại $O$. Trên hình biểu diễn elip tâm $O'$, hình ảnh của $AB$ và $CD$ là:\n    </p>\n\n    <div class=\"space-y-1.5 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Luôn là hai trục lớn và trục bé của elip</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> Hai đường kính vuông góc với nhau của elip</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>C.</b> Hai dây cung đi qua tâm $O'$, nói chung không vuông góc</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Hai tiếp tuyến của elip</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-purple-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-purple-300 font-medium\">Thời gian tư duy:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3: Cho hình tròn tâm O có hai đường kính AB và CD vuông góc với nhau. Hình biểu diễn của hình tròn là một hình elip tâm O'. Khi đó, hình biểu diễn của hai đường kính AB và CD là gì? Phương án A: Hai đường kính vuông góc của hình elip; Phương án B: Hai trục lớn và trục bé của hình elip; Phương án C: Hai dây cung cắt nhau tại O' và không nhất thiết vuông góc; Phương án D: Hai tiếp tuyến song song. Các em có 30 giây suy nghĩ.",
      "startTime": 225.65,
      "endTime": 259.66,
      "duration": 34.01
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: HAI ĐƯỜNG KÍNH LIÊN HỢP CỦA ELIP",
      "subtitle": "BÀI 14 • MỤC 3 • KHÔNG BẢO TOÀN TÍNH VUÔNG GÓC",
      "mascotMode": "celebrating",
      "mascotTip": "$AB \\perp CD$ nhưng $A'B'$ và $C'D'$ nói chung KHÔNG vuông góc trên Elip!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Giải thích chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• Hình tròn chiếu thành hình elip tâm $O'$.</p>\n      <p>• Điểm $O$ là trung điểm $AB$ và $CD \\implies O'$ là trung điểm $A'B'$ và $C'D'$.</p>\n      <p>• Do đó $A'B'$ và $C'D'$ là hai đường kính (dây cung qua tâm) của elip.</p>\n      <p>• Vì tính vuông góc không được bảo toàn nên $A'B'$ và $C'D'$ nói chung <b>không vuông góc</b> với nhau (không nhất thiết là trục lớn và trục bé).</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án C.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là C: Hai dây cung đi qua tâm O' và nói chung không vuông góc với nhau. Giải thích: Vì O là trung điểm của cả AB và CD nên O' cũng là trung điểm của cả A'B' và C'D'. Do đó A'B' và C'D' là hai dây cung đi qua tâm của hình elip (gọi là hai đường kính liên hợp). Tuy nhiên, vì phép chiếu song song không bảo toàn tính vuông góc nên hai dây cung này nói chung không vuông góc với nhau, trừ trường hợp góc chiếu rất đặc biệt.",
      "startTime": 259.66,
      "endTime": 296.88,
      "duration": 37.22
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI VỀ HÌNH BIỂU DIỄN HÌNH HỌC",
      "subtitle": "BÀI 14 • MỤC 3 • 4 MỆNH ĐỀ THỰC CHIẾN 30 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Rà soát kĩ: Tam giác vuông vẽ thành tam giác thường, hình vuông vẽ thành hình bình hành!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 4 (Đúng / Sai)</span>\n      <span class=\"text-xs text-slate-400\">Định dạng thi 2025</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Xét tính Đúng / Sai của các khẳng định:\n    </p>\n\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>a)</b> Hình biểu diễn của một tam giác vuông cân có thể là một tam giác tù.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>b)</b> Hình biểu diễn của hình vuông bắt buộc phải là hình chữ nhật.</span>\n        <span class=\"font-bold text-rose-400\">[ SAI ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>c)</b> Đáy của hình chóp tứ giác đều được biểu diễn bằng hình bình hành.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>d)</b> Cạnh bị che khuất trong không gian vẽ bằng nét liền.</span>\n        <span class=\"font-bold text-rose-400\">[ SAI ]</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian kiểm tra:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4: Xét tính Đúng hay Sai của các khẳng định sau về hình biểu diễn: Mệnh đề a: Hình biểu diễn của một tam giác vuông cân có thể là một tam giác tù. Mệnh đề b: Hình biểu diễn của một hình vuông bắt buộc phải là một hình chữ nhật. Mệnh đề c: Hình biểu diễn của hình chóp tứ giác đều là một hình chóp có đáy là hình bình hành. Mệnh đề d: Cạnh bị che khuất trong không gian bắt buộc phải vẽ bằng nét liền. Các em có 30 giây kiểm tra.",
      "startTime": 296.88,
      "endTime": 331.82,
      "duration": 34.94
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & BẾ MẠC TOÀN KHÓA BÀI 14",
      "subtitle": "BÀI 14 • MỤC 3 • TỔNG KẾT TOÀN DIỆN PHÉP CHIẾU SONG SONG",
      "mascotMode": "celebrating",
      "mascotTip": "Nắm vững các quy tắc vẽ hình để tự tin vẽ đúng chuẩn mọi bài toán hình học không gian!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Đáp án và giải thích chuẩn mực:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• <b>a) ĐÚNG:</b> Góc vuông có thể biến thành góc nhọn hoặc góc tù.</p>\n      <p>• <b>b) SAI:</b> Hình vuông được biểu diễn bằng <b>hình bình hành</b> tổng quát.</p>\n      <p>• <b>c) ĐÚNG:</b> Đáy là hình vuông nên vẽ thành hình bình hành tâm $O$.</p>\n      <p>• <b>d) SAI:</b> Cạnh bị che khuất bắt buộc phải vẽ bằng <b>nét đứt</b> (dashed line).</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">🎉 CHÚC MỪNG CÁC EM ĐÃ HOÀN THÀNH TOÀN BỘ BÀI 14 TOÁN 11 KNTT!</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã hoàn thành xuất sắc toàn bộ Bài 14: Phép chiếu song song. Phân tích Ví dụ 4: Mệnh đề a ĐÚNG vì góc vuông không bảo toàn, có thể biến thành góc tù. Mệnh đề b SAI vì hình vuông biểu diễn tổng quát bằng hình bình hành, góc không nhất thiết 90 độ. Mệnh đề c ĐÚNG vì đáy hình vuông của chóp tứ giác đều vẽ thành hình bình hành. Mệnh đề d SAI vì cạnh bị che khuất bắt buộc vẽ nét đứt. Như vậy chúng ta đã trang bị đầy đủ kiến thức của cả Chương 4. Hẹn gặp lại các em ở Bài Ôn tập cuối chương 4!",
      "startTime": 331.82,
      "endTime": 372.82,
      "duration": 40.99
    }
  ]
};
  root.G11_CHAPTER4_DATA.toan11_bai14_muc3 = root.G11_CHAPTER4_DATA.g11_bai14_muc3;

  root.G11_CHAPTER4_DATA.g11_ontap_c4_muc1 = {
  "lessonId": "toan11_ontap_c4",
  "lessonTitle": "Bài tập cuối chương IV: Quan hệ song song trong không gian",
  "sectionId": "g11_ontap_c4_muc1",
  "sectionTitle": "Mục 1: Hệ thống hóa kiến thức toàn chương & Sơ đồ tư duy 4 quan hệ song song",
  "audio": "/audio/g11_ontap_c4_muc1.mp3",
  "audioSrc": "./audio/g11_ontap_c4_muc1.mp3",
  "audio_src": "./audio/g11_ontap_c4_muc1.mp3",
  "title": "Mục 1: Hệ thống hóa kiến thức toàn chương & Sơ đồ tư duy 4 quan hệ song song",
  "owl_tip": "Nắm chắc 4 quan hệ then chốt: Đường // Đường, Đường // Mặt, Mặt // Mặt và Phép chiếu song song!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. TOÀN CẢNH CHƯƠNG IV: QUAN HỆ SONG SONG TRONG KHÔNG GIAN",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. SƠ ĐỒ TƯ DUY: CÁC VỊ TRÍ TƯƠNG ĐỐI TRONG KHÔNG GIAN",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI TỔNG HỢP LÝ THUYẾT CHƯƠNG IV",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & BẾ MẠC MỤC 1",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 350.18,
  "formattedDuration": "05:50",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. TOÀN CẢNH CHƯƠNG IV: QUAN HỆ SONG SONG TRONG KHÔNG GIAN",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • HỆ THỐNG HOÁ LÝ THUYẾT NỀN TẢNG",
      "mascotMode": "pointer",
      "mascotTip": "Nắm vững 5 trụ cột: Điểm & mp, 2 đường song song, đường song song mp, 2 mp song song, phép chiếu song song!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-indigo-950 via-purple-950 to-indigo-950 p-4 rounded-xl border border-indigo-500/40\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Tổng quan chương IV</span>\n      <h3 class=\"text-xl font-black text-amber-200\">5 Trụ Cột Quan Hệ Song Song Trong Không Gian</h3>\n    </div>\n    <div class=\"grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-300 mt-2\">\n      <div class=\"p-2 bg-slate-900 rounded border border-indigo-500/30\">\n        <b class=\"text-indigo-300\">Bài 10: Điểm & Mặt phẳng</b><br/>6 tính chất thừa nhận, 3 cách xác định mặt phẳng.\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500/30\">\n        <b class=\"text-emerald-300\">Bài 11: 2 Đường thẳng</b><br/>Cắt nhau, song song, chéo nhau, trùng nhau, 3 giao tuyến.\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-cyan-500/30\">\n        <b class=\"text-cyan-300\">Bài 12: Đường $\\parallel$ Mp</b><br/>Điều kiện $d \\parallel (P)$ và định lý giao tuyến song song.\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-purple-500/30\">\n        <b class=\"text-purple-300\">Bài 13: 2 Mp song song</b><br/>$(P) \\parallel (Q)$, định lý Ta-lét, hình lăng trụ, hình hộp.\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-teal-500/30\">\n        <b class=\"text-teal-300\">Bài 14: Phép chiếu song song</b><br/>Bảo toàn song song, tỉ số, quy tắc vẽ hình biểu diễn.\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-amber-500/30\">\n        <b class=\"text-amber-300\">Thiết diện đa diện</b><br/>Thiết diện chóp, lăng trụ, hình hộp.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Bài ôn tập cuối chương 4: Quan hệ song song trong không gian môn Toán lớp 11 Kết Nối Tri Thức. Trong chương học này, chúng ta đã xây dựng toàn bộ nền móng của hình học không gian 3 chiều qua 5 bài học cốt lõi: từ khái niệm mở đầu và các cách xác định mặt phẳng, hai đường thẳng song song và chéo nhau, đường thẳng song song với mặt phẳng, hai mặt phẳng song song cùng hình lăng trụ, hình hộp, cho đến phép chiếu song song và hình biểu diễn. Hôm nay chúng ta sẽ xâu chuỗi toàn bộ kiến thức thành một sơ đồ tư duy hoàn chỉnh.",
      "startTime": 0.0,
      "endTime": 34.44,
      "duration": 34.44
    },
    {
      "sceneIndex": 2,
      "title": "2. SƠ ĐỒ TƯ DUY: CÁC VỊ TRÍ TƯƠNG ĐỐI TRONG KHÔNG GIAN",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • BẢNG PHÂN LOẠI TOÀN DIỆN",
      "mascotMode": "explaining",
      "mascotTip": "Đường với đường có 4 vị trí! Đường với mặt có 3 vị trí! Mặt với mặt có 3 vị trí!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-slate-900 to-indigo-950 p-4 rounded-xl border border-indigo-500/40 text-xs\">\n    <div class=\"font-bold text-indigo-300 text-sm mb-2\">Bảng Tổng Hợp Vị Trí Tương Đối</div>\n    <div class=\"grid grid-cols-3 gap-2\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">1. Hai đường thẳng $a$ và $b$:</b><br/>\n        • <b>Cắt nhau:</b> $a \\cap b = \\{I\\}$.<br/>\n        • <b>Song song:</b> $a \\parallel b$ (đồng phẳng, rời nhau).<br/>\n        • <b>Chéo nhau:</b> không đồng phẳng.<br/>\n        • <b>Trùng nhau:</b> $a \\equiv b$.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">2. Đường thẳng $d$ và mp $(P)$:</b><br/>\n        • <b>Nằm trong:</b> $d \\subset (P)$ ($\\infty$ điểm chung).<br/>\n        • <b>Cắt nhau:</b> $d \\cap (P) = \\{M\\}$ ($1$ điểm chung).<br/>\n        • <b>Song song:</b> $d \\parallel (P)$ ($0$ điểm chung).\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-purple-400\">\n        <b class=\"text-purple-300\">3. Hai mặt phẳng $(P)$ và $(Q)$:</b><br/>\n        • <b>Cắt nhau:</b> $(P) \\cap (Q) = d$ (giao tuyến).<br/>\n        • <b>Song song:</b> $(P) \\parallel (Q)$ ($0$ điểm chung).<br/>\n        • <b>Trùng nhau:</b> $(P) \\equiv (Q)$.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Trước hết, các em cần nắm chắc bảng phân loại tất cả các vị trí tương đối: Giữa hai đường thẳng phân biệt: có 3 vị trí là cắt nhau, song song và chéo nhau. Chú ý: chéo nhau là không cùng nằm trong bất kì mặt phẳng nào. Giữa đường thẳng và mặt phẳng: có 3 vị trí là đường thẳng nằm trong mặt phẳng, đường thẳng cắt mặt phẳng và đường thẳng song song với mặt phẳng. Giữa hai mặt phẳng: có 2 vị trí phân biệt là cắt nhau theo một giao tuyến và song song không có điểm chung.",
      "startTime": 34.44,
      "endTime": 62.93,
      "duration": 28.49
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: ĐẾM SỐ VỊ TRÍ TƯƠNG ĐỐI TRONG KHÔNG GIAN",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • CÂU HỎI NHẬN BIẾT 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Đọc kĩ đề bài: 'hai đường thẳng phân biệt' thì không tính trường hợp trùng nhau!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Nhận biết</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Trong không gian, cho hai đường thẳng <b>phân biệt</b> $a$ và $b$. Giữa chúng có tất cả bao nhiêu vị trí tương đối?\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> 2 vị trí</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>B.</b> 3 vị trí</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> 4 vị trí</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> 1 vị trí</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian chọn đáp án:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 1: Trong không gian, giữa hai đường thẳng phân biệt có tất cả bao nhiêu vị trí tương đối? Phương án A: 2 vị trí; Phương án B: 3 vị trí; Phương án C: 4 vị trí; Phương án D: 1 vị trí. Các em có 15 giây chọn đáp án.",
      "startTime": 62.93,
      "endTime": 84.98,
      "duration": 22.06
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN B (3 VỊ TRÍ TƯƠNG ĐỐI)",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • CẮT NHAU, SONG SONG, CHÉO NHAU",
      "mascotMode": "celebrating",
      "mascotTip": "Vì đề bài cho 'phân biệt' nên chỉ có: Cắt nhau, Song song và Chéo nhau!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Phân tích chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• Vì $a$ và $b$ <b>phân biệt</b> ($a \\not\\equiv b$), nên giữa chúng có đúng <b>3 vị trí tương đối</b>:</p>\n      <p>1. <b>Cắt nhau:</b> $a$ và $b$ đồng phẳng và có 1 điểm chung duy nhất.</p>\n      <p>2. <b>Song song:</b> $a$ và $b$ đồng phẳng và không có điểm chung nào ($a \\parallel b$).</p>\n      <p>3. <b>Chéo nhau:</b> $a$ và $b$ không cùng nằm trong bất kì mặt phẳng nào.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án B.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là B: 3 vị trí tương đối. Đó là: cắt nhau (có 1 điểm chung), song song (cùng thuộc một mặt phẳng và không có điểm chung), và chéo nhau (không cùng thuộc bất kì mặt phẳng nào). Nếu đề bài không có chữ phân biệt thì sẽ có 4 vị trí, tính thêm trường hợp trùng nhau.",
      "startTime": 84.98,
      "endTime": 102.7,
      "duration": 17.71
    },
    {
      "sceneIndex": 5,
      "title": "5. BỘ BA ĐỊNH LÍ GIAO TUYẾN KINH ĐIỂN",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • VŨ KHÍ TỐI THƯỢNG TÌM THIẾT DIỆN",
      "mascotMode": "explaining",
      "mascotTip": "Giao tuyến của 2 mặt phẳng qua 2 đường song song thì luôn song song với chúng!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-950 to-indigo-950 p-4 rounded-xl border border-blue-500/40 text-xs\">\n    <div class=\"font-bold text-blue-300 text-sm mb-2\">Bộ Ba Định Lí Giao Tuyến Cốt Lõi</div>\n    <div class=\"space-y-2\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">1. Định lí Giao tuyến 1 (Bài 11):</b><br/>\n        $$\\begin{cases} a \\subset (P), \\ b \\subset (Q) \\\\ a \\parallel b \\\\ (P) \\cap (Q) = d \\end{cases} \\implies d \\parallel a \\parallel b$$\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">2. Định lí Giao tuyến 2 (Bài 12):</b><br/>\n        $$\\begin{cases} a \\parallel (P) \\\\ a \\subset (Q) \\\\ (P) \\cap (Q) = d \\end{cases} \\implies d \\parallel a$$\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-purple-400\">\n        <b class=\"text-purple-300\">3. Định lí Giao tuyến 3 (Bài 13):</b><br/>\n        $$\\begin{cases} (P) \\parallel (Q) \\\\ (R) \\cap (P) = a \\\\ (R) \\cap (Q) = b \\end{cases} \\implies a \\parallel b$$\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Một trong những kỹ năng quan trọng nhất của Chương 4 là tìm giao tuyến bằng Bộ ba Định lí giao tuyến: Định lí 1: Nếu hai mặt phẳng lần lượt chứa hai đường thẳng song song thì giao tuyến của chúng nếu có sẽ song song với hai đường thẳng đó. Định lí 2: Nếu đường thẳng d song song với mặt phẳng alpha thì mặt phẳng nào chứa d cắt alpha theo giao tuyến song song với d. Định lí 3: Hai mặt phẳng song song bị cắt bởi mặt phẳng thứ ba theo hai giao tuyến song song.",
      "startTime": 102.7,
      "endTime": 136.97,
      "duration": 34.27
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: TÌM GIAO TUYẾN THEO ĐỊNH LÍ 1",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • CÂU HỎI THÔNG HIỂU 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Mặt phẳng $(SAB)$ và $(SCD)$ cùng đi qua đỉnh $S$ và chứa $AB \\parallel CD$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Giao tuyến của $(SAB)$ và $(SCD)$ là:\n    </p>\n\n    <div class=\"space-y-1.5 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Đường thẳng $SO$ với $O$ là tâm hình bình hành</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> Đường thẳng qua $S$ và song song với $AD$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>C.</b> Đường thẳng $d$ đi qua $S$ và $d \\parallel AB \\parallel CD$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Đường thẳng $AC$</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Giao tuyến của hai mặt phẳng SAB và SCD là: Phương án A: Đường thẳng SO với O là tâm hình bình hành; Phương án B: Đường thẳng đi qua S và song song với AD; Phương án C: Đường thẳng đi qua S và song song với AB và CD; Phương án D: Đường thẳng AC. Các em có 15 giây chọn đáp án.",
      "startTime": 136.97,
      "endTime": 170.45,
      "duration": 33.48
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: GIAO TUYẾN QUA $S$ VÀ SONG SONG $AB$",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • ÁP DỤNG ĐỊNH LÍ GIAO TUYẾN 1",
      "mascotMode": "celebrating",
      "mascotTip": "$S$ là điểm chung, $AB \\subset (SAB), CD \\subset (SCD), AB \\parallel CD \\implies d$ qua $S$ và $d \\parallel AB \\parallel CD$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Chứng minh chuẩn SGK:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• Điểm $S \\in (SAB) \\cap (SCD) \\implies S$ là điểm chung.</p>\n      <p>• Có $AB \\subset (SAB)$ và $CD \\subset (SCD)$ mà $AB \\parallel CD$ (do $ABCD$ là hình bình hành).</p>\n      <p>• Theo Định lí giao tuyến 1, giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng $d$ đi qua $S$ và:</p>\n      <p class=\"font-mono text-center text-amber-300\">$$d \\parallel AB \\parallel CD$$</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án C.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là C: Đường thẳng d đi qua S và song song với AB và CD. Lời giải: Ta có S là một điểm chung của hai mặt phẳng SAB và SCD. Mặt phẳng SAB chứa đường thẳng AB, mặt phẳng SCD chứa đường thẳng CD. Vì ABCD là hình bình hành nên AB song song CD. Áp dụng Định lí giao tuyến 1, giao tuyến của hai mặt phẳng này là đường thẳng d đi qua điểm chung S và song song với AB và CD.",
      "startTime": 170.45,
      "endTime": 199.08,
      "duration": 28.63
    },
    {
      "sceneIndex": 8,
      "title": "8. CÔNG THỨC ĐẾM VÀ TÍNH CHẤT CỦA CÁC KHỐI ĐA DIỆN",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • HÌNH CHÓP, TỨ DIỆN, LĂNG TRỤ, HÌNH HỘP",
      "mascotMode": "pointer",
      "mascotTip": "Ghi nhớ bảng chỉ số: Hình hộp có 8 đỉnh, 12 cạnh, 6 mặt, 4 đường chéo!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-950 to-slate-900 p-4 rounded-xl border border-purple-500/40 text-xs\">\n    <div class=\"font-bold text-purple-300 text-sm mb-2\">Bảng Tổng Kết Đa Diện Chương IV</div>\n    <div class=\"grid grid-cols-2 gap-2.5\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-amber-400\">\n        <b class=\"text-amber-300\">Hình chóp $n$-giác:</b><br/>\n        • Đỉnh ($V$): $n + 1$<br/>\n        • Cạnh ($E$): $2n$ ($n$ cạnh đáy $+ n$ cạnh bên)<br/>\n        • Mặt ($F$): $n + 1$ ($1$ đáy $+ n$ mặt bên)\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">Hình lăng trụ $n$-giác:</b><br/>\n        • Đỉnh ($V$): $2n$<br/>\n        • Cạnh ($E$): $3n$ ($2n$ cạnh đáy $+ n$ cạnh bên)<br/>\n        • Mặt ($F$): $n + 2$ ($2$ đáy $+ n$ mặt bên)\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">Hình hộp:</b><br/>\n        • 8 đỉnh, 12 cạnh, 6 mặt bình hành.<br/>\n        • 4 đường chéo cắt nhau tại tâm $O$.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-rose-400\">\n        <b class=\"text-rose-300\">Hình tứ diện:</b><br/>\n        • 4 đỉnh, 6 cạnh, 4 mặt tam giác.<br/>\n        • Có 3 cặp cạnh đối diện chéo nhau.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng tổng kết bảng chỉ số của các khối đa diện thường gặp: Tứ diện có 4 đỉnh, 6 cạnh và 4 mặt. Hình chóp n giác có n cộng 1 đỉnh, 2n cạnh và n cộng 1 mặt. Hình lăng trụ n giác có 2n đỉnh, 3n cạnh và n cộng 2 mặt. Đặc biệt, hình hộp có 8 đỉnh, 12 cạnh, 6 mặt hình bình hành và 4 đường chéo đồng quy tại trung điểm mỗi đường.",
      "startTime": 199.08,
      "endTime": 223.75,
      "duration": 24.67
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: TÍNH SỐ ĐƯỜNG CHÉO VÀ CẶP MẶT SONG SONG CỦA HÌNH HỘP",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • BÀI TOÁN TÍNH TOÁN HÌNH HỌP 30S",
      "mascotMode": "thinking",
      "mascotTip": "Hình hộp có 6 mặt tạo thành 3 cặp mặt đối diện song song, và đúng 4 đường chéo!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Một hình hộp $ABCD.A'B'C'D'$ có tất cả bao nhiêu đường chéo và bao nhiêu cặp mặt đối diện song song?\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>A.</b> 4 đường chéo, 3 cặp mặt song song</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> 6 đường chéo, 3 cặp mặt song song</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> 4 đường chéo, 6 cặp mặt song song</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> 8 đường chéo, 4 cặp mặt song song</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-purple-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-purple-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3: Cho một hình hộp ABCD.A'B'C'D'. Hỏi hình hộp này có tất cả bao nhiêu đường chéo và có bao nhiêu cặp mặt phẳng đối diện song song với nhau? Phương án A: 4 đường chéo và 3 cặp mặt đối diện song song; Phương án B: 6 đường chéo và 3 cặp mặt đối diện song song; Phương án C: 4 đường chéo và 6 cặp mặt đối diện song song; Phương án D: 8 đường chéo và 4 cặp mặt đối diện song song. Các em có 30 giây suy nghĩ.",
      "startTime": 223.75,
      "endTime": 247.8,
      "duration": 24.05
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: 4 ĐƯỜNG CHÉO VÀ 3 CẶP MẶT SONG SONG",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • CẤU TRÚC ĐỐI XỨNG HÌNH HỘP",
      "mascotMode": "celebrating",
      "mascotTip": "4 đường chéo là $AC', BD', CA', DB'$. 3 cặp mặt đối diện là đáy trên-dưới và 2 cặp mặt bên đối diện!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Lời giải chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• <b>4 đường chéo của hình hộp:</b> $AC', BD', CA', DB'$ (chúng cắt nhau tại trung điểm của mỗi đường).</p>\n      <p>• <b>3 cặp mặt đối diện song song:</b></p>\n      <p class=\"font-mono text-cyan-300\">1. $(ABCD) \\parallel (A'B'C'D')$<br/>2. $(ABB'A') \\parallel (CDD'C')$<br/>3. $(ADD'A') \\parallel (BCC'B')$</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án A.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là A: 4 đường chéo và 3 cặp mặt phẳng đối diện song song. Bốn đường chéo nối các đỉnh đối diện là AC', BD', CA' và DB', cả bốn đoạn thẳng này đồng quy tại trung điểm của mỗi đường. Sáu mặt của hình hộp chia thành 3 cặp mặt đối diện song song: cặp thứ nhất là hai đáy ABCD và A'B'C'D'; cặp thứ hai là ABB'A' và CDD'C'; cặp thứ ba là ADD'A' và BCC'B'.",
      "startTime": 247.8,
      "endTime": 271.58,
      "duration": 23.78
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI TỔNG HỢP LÝ THUYẾT CHƯƠNG IV",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • 4 MỆNH ĐỀ ĐÁNH GIÁ NĂNG LỰC TOÀN CHƯƠNG",
      "mascotMode": "thinking",
      "mascotTip": "Rà soát kĩ từng mệnh đề quan hệ song song trong không gian!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 4 (Đúng / Sai)</span>\n      <span class=\"text-xs text-slate-400\">Định dạng thi 2025</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Xét tính Đúng / Sai của các khẳng định toàn chương:\n    </p>\n\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>a)</b> Nếu $a \\parallel (P)$ thì qua $a$ có duy nhất một mặt phẳng song song với $(P)$.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>b)</b> Hai đường thẳng phân biệt không cắt nhau thì song song với nhau.</span>\n        <span class=\"font-bold text-rose-400\">[ SAI ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>c)</b> Phép chiếu song song bảo toàn tỉ số độ dài của hai đoạn thẳng cùng thuộc một đường thẳng.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>d)</b> Thiết diện của hình chóp tứ giác luôn luôn là một tứ giác.</span>\n        <span class=\"font-bold text-rose-400\">[ SAI ]</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian kiểm tra:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4: Xét tính Đúng hay Sai của các khẳng định sau về toàn bộ lý thuyết Chương 4: Mệnh đề a: Nếu đường thẳng a song song với mặt phẳng P thì có duy nhất một mặt phẳng chứa a và song song với P. Mệnh đề b: Hai đường thẳng phân biệt không cắt nhau thì luôn luôn song song với nhau. Mệnh đề c: Phép chiếu song song luôn bảo toàn tỉ số độ dài của hai đoạn thẳng cùng nằm trên một đường thẳng. Mệnh đề d: Thiết diện của hình chóp tứ giác cắt bởi một mặt phẳng bất kì luôn là một tứ giác. Các em có 30 giây suy nghĩ.",
      "startTime": 271.58,
      "endTime": 311.38,
      "duration": 39.79
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & BẾ MẠC MỤC 1",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • CỦNG CỐ CHẮC CHẮN NỀN TẢNG",
      "mascotMode": "celebrating",
      "mascotTip": "Thiết diện chóp tứ giác có thể là tam giác, tứ giác hoặc ngũ giác!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Đáp án và phân tích:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• <b>a) ĐÚNG:</b> Hệ quả tính chất duy nhất của mặt phẳng song song.</p>\n      <p>• <b>b) SAI:</b> Hai đường thẳng không cắt nhau có thể <b>chéo nhau</b>.</p>\n      <p>• <b>c) ĐÚNG:</b> Bảo toàn tỉ số đoạn thẳng thẳng hàng hoặc song song.</p>\n      <p>• <b>d) SAI:</b> Thiết diện chóp tứ giác có thể là <b>tam giác, tứ giác hoặc ngũ giác</b>.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">⭐ TỔNG KẾT MỤC 1: Đã hệ thống hóa toàn bộ sơ đồ tư duy lý thuyết Chương IV!</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã hoàn thành Mục 1 Ôn tập chương 4. Giải thích chi tiết Ví dụ 4: Mệnh đề a ĐÚNG vì đây là hệ quả của tính chất 1 Bài 13. Mệnh đề b SAI vì hai đường thẳng không cắt nhau có thể chéo nhau. Mệnh đề c ĐÚNG theo tính chất 4 của phép chiếu song song. Mệnh đề d SAI vì thiết diện của hình chóp tứ giác có thể là tam giác (nếu chỉ cắt 3 mặt) hoặc ngũ giác (nếu cắt cả 4 mặt bên và mặt đáy). Hẹn gặp lại các em ở Mục 2: Các phương pháp giải toán trọng tâm.",
      "startTime": 311.38,
      "endTime": 350.18,
      "duration": 38.81
    }
  ]
};
  root.G11_CHAPTER4_DATA.toan11_ontap_c4_muc1 = root.G11_CHAPTER4_DATA.g11_ontap_c4_muc1;

  root.G11_CHAPTER4_DATA.g11_ontap_c4_muc2 = {
  "lessonId": "toan11_ontap_c4",
  "lessonTitle": "Bài tập cuối chương IV: Quan hệ song song trong không gian",
  "sectionId": "g11_ontap_c4_muc2",
  "sectionTitle": "Mục 2: 4 Dạng toán cốt lõi & Phương pháp giải kinh điển",
  "audio": "/audio/g11_ontap_c4_muc2.mp3",
  "audioSrc": "./audio/g11_ontap_c4_muc2.mp3",
  "audio_src": "./audio/g11_ontap_c4_muc2.mp3",
  "title": "Mục 2: 4 Dạng toán cốt lõi & Phương pháp giải kinh điển",
  "owl_tip": "4 dạng cốt lõi: Giao tuyến, Giao điểm, Chứng minh song song và Xác định thiết diện!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. DẠNG TOÁN 1: TÌM GIAO TUYẾN CỦA HAI MẶT PHẲNG",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. DẠNG TOÁN 2: TÌM GIAO ĐIỂM CỦA ĐƯỜNG THẲNG VÀ MẶT PHẲNG",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI VỀ QUAN HỆ SONG SONG HÌNH CHÓP",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & BẾ MẠC MỤC 2",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 446.83,
  "formattedDuration": "07:26",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. DẠNG TOÁN 1: TÌM GIAO TUYẾN CỦA HAI MẶT PHẲNG",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • PHƯƠNG PHÁP 2 ĐIỂM CHUNG VÀ PHƯƠNG SONG SONG",
      "mascotMode": "pointer",
      "mascotTip": "Cách 1: Tìm 2 điểm chung phân biệt. Cách 2: Tìm 1 điểm chung và phương giao tuyến song song!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-950 to-indigo-950 p-4 rounded-xl border border-blue-500/40 text-xs\">\n    <div class=\"font-bold text-blue-300 text-sm mb-2\">Chiến Thuật 2 Hướng Tìm Giao Tuyến Chuẩn Mực</div>\n    <div class=\"grid grid-cols-2 gap-3\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">Hướng 1: Hai điểm chung phân biệt</b>\n        <p class=\"text-slate-300 mt-1\">\n          • Tìm $A \\in (P) \\cap (Q)$.<br/>\n          • Tìm $B \\in (P) \\cap (Q)$.<br/>\n          $\\implies$ Giao tuyến là đường thẳng $AB$.\n        </p>\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">Hướng 2: Một điểm chung + Phương song song</b>\n        <p class=\"text-slate-300 mt-1\">\n          • Điểm chung $S \\in (P) \\cap (Q)$.<br/>\n          • $a \\subset (P), b \\subset (Q)$ với $a \\parallel b$.<br/>\n          $\\implies$ Giao tuyến $d$ qua $S$ và $d \\parallel a \\parallel b$.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 2: Phương pháp giải các dạng toán trọng tâm của Chương 4. Dạng toán số 1 là Tìm giao tuyến của hai mặt phẳng: Ta có hai chiến thuật: Chiến thuật 1: Tìm hai điểm chung phân biệt A và B, giao tuyến là đường thẳng AB. Chiến thuật 2: Khi chỉ thấy một điểm chung duy nhất S, nhưng hai mặt phẳng lần lượt chứa hai đường thẳng song song a và b, ta áp dụng Định lí giao tuyến 1 để kết luận giao tuyến là đường thẳng đi qua S và song song với a và b.",
      "startTime": 0.0,
      "endTime": 37.58,
      "duration": 37.58
    },
    {
      "sceneIndex": 2,
      "title": "2. DẠNG TOÁN 2: TÌM GIAO ĐIỂM CỦA ĐƯỜNG THẲNG VÀ MẶT PHẲNG",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • PHƯƠNG PHÁP MẶT PHẲNG PHỤ TRỢ",
      "mascotMode": "explaining",
      "mascotTip": "Quy trình 3 bước: Chọn mp phụ $(\\beta) \\supset d \\to$ Tìm giao tuyến $a = (\\beta) \\cap (\\alpha) \\to$ Giao điểm $I = d \\cap a$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-950 to-teal-950 p-4 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"font-bold text-emerald-300 text-sm mb-2\">Thuật Toán 3 Bước Tìm Giao Điểm $d \\cap (\\alpha)$</div>\n    <div class=\"space-y-2\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-amber-400\">\n        <b class=\"text-amber-300\">Bước 1: Chọn mặt phẳng phụ $(\\beta)$ chứa $d$</b>\n        <p class=\"text-slate-300 mt-0.5\">Ưu tiên mặt phẳng đi qua đỉnh hoặc chứa đường chéo đáy dễ tìm giao tuyến.</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">Bước 2: Tìm giao tuyến $a = (\\beta) \\cap (\\alpha)$</b>\n        <p class=\"text-slate-300 mt-0.5\">Sử dụng phương pháp 2 điểm chung hoặc định lí giao tuyến song song.</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">Bước 3: Lấy giao điểm trong $(\\beta)$</b>\n        <p class=\"text-slate-300 mt-0.5\">Trong $(\\beta)$, gọi $I = d \\cap a \\implies I$ chính là giao điểm cần tìm: $I = d \\cap (\\alpha)$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Dạng toán số 2: Tìm giao điểm của đường thẳng d và mặt phẳng alpha. Nếu đường thẳng d và một đường thẳng a trong alpha đồng phẳng và cắt nhau thì giao điểm I chính là giao điểm cần tìm. Nếu chưa thấy đường thẳng a, ta sử dụng mặt phẳng phụ: Bước 1: Chọn mặt phẳng phụ beta chứa d. Bước 2: Tìm giao tuyến a của beta với alpha. Bước 3: Trong mặt phẳng beta, cho d cắt a tại điểm I. Điểm I chính là giao điểm của đường thẳng d với mặt phẳng alpha.",
      "startTime": 37.58,
      "endTime": 74.86,
      "duration": 37.27
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: TÌM GIAO ĐIỂM ĐƯỜNG THẲNG VÀ MẶT PHẲNG",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • BÀI TOÁN TỨ DIỆN 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Chọn mặt phẳng phụ $(BCD)$ chứa đường thẳng $MN$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Nhận biết</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho tứ diện $ABCD$. Lấy $M \\in BC, N \\in CD$ sao cho $MN \\not\\parallel BD$. Giao điểm của $MN$ với $(ABD)$ là giao điểm của $MN$ với:\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Đường thẳng $AB$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> Đường thẳng $AD$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>C.</b> Đường thẳng $BD$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Đường thẳng $BC$</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 1: Cho tứ diện ABCD. Gọi M, N lần lượt là hai điểm trên cạnh BC và CD sao cho MN không song song với BD. Giao điểm của đường thẳng MN với mặt phẳng ABD là giao điểm của MN với đường thẳng nào sau đây? Phương án A: Đường thẳng AB; Phương án B: Đường thẳng AD; Phương án C: Đường thẳng BD; Phương án D: Đường thẳng BC. Các em có 15 giây chọn đáp án.",
      "startTime": 74.86,
      "endTime": 109.78,
      "duration": 34.92
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN C (GIAO ĐIỂM VỚI $BD$)",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • XÉT TRONG MẶT PHẲNG ĐÁY $(BCD)$",
      "mascotMode": "celebrating",
      "mascotTip": "$MN$ và $BD$ cùng nằm trong mặt phẳng $(BCD)$ và cắt nhau tại $I \\in (ABD)$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Chứng minh chuẩn xác:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• Trong mặt phẳng $(BCD)$: có $MN \\subset (BCD)$ và $BD \\subset (BCD)$.</p>\n      <p>• Vì $MN \\not\\parallel BD$ nên trong $(BCD)$, kéo dài $MN$ cắt $BD$ tại $I = MN \\cap BD$.</p>\n      <p>• Do $I \\in BD$ mà $BD \\subset (ABD) \\implies I \\in (ABD)$.</p>\n      <p>• Vậy $I = MN \\cap (ABD)$ chính là giao điểm của $MN$ với đường thẳng $BD$.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án C.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là C: Đường thẳng BD. Lời giải: Vì M thuộc BC và N thuộc CD nên đường thẳng MN nằm trọn vẹn trong mặt phẳng BCD. Trong mặt phẳng BCD, vì MN không song song với BD nên hai đường thẳng này kéo dài sẽ cắt nhau tại một điểm I. Do I thuộc đường thẳng BD, mà BD nằm trong mặt phẳng ABD, nên điểm I thuộc mặt phẳng ABD. Vậy I chính là giao điểm của đường thẳng MN với mặt phẳng ABD.",
      "startTime": 109.78,
      "endTime": 147.53,
      "duration": 37.75
    },
    {
      "sceneIndex": 5,
      "title": "5. DẠNG TOÁN 3: CHỨNG MINH ĐƯỜNG THẲNG SONG SONG MẶT PHẲNG",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • PHƯƠNG PHÁP ĐƯỜNG THẲNG PHỤ ĐỒNG PHẲNG",
      "mascotMode": "explaining",
      "mascotTip": "Muốn $d \\parallel (P)$: Chứng minh $d \\not\\subset (P)$ và tìm $d' \\subset (P)$ sao cho $d \\parallel d'$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-950 to-indigo-950 p-4 rounded-xl border border-blue-500/40 text-xs\">\n    <div class=\"font-bold text-blue-300 text-sm mb-2\">Quy Trình Chứng Minh $d \\parallel (P)$ Chuẩn Mực</div>\n    <div class=\"p-3 bg-slate-900 rounded border border-blue-400/30 text-amber-300 font-serif text-sm\">\n      $$\\begin{cases} d \\not\\subset (P) \\\\ d' \\subset (P) \\\\ d \\parallel d' \\end{cases} \\implies d \\parallel (P)$$\n    </div>\n    <div class=\"space-y-1 text-slate-300 mt-2\">\n      <p>• <b>Kỹ thuật tìm $d'$:</b> Thường là cạnh đối diện trong hình bình hành, đường trung bình trong tam giác, hoặc sử dụng tỉ số định lí Ta-lét.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Dạng toán số 3: Chứng minh đường thẳng d song song với mặt phẳng alpha. Phương pháp chuẩn: Bước 1: Khẳng định đường thẳng d không nằm trong mặt phẳng alpha. Bước 2: Tìm hoặc dựng trong mặt phẳng alpha một đường thẳng d phẩy song song với d. Thông thường d phẩy là đường trung bình, cạnh đối của hình bình hành hoặc áp dụng định lí Ta-lét. Bước 3: Kết luận d song song với mặt phẳng alpha.",
      "startTime": 147.53,
      "endTime": 178.32,
      "duration": 30.79
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: CHỨNG MINH ĐƯỜNG THẲNG SONG SONG VỚI MẶT PHẲNG",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • BÀI TOÁN HÌNH CHÓP TỨ GIÁC 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "$M, N$ là trung điểm $SA, SB \\implies MN \\parallel AB \\parallel CD \\implies MN \\parallel (SCD)$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-teal-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-teal-500/20 text-teal-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho hình chóp $S.ABCD$ đáy hình bình hành. Gọi $M, N$ là trung điểm $SA, SB$. Khẳng định nào <b>đúng</b>?\n    </p>\n\n    <div class=\"space-y-1.5 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> $MN \\parallel (SAB)$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>B.</b> $MN \\parallel (SCD)$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> $MN \\parallel (SBC)$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> $MN$ cắt $(SCD)$</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Gọi M, N lần lượt là trung điểm của SA và SB. Khẳng định nào sau đây là đúng? Phương án A: MN song song mặt phẳng SAB; Phương án B: MN song song mặt phẳng SCD; Phương án C: MN song song mặt phẳng SBC; Phương án D: MN cắt mặt phẳng SCD. Các em có 15 giây suy nghĩ.",
      "startTime": 178.32,
      "endTime": 210.43,
      "duration": 32.11
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: $MN \\parallel (SCD)$",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • BƯỚC NỐI TÍNH CHẤT TRUNG BÌNH",
      "mascotMode": "celebrating",
      "mascotTip": "$MN \\not\\subset (SCD)$ và $MN \\parallel CD \\subset (SCD) \\implies MN \\parallel (SCD)$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Chứng minh chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• Trong $\\triangle SAB$: $MN$ là đường trung bình $\\implies MN \\parallel AB$.</p>\n      <p>• Do $ABCD$ là hình bình hành $\\implies AB \\parallel CD$.</p>\n      <p>• Suy ra $MN \\parallel CD$.</p>\n      <p>• Vì $MN \\not\\subset (SCD)$ và $CD \\subset (SCD)$ nên $MN \\parallel (SCD)$.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án B.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là B: MN song song mặt phẳng SCD. Lời giải: Trong tam giác SAB, M và N là trung điểm của SA và SB nên MN là đường trung bình, suy ra MN song song AB. Vì ABCD là hình bình hành nên AB song song CD. Từ đó suy ra MN song song CD. Vì CD nằm trong mặt phẳng SCD còn MN không nằm trong SCD, nên theo dấu hiệu nhận biết, MN song song với mặt phẳng SCD.",
      "startTime": 210.43,
      "endTime": 248.52,
      "duration": 38.09
    },
    {
      "sceneIndex": 8,
      "title": "8. DẠNG TOÁN 4: CHỨNG MINH HAI MẶT PHẲNG SONG SONG",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • BẢN ĐỒ TƯ DUY 2 ĐƯỜNG CẮT NHAU",
      "mascotMode": "pointer",
      "mascotTip": "Tìm 2 đường cắt nhau trong $(P)$ cùng song song $(Q)$ $\\implies (P) \\parallel (Q)$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-950 to-indigo-950 p-4 rounded-xl border border-purple-500/40 text-xs\">\n    <div class=\"font-bold text-purple-300 text-sm mb-2\">Bản Đồ Chứng Minh $(P) \\parallel (Q)$</div>\n    <div class=\"p-3 bg-slate-900 rounded border border-purple-400/30 text-amber-300 font-serif text-sm\">\n      $$\\begin{cases} a \\subset (P), \\ b \\subset (P) \\\\ a \\cap b = \\{I\\} \\\\ a \\parallel a' \\subset (Q) \\implies a \\parallel (Q) \\\\ b \\parallel b' \\subset (Q) \\implies b \\parallel (Q) \\end{cases} \\implies (P) \\parallel (Q)$$\n    </div>\n  </div>\n</div>\n",
      "narration": "Dạng toán số 4: Chứng minh hai mặt phẳng song song. Phương pháp cốt lõi: Ta tìm trong mặt phẳng P hai đường thẳng a và b cắt nhau tại một điểm. Sau đó chứng minh a song song với mặt phẳng Q và b song song với mặt phẳng Q. Từ đó kết luận mặt phẳng P song song với mặt phẳng Q theo Định lí 1. Đây là câu hỏi rất hay xuất hiện trong các đề thi THPT.",
      "startTime": 248.52,
      "endTime": 277.06,
      "duration": 28.54
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: CHỨNG MINH HAI MẶT PHẲNG SONG SONG TRONG HÌNH HỘP",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • CẶP MẶT PHẲNG CHÉO KINH ĐIỂN 30S",
      "mascotMode": "thinking",
      "mascotTip": "Mặt phẳng $(B D A')$ và mặt phẳng $(B' D' C)$ luôn song song với nhau!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho hình hộp $ABCD.A'B'C'D'$. Mặt phẳng $(BDA')$ song song với mặt phẳng nào?\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>A.</b> $(B'D'C)$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>B.</b> $(ABCD)$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> $(A'B'C'D')$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> $(ACC'A')$</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-purple-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-purple-300 font-medium\">Thời gian tư duy:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3: Cho hình hộp ABCD.A'B'C'D'. Mặt phẳng B D A' song song với mặt phẳng nào sau đây? Phương án A: Mặt phẳng B' D' C; Phương án B: Mặt phẳng A B C D; Phương án C: Mặt phẳng A' B' C' D'; Phương án D: Mặt phẳng A C C' A'. Các em có 30 giây suy nghĩ.",
      "startTime": 277.06,
      "endTime": 307.68,
      "duration": 30.62
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: $(BDA') \\parallel (B'D'C)$",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • CHỨNG MINH 2 CẶP ĐƯỜNG THẲNG SONG SONG",
      "mascotMode": "celebrating",
      "mascotTip": "$BD \\parallel B'D'$ và $BA' \\parallel CD' \\implies (BDA') \\parallel (B'D'C)$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Lời giải hình học chuẩn mực:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• Trong hình hộp: $BD \\parallel B'D' \\subset (B'D'C) \\implies BD \\parallel (B'D'C)$.</p>\n      <p>• Tứ giác $A'BCD'$ là hình bình hành vì $A'B \\parallel D'C$ (do $A'B \\parallel D'C'$ và cạnh bên) $\\implies A'B \\parallel D'C \\subset (B'D'C) \\implies A'B \\parallel (B'D'C)$.</p>\n      <p>• Trong $(BDA')$ có $BD \\cap A'B = \\{B\\}$ nên $(BDA') \\parallel (B'D'C)$.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án A.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là A: Mặt phẳng B' D' C. Chứng minh: Thứ nhất, tứ giác B D D' B' là hình bình hành nên BD song song B' D', mà B' D' nằm trong mặt phẳng B' D' C nên BD song song với B' D' C. Thứ hai, tứ giác A B C D' là hình bình hành do có AB song song và bằng C D' (do cùng song song và bằng A' B'). Do đó B A' song song C D', mà C D' nằm trong B' D' C nên B A' song song với B' D' C. Vì BD và B A' cắt nhau tại B nên mặt phẳng B D A' song song với mặt phẳng B' D' C.",
      "startTime": 307.68,
      "endTime": 359.86,
      "duration": 52.18
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI VỀ QUAN HỆ SONG SONG HÌNH CHÓP",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • 4 MỆNH ĐỀ PHÂN HÓA 30 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Kiểm tra kĩ từng mệnh đề giao tuyến và song song!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 4 (Đúng / Sai)</span>\n      <span class=\"text-xs text-slate-400\">Định dạng thi 2025</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB \\parallel CD, AB > CD$). Xét tính Đúng / Sai:\n    </p>\n\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>a)</b> $(SAB) \\cap (SCD) = d$ qua $S$ và $d \\parallel AB \\parallel CD$.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>b)</b> Giao tuyến của $(SAD)$ và $(SBC)$ là đường thẳng đi qua $S$ và giao điểm $E = AD \\cap BC$.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>c)</b> Đường thẳng $DM$ cắt mặt phẳng $(SAB)$.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>d)</b> Đường thẳng $AB \\parallel (SCD)$.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian kiểm tra:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4: Cho hình chóp S.ABCD có đáy ABCD là hình thang với đáy lớn AB song song đáy nhỏ CD. Gọi M là trung điểm của cạnh SC. Xét tính Đúng hay Sai của các khẳng định sau: Mệnh đề a: Giao tuyến của hai mặt phẳng SAB và SCD là đường thẳng đi qua S và song song với AB. Mệnh đề b: Giao tuyến của hai mặt phẳng SAD và SBC là đường thẳng đi qua S. Mệnh đề c: Đường thẳng DM cắt mặt phẳng SAB. Mệnh đề d: Đường thẳng AB song song với mặt phẳng SCD. Các em có 30 giây suy nghĩ.",
      "startTime": 359.86,
      "endTime": 404.35,
      "duration": 44.5
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & BẾ MẠC MỤC 2",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • KẾT QUẢ ĐỐI CHIẾU 4 Ý ĐỀU ĐÚNG",
      "mascotMode": "celebrating",
      "mascotTip": "Cả 4 mệnh đề đều ĐÚNG $100\\%$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Đáp án và giải thích chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• <b>a) ĐÚNG:</b> Định lí giao tuyến 1 vì $AB \\parallel CD$.</p>\n      <p>• <b>b) ĐÚNG:</b> $E = AD \\cap BC$ trong đáy $\\implies SE = (SAD) \\cap (SBC)$.</p>\n      <p>• <b>c) ĐÚNG:</b> Trong $(SCD)$, $DM$ cắt giao tuyến $d \\implies DM$ cắt $(SAB)$.</p>\n      <p>• <b>d) ĐÚNG:</b> $AB \\not\\subset (SCD)$ và $AB \\parallel CD \\subset (SCD) \\implies AB \\parallel (SCD)$.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">⭐ TỔNG KẾT MỤC 2: Thành thạo trọn bộ 4 dạng toán trọng tâm của quan hệ song song!</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Giải thích chi tiết Ví dụ 4: Cả bốn mệnh đề đều ĐÚNG. Mệnh đề a ĐÚNG vì AB song song CD theo định lí giao tuyến 1. Mệnh đề b ĐÚNG vì hai cạnh bên AD và BC của hình thang cắt nhau tại E, điểm chung thứ nhất là S, điểm chung thứ hai là E, giao tuyến là SE. Mệnh đề c ĐÚNG vì DM kéo dài cắt giao tuyến của mặt phẳng phụ SCD với SAB. Mệnh đề d ĐÚNG vì AB song song CD nằm trong SCD và AB không thuộc SCD. Hẹn gặp lại các em ở Mục 3: Kỹ thuật xác định thiết diện nâng cao.",
      "startTime": 404.35,
      "endTime": 446.83,
      "duration": 42.48
    }
  ]
};
  root.G11_CHAPTER4_DATA.toan11_ontap_c4_muc2 = root.G11_CHAPTER4_DATA.g11_ontap_c4_muc2;

  root.G11_CHAPTER4_DATA.g11_ontap_c4_muc3 = {
  "lessonId": "toan11_ontap_c4",
  "lessonTitle": "Bài tập cuối chương IV: Quan hệ song song trong không gian",
  "sectionId": "g11_ontap_c4_muc3",
  "sectionTitle": "Mục 3: Luyện đề tổng hợp chuẩn cấu trúc Bộ GD&ĐT 2025",
  "audio": "/audio/g11_ontap_c4_muc3.mp3",
  "audioSrc": "./audio/g11_ontap_c4_muc3.mp3",
  "audio_src": "./audio/g11_ontap_c4_muc3.mp3",
  "title": "Mục 3: Luyện đề tổng hợp chuẩn cấu trúc Bộ GD&ĐT 2025",
  "owl_tip": "Luyện đề theo ma trận 3 phần: Trắc nghiệm 4 lựa chọn, Trắc nghiệm Đúng/Sai và Trả lời ngắn!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. CHIẾN LƯỢC TỔNG QUÁT TÌM THIẾT DIỆN NÂNG CAO",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. BÀI TOÁN KINH ĐIỂN: THIẾT DIỆN SONG SONG HAI ĐƯỜNG THẲNG CHÉO NHAU",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: CÂU HỎI TRẢ LỜI NGẮN (ĐIỀN ĐÁP SỐ CHUẨN TNMAKER)",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & BẾ MẠC TOÀN KHÓA CHƯƠNG IV",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 398.5,
  "formattedDuration": "06:38",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. CHIẾN LƯỢC TỔNG QUÁT TÌM THIẾT DIỆN NÂNG CAO",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • BƯỚC ĐỘT PHÁ TÌM ĐA GIÁC THIẾT DIỆN",
      "mascotMode": "pointer",
      "mascotTip": "Tìm các đoạn giao tuyến khép kín của mặt phẳng cắt với tất cả các mặt của hình đa diện!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-teal-950 to-indigo-950 p-4 rounded-xl border border-teal-500/40 text-xs\">\n    <div class=\"font-bold text-teal-300 text-sm mb-2\">Quy Trình Tìm Thiết Diện Khép Kín</div>\n    <div class=\"space-y-2\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">1. Xác định giao tuyến trực tiếp:</b>\n        <p class=\"text-slate-300 mt-1\">Tìm các đoạn giao tuyến có sẵn trên các mặt chứa 2 điểm chung.</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-amber-400\">\n        <b class=\"text-amber-300\">2. Kẻ giao tuyến song song (nếu có):</b>\n        <p class=\"text-slate-300 mt-1\">Nếu mặt phẳng cắt song song với một đường thẳng hoặc một mặt phẳng, lập tức áp dụng Định lí giao tuyến để kẻ các đoạn song song.</p>\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">3. Kéo dài cắt cạnh:</b>\n        <p class=\"text-slate-300 mt-1\">Kéo dài các đoạn giao tuyến để cắt các cạnh kéo dài của đa diện, tạo điểm chung mới cho các mặt còn lại.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 3: Kỹ thuật xác định thiết diện nâng cao và Đề rèn luyện trắc nghiệm chuẩn cấu trúc Bộ Giáo dục. Thiết diện của một hình đa diện khi cắt bởi một mặt phẳng alpha là đa giác phẳng giới hạn bởi các đoạn giao tuyến của alpha với các mặt của hình đa diện. Để tìm thiết diện nâng cao, ta kết hợp linh hoạt hai công cụ: kéo dài đường thẳng để tìm giao điểm mới trên các mặt phẳng phụ, và sử dụng các định lí giao tuyến song song để kẻ các đường song song.",
      "startTime": 0.0,
      "endTime": 35.5,
      "duration": 35.5
    },
    {
      "sceneIndex": 2,
      "title": "2. BÀI TOÁN KINH ĐIỂN: THIẾT DIỆN SONG SONG HAI ĐƯỜNG THẲNG CHÉO NHAU",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • HÌNH BÌNH HÀNH THIẾT DIỆN",
      "mascotMode": "explaining",
      "mascotTip": "Mặt phẳng song song với 2 cạnh đối diện của tứ diện cắt tứ diện theo thiết diện là HÌNH BÌNH HÀNH!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-950 to-purple-950 p-4 rounded-xl border border-blue-500/40 text-xs\">\n    <div class=\"font-bold text-blue-300 text-sm mb-2\">Định Lí Thiết Diện Song Song Hai Cạnh Đối Của Tứ Diện</div>\n    <div class=\"p-3 bg-slate-900 rounded border border-blue-400/30 font-serif text-sm text-amber-300\">\n      $$\\begin{cases} (\\alpha) \\parallel AB \\\\ (\\alpha) \\parallel CD \\end{cases} \\implies \\begin{cases} MN \\parallel PQ \\parallel AB \\\\ MQ \\parallel NP \\parallel CD \\end{cases} \\implies MNPQ \\text{ là hình bình hành}$$\n    </div>\n    <div class=\"p-2.5 bg-slate-800 rounded border-l-4 border-emerald-400 mt-2\">\n      <b class=\"text-emerald-300\">Đặc biệt:</b> Nếu $AB \\perp CD$ thì thiết diện là <b>hình chữ nhật</b>.<br/>\n      Nếu $AB \\perp CD$ và khoảng cách chia đều thì thiết diện là <b>hình vuông</b>.\n    </div>\n  </div>\n</div>\n",
      "narration": "Một dạng bài toán kinh điển thường xuất hiện trong đề thi phân hóa cao: Cho tứ diện ABCD. Một mặt phẳng alpha song song với hai cạnh đối diện AB và CD cắt các cạnh AC, BC, BD, AD lần lượt tại M, N, P, Q. Khi đó, thiết diện MNPQ luôn luôn là một hình bình hành. Nếu tứ diện đều và mặt phẳng alpha đi qua trung điểm các cạnh thì thiết diện trở thành hình vuông.",
      "startTime": 35.5,
      "endTime": 69.1,
      "duration": 33.6
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: XÁC ĐỊNH HÌNH DẠNG THIẾT DIỆN CỦA TỨ DIỆN ĐỀU",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • BÀI TOÁN THIẾT DIỆN 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Tứ diện đều có các cạnh đối vuông góc nhau $\\implies$ thiết diện song song 2 cạnh đối là hình chữ nhật!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho tứ diện đều $ABCD$ cạnh $a$. Mặt phẳng $(\\alpha)$ song song với $AB$ và $CD$. Thiết diện cắt bởi $(\\alpha)$ là hình gì?\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> Hình thang cân</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>B.</b> Hình chữ nhật</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> Tam giác đều</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> Hình thoi</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 1: Cho tứ diện đều ABCD có tất cả các cạnh bằng a. Mặt phẳng alpha song song với hai cạnh đối diện AB và CD. Thiết diện của tứ diện cắt bởi mặt phẳng alpha luôn là hình gì? Phương án A: Hình thang cân; Phương án B: Hình chữ nhật; Phương án C: Tam giác đều; Phương án D: Hình thoi. Các em có 15 giây suy nghĩ.",
      "startTime": 69.1,
      "endTime": 98.69,
      "duration": 29.59
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: THIẾT DIỆN LÀ HÌNH CHỮ NHẬT",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • TÍNH CHẤT VUÔNG GÓC CỦA CẶP CẠNH ĐỐI TỨ DIỆN ĐỀU",
      "mascotMode": "celebrating",
      "mascotTip": "Trong tứ diện đều, hai cạnh đối luôn vuông góc $AB \\perp CD \\implies$ hình bình hành có 1 góc vuông là hình chữ nhật!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Chứng minh hình học:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• $(\\alpha) \\parallel AB \\implies MN \\parallel PQ \\parallel AB$.</p>\n      <p>• $(\\alpha) \\parallel CD \\implies MQ \\parallel NP \\parallel CD$.</p>\n      <p>• Tứ giác $MNPQ$ có hai cặp cạnh đối song song $\\implies MNPQ$ là <b>hình bình hành</b>.</p>\n      <p>• Trong tứ diện đều $ABCD$, ta có tính chất $AB \\perp CD$.</p>\n      <p>• Vì $MN \\parallel AB$ và $MQ \\parallel CD \\implies MN \\perp MQ \\implies \\widehat{NMQ} = 90^\\circ$.</p>\n      <p>• Vậy thiết diện $MNPQ$ là <b>hình chữ nhật</b>.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án B.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là B: Hình chữ nhật. Lời giải: Vì mặt phẳng alpha song song với AB và CD nên thiết diện MNPQ có MN song song PQ song song AB, và MQ song song NP song song CD. Do đó MNPQ là hình bình hành. Mặt khác, trong tứ diện đều ABCD, hai cạnh đối diện AB và CD vuông góc với nhau. Vì MN song song AB và MQ song song CD nên MN cũng vuông góc với MQ. Hình bình hành MNPQ có một góc vuông nên là một hình chữ nhật.",
      "startTime": 98.69,
      "endTime": 140.88,
      "duration": 42.19
    },
    {
      "sceneIndex": 5,
      "title": "5. CHU VI THIẾT DIỆN KHÔNG ĐỔI TRONG TỨ DIỆN ĐỀU",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • ĐỊNH LÍ BẢO TOÀN CHU VI KINH ĐIỂN",
      "mascotMode": "explaining",
      "mascotTip": "Chu vi thiết diện hình chữ nhật luôn bằng $2a$, không phụ thuộc vào vị trí mặt phẳng $(\\alpha)$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-950 to-slate-900 p-4 rounded-xl border border-purple-500/40 text-xs\">\n    <div class=\"font-bold text-purple-300 text-sm mb-2\">Định Lí Chu Vi Thiết Diện Bất Biến</div>\n    <p class=\"text-slate-300 leading-relaxed text-sm\">\n      Cho tứ diện đều $ABCD$ cạnh $a$. Mặt phẳng $(\\alpha) \\parallel AB, CD$ cắt $AC$ theo tỉ số $\\frac{AM}{AC} = x \\ (0 < x < 1)$.\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-3 mt-2 text-xs\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">Độ dài các cạnh:</b><br/>\n        $MN = x \\cdot a$<br/>\n        $MQ = (1 - x) \\cdot a$\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-amber-400\">\n        <b class=\"text-amber-300\">Chu vi bất biến:</b><br/>\n        $$2(MN + MQ) = 2(xa + (1 - x)a) = 2a$$\n        (Không phụ thuộc vị trí $x$!).\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Một kết quả toán học vô cùng kì diệu của bài toán trên: Dù mặt phẳng alpha di chuyển ở bất kì vị trí nào song song với AB và CD, thì chu vi của hình chữ nhật thiết diện MNPQ luôn luôn là một hằng số không đổi và bằng hai lần độ dài cạnh a. Ta có MN bằng k lần AB, còn MQ bằng một trừ k lần CD. Tổng hai cạnh liên tiếp luôn bằng a, do đó chu vi luôn bằng 2a.",
      "startTime": 140.88,
      "endTime": 172.87,
      "duration": 31.99
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: DIỆN TÍCH THIẾT DIỆN LỚN NHẤT KHI NÀO?",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • BÀI TOÁN TỐI ƯU HÓA HÌNH HỌC 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Bất đẳng thức Cauchy: $S = x(1-x)a^2 \\le \\frac{a^2}{4}$, đạt được khi $x = 1/2$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-teal-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-teal-500/20 text-teal-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho tứ diện đều $ABCD$ cạnh $a$. Diện tích thiết diện $MNPQ$ lớn nhất bằng:\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>A.</b> $\\frac{a^2}{2}$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300\"><b>B.</b> $\\frac{a^2}{4}$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>C.</b> $\\frac{a^2}{8}$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700\"><b>D.</b> $\\frac{a^2\\sqrt{3}}{4}$</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2: Vẫn với tứ diện đều ABCD cạnh a và mặt phẳng alpha song song AB, CD. Diện tích thiết diện MNPQ đạt giá trị lớn nhất bằng bao nhiêu? Phương án A: a bình phương chia 2; Phương án B: a bình phương chia 4; Phương án C: a bình phương chia 8; Phương án D: a bình phương căn 3 chia 4. Các em có 15 giây tính toán.",
      "startTime": 172.87,
      "endTime": 201.48,
      "duration": 28.61
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: $S_{\\max} = \\frac{a^2}{4}$",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • ÁP DỤNG BẤT ĐẲNG THỨC CAUCHY",
      "mascotMode": "celebrating",
      "mascotTip": "Diện tích lớn nhất khi thiết diện là HÌNH VUÔNG cạnh $\\frac{a}{2}$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Lời giải tối ưu chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• Diện tích hình chữ nhật: $S(x) = MN \\cdot MQ = (x a) \\cdot ((1 - x) a) = a^2 \\cdot x(1 - x)$.</p>\n      <p>• Áp dụng BĐT Cauchy: $x(1 - x) \\le \\left(\\frac{x + 1 - x}{2}\\right)^2 = \\frac{1}{4}$.</p>\n      <p>• Dấu bằng xảy ra $\\iff x = 1 - x \\iff x = \\frac{1}{2}$ ($M, N, P, Q$ là trung điểm các cạnh).</p>\n      <p>• Khi đó thiết diện là <b>hình vuông</b> và $S_{\\max} = \\frac{a^2}{4}$.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ Chọn đáp án B.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là B: a bình phương chia 4. Lời giải: Gọi x là tỉ số AM trên AC với x nằm trong khoảng từ 0 đến 1. Khi đó hai kích thước của hình chữ nhật thiết diện là MN bằng x nhân a và MQ bằng một trừ x nhân a. Diện tích hình chữ nhật là S bằng MN nhân MQ bằng x nhân một trừ x nhân a bình phương. Áp dụng bất đẳng thức Cô-si cho hai số dương x và một trừ x, ta có tích của chúng nhỏ hơn hoặc bằng tổng chia đôi tất cả bình phương, tức là 1 phần 4. Dấu bằng xảy ra khi x bằng một nửa, tức là M là trung điểm AC, khi đó thiết diện là hình vuông cạnh a chia 2.",
      "startTime": 201.48,
      "endTime": 234.55,
      "duration": 33.07
    },
    {
      "sceneIndex": 8,
      "title": "8. CẤU TRÚC ĐỀ THI TỐT NGHIỆP THPT CHUẨN 2025",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • ĐỊNH HƯỚNG ÔN LUYỆN 3 PHẦN",
      "mascotMode": "pointer",
      "mascotTip": "Nắm chắc cấu trúc: Phần I (4 lựa chọn), Phần II (Đúng/Sai 4 ý), Phần III (Trả lời ngắn điền số)!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-950 to-slate-900 p-4 rounded-xl border border-blue-500/40 text-xs\">\n    <div class=\"font-bold text-blue-300 text-sm mb-2\">Đặc Tả Đề Thi Môn Toán Chuẩn 2025 Của Bộ GD&ĐT</div>\n    <div class=\"grid grid-cols-3 gap-2\">\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">Phần I: 4 Lựa chọn</b><br/>\n        • 12 câu hỏi.<br/>\n        • Mỗi câu đúng được 0.25 điểm.<br/>\n        • Nhận biết & Thông hiểu.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-amber-400\">\n        <b class=\"text-amber-300\">Phần II: Đúng / Sai</b><br/>\n        • 4 câu hỏi (16 ý $a, b, c, d$).<br/>\n        • Đúng 1 ý: 0.1đ; 2 ý: 0.25đ; 3 ý: 0.5đ; 4 ý: 1.0đ.<br/>\n        • Vận dụng phân hóa.\n      </div>\n      <div class=\"p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">Phần III: Trả lời ngắn</b><br/>\n        • 6 câu hỏi điền số.<br/>\n        • Mỗi câu đúng được 0.5 điểm.<br/>\n        • Vận dụng cao & Thực tế.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Trước khi bước vào bài tập thực chiến cuối cùng, thầy muốn nhắc lại cấu trúc đề thi tốt nghiệp THPT theo chương trình giáo dục phổ thông 2018: Đề thi gồm 3 phần: Phần I gồm các câu trắc nghiệm nhiều lựa chọn 4 phương án. Phần II gồm các câu trắc nghiệm Đúng/Sai, mỗi câu có 4 ý a, b, c, d phân hóa sâu sắc. Phần III gồm các câu hỏi trả lời ngắn, học sinh tự giải và điền kết quả số học vào phiếu trả lời.",
      "startTime": 234.55,
      "endTime": 259.51,
      "duration": 24.96
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: CÂU TRẮC NGHIỆM ĐÚNG / SAI PHÂN HÓA",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • TÍNH CHẤT LĂNG TRỤ VÀ TỈ SỐ ĐOẠN THẲNG 30S",
      "mascotMode": "thinking",
      "mascotTip": "Lăng trụ tam giác $ABC.A'B'C'$, các mặt bên là hình bình hành nên các cạnh bên song song và bằng nhau!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded\">Ví dụ 3 (Đúng / Sai)</span>\n      <span class=\"text-xs text-slate-400\">Phần II đề thi 2025</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho lăng trụ $ABC.A'B'C'$. Gọi $I, K$ là trọng tâm $\\triangle ABC$ và $\\triangle A'B'C'$. Xét tính Đúng / Sai:\n    </p>\n\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>a)</b> Đường thẳng $IK \\parallel AA'$.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>b)</b> Độ dài đoạn thẳng $IK = AA'$.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>c)</b> Mặt phẳng $(AIB) \\parallel (A'KB')$.</span>\n        <span class=\"font-bold text-emerald-400\">[ ĐÚNG ]</span>\n      </div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 flex justify-between\">\n        <span><b>d)</b> Đường thẳng $IK$ luôn vuông góc với hai đáy.</span>\n        <span class=\"font-bold text-rose-400\">[ SAI ]</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-purple-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-purple-300 font-medium\">Thời gian kiểm tra:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3: Cho hình lăng trụ tam giác ABC.A'B'C'. Gọi I, K lần lượt là trọng tâm của hai tam giác ABC và A'B'C'. Xét tính Đúng hay Sai của các khẳng định sau: Mệnh đề a: Đoạn thẳng IK song song với cạnh bên AA'. Mệnh đề b: Đoạn thẳng IK có độ dài bằng cạnh bên AA'. Mệnh đề c: Mặt phẳng A I B song song với mặt phẳng A' K B'. Mệnh đề d: Đường thẳng IK vuông góc với hai mặt phẳng đáy. Các em có 30 giây suy nghĩ.",
      "startTime": 259.51,
      "endTime": 285.6,
      "duration": 26.09
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: PHÂN TÍCH TỪNG MỆNH ĐỀ",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • HÌNH BÌNH HÀNH VÀ LĂNG TRỤ XIÊN",
      "mascotMode": "celebrating",
      "mascotTip": "$IK$ song song cạnh bên, nhưng lăng trụ xiên thì cạnh bên không vuông góc đáy!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Đáp án phân tích chuẩn xác:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• <b>a, b) ĐÚNG:</b> Tứ giác tạo bởi hai trung tuyến là hình bình hành $\\implies IK \\parallel AA'$ và $IK = AA'$.</p>\n      <p>• <b>c) ĐÚNG:</b> Vì $(AIB) \\equiv (ABC)$ và $(A'KB') \\equiv (A'B'C')$, mà hai đáy lăng trụ luôn song song.</p>\n      <p>• <b>d) SAI:</b> Lăng trụ tổng quát có thể là <b>lăng trụ xiên</b>, khi đó cạnh bên không vuông góc mặt đáy.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">➔ 3 ý ĐÚNG, 1 ý SAI.</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Giải thích chi tiết Ví dụ 3: Mệnh đề a và b ĐÚNG vì gọi M, M' là trung điểm BC và B'C' thì tứ giác AMM'A' là hình bình hành. Do I và K chia AM và A'M' theo cùng tỉ số 2/3 nên tứ giác II'KK' hay AIKA' tương ứng là hình bình hành, suy ra IK song song và bằng AA'. Mệnh đề c ĐÚNG vì mặt phẳng AIB chính là mặt đáy ABC, còn A'KB' chính là mặt đáy A'B'C', mà hai đáy lăng trụ luôn song song. Mệnh đề d SAI vì lăng trụ tổng quát có thể là lăng trụ xiên, khi đó cạnh bên và IK không vuông góc với đáy.",
      "startTime": 285.6,
      "endTime": 318.96,
      "duration": 33.36
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: CÂU HỎI TRẢ LỜI NGẮN (ĐIỀN ĐÁP SỐ CHUẨN TNMAKER)",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • PHẦN III ĐỀ THI 2025 (30 GIÂY)",
      "mascotMode": "thinking",
      "mascotTip": "Tính toán cẩn thận và trả lời đúng duy nhất 1 số học!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30 text-xs\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2.5 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 4 (Trả lời ngắn)</span>\n      <span class=\"text-xs text-slate-400\">Phần III đề thi tốt nghiệp</span>\n    </div>\n    <p class=\"text-slate-200 leading-relaxed mb-3\">\n      Cho hình chóp $S.ABCD$ đáy hình bình hành diện tích $S_{ABCD} = 48\\text{ cm}^2$. Mặt phẳng $(P)$ qua trọng tâm $G$ của $\\triangle SAB$ và song song với đáy $(ABCD)$ cắt hình chóp tạo thành thiết diện. Diện tích thiết diện đó bằng bao nhiêu $\\text{cm}^2$?\n    </p>\n\n    <div class=\"p-3 bg-slate-900 rounded border border-amber-400/30 text-center\">\n      <span class=\"text-xs text-slate-400\">Điền số đáp án vào ô:</span>\n      <div class=\"text-2xl font-black text-amber-400 font-mono mt-1\">Đáp số: ?</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4: Câu hỏi trả lời ngắn theo định dạng Phần 3: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành diện tích bằng 48 cm vuông. Mặt phẳng P đi qua trọng tâm G của tam giác SAB và song song với mặt phẳng đáy ABCD cắt các cạnh bên SA, SB, SC, SD tạo thành một đa giác thiết diện. Tính diện tích của đa giác thiết diện đó theo đơn vị cm vuông. Các em có 30 giây tính toán.",
      "startTime": 318.96,
      "endTime": 354.34,
      "duration": 35.38
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & BẾ MẠC TOÀN KHÓA CHƯƠNG IV",
      "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • TỈ SỐ DIỆN TÍCH BẰNG BÌNH PHƯƠNG TỈ SỐ ĐỒNG DẠNG",
      "mascotMode": "celebrating",
      "mascotTip": "$k = \\frac{SG}{SM} = \\frac{2}{3} \\implies \\frac{S_{td}}{S_{ABCD}} = k^2 = \\frac{4}{9} \\implies S_{td} = \\frac{4}{9} \\times 48 \\approx 21.33$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Lời giải số học chi tiết:</div>\n    <div class=\"space-y-1.5 text-slate-300\">\n      <p>• Mặt phẳng $(P) \\parallel (ABCD) \\implies$ Thiết diện là hình bình hành $MNPQ$ đồng dạng với $ABCD$.</p>\n      <p>• Do $G$ là trọng tâm $\\triangle SAB$ nên tỉ số vị tự / đồng dạng là:</p>\n      <p class=\"font-mono text-center text-amber-300\">$$k = \\frac{SG}{SM'} = \\frac{2}{3} \\quad (M' \\text{ là trung điểm } AB)$$</p>\n      <p>• Tỉ số diện tích bằng bình phương tỉ số đồng dạng:</p>\n      <p class=\"font-mono text-center text-emerald-300\">$$\\frac{S_{MNPQ}}{S_{ABCD}} = k^2 = \\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$$</p>\n      <p>• Diện tích thiết diện là: $S_{MNPQ} = \\frac{4}{9} \\cdot 48 = \\frac{64}{3} \\approx \\mathbf{21.33}\\text{ (cm}^2)$.</p>\n      <div class=\"mt-2 text-emerald-300 font-bold font-mono\">🎉 ĐÁP SỐ: 21.33 (hoặc 64/3). BẾ MẠC TOÀN KHÓA CHƯƠNG IV TOÁN 11 KNTT!</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án chính xác là 21.33. Lời giải: Vì mặt phẳng P song song với đáy ABCD nên thiết diện cắt các cạnh bên tạo thành hình bình hành M N P Q đồng dạng với đáy ABCD. Gọi M' là trung điểm AB, vì G là trọng tâm tam giác SAB nên tỉ số đồng dạng k bằng SG trên SM' bằng 2 phần 3. Tỉ số diện tích của hai đa giác đồng dạng bằng bình phương tỉ số đồng dạng, tức là k bình phương bằng 4 phần 9. Do đó diện tích thiết diện bằng 4 phần 9 nhân với 48, bằng 64 chia 3, xấp xỉ 21.33 cm vuông. Chúc mừng các em đã hoàn thành xuất sắc toàn bộ Chương 4!",
      "startTime": 354.34,
      "endTime": 398.5,
      "duration": 44.16
    }
  ]
};
  root.G11_CHAPTER4_DATA.toan11_ontap_c4_muc3 = root.G11_CHAPTER4_DATA.g11_ontap_c4_muc3;

  // Auto merge into global LECTURE_DATA
  if (typeof LECTURE_DATA !== 'undefined') {
    Object.assign(LECTURE_DATA, root.G11_CHAPTER4_DATA);
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = root.G11_CHAPTER4_DATA;
  }
})();
