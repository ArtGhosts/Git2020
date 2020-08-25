<template>
    <div class="HomePageClient2">
      <ul class="both">
        <li @click="Home">首页</li>
        <li  @click="Smart">智能</li>
        <li @click="Shopping">商城</li>
        <li @click="Mine">我的</li>
      </ul>


    </div>
</template>

<script>
    export default {
        name: "HomePageClient2",
      methods:{
        Home(){this.$router.push({path:'./HomePageHome'})},
        Smart(){this.$router.push({path:'./HomePageSmart'})},
        Shopping(){this.$router.push({path:'./HomePageShopping'})},
        Mine(){this.$router.push({path:'./HomePageMine'})},
      }
    }
</script>

<style>
  .HomePageClient2 ul li{
    width: 25%;
    height: 4rem;
    text-align: center;
    color: red;
    float: left;
    font-width: bold;
  }

</style>
