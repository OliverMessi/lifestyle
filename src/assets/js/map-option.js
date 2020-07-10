export default {
    // visualMap: {
    //     min: 0,
    //     max: 1000,
    //     left: 26,
    //     bottom: 40,
    //     showLabel: !0,
    //     text: ["高", "低"],
    //     pieces: [{
    //         gt: 100,
    //         label: "> 100 人",
    //         color: "#7f1100"
    //     }, {
    //         gte: 10,
    //         lte: 100,
    //         label: "10 - 100 人",
    //         color: "#ff5428"
    //     }, {
    //         gte: 1,
    //         lt: 10,
    //         label: "1 - 9 人",
    //         color: "#ff8c71"
    //     }, {
    //         gt: 0,
    //         lt: 1,
    //         label: "疑似",
    //         color: "#ffd768"
    //     }, {
    //         value: 0,
    //         color: "#ffffff"
    //     }],
    //     show: !0
    // },
    // 加载 amap 组件
    amap: {
        // 3D模式，无论你使用的是1.x版本还是2.x版本，都建议开启此项以获得更好的渲染体验
        viewMode: '3D',
        // 高德地图支持的初始化地图配置
        // 高德地图初始中心经纬度
        center: [108.39, 39.9],
        // 高德地图初始缩放级别
        zoom: 4,
        // 是否开启resize
        resizeEnable: true,
        // 自定义地图样式主题
        mapStyle: "amap://styles/darkblue",
        // 移动过程中实时渲染 默认为true 如数据量较大 建议置为false
        renderOnMoving: true,
        // 高德地图自定义EchartsLayer的zIndex，默认2000
        echartsLayerZIndex: 2019,
        // 说明：如果想要添加卫星、路网等图层
        // 暂时先不要使用layers配置，因为存在Bug
        // 建议使用amap.add的方式，使用方式参见最下方代码
        // rotateEnable:true,
        // pitchEnable:true,
        // pitch:80,
        // rotation:-15,
        // buildingAnimation:true,
    },
    animation: true,//是否开启动画
    tooltip: {
        show:true,//是否显示提示框组件
        trigger: 'item',
        triggerOn: "click",
        axisPointer:{
        type:"line",
        axios:"auto",
        },
        padding: [5, 10],
        textStyle:{
            fontStyle:'normal'
        }
    },
    series: [
        {
            name: "足迹",
            type: "scatter",
            // 使用高德地图坐标系
            coordinateSystem: "amap",
            // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
            data: [[120, 30, 8], [120.1, 32, 20]],
            // symbolSize: function (val) {
            //     return val[2] / 10;
            // },
            encode: {
                value: 2
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#fff',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};
