<template>
    <div>
        <main-agg-data :general-data="genData"></main-agg-data>
        <div class="hid"></div>
        <div class="proMap">proMap</div>
        <div class="btn">
            <div class="btn-item" @click="btnClick(index)" v-for="(item,index) in btnTittle" :key="index">
                <div @click="btnitemClick(index)" :class="{backup : index !== currentIndex, active : index === currentIndex}">{{item}}</div>
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
            btnTittle : ['新增确诊/疑似','累计确诊/疑似','累计死亡/治愈'] ,
            chartData : [],
            newAdd : {cnum :[820, 932, 901, 934, 1290, 1330, 1320],snum : [200,550,650,800,100,30,17],name : ['新增确诊','新增疑似'],xData:['2019年11月','2019年12月','2020年1月','2020年2月','2020年3月','2020年4月','2020年5月']},
            addUpnum : {cnum : [222,555,444,680,20,1500,2100],snum : [200,550,650,800,100,30,17],name : ['累计确诊','累计疑似'],xData:['2019年11月','2019年12月','2020年1月','2020年2月','2020年3月','2020年4月','2020年5月']},
            dnum : {cnum : [1,3,5,7,7,7,8],snum : [12,15,10,4,2,0,19],name : ['累计死亡','累计治愈'],xData:['2019年11月','2019年12月','2020年1月','2020年2月','2020年3月','2020年4月','2020年5月']},
            currentIndex : 0
        }
    },
    components:{
        MainAggData,
        Prochart
    },
    created () {
        this.province = this.$route.query.proname
        this.chartData = this.newAdd
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
                this.chartData = this.newAdd
            } else if (index === 1) {
                this.chartData = this.addUpnum
            } else if (index === 2){
                this.chartData = this.dnum
            } else {
                this.chartData = this.newAdd
            } 
        },
        btnitemClick(index){
            this.currentIndex = index  
        }
    }
}
</script>

<style scoped>
.hid{
        position: fixed;
        top:0px;
        background-color: white;
        height: 140px;
        width: 1170px;
        z-index: 3;
        overflow: hidden;
        top: 0;
}

.proMap {
    width: 1160px;
    height: 600px;
    border: 1px black solid;
    margin-top: 10px;
    margin-bottom: 10px;
}

.btn{
    display: flex;
    width: 1160px;
    height: 49px;
    overflow-x: hidden

}
.btn .btn-item{
    flex:1;
}

.backup{
    width: 100%;
    height: 49px;
    text-align: center;
    line-height: 49px;
    /* border: 1px solid transparent; */
    background-color: rgba(0,0,0,.1);
    color: rgba(0,0,0);

    cursor: pointer;
 }

 .btn .btn-item:first-child div{
     border-top-left-radius: 8px;
     border-bottom-left-radius: 8px;
 }
  .btn .btn-item:last-child div{
     border-top-right-radius: 8px;
     border-bottom-right-radius: 8px;
 }
 .active {
    width: 100%;
    height: 49px;
    text-align: center;
    line-height: 49px;
    /* border: 1px solid transparent; */
    background-color: rgba(0,0,0,.7);
    color: #fff;
    cursor: pointer;
 }
</style>


