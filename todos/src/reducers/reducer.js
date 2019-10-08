export const ON_INPUT_CHANGE = "ON_INPUT_CHANGE";
export const ON_ADD_TODO = "ON_ADD_TODO";

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
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
}
