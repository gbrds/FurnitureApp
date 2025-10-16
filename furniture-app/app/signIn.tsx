import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";
import { useRouter, Link } from "expo-router";
import { useFonts } from "expo-font";
import PrimaryButton from "@/components/PrimaryButton";
import GoogleButton from "@/components/GoogleButton";
import Colors from "@/constants/colors";
import Fonts from "@/constants/fonts";
import PasswordInput from "@/components/PasswordInput";
import BackButton from "@/components/BackButton";

export default function signUp() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        console.log("Name: ", name)
        console.log("Email: ", email)
        console.log("Password: ", password)
        // Val / API call here...
    }

    return (
        <View style={styles.container}>
            <View style={{ width: 303, marginBottom: 25 }}>
                <BackButton title="Sign In" />
            </View>

            <View>
                <Text style={styles.inputTitle}>E-mail</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="example@example.com"
                    autoCapitalize="none"
                    style={styles.input}
                />
                <Text style={styles.inputTitle}>Password</Text>
                <PasswordInput password={password} setPassword={setPassword} />
            </View>

            <View style={{ marginTop: 43, marginBottom: 50, justifyContent: "center", alignItems: "center" }}>
                <PrimaryButton title="Sign In" onPress={() => {
                    router.push("/home")
                    handleSubmit()
                }} />

                <View style={{ flexDirection: "row", width: 303, alignItems: "center", marginBottom: 20, marginTop: 38, justifyContent: "space-between" }}>
                    <View style={{ width: 90, borderStyle: "solid", borderBottomWidth: 1, borderColor: Colors.dividerGray }}></View>
                    <Text style={styles.signUpText}>Or sign up with</Text>
                    <View style={{ width: 90, borderStyle: "solid", borderBottomWidth: 1, borderColor: Colors.dividerGray }}></View>
                </View>

                <GoogleButton onPress={() => router.push(("/"))} />
            </View>

            <View style={{ marginBottom: 70 }}>
                <Text style={styles.signUpText}>Don’t have an account? {}
                    <Link href="/signUp" style={styles.signUpLink}>Sign Up</Link>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background,
    },
    input: {
        width: 303,
        height: 60,
        borderRadius: 14,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: Colors.formInput,
        paddingHorizontal: 15,
        color: Colors.placeholderGray,
        marginBottom: 12,
    },
    inputTitle: {
        fontFamily: Fonts.montserrat,
        fontWeight: "400",
        fontSize: 14,
        marginTop: 10,
        marginBottom: 9,
        color: Colors.primary,
    },
    signUpLink: {
        fontFamily: Fonts.montserrat,
        fontWeight: "bold",
        fontSize: 14,
    },
    signUpText: {
        fontFamily: Fonts.montserrat,
        fontWeight: "500",
        fontSize: 14,
        color: Colors.primary,
    },
})