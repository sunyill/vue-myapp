import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import './styles/index.scss'
import './assets/css/iconfont.css' // 引入vant图标样式
import VeeValidate from 'vee-validate' // 表单验证
// import 'ant-design-vue/dist/antd.css'
// import { Button } from 'ant-design-vue' // 使用antD

// Vue.component(Button.name, Button)

Vue.use(Vant)
Vue.use(VeeValidate, {
  events: ''
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
