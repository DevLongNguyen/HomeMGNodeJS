var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {connectDB} = require('./src/config/connectDB'); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var webRouter = require('./routes/web');
var userRouter = require('./routes/user');

var app = express();

connectDB()
  .then(() => {
    console.log('Kết nối cơ sở dữ liệu thành công');
    
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/web', webRouter);
    app.use('/user', userRouter);

    app.use(function(req, res, next) {
      next(createError(404));
    });

    app.use(function(err, req, res, next) {
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      res.status(err.status || 500);
      res.render('error');
    });

    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Lỗi kết nối cơ sở dữ liệu:', error);
    process.exit(1);
  });

module.exports = app;
