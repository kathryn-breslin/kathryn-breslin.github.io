var express = require("express");

var router = express.Router();

var contact = require("../models/contact.js");

router.get("/contact", function (req, res) {
    contact.all(function (data) {
        var hbsObject = {
            contact: data
        };
        console.log(hbsObject);
        res.render("contact", hbsObject);
    });
});

router.get("/api/contact", function(req, res) {
    contact.all(function (data) {
        var hbsObject = {
            contact: data
        };
        console.log(hbsObject);
        return res.json(hbsObject);
    });
});

router.post("/api/contact", function(req, res) {
    contact.create([
        "firstName", "lastName", "phoneNumber", "email", "details"
    ], [
        req.body.firstName, 
        req.body.lastName,
        req.body.phoneNumber, 
        req.body.email,
        req.body.details
    ], function (result) {
        res.json({ id: result.insertId })
    });
});

router.put("/api/trip/:id", function (req, res) {
    var condition = "Id = " + req.params.id;
    console.log("Condition ", condition);

    contact.update({
        firstName: req.body.firstName, 
        lastName: req.body.lastName, 
        phoneNumber: req.body.phoneNumber, 
        email: req.body.phoneNumber, 
        details: req.body.details
    }, condition, function (results) {
        if (results.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/trip/:id", function (req, res) {
    var condition = "Id = " + req.params.id;
    console.log("Condition", condition);

    contact.delete(condition, function(result) {
        console.log("Results", result);
        res.status(200).end();
    });
});

module.exports = router;