const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/media', express.static(__dirname + 'public/media'))


app.set('views', './views')
app.set('view engine', 'ejs')


app.get('', (req, res) => {
    res.render('home')
})



app.listen(port, () => console.info(`Listening on port ${port}`))