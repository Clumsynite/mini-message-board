const express = require('express');

const router = express.Router();
const moment = require('moment');

const messages = [{
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Mini Messageboard',
    messages
  });
});

router.get('/new', (req, res, next) => {
  res.render('new_message', {
    title: 'New Message'
  })
})

router.post('/new', (req, res, next) => {
  const message = {
    user: req.body.author,
    text: req.body.text,
    added: new Date()
  }
  messages.push(message)
  // res.render('index', {title: 'Mini MessageBoard', messages: messages})
  res.redirect('/')
})
module.exports = router;