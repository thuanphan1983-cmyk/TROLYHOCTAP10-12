@echo off
chcp 65001 >nul
title ĐỒNG BỘ GITHUB & DEPLOY VERCEL TỰ ĐỘNG - THẦY THUẤN PHAN
color 0B

echo =========================================================================
echo    HỆ THỐNG ĐỒNG BỘ CI/CD TỰ ĐỘNG: GITHUB ^& VERCEL DEPLOYMENT
echo              Trợ lý học tập môn Toán Thầy Thuấn Phan
echo =========================================================================
echo.

cd /d "%~dp0"

echo [1/4] Kiểm tra trạng thái mã nguồn cục bộ...
git status --short
echo.

set /p MSG="Nhập nội dung cập nhật (Bấm Enter để dùng mặc định): "
if "%MSG%"=="" (
    for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
    set MSG=Cap nhat he thong tu dong: %date% %time%
)

echo.
echo [2/4] Đang thêm các file thay đổi (git add .)...
git add .

echo.
echo [3/4] Đang đóng gói commit (git commit)...
git commit -m "%MSG%"

echo.
echo [4/4] Đang đồng bộ và đẩy lên GitHub (git push origin main)...
git push origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo =========================================================================
    echo  [THANH CONG] Code da duoc dong bo len GitHub thanh cong!
    echo  He thong CI/CD Vercel se tu dong build va xuat ban ban moi nhat
    echo  tai dia chi web cua Thay trong vong 15 - 30 giay!
    echo =========================================================================
) else (
    echo.
    echo [CANH BAO] Neu gap loi xung dot, dang thu tu dong keo ban moi nhat ve...
    git pull --rebase origin main
    git push origin main
)

echo.
echo Nhan phim bat ky de hoan tat...
pause >nul
