var express = require('express');
var router = express.Router();

router.get('/game', async function(req, res, next) {
  return res.render('temporary/game', {});
});
module.exports = router;