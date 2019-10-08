import React, { useReducer } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { reducer } from "./reducers/reducer";
import "./App.css";

const initialState = {
  todos: [
    { id: 0, name: "Learn reducers", complete: false },
    { id: 1, name: "Complete Project", complete: false },
    { id: 2, name: "Review Tk for tomorrow", complete: false }
  ],
  formVal: { value: "" }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <TodoList state={state} dispatch={dispatch} />
      <TodoForm state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
