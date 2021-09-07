<template>
  <div class="scroll-view-wrapper">
    <page-header></page-header>
    <container></container>
    <page-footer></page-footer>
  </div>
</template>

<script lang="ts">

  import { defineComponent } from "vue"
  import PageHeader from "@/components/Common/Header.vue"
  import Container from "@/components/Home/Container.vue"
  import PageFooter from "@/components/Common/Footer.vue"

  export default defineComponent({
    components: {
      PageHeader,
      Container,
      PageFooter,
    }
  })

</script>

<style lang="scss">

</style>
