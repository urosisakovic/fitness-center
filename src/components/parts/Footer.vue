<template>
	<footer class="container-fluid bg-steel page-footer font-small blue pt-4">
		<div class="text-center text-md-left">
			<div class="row">
				<div class="col-md-6 mt-md-0 mt-3">
					<h5 class="text-uppercase">GYM</h5>
					<p>The best gym out there.</p>
				</div>
				<hr class="clearfix w-100 d-md-none pb-3">
				<div class="col-md-3 mb-md-0 mb-3">
					<h5 class="text-uppercase">Services</h5>
					<ul class="list-unstyled">
						<li><router-link :to="makeLanguageRoute(serviceTrainingLink)" class="foot-link">Training</router-link></li>
						<li><router-link :to="makeLanguageRoute(serviceNutritionLink)" class="foot-link">Nutrition</router-link></li>
						<li><router-link :to="makeLanguageRoute(serviceMassageLink)" class="foot-link">Massage</router-link></li>
					</ul>
				</div>
				<div class="col-md-3 mb-md-0 mb-3">
					<h5 class="text-uppercase">Navigation</h5>
					<ul class="list-unstyled">
						<li><router-link :to="makeLanguageRoute(homeLink)" class="foot-link">Home</router-link></li>
						<li><router-link :to="makeLanguageRoute(aboutLink)" class="foot-link">About</router-link></li>
						<li><router-link :to="makeLanguageRoute(accoutLink)" class="foot-link">Account</router-link></li>
					</ul>
				</div>  
			</div>  
		</div>

		<div class="footer-copyright text-center">© 2020, Nikola Barjaktarevic, Uros Isakovic <br>
			Department for Software Engineering, University of Belgrade, School of Electrical Engineering
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
			accoutLink: "/account"
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
    }
}
</script>