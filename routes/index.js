var express = require('express');
var router = express.Router();
var config = require('config');
/* GET home page. */
const api_url = process.env.API_URL || "http://localhost:8080/health";
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', apiUrl:api_url });
});

module.exports = router;
