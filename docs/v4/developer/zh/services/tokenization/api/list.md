---
title: Token list of card Bindings
date: 2022-10-16 18:49:01
permalink: /pages/ef1f61/
---

## Request address

<br/>
<div>
<code-group>
  <code-block title="Sandbox Environment" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/v4/tokenization/list
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/v4/tokenization/list
  ```
  </code-block>
</code-group>
</div>


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
| merchantUserId | string(64)  | M    | Cardholder ID on the merchant website                                                                                                     |
| token          | string(64)  | C    | Token bound by the cardholder. If a token is passed, the card information corresponding to the specified token will be returned; otherwise, all card information under the merchantUserId will be returned.                                                    |



## Response Parameter

<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>

| Parameter field                 | Parameter attribute | Parameter description                       |
|:--------------------------------|:--------------------|:--------------------------------------------|
| clientId                        | M                   | PingPong merchant ID                        |
| accId                           | M                   | PingPong merchant store ID                  |
| code                            | M                   | Result status code                          |
| description                     | M                   | result description                          |
| cardInfos[i].token              | M                   | Token corresponding to the card information |
| cardInfos[i].desensitizedCardNo | M                   | Masked card number                          |
| cardInfos[i].cardExpireMonth    | M                   | Card expiration date - month                |
| cardInfos[i].cardExpireYear     | M                   | Card expiration date - year                 |
| cardInfos[i].holderFirstName    | M                   | Cardholder's first name                     |
| cardInfos[i].holderLastName     | M                   | Cardholder's last name                      |
| cardInfos[i].paymentBrand       | M                   | Card brand                                  |
