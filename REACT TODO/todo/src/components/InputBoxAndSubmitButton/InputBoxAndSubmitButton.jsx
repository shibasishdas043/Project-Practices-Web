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
    </>
  );
};

export default InputBoxAndSubmitButton