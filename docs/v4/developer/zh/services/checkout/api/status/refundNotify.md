---
title: Refund Asynchronous Notification
date: 2022-10-13 15:12:25
permalink: /pages/71c886/
---

## Notification Message

### Public Parameters

<br/>
<el-tag type="danger" effect="dark">Parameter required attribute description: required (M), optional (O), conditionally required (C)</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>
<v4-Checkout-Uniformly-Alternative-AlternativePublicRequestTable></v4-Checkout-Uniformly-Alternative-AlternativePublicRequestTable>
<br/>
<br/>


### Response Parameters

<br/>
<el-tag type="danger" effect="dark">Parameter required attribute description: required (M), optional (O), conditionally required (C)</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>

| Parameter field                  | Parameter type       | Parameter description                                               |
|:----------------------|:-----------|:--------------------------------------------------------------------|
| amount                | string(14) | Refund Amount                                                       |
| refundTime            | string(32) | Refund Initiation Time,Timestamp                                    |
| refundEndingTime      | string(32) | Refund Finalized Time, Timestamp                                    |
| merchantTransactionId | string(64) | Merchant Website Transaction Number                                 |
| transactionId         | string(64) | PingPong Transaction Number                                         |
| merchantRefundId      | string(64) | Merchant Website's Refund Transaction Number                        |
| refundId              | string(64) | PingPong Refund Transaction Number                                  |
| currency              | string(3)  | Please see the details:<a href='/pages/3c0bdf/' target='_blank'>Transaction currency</a> |
| notifyType            | string(32) | <ul><li>REFUND</li></ul>                                            |
| status                | string(32) | Refund status <ul><li>SUCCESS</li><li>FAILED</li></ul>        |
| remark                | string     | Merchant Extension Fields                                           |


