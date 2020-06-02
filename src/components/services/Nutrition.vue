<template>
  <div class="container">
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
  }
}
</script>