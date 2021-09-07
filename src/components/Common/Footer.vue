<template>
  <div class="page-footer">
    <div class="page-footer-top flex justify-content">
      <div class="page-footer-left flex-column">
        <div class="page-footer-left-logo flex align-items">
          <i class="logo-icon"></i>
          <strong class="cfff font-500 ml15 font-medium">叽呤</strong>
        </div>
        <span class="cfff font-medium font-500">本地生活短视频综合营销服务提供商</span>
        <p class="cfff mt25 fs16 font-medium font-500">专业 | 专注 | 高效</p>
        <div class="page-footer-qrcode mt15 flex">
          <img src="/src/images/footer/footer-qrcode-01.png"/>
          <img src="/src/images/footer/footer-qrcode-02.png"/>
          <img src="/src/images/footer/footer-qrcode-03.png"/>
          <img src="/src/images/footer/footer-qrcode-04.png"/>
        </div>
      </div>
      <div class="page-footer-right flex-column">
        <i class="logo-icon"></i>
        <p class="font-600 cfff font-semibold">上海灵机一动数字技术有限公司</p>
        <div class="page-footer-concat fs16">
          <div class="page-footer-concat-item flex align-items">
            <i class="icon-address"></i>
            <span class="cfff">上海市徐汇区古美路1528号 A3幢 5层</span>
          </div>
          <div class="page-footer-concat-item flex align-items">
            <i class="icon-tel"></i>
            <span class="cfff">400-865-6688</span>
          </div>
          <div class="page-footer-concat-item flex align-items">
            <i class="icon-email"></i>
            <span class="cfff">info@yfk.cn</span>
          </div>
        </div>
      </div>
    </div>
    <div class="page-footer-copy fs16 cfff flex justify-content">
<!--      <span class="pr20">上海灵机一动数字技术有限公司</span>-->
      <strong class="cursor" @click="pageAction">备案号：沪ICP备2021018010号-1</strong>
    </div>
  </div>
</template>

<style lang="scss">
  .page-footer-concat{
    margin-top: 24px;
  }
  .page-footer-copy {
    border-top: 1px solid #414242;
    padding-top: 18px;
    padding-bottom: 26px;
  }
  .page-footer-qrcode{
    img{
      width: 56px;
      height: auto;
      margin-right: 16px;
    }
  }
  .page-footer-concat-item{
    margin-bottom: 14px;
    i{
      margin-right: 14px;
    }
    .icon-address{
      width: 14px;
      height: 18px;
      background:url("/src/images/footer/address-icon.png");
      background-size: 100% auto;
    }
    .icon-tel{
      width: 14px;
      height: 18px;
      background:url("/src/images/footer/tel-icon.png");
      background-size: 100% auto;
    }
    .icon-email{
      width: 20px;
      height: 16px;
      background:url("/src/images/footer/email-icon.png");
      background-size: 100% auto;
    }
    &:last-child{
      margin-bottom: 0;
    }
  }
  .page-footer{
    background: url("/src/images/footer/footer-bg.png") #131415 no-repeat center 51px;
  }
  .page-footer-top{
    padding-top: 98px;
    padding-bottom: 108px;
  }
  .page-footer-right{
    .logo-icon{
      width: 242px;
      height: 57px;
      background: url("/src/images/footer/logo.png") no-repeat;
      background-size: 100% auto;
    }
    p{
      font-size: 24px;
      margin-top: 24px;
    }
  }
  .page-footer-left{
    margin-right: 112px;
    span{
      margin-top: 24px;
      font-size: 24px;
    }
  }
  .page-footer-left-logo{
    .logo-icon{
      width: 55px;
      height: 55px;
      background: url("/src/images/header/header-des.png") no-repeat;
      background-size: 100% auto;
    }
    strong{
      font-size: 39px;
    }
  }
</style>

<script lang="ts">
  import { defineComponent } from "vue"
  export default defineComponent({
    setup() {
      const pageAction = () => {
        location.href = 'https://beian.miit.gov.cn/#/Integrated/index'
      }
      return {
        pageAction
      }
    }
  })
</script>
