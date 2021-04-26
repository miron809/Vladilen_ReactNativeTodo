import React, {useContext} from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { THEME } from './theme';
import { Navbar } from './components/Navbar';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { ScreenContext } from './context/screen/screenContext';

export const MainLayout = () => {
  const {todoId} = useContext(ScreenContext)


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

  return (
    <View>
      <Navbar title='Todo App'/>
      <View style={styles.container}>
        {todoId ? <TodoScreen /> : <MainScreen />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  }
});
