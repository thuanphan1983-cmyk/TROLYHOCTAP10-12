# -*- coding: utf-8 -*-
"""
Assemble all 9 Graduation Review Topics into `kntt-topic-exams.js`
"""
import sys
import json

if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

from build_topic_cd1 import get_topic_cd1
from build_topic_cd2 import get_topic_cd2
from build_topic_cd3 import get_topic_cd3
from build_topic_cd4 import get_topic_cd4
from build_topic_cd5 import get_topic_cd5
from build_topic_cd6 import get_topic_cd6
from build_topic_cd7 import get_topic_cd7
from build_topic_cd8 import get_topic_cd8
from build_topic_cd9 import get_topic_cd9

def main():
    print("Collecting 9 graduation review topics...")
    t1 = get_topic_cd1()
    print(f"Loaded {t1['code']}: {t1['title']} ({len(t1['exams'])} exams)")
    t2 = get_topic_cd2()
    print(f"Loaded {t2['code']}: {t2['title']} ({len(t2['exams'])} exams)")
    t3 = get_topic_cd3()
    print(f"Loaded {t3['code']}: {t3['title']} ({len(t3['exams'])} exams)")
    t4 = get_topic_cd4()
    print(f"Loaded {t4['code']}: {t4['title']} ({len(t4['exams'])} exams)")
    t5 = get_topic_cd5()
    print(f"Loaded {t5['code']}: {t5['title']} ({len(t5['exams'])} exams)")
    t6 = get_topic_cd6()
    print(f"Loaded {t6['code']}: {t6['title']} ({len(t6['exams'])} exams)")
    t7 = get_topic_cd7()
    print(f"Loaded {t7['code']}: {t7['title']} ({len(t7['exams'])} exams)")
    t8 = get_topic_cd8()
    print(f"Loaded {t8['code']}: {t8['title']} ({len(t8['exams'])} exams)")
    t9 = get_topic_cd9()
    print(f"Loaded {t9['code']}: {t9['title']} ({len(t9['exams'])} exams)")

    topics_db = [t1, t2, t3, t4, t5, t6, t7, t8, t9]
    assert len(topics_db) == 9

    total_exams = sum(len(t['exams']) for t in topics_db)
    total_mcqs = sum(len(e['mcqs']) for t in topics_db for e in t['exams'])
    total_tf = sum(len(e['tfQuestions']) for t in topics_db for e in t['exams'])
    total_sa = sum(len(e['saQuestions']) for t in topics_db for e in t['exams'])
    print(f"\nTotal Summary: {len(topics_db)} Topics, {total_exams} Exams, {total_mcqs} MCQs, {total_tf} TF questions, {total_sa} SA questions.")

    js_content = "/**\n * NGÂN HÀNG ÔN THI TỐT NGHIỆP THEO CHỦ ĐỀ (9 CHỦ ĐỀ - 45 ĐỀ LUYỆN TẬP)\n * Chuẩn cấu trúc Đề thi TN THPT 2025 - 2026 của Bộ GD&ĐT\n */\n"
    js_content += "if (typeof window === 'undefined') { globalThis.window = globalThis; }\n"
    js_content += "window.TOPIC_EXAMS_DB = " + json.dumps(topics_db, ensure_ascii=False, indent=2) + ";\n"
    js_content += "const TOPIC_EXAMS_DB = window.TOPIC_EXAMS_DB;\n"

    out_file = "kntt-topic-exams.js"
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Successfully generated {out_file} ({len(js_content)} characters)!")

if __name__ == "__main__":
    main()
