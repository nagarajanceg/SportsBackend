var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var init = require('../app/initialize')();
var controller = require('../app/controller/MainController')();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function (req, res, next) {
    res.send({"res":"Hello Node"})
});

router.route('/saveInfo').post(controller.addUser);
router.route('/getUsers').get(controller.getUser);
module.exports = router;
