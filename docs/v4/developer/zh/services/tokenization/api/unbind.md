---
title: Token Unbinding
date: 2021-11-19 12:29:35
permalink: /pages/2d0e19/
---



# Token Unbinding

+ After the token is successfully unbound, it cannot be used again.

+ Subsequent transactions (refund, pre-authorization completion, pre-authorization cancellation) that were previously made using the token will not be affected.


## Request Address

<br/>
<div>
<code-group>
  <code-block title="Sandbox Environment" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/v4/tokenization/unbind
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/v4/tokenization/unbind
  ```
  </code-block>
</code-group>
</div>




## Request Parameter


### Common Request Parameter

<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>

| Parameter field | Parameter type | Parameter attribute | Parameter description                                                                                                                                                    |
|:----------------|:---------------|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| accId           | string(64)     | M                   | PingPong merchant store ID                                                                                                                                               |
| clientId        | string(64)     | M                   | PingPong merchant ID                                                                                                                                                     |                                                                |
| signType        | string(32)     | M                   | Signature protocol, supports MD5, SHA256，see the <a href='/pages/77ae52/' target='_blank'>signature protocol column</a>in this article for details                       |
| sign            | string(128)    | M                   | Signature content, see the<a href='/pages/77ae52/' target='_blank'>signature protocol column</a>in this article for details. All parameters participate in the signature |
| version         | string(64)     | M                   | Currently fixed at 1.0, may be adjusted with changes to theapiin the future                                                                                      |

### Request Parameter

| Parameter field           | Parameter type        | Parameter attribute | Parameter description                                                                                                              |
|:---------------|:------------|:-----|:------------------------------------------------------------------------------------------------------------------|
| token          | string(64)  | M    | Token bound by the cardholder                                                                                                      |


<br/>
<br/>
<br/>

## Response Parameter

<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>

| Parameter field        | Parameter attribute | Parameter description                                                   |
|:------------|:-----|:-------------------------------------------------------|
| clientId    | M    | PingPong merchant ID                                        |
| accId       | M    | PingPong merchant store ID                                         |
| code        | M    | Result status code                                                  |
| description | M    | result description                                                   |
| status      | M    | Unbinding status<ul><li>SUCCESS-Unbinding successful</li><li>FAILED-Unbinding failed</li></ul> |





