---
title: Pre-authorization confirmation asynchronous notification
date: 2022-10-13 15:12:25
permalink: /pages/ad0c0f/
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

| Parameter field                  | Parameter type | Parameter description                                                |
|:----------------------|:---------------|:----------------------------------------------------|
| amount                | String(14)     | Pre-authorization confirmation amount                                             |
| captureTime           | String(32)     | Capture initiation time, timestamp                                    |
| captureEndingTime     | String(32)     | Capture arrival time in the final state, timestamp                                    |
| merchantTransactionId | String(64)     | Merchant Website Transaction Number                                               |
| transactionId         | String(64)     | PingPong Transaction Number                                     |
| merchantCaptureId     | String(64)     | Merchant website pre-authorization confirmation transaction number, globally unique                                       |
| currency              | String(3)      | Please see the details:<a href='/pages/3c0bdf/' target='_blank'>Transaction currency</a> |
| notifyType            | String(32)     | <ul><li>CAPTURE</li></ul>                     |
| status                | String(32)     |  <ul><li>SUCCESS</li><li>FAILED</li></ul>   |


