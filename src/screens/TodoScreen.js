import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { AppCard } from '../components/ui/AppCard';

export const TodoScreen = ({goBack, todo, removeTodo}) => {
  return (
    <View>
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="Edit" />
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Back" onPress={goBack}/>
        </View>
        <View style={styles.button}>
          <Button title="Remove" color="#ff0000" onPress={() => removeTodo(todo.id)}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%'
  },
  title: {
    fontSize: 20,
  },
  card: {
    marginBottom: 20,
    padding: 15,
  }
})
