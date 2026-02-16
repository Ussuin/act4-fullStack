const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Importar rutas
const authRoutes = require("./src/routes/auth");
const productRoutes = require("./src/routes/products");

// Usar rutas
app.use("/auth", authRoutes);
app.use("/products", productRoutes);

// Exportar app para pruebas y Vercel
module.exports = app;

// Si corres localmente, levanta el servidor
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}
