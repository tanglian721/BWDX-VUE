<template>
  <div class="home">
      <menu-btn />
    <transition name="nav">
      <nav-bar v-if="BarDisplay" />
    </transition>
    <transition>
      <div id="nav-bg" v-if="BarDisplay"></div>
    </transition>
    <page-header />
    <page-slider />
    <page-business id="business" />
    <homepage-info id="about"/>
    <page-map />
    <page-contact />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from "../components/Header";
import MenuBtn from "../components/menuBtn";
import NavBar from "../components/nav-bar";
import PageSlider from "../components/slider";
import PageBusiness from "../components/business"
import HomepageInfo from "../components/homepage-info";
import PageContact from "../components/contact";
import PageMap from "../components/map";
import PageFooter from "../components/footer";

export default {
  name: "Home",
  components: {
    PageHeader,
    MenuBtn,
    NavBar,
    PageSlider,
    PageBusiness,
    HomepageInfo,
    PageContact,
    PageMap,
    PageFooter
  },
  computed: {
    BarDisplay() {
      return this.$store.state.navBarDisplay;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  .menuBtn {
    z-index: 100;
    width: 8vw;
    position: fixed;
    top: 5vh;
    right: 5vw;
  }
  #nav-bg {
    z-index: 80;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba($color: #000000, $alpha: 0.6);
  }

  .slider {
    width: 100%;
    height: 65vh;
    overflow: hidden;
  }

  .map {
    overflow: hidden;
    margin:20% 10%;
    width: 80%;
    height: 40vh;
    border-radius: 50%;
  }
  .footer {
    width: 100%;
  }
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s linear;
}
.nav-enter,
.nav-leave-to {
  transform: translateX(100%);
}
.nav-enter-active,
.nav-leave-active {
  transition: transform 0.5s linear;
}
</style>
