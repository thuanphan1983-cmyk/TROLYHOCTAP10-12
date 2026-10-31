# -*- coding: utf-8 -*-
import random

def balance_mcqs(mcqs, seed):
    """
    Given 12 MCQs, balances the correct answers so that there are
    exactly 3 of 'A', 3 of 'B', 3 of 'C', 3 of 'D'.
    """
    rng = random.Random(seed)
    target_letters = ["A", "B", "C", "D"] * 3
    rng.shuffle(target_letters)
    
    new_mcqs = []
    for q, target in zip(mcqs, target_letters):
        q_copy = dict(q)
        old_opts = dict(q["options"])
        correct_content = old_opts[q["correct"]]
        wrong_contents = [v for k, v in old_opts.items() if k != q["correct"]]
        rng.shuffle(wrong_contents)
        
        new_opts = {}
        new_opts[target] = correct_content
        other_letters = [l for l in ["A", "B", "C", "D"] if l != target]
        for l, content in zip(other_letters, wrong_contents):
            new_opts[l] = content
            
        sorted_opts = {l: new_opts[l] for l in ["A", "B", "C", "D"]}
        q_copy["options"] = sorted_opts
        q_copy["correct"] = target
        new_mcqs.append(q_copy)
    return new_mcqs

def validate_exam(exam):
    """
    Validates that an exam has 12 MCQs, 4 TF questions (16 items), 6 Short Answer questions.
    """
    assert len(exam["mcqs"]) == 12, f"Exam {exam['id']} has {len(exam['mcqs'])} MCQs, expected 12"
    counts = {"A": 0, "B": 0, "C": 0, "D": 0}
    for q in exam["mcqs"]:
        assert q["correct"] in counts, f"Invalid correct key {q['correct']}"
        counts[q["correct"]] += 1
        assert len(q["options"]) == 4, f"Options != 4 in {q['id']}"
    assert counts == {"A": 3, "B": 3, "C": 3, "D": 3}, f"Exam {exam['id']} MCQ unbalanced: {counts}"

    assert len(exam["tfQuestions"]) == 4, f"Exam {exam['id']} has {len(exam['tfQuestions'])} TF, expected 4"
    for q in exam["tfQuestions"]:
        assert len(q["items"]) == 4, f"TF question {q['id']} items != 4"
        for it in q["items"]:
            assert isinstance(it["correct"], bool), f"TF item correct is not bool: {it}"

    assert len(exam["saQuestions"]) == 6, f"Exam {exam['id']} has {len(exam['saQuestions'])} SA, expected 6"
    for q in exam["saQuestions"]:
        assert "correctAnswer" in q and "acceptedAnswers" in q, f"Missing answer in SA {q['id']}"
        assert len(q["correctAnswer"]) > 0
