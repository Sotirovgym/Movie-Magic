const router = require('express').Router();

const userService = require('../services/userService');

router.get('/register', (req, res) => {
    res.render('user/register');
});

router.post('/register', async (req, res) => {
    await userService.register(req.body);
    res.redirect('/login');
});

router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const token = await userService.login(email, password);
    res.cookie('auth', token);
    res.redirect('/');
});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

module.exports = router;