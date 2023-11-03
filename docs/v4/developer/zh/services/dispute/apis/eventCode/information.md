---
title: Getting Request For Information Details Notification
date: 2023-05-06 14:54:43
permalink: /pages/b79e06/
---


## Notification Parameters

| Field Name           | Required | Description                                                  |
|----------------------|----------|--------------------------------------------------------------|
| accId                | M        | PingPong merchant store ID                                   |
| disputePspReference  | M        | Chargeback Order Number                                      |
| merchantReference    | O        | Merchant website order serial number                         |
| originalReference    | O        | PingPong transaction serial number                           |
| chargebackSchemeCode | M        | Card Network                                                 |
| chargebackReasonCode | O        | Chargeback Reason Code                                       |
| defensePeriodEndsAt  | O        | Processing Deadline                                          |
| chargebackStatus     | O        | Chargeback Order Status                                      |
| currency             | M        | currency                                                     |
| amount               | M        | amount                                                       |
| eventCode            | M        | Chargeback Order Processing Progress REQUEST_FOR_INFORMATION |
| eventDate            | M        | Chargeback Order Initiation Time                             |
| paymentMethod        | O        | paymentMethod                                                |
| reason               | O        | Chargeback Order Cause                                       |
| sign                 | M        | sign                                                         |
| signType             | M        | signType `SHA256`                                            |


## Notification example

```json
{
    "accId":"2022102018024210348882",
    "amount":"1",
    "chargebackReasonCode":"12.5",
    "chargebackSchemeCode":"VISA",
    "chargebackStatus":"PENDING",
    "currency":"USD",
    "defensePeriodEndsAt":"2023-03-17 00:00:00",
    "eventCode":"REQUEST_FOR_INFORMATION",
    "eventDate":"2023-03-07 19:54:58",
    "merchantReference":"PShop20230307162139KX",
    "originalReference":"PS23030716214681886",
    "paymentMethod":"VISA",
    "disputePspReference":"202303071954574059",
    "reason":"Incorrect Amount",
    "sign":"945F18AE6372D3E2054068AC3731C55D3A6243D0CB7E855330670B1628CF9C44 ",
    "signType":"SHA256"
}
```