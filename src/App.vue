<template>
  <div id="app">
    <router-view class="view"></router-view>
<!--    <main-view></main-view>-->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainView from "./views/MainView";
  import MainTabBar from "./components/content/mainTabBar/MainTabBar";
  export default {
    name: 'App',
    components: {
      MainView,
      MainTabBar
    }
  }
</script>
<style>
  @import "assets/css/base.css";
  #app {

  }
  .view{
    position: absolute;
    left: 275px;
    top: 138px;
  }

</style>
