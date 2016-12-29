import Vue from 'vue'
import VueRouter from 'vue-router'
import configRoute from './route-config'
import app from './components/app.vue'

//使用插件
Vue.use(VueRouter)

//创建用来映射路由的路由器对象
const router = new VueRouter({
  linkActiveClass: 'active', //指定当前路由链接的样式名
  history: true //去掉#!
})

//配置路由
configRoute(router)

//启动应用
router.start(app, '#app')

//初始请求一个路由
router.go('/about')
