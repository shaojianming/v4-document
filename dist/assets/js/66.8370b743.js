(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{499:function(e,t,a){},598:function(e,t,a){"use strict";a(499)},651:function(e,t,a){"use strict";a.r(t);a(36);var r={data:[{id:1,value:"accId",type:"string(64)",required:"C",desc:"PingPong merchant store ID"},{id:2,value:"clientId",type:"string(64)",required:"M",desc:"PingPong merchant ID"},{id:3,value:"signType",type:"string(32)",required:"M",desc:"For signature method, For details,see the <a href='/pages/77ae52/' target='_blank'>Signing Protocol </a> section of the document"},{id:4,value:"sign",type:"string(128)",required:"M",desc:"For signature,see <a href='/pages/77ae52/' target='_blank'>the  Signature Specification</a> hereof for details,All parameters are involved in the signature"},{id:5,value:"version",type:"string(10)",required:"M",desc:"Version number, currently fixed as 1.0. May be adjusted in the future with changes to the interface"},{id:6,value:"bizContent",type:"string",required:"M",desc:"The collection of request parameters, excluding common request parameters, must be passed in this parameter. There is no maximum length limit for this parameter"}]},i={name:"AlternativePublicRequestParamsTable",data:()=>({tableData:[],http:null}),mounted(){this.initTableData()},methods:{tableRowClassName:({row:e,rowIndex:t})=>e.hasOwnProperty("id")?e.id%2==0?"warning-row":"success-row":"warning-row",initTableData(){this.tableData.push(...r.data)}}},n=(a(598),a(12)),s=Object(n.a)(i,(function(){var e=this,t=e._self._c;return t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-key":"id","row-class-name":e.tableRowClassName,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[t("el-table-column",{attrs:{prop:"value",label:"attribute",sortable:"",width:"240"}}),e._v(" "),t("el-table-column",{attrs:{prop:"type",label:"type",sortable:"",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"required",label:"required",sortable:"",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"desc",sortable:"",label:"description"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",{domProps:{innerHTML:e._s(a.row.desc)}})]}}])})],1)}),[],!1,null,null,null);t.default=s.exports}}]);