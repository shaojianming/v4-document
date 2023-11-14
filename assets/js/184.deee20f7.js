(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{747:function(t,s,a){"use strict";a.r(s);var e=a(12),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"rendering-the-checkout-page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rendering-the-checkout-page"}},[t._v("#")]),t._v(" Rendering the checkout page")]),t._v(" "),s("p",[t._v("Obtaining the following key response parameters when "),s("a",{attrs:{href:"/v4-document/pages /44dba3/",target:"_blank"}},[t._v("placing an order")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("des")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("innerJsUrl")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("JS-SDK loading url")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("token")])])])]),t._v(" "),s("h3",{attrs:{id:"init-js-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init-js-sdk"}},[t._v("#")]),t._v(" Init JS-SDK")]),t._v(" "),s("p",[t._v("PingPongCheckout provided Two methods Init the SDK")]),t._v(" "),s("ul",[s("li",[t._v("To include JS in advance, copy the code below and import the PingPongCheckout JS-SDK using the CDN address")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://pay-cdn.pingpongx.com/production-fra/static/sdk-v3/ppPay.min.js"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("After placing the order, use the value of the "),s("code",[t._v("innerJsUrl")]),t._v(" field to import.")])]),t._v(" "),s("h4",{attrs:{id:"sdk-config-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sdk-config-image"}},[t._v("#")]),t._v(" SDK-config Image")]),t._v(" "),s("div",[s("div",[s("img",{attrs:{src:t.$withBase("/sdk/sdkConfigs.jpg"),alt:"SDK-config"}})])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Notice")]),t._v(" "),s("p",[t._v("In the above illustration, you can make more detailed configurations for font style, spacing, and more. However, if you only want to change the theme color, please use the following parameters.：")]),t._v(" "),s("ul",[s("li",[t._v("themeColor：The theme color of the checkout page will be applied to the loading animation, fonts, buttons, and the border color after form focus, among other elements.。")]),t._v(" "),s("li",[t._v("themeLightColor：The light theme color of the cashier will be applied to some shadows, light background colors, and other elements.\ndefault use Pingpong theme。")])])]),t._v(" "),s("h4",{attrs:{id:"js-sdk-checkout-support-change-language"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-sdk-checkout-support-change-language"}},[t._v("#")]),t._v(" JS-SDK checkout support change language")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Notice")]),t._v(" "),s("p",[t._v("SDK"),s("code",[t._v("lang")]),t._v(" parameter configuration ，default en\nsee more"),s("a",{attrs:{href:"/v4-document/pages /8dfca0/"}},[t._v("Locale")])])]),t._v(" "),s("h4",{attrs:{id:"init-sdk-demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init-sdk-demo"}},[t._v("#")]),t._v(" Init SDK Demo")]),t._v(" "),s("p",[t._v("After the client clicks the order button and submits the order, the relevant parameters of the order (order object) are obtained from the server. After initializing the PingPongCheckout JS-SDK, the order object is passed into the createPayment method to start interacting with PingPongCheckout. Upon success, the PingPongCheckout cashier will be rendered")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'load'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loadHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadHandle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" conf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mode")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sandbox'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//sandbox/production ")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lang")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("root")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#payment-wrap'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  ")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("manul")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("showPrice")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("bill")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("located")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("menu")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("base")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'800px'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("backgroundColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#fff'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("priceBgColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#fff'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("priceFontColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#1fa0e8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("priceFontSize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'32px'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("priceMB")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// title: “How would you like to pay”")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("showHeaderLabel")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("headerMB")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'24px'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("headerSize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20px'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("headerColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgba(0, 0, 0, 0.85)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("headerfontWeight")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("700")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// paymethod")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("payMethodsWidth")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'240px'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("payMethodsHeight")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'48px'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("payMethodsColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgba(0, 0, 0, 0.85)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("payMethodsActiveColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#1fa0e8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("payMethodsFontsize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'14px'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("payMethodsActiveBorderColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#1fa0e8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("payMethodsActiveBorderShadow")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0 2px 8px 0 rgb(31 160 232 / 20%)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("showIcons")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("showHeaderAmount")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// form")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("formItemMargin")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'16px'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("formItemBorderColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgba(0, 0, 0, 0.08)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("formItemFocusColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#1fa0e8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("btnSize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("btnColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#fff'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("btnFontSize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'14px'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("btnMarginTop")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("btnMarginBottom")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"24px"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("btnBackgroundColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#1fa0e8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("btnBorderRadius")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8px'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("btnBorderColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#1fa0e8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" client "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ppPay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  The token obtained from the interface")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EU:Dt10Deb05qeI0HFWg0DU1NPcLE-dxCDiU40wyKBxHw1w1RDULBtXXtI2dsgSX8L7"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Using this method will create a cashier counter")]),t._v("\n        client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPayment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// manul model Using this method will not display a payment button. The timing of the payment will depend on the cardholder's invocation")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// client.actionPayment(callback)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br"),s("span",{staticClass:"line-number"},[t._v("52")]),s("br"),s("span",{staticClass:"line-number"},[t._v("53")]),s("br"),s("span",{staticClass:"line-number"},[t._v("54")]),s("br"),s("span",{staticClass:"line-number"},[t._v("55")]),s("br"),s("span",{staticClass:"line-number"},[t._v("56")]),s("br"),s("span",{staticClass:"line-number"},[t._v("57")]),s("br"),s("span",{staticClass:"line-number"},[t._v("58")]),s("br"),s("span",{staticClass:"line-number"},[t._v("59")]),s("br"),s("span",{staticClass:"line-number"},[t._v("60")]),s("br"),s("span",{staticClass:"line-number"},[t._v("61")]),s("br"),s("span",{staticClass:"line-number"},[t._v("62")]),s("br"),s("span",{staticClass:"line-number"},[t._v("63")]),s("br"),s("span",{staticClass:"line-number"},[t._v("64")]),s("br"),s("span",{staticClass:"line-number"},[t._v("65")]),s("br"),s("span",{staticClass:"line-number"},[t._v("66")]),s("br"),s("span",{staticClass:"line-number"},[t._v("67")]),s("br")])]),s("br"),t._v(" "),s("br"),t._v(" "),s("div",[s("Common-Warring",[s("p",[t._v('1. The parameter "mode" must be correctly filled in. For development testing, use "sandbox". After going live, use "build". Please check the "mode" parameter before going live')]),t._v(" "),s("p",[t._v("2. The checkout page does not support disabling cookies")])])],1),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"complete-the-payment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#complete-the-payment"}},[t._v("#")]),t._v(" Complete the payment")]),t._v(" "),s("p",[t._v("Once set up correctly as described above, the cashier should render properly. By entering the correct card number, expiration date, and CVV information, you will be able to complete the transaction successfully。")]),t._v(" "),s("p",[t._v("checkout page in sandbox")]),t._v(" "),s("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[s("div",[s("img",{attrs:{src:t.$withBase("/sdk/example-PingPong.png")}})]),t._v(" "),s("div",[s("img",{attrs:{src:t.$withBase("/sdk/example-green.png")}})])]),t._v(" "),s("h2",{attrs:{id:"repay"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#repay"}},[t._v("#")]),t._v(" repay")]),t._v(" "),s("p",[t._v("If the payment is not successful on the cashier, you can manually open the URL again to initiate another payment. A cashier URL remains valid for a duration of 48 hours.")])])}),[],!1,null,null,null);s.default=r.exports}}]);