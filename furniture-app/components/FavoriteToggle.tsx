import {useState} from "react";
import {Image, Pressable, StyleSheet} from "react-native";

type Props = {
    isFavorite?: boolean;
    onToggle?: (newState: boolean) => void;
}

export default function FavoriteToggle({ isFavorite = false, onToggle }: Props) {
    const [fav, setFav] = useState(isFavorite)

    const handlePress = () => {
        setFav(!fav)
        onToggle?.(!fav)
    }

    return (
        <Pressable onPress={handlePress} style={styles.container}>
            <Image
                source={
                    fav
                    ? require("@/assets/images/favoritesOn.png")
                        : require("@/assets/images/favoritesOff.png")
                }
                style={styles.icon}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 0,
    },
    icon: {
        width: 16,
        height: 20,
    },
})