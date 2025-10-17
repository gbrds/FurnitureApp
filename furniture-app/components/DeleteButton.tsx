import {Pressable, Image, StyleSheet, ImageSourcePropType} from "react-native";

type Props = {
    onPress: () => void;
    icon?: ImageSourcePropType;
    size?: number;
}

export default function DeleteButton({ onPress, icon, size = 24 }: Props) {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image
                source={icon ?? require("@/assets/images/CloseX.png")}
                style={[styles.icon, { width: size, height: size }]}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 0,
    },
    icon: {
        resizeMode: "contain",
    },
})