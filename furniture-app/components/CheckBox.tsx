import React, { useState } from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import {Ionicons} from "@expo/vector-icons";

type CheckBoxProps = {
    checked: boolean;
    onChange: (newValue: boolean) => void;
}

export default function CheckBox({ checked, onChange }: CheckBoxProps) {
    return (
        <TouchableOpacity onPress={() => onChange(!checked)}>
            <View style={[styles.box, checked && styles.boxChecked]}>
                { checked &&  <Ionicons name="checkmark" size={18} color="#FFF"/>}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: "#8D9BB5",
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    boxChecked: {
        backgroundColor: "#8D9BB5",
    },
})