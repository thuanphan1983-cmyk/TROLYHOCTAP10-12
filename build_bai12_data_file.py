# -*- coding: utf-8 -*-
"""
Script to build ch4_bai12_data.py
BÀI 12: ĐƯỜNG THẲNG VÀ MẶT PHẲNG SONG SONG - TOÁN 11 KNTT
Mục 1, Mục 2, Mục 3 - Đầy đủ 36 Scenes (12 scenes/mục)
Mỗi mục có 4 ví dụ minh họa kèm đồng hồ đếm ngược 15s/30s
Giọng đọc Thầy Nam Minh (vi-VN-NamMinhNeural) chuẩn sư phạm Bộ GD&ĐT
"""

import os

header = r'''# -*- coding: utf-8 -*-
"""
CHƯƠNG IV: QUAN HỆ SONG SONG TRONG KHÔNG GIAN
BÀI 12: ĐƯỜNG THẲNG VÀ MẶT PHẲNG SONG SONG - TOÁN 11 KNTT
Mục 1, Mục 2, Mục 3 - Đầy đủ 36 Scenes (12 scenes/mục)
Mỗi mục có 4 ví dụ minh họa kèm đồng hồ đếm ngược 15s/30s
Giọng đọc Thầy Nam Minh (vi-VN-NamMinhNeural) chuẩn sư phạm Bộ GD&ĐT
"""

# ==============================================================================
# MỤC 1: VỊ TRÍ TƯƠNG ĐỐI & ĐIỀU KIỆN ĐƯỜNG THẲNG SONG SONG MẶT PHẲNG
# ==============================================================================
BAI12_MUC1_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. VỊ TRÍ TƯƠNG ĐỐI CỦA ĐƯỜNG THẲNG VÀ MẶT PHẲNG",
        "subtitle": "BÀI 12 • MỤC 1 • KHỞI ĐỘNG VÀ ĐẶT VẤN ĐỀ",
        "mascotMode": "pointer",
        "mascotTip": r"Trong không gian, đường thẳng d và mặt phẳng (P) có bao nhiêu vị trí tương đối?",
        "narration": "Chào mừng các em đến với Bài 12: Đường thẳng và mặt phẳng song song trong không gian. Trong thực tế đời sống, chúng ta thường xuyên bắt gặp hình ảnh đường thẳng song song với mặt phẳng: chẳng hạn như mép trần nhà song song với mặt sàn, hay dây điện kéo dài song song với mặt đất. Hôm nay, chúng ta sẽ cùng tìm hiểu các vị trí tương đối giữa đường thẳng và mặt phẳng, cùng điều kiện để một đường thẳng song song với một mặt phẳng.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-900/60 to-indigo-900/40 p-4 rounded-xl border border-blue-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-3 py-1 bg-blue-500/30 text-blue-300 font-bold text-xs rounded-full border border-blue-400/40">KHỞI ĐỘNG BÀI HỌC</span>
      <h3 class="text-base font-bold text-white">ĐƯỜNG THẲNG VÀ MẶT PHẲNG SONG SONG</h3>
    </div>
    <p class="text-slate-300 text-sm leading-relaxed">
      Cho đường thẳng $d$ và mặt phẳng $(\alpha)$ trong không gian. Số điểm chung của $d$ và $(\alpha)$ quyết định vị trí tương đối giữa chúng.
    </p>
  </div>

  <div class="grid grid-cols-3 gap-3 text-center">
    <div class="p-3 bg-slate-800/80 rounded-xl border border-blue-500/20 shadow-md">
      <div class="text-blue-400 text-xl font-bold mb-1">Vô số điểm</div>
      <div class="text-xs text-slate-400 font-medium">$d$ nằm trong $(\alpha)$</div>
      <div class="text-xs text-blue-300 mt-1 font-mono font-bold">$d \subset (\alpha)$</div>
    </div>
    <div class="p-3 bg-slate-800/80 rounded-xl border border-amber-500/20 shadow-md">
      <div class="text-amber-400 text-xl font-bold mb-1">Duy nhất 1 điểm</div>
      <div class="text-xs text-slate-400 font-medium">$d$ cắt $(\alpha)$</div>
      <div class="text-xs text-amber-300 mt-1 font-mono font-bold">$d \cap (\alpha) = \{M\}$</div>
    </div>
    <div class="p-3 bg-slate-800/80 rounded-xl border border-emerald-500/20 shadow-md">
      <div class="text-emerald-400 text-xl font-bold mb-1">0 điểm chung</div>
      <div class="text-xs text-slate-400 font-medium">$d$ song song $(\alpha)$</div>
      <div class="text-xs text-emerald-300 mt-1 font-mono font-bold">$d \parallel (\alpha)$</div>
    </div>
  </div>

  <div class="p-3 bg-slate-900/90 rounded-xl border border-slate-700/60 text-xs text-slate-300">
    <span class="font-bold text-amber-400">💡 Ứng dụng thực tế:</span> Các thanh dầm cầu song song với mặt nước, lan can cầu thang song song với mặt dốc cầu thang giúp bảo đảm tính cân bằng và an toàn kết cấu xây dựng.
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. BA VỊ TRÍ TƯƠNG ĐỐI TRONG KHÔNG GIAN",
        "subtitle": "BÀI 12 • MỤC 1 • ĐỊNH NGHĨA HÌNH HỌC VÀ KÝ HIỆU TẬP HỢP",
        "mascotMode": "think",
        "mascotTip": r"Đường thẳng d song song mặt phẳng (P) khi và chỉ khi chúng không có điểm chung nào!",
        "narration": "Đường thẳng d và mặt phẳng P có đúng ba vị trí tương đối. Thứ nhất, d nằm trong P: mọi điểm của d đều thuộc P, khi đó d và P có vô số điểm chung. Thứ hai, d cắt P tại điểm M: d và P có duy nhất một điểm chung M. Thứ ba, d song song với P: d và P không có bất kì điểm chung nào.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3 rounded-xl border border-blue-500/20">
    <h4 class="text-sm font-bold text-blue-300 mb-2">BẢNG PHÂN LOẠI BA VỊ TRÍ TƯƠNG ĐỐI</h4>
    <div class="space-y-2 text-xs">
      <div class="p-2.5 bg-slate-900/70 rounded-lg border border-slate-700/50 flex items-start gap-2">
        <span class="px-2 py-0.5 bg-blue-500/20 text-blue-300 font-bold rounded">1</span>
        <div>
          <span class="font-bold text-white">$d$ nằm trong mặt phẳng $(P)$</span>: ký hiệu là $d \subset (P)$.
          <div class="text-slate-400 mt-0.5">Số điểm chung: vô số. Tập hợp điểm chung: $d \cap (P) = d$.</div>
        </div>
      </div>
      <div class="p-2.5 bg-slate-900/70 rounded-lg border border-slate-700/50 flex items-start gap-2">
        <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 font-bold rounded">2</span>
        <div>
          <span class="font-bold text-white">$d$ cắt mặt phẳng $(P)$</span> tại một điểm $M$: ký hiệu là $d \cap (P) = \{M\}$.
          <div class="text-slate-400 mt-0.5">Số điểm chung: đúng 1 điểm duy nhất $M$.</div>
        </div>
      </div>
      <div class="p-2.5 bg-slate-900/70 rounded-lg border border-slate-700/50 flex items-start gap-2">
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">3</span>
        <div>
          <span class="font-bold text-white">$d$ song song với mặt phẳng $(P)$</span>: ký hiệu là $d \parallel (P)$ hoặc $(P) \parallel d$.
          <div class="text-slate-400 mt-0.5">Số điểm chung: không có điểm chung nào. $d \cap (P) = \emptyset$.</div>
        </div>
      </div>
    </div>
  </div>

  <div class="p-2.5 bg-indigo-950/40 rounded-lg border border-indigo-500/30 text-xs text-indigo-200">
    <span class="font-bold">Định nghĩa:</span> Đường thẳng $d$ được gọi là song song với mặt phẳng $(P)$ nếu chúng không có điểm chung.
    $$\mathbf{d \parallel (P) \iff d \cap (P) = \emptyset}$$
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. ĐIỀU KIỆN ĐỂ ĐƯỜNG THẲNG SONG SONG VỚI MẶT PHẲNG",
        "subtitle": "BÀI 12 • MỤC 1 • ĐỊNH LÍ 1 - CÔNG CỤ CHỨNG MINH CỐT LÕI",
        "mascotMode": "pointer",
        "mascotTip": r"Muốn chứng minh a // (P): hãy tìm trong (P) một đường thẳng b sao cho a // b và a không nằm trong (P)!",
        "narration": "Để chứng minh đường thẳng a song song với mặt phẳng P, chúng ta không thể đi tìm tất cả các điểm để kiểm tra xem có điểm chung hay không. Thay vào đó, ta sử dụng Định lí 1: Nếu đường thẳng a không nằm trong mặt phẳng P và song song với một đường thẳng b nằm trong P thì a song song với mặt phẳng P.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-gradient-to-r from-emerald-950/70 to-teal-950/60 p-3.5 rounded-xl border border-emerald-500/30">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full">ĐỊNH LÍ 1</span>
      <h4 class="text-sm font-bold text-emerald-200">ĐIỀU KIỆN ĐƯỜNG THẲNG SONG SONG MẶT PHẲNG</h4>
    </div>
    <div class="p-3 bg-slate-900/90 rounded-lg border border-emerald-500/30 text-xs text-slate-200 leading-relaxed">
      Nếu đường thẳng $a$ không nằm trong mặt phẳng $(P)$ và song song với một đường thẳng $b$ nằm trong $(P)$ thì đường thẳng $a$ song song với mặt phẳng $(P)$.
    </div>
    <div class="mt-3 p-2 bg-emerald-900/30 rounded border border-emerald-400/40 text-center font-mono text-emerald-300 font-bold text-xs">
      $$\begin{cases} a \not\subset (P) \\ b \subset (P) \\ a \parallel b \end{cases} \implies a \parallel (P)$$
    </div>
  </div>

  <div class="p-3 bg-slate-800/90 rounded-xl border border-amber-500/30 text-xs space-y-1.5">
    <div class="font-bold text-amber-300 flex items-center gap-1.5">
      <span>⚠️</span> <span>LƯU Ý QUAN TRỌNG VỀ ĐIỀU KIỆN $a \not\subset (P)$</span>
    </div>
    <p class="text-slate-300">
      Nếu quên kiểm tra điều kiện $a \not\subset (P)$, lỡ như $a$ đã nằm sẵn trong $(P)$ mà $a \parallel b$ (với $b \subset (P)$) thì kết luận $a \parallel (P)$ là hoàn toàn sai lầm!
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": r"4. PHƯƠNG PHÁP 3 BƯỚC CHỨNG MINH $a \parallel (P)$",
        "subtitle": "BÀI 12 • MỤC 1 • QUY TRÌNH CHUẨN MỰC BỘ GD&ĐT",
        "mascotMode": "cheer",
        "mascotTip": r"Quy trình 3 bước: 1. Tìm đường b; 2. Chứng minh a // b; 3. Kiểm tra điều kiện không thuộc!",
        "narration": "Để trình bày một bài toán chứng minh đường thẳng a song song với mặt phẳng P đạt điểm tối đa, các em hãy áp dụng chuẩn mực quy trình 3 bước sau đây. Bước 1: Tìm một đường thẳng b thích hợp nằm trong mặt phẳng P. Bước 2: Chứng minh a song song với b bằng các tính chất hình học phẳng như đường trung bình, định lí Ta-lét hay hình bình hành. Bước 3: Nêu rõ điều kiện a không nằm trong P và kết luận.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-blue-500/30">
    <h4 class="text-sm font-bold text-blue-300 mb-2">QUY TRÌNH 3 BƯỚC CHỨNG MINH $a \parallel (P)$</h4>
    <div class="space-y-2 text-xs">
      <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-700/60 flex items-start gap-2.5">
        <span class="w-6 h-6 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center shrink-0">1</span>
        <div>
          <b class="text-white">Bước 1: Chọn đường thẳng quy chiếu</b>
          <p class="text-slate-300 mt-0.5">Quan sát và tìm trong mặt phẳng $(P)$ một đường thẳng $b$ có phương song song với $a$.</p>
        </div>
      </div>
      <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-700/60 flex items-start gap-2.5">
        <span class="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0">2</span>
        <div>
          <b class="text-white">Bước 2: Chứng minh hai đường thẳng song song</b>
          <p class="text-slate-300 mt-0.5">Sử dụng: Đường trung bình tam giác, tỉ số Ta-lét đảo $\frac{AM}{AB} = \frac{AN}{AC}$, hoặc cạnh đối hình bình hành để chỉ ra $a \parallel b$.</p>
        </div>
      </div>
      <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-700/60 flex items-start gap-2.5">
        <span class="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center shrink-0">3</span>
        <div>
          <b class="text-white">Bước 3: Hoàn thiện lập luận chặt chẽ</b>
          <p class="text-slate-300 mt-0.5">Chỉ ra $a \not\subset (P)$, $b \subset (P)$ và $a \parallel b \implies a \parallel (P)$.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="p-2.5 bg-slate-900/80 rounded-lg border border-slate-700/70 text-xs text-slate-300 flex items-center gap-2">
    <span class="text-emerald-400 font-bold">💡 Mẹo tìm đường thẳng b:</span> Đường thẳng $b$ thường là giao tuyến của mặt phẳng $(P)$ với một mặt phẳng phụ $(\beta)$ chứa $a$.
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 1: NHẬN BIẾT VỊ TRÍ TƯƠNG ĐỐI",
        "subtitle": "BÀI 12 • MỤC 1 • VÍ DỤ MINH HỌA CƠ BẢN",
        "mascotMode": "think",
        "mascotTip": r"Quan sát đáy hình bình hành ABCD và các mặt bên của hình chóp S.ABCD!",
        "narration": "Chúng ta cùng đến với Ví dụ 1. Cho hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O. Xét các khẳng định sau: A: AB song song với mặt phẳng SCD; B: SA song song với mặt phẳng ABCD; C: SO cắt mặt phẳng ABCD tại O; D: CD song song với mặt phẳng SAB. Các em có 15 giây suy nghĩ để tìm khẳng định sai trong các mệnh đề.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded border border-indigo-400/30">VÍ DỤ 1 (15 GIÂY)</span>
      <span class="text-xs text-slate-400">Nhận biết vị trí tương đối</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed">
      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Trong các khẳng định sau, khẳng định nào <b>SAI</b>?
    </p>

    <div class="grid grid-cols-2 gap-2 mt-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700/60">
        <b>A.</b> $AB \parallel (SCD)$
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700/60">
        <b>B.</b> $SA \parallel (ABCD)$
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700/60">
        <b>C.</b> $SO \cap (ABCD) = \{O\}$
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700/60">
        <b>D.</b> $CD \parallel (SAB)$
      </div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-xl border border-indigo-500/40">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400 flex items-center justify-center font-bold text-indigo-300 text-sm">⏱️</div>
      <div>
        <div class="text-xs font-bold text-white">ĐỒNG HỒ TƯ DUY 15 GIÂY</div>
        <div class="text-[10px] text-slate-400">Kiểm tra xem SA có nằm trong hay cắt (ABCD) không?</div>
      </div>
    </div>
    <div class="text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30">15s</div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. GIẢI CHI TIẾT VÍ DỤ 1",
        "subtitle": "BÀI 12 • MỤC 1 • PHÂN TÍCH VÀ KẾT LUẬN",
        "mascotMode": "cheer",
        "mascotTip": r"Khẳng định B sai vì SA cắt mặt phẳng (ABCD) tại điểm A!",
        "narration": "Hết giờ rồi! Đáp án chính xác là phương án B. Điểm A vừa thuộc đường thẳng SA vừa thuộc mặt phẳng ABCD, do đó SA cắt mặt phẳng ABCD tại A, không thể song song. Ngược lại, AB không thuộc SCD và AB song song với CD nằm trong SCD nên AB song song với SCD. Tương tự CD song song với SAB là đúng.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full">LỜI GIẢI VÍ DỤ 1</span>
      <span class="text-xs font-bold text-emerald-300">ĐÁP ÁN: B</span>
    </div>

    <div class="space-y-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-rose-500/30 text-slate-300">
        <span class="text-rose-400 font-bold">Khẳng định B SAI vì:</span> Điểm $A \in SA$ và $A \in (ABCD)$, mà $S \notin (ABCD)$. Do đó đường thẳng $SA$ cắt $(ABCD)$ tại duy nhất điểm $A$, ký hiệu:
        $$SA \cap (ABCD) = \{A\}$$
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <span class="text-emerald-400 font-bold">Khẳng định A ĐÚNG vì:</span> Tứ giác $ABCD$ là hình bình hành nên $AB \parallel CD$.
        Mặt khác $CD \subset (SCD)$ và $AB \not\subset (SCD)$. Theo Định lí 1 suy ra $AB \parallel (SCD)$.
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <span class="text-emerald-400 font-bold">Khẳng định C, D ĐÚNG:</span> Tương tự $CD \parallel AB \subset (SAB) \implies CD \parallel (SAB)$ và $SO$ cắt đáy tại tâm $O$.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 2: ĐƯỜNG TRUNG BÌNH TAM GIÁC",
        "subtitle": "BÀI 12 • MỤC 1 • CHỨNG MINH ĐƯỜNG THẲNG SONG SONG MẶT PHẲNG",
        "mascotMode": "pointer",
        "mascotTip": r"Đoạn nối hai trung điểm trong một tam giác là đường trung bình, song song với cạnh thứ ba!",
        "narration": "Bây giờ chúng ta cùng đến với Ví dụ 2. Cho tứ diện ABCD. Gọi M, N lần lượt là trung điểm của AB và AC. Chứng minh rằng đường thẳng MN song song với mặt phẳng BCD. Tiếp theo, gọi P, Q lần lượt là trung điểm của BD và CD. Tứ giác MNPQ là hình gì? Các em có 15 giây để suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-blue-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-blue-500/20 text-blue-300 font-bold text-xs rounded border border-blue-400/30">VÍ DỤ 2 (15 GIÂY)</span>
      <span class="text-xs text-slate-400">Đường trung bình & hình bình hành</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed">
      Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của các cạnh $AB$ và $AC$.
    </p>
    <ul class="list-disc list-inside text-xs text-slate-300 mt-1 space-y-1">
      <li><b>a)</b> Chứng minh rằng $MN \parallel (BCD)$.</li>
      <li><b>b)</b> Gọi $P, Q$ lần lượt là trung điểm của $BD$ và $CD$. Chứng minh tứ giác $MNPQ$ là hình bình hành.</li>
    </ul>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-blue-950 rounded-xl border border-blue-500/40">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center font-bold text-blue-300 text-sm">⏱️</div>
      <div>
        <div class="text-xs font-bold text-white">ĐỒNG HỒ TƯ DUY 15 GIÂY</div>
        <div class="text-[10px] text-slate-400">Xem xét tam giác ABC và tam giác BCD có cạnh chung nào!</div>
      </div>
    </div>
    <div class="text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30">15s</div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. GIẢI CHI TIẾT VÍ DỤ 2",
        "subtitle": "BÀI 12 • MỤC 1 • TRÌNH BÀY CHUẨN MỰC BỘ GD&ĐT",
        "mascotMode": "cheer",
        "mascotTip": r"MN // BC và PQ // BC với độ dài bằng một nửa BC, suy ra MNPQ là hình bình hành!",
        "narration": "Thời gian đã hết! Chúng ta giải chi tiết như sau: Trong tam giác ABC, M và N là trung điểm của AB và AC nên MN là đường trung bình, suy ra MN song song với BC. Mặt khác BC nằm trong mặt phẳng BCD và MN không nằm trong BCD. Do đó MN song song với mặt phẳng BCD. Đối với câu b, trong tam giác BCD, PQ cũng là đường trung bình nên PQ song song và bằng một nửa BC. Do đó MN song song và bằng PQ, kết luận MNPQ là hình bình hành.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full">LỜI GIẢI VÍ DỤ 2</span>
      <span class="text-xs font-bold text-emerald-300">ĐÁP ÁN CHI TIẾT</span>
    </div>

    <div class="space-y-2 text-xs">
      <div class="p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b class="text-blue-300">a) Chứng minh $MN \parallel (BCD)$:</b>
        <p class="mt-1">
          Trong tam giác $ABC$, vì $M, N$ lần lượt là trung điểm của $AB, AC$ nên $MN$ là đường trung bình của $\triangle ABC \implies MN \parallel BC$.
        </p>
        <p class="mt-1 font-mono text-emerald-300">
          Ta có: $\begin{cases} MN \not\subset (BCD) \\ BC \subset (BCD) \\ MN \parallel BC \end{cases} \implies MN \parallel (BCD)$ (đpcm).
        </p>
      </div>

      <div class="p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b class="text-amber-300">b) Chứng minh $MNPQ$ là hình bình hành:</b>
        <p class="mt-1">
          Trong tam giác $BCD$, $P$ và $Q$ lần lượt là trung điểm của $BD$ và $CD$ nên $PQ$ là đường trung bình của $\triangle BCD \implies PQ \parallel BC$ và $PQ = \frac{1}{2}BC$.
        </p>
        <p class="mt-1">
          Mà $MN \parallel BC$ và $MN = \frac{1}{2}BC$. Do đó:
          $$\begin{cases} MN \parallel PQ \\ MN = PQ = \frac{1}{2}BC \end{cases} \implies MNPQ \text{ là hình bình hành}.$$
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: HÌNH BÌNH HÀNH VÀ ĐƯỜNG TRUNG BÌNH",
        "subtitle": "BÀI 12 • MỤC 1 • BÀI TOÁN THIẾT YẾU TRONG HÌNH CHÓP",
        "mascotMode": "pointer",
        "mascotTip": r"Tâm O của hình bình hành là trung điểm của cả hai đường chéo AC và BD!",
        "narration": "Tiếp theo là Ví dụ 3, một dạng toán xuất hiện liên tục trong các đề kiểm tra. Cho hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O. Gọi M là trung điểm của cạnh SC. Câu a: Chứng minh OM song song với mặt phẳng SAB. Câu b: Chứng minh OM song song với mặt phẳng SAD. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded border border-indigo-400/30">VÍ DỤ 3 (30 GIÂY)</span>
      <span class="text-xs text-slate-400">Ứng dụng tâm hình bình hành</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed">
      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$ là trung điểm của đoạn thẳng $SC$.
    </p>
    <div class="grid grid-cols-2 gap-2 mt-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b>a)</b> Chứng minh $OM \parallel (SAB)$.
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b>b)</b> Chứng minh $OM \parallel (SAD)$.
      </div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-xl border border-indigo-500/40">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400 flex items-center justify-center font-bold text-indigo-300 text-sm">⏱️</div>
      <div>
        <div class="text-xs font-bold text-white">ĐỒNG HỒ TƯ DUY 30 GIÂY</div>
        <div class="text-[10px] text-slate-400">Gợi ý: Xét tam giác SAC, O là trung điểm của AC!</div>
      </div>
    </div>
    <div class="text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30">30s</div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. GIẢI CHI TIẾT VÍ DỤ 3",
        "subtitle": "BÀI 12 • MỤC 1 • PHÂN TÍCH ĐƯỜNG TRUNG BÌNH TRONG TAM GIÁC SAC",
        "mascotMode": "cheer",
        "mascotTip": r"Trong tam giác SAC, OM là đường trung bình nên OM // SA!",
        "narration": "30 giây đã trôi qua! Hãy cùng đối chiếu lời giải: Vì ABCD là hình bình hành tâm O nên O là trung điểm của đường chéo AC. Trong tam giác SAC, O là trung điểm AC và M là trung điểm SC, nên OM là đường trung bình của tam giác SAC, suy ra OM song song với SA. Vì SA nằm trong mặt phẳng SAB và OM không nằm trong SAB nên OM song song với mặt phẳng SAB. Tương tự, vì SA cũng nằm trong mặt phẳng SAD nên OM song song với mặt phẳng SAD.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full">LỜI GIẢI VÍ DỤ 3</span>
      <span class="text-xs font-bold text-emerald-300">ĐÁP ÁN CHI TIẾT</span>
    </div>

    <div class="space-y-2 text-xs">
      <div class="p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <p class="font-bold text-amber-300">Nhận xét mấu chốt:</p>
        <p class="mt-0.5">
          Vì đáy $ABCD$ là hình bình hành có $O$ là giao điểm hai đường chéo $AC$ và $BD$ nên $O$ là trung điểm của $AC$.
        </p>
        <p class="mt-1">
          Xét tam giác $SAC$: $O$ là trung điểm $AC$, $M$ là trung điểm $SC \implies OM$ là đường trung bình của $\triangle SAC$.
          Suy ra $\mathbf{OM \parallel SA}$.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-2 text-xs">
        <div class="p-2 bg-slate-900 rounded border border-blue-500/30 text-slate-300">
          <b class="text-blue-300">a) Chứng minh $OM \parallel (SAB)$:</b>
          <p class="mt-1 font-mono text-emerald-300">
            $\begin{cases} OM \not\subset (SAB) \\ SA \subset (SAB) \\ OM \parallel SA \end{cases} \implies OM \parallel (SAB)$
          </p>
        </div>
        <div class="p-2 bg-slate-900 rounded border border-indigo-500/30 text-slate-300">
          <b class="text-indigo-300">b) Chứng minh $OM \parallel (SAD)$:</b>
          <p class="mt-1 font-mono text-emerald-300">
            $\begin{cases} OM \not\subset (SAD) \\ SA \subset (SAD) \\ OM \parallel SA \end{cases} \implies OM \parallel (SAD)$
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: ĐÚNG / SAI TỔNG HỢP MỤC 1",
        "subtitle": "BÀI 12 • MỤC 1 • CÂU HỎI TRẮC NGHIỆM ĐÚNG SAI CHUẨN ĐỀ THI",
        "mascotMode": "think",
        "mascotTip": r"Hãy đọc kĩ từng ý a, b, c, d trước khi chọn Đúng hay Sai nhé!",
        "narration": "Ví dụ 4 là dạng câu hỏi trắc nghiệm Đúng Sai chuẩn cấu trúc đề thi mới của Bộ Giáo dục. Cho hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O. Gọi I, K lần lượt là trung điểm của SA và SB. Các em có 15 giây để xác định tính đúng sai của 4 khẳng định trên màn hình.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded border border-amber-400/30">VÍ DỤ 4 (15 GIÂY)</span>
      <span class="text-xs text-slate-400">Trắc nghiệm Đúng / Sai</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed">
      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $I, K$ lần lượt là trung điểm của $SA$ và $SB$.
    </p>

    <div class="space-y-1.5 mt-2 text-xs">
      <div class="p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b>a)</b> $IK$ là đường trung bình của tam giác $SAB$ nên $IK \parallel AB$.
      </div>
      <div class="p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b>b)</b> Đường thẳng $IK$ song song với mặt phẳng $(ABCD)$.
      </div>
      <div class="p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b>c)</b> Đường thẳng $IK$ song song với mặt phẳng $(SCD)$.
      </div>
      <div class="p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b>d)</b> Mặt phẳng $(OIK)$ cắt mặt phẳng $(SCD)$ theo giao tuyến đi qua trung điểm của $SC$.
      </div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-amber-950 rounded-xl border border-amber-500/40">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center font-bold text-amber-300 text-sm">⏱️</div>
      <div>
        <div class="text-xs font-bold text-white">ĐỒNG HỒ TƯ DUY 15 GIÂY</div>
        <div class="text-[10px] text-slate-400">Xét quan hệ giữa IK với AB và CD!</div>
      </div>
    </div>
    <div class="text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30">15s</div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. TỔNG KẾT MỤC 1 & ĐÁP ÁN VÍ DỤ 4",
        "subtitle": "BÀI 12 • MỤC 1 • GHI NHỚ TRỌNG TÂM ĐIỀU KIỆN SONG SONG",
        "mascotMode": "cheer",
        "mascotTip": r"Cả 4 mệnh đề a, b, c, d đều ĐÚNG! Chúc mừng các em đã hoàn thành xuất sắc Mục 1!",
        "narration": "Chúc mừng các em! Cả bốn khẳng định của Ví dụ 4 đều ĐÚNG. Đoạn IK là đường trung bình nên song song với AB. Vì AB nằm trong ABCD nên IK song song với ABCD. Lại có AB song song CD mà CD nằm trong SCD nên IK cũng song song với SCD. Giao tuyến của mặt phẳng OIK và SCD đi qua trung điểm của SC và SD song song với CD. Như vậy chúng ta đã nắm vững điều kiện để đường thẳng song song với mặt phẳng. Hãy sẵn sàng bước sang Mục 2 với các tính chất giao tuyến kỳ thú!",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full">ĐÁP ÁN VÍ DỤ 4</span>
      <span class="text-xs font-bold text-emerald-300">KẾT QUẢ: CẢ 4 Ý ĐỀU ĐÚNG</span>
    </div>

    <div class="space-y-1.5 text-xs">
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>a)</b> $IK$ là đường trung bình $\triangle SAB \implies IK \parallel AB$.</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>b)</b> $IK \not\subset (ABCD), AB \subset (ABCD), IK \parallel AB \implies IK \parallel (ABCD)$.</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>c)</b> Vì $AB \parallel CD \implies IK \parallel CD \subset (SCD) \implies IK \parallel (SCD)$.</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>d)</b> Mặt phẳng $(OIK)$ chứa $IK \parallel CD$, cắt $(SCD)$ qua trung điểm của $SC$.</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
    </div>

    <div class="mt-2.5 bg-gradient-to-r from-blue-950 to-indigo-950 p-2.5 rounded-lg border border-blue-500/30 text-xs">
      <b class="text-blue-300 font-bold">TỔNG KẾT MỤC 1:</b>
      <p class="text-slate-300 mt-0.5">
        Muốn chứng minh $a \parallel (P)$, tìm một đường thẳng $b \subset (P)$ sao cho $a \parallel b$ và $a \not\subset (P)$.
      </p>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 2: TÍNH CHẤT CỦA ĐƯỜNG THẲNG SONG SONG VỚI MẶT PHẲNG
# ==============================================================================
BAI12_MUC2_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. ĐẶT VẤN ĐỀ VỀ TÍNH CHẤT GIAO TUYẾN",
        "subtitle": "BÀI 12 • MỤC 2 • MỐI QUAN HỆ GIỮA SONG SONG VÀ GIAO TUYẾN",
        "mascotMode": "pointer",
        "mascotTip": r"Nếu a // (P), một mặt phẳng (Q) chứa a cắt (P) theo giao tuyến b thì b có quan hệ gì với a?",
        "narration": "Chào mừng các em đến với Mục 2 của Bài 12: Tính chất của đường thẳng song song với mặt phẳng. Ở Mục 1, chúng ta đã biết cách đi từ hai đường thẳng song song để suy ra đường thẳng song song với mặt phẳng. Bây giờ, theo chiều ngược lại, nếu đã có sẵn một đường thẳng a song song với mặt phẳng P, thì khi một mặt phẳng Q chứa a cắt P, giao tuyến của chúng sẽ có tính chất gì đặc biệt?",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-900/60 to-indigo-900/40 p-4 rounded-xl border border-purple-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-3 py-1 bg-purple-500/30 text-purple-300 font-bold text-xs rounded-full border border-purple-400/40">MỤC 2</span>
      <h3 class="text-base font-bold text-white">TÍNH CHẤT GIAO TUYẾN SONG SONG</h3>
    </div>
    <p class="text-slate-300 text-sm leading-relaxed">
      Từ giả thiết đường thẳng song song với mặt phẳng, làm thế nào để xác định phương của các đường giao tuyến? Đây là chìa khóa then chốt để giải quyết các bài toán dựng thiết diện không gian.
    </p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="p-3 bg-slate-800/80 rounded-xl border border-blue-500/30">
      <div class="font-bold text-blue-300 mb-1">CHIỀU THUẬN (ĐỊNH LÍ 1):</div>
      <p class="text-slate-300">
        Biết $a \parallel b$ (với $b \subset (P)$) $\implies a \parallel (P)$.
      </p>
      <div class="mt-2 text-slate-400 text-[11px]">→ Dùng để chứng minh song song.</div>
    </div>
    <div class="p-3 bg-slate-800/80 rounded-xl border border-amber-500/30">
      <div class="font-bold text-amber-300 mb-1">CHIỀU ĐẢO / HỆ QUẢ (ĐỊNH LÍ 2):</div>
      <p class="text-slate-300">
        Biết $a \parallel (P)$, mặt phẳng $(Q) \supset a$ cắt $(P)$ theo $b \implies b \parallel a$.
      </p>
      <div class="mt-2 text-slate-400 text-[11px]">→ Dùng để dựng giao tuyến và thiết diện.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. ĐỊNH LÍ 2: ĐỊNH LÍ GIAO TUYẾN SONG SONG",
        "subtitle": "BÀI 12 • MỤC 2 • NỀN TẢNG CỦA CÁC BÀI TOÁN DỰNG HÌNH",
        "mascotMode": "think",
        "mascotTip": r"Mặt phẳng chứa một đường thẳng song song với mặt phẳng thứ hai sẽ cắt mặt phẳng đó theo giao tuyến song song với đường thẳng ban đầu!",
        "narration": "Định lí 2 phát biểu như sau: Cho đường thẳng a song song với mặt phẳng P. Nếu mặt phẳng Q chứa a và cắt P theo giao tuyến b thì b song song với a. Các em hãy chú ý công thức tóm tắt trên màn hình: a song song P, a chứa trong Q, P giao Q bằng b, suy ra b song song với a.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-gradient-to-r from-blue-950 to-indigo-950 p-3.5 rounded-xl border border-blue-500/30">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2.5 py-0.5 bg-blue-500 text-slate-950 font-bold text-xs rounded-full">ĐỊNH LÍ 2</span>
      <h4 class="text-sm font-bold text-blue-200">ĐỊNH LÍ GIAO TUYẾN SONG SONG</h4>
    </div>
    <div class="p-3 bg-slate-900/90 rounded-lg border border-blue-500/30 text-xs text-slate-200 leading-relaxed">
      Cho đường thẳng $a$ song song với mặt phẳng $(P)$. Nếu mặt phẳng $(Q)$ chứa $a$ và cắt $(P)$ theo giao tuyến $b$ thì $b$ song song với $a$.
    </div>
    <div class="mt-3 p-2 bg-blue-900/30 rounded border border-blue-400/40 text-center font-mono text-blue-300 font-bold text-xs">
      $$\begin{cases} a \parallel (P) \\ a \subset (Q) \\ (P) \cap (Q) = b \end{cases} \implies b \parallel a$$
    </div>
  </div>

  <div class="p-3 bg-slate-800/90 rounded-xl border border-slate-700/60 text-xs space-y-1">
    <b class="text-amber-400">Chứng minh nhanh:</b>
    <p class="text-slate-300">
      Do $b = (P) \cap (Q)$ nên $b \subset (P)$ và $b \subset (Q)$. Vì $a \subset (Q)$ nên $a$ và $b$ cùng nằm trong mặt phẳng $(Q)$.
      Nếu $a$ cắt $b$ tại điểm $M$, thì $M \in b \subset (P) \implies M \in (P)$. Khi đó $a$ và $(P)$ có điểm chung $M$, mâu thuẫn với $a \parallel (P)$.
      Vậy $a$ và $b$ không thể cắt nhau, suy ra $b \parallel a$.
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. HỆ QUẢ: HAI MẶT PHẲNG CÙNG SONG SONG VỚI MỘT ĐƯỜNG THẲNG",
        "subtitle": "BÀI 12 • MỤC 2 • GIAO TUYẾN CỦA HAI MẶT PHẲNG",
        "mascotMode": "pointer",
        "mascotTip": r"Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng song song với đường thẳng đó!",
        "narration": "Từ Định lí 2, chúng ta có một hệ quả cực kì quan trọng: Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng, nếu có, cũng song song với đường thẳng đó. Hệ quả này giúp các em nhanh chóng xác định phương của giao tuyến mà không cần tìm hai điểm chung.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-gradient-to-r from-amber-950/70 to-slate-900 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2.5 py-0.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-full">HỆ QUẢ</span>
      <h4 class="text-sm font-bold text-amber-200">GIAO TUYẾN CỦA HAI MẶT PHẲNG CÙNG SONG SONG VỚI MỘT ĐƯỜNG</h4>
    </div>
    <div class="p-3 bg-slate-900/90 rounded-lg border border-amber-500/30 text-xs text-slate-200 leading-relaxed">
      Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng (nếu có) song song với đường thẳng đó.
    </div>
    <div class="mt-3 p-2 bg-amber-900/30 rounded border border-amber-400/40 text-center font-mono text-amber-300 font-bold text-xs">
      $$\begin{cases} (P) \parallel a \\ (Q) \parallel a \\ (P) \cap (Q) = d \end{cases} \implies d \parallel a$$
    </div>
  </div>

  <div class="p-3 bg-slate-800/90 rounded-xl border border-indigo-500/30 text-xs text-slate-300">
    <span class="text-indigo-400 font-bold">Ý nghĩa hình học:</span> Khi hai mái nhà cùng dốc và mép dưới của cả hai mái đều song song với mặt đất, thì đường nóc nhà chính là giao tuyến của hai mái nhà, và nó luôn chạy song song với mặt đất.
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. TÍNH CHẤT QUA ĐƯỜNG THẲNG VÀ SONG SONG ĐƯỜNG THẲNG KHÁC",
        "subtitle": "BÀI 12 • MỤC 2 • ĐỊNH LÍ DUY NHẤT MẶT PHẲNG",
        "mascotMode": "think",
        "mascotTip": r"Cho hai đường thẳng chéo nhau, luôn có duy nhất một mặt phẳng chứa đường này và song song đường kia!",
        "narration": "Một tính chất không thể thiếu trong các bài toán khoảng cách và góc sau này: Cho hai đường thẳng chéo nhau a và b. Có duy nhất một mặt phẳng chứa đường thẳng a và song song với đường thẳng b. Cách dựng rất trực quan: Lấy một điểm A bất kì trên đường thẳng a, qua điểm A dựng đường thẳng b phẩy song song với b. Khi đó mặt phẳng tạo bởi hai đường thẳng cắt nhau a và b phẩy chính là mặt phẳng duy nhất cần tìm.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2.5 py-0.5 bg-purple-500 text-white font-bold text-xs rounded-full">TÍNH CHẤT 2</span>
      <h4 class="text-sm font-bold text-purple-200">MẶT PHẲNG QUA MỘT ĐƯỜNG VÀ SONG SONG ĐƯỜNG KIA</h4>
    </div>
    <div class="p-3 bg-slate-900 rounded-lg border border-purple-500/30 text-xs text-slate-200 leading-relaxed">
      Cho hai đường thẳng chéo nhau $a$ và $b$. Có <b>duy nhất</b> một mặt phẳng chứa đường thẳng $a$ và song song với đường thẳng $b$.
    </div>

    <div class="mt-2 p-2.5 bg-slate-950 rounded border border-slate-700/60 text-xs space-y-1">
      <b class="text-emerald-400">Cách dựng thực hành:</b>
      <ol class="list-decimal list-inside text-slate-300 space-y-0.5">
        <li>Lấy một điểm $A \in a$.</li>
        <li>Qua điểm $A$, kẻ đường thẳng $b' \parallel b$.</li>
        <li>Mặt phẳng $(P) = (a, b')$ là mặt phẳng chứa $a$ và song song với $b$.</li>
      </ol>
    </div>
  </div>

  <div class="p-2.5 bg-indigo-950/40 rounded-lg border border-indigo-500/30 text-xs text-indigo-300">
    <span class="font-bold">Ứng dụng:</span> Giúp quy bài toán khoảng cách giữa hai đường thẳng chéo nhau về khoảng cách từ một điểm đến một mặt phẳng song song!
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 1: DỰNG GIAO TUYẾN SONG SONG VỚI MỘT ĐƯỜNG THẲNG",
        "subtitle": "BÀI 12 • MỤC 2 • BÀI TOÁN XÁC ĐỊNH GIAO TUYẾN KINH ĐIỂN",
        "mascotMode": "pointer",
        "mascotTip": r"Giao tuyến của mặt phẳng (α) với (ABCD) đi qua điểm chung và song song với AB!",
        "narration": "Bây giờ chúng ta cùng luyện tập Ví dụ 1. Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Gọi M là một điểm nằm trên cạnh SB. Mặt phẳng alpha đi qua M và song song với đường thẳng AB. Hãy xác định giao tuyến của mặt phẳng alpha với các mặt phẳng SAB và ABCD. Các em có 15 giây để suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded border border-indigo-400/30">VÍ DỤ 1 (15 GIÂY)</span>
      <span class="text-xs text-slate-400">Dựng giao tuyến qua một điểm</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed">
      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M$ là một điểm thuộc miền trong đoạn thẳng $SB$. Mặt phẳng $(\alpha)$ đi qua $M$ và song song với $AB$.
    </p>
    <div class="space-y-1 mt-2 text-xs text-slate-300">
      <div><b>a)</b> Tìm giao tuyến của $(\alpha)$ với mặt phẳng $(SAB)$.</div>
      <div><b>b)</b> Giả sử $(\alpha)$ cắt $AD$ tại $N$. Tìm giao tuyến của $(\alpha)$ với mặt phẳng $(ABCD)$.</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-xl border border-indigo-500/40">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400 flex items-center justify-center font-bold text-indigo-300 text-sm">⏱️</div>
      <div>
        <div class="text-xs font-bold text-white">ĐỒNG HỒ TƯ DUY 15 GIÂY</div>
        <div class="text-[10px] text-slate-400">Mặt phẳng (SAB) chứa AB mà (α) // AB!</div>
      </div>
    </div>
    <div class="text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30">15s</div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. GIẢI CHI TIẾT VÍ DỤ 1",
        "subtitle": "BÀI 12 • MỤC 2 • ÁP DỤNG ĐỊNH LÍ GIAO TUYẾN SONG SONG",
        "mascotMode": "cheer",
        "mascotTip": r"Giao tuyến với (SAB) là đường thẳng d1 qua M song song AB; giao tuyến với đáy là d2 qua N song song AB!",
        "narration": "Thời gian đã hết! Hãy cùng xem lời giải: Ở câu a, mặt phẳng alpha song song với AB và điểm M là điểm chung của alpha và SAB. Vì SAB chứa đường thẳng AB nên theo Định lí 2, giao tuyến của alpha và SAB phải là đường thẳng d1 đi qua M và song song với AB. Đường thẳng này cắt SA tại một điểm P. Ở câu b, N là điểm chung của alpha và ABCD, mà đáy ABCD chứa AB song song với alpha. Do đó giao tuyến của alpha với đáy ABCD là đường thẳng d2 đi qua N và song song với AB.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full">LỜI GIẢI VÍ DỤ 1</span>
      <span class="text-xs font-bold text-emerald-300">ĐÁP ÁN CHI TIẾT</span>
    </div>

    <div class="space-y-2 text-xs">
      <div class="p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b class="text-blue-300">a) Giao tuyến của $(\alpha)$ với $(SAB)$:</b>
        <p class="mt-1">
          Ta có: $M \in (\alpha) \cap (SAB)$. Lại có $(\alpha) \parallel AB$ và $AB \subset (SAB)$.
        </p>
        <p class="mt-1 font-mono text-emerald-300">
          $\implies (\alpha) \cap (SAB) = d_1$ đi qua $M$ và $d_1 \parallel AB$.
        </p>
        <p class="mt-0.5 text-slate-400">Trong mặt phẳng $(SAB)$, kẻ đường thẳng qua $M$ song song $AB$ cắt $SA$ tại $P$.</p>
      </div>

      <div class="p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b class="text-amber-300">b) Giao tuyến của $(\alpha)$ với $(ABCD)$:</b>
        <p class="mt-1">
          Ta có: $N \in (\alpha) \cap (ABCD)$, mặt khác $(\alpha) \parallel AB$ mà $AB \subset (ABCD)$.
        </p>
        <p class="mt-1 font-mono text-emerald-300">
          $\implies (\alpha) \cap (ABCD) = d_2$ đi qua $N$ và $d_2 \parallel AB \parallel CD$.
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 2: THIẾT DIỆN CỦA TỨ DIỆN ĐỀU",
        "subtitle": "BÀI 12 • MỤC 2 • BÀI TOÁN XÁC ĐỊNH HÌNH DẠNG VÀ TÍNH CHU VI",
        "mascotMode": "pointer",
        "mascotTip": r"Mặt phẳng (P) song song với cả AB và CD thì các cạnh của thiết diện sẽ song song với AB và CD!",
        "narration": "Ví dụ 2 là một bài toán hình học không gian rất đặc sắc: Cho tứ diện đều ABCD có tất cả các cạnh bằng a. Mặt phẳng P song song với hai cạnh đối diện là AB và CD, cắt các cạnh AC, BC, BD, AD lần lượt tại M, N, P, Q. Chứng minh rằng tứ giác MNPQ là hình chữ nhật. Tính chu vi của thiết diện MNPQ theo a. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-blue-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-blue-500/20 text-blue-300 font-bold text-xs rounded border border-blue-400/30">VÍ DỤ 2 (15 GIÂY)</span>
      <span class="text-xs text-slate-400">Thiết diện tứ diện đều</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed">
      Cho tứ diện đều $ABCD$ có tất cả các cạnh bằng $a$. Mặt phẳng $(P)$ song song với $AB$ và $CD$, cắt $AC, BC, BD, AD$ lần lượt tại $M, N, P, Q$.
    </p>
    <div class="space-y-1 mt-2 text-xs text-slate-300">
      <div><b>a)</b> Chứng minh rằng thiết diện $MNPQ$ là hình chữ nhật.</div>
      <div><b>b)</b> Đặt $AM = x$ ($0 < x < a$). Tính chu vi của tứ giác $MNPQ$.</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-blue-950 rounded-xl border border-blue-500/40">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center font-bold text-blue-300 text-sm">⏱️</div>
      <div>
        <div class="text-xs font-bold text-white">ĐỒNG HỒ TƯ DUY 15 GIÂY</div>
        <div class="text-[10px] text-slate-400">Chú ý trong tứ diện đều, hai cạnh đối diện AB và CD vuông góc với nhau!</div>
      </div>
    </div>
    <div class="text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30">15s</div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. GIẢI CHI TIẾT VÍ DỤ 2",
        "subtitle": "BÀI 12 • MỤC 2 • CHỨNG MINH HÌNH CHỮ NHẬT VÀ TÍNH CHU VI",
        "mascotMode": "cheer",
        "mascotTip": r"Chu vi MNPQ = 2(x + a - x) = 2a, một hằng số không phụ thuộc vào vị trí của mặt phẳng (P)!",
        "narration": "Hết 15 giây rồi! Lời giải chi tiết như sau: Vì mặt phẳng P song song với AB nên giao tuyến MN trong tam giác ABC và giao tuyến QP trong tam giác ABD đều song song với AB. Tương tự MQ và NP cùng song song với CD. Do đó MNPQ là hình bình hành. Hơn nữa trong tứ diện đều, cặp cạnh đối AB và CD vuông góc với nhau, nên MN vuông góc với MQ, suy ra MNPQ là hình chữ nhật. Theo định lí Ta-lét, MN bằng x và MQ bằng a trừ x, do đó chu vi bằng hai lần x cộng a trừ x, kết quả bằng đúng hai a không đổi!",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full">LỜI GIẢI VÍ DỤ 2</span>
      <span class="text-xs font-bold text-emerald-300">CHU VI BẰNG $2a$</span>
    </div>

    <div class="space-y-2 text-xs">
      <div class="p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b class="text-blue-300">a) Chứng minh $MNPQ$ là hình chữ nhật:</b>
        <p class="mt-1">
          $\begin{cases} (P) \parallel AB \\ AB \subset (ABC) \\ (P) \cap (ABC) = MN \end{cases} \implies MN \parallel AB$. Tương tự $PQ \parallel AB \implies MN \parallel PQ$.
        </p>
        <p class="mt-1">
          $\begin{cases} (P) \parallel CD \\ CD \subset (ACD) \\ (P) \cap (ACD) = MQ \end{cases} \implies MQ \parallel CD$. Tương tự $NP \parallel CD \implies MQ \parallel NP$.
        </p>
        <p class="mt-1 text-emerald-300">
          Vậy $MNPQ$ là hình bình hành. Mặt khác trong tứ diện đều $ABCD$ ta có $AB \perp CD$, mà $MN \parallel AB, MQ \parallel CD \implies MN \perp MQ$. Do đó $MNPQ$ là hình chữ nhật.
        </p>
      </div>

      <div class="p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b class="text-amber-300">b) Tính chu vi:</b>
        <p class="mt-1">
          Theo định lí Ta-lét trong $\triangle ABC$: $\frac{MN}{AB} = \frac{CM}{CA} = \frac{a - x}{a} \implies MN = a - x$.
        </p>
        <p class="mt-1">
          Trong $\triangle ACD$: $\frac{MQ}{CD} = \frac{AM}{AC} = \frac{x}{a} \implies MQ = x$.
        </p>
        <p class="mt-1 font-mono font-bold text-amber-300">
          $$\text{Chu vi } P = 2(MN + MQ) = 2(a - x + x) = 2a \text{ (không đổi!)}$$
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: TÌM DIỆN TÍCH LỚN NHẤT CỦA THIẾT DIỆN",
        "subtitle": "BÀI 12 • MỤC 2 • BÀI TOÁN TỐI ƯU CỰC TRỊ HÌNH HỌC KHÔNG GIAN",
        "mascotMode": "pointer",
        "mascotTip": r"Diện tích hình chữ nhật là S = x(a - x). Áp dụng bất đẳng thức Cô-si để tìm giá trị lớn nhất!",
        "narration": "Tiếp tục bài toán tứ diện đều ABCD ở Ví dụ 2. Câu hỏi đặt ra là: Xác định vị trí của điểm M trên cạnh AC để diện tích thiết diện MNPQ đạt giá trị lớn nhất, và tính giá trị lớn nhất đó. Khi đó hình chữ nhật MNPQ trở thành hình đặc biệt nào? Các em có 30 giây để tìm câu trả lời.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded border border-indigo-400/30">VÍ DỤ 3 (30 GIÂY)</span>
      <span class="text-xs text-slate-400">Cực trị diện tích thiết diện</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed">
      Tiếp tục dữ kiện Ví dụ 2: Tứ diện đều $ABCD$ cạnh $a$, mặt phẳng $(P) \parallel AB$ và $(P) \parallel CD$, $AM = x$ ($0 < x < a$).
    </p>
    <div class="p-2.5 bg-slate-900 rounded border border-slate-700/60 text-xs text-slate-300 mt-2 space-y-1">
      <div><b>a)</b> Lập công thức tính diện tích $S(x)$ của thiết diện $MNPQ$ theo $a$ và $x$.</div>
      <div><b>b)</b> Tìm $x$ để diện tích thiết diện lớn nhất và xác định hình dạng thiết diện khi đó.</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-xl border border-indigo-500/40">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400 flex items-center justify-center font-bold text-indigo-300 text-sm">⏱️</div>
      <div>
        <div class="text-xs font-bold text-white">ĐỒNG HỒ TƯ DUY 30 GIÂY</div>
        <div class="text-[10px] text-slate-400">Bất đẳng thức AM-GM: x(a - x) ≤ [(x + a - x)/2]²</div>
      </div>
    </div>
    <div class="text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30">30s</div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. GIẢI CHI TIẾT VÍ DỤ 3",
        "subtitle": "BÀI 12 • MỤC 2 • BẤT ĐẲNG THỨC AM-GM VÀ THIẾT DIỆN HÌNH VUÔNG",
        "mascotMode": "cheer",
        "mascotTip": r"Diện tích lớn nhất bằng a²/4 khi x = a/2, tức M là trung điểm của AC, thiết diện là hình vuông!",
        "narration": "Đã hết thời gian! Hãy cùng theo dõi lời giải: Thiết diện MNPQ là hình chữ nhật có kích thước là x và a trừ x. Do đó diện tích của thiết diện là S bằng x nhân với mở ngoặc a trừ x đóng ngoặc. Áp dụng bất đẳng thức Cô si cho hai số dương x và a trừ x, ta có tích của chúng nhỏ hơn hoặc bằng một phần tư nhân a bình phương. Dấu đẳng thức xảy ra khi x bằng a trừ x, tương đương x bằng a trên 2. Khi đó M là trung điểm của AC, hai kích thước bằng nhau nên thiết diện trở thành một hình vuông có diện tích cực đại là a bình trên 4.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full">LỜI GIẢI VÍ DỤ 3</span>
      <span class="text-xs font-bold text-emerald-300">MAX $S = \frac{a^2}{4}$</span>
    </div>

    <div class="space-y-2 text-xs">
      <div class="p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b class="text-blue-300">a) Công thức diện tích:</b>
        <p class="mt-1">
          Thiết diện $MNPQ$ là hình chữ nhật nên diện tích là:
          $$S(x) = MN \cdot MQ = x(a - x) = ax - x^2$$
        </p>
      </div>

      <div class="p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b class="text-amber-300">b) Tìm cực trị diện tích:</b>
        <p class="mt-1">
          Áp dụng bất đẳng thức Cô-si (AM-GM) cho hai số dương $x$ và $a - x$:
          $$x(a - x) \le \left(\frac{x + a - x}{2}\right)^2 = \left(\frac{a}{2}\right)^2 = \frac{a^2}{4}$$
        </p>
        <p class="mt-1.5 font-bold text-emerald-300">
          Đẳng thức xảy ra $\iff x = a - x \iff x = \frac{a}{2}$.
        </p>
        <p class="mt-1 text-slate-300">
          Khi $x = \frac{a}{2}$, điểm $M$ là trung điểm cạnh $AC$. Khi đó $MN = MQ = \frac{a}{2}$, thiết diện $MNPQ$ trở thành <b>HÌNH VUÔNG</b> có diện tích cực đại là $\frac{a^2}{4}$.
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: ĐÚNG / SAI TỔNG HỢP MỤC 2",
        "subtitle": "BÀI 12 • MỤC 2 • BÀI TOÁN TÍNH CHẤT GIAO TUYẾN SONG SONG",
        "mascotMode": "think",
        "mascotTip": r"Kiểm tra định lí 2 và hệ quả: hai mặt phẳng cùng song song với một đường thẳng!",
        "narration": "Ví dụ 4 là câu hỏi Đúng Sai củng cố toàn bộ tính chất của Mục 2. Cho hình chóp S.ABCD có đáy là hình thang với đáy lớn AB song song đáy nhỏ CD. Một mặt phẳng P thay đổi luôn song song với AB. Xét tính đúng sai của 4 nhận định sau đây trong 15 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded border border-amber-400/30">VÍ DỤ 4 (15 GIÂY)</span>
      <span class="text-xs text-slate-400">Trắc nghiệm Đúng / Sai</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed">
      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB \parallel CD$). Mặt phẳng $(P)$ cắt các cạnh $SA, SB, SC, SD$ lần lượt tại $A', B', C', D'$ và $(P) \parallel AB$.
    </p>

    <div class="space-y-1.5 mt-2 text-xs">
      <div class="p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b>a)</b> Giao tuyến $A'B'$ song song với $AB$.
      </div>
      <div class="p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b>b)</b> Giao tuyến $C'D'$ song song với $CD$.
      </div>
      <div class="p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b>c)</b> Tứ giác $A'B'C'D'$ là hình bình hành.
      </div>
      <div class="p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b>d)</b> Tứ giác $A'B'C'D'$ là hình thang.
      </div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-amber-950 rounded-xl border border-amber-500/40">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center font-bold text-amber-300 text-sm">⏱️</div>
      <div>
        <div class="text-xs font-bold text-white">ĐỒNG HỒ TƯ DUY 15 GIÂY</div>
        <div class="text-[10px] text-slate-400">A'B' // AB và C'D' // CD mà AB // CD!</div>
      </div>
    </div>
    <div class="text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30">15s</div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. TỔNG KẾT MỤC 2 & ĐÁP ÁN VÍ DỤ 4",
        "subtitle": "BÀI 12 • MỤC 2 • NẮM VỮNG ĐỊNH LÍ GIAO TUYẾN SONG SONG",
        "mascotMode": "cheer",
        "mascotTip": r"Mệnh đề a, b, d ĐÚNG; mệnh đề c SAI (A'B'C'D' chỉ là hình thang, không nhất thiết là hình bình hành)!",
        "narration": "Chúc mừng các em! Trong Ví dụ 4: Khẳng định a đúng vì mặt phẳng P song song với AB nên giao tuyến A phẩy B phẩy song song AB. Khẳng định b đúng vì AB song song CD nên P cũng song song với CD, do đó C phẩy D phẩy song song CD. Khẳng định d đúng vì A phẩy B phẩy và C phẩy D phẩy cùng song song với AB nên chúng song song với nhau, thiết diện là một hình thang. Khẳng định c sai vì đáy ABCD là hình thang không phải hình bình hành nên hai cạnh còn lại nói chung không song song. Chúng ta đã hoàn tất Mục 2!",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full">ĐÁP ÁN VÍ DỤ 4</span>
      <span class="text-xs font-bold text-emerald-300">KẾT QUẢ ĐỐI CHIẾU</span>
    </div>

    <div class="space-y-1.5 text-xs">
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>a)</b> $(P) \parallel AB \implies A'B' \parallel AB$ (Định lí 2).</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>b)</b> Vì $AB \parallel CD \implies (P) \parallel CD \implies C'D' \parallel CD$.</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>c)</b> Tứ giác $A'B'C'D'$ nói chung chỉ có $A'B' \parallel C'D'$, không phải hình bình hành.</span>
        <span class="px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold rounded">SAI</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>d)</b> Tứ giác $A'B'C'D'$ có $A'B' \parallel C'D'$ nên chắc chắn là hình thang.</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
    </div>

    <div class="mt-2.5 bg-gradient-to-r from-purple-950 to-indigo-950 p-2.5 rounded-lg border border-purple-500/30 text-xs">
      <b class="text-purple-300 font-bold">GHI NHỚ MỤC 2:</b>
      <p class="text-slate-300 mt-0.5">
        Mặt phẳng cắt chứa đường thẳng song song $\implies$ giao tuyến song song với đường thẳng đó!
      </p>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 3: PHƯƠNG PHÁP CHỨNG MINH & TÌM THIẾT DIỆN SONG SONG
# ==============================================================================
BAI12_MUC3_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. TỔNG QUAN PHƯƠNG PHÁP & BÀI TOÁN THIẾT DIỆN",
        "subtitle": "BÀI 12 • MỤC 3 • VẬN DỤNG VÀ PHÁT TRIỂN NĂNG LỰC HÌNH HỌC",
        "mascotMode": "pointer",
        "mascotTip": r"Dựng thiết diện song song với một đường thẳng là bài toán trọng tâm trong các đề thi giữa kì và cuối kì!",
        "narration": "Chào mừng các em đến với Mục 3 của Bài 12: Kỹ thuật tìm thiết diện song song với một đường thẳng. Ở phần này, chúng ta sẽ kết hợp nhuần nhuyễn cả Định lí 1 và Định lí 2 để giải quyết bài toán cốt lõi của hình học không gian lớp 11: Tìm thiết diện tạo bởi một mặt phẳng cắt khối đa diện khi mặt phẳng đó song song với một hoặc hai đường thẳng cho trước.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-teal-900/60 to-slate-900 p-4 rounded-xl border border-teal-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-3 py-1 bg-teal-500/30 text-teal-300 font-bold text-xs rounded-full border border-teal-400/40">MỤC 3</span>
      <h3 class="text-base font-bold text-white">BÀI TOÁN THIẾT DIỆN SONG SONG ĐƯỜNG THẲNG</h3>
    </div>
    <p class="text-slate-300 text-sm leading-relaxed">
      Thiết diện là đa giác tạo bởi các đoạn giao tuyến giữa mặt phẳng cắt và các mặt của hình chóp hoặc tứ diện. Khi mặt phẳng cắt song song với một đường thẳng, các giao tuyến sẽ song song với đường thẳng đó.
    </p>
  </div>

  <div class="grid grid-cols-3 gap-3 text-center text-xs">
    <div class="p-3 bg-slate-800/80 rounded-xl border border-blue-500/30 shadow-md">
      <div class="text-blue-400 text-sm font-bold mb-1">DẠNG 1</div>
      <div class="text-slate-300">Đi qua 1 điểm và song song 2 đường thẳng</div>
      <div class="text-blue-300 mt-1 font-mono text-[11px] font-bold">$(\alpha) \parallel d_1, d_2$</div>
    </div>
    <div class="p-3 bg-slate-800/80 rounded-xl border border-amber-500/30 shadow-md">
      <div class="text-amber-400 text-sm font-bold mb-1">DẠNG 2</div>
      <div class="text-slate-300">Chứa 1 đường thẳng và song song 1 đường thẳng</div>
      <div class="text-amber-300 mt-1 font-mono text-[11px] font-bold">$(\alpha) \supset d_1, \parallel d_2$</div>
    </div>
    <div class="p-3 bg-slate-800/80 rounded-xl border border-emerald-500/30 shadow-md">
      <div class="text-emerald-400 text-sm font-bold mb-1">DẠNG 3</div>
      <div class="text-slate-300">Đi qua 2 điểm và song song 1 đường thẳng</div>
      <div class="text-emerald-300 mt-1 font-mono text-[11px] font-bold">$(\alpha) \supset M, N; \parallel d$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. QUY TRÌNH 4 BƯỚC DỰNG THIẾT DIỆN SONG SONG",
        "subtitle": "BÀI 12 • MỤC 3 • BÍ QUYẾT BẢN ĐỒ CHIẾN THUẬT HÌNH KHÔNG GIAN",
        "mascotMode": "think",
        "mascotTip": r"Tìm điểm chung ban đầu -> Kẻ đoạn giao tuyến song song -> Cắt các cạnh để tạo điểm chung mới -> Khép kín đa giác thiết diện!",
        "narration": "Để dựng thiết diện song song với một đường thẳng d đạt độ chính xác 100 phần trăm, các em thực hiện theo quy trình 4 bước chuẩn mực sau: Bước 1: Xác định điểm chung ban đầu của mặt phẳng cắt với một mặt của hình chóp. Bước 2: Qua điểm chung đó, kẻ đoạn giao tuyến song song với đường thẳng d. Đoạn thẳng này sẽ cắt các cạnh của hình chóp tại các điểm mới. Bước 3: Lặp lại thao tác kẻ song song hoặc tìm giao tuyến thông thường ở các mặt tiếp theo. Bước 4: Nối các đoạn giao tuyến lại để tạo thành một đa giác phẳng khép kín, đó chính là thiết diện.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-teal-500/30">
    <h4 class="text-sm font-bold text-teal-300 mb-2">QUY TRÌNH 4 BƯỚC DỰNG THIẾT DIỆN CHUẨN MỰC</h4>
    <div class="space-y-2 text-xs">
      <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-700/60 flex items-start gap-2.5">
        <span class="w-6 h-6 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center shrink-0">1</span>
        <div>
          <b class="text-white">Bước 1: Xác định điểm chung xuất phát</b>
          <p class="text-slate-300 mt-0.5">Tìm điểm chung đã biết $M$ giữa mặt phẳng cắt $(\alpha)$ và một mặt bất kì của hình chóp.</p>
        </div>
      </div>
      <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-700/60 flex items-start gap-2.5">
        <span class="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0">2</span>
        <div>
          <b class="text-white">Bước 2: Kẻ đoạn giao tuyến song song</b>
          <p class="text-slate-300 mt-0.5">Nếu mặt đó chứa đường thẳng $d$ (hoặc một đường song song với $d$), kẻ qua $M$ đường thẳng song song với $d$, cắt cạnh của mặt đó tại điểm mới.</p>
        </div>
      </div>
      <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-700/60 flex items-start gap-2.5">
        <span class="w-6 h-6 rounded-full bg-purple-500 text-white font-bold flex items-center justify-center shrink-0">3</span>
        <div>
          <b class="text-white">Bước 3: Lan tỏa sang các mặt liền kề</b>
          <p class="text-slate-300 mt-0.5">Sử dụng điểm mới tìm được làm bàn đạp để tiếp tục dựng giao tuyến với các mặt xung quanh tiếp theo.</p>
        </div>
      </div>
      <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-700/60 flex items-start gap-2.5">
        <span class="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center shrink-0">4</span>
        <div>
          <b class="text-white">Bước 4: Khép kín đa giác và kết luận</b>
          <p class="text-slate-300 mt-0.5">Nối các đoạn giao tuyến tuần tự quanh các mặt thành đa giác khép kín. Kết luận hình dạng thiết diện (tam giác, hình thang, ngũ giác...).</p>
        </div>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. ĐỊNH LÍ TA-LÉT ĐẢO TRONG KHÔNG GIAN",
        "subtitle": "BÀI 12 • MỤC 3 • CÔNG CỤ CHỨNG MINH TỈ SỐ ĐOẠN THẲNG",
        "mascotMode": "pointer",
        "mascotTip": r"Tỉ số bằng nhau trên hai cạnh tam giác sẽ sinh ra đường thẳng song song với cạnh thứ ba và mặt phẳng!",
        "narration": "Bên cạnh đường trung bình, định lí Ta-lét đảo là công cụ mạnh mẽ hàng đầu để chứng minh quan hệ song song khi các điểm không phải là trung điểm. Nếu trên hai cạnh SA và SB của tam giác SAB, ta có tỉ số SM trên SA bằng SN trên SB, thì đường thẳng MN song song với AB. Từ đó, MN sẽ song song với bất kì mặt phẳng nào chứa AB mà không chứa MN.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2.5 py-0.5 bg-indigo-500 text-white font-bold text-xs rounded-full">ĐỊNH LÍ TA-LÉT ĐẢO</span>
      <h4 class="text-sm font-bold text-indigo-200">CÔNG THỨC VÀNG TỈ SỐ SONG SONG</h4>
    </div>
    <div class="p-3 bg-slate-900 rounded-lg border border-indigo-500/30 text-xs text-slate-200 leading-relaxed">
      Trong tam giác $SAB$, nếu lấy điểm $M \in SA$ và điểm $N \in SB$ sao cho:
      $$\frac{SM}{SA} = \frac{SN}{SB} \implies MN \parallel AB$$
    </div>

    <div class="mt-2 p-2.5 bg-slate-950 rounded border border-slate-700/60 text-xs space-y-1">
      <b class="text-emerald-400">Suy luận song song với mặt phẳng:</b>
      <p class="text-slate-300">
        Nếu có thêm $AB \subset (ABCD)$ và $MN \not\subset (ABCD)$ thì ta lập tức suy ra:
      </p>
      <div class="p-2 bg-slate-900 text-center font-mono font-bold text-emerald-300 rounded border border-emerald-500/30">
        $$MN \parallel (ABCD)$$
      </div>
    </div>
  </div>

  <div class="p-2.5 bg-amber-950/40 rounded-lg border border-amber-500/30 text-xs text-amber-200">
    <span class="font-bold">Đặc biệt với trọng tâm tam giác:</span> Nếu $G$ là trọng tâm tam giác thì tỉ số luôn bằng $\frac{2}{3}$ hoặc $\frac{1}{3}$, rất hay dùng để chứng minh song song!
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. QUY CHUẨN NÉT VẼ HÌNH HỌC KHÔNG GIAN BỘ GD&ĐT",
        "subtitle": "BÀI 12 • MỤC 3 • BẮT BUỘC TUÂN THỦ NÉT LIỀN VÀ NÉT ĐỨT",
        "mascotMode": "think",
        "mascotTip": r"Cạnh nhìn thấy vẽ nét liền (solid), cạnh khuất bị che lấp bắt buộc vẽ nét đứt (dashed)!",
        "narration": "Một quy tắc tối quan trọng các em cần khắc sâu khi vẽ hình trong vở cũng như bài thi: Cạnh nhìn thấy bắt buộc vẽ bằng nét liền. Cạnh bị che khuất bên trong hoặc phía sau khối hình bắt buộc phải vẽ bằng nét đứt đoạn. Việc vẽ nhầm nét đứt thành nét liền sẽ làm sai lệch cấu trúc không gian và bị trừ điểm rất nặng.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/30">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2.5 py-0.5 bg-rose-500 text-white font-bold text-xs rounded-full">QUY CHUẨN BẮT BUỘC</span>
      <h4 class="text-sm font-bold text-rose-200">QUY TẮC NÉT LIỀN VÀ NÉT ĐỨT TRONG HÌNH HỌC KHÔNG GIAN</h4>
    </div>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-3 bg-slate-900 rounded-lg border border-emerald-500/30">
        <div class="font-bold text-emerald-300 mb-1 flex items-center gap-1.5">
          <span>✏️</span> <span>NÉT LIỀN (SOLID LINE)</span>
        </div>
        <p class="text-slate-300">
          Áp dụng cho tất cả các đường thẳng, cạnh, và đoạn giao tuyến <b>nhìn thấy được</b> từ góc quan sát phía trước.
        </p>
      </div>

      <div class="p-3 bg-slate-900 rounded-lg border border-rose-500/30">
        <div class="font-bold text-rose-300 mb-1 flex items-center gap-1.5">
          <span>✂️</span> <span>NÉT ĐỨT (DASHED LINE)</span>
        </div>
        <p class="text-slate-300">
          Bắt buộc áp dụng cho các cạnh nằm ở <b>đáy phía sau, đường bên trong khối</b> bị các mặt phẳng phía trước che lấp.
        </p>
      </div>
    </div>
  </div>

  <div class="p-2.5 bg-slate-900/80 rounded-lg border border-slate-700/60 text-xs text-slate-300">
    <b class="text-amber-400">Lưu ý khi mặt phẳng cắt tạo thiết diện:</b>
    Các đoạn thiết diện nằm trên các mặt thấy được sẽ là nét liền, các đoạn nằm trên mặt khuất phía sau hoặc đáy che lấp sẽ là nét đứt!
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 1: THIẾT DIỆN CỦA HÌNH CHÓP TỨ GIÁC",
        "subtitle": "BÀI 12 • MỤC 3 • DỰNG THIẾT DIỆN SONG SONG HAI ĐƯỜNG THẲNG",
        "mascotMode": "pointer",
        "mascotTip": r"Mặt phẳng (α) đi qua M và song song với SA và BC: Kẻ các đoạn song song trên các mặt của hình chóp!",
        "narration": "Chúng ta cùng đến với Ví dụ 1. Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Điểm M thuộc cạnh SC sao cho SM bằng 2 lần MC. Mặt phẳng alpha đi qua M và song song với hai đường thẳng SA và BC. Hãy xác định hình dạng thiết diện tạo bởi mặt phẳng alpha và hình chóp S.ABCD. Các em có 15 giây để suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-teal-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-teal-500/20 text-teal-300 font-bold text-xs rounded border border-teal-400/30">VÍ DỤ 1 (15 GIÂY)</span>
      <span class="text-xs text-slate-400">Thiết diện hình thang</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed">
      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M \in SC$ sao cho $SM = 2MC$. Mặt phẳng $(\alpha)$ đi qua $M$ và song song với $SA$ và $BC$.
    </p>
    <div class="p-2.5 bg-slate-900 rounded border border-slate-700/60 text-xs text-slate-300 mt-2">
      <b>Yêu cầu:</b> Dựng các đoạn giao tuyến của $(\alpha)$ với các mặt của hình chóp và cho biết thiết diện là hình gì?
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-teal-950 rounded-xl border border-teal-500/40">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-400 flex items-center justify-center font-bold text-teal-300 text-sm">⏱️</div>
      <div>
        <div class="text-xs font-bold text-white">ĐỒNG HỒ TƯ DUY 15 GIÂY</div>
        <div class="text-[10px] text-slate-400">Từ M kẻ các đường thẳng song song SA và BC!</div>
      </div>
    </div>
    <div class="text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30">15s</div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. GIẢI CHI TIẾT VÍ DỤ 1",
        "subtitle": "BÀI 12 • MỤC 3 • THIẾT DIỆN LÀ HÌNH THANG",
        "mascotMode": "cheer",
        "mascotTip": r"Thiết diện MNPQ là hình thang vì MN // PQ (cùng song song với SA)!",
        "narration": "Thời gian đã hết! Hãy cùng xem các bước dựng thiết diện: Thứ nhất, trong mặt phẳng SBC, qua M kẻ đường thẳng song song với BC, cắt SB tại Q. Thứ hai, trong mặt phẳng SAC, qua M kẻ đường thẳng song song với SA, cắt AC tại điểm I. Thứ ba, trong mặt phẳng ABCD, qua I kẻ đường thẳng song song với BC, cắt AB tại P và cắt CD tại K. Thứ tư, trong mặt phẳng SAB, qua P kẻ đường thẳng song song SA, cắt SB đúng tại điểm Q. Như vậy thiết diện chính là tứ giác MNPQ. Vì MN và PQ cùng song song với SA nên thiết diện là một hình thang.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full">LỜI GIẢI VÍ DỤ 1</span>
      <span class="text-xs font-bold text-emerald-300">THIẾT DIỆN LÀ HÌNH THANG</span>
    </div>

    <div class="space-y-2 text-xs">
      <div class="p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b class="text-blue-300">Các bước dựng đoạn giao tuyến:</b>
        <ol class="list-decimal list-inside space-y-1 mt-1">
          <li>Trong $(SBC)$: qua $M$ kẻ $MQ \parallel BC$ ($Q \in SB$). Do $(\alpha) \parallel BC$ nên $MQ$ là giao tuyến với $(SBC)$.</li>
          <li>Trong $(SCD)$: qua $M$ kẻ $MN \parallel SA$ là không đồng phẳng, ta xét $(SAC)$: qua $M$ kẻ $MI \parallel SA$ ($I \in AC$).</li>
          <li>Trong $(ABCD)$: qua $I$ kẻ đường thẳng song song $BC$, cắt $AB$ tại $P$ và cắt $CD$ tại $N$.</li>
          <li>Trong $(SAB)$: nối $P$ và $Q$, ta có $PQ \parallel SA$ do định lí Ta-lét.</li>
        </ol>
      </div>

      <div class="p-2.5 bg-slate-900 rounded border border-emerald-500/30 text-slate-300">
        <b class="text-emerald-400">Kết luận thiết diện:</b>
        <p class="mt-1">
          Thiết diện là tứ giác $MNPQ$. Do $MN \parallel SA$ và $PQ \parallel SA \implies MN \parallel PQ$.
          Vậy thiết diện $MNPQ$ là <b>HÌNH THANG</b>.
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 2: TRỌNG TÂM TAM GIÁC & QUAN HỆ SONG SONG",
        "subtitle": "BÀI 12 • MỤC 3 • BÀI TOÁN TỈ SỐ VÀ CHỨNG MINH ĐƯỜNG SONG SONG MẶT",
        "mascotMode": "pointer",
        "mascotTip": r"Dùng tỉ số 2/3 của trọng tâm để thiết lập định lí Ta-lét đảo!",
        "narration": "Ví dụ 2 là một bài toán rất phổ biến trong đề thi: Cho hình chóp S.ABCD có đáy ABCD là hình thang với đáy lớn AB gấp đôi đáy nhỏ CD. Gọi G1 và G2 lần lượt là trọng tâm của tam giác SAB và tam giác SCD. Chứng minh rằng đường thẳng G1G2 song song với mặt phẳng ABCD. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded border border-indigo-400/30">VÍ DỤ 2 (15 GIÂY)</span>
      <span class="text-xs text-slate-400">Trọng tâm và song song mặt đáy</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed">
      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB \parallel CD, AB = 2CD$). Gọi $G_1, G_2$ lần lượt là trọng tâm của các tam giác $SAB$ và $SCD$.
    </p>
    <div class="p-2.5 bg-slate-900 rounded border border-slate-700/60 text-xs text-slate-300 mt-2">
      <b>Yêu cầu:</b> Chứng minh đường thẳng $G_1G_2 \parallel (ABCD)$ và $G_1G_2 \parallel (SAD)$.
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-xl border border-indigo-500/40">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400 flex items-center justify-center font-bold text-indigo-300 text-sm">⏱️</div>
      <div>
        <div class="text-xs font-bold text-white">ĐỒNG HỒ TƯ DUY 15 GIÂY</div>
        <div class="text-[10px] text-slate-400">Gọi M, N là trung điểm của AB và CD, xét tam giác SMN!</div>
      </div>
    </div>
    <div class="text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30">15s</div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. GIẢI CHI TIẾT VÍ DỤ 2",
        "subtitle": "BÀI 12 • MỤC 3 • CHỨNG MINH QUA ĐỊNH LÍ TA-LÉT ĐẢO TRONG TAM GIÁC SMN",
        "mascotMode": "cheer",
        "mascotTip": r"SG1/SM = SG2/SN = 2/3 suy ra G1G2 // MN nằm trong mặt phẳng đáy!",
        "narration": "15 giây đã trôi qua! Cùng theo dõi lời giải mẫu: Gọi M và N lần lượt là trung điểm của AB và CD. Vì G1 là trọng tâm tam giác SAB nên G1 thuộc đoạn SM và tỉ số SG1 trên SM bằng 2 phần 3. Tương tự, G2 là trọng tâm tam giác SCD nên G2 thuộc đoạn SN và tỉ số SG2 trên SN bằng 2 phần 3. Trong tam giác SMN, do hai tỉ số bằng nhau nên theo định lí Ta-lét đảo, G1G2 song song với MN. Mặt khác MN nằm trong mặt phẳng đáy ABCD và G1G2 không nằm trong ABCD. Do đó G1G2 song song với mặt phẳng ABCD.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full">LỜI GIẢI VÍ DỤ 2</span>
      <span class="text-xs font-bold text-emerald-300">ĐÁP ÁN CHI TIẾT</span>
    </div>

    <div class="space-y-2 text-xs">
      <div class="p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b class="text-blue-300">Chứng minh $G_1G_2 \parallel (ABCD)$:</b>
        <p class="mt-1">
          Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$.
          Theo tính chất trọng tâm tam giác:
          $$\frac{SG_1}{SM} = \frac{2}{3} \quad \text{và} \quad \frac{SG_2}{SN} = \frac{2}{3}$$
        </p>
        <p class="mt-1">
          Trong tam giác $SMN$, ta có: $\frac{SG_1}{SM} = \frac{SG_2}{SN} = \frac{2}{3} \implies \mathbf{G_1G_2 \parallel MN}$.
        </p>
        <p class="mt-1 font-mono text-emerald-300">
          $\begin{cases} G_1G_2 \not\subset (ABCD) \\ MN \subset (ABCD) \\ G_1G_2 \parallel MN \end{cases} \implies \mathbf{G_1G_2 \parallel (ABCD)}$ (đpcm).
        </p>
      </div>

      <div class="p-2.5 bg-slate-900 rounded border border-indigo-500/30 text-slate-300">
        <b class="text-indigo-300">Mở rộng:</b>
        Vì $MN$ cắt $AD$ và $BC$ nên qua các biến đổi tương tự, ta cũng chứng minh được $G_1G_2$ song song với nhiều mặt phẳng khác chứa các đường thẳng song song với $MN$.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: TÍNH DIỆN TÍCH THIẾT DIỆN THEO THAM SỐ $k$",
        "subtitle": "BÀI 12 • MỤC 3 • BÀI TOÁN ĐỊNH LƯỢNG NÂNG CAO",
        "mascotMode": "pointer",
        "mascotTip": r"Mặt phẳng cắt qua M trên AB (AM = k.AB) và song song với SA và BC!",
        "narration": "Ví dụ 3 là bài toán vận dụng cao kết hợp định tính và định lượng: Cho hình chóp S.ABCD có đáy là hình bình hành diện tích S0. Điểm M thuộc cạnh AB sao cho AM bằng k lần AB với k nằm giữa 0 và 1. Mặt phẳng alpha đi qua M và song song với SA và BC, cắt hình chóp theo một thiết diện. Hỏi thiết diện là hình gì và diện tích của thiết diện thay đổi như thế nào khi k tiến dần tới 1? Các em có 30 giây để tìm câu trả lời.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded border border-indigo-400/30">VÍ DỤ 3 (30 GIÂY)</span>
      <span class="text-xs text-slate-400">Thiết diện theo tham số $k$</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed">
      Cho hình chóp $S.ABCD$ có đáy là hình bình hành diện tích $S_0$. Điểm $M \in AB$ sao cho $AM = k \cdot AB$ ($0 < k < 1$). Mặt phẳng $(\alpha)$ qua $M$ song song với $SA$ và $BC$.
    </p>
    <div class="p-2.5 bg-slate-900 rounded border border-slate-700/60 text-xs text-slate-300 mt-2 space-y-1">
      <div><b>a)</b> Xác định hình dạng của thiết diện tạo bởi $(\alpha)$ và hình chóp.</div>
      <div><b>b)</b> So sánh diện tích thiết diện khi $k = \frac{1}{2}$ so với diện tích mặt bên $(SAB)$.</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-xl border border-indigo-500/40">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400 flex items-center justify-center font-bold text-indigo-300 text-sm">⏱️</div>
      <div>
        <div class="text-xs font-bold text-white">ĐỒNG HỒ TƯ DUY 30 GIÂY</div>
        <div class="text-[10px] text-slate-400">Từ M kẻ các đoạn // SA và // BC trên các mặt!</div>
      </div>
    </div>
    <div class="text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30">30s</div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. GIẢI CHI TIẾT VÍ DỤ 3",
        "subtitle": "BÀI 12 • MỤC 3 • HÌNH THANG HOẶC TAM GIÁC ĐỒNG DẠNG",
        "mascotMode": "cheer",
        "mascotTip": r"Thiết diện là hình thang MNPQ với hai đáy song song với SA!",
        "narration": "30 giây đã trôi qua! Hãy cùng đối chiếu lời giải: Mặt phẳng alpha qua M song song BC nên cắt đáy ABCD theo đoạn MN song song BC với N thuộc CD. Trong mặt phẳng SAB, qua M kẻ MQ song song SA với Q thuộc SB. Trong mặt phẳng SCD, qua N kẻ NP song song SA với P thuộc SC. Cuối cùng, nối P với Q, đoạn PQ song song với BC. Như vậy thiết diện tạo thành là tứ giác MNPQ. Vì MQ và NP cùng song song với SA nên MNPQ là hình thang. Khi k bằng một phần hai, M là trung điểm AB nên MQ bằng một nửa SA, thiết diện có diện tích bằng một phần tư diện tích mặt bên tương ứng.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full">LỜI GIẢI VÍ DỤ 3</span>
      <span class="text-xs font-bold text-emerald-300">THIẾT DIỆN LÀ HÌNH THANG</span>
    </div>

    <div class="space-y-2 text-xs">
      <div class="p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b class="text-blue-300">a) Xác định các đỉnh của thiết diện:</b>
        <p class="mt-1">
          - Giao tuyến với $(ABCD)$: qua $M$ kẻ $MN \parallel BC$ ($N \in CD$). Do $ABCD$ là hình bình hành nên $MN = BC$.
        </p>
        <p class="mt-0.5">
          - Giao tuyến với $(SAB)$: qua $M$ kẻ $MQ \parallel SA$ ($Q \in SB$).
        </p>
        <p class="mt-0.5">
          - Giao tuyến với $(SCD)$: qua $N$ kẻ $NP \parallel SA$ ($P \in SC$).
        </p>
        <p class="mt-0.5">
          - Giao tuyến với $(SBC)$: nối $P$ và $Q$, ta có $PQ \parallel BC \parallel MN$.
        </p>
        <p class="mt-1 font-bold text-emerald-300">
          Vì $MQ \parallel SA$ và $NP \parallel SA \implies MQ \parallel NP$. Vậy thiết diện $MNPQ$ là <b>HÌNH THANG</b>.
        </p>
      </div>

      <div class="p-2.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b class="text-amber-300">b) Khi $k = \frac{1}{2}$ (M là trung điểm $AB$):</b>
        <p class="mt-1">
          $MQ = \frac{1}{2}SA$, $NP = \frac{1}{2}SA \implies MQ = NP$. Khi đó thiết diện $MNPQ$ là <b>HÌNH BÌNH HÀNH</b> với diện tích bằng $\frac{1}{2}$ diện tích thiết diện qua trục.
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: ĐÚNG / SAI TỔNG HỢP TOÀN BÀI 12",
        "subtitle": "BÀI 12 • MỤC 3 • KIỂM TRA TOÀN DIỆN KIẾN THỨC BÀI 12",
        "mascotMode": "think",
        "mascotTip": r"Đọc kĩ điều kiện không nằm trong mặt phẳng và các định lí ba giao tuyến!",
        "narration": "Ví dụ 4 là bài tập Đúng Sai tổng hợp toàn bộ Bài 12. Hãy xét 4 khẳng định sau đây về quan hệ giữa đường thẳng và mặt phẳng trong không gian trong 15 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded border border-amber-400/30">VÍ DỤ 4 (15 GIÂY)</span>
      <span class="text-xs text-slate-400">Trắc nghiệm Đúng / Sai tổng hợp</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed">
      Xét tính <b>ĐÚNG / SAI</b> của các mệnh đề hình học không gian sau:
    </p>

    <div class="space-y-1.5 mt-2 text-xs">
      <div class="p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b>a)</b> Nếu đường thẳng $a$ song song với một đường thẳng nằm trong $(P)$ thì $a \parallel (P)$.
      </div>
      <div class="p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b>b)</b> Nếu $a \parallel (P)$ thì trong $(P)$ có vô số đường thẳng song song với $a$.
      </div>
      <div class="p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b>c)</b> Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng song song với đường thẳng đó.
      </div>
      <div class="p-1.5 bg-slate-900 rounded border border-slate-700/60 text-slate-300">
        <b>d)</b> Qua một điểm nằm ngoài mặt phẳng $(P)$, có duy nhất một đường thẳng song song với $(P)$.
      </div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-amber-950 rounded-xl border border-amber-500/40">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center font-bold text-amber-300 text-sm">⏱️</div>
      <div>
        <div class="text-xs font-bold text-white">ĐỒNG HỒ TƯ DUY 15 GIÂY</div>
        <div class="text-[10px] text-slate-400">Cẩn thận với từ 'duy nhất' và thiếu điều kiện không nằm trong!</div>
      </div>
    </div>
    <div class="text-lg font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded border border-amber-500/30">15s</div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. TỔNG KẾT TOÀN BỘ BÀI 12 & ĐÁP ÁN VÍ DỤ 4",
        "subtitle": "BÀI 12 • MỤC 3 • HOÀN THÀNH XUẤT SẮC BÀI 12",
        "mascotMode": "cheer",
        "mascotTip": r"Mệnh đề a SAI (thiếu điều kiện a không nằm trong P), b ĐÚNG, c ĐÚNG, d SAI (có vô số đường thẳng)! Chúc mừng các em!",
        "narration": "Chúc mừng các em! Đáp án của Ví dụ 4 như sau: Khẳng định a SAI vì thiếu điều kiện đường thẳng a không nằm trong mặt phẳng P. Nếu a đã nằm sẵn trong P thì nó không thể song song với P. Khẳng định b ĐÚNG: qua mỗi điểm trong mặt phẳng P, ta đều kẻ được đúng một đường thẳng song song với a, do đó có vô số đường. Khẳng định c ĐÚNG theo hệ quả của Định lí 2. Khẳng định d SAI vì qua một điểm nằm ngoài mặt phẳng P có vô số đường thẳng song song với P, tập hợp các đường thẳng đó tạo thành một mặt phẳng song song với P. Chúc mừng các em đã hoàn thành trọn vẹn Bài 12!",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full">ĐÁP ÁN VÍ DỤ 4</span>
      <span class="text-xs font-bold text-emerald-300">KẾT QUẢ ĐỐI CHIẾU</span>
    </div>

    <div class="space-y-1.5 text-xs">
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>a)</b> SAI vì thiếu điều kiện $a \not\subset (P)$. Nếu $a \subset (P)$ thì không song song.</span>
        <span class="px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold rounded">SAI</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>b)</b> ĐÚNG: Lấy vô số điểm trong $(P)$, qua mỗi điểm kẻ đường thẳng $\parallel a$.</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>c)</b> ĐÚNG: Chuẩn hệ quả của Định lí 2 về giao tuyến song song.</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>d)</b> SAI: Có <b>vô số</b> đường thẳng song song với $(P)$ (cùng thuộc mặt phẳng qua điểm đó $\parallel (P)$).</span>
        <span class="px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold rounded">SAI</span>
      </div>
    </div>

    <div class="mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30 text-xs">
      <div class="font-bold text-emerald-200 mb-1 flex items-center gap-1.5">
        <span>🎉</span> <span>HOÀN THÀNH XUẤT SẮC TOÀN BỘ BÀI 12!</span>
      </div>
      <p class="text-slate-300">
        Các em đã làm chủ toàn bộ: 3 vị trí tương đối, định lí 1 (chứng minh song song), định lí 2 (giao tuyến song song), và kỹ thuật dựng thiết diện đa diện phức tạp!
      </p>
    </div>
  </div>
</div>
"""
    }
]

print("ch4_bai12_data.py initialized: BAI12_MUC1_SCENES, BAI12_MUC2_SCENES, BAI12_MUC3_SCENES ready.")
'''

with open(r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\ch4_bai12_data.py", "w", encoding="utf-8") as f:
    f.write(header)

print("ch4_bai12_data.py generated successfully.")
