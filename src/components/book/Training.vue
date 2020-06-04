<template>
  <div class="container">
    <h2> Choose your training! </h2>

    <select class="form-control">
      <option>Yoga</option>
    </select>

    <select class="form-control">
      <option>Yoga-1</option>
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
        <tr v-for="training in trainings" :key="training.id">
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
      "trainings": [
        {
          "id": "0",
          "type": "Yoga",
          "subtype": "Yoga-1",
          "date": "20-06-2020",
          "time": "20:00",
          "placesLeft": 5
        },
        {
          "id": "1",
          "type": "Yoga",
          "subtype": "Yoga-2",
          "date": "22-06-2020",
          "time": "21:30",
          "placesLeft": 12
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
    refreshTable: function() {
        return "Yoga"
    }
  }
}
</script>