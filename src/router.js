import ToBeBought from "./components/ToBeBought.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import ShowDetails from "./components/ShowDetails.vue";

export const routes = [
    {
        path: "/buy",
        component: ToBeBought
        // props: {
        //     itemsToBeBoughtPage: "itemsToBeBoughtPage",
        //     shoppingCartPage: "shoppingCartPage"
        // }
    },
    {
        path: "/cart",
        component: ShoppingCart
        // itemsBought: "itemsBought",
        // shoppingCartPage: "shoppingCartPage"
    },
    {
        path: "/details",
        component: ShowDetails
    }
];
