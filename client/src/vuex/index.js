//默认导出
export default ({
/*  vuex中有四个方法,
其中大概用法为
在页面中将数据存储入vuex
this.$store.commit("name",box);
其中"name"为vuex.js中的方法名称  box为即将传入vuex中的数据值
然后再vuex中进行调取
name(state,res){
  console.log(res);
}
其中name为方法名  state是vuex中存储数据 res即为 上文的box数据值
然后再state中定义数值进行接收即可
console.log(this.$store.state.vuexone,"页面获取");
其中this.$store是默认方法不可改动  state是在main.js中注册名称 vuexone是在main.js中state的模块名称

const store=new Vuex.Store({
  plugins: [createPersistedState()],
  modules:{
    vuexone
  }
});
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

  */
//  存储数据
  state:{},
//  方法
  mutations:{

  },
//  计算属性
  getters:{

  },
//  方法的异步操作
  action:{

  },
})
