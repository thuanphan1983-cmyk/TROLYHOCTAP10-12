import asyncio
import os
import shutil
import edge_tts

VOICE = 'vi-VN-NamMinhNeural'
RATE = '-15%'  # Giảm 15% tốc độ để học sinh dễ nghe và khớp chuyển động hình
OUT_DIR = os.path.join('public', 'audio')
ROOT_AUDIO = 'audio'
os.makedirs(OUT_DIR, exist_ok=True)
os.makedirs(ROOT_AUDIO, exist_ok=True)

audios = {
    'bai2_muc1': '''Chào các em học sinh. Chúng ta tìm hiểu Bài hai Mục một: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số. Phần một: Khái niệm cốt lõi. Cho hàm số f(x) xác định trên tập D. Số M được gọi là giá trị lớn nhất của hàm số trên tập D nếu thỏa mãn hai điều kiện: f(x) luôn nhỏ hơn hoặc bằng M với mọi x thuộc tập D, và tồn tại ít nhất một phần tử x không thuộc tập D sao cho f tại x không bằng M. Ký hiệu max f(x) bằng M. Tương tự, số m là giá trị nhỏ nhất nếu f(x) luôn lớn hơn hoặc bằng m với mọi x thuộc tập D, và tồn tại x không thuộc tập D sao cho f tại x không bằng m. Phần hai: Phân biệt với cực trị. Cực đại, cực tiểu mang tính địa phương trong một lân cận. Còn giá trị lớn nhất, nhỏ nhất mang tính toàn cục trên toàn bộ tập D. Hàm số có thể có nhiều cực trị nhưng chỉ có duy nhất một giá trị lớn nhất nếu có. Phần ba: Ba ví dụ trực quan. Ví dụ một: Xét hàm y bằng bốn trừ x bình phương trên đoạn trừ một đến hai. Đỉnh parabol tại x bằng không có y bằng bốn là cao nhất, vậy giá trị lớn nhất bằng bốn. Điểm thấp nhất tại x bằng hai với y bằng không, vậy giá trị nhỏ nhất bằng không. Ví dụ hai: Xét hàm y bằng hai x trừ một trên khoảng mở từ không đến hai. Mặc dù y chạy từ trừ một đến ba, nhưng do hai đầu mút không thuộc tập xác định nên không tồn tại dấu bằng. Vậy hàm số không có max và min. Ví dụ ba: Khi nhìn vào bảng biến thiên trên đoạn từ trừ hai đến ba, điểm nhô cao nhất là năm, điểm trũng nhất là trừ hai. Ta kết luận ngay max bằng năm, min bằng trừ hai. Phần tư: Bẫy đề thi. Tìm được M nhưng không chỉ ra được x không thuộc tập D để dấu bằng xảy ra. Hoặc nhầm lẫn giá trị lớn nhất với điểm đạt giá trị lớn nhất. Phần năm: Bí kíp Thầy Cú. Trên đồ thị, hãy luôn gióng điểm cao nhất và thấp nhất xuống trục hoành để tìm x không nhé.''',

    'bai2_muc2': '''Chào các em. Chúng ta sang Bài hai Mục hai: Quy tắc tìm giá trị lớn nhất và giá trị nhỏ nhất trên đoạn a b. Phần một: Định lý nền tảng. Mọi hàm số liên tục trên đoạn đóng từ a đến b đều luôn đạt được giá trị lớn nhất và nhỏ nhất trên đoạn đó. Phần hai: Quy trình giải ba bước. Bước một: Tính đạo hàm f phẩy, tìm nghiệm, chỉ lấy các nghiệm x i thuộc khoảng mở a b. Bước hai: Tính giá trị f tại a, f tại b và f tại các nghiệm. Bước ba: So sánh các số vừa tính. Số lớn nhất là max, nhỏ nhất là min. Không cần lập bảng biến thiên. Phần ba: Ba ví dụ thực hành. Ví dụ một: Hàm đa thức y bằng x mũ ba trừ ba x bình cộng hai trên đoạn không đến ba. Đạo hàm bằng không tại x bằng hai, nhận; và x bằng không, loại vì trùng mút. Tính f tại không bằng hai, f tại hai bằng trừ hai, f tại ba bằng hai. Vậy max bằng hai, min bằng trừ hai. Ví dụ hai: Hàm phân thức y bằng x cộng một chia x trừ một trên đoạn hai đến bốn. Đạo hàm luôn âm nên hàm nghịch biến. Tính f tại hai bằng ba, f tại bốn bằng năm phần ba. Vậy max bằng ba đạt tại x bằng hai, min bằng năm phần ba đạt tại x bằng bốn. Ví dụ ba: Hàm chứa căn y bằng x cộng căn của bốn trừ x bình trên đoạn trừ hai đến hai. Đạo hàm bằng không khi x bằng căn hai. So sánh các giá trị, ta có max bằng hai căn hai, min bằng trừ hai. Phần tư: Bẫy trắc nghiệm. Quên loại nghiệm đạo hàm nằm ngoài đoạn a b, dẫn đến tính thừa và chọn sai đáp án. Phần năm: Mẹo Casio. Dùng chức năng Table Menu tám, nhập hàm số, Start a, End b, Step bằng b trừ a tất cả chia hai mươi chín để tìm nhanh đáp án.''',

    'bai2_muc3': '''Chào các em. Bài hai Mục ba: Tìm giá trị lớn nhất và nhỏ nhất trên khoảng bằng bảng biến thiên. Phần một: Khái niệm cốt lõi. Trên khoảng mở hoặc khoảng vô cực, ta bắt buộc phải xét giới hạn lim và lập bảng biến thiên. Phần hai: Phương pháp và định lý cực trị duy nhất. Nếu trên khoảng chỉ có một cực trị duy nhất, thì cực đại đó chính là giá trị lớn nhất, hoặc cực tiểu đó chính là giá trị nhỏ nhất toàn cục. Phần ba: Ba ví dụ minh họa. Ví dụ một: Tìm giá trị nhỏ nhất của y bằng x cộng bốn chia x trên khoảng không đến dương vô cực. Đạo hàm bằng không khi x bằng hai. Bảng biến thiên đi xuống tới bốn rồi đi lên. Vậy giá trị nhỏ nhất bằng bốn tại x bằng hai. Hàm số không có giá trị lớn nhất. Ví dụ hai: Xét parabol y bằng trừ x bình cộng hai x cộng ba trên R. Đạo hàm bằng không tại x bằng một. Đồ thị đi lên bốn rồi đi xuống. Vậy giá trị lớn nhất bằng bốn tại x bằng một, hàm số không có min. Ví dụ ba: Xét hàm y bằng x bình cộng một tất cả chia x trên khoảng từ trừ vô cực đến không. Đạo hàm bằng không tại x bằng trừ một. Bảng biến thiên đi lên trừ hai rồi đi xuống. Vậy max bằng trừ hai đạt tại x bằng trừ một, không có min. Phần tư: Bẫy đề thi. Thấy giới hạn ra vô cực kết luận luôn max min là vô cực. Đây là sai lầm vì vô cực không phải là một số thực. Phần năm: Mẹo tư duy. Gặp bài x cộng hằng số chia x trên miền dương, dùng ngay bất đẳng thức Cauchy để nhẩm ra đáp án trong một giây!'''
}

async def run():
    for k, v in audios.items():
        out_file = os.path.join(OUT_DIR, f'{k}.mp3')
        await edge_tts.Communicate(v, VOICE, rate=RATE).save(out_file)
        root_file = os.path.join(ROOT_AUDIO, f'{k}.mp3')
        shutil.copy2(out_file, root_file)
        print(f'Done {k}.mp3: {os.path.getsize(out_file)} bytes')

if __name__ == '__main__':
    asyncio.run(run())
