---
title: Query chargeback records
date: 2023-05-06 16:12:32
permalink: /pages/16f0b1/
---



# 查询拒付记录

A chargeback is the reversal of a transaction, typically initiated by a cardholder who disputes a transaction on their credit card.


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


## Request Url

```text
https://{host}/v2/chargeback
```

## Request Parameters

<br/>
<br/>
<div>
<el-tag type="danger" effect="dark">Parameter required attribute description:Mandatory (M), optional (O), conditional (C) </el-tag>
<el-tag effect="dark">POST</el-tag>
<el-tag effect="dark">JSON</el-tag>
</div> 


| Parameter field  | Parameter type | Reduired | description                                                                            |
|:-----------------|:---------------|:---------------------|:---------------------------------------------------------------------------------------|
| accId            | String(64)     | M                    | PingPong merchant store ID                                                             |
| queryType        | String(64)     | M                    | NEW/UPDATE                                                                             |
| startDate        | String(64)     | M                    | Chargeback generation time/update time dimension, query start time, format yyyy-mm-dd. |
| endDate          | String(64)     | M                    | Chargeback generation time/update time dimension, query end time, format yyyy-mm-dd.   |
| chargebackType   | String(64)     | O                    | chargebackType                                                                         |
| chargebackStatus | String(64)     | O                    | chargebackStatus                                                                       |
| page             | Integer        | O                    | page， 1                                                                                |
| pagesize         | Integer        | O                    | Number of Rows, Maximum Limit 1000.                                                    |
| signType         | String(32)     | M                    | signType，`SHA256``MD5`                                                                 |
| sign             | String(256)    | M                    | sign                                                                                   |
| version          | string(64)     | M                    | 1.0，                                                                                   |

## Response Parameters

| Field Name | Required  | Description              |
|:-----------|:----------|:-------------------------|
| clientId   | M         | PingPong  merchant ID    |
| totalSize  | M         | Total number of records. |
| data       | M         | [data]                   |

### data[i] :

| Field Name            | Description                                                                                                                                   |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| accId                 | PingPong merchant store ID                                                                                                                    |
| chargebackId          | chargebackId                                                                                                                                  |
| chargebackType        | chargebackType                                                                                                                                |
| chargebackStatus      | chargebackStatus                                                                                                                              |
| chargebackAmount      | amount                                                                                                                                        |
| chargebackCurrency    | currency                                                                                                                                      |
| reasonType            | reasonType                                                                                                                                    |
| reasonCode            | reasonCode                                                                                                                                    |
| reasonDescription     | Description corresponding to chargeback reason.                                                                                               |
| createDate            | createDate                                                                                                                                    |
| updateDate            | updateDate                                                                                                                                    |
| appealDate            | appealDate                                                                                                                                    |
| cardNo                | Card number, masked to show only the first 6 and last 4 digits.                                                                               |
| cardScheme            | Card Network                                                                                                                                  |
| cardholderName        | Cardholder name.                                                                                                                              |
| transactionTime       | transactionTime                                                                                                                               |
| transactionId         | PingPong transaction serial number                                                                                                            |
| merchantTransactionId | Merchant website order serial number, the unique identifier of the order, which can be used for subsequent order inquiries and reconciliation |
| amount                | amount                                                                                                                                        |
| currency              | currency                                                                                                                                      |
| registerUserEmail     | email                                                                                                                                         |
| shippingphoneNo       | shippingphoneNo                                                                                                                               |
| shippingLastName      | shippingLastName                                                                                                                              |
| shippingFirstName     | shippingFirstName                                                                                                                             |
| storeUrl              | storeUrl                                                                                                                                      |
| goodsName             | goodsName                                                                                                                                     |




