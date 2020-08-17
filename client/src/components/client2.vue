<template>
	<div class="client2">
			<h1>这是client2</h1>
			<button @click="ASeriousMan">好了不闹啦跳转到正儿八经的地方吧</button>
	</div>

</template>

<script>
	import Vue from "vue"
	export default {
		name: "client2",
		components: {

		},
		data() {
			return {

			}
		},
		methods: {
			clientfun(){
				console.log("这个数据是在client2中的")
			},
			// 跳转到正经页面
			ASeriousMan(){
        this.$router.push({
          path:'/HomePage'
        })

			},
		},
		created() {

		}
	}
</script>

<style >

</style>
