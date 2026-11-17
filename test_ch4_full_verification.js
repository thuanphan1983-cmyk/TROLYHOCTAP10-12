const fs = require('fs');

console.log("==================================================================");
console.log("🔍 KIỂM ĐỊNH TOÀN DIỆN CHƯƠNG IV (BÀI 10 -> BÀI 14 & ÔN TẬP C4)");
console.log("==================================================================");

// 1. Verify G11_CHAPTER4_DATA
const ch4Data = require('./js/g11_chapter4_data.js');
const expectedKeys = [
  'g11_bai10_muc1', 'g11_bai10_muc2', 'g11_bai10_muc3',
  'g11_bai11_muc1', 'g11_bai11_muc2', 'g11_bai11_muc3',
  'g11_bai12_muc1', 'g11_bai12_muc2', 'g11_bai12_muc3',
  'g11_bai13_muc1', 'g11_bai13_muc2', 'g11_bai13_muc3',
  'g11_bai14_muc1', 'g11_bai14_muc2', 'g11_bai14_muc3',
  'g11_ontap_c4_muc1', 'g11_ontap_c4_muc2', 'g11_ontap_c4_muc3'
];

let errors = 0;
console.log("\n1. Kiểm tra 18 mục trong G11_CHAPTER4_DATA & Audio Files:");
expectedKeys.forEach(k => {
  const d = ch4Data[k];
  if (!d) {
    console.error(`  ❌ Thiếu dữ liệu bài giảng: ${k}`);
    errors++;
    return;
  }
  if (!d.scenes || d.scenes.length !== 12) {
    console.error(`  ❌ ${k}: Số scene không đúng (có ${d.scenes ? d.scenes.length : 0}/12)`);
    errors++;
  }
  
  const rootAudio = 'audio/' + k + '.mp3';
  const pubAudio = 'public/audio/' + k + '.mp3';
  if (!fs.existsSync(rootAudio) || fs.statSync(rootAudio).size < 10000) {
    console.error(`  ❌ ${k}: Audio root bị lỗi hoặc thiếu (${rootAudio})`);
    errors++;
  }
  if (!fs.existsSync(pubAudio) || fs.statSync(pubAudio).size < 10000) {
    console.error(`  ❌ ${k}: Audio public bị lỗi hoặc thiếu (${pubAudio})`);
    errors++;
  }
  
  // Verify alias
  const alias = k.replace('g11_', 'toan11_');
  if (!ch4Data[alias]) {
    console.error(`  ❌ Thiếu alias ${alias}`);
    errors++;
  }
  
  console.log(`  ✔ [${k}] ${d.title} | ${d.scenes.length} scenes | Duration: ${d.formattedDuration} (${d.totalDuration}s) | Audio: ${fs.statSync(rootAudio).size} bytes`);
});

// 2. Verify DEDICATED_LESSONS_DB in kntt-lessons-grade11.js
console.log("\n2. Kiểm tra DEDICATED_LESSONS_DB trong kntt-lessons-grade11.js & public/kntt-lessons-grade11.js:");
['kntt-lessons-grade11.js', 'public/kntt-lessons-grade11.js'].forEach(file => {
  const code = fs.readFileSync(file, 'utf8');
  const sandbox = { window: {} };
  sandbox.window = sandbox;
  new Function('window', code)(sandbox.window);
  const lessons = sandbox.window.DEDICATED_LESSONS_DB;
  
  const checkLessons = ['toan11_bai10', 'toan11_bai11', 'toan11_bai12', 'toan11_bai13', 'toan11_bai14', 'toan11_ontap_c4'];
  checkLessons.forEach(id => {
    const l = lessons[id];
    if (!l) {
      console.error(`  ❌ ${file}: Thiếu ${id}`);
      errors++;
    } else {
      let mcqCount = 0;
      l.sections.forEach(s => mcqCount += (s.mcqs ? s.mcqs.length : 0));
      if (l.sections.length !== 3 || mcqCount !== 9 || l.tfQuestions.length !== 6 || l.saQuestions.length !== 4) {
        console.error(`  ❌ ${file} - ${id}: Số lượng câu hỏi không chuẩn (sec: ${l.sections.length}, mcqs: ${mcqCount}, tf: ${l.tfQuestions.length}, sa: ${l.saQuestions.length})`);
        errors++;
      } else {
        console.log(`  ✔ [${file}] ${id}: 3 sections, 9 MCQs, 6 TF, 4 SA`);
      }
    }
  });
});

// 3. Verify SGK11_MENU_CONFIG in interactive_lecture.js
console.log("\n3. Kiểm tra SGK11_MENU_CONFIG trong js/interactive_lecture.js & public/js/interactive_lecture.js:");
['js/interactive_lecture.js', 'public/js/interactive_lecture.js'].forEach(file => {
  const code = fs.readFileSync(file, 'utf8');
  const m = code.match(/const SGK11_MENU_CONFIG = (\[[\s\S]*?\]);/);
  if (!m) {
    console.error(`  ❌ ${file}: Không tìm thấy SGK11_MENU_CONFIG`);
    errors++;
    return;
  }
  const conf = eval(m[1]);
  const c4Groups = conf.filter(g => g.chapterNumber === 1104);
  if (c4Groups.length !== 6) {
    console.error(`  ❌ ${file}: Số nhóm trong Chương 4 là ${c4Groups.length} (kỳ vọng 6)`);
    errors++;
  } else {
    let secCount = 0;
    c4Groups.forEach(g => secCount += g.sections.length);
    console.log(`  ✔ [${file}] Chương 4 có đủ 6 nhóm bài, tổng cộng ${secCount} mục bài giảng.`);
  }
});

console.log("\n==================================================================");
if (errors === 0) {
  console.log("🎉 TẤT CẢ KIỂM ĐỊNH HOÀN TOÀN CHÍNH XÁC 100% - ZERO ERROR! 🎉");
} else {
  console.error(`⚠️ PHÁT HIỆN ${errors} LỖI CẦN XỬ LÝ!`);
}
console.log("==================================================================");
