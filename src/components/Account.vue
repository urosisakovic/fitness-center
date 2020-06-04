<template>
  <div class="container">
    <div>
      <img style="float: left" :src="getImgUrl(content.image)">
      <h1>{{ content.name }}</h1>
    </div>

    <h2> My trainings </h2>
    <table>
      <thead>
        <tr>
          <td>Training</td>
          <td>Date</td>
          <td>Time</td>
          <td>Cancel</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="training in content.trainings" :key="training.id">
          <td> {{ training.name }} </td>
          <td> {{ training.date }} </td>
          <td> {{ training.time }} </td>
          <td>  <button type="button">Cancel</button>  </td>
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