import React from "react";

const FilterTodos = ({ filterTodo, todoText, setTodoText }) => {
  return (
    <div
      className="flex justify-center items-center text-center border-0 h-12 w-87 rounded-2xl p-2 mb-2  
    bg-yellow-700 hover:bg-yellow-600 transition duration-500 delay-75 "
    >
      <button
        // onClick={() => filterTodo(todoText, setTodoText)}
        className="text-yellow-200 hover:text-white h-full w-full cursor-pointer transition duration-500 delay-75"
      >
        Filter Todos
      </button>
    </div>
  );
};

export default FilterTodos;
