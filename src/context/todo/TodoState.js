import React, { useReducer } from 'react';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import { Alert } from 'react-native-web';

export const TodoState = ({children}) => {
  const initialState = {
    todos: [{id: '1', title: 'First'}]
  }
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = title => dispatch({type: ADD_TODO, title})
  const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title})
  const removeTodo = id => dispatch({type: REMOVE_TODO, id})

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo
      }}>
      {children}
    </TodoContext.Provider>
  )
}
