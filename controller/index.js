var express = require('express');
var router = express.Router();

/* GET home page. */

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/project', (req, res) => {
    res.render('project')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})
module.exports = router;