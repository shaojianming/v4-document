---
title: Void Detail
date: 2021-11-19 12:29:35
permalink: /pages/f82ce9/
---



# pre-authorization cancellation inquiry

<br />
<div>
   <Common-Warring>
      <p>Please call the queryapiafter synchronous return, otherwise query exceptions may occur</p>
   </Common-Warring>
</div>
<br />


## Request Url
<br/>
<div>
<code-group>
  <code-block title="Sandbox Environment" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/v4/void/query
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/v4/void/query
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
<v4-Checkout-Uniformly-Alternative-AlternativePublicRequestTable></v4-Checkout-Uniformly-Alternative-AlternativePublicRequestTable>
<br/>
<br/>


### Request Parameters
| Parameter field       | Parameter type | Parameter attribute | Parameter description                                         |
|:----------------------|:---------------|:--------------------|:--------------------------------------------------------------|
| merchantVoidId        | string(64)     | M                   | Merchant website pre-authorization cancellation serial number |
| merchantTransactionId | string(64)     | M                   | Merchant Website Transaction Number                           |

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
| resultDescription     | String(500)    | status description                                          |
| amount                | string(14)     | void amount                                                 |
| voidTime              | string(32)     | Void initiation time, timestamp                             |
| voidEndingTime        | string(32)     | Void finalization time, timestamp                           |
| status                | string(32)     | <ol><li>SUCCESS</li><li>FAILED</li><li>PROCESSING</li></ol> |


### Response Example

<div>
<code-group>
<code-block title="SUCCESS" active>

```json
{
  "accId": "2023060217493010231446",
  "bizContent": "{\"amount\":\"200.000000\",\"resultCode\":\"000000\",\"transactionId\":\"2023062150000345\",\"voidTime\":\"1687347620000\",\"merchantTransactionId\":\"PMT-P1IC0ZS7E11687347218645\",\"currency\":\"USD\",\"resultDescription\":\"Transaction succeeded\",\"status\":\"SUCCESS\"}",
  "clientId": "2023060217493010231",
  "code": "001000",
  "description": "Successful request",
  "sign": "1EDDB8216409E900AD29095174BEC90710CDD5D2D4B72D84DBD4DF8F2C3E169B",
  "signType": "SHA256"
}
```

</code-block>
</code-group>
</div> 




