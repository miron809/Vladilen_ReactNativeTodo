import React from 'react';
import { FlatList, StyleSheet, View, Text, Image } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({addTodo, removeTodo, todos, openTodo}) => {
  let content = (
    <FlatList
      keyExtractor={item => item.id}
      data={todos}
      renderItem={({item}) => {
        return <Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>
      }}
    />
  )

  if (todos.length === 0) {
    content = <View style={styles.imgWrap}>
      <Image source={require('../../assets/no-file.png')} />
    </View>
  }

  return <View>
    <AddTodo onSubmit={addTodo}/>
    {content}
  </View>
}

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  }
})
