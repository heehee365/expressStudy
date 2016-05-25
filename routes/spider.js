/**
 * 爬虫
 */
var http = require('http');
var cheerio = require('cheerio'); // 类似于jQuery，安装方法：npm install cheerio
var url = 'http://www.imooc.com/video/7965';


function filterHtml (html) {
	var $ = cheerio(html);
	var $need  = $('.learnchapter');
	/* 获取的数据
	 * [{
		title: '',
		videos: [{
			title: '',
			id: '',
		}]
	}]*/
	var data = [];
}

http.get(url, function (res) {
	var html = '';
	
	res.on('data', function (data) {
		html += data;
	});
	
	res.on('end', function () {
		filterhtml(html);
		console.log(html);
	});
}).on('error', function () {
	console.log('数据获取出现问题...');
});

function Spider () {
	
}
module.exports = Spider;