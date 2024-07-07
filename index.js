const express = require('express')
const conn = require('./db')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {})

conn
  .sync()
  .then(() => app.listen(3000))
  .catch((err) => console.error(err))
