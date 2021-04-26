import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import { AppTextBold } from './AppTextBold';
import { THEME } from '../../theme';

export const AppButton = ({children, onPress, color = THEME.PRIMARY_COLOR}) => {
  return(
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={{...styles.button, backgroundColor: color}}>
        <AppTextBold style={styles.text}>
          {children}
        </AppTextBold>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  }
})
