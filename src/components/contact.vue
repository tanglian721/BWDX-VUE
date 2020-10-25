<template>
  <div class="contact" id="contact">
    <div id="contact-title">
      <h2>CONTACT <br />& ADDRESS</h2>
    </div>
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
  height: 90vh;
  .contact-bg {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-image: url("../assets/contactbg .jpeg");
    background-size: cover;
    filter: blur(4px);
  }
  #contact-title {
    box-sizing: border-box;
    height: 20vh;
    padding: 10%;
    font-size: 1.5rem;
    width: 100%;
    background-color: #002444d0;
    color: white;
  }
  #contact-content {
    box-sizing: border-box;
    background-color: #01182c7c;
    z-index: 40;
    padding: 10%;
    height: 70vh;
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
@media only screen and (min-width: 1366px) {
  .contact {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 2fr 3fr;
    #contact-title {
      width: 80%;
      margin-left: 10vw;
    }
    #contact-content {
      > div {
        p,
        a {
          margin-top: -0.5vh;
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>