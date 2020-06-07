<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h1>GYM</h1>
        <p>{{content.text}}</p>
      </div>

      <div class="col-md-4">
        <h1>{{ words.bestTr }}</h1>
        <p>{{ words.bestTrPara }}</p>

        <ul>
          <li v-for="pop in words.popular" :key="pop.id">
            <router-link :to="pop.link" class="foot-link">{{pop.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>

    <!--Gallery-->
    <div
      id="multi-item-example"
      class="home-gallery carousel slide carousel-multi-item carousel-multi-item-2"
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
</template>

<script>
export default {
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
      return require("../assets/images/" + pic.file);
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
      this.words = require("../assets/content/en/dictionary.json").home;
    else this.words = require("../assets/content/sr/dictionary.json").home;
  }
};
</script>