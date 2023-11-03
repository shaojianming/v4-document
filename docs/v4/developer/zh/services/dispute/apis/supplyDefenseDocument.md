---
title: Information Supplied
date: 2023-05-06 14:54:43
permalink: /pages/8480e7/
---

## Request Url

<br/>
<div>
<code-group>
  <code-block title="sandbox" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/dispute/supplyDefenseDocument
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/dispute/supplyDefenseDocument
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

| Parameter field     | Parameter type | Reduired | description                                                                         |
|---------------------|----------------|----------------------|-------------------------------------------------------------------------------------|
| accId               | string(256)    | M                    | PingPong merchant store ID                                                          |
| eventDateStart      | string(256)    | M                    | Query Start and End Time of the Event, format should be yyyy-MM-dd HH:mm:ss         |
| eventDateEnd        | string(256)    | M                    | Query Start and End Time of the Event, format should be yyyy-MM-dd HH:mm:ss         |
| disputePspReference | string(256)    | O                    | Chargeback Order Number                                                             |
| chargebackStatus    | string(256)    | O                    | Chargeback Order Status                                                             |
| pageNum             | int            | M                    | pageNum                                                                             |
| pageSize            | int            | M                    | Number of Rows, Maximum Limit 1000.                                                 |
| sign                | string(256)    | M                    | sign                                                                                |
| signType            | string(32)     | M                    | signType，`SHA256`                                                                   |
| version             | string(10)     | M                    | Currently fixed at 1.0, may be adjusted with changes to theapiin the future |


## Request Example:

```json
{
    "accId":"2018092714313010016291",
    "eventDateStart":"2023-02-11 00:00:00",
    "eventDateEnd":"2023-03-08 00:00:00",
    "chargebackStatus":"",
    "pageSize":1000,
    "pageNum":1,
    "disputePspReference":"",
    "sign": "{{Sign}}",
    "signType":"SHA256"
    
}
```


##  Response Parameters

<br/>
<el-tag type="danger" effect="dark">Parameter required attribute description:Mandatory (M), optional (O), conditional (C)</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>

| Field Name           | Required | Description                                                                                                     |
|----------------------|----------|-----------------------------------------------------------------------------------------------------------------|
| accId                | M        | PingPong merchant store ID                                                                                      |
| data                 | M        | data                                                                                                            |
| detailList           | M        | detailList                                                                                                      |
| disputePspReference  | M        | Chargeback Order Number                                                                                         |
| chargebackSchemeCode | O        | Card Network                                                                                                    |
| chargebackReasonCode | O        | Chargeback Reason Code                                                                                          |
| defensePeriodEndsAt  | O        | Processing Deadline                                                                                             |
| defendable           | O        | Whether it's Challengeable                                                                                      |
| chargebackStatus     | O        | Chargeback Order Status                                                                                         |
| currency             | O        | currency                                                                                                        |
| amount               | O        | amount                                                                                                          |
| eventDate            | O        | eventDate                                                                                                       |
| merchantReference    | O        | Merchant website order serial number                                                                            |
| originalReference    | O        | PingPong transaction serial number                                                                              |
| sign                 | M        | sign                                                                                                            |
| signType             | M        | signType， “SHA256”                                                                                              |
| success              | M        | true/false                                                                                                      |
| errorCode            | O        | <br/><a href="/pages/8ea994/#%E5%BC%82%E5%B8%B8%E7%BC%96%E7%A0%81%E8%AF%A6%E6%83%85" target="_blank">异常编码详情</a> |
| errorMessage         | O        | Request failure details                                                                                         |


## Response sample

```json
{
    "accId": "2018092714313010016291",
    "data": {
        "detailList": [
            {
                "accId": "2018092714313010016291",
                "amount": "100.000000",
                "chargebackReasonCode": "4807",
                "chargebackSchemeCode": "Mastercard",
                "chargebackStatus": "PENDING",
                "currency": "USD",
                "defendable": true,
                "defensePeriodEndsAt": "2023/04/30",
                "disputePspReference": "202304191417094106",
                "eventDate": "2023-04-19 14:17:09",
                "merchantReference": "PMT-1681883428544",
                "originalReference": "PS23041913502860034"
            },
            {
                "accId": "2018092714313010016291",
                "amount": "100.000000",
                "chargebackReasonCode": "4807",
                "chargebackSchemeCode": "Mastercard",
                "chargebackStatus": "PENDING",
                "currency": "USD",
                "defendable": true,
                "defensePeriodEndsAt": "2023/04/30",
                "disputePspReference": "202304191415234105",
                "eventDate": "2023-04-19 14:15:24",
                "merchantReference": "PMT-1681883428544",
                "originalReference": "PS23041913502860034"
            }
        ]
    },
    "sign": "96A4042D057EB5CBBD8929C13D12C785B5BBCF74A6949CCC28330FE0638F0F5D",
    "signType": "SHA256",
    "success": true
}
```