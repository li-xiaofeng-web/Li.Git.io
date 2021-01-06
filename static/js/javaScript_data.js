function return_data () {
    return obj
}

let obj = [
    {
        title: '代码规范',
        content:  
    `
    1. 比较时，使用 === 代替 == ，因为 == 允许类型不同
    2. 使用 let 代替 var 定义变量，避免作用域的各种问题，如果是确定不会更改，使用const
    3. 尽管js没有硬性要求必须 ； 结尾，但是使用的话有利于代码保持一致
    4. 拼接字符串尽量使用模板字符串
    5. 尽可能使用es6箭头函数
    6. 定义方法设置默认参数，普通函数如果没有传值，会是undefined
    7. 避免不必要的三目运算符，const a = b ? c : b   替换   const a = b || c
    `,
    },

    {
        title: 'JavaScript 代码调试',
        content:  
    `
    · debugger 关键字，执行到则停止；
    · 浏览器调试窗口试着断点
    `,
    },
    
    {
        title: 'HTML 事件',
        content:  
    `
    onchange	HTML 元素改变
    onclick	   用户点击 HTML 元素
    onmouseover    	用户在一个HTML元素上移动鼠标
    onmouseout   	用户从一个HTML元素上移开鼠标
    onload	   浏览器已完成页面的加载
    `,
    },
    
    {
        title: '数字',
        content:  
    `
    toFixed(num)	 把数字转换为字符串，四舍五入保留小数点后 num 位小数
    Number("3.14")      // 返回 3.14
    Number(" ")       // 返回 0 
    Number("")       // 返回 0
    Number("99 88")      // 返回 NaN
    Number(false)     // 返回 0
    Number(true)     // 返回 1
    `,
    },
    
    {
        title: 'js 分钟数转化为天数和小时数',
        content:  
    `
    let min = 9999;
    this.center_info.three.day = ((min - (min % 60)) / 60 - ((min - (min % 60)) / 60 % 24)) / 24;
    this.center_info.three.hour = ((min - (min % 60)) / 60) % 24;
    this.center_info.three.min = min % 60;
    `
    },
    
    {
        title: '字符串',
        content:  
    `
    字符串属性
    constructor  	返回创建字符串属性的函数
    length	   返回字符串的长度
    prototype   	允许向对象添加属性和方法

    字符串方法
    charAt()	 返回指定索引位置的字符
    charCodeAt()   	 返回指定索引位置字符的 Unicode 值
    concat()	 连接两个或多个字符串，返回连接后的字符串
    fromCharCode()	   将 Unicode 转换为字符串
    indexOf()	 返回字符串中检索指定字符第一次出现的位置
    lastIndexOf()	 返回字符串中检索指定字符最后一次出现的位置
    localeCompare()	    用本地特定的顺序来比较两个字符串
    match()	    找到一个或多个正则表达式的匹配
    replace()	 替换与正则表达式匹配的子串
    search()	检索与正则表达式相匹配的值
    slice()	    提取字符串的片断，并在新的字符串中返回被提取的部分
    split()	    把字符串分割为子字符串数组
    substr()	 从起始索引号提取字符串中指定数目的字符
    substring()	    提取字符串中两个指定的索引号之间的字符
    toLocaleLowerCase()	    根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射
    toLocaleUpperCase()	    根据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射
    toLowerCase()	  把字符串转换为小写
    toString()	   返回字符串对象值
    toUpperCase()	 把字符串转换为大写
    trim()	   移除字符串首尾空白
    valueOf()	   返回某个字符串对象的原始值
    `,
    },
    
    {
        title: 'JavaScript Switch 语句',
        content:  
    `
    // 把表达式的值与每个 case 的值进行对比，如果匹配，执行关联代码并结束语句;
    switch(表达式) {
        case x:
            代码
            break;
        case x:
            代码
            break;
        default:
            默认代码
    } 
    `,
    },
    
    {
        title: 'for...in',
        content:  
    `
    // 我用来遍历对象
    let obj = {a: 111,b:222,c:333};
    for(item in obj){
        console.log(item + ' --- ' + obj[item])
    }
    // 输出 a --- 111 b --- 222 c --- 333
    `,
    },
    
    {
        title: 'for...of',
        content:  
    `
    // 可以对Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构;
    let arr = ['a','c','e']
    for(item of arr){
        console.log(item)
    }
    // 输出 a c e
    `,
    },
    
    {
        title: 'javaScript输出',
        content:  
    `
    window.alert()    alert("弹出警告框")
    document.write()    document.write("将此内容写到 HTML 文档中"));文档完成加载时调用页面将被覆盖
    innerHTML    document.getElementById("id").innerHTML = "写入到 HTML 元素的内容"
    console.log()    写入到浏览器的控制台
    `,
    },
    
    {
        title: '将两个数组并为一个json对象',
        content:  
    `
    var jsonArray = [];
    var zzarray = ['a','b'];     // json key
    var daarray = [1,2];     // json value
        
    for(var i = 0;i<zzarray.length;i++){
        var json = {};
        for(var j=0;j<daarray.length;j++){
            if(i==j){
                json.value = daarray[j];
                json.name = zzarray[i];
                jsonArray.push(json);
            }
        }
    }
    console.log(jsonArray)
    `,
    },

    {
        title: '获取对象的key value并添加到数组',
        content:  
    `
    const obj = {
        name:'leilei',
        phone: '13333333333',
        email: '13333333333@QQ.com'
    }
    var key_arr = Object.keys(obj);     // 对象 key 的数组
    var value_arr = Object.values(obj);     // 对象 value 的数组
    
    console.log(key_arr) 
    console.log(value_arr)
    `,
    },
    
    {
        title: '将两个数组并为一个json对象',
        content:  
    `
    var jsonArray = [];
    var zzarray = ['a','b'];     // json key
    var daarray = [1,2];     // json value
        
    for(var i = 0;i<zzarray.length;i++){
        var json = {};
        for(var j=0;j<daarray.length;j++){
            if(i==j){
                json.value = daarray[j];
                json.name = zzarray[i];
                jsonArray.push(json);
            }
        }
    }
    console.log(jsonArray)
    `,
    },
    
    {
        title: '判断对象下属性是否为空',
        content:  
    `
    obj_is_null(obj){      // 判断一个对象下是否有空属性
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] === null || obj[key] === '') {
                    console.log('为空')
                }else{
                    console.log('不为空')
                }
            }
        }
    },
    obj_is_null(obj);     // 使用方法
    `,
    },
    
    {
        title: '根据日期计算年龄',
        content:  
    `
    getAge(){
        let birthdays = new Date(出生日期.replace(/-/g, "-或者/，根据日期格式选择"));
        let d = new Date();
        let age = d.getFullYear() - birthdays.getFullYear() - (d.getMonth() < birthdays.getMonth() || (d.getMonth() == birthdays.getMonth() && d.getDate() < birthdays.getDate()) ? 1 : 0);
        console.log(age)
    }
    `,
    },
    
    {
        title: '输入框只能输入数字和小数点',
        content:  
    `
    <input type="number" placeholder="请输入数字" onkeypress="return (/[\d.]/.test(String.fromCharCode(event.keyCode)))"></input>
    `,
    },
    
    {
        title: '将内容复制到剪切板',
        content:  
    `
    传参数，复制参数到剪切板；没有参数，使用id选择器将该选择器下的文本复制到剪切板
    copy_to_clipboard (str) {      // 将参数复制到剪切板
        let Url2 = str;
        // let Url2 = document.getElementById("biao1").innerText;
        let oInput = document.createElement('input');
        oInput.value = Url2;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display='none';
        alert('成功复制到剪切板')
    }
    // copy_to_clipboard(参数) 
    `,
    },
    
    {
        title: '正则',
        content:  
    `
    // 正则表达式修饰符
    i	 执行对大小写不敏感的匹配
    g	 执行全局匹配 (查找所有匹配而非在找到第一个匹配后停止 )
    m	 执行多行匹配
    
    元字符是拥有特殊含义的字符
    \d	  查找数字
    \s	  查找空白字符
    \b	  匹配单词边界
    \\uxxxx	  查找以十六进制数 xxxx 规定的 Unicode 字符

    // 将字符串中英文括号替换成中文括号
    let reg1 = /[\(]/g, reg2 = /[\)]/g;
    let str = '(中国）';
    str = str.replace(reg1, "（").replace(reg2, "）");
    console.log(str);       // （中国）
    `,
    },
    
    {
        title: '两个时间比较大小',
        content:  
    `
    date_compare(date_one, date_two) {
        var date_one = new Date(date_one );
        var date_two= new Date(date_two);
        if (date_one .getTime() - date_two.getTime() <= 0) {
            return true   // 第二个时间大
        } else {
            return false    // 第一个时间大
        }
    }
    `,
    },
    
    {
        title: '输入框获取焦点',
        content:  
    `
    <input id="inpue_focus" placeholder="请输入子公司名称" @blur="change_company_name_blur" v-model="input" clearable></input>
    setTimeout("document.getElementById('inpue_focus').focus()",100);     // 延时执行，否则报错
    `,
    },
    
    {
        title: '判断是不是移动端打开',
        content:  
    `
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // 是移动端打开
    } else {
        // 不是移动端打开
    }
    `,
    },
    
    {
        title: 'Date(时间日期对象)',
        content:  
    `
    创建Date对象
    new Date('2019/08/16 9:51:30');
    new Date(2019,8,16,9,50,30);    //第二个参数代表月份,月份的范围:0-11,代表1-12月
    new Date()    //存储当前所在的操作系统时间
    new Date(1000*60*60*24);    //距离计算机元年毫秒数对应的日期时间

    获取Date对象中存储的日期时间
    var e=new Date();
    console.log( e.getFullYear() );    // 获取年份
    console.log( e.getMonth() );    // 获取月份
    console.log( e.getDate() );    // 获取日期
    console.log( e.getHours() );    // 获取时
    console.log( e.getMinutes() );    获取分
    console.log( e.getSeconds() );    获取秒
    console.log( e.getMilliseconds() );    // 获取毫秒
    console.log( e.getDay() );    // 获取星期
    console.log( e.getTime() );    // 获取当前时间距离计算机元年毫秒数

    设置日期时间
    var da=new Date('2019/8/16 14:22:30');
    da.setFullYear(2017);    // 修改年份
    da.setMonth(11);    // 修改月份
    da.setDate(7);    // 修改天
    da.setDate( da.getDate()+7 );    // 天数修改到七天后
    da.setHours(5);    // 修改小时
    da.setHours( da.getHours()+3 );    // 小时设置到3小时以后
    da.setMinutes(55);    // 修改分钟
    da.setSeconds(00);    // 修改秒
    console.log( da.toLocaleString() );    // 2017/12/14 上午8:55:00

    拷贝一个Date对象
    var d1=new Date();
    var d2=new Date(d1);     //以参数形式传递给Date,就会拷贝成一个新的对象

    获取当前系统时间，精确到秒
    let yy = new Date().getFullYear();
    let mm = new Date().getMonth() + 1 < 10 ? "0" + (new Date().getMonth() + 1) : new Date().getMonth() + 1;
    let dd = new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate();
    let hh = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours();
    let mf = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();
    let hm = new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds();
    
    let dateTime = yy + "." + mm + "." + dd + " " + hh + ":" + mf + ":" + hm
    console.log( dateTime )
    `,
    },
    
    {
        title: 'Math(数学)对象',
        content:  
    `
    console.log( Math.PI);    // 获取圆周率
    console.log( Math.abs(23-25) )    // 取绝对值
    console.log( parseInt(-3.14) );    // 向0取整
    console.log( Math.ceil(3.14) );    // 向上取整 
    console.log( Math.floor(-3.14) );    // 向下取整
    console.log( Math.round(4.54) );    // 四舍五入取整
    console.log( Math.max(4,4541,15,145,485,32,45) );    // 获取一组数字最大值
    console.log( Math.min(4,4541,15,145,485,32,45) );    // 获取一组数字最小值
    console.log( Math.pow(4,2) );    // 求x的y次幂
    console.log( Math.random() );    // 取随机,范围是0-1
    console.log( Math.floor(Math.random()*10) );    // 取随机,random*10,用向下取整让范围是0-9
    var uname=['赵','钱','孙','李','周','吴','郑','王','冯','程','1','2','3'];    // 随机点名
    var num=Math.floor(Math.random()*uname.length);
    console.log( uname[num] );
    `,
    },
    
    {
        title: '数组',
        content:  
    `
    数组名.indexOf(1)    // 判断数组里是否有'1'这个元素
    let arr=['tom','jerry','king'];
    let arr1=['scott','lucy'];
    let arr2=['david','jones'];
    console.log( arr.toString() )    // 转字符串
    console.log( arr.join('-') )    // 按照字符转字符串
    console.log( arr.concat(arr1,arr2) )    // 拼接数组
    arr.slice(start,end)    // 截取数组,start是开始下标(必选),end是结束下标(可选),没有结束下标截取到数组末尾
    arr.splice(start,num,val1...valn)    // 添加,删除数组元素(返回选中元素,会修改原数组),start(开始下标),num(要删除的数量,为0不删除),valx(要新加的数组)
    arr.unshift()    // 在数组开始位置新加元素(返回数组长度)
    arr.shift()     // 删除数组开始位置元素(返回元素)
    arr.push('111','222')    // 在数组末尾添加元素
    arr.pop()     // 删除数组末尾元素(返回删除元素,改变原数组,空数组时返回undefined)
    `,
    },
    
    {
        title: '判断字符串里是否包含另一个字符串',
        content:  
    `
    if(字符串变量.indexOf("被包含的字符串变量") !== -1){
        // 包含
    }else{
        // 不包含
    }
    `,
    },
    
    {
        title: '多个日期中取获得最大和最小日期',
        content:  
    `
    var dates=[];
    dates.push(new Date("2011/06/25"))
    dates.push(new Date("2011/06/26"))
    dates.push(new Date("2011/06/27"))
    dates.push(new Date("2011/06/28"))
    var maxDate=new Date(Math.max.apply(null,dates));
    var minDate=new Date(Math.min.apply(null,dates));
    
    let arr_min_date = this.formatDate(minDate)
    let arr_max_date = this.formatDate(maxDate)
    
    formatDate (date) {         // 返回值：2015-03-19
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
    },
    
    function formatDateTime (date) {        // 返回值：2015-03-19 12:00
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        var minute = date.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        return y + '-' + m + '-' + d+' '+h+':'+minute;
    }
    `,
    },
    
    {
        title: '浏览器本地存储 -- localStorage(永久性储存)',
        content:  
    `
    // sessionStorage 一样，但是是会话级储存，会话结束，数据删除
    // localStorage写入三种方式
    storage["a"]=1;
    storage.a=1;
    storage.setItem("c",3);

    // localStorage读取三种方式
    var a=storage.a;
    var b=storage["b"];
    var c=storage.getItem("c");
    console.log(a,b,c);

    window.localStorage.a=4;    // localStorage改变值

    var storage=window.localStorage;
    storage.clear();    // localStorage清空

    var storage=window.localStorage;
    storage.removeItem("b");    // localStorage删除某个值
    `,
    },
    
    {
        title: '定时器',
        content:  
    `
    let timer = setTimeout(() => {    // 一次性定时器
        console.log('ddd')
    },2000)
    clearTimeout(timer)    // 清除定时器

    let timer = setInterval(() => {    // 周期性定时器
        console.log('ddd')
    },2000)
    clearInterval(timer)    // 清除定时器

    // 周期性定时器,执行三次后清除
    let timer_i = 0;
    let timer = setInterval( () => {
        console.log('嘀嘀嘀');
        timer_i++;
        if(timer_i >= 3){
            clearInterval(timer);
        }
    }, 3000);
    `,
    },
    
    {
        title: '上传文件',
        content:  
    `
    upload_file(event){
        const isSize = event.target.files[0].size / 1024 / 1024 < 5;
        if (!isSize) {     // 判断大小
            this.$message.error('上传文件/图片大小不能超过 5MB!');
        }else{
            file: event.target.files[0];     // 文件,请求接口当作参数上传
        }
    }
    `,
    },
];