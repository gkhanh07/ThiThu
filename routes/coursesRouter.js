var express = require('express');
var coursesRouter = express.Router();
const coursesController = require('../controller/coursesController')


coursesRouter.route('/add').post(coursesController.createCourses)
coursesRouter.route('/create').post(coursesController.addCourses)
coursesRouter.route('/delete').post(coursesController.deleteCourses)
coursesRouter.route('/search').post(coursesController.findCourses)

module.exports = coursesRouter;