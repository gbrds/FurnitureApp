import { View, Image, Text, Pressable } from "react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

{/*
Usage Examples:
- <BackButton title="Sign Up" /> -> Change Title
- <BackButton /> -> Only Icon
- <BackButton icon={require('@/assets/images/backArrowAlt.png')} /> -> Use different Icon
*/}

export default function BackButton({ title = "", icon = require('@/assets/images/backArrow.png') }) {
    return (
        <View>
            <Pressable
                onPress={() => router.back()}
                style={{
                    width: 140,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 16,
                }}
            >
                <Image source={icon} style={{ width: 19, height: 18 }} />
                {title ? (
                    <Text
                        style={{
                            fontFamily: "Montserrat",
                            fontSize: 26,
                            fontWeight: '500',
                            color: Colors.primary,
                        }}
                    >
                        {title}
                    </Text>
                ) : null}
            </Pressable>
        </View>
    )
}