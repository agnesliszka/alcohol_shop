<template>
    <div class="main">
        <h1>Alcohol shop</h1>
        <div>
            <div>
                <el-button type="info" @click="enableBuyingItems">Buy items</el-button>
                <el-button type="info" @click="enableSeeingItemsBought">Shopping cart</el-button>
            </div>
            <ToBeBought
                :itemsToBeBoughtPage="itemsToBeBoughtPage"
                :shoppingCartPage="shoppingCartPage"
            />
            <ShoppingCart :itemsBought="itemsBought" :shoppingCartPage="shoppingCartPage" />
        </div>
    </div>
</template>

<script>
import ToBeBought from "./ToBeBought.vue";
import ShoppingCart from "./ShoppingCart.vue";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
    name: "AlcoholShop",
    components: {
        ToBeBought,
        ShoppingCart
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters([
            "itemsBought",
            "itemsToBeBoughtPage",
            "shoppingCartPage"
        ])
        // itemsBought() {
        //     return this.$store.state.itemsBought;
        // },
        // itemsToBeBoughtPage() {
        //     return this.$store.state.itemsToBeBoughtPage;
        // },
        // shoppingCartPage() {
        //     return this.$store.state.shoppingCartPage;
        // }
    },
    methods: {
        ...mapMutations(["enableBuyingItems", "enableSeeingItemsBought"])
    }
};
</script>

<style scoped>
h1 {
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 20px;
    text-decoration: underline;
}
.main {
    background-color: aliceblue;
    width: 70vw;
    height: 90vh;
    border-radius: 5%;
    opacity: 94%;
}
</style>
