---
title: Pre-authorization cancellation asynchronous notification
date: 2022-10-13 15:12:25
permalink: /pages/f687d3/
---

## Notification Message

### Public Parameters

<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>
<v4-Checkout-Uniformly-Alternative-AlternativePublicRequestTable></v4-Checkout-Uniformly-Alternative-AlternativePublicRequestTable>
<br/>
<br/>


### Response Parameters

<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>

| Parameter field                  | Parameter type       | Parameter description                                               |
|:----------------------|:-----------|:--------------------------------------------------------------------|
| amount                | string(14) | Pre-authorization confirmation amount                               |
| voidTime              | string(32) | Void initiation time, timestamp                                     |
| voidEndingTime        | string(32) | Void arrival time in the final state, timestamp                     |
| merchantTransactionId | string(64) | Merchant Website Transaction Number                                 |
| transactionId         | string(64) | PingPong Transaction Number                                         |
| merchantVoidId        | string(64) | Merchant website pre-authorization cancellation transaction number  |
| currency              | string(3)  | Please see the details:<a href='/pages/3c0bdf/' target='_blank'>Transaction currency</a> |
| notifyType            | string(32) | <ul><li>VOID</li></ul>                                        |
| status                | string(32) | Refund status <ul><li>SUCCESS</li><li>FAILED</li></ul>                 |


