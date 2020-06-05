<template>
  <div class="container">
    <div style="text-align: center; margin-bottom: 50px;">
      <img :src="getImgUrl(content.image)" class="rounded-circle">
      <h1>{{ content.name }}</h1>
    </div>

    <h2> {{ words.bookedTr }} </h2>
    <table class="table table-striped table-dark" style="text-align: center">
      <thead>
        <tr>
          <td> {{ words.training }} </td>
          <td> {{ words.date }} </td>
          <td> {{ words.time }} </td>
          <td> {{ words.cancelTr }} </td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="training in content.trainings" :key="training.id">
          <td> {{ training.name }} </td>
          <td> {{ training.date }} </td>
          <td> {{ training.time }} </td>
          <td> <button type="button" class="btn btn-danger"> {{ words.cancel }} </button> </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: {}
    }
  },
  props: {
      content: {
          required: true
      }
  },
  methods: {
    getImgUrl: function(pic) {
      return require('../assets/images/' + pic)
    },
    englishLanguage: function() {
			var currUrl = this.$route.path;

			if (currUrl.startsWith("/en"))
				return true;
			else if (currUrl.startsWith("/sr"))
				return false;
			else
				return true;
    }
  },
	mounted() {
		if (this.englishLanguage()) {
			console.log("English");
			this.words = require("../assets/content/en/dictionary.json").myaccount
		}
		else {
			console.log("Serbian");
			this.words = require("../assets/content/sr/dictionary.json").myaccount
		}
	}
}
</script>