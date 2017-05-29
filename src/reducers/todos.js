const defaultState = {
  baseTodos: [],
  activeTodos: []
}

export default function todos(state=defaultState, action) {
  switch (action.type) {
    case 'ADD_BASE_TODO_LIST': {
      return {
        ...state,
        baseTodos: state.baseTodos.concat(action.todo)
      }
    }
    case 'ADD_ACTIVE_TODO_LIST': {
      return {
        ...state,
        activeTodos: state.activeTodos.concat(action.todo)
      }
    }
    default: {
      return state;
    }
  }
}
