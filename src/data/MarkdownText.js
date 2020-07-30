const markdownText = {
  text: '## 可视化面板介绍\n' +
    '\n' +
    '​\t应对现在数据可视化的趋势，越来越多企业需要在很多场景(营销数据，生产数据，用户数据)下使用，可视化图表来展示体现数据，让数据更加直观，数据特点更加突出。\n' +
    '\n' +
    '### 01-使用技术\n' +
    '\n' +
    '完成该项目需要具备以下知识：\n' +
    '\n' +
    '- div + css 布局\n' +
    '- flex 布局\n' +
    '- Less\n' +
    '- 原生js + jquery 使用\n' +
    '- rem适配\n' +
    '- **echarts基础**\n' +
    '\n' +
    '\n' +
    '\n' +
    '### 02- 案例适配方案\n' +
    '\n' +
    '- 设计稿是1920px  \n' +
    '\n' +
    '  1. flexible.js 把屏幕分为 24 等份\n' +
    '\n' +
    '  2. cssrem 插件的基准值是  80px \n' +
    '\n' +
    '     插件-配置按钮---配置扩展设置--Root Font Size 里面 设置。 \n' +
    '\n' +
    '     但是别忘记重启vscode软件保证生效\n' +
    '\n' +
    '\n' +
    '### 03-基础设置\n' +
    '\n' +
    '- body 设置背景图 ，缩放为 100%  ， 行高1.15\n' +
    '- css初始化\n' +
    '\n' +
    '### 04-header 布局\n' +
    '- 高度为100px\n' +
    '- 背景图，在容器内显示\n' +
    '- 缩放比例为 100%\n' +
    '- h1 标题部分   白色  38像素 居中显示  行高为 80像素\n' +
    '- 时间模块 showTime   定位右侧  right 为 30px   行高为 75px  文字颜色为：rgba(255, 255, 255, 0.7)     而文字大小为 20像素 \n' +
    '\n' +
    '~~~javascript\n' +
    '// 格式： 当前时间：2020年3月17-0时54分14秒\n' +
    '<script>\n' +
    '            var t = null;\n' +
    '            t = setTimeout(time, 1000);//開始运行\n' +
    '            function time() {\n' +
    '                clearTimeout(t);//清除定时器\n' +
    '                dt = new Date();\n' +
    '                var y = dt.getFullYear();\n' +
    '                var mt = dt.getMonth() + 1;\n' +
    '                var day = dt.getDate();\n' +
    '                var h = dt.getHours();//获取时\n' +
    '                var m = dt.getMinutes();//获取分\n' +
    '                var s = dt.getSeconds();//获取秒\n' +
    '                document.querySelector(".showTime").innerHTML = \'当前时间：\' + y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒";\n' +
    '                t = setTimeout(time, 1000); //设定定时器，循环运行     \n' +
    '            }\n' +
    ' </script>\n' +
    '~~~\n' +
    '\n' +
    '- header部分css样式\n' +
    '\n' +
    '~~~css\n' +
    'header {\n' +
    '  position: relative;\n' +
    '  height: 1.25rem;\n' +
    '  background: url(../images/head_bg.png) no-repeat top center;\n' +
    '  background-size: 100% 100%;\n' +
    '  h1 {\n' +
    '    font-size: 0.475rem;\n' +
    '    color: #fff;\n' +
    '    text-align: center;\n' +
    '    line-height: 1rem;\n' +
    '  }\n' +
    '  .showTime {\n' +
    '    position: absolute;\n' +
    '    top: 0;\n' +
    '    right: 0.375rem;\n' +
    '    line-height: 0.9375rem;\n' +
    '    font-size: 0.25rem;\n' +
    '    color: rgba(255, 255, 255, 0.7);\n' +
    '  }\n' +
    '}\n' +
    '~~~\n' +
    '\n' +
    '### 05-mainbox  主体模块\n' +
    '  - 需要一个上左右的10px 的内边距\n' +
    '\n' +
    '\n' +
    '- column 列容器，分三列，占比 3：5：3\n' +
    '\n' +
    'css样式：\n' +
    '\n' +
    '```css\n' +
    '.mainbox {\n' +
    '  padding: 0.125rem 0.125rem 0;\n' +
    '  display: flex;\n' +
    '  .column {\n' +
    '    flex: 3;\n' +
    '  }\n' +
    '  &:nth-child(2) {\n' +
    '    flex: 5;\n' +
    '  }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '### 06-公共面板模块 panel \n' +
    '  - 高度为 310px\n' +
    '  - 1像素的 1px solid rgba(25, 186, 139, 0.17)  边框\n' +
    '  - 有line.jpg 背景图片\n' +
    '  - padding为  上为 0  左右 15px  下为 40px\n' +
    '  - 下外边距是 15px\n' +
    '  - 利用panel  盒子 before 和after 制作上面两个角   大小为 10px  线条为  2px solid #02a6b5\n' +
    '  - 新加一个盒子before 和after   制作下侧两个角  宽度高度为 10px\n' +
    '\n' +
    '~~~css\n' +
    '.panel {\n' +
    '  position: relative;\n' +
    '  height: 3.875rem;\n' +
    '  border: 1px solid rgba(25, 186, 139, 0.17);\n' +
    '  background: url(../images/line\\(1\\).png);\n' +
    '  padding: 0 0.1875rem 0.5rem;\n' +
    '  margin-bottom: 0.1875rem;\n' +
    '  &::before {\n' +
    '    position: absolute;\n' +
    '    top: 0;\n' +
    '    left: 0;\n' +
    '    content: "";\n' +
    '    width: 10px;\n' +
    '    height: 10px;\n' +
    '    border-top: 2px solid #02a6b5;\n' +
    '    border-left: 2px solid #02a6b5;\n' +
    '  }\n' +
    '  &::after {\n' +
    '    position: absolute;\n' +
    '    top: 0;\n' +
    '    right: 0;\n' +
    '    content: "";\n' +
    '    width: 10px;\n' +
    '    height: 10px;\n' +
    '    border-top: 2px solid #02a6b5;\n' +
    '    border-right: 2px solid #02a6b5;\n' +
    '  }\n' +
    '  .panel-footer {\n' +
    '    position: absolute;\n' +
    '    left: 0;\n' +
    '    bottom: 0;\n' +
    '    width: 100%;\n' +
    '    &::before {\n' +
    '      position: absolute;\n' +
    '      bottom: 0;\n' +
    '      left: 0;\n' +
    '      content: "";\n' +
    '      width: 10px;\n' +
    '      height: 10px;\n' +
    '      border-bottom: 2px solid #02a6b5;\n' +
    '      border-left: 2px solid #02a6b5;\n' +
    '    }\n' +
    '    &::after {\n' +
    '      position: absolute;\n' +
    '      bottom: 0;\n' +
    '      right: 0;\n' +
    '      content: "";\n' +
    '      width: 10px;\n' +
    '      height: 10px;\n' +
    '      border-bottom: 2px solid #02a6b5;\n' +
    '      border-right: 2px solid #02a6b5;\n' +
    '    }\n' +
    '  }\n' +
    '}\n' +
    '~~~\n' +
    '\n' +
    '\n' +
    '\n' +
    '### 07-柱形图 bar 模块(布局)\n' +
    '\n' +
    '  - 标题模块  h2    高度为 48px   文字颜色为白色  文字大小为  20px  \n' +
    '\n' +
    '  - 图标内容模块  chart   高度 240px \n' +
    '\n' +
    '  - 以上可以作为panel公共样式部分 \n' +
    '\n' +
    '\n' +
    '~~~css\n' +
    '  h2 {\n' +
    '    height: 0.6rem;\n' +
    '    line-height: 0.6rem;\n' +
    '    text-align: center;\n' +
    '    color: #fff;\n' +
    '    font-size: 20px;\n' +
    '    font-weight: 400;\n' +
    '  }\n' +
    '  .chart {\n' +
    '    height: 3rem;\n' +
    '    background-color: pink;\n' +
    '  }\n' +
    '~~~\n' +
    '\n' +
    '### 09-Echarts-介绍\n' +
    '\n' +
    '常见的数据可视化库：\n' +
    '\n' +
    '- D3.js   目前 Web 端评价最高的 Javascript 可视化工具库(入手难)  \n' +
    '- ECharts.js   百度出品的一个开源 Javascript 数据可视化库   \n' +
    '- Highcharts.js  国外的前端数据可视化库，非商用免费，被许多国外大公司所使用  \n' +
    '- AntV  蚂蚁金服全新一代数据可视化解决方案  等等\n' +
    '- Highcharts 和 Echarts 就像是 Office 和 WPS 的关系\n' +
    '\n' +
    '> ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖矢量图形库 [ZRender](https://github.com/ecomfe/zrender)，提供直观，交互丰富，可高度个性化定制的数据可视化图表。\n' +
    '\n' +
    '大白话：\n' +
    '\n' +
    '- 是一个JS插件\n' +
    '- 性能好可流畅运行PC与移动设备\n' +
    '- 兼容主流浏览器\n' +
    '- 提供很多常用图表，且可**定制**。\n' +
    '  - [折线图](https://www.echartsjs.com/zh/option.html#series-line)、[柱状图](https://www.echartsjs.com/zh/option.html#series-bar)、[散点图](https://www.echartsjs.com/zh/option.html#series-scatter)、[饼图](https://www.echartsjs.com/zh/option.html#series-pie)、[K线图](https://www.echartsjs.com/zh/option.html#series-candlestick)\n' +
    '\n' +
    '### 10-Echarts-体验\n' +
    '\n' +
    '官方教程：[五分钟上手ECharts](https://www.echartsjs.com/zh/tutorial.html#5 分钟上手 ECharts)\n' +
    '\n' +
    '- 下载echarts  https://github.com/apache/incubator-echarts/tree/4.5.0  \n' +
    '\n' +
    '使用步骤：\n' +
    '\n' +
    '1. 引入echarts  `dist/echarts.min.js`\n' +
    '2. 准备一个具备大小的DOM容器\n' +
    '\n' +
    '```html\n' +
    '<div id="main" style="width: 600px;height:400px;"></div>\n' +
    '```\n' +
    '\n' +
    '3.  初始化echarts实例对象\n' +
    '\n' +
    '```js\n' +
    'var myChart = echarts.init(document.getElementById(\'main\'));\n' +
    '```\n' +
    '\n' +
    '4. 指定配置项和数据(option)\n' +
    '\n' +
    '```js\n' +
    'var option = {\n' +
    '    xAxis: {\n' +
    '        type: \'category\',\n' +
    '        data: [\'Mon\', \'Tue\', \'Wed\', \'Thu\', \'Fri\', \'Sat\', \'Sun\']\n' +
    '    },\n' +
    '    yAxis: {\n' +
    '        type: \'value\'\n' +
    '    },\n' +
    '    series: [{\n' +
    '        data: [820, 932, 901, 934, 1290, 1330, 1320],\n' +
    '        type: \'line\'\n' +
    '    }]\n' +
    '};\n' +
    '```\n' +
    '\n' +
    '5. 将配置项设置给echarts实例对象\n' +
    '\n' +
    '```js\n' +
    'myChart.setOption(option);\n' +
    '```\n' +
    '\n' +
    '### 11-Echarts-基础配置\n' +
    '\n' +
    '> 需要了解的主要配置：`series` `xAxis` `yAxis` `grid` `tooltip` `title` `legend` `color` \n' +
    '\n' +
    '- series\n' +
    '\n' +
    '  - 系列列表。每个系列通过 `type` 决定自己的图表类型\n' +
    '  - 大白话：图标数据，指定什么类型的图标，可以多个图表重叠。\n' +
    '\n' +
    '- xAxis：直角坐标系 grid 中的 x 轴\n' +
    '\n' +
    '  - boundaryGap: 坐标轴两边留白策略 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。\n' +
    '\n' +
    '- yAxis：直角坐标系 grid 中的 y 轴\n' +
    '\n' +
    '- grid：直角坐标系内绘图网格。 \n' +
    '\n' +
    '- title：标题组件\n' +
    '\n' +
    '- tooltip：提示框组件\n' +
    '\n' +
    '- legend：图例组件\n' +
    '\n' +
    '- color：调色盘颜色列表\n' +
    '\n' +
    '  数据堆叠，同个类目轴上系列配置相同的`stack`值后 后一个系列的值会在前一个系列的值上相加。\n' +
    '\n' +
    '### 12- 柱状图图表\n' +
    '\n' +
    '- 官网找到类似实例， 适当分析，并且引入到HTML页面中\n' +
    '- 根据需求定制图表\n' +
    '\n' +
    '1. 引入到html页面中\n' +
    '\n' +
    '~~~javascript\n' +
    '// 柱状图1模块\n' +
    '(function() {\n' +
    '  // 实例化对象\n' +
    '  let myChart = echarts.init(document.querySelector(".bar .chart"));\n' +
    '  // 指定配置和数据\n' +
    '  let option = {\n' +
    '    color: ["#3398DB"],\n' +
    '    tooltip: {\n' +
    '      trigger: "axis",\n' +
    '      axisPointer: {\n' +
    '        // 坐标轴指示器，坐标轴触发有效\n' +
    '        type: "shadow" // 默认为直线，可选为：\'line\' | \'shadow\'\n' +
    '      }\n' +
    '    },\n' +
    '    grid: {\n' +
    '      left: "3%",\n' +
    '      right: "4%",\n' +
    '      bottom: "3%",\n' +
    '      containLabel: true\n' +
    '    },\n' +
    '    xAxis: [\n' +
    '      {\n' +
    '        type: "category",\n' +
    '        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],\n' +
    '        axisTick: {\n' +
    '          alignWithLabel: true\n' +
    '        }\n' +
    '      }\n' +
    '    ],\n' +
    '    yAxis: [\n' +
    '      {\n' +
    '        type: "value"\n' +
    '      }\n' +
    '    ],\n' +
    '    series: [\n' +
    '      {\n' +
    '        name: "直接访问",\n' +
    '        type: "bar",\n' +
    '        barWidth: "60%",\n' +
    '        data: [10, 52, 200, 334, 390, 330, 220]\n' +
    '      }\n' +
    '    ]\n' +
    '  };\n' +
    '\n' +
    '  // 把配置给实例对象\n' +
    '  myChart.setOption(option);\n' +
    '})();\n' +
    '~~~\n' +
    '\n' +
    '2. 根据需求定制\n' +
    '\n' +
    '   - 修改图表柱形颜色  #2f89cf\n' +
    '\n' +
    '\n' +
    '   - 修改图表大小  top 为 10px   bottom 为  4%    grid决定我们的柱状图的大小\n' +
    '\n' +
    '   ~~~JavaScript\n' +
    '   color: ["#2f89cf"],\n' +
    '   grid: {\n' +
    '     left: "0%",\n' +
    '     top: "10px",\n' +
    '     right: "0%",\n' +
    '     bottom: "4%",\n' +
    '     containLabel: true\n' +
    '   },\n' +
    '   ~~~\n' +
    '\n' +
    '   - X轴相关设置  xAxis\n' +
    '     - 文本颜色设置为   rgba(255,255,255,.6)   字体大小为 12px\n' +
    '     - X轴线的样式 不显示\n' +
    '\n' +
    '   ~~~JavaScript\n' +
    '   // 设置x轴标签文字样式\n' +
    '  // x轴的文字颜色和大小\n' +
    '        axisLabel: {\n' +
    '          color: "rgba(255,255,255,.6)",\n' +
    '          fontSize: "12"\n' +
    '        },\n' +
    '   //  x轴样式不显示\n' +
    '   axisLine: {\n' +
    '       show: false\n' +
    '       // 如果想要设置单独的线条样式 \n' +
    '       // lineStyle: {\n' +
    '       //    color: "rgba(255,255,255,.1)",\n' +
    '       //    width: 1,\n' +
    '       //    type: "solid"\n' +
    '      }\n' +
    '   }\n' +
    '   ~~~\n' +
    '\n' +
    '   - Y 轴相关定制\n' +
    '     - 文本颜色设置为   rgba(255,255,255,.6)   字体大小为 12px\n' +
    '     - Y 轴线条样式 更改为  1像素的  rgba(255,255,255,.1) 边框\n' +
    '     - 分隔线的颜色修饰为  1像素的  rgba(255,255,255,.1)   \n' +
    '\n' +
    '   ~~~JavaScript\n' +
    '   // y 轴文字标签样式\n' +
    '   axisLabel: {\n' +
    '      textStyle: {\n' +
    '         color: "rgba(255,255,255,.6)",\n' +
    '          fontSize: "12"\n' +
    '      }\n' +
    '   },\n' +
    '    // y轴线条样式\n' +
    '    axisLine: {\n' +
    '         lineStyle: {\n' +
    '            color: "rgba(255,255,255,.1)",\n' +
    '            // width: 1,\n' +
    '            // type: "solid"\n' +
    '         }\n' +
    '   5232},\n' +
    '    // y 轴分隔线样式\n' +
    '   splitLine: {\n' +
    '       lineStyle: {\n' +
    '          color: "rgba(255,255,255,.1)"\n' +
    '        }\n' +
    '   }\n' +
    '   ~~~\n' +
    '\n' +
    '   - 修改柱形为圆角以及柱子宽度  series 里面设置\n' +
    '\n' +
    '   ~~~JavaScript\n' +
    '   series: [\n' +
    '         {\n' +
    '           name: "直接访问",\n' +
    '           type: "bar",\n' +
    '           // 修改柱子宽度\n' +
    '           barWidth: "35%",\n' +
    '           data: [10, 52, 200, 334, 390, 330, 220],\n' +
    '           itemStyle: {\n' +
    '             // 修改柱子圆角\n' +
    '             barBorderRadius: 5\n' +
    '           }\n' +
    '         }\n' +
    '       ]\n' +
    '     };\n' +
    '   ~~~\n' +
    '\n' +
    '   - 更换对应数据\n' +
    '\n' +
    '   ~~~JavaScript\n' +
    '   // x轴中更换data数据\n' +
    '    data: [ "旅游行业","教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业" ],\n' +
    '   // series 更换数据\n' +
    '    data: [200, 300, 300, 900, 1500, 1200, 600]\n' +
    '   ~~~\n' +
    '\n' +
    '- 让图表跟随屏幕自适应\n' +
    '\n' +
    '~~~javascript\n' +
    '  window.addEventListener("resize", function() {\n' +
    '    myChart.resize();\n' +
    '  });\n' +
    '~~~\n' +
    '\n' +
    '中间布局\n' +
    '\n' +
    '~~~html\n' +
    ' <div class="no">\n' +
    '                <div class="no-hd">\n' +
    '                    <ul>\n' +
    '                        <li>125811</li>\n' +
    '                        <li>104563</li>\n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '                <div class="no-bd">\n' +
    '                    <ul>\n' +
    '                        <li>前端需求人数</li>\n' +
    '                        <li>市场供应人数</li>\n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="map">\n' +
    '                <div class="chart"></div>\n' +
    '                <div class="map1"></div>\n' +
    '                <div class="map2"></div>\n' +
    '                <div class="map3"></div>\n' +
    '            </div>\n' +
    '~~~\n' +
    '\n' +
    '\n' +
    '\n' +
    '中间样式\n' +
    '\n' +
    '~~~css\n' +
    '/* 声明字体*/\n' +
    '@font-face {\n' +
    '  font-family: electronicFont;\n' +
    '  src: url(../font/DS-DIGIT.TTF);\n' +
    '}\n' +
    '.no {\n' +
    '  background: rgba(101, 132, 226, 0.1);\n' +
    '  padding: 0.1875rem;\n' +
    '  .no-hd {\n' +
    '    position: relative;\n' +
    '    border: 1px solid rgba(25, 186, 139, 0.17);\n' +
    '    &::before {\n' +
    '      content: "";\n' +
    '      position: absolute;\n' +
    '      width: 30px;\n' +
    '      height: 10px;\n' +
    '      border-top: 2px solid #02a6b5;\n' +
    '      border-left: 2px solid #02a6b5;\n' +
    '      top: 0;\n' +
    '      left: 0;\n' +
    '    }\n' +
    '    &::after {\n' +
    '      content: "";\n' +
    '      position: absolute;\n' +
    '      width: 30px;\n' +
    '      height: 10px;\n' +
    '      border-bottom: 2px solid #02a6b5;\n' +
    '      border-right: 2px solid #02a6b5;\n' +
    '      right: 0;\n' +
    '      bottom: 0;\n' +
    '    }\n' +
    '    ul {\n' +
    '      display: flex;\n' +
    '      li {\n' +
    '        position: relative;\n' +
    '        flex: 1;\n' +
    '        text-align: center;\n' +
    '        height: 1rem;\n' +
    '        line-height: 1rem;\n' +
    '        font-size: 0.875rem;\n' +
    '        color: #ffeb7b;\n' +
    '        padding: 0.05rem 0;\n' +
    '        font-family: electronicFont;\n' +
    '        font-weight: bold;\n' +
    '        &:first-child::after {\n' +
    '          content: "";\n' +
    '          position: absolute;\n' +
    '          height: 50%;\n' +
    '          width: 1px;\n' +
    '          background: rgba(255, 255, 255, 0.2);\n' +
    '          right: 0;\n' +
    '          top: 25%;\n' +
    '        }\n' +
    '      }\n' +
    '    }\n' +
    '  }\n' +
    '  .no-bd ul {\n' +
    '    display: flex;\n' +
    '    li {\n' +
    '      flex: 1;\n' +
    '      height: 0.5rem;\n' +
    '      line-height: 0.5rem;\n' +
    '      text-align: center;\n' +
    '      font-size: 0.225rem;\n' +
    '      color: rgba(255, 255, 255, 0.7);\n' +
    '      padding-top: 0.125rem;\n' +
    '    }\n' +
    '  }\n' +
    '}\n' +
    '.map {\n' +
    '  position: relative;\n' +
    '  height: 10.125rem;\n' +
    '  .chart {\n' +
    '    position: absolute;\n' +
    '    top: 0;\n' +
    '    left: 0;\n' +
    '    z-index: 5;\n' +
    '    height: 10.125rem;\n' +
    '    width: 100%;\n' +
    '  }\n' +
    '  .map1,\n' +
    '  .map2,\n' +
    '  .map3 {\n' +
    '    position: absolute;\n' +
    '    top: 50%;\n' +
    '    left: 50%;\n' +
    '    transform: translate(-50%, -50%);\n' +
    '    width: 6.475rem;\n' +
    '    height: 6.475rem;\n' +
    '    background: url(../images/map.png) no-repeat;\n' +
    '    background-size: 100% 100%;\n' +
    '    opacity: 0.3;\n' +
    '  }\n' +
    '  .map2 {\n' +
    '    width: 8.0375rem;\n' +
    '    height: 8.0375rem;\n' +
    '    background-image: url(../images/lbx.png);\n' +
    '    opacity: 0.6;\n' +
    '    animation: rotate 15s linear infinite;\n' +
    '    z-index: 2;\n' +
    '  }\n' +
    '  .map3 {\n' +
    '    width: 7.075rem;\n' +
    '    height: 7.075rem;\n' +
    '    background-image: url(../images/jt.png);\n' +
    '    animation: rotate1 10s linear infinite;\n' +
    '  }\n' +
    '\n' +
    '  @keyframes rotate {\n' +
    '    from {\n' +
    '      transform: translate(-50%, -50%) rotate(0deg);\n' +
    '    }\n' +
    '    to {\n' +
    '      transform: translate(-50%, -50%) rotate(360deg);\n' +
    '    }\n' +
    '  }\n' +
    '  @keyframes rotate1 {\n' +
    '    from {\n' +
    '      transform: translate(-50%, -50%) rotate(0deg);\n' +
    '    }\n' +
    '    to {\n' +
    '      transform: translate(-50%, -50%) rotate(-360deg);\n' +
    '    }\n' +
    '  }\n' +
    '}\n' +
    '\n' +
    '~~~\n' +
    '\n' +
    '\n' +
    '\n' +
    '### 13-Echarts-社区介绍\n' +
    '\n' +
    '> [社区](https://gallery.echartsjs.com/explore.html#sort=rank~timeframe=all~author=all)就是一些，活跃的echart使用者，交流和贡献定制好的图表的地方。\n' +
    '\n' +
    '![1576664444951](docs/media/1576664444951.png)\n' +
    '\n' +
    '- 在这里可以找到一些基于echart的高度定制好的图表，相当于基于jquery开发的插件，这里是基于echarts开发的第三方的图表。\n' +
    '\n' +
    '### 14-Echarts-map使用（扩展）\n' +
    '\n' +
    '参考社区的例子：https://gallery.echartsjs.com/editor.html?c=x0-ExSkZDM  (模拟飞机航线)\n' +
    '\n' +
    '实现步骤：\n' +
    '\n' +
    '- 第一需要下载china.js提供中国地图的js文件\n' +
    '- 第二个因为里面代码比较多，我们新建一个新的js文件 myMap.js 引入\n' +
    '- 使用社区提供的配置即可。\n' +
    '\n' +
    '需要修改：\n' +
    '\n' +
    '- 去掉图例组件和标题组件\n' +
    '- 去掉背景颜色\n' +
    '- 修改地图省份背景  #142957\n' +
    '- 地图放大通过  zoom   设置为1.2即可\n' +
    '\n' +
    '~~~javascript\n' +
    '    geo: {\n' +
    '      map: \'china\',\n' +
    '      zoom: 1.2,\n' +
    '      label: {\n' +
    '        emphasis: {\n' +
    '          show: false\n' +
    '        }\n' +
    '      },\n' +
    '      roam: false,\n' +
    '      itemStyle: {\n' +
    '        normal: {\n' +
    '          areaColor: \'#142957\',\n' +
    '          borderColor: \'#0692a4\'\n' +
    '        },\n' +
    '        emphasis: {\n' +
    '          areaColor: \'#0b1c2d\'\n' +
    '        }\n' +
    '      }\n' +
    '    },\n' +
    '~~~\n' +
    '\n' +
    '总结：这例子是扩展案例，大家以后可以多看看社区里面的案例。\n' +
    '\n' +
    '~~~css\n' +
    '/* 约束屏幕尺寸 */\n' +
    '@media screen and (max-width: 1024px) {\n' +
    '  html {\n' +
    '    font-size: 42px !important;\n' +
    '  }\n' +
    '}\n' +
    '@media screen and (min-width: 1920) {\n' +
    '  html {\n' +
    '    font-size: 80px !important;\n' +
    '  }\n' +
    '}\n' +
    '~~~'
}
export default markdownText
