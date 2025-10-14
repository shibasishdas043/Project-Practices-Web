import "./index.css";
import React, { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import FilterTodos from "./components/FilterButton/FilterTodos";
import {
  deleteTodo,
  submitTodo,
  filterTodo,
  fetchFilterIndex,
} from "../public/logic";
import InputBoxAndSubmitButton from "./components/InputBoxAndSubmitButton/InputBoxAndSubmitButton";

const App = () => {
  const [todoText, setTodoText] = useState([]);
  const [inputBoxValue, setInputBoxValue] = useState("");
  const [todoTextLength] = useState(todoText.length);

  const [inputCheckBox, setInputCheckBox] = useState(false);

  function inputChangeHandle(event) {
    setInputBoxValue(event.target.value);
    console.log(inputBoxValue);
  }

  useEffect(() => {
    console.log("todo length : ", todoTextLength);
  }, [todoTextLength]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center mx-auto backdrop-blur-sm bg-black/5 ">
      <div
        className="text-white min-h-3/12 max-h-3/4 w-2xl flex flex-col justify-top items-center suse-mono 
        mx-auto  bg-black/20 rounded-3xl scrollbar-hide overflow-auto custom-shadow"
      >
        <h1 className="text-6xl p-1 m-8">Todo List</h1>

        <InputBoxAndSubmitButton
          inputBoxValue={inputBoxValue}
          inputChangeHandle={inputChangeHandle}
          submitTodo={submitTodo}
          setTodoText={setTodoText}
          todoText={todoText}
        />

        {/* FilterTodos */}
        {todoText.length === 0 ? null : (
          <FilterTodos
            filterTodo={filterTodo} //function
            todoText={todoText} //prop
            setTodoText={setTodoText} //prop
          />
        )}
        {/* FilterTodos */}

        {/*todo border line*/}
        {todoText.length === 0 ? null : (
          <div className="bg-white border-[1px] w-[350px] m-1"></div>
        )}
        {/*todo border line */}

        {todoText.length === 0 ? null : (
          <div className="border-0 p-2 m-2 rounded-2xl ">
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
                    fetchFilterIndex={fetchFilterIndex}
                    inputBoxValue={inputCheckBox}
                    setInputCheckBox={setInputCheckBox}
                  />
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
