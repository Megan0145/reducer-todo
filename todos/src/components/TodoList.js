import React from "react";

export default function TodoList(props) {
  const { state, dispatch } = props;

  const toggleTodo = (id) => {
      dispatch({
          type: 'ON_TOGGLE_COMPLETE',
          payload: {id}
      });
  }

  return (
    <div>
      {state.todos.map(todo => {
        return <p className={todo.completed ? 'complete' : 'incomplete'} onClick={() => toggleTodo(todo.id)}>{todo.name}</p>;
      })}
    </div>
  );
}
