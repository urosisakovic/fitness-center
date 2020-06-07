<template>
  <header class="site-header fixed-top" :key="language">
    <a href="https://supplementstore.rs/twinlab-isowhey-fuel-908gr">
      <div class="jumbotron" id="banner" :style="{ backgroundImage: `url( ${image} )` }"></div>
    </a>

    <nav id="uros-navigation" class="navbar navbar-expand-md navbar-dark bg-steel">
      <div class="container-fluid">
        <button
        class="navbar-toggler"
        type="button"
        id="sidebar-toggle"
        aria-expanded="false"
        v-on:click="sidebarButton()"
      >Menu</button>

        <router-link class="navbar-brand mr-4" :to="makeLanguageRoute(homeLink)">GYM</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggle"
          aria-controls="navbarToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggle">
          <!-- Navbar Left Side -->
          <div class="navbar-nav mr-auto"></div>
          <!-- Navbar Right Side -->
          <div class="navbar-nav">
            <router-link
              class="nav-item nav-link"
              :to="makeLanguageRoute(homeLink)"
            >{{ words.home }}</router-link>
            <div class="dropdown">
              <a
                href="#"
                class="dropdown-toggle nav-item nav-link"
                data-toggle="dropdown"
              >{{ words.services }}</a>
              <div class="dropdown-menu">
                <router-link
                  :to="makeLanguageRoute(serviceTrainingLink)"
                  class="dropdown-item"
                >{{ words.training }}</router-link>
                <router-link
                  :to="makeLanguageRoute(serviceNutritionLink)"
                  class="dropdown-item"
                >{{ words.nutrition }}</router-link>
                <router-link
                  :to="makeLanguageRoute(serviceMassageLink)"
                  class="dropdown-item"
                >{{ words.massage }}</router-link>
              </div>
            </div>
            <div class="dropdown">
              <a
                href="#"
                class="dropdown-toggle nav-item nav-link"
                data-toggle="dropdown"
              >{{ words.book }}</a>
              <div class="dropdown-menu">
                <router-link
                  :to="makeLanguageRoute(bookTrainingLink)"
                  class="dropdown-item"
                >{{ words.training }}</router-link>
                <router-link
                  :to="makeLanguageRoute(bookNutritionLink)"
                  class="dropdown-item"
                >{{ words.nutrition }}</router-link>
                <router-link
                  :to="makeLanguageRoute(bookMassageLink)"
                  class="dropdown-item"
                >{{ words.massage }}</router-link>
              </div>
            </div>
            <router-link
              class="nav-item nav-link"
              :to="makeLanguageRoute(aboutLink)"
            >{{ words.aboutus }}</router-link>
            <router-link
              class="nav-item nav-link"
              :to="makeLanguageRoute(contactLink)"
            >{{ words.contact }}</router-link>
            <router-link
              class="nav-item nav-link"
              :to="makeLanguageRoute(accoutLink)"
            >{{ words.myaccount }}</router-link>
            <router-link class="nav-item nav-link" :to="swapLanguageURL().url">SR|EN</router-link>
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
      accoutLink: "/account",
      image: require("../../assets/images/banner.png"),
      words: {}
    };
  },
  methods: {
    englishLanguage: function() {
      var currUrl = this.$route.path;

      if (currUrl.startsWith("/en")) return true;
      else if (currUrl.startsWith("/sr")) return false;
      else return true;
    },

    makeLanguageRoute: function(url) {
      if (this.englishLanguage()) return url;
      else return "/sr" + url;
    },

    swapLanguageURL: function() {
      var currUrl = this.$route.path;
      var newUrl = "";

      if (currUrl.startsWith("/en")) {
        newUrl = "/sr" + currUrl.substring(3);
      } else if (currUrl.startsWith("/sr")) {
        newUrl = "/en" + currUrl.substring(3);
      } else {
        newUrl = "/sr" + currUrl;
      }

      return {
        url: newUrl
      };
    },
    sidebarButton: function() {
      var sb = document.getElementById("sidebar");
      var style = window.getComputedStyle(sb);
      if (style.getPropertyValue("margin-left") == "-250px")
        sb.style.setProperty("margin-left", "0px");
      else sb.style.setProperty("margin-left", "-250px");
    },

    addButton: function() {
      var currUrl = this.$route.path;
      var splittedURL = currUrl.split("/");
      
      var idx = 1;
      if (splittedURL[1] == "sr" || splittedURL[2] == "en")
        idx++;

      console.log("here");
      console.log(splittedURL);

      var button = document.getElementById("sidebar-toggle");
      button.style.display = "none";
      if (splittedURL[idx] == "services" && splittedURL[idx + 1] == "training" && matchMedia("(max-width: 768px)").matches) {
        console.log("matches");
        button.style.display = "inline";
      } 
    }
  },
  mounted() {
    if (this.englishLanguage())
      this.words = require("../../assets/content/en/dictionary.json").header_footer;
    else
      this.words = require("../../assets/content/sr/dictionary.json").header_footer;

    this.addButton();
  }
};
</script>

<style scoped>
#sidebar-toggle {
  display: none;
  margin: 0px;
}

#sidebar-toggle:hover {
  color: white;
}

@media (max-width: 768px) {
  #sidebar-toggle {
    display: inline;
  }
}
</style>