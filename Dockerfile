# 使用官方 Node.js 22 映像
FROM node:22

# 設定環境變數為生產環境
ENV NODE_ENV=production

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝生產環境依賴
RUN npm ci --production

# 複製其餘檔案
COPY . .

# 開放應用程式端口
EXPOSE 8080

# 執行應用程式
CMD ["node", "./bin/www.js"]