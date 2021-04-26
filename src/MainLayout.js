import React, {useState, useContext} from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { THEME } from './theme';
import { Navbar } from './components/Navbar';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { TodoContext } from './context/todo/todoContext';

export const MainLayout = () => {
  const {todos, addTodo, removeTodo, updateTodo} = useContext(TodoContext)
  const [todoId, setTodoId] = useState();
  // const [todos, setTodos] = useState([
  //   {id: '1', title: 'First'},
  //   {id: '2', title: 'Second'}
  // ]);

  // const addTodo = (title) => {
  //   setTodos(prev => [
  //     ...prev,
  //     {
  //       id: Date.now().toString(),
  //       title,
  //     }]
  //   )
  // }

  // const removeTodo = id => {
  //   const todo = todos.find(t => t.id === id)
  //   Alert.alert(
  //     "Remove todo",
  //     `Todo "${todo.title}" will be removed`,
  //     [
  //       {
  //         text: "Cancel",
  //         style: "negative"
  //       },
  //       {
  //         text: "Remove",
  //         style: "positive",
  //         onPress: () => {
  //           setTodoId(null)
  //           setTodos(prev => prev.filter(todo => todo.id !== id))
  //         }
  //       }
  //     ]
  //   );
  // }

  // const updateTodo = (id, title) => {
  //   setTodos(old => old.map(todo=> {
  //     if(todo.id === id) {
  //       todo.title = title;
  //     }
  //     return todo;
  //   }))
  // }

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
      <View style={styles.container}>{content}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  }
});
