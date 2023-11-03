---
title: Refund
date: 2022-06-10 11:59:57
permalink: /pages/67e3c9/
---

## Request Url

<br/>
<div>
<code-group>
  <code-block title="Sandbox Environment" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/v4/payment/refund
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/v4/payment/refund
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

| Parameter field       | Parameter type | Parameter attribute | Parameter description                                                                                                                                                       |
|:----------------------|:---------------|:--------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| merchantTransactionId | string(64)     | M                   | Merchant Website Transaction Number                                                                                                                                         |
| merchantRefundId      | string(64)     | M                   | Merchant website refund transaction serial number                                                                                                                           |
| amount                | string(14)     | M                   | Refund transaction amount, minimum unit query attachment<a href='/pages/3c0bdf/' target='_blank'>Transaction currency</a>Table                                              |
| currency              | string(3)      | M                   | Transaction currency，ISO 4217 Three currency types, specific supported currencies see attachment <a href='/pages/3c0bdf/' target='_blank'>Transaction currency</a>Table     |
| notificationUrl       | string(255)    | O                   | Merchant-defined URL to receive asynchronous transaction results. Once this parameter is filled out, PingPongCheckout will post the transaction result to the specified URL |
| remark                | string(32)     | C                   | Merchant Extension Fields                                                                                                                                                   |



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

| Parameter field       | Parameter type | Parameter attribute | Parameter description                                       |
|:----------------------|:---------------|:--------------------|:------------------------------------------------------------|
| transactionId         | string(64)     | M                   | PingPong Transaction Number                                 |
| merchantTransactionId | string(64)     | M                   | Merchant Website Transaction Number                         |
| merchantRefundId      | string(64)     | M                   | Merchant website refund transaction serial number           |
| refundId              | string(64)     | M                   | PingPong refund transaction serial number                   |
| currency              | string(3)      | M                   | Transaction currency                                        |
| amount                | string(14)     | M                   | transaction amount                                          |
| resultCode            | string(6)      | M                   | Status Result Code                                          |
| resultDescription     | string(500)    | M                   | Status Result Description                                   |
| refundTime            | string(32)     | M                   | Refund initiation time, timestamp                           |
| refundEndingTime      | string(32)     | O                   | Refund finalization time, timestamp                         |
| status                | string(32)     | M                   | <ol><li>SUCCESS</li><li>FAILED</li><li>PROCESSING</li></ol> |
| remark                | string(32)     | C                   | Merchant Extension Fields                                   |







