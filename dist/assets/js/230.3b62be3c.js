(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{798:function(t,e,a){"use strict";a.r(e);var i=a(12),l=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"token-unbinding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#token-unbinding"}},[t._v("#")]),t._v(" Token Unbinding")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("After the token is successfully unbound, it cannot be used again.")])]),t._v(" "),e("li",[e("p",[t._v("Subsequent transactions (refund, pre-authorization completion, pre-authorization cancellation) that were previously made using the token will not be affected.")])])]),t._v(" "),e("h2",{attrs:{id:"request-address"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-address"}},[t._v("#")]),t._v(" Request Address")]),t._v(" "),e("br"),t._v(" "),e("div",[e("code-group",[e("code-block",{attrs:{title:"Sandbox Environment",active:""}},[e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("https://sandbox-acquirer-payment.pingpongx.com/v4/tokenization/unbind\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("code-block",{attrs:{title:"Production Environment"}},[e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("https://acquirer-payment.pingpongx.com/v4/tokenization/unbind\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])],1)],1),t._v(" "),e("h2",{attrs:{id:"request-parameter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-parameter"}},[t._v("#")]),t._v(" Request Parameter")]),t._v(" "),e("h3",{attrs:{id:"common-request-parameter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-request-parameter"}},[t._v("#")]),t._v(" Common Request Parameter")]),t._v(" "),e("br"),t._v(" "),e("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("POST")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("JSON")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter attribute")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("accId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong merchant store ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("clientId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong merchant ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("signType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(32)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Signature protocol, supports MD5, SHA256，see the "),e("a",{attrs:{href:"/pages/77ae52/",target:"_blank"}},[t._v("signature protocol column")]),t._v("in this article for details")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("sign")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(128)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Signature content, see the"),e("a",{attrs:{href:"/pages/77ae52/",target:"_blank"}},[t._v("signature protocol column")]),t._v("in this article for details. All parameters participate in the signature")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("version")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Currently fixed at 1.0, may be adjusted with changes to theapiin the future")])])])]),t._v(" "),e("h3",{attrs:{id:"request-parameter-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-parameter-2"}},[t._v("#")]),t._v(" Request Parameter")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter attribute")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Token bound by the cardholder")])])])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"response-parameter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-parameter"}},[t._v("#")]),t._v(" Response Parameter")]),t._v(" "),e("br"),t._v(" "),e("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("POST")]),t._v(" "),e("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("JSON")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter attribute")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("clientId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong merchant ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("accId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong merchant store ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("code")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Result status code")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("result description")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Unbinding status"),e("ul",[e("li",[t._v("SUCCESS-Unbinding successful")]),e("li",[t._v("FAILED-Unbinding failed")])])])])])])],1)}),[],!1,null,null,null);e.default=l.exports}}]);