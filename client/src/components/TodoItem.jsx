function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />

        <span
          style={{
            marginLeft: "10px",
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.title}
        </span>
      </div>

      <button onClick={() => onDelete(todo._id)}>
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;