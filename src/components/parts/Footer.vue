<template>
	<footer class="container-fluid bg-steel page-footer font-small blue pt-4">
		<div class="text-center text-md-left">
			<div class="row">
				<div class="col-md-6 mt-md-0 mt-3">
					<h5 class="text-uppercase">GYM</h5>
					<p> {{ words.footerCaption }}</p>
				</div>
				<hr class="clearfix w-100 d-md-none pb-3">
				<div class="col-md-3 mb-md-0 mb-3">
					<h5 class="text-uppercase"> {{ words.services }} </h5>
					<ul class="list-unstyled">
						<li><router-link :to="makeLanguageRoute(serviceTrainingLink)" class="foot-link"> {{ words.training }}</router-link></li>
						<li><router-link :to="makeLanguageRoute(serviceNutritionLink)" class="foot-link">{{ words.nutrition }}</router-link></li>
						<li><router-link :to="makeLanguageRoute(serviceMassageLink)" class="foot-link">{{ words.massage }}</router-link></li>
					</ul>
				</div>
				<div class="col-md-3 mb-md-0 mb-3">
					<h5 class="text-uppercase"> {{ words.navigation }}</h5>
					<ul class="list-unstyled">
						<li><router-link :to="makeLanguageRoute(homeLink)" class="foot-link"> {{ words.home }} </router-link></li>
						<li><router-link :to="makeLanguageRoute(aboutLink)" class="foot-link"> {{ words.aboutus }} </router-link></li>
						<li><router-link :to="makeLanguageRoute(accoutLink)" class="foot-link"> {{ words.myaccount }} </router-link></li>
					</ul>
				</div>  
			</div>  
		</div>

		<div class="footer-copyright text-center">© 2020, Nikola Barjaktarevic, Uros Isakovic <br>
			{{ words.copyright }}
		</div>
	</footer>
</template>

<script>
export default {
		data() {
        return {
			homeLink: "/home",
			serviceTrainingLink: "/services/training",
			serviceNutritionLink: "/services/nutrition",
			serviceMassageLink: "/services/massage",
			bookTrainingLink: "/book/training",
			bookNutritionLink: "/book/nutrition",
			bookMassageLink: "/book/massage",
			aboutLink: "/about",
			contactLink: "/contact",
			accoutLink: "/account",
			words: {}
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

		makeLanguageRoute: function(url) {
			if (this.englishLanguage())
				return url;
			else
				return "/sr" + url;
		}
	},
	mounted() {
		if (this.englishLanguage()) {
			console.log("English");
			this.words = require("../../assets/content/en/dictionary.json").header_footer
		}
		else {
			console.log("Serbian");
			this.words = require("../../assets/content/sr/dictionary.json").header_footer
		}
	}
}
</script>