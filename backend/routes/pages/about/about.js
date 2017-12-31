var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    title: 'jjjj',
    content: 'kkkk',
    imgSrc: '/static/img/about/intro.jpg'
  });
});

module.exports = router;
