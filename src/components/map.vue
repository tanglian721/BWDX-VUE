<template>
  <div class="map">
    <baidu-map
      class="bm-view"
      ak="GnnDf8ovk67zURdyjdskw8c6spUMSPtG"
      :center="center"
      :zoom="zoom"
      @ready="handler"
    >
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
export default {
  name: "page-map",
  components: {
    BaiduMap
  },
  data() {
    return {
      center: { lng: 118.777021, lat: 32.083855 },
      zoom: 10
    };
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 118.777021;
      this.center.lat = 32.083855;
      this.zoom = 15;
    }
  }
};
</script>

<style lang="scss" scoped>
.map {
  .bm-view {
    width: 100%;
    height: 100%;
  }
}
</style>
