---
title: overview
date: 2022-10-16 14:56:04
permalink: /pages/021707/
---


Subscription payment is a payment collection service that debits the user's authorized payment account according to the agreed period. This collection service is usually used in merchants' membership service subscriptions, periodic commodity consumption, etc.

## Two types of events for subscription services

<div>
    <img :src="$withBase('/v4/recurring/overview.png')">
</div>

Subscriptions require two types of events:
 
+ Cardholder authorization. The confirmation of the subscription plan and the authorization of debiting the payment account require the direct participation of the user.

+ Plan deduction. The periodic deduction will be automatically processed by the system according to the agreed rules.


## Execution of subscription plans

The subscription plan is maintained by the merchant itself, and the automatic deduction is initiated by requesting the PingPongCheckout API.

Subsequent subscription deduction will take effect only after the initial payment is successful.

