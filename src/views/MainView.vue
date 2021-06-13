<template>
  <div class="main-view">
    <main-tab-bar></main-tab-bar>
<!--    <main-agg-data></main-agg-data>-->
  </div>
</template>

<script>
  import MainTabBar from "../components/content/mainTabBar/MainTabBar";
  import MainAggData from "../components/content/mainAggData/MainAggData";
  export default {
    name: "MainView",
    components: {
      MainTabBar,
      MainAggData
    }
  }
</script>

<style scoped>

</style>