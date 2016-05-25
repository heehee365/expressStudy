var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
	"title": String,
	"doctor": String,
	"language": String,
	"country": String,
	"summary": String,
	"flash": String,
	"poster": String,
	"year": Number,
	"meta": {
		"createAt": {
			"type": Date,
			"default": Date.now()
		},
		"updateAt": {
			"type": Date,
			"default": Date.now()
		}
	}
});

// 为模式添加方法:下面的意思是当数据保存的时候执行
MovieSchema.pre('save', function (next) {
	if (this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now();
	} else {
		this.meta.updateAt = Date.now();
	}
	
	next();
});

MovieSchema.statics = {
	fetch: function (cb) {
		return this
			.find({})
			.sort('meta.updateAt')
			.exec(cb);
	},
	findById: function (id, cb) {
		return this
			.findOne({_id: id})
			.exec(cb);
	}
};

// 可以像下面这样自定义方法来对数据进行处理
MovieSchema.methods.customMethod = function () {
	consle.info(this.title);
};

module.exports = MovieSchema;
