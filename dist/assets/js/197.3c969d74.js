(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{760:function(t,s,a){"use strict";a.r(s);var e=a(12),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"request-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-url"}},[t._v("#")]),t._v(" Request Url")]),t._v(" "),s("br"),t._v(" "),s("div",[s("code-group",[s("code-block",{attrs:{title:"sandbox",active:""}},[s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("https://sandbox-acquirer-payment.pingpongx.com/dispute/supplyDefenseDocument\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("code-block",{attrs:{title:"Production Environment"}},[s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("https://acquirer-payment.pingpongx.com/dispute/supplyDefenseDocument\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])],1)],1),t._v(" "),s("h2",{attrs:{id:"request-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-parameters"}},[t._v("#")]),t._v(" Request Parameters")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("div",[s("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Parameter required attribute description:Mandatory (M), optional (O), conditional (C) ")]),t._v(" "),s("el-tag",{attrs:{effect:"dark"}},[t._v("POST")]),t._v(" "),s("el-tag",{attrs:{effect:"dark"}},[t._v("JSON")])],1),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter field")]),t._v(" "),s("th",[t._v("Parameter type")]),t._v(" "),s("th",[t._v("Reduired")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("accId")]),t._v(" "),s("td",[t._v("string(256)")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("PingPong merchant store ID")])]),t._v(" "),s("tr",[s("td",[t._v("eventDateStart")]),t._v(" "),s("td",[t._v("string(256)")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("Query Start and End Time of the Event, format should be yyyy-MM-dd HH:mm:ss")])]),t._v(" "),s("tr",[s("td",[t._v("eventDateEnd")]),t._v(" "),s("td",[t._v("string(256)")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("Query Start and End Time of the Event, format should be yyyy-MM-dd HH:mm:ss")])]),t._v(" "),s("tr",[s("td",[t._v("disputePspReference")]),t._v(" "),s("td",[t._v("string(256)")]),t._v(" "),s("td",[t._v("O")]),t._v(" "),s("td",[t._v("Chargeback Order Number")])]),t._v(" "),s("tr",[s("td",[t._v("chargebackStatus")]),t._v(" "),s("td",[t._v("string(256)")]),t._v(" "),s("td",[t._v("O")]),t._v(" "),s("td",[t._v("Chargeback Order Status")])]),t._v(" "),s("tr",[s("td",[t._v("pageNum")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("pageNum")])]),t._v(" "),s("tr",[s("td",[t._v("pageSize")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("Number of Rows, Maximum Limit 1000.")])]),t._v(" "),s("tr",[s("td",[t._v("sign")]),t._v(" "),s("td",[t._v("string(256)")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("sign")])]),t._v(" "),s("tr",[s("td",[t._v("signType")]),t._v(" "),s("td",[t._v("string(32)")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("signType，"),s("code",[t._v("SHA256")])])]),t._v(" "),s("tr",[s("td",[t._v("version")]),t._v(" "),s("td",[t._v("string(10)")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("Currently fixed at 1.0, may be adjusted with changes to theapiin the future")])])])]),t._v(" "),s("h2",{attrs:{id:"request-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-example"}},[t._v("#")]),t._v(" Request Example:")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018092714313010016291"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eventDateStart"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-02-11 00:00:00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eventDateEnd"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-03-08 00:00:00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"chargebackStatus"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pageSize"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pageNum"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"disputePspReference"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sign"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{Sign}}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"signType"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SHA256"')]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h2",{attrs:{id:"response-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-parameters"}},[t._v("#")]),t._v(" Response Parameters")]),t._v(" "),s("br"),t._v(" "),s("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Parameter required attribute description:Mandatory (M), optional (O), conditional (C)")]),t._v(" "),s("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("POST")]),t._v(" "),s("el-tag",{attrs:{type:"",effect:"dark"}},[t._v("JSON")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field Name")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("accId")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("PingPong merchant store ID")])]),t._v(" "),s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("data")])]),t._v(" "),s("tr",[s("td",[t._v("detailList")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("detailList")])]),t._v(" "),s("tr",[s("td",[t._v("disputePspReference")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("Chargeback Order Number")])]),t._v(" "),s("tr",[s("td",[t._v("chargebackSchemeCode")]),t._v(" "),s("td",[t._v("O")]),t._v(" "),s("td",[t._v("Card Network")])]),t._v(" "),s("tr",[s("td",[t._v("chargebackReasonCode")]),t._v(" "),s("td",[t._v("O")]),t._v(" "),s("td",[t._v("Chargeback Reason Code")])]),t._v(" "),s("tr",[s("td",[t._v("defensePeriodEndsAt")]),t._v(" "),s("td",[t._v("O")]),t._v(" "),s("td",[t._v("Processing Deadline")])]),t._v(" "),s("tr",[s("td",[t._v("defendable")]),t._v(" "),s("td",[t._v("O")]),t._v(" "),s("td",[t._v("Whether it's Challengeable")])]),t._v(" "),s("tr",[s("td",[t._v("chargebackStatus")]),t._v(" "),s("td",[t._v("O")]),t._v(" "),s("td",[t._v("Chargeback Order Status")])]),t._v(" "),s("tr",[s("td",[t._v("currency")]),t._v(" "),s("td",[t._v("O")]),t._v(" "),s("td",[t._v("currency")])]),t._v(" "),s("tr",[s("td",[t._v("amount")]),t._v(" "),s("td",[t._v("O")]),t._v(" "),s("td",[t._v("amount")])]),t._v(" "),s("tr",[s("td",[t._v("eventDate")]),t._v(" "),s("td",[t._v("O")]),t._v(" "),s("td",[t._v("eventDate")])]),t._v(" "),s("tr",[s("td",[t._v("merchantReference")]),t._v(" "),s("td",[t._v("O")]),t._v(" "),s("td",[t._v("Merchant website order serial number")])]),t._v(" "),s("tr",[s("td",[t._v("originalReference")]),t._v(" "),s("td",[t._v("O")]),t._v(" "),s("td",[t._v("PingPong transaction serial number")])]),t._v(" "),s("tr",[s("td",[t._v("sign")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("sign")])]),t._v(" "),s("tr",[s("td",[t._v("signType")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("signType， “SHA256”")])]),t._v(" "),s("tr",[s("td",[t._v("success")]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("true/false")])]),t._v(" "),s("tr",[s("td",[t._v("errorCode")]),t._v(" "),s("td",[t._v("O")]),t._v(" "),s("td",[s("br"),s("a",{attrs:{href:"/pages/8ea994/#%E5%BC%82%E5%B8%B8%E7%BC%96%E7%A0%81%E8%AF%A6%E6%83%85",target:"_blank"}},[t._v("异常编码详情")])])]),t._v(" "),s("tr",[s("td",[t._v("errorMessage")]),t._v(" "),s("td",[t._v("O")]),t._v(" "),s("td",[t._v("Request failure details")])])])]),t._v(" "),s("h2",{attrs:{id:"response-sample"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-sample"}},[t._v("#")]),t._v(" Response sample")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018092714313010016291"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"detailList"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018092714313010016291"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"amount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100.000000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"chargebackReasonCode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4807"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"chargebackSchemeCode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mastercard"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"chargebackStatus"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PENDING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"currency"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defendable"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defensePeriodEndsAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023/04/30"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"disputePspReference"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"202304191417094106"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eventDate"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-04-19 14:17:09"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"merchantReference"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PMT-1681883428544"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"originalReference"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PS23041913502860034"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018092714313010016291"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"amount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100.000000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"chargebackReasonCode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4807"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"chargebackSchemeCode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mastercard"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"chargebackStatus"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PENDING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"currency"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defendable"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defensePeriodEndsAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023/04/30"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"disputePspReference"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"202304191415234105"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eventDate"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-04-19 14:15:24"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"merchantReference"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PMT-1681883428544"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"originalReference"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PS23041913502860034"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sign"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"96A4042D057EB5CBBD8929C13D12C785B5BBCF74A6949CCC28330FE0638F0F5D"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"signType"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SHA256"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br")])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);