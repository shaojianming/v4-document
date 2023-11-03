---
title: Merchant SubmitsDocumentation and Disputesthe Chargeback
date: 2023-05-06 14:54:43
permalink: /pages/edfa4b/
---

## Request Url

<br/>
<div>
<code-group>
  <code-block title="sandbox" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/dispute/defendDispute
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/v4/dispute/defendDispute
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



| Parameter field                 | Parameter type   | Reduired   | description                |
|---------------------------------|------------------|------------------------|----------------------------|
| accId                           | string(256)      | M                      | PingPong merchant store ID |
| disputePspReference             | string(256)      | M                      | Chargeback Order Number    |
| sign                            | string(256)      | M                      | sign                       |
| signType                        | string(32)       | M                      | signType，`SHA256`          |
| version                         | string(10)       | M                      | 1.0                        |


## Request Example:

```json
{
  "accId":"2020010710552510100273",
  "disputePspReference":"202303011046544027",
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

| Field Name | Required | Description                |
|------------|----------|----------------------------|
| accId      | M        | PingPong merchant store ID |
| sign       | M        | sign                       |
| signType   | M        | signType `SHA256`          |
| success    |          | `true`/`false`             |

## Response sample

```json
{
  "accId": "2020010710552510100273",
  "sign": "DA7E57331DFC0283CD8F9E811E9E66ECE6BB456747ECE994A7890931360479B2 ",
  "signType": "SHA256",
  "success": true
}
```