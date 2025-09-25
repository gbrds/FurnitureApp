import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import Colors from '../../constants/theme';

export default function SplashScreen({ navigation }) {
    return (
        <View>
            <Text style={styles.title}>Welcome</Text>
            <PrimaryButton title="Log In" onPress={() => navigation.navigate("Login")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#f1f1f1',
        marginBottom: 24,
    }
})