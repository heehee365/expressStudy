var mongoose = require('mongoose');
var MovieSchema = require('../schemas/movie');

module.exports = mongoose.model('movie', MovieSchema); // 编译
