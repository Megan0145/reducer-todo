import React from "react";

export default function TodoForm(props) {
  const { state, dispatch } = props;

  const onInputChange = evt => {
    dispatch({
      type: "ON_INPUT_CHANGE",
      payload: { value: evt.target.value }
    });
  };

  const addTodo = evt => {
    evt.preventDefault();
    dispatch({
      type: "ON_ADD_TODO",
      payload: { id: Date.now(), name: state.formVal, complete: false }
    });
  };

  return (
    <div>
      <form>
        <input onChange={onInputChange} />
        <button onClick={addTodo}>Add Todo</button>
      </form>
    </div>
  );
}
