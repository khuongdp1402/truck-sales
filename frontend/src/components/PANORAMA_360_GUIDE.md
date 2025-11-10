# Hướng dẫn sử dụng ảnh 360° Panorama

## Yêu cầu ảnh 360°

Để ảnh 360° hoạt động tốt, bạn cần:

1. **Định dạng ảnh**: Equirectangular Panorama
2. **Tỷ lệ khung hình**: 2:1 (ví dụ: 4096x2048, 8192x4096)
3. **Định dạng file**: JPG, PNG (khuyến nghị cho web)
4. **Kích thước**: Càng lớn càng tốt (khuyến nghị tối thiểu 4096x2048)

## EXR và HDR là gì?

**EXR (OpenEXR)** và **HDR (High Dynamic Range)** là các định dạng ảnh chuyên dụng:

- **Ưu điểm**: Chứa thông tin ánh sáng rất chi tiết, phù hợp cho rendering 3D và xử lý hình ảnh chuyên nghiệp
- **Nhược điểm**:
  - File rất lớn (thường 50-200MB hoặc hơn)
  - **KHÔNG thể hiển thị trực tiếp trên web browser**
  - Cần phần mềm chuyên dụng để xem và xử lý

## Có thể dùng EXR/HDR trên web không?

**KHÔNG**, bạn **KHÔNG thể** dùng trực tiếp file EXR/HDR trên web browser vì:

1. Web browsers không hỗ trợ định dạng này
2. File quá lớn, tải xuống rất chậm
3. Cần convert sang JPG/PNG để sử dụng trên web

## Cách download và convert từ Poly Haven

### Bước 1: Download từ Poly Haven

1. Truy cập: https://polyhaven.com/hdris
2. Chọn ảnh 360° bạn muốn (ví dụ: "Autoshop 01")
3. Trên trang download:
   - Chọn độ phân giải: **4K** hoặc **8K** (tùy nhu cầu)
   - Chọn định dạng: **HDR** hoặc **EXR**
   - Click nút **"Download"**
   - File sẽ được tải xuống máy tính

### Bước 2: Convert EXR/HDR sang JPG/PNG

Bạn có thể convert bằng các công cụ sau:

#### Cách 1: Sử dụng Photoshop

1. Mở file EXR/HDR trong Photoshop
2. File → Export → Export As...
3. Chọn định dạng: **JPG** hoặc **PNG**
4. Chất lượng: 80-90% (để giảm dung lượng nhưng vẫn giữ chất lượng)
5. Lưu file

#### Cách 2: Sử dụng GIMP (Miễn phí)

1. Mở file EXR/HDR trong GIMP
2. File → Export As...
3. Chọn định dạng: **JPG** hoặc **PNG**
4. Điều chỉnh chất lượng và lưu

#### Cách 3: Sử dụng online converter

- **CloudConvert**: https://cloudconvert.com/exr-to-jpg
- **Convertio**: https://convertio.co/exr-jpg/
- Upload file EXR/HDR → Chọn JPG/PNG → Convert → Download

#### Cách 4: Sử dụng ImageMagick (Command line)

```bash
# Convert EXR sang JPG
magick input.exr -quality 85 output.jpg

# Convert HDR sang JPG
magick input.hdr -quality 85 output.jpg
```

### Bước 3: Upload và sử dụng

1. Upload file JPG/PNG đã convert lên server/CDN của bạn
2. Copy URL và thêm vào `panorama360Url` trong mock data
3. Component sẽ tự động hiển thị ảnh 360°

## Lưu ý quan trọng

⚠️ **KHÔNG dùng file EXR/HDR trực tiếp trên web**

- File quá lớn (50-200MB)
- Browser không hỗ trợ
- Tải xuống rất chậm
- Tốn băng thông

✅ **Luôn convert sang JPG/PNG trước khi dùng trên web**

- File nhỏ hơn nhiều (5-20MB)
- Browser hỗ trợ tốt
- Tải nhanh
- Tiết kiệm băng thông

## Cách thêm ảnh 360° cho xe

### Cách 1: Thêm vào mock data

Trong file `src/mock/cars.js`, thêm field `panorama360Url`:

```javascript
{
  id: 1,
  name: "BMW i8",
  // ... other fields
  panorama360Url: "https://your-domain.com/panorama-360.jpg",
}
```

### Cách 2: Upload ảnh và sử dụng URL

1. Upload ảnh 360° lên server/CDN
2. Copy URL và thêm vào `panorama360Url` field
3. Đảm bảo URL có thể truy cập công khai

## Nguồn ảnh 360° mẫu

### 1. Poly Haven (Khuyến nghị) ⭐

- **Website**: https://polyhaven.com/hdris
- **Ưu điểm**:
  - Miễn phí, không cần đăng ký
  - Chất lượng cao (4K, 8K)
  - Có sẵn EXR/HDR
  - License: CC0 (sử dụng tự do)
- **Cách dùng**: Download EXR/HDR → Convert sang JPG/PNG → Upload lên server

### 2. 360Cities

- **Website**: https://www.360cities.net/
- **Ưu điểm**: Nhiều ảnh thực tế
- **Lưu ý**: Cần convert sang equirectangular format

### 3. Flickr 360

- **Website**: https://www.flickr.com/groups/equirectangular/
- **Ưu điểm**: Cộng đồng chia sẻ
- **Lưu ý**: Kiểm tra license trước khi sử dụng

## Quy trình đầy đủ (Step-by-step)

### Ví dụ: Sử dụng ảnh "Autoshop 01" từ Poly Haven

1. **Download**:

   - Truy cập: https://polyhaven.com/a/autoshop_01
   - Chọn: 4K → HDR → Download
   - File tải xuống: `autoshop_01_4k.hdr` (khoảng 25-50MB)

2. **Convert**:

   - Mở file trong Photoshop/GIMP
   - Export as JPG (quality: 85%)
   - File mới: `autoshop_01_4k.jpg` (khoảng 8-15MB)

3. **Upload**:

   - Upload lên server/CDN (ví dụ: AWS S3, Cloudinary, Imgur)
   - Lấy URL: `https://your-cdn.com/images/autoshop_01_4k.jpg`

4. **Sử dụng**:

   ```javascript
   {
     id: 1,
     name: "BMW i8",
     panorama360Url: "https://your-cdn.com/images/autoshop_01_4k.jpg",
     // ... other fields
   }
   ```

5. **Test**:
   - Component sẽ tự động hiển thị ảnh 360°
   - Kéo để xem xung quanh
   - Hoạt động mượt mà trên mọi thiết bị

## Lưu ý

- Ảnh PNG thông thường không phải ảnh 360° equirectangular sẽ không hoạt động đúng
- Nếu không có ảnh 360°, component sẽ sử dụng ảnh thường với hiệu ứng drag đơn giản
- Component tự động phát hiện và xử lý ảnh 360° khi có `panorama360Url`

## So sánh các định dạng

| Định dạng | Kích thước file | Chất lượng | Web Browser | Sử dụng                                           |
| --------- | --------------- | ---------- | ----------- | ------------------------------------------------- |
| **EXR**   | 50-200MB        | Rất cao    | ❌ Không    | Rendering 3D, Post-production                     |
| **HDR**   | 25-100MB        | Rất cao    | ❌ Không    | Rendering 3D, Post-production                     |
| **PNG**   | 10-30MB         | Cao        | ✅ Có       | Web, tốt cho ảnh có nhiều chi tiết                |
| **JPG**   | 5-15MB          | Tốt        | ✅ Có       | Web, khuyến nghị (cân bằng chất lượng/kích thước) |

## Khuyến nghị

✅ **Cho web application**: Sử dụng **JPG** (quality 80-90%)

- Cân bằng tốt giữa chất lượng và kích thước
- Tải nhanh
- Browser hỗ trợ tốt

⚠️ **KHÔNG dùng EXR/HDR trực tiếp trên web**

- Chỉ dùng cho rendering 3D hoặc xử lý hình ảnh chuyên nghiệp
- Luôn convert sang JPG/PNG trước khi dùng trên web

## FAQ

**Q: Tại sao không dùng EXR/HDR trực tiếp?**
A: Browser không hỗ trợ, file quá lớn, tải chậm.

**Q: Mất chất lượng khi convert sang JPG không?**
A: Có một chút, nhưng với quality 85-90%, mắt thường khó nhận biết.

**Q: Nên dùng JPG hay PNG?**
A: JPG (khuyến nghị) - nhỏ hơn, tải nhanh hơn. PNG chỉ khi cần độ trong suốt.

**Q: Có cách nào tự động convert không?**
A: Có thể dùng server-side script để convert tự động khi upload.

## Ví dụ URL ảnh 360° mẫu (đã convert)

```
https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.1.0&auto=format&fit=crop&w=4000&q=80
```

**Lưu ý**: URL trên chỉ là ví dụ. Để có trải nghiệm tốt nhất:

1. Download EXR/HDR từ Poly Haven
2. Convert sang JPG (quality 85%)
3. Upload lên server/CDN của bạn
4. Sử dụng URL của file đã upload
