export function submitTodo(
  ref,
  event,
  inputChangeHandle,
  setTodoText,
  todoText,
  inputBoxValue
) {
  event.preventDefault();

  inputChangeHandle(event);
  if (inputBoxValue === "") {
    ref.current.focus();
  } else if (inputBoxValue !== "") {
    setTodoText([...todoText, inputBoxValue]);
  }
  console.log(todoText);
}

export function deleteTodo(todoListindex, todoText, setTodoText) {
  console.log("todo delete value : ", todoListindex);
  const leftTodos = todoText.filter((todo, index) => index != todoListindex);
  setTodoText(leftTodos);
}

export function fetchFilterIndex(todoListindex) {
  // let value = todoListindex;
  // return todoListindex;
}

export function filterTodo(todoText, setTodoText, todoListindex) {
  // const itemToDelete = todoListindex;
  // console.log(todoListindex);
  // const filteredTodos = todoText.filter((todo, index) => index !== todoListindex);
  // setTodoText(filteredTodos);
}
