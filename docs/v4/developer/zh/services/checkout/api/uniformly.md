---
title: Accept a Payment
date: 2022-09-20 10:52:27
permalink: /pages/a2c224/
---


## Request Url

<br/>
<div>
<code-group>
  <code-block title="Sandbox Environment" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/v4/payment/unifiedPay
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/v4/payment/unifiedPay
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


### Business Parameters
<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>
<v4-Checkout-Uniformly-PublicParamsTableV3></v4-Checkout-Uniformly-PublicParamsTableV3>




### Payment parameters
<br/>
<br/>

<div>

<v4-Checkout-Uniformly-UniformlyOrderRequest></v4-Checkout-Uniformly-UniformlyOrderRequest>
</div>




### Risk control parameters
<br/>
<br/>
<v4-Checkout-Uniformly-RiskParamsTable></v4-Checkout-Uniformly-RiskParamsTable>
<br/>
<br/>

## Response Parameters

### Common Response Parameters
<br/>
<br/>
<v4-Checkout-Uniformly-Alternative-AlternativePublicResponseTable></v4-Checkout-Uniformly-Alternative-AlternativePublicResponseTable>

### Business Response Parameters

<br/>
<br/>

<v4-Checkout-Uniformly-UnifiedPayBizResponseTable></v4-Checkout-Uniformly-UnifiedPayBizResponseTable>

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
    "sign": "898A3CBE981B3E2BF4E2B8D1A817D7E23EF93BC4293993EE545E36F4C87F2E79",
    "version": "1.0",
    "bizContent":"{\"captureDelayHours\":0,\"merchantSource\":\"0\",\"amount\":100,\"currency\":\"USD\",\"requestId\":\"PMT-9ICSCWF9H51695189441815\",\"payCancelUrl\":\"https://test-acquirerpay.pingpongx.com/qa/notify\",\"notificationUrl\":\"https://test-acquirerpay.pingpongx.com/qa/notify\",\"merchantTransactionId\":\"PMT-9ICSCWF9H51695189441815\",\"shopperIP\":\"192.168.1.1\",\"paymentMethod\":{\"type\":\"scheme\",\"cardInfo\":{\"number\":\"5204740000001002\",\"holderFirstName\":\"James\",\"holderLastName\":\"LeBron\",\"expireMonth\":\"12\",\"expireYear\":\"2027\",\"cvv\":\"840\"}},\"customer\":{\"email\":\"pass@pingpongx.com\"},\"goods\":{\"name\":\"zhangsan\",\"unitPrice\":\"10\",\"number\":\"1\",\"imgUrl\":\"https://m.baidu.com/s?word=%E7%99%BE%E5%BA%A6%E7%83%AD%E6%90%9C&tn&from=1020854c&sa=tre_dl_gh_logo_wj\"},\"billingAddress\":{\"street\":\"701 Brickell Avenue, Suite 2700\",\"postcode\":\"84723\",\"city\":\"Miami\",\"state\":\"UT\",\"country\":\"US\"},\"browserInfo\":{\"acceptHeader\":\"content-type=application/x-www-form-urlencoded;accept=*/*;cache-control=no-cache;postman-token=cf489264-5378-4d5d-a86c-72c86a408c03;accept-encoding=gzip, deflate;content-length=588;connection=keep-alive;\",\"colorDepth\":\"32\",\"jetLag\":\"480\",\"screenHeight\":\"1980\",\"screenWidth\":\"1080\",\"userAgent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36\",\"windowSize\":\"05\"},\"device\":{\"orderTerminal\":\"02\"}}"
    }
  ```
  </code-block>

  <code-block title="cURL">

  ```curlrc
  curl --location 'https://sandbox-acquirer-payment.pingpongx.com/v4/payment/unifiedPay' \
--header 'Content-Type: application/json' \
--header 'Cookie: SESSION=YmIwY2EwMDItZjc1NC00YjFjLWIyMGUtNmNhZGRkNmI5ZDAw; SESSION=YmIwY2EwMDItZjc1NC00YjFjLWIyMGUtNmNhZGRkNmI5ZDAw' \
--data-raw '{"accId":"2018092714313010016291","bizContent":"{\"captureDelayHours\":0,\"merchantSource\":\"0\",\"amount\":100,\"currency\":\"USD\",\"requestId\":\"PMT-9ICSCWF9H51695189441815\",\"payCancelUrl\":\"https://test-acquirerpay.pingpongx.com/qa/notify\",\"notificationUrl\":\"https://test-acquirerpay.pingpongx.com/qa/notify\",\"merchantTransactionId\":\"PMT-9ICSCWF9H51695189441815\",\"shopperIP\":\"192.168.1.1\",\"paymentMethod\":{\"type\":\"scheme\",\"cardInfo\":{\"number\":\"5204740000001002\",\"holderFirstName\":\"James\",\"holderLastName\":\"LeBron\",\"expireMonth\":\"12\",\"expireYear\":\"2027\",\"cvv\":\"840\"}},\"customer\":{\"email\":\"pass@pingpongx.com\"},\"goods\":{\"name\":\"zhangsan\",\"unitPrice\":\"10\",\"number\":\"1\",\"imgUrl\":\"https://m.baidu.com/s?word=%E7%99%BE%E5%BA%A6%E7%83%AD%E6%90%9C&tn&from=1020854c&sa=tre_dl_gh_logo_wj\"},\"billingAddress\":{\"street\":\"701 Brickell Avenue, Suite 2700\",\"postcode\":\"84723\",\"city\":\"Miami\",\"state\":\"UT\",\"country\":\"US\"},\"browserInfo\":{\"acceptHeader\":\"content-type=application/x-www-form-urlencoded;accept=*/*;cache-control=no-cache;postman-token=cf489264-5378-4d5d-a86c-72c86a408c03;accept-encoding=gzip, deflate;content-length=588;connection=keep-alive;\",\"colorDepth\":\"32\",\"jetLag\":\"480\",\"screenHeight\":\"1980\",\"screenWidth\":\"1080\",\"userAgent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36\",\"windowSize\":\"05\"},\"device\":{\"orderTerminal\":\"02\"}}","clientId":"2018092714313010016","sign":"898A3CBE981B3E2BF4E2B8D1A817D7E23EF93BC4293993EE545E36F4C87F2E79","signType":"SHA256","version":"1.0"}'
  
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
  "bizContent": "{\"requestId\":\"PMT-9ICSCWF9H51695189441815\",\"merchantTransactionId\":\"PMT-9ICSCWF9H51695189441815\",\"amount\":\"100.000000\",\"threeDUnionParams\":{\"threeDContinue\":\"false\"},\"transactionId\":\"2023092050004595\",\"threeDContinue\":\"false\",\"paymentMethod\":{\"type\":\"scheme\"},\"captureDelayHours\":0,\"status\":\"FAILED\"}",
  "clientId": "2018092714313010016",
  "code": "301002",
  "description": "Transaction declined (Do not honor,Please contact the issuing bank to confirm the bank card payment limit)",
  "sign": "85E02B2A474DA7D135DE844A202015594C874E4A2A06394BA7DF00071FC4A6D1",
  "signType": "SHA256"
}
```

</div>
