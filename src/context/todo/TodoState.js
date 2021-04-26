import React, { useContext, useReducer } from 'react';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import { ScreenContext } from '../screen/screenContext';

export const TodoState = ({children}) => {
  const initialState = {
    todos: [{id: '1', title: 'First'}]
  }
  const {changeScreen} = useContext(ScreenContext)
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = title => dispatch({type: ADD_TODO, title})
  const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title})
  const removeTodo = id => {
    changeScreen(null)
    dispatch({type: REMOVE_TODO, id})
  }

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
