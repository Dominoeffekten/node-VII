var express = require('express');
var continents = require('./continents.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express dust' });
});

/* GET continents page. */
router.get('/continents', function(req, res, next) {
  res.render('continents', { 
    title: 'Continents',
    contents: 'Continent: ' + continents.africa +' '+ continents.antarctica +' '+ continents.asia +' '+ continents.europe +' '+ continents.northAmerica +' '+ continents.oceania +' '+ continents.southAmerica });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About',});
});

module.exports = router;