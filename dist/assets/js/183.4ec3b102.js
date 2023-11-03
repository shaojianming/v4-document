(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{746:function(t,s,e){"use strict";e.r(s);var a=e(12),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"request-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-url"}},[t._v("#")]),t._v(" Request Url")]),t._v(" "),s("br"),t._v(" "),s("div",[s("code-group",[s("code-block",{attrs:{title:"sandbox",active:""}},[s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("https://sandbox-acquirer-payment.pingpongx.com/dispute/acceptDispute\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("code-block",{attrs:{title:"Production Environment"}},[s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("https://acquirer-payment.pingpongx.com/v4/dispute/acceptDispute\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])],1)],1),t._v(" "),s("h2",{attrs:{id:"request-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-parameters"}},[t._v("#")]),t._v(" Request Parameters")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("div",[s("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Parameter required attribute description:Mandatory (M), optional (O), conditional (C) ")]),t._v(" "),s("el-tag",{attrs:{effect:"dark"}},[t._v("POST")]),t._v(" "),s("el-tag",{attrs:{effect:"dark"}},[t._v("JSON")])],1),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter field")]),t._v(" "),s("th",[t._v("Parameter type")]),t._v(" "),s("th",[t._v("Reduired")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("accId")]),t._v(" "),s("td",[t._v("string(256)")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("PingPong merchant store ID")])]),t._v(" "),s("tr",[s("td",[t._v("disputePspReference")]),t._v(" "),s("td",[t._v("string(256)")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("Chargeback Order Number")])]),t._v(" "),s("tr",[s("td",[t._v("sign")]),t._v(" "),s("td",[t._v("string(256)")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("sign")])]),t._v(" "),s("tr",[s("td",[t._v("signType")]),t._v(" "),s("td",[t._v("string(32)")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("signType，"),s("code",[t._v("SHA256")])])]),t._v(" "),s("tr",[s("td",[t._v("version")]),t._v(" "),s("td",[t._v("string(10)")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("1.0")])])])]),t._v(" "),s("h2",{attrs:{id:"request-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-example"}},[t._v("#")]),t._v(" Request Example:")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020010710552510100273"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"disputePspReference"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"202303011046544027"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sign"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A2DF0AEA73DEB5468C3A694C84F124DF54B93BD23860D43C1726F15F0D58 D216"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"signType"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SHA256"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h2",{attrs:{id:"response-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-parameters"}},[t._v("#")]),t._v(" Response Parameters")]),t._v(" "),s("br"),t._v(" "),s("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Parameter required attribute description:Mandatory (M), optional (O), conditional (C)")]),t._v(" "),s("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("POST")]),t._v(" "),s("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("JSON")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field Name")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("accId")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("PingPong merchant store ID")])]),t._v(" "),s("tr",[s("td",[t._v("sign")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("sign")])]),t._v(" "),s("tr",[s("td",[t._v("signType")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("signType "),s("code",[t._v("SHA256")])])]),t._v(" "),s("tr",[s("td",[t._v("success")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",[t._v("true")]),t._v("/"),s("code",[t._v("false")])])])])]),t._v(" "),s("h2",{attrs:{id:"response-sample"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-sample"}},[t._v("#")]),t._v(" Response sample")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020010710552510100273"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sign"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DA7E57331DFC0283CD8F9E811E9E66ECE6BB456747ECE994A7890931360479B2 "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"signType"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SHA256"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);