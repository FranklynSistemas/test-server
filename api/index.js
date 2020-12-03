const app = require('express')()
const { v4 } = require('uuid')

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`)
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
