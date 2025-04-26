const { DataSource } = require('typeorm');
const config = require('../config/index');
const User = require('../entities/User');

const dataSource = new DataSource({
  type: 'postgres',
  host: config.get('db.host'),
  port: config.get('db.port'),
  username: config.get('db.username'),
  password: config.get('db.password'),
  database: config.get('db.database'),
  synchronize: config.get('db.synchronize'),
  poolSize: 10,
  entities: [User],
  ssl: config.get('db.ssl'),
});

// ⭐⭐ 這裡加一個印出連線設定 ⭐⭐
console.log('DB連線設定:', {
  host: config.get('db.host'),
  port: config.get('db.port'),
  username: config.get('db.username'),
  password: config.get('db.password'),
  database: config.get('db.database'),
  synchronize: config.get('db.synchronize'),
  ssl: config.get('db.ssl'),
});

// 嘗試初始化資料庫連接
dataSource.initialize()
  .then(() => {
    console.log('資料庫連接成功');
  })
  .catch((err) => {
    console.error('資料庫連接失敗:', err.message); // 更清楚只印錯誤訊息
    console.error('完整錯誤:', err);                // 如果要詳細追蹤
  });

module.exports = { dataSource };