<template>
  <div class="nav-bar">
    <div id="nav-btn">
      <a id="home-btn" href="#" @click="navHide">首页</a>
      <a id="business-btn" href="#business" @click="navHide">我们的业务</a>
      <a id="about-btn" href="#about" @click="navHide">关于我们</a>
      <a id="news-btn" href="#" @click="navHide">新闻</a>
      <a id="contact-btn" href="#">联系我们</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  computed: {
    BarDisplay() {
      return this.$store.state.navBarDisplay;
    }
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
  // a {
  //   z-index: 80;
  //   color: white;
  //   width: 100%;
  //   padding: 10px 0;
  //   text-align: center;
  //   &:hover {
  //     color: #003399;
  //     background-color: rgb(255, 251, 251, 0.6);
  //   }
  // }
  // #nav-bg {
  //   z-index: 50;
  //   width: 100%;
  //   height: 100vh;
  //   background-color: rgba(0, 0, 0, 0.3);
  //   position: absolute;
  //   top: 0;
  // }
}
</style>