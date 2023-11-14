(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{738:function(t,e,a){"use strict";a.r(e);var l=a(12),i=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"查询拒付操作记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询拒付操作记录"}},[t._v("#")]),t._v(" 查询拒付操作记录")]),t._v(" "),e("h2",{attrs:{id:"请求地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求地址"}},[t._v("#")]),t._v(" 请求地址")]),t._v(" "),e("br"),t._v(" "),e("div",[e("code-group",[e("code-block",{attrs:{title:"沙箱环境",active:""}},[e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("/v4-document//chargeback/trace\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("code-block",{attrs:{title:"生产环境"}},[e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("https://acquirer-payment.pingpongx.com/v4/chargeback/trace\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])],1)],1),t._v(" "),e("h2",{attrs:{id:"请求参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求参数"}},[t._v("#")]),t._v(" 请求参数")]),t._v(" "),e("h3",{attrs:{id:"公共请求参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#公共请求参数"}},[t._v("#")]),t._v(" 公共请求参数")]),t._v(" "),e("br"),t._v(" "),e("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("POST")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("JSON")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter attribute")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("accId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong merchant store ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("clientId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong merchant ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("signType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(32)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("签名规约，支持 MD5、SHA256，具体⻅本文“签名规约”一栏")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("sign")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(128)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("For signature, see the Signature Specification section hereof for details "),e("a",{attrs:{href:"/v4-document/pages/77ae52/",target:"_blank"}},[t._v("Signing Protocol ")]),t._v(" All Parameters Participate in Signature")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("version")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(10)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Currently fixed at 1.0, may be adjusted with changes to theapiin the future")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("biz_content")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请求参数的集合，最大长度不限，除公共参数外所有请求参数都必须放在这个参数中传递")])])])]),t._v(" "),e("h3",{attrs:{id:"请求参数-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求参数-2"}},[t._v("#")]),t._v(" 请求参数")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter attribute")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("transactionId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong merchant store ID")])])])]),t._v(" "),e("h2",{attrs:{id:"响应参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应参数"}},[t._v("#")]),t._v(" 响应参数")]),t._v(" "),e("br"),t._v(" "),e("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("POST")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("JSON")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("p",[t._v("以下为data[i]单笔明细(多组)")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("transactionId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong 原始交易订单号")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("拒付状态变更流水 ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("chargebackId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong 拒付 ID，跟随拒付类型变更而变更")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("chargebackType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("拒付类型 详见拒付类型表")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("chargebackStatus")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("拒付状态 详见拒付状态表，默认为查询所有类型")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("createDate")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("拒付状态时间 YYYY-MM-DD hhmmss")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("updateDate")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("拒付状态更新时间 YYYY-MM-DD hhmmss")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("creator")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("流水记录创建者")])])])]),t._v(" "),e("h2",{attrs:{id:"拒付类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拒付类型"}},[t._v("#")]),t._v(" 拒付类型")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("chargebackType")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("desc")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("retrieval")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("调单")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("1st_chargeback")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("一拒")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("2nd_chargeback")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("二拒")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("chargeback_reversal")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("拒付撤销")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("pre_arbitration")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("预仲裁")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("arbitration")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("仲裁")])])])]),t._v(" "),e("h2",{attrs:{id:"拒付状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拒付状态"}},[t._v("#")]),t._v(" 拒付状态")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("序号")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("chargebackStatus")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("desc")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("状态描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("pending")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("商户还未处理拒付/调单")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("初始态")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("processed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("商户已提交材料")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("中间态")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("expired")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("商户逾期未处理")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("中间态")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("waiver_appeal")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("商户点击放弃申诉按钮或因 未对调单申诉而后续产生的拒付")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("中间态")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("revoked")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("收单渠道拒付文件，拒付撤销")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("初始态")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("success")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("收到渠道文件，申诉成功")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("终态")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("failed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("收到渠道文件，申诉失败")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("终态")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("refunded")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("商户在拒付/调单录入时已全额退款")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("终态")])])])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);