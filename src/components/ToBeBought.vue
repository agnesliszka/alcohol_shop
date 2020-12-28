<template>
    <div class="toBeBought" v-if="itemsToBeBoughtPage">
        <el-checkbox-group v-model="itemsToBeBought">
            <el-checkbox
                v-for="(item, index) in itemsInTheShop"
                :label="item"
                :key="index"
                ><el-row>
                    <el-card :body-style="{ padding: '0px' }">
                        <img :src="item.image" class="image" />
                        <div style="padding: 14px">
                            <span>{{ item.name }}</span>
                            <div class="bottom clearfix"></div>
                        </div>
                    </el-card>
                </el-row>
            </el-checkbox>
            <el-button
                class="buyButton"
                type="success"
                icon="el-icon-message"
                circle
                @click="buyItems"
                >Buy</el-button
            >
        </el-checkbox-group>
    </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
    data() {
        return {
            itemsToBeBought: []
        };
    },
    computed: {
        itemsInTheShop() {
            return this.$store.state.shopItems;
        }
    },
    props: {
        itemsToBeBoughtPage: Boolean,
        shoppingCartPage: Boolean
    },
    methods: {
        ...mapMutations(["buyItemsInTheShop"]),
        tooglePages() {
            this.itemsToBeBoughtPage = !this.itemsToBeBoughtPage;
            this.shoppingCartPage = !this.shoppingCartPage;
        },
        buyItems() {
            this.itemsToBeBought.forEach(item => this.buyItemsInTheShop(item));
            this.tooglePages();
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

.buyButton {
    display: block;
    height: 50px;
    width: 100px;
    margin-left: calc(50% - 50px);
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.image {
    margin-top: 5%;
    width: 70px;
    height: 70px;
    display: block;
}
</style>
