import ToBeBought from "./components/ToBeBought.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

export const routes = [
    {
        path: "/buy",
        component: ToBeBought,
        props: {
            itemsToBeBoughtPage: "itemsToBeBoughtPage",
            shoppingCartPage: "shoppingCartPage"
        }
    },
    {
        path: "/cart",
        component: ShoppingCart,
        itemsBought: "itemsBought",
        shoppingCartPage: "shoppingCartPage"
    }
];
