# -*- coding: utf-8 -*-
"""
CHƯƠNG II: DÃY SỐ. CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN - TOÁN 11 KNTT
BÀI TẬP CUỐI CHƯƠNG II (ÔN TẬP CHƯƠNG 2)
Mục 1, Mục 2, Mục 3 - Đầy đủ 36 Scenes (12 scenes/mục)
Mỗi mục có 4 ví dụ minh họa kèm đồng hồ đếm ngược 15s/30s
Giọng đọc Thầy Nam Minh (vi-VN-NamMinhNeural) chuẩn sư phạm Bộ GD&ĐT
"""

# ==============================================================================
# MỤC 1: HỆ THỐNG HÓA LÝ THUYẾT & SƠ ĐỒ TƯ DUY TOÀN BỘ CHƯƠNG 2
# ==============================================================================
ONTAP_C2_MUC1_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. TỔNG QUAN KIẾN THỨC CỐT LÕI CHƯƠNG 2",
        "subtitle": "ÔN TẬP CHƯƠNG II • TOÁN 11 KẾT NỐI TRI THỨC",
        "mascotMode": "pointer",
        "mascotTip": "Chương 2 liên kết chặt chẽ: Khái niệm Dãy số -> Cấp số cộng (cộng dồn d) -> Cấp số nhân (nhân dồn q)!",
        "narration": "Chào mừng các em học sinh đến với bài ôn tập toàn diện Chương 2 môn Toán lớp 11: Dãy số, Cấp số cộng và Cấp số nhân. Chương học này mở ra một thế giới toán học rời rạc vô cùng sinh động, kết nối ba mắt xích logic cốt lõi: Bài 5 là nền tảng về khái niệm dãy số, tính tăng giảm và bị chặn; Bài 6 là mô hình cấp số cộng với bước nhảy không đổi thông qua phép cộng dồn công sai d; và Bài 7 là mô hình cấp số nhân với sự tăng trưởng theo cấp số nhân thông qua phép nhân dồn công bội q. Nắm chắc bản chất và sự tương đồng giữa hai mô hình này sẽ giúp các em giải quyết mọi bài toán từ nhận biết đến ứng dụng thực tế phân hóa cao.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider">Hệ thống hóa</span>
      <h3 class="text-xl font-black text-emerald-200">Sơ Đồ Liên Hoàn 3 Bài Học Cốt Lõi Chương 2</h3>
    </div>
    <p class="text-sm text-slate-300">Toàn bộ kiến thức Chương 2 được xây dựng từ tổng quát đến hai trường hợp quy luật đặc biệt:</p>
  </div>

  <div class="grid grid-cols-3 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-indigo-400 shadow-md">
      <h4 class="font-bold text-indigo-300 text-sm mb-1">📘 Bài 5: Dãy Số</h4>
      <p class="text-slate-300 leading-relaxed">• Hàm số $u: \mathbb{N}^* \to \mathbb{R}, n \mapsto u_n$.<br/>• Các cách cho: TQ, truy hồi, mô tả.<br/>• Dãy tăng ($u_{n+1} > u_n$), dãy giảm ($u_{n+1} < u_n$).<br/>• Bị chặn trên, bị chặn dưới & bị chặn.</p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md">
      <h4 class="font-bold text-emerald-300 text-sm mb-1">📗 Bài 6: Cấp Số Cộng</h4>
      <p class="text-slate-300 leading-relaxed">• Quy luật: $u_{n+1} = u_n + d$ (cộng dồn $d$).<br/>• TQ: $u_n = u_1 + (n - 1)d$.<br/>• Tính chất: $u_{k-1} + u_{k+1} = 2u_k$.<br/>• Tổng $n$ số hạng: $S_n = \frac{n(u_1 + u_n)}{2}$.</p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-amber-400 shadow-md">
      <h4 class="font-bold text-amber-300 text-sm mb-1">📙 Bài 7: Cấp Số Nhân</h4>
      <p class="text-slate-300 leading-relaxed">• Quy luật: $u_{n+1} = u_n \cdot q$ (nhân dồn $q$).<br/>• TQ: $u_n = u_1 \cdot q^{n-1}$.<br/>• Tính chất: $u_{k-1} \cdot u_{k+1} = (u_k)^2$.<br/>• Tổng $n$ số: $S_n = \frac{u_1(1 - q^n)}{1 - q}$; Lùi vô hạn: $S = \frac{u_1}{1 - q}$.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. BẢNG SO SÁNH SONG SONG: CẤP SỐ CỘNG VS CẤP SỐ NHÂN",
        "subtitle": "BẢN ĐỒ CÔNG THỨC ĐỐI XỨNG CẦN NHỚ",
        "mascotMode": "explain",
        "mascotTip": "Ghi nhớ thần chú đối xứng: Cấp số cộng gắn với CỘNG & NHÂN ĐÔI, Cấp số nhân gắn với NHÂN & BÌNH PHƯƠNG!",
        "narration": "Để không bao giờ bị nhầm lẫn giữa cấp số cộng và cấp số nhân, các em hãy ghi nhớ bản đồ đối xứng tuyệt đẹp này: Về định nghĩa: cấp số cộng lấy số sau bằng số trước cộng d, còn cấp số nhân lấy số sau bằng số trước nhân q. Về số hạng tổng quát: cấp số cộng dùng phép nhân n trừ một nhân d, còn cấp số nhân nâng lên lũy thừa q mũ n trừ một. Về tính chất 3 số hạng liên tiếp: cấp số cộng là trung bình cộng, tổng hai số biên bằng hai lần số giữa; cấp số nhân là trung bình nhân, tích hai số biên bằng bình phương số giữa. Nắm vững sự đối xứng này sẽ giúp các em nhẩm công thức siêu nhanh và chính xác tuyệt đối.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-teal-500/30">
    <div class="flex items-center gap-2 mb-2">
      <span class="w-3 h-3 rounded-full bg-teal-400 animate-pulse"></span>
      <h3 class="text-base font-bold text-teal-300">Bảng So Sánh Đối Xứng Hai Mô Hình Toán Học Rời Rạc</h3>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-xs text-left border-collapse">
        <thead>
          <tr class="bg-slate-900/90 text-slate-200 border-b border-slate-700">
            <th class="p-2 border-r border-slate-700 font-bold text-center w-1/4">Đặc trưng</th>
            <th class="p-2 border-r border-slate-700 font-bold text-emerald-400 text-center w-3/8">Cấp số cộng (CSC)</th>
            <th class="p-2 font-bold text-amber-400 text-center w-3/8">Cấp số nhân (CSN)</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-700 text-slate-300">
          <tr class="hover:bg-slate-700/40">
            <td class="p-2 font-bold text-slate-400 text-center">Định nghĩa</td>
            <td class="p-2 text-center border-r border-slate-700">$u_{n+1} = u_n + d$</td>
            <td class="p-2 text-center">$u_{n+1} = u_n \cdot q$</td>
          </tr>
          <tr class="hover:bg-slate-700/40 bg-slate-900/40">
            <td class="p-2 font-bold text-slate-400 text-center">Số hạng tổng quát</td>
            <td class="p-2 text-center border-r border-slate-700"><b class="text-emerald-300">$u_n = u_1 + (n - 1)d$</b></td>
            <td class="p-2 text-center"><b class="text-amber-300">$u_n = u_1 \cdot q^{n - 1}$</b></td>
          </tr>
          <tr class="hover:bg-slate-700/40">
            <td class="p-2 font-bold text-slate-400 text-center">Tính chất 3 số liên tiếp</td>
            <td class="p-2 text-center border-r border-slate-700">$u_{k-1} + u_{k+1} = 2u_k$</td>
            <td class="p-2 text-center">$u_{k-1} \cdot u_{k+1} = (u_k)^2$</td>
          </tr>
          <tr class="hover:bg-slate-700/40 bg-slate-900/40">
            <td class="p-2 font-bold text-slate-400 text-center">Tổng $n$ số hạng đầu</td>
            <td class="p-2 text-center border-r border-slate-700"><span class="text-emerald-300">$S_n = \frac{n(u_1 + u_n)}{2} = \frac{n[2u_1 + (n - 1)d]}{2}$</span></td>
            <td class="p-2 text-center"><span class="text-amber-300">$S_n = \frac{u_1(1 - q^n)}{1 - q} \; (q \ne 1)$</span></td>
          </tr>
          <tr class="hover:bg-slate-700/40">
            <td class="p-2 font-bold text-slate-400 text-center">Trường hợp đặc biệt</td>
            <td class="p-2 text-center border-r border-slate-700">$d = 0 \implies$ Dãy không đổi: $u_n = u_1$</td>
            <td class="p-2 text-center">$|q| < 1 \implies$ CSN lùi vô hạn: $S = \frac{u_1}{1 - q}$</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1 - ĐỀ BÀI: NHẬN DIỆN DÃY SỐ, CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN",
        "subtitle": "VÍ DỤ MINH HỌA 1 • NHẬN BIẾT & THÔNG HIỂU (15 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": "Nếu $u_{n+1} - u_n = d$ là hằng số -> CSC; nếu $u_{n+1} / u_n = q$ là hằng số -> CSN!",
        "narration": "Chúng ta cùng bắt đầu với Ví dụ 1: Nhận diện dãy số. Trong các dãy số sau đây, dãy số nào là cấp số cộng, dãy số nào là cấp số nhân? Xác định công sai hoặc công bội tương ứng: Câu a: u n bằng ba n trừ năm. Câu b: v n bằng hai nhân ba mũ n. Câu c: w n bằng n bình phương cộng một. Các em có 15 giây để quan sát và xác định bản chất của từng dãy.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-indigo-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-lg uppercase">Ví dụ 1 (Nhận biết)</span>
      <div class="countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-indigo-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-indigo-400 countdown-num">15s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-3">
      Trong các dãy số sau, dãy số nào là cấp số cộng, dãy số nào là cấp số nhân? Tìm công sai hoặc công bội tương ứng:
    </p>
    <div class="grid grid-cols-3 gap-3 text-xs">
      <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
        <span class="font-bold text-indigo-300">a) Dãy số $(u_n)$:</span>
        <p class="text-slate-300 mt-1">$u_n = 3n - 5$</p>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
        <span class="font-bold text-emerald-300">b) Dãy số $(v_n)$:</span>
        <p class="text-slate-300 mt-1">$v_n = 2 \cdot 3^n$</p>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
        <span class="font-bold text-amber-300">c) Dãy số $(w_n)$:</span>
        <p class="text-slate-300 mt-1">$w_n = n^2 + 1$</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
        "subtitle": "PHƯƠNG PHÁP XÉT HIỆU $u_{n+1}-u_n$ VÀ TỈ SỐ $v_{n+1}/v_n$",
        "mascotMode": "happy",
        "mascotTip": r"Ghi nhớ nhanh: Dãy bậc nhất $an+b$ luôn là CSC với công sai $d=a$. Dãy hàm mũ $a \cdot b^n$ luôn là CSN với công bội $q=b$!",
        "narration": "Hết 15 giây! Lời giải chi tiết như sau: Ở câu a, ta xét hiệu u n cộng 1 trừ u n: bằng ba nhân n cộng một trừ năm, trừ đi mở ngoặc ba n trừ năm. Rút gọn được đúng bằng 3 không đổi với mọi n. Do đó, u n là cấp số cộng có số hạng đầu u 1 bằng âm 2 và công sai d bằng 3. Ở câu b, ta xét tỉ số v n cộng 1 chia v n: bằng hai nhân ba mũ n cộng một chia cho hai nhân ba mũ n, rút gọn được đúng bằng 3 không đổi. Do đó, v n là cấp số nhân có số hạng đầu v 1 bằng 6 và công bội q bằng 3. Ở câu c, xét w 1 bằng 2, w 2 bằng 5, w 3 bằng 10. Hiệu w 2 trừ w 1 bằng 3, nhưng w 3 trừ w 2 lại bằng 5; tỉ số cũng không bằng nhau. Do đó w n không phải là cấp số cộng, cũng không phải cấp số nhân.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Phân tích bản chất từng dãy số</h4>
    </div>
    <div class="grid grid-cols-3 gap-2.5 text-xs">
      <div class="bg-slate-900/90 p-2.5 rounded-lg border border-indigo-500/30">
        <span class="font-bold text-indigo-400">a) Dãy $u_n = 3n - 5$:</span>
        <p class="text-slate-300 mt-1 leading-relaxed">
          $u_{n+1} - u_n = [3(n+1) - 5] - [3n - 5]$<br/>
          $= 3n - 2 - 3n + 5 = \mathbf{3}$ (hằng số).<br/>
          👉 <b>Kết luận:</b> $(u_n)$ là <b>Cấp số cộng</b> có số hạng đầu $u_1 = -2$, công sai $d = 3$.
        </p>
      </div>
      <div class="bg-slate-900/90 p-2.5 rounded-lg border border-emerald-500/30">
        <span class="font-bold text-emerald-400">b) Dãy $v_n = 2 \cdot 3^n$:</span>
        <p class="text-slate-300 mt-1 leading-relaxed">
          $\frac{v_{n+1}}{v_n} = \frac{2 \cdot 3^{n+1}}{2 \cdot 3^n} = \mathbf{3}$ (hằng số).<br/>
          👉 <b>Kết luận:</b> $(v_n)$ là <b>Cấp số nhân</b> có số hạng đầu $v_1 = 2 \cdot 3^1 = 6$, công bội $q = 3$.
        </p>
      </div>
      <div class="bg-slate-900/90 p-2.5 rounded-lg border border-amber-500/30">
        <span class="font-bold text-amber-400">c) Dãy $w_n = n^2 + 1$:</span>
        <p class="text-slate-300 mt-1 leading-relaxed">
          $w_1 = 2, w_2 = 5, w_3 = 10$.<br/>
          $w_2 - w_1 = 3 \ne w_3 - w_2 = 5$.<br/>
          $\frac{w_2}{w_1} = 2,5 \ne \frac{w_3}{w_2} = 2$.<br/>
          👉 <b>Kết luận:</b> $(w_n)$ <b>không</b> là CSC, cũng <b>không</b> là CSN.
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 2 - ĐỀ BÀI: XÁC ĐỊNH CẤP SỐ CỘNG KHI BIẾT HỆ THỨC",
        "subtitle": "VÍ DỤ MINH HỌA 2 • THÔNG HIỂU (15 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": "Biểu diễn tất cả các số hạng theo $u_1$ và $d$ bằng công thức $u_n = u_1 + (n - 1)d$!",
        "narration": "Chúng ta cùng đến với Ví dụ 2: Cho cấp số cộng u n thỏa mãn hệ phương trình: u 3 cộng u 5 bằng 14, và u 2 cộng u 7 bằng 16. Yêu cầu: Tìm số hạng đầu u 1, công sai d và tính số hạng thứ hai mươi u 20. Các em có 15 giây suy nghĩ để lập hệ phương trình hai ẩn u 1 và d.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-emerald-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase">Ví dụ 2 (Thông hiểu)</span>
      <div class="countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-emerald-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-emerald-400 countdown-num">15s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-2">
      Cho cấp số cộng $(u_n)$ thỏa mãn hệ phương trình:
    </p>
    <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-center font-mono text-emerald-300 text-sm mb-3">
      $$\begin{cases} u_3 + u_5 = 14 \\ u_2 + u_7 = 16 \end{cases}$$
    </div>
    <p class="text-xs text-slate-300">
      <b>Yêu cầu:</b> Xác định số hạng đầu $u_1$, công sai $d$ và tính giá trị số hạng $u_{20}$.
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
        "subtitle": "GIẢI HỆ PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN $u_1$ VÀ $d$",
        "mascotMode": "explaining",
        "mascotTip": r"Nhận xét nhanh: $u_3 + u_5 = 2u_4 = 14 \implies u_4 = 7$!",
        "narration": "Hết 15 giây! Lời giải như sau: Sử dụng công thức số hạng tổng quát u n bằng u 1 cộng n trừ 1 nhân d. Ta có: u 3 bằng u 1 cộng hai d, u 5 bằng u 1 cộng bốn d; nên u 3 cộng u 5 bằng hai u 1 cộng sáu d bằng 14. Tương tự: u 2 bằng u 1 cộng d, u 7 bằng u 1 cộng sáu d; nên u 2 cộng u 7 bằng hai u 1 cộng bảy d bằng 16. Trừ phương trình dưới cho phương trình trên, ta được ngay: d bằng 16 trừ 14 bằng 2. Thay d bằng 2 vào phương trình đầu, ta tìm được hai u 1 cộng 12 bằng 14, suy ra u 1 bằng 1. Từ đó, số hạng thứ hai mươi là: u 20 bằng u 1 cộng 19 d, bằng 1 cộng 19 nhân 2 bằng 39.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Đưa về hệ phương trình bậc nhất 2 ẩn $(u_1, d)$</h4>
    </div>
    <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2">
      <p>Áp dụng công thức $u_n = u_1 + (n - 1)d$, ta biến đổi hệ đã cho:</p>
      <div class="text-emerald-300 font-mono">
        $$\begin{cases} (u_1 + 2d) + (u_1 + 4d) = 14 \\ (u_1 + d) + (u_1 + 6d) = 16 \end{cases} \iff \begin{cases} 2u_1 + 6d = 14 \\ 2u_1 + 7d = 16 \end{cases}$$
      </div>
      <p>Lấy phương trình thứ hai trừ đi phương trình thứ nhất vế theo vế:</p>
      <p class="text-cyan-300 font-semibold">• $7d - 6d = 16 - 14 \implies \mathbf{d = 2}$.</p>
      <p class="text-cyan-300 font-semibold">• Thay $d = 2$ vào phương trình đầu: $2u_1 + 6(2) = 14 \implies 2u_1 = 2 \implies \mathbf{u_1 = 1}$.</p>
      <div class="bg-emerald-950/40 p-2.5 rounded border border-emerald-500/30 text-emerald-200">
        👉 <b>Số hạng thứ 20:</b> $u_{20} = u_1 + 19d = 1 + 19 \cdot 2 = 1 + 38 = \mathbf{39}$.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 3 - ĐỀ BÀI: XÁC ĐỊNH CẤP SỐ NHÂN KHI BIẾT HỆ THỨC",
        "subtitle": "VÍ DỤ MINH HỌA 3 • VẬN DỤNG THẤP (15 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": "Đặt nhân tử chung để xuất hiện thừa số giống nhau rồi lập tỉ số triệt tiêu $u_1$!",
        "narration": "Chúng ta tiếp tục với Ví dụ 3: Cho cấp số nhân u n có công bội q dương thỏa mãn hệ phương trình: u 1 cộng u 3 bằng 10, và u 2 cộng u 4 bằng 20. Yêu cầu: Tìm số hạng đầu u 1, công bội q và tính tổng mười số hạng đầu tiên S 10 của cấp số nhân. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-amber-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-lg uppercase">Ví dụ 3 (Vận dụng)</span>
      <div class="countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-amber-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-amber-400 countdown-num">15s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-2">
      Cho cấp số nhân $(u_n)$ có công bội $q > 0$ thỏa mãn hệ phương trình:
    </p>
    <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-center font-mono text-amber-300 text-sm mb-3">
      $$\begin{cases} u_1 + u_3 = 10 \\ u_2 + u_4 = 20 \end{cases}$$
    </div>
    <p class="text-xs text-slate-300">
      <b>Yêu cầu:</b> Tìm số hạng đầu $u_1$, công bội $q$ và tính tổng 10 số hạng đầu tiên $S_{10}$.
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
        "subtitle": "PHƯƠNG PHÁP CHIA VẾ THEO VẾ TÌM CÔNG BỘI $q$",
        "mascotMode": "happy",
        "mascotTip": r"Lưu ý công thức tổng: $S_{10} = \frac{u_1(1 - q^{10})}{1 - q}$. Với $q=2$, mẫu là $1 - 2 = -1$!",
        "narration": "Hết 15 giây! Lời giải như sau: Sử dụng công thức số hạng tổng quát u n bằng u 1 nhân q mũ n trừ một. Phương trình thứ nhất trở thành: u 1 cộng u 1 nhân q bình phương, đặt u 1 làm nhân tử chung được u 1 nhân mở ngoặc 1 cộng q bình đóng ngoặc bằng 10. Phương trình thứ hai trở thành: u 1 nhân q cộng u 1 nhân q mũ ba, đặt u 1 nhân q làm nhân tử chung được u 1 nhân q nhân mở ngoặc 1 cộng q bình đóng ngoặc bằng 20. Chia phương trình hai cho phương trình một vế theo vế, ta triệt tiêu được u 1 nhân mở ngoặc 1 cộng q bình, thu được ngay q bằng 20 chia 10 bằng 2. Thay q bằng 2 vào phương trình một: u 1 nhân mở ngoặc 1 cộng 4 đóng ngoặc bằng 10, suy ra u 1 bằng 2. Tổng mười số hạng đầu tiên là: S 10 bằng 2 nhân mở ngoặc 1 trừ hai mũ mười đóng ngoặc chia cho 1 trừ 2, bằng 2 nhân 1023 bằng 2046.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Đặt nhân tử chung và lập tỉ số khử $u_1$</h4>
    </div>
    <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2">
      <p>Biểu diễn hệ theo $u_1$ và $q$:</p>
      <div class="text-amber-300 font-mono">
        $$\begin{cases} u_1 + u_1 q^2 = 10 \\ u_1 q + u_1 q^3 = 20 \end{cases} \iff \begin{cases} u_1(1 + q^2) = 10 \quad (1) \\ u_1 q(1 + q^2) = 20 \quad (2) \end{cases}$$
      </div>
      <p>Lấy $(2)$ chia cho $(1)$ vế theo vế:</p>
      <p class="text-cyan-300 font-semibold">• $\frac{u_1 q(1 + q^2)}{u_1(1 + q^2)} = \frac{20}{10} \implies \mathbf{q = 2}$ (thỏa mãn $q > 0$).</p>
      <p class="text-cyan-300 font-semibold">• Thay $q = 2$ vào $(1)$: $u_1(1 + 2^2) = 10 \implies 5u_1 = 10 \implies \mathbf{u_1 = 2}$.</p>
      <div class="bg-amber-950/40 p-2.5 rounded border border-amber-500/30 text-amber-200">
        👉 <b>Tổng 10 số hạng đầu:</b><br/>
        $$S_{10} = \frac{u_1(1 - q^{10})}{1 - q} = \frac{2(1 - 2^{10})}{1 - 2} = \frac{2(1 - 1024)}{-1} = 2 \times 1023 = \mathbf{2046}$$.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 4 - ĐỀ BÀI: BÀI TOÁN KẾT HỢP CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN",
        "subtitle": "VÍ DỤ MINH HỌA 4 • VẬN DỤNG CAO (30 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": "Ba số lập thành CSC có tổng bằng 15 thì gọi là $a - d, a, a + d$ để tìm ngay $a = 5$!",
        "narration": "Chúng ta đến với bài toán kinh điển kết hợp cả hai mô hình ở Ví dụ 4: Cho ba số x, y, z theo thứ tự lập thành một cấp số cộng có tổng bằng 15. Nếu lần lượt cộng thêm 1, 4, 19 vào ba số đó thì được ba số mới x cộng 1, y cộng 4, z cộng 19 theo thứ tự lập thành một cấp số nhân. Tìm ba số x, y, z ban đầu biết công sai d dương. Các em có 30 giây để tìm ra đáp án.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-rose-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-rose-500/20 text-rose-300 font-bold text-xs rounded-lg uppercase">Ví dụ 4 (Vận dụng cao)</span>
      <div class="countdown-clock-widget cd-30s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-rose-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-rose-400 countdown-num">30s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-2">
      Ba số $x, y, z$ theo thứ tự lập thành một cấp số cộng có tổng bằng $15$. Nếu lần lượt cộng thêm $1, 4, 19$ vào ba số đó thì được ba số mới $x + 1, y + 4, z + 19$ theo thứ tự lập thành một cấp số nhân.
    </p>
    <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-xs text-slate-300">
      Biết công sai của cấp số cộng ban đầu là số dương ($d > 0$). Hãy tìm bộ ba số $(x, y, z)$.
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KỸ THUẬT ĐẶT ẨN ĐỐI XỨNG $y-d, y, y+d$",
        "mascotMode": "happy",
        "mascotTip": "Kỹ thuật vàng: Đặt 3 số CSC là $y-d, y, y+d$ triệt tiêu ngay $d$ khi lấy tổng!",
        "narration": "Hết 30 giây! Lời giải như sau: Vì ba số x, y, z lập thành cấp số cộng nên ta đặt: x bằng y trừ d, z bằng y cộng d. Tổng ba số là: y trừ d cộng y cộng y cộng d bằng ba y bằng 15, suy ra ngay y bằng 5. Do đó ba số là 5 trừ d, 5, và 5 cộng d. Khi cộng thêm 1, 4, 19, ta được ba số mới là: số thứ nhất là 6 trừ d; số thứ hai là 5 cộng 4 bằng 9; số thứ ba là 24 cộng d. Vì ba số mới lập thành cấp số nhân nên tích hai số biên bằng bình phương số giữa: mở ngoặc 6 trừ d đóng ngoặc nhân mở ngoặc 24 cộng d đóng ngoặc bằng 9 bình phương bằng 81. Khai triển ta được phương trình bậc hai: âm d bình trừ 18 d cộng 144 bằng 81, hay d bình cộng 18 d trừ 63 bằng không. Giải phương trình ta được hai nghiệm: d bằng 3 hoặc d bằng âm 21. Vì đề bài cho d dương nên ta nhận d bằng 3. Với y bằng 5 và d bằng 3, ta tìm được: x bằng 2, y bằng 5, z bằng 8.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Áp dụng tính chất kết hợp CSC và CSN</h4>
    </div>
    <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2">
      <p><b>Bước 1:</b> Gọi 3 số hạng của CSC là $x = y - d, \; y, \; z = y + d$.</p>
      <p class="text-emerald-300 font-semibold">• Tổng 3 số: $(y - d) + y + (y + d) = 15 \iff 3y = 15 \implies \mathbf{y = 5}$.</p>
      <p>Khi đó 3 số là: $x = 5 - d, \; y = 5, \; z = 5 + d$.</p>

      <p><b>Bước 2:</b> Cộng thêm $1, 4, 19$ ta được 3 số mới:</p>
      <p class="text-amber-300 font-semibold">
        • $X = x + 1 = 6 - d$<br/>
        • $Y = y + 4 = 9$<br/>
        • $Z = z + 19 = 24 + d$
      </p>

      <p><b>Bước 3:</b> Ba số $X, Y, Z$ lập thành CSN nên $X \cdot Z = Y^2$:</p>
      <div class="text-cyan-300 font-mono">
        $$(6 - d)(24 + d) = 9^2 \iff 144 - 18d - d^2 = 81 \iff d^2 + 18d - 63 = 0$$
      </div>
      <p>Phương trình có 2 nghiệm: $d = 3$ (nhận vì $d > 0$) hoặc $d = -21$ (loại).</p>

      <div class="bg-rose-950/40 p-2.5 rounded border border-rose-500/30 text-rose-200 font-bold">
        👉 Kết luận bộ ba số cần tìm là: $\mathbf{x = 2, \; y = 5, \; z = 8}$.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. CẢNH BÁO CÁC BẪY THI THƯỜNG GẶP TRONG CHƯƠNG 2",
        "subtitle": "4 SAI LẦM KHIẾN HỌC SINH MẤT ĐIỂM ĐÁNG TIẾC",
        "mascotMode": "warning",
        "mascotTip": "Ghi nhớ: Cấp số nhân $u_n = u_1 q^{n-1}$, số mũ luôn là $n-1$, không bao giờ là $n$!",
        "narration": "Trước khi kết thúc Mục 1, Thầy Cú có 4 cảnh báo cạm bẫy đặc biệt quan trọng: Thứ nhất, khi tính số hạng tổng quát của cấp số nhân, rất nhiều bạn viết nhầm thành u n bằng u 1 nhân q mũ n thay vì n trừ 1. Thứ hai, nhầm lẫn giữa tính chất cấp số cộng và cấp số nhân: cấp số cộng là u k trừ một cộng u k cộng một bằng hai u k; còn cấp số nhân là tích bằng bình phương. Thứ ba, khi tính tổng cấp số nhân lùi vô hạn S bằng u 1 chia cho 1 trừ q, bắt buộc điều kiện là trị tuyệt đối của q phải nhỏ hơn 1. Nếu trị tuyệt đối của q lớn hơn hoặc bằng 1 mà vẫn áp dụng công thức này là sai hoàn toàn. Thứ tư, nhầm lẫn giữa số thứ tự n và giá trị số hạng u n.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-amber-950/30 p-3.5 rounded-xl border border-amber-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-lg">⚠️</span>
      <h3 class="text-sm font-bold text-amber-300">4 Cạm Bẫy Trắc Nghiệm Kinh Điển Chương 2</h3>
    </div>
    <div class="grid grid-cols-2 gap-2.5 text-xs">
      <div class="bg-slate-900/80 p-2.5 rounded border-l-4 border-rose-500">
        <span class="font-bold text-rose-400">1. Nhầm lẫn số mũ CSN:</span>
        <p class="text-slate-300 mt-1">Sai: $u_n = u_1 \cdot q^n$.<br/><b class="text-emerald-400">Đúng: $u_n = u_1 \cdot q^{n - 1}$</b> (Số mũ lùi 1 đơn vị).</p>
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded border-l-4 border-rose-500">
        <span class="font-bold text-rose-400">2. Lẫn lộn tính chất trung gian:</span>
        <p class="text-slate-300 mt-1">CSC: $u_{k-1} + u_{k+1} = \mathbf{2u_k}$ (Cộng đôi).<br/>CSN: $u_{k-1} \cdot u_{k+1} = \mathbf{(u_k)^2}$ (Nhân bình phương).</p>
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded border-l-4 border-amber-500">
        <span class="font-bold text-amber-400">3. Bẫy CSN lùi vô hạn:</span>
        <p class="text-slate-300 mt-1">Công thức $S = \frac{u_1}{1 - q}$ <b>chỉ áp dụng khi $|q| < 1$</b>. Nếu $|q| \ge 1$ thì tổng không tồn tại hữu hạn!</p>
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded border-l-4 border-amber-500">
        <span class="font-bold text-amber-400">4. Nhầm lẫn vị trí $n$ và giá trị $u_n$:</span>
        <p class="text-slate-300 mt-1">$n \in \mathbb{N}^*$ là số thứ tự (vị trí số hạng), còn $u_n \in \mathbb{R}$ là giá trị thực của số hạng đó.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
        "subtitle": "KẾT THÚC MỤC 1 • CHUYỂN SANG MỤC 2: 4 DẠNG TOÁN TRỌNG TÂM",
        "mascotMode": "happy",
        "mascotTip": "Chìa khóa vàng: Luôn quy mọi bài toán CSC về $(u_1, d)$ và CSN về $(u_1, q)$!",
        "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục 1 của bài ôn tập Chương 2! Chúng ta đã hệ thống hóa toàn bộ lý thuyết, so sánh đối xứng song song hai mô hình cấp số cộng và cấp số nhân, đồng thời rèn luyện 4 bài toán nhận diện và biến đổi nền tảng. Bây giờ, hãy chuẩn bị giấy bút để bước sang Mục 2: nơi chúng ta cùng giải quyết 4 dạng toán trọng tâm và các mô hình thực tế phân hóa cao xuất hiện trong các đề thi tuyển sinh.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-4 rounded-xl border border-emerald-500/40 text-center">
    <div class="inline-flex p-2 bg-emerald-500/20 rounded-full text-emerald-300 mb-2">
      <span class="text-2xl">🦉✨</span>
    </div>
    <h3 class="text-lg font-black text-emerald-200 mb-1">Bí Kíp Cốt Lõi Mục 1</h3>
    <p class="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
      Mọi bài toán phức tạp về Cấp số cộng hay Cấp số nhân đều được giải quyết nhẹ nhàng khi đưa về hệ 2 ẩn:<br/>
      <span class="text-emerald-400 font-bold">Cấp số cộng: Giải tìm bộ đôi $(u_1, d)$</span> | <span class="text-amber-400 font-bold">Cấp số nhân: Lập tỉ số tìm bộ đôi $(u_1, q)$</span>.
    </p>
    <div class="mt-3 flex justify-center gap-2">
      <span class="px-3 py-1 bg-emerald-600/30 text-emerald-300 rounded-full text-xs font-semibold border border-emerald-500/40">
        Đã sẵn sàng chuyển sang Mục 2 🚀
      </span>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 2: RÈN LUYỆN 4 DẠNG TOÁN TRỌNG TÂM & PHƯƠNG PHÁP GIẢI
# ==============================================================================
ONTAP_C2_MUC2_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. PHÂN LOẠI 4 DẠNG TOÁN TRỌNG TÂM CHƯƠNG 2",
        "subtitle": "MỤC 2 • MA TRẬN ĐỀ THI VÀ PHƯƠNG PHÁP GIẢI CHUẨN TẮC",
        "mascotMode": "pointer",
        "mascotTip": "4 dạng toán cốt lõi: Tính đơn điệu & bị chặn -> Bài toán thực tế CSC -> Tổng CSN lùi vô hạn -> Lãi kép & Tăng trưởng!",
        "narration": "Chào mừng các em đến với Mục 2: Rèn luyện 4 dạng toán trọng tâm và bài toán thực tế Chương 2. Trong các đề thi học kỳ và kỳ thi đánh giá năng lực, phần Dãy số - Cấp số thường tập trung vào 4 dạng toán chủ lực: Dạng 1 là xét tính tăng giảm và tính bị chặn của dãy phân thức hữu tỉ; Dạng 2 là bài toán thực tế áp dụng cấp số cộng vào quy luật xếp hàng, chia tiền hay khán đài; Dạng 3 là ứng dụng cấp số nhân lùi vô hạn để chuyển đổi số thập phân vô hạn tuần hoàn sang phân số tối giản; và Dạng 4 là bài toán tăng trưởng mũ, lãi kép và trả góp phân hóa sâu sắc.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-teal-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-teal-500/20 text-teal-300 font-bold text-xs rounded-lg uppercase">Bản đồ dạng bài</span>
      <h3 class="text-lg font-black text-teal-200">4 Dạng Toán Trọng Tâm Đề Thi Chương 2</h3>
    </div>
    <p class="text-xs text-slate-300">Mỗi dạng bài mang một công cụ giải toán đặc thù và ứng dụng thực tiễn cao:</p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-900/80 p-3 rounded-lg border-l-4 border-indigo-400">
      <h4 class="font-bold text-indigo-300 mb-1">🎯 Dạng 1: Đơn điệu & Bị chặn</h4>
      <p class="text-slate-300">Xét hiệu $u_{n+1} - u_n$ hoặc tỉ số $u_{n+1}/u_n$. Tách phần nguyên để tìm chặn trên $M$ và chặn dưới $m$.</p>
    </div>
    <div class="bg-slate-900/80 p-3 rounded-lg border-l-4 border-emerald-400">
      <h4 class="font-bold text-emerald-300 mb-1">🏛️ Dạng 2: Bài toán thực tế CSC</h4>
      <p class="text-slate-300">Xếp hàng rạp hát, tháp bậc thang, đào giếng... Khai thác linh hoạt $u_n = u_1 + (n - 1)d$ và $S_n = \frac{n(u_1 + u_n)}{2}$.</p>
    </div>
    <div class="bg-slate-900/80 p-3 rounded-lg border-l-4 border-amber-400">
      <h4 class="font-bold text-amber-300 mb-1">♾️ Dạng 3: Tổng CSN lùi vô hạn</h4>
      <p class="text-slate-300">Biểu diễn số thập phân vô hạn tuần hoàn sang phân số tối giản: $0,(a) = \frac{a}{10^k - 1}$ qua công thức $S = \frac{u_1}{1 - q}$.</p>
    </div>
    <div class="bg-slate-900/80 p-3 rounded-lg border-l-4 border-rose-400">
      <h4 class="font-bold text-rose-300 mb-1">📈 Dạng 4: Lãi kép & Tăng trưởng mũ</h4>
      <p class="text-slate-300">Mô hình $A_n = A(1 + r)^n$ hoặc phân rã bán rã. Dùng bất phương trình mũ hoặc logarit để tìm số chu kỳ $n$.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. CÔNG CỤ VÀ CHIẾN LƯỢC XỬ LÝ NHANH",
        "subtitle": "KỸ THUẬT PHÂN TÍCH VÀ CÔNG THỨC GIẢI NHANH",
        "mascotMode": "explain",
        "mascotTip": r"Phân thức bậc nhất $u_n = \frac{an+b}{cn+d}$: Tính tăng giảm phụ thuộc vào dấu của định thức $ad - bc$!",
        "narration": "Hãy lưu ý kỹ thuật giải nhanh tuyệt vời cho dãy phân thức bậc nhất u n bằng a n cộng b chia c n cộng d: Hiệu u n cộng 1 trừ u n luôn có dấu cùng với dấu của định thức a d trừ b c. Nếu a d trừ b c dương thì dãy luôn tăng; nếu âm thì dãy luôn giảm. Ngoài ra, giới hạn khi n tiến ra vô cực của dãy chính là tỉ số a chia c, đây cũng chính là một cận chặn tự nhiên của dãy số. Nắm chắc mẹo này giúp các em kết luận tính bị chặn chỉ trong 3 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30">
    <div class="flex items-center gap-2 mb-2">
      <span class="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
      <h3 class="text-sm font-bold text-cyan-300">Chiến Thuật Vàng: Dãy Phân Thức $u_n = \frac{an+b}{cn+d} \; (c > 0, n \ge 1)$</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/90 p-2.5 rounded border border-slate-700">
        <span class="font-bold text-emerald-400">1. Quy tắc xét dấu định thức:</span>
        <p class="text-slate-300 mt-1">
          $$u_{n+1} - u_n = \frac{ad - bc}{[c(n+1) + d](cn + d)}$$
          • Nếu $ad - bc > 0 \implies$ Dãy số <b>TĂNG</b>.<br/>
          • Nếu $ad - bc < 0 \implies$ Dãy số <b>GIẢM</b>.
        </p>
      </div>
      <div class="bg-slate-900/90 p-2.5 rounded border border-slate-700">
        <span class="font-bold text-amber-400">2. Quy tắc tìm hai đầu chặn:</span>
        <p class="text-slate-300 mt-1">
          • Điểm xuất phát: $u_1 = \frac{a+b}{c+d}$.<br/>
          • Điểm tiệm cận vô cực: $\lim u_n = \frac{a}{c}$.<br/>
          👉 Dãy tăng: $u_1 \le u_n < \frac{a}{c}$ $\implies$ Bị chặn.<br/>
          👉 Dãy giảm: $\frac{a}{c} < u_n \le u_1$ $\implies$ Bị chặn.
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1 - ĐỀ BÀI: XÉT TÍNH TĂNG GIẢM VÀ BỊ CHẶN",
        "subtitle": "DẠNG 1 • THÔNG HIỂU (15 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": "Lập hiệu $u_{n+1} - u_n$ và tách phần nguyên của phân thức!",
        "narration": "Chúng ta cùng làm Ví dụ 1: Xét tính tăng, giảm và tính bị chặn của dãy số u n cho bởi công thức: u n bằng hai n trừ một chia cho n cộng hai. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-indigo-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-lg uppercase">Ví dụ 1 (Dạng 1)</span>
      <div class="countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-indigo-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-indigo-400 countdown-num">15s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-3">
      Xét tính tăng, giảm và tính bị chặn của dãy số $(u_n)$ xác định bởi:
    </p>
    <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-center font-mono text-indigo-300 text-base">
      $$u_n = \frac{2n - 1}{n + 2} \quad (n \in \mathbb{N}^*)$$
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
        "subtitle": "CHỨNG MINH DÃY TĂNG VÀ BỊ CHẶN TOÀN DIỆN",
        "mascotMode": "happy",
        "mascotTip": r"Tách phần nguyên: $u_n = \frac{2(n+2) - 5}{n+2} = 2 - \frac{5}{n+2}$!",
        "narration": "Hết 15 giây! Lời giải như sau: Thứ nhất, về tính đơn điệu: ta xét hiệu u n cộng 1 trừ u n. Bằng hai nhân n cộng 1 trừ 1 chia cho n cộng 1 cộng 2, trừ đi hai n trừ 1 chia cho n cộng 2. Bằng hai n cộng 1 chia cho n cộng 3 trừ đi hai n trừ 1 chia cho n cộng 2. Quy đồng mẫu số, tử số là: mở ngoặc hai n cộng 1 đóng ngoặc nhân mở ngoặc n cộng 2 đóng ngoặc, trừ đi mở ngoặc hai n trừ 1 đóng ngoặc nhân mở ngoặc n cộng 3 đóng ngoặc, rút gọn đúng bằng 5. Vì 5 dương và mẫu luôn dương với mọi n thuộc N sao, nên hiệu này luôn lớn hơn không. Vậy u n là dãy số tăng. Thứ hai, về tính bị chặn: vì dãy tăng nên số hạng đầu tiên là số nhỏ nhất: u n lớn hơn hoặc bằng u 1 bằng một phần ba. Mặt khác, tách phần nguyên ta có u n bằng 2 trừ 5 chia cho n cộng 2. Vì 5 chia n cộng 2 luôn dương nên u n luôn nhỏ hơn 2. Vậy một phần ba nhỏ hơn hoặc bằng u n nhỏ hơn 2 với mọi n, kết luận dãy số bị chặn.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Xét tính đơn điệu và tính bị chặn</h4>
    </div>
    <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2">
      <p><b>1. Xét tính tăng, giảm:</b> Với mọi $n \ge 1$:</p>
      <div class="text-indigo-300 font-mono">
        $$u_{n+1} - u_n = \frac{2n + 1}{n + 3} - \frac{2n - 1}{n + 2} = \frac{(2n+1)(n+2) - (2n-1)(n+3)}{(n+3)(n+2)} = \frac{5}{(n+3)(n+2)} > 0$$
      </div>
      <p>👉 Vậy $(u_n)$ là <b>dãy số tăng</b>.</p>

      <p><b>2. Xét tính bị chặn:</b></p>
      <p>• Vì $(u_n)$ là dãy tăng nên: $u_n \ge u_1 = \frac{2(1) - 1}{1 + 2} = \mathbf{\frac{1}{3}} \implies (u_n)$ bị chặn dưới bởi $\frac{1}{3}$.</p>
      <p>• Mặt khác, tách phân thức: $u_n = \frac{2(n+2) - 5}{n+2} = 2 - \frac{5}{n+2} < \mathbf{2} \implies (u_n)$ bị chặn trên bởi $2$.</p>
      <div class="bg-indigo-950/40 p-2.5 rounded border border-indigo-500/30 text-indigo-200 font-bold">
        👉 Kết luận: $\frac{1}{3} \le u_n < 2, \; \forall n \in \mathbb{N}^*$. Dãy số $(u_n)$ <b>bị chặn</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 2 - ĐỀ BÀI: BÀI TOÁN THỰC TẾ RẠP HÁT",
        "subtitle": "DẠNG 2 • CẤP SỐ CỘNG THỰC TẾ (15 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": "Quy về CSC với $u_1 = 20, d = 4$. Dùng $u_{15}$ cho hàng 15 và $S_{25}$ cho tổng khán giả!",
        "narration": "Chúng ta cùng đến với bài toán thực tế ở Ví dụ 2: Một rạp hát có các hàng ghế được xếp thành hình vòng cung mở rộng dần. Hàng ghế đầu tiên có 20 ghế, mỗi hàng ghế tiếp theo có nhiều hơn hàng liền trước 4 ghế. Hỏi: Câu a: Hàng ghế thứ 15 có bao nhiêu ghế? Câu b: Nếu rạp hát có tất cả 25 hàng ghế thì tổng sức chứa của rạp là bao nhiêu khán giả? Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-emerald-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase">Ví dụ 2 (Thực tế CSC)</span>
      <div class="countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-emerald-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-emerald-400 countdown-num">15s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-2">
      Một rạp hát thiết kế các hàng ghế theo quy luật:
    </p>
    <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-1 mb-2">
      <p>• Hàng ghế đầu tiên có <b>$20$ ghế</b>.</p>
      <p>• Mỗi hàng ghế sau nhiều hơn hàng ghế liền trước <b>$4$ ghế</b>.</p>
    </div>
    <p class="text-xs text-emerald-300 font-bold">
      a) Hàng thứ 15 có bao nhiêu chiếc ghế?<br/>
      b) Nếu rạp có tất cả 25 hàng ghế thì rạp chứa được tối đa bao nhiêu khán giả?
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
        "subtitle": "MÔ HÌNH HÓA TOÁN HỌC VÀ TÍNH TỔNG $S_{25}$",
        "mascotMode": "happy",
        "mascotTip": r"Tính nhanh: $S_{25} = \frac{25 \times [2(20) + 24(4)]}{2} = \frac{25 \times 136}{2} = 25 \times 68 = 1700$!",
        "narration": "Hết 15 giây! Lời giải như sau: Số ghế ở mỗi hàng lập thành một cấp số cộng với số hạng đầu u 1 bằng 20 và công sai d bằng 4. Ở câu a: Số ghế của hàng thứ 15 là số hạng thứ 15: u 15 bằng u 1 cộng 14 d, bằng 20 cộng 14 nhân 4, bằng 20 cộng 56 bằng 76 chiếc ghế. Ở câu b: Tổng số ghế của toàn bộ 25 hàng ghế chính là tổng 25 số hạng đầu tiên của cấp số cộng: S 25 bằng 25 nhân mở ngoặc vuông hai lần u 1 cộng 24 nhân d đóng ngoặc vuông chia 2. Thay số vào: bằng 25 nhân mở ngoặc hai nhân 20 cộng 24 nhân 4 đóng ngoặc chia 2, bằng 25 nhân 136 chia 2, bằng 25 nhân 68 bằng 1700 ghế. Vậy rạp hát chứa được tối đa 1700 khán giả.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Mô hình cấp số cộng: $u_1 = 20, d = 4$</h4>
    </div>
    <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2">
      <p>Số ghế ở mỗi hàng lập thành cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 20$, công sai $d = 4$.</p>
      
      <p><b>a) Số ghế ở hàng thứ 15:</b></p>
      <div class="text-emerald-300 font-mono">
        $$u_{15} = u_1 + 14d = 20 + 14 \times 4 = 20 + 56 = \mathbf{76} \text{ (ghế)}$$
      </div>

      <p><b>b) Tổng số ghế của cả 25 hàng ghế:</b></p>
      <div class="text-emerald-300 font-mono">
        $$S_{25} = \frac{25[2u_1 + 24d]}{2} = \frac{25[2(20) + 24(4)]}{2} = \frac{25 \times 136}{2} = 25 \times 68 = \mathbf{1700} \text{ (ghế)}$$
      </div>

      <div class="bg-emerald-950/40 p-2.5 rounded border border-emerald-500/30 text-emerald-200 font-bold">
        👉 Đáp số: a) Hàng thứ 15 có <b>76 ghế</b> | b) Sức chứa tối đa: <b>1700 khán giả</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 3 - ĐỀ BÀI: CHUYỂN SỐ THẬP PHÂN VÔ HẠN TUẦN HOÀN SANG PHÂN SỐ",
        "subtitle": "DẠNG 3 • TỔNG CẤP SỐ NHÂN LÙI VÔ HẠN (15 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": r"Phân tích: $0,(23) = \frac{23}{100} + \frac{23}{100^2} + ...$ có $u_1 = \frac{23}{100}, q = \frac{1}{100}$!",
        "narration": "Chúng ta cùng đến với dạng toán rất hay gặp ở Ví dụ 3: Biểu diễn số thập phân vô hạn tuần hoàn sau đây dưới dạng phân số tối giản bằng cách sử dụng tổng của cấp số nhân lùi vô hạn: Số A bằng không phẩy chu kỳ hai mươi ba, tức là không phẩy hai ba hai ba hai ba kéo dài vô tận. Các em có 15 giây để xác định số hạng đầu và công bội.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-amber-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-lg uppercase">Ví dụ 3 (CSN lùi vô hạn)</span>
      <div class="countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-amber-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-amber-400 countdown-num">15s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-3">
      Biểu diễn số thập phân vô hạn tuần hoàn sau dưới dạng phân số tối giản:
    </p>
    <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-center font-mono text-amber-300 text-base">
      $$A = 0,(23) = 0,232323...$$
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
        "subtitle": "ÁP DỤNG CÔNG THỨC $S = \frac{u_1}{1 - q}$",
        "mascotMode": "happy",
        "mascotTip": r"Mẹo tổng quát: $0,(abc...) = \frac{abc...}{999...}$ (mẫu có số chữ số 9 bằng độ dài chu kỳ)!",
        "narration": "Hết 15 giây! Lời giải như sau: Ta viết số A dưới dạng tổng của các phân số thập phân: A bằng không phẩy hai ba cộng không phẩy không không hai ba cộng không phẩy không không không không hai ba, kéo dài vô tận. Tức là bằng hai mươi ba phần một trăm cộng hai mươi ba phần một trăm bình phương cộng hai mươi ba phần một trăm mũ ba, vân vân. Đây chính là tổng của một cấp số nhân lùi vô hạn có số hạng đầu u 1 bằng hai mươi ba phần một trăm và công bội q bằng một phần một trăm. Do trị tuyệt đối của q bằng không phẩy không một nhỏ hơn một, nên áp dụng công thức tổng cấp số nhân lùi vô hạn: A bằng u 1 chia cho 1 trừ q, bằng hai mươi ba phần một trăm chia cho một trừ một phần một trăm, bằng hai mươi ba phần một trăm chia cho chín mươi chín phần một trăm, rút gọn được đúng bằng hai mươi ba phần chín mươi chín.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Khai triển số thập phân thành chuỗi số vô hạn</h4>
    </div>
    <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2">
      <p>Ta phân tích số $A$:</p>
      <div class="text-amber-300 font-mono">
        $$A = 0,23 + 0,0023 + 0,000023 + ... = \frac{23}{10^2} + \frac{23}{10^4} + \frac{23}{10^6} + ...$$
      </div>
      <p>Đây là tổng của cấp số nhân lùi vô hạn có:</p>
      <p class="text-cyan-300 font-semibold">• Số hạng đầu: $u_1 = \frac{23}{100}$.</p>
      <p class="text-cyan-300 font-semibold">• Công bội: $q = \frac{1}{100}$ (thỏa mãn $|q| = 0,01 < 1$).</p>
      
      <p>Áp dụng công thức tổng CSN lùi vô hạn:</p>
      <div class="text-emerald-300 font-mono text-sm">
        $$A = \frac{u_1}{1 - q} = \frac{\frac{23}{100}}{1 - \frac{1}{100}} = \frac{\frac{23}{100}}{\frac{99}{100}} = \mathbf{\frac{23}{99}}$$
      </div>

      <div class="bg-amber-950/40 p-2.5 rounded border border-amber-500/30 text-amber-200 font-bold">
        👉 Kết luận: Phân số tối giản cần tìm là $\mathbf{\frac{23}{99}}$.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 4 - ĐỀ BÀI: BÀI TOÁN LÃI KÉP TIẾT KIỆM NGÂN HÀNG",
        "subtitle": "DẠNG 4 • MÔ HÌNH LÃI KÉP & BẤT PHƯƠNG TRÌNH MŨ (30 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": "Công thức lãi kép: $T = A(1 + r)^n$. Đặt $A(1 + r)^n > 350$ triệu để tìm $n$ nguyên nhỏ nhất!",
        "narration": "Chúng ta đến với bài toán thực tế Vận dụng cao ở Ví dụ 4: Bác An gửi tiết kiệm số tiền 200 triệu đồng vào ngân hàng với lãi suất 6 phần trăm một năm theo hình thức lãi kép, tức là tiền lãi của mỗi năm được gộp vào vốn để tính lãi cho năm tiếp theo. Giả sử lãi suất không thay đổi trong suốt quá trình gửi và bác An không rút tiền ra. Hỏi sau ít nhất bao nhiêu năm thì tổng số tiền cả gốc lẫn lãi bác An nhận được sẽ vượt quá 350 triệu đồng? Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-rose-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-rose-500/20 text-rose-300 font-bold text-xs rounded-lg uppercase">Ví dụ 4 (Lãi kép thực tế)</span>
      <div class="countdown-clock-widget cd-30s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-rose-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-rose-400 countdown-num">30s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-2">
      Bác An gửi tiết kiệm ngân hàng:
    </p>
    <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-1 mb-2">
      <p>• Số tiền gốc ban đầu: <b>$A = 200$ triệu đồng</b>.</p>
      <p>• Lãi suất: <b>$r = 6\%$/năm</b> (hình thức lãi kép, lãi nhập vốn hàng năm).</p>
    </div>
    <p class="text-xs text-rose-300 font-bold">
      Hỏi sau ít nhất bao nhiêu năm, tổng số tiền bác An nhận được (cả gốc và lãi) vượt quá 350 triệu đồng?
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
        "subtitle": "GIẢI BẤT PHƯƠNG TRÌNH MŨ & QUY TẮC LÀM TRÒN LÊN",
        "mascotMode": "happy",
        "mascotTip": "Khi $n > 9,59$, vì số năm gửi phải là số nguyên nên phải làm tròn lên thành 10 năm!",
        "narration": "Hết 30 giây! Lời giải như sau: Gọi n là số năm bác An gửi tiền. Số tiền nhận được sau n năm theo công thức lãi kép là: T n bằng A nhân mở ngoặc 1 cộng r đóng ngoặc mũ n, bằng 200 nhân mở ngoặc 1 cộng không phẩy không sáu đóng ngoặc mũ n, bằng 200 nhân một phẩy không sáu mũ n triệu đồng. Để số tiền vượt quá 350 triệu đồng, ta có bất phương trình: 200 nhân một phẩy không sáu mũ n lớn hơn 350. Chia hai vế cho 200, ta được: một phẩy không sáu mũ n lớn hơn một phẩy bảy lăm. Lấy logarit cơ số một phẩy không sáu của hai vế, ta được: n lớn hơn logarit cơ số một phẩy không sáu của một phẩy bảy lăm, xấp xỉ 9 phẩy 59 năm. Vì số năm gửi ngân hàng phải là một số nguyên dương, nên sau ít nhất 10 năm, số tiền bác An nhận được sẽ vượt quá 350 triệu đồng.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Mô hình tăng trưởng lãi kép: $T_n = A(1 + r)^n$</h4>
    </div>
    <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2">
      <p>Số tiền cả gốc lẫn lãi sau $n$ năm là:</p>
      <div class="text-rose-300 font-mono">
        $$T_n = 200 \times (1 + 0,06)^n = 200 \times (1,06)^n \text{ (triệu đồng)}$$
      </div>
      <p>Để số tiền vượt quá $350$ triệu đồng, ta có bất phương trình:</p>
      <div class="text-cyan-300 font-mono">
        $$200 \times (1,06)^n > 350 \iff (1,06)^n > \frac{350}{200} = 1,75$$
      </div>
      <p>Lấy logarit tự nhiên hoặc logarit cơ số $1,06$ hai vế:</p>
      <div class="text-emerald-300 font-mono">
        $$n > \log_{1,06}(1,75) = \frac{\ln(1,75)}{\ln(1,06)} \approx 9,59 \text{ (năm)}$$
      </div>
      <p class="text-slate-300">Vì số năm gửi ngân hàng phải là số nguyên ($n \in \mathbb{N}^*$):</p>
      <div class="bg-rose-950/40 p-2.5 rounded border border-rose-500/30 text-rose-200 font-bold">
        👉 Sau ít nhất <b>10 năm</b> thì số tiền bác An nhận được vượt quá $350$ triệu đồng.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. CẢNH BÁO BẪY THI TRONG BÀI TOÁN THỰC TẾ & LÃI KÉP",
        "subtitle": "CẨN TRỌNG ĐƠN VỊ THỜI GIAN VÀ QUY TẮC LÀM TRÒN",
        "mascotMode": "warning",
        "mascotTip": "Quy tắc bắt buộc: Bài toán thực tế tìm số lần/số năm thì $n > 9,01$ vẫn phải làm tròn lên thành 10!",
        "narration": "Trước khi kết thúc Mục 2, Thầy Cú có 3 lưu ý đắt giá về bài toán thực tế: Một là: quy tắc làm tròn thời gian. Khi giải ra n lớn hơn 9 phẩy 01 thì bắt buộc phải làm tròn lên thành 10 năm, vì hết năm thứ 9 số tiền vẫn chưa đủ vượt ngưỡng. Hai là: đồng nhất đơn vị lãi suất và kỳ hạn. Nếu lãi suất cho theo năm nhưng gửi theo kỳ hạn quý hoặc tháng thì phải chia tỉ lệ tương ứng. Ba là: phân biệt lãi đơn và lãi kép. Lãi đơn chỉ sinh lãi trên vốn ban đầu; còn lãi kép thì lãi nhập vào vốn để tiếp tục sinh lãi.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-amber-950/30 p-3.5 rounded-xl border border-amber-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-lg">⚠️</span>
      <h3 class="text-sm font-bold text-amber-300">3 Lỗi Sai Thường Gặp Trong Bài Toán Thực Tế</h3>
    </div>
    <div class="grid grid-cols-3 gap-2.5 text-xs">
      <div class="bg-slate-900/80 p-2.5 rounded border-l-4 border-rose-500">
        <span class="font-bold text-rose-400">1. Làm tròn số học thông thường:</span>
        <p class="text-slate-300 mt-1">Sai: $n > 9,1$ làm tròn xuống $9$.<br/><b class="text-emerald-400">Đúng: Phải làm tròn lên (Ceiling) thành 10</b> vì sau 9 năm chưa đạt yêu cầu.</p>
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded border-l-4 border-rose-500">
        <span class="font-bold text-rose-400">2. Lẫn lộn kỳ hạn tính lãi:</span>
        <p class="text-slate-300 mt-1">Lãi suất năm $r$, nhưng tính lãi theo quý thì lãi suất mỗi kỳ là $\frac{r}{4}$ và số kỳ sau $t$ năm là $4t$.</p>
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded border-l-4 border-amber-500">
        <span class="font-bold text-amber-400">3. Nhầm Lãi đơn & Lãi kép:</span>
        <p class="text-slate-300 mt-1">Lãi đơn: $T_n = A(1 + nr)$ (tăng tuyến tính).<br/>Lãi kép: $T_n = A(1 + r)^n$ (tăng theo cấp số nhân).</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. TỔNG KẾT MỤC 2 & BÍ KÍP CÚ THÔNG THÁI",
        "subtitle": "KẾT THÚC MỤC 2 • CHUYỂN SANG MỤC 3: CASIO 580 & ĐỀ TỔNG ÔN",
        "mascotMode": "happy",
        "mascotTip": "Chuyển sang Mục 3: Học bí kíp bấm máy Casio fx-580VN X giải đề trắc nghiệm chuẩn Bộ GD&ĐT!",
        "narration": "Chúc mừng các em đã làm chủ 4 dạng toán trọng tâm của Chương 2! Chúng ta đã nắm vững phương pháp chứng minh tính đơn điệu và bị chặn, giải quyết bài toán rạp hát với cấp số cộng, chuyển đổi số thập phân vô hạn tuần hoàn bằng cấp số nhân lùi vô hạn, và xử lý bài toán lãi kép bằng bất phương trình mũ. Bây giờ, chúng ta sẽ bước sang Mục 3: Cảnh báo bẫy trắc nghiệm, Kỹ năng Casio fx 580VN X và thực chiến đề tổng ôn theo đúng cấu trúc đề thi của Bộ Giáo dục và Đào tạo.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-4 rounded-xl border border-emerald-500/40 text-center">
    <div class="inline-flex p-2 bg-emerald-500/20 rounded-full text-emerald-300 mb-2">
      <span class="text-2xl">🦉🎯</span>
    </div>
    <h3 class="text-lg font-black text-emerald-200 mb-1">Hoàn Thành Mục 2 Xuất Sắc!</h3>
    <p class="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
      Các em đã trang bị đầy đủ công cụ phân tích và mô hình hóa thực tế.<br/>
      Hãy tiếp tục giữ vững phong độ để chinh phục các mẹo bấm máy Casio đỉnh cao ở Mục 3!
    </p>
    <div class="mt-3 flex justify-center gap-2">
      <span class="px-3 py-1 bg-emerald-600/30 text-emerald-300 rounded-full text-xs font-semibold border border-emerald-500/40">
        Sẵn sàng bước vào Mục 3: Kỹ năng Casio 🚀
      </span>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 3: CẢNH BÁO BẪY TRẮC NGHIỆM, KỸ NĂNG CASIO 580 & ĐỀ TỔNG ÔN
# ==============================================================================
ONTAP_C2_MUC3_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. CHIẾN THUẬT CASIO FX-580VN X TRONG DÃY SỐ VÀ CẤP SỐ",
        "subtitle": "MỤC 3 • LẬP TRÌNH BÀI TOÁN DÃY SỐ TRÊN MÁY TÍNH CẦM TAY",
        "mascotMode": "pointer",
        "mascotTip": "3 phím chức năng thần thánh: [TABLE] Menu 8 quét dãy số; [Ans] tính dãy truy hồi; [Shift][x] tính tổng xích-ma!",
        "narration": "Chào mừng các em đến với Mục 3: Kỹ năng máy tính Casio fx 580VN X và Đề tổng ôn chuẩn cấu trúc Bộ Giáo dục và Đào tạo. Máy tính cầm tay là một trợ thủ đắc lực giúp các em kiểm tra kết quả và giải nhanh trắc nghiệm trong phòng thi. Trong Chương 2, có ba tính năng vượt trội: Một là chức năng bảng giá trị Bảng Menu 8 để quét bảng giá trị tính tăng giảm và bị chặn; Hai là phím Ans kết hợp hai chấm để lập trình vòng lặp giải dãy số truy hồi; và Ba là phím tính tổng chuỗi xích-ma để tính tổng n số hạng của cấp số cộng và cấp số nhân chỉ trong hai giây.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-cyan-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 font-bold text-xs rounded-lg uppercase">Kỹ năng Casio</span>
      <h3 class="text-lg font-black text-cyan-200">3 Tính Năng Vượt Trội Trên Casio fx-580VN X</h3>
    </div>
    <p class="text-xs text-slate-300">Làm chủ các phím bấm giúp tăng tốc độ làm bài gấp 3 lần và triệt tiêu sai sót tính toán:</p>
  </div>

  <div class="grid grid-cols-3 gap-3 text-xs">
    <div class="bg-slate-900/80 p-3 rounded-lg border-t-4 border-cyan-400">
      <h4 class="font-bold text-cyan-300 mb-1">📊 1. Bảng Giá Trị [MENU] [8]</h4>
      <p class="text-slate-300 leading-relaxed">• Nhập $f(x) = u_n$.<br/>• Start: 1, End: 20, Step: 1.<br/>• Quan sát cột $f(x)$ để kết luận tính tăng/giảm và giá trị chặn $m, M$.</p>
    </div>
    <div class="bg-slate-900/80 p-3 rounded-lg border-t-4 border-emerald-400">
      <h4 class="font-bold text-emerald-300 mb-1">🔁 2. Vòng lặp [Ans] Truy hồi</h4>
      <p class="text-slate-300 leading-relaxed">• Nhập giá trị ban đầu $u_1$ [=].<br/>• Nhập công thức: $f(\text{Ans})$ rồi bấm liên tục phím [=] để tính $u_2, u_3, u_4...$ nhanh chóng.</p>
    </div>
    <div class="bg-slate-900/80 p-3 rounded-lg border-t-4 border-amber-400">
      <h4 class="font-bold text-amber-300 mb-1">∑ 3. Tổng Xích-ma [SHIFT] [x]</h4>
      <p class="text-slate-300 leading-relaxed">• Phím $\sum_{x=1}^n f(x)$.<br/>• Tính trực tiếp tổng $S_n$ mà không cần nhớ công thức biến đổi trung gian.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. CẤU TRÚC ĐỀ THI TOÁN CHUẨN MỚI CỦA BỘ GD&ĐT",
        "subtitle": "ĐỊNH DẠNG 3 PHẦN: NHIỀU LỰA CHỌN, ĐÚNG/SAI VÀ TRẢ LỜI NGẮN",
        "mascotMode": "explain",
        "mascotTip": "Phần II (Đúng/Sai) có 4 ý a, b, c, d với thang điểm lũy tiến 0.1 - 0.25 - 0.5 - 1.0 điểm!",
        "narration": "Kỳ thi tốt nghiệp Trung học phổ thông và các bài kiểm tra định kỳ hiện nay áp dụng cấu trúc đề chuẩn mới gồm 3 phần rõ rệt: Phần 1 gồm các câu trắc nghiệm nhiều lựa chọn 4 phương án A, B, C, D quen thuộc. Phần 2 là dạng câu hỏi Trắc nghiệm Đúng Sai: mỗi câu có 4 mệnh đề a, b, c, d; học sinh cần phân tích tính đúng sai của từng ý, thang điểm lũy tiến tối đa 1 điểm cho một câu nếu trả lời đúng cả 4 ý. Phần 3 là dạng câu hỏi Trắc nghiệm Trả lời ngắn: học sinh tự tính toán và điền đáp số vào phiếu, không có gợi ý phương án. Ngay sau đây, chúng ta sẽ thực hành các dạng bài chuẩn này.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30">
    <div class="flex items-center gap-2 mb-2">
      <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
      <h3 class="text-sm font-bold text-emerald-300">Cấu Trúc Đề Thi Môn Toán Chuẩn Bộ GD&ĐT</h3>
    </div>
    <div class="grid grid-cols-3 gap-3 text-xs">
      <div class="bg-slate-900/90 p-2.5 rounded border border-slate-700">
        <span class="font-bold text-indigo-400">Phần I: Trắc nghiệm 4 lựa chọn</span>
        <p class="text-slate-300 mt-1">Gồm các câu hỏi 4 phương án $A, B, C, D$, chỉ có duy nhất 1 phương án đúng. Mỗi câu đúng được <b>0,25 điểm</b>.</p>
      </div>
      <div class="bg-slate-900/90 p-2.5 rounded border border-slate-700">
        <span class="font-bold text-emerald-400">Phần II: Câu hỏi Đúng / Sai</span>
        <p class="text-slate-300 mt-1">Mỗi câu có 4 ý $a, b, c, d$.<br/>• Đúng 1 ý: 0,1 đ.<br/>• Đúng 2 ý: 0,25 đ.<br/>• Đúng 3 ý: 0,5 đ.<br/>• Đúng cả 4 ý: <b>1,0 điểm</b>.</p>
      </div>
      <div class="bg-slate-900/90 p-2.5 rounded border border-slate-700">
        <span class="font-bold text-amber-400">Phần III: Câu trả lời ngắn</span>
        <p class="text-slate-300 mt-1">Học sinh tự giải toán và tô đáp số vào khung số trên phiếu trả lời. Mỗi câu đúng được <b>0,5 điểm</b>.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1 - ĐỀ BÀI: TÍNH SỐ HẠNG DÃY TRUY HỒI BẰNG CASIO",
        "subtitle": "KỸ THUẬT VÒNG LẶP ANS TRUY HỒI (15 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": "Bấm: 2 [=], sau đó gõ: 3 x Ans - 2 rồi bấm [=] liên tiếp để ra $u_2, u_3...$!",
        "narration": "Chúng ta bắt đầu với Ví dụ 1: Cho dãy số u n xác định bởi công thức truy hồi: u 1 bằng 2, và u n cộng 1 bằng 3 lần u n trừ 2 với mọi n lớn hơn hoặc bằng 1. Yêu cầu: Hãy tìm số hạng thứ 6 của dãy số u 6. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-cyan-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 font-bold text-xs rounded-lg uppercase">Ví dụ 1 (Casio Truy Hồi)</span>
      <div class="countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-cyan-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-cyan-400 countdown-num">15s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-3">
      Cho dãy số $(u_n)$ xác định bởi hệ thức truy hồi:
    </p>
    <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-center font-mono text-cyan-300 text-sm mb-3">
      $$\begin{cases} u_1 = 2 \\ u_{n+1} = 3u_n - 2 \quad (n \ge 1) \end{cases}$$
    </div>
    <p class="text-xs text-slate-300">
      <b>Yêu cầu:</b> Tính giá trị số hạng thứ sáu $u_6$.
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT HỢP BẤM MÁY VÀ CÔNG THỨC TỔNG QUÁT",
        "mascotMode": "happy",
        "mascotTip": r"Quy luật: $u_{n+1} - 1 = 3(u_n - 1) \implies u_n - 1 = (u_1 - 1) \cdot 3^{n-1} \implies u_n = 3^{n-1} + 1$!",
        "narration": "Hết 15 giây! Lời giải như sau: Cách một bấm máy Casio siêu tốc: Bước một, bấm 2 rồi ấn phím bằng để gán giá trị 2 vào biến Ans. Bước hai, gõ biểu thức 3 nhân Ans trừ 2. Bước ba, ấn dấu bằng lần thứ nhất ta được u 2 bằng 4; ấn dấu bằng lần hai được u 3 bằng 10; lần ba được u 4 bằng 28; lần bốn được u 5 bằng 82; và ấn dấu bằng lần thứ năm ta thu được u 6 bằng 244. Cách hai dùng công thức: Ta biến đổi u n cộng 1 trừ 1 bằng 3 lần mở ngoặc u n trừ 1 đóng ngoặc. Đặt v n bằng u n trừ 1 thì v n là cấp số nhân có v 1 bằng 1 và công bội q bằng 3. Do đó v n bằng 3 mũ n trừ một, suy ra u n bằng 3 mũ n trừ một cộng một. Với n bằng 6, ta có u 6 bằng 3 mũ 5 cộng một, bằng 243 cộng 1 bằng 244.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Hai cách xử lý: Máy tính Casio & Công thức tổng quát</h4>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/90 p-2.5 rounded border border-cyan-500/30">
        <span class="font-bold text-cyan-400">Cách 1: Quy trình bấm Casio fx-580VN X:</span>
        <ul class="text-slate-300 mt-1 space-y-1 list-disc pl-4">
          <li>Bấm: <span class="bg-slate-800 px-1 py-0.5 rounded font-mono text-cyan-300">2 [=]</span> (lưu $u_1$).</li>
          <li>Nhập: <span class="bg-slate-800 px-1 py-0.5 rounded font-mono text-cyan-300">3 × [Ans] - 2</span>.</li>
          <li>Bấm <span class="text-cyan-300">[=]</span> lần 1: $u_2 = 4$.</li>
          <li>Bấm <span class="text-cyan-300">[=]</span> lần 2: $u_3 = 10$.</li>
          <li>Bấm <span class="text-cyan-300">[=]</span> lần 3: $u_4 = 28$.</li>
          <li>Bấm <span class="text-cyan-300">[=]</span> lần 4: $u_5 = 82$.</li>
          <li>Bấm <span class="text-cyan-300">[=]</span> lần 5: $\mathbf{u_6 = 244}$.</li>
        </ul>
      </div>
      <div class="bg-slate-900/90 p-2.5 rounded border border-emerald-500/30">
        <span class="font-bold text-emerald-400">Cách 2: Giải tích số học đưa về CSN:</span>
        <p class="text-slate-300 mt-1 leading-relaxed">
          Biến đổi hệ thức truy hồi:<br/>
          $u_{n+1} - 1 = 3(u_n - 1)$<br/>
          Đặt $v_n = u_n - 1 \implies v_{n+1} = 3v_n$.<br/>
          $(v_n)$ là CSN có $v_1 = u_1 - 1 = 1$, công bội $q = 3$.<br/>
          $\implies v_n = 1 \cdot 3^{n-1} = 3^{n-1}$.<br/>
          $\implies u_n = v_n + 1 = 3^{n-1} + 1$.<br/>
          Với $n = 6$:<br/>
          $u_6 = 3^5 + 1 = 243 + 1 = \mathbf{244}$.
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 2 - ĐỀ BÀI: TÍNH TỔNG DÃY SỐ BẰNG PHÍM XÍCH-MA",
        "subtitle": "KỸ THUẬT TÍNH NHANH TỔNG BẰNG PHÍM $\sum$ (15 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": r"Phím [SHIFT] [x] cho phép tính $\sum_{x=1}^{50} u_x$. Với CSC: $u_x = 5 + (x - 1) \cdot 3$!",
        "narration": "Chúng ta tiếp tục với Ví dụ 2: Cho cấp số cộng u n có số hạng đầu u 1 bằng 5 và công sai d bằng 3. Hãy tính tổng của 50 số hạng đầu tiên: S 50 bằng u 1 cộng u 2 cộng chấm chấm cộng u 50. Các em có 15 giây suy nghĩ để tính nhẩm bằng công thức hoặc thiết lập phép tính trên máy tính.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-emerald-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase">Ví dụ 2 (Casio Tính Tổng)</span>
      <div class="countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-emerald-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-emerald-400 countdown-num">15s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-3">
      Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 5$ và công sai $d = 3$.
    </p>
    <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-center font-mono text-emerald-300 text-base mb-3">
      $$S_{50} = u_1 + u_2 + u_3 + \dots + u_{50} = ?$$
    </div>
    <p class="text-xs text-slate-300">
      <b>Yêu cầu:</b> Tính giá trị $S_{50}$ và kiểm chứng bằng phím bấm $\sum$ trên Casio fx-580VN X.
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT HỢP CÔNG THỨC TỔNG CSC VÀ PHÍM $\sum$ TRÊN MÁY TÍNH",
        "mascotMode": "happy",
        "mascotTip": "Bấm phím: [SHIFT] [x] nhập (5 + (x - 1) * 3) với x chạy từ 1 đến 50 -> Kết quả: 3925!",
        "narration": "Hết 15 giây! Lời giải như sau: Cách một dùng công thức toán học: Áp dụng công thức S n bằng n nhân mở ngoặc vuông hai lần u 1 cộng n trừ 1 nhân d đóng ngoặc vuông chia 2. Ta có: S 50 bằng 50 nhân mở ngoặc vuông hai nhân 5 cộng 49 nhân 3 đóng ngoặc vuông chia 2, bằng 25 nhân mở ngoặc 10 cộng 147 đóng ngoặc, bằng 25 nhân 157 bằng 3925. Cách hai dùng phím xích-ma trên Casio: Ta ấn Shift phím x dưới nút nguồn. Trên màn hình hiện ra ký hiệu xích-ma. Ta nhập biểu thức số hạng tổng quát: 5 cộng mở ngoặc x trừ 1 đóng ngoặc nhân 3; cận dưới nhập x bằng 1; cận trên nhập 50. Nhấn dấu bằng, máy tính xuất ngay kết quả chính xác 3925 chỉ trong một giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Hai cách tính tổng $S_{50}$</h4>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/90 p-2.5 rounded border border-emerald-500/30">
        <span class="font-bold text-emerald-400">Cách 1: Áp dụng công thức tổng CSC:</span>
        <div class="text-slate-300 mt-1 space-y-1">
          $$S_{50} = \frac{50[2u_1 + 49d]}{2}$$
          $$= 25 \times [2(5) + 49(3)]$$
          $$= 25 \times (10 + 147)$$
          $$= 25 \times 157 = \mathbf{3925}$$.
        </div>
      </div>
      <div class="bg-slate-900/90 p-2.5 rounded border border-cyan-500/30">
        <span class="font-bold text-cyan-400">Cách 2: Bấm phím $\sum$ trên Casio fx-580:</span>
        <div class="text-slate-300 mt-1 space-y-1">
          <p>• Nhấn: <span class="bg-slate-800 px-1 py-0.5 rounded font-mono text-cyan-300">[SHIFT] [x]</span></p>
          <p>• Nhập biểu thức: $5 + (x - 1) \times 3$</p>
          <p>• Cận dưới: $x = 1$ | Cận trên: $50$</p>
          <div class="bg-slate-950 p-1.5 rounded font-mono text-cyan-300 text-center my-1">
            $$\sum_{x=1}^{50} (5 + 3(x-1)) = \mathbf{3925}$$
          </div>
          <p class="text-emerald-300 font-semibold">👉 Máy hiển thị ngay 3925.</p>
        </div>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 3 - ĐỀ BÀI: CÂU HỎI ĐÚNG / SAI CHUẨN ĐỀ BỘ GD&ĐT",
        "subtitle": "PHẦN II • CÂU HỎI ĐÚNG / SAI 4 Ý (30 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": "Phần II: Xét tính đúng sai của từng ý độc lập: ý a tính $u_5$; ý b tìm $u_n$; ý c giải $u_n = 2023$; ý d tính $S_{20}$!",
        "narration": "Chúng ta đến với câu hỏi dạng Đúng Sai theo chuẩn đề thi của Bộ Giáo dục và Đào tạo ở Ví dụ 3: Cho cấp số cộng u n có số hạng đầu u 1 bằng 3 và công sai d bằng 4. Xét tính Đúng hoặc Sai của bốn mệnh đề sau: Ý a: Số hạng thứ năm u 5 bằng 19. Ý b: Số hạng tổng quát u n bằng bốn n trừ một. Ý c: Số 2023 là một số hạng của cấp số cộng đã cho. Ý d: Tổng hai mươi số hạng đầu tiên S 20 bằng 820. Các em có 30 giây để xác định tính đúng sai của cả 4 mệnh đề.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-indigo-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-lg uppercase">Ví dụ 3 (Dạng Đúng / Sai)</span>
      <div class="countdown-clock-widget cd-30s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-indigo-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-indigo-400 countdown-num">30s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-2">
      Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 3$ và công sai $d = 4$. Xét tính Đúng/Sai của các mệnh đề sau:
    </p>
    <div class="space-y-2 text-xs">
      <div class="p-2.5 bg-slate-900/80 rounded border border-slate-700 flex items-center justify-between">
        <span class="text-slate-200"><b>a)</b> Số hạng thứ năm của cấp số cộng là $u_5 = 19$.</span>
        <span class="px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-[11px] font-mono">[Đ / S ?]</span>
      </div>
      <div class="p-2.5 bg-slate-900/80 rounded border border-slate-700 flex items-center justify-between">
        <span class="text-slate-200"><b>b)</b> Công thức số hạng tổng quát của cấp số cộng là $u_n = 4n - 1$.</span>
        <span class="px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-[11px] font-mono">[Đ / S ?]</span>
      </div>
      <div class="p-2.5 bg-slate-900/80 rounded border border-slate-700 flex items-center justify-between">
        <span class="text-slate-200"><b>c)</b> Số $2023$ là một số hạng của cấp số cộng đã cho.</span>
        <span class="px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-[11px] font-mono">[Đ / S ?]</span>
      </div>
      <div class="p-2.5 bg-slate-900/80 rounded border border-slate-700 flex items-center justify-between">
        <span class="text-slate-200"><b>d)</b> Tổng của 20 số hạng đầu tiên là $S_{20} = 820$.</span>
        <span class="px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-[11px] font-mono">[Đ / S ?]</span>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ: a) ĐÚNG • b) ĐÚNG • c) ĐÚNG • d) ĐÚNG",
        "mascotMode": "happy",
        "mascotTip": r"Thẩm định: $u_5 = 3 + 4(4) = 19$; $4n-1=2023 \implies 4n=2024 \implies n=506 \in \mathbb{N}^*$; $S_{20} = 20[6 + 19(4)]/2 = 820$!",
        "narration": "Hết 30 giây! Chúng ta cùng thẩm định từng mệnh đề: Ở ý a: u 5 bằng u 1 cộng 4 d, bằng 3 cộng 4 nhân 4 bằng 19. Mệnh đề a là ĐÚNG. Ở ý b: u n bằng u 1 cộng n trừ 1 nhân d, bằng 3 cộng n trừ 1 nhân 4, bằng 4 n trừ 1. Mệnh đề b là ĐÚNG. Ở ý c: Giả sử 2023 là số hạng thứ n, ta có phương trình: 4 n trừ 1 bằng 2023, suy ra 4 n bằng 2024, tương đương n bằng 506. Vì 506 là số nguyên dương nên 2023 chính là số hạng thứ 506 của dãy. Mệnh đề c là ĐÚNG. Ở ý d: Tổng hai mươi số hạng đầu là S 20 bằng 20 nhân mở ngoặc vuông hai lần u 1 cộng 19 d đóng ngoặc vuông chia 2, bằng 10 nhân mở ngoặc 6 cộng 19 nhân 4 đóng ngoặc, bằng 10 nhân mở ngoặc 6 cộng 76 đóng ngoặc, bằng 10 nhân 82 bằng 820. Mệnh đề d là ĐÚNG. Cả bốn mệnh đề đều đúng, đạt trọn vẹn 1 điểm.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded">Đáp án chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Thẩm định tính Đúng/Sai của từng ý</h4>
    </div>
    <div class="space-y-2 text-xs">
      <div class="p-2 bg-slate-900/90 rounded border border-emerald-500/40">
        <div class="flex justify-between items-center mb-1">
          <span class="text-slate-200"><b>a)</b> $u_5 = u_1 + 4d = 3 + 4(4) = 19$.</span>
          <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-bold">ĐÚNG</span>
        </div>
      </div>
      <div class="p-2 bg-slate-900/90 rounded border border-emerald-500/40">
        <div class="flex justify-between items-center mb-1">
          <span class="text-slate-200"><b>b)</b> $u_n = u_1 + (n - 1)d = 3 + 4(n - 1) = 4n - 1$.</span>
          <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-bold">ĐÚNG</span>
        </div>
      </div>
      <div class="p-2 bg-slate-900/90 rounded border border-emerald-500/40">
        <div class="flex justify-between items-center mb-1">
          <span class="text-slate-200"><b>c)</b> Cho $4n - 1 = 2023 \iff 4n = 2024 \iff n = 506 \in \mathbb{N}^*$.</span>
          <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-bold">ĐÚNG</span>
        </div>
      </div>
      <div class="p-2 bg-slate-900/90 rounded border border-emerald-500/40">
        <div class="flex justify-between items-center mb-1">
          <span class="text-slate-200"><b>d)</b> $S_{20} = \frac{20[2(3) + 19(4)]}{2} = 10 \times (6 + 76) = 10 \times 82 = 820$.</span>
          <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-bold">ĐÚNG</span>
        </div>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 4 - ĐỀ BÀI: CÂU HỎI TRẢ LỜI NGẮN (SINH HỌC & CSN)",
        "subtitle": "PHẦN III • CÂU HỎI TRẢ LỜI NGẮN (30 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": r"4 giờ = 240 phút = 12 chu kỳ phân đôi. Sau 12 chu kỳ: $N = 100 \times 2^{12}$!",
        "narration": "Chúng ta đến với câu hỏi dạng Trả lời ngắn theo chuẩn Phần 3 ở Ví dụ 4: Trong một phòng thí nghiệm sinh học, người ta nghiên cứu sự sinh trưởng của một loài vi khuẩn. Biết rằng cứ sau 20 phút thì mỗi tế bào vi khuẩn lại nhân đôi một lần. Giả sử ban đầu có đúng 100 tế bào vi khuẩn và các điều kiện môi trường đều tối ưu để toàn bộ tế bào đều phân chia bình thường. Hỏi sau đúng 4 giờ, số lượng vi khuẩn trong môi trường nuôi cấy là bao nhiêu tế bào? Các em có 30 giây để tính toán đáp số.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-rose-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-rose-500/20 text-rose-300 font-bold text-xs rounded-lg uppercase">Ví dụ 4 (Dạng Trả lời ngắn)</span>
      <div class="countdown-clock-widget cd-30s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-rose-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-rose-400 countdown-num">30s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-2">
      Một quần thể vi khuẩn nhân đôi sau mỗi $20$ phút:
    </p>
    <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-1 mb-2">
      <p>• Số lượng vi khuẩn ban đầu: <b>$N_0 = 100$ vi khuẩn</b>.</p>
      <p>• Chu kỳ phân đôi: <b>$20$ phút/lần</b>.</p>
    </div>
    <p class="text-xs text-rose-300 font-bold">
      Hỏi sau 4 giờ nuôi cấy, số lượng vi khuẩn là bao nhiêu tế bào?
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ: 409600 TẾ BÀO VI KHUẨN",
        "mascotMode": "happy",
        "mascotTip": r"Tính: $2^{12} = 4096 \implies N = 100 \times 4096 = 409600$ tế bào!",
        "narration": "Hết 30 giây! Lời giải chi tiết như sau: Đổi 4 giờ bằng 240 phút. Vì cứ sau 20 phút vi khuẩn lại phân đôi một lần, nên sau 4 giờ số chu kỳ phân đôi là: 240 chia 20 bằng 12 chu kỳ. Số lượng vi khuẩn sau mỗi chu kỳ lập thành một cấp số nhân: Ban đầu có N 0 bằng 100; sau chu kỳ thứ nhất có N 1 bằng 100 nhân 2; sau chu kỳ thứ hai có N 2 bằng 100 nhân hai mũ hai. Do đó, sau chu kỳ thứ 12, số lượng vi khuẩn là: N 12 bằng N 0 nhân hai mũ 12, bằng 100 nhân 4096, bằng 409600 tế bào vi khuẩn. Đáp số học sinh tô vào phiếu trả lời là 409600.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Mô hình phân bào theo Cấp số nhân</h4>
    </div>
    <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2">
      <p><b>Bước 1: Tính số chu kỳ phân bào:</b></p>
      <p class="text-cyan-300 font-semibold">• Đổi: $4 \text{ giờ} = 4 \times 60 = 240 \text{ phút}$.</p>
      <p class="text-cyan-300 font-semibold">• Số lần phân chia: $k = \frac{240}{20} = \mathbf{12} \text{ (lần)}$.</p>

      <p><b>Bước 2: Thiết lập cấp số nhân:</b></p>
      <p>Mỗi lần phân đôi, số lượng vi khuẩn tăng gấp $2$ lần ($q = 2$).</p>
      <div class="text-emerald-300 font-mono text-sm">
        $$N = N_0 \times 2^k = 100 \times 2^{12} = 100 \times 4096 = \mathbf{409600} \text{ (tế bào)}$$
      </div>

      <div class="bg-rose-950/40 p-2.5 rounded border border-rose-500/30 text-rose-200 font-bold">
        👉 Đáp số điền vào phiếu trả lời trắc nghiệm: <b class="text-white text-base">409600</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. TỔNG HỢP 5 CẠM BẪY ĐỀ THI TỐT NGHIỆP VÀ ĐGNL",
        "subtitle": "BỘ LỌC CẢNH BÁO BẢO TOÀN ĐIỂM SỐ TUYỆT ĐỐI",
        "mascotMode": "warning",
        "mascotTip": "Ghi nhớ: Đề thi thường gài bẫy công sai âm $d < 0$, công bội âm $q < 0$ và số hạng không xác định!",
        "narration": "Để bảo toàn điểm số tuyệt đối trong kỳ thi, các em hãy ghi nhớ 5 chiếc bẫy tinh vi thường được người ra đề gài vào: Một là: công bội q âm. Khi q âm, các số hạng của cấp số nhân sẽ đan dấu âm dương xen kẽ, nếu đề bài hỏi số hạng thứ mấy mang dấu dương thì phải xét số mũ chẵn lẻ cẩn thận. Hai là: bài toán ba số lập thành cấp số nhân có tích bằng hằng số, luôn tồn tại hai trường hợp của công bội q. Ba là: bẫy điều kiện công sai d bằng 0. Khi d bằng 0, cấp số cộng là một dãy hằng số. Bốn là: quên điều kiện n thuộc N sao khi giải phương trình tìm vị trí số hạng. Năm là: nhầm lẫn giữa chu kỳ phân chia ban đầu và số hạng thứ n của dãy số.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-amber-950/30 p-3.5 rounded-xl border border-amber-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-lg">🛡️</span>
      <h3 class="text-sm font-bold text-amber-300">5 Cạm Bẫy Đề Thi Đánh Giá Năng Lực & Tốt Nghiệp</h3>
    </div>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-900/80 p-2 rounded border-l-4 border-rose-500">
        <span class="font-bold text-rose-400">1. Cấp số nhân đan dấu ($q < 0$):</span>
        <p class="text-slate-300 mt-0.5">Dãy có các số hạng xen kẽ dấu, cẩn thận dấu âm khi lũy thừa chẵn lẻ: $(-2)^n$ khác $-2^n$.</p>
      </div>
      <div class="bg-slate-900/80 p-2 rounded border-l-4 border-rose-500">
        <span class="font-bold text-rose-400">2. Phương trình tìm $n$ có nghiệm lẻ:</span>
        <p class="text-slate-300 mt-0.5">Nếu giải ra $n = 15,4$ thì số đó <b>không thuộc</b> dãy số (vì $n$ phải là số nguyên dương).</p>
      </div>
      <div class="bg-slate-900/80 p-2 rounded border-l-4 border-amber-500">
        <span class="font-bold text-amber-400">3. Trường hợp công bội kép:</span>
        <p class="text-slate-300 mt-0.5">$q^2 = 4 \implies q = 2$ hoặc $q = -2$. Đọc kỹ đề bài có yêu cầu $q > 0$ hay không!</p>
      </div>
      <div class="bg-slate-900/80 p-2 rounded border-l-4 border-amber-500">
        <span class="font-bold text-amber-400">4. Đếm số khoảng cách chu kỳ:</span>
        <p class="text-slate-300 mt-0.5">Khoảng cách giữa số hạng thứ $m$ và thứ $n$ là $(n - m)d$, chứ không phải $(n - m + 1)d$.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. TỔNG KẾT TOÀN BỘ CHƯƠNG 2 & LỜI CHÚC TỪ THẦY CÚ",
        "subtitle": "HOÀN THÀNH TOÀN DIỆN CHƯƠNG II: DÃY SỐ, CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN",
        "mascotMode": "happy",
        "mascotTip": "Thầy chúc các em tự tin bứt phá điểm 9, 10 trong tất cả các bài kiểm tra và kỳ thi sắp tới!",
        "narration": "Chúc mừng tất cả các em học sinh thân yêu đã hoàn thành trọn vẹn toàn bộ Chương 2: Dãy số, Cấp số cộng và Cấp số nhân! Qua bài học này, các em đã sở hữu trong tay toàn bộ hệ thống lý thuyết, phương pháp giải 4 dạng toán cốt lõi, thành thạo các kỹ năng bấm máy tính Casio fx 580VN X và làm quen với cấu trúc đề thi 3 phần chuẩn của Bộ Giáo dục và Đào tạo. Hãy tự tin áp dụng những bí kíp này để bứt phá điểm số cao trong các bài kiểm tra định kỳ và kỳ thi sắp tới. Hẹn gặp lại các em ở Chương 3: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm!",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-900/60 via-teal-900/60 to-cyan-900/60 p-4 rounded-xl border border-emerald-500/40 text-center">
    <div class="inline-flex p-3 bg-emerald-500/20 rounded-full text-emerald-300 mb-2">
      <span class="text-3xl">🎓🦉🏆</span>
    </div>
    <h3 class="text-xl font-black text-emerald-200 mb-1">CHÚC MỪNG HOÀN THÀNH XUẤT SẮC CHƯƠNG 2!</h3>
    <p class="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
      Các em đã làm chủ trọn vẹn 3 bài học và toàn bộ các dạng toán Dãy số - Cấp số cộng - Cấp số nhân chuẩn Bộ GD&ĐT.<br/>
      Hẹn gặp lại các em tại <b>Chương 3: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm</b>!
    </p>
    <div class="mt-3 flex justify-center gap-2">
      <span class="px-3.5 py-1 bg-emerald-600/40 text-emerald-200 rounded-full text-xs font-bold border border-emerald-400/50 shadow-lg">
        Tự tin chinh phục điểm 10 môn Toán 11 🌟
      </span>
    </div>
  </div>
</div>
"""
    }
]

print("ch2_ontap_data.py initialized: ONTAP_C2_MUC1_SCENES, ONTAP_C2_MUC2_SCENES, ONTAP_C2_MUC3_SCENES ready.")
