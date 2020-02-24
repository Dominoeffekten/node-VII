var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log(req.params);
  console.log(req.body);
  console.log(req.url);
  console.log(req.query);
});

module.exports = router;
