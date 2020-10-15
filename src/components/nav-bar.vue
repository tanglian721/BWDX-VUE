<template>
  <div v-if="BarDisplay" class="nav-bar">
    <a id="home-btn" href="#">首页</a>
    <a id="news-btn" href="#">新闻</a>
    <a id="about-btn" href="#">关于我们</a>
    <a id="contact-btn" href="#">联系我们</a>
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
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: grid;
  justify-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  a {
    width: 100%;
    padding: 10px 0;
    text-align: center;
  }
}
</style>