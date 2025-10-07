import "./index.css";
import React, { useState } from "react";

const App = () => {
  const [todoText, setTodoText] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function inputChangeHandle(event) {
    setInputValue(event.target.value);
    console.log(inputValue);
  }
  function submitTodo(event) {
    event.preventDefault();
    inputChangeHandle(event);
    setTodoText([...todoText, inputValue]);
    console.log(todoText);
    // if (todoText.includes(value) === "") {

    // }
  }




  return (
    <div className="bg-blue-950 text-white h-screen w-screen flex flex-col justify-center items-center suse-mono">
      <h1 className="text-6xl p-1 m-8">Todo List</h1>
      <form className="flex">
        <input
          type="text"
          placeholder={"Enter A Todo"}
          value={inputValue}
          onChange={(event) => inputChangeHandle(event)}
          className="text-center border-[1px] rounded-2xl outline-0 m-3 p-2 "
        />
        <button
          className="m-3 p-3  border-[1px] rounded-2xl cursor-pointer hover:bg-green-800 transition duration-300 delay-75"
          onClick={(event) => submitTodo(event)}
        >
          Add Todo
        </button>
      </form>

      {todoText.length === 0 ? (
        <></>
      ) : (
        <div className="bg-white border-[1px] w-[350px] m-1"> </div>
      )}

      {todoText.length === 0 ? null : (
        <div className="border-[1px] p-2 m-2 rounded-2xl ">
          <ul className="flex flex-col">
            {todoText.map((todo, index) =>
              todo.length === 0 ? null : (
                <li
                  key={index}
                  className="flex flex-row justify-center items-center"
                >
                  <input
                    key={index}
                    type="checkbox"
                    className="rounded-2xl border-0 outline-0"
                  />
                  <div className="outline-0 border-[1px] p-2 m-2 rounded-2xl  w-[220px] text-2xl">
                    <span className=" flex justify-center items-center overflow-hidden">
                      {todo}
                    </span>
                  </div>
                  <button
                    className="border-[1px] h-12 rounded-2xl p-2 hover:bg-red-800 cursor-pointer transition duration-300 delay-75"
                    
                  >
                    Remove
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
