var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_98/index', { id: '409410098', name: '林品睿' });
});

module.exports = router;
