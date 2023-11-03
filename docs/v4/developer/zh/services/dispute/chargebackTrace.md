---
title: Query chargeback operationrecords
date: 2023-05-06 16:12:32
permalink: /pages/fe1ddd/
---




##  Request Url

<br/>
<div>
<code-group>
  <code-block title="sandbox" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/v2/chargeback/trace
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/v2/chargeback/trace
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


| Parameter field | Parameter type | Reduired | description                        |
|:----------------|:---------------|:---------------------|:-----------------------------------|
| accId           | String(64)     | M                    | PingPong merchant store ID         |
| transactionId   | String(64) M   | M                    | PingPong transaction serial number |
| signType        | String(32)     | M                    | signType，`SHA256``MD5`             |
| sign            | String(256)    | M                    | sign                               |
| version         | string(10)     | M                    | 1.0                                |

## Response Parameters

Following are the details of data[i] (multiple entries)

| Parameter field    | description                        |
|:-------------------|:-----------------------------------|
| transactionId      | PingPong transaction serial number |
| id                 | ID                                 |
| chargebackId       | chargebackId                       | 
| chargebackType     | chargebackType                     |
| chargebackStatus   | chargebackStatus                   |
| createDate         | createDate YYYY-MM-DD hhmmss       |
| updateDate         | updateDate YYYY-MM-DD hhmmss       |
| creator            | Transaction record creator.        |



## chargebackType

| chargebackType      | desc                        |
|:--------------------|:----------------------------|
| retrieval           | retrieval                   |
| 1st_chargeback      | The first Chargeback        |
| 2nd_chargeback      | Second Chargeback           |
| chargeback_reversal | Chargeback Reversal         |
| pre_arbitration     | Preparing for Arbitration   |
| arbitration         | Arbitration                 |

## chargebackStatus

1 is the initial state; 3, 4, and 5 are intermediate states; while 6, 7, 8, and 9 are final states.


| 序号 | chargebackStatus | desc                                                                                                                           | desc                |
|:---|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------|:--------------------|
| 1  | pending          | The merchant has not yet processed the chargeback/retrieval request.                                                           | initial state       |
| 3  | processed        | The merchant has submitted the documentation.                                                                                  | intermediate states |
| 4  | expired          | The merchant has failed to respond within the given timeframe.                                                                 | intermediate states |
| 5  | waiver_appeal    | The merchant clicked on the "Abandon Appeal" button, or a chargeback that resulted from not responding to a retrieval request. | intermediate states |
| 6  | revoked          | Acquiring bank's chargeback document, chargeback reversal.                                                                     | final states        |
| 7  | success          | Received acquiring bank's document, appeal successful.                                                                         | final states        |
| 8  | failed           | Received acquiring bank's document, appeal unsuccessful.                                                                       | final states        |
| 9  | refunded         | The merchant has issued a full refund during chargeback/retrieval process.                                                     | final states        |

 