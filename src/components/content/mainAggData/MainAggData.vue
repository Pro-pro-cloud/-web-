<template>
  <div class="main-agg-data">
    <agg-data>
      <agg-data-item v-for="(item,index) in aggData" :key="index" :data-style="item.bgc">
        <agg-data-con>
          <div slot="text">{{item.title}}</div>
        </agg-data-con>
        <agg-data-con>
          <div slot="num" class="cen-data" :style="item.numColor">{{item.data}}</div>
        </agg-data-con>
        <agg-data-con>
          <span slot="text">{{item.text}}</span>
          <span slot="num" class="add" :style="item.numColor">{{item.add}}</span>
        </agg-data-con>
      </agg-data-item>
    </agg-data>
  </div>
</template>

<script>
  import AggData from "../../common/aggData/AggData";
  import AggDataItem from "../../common/aggData/AggDataItem";
  import AggDataCon from "../../common/aggData/AggDataCon";
  export default {
    name: "MainAggData",
    data(){
      return {
        // curDig:{data:12369,add:156},
        // cumDig:{data:26589,add:156},
        // susCas:{data:563,add:36},
        // cumDea:{data:1568,add:36},
        // cumCur:{data:16597,add:1598}
      }
    },
    computed: {
      aggData(){
        return  [
          {title:"现有确诊",data:this.generalData.curDig.data,text:"昨日 +",add:this.generalData.curDig.add,bgc:"#00dcff",numColor:{color:"#ff0000"}},
          {title:"累计确诊",data:this.generalData.cumDig.data,text:"昨日 +",add:this.generalData.cumDig.add,bgc:"#00805c",numColor:{color:"#ffeb7b"}},
          {title:"疑似病例",data:this.generalData.susCas.data,text:"昨日 +",add:this.generalData.susCas.add,bgc:"#ff7500",numColor:{color:"#000000"}},
          {title:"累计死亡",data:this.generalData.cumDea.data,text:"昨日 +",add:this.generalData.cumDea.add,bgc:"#000000c7",numColor:{color:"#ff0000"}},
          {title:"累计治愈",data:this.generalData.cumCur.data,text:"昨日 +",add:this.generalData.cumCur.add,bgc:"#00ff9c",numColor:{color:"#ff7500"}}
        ]
      }
    },
    components:{
      AggData,
      AggDataItem,
      AggDataCon
    },
    props:{
      generalData:Object,
    }
  }
</script>

<style scoped>
  .main-agg-data {
    position: fixed;
    left: 250px;
    top: 10px;
    overflow: hidden;
  }
  .cen-data{
    font-size: 24px;
    font-family: electronicFont;
  }
  .add{
    font-size: 16px;
    font-family: electronicFont;
  }
  @font-face {
    font-family: electronicFont;
    src: url(../../../assets/font/DS-DIGIT.TTF);
  }
</style>