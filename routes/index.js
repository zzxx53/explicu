var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'explICU', menu:'Home' });
});

/* GET background page. */
router.get('/background', function(req, res) {
  res.render('background', { title: 'explICU', menu:'Background Info' });
});

/* GET timeline page. */
router.get('/timelines', function(req, res) {
  res.render('timelines', { title: 'explICU' , menu: 'Timelines' });
});

/* GET clustering page. */
router.get('/clustering', function(req, res) {
  res.render('clustering', { title: 'explICU' , menu: 'Clustering' });
});

/* GET regressions page. */
router.get('/regression', function(req, res) {
  res.render('regression', { title: 'explICU' , menu: 'Regression' });
});

/* GET contact page. */
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'explICU' , menu: 'Contact' });
});


module.exports = router;
