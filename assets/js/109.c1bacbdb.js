(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{668:function(t,e,s){"use strict";s.r(e);var a=s(12),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"request-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-url"}},[t._v("#")]),t._v(" Request Url")]),t._v(" "),e("br"),t._v(" "),e("div",[e("code-group",[e("code-block",{attrs:{title:"sandbox",active:""}},[e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("https://sandbox-acquirer-payment.pingpongx.com/v4/authorization/applyToken\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("code-block",{attrs:{title:"Production Environment"}},[e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("https://acquirer-payment.pingpongx.com/v4/authorization/applyToken\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])],1)],1),t._v(" "),e("h2",{attrs:{id:"request-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-parameters"}},[t._v("#")]),t._v(" Request Parameters")]),t._v(" "),e("h3",{attrs:{id:"common-request-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-request-parameters"}},[t._v("#")]),t._v(" Common Request Parameters")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("v4-Checkout-Uniformly-Alternative-AlternativePublicRequestTable"),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"business-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#business-parameters"}},[t._v("#")]),t._v(" Business Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter field")]),t._v(" "),e("th",[t._v("Parameter type")]),t._v(" "),e("th",[t._v("Required")]),t._v(" "),e("th",[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("requestId")]),t._v(" "),e("td",[t._v("string(64)")]),t._v(" "),e("td",[t._v("M")]),t._v(" "),e("td",[t._v("Unique Request Number")])]),t._v(" "),e("tr",[e("td",[t._v("merchantUserId")]),t._v(" "),e("td",[t._v("String(256)")]),t._v(" "),e("td",[t._v("M")]),t._v(" "),e("td",[t._v("Member ID, the user's membership ID on the merchant's website")])]),t._v(" "),e("tr",[e("td",[t._v("authCode")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("M")]),t._v(" "),e("td",[t._v("Authorization Code, obtained by the merchant from the redirect link")])]),t._v(" "),e("tr",[e("td",[t._v("authState")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("M")]),t._v(" "),e("td",[t._v("Merchant obtains from the redirect link")])])])]),t._v(" "),e("h2",{attrs:{id:"request-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-example"}},[t._v("#")]),t._v(" Request example")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023042011040310224447"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023042011040310224"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"signType"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SHA256"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sign"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{Sign}}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bizContent"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"requestId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{requestId}}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"merchantUserId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"126048960513156"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authState"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1694433092140546"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authCode"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"281004133312074223531719"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("h2",{attrs:{id:"response-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-parameters"}},[t._v("#")]),t._v(" Response Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bizContent.userLoginId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("O")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Account Name of the user on the wallet side")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bizContent.expireTime")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("O")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("token Expiration Time")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bizContent.token")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("O")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("token")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("sign")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Signature Value")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("signType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Signature Method")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("code")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("O")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Result Status Code")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("O")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Result Description")])])])]),t._v(" "),e("h2",{attrs:{id:"response-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-example"}},[t._v("#")]),t._v(" Response Example")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bizContent"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"userLoginId\\":\\"y_fan1214@163.com\\",\\"expireTime\\":\\"2038-09-11 19:52:30\\",\\"token\\":\\"13d098c42afc5b6ba522da17626b48de0a278306315bf9a0e19bc46e49b97226\\"}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sign"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C5CA4287914D1FAEA2359227D2AD997B510508F05B0F2EF20E0FD0727E734AB4"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"signType"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SHA256"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);