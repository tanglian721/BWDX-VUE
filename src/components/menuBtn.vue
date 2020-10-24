<template>
  <div class="menuBtn">
    <transition name="btn" mode="in-out">
      <img
        class="menu"
        v-if="BarDisplay"
        id="menu-btn"
        src="../assets/letter-x.png"
        alt=""
        @click="navBarToggle"
      />
      <img
        class="menu"
        v-else
        id="menu-btn"
        src="../assets/menu.png"
        alt=""
        @click="navBarToggle"
      />
    </transition>
    <a href="#" v-if='scroll'>
      <img id="top" src="../assets/top.png" alt="" />
    </a>
  </div>
</template>

<script>
export default {
  name: "menu-btn",
  computed: {
    BarDisplay() {
      return this.$store.state.navBarDisplay;
    },
    scroll() {
      if (window.scrollY > 1000){
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    navBarToggle() {
      console.log("a");
      this.$store.commit("navBarToggle");
    }
  },
  mounted () {
    console.log(this.scroll);
  },
};
</script>

<style lang="scss" scoped>
.menuBtn {
  .menu {
    width: 8vw;
    filter: drop-shadow(2px 3px 0px white);
  }
  #top {
    position: fixed;
    bottom: 8vh;
    left: 10vw;
    width: 14vw;
  }
}
.btn-enter,
.btn-leave-to {
  opacity: 0;
}
.btn-enter-active,
.btn-leave-active {
  transition: opacity 0.5s linear;
}
</style>