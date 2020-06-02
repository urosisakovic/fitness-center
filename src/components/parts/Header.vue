<template>
    <header class="site-header">
			<nav class="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
				<div class="container-fluid">
					<router-link class="navbar-brand mr-4" to="/home">GYM</router-link>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarToggle">
						<!-- Navbar Left Side -->
						<div class="navbar-nav mr-auto"></div>
						<!-- Navbar Right Side -->
						<div class="navbar-nav">
							<router-link class="nav-item nav-link" to="/home"> Home</router-link>
							<div class="dropdown">
								<a href="#" class="dropdown-toggle nav-item nav-link" data-toggle="dropdown">Services</a>
								<div class="dropdown-menu">
									<router-link to="/services/training" class="dropdown-item">Training</router-link>
									<router-link to="/services/nutrition" class="dropdown-item">Nutrition</router-link>
									<router-link to="/services/massage" class="dropdown-item">Massage</router-link>
								</div>
							</div>
							<div class="dropdown">
								<a href="#" class="dropdown-toggle nav-item nav-link" data-toggle="dropdown">Book</a>
								<div class="dropdown-menu">
									<router-link to="/book/training" class="dropdown-item">Training</router-link>
									<router-link to="/book/nutrition" class="dropdown-item">Nutrition</router-link>
									<router-link to="/book/massage" class="dropdown-item">Massage</router-link>
								</div>
							</div>
							<router-link class="nav-item nav-link" to="/about"> About Us</router-link>
							<router-link class="nav-item nav-link" to="/contact"> Contact</router-link>
							<router-link class="nav-item nav-link" to="/account"> My Account</router-link>
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
        }
    },
    methods: {
        swapLanguageURL: function() {
						var currUrl = this.$route.path;
						console.log(currUrl);
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