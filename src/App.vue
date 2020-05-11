<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/parts/Header.vue'
import Footer from './components/parts/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  data() {
    return {
    }
  }
}
</script>
