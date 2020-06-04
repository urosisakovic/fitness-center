<template>
  <div class="container">
    <div style="text-align: center; margin-bottom: 50px;">
      <img :src="getImgUrl(content.image)" class="rounded-circle">
      <h1>{{ content.name }}</h1>
    </div>

    <h2> Booked trainings </h2>
    <table class="table table-striped table-dark" style="text-align: center">
      <thead>
        <tr>
          <td>Training</td>
          <td>Date</td>
          <td>Time</td>
          <td>Cancel Training</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="training in content.trainings" :key="training.id">
          <td> {{ training.name }} </td>
          <td> {{ training.date }} </td>
          <td> {{ training.time }} </td>
          <td> <button type="button" class="btn btn-danger">Cancel</button> </td>
        </tr>
      </tbody>
    </table>
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
        getImgUrl: function(pic) {
            return require('../assets/images/' + pic)
        }
    }
}
</script>