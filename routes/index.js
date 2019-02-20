var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/googleff8ee2516444f278.html', function(req, res, next) {
    res.send('google-site-verification: googleff8ee2516444f278.html');
});

module.exports = router;