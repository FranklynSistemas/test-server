const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/test', (req, res) => {
  console.log('Test')
  res.send('ok')
})

app.post('/location', (req, res) => {
  console.log('Location Info', req.body)
  res.send('ok')
})

app.post('/fallDown', (req, res) => {
  console.log('Fall down Info', req.body)
  res.send('ok')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
