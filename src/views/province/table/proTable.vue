<template>
    <div>
        <div class="hid"></div>
        <!-- <div class="proTable"> -->
            <div class="proTable-con">
                <div class="tabitem">省份</div>
                <div class="tabitem">新增</div>
                <div class="tabitem">累计</div>
                <div class="tabitem">现有</div>
                <div class="tabitem">治愈</div>
                <div class="tabitem">死亡</div>
            </div>

        <div class="protable-content">
            <div class="tabiteminit" v-for="(item,index) in prodata.province" :key="index" >
                <div @click="itemClick(index)" :class="{tabitemInitItem : currentIndex !== index , Active : currentIndex === index}"  >{{item}}></div>
                <div class="tabitemInitItem">{{prodata.cnum[index]}}</div>
                <div class="tabitemInitItem">{{item}}</div>
                <div class="tabitemInitItem">{{item}}</div>
                <div class="tabitemInitItem">{{item}}</div>
                <div class="tabitemInitItem">{{item}}</div>
            </div>
        </div>
        </div>
        
    <!-- </div> -->
</template>

<script>
export default {
    name : 'proTable',
    data () {
        return {
            prodata: {
                province : ['北京市','天津市','上海市','重庆市','河北省','山西省','辽宁省','吉林省','黑龙江省','江苏省','浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','海南省','四川省','贵州省','云南省','陕西省','甘肃省','青海省','台湾省','内蒙古自治区','广西壮族自治区','西藏自治区','宁夏回族自治区','新疆维吾尔自治区','香港特别行政区','澳门特别行政区'],
                cnum : [1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1],
            },
            currentIndex : -1
            
        }
    },
    methods : {
        itemClick(index){
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
        width: 1160px;
        z-index: 3;
        overflow: hidden;
        top: 0;
    }
    /* .proTable{
        position: relative;
        z-index: -2;
    } */
    .proTable-con{

        position: fixed;
        display: flex;
        top: 140px;
        height: 39px;

        width: 1160px;
        text-align: center;
        line-height: 39px;
        font: 20px;
        border: 1px solid white;
        border-bottom: 1px solid white;
        overflow: hidden;
        background-color: white;
        



    }
    .tabitem{
        flex: 1;
        /* margin-right: 1px; */
        border-right:1px solid white ;
        /* background-color: blanchedalmond; */
        background-color: rgba(240, 235, 235, 0.918);
    }


    .protable-content{
        margin-top: 42px;
    }


    .tabitem:first-child{
        border-top-left-radius: 6px;
        border-bottom-left-radius:6px; 
        background-color: #00bec9;
    }
    .tabiteminit {
        border: solid 1px white;
        border-bottom: none;
        width: 100%;
        display: flex;
        
        height: 49px;
        width: 1160px;
        text-align: center;
        line-height: 49px;
        font: 20px;

    }
    .tabitemInitItem{
        flex: 1;
        /* margin-right: 1px; */
        background-color: rgba(240, 235, 235, 0.918);
        border-right:1px solid white ;
        border-bottom: 1px solid white;
        

        margin-bottom: -1px;
    }
    .tabitemInitItem:first-child{
        background-color: #00bec9;
        color: #fff;
        border-top-left-radius: 6px;
        border-bottom-left-radius:6px; 
        cursor: pointer;

    }
    .Active {
        cursor: pointer;
        flex: 1;
        border-right:1px solid white ;
        border-bottom: 1px solid white;
        margin-bottom: -1px;
        color: red;

    }
</style>