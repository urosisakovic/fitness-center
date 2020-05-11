<template>
  <div id="wrapper">
    <app-content v-bind:pageContent="pageContent"></app-content>
  </div>
</template>

<script>
import TrainingL1 from '../parts/TrainingL1.vue'

export default {
  components: {
    'app-content': TrainingL1
  },
  data() {
    return {
      pageContent: require("../../assets/content/en/services/training.json")
    }
  }
}
</script>