<template>
  <div class="agg-data-item" :style="dataBgc">
    <slot></slot>
  </div>

</template>

<script>
  export default {
    name: "AggDataItem",
    props:{
      dataStyle:String
    },
    computed:{
      dataBgc(){
        return {backgroundColor:this.dataStyle}
      }
    }
  }
</script>

<style scoped>
.agg-data-item{
  flex: 1;
  margin: 0 20px;
  height: 80px;
  /*width:200px;*/
  text-align: center;
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
  justify-content: center;
  border: 1px solid #ffffff;
  border-radius: 10px;
  color: #ffffff;
  cursor: default;
}
</style>