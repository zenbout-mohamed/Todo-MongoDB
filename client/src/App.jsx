import { useEffect, useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";

import { getTodos, createTodo, updateTodo, deleteTodo,} from "./services/todoService";

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

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
  // Editer une tâche
  const editTodo = async (id, data) => {

    try {

      await updateTodo(id, data);

      loadTodos();

    } catch (error) {

      console.error(
        "Erreur modification :",
        error
      );

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

  const filteredTodos = todos.filter((todo) =>
  todo.title
    .toLowerCase()
    .includes(search.toLowerCase())
  );

 return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

    <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">


      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        📝 Todo List
      </h1>


      <TodoStats todos={todos} />


      <input
        type="text"
        placeholder="🔍 Rechercher une tâche..."

        value={search}

        onChange={(e) => setSearch(e.target.value)}

        className="
          w-full
          mb-5
          border
          rounded-xl
          px-4
          py-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />


      <TodoForm onAddTodo={addTodo} />


      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={removeTodo}
        onUpdate={editTodo}
      />


    </div>

  </div>
);
}

export default App;