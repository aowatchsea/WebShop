import Vue from 'vue'
import App from './App'
import store from './store'

// 引入路由器
import router from './router/index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入 vue-beauty 模块
import 'vue-beauty/package/style/vue-beauty.min.css'
import vueBeauty from 'vue-beauty'
Vue.use(vueBeauty)

// 引入二维码图片生成模块
import VueQRCodeComponent from 'vue-qr-generator'
Vue.component('qr-code', VueQRCodeComponent)

// 配置图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from './common/img/loading.gif'
Vue.use(VueLazyload, {
  loading
});

// 引入全局过滤器
import '@/config/filters'

import 'bootstrap/dist/css/bootstrap.css'

new Vue({
  el:'#app',
  router,
  store,
  render: h=>h(App)
});
