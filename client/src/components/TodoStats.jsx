function TodoStats({ todos }) {

  const total = todos.length;

  const completed = todos.filter(
    (todo) => todo.completed
  ).length;

  const remaining = total - completed;


  return (

    <div
      className="
        grid
        grid-cols-3
        gap-3
        mb-6
      "
    >

      <div
        className="
          bg-blue-100
          rounded-xl
          p-4
          text-center
        "
      >
        <p className="text-sm text-gray-600">
          Total
        </p>

        <p className="text-2xl font-bold text-blue-600">
          {total}
        </p>

      </div>


      <div
        className="
          bg-green-100
          rounded-xl
          p-4
          text-center
        "
      >

        <p className="text-sm text-gray-600">
          Terminées
        </p>

        <p className="text-2xl font-bold text-green-600">
          {completed}
        </p>

      </div>


      <div
        className="
          bg-orange-100
          rounded-xl
          p-4
          text-center
        "
      >

        <p className="text-sm text-gray-600">
          Restantes
        </p>

        <p className="text-2xl font-bold text-orange-600">
          {remaining}
        </p>

      </div>


    </div>

  );
}


export default TodoStats;