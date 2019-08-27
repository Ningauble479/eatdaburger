
var express = require("express");

var router = express.Router();
var sandwhich = require("../models/sandwhich.js");

router.get("/", function(req, res) {
  res.redirect("/sandwhichs");
});

router.get("/sandwhichs", function(req, res) {
  sandwhich.all(function(sandwhichData) {
    res.render("index", { sandwhich_data: sandwhichData });
  });
});

router.post("/sandwhichs/create", function(req, res) {
  sandwhich.create(req.body.sandwhich_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/sandwhichs/:id", function(req, res) {
  sandwhich.update(req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  });
});

module.exports = router;
