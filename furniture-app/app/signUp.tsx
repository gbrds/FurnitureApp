import React, {use, useState} from "react";
import {View, Text, StyleSheet, Image, TextInput} from "react-native";
import { useRouter, Link } from "expo-router";
import { useFonts } from "expo-font";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";

export default function signUp() {
    const router = useRouter();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [fontsLoaded] = useFonts({
        Montserrat: require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    })

    const handleSubmit = () => {
        console.log("Name: ", name)
        console.log("Email: ", email)
        console.log("Password: ", password)
        // Val / API call here...
    }

    return (
        <View>
            <Link href="/">
                <View>
                    <Image />
                    <Text>Back</Text>
                </View>
            </Link>

            <View>
                <Text>Name</Text>
                <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Example Name"
                autoCapitalize="none"
                style={{margin: 0}} // input style here?
                />

                <Text>Email</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="example@example.com"
                    autoCapitalize="none"
                    style={{margin: 0}} // input style here?
                />

                <Text>Password</Text>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter Password"
                    secureTextEntry
                    style={{margin: 0}} // input style here?
                />
            </View>

        </View>
    )
}