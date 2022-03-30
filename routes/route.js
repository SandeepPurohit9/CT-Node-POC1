const express = require("express");
const router = express();
const UserController = require('../controllers/userController');
const { verifySession } = require("../middleware/auth-middleware");

router.post('/login', UserController.UserLogin)
router.get('/home',verifySession,UserController.UserHome)
router.get('/details',verifySession,UserController.UserDetails)
router.get('/logout',UserController.UserLogout)

module.exports = router;   