# -*- coding: utf-8 -*-
import json, random, math, os, sys

def make_mcq(q_id, level, text, a, b, c, d, correct, explain, shuffle=False):
    letters = ["A", "B", "C", "D"]
    opts_map = { "A": a, "B": b, "C": c, "D": d }
    if shuffle:
        items = [{"text": opts_map[l], "is_correct": (l == correct)} for l in letters]
        random.shuffle(items)
        new_opts = {}
        new_correct = "A"
        for i, l in enumerate(letters):
            new_opts[l] = items[i]["text"]
            if items[i]["is_correct"]:
                new_correct = l
        return {
            "id": q_id,
            "level": level,
            "question": f"**Câu {q_id}:** {text}",
            "options": new_opts,
            "correct": new_correct,
            "explanation": explain
        }
    return {
        "id": q_id,
        "level": level,
        "question": f"**Câu {q_id}:** {text}",
        "options": opts_map,
        "correct": correct,
        "explanation": explain
    }

def make_tf(q_id, context, items):
    return {
        "id": q_id,
        "context": f"**Câu {q_id}:** {context}",
        "items": [
            {
                "label": it[0],
                "subLabel": f"{it[0]})",
                "content": it[1],
                "correct": it[2],
                "explanation": it[3]
            }
            for it in items
        ]
    }

def make_sa(q_id, level, text, ans, explain, accepted=None):
    return {
        "id": q_id,
        "level": level,
        "question": f"**Câu {q_id}:** {text}",
        "correctAnswer": str(ans),
        "acceptedAnswers": accepted or [str(ans)],
        "explanation": explain
    }

def make_essay(q_id, level, score, title, text, explain):
    return {
        "id": q_id,
        "level": level,
        "title": title,
        "maxScore": score,
        "question": f"**Bài {q_id} ({score:.2f} điểm):** {text}",
        "explanation": explain
    }

print("Generator engine base ready.")
