var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    message: 'Express pug'
  });
  console.log(req.params);
  console.log(req.body);
  console.log(req.url);
  console.log(req.query);
});

//about pug
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About Express',
    message: 'This is Express pug'
  });
});

module.exports = router;
