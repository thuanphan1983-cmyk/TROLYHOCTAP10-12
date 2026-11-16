# -*- coding: utf-8 -*-
"""
CHƯƠNG IV: QUAN HỆ SONG SONG TRONG KHÔNG GIAN
BÀI 11: HAI ĐƯỜNG THẲNG SONG SONG TRONG KHÔNG GIAN - TOÁN 11 KNTT
Mục 1, Mục 2, Mục 3 - Đầy đủ 36 Scenes (12 scenes/mục)
Mỗi mục có 4 ví dụ minh họa kèm đồng hồ đếm ngược 15s/30s
Giọng đọc Thầy Nam Minh (vi-VN-NamMinhNeural) chuẩn sư phạm Bộ GD&ĐT
"""

# ==============================================================================
# MỤC 1: VỊ TRÍ TƯƠNG ĐỐI CỦA HAI ĐƯỜNG THẲNG TRONG KHÔNG GIAN
# ==============================================================================
BAI11_MUC1_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. VỊ TRÍ TƯƠNG ĐỐI CỦA HAI ĐƯỜNG THẲNG",
        "subtitle": "BÀI 11 • MỤC 1 • PHÂN BIỆT ĐỒNG PHẲNG VÀ CHÉO NHAU",
        "mascotMode": "pointer",
        "mascotTip": r"Trong không gian, 2 đường thẳng có thể: Cắt nhau, Song song, Trùng nhau hoặc Chéo nhau!",
        "narration": "Chào mừng các em đến với Bài 11: Hai đường thẳng song song trong không gian. Ở hình học phẳng lớp dưới, hai đường thẳng phân biệt chỉ có thể cắt nhau hoặc song song. Nhưng trong không gian ba chiều, có một trường hợp hoàn toàn mới và vô cùng thú vị, đó là hai đường thẳng chéo nhau, tức là chúng không cùng nằm trong bất kì một mặt phẳng nào và không bao giờ cắt nhau.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-900/60 to-indigo-900/40 p-4 rounded-xl border border-blue-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-lg uppercase tracking-wider">Khái niệm cốt lõi</span>
      <h3 class="text-xl font-black text-blue-200">4 Vị Trí Tương Đối Của Hai Đường Thẳng $a$ và $b$</h3>
    </div>
    <p class="text-sm text-slate-300 leading-relaxed">
      Dựa vào tính đồng phẳng và số điểm chung, ta chia thành 2 trường hợp lớn:
    </p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md">
      <h4 class="font-bold text-emerald-300 text-sm mb-1">Trường hợp 1: Đồng phẳng (cùng thuộc 1 mp)</h4>
      <p class="text-slate-300 leading-relaxed">
        • <b>Cắt nhau:</b> Có duy nhất 1 điểm chung ($a \cap b = \{M\}$).<br/>
        • <b>Song song:</b> Cùng thuộc một mặt phẳng và không có điểm chung ($a \parallel b$).<br/>
        • <b>Trùng nhau:</b> Có vô số điểm chung ($a \equiv b$).
      </p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-amber-400 shadow-md">
      <h4 class="font-bold text-amber-300 text-sm mb-1">Trường hợp 2: Không đồng phẳng</h4>
      <p class="text-slate-300 leading-relaxed">
        • <b>Chéo nhau:</b> Không cùng thuộc bất kì mặt phẳng nào.<br/>
        • Hai đường thẳng chéo nhau thì <b>không có điểm chung</b>.<br/>
        • <b class="text-rose-400">Lưu ý:</b> Không có điểm chung chưa chắc song song! Có thể chéo nhau!
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. ĐỊNH NGHĨA HAI ĐƯỜNG THẲNG SONG SONG",
        "subtitle": "BÀI 11 • MỤC 1 • HAI ĐIỀU KIỆN BẮT BUỘC: ĐỒNG PHẲNG VÀ KHÔNG ĐIỂM CHUNG",
        "mascotMode": "explaining",
        "mascotTip": r"$a \parallel b \iff$ Tồn tại mặt phẳng $(\alpha)$ chứa cả $a, b$ và $a \cap b = \emptyset$!",
        "narration": "Định nghĩa chính xác: Hai đường thẳng được gọi là song song nếu chúng cùng nằm trong một mặt phẳng và không có điểm chung. Kí hiệu là a song song b. Các em hãy chú ý: Trong không gian, điều kiện không có điểm chung là chưa đủ để khẳng định song song, mà bắt buộc phải có điều kiện đồng phẳng đi kèm. Nếu thiếu điều kiện đồng phẳng, chúng có thể chéo nhau.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-900/90 p-4 rounded-xl border border-cyan-500/40 text-center shadow-lg">
    <div class="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-1">Định nghĩa toán học chính thức</div>
    <div class="text-xl font-black text-cyan-200 py-1 font-mono">
      $$a \parallel b \iff \begin{cases} a, b \subset (\alpha) \\ a \cap b = \emptyset \end{cases}$$
    </div>
    <div class="text-xs text-slate-300 mt-2">
      Hai đường thẳng song song là hai đường thẳng <b>cùng nằm trong một mặt phẳng</b> và <b>không có điểm chung</b>.
    </div>
  </div>

  <div class="bg-amber-950/40 p-3 rounded-lg border border-amber-500/30 text-xs text-amber-200">
    ⚠️ <b>Cảnh báo bẫy trắc nghiệm:</b> Câu nói: "Hai đường thẳng không có điểm chung thì song song" là <b>SAI HOÀN TOÀN</b>! Vì chúng có thể <b>chéo nhau</b>!
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: VỊ TRÍ TƯƠNG ĐỐI TRONG HÌNH TỨ DIỆN",
        "subtitle": "BÀI 11 • MỤC 1 • NHẬN DIỆN ĐƯỜNG THẲNG CHÉO NHAU 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Hai cạnh đối diện của hình tứ diện như $AB$ và $CD$ luôn luôn chéo nhau!",
        "narration": "Ví dụ 1: Cho tứ diện ABCD. Vị trí tương đối của hai đường thẳng AB và CD là: Phương án A: Song song; Phương án B: Cắt nhau; Phương án C: Chéo nhau; Phương án D: Trùng nhau. Các em có 15 giây chọn đáp án.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Nhận biết</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-3">
      <b>Câu 1:</b> Cho hình tứ diện $ABCD$. Cặp đường thẳng $AB$ và $CD$ có vị trí tương đối là:
    </p>

    <div class="grid grid-cols-4 gap-2 text-xs font-mono text-center">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Song song</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> Cắt nhau</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>C.</b> Chéo nhau</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Trùng nhau</div>
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
        "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN C CHÉO NHAU",
        "subtitle": "BÀI 11 • MỤC 1 • CHỨNG MINH BẰNG PHẢN CHỨNG KHÔNG ĐỒNG PHẲNG",
        "mascotMode": "celebrating",
        "mascotTip": r"Nếu $AB$ và $CD$ đồng phẳng thì 4 điểm $A, B, C, D$ đồng phẳng (mâu thuẫn với giả thiết tứ diện)!",
        "narration": "Hết thời gian. Đáp án đúng là C: Chéo nhau. Chứng minh cực kì chặt chẽ bằng phản chứng: Giả sử AB và CD không chéo nhau, tức là chúng cùng thuộc một mặt phẳng (P). Khi đó cả 4 điểm A, B, C, D đều thuộc mặt phẳng (P). Điều này mâu thuẫn với định nghĩa tứ diện ABCD có 4 đỉnh không đồng phẳng. Vậy điều giả sử là sai, suy ra AB và CD chéo nhau.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Chứng minh phản chứng mẫu mực:</div>
    <div class="space-y-1.5 text-slate-300 font-mono">
      <p>• Giả sử $AB$ và $CD$ đồng phẳng, tức là cùng thuộc mặt phẳng $(P)$.</p>
      <p>• Khi đó: $A, B \in AB \subset (P) \implies A, B \in (P)$.</p>
      <p>  Và: $C, D \in CD \subset (P) \implies C, D \in (P)$.</p>
      <p>• Suy ra bốn điểm $A, B, C, D$ cùng thuộc mặt phẳng $(P)$ (mâu thuẫn với giả thiết $ABCD$ là tứ diện).</p>
      <p>• Vậy: $AB$ và $CD$ <b>chéo nhau</b>.</p>
      <div class="mt-2 text-emerald-300 font-bold font-sans">➔ Chọn đáp án C: Chéo nhau.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. BẢNG PHÂN LOẠI VỊ TRÍ TƯƠNG ĐỐI TRONG HÌNH CHÓP",
        "subtitle": "BÀI 11 • MỤC 1 • HỆ THỐNG CÁC CẶP CẠNH CỦA HÌNH CHÓP $S.ABCD$",
        "mascotMode": "explaining",
        "mascotTip": r"Cạnh bên và cạnh đáy không đi qua cùng 1 đỉnh thì CHÉO NHAU (ví dụ $SA$ và $BC$)!",
        "narration": "Trong hình chóp S.ABCD có đáy là hình bình hành, việc nhận diện nhanh các cặp cạnh có vị trí tương đối nào là một kỹ năng phản xạ quan trọng. Cặp cạnh đối đáy AB và CD là song song. Cặp đường chéo đáy AC và BD là cắt nhau tại tâm O. Cạnh bên SA và cạnh đáy AB là cắt nhau tại A. Còn cạnh bên SA và cạnh đáy BC không có điểm chung và không đồng phẳng nên chúng chéo nhau.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="overflow-x-auto">
    <table class="w-full text-xs text-left border-collapse">
      <thead>
        <tr class="bg-slate-700 text-slate-200">
          <th class="p-2 border border-slate-600">Cặp đường thẳng</th>
          <th class="p-2 border border-slate-600">Vị trí tương đối</th>
          <th class="p-2 border border-slate-600">Giải thích bản chất</th>
        </tr>
      </thead>
      <tbody class="text-slate-300">
        <tr class="bg-slate-800/80">
          <td class="p-2 border border-slate-600 font-bold text-emerald-300">$AB$ và $CD$</td>
          <td class="p-2 border border-slate-600 font-semibold text-emerald-400">Song song</td>
          <td class="p-2 border border-slate-600">Cùng thuộc mp đáy $(ABCD)$ và là 2 cạnh đối hình bình hành.</td>
        </tr>
        <tr class="bg-slate-800/50">
          <td class="p-2 border border-slate-600 font-bold text-cyan-300">$AC$ và $BD$</td>
          <td class="p-2 border border-slate-600 font-semibold text-cyan-400">Cắt nhau</td>
          <td class="p-2 border border-slate-600">Cùng thuộc mp đáy $(ABCD)$, cắt nhau tại tâm $O$.</td>
        </tr>
        <tr class="bg-slate-800/80">
          <td class="p-2 border border-slate-600 font-bold text-purple-300">$SA$ và $AB$</td>
          <td class="p-2 border border-slate-600 font-semibold text-purple-400">Cắt nhau</td>
          <td class="p-2 border border-slate-600">Cùng thuộc mp bên $(SAB)$, cắt nhau tại đỉnh $A$.</td>
        </tr>
        <tr class="bg-slate-800/50">
          <td class="p-2 border border-slate-600 font-bold text-amber-300">$SA$ và $BC$</td>
          <td class="p-2 border border-slate-600 font-semibold text-amber-400">Chéo nhau</td>
          <td class="p-2 border border-slate-600">Không cùng thuộc bất kì mặt phẳng nào.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: XÁC ĐỊNH CẶP ĐƯỜNG THẲNG CHÉO NHAU",
        "subtitle": "BÀI 11 • MỤC 1 • LUYỆN PHẢN XẠ NHANH 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Tìm cặp đường thẳng không có đỉnh chung và không nằm trên cùng một mặt tam giác hay mặt đáy!",
        "narration": "Ví dụ 2: Cho hình chóp S.ABCD có đáy ABCD là hình thang với đáy lớn AB song song đáy nhỏ CD. Trong các cặp đường thẳng sau, cặp đường thẳng nào chéo nhau? Phương án A: AB và CD; Phương án B: SA và SC; Phương án C: SB và CD; Phương án D: AD và BC. Các em có 15 giây chọn đáp án.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-3">
      <b>Câu 2:</b> Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB \parallel CD$, $AB > CD$). Cặp đường thẳng nào sau đây <b>chéo nhau</b>?
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs font-mono">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> $AB$ và $CD$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> $SA$ và $SC$</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>C.</b> $SB$ và $CD$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> $AD$ và $BC$</div>
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
        "title": "7. LỜI GIẢI VÍ DỤ 2: ĐÁP ÁN C: $SB$ VÀ $CD$",
        "subtitle": "BÀI 11 • MỤC 1 • LOẠI TRỪ CHUẨN XÁC CÁC PHƯƠNG ÁN ĐỒNG PHẲNG",
        "mascotMode": "celebrating",
        "mascotTip": r"$AB \parallel CD$ (song song); $SA, SC$ cắt nhau tại $S$; $AD, BC$ cắt nhau tại $E \implies SB$ và $CD$ chéo nhau!",
        "narration": "Hết thời gian. Đáp án đúng là C: SB và CD là hai đường thẳng chéo nhau. Phương án A: AB và CD là hai cạnh đáy hình thang nên song song. Phương án B: SA và SC cùng thuộc mặt phẳng chéo SAC và cắt nhau tại đỉnh S. Phương án D: AD và BC là hai cạnh bên của hình thang không song song nên cắt nhau trong mặt phẳng đáy. Chỉ có cặp SB và CD là không cùng nằm trong bất kì mặt phẳng nào, do đó chúng chéo nhau.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40 text-xs">
    <div class="text-xs font-bold text-cyan-300 uppercase mb-2">Lời giải chi tiết:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• <b>Phương án A:</b> $AB \parallel CD$ (hai đáy hình thang, song song).</p>
      <p>• <b>Phương án B:</b> $SA$ và $SC$ cùng nằm trong mp $(SAC)$ và cắt nhau tại $S$.</p>
      <p>• <b>Phương án D:</b> $AD$ và $BC$ cùng nằm trong đáy $(ABCD)$, cắt nhau tại giao điểm của 2 cạnh bên.</p>
      <p>• <b>Phương án C:</b> $SB$ và $CD$ không đồng phẳng $\implies$ <b>chéo nhau</b>.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án C.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. HIỆN TƯỢNG ĐƯỜNG THẲNG CHÉO NHAU TRONG THỰC TẾ",
        "subtitle": "BÀI 11 • MỤC 1 • CẦU VƯỢT GIAO THÔNG VÀ DÂY ĐIỆN KHÔNG GIAN",
        "mascotMode": "explaining",
        "mascotTip": r"Cầu vượt cho xe chạy bên trên và đường bộ bên dưới chính là mô hình 2 đường thẳng chéo nhau!",
        "narration": "Trong đời sống thực tế, các em thường xuyên bắt gặp mô hình của hai đường thẳng chéo nhau. Điển hình nhất là hệ thống cầu vượt giao thông: Con đường trên cầu vượt và con đường dưới mặt đất bắt chéo qua nhau khi nhìn từ trên vệ tinh xuống, nhưng xe cộ lưu thông ở hai tầng hoàn toàn độc lập và không bao giờ xảy ra va chạm hay cắt nhau. Tương tự là đường bay của hai chiếc máy bay ở hai tầng độ cao khác nhau hay các đường dây điện chéo nhau trên không trung.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-indigo-900/60 to-purple-900/40 p-4 rounded-xl border border-indigo-500/30 text-xs">
    <div class="font-bold text-indigo-300 text-sm mb-2 flex items-center gap-2">
      <span>🌉</span> <span>Hình Ảnh Thực Tế Của Hai Đường Thẳng Chéo Nhau</span>
    </div>
    <div class="grid grid-cols-2 gap-3">
      <div class="bg-slate-800 p-2.5 rounded-lg border-l-4 border-indigo-400">
        <b class="text-indigo-300">Cầu vượt giao thông</b>
        <p class="text-slate-300 mt-1">Đường trên cầu và đường dưới gầm cầu chéo nhau: nhìn hình chiếu thì giao nhau nhưng thực tế cách nhau một khoảng an toàn, không có điểm chạm!</p>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-l-4 border-purple-400">
        <b class="text-purple-300">Đường bay máy bay</b>
        <p class="text-slate-300 mt-1">Hai máy bay bay theo hai hướng chéo nhau ở độ cao 8.000m và 10.000m không hề va chạm vì không cùng nằm trên một mặt phẳng bay.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: TÌM VỊ TRÍ ĐOẠN NỐI TRUNG ĐIỂM",
        "subtitle": "BÀI 11 • MỤC 1 • VẬN DỤNG TRONG HÌNH TỨ DIỆN 30 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Gọi $M$ là trung điểm $AB$, $N$ là trung điểm $CD$. $MN$ gọi là đoạn nối trung điểm hai cạnh đối diện!",
        "narration": "Ví dụ 3: Cho tứ diện ABCD. Gọi M và N lần lượt là trung điểm của các cạnh AB và CD. Vị trí tương đối của đường thẳng MN với đường thẳng BC là gì? Phương án A: Song song; Phương án B: Cắt nhau; Phương án C: Chéo nhau; Phương án D: Trùng nhau. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-3">
      <b>Câu 3:</b> Cho tứ diện $ABCD$. Gọi $M$ là trung điểm của $AB$, $N$ là trung điểm của $CD$. Vị trí tương đối của hai đường thẳng $MN$ và $BC$ là:
    </p>

    <div class="grid grid-cols-4 gap-2 text-xs font-mono text-center">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Song song</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> Cắt nhau</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>C.</b> Chéo nhau</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Trùng nhau</div>
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
        "sceneIndex": 10,
        "title": "10. LỜI GIẢI VÍ DỤ 3: $MN$ VÀ $BC$ CHÉO NHAU",
        "subtitle": "BÀI 11 • MỤC 1 • CHỨNG MINH KHÔNG THỂ CÙNG NẰM TRONG MỘT MẶT PHẲNG",
        "mascotMode": "celebrating",
        "mascotTip": r"Nếu $MN$ và $BC$ đồng phẳng thì $A \in (BCD)$ (vô lý)!",
        "narration": "Hết thời gian. Đáp án đúng là C: MN và BC chéo nhau. Chứng minh phản chứng: Giả sử MN và BC cùng nằm trong một mặt phẳng (P). Khi đó điểm B, C, N đều thuộc (P). Vì N là trung điểm của CD nên điểm D cũng phải thuộc (P), do đó mặt phẳng (P) chính là mặt phẳng BCD. Mặt khác, điểm M thuộc (P), tức M thuộc BCD. Vì M là trung điểm AB nên điểm A cũng phải thuộc mặt phẳng BCD. Điều này dẫn đến 4 điểm A, B, C, D đồng phẳng, mâu thuẫn với giả thiết ABCD là tứ diện. Vậy MN và BC chéo nhau.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40 text-xs">
    <div class="text-xs font-bold text-indigo-300 uppercase mb-2">Chứng minh phản chứng chi tiết:</div>
    <div class="space-y-1.5 text-slate-300 font-mono">
      <p>• Giả sử $MN$ và $BC$ đồng phẳng, cùng thuộc mặt phẳng $(P)$.</p>
      <p>• Ta có: $B, C \in (P)$ và $N \in (P)$. Vì $N \in CD \implies D \in (P)$.</p>
      <p>  Do đó $(P) \equiv (BCD)$.</p>
      <p>• Lại có $M \in (P) \equiv (BCD)$. Mà $M \in AB \implies A \in (BCD)$.</p>
      <p>• Khi đó cả 4 điểm $A, B, C, D$ cùng thuộc $(BCD)$ $\implies$ Mâu thuẫn với định nghĩa tứ diện!</p>
      <div class="mt-2 text-emerald-300 font-bold font-sans">➔ Kết luận: $MN$ và $BC$ <b>chéo nhau</b> (chọn C).</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: ĐẾM SỐ CẶP CẠNH CHÉO NHAU CỦA TỨ DIỆN",
        "subtitle": "BÀI 11 • MỤC 1 • BÀI TOÁN TỔ HỢP ĐẾM HÌNH HỌC 30 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Tứ diện có 6 cạnh: $(AB, CD); (AC, BD); (AD, BC) \implies$ đúng 3 cặp cạnh chéo nhau!",
        "narration": "Ví dụ 4: Một hình tứ diện có tất cả bao nhiêu cặp cạnh đối diện chéo nhau? Phương án A: 2 cặp; Phương án B: 3 cặp; Phương án C: 4 cặp; Phương án D: 6 cặp. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 4 (30s)</span>
      <span class="text-xs text-slate-400">Tư duy tổ hợp hình học</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-3">
      <b>Câu 4:</b> Trong hình tứ diện $ABCD$, có tất cả bao nhiêu cặp cạnh <b>chéo nhau</b>?
    </p>

    <div class="grid grid-cols-4 gap-2 text-xs font-mono text-center">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> 2 cặp</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>B.</b> 3 cặp</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> 4 cặp</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> 6 cặp</div>
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
        "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 1",
        "subtitle": "BÀI 11 • MỤC 1 • KẾT QUẢ ĐẸP: ĐÚNG 3 CẶP CẠNH ĐỐI DIỆN",
        "mascotMode": "celebrating",
        "mascotTip": r"Tứ diện $ABCD$ có đúng 3 cặp cạnh chéo nhau: $(AB, CD)$, $(AC, BD)$, $(AD, BC)$!",
        "narration": "Chúc mừng các em. Tứ diện ABCD có 4 đỉnh và 6 cạnh. Cứ mỗi cạnh sẽ có đúng một cạnh đối diện không có điểm chung với nó: Cạnh AB đối diện với CD; Cạnh AC đối diện với BD; Cạnh AD đối diện với BC. Ba cặp cạnh đối diện này đều không đồng phẳng nên chúng chéo nhau từng đôi một. Vậy có đúng 3 cặp cạnh chéo nhau. Như vậy, chúng ta đã làm chủ trọn vẹn Mục 1. Hãy cùng bước sang Mục 2 để tìm hiểu về tính chất hai đường thẳng song song và định lí ba giao tuyến.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-1">Tổng hợp 3 cặp cạnh chéo nhau của tứ diện:</div>
    <div class="grid grid-cols-3 gap-2 my-2 text-center font-mono font-bold">
      <div class="bg-slate-900 p-2 rounded text-cyan-200">1. $(AB, CD)$</div>
      <div class="bg-slate-900 p-2 rounded text-emerald-200">2. $(AC, BD)$</div>
      <div class="bg-slate-900 p-2 rounded text-amber-200">3. $(AD, BC)$</div>
    </div>

    <div class="mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30">
      <b class="text-emerald-200">⭐ TỔNG KẾT MỤC 1 CẦN NHỚ:</b>
      <p class="text-slate-300 mt-1">
        • Hai đường thẳng trong không gian có 4 vị trí: Cắt nhau, Song song, Trùng nhau, Chéo nhau.<br/>
        • Hai đường thẳng song song: Vừa đồng phẳng vừa không có điểm chung.<br/>
        • Hai đường thẳng chéo nhau: Không đồng phẳng và không có điểm chung.
      </p>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 2: TÍNH CHẤT HAI ĐƯỜNG THẲNG SONG SONG & ĐỊNH LÍ BA GIAO TUYẾN
# ==============================================================================
BAI11_MUC2_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. HAI TÍNH CHẤT CƠ BẢN CỦA ĐƯỜNG THẲNG SONG SONG",
        "subtitle": "BÀI 11 • MỤC 2 • TIÊN ĐỀ Ơ-CLÍT TRONG KHÔNG GIAN VÀ TÍNH BẮC CẦU",
        "mascotMode": "pointer",
        "mascotTip": r"Trong không gian: Qua 1 điểm ngoài đường thẳng, có duy nhất 1 đường thẳng song song!",
        "narration": "Chào mừng các em đến với Mục 2: Tính chất của hai đường thẳng song song và định lí ba giao tuyến. Tính chất thứ nhất là sự mở rộng của tiên đề Ơ-clít vào không gian: Trong không gian, qua một điểm không thuộc đường thẳng d cho trước, có một và chỉ một đường thẳng song song với d. Tính chất thứ hai là tính bắc cầu: Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40">
      <div class="font-bold text-cyan-300 text-sm mb-1">Tính chất 1 (Tiên đề Ơ-clít)</div>
      <p class="text-slate-300 leading-relaxed">
        Trong không gian, qua một điểm $M$ không thuộc đường thẳng $d$, có <b>một và chỉ một</b> đường thẳng $d'$ song song với $d$.
      </p>
      <div class="mt-2 bg-slate-900 p-2 rounded text-cyan-200 font-mono text-center">
        $M \notin d \implies \exists! d': M \in d'$ và $d' \parallel d$
      </div>
    </div>

    <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40">
      <div class="font-bold text-emerald-300 text-sm mb-1">Tính chất 2 (Tính bắc cầu)</div>
      <p class="text-slate-300 leading-relaxed">
        Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau.
      </p>
      <div class="mt-2 bg-slate-900 p-2 rounded text-emerald-200 font-mono text-center">
        $\begin{cases} a \parallel c \\ b \parallel c \\ a \ne b \end{cases} \implies a \parallel b$
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. ĐỊNH LÍ BA GIAO TUYẾN KINH ĐIỂN",
        "subtitle": "BÀI 11 • MỤC 2 • ĐỒNG QUY HOẶC ĐÔI MỘT SONG SONG",
        "mascotMode": "explaining",
        "mascotTip": r"Ba mặt phẳng đôi một cắt nhau theo 3 giao tuyến thì 3 giao tuyến đó hoặc ĐỒNG QUY hoặc ĐÔI MỘT SONG SONG!",
        "narration": "Định lí ba giao tuyến là một trong những định lí đẹp nhất và quyền năng nhất của hình học không gian. Nội dung định lí phát biểu như sau: Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt, thì ba giao tuyến đó hoặc đồng quy tại một điểm, hoặc đôi một song song với nhau. Từ định lí này, ta rút ra một hệ quả cực kì quan trọng: Nếu hai mặt phẳng phân biệt lần lượt chứa hai đường thẳng song song thì giao tuyến của chúng nếu có bắt buộc phải song song với hai đường thẳng đó.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-900/90 p-4 rounded-xl border border-indigo-500/40 text-xs">
    <div class="font-bold text-indigo-300 text-sm mb-2 text-center uppercase tracking-wider">
      Định Lí Ba Giao Tuyến & Hệ Quả Trọng Tâm
    </div>
    <div class="grid grid-cols-2 gap-3 mt-2">
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-cyan-400">
        <b class="text-cyan-300">Định lí gốc:</b>
        <p class="text-slate-300 mt-1 font-mono">
          $(\alpha) \cap (\beta) = a$<br/>
          $(\beta) \cap (\gamma) = b$<br/>
          $(\gamma) \cap (\alpha) = c$<br/>
          $\implies$ Hoặc $a, b, c$ <b>đồng quy</b>, hoặc $a \parallel b \parallel c$.
        </p>
      </div>

      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-400">
        <b class="text-emerald-300">Hệ quả giao tuyến song song:</b>
        <p class="text-slate-300 mt-1 font-mono">
          $\begin{cases} d_1 \subset (\alpha), d_2 \subset (\beta) \\ d_1 \parallel d_2 \\ (\alpha) \cap (\beta) = d \end{cases} \implies d \parallel d_1 \parallel d_2$
        </p>
        <span class="text-emerald-400 text-xs">Ứng dụng tìm giao tuyến cực nhanh!</span>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: TÌM GIAO TUYẾN CHỨA HAI ĐƯỜNG SONG SONG",
        "subtitle": "BÀI 11 • MỤC 2 • ÁP DỤNG HỆ QUẢ GIAO TUYẾN SONG SONG 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Mặt $(SAB)$ chứa $AB$, mặt $(SCD)$ chứa $CD$ mà $AB \parallel CD \implies$ Giao tuyến qua $S$ và song song $AB$!",
        "narration": "Ví dụ 1: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Giao tuyến của hai mặt phẳng SAB và SCD là: Phương án A: Đường thẳng đi qua S và song song với AB; Phương án B: Đường thẳng SO với O là tâm hình bình hành; Phương án C: Đường thẳng AC; Phương án D: Đường thẳng BD. Các em có 15 giây chọn đáp án.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-3">
      <b>Câu 1:</b> Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là:
    </p>

    <div class="space-y-1.5 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>A.</b> Đường thẳng $d$ đi qua $S$ và song song với $AB, CD$.</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> Đường thẳng $SO$ với $O$ là giao điểm của $AC$ và $BD$.</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> Đường thẳng đi qua $S$ và cắt $AB$.</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Không có giao tuyến vì $AB \parallel CD$.</div>
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
        "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN A CHÍNH XÁC",
        "subtitle": "BÀI 11 • MỤC 2 • KỸ THUẬT VẼ GIAO TUYẾN SONG SONG",
        "mascotMode": "celebrating",
        "mascotTip": r"Điểm chung $S$; chứa $AB \parallel CD \implies$ Giao tuyến là đường thẳng $d$ qua $S$ và $d \parallel AB \parallel CD$!",
        "narration": "Hết thời gian. Đáp án đúng là A. Xét hai mặt phẳng SAB và SCD: Điểm chung thứ nhất là đỉnh S. Mặt phẳng SAB chứa đường thẳng AB; mặt phẳng SCD chứa đường thẳng CD; mà AB song song với CD do đáy là hình bình hành. Áp dụng hệ quả của định lí ba giao tuyến, giao tuyến của hai mặt phẳng SAB và SCD là đường thẳng d đi qua điểm chung S và song song với cả AB và CD.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Lời giải chi tiết:</div>
    <div class="space-y-1.5 text-slate-300 font-mono">
      <p>• $S$ là điểm chung của $(SAB)$ và $(SCD)$.</p>
      <p>• $\begin{cases} AB \subset (SAB) \\ CD \subset (SCD) \\ AB \parallel CD \text{ (do } ABCD \text{ là hình bình hành)} \end{cases}$.</p>
      <p>• Theo hệ quả định lí ba giao tuyến: Giao tuyến $(SAB) \cap (SCD) = d$ là đường thẳng qua $S$ và $d \parallel AB \parallel CD$.</p>
      <div class="mt-2 text-emerald-300 font-bold font-sans">➔ Chọn đáp án A.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. PHƯƠNG PHÁP CHỨNG MINH HAI ĐƯỜNG THẲNG SONG SONG",
        "subtitle": "BÀI 11 • MỤC 2 • 3 CON ĐƯỜNG GIẢI TOÁN HIỆU QUẢ NHẤT",
        "mascotMode": "explaining",
        "mascotTip": r"Ưu tiên 1: Đường trung bình tam giác. Ưu tiên 2: Định lí Ta-lét đảo. Ưu tiên 3: Định lí ba giao tuyến!",
        "narration": "Để chứng minh hai đường thẳng a và b song song trong không gian, chúng ta có ba con đường chính. Con đường 1: Vận dụng các kiến thức hình học phẳng trong mặt phẳng chứa cả a và b: chứng minh a và b là đường trung bình của tam giác, hình thang, hoặc dùng định lí Ta-lét đảo, hoặc là các cạnh đối của hình bình hành. Con đường 2: Vận dụng tính chất bắc cầu: chứng minh a và b cùng song song với một đường thẳng thứ ba c. Con đường 3: Vận dụng định lí ba giao tuyến hoặc hệ quả giao tuyến song song.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-teal-900/60 to-emerald-900/40 p-4 rounded-xl border border-teal-500/30 text-xs">
    <div class="font-bold text-teal-300 text-sm mb-2">3 Con Đường Chứng Minh $a \parallel b$ Trong Không Gian</div>
    <div class="grid grid-cols-3 gap-2.5">
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-400">
        <b class="text-emerald-300">Cách 1: Hình học phẳng</b>
        <p class="text-slate-300 mt-1">Chứng minh $a, b$ cùng thuộc một mp và là đường trung bình, Ta-lét đảo, hình bình hành.</p>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-cyan-400">
        <b class="text-cyan-300">Cách 2: Tính bắc cầu</b>
        <p class="text-slate-300 mt-1">Tìm đường thẳng $c$ trung gian sao cho: $\begin{cases} a \parallel c \\ b \parallel c \end{cases} \implies a \parallel b$.</p>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-purple-400">
        <b class="text-purple-300">Cách 3: Giao tuyến //</b>
        <p class="text-slate-300 mt-1">Sử dụng định lí ba giao tuyến hoặc giao tuyến của 2 mp chứa 2 đường thẳng song song.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: CHỨNG MINH SONG SONG BẰNG ĐƯỜNG TRUNG BÌNH",
        "subtitle": "BÀI 11 • MỤC 2 • THỰC CHIẾN TÍNH CHẤT TRONG HÌNH CHÓP 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"$M, N$ là trung điểm $SA, SB \implies MN$ là đường trung bình $\triangle SAB \implies MN \parallel AB$!",
        "narration": "Ví dụ 2: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Gọi M, N, P, Q lần lượt là trung điểm của các cạnh bên SA, SB, SC, SD. Khẳng định nào sau đây là sai? Phương án A: MN song song AB; Phương án B: PQ song song CD; Phương án C: MN song song PQ; Phương án D: MP song song NQ. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-3">
      <b>Câu 2:</b> Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $M, N, P, Q$ lần lượt là trung điểm của $SA, SB, SC, SD$. Khẳng định nào sau đây <b>sai</b>?
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs font-mono">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> $MN \parallel AB$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> $PQ \parallel CD$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> $MN \parallel PQ$</div>
      <div class="p-2 bg-slate-900 rounded border border-rose-500 font-bold text-rose-300"><b>D.</b> $MP \parallel NQ$</div>
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
        "title": "7. LỜI GIẢI VÍ DỤ 2: ĐÁP ÁN D LÀ KHẲNG ĐỊNH SAI",
        "subtitle": "BÀI 11 • MỤC 2 • HAI ĐƯỜNG CHÉO CỦA HÌNH BÌNH HÀNH CẮT NHAU",
        "mascotMode": "celebrating",
        "mascotTip": r"$MNPQ$ là hình bình hành nên 2 đường chéo $MP$ và $NQ$ CẮT NHAU chứ không song song!",
        "narration": "Hết thời gian. Đáp án sai cần chọn là D: MP song song NQ. Tại sao? Ta có MN là đường trung bình tam giác SAB nên MN song song AB. PQ là đường trung bình tam giác SCD nên PQ song song CD. Vì AB song song CD nên theo tính chất bắc cầu, MN song song PQ. Hoàn toàn tương tự, MQ song song NP. Do đó tứ giác MNPQ là hình bình hành. Vì MNPQ là hình bình hành nên hai đường chéo MP và NQ cắt nhau tại trung điểm của mỗi đường, chứ không thể song song với nhau. Do đó khẳng định D là sai.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40 text-xs">
    <div class="text-xs font-bold text-cyan-300 uppercase mb-2">Lời giải chi tiết:</div>
    <div class="space-y-1.5 text-slate-300 font-mono">
      <p>• $MN \parallel AB$ (đường trung bình $\triangle SAB$) $\implies$ A đúng.</p>
      <p>• $PQ \parallel CD$ (đường trung bình $\triangle SCD$) $\implies$ B đúng.</p>
      <p>• Vì $AB \parallel CD \implies MN \parallel PQ \implies$ C đúng.</p>
      <p>• Tương tự $MQ \parallel NP \implies MNPQ$ là <b>hình bình hành</b>.</p>
      <p>• Trong hình bình hành $MNPQ$, hai đường chéo $MP$ và $NQ$ <b>cắt nhau</b> tại tâm hình bình hành, không thể song song!</p>
      <div class="mt-2 text-rose-300 font-bold font-sans">➔ Khẳng định sai là D (chọn D).</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. KỸ NĂNG VẬN DỤNG ĐỊNH LÍ TA-LÉT ĐẢO TRONG KHÔNG GIAN",
        "subtitle": "BÀI 11 • MỤC 2 • CHỨNG MINH SONG SONG KHI ĐIỂM KHÔNG PHẢI TRUNG ĐIỂM",
        "mascotMode": "explaining",
        "mascotTip": r"Lập tỉ số: $\frac{SM}{SA} = \frac{SN}{SB} \implies MN \parallel AB$!",
        "narration": "Khi các điểm trên cạnh bên không phải là trung điểm mà chia các cạnh theo các tỉ số bất kì, vũ khí mạnh nhất là định lí Ta-lét đảo. Nếu trên hai cạnh SA và SB của tam giác SAB, ta có tỉ số SM chia SA bằng SN chia SB thì đường thẳng MN song song với AB. Kỹ thuật này cực kì phổ biến trong các bài toán biến thiên tỉ số thiết diện.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-900/60 to-indigo-900/40 p-4 rounded-xl border border-purple-500/30 text-xs">
    <div class="font-bold text-purple-300 text-sm mb-2">Định Lí Ta-lét Đảo Trong Tam Giác Không Gian</div>
    <div class="bg-slate-800 p-3 rounded-lg border-l-4 border-purple-400 space-y-1 text-slate-300">
      <p>Xét trong mặt phẳng $(SAB)$:</p>
      <div class="p-2 bg-slate-900 rounded font-mono text-center text-purple-200 font-bold my-1">
        $$\frac{SM}{SA} = \frac{SN}{SB} \implies MN \parallel AB$$
      </div>
      <p>• Tương tự với tỉ lệ: $\frac{MA}{SA} = \frac{NB}{SB}$ hoặc $\frac{SM}{MA} = \frac{SN}{NB}$.</p>
      <p>• Kết hợp với $AB \parallel CD \implies MN \parallel CD$ theo tính chất bắc cầu.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: GIAO TUYẾN SONG SONG QUA ĐIỂM TRONG TAM GIÁC",
        "subtitle": "BÀI 11 • MỤC 2 • BÀI TOÁN XÁC ĐỊNH GIAO TUYẾN 30 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Giao tuyến đi qua điểm chung và song song với 2 đường thẳng song song có sẵn!",
        "narration": "Ví dụ 3: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Gọi M là một điểm nằm trên đoạn SC sao cho SM bằng 2 lần MC. Mặt phẳng alpha đi qua M và song song với đường thẳng BD. Tìm giao tuyến của mặt phẳng alpha với mặt phẳng SBD. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Mặt phẳng $(\alpha)$ đi qua điểm $M \in SC$ và song song với $BD$.
    </p>

    <div class="bg-slate-900 p-2.5 rounded text-xs text-slate-300 space-y-1">
      <p>• Trong $(SAC)$, gọi $I = AM \cap SO$.</p>
      <p>• Xác định giao tuyến của $(\alpha)$ với mặt phẳng $(SBD)$.</p>
    </div>

    <p class="text-xs text-indigo-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Mô tả đường thẳng giao tuyến $(\alpha) \cap (SBD)$.
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
        "title": "10. LỜI GIẢI VÍ DỤ 3: GIAO TUYẾN QUA $I$ VÀ SONG SONG $BD$",
        "subtitle": "BÀI 11 • MỤC 2 • KỸ THUẬT DỰNG ĐƯỜNG THẲNG SONG SONG",
        "mascotMode": "celebrating",
        "mascotTip": r"Điểm chung là $I$; song song với $BD \implies$ Giao tuyến là đường thẳng qua $I$ song song $BD$!",
        "narration": "Hết thời gian. Ta có điểm I là giao điểm của đường thẳng AM với SO trong mặt phẳng SAC. Vì I thuộc SO nên I thuộc mặt phẳng SBD; và I thuộc AM nên I thuộc mặt phẳng alpha. Vậy I là điểm chung của mặt phẳng alpha và mặt phẳng SBD. Mặt phẳng SBD chứa đường thẳng BD, mà mặt phẳng alpha lại song song với BD. Do đó, theo hệ quả định lí giao tuyến song song, giao tuyến của mặt phẳng alpha với mặt phẳng SBD là đường thẳng d đi qua điểm I và song song với BD.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40 text-xs">
    <div class="text-xs font-bold text-indigo-300 uppercase mb-2">Lời giải chi tiết:</div>
    <div class="space-y-1.5 text-slate-300 font-mono">
      <p>• Điểm chung: $I = AM \cap SO \implies I \in (\alpha) \cap (SBD)$.</p>
      <p>• Ta có: $BD \subset (SBD)$ và theo giả thiết $(\alpha) \parallel BD$.</p>
      <p>• Do đó: Giao tuyến của $(\alpha)$ và $(SBD)$ là đường thẳng $d$ đi qua $I$ và <b>song song với $BD$</b>.</p>
      <p>• Trong $(SBD)$, đường thẳng $d$ cắt $SB$ tại $E$ và cắt $SD$ tại $F$.</p>
      <div class="mt-2 text-emerald-300 font-bold font-sans">➔ Giao tuyến là đường thẳng $EF \parallel BD$.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: ĐỀ TỔNG ÔN TRẮC NGHIỆM ĐÚNG/SAI BÀI 11",
        "subtitle": "BÀI 11 • MỤC 2 • THẨM ĐỊNH TÍNH ĐÚNG SAI 4 MỆNH ĐỀ",
        "mascotMode": "thinking",
        "mascotTip": r"Đọc kĩ từng mệnh đề về quan hệ song song và định lí ba giao tuyến!",
        "narration": "Ví dụ 4 là câu hỏi Trắc nghiệm Đúng/Sai 4 ý chuẩn cấu trúc đề thi của Bộ GD&ĐT. Cho hai đường thẳng phân biệt a và b cùng song song với mặt phẳng alpha. Xét tính Đúng hoặc Sai của 4 mệnh đề sau: Ý a: Hai đường thẳng a và b có thể song song với nhau; Ý b: Hai đường thẳng a và b có thể cắt nhau; Ý c: Hai đường thẳng a và b có thể chéo nhau; Ý d: Hai đường thẳng a và b bắt buộc phải song song với nhau. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Ví dụ 4 (Đúng/Sai - 30s)</span>
      <span class="text-xs text-slate-400">Tư duy không gian trừu tượng</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Cho hai đường thẳng phân biệt $a$ và $b$ cùng song song với một mặt phẳng $(\alpha)$. Xét tính Đúng/Sai:
    </p>

    <div class="space-y-1 text-xs text-slate-200">
      <p><b>a)</b> $a$ và $b$ có thể song song với nhau.</p>
      <p><b>b)</b> $a$ và $b$ có thể cắt nhau tại một điểm.</p>
      <p><b>c)</b> $a$ và $b$ có thể chéo nhau trong không gian.</p>
      <p><b>d)</b> $a$ và $b$ nhất thiết phải song song với nhau.</p>
    </div>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian thẩm định:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT BÀI 11",
        "subtitle": "BÀI 11 • MỤC 2 • KẾT QUẢ: a-ĐÚNG, b-ĐÚNG, c-ĐÚNG, d-SAI",
        "mascotMode": "celebrating",
        "mascotTip": r"Hai đường thẳng cùng song song một mp có thể: Song song, Cắt nhau hoặc Chéo nhau!",
        "narration": "Chúc mừng các em. Thầy cùng các em thẩm định: Lấy ví dụ mặt phẳng alpha là mặt sàn nhà. Trên trần nhà ta vẽ hai đường thẳng song song a và b thì a và b cùng song song với sàn nhà, vậy mệnh đề a Đúng. Nếu trên trần nhà ta vẽ hai đường thẳng cắt nhau a và b thì chúng vẫn cùng song song với sàn nhà, vậy mệnh đề b Đúng. Nếu ta lấy một đường a trên trần nhà và một đường b nằm ở tầng lửng sao cho chúng không song song thì a và b chéo nhau và vẫn cùng song song với sàn nhà, vậy mệnh đề c Đúng. Mệnh đề d khẳng định a và b nhất thiết phải song song là Sai hoàn toàn. Như vậy kết quả là: a Đúng, b Đúng, c Đúng, d Sai. Chúng ta đã hoàn thành xuất sắc toàn bộ Bài 11.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="space-y-1.5 text-slate-300">
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>a)</b> $a$ và $b$ có thể song song (VD: 2 mép đối diện của trần nhà).</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>b)</b> $a$ và $b$ có thể cắt nhau (VD: 2 đường chéo của trần nhà).</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>c)</b> $a$ và $b$ có thể chéo nhau ở hai độ cao khác nhau so với sàn.</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>d)</b> Khẳng định $a \parallel b$ nhất thiết xảy ra là sai.</span>
        <span class="px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold rounded">SAI</span>
      </div>
    </div>

    <div class="mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30 text-xs">
      <div class="font-bold text-emerald-200 mb-1 flex items-center gap-1.5">
        <span>🎉</span> <span>HOÀN THÀNH XUẤT SẮC TOÀN BỘ BÀI 11!</span>
      </div>
      <p class="text-slate-300">
        Các em đã thành thạo: 4 vị trí tương đối, định nghĩa 2 đường thẳng song song, tính chất bắc cầu và định lí ba giao tuyến!
      </p>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 3: PHƯƠNG PHÁP CHỨNG MINH SONG SONG & THIẾT DIỆN SONG SONG
# ==============================================================================
BAI11_MUC3_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. CHIẾN THUẬT CHỨNG MINH HAI ĐƯỜNG THẲNG SONG SONG",
        "subtitle": "BÀI 11 • MỤC 3 • CÁC KỸ THUẬT GIẢI TOÁN TỔNG HỢP NÂNG CAO",
        "mascotMode": "pointer",
        "mascotTip": r"Chứng minh 2 đường thẳng song song: Tìm mặt phẳng chứa cả 2 đường hoặc dùng đường thứ 3 trung gian!",
        "narration": "Chào mừng các em đến với Mục 3: Phương pháp chứng minh hai đường thẳng song song và bài toán tìm thiết diện song song với một đường thẳng. Để giải quyết các bài toán chứng minh song song ở mức độ vận dụng, bí quyết là tìm ra một mặt phẳng chung chứa cả hai đường thẳng, sau đó sử dụng các định lí hình học phẳng quen thuộc. Nếu không tìm được mặt phẳng chung, ta tìm một đường thẳng thứ ba làm cầu nối trung gian.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider">Hệ thống phương pháp</span>
      <h3 class="text-xl font-black text-emerald-200">Bản Đồ Kỹ Thuật Chứng Minh $a \parallel b$</h3>
    </div>
    <p class="text-sm text-slate-300 leading-relaxed">
      • <b>Hướng 1 (Đồng phẳng):</b> Chỉ ra $a, b \subset (\alpha)$ và áp dụng đường trung bình, định lí Ta-lét đảo, hình bình hành.<br/>
      • <b>Hướng 2 (Trung gian):</b> Tìm $c$ sao cho $a \parallel c$ và $b \parallel c \implies a \parallel b$.<br/>
      • <b>Hướng 3 (Giao tuyến):</b> Chứng minh $a, b$ là các giao tuyến của các mặt phẳng cắt nhau theo định lí ba giao tuyến.
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. THIẾT DIỆN SONG SONG VỚI MỘT ĐƯỜNG THẲNG",
        "subtitle": "BÀI 11 • MỤC 2 • NGUYÊN TẮC DỰNG ĐƯỜNG GIAO TUYẾN SONG SONG",
        "mascotMode": "explaining",
        "mascotTip": r"Nếu mặt phẳng $(\alpha)$ song song với đường thẳng $d$ thì $(\alpha)$ cắt các mặt chứa $d$ theo các giao tuyến song song với $d$!",
        "narration": "Một dạng toán trọng tâm của Mục 3 là tìm thiết diện của hình chóp cắt bởi mặt phẳng alpha song song với một đường thẳng d cho trước. Nguyên tắc vàng: Khi mặt phẳng alpha cắt một mặt phẳng beta chứa đường thẳng d, thì đoạn giao tuyến thu được bắt buộc phải song song với đường thẳng d. Từ đó, cứ mặt nào chứa d thì ta chỉ cần kẻ đường thẳng song song với d qua các điểm đã biết.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-900/90 p-3.5 rounded-xl border border-cyan-500/40 text-xs">
    <div class="font-bold text-cyan-300 text-sm mb-2 flex items-center gap-2">
      <span>📐</span> <span>Nguyên Tắc Dựng Thiết Diện Song Song Với $d$</span>
    </div>
    <div class="bg-slate-800 p-3 rounded-lg border-l-4 border-cyan-400 space-y-1 text-slate-300">
      <p>• Nếu mặt phẳng $(\alpha) \parallel d$ và $(\alpha)$ cắt mặt phẳng $(\beta) \supset d$ theo giao tuyến $d_x$:</p>
      <div class="p-2 bg-slate-900 rounded font-mono text-center text-cyan-200 font-bold my-1">
        $$d_x \parallel d$$
      </div>
      <p>• <b>Thao tác:</b> Qua điểm chung $M \in (\alpha) \cap (\beta)$, kẻ đường thẳng song song với $d$, cắt các cạnh của $(\beta)$ tại các đỉnh mới của thiết diện.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: THIẾT DIỆN CẮT BỞI MP SONG SONG CẠNH ĐÁY",
        "subtitle": "BÀI 11 • MỤC 3 • HÌNH BÌNH HÀNH VÀ HÌNH THANG 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Mặt phẳng qua điểm $M$ trên $SA$ song song $AB$ và $BC$ sẽ tạo ra thiết diện là hình bình hành!",
        "narration": "Ví dụ 1: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Gọi M là một điểm nằm trên cạnh bên SA. Mặt phẳng alpha đi qua M và song song với cả hai đường thẳng AB và AD. Thiết diện của hình chóp cắt bởi mặt phẳng alpha là hình gì? Phương án A: Tam giác; Phương án B: Hình bình hành; Phương án C: Ngũ giác; Phương án D: Hình thang có hai cạnh bên cắt nhau. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-3">
      <b>Câu 1:</b> Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Mặt phẳng $(\alpha)$ đi qua điểm $M \in SA$ và song song với cả $AB$ và $AD$. Thiết diện của hình chóp cắt bởi $(\alpha)$ là:
    </p>

    <div class="grid grid-cols-4 gap-2 text-xs font-mono text-center">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Tam giác</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>B.</b> Hình bình hành</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> Ngũ giác</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Hình thang</div>
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
        "subtitle": "BÀI 11 • MỤC 3 • TẤT CẢ CÁC CẶP CẠNH ĐỐI DIỆN ĐỀU SONG SONG",
        "mascotMode": "celebrating",
        "mascotTip": r"Mặt phẳng $(\alpha)$ song song với đáy $(ABCD) \implies$ Thiết diện là hình bình hành $MNPQ$ đồng dạng với đáy!",
        "narration": "Hết thời gian. Đáp án đúng là B: Hình bình hành. Trong mặt phẳng SAB, qua M kẻ MN song song AB với N thuộc SB. Trong mặt phẳng SAD, qua M kẻ MQ song song AD với Q thuộc SD. Trong mặt phẳng SBC, qua N kẻ NP song song BC với P thuộc SC. Nối P với Q, ta có PQ song song CD. Do AB song song CD và AD song song BC, nên tứ giác MNPQ có các cặp cạnh đối song song với nhau. Vậy thiết diện thu được chính là hình bình hành MNPQ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Lời giải chi tiết:</div>
    <div class="space-y-1.5 text-slate-300 font-mono">
      <p>• Trong $(SAB)$: Qua $M$ kẻ $MN \parallel AB$ ($N \in SB$).</p>
      <p>• Trong $(SAD)$: Qua $M$ kẻ $MQ \parallel AD$ ($Q \in SD$).</p>
      <p>• Trong $(SBC)$: Qua $N$ kẻ $NP \parallel BC$ ($P \in SC$).</p>
      <p>• Khi đó: $PQ \parallel CD \parallel AB \parallel MN$ và $NP \parallel MQ \parallel AD$.</p>
      <div class="mt-2 text-emerald-300 font-bold font-sans">➔ Thiết diện là <b>hình bình hành $MNPQ$</b> (chọn B).</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. BÀI TOÁN TÍNH CHU VI VÀ DIỆN TÍCH THIẾT DIỆN",
        "subtitle": "BÀI 11 • MỤC 3 • KẾT HỢP ĐẠI SỐ VÀ HÌNH HỌC KHÔNG GIAN",
        "mascotMode": "explaining",
        "mascotTip": r"Dùng tỉ số Ta-lét: Nếu $\frac{SM}{SA} = k$ thì độ dài cạnh thiết diện bằng $k$ lần cạnh đáy!",
        "narration": "Ở mức độ vận dụng cao, đề bài thường yêu cầu tính chu vi hoặc diện tích của thiết diện theo tỉ số vị trí k. Giả sử tỉ số SM chia SA bằng k. Khi đó theo định lí Ta-lét, độ dài các cạnh của thiết diện MNPQ sẽ bằng k lần độ dài các cạnh đáy tương ứng. Chu vi của thiết diện sẽ bằng k lần chu vi đáy, và diện tích của thiết diện sẽ bằng k bình phương lần diện tích đáy. Nhớ công thức đồng dạng này sẽ giúp các em giải quyết các bài toán tối ưu cực trị diện tích thiết diện cực kì nhanh chóng.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-900/90 p-3.5 rounded-xl border border-purple-500/40 text-xs">
    <div class="font-bold text-purple-300 text-sm mb-2 flex items-center gap-2">
      <span>📐</span> <span>Công Thức Tính Nhanh Chu Vi & Diện Tích Thiết Diện Song Song Đáy</span>
    </div>
    <p class="text-slate-300 leading-relaxed">
      Cho hình chóp $S.ABCD$ có đáy diện tích $S_đ$, chu vi $P_đ$. Mặt phẳng $(\alpha) \parallel (ABCD)$ cắt $SA$ tại $M$ với $\frac{SM}{SA} = k$ ($0 < k < 1$):
    </p>
    <div class="grid grid-cols-2 gap-3 mt-2 text-center font-mono">
      <div class="bg-slate-800 p-2.5 rounded border border-emerald-500/30">
        <b class="text-emerald-300">Chu vi thiết diện:</b>
        <div class="text-emerald-200 font-bold text-sm my-1">$$P_{TD} = k \cdot P_đ$$</div>
      </div>
      <div class="bg-slate-800 p-2.5 rounded border border-cyan-500/30">
        <b class="text-cyan-300">Diện tích thiết diện:</b>
        <div class="text-cyan-200 font-bold text-sm my-1">$$S_{TD} = k^2 \cdot S_đ$$</div>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: TÍNH DIỆN TÍCH THIẾT DIỆN QUA TRỌNG TÂM",
        "subtitle": "BÀI 11 • MỤC 3 • VẬN DỤNG CÔNG THỨC $S = K^2 S_0$ TRONG 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Trọng tâm tam giác chia đường trung tuyến theo tỉ lệ 2/3 $\implies k = 2/3 \implies k^2 = 4/9$!",
        "narration": "Ví dụ 2: Cho hình chóp tam giác S.ABC có diện tích đáy ABC bằng 90 cm vuông. Gọi G là trọng tâm của tam giác SAB. Mặt phẳng alpha đi qua G và song song với mặt phẳng đáy ABC, cắt hình chóp theo một thiết diện tam giác. Diện tích của thiết diện tam giác đó bằng bao nhiêu? Phương án A: 40 cm vuông; Phương án B: 30 cm vuông; Phương án C: 45 cm vuông; Phương án D: 60 cm vuông. Các em có 15 giây tính toán.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-3">
      <b>Câu 2:</b> Cho hình chóp $S.ABC$ có diện tích đáy $S_{\triangle ABC} = 90\text{ cm}^2$. Gọi $G$ là trọng tâm $\triangle SAB$. Mặt phẳng $(\alpha)$ qua $G$ và song song với $(ABC)$ cắt hình chóp theo một thiết diện tam giác. Diện tích thiết diện đó là:
    </p>

    <div class="grid grid-cols-4 gap-2 text-xs font-mono text-center">
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>A.</b> $40\text{ cm}^2$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> $30\text{ cm}^2$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> $45\text{ cm}^2$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> $60\text{ cm}^2$</div>
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
        "title": "7. LỜI GIẢI VÍ DỤ 2: ĐÁP ÁN A: $40\\text{ CM}^2$",
        "subtitle": "BÀI 11 • MỤC 3 • TÍNH TOÁN NHANH CHUẨN XÁC ZERO ERROR",
        "mascotMode": "celebrating",
        "mascotTip": r"$k = 2/3 \implies S_{TD} = (2/3)^2 \cdot 90 = \frac{4}{9} \cdot 90 = 40\text{ cm}^2$!",
        "narration": "Hết thời gian. Đáp án đúng là A: 40 cm vuông. Gọi I là trung điểm của AB. Vì G là trọng tâm của tam giác SAB nên theo tính chất trọng tâm, ta có tỉ số SG chia SI bằng 2 phần 3. Mặt phẳng alpha qua G song song với đáy ABC nên nó cắt các cạnh SA, SB, SC theo tỉ số đồng dạng k bằng 2 phần 3. Thiết diện thu được là một tam giác đồng dạng với tam giác đáy ABC với tỉ số đồng dạng k bằng 2 phần 3. Tỉ số diện tích bằng k bình phương, tức là 4 phần 9. Lấy 4 phần 9 nhân với 90, ta được diện tích thiết diện bằng đúng 40 cm vuông.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40 text-xs">
    <div class="text-xs font-bold text-cyan-300 uppercase mb-2">Lời giải chi tiết:</div>
    <div class="space-y-1.5 text-slate-300 font-mono">
      <p>• Gọi $I$ là trung điểm $AB \implies \frac{SG}{SI} = \frac{2}{3}$ (tính chất trọng tâm).</p>
      <p>• Mặt phẳng $(\alpha) \parallel (ABC) \implies$ Thiết diện là tam giác đồng dạng với $\triangle ABC$ với tỉ số $k = \frac{2}{3}$.</p>
      <p>• Tỉ số diện tích: $\frac{S_{TD}}{S_{\triangle ABC}} = k^2 = \left(\frac{2}{3}\right)^2 = \frac{4}{9}$.</p>
      <div class="p-2 bg-slate-900 rounded text-center text-emerald-300 font-bold my-1">
        $$S_{TD} = \frac{4}{9} \cdot 90 = 40\text{ (cm}^2\text{)}$$
      </div>
      <div class="mt-2 text-emerald-300 font-bold font-sans">➔ Chọn đáp án A: $40\text{ cm}^2$.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. KỸ NĂNG CHỨNG MINH 3 ĐƯỜNG THẲNG ĐỒNG QUY",
        "subtitle": "BÀI 11 • MỤC 3 • VẬN DỤNG ĐỊNH LÍ BA GIAO TUYẾN NGƯỢC",
        "mascotMode": "explaining",
        "mascotTip": r"Chứng minh $a, b, c$ là 3 giao tuyến của 3 mặt phẳng. Vì $a$ cắt $b$ nên $a, b, c$ phải ĐỒNG QUY!",
        "narration": "Định lí ba giao tuyến cho ta một phương pháp cực kì thanh thoát để chứng minh ba đường thẳng đồng quy trong không gian. Muốn chứng minh ba đường thẳng a, b, c đồng quy: Bước 1: Chứng minh a, b, c lần lượt là ba giao tuyến của ba mặt phẳng đôi một cắt nhau. Bước 2: Chỉ ra rằng hai đường thẳng a và b cắt nhau tại một điểm S. Bước 3: Theo định lí ba giao tuyến, vì chúng không thể đôi một song song nên ba đường thẳng đó bắt buộc phải đồng quy tại điểm S.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-indigo-900/60 to-purple-900/40 p-4 rounded-xl border border-indigo-500/30 text-xs">
    <div class="font-bold text-indigo-300 text-sm mb-2 flex items-center gap-2">
      <span>🎯</span> <span>Thuật Toán Chứng Minh 3 Đường Thẳng Đồng Quy</span>
    </div>
    <div class="bg-slate-800 p-3 rounded-lg border-l-4 border-indigo-400 space-y-1.5 text-slate-300">
      <p><b>Bước 1:</b> Tìm 3 mặt phẳng $(\alpha), (\beta), (\gamma)$ sao cho:</p>
      <p class="font-mono text-cyan-200">$(\alpha) \cap (\beta) = a$, $(\beta) \cap (\gamma) = b$, $(\gamma) \cap (\alpha) = c$.</p>
      <p><b>Bước 2:</b> Chỉ ra rằng $a$ và $b$ cắt nhau tại điểm $O$: $a \cap b = \{O\}$.</p>
      <p><b>Bước 3:</b> Áp dụng định lí ba giao tuyến $\implies$ Đường thẳng thứ ba $c$ cũng phải đi qua $O$.</p>
      <p class="text-emerald-300 font-bold">➔ Kết luận: Ba đường thẳng $a, b, c$ đồng quy tại $O$.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: CHỨNG MINH 3 ĐƯỜNG THẲNG ĐỒNG QUY",
        "subtitle": "BÀI 11 • MỤC 3 • BÀI TOÁN HÌNH CHÓP ĐÁY HÌNH THANG 30 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Ba đường thẳng là $AD, BC$ và $SE$. Chúng là giao tuyến của 3 mặt phẳng nào?",
        "narration": "Ví dụ 3: Cho hình chóp S.ABCD có đáy ABCD là hình thang với hai cạnh bên AD và BC cắt nhau tại điểm E. Gọi alpha là mặt phẳng đi qua đỉnh S và hai điểm M thuộc SA, N thuộc SB sao cho MN cắt AB tại K. Chứng minh rằng ba đường thẳng SK, AD và BC đồng quy. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng cao</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB \parallel CD$, $AD$ cắt $BC$ tại $E$).
    </p>

    <div class="bg-slate-900 p-2.5 rounded text-xs text-slate-300 space-y-1">
      <p>• Ba mặt phẳng: $(SAD)$, $(SBC)$ và $(ABCD)$.</p>
      <p>• Hãy chỉ ra 3 giao tuyến của từng cặp mặt phẳng trên.</p>
    </div>

    <p class="text-xs text-indigo-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Dùng định lí ba giao tuyến chứng minh $SE, AD, BC$ đồng quy tại $E$.
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
        "title": "10. LỜI GIẢI VÍ DỤ 3: BA GIAO TUYẾN ĐỒNG QUY TẠI $E$",
        "subtitle": "BÀI 11 • MỤC 3 • VẬN DỤNG ĐỊNH LÍ BA GIAO TUYẾN ĐỈNH CAO",
        "mascotMode": "celebrating",
        "mascotTip": r"$(SAD) \cap (SBC) = SE$; $(SAD) \cap (ABCD) = AD$; $(SBC) \cap (ABCD) = BC \implies$ Đồng quy tại $E$!",
        "narration": "Đã hết thời gian. Lời giải cực kì sắc bén: Xét ba mặt phẳng phân biệt: mặt phẳng SAD, mặt phẳng SBC và mặt phẳng đáy ABCD. Giao tuyến của SAD và ABCD là đường thẳng AD. Giao tuyến của SBC và ABCD là đường thẳng BC. Giao tuyến của SAD và SBC là đường thẳng SE. Theo giả thiết, trong mặt phẳng đáy, AD và BC cắt nhau tại điểm E. Theo định lí ba giao tuyến, vì hai giao tuyến AD và BC cắt nhau tại E, nên giao tuyến thứ ba là đường thẳng SE cũng bắt buộc phải đi qua điểm E. Vậy ba đường thẳng SE, AD và BC đồng quy tại điểm E.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40 text-xs">
    <div class="text-xs font-bold text-indigo-300 uppercase mb-2">Lời giải chi tiết:</div>
    <div class="space-y-1.5 text-slate-300 font-mono">
      <p>• Xét ba mặt phẳng: $(SAD)$, $(SBC)$ và $(ABCD)$.</p>
      <p>  - $(SAD) \cap (ABCD) = AD$.</p>
      <p>  - $(SBC) \cap (ABCD) = BC$.</p>
      <p>  - $(SAD) \cap (SBC) = SE$.</p>
      <p>• Do $AD$ và $BC$ cắt nhau tại $E$ trong mặt phẳng đáy.</p>
      <p>• Theo định lí ba giao tuyến: Ba giao tuyến $AD, BC, SE$ không thể song song $\implies$ <b>phải đồng quy tại $E$</b>.</p>
      <div class="mt-2 text-emerald-300 font-bold font-sans">➔ Kết luận: Ba đường thẳng $AD, BC, SE$ đồng quy tại $E$.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: ĐỀ TỔNG ÔN TRẮC NGHIỆM ĐÚNG/SAI BÀI 11",
        "subtitle": "BÀI 11 • MỤC 3 • TỔNG ÔN TOÀN DIỆN HAI ĐƯỜNG THẲNG SONG SONG",
        "mascotMode": "thinking",
        "mascotTip": r"Thẩm định từng mệnh đề cẩn thận, chú ý từ khóa 'duy nhất' và 'chéo nhau'!",
        "narration": "Ví dụ 4 là câu hỏi Trắc nghiệm Đúng/Sai 4 ý chuẩn cấu trúc đề thi của Bộ GD&ĐT. Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Gọi I, J lần lượt là trung điểm của SA và SC. Xét tính Đúng hoặc Sai của 4 khẳng định sau: Ý a: Đường thẳng IJ song song với đường thẳng AC; Ý b: Đường thẳng IJ chéo nhau với đường thẳng BD; Ý c: Giao tuyến của hai mặt phẳng SAB và SCD cắt đường thẳng IJ; Ý d: Độ dài đoạn IJ bằng một nửa độ dài đoạn AC. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Ví dụ 4 (Đúng/Sai - 30s)</span>
      <span class="text-xs text-slate-400">Chuẩn Bộ GD&ĐT</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Cho hình chóp $S.ABCD$ có đáy là hình bình hành. $I, J$ là trung điểm của $SA, SC$. Xét tính Đúng/Sai:
    </p>

    <div class="space-y-1 text-xs text-slate-200">
      <p><b>a)</b> Đường thẳng $IJ$ song song với đường thẳng $AC$.</p>
      <p><b>b)</b> Hai đường thẳng $IJ$ và $BD$ chéo nhau.</p>
      <p><b>c)</b> Giao tuyến của $(SAB)$ và $(SCD)$ cắt đường thẳng $IJ$.</p>
      <p><b>d)</b> Độ dài đoạn thẳng $IJ = \frac{1}{2}AC$.</p>
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
        "title": "12. LỜI GIẢI VÍ DỤ 4 & BẾ MẠC TOÀN KHÓA BÀI 11",
        "subtitle": "BÀI 11 • MỤC 3 • KẾT QUẢ: a-ĐÚNG, b-ĐÚNG, c-SAI, d-ĐÚNG",
        "mascotMode": "celebrating",
        "mascotTip": r"Chúc mừng các em đã làm chủ trọn vẹn Bài 11: Hai đường thẳng song song trong không gian!",
        "narration": "Chúc mừng các em. Thầy cùng các em thẩm định: Mệnh đề a: Trong tam giác SAC, I là trung điểm SA, J là trung điểm SC nên IJ là đường trung bình, suy ra IJ song song AC. Đúng. Mệnh đề b: IJ nằm trong mặt phẳng SAC chứa AC; BD nằm trong đáy và AC cắt BD tại O. Điểm O không thuộc IJ nên IJ và BD không đồng phẳng, do đó IJ và BD chéo nhau. Đúng. Mệnh đề c: Giao tuyến của SAB và SCD là đường thẳng d qua S và song song với AB. Đường thẳng IJ song song với AC mà AC cắt AB, nên IJ và d là hai đường thẳng chéo nhau, không thể cắt nhau. Mệnh đề c Sai. Mệnh đề d: IJ là đường trung bình nên độ dài IJ bằng một nửa AC. Đúng. Như vậy chúng ta đã hoàn thành xuất sắc toàn bộ Bài 11.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="space-y-1.5 text-slate-300">
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>a)</b> $IJ$ là đường trung bình $\triangle SAC \implies IJ \parallel AC$.</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>b)</b> $IJ \subset (SAC), BD \subset (ABCD)$, không đồng phẳng $\implies IJ, BD$ chéo nhau.</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>c)</b> Giao tuyến $d \parallel AB$, mà $IJ \parallel AC$ (cắt $AB$) $\implies d$ và $IJ$ chéo nhau.</span>
        <span class="px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold rounded">SAI</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>d)</b> $IJ = \frac{1}{2}AC$ theo tính chất đường trung bình.</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
    </div>

    <div class="mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30 text-xs">
      <div class="font-bold text-emerald-200 mb-1 flex items-center gap-1.5">
        <span>🎉</span> <span>HOÀN THÀNH XUẤT SẮC TOÀN BỘ BÀI 11!</span>
      </div>
      <p class="text-slate-300">
        Các em đã thành thạo toàn bộ: Vị trí tương đối, định lí ba giao tuyến, kỹ thuật chứng minh song song và tính toán thiết diện!
      </p>
    </div>
  </div>
</div>
"""
    }
]

print("ch4_bai11_data.py initialized: BAI11_MUC1_SCENES, BAI11_MUC2_SCENES, BAI11_MUC3_SCENES ready.")
