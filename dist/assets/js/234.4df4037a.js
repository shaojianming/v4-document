(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{799:function(t,e,a){"use strict";a.r(e);var r=a(12),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"before-starting-the-integration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#before-starting-the-integration"}},[t._v("#")]),t._v(" Before Starting the Integration")]),t._v(" "),e("p",[t._v("Before starting, we assume that you have integrated any of the following solutions")]),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{href:"/pages/f90dfd/",target:"_blank"}},[t._v("Hosted")]),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{href:"/pages/6c7fd1/",target:"_blank"}},[t._v("Non-hosted")]),t._v(" "),e("h2",{attrs:{id:"specific-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#specific-parameters"}},[t._v("#")]),t._v(" Specific Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Required")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bizType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("fixed value:"),e("code",[t._v("CardOnFile")]),t._v(" (Please contact technical support to use this value)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("merchantUserId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Cardholder ID for merchant website，Globally Unique，Pass "),e("code",[t._v("null")]),t._v(" when unable to obtain")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("tokenDetail.createToken")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String(1)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("Y")]),t._v("/"),e("code",[t._v("N")]),t._v(",Do you want to create a token")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("tokenDetail.token")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String(16)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("card Token")])])])]),t._v(" "),e("h2",{attrs:{id:"make-one-off-payments-process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#make-one-off-payments-process"}},[t._v("#")]),t._v(" Make One-off payments process")]),t._v(" "),e("h3",{attrs:{id:"step-1-created-card-token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-created-card-token"}},[t._v("#")]),t._v(" Step 1：created card token")]),t._v(" "),e("br"),t._v(" "),e("div",{staticStyle:{"justify-content":"space-between",display:"flex"}},[e("el-card",{staticStyle:{"max-width":"400px",background:"none",color:"var(--textColor)","border-color":"var(--borderColor)"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("a",{attrs:{href:"/pages/abc0f1",target:"_blank"}},[t._v("Hosted")])]),t._v(" "),e("div",[e("span",{staticStyle:{display:"block"}},[t._v("Associated API:")]),t._v(" "),e("a",{attrs:{href:"/pages/617443/",target:"_blank"}},[t._v("Embedded Hosted-JS-SDK")]),e("br"),t._v("or"),e("br"),t._v(" "),e("a",{attrs:{href:"/pages/c2df15/",target:"_blank"}},[t._v("Redirect Hosted Payment Page")]),t._v(" "),e("ul",[e("li",[t._v("On the checkout page, whether the createToken is"),e("Badge",{attrs:{text:"Y",vertical:"middle"}}),t._v(" ,No need to add special parameters.")],1),t._v(" "),e("li",[t._v("Add request parameters"),e("Badge",{attrs:{text:"merchantUserId",vertical:"middle"}}),t._v("Identify the current cardholder's identity.")],1)])])]),t._v(" "),e("el-card",{staticStyle:{"max-width":"400px",background:"none",color:"var(--textColor)","border-color":"var(--borderColor)"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("a",{attrs:{href:"/pages/14d81d",target:"_blank"}},[t._v("Non-Hosted")])]),t._v(" "),e("div",[e("span",{staticStyle:{display:"block"}},[t._v("Associated API:")]),t._v(" "),e("a",{attrs:{href:"/pages/a2c224/",target:"_blank"}},[t._v("Accept a Payment")]),t._v(" "),e("ul",[e("li",[t._v("Add request parameters"),e("Badge",{attrs:{text:"tokenDetail.createToken=Y",vertical:"middle"}}),t._v("。")],1),t._v(" "),e("li",[t._v("Add request parameters"),e("Badge",{attrs:{text:"customer.customerId",vertical:"middle"}}),t._v("，Identify the current cardholder's identity.")],1),t._v(" "),e("li",[t._v("Add request parameters"),e("Badge",{attrs:{text:"bizType=CardOnFile(可选)",vertical:"middle"}})],1)])])])],1),t._v(" "),e("h3",{attrs:{id:"step-2-set-specific-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-set-specific-parameters"}},[t._v("#")]),t._v(" Step 2：Set Specific Parameters")]),t._v(" "),e("ul",[e("li",[t._v("Create a token Only:amount=0")]),t._v(" "),e("li",[t._v("Create a token and Pay :amount>0")]),t._v(" "),e("li",[t._v("must:bizType="),e("code",[t._v("CardOnFile")]),t._v("。")])]),t._v(" "),e("h3",{attrs:{id:"step-3-obtain-and-save-the-card-token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-obtain-and-save-the-card-token"}},[t._v("#")]),t._v(" Step 3：Obtain and save the card token")]),t._v(" "),e("p",[t._v("When PingPongCheckout approves your payment request, a card token will be issued in an asynchronous notification")]),t._v(" "),e("h2",{attrs:{id:"use-card-token-instead-of-pan-payment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-card-token-instead-of-pan-payment"}},[t._v("#")]),t._v(" Use card token instead of pan payment")]),t._v(" "),e("div",[e("img",{attrs:{src:t.$withBase("/v4/tokenization/tokenPay.png")}})]),t._v(" "),e("el-card",{staticStyle:{background:"none",color:"var(--textColor)","border-color":"var(--borderColor)"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("h4",[t._v("Here is a brief explanation of the main steps")])]),t._v(" "),e("ol",[e("li",[t._v("Client Place Order")]),t._v(" "),e("li",[t._v("\n    Merchant server request"),e("a",{attrs:{href:"/pages/a2c224/",target:"_blank"}},[t._v("Accept a Payment")]),t._v("API\n    "),e("ul",[e("li",[t._v("Add request parameters"),e("code",[t._v("tokenDetail.token")])]),t._v(" "),e("li",[t._v("Add request parameters"),e("code",[t._v("bizType=CardOnFile")])]),t._v(" "),e("li",[t._v("Token will be used instead of card information, so there is no need to transmit CVV, expiry date, PAN or other card information.")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"/pages/a2c224/",target:"_blank"}},[t._v("Accept a Payment")]),t._v(" API synchronize response payment results")]),t._v(" "),e("li",[t._v("\nAsynchronous notification pushes the final payment result. How to obtain asynchronous notification messages is detailed in"),e("a",{attrs:{href:"/pages/d0ddb3/",target:"_blank"}},[t._v("Asynchronous Notification\n")])])])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);