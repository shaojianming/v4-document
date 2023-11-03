---
title: Non-hosted
date: 2022-10-10 12:00:09
permalink: /pages/6c7fd1/
---

>International credit card, abbreviated as Credit Card
> 
>Alternative Payment Method, abbreviated as APM

## International Credit Card Payment

### Access Prerequisites.

1. The merchant has PCI qualifications and has passed the PingPongCheckout verification. (For PCI-DSS, please send the attachment to acquire-risk@pingpongx.com and copy gig-tech-acq@pingpongx.com).

2. The merchant has the ability to develop their own checkout system.


<div>
   <Common-Warring>
      This solution requires the merchant's server to independently store and process cardholder credit card information, therefore mandating PCI-DSS certification for the merchant.
   </Common-Warring>
</div>


### Interaction Process

<img :src="$withBase('/v4/checkout/no-hosted-3d.png')">

<el-card style="background: none;color: var(--textColor);border-color: var(--borderColor)">
<div slot="header">
<h4>The main steps are briefly described below</h4>
</div>
<ol>
<li>After entering the merchant's checkout page, initialize the risk control plugin.</li>
<li>Monitor the card number input box. When the cardholder fills in the card number and the card number changes or the input box loses focus, trigger the initialization event - complexInit.</li>
<li>In the complexInit event, the risk control plugin interacts with the PingPongCheckout server and returns the jsGeneratedData parameter.</li>
<li>
The client submits the order and jsGeneratedData parameters to the merchant server.
</li>
<li>The merchant server requests <a href="/pages/a2c224/" target="_blank"> Accept a Payment </a>,submitting the jsGeneratedData and other parameters together.</li>
<li>
The PingPongCheckout server responds to the request result and determines whether to enter the 3D process based on the return result.
</li>
<li>If no 3D verification is required, the merchant can execute custom logic and display the payment result.</li>
<li>If 3D verification is required
<ol>
<li>trigger the 3D verification event of the risk control plugin. The page will be redirected to the 3D challenge page, and the cardholder needs to fill in the 3D verification information.</li>
<li>The issuer verifies the 3D information.</li>
<li>The issuer responds to the verification results to the PingPongCheckout server.</li>
<li>The page will be redirected to the payment result page filled out by the merchant.</li>
</ol>
<li>The PingPongCheckout server pushes the payment result. For details on how to obtain asynchronous notification messages, see <a href="/pages/d0ddb3/" target="_blank" >Asynchronous Notification</a></li>
</ol>
</el-card>


### API list
<br/>
<div>
<a href="/pages/a2c224/" target="_blank"> Accept a Payment </a> 
<br/>
<a href="/pages/d0ddb3/" target="_blank">Asynchronous notification</a> 
<br/>
<a href="/pages/67e3c9/" target="_blank">Application for refund</a>    
</div>



### Client access

#### Integrating Risk Control Plugin

End-to-end integration requires the risk control JS to collect necessary information for transaction decision-making. After the cardholder enters the card number, the risk control plugin will call the PingPongCheckoutServer API to send the card number data for verification.

see <a href="/pages/c62136/" target="_blank"> 3DS Integration Guide</a>

### Server access

#### Create the order and pay for it

Request Interface<a href="/pages/a2c224/" target="_blank"> Accept a Payment </a>


#### Process Response

After requesting the transaction interface, PingPongCheckout responds with the result based on the request parameters. Merchants should process the transaction based on the response.
"The processing result may be in an intermediate state, so it is necessary to access asynchronous notification to process the transaction status. Please go to <a href="/pages/d0ddb3/" target="_blank" > Asynchronous notification</a>.


## Alternative Payment Method（APM）

### Interaction Process

<img :src="$withBase('/v4/checkout/no-hosted-APM.png')">

::: tip TIPS
Using a non-hosted integration solution to integrate an Alternative Payment Method without the need to store cardholder data, thus eliminating PCI compliance certification requirements.
:::


<el-card style="background: none;color: var(--textColor);border-color: var(--borderColor)">
<div slot="header">
<h4>Please provide a brief description of the main steps below</h4>
</div>
<ol>
<li>Client Places Order</li>
<li>Merchant Server Requests <a href="/pages/a2c224/" target="_blank"> Accept a Payment </a>.</li>
<li>
If the request is successful, PingPongCheckout responds with one of two possible results:
<ul>
<li>QR code: Scan the code as prompted to complete the payment.</li>
<li>URL: Redirect to APM payment channel.</li>
</ul>
</li>
<li>
Complete the payment on the page specified by the APM channel.
</li>
<li>PingPongCheckout To obtain detailed information on how to retrieve the asynchronous notification message when the server pushes the payment result, please refer to the following documentation orapispecifications. These resources may provide specific steps and data structures on how to receive and handle <a href="/pages/d0ddb3/" target="_blank" >asynchronous notifications</a></li>
<li>After receiving the notification，return an appropriate response<el-tag size="mini">OK</el-tag></li>
</ol>
</el-card>


### API list
<br/>
<div>
<a href="/pages/a2c224/" target="_blank">Accept a Payment</a> 
<br/>
<a href="/pages/d0ddb3/" target="_blank">Asynchronous notification</a> 
<br/>
<a href="/pages/67e3c9/" target="_blank">Application for refund</a>    
</div>

### Server access


#### Create the order and pay for it

Requestapi<a href="/pages/a2c224/" target="_blank">Accept a Payment</a>

### Client access

After successful order placement on the server, Different operations are performed based on the response parameters of the <a href="/pages/a2c224/" target="_blank">Accept a Payment</a> interface.

| Parameter          | Description                                        |
|:-------------------|:---------------------------------------------------|
| paymentQrCode      | Display the QR code to complete the payment        |
| paymentRedirectUrl | Redirect to paymentRedirectUrl to complete payment |










