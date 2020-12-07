function return_data () {
    return obj
}

let obj = [
    {
        title: '标题（title）',
        content:  
    `
    tooltip: {
        show: true,    // 是否显示提示框组件
        text: '',     // 主标题文本，支持使用 \n 换行。
        link: '',     // 主标题文本超链接
        target = 'blank'string,     // 'self' 当前窗口打开; 'blank' 新窗口打开
        textStyle: {
            color: '#FFF',     // 文字的颜色
            fontStyle: 'normal',    // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
            fontWeight: 'normal',    // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
            fontSize: '20',    // 文字字体大小
            align: 'left',     // 文字水平对齐方式，默认自动（'left'，'center'，'right'）
            verticalAlign: 'left',    // 文字垂直对齐方式，默认自动（'top'，'middle'，'bottom'
            lineHeight: '50',    // 行高 ）
            backgroundColor: 'red',    // 文字块背景色，例：'#123234', 'red', 'rgba(0,23,11,0.3)'
        },
        subtext: '',     // 副标题文本，支持使用 \n 换行
        sublink: '',    // 副标题文本超链接
        subtarget: 'blank'.     // 'self' 当前窗口打开; 'blank' 新窗口打开
        subtextStyle: {
            color: '#FFF',     // 文字的颜色
            fontStyle: 'normal',    // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
            fontWeight: 'normal',    // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
            fontSize: '20',    // 文字字体大小
            align: 'left',     // 文字水平对齐方式，默认自动（'left'，'center'，'right'）
            verticalAlign: 'left',    // 文字垂直对齐方式，默认自动（'top'，'middle'，'bottom'
            lineHeight: '50',    // 行高 ）
            backgroundColor: 'red',    // 文字块背景色，例：'#123234', 'red', 'rgba(0,23,11,0.3)'
        },
        textAlign: 'auto',     // 整体（包括 text 和 subtext）的水平对齐; 可选值：'auto'、'left'、'right'、'center'
        padding: 5,      // 标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
        itemGap: 10,    // 主副标题之间的间距
        top: 'auto'     // 距离容器侧边距离
        bottom: 'auto'     // 距离容器侧边距离
        left: 'auto',     // 距离容器侧边距离
        right: 'auto',     // 距离容器侧边距离
        backgroundColor: 'transparent',     // 标题背景色，默认透明
        borderColor: '#ccc',     // 标题的边框颜色。支持的颜色格式同 backgroundColor
        borderWidth: 10,     // 标题的边框线宽
        borderRadius: 10,     // 圆角半径
    }
    `,

    },
    {
        title: '提示框（tooltip）',
        content:  
    `
    tooltip: {
        show: true,    // 是否显示提示框组件
        trigger: 'axis',    // 触发类型（'item'，数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用；'axis'，坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用；'none'，不触发。）
        axisPointer: {
            type: 'cross',    // 指示器类型（'line' 直线指示器；'shadow' 阴影指示器；'none' 无指示器；'cross' 十字准星指示器。）
            snap: false,    // 坐标轴指示器是否自动吸附到点上。默认自动判断。
            label: {
                margin: 10,    // label 距离轴的距离
                color: '#FFF',     // 文字的颜色
                fontStyle: 'normal',    // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
                fontWeight: 'normal',    // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
                fontSize: '20',    // 文字字体大小
                lineHeight: '50',    // 行高 
                padding = [5, 7, 5, 7],    // 内边距，单位px 
                backgroundColor = 'auto',    // 文本标签的背景颜色
            },
            animation: true,     // 是否开启动画
            animationDuration: 1000,     // 初始动画时长
            animationDurationUpdate: 200,    // 数据更新动画的时长
        }
        showContent: true,     // 是否显示提示框浮层，默认显示
        alwaysShowContent: true,     // 是否永远显示提示框内容，默认情况下在移出可触发提示框区域后一定时间后隐藏
        triggerOn: 'mousemove|click',    // 提示框触发的条件（'mousemove'，鼠标移动时触发；'click'，鼠标点击时触发；'mousemove|click'，同时鼠标移动和点击时触发；'none'，不在 'mousemove' 或 'click' 时触发）
        confine: true,    // 是否将 tooltip 框限制在图表的区域内
        backgroundColor: 'rgba(50,50,50,0.7)',    // 提示框浮层的背景颜色
        padding: 5,    // 提示框浮层内边距，单位px
        textStyle: {
            color: '#FFF',     // 文字的颜色
            fontStyle: 'normal',    // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
            fontWeight: 'normal',    // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
            fontSize: '20',    // 文字字体大小
            lineHeight: '50',    // 行高 
        },
        formatter: function (params) {
            var result = ''
            var dotHtml = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:30px;height:30px;background-color:#F1E67F"></span>'    // 定义第一个数据前的圆点颜色
            var dotHtml2 = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:30px;height:30px;background-color:#2BA8F1"></span>'    // 定义第二个数据前的圆点颜色
            result += params[0].axisValue + "</br>" + dotHtml + ' 数据名称 ' + params[0].data + "</br>" + dotHtml2 + ' 数据名称 ' + params[1].data;
            return result
        }
    }
    `,
    },
    
    {
        title: 'X轴（xAxis）',
        content:  
    `
    xAxis: {
        show: true,    // 是否显示 x 轴
        position: 'top',    // x 轴的位置（'top'，'bottom'） 
        type: 'category',    // 坐标轴类型
        nameRotate: 10,    // 坐标轴名字旋转，角度值
        inverse: false,    // 是否是反向坐标轴
        boundaryGap: ['20%', '20%'],    // 坐标轴两边留白策略
        splitNumber: 5,    // 坐标轴的分割段数（预估值）
        axisLine: {
            show: true,    // 是否显示坐标轴轴线
            symbol: ['none', 'arrow'],     // 轴线两端箭头，两个值，none表示没有箭头，arrow表示有箭头
            symbolSize: [10, 15],     // 轴线两端箭头大小，数值一表示宽度，数值二表示高度
            lineStyle: {
                color: '#333',    // 坐标轴线线的颜色
                width: '5',    // 坐标轴线线宽
                type: 'solid',     // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
            },
        },
        axisTick: {
            show: true,    // 是否显示坐标轴刻度
            inside: true,     // 坐标轴刻度是否朝内，默认朝外
            length: 5,    // 坐标轴刻度的长度
            lineStyle: {
                color: '#FFF',     // 刻度线的颜色
                width: 10,    // 坐标轴刻度线宽
                type: 'solid',     // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
            },
        },
        axisLabel: {
            show: true,     // 是否显示刻度标签
            interval: '0',    // 坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
            inside: true,    // 刻度标签是否朝内，默认朝外
            rotate: 90,    // 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠；旋转的角度从 -90 度到 90 度
            margin: 10,    // 刻度标签与轴线之间的距离
            // formatter 刻度标签的内容格式器，支持字符串模板和回调函数两种形式
            color: '#FFF',     // 刻度标签文字的颜色
            fontStyle: 'normal',    // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
            fontWeight: 'normal',    // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
            fontSize: '20',    // 文字字体大小
            align: 'left',     // 文字水平对齐方式，默认自动（'left'，'center'，'right'）
            verticalAlign: 'left',    // 文字垂直对齐方式，默认自动（'top'，'middle'，'bottom'
            lineHeight: '50',    // 行高 ）
            backgroundColor: 'red',    // 文字块背景色，例：'#123234', 'red', 'rgba(0,23,11,0.3)'
        },
        splitLine: {
            show: true,    // 是否显示分隔线。默认数值轴显示，类目轴不显示
            interval: '0',    // 坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
            color: ['#ccc'],    // 分隔线颜色，可以设置成单个颜色，也可以设置成颜色数组，分隔线会按数组中颜色的顺序依次循环设置颜色
            width: 3,    // 分隔线线宽
            type: 'solid',     // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
        },
        splitArea: {
            show: true,    // 是否显示分隔区域
            interval: '0',    // 坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
            areaStyle: {
                color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'],    // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色
                opacity: 1,    // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
            },
        },
        data: {
            textStyle: {
                color: '#FFF',     // 文字的颜色
                fontStyle: 'normal',    // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
                fontWeight: 'normal',    // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
                fontSize: '20',    // 文字字体大小
                align: 'left',     // 文字水平对齐方式，默认自动（'left'，'center'，'right'）
                verticalAlign: 'left',    // 文字垂直对齐方式，默认自动（'top'，'middle'，'bottom'
                lineHeight: '50',    // 行高 ）
                backgroundColor: 'red',    // 文字块背景色，例：'#123234', 'red', 'rgba(0,23,11,0.3)'
            },
        },
    }
    `,
    },
    
    {
        title: 'y轴（yAxis）',
        content:  
    `
    yAxis: {
        show: true,    // 是否显示 y 轴
        position: 'top',    // y 轴的位置（'top'，'bottom'） 
        type: 'category',    // 坐标轴类型
        nameLocation: 'end',     // 坐标轴名称显示位置
        nameGap: 15,     // 坐标轴名称与轴线之间的距离
        nameRotate: 10,    // 坐标轴名字旋转，角度值
        inverse: false,    // 是否是反向坐标轴
        nameTextStyle: {
            color: '#333',     // 坐标轴名称的颜色
            fontStyle: 'normal',    // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
            fontWeight: 'normal',    // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
            fontSize: '20',    // 文字字体大小
            align: 'left',     // 文字水平对齐方式，默认自动（'left'，'center'，'right'）
            verticalAlign: 'left',    // 文字垂直对齐方式，默认自动（'top'，'middle'，'bottom'
            lineHeight: '50',    // 行高 ）
            backgroundColor: 'red',    // 文字块背景色，例：'#123234', 'red', 'rgba(0,23,11,0.3)'
        },
        axisLine: {
            show: true,    // 是否显示坐标轴轴线
            symbol: ['none', 'arrow'],     // 轴线两端箭头，两个值，none表示没有箭头，arrow表示有箭头
            symbolSize: [10, 15],     // 轴线两端箭头大小，数值一表示宽度，数值二表示高度
            lineStyle: {
                color: '#333',    // 坐标轴线线的颜色
                width: '5',    // 坐标轴线线宽
                type: 'solid',     // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
            },
        },
        axisTick: {
            show: true,    // 是否显示坐标轴刻度
            inside: true,     // 坐标轴刻度是否朝内，默认朝外
            length: 5,    // 坐标轴刻度的长度
            lineStyle: {
                color: '#FFF',     // 刻度线的颜色
                width: 10,    // 坐标轴刻度线宽
                type: 'solid',     // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
            },
        },
        axisLabel: {
            show: true,     // 是否显示刻度标签
            interval: '0',    // 坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
            inside: true,    // 刻度标签是否朝内，默认朝外
            rotate: 90,    // 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠；旋转的角度从 -90 度到 90 度
            margin: 10,    // 刻度标签与轴线之间的距离
            // formatter 刻度标签的内容格式器，支持字符串模板和回调函数两种形式
            color: '#FFF',     // 刻度标签文字的颜色
            fontStyle: 'normal',    // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
            fontWeight: 'normal',    // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
            fontSize: '20',    // 文字字体大小
            align: 'left',     // 文字水平对齐方式，默认自动（'left'，'center'，'right'）
            verticalAlign: 'left',    // 文字垂直对齐方式，默认自动（'top'，'middle'，'bottom'
            lineHeight: '50',    // 行高 ）
            backgroundColor: 'red',    // 文字块背景色，例：'#123234', 'red', 'rgba(0,23,11,0.3)'
        },
        splitLine: {
            show: true,    // 是否显示分隔线。默认数值轴显示，类目轴不显示
            interval: '0',    // 坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
            color: ['#ccc'],    // 分隔线颜色，可以设置成单个颜色，也可以设置成颜色数组，分隔线会按数组中颜色的顺序依次循环设置颜色
            width: 3,    // 分隔线线宽
            type: 'solid',     // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
        },
        splitArea: {
            show: true,    // 是否显示分隔区域
            interval: '0',    // 坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
            areaStyle: {
                color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'],    // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色
                opacity: 1,    // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
            },
        },
        data: {
            textStyle: {
                color: '#FFF',     // 文字的颜色
                fontStyle: 'normal',    // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
                fontWeight: 'normal',    // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
                fontSize: '20',    // 文字字体大小
                align: 'left',     // 文字水平对齐方式，默认自动（'left'，'center'，'right'）
                verticalAlign: 'left',    // 文字垂直对齐方式，默认自动（'top'，'middle'，'bottom'
                lineHeight: '50',    // 行高 ）
                backgroundColor: 'red',    // 文字块背景色，例：'#123234', 'red', 'rgba(0,23,11,0.3)'
            },
        },
    }
    `,
    },
    
    {
        title: '图例（legend）',
        content:  
    `
    legend: {
        show: true,    // 是否显示图例
        type: 'category',    // 'plain'：普通图例。缺省就是普通图例; 'scroll'：可滚动翻页的图例。当图例数量较多时可以使用
        z: 2,     // 组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖。
        top: 'auto'     // 距离容器侧边距离
        bottom: 'auto'     // 距离容器侧边距离
        left: 'auto',     // 距离容器侧边距离
        right: 'auto',     // 距离容器侧边距离
        width: 'auto',      // 图例组件的宽度。默认自适应
        height: 'auto',      // 图例组件的高度。默认自适应
        orient: 'horizontal',      // 图例列表的布局朝向; horizontal; vertical
        align: 'auto',     // 图例标记和文本的对齐。默认自动
        padding: 5,     // 图例内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
        itemGap: 10,     // 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔
        itemWidth: 25,     // 图例标记的图形宽度
        itemHeight: 14,      // 图例标记的图形高度// 使用字符串模板，模板变量为图例名称 {name}
        formatter: function (name) {     // 使用回调函数
            return 'Legend ' + name;
        },
        inactiveColor: '#ccc',      // 图例关闭时的颜色
        textStyle: {
            color: '#FFF',     // 文字的颜色
            fontStyle: 'normal',    // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
            fontWeight: 'normal',    // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
            fontSize: '20',    // 文字字体大小
            align: 'left',     // 文字水平对齐方式，默认自动（'left'，'center'，'right'）
            verticalAlign: 'left',    // 文字垂直对齐方式，默认自动（'top'，'middle'，'bottom'
            lineHeight: '50',    // 行高 ）
            backgroundColor: 'red',    // 文字块背景色，例：'#123234', 'red', 'rgba(0,23,11,0.3)'
        },
        data: [{
            name: '系列1',
            icon: 'circle',    // 强制设置图形为圆。
            textStyle: {
                color: '#FFF',     // 文字的颜色
                fontStyle: 'normal',    // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
                fontWeight: 'normal',    // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
                fontSize: '20',    // 文字字体大小
                align: 'left',     // 文字水平对齐方式，默认自动（'left'，'center'，'right'）
                verticalAlign: 'left',    // 文字垂直对齐方式，默认自动（'top'，'middle'，'bottom'
                lineHeight: '50',    // 行高 ）
                backgroundColor: 'red',    // 文字块背景色，例：'#123234', 'red', 'rgba(0,23,11,0.3)'
            },
            backgroundColor: 'transparent',     // 图例背景色，默认透明
        }],
    }
    `,
    },
];