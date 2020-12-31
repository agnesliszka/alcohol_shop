<template>
    <div class="main">
        <h1>Alcohol shop</h1>

        <div>
            <div>
                <el-button type="info">
                    <router-link to="/buy">Buy items</router-link>
                </el-button>
                <el-button type="info">
                    <router-link to="/cart">Shopping cart</router-link>
                </el-button>
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
</style>
