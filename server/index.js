
const express = require('express')
/* --- saved for future use

const bodyParser = require('body-parser')
-------------------------------- */
const {resolve} = require('path')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(resolve(__dirname, '..', 'public')))
app.use('/api', (req, res, next) => {
  res.send('api reached')
})
app.use('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

app.use((err, req, res, next) => {
  res.send(err);
})

app.listen(port,
  ()=>{
    console.log("connected to server")
  })