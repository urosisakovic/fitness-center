<template>
  <div>
    <app-header :key="$route.fullPath"></app-header>
    <router-view :key="$route.fullPath"></router-view>
    <app-footer :key="$route.fullPath"></app-footer>
  </div>
</template>

<script>
import Header from "./components/parts/Header.vue";
import Footer from "./components/parts/Footer.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
  data() {
    return {};
  }
};
</script>
