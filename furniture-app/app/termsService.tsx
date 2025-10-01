import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useRouter, Link } from "expo-router";

export default function SplashScreen() {
    const router = useRouter();

    return (
        <View>
            <Link href="/signUp" style={{ color: "#303030", fontWeight: "bold", fontSize: 32, }}>◄ Go Back</Link>
            <Text style={{ color: "#FF0000", fontWeight: "bold", fontSize: 32, textAlign: "center" }}>All your data is Sold To China</Text>
        </View>
    );
}