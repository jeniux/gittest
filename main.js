var express = require('express')
var app = express()


var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)


var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}


var ts = require('./timestamp.js')
app.use(ts({ option1: '1', option2: '2' }))

app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.ts + '</small>'
  res.send(responseText)
})

app.listen(6000, "0.0.0.0")
