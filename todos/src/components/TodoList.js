import React from "react";

export default function TodoList(props) {
  const { state, dispatch } = props;
  return (
    <div>
      {state.todos.map(todo => {
        return <p>{todo.name}</p>;
      })}
    </div>
  );
}
