<template>
  <div class="page-business">
    <h2 id="business-header">公司主要业务</h2>
    <div id="content-area">
      <ul id="business-content">
        <li>进口图书销售</li>
        <p>具体销售项目简介</p>
        <li>进口报刊销售</li>
        <p>具体销售项目简介</p>
        <li>电子图书销售</li>
        <p>具体销售项目简介</p>
        <li>电子期刊销售</li>
        <p>具体销售项目简介</p>
        <li>图书加工</li>
        <p>具体销售项目简介</p>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-business"
};
</script>

<style lang="scss" scoped>
.page-business {
  #business-header {
    line-height: 20vh;
    height: 20vh;
    padding-left: 10%;
    font-size: 2.5rem;
    font-weight: normal;
    color: #00305b;
    background-color: #eaf4f6;
  }
  #content-area {
    display: grid;
    justify-items: start;
    align-items: center;
    background-color: #fafafa;
    height: 80vh;
    #business-content {
      margin-top: -4vh;
      margin-left: 15%;
      font-size: 1.2rem;
      > li {
        padding-top: 4vh;
        color: #2e5578;
      }
      > p {
        font-size: 1rem;
        padding-top: 2vh;
        color: #2e5578;
      }
    }
  }
}
@media only screen and (min-width: 1366px) {
  .page-business {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 2fr 3fr;
    #content-area {
      width: 100%;
      height: 100%;
      #business-content {
        box-sizing: border-box;
        width: 100%;
        // height: 100%;
        font-size: 1.4rem;
      }
    }
  }
}
</style>