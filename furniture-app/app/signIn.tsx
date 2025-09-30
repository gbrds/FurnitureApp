import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useRouter, Link } from "expo-router";
import { useFonts } from "expo-font";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";

export default function signIn() {
    const router = useRouter();
    const [fontsLoaded] = useFonts({
        Montserrat: require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    })

    return (
        <View>

        </View>
    )
}