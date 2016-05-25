var mongoose = require('mongoose');
var Movie = require('../models/movie');

exports.add = function(req, res){
	Movie.fetch(function (err, movies) {
	    if (err) console.log(err);
	    
	    res.render('index', {
	    	title: '首页',
	    	movies: movies
	    });
	});
};

exports.a = function(req, res){
	res.render('index', { title: 'Express' });
};