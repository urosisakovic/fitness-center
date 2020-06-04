<template>
  <div class="container">
    <h2> Choose your training! </h2>

    <div class="form-group">
      <label for="input-fn">Training Type</label>
      <select id="dd-type-select" class="form-control" v-on:change="typeSelect()">
        <option value="yoga">Yoga</option>
        <option value="pilates">Pilates</option>
        <option value="core">Core</option>
        <option value="cardio">Cardio</option>
      </select>
    </div>
    <div class="form-group">
      <label for="input-fn">Training</label>
      <select id="dd-sub-type-select" class="form-control" v-on:change="subTypeSelect()">
      <option v-for="option in options" :key="option.id">{{ option.text }}</option>
    </select>
    </div>

    <h2> Available sessions: </h2>
    <table class="table table-striped table-dark" style="text-align: center">
      <thead>
        <tr>
          <td>Date</td>
          <td>Time</td>
          <td>Places left</td>
          <td>Come and Join Us!</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="training in curr_trainings" :key="training.id">
          <td> {{ training.date }} </td>
          <td> {{ training.time }}</td>
          <td> {{ training.placesLeft }}</td>
          <td> <button type="button" class="btn btn-primary">Book</button> </td>
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
      options: [
        {
          id: 0,
          text: "Yoga-1"
        },
        {
          id: 1,
          text: "Yoga-2"
        },
        {
          id: 2,
          text: "Yoga-3"
        }
      ]
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
    }
  },
  mounted() {
    this.refreshTable();
  }
}
</script>