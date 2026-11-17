# -*- coding: utf-8 -*-
"""
CHƯƠNG IV: QUAN HỆ SONG SONG TRONG KHÔNG GIAN
BÀI 14: PHÉP CHIẾU SONG SONG - TOÁN 11 KNTT
Mục 1, Mục 2, Mục 3 - Đầy đủ 36 Scenes (12 scenes/mục)
Mỗi mục có 4 ví dụ minh họa kèm đồng hồ đếm ngược 15s/30s
Giọng đọc Thầy Nam Minh (vi-VN-NamMinhNeural) chuẩn sư phạm Bộ GD&ĐT
"""

# ==============================================================================
# MỤC 1: KHÁI NIỆM PHÉP CHIẾU SONG SONG, MẶT PHẲNG CHIẾU & PHƯƠNG CHIẾU
# ==============================================================================
BAI14_MUC1_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. ĐỊNH NGHĨA PHÉP CHIẾU SONG SONG",
        "subtitle": "BÀI 14 • MỤC 1 • MÔ HÌNH HÌNH HỌC TẠO ẢNH BÓNG ĐỔ",
        "mascotMode": "pointer",
        "mascotTip": r"Mặt phẳng chiếu $(P)$ và phương chiếu $\Delta$ ($\Delta$ phải cắt $(P)$)!",
        "narration": "Chào mừng các em đến với Bài 14: Phép chiếu song song. Trong đời sống hàng ngày, dưới ánh nắng mặt trời buổi sáng hay buổi chiều, bóng của các đồ vật in trên mặt đất chính là hình ảnh trực quan của phép chiếu song song. Trong toán học, cho mặt phẳng P và một đường thẳng delta cắt mặt phẳng P. Với mỗi điểm M trong không gian, đường thẳng đi qua M song song hoặc trùng với delta sẽ cắt mặt phẳng P tại một điểm M phẩy duy nhất. Điểm M phẩy được gọi là hình chiếu song song của điểm M lên mặt phẳng P theo phương delta.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-teal-950 to-emerald-950 p-4 rounded-xl border border-teal-500/40">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-teal-500/20 text-teal-300 font-bold text-xs rounded-lg uppercase tracking-wider">Định nghĩa chính thức</span>
      <h3 class="text-xl font-black text-teal-200">Phép Chiếu Song Song</h3>
    </div>
    <p class="text-sm text-slate-200 leading-relaxed">
      • Cho mặt phẳng $(P)$ gọi là <b>mặt phẳng chiếu</b>.<br/>
      • Đường thẳng $\Delta$ cắt $(P)$ gọi là <b>phương chiếu</b>.<br/>
      • Phép đặt tương ứng mỗi điểm $M$ với điểm $M' = d_M \cap (P)$ (với $d_M \parallel \Delta$ hoặc $d_M \equiv \Delta$) gọi là <b>phép chiếu song song</b> lên $(P)$ theo phương $\Delta$.
    </p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-cyan-400 shadow-md">
      <h4 class="font-bold text-cyan-300 text-sm mb-1">📍 Ký hiệu & Điểm ảnh</h4>
      <p class="text-slate-300 leading-relaxed">
        • Điểm $M'$ gọi là <b>hình chiếu song song</b> của $M$.<br/>
        • Ký hiệu: $M' = \text{pr}_{(P, \Delta)}(M)$ hoặc đơn giản là hình chiếu của $M$.
      </p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-amber-400 shadow-md">
      <h4 class="font-bold text-amber-300 text-sm mb-1">💡 Hiện tượng thực tế</h4>
      <p class="text-slate-300 leading-relaxed">
        • Bóng của cột cờ, cây cối trên sân trường dưới ánh nắng mặt trời (các tia sáng song song).<br/>
        • Bản vẽ kỹ thuật trong cơ khí và xây dựng.
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. HÌNH CHIẾU SONG SONG CỦA MỘT HÌNH",
        "subtitle": "BÀI 14 • MỤC 1 • TẬP HỢP TẤT CẢ CÁC ĐIỂM ẢNH",
        "mascotMode": "explaining",
        "mascotTip": r"Hình chiếu của hình $\mathcal{H}$ là tập hợp hình chiếu của tất cả các điểm thuộc $\mathcal{H}$!",
        "narration": "Tiếp theo, ta tìm hiểu về hình chiếu của một hình bất kì. Giả sử ta có một hình H trong không gian như một đoạn thẳng, một tam giác hay một hình tròn. Tập hợp tất cả các điểm M phẩy là hình chiếu của các điểm M thuộc hình H được gọi là hình chiếu song song của hình H lên mặt phẳng P theo phương delta. Nếu điểm M đã nằm sẵn trên mặt phẳng P thì hình chiếu của nó trùng với chính nó.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-950 to-indigo-950 p-4 rounded-xl border border-blue-500/40 text-xs">
    <div class="font-bold text-blue-300 text-sm mb-2">Hình Chiếu Của Một Hình $\mathcal{H}$</div>
    <p class="text-slate-200 leading-relaxed text-sm">
      Tập hợp $\mathcal{H}' = \{M' \mid M' = \text{hình chiếu của } M \in \mathcal{H}\}$ được gọi là <b>hình chiếu song song</b> của hình $\mathcal{H}$ lên $(P)$ theo phương $\Delta$.
    </p>

    <div class="mt-3 grid grid-cols-2 gap-2 text-xs">
      <div class="p-2.5 bg-slate-900 rounded border border-blue-400/30">
        <b class="text-blue-300">Điểm bất động:</b><br/>
        Nếu $M \in (P)$ thì hình chiếu của $M$ là chính nó: $M' \equiv M$.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border border-blue-400/30">
        <b class="text-blue-300">Phương chiếu không song song $(P)$:</b><br/>
        Điều kiện bắt buộc là phương chiếu $\Delta$ phải cắt mặt phẳng $(P)$, không được $\Delta \parallel (P)$.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: ĐIỀU KIỆN CỦA PHƯƠNG CHIẾU TRONG KHÔNG GIAN",
        "subtitle": "BÀI 14 • MỤC 1 • CÂU HỎI NHẬN BIẾT 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Phương chiếu $\Delta$ bắt buộc phải cắt mặt phẳng chiếu $(P)$!",
        "narration": "Ví dụ 1: Trong định nghĩa phép chiếu song song lên mặt phẳng P theo phương delta, điều kiện cần và đủ đối với đường thẳng delta là gì? Phương án A: delta song song với mặt phẳng P; Phương án B: delta vuông góc với mặt phẳng P; Phương án C: delta cắt mặt phẳng P; Phương án D: delta nằm trong mặt phẳng P. Các em có 15 giây chọn đáp án.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Nhận biết</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Để xác định một phép chiếu song song lên mặt phẳng $(P)$ theo phương $\Delta$, điều kiện bắt buộc đối với $\Delta$ là:
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> $\Delta \parallel (P)$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> $\Delta \perp (P)$</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>C.</b> $\Delta$ cắt $(P)$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> $\Delta \subset (P)$</div>
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
        "subtitle": "BÀI 14 • MỤC 1 • BẢN CHẤT HÌNH HỌC CỦA PHƯƠNG CHIẾU",
        "mascotMode": "celebrating",
        "mascotTip": r"Nếu $\Delta \parallel (P)$ thì đường thẳng qua $M$ song song $\Delta$ sẽ không bao giờ cắt $(P)$!",
        "narration": "Hết thời gian. Đáp án đúng là C: delta cắt mặt phẳng P. Tại sao delta không thể song song với P? Vì nếu delta song song với P thì đường thẳng đi qua điểm M song song với delta cũng sẽ song song với P, nghĩa là nó không bao giờ cắt P, do đó không thể xác định được điểm ảnh M phẩy. Vì vậy, bắt buộc delta phải cắt mặt phẳng P.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Giải thích chi tiết:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• Nếu $\Delta \parallel (P)$ hoặc $\Delta \subset (P)$ thì với mọi điểm $M \notin (P)$, đường thẳng qua $M$ song song với $\Delta$ sẽ song song với $(P)$, do đó không bao giờ cắt $(P) \implies$ không có điểm chiếu $M'$.</p>
      <p>• Do đó, điều kiện tiên quyết để tồn tại phép chiếu song song là <b>$\Delta$ phải cắt $(P)$</b>.</p>
      <p>• Khi $\Delta \perp (P)$, phép chiếu được gọi là <b>phép chiếu vuông góc</b> (trường hợp đặc biệt).</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án C.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. TRƯỜNG HỢP SUY BIẾN ĐẶC BIỆT KHI CHIẾU ĐƯỜNG THẲNG",
        "subtitle": "BÀI 14 • MỤC 1 • KHI ĐƯỜNG THẲNG SONG SONG VỚI PHƯƠNG CHIẾU",
        "mascotMode": "explaining",
        "mascotTip": r"Nếu đường thẳng $d \parallel \Delta$ hoặc $d \equiv \Delta$ thì hình chiếu của $d$ chỉ là MỘT ĐIỂM!",
        "narration": "Một tình huống đặc biệt các em cần hết sức lưu ý: Đó là khi đường thẳng d song song hoặc trùng với phương chiếu delta. Khi đó, tất cả các điểm thuộc đường thẳng d khi chiếu xuống mặt phẳng P đều rơi vào đúng một điểm duy nhất, chính là giao điểm của d với mặt phẳng P. Khi đó ta nói hình chiếu của đường thẳng d bị suy biến thành một điểm.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-rose-950 to-slate-900 p-4 rounded-xl border border-rose-500/40 text-xs">
    <div class="font-bold text-rose-300 text-sm mb-2">Trường Hợp Suy Biến (Cực Kì Quan Trọng)</div>
    <div class="space-y-2">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-rose-400">
        <b class="text-rose-300">Khi $d \parallel \Delta$ hoặc $d \equiv \Delta$:</b>
        <p class="text-slate-300 mt-1">
          Tất cả các điểm trên đường thẳng $d$ đều chiếu về giao điểm $A = d \cap (P)$.<br/>
          $\implies$ Hình chiếu của đường thẳng $d$ là <b>một điểm duy nhất</b>!
        </p>
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400">
        <b class="text-emerald-300">Khi $d$ không song song $\Delta$:</b>
        <p class="text-slate-300 mt-1">
          Hình chiếu của đường thẳng $d$ luôn luôn là một <b>đường thẳng</b> $d'$.
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: HÌNH CHIẾU CỦA ĐOẠN THẲNG SONG SONG PHƯƠNG CHIẾU",
        "subtitle": "BÀI 14 • MỤC 1 • CÂU HỎI THÔNG HIỂU 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Đoạn thẳng song song phương chiếu thì mọi điểm trên đoạn thẳng chiếu về cùng 1 điểm!",
        "narration": "Ví dụ 2: Cho đoạn thẳng AB song song với phương chiếu delta. Hình chiếu song song của đoạn thẳng AB lên mặt phẳng chiếu P là gì? Phương án A: Một đoạn thẳng có độ dài bằng AB; Phương án B: Một đường thẳng; Phương án C: Một điểm duy nhất; Phương án D: Một tia. Các em có 15 giây chọn đáp án.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho đoạn thẳng $AB$ song song với phương chiếu $\Delta$. Hình chiếu song song của đoạn thẳng $AB$ lên $(P)$ là:
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Đoạn thẳng bằng $AB$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> Một đường thẳng</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>C.</b> Một điểm duy nhất</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Một tia</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian suy nghĩ:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. LỜI GIẢI VÍ DỤ 2: ĐÁP ÁN C CHÍNH XÁC",
        "subtitle": "BÀI 14 • MỤC 1 • ĐIỂM CHIẾU SUY BIẾN",
        "mascotMode": "celebrating",
        "mascotTip": r"Tia sáng đi dọc theo thân que gậy cắm thẳng đứng $\implies$ bóng của que gậy chỉ là 1 chấm tròn!",
        "narration": "Hết thời gian. Đáp án đúng là C: Một điểm duy nhất. Giải thích: Vì đường thẳng chứa đoạn thẳng AB song song với phương chiếu delta, nên đường thẳng chiếu đi qua mọi điểm trên đoạn thẳng AB đều trùng với đường thẳng AB. Đường thẳng này cắt mặt phẳng P tại đúng một giao điểm duy nhất. Do đó, hình chiếu của toàn bộ đoạn thẳng AB suy biến thành một điểm duy nhất.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Lời giải chi tiết:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• Đường thẳng $AB \parallel \Delta \implies$ đường thẳng qua bất kì điểm $M \in AB$ song song với $\Delta$ chính là đường thẳng $AB$.</p>
      <p>• Đường thẳng $AB$ cắt $(P)$ tại điểm $I = AB \cap (P)$.</p>
      <p>• Khi đó, với mọi $M \in AB$, hình chiếu của $M$ đều là điểm $I$.</p>
      <p>• Vậy hình chiếu của cả đoạn thẳng $AB$ là <b>một điểm duy nhất</b> $I$.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án C.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. SO SÁNH PHÉP CHIẾU SONG SONG VÀ PHÉP CHIẾU XUYÊN TÂM",
        "subtitle": "BÀI 14 • MỤC 1 • MỞ RỘNG TƯ DUY HÌNH HỌC PHẲNG & KHÔNG GIAN",
        "mascotMode": "pointer",
        "mascotTip": r"Phép chiếu song song có các tia chiếu song song, còn chiếu xuyên tâm các tia chiếu xuất phát từ một điểm!",
        "narration": "Để hiểu sâu hơn, chúng ta hãy so sánh hai loại phép chiếu phổ biến trong cuộc sống: Phép chiếu song song có các tia chiếu song song với nhau theo phương delta, ví dụ bóng đổ dưới ánh nắng mặt trời ở xa vô cực. Còn phép chiếu xuyên tâm có các tia chiếu cùng xuất phát từ một tâm chiếu S, ví dụ bóng đổ dưới ánh đèn bàn trong phòng hoặc hình ảnh thu nhận qua võng mạc mắt người và ống kính máy ảnh.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-slate-900 to-indigo-950 p-4 rounded-xl border border-indigo-500/40 text-xs">
    <div class="font-bold text-indigo-300 text-sm mb-2">Bảng Đối Chiếu Hai Loại Phép Chiếu</div>
    <div class="grid grid-cols-2 gap-3">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400">
        <b class="text-cyan-300 text-sm">1. Phép chiếu song song</b>
        <p class="text-slate-300 mt-1">
          • Các tia chiếu <b>song song</b> với nhau.<br/>
          • Bảo toàn tính song song của hai đường thẳng.<br/>
          • Mô hình: Ánh sáng mặt trời, bản vẽ kỹ thuật.
        </p>
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-amber-400">
        <b class="text-amber-300 text-sm">2. Phép chiếu xuyên tâm</b>
        <p class="text-slate-300 mt-1">
          • Các tia chiếu cùng đi qua <b>tâm chiếu $S$</b>.<br/>
          • KHÔNG bảo toàn tính song song (đường ray hội tụ tại chân trời).<br/>
          • Mô hình: Đèn pin, máy chiếu, camera, mắt nhìn.
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: TÌM HÌNH CHIẾU CỦA ĐỈNH HÌNH CHÓP LÊN ĐÁY",
        "subtitle": "BÀI 14 • MỤC 1 • BÀI TOÁN HÌNH CHIẾU THEO PHƯƠNG CẠNH BÊN 30S",
        "mascotMode": "thinking",
        "mascotTip": r"Phương chiếu là cạnh bên $SA \implies$ hình chiếu của $S$ chính là điểm $A$!",
        "narration": "Ví dụ 3: Cho hình chóp S.ABC. Tìm hình chiếu song song của tam giác SBC lên mặt phẳng đáy ABC theo phương chiếu của đường thẳng SA. Phương án A: Đoạn thẳng BC; Phương án B: Tam giác ABC; Phương án C: Điểm A; Phương án D: Tam giác SBC. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho hình chóp $S.ABC$. Hình chiếu song song của tam giác $SBC$ lên mặt phẳng $(ABC)$ theo phương chiếu $SA$ là:
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Đoạn thẳng $BC$</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>B.</b> Tam giác $ABC$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> Điểm $A$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Tam giác $SBC$</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-purple-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-purple-300 font-medium">Thời gian suy nghĩ:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. LỜI GIẢI VÍ DỤ 3: HÌNH CHIẾU LÀ TAM GIÁC $ABC$",
        "subtitle": "BÀI 14 • MỤC 1 • TÌM HÌNH CHIẾU TỪNG ĐỈNH",
        "mascotMode": "celebrating",
        "mascotTip": r"$S \to A$, $B \to B$, $C \to C \implies \triangle SBC \to \triangle ABC$!",
        "narration": "Hết thời gian. Đáp án đúng là B: Tam giác ABC. Cách tìm hình chiếu của một tam giác: Ta chỉ cần tìm hình chiếu của ba đỉnh S, B và C. Đỉnh S: Đường thẳng qua S song song hoặc trùng phương chiếu SA cắt mặt đáy ABC tại điểm A, vậy hình chiếu của S là A. Đỉnh B và C: Vì B và C đã nằm sẵn trên mặt đáy ABC nên hình chiếu của B là chính nó B, hình chiếu của C là chính nó C. Kết nối ba điểm ảnh A, B, C ta được hình chiếu là tam giác ABC.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Quy trình tìm hình chiếu từng điểm:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• Hình chiếu của đỉnh $S$ theo phương $SA$ là giao điểm của đường thẳng $SA$ với $(ABC) \implies S \mapsto A$.</p>
      <p>• Vì $B \in (ABC) \implies B \mapsto B$.</p>
      <p>• Vì $C \in (ABC) \implies C \mapsto C$.</p>
      <p>• Vậy hình chiếu của $\triangle SBC$ gồm 3 đỉnh $S, B, C$ chính là tam giác tạo bởi $A, B, C$, tức là $\triangle ABC$.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án B.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI VỀ ĐỊNH NGHĨA PHÉP CHIẾU SONG SONG",
        "subtitle": "BÀI 14 • MỤC 1 • 4 MỆNH ĐỀ ĐÁNH GIÁ NĂNG LỰC 30 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Cẩn thận các trường hợp điểm thuộc mặt phẳng chiếu và đường thẳng song song phương chiếu!",
        "narration": "Ví dụ 4: Cho phép chiếu song song lên mặt phẳng P theo phương delta. Xét tính Đúng hay Sai của các khẳng định sau: Mệnh đề a: Hình chiếu của một điểm thuộc mặt phẳng P là chính nó. Mệnh đề b: Hình chiếu của một đường thẳng bất kì luôn luôn là một đường thẳng. Mệnh đề c: Nếu phương chiếu delta vuông góc với mặt phẳng P thì phép chiếu được gọi là phép chiếu vuông góc. Mệnh đề d: Phương chiếu delta có thể song song với mặt phẳng chiếu P. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Ví dụ 4 (Đúng / Sai)</span>
      <span class="text-xs text-slate-400">Định dạng thi 2025</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Xét tính Đúng / Sai của các khẳng định sau:
    </p>

    <div class="space-y-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>a)</b> Hình chiếu của một điểm $M \in (P)$ là chính nó.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>b)</b> Hình chiếu của một đường thẳng bất kì luôn là một đường thẳng.</span>
        <span class="font-bold text-rose-400">[ SAI ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>c)</b> Khi $\Delta \perp (P)$, phép chiếu được gọi là phép chiếu vuông góc.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>d)</b> Phương chiếu $\Delta$ có thể song song với $(P)$.</span>
        <span class="font-bold text-rose-400">[ SAI ]</span>
      </div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian kiểm tra:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 1",
        "subtitle": "BÀI 14 • MỤC 1 • BÀN GIAO TOÀN DIỆN KIẾN THỨC",
        "mascotMode": "celebrating",
        "mascotTip": r"Mệnh đề b SAI vì nếu $d \parallel \Delta$ thì hình chiếu suy biến thành 1 điểm!",
        "narration": "Chúc mừng các em đã hoàn thành Mục 1. Giải thích chi tiết Ví dụ 4: Mệnh đề a ĐÚNG vì điểm nằm trên mặt phẳng chiếu là điểm bất động. Mệnh đề b SAI vì nếu đường thẳng song song với phương chiếu delta thì hình chiếu của nó suy biến thành một điểm. Mệnh đề c ĐÚNG vì đây là định nghĩa phép chiếu vuông góc. Mệnh đề d SAI vì phương chiếu delta bắt buộc phải cắt mặt phẳng P. Hẹn gặp lại các em ở Mục 2: Các tính chất của phép chiếu song song.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Đáp án phân tích:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• <b>a) ĐÚNG:</b> Mọi điểm thuộc $(P)$ đều có hình chiếu là chính nó.</p>
      <p>• <b>b) SAI:</b> Khi $d \parallel \Delta$, hình chiếu là <b>một điểm</b>.</p>
      <p>• <b>c) ĐÚNG:</b> Khi $\Delta \perp (P)$ ta có phép chiếu vuông góc.</p>
      <p>• <b>d) SAI:</b> $\Delta$ bắt buộc phải cắt $(P)$ (không được song song).</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">⭐ TỔNG KẾT MỤC 1: Hiểu sâu mô hình phép chiếu song song và trường hợp suy biến thành điểm!</div>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 2: CÁC TÍNH CHẤT CỦA PHÉP CHIẾU SONG SONG & BẢO TOÀN TỈ SỐ
# ==============================================================================
BAI14_MUC2_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. TÍNH CHẤT BIẾN ĐƯỜNG THẲNG, TIA VÀ ĐOẠN THẲNG",
        "subtitle": "BÀI 14 • MỤC 2 • CÁC TÍNH CHẤT NỀN TẢNG",
        "mascotMode": "pointer",
        "mascotTip": r"Đường thẳng $\to$ Đường thẳng, Tia $\to$ Tia, Đoạn thẳng $\to$ Đoạn thẳng!",
        "narration": "Chào mừng các em đến với Mục 2: Các tính chất của phép chiếu song song và bảo toàn tỉ số. Phép chiếu song song có 3 tính chất hình học nền tảng sau: Tính chất 1: Phép chiếu song song biến ba điểm thẳng hàng thành ba điểm thẳng hàng và bảo toàn thứ tự giữa các điểm đó. Tính chất 2: Phép chiếu song song biến đường thẳng không song song với phương chiếu thành đường thẳng; biến tia thành tia; biến đoạn thẳng thành đoạn thẳng.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-950 to-indigo-950 p-4 rounded-xl border border-blue-500/40">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-lg uppercase tracking-wider">Tính chất 1 & 2</span>
      <h3 class="text-xl font-black text-blue-200">Bảo Toàn Tính Thẳng Hàng & Đoạn Thẳng</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs text-slate-300">
      <div class="p-2.5 bg-slate-900 rounded border border-blue-400/30">
        <b class="text-blue-300">Tính chất 1:</b><br/>
        • $A, B, C$ thẳng hàng $\implies A', B', C'$ thẳng hàng.<br/>
        • Nếu $B$ nằm giữa $A$ và $C$ thì $B'$ nằm giữa $A'$ và $C'$.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border border-blue-400/30">
        <b class="text-blue-300">Tính chất 2:</b><br/>
        • Đường thẳng $d \not\parallel \Delta \implies$ Đường thẳng $d'$.<br/>
        • Tia $Ax \implies$ Tia $A'x'$.<br/>
        • Đoạn thẳng $AB \implies$ Đoạn thẳng $A'B'$.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. TÍNH CHẤT BẢO TOÀN QUAN HỆ SONG SONG",
        "subtitle": "BÀI 14 • MỤC 2 • BẢO TOÀN SONG SONG VÀ BẢO TOÀN TỈ SỐ ĐỘ DÀI",
        "mascotMode": "explaining",
        "mascotTip": r"Hai đường thẳng song song chiếu thành 2 đường thẳng song song hoặc trùng nhau!",
        "narration": "Tính chất 3 là tính chất đặc sắc nhất của phép chiếu song song: Phép chiếu song song biến hai đường thẳng song song thành hai đường thẳng song song hoặc trùng nhau. Tính chất 4: Phép chiếu song song giữ nguyên tỉ số độ dài của hai đoạn thẳng cùng nằm trên một đường thẳng hoặc nằm trên hai đường thẳng song song. Hệ quả tuyệt vời là: hình chiếu của trung điểm đoạn thẳng chính là trung điểm của đoạn thẳng hình chiếu.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-950 to-teal-950 p-4 rounded-xl border border-emerald-500/40 text-xs">
    <div class="font-bold text-emerald-300 text-sm mb-2">Tính Chất 3 & 4 (Tính Chất Cốt Lõi)</div>
    <div class="space-y-2">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400">
        <b class="text-emerald-300">Bảo toàn tính song song:</b><br/>
        $$a \parallel b \implies a' \parallel b' \quad \text{hoặc} \quad a' \equiv b'$$
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-amber-400">
        <b class="text-amber-300">Bảo toàn tỉ số độ dài song song:</b><br/>
        Nếu $AB \parallel CD$ (hoặc $A, B, C, D$ thẳng hàng) thì:
        $$\frac{A'B'}{C'D'} = \frac{AB}{CD}$$
        Đặc biệt: Nếu $M$ là <b>trung điểm</b> $AB$ thì $M'$ là <b>trung điểm</b> $A'B'$!
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: HÌNH CHIẾU CỦA HAI ĐƯỜNG THẲNG SONG SONG",
        "subtitle": "BÀI 14 • MỤC 2 • CÂU HỎI TRẮC NGHIỆM ĐỊNH TÍNH 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Hai đường thẳng song song chiếu xuống có thể TRÙNG NHAU nếu cùng nằm trong mặt phẳng chứa phương chiếu!",
        "narration": "Ví dụ 1: Cho hai đường thẳng song song a và b không song song với phương chiếu delta. Hình chiếu song song của a và b lên mặt phẳng P có thể là: Phương án A: Hai đường thẳng cắt nhau; Phương án B: Hai đường thẳng chéo nhau; Phương án C: Hai đường thẳng song song hoặc trùng nhau; Phương án D: Hai đoạn thẳng vuông góc. Các em có 15 giây chọn đáp án.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Nhận biết</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Hình chiếu song song của hai đường thẳng song song $a$ và $b$ lên $(P)$ là:
    </p>

    <div class="space-y-1.5 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Hai đường thẳng cắt nhau</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> Hai đường thẳng chéo nhau</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>C.</b> Hai đường thẳng song song hoặc trùng nhau</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Hai đường thẳng vuông góc</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian suy nghĩ:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN C CHÍNH XÁC",
        "subtitle": "BÀI 14 • MỤC 2 • PHÂN TÍCH TÍNH CHẤT 3",
        "mascotMode": "celebrating",
        "mascotTip": r"Khi mặt phẳng $(a, b) \parallel \Delta$ thì hình chiếu $a'$ và $b'$ TRÙNG NHAU!",
        "narration": "Hết thời gian. Đáp án đúng là C: Hai đường thẳng song song hoặc trùng nhau. Theo tính chất 3 của phép chiếu song song: Hình chiếu của hai đường thẳng song song là hai đường thẳng song song hoặc trùng nhau. Trường hợp trùng nhau xảy ra khi mặt phẳng chứa hai đường thẳng a và b song song với phương chiếu delta, khi đó cả hai đường thẳng cùng chiếu lên một giao tuyến duy nhất trên mặt phẳng P.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Giải thích chi tiết:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• Theo Tính chất 3 của phép chiếu song song: $a \parallel b \implies a' \parallel b'$ hoặc $a' \equiv b'$.</p>
      <p>• <b>Trường hợp $a' \equiv b'$:</b> Xảy ra khi mặt phẳng chứa $a$ và $b$ song song với phương chiếu $\Delta$.</p>
      <p>• <b>Trường hợp $a' \parallel b'$:</b> Xảy ra khi mặt phẳng chứa $a$ và $b$ không song song với $\Delta$.</p>
      <p>• Hình chiếu không bao giờ cắt nhau hay chéo nhau.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án C.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. CÁC ĐẠI LƯỢNG KHÔNG ĐƯỢC BẢO TOÀN",
        "subtitle": "BÀI 14 • MỤC 2 • BẪY THI CỰC KÌ PHỔ BIẾN",
        "mascotMode": "explaining",
        "mascotTip": r"Độ lớn góc, độ dài đoạn thẳng và tính vuông góc KHÔNG được bảo toàn!",
        "narration": "Các em hãy đặc biệt lưu ý: Phép chiếu song song bảo toàn tính thẳng hàng, tính song song và tỉ số đoạn thẳng song song. Nhưng nó KHÔNG bảo toàn các đại lượng sau: Thứ nhất: Độ lớn của góc nói chung không được bảo toàn. Góc vuông có thể chiếu thành góc nhọn hoặc góc tù. Thứ hai: Độ dài của đoạn thẳng nói chung không được bảo toàn. Thứ ba: Tính vuông góc không được bảo toàn. Hai đường thẳng vuông góc có thể chiếu thành hai đường thẳng không vuông góc.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-rose-950 to-slate-900 p-4 rounded-xl border border-rose-500/40 text-xs">
    <div class="font-bold text-rose-300 text-sm mb-2">⚠️ Các Đại Lượng KHÔNG Được Bảo Toàn (Bẫy Thi)</div>
    <div class="grid grid-cols-3 gap-2">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-rose-400">
        <b class="text-rose-300">1. Độ lớn góc:</b><br/>
        Góc vuông, nhọn, tù đều có thể biến đổi thành góc bất kì.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-rose-400">
        <b class="text-rose-300">2. Tính vuông góc:</b><br/>
        $a \perp b \not\implies a' \perp b'$.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-rose-400">
        <b class="text-rose-300">3. Độ dài:</b><br/>
        $AB$ và $A'B'$ nói chung không bằng nhau.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: HÌNH CHIẾU CỦA TAM GIÁC ĐỀU LÀ HÌNH GÌ?",
        "subtitle": "BÀI 14 • MỤC 2 • CÂU HỎI THÔNG HIỂU 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Tam giác đều, cân, vuông đều chiếu thành một tam giác bất kì!",
        "narration": "Ví dụ 2: Cho tam giác đều ABC. Hình chiếu song song của tam giác ABC lên một mặt phẳng bất kì không song song với các cạnh của nó là hình gì? Phương án A: Bắt buộc là tam giác đều; Phương án B: Bắt buộc là tam giác vuông; Phương án C: Một tam giác bất kì; Phương án D: Một đoạn thẳng. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-teal-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-teal-500/20 text-teal-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Hình chiếu song song của một tam giác đều $ABC$ lên một mặt phẳng chiếu $(P)$ nói chung là:
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Luôn là tam giác đều</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> Luôn là tam giác cân</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>C.</b> Một tam giác bất kì</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Luôn là tam giác vuông</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian tính toán:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. LỜI GIẢI VÍ DỤ 2: ĐÁP ÁN C CHÍNH XÁC",
        "subtitle": "BÀI 14 • MỤC 2 • KHÔNG BẢO TOÀN ĐỘ DÀI CẠNH VÀ GÓC",
        "mascotMode": "celebrating",
        "mascotTip": r"Góc $60^\circ$ và ba cạnh bằng nhau bị biến dạng tùy thuộc góc nghiêng của phương chiếu!",
        "narration": "Hết thời gian. Đáp án đúng là C: Một tam giác bất kì. Vì phép chiếu song song không bảo toàn độ lớn của góc và độ dài các cạnh, nên ba góc 60 độ của tam giác đều và ba cạnh bằng nhau sẽ bị biến dạng. Do đó, hình chiếu của tam giác đều có thể là một tam giác nhọn, tam giác vuông hoặc tam giác tù tùy theo góc chiếu.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Phân tích tính chất:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• Phép chiếu song song biến 3 điểm không thẳng hàng $A, B, C$ thành 3 điểm không thẳng hàng $A', B', C'$.</p>
      <p>• Do không bảo toàn độ dài và góc nên $A'B', B'C', C'A'$ nói chung không bằng nhau, và các góc không bằng $60^\circ$.</p>
      <p>• Vậy hình chiếu của một tam giác đều là một <b>tam giác bất kì</b>.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án C.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. BẢO TOÀN TRỌNG TÂM VÀ TRUNG ĐIỂM",
        "subtitle": "BÀI 14 • MỤC 2 • ỨNG DỤNG BẢO TOÀN TỈ SỐ ĐOẠN THẲNG",
        "mascotMode": "pointer",
        "mascotTip": r"Trung điểm chiếu thành trung điểm, trọng tâm chiếu thành trọng tâm!",
        "narration": "Mặc dù không bảo toàn góc và độ dài, nhưng vì phép chiếu song song bảo toàn tỉ số của các đoạn thẳng thẳng hàng, nên nó bảo toàn các điểm đặc biệt sau: Trung điểm của đoạn thẳng chiếu thành trung điểm của đoạn thẳng hình chiếu. Trọng tâm của tam giác chiếu thành trọng tâm của tam giác hình chiếu. Tỉ số chia đoạn thẳng k luôn được giữ nguyên.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-950 to-indigo-950 p-4 rounded-xl border border-purple-500/40 text-xs">
    <div class="font-bold text-purple-300 text-sm mb-2">Các Bất Biến Về Tỉ Số Của Phép Chiếu Song Song</div>
    <div class="space-y-2">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400">
        <b class="text-cyan-300">1. Trung điểm:</b>
        <p class="text-slate-300 mt-1">$M$ là trung điểm $AB \implies M'$ là trung điểm $A'B'$.</p>
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-amber-400">
        <b class="text-amber-300">2. Trọng tâm tam giác:</b>
        <p class="text-slate-300 mt-1">$G$ là trọng tâm $\triangle ABC \implies G'$ là trọng tâm $\triangle A'B'C'$.</p>
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400">
        <b class="text-emerald-300">3. Tỉ số điểm chia:</b>
        <p class="text-slate-300 mt-1">$\vec{MA} = k \vec{MB} \implies \vec{M'A'} = k \vec{M'B'}$.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: HÌNH CHIẾU CỦA TRỌNG TÂM TAM GIÁC",
        "subtitle": "BÀI 14 • MỤC 2 • BÀI TOÁN TỈ SỐ ĐOẠN THẲNG 30S",
        "mascotMode": "thinking",
        "mascotTip": r"Tỉ số $\frac{AG}{AM} = \frac{2}{3} \implies \frac{A'G'}{A'M'} = \frac{2}{3}$!",
        "narration": "Ví dụ 3: Cho tam giác ABC có trọng tâm G và trung tuyến AM. Qua phép chiếu song song lên mặt phẳng P, tam giác ABC biến thành tam giác A'B'C'. Khẳng định nào sau đây là sai? Khẳng định A: Hình chiếu của M là trung điểm M' của B'C'. Khẳng định B: Hình chiếu của G là trọng tâm G' của tam giác A'B'C'. Khẳng định C: Tỉ số A'G' trên A'M' bằng hai phần ba. Khẳng định D: G' là trực tâm của tam giác A'B'C'. Các em có 30 giây tìm khẳng định sai.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho $\triangle ABC$ có trọng tâm $G$, trung tuyến $AM$. Gọi $A', B', C', G', M'$ là hình chiếu song song lên $(P)$. Khẳng định nào <b>SAI</b>?
    </p>

    <div class="space-y-1.5 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> $M'$ là trung điểm của đoạn thẳng $B'C'$.</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> $G'$ là trọng tâm của tam giác $A'B'C'$.</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> $\frac{A'G'}{A'M'} = \frac{2}{3}$.</div>
      <div class="p-2 bg-slate-900 rounded border border-rose-500 font-bold text-rose-300"><b>D.</b> $G'$ là trực tâm của tam giác $A'B'C'$.</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-purple-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-purple-300 font-medium">Thời gian suy nghĩ:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. LỜI GIẢI VÍ DỤ 3: ĐÁP ÁN D LÀ KHẲNG ĐỊNH SAI",
        "subtitle": "BÀI 14 • MỤC 2 • BẢO TOÀN TRỌNG TÂM NHƯNG KHÔNG BẢO TOÀN TRỰC TÂM",
        "mascotMode": "celebrating",
        "mascotTip": r"Trực tâm liên quan đến góc vuông, mà góc vuông không được bảo toàn nên $G'$ không thể là trực tâm!",
        "narration": "Hết thời gian. Khẳng định sai là D. Tại sao? Trực tâm là giao điểm của ba đường cao, tức là liên quan chặt chẽ đến tính vuông góc. Vì phép chiếu song song không bảo toàn tính vuông góc nên đường cao không chiếu thành đường cao, và trực tâm không bảo toàn. Ngược lại, trọng tâm và trung điểm chỉ phụ thuộc vào tỉ số đoạn thẳng nên được bảo toàn nguyên vẹn.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Phân tích bản chất:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• <b>Khẳng định A, B, C:</b> ĐÚNG do tính chất bảo toàn trung điểm và tỉ số chia đoạn thẳng $\frac{2}{3}$.</p>
      <p>• <b>Khẳng định D:</b> <b>SAI</b> vì trực tâm là giao điểm 3 đường cao (vuông góc). Phép chiếu song song không bảo toàn tính vuông góc nên trực tâm không được bảo toàn.</p>
      <div class="mt-2 text-rose-300 font-bold font-mono">➔ Chọn đáp án D (khẳng định sai).</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI VỀ TÍNH CHẤT PHÉP CHIẾU SONG SONG",
        "subtitle": "BÀI 14 • MỤC 2 • 4 MỆNH ĐỀ CHUẨN ĐỊNH DẠNG 2025",
        "mascotMode": "thinking",
        "mascotTip": r"Đọc kĩ từng mệnh đề: Song song có bảo toàn không? Vuông góc có bảo toàn không?",
        "narration": "Ví dụ 4: Xét tính Đúng hay Sai của các khẳng định sau về phép chiếu song song: Mệnh đề a: Phép chiếu song song luôn bảo toàn tính song song của hai đường thẳng. Mệnh đề b: Phép chiếu song song biến hình bình hành thành hình bình hành hoặc một đoạn thẳng. Mệnh đề c: Phép chiếu song song luôn giữ nguyên diện tích của tam giác. Mệnh đề d: Phép chiếu song song biến hai đường thẳng vuông góc thành hai đường thẳng vuông góc. Các em có 30 giây kiểm tra.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Ví dụ 4 (Đúng / Sai)</span>
      <span class="text-xs text-slate-400">Định dạng thi 2025</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Xét tính Đúng / Sai của các khẳng định:
    </p>

    <div class="space-y-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>a)</b> Phép chiếu song song biến 2 đường thẳng song song thành 2 đường song song hoặc trùng nhau.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>b)</b> Hình chiếu của hình bình hành là hình bình hành hoặc đoạn thẳng.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>c)</b> Phép chiếu song song luôn bảo toàn diện tích của tam giác.</span>
        <span class="font-bold text-rose-400">[ SAI ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>d)</b> Phép chiếu song song biến 2 đường thẳng vuông góc thành 2 đường vuông góc.</span>
        <span class="font-bold text-rose-400">[ SAI ]</span>
      </div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian kiểm tra:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 2",
        "subtitle": "BÀI 14 • MỤC 2 • BẢNG TỔNG KẾT ĐẠI LƯỢNG BẢO TOÀN",
        "mascotMode": "celebrating",
        "mascotTip": r"Ghi nhớ: Bảo toàn song song, thẳng hàng, tỉ số. KHÔNG bảo toàn góc, vuông góc, diện tích!",
        "narration": "Giải thích chi tiết Ví dụ 4: Mệnh đề a ĐÚNG theo tính chất 3. Mệnh đề b ĐÚNG vì các cặp cạnh đối song song chiếu thành các cặp cạnh đối song song (hình bình hành) hoặc suy biến thành đoạn thẳng nếu mặt phẳng hình bình hành song song với phương chiếu. Mệnh đề c SAI vì diện tích bị co giãn $S' = S \cdot \cos \varphi$. Mệnh đề d SAI vì tính vuông góc không được bảo toàn.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Bảng tổng kết bảo toàn của phép chiếu song song:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• ✅ <b>ĐƯỢC BẢO TOÀN:</b> Tính thẳng hàng, thứ tự điểm, tính song song, tỉ số độ dài của các đoạn thẳng song song (trung điểm, trọng tâm).</p>
      <p>• ❌ <b>KHÔNG ĐƯỢC BẢO TOÀN:</b> Độ lớn góc, tính vuông góc, độ dài đoạn thẳng bất kì, diện tích hình phẳng.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">⭐ TỔNG KẾT MỤC 2: Nắm vững các bất biến để vẽ hình biểu diễn chính xác ở Mục 3!</div>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 3: HÌNH BIỂU DIỄN CỦA CÁC HÌNH KHÔNG GIAN CHUẨN SGK
# ==============================================================================
BAI14_MUC3_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. KHÁI NIỆM HÌNH BIỂU DIỄN CỦA MỘT HÌNH KHÔNG GIAN",
        "subtitle": "BÀI 14 • MỤC 3 • CẦU NỐI GIỮA KHÔNG GIAN VÀ TRANG GIẤY PHẲNG",
        "mascotMode": "pointer",
        "mascotTip": r"Hình biểu diễn là hình chiếu song song của hình không gian lên trang giấy!",
        "narration": "Chào mừng các em đến với Mục 3: Hình biểu diễn của các hình không gian. Một vật thể ba chiều trong không gian khi ta vẽ lên mặt phẳng trang giấy hai chiều hay bảng đen thì hình vẽ đó được gọi là hình biểu diễn. Định nghĩa: Hình biểu diễn của một hình H trong không gian là hình chiếu song song của hình H lên một mặt phẳng chiếu, hoặc là hình đồng dạng với hình chiếu đó.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-teal-950 to-blue-950 p-4 rounded-xl border border-teal-500/40">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-teal-500/20 text-teal-300 font-bold text-xs rounded-lg uppercase tracking-wider">Khái niệm cốt lõi</span>
      <h3 class="text-xl font-black text-teal-200">Hình Biểu Diễn</h3>
    </div>
    <p class="text-sm text-slate-200 leading-relaxed">
      • <b>Hình biểu diễn</b> của một hình $\mathcal{H}$ trong không gian là hình chiếu song song của hình $\mathcal{H}$ trên một mặt phẳng, hoặc hình đồng dạng với hình chiếu đó.<br/>
      • Mọi quy tắc vẽ hình trong SGK đều bắt nguồn trực tiếp từ <b>tính chất của phép chiếu song song</b>!
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. QUY CHUẨN BIỂU DIỄN CÁC HÌNH PHẲNG CƠ BẢN",
        "subtitle": "BÀI 14 • MỤC 3 • BẢNG QUY ĐỔI CHUẨN MỰC BỘ GD&ĐT",
        "mascotMode": "explaining",
        "mascotTip": r"Hình tròn vẽ thành Elip! Vuông, chữ nhật, thoi vẽ thành hình bình hành!",
        "narration": "Dựa trên tính chất bảo toàn tính song song và tỉ số, ta có bảng quy chuẩn vẽ hình biểu diễn cho các hình phẳng cơ bản như sau: Thứ nhất: Tam giác đều, tam giác cân, tam giác vuông đều được biểu diễn bằng một tam giác bất kì. Thứ hai: Hình vuông, hình chữ nhật, hình thoi, hình bình hành đều được biểu diễn bằng một hình bình hành. Thứ ba: Hình thang có hai đáy song song được biểu diễn bằng một hình thang và bắt buộc phải bảo toàn tỉ số độ dài hai đáy. Thứ tư: Hình tròn được biểu diễn bằng một hình elip.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-indigo-950 to-slate-900 p-4 rounded-xl border border-indigo-500/40 text-xs">
    <div class="font-bold text-indigo-300 text-sm mb-2">Bảng Quy Chuẩn Hình Biểu Diễn SGK KNTT</div>
    <div class="grid grid-cols-2 gap-2.5">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400">
        <b class="text-emerald-300">1. Tam giác bất kì (đều, cân, vuông):</b><br/>
        Biểu diễn bằng một <b>tam giác</b>.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-amber-400">
        <b class="text-amber-300">2. Hình vuông, chữ nhật, thoi:</b><br/>
        Đều biểu diễn bằng một <b>hình bình hành</b>.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400">
        <b class="text-cyan-300">3. Hình thang:</b><br/>
        Biểu diễn bằng <b>hình thang</b> (phải giữ nguyên tỉ số hai đáy $\frac{a}{b}$).
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-purple-400">
        <b class="text-purple-300">4. Hình tròn:</b><br/>
        Biểu diễn bằng một <b>hình elip</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: HÌNH BIỂU DIỄN CỦA HÌNH CHỮ NHẬT LÀ HÌNH GÌ?",
        "subtitle": "BÀI 14 • MỤC 3 • CÂU HỎI NHẬN BIẾT 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Hình chữ nhật có 2 cặp cạnh đối song song nên biểu diễn bằng hình bình hành!",
        "narration": "Ví dụ 1: Hình biểu diễn của một hình chữ nhật trong không gian lên mặt phẳng trang giấy là hình gì? Phương án A: Hình chữ nhật; Phương án B: Hình thoi; Phương án C: Hình bình hành; Phương án D: Hình thang vuông. Các em có 15 giây chọn đáp án.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Nhận biết</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Hình biểu diễn của một hình chữ nhật trên mặt phẳng chiếu nói chung là:
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Hình chữ nhật</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> Hình thoi</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>C.</b> Hình bình hành</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Hình thang vuông</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian suy nghĩ:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN C CHÍNH XÁC",
        "subtitle": "BÀI 14 • MỤC 3 • NGUYÊN TẮC BẢO TOÀN SONG SONG",
        "mascotMode": "celebrating",
        "mascotTip": r"Vì góc vuông bị biến dạng thành góc nhọn hoặc tù nên hình chữ nhật trở thành hình bình hành!",
        "narration": "Hết thời gian. Đáp án đúng là C: Hình bình hành. Giải thích: Hình chữ nhật có hai cặp cạnh đối song song. Phép chiếu song song bảo toàn tính song song nên hình biểu diễn phải có hai cặp cạnh đối song song, tức là một hình bình hành. Góc vuông 90 độ của hình chữ nhật không được bảo toàn nên trên hình vẽ biểu diễn nó trở thành góc nhọn hoặc góc tù.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Lời giải chi tiết:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• Hình chữ nhật $ABCD$ có $AB \parallel CD$ và $AD \parallel BC$.</p>
      <p>• Phép chiếu song song bảo toàn tính song song $\implies A'B' \parallel C'D'$ và $A'D' \parallel B'C'$.</p>
      <p>• Góc vuông $\widehat{A} = 90^\circ$ không được bảo toàn $\implies \widehat{A'}$ có thể là góc nhọn hoặc góc tù.</p>
      <p>• Do đó, hình biểu diễn của hình chữ nhật là <b>hình bình hành</b>.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án C.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. QUY TẮC BIỂU DIỄN TÂM ĐỐI XỨNG VÀ TRỌNG TÂM",
        "subtitle": "BÀI 14 • MỤC 3 • XÁC ĐỊNH CHÍNH XÁC CÁC ĐIỂM ĐẶC BIỆT",
        "mascotMode": "pointer",
        "mascotTip": r"Tâm hình vuông là giao điểm 2 đường chéo của hình bình hành biểu diễn!",
        "narration": "Khi vẽ các bài toán hình chóp có đáy là hình vuông tâm O, hay hình bình hành tâm O: Điểm O trên hình biểu diễn được xác định chính xác bằng giao điểm của hai đường chéo hình bình hành biểu diễn, vì phép chiếu song song bảo toàn tính trung điểm. Tương tự, trọng tâm G của tam giác đáy được xác định bằng giao điểm của hai đường trung tuyến trên hình biểu diễn.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-950 to-indigo-950 p-4 rounded-xl border border-blue-500/40 text-xs">
    <div class="font-bold text-blue-300 text-sm mb-2">Cách Xác Định Điểm Đặc Biệt Trên Hình Biểu Diễn</div>
    <div class="space-y-2">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400">
        <b class="text-cyan-300">Tâm hình vuông / chữ nhật / hình thoi:</b><br/>
        Giao điểm hai đường chéo của <b>hình bình hành</b> biểu diễn.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-amber-400">
        <b class="text-amber-300">Trọng tâm tam giác:</b><br/>
        Giao điểm hai đường trung tuyến của tam giác biểu diễn (lấy tỉ số $\frac{2}{3}$).
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400">
        <b class="text-emerald-300">Tâm đường tròn ngoại tiếp / nội tiếp:</b><br/>
        Phải dựng qua các đường trung tuyến hoặc tỉ số, không được dùng tính vuông góc thông thường.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: HÌNH BIỂU DIỄN CỦA HÌNH THANG CÂN",
        "subtitle": "BÀI 14 • MỤC 3 • BÀI TOÁN BẢO TOÀN TỈ SỐ ĐÁY 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Đáy lớn gấp đôi đáy nhỏ thì trên hình vẽ đáy lớn cũng BẮT BUỘC gấp đôi đáy nhỏ!",
        "narration": "Ví dụ 2: Cho hình thang ABCD có đáy lớn AB gấp đôi đáy nhỏ CD. Trên hình biểu diễn của hình thang ABCD, khẳng định nào sau đây bắt buộc phải đúng? Phương án A: Hai cạnh bên bằng nhau; Phương án B: Đoạn đáy lớn A'B' gấp đôi đoạn đáy nhỏ C'D'; Phương án C: Góc A' bằng góc B'; Phương án D: Hai đường chéo vuông góc với nhau. Các em có 15 giây chọn đáp án.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho hình thang $ABCD$ có đáy $AB = 2 CD$. Trên hình biểu diễn $A'B'C'D'$, khẳng định nào <b>bắt buộc đúng</b>?
    </p>

    <div class="space-y-1.5 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Hai cạnh bên $A'D' = B'C'$</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>B.</b> Đoạn $A'B' = 2 C'D'$ và $A'B' \parallel C'D'$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> $\widehat{A'} = \widehat{B'}$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> $A'C' \perp B'D'$</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian suy nghĩ:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. LỜI GIẢI VÍ DỤ 2: ĐÁP ÁN B CHÍNH XÁC",
        "subtitle": "BÀI 14 • MỤC 3 • BẢO TOÀN TỈ SỐ HAI ĐÁY SONG SONG",
        "mascotMode": "celebrating",
        "mascotTip": r"Vì $AB \parallel CD$ nên tỉ số $\frac{A'B'}{C'D'} = \frac{AB}{CD} = 2$!",
        "narration": "Hết thời gian. Đáp án đúng là B: Đoạn đáy lớn A'B' gấp đôi đoạn đáy nhỏ C'D' và A'B' song song C'D'. Giải thích: Hai đáy AB và CD là hai đoạn thẳng nằm trên hai đường thẳng song song. Theo Tính chất 4 của phép chiếu song song, tỉ số độ dài của hai đoạn thẳng song song phải được bảo toàn nguyên vẹn. Do đó tỉ số A'B' chia C'D' bắt buộc phải bằng hai. Còn góc và độ dài cạnh bên không được bảo toàn.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Giải thích chi tiết:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• Vì $AB \parallel CD$ nên theo Tính chất 4: $\frac{A'B'}{C'D'} = \frac{AB}{CD} = 2$.</p>
      <p>• Hai đáy $A'B'$ và $C'D'$ vẫn song song với nhau.</p>
      <p>• Các phương án A, C, D sai vì phép chiếu song song không bảo toàn độ lớn góc và độ dài cạnh không song song.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án B.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. KỸ THUẬT VẼ HÌNH KHÔNG GIAN BẰNG NÉT LIỀN VÀ NÉT ĐỨT",
        "subtitle": "BÀI 14 • MỤC 3 • NGUYÊN TẮC BẮT BUỘC CỦA BỘ GIÁO DỤC",
        "mascotMode": "pointer",
        "mascotTip": r"Cạnh nhìn thấy: Nét liền (Solid). Cạnh bị khuất: Nét đứt (Dashed)!",
        "narration": "Khi vẽ một hình không gian như hình chóp, hình lăng trụ, hình hộp: Các cạnh nhìn thấy từ góc quan sát phải vẽ bằng nét liền. Các cạnh bị các mặt khác che khuất bắt buộc phải vẽ bằng nét đứt đoạn. Đường cao vuông góc với đáy nếu có phải dựng thẳng đứng chuẩn xác. Tên các đỉnh ghi bằng chữ in hoa, in nghiêng, đặt cách đỉnh từ sáu đến mười pixel.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-teal-950 to-slate-900 p-4 rounded-xl border border-teal-500/40 text-xs">
    <div class="font-bold text-teal-300 text-sm mb-2">Quy Ước Vẽ Hình Không Gian Chuẩn Bộ GD&ĐT</div>
    <div class="grid grid-cols-2 gap-2.5">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400">
        <b class="text-emerald-300">Nét liền (Solid):</b><br/>
        Vẽ các đường biên và các cạnh nhìn thấy được trực tiếp từ hướng nhìn.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-rose-400">
        <b class="text-rose-300">Nét đứt (Dashed):</b><br/>
        Vẽ các cạnh nằm phía sau, bị các mặt phía trước che khuất.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-amber-400">
        <b class="text-amber-300">Đường cao:</b><br/>
        Đỉnh nào vuông góc mặt phẳng đáy thì dựng thẳng đứng góc $90^\circ$.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400">
        <b class="text-cyan-300">Nhãn đỉnh:</b><br/>
        Chữ in hoa $S, A, B, C, D$, đặt phía ngoài hình, không để nét vẽ đè lên chữ.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: HÌNH BIỂU DIỄN CỦA HÌNH TRÒN VÀ CẶP ĐƯỜNG KÍNH VUÔNG GÓC",
        "subtitle": "BÀI 14 • MỤC 3 • BÀI TOÁN HÌNH ELIP NÂNG CAO 30S",
        "mascotMode": "thinking",
        "mascotTip": r"Hình tròn biến thành Elip, hai đường kính vuông góc biến thành hai dây cung liên hợp!",
        "narration": "Ví dụ 3: Cho hình tròn tâm O có hai đường kính AB và CD vuông góc với nhau. Hình biểu diễn của hình tròn là một hình elip tâm O'. Khi đó, hình biểu diễn của hai đường kính AB và CD là gì? Phương án A: Hai đường kính vuông góc của hình elip; Phương án B: Hai trục lớn và trục bé của hình elip; Phương án C: Hai dây cung cắt nhau tại O' và không nhất thiết vuông góc; Phương án D: Hai tiếp tuyến song song. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho hình tròn tâm $O$ có $AB \perp CD$ tại $O$. Trên hình biểu diễn elip tâm $O'$, hình ảnh của $AB$ và $CD$ là:
    </p>

    <div class="space-y-1.5 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Luôn là hai trục lớn và trục bé của elip</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> Hai đường kính vuông góc với nhau của elip</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>C.</b> Hai dây cung đi qua tâm $O'$, nói chung không vuông góc</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Hai tiếp tuyến của elip</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-purple-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-purple-300 font-medium">Thời gian tư duy:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. LỜI GIẢI VÍ DỤ 3: HAI ĐƯỜNG KÍNH LIÊN HỢP CỦA ELIP",
        "subtitle": "BÀI 14 • MỤC 3 • KHÔNG BẢO TOÀN TÍNH VUÔNG GÓC",
        "mascotMode": "celebrating",
        "mascotTip": r"$AB \perp CD$ nhưng $A'B'$ và $C'D'$ nói chung KHÔNG vuông góc trên Elip!",
        "narration": "Hết thời gian. Đáp án đúng là C: Hai dây cung đi qua tâm O' và nói chung không vuông góc với nhau. Giải thích: Vì O là trung điểm của cả AB và CD nên O' cũng là trung điểm của cả A'B' và C'D'. Do đó A'B' và C'D' là hai dây cung đi qua tâm của hình elip (gọi là hai đường kính liên hợp). Tuy nhiên, vì phép chiếu song song không bảo toàn tính vuông góc nên hai dây cung này nói chung không vuông góc với nhau, trừ trường hợp góc chiếu rất đặc biệt.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Giải thích chi tiết:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• Hình tròn chiếu thành hình elip tâm $O'$.</p>
      <p>• Điểm $O$ là trung điểm $AB$ và $CD \implies O'$ là trung điểm $A'B'$ và $C'D'$.</p>
      <p>• Do đó $A'B'$ và $C'D'$ là hai đường kính (dây cung qua tâm) của elip.</p>
      <p>• Vì tính vuông góc không được bảo toàn nên $A'B'$ và $C'D'$ nói chung <b>không vuông góc</b> với nhau (không nhất thiết là trục lớn và trục bé).</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án C.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI VỀ HÌNH BIỂU DIỄN HÌNH HỌC",
        "subtitle": "BÀI 14 • MỤC 3 • 4 MỆNH ĐỀ THỰC CHIẾN 30 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Rà soát kĩ: Tam giác vuông vẽ thành tam giác thường, hình vuông vẽ thành hình bình hành!",
        "narration": "Ví dụ 4: Xét tính Đúng hay Sai của các khẳng định sau về hình biểu diễn: Mệnh đề a: Hình biểu diễn của một tam giác vuông cân có thể là một tam giác tù. Mệnh đề b: Hình biểu diễn của một hình vuông bắt buộc phải là một hình chữ nhật. Mệnh đề c: Hình biểu diễn của hình chóp tứ giác đều là một hình chóp có đáy là hình bình hành. Mệnh đề d: Cạnh bị che khuất trong không gian bắt buộc phải vẽ bằng nét liền. Các em có 30 giây kiểm tra.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Ví dụ 4 (Đúng / Sai)</span>
      <span class="text-xs text-slate-400">Định dạng thi 2025</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Xét tính Đúng / Sai của các khẳng định:
    </p>

    <div class="space-y-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>a)</b> Hình biểu diễn của một tam giác vuông cân có thể là một tam giác tù.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>b)</b> Hình biểu diễn của hình vuông bắt buộc phải là hình chữ nhật.</span>
        <span class="font-bold text-rose-400">[ SAI ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>c)</b> Đáy của hình chóp tứ giác đều được biểu diễn bằng hình bình hành.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>d)</b> Cạnh bị che khuất trong không gian vẽ bằng nét liền.</span>
        <span class="font-bold text-rose-400">[ SAI ]</span>
      </div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian kiểm tra:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. LỜI GIẢI VÍ DỤ 4 & BẾ MẠC TOÀN KHÓA BÀI 14",
        "subtitle": "BÀI 14 • MỤC 3 • TỔNG KẾT TOÀN DIỆN PHÉP CHIẾU SONG SONG",
        "mascotMode": "celebrating",
        "mascotTip": r"Nắm vững các quy tắc vẽ hình để tự tin vẽ đúng chuẩn mọi bài toán hình học không gian!",
        "narration": "Chúc mừng các em đã hoàn thành xuất sắc toàn bộ Bài 14: Phép chiếu song song. Phân tích Ví dụ 4: Mệnh đề a ĐÚNG vì góc vuông không bảo toàn, có thể biến thành góc tù. Mệnh đề b SAI vì hình vuông biểu diễn tổng quát bằng hình bình hành, góc không nhất thiết 90 độ. Mệnh đề c ĐÚNG vì đáy hình vuông của chóp tứ giác đều vẽ thành hình bình hành. Mệnh đề d SAI vì cạnh bị che khuất bắt buộc vẽ nét đứt. Như vậy chúng ta đã trang bị đầy đủ kiến thức của cả Chương 4. Hẹn gặp lại các em ở Bài Ôn tập cuối chương 4!",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Đáp án và giải thích chuẩn mực:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• <b>a) ĐÚNG:</b> Góc vuông có thể biến thành góc nhọn hoặc góc tù.</p>
      <p>• <b>b) SAI:</b> Hình vuông được biểu diễn bằng <b>hình bình hành</b> tổng quát.</p>
      <p>• <b>c) ĐÚNG:</b> Đáy là hình vuông nên vẽ thành hình bình hành tâm $O$.</p>
      <p>• <b>d) SAI:</b> Cạnh bị che khuất bắt buộc phải vẽ bằng <b>nét đứt</b> (dashed line).</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">🎉 CHÚC MỪNG CÁC EM ĐÃ HOÀN THÀNH TOÀN BỘ BÀI 14 TOÁN 11 KNTT!</div>
    </div>
  </div>
</div>
"""
    }
]
