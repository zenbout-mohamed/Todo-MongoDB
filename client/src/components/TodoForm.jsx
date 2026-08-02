import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTodo(title);

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">
        Ajouter
      </button>
    </form>
  );
}

export default TodoForm;