<template>
  <div id="app">
    <app-header></app-header>
    <h1>{{ title }}</h1>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  data() {
    return {
      title: 'Fitness Center'
    }
  }
}
</script>
