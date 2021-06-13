<template>
  <div class="tab-bar-item" @click="barClick" :style="setStyle">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data(){
      return  {

      }
    },
    props:{
      path:String,
      activeStyle:Object
    },
    computed:{
      isAcitive(){
        return this.$route.path.indexOf(this.path)!==-1
      },
      setStyle(){
        return this.isAcitive ? this.activeStyle : {}
      }
    },
    methods:{
      barClick(){
        this.$router.replace(this.path)
        // this.$emit("activeStyle",this.isAcitive)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    width: 100%;
    height: 49px;
    line-height: 49px;
    cursor: pointer;
  }



</style>