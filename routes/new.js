var express = require('express');
var router = express.Router();

router.get('/new', function(req, res, next) {
  res.render('new_form', { title: 'New Message' });
});

module.exports = router;
