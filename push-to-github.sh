#!/bin/bash
# Script để push project lên GitHub
# Sử dụng: ./push-to-github.sh https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

if [ -z "$1" ]; then
    echo "❌ Vui lòng cung cấp URL của GitHub repository"
    echo "Sử dụng: ./push-to-github.sh https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
    exit 1
fi

REPO_URL=$1

echo "🚀 Đang push project lên GitHub..."

# Kiểm tra xem đã có remote chưa
if git remote | grep -q "origin"; then
    echo "⚠️  Remote 'origin' đã tồn tại. Đang cập nhật..."
    git remote set-url origin $REPO_URL
else
    echo "➕ Đang thêm remote origin..."
    git remote add origin $REPO_URL
fi

# Đổi tên branch thành main
echo "🔄 Đang đổi tên branch thành main..."
git branch -M main

# Push code
echo "📤 Đang push code lên GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Code đã được push thành công!"
else
    echo "❌ Có lỗi xảy ra khi push code."
    exit 1
fi

# Push tags
echo "🏷️  Đang push tags lên GitHub..."
git push origin --tags

if [ $? -eq 0 ]; then
    echo "✅ Tags đã được push thành công!"
else
    echo "⚠️  Có lỗi khi push tags."
fi

echo ""
echo "🎉 Hoàn tất! Bây giờ bạn có thể:"
echo "   1. Vào GitHub repository để xem code"
echo "   2. Tạo Release từ tag v1.0.0"
echo "   3. Xem hướng dẫn chi tiết trong file GITHUB_SETUP.md"

