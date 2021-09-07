<template>
  <div class="page-business-scroll-list-wrapper">
    <div class="page-business-scroll-list flex"
      :style="{'left': disLeft + 'px'}"
      ref="businessScroll"
      @mouseover="onMouseover"
      @mouseout="onMouseout"
    >
      <div class="page-business-scroll-item"
        v-for="(item, index) in businessList"
        :key="item.id + index"
      >
        <img :src="item.image"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .page-business-scroll-list{
    position: absolute;
    left: 0;
    top: 0;
  }
  .page-business-scroll-list-wrapper{
    width: 100%;
    height: 166px;
    overflow-x: hidden;
  }
  .page-business-scroll-list-wrapper{
    position: relative;
  }
  .page-business-scroll-item{
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-shrink: 0;
    img{
      width: 120px;
      height: 120px;
      border-radius: 50%;
      box-shadow: 0 2px 7px 5px rgba(235, 235, 235, 0.5);
    }
    &:last-child{
      margin-right: 0;
    }
  }
</style>

<script lang="ts">
  import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue"

  interface ListItem {
    id: number;
    image: string;
  }

  export default defineComponent({
    setup() {

      let timer: any = null
      const list: ListItem[] = [{
        id: 1,
        image: "/web-static/images/business-01.png"
      },{
        id: 2,
        image: "/web-static/images/business-02.png"
      }, {
        id: 3,
        image: "/web-static/images/business-03.png"
      },{
        id: 4,
        image: "/web-static/images/business-04.png"
      }, {
        id: 5,
        image: "/web-static/images/business-05.png"
      },{
        id: 6,
        image: "/web-static/images/business-06.png"
      }, {
        id: 7,
        image: "/web-static/images/business-07.png"
      },{
        id: 8,
        image: "/web-static/images/business-08.png"
      }, {
        id: 9,
        image: "/web-static/images/business-09.png"
      },{
        id: 10,
        image: "/web-static/images/business-10.png"
      }, {
        id: 11,
        image: "/web-static/images/business-11.png"
      }, {
        id: 12,
        image: "/web-static/images/business-12.png"
      }, {
        id: 13,
        image: "/web-static/images/business-13.png"
      },{
        id: 14,
        image: "/web-static/images/business-14.png"
      },{
        id: 15,
        image: "/web-static/images/business-15.png"
      }]
      const businessList = ref<ListItem[]>([...list, ...list])

      const businessScroll = ref<HTMLDivElement>(null)
      const disLeft = ref<number>(0)

      const startScroll = () => {
        const businessScrollVal = businessScroll.value
        const iSpeed = -2
        const elWidth = businessScrollVal.offsetWidth
        timer = setInterval(() => {
          if (disLeft.value < -elWidth / 2 ) {
            disLeft.value = 0
          }
          disLeft.value += iSpeed
        }, 40)
      }

      const onMouseover = () => {
        clearInterval(timer)
      }

      const onMouseout = () => {
        startScroll()
      }

      onMounted(() => {
        startScroll()
      })

      onBeforeUnmount(() => {
        clearInterval(timer)
      })

      return {
        businessList,
        timer,
        disLeft,
        businessScroll,
        onMouseout,
        onMouseover
      }
    }
  })
</script>
