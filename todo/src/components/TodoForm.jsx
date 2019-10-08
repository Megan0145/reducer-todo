import React, { useReducer } from 'react';
import { initialInputVal, todoFormReducer, ON_INPUT_CHANGE } from '../reducers/todoFormReducer';


const ON_SUBMIT = 'ON_SUBMIT';


export default function TodoForm(props) {
    const [inputVal, dispatch] = useReducer(todoFormReducer, initialInputVal);

    const onInputChange = evt => {
        dispatch({ type: ON_INPUT_CHANGE, payload: { name: evt.target.name, value: evt.target.value }});
    }
    const onSubmit = evt => {
        evt.preventDefault();
        alert(`submitting ${inputVal.todo}`);
    }

    return(
        <div>
            <h1>Todo Form</h1> 
            <form>
                <input type="text" value={inputVal.value} onChange={onInputChange} name='todo' />
                <button onClick={onSubmit}>Add Todo</button>
            </form>
        </div>
    );
}