const router = require('express').Router();

const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');
const searchController = require('./controllers/searchController');

router.use(homeController);
router.use(movieController);
router.use(searchController);

router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router