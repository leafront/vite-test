<template>
  <div class="page-header-wrapper">
    <div class="page-header-bg pt30">
      <div class="page-header wrapper">
        <div class="page-header-nav flex space-between">
          <img class="cursor" src="/src/images/header/logo.png"/>
          <div class="page-nav-list flex fs20 font-400">
            <div class="page-nav-item active cfff cursor">
              <span>首页</span>
            </div>
            <div class="page-nav-item cfff cursor">
              <span>加入我们</span>
            </div>
            <div class="page-nav-item cfff cursor">
              <span>业务合作</span>
            </div>
          </div>
        </div>
        <div class="pager-header-des flex-column align-items">
          <i></i>
          <h5 class="cfff font-500 font-medium">叽呤一下 演绎美好生活</h5>
          <p class="mt10 cfff">专业的本地生活短视频综合营销服务平台</p>
        </div>
        <div class="page-header-recommend flex space-between">
          <div class="page-header-recommend-item fs24 font-medium font-500">
            <i class="icon1"></i>
            <span class="cfff mt30">全域视频营销</span>
          </div>
          <div class="page-header-recommend-item fs24 font-medium font-500">
            <i class="icon2"></i>
            <span class="cfff mt30">算法精准推送</span>
          </div>
          <div class="page-header-recommend-item fs24 font-medium font-500">
            <i class="icon3"></i>
            <span class="cfff mt30">达人矩阵</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
  .page-header-bg{
    background: url("/src/images/header/header-bg.png") center top no-repeat;
  }
  .page-header-wrapper{
    height: 845px;
    background: #170B02;
  }
  .page-header-nav{
    img{
      width: 170px;
      height: 40px;
    }
  }
  .page-header-recommend{
    width: 650px;
    margin: 59px auto 0;
  }
  .page-header-recommend-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .icon1{
      width: 76px;
      height: 57px;
      background: url("/src/images/header/recommend_01.png") no-repeat;
      background-size: 100% auto;
    }
    .icon2{
      width: 82px;
      height: 58px;
      background: url("/src/images/header/recommend_02.png") no-repeat;
      background-size: 100% auto;
    }
    .icon3{
      width: 69px;
      height: 63px;
      background: url("/src/images/header/recommend_03.png") no-repeat;
      background-size: 100% auto;
    }
  }
  .page-nav-item{
    width: 120px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    &:last-child{
      margin-left: -20px;
      margin-right: 0;
    }
    &.active{
      background: #FA541C;
      box-shadow: 6px 8px 10px -4px #9D3C1B;
      border-radius: 7px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
    }
  }
  .pager-header-des{
    margin-top: 130px;
    i{
      width: 120px;
      height: 120px;
      background: url("/src/images/header/header-des.png") no-repeat;
      background-size: 100% auto;
    }
    h5{
      font-size: 54px;
      line-height: 75px;
      margin-top: 28px;
    }
    p{
      font-size: 30px;
    }
  }
</style>

<script lang="ts">
  import { defineComponent } from "vue"
  export default defineComponent({

  })
</script>
