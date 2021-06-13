<template>
    <div>
        <main-agg-data :general-data="genData"></main-agg-data>
        <div>proMap</div>
    </div>
</template>

<script>

import MainAggData from '../../../components/content/mainAggData/MainAggData.vue'

export default {
    name: 'proMap',
    data () {
        return {
            province : null
        }
    },
    components:{
        MainAggData
    },
    created () {
        this.province = this.$route.query.proname
        console.log(this.province);
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