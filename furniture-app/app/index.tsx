import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useRouter, Link } from "expo-router";
import { useFonts } from "expo-font";
import PrimaryButton from "@/components/PrimaryButton";
import Colors from "@/constants/colors";
import Fonts from "@/constants/fonts";

export default function SplashScreen() {
    const router = useRouter();
    const [fontsLoaded] = useFonts({
        Montserrat: require("@/assets/fonts/Montserrat-VariableFont_wght.ttf"),
        DMSans: require("@/assets/fonts/DMSans-VariableFont_opsz,wght.ttf"),
        NunitoSans: require("@/assets/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf")
    })
    if (!fontsLoaded) return null;

    // @ts-ignore
    return (
        <View style={styles.container}>
            <Image source={require("@/assets/images/SplashImage.png")} style={{ width: 357, height: 209, marginBottom: 53 }} />
            <View style={{ maxWidth: 228, marginBottom: 55 }}>
                <Text style={styles.text}>
                    You’ll Find{"\n"}
                    <Text style={{ color: Colors.orange, textDecorationLine: "underline", textDecorationThickness: 2 }}>All you need</Text>{"\n"}
                    Here!
                </Text>
            </View>
            <PrimaryButton
                title="Sign Up"
                onPress={() => router.push("/signUp")}
            />
            <Link href="/signIn" style={styles.link}>
                Sign In
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background,
    },
    link: {
        fontFamily: Fonts.montserrat,
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.primary,
        marginTop: 30,
    },
    text: {
        fontFamily: Fonts.dmsans,
        fontSize: 40,
        fontWeight: "bold",
        color: Colors.text,
        lineHeight: 50,
        textAlign: "center",
    },
});