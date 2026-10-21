@echo off
chcp 65001 >nul
echo ========================================================
echo   ĐANG ĐẨY BẢN CẬP NHẬT LÊN GITHUB VA VERCEL
echo ========================================================
echo.
cd /d "%~dp0"
git add .
git commit -m "Cap nhat mac dinh THPT Ky Anh va thong ke theo truong lop"
git push origin main
echo.
echo ========================================================
echo   HOÀN TẤT! VERCEL SẼ TỰ ĐỘNG CẬP NHẬT BẢN MỚI LÊN LINK CŨ.
echo ========================================================
pause
