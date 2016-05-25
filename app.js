
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/index')
  , user = require('./routes/user')
  , movie = require('./routes/movie')
  , http = require('http')
  , mongoose = require('mongoose')
  , path = require('path');

var app = express();

mongoose.connect('mongodb://localhost/express');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("数据库连接成功！");
});

//console.log("user",routes.user);
// all environments
app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views/pages');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.locals.moment = require('moment');

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.add);
// 用户
app.get('/users', user.list);
app.get('/user/:id', user.detail);
app.get('/user/add/new', user.addUI);
app.post('/user/add/new', user.add);
app.post('/user/delete/:id', user.del);
app.get('/user/modify/:id', user.modifyUI);
app.post('/user/modify/:id', user.modify);
// 电影
app.get('/movies', movie.list);
app.get('/movie/:id', movie.detail);
app.get('/movie/add/new', movie.addUI);
app.post('/movie/add/new', movie.add);
app.get('/movie/delete/:id', movie.del);
app.get('/movie/modify/:id', movie.modify);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
