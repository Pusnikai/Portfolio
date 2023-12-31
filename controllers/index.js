const express = require('express');
const router = express.Router();

//router rendering view files
router.get('/', (req, res) => {
    res.render('home');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project', (req, res) => {
    res.render('project');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

//exporting the routers
module.exports = router;