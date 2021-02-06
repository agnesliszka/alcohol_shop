import ShopGate from "./components/ShopGate.vue";
import ToBeBought from "./components/ToBeBought.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import ShowDetails from "./components/ShowDetails.vue";
import ChosenProduct from "./components/products/ChosenProduct.vue";

export const routes = [
    {
        path: "/",
        component: ShopGate
    },
    {
        path: "/buy",
        component: ToBeBought
    },
    {
        path: "/cart",
        component: ShoppingCart
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
    },
    { path: "/:notFound(.*)", redirect: "/" }
];
