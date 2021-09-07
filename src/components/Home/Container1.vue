<template>
  <div class="page-container">
    <div class="active-user wrapper flex-column align-items">
      <div class="active-user-bg"></div>
      <div class="active-user-info flex space-between"
        ref="activeInfoEl"
      >
        <div class="active-user-info-item">
          <strong class="city-number">{{cityNumber}}</strong>
          <div class="active-user-des city-number flex">
            <i class="icon1"></i>
            <span class="fs24">30 城市覆盖</span>
          </div>
        </div>
        <div class="active-user-info-item">
          <strong class="talent-number">{{talentNumber}}</strong>
          <div class="active-user-des talent-number flex">
            <i class="icon2"></i>
            <span class="fs24">2万 KOL/KOC达人</span>
          </div>
        </div>
        <div class="active-user-info-item">
          <strong class="user-number">{{userNumber}}</strong>
          <div class="active-user-des user-number flex">
            <i class="icon3"></i>
            <span class="fs24">2亿 活跃用户</span>
          </div>
        </div>
      </div>
    </div>
    <div class="page-title">
      <h5 class="font-semibold font-600 cfff">优质达人探店</h5>
      <p class="cfff font-400">本地生活短视频营销专家</p>
    </div>
    <div class="active-shop flex justify-content">
      <div class="active-shop-info flex-column">
        <h5 class="font-semibold">覆盖广 / 更精准 / 强曝光</h5>
        <div class="active-shop-info-des flex">
          <div class="active-shop-info-text">
            <p>基于叽呤+抖快达人体系 为商家提供更优质的达人营销分发 和更广域的本地营销覆盖</p>
            <div class="active-shop-checked mt40 flex space-between">
              <div class="active-shop-checked-item flex align-items">
                <i></i>
                <span class="fs24">达人探店</span>
              </div>
              <div class="active-shop-checked-item flex align-items">
                <i></i>
                <span class="fs24">热门榜单</span>
              </div>
              <div class="active-shop-checked-item flex align-items">
                <i></i>
                <span class="fs24">视频话题</span>
              </div>
              <div class="active-shop-checked-item flex align-items">
                <i></i>
                <span class="fs24">门店加热</span>
              </div>
              <div class="active-shop-checked-item flex align-items">
                <i></i>
                <span class="fs24">团购销售</span>
              </div>
            </div>
          </div>
          <div class="active-shop-pic mt40"></div>
        </div>
      </div>
    </div>
    <div class="page-title">
      <h5 class="font-semibold font-600 cfff">达人直播矩阵</h5>
      <p class="cfff font-400">本地生活领域品牌直播专业阵营</p>
    </div>
    <div class="page-live flex justify-content flex-column align-items">
      <p>基于抖快等平台公域流量打造本地生活领域专业达人直播间+商家品牌直播间，为商家推流爆单，构建基于视频平台的直播私域业务</p>
      <div class="page-live-pic"></div>
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
        <p class="cfff">300+本地生活达人IP</p>
        <p class="cfff">成熟的本地达人孵化产业链</p>
        <span class="cfff mt20">影视专业合作明星+达人IP矩阵孵化，生产优质的营销视频内容</span>
        <span class="cfff">为本地生活品牌商家提供全产业链服务</span>
      </div>
      <div class="page-hatch-list wrapper flex flex-wrap">
        <div class="page-hatch-item flex-column align-items justify-content">
          <i class="icon1"></i>
          <span class="mt30 cfff font-medium font-500">影视明星合作</span>
        </div>
        <div class="page-hatch-item flex-column align-items justify-content">
          <i class="icon2"></i>
          <span class="mt30 cfff font-medium font-500">KOL达人孵化</span>
        </div>
        <div class="page-hatch-item flex-column align-items justify-content">
          <i class="icon3"></i>
          <span class="mt30 cfff font-medium font-500">专业视频制作</span>
        </div>
        <div class="page-hatch-item flex-column align-items justify-content">
          <i class="icon4"></i>
          <span class="mt30 cfff font-medium font-500">KOC达人学院</span>
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
  .page-business-wrapper{
    background: #f8f8f8;
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
      margin-bottom: 59px;
      font-size: 50px;
    }
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
    border-radius: 15px;
    border: 1px solid #979797;
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
    margin-top: 103px;
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
    padding-top: 194px;
    padding-bottom: 70px;
    background: #131415;
  }
  .page-hatch-info{
    i{
      margin-bottom: 22px;
      width: 193px;
      height: 39px;
      background: url("/src/images/home/logo-icon.png") no-repeat;
      background-size: 100% auto;
    }
    p{
      font-size: 50px;
    }
    span{
      font-size: 26px;
    }
  }
  .page-platform-pic{
    width: 100%;
    height: 895px;
    background: url("/src/images/home/platform.png") center top no-repeat;
  }
  .page-subject-item{
    width: 254px;
    height: 357px;
    background: #FFF;
    box-shadow: 0 2px 15px 0 rgba(176, 176, 176, 0.5);
    border-radius: 20px;
    cursor: pointer;
    transition: transform .3s linear;
    &:hover{
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
      margin-top: 45px;
      font-size: 28px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
    }
  }
  .page-subject-wrapper{
    padding-top: 141px;
    padding-bottom: 126px;
    background: rgba(119, 119, 119, 0.05);
  }
  .page-live-info{
    margin-top: 128px;
    padding-bottom: 100px;
    i{
      margin-bottom: 22px;
      width: 193px;
      height: 39px;
      background: url("/src/images/home/logo-icon.png") no-repeat;
      background-size: 100% auto;
    }
    p{
      font-size: 50px;
    }
    span{
      margin-top: 19px;
      color: #888;
      font-size: 26px;
    }
  }
  .page-live-pic{
    margin-top: 58px;
    width: 892px;
    height: 605px;
    background: url("/src/images/home/live.png") no-repeat;
    background-size: 100% auto;
  }
  .page-live{
    padding-top: 72px;
    p{
      font-size: 26px;
      color: #828282;
      width: 834px;
      height: 173px;
      text-align: center;
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
  .page-title{
    height: 230px;
    background: #170B02;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h5{
      font-size: 50px;
    }
    p{
      line-height: 50px;
      font-size: 36px;
    }
  }
  .active-shop-pic{
    width: 682px;
    height: 805px;
    background: url("/src/images/home/phone.png") no-repeat;
    background-size: 100% auto;
  }
  .active-shop-info-des{
    font-size: 26px;
    color: #828282;
    padding-top: 23px;
    p{
      color: #828282;
    }
  }
  .active-shop-info-text{
    width: 397px;
  }
  .active-shop{
    padding-top: 173px;
    padding-bottom: 173px;
  }
  .active-shop-info{
    h5{
      font-size: 40px;
      color: #1E1E1E;
    }
  }
  .active-user-info{
    width: 1100px;
    margin-top: 39px;
  }
  .active-user-bg{
    width: 1021px;
    height: 1046px;
    background: url("/src/images/home/active-user-bg.png") no-repeat;
    background-size: 100% auto;
  }
  .active-user-des{
    margin-top: 23px;
    align-items: flex-end;
    .icon1{
      width: 51px;
      height: 48px;
      background: url("/src/images/home/user-icon1.png") no-repeat;
      background-size: 100% auto;
    }
    .icon2{
      width: 38px;
      height: 48px;
      background: url("/src/images/home/user-icon2.png") no-repeat;
      background-size: 100% auto;
    }
    .icon3{
      width: 64px;
      height: 50px;
      background: url("/src/images/home/user-icon3.png") no-repeat;
      background-size: 100% auto;
    }
    span{
      color: #828282;
      margin-left: 10px;
    }
  }
  .active-user{
    padding-top: 200px;
    padding-bottom: 102px;
  }
  .active-user-info-item{
    strong{
      font-size: 85px;
      color: #1E1E1E;
      font-weight: bold;
    }
    .city-number{
      width: 194px;
    }
    .talent-number{
      width: 285px;
    }
    .user-number{
      width: 459px;
    }
  }
</style>

<script lang="ts">

  import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue"
  import BusinessScroll from "@/components/Home/BusinessScroll.vue"

  export default defineComponent({
    components: {
      BusinessScroll
    },
    setup() {

      const cityNumber = ref<string>("")
      const talentNumber = ref<string>("")
      const userNumber = ref<string>("")
      const activeInfoEl = ref<HTMLDivElement>(null)
      const timer = ref<any>(null)

      const setUserNumber = (targetNum, timeNum, stepNumVal, targetVal) => {
        let originNum = 0
        let stepNum = 0
        const timeId = setInterval(() => {
          if (originNum < targetNum) {
            timeNum -= 0.001
            let strNum = originNum.toString()
            // 数字比较少的时候直接用 + 1; 数字很大直接 +1 要很久才能调到最对应的数字，所有后三位数随机跳动的方式进行模拟生成
            if (targetNum.toString().length < 6) {
              stepNum += 1 // 这样才可以实现越跳越快的效果
              originNum = originNum + stepNum
              targetVal.value = originNum.toString()
            } else {
              stepNum += stepNumVal // 这样才可以实现越跳越快的效果
              originNum = originNum + stepNum
              const result =
                strNum.substr(0, strNum.length - 3) +
                Math.floor(Math.random() * 10) +
                Math.floor(Math.random() * 10) +
                Math.floor(Math.random() * 10)
              targetVal.value = result
            }
          } else {
            clearInterval(timeId)
            targetVal.value = targetNum
          }
        }, timeNum)
      }

      const pageScroll = () => {
        const realFunc = () => {
          const activeInfoTop = activeInfoEl.value.getBoundingClientRect().top
          if (window.innerHeight - activeInfoTop > 200) {
            setUserNumber(30, 150, 1, cityNumber)
            setUserNumber(20000, 8, 500, talentNumber)
            setUserNumber(200000000, 1, 3000, userNumber)
            window.removeEventListener("scroll", pageScroll, false)
            window.cancelAnimationFrame(timer)
          }
        }
        timer.value = window.requestAnimationFrame(realFunc)
      }

      onMounted(() => {
        window.addEventListener("scroll", pageScroll, false)
      })

      onBeforeUnmount(() => {
        window.cancelAnimationFrame(timer)
        window.removeEventListener("scroll", pageScroll, false)
      })

      return {
        timer,
        cityNumber,
        talentNumber,
        userNumber,
        activeInfoEl
      }
    }
  })

</script>
