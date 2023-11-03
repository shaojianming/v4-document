---
title: Refund Detail
date: 2021-11-19 12:29:35
permalink: /pages/2de399/
---




<br />
<div>
   <Common-Warring>
      <p>Please call the queryapiafter the refund is synchronously returned, otherwise query exceptions may occur</p>
   </Common-Warring>
</div>
<br />


## Request Url
<br/>
<div>
<code-group>
  <code-block title="Sandbox Environment" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/v4/refund/query
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/v4/refund/query
  ```
  </code-block>
</code-group>
</div>


## Request Parameters

### Common Request Parameters

<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C)</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>

| Parameter field | Parameter type | Parameter attribute | Parameter description                                                                                                                                                            |
|:----------------|:---------------|:--------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| accId           | string(64)     | M                   | PingPong merchant store ID                                                                                                                                                       |
| clientId        | string(64)     | M                   | PingPong merchant ID                                                                                                                                                             |                                                                  |
| signType        | string(32)     | M                   | Signature Specification: MD5 and SHA256 are supported. For details,see the <a href='/pages/77ae52/' target='_blank'>Signing Protocol </a> section of the document                |
| sign            | string(128)    | M                   | For signature, see the Signature Specification section hereof for details <a href='/pages/77ae52/' target='_blank'>Signing Protocol </a> All Parameters Participate in Signature |
| version         | string(10)     | M                   | Currently fixed at 1.0, may be adjusted with changes to theapiin the future                                                                                              |
| bizContent      | string         | M                   | Collection of request parameters, with no maximum length. All request parameters except for common parameters must be passed in this parameter                                   |


### Business  Parameters

| Parameter field       | Parameter type | Parameter attribute | Parameter description                                                                                                         |
|:----------------------|:---------------|:--------------------|:------------------------------------------------------------------------------------------------------------------------------|
| refundId              | string(64)     | C                   | PingPong refund serial number, at least one of PingPong refund serial number and merchantRefundId should be submitted         |
| merchantRefundId      | string(64)     | C                   | Merchant website refund serial number, at least one of merchant website refund serial number and refundId should be submitted |
| merchantTransactionId | string(64)     | M                   | Merchant Website Transaction Number                                                                                           |

<br/>
<br/>
<br/>

## Response Parameters

###  Common Response Parameters

<br/>
<el-tag type="danger" effect="dark">Parameter required attribute description: required (M), optional (O), conditionally required (C)</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>

| Parameter field | Parameter type | Parameter description                                                                                                                                                            |
|:----------------|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| accId           | string(64)     | PingPong merchant store ID                                                                                                                                                       |
| clientId        | string(64)     | PingPong merchant ID                                                                                                                                                             |
| code            | string(6)      | result status code,reference<a href="/pages/183abf/" target="_blank">status code</a>                                                                                             |
| description     | string         | result description                                                                                                                                                               |
| signType        | string(32)     | Signature Specification: MD5 and SHA256 are supported. For details, see the Signature Specification section hereof for details                                                   |
| sign            | string(128)    | For signature, see the Signature Specification section hereof for details <a href='/pages/77ae52/' target='_blank'>Signing Protocol </a> All Parameters Participate in Signature |
| bizContent      | string         | Business Response Parameters                                                                                                                                                     |


### Response Parameters

| Parameter field       | Parameter type | Parameter description               |
|:----------------------|:---------------|:------------------------------------|
| transactionId         | string(64)     | PingPong Transaction Number         |
| merchantTransactionId | string(64)     | Merchant Website Transaction Number |                        |
| currency              | string(3)      | Transaction currency                |
| amount                | string(14)     | transaction amount                  |
| refundTime            | string(32)     | Refund initiation time, timestamp   |
| resultCode            | String(6)      | status code                         |
| resultDescription     | String(500)    | status description                  |
| refundEndingTime      | string(32)     | Refund finalization time, timestamp |
| status                | string(32)     | SUCCESS FAILED PROCESSING           |
| remark                | string         | Merchant Extension Fields           |

### Response Example

<div>
<code-group>
<code-block title="SUCCESS" active>

```json
{
  "accId": "2023060217493010231446",
  "bizContent": "{\"amount\":\"200.000000\",\"cardInfo\":{\"firstName\":\"zhang\",\"lastName\":\"san\",\"lastFourDigits\":\"8Q==\",\"ipCountry\":\"CN\",\"firstSixDigits\":\"AQICAH\"},\"threeDSecure\":\"\",\"resultCode\":\"000000\",\"transactionTime\":\"1687334372000\",\"transactionId\":\"2023062150000329\",\"merchantTransactionId\":\"PMT-1OL5AJOJA91687334040656\",\"currency\":\"USD\",\"resultDescription\":\"Transaction succeeded\",\"captureDelayHours\":0,\"status\":\"SUCCESS\"}",
  "clientId": "2023060217493010231",
  "code": "001000",
  "description": "Successful request",
  "sign": "D7F4C867DDB7F3BDC56F598B5467F2D4792E6FCE459EA119BA3FF2FCEF97DB79",
  "signType": "SHA256"
}
```

</code-block>
</code-group>
</div> 




