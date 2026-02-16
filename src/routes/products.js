const express = require("express");
const Product = require("../models/Product");
const auth = require("../middlewares/auth");

const router = express.Router();

// Crear producto
router.post("/", auth, async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

// Leer productos
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Leer producto por ID
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// Actualizar producto
router.put("/:id", auth, async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
});

// Eliminar producto
router.delete("/:id", auth, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Producto eliminado" });
});

module.exports = router;
