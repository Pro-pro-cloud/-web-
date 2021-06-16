<template>
    <div>
        <main-agg-data :general-data="genData"></main-agg-data>
        <div>proMap</div>
        <div class="btn">
            <div class="btn-item" @click="btnClick(index)" v-for="(item,index) in btnTittle" :key="index">
            <button>{{item}}</button>
            </div>
        </div>
        <prochart :lineValue='chartData'></prochart>
    </div>
</template>

<script>

import MainAggData from '../../../components/content/mainAggData/MainAggData.vue'
import Prochart from '../../../components/content/prochart/prochart.vue'

export default {
    name: 'proMap',
    data () {
        return {
            province : null,
            btnTittle : ['当前确诊','累计确诊'] ,
            chartData : [820, 932, 901, 934, 1290, 1330, 1320],
            cnum : [820, 932, 901, 934, 1290, 1330, 1320],
            addnum : [222,555,444,680,20,1500,2100]
        }
    },
    components:{
        MainAggData,
        Prochart
    },
    created () {
        this.province = this.$route.query.proname
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
    },
    methods : {
        btnClick(index){
            if(index === 0){
                this.chartData = this.cnum
            } else if (index === 1) {
                this.chartData = this.addnum
            } else {
                this.chartData = this.cnum
            }
        }
    }
}
</script>

<style scoped>
.btn{
    display: flex;
    width: 1160px;
    height: 49px;
}
.btn .btn-item{
    flex:1
}
.btn .btn-item button{
    width: 100%;
    height: 49px;
}
</style>