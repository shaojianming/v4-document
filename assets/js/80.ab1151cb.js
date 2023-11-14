(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{464:function(e,i,r){},550:function(e,i,r){"use strict";r(464)},628:function(e,i,r){"use strict";r.r(i);r(36);var t={data:()=>[{id:1e3,value:"customerInfoList",type:"object",required:"M",desc:"公司信息",children:[{id:3,value:"customerId",type:"string(64)",required:"C",desc:"法人、受益人或股东唯一标识，新增之后出现在响应报文，传入则意味着修改此条数据"},{id:7,value:"customerType",type:"string(32)",required:"M",desc:"法人、受益人或股东的身份类型<ol><li>法人</li><li>受益人</li><li>股东</li></ol>"},{id:4,value:"idType",type:"string(64)",required:"M",desc:"<ol><li>大陆身份证</li><li>香港身份证</li><li>护照</li><li>大陆往来通行证</li><li>其他</li></ol>"},{id:5,value:"frontImageFileName",type:"string(128)",required:"M",desc:"证件图片正面"},{id:6,value:"backImageFileName",type:"string(128)",required:"C",desc:"证件图片背面<ul><li>idType： 1-大陆身份证 必填</li><li>idType： 2-香港身份证 必填</li><li>其余不填</li></ul>"},{id:9,value:"idCardNumber",type:"string(64)",required:"M",desc:"证件号码。"},{id:10,value:"certEffectiveDate",type:"string(32)",required:"M",desc:"证件生效日期 示例:2030-08-01。"},{id:11,value:"certExpireDate",type:"string(32)",required:"M",desc:"证件失效日期 <br/>长期有效:Long term <br/>不能填已过期时间<br/>示例:2030-08-01"},{id:12,value:"chineseName",type:"string(32)",required:"C",desc:"姓名-中文 <br/>country为中国大陆或者中国香港时候必填。"},{id:13,value:"englishName",type:"string(32)",required:"C",desc:"姓名-英文<br/>country除中国大陆和中国香港之外必填。"},{id:14,value:"phoneNumber",type:"string(64)",required:"M",desc:"联系电话"},{id:15,value:"emailAddress",type:"string(128)",required:"M",desc:"联系邮箱"},{id:17,value:"address",type:"string(128)",required:"C",desc:"中文居住地址。<br/> country字段为中国大陆或者中国香港时候必填。 <br/>示例:<br/>滨江区江陵路567号。"},{id:18,value:"englishAddress",type:"string(128)",required:"C",desc:"英文居住地址。 <br/>如果country值不是中国大陆和中国香港则必填。 <br/>示例:<br/>No. 587, Jiangling Road, Binjiang District, Hangzhou, Zhejiang。"},{id:19,value:"dictArea",type:"string(64)",required:"O",desc:"居住地区，不填不做验证,否则根据不同的居住地验证传值<ul><li>country是中国大陆大陆时候传省市区</li><li>country是中国香港时传行政区划</li><li>其余可不传</li></ul>取值见<a href='/v4-document/pages/f8636b/'>附录KYB-地区数据</a>"},{id:20,value:"country",type:"string(64)",required:"M",desc:"国家，见<a href='/v4-document/pages/f8636b/'>附录KYB-地区数据</a>"},{id:21,value:"birthDate",type:"string(64)",required:"M",desc:"出生日期，<br/>示例：2000-01-01"}]}]},l={data:()=>({tableData:[]}),mounted(){this.initTableData()},methods:{tableRowClassName:({row:e,rowIndex:i})=>e.hasOwnProperty("id")?e.id%2==0?"warning-row":"success-row":"warning-row",initTableData(){this.tableData.push(...t.data()),console.log(this.tableData)}}},a=(r(550),r(12)),d=Object(a.a)(l,(function(){var e=this,i=e._self._c;return i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-key":"id","row-class-name":e.tableRowClassName,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[i("el-table-column",{attrs:{prop:"value",label:"属性",sortable:"",width:"240"}}),e._v(" "),i("el-table-column",{attrs:{prop:"type",label:"类型",sortable:"",width:"120"}}),e._v(" "),i("el-table-column",{attrs:{prop:"required",label:"必填",sortable:"",width:"120"}}),e._v(" "),i("el-table-column",{attrs:{prop:"desc",sortable:"",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(r){return[i("div",{domProps:{innerHTML:e._s(r.row.desc)}})]}}])})],1)}),[],!1,null,null,null);i.default=d.exports}}]);