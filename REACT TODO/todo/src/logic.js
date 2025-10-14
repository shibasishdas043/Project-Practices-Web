
export function submitTodo(
  event,
  inputChangeHandle,
  setTodoText,
  todoText,
  inputBoxValue
) {
  event.preventDefault();
  inputChangeHandle(event);
  setTodoText([...todoText, inputBoxValue]);
  console.log(todoText);
}

export function deleteTodo(todoListindex, todoText, setTodoText) {
  console.log("todo delete value : ", todoListindex);
  const leftTodos = todoText.filter((todo, index) => index != todoListindex);
  setTodoText(leftTodos);
}

export function filterTodo() {
    
}