---
title: 删除受益人和股东资料
date: 2022-07-15 04:10:41
permalink: /pages/0e34be/
---

# 删除受益人和股东资料

> 法人不支持删除

## 请求地址

<br/>
<div>
<code-group>
  <code-block title="沙箱环境" active>

  ```bash
 DELETE https://sandbox-acquirer-merchant.pingpongx.com/merchant/acquirer/kyb/personal
  ```
  </code-block>
  <code-block title="生产环境">

  ```bash
  DELETE https://acquirer-merchant.pingpongx.com/dispute/merchant/acquirer/kyb/personal
  ```
  </code-block>
</code-group>
</div>



## 请求报文



<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<br/>
<br/>

| Parameter    | Type        | Required | Description |
|--------------|-------------|----------|-------------|
| `clientId`   | string(32)  | M        | 商户号。        |
| `customerId` | int         | M        | 受益人或股东唯一标识  |
| `signType`   | string(32)  | M        | 签名类型。       |
| `sign`       | string(128) | M        | 签名。         |
| `version`    | string(10)  | M        | Currently fixed at 1.0, may be adjusted with changes to theapiin the future                                                                                                                                         |


```json

{
  "customerId":1,
  "clientId":"2019041614452410067",
  "signType":"SHA256",
  "sign":"b3abe5d8c69b38733ad57ea75e83bcae42bbbbac75e3a5445862ed2f8a2cd677"
}

```

## 响应报文

```json
{
  "code":200,
  "msg":"SUCCESS"
}
```
