import { View, StyleSheet } from "react-native";
import Colors from "@/constants/colors";

export default function Divider() {
    return <View style={styles.divider} />
}

const styles = StyleSheet.create({
    divider: {
        height: 1,
        backgroundColor: Colors.dividerGray,
        marginHorizontal: 16,
    }
})