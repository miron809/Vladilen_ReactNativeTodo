import React, { useContext, useReducer } from 'react';
import { Alert } from 'react-native';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';
import {
  ADD_TODO,
  CLEAR_ERROR,
  FETCH_TODOS,
  HIDE_LOADER,
  REMOVE_TODO,
  SHOW_ERROR,
  SHOW_LOADER,
  UPDATE_TODO
} from '../types';
import { ScreenContext } from '../screen/screenContext';

export const TodoState = ({children}) => {
  const initialState = {
    todos: [],
    loading: true,
    error: null,
  }
  const {changeScreen} = useContext(ScreenContext)
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = async title => {
    const response = await fetch('https://rn-todo-app-51546-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title})
    })
    const data = await response.json();
    dispatch({type: ADD_TODO, title, id: data.name})
  }

  const fetchTodos = async () => {
    showLoader();
    clearError();
    try {
      const response = await fetch('https://rn-todo-app-51546-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
      const data = await response.json()
      const todos = Object.keys(data).map(key => ({...data[key], id: key}))
      dispatch({type: FETCH_TODOS, todos});
    } catch (e) {
      showError('Something went wrong...')
      console.log(e)
    } finally {
      hideLoader();
    }
  }

  const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title})
  const removeTodo = id => {
    const todo = state.todos.find(t => t.id === id)

    Alert.alert(
      "Remove todo",
      `Todo "${todo.title}" will be removed`,
      [
        {
          text: "Cancel",
          style: "negative"
        },
        {
          text: "Remove",
          style: "positive",
          onPress: () => {
            changeScreen(null)
            dispatch({type: REMOVE_TODO, id})
          }
        }
      ]
    );
  }
  const showLoader = () => dispatch({type: SHOW_LOADER})
  const hideLoader = () => dispatch({type: HIDE_LOADER})
  const showError = error => dispatch({type: SHOW_ERROR, error})
  const clearError = () => dispatch({type: CLEAR_ERROR})

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        addTodo,
        removeTodo,
        updateTodo,
        fetchTodos,
      }}>
      {children}
    </TodoContext.Provider>
  )
}
