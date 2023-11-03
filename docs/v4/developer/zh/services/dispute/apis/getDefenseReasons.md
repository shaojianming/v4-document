---
title: Getting Required Informationfor Chargeback
date: 2023-05-06 14:54:43
permalink: /pages/936873/
---



## Request Url

<br/>
<div>
<code-group>
  <code-block title="sandbox" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/dispute/getDefenseReasons
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/dispute/getDefenseReasons
  ```
  </code-block>
</code-group>
</div>



## Request Parameters

<br/>
<br/>
<div>
<el-tag type="danger" effect="dark">Parameter required attribute description:Mandatory (M), optional (O), conditional (C) </el-tag>
<el-tag effect="dark">POST</el-tag>
<el-tag effect="dark">JSON</el-tag>
</div> 



| Parameter field      | Parameter type | Reduired | description                |
|----------------------|----------------|----------------------|----------------------------|
| accId                | string(256)    | M                    | PingPong merchant store ID |
| disputePspReference  | string(256)    | M                    | Chargeback Order Number    |
| sign                 | string(256)    | M                    | sign                       |
| signType             | string(32)     | M                    | signType，SHA256            |
| version              | string(10)     | M                    | 1.0                        |


## Request Example:

```json
{
  "accId":"2020010710552510100273",
  "disputePspReference":"202203241602153304",
  "sign":"A2DF0AEA73DEB5468C3A694C84F124DF54B93BD23860D43C1726F15F0D58 D216",
  "signType":"SHA256"
}
```


## Response Parameters



<br/>
<el-tag type="danger" effect="dark">Parameter required attribute description:Mandatory (M), optional (O), conditional (C)</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>

<div><Checkout-dispute-defenseReasonsResponseTable></Checkout-dispute-defenseReasonsResponseTable></div>



## Response sample

```json
{
  "accId": "2018092714313010016291",
  "data": {
    "defenseDocList": [
      {
        "available": false,
        "defenseDocumentTypeCode": "TIDorInvoice",
        "requirementLevel": "Mandatory"
      },
      {
        "available": false,
        "defenseDocumentTypeCode": "LogisticInfo",
        "requirementLevel": "Conditional"
      },
      {
        "available": false,
        "defenseDocumentTypeCode": "GoodsWereAsDescribed",
        "requirementLevel": "Mandatory"
      },
      {
        "available": true,
        "defenseDocumentTypeCode": "ImageofGoodDeliverd",
        "requirementLevel": "Conditional"
      },
      {
        "available": false,
        "defenseDocumentTypeCode": "CardholderSignLetter",
        "requirementLevel": "Optional"
      },
      {
        "available": false,
        "defenseDocumentTypeCode": "CustomerContactInfo",
        "requirementLevel": "Optional"
      },
      {
        "available": false,
        "defenseDocumentTypeCode": "CancelRefundPolicy",
        "requirementLevel": "Optional"
      },
      {
        "available": false,
        "defenseDocumentTypeCode": "DefendMaterial",
        "requirementLevel": "Conditional"
      }
    ],
    "disputeType": "DUTY",
    "satisfied": false
  },
  "sign": "96A4042D057EB5CBBD8929C13D12C785B5BBCF74A6949CCC28330FE0638F0F5D",
  "signType": "SHA256",
  "success": true
}
```