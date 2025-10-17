import {useState} from "react";
import {Product, products} from "@/data/products";
import ProductCardFavorite from "@/components/ProductCardFavorite";
import {FlatList, View, StyleSheet} from "react-native";
import Divider from "@/components/Divider";
import Colors from "@/constants/colors";

export default function favourites() {
    const [favorites, setFavorite] = useState<Product[]>(products)

    const removeFromFavorites = (id: number) => {
        setFavorite((prev) => prev.filter((p) => p.id !== id))
    }

    const renderItem = ({ item }: { item: Product }) => (
        <ProductCardFavorite product={item} onDelete={removeFromFavorites} />
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={favorites}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <Divider />}
                contentContainerStyle={{ paddingVertical: 16 }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingHorizontal: 16,
    }
})