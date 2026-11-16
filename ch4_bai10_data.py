# -*- coding: utf-8 -*-
"""
CHƯƠNG IV: QUAN HỆ SONG SONG TRONG KHÔNG GIAN
BÀI 10: ĐƯỜNG THẲNG VÀ MẶT PHẲNG TRONG KHÔNG GIAN - TOÁN 11 KNTT
Mục 1, Mục 2, Mục 3 - Đầy đủ 36 Scenes (12 scenes/mục)
Mỗi mục có 4 ví dụ minh họa kèm đồng hồ đếm ngược 15s/30s
Giọng đọc Thầy Nam Minh (vi-VN-NamMinhNeural) chuẩn sư phạm Bộ GD&ĐT
"""

# ==============================================================================
# MỤC 1: KHÁI NIỆM MỞ ĐẦU, CÁC TÍNH CHẤT THỪA NHẬN & CÁCH XÁC ĐỊNH MẶT PHẲNG
# ==============================================================================
BAI10_MUC1_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. MỞ ĐẦU HÌNH HỌC KHÔNG GIAN & KHÁI NIỆM MẶT PHẲNG",
        "subtitle": "BÀI 10 • MỤC 1 • BƯỚC VÀO THẾ GIỚI KHÔNG GIAN 3 CHIỀU",
        "mascotMode": "pointer",
        "mascotTip": r"Mặt phẳng không có bề dày và mở rộng vô hạn về mọi phía, ký hiệu là $(\alpha), (\beta), (P), (Q)$!",
        "narration": "Chào mừng các em học sinh đến với Chương 4 môn Toán lớp 11: Quan hệ song song trong không gian. Nếu như ở lớp dưới chúng ta chỉ làm việc trên mặt phẳng hai chiều, thì từ bài học hôm nay, chúng ta chính thức bước vào không gian ba chiều sống động. Khái niệm nền tảng đầu tiên là mặt phẳng. Mặt phẳng như mặt bàn phẳng, mặt hồ nước phẳng lặng, nhưng trong toán học nó không có độ dày và mở rộng vô tận về mọi phía.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-900/60 to-indigo-900/40 p-4 rounded-xl border border-blue-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-lg uppercase tracking-wider">Khái niệm nền tảng</span>
      <h3 class="text-xl font-black text-blue-200">Mặt Phẳng Trong Không Gian</h3>
    </div>
    <p class="text-sm text-slate-300 leading-relaxed">
      • Mặt phẳng là một đối tượng cơ bản của hình học không gian, không có bề dày và trải rộng vô cực về mọi phía.<br/>
      • Kí hiệu: Dùng chữ cái Hy Lạp hoặc chữ cái in hoa đặt trong dấu ngoặc đơn: $(\alpha), (\beta), (P), (Q), (ABC)$.<br/>
      • Biểu diễn trên giấy: Vẽ bằng một hình bình hành hoặc một miền có đường viền gợn sóng.
    </p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-blue-400 shadow-md">
      <h4 class="font-bold text-blue-300 text-sm mb-1">📍 Điểm thuộc mặt phẳng</h4>
      <p class="text-slate-300 leading-relaxed">
        • $A \in (\alpha)$: Điểm $A$ thuộc mặt phẳng $(\alpha)$ hay $(\alpha)$ đi qua $A$.<br/>
        • $B \notin (\alpha)$: Điểm $B$ không thuộc mặt phẳng $(\alpha)$.
      </p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-indigo-400 shadow-md">
      <h4 class="font-bold text-indigo-300 text-sm mb-1">📏 Đường thẳng nằm trong mp</h4>
      <p class="text-slate-300 leading-relaxed">
        • $d \subset (\alpha)$: Mọi điểm của đường thẳng $d$ đều thuộc $(\alpha)$.<br/>
        • Nếu $A \in d$ và $B \in d$ với $A \ne B$, thì đường thẳng $AB \subset (\alpha)$.
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. CÁC TÍNH CHẤT THỪA NHẬN CỐT LÕI (TIÊN ĐỀ)",
        "subtitle": "BÀI 10 • MỤC 1 • 6 TÍNH CHẤT VÀNG XÂY DỰNG HÌNH HỌC KHÔNG GIAN",
        "mascotMode": "explaining",
        "mascotTip": r"Có một và chỉ một mặt phẳng đi qua 3 điểm không thẳng hàng!",
        "narration": "Hình học không gian được xây dựng dựa trên 6 tính chất thừa nhận cơ bản. Tính chất 1: Có một và chỉ một đường thẳng đi qua hai điểm phân biệt. Tính chất 2: Có một và chỉ một mặt phẳng đi qua ba điểm không thẳng hàng. Tính chất 3: Nếu một đường thẳng có hai điểm phân biệt cùng thuộc một mặt phẳng thì mọi điểm của đường thẳng đều thuộc mặt phẳng đó. Tính chất 4: Tồn tại bốn điểm không cùng thuộc một mặt phẳng. Tính chất 5: Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có một đường thẳng chung duy nhất đi qua điểm đó, đường thẳng đó gọi là giao tuyến. Tính chất 6: Trên mỗi mặt phẳng, các kết quả đã biết trong hình học phẳng đều đúng.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="grid grid-cols-3 gap-2.5 text-xs">
    <div class="bg-slate-800/90 p-3 rounded-lg border-t-2 border-emerald-400">
      <b class="text-emerald-300">Tính chất 1 & 2</b>
      <p class="text-slate-300 mt-1">
        • Qua 2 điểm phân biệt có duy nhất 1 đường thẳng.<br/>
        • Qua 3 điểm <b>không thẳng hàng</b> có duy nhất 1 mặt phẳng $(ABC)$.
      </p>
    </div>
    <div class="bg-slate-800/90 p-3 rounded-lg border-t-2 border-cyan-400">
      <b class="text-cyan-300">Tính chất 3 & 4</b>
      <p class="text-slate-300 mt-1">
        • Nếu $A, B \in (\alpha)$ thì toàn bộ đường thẳng $AB \subset (\alpha)$.<br/>
        • Tồn tại 4 điểm không đồng phẳng (tạo tứ diện).
      </p>
    </div>
    <div class="bg-slate-800/90 p-3 rounded-lg border-t-2 border-amber-400">
      <b class="text-amber-300">Tính chất 5 & 6</b>
      <p class="text-slate-300 mt-1">
        • Hai mp phân biệt có điểm chung thì có chung duy nhất 1 <b>giao tuyến</b> $d$.<br/>
        • Hình học phẳng nghiệm đúng trên mọi mp.
      </p>
    </div>
  </div>

  <div class="bg-slate-900/90 p-3 rounded-xl border border-indigo-500/30 text-xs">
    <b class="text-indigo-300">💡 3 Cách Xác Định Một Mặt Phẳng Duy Nhất:</b>
    <div class="grid grid-cols-3 gap-2 mt-2 text-center font-mono">
      <div class="bg-slate-800 p-2 rounded text-cyan-200">1. Qua 3 điểm không thẳng hàng: $(ABC)$</div>
      <div class="bg-slate-800 p-2 rounded text-emerald-200">2. Qua 1 điểm và 1 đt không qua điểm: $(A, d)$</div>
      <div class="bg-slate-800 p-2 rounded text-amber-200">3. Qua 2 đt cắt nhau: $(a, b)$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: ĐIỀU KIỆN ĐỒNG PHẲNG CỦA CÁC ĐIỂM",
        "subtitle": "BÀI 10 • MỤC 1 • CÂU HỎI TRẮC NGHIỆM ĐỊNH TÍNH 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Ba điểm bất kì luôn đồng phẳng vì luôn có ít nhất một mặt phẳng đi qua chúng!",
        "narration": "Chúng ta cùng làm Ví dụ 1: Trong các khẳng định sau, khẳng định nào đúng? Khẳng định A: Qua 3 điểm phân biệt bất kì luôn xác định duy nhất một mặt phẳng. Khẳng định B: Qua 4 điểm phân biệt bất kì luôn xác định duy nhất một mặt phẳng. Khẳng định C: Qua 3 điểm không thẳng hàng luôn xác định duy nhất một mặt phẳng. Khẳng định D: Qua 2 đường thẳng bất kì luôn xác định duy nhất một mặt phẳng. Các em có 15 giây chọn đáp án.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Nhận biết</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-3">
      <b>Câu 1:</b> Trong các khẳng định sau về sự xác định của mặt phẳng trong không gian, khẳng định nào sau đây là <b>đúng</b>?
    </p>

    <div class="space-y-1.5 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Qua ba điểm phân biệt bất kì luôn có duy nhất một mặt phẳng.</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> Qua bốn điểm phân biệt bất kì luôn có duy nhất một mặt phẳng.</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>C.</b> Qua ba điểm không thẳng hàng có một và chỉ một mặt phẳng.</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Qua hai đường thẳng bất kì luôn xác định duy nhất một mặt phẳng.</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian chọn đáp án:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN C CHÍNH XÁC",
        "subtitle": "BÀI 10 • MỤC 1 • PHÂN TÍCH TỪNG PHƯƠNG ÁN NÉ BẪY",
        "mascotMode": "celebrating",
        "mascotTip": r"Nếu 3 điểm thẳng hàng thì có VÔ SỐ mặt phẳng đi qua đường thẳng chứa chúng!",
        "narration": "Hết thời gian. Đáp án đúng là C: Qua ba điểm không thẳng hàng có một và chỉ một mặt phẳng. Tại sao phương án A sai? Vì nếu ba điểm thẳng hàng, chúng sẽ nằm trên cùng một đường thẳng d, và khi đó có vô số mặt phẳng chứa đường thẳng d như các trang của một cuốn sách mở. Phương án B sai vì bốn điểm có thể tạo thành một tứ diện không cùng thuộc một mặt phẳng. Phương án D sai vì hai đường thẳng chéo nhau sẽ không cùng thuộc bất kì mặt phẳng nào.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Lời giải chi tiết Ví dụ 1:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• <b>Phương án A sai:</b> Nếu 3 điểm phân biệt thẳng hàng thì có vô số mặt phẳng đi qua chúng (chùm mặt phẳng quanh trục).</p>
      <p>• <b>Phương án B sai:</b> 4 đỉnh của một tứ diện không bao giờ đồng phẳng.</p>
      <p>• <b>Phương án C đúng:</b> Theo tính chất thừa nhận 2, qua 3 điểm <b>không thẳng hàng</b> xác định duy nhất 1 mặt phẳng $(ABC)$.</p>
      <p>• <b>Phương án D sai:</b> Hai đường thẳng chéo nhau không cùng nằm trong bất kì mặt phẳng nào.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án C.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. QUY TẮC VẼ HÌNH KHÔNG GIAN CHUẨN BỘ GD&ĐT",
        "subtitle": "BÀI 10 • MỤC 1 • NÉT LIỀN - NÉT ĐỨT VÀ QUAN HỆ SONG SONG",
        "mascotMode": "explaining",
        "mascotTip": r"Cạnh nhìn thấy vẽ nét liền (solid), cạnh bị che khuất bắt buộc vẽ nét đứt (dashed)!",
        "narration": "Để học tốt hình học không gian, kỹ năng vẽ hình đúng chuẩn là điều kiện tiên quyết. Các em cần tuân thủ nghiêm ngặt 4 nguyên tắc vẽ hình sau. Nguyên tắc 1: Cạnh nhìn thấy được vẽ bằng nét liền; cạnh bị che khuất bắt buộc vẽ bằng nét đứt đoạn. Nguyên tắc 2: Hình biểu diễn của đường thẳng là đường thẳng, đoạn thẳng là đoạn thẳng. Nguyên tắc 3: Hai đường thẳng song song trong thực tế thì trên hình biểu diễn bắt buộc phải song song. Tỉ số của hai đoạn thẳng cùng nằm trên một đường thẳng hoặc hai đường thẳng song song phải được bảo toàn. Nguyên tắc 4: Hình biểu diễn của tam giác, hình bình hành, hình vuông hay hình chữ nhật nói chung đều được vẽ bằng hình bình hành hoặc tam giác tương ứng.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-teal-900/60 to-emerald-900/40 p-4 rounded-xl border border-teal-500/30 text-xs">
    <div class="font-bold text-teal-300 text-sm mb-2">4 Quy Tắc Biểu Diễn Hình Không Gian Chuẩn Mực</div>
    <div class="grid grid-cols-2 gap-3">
      <div class="bg-slate-800 p-2.5 rounded-lg border-l-4 border-emerald-400">
        <b class="text-emerald-300">1. Nét liền & Nét đứt</b>
        <p class="text-slate-300 mt-1">• Đường nhìn thấy: Vẽ bằng <b>nét liền</b> (solid).<br/>• Đường bị che khuất: Vẽ bằng <b>nét đứt</b> (dashed).</p>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-l-4 border-cyan-400">
        <b class="text-cyan-300">2. Bảo toàn tính song song & Tỉ số</b>
        <p class="text-slate-300 mt-1">• Song song vẽ thành song song.<br/>• Trung điểm của đoạn thẳng vẽ thành trung điểm.</p>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-l-4 border-purple-400">
        <b class="text-purple-300">3. Không bảo toàn độ lớn góc</b>
        <p class="text-slate-300 mt-1">• Góc vuông trong không gian thường vẽ thành góc nhọn hoặc góc tù.</p>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-l-4 border-amber-400">
        <b class="text-amber-300">4. Đáy đa giác</b>
        <p class="text-slate-300 mt-1">• Hình vuông, hình chữ nhật, hình thoi đều biểu diễn bằng <b>hình bình hành</b>.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: SỐ MẶT PHẲNG TẠO BỞI 4 ĐIỂM KHÔNG ĐỒNG PHẲNG",
        "subtitle": "BÀI 10 • MỤC 1 • BÀI TOÁN ĐẾM MẶT PHẲNG 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Cứ 3 điểm không thẳng hàng tạo thành 1 mặt phẳng: $C_4^3 = 4$ mặt phẳng!",
        "narration": "Ví dụ 2: Cho 4 điểm A, B, C, D không đồng phẳng. Hỏi có thể tạo ra bao nhiêu mặt phẳng phân biệt đi qua ít nhất 3 trong 4 điểm đã cho? Phương án A: 1 mặt phẳng; Phương án B: 3 mặt phẳng; Phương án C: 4 mặt phẳng; Phương án D: 6 mặt phẳng. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-3">
      <b>Câu 2:</b> Cho bốn điểm $A, B, C, D$ không cùng nằm trong một mặt phẳng. Có bao nhiêu mặt phẳng phân biệt được tạo thành từ bốn điểm đó?
    </p>

    <div class="grid grid-cols-4 gap-2 text-xs font-mono text-center">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> 1 mặt phẳng</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> 3 mặt phẳng</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>C.</b> 4 mặt phẳng</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> 6 mặt phẳng</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian tính toán:</span>
    </div>
    <span class="text-base font-black text-cyan-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. LỜI GIẢI VÍ DỤ 2: 4 MẶT CỦA TỨ DIỆN $ABCD$",
        "subtitle": "BÀI 10 • MỤC 1 • CÔNG THỨC TỔ HỢP $C_n^3$ XÁC ĐỊNH MẶT PHẲNG",
        "mascotMode": "celebrating",
        "mascotTip": r"4 mặt phẳng là $(ABC), (ABD), (ACD), (BCD)$ chính là 4 mặt của hình tứ diện!",
        "narration": "Hết thời gian. Đáp án đúng là C: 4 mặt phẳng. Vì 4 điểm A, B, C, D không đồng phẳng nên không có 3 điểm nào thẳng hàng. Cứ chọn ra 3 điểm trong 4 điểm ta sẽ xác định được duy nhất một mặt phẳng. Số mặt phẳng được tạo thành chính bằng số tổ hợp chập 3 của 4 phần tử: C 4 chập 3 bằng 4. Đó chính là 4 mặt: mp ABC, mp ABD, mp ACD và mp BCD của hình tứ diện ABCD.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40 text-xs">
    <div class="text-xs font-bold text-cyan-300 uppercase mb-2">Lời giải chi tiết Ví dụ 2:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• Do bốn điểm $A, B, C, D$ không đồng phẳng nên không có ba điểm nào thẳng hàng.</p>
      <p>• Cứ 3 điểm không thẳng hàng xác định duy nhất 1 mặt phẳng.</p>
      <p>• Số mặt phẳng tạo thành: $C_4^3 = \frac{4!}{3! \cdot 1!} = 4$ (mặt phẳng).</p>
      <div class="p-2 bg-slate-900 rounded font-mono text-center text-emerald-300 font-bold my-1">
        Bốn mặt phẳng: $(ABC), (ABD), (ACD), (BCD)$
      </div>
      <p class="text-emerald-300 font-bold font-mono">➔ Chọn đáp án C: 4 mặt phẳng.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. KỸ NĂNG CHỨNG MINH 3 ĐIỂM THẲNG HÀNG TRONG KHÔNG GIAN",
        "subtitle": "BÀI 10 • MỤC 1 • PHƯƠNG PHÁP ĐƯỜNG THẲNG GIAO TUYẾN KINH ĐIỂN",
        "mascotMode": "explaining",
        "mascotTip": r"Muốn chứng minh 3 điểm thẳng hàng: chứng minh chúng cùng thuộc 2 mặt phẳng phân biệt!",
        "narration": "Một trong những bài toán suy luận hình học không gian kinh điển là chứng minh 3 điểm thẳng hàng. Phương pháp chuẩn mực nhất: Ta chỉ ra rằng 3 điểm đó đều đồng thời thuộc về hai mặt phẳng phân biệt (P) và (Q). Theo tính chất thừa nhận số 5, giao của hai mặt phẳng phân biệt là một đường thẳng giao tuyến duy nhất d. Vì cả 3 điểm cùng thuộc cả (P) và (Q) nên chúng bắt buộc phải cùng nằm trên đường thẳng giao tuyến d, suy ra 3 điểm thẳng hàng.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-indigo-900/60 to-purple-900/40 p-4 rounded-xl border border-indigo-500/30 text-xs">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded uppercase">Phương pháp kinh điển</span>
      <h3 class="text-base font-bold text-indigo-200">Chứng Minh Ba Điểm Thẳng Hàng Trong Không Gian</h3>
    </div>
    <div class="bg-slate-800/80 p-3 rounded-lg border-l-4 border-indigo-400 mt-2 space-y-1 text-slate-300">
      <p>Để chứng minh ba điểm $M, N, P$ thẳng hàng:</p>
      <p>• <b>Bước 1:</b> Tìm hai mặt phẳng phân biệt $(\alpha)$ và $(\beta)$ sao cho $(\alpha) \cap (\beta) = d$.</p>
      <p>• <b>Bước 2:</b> Chứng minh $M \in (\alpha) \cap (\beta)$, $N \in (\alpha) \cap (\beta)$ và $P \in (\alpha) \cap (\beta)$.</p>
      <p>• <b>Bước 3:</b> Kết luận $M, N, P$ cùng thuộc giao tuyến $d \implies M, N, P$ thẳng hàng.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: CHỨNG MINH 3 ĐIỂM THẲNG HÀNG TRONG HÌNH CHÓP",
        "subtitle": "BÀI 10 • MỤC 1 • ÁP DỤNG TÍNH CHẤT GIAO TUYẾN 30 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"$I = AB \cap CD, J = AD \cap BC, K = AC \cap BD$. Điểm nào thuộc giao tuyến?",
        "narration": "Ví dụ 3: Cho hình chóp S.ABCD có đáy ABCD là một hình thang với hai đáy AB và CD không song song. Gọi I là giao điểm của hai đường thẳng AD và BC; gọi S là đỉnh chóp. Hỏi ba điểm S, I và giao điểm của hai mặt phẳng SAB và SCD có quan hệ gì? Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là tứ giác lồi sao cho các cạnh đối $AB$ và $CD$ cắt nhau tại $E$; $AD$ và $BC$ cắt nhau tại $F$.
    </p>

    <div class="bg-slate-900 p-2.5 rounded text-xs text-slate-300 space-y-1">
      <p>• Giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng nào?</p>
      <p>• Giao tuyến của $(SAD)$ và $(SBC)$ là đường thẳng nào?</p>
    </div>

    <p class="text-xs text-indigo-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Xác định hai giao tuyến trên và giải thích vì sao $S, E$ thuộc giao tuyến thứ nhất.
    </p>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian suy nghĩ:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. LỜI GIẢI VÍ DỤ 3: GIAO TUYẾN $SE$ VÀ $SF$",
        "subtitle": "BÀI 10 • MỤC 1 • TÌM 2 ĐIỂM CHUNG CỦA HAI MẶT PHẲNG",
        "mascotMode": "celebrating",
        "mascotTip": r"$S$ là điểm chung 1; $E = AB \cap CD$ là điểm chung 2 $\Rightarrow (SAB) \cap (SCD) = SE$!",
        "narration": "Hết thời gian. Xét hai mặt phẳng SAB và SCD: Điểm thứ nhất là đỉnh S hiển nhiên là điểm chung. Điểm thứ hai là E: vì E là giao điểm của AB và CD trong mặt phẳng đáy, mà AB thuộc SAB và CD thuộc SCD, nên E vừa thuộc SAB vừa thuộc SCD. Vậy E là điểm chung thứ hai. Nối S với E, ta được đường thẳng SE chính là giao tuyến của SAB và SCD. Hoàn toàn tương tự, F là giao điểm của AD và BC nên F là điểm chung của SAD và SBC. Do đó giao tuyến của SAD và SBC chính là đường thẳng SF.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40 text-xs">
    <div class="text-xs font-bold text-indigo-300 uppercase mb-2">Lời giải chi tiết Ví dụ 3:</div>
    <div class="space-y-2 text-slate-300">
      <div class="p-2 bg-slate-900 rounded border border-emerald-500/30">
        <b class="text-emerald-300">1. Giao tuyến $(SAB) \cap (SCD) = SE$:</b>
        <p class="font-mono mt-1 text-slate-200">
          • $S \in (SAB) \cap (SCD)$ (điểm chung thứ nhất).<br/>
          • $E = AB \cap CD \implies \begin{cases} E \in AB \subset (SAB) \\ E \in CD \subset (SCD) \end{cases} \implies E \in (SAB) \cap (SCD)$.<br/>
          ➔ Giao tuyến là đường thẳng <b>$SE$</b>.
        </p>
      </div>

      <div class="p-2 bg-slate-900 rounded border border-cyan-500/30">
        <b class="text-cyan-300">2. Giao tuyến $(SAD) \cap (SBC) = SF$:</b>
        <p class="font-mono mt-1 text-slate-200">
          • $S$ là điểm chung thứ nhất.<br/>
          • $F = AD \cap BC \implies F$ là điểm chung thứ hai.<br/>
          ➔ Giao tuyến là đường thẳng <b>$SF$</b>.
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: BÀI TOÁN CÁI KÊ CHÂN 3 CHÂN VÀ 4 CHÂN",
        "subtitle": "BÀI 10 • MỤC 1 • ỨNG DỤNG THỰC TẾ CỦA TIÊN ĐỀ MẶT PHẲNG",
        "mascotMode": "thinking",
        "mascotTip": r"Vì sao ghế 3 chân luôn đứng vững trên mọi mặt đất mấp mô nhưng bàn 4 chân lại bị khập khiễng?",
        "narration": "Ví dụ 4 là câu hỏi giải thích hiện tượng thực tế đời sống. Trong đời sống, các em thấy chân máy ảnh thường có 3 chân, ghế đẩu 3 chân luôn đứng vững chãi trên mọi bề mặt gồ ghề không bao giờ bị khập khiễng, trong khi bàn hoặc ghế 4 chân đặt trên sân gạch gồ ghề lại rất dễ bị bấp bênh. Dựa vào các tính chất thừa nhận của hình học không gian, em hãy giải thích hiện tượng thú vị này. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 4 (30s)</span>
      <span class="text-xs text-slate-400">Ứng dụng thực tiễn</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      <b>Câu hỏi thực tế:</b> Tại sao chân máy ảnh (tripod) và kiềng bếp than luôn được chế tạo có <b>3 chân</b> thay vì 4 chân?
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-900 p-2.5 rounded border border-emerald-500/30">
        <b class="text-emerald-300">Ghế / Kiềng 3 chân:</b>
        <p class="text-slate-300 mt-1">Đầu mút 3 chân tạo thành 3 điểm trong không gian.</p>
      </div>
      <div class="bg-slate-900 p-2.5 rounded border border-rose-500/30">
        <b class="text-rose-300">Bàn / Ghế 4 chân:</b>
        <p class="text-slate-300 mt-1">Đầu mút 4 chân tạo thành 4 điểm trong không gian.</p>
      </div>
    </div>

    <p class="text-xs text-amber-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Dùng tính chất xác định mặt phẳng để giải thích tính vững chắc của kiềng 3 chân.
    </p>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian suy nghĩ:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 1",
        "subtitle": "BÀI 10 • MỤC 1 • TOÁN HỌC TRONG ĐỜI SỐNG HÀNG NGÀY",
        "mascotMode": "celebrating",
        "mascotTip": r"3 điểm bất kì luôn cùng thuộc một mặt phẳng, còn 4 điểm chưa chắc đồng phẳng!",
        "narration": "Chúc mừng các em đã tìm ra câu trả lời. Theo Tính chất thừa nhận số 2: Ba điểm không thẳng hàng luôn luôn cùng thuộc một mặt phẳng duy nhất. Do đó, ba đầu mút chân của kiềng hoặc chân máy ảnh luôn luôn nằm trọn vẹn trong cùng một mặt phẳng tiếp xúc với mặt đất, dù mặt đất có mấp mô nghiêng ngả thế nào đi nữa, kiềng vẫn tiếp đất đồng thời cả 3 điểm và đứng vững chãi không bị kênh. Ngược lại, 4 điểm bất kì nói chung không đồng phẳng, nên khi mặt sàn không tuyệt đối phẳng, chân thứ 4 sẽ bị hẫng gây ra hiện tượng khập khiễng bấp bênh. Như vậy chúng ta đã kết thúc Mục 1.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-1">Giải thích khoa học toán học:</div>
    <ul class="text-slate-300 space-y-1">
      <li>• <b>Ba điểm không thẳng hàng luôn xác định 1 mặt phẳng duy nhất:</b> Do đó 3 đầu mút chân kiềng luôn luôn cùng nằm trên 1 mặt phẳng tiếp xúc mặt đất ➔ <b>Không bao giờ bị khập khiễng!</b></li>
      <li>• <b>Bốn điểm nói chung không đồng phẳng:</b> Khi mặt đất gồ ghề, điểm thứ tư không nằm trên mặt phẳng qua 3 điểm kia ➔ <b>Bị bấp bênh.</b></li>
    </ul>

    <div class="mt-2.5 bg-gradient-to-r from-blue-950 to-indigo-950 p-2.5 rounded-lg border border-blue-500/30">
      <b class="text-blue-200">⭐ TỔNG KẾT MỤC 1:</b>
      <p class="text-slate-300 mt-1">
        Nắm chắc 6 tính chất thừa nhận, 3 cách xác định mặt phẳng, nguyên tắc vẽ nét liền nét đứt và kỹ năng tìm giao tuyến bằng 2 điểm chung!
      </p>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 2: HÌNH CHÓP, HÌNH TỨ DIỆN & TÌM GIAO TUYẾN CỦA HAI MẶT PHẲNG
# ==============================================================================
BAI10_MUC2_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. ĐỊNH NGHĨA HÌNH CHÓP VÀ HÌNH TỨ DIỆN",
        "subtitle": "BÀI 10 • MỤC 2 • HAI KHỐI HÌNH ĐA DIỆN CƠ BẢN NHẤT",
        "mascotMode": "pointer",
        "mascotTip": r"Hình chóp tam giác có 4 mặt và 4 đỉnh chính là hình tứ diện!",
        "narration": "Chào các em đến với Mục 2: Hình chóp, hình tứ diện và phương pháp tìm giao tuyến của hai mặt phẳng. Trong không gian, hình chóp được tạo thành từ một đa giác đáy nằm trong một mặt phẳng và một đỉnh S nằm ngoài mặt phẳng đáy đó. Nối đỉnh S với các đỉnh của đa giác đáy, ta được các mặt bên là những tam giác. Trường hợp đặc biệt khi đáy là tam giác, ta có hình chóp tam giác, còn gọi là hình tứ diện, gồm đúng 4 mặt tam giác và 4 đỉnh.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-indigo-900/60 to-purple-900/40 p-4 rounded-xl border border-indigo-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-lg uppercase tracking-wider">Cấu trúc đa diện</span>
      <h3 class="text-xl font-black text-indigo-200">Hình Chóp & Hình Tứ Diện</h3>
    </div>
    <p class="text-sm text-slate-300 leading-relaxed">
      • <b>Hình chóp $S.A_1A_2\dots A_n$:</b> Đỉnh $S$, đáy là đa giác $A_1A_2\dots A_n$. Các mặt bên $(SA_1A_2), (SA_2A_3)\dots$ là tam giác.<br/>
      • <b>Hình tứ diện $ABCD$:</b> Hình gồm 4 đỉnh không đồng phẳng và 4 mặt tam giác $(ABC), (ABD), (ACD), (BCD)$.
    </p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3 rounded-lg border-l-4 border-indigo-400">
      <b class="text-indigo-300">Đặc điểm hình chóp $S.ABCD$</b>
      <p class="text-slate-300 mt-1">
        • Đỉnh: $S$. Đáy: Tứ giác $ABCD$.<br/>
        • Cạnh bên: $SA, SB, SC, SD$.<br/>
        • Cạnh đáy: $AB, BC, CD, DA$.
      </p>
    </div>
    <div class="bg-slate-800/80 p-3 rounded-lg border-l-4 border-purple-400">
      <b class="text-purple-300">Đặc điểm hình tứ diện $ABCD$</b>
      <p class="text-slate-300 mt-1">
        • Bất kì đỉnh nào cũng có thể coi là đỉnh chóp.<br/>
        • Hai cạnh không có điểm chung gọi là <b>hai cạnh đối diện</b> (VD: $AB$ và $CD$).
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. PHƯƠNG PHÁP TÌM GIAO TUYẾN CỦA HAI MẶT PHẲNG",
        "subtitle": "BÀI 10 • MỤC 2 • BÍ QUYẾT TÌM 2 ĐIỂM CHUNG PHÂN BIỆT",
        "mascotMode": "explaining",
        "mascotTip": r"Muốn tìm giao tuyến của $(\alpha)$ và $(\beta)$: Chỉ ra 2 điểm chung phân biệt $A, B \implies (\alpha) \cap (\beta) = AB$!",
        "narration": "Giao tuyến của hai mặt phẳng phân biệt là bài toán cơ sở và xuyên suốt toàn bộ chương trình hình học không gian. Để tìm giao tuyến của mặt phẳng alpha và mặt phẳng beta, phương pháp gốc rễ là tìm hai điểm chung phân biệt A và B của hai mặt phẳng đó. Đường thẳng đi qua hai điểm A và B chính là giao tuyến cần tìm. Điểm chung thứ nhất thường rất dễ nhìn thấy, chính là đỉnh chung đã cho. Điểm chung thứ hai thường là giao điểm của hai đường thẳng không song song cùng nằm trong một mặt phẳng thứ ba.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-900/90 p-3.5 rounded-xl border border-cyan-500/40 text-xs">
    <div class="font-bold text-cyan-300 text-sm mb-2">Quy Trình 3 Bước Tìm Giao Tuyến Chuẩn Mực</div>
    <div class="grid grid-cols-3 gap-2.5 text-center">
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-400">
        <b class="text-emerald-300">Bước 1: Điểm chung thứ 1</b>
        <p class="text-slate-300 mt-1">Tìm điểm chung dễ thấy (thường là đỉnh chóp $S$).</p>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-cyan-400">
        <b class="text-cyan-300">Bước 2: Điểm chung thứ 2</b>
        <p class="text-slate-300 mt-1">Tìm 2 đt $a \subset (\alpha)$ và $b \subset (\beta)$ cùng thuộc 1 mp thứ 3 sao cho $a \cap b = M$.</p>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-purple-400">
        <b class="text-purple-300">Bước 3: Kết luận giao tuyến</b>
        <p class="text-slate-300 mt-1">Nối 2 điểm chung lại: $(\alpha) \cap (\beta) = SM$.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: TÌM GIAO TUYẾN TRONG HÌNH CHÓP ĐÁY TỨ GIÁC",
        "subtitle": "BÀI 10 • MỤC 2 • BÀI TOÁN TÌM GIAO TUYẾN 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"$O = AC \cap BD$. Điểm chung thứ nhất là $S$, điểm chung thứ hai là $O$!",
        "narration": "Ví dụ 1: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O. Giao tuyến của hai mặt phẳng SAC và SBD là đường thẳng nào sau đây? Phương án A: SO; Phương án B: SA; Phương án C: SB; Phương án D: SC. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Nhận biết</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-3">
      <b>Câu 1:</b> Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$ là:
    </p>

    <div class="grid grid-cols-4 gap-2 text-xs font-mono text-center">
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300 cursor-pointer"><b>A.</b> $SO$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 cursor-pointer"><b>B.</b> $SA$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 cursor-pointer"><b>C.</b> $SB$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 cursor-pointer"><b>D.</b> $SC$</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian chọn đáp án:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. LỜI GIẢI VÍ DỤ 1: GIAO TUYẾN $SO$ CHÍNH XÁC",
        "subtitle": "BÀI 10 • MỤC 2 • ĐIỂM CHUNG THỨ HAI LÀ TÂM ĐÁY $O$",
        "mascotMode": "celebrating",
        "mascotTip": r"$S$ thuộc cả 2 mp; $O = AC \cap BD$ thuộc cả 2 mp $\implies (SAC) \cap (SBD) = SO$!",
        "narration": "Hết thời gian. Đáp án chính xác là A: đường thẳng SO. Lời giải cực kì ngắn gọn và mẫu mực: Đỉnh S là điểm chung hiển nhiên của hai mặt phẳng SAC và SBD. Trong mặt phẳng đáy ABCD, hai đường chéo AC và BD cắt nhau tại tâm O. Vì O thuộc AC nên O thuộc mặt phẳng SAC; vì O thuộc BD nên O thuộc mặt phẳng SBD. Do đó O chính là điểm chung thứ hai. Kết luận giao tuyến của SAC và SBD là đường thẳng SO.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Lời giải chi tiết Ví dụ 1:</div>
    <div class="space-y-1.5 text-slate-300 font-mono">
      <p>• Điểm chung thứ nhất: $S \in (SAC) \cap (SBD)$.</p>
      <p>• Trong mp đáy $(ABCD)$: Gọi $O = AC \cap BD$.</p>
      <p>  Ta có: $\begin{cases} O \in AC \subset (SAC) \implies O \in (SAC) \\ O \in BD \subset (SBD) \implies O \in (SBD) \end{cases} \implies O \in (SAC) \cap (SBD)$.</p>
      <p>• Do đó: $(SAC) \cap (SBD) = SO$.</p>
      <div class="mt-2 text-emerald-300 font-bold font-sans">➔ Chọn đáp án A: Đường thẳng $SO$.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. PHƯƠNG PHÁP TÌM GIAO ĐIỂM ĐƯỜNG THẲNG VÀ MẶT PHẲNG",
        "subtitle": "BÀI 10 • MỤC 2 • KỸ THUẬT MẶT PHẲNG PHỤ CHỨA ĐƯỜNG THẲNG",
        "mascotMode": "explaining",
        "mascotTip": r"Muốn tìm $d \cap (\alpha)$: Chọn mp phụ $(\beta) \supset d$, tìm $a = (\alpha) \cap (\beta)$, rồi lấy $M = d \cap a$!",
        "narration": "Để tìm giao điểm của đường thẳng d với mặt phẳng alpha, nếu không nhìn thấy sẵn đường thẳng nào trong alpha cắt d thì ta dùng phương pháp mặt phẳng phụ gồm 3 bước thần thánh. Bước 1: Chọn một mặt phẳng phụ beta chứa đường thẳng d. Bước 2: Tìm giao tuyến a của mặt phẳng phụ beta với mặt phẳng alpha đã cho. Bước 3: Trong mặt phẳng beta, lấy giao điểm M của đường thẳng d và giao tuyến a. Điểm M vừa tìm được chính là giao điểm của d với mặt phẳng alpha.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-900/60 to-indigo-900/40 p-4 rounded-xl border border-purple-500/30 text-xs">
    <div class="font-bold text-purple-300 text-sm mb-2">Quy Trình 3 Bước Tìm Giao Điểm $d \cap (\alpha)$</div>
    <div class="grid grid-cols-3 gap-2.5 text-center">
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-cyan-400">
        <b class="text-cyan-300">1. Chọn mp phụ $(\beta)$</b>
        <p class="text-slate-300 mt-1">Tìm một mặt phẳng $(\beta)$ thuận lợi chứa đường thẳng $d$.</p>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-400">
        <b class="text-emerald-300">2. Tìm giao tuyến $a$</b>
        <p class="text-slate-300 mt-1">Xác định giao tuyến $a = (\alpha) \cap (\beta)$.</p>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-amber-400">
        <b class="text-amber-300">3. Cắt trong $(\beta)$</b>
        <p class="text-slate-300 mt-1">Trong $(\beta)$, lấy $M = d \cap a \implies M = d \cap (\alpha)$.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: TÌM GIAO ĐIỂM TRONG HÌNH TỨ DIỆN",
        "subtitle": "BÀI 10 • MỤC 2 • THỰC CHIẾN TÌM GIAO ĐIỂM $d \\cap (\\alpha)$",
        "mascotMode": "thinking",
        "mascotTip": r"Mặt phẳng phụ chứa $MN$ là $(SBD)$ hoặc $(ABD)$!",
        "narration": "Ví dụ 2: Cho tứ diện ABCD. Gọi M và N lần lượt là trung điểm của AC và BC. Trên đoạn BD lấy điểm P sao cho P không phải là trung điểm của BD. Giao điểm của đường thẳng CD với mặt phẳng MNP là điểm nào? Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-3">
      <b>Câu 2:</b> Cho tứ diện $ABCD$. Lấy điểm $M$ trên $AB$, $N$ trên $AC$ sao cho $MN$ không song song với $BC$. Giao điểm của đường thẳng $MN$ với mặt phẳng $(BCD)$ là:
    </p>

    <div class="space-y-1.5 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>A.</b> Giao điểm của $MN$ và $BC$ trong mặt phẳng $(ABC)$.</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> Giao điểm của $MN$ và $CD$ trong mặt phẳng $(ACD)$.</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> Giao điểm của $MN$ và $BD$ trong mặt phẳng $(ABD)$.</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Điểm $M$.</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian chọn đáp án:</span>
    </div>
    <span class="text-base font-black text-cyan-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. LỜI GIẢI VÍ DỤ 2: ĐÁP ÁN A CHÍNH XÁC",
        "subtitle": "BÀI 10 • MỤC 2 • HAI ĐƯỜNG THẲNG CÙNG NẰM TRONG MẶT ĐÁY $(ABC)$",
        "mascotMode": "celebrating",
        "mascotTip": r"$MN$ và $BC$ cùng thuộc $(ABC)$ và không song song nên cắt nhau tại $I \in (BCD)$!",
        "narration": "Hết thời gian. Đáp án đúng là A. Ta thấy cả MN và BC đều cùng nằm trong mặt phẳng ABC. Vì MN không song song với BC nên trong mặt phẳng ABC, đường thẳng MN chắc chắn cắt đường thẳng BC tại một điểm I. Điểm I thuộc BC mà BC lại nằm trong mặt phẳng BCD, nên I thuộc mặt phẳng BCD. Do đó I chính là giao điểm của đường thẳng MN với mặt phẳng BCD.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40 text-xs">
    <div class="text-xs font-bold text-cyan-300 uppercase mb-2">Lời giải chi tiết Ví dụ 2:</div>
    <div class="space-y-1.5 text-slate-300 font-mono">
      <p>• Xét trong mặt phẳng $(ABC)$: $M \in AB, N \in AC \implies MN \subset (ABC)$.</p>
      <p>• Vì $MN$ không song song với $BC$ nên gọi $I = MN \cap BC$.</p>
      <p>• Khi đó: $\begin{cases} I \in MN \\ I \in BC \subset (BCD) \implies I \in (BCD) \end{cases}$.</p>
      <p>• Vậy: $MN \cap (BCD) = I$.</p>
      <div class="mt-2 text-emerald-300 font-bold font-sans">➔ Chọn đáp án A.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. KHÁI NIỆM THIẾT DIỆN CỦA HÌNH CHÓP",
        "subtitle": "BÀI 10 • MỤC 2 • MẶT CẮT ĐA GIÁC KHI MẶT PHẲNG CẮT HÌNH KHỐI",
        "mascotMode": "explaining",
        "mascotTip": r"Thiết diện là đa giác tạo bởi các đoạn giao tuyến của mặt phẳng $(\alpha)$ với các mặt của hình chóp!",
        "narration": "Khái niệm quan trọng tiếp theo là Thiết diện. Khi một mặt phẳng alpha cắt các mặt của một hình chóp, nó sẽ cắt các mặt bên và mặt đáy theo các đoạn thẳng giao tuyến. Các đoạn giao tuyến này khép kín lại tạo thành một đa giác phẳng, đa giác đó được gọi là thiết diện của hình chóp cắt bởi mặt phẳng alpha. Để tìm thiết diện, ta lần lượt tìm giao tuyến của alpha với từng mặt của hình chóp cho đến khi các đoạn giao tuyến khép kín thành một đa giác kín.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-900/90 p-3.5 rounded-xl border border-amber-500/40 text-xs">
    <div class="font-bold text-amber-300 text-sm mb-2 flex items-center gap-2">
      <span>📐</span> <span>Khái Niệm & Bản Chất Của Thiết Diện</span>
    </div>
    <p class="text-slate-300 leading-relaxed">
      • <b>Thiết diện (mặt cắt):</b> Là đa giác giới hạn bởi các đoạn giao tuyến của mặt phẳng $(\alpha)$ với các mặt của hình chóp (hoặc tứ diện).<br/>
      • <b>Nguyên tắc:</b> Tìm lần lượt các đoạn giao tuyến nằm trên từng mặt, kéo dài để tìm điểm cắt mới cho đến khi tạo thành một <b>chu trình đa giác khép kín</b>.
    </p>
    <div class="grid grid-cols-2 gap-2 mt-2">
      <div class="bg-slate-800 p-2 rounded border border-slate-700">
        <b class="text-cyan-300">Thiết diện tứ diện:</b> Chỉ có thể là <b>tam giác</b> hoặc <b>tứ giác</b>.
      </div>
      <div class="bg-slate-800 p-2 rounded border border-slate-700">
        <b class="text-emerald-300">Thiết diện chóp tứ giác:</b> Có thể là <b>tam giác, tứ giác hoặc ngũ giác</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: TÌM THIẾT DIỆN CỦA TỨ DIỆN $ABCD$",
        "subtitle": "BÀI 10 • MỤC 2 • BÀI TOÁN XÁC ĐỊNH MẶT CẮT ĐA GIÁC 30 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Mặt phẳng $(MNP)$ cắt $(ABC)$ theo $MN$, cắt $(ABD)$ theo $MP$, cắt $(BCD)$ theo $NP$!",
        "narration": "Ví dụ 3: Cho tứ diện ABCD. Lấy điểm M thuộc đoạn AB, điểm N thuộc đoạn AC và điểm P thuộc đoạn BD sao cho MP không song song với AD. Hãy xác định hình dạng thiết diện của tứ diện ABCD cắt bởi mặt phẳng MNP. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Cho tứ diện $ABCD$. Điểm $M \in AB$, $N \in AC$, $P \in BD$ sao cho $MN$ cắt $BC$ tại $E$, $MP$ cắt $AD$ tại $F$.
    </p>

    <div class="bg-slate-900 p-2.5 rounded text-xs text-slate-300 space-y-1">
      <p>• Xác định giao tuyến của $(MNP)$ với các mặt của tứ diện $ABCD$.</p>
      <p>• Cho biết thiết diện của tứ diện cắt bởi mặt phẳng $(MNP)$ là hình gì?</p>
    </div>

    <p class="text-xs text-indigo-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Xác định đa giác thiết diện (tam giác hay tứ giác).
    </p>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian suy nghĩ:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. LỜI GIẢI VÍ DỤ 3: THIẾT DIỆN LÀ TỨ GIÁC $MNQP$",
        "subtitle": "BÀI 10 • MỤC 2 • KỸ THUẬT TÌM ĐIỂM CẮT TRÊN CẠNH $CD$",
        "mascotMode": "celebrating",
        "mascotTip": r"$E = MN \cap BC \implies EP \cap CD = Q \implies$ Thiết diện là tứ giác $MNQP$!",
        "narration": "Hết thời gian. Ta tìm các đoạn giao tuyến như sau: Trên mặt ABC, giao tuyến là đoạn MN. Trên mặt ABD, giao tuyến là đoạn MP. Để tìm giao tuyến với mặt BCD, ta kéo dài MN cắt BC tại E. Trong mặt phẳng BCD, nối E với P, đường thẳng EP cắt cạnh CD tại điểm Q. Khi đó đoạn giao tuyến trên mặt BCD là PQ; và đoạn giao tuyến trên mặt ACD là QN. Các đoạn giao tuyến khép kín lại thành tứ giác MNQP. Vậy thiết diện cần tìm là tứ giác MNQP.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40 text-xs">
    <div class="text-xs font-bold text-indigo-300 uppercase mb-2">Lời giải chi tiết Ví dụ 3:</div>
    <div class="space-y-1.5 text-slate-300 font-mono">
      <p>• $(MNP) \cap (ABC) = MN$.</p>
      <p>• $(MNP) \cap (ABD) = MP$.</p>
      <p>• Trong $(ABC)$: Gọi $E = MN \cap BC \implies E \in (MNP) \cap (BCD)$.</p>
      <p>• Trong $(BCD)$: Nối $EP$ cắt cạnh $CD$ tại $Q \implies Q \in (MNP)$.</p>
      <p>• Khi đó: $(MNP) \cap (BCD) = PQ$; $(MNP) \cap (ACD) = QN$.</p>
      <div class="p-2 bg-slate-900 rounded text-center text-emerald-300 font-bold my-1">
        Bốn đoạn giao tuyến khép kín: $MN, NQ, QP, PM$.
      </div>
      <p class="text-emerald-300 font-bold font-sans">➔ Kết luận: Thiết diện là <b>tứ giác $MNQP$</b>.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: THIẾT DIỆN CẮT BỞI MẶT PHẲNG QUA 3 ĐIỂM",
        "subtitle": "BÀI 10 • MỤC 2 • BÀI TOÁN HÌNH CHÓP TỨ GIÁC $S.ABCD$",
        "mascotMode": "thinking",
        "mascotTip": r"Mặt phẳng đi qua điểm trên cạnh bên và đường chéo đáy!",
        "narration": "Ví dụ 4: Cho hình chóp S.ABCD có đáy là tứ giác lồi. Lấy điểm M là một điểm nằm trong tam giác SCD. Hãy xác định giao tuyến của mặt phẳng SBM với mặt phẳng SAC. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 4 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng cao</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là tứ giác lồi ($AB$ không song song $CD$). Điểm $M$ nằm trong $\triangle SCD$.
    </p>

    <div class="bg-slate-900 p-2.5 rounded text-xs text-slate-300 space-y-1">
      <p>• Trong $(SCD)$, kéo dài $SM$ cắt $CD$ tại $N$.</p>
      <p>• Khi đó $(SBM)$ chính là mặt phẳng $(SBN)$.</p>
    </div>

    <p class="text-xs text-amber-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Tìm giao tuyến của $(SBM)$ và $(SAC)$.
    </p>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian suy nghĩ:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 2",
        "subtitle": "BÀI 10 • MỤC 2 • KỸ THUẬT MỞ RỘNG MẶT PHẲNG ĐỈNH CAO",
        "mascotMode": "celebrating",
        "mascotTip": r"Mở rộng $(SBM)$ thành $(SBN)$. Giao tuyến với $(SAC)$ là $SK$ với $K = BN \cap AC$!",
        "narration": "Chúc mừng các em. Kỹ thuật mấu chốt ở bài toán này là mở rộng mặt phẳng SBM. Trong mặt phẳng SCD, tia SM cắt cạnh đáy CD tại điểm N, khi đó mặt phẳng SBM được mở rộng thành mặt phẳng SBN. Bây giờ bài toán quy về tìm giao tuyến của SBN và SAC: Điểm chung thứ nhất hiển nhiên là đỉnh S. Trong mặt phẳng đáy ABCD, đường thẳng BN cắt đường chéo AC tại điểm K. Điểm K thuộc BN nên thuộc SBN; K thuộc AC nên thuộc SAC. Do đó K là điểm chung thứ hai. Vậy giao tuyến cần tìm chính là đường thẳng SK. Chúng ta đã hoàn thành trọn vẹn Mục 2.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-1">Lời giải chi tiết:</div>
    <div class="space-y-1 text-slate-300 font-mono">
      <p>• Trong $(SCD)$: Kéo dài $SM$ cắt $CD$ tại $N \implies (SBM) \equiv (SBN)$.</p>
      <p>• Điểm chung thứ nhất: $S \in (SBN) \cap (SAC)$.</p>
      <p>• Trong mp đáy $(ABCD)$: Gọi $K = BN \cap AC$.</p>
      <p>  $\implies K \in BN \subset (SBN)$ và $K \in AC \subset (SAC)$.</p>
      <div class="p-1.5 bg-slate-900 rounded text-center text-emerald-300 font-bold my-1">
        $$(SBM) \cap (SAC) = SK$$
      </div>
    </div>

    <div class="mt-2.5 bg-gradient-to-r from-indigo-950 to-purple-950 p-2.5 rounded-lg border border-indigo-500/30">
      <b class="text-indigo-200">⭐ BÀI HỌC CỐT LÕI MỤC 2:</b>
      <p class="text-slate-300 mt-1">
        Luôn chủ động <b>mở rộng mặt phẳng</b> bằng cách kéo dài các đường thẳng cắt các cạnh đáy để tạo ra các điểm chung mới!
      </p>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 3: GIAO ĐIỂM ĐƯỜNG THẲNG - MẶT PHẲNG & THIẾT DIỆN NÂNG CAO
# ==============================================================================
BAI10_MUC3_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. CHIẾN THUẬT TÌM THIẾT DIỆN NÂNG CAO",
        "subtitle": "BÀI 10 • MỤC 3 • CHINH PHỤC CÁC BÀI TOÁN PHÂN HÓA HÌNH KHÔNG GIAN",
        "mascotMode": "pointer",
        "mascotTip": r"Tìm thiết diện thực chất là giải chuỗi bài toán: Tìm giao tuyến và Tìm giao điểm liên hoàn!",
        "narration": "Chào mừng các em đến với Mục 3: Kỹ năng tìm giao điểm và thiết diện nâng cao của Bài 10. Ở các câu hỏi vận dụng và vận dụng cao trong đề thi, mặt phẳng cắt thường đi qua các điểm lơ lửng trên các cạnh hoặc trong các mặt của hình chóp. Để vẽ được trọn vẹn thiết diện, chúng ta phải kết hợp nhịp nhàng giữa hai bài toán cơ bản: Tìm giao tuyến của hai mặt phẳng và tìm giao điểm của đường thẳng với mặt phẳng.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider">Chiến thuật nâng cao</span>
      <h3 class="text-xl font-black text-emerald-200">Thuật Toán Tìm Thiết Diện Liên Hoàn</h3>
    </div>
    <p class="text-sm text-slate-300 leading-relaxed">
      Để tìm thiết diện của hình chóp cắt bởi mặt phẳng $(\alpha)$:<br/>
      1. Bắt đầu từ <b>đoạn giao tuyến có sẵn</b> (qua 2 điểm đã cho cùng thuộc 1 mặt).<br/>
      2. <b>Kéo dài giao tuyến</b> đó cắt các cạnh khác của đa giác mặt để tạo ra điểm chung mới.<br/>
      3. Từ điểm mới, kẻ các giao tuyến tiếp theo cho đến khi <b>khép kín thành đa giác</b>.
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. CÁC DẠNG THIẾT DIỆN THƯỜNG GẶP",
        "subtitle": "BÀI 10 • MỤC 3 • TAM GIÁC, TỨ GIÁC, NGŨ GIÁC",
        "mascotMode": "explaining",
        "mascotTip": r"Số cạnh của thiết diện không vượt quá số mặt của hình chóp!",
        "narration": "Một quy tắc toán học quan trọng mà các em cần nhớ: Số cạnh của thiết diện không bao giờ vượt quá tổng số mặt của hình chóp đó. Đối với hình tứ diện có 4 mặt, thiết diện chỉ có thể là tam giác nếu mặt phẳng cắt 3 mặt, hoặc là tứ giác nếu mặt phẳng cắt cả 4 mặt. Đối với hình chóp tứ giác có 5 mặt, thiết diện có thể là tam giác, tứ giác hoặc ngũ giác. Nhớ được quy tắc này sẽ giúp các em loại trừ phương án sai cực nhanh khi làm bài trắc nghiệm.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40">
      <div class="font-bold text-cyan-300 text-sm mb-1">Tứ diện $ABCD$ (4 mặt)</div>
      <p class="text-slate-300 leading-relaxed">
        • Mặt phẳng cắt 3 mặt: Thiết diện là <b>tam giác</b>.<br/>
        • Mặt phẳng cắt 4 mặt: Thiết diện là <b>tứ giác</b>.<br/>
        • <b class="text-rose-400">Không bao giờ</b> có thiết diện là ngũ giác hay đa giác $> 4$ cạnh!
      </p>
    </div>

    <div class="bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/40">
      <div class="font-bold text-purple-300 text-sm mb-1">Chóp tứ giác $S.ABCD$ (5 mặt)</div>
      <p class="text-slate-300 leading-relaxed">
        • Cắt 3 mặt: Thiết diện là <b>tam giác</b>.<br/>
        • Cắt 4 mặt: Thiết diện là <b>tứ giác</b>.<br/>
        • Cắt 5 mặt: Thiết diện là <b>ngũ giác</b>.<br/>
        • Không bao giờ có thiết diện là lục giác!
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: ĐIỀU KIỆN ĐỂ THIẾT DIỆN LÀ HÌNH BÌNH HÀNH",
        "subtitle": "BÀI 10 • MỤC 3 • BÀI TOÁN ĐỐI CẠNH TỨ DIỆN 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Mặt phẳng đi qua trung điểm 4 cạnh đối của tứ diện sẽ tạo ra thiết diện hình bình hành!",
        "narration": "Ví dụ 1: Cho tứ diện ABCD. Gọi M, N, P, Q lần lượt là trung điểm của các cạnh AB, BC, CD và DA. Thiết diện tạo bởi mặt phẳng MNPQ cắt tứ diện ABCD là hình gì? Phương án A: Hình tam giác; Phương án B: Hình bình hành; Phương án C: Hình ngũ giác; Phương án D: Hình thang có hai đáy không song song. Các em có 15 giây chọn đáp án.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-3">
      <b>Câu 1:</b> Cho tứ diện $ABCD$. Gọi $M, N, P, Q$ lần lượt là trung điểm của các cạnh $AB, BC, CD, DA$. Tứ giác $MNPQ$ là hình gì?
    </p>

    <div class="grid grid-cols-4 gap-2 text-xs font-mono text-center">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Tam giác</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>B.</b> Hình bình hành</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> Ngũ giác</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Hình thang vuông</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian chọn đáp án:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN B HÌNH BÌNH HÀNH",
        "subtitle": "BÀI 10 • MỤC 3 • CHỨNG MINH DỰA TRÊN ĐƯỜNG TRUNG BÌNH TAM GIÁC",
        "mascotMode": "celebrating",
        "mascotTip": r"$MN \parallel AC$ và $PQ \parallel AC \implies MN \parallel PQ$ và bằng nhau!",
        "narration": "Hết thời gian. Đáp án đúng là B: Hình bình hành. Trong tam giác ABC, M là trung điểm AB và N là trung điểm BC nên MN là đường trung bình của tam giác ABC, suy ra MN song song với AC và độ dài MN bằng một nửa AC. Tương tự, trong tam giác ADC, P là trung điểm CD và Q là trung điểm DA nên PQ cũng là đường trung bình, suy ra PQ song song với AC và độ dài PQ bằng một nửa AC. Từ đó, MN vừa song song vừa bằng PQ. Tứ giác có một cặp cạnh đối song song và bằng nhau thì tứ giác đó là hình bình hành.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Lời giải chi tiết Ví dụ 1:</div>
    <div class="space-y-1.5 text-slate-300 font-mono">
      <p>• Trong $\triangle ABC$: $MN$ là đường trung bình $\implies MN \parallel AC$ và $MN = \frac{1}{2}AC$.</p>
      <p>• Trong $\triangle ADC$: $PQ$ là đường trung bình $\implies PQ \parallel AC$ và $PQ = \frac{1}{2}AC$.</p>
      <p>• Suy ra: $\begin{cases} MN \parallel PQ \\ MN = PQ \end{cases} \implies MNPQ$ là <b>hình bình hành</b>.</p>
      <div class="mt-2 text-emerald-300 font-bold font-sans">➔ Chọn đáp án B: Hình bình hành.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. PHƯƠNG PHÁP XÁC ĐỊNH THIẾT DIỆN NGŨ GIÁC",
        "subtitle": "BÀI 10 • MỤC 3 • MẶT CẮT CỰC ĐẠI CỦA HÌNH CHÓP TỨ GIÁC",
        "mascotMode": "explaining",
        "mascotTip": r"Mặt phẳng cắt cả 4 mặt bên và mặt đáy của hình chóp $S.ABCD$ tạo thành ngũ giác!",
        "narration": "Một câu hỏi phân hóa rất hay xuất hiện trong các đề thi học sinh giỏi và thi thử tốt nghiệp là: Khi nào thiết diện của hình chóp tứ giác S.ABCD là một ngũ giác? Thiết diện là ngũ giác khi và chỉ khi mặt phẳng cắt đồng thời cả 4 mặt bên và mặt phẳng đáy. Khi đó, mặt phẳng cắt lần lượt 5 mặt theo 5 đoạn giao tuyến khép kín, tạo thành một hình ngũ giác.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-900/90 p-3.5 rounded-xl border border-purple-500/40 text-xs">
    <div class="font-bold text-purple-300 text-sm mb-2 flex items-center gap-2">
      <span>⭐</span> <span>Điều Kiện Để Thiết Diện Của $S.ABCD$ Là Ngũ Giác</span>
    </div>
    <p class="text-slate-300 leading-relaxed">
      • Mặt phẳng $(\alpha)$ phải cắt <b>toàn bộ 5 mặt</b> của hình chóp:<br/>
      • Cắt 4 cạnh bên tại 4 điểm hoặc cắt các cạnh bên và các cạnh đáy sao cho có đúng <b>5 đoạn giao tuyến</b> khép kín.<br/>
      • Đây là đa giác có số cạnh tối đa mà một mặt phẳng có thể tạo ra khi cắt hình chóp tứ giác!
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: TÌM THIẾT DIỆN QUA 3 ĐIỂM TRÊN 3 CẠNH",
        "subtitle": "BÀI 10 • MỤC 3 • BÀI TOÁN XÁC ĐỊNH MẶT CẮT HÌNH CHÓP 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Chọn mặt phẳng phụ để kéo dài giao tuyến cắt cạnh bên còn lại!",
        "narration": "Ví dụ 2: Cho hình chóp S.ABCD có đáy ABCD là hình thang với đáy lớn AB gấp đôi đáy nhỏ CD. Gọi M là trung điểm của SA; N là trung điểm của SB. Thiết diện của hình chóp S.ABCD cắt bởi mặt phẳng đi qua M, N và C là: Phương án A: Tam giác MNC; Phương án B: Tứ giác MNCD; Phương án C: Ngũ giác; Phương án D: Hình bình hành. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-3">
      <b>Câu 2:</b> Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB \parallel CD$, $AB = 2CD$). Gọi $M, N$ là trung điểm của $SA, SB$. Thiết diện của hình chóp cắt bởi mặt phẳng $(MNC)$ là:
    </p>

    <div class="grid grid-cols-4 gap-2 text-xs font-mono text-center">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Tam giác</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>B.</b> Tứ giác $MNCD$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> Ngũ giác</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Tam giác cân</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian chọn đáp án:</span>
    </div>
    <span class="text-base font-black text-cyan-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. LỜI GIẢI VÍ DỤ 2: THIẾT DIỆN TỨ GIÁC $MNCD$",
        "subtitle": "BÀI 10 • MỤC 3 • QUAN HỆ SONG SONG $MN \\parallel CD$",
        "mascotMode": "celebrating",
        "mascotTip": r"$MN \parallel AB \parallel CD \implies CD \subset (MNC) \implies$ Thiết diện là hình thang $MNCD$!",
        "narration": "Hết thời gian. Đáp án đúng là B: Tứ giác MNCD. Ta có M là trung điểm SA, N là trung điểm SB nên MN là đường trung bình của tam giác SAB, suy ra MN song song với AB. Mặt khác, đáy ABCD là hình thang có AB song song với CD, nên MN song song với CD. Do MN song song với CD và mặt phẳng MNC chứa đường thẳng MN và điểm C, nên mặt phẳng MNC chứa trọn vẹn cả đường thẳng CD. Vì vậy, mặt phẳng MNC cắt mặt SCD theo đoạn CD, cắt SAD theo MD, cắt SBC theo NC và cắt SAB theo MN. Thiết diện chính là tứ giác hình thang MNCD.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40 text-xs">
    <div class="text-xs font-bold text-cyan-300 uppercase mb-2">Lời giải chi tiết:</div>
    <div class="space-y-1.5 text-slate-300 font-mono">
      <p>• Trong $\triangle SAB$: $MN$ là đường trung bình $\implies MN \parallel AB$.</p>
      <p>• Do $AB \parallel CD$ (hình thang) $\implies MN \parallel CD$.</p>
      <p>• Điểm $C \in (MNC)$ và $MN \parallel CD \implies$ đường thẳng $CD \subset (MNC)$.</p>
      <p>• Điểm $D \in CD \implies D \in (MNC)$.</p>
      <p>• Các đoạn giao tuyến: $MN$ (trên $SAB$), $NC$ (trên $SBC$), $CD$ (trên đáy), $DM$ (trên $SAD$).</p>
      <div class="mt-2 text-emerald-300 font-bold font-sans">➔ Kết luận: Thiết diện là <b>hình thang $MNCD$</b> (chọn B).</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. CẢNH BÁO BẪY KHI TÌM GIAO ĐIỂM HAI ĐƯỜNG THẲNG",
        "subtitle": "BÀI 10 • MỤC 3 • HAI ĐƯỜNG CÙNG THUỘC MỘT MẶT PHẲNG MỚI ĐƯỢC CẮT NHAU",
        "mascotMode": "explaining",
        "mascotTip": r"Lỗi chết người: Tự ý cho 2 đường thẳng chéo nhau cắt nhau trong không gian!",
        "narration": "Thầy cảnh báo một lỗi sai chết người mà rất nhiều học sinh lớp 11 mắc phải: Đó là tự tiện cho hai đường thẳng bất kì cắt nhau khi nhìn thấy chúng đè lên nhau trên hình vẽ. Các em phải luôn khắc sâu trong đầu: Trong không gian, hai đường thẳng chỉ có thể cắt nhau nếu và chỉ nếu chúng cùng thuộc một mặt phẳng và không song song. Nếu hai đường thẳng nằm ở hai mặt phẳng khác nhau và không đồng phẳng thì chúng chéo nhau, tuyệt đối không bao giờ được lấy giao điểm.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-rose-950/70 to-slate-900/90 p-3.5 rounded-xl border border-rose-500/40 text-xs">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold text-xs rounded uppercase">Cảnh báo nghiêm ngặt</span>
      <h3 class="text-base font-bold text-rose-200">Bẫy Ngộ Nhận Hai Đường Thẳng Cắt Nhau</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 mt-2">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border-l-4 border-rose-500">
        <b class="text-rose-400">❌ Lỗi sai phổ biến</b>
        <p class="text-slate-300 mt-1">
          Thấy đường thẳng $SA$ và $BD$ vẽ đè qua nhau trên giấy liền gọi $I = SA \cap BD$.<br/>
          <b class="text-rose-300">Sai nghiêm trọng vì $SA$ và $BD$ là 2 đường chéo nhau!</b>
        </p>
      </div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border-l-4 border-emerald-500">
        <b class="text-emerald-400">✅ Quy tắc đúng</b>
        <p class="text-slate-300 mt-1">
          Chỉ được lấy giao điểm khi <b>chỉ rõ mặt phẳng chung</b> chứa cả hai đường thẳng:<br/>
          "Trong mặt phẳng $(ABCD)$, gọi $O = AC \cap BD$".
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: TÌM GIAO ĐIỂM ĐƯỜNG THẲNG VÀ MẶT PHẲNG",
        "subtitle": "BÀI 10 • MỤC 3 • ÁP DỤNG MẶT PHẲNG PHỤ CHUẨN XÁC 30 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Mặt phẳng phụ chứa $SD$ là $(SBD)$. Giao tuyến $(SBD) \cap (AMN)$ chứa điểm cần tìm!",
        "narration": "Ví dụ 3: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Gọi M là trung điểm của SC, N là trung điểm của BC. Tìm giao điểm của đường thẳng SD với mặt phẳng AMN. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng cao</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Cho hình chóp $S.ABCD$ có đáy là hình bình hành. $M$ là trung điểm $SC$, $N$ là trung điểm $BC$.
    </p>

    <div class="bg-slate-900 p-2 rounded text-xs text-slate-300 space-y-1">
      <p>• Chọn mặt phẳng phụ $(\beta) = (SBD)$ chứa đường thẳng $SD$.</p>
      <p>• Tìm giao tuyến của $(SBD)$ với $(AMN)$.</p>
    </div>

    <p class="text-xs text-indigo-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Xác định giao điểm $K = SD \cap (AMN)$.
    </p>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian suy nghĩ:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. LỜI GIẢI VÍ DỤ 3: GIAO ĐIỂM $K = SD \\cap (AMN)$",
        "subtitle": "BÀI 10 • MỤC 3 • TRÌNH BÀY LỜI GIẢI CHUẨN MỰC BỘ GD&ĐT",
        "mascotMode": "celebrating",
        "mascotTip": r"$I = AN \cap BD, J = SO \cap AM \implies IJ$ là giao tuyến $\implies K = SD \cap IJ$!",
        "narration": "Đã hết thời gian. Lời giải chuẩn mực như sau: Chọn mặt phẳng phụ SBD chứa SD. Trong mặt phẳng đáy ABCD, gọi I là giao điểm của AN và BD. Trong mặt phẳng SAC, gọi J là giao điểm của đường chéo SO với AM. Khi đó I thuộc AN nên thuộc AMN, I thuộc BD nên thuộc SBD. Điểm J thuộc AM nên thuộc AMN, J thuộc SO nên thuộc SBD. Vậy đường thẳng IJ chính là giao tuyến của mặt phẳng AMN với mặt phẳng phụ SBD. Trong mặt phẳng SBD, đường thẳng IJ cắt cạnh SD tại điểm K. Điểm K chính là giao điểm của SD với mặt phẳng AMN.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40 text-xs">
    <div class="text-xs font-bold text-indigo-300 uppercase mb-2">Các bước giải chi tiết Ví dụ 3:</div>
    <div class="space-y-1.5 text-slate-300 font-mono">
      <p>• <b>Bước 1:</b> Chọn mp phụ $(SBD) \supset SD$.</p>
      <p>• <b>Bước 2: Tìm giao tuyến $(AMN) \cap (SBD)$:</b></p>
      <p>  - Trong đáy $(ABCD)$: Gọi $I = AN \cap BD \implies I \in (AMN) \cap (SBD)$.</p>
      <p>  - Trong $(SAC)$: Gọi $J = AM \cap SO$ (với $O = AC \cap BD$) $\implies J \in (AMN) \cap (SBD)$.</p>
      <p>  - Do đó: $(AMN) \cap (SBD) = IJ$.</p>
      <p>• <b>Bước 3:</b> Trong $(SBD)$, gọi $K = SD \cap IJ$.</p>
      <div class="mt-2 p-1.5 bg-slate-900 rounded text-center text-emerald-300 font-bold font-sans">
        ➔ Kết luận: $K = SD \cap (AMN)$.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: ĐỀ TỔNG ÔN TRẮC NGHIỆM ĐÚNG/SAI BÀI 10",
        "subtitle": "BÀI 10 • MỤC 3 • ĐỊNH DẠNG ĐỀ THI MỚI 4 Ý a, b, c, d",
        "mascotMode": "thinking",
        "mascotTip": r"Xét 4 mệnh đề độc lập: a) Vị trí điểm; b) Giao tuyến; c) Giao điểm; d) Thiết diện!",
        "narration": "Ví dụ 4 là câu hỏi Trắc nghiệm Đúng/Sai 4 ý chuẩn cấu trúc đề thi của Bộ GD&ĐT. Cho hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O. Xét tính Đúng hoặc Sai của 4 khẳng định sau: Ý a: Giao tuyến của hai mặt phẳng SAB và SCD là đường thẳng đi qua S và song song với AB; Ý b: Đường thẳng SO nằm trong mặt phẳng SBD; Ý c: Ba điểm S, A, C thẳng hàng; Ý d: Thiết diện của hình chóp cắt bởi mặt phẳng SAC là tam giác SAC. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Ví dụ 4 (Đúng/Sai - 30s)</span>
      <span class="text-xs text-slate-400">Chuẩn Bộ GD&ĐT</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Xét tính Đúng/Sai:
    </p>

    <div class="space-y-1 text-xs text-slate-200">
      <p><b>a)</b> Giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng qua $S$ và song song với $AB$.</p>
      <p><b>b)</b> Đường thẳng $SO$ nằm trong mặt phẳng $(SBD)$.</p>
      <p><b>c)</b> Ba điểm $S, A, C$ cùng thuộc một đường thẳng.</p>
      <p><b>d)</b> Thiết diện của hình chóp cắt bởi mặt phẳng $(SAC)$ là tam giác $SAC$.</p>
    </div>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian suy nghĩ:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT BÀI 10",
        "subtitle": "BÀI 10 • MỤC 3 • KẾT QUẢ: a-ĐÚNG, b-ĐÚNG, c-SAI, d-ĐÚNG",
        "mascotMode": "celebrating",
        "mascotTip": r"Chúc mừng các em đã làm chủ trọn vẹn Bài 10: Nền tảng hình học không gian 3 chiều!",
        "narration": "Chúc mừng các em. Thầy cùng các em thẩm định: Mệnh đề a: Hai mặt phẳng SAB và SCD lần lượt chứa hai đường thẳng song song AB và CD, điểm chung là S, nên giao tuyến là đường thẳng qua S và song song với AB. Đúng. Mệnh đề b: S thuộc SBD, O thuộc BD nên SO nằm trong SBD. Đúng. Mệnh đề c: S nằm ngoài mặt đáy ABCD nên ba điểm S, A, C tạo thành tam giác SAC, không thể thẳng hàng. Mệnh đề c Sai. Mệnh đề d: Mặt phẳng SAC cắt các mặt SAB theo SA, SBC theo SC và đáy theo AC, tạo thành tam giác SAC. Đúng. Như vậy chúng ta đã hoàn thành xuất sắc toàn bộ Bài 10.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="space-y-1.5 text-slate-300">
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>a)</b> $(SAB) \cap (SCD) = d$ qua $S$ và $d \parallel AB \parallel CD$.</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>b)</b> $S \in (SBD)$ và $O \in BD \subset (SBD) \implies SO \subset (SBD)$.</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>c)</b> $S$ không thuộc đáy $(ABCD)$ nên $S, A, C$ tạo thành tam giác.</span>
        <span class="px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold rounded">SAI</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>d)</b> Mặt phẳng $(SAC)$ cắt hình chóp tạo thiết diện là tam giác $SAC$.</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
    </div>

    <div class="mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30 text-xs">
      <div class="font-bold text-emerald-200 mb-1 flex items-center gap-1.5">
        <span>🎉</span> <span>HOÀN THÀNH XUẤT SẮC TOÀN BỘ BÀI 10!</span>
      </div>
      <p class="text-slate-300">
        Các em đã thành thạo: 6 tính chất thừa nhận, 3 cách xác định mặt phẳng, phương pháp tìm giao tuyến, giao điểm $d \cap (\alpha)$ và thiết diện hình chóp!
      </p>
    </div>
  </div>
</div>
"""
    }
]

print("ch4_bai10_data.py initialized: BAI10_MUC1_SCENES, BAI10_MUC2_SCENES, BAI10_MUC3_SCENES ready.")
