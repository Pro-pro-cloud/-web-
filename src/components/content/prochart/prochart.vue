<template>
    <div class="mychart" ref="mychart">
        prochart
    </div>
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
            type : Array,
            default: []
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
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: this.lineValue,
                    type: 'line',
                    smooth: true
                }]
            }
        option && mychart.setOption(option)            
        }
    }
}
</script>

<style scoped>
    .mychart {
        height: 600px;
        width: 600px;
        border: 1px black solid;
    }
</style>