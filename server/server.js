const express = require("express");
const cors = require("cors");
require("dotenv").config();


const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

// Connexion a MongoDB
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);


app.get("/", (req, res) => {
    res.json({
        message: "API TodoList MongoDB fonctionnelle"
    });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});