var express = require('express');
var router = express.Router();

const leaderRouter = require('./leaderRouter');
const commentRouter = require('./commentRouter');
const dishRouter = require('./dishRouter');
const promoRouter = require('./promoRouter');
const uploadRouter = require('./uploadRouter');
const favoriteRouter = require('./favoriteRouter');

router.use('/leaders', leaderRouter);
router.use('/comments', commentRouter);
router.use('/dishes', dishRouter);
router.use('/promotions', promoRouter);
router.use('/upload', uploadRouter);
router.use('/favorites', favoriteRouter);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
