<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import "./assets/css/reset.css"
import "./assets/js/resize.js"
import "./assets/css/index.css"
export default {
  name: 'App'
}
</script>

<style>
	body,html{height: 100%;width: 100%;}
	#app{width: 100%;height: 100%;}
</style>
