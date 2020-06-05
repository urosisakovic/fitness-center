<template>
  <div>
    <h1 class="container">{{ content.title }}</h1>
    <p class="container">
      {{ content.text }}
      </p>
      <form class="container">
        <div class="form-group">
          <label for="input-fn">{{ words.fn }}</label>
          <input type="text" class="form-control" id="input-fn" :placeholder="words.enterFn">
        </div>
        <div class="form-group">
          <label for="input-sn">{{ words.sn }}</label>
          <input type="text" class="form-control" id="input-sn" :placeholder="words.enterSn">
        </div>
        <div class="form-group">
          <label for="input-tel">{{ words.tn }}</label>
          <input type="text" class="form-control" id="input-tel" :placeholder="words.enterTn">
        </div>
        <div class="form-group">
          <label for="input-email">{{ words.email }}</label>
          <input type="email" class="form-control" id="input-email" aria-describedby="email-help" :placeholder="words.enterEmail">
          <small id="email-help" class="form-text text-muted">{{ words.emailPrivacy }}</small>
        </div>
        <div class="form-group">
          <label for="problem-desc">{{ words.problemDesc }}</label>
          <textarea class="form-control" id="problem-desc" rows="3" :value="words.enterProblemDesc"></textarea>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">{{ words.downloadPdf }}</label>
        </div>
        <button id="masnut-submit-button" type="submit" class="btn btn-primary">{{ words.submit }}</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
      return {
        words: {}
      }
  },
  props: {
      content: {
          required: true
      }
  },
  methods: {
    englishLanguage: function() {
			var currUrl = this.$route.path;

			if (currUrl.startsWith("/en"))
				return true;
			else if (currUrl.startsWith("/sr"))
				return false;
			else
				return true;
    }
  },
	mounted() {
		if (this.englishLanguage()) {
			console.log("English");
			this.words = require("../../assets/content/en/dictionary.json").book
		}
		else {
			console.log("Serbian");
			this.words = require("../../assets/content/sr/dictionary.json").book
		}
	}
}
</script>