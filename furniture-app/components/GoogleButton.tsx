import React from "react";
import {TouchableOpacity, StyleSheet, Image} from "react-native";
import Colors from "../constants/colors";

export default function GoogleButton({ onPress }: { onPress: () => void }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image source={require("../assets/images/GoogleVector.png")} style={{ width: 28, height: 28 }} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.googleDark,
        height: 60,
        width: 142,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
});