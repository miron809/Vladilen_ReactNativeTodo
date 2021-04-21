import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import { THEME } from '../theme';

export const Navbar = props => {
    const {title} = props;
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.PRIMARY_COLOR,
        paddingBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
})
