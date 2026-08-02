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

    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mb-6"
    >

      <input
        type="text"
        placeholder="Ajouter une tâche..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}

        className="
          flex-1
          border
          border-gray-300
          rounded-xl
          px-4
          py-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />


      <button
        type="submit"

        className="
          bg-blue-600
          text-white
          px-5
          rounded-xl
          hover:bg-blue-700
          transition
        "
      >
        Ajouter
      </button>


    </form>

  );
}


export default TodoForm;