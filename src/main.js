import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './plugins'
import echarts from 'echarts' // 在 webpack 环境下指向 components/ECharts.vue
import Antd, { Button } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

/**
 * @author chuzhixin 1204505056@qq.com （不想保留author可删除）
 * @description 生产环境默认都使用mock，如果正式用于生产环境时，记得去掉
 */

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('@/utils/static')
  mockXHR()
}

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(Antd)
Vue.use(Button)

// Vue.component('v-chart', VueECharts)
// Vue.component('echart', echarts)

new Vue({
  el: '#vue-admin-beautiful',
  router,
  store,
  render: (h) => h(App),
})
