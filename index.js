// index.js

const express = require('express')
const morgan = require('morgan')
const conn = require('./db/index')
const productsRoute = require('./routes/ProductsRoute')

const app = express()

// Define o formato do log que deseja utilizar (opcional)
app.use(morgan('dev'))

app.use(express.json())
app.use('/products', productsRoute)

app.get('/', (req, res) => {
  res.send('Servidor Express rodando')
})

conn
  .sync()
  .then(() => {
    console.log('Banco de dados sincronizado. Iniciando o servidor...')
    app.listen(3000, () => {
      console.log('Servidor Express iniciado na porta 3000')
    })
  })
  .catch((err) => {
    console.error('Erro ao sincronizar o banco de dados:', err)
  })
