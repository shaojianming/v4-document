(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{492:function(e,t,a){},591:function(e,t,a){"use strict";a(492)},647:function(e,t,a){"use strict";a.r(t);a(36);var r={data:[{id:1,value:"transactionId",type:"string(64)",required:"M",desc:"PingPong 交易流水号"},{id:2,value:"merchantTransactionId",type:"string(64)",required:"M",desc:"网站交易流水号"},{id:3,value:"amount",type:"string(64)",required:"M",desc:"交易金额"},{id:4,value:"currency",type:"string(3)",required:"M",desc:"Transaction currency，ISO 4217 三位币种，具体支持币种⻅附件<a href='/pages/3c0bdf/' target='_blank'>Transaction currency</a>"},{id:11,value:"relateTransactionId",type:"string",required:"M",desc:"当前交易关联的 PingPong 交易流水号"},{id:24,value:"paymentQrCode",type:"string(512)",required:"C",desc:"二维码（非图片地址）"},{id:25,value:"paymentRedirectUrl",type:"string(512)",required:"C",desc:"支付跳转地址"}]},n={name:"AlternativeRequestTable",data:()=>({tableData:[],http:null}),mounted(){this.initTableData()},methods:{tableRowClassName:({row:e,rowIndex:t})=>e.hasOwnProperty("id")?e.id%2==0?"warning-row":"success-row":"warning-row",initTableData(){this.tableData.push(...r.data)}}},l=(a(591),a(12)),s=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-key":"id","row-class-name":e.tableRowClassName,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[t("el-table-column",{attrs:{prop:"value",label:"属性",sortable:"",width:"240"}}),e._v(" "),t("el-table-column",{attrs:{prop:"type",label:"类型",sortable:"",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"required",label:"必填",sortable:"",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"desc",sortable:"",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",{domProps:{innerHTML:e._s(a.row.desc)}})]}}])})],1)}),[],!1,null,null,null);t.default=s.exports}}]);