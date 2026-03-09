# 启动简单HTTP服务器
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  启动本地HTTP服务器" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$port = 8000
$path = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host "服务器目录: $path" -ForegroundColor Green
Write-Host "服务器端口: $port" -ForegroundColor Green
Write-Host ""
Write-Host "访问地址：" -ForegroundColor Yellow
Write-Host "  http://localhost:$port/feishu-test.html" -ForegroundColor White
Write-Host "  http://localhost:$port/assessment-survey.html" -ForegroundColor White
Write-Host ""
Write-Host "按 Ctrl+C 停止服务器" -ForegroundColor Red
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 启动HTTP监听器
$http = [System.Net.HttpListener]::new()
$http.Prefixes.Add("http://localhost:$port/")
$http.Start()

if ($http.IsListening) {
    Write-Host "✅ 服务器已启动！" -ForegroundColor Green
    Write-Host ""
}

while ($http.IsListening) {
    $context = $http.GetContext()
    $request = $context.Request
    $response = $context.Response

    $requestUrl = $request.Url.LocalPath
    if ($requestUrl -eq '/') {
        $requestUrl = '/assessment-survey.html'
    }

    $filePath = Join-Path $path $requestUrl.TrimStart('/')

    Write-Host "$(Get-Date -Format 'HH:mm:ss') - $($request.HttpMethod) $requestUrl" -ForegroundColor Gray

    if (Test-Path $filePath) {
        $content = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentLength64 = $content.Length

        # 设置Content-Type
        $extension = [System.IO.Path]::GetExtension($filePath)
        switch ($extension) {
            '.html' { $response.ContentType = 'text/html; charset=utf-8' }
            '.css'  { $response.ContentType = 'text/css; charset=utf-8' }
            '.js'   { $response.ContentType = 'application/javascript; charset=utf-8' }
            '.json' { $response.ContentType = 'application/json; charset=utf-8' }
            '.png'  { $response.ContentType = 'image/png' }
            '.jpg'  { $response.ContentType = 'image/jpeg' }
            default { $response.ContentType = 'application/octet-stream' }
        }

        $response.OutputStream.Write($content, 0, $content.Length)
    } else {
        $response.StatusCode = 404
        $html = "<h1>404 - File Not Found</h1><p>$filePath</p>"
        $buffer = [System.Text.Encoding]::UTF8.GetBytes($html)
        $response.ContentLength64 = $buffer.Length
        $response.OutputStream.Write($buffer, 0, $buffer.Length)
    }

    $response.Close()
}

$http.Stop()
