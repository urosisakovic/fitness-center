<template>
  <div id="wrapper">
    <p>
      {{text}}
    </p>
    <p v-for="training in best_trainings" :key="training.name">
      {{training.name}}
    </p>
    <p v-for="image in images" :key="image.file">
      {{image.file}}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return require('../assets/content/en/home.json');
  }
}
</script>
