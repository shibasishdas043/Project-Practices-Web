import "./index.css";
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import FilterTodos from "./FilterTodos";
import { deleteTodo, submitTodo, filterTodo } from "./logic";

const App = () => {
  const [todoText, setTodoText] = useState([]);
  const [todoTextLength] = useState(todoText.length);
  const [inputBoxValue, setInputBoxValue] = useState("");
  const [inputCheckBox, setInputCheckBox] = useState([]);

  function inputChangeHandle(event) {
    setInputBoxValue(event.target.value);
    console.log(inputBoxValue);
  }

  useEffect(() => {
    console.log("todo length : ", todoTextLength);
  }, [todoTextLength]);

  return (
    <div className="bg-blue-950 text-white h-screen w-screen flex flex-col justify-center items-center suse-mono">
      <h1 className="text-6xl p-1 m-8">Todo List</h1>

      <form className="flex">
        <input
          type="text"
          placeholder={"Enter A Todo"}
          value={inputBoxValue}
          onChange={(event) => inputChangeHandle(event)}
          className="text-center border-[1px] rounded-2xl outline-0 m-3 p-2 "
        />

        <button
          className="m-3 p-3  border-[1px] rounded-2xl cursor-pointer hover:bg-green-800 transition duration-300 delay-75"
          onClick={(event) =>
            submitTodo(
              event,
              inputChangeHandle,
              setTodoText,
              todoText,
              inputBoxValue
            )
          }
        >
          Add Todo
        </button>
      </form>

      {/* FilterTodos */}
      {todoText.length === 0 ? null : <FilterTodos filterTodo={filterTodo} />}
      {/* FilterTodos */}

      {/*todo border line*/}
      {todoText.length === 0 ? null : (
        <div className="bg-white border-[1px] w-[350px] m-1"></div>
      )}
      {/*todo border line */}

      {todoText.length === 0 ? null : (
        <div className="border-[1px] p-2 m-2 rounded-2xl ">
          <ul className="flex flex-col">
            {todoText.map((todo, todoListindex) =>
              todo.length === 0 ? null : (
                <TodoItem
                  key={todoListindex}
                  todo={todo}
                  todoListindex={todoListindex}
                  deleteTodo={deleteTodo}
                  todoText={todoText}
                  setTodoText={setTodoText}
                  filterTodo={filterTodo}
                />
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
