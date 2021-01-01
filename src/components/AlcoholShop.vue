<template>
    <div class="main">
        <h1>Liquid shop</h1>

        <div>
            <div>
                <router-link to="/">
                    <el-button type="warning">Buy items</el-button>
                </router-link>

                <router-link to="/cart">
                    <el-button type="warning">Shopping cart</el-button>
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "AlcoholShop",
    components: {},
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
    methods: {}
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
button {
    margin-left: 10px;
    width: 120px;
}
a {
    text-decoration: none;
    color: white;
}
</style>
