import React, { useReducer } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { reducer } from "./reducers/reducer";
import "./App.css";
import styled from 'styled-components';

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const initialState = {
  todos: [{id: 0,name:"sleep", complete: false}],
  formVal: { value: "" }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StyledApp>
      <TodoForm state={state} dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </StyledApp>
  );
}

export default App;
