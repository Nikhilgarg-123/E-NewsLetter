const express = require('express');
const isauthenticated = require('../Service/jsAuth');
const {register, login, logout} = require('../controllers/user.controller');
const router = express.Router();


router.route('/signup').post(register);
router.route('/login').post(login);
router.route('/logout').get(isauthenticated,logout);





module.exports = router;