import React from "react";

export default function TodoList(props) {
  const { state, dispatch } = props;

  const toggleTodo = (id) => {
      dispatch({
          type: 'ON_TOGGLE_COMPLETE',
          payload: {id}
      });
  }

  const clearCompletedTodos = () => {
     dispatch({
         type: 'ON_CLEAR_COMPLETE'
     });
  }

  return (
    <div>
      <button onClick={clearCompletedTodos}>Clear Completed Todos</button>
      {state.todos.map(todo => {
        return <p className={todo.complete ? 'complete' : 'incomplete'} onClick={() => toggleTodo(todo.id)}>{todo.name}</p>;
      })}
    </div>
  );
}
