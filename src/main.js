import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
