import React from 'react';
import {View, StyleSheet, TextInput, Button, Modal} from 'react-native';
import { THEME } from '../theme';

export const EditModal = ({visible, onCancel}) => {
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.wrap}>
        <TextInput placeholder="New todo`s name" style={styles.input}/>
        <View style={styles.buttons}>
          <Button title="Cancel" onPress={onCancel} />
          <Button title="Save" color={THEME.RED} />
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
