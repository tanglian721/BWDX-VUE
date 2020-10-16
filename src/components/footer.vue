<template>
  <div class="footer">
    <div id="footer-top">
      <div id="business-time">
        <p id="title">工作时间</p>
        <p id="days">周一 ~ 周五</p>
        <p id="time">09：00 ~ 16：30</p>
      </div>
      <div id="idcontact">
        <a href="tel:02584401099" id="cell">+86-25-84401099(电话)</a>
        <a href="tel:02584401099" id="fax">+86-25-84401099(传真)</a>
        <a href="mailto:BWDX@****.COM" id="email">BWDX@****.COM（电子邮箱）</a>
      </div>
    </div>
    <div id="splitter"></div>
    <p id="footer-bottom">南京秉文东信科技有限公司©copyright</p>
  </div>
</template>

<script>
export default {
  name: "page-footer"
};
</script>

<style lang="scss" scoped>
.footer {
  display: grid;
  justify-items: center;
  background-color: #003399;
  p, a {
    color: white;
    font-size: 0.6rem;
    padding: 2px 0;
  }
  #footer-top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 10px 0;
    > div {
      display: grid;
      justify-items: center;
    }
  }
  #splitter {
    height: 1px;
    background-color: white;
    width: 100%;
    filter: drop-shadow(10px 10px 10px 10px black);
  }
  #footer-bottom {
    font-size: 0.5rem;
    padding: 5px;
  }
}
</style>