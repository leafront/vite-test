<template>
  <div class="page-slider" :style="{'width': itemWidth + 'px', 'height': itemHeight + 'px'}">
    <div class="page-slider-wrapper flex" ref="pageSlider"
      @mouseover="onMouseover"
      @mouseout="onMouseout"
    >
      <div class="page-slider-item"
        v-for="item in list"
        :key="item.id"
        :style="{'backgroundImage': `url(${item.image})`, 'width': itemWidth + 'px', 'height': itemHeight + 'px'}"
      >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .page-slider{
    position: relative;
    overflow: hidden;
  }
  .page-slider-wrapper{
    position: absolute;
  }
  .page-slider-item{
    background-size: cover;
  }
</style>


<script lang="ts">

  import { defineComponent, ref, PropType, onMounted } from "vue"

  export interface ListItem {
    id: number;
    image: string;
  }

  export default defineComponent({
    props: {
      itemWidth: {
        type: Number,
        default: 288
      },
      itemHeight: {
        type: Number,
        default: 564
      },
      list: {
        type: Array as PropType<ListItem[]>,
        default: () => []
      }
    },
    setup(props) {
      let timer: any = null
      let pageIndex: number = 0
      const pageSlider = ref<HTMLDivElement>(null)

      const autoPlay = () => {
        pageIndex++
        const autoMoveX = -pageIndex * props.itemWidth
        const pageSliderVal = pageSlider.value
        if (pageIndex > props.list.length - 2) {
          pageIndex = 1
          setTimeout(() => {
            pageSliderVal.style.transition = 'none'
            setWrapperPos(-props.itemWidth)
          }, 310)
        }
        pageSliderVal.style.cssText = 'transition:300ms ease-in; transform: translate3d(' + autoMoveX + 'px, 0, 0)'
      }

      const startAutoPlay = () => {
        stopAutoPlay()
        timer = setInterval(() => autoPlay(), 3000)
      }
      const stopAutoPlay = () => {
        if (timer) {
          clearInterval(timer)
          timer = null
        }
      }

      const setWrapperPos = (x: number) => {
        pageSlider.value.style.transform = 'translate3d(' + x + 'px, 0, 0)'
      }

      const onMouseover = () => {
        stopAutoPlay()
      }

      const onMouseout = () => {
        startAutoPlay()
      }

      onMounted(() => {
        startAutoPlay()
        autoPlay()
      })

      return {
        pageSlider,
        onMouseover,
        onMouseout
      }
    }
  })

</script>
