<template>
  <div class="header">
    <img id="logo" src="../assets/Logo Circle.png" alt="" />
    <div id="name">
      <p id="name-chi">南京秉文东信科技有限公司</p>
      <p id="name-eng">Nanjing BW Southeast Information Technologies Co.,Ltd</p>
    </div>
    <img id="menu-btn" src="../assets/menu-btn.png" alt="" @click="navBarToggle">
  </div>
</template>

<script>
export default {
  name: "page-header",
  methods: {
    navBarToggle() {
      console.log("a")
      this.$store.commit("navBarToggle");
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #003399;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 3fr 1fr;
  #logo {
    height: 70%;
  }
  #name {
    color: white;
    width: 90%;
    #name-chi {
      font-family: 'Noto Sans SC', sans-serif;
      text-align: center;
    }
    #name-eng {
      font-size: 0.6rem;
      font-family: 'Oswald', sans-serif;
      text-align: center;
    }
  }
  #menu-btn {
    height: 50%;
  }
}
</style>