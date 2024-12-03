const express = require('express');
const {createsubscriber} = require('../controllers/subscriber.controller');
const router = express.Router();


router.route('/register').post(createsubscriber);






module.exports = router;