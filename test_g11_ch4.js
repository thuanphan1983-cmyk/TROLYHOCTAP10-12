const fs = require('fs');
const path = require('path');

console.log('====================================================');
console.log('🧪 TESTING TOÁN 11 KNTT - CHƯƠNG IV (BÀI 10, 11, 12)');
console.log('====================================================');

const dataPath = path.join(__dirname, 'js', 'g11_chapter4_data.js');
if (!fs.existsSync(dataPath)) {
  console.error('❌ File not found:', dataPath);
  process.exit(1);
}

const data = require(dataPath);
const expectedSections = [
  'g11_bai10_muc1', 'g11_bai10_muc2', 'g11_bai10_muc3',
  'g11_bai11_muc1', 'g11_bai11_muc2', 'g11_bai11_muc3',
  'g11_bai12_muc1', 'g11_bai12_muc2', 'g11_bai12_muc3'
];

let totalErrors = 0;
let totalScenes = 0;

expectedSections.forEach(secKey => {
  const sec = data[secKey];
  if (!sec) {
    console.error(`❌ Missing section: ${secKey}`);
    totalErrors++;
    return;
  }

  // Check alias
  const aliasKey = secKey.replace('g11_', 'toan11_');
  if (!data[aliasKey]) {
    console.error(`❌ Missing alias: ${aliasKey}`);
    totalErrors++;
  }

  // Check audio files on disk
  const audioRel = sec.audio.replace(/^\//, '');
  const rootAudio = path.join(__dirname, audioRel);
  const publicAudio = path.join(__dirname, 'public', audioRel);

  if (!fs.existsSync(rootAudio) || fs.statSync(rootAudio).size < 100000) {
    console.error(`❌ Audio missing or too small in root: ${rootAudio}`);
    totalErrors++;
  }
  if (!fs.existsSync(publicAudio) || fs.statSync(publicAudio).size < 100000) {
    console.error(`❌ Audio missing or too small in public: ${publicAudio}`);
    totalErrors++;
  }

  // Check scenes
  if (!Array.isArray(sec.scenes) || sec.scenes.length !== 12) {
    console.error(`❌ Section ${secKey} has ${sec.scenes ? sec.scenes.length : 0} scenes, expected 12`);
    totalErrors++;
  } else {
    totalScenes += sec.scenes.length;
  }

  // Check scene fields and KaTeX
  sec.scenes.forEach((sc, idx) => {
    const sNum = idx + 1;
    if (sc.sceneIndex !== sNum) {
      console.error(`❌ Section ${secKey} scene ${sNum} has wrong sceneIndex: ${sc.sceneIndex}`);
      totalErrors++;
    }
    if (!sc.title || !sc.subtitle || !sc.narration || !sc.bodyHtml) {
      console.error(`❌ Section ${secKey} scene ${sNum} missing basic fields`);
      totalErrors++;
    }
    if (typeof sc.duration !== 'number' || sc.duration <= 0) {
      console.error(`❌ Section ${secKey} scene ${sNum} invalid duration: ${sc.duration}`);
      totalErrors++;
    }
    // Check for KaTeX raw corruption like formfeed \x0c
    if (sc.bodyHtml.includes('\x0c') || sc.bodyHtml.includes('\x08')) {
      console.error(`❌ Section ${secKey} scene ${sNum} contains corrupted escape characters!`);
      totalErrors++;
    }
  });

  // Check countdown widgets in example scenes (scenes 5, 7, 9, 11 or similar)
  const hasCountdown = sec.scenes.some(sc => sc.bodyHtml.includes('countdown-clock-widget'));
  if (!hasCountdown) {
    console.error(`❌ Section ${secKey} missing countdown clock widgets!`);
    totalErrors++;
  }

  console.log(`  ✔ [${secKey}] Passed (${sec.scenes.length} scenes, duration: ${sec.formattedDuration}, audio: ${(fs.statSync(rootAudio).size / 1024 / 1024).toFixed(2)} MB)`);
});

console.log('----------------------------------------------------');
console.log(`Total verified scenes: ${totalScenes} / 108`);
console.log(`Total errors: ${totalErrors}`);

if (totalErrors === 0) {
  console.log('🎉 ALL CHAPTER 4 TESTS PASSED FLAWLESSLY! 🎉');
  process.exit(0);
} else {
  console.error('💥 TESTS FAILED!');
  process.exit(1);
}
