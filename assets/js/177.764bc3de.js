(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{737:function(t,e,a){"use strict";a.r(e);var r=a(12),i=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"request-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-url"}},[t._v("#")]),t._v(" Request Url")]),t._v(" "),e("br"),t._v(" "),e("div",[e("code-group",[e("code-block",{attrs:{title:"Sandbox Environment",active:""}},[e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("/v4-document//payment/capture\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("code-block",{attrs:{title:"Production Environment"}},[e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("https://acquirer-payment.pingpongx.com/dispute/v4/payment/capture\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])],1)],1),t._v(" "),e("h2",{attrs:{id:"request-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-parameters"}},[t._v("#")]),t._v(" Request Parameters")]),t._v(" "),e("h3",{attrs:{id:"common-request-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-request-parameters"}},[t._v("#")]),t._v(" Common Request Parameters")]),t._v(" "),e("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Parameter required attribute description: required (M), optional (O), conditionally required (C)")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("POST")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("JSON")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("v4-Checkout-Uniformly-Alternative-AlternativePublicRequestTable"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"request-parameters-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-parameters-2"}},[t._v("#")]),t._v(" Request Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter attribute")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("merchantTransactionId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Merchant Website Transaction Number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("merchantCaptureId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Merchant website pre-authorization confirmation serial number, globally unique")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("amount")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(14)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("transaction amount")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("currency")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(3)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('"transaction currency." ISO 4217 provides a three-letter code for currencies. For the specific supported currencies, please refer to the attached '),e("a",{attrs:{href:"/v4-document/pages /3c0bdf/"}},[t._v("table of transaction currencies")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("notificationUrl")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(255)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("O")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Merchant-defined URL to receive asynchronous transaction results. Once this parameter is filled out, PingPongCheckout will post the transaction result to the specified URL")])])])]),t._v(" "),e("h3",{attrs:{id:"response-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-parameters"}},[t._v("#")]),t._v(" Response Parameters")]),t._v(" "),e("h3",{attrs:{id:"common-response-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-response-parameters"}},[t._v("#")]),t._v(" Common Response Parameters")]),t._v(" "),e("br"),t._v(" "),e("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Parameter required attribute description: required (M), optional (O), conditionally required (C)")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("POST")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("JSON")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("v4-Checkout-Uniformly-Alternative-AlternativePublicResponseTable"),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"response-parameters-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-parameters-2"}},[t._v("#")]),t._v(" Response Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter attribute")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("transactionId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong Transaction Number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("merchantTransactionId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Merchant Website Transaction Number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("merchantCaptureId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Merchant website pre-authorization confirmation serial number, globally unique")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("currency")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(3)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Transaction currency")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("amount")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(14)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("transaction amount")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("captureTime")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(32)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Capture initiation time, timestamp")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("captureEndingTime")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(32)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("O")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Capture finalization time, timestamp")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(32)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("ol",[e("li",[t._v("SUCCESS")]),e("li",[t._v("FAILED")]),e("li",[t._v("PROCESSING")])])])])])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);