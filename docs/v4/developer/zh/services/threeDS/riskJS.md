---
title: riskJS
date: 2023-05-06 11:52:59
permalink: /pages/12fbcd/
---



# 3D Secure RiskJS Component Integration Guide



## Introducing the RiskJS Component

```js
 <script src="https://pay-cdn.pingpongx.com/production-fra/static/risk-control/dist/acquirerRiskControl.min.js"></script>
```

## Initialization

###  Constructor
```js
window.PingPongRiskControl(options, callback)
```

| Attribute              | Type       | Required | Description                                                                                                                                         |
|:-----------------------|:-----------|:---------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| options.env            | String(12) | M        | The current calling service environment：<br />SANDBOX<br />PRODUCTION                                                                               |
| options.accId          | String(32) | M        | PingPong merchant store ID                                                                                                                          |
| options.clientId       | String(32) | M        | PingPong merchant ID                                                                                                                                |
| options.merchantUserId | String(64) | M        | Member ID, the user's member ID on the merchant website. Applicable to quick payment scenarios. This field can be left blank if the user is a guest |
| options.requestId      | String(64) | M        | Unique request number, globally unique                                                                                                              |
| callback(this)         | Function   | O        | Callback Function                                                                                                                                   |


### Example

```javascript
//Initialization
let options = {
    env: env, 
    accId: accId,
    clientId: clientId,
    merchantUserId: merchantUserId,
    requestId: requestId
}

const client = new window.PingPongRiskControl(options, callback)

```


### Call installLight_S2S
```js
client.installLight_S2S()
```
At this point, the initialization of the RiskJS component has been completed.

## Collect the card information and perform the "3D init" step

- To collect the complete and accurate card information, you can trigger this method after the "Card Number" and "Card Expiry Date" inputs lose focus. Once called, the plugin will automatically perform the 3D Secure initialization process.
- Once the initialization is complete, the plugin will inject the jsGeneratedData into the callback function.
- To obtain the jsGeneratedData for submitting an order, it is necessary to wait for a certain period of time. If the jsGeneratedData is not obtained within the specified timeout, you can proceed with submitting the order. However, if the current transaction requires 3DS verification as per the decision, the 3DS challenge process cannot be initiated.

### Constructor

```js
client.complexInit(options, callback)
```

### 3D init parameters

<br/>

<div><el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag></div>

<br/>

| Attribute              | Type       | Required | Description                                                                                                                                         |
|:-----------------------|:-----------|:---------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| options.accId          | String(64) | M        | PingPong merchant store ID                                                                                                                          |
| options.merchantUserId | String(64) | M        | Member ID, the user's member ID on the merchant website. Applicable to quick payment scenarios. This field can be left blank if the user is a guest |
| options.requestId      | String(64) | M        | Unique request number, globally unique                                                                                                              |
| callback(this)         | Function   | O        | Callback Function                                                                                                                                   |

>Either cardInfo or cardToken must be provided

#### cardInfo

| Attribute               | Type       | Required | Description                                                              |
|:------------------------|:-----------|:---------|:-------------------------------------------------------------------------|
| options.cardNumber      | String(12) | C        | International Credit Card Number                                         |
| options.cardExpireMonth | String(32) | C        | the expiration month of a credit card, represented by a two-digit number |
| options.cardExpireYear  | String(64) | C        | the expiration year of a credit card, represented by a four-digit number |


#### cardToken

| Attribute         | Type       | Required | Description                       |
|:------------------|:-----------|:---------|:----------------------------------|
| options.cardToken | String(32) | C        | can be used to replace "cardInfo" |

### Usage

```javascript
let initOptions = {
    cardNumber: cardNumber, 
    cardToken: cardToken,
    cardExpireMonth: cardExpireMonth,
    cardExpireYear: cardExpireYear, // 2022 || 22
    cardBrand: cardBrand,
    accId: accId,
    merchantUserId: merchantUserId,
    requestId: requestId
}

client.complexInit(initOptions, callback)

function callback(jsGeneratedData){
    
}

```

### Properties of jsGeneratedData

<br/>

<div><el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag></div>

<br/>

| Attribute               | Notes |
|:------------------------|:------|
| threeDInitTransId       ||
| threeDSecureReferenceId ||
| channel                 ||
| correlationId           ||
| fingerPrint             ||
| forterSiteId            ||
| forterTokenCookie       ||
| threeDSServerTransID    ||
| version                 ||


## [Accept a Payment]apimessage assembly

To make the request to the <a href="/pages/a2c224/" target="_blank" >Accept a Payment</a>API,please provide the following parameters：

+  jsGeneratedData （Necessary conditions for executing the 3DS process）
+  browserInfo （Optional, recommended to submit to improve transaction success rate）



## 3DS validation processing


### How to handle it?
+ After calling theapi-<a href="/pages/a2c224/" target="_blank">Accept a Payment</a>, the merchant determines whether 3DS verification processing is required based on the response transaction status and the `threeDContinue` processing identifier.
+ If the payment status `status` is `PROCESSING` and `threeDContinue` is `true`, the merchant front-end needs to execute the `complexTrigger` function provided by risk control JS.
+ Using the `threeDUnionParams` returned by theapias an input parameter to call the `complexTrigger` function, the risk control JS will guide the browser to the 3D challenge page. The cardholder needs to complete the 3D verification correctly in order to successfully complete the transaction.




### complexTrigger

```js
client.complexTrigger(threeDUnionParams, callback)
```


| Attribute         | Required | Description                                                                                                                                                                                                                  |
|:------------------|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| threeDUnionParams | M        | The `threeDUnionParams` returned after calling PingPongCheckout <a  href="/pages/a2c224/" target="_blank">Accept a Payment</a>                                                                                               |
| callback          | O        | Merchants can process normal payment processes here. If the transaction enters the 3D process, the callback will not be executed. Otherwise, the callback function will be executed to process the normal payment logic      |

``




 