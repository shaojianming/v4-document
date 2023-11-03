---
title: 子商户注册
date: 2022-07-22 11:23:25
permalink: /pages/18e59d/
---

## 请求地址

<br/>
<div>
<code-group>
  <code-block title="沙箱环境" active>

  ```bash
  https://sandbox-acquirer-merchant.pingpongx.com/merchant/acquirer/kyb/subMerchant
  ```
  </code-block>
  <code-block title="生产环境">

  ```bash
  https://acquirer-merchant.pingpongx.com/dispute/merchant/acquirer/kyb/subMerchant
  ```
  </code-block>
</code-group>
</div>



## 请求参数

### 公共请求参数

| Parameter field          | Parameter type        | Parameter attribute | Parameter description                                                                        |
|:--------------|:------------|:-----|:----------------------------------------------------------------------------|
| institutionId | string(64)  | M    | PingPong 机构号                                                                |
| subClientId   | string(64)  | M    | 子商户clientId                                                                 |
| signType      | string(32)  | M    | Signature protocol, supports MD5, SHA256，see the <a href='/pages/77ae52/' target='_blank'>signature protocol column</a>in this article for details |
| sign          | string(128) | M    | For signature, see the Signature Specification section hereof for details <a href='/pages/77ae52/' target='_blank'>Signing Protocol </a> All Parameters Participate in Signature               |
| version       | string(10)  | M    | Currently fixed at 1.0, may be adjusted with changes to theapiin the future                                                      |

### 请求参数
<v4-KYB-AddSubClient></v4-KYB-AddSubClient>




## 响应参数

| 属性               | 类型          | 是否必填 | 描述                           |
|:-----------------|:------------|:-----|:-----------------------------|
| institutionId    | string(64)  | M    | 机构一标识                        |
| subClientId      | string(64)  | M    | PingPong侧子商户唯一标识             |
| merchantClientId | string(64)  | M    | 机构侧子商户唯一标识                   |
| industryType     | string(32)  | M    | 贸易类型 Goods-货物贸易 Service-服务贸易 |
| notifyUrl        | string(255) | M    | 异步通知地址                       |
| signType         | string(32)  | M    | 签名类型                         |
| sign             | string(128) | M    | 签名                           |



```json
{
    "institutionId": "2022070222130610237",
    "subClientId": "SM2022072122330810299",
    "merchantClientId": "ws0008",
    "industryType":"",
    "notifyUrl":"33333",
    "signType": "MD5",
    "sign":""

}
```