function return_data () {
    return obj
}

let obj = [
    {
        title: 'CSS 清除浏览器默认样式',
        content:  
    `
    *{
        margin: 0；
        padding: 0;
    }
    img { 
        border:none;
    }
    button {
        outline: none;
    }
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    `,
    },

    {
        title: 'CSS 背景',
        content:  
    `
    background-color     // 背景颜色
    background-position     // (x,y) top left center right bottom 如果仅规定了一个关键词，第二个值将是"center",也可以百分比或像素为单位;
    background-size     // (x,y) x设置宽度，y设置高度,单位可以是像素和百分比; cover 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域,部分区域会不能展示; contain 把图像扩展至能适应内容区域的最大尺寸;
    background-repeat     // repeat-x 背景图像将在水平方向重复; repeat-y 背景图像将在垂直方向重复; no-repeat 背景图像将仅显示一次;  
    background-origin     // padding-box 相对于内边距框来定位; border-box 相对于边框盒来定位; content-box 相对于内容框来定位;
    background-clip     // padding-box 裁剪到内边距框; border-box 裁剪到边框盒; content-box 裁剪到内容框;
    background-image     // url(xxx.png)
    background-attachment     // scroll 默认值,背景图像随页面滚动而移动; fixed 随页面滚动背景图像不会移动;
    `,
    },

    {
        title: 'html',
        content:  
    `
    <img draggable="false" src="路径">    // 禁止图片拖动
    `,
    },


    {
        title: 'html展示 base64 格式图片',
        content:  
    `
    <img src="base64变量"/>
    // base64 前边如果没有 'data:image/jpeg;base64,' 需要拼接
    `,
    },

    {
        title: 'html',
        content:  
    `
    <img draggable="false" src="路径">    // 禁止图片拖动
    `,
    },

    {
        title: 'CSS',
        content:  
    `
    pointer-events: none;    // 点击事件穿透
    user-select:none;     // 禁止选中内容
    background-image: linear-gradient(to right, red , yellow);     // 'to tight bottom'就是从左上角到右下角的渐变
    `,
    },

    {
        title: 'CSS 布局',
        content:  
    `
    1. 水平居中
        ① display: inline-block; text-align: center; (text-align具有继承性，子元素徐自定义覆盖)
        ② position: absolute; left: 50%; transform: translateX(-50%); （父元素需要设置position）
        ③ display: block； margin: 0 auto; 子元素不能脱离文档流，否则外边距失效
    2. 垂直居中
        ① position: absolute; top: 50%; transform: translateY(-50%) ;（父元素需要设置position）
        ② display: table-cell;  vertical-align: center; (vertical-align具有继承性，子元素徐自定义覆盖)
    3. 水平垂直居中
        ① position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%) ;（父元素需要设置position）
    `,
    },
    
    {
        title: 'CSS 垂直滚动条样式',
        content:  
    `
    <style>
        .scroll-style{
            overflow:scroll;
        }
        .scroll-style::-webkit-scrollbar {     /*滚动条整体样式*/
            width:10px; 
            height:10px;
        }
        .scroll-style::-webkit-scrollbar-thumb {     /*滚动条里面小方块*/
            border-radius:10px;
            -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2);
            background:#535353;
        }
        .scroll-style::-webkit-scrollbar-track {     /*滚动条里面轨道*/
            -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2);
            border-radius:10px;
            background:#EDEDED;
        }
    </style>
    `,
    },
    
    {
        title: 'CSS 元素高度坍塌',
        content:  
    `
    <style>
        元素选择器:after {
            content: '';
            display: block;
            clear: both;
        }
    </style>
    `,
    },
    
    {
        title: 'CSS 设置动画',
        content:  
    `
    <style>
        @keyframes cssAnimation{
            0%{background: #00f;border-radius: 0%;}
            25%{background: #ff0;border-radius: 50%;}
            50%{background: #f0f;border-radius: 0%;}
            75%{background: #0ff;border-radius: 50%;}
            100%{background: #f00;border-radius: 0%;}
        }
        
        animation: name duration timing-function delay iteration-count direction;    // 动画的使用

        animation-name	规定需要绑定到选择器的 keyframe 名称。。
        animation-duration	规定完成动画所花费的时间，以秒或毫秒计。
        animation-timing-function	规定动画的速度曲线。   // https://www.w3school.com.cn/cssref/pr_animation-timing-function.asp  
        animation-delay	规定在动画开始之前的延迟。
        animation-iteration-count	规定动画应该播放的次数，infinite是无限播放。
        animation-direction	默认正常循环播放，alternate是反向播放。
    </style>
    `,
    },
    
    {
        title: 'CSS 改变上传文件输入框样式为图片',
        content:  
    `
    <div class="home">
        <img src="图片路径">
        <input type="file">
    </div>
        .home{
            width: 70px;
            height: 25px;
            position: relative;
        }
        img {
            position: absolute;
            width: 70px;
            height: 25px;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 999;
        }
        input{
            position: absolute;
            width: 70px;
            height: 25px;
            top: 0;
            left: 0;
        }
    `,
    },
];