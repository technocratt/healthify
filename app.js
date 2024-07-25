const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h2>')
})

app.listen(port, () => {
  console.log(`Healthify app listening on port ${port}`)
})