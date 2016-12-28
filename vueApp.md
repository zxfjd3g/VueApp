## vue-cli插件使用
* 说明:
  * vue-cli是vue官方提供的脚手架工具包
  * github: https://github.com/vuejs/vue-cli
* 使用vue-cli快速创建工程化项目
  * 使用基于webpack的简单模板创建项目: webpack-simple_demo
    ```
    npm install -g vue-cli    //下载脚手架包
    vue init webpack-simple webpack-simple_demo   //下载模板
    vue init webpack-simple#1.0 webpack-simple_demo   //下载模板
    cd webpack-simple_demo
    cyarn/npm install
    npm run dev
    访问: http://localhost:8080/
    ```
  * 使用基于webpack的完整模板创建项目: webpack_demo
    ```
    vue init webpack#1.0 webpack_demo
    cd webpack_demo
    cyarn/npm install
    npm run dev
    访问: http://localhost:8080/
    ```
## ESLint
* 说明
  * ESLint是一个代码规范检查工具
  * 官网: http://eslint.org/
  * 基本已替代以前的JSLint
* ESLint提供以下支持
	* ES6
	* AngularJS
	* JSX
	* Style检查
	* 自定义错误和提示
* ESLint提供以下几种校验
	* 语法错误校验
  * 不重要或丢失的标点符号，如分号
  * 没法运行到的代码块（使用过WebStorm的童鞋应该了解）
	* 未被使用的参数提醒
  * 漏掉的结束符，如}
  * 确保样式的统一规则，如sass或者less
	* 检查变量的命名
* 规则的错误等级有三种
	* 0：关闭规则。
  * 1：打开规则，并且作为一个警告（不影响exit code）。
	* 2：打开规则，并且作为一个错误（exit code将会是1）。
* 相关配置文件
  * .eslintrc.js : 规则相关配置文件, 可以在此修改规则
	* 在js/vue文件中指定
    ```
    /* eslint-disable no-new */
    new Vue({
      el: 'body',
      components: { App }
    })
    ```
	* .eslintignore: 指令检查忽略的文件,　可以在此添加想忽略的文件
    ```
    *.js
    *.vue
    ```
## vue-resource插件使用
* 说明:
  * vue-resource是非官方提供的ajax插件, 受众广
  * github: https://github.com/pagekit/vue-resource
  * vue官方推荐使用axios作为ajax库
  * 基本使用
    ```
    npm install vue-resource --save
    //引入模块
    import VueResource from 'vue-resource'
    //使用插件
    Vue.use(VueResource)
    // 发送get请求
    this.$http.get('/someUrl').then((response) => {
      // success callback
    }, (response) => {
      // error callback
    });
    
    ```
  * 详细用法: 查看在线文档
    
    
    