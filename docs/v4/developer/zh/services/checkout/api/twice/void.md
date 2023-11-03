---
title: VOID
date: 2022-06-10 12:30:37
permalink: /pages/671c9c/
---



## Request Url

<br/>
<div>
<code-group>
  <code-block title="Sandbox Environment" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/v4/payment/void
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/dispute/v4/payment/void
  ```
  </code-block>
</code-group>
</div>


## Request Parameters

### Common Request Parameters

<br/>
<el-tag type="danger" effect="dark">Parameter required attribute description: required (M), optional (O), conditionally required (C)</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>
<v4-Checkout-Uniformly-Alternative-AlternativePublicRequestTable></v4-Checkout-Uniformly-Alternative-AlternativePublicRequestTable>
<br/>
<br/>

### Request Parameters
| Parameter field       | Parameter type | Parameter attribute | Parameter description                                                                                                                                                                                                                           |
|:----------------------|:---------------|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| merchantTransactionId | String(64)     | M                   | Merchant Website Transaction Number                                                                                                                                                                                                             |
| notificationUrl       | String(255)    | M                   | You can set up a URL in your system that is capable of receiving HTTP POST requests. When updating the order status, the PingPongCheckout system will send an HTTP request to the notifyUrl and pass the relevant information as the POST Body. |
| merchantVoidId        | string(64)     | M                   | Merchant website pre-authorization cancellation serial number, globally unique                                                                                                                                                                  |
| amount                | String(14)     | M                   | capture amount                                                                                                                                                                                                                                  |
| currency              | String(3)      | M                   | Transaction currency                                                                                                                                                                                                                            |



## Response Parameters

###  Common Response Parameters

<br/>
<el-tag type="danger" effect="dark">Parameter required attribute description: required (M), optional (O), conditionally required (C)</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>
<v4-Checkout-Uniformly-Alternative-AlternativePublicResponseTable></v4-Checkout-Uniformly-Alternative-AlternativePublicResponseTable>
<br/>
<br/>

### Response Parameters

| Parameter field       | Parameter type | Parameter attribute | Parameter description                                                          |
|:----------------------|:---------------|:--------------------|:-------------------------------------------------------------------------------|
| transactionId         | string(64)     | M                   | PingPong Transaction Number                                                    |
| merchantTransactionId | string(64)     | M                   | Merchant Website Transaction Number                                            |
| merchantVoidId        | string(64)     | M                   | Merchant website pre-authorization cancellation serial number, globally unique |
| description           | string         | M                   | result description                                                             |
| currency              | string(3)      | M                   | Transaction currency                                                           |
| amount                | string(14)     | M                   | transaction amount                                                             |
| voidTime              | string(32)     | M                   | Void initiation time, timestamp                                                |
| voidEndingTime        | string(32)     | O                   | Void finalization time, timestamp                                              |
| status                | string(32)     | M                   | <ol><li>SUCCESS</li><li>FAILED</li><li>PROCESSING</li></ol>                    |







