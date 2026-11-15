// verify_ontap_c1.js
const fs = require('fs');
const path = require('path');

process.chdir(__dirname);

console.log("=== VERIFYING GRADE 11 CHAPTER 1 REVIEW ===");
console.log("Working directory:", process.cwd());

// 1. Verify g11_chapter1_data.js
global.window = {};
require('./js/g11_chapter1_data.js');

const c1 = global.window.G11_CHAPTER1_DATA;
if (!c1) {
  console.error("❌ window.G11_CHAPTER1_DATA is missing!");
  process.exit(1);
}

const keys = ['g11_ontap_c1_muc1', 'g11_ontap_c1_muc2', 'g11_ontap_c1_muc3'];
keys.forEach(k => {
  const d = c1[k];
  if (!d) {
    console.error(`❌ Section ${k} missing in G11_CHAPTER1_DATA!`);
    process.exit(1);
  }
  console.log(`\n✔ Section ${k} found:`);
  console.log(`  - Title: ${d.title}`);
  console.log(`  - Total Duration: ${d.totalDuration}s (~${(d.totalDuration/60).toFixed(2)} min)`);
  console.log(`  - Scenes Count: ${d.scenes.length}`);
  console.log(`  - Timeline Count: ${d.timeline.length}`);
  console.log(`  - Audio: ${d.audio}`);

  if (d.scenes.length !== 12) {
    console.error(`❌ Expected 12 scenes, got ${d.scenes.length}`);
    process.exit(1);
  }

  d.scenes.forEach(sc => {
    if (!sc.bodyHtml || sc.bodyHtml.trim().length === 0) {
      console.error(`❌ Scene ${sc.sceneIndex} has empty bodyHtml!`);
      process.exit(1);
    }
    if (typeof sc.startTime !== 'number' || typeof sc.endTime !== 'number' || sc.endTime <= sc.startTime) {
      console.error(`❌ Scene ${sc.sceneIndex} invalid timestamps: ${sc.startTime} -> ${sc.endTime}`);
      process.exit(1);
    }
  });
  console.log(`  ✔ All 12 scenes have valid non-empty bodyHtml & timestamps!`);
});

// 2. Verify Audio files exist and sizes > 1MB
const audioFiles = [
  'audio/g11_ontap_c1_muc1.mp3', 'public/audio/g11_ontap_c1_muc1.mp3',
  'audio/g11_ontap_c1_muc2.mp3', 'public/audio/g11_ontap_c1_muc2.mp3',
  'audio/g11_ontap_c1_muc3.mp3', 'public/audio/g11_ontap_c1_muc3.mp3'
];
audioFiles.forEach(f => {
  if (!fs.existsSync(f)) {
    console.error(`❌ Audio file missing: ${f}`);
    process.exit(1);
  }
  const sz = fs.statSync(f).size;
  if (sz < 1000000) {
    console.error(`❌ Audio file too small (${sz} bytes): ${f}`);
    process.exit(1);
  }
  console.log(`✔ Audio verified: ${f} (${sz} bytes)`);
});

// 3. Verify public/js/g11_chapter1_data.js sync
const js1 = fs.readFileSync('js/g11_chapter1_data.js', 'utf8');
const js2 = fs.readFileSync('public/js/g11_chapter1_data.js', 'utf8');
if (js1 !== js2) {
  console.error("❌ js and public/js for g11_chapter1_data.js are out of sync!");
  process.exit(1);
}
console.log("✔ g11_chapter1_data.js is perfectly synced between js/ and public/js/!");

// 4. Verify interactive_lecture.js
const il1 = fs.readFileSync('js/interactive_lecture.js', 'utf8');
const il2 = fs.readFileSync('public/js/interactive_lecture.js', 'utf8');
if (il1 !== il2) {
  console.error("❌ interactive_lecture.js is out of sync!");
  process.exit(1);
}
if (!il1.includes('toan11_ontap_c1')) {
  console.error("❌ toan11_ontap_c1 not found in interactive_lecture.js!");
  process.exit(1);
}
console.log("✔ interactive_lecture.js verified & has toan11_ontap_c1!");

console.log("\n=======================================================");
console.log("🎉 ALL TESTS PASSED! GRADE 11 CHAPTER 1 REVIEW IS 100% COMPLETE!");
console.log("=======================================================");
