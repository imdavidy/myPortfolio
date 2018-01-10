
const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')

const app = express()

app.use(express.static(resolve(__dirname, '..', 'public')))
app.use('/api', (req, res, next) => {
  res.send('api reached')
})
app.use('*', (req, res, next) => {
  res.send('welcome!')
})

app.use((err, req, res, next) => {
  res.send(err);
})

app.listen(3000,
  ()=>{
    console.log("connected to server")
  })