<template>
  <div class="main-tab-bar">
    <div class="name">疫情监控</div>
    <tab-bar :tabbar-style="tabBarStyle">
      <tab-bar-item path="/country" class="item" :active-style="itemStyle">
        <div>全国疫情数据</div>
      </tab-bar-item>
      <tab-bar-item path="/province" class="item" :active-style="itemStyle">
        <div>各省疫情数据</div>
      </tab-bar-item>
    </tab-bar>
  </div>

</template>

<script>
  import TabBar from "../../common/tabbar/TabBar";
  import TabBarItem from "../../common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    data(){
      return {
        isActive:null
      }
    },
    methods:{

    },
    computed:{
      itemStyle(){
        return {
          color: "#ffeb7b",
          backgroundColor: "rgba(0,0,0,.7)",

        }
      },
      tabBarStyle(){
        return {
          width: "100%",
        }
      }
    },
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  .main-tab-bar {
    width: 200px;
    height: 100%;
    background-color: rgba(0,0,0,.7);
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    position: fixed;
    left: 0;
    top: 0;
  }
  .name {
    width: 100%;
    height: 90px;
    /*background-color: rgb(255, 153, 148);*/
    line-height: 90px;
    font-size: 25px;
    color: #ffeb7b;
    cursor: default;
  }
  .item:hover{
    background-color: rgba(0,0,0,0.7);
  }

</style>