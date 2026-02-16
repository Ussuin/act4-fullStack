const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// Rutas
const authRoutes = require("./src/routes/auth");
const productRoutes = require("./src/routes/products");

app.use("/auth", authRoutes);
app.use("/products", productRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB conectado");
  })
  .catch(err => {
    console.error("❌ Error al conectar a MongoDB:", err);
  });

// Exportar app para pruebas y Vercel
module.exports = app;

// Levantar servidor local
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  });
}
