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
          >{{ item.name }}</el-checkbox
        >
        <el-button
          type="success"
          icon="el-icon-message"
          circle
          @click="buyItems"
          >Buy</el-button
        >
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
.el-carousel__item div {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.carouselButton {
  margin-left: 250px;
  width: 20%;
  height: 150px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
