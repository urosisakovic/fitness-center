<template>
  <div>
    <h1 class="container">Book a nutritionist</h1>
    <p class="container">
      It is a long established fact that a reader will be 
      distracted by the readable content of a page when 
      looking at its layout. The point of using Lorem Ipsum 
      is that it has a more-or-less normal distribution 
      of letters, as opposed to using 'Content here, content here', 
      making it look like readable English. Many desktop publishing 
      packages and web page editors now use Lorem Ipsum as their default 
      model text, and a search for 'lorem ipsum' will uncover many web 
      sites still in their infancy. Various versions have 
      evolved over the years, sometimes by accident, sometimes on 
      purpose (injected humour and the like).
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
          <input type="number" class="form-control" id="input-tel" placeholder="Enter Telephone Number">
        </div>
        <div class="form-group">
          <label for="input-email">Email address</label>
          <input type="email" class="form-control" id="input-email" aria-describedby="email-help" placeholder="Enter Email">
          <small id="email-help" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="problem-desc">Short problem description</label>
          <textarea class="form-control" id="problem-desc" rows="3"></textarea>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Download PDF report</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>