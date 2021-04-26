import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Modal, Alert} from 'react-native';
import { THEME } from '../theme';
import { AppButton } from './ui/AppButton';

export const EditModal = ({visible, onCancel, value, onSave}) => {
  const [title, setTitle] = useState(value)

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert('Name length should be more than 3 symbols')
    } else {
      onSave(title)
    }
  }

  const cancelHandler = () => {
    setTitle(value)
    onCancel()
  }

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="New todo`s name"
          style={styles.input}/>
        <View style={styles.buttons}>
          <AppButton
            color={THEME.RED}
            onPress={cancelHandler}>
            Cancel
          </AppButton>
          <AppButton
            onPress={saveHandler}>
            Save
          </AppButton>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.PRIMARY_COLOR,
    borderBottomWidth: 2,
    width: '80%',
    marginBottom: 10,
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})
