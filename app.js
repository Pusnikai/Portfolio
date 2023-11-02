const express = require('express')
    //const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 5000


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/media', express.static(__dirname + 'public/media'))


//app.use(expressLayouts)
app.set('views', './views')
app.set('view engine', 'ejs')


app.get('', (req, res) => {
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



app.listen(port, () => console.info(`Listening on port ${port}`))