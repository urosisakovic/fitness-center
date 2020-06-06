<template>
  <div class="container">
    <h2> {{ words.chooseTr}} </h2>

    <div class="form-group">
      <label for="input-fn"> {{ words.trainingType }}</label>
      <select id="dd-type-select" class="form-control" v-on:change="typeSelect()">
        <option value="yoga"> {{ trainings.Yoga }} </option>
        <option value="pilates">{{ trainings.Pilates }}</option>
        <option value="core">{{ trainings.Core }}</option>
        <option value="cardio">{{ trainings.Cardio }}</option>
      </select>
    </div>
    <div class="form-group" :key="subtype">
      <label for="input-fn"> {{ words.training}} </label>
      <select id="dd-sub-type-select" class="form-control" v-on:change="subTypeSelect()">
      <option v-for="option in options" :key="option.id">{{ option.text }}</option>
    </select>
    </div>

    <h2> {{ words.available }} </h2>
    <table class="table table-striped table-dark" style="text-align: center">
      <thead>
        <tr>
          <td>{{ words.date }}</td>
          <td>{{ words.time }}</td>
          <td>{{ words.placesLeft }}</td>
          <td>{{ words.comeAndJoin }}</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="training in curr_trainings" :key="training.id">
          <td> {{ training.date }} </td>
          <td> {{ training.time }}</td>
          <td> {{ training.placesLeft }}</td>
          <td> <button type="button" class="btn btn-primary" v-on:click="book(training.id)">{{ words.book }}</button> </td>
        </tr>
      </tbody>

    </table>

  </div>
</template>

<script>
export default {
  data() {
    return {
      curr_trainings: [],
      options: [],
      words: {},
      trainings: {},
      subtype: true
    }
  },
  props: {
    content: {
      required: true
    }
  },
  methods: {
    typeSelect: function() {
      var typeSelectField = document.getElementById("dd-type-select");
      var type = typeSelectField.options[typeSelectField.selectedIndex].text;

      this.options = [];

      for (var i = 0; i < this.content.types.length; i++) {
        if (type.toLowerCase() == this.content.types[i].name.toLowerCase()) {
          this.options = this.content.types[i].subtypes;
        }
      }

      var subTypeSelectField = document.getElementById("dd-sub-type-select");
      subTypeSelectField.selectedIndex = 0;

      setTimeout(() => this.refreshTable(), 50);
    },

    subTypeSelect: function() {
      this.refreshTable();
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

    refreshTable: function() {
      var typeSelectField = document.getElementById("dd-type-select");
      var subTypeSelectField = document.getElementById("dd-sub-type-select");

      var type = typeSelectField.options[typeSelectField.selectedIndex].text;
      var subtype = subTypeSelectField.options[subTypeSelectField.selectedIndex].text;

      this.curr_trainings = [];

      for (var i = 0; i < this.content.trainings.length; i++) {
        if (this.content.trainings[i].type.toLowerCase() == type.toLowerCase()) {
          for (var j = 0; j < this.content.trainings[i].trainings.length; j++) {
            if (this.content.trainings[i].trainings[j].subtype.toLowerCase() == subtype.toLowerCase())
              this.curr_trainings.push(this.content.trainings[i].trainings[j]);
          }
        }
      }
    },

    book: function(id) {
      var training;
      for (var i = 0; i < this.curr_trainings.length; i++) {
        if (this.curr_trainings[i].id == id) {
          training = this.curr_trainings[i];
          break;
        }
      }

      if (training.placesLeft == 0) {
        alert("Selected training is full.");
        return;
      }

      training.placesLeft--;

      localStorage.setItem('testObject', JSON.stringify(training));
      console.log('testObject: ' + training);

      console.log("Success");
    }

  },
  mounted() {
    var language = "";

    if (this.englishLanguage())
      language = require("../../assets/content/en/dictionary.json");
		else
			language = require("../../assets/content/sr/dictionary.json");
    
    this.words = language.book;
    this.trainings = language.trainings;
    this.options = language.options;

    setTimeout(() => this.refreshTable(), 50);
  }
}
</script>