webpackJsonp([7],{L7gK:function(t,e,n){"use strict";(function(t){n("7+uW");var s=n("PO+u");e.a={name:"PhoneSetting",components:{HomePageTop:s.a},data:function(){return{TopTotle:{name:"手机号",left:!0},phonenumber:"17637408019",verifyModelTrue:!1,verifyModelText:"请输入",count:"获取验证码",verifyModel:"",SubmitClassbox:!1,values:""}},methods:{countDown:function(){var e=this;if("获取验证码"==this.count||"验证码发完了"==this.count)var n=59,s=setInterval(function(){n>0?(t(".PhoneSetting .codeSending div").css({color:"#666"}),e.count="倒计时"+n+"s",n--):(window.clearInterval(s),e.count="验证码发完了",t(".PhoneSetting .codeSending div").css({color:"#f90"}))},1e3)},inputs:function(){console.log(this.values),this.values.length>=4&&(this.SubmitClassbox=!0)},SubmitClassClick:function(){this.values.length>=4&&this.$router.push({path:"PhoneSetting2"})}},created:function(){this.phonenumber=this.phonenumber.replace(/^(\d{3})\d*(\d{4})$/,"$1****$2"),console.log(this.phonenumber)}}}).call(e,n("7t+N"))},SEUj:function(t,e){},"W+uF":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("7+uW");var s=n("PO+u"),o=n("Fd2+"),i={name:"PhoneSetting2",components:{HomePageTop:s.a},data:function(){return{TopTotle:{name:"手机号",left:!0},SubmitClassbox:!1,inpurValue:""}},methods:{onSearch:function(){},Oninput:function(){this.inpurValue.length>=11?this.SubmitClassbox=!0:this.SubmitClassbox=!1},SubmitClassClick:function(){console.log(this.$router);var t=this;1==!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.inpurValue)?""==this.inpurValue?console.log("为空"):console.log("格式不对"):Object(o.b)({message:"顶部展示",onClose:function(){t.$router.push({path:"SafetySetting"})}})}},created:function(){}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PhoneSetting2"},[n("HomePageTop",{staticClass:"bg_fff",attrs:{TopTitle:t.TopTotle}}),t._v(" "),n("div",{staticClass:"phoneTop"},[n("p",{staticClass:"f42 mb100"},[t._v("请输入新手机号")]),t._v(" "),n("div",{staticClass:"selectAreaCode"},[t._m(0),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inpurValue,expression:"inpurValue"}],staticClass:"OnInput",attrs:{type:"text",placeholder:"请输入",autocomplete:"off",oninput:"value=value.replace(/[^\\d]/g,'')",maxlength:"11"},domProps:{value:t.inpurValue},on:{input:[function(e){e.target.composing||(t.inpurValue=e.target.value)},t.Oninput]}})]),t._v(" "),n("div",{staticClass:"public-btn mt60  mr30 ml30",class:1==t.SubmitClassbox?"public-btn":"public-btnNo",on:{click:function(e){1==t.SubmitClassbox&&t.SubmitClassClick()}}},[t._v("\n      提交\n    ")])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"AreaCodeShow"},[e("span",[this._v("+86")])])}]};var l=n("VU/8")(i,a,!1,function(t){n("ccew")},null,null);e.default=l.exports},YNsx:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("L7gK"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PhoneSetting"},[n("HomePageTop",{staticClass:"bg_fff",attrs:{TopTitle:t.TopTotle}}),t._v(" "),n("div",[n("div",{staticClass:"PhoneNumber"},[n("p",[t._v(" 当前手机号（可用于登录）")]),t._v(" "),n("span",[t._v(t._s(t.phonenumber))])]),t._v(" "),n("div",{staticClass:"codeSending"},[n("span",[t._v("短信验证码")]),t._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.values,expression:"values"}],attrs:{type:"text",placeholder:"请输入验证码",maxlength:"4"},domProps:{value:t.values},on:{input:[function(e){e.target.composing||(t.values=e.target.value)},t.inputs]}})]),t._v(" "),n("div",{on:{click:t.countDown}},[t._v(t._s(t.count))])]),t._v(" "),n("div",{staticClass:"public-btn mt60  mr30 ml30",class:1==t.SubmitClassbox?"public-btn":"public-btnNo",on:{click:t.SubmitClassClick}},[t._v("\n    提交\n  ")])])],1)},staticRenderFns:[]};var i=function(t){n("SEUj")},a=n("VU/8")(s.a,o,!1,i,null,null);e.default=a.exports},ccew:function(t,e){}});
//# sourceMappingURL=7.ba31ffb9f87c5fd7c948.js.map