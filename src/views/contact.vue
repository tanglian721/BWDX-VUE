<template>
  <div class="contact-page">
    <page-header />
    <transition
      enter-active-class="animate__animated animate__slideInDown"
      leave-active-class="animate__animated animate__slideOutUp"
    >
      <nav-bar />
    </transition>
    <page-map />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from "../components/Header";
import NavBar from "../components/nav-bar";
import PageMap from "../components/map";
import PageFooter from "../components/footer";
export default {
  name: "contact-page",
  components: {
    PageHeader,
    NavBar,
    PageMap,
    PageFooter
  }
};
</script>

<style lang="scss" scoped>
.contact-page {
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

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
</style>