<template>
  <div class="map">
    <baidu-map
      class="bm-view"
      ak="GnnDf8ovk67zURdyjdskw8c6spUMSPtG"
      :center="center"
      :zoom="zoom"
      @ready="handler"
    >
    <bm-marker :position="center" :dragging="true">
      <bm-label content="南京秉文东信<br>科技有限公司" :labelStyle="{color: 'red', fontSize : '0.9rem'}" :offset="{width: -35, height: 30}"/>
    </bm-marker>
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import BmMarker from "vue-baidu-map/components/overlays/Marker"
import BmLabel from "vue-baidu-map/components/overlays/Label"
export default {
  name: "page-map",
  components: {
    BaiduMap,
    BmMarker,
    BmLabel
  },
  data() {
    return {
      center: { lng: 118.777021, lat: 32.083855 },
      zoom: 10,
      time:""
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
