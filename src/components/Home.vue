<template>
  <div id="wrapper">
    <h1>Text</h1>
    <p>
      {{text}}
    </p>
    <h1>Best trainings</h1>
    <p v-for="training in best_trainings" :key="training.name">
      {{training.name}}
    </p>
    <h1>Images</h1>
    <p v-for="image in images" :key="image.file">
      <img :src="getImgUrl(image.file)" v-bind:alt="image.file">
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return require('../assets/content/en/home.json');
  },
  methods: {
    getImgUrl(file) {
      return '../assets/images' + file;
    }
  }
}
</script>
