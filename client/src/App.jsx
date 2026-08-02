import { useEffect, useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { getTodos, createTodo, updateTodo, deleteTodo,} from "./services/todoService";

function App() {
  const [todos, setTodos] = useState([]);

  // Charger les tâches au démarrage
  useEffect(() => {
    loadTodos();
  }, []);

  // Récupérer toutes les tâches
  const loadTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement :", error);
    }
  };

  // Ajouter une tâche
  const addTodo = async (title) => {
    try {
      await createTodo({ title });
      loadTodos();
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
    }
  };

  // Cocher / Décocher une tâche
  const toggleTodo = async (todo) => {
    try {
      await updateTodo(todo._id, {
        title: todo.title,
        completed: !todo.completed,
      });

      loadTodos();
    } catch (error) {
      console.error("Erreur lors de la modification :", error);
    }
  };

  // Supprimer une tâche
  const removeTodo = async (id) => {
    try {
      await deleteTodo(id);
      loadTodos();
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  return (
    <div>
      <h1>Ma Todo List</h1>

      <TodoForm onAddTodo={addTodo} />

      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={removeTodo}
      />
    </div>
  );
}

export default App;