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

router.get('/details/:id', (req, res) => {
    const movie = movieService.getByID(req.params.id);
    res.render('details', movie);
});

module.exports = router;