const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Update 1!')
})

app.listen(port, () => {
  console.log(`Healthify app listening on port ${port}`)
})