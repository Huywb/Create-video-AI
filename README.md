#  AI Video Gen-Studio - AI-Powered Media Production

**AI Video Gen-Studio** là một nền tảng SaaS hiện đại cho phép người dùng tạo nội dung video và hình ảnh chuyên nghiệp chỉ từ các câu lệnh văn bản. Dự án kết hợp sức mạnh của các mô hình Generative AI tiên tiến nhất (Gemini, Wan 2.1, WaveSpeed) để tối ưu hóa quy trình sáng tạo.

---

##  Tech Stack

### **Frontend**
* **Framework:** React + Vite
* **Authentication:** Clerk React 
* **Styling:** TailwindCSS v4 & Typescript
* **Animations:** Framer Motion 
* **Networking:** Axios
* **UI Components:** Lucide Icons & React Hot Toaster


### **Backend & Database**
* **Runtime:** Node.js (v20+) with TSX
* **Framework:** Express 
* **ORM:** Prisma
* **Database:** PostgreSQL (Hosted on **Neon** - Serverless)
* **Media Storage:** Cloudinary (CDN & Media Optimization)
* **Monitoring:** Sentry (Error Tracking)

### **AI Models (Multimodal)**
* **Image Gen:** `Gemini-2.5-Flash-Image`
* **Video Gen:** `Wan-2.1/i2v-720p-ultra-fast` (Image-to-Video)

---

##  Project Structure

```text
AI-Gen-Studio
│
├── reactjs (Frontend)
│   ├── src
│   │   ├── assets       # Hình ảnh, icons
│   │   ├── components   # Các component dùng chung 
│   │   ├── config       # Cấu hình axios
│   │   ├── pages        # Trang Home, Community,...
│   │   └── types        # Định nghĩa các interface , type
│
├── backend (Server)
│   ├── cònigs           # Cấu hình multer, prisma, ai,...
│   ├── controllers      # Xử lý logic nghiệp vụ
│   ├── middleware       # Kiểm tra quyền, xác thực người dùng
│   ├── prisma           # Khởi tạo prisma
│   ├── routes           # Định nghĩa các API Endpoints
│   └── server.ts        # File chạy server chính
```
## Hướng dẫn Cài đặt
  git clone https://github.com/Huywb/Create-video-AI/tree/main
  
## Client:

cd reactjs
npm install
npm run dev
  
## Server:

cd backend
npm install
npx prisma generate
npm run server
  
## Thiết lập biến môi trường (.env)

## Client:

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publish_key

VITE_URL=http://localhost:3000

## Server:

DATABASE_URL=your_mongodb_url
CLERK_PUBLISHABLE_KEY=your_clerk_publish_key
CLERK_SECRET_KEY=your_clerk_secret_key

CLERK_WEBHOOK_SIGNING_SECRET=your_clerk_webhook

CLOUDINARY_URL=your_cloudinary_url
GOOLE_CLOUD_API_KEY=your_cloudinary_key

WAVESPEED_API_KEY=your_wavespeed_key

## Kết quả đạt được (Key Learning Outcomes)
- Multimodal AI: Tích hợp đồng thời Image, Audio và Video Gen vào một workflow duy nhất.
- Modern Auth: Quản lý User Flow phức tạp với Clerk.
- Scalable DB: Triển khai PostgreSQL trên Neon với tư duy Serverless.
- Next-gen UI: Sử dụng React 19 và Tailwind 4 để tối ưu hóa hiệu suất render.
- Error Management: Theo dõi và xử lý lỗi chuyên nghiệp với Sentry.
