import { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onUpdate }) {

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);


  const handleUpdate = () => {

    if (!newTitle.trim()) return;

    onUpdate(todo._id, {
      title: newTitle
    });

    setIsEditing(false);
  };


  return (
    <li>

      {isEditing ? (

        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />

          <button onClick={handleUpdate}>
            Enregistrer
          </button>

        </div>

      ) : (

        <div>

          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo)}
          />


          <span
            style={{
              textDecoration: todo.completed
                ? "line-through"
                : "none"
            }}
          >
            {todo.title}
          </span>


          <button
            onClick={() => setIsEditing(true)}
          >
            ✏️ Modifier
          </button>


          <button
            onClick={() => onDelete(todo._id)}
          >
            🗑️ Supprimer
          </button>

        </div>

      )}

    </li>
  );
}

export default TodoItem;