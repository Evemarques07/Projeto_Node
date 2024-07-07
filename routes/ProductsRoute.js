// routes/ProductsRoute.js

const express = require('express')
const router = express.Router()
const ProductsController = require('../controllers/ProductsController')

// Rota para criar um novo produto
router.post('/create', ProductsController.create)

// Rota para listar todos os produtos
router.get('/', ProductsController.list)

// Rota para obter um produto por ID
router.get('/:id', ProductsController.getById)

// Rota para atualizar um produto por ID
router.put('/:id', ProductsController.update)

// Rota para deletar um produto por ID
router.delete('/:id', ProductsController.delete)

module.exports = router
