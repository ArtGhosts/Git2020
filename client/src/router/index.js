import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
  routes: [
    {path: '/',name: 'HelloWorld',component: () => import(/* webpackChunkName: "HelloWorld" */ '../components/HelloWorld')},
	  {path: '/Home',name: 'Home',component: () => import(/* webpackChunkName: "Home" */ '../components/Home'),
      //子组件
      children:[
		    {path: '/client1',name: 'client1',component: () => import(/* webpackChunkName: "client1" */ '../components/client1')},
		    {path: '/client2',name: 'client2',component: () => import(/* webpackChunkName: "client2" */ '../components/client2')},
	    ],
  	},
    {path: '/HomePage',name: 'HomePage',component: () => import(/* webpackChunkName: "HelloWorld" */ '../components/HomePage'),
      children:[
        {path:'/HomePageClient1',name:"HomePageClient1",component:()=>import('../components/HomePage/HomePageClient1')},
      ],
    },
  ]
})
// router.beforeEach((to,from,next) =>{
//   //window.document.title = to.meta.title;
//   window.document.title = to.name;
//   next();
// })
// router.afterEach((to,from,next) =>{
//   window.scrollTo(0,0);
// })
// export default router;
