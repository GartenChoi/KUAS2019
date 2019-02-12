var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:about', function(req, res, next) {
    res.render('about/'+req.params.about);
});

module.exports = router;
