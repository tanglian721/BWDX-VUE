<template>
  <div class="contact">
    <div id="contact-content">
      <div id="business-time">
        <p>工作时间:</p>
        <p>周一 ~ 周五</p>
        <p>9：00 am ~ 16：30 pm</p>
      </div>
      <div id="contact-person">
        <p>联系人:</p>
        <p>赵老师，王老师</p>
      </div>
      <div id="tel">
        <p>联系电话:</p>
        <a href="tel:02584401099" id="cell">+86-25-84401099(电话)</a>
      </div>
      <div id="fax">
        <p>传真:</p>
        <a href="tel:02584401099" id="fax">+86-25-84401099(传真)</a>
      </div>
      <div id="email">
        <p>电子邮箱:</p>
        <a href="mailto:BWDX@****.COM" id="email">BWDX@****.COM（电子邮箱）</a>
      </div>
      <div id="address">
        <p>公司地址:</p>
        <p>江苏省南京市鼓楼区模范马路66号 南邮大厦 2314号</p>
      </div>
    </div>
    <div class="contact-bg"></div>
  </div>
</template>

<script>
export default {
  name: "page-contact"
};
</script>

<style lang="scss" scoped>
.contact {
  z-index: 30;
  position: relative;
  width: 100%;
  height: 70vh;
  .contact-bg {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-image: url("../assets/contactbg .jpeg");
    background-size: cover;
    background-color: #00315b4d;
    filter: blur(4px);
    filter: brightness(50%);
  }
  #contact-content {
    z-index: 40;
    padding: 10%;
  > div {
    margin-top: 3vh;
    p,
    a {
      font-size: 1rem;
      font-family: ZoomlaXSongExtraLight;
      color: white;
    }
  }
  }
}
</style>