---
title: 提交法人、受益人和股东认证材料
date: 2022-07-14 12:06:53
permalink: /pages/748ceb/
---

# 提交法人、受益人和股东认证材料

## 请求地址

<br/>
<div>
<code-group>
  <code-block title="沙箱环境" active>

  ```bash
  https://sandbox-acquirer-merchant.pingpongx.com/merchant/acquirer/kyb/personal
  ```
  </code-block>
  <code-block title="生产环境">

  ```bash
  https://acquirer-merchant.pingpongx.com/dispute/merchant/acquirer/kyb/personal
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


### 请求参数

<br/>
<v4-KYB-AddPersonal></v4-KYB-AddPersonal>




## customerType

| customerType | desc |
|:-------------|:-----|
| 1            | 法人   |
| 2            | 股东   |
| 3            | 受益人  |

## 响应报文

| 属性                | 类型          | 是否必填 | 描述               |
|:------------------|:------------|:-----|:-----------------|
| institutionId     | string(64)  | M    | 机构一标识            |
| subClientId       | string(64)  | M    | PingPong侧子商户唯一标识 |
| customerId        | int         | M    | 法人受益人股东身份唯一标识    |
| englishName       | string(32)  | M    | 英文姓名             |
| sign              | string(128) | M    | 签名               |
| certExpireDate    | string(64)  | M    | 证件过期时间           |
| englishAddress    | string(64)  | M    | 英文地址             |
| customerType      | string(32)  | M    | 身份类型             |
| emailAddress      | string(64)  | M    | 邮件地址             |
| signType          | string(32)  | M    | 签名类型             |
| address           | string(64)  | M    | 中文地址             |
| birthDate         | string(64)  | M    | 出生日期             |
| certEffectiveDate | string(64)  | M    | 证件生效日期           |
| dictArea          | string(64)  | O    | 地区               |
| chineseName       | string(64)  | M    | 中文名称             |
| serviceURL        | string(64)  | M    | 文件访问前缀           |


```json
{
  "code": 200,
  "data": {
    "address": "ccc",
    "birthDate": "2022-07-28",
    "certEffectiveDate": "2022-05-01",
    "certExpireDate": "2022-05-01",
    "chineseName": "xxccc",
    "continent": "",
    "country": "HongKong(China)",
    "customerId": "777",
    "customerType": 3,
    "dictArea": "香港特别行政区,中西區",
    "emailAddress": "1235@qq.com",
    "englishAddress": "cccc",
    "englishName": "cccc",
    "frontImageFileName": "8ed43fbf03624283ad6d3d654fdba7d1.jpeg",
    "nationality": "Mainland"
  },
  "msg": "SUCCESS"
}
```


