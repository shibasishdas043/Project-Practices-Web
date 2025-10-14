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
  inputCheckBox,
  setInputCheckBox,
}) => {
  return (
    <>
      <li
        // key={todoListindex}
        className="flex flex-row justify-center items-center"
      >
        <input
          type="checkbox"
          // onChange={(event) => event.target.checked && fetchFilterIndex(todoListindex)}
          // onChange={(event) =>
          //   event.target.checked && fetchFilterIndex(todoListindex)
          // }
          // onChange={(event) =>
          //   event.target.checked && filterTodo(todoListindex)
          // }
          onChange={(...prev) => !setInputCheckBox(...prev)}
        />
        <div className="outline-0 border-[1px] border-yellow-600 hover:border-yellow-400 p-2 m-2 rounded-2xl  w-[220px] text-2xl transition duration-500 delay-75 backdrop-blur-2xl bg-black/30">
          <span className=" flex justify-start items-center overflow-hidden">
            {todo}
          </span>
        </div>
        <button
          onClick={() => deleteTodo(todoListindex, todoText, setTodoText)}
          className="border-0 h-12 rounded-2xl p-2 bg-red-800 hover:bg-red-700 cursor-pointer transition duration-500 delay-75"
        >
          Remove
        </button>
      </li>
    </>
  );
};

export default TodoItem;
