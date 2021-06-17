<template>
    <div class="mychart" ref="mychart"></div>
</template>

<script>
export default {
    name : 'prochart',
    data () {
        return {
            
        }
    },
    props : {
        lineValue :{
            type : Object,
            default : () => {}
        }
    },
    watch : {
        lineValue : {
            handler(){
                this.drawLine()
            },
            deep:true
        }
    },
    mounted () {
        this.drawLine()
    },
    methods : {
        drawLine () {
            let mychart = this.$echarts.init(this.$refs.mychart)
            let option = {
                xAxis: {
                    type: 'category',
                    data: this.lineValue.xData
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    name : this.lineValue.name[0],
                    data: this.lineValue.cnum,
                    type: 'line',
                    smooth: true
                },
                {
                    name :this.lineValue.name[1],
                    data: this.lineValue.snum,
                    type: 'line',
                    smooth: true
                }],
                tooltip : {
                    trigger : 'axis'
                },
                legend : {
                    data : this.lineValue.name
                }
            }
        option && mychart.setOption(option)            
        }
    }
}
</script>

<style scoped>
    .mychart {
        height: 600px;
        width: 1160px;
        margin-top: 12px;
        border: 1px black solid;
        overflow-x: hidden;
        margin-bottom: 50px;
    }
</style>