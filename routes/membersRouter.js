var express = require('express');
var memberRouter = express.Router();
const memberController = require('../controller/memberController')

/* GET users listing. */
memberRouter.get('/signup', function (req, res, next) {
  res.render('signUp');
});

memberRouter.get('/login', function (req, res, next) {
  res.render('login');
});
memberRouter.route('/signup').post(memberController.signUp)
memberRouter.route('/login').post(memberController.login)
memberRouter.route('/logout').get(memberController.logout)
module.exports = memberRouter;
