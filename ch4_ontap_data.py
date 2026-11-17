# -*- coding: utf-8 -*-
"""
CHƯƠNG IV: QUAN HỆ SONG SONG TRONG KHÔNG GIAN
BÀI TẬP CUỐI CHƯƠNG IV (ÔN TẬP CHƯƠNG 4) - TOÁN 11 KNTT
Mục 1, Mục 2, Mục 3 - Đầy đủ 36 Scenes (12 scenes/mục)
Mỗi mục có 4 ví dụ minh họa kèm đồng hồ đếm ngược 15s/30s
Giọng đọc Thầy Nam Minh (vi-VN-NamMinhNeural) chuẩn sư phạm Bộ GD&ĐT
"""

# ==============================================================================
# MỤC 1: HỆ THỐNG HOÁ KIẾN THỨC & SƠ ĐỒ TƯ DUY TOÀN BỘ CHƯƠNG IV
# ==============================================================================
ONTAP_C4_MUC1_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. TOÀN CẢNH CHƯƠNG IV: QUAN HỆ SONG SONG TRONG KHÔNG GIAN",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • HỆ THỐNG HOÁ LÝ THUYẾT NỀN TẢNG",
        "mascotMode": "pointer",
        "mascotTip": r"Nắm vững 5 trụ cột: Điểm & mp, 2 đường song song, đường song song mp, 2 mp song song, phép chiếu song song!",
        "narration": "Chào mừng các em đến với Bài ôn tập cuối chương 4: Quan hệ song song trong không gian môn Toán lớp 11 Kết Nối Tri Thức. Trong chương học này, chúng ta đã xây dựng toàn bộ nền móng của hình học không gian 3 chiều qua 5 bài học cốt lõi: từ khái niệm mở đầu và các cách xác định mặt phẳng, hai đường thẳng song song và chéo nhau, đường thẳng song song với mặt phẳng, hai mặt phẳng song song cùng hình lăng trụ, hình hộp, cho đến phép chiếu song song và hình biểu diễn. Hôm nay chúng ta sẽ xâu chuỗi toàn bộ kiến thức thành một sơ đồ tư duy hoàn chỉnh.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-indigo-950 via-purple-950 to-indigo-950 p-4 rounded-xl border border-indigo-500/40">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-lg uppercase tracking-wider">Tổng quan chương IV</span>
      <h3 class="text-xl font-black text-amber-200">5 Trụ Cột Quan Hệ Song Song Trong Không Gian</h3>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-300 mt-2">
      <div class="p-2 bg-slate-900 rounded border border-indigo-500/30">
        <b class="text-indigo-300">Bài 10: Điểm & Mặt phẳng</b><br/>6 tính chất thừa nhận, 3 cách xác định mặt phẳng.
      </div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500/30">
        <b class="text-emerald-300">Bài 11: 2 Đường thẳng</b><br/>Cắt nhau, song song, chéo nhau, trùng nhau, 3 giao tuyến.
      </div>
      <div class="p-2 bg-slate-900 rounded border border-cyan-500/30">
        <b class="text-cyan-300">Bài 12: Đường $\parallel$ Mp</b><br/>Điều kiện $d \parallel (P)$ và định lý giao tuyến song song.
      </div>
      <div class="p-2 bg-slate-900 rounded border border-purple-500/30">
        <b class="text-purple-300">Bài 13: 2 Mp song song</b><br/>$(P) \parallel (Q)$, định lý Ta-lét, hình lăng trụ, hình hộp.
      </div>
      <div class="p-2 bg-slate-900 rounded border border-teal-500/30">
        <b class="text-teal-300">Bài 14: Phép chiếu song song</b><br/>Bảo toàn song song, tỉ số, quy tắc vẽ hình biểu diễn.
      </div>
      <div class="p-2 bg-slate-900 rounded border border-amber-500/30">
        <b class="text-amber-300">Thiết diện đa diện</b><br/>Thiết diện chóp, lăng trụ, hình hộp.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. SƠ ĐỒ TƯ DUY: CÁC VỊ TRÍ TƯƠNG ĐỐI TRONG KHÔNG GIAN",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • BẢNG PHÂN LOẠI TOÀN DIỆN",
        "mascotMode": "explaining",
        "mascotTip": r"Đường với đường có 4 vị trí! Đường với mặt có 3 vị trí! Mặt với mặt có 3 vị trí!",
        "narration": "Trước hết, các em cần nắm chắc bảng phân loại tất cả các vị trí tương đối: Giữa hai đường thẳng phân biệt: có 3 vị trí là cắt nhau, song song và chéo nhau. Chú ý: chéo nhau là không cùng nằm trong bất kì mặt phẳng nào. Giữa đường thẳng và mặt phẳng: có 3 vị trí là đường thẳng nằm trong mặt phẳng, đường thẳng cắt mặt phẳng và đường thẳng song song với mặt phẳng. Giữa hai mặt phẳng: có 2 vị trí phân biệt là cắt nhau theo một giao tuyến và song song không có điểm chung.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-slate-900 to-indigo-950 p-4 rounded-xl border border-indigo-500/40 text-xs">
    <div class="font-bold text-indigo-300 text-sm mb-2">Bảng Tổng Hợp Vị Trí Tương Đối</div>
    <div class="grid grid-cols-3 gap-2">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400">
        <b class="text-emerald-300">1. Hai đường thẳng $a$ và $b$:</b><br/>
        • <b>Cắt nhau:</b> $a \cap b = \{I\}$.<br/>
        • <b>Song song:</b> $a \parallel b$ (đồng phẳng, rời nhau).<br/>
        • <b>Chéo nhau:</b> không đồng phẳng.<br/>
        • <b>Trùng nhau:</b> $a \equiv b$.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400">
        <b class="text-cyan-300">2. Đường thẳng $d$ và mp $(P)$:</b><br/>
        • <b>Nằm trong:</b> $d \subset (P)$ ($\infty$ điểm chung).<br/>
        • <b>Cắt nhau:</b> $d \cap (P) = \{M\}$ ($1$ điểm chung).<br/>
        • <b>Song song:</b> $d \parallel (P)$ ($0$ điểm chung).
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-purple-400">
        <b class="text-purple-300">3. Hai mặt phẳng $(P)$ và $(Q)$:</b><br/>
        • <b>Cắt nhau:</b> $(P) \cap (Q) = d$ (giao tuyến).<br/>
        • <b>Song song:</b> $(P) \parallel (Q)$ ($0$ điểm chung).<br/>
        • <b>Trùng nhau:</b> $(P) \equiv (Q)$.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: ĐẾM SỐ VỊ TRÍ TƯƠNG ĐỐI TRONG KHÔNG GIAN",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • CÂU HỎI NHẬN BIẾT 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Đọc kĩ đề bài: 'hai đường thẳng phân biệt' thì không tính trường hợp trùng nhau!",
        "narration": "Ví dụ 1: Trong không gian, giữa hai đường thẳng phân biệt có tất cả bao nhiêu vị trí tương đối? Phương án A: 2 vị trí; Phương án B: 3 vị trí; Phương án C: 4 vị trí; Phương án D: 1 vị trí. Các em có 15 giây chọn đáp án.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Nhận biết</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Trong không gian, cho hai đường thẳng <b>phân biệt</b> $a$ và $b$. Giữa chúng có tất cả bao nhiêu vị trí tương đối?
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> 2 vị trí</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>B.</b> 3 vị trí</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> 4 vị trí</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> 1 vị trí</div>
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
        "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN B (3 VỊ TRÍ TƯƠNG ĐỐI)",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • CẮT NHAU, SONG SONG, CHÉO NHAU",
        "mascotMode": "celebrating",
        "mascotTip": r"Vì đề bài cho 'phân biệt' nên chỉ có: Cắt nhau, Song song và Chéo nhau!",
        "narration": "Hết thời gian. Đáp án đúng là B: 3 vị trí tương đối. Đó là: cắt nhau (có 1 điểm chung), song song (cùng thuộc một mặt phẳng và không có điểm chung), và chéo nhau (không cùng thuộc bất kì mặt phẳng nào). Nếu đề bài không có chữ phân biệt thì sẽ có 4 vị trí, tính thêm trường hợp trùng nhau.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Phân tích chi tiết:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• Vì $a$ và $b$ <b>phân biệt</b> ($a \not\equiv b$), nên giữa chúng có đúng <b>3 vị trí tương đối</b>:</p>
      <p>1. <b>Cắt nhau:</b> $a$ và $b$ đồng phẳng và có 1 điểm chung duy nhất.</p>
      <p>2. <b>Song song:</b> $a$ và $b$ đồng phẳng và không có điểm chung nào ($a \parallel b$).</p>
      <p>3. <b>Chéo nhau:</b> $a$ và $b$ không cùng nằm trong bất kì mặt phẳng nào.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án B.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. BỘ BA ĐỊNH LÍ GIAO TUYẾN KINH ĐIỂN",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • VŨ KHÍ TỐI THƯỢNG TÌM THIẾT DIỆN",
        "mascotMode": "explaining",
        "mascotTip": r"Giao tuyến của 2 mặt phẳng qua 2 đường song song thì luôn song song với chúng!",
        "narration": "Một trong những kỹ năng quan trọng nhất của Chương 4 là tìm giao tuyến bằng Bộ ba Định lí giao tuyến: Định lí 1: Nếu hai mặt phẳng lần lượt chứa hai đường thẳng song song thì giao tuyến của chúng nếu có sẽ song song với hai đường thẳng đó. Định lí 2: Nếu đường thẳng d song song với mặt phẳng alpha thì mặt phẳng nào chứa d cắt alpha theo giao tuyến song song với d. Định lí 3: Hai mặt phẳng song song bị cắt bởi mặt phẳng thứ ba theo hai giao tuyến song song.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-950 to-indigo-950 p-4 rounded-xl border border-blue-500/40 text-xs">
    <div class="font-bold text-blue-300 text-sm mb-2">Bộ Ba Định Lí Giao Tuyến Cốt Lõi</div>
    <div class="space-y-2">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400">
        <b class="text-emerald-300">1. Định lí Giao tuyến 1 (Bài 11):</b><br/>
        $$\begin{cases} a \subset (P), \ b \subset (Q) \\ a \parallel b \\ (P) \cap (Q) = d \end{cases} \implies d \parallel a \parallel b$$
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400">
        <b class="text-cyan-300">2. Định lí Giao tuyến 2 (Bài 12):</b><br/>
        $$\begin{cases} a \parallel (P) \\ a \subset (Q) \\ (P) \cap (Q) = d \end{cases} \implies d \parallel a$$
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-purple-400">
        <b class="text-purple-300">3. Định lí Giao tuyến 3 (Bài 13):</b><br/>
        $$\begin{cases} (P) \parallel (Q) \\ (R) \cap (P) = a \\ (R) \cap (Q) = b \end{cases} \implies a \parallel b$$
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: TÌM GIAO TUYẾN THEO ĐỊNH LÍ 1",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • CÂU HỎI THÔNG HIỂU 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Mặt phẳng $(SAB)$ và $(SCD)$ cùng đi qua đỉnh $S$ và chứa $AB \parallel CD$!",
        "narration": "Ví dụ 2: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Giao tuyến của hai mặt phẳng SAB và SCD là: Phương án A: Đường thẳng SO với O là tâm hình bình hành; Phương án B: Đường thẳng đi qua S và song song với AD; Phương án C: Đường thẳng đi qua S và song song với AB và CD; Phương án D: Đường thẳng AC. Các em có 15 giây chọn đáp án.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Giao tuyến của $(SAB)$ và $(SCD)$ là:
    </p>

    <div class="space-y-1.5 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Đường thẳng $SO$ với $O$ là tâm hình bình hành</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> Đường thẳng qua $S$ và song song với $AD$</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>C.</b> Đường thẳng $d$ đi qua $S$ và $d \parallel AB \parallel CD$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Đường thẳng $AC$</div>
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
        "title": "7. LỜI GIẢI VÍ DỤ 2: GIAO TUYẾN QUA $S$ VÀ SONG SONG $AB$",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • ÁP DỤNG ĐỊNH LÍ GIAO TUYẾN 1",
        "mascotMode": "celebrating",
        "mascotTip": r"$S$ là điểm chung, $AB \subset (SAB), CD \subset (SCD), AB \parallel CD \implies d$ qua $S$ và $d \parallel AB \parallel CD$!",
        "narration": "Hết thời gian. Đáp án đúng là C: Đường thẳng d đi qua S và song song với AB và CD. Lời giải: Ta có S là một điểm chung của hai mặt phẳng SAB và SCD. Mặt phẳng SAB chứa đường thẳng AB, mặt phẳng SCD chứa đường thẳng CD. Vì ABCD là hình bình hành nên AB song song CD. Áp dụng Định lí giao tuyến 1, giao tuyến của hai mặt phẳng này là đường thẳng d đi qua điểm chung S và song song với AB và CD.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Chứng minh chuẩn SGK:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• Điểm $S \in (SAB) \cap (SCD) \implies S$ là điểm chung.</p>
      <p>• Có $AB \subset (SAB)$ và $CD \subset (SCD)$ mà $AB \parallel CD$ (do $ABCD$ là hình bình hành).</p>
      <p>• Theo Định lí giao tuyến 1, giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng $d$ đi qua $S$ và:</p>
      <p class="font-mono text-center text-amber-300">$$d \parallel AB \parallel CD$$</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án C.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. CÔNG THỨC ĐẾM VÀ TÍNH CHẤT CỦA CÁC KHỐI ĐA DIỆN",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • HÌNH CHÓP, TỨ DIỆN, LĂNG TRỤ, HÌNH HỘP",
        "mascotMode": "pointer",
        "mascotTip": r"Ghi nhớ bảng chỉ số: Hình hộp có 8 đỉnh, 12 cạnh, 6 mặt, 4 đường chéo!",
        "narration": "Chúng ta cùng tổng kết bảng chỉ số của các khối đa diện thường gặp: Tứ diện có 4 đỉnh, 6 cạnh và 4 mặt. Hình chóp n giác có n cộng 1 đỉnh, 2n cạnh và n cộng 1 mặt. Hình lăng trụ n giác có 2n đỉnh, 3n cạnh và n cộng 2 mặt. Đặc biệt, hình hộp có 8 đỉnh, 12 cạnh, 6 mặt hình bình hành và 4 đường chéo đồng quy tại trung điểm mỗi đường.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-950 to-slate-900 p-4 rounded-xl border border-purple-500/40 text-xs">
    <div class="font-bold text-purple-300 text-sm mb-2">Bảng Tổng Kết Đa Diện Chương IV</div>
    <div class="grid grid-cols-2 gap-2.5">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-amber-400">
        <b class="text-amber-300">Hình chóp $n$-giác:</b><br/>
        • Đỉnh ($V$): $n + 1$<br/>
        • Cạnh ($E$): $2n$ ($n$ cạnh đáy $+ n$ cạnh bên)<br/>
        • Mặt ($F$): $n + 1$ ($1$ đáy $+ n$ mặt bên)
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400">
        <b class="text-emerald-300">Hình lăng trụ $n$-giác:</b><br/>
        • Đỉnh ($V$): $2n$<br/>
        • Cạnh ($E$): $3n$ ($2n$ cạnh đáy $+ n$ cạnh bên)<br/>
        • Mặt ($F$): $n + 2$ ($2$ đáy $+ n$ mặt bên)
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400">
        <b class="text-cyan-300">Hình hộp:</b><br/>
        • 8 đỉnh, 12 cạnh, 6 mặt bình hành.<br/>
        • 4 đường chéo cắt nhau tại tâm $O$.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-rose-400">
        <b class="text-rose-300">Hình tứ diện:</b><br/>
        • 4 đỉnh, 6 cạnh, 4 mặt tam giác.<br/>
        • Có 3 cặp cạnh đối diện chéo nhau.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: TÍNH SỐ ĐƯỜNG CHÉO VÀ CẶP MẶT SONG SONG CỦA HÌNH HỘP",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • BÀI TOÁN TÍNH TOÁN HÌNH HỌP 30S",
        "mascotMode": "thinking",
        "mascotTip": r"Hình hộp có 6 mặt tạo thành 3 cặp mặt đối diện song song, và đúng 4 đường chéo!",
        "narration": "Ví dụ 3: Cho một hình hộp ABCD.A'B'C'D'. Hỏi hình hộp này có tất cả bao nhiêu đường chéo và có bao nhiêu cặp mặt phẳng đối diện song song với nhau? Phương án A: 4 đường chéo và 3 cặp mặt đối diện song song; Phương án B: 6 đường chéo và 3 cặp mặt đối diện song song; Phương án C: 4 đường chéo và 6 cặp mặt đối diện song song; Phương án D: 8 đường chéo và 4 cặp mặt đối diện song song. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Một hình hộp $ABCD.A'B'C'D'$ có tất cả bao nhiêu đường chéo và bao nhiêu cặp mặt đối diện song song?
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>A.</b> 4 đường chéo, 3 cặp mặt song song</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> 6 đường chéo, 3 cặp mặt song song</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> 4 đường chéo, 6 cặp mặt song song</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> 8 đường chéo, 4 cặp mặt song song</div>
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
        "title": "10. LỜI GIẢI VÍ DỤ 3: 4 ĐƯỜNG CHÉO VÀ 3 CẶP MẶT SONG SONG",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • CẤU TRÚC ĐỐI XỨNG HÌNH HỘP",
        "mascotMode": "celebrating",
        "mascotTip": r"4 đường chéo là $AC', BD', CA', DB'$. 3 cặp mặt đối diện là đáy trên-dưới và 2 cặp mặt bên đối diện!",
        "narration": "Hết thời gian. Đáp án đúng là A: 4 đường chéo và 3 cặp mặt phẳng đối diện song song. Bốn đường chéo nối các đỉnh đối diện là AC', BD', CA' và DB', cả bốn đoạn thẳng này đồng quy tại trung điểm của mỗi đường. Sáu mặt của hình hộp chia thành 3 cặp mặt đối diện song song: cặp thứ nhất là hai đáy ABCD và A'B'C'D'; cặp thứ hai là ABB'A' và CDD'C'; cặp thứ ba là ADD'A' và BCC'B'.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Lời giải chi tiết:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• <b>4 đường chéo của hình hộp:</b> $AC', BD', CA', DB'$ (chúng cắt nhau tại trung điểm của mỗi đường).</p>
      <p>• <b>3 cặp mặt đối diện song song:</b></p>
      <p class="font-mono text-cyan-300">1. $(ABCD) \parallel (A'B'C'D')$<br/>2. $(ABB'A') \parallel (CDD'C')$<br/>3. $(ADD'A') \parallel (BCC'B')$</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án A.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI TỔNG HỢP LÝ THUYẾT CHƯƠNG IV",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • 4 MỆNH ĐỀ ĐÁNH GIÁ NĂNG LỰC TOÀN CHƯƠNG",
        "mascotMode": "thinking",
        "mascotTip": r"Rà soát kĩ từng mệnh đề quan hệ song song trong không gian!",
        "narration": "Ví dụ 4: Xét tính Đúng hay Sai của các khẳng định sau về toàn bộ lý thuyết Chương 4: Mệnh đề a: Nếu đường thẳng a song song với mặt phẳng P thì có duy nhất một mặt phẳng chứa a và song song với P. Mệnh đề b: Hai đường thẳng phân biệt không cắt nhau thì luôn luôn song song với nhau. Mệnh đề c: Phép chiếu song song luôn bảo toàn tỉ số độ dài của hai đoạn thẳng cùng nằm trên một đường thẳng. Mệnh đề d: Thiết diện của hình chóp tứ giác cắt bởi một mặt phẳng bất kì luôn là một tứ giác. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Ví dụ 4 (Đúng / Sai)</span>
      <span class="text-xs text-slate-400">Định dạng thi 2025</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Xét tính Đúng / Sai của các khẳng định toàn chương:
    </p>

    <div class="space-y-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>a)</b> Nếu $a \parallel (P)$ thì qua $a$ có duy nhất một mặt phẳng song song với $(P)$.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>b)</b> Hai đường thẳng phân biệt không cắt nhau thì song song với nhau.</span>
        <span class="font-bold text-rose-400">[ SAI ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>c)</b> Phép chiếu song song bảo toàn tỉ số độ dài của hai đoạn thẳng cùng thuộc một đường thẳng.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>d)</b> Thiết diện của hình chóp tứ giác luôn luôn là một tứ giác.</span>
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
        "title": "12. LỜI GIẢI VÍ DỤ 4 & BẾ MẠC MỤC 1",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 1 • CỦNG CỐ CHẮC CHẮN NỀN TẢNG",
        "mascotMode": "celebrating",
        "mascotTip": r"Thiết diện chóp tứ giác có thể là tam giác, tứ giác hoặc ngũ giác!",
        "narration": "Chúc mừng các em đã hoàn thành Mục 1 Ôn tập chương 4. Giải thích chi tiết Ví dụ 4: Mệnh đề a ĐÚNG vì đây là hệ quả của tính chất 1 Bài 13. Mệnh đề b SAI vì hai đường thẳng không cắt nhau có thể chéo nhau. Mệnh đề c ĐÚNG theo tính chất 4 của phép chiếu song song. Mệnh đề d SAI vì thiết diện của hình chóp tứ giác có thể là tam giác (nếu chỉ cắt 3 mặt) hoặc ngũ giác (nếu cắt cả 4 mặt bên và mặt đáy). Hẹn gặp lại các em ở Mục 2: Các phương pháp giải toán trọng tâm.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Đáp án và phân tích:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• <b>a) ĐÚNG:</b> Hệ quả tính chất duy nhất của mặt phẳng song song.</p>
      <p>• <b>b) SAI:</b> Hai đường thẳng không cắt nhau có thể <b>chéo nhau</b>.</p>
      <p>• <b>c) ĐÚNG:</b> Bảo toàn tỉ số đoạn thẳng thẳng hàng hoặc song song.</p>
      <p>• <b>d) SAI:</b> Thiết diện chóp tứ giác có thể là <b>tam giác, tứ giác hoặc ngũ giác</b>.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">⭐ TỔNG KẾT MỤC 1: Đã hệ thống hóa toàn bộ sơ đồ tư duy lý thuyết Chương IV!</div>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 2: PHƯƠNG PHÁP GIẢI CÁC DẠNG TOÁN TRỌNG TÂM (GIAO TUYẾN, GIAO ĐIỂM, CHỨNG MINH SONG SONG)
# ==============================================================================
ONTAP_C4_MUC2_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. DẠNG TOÁN 1: TÌM GIAO TUYẾN CỦA HAI MẶT PHẲNG",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • PHƯƠNG PHÁP 2 ĐIỂM CHUNG VÀ PHƯƠNG SONG SONG",
        "mascotMode": "pointer",
        "mascotTip": r"Cách 1: Tìm 2 điểm chung phân biệt. Cách 2: Tìm 1 điểm chung và phương giao tuyến song song!",
        "narration": "Chào mừng các em đến với Mục 2: Phương pháp giải các dạng toán trọng tâm của Chương 4. Dạng toán số 1 là Tìm giao tuyến của hai mặt phẳng: Ta có hai chiến thuật: Chiến thuật 1: Tìm hai điểm chung phân biệt A và B, giao tuyến là đường thẳng AB. Chiến thuật 2: Khi chỉ thấy một điểm chung duy nhất S, nhưng hai mặt phẳng lần lượt chứa hai đường thẳng song song a và b, ta áp dụng Định lí giao tuyến 1 để kết luận giao tuyến là đường thẳng đi qua S và song song với a và b.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-950 to-indigo-950 p-4 rounded-xl border border-blue-500/40 text-xs">
    <div class="font-bold text-blue-300 text-sm mb-2">Chiến Thuật 2 Hướng Tìm Giao Tuyến Chuẩn Mực</div>
    <div class="grid grid-cols-2 gap-3">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400">
        <b class="text-cyan-300">Hướng 1: Hai điểm chung phân biệt</b>
        <p class="text-slate-300 mt-1">
          • Tìm $A \in (P) \cap (Q)$.<br/>
          • Tìm $B \in (P) \cap (Q)$.<br/>
          $\implies$ Giao tuyến là đường thẳng $AB$.
        </p>
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400">
        <b class="text-emerald-300">Hướng 2: Một điểm chung + Phương song song</b>
        <p class="text-slate-300 mt-1">
          • Điểm chung $S \in (P) \cap (Q)$.<br/>
          • $a \subset (P), b \subset (Q)$ với $a \parallel b$.<br/>
          $\implies$ Giao tuyến $d$ qua $S$ và $d \parallel a \parallel b$.
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. DẠNG TOÁN 2: TÌM GIAO ĐIỂM CỦA ĐƯỜNG THẲNG VÀ MẶT PHẲNG",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • PHƯƠNG PHÁP MẶT PHẲNG PHỤ TRỢ",
        "mascotMode": "explaining",
        "mascotTip": r"Quy trình 3 bước: Chọn mp phụ $(\beta) \supset d \to$ Tìm giao tuyến $a = (\beta) \cap (\alpha) \to$ Giao điểm $I = d \cap a$!",
        "narration": "Dạng toán số 2: Tìm giao điểm của đường thẳng d và mặt phẳng alpha. Nếu đường thẳng d và một đường thẳng a trong alpha đồng phẳng và cắt nhau thì giao điểm I chính là giao điểm cần tìm. Nếu chưa thấy đường thẳng a, ta sử dụng mặt phẳng phụ: Bước 1: Chọn mặt phẳng phụ beta chứa d. Bước 2: Tìm giao tuyến a của beta với alpha. Bước 3: Trong mặt phẳng beta, cho d cắt a tại điểm I. Điểm I chính là giao điểm của đường thẳng d với mặt phẳng alpha.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-950 to-teal-950 p-4 rounded-xl border border-emerald-500/40 text-xs">
    <div class="font-bold text-emerald-300 text-sm mb-2">Thuật Toán 3 Bước Tìm Giao Điểm $d \cap (\alpha)$</div>
    <div class="space-y-2">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-amber-400">
        <b class="text-amber-300">Bước 1: Chọn mặt phẳng phụ $(\beta)$ chứa $d$</b>
        <p class="text-slate-300 mt-0.5">Ưu tiên mặt phẳng đi qua đỉnh hoặc chứa đường chéo đáy dễ tìm giao tuyến.</p>
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400">
        <b class="text-cyan-300">Bước 2: Tìm giao tuyến $a = (\beta) \cap (\alpha)$</b>
        <p class="text-slate-300 mt-0.5">Sử dụng phương pháp 2 điểm chung hoặc định lí giao tuyến song song.</p>
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400">
        <b class="text-emerald-300">Bước 3: Lấy giao điểm trong $(\beta)$</b>
        <p class="text-slate-300 mt-0.5">Trong $(\beta)$, gọi $I = d \cap a \implies I$ chính là giao điểm cần tìm: $I = d \cap (\alpha)$.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: TÌM GIAO ĐIỂM ĐƯỜNG THẲNG VÀ MẶT PHẲNG",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • BÀI TOÁN TỨ DIỆN 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Chọn mặt phẳng phụ $(BCD)$ chứa đường thẳng $MN$!",
        "narration": "Ví dụ 1: Cho tứ diện ABCD. Gọi M, N lần lượt là hai điểm trên cạnh BC và CD sao cho MN không song song với BD. Giao điểm của đường thẳng MN với mặt phẳng ABD là giao điểm của MN với đường thẳng nào sau đây? Phương án A: Đường thẳng AB; Phương án B: Đường thẳng AD; Phương án C: Đường thẳng BD; Phương án D: Đường thẳng BC. Các em có 15 giây chọn đáp án.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Nhận biết</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho tứ diện $ABCD$. Lấy $M \in BC, N \in CD$ sao cho $MN \not\parallel BD$. Giao điểm của $MN$ với $(ABD)$ là giao điểm của $MN$ với:
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Đường thẳng $AB$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> Đường thẳng $AD$</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>C.</b> Đường thẳng $BD$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Đường thẳng $BC$</div>
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
        "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN C (GIAO ĐIỂM VỚI $BD$)",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • XÉT TRONG MẶT PHẲNG ĐÁY $(BCD)$",
        "mascotMode": "celebrating",
        "mascotTip": r"$MN$ và $BD$ cùng nằm trong mặt phẳng $(BCD)$ và cắt nhau tại $I \in (ABD)$!",
        "narration": "Hết thời gian. Đáp án đúng là C: Đường thẳng BD. Lời giải: Vì M thuộc BC và N thuộc CD nên đường thẳng MN nằm trọn vẹn trong mặt phẳng BCD. Trong mặt phẳng BCD, vì MN không song song với BD nên hai đường thẳng này kéo dài sẽ cắt nhau tại một điểm I. Do I thuộc đường thẳng BD, mà BD nằm trong mặt phẳng ABD, nên điểm I thuộc mặt phẳng ABD. Vậy I chính là giao điểm của đường thẳng MN với mặt phẳng ABD.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Chứng minh chuẩn xác:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• Trong mặt phẳng $(BCD)$: có $MN \subset (BCD)$ và $BD \subset (BCD)$.</p>
      <p>• Vì $MN \not\parallel BD$ nên trong $(BCD)$, kéo dài $MN$ cắt $BD$ tại $I = MN \cap BD$.</p>
      <p>• Do $I \in BD$ mà $BD \subset (ABD) \implies I \in (ABD)$.</p>
      <p>• Vậy $I = MN \cap (ABD)$ chính là giao điểm của $MN$ với đường thẳng $BD$.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án C.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. DẠNG TOÁN 3: CHỨNG MINH ĐƯỜNG THẲNG SONG SONG MẶT PHẲNG",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • PHƯƠNG PHÁP ĐƯỜNG THẲNG PHỤ ĐỒNG PHẲNG",
        "mascotMode": "explaining",
        "mascotTip": r"Muốn $d \parallel (P)$: Chứng minh $d \not\subset (P)$ và tìm $d' \subset (P)$ sao cho $d \parallel d'$!",
        "narration": "Dạng toán số 3: Chứng minh đường thẳng d song song với mặt phẳng alpha. Phương pháp chuẩn: Bước 1: Khẳng định đường thẳng d không nằm trong mặt phẳng alpha. Bước 2: Tìm hoặc dựng trong mặt phẳng alpha một đường thẳng d phẩy song song với d. Thông thường d phẩy là đường trung bình, cạnh đối của hình bình hành hoặc áp dụng định lí Ta-lét. Bước 3: Kết luận d song song với mặt phẳng alpha.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-950 to-indigo-950 p-4 rounded-xl border border-blue-500/40 text-xs">
    <div class="font-bold text-blue-300 text-sm mb-2">Quy Trình Chứng Minh $d \parallel (P)$ Chuẩn Mực</div>
    <div class="p-3 bg-slate-900 rounded border border-blue-400/30 text-amber-300 font-serif text-sm">
      $$\begin{cases} d \not\subset (P) \\ d' \subset (P) \\ d \parallel d' \end{cases} \implies d \parallel (P)$$
    </div>
    <div class="space-y-1 text-slate-300 mt-2">
      <p>• <b>Kỹ thuật tìm $d'$:</b> Thường là cạnh đối diện trong hình bình hành, đường trung bình trong tam giác, hoặc sử dụng tỉ số định lí Ta-lét.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: CHỨNG MINH ĐƯỜNG THẲNG SONG SONG VỚI MẶT PHẲNG",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • BÀI TOÁN HÌNH CHÓP TỨ GIÁC 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"$M, N$ là trung điểm $SA, SB \implies MN \parallel AB \parallel CD \implies MN \parallel (SCD)$!",
        "narration": "Ví dụ 2: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Gọi M, N lần lượt là trung điểm của SA và SB. Khẳng định nào sau đây là đúng? Phương án A: MN song song mặt phẳng SAB; Phương án B: MN song song mặt phẳng SCD; Phương án C: MN song song mặt phẳng SBC; Phương án D: MN cắt mặt phẳng SCD. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-teal-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-teal-500/20 text-teal-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho hình chóp $S.ABCD$ đáy hình bình hành. Gọi $M, N$ là trung điểm $SA, SB$. Khẳng định nào <b>đúng</b>?
    </p>

    <div class="space-y-1.5 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> $MN \parallel (SAB)$</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>B.</b> $MN \parallel (SCD)$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> $MN \parallel (SBC)$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> $MN$ cắt $(SCD)$</div>
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
        "title": "7. LỜI GIẢI VÍ DỤ 2: $MN \parallel (SCD)$",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • BƯỚC NỐI TÍNH CHẤT TRUNG BÌNH",
        "mascotMode": "celebrating",
        "mascotTip": r"$MN \not\subset (SCD)$ và $MN \parallel CD \subset (SCD) \implies MN \parallel (SCD)$!",
        "narration": "Hết thời gian. Đáp án đúng là B: MN song song mặt phẳng SCD. Lời giải: Trong tam giác SAB, M và N là trung điểm của SA và SB nên MN là đường trung bình, suy ra MN song song AB. Vì ABCD là hình bình hành nên AB song song CD. Từ đó suy ra MN song song CD. Vì CD nằm trong mặt phẳng SCD còn MN không nằm trong SCD, nên theo dấu hiệu nhận biết, MN song song với mặt phẳng SCD.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Chứng minh chi tiết:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• Trong $\triangle SAB$: $MN$ là đường trung bình $\implies MN \parallel AB$.</p>
      <p>• Do $ABCD$ là hình bình hành $\implies AB \parallel CD$.</p>
      <p>• Suy ra $MN \parallel CD$.</p>
      <p>• Vì $MN \not\subset (SCD)$ và $CD \subset (SCD)$ nên $MN \parallel (SCD)$.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án B.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. DẠNG TOÁN 4: CHỨNG MINH HAI MẶT PHẲNG SONG SONG",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • BẢN ĐỒ TƯ DUY 2 ĐƯỜNG CẮT NHAU",
        "mascotMode": "pointer",
        "mascotTip": r"Tìm 2 đường cắt nhau trong $(P)$ cùng song song $(Q)$ $\implies (P) \parallel (Q)$!",
        "narration": "Dạng toán số 4: Chứng minh hai mặt phẳng song song. Phương pháp cốt lõi: Ta tìm trong mặt phẳng P hai đường thẳng a và b cắt nhau tại một điểm. Sau đó chứng minh a song song với mặt phẳng Q và b song song với mặt phẳng Q. Từ đó kết luận mặt phẳng P song song với mặt phẳng Q theo Định lí 1. Đây là câu hỏi rất hay xuất hiện trong các đề thi THPT.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-950 to-indigo-950 p-4 rounded-xl border border-purple-500/40 text-xs">
    <div class="font-bold text-purple-300 text-sm mb-2">Bản Đồ Chứng Minh $(P) \parallel (Q)$</div>
    <div class="p-3 bg-slate-900 rounded border border-purple-400/30 text-amber-300 font-serif text-sm">
      $$\begin{cases} a \subset (P), \ b \subset (P) \\ a \cap b = \{I\} \\ a \parallel a' \subset (Q) \implies a \parallel (Q) \\ b \parallel b' \subset (Q) \implies b \parallel (Q) \end{cases} \implies (P) \parallel (Q)$$
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: CHỨNG MINH HAI MẶT PHẲNG SONG SONG TRONG HÌNH HỘP",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • CẶP MẶT PHẲNG CHÉO KINH ĐIỂN 30S",
        "mascotMode": "thinking",
        "mascotTip": r"Mặt phẳng $(B D A')$ và mặt phẳng $(B' D' C)$ luôn song song với nhau!",
        "narration": "Ví dụ 3: Cho hình hộp ABCD.A'B'C'D'. Mặt phẳng B D A' song song với mặt phẳng nào sau đây? Phương án A: Mặt phẳng B' D' C; Phương án B: Mặt phẳng A B C D; Phương án C: Mặt phẳng A' B' C' D'; Phương án D: Mặt phẳng A C C' A'. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho hình hộp $ABCD.A'B'C'D'$. Mặt phẳng $(BDA')$ song song với mặt phẳng nào?
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>A.</b> $(B'D'C)$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> $(ABCD)$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> $(A'B'C'D')$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> $(ACC'A')$</div>
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
        "title": "10. LỜI GIẢI VÍ DỤ 3: $(BDA') \parallel (B'D'C)$",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • CHỨNG MINH 2 CẶP ĐƯỜNG THẲNG SONG SONG",
        "mascotMode": "celebrating",
        "mascotTip": r"$BD \parallel B'D'$ và $BA' \parallel CD' \implies (BDA') \parallel (B'D'C)$!",
        "narration": "Hết thời gian. Đáp án đúng là A: Mặt phẳng B' D' C. Chứng minh: Thứ nhất, tứ giác B D D' B' là hình bình hành nên BD song song B' D', mà B' D' nằm trong mặt phẳng B' D' C nên BD song song với B' D' C. Thứ hai, tứ giác A B C D' là hình bình hành do có AB song song và bằng C D' (do cùng song song và bằng A' B'). Do đó B A' song song C D', mà C D' nằm trong B' D' C nên B A' song song với B' D' C. Vì BD và B A' cắt nhau tại B nên mặt phẳng B D A' song song với mặt phẳng B' D' C.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Lời giải hình học chuẩn mực:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• Trong hình hộp: $BD \parallel B'D' \subset (B'D'C) \implies BD \parallel (B'D'C)$.</p>
      <p>• Tứ giác $A'BCD'$ là hình bình hành vì $A'B \parallel D'C$ (do $A'B \parallel D'C'$ và cạnh bên) $\implies A'B \parallel D'C \subset (B'D'C) \implies A'B \parallel (B'D'C)$.</p>
      <p>• Trong $(BDA')$ có $BD \cap A'B = \{B\}$ nên $(BDA') \parallel (B'D'C)$.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án A.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI VỀ QUAN HỆ SONG SONG HÌNH CHÓP",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • 4 MỆNH ĐỀ PHÂN HÓA 30 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Kiểm tra kĩ từng mệnh đề giao tuyến và song song!",
        "narration": "Ví dụ 4: Cho hình chóp S.ABCD có đáy ABCD là hình thang với đáy lớn AB song song đáy nhỏ CD. Gọi M là trung điểm của cạnh SC. Xét tính Đúng hay Sai của các khẳng định sau: Mệnh đề a: Giao tuyến của hai mặt phẳng SAB và SCD là đường thẳng đi qua S và song song với AB. Mệnh đề b: Giao tuyến của hai mặt phẳng SAD và SBC là đường thẳng đi qua S. Mệnh đề c: Đường thẳng DM cắt mặt phẳng SAB. Mệnh đề d: Đường thẳng AB song song với mặt phẳng SCD. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Ví dụ 4 (Đúng / Sai)</span>
      <span class="text-xs text-slate-400">Định dạng thi 2025</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB \parallel CD, AB > CD$). Xét tính Đúng / Sai:
    </p>

    <div class="space-y-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>a)</b> $(SAB) \cap (SCD) = d$ qua $S$ và $d \parallel AB \parallel CD$.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>b)</b> Giao tuyến của $(SAD)$ và $(SBC)$ là đường thẳng đi qua $S$ và giao điểm $E = AD \cap BC$.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>c)</b> Đường thẳng $DM$ cắt mặt phẳng $(SAB)$.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>d)</b> Đường thẳng $AB \parallel (SCD)$.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
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
        "title": "12. LỜI GIẢI VÍ DỤ 4 & BẾ MẠC MỤC 2",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 2 • KẾT QUẢ ĐỐI CHIẾU 4 Ý ĐỀU ĐÚNG",
        "mascotMode": "celebrating",
        "mascotTip": r"Cả 4 mệnh đề đều ĐÚNG $100\%$!",
        "narration": "Giải thích chi tiết Ví dụ 4: Cả bốn mệnh đề đều ĐÚNG. Mệnh đề a ĐÚNG vì AB song song CD theo định lí giao tuyến 1. Mệnh đề b ĐÚNG vì hai cạnh bên AD và BC của hình thang cắt nhau tại E, điểm chung thứ nhất là S, điểm chung thứ hai là E, giao tuyến là SE. Mệnh đề c ĐÚNG vì DM kéo dài cắt giao tuyến của mặt phẳng phụ SCD với SAB. Mệnh đề d ĐÚNG vì AB song song CD nằm trong SCD và AB không thuộc SCD. Hẹn gặp lại các em ở Mục 3: Kỹ thuật xác định thiết diện nâng cao.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Đáp án và giải thích chi tiết:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• <b>a) ĐÚNG:</b> Định lí giao tuyến 1 vì $AB \parallel CD$.</p>
      <p>• <b>b) ĐÚNG:</b> $E = AD \cap BC$ trong đáy $\implies SE = (SAD) \cap (SBC)$.</p>
      <p>• <b>c) ĐÚNG:</b> Trong $(SCD)$, $DM$ cắt giao tuyến $d \implies DM$ cắt $(SAB)$.</p>
      <p>• <b>d) ĐÚNG:</b> $AB \not\subset (SCD)$ và $AB \parallel CD \subset (SCD) \implies AB \parallel (SCD)$.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">⭐ TỔNG KẾT MỤC 2: Thành thạo trọn bộ 4 dạng toán trọng tâm của quan hệ song song!</div>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 3: KỸ THUẬT XÁC ĐỊNH THIẾT DIỆN NÂNG CAO & ĐỀ RÈN LUYỆN TRẮC NGHIỆM 3 PHẦN
# ==============================================================================
ONTAP_C4_MUC3_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. CHIẾN LƯỢC TỔNG QUÁT TÌM THIẾT DIỆN NÂNG CAO",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • BƯỚC ĐỘT PHÁ TÌM ĐA GIÁC THIẾT DIỆN",
        "mascotMode": "pointer",
        "mascotTip": r"Tìm các đoạn giao tuyến khép kín của mặt phẳng cắt với tất cả các mặt của hình đa diện!",
        "narration": "Chào mừng các em đến với Mục 3: Kỹ thuật xác định thiết diện nâng cao và Đề rèn luyện trắc nghiệm chuẩn cấu trúc Bộ Giáo dục. Thiết diện của một hình đa diện khi cắt bởi một mặt phẳng alpha là đa giác phẳng giới hạn bởi các đoạn giao tuyến của alpha với các mặt của hình đa diện. Để tìm thiết diện nâng cao, ta kết hợp linh hoạt hai công cụ: kéo dài đường thẳng để tìm giao điểm mới trên các mặt phẳng phụ, và sử dụng các định lí giao tuyến song song để kẻ các đường song song.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-teal-950 to-indigo-950 p-4 rounded-xl border border-teal-500/40 text-xs">
    <div class="font-bold text-teal-300 text-sm mb-2">Quy Trình Tìm Thiết Diện Khép Kín</div>
    <div class="space-y-2">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400">
        <b class="text-cyan-300">1. Xác định giao tuyến trực tiếp:</b>
        <p class="text-slate-300 mt-1">Tìm các đoạn giao tuyến có sẵn trên các mặt chứa 2 điểm chung.</p>
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-amber-400">
        <b class="text-amber-300">2. Kẻ giao tuyến song song (nếu có):</b>
        <p class="text-slate-300 mt-1">Nếu mặt phẳng cắt song song với một đường thẳng hoặc một mặt phẳng, lập tức áp dụng Định lí giao tuyến để kẻ các đoạn song song.</p>
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400">
        <b class="text-emerald-300">3. Kéo dài cắt cạnh:</b>
        <p class="text-slate-300 mt-1">Kéo dài các đoạn giao tuyến để cắt các cạnh kéo dài của đa diện, tạo điểm chung mới cho các mặt còn lại.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. BÀI TOÁN KINH ĐIỂN: THIẾT DIỆN SONG SONG HAI ĐƯỜNG THẲNG CHÉO NHAU",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • HÌNH BÌNH HÀNH THIẾT DIỆN",
        "mascotMode": "explaining",
        "mascotTip": r"Mặt phẳng song song với 2 cạnh đối diện của tứ diện cắt tứ diện theo thiết diện là HÌNH BÌNH HÀNH!",
        "narration": "Một dạng bài toán kinh điển thường xuất hiện trong đề thi phân hóa cao: Cho tứ diện ABCD. Một mặt phẳng alpha song song với hai cạnh đối diện AB và CD cắt các cạnh AC, BC, BD, AD lần lượt tại M, N, P, Q. Khi đó, thiết diện MNPQ luôn luôn là một hình bình hành. Nếu tứ diện đều và mặt phẳng alpha đi qua trung điểm các cạnh thì thiết diện trở thành hình vuông.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-950 to-purple-950 p-4 rounded-xl border border-blue-500/40 text-xs">
    <div class="font-bold text-blue-300 text-sm mb-2">Định Lí Thiết Diện Song Song Hai Cạnh Đối Của Tứ Diện</div>
    <div class="p-3 bg-slate-900 rounded border border-blue-400/30 font-serif text-sm text-amber-300">
      $$\begin{cases} (\alpha) \parallel AB \\ (\alpha) \parallel CD \end{cases} \implies \begin{cases} MN \parallel PQ \parallel AB \\ MQ \parallel NP \parallel CD \end{cases} \implies MNPQ \text{ là hình bình hành}$$
    </div>
    <div class="p-2.5 bg-slate-800 rounded border-l-4 border-emerald-400 mt-2">
      <b class="text-emerald-300">Đặc biệt:</b> Nếu $AB \perp CD$ thì thiết diện là <b>hình chữ nhật</b>.<br/>
      Nếu $AB \perp CD$ và khoảng cách chia đều thì thiết diện là <b>hình vuông</b>.
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: XÁC ĐỊNH HÌNH DẠNG THIẾT DIỆN CỦA TỨ DIỆN ĐỀU",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • BÀI TOÁN THIẾT DIỆN 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Tứ diện đều có các cạnh đối vuông góc nhau $\implies$ thiết diện song song 2 cạnh đối là hình chữ nhật!",
        "narration": "Ví dụ 1: Cho tứ diện đều ABCD có tất cả các cạnh bằng a. Mặt phẳng alpha song song với hai cạnh đối diện AB và CD. Thiết diện của tứ diện cắt bởi mặt phẳng alpha luôn là hình gì? Phương án A: Hình thang cân; Phương án B: Hình chữ nhật; Phương án C: Tam giác đều; Phương án D: Hình thoi. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho tứ diện đều $ABCD$ cạnh $a$. Mặt phẳng $(\alpha)$ song song với $AB$ và $CD$. Thiết diện cắt bởi $(\alpha)$ là hình gì?
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Hình thang cân</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>B.</b> Hình chữ nhật</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> Tam giác đều</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Hình thoi</div>
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
        "title": "4. LỜI GIẢI VÍ DỤ 1: THIẾT DIỆN LÀ HÌNH CHỮ NHẬT",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • TÍNH CHẤT VUÔNG GÓC CỦA CẶP CẠNH ĐỐI TỨ DIỆN ĐỀU",
        "mascotMode": "celebrating",
        "mascotTip": r"Trong tứ diện đều, hai cạnh đối luôn vuông góc $AB \perp CD \implies$ hình bình hành có 1 góc vuông là hình chữ nhật!",
        "narration": "Hết thời gian. Đáp án đúng là B: Hình chữ nhật. Lời giải: Vì mặt phẳng alpha song song với AB và CD nên thiết diện MNPQ có MN song song PQ song song AB, và MQ song song NP song song CD. Do đó MNPQ là hình bình hành. Mặt khác, trong tứ diện đều ABCD, hai cạnh đối diện AB và CD vuông góc với nhau. Vì MN song song AB và MQ song song CD nên MN cũng vuông góc với MQ. Hình bình hành MNPQ có một góc vuông nên là một hình chữ nhật.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Chứng minh hình học:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• $(\alpha) \parallel AB \implies MN \parallel PQ \parallel AB$.</p>
      <p>• $(\alpha) \parallel CD \implies MQ \parallel NP \parallel CD$.</p>
      <p>• Tứ giác $MNPQ$ có hai cặp cạnh đối song song $\implies MNPQ$ là <b>hình bình hành</b>.</p>
      <p>• Trong tứ diện đều $ABCD$, ta có tính chất $AB \perp CD$.</p>
      <p>• Vì $MN \parallel AB$ và $MQ \parallel CD \implies MN \perp MQ \implies \widehat{NMQ} = 90^\circ$.</p>
      <p>• Vậy thiết diện $MNPQ$ là <b>hình chữ nhật</b>.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án B.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. CHU VI THIẾT DIỆN KHÔNG ĐỔI TRONG TỨ DIỆN ĐỀU",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • ĐỊNH LÍ BẢO TOÀN CHU VI KINH ĐIỂN",
        "mascotMode": "explaining",
        "mascotTip": r"Chu vi thiết diện hình chữ nhật luôn bằng $2a$, không phụ thuộc vào vị trí mặt phẳng $(\alpha)$!",
        "narration": "Một kết quả toán học vô cùng kì diệu của bài toán trên: Dù mặt phẳng alpha di chuyển ở bất kì vị trí nào song song với AB và CD, thì chu vi của hình chữ nhật thiết diện MNPQ luôn luôn là một hằng số không đổi và bằng hai lần độ dài cạnh a. Ta có MN bằng k lần AB, còn MQ bằng một trừ k lần CD. Tổng hai cạnh liên tiếp luôn bằng a, do đó chu vi luôn bằng 2a.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-950 to-slate-900 p-4 rounded-xl border border-purple-500/40 text-xs">
    <div class="font-bold text-purple-300 text-sm mb-2">Định Lí Chu Vi Thiết Diện Bất Biến</div>
    <p class="text-slate-300 leading-relaxed text-sm">
      Cho tứ diện đều $ABCD$ cạnh $a$. Mặt phẳng $(\alpha) \parallel AB, CD$ cắt $AC$ theo tỉ số $\frac{AM}{AC} = x \ (0 < x < 1)$.
    </p>

    <div class="grid grid-cols-2 gap-3 mt-2 text-xs">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400">
        <b class="text-cyan-300">Độ dài các cạnh:</b><br/>
        $MN = x \cdot a$<br/>
        $MQ = (1 - x) \cdot a$
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-amber-400">
        <b class="text-amber-300">Chu vi bất biến:</b><br/>
        $$2(MN + MQ) = 2(xa + (1 - x)a) = 2a$$
        (Không phụ thuộc vị trí $x$!).
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: DIỆN TÍCH THIẾT DIỆN LỚN NHẤT KHI NÀO?",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • BÀI TOÁN TỐI ƯU HÓA HÌNH HỌC 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Bất đẳng thức Cauchy: $S = x(1-x)a^2 \le \frac{a^2}{4}$, đạt được khi $x = 1/2$!",
        "narration": "Ví dụ 2: Vẫn với tứ diện đều ABCD cạnh a và mặt phẳng alpha song song AB, CD. Diện tích thiết diện MNPQ đạt giá trị lớn nhất bằng bao nhiêu? Phương án A: a bình phương chia 2; Phương án B: a bình phương chia 4; Phương án C: a bình phương chia 8; Phương án D: a bình phương căn 3 chia 4. Các em có 15 giây tính toán.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-teal-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-teal-500/20 text-teal-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho tứ diện đều $ABCD$ cạnh $a$. Diện tích thiết diện $MNPQ$ lớn nhất bằng:
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> $\frac{a^2}{2}$</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>B.</b> $\frac{a^2}{4}$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> $\frac{a^2}{8}$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> $\frac{a^2\sqrt{3}}{4}$</div>
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
        "title": "7. LỜI GIẢI VÍ DỤ 2: $S_{\\max} = \\frac{a^2}{4}$",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • ÁP DỤNG BẤT ĐẲNG THỨC CAUCHY",
        "mascotMode": "celebrating",
        "mascotTip": r"Diện tích lớn nhất khi thiết diện là HÌNH VUÔNG cạnh $\frac{a}{2}$!",
        "narration": "Hết thời gian. Đáp án đúng là B: a bình phương chia 4. Lời giải: Gọi x là tỉ số AM trên AC với x nằm trong khoảng từ 0 đến 1. Khi đó hai kích thước của hình chữ nhật thiết diện là MN bằng x nhân a và MQ bằng một trừ x nhân a. Diện tích hình chữ nhật là S bằng MN nhân MQ bằng x nhân một trừ x nhân a bình phương. Áp dụng bất đẳng thức Cô-si cho hai số dương x và một trừ x, ta có tích của chúng nhỏ hơn hoặc bằng tổng chia đôi tất cả bình phương, tức là 1 phần 4. Dấu bằng xảy ra khi x bằng một nửa, tức là M là trung điểm AC, khi đó thiết diện là hình vuông cạnh a chia 2.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Lời giải tối ưu chi tiết:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• Diện tích hình chữ nhật: $S(x) = MN \cdot MQ = (x a) \cdot ((1 - x) a) = a^2 \cdot x(1 - x)$.</p>
      <p>• Áp dụng BĐT Cauchy: $x(1 - x) \le \left(\frac{x + 1 - x}{2}\right)^2 = \frac{1}{4}$.</p>
      <p>• Dấu bằng xảy ra $\iff x = 1 - x \iff x = \frac{1}{2}$ ($M, N, P, Q$ là trung điểm các cạnh).</p>
      <p>• Khi đó thiết diện là <b>hình vuông</b> và $S_{\max} = \frac{a^2}{4}$.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án B.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. CẤU TRÚC ĐỀ THI TỐT NGHIỆP THPT CHUẨN 2025",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • ĐỊNH HƯỚNG ÔN LUYỆN 3 PHẦN",
        "mascotMode": "pointer",
        "mascotTip": r"Nắm chắc cấu trúc: Phần I (4 lựa chọn), Phần II (Đúng/Sai 4 ý), Phần III (Trả lời ngắn điền số)!",
        "narration": "Trước khi bước vào bài tập thực chiến cuối cùng, thầy muốn nhắc lại cấu trúc đề thi tốt nghiệp THPT theo chương trình giáo dục phổ thông 2018: Đề thi gồm 3 phần: Phần I gồm các câu trắc nghiệm nhiều lựa chọn 4 phương án. Phần II gồm các câu trắc nghiệm Đúng/Sai, mỗi câu có 4 ý a, b, c, d phân hóa sâu sắc. Phần III gồm các câu hỏi trả lời ngắn, học sinh tự giải và điền kết quả số học vào phiếu trả lời.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-950 to-slate-900 p-4 rounded-xl border border-blue-500/40 text-xs">
    <div class="font-bold text-blue-300 text-sm mb-2">Đặc Tả Đề Thi Môn Toán Chuẩn 2025 Của Bộ GD&ĐT</div>
    <div class="grid grid-cols-3 gap-2">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400">
        <b class="text-cyan-300">Phần I: 4 Lựa chọn</b><br/>
        • 12 câu hỏi.<br/>
        • Mỗi câu đúng được 0.25 điểm.<br/>
        • Nhận biết & Thông hiểu.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-amber-400">
        <b class="text-amber-300">Phần II: Đúng / Sai</b><br/>
        • 4 câu hỏi (16 ý $a, b, c, d$).<br/>
        • Đúng 1 ý: 0.1đ; 2 ý: 0.25đ; 3 ý: 0.5đ; 4 ý: 1.0đ.<br/>
        • Vận dụng phân hóa.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400">
        <b class="text-emerald-300">Phần III: Trả lời ngắn</b><br/>
        • 6 câu hỏi điền số.<br/>
        • Mỗi câu đúng được 0.5 điểm.<br/>
        • Vận dụng cao & Thực tế.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: CÂU TRẮC NGHIỆM ĐÚNG / SAI PHÂN HÓA",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • TÍNH CHẤT LĂNG TRỤ VÀ TỈ SỐ ĐOẠN THẲNG 30S",
        "mascotMode": "thinking",
        "mascotTip": r"Lăng trụ tam giác $ABC.A'B'C'$, các mặt bên là hình bình hành nên các cạnh bên song song và bằng nhau!",
        "narration": "Ví dụ 3: Cho hình lăng trụ tam giác ABC.A'B'C'. Gọi I, K lần lượt là trọng tâm của hai tam giác ABC và A'B'C'. Xét tính Đúng hay Sai của các khẳng định sau: Mệnh đề a: Đoạn thẳng IK song song với cạnh bên AA'. Mệnh đề b: Đoạn thẳng IK có độ dài bằng cạnh bên AA'. Mệnh đề c: Mặt phẳng A I B song song với mặt phẳng A' K B'. Mệnh đề d: Đường thẳng IK vuông góc với hai mặt phẳng đáy. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded">Ví dụ 3 (Đúng / Sai)</span>
      <span class="text-xs text-slate-400">Phần II đề thi 2025</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho lăng trụ $ABC.A'B'C'$. Gọi $I, K$ là trọng tâm $\triangle ABC$ và $\triangle A'B'C'$. Xét tính Đúng / Sai:
    </p>

    <div class="space-y-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>a)</b> Đường thẳng $IK \parallel AA'$.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>b)</b> Độ dài đoạn thẳng $IK = AA'$.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>c)</b> Mặt phẳng $(AIB) \parallel (A'KB')$.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>d)</b> Đường thẳng $IK$ luôn vuông góc với hai đáy.</span>
        <span class="font-bold text-rose-400">[ SAI ]</span>
      </div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-purple-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-purple-300 font-medium">Thời gian kiểm tra:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. LỜI GIẢI VÍ DỤ 3: PHÂN TÍCH TỪNG MỆNH ĐỀ",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • HÌNH BÌNH HÀNH VÀ LĂNG TRỤ XIÊN",
        "mascotMode": "celebrating",
        "mascotTip": r"$IK$ song song cạnh bên, nhưng lăng trụ xiên thì cạnh bên không vuông góc đáy!",
        "narration": "Hết thời gian. Giải thích chi tiết Ví dụ 3: Mệnh đề a và b ĐÚNG vì gọi M, M' là trung điểm BC và B'C' thì tứ giác AMM'A' là hình bình hành. Do I và K chia AM và A'M' theo cùng tỉ số 2/3 nên tứ giác II'KK' hay AIKA' tương ứng là hình bình hành, suy ra IK song song và bằng AA'. Mệnh đề c ĐÚNG vì mặt phẳng AIB chính là mặt đáy ABC, còn A'KB' chính là mặt đáy A'B'C', mà hai đáy lăng trụ luôn song song. Mệnh đề d SAI vì lăng trụ tổng quát có thể là lăng trụ xiên, khi đó cạnh bên và IK không vuông góc với đáy.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Đáp án phân tích chuẩn xác:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• <b>a, b) ĐÚNG:</b> Tứ giác tạo bởi hai trung tuyến là hình bình hành $\implies IK \parallel AA'$ và $IK = AA'$.</p>
      <p>• <b>c) ĐÚNG:</b> Vì $(AIB) \equiv (ABC)$ và $(A'KB') \equiv (A'B'C')$, mà hai đáy lăng trụ luôn song song.</p>
      <p>• <b>d) SAI:</b> Lăng trụ tổng quát có thể là <b>lăng trụ xiên</b>, khi đó cạnh bên không vuông góc mặt đáy.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ 3 ý ĐÚNG, 1 ý SAI.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: CÂU HỎI TRẢ LỜI NGẮN (ĐIỀN ĐÁP SỐ CHUẨN TNMAKER)",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • PHẦN III ĐỀ THI 2025 (30 GIÂY)",
        "mascotMode": "thinking",
        "mascotTip": r"Tính toán cẩn thận và trả lời đúng duy nhất 1 số học!",
        "narration": "Ví dụ 4: Câu hỏi trả lời ngắn theo định dạng Phần 3: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành diện tích bằng 48 cm vuông. Mặt phẳng P đi qua trọng tâm G của tam giác SAB và song song với mặt phẳng đáy ABCD cắt các cạnh bên SA, SB, SC, SD tạo thành một đa giác thiết diện. Tính diện tích của đa giác thiết diện đó theo đơn vị cm vuông. Các em có 30 giây tính toán.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Ví dụ 4 (Trả lời ngắn)</span>
      <span class="text-xs text-slate-400">Phần III đề thi tốt nghiệp</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho hình chóp $S.ABCD$ đáy hình bình hành diện tích $S_{ABCD} = 48\text{ cm}^2$. Mặt phẳng $(P)$ qua trọng tâm $G$ của $\triangle SAB$ và song song với đáy $(ABCD)$ cắt hình chóp tạo thành thiết diện. Diện tích thiết diện đó bằng bao nhiêu $\text{cm}^2$?
    </p>

    <div class="p-3 bg-slate-900 rounded border border-amber-400/30 text-center">
      <span class="text-xs text-slate-400">Điền số đáp án vào ô:</span>
      <div class="text-2xl font-black text-amber-400 font-mono mt-1">Đáp số: ?</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian tính toán:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. LỜI GIẢI VÍ DỤ 4 & BẾ MẠC TOÀN KHÓA CHƯƠNG IV",
        "subtitle": "ÔN TẬP CHƯƠNG IV • MỤC 3 • TỈ SỐ DIỆN TÍCH BẰNG BÌNH PHƯƠNG TỈ SỐ ĐỒNG DẠNG",
        "mascotMode": "celebrating",
        "mascotTip": r"$k = \frac{SG}{SM} = \frac{2}{3} \implies \frac{S_{td}}{S_{ABCD}} = k^2 = \frac{4}{9} \implies S_{td} = \frac{4}{9} \times 48 \approx 21.33$!",
        "narration": "Hết thời gian. Đáp án chính xác là 21.33. Lời giải: Vì mặt phẳng P song song với đáy ABCD nên thiết diện cắt các cạnh bên tạo thành hình bình hành M N P Q đồng dạng với đáy ABCD. Gọi M' là trung điểm AB, vì G là trọng tâm tam giác SAB nên tỉ số đồng dạng k bằng SG trên SM' bằng 2 phần 3. Tỉ số diện tích của hai đa giác đồng dạng bằng bình phương tỉ số đồng dạng, tức là k bình phương bằng 4 phần 9. Do đó diện tích thiết diện bằng 4 phần 9 nhân với 48, bằng 64 chia 3, xấp xỉ 21.33 cm vuông. Chúc mừng các em đã hoàn thành xuất sắc toàn bộ Chương 4!",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Lời giải số học chi tiết:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• Mặt phẳng $(P) \parallel (ABCD) \implies$ Thiết diện là hình bình hành $MNPQ$ đồng dạng với $ABCD$.</p>
      <p>• Do $G$ là trọng tâm $\triangle SAB$ nên tỉ số vị tự / đồng dạng là:</p>
      <p class="font-mono text-center text-amber-300">$$k = \frac{SG}{SM'} = \frac{2}{3} \quad (M' \text{ là trung điểm } AB)$$</p>
      <p>• Tỉ số diện tích bằng bình phương tỉ số đồng dạng:</p>
      <p class="font-mono text-center text-emerald-300">$$\frac{S_{MNPQ}}{S_{ABCD}} = k^2 = \left(\frac{2}{3}\right)^2 = \frac{4}{9}$$</p>
      <p>• Diện tích thiết diện là: $S_{MNPQ} = \frac{4}{9} \cdot 48 = \frac{64}{3} \approx \mathbf{21.33}\text{ (cm}^2)$.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">🎉 ĐÁP SỐ: 21.33 (hoặc 64/3). BẾ MẠC TOÀN KHÓA CHƯƠNG IV TOÁN 11 KNTT!</div>
    </div>
  </div>
</div>
"""
    }
]
