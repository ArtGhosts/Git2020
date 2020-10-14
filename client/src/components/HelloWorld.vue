<template>
  <div class="hello">
    <h1 style="margin: 0 auto;text-align: center">欢迎来到德莱联盟</h1>
    <h1 @click="Go">即将进入德莱联盟</h1>
	<span v-tip="msg" style="margin-top: 50px;display: inline-block;">sadsadsadd</span>
  </div>
</template>

<script>
	
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
		Go(){
			this.$router.push({
			  path:'/home'
			})
		},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
