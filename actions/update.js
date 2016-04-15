'use strict';
var editpager = require('../view/editPager');
var database = require('../database');
var query = require('../util/query');
var postUtil = require('../util/post');
var indexAction = require('./index');

module.exports = function (req,res) {


    if (req.method === 'GET'){
        var id = query(req).id;
        var post = database.list[id];
        var errors = {};
        res.end(new editpager(id,post,errors).render());
    }else {
        postUtil(req).then(data => {
            let id = data.id;
            delete data.id;

            database.update(id,data);
            indexAction(req, res);
        });
    }
};