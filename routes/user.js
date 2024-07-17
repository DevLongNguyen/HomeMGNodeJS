const express = require('express');
const router = express.Router();
const userController = require('../src/controllers/userController');

router.get('/login', userController.handleLogin);

module.exports = router;
