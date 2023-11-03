---
title: Recurring Payment Integration Guide
date: 2022-06-09 09:56:38
permalink: /pages/615d22/
---

## Before Starting the Integration

Before starting, we assume that you have integrated any of the following solutions

<br/>
<a href="/pages/f90dfd/" target="_blank">Hosted</a>
<br/>
<a href="/pages/6c7fd1/" target="_blank">Non-hosted</a>

## Interaction Process

### Cardholder subscription event interaction process

<div>
    <img :src="$withBase('/v4/recurring/authorization.png')">
</div>

<el-card style="background: none;color: var(--textColor);border-color: var(--borderColor)">
<div slot="header">
<h4>Briefly explain the steps for Cardholder Authorization Event as follows</h4>
</div>
<ol>
<li>The client initiates recurring payment to the merchant server.</li>
<li>The merchant server requests the PingPongCheckout server to initiate a transaction marked as recurring payment.</li>
<li>
PingPongCheckout server responds to payment results
<ul>
<li>Payment Successful: Authorization Successful, subsequent scheduled deductions can be initiated.</li>
<li>Payment Failed: Authorization Failed, scheduled deductions cannot be initiated.</li>
</ul>
</li>
</ol>
</el-card>


### Recurring Payment Event Interaction Process.

<div>
    <img :src="$withBase('/v4/recurring/plannedDeduction.png')">
</div>

<el-card style="background: none;color: var(--textColor);border-color: var(--borderColor)">
<div slot="header">
<h4>Here is a brief explanation of the deduction steps again</h4>
</div>
<ol>
<li>The merchant server saves a regular payment plan and deducts payments regularly according to the plan</li>
<li>In order to complete the recurring payment, the merchant server needs to request PingPongCheckout's <a href="/pages/a2c224/" target="_blank">Accept a Payment</a> API, initiate a transaction marked as recurring payment, and provide the merchant order number generated during the authorization process.</li>
<li>
PingPongCheckout server responds to payment results
</li>
</ol>
</el-card>

## API List
<br/>
<div>
<a href="/pages/a2c224/" target="_blank">Accept a Payment</a>
<br/>
<a href="/pages/d0ddb3/" target="_blank">Asynchronous Notification</a> 
<br/>
</div>

## Server Access


### Subscriptions


| Parameter field | Parameter type | Required | Parameter description                          |
|:----------------|:---------------|:---------|:-----------------------------------------------|
| bizType         | String(64)     | M        | Recurring payment flag，fixed value:`Recurring` |

On request<br/><br/>
 <a href="/pages/a2c224/" target="_blank">Create a Payment Intent</a><br/>
 <a href="/pages/a2c224/" target="_blank">Accept a Payment</a><br/>

When adding the parameter 'bizType'='Recurring', mark the current transaction as a recurring transaction


### Entrusted payment

| Parameter field              | Parameter type | Required | Parameter description                                                                                   |
|:-----------------------------|:---------------|:---------|:--------------------------------------------------------------------------------------------------------|
| primaryMerchantTransactionId | String(64)     | M        | The merchant TransactionId in the asynchronous notification during the first successful order placement |
| bizType                      | String(64)     | M        | Recurring payment flag，fixed value:`Recurring`                                                          |

Merchant server request <a href="/pages/a2c224/" target="_blank">Accept a Payment</a><br/>API，Initiate a payment that is insensitive to the cardholder。

- Add parameters `bizType`=`Recurring`，mark the current transaction as a recurring transaction
- Add parameters `primaryMerchantTransactionId`，The value is the `merchantTransactionId` when making the first payment
- The parameter `cardInfo`is replaced by`primaryMerchantTransactionId`and does not need to be passed

