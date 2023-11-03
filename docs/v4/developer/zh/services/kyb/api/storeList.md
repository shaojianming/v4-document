---
title: 获取店铺列表
date: 2022-07-15 05:41:17
permalink: /pages/0783c9/
---

# 获取店铺列表

## 请求地址

<br/>
<div>
<code-group>
  <code-block title="沙箱环境" active>

  ```bash
  https://sandbox-acquirer-merchant.pingpongx.com/merchant/acquirer/store/queryPage
  ```
  </code-block>
  <code-block title="生产环境">

  ```bash
  https://acquirer-merchant.pingpongx.com/dispute/merchant/acquirer/store/queryPage
  ```
  </code-block>
</code-group>
</div>

## 请求参数

###  公共请求参数

| Parameter field          | Parameter type        | Parameter attribute | Parameter description                                                                        |
|:--------------|:------------|:-----|:----------------------------------------------------------------------------|
| institutionId | string(64)  | M    | PingPong 机构号                                                                |
| subClientId   | string(64)  | M    | 子商户clientId                                                                 |
| signType      | string(32)  | M    | Signature protocol, supports MD5, SHA256，see the <a href='/pages/77ae52/' target='_blank'>signature protocol column</a>in this article for details |
| sign          | string(128) | M    | For signature, see the Signature Specification section hereof for details <a href='/pages/77ae52/' target='_blank'>Signing Protocol </a> All Parameters Participate in Signature               |
| version       | string(10)  | M    | Currently fixed at 1.0, may be adjusted with changes to theapiin the future                                                      |

<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<br/>
<br/>


<v4-KYB-StoreList></v4-KYB-StoreList>


## 响应报文


<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<br/>
<br/>


|属性|类型|是否必填|描述|
|:----|:----|:----|:----|
|institutionId|string(64)|M|机构一标识|
|merchantAccId|string(64)|M|机构侧店铺唯一标识|
|subClientId|string(64)|M|PingPong侧子商户唯一标识|
|accId|string(64)|M|PingPong侧店铺唯一标识|
|storeName|string(64)|M|店铺名称|
|storeUrl|string(64)|M|店铺url|
|status|string(64)|M|店铺审核状态|
|comment|string(64)|M|审核备注|



```json
{
    "code": 200,
    "data": [
        {
            "accId": "2022071513553610280526",
            "independentWebsite": "Self build",
            "industryType": "",
            "institutionId": "2022071513553610280",
            "merchantAccId": "MAC20001",
            "status": "PENDING",
            "storeName": "xxx1",
            "storeUrl": "xxx1.com",
            "subClientId": "SM2022071514080210281"
        }
    ],
    "msg": "SUCCESS",
    "total": 1
}
```