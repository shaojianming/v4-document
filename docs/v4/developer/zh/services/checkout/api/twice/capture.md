---
title: CAPTURE
date: 2022-06-10 12:29:42
permalink: /pages/b110ca/
---

## Request Url


<br/>
<div>
<code-group>
  <code-block title="Sandbox Environment" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/v4/payment/capture
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/dispute/v4/payment/capture
  ```
  </code-block>
</code-group>
</div>



## Request Parameters

### Common Request Parameters

<el-tag type="danger" effect="dark">Parameter required attribute description: required (M), optional (O), conditionally required (C)</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>
<v4-Checkout-Uniformly-Alternative-AlternativePublicRequestTable></v4-Checkout-Uniformly-Alternative-AlternativePublicRequestTable>
<br/>
<br/>


### Request Parameters

| Parameter field       | Parameter type | Parameter attribute | Parameter description                                                                                                                                                                                            |
|:----------------------|:---------------|:--------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| merchantTransactionId | string(64)     | M                   | Merchant Website Transaction Number                                                                                                                                                                              |
| merchantCaptureId     | string(64)     | M                   | Merchant website pre-authorization confirmation serial number, globally unique                                                                                                                                   |
| amount                | string(14)     | M                   | transaction amount                                                                                                                                                                                               |
| currency              | string(3)      | M                   | "transaction currency." ISO 4217 provides a three-letter code for currencies. For the specific supported currencies, please refer to the attached <a href = "/pages/3c0bdf/">table of transaction currencies</a> |
| notificationUrl       | string(255)    | O                   | Merchant-defined URL to receive asynchronous transaction results. Once this parameter is filled out, PingPongCheckout will post the transaction result to the specified URL                                      |


### Response Parameters


### Common Response Parameters

<br/>
<el-tag type="danger" effect="dark">Parameter required attribute description: required (M), optional (O), conditionally required (C)</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>
<v4-Checkout-Uniformly-Alternative-AlternativePublicResponseTable></v4-Checkout-Uniformly-Alternative-AlternativePublicResponseTable>
<br/>

### Response Parameters

| Parameter field       | Parameter type | Parameter attribute | Parameter description                                                          |
|:----------------------|:---------------|:--------------------|:-------------------------------------------------------------------------------|
| transactionId         | string(64)     | M                   | PingPong Transaction Number                                                    |
| merchantTransactionId | string(64)     | M                   | Merchant Website Transaction Number                                            |
| merchantCaptureId     | string(64)     | M                   | Merchant website pre-authorization confirmation serial number, globally unique |
| currency              | string(3)      | M                   | Transaction currency                                                           |
| amount                | string(14)     | M                   | transaction amount                                                             |
| captureTime           | string(32)     | M                   | Capture initiation time, timestamp                                             |
| captureEndingTime     | string(32)     | O                   | Capture finalization time, timestamp                                           |
| status                | string(32)     | M                   | <ol><li>SUCCESS</li><li>FAILED</li><li>PROCESSING</li></ol>                    |






