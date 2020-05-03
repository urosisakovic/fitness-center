import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

Vue.component('vheader', Header);
Vue.component('vfooter', Footer);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
