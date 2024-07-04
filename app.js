var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const session = require('express-session');
const flash = require('connect-flash');

const { checkMember } = require('./middleWare/authMiddleware')

var indexRouter = require('./routes/index');
var membersRouter = require('./routes/membersRouter');
const coursesRouter = require('./routes/coursesRouter')
const sectionsRouter = require('./routes/sectionsRouter')

const url = "mongodb://127.0.0.1:27017/PE_SDN301m_TrialTest_StudentCodeDB"
const connect = mongoose.connect(url)
var app = express();

connect.then(
  (db) => {
    console.log('connect data thành công')
  },
  (err) => {
    console.log('ko ket noi duoc db')
  }
)



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure to true if using HTTPS
}));


app.use(flash());


app.use((req, res, next) => {
  res.locals.messages = req.flash();
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('*', checkMember)

app.use('/', indexRouter);
app.use('/users', membersRouter);
app.use('/courses', coursesRouter);
app.use('/sections', sectionsRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
