<template>
  <div class="tab-bar" :style="style">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    props:{
      tabbarStyle:Object
    },
    computed:{
      style(){
        return this.tabbarStyle
      }
    }
  }
</script>

<style scoped>
  .tab-bar {

  }

</style>