import { useState } from "react";


function TodoItem({ todo, onToggle, onDelete, onUpdate }) {

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);


  const handleUpdate = () => {

    if (!title.trim()) return;

    onUpdate(todo._id, {
      title
    });

    setIsEditing(false);
  };


  return (

    <div
      className="
        flex
        items-center
        justify-between
        bg-gray-50
        rounded-xl
        p-4
        mb-3
        border
        border-gray-200
        hover:shadow-md
        transition
      "
    >

      {
        isEditing ? (

          <div className="flex flex-1 gap-3">

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}

              className="
                flex-1
                border
                rounded-lg
                px-3
                py-2
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />


            <button
              onClick={handleUpdate}

              className="
                bg-green-600
                text-white
                px-4
                rounded-lg
                hover:bg-green-700
              "
            >
              Sauver
            </button>

          </div>


        ) : (


          <>

            <div className="flex items-center gap-3">


              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo)}

                className="
                  w-5
                  h-5
                  cursor-pointer
                "
              />


              <span

                className={`
                  text-lg
                  ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }
                `}

              >
                {todo.title}

              </span>


            </div>


            <div className="flex gap-2">


              <button
                onClick={() => setIsEditing(true)}

                className="
                  bg-yellow-400
                  px-3
                  py-2
                  rounded-lg
                  hover:bg-yellow-500
                "
              >
                ✏️
              </button>



              <button
                onClick={() => onDelete(todo._id)}

                className="
                  bg-red-500
                  text-white
                  px-3
                  py-2
                  rounded-lg
                  hover:bg-red-600
                "
              >
                🗑️
              </button>


            </div>


          </>

        )
      }


    </div>

  );
}


export default TodoItem;