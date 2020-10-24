<template>
  <div>
  <parallax>
    <img src="../assets/info_img_l.jpg" alt="very cool bg">
  </parallax>
  </div>
</template>

<script>
     import Parallax from 'vue-parallaxy'
     export default {
       name: "page-img",
    components: {
      Parallax
    },
   data() {
     return {
       speedFactor: 0.5
     }
   },
  }
  
</script>

<style lang="scss" scoped>

</style>