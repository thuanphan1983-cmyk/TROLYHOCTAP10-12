@echo off
chcp 65001 >nul
echo ========================================================
echo   ĐANG TIẾN HÀNH ĐƯA WEB LÊN VERCEL: trolyhoctapmontoan
echo ========================================================
echo.
echo Bước 1: Kiểm tra và chạy npx vercel...
echo (Nếu đây là lần đầu tiên, Vercel sẽ yêu cầu đăng nhập qua trình duyệt)
echo.
cd /d "%~dp0"
npx vercel --prod
echo.
echo Hoàn tất! Nhấn phím bất kỳ để đóng cửa sổ.
pause >nul
