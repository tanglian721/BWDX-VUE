<template>
  <div class="home">
    <page-header />
    <nav-bar />
    <page-slider />
    <homepage-info />
    <page-contact />
    <page-map />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from "../components/Header";
import NavBar from "../components/nav-bar";
import PageSlider from "../components/slider";
import HomepageInfo from "../components/homepage-info";
import PageContact from "../components/contact";
import PageMap from "../components/map";
import PageFooter from "../components/footer";

export default {
  name: "Home",
  components: {
    PageHeader,
    NavBar,
    PageSlider,
    HomepageInfo,
    PageContact,
    PageMap,
    PageFooter
  },
 
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  min-height: 100vh;
  position: relative;
  .header {
    width: 100%;
    height: 8vh;
    position: sticky;
    top: 0;
  }
  .nav-bar {
    width: 100%;
    position: absolute;
    top: 8vh;
  }
  .slider {
    width: 100%;
    height: 60vw;
    overflow: hidden;
  }
}
</style>
