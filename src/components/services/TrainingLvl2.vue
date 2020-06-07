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
          <li class="breadcrumb-item">
            <a :href="getBreadcrumbURL()">{{ getTrainingType() }}</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ getLastURLWord() }}</li>
        </ol>
      </nav>

      <h1>{{content.name}}</h1>
      <p>{{content.desc}}</p>

      <table id="info-table" class="table table-striped table-dark" style="text-align: center">
        <thead>
          <tr>
            <th>{{ words.duration }}</th>
            <th>{{ words.difficulty }}</th>
            <th>{{ words.userMark }}</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{{content.duration}}'</td>
            <td>{{content.diff}} / 5</td>
            <td>{{content.avg_mark}} / 5</td>
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

      <div id="rating-box">
        <h2>{{ words.rateCaption }}</h2>
        <div id="success-rate-msg" class="container" role="alert"></div>
        <a href="#" class="rating" v-on:click="addRating(1)">1</a>
        <a href="#" class="rating" v-on:click="addRating(2)">2</a>
        <a href="#" class="rating" v-on:click="addRating(3)">3</a>
        <a href="#" class="rating" v-on:click="addRating(4)">4</a>
        <a href="#" class="rating" v-on:click="addRating(5)">5</a>
      </div>

      <div :key="refreshComments" id="comments-area">
        <h2>{{ words.comments }}</h2>
        <div id="no-permission-msg" class="container" role="alert"></div>
        <article
          v-for="comment in content.comments"
          :key="comment.id"
          class="media content-section"
        >
          <div class="media-body">
            <div class="article-metadata">
              <small class="text-muted">{{comment.date}}</small>
            </div>
            <h2 class="article-title">{{comment.author}}</h2>
            <p class="article-content">{{comment.text}}</p>
          </div>
        </article>
      </div>

      <div class="form-group">
        <textarea
          class="form-control"
          id="comment-text-area"
          rows="3"
          :value="words.commentTextArea"
        ></textarea>
        <button
          type="submit"
          class="btn btn-primary"
          v-on:click="leaveComment()"
        >{{ words.leaveComment }}</button>
      </div>
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
      refreshComments: 0,
      words: {},
      srb: {},
      eng: {}
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

    getCurrentSubtype: function() {
      var currUrl = this.$route.path;
      var splittedUrl = currUrl.split("/");

      return splittedUrl[splittedUrl.length - 1].toLowerCase();
    },

    hasCommentPrivilage: function() {
      var userInfo = require("../../assets/content/en/account.json");
      var attended = userInfo.attended;

      for (var i = 0; i < attended.length; i++) {
        if (attended[i].subtype.toLowerCase() == this.getCurrentSubtype())
          return true;
      }

      return false;
    },

    nextCommentId: function() {
      var maxId = 0;
      for (var i = 0; i < this.content.comments.length; i++) {
        if (this.content.comments[i].id > maxId)
          maxId = this.content.comments[i].id;
      }
      maxId++;

      return maxId;
    },

    getDate: function() {
      var date = new Date();

      var day = date.getDay() + 1;
      var month = date.getMonth() + 1;
      var year = date.getFullYear();

      var dayStr = "" + day;
      if (day < 10) dayStr = "0" + dayStr;

      var monthStr = "" + month;
      if (month < 10) monthStr = "0" + monthStr;

      var yearString = "" + year;

      var dateString = dayStr + "-" + monthStr + "-" + yearString;
      return dateString;
    },

    getAuthor: function() {
      var userInfo = require("../../assets/content/en/account.json");
      return userInfo.name;
    },

    leaveComment: function() {
      if (!this.hasCommentPrivilage()) {
        var noPermissionMsg = document.getElementById("no-permission-msg");
        noPermissionMsg.innerHTML = this.words.noPermissionMsg;
        noPermissionMsg.classList.add("alert-danger");
        noPermissionMsg.classList.add("alert");
        return;
      }

      var textArea = document.getElementById("comment-text-area");

      var newComment = Object();
      newComment.text = textArea.value;
      newComment.date = this.getDate();
      newComment.author = this.getAuthor();
      newComment.id = this.nextCommentId();

      console.log(newComment);

      this.content.comments.push(newComment);
      this.refreshComments++;
    },

    getLastURLWord: function() {
      var currUrl = this.$route.path;
      var splitted = currUrl.split("/");
      var lastWord = splitted[splitted.length - 1];

      if (lastWord == "classical-yoga") {
        if (this.englishLanguage()) return this.eng.yoga1;
        else return this.srb.yoga1;
      } else if (lastWord == "hatha-yoga") {
        if (this.englishLanguage()) return this.eng.yoga2;
        else return this.srb.yoga2;
      } else if (lastWord == "jain-yoga")
        if (this.englishLanguage()) return this.eng.yoga3;
        else return this.srb.yoga3;
      else if (lastWord == "classical-pilates")
        if (this.englishLanguage()) return this.eng.pilates1;
        else return this.srb.pilates1;
      else if (lastWord == "mat-pilates")
        if (this.englishLanguage()) return this.eng.pilates2;
        else return this.srb.pilates2;
      else if (lastWord == "reformer-pilates")
        if (this.englishLanguage()) return this.eng.pilates3;
        else return this.srb.pilates3;
      else if (lastWord == "sbm")
        if (this.englishLanguage()) return this.eng.core1;
        else return this.srb.core1;
      else if (lastWord == "iap")
        if (this.englishLanguage()) return this.eng.core2;
        else return this.srb.core2;
      else if (lastWord == "mace")
        if (this.englishLanguage()) return this.eng.core3;
        else return this.srb.core3;
      else if (lastWord == "sprinting")
        if (this.englishLanguage()) return this.eng.cardio1;
        else return this.srb.cardio1;
      else if (lastWord == "hiit")
        if (this.englishLanguage()) return this.eng.cardio2;
        else return this.srb.cardio2;
      else if (lastWord == "cycling")
        if (this.englishLanguage()) return this.eng.cardio3;
        else return this.srb.cardio3;
    },

    getTrainingType: function() {
      var currUrl = this.$route.path;
      var splitted = currUrl.split("/");
      var lastWord = splitted[splitted.length - 2];

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

    getBreadcrumbURL: function() {
      var currUrl = this.$route.path;
      var splitted = currUrl.split("/");
      var lastWord = splitted[splitted.length - 2];

      return "/services/training/" + lastWord;
    },

    addRating: function(rating) {
      console.log(rating);
      var addRatingSuccess = document.getElementById("success-rate-msg");

      if (this.hasCommentPrivilage()) {
        addRatingSuccess.innerHTML = this.words.ratingSuccesMsg;
        addRatingSuccess.classList.add("alert-success");
        addRatingSuccess.classList.add("alert");
      } else {
        addRatingSuccess.innerHTML = this.words.ratingNoPermissionMsg;
        addRatingSuccess.classList.add("alert-danger");
        addRatingSuccess.classList.add("alert");
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

    this.eng = require("../../assets/content/en/dictionary.json").trainings;
    this.srb = require("../../assets/content/sr/dictionary.json").trainings;
  }
};
</script>

<style scoped>
#info-table {
  margin-top: 50px;
}

#multi-item-example {
  margin-top: 50px;
}

#rating-box {
  margin-top: 50px;
}

#comments-area {
  margin-top: 50px;
}


.rating {
    font-size: xx-large;
    margin-right: 50px;
}

#rating-box a:hover {
    color: yellow !important;
    font-size: 35px;
}

.rating-box {
    margin-bottom: 30px;
}
</style>