// Dedicated Curriculum Data for Grade 11 Chapter 4 (Part 2: Bài 13, Bài 14, Ôn tập C4)
module.exports = {
  // BÀI 13
  bai13: {
    id: "toan11_bai13",
    lessonTitle: "Bài 13: Hai mặt phẳng song song",
    grade: "Lớp 11",
    matcherStr: `(title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 13") || t.includes("hai mặt phẳng song song")) && !t.includes("ứng dụng");
      }`,
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: "Mục 1: Khái niệm & Điều kiện để hai mặt phẳng song song",
        sgkHtml: `<p>Nội dung cốt lõi Mục 1 Sách giáo khoa Toán 11 Kết Nối Tri Thức:</p>
<ul class="list-disc ml-5 space-y-1.5">
  <li><strong>1. Định nghĩa hai mặt phẳng song song:</strong> Hai mặt phẳng được gọi là song song với nhau nếu chúng không có điểm chung. Kí hiệu: $(P) \\parallel (Q) \\iff (P) \\cap (Q) = \\emptyset$.</li>
  <li><strong>2. Điều kiện để hai mặt phẳng song song (Định lí 1):</strong> Nếu mặt phẳng $(\\alpha)$ chứa hai đường thẳng cắt nhau $a, b$ và $a, b$ cùng song song với mặt phẳng $(\\beta)$ thì $(\\alpha) \\parallel (\\beta)$.</li>
  <li><strong>3. Công thức suy luận ngắn gọn:</strong> $\\begin{cases} a \\subset (\\alpha), b \\subset (\\alpha) \\\\ a \\cap b = \\{I\\} \\\\ a \\parallel (\\beta), b \\parallel (\\beta) \\end{cases} \\implies (\\alpha) \\parallel (\\beta)$.</li>
</ul>`,
        noteHtml: `Hai đường thẳng $a, b$ trong $(\\alpha)$ <strong>bắt buộc phải cắt nhau</strong>. Nếu $a \\parallel b$ thì dù cả hai cùng song song với $(\\beta)$, ta vẫn chưa thể kết luận $(\\alpha) \\parallel (\\beta)$ (khi đó $(\\alpha)$ có thể cắt $(\\beta)$).`,
        mistakeHtml: `Chỉ chỉ ra 1 đường thẳng trong $(\\alpha)$ song song với $(\\beta)$ rồi vội vã kết luận hai mặt phẳng song song là sai lầm phổ biến nhất!`,
        tipHtml: `Tìm 2 đường thẳng cắt nhau trong mặt phẳng này lần lượt song song với 2 đường thẳng cắt nhau trong mặt phẳng kia là phương pháp chứng minh nhanh nhất!`,
        mcqs: [
          {
            question: "**Câu 1:** Trong không gian, cho hai mặt phẳng phân biệt $(P)$ và $(Q)$. Khẳng định nào sau đây là ĐÚNG?",
            options: [
              "A. Hai mặt phẳng không có điểm chung thì song song với nhau.",
              "B. Hai mặt phẳng có một điểm chung thì song song với nhau.",
              "C. Hai mặt phẳng cùng song song với một đường thẳng thì song song với nhau.",
              "D. Hai mặt phẳng cắt nhau theo một điểm."
            ],
            correct: "A",
            explanation: "Theo định nghĩa SGK Toán 11, hai mặt phẳng song song nếu chúng không có bất kì điểm chung nào.",
            hint1: "Xem lại định nghĩa hai mặt phẳng song song.",
            hint2: "Không có điểm chung nghĩa là giao nhau bằng rỗng."
          },
          {
            question: "**Câu 2:** Cho hai đường thẳng cắt nhau $a, b$ cùng nằm trong mặt phẳng $(P)$ và cùng song song với mặt phẳng $(Q)$. Khẳng định nào sau đây ĐÚNG?",
            options: [
              "A. $(P) \\parallel (Q)$",
              "B. $(P)$ cắt $(Q)$",
              "C. $(P) \\equiv (Q)$",
              "D. $a \\parallel b$"
            ],
            correct: "A",
            explanation: "Theo Định lí 1 về điều kiện hai mặt phẳng song song: nếu mặt phẳng $(P)$ chứa 2 đường thẳng cắt nhau cùng song song với $(Q)$ thì $(P) \\parallel (Q)$.",
            hint1: "Định lí 1 SGK Toán 11 KNTT.",
            hint2: "2 đường thẳng cắt nhau cùng song song với mặt phẳng thứ hai."
          },
          {
            question: "**Câu 3:** Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Gọi $M, N$ lần lượt là trung điểm của $SA, SB$. Mặt phẳng $(OMN)$ song song với mặt phẳng nào sau đây?",
            options: [
              "A. $(SCD)$",
              "B. $(SBC)$",
              "C. $(SAB)$",
              "D. $(ABCD)$"
            ],
            correct: "A",
            explanation: "Trong tam giác $SAB$, $MN$ là đường trung bình nên $MN \\parallel AB \\parallel CD \\subset (SCD)$. Trong tam giác $SAC$, $OM$ là đường trung bình nên $OM \\parallel SC \\subset (SCD)$. Hai đường thẳng $MN$ và $OM$ cắt nhau tại $M$ cùng song song với $(SCD) \\implies (OMN) \\parallel (SCD)$.",
            hint1: "Xét các đường trung bình trong tam giác SAB và SAC.",
            hint2: "MN // CD và OM // SC."
          }
        ]
      },
      {
        sectionNumber: 2,
        sectionTitle: "Mục 2: Tính chất của hai mặt phẳng song song & Định lí Ta-lét trong không gian",
        sgkHtml: `<p>Nội dung cốt lõi Mục 2 Sách giáo khoa Toán 11 Kết Nối Tri Thức:</p>
<ul class="list-disc ml-5 space-y-1.5">
  <li><strong>1. Tính chất tồn tại và duy nhất:</strong> Qua một điểm nằm ngoài một mặt phẳng cho trước, có một và chỉ một mặt phẳng song song với mặt phẳng đã cho.</li>
  <li><strong>2. Hệ quả quan trọng:</strong> Hai mặt phẳng phân biệt cùng song song với một mặt phẳng thứ ba thì song song với nhau.</li>
  <li><strong>3. Định lí 2 (Giao tuyến song song):</strong> Cho hai mặt phẳng song song. Nếu một mặt phẳng thứ ba cắt cả hai mặt phẳng đó thì hai giao tuyến phải song song với nhau: $\\begin{cases} (\\alpha) \\parallel (\\beta) \\\\ (\\gamma) \\cap (\\alpha) = a \\\\ (\\gamma) \\cap (\\beta) = b \\end{cases} \\implies a \\parallel b$.</li>
  <li><strong>4. Định lí Ta-lét trong không gian:</strong> Ba mặt phẳng đôi một song song chắn trên hai cát tuyến bất kì các đoạn thẳng tương ứng tỉ lệ: $\\frac{A_1B_1}{A_2B_2} = \\frac{B_1C_1}{B_2C_2} = \\frac{A_1C_1}{A_2C_2}$.</li>
</ul>`,
        noteHtml: `Hai đường thẳng song song chắn giữa hai mặt phẳng song song thì bằng nhau: Nếu $(\\alpha) \\parallel (\\beta)$ và $a \\parallel b$ cắt $(\\alpha), (\\beta)$ tại $A, B$ và $A', B'$ thì $AB = A'B'$.`,
        mistakeHtml: `Nhầm lẫn rằng hai cát tuyến trong định lí Ta-lét phải cùng nằm trên một mặt phẳng. Trong không gian, hai cát tuyến có thể chéo nhau định lí Ta-lét vẫn hoàn toàn đúng!`,
        tipHtml: `Vận dụng Định lí giao tuyến song song để dựng nhanh thiết diện: Khi mặt phẳng cắt qua hai mặt đối diện song song, hai giao tuyến tạo ra luôn song song với nhau!`,
        mcqs: [
          {
            question: "**Câu 4:** Qua một điểm $M$ nằm ngoài mặt phẳng $(P)$, có bao nhiêu mặt phẳng đi qua $M$ và song song với $(P)$?",
            options: [
              "A. Duy nhất 1",
              "B. Vô số",
              "C. 2",
              "D. 0"
            ],
            correct: "A",
            explanation: "Theo tính chất thừa nhận của SGK Toán 11: Qua một điểm ngoài một mặt phẳng có duy nhất 1 mặt phẳng song song với mặt phẳng đó.",
            hint1: "Tính chất cơ bản về tính duy nhất của mặt phẳng song song.",
            hint2: "Duy nhất một mặt phẳng."
          },
          {
            question: "**Câu 5:** Cho hai mặt phẳng song song $(P)$ và $(Q)$. Mặt phẳng $(R)$ cắt $(P)$ và $(Q)$ theo hai giao tuyến phân biệt $a$ và $b$. Khi đó:",
            options: [
              "A. $a \\parallel b$",
              "B. $a$ cắt $b$",
              "C. $a$ và $b$ chéo nhau",
              "D. $a \\perp b$"
            ],
            correct: "A",
            explanation: "Theo Định lí 2: Mặt phẳng cắt hai mặt phẳng song song theo hai giao tuyến song song với nhau.",
            hint1: "Định lí giao tuyến song song.",
            hint2: "Hai giao tuyến a và b cùng nằm trên mặt phẳng (R) và không có điểm chung nên song song."
          },
          {
            question: "**Câu 6:** Ba mặt phẳng song song $(P), (Q), (R)$ cắt đường thẳng $d$ tại $A, B, C$ và cắt $d'$ tại $A', B', C'$. Biết $AB = 3, BC = 6, A'B' = 2$. Độ dài đoạn thẳng $B'C'$ bằng:",
            options: [
              "A. $4$",
              "B. $5$",
              "C. $6$",
              "D. $3$"
            ],
            correct: "A",
            explanation: "Theo định lí Ta-lét trong không gian: $\\frac{A'B'}{B'C'} = \\frac{AB}{BC} \\implies \\frac{2}{B'C'} = \\frac{3}{6} = \\frac{1}{2} \\implies B'C' = 4$.",
            hint1: "Áp dụng công thức tỉ số định lí Ta-lét.",
            hint2: "B'C' = (A'B' * BC) / AB."
          }
        ]
      },
      {
        sectionNumber: 3,
        sectionTitle: "Mục 3: Hình lăng trụ, hình hộp và hình chóp cụt",
        sgkHtml: `<p>Nội dung cốt lõi Mục 3 Sách giáo khoa Toán 11 Kết Nối Tri Thức:</p>
<ul class="list-disc ml-5 space-y-1.5">
  <li><strong>1. Hình lăng trụ:</strong> Là hình đa diện có hai đáy là hai đa giác bằng nhau nằm trên hai mặt phẳng song song; các mặt bên là những hình bình hành; các cạnh bên song song và bằng nhau.</li>
  <li><strong>2. Hình hộp:</strong> Là hình lăng trụ có đáy là hình bình hành. Hình hộp có 6 mặt đều là các hình bình hành, 8 đỉnh, 12 cạnh, và 4 đường chéo đồng quy tại trung điểm mỗi đường.</li>
  <li><strong>3. Hình chóp cụt:</strong> Cắt một hình chóp bởi một mặt phẳng song song với đáy, phần nằm giữa mặt phẳng cắt và mặt đáy gọi là hình chóp cụt. Hai đáy là hai đa giác đồng dạng nằm trên hai mặt phẳng song song; các mặt bên là hình thang.</li>
</ul>`,
        noteHtml: `Tên gọi của hình lăng trụ phụ thuộc vào đa giác đáy: Lăng trụ tam giác, lăng trụ tứ giác, lăng trụ ngũ giác... Tương tự với hình chóp cụt.`,
        mistakeHtml: `Nhầm lẫn các mặt bên của hình lăng trụ đứng với lăng trụ xiên. Ở lăng trụ tổng quát, các mặt bên chỉ là <strong>hình bình hành</strong>, chưa chắc là hình chữ nhật!`,
        tipHtml: `Ghi nhớ công thức số phần tử của lăng trụ đáy $n$-giác: Có $2n$ đỉnh, $3n$ cạnh (gồm $2n$ cạnh đáy và $n$ cạnh bên), và $n+2$ mặt (2 đáy và $n$ mặt bên)!`,
        mcqs: [
          {
            question: "**Câu 7:** Các mặt bên của một hình lăng trụ bất kì luôn là:",
            options: [
              "A. Hình bình hành",
              "B. Hình chữ nhật",
              "C. Hình thoi",
              "D. Hình thang cân"
            ],
            correct: "A",
            explanation: "Theo định nghĩa hình lăng trụ trong SGK Toán 11: Các mặt bên của hình lăng trụ luôn luôn là hình bình hành.",
            hint1: "Xem lại định nghĩa các mặt bên của lăng trụ.",
            hint2: "Mỗi mặt bên giới hạn bởi hai cạnh bên song song bằng nhau và hai cạnh đáy song song."
          },
          {
            question: "**Câu 8:** Một hình hộp có tất cả bao nhiêu đường chéo nối các cặp đỉnh đối diện nhau?",
            options: [
              "A. 4",
              "B. 6",
              "C. 8",
              "D. 12"
            ],
            correct: "A",
            explanation: "Hình hộp $ABCD.A'B'C'D'$ có đúng 4 đường chéo: $AC', BD', CA', DB'$. Bốn đường chéo này cắt nhau tại trung điểm của mỗi đường.",
            hint1: "Đếm các đoạn thẳng nối 2 đỉnh đối diện qua tâm hình hộp.",
            hint2: "Hình hộp có 8 đỉnh chia thành 4 cặp đối đỉnh."
          },
          {
            question: "**Câu 9:** Các mặt bên của một hình chóp cụt luôn là hình gì?",
            options: [
              "A. Hình thang",
              "B. Hình bình hành",
              "C. Hình tam giác",
              "D. Hình chữ nhật"
            ],
            correct: "A",
            explanation: "Theo định nghĩa hình chóp cụt: Các mặt bên của hình chóp cụt luôn là những hình thang (vì hai cạnh đáy song song nằm trên 2 mặt phẳng đáy song song).",
            hint1: "Cắt các mặt bên tam giác của hình chóp ban đầu bởi mặt phẳng song song với đáy.",
            hint2: "Hai cạnh đáy đối diện song song tạo thành hình thang."
          }
        ]
      }
    ],
    tfQuestions: [
      {
        id: 1,
        title: "Câu 1: Cho hình hộp $ABCD.A'B'C'D'$. Xét tính Đúng/Sai của các khẳng định sau:",
        items: [
          {
            key: "a",
            text: "Mặt phẳng $(ABCD)$ song song với mặt phẳng $(A'B'C'D')$.",
            correct: "true",
            explain: "Hai đáy của hình hộp là hai hình bình hành nằm trong hai mặt phẳng song song."
          },
          {
            key: "b",
            text: "Đường thẳng $AA'$ song song với mặt phẳng $(CDD'C')$.",
            correct: "true",
            explain: "Vì $AA' \\parallel DD'$ mà $DD' \\subset (CDD'C') \\implies AA' \\parallel (CDD'C')$."
          },
          {
            key: "c",
            text: "Mặt phẳng $(BDA')$ song song với mặt phẳng $(B'D'C)$.",
            correct: "true",
            explain: "Ta có $BD \\parallel B'D'$ và $A'B \\parallel D'C$ (các mặt bên là hình bình hành) $\\implies (BDA') \\parallel (B'D'C)$."
          },
          {
            key: "d",
            text: "Đường chéo $AC'$ không cắt mặt phẳng $(BDA')$.",
            correct: "false",
            explain: "Đường chéo $AC'$ đi xuyên qua và cắt mặt phẳng $(BDA')$ tại trọng tâm tam giác $BDA'$."
          }
        ]
      },
      {
        id: 2,
        title: "Câu 2: Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Gọi $M, N, P, Q$ lần lượt là trung điểm của $SA, SB, SC, SD$:",
        items: [
          {
            key: "a",
            text: "Mặt phẳng $(MNPQ)$ song song với mặt phẳng $(ABCD)$.",
            correct: "true",
            explain: "Do $MN \\parallel AB$ và $NP \\parallel BC$ nên $(MNPQ) \\parallel (ABCD)$."
          },
          {
            key: "b",
            text: "Đường thẳng $MN$ song song với mặt phẳng $(SCD)$.",
            correct: "true",
            explain: "Vì $MN \\parallel AB \\parallel CD \\subset (SCD) \\implies MN \\parallel (SCD)$."
          },
          {
            key: "c",
            text: "Thiết diện của hình chóp cắt bởi mặt phẳng $(MNPQ)$ là hình tam giác.",
            correct: "false",
            explain: "Thiết diện là tứ giác $MNPQ$ (hình bình hành)."
          },
          {
            key: "d",
            text: "Diện tích tứ giác $MNPQ$ bằng một nửa diện tích đáy $ABCD$.",
            correct: "false",
            explain: "Vì tỉ số đồng dạng là $1/2$ nên diện tích $MNPQ$ bằng $(1/2)^2 = 1/4$ diện tích đáy $ABCD$."
          }
        ]
      },
      {
        id: 3,
        title: "Câu 3: Xét tính Đúng/Sai của các mệnh đề lý thuyết về quan hệ song song trong không gian:",
        items: [
          {
            key: "a",
            text: "Hai mặt phẳng phân biệt cùng song song với một mặt phẳng thứ ba thì song song với nhau.",
            correct: "true",
            explain: "Đây là hệ quả trực tiếp từ định nghĩa và tiên đề tồn tại duy nhất mặt phẳng song song."
          },
          {
            key: "b",
            text: "Nếu hai mặt phẳng song song thì mọi đường thẳng trong mặt phẳng này đều song song với mọi đường thẳng trong mặt phẳng kia.",
            correct: "false",
            explain: "Hai đường thẳng thuộc hai mặt phẳng song song có thể song song hoặc chéo nhau, không bao giờ cắt nhau."
          },
          {
            key: "c",
            text: "Qua một điểm nằm ngoài một mặt phẳng cho trước, có một và chỉ một mặt phẳng song song với mặt phẳng đó.",
            correct: "true",
            explain: "Định lí cơ bản thừa nhận trong SGK Toán 11."
          },
          {
            key: "d",
            text: "Nếu hai mặt phẳng phân biệt cắt nhau thì mọi đường thẳng trong mặt phẳng này đều cắt mặt phẳng kia.",
            correct: "false",
            explain: "Đường thẳng song song với giao tuyến sẽ song song với mặt phẳng kia mà không cắt."
          }
        ]
      },
      {
        id: 4,
        title: "Câu 4: Cho hình lăng trụ tam giác $ABC.A'B'C'$. Gọi $M, N, P$ lần lượt là trung điểm của các cạnh bên $AA', BB', CC'$:",
        items: [
          {
            key: "a",
            text: "Mặt phẳng $(MNP)$ song song với mặt phẳng $(ABC)$.",
            correct: "true",
            explain: "$MN$ và $NP$ là đường trung bình trong các hình bình hành $ABB'A'$ và $BCC'B'$ nên $MN \\parallel AB$ và $NP \\parallel BC \\implies (MNP) \\parallel (ABC)$."
          },
          {
            key: "b",
            text: "Tứ giác $ABB'A'$ là hình bình hành.",
            correct: "true",
            explain: "Theo định nghĩa lăng trụ, tất cả các mặt bên luôn là hình bình hành."
          },
          {
            key: "c",
            text: "Đường thẳng $A'B'$ cắt mặt phẳng $(MNP)$.",
            correct: "false",
            explain: "Vì $A'B' \\parallel MN \\subset (MNP) \\implies A'B' \\parallel (MNP)$."
          },
          {
            key: "d",
            text: "Tam giác $MNP$ bằng tam giác $ABC$.",
            correct: "true",
            explain: "Các cạnh $MN = AB, NP = BC, PM = CA$ nên $\\triangle MNP = \\triangle ABC$."
          }
        ]
      },
      {
        id: 5,
        title: "Câu 5: Cho ba mặt phẳng song song $(\\alpha), (\\beta), (\\gamma)$. Hai đường thẳng $d, d'$ cắt ba mặt phẳng tại $A, B, C$ và $A', B', C'$:",
        items: [
          {
            key: "a",
            text: "Tỉ số $\\frac{AB}{BC} = \\frac{A'B'}{B'C'}$.",
            correct: "true",
            explain: "Định lí Ta-lét trong không gian khẳng định ba mặt phẳng song song chắn trên hai cát tuyến các đoạn tương ứng tỉ lệ."
          },
          {
            key: "b",
            text: "Hai đường thẳng $d$ và $d'$ bắt buộc phải song song với nhau.",
            correct: "false",
            explain: "Hai đường thẳng $d, d'$ có thể cắt nhau hoặc chéo nhau tuỳ ý."
          },
          {
            key: "c",
            text: "Nếu $B$ là trung điểm của $AC$ thì $B'$ là trung điểm của $A'C'$.",
            correct: "true",
            explain: "Do $AB/BC = 1 \\implies A'B'/B'C' = 1 \\implies B'$ là trung điểm $A'C'$."
          },
          {
            key: "d",
            text: "Tỉ số $\\frac{AB}{AC} = \\frac{A'B'}{A'C'}$.",
            correct: "true",
            explain: "Từ tính chất tỉ lệ thức: $AB / (AB + BC) = A'B' / (A'B' + B'C')$."
          }
        ]
      },
      {
        id: 6,
        title: "Câu 6: Cho hình chóp cụt tam giác $ABC.A'B'C'$ có đáy lớn $ABC$ và đáy nhỏ $A'B'C'$:",
        items: [
          {
            key: "a",
            text: "Hai mặt phẳng đáy $(ABC)$ và $(A'B'C')$ song song với nhau.",
            correct: "true",
            explain: "Định nghĩa hình chóp cụt: Hai đáy nằm trên hai mặt phẳng song song."
          },
          {
            key: "b",
            text: "Các đường thẳng chứa các cạnh bên $AA', BB', CC'$ đồng quy tại một điểm.",
            correct: "true",
            explain: "Chúng đồng quy tại đỉnh $S$ của hình chóp sinh ra hình chóp cụt."
          },
          {
            key: "c",
            text: "Mặt bên $ABB'A'$ là hình bình hành.",
            correct: "false",
            explain: "Mặt bên của hình chóp cụt là hình thang chứ không phải hình bình hành."
          },
          {
            key: "d",
            text: "Tam giác đáy nhỏ $A'B'C'$ đồng dạng với tam giác đáy lớn $ABC$.",
            correct: "true",
            explain: "Vì các cạnh tương ứng song song nên hai tam giác đồng dạng."
          }
        ]
      }
    ],
    saQuestions: [
      {
        id: 1,
        question: "**Câu 1:** Một hình hộp chữ nhật có tất cả bao nhiêu đường chéo nối các đỉnh đối diện?",
        answer: "4",
        explain: "Hình hộp có 8 đỉnh, chia thành 4 cặp đỉnh đối diện qua tâm hình hộp, do đó có 4 đường chéo."
      },
      {
        id: 2,
        question: "**Câu 2:** Cho hình lăng trụ ngũ giác. Hỏi hình lăng trụ này có tất cả bao nhiêu cạnh?",
        answer: "15",
        explain: "Lăng trụ đáy ngũ giác (5 cạnh) có: 5 cạnh đáy dưới + 5 cạnh đáy trên + 5 cạnh bên = 15 cạnh."
      },
      {
        id: 3,
        question: "**Câu 3:** Cho ba mặt phẳng song song cắt hai đường thẳng $a$ và $b$ lần lượt tại $A, B, C$ và $A', B', C'$. Biết $AB = 4$, $BC = 8$ và $A'B' = 5$. Tính độ dài đoạn thẳng $B'C'$.",
        answer: "10",
        explain: "Theo định lí Ta-lét: A'B' / B'C' = AB / BC = 4 / 8 = 1/2. Suy ra B'C' = 2 * A'B' = 2 * 5 = 10."
      },
      {
        id: 4,
        question: "**Câu 4:** Một hình chóp cụt có đáy lớn là đa giác 8 cạnh. Hỏi hình chóp cụt này có bao nhiêu mặt?",
        answer: "10",
        explain: "Hình chóp cụt đáy bát giác có: 2 mặt đáy (đáy lớn, đáy nhỏ) + 8 mặt bên (hình thang) = 10 mặt."
      }
    ]
  },

  // BÀI 14
  bai14: {
    id: "toan11_bai14",
    lessonTitle: "Bài 14: Phép chiếu song song",
    grade: "Lớp 11",
    matcherStr: `(title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 14") || t.includes("phép chiếu song song")) && !t.includes("phương trình mặt phẳng") && !t.includes("phân tán");
      }`,
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: "Mục 1: Khái niệm & Các tính chất cơ bản của phép chiếu song song",
        sgkHtml: `<p>Nội dung cốt lõi Mục 1 Sách giáo khoa Toán 11 Kết Nối Tri Thức:</p>
<ul class="list-disc ml-5 space-y-1.5">
  <li><strong>1. Định nghĩa phép chiếu song song:</strong> Cho mặt phẳng $(\\alpha)$ và đường thẳng $\\Delta$ cắt $(\\alpha)$. Phép đặt tương ứng mỗi điểm $M$ với giao điểm $M'$ của đường thẳng qua $M$ song song với $\\Delta$ (hoặc trùng $\\Delta$) với $(\\alpha)$ gọi là phép chiếu song song lên $(\\alpha)$ theo phương $\\Delta$.</li>
  <li><strong>2. Tính chất 1 (Thẳng hàng):</strong> Phép chiếu song song biến ba điểm thẳng hàng thành ba điểm thẳng hàng và bảo toàn thứ tự giữa các điểm đó.</li>
  <li><strong>3. Tính chất 2 (Hình dạng cơ bản):</strong> Biến đường thẳng thành đường thẳng, biến tia thành tia, biến đoạn thẳng thành đoạn thẳng.</li>
  <li><strong>4. Tính chất 3 (Tính song song):</strong> Biến hai đường thẳng song song thành hai đường thẳng song song hoặc trùng nhau.</li>
  <li><strong>5. Tính chất 4 (Tỉ số độ dài):</strong> Bảo toàn tỉ số độ dài của hai đoạn thẳng cùng nằm trên một đường thẳng hoặc nằm trên hai đường thẳng song song.</li>
</ul>`,
        noteHtml: `Phép chiếu song song <strong>không bảo toàn</strong> độ lớn góc, khoảng cách và diện tích. Hai đường thẳng vuông góc nói chung không chiếu thành hai đường thẳng vuông góc.`,
        mistakeHtml: `Hiểu lầm rằng phép chiếu song song luôn giữ nguyên độ dài đoạn thẳng. Đoạn thẳng chiếu nói chung sẽ bị co ngắn lại (hoặc bằng nhau khi song song mặt phẳng chiếu).`,
        tipHtml: `Ghi nhớ nguyên tắc: Trung điểm chiếu thành trung điểm, trọng tâm chiếu thành trọng tâm, tỉ số đoạn thẳng cùng phương được giữ nguyên 100%!`,
        mcqs: [
          {
            question: "**Câu 1:** Trong các tính chất sau của hình học phẳng, tính chất nào KHÔNG ĐƯỢC bảo toàn qua phép chiếu song song?",
            options: [
              "A. Độ lớn của góc và tính vuông góc",
              "B. Tính thẳng hàng và thứ tự các điểm",
              "C. Tính song song của hai đường thẳng",
              "D. Tỉ số độ dài của hai đoạn thẳng cùng phương"
            ],
            correct: "A",
            explanation: "Phép chiếu song song làm biến dạng góc và khoảng cách, do đó tính vuông góc và độ lớn góc không được bảo toàn.",
            hint1: "Xem lại các yếu tố bị biến dạng qua phép chiếu.",
            hint2: "Góc vuông có thể chiếu thành góc nhọn hoặc góc tù."
          },
          {
            question: "**Câu 2:** Phép chiếu song song biến hai đường thẳng song song trong không gian thành hai đường thẳng:",
            options: [
              "A. Song song hoặc trùng nhau",
              "B. Cắt nhau",
              "C. Chéo nhau",
              "D. Vuông góc"
            ],
            correct: "A",
            explanation: "Theo tính chất 3 của phép chiếu song song: Hai đường thẳng song song chiếu thành hai đường thẳng song song hoặc trùng nhau (khi mặt phẳng chứa chúng chứa phương chiếu).",
            hint1: "Tính chất song song của phép chiếu.",
            hint2: "Không thể cắt nhau hay chéo nhau."
          },
          {
            question: "**Câu 3:** Cho đoạn thẳng $AB$ có trung điểm $M$. Qua phép chiếu song song lên mặt phẳng $(P)$, đoạn thẳng $AB$ biến thành $A'B'$ và $M$ biến thành $M'$. Khẳng định nào sau đây ĐÚNG?",
            options: [
              "A. $M'$ là trung điểm của đoạn thẳng $A'B'$",
              "B. $M'$ nằm ngoài đoạn thẳng $A'B'$",
              "C. $A'M' = 2M'B'$",
              "D. $M'$ trùng với đỉnh $A'$"
            ],
            correct: "A",
            explanation: "Phép chiếu song song bảo toàn tỉ số của các đoạn thẳng cùng nằm trên một đường thẳng, nên tỉ số $AM/MB = 1 \\implies A'M'/M'B' = 1 \\implies M'$ là trung điểm $A'B'$.",
            hint1: "Bảo toàn tỉ số độ dài.",
            hint2: "Trung điểm biến thành trung điểm."
          }
        ]
      },
      {
        sectionNumber: 2,
        sectionTitle: "Mục 2: Hình biểu diễn của một hình không gian trên mặt phẳng",
        sgkHtml: `<p>Nội dung cốt lõi Mục 2 Sách giáo khoa Toán 11 Kết Nối Tri Thức:</p>
<ul class="list-disc ml-5 space-y-1.5">
  <li><strong>1. Khái niệm:</strong> Hình biểu diễn của một hình trong không gian là hình chiếu song song của hình đó trên một mặt phẳng hoặc hình đồng dạng với hình chiếu đó.</li>
  <li><strong>2. Tam giác:</strong> Hình biểu diễn của một tam giác bất kì (đều, cân, vuông) là một tam giác tuỳ ý.</li>
  <li><strong>3. Tứ giác đặc biệt:</strong> Hình biểu diễn của hình bình hành, hình chữ nhật, hình thoi, hình vuông đều là một hình bình hành.</li>
  <li><strong>4. Hình thang:</strong> Hình biểu diễn của hình thang là một hình thang với tỉ số độ dài hai đáy được bảo toàn.</li>
  <li><strong>5. Đường tròn:</strong> Hình biểu diễn của một đường tròn thường là một hình elip.</li>
</ul>`,
        noteHtml: `Khi vẽ hình biểu diễn của hình thang có đáy lớn gấp đôi đáy nhỏ, trên hình vẽ bắt buộc phải vẽ đoạn đáy lớn dài đúng gấp đôi đoạn đáy nhỏ!`,
        mistakeHtml: `Vẽ hình biểu diễn của tam giác đều là tam giác đều, hoặc cố vẽ góc vuông ở chân hình chóp bằng góc 90 độ khiến hình vẽ bị bẹp, sai quy chuẩn biểu diễn.`,
        tipHtml: `Quy tắc vàng vẽ đáy: Đáy hình vuông, hình chữ nhật hay hình thoi đều vẽ thành hình bình hành nghiêng để tạo chiều sâu không gian!`,
        mcqs: [
          {
            question: "**Câu 4:** Hình biểu diễn của một hình vuông trong không gian lên một mặt phẳng bất kì là hình gì?",
            options: [
              "A. Hình bình hành",
              "B. Hình chữ nhật",
              "C. Hình thoi",
              "D. Hình thang"
            ],
            correct: "A",
            explanation: "Vì phép chiếu song song bảo toàn tính song song của các cặp cạnh đối nhưng không bảo toàn góc vuông và độ dài cạnh kề, nên hình vuông biểu diễn thành hình bình hành.",
            hint1: "Các cặp cạnh đối song song được bảo toàn.",
            hint2: "Góc vuông không được bảo toàn."
          },
          {
            question: "**Câu 5:** Hình biểu diễn của một đường tròn trên một mặt phẳng nói chung là hình gì?",
            options: [
              "A. Hình elip",
              "B. Hình tròn",
              "C. Hình parabol",
              "D. Đoạn thẳng"
            ],
            correct: "A",
            explanation: "Theo SGK Toán 11, hình biểu diễn của đường tròn nói chung là hình elip.",
            hint1: "Xem lại hình biểu diễn đường tròn.",
            hint2: "Đường cong bậc hai khép kín."
          },
          {
            question: "**Câu 6:** Khi vẽ hình biểu diễn của hình thang $ABCD$ có đáy lớn $AB = 3CD$, hình biểu diễn $A'B'C'D'$ phải thỏa mãn điều kiện nào sau đây?",
            options: [
              "A. $A'B' \\parallel C'D'$ và $A'B' = 3C'D'$",
              "B. $A'B' = C'D'$ và $A'B' \\parallel C'D'$",
              "C. $A'D' = B'C'$",
              "D. $A'B' \\perp A'D'$"
            ],
            correct: "A",
            explanation: "Phép chiếu song song bảo toàn tính song song và tỉ số độ dài hai đoạn thẳng song song, nên $A'B' \\parallel C'D'$ và $A'B' = 3C'D'$.",
            hint1: "Tính chất bảo toàn tỉ số hai đoạn thẳng song song.",
            hint2: "Đáy lớn dài gấp 3 lần đáy nhỏ."
          }
        ]
      },
      {
        sectionNumber: 3,
        sectionTitle: "Mục 3: Kỹ năng vẽ hình không gian chuẩn xác & Giải toán bằng phép chiếu",
        sgkHtml: `<p>Nội dung cốt lõi Mục 3 Sách giáo khoa Toán 11 Kết Nối Tri Thức:</p>
<ul class="list-disc ml-5 space-y-1.5">
  <li><strong>1. Quy ước đường nét:</strong> Đường nhìn thấy vẽ nét liền (solid), đường bị che khuất vẽ nét đứt đoạn (dashed).</li>
  <li><strong>2. Biểu diễn trọng tâm:</strong> Trọng tâm $G$ của $\\triangle ABC$ chiếu thành trọng tâm $G'$ của tam giác ảnh $\\triangle A'B'C'$.</li>
  <li><strong>3. Ứng dụng giải toán:</strong> Sử dụng phép chiếu song song để tính tỉ số đoạn thẳng, xác định giao điểm của đường thẳng và mặt phẳng, và tìm thiết diện.</li>
  <li><strong>4. Hiện tượng thực tế:</strong> Bóng của vật thể dưới ánh sáng mặt trời là một ví dụ trực quan về phép chiếu song song trên mặt đất.</li>
</ul>`,
        noteHtml: `Đỉnh của hình chóp có đường cao vuông góc với đáy (như $SA \\perp (ABCD)$) phải được dựng thẳng đứng vuông góc với mép dưới của trang giấy để tạo góc nhìn trực quan.`,
        mistakeHtml: `Quên chuyển cạnh khuất thành nét đứt đoạn, khiến hình vẽ trở thành khối trong suốt hoặc sai chiều sâu không gian.`,
        tipHtml: `Khi vẽ hình chóp, hãy vẽ mặt phẳng đáy trước, xác định tâm hoặc chân đường cao rồi dựng thẳng đứng lên đỉnh $S$!`,
        mcqs: [
          {
            question: "**Câu 7:** Trong quy ước vẽ hình học không gian, các cạnh hoặc đường thẳng bị che khuất bắt buộc phải vẽ bằng nét gì?",
            options: [
              "A. Nét đứt đoạn",
              "B. Nét liền đậm",
              "C. Nét gạch chấm",
              "D. Nét đôi"
            ],
            correct: "A",
            explanation: "Quy ước chuẩn SGK và Bộ GD&ĐT: Cạnh nhìn thấy vẽ nét liền, cạnh bị che khuất vẽ nét đứt đoạn.",
            hint1: "Quy ước nét vẽ hình học không gian.",
            hint2: "Nét đứt đoạn (dashed line)."
          },
          {
            question: "**Câu 8:** Cho tam giác $ABC$ có trọng tâm $G$. Qua phép chiếu song song lên mặt phẳng $(P)$, tam giác $ABC$ biến thành tam giác $A'B'C'$ và điểm $G$ biến thành $G'$. Khi đó:",
            options: [
              "A. $G'$ là trọng tâm của tam giác $A'B'C'$",
              "B. $G'$ là trực tâm của tam giác $A'B'C'$",
              "C. $G'$ là tâm ngoại tiếp tam giác $A'B'C'$",
              "D. $G'$ là tâm nội tiếp tam giác $A'B'C'$"
            ],
            correct: "A",
            explanation: "Do phép chiếu song song biến trung điểm thành trung điểm và bảo toàn tỉ số $2/3$ trên trung tuyến, nên trọng tâm biến thành trọng tâm.",
            hint1: "Trọng tâm chia trung tuyến theo tỉ số 2/3.",
            hint2: "Tỉ số được bảo toàn."
          },
          {
            question: "**Câu 9:** Để xác định hình chiếu song song của điểm $M$ lên mặt phẳng $(\\alpha)$ theo phương $\\Delta$ (với $\\Delta$ cắt $(\\alpha)$), ta làm như sau:",
            options: [
              "A. Kẻ đường thẳng qua $M$ song song với $\\Delta$ cắt $(\\alpha)$ tại $M'$",
              "B. Kẻ đường thẳng qua $M$ vuông góc với $(\\alpha)$",
              "C. Nối $M$ với gốc toạ độ",
              "D. Kẻ đường thẳng qua $M$ vuông góc với $\\Delta$"
            ],
            correct: "A",
            explanation: "Theo đúng định nghĩa: Qua $M$ vẽ đường thẳng $d \\parallel \\Delta$, giao điểm của $d$ với $(\\alpha)$ chính là hình chiếu $M'$.",
            hint1: "Định nghĩa phép chiếu theo phương Delta.",
            hint2: "Đường thẳng qua M song song Delta."
          }
        ]
      }
    ],
    tfQuestions: [
      {
        id: 1,
        title: "Câu 1: Cho phép chiếu song song lên mặt phẳng $(P)$ theo phương $\\Delta$ cắt $(P)$. Xét tính Đúng/Sai của các mệnh đề:",
        items: [
          {
            key: "a",
            text: "Phép chiếu song song bảo toàn tính thẳng hàng của ba điểm.",
            correct: "true",
            explain: "Tính chất 1 của phép chiếu song song."
          },
          {
            key: "b",
            text: "Phép chiếu song song luôn biến hai đường thẳng chéo nhau thành hai đường thẳng song song.",
            correct: "false",
            explain: "Hai đường thẳng chéo nhau thường có hình chiếu cắt nhau trên mặt phẳng chiếu."
          },
          {
            key: "c",
            text: "Phép chiếu song song bảo toàn tỉ số độ dài của hai đoạn thẳng nằm trên hai đường thẳng song song.",
            correct: "true",
            explain: "Tính chất 4 của phép chiếu song song."
          },
          {
            key: "d",
            text: "Phép chiếu song song bảo toàn góc giữa hai đường thẳng.",
            correct: "false",
            explain: "Góc bị biến dạng qua phép chiếu song song."
          }
        ]
      },
      {
        id: 2,
        title: "Câu 2: Về hình biểu diễn của các hình phẳng trong không gian:",
        items: [
          {
            key: "a",
            text: "Hình biểu diễn của một tam giác đều có thể là một tam giác có một góc tù.",
            correct: "true",
            explain: "Hình biểu diễn của tam giác bất kì là một tam giác tuỳ ý."
          },
          {
            key: "b",
            text: "Hình biểu diễn của một hình chữ nhật luôn là một hình chữ nhật.",
            correct: "false",
            explain: "Hình biểu diễn của hình chữ nhật nói chung là hình bình hành."
          },
          {
            key: "c",
            text: "Hình biểu diễn của một đường tròn có thể là một đoạn thẳng.",
            correct: "true",
            explain: "Khi mặt phẳng chứa đường tròn song song với phương chiếu, hình chiếu là đoạn thẳng có độ dài bằng đường kính."
          },
          {
            key: "d",
            text: "Hình biểu diễn của một hình thoi luôn là một hình thoi.",
            correct: "false",
            explain: "Hình biểu diễn của hình thoi là hình bình hành."
          }
        ]
      },
      {
        id: 3,
        title: "Câu 3: Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Chiếu song song hình chóp lên mặt phẳng $(ABCD)$ theo phương $SA$:",
        items: [
          {
            key: "a",
            text: "Hình chiếu của điểm $S$ là điểm $A$.",
            correct: "true",
            explain: "Vì phương chiếu là $SA$ nên đường thẳng qua $S$ theo phương $SA$ cắt đáy tại $A$."
          },
          {
            key: "b",
            text: "Hình chiếu của điểm $A$ là chính điểm $A$.",
            correct: "true",
            explain: "Điểm $A$ thuộc mặt phẳng chiếu nên hình chiếu là chính nó."
          },
          {
            key: "c",
            text: "Tam giác $SAB$ có hình chiếu là đoạn thẳng $AB$.",
            correct: "true",
            explain: "Điểm $S$ biến thành $A$, cạnh $AB$ nằm trên mặt đáy biến thành chính nó."
          },
          {
            key: "d",
            text: "Toàn bộ hình chóp có hình chiếu là hình bình hành $ABCD$.",
            correct: "true",
            explain: "Các đỉnh $S \\to A, B \\to B, C \\to C, D \\to D$, bao lồi là hình bình hành $ABCD$."
          }
        ]
      },
      {
        id: 4,
        title: "Câu 4: Cho hình hộp $ABCD.A'B'C'D'$. Xét phép chiếu song song lên mặt phẳng $(ABCD)$ theo phương $AA'$:",
        items: [
          {
            key: "a",
            text: "Đỉnh $A'$ có hình chiếu là đỉnh $A$.",
            correct: "true",
            explain: "Phương chiếu là $AA'$ nên $A'$ chiếu thành $A$."
          },
          {
            key: "b",
            text: "Đỉnh $C'$ có hình chiếu là đỉnh $C$.",
            correct: "true",
            explain: "Vì $CC' \\parallel AA'$ nên đường thẳng qua $C'$ song song $AA'$ cắt đáy tại $C$."
          },
          {
            key: "c",
            text: "Đoạn thẳng $A'C'$ có hình chiếu là đoạn thẳng $AC$.",
            correct: "true",
            explain: "Đoạn thẳng nối 2 đỉnh đáy trên chiếu thành đoạn thẳng nối 2 đỉnh đáy dưới."
          },
          {
            key: "d",
            text: "Tứ giác $A'B'C'D'$ có hình chiếu là hình bình hành $ABCD$.",
            correct: "true",
            explain: "Hai đáy song song chiếu thẳng đứng thành nhau."
          }
        ]
      },
      {
        id: 5,
        title: "Câu 5: Xét tính Đúng/Sai của các khẳng định toán học sau:",
        items: [
          {
            key: "a",
            text: "Phép chiếu song song biến trung điểm của một đoạn thẳng thành trung điểm của đoạn thẳng ảnh.",
            correct: "true",
            explain: "Do tỉ số $1:1$ được bảo toàn."
          },
          {
            key: "b",
            text: "Phép chiếu song song biến hai đường thẳng vuông góc thành hai đường thẳng vuông góc.",
            correct: "false",
            explain: "Góc vuông bị biến dạng thành góc nhọn hoặc góc tù."
          },
          {
            key: "c",
            text: "Phép chiếu song song biến trọng tâm của tam giác thành trọng tâm của tam giác ảnh.",
            correct: "true",
            explain: "Trọng tâm chia trung tuyến theo tỉ số $2:1$, tỉ số này được bảo toàn."
          },
          {
            key: "d",
            text: "Diện tích của hình phẳng luôn bằng diện tích của hình chiếu song song của nó.",
            correct: "false",
            explain: "Diện tích bị thu hẹp theo công thức $S' = S \\cdot \\cos \\varphi$."
          }
        ]
      },
      {
        id: 6,
        title: "Câu 6: Về bài toán bóng của vật thể dưới ánh nắng mặt trời:",
        items: [
          {
            key: "a",
            text: "Các tia sáng mặt trời chiếu xuống mặt đất được mô hình hóa là các đường thẳng song song.",
            correct: "true",
            explain: "Khoảng cách từ Mặt Trời đến Trái Đất rất lớn nên chùm sáng chiếu xuống xem như chùm tia song song."
          },
          {
            key: "b",
            text: "Bóng của một chiếc cọc cắm thẳng đứng trên sân phẳng là hình chiếu song song của chiếc cọc.",
            correct: "true",
            explain: "Phương chiếu chính là phương của tia nắng mặt trời."
          },
          {
            key: "c",
            text: "Cùng thời điểm, hai chiếc cọc cùng chiều cao cắm thẳng đứng trên sân phẳng có bóng dài bằng nhau.",
            correct: "true",
            explain: "Vì cùng phương chiếu và góc nghiêng của tia sáng như nhau."
          },
          {
            key: "d",
            text: "Tỉ số giữa chiều cao của cọc và độ dài bóng phụ thuộc vào chiều cao của cọc.",
            correct: "false",
            explain: "Tỉ số này bằng $\\tan \\alpha$ (với $\\alpha$ là góc nâng mặt trời), hoàn toàn không phụ thuộc vào chiều cao cọc."
          }
        ]
      }
    ],
    saQuestions: [
      {
        id: 1,
        question: "**Câu 1:** Một đoạn thẳng $AB$ có độ dài $15\\text{ cm}$. Điểm $C$ thuộc đoạn $AB$ sao cho $AC = 5\\text{ cm}$. Phép chiếu song song biến đoạn $AB$ thành đoạn $A'B'$ có độ dài $24\\text{ cm}$, và điểm $C$ biến thành $C'$. Tính độ dài đoạn thẳng $A'C'$ (cm).",
        answer: "8",
        explain: "Tỉ số: A'C' / A'B' = AC / AB = 5 / 15 = 1/3. Do đó A'C' = 24 / 3 = 8 cm."
      },
      {
        id: 2,
        question: "**Câu 2:** Cho tam giác $ABC$ có diện tích bằng $30\\text{ cm}^2$. Gọi $M$ là trung điểm cạnh $BC$. Qua phép chiếu song song lên mặt phẳng $(P)$, tam giác $ABC$ biến thành tam giác $A'B'C'$ có diện tích $40\\text{ cm}^2$. Điểm $M$ biến thành $M'$. Tính diện tích của tam giác $A'B'M'$ (cm²).",
        answer: "20",
        explain: "Vì M' là trung điểm B'C' nên tam giác A'B'M' có diện tích bằng một nửa diện tích tam giác A'B'C': 40 / 2 = 20 cm²."
      },
      {
        id: 3,
        question: "**Câu 3:** Một hình bình hành trong không gian khi chiếu song song lên một mặt phẳng có thể tạo ra hình biểu diễn có tối đa bao nhiêu đỉnh?",
        answer: "4",
        explain: "Hình biểu diễn của hình bình hành là một hình bình hành (4 đỉnh) hoặc suy biến thành một đoạn thẳng (2 đầu mút). Vậy tối đa là 4 đỉnh."
      },
      {
        id: 4,
        question: "**Câu 4:** Một chiếc cọc thẳng đứng cao $1.6\\text{ m}$ có bóng trên mặt đất dài $1.2\\text{ m}$. Cùng thời điểm đó, một toà nhà có bóng trên mặt đất dài $15\\text{ m}$. Hỏi chiều cao của toà nhà là bao nhiêu mét?",
        answer: "20",
        explain: "Tỉ số chiều cao và bóng: h / 15 = 1.6 / 1.2 = 4/3. Suy ra chiều cao tòa nhà h = 15 * 4 / 3 = 20 mét."
      }
    ]
  },

  // ÔN TẬP CHƯƠNG IV
  ontap_c4: {
    id: "toan11_ontap_c4",
    lessonTitle: "Bài tập cuối chương IV: Quan hệ song song trong không gian",
    grade: "Lớp 11",
    matcherStr: `(title) => {
        const t = title.toLowerCase();
        return (t.includes("ôn tập chương 4") || t.includes("cuối chương iv") || t.includes("cuối chương 4") || t.includes("ôn tập chương iv")) && (t.includes("toán 11") || t.includes("lớp 11") || !t.includes("toán 12"));
      }`,
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: "Mục 1: Hệ thống hóa kiến thức toàn chương & Sơ đồ tư duy 4 quan hệ song song",
        sgkHtml: `<p>Hệ thống hóa toàn bộ kiến thức Chương IV SGK Toán 11 Kết Nối Tri Thức:</p>
<ul class="list-disc ml-5 space-y-1.5">
  <li><strong>1. Đường thẳng và mặt phẳng trong không gian (Bài 10):</strong> 6 tính chất thừa nhận, 3 cách xác định mặt phẳng (3 điểm không thẳng hàng, 1 đường và 1 điểm ngoài, 2 đường cắt nhau), kỹ thuật tìm giao tuyến và thiết diện.</li>
  <li><strong>2. Hai đường thẳng song song (Bài 11):</strong> 4 vị trí tương đối (trùng nhau, song song, cắt nhau, chéo nhau), Định lí ba giao tuyến song song hoặc đồng quy.</li>
  <li><strong>3. Đường thẳng và mặt phẳng song song (Bài 12):</strong> Điều kiện $d \\not\\subset (P), d \\parallel a \\subset (P) \\implies d \\parallel (P)$; định lí giao tuyến song song.</li>
  <li><strong>4. Hai mặt phẳng song song & Phép chiếu (Bài 13, 14):</strong> Điều kiện chứa 2 đường cắt nhau; Định lí Ta-lét trong không gian; Hình lăng trụ, hình hộp, hình chóp cụt; Các tính chất bảo toàn của phép chiếu song song.</li>
</ul>`,
        noteHtml: `Sơ đồ tư duy mắt xích: Muốn chứng minh mặt // mặt $\\to$ đưa về đường // mặt $\\to$ đưa về đường // đường $\\to$ dùng định lí phẳng (đường trung bình, Ta-lét).`,
        mistakeHtml: `Nhầm lẫn giữa quan hệ chéo nhau và quan hệ song song trong không gian. Hai đường thẳng không có điểm chung có thể song song hoặc chéo nhau!`,
        tipHtml: `Khi làm bài thi, luôn xác định rõ bài toán thuộc quan hệ nào trong 4 quan hệ chính để chọn định lí tương ứng!`,
        mcqs: [
          {
            question: "**Câu 1:** Trong không gian, hai đường thẳng không có bất kì điểm chung nào thì:",
            options: [
              "A. Song song hoặc chéo nhau",
              "B. Song song với nhau",
              "C. Chéo nhau",
              "D. Cắt nhau"
            ],
            correct: "A",
            explanation: "Nếu hai đường thẳng đồng phẳng mà không có điểm chung thì song song; nếu không đồng phẳng thì chéo nhau.",
            hint1: "Hai đường thẳng không có điểm chung trong không gian.",
            hint2: "Có thể cùng nằm trong một mặt phẳng hoặc không đồng phẳng."
          },
          {
            question: "**Câu 2:** Nếu đường thẳng $a$ song song với mặt phẳng $(P)$ thì mặt phẳng $(Q)$ chứa $a$ và cắt $(P)$ theo giao tuyến $b$. Khi đó vị trí tương đối giữa $a$ và $b$ là:",
            options: [
              "A. $a \\parallel b$",
              "B. $a$ cắt $b$",
              "C. $a$ chéo $b$",
              "D. $a \\perp b$"
            ],
            correct: "A",
            explanation: "Theo Định lí giao tuyến: Mặt phẳng chứa một đường thẳng song song với mặt phẳng kia thì cắt mặt phẳng kia theo giao tuyến song song với đường thẳng đó.",
            hint1: "Định lí 2 Bài 12 Toán 11 KNTT.",
            hint2: "a và b cùng nằm trên mặt phẳng (Q) và không có điểm chung."
          },
          {
            question: "**Câu 3:** Điều kiện cần và đủ để hai mặt phẳng phân biệt song song với nhau là:",
            options: [
              "A. Mặt phẳng này chứa hai đường thẳng cắt nhau cùng song song với mặt phẳng kia",
              "B. Mặt phẳng này chứa một đường thẳng song song với mặt phẳng kia",
              "C. Cả hai mặt phẳng cùng không cắt một đường thẳng thứ ba",
              "D. Mặt phẳng này chứa hai đường thẳng song song với nhau"
            ],
            correct: "A",
            explanation: "Theo Định lí 1 Bài 13: Hai đường thẳng cắt nhau trong mặt phẳng này cùng song song với mặt phẳng kia là điều kiện đủ để hai mặt phẳng song song.",
            hint1: "Định lí điều kiện hai mặt phẳng song song.",
            hint2: "Cần 2 đường thẳng cắt nhau."
          }
        ]
      },
      {
        sectionNumber: 2,
        sectionTitle: "Mục 2: 4 Dạng toán cốt lõi & Phương pháp giải kinh điển",
        sgkHtml: `<p>Nội dung cốt lõi Mục 2 Sách giáo khoa Toán 11 Kết Nối Tri Thức:</p>
<ul class="list-disc ml-5 space-y-1.5">
  <li><strong>1. Dạng 1 - Tìm giao tuyến hai mặt phẳng:</strong> Tìm 2 điểm chung phân biệt, hoặc 1 điểm chung và phương song song (dùng định lí giao tuyến song song).</li>
  <li><strong>2. Dạng 2 - Tìm giao điểm của đường thẳng $d$ và mặt phẳng $(P)$:</strong> Chọn mặt phẳng phụ $(Q) \\supset d$, tìm giao tuyến $a = (P) \\cap (Q)$, khi đó giao điểm $M = d \\cap a$.</li>
  <li><strong>3. Dạng 3 - Chứng minh quan hệ song song:</strong> Sử dụng đường trung bình, Ta-lét, hình bình hành hoặc định lí ba giao tuyến.</li>
  <li><strong>4. Dạng 4 - Xác định thiết diện:</strong> Tìm giao tuyến của mặt phẳng cắt với tất cả các mặt của hình chóp hoặc hình lăng trụ, khép kín thành đa giác.</li>
</ul>`,
        noteHtml: `Khi hai mặt phẳng chứa hai đường thẳng song song, giao tuyến của chúng (nếu có) phải đi qua điểm chung và song song với hai đường thẳng đó!`,
        mistakeHtml: `Kéo dài hai đường thẳng chéo nhau (không đồng phẳng) cho cắt nhau. Luôn kiểm tra xem hai đường thẳng có nằm trong cùng một mặt phẳng trước khi lấy giao điểm!`,
        tipHtml: `Quy tắc 4 bước dựng thiết diện: 1. Tìm điểm chung sẵn có $\\to$ 2. Kẻ đường song song $\\to$ 3. Cắt các cạnh bên $\\to$ 4. Nối kín đa giác!`,
        mcqs: [
          {
            question: "**Câu 4:** Cho hình chóp $S.ABCD$ có đáy là hình thang ($AB \\parallel CD$). Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là:",
            options: [
              "A. Đường thẳng đi qua $S$ và song song với $AB, CD$",
              "B. Đường thẳng $SO$ với $O$ là giao điểm $AC$ và $BD$",
              "C. Đường thẳng $SI$ với $I$ là giao điểm $AD$ và $BC$",
              "D. Đường thẳng qua $S$ vuông góc với $(ABCD)$"
            ],
            correct: "A",
            explanation: "Hai mặt phẳng $(SAB)$ và $(SCD)$ có điểm chung $S$ và lần lượt chứa hai đường thẳng song song $AB \\parallel CD$, nên giao tuyến đi qua $S$ và song song với $AB$ và $CD$.",
            hint1: "Định lí giao tuyến của hai mặt phẳng chứa 2 đường song song.",
            hint2: "Đường thẳng qua S song song AB."
          },
          {
            question: "**Câu 5:** Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Gọi $M$ là trung điểm của $SC$. Giao điểm của đường thẳng $SO$ và mặt phẳng $(ABM)$ là:",
            options: [
              "A. Trọng tâm của tam giác $SAC$",
              "B. Trung điểm của đoạn thẳng $SO$",
              "C. Điểm $O$",
              "D. Điểm $S$"
            ],
            correct: "A",
            explanation: "Trong mặt phẳng phụ $(SAC)$, $SO$ và $AM$ là hai đường trung tuyến của tam giác $SAC$. Chúng cắt nhau tại trọng tâm $G$ của tam giác $SAC$. Điểm $G$ thuộc $AM \\subset (ABM)$ nên $G$ chính là giao điểm cần tìm.",
            hint1: "Xét mặt phẳng phụ (SAC) chứa SO.",
            hint2: "Giao điểm của 2 trung tuyến SO và AM."
          },
          {
            question: "**Câu 6:** Thiết diện của hình chóp tứ giác cắt bởi một mặt phẳng song song với mặt phẳng đáy là một đa giác có bao nhiêu cạnh?",
            options: [
              "A. 4 cạnh",
              "B. 3 cạnh",
              "C. 5 cạnh",
              "D. 6 cạnh"
            ],
            correct: "A",
            explanation: "Mặt phẳng cắt cả 4 mặt bên của hình chóp tứ giác tạo thành thiết diện là một tứ giác (4 cạnh) đồng dạng với tứ giác đáy.",
            hint1: "Mặt phẳng cắt qua các mặt bên của hình chóp tứ giác.",
            hint2: "Tứ giác có 4 cạnh."
          }
        ]
      },
      {
        sectionNumber: 3,
        sectionTitle: "Mục 3: Luyện đề tổng hợp chuẩn cấu trúc Bộ GD&ĐT 2025",
        sgkHtml: `<p>Nội dung cốt lõi Mục 3 Sách giáo khoa Toán 11 Kết Nối Tri Thức:</p>
<ul class="list-disc ml-5 space-y-1.5">
  <li><strong>1. Cấu trúc đề thi mới Bộ GD&ĐT:</strong> Gồm 3 phần: Phần I - Trắc nghiệm nhiều lựa chọn; Phần II - Trắc nghiệm Đúng/Sai (yêu cầu phân tích sâu); Phần III - Trả lời ngắn (điền kết quả số học).</li>
  <li><strong>2. Tổng ôn các định lí mấu chốt:</strong> Định lí 3 giao tuyến, Định lí Ta-lét trong không gian, Định lí điều kiện song song.</li>
  <li><strong>3. Kỹ năng làm bài tốc độ & chính xác:</strong> Vẽ hình tối giản, nhìn nhận nhanh quan hệ song song qua đường trung bình, nhận biết nhanh thiết diện đặc biệt.</li>
  <li><strong>4. Ứng dụng bài toán thực tế:</strong> Khối lăng trụ, chóp cụt, tính toán bậc thang, thanh giằng giàn không gian.</li>
</ul>`,
        noteHtml: `Ở Phần II Đúng/Sai, cần kiểm tra kỹ từng mệnh đề độc lập. Chỉ cần 1 trường hợp suy biến sai là mệnh đề khẳng định tuyệt đối sẽ mang giá trị SAI!`,
        mistakeHtml: `Chủ quan làm tròn số ở Phần III Trả lời ngắn. Phải đọc kỹ yêu cầu làm tròn đến hàng đơn vị, chữ số thập phân thứ nhất hay phân số tối giản!`,
        tipHtml: `Nắm vững công thức đếm đỉnh, cạnh, mặt của các khối đa diện để trả lời nhanh gọn các câu hỏi điền số Phần III!`,
        mcqs: [
          {
            question: "**Câu 7:** Cho hình lăng trụ $ABC.A'B'C'$. Gọi $I, J, K$ lần lượt là trọng tâm các tam giác $ABC, ACC', A'B'C'$. Mặt phẳng $(IJK)$ song song với mặt phẳng nào sau đây?",
            options: [
              "A. $(BB'C'C)$",
              "B. $(ABC)$",
              "C. $(AA'B'B)$",
              "D. $(AA'C'C)$"
            ],
            correct: "A",
            explanation: "Sử dụng tính chất trọng tâm và phép chiếu, ta có $IJ \\parallel BC'$ và $IK \\parallel BB'$, do đó mặt phẳng $(IJK) \\parallel (BB'C'C)$.",
            hint1: "Xét tỉ số các trọng tâm trên các đường trung tuyến.",
            hint2: "Song song với mặt bên (BB'C'C)."
          },
          {
            question: "**Câu 8:** Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Mặt phẳng $(\\alpha)$ chứa $MN$ và song song với $BC$. Thiết diện của tứ diện cắt bởi $(\\alpha)$ là:",
            options: [
              "A. Hình bình hành",
              "B. Hình thang có một góc vuông",
              "C. Tam giác",
              "D. Ngũ giác"
            ],
            correct: "A",
            explanation: "Mặt phẳng $(\\alpha)$ cắt $(ABC)$ theo đoạn qua $M$ song song $BC$, cắt $(BCD)$ theo đoạn qua $N$ song song $BC$. Thiết diện là hình bình hành.",
            hint1: "Mặt phẳng chứa MN và song song BC.",
            hint2: "Cắt 2 mặt chứa BC theo 2 giao tuyến song song BC."
          },
          {
            question: "**Câu 9:** Cho hình chóp cụt tam giác $ABC.A'B'C'$ có diện tích đáy dưới bằng $36\\text{ cm}^2$. Biết cạnh đáy trên bằng $\\frac{1}{2}$ cạnh đáy dưới. Diện tích đáy trên $A'B'C'$ bằng:",
            options: [
              "A. $9\\text{ cm}^2$",
              "B. $18\\text{ cm}^2$",
              "C. $12\\text{ cm}^2$",
              "D. $6\\text{ cm}^2$"
            ],
            correct: "A",
            explanation: "Tỉ số diện tích của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng: $S' = S \\cdot (1/2)^2 = 36 \\cdot 1/4 = 9\\text{ cm}^2$.",
            hint1: "Tỉ số diện tích bằng bình phương tỉ số đồng dạng.",
            hint2: "S' = 36 * (1/2)^2."
          }
        ]
      }
    ],
    tfQuestions: [
      {
        id: 1,
        title: "Câu 1: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB \\parallel CD, AB = 2CD$). Gọi $M$ là trung điểm của $AB$:",
        items: [
          {
            key: "a",
            text: "Tứ giác $AMCD$ là hình bình hành.",
            correct: "true",
            explain: "Do $AM \\parallel CD$ và $AM = AB/2 = CD$ nên $AMCD$ là hình bình hành."
          },
          {
            key: "b",
            text: "Giao tuyến của $(SAD)$ và $(SBC)$ là đường thẳng đi qua $S$ và song song với $AB$.",
            correct: "false",
            explain: "Vì $AD$ và $BC$ cắt nhau tại điểm $I$ (do $ABCD$ là hình thang) nên giao tuyến là đường thẳng $SI$."
          },
          {
            key: "c",
            text: "Đường thẳng $CD$ song song với mặt phẳng $(SAB)$.",
            correct: "true",
            explain: "Vì $CD \\parallel AB \\subset (SAB) \\implies CD \\parallel (SAB)$."
          },
          {
            key: "d",
            text: "Mặt phẳng $(SMC)$ song song với đường thẳng $AD$.",
            correct: "true",
            explain: "Do $AMCD$ là hình bình hành nên $MC \\parallel AD \\implies AD \\parallel (SMC)$."
          }
        ]
      },
      {
        id: 2,
        title: "Câu 2: Cho hình lăng trụ tam giác $ABC.A'B'C'$. Gọi $M, N$ lần lượt là trung điểm của $AA'$ và $BB'$:",
        items: [
          {
            key: "a",
            text: "Đường thẳng $MN$ song song với đường thẳng $AB$.",
            correct: "true",
            explain: "Trong hình bình hành $ABB'A'$, $MN$ là đường trung bình nên $MN \\parallel AB$."
          },
          {
            key: "b",
            text: "Đường thẳng $MN$ song song với mặt phẳng $(A'B'C')$.",
            correct: "true",
            explain: "Do $MN \\parallel A'B' \\subset (A'B'C') \\implies MN \\parallel (A'B'C')$."
          },
          {
            key: "c",
            text: "Mặt phẳng $(MNC)$ cắt mặt phẳng $(A'B'C')$ theo giao tuyến song song với $AB$.",
            correct: "true",
            explain: "Mặt phẳng $(MNC)$ chứa $MN \\parallel A'B'$, cắt $(A'B'C')$ theo đường thẳng qua $C'$ song song $AB$."
          },
          {
            key: "d",
            text: "Tứ giác $ABB'A'$ luôn là hình chữ nhật.",
            correct: "false",
            explain: "Ở lăng trụ xiên, mặt bên chỉ là hình bình hành, không nhất thiết là hình chữ nhật."
          }
        ]
      },
      {
        id: 3,
        title: "Câu 3: Cho hình lập phương $ABCD.A'B'C'D'$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          {
            key: "a",
            text: "Mặt phẳng $(BDA')$ song song với mặt phẳng $(B'D'C)$.",
            correct: "true",
            explain: "Do $BD \\parallel B'D'$ và $BA' \\parallel CD'$ nên $(BDA') \\parallel (B'D'C)$."
          },
          {
            key: "b",
            text: "Đường chéo $AC'$ vuông góc với mặt phẳng $(BDA')$.",
            correct: "true",
            explain: "Tính chất hình lập phương: Đường chéo chính vuông góc với mặt phẳng tạo bởi 3 đỉnh kề."
          },
          {
            key: "c",
            text: "Hai mặt phẳng $(BDA')$ và $(B'D'C)$ chia đoạn thẳng $AC'$ thành ba đoạn có độ dài bằng nhau.",
            correct: "true",
            explain: "Tính chất kinh điển: Ba đoạn thẳng trên $AC'$ bằng nhau."
          },
          {
            key: "d",
            text: "Đường thẳng $BD$ cắt mặt phẳng $(B'D'C)$.",
            correct: "false",
            explain: "Vì $BD \\parallel B'D' \\subset (B'D'C) \\implies BD \\parallel (B'D'C)$."
          }
        ]
      },
      {
        id: 4,
        title: "Câu 4: Cho tứ diện đều $ABCD$. Gọi $M, N, P, Q$ lần lượt là trung điểm của $AB, BC, CD, DA$:",
        items: [
          {
            key: "a",
            text: "Tứ giác $MNPQ$ là hình bình hành.",
            correct: "true",
            explain: "Do $MN \\parallel AC$ và $PQ \\parallel AC$, $MN = PQ = AC/2$."
          },
          {
            key: "b",
            text: "Tứ giác $MNPQ$ là hình thoi.",
            correct: "true",
            explain: "Tứ diện đều có $AC = BD \\implies MN = NP = PQ = QM$ nên là hình thoi."
          },
          {
            key: "c",
            text: "Đường thẳng $AC$ song song với mặt phẳng $(MNPQ)$.",
            correct: "true",
            explain: "Vì $AC \\parallel MN \\subset (MNPQ) \\implies AC \\parallel (MNPQ)$."
          },
          {
            key: "d",
            text: "Mặt phẳng $(MNPQ)$ song song với đường thẳng $BD$.",
            correct: "true",
            explain: "Vì $BD \\parallel MQ \\subset (MNPQ) \\implies BD \\parallel (MNPQ)$."
          }
        ]
      },
      {
        id: 5,
        title: "Câu 5: Xét tính Đúng/Sai của các mệnh đề lý thuyết tổng hợp:",
        items: [
          {
            key: "a",
            text: "Hai đường thẳng cùng song song với một mặt phẳng thì song song với nhau.",
            correct: "false",
            explain: "Hai đường thẳng đó có thể cắt nhau hoặc chéo nhau."
          },
          {
            key: "b",
            text: "Hai mặt phẳng phân biệt cùng song song với một đường thẳng thì song song với nhau.",
            correct: "false",
            explain: "Hai mặt phẳng đó có thể cắt nhau theo một giao tuyến song song với đường thẳng đó."
          },
          {
            key: "c",
            text: "Nếu đường thẳng $a$ song song với mặt phẳng $(P)$ thì qua $a$ có duy nhất một mặt phẳng song song với $(P)$.",
            correct: "true",
            explain: "Định lí tính duy nhất mặt phẳng song song chứa đường thẳng song song."
          },
          {
            key: "d",
            text: "Ba mặt phẳng cắt nhau từng đôi một theo ba giao tuyến phân biệt thì ba giao tuyến đó hoặc đôi một song song hoặc đồng quy.",
            correct: "true",
            explain: "Định lí ba giao tuyến kinh điển trong SGK Toán 11."
          }
        ]
      },
      {
        id: 6,
        title: "Câu 6: Về bài toán ứng dụng thực tế các quan hệ song song trong không gian:",
        items: [
          {
            key: "a",
            text: "Các bậc của một cầu thang bộ trong ngôi nhà luôn nằm trên các mặt phẳng song song với mặt sàn.",
            correct: "true",
            explain: "Để người đi lại thăng bằng, mặt mỗi bậc thang đều song song mặt đất."
          },
          {
            key: "b",
            text: "Tay vịn lan can cầu thang luôn song song với đường thẳng nối mép các bậc thang.",
            correct: "true",
            explain: "Đảm bảo khoảng cách từ tay vịn đến bậc thang luôn không đổi."
          },
          {
            key: "c",
            text: "Các trụ đứng đỡ tay vịn cầu thang song song với nhau.",
            correct: "true",
            explain: "Các trụ đều vuông góc với mặt đất hoặc bậc thang nên chúng song song với nhau."
          },
          {
            key: "d",
            text: "Chiều cao của các bậc thang liên tiếp trên một cầu thang thẳng là khác nhau.",
            correct: "false",
            explain: "Quy chuẩn kiến trúc đòi hỏi chiều cao mỗi bậc thang phải bằng nhau để an toàn."
          }
        ]
      }
    ],
    saQuestions: [
      {
        id: 1,
        question: "**Câu 1:** Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $M, N$ lần lượt là trung điểm của $SA, SC$. Mặt phẳng $(\\alpha)$ qua $M, N$ song song với $BD$. Thiết diện tạo bởi $(\\alpha)$ và hình chóp là đa giác có bao nhiêu cạnh?",
        answer: "4",
        explain: "Mặt phẳng (alpha) cắt SA, SB, SC, SD tại 4 điểm M, K, N, H tạo thành hình bình hành MKNH có 4 cạnh."
      },
      {
        id: 2,
        question: "**Câu 2:** Cho hình hộp $ABCD.A'B'C'D'$. Có bao nhiêu cặp mặt phẳng đối diện song song với nhau?",
        answer: "3",
        explain: "Hình hộp có 3 cặp mặt đối diện song song: (ABCD) // (A'B'C'D'), (ABB'A') // (CDD'C'), (ADD'A') // (BCC'B')."
      },
      {
        id: 3,
        question: "**Câu 3:** Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Mặt phẳng song song với đáy cắt các cạnh bên $SA, SB, SC, SD$ chia hình chóp thành một hình chóp nhỏ và một hình chóp cụt. Hỏi hình chóp cụt đó có bao nhiêu đỉnh?",
        answer: "8",
        explain: "Hình chóp cụt tứ giác có 4 đỉnh ở đáy dưới và 4 đỉnh ở đáy trên, tổng cộng có 8 đỉnh."
      },
      {
        id: 4,
        question: "**Câu 4:** Cho ba mặt phẳng song song cắt đường thẳng $d$ tại $A, B, C$ sao cho $AB = 6\\text{ cm}, BC = 9\\text{ cm}$ và cắt $d'$ tại $A', B', C'$. Biết $A'C' = 25\\text{ cm}$. Tính độ dài đoạn thẳng $A'B'$ (cm).",
        answer: "10",
        explain: "Theo định lí Ta-lét: A'B' / A'C' = AB / AC = 6 / (6 + 9) = 6 / 15 = 2/5. Suy ra A'B' = 25 * 2 / 5 = 10 cm."
      }
    ]
  }
};
