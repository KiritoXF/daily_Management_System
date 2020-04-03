webpackJsonp([4],{156:function(t,e,a){var o=a(5)(a(164),a(166),null,null);o.options.__file="d:\\Apache24\\htdocs\\iview-project-3.0\\src\\views\\my-daily\\addMyDaily.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] addMyDaily.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},164:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{formData:Object},computed:{sumCost:function(){var t=0;return null!=this.formData.items&&(this.formData.items.map(function(e){t+=e.cost}),this.formData.sumCost=t),t},currentDate:function(){var t=this.formData.date;return t?t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate():"未选择"}},data:function(){return{index:1,loading:!1,workCategoryList:[{value:"编码",label:"编码"},{value:"测试",label:"测试"},{value:"文档编写",label:"文档编写"},{value:"自学",label:"自学"},{value:"翻译",label:"翻译"},{value:"准备工作",label:"准备工作"}]}},methods:{save:function(t){var e=this,a=this;this.$refs[t].validate(function(t){if(t){e.$Message.success("Success!"),e.loading=!0;var o=a.formData,s=new Date,n=s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate();null!=o.id?a.updateDailyInfo([o.userName||"yh",o.date.getFullYear()+"-"+(o.date.getMonth()+1)+"-"+o.date.getDate(),o.assign,o.normalWork,o.overtimeWork,o.projectName,o.extendedField,o.projectAssign,o.firstLevelActivity,o.secondLevelActivity,o.firstLevelModule,o.secondLevelModule,o.workResultType,o.workResult,o.note||"",n,o.id]):a.addDailyInfo([o.userName,o.date.getFullYear()+"-"+(o.date.getMonth()+1)+"-"+o.date.getDate(),o.assign,o.normalWork,o.overtimeWork,o.projectName,o.extendedField,o.projectAssign,o.firstLevelActivity,o.secondLevelActivity,o.firstLevelModule,o.secondLevelModule,o.workResultType,o.workResult,o.note,n])}else e.$Message.error("Fail!")})},addDailyInfo:function(t){var e=this;this.$http.post("/api/daily/addDailyInfo",{infos:t},{}).then(function(t){console.log(t),e.goBack()})},updateDailyInfo:function(t){var e=this;this.$http.put("/api/daily/updateDailyInfo",{infos:t},{}).then(function(t){console.log(t),e.goBack()})},handleAdd:function(){this.index=this.formData.items.length+1,this.formData.items.push({workName:"",cost:0,workCategory:"",index:this.index})},handleRemove:function(t){this.formData.items.splice(t,1)}}}},166:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Form",{ref:"formData",staticStyle:{width:"1000px",margin:"0 auto"},attrs:{model:t.formData,"label-width":80}},[a("FormItem",[a("Row",[a("Col",{attrs:{span:"10"}},[a("p",[t._v("日期："+t._s(t.currentDate))])])],1)],1),t._v(" "),a("FormItem",[a("Row",[a("Col",{staticStyle:{margin:"0 auto"},attrs:{span:"10"}},[a("p",{staticStyle:{"text-align":"center"}},[t._v("事项")])]),t._v(" "),a("Col",{staticStyle:{margin:"0 auto"},attrs:{span:"4"}},[a("p",{staticStyle:{"text-align":"center"}},[t._v("花费时间")])]),t._v(" "),a("Col",{staticStyle:{margin:"0 auto"},attrs:{span:"4"}},[a("p",{staticStyle:{"text-align":"center"}},[t._v("工作内容")])])],1)],1),t._v(" "),t._l(t.formData.items,function(e,o){return a("FormItem",{key:o,attrs:{label:o+1,prop:"items."+o+".value"}},[a("Row",[a("Col",{attrs:{span:"10"}},[a("Input",{attrs:{type:"text",placeholder:"请输入事项"},model:{value:e.workName,callback:function(a){t.$set(e,"workName",a)},expression:"item.workName"}})],1),t._v(" "),a("Col",{attrs:{span:"4"}},[a("InputNumber",{staticStyle:{"margin-left":"10px",width:"100%"},attrs:{min:0},model:{value:e.cost,callback:function(a){t.$set(e,"cost",a)},expression:"item.cost"}})],1),t._v(" "),a("Col",{attrs:{span:"4"}},[a("Select",{staticStyle:{"margin-left":"10px"},model:{value:e.workCategory,callback:function(a){t.$set(e,"workCategory",a)},expression:"item.workCategory"}},t._l(t.workCategoryList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1),t._v(" "),a("Col",{attrs:{span:"4",offset:"1"}},[a("Button",{on:{click:function(e){t.handleRemove(o)}}},[t._v("删除")])],1)],1)],1)}),t._v(" "),a("FormItem",[a("Row",[a("Col",{attrs:{span:"4"}},[a("Button",{attrs:{type:"dashed",long:"",icon:"md-add"},on:{click:t.handleAdd}})],1)],1)],1),t._v(" "),a("FormItem",[a("Row",[a("Col",{attrs:{span:"10"}},[a("p",[t._v("总计")])]),t._v(" "),a("Col",{attrs:{span:"4"}},[a("p",{staticStyle:{"margin-left":"18px",width:"100%"}},[t._v(t._s(t.sumCost))])])],1)],1),t._v(" "),a("FormItem",[a("Row",[a("Col",{attrs:{span:"18"}},[a("Input",{staticStyle:{width:"100%"},attrs:{type:"textarea",placeholder:"备注",autosize:{minRows:3,maxRows:5}},model:{value:t.formData.ps,callback:function(e){t.$set(t.formData,"ps",e)},expression:"formData.ps"}})],1)],1)],1)],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});