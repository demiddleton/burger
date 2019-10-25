var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");


router.get("/burger", function(req,res){
	burger.selectAll(function(data){
		var hbsObject = {
			burger: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/api/burger", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Return ID of the Burger
      res.json({ id: result.insertId });
    });
  });
  


module.exports = router;