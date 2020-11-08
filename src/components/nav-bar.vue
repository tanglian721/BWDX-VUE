<template>
  <div class="nav-bar">
    <div id="nav-btn">
      <a id="home-btn" href="#" @click="navHide">首页</a>
      <a id="business-btn" href="#business_anchor" @click="navHide">我们的业务</a>
      <a id="about-btn" href="#about" @click="navHide">关于我们</a>
      <a id="news-btn" href="#" @click="navHide">新闻</a>
      <a id="contact-btn" href="#contact">联系我们</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  computed: {
    // BarDisplay() {

    //   return this.$store.state.navBarDisplay;
    // }
  },
  methods: {
    navHide() {
      return this.$store.commit("navBarHide");
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 90;
  width: 60%;
  height: 100%;
  background-color: white;
  #nav-btn {
    margin-top: 20vh;
    margin-left: 10vw;
    height: 40%;
    width: 100%;
    display: grid;
    >a {
      font-size: 1.3rem;
      color: #00305b;
      // font-weight: bold;
    }
  }

}
@media only screen and (min-width: 1366px) {
  .nav-bar {
  background-color: white;
  #nav-btn {
    margin-top: 0;
    margin-left: 0;
    height: 100%;
    width: 70%;
    display: grid;
    grid-template-columns: repeat(5, auto);
    align-items: end;
    justify-items: center;
    >a {
      width: 100%;
      font-size: 1rem;
      padding: 2vh 0;
      margin-bottom: 2vh;
      color: #00305b;
        text-align: center;
      &:hover {
        background-color: #00305b;
        color:white;
      }
      // font-weight: bold;
    }
  }
}
}
</style>