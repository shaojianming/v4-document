---
title: Hosted
date: 2022-10-11 14:23:04
permalink: /pages/f90dfd/
---

## Supported checkout rendering methods for Hosted.

<br/>
<v4-Checkout-Hosted></v4-Checkout-Hosted>


## System interaction process for Hosted mode.

<div>
    <div>
        <img :src="$withBase('/v4/checkout/hosted.png')"  alt="跳转模式交互流程"> 
    </div>
</div> 

<br/>
<br/>

<el-card style="background: none;color: var(--textColor);border-color: var(--borderColor)">
<div slot="header">
<h4>The main steps are briefly described below</h4>
</div>
<ol>
<li>The client submits an order to the merchant's server for processing.</li>
<li>The merchant's server requests the PingPongCheckout server, submitting order information and other necessary parameters.</li>
<li>The PingPongCheckout server responds with checkout construction elements.</li>
<li>
The client initializes the checkout.
<ul>
<li>Hosted-JS-SDK: Initialize SDK</li>
<li>Hosted-Redirect：Redirect to PaymentUrl</li>
</ul>
</li>
<li>
The checkout interacts with the PingPongCheckout server and renders the PingPongCheckout checkout after a successful interaction.</li>
<li>The buyer fills in payment information such as card number and CVV and submits the payment information.</li>
<li>The cardholder confirms the payment.</li>
<li>If it is a 3D transaction, 3D verification is also required; otherwise, the transaction result is displayed directly. </li>
<li>For detailed information on obtaining asynchronous notification messages, see <a href="/pages/d0ddb3/" target="_blank" >Asynchronous Notification</a>.</li>
<li>After receiving an asynchronous notification, respond <el-tag>OK</el-tag> to PingPongCheckout.</li>
</ol>
</el-card>

## API List
<br/>
<div>
<a href="/pages/a2c224/" target="_blank">Place Order</a> 
<br/>
<a href="/pages/d0ddb3/" target="_blank">Asynchronous notification</a> 
<br/>
<a href="/pages/67e3c9/" target="_blank">Application for refund</a>    
</div>


## Server access

After the cardholder client requests the merchant server to place an order, it needs to submit necessary parameters to the PingPongCheckout server to place the order
see <a href="/pages/a2c224/" target="_blank">Accept a Payment</a>

## Client access

Server request<a href="/pages/a2c224/" target="_blank"> Accept a Payment </a>After a successful response, the Hosted access mode checkout page can be rendered on the client.

<ul>
<li>
    For instructions on how to initialize the JS-SDK, please visit <a href="/pages/617443/" target="_blank" >Hosted-JS-SDK</a>
</li>
<li>
    For instructions on how to redirect, please visit <a href="/pages/c2df15/" target="_blank" >Hosted-Redirect</a>
</li>
</ul>




## 3DS

In the cashier mode, the 3DS process is internally encapsulated by PingPongCheckout, which does not require additional access by merchants.





