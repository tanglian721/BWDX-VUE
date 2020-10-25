<template>
  <div class="map">
    <div id="map-title">
      <h2>
        LOCATION
      </h2>
    </div>
    <div id="map-area">
      <div id="map-border">
        <baidu-map
          class="bm-view"
          ak="GnnDf8ovk67zURdyjdskw8c6spUMSPtG"
          :center="center"
          :zoom="zoom"
          @ready="handler"
        >
          <bm-marker :position="center" :dragging="true">
            <bm-label
              content="南京秉文东信<br>科技有限公司"
              :labelStyle="{ color: 'red', fontSize: '0.9rem' }"
              :offset="{ width: -35, height: 30 }"
            />
          </bm-marker>
        </baidu-map>
      </div>
    </div>
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import BmMarker from "vue-baidu-map/components/overlays/Marker";
import BmLabel from "vue-baidu-map/components/overlays/Label";
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
      time: ""
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
  #map-title {
    box-sizing: border-box;
    height: 20vh;
    line-height: 20vh;
    padding: 0 10%;
    font-size: 1.5rem;
    width: 100%;
    background-color: #002444d0;
    color: white;
  }
  #map-area{
    width: 100%;
    height: 60vh;
    display: grid;
    align-items: center;
    justify-items: center;
  #map-border {
    // margin: 20% 10%;
    width: clamp(200px, 80vw, 600px);
    height: clamp(200px, 80vw, 600px);
    border-radius: 50%;
    overflow: hidden;
    .bm-view {
      width: 100%;
      height: 100%;
    }
  }
  }
}
@media only screen and (min-width: 1366px) {
  .map {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 2fr 3fr;

    #map-title {
      box-sizing: border-box;
      line-height: auto;
      font-size: 1.5rem;
      width: auto;
      background-color: #eaf4f6;
      color: #002444d0;
    }
     #map-area{
       height: 100%;
    #map-border {
      margin: 12.5vh 0;
      width: 50vh;
      height: 50vh;

      .bm-view {
        width: 100%;
        height: 100%;
      }
    }
     }
  }
}
</style>
