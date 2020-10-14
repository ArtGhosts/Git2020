// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vtip from 'vtip'
import 'vtip/lib/index.min.css'
// 注册指令使用
Vue.use(Vtip.directive)
// 工具函数调用
Vue.prototype.$tip = Vtip.tip
Vue.config.productionTip = false
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//路由跳转前进后退动画,Vue原型上定义transition为动画效果
		router.beforeEach ( (to, from, next) => {
		    	Vue.prototype.transition = 'slide-none';
		    	if(from.meta.tree > to.meta.tree) {
		    		// 后退,想右滑动
		    		Vue.prototype.transition = 'slide-right';
		    		from.meta.keepAlive = false;
		    		to.meta.keepAlive = true;
		    	} else if(from.meta.tree < to.meta.tree) {
				// 前进,想左滑动
				Vue.prototype.transition = 'slide-left';
				from.meta.keepAlive = true;
				to.meta.keepAlive = false;
			}else {
				// 同一层级,无动画
				Vue.prototype.transition = 'slide-none';
				from.meta.keepAlive = true;
				to.meta.keepAlive = true;
			}
			next();
		})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
