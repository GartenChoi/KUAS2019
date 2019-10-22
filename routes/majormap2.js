var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:page', function(req, res, next) {
    res.render('majormap2/'+req.params.page);
});

module.exports = router;
