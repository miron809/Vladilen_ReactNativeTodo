import React, { useState } from 'react';
import { View, Alert, StyleSheet, TextInput, Keyboard } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { THEME } from '../theme';

export const AddTodo = ({onSubmit}) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
      Keyboard.dismiss()
    } else {
      Alert.alert('Field is required')
    }
  }

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Type todo`s name"
      />
      <View>
        <AntDesign.Button onPress={pressHandler} name="pluscircleo">Add</AntDesign.Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '60%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.PRIMARY_COLOR,
    padding: 10,
  },
  button: {
    width: '20%'
  }
})
