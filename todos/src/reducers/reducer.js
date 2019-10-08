export const ON_INPUT_CHANGE = "ON_INPUT_CHANGE";
export const ON_ADD_TODO = "ON_ADD_TODO";
export const ON_TOGGLE_COMPLETE = "ON_TOGGLE_COMPLETE";
export const ON_CLEAR_COMPLETE = 'ON_CLEAR_COMPLETE';

export function reducer(state, action) {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        formVal: action.payload.value
      };
    case ON_ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case ON_TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        })
      };
    case ON_CLEAR_COMPLETE: 
      return {
          ...state,
          todos: state.todos.filter(todo => !todo.complete)
      }
    default:
      return state;
  }
}
