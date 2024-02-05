const router = require('express').Router();

const movieService = require('../services/movieService');
const castService = require('../services/castService');
const { isAuth } = require('../middlewares/userMiddlewear');

router.get('/create', isAuth, (req, res) => {
    res.render('movie/create'); 
});

router.post('/create', isAuth, async (req, res) => {
    try {
        const movie = {
            ...req.body,
            owner: req.user._id
        }
        await movieService.create(movie);
        res.redirect('/');
    } catch(err) {
        res.redirect('/create');
    }
});

router.get('/movies/:id/attach', isAuth, async (req, res) => {
    const movie = await movieService.getByID(req.params.id).lean();
    const casts = await castService.getAll().lean();
    // TODO: remove already added casts
    res.render('movie/attach', { movie, casts });
});

router.post('/movies/:id/attach', isAuth, async (req, res) => {
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
    const isOwner = movie.owner == req.user?._id;
    res.render('movie/details', { movie, isOwner });
});

router.get('/movies/:id/edit', isAuth, async (req, res) => {
    const movie = await movieService.getByID(req.params.id).lean();
    res.render('movie/edit', { movie });
});

router.post('/movies/:id/edit', isAuth, async (req, res) => {
    const editedMovie = req.body;
    await movieService.edit(req.params.id, editedMovie);
    res.redirect(`/details/${req.params.id}`);
});

router.get('/movies/:id/delete', isAuth, async (req, res) => {
    await movieService.delete(req.params.id);
    res.redirect('/');
});

module.exports = router;