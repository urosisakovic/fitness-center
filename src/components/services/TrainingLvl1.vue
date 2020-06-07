<template>
  <div id="wrapper">
    <app-sidebar></app-sidebar>

    <div class="container" id="content">
      <nav aria-label="breadcrumb" class="breadcrumbs">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a :href="words.homeLink">{{ words.home }}</a>
          </li>
          <li class="breadcrumb-item">
            <a :href="words.trainingsLink">{{ words.trainings }}</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ getLastURLWord() }}</li>
        </ol>
      </nav>

      <h1>{{content.name}}</h1>
      <p>{{content.desc}}</p>

      <h2 id="table-hdr">{{ words.tableCaption }}</h2>

      <div class="form-group">
        <label for="input-fn">{{ words.sortBy }}</label>
        <select id="dd-sort-by" class="form-control" v-on:change="sortTable()">
          <option value="nameAsc">{{ words.nameAsc }}</option>
          <option value="nameDes">{{ words.nameDes }}</option>
          <option value="diffAsc">{{ words.difficultyAsc }}</option>
          <option value="diffDes">{{ words.difficultyDes }}</option>
          <option value="durAsc">{{ words.durationAsc }}</option>
          <option value="durDes">{{ words.durationDes }}</option>
        </select>
      </div>

      <table class="table table-striped table-dark" style="text-align: center">
        <thead>
          <tr>
            <td>{{ words.name }}</td>
            <td>{{ words.duration }}</td>
            <td>{{ words.difficulty }}</td>
          </tr>
        </thead>

        <tbody :key="tableRerender">
          <tr v-for="training in content.trainings" :key="training.id">
            <td>{{training.name}}</td>
            <td>{{training.duration}}'</td>
            <td>{{training.diff}} / 5</td>
          </tr>
        </tbody>
      </table>

      <!--Gallery-->
      <div
        id="multi-item-example"
        class="carousel slide carousel-multi-item carousel-multi-item-2"
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
      words: {},
      tableRerender: true
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

      if (lastWord == "yoga") {
        if (this.englishLanguage()) return "Yoga";
        else return "Joga";
      } else if (lastWord == "pilates") {
        return "Pilates";
      } else if (lastWord == "core") {
        if (this.englishLanguage()) return "Core";
        else return "Jezgro";
      } else if (lastWord == "cardio") {
        if (this.englishLanguage()) return "Cardio";
        else return "Kardio";
      }
    },
    englishLanguage: function() {
      var currUrl = this.$route.path;

      if (currUrl.startsWith("/en")) return true;
      else if (currUrl.startsWith("/sr")) return false;
      else return true;
    },

    sortTable: function() {
      var sortByChoice = document.getElementById("dd-sort-by");
      var sortByValue = sortByChoice.options[sortByChoice.selectedIndex].value;

      if (sortByValue == "nameAsc") {
        console.log("nameAsc");
        this.content.trainings.sort(function(a, b) {
          return a.name > b.name;
        });
      } else if (sortByValue == "nameDes") {
        console.log("nameDesc");
        this.content.trainings.sort(function(a, b) {
          return a.name < b.name;
        });
      } else if (sortByValue == "diffAsc") {
        console.log("diffAsc");
        this.content.trainings.sort(function(a, b) {
          return a.diff > b.diff;
        });
      } else if (sortByValue == "diffDes") {
        console.log("diffDesc");
        this.content.trainings.sort(function(a, b) {
          return a.diff < b.diff;
        });
      } else if (sortByValue == "durAsc") {
        console.log("durAsc");
        this.content.trainings.sort(function(a, b) {
          return a.duration > b.duration;
        });
      } else if (sortByValue == "durDes") {
        console.log("durDes");
        this.content.trainings.sort(function(a, b) {
          return a.duration < b.duration;
        });
      }

      this.tableRerender = !this.tableRerender;
    }
  },
  mounted() {
    if (this.englishLanguage())
      this.words = require("../../assets/content/en/dictionary.json").tr1;
    else this.words = require("../../assets/content/sr/dictionary.json").tr1;

    this.content.trainings.sort(function(a, b) {
      return a.name > b.name;
    });
  }
};
</script>

<style scoped>
#table-hdr {
  margin-top: 50px;
}

#multi-item-example {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>