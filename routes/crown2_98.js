var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_98/index', { id: '409410098', title: 'crown2' });
});

module.exports = router;
