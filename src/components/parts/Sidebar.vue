<template>
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>{{ words.trainings }}</h3>
        </div>

        <ul class="list-unstyled components">
            <li>
                <a href="#yoga-submenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle-sb">{{ words.Yoga }}</a>
                <ul class="collapse list-unstyled" id="yoga-submenu">
                    <li><router-link :to="makeLanguageRoute(yogaLink)">{{ words.Yoga }} {{ words.Schedule }}</router-link></li>
                    <li><router-link :to="makeLanguageRoute(yogaLink1)">{{ words.yoga1 }}</router-link></li>
                    <li><router-link :to="makeLanguageRoute(yogaLink2)">{{ words.yoga2 }}</router-link></li>
                    <li><router-link :to="makeLanguageRoute(yogaLink3)">{{ words.yoga3 }}</router-link></li>
                </ul>
            </li>

            <li>
                <a href="#pilates-submenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle-sb">{{ words.Pilates }}</a>
                <ul class="collapse list-unstyled" id="pilates-submenu">
                    <li><router-link :to="makeLanguageRoute(pilatesLink)">{{ words.Pilates }} {{ words.Schedule }}</router-link></li>
                    <li><router-link :to="makeLanguageRoute(pilatesLink1)">{{ words.pilates1 }}</router-link></li>
                    <li><router-link :to="makeLanguageRoute(pilatesLink2)">{{ words.pilates2 }}</router-link></li>
                    <li><router-link :to="makeLanguageRoute(pilatesLink3)">{{ words.pilates3 }}</router-link></li>
                </ul>
            </li>

            <li>
                <a href="#core-submenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle-sb">{{ words.Core }}</a>
                <ul class="collapse list-unstyled" id="core-submenu">
                    <li><router-link :to="makeLanguageRoute(coreLink)">{{ words.Core }} {{ words.Schedule }}</router-link></li>
                    <li><router-link :to="makeLanguageRoute(coreLink1)">{{ words.core1 }}</router-link></li>
                    <li><router-link :to="makeLanguageRoute(coreLink2)">{{ words.core2 }}</router-link></li>
                    <li><router-link :to="makeLanguageRoute(coreLink3)">{{ words.core3 }}</router-link></li>
                </ul>
            </li>

            <li>
                <a href="#cardio-submenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle-sb">{{ words.Cardio }}</a>
                <ul class="collapse list-unstyled" id="cardio-submenu">
                    <li><router-link :to="makeLanguageRoute(cardioLink)">{{ words.Cardio }} {{ words.Schedule }}</router-link></li>
                    <li><router-link :to="makeLanguageRoute(cardioLink1)">{{ words.cardio1 }}</router-link></li>
                    <li><router-link :to="makeLanguageRoute(cardioLink2)">{{ words.cardio2 }}</router-link></li>
                    <li><router-link :to="makeLanguageRoute(cardioLink3)">{{ words.cardio3 }}</router-link></li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
		data() {
        return {
            yogaLink: "/services/training/yoga",
            yogaLink1: "/services/training/yoga/classical-yoga",
            yogaLink2: "/services/training/yoga/hatha-yoga",
            yogaLink3: "/services/training/yoga/jain-yoga",

            pilatesLink: "/services/training/pilates",
            pilatesLink1: "/services/training/pilates/classical-pilates",
            pilatesLink2: "/services/training/pilates/mat-pilates",
            pilatesLink3: "/services/training/pilates/pilates-3",

            coreLink: "/services/training/core",
            coreLink1: "/services/training/core/core-1",
            coreLink2: "/services/training/core/core-2",
            coreLink3: "/services/training/core/core-3",

            cardioLink: "/services/training/cardio",
            cardioLink1: "/services/training/cardio/cardio-1",
            cardioLink2: "/services/training/cardio/cardio-2",
            cardioLink3: "/services/training/cardio/cardio-3",
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
			this.words = require("../../assets/content/en/dictionary.json").trainings
		}
		else {
			console.log("Serbian");
			this.words = require("../../assets/content/sr/dictionary.json").trainings
		}
	}
}
</script>