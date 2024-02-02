const router = require('express').Router();

const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');
const searchController = require('./controllers/searchController');
const castController = require('./controllers/castController');
const userController = require('./controllers/userController');

router.use(homeController);
router.use(movieController);
router.use(searchController);
router.use(castController);
router.use(userController);

router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router