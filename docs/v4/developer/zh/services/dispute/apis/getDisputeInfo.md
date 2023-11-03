---
title: Getting Chargeback Details
date: 2023-05-06 14:54:43
permalink: /pages/59c9c8/
---

## Request Url

<br/>
<div>
<code-group>
  <code-block title="sandbox" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/dispute/getDisputeInfo
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/dispute/getDisputeInfo
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


| Parameter field      | Parameter type | Reduired | description                                                                         |
|----------------------|----------------|----------------------|-------------------------------------------------------------------------------------|
| accId                | string(256)    | M                    | PingPong merchant store ID                                                          |
| eventDateStart       | string(256)    | M                    | Query Start and End Time of the Event, format should be yyyy-MM-dd HH:mm:ss         |
| eventDateEnd         | string(256)    | M                    | Query Start and End Time of the Event, format should be yyyy-MM-dd HH:mm:ss         |
| disputePspReference  | string(256)    | O                    | Chargeback Order Number                                                             |
| chargebackStatus     | string(256)    | O                    | Chargeback Order Status                                                             |
| pageNum              | int            | M                    | pageNum                                                                             |
| pageSize             | int            | M                    | Number of Rows, Maximum Limit 1000.                                                 |
| sign                 | string(256)    | M                    | sign                                                                                |
| signType             | string(32)     | M                    | signType，SHA256                                                                     |
| version              | string(10)     | M                    | Currently fixed at 1.0, may be adjusted with changes to theapiin the future |


## Request Example:

```json
{
  "accId":"2020010710552510100273",
  "eventDateStart":"2022-02-01 00:00:00",
  "eventDateEnd":"2023-03-31 00:00:00",
  "chargebackStatus":"",
  "pageSize":10,
  "pageNum":1,
  "disputePspReference":"",
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

<div><Checkout-dispute-disputeInfoResponseTable></Checkout-dispute-disputeInfoResponseTable></div>




## Response sample

```json
{
  "data":{
    "detailList":[
      {
        "accId":"2020010710552510100273",
        "amount":"4.000000",
        "chargebackReasonCode":"10.4",
        "chargebackSchemeCode":"VISA",
        "chargebackStatus":"PENDING",
        "currency":"CAD",
        "defendable":true,
        "defensePeriodEndsAt":"2023/01/18",
        "disputePspReference":"202301041543183980",
        "eventDate":"2023-01-04 15:43:19",
        "merchantReference":"test1672818064733",
        "originalReference":"PS23010415410654920"
      },
      {
        "accId":"2020010710552510100273",
        "amount":"10.000000",
        "chargebackReasonCode":"10.3",
        "chargebackSchemeCode":"VISA",
        "chargebackStatus":"LOST",
        "currency":"AUD",
        "defendable":false,
        "defensePeriodEndsAt":"2023/01/25",
        "disputePspReference":"202301041542353978",
        "eventDate":"2023-01-04 15:42:36",
        "merchantReference":"test1672818064733",
        "originalReference":"PS23010415410654920"
      }
    ]
  },
  "accId":"2020010710552510100273",
  "sign":"B5A48F7BA5EA86981DBFE3FA14E054D0D0429850BFE9EF4F915D1681 B9EB812F",
  "signType":"SHA256",
  "success":true
}
```