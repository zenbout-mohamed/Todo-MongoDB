import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete, onUpdate }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}

export default TodoList;