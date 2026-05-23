const Product = require('../model/Product')

exports.getProducts = async (req, res) => {
  const products = await Product.find()
  res.json(products)
}

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body)
  res.json(product)
}