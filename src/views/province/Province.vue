<template>
  <div class="Province">
    <main-agg-data :general-data="genData"></main-agg-data>
    <pro-table></pro-table>
    <div></div>
  </div>
</template>

<script>
  import MainAggData from "../../components/content/mainAggData/MainAggData";
import ProTable from './table/proTable.vue';
  export default {
    name: "Province",
    components:{
      MainAggData,
      ProTable
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