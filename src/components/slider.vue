<template>
  <div class="slider">
    <hooper id="frame" :settings="hooperSettings">
      <slide>
        <img src="../assets/bookFair1.jpg" alt="" />
      </slide>
      <slide>
        <img src="../assets/bookFair2.jpg" alt="" />
      </slide>
      <slide>
        <img src="../assets/bookFair3.jpg" alt="" />
      </slide>
      <slide>
        <img src="../assets/bookFair4.jpg" alt="" />
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "page-slider",
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
  data() {
    return {
      hooperSettings: {
        autoPlay: true,
        centerMode: true,
        playSpeed: 3000
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.slider {
  #frame {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>