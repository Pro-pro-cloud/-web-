<template>
  <div>
    <div id="echartMap" style="width:350px;height:400px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  data () {
    return {
      batchId : "",
      areaData : [],
      provinceMap: null ,
      province : "河北省"
    }
  },
  computed : {

  },
  created() {  
      this.provinceMap = require(`../../../assets/mapjson/${this.province}`)
  },
  mounted () {
    this.mapInit(this.provinceMap)
  },
  methods : {
    mapInit(provinceMap){
      this.$nextTick(function () {
        var chart = this.$echarts.init(document.querySelector("#echartMap"))
        echarts.registerMap(`${this.province}`, provinceMap ,{})
        chart.setOption({
          series: [{
            name : this.province,
            label: {
              normal : {
                show : true
              },
              emphasis : {
                show : true
              }
            },
            itemStyle: {
              color : '#ddb926'
            },
            type : 'map' ,
            zoom :1,
            roam : true,
            mapType : this.province,
            emphasis : {
              label : {
                show : true
              }
            },
            textFixed : {
              Alaska:[20,-20]
            },
            data : [{
              name : '张家口市',
              value: 4822023
            },
            {
              name : '普兰店市',
              value : 731449
            },
            {
              name:'庄河市',
              value:6553255
            },
            {
              name:'金州区',
              value:949131
            },
            {
              name:'长海县',
              value:8041430
            },
            {
              name:'甘井子区',
              value:5187582
            },
            {
              name:'沙河口区',
              value:3590347
            },
            {
              name:'西岗区',
              value:917092
            },
            {
              name:'中山区',
              value:632323
            },
            {
              name:'旅顺口区',
              value:9317568
            }
            ]
          }],
          //右下角数值条
          visualMap : {
            left:'right',
            min : 1,
            max : 100,
            inRange : {
               color:['#313695','#4575b4','#74add1','#abd9e9','#e0f3f8','#ffffbf','#fee090','#fdae61','#f46d43','#d73027','#a50026']
            },
          }
        })
      });
    }
  }
}
</script>

<style lang="scss">

</style>
