function return_data () {
    return obj
}

let obj = [
    {
        title: '循环元素的所有子元素',
        content:  
    `
    $('元素').children().each(function(){
        console.log($(this).text())
    });
    `,
    },

    {
        title: '将 元素 下所有子元素去除 active 类',
        content:  
    `
    $('元素').children().each(function(){
        $(this).removeClass('active');
    });
    `,
    },

    {
        title: '操作元素class',
        content:  
    `
    $('元素').addClass('class名称');     // 向元素添加class
    $('元素').removeClass('class名称');     // 删除元素指定class
    $("元素").hasClass("nav-active");     // 查看元素是否存在这个class
    `,
    },
    
    {
        title: '点击小图显示大图(事件委托)',
        content:  
    `
    <img src="小图路径" data-target="大图路径" class="my-small">
    <img src="小图路径" data-target="大图路径" class="my-small">
    <img src="小图路径" data-target="大图路径" class="my-small">
    <img src="小图路径" data-target="大图路径" class="my-small">

    $("body").on("click",".my-small",function(){
        $(".my-big").attr(
            "src",$(this).attr("data-target")
        )
    })
    `,
    },
    
    {
        title: '手风琴效果',
        content:  
    `
    accordion.html
        <link rel="stylesheet" href="路径/accordion.css">
        <script src="路径/accordion.js"></script>
        <div id="my-accordion">
            <div>《西游记》简介</div>
            <div>一个和尚和四个动物的故事xxxxx</div>
            <div>《水浒传》简介</div>
            <div>105个男人和三个女人的故事xxxxx</div>
            <div>《红楼梦》简介</div>
            <div>一个男人和一群女人的故事xxxxx</div>
        </div>
        $("#my-accordion").accordion();
    
    accordion.js
        jQuery.fn.accordion=function(){
            var $parent=this;
            $parent.addClass("accordion")
            .children(":nth-child(2n+1)")
            .addClass("title")
            .next()
            .addClass("content fade")
            .first()
            .addClass("in")
            $parent.on("click",".title",e=>
                $(e.target).next(".content").toggleClass("in")
                .siblings(".content").removeClass("in")
            );
        }
        
    accordion.css
        .accordion{width:80%; margin:0 auto;}
        .accordion>.title{
            background:#eee; border:1px soild #aaa;
            padding:6px; font-size:1.5em; 
            font-weight:bold; cursor:pointer;
        }
        .accordion>.content{
            border-left:1px solid #eee;
            border-right:1px solid #eee;
        }
        .accordion>:last-child{
            border-bottom:1px solid #eee;
        }
        .accordion>.content.fade{
            height:0;
            opacity:0;
            overflow:hidden;
            transition:all .5s linear;
        }
        .accordion>.content.in{
            height:84px;
            opacity:1;
        }
        .alert.fade{
        
        }
        .alert.in{
        
        }
    `,
    },
    
    {
        title: 'div的显示与隐藏',
        content:  
    `
    fadeToggle(),在两种状态间来回切换
    <button id="btn1">显示/隐藏div</button>
    <div id="target">好好学习jQUery</div>

    $("#btn1").click(function(){
        $("#target").fadeToggle();
    });
    `,
    },
    
    {
        title: '点击控制动画的暂停与开始',
        content:  
    `
    <img id="s1" src="图片路径"><br/>
    <img id="s2" src="图片路径"><br/>
    <img id="s3" src="图片路径"><br/>
    <img id="s4" style="left:50%; margin-left:-64px" src="图片路径"><br/>

    $("#s1").click(function(){
        var $s=$(this);
        if($s.is(":animated")){
            $s.stop();
        }else{//否则
            $s.animate({left:400},3000);
        }
    })
    $("#s2").click(function(){
        var $s=$(this);
        if($s.is(":animated")){
            $s.stop(true);
        }else{//否则
            $s.animate({left:400},2000)
            .animate({top:200},1000)
        }
    })
    $("#s3").click(function(){
        var $s=$(this);
        if($s.is(":animated")){
            $s.stop();
        }else{
            $s.animate({
                left:400,
                top:200
            },3000)
        }
    })
    $("#s4").click(function(){
        alert("疼!");
        $(this).animate(
        {
            width:256,
            opacity:0,
            top:-200,
            marginLeft:-128
        },
        1000,
        function(){
            //this->当前正在执行动画的对象
            $(this).hide();
        }
    )
    })
    `,
    },
    
    {
        title: '列表向上平滑滚动',
        content:  
    `
    <div class="scroll_screen">
        <ul>
            <li>第一条数据</li>
            <li>第二条数据</li>
            <li>第三条数据</li>
            <li>第四条数据</li>
            <li>第五条数据</li>
        </ul>
    </div>

    <style>
    .scroll_screen{
        height: 100px;
        overflow: hidden;
    }
    ui{
        list-style: none;
        height: 100%;
    }
    li{
        list-style: none;
        line-height: 30px;
    }
    </style>
    
    function autoScroll() {
        $(".scroll_screen ul").animate({
            marginTop: "-60px"
        }, 3000,'linear', function () {
            $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
        })
    }
    $(function () {
        if ($(".scroll_screen ul li").length > 2) {
            setInterval('autoScroll()', 1000);
        }
    })
    `,
    },
];