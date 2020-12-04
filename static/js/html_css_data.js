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
        list-style: none;   // li 标记
        text-decoration: none;    // a标签下划线
        
    }
    img { 
        border:none;
    }
    button {
        outline: none;
    }
    `,
    },

    {
        title: 'CSS',
        content:  
    `
    pointer-events: none;    // 点击事件穿透
    user-select:none;     // 禁止选中内容
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