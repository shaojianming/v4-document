---
title: Accessing The Secret
date: 2023-04-24 18:38:33
permalink: /pages/fd4ffe/
---

## The purpose of a secret
The secret is the key for PingPong merchants and serves as the credential for invoking the PingPongCheckout API. It must be securely stored and protected against leaks!

## Accessing The Secret
To obtain the secret, you need to complete the registration process as a PingPong merchant，You can refer to the<a href="/pages/7e0356/" target="_blank">registration process</a>。
Once the registration process is completed, you can directly log in to the <a href="https://checkout.pingpongx.com/aq/login" target="_blank">merchant backend</a>，Click on "Key Management" to view the secret key. The specific location is indicated in the screenshot below：

<div>
    <img :src="$withBase('/register/secret.png')">
</div>
<div style="width: 75%;">
    <img :src="$withBase('/register/secretRefresh.png')">
</div>

Here are some important points to note:
>If the secret key is compromised, you can click to view the key and then refresh it. After refreshing, replace the old key with the new one.
