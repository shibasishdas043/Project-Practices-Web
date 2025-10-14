import React, { useRef } from "react";

const InputBoxAndSubmitButton = ({
  inputBoxValue,
  inputChangeHandle,
  submitTodo,
  setTodoText,
  todoText,
}) => {
  const ref = useRef(0);

  return (
    <>
      <form className="flex justify-evenly">
        <input
          ref={ref}
          type="text"
          placeholder={"Enter A Todo"}
          value={inputBoxValue}
          onChange={(event) => inputChangeHandle(event)}
          className="text-center border-0 rounded-2xl outline-0 m-3 p-2 focus:bg-white focus:text-black transition duration-500 delay-75 backdrop-blur-3xl bg-black/30 hover:bg-black/55"
        />

        <button
          type="submit"
          className="m-3 p-3  border-0 rounded-2xl cursor-pointer text-green-300 hover:bg-green-600 transition duration-500 delay-75 backdrop-blur-3xl hover:text-white bg-black/30"
          onClick={(event) =>
            submitTodo(
              ref,
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

export default InputBoxAndSubmitButton;
