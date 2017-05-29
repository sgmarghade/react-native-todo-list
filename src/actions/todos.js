export function addBaseTodoList(todoList) {
  return {
    type: 'ADD_BASE_TODO_LIST',
    todo: todoList
  }
}

export function addActiveTodoList(todoList) {
  return {
    type: 'ADD_ACTIVE_TODO_LIST',
    todo: todoList
  }
}
