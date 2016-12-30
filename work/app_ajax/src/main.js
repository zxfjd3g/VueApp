import Vue from 'vue'
import VueResource from 'vue-resource'
import app from './components/app.vue'

//声明使用插件
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { app }
})
