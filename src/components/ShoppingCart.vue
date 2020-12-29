<template>
    <div class="shopping cart" v-if="shoppingCartPage">
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
    </div>
</template>
<script>
export default {
    props: {
        itemsBought: Array
    },
    computed: {
        shoppingCartPage() {
            return this.$store.state.shoppingCartPage;
        }
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
                    sums[index] = "N/A";
                }
            });

            return sums;
        }
    }
};
</script>
<style scoped>
.table {
    margin: 20px;
}
</style>