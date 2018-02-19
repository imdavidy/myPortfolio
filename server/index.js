
const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')

const app = express()
const port = process.env.PORT || 3000

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

app.listen(port,
  ()=>{
    console.log("connected to server")
  })