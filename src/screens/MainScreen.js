import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, View, Dimensions, Image } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';
import { THEME } from '../theme';

export const MainScreen = ({addTodo, removeTodo, todos, openTodo}) => {
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
  );

  useEffect(() => {
    const update = () => {
      const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;
      setDeviceWidth(width)
    }

    Dimensions.addEventListener('change', update)
    return () => {
      Dimensions.removeEventListener('change', update)
    }
  })

  let content = (
    <View style={{width: deviceWidth}}>
      <FlatList
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({item}) => {
          return <Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>
        }}
      />
    </View>
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
