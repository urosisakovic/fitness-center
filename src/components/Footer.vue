<template>
	<footer class="fixed-bottom bg-steel page-footer font-small blue pt-4">
		<div class="container-fluid text-center text-md-left">
			<div class="row">
				<div class="col-md-6 mt-md-0 mt-3">
					<h5 class="text-uppercase">GYM</h5>
					<p>The best gym out there.</p>
				</div>
				<hr class="clearfix w-100 d-md-none pb-3">
				<div class="col-md-3 mb-md-0 mb-3">
					<h5 class="text-uppercase">Services</h5>
					<ul class="list-unstyled">
						<li><router-link to="/services/training" class="foot-link">Training</router-link></li>
						<li><router-link to="/services/nutrtion" class="foot-link">Nutrition</router-link></li>
						<li><router-link to="/services/massage" class="foot-link">Massage</router-link></li>
					</ul>
				</div>
				<div class="col-md-3 mb-md-0 mb-3">
					<h5 class="text-uppercase">Navigation</h5>
					<ul class="list-unstyled">
						<li><router-link to="/home" class="foot-link">Home</router-link></li>
						<li><router-link to="/about" class="foot-link">About</router-link></li>
						<li><router-link to="/account" class="foot-link">Account</router-link></li>
					</ul>
				</div>  
			</div>  
		</div>

		<div class="footer-copyright text-center py-3">© 2020, Nikola Barjaktarevic, Uros Isakovic <br>
			Deparment for Software Engineering, University of Belgrade, School of Electrical Engineering
		</div>
	</footer>
</template>