# -*- coding: utf-8 -*-
"""
Curriculum Master Registry for all 79 lessons of KNTT Math 10, 11, 12.
"""
import sys

# Grade 12 (19 lessons)
G12_LESSONS = [
    ("toan12_bai1", 1, "Bài 1: Tính đơn điệu và cực trị của hàm số", "Hàm số", ["đơn điệu", "cực trị", "đồng biến", "nghịch biến"]),
    ("toan12_bai2", 2, "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số", "Hàm số", ["giá trị lớn nhất", "giá trị nhỏ nhất", "gtln", "gtnn", "max", "min"]),
    ("toan12_bai3", 3, "Bài 3: Đường tiệm cận của đồ thị hàm số", "Hàm số", ["tiệm cận", "tiệm cận đứng", "tiệm cận ngang", "tiệm cận xiên"]),
    ("toan12_bai4", 4, "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số", "Hàm số", ["khảo sát", "vẽ đồ thị", "tâm đối xứng", "trục đối xứng"]),
    ("toan12_bai5", 5, "Bài 5: Ứng dụng thực tế của đạo hàm", "Hàm số", ["ứng dụng thực tế", "tối ưu", "chi phí", "doanh thu"]),
    ("toan12_bai6", 6, "Bài 6: Vectơ trong không gian", "Vectơ 3D", ["vectơ trong không gian", "đồng phẳng", "tích vô hướng"]),
    ("toan12_bai7", 7, "Bài 7: Hệ trục toạ độ trong không gian", "Oxyz", ["hệ trục toạ độ", "toạ độ điểm", "toạ độ vectơ", "oxyz"]),
    ("toan12_bai8", 8, "Bài 8: Biểu thức toạ độ của các phép toán vectơ", "Oxyz", ["biểu thức toạ độ", "tích vô hướng oxyz", "độ dài vectơ"]),
    ("toan12_bai9", 9, "Bài 9: Khoảng biến thiên và khoảng tứ phân vị", "Thống kê", ["khoảng biến thiên", "khoảng tứ phân vị", "mẫu số liệu ghép nhóm"]),
    ("toan12_bai10", 10, "Bài 10: Phương sai và độ lệch chuẩn", "Thống kê", ["phương sai", "độ lệch chuẩn", "ghép nhóm"]),
    ("toan12_bai11", 11, "Bài 11: Nguyên hàm", "Tích phân", ["nguyên hàm", "bảng nguyên hàm", "từng phần", "đổi biến"]),
    ("toan12_bai12", 12, "Bài 12: Tích phân", "Tích phân", ["tích phân", "định nghĩa tích phân", "tính chất tích phân"]),
    ("toan12_bai13", 13, "Bài 13: Ứng dụng hình học của tích phân", "Tích phân", ["ứng dụng hình học", "diện tích hình phẳng", "thể tích khối tròn xoay"]),
    ("toan12_bai14", 14, "Bài 14: Phương trình mặt phẳng", "Hình Oxyz", ["phương trình mặt phẳng", "mặt phẳng", "vectơ pháp tuyến"]),
    ("toan12_bai15", 15, "Bài 15: Phương trình đường thẳng trong không gian", "Hình Oxyz", ["phương trình đường thẳng", "vectơ chỉ phương", "đường thẳng oxyz"]),
    ("toan12_bai16", 16, "Bài 16: Công thức tính góc trong không gian", "Hình Oxyz", ["góc trong không gian", "góc giữa hai mặt phẳng", "góc giữa hai đường thẳng"]),
    ("toan12_bai17", 17, "Bài 17: Phương trình mặt cầu", "Hình Oxyz", ["mặt cầu", "tâm và bán kính", "tiếp diện"]),
    ("toan12_bai18", 18, "Bài 18: Xác suất có điều kiện", "Xác suất", ["xác suất có điều kiện", "điều kiện"]),
    ("toan12_bai19", 19, "Bài 19: Công thức xác suất toàn phần và công thức Bayes", "Xác suất", ["xác suất toàn phần", "bayes", "toàn phần"])
]

# Grade 11 (33 lessons)
G11_LESSONS = [
    ("toan11_bai1", 1, "Bài 1: Giá trị lượng giác của góc lượng giác", "Lượng giác", ["góc lượng giác", "radian", "sin", "cos"]),
    ("toan11_bai2", 2, "Bài 2: Công thức lượng giác", "Lượng giác", ["công thức cộng", "nhân đôi", "biến đổi tích thành tổng"]),
    ("toan11_bai3", 3, "Bài 3: Hàm số lượng giác", "Lượng giác", ["hàm số lượng giác", "tuần hoàn", "chu kỳ", "đồ thị lượng giác"]),
    ("toan11_bai4", 4, "Bài 4: Phương trình lượng giác cơ bản", "Lượng giác", ["phương trình lượng giác", "sin x = m", "cos x = m"]),
    ("toan11_bai5", 5, "Bài 5: Dãy số", "Dãy số", ["dãy số", "dãy tăng", "dãy giảm", "bị chặn"]),
    ("toan11_bai6", 6, "Bài 6: Cấp số cộng", "Dãy số", ["cấp số cộng", "công sai", "số hạng tổng quát"]),
    ("toan11_bai7", 7, "Bài 7: Cấp số nhân", "Dãy số", ["cấp số nhân", "công bội", "tổng n số hạng"]),
    ("toan11_bai8", 8, "Bài 8: Mẫu số liệu ghép nhóm", "Thống kê", ["mẫu số liệu ghép nhóm", "ghép nhóm", "tần số"]),
    ("toan11_bai9", 9, "Bài 9: Các số đặc trưng đo xu thế trung tâm", "Thống kê", ["số trung bình", "trung vị", "tứ phân vị", "mốt"]),
    ("toan11_bai10", 10, "Bài 10: Đường thẳng và mặt phẳng trong không gian", "Hình KG", ["mặt phẳng không gian", "giao tuyến", "điểm thuộc mặt phẳng"]),
    ("toan11_bai11", 11, "Bài 11: Hai đường thẳng song song", "Hình KG", ["hai đường thẳng song song", "chéo nhau"]),
    ("toan11_bai12", 12, "Bài 12: Đường thẳng và mặt phẳng song song", "Hình KG", ["đường thẳng song song mặt phẳng"]),
    ("toan11_bai13", 13, "Bài 13: Hai mặt phẳng song song", "Hình KG", ["hai mặt phẳng song song", "định lý thales"]),
    ("toan11_bai14", 14, "Bài 14: Phép chiếu song song", "Hình KG", ["phép chiếu song song", "hình biểu diễn"]),
    ("toan11_bai15", 15, "Bài 15: Giới hạn của dãy số", "Giới hạn", ["giới hạn của dãy số", "lim dãy số", "cấp số nhân lùi vô hạn"]),
    ("toan11_bai16", 16, "Bài 16: Giới hạn của hàm số", "Giới hạn", ["giới hạn hàm số", "lim x->x0", "dạng vô định 0/0"]),
    ("toan11_bai17", 17, "Bài 17: Hàm số liên tục", "Giới hạn", ["hàm số liên tục", "liên tục tại một điểm", "định lý giá trị trung gian"]),
    ("toan11_bai18", 18, "Bài 18: Luỹ thừa với số mũ thực", "Mũ Log", ["luỹ thừa", "số mũ thực", "căn bậc n"]),
    ("toan11_bai19", 19, "Bài 19: Lôgarit", "Mũ Log", ["lôgarit", "log", "công thức đổi cơ số", "ln"]),
    ("toan11_bai20", 20, "Bài 20: Hàm số mũ và hàm số lôgarit", "Mũ Log", ["hàm số mũ", "hàm số lôgarit", "đồ thị mũ log"]),
    ("toan11_bai21", 21, "Bài 21: Phương trình, bất phương trình mũ và lôgarit", "Mũ Log", ["phương trình mũ", "phương trình lôgarit", "bpt mũ"]),
    ("toan11_bai22", 22, "Bài 22: Hai đường thẳng vuông góc", "Hình KG", ["hai đường thẳng vuông góc", "góc giữa hai đường thẳng"]),
    ("toan11_bai23", 23, "Bài 23: Đường thẳng vuông góc với mặt phẳng", "Hình KG", ["đường thẳng vuông góc với mặt phẳng", "định lý 3 đường vuông góc"]),
    ("toan11_bai24", 24, "Bài 24: Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng", "Hình KG", ["góc giữa đường thẳng và mặt phẳng", "chiếu vuông góc"]),
    ("toan11_bai25", 25, "Bài 25: Hai mặt phẳng vuông góc", "Hình KG", ["hai mặt phẳng vuông góc", "góc phẳng nhị diện"]),
    ("toan11_bai26", 26, "Bài 26: Khoảng cách", "Hình KG", ["khoảng cách từ điểm đến mp", "khoảng cách giữa hai đường thẳng chéo nhau"]),
    ("toan11_bai27", 27, "Bài 27: Thể tích", "Hình KG", ["thể tích khối chóp", "thể tích lăng trụ", "hình hộp"]),
    ("toan11_bai28", 28, "Bài 28: Biến cố hợp, biến cố giao, biến cố độc lập", "Xác suất", ["biến cố hợp", "biến cố giao", "biến cố độc lập"]),
    ("toan11_bai29", 29, "Bài 29: Công thức cộng xác suất", "Xác suất", ["công thức cộng xác suất", "biến cố xung khắc"]),
    ("toan11_bai30", 30, "Bài 30: Công thức nhân xác suất cho hai biến cố độc lập", "Xác suất", ["công thức nhân xác suất", "độc lập"]),
    ("toan11_bai31", 31, "Bài 31: Định nghĩa và ý nghĩa của đạo hàm", "Đạo hàm", ["định nghĩa đạo hàm", "ý nghĩa vật lý", "ý nghĩa hình học", "tiếp tuyến"]),
    ("toan11_bai32", 32, "Bài 32: Các quy tắc tính đạo hàm", "Đạo hàm", ["quy tắc tính đạo hàm", "đạo hàm hàm hợp", "u/v", "u.v"]),
    ("toan11_bai33", 33, "Bài 33: Đạo hàm cấp hai", "Đạo hàm", ["đạo hàm cấp hai", "gia tốc tức thời"])
]

# Grade 10 (27 lessons)
G10_LESSONS = [
    ("toan10_bai1", 1, "Bài 1: Mệnh đề", "Mệnh đề", ["mệnh đề", "phủ định", "mệnh đề kéo theo", "tương đương"]),
    ("toan10_bai2", 2, "Bài 2: Tập hợp và các phép toán trên tập hợp", "Mệnh đề", ["tập hợp", "giao", "hợp", "hiệu", "phần bù"]),
    ("toan10_bai3", 3, "Bài 3: Bất phương trình bậc nhất hai ẩn", "BPT", ["bất phương trình bậc nhất hai ẩn", "miền nghiệm"]),
    ("toan10_bai4", 4, "Bài 4: Hệ bất phương trình bậc nhất hai ẩn", "BPT", ["hệ bất phương trình bậc nhất hai ẩn", "miền đa giác", "tối ưu"]),
    ("toan10_bai5", 5, "Bài 5: Giá trị lượng giác của một góc từ 0° đến 180°", "Lượng giác", ["giá trị lượng giác", "góc tù", "bù nhau"]),
    ("toan10_bai6", 6, "Bài 6: Hệ thức lượng trong tam giác", "Lượng giác", ["định lý cosin", "định lý sin", "diện tích tam giác", "heron"]),
    ("toan10_bai7", 7, "Bài 7: Các khái niệm mở đầu về vectơ", "Vectơ", ["vectơ", "độ dài vectơ", "cùng hướng", "vectơ không"]),
    ("toan10_bai8", 8, "Bài 8: Tổng và hiệu của hai vectơ", "Vectơ", ["quy tắc 3 điểm", "quy tắc hình bình hành", "hiệu vectơ"]),
    ("toan10_bai9", 9, "Bài 9: Tích của một vectơ với một số", "Vectơ", ["tích vectơ với một số", "trung điểm", "trọng tâm"]),
    ("toan10_bai10", 10, "Bài 10: Vectơ trong mặt phẳng toạ độ", "Vectơ", ["toạ độ vectơ", "toạ độ điểm", "vectơ đơn vị"]),
    ("toan10_bai11", 11, "Bài 11: Tích vô hướng của hai vectơ", "Vectơ", ["tích vô hướng", "góc giữa hai vectơ", "vuông góc"]),
    ("toan10_bai12", 12, "Bài 12: Số gần đúng và sai số", "Thống kê", ["số gần đúng", "sai số tuyệt đối", "sai số tương đối", "chữ số đáng tin"]),
    ("toan10_bai13", 13, "Bài 13: Các số đặc trưng đo xu thế trung tâm", "Thống kê", ["số trung bình", "trung vị", "tứ phân vị", "mốt"]),
    ("toan10_bai14", 14, "Bài 14: Các số đặc trưng đo mức độ phân tán", "Thống kê", ["khoảng biến thiên", "khoảng tứ phân vị", "phương sai", "độ lệch chuẩn"]),
    ("toan10_bai15", 15, "Bài 15: Hàm số", "Hàm số", ["tập xác định", "đồ thị hàm số", "đồng biến nghịch biến"]),
    ("toan10_bai16", 16, "Bài 16: Hàm số bậc hai", "Hàm số", ["hàm số bậc hai", "parabol", "đỉnh parabol", "trục đối xứng"]),
    ("toan10_bai17", 17, "Bài 17: Dấu của tam thức bậc hai", "Hàm số", ["tam thức bậc hai", "xét dấu", "bất phương trình bậc hai"]),
    ("toan10_bai18", 18, "Bài 18: Phương trình quy về phương trình bậc hai", "Hàm số", ["phương trình chứa căn", "căn f(x) = g(x)"]),
    ("toan10_bai19", 19, "Bài 19: Phương trình đường thẳng", "Hình Oxy", ["phương trình tham số", "phương trình tổng quát", "vectơ pháp tuyến"]),
    ("toan10_bai20", 20, "Bài 20: Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách", "Hình Oxy", ["vị trí tương đối", "góc giữa hai đường thẳng", "khoảng cách từ điểm đến đường thẳng"]),
    ("toan10_bai21", 21, "Bài 21: Đường tròn trong mặt phẳng toạ độ", "Hình Oxy", ["phương trình đường tròn", "tiếp tuyến đường tròn"]),
    ("toan10_bai22", 22, "Bài 22: Ba đường conic", "Hình Oxy", ["elip", "hyperbol", "parabol", "tiêu điểm", "độ dài trục"]),
    ("toan10_bai23", 23, "Bài 23: Quy tắc đếm", "Tổ hợp", ["quy tắc cộng", "quy tắc nhân", "sơ đồ cây"]),
    ("toan10_bai24", 24, "Bài 24: Hoán vị, chỉnh hợp và tổ hợp", "Tổ hợp", ["hoán vị", "chỉnh hợp", "tổ hợp"]),
    ("toan10_bai25", 25, "Bài 25: Nhị thức Newton", "Tổ hợp", ["nhị thức newton", "hệ số nhị thức"]),
    ("toan10_bai26", 26, "Bài 26: Biến cố và định nghĩa cổ điển của xác suất", "Xác suất", ["không gian mẫu", "biến cố", "xác suất cổ điển"]),
    ("toan10_bai27", 27, "Bài 27: Thực hành tính xác suất theo định nghĩa cổ điển", "Xác suất", ["tính xác suất", "rút thẻ", "chọn bi"])
]

print(f"Master registry ready: G12={len(G12_LESSONS)}, G11={len(G11_LESSONS)}, G10={len(G10_LESSONS)}. Total={len(G12_LESSONS) + len(G11_LESSONS) + len(G10_LESSONS)}")
