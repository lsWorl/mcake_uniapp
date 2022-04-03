import Vue from 'vue'
import App from './App'
// 引入第三方库
import uView from "uview-ui";
Vue.use(uView);
// 引入组件
import NavCustom from 'components/nav-custom.vue'
Vue.component('nav-custom',NavCustom)
import HomeTitle from 'components/homt-title.vue'
Vue.component('home-title',HomeTitle)
import GoodItem from 'components/good-item.vue'
Vue.component('good-item',GoodItem)

// 挂载全局异步请求方法
import * as request from './utils/request.js'
for(let key in request){
	Vue.prototype[key] = request[key]
}

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
