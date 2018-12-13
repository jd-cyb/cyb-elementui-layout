import 'babel-polyfill'
import Vue from "vue";
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import "font-awesome/css/font-awesome.css";
import 'animate.css';
import VueProgressBar from "vue-progressbar";
import index from "./index.vue";
import router from "./router";
import store from "./store";

Vue.use(Element);

Vue.use(VueProgressBar, {
  color: '#eeeeee',
  failedColor: '#874b4b',
  thickness: '2px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s'
  },
  autoRevert: true,
  location: 'top',
  inverse: false
})

new Vue({
  store,
  router,
  el: "#app",
  render: h => h(index)
})
