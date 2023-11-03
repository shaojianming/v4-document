(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{741:function(e,t,r){"use strict";r.r(t);var s=r(12),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"supported-checkout-rendering-methods-for-hosted"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-checkout-rendering-methods-for-hosted"}},[e._v("#")]),e._v(" Supported checkout rendering methods for Hosted.")]),e._v(" "),t("br"),e._v(" "),t("v4-Checkout-Hosted"),e._v(" "),t("h2",{attrs:{id:"system-interaction-process-for-hosted-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-interaction-process-for-hosted-mode"}},[e._v("#")]),e._v(" System interaction process for Hosted mode.")]),e._v(" "),t("div",[t("div",[t("img",{attrs:{src:e.$withBase("/v4/checkout/hosted.png"),alt:"跳转模式交互流程"}})])]),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("el-card",{staticStyle:{background:"none",color:"var(--textColor)","border-color":"var(--borderColor)"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("h4",[e._v("The main steps are briefly described below")])]),e._v(" "),t("ol",[t("li",[e._v("The client submits an order to the merchant's server for processing.")]),e._v(" "),t("li",[e._v("The merchant's server requests the PingPongCheckout server, submitting order information and other necessary parameters.")]),e._v(" "),t("li",[e._v("The PingPongCheckout server responds with checkout construction elements.")]),e._v(" "),t("li",[e._v("\nThe client initializes the checkout.\n"),t("ul",[t("li",[e._v("Hosted-JS-SDK: Initialize SDK")]),e._v(" "),t("li",[e._v("Hosted-Redirect：Redirect to PaymentUrl")])])]),e._v(" "),t("li",[e._v("\nThe checkout interacts with the PingPongCheckout server and renders the PingPongCheckout checkout after a successful interaction.")]),e._v(" "),t("li",[e._v("The buyer fills in payment information such as card number and CVV and submits the payment information.")]),e._v(" "),t("li",[e._v("The cardholder confirms the payment.")]),e._v(" "),t("li",[e._v("If it is a 3D transaction, 3D verification is also required; otherwise, the transaction result is displayed directly. ")]),e._v(" "),t("li",[e._v("For detailed information on obtaining asynchronous notification messages, see "),t("a",{attrs:{href:"/pages/d0ddb3/",target:"_blank"}},[e._v("Asynchronous Notification")]),e._v(".")]),e._v(" "),t("li",[e._v("After receiving an asynchronous notification, respond "),t("el-tag",[e._v("OK")]),e._v(" to PingPongCheckout.")],1)])]),e._v(" "),t("h2",{attrs:{id:"api-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-list"}},[e._v("#")]),e._v(" API List")]),e._v(" "),t("br"),e._v(" "),t("div",[t("a",{attrs:{href:"/pages/a2c224/",target:"_blank"}},[e._v("Place Order")]),e._v(" "),t("br"),e._v(" "),t("a",{attrs:{href:"/pages/d0ddb3/",target:"_blank"}},[e._v("Asynchronous notification")]),e._v(" "),t("br"),e._v(" "),t("a",{attrs:{href:"/pages/67e3c9/",target:"_blank"}},[e._v("Application for refund")])]),e._v(" "),t("h2",{attrs:{id:"server-access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-access"}},[e._v("#")]),e._v(" Server access")]),e._v(" "),t("p",[e._v("After the cardholder client requests the merchant server to place an order, it needs to submit necessary parameters to the PingPongCheckout server to place the order\nsee "),t("a",{attrs:{href:"/pages/a2c224/",target:"_blank"}},[e._v("Accept a Payment")])]),e._v(" "),t("h2",{attrs:{id:"client-access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#client-access"}},[e._v("#")]),e._v(" Client access")]),e._v(" "),t("p",[e._v("Server request"),t("a",{attrs:{href:"/pages/a2c224/",target:"_blank"}},[e._v(" Accept a Payment ")]),e._v("After a successful response, the Hosted access mode checkout page can be rendered on the client.")]),e._v(" "),t("ul",[t("li",[e._v("\n    For instructions on how to initialize the JS-SDK, please visit "),t("a",{attrs:{href:"/pages/617443/",target:"_blank"}},[e._v("Hosted-JS-SDK")])]),e._v(" "),t("li",[e._v("\n    For instructions on how to redirect, please visit "),t("a",{attrs:{href:"/pages/c2df15/",target:"_blank"}},[e._v("Hosted-Redirect")])])]),e._v(" "),t("h2",{attrs:{id:"_3ds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3ds"}},[e._v("#")]),e._v(" 3DS")]),e._v(" "),t("p",[e._v("In the cashier mode, the 3DS process is internally encapsulated by PingPongCheckout, which does not require additional access by merchants.")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);