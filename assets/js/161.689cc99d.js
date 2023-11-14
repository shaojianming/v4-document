(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{724:function(t,e,a){"use strict";a.r(e);var i=a(12),l=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"upload-logistics-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upload-logistics-information"}},[t._v("#")]),t._v(" Upload Logistics Information")]),t._v(" "),e("h2",{attrs:{id:"request-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-url"}},[t._v("#")]),t._v(" Request Url")]),t._v(" "),e("br"),t._v(" "),e("div",[e("code-group",[e("code-block",{attrs:{title:"Sandbox Environment",active:""}},[e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("/v4-document//logistics/upload\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("code-block",{attrs:{title:"Production Environment"}},[e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("https://acquirer-payment.pingpongx.com/v4/logistics/upload\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])],1)],1),t._v(" "),e("h2",{attrs:{id:"request-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-parameters"}},[t._v("#")]),t._v(" Request Parameters")]),t._v(" "),e("h3",{attrs:{id:"common-request-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-request-parameters"}},[t._v("#")]),t._v(" Common Request Parameters")]),t._v(" "),e("br"),t._v(" "),e("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Parameter required attribute description: required (M), optional (O), conditionally required (C)")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("POST")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("JSON")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter attribute")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("accId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong merchant store ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("clientId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong merchant ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("signType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(32)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Signature Specification: MD5 and SHA256 are supported. For details, see the Signature Specification section hereof for details")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("sign")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(128)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("For signature, see the Signature Specification section hereof for details "),e("a",{attrs:{href:"/v4-document/pages /77ae52/",target:"_blank"}},[t._v("Signing Protocol ")]),t._v(" All Parameters Participate in Signature")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("version")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(10)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Currently fixed at 1.0, may be adjusted with changes to theapiin the future")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bizContent")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Collection of request parameters, with no maximum length. All request parameters except for common parameters must be passed in this parameter")])])])]),t._v(" "),e("h3",{attrs:{id:"request-parameters-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-parameters-2"}},[t._v("#")]),t._v(" Request Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter attribute")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("merchantTransactionId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Merchant Website Transaction Number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("trackingNumber")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Logistic tracking number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("logisticsCompany")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Logistic company")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("logisticsCompanyUrl")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Logistic tracking website")])])])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"response-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-parameters"}},[t._v("#")]),t._v(" Response Parameters")]),t._v(" "),e("br"),t._v(" "),e("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Parameter required attribute description: required (M), optional (O), conditionally required (C)")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("POST")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("JSON")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("clientId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong merchant ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("accId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong merchant store  ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("merchantTransactionId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Merchant Website Transaction Number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("trackingNumber")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Logistic tracking number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("logisticsCompany")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Logistic company")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("logisticsCompanyUrl")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Logistic tracking website")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("result")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES/NO")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("reason")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Upload failure reason")])])])])],1)}),[],!1,null,null,null);e.default=l.exports}}]);