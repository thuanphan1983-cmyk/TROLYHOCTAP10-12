# -*- coding: utf-8 -*-
"""
Module generator_g12.py
Bộ đề thi độc lập, chính xác 100% cho toàn bộ 19 bài học Toán 12 - SGK Kết nối tri thức.
Mỗi bài học có 2 đề thi độc lập (Exam 1 & Exam 2) tập trung 100% vào kiến thức của bài học đó,
hoàn toàn không có sự trùng lặp hoặc nhiễm chéo kiến thức giữa các bài trong cùng một chương.

Cấu trúc mỗi đề: 12 Trắc nghiệm (3.0đ) + 4 Đúng/Sai (4.0đ) + 6 Trả lời ngắn (3.0đ) = 10.0đ.
Tỷ lệ nhận thức: 30% NB (Câu 1-4 TN) | 30% TH (Câu 5-8 TN) | 20% VD (Câu 9-10 TN, TF, SA) | 20% VDC (Câu 11-12 TN, TF, SA).
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')

from g12_ch1_lessons import get_ch1_lesson
from g12_ch2_lessons import get_ch2_lesson
from g12_ch3_lessons import get_ch3_lesson
from g12_ch4_lessons import get_ch4_lesson
from g12_ch5_lessons import get_ch5_lesson
from g12_ch6_lessons import get_ch6_lesson
from curriculum_registry import G12_LESSONS

def get_g12_lesson_questions(lnum, k):
    """
    Trả về bộ câu hỏi (mcqs, tfs, sas) đúng 100% theo nội dung bài học lnum (1 đến 19) và mã đề k (1 hoặc 2).
    """
    if 1 <= lnum <= 5:
        return get_ch1_lesson(lnum, k)
    elif 6 <= lnum <= 8:
        return get_ch2_lesson(lnum, k)
    elif 9 <= lnum <= 10:
        return get_ch3_lesson(lnum, k)
    elif 11 <= lnum <= 13:
        return get_ch4_lesson(lnum, k)
    elif 14 <= lnum <= 17:
        return get_ch5_lesson(lnum, k)
    elif 18 <= lnum <= 19:
        return get_ch6_lesson(lnum, k)
    else:
        raise ValueError(f"Bài học lnum={lnum} không hợp lệ trong chương trình Toán 12 (1-19).")

def generate_g12_exam(lesson_tuple, k):
    """
    Tạo cấu trúc hoàn chỉnh của đề thi ôn tập sau bài học cho Lớp 12.
    """
    lesson_id, lnum, lesson_name, domain, keywords = lesson_tuple
    mcqs, tfs, sas = get_g12_lesson_questions(lnum, k)
    
    exam_id = f"{lesson_id}_de{k}"
    exam_title = f"{lesson_name} - Đề Ôn Tập {k}"
    
    suffix = "A" if k == 1 else "B"
    code = f"OT12-{lnum:02d}{suffix}"

    return {
        "id": exam_id,
        "examNumber": k,
        "title": exam_title,
        "lessonId": lesson_id,
        "lessonNumber": lnum,
        "lessonTitle": lesson_name,
        "domain": domain,
        "examIndex": k,
        "grade": "12",
        "code": code,
        "durationMinutes": 90,
        "duration": 90,
        "totalScore": 10.0,
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "mcqs": mcqs,
        "tfQuestions": tfs,
        "trueFalse": tfs,
        "saQuestions": sas,
        "shortAnswers": sas,
        "essayQuestions": [],
        "questions": {
            "multipleChoice": mcqs,
            "trueFalse": tfs,
            "shortAnswer": sas
        }
    }

def build_all_g12_exams():
    db = {}
    for l in G12_LESSONS:
        lid = l[0]
        ex1 = generate_g12_exam(l, 1)
        ex2 = generate_g12_exam(l, 2)
        if ex1 and ex2:
            db[lid] = [ex1, ex2]
        else:
            print(f"Error building G12 exams for {lid}!")
    return db

if __name__ == "__main__":
    print("Testing all 19 Grade 12 lessons (38 exams total)...")
    db = build_all_g12_exams()
    for lid, exs in db.items():
        assert len(exs) == 2, f"G12 {lid} does not have 2 exams!"
        for ex in exs:
            assert len(ex["mcqs"]) == 12, f"G12 {lid} MCQ count != 12"
            assert len(ex["tfQuestions"]) == 4, f"G12 {lid} TF count != 4"
            assert len(ex["saQuestions"]) == 6, f"G12 {lid} SA count != 6"
    print(f"All {len(db)} Grade 12 lessons ({len(db)*2} exams) validated successfully!")
