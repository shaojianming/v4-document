---
title: Tokenization Integration Guide
date: 2022-10-16 17:21:48
permalink: /pages/5f7027/
---




## Before Starting the Integration

Before starting, we assume that you have integrated any of the following solutions

<br/>
<a href="/pages/f90dfd/" target="_blank">Hosted</a>
<br/>
<a href="/pages/6c7fd1/" target="_blank">Non-hosted</a>


## Specific Parameters

| Parameter field         | Parameter type | Required | Parameter description                                                                |
|:------------------------|:---------------|:---------|:-------------------------------------------------------------------------------------|
| bizType                 | String(64)     | C        | fixed value:`CardOnFile` (Please contact technical support to use this value)        |
| merchantUserId          | String(64)     | M        | Cardholder ID for merchant website，Globally Unique，Pass `null` when unable to obtain |
| tokenDetail.createToken | String(1)      | M        | `Y`/`N`,Do you want to create a token                                                |
| tokenDetail.token       | String(16)     | M        | card Token                                                                           |



## Make One-off payments process

### Step 1：created card token

<br>
<div style="justify-content:space-between;display: flex">
 <el-card style="max-width: 400px;background: none;color: var(--textColor);border-color: var(--borderColor)">
  <div slot="header" class="clearfix">
    <a href="/pages/abc0f1" target="_blank" >Hosted</a>
  </div>
  <div>
    <span style="display: block">Associated API:</span>
    <a href ="/pages/617443/" target="_blank">Embedded Hosted-JS-SDK</a><br/>or<br/>
    <a href ="/pages/c2df15/" target="_blank">Redirect Hosted Payment Page</a>
   <ul>
    <li>On the checkout page, whether the createToken is<Badge text="Y" vertical="middle" /> ,No need to add special parameters.</li>
    <li>Add request parameters<Badge text="merchantUserId" vertical="middle"/>Identify the current cardholder's identity.</li>
   </ul>
  </div>
</el-card>


<el-card style="max-width: 400px;background: none;color: var(--textColor);border-color: var(--borderColor)">
  <div slot="header" class="clearfix">
    <a href="/pages/14d81d" target="_blank" >Non-Hosted</a>
  </div>
  <div>
    <span style="display: block">Associated API:</span>
    <a href="/pages/a2c224/" target="_blank">Accept a Payment</a>
    <ul>
    <li>Add request parameters<Badge text="tokenDetail.createToken=Y" vertical="middle"/>。</li>
    <li>Add request parameters<Badge text="customer.customerId" vertical="middle"/>，Identify the current cardholder's identity.</li>
    <li>Add request parameters<Badge text="bizType=CardOnFile(可选)" vertical="middle"/></li>
   </ul>
  </div>
</el-card>
</div>


###  Step 2：Set Specific Parameters

- Create a token Only:amount=0 
- Create a token and Pay :amount>0 
- must:bizType=`CardOnFile`。

###  Step 3：Obtain and save the card token

When PingPongCheckout approves your payment request, a card token will be issued in an asynchronous notification



##  Use card token instead of pan payment


<div ><img :src="$withBase('/v4/tokenization/tokenPay.png')"></div>


<el-card style="background: none;color: var(--textColor);border-color: var(--borderColor)">
<div slot="header">
<h4>Here is a brief explanation of the main steps</h4>
</div>
<ol>
<li>Client Place Order</li>
<li>
    Merchant server request<a href="/pages/a2c224/" target="_blank">Accept a Payment</a>API
    <ul>
        <li>Add request parameters<code>tokenDetail.token</code></li>
        <li>Add request parameters<code>bizType=CardOnFile</code></li>
        <li>Token will be used instead of card information, so there is no need to transmit CVV, expiry date, PAN or other card information.</li>
    </ul>
</li>
<li><a href="/pages/a2c224/" target="_blank">Accept a Payment</a> API synchronize response payment results</li>
<li>
Asynchronous notification pushes the final payment result. How to obtain asynchronous notification messages is detailed in<a href="/pages/d0ddb3/" target="_blank" >Asynchronous Notification
</a>
</li>
</ol>
</el-card>




