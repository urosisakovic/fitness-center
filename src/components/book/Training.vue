<template>
  <div id="wrapper">
    <app-filterbar></app-filterbar>

    <div id="content">
    </div>
  </div>
</template>

<script>
import Filterbar from '../parts/Filterbar.vue'

export default {
  components: {
    'app-filterbar': Filterbar
  },
  data() {
  }
}
</script>