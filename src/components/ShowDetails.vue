<template>
    <div class="toBeBought">
        <el-checkbox-group v-model="itemsToBeBought">
            <el-checkbox v-for="(item, index) in chosenCategoryItems" :label="item" :key="index">
                <el-row>
                    <el-card :body-style="{ padding: '0px' }">
                        <img :src="item.image" class="image" />
                        <div style="padding: 14px">
                            <span>{{ item.name }}</span>
                            <div class="bottom clearfix"></div>
                        </div>
                    </el-card>
                </el-row>
                <el-button
                    class="showDetailsButton"
                    type="info"
                    icon="el-icon-message"
                    @click="buyItem"
                >Buy</el-button>
            </el-checkbox>
        </el-checkbox-group>
    </div>
</template>
<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            itemsToBeBought: [],
            detailedItemsToBeBought: []
        };
    },

    computed: {
        ...mapGetters([
            "shopItems",
            "chosenCategoryItems",
            "itemsToBeBoughtPage",
            "shoppingCartPage"
        ])

        // shopItems() {
        //     return this.$store.state.shopItems;
        // },
        // itemsToBeBoughtPage() {
        //     return this.$store.state.itemsToBeBoughtPage;
        // },
        // shoppingCartPage() {
        //     return this.$store.state.shoppingCartPage;
        // }
    },
    methods: {
        ...mapMutations(["buyItemsInTheShop"]),
        buyItem() {
            this.itemsToBeBought.forEach(item => this.buyItemsInTheShop(item));
            this.$router.push("/cart");
        }
    }
};
</script>
<style scoped>
.toBeBought {
    margin-top: 20px;
    font-size: 20px;
    text-decoration: none;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both;
}

.showDetailsButton {
    display: block;
    height: 40px;
    width: 130px;
    margin-left: calc(50% - 65px);
}
.buyButton {
    display: block;
    height: 50px;
    width: 120px;
    margin-top: 20px;
    margin-left: calc(50% - 60px);
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.image {
    margin-left: 25%;
    margin-top: 5%;
    width: 70px;
    height: 70px;
    display: block;
}
</style>
