<template>
<div class="HomePageClient1">
  公用组件1{{sendData}}
</div>
</template>

<script>
    export default {
        name: "HomePageClient1",
		props:["sendData"],
		data(){
			return{
				// titleData:""
			}
		},
    }
</script>

<style scoped>
.HomePageClient1{height: 1rem;line-height: 1rem;color: #fff;text-align: center;position: fixed;top: 0;width: 100%;}
</style>
