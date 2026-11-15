// Test script for Chapter 3 Toán 11 KNTT
const fs = require('fs');
const path = require('path');

const jsPath1 = path.join(__dirname, 'js', 'g11_chapter3_data.js');
const jsPath2 = path.join(__dirname, 'public', 'js', 'g11_chapter3_data.js');
const audioDir1 = path.join(__dirname, 'audio');
const audioDir2 = path.join(__dirname, 'public', 'audio');

console.log('🧪 Starting Verification of Chapter 3 Toán 11 KNTT...');

if (!fs.existsSync(jsPath1) || !fs.existsSync(jsPath2)) {
  console.log('⏳ JS files not yet fully written. Waiting...');
  process.exit(1);
}

const data = require(jsPath1);
const expectedSections = [
  'g11_bai8_muc1', 'g11_bai8_muc2', 'g11_bai8_muc3',
  'g11_bai9_muc1', 'g11_bai9_muc2', 'g11_bai9_muc3',
  'g11_ontap_c3_muc1', 'g11_ontap_c3_muc2', 'g11_ontap_c3_muc3'
];

let totalScenes = 0;
let errors = [];

expectedSections.forEach(secKey => {
  const sec = data[secKey];
  if (!sec) {
    errors.push(`Missing section: ${secKey}`);
    return;
  }
  
  if (!Array.isArray(sec.scenes) || sec.scenes.length !== 12) {
    errors.push(`Section ${secKey} does not have exactly 12 scenes (found ${sec.scenes ? sec.scenes.length : 0})`);
  } else {
    totalScenes += sec.scenes.length;
    sec.scenes.forEach((sc, i) => {
      if (!sc.bodyHtml || sc.bodyHtml.trim().length === 0) {
        errors.push(`Section ${secKey} Scene ${i+1} has empty bodyHtml!`);
      }
      if (!sc.narration || sc.narration.trim().length === 0) {
        errors.push(`Section ${secKey} Scene ${i+1} has empty narration!`);
      }
      if (typeof sc.duration !== 'number' || sc.duration <= 0) {
        errors.push(`Section ${secKey} Scene ${i+1} has invalid duration: ${sc.duration}`);
      }
      // Check for KaTeX corrupted escapes (\x0c, \x08, etc.)
      const checkStr = (sc.bodyHtml || '') + (sc.mascotTip || '');
      if (checkStr.includes('\x0c')) errors.push(`Section ${secKey} Scene ${i+1} contains formfeed \\x0c!`);
      if (checkStr.includes('\x08')) errors.push(`Section ${secKey} Scene ${i+1} contains backspace \\x08!`);
    });
  }

  // Check audio file
  const mp3File = `${secKey}.mp3`;
  const p1 = path.join(audioDir1, mp3File);
  const p2 = path.join(audioDir2, mp3File);
  if (!fs.existsSync(p1) || fs.statSync(p1).size < 100000) {
    errors.push(`Audio missing or too small in root: ${mp3File}`);
  }
  if (!fs.existsSync(p2) || fs.statSync(p2).size < 100000) {
    errors.push(`Audio missing or too small in public: ${mp3File}`);
  }
});

console.log(`\n📊 Verification Results:`);
console.log(`  • Expected Sections: ${expectedSections.length}`);
console.log(`  • Total Scenes Verified: ${totalScenes} / 108`);
console.log(`  • Errors Found: ${errors.length}`);

if (errors.length > 0) {
  console.error('❌ Validation Failed with errors:');
  errors.forEach(e => console.error(`  - ${e}`));
  process.exit(1);
} else {
  console.log('✅ ALL 108 SCENES, AUDIOS, AND KATEX STRINGS PASSED 100% PERFECTLY!');
  process.exit(0);
}
