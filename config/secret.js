module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresDay: process.env.JWT_EXPIRES_DAY,
  firebase: {
    serviceAccount: (() => {
      // 檢查環境變數是否存在
      if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
        throw new Error('FIREBASE_SERVICE_ACCOUNT is not defined');
      }
      try {
        // 嘗試將其解析為 JSON
        return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
      } catch (err) {
        // 如果解析失敗，拋出錯誤
        throw new Error('Invalid JSON format for FIREBASE_SERVICE_ACCOUNT');
      }
    })(),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET
  }
};