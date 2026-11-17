# -*- coding: utf-8 -*-
"""
CHƯƠNG IV: QUAN HỆ SONG SONG TRONG KHÔNG GIAN
BÀI 13: HAI MẶT PHẲNG SONG SONG - TOÁN 11 KNTT
Mục 1, Mục 2, Mục 3 - Đầy đủ 36 Scenes (12 scenes/mục)
Mỗi mục có 4 ví dụ minh họa kèm đồng hồ đếm ngược 15s/30s
Giọng đọc Thầy Nam Minh (vi-VN-NamMinhNeural) chuẩn sư phạm Bộ GD&ĐT
"""

# ==============================================================================
# MỤC 1: ĐỊNH NGHĨA HAI MẶT PHẲNG SONG SONG & ĐIỀU KIỆN ĐỂ HAI MẶT PHẲNG SONG SONG
# ==============================================================================
BAI13_MUC1_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. ĐỊNH NGHĨA HAI MẶT PHẲNG SONG SONG",
        "subtitle": "BÀI 13 • MỤC 1 • VỊ TRÍ TƯƠNG ĐỐI CỦA HAI MẶT PHẲNG",
        "mascotMode": "pointer",
        "mascotTip": r"Hai mặt phẳng song song nếu chúng không có bất kì điểm chung nào: $(P) \parallel (Q) \iff (P) \cap (Q) = \emptyset$!",
        "narration": "Chào mừng các em đến với Bài 13: Hai mặt phẳng song song trong Chương 4 Toán 11 Kết Nối Tri Thức. Trong không gian, hai mặt phẳng phân biệt có thể cắt nhau theo một đường giao tuyến duy nhất, hoặc không có bất kì điểm chung nào. Ta định nghĩa: Hai mặt phẳng được gọi là song song với nhau nếu chúng không có điểm chung. Khi đó ta ký hiệu mặt phẳng P song song với mặt phẳng Q.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-950 to-teal-900/60 p-4 rounded-xl border border-emerald-500/40">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider">Định nghĩa cơ bản</span>
      <h3 class="text-xl font-black text-emerald-200">Hai Mặt Phẳng Song Song</h3>
    </div>
    <p class="text-sm text-slate-200 leading-relaxed">
      • Hai mặt phẳng được gọi là <b>song song</b> với nhau nếu chúng không có điểm chung nào.<br/>
      • Kí hiệu: $(P) \parallel (Q) \iff (P) \cap (Q) = \emptyset$.
    </p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md">
      <h4 class="font-bold text-emerald-300 text-sm mb-1">📍 Vị trí tương đối của hai mặt phẳng</h4>
      <p class="text-slate-300 leading-relaxed">
        1. <b>Cắt nhau:</b> $(P) \cap (Q) = d$ (giao tuyến chung).<br/>
        2. <b>Song song:</b> $(P) \cap (Q) = \emptyset$.<br/>
        3. <b>Trùng nhau:</b> $(P) \equiv (Q)$.
      </p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-amber-400 shadow-md">
      <h4 class="font-bold text-amber-300 text-sm mb-1">💡 Hình ảnh thực tế</h4>
      <p class="text-slate-300 leading-relaxed">
        • Mặt sàn và trần nhà của phòng học.<br/>
        • Hai mặt đối diện của cuốn sách khi gấp lại.<br/>
        • Hai mặt đối diện của thùng carton, viên gạch.
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. ĐỊNH LÍ 1: ĐIỀU KIỆN ĐỂ HAI MẶT PHẲNG SONG SONG",
        "subtitle": "BÀI 13 • MỤC 1 • ĐỊNH LÍ TRỌNG TÂM CẦN GHI NHỚ",
        "mascotMode": "explaining",
        "mascotTip": r"Bắt buộc phải là hai đường thẳng CẮT NHAU cùng song song với mặt phẳng kia!",
        "narration": "Làm thế nào để chứng minh hai mặt phẳng song song? Ta sử dụng Định lí 1: Nếu mặt phẳng P chứa hai đường thẳng cắt nhau a và b, và hai đường thẳng này cùng song song với mặt phẳng Q, thì mặt phẳng P song song với mặt phẳng Q. Chú ý từ khóa cốt lõi: hai đường thẳng a và b phải cắt nhau. Nếu a và b song song với nhau thì hai mặt phẳng vẫn có thể cắt nhau.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-950 to-indigo-900/60 p-4 rounded-xl border border-blue-500/40">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-lg uppercase tracking-wider">Định lí 1 (Điều kiện đủ)</span>
      <h3 class="text-xl font-black text-blue-200">Dấu Hiệu Nhận Biết $(P) \parallel (Q)$</h3>
    </div>
    <div class="p-3 bg-slate-900/90 rounded-lg border border-blue-400/30 font-serif text-sm text-amber-300">
      $$\begin{cases} a \subset (P), \ b \subset (P) \\ a \cap b = \{I\} \\ a \parallel (Q), \ b \parallel (Q) \end{cases} \implies (P) \parallel (Q)$$
    </div>
  </div>

  <div class="bg-rose-950/40 p-3 rounded-xl border border-rose-500/30 text-xs text-rose-200">
    <b class="text-rose-400 uppercase tracking-wide">⚠️ Cảnh báo bẫy thi thường gặp:</b><br/>
    Nếu mặt phẳng $(P)$ chứa hai đường thẳng $a, b$ cùng song song với $(Q)$ nhưng $a \parallel b$, thì $(P)$ có thể vẫn cắt $(Q)$ theo một giao tuyến song song với $a$ và $b$! Do đó, giả thiết $a \cap b = \{I\}$ là <b>bắt buộc</b>.
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: NHẬN BIẾT ĐIỀU KIỆN HAI MẶT PHẲNG SONG SONG",
        "subtitle": "BÀI 13 • MỤC 1 • CÂU HỎI TRẮC NGHIỆM ĐỊNH TÍNH 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Hãy đọc thật kỹ điều kiện cắt nhau của 2 đường thẳng!",
        "narration": "Mời các em làm Ví dụ 1: Trong các mệnh đề sau, mệnh đề nào sau đây là đúng? Mệnh đề A: Nếu hai mặt phẳng cùng song song với một đường thẳng thì chúng song song với nhau. Mệnh đề B: Nếu mặt phẳng P chứa hai đường thẳng phân biệt cùng song song với mặt phẳng Q thì P song song với Q. Mệnh đề C: Nếu mặt phẳng P chứa hai đường thẳng cắt nhau cùng song song với mặt phẳng Q thì P song song với Q. Mệnh đề D: Hai mặt phẳng không cắt nhau thì trùng nhau. Các em có 15 giây chọn đáp án.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Nhận biết</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-3">
      <b>Câu hỏi:</b> Cho hai mặt phẳng phân biệt $(P)$ và $(Q)$. Khẳng định nào sau đây là <b>đúng</b>?
    </p>

    <div class="space-y-1.5 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Nếu $(P)$ và $(Q)$ cùng song song với một đường thẳng $d$ thì $(P) \parallel (Q)$.</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> Nếu $(P)$ chứa hai đường thẳng phân biệt cùng song song với $(Q)$ thì $(P) \parallel (Q)$.</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>C.</b> Nếu $(P)$ chứa hai đường thẳng cắt nhau cùng song song với $(Q)$ thì $(P) \parallel (Q)$.</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Nếu hai mặt phẳng không cắt nhau thì chúng trùng nhau.</div>
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
        "subtitle": "BÀI 13 • MỤC 1 • GIẢI MÃ BẪY THI ĐỊNH LÍ 1",
        "mascotMode": "celebrating",
        "mascotTip": r"Phương án B thiếu điều kiện 'cắt nhau' nên hoàn toàn có thể sai!",
        "narration": "Hết thời gian. Đáp án chính xác là C. Tại sao phương án A sai? Vì hai mái nhà cùng song song với cây đòn dông nhưng chúng cắt nhau tại cây đòn dông đó. Tại sao B sai? Vì hai đường thẳng phân biệt có thể song song với nhau, khi đó P và Q vẫn có thể cắt nhau theo giao tuyến song song với chúng. Do đó, chỉ có C là đúng chuẩn theo Định lí 1.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Lời giải chi tiết Ví dụ 1:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• <b>Phương án A sai:</b> Hai mặt phẳng cắt nhau vẫn có thể cùng song song với đường thẳng $d$ (giao tuyến của chúng song song với $d$).</p>
      <p>• <b>Phương án B sai:</b> Nếu hai đường thẳng phân biệt đó song song với nhau thì $(P)$ vẫn có thể cắt $(Q)$.</p>
      <p>• <b>Phương án C đúng:</b> Đây chính là phát biểu chuẩn xác $100\%$ của Định lí 1 SGK KNTT.</p>
      <p>• <b>Phương án D sai:</b> Hai mặt phẳng không cắt nhau thì chúng song song với nhau (vì đề bài cho phân biệt).</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án C.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. TÍNH CHẤT 1: SỰ DUY NHẤT CỦA MẶT PHẲNG SONG SONG",
        "subtitle": "BÀI 13 • MỤC 1 • TIÊN ĐỀ Ơ-CLÍT TRONG KHÔNG GIAN",
        "mascotMode": "explaining",
        "mascotTip": r"Qua điểm $M \notin (P)$, chỉ có DUY NHẤT 1 mặt phẳng song song với $(P)$!",
        "narration": "Chúng ta tìm hiểu tiếp Tính chất 1. Qua một điểm nằm ngoài một mặt phẳng cho trước, có một và chỉ một mặt phẳng song song với mặt phẳng đã cho. Tính chất này tương tự như tiên đề Ơ clít trong hình học phẳng. Từ tính chất này dẫn đến hệ quả rất hữu ích: Nếu đường thẳng d song song với mặt phẳng P thì qua d có duy nhất một mặt phẳng song song với P nếu d không thuộc P.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-950 to-slate-900 p-4 rounded-xl border border-purple-500/40 text-xs">
    <div class="font-bold text-purple-300 text-sm mb-2">Tính Chất 1 (Sự tồn tại và duy nhất)</div>
    <p class="text-slate-200 leading-relaxed text-sm">
      Qua một điểm $M$ ở ngoài một mặt phẳng $(\alpha)$, có <b>một và chỉ một</b> mặt phẳng $(\beta)$ song song với mặt phẳng $(\alpha)$.
    </p>
    
    <div class="mt-3 grid grid-cols-2 gap-2 text-xs">
      <div class="p-2.5 bg-slate-900 rounded border border-purple-400/30">
        <b class="text-purple-300">Hệ quả 1:</b><br/>
        Nếu $d \parallel (\alpha)$ thì qua $d$ có duy nhất một mặt phẳng $(\beta) \parallel (\alpha)$.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border border-purple-400/30">
        <b class="text-purple-300">Hệ quả 2:</b><br/>
        Hai mặt phẳng phân biệt cùng song song với mặt phẳng thứ ba thì song song với nhau: $(\alpha) \parallel (\gamma) \land (\beta) \parallel (\gamma) \implies (\alpha) \parallel (\beta)$.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: CHỨNG MINH HAI MẶT PHẲNG SONG SONG TRONG HÌNH CHÓP",
        "subtitle": "BÀI 13 • MỤC 1 • BÀI TOÁN ÁP DỤNG TRỌNG TÂM 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Hãy tìm 2 đường thẳng trung bình cắt nhau cùng song song mặt phẳng đối diện!",
        "narration": "Ví dụ 2: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O. Gọi M, N lần lượt là trung điểm của SA và SB. Mặt phẳng OMN song song với mặt phẳng nào sau đây? Phương án A: Mặt phẳng SBC; Phương án B: Mặt phẳng SCD; Phương án C: Mặt phẳng SAB; Phương án D: Mặt phẳng SAD. Các em có 15 giây xác định đáp án.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M, N$ lần lượt là trung điểm của $SA, SB$. Mặt phẳng $(OMN)$ song song với mặt phẳng nào?
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> $(SBC)$</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>B.</b> $(SCD)$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> $(SAB)$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> $(SAD)$</div>
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
        "title": "7. LỜI GIẢI VÍ DỤ 2: $(OMN) \parallel (SCD)$",
        "subtitle": "BÀI 13 • MỤC 1 • KỸ THUẬT DÙNG ĐƯỜNG TRUNG BÌNH",
        "mascotMode": "celebrating",
        "mascotTip": r"$MN \parallel CD$ và $OM \parallel SC \implies (OMN) \parallel (SCD)$!",
        "narration": "Hết thời gian. Đáp án chính xác là B: Mặt phẳng OMN song song với mặt phẳng SCD. Chứng minh rất đơn giản: Trong tam giác SAB, MN là đường trung bình nên MN song song AB. Do ABCD là hình bình hành nên AB song song CD. Suy ra MN song song CD, mà CD nằm trong SCD nên MN song song SCD. Mặt khác, trong tam giác SAC, O là trung điểm AC, M là trung điểm SA nên OM là đường trung bình, suy ra OM song song SC. Do đó OM song song SCD. Hai đường cắt nhau MN và OM cùng song song với SCD nên mặt phẳng OMN song song SCD.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Chứng minh hình học chuẩn mực:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>1. Trong $\triangle SAB$: $MN$ là đường trung bình $\implies MN \parallel AB$. Lại có $AB \parallel CD \implies MN \parallel CD \subset (SCD) \implies MN \parallel (SCD)$.</p>
      <p>2. Trong $\triangle SAC$: $O$ là trung điểm $AC$, $M$ là trung điểm $SA \implies OM$ là đường trung bình $\implies OM \parallel SC \subset (SCD) \implies OM \parallel (SCD)$.</p>
      <p>3. Vì $MN \cap OM = \{M\}$ trong $(OMN)$ nên theo Định lí 1: $(OMN) \parallel (SCD)$.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án B.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. QUY TRÌNH 3 BƯỚC CHỨNG MINH $(P) \parallel (Q)$",
        "subtitle": "BÀI 13 • MỤC 1 • CẨM NANG PHƯƠNG PHÁP TƯ DUY",
        "mascotMode": "pointer",
        "mascotTip": r"Luôn chọn mặt phẳng có sẵn 2 đường trung bình hoặc 2 đường thẳng song song cạnh đáy!",
        "narration": "Để giải quyết nhanh các bài toán chứng minh hai mặt phẳng song song, các em hãy ghi nhớ quy trình 3 bước chuẩn mực sau: Bước 1: Chọn trong mặt phẳng P hai đường thẳng a và b cắt nhau. Thông thường đó là các đường trung bình trong tam giác, hoặc các cạnh đáy hình bình hành. Bước 2: Chứng minh đường thẳng a song song với mặt phẳng Q và đường thẳng b song song với mặt phẳng Q. Bước 3: Kết luận mặt phẳng P song song với mặt phẳng Q theo Định lí 1.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-900/60 to-indigo-950 p-4 rounded-xl border border-blue-500/40 text-xs">
    <div class="font-bold text-blue-300 text-sm mb-2">Quy Trình 3 Bước Chứng Minh $(P) \parallel (Q)$ Chuẩn Mực</div>
    <div class="space-y-2">
      <div class="p-2.5 bg-slate-900/90 rounded border-l-4 border-emerald-400">
        <b class="text-emerald-300">Bước 1: Tìm 2 đường thẳng cắt nhau trong $(P)$</b>
        <p class="text-slate-300 mt-0.5">Xác định $a, b \subset (P)$ sao cho $a \cap b = \{I\}$. Thường ưu tiên các đường trung bình hoặc đường song song với các cạnh đã biết.</p>
      </div>
      <div class="p-2.5 bg-slate-900/90 rounded border-l-4 border-amber-400">
        <b class="text-amber-300">Bước 2: Chứng minh $a \parallel (Q)$ và $b \parallel (Q)$</b>
        <p class="text-slate-300 mt-0.5">Chỉ ra $a \parallel a' \subset (Q)$ và $b \parallel b' \subset (Q)$.</p>
      </div>
      <div class="p-2.5 bg-slate-900/90 rounded border-l-4 border-cyan-400">
        <b class="text-cyan-300">Bước 3: Kết luận theo Định lí 1</b>
        <p class="text-slate-300 mt-0.5">Vì $a, b \subset (P), a \cap b = \{I\}$ và $a, b \parallel (Q) \implies (P) \parallel (Q)$.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: TÌM MẶT PHẲNG SONG SONG TRONG TỨ DIỆN",
        "subtitle": "BÀI 13 • MỤC 1 • BÀI TOÁN VẬN DỤNG VỚI TRỌNG TÂM TAM GIÁC 30S",
        "mascotMode": "thinking",
        "mascotTip": r"Nhớ tính chất trọng tâm: tỉ số $\frac{2}{3}$ tạo nên các đường song song Ta-lét!",
        "narration": "Ví dụ 3: Cho tứ diện ABCD. Gọi G1, G2, G3 lần lượt là trọng tâm của các tam giác ABC, ACD, ADB. Hỏi mặt phẳng G1 G2 G3 song song với mặt phẳng nào sau đây? Phương án A: Mặt phẳng BCD; Phương án B: Mặt phẳng ABC; Phương án C: Mặt phẳng ACD; Phương án D: Mặt phẳng ABD. Các em có 30 giây lập luận.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho tứ diện $ABCD$. Gọi $G_1, G_2, G_3$ lần lượt là trọng tâm của các tam giác $ABC, ACD, ADB$. Khẳng định nào sau đây là <b>đúng</b>?
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>A.</b> $(G_1G_2G_3) \parallel (BCD)$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> $(G_1G_2G_3) \parallel (ABC)$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> $(G_1G_2G_3) \parallel (ACD)$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> $(G_1G_2G_3) \parallel (ABD)$</div>
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
        "title": "10. LỜI GIẢI VÍ DỤ 3: $(G_1G_2G_3) \parallel (BCD)$",
        "subtitle": "BÀI 13 • MỤC 1 • ÁP DỤNG ĐỊNH LÍ TA-LÉT ĐẢO",
        "mascotMode": "celebrating",
        "mascotTip": r"$\frac{AG_1}{AM} = \frac{AG_2}{AN} = \frac{AG_3}{AP} = \frac{2}{3} \implies (G_1G_2G_3) \parallel (MNP) \equiv (BCD)$!",
        "narration": "Hết thời gian. Đáp án đúng là A: Mặt phẳng G1 G2 G3 song song với mặt phẳng BCD. Lời giải: Gọi M, N, P lần lượt là trung điểm của BC, CD, DB. Khi đó AM, AN, AP lần lượt là các đường trung tuyến. Do tính chất trọng tâm tam giác, ta có tỉ số AG1 trên AM bằng AG2 trên AN bằng AG3 trên AP và cùng bằng hai phần ba. Theo định lí Ta-lét đảo trong tam giác AMN, G1 G2 song song với MN, mà MN nằm trong BCD nên G1 G2 song song BCD. Tương tự, G2 G3 song song NP nằm trong BCD. Do đó mặt phẳng G1 G2 G3 song song mặt phẳng BCD.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Chứng minh hình học chi tiết:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• Gọi $M, N, P$ lần lượt là trung điểm của $BC, CD, DB$.</p>
      <p>• Do $G_1, G_2, G_3$ là trọng tâm nên: $\frac{AG_1}{AM} = \frac{AG_2}{AN} = \frac{AG_3}{AP} = \frac{2}{3}$.</p>
      <p>• Trong $\triangle AMN$: $\frac{AG_1}{AM} = \frac{AG_2}{AN} \implies G_1G_2 \parallel MN \subset (BCD) \implies G_1G_2 \parallel (BCD)$.</p>
      <p>• Trong $\triangle ANP$: $\frac{AG_2}{AN} = \frac{AG_3}{AP} \implies G_2G_3 \parallel NP \subset (BCD) \implies G_2G_3 \parallel (BCD)$.</p>
      <p>• Vì $G_1G_2 \cap G_2G_3 = \{G_2\}$ nên $(G_1G_2G_3) \parallel (BCD)$.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án A.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI CHUẨN BỘ GD&ĐT 2025",
        "subtitle": "BÀI 13 • MỤC 1 • 4 MỆNH ĐỀ TOÀN DIỆN 30 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Xét kỹ từng mệnh đề và cẩn thận với trường hợp trùng hoặc chéo nhau!",
        "narration": "Ví dụ 4: Cho hình hộp ABCD.A'B'C'D'. Xét tính Đúng hay Sai của các mệnh đề sau: Mệnh đề a: Mặt phẳng A B' D' song song với mặt phẳng B D C'. Mệnh đề b: Mặt phẳng A B C D song song với mặt phẳng A' B' C' D'. Mệnh đề c: Đường thẳng A C' song song với mặt phẳng B D C'. Mệnh đề d: Giao tuyến của mặt phẳng A C C' A' với hai đáy là hai đường thẳng chéo nhau. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Ví dụ 4 (Đúng / Sai)</span>
      <span class="text-xs text-slate-400">Định dạng thi 2025</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho hình hộp $ABCD.A'B'C'D'$. Xét tính Đúng / Sai của các khẳng định sau:
    </p>

    <div class="space-y-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>a)</b> Mặt phẳng $(AB'D') \parallel (BDC')$.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>b)</b> Mặt phẳng $(ABCD) \parallel (A'B'C'D')$.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>c)</b> Đường thẳng $AC' \parallel (BDC')$.</span>
        <span class="font-bold text-rose-400">[ SAI ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>d)</b> Giao tuyến của $(ACC'A')$ với hai đáy là hai đường thẳng chéo nhau.</span>
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
        "subtitle": "BÀI 13 • MỤC 1 • HOÀN TẤT KIẾN THỨC NỀN TẢNG",
        "mascotMode": "celebrating",
        "mascotTip": r"Ghi nhớ: 2 đáy hình hộp luôn song song, và $(AB'D') \parallel (BDC')$ là cặp mặt phẳng kinh điển!",
        "narration": "Chúc mừng các em đã hoàn thành Mục 1. Giải thích chi tiết Ví dụ 4: Mệnh đề a ĐÚNG vì B D song song B' D' và B C' song song A D', hai cặp đường cắt nhau này làm hai mặt phẳng song song. Mệnh đề b ĐÚNG vì hai đáy của hình hộp luôn song song. Mệnh đề c SAI vì điểm C' thuộc cả hai đối tượng nên A C' cắt mặt phẳng B D C' tại C'. Mệnh đề d SAI vì hai giao tuyến là A C và A' C' cùng nằm trong mặt phẳng chéo A C C' A' và song song với nhau chứ không chéo nhau.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Đáp án phân tích chi tiết:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• <b>a) ĐÚNG:</b> $BD \parallel B'D'$ và $BC' \parallel AD' \implies (AB'D') \parallel (BDC')$.</p>
      <p>• <b>b) ĐÚNG:</b> Hai mặt đáy của hình hộp luôn song song theo định nghĩa.</p>
      <p>• <b>c) SAI:</b> Vì $C' \in (BDC')$ nên $AC' \cap (BDC') = \{C'\}$ (cắt nhau, không thể song song).</p>
      <p>• <b>d) SAI:</b> Hai giao tuyến là $AC$ và $A'C'$ song song với nhau trong mặt chéo $(ACC'A')$.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">⭐ TỔNG KẾT MỤC 1: Nắm chắc $(P) \parallel (Q) \iff$ chứa 2 đường cắt nhau cùng song song mặt phẳng kia!</div>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 2: TÍNH CHẤT CỦA HAI MẶT PHẲNG SONG SONG & ĐỊNH LÍ TA-LÉT TRONG KHÔNG GIAN
# ==============================================================================
BAI13_MUC2_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. ĐỊNH LÍ 2: ĐỊNH LÍ GIAO TUYẾN SONG SONG",
        "subtitle": "BÀI 13 • MỤC 2 • MẶT PHẲNG CẮT HAI MẶT PHẲNG SONG SONG",
        "mascotMode": "pointer",
        "mascotTip": r"Nếu $(P) \parallel (Q)$ và $(R)$ cắt cả hai thì hai giao tuyến $a, b$ bắt buộc phải song song: $a \parallel b$!",
        "narration": "Chào mừng các em đến với Mục 2: Tính chất của hai mặt phẳng song song và Định lí Ta-lét trong không gian. Định lí 2 phát biểu: Cho hai mặt phẳng song song. Nếu một mặt phẳng thứ ba cắt cả hai mặt phẳng đã cho thì hai giao tuyến tạo thành bắt buộc phải song song với nhau. Đây là công cụ cực kì mạnh mẽ để xác định giao tuyến song song trong các bài toán thiết diện.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-cyan-950 to-blue-900/60 p-4 rounded-xl border border-cyan-500/40">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 font-bold text-xs rounded-lg uppercase tracking-wider">Định lí 2</span>
      <h3 class="text-xl font-black text-cyan-200">Định Lí Giao Tuyến Song Song</h3>
    </div>
    <div class="p-3 bg-slate-900/90 rounded-lg border border-cyan-400/30 font-serif text-sm text-amber-300">
      $$\begin{cases} (P) \parallel (Q) \\ (R) \cap (P) = a \\ (R) \cap (Q) = b \end{cases} \implies a \parallel b$$
    </div>
  </div>

  <div class="p-3 bg-slate-800/80 rounded-xl border-l-4 border-emerald-400 text-xs text-slate-300">
    <b class="text-emerald-300 text-sm">Hệ quả: Các đoạn thẳng song song chắn giữa</b><br/>
    Hai mặt phẳng song song chắn trên hai đường thẳng song song những đoạn thẳng bằng nhau:
    $$d_1 \parallel d_2, \ (P) \parallel (Q) \implies A_1B_1 = A_2B_2 \quad (A_1, A_2 \in (P); \ B_1, B_2 \in (Q))$$
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. ĐỊNH LÍ TA-LÉT TRONG KHÔNG GIAN",
        "subtitle": "BÀI 13 • MỤC 2 • BẢO TOÀN TỈ SỐ TRÊN CÁC CÁT TUYẾN",
        "mascotMode": "explaining",
        "mascotTip": r"Ba mặt phẳng song song chia các cát tuyến theo các đoạn thẳng tương ứng tỉ lệ!",
        "narration": "Định lí Ta-lét trong không gian mở rộng định lí Ta-lét hình học phẳng lên một tầm cao mới: Ba mặt phẳng đôi một song song chắn trên hai cát tuyến bất kì các đoạn thẳng tương ứng tỉ lệ. Cụ thể, nếu ba mặt phẳng P, Q, R song song lần lượt cắt cát tuyến a tại A, B, C và cắt cát tuyến b tại A', B', C' thì tỉ số AB trên A'B' bằng BC trên B'C' bằng AC trên A'C'.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-indigo-950 to-purple-950 p-4 rounded-xl border border-indigo-500/40 text-xs">
    <div class="font-bold text-indigo-300 text-sm mb-2">Định Lí Ta-lét Thuận Trong Không Gian</div>
    <p class="text-slate-200 leading-relaxed text-sm">
      Ba mặt phẳng đôi một song song $(\alpha) \parallel (\beta) \parallel (\gamma)$ chắn trên hai cát tuyến $d_1, d_2$ các đoạn thẳng tương ứng tỉ lệ:
    </p>
    
    <div class="p-3 my-2 bg-slate-900 rounded border border-indigo-400/30 text-center font-serif text-base text-amber-300">
      $$\frac{AB}{A'B'} = \frac{BC}{B'C'} = \frac{CA}{C'A'} \quad \text{hay} \quad \frac{AB}{BC} = \frac{A'B'}{B'C'}$$
    </div>

    <p class="text-slate-400 text-xs">
      • $(A, B, C$ là giao điểm của $d_1$ với $(\alpha), (\beta), (\gamma)$).<br/>
      • $(A', B', C'$ là giao điểm của $d_2$ với $(\alpha), (\beta), (\gamma)$).
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: TÍNH CHẤT GIAO TUYẾN HAI MẶT PHẲNG SONG SONG",
        "subtitle": "BÀI 13 • MỤC 2 • NHẬN DIỆN MỐI QUAN HỆ GIAO TUYẾN 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Áp dụng trực tiếp Định lí 2: giao tuyến luôn luôn song song!",
        "narration": "Ví dụ 1: Cho hai mặt phẳng P và Q song song với nhau. Một mặt phẳng R cắt P và Q lần lượt theo hai giao tuyến a và b. Vị trí tương đối của hai đường thẳng a và b là gì? Phương án A: a và b chéo nhau; Phương án B: a và b cắt nhau; Phương án C: a và b song song với nhau; Phương án D: a và b trùng nhau. Các em có 15 giây chọn đáp án.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Nhận biết</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho $(P) \parallel (Q)$. Mặt phẳng $(R)$ cắt $(P)$ và $(Q)$ theo hai giao tuyến $a$ và $b$. Khi đó:
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> $a$ và $b$ chéo nhau</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> $a$ và $b$ cắt nhau</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>C.</b> $a \parallel b$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> $a \equiv b$</div>
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
        "subtitle": "BÀI 13 • MỤC 2 • CHỨNG MINH TÍNH SONG SONG CỦA HAI GIAO TUYẾN",
        "mascotMode": "celebrating",
        "mascotTip": r"$a$ và $b$ cùng thuộc $(R)$ và không có điểm chung nên $a \parallel b$!",
        "narration": "Hết thời gian. Đáp án đúng là C: hai giao tuyến a và b song song với nhau. Chứng minh phản chứng rất đơn giản: Vì a và b cùng nằm trong mặt phẳng R, nếu a và b có điểm chung K thì K vừa thuộc P vừa thuộc Q, mâu thuẫn với giả thiết P và Q song song không có điểm chung. Do đó a và b đồng phẳng và không cắt nhau, suy ra a song song với b.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Chứng minh toán học:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• $a = (R) \cap (P) \implies a \subset (R)$ và $a \subset (P)$.</p>
      <p>• $b = (R) \cap (Q) \implies b \subset (R)$ và $b \subset (Q)$.</p>
      <p>• Vì $a, b \subset (R)$ nên $a$ và $b$ đồng phẳng.</p>
      <p>• Nếu $a \cap b = \{M\} \implies M \in (P) \cap (Q) = \emptyset$ (vô lí vì $(P) \parallel (Q)$).</p>
      <p>• Vậy $a \parallel b$.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án C.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. ỨNG DỤNG TÍNH ĐỘ DÀI THEO ĐỊNH LÍ TA-LÉT",
        "subtitle": "BÀI 13 • MỤC 2 • PHƯƠNG PHÁP TÍNH TOÁN ĐOẠN THẲNG TRÊN CÁT TUYẾN",
        "mascotMode": "pointer",
        "mascotTip": r"Lập tỉ số đồng dạng giống hệt Ta-lét lớp 8 nhưng áp dụng trong không gian!",
        "narration": "Định lí Ta-lét trong không gian giúp chúng ta tính toán độ dài các đoạn thẳng bị chắn bởi các mặt phẳng song song một cách nhanh chóng. Khi gặp bài toán có các mặt phẳng song song cắt hai đường thẳng chéo nhau, ta lập tỉ lệ thức: đoạn ngắn trên đoạn ngắn bằng đoạn dài trên đoạn dài.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-teal-950 to-slate-900 p-4 rounded-xl border border-teal-500/40 text-xs">
    <div class="font-bold text-teal-300 text-sm mb-2">Mô Hình Tính Toán Đoạn Thẳng Ta-lét</div>
    <p class="text-slate-300 leading-relaxed">
      Cho ba mặt phẳng song song $(\alpha) \parallel (\beta) \parallel (\gamma)$ cắt đường thẳng $d_1$ tại $A, B, C$ và $d_2$ tại $A', B', C'$.
    </p>

    <div class="grid grid-cols-2 gap-3 mt-2 text-xs">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400">
        <b class="text-cyan-300">Công thức 1:</b><br/>
        $$\frac{AB}{BC} = \frac{A'B'}{B'C'}$$
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400">
        <b class="text-emerald-300">Công thức 2:</b><br/>
        $$\frac{AB}{AC} = \frac{A'B'}{A'C'}$$
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: TÍNH ĐỘ DÀI ĐOẠN THẲNG THEO TA-LÉT",
        "subtitle": "BÀI 13 • MỤC 2 • BÀI TOÁN SỐ HỌC 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Lập tỉ số: $\frac{AB}{BC} = \frac{A'B'}{B'C'} \implies B'C' = \frac{BC \cdot A'B'}{AB}$!",
        "narration": "Ví dụ 2: Ba mặt phẳng song song P, Q, R lần lượt cắt đường thẳng d1 tại A, B, C và cắt d2 tại A', B', C'. Biết AB bằng 4 cm, BC bằng 6 cm, và A'B' bằng 6 cm. Tính độ dài đoạn thẳng B'C'. Phương án A: 4 cm; Phương án B: 8 cm; Phương án C: 9 cm; Phương án D: 10 cm. Các em có 15 giây tính toán.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-teal-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-teal-500/20 text-teal-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho ba mặt phẳng song song cắt $d_1$ tại $A, B, C$ và $d_2$ tại $A', B', C'$. Biết $AB = 4\text{ cm}, BC = 6\text{ cm}$ và $A'B' = 6\text{ cm}$. Độ dài đoạn thẳng $B'C'$ là:
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> $4\text{ cm}$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> $8\text{ cm}$</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>C.</b> $9\text{ cm}$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> $10\text{ cm}$</div>
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
        "title": "7. LỜI GIẢI VÍ DỤ 2: $B'C' = 9\\text{ cm}$",
        "subtitle": "BÀI 13 • MỤC 2 • BƯỚC BIẾN ĐỔI TỈ SỐ CHUẨN XÁC",
        "mascotMode": "celebrating",
        "mascotTip": r"$B'C' = \frac{6 \times 6}{4} = 9\text{ cm}$!",
        "narration": "Hết thời gian. Đáp án đúng là C: 9 cm. Áp dụng định lí Ta-lét trong không gian với ba mặt phẳng song song, ta có tỉ lệ thức: AB chia BC bằng A'B' chia B'C'. Thay số: 4 chia 6 bằng 6 chia B'C'. Từ đó suy ra B'C' bằng 6 nhân 6 chia 4, kết quả bằng 9 cm.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Lời giải số học chi tiết:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>Theo Định lí Ta-lét trong không gian cho ba mặt phẳng song song:</p>
      $$\frac{AB}{BC} = \frac{A'B'}{B'C'} \iff \frac{4}{6} = \frac{6}{B'C'}$$
      $$\implies B'C' = \frac{6 \cdot 6}{4} = \frac{36}{4} = 9\text{ (cm)}$$
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án C.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. KỸ THUẬT DỰNG THIẾT DIỆN SONG SONG VỚI MỘT MẶT PHẲNG",
        "subtitle": "BÀI 13 • MỤC 2 • DỰNG CÁC ĐOẠN GIAO TUYẾN SONG SONG",
        "mascotMode": "pointer",
        "mascotTip": r"Cắt các mặt của hình chóp theo các đường thẳng song song với các cạnh của tam giác thiết diện!",
        "narration": "Một ứng dụng thực tế quan trọng của Định lí 2 là kỹ thuật dựng thiết diện song song với một mặt phẳng cho trước. Khi mặt phẳng alpha song song với mặt phẳng Q, alpha sẽ cắt tất cả các mặt của hình chóp hoặc hình hộp theo các giao tuyến song song với các giao tuyến của Q trên các mặt đó. Do đó, thiết diện thu được là một đa giác đồng dạng với đa giác của mặt phẳng Q.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-950 to-indigo-900 p-4 rounded-xl border border-blue-500/40 text-xs">
    <div class="font-bold text-blue-300 text-sm mb-2">Thuật Toán Dựng Thiết Diện Song Song $(Q)$</div>
    <div class="space-y-2">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400">
        <b class="text-cyan-300">Quy tắc giao tuyến song song:</b>
        <p class="text-slate-300 mt-1">Nếu $(\alpha) \parallel (Q)$ thì $(\alpha)$ cắt bất kì mặt nào $(F)$ theo giao tuyến $d \parallel (F \cap Q)$.</p>
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-amber-400">
        <b class="text-amber-300">Tính chất đồng dạng:</b>
        <p class="text-slate-300 mt-1">Thiết diện của hình chóp cắt bởi mặt phẳng song song với đáy luôn là một đa giác <b>đồng dạng</b> với đa giác đáy.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: TÌM THIẾT DIỆN SONG SONG TRONG HÌNH CHÓP",
        "subtitle": "BÀI 13 • MỤC 2 • BÀI TOÁN HÌNH THANG / HÌNH BÌNH HÀNH 30S",
        "mascotMode": "thinking",
        "mascotTip": r"Mặt phẳng qua trung điểm song song đáy tạo ra thiết diện đồng dạng với đáy theo tỉ số 1/2!",
        "narration": "Ví dụ 3: Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Gọi M là trung điểm của cạnh bên SA. Mặt phẳng P đi qua M và song song với đáy ABCD cắt các cạnh bên SB, SC, SD lần lượt tại N, P, Q. Thiết diện MNPQ là hình gì? Phương án A: Hình thang không cân; Phương án B: Hình bình hành; Phương án C: Tam giác; Phương án D: Hình thoi. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $M$ là trung điểm $SA$. Mặt phẳng $(P)$ qua $M$ và song song với $(ABCD)$ cắt $SB, SC, SD$ tại $N, P, Q$. Thiết diện $MNPQ$ là:
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Hình thang không cân</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>B.</b> Hình bình hành</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> Tam giác</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Hình vuông</div>
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
        "title": "10. LỜI GIẢI VÍ DỤ 3: THIẾT DIỆN LÀ HÌNH BÌNH HÀNH",
        "subtitle": "BÀI 13 • MỤC 2 • ĐỒNG DẠNG VỚI ĐÁY THEO TỈ SỐ 1/2",
        "mascotMode": "celebrating",
        "mascotTip": r"$MN \parallel AB$, $PQ \parallel CD$, $MQ \parallel AD$, $NP \parallel BC \implies MNPQ$ là hình bình hành!",
        "narration": "Hết thời gian. Đáp án đúng là B: Thiết diện MNPQ là hình bình hành. Giải thích: Vì mặt phẳng P song song với đáy ABCD, theo Định lí 2 về giao tuyến song song, giao tuyến của P với mặt SAB là MN song song AB. Giao tuyến với SCD là PQ song song CD. Giao tuyến với SAD là MQ song song AD, và giao tuyến với SBC là NP song song BC. Do ABCD là hình bình hành có các cặp cạnh đối song song nên tứ giác MNPQ cũng có các cặp cạnh đối song song. Vậy MNPQ là hình bình hành, hơn nữa kích thước bằng một nửa đáy ABCD.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Chứng minh hình học:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• $(MNPQ) \parallel (ABCD) \implies$ các giao tuyến với các mặt bên phải song song với các cạnh đáy tương ứng:</p>
      <p>• $(MNPQ) \cap (SAB) = MN \implies MN \parallel AB$.</p>
      <p>• $(MNPQ) \cap (SCD) = PQ \implies PQ \parallel CD$.</p>
      <p>• Vì $AB \parallel CD \implies MN \parallel PQ$. Tương tự: $MQ \parallel NP \parallel AD$.</p>
      <p>• Tứ giác $MNPQ$ có hai cặp cạnh đối song song nên là <b>hình bình hành</b>.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án B.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI VỀ ĐỊNH LÍ TA-LÉT VÀ TÍNH CHẤT",
        "subtitle": "BÀI 13 • MỤC 2 • 4 MỆNH ĐỀ THI TỐT NGHIỆP 30 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Đọc kĩ từng mệnh đề, cẩn thận câu chữ về tính chất vuông góc hoặc góc!",
        "narration": "Ví dụ 4: Cho hai mặt phẳng song song P và Q. Xét tính Đúng hay Sai của các mệnh đề sau: Mệnh đề a: Nếu đường thẳng a nằm trong P và đường thẳng b nằm trong Q thì a và b luôn luôn song song với nhau. Mệnh đề b: Mọi đường thẳng song song với P đều song song với Q. Mệnh đề c: Hai mặt phẳng song song chắn trên hai cát tuyến song song những đoạn thẳng bằng nhau. Mệnh đề d: Nếu một mặt phẳng cắt P thì mặt phẳng đó cũng bắt buộc phải cắt Q. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded">Ví dụ 4 (Đúng / Sai)</span>
      <span class="text-xs text-slate-400">Định dạng thi 2025</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho hai mặt phẳng song song $(P) \parallel (Q)$. Xét tính Đúng / Sai của các khẳng định:
    </p>

    <div class="space-y-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>a)</b> Nếu $a \subset (P)$ và $b \subset (Q)$ thì $a \parallel b$.</span>
        <span class="font-bold text-rose-400">[ SAI ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>b)</b> Mọi đường thẳng song song với $(P)$ đều song song với $(Q)$.</span>
        <span class="font-bold text-rose-400">[ SAI ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>c)</b> Hai mặt phẳng song song chắn trên hai cát tuyến song song những đoạn thẳng bằng nhau.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>d)</b> Mặt phẳng $(R)$ cắt $(P)$ thì bắt buộc $(R)$ cũng cắt $(Q)$.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-cyan-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-cyan-300 font-medium">Thời gian kiểm tra:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 2",
        "subtitle": "BÀI 13 • MỤC 2 • PHÂN TÍCH BẪY TÍNH CHẤT KINH ĐIỂN",
        "mascotMode": "celebrating",
        "mascotTip": r"$a \subset (P), b \subset (Q)$ thì $a$ và $b$ có thể CHÉO NHAU chứ không nhất thiết song song!",
        "narration": "Giải thích chi tiết Ví dụ 4: Mệnh đề a SAI vì a và b hoàn toàn có thể chéo nhau, ví dụ mép bàn mặt trên và mép đối diện ở mặt dưới theo hướng vuông góc. Mệnh đề b SAI vì đường thẳng đó có thể nằm trọn vẹn trong mặt phẳng Q. Mệnh đề c ĐÚNG vì đây là hệ quả của định lí 2, tạo thành hình bình hành. Mệnh đề d ĐÚNG vì nếu R không cắt Q thì R song song hoặc trùng Q, mà P song song Q nên R phải song song P, mâu thuẫn với giả thiết R cắt P.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Phân tích sai lầm kinh điển:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• <b>a) SAI:</b> $a$ và $b$ không có điểm chung nên có thể <b>chéo nhau</b> hoặc song song.</p>
      <p>• <b>b) SAI:</b> Đường thẳng đó có thể nằm trong $(Q)$ ($d \subset (Q)$).</p>
      <p>• <b>c) ĐÚNG:</b> Tứ giác tạo bởi 4 đỉnh là hình bình hành nên 2 cạnh đối bằng nhau.</p>
      <p>• <b>d) ĐÚNG:</b> Nếu $(R)$ không cắt $(Q)$ thì $(R) \parallel (Q) \implies (R) \parallel (P)$ (mâu thuẫn việc $(R)$ cắt $(P)$).</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">⭐ TỔNG KẾT MỤC 2: Nhớ kỹ Định lí 2 giao tuyến song song và tỉ số Ta-lét trên cát tuyến!</div>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 3: HÌNH LĂNG TRỤ, HÌNH HỘP & THIẾT DIỆN CỦA ĐA DIỆN
# ==============================================================================
BAI13_MUC3_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. ĐỊNH NGHĨA HÌNH LĂNG TRỤ",
        "subtitle": "BÀI 13 • MỤC 3 • CẤU TRÚC ĐA DIỆN CƠ BẢN",
        "mascotMode": "pointer",
        "mascotTip": r"Hai đáy là hai đa giác bằng nhau và song song, các mặt bên là các hình bình hành!",
        "narration": "Chào mừng các em đến với Mục 3: Hình lăng trụ, hình hộp và thiết diện của đa diện. Cho hai mặt phẳng song song alpha và alpha phẩy. Trên alpha cho đa giác lồi A1 A2 An. Qua các đỉnh này vẽ các đường thẳng song song cắt alpha phẩy tại A1 phẩy, A2 phẩy, An phẩy. Hình gồm hai đa giác đáy và các tứ giác mặt bên được gọi là hình lăng trụ.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-amber-950 to-orange-950 p-4 rounded-xl border border-amber-500/40">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-lg uppercase tracking-wider">Cấu trúc đa diện</span>
      <h3 class="text-xl font-black text-amber-200">Hình Lăng Trụ $A_1A_2\dots A_n.A'_1A'_2\dots A'_n$</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs text-slate-300">
      <div class="p-2.5 bg-slate-900 rounded border border-amber-400/30">
        <b class="text-amber-300">1. Hai mặt đáy:</b><br/>
        Là hai đa giác bằng nhau và nằm trên hai mặt phẳng song song: $(A_1A_2\dots A_n) \parallel (A'_1A'_2\dots A'_n)$.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border border-amber-400/30">
        <b class="text-amber-300">2. Các mặt bên:</b><br/>
        Là các <b>hình bình hành</b> ($A_1A_2A'_2A'_1, A_2A_3A'_3A'_2\dots$).
      </div>
      <div class="p-2.5 bg-slate-900 rounded border border-amber-400/30">
        <b class="text-amber-300">3. Các cạnh bên:</b><br/>
        Song song và bằng nhau từng đôi một ($A_1A'_1 \parallel A_2A'_2 \parallel \dots$ và $A_1A'_1 = A_2A'_2 = \dots$).
      </div>
      <div class="p-2.5 bg-slate-900 rounded border border-amber-400/30">
        <b class="text-amber-300">4. Đỉnh:</b><br/>
        Các đỉnh của hai đa giác đáy là các đỉnh của hình lăng trụ.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. HÌNH HỘP VÀ CÁC TÍNH CHẤT ĐẶC BIỆT",
        "subtitle": "BÀI 13 • MỤC 3 • HÌNH LĂNG TRỤ TỨ GIÁC CÓ ĐÁY LÀ HÌNH BÌNH HÀNH",
        "mascotMode": "explaining",
        "mascotTip": r"Hình hộp có 6 mặt đều là hình bình hành, 4 đường chéo cắt nhau tại trung điểm mỗi đường!",
        "narration": "Hình lăng trụ tứ giác có đáy là hình bình hành được gọi là hình hộp. Hình hộp có các tính chất cực kì đẹp mắt: Thứ nhất: Cả sáu mặt của hình hộp đều là các hình bình hành. Hai mặt không có đỉnh chung gọi là hai mặt đối diện, và hai mặt đối diện luôn song song và bằng nhau. Thứ hai: Bốn đường chéo của hình hộp cắt nhau tại trung điểm của mỗi đường, điểm này được gọi là tâm đối xứng của hình hộp.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-950 to-slate-900 p-4 rounded-xl border border-blue-500/40 text-xs">
    <div class="font-bold text-blue-300 text-sm mb-2">Đặc Điểm Hình Học Của Hình Hộp $ABCD.A'B'C'D'$</div>
    <div class="grid grid-cols-2 gap-2.5">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400">
        <b class="text-emerald-300">6 Mặt bình hành:</b><br/>
        Tất cả 6 mặt đều là hình bình hành. Có 3 cặp mặt đối diện song song và bằng nhau.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-amber-400">
        <b class="text-amber-300">4 Đường chéo đồng quy:</b><br/>
        $AC', BD', CA', DB'$ cắt nhau tại trung điểm $O$ của mỗi đường ($O$ là tâm hình hộp).
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-purple-400">
        <b class="text-purple-300">12 Cạnh:</b><br/>
        Chia thành 3 nhóm, mỗi nhóm gồm 4 cạnh song song và bằng nhau.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400">
        <b class="text-cyan-300">8 Đỉnh:</b><br/>
        4 đỉnh đáy dưới và 4 đỉnh đáy trên.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: CÔNG THỨC ĐẾM SỐ ĐỈNH, CẠNH, MẶT CỦA HÌNH LĂNG TRỤ",
        "subtitle": "BÀI 13 • MỤC 3 • BÀI TOÁN TỔNG QUÁT 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Lăng trụ $n$-giác có $2n$ đỉnh, $3n$ cạnh và $n+2$ mặt!",
        "narration": "Ví dụ 1: Một hình lăng trụ có đáy là đa giác n cạnh. Hỏi hình lăng trụ đó có tất cả bao nhiêu cạnh? Phương án A: 2n cạnh; Phương án B: 3n cạnh; Phương án C: n cộng 2 cạnh; Phương án D: 4n cạnh. Các em có 15 giây chọn đáp án.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Nhận biết</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Một hình lăng trụ có đáy là đa giác $n$ cạnh ($n \ge 3$). Số cạnh của hình lăng trụ đó là:
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> $2n$ cạnh</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>B.</b> $3n$ cạnh</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> $n + 2$ cạnh</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> $4n$ cạnh</div>
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
        "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP ÁN B CHÍNH XÁC",
        "subtitle": "BÀI 13 • MỤC 3 • CÔNG THỨC Ơ-LE CHO HÌNH LĂNG TRỤ",
        "mascotMode": "celebrating",
        "mascotTip": r"$n$ cạnh đáy dưới $+ n$ cạnh đáy trên $+ n$ cạnh bên $= 3n$ cạnh!",
        "narration": "Hết thời gian. Đáp án đúng là B: 3n cạnh. Giải thích: Hình lăng trụ có đáy n cạnh gồm có: n cạnh ở đáy dưới, n cạnh ở đáy trên, và n cạnh bên nối các đỉnh tương ứng. Tổng cộng có n cộng n cộng n bằng 3n cạnh. Ngoài ra, hình lăng trụ có 2n đỉnh và n cộng 2 mặt.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Bảng tổng kết chỉ số hình lăng trụ $n$-giác:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• <b>Số đỉnh ($V$):</b> $2n$ đỉnh ($n$ đỉnh đáy dưới $+ n$ đỉnh đáy trên).</p>
      <p>• <b>Số cạnh ($E$):</b> $3n$ cạnh ($n$ cạnh đáy dưới $+ n$ cạnh đáy trên $+ n$ cạnh bên).</p>
      <p>• <b>Số mặt ($F$):</b> $n + 2$ mặt ($2$ mặt đáy $+ n$ mặt bên).</p>
      <p>• <b>Kiểm tra công thức Ơ-le:</b> $V - E + F = 2n - 3n + (n + 2) = 2$ (luôn đúng!).</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án B.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. HÌNH CHÓP CỤT VÀ CÁC TÍNH CHẤT",
        "subtitle": "BÀI 13 • MỤC 3 • HÌNH TẠO THÀNH KHI CẮT HÌNH CHÓP BỞI MẶT PHẲNG SONG SONG ĐÁY",
        "mascotMode": "pointer",
        "mascotTip": r"Hai đáy là 2 đa giác đồng dạng, các mặt bên là các hình thang!",
        "narration": "Khi cắt một hình chóp bởi một mặt phẳng song song với đáy, phần hình chóp nằm giữa mặt phẳng đáy và mặt phẳng cắt được gọi là hình chóp cụt. Các tính chất quan trọng của hình chóp cụt: Hai đáy là hai đa giác có các cạnh tương ứng song song và tỉ số các cạnh tương ứng bằng nhau, tức là hai đa giác đồng dạng. Các mặt bên của hình chóp cụt đều là các hình thang. Các đường thẳng chứa các cạnh bên đồng quy tại một điểm, chính là đỉnh của hình chóp ban đầu.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-950 to-indigo-950 p-4 rounded-xl border border-purple-500/40 text-xs">
    <div class="font-bold text-purple-300 text-sm mb-2">Cấu Trúc Hình Chóp Cụt $A_1A_2\dots A_n.B_1B_2\dots B_n$</div>
    <div class="grid grid-cols-2 gap-2.5">
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-amber-400">
        <b class="text-amber-300">1. Hai mặt đáy:</b><br/>
        Là hai đa giác <b>đồng dạng</b> nằm trong hai mặt phẳng song song.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-emerald-400">
        <b class="text-emerald-300">2. Các mặt bên:</b><br/>
        Tất cả các mặt bên là các <b>hình thang</b>.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-cyan-400">
        <b class="text-cyan-300">3. Cạnh bên đồng quy:</b><br/>
        Các đường thẳng chứa cạnh bên đồng quy tại đỉnh $S$ của hình chóp ban đầu.
      </div>
      <div class="p-2.5 bg-slate-900 rounded border-l-4 border-rose-400">
        <b class="text-rose-300">4. Chiều cao:</b><br/>
        Khoảng cách giữa hai mặt phẳng đáy.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: TÍNH CHẤT MẶT BÊN CỦA HÌNH LĂNG TRỤ VÀ HÌNH CHÓP CỤT",
        "subtitle": "BÀI 13 • MỤC 3 • PHÂN BIỆT RÕ RÀNG 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Mặt bên lăng trụ là hình bình hành, mặt bên chóp cụt là hình thang!",
        "narration": "Ví dụ 2: Khẳng định nào sau đây là sai khi nói về hình lăng trụ và hình chóp cụt? Khẳng định A: Các mặt bên của hình lăng trụ là các hình bình hành. Khẳng định B: Các cạnh bên của hình lăng trụ song song và bằng nhau. Khẳng định C: Các mặt bên của hình chóp cụt là các hình bình hành. Khẳng định D: Hai đáy của hình chóp cụt là hai đa giác đồng dạng. Các em có 15 giây tìm khẳng định sai.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-rose-500/20 text-rose-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Nhận biết</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Khẳng định nào sau đây là <b>SAI</b>?
    </p>

    <div class="space-y-1.5 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Các mặt bên của hình lăng trụ luôn là các hình bình hành.</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> Các cạnh bên của hình lăng trụ song song và bằng nhau.</div>
      <div class="p-2 bg-slate-900 rounded border border-rose-500 font-bold text-rose-300"><b>C.</b> Các mặt bên của hình chóp cụt luôn là các hình bình hành.</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>D.</b> Hai đáy của hình chóp cụt là hai đa giác đồng dạng.</div>
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
        "title": "7. LỜI GIẢI VÍ DỤ 2: ĐÁP ÁN C LÀ KHẲNG ĐỊNH SAI",
        "subtitle": "BÀI 13 • MỤC 3 • HÌNH THANG KHÔNG THỂ LÀ HÌNH BÌNH HÀNH",
        "mascotMode": "celebrating",
        "mascotTip": r"Mặt bên chóp cụt chỉ là hình thang vì 2 cạnh bên cắt nhau tại đỉnh hình chóp!",
        "narration": "Hết thời gian. Đáp án sai cần chọn là C. Các mặt bên của hình chóp cụt là các hình thang chứ không phải là hình bình hành, vì hai cạnh bên của mỗi mặt bên kéo dài sẽ cắt nhau tại đỉnh của hình chóp ban đầu. Do đó khẳng định C là sai.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Phân tích bản chất:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• <b>Khẳng định A, B:</b> ĐÚNG theo định nghĩa và tính chất của hình lăng trụ.</p>
      <p>• <b>Khẳng định C:</b> <b>SAI</b> vì các cạnh bên của hình chóp cụt không song song mà đồng quy tại đỉnh $S$. Do đó mặt bên là <b>hình thang</b>, không thể là hình bình hành.</p>
      <p>• <b>Khẳng định D:</b> ĐÚNG theo tính chất mặt cắt song song đáy của hình chóp.</p>
      <div class="mt-2 text-rose-300 font-bold font-mono">➔ Chọn đáp án C (khẳng định sai).</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. KỸ THUẬT DỰNG THIẾT DIỆN CỦA HÌNH HỘP",
        "subtitle": "BÀI 13 • MỤC 3 • SỬ DỤNG TÍNH CHẤT CÁC MẶT ĐỐI DIỆN SONG SONG",
        "mascotMode": "pointer",
        "mascotTip": r"Mặt phẳng cắt 2 mặt đối diện của hình hộp theo 2 đoạn giao tuyến SONG SONG!",
        "narration": "Khi tìm thiết diện của hình hộp cắt bởi một mặt phẳng P, các em hãy áp dụng triệt để Định lí 2: Vì hình hộp có các cặp mặt đối diện song song, nên mặt phẳng P sẽ cắt hai mặt đối diện theo hai đoạn giao tuyến song song với nhau. Nhờ tính chất này, chỉ cần tìm được một giao tuyến ở mặt này, ta có thể kẻ đường thẳng song song ở mặt đối diện.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-950 to-indigo-950 p-4 rounded-xl border border-blue-500/40 text-xs">
    <div class="font-bold text-blue-300 text-sm mb-2">Kỹ Thuật Kẻ Giao Tuyến Song Song Trên Hình Hộp</div>
    <p class="text-slate-300 leading-relaxed">
      Hình hộp có 3 cặp mặt đối diện song song:
      $$(ABCD) \parallel (A'B'C'D'), \quad (ABB'A') \parallel (CDD'C'), \quad (ADD'A') \parallel (BCC'B')$$
    </p>

    <div class="p-3 my-2 bg-slate-900 rounded border-l-4 border-emerald-400">
      <b class="text-emerald-300">Quy tắc vàng:</b><br/>
      Nếu mặt phẳng $(\alpha)$ cắt $(ABCD)$ theo đoạn $IJ$ thì $(\alpha)$ sẽ cắt $(A'B'C'D')$ theo đoạn $I'J' \parallel IJ$.<br/>
      Thiết diện của hình hộp chỉ có thể là: <b>tam giác, tứ giác, ngũ giác hoặc lục giác</b> (tối đa 6 cạnh vì có 6 mặt).
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: THIẾT DIỆN HÌNH HỘP QUA TRUNG ĐIỂM CÁC CẠNH",
        "subtitle": "BÀI 13 • MỤC 3 • BÀI TOÁN XÁC ĐỊNH ĐA GIÁC THIẾT DIỆN 30S",
        "mascotMode": "thinking",
        "mascotTip": r"Mặt phẳng cắt cả 6 mặt tạo thành lục giác có các cạnh đối song song!",
        "narration": "Ví dụ 3: Cho hình lập phương ABCD.A'B'C'D'. Gọi M, N, P lần lượt là trung điểm của các cạnh AB, B'C' và D'D. Thiết diện của hình lập phương cắt bởi mặt phẳng MNP là hình gì? Phương án A: Tam giác; Phương án B: Tứ giác; Phương án C: Ngũ giác; Phương án D: Lục giác đều. Các em có 30 giây phân tích.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30 text-xs">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-slate-200 leading-relaxed mb-3">
      Cho hình lập phương $ABCD.A'B'C'D'$. Gọi $M, N, P$ lần lượt là trung điểm của $AB, B'C', D'D$. Thiết diện cắt bởi mặt phẳng $(MNP)$ là hình gì?
    </p>

    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>A.</b> Tam giác</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>B.</b> Hình bình hành</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700"><b>C.</b> Ngũ giác</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300"><b>D.</b> Lục giác đều</div>
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
        "title": "10. LỜI GIẢI VÍ DỤ 3: THIẾT DIỆN LÀ LỤC GIÁC ĐỀU",
        "subtitle": "BÀI 13 • MỤC 3 • THIẾT DIỆN KINH ĐIỂN CỦA HÌNH LẬP PHƯƠNG",
        "mascotMode": "celebrating",
        "mascotTip": r"Mặt phẳng đi qua tâm hình lập phương và cắt cả 6 mặt theo các cạnh bằng $\frac{a\sqrt{2}}{2}$!",
        "narration": "Hết thời gian. Đáp án chính xác là D: Lục giác đều. Lời giải: Bằng cách kéo dài các đoạn thẳng và dựng các giao tuyến song song trên các mặt đối diện, mặt phẳng MNP cắt 6 cạnh của hình lập phương tại 6 trung điểm: trung điểm AB, trung điểm BC, trung điểm CC', trung điểm C'D', trung điểm D'A' và trung điểm A'A. Cả 6 đoạn giao tuyến này đều bằng nhau và bằng cạnh của hình vuông nhân căn hai chia hai. Hơn nữa các góc của lục giác đều bằng 120 độ. Vậy thiết diện là một lục giác đều.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Lời giải chi tiết bài toán thiết diện:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• Dựng giao tuyến bằng quy tắc song song trên các cặp mặt đối diện:</p>
      <p>• Mặt phẳng $(MNP)$ cắt 6 mặt của hình lập phương tại 6 trung điểm của 6 cạnh:</p>
      <p class="font-mono text-amber-300 text-center">$$M \in AB, \ E \in BC, \ F \in CC', \ N \in C'D', \ G \in D'A', \ P \in A'A$$</p>
      <p>• Độ dài 6 cạnh thiết diện đều bằng $\frac{a\sqrt{2}}{2}$ (đường trung bình của tam giác vuông cân cạnh $a$).</p>
      <p>• Cả 6 góc đều bằng $120^\circ \implies$ Thiết diện là <b>lục giác đều</b>.</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">➔ Chọn đáp án D.</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: ĐỀ THI ĐÚNG / SAI VỀ HÌNH LĂNG TRỤ VÀ HÌNH HỘP",
        "subtitle": "BÀI 13 • MỤC 3 • 4 MỆNH ĐỀ TỔNG HỢP 30 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Đọc thật kĩ: Hình lăng trụ đứng khác hình lăng trụ tổng quát xiên!",
        "narration": "Ví dụ 4: Xét tính Đúng hay Sai của các khẳng định sau về hình lăng trụ và hình hộp: Mệnh đề a: Một hình lăng trụ tam giác có tổng cộng 5 mặt, 6 đỉnh và 9 cạnh. Mệnh đề b: Các mặt bên của hình lăng trụ luôn vuông góc với hai mặt phẳng đáy. Mệnh đề c: Bốn đường chéo của hình hộp cắt nhau tại trung điểm của mỗi đường. Mệnh đề d: Thiết diện của hình hộp có thể là một thất giác, tức là đa giác 7 cạnh. Các em có 30 giây suy nghĩ.",
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
        <span><b>a)</b> Hình lăng trụ tam giác có $5$ mặt, $6$ đỉnh và $9$ cạnh.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>b)</b> Các mặt bên của hình lăng trụ luôn vuông góc với mặt phẳng đáy.</span>
        <span class="font-bold text-rose-400">[ SAI ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>c)</b> Bốn đường chéo của hình hộp cắt nhau tại trung điểm mỗi đường.</span>
        <span class="font-bold text-emerald-400">[ ĐÚNG ]</span>
      </div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 flex justify-between">
        <span><b>d)</b> Thiết diện của hình hộp có thể là một đa giác $7$ cạnh.</span>
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
        "title": "12. LỜI GIẢI VÍ DỤ 4 & BẾ MẠC TOÀN KHÓA BÀI 13",
        "subtitle": "BÀI 13 • MỤC 3 • TỔNG KẾT TOÀN DIỆN HAI MẶT PHẲNG SONG SONG",
        "mascotMode": "celebrating",
        "mascotTip": r"Hình hộp chỉ có 6 mặt nên thiết diện tối đa chỉ có 6 cạnh (lục giác)!",
        "narration": "Chúc mừng các em đã xuất sắc hoàn thành trọn bộ Bài 13: Hai mặt phẳng song song. Phân tích Ví dụ 4: Mệnh đề a ĐÚNG vì lăng trụ tam giác có n bằng 3, số đỉnh là 2 nhân 3 bằng 6, số cạnh là 3 nhân 3 bằng 9, số mặt là 3 cộng 2 bằng 5. Mệnh đề b SAI vì lăng trụ tổng quát có thể là lăng trụ xiên, mặt bên không nhất thiết vuông góc đáy. Mệnh đề c ĐÚNG vì đây là tính chất hình hộp. Mệnh đề d SAI vì hình hộp chỉ có 6 mặt, mỗi mặt cắt nhiều nhất cho 1 đoạn giao tuyến, do đó thiết diện tối đa chỉ có 6 cạnh, không thể có 7 cạnh. Hẹn gặp lại các em ở Bài 14: Phép chiếu song song!",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Đáp án và giải thích chuẩn mực:</div>
    <div class="space-y-1.5 text-slate-300">
      <p>• <b>a) ĐÚNG:</b> Với $n = 3$: $V = 2n = 6, \ E = 3n = 9, \ F = n + 2 = 5$.</p>
      <p>• <b>b) SAI:</b> Lăng trụ tổng quát có thể là <b>lăng trụ xiên</b> (chỉ có lăng trụ đứng mới vuông góc đáy).</p>
      <p>• <b>c) ĐÚNG:</b> Tâm hình hộp là trung điểm của cả 4 đường chéo.</p>
      <p>• <b>d) SAI:</b> Hình hộp chỉ có 6 mặt $\implies$ Số cạnh thiết diện tối đa là $6$ (lục giác).</p>
      <div class="mt-2 text-emerald-300 font-bold font-mono">🎉 CHÚC MỪNG CÁC EM ĐÃ HOÀN THÀNH TOÀN BỘ BÀI 13 TOÁN 11 KNTT!</div>
    </div>
  </div>
</div>
"""
    }
]
