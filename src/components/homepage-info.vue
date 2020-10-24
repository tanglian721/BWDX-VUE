<template>
  <div class="homepage-info">
      <div id="about">
        <h2 id="text-header">公司介绍</h2>
        <p id="text-content">
        南京秉文东信科技有限公司前身为南京东大科技实业（集团）总公司东信分公司，是专门从事西文图书销售、信息咨询服务的专业性公司。也曾经是经省教育厅发文成立的“江苏省高校西文图书采编中心”所在单位。
        公司主营项目为外文原版图书及电子资源数据库，主要服务对象是省内外高校图书馆以及科研院所。从1996年至今，已为近百所高校及科研院所订购原版图书及数据库近8000万元。其中2012-2013年度图书贸易总额为1213万元。公司采用先进的计算机管理系统，具有较强的技术优势，在激烈的市场竞争中保持着强大的竞争力，位于同行前列。
        </p>
      </div>
      <!-- <div id="img">
        <div id="filter"></div>
        <img v-if="this.screen < '1366'" src="../assets/info_img_s.jpg" alt="">
        <img v-else src="../assets/info_img_l.jpg" alt="">
      </div> -->
  </div>
</template>

<script>
export default {
  name: "homepage-info",
  data() {
    return {
      screen: screen.width
    }
  },
};
</script>

<style lang="scss" scoped>
.homepage-info {
  widows: 100%;
  display: grid;
  justify-items: center;
    #about {
      padding: 15%;
      color: white;
      background-color:#00305b;
      #text-header {
        height: 10vh;
        font-size: 2rem;
      }
      #text-content {
        text-indent: 2rem;
        font-size: 1rem;
        line-height: 2rem;
      }
    }
    #img {
      z-index: -1;
      overflow: hidden;
      width: 100%;
      position: relative;
      #filter {
        z-index: 2;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background-color: #00386962;
      }
      img {
        filter: blur(1px);
        width: 100%;
      }
    }
}
@media only screen and (min-width: 1366px) {
  #text-header {
      text-align: center;
  }
   #img {
     height: 40vh;
   }
}

</style>