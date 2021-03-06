import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

// 阻止启动生产消息
Vue.config.productionTip = false

// 添加事件总线
Vue.prototype.$bus = new Vue()

// 安装toast插件
Vue.use(toast)

// 解决移动端300ms的延迟
FastClick.attach(document.body)

// 使用懒加载的插件
Vue.use(VueLazyLoad, {
  loading:require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
