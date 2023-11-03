---
title: JS-SDK
date: 2022-09-07 11:40:45
permalink: /pages/617443/
---

## Rendering the checkout page 

Obtaining the following key response parameters when <a href="/pages/44dba3/" target="_blank">placing an order</a>

| name       | des                |
|:-----------|:-------------------|
| innerJsUrl | JS-SDK loading url |
| token      | token              |

### Init JS-SDK

PingPongCheckout provided Two methods Init the SDK

+ To include JS in advance, copy the code below and import the PingPongCheckout JS-SDK using the CDN address

```javascript
<script src="https://pay-cdn.pingpongx.com/production-fra/static/sdk-v3/ppPay.min.js"></script>
```

+ After placing the order, use the value of the `innerJsUrl` field to import.


#### SDK-config Image

<div>
    <div>
        <img :src="$withBase('/sdk/sdkConfigs.jpg')"  alt="SDK-config"> 
    </div>
</div> 

::: note Notice
In the above illustration, you can make more detailed configurations for font style, spacing, and more. However, if you only want to change the theme color, please use the following parameters.：

- themeColor：The theme color of the checkout page will be applied to the loading animation, fonts, buttons, and the border color after form focus, among other elements.。
- themeLightColor：The light theme color of the cashier will be applied to some shadows, light background colors, and other elements.
default use Pingpong theme。

:::



#### JS-SDK checkout support change language

::: note Notice
 SDK`lang` parameter configuration ，default en
 see more<a href = "/pages/8dfca0/">Locale</a>
:::


       

#### Init SDK Demo

After the client clicks the order button and submits the order, the relevant parameters of the order (order object) are obtained from the server. After initializing the PingPongCheckout JS-SDK, the order object is passed into the createPayment method to start interacting with PingPongCheckout. Upon success, the PingPongCheckout cashier will be rendered

```javascript

    window.addEventListener('load', loadHandle);
    function loadHandle() {
        const conf = {
            mode: 'sandbox', //sandbox/production 
            lang: 'en', // 
            root: '#payment-wrap', //  
            manul: false, // 
            showPrice: true, // 
            bill: true, // 
            located: true, // 
            menu: true, //
            base: {
                width: '100%', // 
                height: '800px', // 
                backgroundColor: '#fff', // 
                // 
                priceBgColor: '#fff', // 
                priceFontColor: '#1fa0e8', // 
                priceFontSize: '32px', // 
                priceMB: '10px', // 

                // title: “How would you like to pay”
                showHeaderLabel: true, // 
                headerMB: '24px', // 
                headerSize: '20px', // 
                headerColor: 'rgba(0, 0, 0, 0.85)', // 
                headerfontWeight: 700, // 

                // paymethod
                payMethodsWidth: '240px', // 
                payMethodsHeight: '48px', // 
                payMethodsColor: 'rgba(0, 0, 0, 0.85)', // 
                payMethodsActiveColor: '#1fa0e8', // 
                payMethodsFontsize: '14px', // 
                payMethodsActiveBorderColor: '#1fa0e8', // 
                payMethodsActiveBorderShadow: '0 2px 8px 0 rgb(31 160 232 / 20%)', // 
                showIcons: true, // 
                showHeaderAmount: true, // 
                // form
                formItemMargin: '16px', // 
                formItemBorderColor: 'rgba(0, 0, 0, 0.08)', // 
                formItemFocusColor: '#1fa0e8', // 

                // 
                btnSize: '100%', 
                btnColor: '#fff', 
                btnFontSize: '14px', 
                btnMarginTop: '10px', 
                btnMarginBottom: "24px", 
                btnBackgroundColor: '#1fa0e8', 
                btnBorderRadius: '8px', 
                btnBorderColor: '#1fa0e8', 
            }
        }
        
        
        let client = new ppPay(conf);
        
        //  The token obtained from the interface
        let token ="EU:Dt10Deb05qeI0HFWg0DU1NPcLE-dxCDiU40wyKBxHw1w1RDULBtXXtI2dsgSX8L7";
        //Using this method will create a cashier counter
        client.createPayment(token);
        
        // manul model Using this method will not display a payment button. The timing of the payment will depend on the cardholder's invocation
        // client.actionPayment(callback)
    }
```

<br />
<br />

<div>
   <Common-Warring>
      <p>1. The parameter "mode" must be correctly filled in. For development testing, use "sandbox". After going live, use "build". Please check the "mode" parameter before going live</p>
      <p>2. The checkout page does not support disabling cookies</p>
   </Common-Warring>
</div>
<br />



###  Complete the payment

Once set up correctly as described above, the cashier should render properly. By entering the correct card number, expiration date, and CVV information, you will be able to complete the transaction successfully。

checkout page in sandbox

<div style="display: flex;justify-content: space-between">
    <div>
        <img :src="$withBase('/sdk/example-PingPong.png')">
    </div>
    <div>
        <img :src="$withBase('/sdk/example-green.png')">
    </div>
</div> 


## repay

If the payment is not successful on the cashier, you can manually open the URL again to initiate another payment. A cashier URL remains valid for a duration of 48 hours.



