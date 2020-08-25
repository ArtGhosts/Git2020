<template>
	<div class="Home">
		<h1>home页面</h1>
		<p>这是home页面
		<button @click="clickClient1">调用client1的方法</button>
		<button @click="clickClient2">调用所有子组件的方法</button>
		</p>
		<client1 ref="children1"></client1>
		<client2 ref="children2"></client2>

	</div>
</template>

<script>
	import Vue from "vue"
	import client1 from "./client1.vue"
	import client2 from "./client2.vue"
	export default {
	  name: 'Home',
	  components:{
		  client1,client2
	  },
	  data () {
	    return {
	      msg: '这是home页面啊'
	    }
	  },
	  methods:{
		clickClient1(){
			this.$refs.children1.clientfun()

		},
		clickClient2(){
			console.log(this.$children);
			for(let i=0;i<this.$children.length;i++){
				 this.$children[i].clientfun();
				}
			// this.$refs.children2.clientfun2()
		},
		showParentData(){
			console.log("client1调用了父组件的方法取到了父组件的数值")

		},
	  }
	}
</script>

<style>

</style>
