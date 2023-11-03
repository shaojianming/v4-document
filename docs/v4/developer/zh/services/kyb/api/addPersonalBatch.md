---
title: 批量提交法人、受益人和股东认证材料
date: 2022-08-05 10:38:33
permalink: /pages/3e0941/
---


# 批量提交法人、受益人和股东认证材料

## 请求地址

<br/>
<div>
<code-group>
  <code-block title="沙箱环境" active>

  ```bash
  https://sandbox-acquirer-merchant.pingpongx.com/merchant/acquirer/kyb/personal/batch
  ```
  </code-block>
  <code-block title="生产环境">

  ```bash
  https://acquirer-merchant.pingpongx.com/dispute/merchant/acquirer/kyb/personal/batch
  ```
  </code-block>
</code-group>
</div>


## 请求参数


<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<br/>
<br/>

### 公共请求参数

| Parameter field          | Parameter type        | Parameter attribute | Parameter description                                                                        |
|:--------------|:------------|:-----|:----------------------------------------------------------------------------|
| institutionId | string(64)  | M    | PingPong 机构号                                                                |
| subClientId   | string(64)  | M    | 子商户clientId                                                                 |
| signType      | string(32)  | M    | Signature protocol, supports MD5, SHA256，see the <a href='/pages/77ae52/' target='_blank'>signature protocol column</a>in this article for details |
| sign          | string(128) | M    | For signature, see the Signature Specification section hereof for details <a href='/pages/77ae52/' target='_blank'>Signing Protocol </a> All Parameters Participate in Signature               |
| version       | string(10)  | M    | Currently fixed at 1.0, may be adjusted with changes to theapiin the future                                                      |

<br/>

### 请求参数

<v4-KYB-AddPersonalBatch></v4-KYB-AddPersonalBatch>

## customerType

| customerType | desc |
|:-------------|:-----|
| 1            | 法人   |
| 2            | 股东   |
| 3            | 受益人  |


## 响应报文

<br/>
<br/>

<KYB-AddPersonalBatchWithResponse></KYB-AddPersonalBatchWithResponse>

### Response Example

```json
{
  "msg": "SUCCESS",
  "code": 200,
  "data": {
    "institutionId": "2022070222130610237",
    "kybCustomerInfoResponseDTOList": [
      {
        "batchOperationStatus": "SUCCESS",
        "country": "HongKong(China)",
        "englishName": "cccc",
        "address": "法人地址",
        "frontImageFileName": "8ed43fbf03624283ad6d3d654fdba7d1.jpeg",
        "birthDate": "2022-07-28",
        "certEffectiveDate": "2022-05-01",
        "certExpireDate": "2022-05-01",
        "englishAddress": "cccc",
        "customerType": 1,
        "emailAddress": "1235@qq.com",
        "backImageFileName": "d1f2b0827da048a784512bbff2a0a41d.jpeg",
        "dictArea": "香港特别行政区,中西區",
        "chineseName": "法人中文名称",
        "customerId": "782"
      },
      {
        "batchOperationStatus": "SUCCESS",
        "country": "HongKong(China)",
        "englishName": "cccc",
        "address": "股东地址",
        "frontImageFileName": "38796040b1f6484494ee481e5fe179db.jpg",
        "birthDate": "2022-07-28",
        "certEffectiveDate": "2022-05-01",
        "certExpireDate": "2022-05-01",
        "englishAddress": "cccc",
        "customerType": 2,
        "emailAddress": "1235@qq.com",
        "backImageFileName": "d2a9b1dddfac4746bdcb9faf9e359172.jpg",
        "dictArea": "香港特别行政区,中西區",
        "chineseName": "股东中文名称",
        "customerId": "781"
      },
      {
        "batchOperationStatus": "SUCCESS",
        "country": "United States",
        "englishName": "受益人英文名",
        "address": "受益人地址",
        "frontImageFileName": "0436a7e0d7a04b9eb41010243ce23da6.jpeg",
        "birthDate": "2022-07-28",
        "certEffectiveDate": "2022-05-01",
        "certExpireDate": "2022-05-01",
        "englishAddress": "受益人英文地址",
        "customerType": 3,
        "emailAddress": "1235@qq.com",
        "backImageFileName": "df002ca9c9d64987a48a421f8fabee21.png",
        "dictArea": "United States,New York",
        "chineseName": "受益人名称",
        "customerId": "780"
      }
    ],
    "serviceURL": "https://dev-acquirer-merchant.pingpongx.com/merchant/acquirer/file/selectFile/",
    "sign": "CAB754C1B81A004CC42F65892CDF3061FF45AAADB04E3B3270B70A5BCDA28A30",
    "subClientId": "SM2022072122330810299",
    "signType": "SHA256"
  }
}
```


