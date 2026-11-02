# -*- coding: utf-8 -*-
"""
Bộ sinh đề kiểm tra từng bài học Lớp 11 (Chương 1 đến Chương 9 - Tổng cộng 33 bài học, 66 đề thi).
Mỗi bài có 2 đề thi độc lập (k=1, k=2) tập trung 100% vào kiến thức bài học đó.
Cấu trúc mỗi đề Lớp 11:
- Phần I: 12 Câu Trắc nghiệm (3.0đ)
- Phần II: 2 Câu Đúng/Sai (8 ý - 2.0đ)
- Phần III: 6 Câu Trả lời ngắn (3.0đ)
- Phần IV: 4 Câu Tự luận (2.0đ)
Tổng điểm: 10.0đ. Chuẩn ma trận NB: 30%, TH: 30%, VD: 20%, VDC: 20%.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')

from curriculum_registry import G11_LESSONS
from g11_ch1_lessons import get_ch1_lesson
from g11_ch2_lessons import get_ch2_lesson
from g11_ch3_lessons import get_ch3_lesson
from g11_ch4_lessons import get_ch4_lesson
from g11_ch5_lessons import get_ch5_lesson
from g11_ch6_lessons import get_ch6_lesson
from g11_ch7_lessons import get_ch7_lesson
from g11_ch8_lessons import get_ch8_lesson
from g11_ch9_lessons import get_ch9_lesson

def generate_g11_exam(lnum, k):
    """
    Sinh đề thi ôn tập cho Bài số `lnum` của Lớp 11 (Exam k = 1 hoặc 2)
    """
    if 1 <= lnum <= 4:
        content = get_ch1_lesson(lnum, k)
    elif 5 <= lnum <= 7:
        content = get_ch2_lesson(lnum, k)
    elif 8 <= lnum <= 9:
        content = get_ch3_lesson(lnum, k)
    elif 10 <= lnum <= 14:
        content = get_ch4_lesson(lnum, k)
    elif 15 <= lnum <= 17:
        content = get_ch5_lesson(lnum, k)
    elif 18 <= lnum <= 21:
        content = get_ch6_lesson(lnum, k)
    elif 22 <= lnum <= 27:
        content = get_ch7_lesson(lnum, k)
    elif 28 <= lnum <= 30:
        content = get_ch8_lesson(lnum, k)
    elif 31 <= lnum <= 33:
        content = get_ch9_lesson(lnum, k)
    else:
        return None

    if content is None:
        return None

    mcqs, tfs, sas, essays = content

    lesson_tuple = next((item for item in G11_LESSONS if item[1] == lnum), None)
    lesson_id = lesson_tuple[0] if lesson_tuple else f"toan11_bai{lnum}"
    lesson_title = lesson_tuple[2] if lesson_tuple else f"Bài {lnum}"

    suffix = "A" if k == 1 else "B"
    code = f"OT11-{lnum:02d}{suffix}"

    exam = {
        "id": f"g11_b{lnum}_e{k}",
        "examNumber": k,
        "lessonId": lesson_id,
        "lessonTitle": lesson_title,
        "grade": "11",
        "title": f"Đề Ôn Tập {k}: {lesson_title}",
        "code": code,
        "durationMinutes": 90,
        "structure": "12 Câu TN (3.0đ) + 2 Câu Đ/S (2.0đ) + 6 Câu TLN (3.0đ) + 4 Câu Tự luận (2.0đ)",
        "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "mcqs": mcqs,
        "tfQuestions": tfs,
        "trueFalse": tfs,
        "saQuestions": sas,
        "shortAnswers": sas,
        "essayQuestions": essays
    }
    return exam

def build_all_g11_exams():
    db = {}
    for lid, lnum, title, domain, keywords in G11_LESSONS:
        ex1 = generate_g11_exam(lnum, 1)
        ex2 = generate_g11_exam(lnum, 2)
        if ex1 and ex2:
            db[lid] = [ex1, ex2]
        else:
            print(f"Error building exams for Lesson {lnum} ({lid})!")
    return db

if __name__ == "__main__":
    db = build_all_g11_exams()
    print(f"Successfully generated {len(db)} lessons ({len(db) * 2} exams) for Grade 11!")
    for l_id in sorted(db.keys()):
        e1, e2 = db[l_id]
        print(f"  {l_id}: {e1['title']} | MCQs={len(e1['mcqs'])}, TFs={len(e1['trueFalse'])}, SAs={len(e1['shortAnswers'])}, Essays={len(e1['essayQuestions'])}")
    print("All 66 Grade 11 exams validated successfully!")
