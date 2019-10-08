import React, { useReducer } from 'react';
import { initialTodoList, reducer } from '../reducers/reducer';

export default function TodoList(props){
    const [todos, dispatch] = useReducer(reducer, initialTodoList);

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