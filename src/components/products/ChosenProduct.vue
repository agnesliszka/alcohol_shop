<template>
    <div>
        <img :src="srcPath" class="image" />
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    // props: ["itemName", "itemId"],
    computed: {
        ...mapGetters(["chosenCategoryImage"]),
        srcPath() {
            return this.chosenCategoryImage;
        }
    }
};
</script>
