var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var allBurgers = {
            burger: data
        };
        console.log(allBurgers);
        res.render("index", allBurgers);
    });
});
  
// Add new burger to the db.
router.post("/api/burger", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});


module.exports = router;