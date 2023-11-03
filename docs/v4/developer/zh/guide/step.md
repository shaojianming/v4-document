---
title: Product integration service process
date: 2022-10-17 21:02:42
permalink: /pages/5efc32/
---
Before starting to develop and use PingPongCheckout products and solutions, please familiarize yourself with our latest documentation, including developer guides, API references, code examples, etc. The docking process is communicated in the docking group.
<div>
    <img :src="$withBase('/v4/guide/flow.png')" alt="">
</div>


### sandbox account activation

Before starting the integration, you need to obtain a sandbox account for API testing. In order to facilitate the docking process, we will provide a public sandbox account for testing.Of course, you can also choose to log in to PingPong's <a href = "https://sandbox-checkout.pingpongx.com/">PingPong Checkout login</a> and register to obtain a new sandbox account by yourself.
>Note: If it is a sandbox account registered by the merchant itself, the account information needs to be provided to PingPong technical support for some configurations before it can be used.

### Confirm the product integration solution

Before docking, you need to determine your integration plan. We provide multiple ways to integrate our API interface. These range from using pre-built integrations to building your checkoutapifor full control of your checkout experience. We recommend that you make a choice based on your needs and capabilities.For example, in Hosted mode, we provide <a href="/pages/617443/">Hosted-JS-SDK</a> and <a href="/pages/c2df15/">Hosted mode system interaction process</a>. If it is <a href="/pages/6c7fd1/">Non-Hosted mode</a>, you need to provide a PCI certificate first and require your ability to independently develop the checkout interface.

### API authorization and configuration

After completing the sandbox testing, you need to contact PingPong technical support for API authorization and configuration. Before the authorization is completed, the production account is not available. After the API authorization is completed, you can log in to the <a href="https://checkout.pingpongx.com/aq/login">Merchant back office </a>to obtain accId and key, and replace all sandbox environment configurations.

### Production environment docking

After completing the sandbox testing, you will enter the website information review and necessary account configuration phase before entering production. After passing, production environment parameters will be issued. After obtaining the production environment parameters, please complete the following tasks:
<ul>
<li>Replace sandbox environment parameters with production parameters.</li>
<li>Self-test payment and provide screenshot</li>
<li>Prepare a payment link for a $1 product</li>
</ul>

### Production environment verification.
1.Send screenshots and product links, and notify technical support that customer service/operations or technical support will conduct real transaction testing on the product link to verify the results;
</br>2.After completing the real transaction testing, it is necessary for the merchant to initiate a refund to verify the refund process.
</br>3.After completing the above process, the website integration is complete, the payment gateway is officially launched, and payment can be made.
