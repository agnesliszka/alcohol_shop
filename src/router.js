import ToBeBought from "./components/ToBeBought.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import ShowDetails from "./components/ShowDetails.vue";
import ChosenProduct from "./components/products/ChosenProduct.vue";

export const routes = [
    {
        path: "/",
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
        component: ShowDetails,
        children: [
            {
                path: "/:itemName:itemId",
                component: ChosenProduct,
                props: true
            }
        ]
    }
];
