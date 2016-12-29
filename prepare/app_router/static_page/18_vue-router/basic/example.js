// 定义一些组件
var Foo = Vue.extend({
  template: '<p>This is foo!</p>'
})
var Bar = Vue.extend({
  template: '<p>This is bar!</p>'
})
//创建用来注册路由的router对象
var router = new VueRouter()
//注册(映射)路由
router.map({
  '/foo': {
    component: Foo
  },
  '/bar': {
    component: Bar
  }
})
//创建一个根组件
var App = Vue.extend({})
//启动路由应用
router.start(App, '#app')
//请求默认路由
router.go('/foo');
