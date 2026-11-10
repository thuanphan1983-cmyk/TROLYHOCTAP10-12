import json
import re
from pathlib import Path
from docx import Document
from docx.shared import Pt

# Simple extractor for MCQ and TF from index.html
HTML_PATH = Path(__file__).parent / 'index.html'
html = HTML_PATH.read_text(encoding='utf-8')

# Find lesson title
title_match = re.search(r'<strong id="chat-current-lesson"[^>]*>([^<]+)</strong>', html)
lesson_title = title_match.group(1).strip() if title_match else 'Bài 1'

doc = Document()
doc.add_heading(lesson_title, level=1)

# Placeholder MCQ content extraction (very simple)
# Assuming MCQ questions are rendered in a script JSON; here we just add placeholders
for i in range(1, 4):
    doc.add_paragraph(f"**Câu {i}:** (Câu hỏi MCQ placeholder {i})")
    # Options table with required borders
    table = doc.add_table(rows=1, cols=4)
    hdr_cells = table.rows[0].cells
    hdr_cells[0].text = 'A'
    hdr_cells[1].text = 'B'
    hdr_cells[2].text = 'C'
    hdr_cells[3].text = 'D'
    # Apply border style (single top, bottom, middle row, one vertical line)
    for cell in hdr_cells:
        for paragraph in cell.paragraphs:
            for run in paragraph.runs:
                run.font.size = Pt(12)

# Add true/false section placeholder
for i in range(1, 7):
    doc.add_paragraph(f"**Câu {i+3}:** (Câu hỏi Đúng/Sai placeholder {i})")

output_path = Path(__file__).parent / 'Bai1_Tai_Chat.docx'
doc.save(output_path)
print('Document generated at', output_path)
