<template>
  <div id="wrapper">
    <app-sidebar id="sidebar"></app-sidebar>

    <div class="container" id="content">
      <nav aria-label="breadcrumb" class="breadcrumbs">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a :href="words.homeLink">{{ words.home }}</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ getLastURLWord() }}</li>
        </ol>
      </nav>

      <h1>{{content.name}}</h1>
      <p>{{content.desc}}</p>

      <!--Gallery-->
      <div
        id="multi-item-example"
        class="tr-gallery carousel slide carousel-multi-item carousel-multi-item-2"
        data-ride="carousel"
      >
        <div class="controls-top">
          <a class="control-button" href="#multi-item-example" data-slide="prev">
            <i>&lt;</i>
          </a>
          <a class="control-button" href="#multi-item-example" data-slide="next">
            <i>&gt;</i>
          </a>
        </div>

        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <div class="col-md-3 mb-3" v-for="image in content.images1" :key="image.id">
              <div class="card">
                <img class="img-fluid" :src="getImgUrl(image)" />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="col-md-3 mb-3" v-for="image in content.images2" :key="image.id">
              <div class="card">
                <img class="img-fluid" :src="getImgUrl(image)" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/Gallery-->
    </div>
  </div>
</template>

<script>
import Sidebar from "../parts/Sidebar.vue";

export default {
  components: {
    "app-sidebar": Sidebar
  },
  data() {
    return {
      words: {}
    };
  },
  props: {
    content: {
      required: true
    }
  },
  methods: {
    getImgUrl: function(pic) {
      return require("../../assets/images/" + pic.file);
    },
    getLastURLWord: function() {
      var currUrl = this.$route.path;
      var splitted = currUrl.split("/");
      var lastWord = splitted[splitted.length - 1];

      if (lastWord == "training") {
        if (this.englishLanguage()) return "Trainings";
        else return "Treninzi";
      } else if (lastWord == "nutrition") {
        if (this.englishLanguage()) return "Nutrition";
        else return "Nutricionista";
      } else if (lastWord == "massage") {
        if (this.englishLanguage()) return "Massage";
        else return "Masaža";
      }
    },
    englishLanguage: function() {
      var currUrl = this.$route.path;

      if (currUrl.startsWith("/en")) return true;
      else if (currUrl.startsWith("/sr")) return false;
      else return true;
    }
  },
  mounted() {
    if (this.englishLanguage())
      this.words = require("../../assets/content/en/dictionary.json").tr1;
    else this.words = require("../../assets/content/sr/dictionary.json").tr1;
  }
};
</script>