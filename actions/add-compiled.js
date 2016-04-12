'use strict';

var database = require('../database');
var addPager = require('../view/addPager');
var indexPager = require('../view/indexPager');
var post = require('../util/post');

module.exports = function (req, res) {
  if (req.method === 'GET') {
    res.end(new addPager().render());
  } else {
    post(req).then(function (data) {
      database.add(data);
      res.end(new indexPager(database.list).render());
    });
  }
};

//# sourceMappingURL=add-compiled.js.map