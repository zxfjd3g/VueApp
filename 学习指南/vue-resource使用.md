## vue-resource插件使用
* 说明:
  * vue-resource是非官方提供的ajax插件, 受众广
  * github: https://github.com/pagekit/vue-resource
  * vue官方推荐使用axios作为ajax库
  * 下载
    ```
    npm install vue-resource --save
    ```
  * 基本使用编码
    ```
    //引入模块
    import VueResource from 'vue-resource'
    //使用插件
    Vue.use(VueResource)
   
    // 发送get请求
    this.$http.get('/someUrl').then((response) => {
      // success callback
      console.log(response.data) //返回结果数据
    }, (response) => {
      // error callback
      console.log(response.statusText) //错误信息
    });
    
    // 发送post请求
    
    
    ```
  * 详细用法(查看在线文档)
    ```
    Vue.http.get('/someUrl', [options]).then(successCallback, errorCallback);
    Vue.http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);
    Vue.http.json('/someUrl', [options]).then(successCallback, errorCallback);
    ```