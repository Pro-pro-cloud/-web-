<template>
  <div class="agg-data">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "AggData",
  }
</script>

<style scoped>
.agg-data{
  display: flex;
  /*background-color: red;*/
  width: 1200px;
}
</style>