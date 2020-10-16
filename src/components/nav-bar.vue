<template>
  <div v-if="BarDisplay" class="nav-bar">
    <a id="home-btn" href="#">首页</a>
    <a id="news-btn" href="#">新闻</a>
    <a id="about-btn" href="#">关于我们</a>
    <a id="contact-btn" href="#">联系我们</a>
    <div id="nav-bg" @click="navHide"></div>
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
      return this.$store.commit('navBarHide')
    }
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: grid;
  justify-items: center;
  background-color: rgba(0, 38, 255, 0.6);
  border-radius: 0 0 20px 20px;
  position: relative;
  a {
    z-index: 80;
    color: white;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    &:hover {
      color: #003399;
      background-color: rgb(255, 251, 251, 0.6);
    }
  }
  #nav-bg{
    z-index: 50;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
  }
}
</style>