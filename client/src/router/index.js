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
    {path: '/HomePage',name: 'HomePage',component: () => import(/* webpackChunkName: "HelloWorld" */ '../components/HomePage.vue'),
      children:[
        {path: "/HomePageHome",name: 'HomePageHome',component:()=>()=>import(/* webpackChunkName: "client1" */ '../components/HomePage/HomePageHome')},
        {path: '/HomePageClient1',name: 'HomePageClient1',component: () => import(/* webpackChunkName: "client1" */ '../components/HomePage/HomePageClient2')},
		    {path: '/HomePageClient2',name: 'HomePageClient2',component: () => import(/* webpackChunkName: "client1" */ '../components/HomePage/HomePageClient2')},
		{path: '/HomePageMine',name: 'HomePageMine',component: () => import(/* webpackChunkName: "client1" */ '../components/HomePage/HomePageMine')},
		{path: '/HomePageShopping',name: 'HomePageShopping',component: () => import(/* webpackChunkName: "client1" */ '../components/HomePage/HomePageShopping')},
		{path: '/HomePageSmart',name: 'HomePageSmart',component: () => import(/* webpackChunkName: "client1" */ '../components/HomePage/HomePageSmart')},
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
