---
title: merchant information inquiry
date: 2021-11-19 12:29:35
permalink: /pages/8b6765/
---


# merchant information inquiry

## Request Url
<br/>
<div>
<code-group>
  <code-block title="Sandbox Environment" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/v2/payment/getMerchantInfo
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/v2/payment/getMerchantInfo
  ```
  </code-block>
</code-group>
</div>


## Request Parameters

## Common Request Parameters

<br/>
<el-tag type="danger" effect="dark">Parameter required attribute description: required (M), optional (O), conditionally required (C)</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>

| Parameter field | Parameter type | Parameter attribute | Parameter description                                                                                                                                                            |
|:----------------|:---------------|:--------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| accId           | string(64)     | M                   | PingPong merchant store ID                                                                                                                                                       |
| clientId        | string(64)     | M                   | PingPong merchant ID                                                                                                                                                             |                                                          |
| signType        | string(32)     | M                   | Signature Specification: MD5 and SHA256 are supported. For details, see the Signature Specification section hereof for details                                                   |
| sign            | string(128)    | M                   | For signature, see the Signature Specification section hereof for details <a href='/pages/77ae52/' target='_blank'>Signing Protocol </a> All Parameters Participate in Signature |
| version         | string(10)     | M                   | Currently fixed at 1.0, may be adjusted with changes to theapiin the future                                                                                              |
| bizContent      | string         | M                   | Collection of request parameters, with no maximum length. All request parameters except for common parameters must be passed in this parameter                                   |


<br/>
<br/>
<br/>

## Response Parameters

<br/>
<el-tag type="danger" effect="dark">Parameter required attribute description: required (M), optional (O), conditionally required (C)</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>

| Parameter field  | Parameter type | Parameter attribute | Parameter description |
|:-----------------|:---------------|:--------------------|:----------------------|
| merchantDesc     | string(64)     | M                   | Merchant dynamic description                |
| merchantLocation | string(64)     | M                   | Merchant location                 |



