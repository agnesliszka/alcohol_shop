<template>
  <div>
    <div>
      <el-button type="info" @click="enableBuyingItems">Buy items</el-button>
      <el-button type="info" @click="enableSeeingItemsBought"
        >Shopping cart</el-button
      >
    </div>
    <div class="toBeBought" v-if="itemsToBeBoughtPage">
      <el-checkbox-group v-model="itemsBought">
        <el-checkbox
          v-for="(item, index) in shopItems"
          :label="item"
          :key="index"
          ><el-row>
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.image" class="image" />
              <div style="padding: 14px">
                <span>{{ item.name }}</span>
                <div class="bottom clearfix">
                  <el-button
                    type="success"
                    icon="el-icon-message"
                    circle
                    @click="buyItems"
                    >Buy</el-button
                  >
                </div>
              </div>
            </el-card>
          </el-row>
        </el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>
    <script>
export default {
  data() {
    return {
      itemsBought: [],
      itemsToBeBoughtPage: true,
      shoppingCartPage: false,
    };
  },
  props: {
    shopItems: Array,
  },
  mounted() {
    console.log(this.shopItems);
  },
  methods: {
    buyItems() {
      console.log(this.itemsBought);
      this.tooglePages();
    },
    tooglePages() {
      this.itemsToBeBoughtPage = !this.itemsToBeBoughtPage;
      this.shoppingCartPage = !this.shoppingCartPage;
    },
    enableBuyingItems() {
      this.itemsToBeBoughtPage = true;
      this.shoppingCartPage = false;
    },
    enableSeeingItemsBought() {
      this.itemsToBeBoughtPage = false;
      this.shoppingCartPage = true;
    },
  },
};
</script>
<style scoped>
.toBeBought {
  margin-top: 20px;
  font-size: 20px;
  text-decoration: none;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  margin-top: 5%;
  margin-left: 15%;
  width: 70px;
  height: 70px;
  display: block;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>