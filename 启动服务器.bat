@echo off
chcp 65001 >nul
echo ========================================
echo   启动本地HTTP服务器
echo ========================================
echo.

REM 检查Python是否安装
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ 检测到Python，正在启动服务器...
    echo.
    echo 服务器地址：http://localhost:8000
    echo.
    echo 📝 测试工具：http://localhost:8000/feishu-test.html
    echo 📊 评估问卷：http://localhost:8000/assessment-survey.html
    echo 📦 数据收集：http://localhost:8000/assessment-collect.html
    echo 🔗 链接生成：http://localhost:8000/url-generator.html
    echo.
    echo ⚠️ 按 Ctrl+C 停止服务器
    echo ========================================
    echo.
    python -m http.server 8000
    goto :end
)

REM 检查Node.js是否安装
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ 检测到Node.js
    echo.

    REM 检查是否安装了http-server
    where http-server >nul 2>&1
    if %errorlevel% equ 0 (
        echo ✅ 检测到http-server，正在启动...
        echo.
        echo 服务器地址：http://localhost:8000
        echo ========================================
        echo.
        http-server -p 8000
        goto :end
    ) else (
        echo ⚠️ 未安装http-server
        echo.
        echo 正在安装http-server...
        npm install -g http-server
        if %errorlevel% equ 0 (
            echo ✅ 安装成功，正在启动服务器...
            http-server -p 8000
            goto :end
        ) else (
            echo ❌ 安装失败
            goto :error
        )
    )
)

:error
echo ========================================
echo ❌ 错误：未检测到Python或Node.js
echo ========================================
echo.
echo 请先安装以下任意一个：
echo.
echo 1. Python（推荐）
echo    下载地址：https://python.org/downloads
echo    安装后重新运行本脚本
echo.
echo 2. Node.js
echo    下载地址：https://nodejs.org
echo    安装后重新运行本脚本
echo.
echo 或者使用其他方法，详见：启动本地服务器.md
echo ========================================
pause
goto :end

:end
