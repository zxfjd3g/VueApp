import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './components/app'
import about from './components/about'
import home from './components/home'
import message from './components/message'
import news from './components/news'
import messageDetail from './components/messageDetail'

//声明使用插件
Vue.use(VueRouter)

//创建路由器对象
const router = new VueRouter({
  linkActiveClass: 'active', //指定当前路由链接的样式名
  history: true //去掉#!
})
//映射路由
router.map({
  '/about': {component: about},
  '/home': {
    component: home,
    subRoutes: {
      '/news': {component: news},
      '/message': {
        component: message,
        subRoutes: {
          '/mdetail/:id': {component: messageDetail}
        }
      }
    }
  }
})
//启动应用
router.start(app, '#routerTest')

//初始请求指定路由
 router.go('/about')
