import React from 'react';
import { View, StyleSheet, Platform } from "react-native";
import { THEME } from '../theme';
import { AppTextBold } from './ui/AppTextBold';

export const Navbar = props => {
  const {title} = props;
  return (
    <View style={{
      ...styles.navbar,
      ...Platform.select({ios: styles.navbarIos, android: styles.navbarAndroid})}}>
      <AppTextBold style={styles.text}>{title}</AppTextBold>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  navbarAndroid: {
    backgroundColor: THEME.PRIMARY_COLOR,
  },
  navbarIos: {
    borderBottomColor: THEME.PRIMARY_COLOR,
    borderBottomWidth: 1
  },
  text: {
    color: Platform.OS === 'ios' ? THEME.PRIMARY_COLOR : 'white',
    fontSize: 20,
  }
})
