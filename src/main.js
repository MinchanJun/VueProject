import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');

// let a = new Vue({
//   render: h => h(App),
// }).$mount('#app');

// let b = new Vue({
//   render: h => h(App)
// }).$mount('#app2');

// console.log(a);
// console.log(b);