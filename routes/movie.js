var mongoose = require('mongoose');
var Movie = require('../models/movie');

// 列表页
exports.list = function (req, res) {
	Movie.fetch(function (err, movies) {
	    if (err) console.log(err);
	    
	    res.render('movie/list', {
	    	title: '电影列表页',
	    	movies: movies
	    });
	});
};

// 详情页
exports.detail = function (req, res) {
	res.send("电影详情页");
};

// 添加页
exports.addUI = function (req, res) {
	res.render('movie/add', {
		title: '电影列表页'
	});
};

// 添加
exports.add = function (req, res) {
	var _Movie = new Movie(req.body.movie);
	
	_Movie.save(function (err, movie) {
		if (err) {
			console.log(err);
		}
		
		res.send("添加成功！");
		console.log(movie);
		setTimeout(function () {
			//res.redirect('/movie/' + movie._id);
		}, 3000);
		
	});
};

// 删除
exports.del = function (req, res) {
	res.send("删除电影");
};

// 修改
exports.modify = function (req, res) {
	res.send("修改电影");
};