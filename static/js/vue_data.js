function return_data () {
    return obj
}

let obj = [
    {
        title: 'VUE',
        content:  
    `
    <div v-pre>{{内容}}</div>     // 在标签内加上 v-pre 可保证{{}}里的内容不被编译
    <div v-once></div>     // 标签中加入v-once.当页面加载时确定,之后不再变化
    `,
    },
    
    {
        title: '键盘触发事件',
        content:  
    `
    @keyup="方法名"; 当键盘输入时,时刻执行该方法,例如搜索
    <div @keyup="search" @click="search">搜索</div>
    search(){
        console.log("搜索")
    }
    `,
    },
    
    {
        title: '自定义指令',
        content:  
    `
    声明指令时前边不用加v- , 使用时前边要加v-
    <input type="text" v-myFocus>
    Vue.directive("myFocus",{    //domelem会自动获得当前拥有这个指令的DOM元素对象
        inserted(domElem){
            domElem.focus();    //对当前DOM元素进行操作
        }
    })
    `,
    },
    
    {
        title: '通过$once来监听定时器，在beforeDestroy钩子被清除。',
        content:  
    `
    mounted() {
        const timer = setInterval(() => {
            // 某些定时器操作
        }, 1000);
        
        this.$once("hook:beforeDestroy", () => {
            clearInterval(timer);
        });
    }
    `,
    },
    
    
    {
        title: '过滤器 -- 根据文本内容改变字体颜色',
        content:  
    `
    <div v-html="$options.filters.font_color(参数)"></div>
    filters:{
        font_color: function(val){
            if(val == '文本内容'){
                return '<div style="color:red;">'+val+'</div>'
            }
            return '<div>'+val+'</div>'
        }
    },
    `,
    },
    
    {
        title: '返回按钮返回不同页面',
        content:  
    `
    路由守卫里可以进行判断,如果是这个页面进来的,保存到sessionStorage,否则不保存,在返回的时候判断进行判断跳转到响应路由,如果想要参数,也存到sessionStorage里,在返回的时候加上参数即可    
    进入页面把上个页面的路由存到sessionStorage
    beforeRouteEnter(to, from, next){
        next(vm => {
            vm.url = from.path;
            sessionStorage.setItem('fromPath',from.path)
        })
    }
    back_page(){    // 返回按钮点击事件
        if(sessionStorage.getItem('fromPath') == '/路由名称'){
            this.$router.push({name:'路由名称'})
        }else{
            this.$router.push({name:'路由名称'})
        }
    },
    history.back()返回上个页面不刷新页面,不是返回不同页面可以应用
    `,
    },
    
    {
        title: '小白级菜单',
        content:  
    `
    <ul class="menu">
        <li :class="{active : Index == 1}" @click="changeMenu(1)">菜单</li>
        <li :class="{active : Index == 2}" @click="changeMenu(2)">菜单2</li>
        <li :class="{active : Index == 3}" @click="changeMenu(3)">菜单3</li>
    </ul>
    <div class="main">
        <div v-if="Index == 1" class="content">菜单1内容区域</div>
        <div v-if="Index == 2" class="content">菜单2内容区域</div>
        <div v-if="Index == 3" class="content">菜单3内容区域</div>
    </div>
    data(){
        return {
            Index:1
        }
    },
    methods:{
        changeMenu(index){
            if(index == 1){ this.Index = 1;  }
            else if(index == 2){ this.Index = 2; }
            else if(index == 3){ this.Index = 3 }
        },
    }
    <style>
        .menu li{
            list-style-type: none;
        }
        .menu .active{
            color: blue;
        }
        .main .content{
            width: 50px;
            background: green;
            border: none;
        }
    </style>
    `,
    },
    
    {
        title: '父组件给子组件传值',
        content:  
    `
    父组件
    <header :msg="msg"/>
    import header from '子组件路径'
    data() { 
        return {
            msg: '我是信息'
        }
    },
    components:{
        header 
    },

    子组件
    <div>{{msg}}</div>
    props:{
        'msg': String
    },
    `,
    },
    
    {
        title: '子组件给父组件传值',
        content:  
    `
    子组件
    <button @click="passValue">给父组件传值</button>
    methods：{
        passValue（）{
            this.$emit('fu',"123")
        }
    }

    父组件：
    <zi @fu="fu"></zi>
    import zi from '子组件路径'
    methods：{
        fu（data）{
            console.log(data)
        }
    }
    components:{
        zi 
    },
    `,
    },
    
    {
        title: '父组件按钮激活子组件事件',
        content:  
    `
    <div>
        <el-button @click='activeSonEvent'>激活子组件事件</el-button>
        <withdrawalAudit ref='sonEvent'/>
    </div>
    import withdrawalAudit from '子组件路径'
    methods：{
        activeSonEvent(){
            this.$refs.sonEvent.sonEventName();    // sonEventName是要激活的子组件的事件名
        }
    }
    components:{
        withdrawalAudit 
    },
    `,
    },
    
    {
        title: '路由跳转页面',
        content:  
    `
    <router-link to="/login">登录</router-link>       // 需要定义该路由

    this.$router.go(-1)    // 后退一页，数字可变，代表不同意义

    this.$router.push({    // params跳转页面，刷新页面数据丢失
        name: 'login',     // 定义路由时需要命名name
        params: {
            id: id
        }
    })
    this.$route.params.id;    // 子页面获取params参数

    this.$router.push({    // query跳转页面，参数展示在地址栏，刷新页面数据不会丢失
        path: '/login',
        query: {
            id: id
        }
    })
    this.$route.query.id;    // 子页面获取query参数
    `,
    },
    
    {
        title: '将元素内容复制到剪切板',
        content:  
    `
    <div id="dome_content_copy"></div>
    <button @click="copy_content"></button>
    copy_content(){
        let in_text=document.getElementById("dome_content_copy'").innerText;
        let oInput = document.createElement('input');
        oInput.value = in_text;
        document.body.appendChild(oInput);
        oInput.select();    // 选择对象
        document.execCommand("Copy");    // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display='none';
        alert("复制成功")
    }
    `,
    },
    
    {
        title: 'vue.config.js配置',
        content:  
    `
    // 配置完成需要重启项目
    const BASE_URL = process.env.NODE_ENV === 'production' ? '/生产环境指向名/' : '/';
    module.exports = {
        publicPath: BASE_URL,    // 基本路径
        outputDir: 'dist',    // 构建时输出目录
        assetsDir: 'static',     // 放置静态资源路径
        indexPath: 'index.html',      // html输出路径
        filenameHashing: true,      // 文件名哈希
        devServer: {     // webPack代理
            proxy: {
                '/apis': {
                    target: 'xxxxxxxxxx',     //要访问的跨域的域名
                    ws: true,
                    secure:false,     // 使用的是http协议则设置为false，https协议则设置为true
                    changOrigin: true,
                    pathRewrite: {
                        '^/apis': ''
                    }
                }
            }
        },
    };
    `,
    },
    
    {
        title: 'vue + element-ui 日期选择器 移动端选择日期输入框获取焦点不调起键盘',
        content:  
    `
    <el-date-picker @focus="forbid" v-model="date" value-format="yyyy-MM-dd" type="date" placeholder="选择日期"></el-date-picker>
    methods: {
        forbid(){
            document.activeElement.blur();
        }
    }
    `,
    },
    
    {
        title: 'vue main.js 路由守卫 && 判断是不是钉钉环境',
        content:  
    `
    import * as dd from 'dingtalk-jsapi';     // 引入钉钉js文件
    router.beforeEach((to, from, next) => {
        // from: 从哪里来
        // to: 到何处去
        // next: 路由的控制参数，next(true) || next(false)
        if (dd.env.platform != 'notInDingTalk') {
            // 是钉钉环境
        }else{
            // 不是钉钉环境
        }
    })
    `,
    },
    
    {
        title: 'vue下载后台返回的流文件',
        content:  
    `
    this.$axios.postFile(url,'参数').then(res => res.blob()).then(data => {
        var blob = new Blob([data], {type:'application/vnd.ms-excel'})
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = "定义文件名";
        link.click();
        window.URL.revokeObjectURL(link.href);
    })
    `,
    },
    
    {
        title: 'vue视频播放和关闭',
        content:  
    `
    play_video() {
        let video_id = document.getElementById("ID");
        if ('是暂停状态,就从头开始播放') {
          video_id.load();
          video_id.play();
        } else {     // 如果是播放状态,就停止播放
          video_id.pause();
        }
    },
    `,
    },
];