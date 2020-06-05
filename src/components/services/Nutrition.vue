<template>
  <div class="container">
      <nav aria-label="breadcrumb" class="breadcrumbs">
          <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/home">Home</a></li>
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

        if (lastWord == "training")
            return "Trainings"
        else if (lastWord == "nutrition")
            return "Nutrition"
        else if (lastWord == "massage")
            return "Massage"
    }
  }
}
</script>