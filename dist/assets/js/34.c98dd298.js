(window.webpackJsonp=window.webpackJsonp||[]).push([[34,68],{396:function(e,t,a){},430:function(e,t,a){"use strict";a(396)},504:function(e,t,a){"use strict";a.r(t);a(36);var r={data:[{id:11,value:"payType",type:"string(32)",required:"M",desc:"支付工具类型：<ul><li>CREDIT-信用卡支付</li></ul>"},{id:23,value:"threeDSecure",type:"string(1)",required:"O",desc:"是否指定当前交易强制走 3DS 交易 (Y/N)\n默认为“N”即不主动走 3DS 交易\n注意:商户需要配置自主3DS策略，该参数才生效"},{id:191,value:"jsGeneratedData",type:"string(256)",required:"C",desc:"通过嵌入 pingpong 提供的前端 js， 获取浏览器相关信息的 json 字符\n                            串，传到这个参数中(使用⻛控插\n                            件对接的商户使用)"},{id:193,value:"cardInfo",type:"Object",required:"M",desc:"持卡人信息",children:[{id:17,value:"number",type:"string(4)",required:"M",desc:"国际信用卡卡号"},{id:21,value:"holderFirstName",type:"string(4)",required:"M",desc:"持卡人名，字符类型，不含特殊符号"},{id:22,value:"holderLastName",type:"string(4)",required:"M",desc:"持卡人姓，字符类型，不含特殊符号"},{id:18,value:"expireMonth",type:"string(2)",required:"M",desc:"有效期-月，2位数字"},{id:19,value:"expireYear",type:"string(4)",required:"M",desc:"有效期-年，4位数字"},{id:20,value:"cvv",type:"string(4)",required:"M",desc:"信用卡CVV，Visa/MasterCard/JCB/Discover/Diners club的cvv字符长度均为三位，American Express的cvv字符长度为四位"}]}]},l={name:"V4CreditCardRequestTable",data:()=>({tableData:[],http:null}),mounted(){this.initTableData()},methods:{tableRowClassName:({row:e,rowIndex:t})=>e.hasOwnProperty("id")?e.id%2==0?"warning-row":"success-row":"warning-row",initTableData(){this.tableData.push(...r.data)}}},i=(a(430),a(12)),s=Object(i.a)(l,(function(){var e=this,t=e._self._c;return t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-key":"id","row-class-name":e.tableRowClassName,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[t("el-table-column",{attrs:{prop:"value",label:"属性",sortable:"",width:"240"}}),e._v(" "),t("el-table-column",{attrs:{prop:"type",label:"类型",sortable:"",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"required",label:"必填",sortable:"",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"desc",sortable:"",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",{domProps:{innerHTML:e._s(a.row.desc)}})]}}])})],1)}),[],!1,null,null,null);t.default=s.exports},672:function(e,t,a){"use strict";a.r(t);a(504);var r={components:{CreditCardRequestTable:()=>Promise.resolve().then(a.bind(null,504)),AlternativeRequestTable:()=>Promise.all([a.e(0),a.e(12)]).then(a.bind(null,649))},data:()=>({activeName:"first"})},l=a(12),i=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"Credit Card",name:"first"}},[t("CreditCardRequestTable")],1),e._v(" "),t("el-tab-pane",{attrs:{label:"APM",name:"second"}},[t("AlternativeRequestTable")],1)],1)],1)}),[],!1,null,"26ef564e",null);t.default=i.exports}}]);