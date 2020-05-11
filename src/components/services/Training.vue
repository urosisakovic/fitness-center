<template>
  <div id="wrapper">
    <app-sidebar></app-sidebar>
    <h1>Training</h1>
  </div>
</template>

<script>
import Sidebar from '../parts/Sidebar.vue'

export default {
  components: {
    'app-sidebar': Sidebar
  },
  data() {
    return {
    }
  }
}
</script>