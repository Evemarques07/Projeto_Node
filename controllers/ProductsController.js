// ProductsController.js
const Produto = require('../models/Produto')

module.exports = class ProductsController {
  static async create(req, res) {
    try {
      const { descricao, valor, estoque } = req.body

      // Verifica se todos os campos obrigatórios estão presentes
      if (!descricao || !valor || !estoque) {
        return res
          .status(400)
          .json({ error: 'Campos obrigatórios não fornecidos' })
      }

      const novoProduto = await Produto.create({
        descricao,
        valor,
        estoque,
      })

      res.status(201).json(novoProduto)
    } catch (error) {
      console.error('Erro ao criar produto:', error)
      res.status(500).json({ error: 'Erro ao criar produto' })
    }
  }

  static async list(req, res) {
    try {
      const produtos = await Produto.findAll()
      res.status(200).json(produtos)
    } catch (error) {
      console.error('Erro ao listar produtos:', error)
      res.status(500).json({ error: 'Erro ao listar produtos' })
    }
  }

  static async getById(req, res) {
    const { id } = req.params
    try {
      const produto = await Produto.findByPk(id)
      if (produto) {
        res.status(200).json(produto)
      } else {
        res.status(404).json({ message: 'Produto não encontrado' })
      }
    } catch (error) {
      console.error('Erro ao buscar produto:', error)
      res.status(500).json({ error: 'Erro ao buscar produto' })
    }
  }

  static async update(req, res) {
    const { id } = req.params
    try {
      const [updated] = await Produto.update(req.body, {
        where: { id: id },
      })
      if (updated) {
        const updatedProduto = await Produto.findByPk(id)
        res.status(200).json(updatedProduto)
      } else {
        res.status(404).json({ message: 'Produto não encontrado' })
      }
    } catch (error) {
      console.error('Erro ao atualizar produto:', error)
      res.status(500).json({ error: 'Erro ao atualizar produto' })
    }
  }

  static async delete(req, res) {
    const { id } = req.params
    try {
      const deleted = await Produto.destroy({
        where: { id: id },
      })
      if (deleted) {
        res.status(204).send()
      } else {
        res.status(404).json({ message: 'Produto não encontrado' })
      }
    } catch (error) {
      console.error('Erro ao deletar produto:', error)
      res.status(500).json({ error: 'Erro ao deletar produto' })
    }
  }
}
