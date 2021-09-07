<template>
  <div class="page-container">
    <div class="active-user wrapper">
      <div class="active-user-info flex justify-content"
      >
        <div class="active-user-info-item">
          <div class="active-user-des city-number flex-column align-items">
            <img src="/src/images/home/active-user01.png"/>
            <div class="active-user-des-tile flex align-items">
              <b class="font-semibold font-600">30</b>
              <span class="fs24">+</span>
            </div>
            <div class="active-user-des-number flex">
              <i class="icon1"></i>
              <span class="fs24">城市覆盖</span>
            </div>
          </div>
        </div>
        <div class="active-user-info-item">
          <div class="active-user-des city-number flex-column align-items">
            <img src="/src/images/home/active-user02.png"/>
            <div class="active-user-des-tile flex align-items">
              <b class="font-semibold font-600">2</b>
              <i class="font-semibold font-600">万</i>
              <span class="fs24">+</span>
            </div>
            <div class="active-user-des-number flex">
              <i class="icon1"></i>
              <span class="fs24">KOL/KOC达人</span>
            </div>
          </div>
        </div>
        <div class="active-user-info-item">
          <div class="active-user-des city-number flex-column align-items">
            <img src="/src/images/home/active-user03.png"/>
            <div class="active-user-des-tile flex align-items">
              <b class="font-semibold font-600">2</b>
              <i class="font-semibold font-600">亿</i>
              <span class="fs24">+</span>
            </div>
            <div class="active-user-des-number flex">
              <i class="icon1"></i>
              <span class="fs24">活跃用户</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-map wrapper flex justify-content">
      <div class="page-map-info mr40">
        <h5 class="font-500 font-medium">业务覆盖30+城市</h5>
        <div class="page-map-text-list">
          <div class="page-map-text-item page-map-text-item-bg1">
            <span>专注互联网消费科技服务领域</span>
            <i></i>
          </div>
          <div class="page-map-text-item page-map-text-item-bg2">
            <span>专业助力赋能本地生活实体商家</span>
            <i></i>
          </div>
          <div class="page-map-text-item page-map-text-item-bg3">
            <span>大数据算法帮助商家精准定位消费群体</span>
            <i></i>
          </div>
          <div class="page-map-text-item page-map-text-item-bg4">
            <span>线上线下为全国合作商户及机构提供营销赋能</span>
            <i></i>
          </div>
        </div>
      </div>
      <div class="page-map-pic"></div>
    </div>
    <div class="active-shop flex justify-content align-items">
      <div class="active-shop-info active-shop-info-right">
        <h5 class="font-semibold font-600">优质达人探店</h5>
        <strong class="pt10 pb10">本地生活短视频营销专家</strong>
        <div class="active-shop-button flex">
          <span class="font-medium font-500">覆盖广</span>
          <span class="font-medium font-500">更精准</span>
          <span class="font-medium font-500">强曝光</span>
        </div>
        <div class="active-shop-info-des flex">
          <div class="active-shop-info-text fs18">
            <p>基于叽呤 + 抖快达人体系</p>
            <p>为商家提供更优质的达人营销分发</p>
            <p>和更广域的本地营销覆盖</p>
            <div class="active-shop-checked mt20 flex space-between">
              <div class="active-shop-checked-item flex align-items">
                <i></i>
                <span class="fs24 font-medium font-500">达人探店</span>
              </div>
              <div class="active-shop-checked-item flex align-items">
                <i></i>
                <span class="fs24 font-medium font-500">热门榜单</span>
              </div>
              <div class="active-shop-checked-item flex align-items">
                <i></i>
                <span class="fs24 font-medium font-500">视频话题</span>
              </div>
              <div class="active-shop-checked-item flex align-items">
                <i></i>
                <span class="fs24 font-medium font-500">门店加热</span>
              </div>
              <div class="active-shop-checked-item flex align-items">
                <i></i>
                <span class="fs24 font-medium font-500">团购销售</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <slider
        :list="shopList"
      >
      </slider>
    </div>
    <div class="active-live flex justify-content align-items">
      <slider
        :list="liveList"
      >
      </slider>
      <div class="active-shop-info active-shop-info-left">
        <h5 class="font-semibold font-600">达人直播矩阵</h5>
        <strong class="pt10 pb10">本地生活领域品牌直播专业阵营</strong>
        <div class="active-shop-button flex">
          <span class="font-medium font-500">专业达人</span>
          <span class="font-medium font-500">商家品牌</span>
          <span class="font-medium font-500">本地生活</span>
        </div>
        <div class="active-shop-info-des flex">
          <div class="active-shop-info-text fs18">
            <p>基于抖快等平台公域流量打造本地生活领域专业达</p>
            <p>人直播间 + 商家品牌直播间，为商家推流爆单，构</p>
            <p class="tr">建基于视频平台的直播私域业务</p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-live-info wrapper flex-column">
      <i></i>
      <p class="c232323">海量短视频分发</p>
      <p class="c232323">算法精准推送提升商家获客效率</p>
      <span>AI算法系统赋能商户视频数字化营销闭环</span>
    </div>
    <div class="page-subject-wrapper">
      <div class="page-subject wrapper flex space-between">
        <div class="page-subject-item flex-column align-items justify-content">
          <i class="icon1"></i>
          <p class="c232323">达人视频<br/>智能分发</p>
        </div>
        <div class="page-subject-item flex-column align-items justify-content">
          <i class="icon2"></i>
          <p class="c232323">本地生活用户<br/>画像分析</p>
        </div>
        <div class="page-subject-item flex-column align-items justify-content">
          <i class="icon3"></i>
          <p class="c232323">兴趣内容<br/>采集分析</p>
        </div>
        <div class="page-subject-item flex-column align-items justify-content">
          <i class="icon4"></i>
          <p class="c232323">任务智能<br/>推送</p>
        </div>
      </div>
    </div>
    <div class="page-platform-pic"></div>
    <div class="page-hatch">
      <div class="page-hatch-info wrapper flex-column">
        <i></i>
        <p class="font-500 font-medium">300+本地生活达人IP</p>
        <p class="font-500 font-medium">成熟的本地达人孵化产业链</p>
        <span class="mt30">影视专业合作明星+达人IP矩阵孵化，生产优质的营销视频内容</span>
        <span>为本地生活品牌商家提供全产业链服务</span>
      </div>
      <div class="page-hatch-list wrapper flex flex-wrap">
        <div class="page-hatch-item flex-column align-items justify-content">
          <i class="icon1"></i>
          <span class="mt30 font-medium font-500">影视明星合作</span>
        </div>
        <div class="page-hatch-item flex-column align-items justify-content">
          <i class="icon2"></i>
          <span class="mt30 font-medium font-500">KOL达人孵化</span>
        </div>
        <div class="page-hatch-item flex-column align-items justify-content">
          <i class="icon3"></i>
          <span class="mt30 font-medium font-500">专业视频制作</span>
        </div>
        <div class="page-hatch-item flex-column align-items justify-content">
          <i class="icon4"></i>
          <span class="mt30 font-medium font-500">KOC达人学院</span>
        </div>
      </div>
    </div>
    <div class="page-cooperation wrapper flex-column align-items">
      <i class="logo-icon"></i>
      <h5 class="font-medium font-500">合作平台</h5>
      <div class="page-cooperation-list flex flex-wrap justify-content">
        <div class="page-cooperation-item flex-column align-items">
          <div class="page-cooperation-item-pic flex align-items justify-content">
            <img src="/src/images/home/cooperation-01.png"/>
          </div>
          <span class="fs24 pt20">微博</span>
        </div>
        <div class="page-cooperation-item flex-column align-items">
          <div class="page-cooperation-item-pic flex align-items justify-content">
            <img src="/src/images/home/cooperation-02.png"/>
          </div>
          <span class="fs24 pt20">抖音</span>
        </div>
        <div class="page-cooperation-item flex-column align-items">
          <div class="page-cooperation-item-pic flex align-items justify-content">
            <img src="/src/images/home/cooperation-03.png"/>
          </div>
          <span class="fs24 pt20">快手</span>
        </div>
        <div class="page-cooperation-item flex-column align-items">
          <div class="page-cooperation-item-pic flex align-items justify-content">
            <img src="/src/images/home/cooperation-04.png"/>
          </div>
          <span class="fs24 pt20">微信视频号</span>
        </div>
        <div class="page-cooperation-item flex-column align-items">
          <div class="page-cooperation-item-pic flex align-items justify-content">
            <img src="/src/images/home/cooperation-05.png"/>
          </div>
          <span class="fs24 pt20">小红书</span>
        </div>
      </div>
    </div>
    <div class="page-business-wrapper">
      <div class="page-business wrapper flex-column align-items">
        <i class="logo-icon"></i>
        <h5 class="font-medium font-500">合作商家</h5>
        <business-scroll></business-scroll>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped="scoped">
  .active-shop-checked{
    flex-wrap: wrap;
  }
  .active-shop-button{
    span{
      width: 125px;
      height: 40px;
      border-radius: 24px;
      background: #FA541C;
      line-height: 40px;
      text-align: center;
      font-size: 26px;
      color: #fff;
      margin-right: 16px;
      &:last-child{
        margin-right: 0;
      }
    }
  }
  .page-map{
    padding-bottom: 98px;
  }
  .page-map-info{
    h5{
      font-size: 45px;
      color: #373737;
      padding-bottom: 64px;
    }
  }
  .page-map-text-item{
    width: 453px;
    height: 76px;
    display: flex;
    box-shadow: 0 5px 13px 4px rgba(236, 236, 236, 0.5);
    border-radius: 4px;
    padding-left: 20px;
    padding-right: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;
    &:last-child{
      margin-bottom: 0;
    }
    i{
      width: 18px;
      height: 13px;
      background: url("/src/images/home/icon-checked-02.png") no-repeat;
      background-size: 18px auto;
    }
    span{
      font-size: 18px;
      color: #fff;
    }
  }
  .page-map-text-item-bg1{
    background: #FA541C;
  }
  .page-map-text-item-bg2{
    background: #FA8C16;
  }
  .page-map-text-item-bg3{
    background: #FFC53D;
  }
  .page-map-text-item-bg4{
    background: #FFEC3D;
  }
  .page-business-wrapper{
    background: #FEFCFA;
  }
  .page-business{
    padding-top: 79px;
    padding-bottom: 85px;
    .logo-icon{
      width: 193px;
      height: 39px;
      background: url("/src/images/home/logo-icon.png") no-repeat;
      background-size: 100% auto;
    }
    h5{
      margin-top: 22px;
      margin-bottom: 87px;
      font-size: 50px;
    }
  }
  .page-map-pic{
    width: 667px;
    height: 498px;
    background: url("/src/images/home/map-city-bg.png") no-repeat;
    background-size: 100% auto;
    margin-top: 110px;
  }
  .page-cooperation-item{
    margin-right: 45px;
    margin-bottom: 52px;
    transition: transform .3s linear;
    span{
      color: #351901;
    }
    &:last-child{
      margin-right: 0;
    }
    &:hover{
      transform: scale(1.1);
    }
  }
  .page-cooperation-item-pic{
    width: 198px;
    height: 122px;
  }
  .page-cooperation{
    padding-top: 120px;
    padding-bottom: 88px;
    .logo-icon{
      width: 193px;
      height: 39px;
      background: url("/src/images/home/logo-icon.png") no-repeat;
      background-size: 100% auto;
    }
    h5{
      margin-top: 22px;
      margin-bottom: 55px;
      font-size: 50px;
    }
  }
  .page-hatch-list{
    margin-top: 109px;
    padding-left: 94px;
  }
  .page-hatch-item{
    margin-right: 207px;
    margin-bottom: 75px;
    &:nth-child(2n) {
      margin-right: 0;
    }
    span{
      font-size: 30px;
      color: #373737;
    }
    i{
      width: 360px;
      height: 234px;
      background-repeat: no-repeat;
      background-size: 100% auto;
      transition: transform .3s linear;
      &:hover{
        transform: scale(1.1);
      }
    }
    .icon1{
      background-image: url("/src/images/home/hatch-item-01.png");
    }
    .icon2{
      background-image: url("/src/images/home/hatch-item-02.png");
    }
    .icon3{
      background-image: url("/src/images/home/hatch-item-03.png");
    }
    .icon4{
      background-image: url("/src/images/home/hatch-item-04.png");
    }
  }
  .page-hatch{
    padding-top: 153px;
    padding-bottom: 52px;
    background: #FEFCFA;
  }
  .page-hatch-info{
    color: #373737;
    i{
      margin-bottom: 29px;
      width: 193px;
      height: 39px;
      background: url("/src/images/home/logo-icon.png") no-repeat;
      background-size: 100% auto;
    }
    p{
      font-size: 45px;
    }
    span{
      font-size: 26px;
      color: rgba(55, 55, 55, 0.69);
    }
  }
  .page-platform-pic{
    width: 100%;
    height: 774px;
    background: url("/src/images/home/platform1.png") center top no-repeat;
  }
  .page-subject-item{
    width: 254px;
    padding: 59px 0;
    background: #FFF;
    transition: transform .3s linear;
    &:hover{
      box-shadow: 0 2px 15px 0 rgba(176, 176, 176, 0.5);
      border-radius: 20px;
      transform: translateY(-10px);
    }
    i{
      width: 113px;
      height: 113px;
      background-repeat: no-repeat;
      background-size: 100% auto;
    }
    .icon1{
      background-image: url("/src/images/home/subject-icon-01.png");
    }
    .icon2{
      background-image: url("/src/images/home/subject-icon-02.png");
    }
    .icon3{
      background-image: url("/src/images/home/subject-icon-03.png");
    }
    .icon4{
      background-image: url("/src/images/home/subject-icon-03.png");
    }
    p{
      margin-top: 30px;
      font-size: 24px;
      text-align: center;
    }
  }
  .page-subject-wrapper{
    padding-top: 144px;
    padding-bottom: 100px;
  }
  .page-live-info{
    padding-top: 142px;
    i{
      margin-bottom: 29px;
      width: 193px;
      height: 39px;
      background: url("/src/images/home/logo-icon.png") no-repeat;
      background-size: 100% auto;
    }
    p{
      font-size: 45px;
    }
    span{
      margin-top: 29px;
      color: #888;
      font-size: 26px;
    }
  }
  .active-shop-checked-item{
    color: #1E1E1E;
    margin-bottom:20px;
    i{
      width: 30px;
      height: 30px;
      background: url("/src/images/home/icon-checked.png") no-repeat;
      background-size: 100% auto;
    }
    span{
      margin-left: 11px;
      color: #1E1E1E;
      width: 150px;
    }
  }
  .active-shop-info-des{
    padding-top: 20px;
    p{
      color: rgba(55, 55, 55, 0.7);
    }
  }
  .active-shop-info-text{
    max-width: 405px;
  }
  .active-shop{
    padding-top: 116px;
    padding-bottom: 147px;
    background: #FEFCFA;
  }
  .active-live{
    padding-bottom: 141px;
    background: #FEFCFA;
  }
  .active-shop-info{
    h5{
      font-size: 45px;
      color: #373737;
    }
    strong{
      color: rgba(55, 55, 55, 0.69);
      font-size: 26px;
      display: block;
    }
  }
  .active-shop-info-right{
     margin-right: 250px;
  }
  .active-shop-info-left{
    margin-left: 250px;
  }
  .active-user-info{
    padding-top: 144px;
    padding-bottom: 136px;
  }
  .active-user-bg{
    width: 1021px;
    height: 1046px;
    background: url("/src/images/home/active-user-bg.png") no-repeat;
    background-size: 100% auto;
  }
  .active-user-des-tile{
    padding-top: 33px;
    b{
      font-size: 60px;
    }
    i{
      font-size: 36px;
    }
  }
  .active-user-des-number{
    i{
      margin-right: 6px;
    }
    .icon1{
      width: 29px;
      height: 27px;
      background: url("/src/images/home/user-icon4.png") no-repeat;
      background-size: 100% auto;
    }
    .icon2{
      width: 22px;
      height: 28px;
      background: url("/src/images/home/user-icon5.png") no-repeat;
      background-size: 100% auto;
    }
    .icon3{
      width: 32px;
      height: 25px;
      background: url("/src/images/home/user-icon6.png") no-repeat;
      background-size: 100% auto;
    }
    span{
      color: #828282;
    }
  }
  .active-user-info-item{
    width: 375px;
    box-shadow: 3px 3px 9px 1px #EFEFEF;
    border-radius: 8px;
    padding-bottom: 27px;
    margin-right: 18px;
    transition: transform .3s linear;
    &:hover{
      transform: translateY(-10px);
    }
    &:last-child{
      margin-right: 0;
    }
  }
</style>

<script lang="ts">

import {defineComponent, ref} from "vue"
  import BusinessScroll from "@/components/Home/BusinessScroll.vue"
  import Slider, { ListItem } from "@/components/Home/Slider.vue"

  export default defineComponent({
    components: {
      BusinessScroll,
      Slider
    },
    setup() {
      const shopList = ref<ListItem[]>([
        {
          id: 1,
          image: "/web-static/images/slider-03.png"
        }, {
          id: 2,
          image: "/web-static/images/slider-01.png"
        }, {
          id: 3,
          image: "/web-static/images/slider-02.png"
        }, {
          id: 4,
          image: "/web-static/images/slider-03.png"
        }, {
          id: 5,
          image: "/web-static/images/slider-01.png"
        }
      ])

      const liveList = ref<ListItem[]>([
        {
          id: 1,
          image: "/web-static/images/slider-06.png"
        }, {
          id: 2,
          image: "/web-static/images/slider-04.png"
        }, {
          id: 3,
          image: "/web-static/images/slider-05.png"
        }, {
          id: 4,
          image: "/web-static/images/slider-06.png"
        }, {
          id: 5,
          image: "/web-static/images/slider-04.png"
        }
      ])
      return {
        shopList,
        liveList
      }
    }
  })

</script>
