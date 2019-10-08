import React, { useReducer } from 'react';
import { todoListReducer, initialTodoList } from '../reducers/todoListReducer';

export default function TodoList(props){
    const [todos, dispatch] = useReducer(todoListReducer, initialTodoList);

    return(
        <div>
            <h1>TodoList</h1>
           {
               todos.map(todo => {
                   return <p>{todo.name}</p>
               })
           }
        </div>
    );
}