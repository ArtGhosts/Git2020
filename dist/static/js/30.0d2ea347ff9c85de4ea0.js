webpackJsonp([30],{iQFT:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});i("7+uW");var a=i("7t+N"),e=i.n(a),c={name:"SmtHome",components:{},data:function(){return{activeName:["1","2","3"],tableData:[{name:111},{name:222},{name:333},{name:444}],selectValue:"12312123"}},methods:{nextStep:function(){console.log("1"),this.$router.push({path:"/SmtParameter"})},Onclick:function(t,s){this.Home.forEach(function(t,s){console.log(t),t.ThisTrue=!1}),t.ThisTrue=!0}},mounted:function(){e()(".SmtHome").on("click",function(t){t.stopPropagation(),e()(this).find(".selectNumber ul").hide()}),e()(".selectNumber .input").on("click",function(t){e()(".selectNumber").find(".selectNumber ul").hide(),e()(this).parents(".selectNumber").find(".list ul").show(),t.stopPropagation()}),e()(".selectNumber li").on("click",function(t){t.stopPropagation(),e()(this).parents(".selectNumber").find(".input p").text(e()(this).text()),e()(this).parents("ul").hide()}),e()(".option p").click(function(){console.log("11"),e()(this).addClass("select"),e()(this).siblings().removeClass("select")}),e()(".opboxtion p").click(function(){e()(this).hasClass("select")?e()(this).removeClass("select"):e()(this).addClass("select")})},created:function(){this.$emit("getMessage","1")}},v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"SmtHome"},[a("van-collapse",{model:{value:t.activeName,callback:function(s){t.activeName=s},expression:"activeName"}},[a("van-collapse-item",{attrs:{title:"SMT工艺信息","title-class":"NewTitle",name:"1"}},[a("div",{staticClass:"basic"},[a("p",{staticClass:"icon_p  mb24 mt24"},[a("i",{staticClass:"red"},[t._v("*")]),t._v("是否接收打叉板")]),t._v(" "),a("div",{staticClass:"option both"},[a("p",{staticClass:"select"},[t._v("是")]),t._v(" "),a("p",[t._v("否")])]),t._v(" "),a("p",{staticClass:"icon_p  mb24 mt24"},[a("i",{staticClass:"red"},[t._v("*")]),t._v("拼版方式 "),a("span",{staticClass:"f24 cl_999"},[t._v("注:工厂按 SET=0单片(pcs)制作")])]),t._v(" "),a("div",{staticClass:"importInput both"},[a("input",{attrs:{type:"text"}}),a("span",[t._v("X")]),a("input",{attrs:{type:"text"}}),a("span",[t._v("个")])]),t._v(" "),a("p",{staticClass:"icon_p  mb24 mt24"},[a("i",{staticClass:"red"},[t._v("*")]),t._v("工艺边")]),t._v(" "),a("div",{staticClass:"ProcessSide both option"},[a("p",{staticClass:"select"},[t._v("无")]),t._v(" "),a("p",[t._v("上下边")]),t._v(" "),a("p",[t._v("左右边")]),t._v(" "),a("p",[t._v("四边")])]),t._v(" "),a("p",{staticClass:"icon_p mb24 mt24"},[a("i",{staticClass:"red"},[t._v("*")]),t._v("工艺宽度")]),t._v(" "),a("div",{staticClass:"TechnologyWide both"},[a("input",{attrs:{type:"text"}}),t._v(" "),a("span",[t._v("mm")])]),t._v(" "),a("p",{staticClass:"icon_p mb24 mt24"},[a("i",{staticClass:"red"},[t._v("*")]),t._v("分割方式:")]),t._v(" "),a("div",{staticClass:"ProcessSide both option"},[a("p",[t._v("无")]),t._v(" "),a("p",[t._v("上下边")]),t._v(" "),a("p",[t._v("左右边")]),t._v(" "),a("p",[t._v("四边")])]),t._v(" "),a("p",{staticClass:"icon_p mb24 mt24"},[a("i",{staticClass:"red"},[t._v("*")]),t._v("槽间距:")]),t._v(" "),a("div",{staticClass:"PitchGrooves both"},[a("div",{staticClass:"left"},[a("p",[t._v("水平")]),t._v(" "),a("div",{staticClass:"fr both"},[a("input",{attrs:{type:"text"}}),t._v(" "),a("span",[t._v("mm")])])]),t._v(" "),a("div",{staticClass:"right"},[a("p",[t._v("垂直")]),t._v(" "),a("div",{staticClass:"fr both"},[a("input",{attrs:{type:"text"}}),t._v(" "),a("span",[t._v("mm")])])])]),t._v(" "),a("p",{staticClass:"icon_p mb24 mt24"},[a("i",{staticClass:"red"},[t._v("*")]),t._v("生产数量 "),a("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),a("div",{staticClass:"selectNumber"},[a("div",{staticClass:"input"},[a("p",[t._v("请选择")]),t._v(" "),a("img",{attrs:{src:i("UX91"),alt:""}})]),t._v(" "),a("div",{staticClass:"list"},[a("ul",t._l(t.tableData,function(s,i){return a("li",{key:s.index},[t._v(t._s(s.name))])}),0)])]),t._v(" "),a("p",{staticClass:"icon_p mb24 mt24"},[a("i",{staticClass:"red"},[t._v("*")]),t._v("单面/双面贴片 "),a("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),a("div",{staticClass:"option both"},[a("p",{staticClass:"select"},[t._v("单片出货")]),t._v(" "),a("p",[t._v("捷配待拼")])]),t._v(" "),a("p",{staticClass:"icon_p  mb24 mt24"},[a("i",{staticClass:"red"},[t._v("*")]),t._v("单片贴片点数 "),a("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),a("div",{staticClass:"TechnologyWide both"},[a("input",{attrs:{type:"text"}}),t._v(" "),a("span",[t._v("个")])]),t._v(" "),a("p",{staticClass:"icon_p  mb24 mt24"},[a("i",{staticClass:"red"},[t._v("*")]),t._v("单片插件点数 "),a("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),a("div",{staticClass:"TechnologyWide both"},[a("input",{attrs:{type:"text"}}),t._v(" "),a("span",[t._v("个")])]),t._v(" "),a("p",{staticClass:"icon_p  mb24 mt24"},[a("i",{staticClass:"red"},[t._v("*")]),t._v("物料种类 "),a("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),a("div",{staticClass:"TechnologyWide both"},[a("input",{attrs:{type:"text"}}),t._v(" "),a("span",[t._v("种")])]),t._v(" "),a("p",{staticClass:"icon_p  mb24 mt24"},[a("i",{staticClass:"red"},[t._v("*")]),t._v("pcb尺寸")]),t._v(" "),a("div",{staticClass:"importInput both"},[a("input",{attrs:{type:"text"}}),a("span",[t._v("X")]),a("input",{attrs:{type:"text"}}),a("span",[t._v("cm")])]),t._v(" "),a("p",{staticClass:"icon_p  mb24 mt24"},[t._v("工艺要求")]),t._v(" "),a("div",{staticClass:"option both"},[a("p",{staticClass:"select"},[t._v("有铅")]),t._v(" "),a("p",[t._v("无铅球")])]),t._v(" "),a("p",{staticClass:"icon_p  mb24 mt24"},[t._v("PCBA确认 "),a("span",{staticClass:"f24 cl_999"},[t._v("注:以提供的Pcb文件为准")])]),t._v(" "),a("div",{staticClass:"option both"},[a("p",{staticClass:"select"},[t._v("不需要")]),t._v(" "),a("p",{staticClass:"NoChoose"},[t._v("先贴一片拍照确认")]),t._v(" "),a("p",{staticClass:"NoChoose"},[t._v("先贴一片邮寄确认")])]),t._v(" "),a("p",{staticClass:"icon_p  mb24 mt24"},[a("i",{staticClass:"red"},[t._v("*")]),t._v("PCB是否已拼版：")]),t._v(" "),a("div",{staticClass:"option both"},[a("p",{staticClass:"select"},[t._v("是")]),t._v(" "),a("p",[t._v("否")])]),t._v(" "),a("p",{staticClass:"icon_p  mb24 mt24"},[t._v("BOM元器件： "),a("span",{staticClass:"f24 cl_999"},[t._v("注:元器件采购，原厂正品，2小时发货")])]),t._v(" "),a("div",{staticClass:"option both"},[a("p",{staticClass:"select"},[t._v("代采购")]),t._v(" "),a("p",{},[t._v("自供")]),t._v(" "),a("p",{staticClass:"NoChoose"},[t._v("部分代购,部分自供")])])])]),t._v(" "),a("van-collapse-item",{attrs:{title:"更多工艺需求","title-class":"NewTitle",name:"2"}},[a("div",{staticClass:"more"},[a("p",{staticClass:"icon_p  mb24 mt24"},[t._v("刷三防漆：")]),t._v(" "),a("div",{staticClass:"option both"},[a("p",{staticClass:"select"},[t._v("是")]),t._v(" "),a("p",[t._v("否")])]),t._v(" "),a("p",{staticClass:"icon_p  mb24 mt24"},[a("i",{staticClass:"red"},[t._v("*")]),t._v("X-ray检测数："),a("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),a("div",{staticClass:"testData both"},[a("input",{attrs:{type:"text"}})]),t._v(" "),a("p",{staticClass:"icon_p  mb24 mt24"},[t._v("烧录程序：")]),t._v(" "),a("div",{staticClass:"option both"},[a("p",{staticClass:"select"},[t._v("否")])]),t._v(" "),a("p",{staticClass:"icon_p  mb24 mt24"},[t._v("功能程序：")]),t._v(" "),a("div",{staticClass:"option both"},[a("p",[t._v("否")]),t._v(" "),a("p",{staticClass:"select"},[t._v("是")])]),t._v(" "),a("p",{staticClass:"icon_p  mb24 mt24"},[t._v("PCBA板分板出货：")]),t._v(" "),a("div",{staticClass:"option both"},[a("p",{staticClass:"select"},[t._v("否")]),t._v(" "),a("p",[t._v("是")])]),t._v(" "),a("p",{staticClass:"icon_p  mb24 mt24"},[t._v("PCBA板出货包装：")]),t._v(" "),a("div",{staticClass:"option both"},[a("p",{staticClass:"select"},[t._v("泡泡袋包装")]),t._v(" "),a("p",[t._v("屏蔽袋包装")])])])]),t._v(" "),a("van-collapse-item",{attrs:{title:"特殊工艺","title-class":"NewTitle",name:"3"}},[t._v("内容")])],1),t._v(" "),a("div",{staticClass:"FillOver both"},[a("p",[t._v("重新填写")]),t._v(" "),a("span",{on:{click:t.nextStep}},[t._v("加入购物车")])])],1)},staticRenderFns:[]};var _=i("VU/8")(c,v,!1,function(t){i("ySYA")},"data-v-7dccb944",null);s.default=_.exports},ySYA:function(t,s){}});
//# sourceMappingURL=30.0d2ea347ff9c85de4ea0.js.map