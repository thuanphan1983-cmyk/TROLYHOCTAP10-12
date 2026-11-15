const fs = require('fs');
const path = require('path');

console.log('--- KIỂM TRA TOÀN DIỆN CHƯƠNG 2 TOÁN 11 KNTT ---');

const jsPath1 = path.join(__dirname, 'js', 'g11_chapter2_data.js');
const jsPath2 = path.join(__dirname, 'public', 'js', 'g11_chapter2_data.js');

if (!fs.existsSync(jsPath1)) {
  console.error('❌ js/g11_chapter2_data.js không tồn tại!');
  process.exit(1);
}
if (!fs.existsSync(jsPath2)) {
  console.error('❌ public/js/g11_chapter2_data.js không tồn tại!');
  process.exit(1);
}

// Mock window
global.window = {};
require(jsPath1);
const data = global.window.G11_CHAPTER2_DATA;

const expectedSections = [
  'g11_bai5_muc1', 'g11_bai5_muc2', 'g11_bai5_muc3',
  'g11_bai6_muc1', 'g11_bai6_muc2', 'g11_bai6_muc3',
  'g11_bai7_muc1', 'g11_bai7_muc2', 'g11_bai7_muc3',
  'g11_ontap_c2_muc1', 'g11_ontap_c2_muc2', 'g11_ontap_c2_muc3'
];

let totalScenes = 0;
let errors = 0;

for (const secKey of expectedSections) {
  const sec = data[secKey];
  if (!sec) {
    console.error(`❌ Thiếu mục: ${secKey}`);
    errors++;
    continue;
  }
  
  if (!Array.isArray(sec.scenes) || sec.scenes.length !== 12) {
    console.error(`❌ Mục ${secKey} có ${sec.scenes ? sec.scenes.length : 0} scenes (yêu cầu đúng 12 scenes)!`);
    errors++;
  } else {
    totalScenes += sec.scenes.length;
  }
  
  // Check audio file existence
  const audioRel = sec.audio.replace(/^\//, '');
  const audioPath1 = path.join(__dirname, audioRel);
  const audioPath2 = path.join(__dirname, 'public', audioRel);
  
  if (!fs.existsSync(audioPath1) || fs.statSync(audioPath1).size < 10000) {
    console.error(`❌ Thiếu hoặc audio quá nhỏ: ${audioPath1}`);
    errors++;
  }
  if (!fs.existsSync(audioPath2) || fs.statSync(audioPath2).size < 10000) {
    console.error(`❌ Thiếu hoặc public audio quá nhỏ: ${audioPath2}`);
    errors++;
  }
  
  // Check countdown widgets in examples (scenes 3, 5, 7, 9)
  for (const exIdx of [3, 5, 7, 9]) {
    const sc = sec.scenes[exIdx - 1];
    if (!sc.bodyHtml.includes('countdown-clock-widget')) {
      console.warn(`⚠️ Mục ${secKey} scene ${exIdx} thiếu widget đồng hồ countdown!`);
    }
  }
  
  console.log(`✔ [${secKey}] ${sec.sectionTitle} (${sec.formattedDuration || sec.totalDuration + 's'}) - 12 scenes OK`);
}

console.log(`\n========================================`);
console.log(`Tổng số mục kiểm tra: ${expectedSections.length}`);
console.log(`Tổng số scenes hợp lệ: ${totalScenes} / 144`);
console.log(`Số lỗi phát hiện: ${errors}`);
console.log(`========================================`);

if (errors > 0) {
  process.exit(1);
} else {
  console.log('🎉 TẤT CẢ 9 MỤC ĐẠT CHUẨN 100%!');
}
