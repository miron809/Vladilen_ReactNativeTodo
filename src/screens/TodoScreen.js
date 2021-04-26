import React, { useState } from 'react';
import {StyleSheet, View, Button} from 'react-native';
import { AppCard } from '../components/ui/AppCard';
import { EditModal } from '../components/editModal';
import { THEME } from '../theme';
import { AppTextBold } from '../components/ui/AppTextBold';
import { AppButton } from '../components/ui/AppButton';

export const TodoScreen = ({goBack, todo, removeTodo, onSave}) => {
  const [modal, setModal] = useState(false)

  const saveHandler = title => {
    onSave(todo.id, title)
    setModal(false)
  }

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />

      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <Button title="Edit" onPress={() => setModal(true)} />
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton onPress={goBack}>Back</AppButton>
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
