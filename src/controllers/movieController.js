const router = require('express').Router();

const movieService = require('../services/movieService');
const castService = require('../services/castService');

router.get('/create', (req, res) => {
    res.render('movie/create'); 
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

router.get('/movies/:id/attach', async (req, res) => {
    const movie = await movieService.getByID(req.params.id).lean();
    const casts = await castService.getAll().lean();
    // TODO: remove already added casts
    res.render('movie/attach', { movie, casts });
});

router.post('/movies/:id/attach', async (req, res) => {
    const movieID = req.params.id;
    await movieService.attachCast(movieID, req.body.cast);
    res.redirect(`/details/${movieID}`);
});

// Just an example of how to get the casts without using populate
// router.get('/details/:id', async (req, res) => {
//     const movie = await movieService.getByID(req.params.id).lean();
//     const casts = await castService.getManyByIDs(movie.casts).lean();
//     res.render('movie/details', { movie, casts });
// });

router.get('/details/:id', async (req, res) => {
    const movie = await movieService.getByID(req.params.id).lean();
    res.render('movie/details', { movie });
});

router.get('/movies/:id/edit', async (req, res) => {
    const movie = await movieService.getByID(req.params.id).lean();
    res.render('movie/edit', { movie });
});

module.exports = router;