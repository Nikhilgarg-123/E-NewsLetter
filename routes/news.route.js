const express = require('express');
const isauthenticated = require('../Service/jsAuth');
const {postnews, getnews, getnewsbyid, getNewsperson} = require('../controllers/news.conroller');
const router = express.Router();


router.route('/createnews').post(isauthenticated,postnews);

router.route('/').get( getnews);

router.route('/:id').get( getnewsbyid);

router.route('/newsperson/:id').get(getNewsperson);





module.exports = router;