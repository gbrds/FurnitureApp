import HomeTabs from '@/components/HomeTabs';
import {useRouter} from "expo-router";
import {Product, products} from "@/data/products";
import ProductCard from "@/components/ProductCard";
import {FlatList, View, StyleSheet} from "react-native";

export default function Home() {
    const router = useRouter()

    const renderItem = ({ item }: { item: Product }) => (
        <ProductCard
            product={item}
            onPress={() => router.push(`//productDetail/${item.id}`)}
        />
    )

    return (
        <>
            <View>
                <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </View>
            <HomeTabs />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 8,
      paddingTop: 16,
    },
    row: {
        justifyContent: "space-between",
        marginBottom: 12,
    },
})