import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from '../constants/theme';

export default function Button_5({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000000',
        width: 303,
        height: 60,
        borderRadius: 8,
        alignItems: 'center',
    },
    text: {
        color: '#010101',
        fontSize: 16,
        fontWeight: 'bold',
    },
})