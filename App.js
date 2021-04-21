import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';


export default function App() {
  const [todoId, setTodoId] = useState('2');
  const [todos, setTodos] = useState([
    {id: '1', title: 'First'},
    {id: '2', title: 'Second'}
  ]);

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
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});
