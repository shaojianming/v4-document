(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{725:function(t,e,a){"use strict";a.r(e);var s=a(12),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("br"),t._v(" "),e("div",[e("Common-Warring",[e("p",[t._v("Please call the queryapiafter the refund is synchronously returned, otherwise query exceptions may occur")])])],1),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"request-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-url"}},[t._v("#")]),t._v(" Request Url")]),t._v(" "),e("br"),t._v(" "),e("div",[e("code-group",[e("code-block",{attrs:{title:"Sandbox Environment",active:""}},[e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("https://sandbox-acquirer-payment.pingpongx.com/v4/refund/query\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("code-block",{attrs:{title:"Production Environment"}},[e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("https://acquirer-payment.pingpongx.com/v4/refund/query\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])],1)],1),t._v(" "),e("h2",{attrs:{id:"request-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-parameters"}},[t._v("#")]),t._v(" Request Parameters")]),t._v(" "),e("h3",{attrs:{id:"common-request-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-request-parameters"}},[t._v("#")]),t._v(" Common Request Parameters")]),t._v(" "),e("br"),t._v(" "),e("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C)")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("POST")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("JSON")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter attribute")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("accId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong merchant store ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("clientId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong merchant ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("signType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(32)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Signature Specification: MD5 and SHA256 are supported. For details,see the "),e("a",{attrs:{href:"/pages/77ae52/",target:"_blank"}},[t._v("Signing Protocol ")]),t._v(" section of the document")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("sign")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(128)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("For signature, see the Signature Specification section hereof for details "),e("a",{attrs:{href:"/pages/77ae52/",target:"_blank"}},[t._v("Signing Protocol ")]),t._v(" All Parameters Participate in Signature")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("version")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(10)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Currently fixed at 1.0, may be adjusted with changes to theapiin the future")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bizContent")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Collection of request parameters, with no maximum length. All request parameters except for common parameters must be passed in this parameter")])])])]),t._v(" "),e("h3",{attrs:{id:"business-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#business-parameters"}},[t._v("#")]),t._v(" Business  Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter attribute")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("refundId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong refund serial number, at least one of PingPong refund serial number and merchantRefundId should be submitted")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("merchantRefundId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Merchant website refund serial number, at least one of merchant website refund serial number and refundId should be submitted")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("merchantTransactionId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Merchant Website Transaction Number")])])])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"response-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-parameters"}},[t._v("#")]),t._v(" Response Parameters")]),t._v(" "),e("h3",{attrs:{id:"common-response-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-response-parameters"}},[t._v("#")]),t._v(" Common Response Parameters")]),t._v(" "),e("br"),t._v(" "),e("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Parameter required attribute description: required (M), optional (O), conditionally required (C)")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("POST")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("JSON")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("accId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong merchant store ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("clientId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong merchant ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("code")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(6)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("result status code,reference"),e("a",{attrs:{href:"/pages/183abf/",target:"_blank"}},[t._v("status code")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("result description")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("signType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(32)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Signature Specification: MD5 and SHA256 are supported. For details, see the Signature Specification section hereof for details")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("sign")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(128)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("For signature, see the Signature Specification section hereof for details "),e("a",{attrs:{href:"/pages/77ae52/",target:"_blank"}},[t._v("Signing Protocol ")]),t._v(" All Parameters Participate in Signature")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bizContent")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Business Response Parameters")])])])]),t._v(" "),e("h3",{attrs:{id:"response-parameters-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-parameters-2"}},[t._v("#")]),t._v(" Response Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("transactionId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong Transaction Number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("merchantTransactionId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Merchant Website Transaction Number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("currency")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(3)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Transaction currency")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("amount")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(14)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("transaction amount")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("refundTime")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(32)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Refund initiation time, timestamp")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("resultCode")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String(6)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("status code")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("resultDescription")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String(500)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("status description")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("refundEndingTime")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(32)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Refund finalization time, timestamp")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(32)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("SUCCESS FAILED PROCESSING")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("remark")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Merchant Extension Fields")])])])]),t._v(" "),e("h3",{attrs:{id:"response-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-example"}},[t._v("#")]),t._v(" Response Example")]),t._v(" "),e("div",[e("code-group",[e("code-block",{attrs:{title:"SUCCESS",active:""}},[e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023060217493010231446"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bizContent"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"amount\\":\\"200.000000\\",\\"cardInfo\\":{\\"firstName\\":\\"zhang\\",\\"lastName\\":\\"san\\",\\"lastFourDigits\\":\\"8Q==\\",\\"ipCountry\\":\\"CN\\",\\"firstSixDigits\\":\\"AQICAH\\"},\\"threeDSecure\\":\\"\\",\\"resultCode\\":\\"000000\\",\\"transactionTime\\":\\"1687334372000\\",\\"transactionId\\":\\"2023062150000329\\",\\"merchantTransactionId\\":\\"PMT-1OL5AJOJA91687334040656\\",\\"currency\\":\\"USD\\",\\"resultDescription\\":\\"Transaction succeeded\\",\\"captureDelayHours\\":0,\\"status\\":\\"SUCCESS\\"}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023060217493010231"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"001000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Successful request"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sign"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D7F4C867DDB7F3BDC56F598B5467F2D4792E6FCE459EA119BA3FF2FCEF97DB79"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"signType"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SHA256"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])])])],1)],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);