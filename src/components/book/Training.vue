<template>
  <div class="container">
    <h2> Choose your training! </h2>

    <select id="dd-type-select" class="form-control" v-on:change="typeSelect()">
      <option value="yoga">Yoga</option>
      <option value="pilates">Pilates</option>
      <option value="core">Core</option>
      <option value="cardio">Cardio</option>
    </select>

    <select id="dd-sub-type-select" class="form-control" v-on:change="subTypeSelect()">
      <option v-for="option in options" :key="option.id">{{ option.text }}</option>
    </select>

    <h2> Available sessions: </h2>
    <table>
      <thead>
        <tr>
          <td>Type</td>
          <td>Name</td>
          <td>Date</td>
          <td>Time</td>
          <td>Places left</td>
          <td>Book</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="training in curr_trainings" :key="training.id">
          <td> {{ training.type }} </td>
          <td> {{ training.subtype }}</td>
          <td> {{ training.date }} </td>
          <td> {{ training.time }}</td>
          <td> {{ training.placesLeft }}</td>
        </tr>
      </tbody>

    </table>

  </div>
</template>

<script>
export default {
  data() {
    return {
      trainings: [
        {
          id: "0",
          type: "Yoga",
          subtype: "Yoga-1",
          date: "20-06-2020",
          time: "20:00",
          placesLeft: 5
        },
        {
          id: "1",
          type: "Pilates",
          subtype: "Yoga-2",
          date: "22-06-2020",
          time: "21:30",
          placesLeft: 12
        }
      ],
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
      console.log("typeSelect()");

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

      setTimeout(() => this.refreshTable(), 500);
    },

    subTypeSelect: function() {
      console.log("subTypeSelect()");
      this.refreshTable();
    },

    refreshTable: function() {
      console.log("refreshTable()");

      var typeSelectField = document.getElementById("dd-type-select");
      var subTypeSelectField = document.getElementById("dd-sub-type-select");

      var type = typeSelectField.options[typeSelectField.selectedIndex].text;
      var subtype = subTypeSelectField.options[subTypeSelectField.selectedIndex].text;

      console.log("type: " + type);
      console.log("subtype: " + subtype);

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
  }
}
</script>