'use strict';

var database = require('../database');
var getId = require('../util/getId');
var indexAction = require('./index');

module.exports = function del(req, res) {
    getId(req, id => {
        database.del(id);
        indexAction(req, res);
    });
};

//# sourceMappingURL=del-compiled.js.map