<template>
	<div class="HomePage">
    <HomePageClient1 :sendData="newData"></HomePageClient1>
	<transition  :name="transition">
	  <router-view window.document.title = to.meta.title  style="padding-top: 1rem;"></router-view>
	  </transition>
    <HomePageClient2 @event1="change($event)"></HomePageClient2>
</div>
</template>

<script>
	import Vue from "vue"
	import HomePageClient1 from "./HomePage/HomePageClient1";
	import HomePageClient2 from "./HomePage/HomePageClient2";
	export default {
		name: "HomePage",
		components: {HomePageClient2, HomePageClient1},
		data() {
			return {
				newData:"ads1",
			}
		},
		methods: {
			change(data) {
			    this.newData = data;
			}
		},
		created() {

		},
		
	}
</script>

<style>
	.HomePage{
		width: 100%;
		    height: 100%;
			background: #01071d;
	}
	/*向左滑动*/
	@keyframes slideInLeft {
	    from {
	        transform: translate3d(100%, 0, 0);
	        position: fixed;
	        top: 0;
	        left: 0;
	        opacity: 1;
	    }
	    to {
	        transform: translate3d(0, 0, 0);
	        position: fixed;
	        top: 0;
	        left: 0;
	        opacity: 1;
	    }
	}
	@keyframes slideInRight {
	    from {
	        transform: translate3d(0%, 0, 0);
	        position: fixed;
	        top: 0;
	        left: 0;
	        opacity: 1;
	    }
	    to {
	        transform: translate3d(-100%, 0, 0);
	        position: fixed;
	        top: 0;
	        left: 0;
	        opacity: 1;
	    }
	}
	.slide-left-enter-active{
	    position: fixed;
	    top: 0;
	    left: 0%;
	    width: 100vw;
	    height: 100vh;
	    animation: slideInLeft .5s linear forwards;
	}
	.slide-left-leave-active{
	    position: fixed;
	    top: 0;
	    left: 0%;
	    width: 100vw;
	    height: 100vh;
	    animation: slideInRight .5s linear forwards;
	}
	/*向右滑动*/
	@keyframes slideOutLeft {
	    from {
	        transform: translate3d(-100%, 0, 0);
	        position: fixed;
	        top: 0;
	        left: 0;
	        opacity: 1;
	    }
	    to {
	        transform: translate3d(0%, 0, 0);
	        position: fixed;
	        top: 0;
	        left: 0;
	        opacity: 1;
	    }
	}
	@keyframes slideOutRight {
	    from {
	        transform: translate3d(0%, 0, 0);
	        position: fixed;
	        top: 0;
	        left: 0;
	        opacity: 1;
	    }
	    to {
	        transform: translate3d(100%, 0, 0);
	        position: fixed;
	        top: 0;
	        left: 0;
	        opacity: 1;
	    }
	}
	.slide-right-enter-active{
	    position: fixed;
	    top: 0;
	    left: 0%;
	    width: 100vw;
	    height: 100vh;
	    animation: slideOutLeft .5s linear forwards;
	}
	.slide-right-leave-active{
	    position: fixed;
	    top: 0;
	    left: 0%;
	    width: 100vw;
	    height: 100vh;
	    animation: slideOutRight .5s linear forwards;
	}
</style>
