import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/main.css';

Vue.use(VueRouter)
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
