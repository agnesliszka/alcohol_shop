<template>
    <div class="shopping cart">
        <el-table
            class="table"
            :data="itemsBought"
            border
            max-height="440"
            :summary-method="getSummaries"
            show-summary
            style="width: 93%"
        >
            <el-table-column prop="name" label="Name"></el-table-column>
            <el-table-column fixed="right" label="Operations">
                <template slot-scope="scope">
                    <el-button
                        @click.native.prevent="deleteRow(scope.$index, itemsBought)"
                        type="text"
                        size="small"
                    >Remove item</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="price" label="Price"></el-table-column>
        </el-table>
        <el-button
            class="buyButton"
            type="success"
            icon="el-icon-message"
            circle
            @click="buyAnotherItem"
        >Buy another {{chosenCategoryName}}</el-button>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters([
            "shoppingCartPage",
            "chosenCategoryItems",
            "chosenCategoryName",
            "itemsBought"
        ])
    },
    methods: {
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        getSummaries(param) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = "Total Cost";
                    return;
                }
                const values = data.map(item => Number(item[column.property]));
                if (!values.every(value => isNaN(value))) {
                    sums[index] =
                        "PLN " +
                        values.reduce((prev, curr) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                } else {
                    sums[index] = "-";
                }
            });

            return sums;
        },
        buyAnotherItem() {
            this.$router.go(-1);
        }
    }
};
</script>
<style scoped>
.table {
    margin: 20px;
}
</style>