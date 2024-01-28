const router = require('express').Router();

router.get('/cast/create', (req, res) => {
    res.render('cast/create');
});

router.post('/cast/create', (req, res) => {
    
});

module.exports = router;