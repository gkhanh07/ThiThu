var express = require('express');
var sectionsRouter = express.Router();
const coursesController = require('../controller/coursesController')
const sectionController = require('../controller/sectionController')
const { requireAuth } = require('../middleWare/authMiddleware')

sectionsRouter.route('/create').post(sectionController.createSection)
sectionsRouter.route('/delete').post(requireAuth, sectionController.deleteSection)


sectionsRouter.get('/update/:id', requireAuth, function (req, res, next) {
    res.render('updateSection');
});

module.exports = sectionsRouter;