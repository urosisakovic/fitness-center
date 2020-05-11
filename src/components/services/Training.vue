<template>
  <div id="wrapper">
    <app-sidebar></app-sidebar>
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Sidebar from '../parts/Sidebar.vue'

export default {
  components: {
    'app-sidebar': Sidebar
  },
  data() {
    return require('../../assets/content/en/services/training.json');
  }
}
</script>