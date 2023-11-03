---
title: Delete ChargebackInformation
date: 2023-05-06 14:54:43
permalink: /pages/4da0fe/
---

## Request Url

<br/>
<div>
<code-group>
  <code-block title="sandbox" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/dispute/deleteDefenseDocument
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/dispute/deleteDefenseDocument
  ```
  </code-block>
</code-group>
</div>



## Request Parameters

<br/>
<br/>
<div>
<el-tag type="danger" effect="dark">Parameter required attribute description:Mandatory (M), optional (O), conditional (C)</el-tag>
<el-tag effect="dark">POST</el-tag>
<el-tag effect="dark">JSON</el-tag>
</div>  



| Parameter field          | Parameter type | Reduired | description                                                                                                                |
|--------------------------|----------------|----------------------|----------------------------------------------------------------------------------------------------------------------------|
| accId                    | string(256)    | M                    | PingPong merchant store ID                                                                                                 |
| disputePspReference      | string(256)    | M                    | Chargeback Order Number                                                                                                    |
| defenseDocumentTypeCode  | string(256)    | M                    | Appeal Document Type, Details can be found in the Enum:<br/><a href="/pages/8ea994/" target="_blank">CBDocTypeCodeEnum</a> |
| sign                     | string(256)    | M                    | sign                                                                                                                       |
| signType                 | string(32)     | M                    | signType，`SHA256`                                                                                                          |
| version                  | string(10)     | M                    | 1.0                                                                                                                        |


## Request Example:

```json
{
  "accId":"2018092714313010016291",
  "disputePspReference":"2023030900000005",
  "defenseDocumentTypeCode":"ImageofGoodDeliverd",
  "sign": "{{Sign}}",
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


| Field Name | Required | Description                |
|------------|----------|----------------------------|
| accId      | M        | PingPong merchant store ID |
| sign       | M        | sign                       |
| signType   | M        | signType `SHA256`          |
| success    |          | `true`/`false`             |

## Response sample

```json
{
  "accId": "2018092714313010016291",
  "sign": "96A4042D057EB5CBBD8929C13D12C785B5BBCF74A6949CCC28330FE0638F0F5D",
  "signType": "SHA256",
  "success": true
}
```