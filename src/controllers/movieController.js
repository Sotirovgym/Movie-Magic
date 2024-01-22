const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    movieService.create(req.body);
    res.redirect('/');
});

router.get('/details', (req, res) => {
    res.render('details');
});

module.exports = router;