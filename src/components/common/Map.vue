<template>
    <div ref="map" class="map"></div>
</template>

<script>
    import option from "assets/js/map-option.js"; //引入配置项
    import echarts from "echarts";
    import 'echarts/map/js/china.js'; //引入地图

    import "echarts-extension-amap";

   // import AMap from 'AMap'; // 引入高德地图
    export default {
        name: "Map",
        data() {
            return {};
        },
        mounted() {
            this.mapEchartsInit();
        },
        methods: {
            mapEchartsInit() {
                // 初始化ECharts
                var chart = echarts.init(this.$refs.map);
                chart.setOption(option, true);
                // 从ECharts实例中取到高德地图组件实例
               var amap = chart.getModel().getComponent("amap").getAMap();
                // var amap = new AMap.Map(this.$refs.map, {
                //     viewMode:'3D',//开启3D视图,默认为关闭
                //     center: [108.39, 39.9],
                //     zoom: 4,
                //     resizeEnable: true,
                //     // rotateEnable:true,
                //     // pitchEnable:true,
                //     mapStyle: "amap://styles/dark",
                //     // pitch:80,
                //     // rotation:-15,
                //     renderOnMoving: true,
                //     echartsLayerZIndex: 2019,
                //     // buildingAnimation:true,//楼块出现是否带动画
                //
                //     // expandZoomRange:true,
                //     // zooms:[3,20],
                //
                // })
                // 下边就可以按照高德官方API随意调用了
                // 比如添加一些控件
                amap.addControl(new AMap.MapType());//地图类型切换插件
                amap.addControl(new AMap.Scale());//地图比例尺插件
                amap.addControl(new AMap.ToolBar());//地图工具条插件
                // 添加一些图层 卫星图层/交通路网等等
                // var satelliteLayer = new AMap.TileLayer.Satellite();
                // var roadNetLayer = new AMap.TileLayer.RoadNet();
                // amap.add([satelliteLayer, roadNetLayer]);

            },
        }
    }
</script>

<style scoped>
    .map {
        height: 800px;
        width: 1000px;
        position: absolute;
        margin-bottom: 50px;
    }
</style>
