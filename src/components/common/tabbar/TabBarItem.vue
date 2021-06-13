<template>
  <div class="tab-bar-item" @click="barClick" :class="{active:!isAcitive}">
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
    },
    computed:{
      isAcitive(){
        return this.$route.path.indexOf(this.path)===-1
      }
    },
    methods:{
      barClick(){
        this.$router.replace(this.path)
        this.$emit("activeStyle",this.isAcitive)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    width: 100%;
    height: 49px;
    line-height: 49px;
    /*background-color: red;*/
    cursor: pointer;
  }
  .tab-bar-item:hover{
    background-color: rgba(0,0,0,.7);
  }
  .active {
    color: #ffeb7b;
    background-color: rgba(0,0,0,.7);
  }

</style>