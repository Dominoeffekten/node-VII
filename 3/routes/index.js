var express = require('express');
var continents = require('./continents.js'); //modul med indhold af kontinenter
const worldControllers = require("../controllers/worldControllers"); //
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express dust' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About',});
});

/* GET continents page. */
router.get('/continents', function(req, res, next) {
  res.render('continents', { 
    title: 'Continents',
    contents: 'Continent: ' + continents.africa +' '+ continents.antarctica +' '+ continents.asia +' '+ continents.europe +' '+ continents.northAmerica +' '+ continents.oceania +' '+ continents.southAmerica 
  });
});

/* GET country page. */
router.get('/country', function(req, res, next) {
  worldControllers.retrieveCountry(req, res, next);  // get data from
});

router.get("/country/:country", function(req, res, next) {  // route with country name
  worldControllers.retrieveCountryData(req, res, next);  // get data from
});

router.get("/countryData", function(req, res, next) {       // route to  country form page
  res.render("countryData", {});
});
router.post("/countryData", function(req, res, next) {      // route with country data
  worldControllers.insertCountry(req, res);               // handling before
  
});

module.exports = router;