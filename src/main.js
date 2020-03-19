import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
import Vant from 'vant';
import './assets/css/reset.css';
import 'vant/lib/index.css';
import './assets/font/iconfont.css';
import './assets/font/iconfont.js'

Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
