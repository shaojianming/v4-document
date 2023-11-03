(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{744:function(e,t,a){"use strict";a.r(t);var r=a(12),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("blockquote",[t("p",[e._v("International credit card, abbreviated as Credit Card")]),e._v(" "),t("p",[e._v("Alternative Payment Method, abbreviated as APM")])]),e._v(" "),t("h2",{attrs:{id:"international-credit-card-payment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#international-credit-card-payment"}},[e._v("#")]),e._v(" International Credit Card Payment")]),e._v(" "),t("h3",{attrs:{id:"access-prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-prerequisites"}},[e._v("#")]),e._v(" Access Prerequisites.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("The merchant has PCI qualifications and has passed the PingPongCheckout verification. (For PCI-DSS, please send the attachment to acquire-risk@pingpongx.com and copy gig-tech-acq@pingpongx.com).")])]),e._v(" "),t("li",[t("p",[e._v("The merchant has the ability to develop their own checkout system.")])])]),e._v(" "),t("div",[t("Common-Warring",[e._v("\n      This solution requires the merchant's server to independently store and process cardholder credit card information, therefore mandating PCI-DSS certification for the merchant.\n   ")])],1),e._v(" "),t("h3",{attrs:{id:"interaction-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interaction-process"}},[e._v("#")]),e._v(" Interaction Process")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/v4/checkout/no-hosted-3d.png")}}),e._v(" "),t("el-card",{staticStyle:{background:"none",color:"var(--textColor)","border-color":"var(--borderColor)"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("h4",[e._v("The main steps are briefly described below")])]),e._v(" "),t("ol",[t("li",[e._v("After entering the merchant's checkout page, initialize the risk control plugin.")]),e._v(" "),t("li",[e._v("Monitor the card number input box. When the cardholder fills in the card number and the card number changes or the input box loses focus, trigger the initialization event - complexInit.")]),e._v(" "),t("li",[e._v("In the complexInit event, the risk control plugin interacts with the PingPongCheckout server and returns the jsGeneratedData parameter.")]),e._v(" "),t("li",[e._v("\nThe client submits the order and jsGeneratedData parameters to the merchant server.\n")]),e._v(" "),t("li",[e._v("The merchant server requests "),t("a",{attrs:{href:"/pages/a2c224/",target:"_blank"}},[e._v(" Accept a Payment ")]),e._v(",submitting the jsGeneratedData and other parameters together.")]),e._v(" "),t("li",[e._v("\nThe PingPongCheckout server responds to the request result and determines whether to enter the 3D process based on the return result.\n")]),e._v(" "),t("li",[e._v("If no 3D verification is required, the merchant can execute custom logic and display the payment result.")]),e._v(" "),t("li",[e._v("If 3D verification is required\n"),t("ol",[t("li",[e._v("trigger the 3D verification event of the risk control plugin. The page will be redirected to the 3D challenge page, and the cardholder needs to fill in the 3D verification information.")]),e._v(" "),t("li",[e._v("The issuer verifies the 3D information.")]),e._v(" "),t("li",[e._v("The issuer responds to the verification results to the PingPongCheckout server.")]),e._v(" "),t("li",[e._v("The page will be redirected to the payment result page filled out by the merchant.")])])]),t("li",[e._v("The PingPongCheckout server pushes the payment result. For details on how to obtain asynchronous notification messages, see "),t("a",{attrs:{href:"/pages/d0ddb3/",target:"_blank"}},[e._v("Asynchronous Notification")])])])]),e._v(" "),t("h3",{attrs:{id:"api-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-list"}},[e._v("#")]),e._v(" API list")]),e._v(" "),t("br"),e._v(" "),t("div",[t("a",{attrs:{href:"/pages/a2c224/",target:"_blank"}},[e._v(" Accept a Payment ")]),e._v(" "),t("br"),e._v(" "),t("a",{attrs:{href:"/pages/d0ddb3/",target:"_blank"}},[e._v("Asynchronous notification")]),e._v(" "),t("br"),e._v(" "),t("a",{attrs:{href:"/pages/67e3c9/",target:"_blank"}},[e._v("Application for refund")])]),e._v(" "),t("h3",{attrs:{id:"client-access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#client-access"}},[e._v("#")]),e._v(" Client access")]),e._v(" "),t("h4",{attrs:{id:"integrating-risk-control-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#integrating-risk-control-plugin"}},[e._v("#")]),e._v(" Integrating Risk Control Plugin")]),e._v(" "),t("p",[e._v("End-to-end integration requires the risk control JS to collect necessary information for transaction decision-making. After the cardholder enters the card number, the risk control plugin will call the PingPongCheckoutServer API to send the card number data for verification.")]),e._v(" "),t("p",[e._v("see "),t("a",{attrs:{href:"/pages/c62136/",target:"_blank"}},[e._v(" 3DS Integration Guide")])]),e._v(" "),t("h3",{attrs:{id:"server-access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-access"}},[e._v("#")]),e._v(" Server access")]),e._v(" "),t("h4",{attrs:{id:"create-the-order-and-pay-for-it"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-the-order-and-pay-for-it"}},[e._v("#")]),e._v(" Create the order and pay for it")]),e._v(" "),t("p",[e._v("Request Interface"),t("a",{attrs:{href:"/pages/a2c224/",target:"_blank"}},[e._v(" Accept a Payment ")])]),e._v(" "),t("h4",{attrs:{id:"process-response"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#process-response"}},[e._v("#")]),e._v(" Process Response")]),e._v(" "),t("p",[e._v('After requesting the transaction interface, PingPongCheckout responds with the result based on the request parameters. Merchants should process the transaction based on the response.\n"The processing result may be in an intermediate state, so it is necessary to access asynchronous notification to process the transaction status. Please go to '),t("a",{attrs:{href:"/pages/d0ddb3/",target:"_blank"}},[e._v(" Asynchronous notification")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"alternative-payment-method-apm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alternative-payment-method-apm"}},[e._v("#")]),e._v(" Alternative Payment Method（APM）")]),e._v(" "),t("h3",{attrs:{id:"interaction-process-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interaction-process-2"}},[e._v("#")]),e._v(" Interaction Process")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/v4/checkout/no-hosted-APM.png")}}),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIPS")]),e._v(" "),t("p",[e._v("Using a non-hosted integration solution to integrate an Alternative Payment Method without the need to store cardholder data, thus eliminating PCI compliance certification requirements.")])]),e._v(" "),t("el-card",{staticStyle:{background:"none",color:"var(--textColor)","border-color":"var(--borderColor)"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("h4",[e._v("Please provide a brief description of the main steps below")])]),e._v(" "),t("ol",[t("li",[e._v("Client Places Order")]),e._v(" "),t("li",[e._v("Merchant Server Requests "),t("a",{attrs:{href:"/pages/a2c224/",target:"_blank"}},[e._v(" Accept a Payment ")]),e._v(".")]),e._v(" "),t("li",[e._v("\nIf the request is successful, PingPongCheckout responds with one of two possible results:\n"),t("ul",[t("li",[e._v("QR code: Scan the code as prompted to complete the payment.")]),e._v(" "),t("li",[e._v("URL: Redirect to APM payment channel.")])])]),e._v(" "),t("li",[e._v("\nComplete the payment on the page specified by the APM channel.\n")]),e._v(" "),t("li",[e._v("PingPongCheckout To obtain detailed information on how to retrieve the asynchronous notification message when the server pushes the payment result, please refer to the following documentation orapispecifications. These resources may provide specific steps and data structures on how to receive and handle "),t("a",{attrs:{href:"/pages/d0ddb3/",target:"_blank"}},[e._v("asynchronous notifications")])]),e._v(" "),t("li",[e._v("After receiving the notification，return an appropriate response"),t("el-tag",{attrs:{size:"mini"}},[e._v("OK")])],1)])]),e._v(" "),t("h3",{attrs:{id:"api-list-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-list-2"}},[e._v("#")]),e._v(" API list")]),e._v(" "),t("br"),e._v(" "),t("div",[t("a",{attrs:{href:"/pages/a2c224/",target:"_blank"}},[e._v("Accept a Payment")]),e._v(" "),t("br"),e._v(" "),t("a",{attrs:{href:"/pages/d0ddb3/",target:"_blank"}},[e._v("Asynchronous notification")]),e._v(" "),t("br"),e._v(" "),t("a",{attrs:{href:"/pages/67e3c9/",target:"_blank"}},[e._v("Application for refund")])]),e._v(" "),t("h3",{attrs:{id:"server-access-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-access-2"}},[e._v("#")]),e._v(" Server access")]),e._v(" "),t("h4",{attrs:{id:"create-the-order-and-pay-for-it-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-the-order-and-pay-for-it-2"}},[e._v("#")]),e._v(" Create the order and pay for it")]),e._v(" "),t("p",[e._v("Requestapi"),t("a",{attrs:{href:"/pages/a2c224/",target:"_blank"}},[e._v("Accept a Payment")])]),e._v(" "),t("h3",{attrs:{id:"client-access-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#client-access-2"}},[e._v("#")]),e._v(" Client access")]),e._v(" "),t("p",[e._v("After successful order placement on the server, Different operations are performed based on the response parameters of the "),t("a",{attrs:{href:"/pages/a2c224/",target:"_blank"}},[e._v("Accept a Payment")]),e._v(" interface.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Parameter")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("paymentQrCode")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Display the QR code to complete the payment")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("paymentRedirectUrl")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Redirect to paymentRedirectUrl to complete payment")])])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);