<template>
  <div>
    <h1 class="container">{{ content.title }}</h1>
    <p class="container">
      {{ content.text }}
    </p>

    <div id="success-msg" class="container" role="alert">
    </div>

    <form class="container">
      <div class="form-group">
        <label for="input-fn">{{ words.fn }}</label>
        <input type="text" class="form-control" id="input-fn" :placeholder="words.enterFn">
        <small id="input-fn-invalid" class="form-text text-muted" style="color: red !important;"></small>
      </div>
      <div class="form-group">
        <label for="input-sn">{{ words.sn }}</label>
        <input type="text" class="form-control" id="input-sn" :placeholder="words.enterSn">
        <small id="input-sn-invalid" class="form-text text-muted" style="color: red !important;"></small>
      </div>
      <div class="form-group">
        <label for="input-tel">{{ words.tn }}</label>
        <input type="text" class="form-control" id="input-tel" :placeholder="words.enterTn">
        <small id="input-tel-invalid" class="form-text text-muted" style="color: red !important;"></small>
      </div>
      <div class="form-group">
        <label for="input-email">{{ words.email }}</label>
        <input type="text" class="form-control" id="input-email" aria-describedby="email-invalid" :placeholder="words.enterEmail">
        <small id="email-invalid" class="form-text text-muted">{{ words.emailPrivacy }}</small>
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

    validEmail: function(emailToTest) {
      // check for @
      var atSymbol = emailToTest.indexOf("@");
      if(atSymbol < 0) return false;

      var dot = emailToTest.lastIndexOf(".");
      if(dot <= atSymbol + 2) return false;

      // check that the dot is not at the end
      if (dot === emailToTest.length - 1) return false;

      return true;
    },

    validTelephone: function(telephone) {
      if (telephone == "")
        return false;

      if (telephone[0] != '+' && !(telephone[0] >= '0' && telephone[0] <= '9'))
        return false;

      for (var i = 1; i < telephone.length; i++)
        if (!(telephone[i] >= '0' && telephone[i] <= '9'))
          return false;

      return true;
    },

    validName: function(name) {
      if (name == "")
        return false;

      name = name.toLowerCase();

      for (var i = 0; i < name.length; i++)
        if (name.toLowerCase() == name.toUpperCase())
          return false;

      return true;
    },

    removeSuccessMsg: function() {
      var successMsg = document.getElementById("success-msg");
      successMsg.innerHTML = "";
      successMsg.classList.remove("alert-success");
      successMsg.classList.remove("alert")
    },

    submitButton: function() {
      this.removeSuccessMsg();

      var firstName = document.getElementById("input-fn").value;
      var lastName = document.getElementById("input-sn").value;
      var telephone = document.getElementById("input-tel").value;
      var email = document.getElementById("input-email").value;

      var valid = true;

      if (!this.validName(firstName)) {
        document.getElementById("input-fn-invalid").innerHTML = "Invalid first name.";
        valid = false;
      }
      else {
        document.getElementById("input-fn-invalid").innerHTML = "";
      }

      if (!this.validName(lastName)) {
        document.getElementById("input-sn-invalid").innerHTML = "Invalid second name.";
        valid = false;
      }
      else {
        document.getElementById("input-sn-invalid").innerHTML = "";
      }

      if (!this.validTelephone(telephone)) {
        document.getElementById("input-tel-invalid").innerHTML = "Invalid telephone number.";
        valid = false;
      }
      else {
        document.getElementById("input-tel-invalid").innerHTML = "";
      }

       if (!this.validEmail(email)) {
        document.getElementById("email-invalid").innerHTML = "Invalid email.";
        document.getElementById("email-invalid").style.setProperty("color", "red", "important");
        valid = false;
      }
      else {
        document.getElementById("email-invalid").innerHTML = this.words.emailPrivacy;
        document.getElementById("email-invalid").style.setProperty("color", "#333333");
      }

      if (!valid)
        return;

      var downloadPDF = document.getElementById("download-pdf").checked;
      if (downloadPDF)
        this.savePDF();

      this.success();
    },

    success: function() {
      document.getElementById("input-fn-invalid").innerHTML = "";
      document.getElementById("input-sn-invalid").innerHTML = "";
      document.getElementById("input-tel-invalid").innerHTML = "";
      document.getElementById("email-invalid").innerHTML = this.words.emailPrivacy;
      document.getElementById("email-invalid").style.setProperty("color", "#333333");

      document.getElementById("input-fn").value = "";
      document.getElementById("input-sn").value = "";
      document.getElementById("input-tel").value = "";
      document.getElementById("input-email").value = "";
      document.getElementById("problem-desc").value = "";

      document.getElementById("input-fn").placeholder = this.words.enterFn;
      document.getElementById("input-sn").placeholder = this.words.enterSn;
      document.getElementById("input-tel").placeholder = this.words.enterTn;
      document.getElementById("input-email").placeholder = this.words.enterEmail;
      document.getElementById("problem-desc").placeholder = this.words.enterProblemDesc;

      var successMsg = document.getElementById("success-msg");
      successMsg.innerHTML = "You have successfully booked an appointment!";
      successMsg.classList.add("alert-success");
      successMsg.classList.add("alert")
    },

    savePDF: function() {
      var doc = new jsPDF()
 
      var firstName = document.getElementById("input-fn").value;
      var lastName = document.getElementById("input-sn").value;
      var telephone = document.getElementById("input-tel").value;
      var email = document.getElementById("input-email").value;
      var problemDesc = document.getElementById("problem-desc").value;

  
      if (this.englishLanguage()) {
        doc.text("GYM", 100, 10);
        doc.text("You have successfully booked our services!", 10, 20)

        doc.text("First Name: "           + firstName,      10, 50);
        doc.text("Last Name: "            + lastName,       10, 60);
        doc.text("Telephone: "            + telephone,      10, 70);
        doc.text("Email: "                + email,          10, 80);
        doc.text("Problem Description: "  + problemDesc,    10, 90);
        doc.save('GYM.pdf')
      }
      else {
        doc.text("GYM", 100, 10);
        doc.text("Uspešno ste rezervisali naše usluge!", 10, 20)

        doc.text("Ime: "                  + firstName,      10, 50);
        doc.text("Prezime: "              + lastName,       10, 60);
        doc.text("Kontakt telefon: "      + telephone,      10, 70);
        doc.text("Mejl: "                 + email,          10, 80);
        doc.text("Kratak opis problema: " + problemDesc,    10, 90);
        doc.save('GYM.pdf')
      }
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