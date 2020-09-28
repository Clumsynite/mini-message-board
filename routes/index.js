const express = require('express');
const router = express.Router();
const moment = require('moment')
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: moment(new Date()).format('LLLL')
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: moment(new Date()).format('LLLL')
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

module.exports = router;
