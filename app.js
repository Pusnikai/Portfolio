// Importing required Library,modules, creating express app and defining port listening on
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 5000

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/media', express.static(__dirname + 'public/media'))
    //Express EJS lAYOUTS
app.use(expressLayouts)
app.set('views', './views')
app.set('view engine', 'ejs')

//using indexRouter.js file for routing
const indexRouter = require('./controllers/index')
app.use('/', indexRouter)


//console output to know to listen to right port
app.listen(port, () => console.info(`Listening on port ${port}`))