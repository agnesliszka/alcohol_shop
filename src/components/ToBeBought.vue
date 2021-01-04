<template>
    <div class="toBeBought">
        <el-checkbox-group v-model="itemsToBeBought">
            <el-checkbox
                class="checkbox"
                v-for="(item, index) in shopItems"
                :label="item"
                :ref="item.category"
                :key="index"
            >
                <el-row>
                    <el-card :body-style="{ padding: '0px' }">
                        <img :src="item.image" class="image" />
                        <div style="padding: 14px">
                            <span>{{ item.category }}</span>
                            <div class="bottom clearfix"></div>
                        </div>
                    </el-card>
                </el-row>
                <el-button
                    class="showDetailsButton"
                    type="info"
                    icon="el-icon-message"
                    @click="showDetails(item)"
                >ShowDetails</el-button>
            </el-checkbox>
        </el-checkbox-group>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            itemsToBeBought: []
        };
    },
    computed: {
        ...mapGetters(["shopItems", "itemsToBeBoughtPage", "shoppingCartPage"])
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
        ...mapActions([
            "addChosenCategoryItems",
            "addChosenCategoryName",
            "buyItemsInTheShop"
        ]),
        showDetails(item) {
            this.addChosenCategoryName(item.category);
            const chosenCategoryIndex = this.shopItems.findIndex(
                i => i.category === item.category
            );
            const chosenCategoryItems = this.shopItems[chosenCategoryIndex]
                .items;
            this.addChosenCategoryItems(chosenCategoryItems);
            this.$router.push("/details");
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
.checkbox {
    margin-right: 30px;
}
label >>> span {
    background-color: transparent;
    border: transparent;
}
</style>
