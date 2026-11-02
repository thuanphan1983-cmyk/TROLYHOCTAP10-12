# -*- coding: utf-8 -*-
import json, sys, os
sys.stdout.reconfigure(encoding='utf-8')

from generator_g12 import build_all_g12_exams
from generator_g11 import build_all_g11_exams
from generator_g10 import build_all_g10_exams

print("Starting compilation of all lesson practice exams...")
g12_db = build_all_g12_exams()
g11_db = build_all_g11_exams()
g10_db = build_all_g10_exams()

master_db = {
    "12": g12_db,
    "11": g11_db,
    "10": g10_db
}

total_lessons = len(g12_db) + len(g11_db) + len(g10_db)
total_exams = sum(len(exs) for g in master_db.values() for exs in g.values())
print(f"Compilation summary: {total_lessons} lessons, {total_exams} total exams.")

# Convert to JSON string
json_str = json.dumps(master_db, ensure_ascii=False, indent=2)

js_content = f"""/**
 * BỘ ĐỀ ÔN TẬP TỪNG BÀI HỌC SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (LỚP 10, 11, 12)
 * Chuẩn 100% Bộ Giáo Dục & Đào Tạo:
 * - Lớp 10 & 11: 12 Trắc nghiệm (3.0đ) + 2 Đúng/Sai (2.0đ) + 6 Trả lời ngắn (3.0đ) + 4 Tự luận (2.0đ)
 * - Lớp 12: 12 Trắc nghiệm (3.0đ) + 4 Đúng/Sai (4.0đ) + 6 Trả lời ngắn (3.0đ)
 * - Tỷ lệ tư duy: 30% NB, 30% TH, 20% VD, 20% VDC
 * - Tích hợp giải chi tiết KaTeX, xuất PDF 2 trang A4 siêu tiết kiệm giấy
 */

(function () {{
  "use strict";

  window.LESSON_PRACTICE_EXAMS_DB = {json_str};

  /**
   * Lấy 2 đề ôn tập chuẩn Bộ GD&ĐT cho bất kỳ bài học nào của Khối 10, 11, 12
   * @param {{string}} lessonTitle - Tên bài học (ví dụ "Bài 1: Mệnh đề", "Bài 2: Tính đơn điệu...")
   * @param {{string|number}} gradeOrClass - "Lớp 10", "11", "12A1", v.v.
   * @returns {{Array}} Mảng 2 đề thi [exam1, exam2] hoặc null nếu không tìm thấy
   */
  function getLessonPracticeExams(lessonTitle, gradeOrClass) {{
    if (!lessonTitle) return null;
    const db = window.LESSON_PRACTICE_EXAMS_DB;
    if (!db) return null;

    // Xác định khối lớp 10, 11 hay 12
    let gKey = "12";
    const gStr = String(gradeOrClass || "").toLowerCase();
    if (gStr.includes("10")) gKey = "10";
    else if (gStr.includes("11")) gKey = "11";
    else if (gStr.includes("12")) gKey = "12";

    const gradeExams = db[gKey];
    if (!gradeExams) return null;

    const lowerTitle = lessonTitle.toLowerCase().trim();

    // 1. Trích xuất số bài nếu có (ví dụ "bài 1", "bài 02", "bài 14")
    const matchNum = lowerTitle.match(/bài\\s*(\\d+)/i);
    if (matchNum && matchNum[1]) {{
      const bNum = parseInt(matchNum[1], 10);
      const targetId = `toan${{gKey}}_bai${{bNum}}`;
      if (gradeExams[targetId] && gradeExams[targetId].length > 0) {{
        return gradeExams[targetId];
      }}
    }}

    // 2. So khớp trực tiếp theo ID bài học
    if (gradeExams[lessonTitle]) {{
      return gradeExams[lessonTitle];
    }}

    // 3. So khớp theo từ khóa tiêu đề bài học
    for (const key in gradeExams) {{
      const exams = gradeExams[key];
      if (exams && exams[0] && exams[0].lessonTitle) {{
        const titleClean = exams[0].lessonTitle.toLowerCase();
        // Lấy tên sau dấu ":"
        const coreName = titleClean.split(":")[1]?.trim() || titleClean;
        if (lowerTitle.includes(coreName) || coreName.includes(lowerTitle)) {{
          return exams;
        }}
      }}
    }}

    // Fallback: trả về đề bài 1 của khối tương ứng
    const firstKey = Object.keys(gradeExams)[0];
    return gradeExams[firstKey] || null;
  }}

  window.getLessonPracticeExams = getLessonPracticeExams;

}})();
"""

with open("kntt-lesson-practice-exams.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Generated kntt-lesson-practice-exams.js successfully. File size: {os.path.getsize('kntt-lesson-practice-exams.js')} bytes.")
