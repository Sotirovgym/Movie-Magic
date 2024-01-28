const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    try {
        await movieService.create(req.body);
        res.redirect('/');
    } catch(err) {
        console.log(err.message);
        res.redirect('/create');
    }
});

router.get('/details/:id', async (req, res) => {
    const movie = await movieService.getByID(req.params.id).lean();
    res.render('details', movie);
});

module.exports = router;