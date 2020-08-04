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
  let http = require('http');

  var options = {
    host: 'api.github.com',
    path: '/user'
  };

  callback = function(response) {
    res.send({text: 'Your response is ' + response.headers.location})
  }

  http.request(options, callback).end();
})


app.listen(3000)
