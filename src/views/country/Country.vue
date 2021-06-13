<template>
  <div class="Country">
    <main-agg-data :general-data="genData"></main-agg-data>
    <div>全国数据</div>
  </div>
</template>

<script>
  import MainAggData from "../../components/content/mainAggData/MainAggData";
  export default {
    name: "Country",
    components:{
      MainAggData
    },
    computed:{
      genData(){
        return {
          curDig:{data:12369,add:156},
          cumDig:{data:26589,add:156},
          susCas:{data:563,add:36},
          cumDea:{data:1568,add:36},
          cumCur:{data:16597,add:1598}
        }
      }
    }
  }
</script>

<style scoped>

</style>