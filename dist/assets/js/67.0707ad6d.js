(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{500:function(e,t,a){},599:function(e,t,a){"use strict";a(500)},652:function(e,t,a){"use strict";a.r(t);a(36);var r={data:[{id:1,value:"accId",type:"String(64)",required:"M",desc:"PingPong merchant store ID"},{id:2,value:"clientId",type:"String(64)",required:"M",desc:"PingPong merchant ID"},{id:3,value:"signType",type:"String(32)",required:"M",desc:"For signature method,see <a href='/pages/77ae52/' target='_blank'>the Signature Specification</a> section hereof for details"},{id:4,value:"sign",type:"String(128)",required:"M",desc:"For signature,see <a href='/pages/77ae52/' target='_blank'>the Signature Specification</a> hereof for details,All parameters are involved in the signature"},{id:5,value:"code",type:"String(6)",required:"M",desc:"Result status code"},{id:6,value:"description",type:"String(500)",required:"M",desc:"Result description"},{id:7,value:"bizContent",type:"String",required:"M",desc:"Business response parameters"}]},i={name:"AlternativePublicResponseParamsTable",data:()=>({tableData:[],http:null}),mounted(){this.initTableData()},methods:{tableRowClassName:({row:e,rowIndex:t})=>e.hasOwnProperty("id")?e.id%2==0?"warning-row":"success-row":"warning-row",initTableData(){this.tableData.push(...r.data)}}},s=(a(599),a(12)),n=Object(s.a)(i,(function(){var e=this,t=e._self._c;return t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-key":"id","row-class-name":e.tableRowClassName,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[t("el-table-column",{attrs:{prop:"value",label:"attribute",sortable:"",width:"240"}}),e._v(" "),t("el-table-column",{attrs:{prop:"type",label:"type",sortable:"",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"required",label:"required",sortable:"",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"desc",sortable:"",label:"description"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",{domProps:{innerHTML:e._s(a.row.desc)}})]}}])})],1)}),[],!1,null,null,null);t.default=n.exports}}]);