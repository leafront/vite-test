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
        <div class="page-header-bg2"></div>
      </div>
      <div class="page-header-info cfff flex-column align-items">
        <h5 class="font-medium font-500">叽呤一下 演绎美好生活</h5>
        <p class="mt10">专业的本地生活短视频综合营销服务平台</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
  .page-header-bg{
    background: url("/src/images/header/header-bg2.jpg") center top no-repeat;
    background-size: cover;
    height: 47.03vw;
    position: relative;
  }
  .page-header-bg2{
    width: 49.7vw;
    height: 18.14vw;
    background: url("/src/images/header/header-bg3.png") center top no-repeat;
    background-size: 100% auto;
    position: absolute;
    left: 23vw;
    top: 14.8vw;
  }
  .page-header-info{
    position: absolute;
    bottom: 12%;
    left: 50%;
    transform: translateX(-50%);
    h5{
      font-size: 45px;
    }
    p{
      font-size: 30px;
    }
  }
  .page-header-nav{
    img{
      width: 170px;
      height: 40px;
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
</style>

<script lang="ts">
  import { defineComponent } from "vue"
  export default defineComponent({

  })
</script>
