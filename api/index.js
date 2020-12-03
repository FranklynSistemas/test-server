const app = require('express')()

app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
  res.end('Hello!')
})

app.post('api/location', (req, res) => {
  console.log('Location Info', req.body)
  res.send('ok')
})

app.post('api/fallDown', (req, res) => {
  console.log('Fall down Info', req.body)
  res.send('ok')
})

module.exports = app
