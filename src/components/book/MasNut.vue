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
          <input type="checkbox" class="form-check-input" id="download-pdf">
          <label class="form-check-label" for="download-pdf">{{ words.downloadPdf }}</label>
        </div>
        <button type="button" id="masnut-submit-button" class="btn btn-primary" v-on:click="submitButton()">{{ words.submit }}</button>
    </form>
  </div>
</template>

<script>
import jsPDF from 'jspdf'
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
    },

    submitButton: function() {
      console.log("Submit Button Clicked");

      var downloadPDF = document.getElementById("download-pdf").checked;
      if (downloadPDF)
        this.savePDF();
    },

    savePDF: function() {
      var doc = new jsPDF()
 
      var firstName = document.getElementById("input-fn").value;
      var lastName = document.getElementById("input-sn").value;
      var telephone = document.getElementById("input-tel").value;
      var email = document.getElementById("input-email").value;
      var problemDesc = document.getElementById("problem-desc").value;

      doc.text("GYM", 50, 10);
      doc.text("You have successfully booked our services!", 10, 20)

      doc.text("First Name: " + firstName,            10, 30);
      doc.text("Last Name: " + lastName,              10, 40);
      doc.text("Telephone: " + telephone,             10, 50);
      doc.text("Email: " + email,                     10, 60);
      doc.text("Problem Description: " + problemDesc, 10, 70);
      doc.save('GYM.pdf')
    }
  },
  mounted() {
		if (this.englishLanguage()) 
			this.words = require("../../assets/content/en/dictionary.json").book
		else 
			this.words = require("../../assets/content/sr/dictionary.json").book
	}
}
</script>