import os
import sys
import shutil
import time

sys.stdout.reconfigure(encoding="utf-8")
sys.stderr.reconfigure(encoding="utf-8")

from video_builder_base import (
    REPO_DIR, VIDEOS_DIR, TEMP_DIR,
    render_html_to_png, generate_tts_audio, create_scene_mp4, concat_scenes, make_slide_html
)

# ==============================================================================
# VIDEO 1: TÍNH ĐƠN ĐIỆU CỦA HÀM SỐ (BÀI 1 - MỤC 1)
# ==============================================================================
def build_video_1():
    print("\n" + "="*70)
    print("🎬 ĐANG KHỞI TẠO VÀ RENDER VIDEO 1: TÍNH ĐƠN ĐIỆU CỦA HÀM SỐ (CÓ CÚ THÔNG THÁI)")
    print("="*70)
    
    scenes = []

    # Scene 1: Định lý cốt lõi (00:00 - 00:50) - Mascot: Pointer
    s1_html = make_slide_html(
        title="MỤC 1: TÍNH ĐƠN ĐIỆU CỦA HÀM SỐ",
        subtitle="1. Định lý cốt lõi về mối liên hệ giữa đạo hàm và tính đơn điệu",
        mascot_mode="pointer",
        body_html=r"""
        <div style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 35px; height: 100%; align-items: center;">
          <div style="background: rgba(255,255,255,0.06); border: 2px solid rgba(245, 158, 11, 0.5); border-radius: 24px; padding: 35px 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
            <div style="font-size: 26px; font-weight: bold; color: #f59e0b; margin-bottom: 22px; display: flex; align-items: center; gap: 12px;">
              <span>⭐</span> ĐỊNH LÝ CỐT LÕI (SGK TOÁN 12)
            </div>
            
            <div style="background: rgba(16, 185, 129, 0.15); border-left: 6px solid #10b981; padding: 18px 22px; border-radius: 12px; margin-bottom: 22px;">
              <div style="font-size: 28px; font-weight: bold; color: #34d399; margin-bottom: 6px;">1. Hàm số Đồng biến (Tăng)</div>
              <div style="font-size: 30px; color: #ffffff;">
                Nếu $f'(x) > 0, \; \forall x \in (a; b) \implies f(x)$ <strong>đồng biến</strong> trên $(a; b)$
              </div>
            </div>

            <div style="background: rgba(239, 68, 68, 0.15); border-left: 6px solid #ef4444; padding: 18px 22px; border-radius: 12px;">
              <div style="font-size: 28px; font-weight: bold; color: #f87171; margin-bottom: 6px;">2. Hàm số Nghịch biến (Giảm)</div>
              <div style="font-size: 30px; color: #ffffff;">
                Nếu $f'(x) < 0, \; \forall x \in (a; b) \implies f(x)$ <strong>nghịch biến</strong> trên $(a; b)$
              </div>
            </div>
          </div>

          <!-- Cột phải: Minh họa hình học trực quan -->
          <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.15); border-radius: 24px; padding: 30px; text-align: center; display: flex; flex-direction: column; justify-content: space-around; height: 100%;">
            <div style="font-size: 24px; font-weight: bold; color: #93c5fd; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px;">
              📊 HÌNH ẢNH TRỰC QUAN ĐỒ THỊ
            </div>
            <div style="padding: 18px; background: rgba(0,0,0,0.25); border-radius: 16px;">
              <div style="font-size: 26px; color: #34d399; font-weight: bold; margin-bottom: 8px;">↗ ĐỒ THỊ ĐI LÊN TỪ TRÁI QUA PHẢI</div>
              <div style="font-size: 22px; color: #cbd5e1;">Hệ số góc tiếp tuyến $k = f'(x) > 0$</div>
            </div>
            <div style="padding: 18px; background: rgba(0,0,0,0.25); border-radius: 16px;">
              <div style="font-size: 26px; color: #f87171; font-weight: bold; margin-bottom: 8px;">↘ ĐỒ THỊ ĐI XUỐNG TỪ TRÁI QUA PHẢI</div>
              <div style="font-size: 22px; color: #cbd5e1;">Hệ số góc tiếp tuyến $k = f'(x) < 0$</div>
            </div>
          </div>
        </div>
        """
    )
    s1_text = (
        "Chào các em. Trong video ngắn 5 phút này, thầy trò chúng ta sẽ cùng nắm trọn công cụ xét tính đồng biến, nghịch biến của hàm số bằng đạo hàm cấp một. "
        "Quy tắc cốt lõi: trên một khoảng xác định, nếu đạo hàm f phẩy x luôn mang dấu dương, đồ thị sẽ đi lên từ trái qua phải, tức là hàm số đồng biến. "
        "Ngược lại, nếu f phẩy x luôn mang dấu âm, đồ thị đi xuống, hàm số nghịch biến."
    )
    scenes.append(("v1_s1", s1_html, s1_text))

    # Scene 2: Định lý mở rộng & Bẫy kết luận (00:50 - 01:30) - Mascot: Magnifier
    s2_html = make_slide_html(
        title="MỤC 1: TÍNH ĐƠN ĐIỆU CỦA HÀM SỐ",
        subtitle="2. Định lý mở rộng & Bẫy kết luận khoảng đơn điệu trong đề thi",
        mascot_mode="magnifier",
        body_html=r"""
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 35px; height: 100%; align-items: stretch;">
          
          <!-- Hộp 1: Định lý mở rộng -->
          <div style="background: rgba(59, 130, 246, 0.1); border: 2px solid #3b82f6; border-radius: 24px; padding: 32px; display: flex; flex-direction: column; justify-content: center;">
            <div style="font-size: 26px; font-weight: bold; color: #60a5fa; margin-bottom: 18px;">
              🔍 ĐỊNH LÝ MỞ RỘNG (DẤU BẰNG XẢY RA)
            </div>
            <p style="font-size: 25px; line-height: 1.6; color: #e2e8f0; margin-bottom: 18px;">
              Nếu $f'(x) \ge 0$ (hoặc $f'(x) \le 0$) trên $(a; b)$ và đẳng thức <strong>$f'(x) = 0$ chỉ xảy ra tại một số hữu hạn điểm</strong> rời rạc:
            </p>
            <div style="background: rgba(0,0,0,0.3); padding: 16px 20px; border-radius: 14px; font-size: 27px; color: #facc15; font-weight: bold; text-align: center;">
              👉 Tính đơn điệu vẫn được BẢO TOÀN!
            </div>
          </div>

          <!-- Hộp 2: Cảnh báo trắc nghiệm -->
          <div style="background: rgba(239, 68, 68, 0.1); border: 2px solid #ef4444; border-radius: 24px; padding: 32px; display: flex; flex-direction: column; justify-content: center;">
            <div style="font-size: 26px; font-weight: bold; color: #f87171; margin-bottom: 18px; display: flex; align-items: center; gap: 10px;">
              <span>⚠️</span> CẢNH BÁO BẪY KẾT LUẬN TRẮC NGHIỆM
            </div>
            
            <div style="background: rgba(220, 38, 38, 0.2); border: 1px dashed #f87171; border-radius: 14px; padding: 14px 18px; margin-bottom: 16px;">
              <div style="font-size: 23px; color: #fca5a5; font-weight: bold;">❌ TUYỆT ĐỐI KHÔNG DÙNG:</div>
              <div style="font-size: 25px; color: #ffffff; margin-top: 5px;">
                Ký hiệu hợp $(-\infty; -2) \cup (1; +\infty)$ hoặc trừ tập hợp $\mathbb{R} \setminus \{1\}$
              </div>
            </div>

            <div style="background: rgba(16, 185, 129, 0.2); border: 1px dashed #34d399; border-radius: 14px; padding: 14px 18px;">
              <div style="font-size: 23px; color: #6ee7b7; font-weight: bold;">✅ QUY CHUẨN ĐÚNG BẮT BUỘC:</div>
              <div style="font-size: 25px; color: #ffffff; margin-top: 5px;">
                Viết tách riêng từng khoảng: Dùng chữ <strong>"và"</strong> hoặc dấu chấm phẩy <strong>";"</strong>
              </div>
            </div>
          </div>

        </div>
        """
    )
    s2_text = (
        "Đặc biệt chú ý định lý mở rộng: đạo hàm có thể bằng không, miễn là dấu bằng chỉ xảy ra tại một số điểm rời rạc, tức là hữu hạn điểm, thì tính đơn điệu vẫn được bảo toàn. "
        "Tuy nhiên, khi làm đề thi trắc nghiệm, các em tuyệt đối không được dùng ký hiệu hợp hoặc phép trừ tập hợp để kết luận khoảng đơn điệu. "
        "Bắt buộc phải viết tách riêng từng khoảng độc lập bằng chữ và hoặc dấu chấm phẩy."
    )
    scenes.append(("v1_s2", s2_html, s2_text))

    # Scene 3A: Ví dụ 1 - Đọc bảng xét dấu (01:30 - 02:50) - Mascot: Pointer
    s3a_html = make_slide_html(
        title="MỤC 1: TÍNH ĐƠN ĐIỆU CỦA HÀM SỐ",
        subtitle="3. Ví dụ mẫu 1: Đọc bảng xét dấu đạo hàm (Dạng toán nhận biết)",
        mascot_mode="pointer",
        body_html=r"""
        <div style="background: rgba(255,255,255,0.06); border: 2px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 35px; height: 100%; display: flex; flex-direction: column; justify-content: space-around;">
          <div style="font-size: 28px; color: #facc15; font-weight: bold;">
            Ví dụ 1: Cho hàm số $y = f(x)$ có bảng xét dấu đạo hàm $f'(x)$ như sau:
          </div>

          <!-- Bảng xét dấu chuẩn SGK KNTT / tkz-tab -->
          <div style="background: #0f172a; border: 2px solid #38bdf8; border-radius: 16px; overflow: hidden; margin: 12px 0;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 32px; color: #ffffff;">
              <tr style="border-bottom: 2px solid #38bdf8; background: rgba(56, 189, 248, 0.1);">
                <td style="width: 18%; padding: 16px; border-right: 2px solid #38bdf8; font-weight: bold; color: #38bdf8;">$x$</td>
                <td style="width: 20%; padding: 16px;">$-\infty$</td>
                <td style="width: 20%; padding: 16px; font-weight: bold; color: #facc15;">$-2$</td>
                <td style="width: 20%; padding: 16px; font-weight: bold; color: #facc15;">$1$</td>
                <td style="width: 22%; padding: 16px;">$+\infty$</td>
              </tr>
              <tr style="border-bottom: 2px solid #38bdf8;">
                <td style="padding: 16px; border-right: 2px solid #38bdf8; font-weight: bold; color: #38bdf8;">$f'(x)$</td>
                <td style="padding: 16px; color: #34d399; font-weight: bold; font-size: 36px;">$+$</td>
                <td style="padding: 16px; font-weight: bold;">$0$</td>
                <td style="padding: 16px; color: #f87171; font-weight: bold; font-size: 36px;">$-$</td>
                <td style="padding: 16px; font-weight: bold;">$0$</td>
                <td style="padding: 16px; color: #34d399; font-weight: bold; font-size: 36px;">$+$</td>
              </tr>
            </table>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 5px;">
            <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; border-radius: 16px; padding: 18px 22px;">
              <div style="font-size: 25px; font-weight: bold; color: #34d399;">👉 KẾT LUẬN ĐỒNG BIẾN:</div>
              <div style="font-size: 27px; color: #ffffff; margin-top: 6px;">
                Hàm số <strong>đồng biến</strong> trên $(-\infty; -2)$ <strong>và</strong> $(1; +\infty)$ (do $f'(x) > 0$).
              </div>
            </div>

            <div style="background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; border-radius: 16px; padding: 18px 22px;">
              <div style="font-size: 25px; font-weight: bold; color: #f87171;">👉 KẾT LUẬN NGHỊCH BIẾN:</div>
              <div style="font-size: 27px; color: #ffffff; margin-top: 6px;">
                Hàm số <strong>nghịch biến</strong> trên khoảng $(-2; 1)$ (do $f'(x) < 0$).
              </div>
            </div>
          </div>
        </div>
        """
    )
    s3a_text = (
        "Cùng áp dụng vào hai dạng toán hay gặp nhất. Dạng 1: Đọc bảng xét dấu. Nhìn vào dòng f phẩy x: "
        "trên hai khoảng từ trừ vô cùng đến trừ hai, và từ một đến dương vô cùng, f phẩy mang dấu cộng nên hàm số đồng biến. "
        "Trên khoảng từ trừ hai đến một, f phẩy mang dấu trừ nên hàm số nghịch biến."
    )
    scenes.append(("v1_s3a", s3a_html, s3a_text))

    # Scene 3B: Ví dụ 2 - Khảo sát đa thức bậc ba (02:50 - 04:15) - Mascot: Pointer
    s3b_html = make_slide_html(
        title="MỤC 1: TÍNH ĐƠN ĐIỆU CỦA HÀM SỐ",
        subtitle="4. Ví dụ mẫu 2: Khảo sát hàm đa thức bậc ba (Dạng toán thông hiểu)",
        mascot_mode="pointer",
        body_html=r"""
        <div style="background: rgba(255,255,255,0.06); border: 2px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 30px 40px; height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="font-size: 27px; color: #facc15; font-weight: bold;">
            Ví dụ 2: Tìm các khoảng đơn điệu của hàm số $y = -x^3 + 3x^2 + 9x - 2$
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; font-size: 24px; line-height: 1.55;">
            
            <div style="background: rgba(0,0,0,0.3); border-radius: 16px; padding: 22px; border: 1px solid rgba(255,255,255,0.1);">
              <div style="color: #60a5fa; font-weight: bold; margin-bottom: 8px;">BƯỚC 1: TẬP XÁC ĐỊNH & ĐẠO HÀM</div>
              <p style="margin: 5px 0;">• Tập xác định: $D = \mathbb{R}$</p>
              <p style="margin: 5px 0;">• Đạo hàm: $y' = -3x^2 + 6x + 9$</p>
              <p style="margin: 5px 0;">• Giải $y' = 0 \iff -3(x + 1)(x - 3) = 0$</p>
              <p style="margin: 5px 0; color: #facc15; font-weight: bold;">$\implies x = -1 \quad \text{hoặc} \quad x = 3$</p>
            </div>

            <div style="background: rgba(0,0,0,0.3); border-radius: 16px; padding: 22px; border: 1px solid rgba(255,255,255,0.1);">
              <div style="color: #34d399; font-weight: bold; margin-bottom: 8px;">BƯỚC 2: XÉT DẤU TAM THỨC BẬC HAI</div>
              <p style="margin: 5px 0;">• Hệ số $a = -3 < 0$</p>
              <p style="margin: 5px 0;">• Quy tắc: <em>"Trong trái, ngoài cùng"</em></p>
              <p style="margin: 5px 0;">• Trong khoảng $(-1; 3)$: $y' > 0$ (trái dấu $a$)</p>
              <p style="margin: 5px 0;">• Ngoài hai nghiệm: $y' < 0$ (cùng dấu $a$)</p>
            </div>

          </div>

          <!-- Kết luận -->
          <div style="background: rgba(245, 158, 11, 0.15); border: 2px solid #f59e0b; border-radius: 16px; padding: 18px 25px; font-size: 26px;">
            <strong>🎯 KẾT LUẬN:</strong> Hàm số <strong>đồng biến</strong> trên khoảng $(-1; 3)$; 
            <strong>nghịch biến</strong> trên các khoảng $(-\infty; -1)$ và $(3; +\infty)$.
          </div>
        </div>
        """
    )
    s3b_text = (
        "Dạng 2: Khảo sát hàm số. Cho hàm y bằng trừ x mũ 3 cộng 3 x bình cộng 9 x trừ hai. "
        "Ta tính đạo hàm: y phẩy bằng trừ 3 x bình cộng 6 x cộng 9. Cho y phẩy bằng không, ta có hai nghiệm là trừ một và ba. "
        "Vì hệ số a âm, theo quy tắc trong trái, ngoài cùng, đạo hàm mang dấu dương trong khoảng từ trừ một đến ba, và mang dấu âm ở hai khoảng còn lại. "
        "Vậy hàm số đồng biến trên khoảng trừ một đến ba, và nghịch biến trên các khoảng trừ vô cùng đến trừ một và ba đến dương vô cùng."
    )
    scenes.append(("v1_s3b", s3b_html, s3b_text))

    # Scene 4: Khóa điều hướng Gating (04:15 - 05:00) - Mascot: Cheer
    s4_html = make_slide_html(
        title="MỤC 1: TÍNH ĐƠN ĐIỆU CỦA HÀM SỐ",
        subtitle="5. Hoàn thành bài học & Kích hoạt Luồng khóa học tập (Gating Workflow)",
        mascot_mode="cheer",
        body_html=r"""
        <div style="background: rgba(255,255,255,0.06); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 24px; padding: 45px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <div style="font-size: 70px; margin-bottom: 15px;">🔒 ➔ 🔓</div>
          
          <h2 style="font-size: 38px; font-weight: bold; color: #facc15; margin-bottom: 18px;">
            YÊU CẦU HOÀN THÀNH ĐỂ MỞ KHÓA MỤC 2
          </h2>

          <p style="font-size: 28px; max-width: 1100px; color: #e2e8f0; line-height: 1.6; margin-bottom: 30px;">
            Theo lộ trình học tập Micro-learning chuẩn Bộ GD&ĐT, để mở khóa <strong>Video Mục 2: Cực trị của hàm số</strong>, các em bắt buộc phải trả lời đủ <strong>3 câu hỏi trắc nghiệm Mục 1</strong> ngay bên dưới trình phát video trên website.
          </p>

          <div style="background: rgba(16, 185, 129, 0.2); border: 2px solid #10b981; border-radius: 20px; padding: 18px 40px; font-size: 26px; font-weight: bold; color: #6ee7b7;">
            ⚡ Bấm "Hoàn thành video 1" & Làm trắc nghiệm ngay bây giờ!
          </div>
        </div>
        """
    )
    s4_text = (
        "Vậy là các em đã nắm chắc lý thuyết và phương pháp xét tính đơn điệu. "
        "Theo lộ trình học tập, để mở khóa được Video Mục hai về Cực trị, các em bắt buộc phải hoàn thành ba câu hỏi trắc nghiệm ngay bên dưới màn hình. "
        "Hãy tập trung làm bài thật tốt để tiếp tục bài học nhé!"
    )
    scenes.append(("v1_s4", s4_html, s4_text))

    # Process all scenes for Video 1
    rendered_scenes = []
    for sc_id, html_code, voice_text in scenes:
        print(f"\n--- Xử lý Scene {sc_id} ---")
        png_path = os.path.join(TEMP_DIR, f"{sc_id}.png")
        mp3_path = os.path.join(TEMP_DIR, f"{sc_id}.mp3")
        mp4_path = os.path.join(TEMP_DIR, f"{sc_id}.mp4")

        render_html_to_png(html_code, png_path)
        generate_tts_audio(voice_text, mp3_path, voice="vi-VN-NamMinhNeural")
        create_scene_mp4(png_path, mp3_path, mp4_path)
        rendered_scenes.append(mp4_path)

    # Concat directly into VIDEOS_DIR
    out_video_1 = os.path.join(VIDEOS_DIR, "bai1_muc1_don_dieu.mp4")
    concat_scenes(rendered_scenes, out_video_1)
    print(f"\n✅ HOÀN TẤT VIDEO 1: {out_video_1} ({os.path.getsize(out_video_1):,} bytes)")
    return out_video_1


# ==============================================================================
# VIDEO 2: CỰC TRỊ CỦA HÀM SỐ (BÀI 1 - MỤC 2)
# ==============================================================================
def build_video_2():
    print("\n" + "="*70)
    print("🎬 ĐANG KHỞI TẠO VÀ RENDER VIDEO 2: CỰC TRỊ CỦA HÀM SỐ (CÓ CÚ THÔNG THÁI)")
    print("="*70)
    
    scenes = []

    # Scene 1: Bản chất Cực đại - Cực tiểu (00:00 - 00:50) - Mascot: Pointer
    s1_html = make_slide_html(
        title="MỤC 2: CỰC TRỊ CỦA HÀM SỐ",
        subtitle="1. Bản chất cực trị & Dấu hiệu đổi dấu của đạo hàm f'(x)",
        mascot_mode="pointer",
        body_html=r"""
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 35px; height: 100%; align-items: center;">
          
          <!-- Thẻ Điểm Cực Đại -->
          <div style="background: rgba(245, 158, 11, 0.1); border: 2px solid #f59e0b; border-radius: 24px; padding: 35px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: space-around;">
            <div style="font-size: 30px; font-weight: bold; color: #fbbf24;">
              ▲ ĐIỂM CỰC ĐẠI ($x_{\text{CĐ}}$)
            </div>
            <div style="font-size: 65px; margin: 8px 0;">⛰️</div>
            <div style="background: rgba(0,0,0,0.3); padding: 18px; border-radius: 16px;">
              <div style="font-size: 28px; color: #ffffff; font-weight: bold;">
                $f'(x)$ đổi dấu từ <span style="color:#34d399;">DƯƠNG (+)</span> sang <span style="color:#f87171;">ÂM (-)</span>
              </div>
              <div style="font-size: 22px; color: #cbd5e1; margin-top: 8px;">
                Đồ thị đi lên rồi đi xuống (Tạo đỉnh lồi)
              </div>
            </div>
          </div>

          <!-- Thẻ Điểm Cực Tiểu -->
          <div style="background: rgba(14, 165, 233, 0.1); border: 2px solid #0ea5e9; border-radius: 24px; padding: 35px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: space-around;">
            <div style="font-size: 30px; font-weight: bold; color: #38bdf8;">
              ▼ ĐIỂM CỰC TIỂU ($x_{\text{CT}}$)
            </div>
            <div style="font-size: 65px; margin: 8px 0;">🌊</div>
            <div style="background: rgba(0,0,0,0.3); padding: 18px; border-radius: 16px;">
              <div style="font-size: 28px; color: #ffffff; font-weight: bold;">
                $f'(x)$ đổi dấu từ <span style="color:#f87171;">ÂM (-)</span> sang <span style="color:#34d399;">DƯƠNG (+)</span>
              </div>
              <div style="font-size: 22px; color: #cbd5e1; margin-top: 8px;">
                Đồ thị đi xuống rồi đi lên (Tạo đáy lõm)
              </div>
            </div>
          </div>

        </div>
        """
    )
    s1_text = (
        "Thầy Thuấn chúc mừng các em đã hoàn thành xuất sắc ba câu trắc nghiệm Mục một để mở khóa Mục hai. "
        "Trong video này, chúng ta sẽ làm chủ bản chất của cực trị. "
        "Điểm then chốt cần ghi nhớ: một điểm là cực trị khi và chỉ khi đạo hàm f phẩy x đổi dấu khi đi qua điểm đó. "
        "Nếu f phẩy đổi dấu từ dương sang âm, ta có điểm cực đại. Ngược lại, nếu f phẩy đổi dấu từ âm sang dương, ta có điểm cực tiểu."
    )
    scenes.append(("v2_s1", s1_html, s1_text))

    # Scene 2: Phân biệt 3 thuật ngữ & Nghiệm kép (00:50 - 01:35) - Mascot: Magnifier
    s2_html = make_slide_html(
        title="MỤC 2: CỰC TRỊ CỦA HÀM SỐ",
        subtitle="2. Phân biệt 3 thuật ngữ cốt lõi & Cảnh báo nghiệm bội chẵn",
        mascot_mode="magnifier",
        body_html=r"""
        <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 35px; height: 100%; align-items: stretch;">
          
          <!-- Bảng 3 khái niệm -->
          <div style="background: rgba(255,255,255,0.06); border: 2px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 30px; display: flex; flex-direction: column; justify-content: space-around;">
            <div style="font-size: 25px; font-weight: bold; color: #facc15; border-bottom: 2px solid rgba(255,255,255,0.1); padding-bottom: 8px;">
              📌 PHÂN BIỆT RÕ RÀNG 3 THUẬT NGỮ
            </div>

            <div style="background: rgba(0,0,0,0.3); padding: 14px 18px; border-radius: 14px; border-left: 5px solid #3b82f6;">
              <div style="font-size: 24px; font-weight: bold; color: #60a5fa;">1. "Điểm cực trị của HÀM SỐ":</div>
              <div style="font-size: 26px; color: #ffffff; margin-top: 3px;">Trả lời hoành độ <strong>$x$</strong> (Ví dụ: $x = 1$)</div>
            </div>

            <div style="background: rgba(0,0,0,0.3); padding: 14px 18px; border-radius: 14px; border-left: 5px solid #10b981;">
              <div style="font-size: 24px; font-weight: bold; color: #34d399;">2. "GIÁ TRỊ cực trị" (Cực trị):</div>
              <div style="font-size: 26px; color: #ffffff; margin-top: 3px;">Trả lời tung độ <strong>$y$</strong> (Ví dụ: $y_{\text{CĐ}} = 5$)</div>
            </div>

            <div style="background: rgba(0,0,0,0.3); padding: 14px 18px; border-radius: 14px; border-left: 5px solid #a855f7;">
              <div style="font-size: 24px; font-weight: bold; color: #c084fc;">3. "Điểm cực trị của ĐỒ THỊ":</div>
              <div style="font-size: 26px; color: #ffffff; margin-top: 3px;">Trả lời tọa độ điểm <strong>$M(x; y)$</strong> (Ví dụ: $M(1; 5)$)</div>
            </div>
          </div>

          <!-- Bẫy nghiệm kép -->
          <div style="background: rgba(239, 68, 68, 0.1); border: 2px solid #ef4444; border-radius: 24px; padding: 30px; display: flex; flex-direction: column; justify-content: center; text-align: center;">
            <div style="font-size: 55px; margin-bottom: 12px;">⚠️</div>
            <div style="font-size: 28px; font-weight: bold; color: #f87171; margin-bottom: 12px;">
              BẪY NGHIỆM KÉP (BỘI CHẴN)
            </div>
            <p style="font-size: 24px; line-height: 1.5; color: #e2e8f0; margin-bottom: 18px;">
              Nếu $f'(x_0) = 0$ nhưng $x_0$ là <strong>nghiệm kép hoặc nghiệm bội chẵn</strong>:
            </p>
            <div style="background: rgba(220, 38, 38, 0.25); border: 2px dashed #f87171; border-radius: 16px; padding: 18px; font-size: 26px; font-weight: bold; color: #ffffff;">
              🛑 $f'(x)$ KHÔNG ĐỔI DẤU<br>
              <span style="color: #fca5a5;">$\implies x_0$ KHÔNG LÀ CỰC TRỊ!</span>
            </div>
          </div>

        </div>
        """
    )
    s2_text = (
        "Đặc biệt, trong đề thi trắc nghiệm các em rất dễ nhầm lẫn giữa ba thuật ngữ sau: "
        "Thứ nhất, điểm cực trị của hàm số là hỏi giá trị của x. "
        "Thứ hai, giá trị cực trị là hỏi giá trị của y. "
        "Thứ ba, điểm cực trị của đồ thị hàm số là một điểm có đầy đủ tọa độ x và y trên mặt phẳng. "
        "Ngoài ra, hãy nhớ rằng nếu f phẩy bằng không nhưng là nghiệm bội chẵn thì không đổi dấu, do đó không phải là điểm cực trị."
    )
    scenes.append(("v2_s2", s2_html, s2_text))

    # Scene 3A: Ví dụ 1 - Điểm f'(x) không xác định nhưng vẫn là cực trị (01:35 - 02:50) - Mascot: Magnifier
    s3a_html = make_slide_html(
        title="MỤC 2: CỰC TRỊ CỦA HÀM SỐ",
        subtitle="3. Ví dụ mẫu 1: Điểm đạo hàm không xác định (Bẫy kinh điển đề thi)",
        mascot_mode="magnifier",
        body_html=r"""
        <div style="background: rgba(255,255,255,0.06); border: 2px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 35px; height: 100%; display: flex; flex-direction: column; justify-content: space-around;">
          <div style="font-size: 27px; color: #facc15; font-weight: bold;">
            Ví dụ 1: Cho hàm số $y = f(x)$ liên tục trên $\mathbb{R}$ và có bảng biến thiên:
          </div>

          <!-- Bảng biến thiên có vạch kép -->
          <div style="background: #0f172a; border: 2px solid #a855f7; border-radius: 16px; overflow: hidden; margin: 12px 0;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 32px; color: #ffffff;">
              <tr style="border-bottom: 2px solid #a855f7; background: rgba(168, 85, 247, 0.1);">
                <td style="width: 18%; padding: 14px; border-right: 2px solid #a855f7; font-weight: bold; color: #c084fc;">$x$</td>
                <td style="width: 25%; padding: 14px;">$-\infty$</td>
                <td style="width: 25%; padding: 14px; font-weight: bold; color: #facc15;">$0$</td>
                <td style="width: 32%; padding: 14px;">$+\infty$</td>
              </tr>
              <tr style="border-bottom: 2px solid #a855f7;">
                <td style="padding: 14px; border-right: 2px solid #a855f7; font-weight: bold; color: #c084fc;">$f'(x)$</td>
                <td style="padding: 14px; color: #34d399; font-weight: bold; font-size: 34px;">$+$</td>
                <td style="padding: 14px; font-weight: bold; color: #f87171; letter-spacing: 4px;">$\|$</td>
                <td style="padding: 14px; color: #f87171; font-weight: bold; font-size: 34px;">$-$</td>
              </tr>
              <tr>
                <td style="padding: 18px; border-right: 2px solid #a855f7; font-weight: bold; color: #c084fc;">$f(x)$</td>
                <td style="padding: 18px;">$-\infty \nearrow$</td>
                <td style="padding: 18px; color: #facc15; font-weight: bold; font-size: 34px;">$3$</td>
                <td style="padding: 18px;">$\searrow -\infty$</td>
              </tr>
            </table>
          </div>

          <div style="background: rgba(59, 130, 246, 0.15); border: 2px solid #3b82f6; border-radius: 16px; padding: 20px 25px; font-size: 26px; line-height: 1.55;">
            <strong>💡 NHẬN XÉT QUAN TRỌNG:</strong><br>
            Mặc dù $f'(0)$ không xác định (ký hiệu $\|$), nhưng hàm số $f(x)$ vẫn <strong>liên tục tại $x = 0$</strong> và đạo hàm <strong>đổi dấu từ $(+)$ sang $(-)$</strong>.<br>
            <span style="color: #facc15; font-weight: bold;">$\implies x = 0$ VẪN LÀ ĐIỂM CỰC ĐẠI; Giá trị cực đại $y_{\text{CĐ}} = 3$!</span>
          </div>
        </div>
        """
    )
    s3a_text = (
        "Cùng quan sát Ví dụ một. Rất nhiều học sinh mất điểm ở dạng này: Tại x bằng không, đạo hàm f phẩy không xác định, thể hiện bằng hai vạch song song. "
        "Tuy nhiên, hàm số f x vẫn liên tục, và f phẩy đổi dấu từ dương sang âm khi qua x bằng không. "
        "Do đó, x bằng không vẫn là điểm cực đại của hàm số, với giá trị cực đại y cực đại bằng ba."
    )
    scenes.append(("v2_s3a", s3a_html, s3a_text))

    # Scene 3B: Ví dụ 2 - Tìm cực trị hàm bậc 3 (02:50 - 04:15) - Mascot: Pointer
    s3b_html = make_slide_html(
        title="MỤC 2: CỰC TRỊ CỦA HÀM SỐ",
        subtitle="4. Ví dụ mẫu 2: Tìm các điểm và giá trị cực trị của hàm số bậc ba",
        mascot_mode="pointer",
        body_html=r"""
        <div style="background: rgba(255,255,255,0.06); border: 2px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 30px 40px; height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="font-size: 27px; color: #facc15; font-weight: bold;">
            Ví dụ 2: Tìm cực trị của hàm số $y = 2x^3 - 3x^2 - 12x + 1$
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; font-size: 24px; line-height: 1.55;">
            
            <div style="background: rgba(0,0,0,0.3); border-radius: 16px; padding: 22px; border: 1px solid rgba(255,255,255,0.1);">
              <div style="color: #60a5fa; font-weight: bold; margin-bottom: 8px;">BƯỚC 1: ĐẠO HÀM & TÌM NGHIỆM</div>
              <p style="margin: 5px 0;">• $y' = 6x^2 - 6x - 12 = 6(x^2 - x - 2)$</p>
              <p style="margin: 5px 0;">• Cho $y' = 0 \iff 6(x + 1)(x - 2) = 0$</p>
              <p style="margin: 5px 0; color: #facc15; font-weight: bold;">$\implies x = -1 \quad \text{hoặc} \quad x = 2$</p>
            </div>

            <div style="background: rgba(0,0,0,0.3); border-radius: 16px; padding: 22px; border: 1px solid rgba(255,255,255,0.1);">
              <div style="color: #34d399; font-weight: bold; margin-bottom: 8px;">BƯỚC 2: XÁC ĐỊNH ĐỔI DẤU</div>
              <p style="margin: 5px 0;">• Qua $x = -1$: $y'$ đổi dấu từ $(+)$ sang $(-)$</p>
              <p style="margin: 5px 0; color: #fbbf24;">$\implies$ Điểm cực đại $x_{\text{CĐ}} = -1$</p>
              <p style="margin: 5px 0;">• Qua $x = 2$: $y'$ đổi dấu từ $(-)$ sang $(+)$</p>
              <p style="margin: 5px 0; color: #38bdf8;">$\implies$ Điểm cực tiểu $x_{\text{CT}} = 2$</p>
            </div>

          </div>

          <!-- Kết luận tọa độ và giá trị -->
          <div style="background: rgba(16, 185, 129, 0.15); border: 2px solid #10b981; border-radius: 16px; padding: 18px 25px; font-size: 25px;">
            <strong>🎯 KẾT LUẬN ĐẦY ĐỦ:</strong><br>
            • Cực đại tại $x = -1$; Giá trị cực đại $y_{\text{CĐ}} = y(-1) = 8$. Điểm cực đại đồ thị: $A(-1; 8)$.<br>
            • Cực tiểu tại $x = 2$; Giá trị cực tiểu $y_{\text{CT}} = y(2) = -19$. Điểm cực tiểu đồ thị: $B(2; -19)$.
          </div>
        </div>
        """
    )
    s3b_text = (
        "Ví dụ hai: Tìm cực trị hàm đa thức y bằng hai x mũ 3 trừ 3 x bình trừ 12 x cộng một. "
        "Ta tính đạo hàm y phẩy bằng 6 x bình trừ 6 x trừ 12. Cho y phẩy bằng không, ta được hai nghiệm phân biệt là x bằng trừ một và x bằng hai. "
        "Khi qua x bằng trừ một, đạo hàm đổi dấu từ dương sang âm nên hàm số đạt cực đại tại x bằng trừ một, giá trị cực đại bằng tám. "
        "Khi qua x bằng hai, đạo hàm đổi dấu từ âm sang dương nên hàm số đạt cực tiểu tại x bằng hai, giá trị cực tiểu bằng trừ 19."
    )
    scenes.append(("v2_s3b", s3b_html, s3b_text))

    # Scene 4: Chuyển giao & Mở khóa Phiếu 24 ý (04:15 - 05:00) - Mascot: Cheer
    s4_html = make_slide_html(
        title="MỤC 2: CỰC TRỊ CỦA HÀM SỐ",
        subtitle="5. Hoàn thành 2 Video & Mở khóa Phiếu luyện tập 6 câu Đúng / Sai (24 ý)",
        mascot_mode="cheer",
        body_html=r"""
        <div style="background: rgba(255,255,255,0.06); border: 2px solid rgba(168, 85, 247, 0.4); border-radius: 24px; padding: 45px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <div style="font-size: 70px; margin-bottom: 15px;">🎓 🎉 🏆</div>
          
          <h2 style="font-size: 38px; font-weight: bold; color: #38bdf8; margin-bottom: 18px;">
            MỞ KHÓA PHẦN LUYỆN TẬP 24 Ý ĐÚNG / SAI
          </h2>

          <p style="font-size: 28px; max-width: 1100px; color: #e2e8f0; line-height: 1.6; margin-bottom: 30px;">
            Em hãy hoàn thành <strong>3 câu trắc nghiệm Mục 2</strong> bên dưới để chính thức mở khóa toàn bộ <strong>Phiếu luyện tập 6 câu Đúng / Sai (24 ý)</strong> chuẩn cấu trúc đề thi Tốt nghiệp THPT 2025 của Bộ GD&ĐT!
          </p>

          <div style="background: rgba(59, 130, 246, 0.2); border: 2px solid #3b82f6; border-radius: 20px; padding: 18px 40px; font-size: 26px; font-weight: bold; color: #93c5fd;">
            ✨ Tự tin đạt điểm 9+ môn Toán cùng Thầy Thuấn Phan!
          </div>
        </div>
        """
    )
    s4_text = (
        "Chúc mừng các em đã nắm trọn vẹn lý thuyết và phương pháp giải bài toán cực trị. "
        "Bây giờ, hãy trả lời ba câu hỏi trắc nghiệm Mục hai ngay bên dưới để hoàn tất bài giảng và mở khóa phần luyện tập 6 câu Đúng Sai với 24 ý hỏi chuyên sâu nhé!"
    )
    scenes.append(("v2_s4", s4_html, s4_text))

    # Process all scenes for Video 2
    rendered_scenes = []
    for sc_id, html_code, voice_text in scenes:
        print(f"\n--- Xử lý Scene {sc_id} ---")
        png_path = os.path.join(TEMP_DIR, f"{sc_id}.png")
        mp3_path = os.path.join(TEMP_DIR, f"{sc_id}.mp3")
        mp4_path = os.path.join(TEMP_DIR, f"{sc_id}.mp4")

        render_html_to_png(html_code, png_path)
        generate_tts_audio(voice_text, mp3_path, voice="vi-VN-NamMinhNeural")
        create_scene_mp4(png_path, mp3_path, mp4_path)
        rendered_scenes.append(mp4_path)

    # Concat directly into VIDEOS_DIR
    out_video_2 = os.path.join(VIDEOS_DIR, "bai1_muc2_cuc_tri.mp4")
    concat_scenes(rendered_scenes, out_video_2)
    print(f"\n✅ HOÀN TẤT VIDEO 2: {out_video_2} ({os.path.getsize(out_video_2):,} bytes)")
    return out_video_2


if __name__ == "__main__":
    t0 = time.time()
    v1 = build_video_1()
    v2 = build_video_2()
    print("\n" + "="*70)
    print("🎉 TẤT CẢ 2 VIDEO MP4 AI ĐÃ ĐƯỢC TẠO THÀNH CÔNG RỰC RỠ!")
    print(f"1. Video Mục 1: {v1} (Kích thước: {os.path.getsize(v1):,} bytes)")
    print(f"2. Video Mục 2: {v2} (Kích thước: {os.path.getsize(v2):,} bytes)")
    print(f"⏱️ Tổng thời gian render: {time.time() - t0:.1f} giây")
    print("="*70)
