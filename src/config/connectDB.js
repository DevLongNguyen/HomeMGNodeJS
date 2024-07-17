const { Sequelize } = require('sequelize');

const username = 'db-project';
const password = 'Qazplm@123'; 
const host = 'db-project.database.windows.net';
const port = 1433;
const dbname = 'db-side'; 

const sequelize = new Sequelize(`mssql://${username}:${password}@${host}:${port}/${dbname}`, {
  dialect: 'mssql', 
  dialectOptions: {
    options: {
      encrypt: true, 
      trustServerCertificate: true, 
    },
  },
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Kết nối cơ sở dữ liệu thành công');
  } catch (error) {
    console.error('Lỗi kết nối cơ sở dữ liệu:', error);
    throw error;
  }
};

module.exports = { connectDB, sequelize };