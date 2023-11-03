---
title: Create a Payment Intent
date: 2023-05-08 10:11:11
permalink: /pages/44dba3/
---

## Request Url
<br/>
<div>
<code-group>
  <code-block title="Sandbox Environment" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/v4/payment/prePay
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/v4/payment/prePay
  ```
  </code-block>
</code-group>
</div>

>If the merchantTransactionId remains unchanged, the parameters of the order will not be modified.If you need to change the input parameters, you will need to modify the merchantTransactionId and initiate a new payment request


## Request Parameters

### Common Request Parameters

<br/>

<v4-Checkout-Uniformly-Alternative-AlternativePublicRequestTable></v4-Checkout-Uniformly-Alternative-AlternativePublicRequestTable>


### Business Parameters
<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>
<v4-Checkout-Reserve-PublicParamsTableV4></v4-Checkout-Reserve-PublicParamsTableV4>
<br/>


### Risk Control Parameters
<br/>
<br/>
<v4-Checkout-Reserve-RiskParamsTable></v4-Checkout-Reserve-RiskParamsTable>

## Response Parameters

### Common Response Parameters

<br/>
<br/>
<v4-Checkout-Uniformly-Alternative-AlternativePublicResponseTable></v4-Checkout-Uniformly-Alternative-AlternativePublicResponseTable>

### Response Parameters

<br/>
<br/>
<br/>

| Parameter field       | Parameter type | Parameter description                                                      |
|:----------------------|:---------------|----------------------------------------------------------------------------|
| transactionId         | String(64)     | PingPong Transaction Number                                                |                                                                                     |
| merchantTransactionId | String(64)     | Merchant Website Transaction Number                                        |
| amount                | String(12)     | Transaction  Transaction                                                   |
| currency              | String(3)      | Transaction  currency                                                      |
| remark                | String(255)    | Transaction  remark                                                        |
| token                 | String         | Unique identifier for this checkout request, used to initialize the JS-SDK |
| innerJsUrl            | String         | JS-SDK loading  url                                                        |
| paymentUrl            | String         | PingPong checkout url                                                      |



<br/>
<br/>


<div>

### Request Example
<br/>
<br/>


<code-group>
  <code-block title="JSON" active>

  ```json
    {
    "accId": "2018092714313010016291",
    "clientId": "2018092714313010016",
    "signType": "SHA256",
    "sign": "28178F3C0B0AF10343F715211B9C7791AB4CF091EB4580505E053318E8F37B85",
    "version": "1.0",
    "bizContent":"{\"captureDelayHours\":\"0\",\"amount\":\"1000\",\"currency\":\"USD\",\"merchantTransactionId\":\"PMT-PR5GFUNZQP1695182276082\",\"payResultUrl\":\"https://test-acquirerpay.pingpongx.com/qa/result.html\",\"payCancelUrl\":\"https://test-acquirerpay.pingpongx.com/qa/result.html\",\"shopperIP\":\"222.126.52.23\",\"customer\":{\"identificationId\":\"211\",\"lastName\":\"LeBronbb\",\"email\":\"test@pingpongx.com\",\"phone\":\"9157030054\"}}"
    }
  ```
  </code-block>

  <code-block title="cURL">

  ```curlrc
  curl --location 'https://sandbox-acquirer-payment.pingpongx.com/v4/payment/prePay' \
--header 'Content-Type: application/json' \
--header 'Cookie: SESSION=YWY4NmMxZGYtNTZlMy00Y2Q5LWJhOWMtMjEyZDhiYTkyODFl; SESSION=YWY4NmMxZGYtNTZlMy00Y2Q5LWJhOWMtMjEyZDhiYTkyODFl' \
--data-raw '{
    "accId": "2018092714313010016291",
    "clientId": "2018092714313010016",
    "signType": "SHA256",
    "sign": "28178F3C0B0AF10343F715211B9C7791AB4CF091EB4580505E053318E8F37B85",
    "version": "1.0",
    "bizContent":"{\"captureDelayHours\":\"0\",\"amount\":\"1000\",\"currency\":\"USD\",\"merchantTransactionId\":\"PMT-PR5GFUNZQP1695182276082\",\"payResultUrl\":\"https://test-acquirerpay.pingpongx.com/qa/result.html\",\"payCancelUrl\":\"https://test-acquirerpay.pingpongx.com/qa/result.html\",\"shopperIP\":\"222.126.52.23\",\"customer\":{\"identificationId\":\"211\",\"lastName\":\"LeBronbb\",\"email\":\"test@pingpongx.com\",\"phone\":\"9157030054\"}}"
}'
```

</code-block>
</code-group>

<br/>
<br/>

### Response Example
<br/>



```json
{
  "accId": "2018092714313010016291",
  "bizContent": "{\"amount\":\"1000\",\"paymentUrl\":\"https://sandbox-acquirer-payment-ssr.pingpongx.com/v3/checkout?token=EU:vr_YVR8u7rn7C1gG97DOg9_-Y66ubtNtoayJ_wiEEzdCnxCHYIk0pXordJYBjq1g\",\"transactionId\":\"2023092050004591\",\"token\":\"EU:vr_YVR8u7rn7C1gG97DOg9_-Y66ubtNtoayJ_wiEEzdCnxCHYIk0pXordJYBjq1g\",\"merchantTransactionId\":\"PMT-PR5GFUNZQP1695182276082\",\"currency\":\"USD\",\"innerJsUrl\":\"https://paycdn.pingpongx.com/production/static/sdk/ppPay.min.js?token=EU:vr_YVR8u7rn7C1gG97DOg9_-Y66ubtNtoayJ_wiEEzdCnxCHYIk0pXordJYBjq1g\"}",
  "clientId": "2018092714313010016",
  "code": "000000",
  "description": "Transaction succeeded",
  "sign": "337DE4525BECC73D56E262E04CCCC210C7BA70C78D48DA3BB128E4FEC6D01561",
  "signType": "SHA256"
}
```

</div>