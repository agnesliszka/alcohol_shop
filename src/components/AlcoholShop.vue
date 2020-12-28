<template>
  <div class="main">
    <h1>Alcohol shop</h1>
    <div>
      <div>
        <el-button type="info" @click="enableBuyingItems">Buy items</el-button>
        <el-button type="info" @click="enableSeeingItemsBought"
          >Shopping cart</el-button
        >
      </div>
      <ToBeBought 
      :itemsToBeBoughtPage = "itemsToBeBoughtPage"
       :shoppingCartPage = "shoppingCartPage"/>
      <ShoppingCart 
      :itemsBought = "itemsBought" 
      :shoppingCartPage = "shoppingCartPage"/>
    </div>
    </div>
</template>

<script>
import ToBeBought from "./ToBeBought.vue";
import ShoppingCart from "./ShoppingCart.vue";

export default {
  name: "AlcoholShop",

  components: {
    ToBeBought,
    ShoppingCart,
  },
  data() {
    return {
      itemsToBeBoughtPage: true,
      shoppingCartPage: false,
    };
  },
   computed: {
    itemsBought() {
      return this.$store.state.itemsBought;
    }},
  methods: {
    
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
</style>
