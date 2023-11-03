---
title: Shoplus&PingPongCheckout configuration 
date: 2022-08-12 14:12:10
permalink: /pages/962663/
---

# Shoplus PingPongPay Configuration document


Path to PingPongPay: Settings > Payment Settings > Credit Card Payments > PingPongPay (Direct).

1、Select "Settings" on the homepage to enter the settings interface, and then select "Payment Settings" to enter the payment setting list.

<div>
    <img :src="$withBase('/v4/saas/shoplus/step-1.png')">
</div>

2、The first item in the payment setting list is "Credit Card Payments". Click "Add Payment Method" to enter the list of credit card payments where you can find "PingPongPay".

<div>
    <img :src="$withBase('/v4/saas/shoplus/step-2.png')">
</div>


3、PingPongPay Activation: Click the corresponding activation button, enter ClientID, AccId, Salt, and then click Confirm.

<div>
    <img :src="$withBase('/v4/saas/shoplus/step-3.png')">
</div>

<div>
    <img :src="$withBase('/v4/saas/shoplus/step-4.png')">
</div>


4、After completing the configuration, you need to click "Enable". If another credit card payment method is currently enabled, you will need to disable it first before enabling PingPongPay.

<div>
    <img :src="$withBase('/v4/saas/shoplus/step-5.png')">
</div>


5、Return to the settings list to confirm if credit card payments have been enabled. If not, click "Enable" to complete the configuration.

<div>
    <img :src="$withBase('/v4/saas/shoplus/step-6.png')">
</div>

