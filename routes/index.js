var express = require('express');
var router = express.Router();
const sectionController = require('../controller/sectionController')
const coursesController = require('../controller/coursesController')

const { requireAuth } = require('../middleWare/authMiddleware')
/* GET home page. */
router.route('/').get(sectionController.getAllSection)

router.get('/comment', requireAuth, function (req, res, next) {
  res.render('comment');
});

module.exports = router;
