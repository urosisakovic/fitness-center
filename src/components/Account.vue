<template>
  <div class="container">
    <div style="text-align: center; margin-bottom: 50px;">
      <img :src="getImgUrl(content.image)" class="rounded-circle">
      <h1>{{ content.name }}</h1>
    </div>

    <h2> {{ words.bookedTr }} </h2>
    <table class="table table-striped table-dark" style="text-align: center;" :key="changeTable">
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
          <td> {{ training.name }}{{ training.subtype }} </td>
          <td> {{ training.date }} </td>
          <td> {{ training.time }} </td>
          <td> <button type="button" :class="'btn btn-danger ' + disabledClass(training.id)" :disabled="isDisabled(training.id)" v-on:click="cancelTr(training.id)"> {{ words.cancel }} </button> </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: {},
      changeTable: true
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

    getYear: function(tr) {
      var dateStr = tr.date;
      var splittedDate = dateStr.split("-");
      var yearStr = splittedDate[2];
      return parseInt(yearStr, 10);
    },

    getMonth: function(tr) {
      var dateStr = tr.date;
      var splittedDate = dateStr.split("-");
      var monthStr = splittedDate[1];
      return parseInt(monthStr, 10) - 1;
    },

    getDay: function(tr) {
      var dateStr = tr.date;
      var splittedDate = dateStr.split("-");
      var dayStr = splittedDate[0];
      return parseInt(dayStr, 10);
    },

    getHour: function(tr) {
      var timeStr = tr.time;
      var splittedTime = timeStr.split(":");
      var hourStr = splittedTime[0];
      return parseInt(hourStr, 10);
    },

    getMinute: function(tr) {
      var timeStr = tr.time;
      var splittedTime = timeStr.split(":");
      var minutStr = splittedTime[1];
      return parseInt(minutStr, 10);
    },

    isMoreThan30Min: function(tr) {
      var currDate = new Date();

      var trDate = new Date(
        this.getYear(tr),
        this.getMonth(tr),
        this.getDay(tr),
        this.getHour(tr),
        this.getMinute(tr),
        0,
        0
      );
      
      var diff = trDate - currDate;

      if (diff > 1800000)
        return true;
      else
        return false;
    },

    isDisabled: function(id) {
      for (var i = 0; i < this.content.trainings.length; i++) {
        var tr = this.content.trainings[i];
        if (tr.id == id) {
          if (this.isMoreThan30Min(tr))
            return false;
          else
            return true;
        }
      }
    },

    disabledClass: function(id) {
      if (this.isDisabled(id))
        return "disabled"
      else
        return "";
    },

    cancelTr(id) {
      for (var i = 0; i < this.content.trainings.length; i++) {
        var tr = this.content.trainings[i];
        if (tr.id == id) {
          this.content.trainings.splice(i, 1);
          this.changeTable = !this.changeTable;
        }
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
    },

    getNextId: function() {
      var maxId = 0;
      for (var i = 0; i < this.content.trainings.length; i++) {
        if (this.content.trainings[i].id > maxId)
          maxId = this.content.trainings[i].id;
      }
      return maxId + 1;
    }
  },
	mounted() {
		if (this.englishLanguage())
			this.words = require("../assets/content/en/dictionary.json").myaccount
		else
			this.words = require("../assets/content/sr/dictionary.json").myaccount
    
    var retrievedObject = JSON.parse(localStorage.getItem('testObject'));
  
    console.log("retrievedObject: " + retrievedObject);

    if (retrievedObject) {
      retrievedObject.id = this.getNextId();
      this.content.trainings.push(retrievedObject);
    }
  }
}
</script>