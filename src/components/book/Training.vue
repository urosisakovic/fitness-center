<template>
  <div class="container">
    <h2> Choose your training! </h2>

    <select id="dd-type-select" class="form-control" v-on:change="refreshTable()">
      <option value="yoga">Yoga</option>
      <option value="pilates">Pilates</option>
      <option value="core">Core</option>
      <option value="cardio">Cardio</option>
    </select>

    <select id="dd-sub-type-select" class="form-control">
      <option value="yoga">Yoga-1</option>
      <option value="yoga">Yoga-2</option>
      <option value="yoga">Yoga-3</option>
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
      curr_trainings: [

      ]
    }
  },
  props: {
    content: {
      required: true
    }
  },
  methods: {
    refreshTable: function() {
      console.log("refreshTable");

      var typeSelectField = document.getElementById("dd-type-select");
      //var subTypeSelectField = document.getElementById("dd-sub-type-select");

      var type = typeSelectField.options[typeSelectField.selectedIndex].text;
      
      for (var i = 0; i < this.content.trainings.length; i++) {
        if (type.toLowerCase() == this.content.trainings[i].name.toLowerCase()) {


          break;
        }
      }

      this.curr_trainings.length = 0;
      for (i = 0; i < this.content.trainings.length; i++) {
        if (this.content.trainings[i].type.toLowerCase() == type.toLowerCase()) {
          console.log("EQUAL");
          for (var j = 0; j < this.content.trainings[i].trainings.length; j++)
            this.curr_trainings.push(this.content.trainings[i].trainings[j]);
        }
      }
    }
  }
}
</script>