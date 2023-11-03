(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{784:function(t,e,a){"use strict";a.r(e);var r=a(12),n=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"before-starting-the-integration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#before-starting-the-integration"}},[t._v("#")]),t._v(" Before Starting the Integration")]),t._v(" "),e("p",[t._v("Before starting, we assume that you have integrated any of the following solutions")]),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{href:"/pages/f90dfd/",target:"_blank"}},[t._v("Hosted")]),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{href:"/pages/6c7fd1/",target:"_blank"}},[t._v("Non-hosted")]),t._v(" "),e("h2",{attrs:{id:"interaction-process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interaction-process"}},[t._v("#")]),t._v(" Interaction Process")]),t._v(" "),e("h3",{attrs:{id:"cardholder-subscription-event-interaction-process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cardholder-subscription-event-interaction-process"}},[t._v("#")]),t._v(" Cardholder subscription event interaction process")]),t._v(" "),e("div",[e("img",{attrs:{src:t.$withBase("/v4/recurring/authorization.png")}})]),t._v(" "),e("el-card",{staticStyle:{background:"none",color:"var(--textColor)","border-color":"var(--borderColor)"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("h4",[t._v("Briefly explain the steps for Cardholder Authorization Event as follows")])]),t._v(" "),e("ol",[e("li",[t._v("The client initiates recurring payment to the merchant server.")]),t._v(" "),e("li",[t._v("The merchant server requests the PingPongCheckout server to initiate a transaction marked as recurring payment.")]),t._v(" "),e("li",[t._v("\nPingPongCheckout server responds to payment results\n"),e("ul",[e("li",[t._v("Payment Successful: Authorization Successful, subsequent scheduled deductions can be initiated.")]),t._v(" "),e("li",[t._v("Payment Failed: Authorization Failed, scheduled deductions cannot be initiated.")])])])])]),t._v(" "),e("h3",{attrs:{id:"recurring-payment-event-interaction-process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#recurring-payment-event-interaction-process"}},[t._v("#")]),t._v(" Recurring Payment Event Interaction Process.")]),t._v(" "),e("div",[e("img",{attrs:{src:t.$withBase("/v4/recurring/plannedDeduction.png")}})]),t._v(" "),e("el-card",{staticStyle:{background:"none",color:"var(--textColor)","border-color":"var(--borderColor)"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("h4",[t._v("Here is a brief explanation of the deduction steps again")])]),t._v(" "),e("ol",[e("li",[t._v("The merchant server saves a regular payment plan and deducts payments regularly according to the plan")]),t._v(" "),e("li",[t._v("In order to complete the recurring payment, the merchant server needs to request PingPongCheckout's "),e("a",{attrs:{href:"/pages/a2c224/",target:"_blank"}},[t._v("Accept a Payment")]),t._v(" API, initiate a transaction marked as recurring payment, and provide the merchant order number generated during the authorization process.")]),t._v(" "),e("li",[t._v("\nPingPongCheckout server responds to payment results\n")])])]),t._v(" "),e("h2",{attrs:{id:"api-list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-list"}},[t._v("#")]),t._v(" API List")]),t._v(" "),e("br"),t._v(" "),e("div",[e("a",{attrs:{href:"/pages/a2c224/",target:"_blank"}},[t._v("Accept a Payment")]),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{href:"/pages/d0ddb3/",target:"_blank"}},[t._v("Asynchronous Notification")]),t._v(" "),e("br")]),t._v(" "),e("h2",{attrs:{id:"server-access"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#server-access"}},[t._v("#")]),t._v(" Server Access")]),t._v(" "),e("h3",{attrs:{id:"subscriptions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscriptions"}},[t._v("#")]),t._v(" Subscriptions")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Required")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bizType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Recurring payment flag，fixed value:"),e("code",[t._v("Recurring")])])])])]),t._v(" "),e("p",[t._v("On request"),e("br"),e("br"),t._v(" "),e("a",{attrs:{href:"/pages/a2c224/",target:"_blank"}},[t._v("Create a Payment Intent")]),e("br"),t._v(" "),e("a",{attrs:{href:"/pages/a2c224/",target:"_blank"}},[t._v("Accept a Payment")]),e("br")]),t._v(" "),e("p",[t._v("When adding the parameter 'bizType'='Recurring', mark the current transaction as a recurring transaction")]),t._v(" "),e("h3",{attrs:{id:"entrusted-payment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entrusted-payment"}},[t._v("#")]),t._v(" Entrusted payment")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Required")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("primaryMerchantTransactionId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The merchant TransactionId in the asynchronous notification during the first successful order placement")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bizType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Recurring payment flag，fixed value:"),e("code",[t._v("Recurring")])])])])]),t._v(" "),e("p",[t._v("Merchant server request "),e("a",{attrs:{href:"/pages/a2c224/",target:"_blank"}},[t._v("Accept a Payment")]),e("br"),t._v("API，Initiate a payment that is insensitive to the cardholder。")]),t._v(" "),e("ul",[e("li",[t._v("Add parameters "),e("code",[t._v("bizType")]),t._v("="),e("code",[t._v("Recurring")]),t._v("，mark the current transaction as a recurring transaction")]),t._v(" "),e("li",[t._v("Add parameters "),e("code",[t._v("primaryMerchantTransactionId")]),t._v("，The value is the "),e("code",[t._v("merchantTransactionId")]),t._v(" when making the first payment")]),t._v(" "),e("li",[t._v("The parameter "),e("code",[t._v("cardInfo")]),t._v("is replaced by"),e("code",[t._v("primaryMerchantTransactionId")]),t._v("and does not need to be passed")])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);