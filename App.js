import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading/src/AppLoading';
import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';
import { THEME } from './src/theme';

async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todoId, setTodoId] = useState('2');
  const [todos, setTodos] = useState([
    {id: '1', title: 'First'},
    {id: '2', title: 'Second'}
  ]);

  if (!isReady) {
    return <AppLoading
      startAsync={loadApplication}
      onError={error => console.log(error)}
      onFinish={() => setIsReady(true)}
    />
  }

  const addTodo = (title) => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      }]
    )
  }

  const removeTodo = id => {
    const todo = todos.find(t => t.id === id)
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
            setTodoId(null)
            setTodos(prev => prev.filter(todo => todo.id !== id))
          }
        }
      ]
    );
  }

  const updateTodo = (id, title) => {
    setTodos(old => old.map(todo=> {
      if(todo.id === id) {
        todo.title = title;
      }
      return todo;
    }))
  }

  let content = (
    <MainScreen
      addTodo={addTodo}
      todos={todos}
      removeTodo={removeTodo}
      openTodo={setTodoId} />
  )

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId);
    content = <TodoScreen
      onSave={updateTodo}
      removeTodo={removeTodo}
      goBack={() => setTodoId(null)}
      todo={selectedTodo}
    />
  }

  return (
    <View>
      <Navbar title='Todo App'/>
      <View style={styles.container}>
        {content}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  }
});
