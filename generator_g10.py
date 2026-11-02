# -*- coding: utf-8 -*-
"""
Bộ sinh đề kiểm tra từng bài học Lớp 10 (Chương 1 đến Chương 9 - Tổng cộng 27 bài học, 54 đề thi).
Mỗi bài có 2 đề thi độc lập (k=1, k=2) tập trung 100% vào kiến thức bài học đó.
Cấu trúc mỗi đề Lớp 10:
- Phần I: 12 Câu Trắc nghiệm (3.0đ)
- Phần II: 2 Câu Đúng/Sai (8 ý - 2.0đ)
- Phần III: 6 Câu Trả lời ngắn (3.0đ)
- Phần IV: 4 Câu Tự luận (2.0đ)
Tổng điểm: 10.0đ. Chuẩn ma trận NB: 30%, TH: 30%, VD: 20%, VDC: 20%.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')

from curriculum_registry import G10_LESSONS
from g10_ch1_lessons import get_ch1_lesson
from g10_ch2_lessons import get_ch2_lesson
from g10_ch3_lessons import get_ch3_lesson
from g10_ch4_lessons import get_ch4_lesson
from g10_ch5_lessons import get_ch5_lesson
from g10_ch6_lessons import get_ch6_lesson
from g10_ch7_lessons import get_ch7_lesson
from g10_ch8_lessons import get_ch8_lesson
from g10_ch9_lessons import get_ch9_lesson

def generate_g10_exam(lnum, k):
    """
    Sinh đề thi ôn tập cho Bài số `lnum` của Lớp 10 (Exam k = 1 hoặc 2)
    """
    if 1 <= lnum <= 2:
        content = get_ch1_lesson(lnum, k)
    elif 3 <= lnum <= 4:
        content = get_ch2_lesson(lnum, k)
    elif 5 <= lnum <= 6:
        content = get_ch3_lesson(lnum, k)
    elif 7 <= lnum <= 11:
        content = get_ch4_lesson(lnum, k)
    elif 12 <= lnum <= 14:
        content = get_ch5_lesson(lnum, k)
    elif 15 <= lnum <= 18:
        content = get_ch6_lesson(lnum, k)
    elif 19 <= lnum <= 22:
        content = get_ch7_lesson(lnum, k)
    elif 23 <= lnum <= 25:
        content = get_ch8_lesson(lnum, k)
    elif 26 <= lnum <= 27:
        content = get_ch9_lesson(lnum, k)
    else:
        return None

    if content is None:
        return None

    mcqs, tfs, sas, essays = content

    lesson_tuple = next((item for item in G10_LESSONS if item[1] == lnum), None)
    lesson_id = lesson_tuple[0] if lesson_tuple else f"toan10_bai{lnum}"
    lesson_title = lesson_tuple[2] if lesson_tuple else f"Bài {lnum}"

    suffix = "A" if k == 1 else "B"
    code = f"OT10-{lnum:02d}{suffix}"

    exam = {
        "id": f"g10_b{lnum}_e{k}",
        "examNumber": k,
        "lessonId": lesson_id,
        "lessonTitle": lesson_title,
        "grade": "10",
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

def build_all_g10_exams():
    db = {}
    for lid, lnum, title, domain, keywords in G10_LESSONS:
        ex1 = generate_g10_exam(lnum, 1)
        ex2 = generate_g10_exam(lnum, 2)
        if ex1 and ex2:
            db[lid] = [ex1, ex2]
        else:
            print(f"Error building exams for Lesson {lnum} ({lid})!")
    return db

if __name__ == "__main__":
    db = build_all_g10_exams()
    print(f"Successfully built all G10 exams: {len(db)} lessons ({len(db)*2} exams).")
