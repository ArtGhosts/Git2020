<template>
	<div class="HomePage">
    <h1>搞一波插槽的用处吧</h1>


    <HomePageClient1>

      <div>插槽中的数据哦</div>

    </HomePageClient1>
	</div>

</template>

<script>
	import Vue from "vue"
  import HomePageClient1 from "./HomePage/HomePageClient1";
  export default {
		name: "HomePage",
    components: {HomePageClient1},
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
