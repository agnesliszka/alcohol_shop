<template>
    <div class="toBeBought">
        <el-checkbox-group v-model="itemsToBeBought">
            <el-checkbox
                v-for="(item, index) in chosenCategoryItems"
                :label="item"
                :key="index"
                class="checkbox"
            >
                <el-row>
                    <el-card :body-style="{ padding: '0px' }">
                        <img
                            :src="item.image"
                            class="image"
                            @click="getItemData(item)"
                        />
                        <div style="padding: 14px">
                            <span>{{ item.name }}</span>
                            <div class="bottom clearfix"></div>
                        </div>
                    </el-card>
                </el-row>
            </el-checkbox>
            <el-button
                style="margin-bottom:20px"
                :disabled="isEmpty"
                class="showDetailsButton"
                type="info"
                icon="el-icon-message"
                @click="buyItem"
                >Buy</el-button
            >
            <el-alert
                class="alert"
                v-if="isEmpty"
                title="Please buy at least one item."
                type="warning"
                :closable="false"
            ></el-alert>
        </el-checkbox-group>
        <!-- <router-view :id="itemId" :name="itemName"></router-view> -->
        <router-view v-if="!isEmpty"></router-view>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            itemsToBeBought: [],
            detailedItemsToBeBought: [],
            isEmpty: true,
            itemImage: "",
            itemName: ""
        };
    },

    computed: {
        ...mapGetters([
            "shopItems",
            "chosenCategoryItems",
            "chosenCategoryName",
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
    watch: {
        itemsToBeBought() {
            this.itemsToBeBought.length === 0
                ? (this.isEmpty = true)
                : (this.isEmpty = false);
        }
    },
    methods: {
        ...mapActions(["buyItemsInTheShop", "addchosenItemImage"]),
        buyItem() {
            if (this.itemsToBeBought.length === 0) {
                this.isEmpty = true;
                return;
            } else {
                this.isEmpty = false;
                this.itemsToBeBought.forEach(item => {
                    this.buyItemsInTheShop(item);
                });
            }
            this.$router.push("/cart");
        },
        getItemData(item) {
            this.addchosenItemImage(item.image);
            this.itemName = item.name;
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

div >>> .el-card__body {
    width: 100px;
    height: 140px;
}

div.el-card__body div >>> span {
    width: 70px;
    white-space: normal !important;
}

.image {
    margin-left: 15%;
    margin-top: 5%;
    width: 70px;
    height: 70px;
    display: block;
}
.checkbox {
    margin-right: 30px;
}
.isEmpty {
    color: red;
    font-size: 14px;
}
.alert {
    display: flex;
    margin-left: 25%;
    margin-top: 30px;
    margin-bottom: 20px;
    width: 50%;
    justify-content: center;
}
body /deep/ .el-popover {
    width: "400px" !important;
    height: "400px" !important;
}
</style>
