import React from 'react';

export const initialTodoList = [
    {id: 0, name: 'Learn about reducers', completed: false},
    {id: 1, name: 'Complete Afternoon Project', completed: true},
    {id:2, name: 'Review TK for tomorrow', completed: false}
  ]
  
  export function reducer(state, action) {
    switch(action.type) {
      default: 
      return initialTodoList;
    }
  }
  