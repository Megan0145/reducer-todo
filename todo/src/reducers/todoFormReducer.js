import React from 'react';

export const initialInputVal = '';
export const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';

  export function todoFormReducer(state, action) {
    switch(action.type) {
      case ON_INPUT_CHANGE:
          return {
            ...state,
            [action.payload.name]: action.payload.value,
          };
      default: 
      return state;
    }
  }
  