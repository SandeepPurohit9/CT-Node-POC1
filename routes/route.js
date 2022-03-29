const express = require("express");
const router = express();
const UserController = require('../controllers/userController')

router.post('/login', UserController.UserLogin)

module.exports = router;