//Grab the orm from the config folder
var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb){
		orm.selectAll("burger", function(res){
			cb(res);
		});
	},

	insertOne: function(cols,vals,cb){
		orm.insertOne("burger", cols, vals, function(res){
			cb(res);
		});
	},

	update: function(objColVals, condition, cb){
		orm.update("burger", objColVals, condition, function(res){
			cb(res);
		});
	},
};

module.exports = burger;