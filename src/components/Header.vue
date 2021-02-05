<template>
  <div class="header">
    <img id="logo" src="../assets/logo.png" alt="" />
    <div id="name">
      <p id="name-chi">南京秉文东信科技有限公司</p>
      <p id="name-eng">Nanjing BW Southeast Information Technologies Co.,Ltd</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-header",
  methods: {
    navBarToggle() {
      console.log("a");
      this.$store.commit("navBarToggle");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: white;
  z-index: 80;
  width: 100%;
  height: 15vh;
  position: sticky;
  top: 0;
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 7fr;
  #logo {
    height: 4em;
    justify-self: end;
  }
  #name {
    justify-self: start;
    color: #00305b;
    margin-left: 3vw;
    // width: 90%;
    #name-chi {
      font-family: "Noto Sans SC", sans-serif;
      text-align: center;
    }
    #name-eng {
      font-size: 0.6rem;
      font-family: "Oswald", sans-serif;
      text-align: center;
    }
  }
}

@media only screen and (min-width: 1366px) {
  .header {
    grid-template-columns: 1fr 1fr;
    #logo {
      height: 4.5em;
      margin-bottom: 2vh;
      align-self: end;
    }
    #name {
      align-self: end;
      margin-bottom: 3vh;
      margin-left: 2vw;
      #name-chi {
        font-size: 1.4rem;
        text-align: left;
      }
      #name-eng {
        font-size: 1rem;
        text-align: left;
      }
    }
  }
}
</style>