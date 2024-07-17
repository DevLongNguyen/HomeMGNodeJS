const { sequelize } = require('../config/connectDB');
const UserHomeMG = require('../models/user')(sequelize, require('sequelize').DataTypes);

const handleLogin = async (req, res) => {
    try {
        const users = await UserHomeMG.findAll();
        return res.status(200).json({
            message: 'Hi',
            users: users
        });
    } catch (error) {
        console.error('Error in handleLogin:', error);
        return res.status(500).json({
            error: 'Internal server error'
        });
    }
};

module.exports = {
    handleLogin: handleLogin,
};
