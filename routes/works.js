var express = require('express');
var router = express.Router();

router.get('/:date', async function(req, res, next) {
  return res.render('works/'+req.params.date, {});
});
module.exports = router;