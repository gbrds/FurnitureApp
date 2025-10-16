import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import { Product } from "@/data/products";
import Fonts from "@/constants/fonts";
import Colors from "@/constants/colors";

type Props = {
    product: Product;
    onPress: () => void;
}

export default function ProductCard({ product, onPress }: Props ) {
    return (
        <Pressable onPress={onPress} style={styles.card}>
                <Image source={product.image} style={styles.image} resizeMode="cover" />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.price}>{product.price.toFixed(2)}</Text>
                </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 253,
        width: 157,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 10,
    },
    image: {
        height: 200,
        width: 157,
        borderRadius: 10,
    },
    name: {
        fontSize: 14,
        fontWeight: "regular",
        fontFamily: Fonts.nunitosans,
        color: Colors.textLight,
    },
    price: {
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: Fonts.nunitosans,
        color: Colors.text,
    },
    textContainer: {
        gap: 5,
    },
})