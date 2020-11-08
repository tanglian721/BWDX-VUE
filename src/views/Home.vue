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
    <homepage-info id="about" />
    <page-img />
    <page-map />
    <page-contact />
    <a id="toTop" href="#" v-if="BarDisplay" @click="haha">
      <img src="../assets/up_arrow_white.png" alt="" />
      <p>Back to Top</p>
    </a>
    <page-footer />
  </div>
</template>

<script>
import PageHeader from "../components/Header";
import MenuBtn from "../components/menuBtn";
import NavBar from "../components/nav-bar";
import PageSlider from "../components/slider";
import PageBusiness from "../components/business";
import HomepageInfo from "../components/homepage-info";
import PageContact from "../components/contact";
import PageMap from "../components/map";
import PageFooter from "../components/footer";
import PageImg from "../components/info-img";

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
    PageFooter,
    PageImg
  },
  data() {
    return {};
  },
  computed: {
    BarDisplay() {
      if (screen.width >= "1366") {
        return true;
      } else {
        return this.$store.state.navBarDisplay;
      }
    },
    scroll() {
      return window.scrollY;
    }
  },
  methods: {
    haha() {
      console.log("a");
      console.log(this.scroll);
    }
  },
  mounted() {
    console.log(screen.width);
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
  .page-business {
    width: 100%;
    height: 100vh;
  }
  .page-img {
    width: 100%;
  }
  .map {
    z-index: 50;
    overflow: hidden;
    width: 100%;
    height: 80vh;
    box-shadow: 0 0 5px gray;
  }
  .footer {
    width: 100%;
  }
}
@media only screen and (min-width: 1366px) {

  .home {
    .header {
      width: 55%;
      margin-left: 0;
      position: fixed;
      // grid-template-columns: 2fr 7fr;
    }
    #nav-bg {
      display: none;
    }
    .menuBtn {
      display: none;
    }
    .nav-bar {
      width: 45%;
      height: 15vh;
    }
    .slider {
      margin-top: 15vh;
      height: 85vh;
    }
    .page-business {
      height: 85vh;
    }
    .contact {
      height: 70vh;
    }
    .footer {
      height: 15vh;
    }
    #toTop {
      width: 100%;
      height: 10vh;
      display: grid;
      justify-items: center;
      background-color: #00315be8;
      img {
        width: 3%;
        margin-top: 1vh;
      }
      p {
        text-transform: uppercase;
        margin-top: -2vh;
        font-size: 2rem;
        color: white;
      }
    }
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
