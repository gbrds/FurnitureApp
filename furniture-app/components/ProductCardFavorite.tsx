import {Pressable, Text, Image, StyleSheet, View} from "react-native";
import Colors from "@/constants/colors";
import Fonts from "@/constants/fonts";
import {Product} from "@/data/products";
import DeleteButton from "@/components/DeleteButton";

type Props = {
    product: Product;
    onDelete: (id: number) => void;
}

export default function ProductCardFavorite({ product, onDelete }: Props) {
    return (
        <Pressable style={styles.container}>
            <Image style={styles.image} source={product.image}/>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>{product.price.toFixed(2)}</Text>
            </View>

            <DeleteButton onPress={() => onDelete(product.id)} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    textContainer: {
        gap: 5,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    name: {
      color: Colors.textLight,
      fontFamily: Fonts.nunitosans,
    },
    price: {
        color: Colors.text,
        fontFamily: Fonts.nunitosans,
    },
})