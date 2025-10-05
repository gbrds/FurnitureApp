import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator()

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
        </View>
    )
}

function FavouritesScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
            <Text>Favourites</Text>
        </View>
    )
}

function ProfileScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
            <Text>Profile</Text>
        </View>
    )
}

export default function HomeTabs(){
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName: keyof typeof Ionicons.glyphMap = 'home';
                if (route.name === 'Favorites') iconName = 'heart';
                else if (route.name === 'Profile') iconName = 'person';
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        >
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Favourites' component={FavouritesScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    )
}