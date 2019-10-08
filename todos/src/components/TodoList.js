import React from "react";
import styled from "styled-components";

const StyledTodoList = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  color: grey;
  #nothingToDo {
    margin-top: 20vh;
  }
  #clearCompletedBtn {
    margin: 1rem 0 0.4rem 0;
    height: 3rem;
    width: 58vw;
    border-radius: 10px;
    border: none;
    background-color: #d3767a;
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
  }
  #todoItem {
    background-color: #e6e6e6;
    width: 57vw;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    font-size: 1.8rem;
    margin: 0.6rem 0;
    padding-left: 1rem;
    img {
      height: 30px;
      cursor: pointer;
      margin-right: 1rem;
    }
  }
`;

export default function TodoList(props) {
  const { state, dispatch } = props;

  const toggleTodo = id => {
    dispatch({
      type: "ON_TOGGLE_COMPLETE",
      payload: { id }
    });
  };

  const clearCompletedTodos = () => {
    dispatch({
      type: "ON_CLEAR_COMPLETE"
    });
  };

  return (
    <StyledTodoList>
      {state.todos.length ? (
        <button onClick={clearCompletedTodos} id="clearCompletedBtn">
          Clear Completed Todos
        </button>
      ) : null}
      {state.todos.length ? (
        state.todos.map(todo => {
          return (
            <div
              id="todoItem"
              className={todo.complete ? "complete" : "incomplete"}
            >
              {todo.name}
              <span onClick={() => toggleTodo(todo.id)}>
                <img
                  src={
                    todo.complete ? "tick-complete.png" : "tick-incomplete.png"
                  }
                />
              </span>
            </div>
          );
        })
      ) : (
        <h1 id="nothingToDo">Nothing to do</h1>
      )}
    </StyledTodoList>
  );
}
