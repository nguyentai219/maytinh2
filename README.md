# 📱 Máy Tính Đọc Kết Quả

Máy tính tự đọc kết quả bằng tiếng Việt. Hoạt động như app thật (PWA) trên Android và iOS.

---

## 🚀 Hướng dẫn đưa lên GitHub và cài về điện thoại

### Bước 1 — Tạo repository trên GitHub

1. Vào **github.com** → đăng nhập
2. Nhấn nút **"New repository"** (dấu +)
3. Đặt tên repo: `may-tinh` (hoặc tên bất kỳ)
4. Chọn **Public**
5. Nhấn **"Create repository"**

---

### Bước 2 — Upload file lên GitHub

**Cách A — Kéo thả (dễ nhất, không cần Git):**

1. Trong repo vừa tạo, nhấn **"uploading an existing file"**
2. Kéo thả **toàn bộ các file** sau vào:
   ```
   index.html
   manifest.json
   sw.js
   icons/
     icon-72.png
     icon-96.png
     icon-120.png
     icon-128.png
     icon-144.png
     icon-152.png
     icon-180.png
     icon-192.png
     icon-512.png
   ```
3. Nhấn **"Commit changes"**

**Cách B — Dùng Git (nếu có cài Git):**
```bash
git clone https://github.com/TEN_BAN/may-tinh.git
cd may-tinh
# Copy tất cả file vào thư mục này
git add .
git commit -m "Add PWA calculator"
git push
```

---

### Bước 3 — Bật GitHub Pages

1. Vào repo → tab **Settings**
2. Kéo xuống mục **Pages** (bên trái)
3. Phần **Source** → chọn **"Deploy from a branch"**
4. Branch: chọn **main** → folder: **/ (root)**
5. Nhấn **Save**
6. Chờ ~1 phút → GitHub sẽ hiển thị link:
   ```
   https://TEN_BAN.github.io/may-tinh/
   ```

---

### Bước 4 — Cài về điện thoại như app thật

#### Android (Chrome):
1. Mở Chrome → vào link GitHub Pages ở trên
2. Nhấn menu **⋮** (3 chấm góc phải)
3. Chọn **"Thêm vào màn hình chính"**
4. Nhấn **"Thêm"** → icon xuất hiện trên màn hình

#### iOS (Safari):
1. Mở Safari → vào link GitHub Pages
2. Nhấn nút **Chia sẻ** (hình vuông + mũi tên lên)
3. Chọn **"Thêm vào màn hình chính"**
4. Nhấn **"Thêm"**

---

## ✅ Tính năng

- 🔊 Tự đọc kết quả bằng tiếng Việt khi nhấn =
- 📳 Rung khi nhấn phím (Android)
- 🕘 Lưu lịch sử phép tính
- ⚙️ Cài đặt giọng đọc, tốc độ, làm tròn, tiền tệ
- 📴 Hoạt động offline sau lần đầu tải
- 📱 Giao diện fullscreen như app thật

---

## 📁 Cấu trúc file

```
may-tinh/
├── index.html      ← Toàn bộ app
├── manifest.json   ← Cấu hình PWA (tên, icon, màu sắc)
├── sw.js           ← Service Worker (cache offline)
└── icons/          ← Icon các kích cỡ
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-120.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-180.png
    ├── icon-192.png
    └── icon-512.png
```
