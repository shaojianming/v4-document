(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{495:function(e,t,a){},594:function(e,t,a){"use strict";a(495)},647:function(e,t,a){"use strict";a.r(t);a(36);var l={data:[{id:11,value:"payType",type:"string(32)",required:"M",desc:"支付工具类型：<ul><li>APM-本地支付</li></ul>"},{id:13,value:"paymentMethod",type:"string(64)",required:"C",desc:"支付方式，国际信用卡/本地支付方式，若要使用请与技术人员沟通,可选值：<a href='/pages/1dfb5e/' target='_blank'>Non-Hosted支持的APM</a>"}]},r={name:"Uniformly",data:()=>({tableData:[],http:null}),mounted(){this.initTableData()},methods:{tableRowClassName:({row:e,rowIndex:t})=>e.hasOwnProperty("id")?e.id%2==0?"warning-row":"success-row":"warning-row",initTableData(){this.tableData.push(...l.data)}}},s=(a(594),a(12)),n=Object(s.a)(r,(function(){var e=this,t=e._self._c;return t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-key":"id","row-class-name":e.tableRowClassName,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[t("el-table-column",{attrs:{prop:"value",label:"属性",sortable:"",width:"240"}}),e._v(" "),t("el-table-column",{attrs:{prop:"type",label:"类型",sortable:"",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"required",label:"必填",sortable:"",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"desc",sortable:"",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",{domProps:{innerHTML:e._s(a.row.desc)}})]}}])})],1)}),[],!1,null,null,null);t.default=n.exports}}]);