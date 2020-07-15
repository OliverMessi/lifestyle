/*柱子Y名称*/
var categoryData = [];
var barData = [];
var geoGpsMap = {
    '1': [103.9526, 30.7617],
};
var geoCoordMap = {
    "青岛": [120.33,36.07],
    '上海': [121.4648, 31.2891],
    '大理':[100.26764,25.60648]
};
var mapData = [
    [],
];
var d1 = {
    '青岛': 2,
    '大理': 10,
    '上海': 100,
};


for (var key in geoCoordMap) {
    mapData[0].push({
        "cityList": '成都',
        "name": key,
        "value": d1[key] / 100,
        "value1": d1[key],
    });
}
for (var i = 0; i < mapData.length; i++) {
    mapData[i].sort(function sortNumber(a, b) {
        return a.value - b.value
    });
    barData.push([]);
    categoryData.push([]);
    for (var j = 0; j < mapData[i].length; j++) {
        barData[i].push(mapData[i][j].value1);
        categoryData[i].push(mapData[i][j].name);
    }
}
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
var convertToLineData = function(data, gps) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var toCoord = geoCoordMap[dataItem.name];
        debugger;
        var fromCoord = gps; //郑州
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord,
                value: dataItem.value
            }, {
                coord: toCoord,
            }]);
        }
    }
    return res;
};
export default {
    baseOption: {
        timeline: {
            axisType: 'category',
            autoPlay: false,
            playInterval: 1000,
            data: [
                '成都'
            ],
            // label: {
            //     formatter: function (s) {
            //         return (new Date(s)).getFullYear();
            //     }
            // }
        },
        animation: true,
        animationDuration: 1000,
        animationEasing: 'cubicInOut',
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'cubicInOut',
        grid: {
            right: '1%',
            top: '15%',
            bottom: '10%',
            width: '20%'
        },
        tooltip: {
            trigger: 'axis', // hover触发器
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                shadowStyle: {
                    color: 'rgba(150,150,150,0.1)' //hover颜色
                }
            }
        },
    },
    options: [{

        // 加载 amap 组件
        amap: {
            roam: true,
            // 3D模式，无论你使用的是1.x版本还是2.x版本，都建议开启此项以获得更好的渲染体验
            viewMode: '3D',
            // 高德地图支持的初始化地图配置
            // 高德地图初始中心经纬度
            // center: [108.39, 39.9],
            center: [113.83531246, 34.0267395887],
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
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(128, 217, 248, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#389BB7',
                    borderWidth: 0
                }
            },
        },
        animation: true,//是否开启动画
        tooltip: {
            show: true,//是否显示提示框组件
            trigger: 'item',
            triggerOn: "click",
            axisPointer: {
                type: "line",
                axios: "auto",
            },
            padding: [5, 10],
            textStyle: {
                fontStyle: 'normal'
            }
        },
        title:[
            {
                text: '足迹',
                subtext: '一步一个脚印',
                left: '35%',
                top: '15%',
                textStyle: {
                    color: '#fff',
                    fontSize: 25
                }
            },
            {
                    id: 'statistic',
                    text: "旅游城市统计",
                    left: '75%',
                    top: '8%',
                    textStyle: {
                        color: '#fff',
                        fontSize: 25
                    }
            }],
        xAxis: {
            coordinateSystem: "amap",
            type: 'value',
            scale: true,
            position: 'top',
            min: 0,
            boundaryGap: false,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                margin: 2,
                textStyle: {
                    color: '#aaa'
                }
            },
        },
        yAxis: {
            coordinateSystem: "amap",
            type: 'category',
            nameGap: 16,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#ddd'
                }
            },
            data: categoryData[0]
        },
        series: [
            {
                //文字和标志
                name: 'light',
                type: 'scatter',
                coordinateSystem: 'amap',
                data: convertData(mapData[0]),
                symbolSize: function(val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#DA70D6'
                    }
                }
            },
            {
                name: "足迹",
                type: "scatter",
                // 使用高德地图坐标系
                coordinateSystem: "amap",
                // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
                data: [[104.07,30.67, 30], [120.1, 30.2, 20],[125.8154,44.2584,40],[118.8062, 31.9208]],
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                encode: {
                    value: 2
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                zlevel: 1
            },
            //地图点的圆圈闪动
            {
                name: '出发点',
                type: 'effectScatter',
                coordinateSystem: 'amap',
                data:
                [[104.07,30.67, 30]],
                // convertData(mapData[0].sort(function(a, b) {
                //     return b.value - a.value;
                // }).slice(0, 20)),
                symbolSize: function(val) {
                    return val[2] * 0.4;
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
                        color: '#1DE9B6',
                        shadowBlur: 10,
                        shadowColor: '#1DE9B6'
                    }
                },
                zlevel: 1
            },
            //地图线的动画效果
            {
                type: 'lines',
                zlevel: 2,
                coordinateSystem: "amap",
                effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.6, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //圆形图标
                    symbolSize: 3, //图标大小
                },
                lineStyle: {
                    normal: {
                        color: '#DAA520',
                        width: 0.1, //尾迹线条宽度
                        opacity: 0.3, //尾迹线条透明度
                        curveness: .1 //尾迹线条曲直度
                    }
                },
                data: convertToLineData(mapData[0], geoGpsMap[1])
            },
            //柱状图
            {
                zlevel: 1.5,
                type: 'bar',
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: "#B3EE3A"
                    }
                },
                data:barData[0]
            }
        ]
    }]
};
