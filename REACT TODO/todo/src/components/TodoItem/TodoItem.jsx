/* eslint-disable no-unused-vars */
import React from "react";

const TodoItem = ({
  todoListindex,
  deleteTodo,
  todo,
  todoText,
  setTodoText,
  filterTodo,
  fetchFilterIndex,
}) => {
  return (
    <>
      <li
        // key={todoListindex}
        className="flex flex-row justify-center items-center"
      >
        <input
          type="checkbox"
          className="rounded-2xl border-0 outline-0"
          // onChange={(event) => event.target.checked && fetchFilterIndex(todoListindex)}
          // onChange={(event) =>
          //   event.target.checked && fetchFilterIndex(todoListindex)
          // }
          // onChange={(event) =>
          //   event.target.checked && filterTodo(todoListindex)
          // }
        />
        <div className="outline-0 border-[1px] p-2 m-2 rounded-2xl  w-[220px] text-2xl">
          <span className=" flex justify-center items-center overflow-hidden">
            {todo}
          </span>
        </div>
        <button
          onClick={() => deleteTodo(todoListindex, todoText, setTodoText)}
          className="border-[1px] h-12 rounded-2xl p-2 hover:bg-red-800 cursor-pointer transition duration-300 delay-75"
        >
          Remove
        </button>
      </li>
    </>
  );
};

export default TodoItem;
