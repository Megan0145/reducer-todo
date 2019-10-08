import React from 'react';
import './App.css';

const initialTodoList = [
  {id: 0, item: 'Learn about reducers', completed: false},
  {id: 1, item: 'Complete Afternoon Project', completed: true},
  {id:2, item: 'Review TK for tomorrow', completed: false}
]

function reducer(state, action) {
  switch(action.type) {
    default: 
    return initialTodoList;
  }
}

function App() {
  return (
    <div className="App">
     <h1>Todo List</h1>
    </div>
  );
}

export default App;
