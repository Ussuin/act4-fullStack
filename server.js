const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app =axpress();
app.use(express.json());
app.use(cors());

 mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.error(err));
    
    // Rutas
     const authRoutes = require("./src/routes/auth");
      const productRoutes = require("./src/routes/products");
      
      app.use("/auth", authRoutes);
       app.use("/products", productRoutes);
        const PORT = process.env.PORT || 3000; 
        app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));