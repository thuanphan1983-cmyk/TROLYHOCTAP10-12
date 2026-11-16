/* =========================================================================
   CHƯƠNG IV: QUAN HỆ SONG SONG TRONG KHÔNG GIAN
   MÔN TOÁN LỚP 11 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
   Bài 10: Đường thẳng và mặt phẳng trong không gian (Mục 1, 2, 3)
   Bài 11: Hai đường thẳng song song trong không gian (Mục 1, 2, 3)
   Bài 12: Đường thẳng và mặt phẳng song song (Mục 1, 2, 3)
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

  // Auto merge into global LECTURE_DATA
  if (typeof LECTURE_DATA !== 'undefined') {
    Object.assign(LECTURE_DATA, root.G11_CHAPTER4_DATA);
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = root.G11_CHAPTER4_DATA;
  }
})();
