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
      <form className="flex justify-evenly">
        <input
          type="text"
          placeholder={"Enter A Todo"}
          value={inputBoxValue}
          onChange={(event) => inputChangeHandle(event)}
          className="text-center border-0 rounded-2xl outline-0 m-3 p-2 focus:bg-white focus:text-black transition duration-500 delay-75 backdrop-blur-3xl bg-black/30"
        />

        <button
          className="m-3 p-3  border-0 rounded-2xl cursor-pointer text-green-300 hover:bg-green-600 transition duration-500 delay-75 backdrop-blur-3xl hover:text-white bg-black/30"
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