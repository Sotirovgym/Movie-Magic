const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    res.redirect('/');
});

router.get('/details', (req, res) => {
    res.render('details');
});

module.exports = router;