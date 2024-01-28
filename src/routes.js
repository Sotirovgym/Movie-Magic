const router = require('express').Router();

const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');
const searchController = require('./controllers/searchController');
const castController = require('./controllers/castController');

router.use(homeController);
router.use(movieController);
router.use(searchController);
router.use(castController);

router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router