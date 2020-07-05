<template>
  <div ref="map" style="height:600px;width:600px;" ></div>
</template>

<script>
  import option from "assets/js/map-option.js"; //引入配置项
  import echarts from "echarts";
  import 'echarts/map/js/china.js'; //引入地图
  export default {
    name: "Map",
    data() {
      return {

      };
    },
    mounted() {
      this.mapEchartsInit();
    },
    methods:{
      mapEchartsInit(){
        var myChart=echarts.init(this.$refs.map);
        myChart.setOption(option, true);
      }
    }
  }
</script>

<style scoped>

</style>
