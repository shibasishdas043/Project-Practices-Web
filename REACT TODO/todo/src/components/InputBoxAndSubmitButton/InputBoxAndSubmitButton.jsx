import React from 'react'

const InputBoxAndSubmitButton = ({
  inputBoxValue,
  inputChangeHandle,
  submitTodo,
  setTodoText,
  todoText,
}) => {
  return (
    <>
      <form className="flex">
        <input
          type="text"
          placeholder={"Enter A Todo"}
          value={inputBoxValue}
          onChange={(event) => inputChangeHandle(event)}
          className="text-center border-[2px] rounded-2xl outline-0 m-3 p-2 border-green-600 hover:border-green-400 focus:bg-white focus:outline-1 focus:outline-green-500 focus:text-black transition duration-500 delay-75 backdrop-blur-2xl bg-black/30"
        />

        <button
          className="m-3 p-3  border-0 rounded-2xl cursor-pointer bg-green-700 hover:bg-green-600 transition duration-500 delay-75"
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
    </>
  );
};

export default InputBoxAndSubmitButton