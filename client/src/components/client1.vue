<template>
	<div class="client1">
		<h1>这是client1</h1>
		<button @click="client1button">client1的按钮调用父组件的数值</button>
	</div>

</template>

<script>
	import Vue from "vue"
	export default {
		name: "client1",
		components: {
			
		},
		data() {
			return {
				
			}
		},
		methods: {
			clientfun(){
				console.log("这个数据是在client1中的")
			},
			client1button(){
				this.$parent.showParentData();
				
			},
			
		},
		created() {
			
		}
	}
</script>

<style >
	
</style>
