<template>
  <div class="page-img">

  <!-- <vue-rellax v-rellax={speed:-2}> -->
    <img class="info-img" v-if="BarDisplay" src="../assets/info_img_l.jpg" alt="very cool bg">
    <img class="info-img" v-else src="../assets/info_img_s.jpg" alt="very cool bg">
  <!-- </vue-rellax> -->
  </div>
</template>

<script>
    //  import VueRellax from 'vue-rellax'
     export default {
       name: "page-img",
    components: {
      // VueRellax
    },
   data() {
     return {
       speedFactor: 0.5,
       rellax: {
         speed: -2,
       }
     }
   },
   computed: {
        BarDisplay() {
      if (screen.width >= "1366") {
        return true;
      } else {
        return this.$store.state.navBarDisplay;
      }
    },
   },
  }
  
</script>

<style lang="scss" scoped>
.page-img{
  z-index: -1;
  height: 60vh;
.info-img{
  filter: blur(3px);
  object-fit: cover;
  width: 100%;
  height: 100%;
}
}
@media only screen and (min-width: 1366px) {
  .page-img{
  height: 50vh;
}
}

</style>