<template>
  <div class="HomePageHome">
    <h1>home页面</h1>

  <!--  <div class="statement">
      <div class="fl">
        <p class="dib vm mt30 cl_fff f72">18</p>
        <span class="dib vm f28 cl_fff">°c</span>
        <p class="cl_979bb2 f28 mt15">杭州市西湖区</p>
      </div>
      <div class="fr mt70">
        <p class="cl_fff f28 text_right mb5">多云</p>
        <p class="cl_fff f28"> PM2.5:68  |  良</p>
      </div>
      <div class="both"></div>
    </div>

    <div class="tabs">
      <a href="#" class="active">我的设备</a>
      <a href="#" class="">客厅</a>
      <a href="#" class="">主卧</a>
      <img src="../../assets/img/index/index_right.png" alt="" style="" class="index_icon_img">
      <img src="../../assets/img/index/index_right.png" alt="" style="" class="index_icon_img">

      <div class="van-tabs__line" style=""></div>
    </div>
    <div id="tabs-container" class="swiper-container swiper-container-horizontal">
      <div class="swiper-wrapper" style="">
        <div class="swiper-slide swiper-slide-next">
          <ul class="classify both" style="">
            <li v-for="(data,index) in houseHome" style="position: relative;">

              <a>
                <div class="pr">

                  <img :src="data.boxtrue==true?data.trueImgs:data.falseImgs" alt="" style="height: 0.56rem;width: 0.5rem" class="dib vm">

                </div>
                <p class="f32 mt40" :class='data.boxtrue==true?"cl_fff":"cl_676a7d"'>{{data.name}}</p>

              </a>
            </li>
          </ul>
        </div>
        <div class="swiper-slide swiper-slide-active notAdded">
          <img src="../../assets/img/OtherSettings/index4.png" style="width: 100%">
          <p class="f28 cl_676a7d center">～还没有添加设备哦～</p>
          <a href="add/addEquipments.html">立即添加</a>
        </div>
        <div class="swiper-slide">
          <h1>啥也没有</h1>
        </div>
      </div>

    </div>
 -->  </div>

</template>
<script>
  // import  Swiper from "swiper"
  // import  'swiper/swiper-bundle.min.css'
  // import  $ from "jquery"
  export default {
    name: "HomePageHome",
    data() {
      // return {
      //   distribute: ["我的设备", "客厅", "主卧", "侧卧", "厨房"],
      //   active: '',
      //   Tabbar: 0,
      //   // 滑块按钮
      //   checked: true,
      //   icon: {
      //     active: '../../assets/img/index/tabbar1_f90.png',
      //     inactive: '../../assets/img/index/tabbar1.png'
      //   },
      //   icon1: {
      //     active: '../../assets/img/index/tabbar2_f90.png',
      //     inactive: '../../assets/img/index/tabbar2.png'
      //   },
      //   icon2: {
      //     active: '../../assets/img/index/tabbar3_f90.png',
      //     inactive: '../../assets/img/index/tabbar3.png'
      //   },
      //   icon3: {
      //     active: '../../assets/img/index/tabbar4_f90.png',
      //     inactive: '../../assets/img/index/tabbar4.png'
      //   },
      //   houseHome: [
      //     {
      //     trueImgs:require('../../assets/img/index/ic1_f90.png'),
      //     falseImgs:require("../../assets/img/index/ic1.png"),
      //     littleImg: require("../../assets/img/index/ic1_little.png"),
      //     name: "智能空调",
      //     temperature: "24.5",
      //     boxtrue: false,
      //     href:"conditioner/conditioner.html",
      //   },
      //     {
      //       trueImgs: require('../../assets/img/index/ic2_f90.png'),
      //       falseImgs: require("../../assets/img/index/ic2.png") ,
      //       littleImg:  require("../../assets/img/index/ic2_little.png"),
      //       name: "智能空净",
      //       temperature: "PM2.5:57",
      //       boxtrue: true,
      //       href:"airCleaner/index.html",
      //     },
      //     {
      //       trueImgs:require('../../assets/img/index/ic3_f90.png'),
      //       falseImgs:require("../../assets/img/index/ic3.png") ,
      //       littleImg:require("../../assets/img/socket/outlet1_999.png"),
      //       name: "智能按摩椅",
      //       temperature: "自动",
      //       boxtrue: false,
      //       href:"anmoyi/index.html",
      //     },
      //     {
      //       trueImgs: require('../../assets/img/index/ic4_f90.png'),
      //       falseImgs:  require("../../assets/img/index/ic4.png"),
      //       littleImg:  require("../../assets/img/index/ic2_little.png"),
      //       name: "智能新风",
      //       temperature: "PM2.5:57",
      //       boxtrue: true,
      //       href:"xinfeng/index.html",
      //     },
      //     {
      //       trueImgs: require('../../assets/img/index/ic5_f90.png'),
      //       falseImgs:  require("../../assets/img/index/ic5.png"),
      //       littleImg:  require("../../assets/img/index/ic5_little.png"),
      //       name: "智能电灯",
      //       temperature: "50%",
      //       boxtrue: false,
      //       href:"light/colorLight.html",
      //     },
      //     {
      //       trueImgs: require('../../assets/img/index/ic5_f90.png'),
      //       falseImgs:  require("../../assets/img/index/ic5.png"),
      //       littleImg:require("../../assets/img/socket/outlet1_999.png"),
      //       name: "智能插座",
      //       temperature: "自动",
      //       boxtrue: false,
      //       href:"socket/socket.html",
      //     },

      //   ]
      // };
    },
    //对dom节点的操作
    // mounted() {
    //   var tabsSwiper = new Swiper('#tabs-container', {
    //     speed: 500,
    //     scrollbar: {
    //       el: '.swiper-scrollbar',
    //       dragSize: 30,
    //     },
    //     on: {
    //       slideChangeTransitionStart: function() {
    //         let objs = 0.95 + this.activeIndex * 1.2;
    //         console.log(objs,$(".van-tabs__line"));
    //         $(".van-tabs__line").css({
    //           "transform": "translateX(" + objs + "rem) translateX(-50%)"
    //         });
    //         console.log($(".van-tabs__line").css("transform"));
    //         $(".tabs .active").removeClass('active');
    //         $(".tabs a").eq(this.activeIndex).addClass('active');
    //       }
    //     }
    //   })
    // },
    methods: {
    },
    created() {}

  }

</script>

<style scoped>
  body,html{
    background: #01071d !important;
  }
  .boxHome{background: #01071d}
  .HomePageHome .notAdded a{
    display: block;
    background-image: linear-gradient(90deg,
    #ffbb55 0%,
    #ff9900 100%),
    linear-gradient(-90deg,
      #277cfa 0%,
      #91a0fc 100%);
    width: 3.2rem;
    height: 0.98rem;
    line-height: 0.98rem;
    color: #fff;
    font-size: 0.36rem;
    margin: 0 auto;
    margin-top: 1.08rem;
    text-align: center;
    border-radius: 0.49rem;
  }
  .HomePageHome .tabs {
    background-size: auto 100%;
    width: 100%;
    height: 0.8rem;
    padding: 0 0.35rem;
    overflow: hidden;
    position: relative;
    margin-top: 0.3rem;
  }
  .HomePageHome .tabs a.active {
    color: #fff;
  }
  .HomePageHome .tabs a {
    font-size: 0.28rem;
    float: left;
    text-align: center;
    width: 1.2rem;
    height: 0.8rem;
    line-height: 0.8rem;
    color: #676a7d;
  }
  .HomePageHome .index_icon_img {
    height: 0.2rem;
    vertical-align: middle;
    display: inline-block;
    position: absolute;
    right: 0.3rem;
    top: 50%;
    margin-top: -0.1rem;
  }
  .HomePageHome .van-tabs__line {
    background-color: #fff;
    width: 1.2rem;
    transform: translateX(0.95rem) translateX(-50%);
    transition-duration: 0.3s;
    bottom: 0;
    height: 2px;
  }
  .HomePageHome #tabs-container {
    height: auto;
  }
  .swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }
  .HomePageHome #tabs-container .swiper-wrapper {
    transition-duration: 0ms;
    transform: translate3d(0px, 0px, 0px);
  }
  .HomePageHome .classify {
    overflow: auto;
    height: 8.43rem;
    margin-top: 0.2rem;
    padding: 0 0.35rem;
  }
  .HomePageHome .classify li:nth-child(2n-1) {
    margin-right: 0.2rem;
  }
  .HomePageHome .classify li {
    background-color: #1a1f33;
    border-radius: 4px;
    padding: 0.40rem 0.30rem 0rem 0.30rem;
    width: 3.3rem;
    float: left;
    margin-bottom: 0.2rem;
    height: 2.62rem;
  }
  .HomePageHome .classify .positioning {
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    right: 0.3rem;
    top: 0.55rem;
    z-index: 5;
  }
  .HomePageHome .classify .van-switch {
    width: 0.4rem;
    height: 0.16rem;
    position: absolute;
    left: 0;
    top: 0.05rem;
    /* right: 0.05rem; */
  }.HomePageHome .van-switch {
     background-color: #343950;
   }
  .HomePageHome .classify .van-switch__node {
    background-color: #42465a;
  }
  .HomePageHome .classify .van-switch__node {
    width: 0.24rem;
    height: 0.24rem;
    top: -0.03rem;
  }
</style>
