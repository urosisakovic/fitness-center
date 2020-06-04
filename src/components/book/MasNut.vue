<template>
  <div>
    <h1 class="container">{{ content.title }}</h1>
    <p class="container">
      {{ content.text }}
      </p>
      <form class="container">
        <div class="form-group">
          <label for="input-fn">First Name</label>
          <input type="text" class="form-control" id="input-fn" placeholder="Enter First Name">
        </div>
        <div class="form-group">
          <label for="input-sn">Second Name</label>
          <input type="text" class="form-control" id="input-sn" placeholder="Enter Second Name">
        </div>
        <div class="form-group">
          <label for="input-tel">Telephone Number</label>
          <input type="text" class="form-control" id="input-tel" placeholder="Enter Telephone Number">
        </div>
        <div class="form-group">
          <label for="input-email">Email address</label>
          <input type="email" class="form-control" id="input-email" aria-describedby="email-help" placeholder="Enter Email">
          <small id="email-help" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="problem-desc">Short problem description</label>
          <textarea class="form-control" id="problem-desc" rows="3">Enter Short Problem Description</textarea>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Download PDF report</label>
        </div>
        <button id="masnut-submit-button" type="submit" class="btn btn-primary">Submit</button>
    </form>
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