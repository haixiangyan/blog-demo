var express = require('express');
var router = express.Router();

// import other root routes
var subscribe = require('./api/subscribe');
var contact = require('./api/contact');
var blogs  = require('./api/blogs');
var blog = require('./api/blog');
var category = require('./api/category');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/subscribe', subscribe);
router.use('/contact', contact);
router.use('/blogs', blogs);
router.use('/blog', blog);
router.use('/category', category);

module.exports = router;
