---
title: Capture Detail
date: 2021-11-19 12:29:35
permalink: /pages/cfbc48/
---



# pre-authorization confirmation inquiry

<br />
<div>
   <Common-Warring>
      <p>Please call the queryapiafter the transaction is synchronously returned, otherwise query exceptions may occur</p>
   </Common-Warring>
</div>
<br />


## Request Url
<br/>
<div>
<code-group>
  <code-block title="Sandbox Environment" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/v4/capture/query
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/v4/capture/query
  ```
  </code-block>
</code-group>
</div>


## Request Parameters

### Common Request Parameters

<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>
<v4-Checkout-Uniformly-Alternative-AlternativePublicRequestTable></v4-Checkout-Uniformly-Alternative-AlternativePublicRequestTable>
<br/>
<br/>

### Request Parameters
| Parameter field       | Parameter type | Parameter attribute | Parameter description                                                          |
|:----------------------|:---------------|:--------------------|:-------------------------------------------------------------------------------|
| merchantCaptureId     | string(64)     | M                   | Merchant website pre-authorization confirmation serial number, globally unique |
| merchantTransactionId | string(64)     | M                   | Merchant Website Transaction Number                                            |

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
<v4-Checkout-Uniformly-Alternative-AlternativePublicResponseTable></v4-Checkout-Uniformly-Alternative-AlternativePublicResponseTable>
<br/>
<br/>

### Response Parameters


| Parameter field       | Parameter type | Parameter description                                       |
|:----------------------|:---------------|:------------------------------------------------------------|
| transactionId         | string(64)     | PingPong Transaction Number                                 |
| merchantTransactionId | string(64)     | Merchant Website Transaction Number                         |                        |
| currency              | string(3)      | Transaction currency                                        |
| resultCode            | String(6)      | status code                                                 |
| resultDescription     | String(500)    | result description                                          || amount                | string(14)     | capture amount                                              |
| captureTime           | string(32)     | Capture initiation time, timestamp                          |
| captureEndingTime     | string(32)     | Capture finalization time, timestamp                        |
| status                | string(32)     | <ol><li>SUCCESS</li><li>FAILED</li><li>PROCESSING</li></ol> |


### Response Example

<div>
<code-group>
<code-block title="SUCCESS" active>

```json
{
  "accId": "2023060217493010231446",
  "bizContent": "{\"amount\":\"200.000000\",\"captureTime\":\"1687335326000\",\"resultCode\":\"000000\",\"transactionId\":\"2023062150000332\",\"merchantTransactionId\":\"PMT-RRI7V42FR31687334823784\",\"currency\":\"USD\",\"resultDescription\":\"Transaction succeeded\",\"status\":\"SUCCESS\"}",
  "clientId": "2023060217493010231",
  "code": "001000",
  "description": "Successful request",
  "sign": "C550628F93D95A84AE89D18264CD9184520896908CEEEE77829F72196036A0AC",
  "signType": "SHA256"
}
```

</code-block>
</code-group>
</div> 




