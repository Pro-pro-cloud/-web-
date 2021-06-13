<template>
  <div class="agg-data-con">
    <slot name="text" :style="propTextStyle" class="text"></slot>
    <slot name="num" :style="propNumStyle" class="num"></slot>
  </div>
</template>

<script>
  export default {
    name: "AggDataCon",
    props:{

    },
    computed:{

    }
  }
</script>

<style scoped>

</style>