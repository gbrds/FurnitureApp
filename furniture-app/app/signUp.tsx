import React, {use, useState} from "react";
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";
import { useRouter, Link } from "expo-router";
import { useFonts } from "expo-font";
import PrimaryButton from "@/components/PrimaryButton";
import GoogleButton from "@/components/GoogleButton";
import CheckBox from "@/components/CheckBox";
import Colors from "@/constants/colors";
import PasswordInput from "@/components/PasswordInput";

export default function signUp() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false)
    const [password, setPassword] = useState("")

    const [fontsLoaded] = useFonts({
        Montserrat: require("@/assets/fonts/Montserrat-VariableFont_wght.ttf"),
    })

    const handleSubmit = () => {
        console.log("Name: ", name)
        console.log("Email: ", email)
        console.log("Password: ", password)
        // Val / API call here...
    }

    return (
        <View style={styles.container}>
            <Link href="/"> {/* Link is buggy -> to big click area */}
                <View style={{ flexDirection: "row", width: 303, gap: 16, justifyContent: "flex-start", alignItems: "center", marginBottom: 62 }}>
                    <Image source={require("@/assets/images/backArrow.png")} style={{ width: 19, height: 18 }} />
                    <Text style={{ fontFamily: "Montserrat", fontSize: 26, fontWeight: "500", color: Colors.primary }}>Sign Up</Text>
                </View>
            </Link>

            <View>
                <Text style={styles.inputTitle}>Name</Text>
                <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Example Name"
                autoCapitalize="none"
                style={styles.input}
                />

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

            <View style={{ marginTop: 8, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: 303, gap: 13 }}>
                <CheckBox checked={agree} onChange={setAgree} />
                <Text style={styles.signUpText}>I agree with {}
                    <Link href="/termsService" style={styles.signUpLink}>Terms & Privacy</Link>
                </Text>
            </View>

            <View style={{ marginTop: 20, marginBottom: 50, justifyContent: "center", alignItems: "center" }}>
                <PrimaryButton title="Sign Up" onPress={() => {
                    router.push("/")
                    handleSubmit()
                }} />

                <View style={{ flexDirection: "row", width: 303, alignItems: "center", marginBottom: 20, marginTop: 38, justifyContent: "space-between" }}>
                    <View style={{ width: 90, borderStyle: "solid", borderBottomWidth: 1, borderColor: Colors.dividerGray }}></View>
                    <Text style={styles.signUpText}>Or sign up with</Text>
                    <View style={{ width: 90, borderStyle: "solid", borderBottomWidth: 1, borderColor: Colors.dividerGray }}></View>
                </View>

                <GoogleButton onPress={() => router.push(("/"))} />
            </View>

            <View>
                <Text style={styles.signUpText}>Already have an account? {}
                    <Link href="/signIn" style={styles.signUpLink}>Sign In</Link>
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
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: 14,
        marginTop: 10,
        marginBottom: 9,
        color: Colors.primary,
    },
    signUpLink: {
        fontFamily: "Montserrat",
        fontWeight: "bold",
        fontSize: 14,
    },
    signUpText: {
        fontFamily: "Montserrat",
        fontWeight: "500",
        fontSize: 14,
        color: Colors.primary,
    },
})