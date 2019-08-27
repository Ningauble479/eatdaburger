var orm = require("../config/orm.js");

var sandwhich = {
  all: function(cb) {
    orm.all("sandwhichs", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("sandwhichs", [
      "sandwhich_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("sandwhichs", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = sandwhich;
