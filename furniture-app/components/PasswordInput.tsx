import {Image, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/colors";


export default function PasswordInput({ password, setPassword } : { password: string; setPassword: (value: string) => void; }) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter Password"
                secureTextEntry={!showPassword}
                style={styles.input}
                textContentType="none"
                autoComplete="off"
                autoCorrect={false}
                keyboardType="default"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image
                    source={
                        showPassword
                            ? require("@/assets/images/eye_closed.png")
                            : require("@/assets/images/eye.png")
                    }
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: 303,
        height: 60,
        borderRadius: 14,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: Colors.formInput,
        paddingHorizontal: 15,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        color: Colors.placeholderGray,
        flex: 1,
        height: '100%',
    },
    icon: {
        width: 24,
        height: 26,
    },
})