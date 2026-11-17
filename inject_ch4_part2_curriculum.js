const fs = require('fs');
const data = require('./curriculum_ch4_part2_data.js');

function escapeStringForTemplate(str) {
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${');
}

// -------------------------------------------------------------
// Helper to format a lesson for kntt-lessons-grade11.js
// -------------------------------------------------------------
function formatLessonForGrade11Js(lessonData) {
  let out = `    // =========================================================================\n`;
  out += `    // ${lessonData.lessonTitle.toUpperCase()} (TOÁN 11 - KNTT)\n`;
  out += `    // =========================================================================\n`;
  out += `    "${lessonData.id}": {\n`;
  out += `      id: "${lessonData.id}",\n`;
  out += `      lessonTitle: "${lessonData.lessonTitle}",\n`;
  out += `      grade: "${lessonData.grade}",\n`;
  out += `      matcher: ${lessonData.matcherStr},\n`;
  out += `      sections: [\n`;

  lessonData.sections.forEach((sec, idx) => {
    out += `        {\n`;
    out += `          sectionNumber: ${sec.sectionNumber},\n`;
    out += `          sectionTitle: "${sec.sectionTitle}",\n`;
    out += `          theory: createStandardTheoryHTML(\n`;
    out += `            "${lessonData.lessonTitle}", "${lessonData.grade}", ${sec.sectionNumber},\n`;
    out += `            "${sec.sectionTitle}",\n`;
    out += `            \`${sec.sgkHtml}\`,\n`;
    out += `            \`${sec.noteHtml}\`,\n`;
    out += `            \`${sec.mistakeHtml}\`,\n`;
    out += `            \`${sec.tipHtml}\`\n`;
    out += `          ),\n`;
    out += `          mcqs: ${JSON.stringify(sec.mcqs, null, 12).trim()}\n`;
    out += `        }${idx < lessonData.sections.length - 1 ? ',' : ''}\n`;
  });

  out += `      ],\n`;
  out += `      tfQuestions: ${JSON.stringify(lessonData.tfQuestions, null, 6).trim()},\n`;
  out += `      saQuestions: ${JSON.stringify(lessonData.saQuestions, null, 6).trim()}\n`;
  out += `    }`;

  return out;
}

// -------------------------------------------------------------
// Helper to format a lesson for index.html (buildComprehensiveKNTTCurriculum)
// -------------------------------------------------------------
function formatLessonForIndexHtml(lessonData, conditionStr) {
  let out = `        // =========================================================================\n`;
  out += `        // ${lessonData.lessonTitle.toUpperCase()} (Toán 11 KNTT)\n`;
  out += `        // =========================================================================\n`;
  out += `        if (${conditionStr}) {\n`;
  out += `          return {\n`;
  out += `            key: "${lessonData.id}",\n`;
  out += `            lessonTitle: lessonTitle,\n`;
  out += `            class: grade,\n`;
  out += `            sections: [\n`;

  lessonData.sections.forEach((sec, idx) => {
    out += `              {\n`;
    out += `                sectionNumber: ${sec.sectionNumber},\n`;
    out += `                sectionTitle: "${sec.sectionTitle}",\n`;
    out += `                theory: createKNTTTheoryBlockHTML(\n`;
    out += `                  "${lessonData.lessonTitle}", "${lessonData.grade}", ${sec.sectionNumber},\n`;
    out += `                  "${sec.sectionTitle}",\n`;
    out += `                  \`${sec.sgkHtml}\`,\n`;
    out += `                  \`${sec.noteHtml}\`,\n`;
    out += `                  \`${sec.mistakeHtml}\`,\n`;
    out += `                  \`${sec.tipHtml}\`\n`;
    out += `                ),\n`;
    out += `                mcqs: ${JSON.stringify(sec.mcqs, null, 16).trim()}\n`;
    out += `              }${idx < lessonData.sections.length - 1 ? ',' : ''}\n`;
  });

  out += `            ],\n`;
  out += `            tfQuestions: ${JSON.stringify(lessonData.tfQuestions, null, 12).trim()},\n`;
  out += `            saQuestions: ${JSON.stringify(lessonData.saQuestions, null, 12).trim()}\n`;
  out += `          };\n`;
  out += `        }\n`;

  return out;
}

// =============================================================
// 1. UPDATE kntt-lessons-grade11.js AND public/kntt-lessons-grade11.js
// =============================================================
const g11Files = [
  'kntt-lessons-grade11.js',
  'public/kntt-lessons-grade11.js'
];

const lessonsBlockJs = [
  formatLessonForGrade11Js(data.bai13),
  formatLessonForGrade11Js(data.bai14),
  formatLessonForGrade11Js(data.ontap_c4)
].join(',\n\n');

g11Files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const startMarker = '// =========================================================================\r\n    // BÀI 13: HAI MẶT PHẲNG SONG SONG (TOÁN 11 - KNTT)';
  const altStartMarker = '// =========================================================================\n    // BÀI 13: HAI MẶT PHẲNG SONG SONG (TOÁN 11 - KNTT)';
  
  let startIdx = content.indexOf(startMarker);
  let isCrlf = true;
  if (startIdx === -1) {
    startIdx = content.indexOf(altStartMarker);
    isCrlf = false;
  }
  
  if (startIdx === -1) {
    console.error('Could not find start marker in ' + file);
    return;
  }
  
  const endMarker = '  };\r\n\r\n  Object.assign(window.DEDICATED_LESSONS_DB, GRADE11_PARALLEL_LESSONS);';
  const altEndMarker = '  };\n\n  Object.assign(window.DEDICATED_LESSONS_DB, GRADE11_PARALLEL_LESSONS);';
  
  let endIdx = content.indexOf(endMarker, startIdx);
  if (endIdx === -1) {
    endIdx = content.indexOf(altEndMarker, startIdx);
  }
  
  if (endIdx === -1) {
    console.error('Could not find end marker in ' + file);
    return;
  }
  
  const before = content.substring(0, startIdx);
  const after = content.substring(endIdx);
  
  const newContent = before + lessonsBlockJs + (isCrlf ? '\r\n  ' : '\n  ') + after;
  fs.writeFileSync(file, newContent, 'utf8');
  console.log(`✔ Successfully injected Bài 13, 14, Ôn tập C4 into ${file}`);
});

// =============================================================
// 2. UPDATE index.html AND public/index.html
// =============================================================
const htmlFiles = [
  'index.html',
  'public/index.html'
];

const cond13 = `(lower.includes("bài 13") || lower.includes("hai mặt phẳng song song")) && !lower.includes("ứng dụng")`;
const cond14 = `(lower.includes("bài 14") || lower.includes("phép chiếu song song")) && !lower.includes("phương trình mặt phẳng") && !lower.includes("phân tán")`;
const condOntapC4 = `(lower.includes("ôn tập chương 4") || lower.includes("cuối chương iv") || lower.includes("cuối chương 4") || lower.includes("ôn tập chương iv") || (lower.includes("quan hệ song song") && lower.includes("ôn tập"))) && (grade === "Lớp 11" || !lower.includes("toán 12"))`;

const block13Html = formatLessonForIndexHtml(data.bai13, cond13);
const block14Html = formatLessonForIndexHtml(data.bai14, cond14);
const blockOntapHtml = formatLessonForIndexHtml(data.ontap_c4, condOntapC4);

const fallbackBlockHtml = `        // Fallback cho Quan hệ song song trong không gian (Toán 11)
        if (lower.includes("quan hệ song song") || (lower.includes("song song") && grade === "Lớp 11")) {
          return {
            key: "toan11_quan_he_song_song",
            lessonTitle: lessonTitle,
            class: grade,
            sections: [
              {
                sectionNumber: 1,
                sectionTitle: "Mục 1: Tổng hợp các quan hệ song song trong không gian",
                theory: createKNTTTheoryBlockHTML(
                  "Quan hệ song song trong không gian", "Lớp 11", 1,
                  "Tổng hợp các quan hệ song song trong không gian",
                  \`<p>Tổng hợp kiến thức trọng tâm Chương IV Toán 11 KNTT: Đường // Đường, Đường // Mặt, Mặt // Mặt và Phép chiếu song song.</p>\`,
                  \`Nắm chắc 4 quan hệ song song và định lí giao tuyến.\`,
                  \`Nhầm lẫn giữa chéo nhau và song song.\`,
                  \`Vẽ hình chuẩn xác nét liền và nét đứt đoạn.\`
                ),
                mcqs: ${JSON.stringify(data.ontap_c4.sections[0].mcqs, null, 16).trim()}
              }
            ],
            tfQuestions: ${JSON.stringify(data.ontap_c4.tfQuestions.slice(0, 4), null, 12).trim()},
            saQuestions: ${JSON.stringify(data.ontap_c4.saQuestions.slice(0, 4), null, 12).trim()}
          };
        }
`;

const fullReplacementHtml = block13Html + '\n' + block14Html + '\n' + blockOntapHtml + '\n' + fallbackBlockHtml;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const targetStart = '// 5D. CÁC QUAN HỆ SONG SONG KHÁC TRONG KHÔNG GIAN (Bài 13, 14 & Fallback - Toán 11)';
  const targetEnd = '        // 6. Hàm số mũ và hàm số lôgarit (Bài 17, 18, 19, 20 - Toán 11)';

  const startIdx = content.indexOf(targetStart);
  if (startIdx === -1) {
    console.error('Could not find targetStart in ' + file);
    return;
  }

  const endIdx = content.indexOf(targetEnd, startIdx);
  if (endIdx === -1) {
    console.error('Could not find targetEnd in ' + file);
    return;
  }

  const before = content.substring(0, startIdx);
  const after = content.substring(endIdx);

  const newContent = before + fullReplacementHtml + '\n        ' + after;
  fs.writeFileSync(file, newContent, 'utf8');
  console.log(`✔ Successfully injected Bài 13, 14, Ôn tập C4 into ${file}`);
});
