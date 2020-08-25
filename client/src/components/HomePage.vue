<template>
	<div class="HomePage">
    <HomePageClient1></HomePageClient1>
	  <router-view></router-view>
    <HomePageClient2></HomePageClient2>
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

			}
		},
		methods: {

		},
		created() {

		}
	}
</script>

<style>
</style>
