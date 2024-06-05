# Sử dụng image Node.js với phiên bản 18.17.0 làm base
FROM node:18.17.0

# Tạo và đặt thư mục làm việc cho ứng dụng
WORKDIR /app

# Sao chép file package.json và yarn.lock vào thư mục làm việc
COPY package.json yarn.lock* ./

# Cài đặt các dependencies sử dụng Yarn
RUN yarn install

# Sao chép toàn bộ mã nguồn của ứng dụng vào thư mục làm việc
COPY . .

# Xây dựng ứng dụng Next.js
RUN yarn build

# Mở cổng 3000 để chạy ứng dụng
EXPOSE 3000

# Khởi động ứng dụng Next.js
CMD ["yarn", "start"]