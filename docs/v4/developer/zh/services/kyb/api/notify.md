---
title: notify
date: 2022-07-15 09:36:01
permalink: /pages/c640db/
---

## 异步通知报文

### 业务类型

|bizType|desc|
|:----|:----|
|SM_KYC_REVIEW|KYB 审核|
|SM_STORE_REVIEW|店铺审核|



### 1. KYB 审核异步通知


<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<br/>
<br/>


|属性| 类型           | 是否必填 | 描述        |
|:----|:-------------|:-----|:----------|
|bizId| string(32)   | M    | 业务id      |
|bizType| string(32)   | M    | 业务类型      |
|institutionId| string(32)   | M    | 机构唯一标识    |
|comment| string(32)   | M    | 审核意见      |
|merchantClientId| string(32)   | M    | 机构侧的商户唯一标识 |
|sign| string(128)  | M    | 签名        |
|signType| string(32)   | M    | 签名类型 MD5  |
|status| string(32)   | M    | 审核状态      |
|subClientId| string(32)   | M    | 子商户唯一标识   |
|reviewDetail| ReviewDetail | O    | 审核详情      |

#### ReviewDetail
|属性| 类型                         |是否必填| 描述            |
|:----|:---------------------------|:----|:--------------|
|additionalInfo| AdditionalInfoReviewResult | O | 附加信息审核意见      |
|companyReviewResult| CompanyReviewResult        | O | 公司信息审核意见      |
|personReviewResult| Array< PersonReviewResult> | O | 法人、股东、受益人审核意见 |

#### AdditionalInfoReviewResult
| 属性                  | 类型             | 是否必填 | 描述                     |
|:--------------------|:---------------|:-----|:-----------------------|
| status              | string(32)     | M    | 状态：PASS/FAILED/PENDING |
| comment             | string(255)    | O    | 审核意见                   |
| needAdditionalInfos | Array< string> | O    | 需要上传附件名称list           |

#### CompanyReviewResult
| 属性                  | 类型             | 是否必填 | 描述                     |
|:--------------------|:---------------|:-----|:-----------------------|
| status              | string(32)     | M    | 状态：PASS/FAILED/PENDING |
| comment             | string(255)    | O    | 审核意见                   |

#### PersonReviewResult
| 属性           | 类型          | 是否必填 | 描述                     |
|:-------------|:------------|:-----|:-----------------------|
| status       | string(32)  | M    | 状态：PASS/FAILED/PENDING |
| comment      | string(255) | O    | 审核意见                   |
| customerId   | Number(11)  | M    | id                     |
| idCardNumber | string(64)  | M    | 证件号码                   |
| customerTye  | Number(3)   | M    | 类型：1-法人 2-股东 3-受益人     |




#### 报文示例

```json
{
  "bizId":"SM2022071120365810274",
  "bizType":"SM_KYC_REVIEW",
  "comment":"请重新提交",
  "institutionId":"2022070222130610237",
  "merchantClientId":"ws0002",
  "reviewDetail":{
    "additionalInfo":{
      "comment":"需要传附件",
      "needAdditionalInfos":[
        "银行开户许可证或银行流水",
        "股权架构申请",
        "拒付能力证明"
      ],
      "status":"FAILED"
    },
    "companyReviewResult":{
      "comment":"证件图片有无关水印",
      "status":"FAILED"
    },
    "personReviewResult":[
      {
        "comment":"居住填写不够详细（请精确至街道号如居住地没有街道的请填写至村）",
        "customerId":749,
        "customerType":1,
        "idCardNumber":"123123123",
        "status":"FAILED"
      },
      {
        "comment":"申请人未成年",
        "customerId":778,
        "customerType":2,
        "idCardNumber":"123123123213",
        "status":"FAILED"
      },
      {
        "comment":"提交证件与需要提交的证件不匹配",
        "customerId":779,
        "customerType":3,
        "idCardNumber":"123123123123",
        "status":"FAILED"
      }
    ]
  },
  "status":"MODIFY",
  "subClientId":"SM2022071120365810274"
}
```

### 2. 店铺 审核异步通知


<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<br/>
<br/>


|属性|类型|是否必填|描述|
|:----|:----|:----|:----|
|accId|string(32)|M|店铺唯一标识|
|bizId|string(32)|M|业务id|
|bizType|string(32)|M|业务类型|
|institutionId|string(32)|M|机构唯一标识|
|comment|string(32)|M|审核意见|
|merchantAccId|string(32)|M|机构侧店铺唯一标识|
|merchantClientId|string(32)|M|机构侧子商户唯一标识 MD5|
|sign|string(128)|M|签名|
|signType|string(32)|M|签名类型 MD5|
|status|string(32)|M|状态|
|subClientId|string(32)|M|子商户唯一标识|




#### 报文示例

```json
{
  "accId": "2022070222130610237524",
  "bizId": "2022070222130610237524",
  "bizType": "SM_STORE_REVIEW",
  "institutionId": "2022070222130610237",
  "comment": "上传身份证件为无关图片",
  "merchantAccId": "MAC10003",
  "merchantClientId": "ws0002",
  "sign": "90A2F1E468B9E7873CF799954FC0F271",
  "signType": "MD5",
  "status": "PENDING",
  "subClientId": "SM2022071120365810274"
}
```