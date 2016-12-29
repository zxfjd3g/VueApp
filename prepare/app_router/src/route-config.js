/**
 * 路由配置
 */
import home from './components/home.vue'
import about from './components/about.vue'
import news from './components/news.vue'
import message from './components/message.vue'
import messageDetail from './components/message-detail.vue'
// console.log(messageDetail, typeof messageDetail)

export default function configRoute(router) {
  router.map({
    '/about': {component: about},
    '/home': {
      component: home,
      subRoutes: {
        '/news': {
          component: news
        },
        '/message': {
          component: message,
          subRoutes: {
            '/mdetail/:id': {
              component: messageDetail
            }
          }
        }
      }
    }
  })
}
