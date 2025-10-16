export type Product = {
    id: number;
    name: string;
    price: number;
    image: any;
    description: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Black Simple Lamp",
        price: 12.00,
        image: require("@/assets/images/Lamp.png"),
        description: "Lorem Ipsum, dolor sit amet",
    },
    {
        id: 2,
        name: "Minimal Stand",
        price: 25.00,
        image: require("@/assets/images/Lamp.png"),
        description: "Lorem Ipsum, dolor sit amet",
    },
    {
        id: 3,
        name: "Coffee Chair",
        price: 20.00,
        image: require("@/assets/images/Lamp.png"),
        description: "Lorem Ipsum, dolor sit amet",
    },
    {
        id: 4,
        name: "Simple Desk",
        price: 50.00,
        image: require("@/assets/images/Lamp.png"),
        description: "Lorem Ipsum, dolor sit amet",
    },
    {
        id: 5,
        name: "Coffee Desk",
        price: 50.00,
        image: require("@/assets/images/Lamp.png"),
        description: "Lorem Ipsum, dolor sit amet",
    },
]