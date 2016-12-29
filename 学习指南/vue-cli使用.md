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