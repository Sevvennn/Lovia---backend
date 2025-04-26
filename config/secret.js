module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresDay: process.env.JWT_EXPIRES_DAY,
  firebase: {
    serviceAccount: require('./firebase.json'),  // <<--- 這行
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET
  }
}