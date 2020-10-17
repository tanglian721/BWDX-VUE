<template>
  <div class="home">
    <page-header />
    <transition
      enter-active-class="animate__animated animate__slideInDown"
      leave-active-class="animate__animated animate__slideOutUp"
    >
      <nav-bar />
    </transition>
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
  }
};
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
.home {
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  .header {
    z-index: 99;
    width: 100%;
    height: 8vh;
    position: sticky;
    top: 0;
    // left: 0;
  }
  .nav-bar {
    position: absolute;
    z-index: 80;
    width: 100%;
  }
  .slider {
    width: 100%;
    height: 60vw;
    overflow: hidden;
  }
  .homepage-info {
    margin-top: 3vh;
  }
  .map {
    border-radius: 10%;
    overflow: hidden;
    width: 70%;
    margin-left: 15%;
    height: 30vh;
  }
  .footer {
    width: 100%;
  }
}
</style>
