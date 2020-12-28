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
    </div>
    <div class="shopping cart" v-if="shoppingCartPage">
      <el-table
      class= "table"
    :data="itemsBought"
    border
    max-height="440"
    :summary-method="getSummaries"
    show-summary
    style="width: 93%">
    <el-table-column
      prop="name"
      label="Name">
    </el-table-column>
    <el-table-column fixed="right" label="Operations">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, itemsBought)"
              type="text"
              size="small"
            >
              Remove item
            </el-button>
          </template>
        </el-table-column>
    <el-table-column
      prop="price"
      label="Total cost (PLN)">
    </el-table-column>
     </el-table>
    </div>
  </div>
</template>

<script>
// import ToBeBought from "./ToBeBought.vue";
import {mapMutations} from 'vuex';

export default {
  name: "AlcoholShop",

  components: {
    // ToBeBought,
  },
  data() {
    return {
      itemsToBeBought: [],
      itemsToBeBoughtPage: true,
      shoppingCartPage: false,
    };
  },
   computed: {
    itemsInTheShop() {
      return this.$store.state.shopItems;
    },
    itemsBought() {
      console.log("@itemsbought")
      console.log(this.$store.state.itemsBought)
      return this.$store.state.itemsBought;
    }},
  methods: {
    ...mapMutations(['buyItemsInTheShop']),
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    buyItems() {
      this.itemsToBeBought.forEach((item) => this.buyItemsInTheShop(item));
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
    getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = 'Total Cost';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = 'PLN ' + values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      }
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
.table {
  margin: 20px;
}
.buyButton{
  display: block;
  height: 50px;
  width: 100px;
  margin-left: calc(50% - 50px)
}
</style>
