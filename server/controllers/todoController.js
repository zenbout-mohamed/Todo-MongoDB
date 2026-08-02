const Todo = require("../models/Todo");

// Récupérer toutes les tâches
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find().sort({ createdAt: -1 });
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Ajouter une tâche
const createTodo = async (req, res) => {
    try {
        console.log("Données reçues :", req.body);

        const { title } = req.body;

         if (!title || title.trim() === "") {
            return res.status(400).json({
                message: "Le titre est obligatoire."
            });
        }

        const todo = await Todo.create({
            title
        });

        res.status(201).json(todo);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Modifier une tâche
const updateTodo = async (req, res) => {
    try {

        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { 
                new: true,
                runValidators: true
             }
        );

        if (!todo) {
            return res.status(404).json({
                message: "Tâche introuvable"
            });
        }

        res.json(todo);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Supprimer une tâche
const deleteTodo = async (req, res) => {
    try {

        const todo = await Todo.findByIdAndDelete(req.params.id);

        if (!todo) {
            return res.status(404).json({
                message: "Tâche introuvable"
            });
        }

        res.json({
            message: "Tâche supprimée"
        });

    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};