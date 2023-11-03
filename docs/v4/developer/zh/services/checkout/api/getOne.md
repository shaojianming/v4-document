---
title: Transaction Detail
date: 2021-11-19 12:29:35
permalink: /pages/0fd268/
---



# transaction inquiry

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
  https://sandbox-acquirer-payment.pingpongx.com/v4/payment/query
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/v4/payment/query
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
<v4-Checkout-Uniformly-Alternative-AlternativePublicRequestTable></v4-Checkout-Uniformly-Alternative-AlternativePublicRequestTable>
<br/>

### Request Parameters
| Parameter field       | Parameter type | Parameter attribute | Parameter description                                                                                                                        |
|:----------------------|:---------------|:--------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| transactionId         | string(64)     | C                   | PingPong transaction serial number, at least one of PingPong transaction serial number and merchantTransactionId should be submitted         |
| merchantTransactionId | string(64)     | C                   | Merchant website transaction serial number, at least one of merchant website transaction serial number and transactionId should be submitted |
| requestId             | string(64)     | O                   | Unique request number, globally unique                                                                                                       |

<br/>
<br/>
<br/>

## Response Parameters

### Common Response Parameters

<br/>
<el-tag type="danger" effect="dark">Parameter required attribute description: required (M), optional (O), conditionally required (C)</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<v4-Checkout-Uniformly-Alternative-AlternativePublicResponseTable></v4-Checkout-Uniformly-Alternative-AlternativePublicResponseTable>

###  Response Parameters
<br/>
<br/>
<v4-Checkout-PaymentQueryResponseTable></v4-Checkout-PaymentQueryResponseTable>

### Response example
<br/>
<br/>
<div>
<code-group>
<code-block title="SUCCESS" active>

```json
{
  "accId": "2023060217493010231446",
  "bizContent": "{\"issuerInfo\":{\"issuerResultMsg\":\"Successful approval/completion or V .I.P .PIN\\n verification is successful\",\"issuerResultCode\":\"00\"},\"threeDSecure\":\"\",\"resultCode\":\"000000\",\"transactionTime\":\"1693290395000\",\"requestId\":\"PMT-QNS10ZZ7O91693290394921\",\"merchantTransactionId\":\"PMT-QNS10ZZ7O91693290394921\",\"currency\":\"USD\",\"resultDescription\":\"Transaction succeeded\",\"amount\":\"200.000000\",\"authenticationInfo\":{\"avsResult\":\"Unknown\",\"cvvResult\":\"Y\",\"threeDSecure\":\"N\"},\"cardInfo\":{\"firstName\":\"James\",\"isoCountryA2\":\"RU\",\"lastName\":\"LeBron\",\"lastFourDigits\":\"1112\",\"cardLevel\":\"CLASSIC\",\"paymentBrand\":\"VISA\",\"cardType\":\"CREDIT\",\"issuringBank\":\"\",\"ipCountry\":\"HK\",\"firstSixDigits\":\"401200\",\"isoCountry\":\"RUSSIAN FEDERATION\"},\"transactionId\":\"2023082950003030\",\"token\":\"h3cov3regCvMuuQWbY\",\"captureDelayHours\":0,\"status\":\"SUCCESS\"}",
  "clientId": "2023060217493010231",
  "code": "001000",
  "description": "Successful request",
  "sign": "940E744960C32C1040F831FEFD87258EEAD257784861E8EC8860489162AAD3E3",
  "signType": "SHA256"
}
```

</code-block>
<code-block title="FAILED">

```json
{
  "accId": "2023060217493010231446",
  "bizContent": "{\"amount\":\"200.000000\",\"resultCode\":\"301099\",\"transactionTime\":\"1687338377000\",\"transactionId\":\"2023062150000336\",\"merchantTransactionId\":\"PMT-T9ZIR7M7RF1687338044730\",\"currency\":\"USD\",\"resultDescription\":\"Transaction declined (other reason)\",\"status\":\"FAILED\"}",
  "clientId": "2023060217493010231",
  "code": "001000",
  "description": "Successful request",
  "sign": "C5F1DBFFA542A56A56374B65EB6A66E247A4B8C818A053BDC3345F775EF8E59E",
  "signType": "SHA256"
}
```

</code-block>
</code-group>
</div> 




