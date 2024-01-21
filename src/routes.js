const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    res.redirect('/');
});

router.get('/search', (req, res) => {
    res.render('search');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/details', (req, res) => {
    res.render('details');
});

router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router