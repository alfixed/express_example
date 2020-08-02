const express = require('express')
const engines = require('consolidate')
const app = express()

app.set('views', __dirname + '/views')
app.engine('html', engines.hogan)
app.set('view engine', 'html')
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/client', (req, res) => res.render('test'))

app.get('/test', (req, res) => {
  let name = req.query.name
  res.send({text: 'Your name is ' + name})
})


app.listen(3000)
