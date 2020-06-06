<template>
  <div class="container">
      <nav aria-label="breadcrumb" class="breadcrumbs">
          <ol class="breadcrumb">
              <li class="breadcrumb-item"><a :href="words.homeLink">{{ words.home }}</a></li>
              <li class="breadcrumb-item active" aria-current="page"> {{ getLastURLWord() }} </li>
          </ol>
      </nav>

      <h1>{{content.name}} </h1>
      <p> {{content.desc}} </p>
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
    getLastURLWord: function() {
      var currUrl = this.$route.path;
      var splitted = currUrl.split('/');
      var lastWord = splitted[splitted.length - 1];

      if (lastWord == "training") {
          if (this.englishLanguage())
              return "Trainings"
          else
              return "Treninzi"
      }
      else if (lastWord == "nutrition") {
          if (this.englishLanguage())
              return "Nutrition"
          else
              return "Nutricionista"
      }
      else if (lastWord == "massage") {
          if (this.englishLanguage())
              return "Massage"
          else
              return "Masaža"
      }
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
    if (this.englishLanguage())
      this.words = require("../../assets/content/en/dictionary.json").tr1
    else
      this.words = require("../../assets/content/sr/dictionary.json").tr1
  }
}
</script>