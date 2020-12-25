<template>
  <div class="main">
    <h1>Alcohol shop</h1>
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
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              />
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
    <div class="shopping cart" v-if="shoppingCartPage">
      <div v-for="(item, index) in itemsBought" :label="item" :key="index">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlcoholShop",
  data() {
    return {
      itemsBought: [],
      shopItems: [
        {
          name: "wine",
          price: 20,
        },
        {
          name: "beer",
          price: 3,
        },
        {
          name: "whiskey",
          price: 30,
        },
        {
          name: "gin",
          price: 15,
        },
        { name: "vodka", price: 25 },
      ],
      shoppingCartPage: false,
      itemsToBeBoughtPage: true,
    };
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
  margin-left: 25%;
  width: 50px;
  height: 50px;
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
