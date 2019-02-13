var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');

// const mongoose=require('mongoose'),db=mongoose.connection;
//
// mongoose.connect('mongodb://KUAS:kuas2019@cluster0-shard-00-00-pp6sh.mongodb.net:27017,cluster0-shard-00-01-pp6sh.mongodb.net:27017,cluster0-shard-00-02-pp6sh.mongodb.net:27017',
//     {
//         useNewUrlParser: true,
//         promiseLibrary: global.Promise
//     });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.locals.kuas={
        url:'https://kuas2019.herokuapp.com',
        mainColor:'rgb(212,162,171)',
        warningColor:'#f00',
        successColor:'#298480',
        lightColor:'#fff',
        darkColor:'rgba(0,0,0.7)',
        footerColor:'rgba(0,0,0,0.2)'
    };
    res.locals.mapUrl=function(uName,mName){
        return mName?('/map?school='+encodeURI(uName)+'&major='+encodeURI(mName)):('/map?school='+encodeURI(uName));
    };
    next();
});

app.use('/', indexRouter);
app.use('/about', aboutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
