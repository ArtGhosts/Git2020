<template>
	<div class="HomePageClient2">
		<ul class="both">
			<li @click="OnHome(data,index)" v-for="(data,index) in Home">
				<img :src="imgsIndex==index?data.imgs:data.img"   alt="" class="" style="height: 0.36rem;margin-bottom: 0.1rem;">
				<p >{{data.name}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "HomePageClient2",
		data() {
			return {
				imgsIndex: 0,
				data1:"自己的数据",
				Home: [{
						name: "首页",
						img: require("../../assets/img/index/tabbar1.png"),
						imgs: require("../../assets/img/index/tabbar1_f90.png")
					},
					{
						name: "智能",
						img: require("../../assets/img/index/tabbar2.png"),
						imgs: require("../../assets/img/index/tabbar2_f90.png")
					},
					{
						name: "商城",
						img: require("../../assets/img/index/tabbar3.png"),
						imgs: require("../../assets/img/index/tabbar3_f90.png")
					},
					{
						name: "我的",
						img: require("../../assets/img/index/tabbar4.png"),
						imgs: require("../../assets/img/index/tabbar4_f90.png")
					},
				]
			}
		},
		methods: {
			OnHome(data,index) {
				this.imgsIndex=index;
				console.log(this.imgsIndex)
				let routers=['./HomePageHome','./HomePageSmart','./HomePageShopping','./HomePageMine'];
				this.$router.push({
					path: routers[index]
				});
				this.$emit('event1', this.data1)
			},

		}
	}
</script>

<style>
	.HomePageClient2 {
		position: fixed;
		bottom: 0;
		width: 100%;
		/* background: red; */
		z-index: 100;
	}

	.HomePageClient2 ul li {
		width: 25%;
		height: 1rem;
		/* line-height: 1rem; */
		text-align: center;
		/* color: red; */
		float: left;
		font-width: bold;
		padding-top: 0.15rem;
	}
</style>
