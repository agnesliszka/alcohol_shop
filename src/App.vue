<template>
    <div id="app">
        <ShopGate msg="Welcome to Alcohol Shop" />
    </div>
</template>

<script>
import ShopGate from "./components/ShopGate.vue";

export default {
    name: "App",
    components: {
        ShopGate
    }
};
</script>

<style>
#app {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial;
    text-align: center;
    margin: 0px;
    padding: 0px;
    min-width: 100vw;
    min-height: 100vh;
    background-image: url("./assets/background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
