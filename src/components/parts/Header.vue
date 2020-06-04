<template>
    <header class="site-header">
			<nav class="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
				<div class="container-fluid">
					<router-link class="navbar-brand mr-4" :to="makeLanguageRoute(homeLink)">GYM</router-link>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarToggle">
						<!-- Navbar Left Side -->
						<div class="navbar-nav mr-auto"></div>
						<!-- Navbar Right Side -->
						<div class="navbar-nav">
							<router-link class="nav-item nav-link" :to="makeLanguageRoute(homeLink)"> Home</router-link>
							<div class="dropdown">
								<a href="#" class="dropdown-toggle nav-item nav-link" data-toggle="dropdown">Services</a>
								<div class="dropdown-menu">
									<router-link :to="makeLanguageRoute(serviceTrainingLink)" class="dropdown-item">Training</router-link>
									<router-link :to="makeLanguageRoute(serviceNutritionLink)" class="dropdown-item">Nutrition</router-link>
									<router-link :to="makeLanguageRoute(serviceMassageLink)" class="dropdown-item">Massage</router-link>
								</div>
							</div>
							<div class="dropdown">
								<a href="#" class="dropdown-toggle nav-item nav-link" data-toggle="dropdown">Book</a>
								<div class="dropdown-menu">
									<router-link :to="makeLanguageRoute(bookTrainingLink)" class="dropdown-item">Training</router-link>
									<router-link :to="makeLanguageRoute(bookNutritionLink)" class="dropdown-item">Nutrition</router-link>
									<router-link :to="makeLanguageRoute(bookMassageLink)" class="dropdown-item">Massage</router-link>
								</div>
							</div>
							<router-link class="nav-item nav-link" :to="makeLanguageRoute(aboutLink)"> About Us</router-link>
							<router-link class="nav-item nav-link" :to="makeLanguageRoute(contactLink)"> Contact</router-link>
							<router-link class="nav-item nav-link" :to="makeLanguageRoute(accoutLink)"> My Account</router-link>
							<router-link class="nav-item nav-link" :to="swapLanguageURL().url"> SR|EN </router-link>
						</div>
					</div>
				</div>
			</nav>
    </header>
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
		},

        swapLanguageURL: function() {
			var currUrl = this.$route.path;
			var newUrl = "";

			if (currUrl.startsWith("/en")) {
				newUrl = "/sr" + currUrl.substring(3);
			}
			else if (currUrl.startsWith("/sr")) {
				newUrl = "/en" + currUrl.substring(3);
			}
			else {
				newUrl = "/sr" + currUrl;
			}

			return {
				"url": newUrl
			};
        }
    }
}
</script>