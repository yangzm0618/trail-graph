/**
 * Created by qiezijiucai 619025283@qq.com on 2017/10/10.
 */
var viewWidth=window.innerWidth,viewHeight=window.innerHeight;
var myChart = echarts.init(document.getElementById('J_Main'));
var option = {
    grid: {
        top: 10,
        left: 10,
        right: 10,
        bottom: 10
    },
    xAxis: {
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
            show: false
        },
        max: viewWidth,
        min: 0
    },
    yAxis: {
        silent: true,
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
            show: false
        },
        max: viewHeight,
        min: 0
    },
    tooltip: {
        trigger: "item",
        backgroundColor: "rgba(50,50,50,0.7)",
        borderColor: "#46bee9",
        borderWidth: 1,
        padding: [5, 10, 5, 10],
        textStyle: {
            color: "#46bee9",
            fontSize: 14,
            fontWeight: "bolder"
        }
    },
    series: [{
        type: 'effectScatter',
        coordinateSystem: 'cartesian2d',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke',
            period: 7,
            scale: 1
        },
        symbolSize: [230, 113],
        showEffectOn: 'render',
        itemStyle: {
            normal: {
                color: '#030210',
                border: 1,
                borderColor: "#030210"
            },
            emphasis: {
                borderColor: "#46bee9",
                opacity: 1
            }
        },
        label:{
            normal:{
                rich:{
                    iconStyle:{
                        width:48,
                        height:48,
                        align:"left",
                        backgroundColor:{
                            image:""
                        }
                    },
                    enTitleStyle:{
                        color:"#fff",
                        width:170,
                        padding:[0,0,0,15],
                        align:"left",
                        verticalAlign:"top"
                    },
                    zhTitleStyle:{
                        color:"#fff",
                        align:"left",
                        fontSize:23,
                        width:90,
                        height:35,
                        padding:[0,0,0,-170],
                        verticalAlign:"bottom"
                    },
                    descTitleStyle:{
                        color:"#c0cfde",
                        align:"left",
                        width:93,
                        height:25,
                        fontSize:14
                    },
                    descContentStyle:{
                        color:"#fff",
                        align:"left",
                        fontSize:16,
                        width:93
                    }
                },
                formatter:function(params){
                    var descTitleArr=[],descContentArr=[],descTitleStr="",descContentStr="";
                    params.data.desc.forEach(function(descItem){descTitleArr.push(descItem["title"]);descContentArr.push(descItem["num"])});
                    descTitleStr=descTitleArr.reduce(function(prev,cur){return prev+'{descTitleStyle|'+cur+'}'},"");
                    descContentStr=descContentArr.reduce(function(prev,cur){return prev+'{descContentStyle|'+cur+'}'},"");
                    return '{iconStyle|}{enTitleStyle|'+params.data.title.en+'}{zhTitleStyle|'+params.data.title.zh+'}'+'\n'+descTitleStr+'\n'+descContentStr;
                },
                color:"#fff",
                show:true,
                width:230,
                height:113,
                padding:[20,0,0,30],
                fontFamily:"microsoft yahei"
            }
        },
        data: [
            {
                "name":"文件管理",
                "symbol":"image://./images/bg01.png",
                "title":{
                    en:"File Mangement",
                    zh:"文件管理"
                },
                "value":[viewWidth*0.086,viewHeight*0.814],
                "desc":[
                    {"title":"文件","num":"21个"},
                    {"title":"容量","num":"17T"}
                ],
                "label":{
                    normal:{
                        rich:{
                            iconStyle:{
                                backgroundColor:{
                                    image:"./images/icon01.png"
                                }
                            }
                        }
                    }
                }
            },
            {
                "name":"系统监视",
                "symbol":"image://./images/bg01.png",
                "title":{
                    en:"System Monitoring",
                    zh:"系统监视"
                },
                "value":[viewWidth*0.086,viewHeight*0.629],
                "desc":[
                    {"title":"文件","num":"21个"},
                    {"title":"容量","num":"17T"}
                ],
                "label":{
                    normal:{
                        rich:{
                            iconStyle:{
                                backgroundColor:{
                                    image:"./images/icon02.png"
                                }
                            }
                        }
                    }
                }
            },
            {
                "name":"插件",
                "symbol":"image://./images/bg01.png",
                "title":{
                    en:"Plug-In",
                    zh:"插件"
                },
                "value":[viewWidth*0.086,viewHeight*0.448],
                "desc":[
                    {"title":"文件","num":"21个"},
                    {"title":"容量","num":"17T"}
                ],
                "label":{
                    normal:{
                        rich:{
                            iconStyle:{
                                backgroundColor:{
                                    image:"./images/icon03.png"
                                }
                            }
                        }
                    }
                }
            },
            {
                "name":"大数据",
                "symbol":"image://./images/bg01.png",
                "title":{
                    en:"Big Data",
                    zh:"大数据"
                },
                "value":[viewWidth*0.086,viewHeight*0.256],
                "desc":[
                    {"title":"文件","num":"21个"},
                    {"title":"容量","num":"17T"}
                ],
                "label":{
                    normal:{
                        rich:{
                            iconStyle:{
                                backgroundColor:{
                                    image:"./images/icon04.png"
                                }
                            }
                        }
                    }
                }
            },
            {
                "name":"非结构化数据",
                "symbol":"image://./images/bg01.png",
                "title":{
                    en:"Unstructured Data",
                    zh:"非结构化数据"
                },
                "value":[viewWidth*0.252,viewHeight*0.539],
                "desc":[
                    {"title":"文件","num":"21个"},
                    {"title":"容量","num":"17T"}
                ],
                "label":{
                    normal:{
                        rich:{
                            iconStyle:{
                                backgroundColor:{
                                    image:"./images/icon05.png"
                                }
                            }
                        }
                    }
                }
            },
            {
                "name":"分布式数据库",
                "symbol":"image://./images/bg01.png",
                "title":{
                    en:"Distributed Database",
                    zh:"分布式数据库"
                },
                "value":[viewWidth*0.416,viewHeight*0.814],
                "desc":[
                    {"title":"文件","num":"21个"},
                    {"title":"容量","num":"17T"}
                ],
                "label":{
                    normal:{
                        rich:{
                            iconStyle:{
                                backgroundColor:{
                                    image:"./images/icon06.png"
                                }
                            }
                        }
                    }
                }
            },
            {
                "name":"服务器",
                "symbol":"image://./images/bg01.png",
                "title":{
                    en:"Server Rack",
                    zh:"服务器"
                },
                "value":[viewWidth*0.416,viewHeight*0.539],
                "desc":[
                    {"title":"文件","num":"21个"},
                    {"title":"容量","num":"17T"}
                ],
                "label":{
                    normal:{
                        rich:{
                            iconStyle:{
                                backgroundColor:{
                                    image:"./images/icon07.png"
                                }
                            }
                        }
                    }
                }
            },
            {
                "name":"更新",
                "symbol":"image://./images/bg01.png",
                "title":{
                    en:"Updata",
                    zh:"更新"
                },
                "value":[viewWidth*0.416,viewHeight*0.256],
                "desc":[
                    {"title":"文件","num":"21个"},
                    {"title":"容量","num":"17T"}
                ],
                "label":{
                    normal:{
                        rich:{
                            iconStyle:{
                                backgroundColor:{
                                    image:"./images/icon08.png"
                                }
                            }
                        }
                    }
                }
            },
            {
                "name":"技术服务",
                "symbol":"image://./images/bg01.png",
                "title":{
                    en:"Tech Service",
                    zh:"技术服务"
                },
                "value":[viewWidth*0.582,viewHeight*0.814],
                "desc":[
                    {"title":"文件","num":"21个"},
                    {"title":"容量","num":"17T"}
                ],
                "label":{
                    normal:{
                        rich:{
                            iconStyle:{
                                backgroundColor:{
                                    image:"./images/icon09.png"
                                }
                            }
                        }
                    }
                }
            },
            {
                "name":"数据分享",
                "symbol":"image://./images/bg01.png",
                "title":{
                    en:"Data Sharing",
                    zh:"数据分享"
                },
                "value":[viewWidth*0.582,viewHeight*0.539],
                "desc":[
                    {"title":"文件","num":"21个"},
                    {"title":"容量","num":"17T"}
                ],
                "label":{
                    normal:{
                        rich:{
                            iconStyle:{
                                backgroundColor:{
                                    image:"./images/icon10.png"
                                }
                            }
                        }
                    }
                }
            },
            {
                "name":"数据库体系",
                "symbol":"image://./images/bg01.png",
                "title":{
                    en:"Database Architecture",
                    zh:"数据库体系"
                },
                "value":[viewWidth*0.582,viewHeight*0.256],
                "desc":[
                    {"title":"文件","num":"21个"},
                    {"title":"容量","num":"17T"}
                ],
                "label":{
                    normal:{
                        rich:{
                            iconStyle:{
                                backgroundColor:{
                                    image:"./images/icon11.png"
                                }
                            }
                        }
                    }
                }
            },
            {
                "name":"搜索优化",
                "symbol":"image://./images/bg01.png",
                "title":{
                    en:"Search Optimization",
                    zh:"搜索优化"
                },
                "value":[viewWidth*0.747,viewHeight*0.539],
                "desc":[
                    {"title":"文件","num":"21个"},
                    {"title":"容量","num":"17T"}
                ],
                "label":{
                    normal:{
                        rich:{
                            iconStyle:{
                                backgroundColor:{
                                    image:"./images/icon12.png"
                                }
                            }
                        }
                    }
                }
            },
            {
                "name":"下载文件夹",
                "symbol":"image://./images/bg01.png",
                "title":{
                    en:"Download Folder",
                    zh:"下载文件夹"
                },
                "value":[viewWidth*0.914,viewHeight*0.814],
                "desc":[
                    {"title":"文件","num":"21个"},
                    {"title":"容量","num":"17T"}
                ],
                "label":{
                    normal:{
                        rich:{
                            iconStyle:{
                                backgroundColor:{
                                    image:"./images/icon13.png"
                                }
                            }
                        }
                    }
                }
            },
            {
                "name":"云储存",
                "symbol":"image://./images/bg01.png",
                "title":{
                    en:"Save To Cloud",
                    zh:"云储存"
                },
                "value":[viewWidth*0.914,viewHeight*0.256],
                "desc":[
                    {"title":"文件","num":"21个"},
                    {"title":"容量","num":"17T"}
                ],
                "label":{
                    normal:{
                        rich:{
                            iconStyle:{
                                backgroundColor:{
                                    image:"./images/icon14.png"
                                }
                            }
                        }
                    }
                }
            }
        ],
        tooltip: {
            formatter: function (params) {
                return "<div >" +
                    "<div style='padding-bottom:2px; font-weight:bold;'>" + params.name + "</div>" +
                    "<div style='padding-bottom:5px;font-size:12px; font-weight:normal;word-wrap: break-word;word-break:break-all;'>" + params["data"]["desc"].reduce(function(prev,cur){return prev+cur['title']+cur['num']+"\n"},"") + "</div>" +
                    "</div>";
            }
        }
    }, {
        coordinateSystem: 'cartesian2d',
        type: 'lines',
        polyline: true,
        zlevel: 1,
        symbol: "circle",
        effect: {
            show: true,
            constantSpeed: 70,
            trailLength: 0.7,
            symbolSize: 5,
            loop: true
        },
        lineStyle: {
            normal: {
                color: '#46bee9',
                opacity: 0.07,
                width: 1,
                curveness: 0
            }
        },
        data: [
            {
                coords: [
                    [viewWidth * 0.086, viewHeight * 0.814],
                    [viewWidth * 0.17, viewHeight * 0.814],
                    [viewWidth * 0.17, viewHeight * 0.814],
                    [viewWidth * 0.17, viewHeight * 0.539],
                    [viewWidth * 0.17, viewHeight * 0.539],
                    [viewWidth * 0.252, viewHeight * 0.539]

                ]
            },
            {
                coords: [
                    [viewWidth * 0.086, viewHeight * 0.629],
                    [viewWidth * 0.17, viewHeight * 0.629],
                    [viewWidth * 0.17, viewHeight * 0.629],
                    [viewWidth * 0.17, viewHeight * 0.539],
                    [viewWidth * 0.17, viewHeight * 0.539],
                    [viewWidth * 0.252, viewHeight * 0.539]

                ]
            },
            {
                coords: [
                    [viewWidth * 0.086, viewHeight * 0.448],
                    [viewWidth * 0.17, viewHeight * 0.448],
                    [viewWidth * 0.17, viewHeight * 0.448],
                    [viewWidth * 0.17, viewHeight * 0.539],
                    [viewWidth * 0.17, viewHeight * 0.539],
                    [viewWidth * 0.252, viewHeight * 0.539]

                ]
            },
            {
                coords: [
                    [viewWidth * 0.086, viewHeight * 0.256],
                    [viewWidth * 0.17, viewHeight * 0.256],
                    [viewWidth * 0.17, viewHeight * 0.256],
                    [viewWidth * 0.17, viewHeight * 0.539],
                    [viewWidth * 0.17, viewHeight * 0.539],
                    [viewWidth * 0.252, viewHeight * 0.539]

                ]
            },
            {
                coords: [
                    [viewWidth * 0.252, viewHeight * 0.539],
                    [viewWidth * 0.416, viewHeight * 0.539]
                ]
            },
            {
                coords: [
                    [viewWidth * 0.252, viewHeight * 0.539],
                    [viewWidth * 0.335, viewHeight * 0.539],
                    [viewWidth * 0.335, viewHeight * 0.814],
                    [viewWidth * 0.416, viewHeight * 0.814]
                ]
            },
            {
                coords: [
                    [viewWidth * 0.252, viewHeight * 0.539],
                    [viewWidth * 0.335, viewHeight * 0.539],
                    [viewWidth * 0.335, viewHeight * 0.256],
                    [viewWidth * 0.416, viewHeight * 0.256]
                ]
            },
            {
                coords: [
                    [viewWidth * 0.416, viewHeight * 0.539],
                    [viewWidth * 0.582, viewHeight * 0.539]
                ]
            },
            {
                coords: [
                    [viewWidth * 0.416, viewHeight * 0.539],
                    [viewWidth * 0.50, viewHeight * 0.539],
                    [viewWidth * 0.50, viewHeight * 0.814],
                    [viewWidth * 0.582, viewHeight * 0.814]
                ]
            },
            {
                coords: [
                    [viewWidth * 0.416, viewHeight * 0.539],
                    [viewWidth * 0.50, viewHeight * 0.539],
                    [viewWidth * 0.50, viewHeight * 0.256],
                    [viewWidth * 0.582, viewHeight * 0.256]
                ]
            },
            {
                coords: [
                    [viewWidth * 0.582, viewHeight * 0.814],
                    [viewWidth * 0.747, viewHeight * 0.814],
                    [viewWidth * 0.747, viewHeight * 0.539]
                ]
            },
            {
                coords: [
                    [viewWidth * 0.582, viewHeight * 0.256],
                    [viewWidth * 0.747, viewHeight * 0.256],
                    [viewWidth * 0.747, viewHeight * 0.539]
                ]
            },
            {
                coords: [
                    [viewWidth * 0.747, viewHeight * 0.539],
                    [viewWidth * 0.83, viewHeight * 0.539],
                    [viewWidth * 0.83, viewHeight * 0.814],
                    [viewWidth * 0.914, viewHeight * 0.814]
                ]
            },
            {
                coords: [
                    [viewWidth * 0.747, viewHeight * 0.539],
                    [viewWidth * 0.83, viewHeight * 0.539],
                    [viewWidth * 0.83, viewHeight * 0.256],
                    [viewWidth * 0.914, viewHeight * 0.256]
                ]
            }
        ]
    }]
};
//微调上下坐标
option["series"].forEach(function(seriesItem){
    if(seriesItem["type"]=="effectScatter"){
        seriesItem["data"].forEach(function(dataItem){
            dataItem["value"][1]-=27;
        });
    }
    if(seriesItem["type"]=="lines"){
        seriesItem["data"].forEach(function(dataItem){
            dataItem["coords"].forEach(function(coordsItem){
                coordsItem[1]-=27;
            })
        });
    }
});
myChart.setOption(option);
myChart.on('click', function (params) {
    if (params.componentType === 'series' && params.componentSubType=="effectScatter") {
        alert("hello world!")
    }
});
