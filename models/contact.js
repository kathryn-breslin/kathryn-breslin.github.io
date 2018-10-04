var orm = require("../config/orm.js");

var contact = {
    all: function(cb) {
        orm.all("contact", function(res) {
            cb(res);
        });
    }, 
    create: function(cols, vals, cb) {
        orm.create("contact", cols, vals, function(res) {
            cb(res);
        });
    }, 
    update: function(objColVals, condition, cb) {
        orm.update("contact", objColVals, condition, function(res) {
            cb(res);
        });
    }, 
    delete: function(objColVals, condition, cb) {
        orm.delete("contact", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = contact;