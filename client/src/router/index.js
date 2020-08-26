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
		{path: '/HomePageClient1',name: 'HomePageClient1',component: () => import(/* webpackChunkName: "client1" */ '../components/HomePage/HomePageClient2')},
		{path: '/HomePageClient2',name: 'HomePageClient2',component: () => import(/* webpackChunkName: "client1" */ '../components/HomePage/HomePageClient2')},
		{path: '/HomePageHome',name: 'HomePageHome',component: () => import(/* webpackChunkName: "client1" */ '../components/HomePage/HomePageHome'),
    		meta:{tree: 1, }},
		{path: '/HomePageMine',name: 'HomePageMine',component: () => import(/* webpackChunkName: "client1" */ '../components/HomePage/HomePageMine'),
    		meta:{tree: 4,}},
		{path: '/HomePageShopping',name: 'HomePageShopping',component: () => import(/* webpackChunkName: "client1" */ '../components/HomePage/HomePageShopping'),
    		meta:{tree: 3,}},
		{path: '/HomePageSmart',name: 'HomePageSmart',component: () => import(/* webpackChunkName: "client1" */ '../components/HomePage/HomePageSmart'),
    		meta:{tree: 2,}},
      ],

    },
  ]
})
