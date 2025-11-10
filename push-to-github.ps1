# Script để push project lên GitHub
# Sử dụng: .\push-to-github.ps1 -RepoUrl "https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"

param(
    [Parameter(Mandatory=$true)]
    [string]$RepoUrl
)

Write-Host "🚀 Đang push project lên GitHub..." -ForegroundColor Green

# Kiểm tra xem đã có remote chưa
$remoteExists = git remote | Select-String -Pattern "origin"

if ($remoteExists) {
    Write-Host "⚠️  Remote 'origin' đã tồn tại. Đang cập nhật..." -ForegroundColor Yellow
    git remote set-url origin $RepoUrl
} else {
    Write-Host "➕ Đang thêm remote origin..." -ForegroundColor Cyan
    git remote add origin $RepoUrl
}

# Đổi tên branch thành main
Write-Host "🔄 Đang đổi tên branch thành main..." -ForegroundColor Cyan
git branch -M main

# Push code
Write-Host "📤 Đang push code lên GitHub..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Code đã được push thành công!" -ForegroundColor Green
} else {
    Write-Host "❌ Có lỗi xảy ra khi push code." -ForegroundColor Red
    exit 1
}

# Push tags
Write-Host "🏷️  Đang push tags lên GitHub..." -ForegroundColor Cyan
git push origin --tags

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Tags đã được push thành công!" -ForegroundColor Green
} else {
    Write-Host "⚠️  Có lỗi khi push tags." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🎉 Hoàn tất! Bây giờ bạn có thể:" -ForegroundColor Green
Write-Host "   1. Vào GitHub repository để xem code" -ForegroundColor White
Write-Host "   2. Tạo Release từ tag v1.0.0" -ForegroundColor White
Write-Host "   3. Xem hướng dẫn chi tiết trong file GITHUB_SETUP.md" -ForegroundColor White

