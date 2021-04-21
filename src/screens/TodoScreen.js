import React, { useState } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { AppCard } from '../components/ui/AppCard';
import { EditModal } from '../components/editModal';
import { THEME } from '../theme';

export const TodoScreen = ({goBack, todo, removeTodo}) => {
  const [modal, setModal] = useState(false)

  return (
    <View>
      <EditModal visible={modal} onCancel={() => setModal(false)}/>

      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="Edit" onPress={() => setModal(true)} />
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Back" onPress={goBack}/>
        </View>
        <View style={styles.button}>
          <Button title="Remove" color={THEME.RED} onPress={() => removeTodo(todo.id)}/>
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
